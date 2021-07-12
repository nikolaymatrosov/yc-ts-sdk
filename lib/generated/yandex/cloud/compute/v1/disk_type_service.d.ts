/// <reference types="node" />
import { DiskType } from '../../../../yandex/cloud/compute/v1/disk_type';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetDiskTypeRequest {
    /**
     * ID of the disk type to return information about.
     * To get the disk type ID use a [DiskTypeService.List] request.
     */
    diskTypeId: string;
}
export interface ListDiskTypesRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDiskTypesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDiskTypesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListDiskTypesResponse {
    /** List of disk types. */
    diskTypes: DiskType[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDiskTypesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListDiskTypesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetDiskTypeRequest: {
    encode(message: GetDiskTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDiskTypeRequest;
    fromJSON(object: any): GetDiskTypeRequest;
    toJSON(message: GetDiskTypeRequest): unknown;
    fromPartial(object: DeepPartial<GetDiskTypeRequest>): GetDiskTypeRequest;
};
export declare const ListDiskTypesRequest: {
    encode(message: ListDiskTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskTypesRequest;
    fromJSON(object: any): ListDiskTypesRequest;
    toJSON(message: ListDiskTypesRequest): unknown;
    fromPartial(object: DeepPartial<ListDiskTypesRequest>): ListDiskTypesRequest;
};
export declare const ListDiskTypesResponse: {
    encode(message: ListDiskTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskTypesResponse;
    fromJSON(object: any): ListDiskTypesResponse;
    toJSON(message: ListDiskTypesResponse): unknown;
    fromPartial(object: DeepPartial<ListDiskTypesResponse>): ListDiskTypesResponse;
};
/** A set of methods to retrieve information about disk types. */
export declare const DiskTypeServiceService: {
    /**
     * Returns the information about specified disk type.
     *
     * To get the list of available disk types, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.DiskTypeService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDiskTypeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDiskTypeRequest;
        readonly responseSerialize: (value: DiskType) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DiskType;
    };
    /** Retrieves the list of disk types for the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.DiskTypeService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDiskTypesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDiskTypesRequest;
        readonly responseSerialize: (value: ListDiskTypesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDiskTypesResponse;
    };
};
export interface DiskTypeServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the information about specified disk type.
     *
     * To get the list of available disk types, make a [List] request.
     */
    get: handleUnaryCall<GetDiskTypeRequest, DiskType>;
    /** Retrieves the list of disk types for the specified folder. */
    list: handleUnaryCall<ListDiskTypesRequest, ListDiskTypesResponse>;
}
export interface DiskTypeServiceClient extends Client {
    /**
     * Returns the information about specified disk type.
     *
     * To get the list of available disk types, make a [List] request.
     */
    get(request: GetDiskTypeRequest, callback: (error: ServiceError | null, response: DiskType) => void): ClientUnaryCall;
    get(request: GetDiskTypeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DiskType) => void): ClientUnaryCall;
    get(request: GetDiskTypeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DiskType) => void): ClientUnaryCall;
    /** Retrieves the list of disk types for the specified folder. */
    list(request: ListDiskTypesRequest, callback: (error: ServiceError | null, response: ListDiskTypesResponse) => void): ClientUnaryCall;
    list(request: ListDiskTypesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDiskTypesResponse) => void): ClientUnaryCall;
    list(request: ListDiskTypesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDiskTypesResponse) => void): ClientUnaryCall;
}
export declare const DiskTypeServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => DiskTypeServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
