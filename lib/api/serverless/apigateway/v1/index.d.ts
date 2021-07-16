import { ApiGatewayServiceService } from '../../../../generated/yandex/cloud/serverless/apigateway/v1/apigateway_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../../src/index';
export declare const ApiGatewayServiceDef: SdkServiceDefinition<typeof ApiGatewayServiceService>;
export declare function ApiGatewayService(session?: Session): Client<typeof ApiGatewayServiceService, {}>;
