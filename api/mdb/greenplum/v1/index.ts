import { ClusterServiceService } from 'cloud/mdb/greenplum/v1/cluster_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const ClusterServiceDef: SdkServiceDefinition<
    typeof ClusterServiceService
> = {
    ...ClusterServiceService,
    __endpointId: 'managed-greenplum',
};

export function ClusterService(
    session?: Session
): Client<typeof ClusterServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}
