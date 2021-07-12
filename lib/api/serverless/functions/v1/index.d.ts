import { FunctionServiceService } from '../../../../generated/yandex/cloud/serverless/functions/v1/function_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const FunctionServiceDef: SdkServiceDefinition<typeof FunctionServiceService>;
export declare function FunctionService(session?: Session): Client<typeof FunctionServiceService, {}>;
