import { SymmetricCryptoServiceService } from 'cloud/kms/v1/symmetric_crypto_service';
import { SymmetricKeyServiceService } from 'cloud/kms/v1/symmetric_key_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const SymmetricCryptoServiceDef: SdkServiceDefinition<
    typeof SymmetricCryptoServiceService
> = {
    ...SymmetricCryptoServiceService,
    __endpointId: 'kms-crypt',
};

export function SymmetricCryptoService(
    session?: Session
): Client<typeof SymmetricCryptoServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SymmetricCryptoServiceDef);
}

export const SymmetricKeyServiceDef: SdkServiceDefinition<
    typeof SymmetricKeyServiceService
> = {
    ...SymmetricKeyServiceService,
    __endpointId: 'kms',
};

export function SymmetricKeyService(
    session?: Session
): Client<typeof SymmetricKeyServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SymmetricKeyServiceDef);
}
