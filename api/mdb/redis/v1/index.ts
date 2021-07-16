import { BackupServiceService } from 'cloud/mdb/redis/v1/backup_service';
import { ClusterServiceService } from 'cloud/mdb/redis/v1/cluster_service';
import { ResourcePresetServiceService } from 'cloud/mdb/redis/v1/resource_preset_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const BackupServiceDef: SdkServiceDefinition<
    typeof BackupServiceService
> = {
    ...BackupServiceService,
    __endpointId: 'managed-redis',
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
    __endpointId: 'managed-redis',
};

export function ClusterService(
    session?: Session
): Client<typeof ClusterServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}

export const ResourcePresetServiceDef: SdkServiceDefinition<
    typeof ResourcePresetServiceService
> = {
    ...ResourcePresetServiceService,
    __endpointId: 'managed-redis',
};

export function ResourcePresetService(
    session?: Session
): Client<typeof ResourcePresetServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}
