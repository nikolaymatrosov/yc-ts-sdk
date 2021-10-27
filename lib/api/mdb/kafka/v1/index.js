"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = exports.UserServiceDef = exports.TopicService = exports.TopicServiceDef = exports.ResourcePresetService = exports.ResourcePresetServiceDef = exports.ConnectorService = exports.ConnectorServiceDef = exports.ClusterService = exports.ClusterServiceDef = void 0;
const cluster_service_1 = require("../../../../generated/yandex/cloud/mdb/kafka/v1/cluster_service");
const connector_service_1 = require("../../../../generated/yandex/cloud/mdb/kafka/v1/connector_service");
const resource_preset_service_1 = require("../../../../generated/yandex/cloud/mdb/kafka/v1/resource_preset_service");
const topic_service_1 = require("../../../../generated/yandex/cloud/mdb/kafka/v1/topic_service");
const user_service_1 = require("../../../../generated/yandex/cloud/mdb/kafka/v1/user_service");
const index_1 = require("../../../../src/index");
exports.ClusterServiceDef = {
    ...cluster_service_1.ClusterServiceService,
    __endpointId: 'managed-kafka',
};
function ClusterService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ClusterServiceDef);
}
exports.ClusterService = ClusterService;
exports.ConnectorServiceDef = {
    ...connector_service_1.ConnectorServiceService,
    __endpointId: 'managed-kafka',
};
function ConnectorService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ConnectorServiceDef);
}
exports.ConnectorService = ConnectorService;
exports.ResourcePresetServiceDef = {
    ...resource_preset_service_1.ResourcePresetServiceService,
    __endpointId: 'managed-kafka',
};
function ResourcePresetService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ResourcePresetServiceDef);
}
exports.ResourcePresetService = ResourcePresetService;
exports.TopicServiceDef = {
    ...topic_service_1.TopicServiceService,
    __endpointId: 'managed-kafka',
};
function TopicService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.TopicServiceDef);
}
exports.TopicService = TopicService;
exports.UserServiceDef = {
    ...user_service_1.UserServiceService,
    __endpointId: 'managed-kafka',
};
function UserService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.UserServiceDef);
}
exports.UserService = UserService;
