import { ClusterServiceService } from '../../../generated/yandex/cloud/k8s/v1/cluster_service';
import { NodeGroupServiceService } from '../../../generated/yandex/cloud/k8s/v1/node_group_service';
import { VersionServiceService } from '../../../generated/yandex/cloud/k8s/v1/version_service';
import { Session } from 'src';
export const ClusterServiceDef = {
    ...ClusterServiceService,
    __endpointId: 'managed-kubernetes',
};
export function ClusterService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}
export const NodeGroupServiceDef = {
    ...NodeGroupServiceService,
    __endpointId: 'managed-kubernetes',
};
export function NodeGroupService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(NodeGroupServiceDef);
}
export const VersionServiceDef = {
    ...VersionServiceService,
    __endpointId: 'managed-kubernetes',
};
export function VersionService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(VersionServiceDef);
}
