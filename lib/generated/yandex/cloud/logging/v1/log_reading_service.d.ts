/// <reference types="node" />
import { LogEntry, LogLevel_Level } from '../../../../yandex/cloud/logging/v1/log_entry';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface ReadRequest {
    pageToken: string | undefined;
    criteria: Criteria | undefined;
}
export interface ReadResponse {
    logGroupId: string;
    entries: LogEntry[];
    nextPageToken: string;
    previousPageToken: string;
}
export interface Criteria {
    logGroupId: string;
    resourceTypes: string[];
    resourceIds: string[];
    since: Date | undefined;
    until: Date | undefined;
    levels: LogLevel_Level[];
    filter: string;
    pageSize: number;
}
export declare const ReadRequest: {
    encode(message: ReadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReadRequest;
    fromJSON(object: any): ReadRequest;
    toJSON(message: ReadRequest): unknown;
    fromPartial(object: DeepPartial<ReadRequest>): ReadRequest;
};
export declare const ReadResponse: {
    encode(message: ReadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReadResponse;
    fromJSON(object: any): ReadResponse;
    toJSON(message: ReadResponse): unknown;
    fromPartial(object: DeepPartial<ReadResponse>): ReadResponse;
};
export declare const Criteria: {
    encode(message: Criteria, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Criteria;
    fromJSON(object: any): Criteria;
    toJSON(message: Criteria): unknown;
    fromPartial(object: DeepPartial<Criteria>): Criteria;
};
export declare const LogReadingServiceService: {
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
    read: handleUnaryCall<ReadRequest, ReadResponse>;
}
export interface LogReadingServiceClient extends Client {
    read(request: ReadRequest, callback: (error: ServiceError | null, response: ReadResponse) => void): ClientUnaryCall;
    read(request: ReadRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ReadResponse) => void): ClientUnaryCall;
    read(request: ReadRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ReadResponse) => void): ClientUnaryCall;
}
export declare const LogReadingServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => LogReadingServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
