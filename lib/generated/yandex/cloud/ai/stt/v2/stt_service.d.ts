/// <reference types="node" />
import { Duration } from '../../../../../google/protobuf/duration';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, handleBidiStreamingCall, Client, ClientUnaryCall, Metadata, CallOptions, ClientDuplexStream, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ai.stt.v2";
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
export declare enum RecognitionSpec_AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM) */
    LINEAR16_PCM = 1,
    OGG_OPUS = 2,
    UNRECOGNIZED = -1
}
export declare function recognitionSpec_AudioEncodingFromJSON(object: any): RecognitionSpec_AudioEncoding;
export declare function recognitionSpec_AudioEncodingToJSON(object: RecognitionSpec_AudioEncoding): string;
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
export declare const LongRunningRecognitionRequest: {
    encode(message: LongRunningRecognitionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LongRunningRecognitionRequest;
    fromJSON(object: any): LongRunningRecognitionRequest;
    toJSON(message: LongRunningRecognitionRequest): unknown;
    fromPartial(object: DeepPartial<LongRunningRecognitionRequest>): LongRunningRecognitionRequest;
};
export declare const LongRunningRecognitionResponse: {
    encode(message: LongRunningRecognitionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LongRunningRecognitionResponse;
    fromJSON(object: any): LongRunningRecognitionResponse;
    toJSON(message: LongRunningRecognitionResponse): unknown;
    fromPartial(object: DeepPartial<LongRunningRecognitionResponse>): LongRunningRecognitionResponse;
};
export declare const StreamingRecognitionRequest: {
    encode(message: StreamingRecognitionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamingRecognitionRequest;
    fromJSON(object: any): StreamingRecognitionRequest;
    toJSON(message: StreamingRecognitionRequest): unknown;
    fromPartial(object: DeepPartial<StreamingRecognitionRequest>): StreamingRecognitionRequest;
};
export declare const StreamingRecognitionResponse: {
    encode(message: StreamingRecognitionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamingRecognitionResponse;
    fromJSON(object: any): StreamingRecognitionResponse;
    toJSON(message: StreamingRecognitionResponse): unknown;
    fromPartial(object: DeepPartial<StreamingRecognitionResponse>): StreamingRecognitionResponse;
};
export declare const RecognitionAudio: {
    encode(message: RecognitionAudio, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionAudio;
    fromJSON(object: any): RecognitionAudio;
    toJSON(message: RecognitionAudio): unknown;
    fromPartial(object: DeepPartial<RecognitionAudio>): RecognitionAudio;
};
export declare const RecognitionConfig: {
    encode(message: RecognitionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionConfig;
    fromJSON(object: any): RecognitionConfig;
    toJSON(message: RecognitionConfig): unknown;
    fromPartial(object: DeepPartial<RecognitionConfig>): RecognitionConfig;
};
export declare const RecognitionSpec: {
    encode(message: RecognitionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionSpec;
    fromJSON(object: any): RecognitionSpec;
    toJSON(message: RecognitionSpec): unknown;
    fromPartial(object: DeepPartial<RecognitionSpec>): RecognitionSpec;
};
export declare const SpeechRecognitionChunk: {
    encode(message: SpeechRecognitionChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SpeechRecognitionChunk;
    fromJSON(object: any): SpeechRecognitionChunk;
    toJSON(message: SpeechRecognitionChunk): unknown;
    fromPartial(object: DeepPartial<SpeechRecognitionChunk>): SpeechRecognitionChunk;
};
export declare const SpeechRecognitionResult: {
    encode(message: SpeechRecognitionResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SpeechRecognitionResult;
    fromJSON(object: any): SpeechRecognitionResult;
    toJSON(message: SpeechRecognitionResult): unknown;
    fromPartial(object: DeepPartial<SpeechRecognitionResult>): SpeechRecognitionResult;
};
export declare const SpeechRecognitionAlternative: {
    encode(message: SpeechRecognitionAlternative, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SpeechRecognitionAlternative;
    fromJSON(object: any): SpeechRecognitionAlternative;
    toJSON(message: SpeechRecognitionAlternative): unknown;
    fromPartial(object: DeepPartial<SpeechRecognitionAlternative>): SpeechRecognitionAlternative;
};
export declare const WordInfo: {
    encode(message: WordInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WordInfo;
    fromJSON(object: any): WordInfo;
    toJSON(message: WordInfo): unknown;
    fromPartial(object: DeepPartial<WordInfo>): WordInfo;
};
export declare const SttServiceService: {
    readonly longRunningRecognize: {
        readonly path: "/yandex.cloud.ai.stt.v2.SttService/LongRunningRecognize";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: LongRunningRecognitionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => LongRunningRecognitionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly streamingRecognize: {
        readonly path: "/yandex.cloud.ai.stt.v2.SttService/StreamingRecognize";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamingRecognitionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamingRecognitionRequest;
        readonly responseSerialize: (value: StreamingRecognitionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamingRecognitionResponse;
    };
};
export interface SttServiceServer extends UntypedServiceImplementation {
    longRunningRecognize: handleUnaryCall<LongRunningRecognitionRequest, Operation>;
    streamingRecognize: handleBidiStreamingCall<StreamingRecognitionRequest, StreamingRecognitionResponse>;
}
export interface SttServiceClient extends Client {
    longRunningRecognize(request: LongRunningRecognitionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    longRunningRecognize(request: LongRunningRecognitionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    longRunningRecognize(request: LongRunningRecognitionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    streamingRecognize(): ClientDuplexStream<StreamingRecognitionRequest, StreamingRecognitionResponse>;
    streamingRecognize(options: Partial<CallOptions>): ClientDuplexStream<StreamingRecognitionRequest, StreamingRecognitionResponse>;
    streamingRecognize(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<StreamingRecognitionRequest, StreamingRecognitionResponse>;
}
export declare const SttServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => SttServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
