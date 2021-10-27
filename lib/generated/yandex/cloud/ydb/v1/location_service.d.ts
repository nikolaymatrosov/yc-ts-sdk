/// <reference types="node" />
import { Location } from '../../../../yandex/cloud/ydb/v1/location';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface GetLocationRequest {
    $type: 'yandex.cloud.ydb.v1.GetLocationRequest';
    /** Required. ID of the location to return. */
    locationId: string;
}
export interface ListLocationsRequest {
    $type: 'yandex.cloud.ydb.v1.ListLocationsRequest';
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListLocations requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListLocations
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListLocationsResponse {
    $type: 'yandex.cloud.ydb.v1.ListLocationsResponse';
    /** Requested list of locations. */
    locations: Location[];
    /**
     * This token allows you to get the next page of results for ListLocations requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListLocations request. Subsequent ListLocations
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetLocationRequest: {
    $type: "yandex.cloud.ydb.v1.GetLocationRequest";
    encode(message: GetLocationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLocationRequest;
    fromJSON(object: any): GetLocationRequest;
    toJSON(message: GetLocationRequest): unknown;
    fromPartial(object: DeepPartial<GetLocationRequest>): GetLocationRequest;
};
export declare const ListLocationsRequest: {
    $type: "yandex.cloud.ydb.v1.ListLocationsRequest";
    encode(message: ListLocationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLocationsRequest;
    fromJSON(object: any): ListLocationsRequest;
    toJSON(message: ListLocationsRequest): unknown;
    fromPartial(object: DeepPartial<ListLocationsRequest>): ListLocationsRequest;
};
export declare const ListLocationsResponse: {
    $type: "yandex.cloud.ydb.v1.ListLocationsResponse";
    encode(message: ListLocationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLocationsResponse;
    fromJSON(object: any): ListLocationsResponse;
    toJSON(message: ListLocationsResponse): unknown;
    fromPartial(object: DeepPartial<ListLocationsResponse>): ListLocationsResponse;
};
export declare const LocationServiceService: {
    /** Returns the specified location. */
    readonly get: {
        readonly path: "/yandex.cloud.ydb.v1.LocationService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLocationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLocationRequest;
        readonly responseSerialize: (value: Location) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Location;
    };
    /** Returns the list of available locations. */
    readonly list: {
        readonly path: "/yandex.cloud.ydb.v1.LocationService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLocationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLocationsRequest;
        readonly responseSerialize: (value: ListLocationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLocationsResponse;
    };
};
export interface LocationServiceServer extends UntypedServiceImplementation {
    /** Returns the specified location. */
    get: handleUnaryCall<GetLocationRequest, Location>;
    /** Returns the list of available locations. */
    list: handleUnaryCall<ListLocationsRequest, ListLocationsResponse>;
}
export interface LocationServiceClient extends Client {
    /** Returns the specified location. */
    get(request: GetLocationRequest, callback: (error: ServiceError | null, response: Location) => void): ClientUnaryCall;
    get(request: GetLocationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Location) => void): ClientUnaryCall;
    get(request: GetLocationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Location) => void): ClientUnaryCall;
    /** Returns the list of available locations. */
    list(request: ListLocationsRequest, callback: (error: ServiceError | null, response: ListLocationsResponse) => void): ClientUnaryCall;
    list(request: ListLocationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLocationsResponse) => void): ClientUnaryCall;
    list(request: ListLocationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLocationsResponse) => void): ClientUnaryCall;
}
export declare const LocationServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => LocationServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
