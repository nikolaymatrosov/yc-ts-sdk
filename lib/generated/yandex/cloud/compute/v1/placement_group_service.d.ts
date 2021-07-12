/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Instance } from '../../../../yandex/cloud/compute/v1/instance';
import { PlacementGroup, SpreadPlacementStrategy } from '../../../../yandex/cloud/compute/v1/placement_group';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetPlacementGroupRequest {
    /**
     * ID of the placement group to return.
     *
     * To get a placement group ID make a [PlacementGroupService.List] request.
     */
    placementGroupId: string;
}
export interface ListPlacementGroupsRequest {
    /**
     * ID of the folder to list placement groups in.
     *
     * To get the folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListPlacementGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListPlacementGroupsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [PlacementGroup.name] field.
     */
    filter: string;
}
export interface ListPlacementGroupsResponse {
    /** Lists placement groups in the specified folder. */
    placementGroups: PlacementGroup[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListPlacementGroupsRequest.page_size], use `next_page_token` as the value
     * for the [ListPlacementGroupsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreatePlacementGroupRequest {
    /**
     * ID of the folder to create a placement group in.
     *
     * To get a folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
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
    /** Anti-affinity placement strategy (`spread`). Instances are distributed over distinct failure domains. */
    spreadPlacementStrategy: SpreadPlacementStrategy | undefined;
}
export interface CreatePlacementGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreatePlacementGroupMetadata {
    /** ID of the placement group that is being created. */
    placementGroupId: string;
}
export interface UpdatePlacementGroupRequest {
    /**
     * ID of the placement group to update.
     *
     * To get the placement group ID, use an [PlacementGroupService.List] request.
     */
    placementGroupId: string;
    /** Field mask that specifies which fields of the PlacementGroup resource should be updated. */
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
export interface UpdatePlacementGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdatePlacementGroupMetadata {
    /** ID of the placement group that is being updated. */
    placementGroupId: string;
}
export interface DeletePlacementGroupRequest {
    /**
     * ID of the placement group to delete.
     *
     * To get the placement group ID, use [PlacementGroupService.List] request.
     */
    placementGroupId: string;
}
export interface DeletePlacementGroupMetadata {
    /** ID of the placement group that is being deleted. */
    placementGroupId: string;
}
export interface ListPlacementGroupInstancesRequest {
    /**
     * ID of the placement group to list instances for.
     *
     * To get the placement group ID, use [PlacementGroupService.List] request.
     */
    placementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListPlacementGroupInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListPlacementGroupInstancesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListPlacementGroupInstancesResponse {
    /** Lists instances for the specified placement group. */
    instances: Instance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListPlacementGroupInstancesRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListPlacementGroupInstancesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListPlacementGroupOperationsRequest {
    /**
     * ID of the placement group to list operations for.
     *
     * To get the placement group ID, use [PlacementGroupService.List] request.
     */
    placementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListPlacementGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListPlacementGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListPlacementGroupOperationsResponse {
    /** List of operations for the specified placement group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListPlacementGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListPlacementGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetPlacementGroupRequest: {
    encode(message: GetPlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetPlacementGroupRequest;
    fromJSON(object: any): GetPlacementGroupRequest;
    toJSON(message: GetPlacementGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetPlacementGroupRequest>): GetPlacementGroupRequest;
};
export declare const ListPlacementGroupsRequest: {
    encode(message: ListPlacementGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupsRequest;
    fromJSON(object: any): ListPlacementGroupsRequest;
    toJSON(message: ListPlacementGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListPlacementGroupsRequest>): ListPlacementGroupsRequest;
};
export declare const ListPlacementGroupsResponse: {
    encode(message: ListPlacementGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupsResponse;
    fromJSON(object: any): ListPlacementGroupsResponse;
    toJSON(message: ListPlacementGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListPlacementGroupsResponse>): ListPlacementGroupsResponse;
};
export declare const CreatePlacementGroupRequest: {
    encode(message: CreatePlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePlacementGroupRequest;
    fromJSON(object: any): CreatePlacementGroupRequest;
    toJSON(message: CreatePlacementGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreatePlacementGroupRequest>): CreatePlacementGroupRequest;
};
export declare const CreatePlacementGroupRequest_LabelsEntry: {
    encode(message: CreatePlacementGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePlacementGroupRequest_LabelsEntry;
    fromJSON(object: any): CreatePlacementGroupRequest_LabelsEntry;
    toJSON(message: CreatePlacementGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreatePlacementGroupRequest_LabelsEntry>): CreatePlacementGroupRequest_LabelsEntry;
};
export declare const CreatePlacementGroupMetadata: {
    encode(message: CreatePlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePlacementGroupMetadata;
    fromJSON(object: any): CreatePlacementGroupMetadata;
    toJSON(message: CreatePlacementGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreatePlacementGroupMetadata>): CreatePlacementGroupMetadata;
};
export declare const UpdatePlacementGroupRequest: {
    encode(message: UpdatePlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePlacementGroupRequest;
    fromJSON(object: any): UpdatePlacementGroupRequest;
    toJSON(message: UpdatePlacementGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdatePlacementGroupRequest>): UpdatePlacementGroupRequest;
};
export declare const UpdatePlacementGroupRequest_LabelsEntry: {
    encode(message: UpdatePlacementGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePlacementGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdatePlacementGroupRequest_LabelsEntry;
    toJSON(message: UpdatePlacementGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdatePlacementGroupRequest_LabelsEntry>): UpdatePlacementGroupRequest_LabelsEntry;
};
export declare const UpdatePlacementGroupMetadata: {
    encode(message: UpdatePlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePlacementGroupMetadata;
    fromJSON(object: any): UpdatePlacementGroupMetadata;
    toJSON(message: UpdatePlacementGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdatePlacementGroupMetadata>): UpdatePlacementGroupMetadata;
};
export declare const DeletePlacementGroupRequest: {
    encode(message: DeletePlacementGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeletePlacementGroupRequest;
    fromJSON(object: any): DeletePlacementGroupRequest;
    toJSON(message: DeletePlacementGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeletePlacementGroupRequest>): DeletePlacementGroupRequest;
};
export declare const DeletePlacementGroupMetadata: {
    encode(message: DeletePlacementGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeletePlacementGroupMetadata;
    fromJSON(object: any): DeletePlacementGroupMetadata;
    toJSON(message: DeletePlacementGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeletePlacementGroupMetadata>): DeletePlacementGroupMetadata;
};
export declare const ListPlacementGroupInstancesRequest: {
    encode(message: ListPlacementGroupInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupInstancesRequest;
    fromJSON(object: any): ListPlacementGroupInstancesRequest;
    toJSON(message: ListPlacementGroupInstancesRequest): unknown;
    fromPartial(object: DeepPartial<ListPlacementGroupInstancesRequest>): ListPlacementGroupInstancesRequest;
};
export declare const ListPlacementGroupInstancesResponse: {
    encode(message: ListPlacementGroupInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupInstancesResponse;
    fromJSON(object: any): ListPlacementGroupInstancesResponse;
    toJSON(message: ListPlacementGroupInstancesResponse): unknown;
    fromPartial(object: DeepPartial<ListPlacementGroupInstancesResponse>): ListPlacementGroupInstancesResponse;
};
export declare const ListPlacementGroupOperationsRequest: {
    encode(message: ListPlacementGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupOperationsRequest;
    fromJSON(object: any): ListPlacementGroupOperationsRequest;
    toJSON(message: ListPlacementGroupOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListPlacementGroupOperationsRequest>): ListPlacementGroupOperationsRequest;
};
export declare const ListPlacementGroupOperationsResponse: {
    encode(message: ListPlacementGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPlacementGroupOperationsResponse;
    fromJSON(object: any): ListPlacementGroupOperationsResponse;
    toJSON(message: ListPlacementGroupOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListPlacementGroupOperationsResponse>): ListPlacementGroupOperationsResponse;
};
/** A set of methods for managing placement groups. */
export declare const PlacementGroupServiceService: {
    /**
     * Returns the specified placement group.
     *
     * To get the list of all available placement groups, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetPlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetPlacementGroupRequest;
        readonly responseSerialize: (value: PlacementGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => PlacementGroup;
    };
    /** Retrieves the list of placement groups in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListPlacementGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPlacementGroupsRequest;
        readonly responseSerialize: (value: ListPlacementGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListPlacementGroupsResponse;
    };
    /** Creates a placement group in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreatePlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreatePlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified placement group. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdatePlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdatePlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified placement group. */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeletePlacementGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeletePlacementGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists instances for the specified placement group. */
    readonly listInstances: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/ListInstances";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListPlacementGroupInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPlacementGroupInstancesRequest;
        readonly responseSerialize: (value: ListPlacementGroupInstancesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListPlacementGroupInstancesResponse;
    };
    /** Lists operations for the specified placement group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.PlacementGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListPlacementGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPlacementGroupOperationsRequest;
        readonly responseSerialize: (value: ListPlacementGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListPlacementGroupOperationsResponse;
    };
};
export interface PlacementGroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified placement group.
     *
     * To get the list of all available placement groups, make a [List] request.
     */
    get: handleUnaryCall<GetPlacementGroupRequest, PlacementGroup>;
    /** Retrieves the list of placement groups in the specified folder. */
    list: handleUnaryCall<ListPlacementGroupsRequest, ListPlacementGroupsResponse>;
    /** Creates a placement group in the specified folder. */
    create: handleUnaryCall<CreatePlacementGroupRequest, Operation>;
    /** Updates the specified placement group. */
    update: handleUnaryCall<UpdatePlacementGroupRequest, Operation>;
    /** Deletes the specified placement group. */
    delete: handleUnaryCall<DeletePlacementGroupRequest, Operation>;
    /** Lists instances for the specified placement group. */
    listInstances: handleUnaryCall<ListPlacementGroupInstancesRequest, ListPlacementGroupInstancesResponse>;
    /** Lists operations for the specified placement group. */
    listOperations: handleUnaryCall<ListPlacementGroupOperationsRequest, ListPlacementGroupOperationsResponse>;
}
export interface PlacementGroupServiceClient extends Client {
    /**
     * Returns the specified placement group.
     *
     * To get the list of all available placement groups, make a [List] request.
     */
    get(request: GetPlacementGroupRequest, callback: (error: ServiceError | null, response: PlacementGroup) => void): ClientUnaryCall;
    get(request: GetPlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: PlacementGroup) => void): ClientUnaryCall;
    get(request: GetPlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: PlacementGroup) => void): ClientUnaryCall;
    /** Retrieves the list of placement groups in the specified folder. */
    list(request: ListPlacementGroupsRequest, callback: (error: ServiceError | null, response: ListPlacementGroupsResponse) => void): ClientUnaryCall;
    list(request: ListPlacementGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListPlacementGroupsResponse) => void): ClientUnaryCall;
    list(request: ListPlacementGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListPlacementGroupsResponse) => void): ClientUnaryCall;
    /** Creates a placement group in the specified folder. */
    create(request: CreatePlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreatePlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreatePlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified placement group. */
    update(request: UpdatePlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdatePlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdatePlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified placement group. */
    delete(request: DeletePlacementGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeletePlacementGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeletePlacementGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists instances for the specified placement group. */
    listInstances(request: ListPlacementGroupInstancesRequest, callback: (error: ServiceError | null, response: ListPlacementGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListPlacementGroupInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListPlacementGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListPlacementGroupInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListPlacementGroupInstancesResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified placement group. */
    listOperations(request: ListPlacementGroupOperationsRequest, callback: (error: ServiceError | null, response: ListPlacementGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListPlacementGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListPlacementGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListPlacementGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListPlacementGroupOperationsResponse) => void): ClientUnaryCall;
}
export declare const PlacementGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => PlacementGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
