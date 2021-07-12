/// <reference types="node" />
import { Version } from '../../../../../yandex/cloud/mdb/clickhouse/v1/version';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
export interface ListVersionsRequest {
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListVersionsResponse.next_page_token] that can be used
     * to get the next page of results in subsequent ListVersions requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token] to the [ListVersionsResponse.next_page_token] returned by a previous ListVersions
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListVersionsResponse {
    /** Requested list of available versions. */
    version: Version[];
    /**
     * This token allows you to get the next page of results for ListVersions requests,
     * if the number of results is larger than [ListVersionsRequest.page_size] specified in the request.
     * To get the next page, specify the value of [next_page_token] as a value for
     * the [ListVersionsRequest.page_token] parameter in the next ListVerions request. Subsequent ListVersions
     * requests will have their own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const ListVersionsRequest: {
    encode(message: ListVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVersionsRequest;
    fromJSON(object: any): ListVersionsRequest;
    toJSON(message: ListVersionsRequest): unknown;
    fromPartial(object: DeepPartial<ListVersionsRequest>): ListVersionsRequest;
};
export declare const ListVersionsResponse: {
    encode(message: ListVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVersionsResponse;
    fromJSON(object: any): ListVersionsResponse;
    toJSON(message: ListVersionsResponse): unknown;
    fromPartial(object: DeepPartial<ListVersionsResponse>): ListVersionsResponse;
};
/** A set of methods for managing ClickHouse versions. */
export declare const VersionsServiceService: {
    /** Returns list of available ClickHouse versions. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.VersionsService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListVersionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListVersionsRequest;
        readonly responseSerialize: (value: ListVersionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListVersionsResponse;
    };
};
export interface VersionsServiceServer extends UntypedServiceImplementation {
    /** Returns list of available ClickHouse versions. */
    list: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
}
export interface VersionsServiceClient extends Client {
    /** Returns list of available ClickHouse versions. */
    list(request: ListVersionsRequest, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    list(request: ListVersionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    list(request: ListVersionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
}
export declare const VersionsServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => VersionsServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
