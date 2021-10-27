"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymmetricKeyService = exports.SymmetricKeyServiceDef = exports.SymmetricCryptoService = exports.SymmetricCryptoServiceDef = void 0;
const symmetric_crypto_service_1 = require("../../../generated/yandex/cloud/kms/v1/symmetric_crypto_service");
const symmetric_key_service_1 = require("../../../generated/yandex/cloud/kms/v1/symmetric_key_service");
const index_1 = require("../../../src/index");
exports.SymmetricCryptoServiceDef = {
    ...symmetric_crypto_service_1.SymmetricCryptoServiceService,
    __endpointId: 'kms-crypt',
};
function SymmetricCryptoService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.SymmetricCryptoServiceDef);
}
exports.SymmetricCryptoService = SymmetricCryptoService;
exports.SymmetricKeyServiceDef = {
    ...symmetric_key_service_1.SymmetricKeyServiceService,
    __endpointId: 'kms',
};
function SymmetricKeyService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.SymmetricKeyServiceDef);
}
exports.SymmetricKeyService = SymmetricKeyService;
