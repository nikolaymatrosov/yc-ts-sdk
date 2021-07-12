/// <reference types="node" />
import { ResourcePreset } from '../../../../../yandex/cloud/mdb/mysql/v1/resource_preset';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1";
export interface GetResourcePresetRequest {
    /**
     * ID of the resource preset to return.
     * To get the resource preset ID, use a [ResourcePresetService.List] request.
     */
    resourcePresetId: string;
}
export interface ListResourcePresetsRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListResourcePresetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the [ListResourcePresetsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListResourcePresetsResponse {
    /** List of resource presets. */
    resourcePresets: ResourcePreset[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListResourcePresetsRequest.page_size], use the [next_page_token] as the value
     * for the [ListResourcePresetsRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetResourcePresetRequest: {
    encode(message: GetResourcePresetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetResourcePresetRequest;
    fromJSON(object: any): GetResourcePresetRequest;
    toJSON(message: GetResourcePresetRequest): unknown;
    fromPartial(object: DeepPartial<GetResourcePresetRequest>): GetResourcePresetRequest;
};
export declare const ListResourcePresetsRequest: {
    encode(message: ListResourcePresetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcePresetsRequest;
    fromJSON(object: any): ListResourcePresetsRequest;
    toJSON(message: ListResourcePresetsRequest): unknown;
    fromPartial(object: DeepPartial<ListResourcePresetsRequest>): ListResourcePresetsRequest;
};
export declare const ListResourcePresetsResponse: {
    encode(message: ListResourcePresetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcePresetsResponse;
    fromJSON(object: any): ListResourcePresetsResponse;
    toJSON(message: ListResourcePresetsResponse): unknown;
    fromPartial(object: DeepPartial<ListResourcePresetsResponse>): ListResourcePresetsResponse;
};
/** A set of methods for managing resource presets. */
export declare const ResourcePresetServiceService: {
    /**
     * Returns the specified resource preset.
     *
     * To get the list of available resource presets, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ResourcePresetService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetResourcePresetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetResourcePresetRequest;
        readonly responseSerialize: (value: ResourcePreset) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ResourcePreset;
    };
    /** Retrieves the list of available resource presets. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ResourcePresetService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListResourcePresetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListResourcePresetsRequest;
        readonly responseSerialize: (value: ListResourcePresetsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListResourcePresetsResponse;
    };
};
export interface ResourcePresetServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified resource preset.
     *
     * To get the list of available resource presets, make a [List] request.
     */
    get: handleUnaryCall<GetResourcePresetRequest, ResourcePreset>;
    /** Retrieves the list of available resource presets. */
    list: handleUnaryCall<ListResourcePresetsRequest, ListResourcePresetsResponse>;
}
export interface ResourcePresetServiceClient extends Client {
    /**
     * Returns the specified resource preset.
     *
     * To get the list of available resource presets, make a [List] request.
     */
    get(request: GetResourcePresetRequest, callback: (error: ServiceError | null, response: ResourcePreset) => void): ClientUnaryCall;
    get(request: GetResourcePresetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ResourcePreset) => void): ClientUnaryCall;
    get(request: GetResourcePresetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ResourcePreset) => void): ClientUnaryCall;
    /** Retrieves the list of available resource presets. */
    list(request: ListResourcePresetsRequest, callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void): ClientUnaryCall;
    list(request: ListResourcePresetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void): ClientUnaryCall;
    list(request: ListResourcePresetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void): ClientUnaryCall;
}
export declare const ResourcePresetServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ResourcePresetServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
