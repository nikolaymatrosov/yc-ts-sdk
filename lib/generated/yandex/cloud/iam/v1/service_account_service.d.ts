/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from '../../../../yandex/cloud/access/access';
import { ServiceAccount } from '../../../../yandex/cloud/iam/v1/service_account';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iam.v1";
export interface GetServiceAccountRequest {
    /**
     * ID of the ServiceAccount resource to return.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;
}
export interface ListServiceAccountsRequest {
    /**
     * ID of the folder to list service accounts in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListServiceAccountsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListServiceAccountsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [ServiceAccount.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter: string;
}
export interface ListServiceAccountsResponse {
    /** List of ServiceAccount resources. */
    serviceAccounts: ServiceAccount[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListServiceAccountsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListServiceAccountsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateServiceAccountRequest {
    /**
     * ID of the folder to create a service account in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the service account.
     * The name must be unique within the cloud.
     */
    name: string;
    /** Description of the service account. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateServiceAccountRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateServiceAccountMetadata {
    /** ID of the service account that is being created. */
    serviceAccountId: string;
}
export interface UpdateServiceAccountRequest {
    /**
     * ID of the ServiceAccount resource to update.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** Field mask that specifies which fields of the ServiceAccount resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the service account.
     * The name must be unique within the cloud.
     */
    name: string;
    /** Description of the service account. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateServiceAccountRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateServiceAccountMetadata {
    /** ID of the ServiceAccount resource that is being updated. */
    serviceAccountId: string;
}
export interface DeleteServiceAccountRequest {
    /**
     * ID of the service account to delete.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;
}
export interface DeleteServiceAccountMetadata {
    /** ID of the service account that is being deleted. */
    serviceAccountId: string;
}
export interface ListServiceAccountOperationsRequest {
    /** ID of the ServiceAccount resource to list operations for. */
    serviceAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListServiceAccountOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListServiceAccountOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListServiceAccountOperationsResponse {
    /** List of operations for the specified service account. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListServiceAccountOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListServiceAccountOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetServiceAccountRequest: {
    encode(message: GetServiceAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetServiceAccountRequest;
    fromJSON(object: any): GetServiceAccountRequest;
    toJSON(message: GetServiceAccountRequest): unknown;
    fromPartial(object: DeepPartial<GetServiceAccountRequest>): GetServiceAccountRequest;
};
export declare const ListServiceAccountsRequest: {
    encode(message: ListServiceAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListServiceAccountsRequest;
    fromJSON(object: any): ListServiceAccountsRequest;
    toJSON(message: ListServiceAccountsRequest): unknown;
    fromPartial(object: DeepPartial<ListServiceAccountsRequest>): ListServiceAccountsRequest;
};
export declare const ListServiceAccountsResponse: {
    encode(message: ListServiceAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListServiceAccountsResponse;
    fromJSON(object: any): ListServiceAccountsResponse;
    toJSON(message: ListServiceAccountsResponse): unknown;
    fromPartial(object: DeepPartial<ListServiceAccountsResponse>): ListServiceAccountsResponse;
};
export declare const CreateServiceAccountRequest: {
    encode(message: CreateServiceAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateServiceAccountRequest;
    fromJSON(object: any): CreateServiceAccountRequest;
    toJSON(message: CreateServiceAccountRequest): unknown;
    fromPartial(object: DeepPartial<CreateServiceAccountRequest>): CreateServiceAccountRequest;
};
export declare const CreateServiceAccountRequest_LabelsEntry: {
    encode(message: CreateServiceAccountRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateServiceAccountRequest_LabelsEntry;
    fromJSON(object: any): CreateServiceAccountRequest_LabelsEntry;
    toJSON(message: CreateServiceAccountRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateServiceAccountRequest_LabelsEntry>): CreateServiceAccountRequest_LabelsEntry;
};
export declare const CreateServiceAccountMetadata: {
    encode(message: CreateServiceAccountMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateServiceAccountMetadata;
    fromJSON(object: any): CreateServiceAccountMetadata;
    toJSON(message: CreateServiceAccountMetadata): unknown;
    fromPartial(object: DeepPartial<CreateServiceAccountMetadata>): CreateServiceAccountMetadata;
};
export declare const UpdateServiceAccountRequest: {
    encode(message: UpdateServiceAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateServiceAccountRequest;
    fromJSON(object: any): UpdateServiceAccountRequest;
    toJSON(message: UpdateServiceAccountRequest): unknown;
    fromPartial(object: DeepPartial<UpdateServiceAccountRequest>): UpdateServiceAccountRequest;
};
export declare const UpdateServiceAccountRequest_LabelsEntry: {
    encode(message: UpdateServiceAccountRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateServiceAccountRequest_LabelsEntry;
    fromJSON(object: any): UpdateServiceAccountRequest_LabelsEntry;
    toJSON(message: UpdateServiceAccountRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateServiceAccountRequest_LabelsEntry>): UpdateServiceAccountRequest_LabelsEntry;
};
export declare const UpdateServiceAccountMetadata: {
    encode(message: UpdateServiceAccountMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateServiceAccountMetadata;
    fromJSON(object: any): UpdateServiceAccountMetadata;
    toJSON(message: UpdateServiceAccountMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateServiceAccountMetadata>): UpdateServiceAccountMetadata;
};
export declare const DeleteServiceAccountRequest: {
    encode(message: DeleteServiceAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteServiceAccountRequest;
    fromJSON(object: any): DeleteServiceAccountRequest;
    toJSON(message: DeleteServiceAccountRequest): unknown;
    fromPartial(object: DeepPartial<DeleteServiceAccountRequest>): DeleteServiceAccountRequest;
};
export declare const DeleteServiceAccountMetadata: {
    encode(message: DeleteServiceAccountMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteServiceAccountMetadata;
    fromJSON(object: any): DeleteServiceAccountMetadata;
    toJSON(message: DeleteServiceAccountMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteServiceAccountMetadata>): DeleteServiceAccountMetadata;
};
export declare const ListServiceAccountOperationsRequest: {
    encode(message: ListServiceAccountOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListServiceAccountOperationsRequest;
    fromJSON(object: any): ListServiceAccountOperationsRequest;
    toJSON(message: ListServiceAccountOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListServiceAccountOperationsRequest>): ListServiceAccountOperationsRequest;
};
export declare const ListServiceAccountOperationsResponse: {
    encode(message: ListServiceAccountOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListServiceAccountOperationsResponse;
    fromJSON(object: any): ListServiceAccountOperationsResponse;
    toJSON(message: ListServiceAccountOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListServiceAccountOperationsResponse>): ListServiceAccountOperationsResponse;
};
/** A set of methods for managing ServiceAccount resources. */
export declare const ServiceAccountServiceService: {
    /**
     * Returns the specified ServiceAccount resource.
     *
     * To get the list of available ServiceAccount resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetServiceAccountRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetServiceAccountRequest;
        readonly responseSerialize: (value: ServiceAccount) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ServiceAccount;
    };
    /** Retrieves the list of ServiceAccount resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListServiceAccountsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListServiceAccountsRequest;
        readonly responseSerialize: (value: ListServiceAccountsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListServiceAccountsResponse;
    };
    /** Creates a service account in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateServiceAccountRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateServiceAccountRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified service account. */
    readonly update: {
        readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateServiceAccountRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateServiceAccountRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified service account. */
    readonly delete: {
        readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteServiceAccountRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteServiceAccountRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists access bindings for the specified service account. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the service account. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified service account. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified service account. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.iam.v1.ServiceAccountService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListServiceAccountOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListServiceAccountOperationsRequest;
        readonly responseSerialize: (value: ListServiceAccountOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListServiceAccountOperationsResponse;
    };
};
export interface ServiceAccountServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified ServiceAccount resource.
     *
     * To get the list of available ServiceAccount resources, make a [List] request.
     */
    get: handleUnaryCall<GetServiceAccountRequest, ServiceAccount>;
    /** Retrieves the list of ServiceAccount resources in the specified folder. */
    list: handleUnaryCall<ListServiceAccountsRequest, ListServiceAccountsResponse>;
    /** Creates a service account in the specified folder. */
    create: handleUnaryCall<CreateServiceAccountRequest, Operation>;
    /** Updates the specified service account. */
    update: handleUnaryCall<UpdateServiceAccountRequest, Operation>;
    /** Deletes the specified service account. */
    delete: handleUnaryCall<DeleteServiceAccountRequest, Operation>;
    /** Lists access bindings for the specified service account. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the service account. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified service account. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Lists operations for the specified service account. */
    listOperations: handleUnaryCall<ListServiceAccountOperationsRequest, ListServiceAccountOperationsResponse>;
}
export interface ServiceAccountServiceClient extends Client {
    /**
     * Returns the specified ServiceAccount resource.
     *
     * To get the list of available ServiceAccount resources, make a [List] request.
     */
    get(request: GetServiceAccountRequest, callback: (error: ServiceError | null, response: ServiceAccount) => void): ClientUnaryCall;
    get(request: GetServiceAccountRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ServiceAccount) => void): ClientUnaryCall;
    get(request: GetServiceAccountRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ServiceAccount) => void): ClientUnaryCall;
    /** Retrieves the list of ServiceAccount resources in the specified folder. */
    list(request: ListServiceAccountsRequest, callback: (error: ServiceError | null, response: ListServiceAccountsResponse) => void): ClientUnaryCall;
    list(request: ListServiceAccountsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListServiceAccountsResponse) => void): ClientUnaryCall;
    list(request: ListServiceAccountsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListServiceAccountsResponse) => void): ClientUnaryCall;
    /** Creates a service account in the specified folder. */
    create(request: CreateServiceAccountRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateServiceAccountRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateServiceAccountRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified service account. */
    update(request: UpdateServiceAccountRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateServiceAccountRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateServiceAccountRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified service account. */
    delete(request: DeleteServiceAccountRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteServiceAccountRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteServiceAccountRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists access bindings for the specified service account. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the service account. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified service account. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified service account. */
    listOperations(request: ListServiceAccountOperationsRequest, callback: (error: ServiceError | null, response: ListServiceAccountOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListServiceAccountOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListServiceAccountOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListServiceAccountOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListServiceAccountOperationsResponse) => void): ClientUnaryCall;
}
export declare const ServiceAccountServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ServiceAccountServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
