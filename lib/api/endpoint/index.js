import { ApiEndpointServiceService } from '../../generated/yandex/cloud/endpoint/api_endpoint_service';
import { Session } from 'src';
export const ApiEndpointServiceDef = {
    ...ApiEndpointServiceService,
    __endpointId: 'endpoint',
};
export function ApiEndpointService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ApiEndpointServiceDef);
}
