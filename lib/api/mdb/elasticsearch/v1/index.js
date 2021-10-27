"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = exports.UserServiceDef = exports.ResourcePresetService = exports.ResourcePresetServiceDef = exports.ClusterService = exports.ClusterServiceDef = exports.AuthService = exports.AuthServiceDef = void 0;
const auth_service_1 = require("../../../../generated/yandex/cloud/mdb/elasticsearch/v1/auth_service");
const cluster_service_1 = require("../../../../generated/yandex/cloud/mdb/elasticsearch/v1/cluster_service");
const resource_preset_service_1 = require("../../../../generated/yandex/cloud/mdb/elasticsearch/v1/resource_preset_service");
const user_service_1 = require("../../../../generated/yandex/cloud/mdb/elasticsearch/v1/user_service");
const index_1 = require("../../../../src/index");
exports.AuthServiceDef = {
    ...auth_service_1.AuthServiceService,
    __endpointId: 'managed-elasticsearch',
};
function AuthService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.AuthServiceDef);
}
exports.AuthService = AuthService;
exports.ClusterServiceDef = {
    ...cluster_service_1.ClusterServiceService,
    __endpointId: 'managed-elasticsearch',
};
function ClusterService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ClusterServiceDef);
}
exports.ClusterService = ClusterService;
exports.ResourcePresetServiceDef = {
    ...resource_preset_service_1.ResourcePresetServiceService,
    __endpointId: 'managed-elasticsearch',
};
function ResourcePresetService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ResourcePresetServiceDef);
}
exports.ResourcePresetService = ResourcePresetService;
exports.UserServiceDef = {
    ...user_service_1.UserServiceService,
    __endpointId: 'managed-elasticsearch',
};
function UserService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.UserServiceDef);
}
exports.UserService = UserService;
