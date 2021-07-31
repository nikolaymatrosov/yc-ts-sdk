/// <reference types="node" />
import { Status } from '../../../../google/rpc/status';
import { Destination, IncomingLogEntry } from '../../../../yandex/cloud/logging/v1/log_entry';
import { LogEntryResource } from '../../../../yandex/cloud/logging/v1/log_resource';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface WriteRequest {
    destination: Destination | undefined;
    resource: LogEntryResource | undefined;
    entries: IncomingLogEntry[];
}
export interface WriteResponse {
    errors: {
        [key: number]: Status;
    };
}
export interface WriteResponse_ErrorsEntry {
    key: number;
    value: Status | undefined;
}
export declare const WriteRequest: {
    encode(message: WriteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WriteRequest;
    fromJSON(object: any): WriteRequest;
    toJSON(message: WriteRequest): unknown;
    fromPartial(object: DeepPartial<WriteRequest>): WriteRequest;
};
export declare const WriteResponse: {
    encode(message: WriteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WriteResponse;
    fromJSON(object: any): WriteResponse;
    toJSON(message: WriteResponse): unknown;
    fromPartial(object: DeepPartial<WriteResponse>): WriteResponse;
};
export declare const WriteResponse_ErrorsEntry: {
    encode(message: WriteResponse_ErrorsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WriteResponse_ErrorsEntry;
    fromJSON(object: any): WriteResponse_ErrorsEntry;
    toJSON(message: WriteResponse_ErrorsEntry): unknown;
    fromPartial(object: DeepPartial<WriteResponse_ErrorsEntry>): WriteResponse_ErrorsEntry;
};
export declare const LogIngestionServiceService: {
    readonly write: {
        readonly path: "/yandex.cloud.logging.v1.LogIngestionService/Write";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: WriteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => WriteRequest;
        readonly responseSerialize: (value: WriteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => WriteResponse;
    };
};
export interface LogIngestionServiceServer extends UntypedServiceImplementation {
    write: handleUnaryCall<WriteRequest, WriteResponse>;
}
export interface LogIngestionServiceClient extends Client {
    write(request: WriteRequest, callback: (error: ServiceError | null, response: WriteResponse) => void): ClientUnaryCall;
    write(request: WriteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: WriteResponse) => void): ClientUnaryCall;
    write(request: WriteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: WriteResponse) => void): ClientUnaryCall;
}
export declare const LogIngestionServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => LogIngestionServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};