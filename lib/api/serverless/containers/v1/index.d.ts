import { ContainerServiceService } from '../../../../generated/yandex/cloud/serverless/containers/v1/container_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../../src/index';
export declare const ContainerServiceDef: SdkServiceDefinition<typeof ContainerServiceService>;
export declare function ContainerService(session?: Session): Client<typeof ContainerServiceService, {}>;
