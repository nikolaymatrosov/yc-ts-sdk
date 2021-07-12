/* eslint-disable */
import { UtteranceSynthesisRequest, UtteranceSynthesisResponse, } from '../../../../../yandex/cloud/ai/tts/v3/tts';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'speechkit.tts.v3';
/** A set of methods for voice synthesis. */
export const SynthesizerService = {
    /** Synthesizing text into speech. */
    utteranceSynthesis: {
        path: '/speechkit.tts.v3.Synthesizer/UtteranceSynthesis',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(UtteranceSynthesisRequest.encode(value).finish()),
        requestDeserialize: (value) => UtteranceSynthesisRequest.decode(value),
        responseSerialize: (value) => Buffer.from(UtteranceSynthesisResponse.encode(value).finish()),
        responseDeserialize: (value) => UtteranceSynthesisResponse.decode(value),
    },
};
export const SynthesizerClient = makeGenericClientConstructor(SynthesizerService, 'speechkit.tts.v3.Synthesizer');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
