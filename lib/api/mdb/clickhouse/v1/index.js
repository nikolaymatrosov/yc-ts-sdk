"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionsService = exports.VersionsServiceDef = exports.UserService = exports.UserServiceDef = exports.ResourcePresetService = exports.ResourcePresetServiceDef = exports.MlModelService = exports.MlModelServiceDef = exports.FormatSchemaService = exports.FormatSchemaServiceDef = exports.DatabaseService = exports.DatabaseServiceDef = exports.ClusterService = exports.ClusterServiceDef = exports.BackupService = exports.BackupServiceDef = void 0;
const backup_service_1 = require("../../../../generated/yandex/cloud/mdb/clickhouse/v1/backup_service");
const cluster_service_1 = require("../../../../generated/yandex/cloud/mdb/clickhouse/v1/cluster_service");
const database_service_1 = require("../../../../generated/yandex/cloud/mdb/clickhouse/v1/database_service");
const format_schema_service_1 = require("../../../../generated/yandex/cloud/mdb/clickhouse/v1/format_schema_service");
const ml_model_service_1 = require("../../../../generated/yandex/cloud/mdb/clickhouse/v1/ml_model_service");
const resource_preset_service_1 = require("../../../../generated/yandex/cloud/mdb/clickhouse/v1/resource_preset_service");
const user_service_1 = require("../../../../generated/yandex/cloud/mdb/clickhouse/v1/user_service");
const versions_service_1 = require("../../../../generated/yandex/cloud/mdb/clickhouse/v1/versions_service");
const index_1 = require("../../../../src/index");
exports.BackupServiceDef = {
    ...backup_service_1.BackupServiceService,
    __endpointId: 'managed-clickhouse',
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
    __endpointId: 'managed-clickhouse',
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
    __endpointId: 'managed-clickhouse',
};
function DatabaseService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.DatabaseServiceDef);
}
exports.DatabaseService = DatabaseService;
exports.FormatSchemaServiceDef = {
    ...format_schema_service_1.FormatSchemaServiceService,
    __endpointId: 'managed-clickhouse',
};
function FormatSchemaService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.FormatSchemaServiceDef);
}
exports.FormatSchemaService = FormatSchemaService;
exports.MlModelServiceDef = {
    ...ml_model_service_1.MlModelServiceService,
    __endpointId: 'managed-clickhouse',
};
function MlModelService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.MlModelServiceDef);
}
exports.MlModelService = MlModelService;
exports.ResourcePresetServiceDef = {
    ...resource_preset_service_1.ResourcePresetServiceService,
    __endpointId: 'managed-clickhouse',
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
    __endpointId: 'managed-clickhouse',
};
function UserService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.UserServiceDef);
}
exports.UserService = UserService;
exports.VersionsServiceDef = {
    ...versions_service_1.VersionsServiceService,
    __endpointId: 'managed-clickhouse',
};
function VersionsService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.VersionsServiceDef);
}
exports.VersionsService = VersionsService;
