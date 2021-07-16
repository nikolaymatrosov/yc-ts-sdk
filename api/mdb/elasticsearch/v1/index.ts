import { AuthServiceService } from 'cloud/mdb/elasticsearch/v1/auth_service';
import { ClusterServiceService } from 'cloud/mdb/elasticsearch/v1/cluster_service';
import { ResourcePresetServiceService } from 'cloud/mdb/elasticsearch/v1/resource_preset_service';
import { UserServiceService } from 'cloud/mdb/elasticsearch/v1/user_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const AuthServiceDef: SdkServiceDefinition<typeof AuthServiceService> = {
    ...AuthServiceService,
    __endpointId: 'managed-elasticsearch',
};

export function AuthService(
    session?: Session
): Client<typeof AuthServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(AuthServiceDef);
}

export const ClusterServiceDef: SdkServiceDefinition<
    typeof ClusterServiceService
> = {
    ...ClusterServiceService,
    __endpointId: 'managed-elasticsearch',
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
    __endpointId: 'managed-elasticsearch',
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
    __endpointId: 'managed-elasticsearch',
};

export function UserService(
    session?: Session
): Client<typeof UserServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserServiceDef);
}
