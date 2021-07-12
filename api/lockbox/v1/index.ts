import { PayloadServiceService } from 'cloud/lockbox/v1/payload_service';
import { SecretServiceService } from 'cloud/lockbox/v1/secret_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src';

export const PayloadServiceDef: SdkServiceDefinition<
    typeof PayloadServiceService
> = {
    ...PayloadServiceService,
    __endpointId: 'lockbox-payload',
};

export function PayloadService(
    session?: Session
): Client<typeof PayloadServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(PayloadServiceDef);
}

export const SecretServiceDef: SdkServiceDefinition<
    typeof SecretServiceService
> = {
    ...SecretServiceService,
    __endpointId: 'lockbox',
};

export function SecretService(
    session?: Session
): Client<typeof SecretServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(SecretServiceDef);
}
