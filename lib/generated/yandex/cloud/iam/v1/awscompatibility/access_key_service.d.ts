/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { AccessKey } from '../../../../../yandex/cloud/iam/v1/awscompatibility/access_key';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iam.v1.awscompatibility";
export interface GetAccessKeyRequest {
    /**
     * ID of the AccessKey resource to return.
     * To get the access key ID, use a [AccessKeyService.List] request.
     */
    accessKeyId: string;
}
export interface ListAccessKeysRequest {
    /**
     * ID of the service account to list access keys for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListAccessKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListAccessKeysResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListAccessKeysResponse {
    /** List of access keys. */
    accessKeys: AccessKey[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAccessKeysRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListAccessKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateAccessKeyRequest {
    /**
     * ID of the service account to create an access key for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /** Description of the access key. */
    description: string;
}
export interface CreateAccessKeyResponse {
    /** AccessKey resource. */
    accessKey: AccessKey | undefined;
    /**
     * Secret access key.
     * The key is AWS compatible.
     */
    secret: string;
}
export interface UpdateAccessKeyRequest {
    /**
     * ID of the AccessKey resource to update.
     * To get the access key ID, use a [AccessKeyService.List] request.
     */
    accessKeyId: string;
    /** Field mask that specifies which fields of the Accesskey resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Description of the access key. */
    description: string;
}
export interface UpdateAccessKeyMetadata {
    /** ID of the AccessKey resource that is being updated. */
    accessKeyId: string;
}
export interface DeleteAccessKeyRequest {
    /**
     * ID of the access key to delete.
     * To get the access key ID, use a [AccessKeyService.List] request.
     */
    accessKeyId: string;
}
export interface DeleteAccessKeyMetadata {
    /** ID of the access key that is being deleted. */
    accessKeyId: string;
}
export interface ListAccessKeyOperationsRequest {
    /** ID of the key to list operations for. */
    accessKeyId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListAccessKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListAccessKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListAccessKeyOperationsResponse {
    /** List of operations for the specified access key. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAccessKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListAccessKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetAccessKeyRequest: {
    encode(message: GetAccessKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAccessKeyRequest;
    fromJSON(object: any): GetAccessKeyRequest;
    toJSON(message: GetAccessKeyRequest): unknown;
    fromPartial(object: DeepPartial<GetAccessKeyRequest>): GetAccessKeyRequest;
};
export declare const ListAccessKeysRequest: {
    encode(message: ListAccessKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAccessKeysRequest;
    fromJSON(object: any): ListAccessKeysRequest;
    toJSON(message: ListAccessKeysRequest): unknown;
    fromPartial(object: DeepPartial<ListAccessKeysRequest>): ListAccessKeysRequest;
};
export declare const ListAccessKeysResponse: {
    encode(message: ListAccessKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAccessKeysResponse;
    fromJSON(object: any): ListAccessKeysResponse;
    toJSON(message: ListAccessKeysResponse): unknown;
    fromPartial(object: DeepPartial<ListAccessKeysResponse>): ListAccessKeysResponse;
};
export declare const CreateAccessKeyRequest: {
    encode(message: CreateAccessKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAccessKeyRequest;
    fromJSON(object: any): CreateAccessKeyRequest;
    toJSON(message: CreateAccessKeyRequest): unknown;
    fromPartial(object: DeepPartial<CreateAccessKeyRequest>): CreateAccessKeyRequest;
};
export declare const CreateAccessKeyResponse: {
    encode(message: CreateAccessKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAccessKeyResponse;
    fromJSON(object: any): CreateAccessKeyResponse;
    toJSON(message: CreateAccessKeyResponse): unknown;
    fromPartial(object: DeepPartial<CreateAccessKeyResponse>): CreateAccessKeyResponse;
};
export declare const UpdateAccessKeyRequest: {
    encode(message: UpdateAccessKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAccessKeyRequest;
    fromJSON(object: any): UpdateAccessKeyRequest;
    toJSON(message: UpdateAccessKeyRequest): unknown;
    fromPartial(object: DeepPartial<UpdateAccessKeyRequest>): UpdateAccessKeyRequest;
};
export declare const UpdateAccessKeyMetadata: {
    encode(message: UpdateAccessKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAccessKeyMetadata;
    fromJSON(object: any): UpdateAccessKeyMetadata;
    toJSON(message: UpdateAccessKeyMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateAccessKeyMetadata>): UpdateAccessKeyMetadata;
};
export declare const DeleteAccessKeyRequest: {
    encode(message: DeleteAccessKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAccessKeyRequest;
    fromJSON(object: any): DeleteAccessKeyRequest;
    toJSON(message: DeleteAccessKeyRequest): unknown;
    fromPartial(object: DeepPartial<DeleteAccessKeyRequest>): DeleteAccessKeyRequest;
};
export declare const DeleteAccessKeyMetadata: {
    encode(message: DeleteAccessKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAccessKeyMetadata;
    fromJSON(object: any): DeleteAccessKeyMetadata;
    toJSON(message: DeleteAccessKeyMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteAccessKeyMetadata>): DeleteAccessKeyMetadata;
};
export declare const ListAccessKeyOperationsRequest: {
    encode(message: ListAccessKeyOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAccessKeyOperationsRequest;
    fromJSON(object: any): ListAccessKeyOperationsRequest;
    toJSON(message: ListAccessKeyOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListAccessKeyOperationsRequest>): ListAccessKeyOperationsRequest;
};
export declare const ListAccessKeyOperationsResponse: {
    encode(message: ListAccessKeyOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAccessKeyOperationsResponse;
    fromJSON(object: any): ListAccessKeyOperationsResponse;
    toJSON(message: ListAccessKeyOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListAccessKeyOperationsResponse>): ListAccessKeyOperationsResponse;
};
/** A set of methods for managing access keys. */
export declare const AccessKeyServiceService: {
    /** Retrieves the list of access keys for the specified service account. */
    readonly list: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessKeysRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessKeysRequest;
        readonly responseSerialize: (value: ListAccessKeysResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessKeysResponse;
    };
    /**
     * Returns the specified access key.
     *
     * To get the list of available access keys, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAccessKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAccessKeyRequest;
        readonly responseSerialize: (value: AccessKey) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AccessKey;
    };
    /** Creates an access key for the specified service account. */
    readonly create: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateAccessKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateAccessKeyRequest;
        readonly responseSerialize: (value: CreateAccessKeyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateAccessKeyResponse;
    };
    /** Updates the specified access key. */
    readonly update: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified access key. */
    readonly delete: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteAccessKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteAccessKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of operations for the specified access key. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessKeyOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessKeyOperationsRequest;
        readonly responseSerialize: (value: ListAccessKeyOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessKeyOperationsResponse;
    };
};
export interface AccessKeyServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of access keys for the specified service account. */
    list: handleUnaryCall<ListAccessKeysRequest, ListAccessKeysResponse>;
    /**
     * Returns the specified access key.
     *
     * To get the list of available access keys, make a [List] request.
     */
    get: handleUnaryCall<GetAccessKeyRequest, AccessKey>;
    /** Creates an access key for the specified service account. */
    create: handleUnaryCall<CreateAccessKeyRequest, CreateAccessKeyResponse>;
    /** Updates the specified access key. */
    update: handleUnaryCall<UpdateAccessKeyRequest, Operation>;
    /** Deletes the specified access key. */
    delete: handleUnaryCall<DeleteAccessKeyRequest, Operation>;
    /** Retrieves the list of operations for the specified access key. */
    listOperations: handleUnaryCall<ListAccessKeyOperationsRequest, ListAccessKeyOperationsResponse>;
}
export interface AccessKeyServiceClient extends Client {
    /** Retrieves the list of access keys for the specified service account. */
    list(request: ListAccessKeysRequest, callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void): ClientUnaryCall;
    list(request: ListAccessKeysRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void): ClientUnaryCall;
    list(request: ListAccessKeysRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessKeysResponse) => void): ClientUnaryCall;
    /**
     * Returns the specified access key.
     *
     * To get the list of available access keys, make a [List] request.
     */
    get(request: GetAccessKeyRequest, callback: (error: ServiceError | null, response: AccessKey) => void): ClientUnaryCall;
    get(request: GetAccessKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AccessKey) => void): ClientUnaryCall;
    get(request: GetAccessKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AccessKey) => void): ClientUnaryCall;
    /** Creates an access key for the specified service account. */
    create(request: CreateAccessKeyRequest, callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void): ClientUnaryCall;
    create(request: CreateAccessKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void): ClientUnaryCall;
    create(request: CreateAccessKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateAccessKeyResponse) => void): ClientUnaryCall;
    /** Updates the specified access key. */
    update(request: UpdateAccessKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateAccessKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateAccessKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified access key. */
    delete(request: DeleteAccessKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAccessKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAccessKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of operations for the specified access key. */
    listOperations(request: ListAccessKeyOperationsRequest, callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListAccessKeyOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListAccessKeyOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessKeyOperationsResponse) => void): ClientUnaryCall;
}
export declare const AccessKeyServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => AccessKeyServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
