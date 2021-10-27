"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionService = exports.FunctionServiceDef = void 0;
const function_service_1 = require("../../../../generated/yandex/cloud/serverless/functions/v1/function_service");
const index_1 = require("../../../../src/index");
exports.FunctionServiceDef = {
    ...function_service_1.FunctionServiceService,
    __endpointId: 'serverless-functions',
};
function FunctionService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.FunctionServiceDef);
}
exports.FunctionService = FunctionService;
