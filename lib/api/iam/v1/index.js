"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YandexPassportUserAccountService = exports.YandexPassportUserAccountServiceDef = exports.UserAccountService = exports.UserAccountServiceDef = exports.ServiceAccountService = exports.ServiceAccountServiceDef = exports.RoleService = exports.RoleServiceDef = exports.KeyService = exports.KeyServiceDef = exports.IamTokenService = exports.IamTokenServiceDef = exports.ApiKeyService = exports.ApiKeyServiceDef = void 0;
const api_key_service_1 = require("../../../generated/yandex/cloud/iam/v1/api_key_service");
const iam_token_service_1 = require("../../../generated/yandex/cloud/iam/v1/iam_token_service");
const key_service_1 = require("../../../generated/yandex/cloud/iam/v1/key_service");
const role_service_1 = require("../../../generated/yandex/cloud/iam/v1/role_service");
const service_account_service_1 = require("../../../generated/yandex/cloud/iam/v1/service_account_service");
const user_account_service_1 = require("../../../generated/yandex/cloud/iam/v1/user_account_service");
const yandex_passport_user_account_service_1 = require("../../../generated/yandex/cloud/iam/v1/yandex_passport_user_account_service");
const index_1 = require("../../../src/index");
exports.ApiKeyServiceDef = {
    ...api_key_service_1.ApiKeyServiceService,
    __endpointId: 'iam',
};
function ApiKeyService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ApiKeyServiceDef);
}
exports.ApiKeyService = ApiKeyService;
exports.IamTokenServiceDef = {
    ...iam_token_service_1.IamTokenServiceService,
    __endpointId: 'iam',
};
function IamTokenService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.IamTokenServiceDef);
}
exports.IamTokenService = IamTokenService;
exports.KeyServiceDef = {
    ...key_service_1.KeyServiceService,
    __endpointId: 'iam',
};
function KeyService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.KeyServiceDef);
}
exports.KeyService = KeyService;
exports.RoleServiceDef = {
    ...role_service_1.RoleServiceService,
    __endpointId: 'iam',
};
function RoleService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.RoleServiceDef);
}
exports.RoleService = RoleService;
exports.ServiceAccountServiceDef = {
    ...service_account_service_1.ServiceAccountServiceService,
    __endpointId: 'iam',
};
function ServiceAccountService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.ServiceAccountServiceDef);
}
exports.ServiceAccountService = ServiceAccountService;
exports.UserAccountServiceDef = {
    ...user_account_service_1.UserAccountServiceService,
    __endpointId: 'iam',
};
function UserAccountService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.UserAccountServiceDef);
}
exports.UserAccountService = UserAccountService;
exports.YandexPassportUserAccountServiceDef = {
    ...yandex_passport_user_account_service_1.YandexPassportUserAccountServiceService,
    __endpointId: 'iam',
};
function YandexPassportUserAccountService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.YandexPassportUserAccountServiceDef);
}
exports.YandexPassportUserAccountService = YandexPassportUserAccountService;
