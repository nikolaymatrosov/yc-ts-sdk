/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { MaintenancePolicy, HostGroup, ScalePolicy, Host } from '../../../../yandex/cloud/compute/v1/host_group';
import { Instance } from '../../../../yandex/cloud/compute/v1/instance';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetHostGroupRequest {
    $type: 'yandex.cloud.compute.v1.GetHostGroupRequest';
    /**
     * ID of the host group to return.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
}
export interface ListHostGroupsRequest {
    $type: 'yandex.cloud.compute.v1.ListHostGroupsRequest';
    /**
     * ID of the folder to list host groups in.
     * To get the folder ID, use [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListHostGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListHostGroupsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [HostGroup.name] field.
     */
    filter: string;
}
export interface ListHostGroupsResponse {
    $type: 'yandex.cloud.compute.v1.ListHostGroupsResponse';
    /** Lists host groups for the specified folder. */
    hostGroups: HostGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListHostGroupsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListHostGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateHostGroupRequest {
    $type: 'yandex.cloud.compute.v1.CreateHostGroupRequest';
    /**
     * ID of the folder to create a host group in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the group. */
    name: string;
    /** Description of the group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Availability zone where all dedicated hosts will be allocated. */
    zoneId: string;
    /** ID of host type. Resources provided by each host of the group. */
    typeId: string;
    /** Behaviour on maintenance events. */
    maintenancePolicy: MaintenancePolicy;
    /** Scale policy. Only fixed number of hosts are supported at this moment. */
    scalePolicy: ScalePolicy | undefined;
}
export interface CreateHostGroupRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateHostGroupMetadata {
    $type: 'yandex.cloud.compute.v1.CreateHostGroupMetadata';
    /** ID of the host group that is being created. */
    hostGroupId: string;
}
export interface UpdateHostGroupRequest {
    $type: 'yandex.cloud.compute.v1.UpdateHostGroupRequest';
    /**
     * ID of the host group to update.
     * To get the host group ID, use an [HostGroupService.List] request.
     */
    hostGroupId: string;
    /** Field mask that specifies which fields of the HostGroup resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the group. */
    name: string;
    /** Description of the group. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * The existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /** Behaviour on maintenance events */
    maintenancePolicy: MaintenancePolicy;
    /** Scale policy. Only fixed number of hosts are supported at this moment. */
    scalePolicy: ScalePolicy | undefined;
}
export interface UpdateHostGroupRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateHostGroupMetadata {
    $type: 'yandex.cloud.compute.v1.UpdateHostGroupMetadata';
    /** ID of the host group that is being updated. */
    hostGroupId: string;
}
export interface DeleteHostGroupRequest {
    $type: 'yandex.cloud.compute.v1.DeleteHostGroupRequest';
    /**
     * ID of the host group to delete.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
}
export interface DeleteHostGroupMetadata {
    $type: 'yandex.cloud.compute.v1.DeleteHostGroupMetadata';
    /** ID of the host group that is being deleted. */
    hostGroupId: string;
}
export interface ListHostGroupInstancesRequest {
    $type: 'yandex.cloud.compute.v1.ListHostGroupInstancesRequest';
    /**
     * ID of the host group to list instances for.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListHostGroupInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListHostGroupInstancesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [Host.id] field.
     * To get the host ID, use [HostGroupService.ListHosts] request.
     */
    filter: string;
}
export interface ListHostGroupInstancesResponse {
    $type: 'yandex.cloud.compute.v1.ListHostGroupInstancesResponse';
    /** Lists instances for the specified host group. */
    instances: Instance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListHostGroupInstancesRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListHostGroupInstancesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListHostGroupHostsRequest {
    $type: 'yandex.cloud.compute.v1.ListHostGroupHostsRequest';
    /**
     * ID of the host group to list hosts for.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListHostGroupHostsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListHostGroupHostsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListHostGroupHostsResponse {
    $type: 'yandex.cloud.compute.v1.ListHostGroupHostsResponse';
    /** Lists hosts for the specified host group. */
    hosts: Host[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListHostGroupHostsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListHostGroupHostsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListHostGroupOperationsRequest {
    $type: 'yandex.cloud.compute.v1.ListHostGroupOperationsRequest';
    /**
     * ID of the host group to list operations for.
     * To get the host group ID, use [HostGroupService.List] request.
     */
    hostGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListHostGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListHostGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListHostGroupOperationsResponse {
    $type: 'yandex.cloud.compute.v1.ListHostGroupOperationsResponse';
    /** List of operations for the specified host group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListHostGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListHostGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetHostGroupRequest: {
    $type: "yandex.cloud.compute.v1.GetHostGroupRequest";
    encode(message: GetHostGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetHostGroupRequest;
    fromJSON(object: any): GetHostGroupRequest;
    toJSON(message: GetHostGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetHostGroupRequest>): GetHostGroupRequest;
};
export declare const ListHostGroupsRequest: {
    $type: "yandex.cloud.compute.v1.ListHostGroupsRequest";
    encode(message: ListHostGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupsRequest;
    fromJSON(object: any): ListHostGroupsRequest;
    toJSON(message: ListHostGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListHostGroupsRequest>): ListHostGroupsRequest;
};
export declare const ListHostGroupsResponse: {
    $type: "yandex.cloud.compute.v1.ListHostGroupsResponse";
    encode(message: ListHostGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupsResponse;
    fromJSON(object: any): ListHostGroupsResponse;
    toJSON(message: ListHostGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListHostGroupsResponse>): ListHostGroupsResponse;
};
export declare const CreateHostGroupRequest: {
    $type: "yandex.cloud.compute.v1.CreateHostGroupRequest";
    encode(message: CreateHostGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHostGroupRequest;
    fromJSON(object: any): CreateHostGroupRequest;
    toJSON(message: CreateHostGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateHostGroupRequest>): CreateHostGroupRequest;
};
export declare const CreateHostGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry";
    encode(message: CreateHostGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHostGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateHostGroupRequest_LabelsEntry;
    toJSON(message: CreateHostGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateHostGroupRequest_LabelsEntry>): CreateHostGroupRequest_LabelsEntry;
};
export declare const CreateHostGroupMetadata: {
    $type: "yandex.cloud.compute.v1.CreateHostGroupMetadata";
    encode(message: CreateHostGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHostGroupMetadata;
    fromJSON(object: any): CreateHostGroupMetadata;
    toJSON(message: CreateHostGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateHostGroupMetadata>): CreateHostGroupMetadata;
};
export declare const UpdateHostGroupRequest: {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest";
    encode(message: UpdateHostGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHostGroupRequest;
    fromJSON(object: any): UpdateHostGroupRequest;
    toJSON(message: UpdateHostGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateHostGroupRequest>): UpdateHostGroupRequest;
};
export declare const UpdateHostGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry";
    encode(message: UpdateHostGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHostGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateHostGroupRequest_LabelsEntry;
    toJSON(message: UpdateHostGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateHostGroupRequest_LabelsEntry>): UpdateHostGroupRequest_LabelsEntry;
};
export declare const UpdateHostGroupMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateHostGroupMetadata";
    encode(message: UpdateHostGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHostGroupMetadata;
    fromJSON(object: any): UpdateHostGroupMetadata;
    toJSON(message: UpdateHostGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateHostGroupMetadata>): UpdateHostGroupMetadata;
};
export declare const DeleteHostGroupRequest: {
    $type: "yandex.cloud.compute.v1.DeleteHostGroupRequest";
    encode(message: DeleteHostGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteHostGroupRequest;
    fromJSON(object: any): DeleteHostGroupRequest;
    toJSON(message: DeleteHostGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteHostGroupRequest>): DeleteHostGroupRequest;
};
export declare const DeleteHostGroupMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteHostGroupMetadata";
    encode(message: DeleteHostGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteHostGroupMetadata;
    fromJSON(object: any): DeleteHostGroupMetadata;
    toJSON(message: DeleteHostGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteHostGroupMetadata>): DeleteHostGroupMetadata;
};
export declare const ListHostGroupInstancesRequest: {
    $type: "yandex.cloud.compute.v1.ListHostGroupInstancesRequest";
    encode(message: ListHostGroupInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupInstancesRequest;
    fromJSON(object: any): ListHostGroupInstancesRequest;
    toJSON(message: ListHostGroupInstancesRequest): unknown;
    fromPartial(object: DeepPartial<ListHostGroupInstancesRequest>): ListHostGroupInstancesRequest;
};
export declare const ListHostGroupInstancesResponse: {
    $type: "yandex.cloud.compute.v1.ListHostGroupInstancesResponse";
    encode(message: ListHostGroupInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupInstancesResponse;
    fromJSON(object: any): ListHostGroupInstancesResponse;
    toJSON(message: ListHostGroupInstancesResponse): unknown;
    fromPartial(object: DeepPartial<ListHostGroupInstancesResponse>): ListHostGroupInstancesResponse;
};
export declare const ListHostGroupHostsRequest: {
    $type: "yandex.cloud.compute.v1.ListHostGroupHostsRequest";
    encode(message: ListHostGroupHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupHostsRequest;
    fromJSON(object: any): ListHostGroupHostsRequest;
    toJSON(message: ListHostGroupHostsRequest): unknown;
    fromPartial(object: DeepPartial<ListHostGroupHostsRequest>): ListHostGroupHostsRequest;
};
export declare const ListHostGroupHostsResponse: {
    $type: "yandex.cloud.compute.v1.ListHostGroupHostsResponse";
    encode(message: ListHostGroupHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupHostsResponse;
    fromJSON(object: any): ListHostGroupHostsResponse;
    toJSON(message: ListHostGroupHostsResponse): unknown;
    fromPartial(object: DeepPartial<ListHostGroupHostsResponse>): ListHostGroupHostsResponse;
};
export declare const ListHostGroupOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListHostGroupOperationsRequest";
    encode(message: ListHostGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupOperationsRequest;
    fromJSON(object: any): ListHostGroupOperationsRequest;
    toJSON(message: ListHostGroupOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListHostGroupOperationsRequest>): ListHostGroupOperationsRequest;
};
export declare const ListHostGroupOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListHostGroupOperationsResponse";
    encode(message: ListHostGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHostGroupOperationsResponse;
    fromJSON(object: any): ListHostGroupOperationsResponse;
    toJSON(message: ListHostGroupOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListHostGroupOperationsResponse>): ListHostGroupOperationsResponse;
};
/** A set of methods for managing groups of dedicated hosts. */
export declare const HostGroupServiceService: {
    /** Returns the specified host group. */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetHostGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetHostGroupRequest;
        readonly responseSerialize: (value: HostGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => HostGroup;
    };
    /** Retrieves the list of host groups in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHostGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHostGroupsRequest;
        readonly responseSerialize: (value: ListHostGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHostGroupsResponse;
    };
    /** Creates a host group in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateHostGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateHostGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified host group. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateHostGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateHostGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified host group. */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteHostGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteHostGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified host group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHostGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHostGroupOperationsRequest;
        readonly responseSerialize: (value: ListHostGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHostGroupOperationsResponse;
    };
    /** Lists instances that belongs to the specified host group. */
    readonly listInstances: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/ListInstances";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHostGroupInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHostGroupInstancesRequest;
        readonly responseSerialize: (value: ListHostGroupInstancesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHostGroupInstancesResponse;
    };
    /** Lists hosts that belongs to the specified host group. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.compute.v1.HostGroupService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHostGroupHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHostGroupHostsRequest;
        readonly responseSerialize: (value: ListHostGroupHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHostGroupHostsResponse;
    };
};
export interface HostGroupServiceServer extends UntypedServiceImplementation {
    /** Returns the specified host group. */
    get: handleUnaryCall<GetHostGroupRequest, HostGroup>;
    /** Retrieves the list of host groups in the specified folder. */
    list: handleUnaryCall<ListHostGroupsRequest, ListHostGroupsResponse>;
    /** Creates a host group in the specified folder. */
    create: handleUnaryCall<CreateHostGroupRequest, Operation>;
    /** Updates the specified host group. */
    update: handleUnaryCall<UpdateHostGroupRequest, Operation>;
    /** Deletes the specified host group. */
    delete: handleUnaryCall<DeleteHostGroupRequest, Operation>;
    /** Lists operations for the specified host group. */
    listOperations: handleUnaryCall<ListHostGroupOperationsRequest, ListHostGroupOperationsResponse>;
    /** Lists instances that belongs to the specified host group. */
    listInstances: handleUnaryCall<ListHostGroupInstancesRequest, ListHostGroupInstancesResponse>;
    /** Lists hosts that belongs to the specified host group. */
    listHosts: handleUnaryCall<ListHostGroupHostsRequest, ListHostGroupHostsResponse>;
}
export interface HostGroupServiceClient extends Client {
    /** Returns the specified host group. */
    get(request: GetHostGroupRequest, callback: (error: ServiceError | null, response: HostGroup) => void): ClientUnaryCall;
    get(request: GetHostGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: HostGroup) => void): ClientUnaryCall;
    get(request: GetHostGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: HostGroup) => void): ClientUnaryCall;
    /** Retrieves the list of host groups in the specified folder. */
    list(request: ListHostGroupsRequest, callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void): ClientUnaryCall;
    list(request: ListHostGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void): ClientUnaryCall;
    list(request: ListHostGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHostGroupsResponse) => void): ClientUnaryCall;
    /** Creates a host group in the specified folder. */
    create(request: CreateHostGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateHostGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateHostGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified host group. */
    update(request: UpdateHostGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateHostGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateHostGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified host group. */
    delete(request: DeleteHostGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteHostGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteHostGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified host group. */
    listOperations(request: ListHostGroupOperationsRequest, callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListHostGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListHostGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHostGroupOperationsResponse) => void): ClientUnaryCall;
    /** Lists instances that belongs to the specified host group. */
    listInstances(request: ListHostGroupInstancesRequest, callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListHostGroupInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListHostGroupInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHostGroupInstancesResponse) => void): ClientUnaryCall;
    /** Lists hosts that belongs to the specified host group. */
    listHosts(request: ListHostGroupHostsRequest, callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListHostGroupHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListHostGroupHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHostGroupHostsResponse) => void): ClientUnaryCall;
}
export declare const HostGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => HostGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
