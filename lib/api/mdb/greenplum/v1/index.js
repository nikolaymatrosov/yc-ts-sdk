import { ClusterServiceService } from '../../../../generated/yandex/cloud/mdb/greenplum/v1/cluster_service';
import { Session } from '../../../../src/index';
export const ClusterServiceDef = {
    ...ClusterServiceService,
    __endpointId: 'managed-greenplum',
};
export function ClusterService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ClusterServiceDef);
}
