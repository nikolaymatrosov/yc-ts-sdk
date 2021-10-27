/// <reference types="node" />
import { HostType } from '../../../../yandex/cloud/compute/v1/host_type';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetHostTypeRequest {
    $type: 'yandex.cloud.compute.v1.GetHostTypeRequest';
    /**
     * ID of the host type to return.
     *
     * To get a host type ID make a [HostTypeService.List] request.
     */
    hostTypeId: string;
}
export interface ListHostTypesRequest {
    $type: 'yandex.cloud.compute.v1.ListHostTypesRequest';
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListHostTypesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListHostTypesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListHostTypesResponse {
    $type: 'yandex.cloud.compute.v1.ListHostTypesResponse';
    /** Lists host types. */
    hostTypes: HostType[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListHostTypesRequest.page_size], use `next_page_token` as the value
     * for the [ListHostTypesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetHostTypeRequest: {
    $type: "yandex.cloud.compute.v1.GetHostTypeRequest";
    encode(message: GetHostTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetHostTypeRequest;
    fromJSON(object: any): GetHostTypeRequest;
    toJSON(message: GetHostTypeRequest): unknown;
    fromPartial(object: DeepPartial<GetHostTypeRequest>): GetHostTypeRequest;
};
export declare const ListHostTypesRequest: {
    $type: "yandex.cloud.compute.v1.ListHostTypesRequest";
    encode(message: ListHostTypesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostTypesRequest;
    fromJSON(object: any): ListHostTypesRequest;
    toJSON(message: ListHostTypesRequest): unknown;
    fromPartial(object: DeepPartial<ListHostTypesRequest>): ListHostTypesRequest;
};
export declare const ListHostTypesResponse: {
    $type: "yandex.cloud.compute.v1.ListHostTypesResponse";
    encode(message: ListHostTypesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostTypesResponse;
    fromJSON(object: any): ListHostTypesResponse;
    toJSON(message: ListHostTypesResponse): unknown;
    fromPartial(object: DeepPartial<ListHostTypesResponse>): ListHostTypesResponse;
};
/** Set of methods to view possible host configurations. */
export declare const HostTypeServiceService: {
    /** Returns information about specified host type. */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.HostTypeService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetHostTypeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetHostTypeRequest;
        readonly responseSerialize: (value: HostType) => Buffer;
        readonly responseDeserialize: (value: Buffer) => HostType;
    };
    /** List avaliable host types. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.HostTypeService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHostTypesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHostTypesRequest;
        readonly responseSerialize: (value: ListHostTypesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHostTypesResponse;
    };
};
export interface HostTypeServiceServer extends UntypedServiceImplementation {
    /** Returns information about specified host type. */
    get: handleUnaryCall<GetHostTypeRequest, HostType>;
    /** List avaliable host types. */
    list: handleUnaryCall<ListHostTypesRequest, ListHostTypesResponse>;
}
export interface HostTypeServiceClient extends Client {
    /** Returns information about specified host type. */
    get(request: GetHostTypeRequest, callback: (error: ServiceError | null, response: HostType) => void): ClientUnaryCall;
    get(request: GetHostTypeRequest, metadata: Metadata, callback: (error: ServiceError | null, response: HostType) => void): ClientUnaryCall;
    get(request: GetHostTypeRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: HostType) => void): ClientUnaryCall;
    /** List avaliable host types. */
    list(request: ListHostTypesRequest, callback: (error: ServiceError | null, response: ListHostTypesResponse) => void): ClientUnaryCall;
    list(request: ListHostTypesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHostTypesResponse) => void): ClientUnaryCall;
    list(request: ListHostTypesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHostTypesResponse) => void): ClientUnaryCall;
}
export declare const HostTypeServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => HostTypeServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
