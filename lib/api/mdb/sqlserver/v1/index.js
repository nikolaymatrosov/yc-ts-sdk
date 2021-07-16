import { BackupServiceService } from '../../../../generated/yandex/cloud/mdb/sqlserver/v1/backup_service';
import { ClusterServiceService } from '../../../../generated/yandex/cloud/mdb/sqlserver/v1/cluster_service';
import { DatabaseServiceService } from '../../../../generated/yandex/cloud/mdb/sqlserver/v1/database_service';
import { ResourcePresetServiceService } from '../../../../generated/yandex/cloud/mdb/sqlserver/v1/resource_preset_service';
import { UserServiceService } from '../../../../generated/yandex/cloud/mdb/sqlserver/v1/user_service';
import { Session } from '../../../../src/index';
export const BackupServiceDef = {
    ...BackupServiceService,
    __endpointId: 'managed-sqlserver',
};
export function BackupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BackupServiceDef);
}
export const ClusterServiceDef = {
    ...ClusterServiceService,
    __endpointId: 'managed-sqlserver',
};
export function ClusterService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}
export const DatabaseServiceDef = {
    ...DatabaseServiceService,
    __endpointId: 'managed-sqlserver',
};
export function DatabaseService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DatabaseServiceDef);
}
export const ResourcePresetServiceDef = {
    ...ResourcePresetServiceService,
    __endpointId: 'managed-sqlserver',
};
export function ResourcePresetService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}
export const UserServiceDef = {
    ...UserServiceService,
    __endpointId: 'managed-sqlserver',
};
export function UserService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserServiceDef);
}
