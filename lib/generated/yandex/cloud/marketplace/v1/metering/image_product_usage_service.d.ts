/// <reference types="node" />
import { UsageRecord, AcceptedUsageRecord, RejectedUsageRecord } from '../../../../../yandex/cloud/marketplace/v1/metering/usage_record';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.marketplace.v1.metering";
export interface WriteImageProductUsageRequest {
    $type: 'yandex.cloud.marketplace.v1.metering.WriteImageProductUsageRequest';
    /** Checks whether you have the access required for the emit usage */
    validateOnly: boolean;
    /** Marketplace Product's ID */
    productId: string;
    /** List of product usage records (up to 25 pet request) */
    usageRecords: UsageRecord[];
}
export interface WriteImageProductUsageResponse {
    $type: 'yandex.cloud.marketplace.v1.metering.WriteImageProductUsageResponse';
    /** List of accepted product usage records */
    accepted: AcceptedUsageRecord[];
    /** List of rejected product usage records (with reason) */
    rejected: RejectedUsageRecord[];
}
export declare const WriteImageProductUsageRequest: {
    $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageRequest";
    encode(message: WriteImageProductUsageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WriteImageProductUsageRequest;
    fromJSON(object: any): WriteImageProductUsageRequest;
    toJSON(message: WriteImageProductUsageRequest): unknown;
    fromPartial(object: DeepPartial<WriteImageProductUsageRequest>): WriteImageProductUsageRequest;
};
export declare const WriteImageProductUsageResponse: {
    $type: "yandex.cloud.marketplace.v1.metering.WriteImageProductUsageResponse";
    encode(message: WriteImageProductUsageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WriteImageProductUsageResponse;
    fromJSON(object: any): WriteImageProductUsageResponse;
    toJSON(message: WriteImageProductUsageResponse): unknown;
    fromPartial(object: DeepPartial<WriteImageProductUsageResponse>): WriteImageProductUsageResponse;
};
export declare const ImageProductUsageServiceService: {
    /** Writes image product's usage (authenticated by user's service account) */
    readonly write: {
        readonly path: "/yandex.cloud.marketplace.v1.metering.ImageProductUsageService/Write";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: WriteImageProductUsageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => WriteImageProductUsageRequest;
        readonly responseSerialize: (value: WriteImageProductUsageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => WriteImageProductUsageResponse;
    };
};
export interface ImageProductUsageServiceServer extends UntypedServiceImplementation {
    /** Writes image product's usage (authenticated by user's service account) */
    write: handleUnaryCall<WriteImageProductUsageRequest, WriteImageProductUsageResponse>;
}
export interface ImageProductUsageServiceClient extends Client {
    /** Writes image product's usage (authenticated by user's service account) */
    write(request: WriteImageProductUsageRequest, callback: (error: ServiceError | null, response: WriteImageProductUsageResponse) => void): ClientUnaryCall;
    write(request: WriteImageProductUsageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: WriteImageProductUsageResponse) => void): ClientUnaryCall;
    write(request: WriteImageProductUsageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: WriteImageProductUsageResponse) => void): ClientUnaryCall;
}
export declare const ImageProductUsageServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ImageProductUsageServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
