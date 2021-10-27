"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = exports.ProjectServiceDef = exports.NodeService = exports.NodeServiceDef = exports.AppTokenService = exports.AppTokenServiceDef = void 0;
const app_token_service_1 = require("../../../generated/yandex/cloud/datasphere/v1/app_token_service");
const node_service_1 = require("../../../generated/yandex/cloud/datasphere/v1/node_service");
const project_service_1 = require("../../../generated/yandex/cloud/datasphere/v1/project_service");
const index_1 = require("../../../src/index");
exports.AppTokenServiceDef = {
    ...app_token_service_1.AppTokenServiceService,
    __endpointId: 'datasphere',
};
function AppTokenService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.AppTokenServiceDef);
}
exports.AppTokenService = AppTokenService;
exports.NodeServiceDef = {
    ...node_service_1.NodeServiceService,
    __endpointId: 'datasphere',
};
function NodeService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.NodeServiceDef);
}
exports.NodeService = NodeService;
exports.ProjectServiceDef = {
    ...project_service_1.ProjectServiceService,
    __endpointId: 'datasphere',
};
function ProjectService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ProjectServiceDef);
}
exports.ProjectService = ProjectService;
