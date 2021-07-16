/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from '../../../../../yandex/cloud/access/access';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { Proxy, Target } from '../../../../../yandex/cloud/serverless/mdbproxy/v1/proxy';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.serverless.mdbproxy.v1";
export interface GetProxyRequest {
    /**
     * ID of the proxy to return.
     *
     * To get a proxy ID make a [ProxyService.List] request.
     */
    proxyId: string;
}
export interface ListProxyRequest {
    /**
     * ID of the folder to list proxies in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListProxyResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListProxyResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters proxies listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Proxy.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Example of a filter: `name=my-proxy`.
     */
    filter: string;
}
export interface ListProxyResponse {
    /** List of proxies in the specified folder. */
    proxies: Proxy[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListProxyRequest.page_size], use `nextPageToken` as the value
     * for the [ListProxyRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateProxyRequest {
    /**
     * ID of the folder to create a proxy in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the proxy.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the proxy. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Proxy target. */
    target: Target | undefined;
}
export interface CreateProxyRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateProxyMetadata {
    /** ID of the proxy. */
    proxyId: string;
}
export interface UpdateProxyRequest {
    /** ID of the proxy to update. */
    proxyId: string;
    /** Field mask that specifies which attributes of the proxy should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name for the proxy.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description for the proxy. */
    description: string;
    /** Proxy labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Proxy target. */
    target: Target | undefined;
}
export interface UpdateProxyRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateProxyMetadata {
    /** ID of the proxy. */
    proxyId: string;
}
export interface DeleteProxyRequest {
    /** ID of the proxy. */
    proxyId: string;
}
export interface DeleteProxyMetadata {
    /** ID of the proxy. */
    proxyId: string;
}
export interface ListProxyOperationsRequest {
    /** ID of the proxy to list operations for. */
    proxyId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListProxyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListProxyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}
export interface ListProxyOperationsResponse {
    /** List of operations for the specified proxy. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListProxyOperationsRequest.page_size], use `nextPageToken` as the value
     * for the [ListProxyOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetProxyRequest: {
    encode(message: GetProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetProxyRequest;
    fromJSON(object: any): GetProxyRequest;
    toJSON(message: GetProxyRequest): unknown;
    fromPartial(object: DeepPartial<GetProxyRequest>): GetProxyRequest;
};
export declare const ListProxyRequest: {
    encode(message: ListProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProxyRequest;
    fromJSON(object: any): ListProxyRequest;
    toJSON(message: ListProxyRequest): unknown;
    fromPartial(object: DeepPartial<ListProxyRequest>): ListProxyRequest;
};
export declare const ListProxyResponse: {
    encode(message: ListProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProxyResponse;
    fromJSON(object: any): ListProxyResponse;
    toJSON(message: ListProxyResponse): unknown;
    fromPartial(object: DeepPartial<ListProxyResponse>): ListProxyResponse;
};
export declare const CreateProxyRequest: {
    encode(message: CreateProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProxyRequest;
    fromJSON(object: any): CreateProxyRequest;
    toJSON(message: CreateProxyRequest): unknown;
    fromPartial(object: DeepPartial<CreateProxyRequest>): CreateProxyRequest;
};
export declare const CreateProxyRequest_LabelsEntry: {
    encode(message: CreateProxyRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProxyRequest_LabelsEntry;
    fromJSON(object: any): CreateProxyRequest_LabelsEntry;
    toJSON(message: CreateProxyRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateProxyRequest_LabelsEntry>): CreateProxyRequest_LabelsEntry;
};
export declare const CreateProxyMetadata: {
    encode(message: CreateProxyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProxyMetadata;
    fromJSON(object: any): CreateProxyMetadata;
    toJSON(message: CreateProxyMetadata): unknown;
    fromPartial(object: DeepPartial<CreateProxyMetadata>): CreateProxyMetadata;
};
export declare const UpdateProxyRequest: {
    encode(message: UpdateProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateProxyRequest;
    fromJSON(object: any): UpdateProxyRequest;
    toJSON(message: UpdateProxyRequest): unknown;
    fromPartial(object: DeepPartial<UpdateProxyRequest>): UpdateProxyRequest;
};
export declare const UpdateProxyRequest_LabelsEntry: {
    encode(message: UpdateProxyRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateProxyRequest_LabelsEntry;
    fromJSON(object: any): UpdateProxyRequest_LabelsEntry;
    toJSON(message: UpdateProxyRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateProxyRequest_LabelsEntry>): UpdateProxyRequest_LabelsEntry;
};
export declare const UpdateProxyMetadata: {
    encode(message: UpdateProxyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateProxyMetadata;
    fromJSON(object: any): UpdateProxyMetadata;
    toJSON(message: UpdateProxyMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateProxyMetadata>): UpdateProxyMetadata;
};
export declare const DeleteProxyRequest: {
    encode(message: DeleteProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteProxyRequest;
    fromJSON(object: any): DeleteProxyRequest;
    toJSON(message: DeleteProxyRequest): unknown;
    fromPartial(object: DeepPartial<DeleteProxyRequest>): DeleteProxyRequest;
};
export declare const DeleteProxyMetadata: {
    encode(message: DeleteProxyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteProxyMetadata;
    fromJSON(object: any): DeleteProxyMetadata;
    toJSON(message: DeleteProxyMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteProxyMetadata>): DeleteProxyMetadata;
};
export declare const ListProxyOperationsRequest: {
    encode(message: ListProxyOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProxyOperationsRequest;
    fromJSON(object: any): ListProxyOperationsRequest;
    toJSON(message: ListProxyOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListProxyOperationsRequest>): ListProxyOperationsRequest;
};
export declare const ListProxyOperationsResponse: {
    encode(message: ListProxyOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProxyOperationsResponse;
    fromJSON(object: any): ListProxyOperationsResponse;
    toJSON(message: ListProxyOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListProxyOperationsResponse>): ListProxyOperationsResponse;
};
/** A set of methods for managing serverless MDB proxy. */
export declare const ProxyServiceService: {
    /**
     * Returns the specified proxy.
     *
     * To get the list of all available proxies, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProxyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProxyRequest;
        readonly responseSerialize: (value: Proxy) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Proxy;
    };
    /** Retrieves the list of proxies in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListProxyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProxyRequest;
        readonly responseSerialize: (value: ListProxyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListProxyResponse;
    };
    /** Creates a proxy in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProxyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProxyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified proxy. */
    readonly update: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateProxyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateProxyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified proxy. */
    readonly delete: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteProxyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteProxyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified proxy. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListProxyOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProxyOperationsRequest;
        readonly responseSerialize: (value: ListProxyOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListProxyOperationsResponse;
    };
    /** Lists existing access bindings for the specified proxy. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the proxy. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified proxy. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ProxyServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified proxy.
     *
     * To get the list of all available proxies, make a [List] request.
     */
    get: handleUnaryCall<GetProxyRequest, Proxy>;
    /** Retrieves the list of proxies in the specified folder. */
    list: handleUnaryCall<ListProxyRequest, ListProxyResponse>;
    /** Creates a proxy in the specified folder. */
    create: handleUnaryCall<CreateProxyRequest, Operation>;
    /** Updates the specified proxy. */
    update: handleUnaryCall<UpdateProxyRequest, Operation>;
    /** Deletes the specified proxy. */
    delete: handleUnaryCall<DeleteProxyRequest, Operation>;
    /** Lists operations for the specified proxy. */
    listOperations: handleUnaryCall<ListProxyOperationsRequest, ListProxyOperationsResponse>;
    /** Lists existing access bindings for the specified proxy. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the proxy. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified proxy. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface ProxyServiceClient extends Client {
    /**
     * Returns the specified proxy.
     *
     * To get the list of all available proxies, make a [List] request.
     */
    get(request: GetProxyRequest, callback: (error: ServiceError | null, response: Proxy) => void): ClientUnaryCall;
    get(request: GetProxyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Proxy) => void): ClientUnaryCall;
    get(request: GetProxyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Proxy) => void): ClientUnaryCall;
    /** Retrieves the list of proxies in the specified folder. */
    list(request: ListProxyRequest, callback: (error: ServiceError | null, response: ListProxyResponse) => void): ClientUnaryCall;
    list(request: ListProxyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListProxyResponse) => void): ClientUnaryCall;
    list(request: ListProxyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListProxyResponse) => void): ClientUnaryCall;
    /** Creates a proxy in the specified folder. */
    create(request: CreateProxyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateProxyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateProxyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified proxy. */
    update(request: UpdateProxyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateProxyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateProxyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified proxy. */
    delete(request: DeleteProxyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteProxyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteProxyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified proxy. */
    listOperations(request: ListProxyOperationsRequest, callback: (error: ServiceError | null, response: ListProxyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListProxyOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListProxyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListProxyOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListProxyOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified proxy. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the proxy. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified proxy. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ProxyServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ProxyServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
