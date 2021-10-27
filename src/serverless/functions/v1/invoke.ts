/* eslint-disable @typescript-eslint/naming-convention, no-underscore-dangle, id-denylist, id-match */
import fetch, { RequestInit, Response } from 'node-fetch';
import { Session, TokenCreator } from 'src/index';

function invokeUrl(id: string) {
    return `https://functions.yandexcloud.net/${id}?integration=raw`;
}

type ErrorMessage = { errorType: string, errorMessage: string }

function isErrorMessage(o: any): o is ErrorMessage {
    return 'errorType' in o && 'errorMessage' in o;
}

async function mapException(response: Response) {
    const data = await response.text();
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const err = JSON.parse(data);
        if (isErrorMessage(err)) {
            return new Error(`${err.errorType}: ${err.errorMessage}`);
        }
    } catch (e) {
        // do nothing
    }
    return new Error(
        `function invocation failed with ${response.status}: ${data}`,
    );
}

class InvokeServiceImpl {
    static __endpointId = 'serverless-functions';
    $method_definitions: unknown;
    private readonly _tokenCreator: TokenCreator;

    constructor(
        address: string,
        credentials: any,
        options: any,
        tokenCreator: TokenCreator,
    ) {
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
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
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
