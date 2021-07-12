/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Snapshot } from '../../../../yandex/cloud/compute/v1/snapshot';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetSnapshotRequest {
    /**
     * ID of the Snapshot resource to return.
     * To get the snapshot ID, use a [SnapshotService.List] request.
     */
    snapshotId: string;
}
export interface ListSnapshotsRequest {
    /**
     * ID of the folder to list snapshots in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListSnapshotsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSnapshotsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Snapshot.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z]([-a-z0-9]{,61}[a-z0-9])?$`.
     */
    filter: string;
}
export interface ListSnapshotsResponse {
    /** List of snapshots. */
    snapshots: Snapshot[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSnapshotsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListSnapshotsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateSnapshotRequest {
    /**
     * ID of the folder to create a snapshot in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * ID of the disk to create the snapshot from.
     * To get the disk ID use a [yandex.cloud.compute.v1.DiskService.List] request.
     */
    diskId: string;
    /** Name of the snapshot. */
    name: string;
    /** Description of the snapshot. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface CreateSnapshotRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateSnapshotMetadata {
    /** ID of the snapshot that is being created. */
    snapshotId: string;
    /** ID of the source disk used to create this snapshot. */
    diskId: string;
}
export interface UpdateSnapshotRequest {
    /**
     * ID of the Snapshot resource to update.
     * To get the snapshot ID use a [SnapshotService.List] request.
     */
    snapshotId: string;
    /** Field mask that specifies which fields of the Snapshot resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the snapshot. */
    name: string;
    /** Description of the snapshot. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateSnapshotRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateSnapshotMetadata {
    /** ID of the Snapshot resource that is being updated. */
    snapshotId: string;
}
export interface DeleteSnapshotRequest {
    /**
     * ID of the snapshot to delete.
     * To get the snapshot ID, use a [SnapshotService.List] request.
     */
    snapshotId: string;
}
export interface DeleteSnapshotMetadata {
    /** ID of the snapshot that is being deleted. */
    snapshotId: string;
}
export interface ListSnapshotOperationsRequest {
    /** ID of the Snapshot resource to list operations for. */
    snapshotId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListSnapshotOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSnapshotOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListSnapshotOperationsResponse {
    /** List of operations for the specified snapshot. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSnapshotOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListSnapshotOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetSnapshotRequest: {
    encode(message: GetSnapshotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSnapshotRequest;
    fromJSON(object: any): GetSnapshotRequest;
    toJSON(message: GetSnapshotRequest): unknown;
    fromPartial(object: DeepPartial<GetSnapshotRequest>): GetSnapshotRequest;
};
export declare const ListSnapshotsRequest: {
    encode(message: ListSnapshotsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotsRequest;
    fromJSON(object: any): ListSnapshotsRequest;
    toJSON(message: ListSnapshotsRequest): unknown;
    fromPartial(object: DeepPartial<ListSnapshotsRequest>): ListSnapshotsRequest;
};
export declare const ListSnapshotsResponse: {
    encode(message: ListSnapshotsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotsResponse;
    fromJSON(object: any): ListSnapshotsResponse;
    toJSON(message: ListSnapshotsResponse): unknown;
    fromPartial(object: DeepPartial<ListSnapshotsResponse>): ListSnapshotsResponse;
};
export declare const CreateSnapshotRequest: {
    encode(message: CreateSnapshotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSnapshotRequest;
    fromJSON(object: any): CreateSnapshotRequest;
    toJSON(message: CreateSnapshotRequest): unknown;
    fromPartial(object: DeepPartial<CreateSnapshotRequest>): CreateSnapshotRequest;
};
export declare const CreateSnapshotRequest_LabelsEntry: {
    encode(message: CreateSnapshotRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSnapshotRequest_LabelsEntry;
    fromJSON(object: any): CreateSnapshotRequest_LabelsEntry;
    toJSON(message: CreateSnapshotRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateSnapshotRequest_LabelsEntry>): CreateSnapshotRequest_LabelsEntry;
};
export declare const CreateSnapshotMetadata: {
    encode(message: CreateSnapshotMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSnapshotMetadata;
    fromJSON(object: any): CreateSnapshotMetadata;
    toJSON(message: CreateSnapshotMetadata): unknown;
    fromPartial(object: DeepPartial<CreateSnapshotMetadata>): CreateSnapshotMetadata;
};
export declare const UpdateSnapshotRequest: {
    encode(message: UpdateSnapshotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSnapshotRequest;
    fromJSON(object: any): UpdateSnapshotRequest;
    toJSON(message: UpdateSnapshotRequest): unknown;
    fromPartial(object: DeepPartial<UpdateSnapshotRequest>): UpdateSnapshotRequest;
};
export declare const UpdateSnapshotRequest_LabelsEntry: {
    encode(message: UpdateSnapshotRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSnapshotRequest_LabelsEntry;
    fromJSON(object: any): UpdateSnapshotRequest_LabelsEntry;
    toJSON(message: UpdateSnapshotRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateSnapshotRequest_LabelsEntry>): UpdateSnapshotRequest_LabelsEntry;
};
export declare const UpdateSnapshotMetadata: {
    encode(message: UpdateSnapshotMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSnapshotMetadata;
    fromJSON(object: any): UpdateSnapshotMetadata;
    toJSON(message: UpdateSnapshotMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateSnapshotMetadata>): UpdateSnapshotMetadata;
};
export declare const DeleteSnapshotRequest: {
    encode(message: DeleteSnapshotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSnapshotRequest;
    fromJSON(object: any): DeleteSnapshotRequest;
    toJSON(message: DeleteSnapshotRequest): unknown;
    fromPartial(object: DeepPartial<DeleteSnapshotRequest>): DeleteSnapshotRequest;
};
export declare const DeleteSnapshotMetadata: {
    encode(message: DeleteSnapshotMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSnapshotMetadata;
    fromJSON(object: any): DeleteSnapshotMetadata;
    toJSON(message: DeleteSnapshotMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteSnapshotMetadata>): DeleteSnapshotMetadata;
};
export declare const ListSnapshotOperationsRequest: {
    encode(message: ListSnapshotOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotOperationsRequest;
    fromJSON(object: any): ListSnapshotOperationsRequest;
    toJSON(message: ListSnapshotOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListSnapshotOperationsRequest>): ListSnapshotOperationsRequest;
};
export declare const ListSnapshotOperationsResponse: {
    encode(message: ListSnapshotOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSnapshotOperationsResponse;
    fromJSON(object: any): ListSnapshotOperationsResponse;
    toJSON(message: ListSnapshotOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListSnapshotOperationsResponse>): ListSnapshotOperationsResponse;
};
/** A set of methods for managing Snapshot resources. */
export declare const SnapshotServiceService: {
    /**
     * Returns the specified Snapshot resource.
     *
     * To get the list of available Snapshot resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSnapshotRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSnapshotRequest;
        readonly responseSerialize: (value: Snapshot) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Snapshot;
    };
    /** Retrieves the list of Snapshot resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSnapshotsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSnapshotsRequest;
        readonly responseSerialize: (value: ListSnapshotsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSnapshotsResponse;
    };
    /** Creates a snapshot of the specified disk. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSnapshotRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSnapshotRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified snapshot.
     *
     * Values of omitted parameters are not changed.
     */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSnapshotRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSnapshotRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified snapshot.
     *
     * Deleting a snapshot removes its data permanently and is irreversible.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSnapshotRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSnapshotRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified snapshot. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.SnapshotService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSnapshotOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSnapshotOperationsRequest;
        readonly responseSerialize: (value: ListSnapshotOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSnapshotOperationsResponse;
    };
};
export interface SnapshotServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Snapshot resource.
     *
     * To get the list of available Snapshot resources, make a [List] request.
     */
    get: handleUnaryCall<GetSnapshotRequest, Snapshot>;
    /** Retrieves the list of Snapshot resources in the specified folder. */
    list: handleUnaryCall<ListSnapshotsRequest, ListSnapshotsResponse>;
    /** Creates a snapshot of the specified disk. */
    create: handleUnaryCall<CreateSnapshotRequest, Operation>;
    /**
     * Updates the specified snapshot.
     *
     * Values of omitted parameters are not changed.
     */
    update: handleUnaryCall<UpdateSnapshotRequest, Operation>;
    /**
     * Deletes the specified snapshot.
     *
     * Deleting a snapshot removes its data permanently and is irreversible.
     */
    delete: handleUnaryCall<DeleteSnapshotRequest, Operation>;
    /** Lists operations for the specified snapshot. */
    listOperations: handleUnaryCall<ListSnapshotOperationsRequest, ListSnapshotOperationsResponse>;
}
export interface SnapshotServiceClient extends Client {
    /**
     * Returns the specified Snapshot resource.
     *
     * To get the list of available Snapshot resources, make a [List] request.
     */
    get(request: GetSnapshotRequest, callback: (error: ServiceError | null, response: Snapshot) => void): ClientUnaryCall;
    get(request: GetSnapshotRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Snapshot) => void): ClientUnaryCall;
    get(request: GetSnapshotRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Snapshot) => void): ClientUnaryCall;
    /** Retrieves the list of Snapshot resources in the specified folder. */
    list(request: ListSnapshotsRequest, callback: (error: ServiceError | null, response: ListSnapshotsResponse) => void): ClientUnaryCall;
    list(request: ListSnapshotsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSnapshotsResponse) => void): ClientUnaryCall;
    list(request: ListSnapshotsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSnapshotsResponse) => void): ClientUnaryCall;
    /** Creates a snapshot of the specified disk. */
    create(request: CreateSnapshotRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSnapshotRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateSnapshotRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified snapshot.
     *
     * Values of omitted parameters are not changed.
     */
    update(request: UpdateSnapshotRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSnapshotRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateSnapshotRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified snapshot.
     *
     * Deleting a snapshot removes its data permanently and is irreversible.
     */
    delete(request: DeleteSnapshotRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSnapshotRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteSnapshotRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified snapshot. */
    listOperations(request: ListSnapshotOperationsRequest, callback: (error: ServiceError | null, response: ListSnapshotOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSnapshotOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSnapshotOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListSnapshotOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSnapshotOperationsResponse) => void): ClientUnaryCall;
}
export declare const SnapshotServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => SnapshotServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
