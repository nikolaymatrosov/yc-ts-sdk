/* tslint:disable:variable-name */
import { Session, TokenCreator } from 'src/index';

import fetch, { RequestInit, Response } from 'node-fetch';

function invokeUrl(id: string) {
    return `https://functions.yandexcloud.net/${id}?integration=raw`;
}

async function mapException(response: Response) {
    const data = await response.text();
    try {
        const err = JSON.parse(data);
        if (err.errorType && err.errorMessage) {
            return new Error(`${err.errorType}: ${err.errorMessage}`);
        }
    } catch (e) {
        // do nothing
    }
    return new Error(`function invocation failed with ${response.status}: ${data}`);
}

class InvokeServiceImpl {
    static __endpointId = 'serverless-functions';
    $method_definitions: {};
    private readonly _tokenCreator: any;

    constructor(address: string, credentials: any, options: any, tokenCreator: TokenCreator) {
        this._tokenCreator = tokenCreator;
        this.$method_definitions = {};
    }

    async invoke(functionId: string, payload?: any): Promise<object | string> {
        const token = await this._tokenCreator();
        const opts: RequestInit = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        if (payload) {
            opts.body = JSON.stringify(payload);
        }

        const res = await fetch(invokeUrl(functionId), opts);
        if (!res.ok || (res.headers && res.headers.get('x-function-error'))) {
            throw await mapException(res);
        }

        const data = (await res.buffer()).toString();
        try {
            return JSON.parse(data);
        } catch (_) {
            return data;
        }
    }

    wrap(functionId: string): (payload?: any) => Promise<object | string> {
        return async (payload) => {
            return await this.invoke(functionId, payload);
        };
    }
}

export function InvokeService(session?: Session) {
    if (session === undefined) {
        session = new Session();
    }

    return session.restClient(InvokeServiceImpl);
}
