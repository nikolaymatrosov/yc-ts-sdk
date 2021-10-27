"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SttServiceClient = exports.SttServiceService = exports.WordInfo = exports.SpeechRecognitionAlternative = exports.SpeechRecognitionResult = exports.SpeechRecognitionChunk = exports.RecognitionSpec = exports.RecognitionConfig = exports.RecognitionAudio = exports.StreamingRecognitionResponse = exports.StreamingRecognitionRequest = exports.LongRunningRecognitionResponse = exports.LongRunningRecognitionRequest = exports.recognitionSpec_AudioEncodingToJSON = exports.recognitionSpec_AudioEncodingFromJSON = exports.RecognitionSpec_AudioEncoding = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../../google/protobuf/duration");
const typeRegistry_1 = require("../../../../../typeRegistry");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.ai.stt.v2';
var RecognitionSpec_AudioEncoding;
(function (RecognitionSpec_AudioEncoding) {
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["AUDIO_ENCODING_UNSPECIFIED"] = 0] = "AUDIO_ENCODING_UNSPECIFIED";
    /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM) */
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["LINEAR16_PCM"] = 1] = "LINEAR16_PCM";
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["OGG_OPUS"] = 2] = "OGG_OPUS";
    RecognitionSpec_AudioEncoding[RecognitionSpec_AudioEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RecognitionSpec_AudioEncoding = exports.RecognitionSpec_AudioEncoding || (exports.RecognitionSpec_AudioEncoding = {}));
function recognitionSpec_AudioEncodingFromJSON(object) {
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
exports.recognitionSpec_AudioEncodingFromJSON = recognitionSpec_AudioEncodingFromJSON;
function recognitionSpec_AudioEncodingToJSON(object) {
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
exports.recognitionSpec_AudioEncodingToJSON = recognitionSpec_AudioEncodingToJSON;
const baseLongRunningRecognitionRequest = {
    $type: 'yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest',
};
exports.LongRunningRecognitionRequest = {
    $type: 'yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            exports.RecognitionConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.audio !== undefined) {
            exports.RecognitionAudio.encode(message.audio, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLongRunningRecognitionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = exports.RecognitionConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.audio = exports.RecognitionAudio.decode(reader, reader.uint32());
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
            message.config = exports.RecognitionConfig.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.audio !== undefined && object.audio !== null) {
            message.audio = exports.RecognitionAudio.fromJSON(object.audio);
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
                ? exports.RecognitionConfig.toJSON(message.config)
                : undefined);
        message.audio !== undefined &&
            (obj.audio = message.audio
                ? exports.RecognitionAudio.toJSON(message.audio)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseLongRunningRecognitionRequest,
        };
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.RecognitionConfig.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.audio !== undefined && object.audio !== null) {
            message.audio = exports.RecognitionAudio.fromPartial(object.audio);
        }
        else {
            message.audio = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LongRunningRecognitionRequest.$type, exports.LongRunningRecognitionRequest);
const baseLongRunningRecognitionResponse = {
    $type: 'yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse',
};
exports.LongRunningRecognitionResponse = {
    $type: 'yandex.cloud.ai.stt.v2.LongRunningRecognitionResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.chunks) {
            exports.SpeechRecognitionResult.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLongRunningRecognitionResponse,
        };
        message.chunks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunks.push(exports.SpeechRecognitionResult.decode(reader, reader.uint32()));
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
                message.chunks.push(exports.SpeechRecognitionResult.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.chunks) {
            obj.chunks = message.chunks.map((e) => e ? exports.SpeechRecognitionResult.toJSON(e) : undefined);
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
                message.chunks.push(exports.SpeechRecognitionResult.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LongRunningRecognitionResponse.$type, exports.LongRunningRecognitionResponse);
const baseStreamingRecognitionRequest = {
    $type: 'yandex.cloud.ai.stt.v2.StreamingRecognitionRequest',
};
exports.StreamingRecognitionRequest = {
    $type: 'yandex.cloud.ai.stt.v2.StreamingRecognitionRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.config !== undefined) {
            exports.RecognitionConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.audioContent !== undefined) {
            writer.uint32(18).bytes(message.audioContent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStreamingRecognitionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = exports.RecognitionConfig.decode(reader, reader.uint32());
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
            message.config = exports.RecognitionConfig.fromJSON(object.config);
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
                ? exports.RecognitionConfig.toJSON(message.config)
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
            message.config = exports.RecognitionConfig.fromPartial(object.config);
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
typeRegistry_1.messageTypeRegistry.set(exports.StreamingRecognitionRequest.$type, exports.StreamingRecognitionRequest);
const baseStreamingRecognitionResponse = {
    $type: 'yandex.cloud.ai.stt.v2.StreamingRecognitionResponse',
};
exports.StreamingRecognitionResponse = {
    $type: 'yandex.cloud.ai.stt.v2.StreamingRecognitionResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.chunks) {
            exports.SpeechRecognitionChunk.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStreamingRecognitionResponse,
        };
        message.chunks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunks.push(exports.SpeechRecognitionChunk.decode(reader, reader.uint32()));
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
                message.chunks.push(exports.SpeechRecognitionChunk.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.chunks) {
            obj.chunks = message.chunks.map((e) => e ? exports.SpeechRecognitionChunk.toJSON(e) : undefined);
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
                message.chunks.push(exports.SpeechRecognitionChunk.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamingRecognitionResponse.$type, exports.StreamingRecognitionResponse);
const baseRecognitionAudio = {
    $type: 'yandex.cloud.ai.stt.v2.RecognitionAudio',
};
exports.RecognitionAudio = {
    $type: 'yandex.cloud.ai.stt.v2.RecognitionAudio',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.uri !== undefined) {
            writer.uint32(18).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.RecognitionAudio.$type, exports.RecognitionAudio);
const baseRecognitionConfig = {
    $type: 'yandex.cloud.ai.stt.v2.RecognitionConfig',
    folderId: '',
};
exports.RecognitionConfig = {
    $type: 'yandex.cloud.ai.stt.v2.RecognitionConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.specification !== undefined) {
            exports.RecognitionSpec.encode(message.specification, writer.uint32(10).fork()).ldelim();
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecognitionConfig };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.specification = exports.RecognitionSpec.decode(reader, reader.uint32());
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
            message.specification = exports.RecognitionSpec.fromJSON(object.specification);
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
                ? exports.RecognitionSpec.toJSON(message.specification)
                : undefined);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRecognitionConfig };
        if (object.specification !== undefined &&
            object.specification !== null) {
            message.specification = exports.RecognitionSpec.fromPartial(object.specification);
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
typeRegistry_1.messageTypeRegistry.set(exports.RecognitionConfig.$type, exports.RecognitionConfig);
const baseRecognitionSpec = {
    $type: 'yandex.cloud.ai.stt.v2.RecognitionSpec',
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
exports.RecognitionSpec = {
    $type: 'yandex.cloud.ai.stt.v2.RecognitionSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.RecognitionSpec.$type, exports.RecognitionSpec);
const baseSpeechRecognitionChunk = {
    $type: 'yandex.cloud.ai.stt.v2.SpeechRecognitionChunk',
    final: false,
    endOfUtterance: false,
};
exports.SpeechRecognitionChunk = {
    $type: 'yandex.cloud.ai.stt.v2.SpeechRecognitionChunk',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.alternatives) {
            exports.SpeechRecognitionAlternative.encode(v, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSpeechRecognitionChunk,
        };
        message.alternatives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alternatives.push(exports.SpeechRecognitionAlternative.decode(reader, reader.uint32()));
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
                message.alternatives.push(exports.SpeechRecognitionAlternative.fromJSON(e));
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
            obj.alternatives = message.alternatives.map((e) => e ? exports.SpeechRecognitionAlternative.toJSON(e) : undefined);
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
                message.alternatives.push(exports.SpeechRecognitionAlternative.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.SpeechRecognitionChunk.$type, exports.SpeechRecognitionChunk);
const baseSpeechRecognitionResult = {
    $type: 'yandex.cloud.ai.stt.v2.SpeechRecognitionResult',
    channelTag: 0,
};
exports.SpeechRecognitionResult = {
    $type: 'yandex.cloud.ai.stt.v2.SpeechRecognitionResult',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.alternatives) {
            exports.SpeechRecognitionAlternative.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.channelTag !== 0) {
            writer.uint32(16).int64(message.channelTag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSpeechRecognitionResult,
        };
        message.alternatives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alternatives.push(exports.SpeechRecognitionAlternative.decode(reader, reader.uint32()));
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
                message.alternatives.push(exports.SpeechRecognitionAlternative.fromJSON(e));
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
            obj.alternatives = message.alternatives.map((e) => e ? exports.SpeechRecognitionAlternative.toJSON(e) : undefined);
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
                message.alternatives.push(exports.SpeechRecognitionAlternative.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.SpeechRecognitionResult.$type, exports.SpeechRecognitionResult);
const baseSpeechRecognitionAlternative = {
    $type: 'yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative',
    text: '',
    confidence: 0,
};
exports.SpeechRecognitionAlternative = {
    $type: 'yandex.cloud.ai.stt.v2.SpeechRecognitionAlternative',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.confidence !== 0) {
            writer.uint32(21).float(message.confidence);
        }
        for (const v of message.words) {
            exports.WordInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.words.push(exports.WordInfo.decode(reader, reader.uint32()));
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
                message.words.push(exports.WordInfo.fromJSON(e));
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
            obj.words = message.words.map((e) => e ? exports.WordInfo.toJSON(e) : undefined);
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
                message.words.push(exports.WordInfo.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SpeechRecognitionAlternative.$type, exports.SpeechRecognitionAlternative);
const baseWordInfo = {
    $type: 'yandex.cloud.ai.stt.v2.WordInfo',
    word: '',
    confidence: 0,
};
exports.WordInfo = {
    $type: 'yandex.cloud.ai.stt.v2.WordInfo',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.startTime !== undefined) {
            duration_1.Duration.encode(message.startTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            duration_1.Duration.encode(message.endTime, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWordInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.endTime = duration_1.Duration.decode(reader, reader.uint32());
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
            message.startTime = duration_1.Duration.fromJSON(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = duration_1.Duration.fromJSON(object.endTime);
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
                ? duration_1.Duration.toJSON(message.startTime)
                : undefined);
        message.endTime !== undefined &&
            (obj.endTime = message.endTime
                ? duration_1.Duration.toJSON(message.endTime)
                : undefined);
        message.word !== undefined && (obj.word = message.word);
        message.confidence !== undefined &&
            (obj.confidence = message.confidence);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWordInfo };
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = duration_1.Duration.fromPartial(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = duration_1.Duration.fromPartial(object.endTime);
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
typeRegistry_1.messageTypeRegistry.set(exports.WordInfo.$type, exports.WordInfo);
exports.SttServiceService = {
    longRunningRecognize: {
        path: '/yandex.cloud.ai.stt.v2.SttService/LongRunningRecognize',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.LongRunningRecognitionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.LongRunningRecognitionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    streamingRecognize: {
        path: '/yandex.cloud.ai.stt.v2.SttService/StreamingRecognize',
        requestStream: true,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.StreamingRecognitionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StreamingRecognitionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.StreamingRecognitionResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.StreamingRecognitionResponse.decode(value),
    },
};
exports.SttServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SttServiceService, 'yandex.cloud.ai.stt.v2.SttService');
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
