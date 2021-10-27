/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Disk, DiskPlacementPolicy } from '../../../../yandex/cloud/compute/v1/disk';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetDiskRequest {
    $type: 'yandex.cloud.compute.v1.GetDiskRequest';
    /**
     * ID of the Disk resource to return.
     * To get the disk ID use a [DiskService.List] request.
     */
    diskId: string;
}
export interface ListDisksRequest {
    $type: 'yandex.cloud.compute.v1.ListDisksRequest';
    /**
     * ID of the folder to list disks in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDisksResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDisksResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Disk.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z]([-a-z0-9]{,61}[a-z0-9])?$`.
     */
    filter: string;
}
export interface ListDisksResponse {
    $type: 'yandex.cloud.compute.v1.ListDisksResponse';
    /** List of Disk resources. */
    disks: Disk[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDisksRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListDisksRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateDiskRequest {
    $type: 'yandex.cloud.compute.v1.CreateDiskRequest';
    /**
     * ID of the folder to create a disk in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the disk. */
    name: string;
    /** Description of the disk. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the disk type.
     * To get a list of available disk types use the [yandex.cloud.compute.v1.DiskTypeService.List] request.
     */
    typeId: string;
    /**
     * ID of the availability zone where the disk resides.
     * To get a list of available zones use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * Size of the disk, specified in bytes.
     * If the disk was created from a image, this value should be more than the
     * [yandex.cloud.compute.v1.Image.min_disk_size] value.
     */
    size: number;
    /** ID of the image to create the disk from. */
    imageId: string | undefined;
    /** ID of the snapshot to restore the disk from. */
    snapshotId: string | undefined;
    /** Block size used for disk, specified in bytes. The default is 4096. */
    blockSize: number;
    /** Placement policy configuration. */
    diskPlacementPolicy: DiskPlacementPolicy | undefined;
}
export interface CreateDiskRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateDiskMetadata {
    $type: 'yandex.cloud.compute.v1.CreateDiskMetadata';
    /** ID of the disk that is being created. */
    diskId: string;
}
export interface UpdateDiskRequest {
    $type: 'yandex.cloud.compute.v1.UpdateDiskRequest';
    /**
     * ID of the Disk resource to update.
     * To get the disk ID use a [DiskService.List] request.
     */
    diskId: string;
    /** Field mask that specifies which fields of the Disk resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the disk. */
    name: string;
    /** Description of the disk. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /** Size of the disk, specified in bytes. */
    size: number;
    /** Placement policy configuration. */
    diskPlacementPolicy: DiskPlacementPolicy | undefined;
}
export interface UpdateDiskRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateDiskMetadata {
    $type: 'yandex.cloud.compute.v1.UpdateDiskMetadata';
    /** ID of the Disk resource that is being updated. */
    diskId: string;
}
export interface DeleteDiskRequest {
    $type: 'yandex.cloud.compute.v1.DeleteDiskRequest';
    /**
     * ID of the disk to delete.
     * To get the disk ID use a [DiskService.List] request.
     */
    diskId: string;
}
export interface DeleteDiskMetadata {
    $type: 'yandex.cloud.compute.v1.DeleteDiskMetadata';
    /** ID of the disk that is being deleted. */
    diskId: string;
}
export interface ListDiskOperationsRequest {
    $type: 'yandex.cloud.compute.v1.ListDiskOperationsRequest';
    /** ID of the Disk resource to list operations for. */
    diskId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListDiskOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDiskOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListDiskOperationsResponse {
    $type: 'yandex.cloud.compute.v1.ListDiskOperationsResponse';
    /** List of operations for the specified disk. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDiskOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListDiskOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetDiskRequest: {
    $type: "yandex.cloud.compute.v1.GetDiskRequest";
    encode(message: GetDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDiskRequest;
    fromJSON(object: any): GetDiskRequest;
    toJSON(message: GetDiskRequest): unknown;
    fromPartial(object: DeepPartial<GetDiskRequest>): GetDiskRequest;
};
export declare const ListDisksRequest: {
    $type: "yandex.cloud.compute.v1.ListDisksRequest";
    encode(message: ListDisksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDisksRequest;
    fromJSON(object: any): ListDisksRequest;
    toJSON(message: ListDisksRequest): unknown;
    fromPartial(object: DeepPartial<ListDisksRequest>): ListDisksRequest;
};
export declare const ListDisksResponse: {
    $type: "yandex.cloud.compute.v1.ListDisksResponse";
    encode(message: ListDisksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDisksResponse;
    fromJSON(object: any): ListDisksResponse;
    toJSON(message: ListDisksResponse): unknown;
    fromPartial(object: DeepPartial<ListDisksResponse>): ListDisksResponse;
};
export declare const CreateDiskRequest: {
    $type: "yandex.cloud.compute.v1.CreateDiskRequest";
    encode(message: CreateDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskRequest;
    fromJSON(object: any): CreateDiskRequest;
    toJSON(message: CreateDiskRequest): unknown;
    fromPartial(object: DeepPartial<CreateDiskRequest>): CreateDiskRequest;
};
export declare const CreateDiskRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateDiskRequest.LabelsEntry";
    encode(message: CreateDiskRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskRequest_LabelsEntry;
    fromJSON(object: any): CreateDiskRequest_LabelsEntry;
    toJSON(message: CreateDiskRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateDiskRequest_LabelsEntry>): CreateDiskRequest_LabelsEntry;
};
export declare const CreateDiskMetadata: {
    $type: "yandex.cloud.compute.v1.CreateDiskMetadata";
    encode(message: CreateDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskMetadata;
    fromJSON(object: any): CreateDiskMetadata;
    toJSON(message: CreateDiskMetadata): unknown;
    fromPartial(object: DeepPartial<CreateDiskMetadata>): CreateDiskMetadata;
};
export declare const UpdateDiskRequest: {
    $type: "yandex.cloud.compute.v1.UpdateDiskRequest";
    encode(message: UpdateDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskRequest;
    fromJSON(object: any): UpdateDiskRequest;
    toJSON(message: UpdateDiskRequest): unknown;
    fromPartial(object: DeepPartial<UpdateDiskRequest>): UpdateDiskRequest;
};
export declare const UpdateDiskRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateDiskRequest.LabelsEntry";
    encode(message: UpdateDiskRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskRequest_LabelsEntry;
    fromJSON(object: any): UpdateDiskRequest_LabelsEntry;
    toJSON(message: UpdateDiskRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateDiskRequest_LabelsEntry>): UpdateDiskRequest_LabelsEntry;
};
export declare const UpdateDiskMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateDiskMetadata";
    encode(message: UpdateDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskMetadata;
    fromJSON(object: any): UpdateDiskMetadata;
    toJSON(message: UpdateDiskMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateDiskMetadata>): UpdateDiskMetadata;
};
export declare const DeleteDiskRequest: {
    $type: "yandex.cloud.compute.v1.DeleteDiskRequest";
    encode(message: DeleteDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDiskRequest;
    fromJSON(object: any): DeleteDiskRequest;
    toJSON(message: DeleteDiskRequest): unknown;
    fromPartial(object: DeepPartial<DeleteDiskRequest>): DeleteDiskRequest;
};
export declare const DeleteDiskMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteDiskMetadata";
    encode(message: DeleteDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDiskMetadata;
    fromJSON(object: any): DeleteDiskMetadata;
    toJSON(message: DeleteDiskMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteDiskMetadata>): DeleteDiskMetadata;
};
export declare const ListDiskOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListDiskOperationsRequest";
    encode(message: ListDiskOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskOperationsRequest;
    fromJSON(object: any): ListDiskOperationsRequest;
    toJSON(message: ListDiskOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListDiskOperationsRequest>): ListDiskOperationsRequest;
};
export declare const ListDiskOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListDiskOperationsResponse";
    encode(message: ListDiskOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskOperationsResponse;
    fromJSON(object: any): ListDiskOperationsResponse;
    toJSON(message: ListDiskOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListDiskOperationsResponse>): ListDiskOperationsResponse;
};
/** A set of methods for managing Disk resources. */
export declare const DiskServiceService: {
    /**
     * Returns the specified Disk resource.
     *
     * To get the list of available Disk resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDiskRequest;
        readonly responseSerialize: (value: Disk) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Disk;
    };
    /** Retrieves the list of Disk resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDisksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDisksRequest;
        readonly responseSerialize: (value: ListDisksResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDisksResponse;
    };
    /**
     * Creates a disk in the specified folder.
     *
     * You can create an empty disk or restore it from a snapshot or an image.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified disk. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified disk.
     *
     * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
     * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
     *
     * It is not possible to delete a disk that is attached to an instance.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified disk. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.DiskService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDiskOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDiskOperationsRequest;
        readonly responseSerialize: (value: ListDiskOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDiskOperationsResponse;
    };
};
export interface DiskServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Disk resource.
     *
     * To get the list of available Disk resources, make a [List] request.
     */
    get: handleUnaryCall<GetDiskRequest, Disk>;
    /** Retrieves the list of Disk resources in the specified folder. */
    list: handleUnaryCall<ListDisksRequest, ListDisksResponse>;
    /**
     * Creates a disk in the specified folder.
     *
     * You can create an empty disk or restore it from a snapshot or an image.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateDiskRequest, Operation>;
    /** Updates the specified disk. */
    update: handleUnaryCall<UpdateDiskRequest, Operation>;
    /**
     * Deletes the specified disk.
     *
     * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
     * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
     *
     * It is not possible to delete a disk that is attached to an instance.
     */
    delete: handleUnaryCall<DeleteDiskRequest, Operation>;
    /** Lists operations for the specified disk. */
    listOperations: handleUnaryCall<ListDiskOperationsRequest, ListDiskOperationsResponse>;
}
export interface DiskServiceClient extends Client {
    /**
     * Returns the specified Disk resource.
     *
     * To get the list of available Disk resources, make a [List] request.
     */
    get(request: GetDiskRequest, callback: (error: ServiceError | null, response: Disk) => void): ClientUnaryCall;
    get(request: GetDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Disk) => void): ClientUnaryCall;
    get(request: GetDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Disk) => void): ClientUnaryCall;
    /** Retrieves the list of Disk resources in the specified folder. */
    list(request: ListDisksRequest, callback: (error: ServiceError | null, response: ListDisksResponse) => void): ClientUnaryCall;
    list(request: ListDisksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDisksResponse) => void): ClientUnaryCall;
    list(request: ListDisksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDisksResponse) => void): ClientUnaryCall;
    /**
     * Creates a disk in the specified folder.
     *
     * You can create an empty disk or restore it from a snapshot or an image.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified disk. */
    update(request: UpdateDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified disk.
     *
     * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
     * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
     *
     * It is not possible to delete a disk that is attached to an instance.
     */
    delete(request: DeleteDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified disk. */
    listOperations(request: ListDiskOperationsRequest, callback: (error: ServiceError | null, response: ListDiskOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDiskOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDiskOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDiskOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDiskOperationsResponse) => void): ClientUnaryCall;
}
export declare const DiskServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => DiskServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
