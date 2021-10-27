/// <reference types="node" />
import { LogEntry, LogLevel_Level } from '../../../../yandex/cloud/logging/v1/log_entry';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface ReadRequest {
    $type: 'yandex.cloud.logging.v1.ReadRequest';
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ReadResponse.next_page_token] or [ReadResponse.previous_page_token] returned by a previous read request.
     */
    pageToken: string | undefined;
    /**
     * Read criteria.
     *
     * See [Criteria] for details.
     */
    criteria: Criteria | undefined;
}
export interface ReadResponse {
    $type: 'yandex.cloud.logging.v1.ReadResponse';
    /** Log group ID the read was performed from. */
    logGroupId: string;
    /** List of matching log entries. */
    entries: LogEntry[];
    /**
     * Token for getting the next page of the log entries.
     *
     * After getting log entries initially with [Criteria], you can use `next_page_token` as the value
     * for the [ReadRequest.page_token] parameter in the next read request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
    /**
     * Token for getting the previous page of the log entries.
     *
     * After getting log entries initially with [Criteria], you can use `previous_page_token` as the value
     * for the [ReadRequest.page_token] parameter in the next read request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    previousPageToken: string;
}
/** Read criteria. Should be used in initial [ReadRequest]. */
export interface Criteria {
    $type: 'yandex.cloud.logging.v1.Criteria';
    /**
     * ID of the log group to return.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
    /**
     * List of resource types to limit log entries to.
     *
     * Empty list disables filter.
     */
    resourceTypes: string[];
    /**
     * List of resource IDs to limit log entries to.
     *
     * Empty list disables filter.
     */
    resourceIds: string[];
    /** Lower bound of log entries timestamps. */
    since: Date | undefined;
    /** Upper bound of log entries timestamps. */
    until: Date | undefined;
    /**
     * List of log levels to limit log entries to.
     *
     * Empty list disables filter.
     */
    levels: LogLevel_Level[];
    /** Filter expression. For details about filtering, see [documentation](/docs/logging/concepts/filter). */
    filter: string;
    /** The maximum number of results per page to return. */
    pageSize: number;
}
export declare const ReadRequest: {
    $type: "yandex.cloud.logging.v1.ReadRequest";
    encode(message: ReadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReadRequest;
    fromJSON(object: any): ReadRequest;
    toJSON(message: ReadRequest): unknown;
    fromPartial(object: DeepPartial<ReadRequest>): ReadRequest;
};
export declare const ReadResponse: {
    $type: "yandex.cloud.logging.v1.ReadResponse";
    encode(message: ReadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReadResponse;
    fromJSON(object: any): ReadResponse;
    toJSON(message: ReadResponse): unknown;
    fromPartial(object: DeepPartial<ReadResponse>): ReadResponse;
};
export declare const Criteria: {
    $type: "yandex.cloud.logging.v1.Criteria";
    encode(message: Criteria, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Criteria;
    fromJSON(object: any): Criteria;
    toJSON(message: Criteria): unknown;
    fromPartial(object: DeepPartial<Criteria>): Criteria;
};
/** A set of methods for reading from log groups. To make a request use `reader.logging.yandexcloud.net`. */
export declare const LogReadingServiceService: {
    /** Read log entries from the specified log group. */
    readonly read: {
        readonly path: "/yandex.cloud.logging.v1.LogReadingService/Read";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ReadRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ReadRequest;
        readonly responseSerialize: (value: ReadResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ReadResponse;
    };
};
export interface LogReadingServiceServer extends UntypedServiceImplementation {
    /** Read log entries from the specified log group. */
    read: handleUnaryCall<ReadRequest, ReadResponse>;
}
export interface LogReadingServiceClient extends Client {
    /** Read log entries from the specified log group. */
    read(request: ReadRequest, callback: (error: ServiceError | null, response: ReadResponse) => void): ClientUnaryCall;
    read(request: ReadRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ReadResponse) => void): ClientUnaryCall;
    read(request: ReadRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ReadResponse) => void): ClientUnaryCall;
}
export declare const LogReadingServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => LogReadingServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
