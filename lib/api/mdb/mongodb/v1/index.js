import { BackupServiceService } from '../../../../generated/yandex/cloud/mdb/mongodb/v1/backup_service';
import { ClusterServiceService } from '../../../../generated/yandex/cloud/mdb/mongodb/v1/cluster_service';
import { DatabaseServiceService } from '../../../../generated/yandex/cloud/mdb/mongodb/v1/database_service';
import { ResourcePresetServiceService } from '../../../../generated/yandex/cloud/mdb/mongodb/v1/resource_preset_service';
import { UserServiceService } from '../../../../generated/yandex/cloud/mdb/mongodb/v1/user_service';
import { Session } from 'src';
export const BackupServiceDef = {
    ...BackupServiceService,
    __endpointId: 'managed-mongodb',
};
export function BackupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BackupServiceDef);
}
export const ClusterServiceDef = {
    ...ClusterServiceService,
    __endpointId: 'managed-mongodb',
};
export function ClusterService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}
export const DatabaseServiceDef = {
    ...DatabaseServiceService,
    __endpointId: 'managed-mongodb',
};
export function DatabaseService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DatabaseServiceDef);
}
export const ResourcePresetServiceDef = {
    ...ResourcePresetServiceService,
    __endpointId: 'managed-mongodb',
};
export function ResourcePresetService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}
export const UserServiceDef = {
    ...UserServiceService,
    __endpointId: 'managed-mongodb',
};
export function UserService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserServiceDef);
}
