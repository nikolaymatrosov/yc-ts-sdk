/// <reference types="node" />
import { ResourcePreset } from '../../../../yandex/cloud/ydb/v1/resource_preset';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface GetResourcePresetRequest {
    $type: 'yandex.cloud.ydb.v1.GetResourcePresetRequest';
    /** Required. ID of the resource preset to return. */
    resourcePresetId: string;
}
export interface ListResourcePresetsRequest {
    $type: 'yandex.cloud.ydb.v1.ListResourcePresetsRequest';
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListResourcePresets requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListResourcePresets
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListResourcePresetsResponse {
    $type: 'yandex.cloud.ydb.v1.ListResourcePresetsResponse';
    /** Requested list of resource presets. */
    resourcePresets: ResourcePreset[];
    /**
     * This token allows you to get the next page of results for ListResourcePresets requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListResourcePresets request. Subsequent ListResourcePresets
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetResourcePresetRequest: {
    $type: "yandex.cloud.ydb.v1.GetResourcePresetRequest";
    encode(message: GetResourcePresetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetResourcePresetRequest;
    fromJSON(object: any): GetResourcePresetRequest;
    toJSON(message: GetResourcePresetRequest): unknown;
    fromPartial(object: DeepPartial<GetResourcePresetRequest>): GetResourcePresetRequest;
};
export declare const ListResourcePresetsRequest: {
    $type: "yandex.cloud.ydb.v1.ListResourcePresetsRequest";
    encode(message: ListResourcePresetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcePresetsRequest;
    fromJSON(object: any): ListResourcePresetsRequest;
    toJSON(message: ListResourcePresetsRequest): unknown;
    fromPartial(object: DeepPartial<ListResourcePresetsRequest>): ListResourcePresetsRequest;
};
export declare const ListResourcePresetsResponse: {
    $type: "yandex.cloud.ydb.v1.ListResourcePresetsResponse";
    encode(message: ListResourcePresetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcePresetsResponse;
    fromJSON(object: any): ListResourcePresetsResponse;
    toJSON(message: ListResourcePresetsResponse): unknown;
    fromPartial(object: DeepPartial<ListResourcePresetsResponse>): ListResourcePresetsResponse;
};
export declare const ResourcePresetServiceService: {
    /** Returns the specified resource preset. */
    readonly get: {
        readonly path: "/yandex.cloud.ydb.v1.ResourcePresetService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetResourcePresetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetResourcePresetRequest;
        readonly responseSerialize: (value: ResourcePreset) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ResourcePreset;
    };
    /** Returns the list of available resource presets. */
    readonly list: {
        readonly path: "/yandex.cloud.ydb.v1.ResourcePresetService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListResourcePresetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListResourcePresetsRequest;
        readonly responseSerialize: (value: ListResourcePresetsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListResourcePresetsResponse;
    };
};
export interface ResourcePresetServiceServer extends UntypedServiceImplementation {
    /** Returns the specified resource preset. */
    get: handleUnaryCall<GetResourcePresetRequest, ResourcePreset>;
    /** Returns the list of available resource presets. */
    list: handleUnaryCall<ListResourcePresetsRequest, ListResourcePresetsResponse>;
}
export interface ResourcePresetServiceClient extends Client {
    /** Returns the specified resource preset. */
    get(request: GetResourcePresetRequest, callback: (error: ServiceError | null, response: ResourcePreset) => void): ClientUnaryCall;
    get(request: GetResourcePresetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ResourcePreset) => void): ClientUnaryCall;
    get(request: GetResourcePresetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ResourcePreset) => void): ClientUnaryCall;
    /** Returns the list of available resource presets. */
    list(request: ListResourcePresetsRequest, callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void): ClientUnaryCall;
    list(request: ListResourcePresetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void): ClientUnaryCall;
    list(request: ListResourcePresetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListResourcePresetsResponse) => void): ClientUnaryCall;
}
export declare const ResourcePresetServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ResourcePresetServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
