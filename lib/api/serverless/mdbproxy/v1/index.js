"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyService = exports.ProxyServiceDef = void 0;
const proxy_service_1 = require("../../../../generated/yandex/cloud/serverless/mdbproxy/v1/proxy_service");
const index_1 = require("../../../../src/index");
exports.ProxyServiceDef = {
    ...proxy_service_1.ProxyServiceService,
    __endpointId: 'mdbproxy',
};
function ProxyService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ProxyServiceDef);
}
exports.ProxyService = ProxyService;
