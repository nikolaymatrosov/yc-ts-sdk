"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretService = exports.SecretServiceDef = exports.PayloadService = exports.PayloadServiceDef = void 0;
const payload_service_1 = require("../../../generated/yandex/cloud/lockbox/v1/payload_service");
const secret_service_1 = require("../../../generated/yandex/cloud/lockbox/v1/secret_service");
const index_1 = require("../../../src/index");
exports.PayloadServiceDef = {
    ...payload_service_1.PayloadServiceService,
    __endpointId: 'lockbox-payload',
};
function PayloadService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.PayloadServiceDef);
}
exports.PayloadService = PayloadService;
exports.SecretServiceDef = {
    ...secret_service_1.SecretServiceService,
    __endpointId: 'lockbox',
};
function SecretService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.SecretServiceDef);
}
exports.SecretService = SecretService;
