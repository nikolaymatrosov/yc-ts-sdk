/// <reference types="node" />
import { TranslatedText, Language } from '../../../../../yandex/cloud/ai/translate/v2/translation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ai.translate.v2";
export interface TranslateRequest {
    $type: 'yandex.cloud.ai.translate.v2.TranslateRequest';
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
export declare enum TranslateRequest_Format {
    FORMAT_UNSPECIFIED = 0,
    /** PLAIN_TEXT - Text without markup. Default value. */
    PLAIN_TEXT = 1,
    /** HTML - Text in the HTML format. */
    HTML = 2,
    UNRECOGNIZED = -1
}
export declare function translateRequest_FormatFromJSON(object: any): TranslateRequest_Format;
export declare function translateRequest_FormatToJSON(object: TranslateRequest_Format): string;
export interface TranslateGlossaryConfig {
    $type: 'yandex.cloud.ai.translate.v2.TranslateGlossaryConfig';
    /** Pass glossary data in the request. Currently, only this way to pass glossary is supported. */
    glossaryData: GlossaryData | undefined;
}
export interface GlossaryData {
    $type: 'yandex.cloud.ai.translate.v2.GlossaryData';
    /**
     * Array of text pairs.
     *
     * The maximum total length of all source texts is 10000 characters.
     * The maximum total length of all translated texts is 10000 characters.
     */
    glossaryPairs: GlossaryPair[];
}
export interface GlossaryPair {
    $type: 'yandex.cloud.ai.translate.v2.GlossaryPair';
    /** Text in the source language. */
    sourceText: string;
    /** Text in the target language. */
    translatedText: string;
}
export interface TranslateResponse {
    $type: 'yandex.cloud.ai.translate.v2.TranslateResponse';
    /** Array of the translations. */
    translations: TranslatedText[];
}
export interface DetectLanguageRequest {
    $type: 'yandex.cloud.ai.translate.v2.DetectLanguageRequest';
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
    $type: 'yandex.cloud.ai.translate.v2.DetectLanguageResponse';
    /**
     * The text language in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     *
     * To get the language name, use a [TranslationService.ListLanguages] request.
     */
    languageCode: string;
}
export interface ListLanguagesRequest {
    $type: 'yandex.cloud.ai.translate.v2.ListLanguagesRequest';
    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId: string;
}
export interface ListLanguagesResponse {
    $type: 'yandex.cloud.ai.translate.v2.ListLanguagesResponse';
    /** List of supported languages. */
    languages: Language[];
}
export declare const TranslateRequest: {
    $type: "yandex.cloud.ai.translate.v2.TranslateRequest";
    encode(message: TranslateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TranslateRequest;
    fromJSON(object: any): TranslateRequest;
    toJSON(message: TranslateRequest): unknown;
    fromPartial(object: DeepPartial<TranslateRequest>): TranslateRequest;
};
export declare const TranslateGlossaryConfig: {
    $type: "yandex.cloud.ai.translate.v2.TranslateGlossaryConfig";
    encode(message: TranslateGlossaryConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TranslateGlossaryConfig;
    fromJSON(object: any): TranslateGlossaryConfig;
    toJSON(message: TranslateGlossaryConfig): unknown;
    fromPartial(object: DeepPartial<TranslateGlossaryConfig>): TranslateGlossaryConfig;
};
export declare const GlossaryData: {
    $type: "yandex.cloud.ai.translate.v2.GlossaryData";
    encode(message: GlossaryData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GlossaryData;
    fromJSON(object: any): GlossaryData;
    toJSON(message: GlossaryData): unknown;
    fromPartial(object: DeepPartial<GlossaryData>): GlossaryData;
};
export declare const GlossaryPair: {
    $type: "yandex.cloud.ai.translate.v2.GlossaryPair";
    encode(message: GlossaryPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GlossaryPair;
    fromJSON(object: any): GlossaryPair;
    toJSON(message: GlossaryPair): unknown;
    fromPartial(object: DeepPartial<GlossaryPair>): GlossaryPair;
};
export declare const TranslateResponse: {
    $type: "yandex.cloud.ai.translate.v2.TranslateResponse";
    encode(message: TranslateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TranslateResponse;
    fromJSON(object: any): TranslateResponse;
    toJSON(message: TranslateResponse): unknown;
    fromPartial(object: DeepPartial<TranslateResponse>): TranslateResponse;
};
export declare const DetectLanguageRequest: {
    $type: "yandex.cloud.ai.translate.v2.DetectLanguageRequest";
    encode(message: DetectLanguageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetectLanguageRequest;
    fromJSON(object: any): DetectLanguageRequest;
    toJSON(message: DetectLanguageRequest): unknown;
    fromPartial(object: DeepPartial<DetectLanguageRequest>): DetectLanguageRequest;
};
export declare const DetectLanguageResponse: {
    $type: "yandex.cloud.ai.translate.v2.DetectLanguageResponse";
    encode(message: DetectLanguageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetectLanguageResponse;
    fromJSON(object: any): DetectLanguageResponse;
    toJSON(message: DetectLanguageResponse): unknown;
    fromPartial(object: DeepPartial<DetectLanguageResponse>): DetectLanguageResponse;
};
export declare const ListLanguagesRequest: {
    $type: "yandex.cloud.ai.translate.v2.ListLanguagesRequest";
    encode(message: ListLanguagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLanguagesRequest;
    fromJSON(object: any): ListLanguagesRequest;
    toJSON(message: ListLanguagesRequest): unknown;
    fromPartial(object: DeepPartial<ListLanguagesRequest>): ListLanguagesRequest;
};
export declare const ListLanguagesResponse: {
    $type: "yandex.cloud.ai.translate.v2.ListLanguagesResponse";
    encode(message: ListLanguagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLanguagesResponse;
    fromJSON(object: any): ListLanguagesResponse;
    toJSON(message: ListLanguagesResponse): unknown;
    fromPartial(object: DeepPartial<ListLanguagesResponse>): ListLanguagesResponse;
};
/** A set of methods for the Yandex Translate service. */
export declare const TranslationServiceService: {
    /** Translates the text to the specified language. */
    readonly translate: {
        readonly path: "/yandex.cloud.ai.translate.v2.TranslationService/Translate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: TranslateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => TranslateRequest;
        readonly responseSerialize: (value: TranslateResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => TranslateResponse;
    };
    /** Detects the language of the text. */
    readonly detectLanguage: {
        readonly path: "/yandex.cloud.ai.translate.v2.TranslationService/DetectLanguage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DetectLanguageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DetectLanguageRequest;
        readonly responseSerialize: (value: DetectLanguageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DetectLanguageResponse;
    };
    /** Retrieves the list of supported languages. */
    readonly listLanguages: {
        readonly path: "/yandex.cloud.ai.translate.v2.TranslationService/ListLanguages";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLanguagesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLanguagesRequest;
        readonly responseSerialize: (value: ListLanguagesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLanguagesResponse;
    };
};
export interface TranslationServiceServer extends UntypedServiceImplementation {
    /** Translates the text to the specified language. */
    translate: handleUnaryCall<TranslateRequest, TranslateResponse>;
    /** Detects the language of the text. */
    detectLanguage: handleUnaryCall<DetectLanguageRequest, DetectLanguageResponse>;
    /** Retrieves the list of supported languages. */
    listLanguages: handleUnaryCall<ListLanguagesRequest, ListLanguagesResponse>;
}
export interface TranslationServiceClient extends Client {
    /** Translates the text to the specified language. */
    translate(request: TranslateRequest, callback: (error: ServiceError | null, response: TranslateResponse) => void): ClientUnaryCall;
    translate(request: TranslateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: TranslateResponse) => void): ClientUnaryCall;
    translate(request: TranslateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: TranslateResponse) => void): ClientUnaryCall;
    /** Detects the language of the text. */
    detectLanguage(request: DetectLanguageRequest, callback: (error: ServiceError | null, response: DetectLanguageResponse) => void): ClientUnaryCall;
    detectLanguage(request: DetectLanguageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DetectLanguageResponse) => void): ClientUnaryCall;
    detectLanguage(request: DetectLanguageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DetectLanguageResponse) => void): ClientUnaryCall;
    /** Retrieves the list of supported languages. */
    listLanguages(request: ListLanguagesRequest, callback: (error: ServiceError | null, response: ListLanguagesResponse) => void): ClientUnaryCall;
    listLanguages(request: ListLanguagesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLanguagesResponse) => void): ClientUnaryCall;
    listLanguages(request: ListLanguagesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLanguagesResponse) => void): ClientUnaryCall;
}
export declare const TranslationServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => TranslationServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
