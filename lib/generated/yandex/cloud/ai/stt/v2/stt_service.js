/* eslint-disable */
import { Duration } from '../../../../../google/protobuf/duration';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.ai.stt.v2';
export var RecognitionSpec_AudioEncoding;
(function (RecognitionSpec_AudioEncoding) {
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["AUDIO_ENCODING_UNSPECIFIED"] = 0] = "AUDIO_ENCODING_UNSPECIFIED";
    /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM) */
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["LINEAR16_PCM"] = 1] = "LINEAR16_PCM";
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["OGG_OPUS"] = 2] = "OGG_OPUS";
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RecognitionSpec_AudioEncoding || (RecognitionSpec_AudioEncoding = {}));
export function recognitionSpec_AudioEncodingFromJSON(object) {
    switch (object) {
        case 0:
        case 'AUDIO_ENCODING_UNSPECIFIED':
            return RecognitionSpec_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
        case 1:
        case 'LINEAR16_PCM':
            return RecognitionSpec_AudioEncoding.LINEAR16_PCM;
        case 2:
        case 'OGG_OPUS':
            return RecognitionSpec_AudioEncoding.OGG_OPUS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RecognitionSpec_AudioEncoding.UNRECOGNIZED;
    }
}
export function recognitionSpec_AudioEncodingToJSON(object) {
    switch (object) {
        case RecognitionSpec_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
            return 'AUDIO_ENCODING_UNSPECIFIED';
        case RecognitionSpec_AudioEncoding.LINEAR16_PCM:
            return 'LINEAR16_PCM';
        case RecognitionSpec_AudioEncoding.OGG_OPUS:
            return 'OGG_OPUS';
        default:
            return 'UNKNOWN';
    }
}
const baseLongRunningRecognitionRequest = {};
export const LongRunningRecognitionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            RecognitionConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.audio !== undefined) {
            RecognitionAudio.encode(message.audio, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLongRunningRecognitionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = RecognitionConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.audio = RecognitionAudio.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseLongRunningRecognitionRequest,
        };
        if (object.config !== undefined && object.config !== null) {
            message.config = RecognitionConfig.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.audio !== undefined && object.audio !== null) {
            message.audio = RecognitionAudio.fromJSON(object.audio);
        }
        else {
            message.audio = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? RecognitionConfig.toJSON(message.config)
                : undefined);
        message.audio !== undefined &&
            (obj.audio = message.audio
                ? RecognitionAudio.toJSON(message.audio)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseLongRunningRecognitionRequest,
        };
        if (object.config !== undefined && object.config !== null) {
            message.config = RecognitionConfig.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.audio !== undefined && object.audio !== null) {
            message.audio = RecognitionAudio.fromPartial(object.audio);
        }
        else {
            message.audio = undefined;
        }
        return message;
    },
};
const baseLongRunningRecognitionResponse = {};
export const LongRunningRecognitionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.chunks) {
            SpeechRecognitionResult.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLongRunningRecognitionResponse,
        };
        message.chunks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunks.push(SpeechRecognitionResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseLongRunningRecognitionResponse,
        };
        message.chunks = [];
        if (object.chunks !== undefined && object.chunks !== null) {
            for (const e of object.chunks) {
                message.chunks.push(SpeechRecognitionResult.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.chunks) {
            obj.chunks = message.chunks.map((e) => e ? SpeechRecognitionResult.toJSON(e) : undefined);
        }
        else {
            obj.chunks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseLongRunningRecognitionResponse,
        };
        message.chunks = [];
        if (object.chunks !== undefined && object.chunks !== null) {
            for (const e of object.chunks) {
                message.chunks.push(SpeechRecognitionResult.fromPartial(e));
            }
        }
        return message;
    },
};
const baseStreamingRecognitionRequest = {};
export const StreamingRecognitionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            RecognitionConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.audioContent !== undefined) {
            writer.uint32(18).bytes(message.audioContent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStreamingRecognitionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = RecognitionConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.audioContent = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseStreamingRecognitionRequest,
        };
        if (object.config !== undefined && object.config !== null) {
            message.config = RecognitionConfig.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.audioContent !== undefined && object.audioContent !== null) {
            message.audioContent = bytesFromBase64(object.audioContent);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? RecognitionConfig.toJSON(message.config)
                : undefined);
        message.audioContent !== undefined &&
            (obj.audioContent =
                message.audioContent !== undefined
                    ? base64FromBytes(message.audioContent)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStreamingRecognitionRequest,
        };
        if (object.config !== undefined && object.config !== null) {
            message.config = RecognitionConfig.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.audioContent !== undefined && object.audioContent !== null) {
            message.audioContent = object.audioContent;
        }
        else {
            message.audioContent = undefined;
        }
        return message;
    },
};
const baseStreamingRecognitionResponse = {};
export const StreamingRecognitionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.chunks) {
            SpeechRecognitionChunk.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStreamingRecognitionResponse,
        };
        message.chunks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunks.push(SpeechRecognitionChunk.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseStreamingRecognitionResponse,
        };
        message.chunks = [];
        if (object.chunks !== undefined && object.chunks !== null) {
            for (const e of object.chunks) {
                message.chunks.push(SpeechRecognitionChunk.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.chunks) {
            obj.chunks = message.chunks.map((e) => e ? SpeechRecognitionChunk.toJSON(e) : undefined);
        }
        else {
            obj.chunks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseStreamingRecognitionResponse,
        };
        message.chunks = [];
        if (object.chunks !== undefined && object.chunks !== null) {
            for (const e of object.chunks) {
                message.chunks.push(SpeechRecognitionChunk.fromPartial(e));
            }
        }
        return message;
    },
};
const baseRecognitionAudio = {};
export const RecognitionAudio = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.uri !== undefined) {
            writer.uint32(18).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecognitionAudio };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.bytes();
                    break;
                case 2:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRecognitionAudio };
        if (object.content !== undefined && object.content !== null) {
            message.content = bytesFromBase64(object.content);
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined &&
            (obj.content =
                message.content !== undefined
                    ? base64FromBytes(message.content)
                    : undefined);
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRecognitionAudio };
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        else {
            message.content = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = undefined;
        }
        return message;
    },
};
const baseRecognitionConfig = { folderId: '' };
export const RecognitionConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.specification !== undefined) {
            RecognitionSpec.encode(message.specification, writer.uint32(10).fork()).ldelim();
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecognitionConfig };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.specification = RecognitionSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRecognitionConfig };
        if (object.specification !== undefined &&
            object.specification !== null) {
            message.specification = RecognitionSpec.fromJSON(object.specification);
        }
        else {
            message.specification = undefined;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.specification !== undefined &&
            (obj.specification = message.specification
                ? RecognitionSpec.toJSON(message.specification)
                : undefined);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRecognitionConfig };
        if (object.specification !== undefined &&
            object.specification !== null) {
            message.specification = RecognitionSpec.fromPartial(object.specification);
        }
        else {
            message.specification = undefined;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        return message;
    },
};
const baseRecognitionSpec = {
    audioEncoding: 0,
    sampleRateHertz: 0,
    languageCode: '',
    profanityFilter: false,
    model: '',
    partialResults: false,
    singleUtterance: false,
    audioChannelCount: 0,
    rawResults: false,
};
export const RecognitionSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.audioEncoding !== 0) {
            writer.uint32(8).int32(message.audioEncoding);
        }
        if (message.sampleRateHertz !== 0) {
            writer.uint32(16).int64(message.sampleRateHertz);
        }
        if (message.languageCode !== '') {
            writer.uint32(26).string(message.languageCode);
        }
        if (message.profanityFilter === true) {
            writer.uint32(32).bool(message.profanityFilter);
        }
        if (message.model !== '') {
            writer.uint32(42).string(message.model);
        }
        if (message.partialResults === true) {
            writer.uint32(56).bool(message.partialResults);
        }
        if (message.singleUtterance === true) {
            writer.uint32(64).bool(message.singleUtterance);
        }
        if (message.audioChannelCount !== 0) {
            writer.uint32(72).int64(message.audioChannelCount);
        }
        if (message.rawResults === true) {
            writer.uint32(80).bool(message.rawResults);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecognitionSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioEncoding = reader.int32();
                    break;
                case 2:
                    message.sampleRateHertz = longToNumber(reader.int64());
                    break;
                case 3:
                    message.languageCode = reader.string();
                    break;
                case 4:
                    message.profanityFilter = reader.bool();
                    break;
                case 5:
                    message.model = reader.string();
                    break;
                case 7:
                    message.partialResults = reader.bool();
                    break;
                case 8:
                    message.singleUtterance = reader.bool();
                    break;
                case 9:
                    message.audioChannelCount = longToNumber(reader.int64());
                    break;
                case 10:
                    message.rawResults = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRecognitionSpec };
        if (object.audioEncoding !== undefined &&
            object.audioEncoding !== null) {
            message.audioEncoding = recognitionSpec_AudioEncodingFromJSON(object.audioEncoding);
        }
        else {
            message.audioEncoding = 0;
        }
        if (object.sampleRateHertz !== undefined &&
            object.sampleRateHertz !== null) {
            message.sampleRateHertz = Number(object.sampleRateHertz);
        }
        else {
            message.sampleRateHertz = 0;
        }
        if (object.languageCode !== undefined && object.languageCode !== null) {
            message.languageCode = String(object.languageCode);
        }
        else {
            message.languageCode = '';
        }
        if (object.profanityFilter !== undefined &&
            object.profanityFilter !== null) {
            message.profanityFilter = Boolean(object.profanityFilter);
        }
        else {
            message.profanityFilter = false;
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = String(object.model);
        }
        else {
            message.model = '';
        }
        if (object.partialResults !== undefined &&
            object.partialResults !== null) {
            message.partialResults = Boolean(object.partialResults);
        }
        else {
            message.partialResults = false;
        }
        if (object.singleUtterance !== undefined &&
            object.singleUtterance !== null) {
            message.singleUtterance = Boolean(object.singleUtterance);
        }
        else {
            message.singleUtterance = false;
        }
        if (object.audioChannelCount !== undefined &&
            object.audioChannelCount !== null) {
            message.audioChannelCount = Number(object.audioChannelCount);
        }
        else {
            message.audioChannelCount = 0;
        }
        if (object.rawResults !== undefined && object.rawResults !== null) {
            message.rawResults = Boolean(object.rawResults);
        }
        else {
            message.rawResults = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.audioEncoding !== undefined &&
            (obj.audioEncoding = recognitionSpec_AudioEncodingToJSON(message.audioEncoding));
        message.sampleRateHertz !== undefined &&
            (obj.sampleRateHertz = message.sampleRateHertz);
        message.languageCode !== undefined &&
            (obj.languageCode = message.languageCode);
        message.profanityFilter !== undefined &&
            (obj.profanityFilter = message.profanityFilter);
        message.model !== undefined && (obj.model = message.model);
        message.partialResults !== undefined &&
            (obj.partialResults = message.partialResults);
        message.singleUtterance !== undefined &&
            (obj.singleUtterance = message.singleUtterance);
        message.audioChannelCount !== undefined &&
            (obj.audioChannelCount = message.audioChannelCount);
        message.rawResults !== undefined &&
            (obj.rawResults = message.rawResults);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRecognitionSpec };
        if (object.audioEncoding !== undefined &&
            object.audioEncoding !== null) {
            message.audioEncoding = object.audioEncoding;
        }
        else {
            message.audioEncoding = 0;
        }
        if (object.sampleRateHertz !== undefined &&
            object.sampleRateHertz !== null) {
            message.sampleRateHertz = object.sampleRateHertz;
        }
        else {
            message.sampleRateHertz = 0;
        }
        if (object.languageCode !== undefined && object.languageCode !== null) {
            message.languageCode = object.languageCode;
        }
        else {
            message.languageCode = '';
        }
        if (object.profanityFilter !== undefined &&
            object.profanityFilter !== null) {
            message.profanityFilter = object.profanityFilter;
        }
        else {
            message.profanityFilter = false;
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = object.model;
        }
        else {
            message.model = '';
        }
        if (object.partialResults !== undefined &&
            object.partialResults !== null) {
            message.partialResults = object.partialResults;
        }
        else {
            message.partialResults = false;
        }
        if (object.singleUtterance !== undefined &&
            object.singleUtterance !== null) {
            message.singleUtterance = object.singleUtterance;
        }
        else {
            message.singleUtterance = false;
        }
        if (object.audioChannelCount !== undefined &&
            object.audioChannelCount !== null) {
            message.audioChannelCount = object.audioChannelCount;
        }
        else {
            message.audioChannelCount = 0;
        }
        if (object.rawResults !== undefined && object.rawResults !== null) {
            message.rawResults = object.rawResults;
        }
        else {
            message.rawResults = false;
        }
        return message;
    },
};
const baseSpeechRecognitionChunk = {
    final: false,
    endOfUtterance: false,
};
export const SpeechRecognitionChunk = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.alternatives) {
            SpeechRecognitionAlternative.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.final === true) {
            writer.uint32(16).bool(message.final);
        }
        if (message.endOfUtterance === true) {
            writer.uint32(24).bool(message.endOfUtterance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSpeechRecognitionChunk,
        };
        message.alternatives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alternatives.push(SpeechRecognitionAlternative.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.final = reader.bool();
                    break;
                case 3:
                    message.endOfUtterance = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseSpeechRecognitionChunk,
        };
        message.alternatives = [];
        if (object.alternatives !== undefined && object.alternatives !== null) {
            for (const e of object.alternatives) {
                message.alternatives.push(SpeechRecognitionAlternative.fromJSON(e));
            }
        }
        if (object.final !== undefined && object.final !== null) {
            message.final = Boolean(object.final);
        }
        else {
            message.final = false;
        }
        if (object.endOfUtterance !== undefined &&
            object.endOfUtterance !== null) {
            message.endOfUtterance = Boolean(object.endOfUtterance);
        }
        else {
            message.endOfUtterance = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.alternatives) {
            obj.alternatives = message.alternatives.map((e) => e ? SpeechRecognitionAlternative.toJSON(e) : undefined);
        }
        else {
            obj.alternatives = [];
        }
        message.final !== undefined && (obj.final = message.final);
        message.endOfUtterance !== undefined &&
            (obj.endOfUtterance = message.endOfUtterance);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSpeechRecognitionChunk,
        };
        message.alternatives = [];
        if (object.alternatives !== undefined && object.alternatives !== null) {
            for (const e of object.alternatives) {
                message.alternatives.push(SpeechRecognitionAlternative.fromPartial(e));
            }
        }
        if (object.final !== undefined && object.final !== null) {
            message.final = object.final;
        }
        else {
            message.final = false;
        }
        if (object.endOfUtterance !== undefined &&
            object.endOfUtterance !== null) {
            message.endOfUtterance = object.endOfUtterance;
        }
        else {
            message.endOfUtterance = false;
        }
        return message;
    },
};
const baseSpeechRecognitionResult = { channelTag: 0 };
export const SpeechRecognitionResult = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.alternatives) {
            SpeechRecognitionAlternative.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.channelTag !== 0) {
            writer.uint32(16).int64(message.channelTag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSpeechRecognitionResult,
        };
        message.alternatives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alternatives.push(SpeechRecognitionAlternative.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.channelTag = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseSpeechRecognitionResult,
        };
        message.alternatives = [];
        if (object.alternatives !== undefined && object.alternatives !== null) {
            for (const e of object.alternatives) {
                message.alternatives.push(SpeechRecognitionAlternative.fromJSON(e));
            }
        }
        if (object.channelTag !== undefined && object.channelTag !== null) {
            message.channelTag = Number(object.channelTag);
        }
        else {
            message.channelTag = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.alternatives) {
            obj.alternatives = message.alternatives.map((e) => e ? SpeechRecognitionAlternative.toJSON(e) : undefined);
        }
        else {
            obj.alternatives = [];
        }
        message.channelTag !== undefined &&
            (obj.channelTag = message.channelTag);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSpeechRecognitionResult,
        };
        message.alternatives = [];
        if (object.alternatives !== undefined && object.alternatives !== null) {
            for (const e of object.alternatives) {
                message.alternatives.push(SpeechRecognitionAlternative.fromPartial(e));
            }
        }
        if (object.channelTag !== undefined && object.channelTag !== null) {
            message.channelTag = object.channelTag;
        }
        else {
            message.channelTag = 0;
        }
        return message;
    },
};
const baseSpeechRecognitionAlternative = { text: '', confidence: 0 };
export const SpeechRecognitionAlternative = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.confidence !== 0) {
            writer.uint32(21).float(message.confidence);
        }
        for (const v of message.words) {
            WordInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSpeechRecognitionAlternative,
        };
        message.words = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.confidence = reader.float();
                    break;
                case 3:
                    message.words.push(WordInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseSpeechRecognitionAlternative,
        };
        message.words = [];
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        }
        else {
            message.text = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = Number(object.confidence);
        }
        else {
            message.confidence = 0;
        }
        if (object.words !== undefined && object.words !== null) {
            for (const e of object.words) {
                message.words.push(WordInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.text !== undefined && (obj.text = message.text);
        message.confidence !== undefined &&
            (obj.confidence = message.confidence);
        if (message.words) {
            obj.words = message.words.map((e) => e ? WordInfo.toJSON(e) : undefined);
        }
        else {
            obj.words = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSpeechRecognitionAlternative,
        };
        message.words = [];
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        }
        else {
            message.text = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = object.confidence;
        }
        else {
            message.confidence = 0;
        }
        if (object.words !== undefined && object.words !== null) {
            for (const e of object.words) {
                message.words.push(WordInfo.fromPartial(e));
            }
        }
        return message;
    },
};
const baseWordInfo = { word: '', confidence: 0 };
export const WordInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.startTime !== undefined) {
            Duration.encode(message.startTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            Duration.encode(message.endTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.word !== '') {
            writer.uint32(26).string(message.word);
        }
        if (message.confidence !== 0) {
            writer.uint32(37).float(message.confidence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWordInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.endTime = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.word = reader.string();
                    break;
                case 4:
                    message.confidence = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWordInfo };
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = Duration.fromJSON(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = Duration.fromJSON(object.endTime);
        }
        else {
            message.endTime = undefined;
        }
        if (object.word !== undefined && object.word !== null) {
            message.word = String(object.word);
        }
        else {
            message.word = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = Number(object.confidence);
        }
        else {
            message.confidence = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined &&
            (obj.startTime = message.startTime
                ? Duration.toJSON(message.startTime)
                : undefined);
        message.endTime !== undefined &&
            (obj.endTime = message.endTime
                ? Duration.toJSON(message.endTime)
                : undefined);
        message.word !== undefined && (obj.word = message.word);
        message.confidence !== undefined &&
            (obj.confidence = message.confidence);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWordInfo };
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = Duration.fromPartial(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = Duration.fromPartial(object.endTime);
        }
        else {
            message.endTime = undefined;
        }
        if (object.word !== undefined && object.word !== null) {
            message.word = object.word;
        }
        else {
            message.word = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = object.confidence;
        }
        else {
            message.confidence = 0;
        }
        return message;
    },
};
export const SttServiceService = {
    longRunningRecognize: {
        path: '/yandex.cloud.ai.stt.v2.SttService/LongRunningRecognize',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(LongRunningRecognitionRequest.encode(value).finish()),
        requestDeserialize: (value) => LongRunningRecognitionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    streamingRecognize: {
        path: '/yandex.cloud.ai.stt.v2.SttService/StreamingRecognize',
        requestStream: true,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(StreamingRecognitionRequest.encode(value).finish()),
        requestDeserialize: (value) => StreamingRecognitionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(StreamingRecognitionResponse.encode(value).finish()),
        responseDeserialize: (value) => StreamingRecognitionResponse.decode(value),
    },
};
export const SttServiceClient = makeGenericClientConstructor(SttServiceService, 'yandex.cloud.ai.stt.v2.SttService');
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
