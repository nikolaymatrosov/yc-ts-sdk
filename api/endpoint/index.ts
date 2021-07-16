import { ApiEndpointServiceService } from 'cloud/endpoint/api_endpoint_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const ApiEndpointServiceDef: SdkServiceDefinition<
    typeof ApiEndpointServiceService
> = {
    ...ApiEndpointServiceService,
    __endpointId: 'endpoint',
};

export function ApiEndpointService(
    session?: Session
): Client<typeof ApiEndpointServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ApiEndpointServiceDef);
}
