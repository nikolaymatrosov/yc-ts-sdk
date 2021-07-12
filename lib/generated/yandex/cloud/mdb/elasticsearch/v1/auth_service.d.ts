/// <reference types="node" />
import { AuthProvider } from '../../../../../yandex/cloud/mdb/elasticsearch/v1/auth';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
export interface ListAuthProvidersRequest {
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
}
export interface ListAuthProvidersResponse {
    /** List of auth providers of the Elasticsearch cluster. */
    providers: AuthProvider[];
}
export interface GetAuthProviderRequest {
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. Name of the provider to delete. */
    name: string;
}
export interface AddAuthProvidersRequest {
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. List of providers to add. */
    providers: AuthProvider[];
}
export interface UpdateAuthProvidersRequest {
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. List of providers to set. */
    providers: AuthProvider[];
}
export interface DeleteAuthProvidersRequest {
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. List of providers to delete. */
    providerNames: string[];
}
export interface UpdateAuthProviderRequest {
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. Name of the provider to update. */
    name: string;
    /** Required. New provider defenition. */
    provider: AuthProvider | undefined;
}
export interface DeleteAuthProviderRequest {
    /** Required. ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Required. Name of the provider to delete. */
    name: string;
}
export interface AddAuthProvidersMetadata {
    /** ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Names of the providers being added. */
    names: string[];
}
export interface UpdateAuthProvidersMetadata {
    /** ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Names of the providers being added. */
    names: string[];
}
export interface DeleteAuthProvidersMetadata {
    /** ID of the ElasticSearch cluster. */
    clusterId: string;
    /** Names of the providers being removed. */
    names: string[];
}
export declare const ListAuthProvidersRequest: {
    encode(message: ListAuthProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAuthProvidersRequest;
    fromJSON(object: any): ListAuthProvidersRequest;
    toJSON(message: ListAuthProvidersRequest): unknown;
    fromPartial(object: DeepPartial<ListAuthProvidersRequest>): ListAuthProvidersRequest;
};
export declare const ListAuthProvidersResponse: {
    encode(message: ListAuthProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAuthProvidersResponse;
    fromJSON(object: any): ListAuthProvidersResponse;
    toJSON(message: ListAuthProvidersResponse): unknown;
    fromPartial(object: DeepPartial<ListAuthProvidersResponse>): ListAuthProvidersResponse;
};
export declare const GetAuthProviderRequest: {
    encode(message: GetAuthProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAuthProviderRequest;
    fromJSON(object: any): GetAuthProviderRequest;
    toJSON(message: GetAuthProviderRequest): unknown;
    fromPartial(object: DeepPartial<GetAuthProviderRequest>): GetAuthProviderRequest;
};
export declare const AddAuthProvidersRequest: {
    encode(message: AddAuthProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddAuthProvidersRequest;
    fromJSON(object: any): AddAuthProvidersRequest;
    toJSON(message: AddAuthProvidersRequest): unknown;
    fromPartial(object: DeepPartial<AddAuthProvidersRequest>): AddAuthProvidersRequest;
};
export declare const UpdateAuthProvidersRequest: {
    encode(message: UpdateAuthProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAuthProvidersRequest;
    fromJSON(object: any): UpdateAuthProvidersRequest;
    toJSON(message: UpdateAuthProvidersRequest): unknown;
    fromPartial(object: DeepPartial<UpdateAuthProvidersRequest>): UpdateAuthProvidersRequest;
};
export declare const DeleteAuthProvidersRequest: {
    encode(message: DeleteAuthProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAuthProvidersRequest;
    fromJSON(object: any): DeleteAuthProvidersRequest;
    toJSON(message: DeleteAuthProvidersRequest): unknown;
    fromPartial(object: DeepPartial<DeleteAuthProvidersRequest>): DeleteAuthProvidersRequest;
};
export declare const UpdateAuthProviderRequest: {
    encode(message: UpdateAuthProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAuthProviderRequest;
    fromJSON(object: any): UpdateAuthProviderRequest;
    toJSON(message: UpdateAuthProviderRequest): unknown;
    fromPartial(object: DeepPartial<UpdateAuthProviderRequest>): UpdateAuthProviderRequest;
};
export declare const DeleteAuthProviderRequest: {
    encode(message: DeleteAuthProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAuthProviderRequest;
    fromJSON(object: any): DeleteAuthProviderRequest;
    toJSON(message: DeleteAuthProviderRequest): unknown;
    fromPartial(object: DeepPartial<DeleteAuthProviderRequest>): DeleteAuthProviderRequest;
};
export declare const AddAuthProvidersMetadata: {
    encode(message: AddAuthProvidersMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddAuthProvidersMetadata;
    fromJSON(object: any): AddAuthProvidersMetadata;
    toJSON(message: AddAuthProvidersMetadata): unknown;
    fromPartial(object: DeepPartial<AddAuthProvidersMetadata>): AddAuthProvidersMetadata;
};
export declare const UpdateAuthProvidersMetadata: {
    encode(message: UpdateAuthProvidersMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAuthProvidersMetadata;
    fromJSON(object: any): UpdateAuthProvidersMetadata;
    toJSON(message: UpdateAuthProvidersMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateAuthProvidersMetadata>): UpdateAuthProvidersMetadata;
};
export declare const DeleteAuthProvidersMetadata: {
    encode(message: DeleteAuthProvidersMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAuthProvidersMetadata;
    fromJSON(object: any): DeleteAuthProvidersMetadata;
    toJSON(message: DeleteAuthProvidersMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteAuthProvidersMetadata>): DeleteAuthProvidersMetadata;
};
/** A set of methods for managing Elasticsearch Authentication resources. */
export declare const AuthServiceService: {
    /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
    readonly listProviders: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/ListProviders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAuthProvidersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAuthProvidersRequest;
        readonly responseSerialize: (value: ListAuthProvidersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAuthProvidersResponse;
    };
    /** Returns registered auth provider by name. */
    readonly getProvider: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/GetProvider";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAuthProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAuthProviderRequest;
        readonly responseSerialize: (value: AuthProvider) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AuthProvider;
    };
    /** Adds new auth providers to Elasticsearch cluster. */
    readonly addProviders: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/AddProviders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddAuthProvidersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddAuthProvidersRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Replase the list of auth providers. */
    readonly updateProviders: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProviders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAuthProvidersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAuthProvidersRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Removes auth providers from Elasticsearch cluster by name. */
    readonly deleteProviders: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProviders";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteAuthProvidersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteAuthProvidersRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates registered auth provider. */
    readonly updateProvider: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProvider";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAuthProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAuthProviderRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Removes auth provider from Elasticsearch cluster by name. */
    readonly deleteProvider: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProvider";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteAuthProviderRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteAuthProviderRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface AuthServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
    listProviders: handleUnaryCall<ListAuthProvidersRequest, ListAuthProvidersResponse>;
    /** Returns registered auth provider by name. */
    getProvider: handleUnaryCall<GetAuthProviderRequest, AuthProvider>;
    /** Adds new auth providers to Elasticsearch cluster. */
    addProviders: handleUnaryCall<AddAuthProvidersRequest, Operation>;
    /** Replase the list of auth providers. */
    updateProviders: handleUnaryCall<UpdateAuthProvidersRequest, Operation>;
    /** Removes auth providers from Elasticsearch cluster by name. */
    deleteProviders: handleUnaryCall<DeleteAuthProvidersRequest, Operation>;
    /** Updates registered auth provider. */
    updateProvider: handleUnaryCall<UpdateAuthProviderRequest, Operation>;
    /** Removes auth provider from Elasticsearch cluster by name. */
    deleteProvider: handleUnaryCall<DeleteAuthProviderRequest, Operation>;
}
export interface AuthServiceClient extends Client {
    /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
    listProviders(request: ListAuthProvidersRequest, callback: (error: ServiceError | null, response: ListAuthProvidersResponse) => void): ClientUnaryCall;
    listProviders(request: ListAuthProvidersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAuthProvidersResponse) => void): ClientUnaryCall;
    listProviders(request: ListAuthProvidersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAuthProvidersResponse) => void): ClientUnaryCall;
    /** Returns registered auth provider by name. */
    getProvider(request: GetAuthProviderRequest, callback: (error: ServiceError | null, response: AuthProvider) => void): ClientUnaryCall;
    getProvider(request: GetAuthProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AuthProvider) => void): ClientUnaryCall;
    getProvider(request: GetAuthProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AuthProvider) => void): ClientUnaryCall;
    /** Adds new auth providers to Elasticsearch cluster. */
    addProviders(request: AddAuthProvidersRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addProviders(request: AddAuthProvidersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addProviders(request: AddAuthProvidersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Replase the list of auth providers. */
    updateProviders(request: UpdateAuthProvidersRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateProviders(request: UpdateAuthProvidersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateProviders(request: UpdateAuthProvidersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Removes auth providers from Elasticsearch cluster by name. */
    deleteProviders(request: DeleteAuthProvidersRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteProviders(request: DeleteAuthProvidersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteProviders(request: DeleteAuthProvidersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates registered auth provider. */
    updateProvider(request: UpdateAuthProviderRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateProvider(request: UpdateAuthProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateProvider(request: UpdateAuthProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Removes auth provider from Elasticsearch cluster by name. */
    deleteProvider(request: DeleteAuthProviderRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteProvider(request: DeleteAuthProviderRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteProvider(request: DeleteAuthProviderRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const AuthServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => AuthServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
