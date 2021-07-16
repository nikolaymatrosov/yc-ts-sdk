/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Disk } from '../../../../yandex/cloud/compute/v1/disk';
import { DiskPlacementGroup, DiskSpreadPlacementStrategy } from '../../../../yandex/cloud/compute/v1/disk_placement_group';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetDiskPlacementGroupRequest {
    /**
     * ID of the placement group to return.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
}
export interface ListDiskPlacementGroupsRequest {
    /**
     * ID of the folder to list placement groups in.
     * To get the folder ID, use [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDiskPlacementGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListDiskPlacementGroupsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [DiskPlacementGroup.name] field.
     */
    filter: string;
}
export interface ListDiskPlacementGroupsResponse {
    /** Lists placement groups for the specified folder. */
    diskPlacementGroups: DiskPlacementGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDiskPlacementGroupsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListDiskPlacementGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateDiskPlacementGroupRequest {
    /**
     * ID of the folder to create a placement group in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the placement group. */
    name: string;
    /** Description of the placement group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the availability zone where the placement group resides.
     * To get a list of available zones use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /** Distribute disks over distinct failure domains. */
    spreadPlacementStrategy: DiskSpreadPlacementStrategy | undefined;
}
export interface CreateDiskPlacementGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateDiskPlacementGroupMetadata {
    /** ID of the placement group that is being created. */
    diskPlacementGroupId: string;
}
export interface UpdateDiskPlacementGroupRequest {
    /**
     * ID of the placement group to update.
     * To get the placement group ID, use an [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
    /** Field mask that specifies which fields of the DiskPlacementGroup resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the placement group. */
    name: string;
    /** Description of the placement group. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * The existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateDiskPlacementGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateDiskPlacementGroupMetadata {
    /** ID of the placement group that is being updated. */
    diskPlacementGroupId: string;
}
export interface DeleteDiskPlacementGroupRequest {
    /**
     * ID of the placement group to delete.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
}
export interface DeleteDiskPlacementGroupMetadata {
    /** ID of the placement group that is being deleted. */
    diskPlacementGroupId: string;
}
export interface ListDiskPlacementGroupDisksRequest {
    /**
     * ID of the placement group to list disks for.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDiskPlacementGroupDisksResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListDiskPlacementGroupDisksResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListDiskPlacementGroupDisksResponse {
    /** Lists disks for the specified placement group. */
    disks: Disk[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListDiskPlacementGroupDisksRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListDiskPlacementGroupDisksRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListDiskPlacementGroupOperationsRequest {
    /**
     * ID of the placement group to list operations for.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListDiskPlacementGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDiskPlacementGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListDiskPlacementGroupOperationsResponse {
    /** List of operations for the specified placement group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDiskPlacementGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListDiskPlacementGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetDiskPlacementGroupRequest: {
    encode(message: GetDiskPlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDiskPlacementGroupRequest;
    fromJSON(object: any): GetDiskPlacementGroupRequest;
    toJSON(message: GetDiskPlacementGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetDiskPlacementGroupRequest>): GetDiskPlacementGroupRequest;
};
export declare const ListDiskPlacementGroupsRequest: {
    encode(message: ListDiskPlacementGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupsRequest;
    fromJSON(object: any): ListDiskPlacementGroupsRequest;
    toJSON(message: ListDiskPlacementGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListDiskPlacementGroupsRequest>): ListDiskPlacementGroupsRequest;
};
export declare const ListDiskPlacementGroupsResponse: {
    encode(message: ListDiskPlacementGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupsResponse;
    fromJSON(object: any): ListDiskPlacementGroupsResponse;
    toJSON(message: ListDiskPlacementGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListDiskPlacementGroupsResponse>): ListDiskPlacementGroupsResponse;
};
export declare const CreateDiskPlacementGroupRequest: {
    encode(message: CreateDiskPlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskPlacementGroupRequest;
    fromJSON(object: any): CreateDiskPlacementGroupRequest;
    toJSON(message: CreateDiskPlacementGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateDiskPlacementGroupRequest>): CreateDiskPlacementGroupRequest;
};
export declare const CreateDiskPlacementGroupRequest_LabelsEntry: {
    encode(message: CreateDiskPlacementGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskPlacementGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateDiskPlacementGroupRequest_LabelsEntry;
    toJSON(message: CreateDiskPlacementGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateDiskPlacementGroupRequest_LabelsEntry>): CreateDiskPlacementGroupRequest_LabelsEntry;
};
export declare const CreateDiskPlacementGroupMetadata: {
    encode(message: CreateDiskPlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDiskPlacementGroupMetadata;
    fromJSON(object: any): CreateDiskPlacementGroupMetadata;
    toJSON(message: CreateDiskPlacementGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateDiskPlacementGroupMetadata>): CreateDiskPlacementGroupMetadata;
};
export declare const UpdateDiskPlacementGroupRequest: {
    encode(message: UpdateDiskPlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskPlacementGroupRequest;
    fromJSON(object: any): UpdateDiskPlacementGroupRequest;
    toJSON(message: UpdateDiskPlacementGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateDiskPlacementGroupRequest>): UpdateDiskPlacementGroupRequest;
};
export declare const UpdateDiskPlacementGroupRequest_LabelsEntry: {
    encode(message: UpdateDiskPlacementGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskPlacementGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateDiskPlacementGroupRequest_LabelsEntry;
    toJSON(message: UpdateDiskPlacementGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateDiskPlacementGroupRequest_LabelsEntry>): UpdateDiskPlacementGroupRequest_LabelsEntry;
};
export declare const UpdateDiskPlacementGroupMetadata: {
    encode(message: UpdateDiskPlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDiskPlacementGroupMetadata;
    fromJSON(object: any): UpdateDiskPlacementGroupMetadata;
    toJSON(message: UpdateDiskPlacementGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateDiskPlacementGroupMetadata>): UpdateDiskPlacementGroupMetadata;
};
export declare const DeleteDiskPlacementGroupRequest: {
    encode(message: DeleteDiskPlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDiskPlacementGroupRequest;
    fromJSON(object: any): DeleteDiskPlacementGroupRequest;
    toJSON(message: DeleteDiskPlacementGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteDiskPlacementGroupRequest>): DeleteDiskPlacementGroupRequest;
};
export declare const DeleteDiskPlacementGroupMetadata: {
    encode(message: DeleteDiskPlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDiskPlacementGroupMetadata;
    fromJSON(object: any): DeleteDiskPlacementGroupMetadata;
    toJSON(message: DeleteDiskPlacementGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteDiskPlacementGroupMetadata>): DeleteDiskPlacementGroupMetadata;
};
export declare const ListDiskPlacementGroupDisksRequest: {
    encode(message: ListDiskPlacementGroupDisksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupDisksRequest;
    fromJSON(object: any): ListDiskPlacementGroupDisksRequest;
    toJSON(message: ListDiskPlacementGroupDisksRequest): unknown;
    fromPartial(object: DeepPartial<ListDiskPlacementGroupDisksRequest>): ListDiskPlacementGroupDisksRequest;
};
export declare const ListDiskPlacementGroupDisksResponse: {
    encode(message: ListDiskPlacementGroupDisksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupDisksResponse;
    fromJSON(object: any): ListDiskPlacementGroupDisksResponse;
    toJSON(message: ListDiskPlacementGroupDisksResponse): unknown;
    fromPartial(object: DeepPartial<ListDiskPlacementGroupDisksResponse>): ListDiskPlacementGroupDisksResponse;
};
export declare const ListDiskPlacementGroupOperationsRequest: {
    encode(message: ListDiskPlacementGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupOperationsRequest;
    fromJSON(object: any): ListDiskPlacementGroupOperationsRequest;
    toJSON(message: ListDiskPlacementGroupOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListDiskPlacementGroupOperationsRequest>): ListDiskPlacementGroupOperationsRequest;
};
export declare const ListDiskPlacementGroupOperationsResponse: {
    encode(message: ListDiskPlacementGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDiskPlacementGroupOperationsResponse;
    fromJSON(object: any): ListDiskPlacementGroupOperationsResponse;
    toJSON(message: ListDiskPlacementGroupOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListDiskPlacementGroupOperationsResponse>): ListDiskPlacementGroupOperationsResponse;
};
/** A set of methods for managing DiskPlacementGroup resources. */
export declare const DiskPlacementGroupServiceService: {
    /** Returns the specified placement group. */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDiskPlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDiskPlacementGroupRequest;
        readonly responseSerialize: (value: DiskPlacementGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DiskPlacementGroup;
    };
    /** Retrieves the list of placement groups in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDiskPlacementGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDiskPlacementGroupsRequest;
        readonly responseSerialize: (value: ListDiskPlacementGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDiskPlacementGroupsResponse;
    };
    /** Creates a placement group in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDiskPlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDiskPlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified placement group. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDiskPlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDiskPlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified placement group. */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDiskPlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDiskPlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists disks for the specified placement group. */
    readonly listDisks: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListDisks";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDiskPlacementGroupDisksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDiskPlacementGroupDisksRequest;
        readonly responseSerialize: (value: ListDiskPlacementGroupDisksResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDiskPlacementGroupDisksResponse;
    };
    /** Lists operations for the specified placement group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDiskPlacementGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDiskPlacementGroupOperationsRequest;
        readonly responseSerialize: (value: ListDiskPlacementGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDiskPlacementGroupOperationsResponse;
    };
};
export interface DiskPlacementGroupServiceServer extends UntypedServiceImplementation {
    /** Returns the specified placement group. */
    get: handleUnaryCall<GetDiskPlacementGroupRequest, DiskPlacementGroup>;
    /** Retrieves the list of placement groups in the specified folder. */
    list: handleUnaryCall<ListDiskPlacementGroupsRequest, ListDiskPlacementGroupsResponse>;
    /** Creates a placement group in the specified folder. */
    create: handleUnaryCall<CreateDiskPlacementGroupRequest, Operation>;
    /** Updates the specified placement group. */
    update: handleUnaryCall<UpdateDiskPlacementGroupRequest, Operation>;
    /** Deletes the specified placement group. */
    delete: handleUnaryCall<DeleteDiskPlacementGroupRequest, Operation>;
    /** Lists disks for the specified placement group. */
    listDisks: handleUnaryCall<ListDiskPlacementGroupDisksRequest, ListDiskPlacementGroupDisksResponse>;
    /** Lists operations for the specified placement group. */
    listOperations: handleUnaryCall<ListDiskPlacementGroupOperationsRequest, ListDiskPlacementGroupOperationsResponse>;
}
export interface DiskPlacementGroupServiceClient extends Client {
    /** Returns the specified placement group. */
    get(request: GetDiskPlacementGroupRequest, callback: (error: ServiceError | null, response: DiskPlacementGroup) => void): ClientUnaryCall;
    get(request: GetDiskPlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DiskPlacementGroup) => void): ClientUnaryCall;
    get(request: GetDiskPlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DiskPlacementGroup) => void): ClientUnaryCall;
    /** Retrieves the list of placement groups in the specified folder. */
    list(request: ListDiskPlacementGroupsRequest, callback: (error: ServiceError | null, response: ListDiskPlacementGroupsResponse) => void): ClientUnaryCall;
    list(request: ListDiskPlacementGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDiskPlacementGroupsResponse) => void): ClientUnaryCall;
    list(request: ListDiskPlacementGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDiskPlacementGroupsResponse) => void): ClientUnaryCall;
    /** Creates a placement group in the specified folder. */
    create(request: CreateDiskPlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDiskPlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDiskPlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified placement group. */
    update(request: UpdateDiskPlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDiskPlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDiskPlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified placement group. */
    delete(request: DeleteDiskPlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDiskPlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDiskPlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists disks for the specified placement group. */
    listDisks(request: ListDiskPlacementGroupDisksRequest, callback: (error: ServiceError | null, response: ListDiskPlacementGroupDisksResponse) => void): ClientUnaryCall;
    listDisks(request: ListDiskPlacementGroupDisksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDiskPlacementGroupDisksResponse) => void): ClientUnaryCall;
    listDisks(request: ListDiskPlacementGroupDisksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDiskPlacementGroupDisksResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified placement group. */
    listOperations(request: ListDiskPlacementGroupOperationsRequest, callback: (error: ServiceError | null, response: ListDiskPlacementGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDiskPlacementGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDiskPlacementGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDiskPlacementGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDiskPlacementGroupOperationsResponse) => void): ClientUnaryCall;
}
export declare const DiskPlacementGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => DiskPlacementGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
