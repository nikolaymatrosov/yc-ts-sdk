import { ClusterServiceService } from 'cloud/mdb/kafka/v1/cluster_service';
import { ResourcePresetServiceService } from 'cloud/mdb/kafka/v1/resource_preset_service';
import { TopicServiceService } from 'cloud/mdb/kafka/v1/topic_service';
import { UserServiceService } from 'cloud/mdb/kafka/v1/user_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const ClusterServiceDef: SdkServiceDefinition<
    typeof ClusterServiceService
> = {
    ...ClusterServiceService,
    __endpointId: 'managed-kafka',
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
    __endpointId: 'managed-kafka',
};

export function ResourcePresetService(
    session?: Session
): Client<typeof ResourcePresetServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}

export const TopicServiceDef: SdkServiceDefinition<typeof TopicServiceService> =
    {
        ...TopicServiceService,
        __endpointId: 'managed-kafka',
    };

export function TopicService(
    session?: Session
): Client<typeof TopicServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(TopicServiceDef);
}

export const UserServiceDef: SdkServiceDefinition<typeof UserServiceService> = {
    ...UserServiceService,
    __endpointId: 'managed-kafka',
};

export function UserService(
    session?: Session
): Client<typeof UserServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserServiceDef);
}
