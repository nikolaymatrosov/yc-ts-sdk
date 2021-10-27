"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Synthesizer = exports.SynthesizerDef = void 0;
const tts_service_1 = require("../../../../generated/yandex/cloud/ai/tts/v3/tts_service");
const index_1 = require("../../../../src/index");
exports.SynthesizerDef = {
    ...tts_service_1.SynthesizerService,
    __endpointId: 'undefined',
};
function Synthesizer(session) {
    if (session === undefined) {
        session = new index_1.Session();
    }
    return session.client(exports.SynthesizerDef);
}
exports.Synthesizer = Synthesizer;
