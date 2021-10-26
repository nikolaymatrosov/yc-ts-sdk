import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "speechkit.tts.v3";
export interface AudioContent {
    /** Bytes with audio data. */
    content: Uint8Array | undefined;
    /** Description of the audio format. */
    audioSpec: AudioFormatOptions | undefined;
}
export interface AudioFormatOptions {
    /** The audio format specified in request parameters. */
    rawAudio: RawAudio | undefined;
    /** The audio format specified inside the container metadata. */
    containerAudio: ContainerAudio | undefined;
}
export interface RawAudio {
    /** Encoding type. */
    audioEncoding: RawAudio_AudioEncoding;
    /** Sampling frequency of the signal. */
    sampleRateHertz: number;
}
export declare enum RawAudio_AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM). */
    LINEAR16_PCM = 1,
    UNRECOGNIZED = -1
}
export declare function rawAudio_AudioEncodingFromJSON(object: any): RawAudio_AudioEncoding;
export declare function rawAudio_AudioEncodingToJSON(object: RawAudio_AudioEncoding): string;
export interface ContainerAudio {
    containerAudioType: ContainerAudio_ContainerAudioType;
}
export declare enum ContainerAudio_ContainerAudioType {
    CONTAINER_AUDIO_TYPE_UNSPECIFIED = 0,
    /** WAV - RIFF linear pcm with header audio file format. */
    WAV = 1,
    OGG_OPUS = 2,
    UNRECOGNIZED = -1
}
export declare function containerAudio_ContainerAudioTypeFromJSON(object: any): ContainerAudio_ContainerAudioType;
export declare function containerAudio_ContainerAudioTypeToJSON(object: ContainerAudio_ContainerAudioType): string;
export interface TextVariable {
    /** The name of the variable. */
    variableName: string;
    /** The text of the variable. */
    variableValue: string;
}
export interface AudioVariable {
    /** The name of the variable. */
    variableName: string;
    /** Start time of the variable in milliseconds. */
    variableStartMs: number;
    /** Length of the variable in milliseconds. */
    variableLengthMs: number;
}
export interface UtteranceSynthesisResponse {
    /** Part of synthesized audio. */
    audioChunk: AudioChunk | undefined;
}
export interface AudioTemplate {
    /** Audio file. */
    audio: AudioContent | undefined;
    /** Template and description of its variables. */
    textTemplate: TextTemplate | undefined;
    /** Describing variables in audio. */
    variables: AudioVariable[];
}
export interface AudioChunk {
    /** Sequence of bytes of the synthesized audio in format specified in output_audio_spec. */
    data: Uint8Array;
}
export interface TextTemplate {
    /**
     * Template text.
     *
     * Sample:`The {animal} goes to the {place}.`
     */
    textTemplate: string;
    /**
     * Defining variables in template text.
     *
     * Sample: `{animal: cat, place: forest}`
     */
    variables: TextVariable[];
}
export interface Hints {
    /** Name of speaker to use. */
    voice: string | undefined;
    /** Template for synthesizing. */
    audioTemplate: AudioTemplate | undefined;
    /** hint to change speed */
    speed: number | undefined;
    /** hint to regulate volume. For LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED normalization will use MAX_PEAK, if volume in (0, 1], LUFS if volume in [-145, 0). */
    volume: number | undefined;
}
export interface UtteranceSynthesisRequest {
    /**
     * The name of the model.
     *
     * Specifies basic synthesis functionality. Currently should be empty.
     */
    model: string;
    /** Raw text (e.g. "Hello, Alice"). */
    text: string | undefined;
    /** Text template instance, e.g. `{"Hello, {username}" with username="Alice"}`. */
    textTemplate: TextTemplate | undefined;
    /** Optional hints for synthesis. */
    hints: Hints[];
    /** Optional. Default: 22050 Hz, linear 16-bit signed little-endian PCM, with WAV header */
    outputAudioSpec: AudioFormatOptions | undefined;
    /** Optional. Default: LUFS, type of loudness normalization, default value -19. */
    loudnessNormalizationType: UtteranceSynthesisRequest_LoudnessNormalizationType;
}
/** Normalization type */
export declare enum UtteranceSynthesisRequest_LoudnessNormalizationType {
    LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED = 0,
    MAX_PEAK = 1,
    LUFS = 2,
    UNRECOGNIZED = -1
}
export declare function utteranceSynthesisRequest_LoudnessNormalizationTypeFromJSON(object: any): UtteranceSynthesisRequest_LoudnessNormalizationType;
export declare function utteranceSynthesisRequest_LoudnessNormalizationTypeToJSON(object: UtteranceSynthesisRequest_LoudnessNormalizationType): string;
export declare const AudioContent: {
    encode(message: AudioContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioContent;
    fromJSON(object: any): AudioContent;
    toJSON(message: AudioContent): unknown;
    fromPartial(object: DeepPartial<AudioContent>): AudioContent;
};
export declare const AudioFormatOptions: {
    encode(message: AudioFormatOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioFormatOptions;
    fromJSON(object: any): AudioFormatOptions;
    toJSON(message: AudioFormatOptions): unknown;
    fromPartial(object: DeepPartial<AudioFormatOptions>): AudioFormatOptions;
};
export declare const RawAudio: {
    encode(message: RawAudio, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RawAudio;
    fromJSON(object: any): RawAudio;
    toJSON(message: RawAudio): unknown;
    fromPartial(object: DeepPartial<RawAudio>): RawAudio;
};
export declare const ContainerAudio: {
    encode(message: ContainerAudio, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContainerAudio;
    fromJSON(object: any): ContainerAudio;
    toJSON(message: ContainerAudio): unknown;
    fromPartial(object: DeepPartial<ContainerAudio>): ContainerAudio;
};
export declare const TextVariable: {
    encode(message: TextVariable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextVariable;
    fromJSON(object: any): TextVariable;
    toJSON(message: TextVariable): unknown;
    fromPartial(object: DeepPartial<TextVariable>): TextVariable;
};
export declare const AudioVariable: {
    encode(message: AudioVariable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioVariable;
    fromJSON(object: any): AudioVariable;
    toJSON(message: AudioVariable): unknown;
    fromPartial(object: DeepPartial<AudioVariable>): AudioVariable;
};
export declare const UtteranceSynthesisResponse: {
    encode(message: UtteranceSynthesisResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UtteranceSynthesisResponse;
    fromJSON(object: any): UtteranceSynthesisResponse;
    toJSON(message: UtteranceSynthesisResponse): unknown;
    fromPartial(object: DeepPartial<UtteranceSynthesisResponse>): UtteranceSynthesisResponse;
};
export declare const AudioTemplate: {
    encode(message: AudioTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioTemplate;
    fromJSON(object: any): AudioTemplate;
    toJSON(message: AudioTemplate): unknown;
    fromPartial(object: DeepPartial<AudioTemplate>): AudioTemplate;
};
export declare const AudioChunk: {
    encode(message: AudioChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioChunk;
    fromJSON(object: any): AudioChunk;
    toJSON(message: AudioChunk): unknown;
    fromPartial(object: DeepPartial<AudioChunk>): AudioChunk;
};
export declare const TextTemplate: {
    encode(message: TextTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextTemplate;
    fromJSON(object: any): TextTemplate;
    toJSON(message: TextTemplate): unknown;
    fromPartial(object: DeepPartial<TextTemplate>): TextTemplate;
};
export declare const Hints: {
    encode(message: Hints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Hints;
    fromJSON(object: any): Hints;
    toJSON(message: Hints): unknown;
    fromPartial(object: DeepPartial<Hints>): Hints;
};
export declare const UtteranceSynthesisRequest: {
    encode(message: UtteranceSynthesisRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UtteranceSynthesisRequest;
    fromJSON(object: any): UtteranceSynthesisRequest;
    toJSON(message: UtteranceSynthesisRequest): unknown;
    fromPartial(object: DeepPartial<UtteranceSynthesisRequest>): UtteranceSynthesisRequest;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
