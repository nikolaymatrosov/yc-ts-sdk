import { BackupServiceService } from '../../../generated/yandex/cloud/ydb/v1/backup_service';
import { DatabaseServiceService } from '../../../generated/yandex/cloud/ydb/v1/database_service';
import { LocationServiceService } from '../../../generated/yandex/cloud/ydb/v1/location_service';
import { ResourcePresetServiceService } from '../../../generated/yandex/cloud/ydb/v1/resource_preset_service';
import { StorageTypeServiceService } from '../../../generated/yandex/cloud/ydb/v1/storage_type_service';
import { Session } from 'src';
export const BackupServiceDef = {
    ...BackupServiceService,
    __endpointId: 'ydb',
};
export function BackupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BackupServiceDef);
}
export const DatabaseServiceDef = {
    ...DatabaseServiceService,
    __endpointId: 'ydb',
};
export function DatabaseService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DatabaseServiceDef);
}
export const LocationServiceDef = {
    ...LocationServiceService,
    __endpointId: 'ydb',
};
export function LocationService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LocationServiceDef);
}
export const ResourcePresetServiceDef = {
    ...ResourcePresetServiceService,
    __endpointId: 'ydb',
};
export function ResourcePresetService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}
export const StorageTypeServiceDef = {
    ...StorageTypeServiceService,
    __endpointId: 'ydb',
};
export function StorageTypeService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(StorageTypeServiceDef);
}
