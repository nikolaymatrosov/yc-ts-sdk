import { BackupServiceService } from 'cloud/mdb/clickhouse/v1/backup_service';
import { ClusterServiceService } from 'cloud/mdb/clickhouse/v1/cluster_service';
import { DatabaseServiceService } from 'cloud/mdb/clickhouse/v1/database_service';
import { FormatSchemaServiceService } from 'cloud/mdb/clickhouse/v1/format_schema_service';
import { MlModelServiceService } from 'cloud/mdb/clickhouse/v1/ml_model_service';
import { ResourcePresetServiceService } from 'cloud/mdb/clickhouse/v1/resource_preset_service';
import { UserServiceService } from 'cloud/mdb/clickhouse/v1/user_service';
import { VersionsServiceService } from 'cloud/mdb/clickhouse/v1/versions_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const BackupServiceDef: SdkServiceDefinition<
    typeof BackupServiceService
> = {
    ...BackupServiceService,
    __endpointId: 'managed-clickhouse',
};

export function BackupService(
    session?: Session
): Client<typeof BackupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BackupServiceDef);
}

export const ClusterServiceDef: SdkServiceDefinition<
    typeof ClusterServiceService
> = {
    ...ClusterServiceService,
    __endpointId: 'managed-clickhouse',
};

export function ClusterService(
    session?: Session
): Client<typeof ClusterServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}

export const DatabaseServiceDef: SdkServiceDefinition<
    typeof DatabaseServiceService
> = {
    ...DatabaseServiceService,
    __endpointId: 'managed-clickhouse',
};

export function DatabaseService(
    session?: Session
): Client<typeof DatabaseServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DatabaseServiceDef);
}

export const FormatSchemaServiceDef: SdkServiceDefinition<
    typeof FormatSchemaServiceService
> = {
    ...FormatSchemaServiceService,
    __endpointId: 'managed-clickhouse',
};

export function FormatSchemaService(
    session?: Session
): Client<typeof FormatSchemaServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(FormatSchemaServiceDef);
}

export const MlModelServiceDef: SdkServiceDefinition<
    typeof MlModelServiceService
> = {
    ...MlModelServiceService,
    __endpointId: 'managed-clickhouse',
};

export function MlModelService(
    session?: Session
): Client<typeof MlModelServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(MlModelServiceDef);
}

export const ResourcePresetServiceDef: SdkServiceDefinition<
    typeof ResourcePresetServiceService
> = {
    ...ResourcePresetServiceService,
    __endpointId: 'managed-clickhouse',
};

export function ResourcePresetService(
    session?: Session
): Client<typeof ResourcePresetServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}

export const UserServiceDef: SdkServiceDefinition<typeof UserServiceService> = {
    ...UserServiceService,
    __endpointId: 'managed-clickhouse',
};

export function UserService(
    session?: Session
): Client<typeof UserServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserServiceDef);
}

export const VersionsServiceDef: SdkServiceDefinition<
    typeof VersionsServiceService
> = {
    ...VersionsServiceService,
    __endpointId: 'managed-clickhouse',
};

export function VersionsService(
    session?: Session
): Client<typeof VersionsServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(VersionsServiceDef);
}
