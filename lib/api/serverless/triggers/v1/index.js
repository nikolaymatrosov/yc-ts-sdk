"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerService = exports.TriggerServiceDef = void 0;
const trigger_service_1 = require("../../../../generated/yandex/cloud/serverless/triggers/v1/trigger_service");
const index_1 = require("../../../../src/index");
exports.TriggerServiceDef = {
    ...trigger_service_1.TriggerServiceService,
    __endpointId: 'serverless-triggers',
};
function TriggerService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.TriggerServiceDef);
}
exports.TriggerService = TriggerService;
