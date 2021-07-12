/* eslint-disable */
import { Duration } from '../../../../../google/protobuf/duration';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    handleBidiStreamingCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ClientDuplexStream,
    ServiceError,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.stt.v2';

export interface LongRunningRecognitionRequest {
    config: RecognitionConfig | undefined;
    audio: RecognitionAudio | undefined;
}

export interface LongRunningRecognitionResponse {
    chunks: SpeechRecognitionResult[];
}

export interface StreamingRecognitionRequest {
    config: RecognitionConfig | undefined;
    audioContent: Uint8Array | undefined;
}

export interface StreamingRecognitionResponse {
    chunks: SpeechRecognitionChunk[];
}

export interface RecognitionAudio {
    content: Uint8Array | undefined;
    uri: string | undefined;
}

export interface RecognitionConfig {
    specification: RecognitionSpec | undefined;
    folderId: string;
}

export interface RecognitionSpec {
    audioEncoding: RecognitionSpec_AudioEncoding;
    /** 8000, 16000, 48000 only for pcm */
    sampleRateHertz: number;
    /** code in BCP-47 */
    languageCode: string;
    profanityFilter: boolean;
    model: string;
    /**
     * If set true, tentative hypotheses may be returned as they become available (final=false flag)
     * If false or omitted, only final=true result(s) are returned.
     * Makes sense only for StreamingRecognize requests.
     */
    partialResults: boolean;
    singleUtterance: boolean;
    /** Used only for long running recognize. */
    audioChannelCount: number;
    /** This mark allows disable normalization text */
    rawResults: boolean;
}

export enum RecognitionSpec_AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM) */
    LINEAR16_PCM = 1,
    OGG_OPUS = 2,
    UNRECOGNIZED = -1,
}

export function recognitionSpec_AudioEncodingFromJSON(
    object: any
): RecognitionSpec_AudioEncoding {
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

export function recognitionSpec_AudioEncodingToJSON(
    object: RecognitionSpec_AudioEncoding
): string {
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

export interface SpeechRecognitionChunk {
    alternatives: SpeechRecognitionAlternative[];
    /** This flag shows that the received chunk contains a part of the recognized text that won't be changed. */
    final: boolean;
    /** This flag shows that the received chunk is the end of an utterance. */
    endOfUtterance: boolean;
}

export interface SpeechRecognitionResult {
    alternatives: SpeechRecognitionAlternative[];
    channelTag: number;
}

export interface SpeechRecognitionAlternative {
    text: string;
    confidence: number;
    words: WordInfo[];
}

export interface WordInfo {
    startTime: Duration | undefined;
    endTime: Duration | undefined;
    word: string;
    confidence: number;
}

const baseLongRunningRecognitionRequest: object = {};

export const LongRunningRecognitionRequest = {
    encode(
        message: LongRunningRecognitionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.config !== undefined) {
            RecognitionConfig.encode(
                message.config,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.audio !== undefined) {
            RecognitionAudio.encode(
                message.audio,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): LongRunningRecognitionRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLongRunningRecognitionRequest,
        } as LongRunningRecognitionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = RecognitionConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.audio = RecognitionAudio.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LongRunningRecognitionRequest {
        const message = {
            ...baseLongRunningRecognitionRequest,
        } as LongRunningRecognitionRequest;
        if (object.config !== undefined && object.config !== null) {
            message.config = RecognitionConfig.fromJSON(object.config);
        } else {
            message.config = undefined;
        }
        if (object.audio !== undefined && object.audio !== null) {
            message.audio = RecognitionAudio.fromJSON(object.audio);
        } else {
            message.audio = undefined;
        }
        return message;
    },

    toJSON(message: LongRunningRecognitionRequest): unknown {
        const obj: any = {};
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

    fromPartial(
        object: DeepPartial<LongRunningRecognitionRequest>
    ): LongRunningRecognitionRequest {
        const message = {
            ...baseLongRunningRecognitionRequest,
        } as LongRunningRecognitionRequest;
        if (object.config !== undefined && object.config !== null) {
            message.config = RecognitionConfig.fromPartial(object.config);
        } else {
            message.config = undefined;
        }
        if (object.audio !== undefined && object.audio !== null) {
            message.audio = RecognitionAudio.fromPartial(object.audio);
        } else {
            message.audio = undefined;
        }
        return message;
    },
};

const baseLongRunningRecognitionResponse: object = {};

export const LongRunningRecognitionResponse = {
    encode(
        message: LongRunningRecognitionResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.chunks) {
            SpeechRecognitionResult.encode(
                v!,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): LongRunningRecognitionResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLongRunningRecognitionResponse,
        } as LongRunningRecognitionResponse;
        message.chunks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunks.push(
                        SpeechRecognitionResult.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LongRunningRecognitionResponse {
        const message = {
            ...baseLongRunningRecognitionResponse,
        } as LongRunningRecognitionResponse;
        message.chunks = [];
        if (object.chunks !== undefined && object.chunks !== null) {
            for (const e of object.chunks) {
                message.chunks.push(SpeechRecognitionResult.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: LongRunningRecognitionResponse): unknown {
        const obj: any = {};
        if (message.chunks) {
            obj.chunks = message.chunks.map((e) =>
                e ? SpeechRecognitionResult.toJSON(e) : undefined
            );
        } else {
            obj.chunks = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<LongRunningRecognitionResponse>
    ): LongRunningRecognitionResponse {
        const message = {
            ...baseLongRunningRecognitionResponse,
        } as LongRunningRecognitionResponse;
        message.chunks = [];
        if (object.chunks !== undefined && object.chunks !== null) {
            for (const e of object.chunks) {
                message.chunks.push(SpeechRecognitionResult.fromPartial(e));
            }
        }
        return message;
    },
};

const baseStreamingRecognitionRequest: object = {};

export const StreamingRecognitionRequest = {
    encode(
        message: StreamingRecognitionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.config !== undefined) {
            RecognitionConfig.encode(
                message.config,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.audioContent !== undefined) {
            writer.uint32(18).bytes(message.audioContent);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StreamingRecognitionRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStreamingRecognitionRequest,
        } as StreamingRecognitionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = RecognitionConfig.decode(
                        reader,
                        reader.uint32()
                    );
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

    fromJSON(object: any): StreamingRecognitionRequest {
        const message = {
            ...baseStreamingRecognitionRequest,
        } as StreamingRecognitionRequest;
        if (object.config !== undefined && object.config !== null) {
            message.config = RecognitionConfig.fromJSON(object.config);
        } else {
            message.config = undefined;
        }
        if (object.audioContent !== undefined && object.audioContent !== null) {
            message.audioContent = bytesFromBase64(object.audioContent);
        }
        return message;
    },

    toJSON(message: StreamingRecognitionRequest): unknown {
        const obj: any = {};
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

    fromPartial(
        object: DeepPartial<StreamingRecognitionRequest>
    ): StreamingRecognitionRequest {
        const message = {
            ...baseStreamingRecognitionRequest,
        } as StreamingRecognitionRequest;
        if (object.config !== undefined && object.config !== null) {
            message.config = RecognitionConfig.fromPartial(object.config);
        } else {
            message.config = undefined;
        }
        if (object.audioContent !== undefined && object.audioContent !== null) {
            message.audioContent = object.audioContent;
        } else {
            message.audioContent = undefined;
        }
        return message;
    },
};

const baseStreamingRecognitionResponse: object = {};

export const StreamingRecognitionResponse = {
    encode(
        message: StreamingRecognitionResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.chunks) {
            SpeechRecognitionChunk.encode(
                v!,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StreamingRecognitionResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStreamingRecognitionResponse,
        } as StreamingRecognitionResponse;
        message.chunks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunks.push(
                        SpeechRecognitionChunk.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StreamingRecognitionResponse {
        const message = {
            ...baseStreamingRecognitionResponse,
        } as StreamingRecognitionResponse;
        message.chunks = [];
        if (object.chunks !== undefined && object.chunks !== null) {
            for (const e of object.chunks) {
                message.chunks.push(SpeechRecognitionChunk.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: StreamingRecognitionResponse): unknown {
        const obj: any = {};
        if (message.chunks) {
            obj.chunks = message.chunks.map((e) =>
                e ? SpeechRecognitionChunk.toJSON(e) : undefined
            );
        } else {
            obj.chunks = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<StreamingRecognitionResponse>
    ): StreamingRecognitionResponse {
        const message = {
            ...baseStreamingRecognitionResponse,
        } as StreamingRecognitionResponse;
        message.chunks = [];
        if (object.chunks !== undefined && object.chunks !== null) {
            for (const e of object.chunks) {
                message.chunks.push(SpeechRecognitionChunk.fromPartial(e));
            }
        }
        return message;
    },
};

const baseRecognitionAudio: object = {};

export const RecognitionAudio = {
    encode(
        message: RecognitionAudio,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.uri !== undefined) {
            writer.uint32(18).string(message.uri);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionAudio {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecognitionAudio } as RecognitionAudio;
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

    fromJSON(object: any): RecognitionAudio {
        const message = { ...baseRecognitionAudio } as RecognitionAudio;
        if (object.content !== undefined && object.content !== null) {
            message.content = bytesFromBase64(object.content);
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        } else {
            message.uri = undefined;
        }
        return message;
    },

    toJSON(message: RecognitionAudio): unknown {
        const obj: any = {};
        message.content !== undefined &&
            (obj.content =
                message.content !== undefined
                    ? base64FromBytes(message.content)
                    : undefined);
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },

    fromPartial(object: DeepPartial<RecognitionAudio>): RecognitionAudio {
        const message = { ...baseRecognitionAudio } as RecognitionAudio;
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        } else {
            message.content = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        } else {
            message.uri = undefined;
        }
        return message;
    },
};

const baseRecognitionConfig: object = { folderId: '' };

export const RecognitionConfig = {
    encode(
        message: RecognitionConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.specification !== undefined) {
            RecognitionSpec.encode(
                message.specification,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecognitionConfig } as RecognitionConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.specification = RecognitionSpec.decode(
                        reader,
                        reader.uint32()
                    );
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

    fromJSON(object: any): RecognitionConfig {
        const message = { ...baseRecognitionConfig } as RecognitionConfig;
        if (
            object.specification !== undefined &&
            object.specification !== null
        ) {
            message.specification = RecognitionSpec.fromJSON(
                object.specification
            );
        } else {
            message.specification = undefined;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        return message;
    },

    toJSON(message: RecognitionConfig): unknown {
        const obj: any = {};
        message.specification !== undefined &&
            (obj.specification = message.specification
                ? RecognitionSpec.toJSON(message.specification)
                : undefined);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial(object: DeepPartial<RecognitionConfig>): RecognitionConfig {
        const message = { ...baseRecognitionConfig } as RecognitionConfig;
        if (
            object.specification !== undefined &&
            object.specification !== null
        ) {
            message.specification = RecognitionSpec.fromPartial(
                object.specification
            );
        } else {
            message.specification = undefined;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        return message;
    },
};

const baseRecognitionSpec: object = {
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
    encode(
        message: RecognitionSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): RecognitionSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecognitionSpec } as RecognitionSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioEncoding = reader.int32() as any;
                    break;
                case 2:
                    message.sampleRateHertz = longToNumber(
                        reader.int64() as Long
                    );
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
                    message.audioChannelCount = longToNumber(
                        reader.int64() as Long
                    );
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

    fromJSON(object: any): RecognitionSpec {
        const message = { ...baseRecognitionSpec } as RecognitionSpec;
        if (
            object.audioEncoding !== undefined &&
            object.audioEncoding !== null
        ) {
            message.audioEncoding = recognitionSpec_AudioEncodingFromJSON(
                object.audioEncoding
            );
        } else {
            message.audioEncoding = 0;
        }
        if (
            object.sampleRateHertz !== undefined &&
            object.sampleRateHertz !== null
        ) {
            message.sampleRateHertz = Number(object.sampleRateHertz);
        } else {
            message.sampleRateHertz = 0;
        }
        if (object.languageCode !== undefined && object.languageCode !== null) {
            message.languageCode = String(object.languageCode);
        } else {
            message.languageCode = '';
        }
        if (
            object.profanityFilter !== undefined &&
            object.profanityFilter !== null
        ) {
            message.profanityFilter = Boolean(object.profanityFilter);
        } else {
            message.profanityFilter = false;
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = String(object.model);
        } else {
            message.model = '';
        }
        if (
            object.partialResults !== undefined &&
            object.partialResults !== null
        ) {
            message.partialResults = Boolean(object.partialResults);
        } else {
            message.partialResults = false;
        }
        if (
            object.singleUtterance !== undefined &&
            object.singleUtterance !== null
        ) {
            message.singleUtterance = Boolean(object.singleUtterance);
        } else {
            message.singleUtterance = false;
        }
        if (
            object.audioChannelCount !== undefined &&
            object.audioChannelCount !== null
        ) {
            message.audioChannelCount = Number(object.audioChannelCount);
        } else {
            message.audioChannelCount = 0;
        }
        if (object.rawResults !== undefined && object.rawResults !== null) {
            message.rawResults = Boolean(object.rawResults);
        } else {
            message.rawResults = false;
        }
        return message;
    },

    toJSON(message: RecognitionSpec): unknown {
        const obj: any = {};
        message.audioEncoding !== undefined &&
            (obj.audioEncoding = recognitionSpec_AudioEncodingToJSON(
                message.audioEncoding
            ));
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

    fromPartial(object: DeepPartial<RecognitionSpec>): RecognitionSpec {
        const message = { ...baseRecognitionSpec } as RecognitionSpec;
        if (
            object.audioEncoding !== undefined &&
            object.audioEncoding !== null
        ) {
            message.audioEncoding = object.audioEncoding;
        } else {
            message.audioEncoding = 0;
        }
        if (
            object.sampleRateHertz !== undefined &&
            object.sampleRateHertz !== null
        ) {
            message.sampleRateHertz = object.sampleRateHertz;
        } else {
            message.sampleRateHertz = 0;
        }
        if (object.languageCode !== undefined && object.languageCode !== null) {
            message.languageCode = object.languageCode;
        } else {
            message.languageCode = '';
        }
        if (
            object.profanityFilter !== undefined &&
            object.profanityFilter !== null
        ) {
            message.profanityFilter = object.profanityFilter;
        } else {
            message.profanityFilter = false;
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = object.model;
        } else {
            message.model = '';
        }
        if (
            object.partialResults !== undefined &&
            object.partialResults !== null
        ) {
            message.partialResults = object.partialResults;
        } else {
            message.partialResults = false;
        }
        if (
            object.singleUtterance !== undefined &&
            object.singleUtterance !== null
        ) {
            message.singleUtterance = object.singleUtterance;
        } else {
            message.singleUtterance = false;
        }
        if (
            object.audioChannelCount !== undefined &&
            object.audioChannelCount !== null
        ) {
            message.audioChannelCount = object.audioChannelCount;
        } else {
            message.audioChannelCount = 0;
        }
        if (object.rawResults !== undefined && object.rawResults !== null) {
            message.rawResults = object.rawResults;
        } else {
            message.rawResults = false;
        }
        return message;
    },
};

const baseSpeechRecognitionChunk: object = {
    final: false,
    endOfUtterance: false,
};

export const SpeechRecognitionChunk = {
    encode(
        message: SpeechRecognitionChunk,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.alternatives) {
            SpeechRecognitionAlternative.encode(
                v!,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.final === true) {
            writer.uint32(16).bool(message.final);
        }
        if (message.endOfUtterance === true) {
            writer.uint32(24).bool(message.endOfUtterance);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SpeechRecognitionChunk {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSpeechRecognitionChunk,
        } as SpeechRecognitionChunk;
        message.alternatives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alternatives.push(
                        SpeechRecognitionAlternative.decode(
                            reader,
                            reader.uint32()
                        )
                    );
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

    fromJSON(object: any): SpeechRecognitionChunk {
        const message = {
            ...baseSpeechRecognitionChunk,
        } as SpeechRecognitionChunk;
        message.alternatives = [];
        if (object.alternatives !== undefined && object.alternatives !== null) {
            for (const e of object.alternatives) {
                message.alternatives.push(
                    SpeechRecognitionAlternative.fromJSON(e)
                );
            }
        }
        if (object.final !== undefined && object.final !== null) {
            message.final = Boolean(object.final);
        } else {
            message.final = false;
        }
        if (
            object.endOfUtterance !== undefined &&
            object.endOfUtterance !== null
        ) {
            message.endOfUtterance = Boolean(object.endOfUtterance);
        } else {
            message.endOfUtterance = false;
        }
        return message;
    },

    toJSON(message: SpeechRecognitionChunk): unknown {
        const obj: any = {};
        if (message.alternatives) {
            obj.alternatives = message.alternatives.map((e) =>
                e ? SpeechRecognitionAlternative.toJSON(e) : undefined
            );
        } else {
            obj.alternatives = [];
        }
        message.final !== undefined && (obj.final = message.final);
        message.endOfUtterance !== undefined &&
            (obj.endOfUtterance = message.endOfUtterance);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SpeechRecognitionChunk>
    ): SpeechRecognitionChunk {
        const message = {
            ...baseSpeechRecognitionChunk,
        } as SpeechRecognitionChunk;
        message.alternatives = [];
        if (object.alternatives !== undefined && object.alternatives !== null) {
            for (const e of object.alternatives) {
                message.alternatives.push(
                    SpeechRecognitionAlternative.fromPartial(e)
                );
            }
        }
        if (object.final !== undefined && object.final !== null) {
            message.final = object.final;
        } else {
            message.final = false;
        }
        if (
            object.endOfUtterance !== undefined &&
            object.endOfUtterance !== null
        ) {
            message.endOfUtterance = object.endOfUtterance;
        } else {
            message.endOfUtterance = false;
        }
        return message;
    },
};

const baseSpeechRecognitionResult: object = { channelTag: 0 };

export const SpeechRecognitionResult = {
    encode(
        message: SpeechRecognitionResult,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.alternatives) {
            SpeechRecognitionAlternative.encode(
                v!,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.channelTag !== 0) {
            writer.uint32(16).int64(message.channelTag);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SpeechRecognitionResult {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSpeechRecognitionResult,
        } as SpeechRecognitionResult;
        message.alternatives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alternatives.push(
                        SpeechRecognitionAlternative.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                case 2:
                    message.channelTag = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SpeechRecognitionResult {
        const message = {
            ...baseSpeechRecognitionResult,
        } as SpeechRecognitionResult;
        message.alternatives = [];
        if (object.alternatives !== undefined && object.alternatives !== null) {
            for (const e of object.alternatives) {
                message.alternatives.push(
                    SpeechRecognitionAlternative.fromJSON(e)
                );
            }
        }
        if (object.channelTag !== undefined && object.channelTag !== null) {
            message.channelTag = Number(object.channelTag);
        } else {
            message.channelTag = 0;
        }
        return message;
    },

    toJSON(message: SpeechRecognitionResult): unknown {
        const obj: any = {};
        if (message.alternatives) {
            obj.alternatives = message.alternatives.map((e) =>
                e ? SpeechRecognitionAlternative.toJSON(e) : undefined
            );
        } else {
            obj.alternatives = [];
        }
        message.channelTag !== undefined &&
            (obj.channelTag = message.channelTag);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SpeechRecognitionResult>
    ): SpeechRecognitionResult {
        const message = {
            ...baseSpeechRecognitionResult,
        } as SpeechRecognitionResult;
        message.alternatives = [];
        if (object.alternatives !== undefined && object.alternatives !== null) {
            for (const e of object.alternatives) {
                message.alternatives.push(
                    SpeechRecognitionAlternative.fromPartial(e)
                );
            }
        }
        if (object.channelTag !== undefined && object.channelTag !== null) {
            message.channelTag = object.channelTag;
        } else {
            message.channelTag = 0;
        }
        return message;
    },
};

const baseSpeechRecognitionAlternative: object = { text: '', confidence: 0 };

export const SpeechRecognitionAlternative = {
    encode(
        message: SpeechRecognitionAlternative,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.confidence !== 0) {
            writer.uint32(21).float(message.confidence);
        }
        for (const v of message.words) {
            WordInfo.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SpeechRecognitionAlternative {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSpeechRecognitionAlternative,
        } as SpeechRecognitionAlternative;
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
                    message.words.push(
                        WordInfo.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SpeechRecognitionAlternative {
        const message = {
            ...baseSpeechRecognitionAlternative,
        } as SpeechRecognitionAlternative;
        message.words = [];
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        } else {
            message.text = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = Number(object.confidence);
        } else {
            message.confidence = 0;
        }
        if (object.words !== undefined && object.words !== null) {
            for (const e of object.words) {
                message.words.push(WordInfo.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: SpeechRecognitionAlternative): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        message.confidence !== undefined &&
            (obj.confidence = message.confidence);
        if (message.words) {
            obj.words = message.words.map((e) =>
                e ? WordInfo.toJSON(e) : undefined
            );
        } else {
            obj.words = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<SpeechRecognitionAlternative>
    ): SpeechRecognitionAlternative {
        const message = {
            ...baseSpeechRecognitionAlternative,
        } as SpeechRecognitionAlternative;
        message.words = [];
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        } else {
            message.text = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = object.confidence;
        } else {
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

const baseWordInfo: object = { word: '', confidence: 0 };

export const WordInfo = {
    encode(
        message: WordInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.startTime !== undefined) {
            Duration.encode(
                message.startTime,
                writer.uint32(10).fork()
            ).ldelim();
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

    decode(input: _m0.Reader | Uint8Array, length?: number): WordInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWordInfo } as WordInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = Duration.decode(
                        reader,
                        reader.uint32()
                    );
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

    fromJSON(object: any): WordInfo {
        const message = { ...baseWordInfo } as WordInfo;
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = Duration.fromJSON(object.startTime);
        } else {
            message.startTime = undefined;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = Duration.fromJSON(object.endTime);
        } else {
            message.endTime = undefined;
        }
        if (object.word !== undefined && object.word !== null) {
            message.word = String(object.word);
        } else {
            message.word = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = Number(object.confidence);
        } else {
            message.confidence = 0;
        }
        return message;
    },

    toJSON(message: WordInfo): unknown {
        const obj: any = {};
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

    fromPartial(object: DeepPartial<WordInfo>): WordInfo {
        const message = { ...baseWordInfo } as WordInfo;
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = Duration.fromPartial(object.startTime);
        } else {
            message.startTime = undefined;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = Duration.fromPartial(object.endTime);
        } else {
            message.endTime = undefined;
        }
        if (object.word !== undefined && object.word !== null) {
            message.word = object.word;
        } else {
            message.word = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = object.confidence;
        } else {
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
        requestSerialize: (value: LongRunningRecognitionRequest) =>
            Buffer.from(LongRunningRecognitionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            LongRunningRecognitionRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    streamingRecognize: {
        path: '/yandex.cloud.ai.stt.v2.SttService/StreamingRecognize',
        requestStream: true,
        responseStream: true,
        requestSerialize: (value: StreamingRecognitionRequest) =>
            Buffer.from(StreamingRecognitionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StreamingRecognitionRequest.decode(value),
        responseSerialize: (value: StreamingRecognitionResponse) =>
            Buffer.from(StreamingRecognitionResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            StreamingRecognitionResponse.decode(value),
    },
} as const;

export interface SttServiceServer extends UntypedServiceImplementation {
    longRunningRecognize: handleUnaryCall<
        LongRunningRecognitionRequest,
        Operation
    >;
    streamingRecognize: handleBidiStreamingCall<
        StreamingRecognitionRequest,
        StreamingRecognitionResponse
    >;
}

export interface SttServiceClient extends Client {
    longRunningRecognize(
        request: LongRunningRecognitionRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    longRunningRecognize(
        request: LongRunningRecognitionRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    longRunningRecognize(
        request: LongRunningRecognitionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    streamingRecognize(): ClientDuplexStream<
        StreamingRecognitionRequest,
        StreamingRecognitionResponse
    >;
    streamingRecognize(
        options: Partial<CallOptions>
    ): ClientDuplexStream<
        StreamingRecognitionRequest,
        StreamingRecognitionResponse
    >;
    streamingRecognize(
        metadata: Metadata,
        options?: Partial<CallOptions>
    ): ClientDuplexStream<
        StreamingRecognitionRequest,
        StreamingRecognitionResponse
    >;
}

export const SttServiceClient = makeGenericClientConstructor(
    SttServiceService,
    'yandex.cloud.ai.stt.v2.SttService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): SttServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
    globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
