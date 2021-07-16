import { ProxyServiceService } from '../../../../generated/yandex/cloud/serverless/mdbproxy/v1/proxy_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from '../../../../src/index';
export declare const ProxyServiceDef: SdkServiceDefinition<typeof ProxyServiceService>;
export declare function ProxyService(session?: Session): Client<typeof ProxyServiceService, {}>;
