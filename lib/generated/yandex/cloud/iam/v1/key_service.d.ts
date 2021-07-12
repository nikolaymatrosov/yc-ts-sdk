/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Key_Algorithm, Key } from '../../../../yandex/cloud/iam/v1/key';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iam.v1";
export declare enum KeyFormat {
    /** PEM_FILE - Privacy-Enhanced Mail (PEM) format. Default value. */
    PEM_FILE = 0,
    UNRECOGNIZED = -1
}
export declare function keyFormatFromJSON(object: any): KeyFormat;
export declare function keyFormatToJSON(object: KeyFormat): string;
export interface GetKeyRequest {
    /**
     * ID of the Key resource to return.
     * To get the ID use a [KeyService.List] request.
     */
    keyId: string;
    /** Output format of the key. */
    format: KeyFormat;
}
export interface ListKeysRequest {
    /** Output format of the key. */
    format: KeyFormat;
    /**
     * ID of the service account to list key pairs for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListKeysResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListKeysResponse {
    /** List of Key resources. */
    keys: Key[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListKeysRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateKeyRequest {
    /**
     * ID of the service account to create a key pair for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /** Description of the key pair. */
    description: string;
    /** Output format of the key. */
    format: KeyFormat;
    /** An algorithm used to generate a key pair of the Key resource. */
    keyAlgorithm: Key_Algorithm;
}
export interface CreateKeyResponse {
    /** Key resource. */
    key: Key | undefined;
    /**
     * A private key of the Key resource.
     * This key must be stored securely.
     */
    privateKey: string;
}
export interface UpdateKeyRequest {
    /**
     * ID of the Key resource to update.
     * To get key pair ID, use a [KeyService.List] request.
     */
    keyId: string;
    /** Field mask that specifies which fields of the Key resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Description of the key pair. */
    description: string;
}
export interface UpdateKeyMetadata {
    /** ID of the Key resource that is being updated. */
    keyId: string;
}
export interface DeleteKeyRequest {
    /**
     * ID of the key to delete.
     * To get key ID use a [KeyService.List] request.
     */
    keyId: string;
}
export interface DeleteKeyMetadata {
    /** ID of the key that is being deleted. */
    keyId: string;
}
export interface ListKeyOperationsRequest {
    /** ID of the key to list operations for. */
    keyId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListKeyOperationsResponse {
    /** List of operations for the specified key. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetKeyRequest: {
    encode(message: GetKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetKeyRequest;
    fromJSON(object: any): GetKeyRequest;
    toJSON(message: GetKeyRequest): unknown;
    fromPartial(object: DeepPartial<GetKeyRequest>): GetKeyRequest;
};
export declare const ListKeysRequest: {
    encode(message: ListKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListKeysRequest;
    fromJSON(object: any): ListKeysRequest;
    toJSON(message: ListKeysRequest): unknown;
    fromPartial(object: DeepPartial<ListKeysRequest>): ListKeysRequest;
};
export declare const ListKeysResponse: {
    encode(message: ListKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListKeysResponse;
    fromJSON(object: any): ListKeysResponse;
    toJSON(message: ListKeysResponse): unknown;
    fromPartial(object: DeepPartial<ListKeysResponse>): ListKeysResponse;
};
export declare const CreateKeyRequest: {
    encode(message: CreateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateKeyRequest;
    fromJSON(object: any): CreateKeyRequest;
    toJSON(message: CreateKeyRequest): unknown;
    fromPartial(object: DeepPartial<CreateKeyRequest>): CreateKeyRequest;
};
export declare const CreateKeyResponse: {
    encode(message: CreateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateKeyResponse;
    fromJSON(object: any): CreateKeyResponse;
    toJSON(message: CreateKeyResponse): unknown;
    fromPartial(object: DeepPartial<CreateKeyResponse>): CreateKeyResponse;
};
export declare const UpdateKeyRequest: {
    encode(message: UpdateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateKeyRequest;
    fromJSON(object: any): UpdateKeyRequest;
    toJSON(message: UpdateKeyRequest): unknown;
    fromPartial(object: DeepPartial<UpdateKeyRequest>): UpdateKeyRequest;
};
export declare const UpdateKeyMetadata: {
    encode(message: UpdateKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateKeyMetadata;
    fromJSON(object: any): UpdateKeyMetadata;
    toJSON(message: UpdateKeyMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateKeyMetadata>): UpdateKeyMetadata;
};
export declare const DeleteKeyRequest: {
    encode(message: DeleteKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteKeyRequest;
    fromJSON(object: any): DeleteKeyRequest;
    toJSON(message: DeleteKeyRequest): unknown;
    fromPartial(object: DeepPartial<DeleteKeyRequest>): DeleteKeyRequest;
};
export declare const DeleteKeyMetadata: {
    encode(message: DeleteKeyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteKeyMetadata;
    fromJSON(object: any): DeleteKeyMetadata;
    toJSON(message: DeleteKeyMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteKeyMetadata>): DeleteKeyMetadata;
};
export declare const ListKeyOperationsRequest: {
    encode(message: ListKeyOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListKeyOperationsRequest;
    fromJSON(object: any): ListKeyOperationsRequest;
    toJSON(message: ListKeyOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListKeyOperationsRequest>): ListKeyOperationsRequest;
};
export declare const ListKeyOperationsResponse: {
    encode(message: ListKeyOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListKeyOperationsResponse;
    fromJSON(object: any): ListKeyOperationsResponse;
    toJSON(message: ListKeyOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListKeyOperationsResponse>): ListKeyOperationsResponse;
};
/** A set of methods for managing Key resources. */
export declare const KeyServiceService: {
    /**
     * Returns the specified Key resource.
     *
     * To get the list of available Key resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetKeyRequest;
        readonly responseSerialize: (value: Key) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Key;
    };
    /** Retrieves the list of Key resources for the specified service account. */
    readonly list: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListKeysRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListKeysRequest;
        readonly responseSerialize: (value: ListKeysResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListKeysResponse;
    };
    /** Creates a key pair for the specified service account. */
    readonly create: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateKeyRequest;
        readonly responseSerialize: (value: CreateKeyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateKeyResponse;
    };
    /** Updates the specified key pair. */
    readonly update: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified key pair. */
    readonly delete: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteKeyRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified key. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.iam.v1.KeyService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListKeyOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListKeyOperationsRequest;
        readonly responseSerialize: (value: ListKeyOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListKeyOperationsResponse;
    };
};
export interface KeyServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Key resource.
     *
     * To get the list of available Key resources, make a [List] request.
     */
    get: handleUnaryCall<GetKeyRequest, Key>;
    /** Retrieves the list of Key resources for the specified service account. */
    list: handleUnaryCall<ListKeysRequest, ListKeysResponse>;
    /** Creates a key pair for the specified service account. */
    create: handleUnaryCall<CreateKeyRequest, CreateKeyResponse>;
    /** Updates the specified key pair. */
    update: handleUnaryCall<UpdateKeyRequest, Operation>;
    /** Deletes the specified key pair. */
    delete: handleUnaryCall<DeleteKeyRequest, Operation>;
    /** Lists operations for the specified key. */
    listOperations: handleUnaryCall<ListKeyOperationsRequest, ListKeyOperationsResponse>;
}
export interface KeyServiceClient extends Client {
    /**
     * Returns the specified Key resource.
     *
     * To get the list of available Key resources, make a [List] request.
     */
    get(request: GetKeyRequest, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    get(request: GetKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    get(request: GetKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    /** Retrieves the list of Key resources for the specified service account. */
    list(request: ListKeysRequest, callback: (error: ServiceError | null, response: ListKeysResponse) => void): ClientUnaryCall;
    list(request: ListKeysRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListKeysResponse) => void): ClientUnaryCall;
    list(request: ListKeysRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListKeysResponse) => void): ClientUnaryCall;
    /** Creates a key pair for the specified service account. */
    create(request: CreateKeyRequest, callback: (error: ServiceError | null, response: CreateKeyResponse) => void): ClientUnaryCall;
    create(request: CreateKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateKeyResponse) => void): ClientUnaryCall;
    create(request: CreateKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateKeyResponse) => void): ClientUnaryCall;
    /** Updates the specified key pair. */
    update(request: UpdateKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified key pair. */
    delete(request: DeleteKeyRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified key. */
    listOperations(request: ListKeyOperationsRequest, callback: (error: ServiceError | null, response: ListKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListKeyOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListKeyOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListKeyOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListKeyOperationsResponse) => void): ClientUnaryCall;
}
export declare const KeyServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => KeyServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
