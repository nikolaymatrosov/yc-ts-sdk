/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { TargetGroup, Target } from '../../../../yandex/cloud/apploadbalancer/v1/target_group';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetTargetGroupRequest {
    /**
     * ID of the target group to return.
     *
     * To get the target group ID, make a [TargetGroupService.List] request.
     */
    targetGroupId: string;
}
export interface ListTargetGroupsRequest {
    /**
     * ID of the folder to list target groups in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListTargetGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListTargetGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters target groups listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [TargetGroup.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-target-group`.
     */
    filter: string;
}
export interface ListTargetGroupsResponse {
    /** List of target groups in the specified folder. */
    targetGroups: TargetGroup[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListTargetGroupsRequest.page_size], use `next_page_token` as the value
     * for the [ListTargetGroupsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteTargetGroupRequest {
    /**
     * ID of the target group to delete.
     *
     * To get the target group ID, make a [TargetGroupService.List] request.
     */
    targetGroupId: string;
}
export interface DeleteTargetGroupMetadata {
    /** ID of the target group that is being deleted. */
    targetGroupId: string;
}
export interface UpdateTargetGroupRequest {
    /**
     * ID of the target group to update.
     *
     * To get the target group ID, make a [TargetGroupService.List] request.
     */
    targetGroupId: string;
    /** Field mask that specifies which attributes of the target group should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name for the target group.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the target group. */
    description: string;
    /**
     * Target group labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [TargetGroupService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * New list of targets in the target group.
     *
     * Existing list of targets is completely replaced by the specified list, so if you just want to add or remove
     * a target, make a [TargetGroupService.AddTargets] request or a [TargetGroupService.RemoveTargets] request.
     */
    targets: Target[];
}
export interface UpdateTargetGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateTargetGroupMetadata {
    /** ID of the target group that is being updated. */
    targetGroupId: string;
}
export interface CreateTargetGroupRequest {
    /**
     * ID of the folder to create a target group in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the target group.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the target group. */
    description: string;
    /**
     * Target group labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /** List of targets in the target group. */
    targets: Target[];
}
export interface CreateTargetGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateTargetGroupMetadata {
    /** ID of the target group that is being created. */
    targetGroupId: string;
}
export interface AddTargetsRequest {
    /**
     * ID of the target group to add targets to.
     *
     * To get the target group ID, make a [TargetGroupService.List] request.
     */
    targetGroupId: string;
    /** List of targets to add to the target group. */
    targets: Target[];
}
export interface AddTargetsMetadata {
    /** ID of the target group that the targets are being added to. */
    targetGroupId: string;
}
export interface RemoveTargetsRequest {
    /**
     * ID of the target group to remove targets from.
     *
     * To get the target group ID, make a [TargetGroupService.List] request.
     */
    targetGroupId: string;
    /** List of targets to remove from the target group. */
    targets: Target[];
}
export interface RemoveTargetsMetadata {
    /** ID of the target group that the targets are being removed from. */
    targetGroupId: string;
}
export interface ListTargetGroupOperationsRequest {
    /**
     * ID of the target group to get operations for.
     *
     * To get the target group ID, use a [TargetGroupService.List] request.
     */
    targetGroupId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListTargetGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListTargetGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListTargetGroupOperationsResponse {
    /** List of operations for the specified target group. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListTargetGroupOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListTargetGroupOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetTargetGroupRequest: {
    encode(message: GetTargetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTargetGroupRequest;
    fromJSON(object: any): GetTargetGroupRequest;
    toJSON(message: GetTargetGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetTargetGroupRequest>): GetTargetGroupRequest;
};
export declare const ListTargetGroupsRequest: {
    encode(message: ListTargetGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTargetGroupsRequest;
    fromJSON(object: any): ListTargetGroupsRequest;
    toJSON(message: ListTargetGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListTargetGroupsRequest>): ListTargetGroupsRequest;
};
export declare const ListTargetGroupsResponse: {
    encode(message: ListTargetGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTargetGroupsResponse;
    fromJSON(object: any): ListTargetGroupsResponse;
    toJSON(message: ListTargetGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListTargetGroupsResponse>): ListTargetGroupsResponse;
};
export declare const DeleteTargetGroupRequest: {
    encode(message: DeleteTargetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTargetGroupRequest;
    fromJSON(object: any): DeleteTargetGroupRequest;
    toJSON(message: DeleteTargetGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteTargetGroupRequest>): DeleteTargetGroupRequest;
};
export declare const DeleteTargetGroupMetadata: {
    encode(message: DeleteTargetGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTargetGroupMetadata;
    fromJSON(object: any): DeleteTargetGroupMetadata;
    toJSON(message: DeleteTargetGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteTargetGroupMetadata>): DeleteTargetGroupMetadata;
};
export declare const UpdateTargetGroupRequest: {
    encode(message: UpdateTargetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTargetGroupRequest;
    fromJSON(object: any): UpdateTargetGroupRequest;
    toJSON(message: UpdateTargetGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateTargetGroupRequest>): UpdateTargetGroupRequest;
};
export declare const UpdateTargetGroupRequest_LabelsEntry: {
    encode(message: UpdateTargetGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTargetGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateTargetGroupRequest_LabelsEntry;
    toJSON(message: UpdateTargetGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateTargetGroupRequest_LabelsEntry>): UpdateTargetGroupRequest_LabelsEntry;
};
export declare const UpdateTargetGroupMetadata: {
    encode(message: UpdateTargetGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTargetGroupMetadata;
    fromJSON(object: any): UpdateTargetGroupMetadata;
    toJSON(message: UpdateTargetGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateTargetGroupMetadata>): UpdateTargetGroupMetadata;
};
export declare const CreateTargetGroupRequest: {
    encode(message: CreateTargetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTargetGroupRequest;
    fromJSON(object: any): CreateTargetGroupRequest;
    toJSON(message: CreateTargetGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateTargetGroupRequest>): CreateTargetGroupRequest;
};
export declare const CreateTargetGroupRequest_LabelsEntry: {
    encode(message: CreateTargetGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTargetGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateTargetGroupRequest_LabelsEntry;
    toJSON(message: CreateTargetGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateTargetGroupRequest_LabelsEntry>): CreateTargetGroupRequest_LabelsEntry;
};
export declare const CreateTargetGroupMetadata: {
    encode(message: CreateTargetGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTargetGroupMetadata;
    fromJSON(object: any): CreateTargetGroupMetadata;
    toJSON(message: CreateTargetGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateTargetGroupMetadata>): CreateTargetGroupMetadata;
};
export declare const AddTargetsRequest: {
    encode(message: AddTargetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddTargetsRequest;
    fromJSON(object: any): AddTargetsRequest;
    toJSON(message: AddTargetsRequest): unknown;
    fromPartial(object: DeepPartial<AddTargetsRequest>): AddTargetsRequest;
};
export declare const AddTargetsMetadata: {
    encode(message: AddTargetsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddTargetsMetadata;
    fromJSON(object: any): AddTargetsMetadata;
    toJSON(message: AddTargetsMetadata): unknown;
    fromPartial(object: DeepPartial<AddTargetsMetadata>): AddTargetsMetadata;
};
export declare const RemoveTargetsRequest: {
    encode(message: RemoveTargetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveTargetsRequest;
    fromJSON(object: any): RemoveTargetsRequest;
    toJSON(message: RemoveTargetsRequest): unknown;
    fromPartial(object: DeepPartial<RemoveTargetsRequest>): RemoveTargetsRequest;
};
export declare const RemoveTargetsMetadata: {
    encode(message: RemoveTargetsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveTargetsMetadata;
    fromJSON(object: any): RemoveTargetsMetadata;
    toJSON(message: RemoveTargetsMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveTargetsMetadata>): RemoveTargetsMetadata;
};
export declare const ListTargetGroupOperationsRequest: {
    encode(message: ListTargetGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTargetGroupOperationsRequest;
    fromJSON(object: any): ListTargetGroupOperationsRequest;
    toJSON(message: ListTargetGroupOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListTargetGroupOperationsRequest>): ListTargetGroupOperationsRequest;
};
export declare const ListTargetGroupOperationsResponse: {
    encode(message: ListTargetGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTargetGroupOperationsResponse;
    fromJSON(object: any): ListTargetGroupOperationsResponse;
    toJSON(message: ListTargetGroupOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListTargetGroupOperationsResponse>): ListTargetGroupOperationsResponse;
};
/** A set of methods for managing target groups. */
export declare const TargetGroupServiceService: {
    /**
     * Returns the specified target group.
     *
     * To get the list of all available target groups, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTargetGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTargetGroupRequest;
        readonly responseSerialize: (value: TargetGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => TargetGroup;
    };
    /** Lists target groups in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTargetGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTargetGroupsRequest;
        readonly responseSerialize: (value: ListTargetGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTargetGroupsResponse;
    };
    /** Creates a target group in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateTargetGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateTargetGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified target group. */
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateTargetGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateTargetGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified target group. */
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteTargetGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteTargetGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Adds targets to the specified target group. */
    readonly addTargets: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/AddTargets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddTargetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddTargetsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Removes targets from the specified target group. */
    readonly removeTargets: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/RemoveTargets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveTargetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveTargetsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified target group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTargetGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTargetGroupOperationsRequest;
        readonly responseSerialize: (value: ListTargetGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTargetGroupOperationsResponse;
    };
};
export interface TargetGroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified target group.
     *
     * To get the list of all available target groups, make a [List] request.
     */
    get: handleUnaryCall<GetTargetGroupRequest, TargetGroup>;
    /** Lists target groups in the specified folder. */
    list: handleUnaryCall<ListTargetGroupsRequest, ListTargetGroupsResponse>;
    /** Creates a target group in the specified folder. */
    create: handleUnaryCall<CreateTargetGroupRequest, Operation>;
    /** Updates the specified target group. */
    update: handleUnaryCall<UpdateTargetGroupRequest, Operation>;
    /** Deletes the specified target group. */
    delete: handleUnaryCall<DeleteTargetGroupRequest, Operation>;
    /** Adds targets to the specified target group. */
    addTargets: handleUnaryCall<AddTargetsRequest, Operation>;
    /** Removes targets from the specified target group. */
    removeTargets: handleUnaryCall<RemoveTargetsRequest, Operation>;
    /** Lists operations for the specified target group. */
    listOperations: handleUnaryCall<ListTargetGroupOperationsRequest, ListTargetGroupOperationsResponse>;
}
export interface TargetGroupServiceClient extends Client {
    /**
     * Returns the specified target group.
     *
     * To get the list of all available target groups, make a [List] request.
     */
    get(request: GetTargetGroupRequest, callback: (error: ServiceError | null, response: TargetGroup) => void): ClientUnaryCall;
    get(request: GetTargetGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: TargetGroup) => void): ClientUnaryCall;
    get(request: GetTargetGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: TargetGroup) => void): ClientUnaryCall;
    /** Lists target groups in the specified folder. */
    list(request: ListTargetGroupsRequest, callback: (error: ServiceError | null, response: ListTargetGroupsResponse) => void): ClientUnaryCall;
    list(request: ListTargetGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTargetGroupsResponse) => void): ClientUnaryCall;
    list(request: ListTargetGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTargetGroupsResponse) => void): ClientUnaryCall;
    /** Creates a target group in the specified folder. */
    create(request: CreateTargetGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTargetGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTargetGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified target group. */
    update(request: UpdateTargetGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTargetGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTargetGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified target group. */
    delete(request: DeleteTargetGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTargetGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTargetGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Adds targets to the specified target group. */
    addTargets(request: AddTargetsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addTargets(request: AddTargetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addTargets(request: AddTargetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Removes targets from the specified target group. */
    removeTargets(request: RemoveTargetsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeTargets(request: RemoveTargetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeTargets(request: RemoveTargetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified target group. */
    listOperations(request: ListTargetGroupOperationsRequest, callback: (error: ServiceError | null, response: ListTargetGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListTargetGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTargetGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListTargetGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTargetGroupOperationsResponse) => void): ClientUnaryCall;
}
export declare const TargetGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => TargetGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
