"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionService = exports.VersionServiceDef = exports.NodeGroupService = exports.NodeGroupServiceDef = exports.ClusterService = exports.ClusterServiceDef = void 0;
const cluster_service_1 = require("../../../generated/yandex/cloud/k8s/v1/cluster_service");
const node_group_service_1 = require("../../../generated/yandex/cloud/k8s/v1/node_group_service");
const version_service_1 = require("../../../generated/yandex/cloud/k8s/v1/version_service");
const index_1 = require("../../../src/index");
exports.ClusterServiceDef = {
    ...cluster_service_1.ClusterServiceService,
    __endpointId: 'managed-kubernetes',
};
function ClusterService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ClusterServiceDef);
}
exports.ClusterService = ClusterService;
exports.NodeGroupServiceDef = {
    ...node_group_service_1.NodeGroupServiceService,
    __endpointId: 'managed-kubernetes',
};
function NodeGroupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.NodeGroupServiceDef);
}
exports.NodeGroupService = NodeGroupService;
exports.VersionServiceDef = {
    ...version_service_1.VersionServiceService,
    __endpointId: 'managed-kubernetes',
};
function VersionService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.VersionServiceDef);
}
exports.VersionService = VersionService;
