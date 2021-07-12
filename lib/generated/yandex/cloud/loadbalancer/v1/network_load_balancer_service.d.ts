/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { NetworkLoadBalancer_Type, IpVersion, Listener_Protocol, NetworkLoadBalancer, AttachedTargetGroup, TargetState } from '../../../../yandex/cloud/loadbalancer/v1/network_load_balancer';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.loadbalancer.v1";
export interface GetNetworkLoadBalancerRequest {
    /**
     * ID of the NetworkLoadBalancer resource to return.
     * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
     */
    networkLoadBalancerId: string;
}
export interface ListNetworkLoadBalancersRequest {
    /**
     * ID of the folder that the network load balancer belongs to.
     * To get the folder ID, use a [NetworkLoadBalancerService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [<ResponseMessage>.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListNetworkLoadBalancersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can only filter by the [NetworkLoadBalancer.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, or `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter: string;
}
export interface ListNetworkLoadBalancersResponse {
    /** List of NetworkLoadBalancer resources. */
    networkLoadBalancers: NetworkLoadBalancer[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNetworkLoadBalancersRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListNetworkLoadBalancersRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateNetworkLoadBalancerRequest {
    /**
     * ID of the folder to create a network load balancer in.
     * To get the folder ID, use a [NetworkLoadBalancerService.List] request.
     */
    folderId: string;
    /**
     * Name of the network load balancer.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the network load balancer. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
    /** ID of the region where the network load balancer resides. */
    regionId: string;
    /** Type of the network load balancer. Only external network load balancers are currently available. */
    type: NetworkLoadBalancer_Type;
    /** List of listeners and their specs for the network load balancer. */
    listenerSpecs: ListenerSpec[];
    /** List of attached target groups for the network load balancer. */
    attachedTargetGroups: AttachedTargetGroup[];
}
export interface CreateNetworkLoadBalancerRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateNetworkLoadBalancerMetadata {
    /** ID of the network load balancer that is being created. */
    networkLoadBalancerId: string;
}
export interface UpdateNetworkLoadBalancerRequest {
    /**
     * ID of the network load balancer to update.
     * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
     */
    networkLoadBalancerId: string;
    /** Field mask that specifies which fields of the NetworkLoadBalancer resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the network load balancer.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the network load balancer. */
    description: string;
    /**
     * Resource labels as `` key:value `` pairs.
     *
     * The existing set of `` labels `` is completely replaced with the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /** A list of listeners and their specs for the network load balancer. */
    listenerSpecs: ListenerSpec[];
    /** A list of attached target groups for the network load balancer. */
    attachedTargetGroups: AttachedTargetGroup[];
}
export interface UpdateNetworkLoadBalancerRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateNetworkLoadBalancerMetadata {
    /** ID of the NetworkLoadBalancer resource that is being updated. */
    networkLoadBalancerId: string;
}
export interface DeleteNetworkLoadBalancerRequest {
    /**
     * ID of the network load balancer to delete.
     * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
     */
    networkLoadBalancerId: string;
}
export interface DeleteNetworkLoadBalancerMetadata {
    /** ID of the NetworkLoadBalancer resource that is being deleted. */
    networkLoadBalancerId: string;
}
export interface StartNetworkLoadBalancerRequest {
    /**
     * ID of the network load balancer to start.
     * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
     */
    networkLoadBalancerId: string;
}
export interface StartNetworkLoadBalancerMetadata {
    /** ID of the NetworkLoadBalancer resource that is being started. */
    networkLoadBalancerId: string;
}
export interface StopNetworkLoadBalancerRequest {
    /**
     * ID of the network load balancer to stop.
     * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
     */
    networkLoadBalancerId: string;
}
export interface StopNetworkLoadBalancerMetadata {
    /** ID of the NetworkLoadBalancer resource that is being stopped. */
    networkLoadBalancerId: string;
}
export interface AttachNetworkLoadBalancerTargetGroupRequest {
    /**
     * ID of the network load balancer to attach the target group to.
     * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
     */
    networkLoadBalancerId: string;
    /**
     * ID of the attached target group to attach to the network load balancer.
     * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
     */
    attachedTargetGroup: AttachedTargetGroup | undefined;
}
export interface AttachNetworkLoadBalancerTargetGroupMetadata {
    /** ID of the network load balancer that the target group is being attached to. */
    networkLoadBalancerId: string;
    /** ID of the target group. */
    targetGroupId: string;
}
export interface DetachNetworkLoadBalancerTargetGroupRequest {
    /**
     * ID of the network load balancer to detach the target group from.
     * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
     */
    networkLoadBalancerId: string;
    /** ID of the target group. */
    targetGroupId: string;
}
export interface DetachNetworkLoadBalancerTargetGroupMetadata {
    /** ID of the network load balancer that the target group is being detached from. */
    networkLoadBalancerId: string;
    /** ID of the target group. */
    targetGroupId: string;
}
export interface AddNetworkLoadBalancerListenerRequest {
    /**
     * ID of the network load balancer to add a listener to.
     * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
     */
    networkLoadBalancerId: string;
    /** Listener spec. */
    listenerSpec: ListenerSpec | undefined;
}
export interface AddNetworkLoadBalancerListenerMetadata {
    /** ID of the network load balancer that the listener is being added to. */
    networkLoadBalancerId: string;
}
export interface RemoveNetworkLoadBalancerListenerRequest {
    /**
     * ID of the network load balancer to remove the listener from.
     * To get the network load balancer ID, use a [NetworkLoadBalancerService.List] request.
     */
    networkLoadBalancerId: string;
    /** Name of the listener to delete. */
    listenerName: string;
}
export interface RemoveNetworkLoadBalancerListenerMetadata {
    /** ID of the network load balancer that the listener is being removed from. */
    networkLoadBalancerId: string;
}
export interface ListNetworkLoadBalancerOperationsRequest {
    /** ID of the NetworkLoadBalancer resource to list operations for. */
    networkLoadBalancerId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListNetworkLoadBalancerOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListNetworkLoadBalancerOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListNetworkLoadBalancerOperationsResponse {
    /** List of operations for the specified network load balancer. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNetworkLoadBalancerOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListNetworkLoadBalancerOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface GetTargetStatesRequest {
    /** ID of the NetworkLoadBalancer resource with an attached target group. */
    networkLoadBalancerId: string;
    /** ID of the target group to get states of resources from. */
    targetGroupId: string;
}
export interface GetTargetStatesResponse {
    /** List of states of targets within the target group that is specified in the [GetTargetStatesRequest] message. */
    targetStates: TargetState[];
}
/** External address specification that is used by [ListenerSpec]. */
export interface ExternalAddressSpec {
    /**
     * Public IP address for a listener.
     * If you provide a static public IP address for the [NetworkLoadBalancerService.Update]
     * method, it will replace the existing listener address.
     */
    address: string;
    /** IP version. */
    ipVersion: IpVersion;
}
/** Internal address specification that is used by [ListenerSpec]. */
export interface InternalAddressSpec {
    /** Internal IP address for a listener. */
    address: string;
    /** ID of the subnet. */
    subnetId: string;
    /** IP version. */
    ipVersion: IpVersion;
}
/** Listener specification that will be used by a network load balancer. */
export interface ListenerSpec {
    /** Name of the listener. The name must be unique for each listener on a single load balancer. 3-63 characters long. */
    name: string;
    /** Port for incoming traffic. */
    port: number;
    /** Protocol for incoming traffic. */
    protocol: Listener_Protocol;
    /** External IP address specification. */
    externalAddressSpec: ExternalAddressSpec | undefined;
    /** Internal IP address specification. */
    internalAddressSpec: InternalAddressSpec | undefined;
    /**
     * Port of a target.
     * Acceptable values are 1 to 65535, inclusive.
     */
    targetPort: number;
}
export declare const GetNetworkLoadBalancerRequest: {
    encode(message: GetNetworkLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetNetworkLoadBalancerRequest;
    fromJSON(object: any): GetNetworkLoadBalancerRequest;
    toJSON(message: GetNetworkLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<GetNetworkLoadBalancerRequest>): GetNetworkLoadBalancerRequest;
};
export declare const ListNetworkLoadBalancersRequest: {
    encode(message: ListNetworkLoadBalancersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkLoadBalancersRequest;
    fromJSON(object: any): ListNetworkLoadBalancersRequest;
    toJSON(message: ListNetworkLoadBalancersRequest): unknown;
    fromPartial(object: DeepPartial<ListNetworkLoadBalancersRequest>): ListNetworkLoadBalancersRequest;
};
export declare const ListNetworkLoadBalancersResponse: {
    encode(message: ListNetworkLoadBalancersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkLoadBalancersResponse;
    fromJSON(object: any): ListNetworkLoadBalancersResponse;
    toJSON(message: ListNetworkLoadBalancersResponse): unknown;
    fromPartial(object: DeepPartial<ListNetworkLoadBalancersResponse>): ListNetworkLoadBalancersResponse;
};
export declare const CreateNetworkLoadBalancerRequest: {
    encode(message: CreateNetworkLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNetworkLoadBalancerRequest;
    fromJSON(object: any): CreateNetworkLoadBalancerRequest;
    toJSON(message: CreateNetworkLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<CreateNetworkLoadBalancerRequest>): CreateNetworkLoadBalancerRequest;
};
export declare const CreateNetworkLoadBalancerRequest_LabelsEntry: {
    encode(message: CreateNetworkLoadBalancerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNetworkLoadBalancerRequest_LabelsEntry;
    fromJSON(object: any): CreateNetworkLoadBalancerRequest_LabelsEntry;
    toJSON(message: CreateNetworkLoadBalancerRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateNetworkLoadBalancerRequest_LabelsEntry>): CreateNetworkLoadBalancerRequest_LabelsEntry;
};
export declare const CreateNetworkLoadBalancerMetadata: {
    encode(message: CreateNetworkLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNetworkLoadBalancerMetadata;
    fromJSON(object: any): CreateNetworkLoadBalancerMetadata;
    toJSON(message: CreateNetworkLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<CreateNetworkLoadBalancerMetadata>): CreateNetworkLoadBalancerMetadata;
};
export declare const UpdateNetworkLoadBalancerRequest: {
    encode(message: UpdateNetworkLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNetworkLoadBalancerRequest;
    fromJSON(object: any): UpdateNetworkLoadBalancerRequest;
    toJSON(message: UpdateNetworkLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<UpdateNetworkLoadBalancerRequest>): UpdateNetworkLoadBalancerRequest;
};
export declare const UpdateNetworkLoadBalancerRequest_LabelsEntry: {
    encode(message: UpdateNetworkLoadBalancerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNetworkLoadBalancerRequest_LabelsEntry;
    fromJSON(object: any): UpdateNetworkLoadBalancerRequest_LabelsEntry;
    toJSON(message: UpdateNetworkLoadBalancerRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateNetworkLoadBalancerRequest_LabelsEntry>): UpdateNetworkLoadBalancerRequest_LabelsEntry;
};
export declare const UpdateNetworkLoadBalancerMetadata: {
    encode(message: UpdateNetworkLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNetworkLoadBalancerMetadata;
    fromJSON(object: any): UpdateNetworkLoadBalancerMetadata;
    toJSON(message: UpdateNetworkLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateNetworkLoadBalancerMetadata>): UpdateNetworkLoadBalancerMetadata;
};
export declare const DeleteNetworkLoadBalancerRequest: {
    encode(message: DeleteNetworkLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteNetworkLoadBalancerRequest;
    fromJSON(object: any): DeleteNetworkLoadBalancerRequest;
    toJSON(message: DeleteNetworkLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<DeleteNetworkLoadBalancerRequest>): DeleteNetworkLoadBalancerRequest;
};
export declare const DeleteNetworkLoadBalancerMetadata: {
    encode(message: DeleteNetworkLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteNetworkLoadBalancerMetadata;
    fromJSON(object: any): DeleteNetworkLoadBalancerMetadata;
    toJSON(message: DeleteNetworkLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteNetworkLoadBalancerMetadata>): DeleteNetworkLoadBalancerMetadata;
};
export declare const StartNetworkLoadBalancerRequest: {
    encode(message: StartNetworkLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartNetworkLoadBalancerRequest;
    fromJSON(object: any): StartNetworkLoadBalancerRequest;
    toJSON(message: StartNetworkLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<StartNetworkLoadBalancerRequest>): StartNetworkLoadBalancerRequest;
};
export declare const StartNetworkLoadBalancerMetadata: {
    encode(message: StartNetworkLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartNetworkLoadBalancerMetadata;
    fromJSON(object: any): StartNetworkLoadBalancerMetadata;
    toJSON(message: StartNetworkLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<StartNetworkLoadBalancerMetadata>): StartNetworkLoadBalancerMetadata;
};
export declare const StopNetworkLoadBalancerRequest: {
    encode(message: StopNetworkLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopNetworkLoadBalancerRequest;
    fromJSON(object: any): StopNetworkLoadBalancerRequest;
    toJSON(message: StopNetworkLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<StopNetworkLoadBalancerRequest>): StopNetworkLoadBalancerRequest;
};
export declare const StopNetworkLoadBalancerMetadata: {
    encode(message: StopNetworkLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopNetworkLoadBalancerMetadata;
    fromJSON(object: any): StopNetworkLoadBalancerMetadata;
    toJSON(message: StopNetworkLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<StopNetworkLoadBalancerMetadata>): StopNetworkLoadBalancerMetadata;
};
export declare const AttachNetworkLoadBalancerTargetGroupRequest: {
    encode(message: AttachNetworkLoadBalancerTargetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachNetworkLoadBalancerTargetGroupRequest;
    fromJSON(object: any): AttachNetworkLoadBalancerTargetGroupRequest;
    toJSON(message: AttachNetworkLoadBalancerTargetGroupRequest): unknown;
    fromPartial(object: DeepPartial<AttachNetworkLoadBalancerTargetGroupRequest>): AttachNetworkLoadBalancerTargetGroupRequest;
};
export declare const AttachNetworkLoadBalancerTargetGroupMetadata: {
    encode(message: AttachNetworkLoadBalancerTargetGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachNetworkLoadBalancerTargetGroupMetadata;
    fromJSON(object: any): AttachNetworkLoadBalancerTargetGroupMetadata;
    toJSON(message: AttachNetworkLoadBalancerTargetGroupMetadata): unknown;
    fromPartial(object: DeepPartial<AttachNetworkLoadBalancerTargetGroupMetadata>): AttachNetworkLoadBalancerTargetGroupMetadata;
};
export declare const DetachNetworkLoadBalancerTargetGroupRequest: {
    encode(message: DetachNetworkLoadBalancerTargetGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetachNetworkLoadBalancerTargetGroupRequest;
    fromJSON(object: any): DetachNetworkLoadBalancerTargetGroupRequest;
    toJSON(message: DetachNetworkLoadBalancerTargetGroupRequest): unknown;
    fromPartial(object: DeepPartial<DetachNetworkLoadBalancerTargetGroupRequest>): DetachNetworkLoadBalancerTargetGroupRequest;
};
export declare const DetachNetworkLoadBalancerTargetGroupMetadata: {
    encode(message: DetachNetworkLoadBalancerTargetGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetachNetworkLoadBalancerTargetGroupMetadata;
    fromJSON(object: any): DetachNetworkLoadBalancerTargetGroupMetadata;
    toJSON(message: DetachNetworkLoadBalancerTargetGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DetachNetworkLoadBalancerTargetGroupMetadata>): DetachNetworkLoadBalancerTargetGroupMetadata;
};
export declare const AddNetworkLoadBalancerListenerRequest: {
    encode(message: AddNetworkLoadBalancerListenerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddNetworkLoadBalancerListenerRequest;
    fromJSON(object: any): AddNetworkLoadBalancerListenerRequest;
    toJSON(message: AddNetworkLoadBalancerListenerRequest): unknown;
    fromPartial(object: DeepPartial<AddNetworkLoadBalancerListenerRequest>): AddNetworkLoadBalancerListenerRequest;
};
export declare const AddNetworkLoadBalancerListenerMetadata: {
    encode(message: AddNetworkLoadBalancerListenerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddNetworkLoadBalancerListenerMetadata;
    fromJSON(object: any): AddNetworkLoadBalancerListenerMetadata;
    toJSON(message: AddNetworkLoadBalancerListenerMetadata): unknown;
    fromPartial(object: DeepPartial<AddNetworkLoadBalancerListenerMetadata>): AddNetworkLoadBalancerListenerMetadata;
};
export declare const RemoveNetworkLoadBalancerListenerRequest: {
    encode(message: RemoveNetworkLoadBalancerListenerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveNetworkLoadBalancerListenerRequest;
    fromJSON(object: any): RemoveNetworkLoadBalancerListenerRequest;
    toJSON(message: RemoveNetworkLoadBalancerListenerRequest): unknown;
    fromPartial(object: DeepPartial<RemoveNetworkLoadBalancerListenerRequest>): RemoveNetworkLoadBalancerListenerRequest;
};
export declare const RemoveNetworkLoadBalancerListenerMetadata: {
    encode(message: RemoveNetworkLoadBalancerListenerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveNetworkLoadBalancerListenerMetadata;
    fromJSON(object: any): RemoveNetworkLoadBalancerListenerMetadata;
    toJSON(message: RemoveNetworkLoadBalancerListenerMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveNetworkLoadBalancerListenerMetadata>): RemoveNetworkLoadBalancerListenerMetadata;
};
export declare const ListNetworkLoadBalancerOperationsRequest: {
    encode(message: ListNetworkLoadBalancerOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkLoadBalancerOperationsRequest;
    fromJSON(object: any): ListNetworkLoadBalancerOperationsRequest;
    toJSON(message: ListNetworkLoadBalancerOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListNetworkLoadBalancerOperationsRequest>): ListNetworkLoadBalancerOperationsRequest;
};
export declare const ListNetworkLoadBalancerOperationsResponse: {
    encode(message: ListNetworkLoadBalancerOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkLoadBalancerOperationsResponse;
    fromJSON(object: any): ListNetworkLoadBalancerOperationsResponse;
    toJSON(message: ListNetworkLoadBalancerOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListNetworkLoadBalancerOperationsResponse>): ListNetworkLoadBalancerOperationsResponse;
};
export declare const GetTargetStatesRequest: {
    encode(message: GetTargetStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTargetStatesRequest;
    fromJSON(object: any): GetTargetStatesRequest;
    toJSON(message: GetTargetStatesRequest): unknown;
    fromPartial(object: DeepPartial<GetTargetStatesRequest>): GetTargetStatesRequest;
};
export declare const GetTargetStatesResponse: {
    encode(message: GetTargetStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTargetStatesResponse;
    fromJSON(object: any): GetTargetStatesResponse;
    toJSON(message: GetTargetStatesResponse): unknown;
    fromPartial(object: DeepPartial<GetTargetStatesResponse>): GetTargetStatesResponse;
};
export declare const ExternalAddressSpec: {
    encode(message: ExternalAddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalAddressSpec;
    fromJSON(object: any): ExternalAddressSpec;
    toJSON(message: ExternalAddressSpec): unknown;
    fromPartial(object: DeepPartial<ExternalAddressSpec>): ExternalAddressSpec;
};
export declare const InternalAddressSpec: {
    encode(message: InternalAddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InternalAddressSpec;
    fromJSON(object: any): InternalAddressSpec;
    toJSON(message: InternalAddressSpec): unknown;
    fromPartial(object: DeepPartial<InternalAddressSpec>): InternalAddressSpec;
};
export declare const ListenerSpec: {
    encode(message: ListenerSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListenerSpec;
    fromJSON(object: any): ListenerSpec;
    toJSON(message: ListenerSpec): unknown;
    fromPartial(object: DeepPartial<ListenerSpec>): ListenerSpec;
};
/** A set of methods for managing NetworkLoadBalancer resources. */
export declare const NetworkLoadBalancerServiceService: {
    /**
     * Returns the specified NetworkLoadBalancer resource.
     *
     * Get the list of available NetworkLoadBalancer resources by making a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetNetworkLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetNetworkLoadBalancerRequest;
        readonly responseSerialize: (value: NetworkLoadBalancer) => Buffer;
        readonly responseDeserialize: (value: Buffer) => NetworkLoadBalancer;
    };
    /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNetworkLoadBalancersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNetworkLoadBalancersRequest;
        readonly responseSerialize: (value: ListNetworkLoadBalancersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNetworkLoadBalancersResponse;
    };
    /** Creates a network load balancer in the specified folder using the data specified in the request. */
    readonly create: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateNetworkLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateNetworkLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified network load balancer. */
    readonly update: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateNetworkLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateNetworkLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified network load balancer. */
    readonly delete: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteNetworkLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteNetworkLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Starts load balancing and health checking with the specified network load balancer with specified settings.
     * Changes network load balancer status to `` ACTIVE ``.
     */
    readonly start: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartNetworkLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartNetworkLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Stops load balancing and health checking with the specified network load balancer.
     * Changes load balancer status to `` STOPPED ``.
     */
    readonly stop: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopNetworkLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopNetworkLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Attaches a target group to the specified network load balancer. */
    readonly attachTargetGroup: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AttachTargetGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AttachNetworkLoadBalancerTargetGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AttachNetworkLoadBalancerTargetGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Detaches the target group from the specified network load balancer. */
    readonly detachTargetGroup: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/DetachTargetGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DetachNetworkLoadBalancerTargetGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DetachNetworkLoadBalancerTargetGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Gets states of target resources in the attached target group. */
    readonly getTargetStates: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/GetTargetStates";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTargetStatesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTargetStatesRequest;
        readonly responseSerialize: (value: GetTargetStatesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetTargetStatesResponse;
    };
    /** Adds a listener to the specified network load balancer. */
    readonly addListener: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AddListener";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddNetworkLoadBalancerListenerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddNetworkLoadBalancerListenerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Removes the listener from the specified network load balancer. */
    readonly removeListener: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/RemoveListener";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveNetworkLoadBalancerListenerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveNetworkLoadBalancerListenerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified network load balancer. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNetworkLoadBalancerOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNetworkLoadBalancerOperationsRequest;
        readonly responseSerialize: (value: ListNetworkLoadBalancerOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNetworkLoadBalancerOperationsResponse;
    };
};
export interface NetworkLoadBalancerServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified NetworkLoadBalancer resource.
     *
     * Get the list of available NetworkLoadBalancer resources by making a [List] request.
     */
    get: handleUnaryCall<GetNetworkLoadBalancerRequest, NetworkLoadBalancer>;
    /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
    list: handleUnaryCall<ListNetworkLoadBalancersRequest, ListNetworkLoadBalancersResponse>;
    /** Creates a network load balancer in the specified folder using the data specified in the request. */
    create: handleUnaryCall<CreateNetworkLoadBalancerRequest, Operation>;
    /** Updates the specified network load balancer. */
    update: handleUnaryCall<UpdateNetworkLoadBalancerRequest, Operation>;
    /** Deletes the specified network load balancer. */
    delete: handleUnaryCall<DeleteNetworkLoadBalancerRequest, Operation>;
    /**
     * Starts load balancing and health checking with the specified network load balancer with specified settings.
     * Changes network load balancer status to `` ACTIVE ``.
     */
    start: handleUnaryCall<StartNetworkLoadBalancerRequest, Operation>;
    /**
     * Stops load balancing and health checking with the specified network load balancer.
     * Changes load balancer status to `` STOPPED ``.
     */
    stop: handleUnaryCall<StopNetworkLoadBalancerRequest, Operation>;
    /** Attaches a target group to the specified network load balancer. */
    attachTargetGroup: handleUnaryCall<AttachNetworkLoadBalancerTargetGroupRequest, Operation>;
    /** Detaches the target group from the specified network load balancer. */
    detachTargetGroup: handleUnaryCall<DetachNetworkLoadBalancerTargetGroupRequest, Operation>;
    /** Gets states of target resources in the attached target group. */
    getTargetStates: handleUnaryCall<GetTargetStatesRequest, GetTargetStatesResponse>;
    /** Adds a listener to the specified network load balancer. */
    addListener: handleUnaryCall<AddNetworkLoadBalancerListenerRequest, Operation>;
    /** Removes the listener from the specified network load balancer. */
    removeListener: handleUnaryCall<RemoveNetworkLoadBalancerListenerRequest, Operation>;
    /** Lists operations for the specified network load balancer. */
    listOperations: handleUnaryCall<ListNetworkLoadBalancerOperationsRequest, ListNetworkLoadBalancerOperationsResponse>;
}
export interface NetworkLoadBalancerServiceClient extends Client {
    /**
     * Returns the specified NetworkLoadBalancer resource.
     *
     * Get the list of available NetworkLoadBalancer resources by making a [List] request.
     */
    get(request: GetNetworkLoadBalancerRequest, callback: (error: ServiceError | null, response: NetworkLoadBalancer) => void): ClientUnaryCall;
    get(request: GetNetworkLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: NetworkLoadBalancer) => void): ClientUnaryCall;
    get(request: GetNetworkLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: NetworkLoadBalancer) => void): ClientUnaryCall;
    /** Retrieves the list of NetworkLoadBalancer resources in the specified folder. */
    list(request: ListNetworkLoadBalancersRequest, callback: (error: ServiceError | null, response: ListNetworkLoadBalancersResponse) => void): ClientUnaryCall;
    list(request: ListNetworkLoadBalancersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNetworkLoadBalancersResponse) => void): ClientUnaryCall;
    list(request: ListNetworkLoadBalancersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNetworkLoadBalancersResponse) => void): ClientUnaryCall;
    /** Creates a network load balancer in the specified folder using the data specified in the request. */
    create(request: CreateNetworkLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateNetworkLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateNetworkLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified network load balancer. */
    update(request: UpdateNetworkLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateNetworkLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateNetworkLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified network load balancer. */
    delete(request: DeleteNetworkLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteNetworkLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteNetworkLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Starts load balancing and health checking with the specified network load balancer with specified settings.
     * Changes network load balancer status to `` ACTIVE ``.
     */
    start(request: StartNetworkLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartNetworkLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartNetworkLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Stops load balancing and health checking with the specified network load balancer.
     * Changes load balancer status to `` STOPPED ``.
     */
    stop(request: StopNetworkLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopNetworkLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopNetworkLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Attaches a target group to the specified network load balancer. */
    attachTargetGroup(request: AttachNetworkLoadBalancerTargetGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    attachTargetGroup(request: AttachNetworkLoadBalancerTargetGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    attachTargetGroup(request: AttachNetworkLoadBalancerTargetGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Detaches the target group from the specified network load balancer. */
    detachTargetGroup(request: DetachNetworkLoadBalancerTargetGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    detachTargetGroup(request: DetachNetworkLoadBalancerTargetGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    detachTargetGroup(request: DetachNetworkLoadBalancerTargetGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Gets states of target resources in the attached target group. */
    getTargetStates(request: GetTargetStatesRequest, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    getTargetStates(request: GetTargetStatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    getTargetStates(request: GetTargetStatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    /** Adds a listener to the specified network load balancer. */
    addListener(request: AddNetworkLoadBalancerListenerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addListener(request: AddNetworkLoadBalancerListenerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addListener(request: AddNetworkLoadBalancerListenerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Removes the listener from the specified network load balancer. */
    removeListener(request: RemoveNetworkLoadBalancerListenerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeListener(request: RemoveNetworkLoadBalancerListenerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeListener(request: RemoveNetworkLoadBalancerListenerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified network load balancer. */
    listOperations(request: ListNetworkLoadBalancerOperationsRequest, callback: (error: ServiceError | null, response: ListNetworkLoadBalancerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListNetworkLoadBalancerOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNetworkLoadBalancerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListNetworkLoadBalancerOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNetworkLoadBalancerOperationsResponse) => void): ClientUnaryCall;
}
export declare const NetworkLoadBalancerServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => NetworkLoadBalancerServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
