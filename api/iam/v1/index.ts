import { ApiKeyServiceService } from 'cloud/iam/v1/api_key_service';
import { IamTokenServiceService } from 'cloud/iam/v1/iam_token_service';
import { KeyServiceService } from 'cloud/iam/v1/key_service';
import { RoleServiceService } from 'cloud/iam/v1/role_service';
import { ServiceAccountServiceService } from 'cloud/iam/v1/service_account_service';
import { UserAccountServiceService } from 'cloud/iam/v1/user_account_service';
import { YandexPassportUserAccountServiceService } from 'cloud/iam/v1/yandex_passport_user_account_service';
import { Client } from 'nice-grpc';
import { SdkServiceDefinition, Session } from 'src/index';

export const ApiKeyServiceDef: SdkServiceDefinition<
    typeof ApiKeyServiceService
> = {
    ...ApiKeyServiceService,
    __endpointId: 'iam',
};

export function ApiKeyService(
    session?: Session
): Client<typeof ApiKeyServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ApiKeyServiceDef);
}

export const IamTokenServiceDef: SdkServiceDefinition<
    typeof IamTokenServiceService
> = {
    ...IamTokenServiceService,
    __endpointId: 'iam',
};

export function IamTokenService(
    session?: Session
): Client<typeof IamTokenServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(IamTokenServiceDef);
}

export const KeyServiceDef: SdkServiceDefinition<typeof KeyServiceService> = {
    ...KeyServiceService,
    __endpointId: 'iam',
};

export function KeyService(
    session?: Session
): Client<typeof KeyServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(KeyServiceDef);
}

export const RoleServiceDef: SdkServiceDefinition<typeof RoleServiceService> = {
    ...RoleServiceService,
    __endpointId: 'iam',
};

export function RoleService(
    session?: Session
): Client<typeof RoleServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RoleServiceDef);
}

export const ServiceAccountServiceDef: SdkServiceDefinition<
    typeof ServiceAccountServiceService
> = {
    ...ServiceAccountServiceService,
    __endpointId: 'iam',
};

export function ServiceAccountService(
    session?: Session
): Client<typeof ServiceAccountServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ServiceAccountServiceDef);
}

export const UserAccountServiceDef: SdkServiceDefinition<
    typeof UserAccountServiceService
> = {
    ...UserAccountServiceService,
    __endpointId: 'iam',
};

export function UserAccountService(
    session?: Session
): Client<typeof UserAccountServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserAccountServiceDef);
}

export const YandexPassportUserAccountServiceDef: SdkServiceDefinition<
    typeof YandexPassportUserAccountServiceService
> = {
    ...YandexPassportUserAccountServiceService,
    __endpointId: 'iam',
};

export function YandexPassportUserAccountService(
    session?: Session
): Client<typeof YandexPassportUserAccountServiceService, {}> {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(YandexPassportUserAccountServiceDef);
}
