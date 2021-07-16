import { ProxyServiceService } from 'cloud/serverless/mdbproxy/v1/proxy_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const ProxyServiceDef: SdkServiceDefinition<typeof ProxyServiceService> =
    {
        ...ProxyServiceService,
        __endpointId: 'mdbproxy',
    };

export function ProxyService(
    session?: Session
): Client<typeof ProxyServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ProxyServiceDef);
}
