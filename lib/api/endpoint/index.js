"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiEndpointService = exports.ApiEndpointServiceDef = void 0;
const api_endpoint_service_1 = require("../../generated/yandex/cloud/endpoint/api_endpoint_service");
const index_1 = require("../../src/index");
exports.ApiEndpointServiceDef = {
    ...api_endpoint_service_1.ApiEndpointServiceService,
    __endpointId: 'endpoint',
};
function ApiEndpointService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ApiEndpointServiceDef);
}
exports.ApiEndpointService = ApiEndpointService;
