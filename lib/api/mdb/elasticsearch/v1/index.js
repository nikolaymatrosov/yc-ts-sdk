import { AuthServiceService } from '../../../../generated/yandex/cloud/mdb/elasticsearch/v1/auth_service';
import { ClusterServiceService } from '../../../../generated/yandex/cloud/mdb/elasticsearch/v1/cluster_service';
import { ResourcePresetServiceService } from '../../../../generated/yandex/cloud/mdb/elasticsearch/v1/resource_preset_service';
import { UserServiceService } from '../../../../generated/yandex/cloud/mdb/elasticsearch/v1/user_service';
import { Session } from '../../../../src/index';
export const AuthServiceDef = {
    ...AuthServiceService,
    __endpointId: 'managed-elasticsearch',
};
export function AuthService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(AuthServiceDef);
}
export const ClusterServiceDef = {
    ...ClusterServiceService,
    __endpointId: 'managed-elasticsearch',
};
export function ClusterService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}
export const ResourcePresetServiceDef = {
    ...ResourcePresetServiceService,
    __endpointId: 'managed-elasticsearch',
};
export function ResourcePresetService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ResourcePresetServiceDef);
}
export const UserServiceDef = {
    ...UserServiceService,
    __endpointId: 'managed-elasticsearch',
};
export function UserService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserServiceDef);
}
