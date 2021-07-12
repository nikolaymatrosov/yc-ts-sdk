/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'speechkit.tts.v3';

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

export enum RawAudio_AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    /** LINEAR16_PCM - 16-bit signed little-endian (Linear PCM). */
    LINEAR16_PCM = 1,
    UNRECOGNIZED = -1,
}

export function rawAudio_AudioEncodingFromJSON(
    object: any
): RawAudio_AudioEncoding {
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

export function rawAudio_AudioEncodingToJSON(
    object: RawAudio_AudioEncoding
): string {
    switch (object) {
        case RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
            return 'AUDIO_ENCODING_UNSPECIFIED';
        case RawAudio_AudioEncoding.LINEAR16_PCM:
            return 'LINEAR16_PCM';
        default:
            return 'UNKNOWN';
    }
}

export interface ContainerAudio {
    containerAudioType: ContainerAudio_ContainerAudioType;
}

export enum ContainerAudio_ContainerAudioType {
    CONTAINER_AUDIO_TYPE_UNSPECIFIED = 0,
    /** WAV - RIFF linear pcm with header audio file format. */
    WAV = 1,
    UNRECOGNIZED = -1,
}

export function containerAudio_ContainerAudioTypeFromJSON(
    object: any
): ContainerAudio_ContainerAudioType {
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

export function containerAudio_ContainerAudioTypeToJSON(
    object: ContainerAudio_ContainerAudioType
): string {
    switch (object) {
        case ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED:
            return 'CONTAINER_AUDIO_TYPE_UNSPECIFIED';
        case ContainerAudio_ContainerAudioType.WAV:
            return 'WAV';
        default:
            return 'UNKNOWN';
    }
}

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
    /** Lenght of the variable in milliseconds. */
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
}

export interface UtteranceSynthesisRequest {
    /**
     * The name of the model.
     *
     * Currently avalible only `general`.
     */
    model: string;
    /** Raw text (e.g. "Hello, Alice"). */
    text: string | undefined;
    /** Text template instalce, e.g. `{"Hello, {username}" with username="Alice"}`. */
    textTemplate: TextTemplate | undefined;
    /** Optional hints for synthesis. */
    hints: Hints[];
    /** Optional. Default: 22050 Hz, linear 16-bit signed little-endian PCM. */
    outputAudioSpec: AudioFormatOptions | undefined;
}

const baseAudioContent: object = {};

export const AudioContent = {
    encode(
        message: AudioContent,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.content !== undefined) {
            writer.uint32(10).bytes(message.content);
        }
        if (message.audioSpec !== undefined) {
            AudioFormatOptions.encode(
                message.audioSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AudioContent {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioContent } as AudioContent;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = reader.bytes();
                    break;
                case 2:
                    message.audioSpec = AudioFormatOptions.decode(
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

    fromJSON(object: any): AudioContent {
        const message = { ...baseAudioContent } as AudioContent;
        if (object.content !== undefined && object.content !== null) {
            message.content = bytesFromBase64(object.content);
        }
        if (object.audioSpec !== undefined && object.audioSpec !== null) {
            message.audioSpec = AudioFormatOptions.fromJSON(object.audioSpec);
        } else {
            message.audioSpec = undefined;
        }
        return message;
    },

    toJSON(message: AudioContent): unknown {
        const obj: any = {};
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

    fromPartial(object: DeepPartial<AudioContent>): AudioContent {
        const message = { ...baseAudioContent } as AudioContent;
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        } else {
            message.content = undefined;
        }
        if (object.audioSpec !== undefined && object.audioSpec !== null) {
            message.audioSpec = AudioFormatOptions.fromPartial(
                object.audioSpec
            );
        } else {
            message.audioSpec = undefined;
        }
        return message;
    },
};

const baseAudioFormatOptions: object = {};

export const AudioFormatOptions = {
    encode(
        message: AudioFormatOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.rawAudio !== undefined) {
            RawAudio.encode(
                message.rawAudio,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.containerAudio !== undefined) {
            ContainerAudio.encode(
                message.containerAudio,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AudioFormatOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioFormatOptions } as AudioFormatOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rawAudio = RawAudio.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.containerAudio = ContainerAudio.decode(
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

    fromJSON(object: any): AudioFormatOptions {
        const message = { ...baseAudioFormatOptions } as AudioFormatOptions;
        if (object.rawAudio !== undefined && object.rawAudio !== null) {
            message.rawAudio = RawAudio.fromJSON(object.rawAudio);
        } else {
            message.rawAudio = undefined;
        }
        if (
            object.containerAudio !== undefined &&
            object.containerAudio !== null
        ) {
            message.containerAudio = ContainerAudio.fromJSON(
                object.containerAudio
            );
        } else {
            message.containerAudio = undefined;
        }
        return message;
    },

    toJSON(message: AudioFormatOptions): unknown {
        const obj: any = {};
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

    fromPartial(object: DeepPartial<AudioFormatOptions>): AudioFormatOptions {
        const message = { ...baseAudioFormatOptions } as AudioFormatOptions;
        if (object.rawAudio !== undefined && object.rawAudio !== null) {
            message.rawAudio = RawAudio.fromPartial(object.rawAudio);
        } else {
            message.rawAudio = undefined;
        }
        if (
            object.containerAudio !== undefined &&
            object.containerAudio !== null
        ) {
            message.containerAudio = ContainerAudio.fromPartial(
                object.containerAudio
            );
        } else {
            message.containerAudio = undefined;
        }
        return message;
    },
};

const baseRawAudio: object = { audioEncoding: 0, sampleRateHertz: 0 };

export const RawAudio = {
    encode(
        message: RawAudio,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.audioEncoding !== 0) {
            writer.uint32(8).int32(message.audioEncoding);
        }
        if (message.sampleRateHertz !== 0) {
            writer.uint32(16).int64(message.sampleRateHertz);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RawAudio {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRawAudio } as RawAudio;
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RawAudio {
        const message = { ...baseRawAudio } as RawAudio;
        if (
            object.audioEncoding !== undefined &&
            object.audioEncoding !== null
        ) {
            message.audioEncoding = rawAudio_AudioEncodingFromJSON(
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
        return message;
    },

    toJSON(message: RawAudio): unknown {
        const obj: any = {};
        message.audioEncoding !== undefined &&
            (obj.audioEncoding = rawAudio_AudioEncodingToJSON(
                message.audioEncoding
            ));
        message.sampleRateHertz !== undefined &&
            (obj.sampleRateHertz = message.sampleRateHertz);
        return obj;
    },

    fromPartial(object: DeepPartial<RawAudio>): RawAudio {
        const message = { ...baseRawAudio } as RawAudio;
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
        return message;
    },
};

const baseContainerAudio: object = { containerAudioType: 0 };

export const ContainerAudio = {
    encode(
        message: ContainerAudio,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.containerAudioType !== 0) {
            writer.uint32(8).int32(message.containerAudioType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ContainerAudio {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContainerAudio } as ContainerAudio;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerAudioType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ContainerAudio {
        const message = { ...baseContainerAudio } as ContainerAudio;
        if (
            object.containerAudioType !== undefined &&
            object.containerAudioType !== null
        ) {
            message.containerAudioType =
                containerAudio_ContainerAudioTypeFromJSON(
                    object.containerAudioType
                );
        } else {
            message.containerAudioType = 0;
        }
        return message;
    },

    toJSON(message: ContainerAudio): unknown {
        const obj: any = {};
        message.containerAudioType !== undefined &&
            (obj.containerAudioType = containerAudio_ContainerAudioTypeToJSON(
                message.containerAudioType
            ));
        return obj;
    },

    fromPartial(object: DeepPartial<ContainerAudio>): ContainerAudio {
        const message = { ...baseContainerAudio } as ContainerAudio;
        if (
            object.containerAudioType !== undefined &&
            object.containerAudioType !== null
        ) {
            message.containerAudioType = object.containerAudioType;
        } else {
            message.containerAudioType = 0;
        }
        return message;
    },
};

const baseTextVariable: object = { variableName: '', variableValue: '' };

export const TextVariable = {
    encode(
        message: TextVariable,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.variableName !== '') {
            writer.uint32(10).string(message.variableName);
        }
        if (message.variableValue !== '') {
            writer.uint32(18).string(message.variableValue);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextVariable {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextVariable } as TextVariable;
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

    fromJSON(object: any): TextVariable {
        const message = { ...baseTextVariable } as TextVariable;
        if (object.variableName !== undefined && object.variableName !== null) {
            message.variableName = String(object.variableName);
        } else {
            message.variableName = '';
        }
        if (
            object.variableValue !== undefined &&
            object.variableValue !== null
        ) {
            message.variableValue = String(object.variableValue);
        } else {
            message.variableValue = '';
        }
        return message;
    },

    toJSON(message: TextVariable): unknown {
        const obj: any = {};
        message.variableName !== undefined &&
            (obj.variableName = message.variableName);
        message.variableValue !== undefined &&
            (obj.variableValue = message.variableValue);
        return obj;
    },

    fromPartial(object: DeepPartial<TextVariable>): TextVariable {
        const message = { ...baseTextVariable } as TextVariable;
        if (object.variableName !== undefined && object.variableName !== null) {
            message.variableName = object.variableName;
        } else {
            message.variableName = '';
        }
        if (
            object.variableValue !== undefined &&
            object.variableValue !== null
        ) {
            message.variableValue = object.variableValue;
        } else {
            message.variableValue = '';
        }
        return message;
    },
};

const baseAudioVariable: object = {
    variableName: '',
    variableStartMs: 0,
    variableLengthMs: 0,
};

export const AudioVariable = {
    encode(
        message: AudioVariable,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): AudioVariable {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioVariable } as AudioVariable;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.variableName = reader.string();
                    break;
                case 2:
                    message.variableStartMs = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 3:
                    message.variableLengthMs = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AudioVariable {
        const message = { ...baseAudioVariable } as AudioVariable;
        if (object.variableName !== undefined && object.variableName !== null) {
            message.variableName = String(object.variableName);
        } else {
            message.variableName = '';
        }
        if (
            object.variableStartMs !== undefined &&
            object.variableStartMs !== null
        ) {
            message.variableStartMs = Number(object.variableStartMs);
        } else {
            message.variableStartMs = 0;
        }
        if (
            object.variableLengthMs !== undefined &&
            object.variableLengthMs !== null
        ) {
            message.variableLengthMs = Number(object.variableLengthMs);
        } else {
            message.variableLengthMs = 0;
        }
        return message;
    },

    toJSON(message: AudioVariable): unknown {
        const obj: any = {};
        message.variableName !== undefined &&
            (obj.variableName = message.variableName);
        message.variableStartMs !== undefined &&
            (obj.variableStartMs = message.variableStartMs);
        message.variableLengthMs !== undefined &&
            (obj.variableLengthMs = message.variableLengthMs);
        return obj;
    },

    fromPartial(object: DeepPartial<AudioVariable>): AudioVariable {
        const message = { ...baseAudioVariable } as AudioVariable;
        if (object.variableName !== undefined && object.variableName !== null) {
            message.variableName = object.variableName;
        } else {
            message.variableName = '';
        }
        if (
            object.variableStartMs !== undefined &&
            object.variableStartMs !== null
        ) {
            message.variableStartMs = object.variableStartMs;
        } else {
            message.variableStartMs = 0;
        }
        if (
            object.variableLengthMs !== undefined &&
            object.variableLengthMs !== null
        ) {
            message.variableLengthMs = object.variableLengthMs;
        } else {
            message.variableLengthMs = 0;
        }
        return message;
    },
};

const baseUtteranceSynthesisResponse: object = {};

export const UtteranceSynthesisResponse = {
    encode(
        message: UtteranceSynthesisResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.audioChunk !== undefined) {
            AudioChunk.encode(
                message.audioChunk,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UtteranceSynthesisResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUtteranceSynthesisResponse,
        } as UtteranceSynthesisResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioChunk = AudioChunk.decode(
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

    fromJSON(object: any): UtteranceSynthesisResponse {
        const message = {
            ...baseUtteranceSynthesisResponse,
        } as UtteranceSynthesisResponse;
        if (object.audioChunk !== undefined && object.audioChunk !== null) {
            message.audioChunk = AudioChunk.fromJSON(object.audioChunk);
        } else {
            message.audioChunk = undefined;
        }
        return message;
    },

    toJSON(message: UtteranceSynthesisResponse): unknown {
        const obj: any = {};
        message.audioChunk !== undefined &&
            (obj.audioChunk = message.audioChunk
                ? AudioChunk.toJSON(message.audioChunk)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UtteranceSynthesisResponse>
    ): UtteranceSynthesisResponse {
        const message = {
            ...baseUtteranceSynthesisResponse,
        } as UtteranceSynthesisResponse;
        if (object.audioChunk !== undefined && object.audioChunk !== null) {
            message.audioChunk = AudioChunk.fromPartial(object.audioChunk);
        } else {
            message.audioChunk = undefined;
        }
        return message;
    },
};

const baseAudioTemplate: object = {};

export const AudioTemplate = {
    encode(
        message: AudioTemplate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.audio !== undefined) {
            AudioContent.encode(
                message.audio,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.textTemplate !== undefined) {
            TextTemplate.encode(
                message.textTemplate,
                writer.uint32(18).fork()
            ).ldelim();
        }
        for (const v of message.variables) {
            AudioVariable.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AudioTemplate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioTemplate } as AudioTemplate;
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audio = AudioContent.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.textTemplate = TextTemplate.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.variables.push(
                        AudioVariable.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AudioTemplate {
        const message = { ...baseAudioTemplate } as AudioTemplate;
        message.variables = [];
        if (object.audio !== undefined && object.audio !== null) {
            message.audio = AudioContent.fromJSON(object.audio);
        } else {
            message.audio = undefined;
        }
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = TextTemplate.fromJSON(object.textTemplate);
        } else {
            message.textTemplate = undefined;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(AudioVariable.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: AudioTemplate): unknown {
        const obj: any = {};
        message.audio !== undefined &&
            (obj.audio = message.audio
                ? AudioContent.toJSON(message.audio)
                : undefined);
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate
                ? TextTemplate.toJSON(message.textTemplate)
                : undefined);
        if (message.variables) {
            obj.variables = message.variables.map((e) =>
                e ? AudioVariable.toJSON(e) : undefined
            );
        } else {
            obj.variables = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<AudioTemplate>): AudioTemplate {
        const message = { ...baseAudioTemplate } as AudioTemplate;
        message.variables = [];
        if (object.audio !== undefined && object.audio !== null) {
            message.audio = AudioContent.fromPartial(object.audio);
        } else {
            message.audio = undefined;
        }
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = TextTemplate.fromPartial(
                object.textTemplate
            );
        } else {
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

const baseAudioChunk: object = {};

export const AudioChunk = {
    encode(
        message: AudioChunk,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AudioChunk {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAudioChunk } as AudioChunk;
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

    fromJSON(object: any): AudioChunk {
        const message = { ...baseAudioChunk } as AudioChunk;
        message.data = new Uint8Array();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },

    toJSON(message: AudioChunk): unknown {
        const obj: any = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(
                message.data !== undefined ? message.data : new Uint8Array()
            ));
        return obj;
    },

    fromPartial(object: DeepPartial<AudioChunk>): AudioChunk {
        const message = { ...baseAudioChunk } as AudioChunk;
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        } else {
            message.data = new Uint8Array();
        }
        return message;
    },
};

const baseTextTemplate: object = { textTemplate: '' };

export const TextTemplate = {
    encode(
        message: TextTemplate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.textTemplate !== '') {
            writer.uint32(10).string(message.textTemplate);
        }
        for (const v of message.variables) {
            TextVariable.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TextTemplate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextTemplate } as TextTemplate;
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.textTemplate = reader.string();
                    break;
                case 2:
                    message.variables.push(
                        TextVariable.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TextTemplate {
        const message = { ...baseTextTemplate } as TextTemplate;
        message.variables = [];
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = String(object.textTemplate);
        } else {
            message.textTemplate = '';
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(TextVariable.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: TextTemplate): unknown {
        const obj: any = {};
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate);
        if (message.variables) {
            obj.variables = message.variables.map((e) =>
                e ? TextVariable.toJSON(e) : undefined
            );
        } else {
            obj.variables = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<TextTemplate>): TextTemplate {
        const message = { ...baseTextTemplate } as TextTemplate;
        message.variables = [];
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = object.textTemplate;
        } else {
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

const baseHints: object = {};

export const Hints = {
    encode(
        message: Hints,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.voice !== undefined) {
            writer.uint32(10).string(message.voice);
        }
        if (message.audioTemplate !== undefined) {
            AudioTemplate.encode(
                message.audioTemplate,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Hints {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHints } as Hints;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voice = reader.string();
                    break;
                case 2:
                    message.audioTemplate = AudioTemplate.decode(
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

    fromJSON(object: any): Hints {
        const message = { ...baseHints } as Hints;
        if (object.voice !== undefined && object.voice !== null) {
            message.voice = String(object.voice);
        } else {
            message.voice = undefined;
        }
        if (
            object.audioTemplate !== undefined &&
            object.audioTemplate !== null
        ) {
            message.audioTemplate = AudioTemplate.fromJSON(
                object.audioTemplate
            );
        } else {
            message.audioTemplate = undefined;
        }
        return message;
    },

    toJSON(message: Hints): unknown {
        const obj: any = {};
        message.voice !== undefined && (obj.voice = message.voice);
        message.audioTemplate !== undefined &&
            (obj.audioTemplate = message.audioTemplate
                ? AudioTemplate.toJSON(message.audioTemplate)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Hints>): Hints {
        const message = { ...baseHints } as Hints;
        if (object.voice !== undefined && object.voice !== null) {
            message.voice = object.voice;
        } else {
            message.voice = undefined;
        }
        if (
            object.audioTemplate !== undefined &&
            object.audioTemplate !== null
        ) {
            message.audioTemplate = AudioTemplate.fromPartial(
                object.audioTemplate
            );
        } else {
            message.audioTemplate = undefined;
        }
        return message;
    },
};

const baseUtteranceSynthesisRequest: object = { model: '' };

export const UtteranceSynthesisRequest = {
    encode(
        message: UtteranceSynthesisRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.model !== '') {
            writer.uint32(10).string(message.model);
        }
        if (message.text !== undefined) {
            writer.uint32(18).string(message.text);
        }
        if (message.textTemplate !== undefined) {
            TextTemplate.encode(
                message.textTemplate,
                writer.uint32(26).fork()
            ).ldelim();
        }
        for (const v of message.hints) {
            Hints.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.outputAudioSpec !== undefined) {
            AudioFormatOptions.encode(
                message.outputAudioSpec,
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UtteranceSynthesisRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUtteranceSynthesisRequest,
        } as UtteranceSynthesisRequest;
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
                    message.textTemplate = TextTemplate.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.hints.push(Hints.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.outputAudioSpec = AudioFormatOptions.decode(
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

    fromJSON(object: any): UtteranceSynthesisRequest {
        const message = {
            ...baseUtteranceSynthesisRequest,
        } as UtteranceSynthesisRequest;
        message.hints = [];
        if (object.model !== undefined && object.model !== null) {
            message.model = String(object.model);
        } else {
            message.model = '';
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        } else {
            message.text = undefined;
        }
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = TextTemplate.fromJSON(object.textTemplate);
        } else {
            message.textTemplate = undefined;
        }
        if (object.hints !== undefined && object.hints !== null) {
            for (const e of object.hints) {
                message.hints.push(Hints.fromJSON(e));
            }
        }
        if (
            object.outputAudioSpec !== undefined &&
            object.outputAudioSpec !== null
        ) {
            message.outputAudioSpec = AudioFormatOptions.fromJSON(
                object.outputAudioSpec
            );
        } else {
            message.outputAudioSpec = undefined;
        }
        return message;
    },

    toJSON(message: UtteranceSynthesisRequest): unknown {
        const obj: any = {};
        message.model !== undefined && (obj.model = message.model);
        message.text !== undefined && (obj.text = message.text);
        message.textTemplate !== undefined &&
            (obj.textTemplate = message.textTemplate
                ? TextTemplate.toJSON(message.textTemplate)
                : undefined);
        if (message.hints) {
            obj.hints = message.hints.map((e) =>
                e ? Hints.toJSON(e) : undefined
            );
        } else {
            obj.hints = [];
        }
        message.outputAudioSpec !== undefined &&
            (obj.outputAudioSpec = message.outputAudioSpec
                ? AudioFormatOptions.toJSON(message.outputAudioSpec)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UtteranceSynthesisRequest>
    ): UtteranceSynthesisRequest {
        const message = {
            ...baseUtteranceSynthesisRequest,
        } as UtteranceSynthesisRequest;
        message.hints = [];
        if (object.model !== undefined && object.model !== null) {
            message.model = object.model;
        } else {
            message.model = '';
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        } else {
            message.text = undefined;
        }
        if (object.textTemplate !== undefined && object.textTemplate !== null) {
            message.textTemplate = TextTemplate.fromPartial(
                object.textTemplate
            );
        } else {
            message.textTemplate = undefined;
        }
        if (object.hints !== undefined && object.hints !== null) {
            for (const e of object.hints) {
                message.hints.push(Hints.fromPartial(e));
            }
        }
        if (
            object.outputAudioSpec !== undefined &&
            object.outputAudioSpec !== null
        ) {
            message.outputAudioSpec = AudioFormatOptions.fromPartial(
                object.outputAudioSpec
            );
        } else {
            message.outputAudioSpec = undefined;
        }
        return message;
    },
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
