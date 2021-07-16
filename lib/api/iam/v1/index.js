import { ApiKeyServiceService } from '../../../generated/yandex/cloud/iam/v1/api_key_service';
import { IamTokenServiceService } from '../../../generated/yandex/cloud/iam/v1/iam_token_service';
import { KeyServiceService } from '../../../generated/yandex/cloud/iam/v1/key_service';
import { RoleServiceService } from '../../../generated/yandex/cloud/iam/v1/role_service';
import { ServiceAccountServiceService } from '../../../generated/yandex/cloud/iam/v1/service_account_service';
import { UserAccountServiceService } from '../../../generated/yandex/cloud/iam/v1/user_account_service';
import { YandexPassportUserAccountServiceService } from '../../../generated/yandex/cloud/iam/v1/yandex_passport_user_account_service';
import { Session } from '../../../src/index';
export const ApiKeyServiceDef = {
    ...ApiKeyServiceService,
    __endpointId: 'iam',
};
export function ApiKeyService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ApiKeyServiceDef);
}
export const IamTokenServiceDef = {
    ...IamTokenServiceService,
    __endpointId: 'iam',
};
export function IamTokenService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(IamTokenServiceDef);
}
export const KeyServiceDef = {
    ...KeyServiceService,
    __endpointId: 'iam',
};
export function KeyService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(KeyServiceDef);
}
export const RoleServiceDef = {
    ...RoleServiceService,
    __endpointId: 'iam',
};
export function RoleService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(RoleServiceDef);
}
export const ServiceAccountServiceDef = {
    ...ServiceAccountServiceService,
    __endpointId: 'iam',
};
export function ServiceAccountService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(ServiceAccountServiceDef);
}
export const UserAccountServiceDef = {
    ...UserAccountServiceService,
    __endpointId: 'iam',
};
export function UserAccountService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(UserAccountServiceDef);
}
export const YandexPassportUserAccountServiceDef = {
    ...YandexPassportUserAccountServiceService,
    __endpointId: 'iam',
};
export function YandexPassportUserAccountService(session) {
    if (session === undefined) {
        session = new Session();
    }
    return session.client(YandexPassportUserAccountServiceDef);
}
