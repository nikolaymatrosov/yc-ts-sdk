import { ApiEndpointServiceService } from '../../generated/yandex/cloud/endpoint/api_endpoint_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';
export declare const ApiEndpointServiceDef: SdkServiceDefinition<typeof ApiEndpointServiceService>;
export declare function ApiEndpointService(session?: Session): Client<typeof ApiEndpointServiceService, {}>;
