"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvokeService = void 0;
/* eslint-disable @typescript-eslint/naming-convention, no-underscore-dangle, id-denylist, id-match */
const node_fetch_1 = __importDefault(require("node-fetch"));
const index_1 = require("../../../index");
function invokeUrl(id) {
    return `https://functions.yandexcloud.net/${id}?integration=raw`;
}
function isErrorMessage(o) {
    return 'errorType' in o && 'errorMessage' in o;
}
async function mapException(response) {
    const data = await response.text();
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const err = JSON.parse(data);
        if (isErrorMessage(err)) {
            return new Error(`${err.errorType}: ${err.errorMessage}`);
        }
    }
    catch (e) {
        // do nothing
    }
    return new Error(`function invocation failed with ${response.status}: ${data}`);
}
class InvokeServiceImpl {
    constructor(address, credentials, options, tokenCreator) {
        this._tokenCreator = tokenCreator;
        this.$method_definitions = {};
    }
    async invoke(functionId, payload) {
        const token = await this._tokenCreator();
        const opts = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        if (payload) {
            opts.body = JSON.stringify(payload);
        }
        const res = await (0, node_fetch_1.default)(invokeUrl(functionId), opts);
        if (!res.ok || (res.headers && res.headers.get('x-function-error'))) {
            throw await mapException(res);
        }
        const data = (await res.buffer()).toString();
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return JSON.parse(data);
        }
        catch (_) {
            return data;
        }
    }
    wrap(functionId) {
        return async (payload) => {
            return await this.invoke(functionId, payload);
        };
    }
}
InvokeServiceImpl.__endpointId = 'serverless-functions';
function InvokeService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.restClient(InvokeServiceImpl);
}
exports.InvokeService = InvokeService;
