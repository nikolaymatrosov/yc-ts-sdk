/// <reference types="node" />
import { StorageType } from '../../../../yandex/cloud/ydb/v1/storage_type';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface GetStorageTypeRequest {
    /** Required. ID of the storage type to return. */
    storageTypeId: string;
}
export interface ListStorageTypesRequest {
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListStorageTypes requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListStorageTypes
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListStorageTypesResponse {
    /** Requested list of storage types. */
    storageTypes: StorageType[];
    /**
     * This token allows you to get the next page of results for ListStorageTypes requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListStorageTypes request. Subsequent ListStorageTypes
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetStorageTypeRequest: {
    encode(message: GetStorageTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetStorageTypeRequest;
    fromJSON(object: any): GetStorageTypeRequest;
    toJSON(message: GetStorageTypeRequest): unknown;
    fromPartial(object: DeepPartial<GetStorageTypeRequest>): GetStorageTypeRequest;
};
export declare const ListStorageTypesRequest: {
    encode(message: ListStorageTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListStorageTypesRequest;
    fromJSON(object: any): ListStorageTypesRequest;
    toJSON(message: ListStorageTypesRequest): unknown;
    fromPartial(object: DeepPartial<ListStorageTypesRequest>): ListStorageTypesRequest;
};
export declare const ListStorageTypesResponse: {
    encode(message: ListStorageTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListStorageTypesResponse;
    fromJSON(object: any): ListStorageTypesResponse;
    toJSON(message: ListStorageTypesResponse): unknown;
    fromPartial(object: DeepPartial<ListStorageTypesResponse>): ListStorageTypesResponse;
};
export declare const StorageTypeServiceService: {
    /** Returns the specified storage types. */
    readonly get: {
        readonly path: "/yandex.cloud.ydb.v1.StorageTypeService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetStorageTypeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetStorageTypeRequest;
        readonly responseSerialize: (value: StorageType) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StorageType;
    };
    /** Returns the list of available storage types. */
    readonly list: {
        readonly path: "/yandex.cloud.ydb.v1.StorageTypeService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListStorageTypesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListStorageTypesRequest;
        readonly responseSerialize: (value: ListStorageTypesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListStorageTypesResponse;
    };
};
export interface StorageTypeServiceServer extends UntypedServiceImplementation {
    /** Returns the specified storage types. */
    get: handleUnaryCall<GetStorageTypeRequest, StorageType>;
    /** Returns the list of available storage types. */
    list: handleUnaryCall<ListStorageTypesRequest, ListStorageTypesResponse>;
}
export interface StorageTypeServiceClient extends Client {
    /** Returns the specified storage types. */
    get(request: GetStorageTypeRequest, callback: (error: ServiceError | null, response: StorageType) => void): ClientUnaryCall;
    get(request: GetStorageTypeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StorageType) => void): ClientUnaryCall;
    get(request: GetStorageTypeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StorageType) => void): ClientUnaryCall;
    /** Returns the list of available storage types. */
    list(request: ListStorageTypesRequest, callback: (error: ServiceError | null, response: ListStorageTypesResponse) => void): ClientUnaryCall;
    list(request: ListStorageTypesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListStorageTypesResponse) => void): ClientUnaryCall;
    list(request: ListStorageTypesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListStorageTypesResponse) => void): ClientUnaryCall;
}
export declare const StorageTypeServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => StorageTypeServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
