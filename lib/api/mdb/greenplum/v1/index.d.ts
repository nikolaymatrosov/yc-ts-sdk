import { ClusterServiceService } from '../../../../generated/yandex/cloud/mdb/greenplum/v1/cluster_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../../src/index';
export declare const ClusterServiceDef: SdkServiceDefinition<typeof ClusterServiceService>;
export declare function ClusterService(session?: Session): Client<typeof ClusterServiceService, {}>;
