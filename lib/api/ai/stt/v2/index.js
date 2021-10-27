"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SttService = exports.SttServiceDef = void 0;
const stt_service_1 = require("../../../../generated/yandex/cloud/ai/stt/v2/stt_service");
const index_1 = require("../../../../src/index");
exports.SttServiceDef = {
    ...stt_service_1.SttServiceService,
    __endpointId: 'undefined',
};
function SttService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.SttServiceDef);
}
exports.SttService = SttService;
