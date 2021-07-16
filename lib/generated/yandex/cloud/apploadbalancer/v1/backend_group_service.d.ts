/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { BackendGroup, HttpBackendGroup, GrpcBackendGroup, HttpBackend, GrpcBackend } from '../../../../yandex/cloud/apploadbalancer/v1/backend_group';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetBackendGroupRequest {
    /**
     * ID of the backend group to return.
     *
     * To get the backend group ID, make a [BackendGroupService.List] request.
     */
    backendGroupId: string;
}
export interface ListBackendGroupsRequest {
    /**
     * ID of the folder to list backend groups in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListBackendGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListBackendGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters backend groups listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [BackendGroup.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-backend-group`.
     */
    filter: string;
}
export interface ListBackendGroupsResponse {
    /** List of backend groups in the specified folder. */
    backendGroups: BackendGroup[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListBackendGroupsRequest.page_size], use `next_page_token` as the value
     * for the [ListBackendGroupsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteBackendGroupRequest {
    /**
     * ID of the backend group to delete.
     *
     * To get the backend group ID, make a [BackendGroupService.List] request.
     */
    backendGroupId: string;
}
export interface DeleteBackendGroupMetadata {
    /** ID of the backend group that is being deleted. */
    backendGroupId: string;
}
export interface UpdateBackendGroupRequest {
    /**
     * ID of the backend group to update.
     *
     * To get the backend group ID, make a [BackendGroupService.List] request.
     */
    backendGroupId: string;
    /** Field mask that specifies which attributes of the backend group should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name for the backend group.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the backend group. */
    description: string;
    /**
     * Backend group labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [BackendGroupService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
    /** New list of HTTP backends that the backend group will consist of. */
    http: HttpBackendGroup | undefined;
    /** New list of gRPC backends that the backend group will consist of. */
    grpc: GrpcBackendGroup | undefined;
}
export interface UpdateBackendGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateBackendGroupMetadata {
    /** ID of the backend group that is being updated. */
    backendGroupId: string;
}
export interface CreateBackendGroupRequest {
    /**
     * ID of the folder to create a backend group in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the backend group.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the backend group. */
    description: string;
    /**
     * Backend group labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /** List of HTTP backends that the backend group will consist of. */
    http: HttpBackendGroup | undefined;
    /** List of gRPC backends that the backend group consists of. */
    grpc: GrpcBackendGroup | undefined;
}
export interface CreateBackendGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateBackendGroupMetadata {
    /** ID of the backend group that is being created. */
    backendGroupId: string;
}
export interface AddBackendRequest {
    /**
     * ID of the backend group to add a backend to.
     *
     * To get the backend group ID, make a [BackendGroupService.List] request.
     */
    backendGroupId: string;
    /** HTTP backend to add to the backend group. */
    http: HttpBackend | undefined;
    /** gRPC backend to add to the backend group. */
    grpc: GrpcBackend | undefined;
}
export interface AddBackendMetadata {
    /** ID of the backend group that the backend is being added to. */
    backendGroupId: string;
    /** Name of the backend that is being added to the backend group. */
    backendName: string;
}
export interface UpdateBackendRequest {
    /** ID of the backend group to update the backend in. */
    backendGroupId: string;
    /** Field mask that specifies which attributes of the backend should be updated. */
    updateMask: FieldMask | undefined;
    /** New settings for the HTTP backend. */
    http: HttpBackend | undefined;
    /** New settings for the gRPC backend. */
    grpc: GrpcBackend | undefined;
}
export interface UpdateBackendMetadata {
    /** ID of the backend group that the backend is being updated it. */
    backendGroupId: string;
    /** Name of the backend that is being updated. */
    backendName: string;
}
export interface RemoveBackendRequest {
    /**
     * ID of the backend group to remove a backend from.
     *
     * To get the backend group ID, make a [BackendGroupService.List] request.
     */
    backendGroupId: string;
    /**
     * Name of the backend to remove.
     *
     * To get the backend name, make a [BackendGroupService.Get] request.
     */
    backendName: string;
}
export interface RemoveBackendMetadata {
    /** ID of the backend group that the backend is being removed from. */
    backendGroupId: string;
    /** Name of the backend that is being removed. */
    backendName: string;
}
export interface ListBackendGroupOperationsRequest {
    /**
     * ID of the backend group to get operations for.
     *
     * To get the backend group ID, use a [BackendGroupService.List] request.
     */
    backendGroupId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListBackendGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListBackendGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListBackendGroupOperationsResponse {
    /** List of operations for the specified backend group. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListBackendGroupOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListBackendGroupOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetBackendGroupRequest: {
    encode(message: GetBackendGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBackendGroupRequest;
    fromJSON(object: any): GetBackendGroupRequest;
    toJSON(message: GetBackendGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetBackendGroupRequest>): GetBackendGroupRequest;
};
export declare const ListBackendGroupsRequest: {
    encode(message: ListBackendGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackendGroupsRequest;
    fromJSON(object: any): ListBackendGroupsRequest;
    toJSON(message: ListBackendGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListBackendGroupsRequest>): ListBackendGroupsRequest;
};
export declare const ListBackendGroupsResponse: {
    encode(message: ListBackendGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackendGroupsResponse;
    fromJSON(object: any): ListBackendGroupsResponse;
    toJSON(message: ListBackendGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListBackendGroupsResponse>): ListBackendGroupsResponse;
};
export declare const DeleteBackendGroupRequest: {
    encode(message: DeleteBackendGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackendGroupRequest;
    fromJSON(object: any): DeleteBackendGroupRequest;
    toJSON(message: DeleteBackendGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteBackendGroupRequest>): DeleteBackendGroupRequest;
};
export declare const DeleteBackendGroupMetadata: {
    encode(message: DeleteBackendGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackendGroupMetadata;
    fromJSON(object: any): DeleteBackendGroupMetadata;
    toJSON(message: DeleteBackendGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteBackendGroupMetadata>): DeleteBackendGroupMetadata;
};
export declare const UpdateBackendGroupRequest: {
    encode(message: UpdateBackendGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBackendGroupRequest;
    fromJSON(object: any): UpdateBackendGroupRequest;
    toJSON(message: UpdateBackendGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateBackendGroupRequest>): UpdateBackendGroupRequest;
};
export declare const UpdateBackendGroupRequest_LabelsEntry: {
    encode(message: UpdateBackendGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBackendGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateBackendGroupRequest_LabelsEntry;
    toJSON(message: UpdateBackendGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateBackendGroupRequest_LabelsEntry>): UpdateBackendGroupRequest_LabelsEntry;
};
export declare const UpdateBackendGroupMetadata: {
    encode(message: UpdateBackendGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBackendGroupMetadata;
    fromJSON(object: any): UpdateBackendGroupMetadata;
    toJSON(message: UpdateBackendGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateBackendGroupMetadata>): UpdateBackendGroupMetadata;
};
export declare const CreateBackendGroupRequest: {
    encode(message: CreateBackendGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBackendGroupRequest;
    fromJSON(object: any): CreateBackendGroupRequest;
    toJSON(message: CreateBackendGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateBackendGroupRequest>): CreateBackendGroupRequest;
};
export declare const CreateBackendGroupRequest_LabelsEntry: {
    encode(message: CreateBackendGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBackendGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateBackendGroupRequest_LabelsEntry;
    toJSON(message: CreateBackendGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateBackendGroupRequest_LabelsEntry>): CreateBackendGroupRequest_LabelsEntry;
};
export declare const CreateBackendGroupMetadata: {
    encode(message: CreateBackendGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBackendGroupMetadata;
    fromJSON(object: any): CreateBackendGroupMetadata;
    toJSON(message: CreateBackendGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateBackendGroupMetadata>): CreateBackendGroupMetadata;
};
export declare const AddBackendRequest: {
    encode(message: AddBackendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddBackendRequest;
    fromJSON(object: any): AddBackendRequest;
    toJSON(message: AddBackendRequest): unknown;
    fromPartial(object: DeepPartial<AddBackendRequest>): AddBackendRequest;
};
export declare const AddBackendMetadata: {
    encode(message: AddBackendMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddBackendMetadata;
    fromJSON(object: any): AddBackendMetadata;
    toJSON(message: AddBackendMetadata): unknown;
    fromPartial(object: DeepPartial<AddBackendMetadata>): AddBackendMetadata;
};
export declare const UpdateBackendRequest: {
    encode(message: UpdateBackendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBackendRequest;
    fromJSON(object: any): UpdateBackendRequest;
    toJSON(message: UpdateBackendRequest): unknown;
    fromPartial(object: DeepPartial<UpdateBackendRequest>): UpdateBackendRequest;
};
export declare const UpdateBackendMetadata: {
    encode(message: UpdateBackendMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateBackendMetadata;
    fromJSON(object: any): UpdateBackendMetadata;
    toJSON(message: UpdateBackendMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateBackendMetadata>): UpdateBackendMetadata;
};
export declare const RemoveBackendRequest: {
    encode(message: RemoveBackendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveBackendRequest;
    fromJSON(object: any): RemoveBackendRequest;
    toJSON(message: RemoveBackendRequest): unknown;
    fromPartial(object: DeepPartial<RemoveBackendRequest>): RemoveBackendRequest;
};
export declare const RemoveBackendMetadata: {
    encode(message: RemoveBackendMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveBackendMetadata;
    fromJSON(object: any): RemoveBackendMetadata;
    toJSON(message: RemoveBackendMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveBackendMetadata>): RemoveBackendMetadata;
};
export declare const ListBackendGroupOperationsRequest: {
    encode(message: ListBackendGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackendGroupOperationsRequest;
    fromJSON(object: any): ListBackendGroupOperationsRequest;
    toJSON(message: ListBackendGroupOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListBackendGroupOperationsRequest>): ListBackendGroupOperationsRequest;
};
export declare const ListBackendGroupOperationsResponse: {
    encode(message: ListBackendGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackendGroupOperationsResponse;
    fromJSON(object: any): ListBackendGroupOperationsResponse;
    toJSON(message: ListBackendGroupOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListBackendGroupOperationsResponse>): ListBackendGroupOperationsResponse;
};
/** A set of methods for managing backend groups. */
export declare const BackendGroupServiceService: {
    /**
     * Returns the specified backend group.
     *
     * To get the list of all available backend groups, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBackendGroupRequest;
        readonly responseSerialize: (value: BackendGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BackendGroup;
    };
    /** Lists backend groups in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBackendGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBackendGroupsRequest;
        readonly responseSerialize: (value: ListBackendGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBackendGroupsResponse;
    };
    /** Creates a backend group in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateBackendGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified backend group. */
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateBackendGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified backend group. */
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBackendGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Adds backends to the specified backend group. */
    readonly addBackend: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/AddBackend";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddBackendRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddBackendRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Removes backends from the specified backend group. */
    readonly removeBackend: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/RemoveBackend";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveBackendRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveBackendRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified backend. */
    readonly updateBackend: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/UpdateBackend";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateBackendRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateBackendRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified backend group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBackendGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBackendGroupOperationsRequest;
        readonly responseSerialize: (value: ListBackendGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBackendGroupOperationsResponse;
    };
};
export interface BackendGroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified backend group.
     *
     * To get the list of all available backend groups, make a [List] request.
     */
    get: handleUnaryCall<GetBackendGroupRequest, BackendGroup>;
    /** Lists backend groups in the specified folder. */
    list: handleUnaryCall<ListBackendGroupsRequest, ListBackendGroupsResponse>;
    /** Creates a backend group in the specified folder. */
    create: handleUnaryCall<CreateBackendGroupRequest, Operation>;
    /** Updates the specified backend group. */
    update: handleUnaryCall<UpdateBackendGroupRequest, Operation>;
    /** Deletes the specified backend group. */
    delete: handleUnaryCall<DeleteBackendGroupRequest, Operation>;
    /** Adds backends to the specified backend group. */
    addBackend: handleUnaryCall<AddBackendRequest, Operation>;
    /** Removes backends from the specified backend group. */
    removeBackend: handleUnaryCall<RemoveBackendRequest, Operation>;
    /** Updates the specified backend. */
    updateBackend: handleUnaryCall<UpdateBackendRequest, Operation>;
    /** Lists operations for the specified backend group. */
    listOperations: handleUnaryCall<ListBackendGroupOperationsRequest, ListBackendGroupOperationsResponse>;
}
export interface BackendGroupServiceClient extends Client {
    /**
     * Returns the specified backend group.
     *
     * To get the list of all available backend groups, make a [List] request.
     */
    get(request: GetBackendGroupRequest, callback: (error: ServiceError | null, response: BackendGroup) => void): ClientUnaryCall;
    get(request: GetBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BackendGroup) => void): ClientUnaryCall;
    get(request: GetBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BackendGroup) => void): ClientUnaryCall;
    /** Lists backend groups in the specified folder. */
    list(request: ListBackendGroupsRequest, callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void): ClientUnaryCall;
    list(request: ListBackendGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void): ClientUnaryCall;
    list(request: ListBackendGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void): ClientUnaryCall;
    /** Creates a backend group in the specified folder. */
    create(request: CreateBackendGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified backend group. */
    update(request: UpdateBackendGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified backend group. */
    delete(request: DeleteBackendGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Adds backends to the specified backend group. */
    addBackend(request: AddBackendRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addBackend(request: AddBackendRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addBackend(request: AddBackendRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Removes backends from the specified backend group. */
    removeBackend(request: RemoveBackendRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeBackend(request: RemoveBackendRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeBackend(request: RemoveBackendRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified backend. */
    updateBackend(request: UpdateBackendRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateBackend(request: UpdateBackendRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateBackend(request: UpdateBackendRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified backend group. */
    listOperations(request: ListBackendGroupOperationsRequest, callback: (error: ServiceError | null, response: ListBackendGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListBackendGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBackendGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListBackendGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBackendGroupOperationsResponse) => void): ClientUnaryCall;
}
export declare const BackendGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => BackendGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
