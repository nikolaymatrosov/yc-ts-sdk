import { ClusterServiceService } from '../../../../generated/yandex/cloud/mdb/kafka/v1/cluster_service';
import { ResourcePresetServiceService } from '../../../../generated/yandex/cloud/mdb/kafka/v1/resource_preset_service';
import { TopicServiceService } from '../../../../generated/yandex/cloud/mdb/kafka/v1/topic_service';
import { UserServiceService } from '../../../../generated/yandex/cloud/mdb/kafka/v1/user_service';
import { Session } from '../../../../src/index';
export const ClusterServiceDef = {
    ...ClusterServiceService,
    __endpointId: 'managed-kafka',
};
export function ClusterService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}
export const ResourcePresetServiceDef = {
    ...ResourcePresetServiceService,
    __endpointId: 'managed-kafka',
};
export function ResourcePresetService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}
export const TopicServiceDef = {
    ...TopicServiceService,
    __endpointId: 'managed-kafka',
};
export function TopicService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(TopicServiceDef);
}
export const UserServiceDef = {
    ...UserServiceService,
    __endpointId: 'managed-kafka',
};
export function UserService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserServiceDef);
}
