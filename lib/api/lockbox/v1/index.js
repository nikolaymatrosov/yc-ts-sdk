import { PayloadServiceService } from '../../../generated/yandex/cloud/lockbox/v1/payload_service';
import { SecretServiceService } from '../../../generated/yandex/cloud/lockbox/v1/secret_service';
import { Session } from '../../../src/index';
export const PayloadServiceDef = {
    ...PayloadServiceService,
    __endpointId: 'lockbox-payload',
};
export function PayloadService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(PayloadServiceDef);
}
export const SecretServiceDef = {
    ...SecretServiceService,
    __endpointId: 'lockbox',
};
export function SecretService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SecretServiceDef);
}
