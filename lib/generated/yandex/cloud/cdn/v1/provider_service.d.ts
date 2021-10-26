/// <reference types="node" />
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.cdn.v1";
export interface ActivateProviderRequest {
    /** ID of the folder that the activate provider belongs to. */
    folderId: string;
    /**
     * Specify provider brand/type.
     *
     * Possible values: `gcore`.
     */
    providerType: string;
}
export interface ActivateProviderMetadata {
    /** ID of the folder that the activate provider belongs to. */
    folderId: string;
}
export interface ListActivatedProvidersRequest {
    /** ID of the folder that the activate provider belongs to. */
    folderId: string;
}
export interface ListActivatedProvidersResponse {
    /** Creates a list of providers. */
    providers: string[];
}
export declare const ActivateProviderRequest: {
    encode(message: ActivateProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateProviderRequest;
    fromJSON(object: any): ActivateProviderRequest;
    toJSON(message: ActivateProviderRequest): unknown;
    fromPartial(object: DeepPartial<ActivateProviderRequest>): ActivateProviderRequest;
};
export declare const ActivateProviderMetadata: {
    encode(message: ActivateProviderMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateProviderMetadata;
    fromJSON(object: any): ActivateProviderMetadata;
    toJSON(message: ActivateProviderMetadata): unknown;
    fromPartial(object: DeepPartial<ActivateProviderMetadata>): ActivateProviderMetadata;
};
export declare const ListActivatedProvidersRequest: {
    encode(message: ListActivatedProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListActivatedProvidersRequest;
    fromJSON(object: any): ListActivatedProvidersRequest;
    toJSON(message: ListActivatedProvidersRequest): unknown;
    fromPartial(object: DeepPartial<ListActivatedProvidersRequest>): ListActivatedProvidersRequest;
};
export declare const ListActivatedProvidersResponse: {
    encode(message: ListActivatedProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListActivatedProvidersResponse;
    fromJSON(object: any): ListActivatedProvidersResponse;
    toJSON(message: ListActivatedProvidersResponse): unknown;
    fromPartial(object: DeepPartial<ListActivatedProvidersResponse>): ListActivatedProvidersResponse;
};
/** A set of methods for managing Provider Service resources. */
export declare const ProviderServiceService: {
    /** Activate provider for specified client. */
    readonly activate: {
        readonly path: "/yandex.cloud.cdn.v1.ProviderService/Activate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ActivateProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ActivateProviderRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List activated providers for specified client. */
    readonly listActivated: {
        readonly path: "/yandex.cloud.cdn.v1.ProviderService/ListActivated";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListActivatedProvidersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListActivatedProvidersRequest;
        readonly responseSerialize: (value: ListActivatedProvidersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListActivatedProvidersResponse;
    };
};
export interface ProviderServiceServer extends UntypedServiceImplementation {
    /** Activate provider for specified client. */
    activate: handleUnaryCall<ActivateProviderRequest, Operation>;
    /** List activated providers for specified client. */
    listActivated: handleUnaryCall<ListActivatedProvidersRequest, ListActivatedProvidersResponse>;
}
export interface ProviderServiceClient extends Client {
    /** Activate provider for specified client. */
    activate(request: ActivateProviderRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List activated providers for specified client. */
    listActivated(request: ListActivatedProvidersRequest, callback: (error: ServiceError | null, response: ListActivatedProvidersResponse) => void): ClientUnaryCall;
    listActivated(request: ListActivatedProvidersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListActivatedProvidersResponse) => void): ClientUnaryCall;
    listActivated(request: ListActivatedProvidersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListActivatedProvidersResponse) => void): ClientUnaryCall;
}
export declare const ProviderServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ProviderServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
