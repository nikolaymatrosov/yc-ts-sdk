import { BackupServiceService } from '../../../../generated/yandex/cloud/mdb/clickhouse/v1/backup_service';
import { ClusterServiceService } from '../../../../generated/yandex/cloud/mdb/clickhouse/v1/cluster_service';
import { DatabaseServiceService } from '../../../../generated/yandex/cloud/mdb/clickhouse/v1/database_service';
import { FormatSchemaServiceService } from '../../../../generated/yandex/cloud/mdb/clickhouse/v1/format_schema_service';
import { MlModelServiceService } from '../../../../generated/yandex/cloud/mdb/clickhouse/v1/ml_model_service';
import { ResourcePresetServiceService } from '../../../../generated/yandex/cloud/mdb/clickhouse/v1/resource_preset_service';
import { UserServiceService } from '../../../../generated/yandex/cloud/mdb/clickhouse/v1/user_service';
import { VersionsServiceService } from '../../../../generated/yandex/cloud/mdb/clickhouse/v1/versions_service';
import { Session } from '../../../../src/index';
export const BackupServiceDef = {
    ...BackupServiceService,
    __endpointId: 'managed-clickhouse',
};
export function BackupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BackupServiceDef);
}
export const ClusterServiceDef = {
    ...ClusterServiceService,
    __endpointId: 'managed-clickhouse',
};
export function ClusterService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}
export const DatabaseServiceDef = {
    ...DatabaseServiceService,
    __endpointId: 'managed-clickhouse',
};
export function DatabaseService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DatabaseServiceDef);
}
export const FormatSchemaServiceDef = {
    ...FormatSchemaServiceService,
    __endpointId: 'managed-clickhouse',
};
export function FormatSchemaService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(FormatSchemaServiceDef);
}
export const MlModelServiceDef = {
    ...MlModelServiceService,
    __endpointId: 'managed-clickhouse',
};
export function MlModelService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(MlModelServiceDef);
}
export const ResourcePresetServiceDef = {
    ...ResourcePresetServiceService,
    __endpointId: 'managed-clickhouse',
};
export function ResourcePresetService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}
export const UserServiceDef = {
    ...UserServiceService,
    __endpointId: 'managed-clickhouse',
};
export function UserService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserServiceDef);
}
export const VersionsServiceDef = {
    ...VersionsServiceService,
    __endpointId: 'managed-clickhouse',
};
export function VersionsService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(VersionsServiceDef);
}
