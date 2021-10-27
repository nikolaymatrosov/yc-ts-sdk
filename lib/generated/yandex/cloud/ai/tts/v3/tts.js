"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtteranceSynthesisRequest = exports.Hints = exports.TextTemplate = exports.AudioChunk = exports.AudioTemplate = exports.UtteranceSynthesisResponse = exports.AudioVariable = exports.TextVariable = exports.ContainerAudio = exports.RawAudio = exports.AudioFormatOptions = exports.AudioContent = exports.utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON = exports.utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON = exports.UtteranceSynthesisRequest_LoudnessNormalizationType = exports.containerAudio_ContainerAudioTypeToJSON = exports.containerAudio_ContainerAudioTypeFromJSON = exports.ContainerAudio_ContainerAudioType = exports.rawAudio_AudioEncodingToJSON = exports.rawAudio_AudioEncodingFromJSON = exports.RawAudio_AudioEncoding = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'speechkit.tts.v3';
var RawAudio_AudioEncoding;
(function (RawAudio_AudioEncoding) {
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["AUDIO_ENCODING_UNSPECIFIED"] = 0] = "AUDIO_ENCODING_UNSPECIFIED";
    /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM). */
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["LINEAR16_PCM"] = 1] = "LINEAR16_PCM";
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RawAudio_AudioEncoding = exports.RawAudio_AudioEncoding || (exports.RawAudio_AudioEncoding = {}));
function rawAudio_AudioEncodingFromJSON(object) {
    switch (object) {
        case 0:
        case 'AUDIO_ENCODING_UNSPECIFIED':
            return RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
        case 1:
        case 'LINEAR16_PCM':
            return RawAudio_AudioEncoding.LINEAR16_PCM;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RawAudio_AudioEncoding.UNRECOGNIZED;
    }
}
exports.rawAudio_AudioEncodingFromJSON = rawAudio_AudioEncodingFromJSON;
function rawAudio_AudioEncodingToJSON(object) {
    switch (object) {
        case RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
            return 'AUDIO_ENCODING_UNSPECIFIED';
        case RawAudio_AudioEncoding.LINEAR16_PCM:
            return 'LINEAR16_PCM';
        default:
            return 'UNKNOWN';
    }
}
exports.rawAudio_AudioEncodingToJSON = rawAudio_AudioEncodingToJSON;
var ContainerAudio_ContainerAudioType;
(function (ContainerAudio_ContainerAudioType) {
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["CONTAINER_AUDIO_TYPE_UNSPECIFIED"] = 0] = "CONTAINER_AUDIO_TYPE_UNSPECIFIED";
    /** WAV - RIFF linear pcm with header audio file format. */
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["WAV"] = 1] = "WAV";
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["OGG_OPUS"] = 2] = "OGG_OPUS";
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContainerAudio_ContainerAudioType = exports.ContainerAudio_ContainerAudioType || (exports.ContainerAudio_ContainerAudioType = {}));
function containerAudio_ContainerAudioTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'CONTAINER_AUDIO_TYPE_UNSPECIFIED':
            return ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED;
        case 1:
        case 'WAV':
            return ContainerAudio_ContainerAudioType.WAV;
        case 2:
        case 'OGG_OPUS':
            return ContainerAudio_ContainerAudioType.OGG_OPUS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ContainerAudio_ContainerAudioType.UNRECOGNIZED;
    }
}
exports.containerAudio_ContainerAudioTypeFromJSON = containerAudio_ContainerAudioTypeFromJSON;
function containerAudio_ContainerAudioTypeToJSON(object) {
    switch (object) {
        case ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED:
            return 'CONTAINER_AUDIO_TYPE_UNSPECIFIED';
        case ContainerAudio_ContainerAudioType.WAV:
            return 'WAV';
        case ContainerAudio_ContainerAudioType.OGG_OPUS:
            return 'OGG_OPUS';
        default:
            return 'UNKNOWN';
    }
}
exports.containerAudio_ContainerAudioTypeToJSON = containerAudio_ContainerAudioTypeToJSON;
/** Normalization type */
var UtteranceSynthesisRequest_LoudnessNormalizationType;
(function (UtteranceSynthesisRequest_LoudnessNormalizationType) {
    UtteranceSynthesisRequest_LoudnessNormalizationType[UtteranceSynthesisRequest_LoudnessNormalizationType["LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED"] = 0] = "LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED";
    UtteranceSynthesisRequest_LoudnessNormalizationType[UtteranceSynthesisRequest_LoudnessNormalizationType["MAX_PEAK"] = 1] = "MAX_PEAK";
    UtteranceSynthesisRequest_LoudnessNormalizationType[UtteranceSynthesisRequest_LoudnessNormalizationType["LUFS"] = 2] = "LUFS";
    UtteranceSynthesisRequest_LoudnessNormalizationType[UtteranceSynthesisRequest_LoudnessNormalizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UtteranceSynthesisRequest_LoudnessNormalizationType = exports.UtteranceSynthesisRequest_LoudnessNormalizationType || (exports.UtteranceSynthesisRequest_LoudnessNormalizationType = {}));
function utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED':
            return UtteranceSynthesisRequest_LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED;
        case 1:
        case 'MAX_PEAK':
            return UtteranceSynthesisRequest_LoudnessNormalizationType.MAX_PEAK;
        case 2:
        case 'LUFS':
            return UtteranceSynthesisRequest_LoudnessNormalizationType.LUFS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UtteranceSynthesisRequest_LoudnessNormalizationType.UNRECOGNIZED;
    }
}
exports.utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON = utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON;
function utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON(object) {
    switch (object) {
        case UtteranceSynthesisRequest_LoudnessNormalizationType.LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED:
            return 'LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED';
        case UtteranceSynthesisRequest_LoudnessNormalizationType.MAX_PEAK:
            return 'MAX_PEAK';
        case UtteranceSynthesisRequest_LoudnessNormalizationType.LUFS:
            return 'LUFS';
        default:
            return 'UNKNOWN';
    }
}
exports.utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON = utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON;
const baseAudioContent = {};
exports.AudioContent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.audioSpec !== undefined) {
            exports.AudioFormatOptions.encode(message.audioSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioContent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.bytes();
                    break;
                case 2:
                    message.audioSpec = exports.AudioFormatOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAudioContent };
        if (object.content !== undefined && object.content !== null) {
            message.content = bytesFromBase64(object.content);
        }
        if (object.audioSpec !== undefined && object.audioSpec !== null) {
            message.audioSpec = exports.AudioFormatOptions.fromJSON(object.audioSpec);
        }
        else {
            message.audioSpec = undefined;
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
        message.audioSpec !== undefined &&
            (obj.audioSpec = message.audioSpec
                ? exports.AudioFormatOptions.toJSON(message.audioSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAudioContent };
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        else {
            message.content = undefined;
        }
        if (object.audioSpec !== undefined && object.audioSpec !== null) {
            message.audioSpec = exports.AudioFormatOptions.fromPartial(object.audioSpec);
        }
        else {
            message.audioSpec = undefined;
        }
        return message;
    },
};
const baseAudioFormatOptions = {};
exports.AudioFormatOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rawAudio !== undefined) {
            exports.RawAudio.encode(message.rawAudio, writer.uint32(10).fork()).ldelim();
        }
        if (message.containerAudio !== undefined) {
            exports.ContainerAudio.encode(message.containerAudio, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioFormatOptions };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rawAudio = exports.RawAudio.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.containerAudio = exports.ContainerAudio.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAudioFormatOptions };
        if (object.rawAudio !== undefined && object.rawAudio !== null) {
            message.rawAudio = exports.RawAudio.fromJSON(object.rawAudio);
        }
        else {
            message.rawAudio = undefined;
        }
        if (object.containerAudio !== undefined &&
            object.containerAudio !== null) {
            message.containerAudio = exports.ContainerAudio.fromJSON(object.containerAudio);
        }
        else {
            message.containerAudio = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.rawAudio !== undefined &&
            (obj.rawAudio = message.rawAudio
                ? exports.RawAudio.toJSON(message.rawAudio)
                : undefined);
        message.containerAudio !== undefined &&
            (obj.containerAudio = message.containerAudio
                ? exports.ContainerAudio.toJSON(message.containerAudio)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAudioFormatOptions };
        if (object.rawAudio !== undefined && object.rawAudio !== null) {
            message.rawAudio = exports.RawAudio.fromPartial(object.rawAudio);
        }
        else {
            message.rawAudio = undefined;
        }
        if (object.containerAudio !== undefined &&
            object.containerAudio !== null) {
            message.containerAudio = exports.ContainerAudio.fromPartial(object.containerAudio);
        }
        else {
            message.containerAudio = undefined;
        }
        return message;
    },
};
const baseRawAudio = { audioEncoding: 0, sampleRateHertz: 0 };
exports.RawAudio = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.audioEncoding !== 0) {
            writer.uint32(8).int32(message.audioEncoding);
        }
        if (message.sampleRateHertz !== 0) {
            writer.uint32(16).int64(message.sampleRateHertz);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRawAudio };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioEncoding = reader.int32();
                    break;
                case 2:
                    message.sampleRateHertz = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRawAudio };
        if (object.audioEncoding !== undefined &&
            object.audioEncoding !== null) {
            message.audioEncoding = rawAudio_AudioEncodingFromJSON(object.audioEncoding);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.audioEncoding !== undefined &&
            (obj.audioEncoding = rawAudio_AudioEncodingToJSON(message.audioEncoding));
        message.sampleRateHertz !== undefined &&
            (obj.sampleRateHertz = message.sampleRateHertz);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRawAudio };
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
        return message;
    },
};
const baseContainerAudio = { containerAudioType: 0 };
exports.ContainerAudio = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerAudioType !== 0) {
            writer.uint32(8).int32(message.containerAudioType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContainerAudio };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerAudioType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseContainerAudio };
        if (object.containerAudioType !== undefined &&
            object.containerAudioType !== null) {
            message.containerAudioType =
                containerAudio_ContainerAudioTypeFromJSON(object.containerAudioType);
        }
        else {
            message.containerAudioType = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerAudioType !== undefined &&
            (obj.containerAudioType = containerAudio_ContainerAudioTypeToJSON(message.containerAudioType));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseContainerAudio };
        if (object.containerAudioType !== undefined &&
            object.containerAudioType !== null) {
            message.containerAudioType = object.containerAudioType;
        }
        else {
            message.containerAudioType = 0;
        }
        return message;
    },
};
const baseTextVariable = { variableName: '', variableValue: '' };
exports.TextVariable = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.variableName !== '') {
            writer.uint32(10).string(message.variableName);
        }
        if (message.variableValue !== '') {
            writer.uint32(18).string(message.variableValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextVariable };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.variableName = reader.string();
                    break;
                case 2:
                    message.variableValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTextVariable };
        if (object.variableName !== undefined && object.variableName !== null) {
            message.variableName = String(object.variableName);
        }
        else {
            message.variableName = '';
        }
        if (object.variableValue !== undefined &&
            object.variableValue !== null) {
            message.variableValue = String(object.variableValue);
        }
        else {
            message.variableValue = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.variableName !== undefined &&
            (obj.variableName = message.variableName);
        message.variableValue !== undefined &&
            (obj.variableValue = message.variableValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTextVariable };
        if (object.variableName !== undefined && object.variableName !== null) {
            message.variableName = object.variableName;
        }
        else {
            message.variableName = '';
        }
        if (object.variableValue !== undefined &&
            object.variableValue !== null) {
            message.variableValue = object.variableValue;
        }
        else {
            message.variableValue = '';
        }
        return message;
    },
};
const baseAudioVariable = {
    variableName: '',
    variableStartMs: 0,
    variableLengthMs: 0,
};
exports.AudioVariable = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.variableName !== '') {
            writer.uint32(10).string(message.variableName);
        }
        if (message.variableStartMs !== 0) {
            writer.uint32(16).int64(message.variableStartMs);
        }
        if (message.variableLengthMs !== 0) {
            writer.uint32(24).int64(message.variableLengthMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioVariable };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.variableName = reader.string();
                    break;
                case 2:
                    message.variableStartMs = longToNumber(reader.int64());
                    break;
                case 3:
                    message.variableLengthMs = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAudioVariable };
        if (object.variableName !== undefined && object.variableName !== null) {
            message.variableName = String(object.variableName);
        }
        else {
            message.variableName = '';
        }
        if (object.variableStartMs !== undefined &&
            object.variableStartMs !== null) {
            message.variableStartMs = Number(object.variableStartMs);
        }
        else {
            message.variableStartMs = 0;
        }
        if (object.variableLengthMs !== undefined &&
            object.variableLengthMs !== null) {
            message.variableLengthMs = Number(object.variableLengthMs);
        }
        else {
            message.variableLengthMs = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.variableName !== undefined &&
            (obj.variableName = message.variableName);
        message.variableStartMs !== undefined &&
            (obj.variableStartMs = message.variableStartMs);
        message.variableLengthMs !== undefined &&
            (obj.variableLengthMs = message.variableLengthMs);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAudioVariable };
        if (object.variableName !== undefined && object.variableName !== null) {
            message.variableName = object.variableName;
        }
        else {
            message.variableName = '';
        }
        if (object.variableStartMs !== undefined &&
            object.variableStartMs !== null) {
            message.variableStartMs = object.variableStartMs;
        }
        else {
            message.variableStartMs = 0;
        }
        if (object.variableLengthMs !== undefined &&
            object.variableLengthMs !== null) {
            message.variableLengthMs = object.variableLengthMs;
        }
        else {
            message.variableLengthMs = 0;
        }
        return message;
    },
};
const baseUtteranceSynthesisResponse = {};
exports.UtteranceSynthesisResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.audioChunk !== undefined) {
            exports.AudioChunk.encode(message.audioChunk, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUtteranceSynthesisResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioChunk = exports.AudioChunk.decode(reader, reader.uint32());
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
            ...baseUtteranceSynthesisResponse,
        };
        if (object.audioChunk !== undefined && object.audioChunk !== null) {
            message.audioChunk = exports.AudioChunk.fromJSON(object.audioChunk);
        }
        else {
            message.audioChunk = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.audioChunk !== undefined &&
            (obj.audioChunk = message.audioChunk
                ? exports.AudioChunk.toJSON(message.audioChunk)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUtteranceSynthesisResponse,
        };
        if (object.audioChunk !== undefined && object.audioChunk !== null) {
            message.audioChunk = exports.AudioChunk.fromPartial(object.audioChunk);
        }
        else {
            message.audioChunk = undefined;
        }
        return message;
    },
};
const baseAudioTemplate = {};
exports.AudioTemplate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.audio !== undefined) {
            exports.AudioContent.encode(message.audio, writer.uint32(10).fork()).ldelim();
        }
        if (message.textTemplate !== undefined) {
            exports.TextTemplate.encode(message.textTemplate, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.variables) {
            exports.AudioVariable.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioTemplate };
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audio = exports.AudioContent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.textTemplate = exports.TextTemplate.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.variables.push(exports.AudioVariable.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAudioTemplate };
        message.variables = [];
        if (object.audio !== undefined && object.audio !== null) {
            message.audio = exports.AudioContent.fromJSON(object.audio);
        }
        else {
            message.audio = undefined;
        }
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = exports.TextTemplate.fromJSON(object.textTemplate);
        }
        else {
            message.textTemplate = undefined;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(exports.AudioVariable.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.audio !== undefined &&
            (obj.audio = message.audio
                ? exports.AudioContent.toJSON(message.audio)
                : undefined);
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate
                ? exports.TextTemplate.toJSON(message.textTemplate)
                : undefined);
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? exports.AudioVariable.toJSON(e) : undefined);
        }
        else {
            obj.variables = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAudioTemplate };
        message.variables = [];
        if (object.audio !== undefined && object.audio !== null) {
            message.audio = exports.AudioContent.fromPartial(object.audio);
        }
        else {
            message.audio = undefined;
        }
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = exports.TextTemplate.fromPartial(object.textTemplate);
        }
        else {
            message.textTemplate = undefined;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(exports.AudioVariable.fromPartial(e));
            }
        }
        return message;
    },
};
const baseAudioChunk = {};
exports.AudioChunk = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioChunk };
        message.data = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAudioChunk };
        message.data = new Uint8Array();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAudioChunk };
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
const baseTextTemplate = { textTemplate: '' };
exports.TextTemplate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.textTemplate !== '') {
            writer.uint32(10).string(message.textTemplate);
        }
        for (const v of message.variables) {
            exports.TextVariable.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextTemplate };
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.textTemplate = reader.string();
                    break;
                case 2:
                    message.variables.push(exports.TextVariable.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTextTemplate };
        message.variables = [];
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = String(object.textTemplate);
        }
        else {
            message.textTemplate = '';
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(exports.TextVariable.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate);
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? exports.TextVariable.toJSON(e) : undefined);
        }
        else {
            obj.variables = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTextTemplate };
        message.variables = [];
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = object.textTemplate;
        }
        else {
            message.textTemplate = '';
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(exports.TextVariable.fromPartial(e));
            }
        }
        return message;
    },
};
const baseHints = {};
exports.Hints = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.voice !== undefined) {
            writer.uint32(10).string(message.voice);
        }
        if (message.audioTemplate !== undefined) {
            exports.AudioTemplate.encode(message.audioTemplate, writer.uint32(18).fork()).ldelim();
        }
        if (message.speed !== undefined) {
            writer.uint32(25).double(message.speed);
        }
        if (message.volume !== undefined) {
            writer.uint32(33).double(message.volume);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHints };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voice = reader.string();
                    break;
                case 2:
                    message.audioTemplate = exports.AudioTemplate.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.speed = reader.double();
                    break;
                case 4:
                    message.volume = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHints };
        if (object.voice !== undefined && object.voice !== null) {
            message.voice = String(object.voice);
        }
        else {
            message.voice = undefined;
        }
        if (object.audioTemplate !== undefined &&
            object.audioTemplate !== null) {
            message.audioTemplate = exports.AudioTemplate.fromJSON(object.audioTemplate);
        }
        else {
            message.audioTemplate = undefined;
        }
        if (object.speed !== undefined && object.speed !== null) {
            message.speed = Number(object.speed);
        }
        else {
            message.speed = undefined;
        }
        if (object.volume !== undefined && object.volume !== null) {
            message.volume = Number(object.volume);
        }
        else {
            message.volume = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.voice !== undefined && (obj.voice = message.voice);
        message.audioTemplate !== undefined &&
            (obj.audioTemplate = message.audioTemplate
                ? exports.AudioTemplate.toJSON(message.audioTemplate)
                : undefined);
        message.speed !== undefined && (obj.speed = message.speed);
        message.volume !== undefined && (obj.volume = message.volume);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHints };
        if (object.voice !== undefined && object.voice !== null) {
            message.voice = object.voice;
        }
        else {
            message.voice = undefined;
        }
        if (object.audioTemplate !== undefined &&
            object.audioTemplate !== null) {
            message.audioTemplate = exports.AudioTemplate.fromPartial(object.audioTemplate);
        }
        else {
            message.audioTemplate = undefined;
        }
        if (object.speed !== undefined && object.speed !== null) {
            message.speed = object.speed;
        }
        else {
            message.speed = undefined;
        }
        if (object.volume !== undefined && object.volume !== null) {
            message.volume = object.volume;
        }
        else {
            message.volume = undefined;
        }
        return message;
    },
};
const baseUtteranceSynthesisRequest = {
    model: '',
    loudnessNormalizationType: 0,
};
exports.UtteranceSynthesisRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.model !== '') {
            writer.uint32(10).string(message.model);
        }
        if (message.text !== undefined) {
            writer.uint32(18).string(message.text);
        }
        if (message.textTemplate !== undefined) {
            exports.TextTemplate.encode(message.textTemplate, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.hints) {
            exports.Hints.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.outputAudioSpec !== undefined) {
            exports.AudioFormatOptions.encode(message.outputAudioSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.loudnessNormalizationType !== 0) {
            writer.uint32(48).int32(message.loudnessNormalizationType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUtteranceSynthesisRequest,
        };
        message.hints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.model = reader.string();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
                    message.textTemplate = exports.TextTemplate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hints.push(exports.Hints.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.outputAudioSpec = exports.AudioFormatOptions.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.loudnessNormalizationType = reader.int32();
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
            ...baseUtteranceSynthesisRequest,
        };
        message.hints = [];
        if (object.model !== undefined && object.model !== null) {
            message.model = String(object.model);
        }
        else {
            message.model = '';
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        }
        else {
            message.text = undefined;
        }
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = exports.TextTemplate.fromJSON(object.textTemplate);
        }
        else {
            message.textTemplate = undefined;
        }
        if (object.hints !== undefined && object.hints !== null) {
            for (const e of object.hints) {
                message.hints.push(exports.Hints.fromJSON(e));
            }
        }
        if (object.outputAudioSpec !== undefined &&
            object.outputAudioSpec !== null) {
            message.outputAudioSpec = exports.AudioFormatOptions.fromJSON(object.outputAudioSpec);
        }
        else {
            message.outputAudioSpec = undefined;
        }
        if (object.loudnessNormalizationType !== undefined &&
            object.loudnessNormalizationType !== null) {
            message.loudnessNormalizationType =
                utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON(object.loudnessNormalizationType);
        }
        else {
            message.loudnessNormalizationType = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.model !== undefined && (obj.model = message.model);
        message.text !== undefined && (obj.text = message.text);
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate
                ? exports.TextTemplate.toJSON(message.textTemplate)
                : undefined);
        if (message.hints) {
            obj.hints = message.hints.map((e) => e ? exports.Hints.toJSON(e) : undefined);
        }
        else {
            obj.hints = [];
        }
        message.outputAudioSpec !== undefined &&
            (obj.outputAudioSpec = message.outputAudioSpec
                ? exports.AudioFormatOptions.toJSON(message.outputAudioSpec)
                : undefined);
        message.loudnessNormalizationType !== undefined &&
            (obj.loudnessNormalizationType =
                utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON(message.loudnessNormalizationType));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUtteranceSynthesisRequest,
        };
        message.hints = [];
        if (object.model !== undefined && object.model !== null) {
            message.model = object.model;
        }
        else {
            message.model = '';
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        }
        else {
            message.text = undefined;
        }
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = exports.TextTemplate.fromPartial(object.textTemplate);
        }
        else {
            message.textTemplate = undefined;
        }
        if (object.hints !== undefined && object.hints !== null) {
            for (const e of object.hints) {
                message.hints.push(exports.Hints.fromPartial(e));
            }
        }
        if (object.outputAudioSpec !== undefined &&
            object.outputAudioSpec !== null) {
            message.outputAudioSpec = exports.AudioFormatOptions.fromPartial(object.outputAudioSpec);
        }
        else {
            message.outputAudioSpec = undefined;
        }
        if (object.loudnessNormalizationType !== undefined &&
            object.loudnessNormalizationType !== null) {
            message.loudnessNormalizationType =
                object.loudnessNormalizationType;
        }
        else {
            message.loudnessNormalizationType = 0;
        }
        return message;
    },
};
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
