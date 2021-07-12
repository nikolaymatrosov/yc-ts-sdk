import { BackupServiceService } from 'cloud/mdb/postgresql/v1/backup_service';
import { ClusterServiceService } from 'cloud/mdb/postgresql/v1/cluster_service';
import { DatabaseServiceService } from 'cloud/mdb/postgresql/v1/database_service';
import { ResourcePresetServiceService } from 'cloud/mdb/postgresql/v1/resource_preset_service';
import { UserServiceService } from 'cloud/mdb/postgresql/v1/user_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const BackupServiceDef: SdkServiceDefinition<
    typeof BackupServiceService
> = {
    ...BackupServiceService,
    __endpointId: 'managed-postgresql',
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
    __endpointId: 'managed-postgresql',
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
    __endpointId: 'managed-postgresql',
};

export function DatabaseService(
    session?: Session
): Client<typeof DatabaseServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(DatabaseServiceDef);
}

export const ResourcePresetServiceDef: SdkServiceDefinition<
    typeof ResourcePresetServiceService
> = {
    ...ResourcePresetServiceService,
    __endpointId: 'managed-postgresql',
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
    __endpointId: 'managed-postgresql',
};

export function UserService(
    session?: Session
): Client<typeof UserServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserServiceDef);
}
