"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = exports.UserServiceDef = exports.ResourcePresetService = exports.ResourcePresetServiceDef = exports.DatabaseService = exports.DatabaseServiceDef = exports.ClusterService = exports.ClusterServiceDef = exports.BackupService = exports.BackupServiceDef = void 0;
const backup_service_1 = require("../../../../generated/yandex/cloud/mdb/mongodb/v1/backup_service");
const cluster_service_1 = require("../../../../generated/yandex/cloud/mdb/mongodb/v1/cluster_service");
const database_service_1 = require("../../../../generated/yandex/cloud/mdb/mongodb/v1/database_service");
const resource_preset_service_1 = require("../../../../generated/yandex/cloud/mdb/mongodb/v1/resource_preset_service");
const user_service_1 = require("../../../../generated/yandex/cloud/mdb/mongodb/v1/user_service");
const index_1 = require("../../../../src/index");
exports.BackupServiceDef = {
    ...backup_service_1.BackupServiceService,
    __endpointId: 'managed-mongodb',
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
    __endpointId: 'managed-mongodb',
};
function ClusterService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ClusterServiceDef);
}
exports.ClusterService = ClusterService;
exports.DatabaseServiceDef = {
    ...database_service_1.DatabaseServiceService,
    __endpointId: 'managed-mongodb',
};
function DatabaseService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.DatabaseServiceDef);
}
exports.DatabaseService = DatabaseService;
exports.ResourcePresetServiceDef = {
    ...resource_preset_service_1.ResourcePresetServiceService,
    __endpointId: 'managed-mongodb',
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
    __endpointId: 'managed-mongodb',
};
function UserService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.UserServiceDef);
}
exports.UserService = UserService;
