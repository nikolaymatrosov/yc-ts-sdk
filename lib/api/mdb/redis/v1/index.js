"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePresetService = exports.ResourcePresetServiceDef = exports.ClusterService = exports.ClusterServiceDef = exports.BackupService = exports.BackupServiceDef = void 0;
const backup_service_1 = require("../../../../generated/yandex/cloud/mdb/redis/v1/backup_service");
const cluster_service_1 = require("../../../../generated/yandex/cloud/mdb/redis/v1/cluster_service");
const resource_preset_service_1 = require("../../../../generated/yandex/cloud/mdb/redis/v1/resource_preset_service");
const index_1 = require("../../../../src/index");
exports.BackupServiceDef = {
    ...backup_service_1.BackupServiceService,
    __endpointId: 'managed-redis',
};
function BackupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.BackupServiceDef);
}
exports.BackupService = BackupService;
exports.ClusterServiceDef = {
    ...cluster_service_1.ClusterServiceService,
    __endpointId: 'managed-redis',
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
    __endpointId: 'managed-redis',
};
function ResourcePresetService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ResourcePresetServiceDef);
}
exports.ResourcePresetService = ResourcePresetService;
