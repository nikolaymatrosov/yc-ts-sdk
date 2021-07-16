import { ProxyServiceService } from '../../../../generated/yandex/cloud/serverless/mdbproxy/v1/proxy_service';
import { Session } from '../../../../src/index';
export const ProxyServiceDef = {
    ...ProxyServiceService,
    __endpointId: 'mdbproxy',
};
export function ProxyService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ProxyServiceDef);
}
