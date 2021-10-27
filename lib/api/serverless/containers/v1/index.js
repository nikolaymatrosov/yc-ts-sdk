"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerService = exports.ContainerServiceDef = void 0;
const container_service_1 = require("../../../../generated/yandex/cloud/serverless/containers/v1/container_service");
const index_1 = require("../../../../src/index");
exports.ContainerServiceDef = {
    ...container_service_1.ContainerServiceService,
    __endpointId: 'serverless-containers',
};
function ContainerService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ContainerServiceDef);
}
exports.ContainerService = ContainerService;
