/// <reference types="node" />
import { Struct } from '../../../../google/protobuf/struct';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.datasphere.v1";
export interface NodeExecutionRequest {
    /** ID of the folder that will be matched with Node ACL. */
    folderId: string;
    /** ID of the Node to perform request on. */
    nodeId: string;
    /** Input data for the execution. */
    input: Struct | undefined;
}
export interface NodeExecutionResponse {
    /** Result of the execution. */
    output: Struct | undefined;
}
export declare const NodeExecutionRequest: {
    encode(message: NodeExecutionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeExecutionRequest;
    fromJSON(object: any): NodeExecutionRequest;
    toJSON(message: NodeExecutionRequest): unknown;
    fromPartial(object: DeepPartial<NodeExecutionRequest>): NodeExecutionRequest;
};
export declare const NodeExecutionResponse: {
    encode(message: NodeExecutionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeExecutionResponse;
    fromJSON(object: any): NodeExecutionResponse;
    toJSON(message: NodeExecutionResponse): unknown;
    fromPartial(object: DeepPartial<NodeExecutionResponse>): NodeExecutionResponse;
};
/** A set of methods for managing Node resources. */
export declare const NodeServiceService: {
    /** Executes deployed Node. */
    readonly execute: {
        readonly path: "/yandex.cloud.datasphere.v1.NodeService/Execute";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: NodeExecutionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => NodeExecutionRequest;
        readonly responseSerialize: (value: NodeExecutionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => NodeExecutionResponse;
    };
};
export interface NodeServiceServer extends UntypedServiceImplementation {
    /** Executes deployed Node. */
    execute: handleUnaryCall<NodeExecutionRequest, NodeExecutionResponse>;
}
export interface NodeServiceClient extends Client {
    /** Executes deployed Node. */
    execute(request: NodeExecutionRequest, callback: (error: ServiceError | null, response: NodeExecutionResponse) => void): ClientUnaryCall;
    execute(request: NodeExecutionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: NodeExecutionResponse) => void): ClientUnaryCall;
    execute(request: NodeExecutionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: NodeExecutionResponse) => void): ClientUnaryCall;
}
export declare const NodeServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => NodeServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
