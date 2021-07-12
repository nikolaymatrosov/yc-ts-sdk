/// <reference types="node" />
import { Status } from '../../../../../google/rpc/status';
import { ClassAnnotation } from '../../../../../yandex/cloud/ai/vision/v1/classification';
import { FaceAnnotation } from '../../../../../yandex/cloud/ai/vision/v1/face_detection';
import { ImageCopySearchAnnotation } from '../../../../../yandex/cloud/ai/vision/v1/image_copy_search';
import { TextAnnotation } from '../../../../../yandex/cloud/ai/vision/v1/text_detection';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ai.vision.v1";
export interface BatchAnalyzeRequest {
    /**
     * A list of specifications. Each specification contains the file to analyze and features to use for analysis.
     *
     * Restrictions:
     * * Supported file formats: JPEG, PNG.
     * * Maximum file size: 1 MB.
     * * Image size should not exceed 20M pixels (length x width).
     */
    analyzeSpecs: AnalyzeSpec[];
    /**
     * ID of the folder to which you have access.
     * Required for authorization with a user account (see [yandex.cloud.iam.v1.UserAccount] resource).
     * Don't specify this field if you make the request on behalf of a service account.
     */
    folderId: string;
}
export interface AnalyzeSpec {
    /**
     * Image content, represented as a stream of bytes.
     * Note: As with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
     */
    content: Uint8Array | undefined;
    signature: string | undefined;
    /**
     * Requested features to use for analysis.
     *
     * Max count of requested features for one file is 8.
     */
    features: Feature[];
    /** [MIME type](https://en.wikipedia.org/wiki/Media_type) of content (for example, `` application/pdf ``). */
    mimeType: string;
}
export interface Feature {
    /** Type of requested feature. */
    type: Feature_Type;
    /** Required for the `CLASSIFICATION` type. Specifies configuration for the classification feature. */
    classificationConfig: FeatureClassificationConfig | undefined;
    /** Required for the `TEXT_DETECTION` type. Specifies configuration for the text detection (OCR) feature. */
    textDetectionConfig: FeatureTextDetectionConfig | undefined;
}
export declare enum Feature_Type {
    TYPE_UNSPECIFIED = 0,
    /** TEXT_DETECTION - Text detection (OCR) feature. */
    TEXT_DETECTION = 1,
    /** CLASSIFICATION - Classification feature. */
    CLASSIFICATION = 2,
    /** FACE_DETECTION - Face detection feature. */
    FACE_DETECTION = 3,
    /** IMAGE_COPY_SEARCH - Image copy search. */
    IMAGE_COPY_SEARCH = 4,
    UNRECOGNIZED = -1
}
export declare function feature_TypeFromJSON(object: any): Feature_Type;
export declare function feature_TypeToJSON(object: Feature_Type): string;
export interface FeatureClassificationConfig {
    /** Model to use for image classification. */
    model: string;
}
export interface FeatureTextDetectionConfig {
    /**
     * List of the languages to recognize text.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` ru ``).
     */
    languageCodes: string[];
    /**
     * Model to use for text detection.
     * Possible values:
     * * page (default) - this model is suitable for detecting multiple text entries in an image.
     * * line - this model is suitable for cropped images with one line of text.
     */
    model: string;
}
export interface BatchAnalyzeResponse {
    /**
     * Request results.
     * Results have the same order as specifications in the request.
     */
    results: AnalyzeResult[];
}
export interface AnalyzeResult {
    /**
     * Results for each requested feature.
     * Feature results have the same order as in the request.
     */
    results: FeatureResult[];
    /** Return error in case of error with file processing. */
    error: Status | undefined;
}
export interface FeatureResult {
    /** Text detection (OCR) result. */
    textDetection: TextAnnotation | undefined;
    /** Classification result. */
    classification: ClassAnnotation | undefined;
    /** Face detection result. */
    faceDetection: FaceAnnotation | undefined;
    /** Image Copy Search result. */
    imageCopySearch: ImageCopySearchAnnotation | undefined;
    /** Return error in case of error during the specified feature processing. */
    error: Status | undefined;
}
export declare const BatchAnalyzeRequest: {
    encode(message: BatchAnalyzeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchAnalyzeRequest;
    fromJSON(object: any): BatchAnalyzeRequest;
    toJSON(message: BatchAnalyzeRequest): unknown;
    fromPartial(object: DeepPartial<BatchAnalyzeRequest>): BatchAnalyzeRequest;
};
export declare const AnalyzeSpec: {
    encode(message: AnalyzeSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnalyzeSpec;
    fromJSON(object: any): AnalyzeSpec;
    toJSON(message: AnalyzeSpec): unknown;
    fromPartial(object: DeepPartial<AnalyzeSpec>): AnalyzeSpec;
};
export declare const Feature: {
    encode(message: Feature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Feature;
    fromJSON(object: any): Feature;
    toJSON(message: Feature): unknown;
    fromPartial(object: DeepPartial<Feature>): Feature;
};
export declare const FeatureClassificationConfig: {
    encode(message: FeatureClassificationConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeatureClassificationConfig;
    fromJSON(object: any): FeatureClassificationConfig;
    toJSON(message: FeatureClassificationConfig): unknown;
    fromPartial(object: DeepPartial<FeatureClassificationConfig>): FeatureClassificationConfig;
};
export declare const FeatureTextDetectionConfig: {
    encode(message: FeatureTextDetectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeatureTextDetectionConfig;
    fromJSON(object: any): FeatureTextDetectionConfig;
    toJSON(message: FeatureTextDetectionConfig): unknown;
    fromPartial(object: DeepPartial<FeatureTextDetectionConfig>): FeatureTextDetectionConfig;
};
export declare const BatchAnalyzeResponse: {
    encode(message: BatchAnalyzeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchAnalyzeResponse;
    fromJSON(object: any): BatchAnalyzeResponse;
    toJSON(message: BatchAnalyzeResponse): unknown;
    fromPartial(object: DeepPartial<BatchAnalyzeResponse>): BatchAnalyzeResponse;
};
export declare const AnalyzeResult: {
    encode(message: AnalyzeResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnalyzeResult;
    fromJSON(object: any): AnalyzeResult;
    toJSON(message: AnalyzeResult): unknown;
    fromPartial(object: DeepPartial<AnalyzeResult>): AnalyzeResult;
};
export declare const FeatureResult: {
    encode(message: FeatureResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeatureResult;
    fromJSON(object: any): FeatureResult;
    toJSON(message: FeatureResult): unknown;
    fromPartial(object: DeepPartial<FeatureResult>): FeatureResult;
};
/** A set of methods for the Yandex Vision service. */
export declare const VisionServiceService: {
    /** Analyzes a batch of images and returns results with annotations. */
    readonly batchAnalyze: {
        readonly path: "/yandex.cloud.ai.vision.v1.VisionService/BatchAnalyze";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BatchAnalyzeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BatchAnalyzeRequest;
        readonly responseSerialize: (value: BatchAnalyzeResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BatchAnalyzeResponse;
    };
};
export interface VisionServiceServer extends UntypedServiceImplementation {
    /** Analyzes a batch of images and returns results with annotations. */
    batchAnalyze: handleUnaryCall<BatchAnalyzeRequest, BatchAnalyzeResponse>;
}
export interface VisionServiceClient extends Client {
    /** Analyzes a batch of images and returns results with annotations. */
    batchAnalyze(request: BatchAnalyzeRequest, callback: (error: ServiceError | null, response: BatchAnalyzeResponse) => void): ClientUnaryCall;
    batchAnalyze(request: BatchAnalyzeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BatchAnalyzeResponse) => void): ClientUnaryCall;
    batchAnalyze(request: BatchAnalyzeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BatchAnalyzeResponse) => void): ClientUnaryCall;
}
export declare const VisionServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => VisionServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
