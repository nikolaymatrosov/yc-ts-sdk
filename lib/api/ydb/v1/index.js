"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageTypeService = exports.StorageTypeServiceDef = exports.ResourcePresetService = exports.ResourcePresetServiceDef = exports.LocationService = exports.LocationServiceDef = exports.DatabaseService = exports.DatabaseServiceDef = exports.BackupService = exports.BackupServiceDef = void 0;
const backup_service_1 = require("../../../generated/yandex/cloud/ydb/v1/backup_service");
const database_service_1 = require("../../../generated/yandex/cloud/ydb/v1/database_service");
const location_service_1 = require("../../../generated/yandex/cloud/ydb/v1/location_service");
const resource_preset_service_1 = require("../../../generated/yandex/cloud/ydb/v1/resource_preset_service");
const storage_type_service_1 = require("../../../generated/yandex/cloud/ydb/v1/storage_type_service");
const index_1 = require("../../../src/index");
exports.BackupServiceDef = {
    ...backup_service_1.BackupServiceService,
    __endpointId: 'ydb',
};
function BackupService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.BackupServiceDef);
}
exports.BackupService = BackupService;
exports.DatabaseServiceDef = {
    ...database_service_1.DatabaseServiceService,
    __endpointId: 'ydb',
};
function DatabaseService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.DatabaseServiceDef);
}
exports.DatabaseService = DatabaseService;
exports.LocationServiceDef = {
    ...location_service_1.LocationServiceService,
    __endpointId: 'ydb',
};
function LocationService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.LocationServiceDef);
}
exports.LocationService = LocationService;
exports.ResourcePresetServiceDef = {
    ...resource_preset_service_1.ResourcePresetServiceService,
    __endpointId: 'ydb',
};
function ResourcePresetService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ResourcePresetServiceDef);
}
exports.ResourcePresetService = ResourcePresetService;
exports.StorageTypeServiceDef = {
    ...storage_type_service_1.StorageTypeServiceService,
    __endpointId: 'ydb',
};
function StorageTypeService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.StorageTypeServiceDef);
}
exports.StorageTypeService = StorageTypeService;
