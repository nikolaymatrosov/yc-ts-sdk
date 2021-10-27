"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationService = exports.TranslationServiceDef = void 0;
const translation_service_1 = require("../../../../generated/yandex/cloud/ai/translate/v2/translation_service");
const index_1 = require("../../../../src/index");
exports.TranslationServiceDef = {
    ...translation_service_1.TranslationServiceService,
    __endpointId: 'ai-translate',
};
function TranslationService(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.TranslationServiceDef);
}
exports.TranslationService = TranslationService;
