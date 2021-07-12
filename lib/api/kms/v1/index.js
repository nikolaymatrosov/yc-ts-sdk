import { SymmetricCryptoServiceService } from '../../../generated/yandex/cloud/kms/v1/symmetric_crypto_service';
import { SymmetricKeyServiceService } from '../../../generated/yandex/cloud/kms/v1/symmetric_key_service';
import { Session } from 'src';
export const SymmetricCryptoServiceDef = {
    ...SymmetricCryptoServiceService,
    __endpointId: 'kms-crypt',
};
export function SymmetricCryptoService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SymmetricCryptoServiceDef);
}
export const SymmetricKeyServiceDef = {
    ...SymmetricKeyServiceService,
    __endpointId: 'kms',
};
export function SymmetricKeyService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SymmetricKeyServiceDef);
}
