/// <reference types="node" />
import { Operation } from '../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.operation";
export interface GetOperationRequest {
    $type: 'yandex.cloud.operation.GetOperationRequest';
    /** ID of the Operation resource to return. */
    operationId: string;
}
export interface CancelOperationRequest {
    $type: 'yandex.cloud.operation.CancelOperationRequest';
    /** ID of the operation to cancel. */
    operationId: string;
}
export declare const GetOperationRequest: {
    $type: "yandex.cloud.operation.GetOperationRequest";
    encode(message: GetOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOperationRequest;
    fromJSON(object: any): GetOperationRequest;
    toJSON(message: GetOperationRequest): unknown;
    fromPartial(object: DeepPartial<GetOperationRequest>): GetOperationRequest;
};
export declare const CancelOperationRequest: {
    $type: "yandex.cloud.operation.CancelOperationRequest";
    encode(message: CancelOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelOperationRequest;
    fromJSON(object: any): CancelOperationRequest;
    toJSON(message: CancelOperationRequest): unknown;
    fromPartial(object: DeepPartial<CancelOperationRequest>): CancelOperationRequest;
};
/** A set of methods for managing operations for asynchronous API requests. */
export declare const OperationServiceService: {
    /** Returns the specified Operation resource. */
    readonly get: {
        readonly path: "/yandex.cloud.operation.OperationService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOperationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOperationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Cancels the specified operation. */
    readonly cancel: {
        readonly path: "/yandex.cloud.operation.OperationService/Cancel";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CancelOperationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CancelOperationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface OperationServiceServer extends UntypedServiceImplementation {
    /** Returns the specified Operation resource. */
    get: handleUnaryCall<GetOperationRequest, Operation>;
    /** Cancels the specified operation. */
    cancel: handleUnaryCall<CancelOperationRequest, Operation>;
}
export interface OperationServiceClient extends Client {
    /** Returns the specified Operation resource. */
    get(request: GetOperationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    get(request: GetOperationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    get(request: GetOperationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Cancels the specified operation. */
    cancel(request: CancelOperationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancel(request: CancelOperationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancel(request: CancelOperationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const OperationServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => OperationServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
