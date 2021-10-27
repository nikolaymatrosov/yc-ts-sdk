"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynthesizerClient = exports.SynthesizerService = exports.protobufPackage = void 0;
/* eslint-disable */
const tts_1 = require("../../../../../yandex/cloud/ai/tts/v3/tts");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'speechkit.tts.v3';
/** A set of methods for voice synthesis. */
exports.SynthesizerService = {
    /** Synthesizing text into speech. */
    utteranceSynthesis: {
        path: '/speechkit.tts.v3.Synthesizer/UtteranceSynthesis',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(tts_1.UtteranceSynthesisRequest.encode(value).finish()),
        requestDeserialize: (value) => tts_1.UtteranceSynthesisRequest.decode(value),
        responseSerialize: (value) => Buffer.from(tts_1.UtteranceSynthesisResponse.encode(value).finish()),
        responseDeserialize: (value) => tts_1.UtteranceSynthesisResponse.decode(value),
    },
};
exports.SynthesizerClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SynthesizerService, 'speechkit.tts.v3.Synthesizer');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
