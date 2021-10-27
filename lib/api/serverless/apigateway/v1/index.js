"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayService = exports.ApiGatewayServiceDef = void 0;
const apigateway_service_1 = require("../../../../generated/yandex/cloud/serverless/apigateway/v1/apigateway_service");
const index_1 = require("../../../../src/index");
exports.ApiGatewayServiceDef = {
    ...apigateway_service_1.ApiGatewayServiceService,
    __endpointId: 'serverless-apigateway',
};
function ApiGatewayService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ApiGatewayServiceDef);
}
exports.ApiGatewayService = ApiGatewayService;
