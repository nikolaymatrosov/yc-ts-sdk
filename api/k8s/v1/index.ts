import { ClusterServiceService } from 'cloud/k8s/v1/cluster_service';
import { NodeGroupServiceService } from 'cloud/k8s/v1/node_group_service';
import { VersionServiceService } from 'cloud/k8s/v1/version_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const ClusterServiceDef: SdkServiceDefinition<
    typeof ClusterServiceService
> = {
    ...ClusterServiceService,
    __endpointId: 'managed-kubernetes',
};

export function ClusterService(
    session?: Session
): Client<typeof ClusterServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}

export const NodeGroupServiceDef: SdkServiceDefinition<
    typeof NodeGroupServiceService
> = {
    ...NodeGroupServiceService,
    __endpointId: 'managed-kubernetes',
};

export function NodeGroupService(
    session?: Session
): Client<typeof NodeGroupServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(NodeGroupServiceDef);
}

export const VersionServiceDef: SdkServiceDefinition<
    typeof VersionServiceService
> = {
    ...VersionServiceService,
    __endpointId: 'managed-kubernetes',
};

export function VersionService(
    session?: Session
): Client<typeof VersionServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(VersionServiceDef);
}
