/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { BackendGroup, HttpBackendGroup, GrpcBackendGroup, HttpBackend, GrpcBackend } from '../../../../yandex/cloud/apploadbalancer/v1/backend_group';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetBackendGroupRequest {
    backendGroupId: string;
}
export interface ListBackendGroupsRequest {
    folderId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}
export interface ListBackendGroupsResponse {
    backendGroups: BackendGroup[];
    nextPageToken: string;
}
export interface DeleteBackendGroupRequest {
    backendGroupId: string;
}
export interface DeleteBackendGroupMetadata {
    backendGroupId: string;
}
export interface UpdateBackendGroupRequest {
    backendGroupId: string;
    updateMask: FieldMask | undefined;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    http: HttpBackendGroup | undefined;
    grpc: GrpcBackendGroup | undefined;
}
export interface UpdateBackendGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateBackendGroupMetadata {
    backendGroupId: string;
}
export interface CreateBackendGroupRequest {
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    http: HttpBackendGroup | undefined;
    grpc: GrpcBackendGroup | undefined;
}
export interface CreateBackendGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateBackendGroupMetadata {
    backendGroupId: string;
}
export interface AddBackendRequest {
    backendGroupId: string;
    http: HttpBackend | undefined;
    grpc: GrpcBackend | undefined;
}
export interface AddBackendMetadata {
    backendGroupId: string;
    backendName: string;
}
export interface UpdateBackendRequest {
    backendGroupId: string;
    updateMask: FieldMask | undefined;
    http: HttpBackend | undefined;
    grpc: GrpcBackend | undefined;
}
export interface UpdateBackendMetadata {
    backendGroupId: string;
    backendName: string;
}
export interface RemoveBackendRequest {
    backendGroupId: string;
    backendName: string;
}
export interface RemoveBackendMetadata {
    backendGroupId: string;
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
    /** List of operations for the specified target group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListBackendGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListBackendGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
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
export declare const BackendGroupServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBackendGroupRequest;
        readonly responseSerialize: (value: BackendGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BackendGroup;
    };
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBackendGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBackendGroupsRequest;
        readonly responseSerialize: (value: ListBackendGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBackendGroupsResponse;
    };
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateBackendGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateBackendGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBackendGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBackendGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** AddBackend/RemoveBackend technically do the same, but have different semantics. */
    readonly addBackend: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/AddBackend";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddBackendRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddBackendRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly removeBackend: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/RemoveBackend";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveBackendRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveBackendRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
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
    get: handleUnaryCall<GetBackendGroupRequest, BackendGroup>;
    list: handleUnaryCall<ListBackendGroupsRequest, ListBackendGroupsResponse>;
    create: handleUnaryCall<CreateBackendGroupRequest, Operation>;
    update: handleUnaryCall<UpdateBackendGroupRequest, Operation>;
    delete: handleUnaryCall<DeleteBackendGroupRequest, Operation>;
    /** AddBackend/RemoveBackend technically do the same, but have different semantics. */
    addBackend: handleUnaryCall<AddBackendRequest, Operation>;
    removeBackend: handleUnaryCall<RemoveBackendRequest, Operation>;
    updateBackend: handleUnaryCall<UpdateBackendRequest, Operation>;
    /** Lists operations for the specified backend group. */
    listOperations: handleUnaryCall<ListBackendGroupOperationsRequest, ListBackendGroupOperationsResponse>;
}
export interface BackendGroupServiceClient extends Client {
    get(request: GetBackendGroupRequest, callback: (error: ServiceError | null, response: BackendGroup) => void): ClientUnaryCall;
    get(request: GetBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BackendGroup) => void): ClientUnaryCall;
    get(request: GetBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BackendGroup) => void): ClientUnaryCall;
    list(request: ListBackendGroupsRequest, callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void): ClientUnaryCall;
    list(request: ListBackendGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void): ClientUnaryCall;
    list(request: ListBackendGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBackendGroupsResponse) => void): ClientUnaryCall;
    create(request: CreateBackendGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateBackendGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackendGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackendGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackendGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** AddBackend/RemoveBackend technically do the same, but have different semantics. */
    addBackend(request: AddBackendRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addBackend(request: AddBackendRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addBackend(request: AddBackendRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeBackend(request: RemoveBackendRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeBackend(request: RemoveBackendRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeBackend(request: RemoveBackendRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
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
