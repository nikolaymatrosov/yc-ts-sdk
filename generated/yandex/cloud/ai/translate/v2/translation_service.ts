/* eslint-disable */
import {
    TranslatedText,
    Language,
} from '../../../../../yandex/cloud/ai/translate/v2/translation';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.translate.v2';

export interface TranslateRequest {
    /**
     * The text language to translate from.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     *
     * Required for translating with glossary.
     */
    sourceLanguageCode: string;
    /**
     * The target language to translate the text.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
     */
    targetLanguageCode: string;
    /** Format of the text. */
    format: TranslateRequest_Format;
    /**
     * Array of the strings to translate.
     * The maximum total length of all strings is 10000 characters.
     */
    texts: string[];
    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId: string;
    /** Do not specify this field, custom models are not supported yet. */
    model: string;
    /** Glossary to be applied for the translation. For more information, see [Glossaries](/docs/translate/concepts/glossary). */
    glossaryConfig: TranslateGlossaryConfig | undefined;
}

export enum TranslateRequest_Format {
    FORMAT_UNSPECIFIED = 0,
    /** PLAIN_TEXT - Text without markup. Default value. */
    PLAIN_TEXT = 1,
    /** HTML - Text in the HTML format. */
    HTML = 2,
    UNRECOGNIZED = -1,
}

export function translateRequest_FormatFromJSON(
    object: any
): TranslateRequest_Format {
    switch (object) {
        case 0:
        case 'FORMAT_UNSPECIFIED':
            return TranslateRequest_Format.FORMAT_UNSPECIFIED;
        case 1:
        case 'PLAIN_TEXT':
            return TranslateRequest_Format.PLAIN_TEXT;
        case 2:
        case 'HTML':
            return TranslateRequest_Format.HTML;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TranslateRequest_Format.UNRECOGNIZED;
    }
}

export function translateRequest_FormatToJSON(
    object: TranslateRequest_Format
): string {
    switch (object) {
        case TranslateRequest_Format.FORMAT_UNSPECIFIED:
            return 'FORMAT_UNSPECIFIED';
        case TranslateRequest_Format.PLAIN_TEXT:
            return 'PLAIN_TEXT';
        case TranslateRequest_Format.HTML:
            return 'HTML';
        default:
            return 'UNKNOWN';
    }
}

export interface TranslateGlossaryConfig {
    /** Pass glossary data in the request. Currently, only this way to pass glossary is supported. */
    glossaryData: GlossaryData | undefined;
}

export interface GlossaryData {
    /**
     * Array of text pairs.
     *
     * The maximum total length of all source texts is 10000 characters.
     * The maximum total length of all translated texts is 10000 characters.
     */
    glossaryPairs: GlossaryPair[];
}

export interface GlossaryPair {
    /** Text in the source language. */
    sourceText: string;
    /** Text in the target language. */
    translatedText: string;
}

export interface TranslateResponse {
    /** Array of the translations. */
    translations: TranslatedText[];
}

export interface DetectLanguageRequest {
    /** The text to detect the language for. */
    text: string;
    /**
     * List of the most likely languages. These languages will be given preference when detecting the text language.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     *
     * To get the list of supported languages, use a [TranslationService.ListLanguages] request.
     */
    languageCodeHints: string[];
    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId: string;
}

export interface DetectLanguageResponse {
    /**
     * The text language in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     *
     * To get the language name, use a [TranslationService.ListLanguages] request.
     */
    languageCode: string;
}

export interface ListLanguagesRequest {
    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId: string;
}

export interface ListLanguagesResponse {
    /** List of supported languages. */
    languages: Language[];
}

const baseTranslateRequest: object = {
    sourceLanguageCode: '',
    targetLanguageCode: '',
    format: 0,
    texts: '',
    folderId: '',
    model: '',
};

export const TranslateRequest = {
    encode(
        message: TranslateRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sourceLanguageCode !== '') {
            writer.uint32(10).string(message.sourceLanguageCode);
        }
        if (message.targetLanguageCode !== '') {
            writer.uint32(18).string(message.targetLanguageCode);
        }
        if (message.format !== 0) {
            writer.uint32(24).int32(message.format);
        }
        for (const v of message.texts) {
            writer.uint32(34).string(v!);
        }
        if (message.folderId !== '') {
            writer.uint32(42).string(message.folderId);
        }
        if (message.model !== '') {
            writer.uint32(50).string(message.model);
        }
        if (message.glossaryConfig !== undefined) {
            TranslateGlossaryConfig.encode(
                message.glossaryConfig,
                writer.uint32(58).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TranslateRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTranslateRequest } as TranslateRequest;
        message.texts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceLanguageCode = reader.string();
                    break;
                case 2:
                    message.targetLanguageCode = reader.string();
                    break;
                case 3:
                    message.format = reader.int32() as any;
                    break;
                case 4:
                    message.texts.push(reader.string());
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                case 6:
                    message.model = reader.string();
                    break;
                case 7:
                    message.glossaryConfig = TranslateGlossaryConfig.decode(
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

    fromJSON(object: any): TranslateRequest {
        const message = { ...baseTranslateRequest } as TranslateRequest;
        message.texts = [];
        if (
            object.sourceLanguageCode !== undefined &&
            object.sourceLanguageCode !== null
        ) {
            message.sourceLanguageCode = String(object.sourceLanguageCode);
        } else {
            message.sourceLanguageCode = '';
        }
        if (
            object.targetLanguageCode !== undefined &&
            object.targetLanguageCode !== null
        ) {
            message.targetLanguageCode = String(object.targetLanguageCode);
        } else {
            message.targetLanguageCode = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = translateRequest_FormatFromJSON(object.format);
        } else {
            message.format = 0;
        }
        if (object.texts !== undefined && object.texts !== null) {
            for (const e of object.texts) {
                message.texts.push(String(e));
            }
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = String(object.model);
        } else {
            message.model = '';
        }
        if (
            object.glossaryConfig !== undefined &&
            object.glossaryConfig !== null
        ) {
            message.glossaryConfig = TranslateGlossaryConfig.fromJSON(
                object.glossaryConfig
            );
        } else {
            message.glossaryConfig = undefined;
        }
        return message;
    },

    toJSON(message: TranslateRequest): unknown {
        const obj: any = {};
        message.sourceLanguageCode !== undefined &&
            (obj.sourceLanguageCode = message.sourceLanguageCode);
        message.targetLanguageCode !== undefined &&
            (obj.targetLanguageCode = message.targetLanguageCode);
        message.format !== undefined &&
            (obj.format = translateRequest_FormatToJSON(message.format));
        if (message.texts) {
            obj.texts = message.texts.map((e) => e);
        } else {
            obj.texts = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.model !== undefined && (obj.model = message.model);
        message.glossaryConfig !== undefined &&
            (obj.glossaryConfig = message.glossaryConfig
                ? TranslateGlossaryConfig.toJSON(message.glossaryConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<TranslateRequest>): TranslateRequest {
        const message = { ...baseTranslateRequest } as TranslateRequest;
        message.texts = [];
        if (
            object.sourceLanguageCode !== undefined &&
            object.sourceLanguageCode !== null
        ) {
            message.sourceLanguageCode = object.sourceLanguageCode;
        } else {
            message.sourceLanguageCode = '';
        }
        if (
            object.targetLanguageCode !== undefined &&
            object.targetLanguageCode !== null
        ) {
            message.targetLanguageCode = object.targetLanguageCode;
        } else {
            message.targetLanguageCode = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        } else {
            message.format = 0;
        }
        if (object.texts !== undefined && object.texts !== null) {
            for (const e of object.texts) {
                message.texts.push(e);
            }
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = object.model;
        } else {
            message.model = '';
        }
        if (
            object.glossaryConfig !== undefined &&
            object.glossaryConfig !== null
        ) {
            message.glossaryConfig = TranslateGlossaryConfig.fromPartial(
                object.glossaryConfig
            );
        } else {
            message.glossaryConfig = undefined;
        }
        return message;
    },
};

const baseTranslateGlossaryConfig: object = {};

export const TranslateGlossaryConfig = {
    encode(
        message: TranslateGlossaryConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.glossaryData !== undefined) {
            GlossaryData.encode(
                message.glossaryData,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): TranslateGlossaryConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTranslateGlossaryConfig,
        } as TranslateGlossaryConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.glossaryData = GlossaryData.decode(
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

    fromJSON(object: any): TranslateGlossaryConfig {
        const message = {
            ...baseTranslateGlossaryConfig,
        } as TranslateGlossaryConfig;
        if (object.glossaryData !== undefined && object.glossaryData !== null) {
            message.glossaryData = GlossaryData.fromJSON(object.glossaryData);
        } else {
            message.glossaryData = undefined;
        }
        return message;
    },

    toJSON(message: TranslateGlossaryConfig): unknown {
        const obj: any = {};
        message.glossaryData !== undefined &&
            (obj.glossaryData = message.glossaryData
                ? GlossaryData.toJSON(message.glossaryData)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<TranslateGlossaryConfig>
    ): TranslateGlossaryConfig {
        const message = {
            ...baseTranslateGlossaryConfig,
        } as TranslateGlossaryConfig;
        if (object.glossaryData !== undefined && object.glossaryData !== null) {
            message.glossaryData = GlossaryData.fromPartial(
                object.glossaryData
            );
        } else {
            message.glossaryData = undefined;
        }
        return message;
    },
};

const baseGlossaryData: object = {};

export const GlossaryData = {
    encode(
        message: GlossaryData,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.glossaryPairs) {
            GlossaryPair.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GlossaryData {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGlossaryData } as GlossaryData;
        message.glossaryPairs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.glossaryPairs.push(
                        GlossaryPair.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GlossaryData {
        const message = { ...baseGlossaryData } as GlossaryData;
        message.glossaryPairs = [];
        if (
            object.glossaryPairs !== undefined &&
            object.glossaryPairs !== null
        ) {
            for (const e of object.glossaryPairs) {
                message.glossaryPairs.push(GlossaryPair.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: GlossaryData): unknown {
        const obj: any = {};
        if (message.glossaryPairs) {
            obj.glossaryPairs = message.glossaryPairs.map((e) =>
                e ? GlossaryPair.toJSON(e) : undefined
            );
        } else {
            obj.glossaryPairs = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<GlossaryData>): GlossaryData {
        const message = { ...baseGlossaryData } as GlossaryData;
        message.glossaryPairs = [];
        if (
            object.glossaryPairs !== undefined &&
            object.glossaryPairs !== null
        ) {
            for (const e of object.glossaryPairs) {
                message.glossaryPairs.push(GlossaryPair.fromPartial(e));
            }
        }
        return message;
    },
};

const baseGlossaryPair: object = { sourceText: '', translatedText: '' };

export const GlossaryPair = {
    encode(
        message: GlossaryPair,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sourceText !== '') {
            writer.uint32(10).string(message.sourceText);
        }
        if (message.translatedText !== '') {
            writer.uint32(18).string(message.translatedText);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GlossaryPair {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGlossaryPair } as GlossaryPair;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceText = reader.string();
                    break;
                case 2:
                    message.translatedText = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GlossaryPair {
        const message = { ...baseGlossaryPair } as GlossaryPair;
        if (object.sourceText !== undefined && object.sourceText !== null) {
            message.sourceText = String(object.sourceText);
        } else {
            message.sourceText = '';
        }
        if (
            object.translatedText !== undefined &&
            object.translatedText !== null
        ) {
            message.translatedText = String(object.translatedText);
        } else {
            message.translatedText = '';
        }
        return message;
    },

    toJSON(message: GlossaryPair): unknown {
        const obj: any = {};
        message.sourceText !== undefined &&
            (obj.sourceText = message.sourceText);
        message.translatedText !== undefined &&
            (obj.translatedText = message.translatedText);
        return obj;
    },

    fromPartial(object: DeepPartial<GlossaryPair>): GlossaryPair {
        const message = { ...baseGlossaryPair } as GlossaryPair;
        if (object.sourceText !== undefined && object.sourceText !== null) {
            message.sourceText = object.sourceText;
        } else {
            message.sourceText = '';
        }
        if (
            object.translatedText !== undefined &&
            object.translatedText !== null
        ) {
            message.translatedText = object.translatedText;
        } else {
            message.translatedText = '';
        }
        return message;
    },
};

const baseTranslateResponse: object = {};

export const TranslateResponse = {
    encode(
        message: TranslateResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.translations) {
            TranslatedText.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TranslateResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTranslateResponse } as TranslateResponse;
        message.translations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.translations.push(
                        TranslatedText.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TranslateResponse {
        const message = { ...baseTranslateResponse } as TranslateResponse;
        message.translations = [];
        if (object.translations !== undefined && object.translations !== null) {
            for (const e of object.translations) {
                message.translations.push(TranslatedText.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: TranslateResponse): unknown {
        const obj: any = {};
        if (message.translations) {
            obj.translations = message.translations.map((e) =>
                e ? TranslatedText.toJSON(e) : undefined
            );
        } else {
            obj.translations = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<TranslateResponse>): TranslateResponse {
        const message = { ...baseTranslateResponse } as TranslateResponse;
        message.translations = [];
        if (object.translations !== undefined && object.translations !== null) {
            for (const e of object.translations) {
                message.translations.push(TranslatedText.fromPartial(e));
            }
        }
        return message;
    },
};

const baseDetectLanguageRequest: object = {
    text: '',
    languageCodeHints: '',
    folderId: '',
};

export const DetectLanguageRequest = {
    encode(
        message: DetectLanguageRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        for (const v of message.languageCodeHints) {
            writer.uint32(18).string(v!);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DetectLanguageRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetectLanguageRequest,
        } as DetectLanguageRequest;
        message.languageCodeHints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.languageCodeHints.push(reader.string());
                    break;
                case 3:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DetectLanguageRequest {
        const message = {
            ...baseDetectLanguageRequest,
        } as DetectLanguageRequest;
        message.languageCodeHints = [];
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        } else {
            message.text = '';
        }
        if (
            object.languageCodeHints !== undefined &&
            object.languageCodeHints !== null
        ) {
            for (const e of object.languageCodeHints) {
                message.languageCodeHints.push(String(e));
            }
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        return message;
    },

    toJSON(message: DetectLanguageRequest): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        if (message.languageCodeHints) {
            obj.languageCodeHints = message.languageCodeHints.map((e) => e);
        } else {
            obj.languageCodeHints = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DetectLanguageRequest>
    ): DetectLanguageRequest {
        const message = {
            ...baseDetectLanguageRequest,
        } as DetectLanguageRequest;
        message.languageCodeHints = [];
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        } else {
            message.text = '';
        }
        if (
            object.languageCodeHints !== undefined &&
            object.languageCodeHints !== null
        ) {
            for (const e of object.languageCodeHints) {
                message.languageCodeHints.push(e);
            }
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        return message;
    },
};

const baseDetectLanguageResponse: object = { languageCode: '' };

export const DetectLanguageResponse = {
    encode(
        message: DetectLanguageResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.languageCode !== '') {
            writer.uint32(10).string(message.languageCode);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DetectLanguageResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetectLanguageResponse,
        } as DetectLanguageResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.languageCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DetectLanguageResponse {
        const message = {
            ...baseDetectLanguageResponse,
        } as DetectLanguageResponse;
        if (object.languageCode !== undefined && object.languageCode !== null) {
            message.languageCode = String(object.languageCode);
        } else {
            message.languageCode = '';
        }
        return message;
    },

    toJSON(message: DetectLanguageResponse): unknown {
        const obj: any = {};
        message.languageCode !== undefined &&
            (obj.languageCode = message.languageCode);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DetectLanguageResponse>
    ): DetectLanguageResponse {
        const message = {
            ...baseDetectLanguageResponse,
        } as DetectLanguageResponse;
        if (object.languageCode !== undefined && object.languageCode !== null) {
            message.languageCode = object.languageCode;
        } else {
            message.languageCode = '';
        }
        return message;
    },
};

const baseListLanguagesRequest: object = { folderId: '' };

export const ListLanguagesRequest = {
    encode(
        message: ListLanguagesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListLanguagesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListLanguagesRequest } as ListLanguagesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListLanguagesRequest {
        const message = { ...baseListLanguagesRequest } as ListLanguagesRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        return message;
    },

    toJSON(message: ListLanguagesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListLanguagesRequest>
    ): ListLanguagesRequest {
        const message = { ...baseListLanguagesRequest } as ListLanguagesRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        return message;
    },
};

const baseListLanguagesResponse: object = {};

export const ListLanguagesResponse = {
    encode(
        message: ListLanguagesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.languages) {
            Language.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListLanguagesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLanguagesResponse,
        } as ListLanguagesResponse;
        message.languages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.languages.push(
                        Language.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListLanguagesResponse {
        const message = {
            ...baseListLanguagesResponse,
        } as ListLanguagesResponse;
        message.languages = [];
        if (object.languages !== undefined && object.languages !== null) {
            for (const e of object.languages) {
                message.languages.push(Language.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ListLanguagesResponse): unknown {
        const obj: any = {};
        if (message.languages) {
            obj.languages = message.languages.map((e) =>
                e ? Language.toJSON(e) : undefined
            );
        } else {
            obj.languages = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListLanguagesResponse>
    ): ListLanguagesResponse {
        const message = {
            ...baseListLanguagesResponse,
        } as ListLanguagesResponse;
        message.languages = [];
        if (object.languages !== undefined && object.languages !== null) {
            for (const e of object.languages) {
                message.languages.push(Language.fromPartial(e));
            }
        }
        return message;
    },
};

/** A set of methods for the Yandex Translate service. */
export const TranslationServiceService = {
    /** Translates the text to the specified language. */
    translate: {
        path: '/yandex.cloud.ai.translate.v2.TranslationService/Translate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: TranslateRequest) =>
            Buffer.from(TranslateRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => TranslateRequest.decode(value),
        responseSerialize: (value: TranslateResponse) =>
            Buffer.from(TranslateResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => TranslateResponse.decode(value),
    },
    /** Detects the language of the text. */
    detectLanguage: {
        path: '/yandex.cloud.ai.translate.v2.TranslationService/DetectLanguage',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DetectLanguageRequest) =>
            Buffer.from(DetectLanguageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DetectLanguageRequest.decode(value),
        responseSerialize: (value: DetectLanguageResponse) =>
            Buffer.from(DetectLanguageResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            DetectLanguageResponse.decode(value),
    },
    /** Retrieves the list of supported languages. */
    listLanguages: {
        path: '/yandex.cloud.ai.translate.v2.TranslationService/ListLanguages',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListLanguagesRequest) =>
            Buffer.from(ListLanguagesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListLanguagesRequest.decode(value),
        responseSerialize: (value: ListLanguagesResponse) =>
            Buffer.from(ListLanguagesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListLanguagesResponse.decode(value),
    },
} as const;

export interface TranslationServiceServer extends UntypedServiceImplementation {
    /** Translates the text to the specified language. */
    translate: handleUnaryCall<TranslateRequest, TranslateResponse>;
    /** Detects the language of the text. */
    detectLanguage: handleUnaryCall<
        DetectLanguageRequest,
        DetectLanguageResponse
    >;
    /** Retrieves the list of supported languages. */
    listLanguages: handleUnaryCall<ListLanguagesRequest, ListLanguagesResponse>;
}

export interface TranslationServiceClient extends Client {
    /** Translates the text to the specified language. */
    translate(
        request: TranslateRequest,
        callback: (
            error: ServiceError | null,
            response: TranslateResponse
        ) => void
    ): ClientUnaryCall;
    translate(
        request: TranslateRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: TranslateResponse
        ) => void
    ): ClientUnaryCall;
    translate(
        request: TranslateRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: TranslateResponse
        ) => void
    ): ClientUnaryCall;
    /** Detects the language of the text. */
    detectLanguage(
        request: DetectLanguageRequest,
        callback: (
            error: ServiceError | null,
            response: DetectLanguageResponse
        ) => void
    ): ClientUnaryCall;
    detectLanguage(
        request: DetectLanguageRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: DetectLanguageResponse
        ) => void
    ): ClientUnaryCall;
    detectLanguage(
        request: DetectLanguageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: DetectLanguageResponse
        ) => void
    ): ClientUnaryCall;
    /** Retrieves the list of supported languages. */
    listLanguages(
        request: ListLanguagesRequest,
        callback: (
            error: ServiceError | null,
            response: ListLanguagesResponse
        ) => void
    ): ClientUnaryCall;
    listLanguages(
        request: ListLanguagesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListLanguagesResponse
        ) => void
    ): ClientUnaryCall;
    listLanguages(
        request: ListLanguagesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListLanguagesResponse
        ) => void
    ): ClientUnaryCall;
}

export const TranslationServiceClient = makeGenericClientConstructor(
    TranslationServiceService,
    'yandex.cloud.ai.translate.v2.TranslationService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): TranslationServiceClient;
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
