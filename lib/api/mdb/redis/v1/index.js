import { BackupServiceService } from '../../../../generated/yandex/cloud/mdb/redis/v1/backup_service';
import { ClusterServiceService } from '../../../../generated/yandex/cloud/mdb/redis/v1/cluster_service';
import { ResourcePresetServiceService } from '../../../../generated/yandex/cloud/mdb/redis/v1/resource_preset_service';
import { Session } from 'src';
export const BackupServiceDef = {
    ...BackupServiceService,
    __endpointId: 'managed-redis',
};
export function BackupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(BackupServiceDef);
}
export const ClusterServiceDef = {
    ...ClusterServiceService,
    __endpointId: 'managed-redis',
};
export function ClusterService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}
export const ResourcePresetServiceDef = {
    ...ResourcePresetServiceService,
    __endpointId: 'managed-redis',
};
export function ResourcePresetService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}
