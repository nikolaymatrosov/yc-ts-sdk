/// <reference types="node" />
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from '../../../../yandex/cloud/access/access';
import { Repository } from '../../../../yandex/cloud/containerregistry/v1/repository';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface GetRepositoryRequest {
    $type: 'yandex.cloud.containerregistry.v1.GetRepositoryRequest';
    /**
     * ID of the Repository resource to return.
     *
     * To get the repository ID use a [RepositoryService.List] request.
     */
    repositoryId: string;
}
export interface GetRepositoryByNameRequest {
    $type: 'yandex.cloud.containerregistry.v1.GetRepositoryByNameRequest';
    /**
     * Name of the Repository resource to return.
     *
     * To get the repository name use a [RepositoryService.List] request.
     */
    repositoryName: string;
}
export interface ListRepositoriesRequest {
    $type: 'yandex.cloud.containerregistry.v1.ListRepositoriesRequest';
    /**
     * ID of the registry to list repositories in.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;
    /**
     * ID of the folder to list registries in.
     *
     * [folder_id] is ignored if a [ListImagesRequest.registry_id] is specified in the request.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRepositoriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRepositoriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Repository.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter: string;
    orderBy: string;
}
export interface ListRepositoriesResponse {
    $type: 'yandex.cloud.containerregistry.v1.ListRepositoriesResponse';
    /** List of Repository resources. */
    repositories: Repository[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRepositoriesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRepositoriesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface UpsertRepositoryRequest {
    $type: 'yandex.cloud.containerregistry.v1.UpsertRepositoryRequest';
    /**
     * Name of the repository.
     *
     * The name of the repository should match the name of the images that will be pushed in the repository.
     */
    name: string;
}
export interface UpsertRepositoryMetadata {
    $type: 'yandex.cloud.containerregistry.v1.UpsertRepositoryMetadata';
    /** ID of the repository that is being upserted. */
    repositoryId: string;
}
export interface DeleteRepositoryRequest {
    $type: 'yandex.cloud.containerregistry.v1.DeleteRepositoryRequest';
    /** ID of the repository to delete. */
    repositoryId: string;
}
export interface DeleteRepositoryMetadata {
    $type: 'yandex.cloud.containerregistry.v1.DeleteRepositoryMetadata';
    /** ID of the repository that is being deleted. */
    repositoryId: string;
}
export declare const GetRepositoryRequest: {
    $type: "yandex.cloud.containerregistry.v1.GetRepositoryRequest";
    encode(message: GetRepositoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetRepositoryRequest;
    fromJSON(object: any): GetRepositoryRequest;
    toJSON(message: GetRepositoryRequest): unknown;
    fromPartial(object: DeepPartial<GetRepositoryRequest>): GetRepositoryRequest;
};
export declare const GetRepositoryByNameRequest: {
    $type: "yandex.cloud.containerregistry.v1.GetRepositoryByNameRequest";
    encode(message: GetRepositoryByNameRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetRepositoryByNameRequest;
    fromJSON(object: any): GetRepositoryByNameRequest;
    toJSON(message: GetRepositoryByNameRequest): unknown;
    fromPartial(object: DeepPartial<GetRepositoryByNameRequest>): GetRepositoryByNameRequest;
};
export declare const ListRepositoriesRequest: {
    $type: "yandex.cloud.containerregistry.v1.ListRepositoriesRequest";
    encode(message: ListRepositoriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRepositoriesRequest;
    fromJSON(object: any): ListRepositoriesRequest;
    toJSON(message: ListRepositoriesRequest): unknown;
    fromPartial(object: DeepPartial<ListRepositoriesRequest>): ListRepositoriesRequest;
};
export declare const ListRepositoriesResponse: {
    $type: "yandex.cloud.containerregistry.v1.ListRepositoriesResponse";
    encode(message: ListRepositoriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRepositoriesResponse;
    fromJSON(object: any): ListRepositoriesResponse;
    toJSON(message: ListRepositoriesResponse): unknown;
    fromPartial(object: DeepPartial<ListRepositoriesResponse>): ListRepositoriesResponse;
};
export declare const UpsertRepositoryRequest: {
    $type: "yandex.cloud.containerregistry.v1.UpsertRepositoryRequest";
    encode(message: UpsertRepositoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpsertRepositoryRequest;
    fromJSON(object: any): UpsertRepositoryRequest;
    toJSON(message: UpsertRepositoryRequest): unknown;
    fromPartial(object: DeepPartial<UpsertRepositoryRequest>): UpsertRepositoryRequest;
};
export declare const UpsertRepositoryMetadata: {
    $type: "yandex.cloud.containerregistry.v1.UpsertRepositoryMetadata";
    encode(message: UpsertRepositoryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpsertRepositoryMetadata;
    fromJSON(object: any): UpsertRepositoryMetadata;
    toJSON(message: UpsertRepositoryMetadata): unknown;
    fromPartial(object: DeepPartial<UpsertRepositoryMetadata>): UpsertRepositoryMetadata;
};
export declare const DeleteRepositoryRequest: {
    $type: "yandex.cloud.containerregistry.v1.DeleteRepositoryRequest";
    encode(message: DeleteRepositoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRepositoryRequest;
    fromJSON(object: any): DeleteRepositoryRequest;
    toJSON(message: DeleteRepositoryRequest): unknown;
    fromPartial(object: DeepPartial<DeleteRepositoryRequest>): DeleteRepositoryRequest;
};
export declare const DeleteRepositoryMetadata: {
    $type: "yandex.cloud.containerregistry.v1.DeleteRepositoryMetadata";
    encode(message: DeleteRepositoryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRepositoryMetadata;
    fromJSON(object: any): DeleteRepositoryMetadata;
    toJSON(message: DeleteRepositoryMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteRepositoryMetadata>): DeleteRepositoryMetadata;
};
/** A set of methods for managing Repository resources. */
export declare const RepositoryServiceService: {
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRepositoryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRepositoryRequest;
        readonly responseSerialize: (value: Repository) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Repository;
    };
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    readonly getByName: {
        readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/GetByName";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRepositoryByNameRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRepositoryByNameRequest;
        readonly responseSerialize: (value: Repository) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Repository;
    };
    /** Retrieves the list of Repository resources in the specified registry. */
    readonly list: {
        readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRepositoriesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRepositoriesRequest;
        readonly responseSerialize: (value: ListRepositoriesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRepositoriesResponse;
    };
    /** Lists access bindings for the specified repository. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Upserts a repository in the specified registry. */
    readonly upsert: {
        readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/Upsert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpsertRepositoryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpsertRepositoryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified repository. */
    readonly delete: {
        readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteRepositoryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteRepositoryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Sets access bindings for the specified repository. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified repository. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.containerregistry.v1.RepositoryService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface RepositoryServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    get: handleUnaryCall<GetRepositoryRequest, Repository>;
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    getByName: handleUnaryCall<GetRepositoryByNameRequest, Repository>;
    /** Retrieves the list of Repository resources in the specified registry. */
    list: handleUnaryCall<ListRepositoriesRequest, ListRepositoriesResponse>;
    /** Lists access bindings for the specified repository. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Upserts a repository in the specified registry. */
    upsert: handleUnaryCall<UpsertRepositoryRequest, Operation>;
    /** Deletes the specified repository. */
    delete: handleUnaryCall<DeleteRepositoryRequest, Operation>;
    /** Sets access bindings for the specified repository. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified repository. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface RepositoryServiceClient extends Client {
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    get(request: GetRepositoryRequest, callback: (error: ServiceError | null, response: Repository) => void): ClientUnaryCall;
    get(request: GetRepositoryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Repository) => void): ClientUnaryCall;
    get(request: GetRepositoryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Repository) => void): ClientUnaryCall;
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    getByName(request: GetRepositoryByNameRequest, callback: (error: ServiceError | null, response: Repository) => void): ClientUnaryCall;
    getByName(request: GetRepositoryByNameRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Repository) => void): ClientUnaryCall;
    getByName(request: GetRepositoryByNameRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Repository) => void): ClientUnaryCall;
    /** Retrieves the list of Repository resources in the specified registry. */
    list(request: ListRepositoriesRequest, callback: (error: ServiceError | null, response: ListRepositoriesResponse) => void): ClientUnaryCall;
    list(request: ListRepositoriesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRepositoriesResponse) => void): ClientUnaryCall;
    list(request: ListRepositoriesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRepositoriesResponse) => void): ClientUnaryCall;
    /** Lists access bindings for the specified repository. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Upserts a repository in the specified registry. */
    upsert(request: UpsertRepositoryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    upsert(request: UpsertRepositoryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    upsert(request: UpsertRepositoryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified repository. */
    delete(request: DeleteRepositoryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteRepositoryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteRepositoryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Sets access bindings for the specified repository. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified repository. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const RepositoryServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => RepositoryServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
