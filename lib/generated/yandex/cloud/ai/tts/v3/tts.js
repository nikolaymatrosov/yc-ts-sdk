/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'speechkit.tts.v3';
export var RawAudio_AudioEncoding;
(function (RawAudio_AudioEncoding) {
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["AUDIO_ENCODING_UNSPECIFIED"] = 0] = "AUDIO_ENCODING_UNSPECIFIED";
    /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM). */
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["LINEAR16_PCM"] = 1] = "LINEAR16_PCM";
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RawAudio_AudioEncoding || (RawAudio_AudioEncoding = {}));
export function rawAudio_AudioEncodingFromJSON(object) {
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
export function rawAudio_AudioEncodingToJSON(object) {
    switch (object) {
        case RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
            return 'AUDIO_ENCODING_UNSPECIFIED';
        case RawAudio_AudioEncoding.LINEAR16_PCM:
            return 'LINEAR16_PCM';
        default:
            return 'UNKNOWN';
    }
}
export var ContainerAudio_ContainerAudioType;
(function (ContainerAudio_ContainerAudioType) {
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["CONTAINER_AUDIO_TYPE_UNSPECIFIED"] = 0] = "CONTAINER_AUDIO_TYPE_UNSPECIFIED";
    /** WAV - RIFF linear pcm with header audio file format. */
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["WAV"] = 1] = "WAV";
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContainerAudio_ContainerAudioType || (ContainerAudio_ContainerAudioType = {}));
export function containerAudio_ContainerAudioTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'CONTAINER_AUDIO_TYPE_UNSPECIFIED':
            return ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED;
        case 1:
        case 'WAV':
            return ContainerAudio_ContainerAudioType.WAV;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ContainerAudio_ContainerAudioType.UNRECOGNIZED;
    }
}
export function containerAudio_ContainerAudioTypeToJSON(object) {
    switch (object) {
        case ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED:
            return 'CONTAINER_AUDIO_TYPE_UNSPECIFIED';
        case ContainerAudio_ContainerAudioType.WAV:
            return 'WAV';
        default:
            return 'UNKNOWN';
    }
}
const baseAudioContent = {};
export const AudioContent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.audioSpec !== undefined) {
            AudioFormatOptions.encode(message.audioSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioContent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.bytes();
                    break;
                case 2:
                    message.audioSpec = AudioFormatOptions.decode(reader, reader.uint32());
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
            message.audioSpec = AudioFormatOptions.fromJSON(object.audioSpec);
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
                ? AudioFormatOptions.toJSON(message.audioSpec)
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
            message.audioSpec = AudioFormatOptions.fromPartial(object.audioSpec);
        }
        else {
            message.audioSpec = undefined;
        }
        return message;
    },
};
const baseAudioFormatOptions = {};
export const AudioFormatOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rawAudio !== undefined) {
            RawAudio.encode(message.rawAudio, writer.uint32(10).fork()).ldelim();
        }
        if (message.containerAudio !== undefined) {
            ContainerAudio.encode(message.containerAudio, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioFormatOptions };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rawAudio = RawAudio.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.containerAudio = ContainerAudio.decode(reader, reader.uint32());
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
            message.rawAudio = RawAudio.fromJSON(object.rawAudio);
        }
        else {
            message.rawAudio = undefined;
        }
        if (object.containerAudio !== undefined &&
            object.containerAudio !== null) {
            message.containerAudio = ContainerAudio.fromJSON(object.containerAudio);
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
                ? RawAudio.toJSON(message.rawAudio)
                : undefined);
        message.containerAudio !== undefined &&
            (obj.containerAudio = message.containerAudio
                ? ContainerAudio.toJSON(message.containerAudio)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAudioFormatOptions };
        if (object.rawAudio !== undefined && object.rawAudio !== null) {
            message.rawAudio = RawAudio.fromPartial(object.rawAudio);
        }
        else {
            message.rawAudio = undefined;
        }
        if (object.containerAudio !== undefined &&
            object.containerAudio !== null) {
            message.containerAudio = ContainerAudio.fromPartial(object.containerAudio);
        }
        else {
            message.containerAudio = undefined;
        }
        return message;
    },
};
const baseRawAudio = { audioEncoding: 0, sampleRateHertz: 0 };
export const RawAudio = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.audioEncoding !== 0) {
            writer.uint32(8).int32(message.audioEncoding);
        }
        if (message.sampleRateHertz !== 0) {
            writer.uint32(16).int64(message.sampleRateHertz);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ContainerAudio = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.containerAudioType !== 0) {
            writer.uint32(8).int32(message.containerAudioType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const TextVariable = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.variableName !== '') {
            writer.uint32(10).string(message.variableName);
        }
        if (message.variableValue !== '') {
            writer.uint32(18).string(message.variableValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const AudioVariable = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const UtteranceSynthesisResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.audioChunk !== undefined) {
            AudioChunk.encode(message.audioChunk, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUtteranceSynthesisResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioChunk = AudioChunk.decode(reader, reader.uint32());
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
            message.audioChunk = AudioChunk.fromJSON(object.audioChunk);
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
                ? AudioChunk.toJSON(message.audioChunk)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUtteranceSynthesisResponse,
        };
        if (object.audioChunk !== undefined && object.audioChunk !== null) {
            message.audioChunk = AudioChunk.fromPartial(object.audioChunk);
        }
        else {
            message.audioChunk = undefined;
        }
        return message;
    },
};
const baseAudioTemplate = {};
export const AudioTemplate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.audio !== undefined) {
            AudioContent.encode(message.audio, writer.uint32(10).fork()).ldelim();
        }
        if (message.textTemplate !== undefined) {
            TextTemplate.encode(message.textTemplate, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.variables) {
            AudioVariable.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioTemplate };
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audio = AudioContent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.textTemplate = TextTemplate.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.variables.push(AudioVariable.decode(reader, reader.uint32()));
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
            message.audio = AudioContent.fromJSON(object.audio);
        }
        else {
            message.audio = undefined;
        }
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = TextTemplate.fromJSON(object.textTemplate);
        }
        else {
            message.textTemplate = undefined;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(AudioVariable.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.audio !== undefined &&
            (obj.audio = message.audio
                ? AudioContent.toJSON(message.audio)
                : undefined);
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate
                ? TextTemplate.toJSON(message.textTemplate)
                : undefined);
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? AudioVariable.toJSON(e) : undefined);
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
            message.audio = AudioContent.fromPartial(object.audio);
        }
        else {
            message.audio = undefined;
        }
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = TextTemplate.fromPartial(object.textTemplate);
        }
        else {
            message.textTemplate = undefined;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(AudioVariable.fromPartial(e));
            }
        }
        return message;
    },
};
const baseAudioChunk = {};
export const AudioChunk = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const TextTemplate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.textTemplate !== '') {
            writer.uint32(10).string(message.textTemplate);
        }
        for (const v of message.variables) {
            TextVariable.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.variables.push(TextVariable.decode(reader, reader.uint32()));
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
                message.variables.push(TextVariable.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate);
        if (message.variables) {
            obj.variables = message.variables.map((e) => e ? TextVariable.toJSON(e) : undefined);
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
                message.variables.push(TextVariable.fromPartial(e));
            }
        }
        return message;
    },
};
const baseHints = {};
export const Hints = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.voice !== undefined) {
            writer.uint32(10).string(message.voice);
        }
        if (message.audioTemplate !== undefined) {
            AudioTemplate.encode(message.audioTemplate, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHints };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voice = reader.string();
                    break;
                case 2:
                    message.audioTemplate = AudioTemplate.decode(reader, reader.uint32());
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
            message.audioTemplate = AudioTemplate.fromJSON(object.audioTemplate);
        }
        else {
            message.audioTemplate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.voice !== undefined && (obj.voice = message.voice);
        message.audioTemplate !== undefined &&
            (obj.audioTemplate = message.audioTemplate
                ? AudioTemplate.toJSON(message.audioTemplate)
                : undefined);
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
            message.audioTemplate = AudioTemplate.fromPartial(object.audioTemplate);
        }
        else {
            message.audioTemplate = undefined;
        }
        return message;
    },
};
const baseUtteranceSynthesisRequest = { model: '' };
export const UtteranceSynthesisRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.model !== '') {
            writer.uint32(10).string(message.model);
        }
        if (message.text !== undefined) {
            writer.uint32(18).string(message.text);
        }
        if (message.textTemplate !== undefined) {
            TextTemplate.encode(message.textTemplate, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.hints) {
            Hints.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.outputAudioSpec !== undefined) {
            AudioFormatOptions.encode(message.outputAudioSpec, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.textTemplate = TextTemplate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hints.push(Hints.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.outputAudioSpec = AudioFormatOptions.decode(reader, reader.uint32());
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
            message.textTemplate = TextTemplate.fromJSON(object.textTemplate);
        }
        else {
            message.textTemplate = undefined;
        }
        if (object.hints !== undefined && object.hints !== null) {
            for (const e of object.hints) {
                message.hints.push(Hints.fromJSON(e));
            }
        }
        if (object.outputAudioSpec !== undefined &&
            object.outputAudioSpec !== null) {
            message.outputAudioSpec = AudioFormatOptions.fromJSON(object.outputAudioSpec);
        }
        else {
            message.outputAudioSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.model !== undefined && (obj.model = message.model);
        message.text !== undefined && (obj.text = message.text);
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate
                ? TextTemplate.toJSON(message.textTemplate)
                : undefined);
        if (message.hints) {
            obj.hints = message.hints.map((e) => e ? Hints.toJSON(e) : undefined);
        }
        else {
            obj.hints = [];
        }
        message.outputAudioSpec !== undefined &&
            (obj.outputAudioSpec = message.outputAudioSpec
                ? AudioFormatOptions.toJSON(message.outputAudioSpec)
                : undefined);
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
            message.textTemplate = TextTemplate.fromPartial(object.textTemplate);
        }
        else {
            message.textTemplate = undefined;
        }
        if (object.hints !== undefined && object.hints !== null) {
            for (const e of object.hints) {
                message.hints.push(Hints.fromPartial(e));
            }
        }
        if (object.outputAudioSpec !== undefined &&
            object.outputAudioSpec !== null) {
            message.outputAudioSpec = AudioFormatOptions.fromPartial(object.outputAudioSpec);
        }
        else {
            message.outputAudioSpec = undefined;
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
