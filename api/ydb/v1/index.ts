import { BackupServiceService } from 'cloud/ydb/v1/backup_service';
import { DatabaseServiceService } from 'cloud/ydb/v1/database_service';
import { LocationServiceService } from 'cloud/ydb/v1/location_service';
import { ResourcePresetServiceService } from 'cloud/ydb/v1/resource_preset_service';
import { StorageTypeServiceService } from 'cloud/ydb/v1/storage_type_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const BackupServiceDef: SdkServiceDefinition<
    typeof BackupServiceService
> = {
    ...BackupServiceService,
    __endpointId: 'ydb',
};

export function BackupService(
    session?: Session
): Client<typeof BackupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BackupServiceDef);
}

export const DatabaseServiceDef: SdkServiceDefinition<
    typeof DatabaseServiceService
> = {
    ...DatabaseServiceService,
    __endpointId: 'ydb',
};

export function DatabaseService(
    session?: Session
): Client<typeof DatabaseServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DatabaseServiceDef);
}

export const LocationServiceDef: SdkServiceDefinition<
    typeof LocationServiceService
> = {
    ...LocationServiceService,
    __endpointId: 'ydb',
};

export function LocationService(
    session?: Session
): Client<typeof LocationServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(LocationServiceDef);
}

export const ResourcePresetServiceDef: SdkServiceDefinition<
    typeof ResourcePresetServiceService
> = {
    ...ResourcePresetServiceService,
    __endpointId: 'ydb',
};

export function ResourcePresetService(
    session?: Session
): Client<typeof ResourcePresetServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}

export const StorageTypeServiceDef: SdkServiceDefinition<
    typeof StorageTypeServiceService
> = {
    ...StorageTypeServiceService,
    __endpointId: 'ydb',
};

export function StorageTypeService(
    session?: Session
): Client<typeof StorageTypeServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(StorageTypeServiceDef);
}
