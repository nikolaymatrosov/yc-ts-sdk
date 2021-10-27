"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessKeyService = exports.AccessKeyServiceDef = void 0;
const access_key_service_1 = require("../../../../generated/yandex/cloud/iam/v1/awscompatibility/access_key_service");
const index_1 = require("../../../../src/index");
exports.AccessKeyServiceDef = {
    ...access_key_service_1.AccessKeyServiceService,
    __endpointId: 'iam',
};
function AccessKeyService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.AccessKeyServiceDef);
}
exports.AccessKeyService = AccessKeyService;
