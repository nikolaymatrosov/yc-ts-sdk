import { OperationServiceService } from '../../generated/yandex/cloud/operation/operation_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../src/index';
export declare const OperationServiceDef: SdkServiceDefinition<typeof OperationServiceService>;
export declare function OperationService(session?: Session): Client<typeof OperationServiceService, any>;
