/// <reference types="node" />
import { UtteranceSynthesisRequest, UtteranceSynthesisResponse } from '../../../../../yandex/cloud/ai/tts/v3/tts';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleServerStreamingCall, Client, CallOptions, ClientReadableStream, Metadata } from '@grpc/grpc-js';
export declare const protobufPackage = "speechkit.tts.v3";
/** A set of methods for voice synthesis. */
export declare const SynthesizerService: {
    /** Synthesizing text into speech. */
    readonly utteranceSynthesis: {
        readonly path: "/speechkit.tts.v3.Synthesizer/UtteranceSynthesis";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: UtteranceSynthesisRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UtteranceSynthesisRequest;
        readonly responseSerialize: (value: UtteranceSynthesisResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UtteranceSynthesisResponse;
    };
};
export interface SynthesizerServer extends UntypedServiceImplementation {
    /** Synthesizing text into speech. */
    utteranceSynthesis: handleServerStreamingCall<UtteranceSynthesisRequest, UtteranceSynthesisResponse>;
}
export interface SynthesizerClient extends Client {
    /** Synthesizing text into speech. */
    utteranceSynthesis(request: UtteranceSynthesisRequest, options?: Partial<CallOptions>): ClientReadableStream<UtteranceSynthesisResponse>;
    utteranceSynthesis(request: UtteranceSynthesisRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<UtteranceSynthesisResponse>;
}
export declare const SynthesizerClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => SynthesizerClient;
