/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { LoadBalancer, AllocationPolicy, HttpListener, TlsListener, TargetState, TlsHandler } from '../../../../yandex/cloud/apploadbalancer/v1/load_balancer';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetLoadBalancerRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest';
    /**
     * ID of the application load balancer to return.
     *
     * To get the application load balancer ID, make a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
}
export interface ListLoadBalancersRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest';
    /**
     * ID of the folder to list application load balancers in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListLoadBalancersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListLoadBalancersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters application load balancers listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [LoadBalancer.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-load-balancer`.
     */
    filter: string;
}
export interface ListLoadBalancersResponse {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse';
    /** List of application load balancers in the specified folder. */
    loadBalancers: LoadBalancer[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListLoadBalancersRequest.page_size], use `next_page_token` as the value
     * for the [ListLoadBalancersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteLoadBalancerRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest';
    /**
     * ID of the application load balancer to delete.
     *
     * To get the application load balancer ID, make a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
}
export interface DeleteLoadBalancerMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata';
    /** ID of the application load balancer that is being deleted. */
    loadBalancerId: string;
}
export interface UpdateLoadBalancerRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest';
    /**
     * ID of the application load balancer to update.
     *
     * To get the application load balancer ID, make a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
    /** Field mask that specifies which attributes of the application load balancer should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name for the application load balancer.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the application load balancer. */
    description: string;
    /**
     * New application load balancer labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [LoadBalancerService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * New listeners for the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
     *
     * Existing list of listeners is completely replaced by the specified list, so if you just want to add, update,
     * or remove a listener, make a [LoadBalancerService.AddListener] request,
     * a [LoadBalancerService.UpdateListener] request, or a [LoadBalancerService.RemoveListener] request.
     */
    listenerSpecs: ListenerSpec[];
    /**
     * New locality settings of the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
     *
     * Existing locality settings are completely replaced by the specified settings,
     * so if you just want to add or remove an allocation policy:
     * 1. Get the current settings with a [LoadBalancerService.Get] request.
     * 2. Add or remove a policy in this set.
     * 3. Send the new set in this field.
     */
    allocationPolicy: AllocationPolicy | undefined;
    /**
     * ID's of new security groups attributed to the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
     *
     * Existing list of security groups is completely replaced by the specified list,
     * so if you just want to add or remove an allocation policy:
     * 1. Get the current set of security groups with a [LoadBalancerService.Get] request.
     * 2. Add or remove a group in this set.
     * 3. Send the new set in this field.
     */
    securityGroupIds: string[];
}
export interface UpdateLoadBalancerRequest_LabelsEntry {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateLoadBalancerMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata';
    /** ID of the application load balancer that is being updated. */
    loadBalancerId: string;
}
export interface CreateLoadBalancerRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest';
    /**
     * ID of the folder to create an application load balancer in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the application load balancer.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the application load balancer. */
    description: string;
    /**
     * Application load balancer labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the region that the application load balancer is located at.
     *
     * The only supported value is `ru-central1`.
     */
    regionId: string;
    /** ID of the network that the application load balancer belongs to. */
    networkId: string;
    /**
     * Listeners that belong to the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
     */
    listenerSpecs: ListenerSpec[];
    /**
     * Locality settings of the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
     */
    allocationPolicy: AllocationPolicy | undefined;
    /**
     * ID's of the security groups attributed to the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
     */
    securityGroupIds: string[];
}
export interface CreateLoadBalancerRequest_LabelsEntry {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateLoadBalancerMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata';
    /** ID of the application load balancer that is being created. */
    loadBalancerId: string;
}
export interface StartLoadBalancerRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest';
    /**
     * ID of the application load balancer to start.
     *
     * The application load balancer must have a `STOPPED` status ([LoadBalancer.status]).
     *
     * To get the application load balancer ID, make a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
}
export interface StartLoadBalancerMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata';
    /** ID of the application load balancer that is being started. */
    loadBalancerId: string;
}
export interface StopLoadBalancerRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest';
    /**
     * ID of the application load balancer to stop.
     *
     * The application load balancer must have an `ACTIVE` status ([LoadBalancer.status]).
     *
     * To get the application load balancer ID, make a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
}
export interface StopLoadBalancerMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata';
    /** ID of the application load balancer that is being stopped. */
    loadBalancerId: string;
}
export interface AddListenerRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.AddListenerRequest';
    /** ID of the application load balancer to add a listener to. */
    loadBalancerId: string;
    /** Listener to add to the application load balancer. */
    listenerSpec: ListenerSpec | undefined;
}
export interface AddListenerMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.AddListenerMetadata';
    /** ID of the application load balancer that the listener is being added to. */
    loadBalancerId: string;
    /** Name of the listener that is being added to the application load balancer. */
    listenerName: string;
}
export interface RemoveListenerRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveListenerRequest';
    /** ID of the application load balancer to remove the listener from. */
    loadBalancerId: string;
    /** Name of the listener to remove from the application load balancer. */
    name: string;
}
export interface RemoveListenerMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata';
    /** ID of the application load balancer that the listener is being removed from. */
    loadBalancerId: string;
    /** Name of the listener that is being removed from the application load balancer. */
    listenerName: string;
}
export interface UpdateListenerRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateListenerRequest';
    /** ID of the application load balancer to update the listener in. */
    loadBalancerId: string;
    /** Field mask that specifies which attributes of the listener should be updated. */
    updateMask: FieldMask | undefined;
    /** New attributes of the listener. */
    listenerSpec: ListenerSpec | undefined;
}
export interface UpdateListenerMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata';
    /** ID of the application load balancer that the listener is being updated in. */
    loadBalancerId: string;
    /** Name of the listener that is being updated. */
    listenerName: string;
}
export interface AddressSpec {
    $type: 'yandex.cloud.apploadbalancer.v1.AddressSpec';
    /** Public IPv4 endpoint address. */
    externalIpv4AddressSpec: ExternalIpv4AddressSpec | undefined;
    /**
     * Internal IPv4 endpoint address.
     *
     * To enable the use of listeners with internal addresses, [contact support](https://console.cloud.yandex.ru/support).
     */
    internalIpv4AddressSpec: InternalIpv4AddressSpec | undefined;
    /** Public IPv6 endpoint address. */
    externalIpv6AddressSpec: ExternalIpv6AddressSpec | undefined;
}
export interface ExternalIpv4AddressSpec {
    $type: 'yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec';
    /** IPv4 address. */
    address: string;
}
export interface InternalIpv4AddressSpec {
    $type: 'yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec';
    /** IPv4 address. */
    address: string;
    /** ID of the subnet that the address belongs to. */
    subnetId: string;
}
export interface ExternalIpv6AddressSpec {
    $type: 'yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec';
    /** IPv6 address. */
    address: string;
}
export interface EndpointSpec {
    $type: 'yandex.cloud.apploadbalancer.v1.EndpointSpec';
    /** Endpoint public (external) and internal addresses. */
    addressSpecs: AddressSpec[];
    /** Endpoint ports. */
    ports: number[];
}
export interface ListenerSpec {
    $type: 'yandex.cloud.apploadbalancer.v1.ListenerSpec';
    /** Name of the listener. The name is unique within the application load balancer. */
    name: string;
    /**
     * Endpoints of the listener.
     *
     * Endpoints are defined by their IP addresses and ports.
     */
    endpointSpecs: EndpointSpec[];
    /** HTTP listener settings. */
    http: HttpListener | undefined;
    /** HTTPS (HTTP over TLS) listener settings. */
    tls: TlsListener | undefined;
}
export interface GetTargetStatesRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest';
    /** ID of the application load balancer that the backend group is attributed to. */
    loadBalancerId: string;
    /** ID of the backend group that the target group is attributed to. */
    backendGroupId: string;
    /** ID of the target group to get target states of. */
    targetGroupId: string;
}
export interface GetTargetStatesResponse {
    $type: 'yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse';
    /** Target states of the specified target group. */
    targetStates: TargetState[];
}
export interface AddSniMatchRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.AddSniMatchRequest';
    /** ID of the application load balancer to add a SNI handler to. */
    loadBalancerId: string;
    /** Name of the listener to add a SNI handler to. */
    listenerName: string;
    /** Name of the SNI handler to add. */
    name: string;
    /** Server names that are matched by the SNI handler. */
    serverNames: string[];
    /** Settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
    handler: TlsHandler | undefined;
}
export interface AddSniMatchMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata';
    /** ID of the application load balancer that the SNI handler is being added to. */
    loadBalancerId: string;
    /** Name of the listener that the SNI handler is being added to. */
    listenerName: string;
    /** Name of the SNI handler that is being added to the listener. */
    sniMatchName: string;
}
export interface RemoveSniMatchRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest';
    /** ID of the application load balancer to remove the SNI handler from. */
    loadBalancerId: string;
    /** Name of the listener te remove the SNI handler from. */
    listenerName: string;
    /** Name of the SNI handler to remove. */
    sniMatchName: string;
}
export interface RemoveSniMatchMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata';
    /** ID of the application load balancer that the SNI handler is being removed from. */
    loadBalancerId: string;
    /** Name of the listener that the SNI handler is being removed from. */
    listenerName: string;
    /** Name of the SNI handler that is being removed. */
    sniMatchName: string;
}
export interface UpdateSniMatchRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest';
    /** ID of the application load balancer to update the SNI handler in. */
    loadBalancerId: string;
    /** Name of the listener to update the SNI handler in. */
    listenerName: string;
    /** Name of the SNI handler to update. */
    name: string;
    /** Field mask that specifies which attributes of the SNI handler should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New server names that are matched by the SNI handler.
     *
     * Existing set of server names is completely replaced by the provided set, so if you just want
     * to add or remove a server name:
     * 1. Get the current set of server names with a [LoadBalancerService.Get] request.
     * 2. Add or remove a server name in this set.
     * 3. Send the new set in this field.
     */
    serverNames: string[];
    /** New settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
    handler: TlsHandler | undefined;
}
export interface UpdateSniMatchMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata';
    /** ID of the application load balancer that the SNI handler is being updated in. */
    loadBalancerId: string;
    /** Name of the listener that the SNI handler is being updated in. */
    listenerName: string;
    /** Name of the SNI handler that is being updated. */
    sniMatchName: string;
}
export interface ListLoadBalancerOperationsRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest';
    /**
     * ID of the application load balancer to get operations for.
     *
     * To get the application load balancer ID, use a [LoadBalancerService.List] request.
     */
    loadBalancerId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListLoadBalancerOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListLoadBalancerOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListLoadBalancerOperationsResponse {
    $type: 'yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse';
    /** List of operations for the specified application load balancer. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListLoadBalancerOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListLoadBalancerOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest";
    encode(message: GetLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLoadBalancerRequest;
    fromJSON(object: any): GetLoadBalancerRequest;
    toJSON(message: GetLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<GetLoadBalancerRequest>): GetLoadBalancerRequest;
};
export declare const ListLoadBalancersRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest";
    encode(message: ListLoadBalancersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancersRequest;
    fromJSON(object: any): ListLoadBalancersRequest;
    toJSON(message: ListLoadBalancersRequest): unknown;
    fromPartial(object: DeepPartial<ListLoadBalancersRequest>): ListLoadBalancersRequest;
};
export declare const ListLoadBalancersResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse";
    encode(message: ListLoadBalancersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancersResponse;
    fromJSON(object: any): ListLoadBalancersResponse;
    toJSON(message: ListLoadBalancersResponse): unknown;
    fromPartial(object: DeepPartial<ListLoadBalancersResponse>): ListLoadBalancersResponse;
};
export declare const DeleteLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest";
    encode(message: DeleteLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLoadBalancerRequest;
    fromJSON(object: any): DeleteLoadBalancerRequest;
    toJSON(message: DeleteLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<DeleteLoadBalancerRequest>): DeleteLoadBalancerRequest;
};
export declare const DeleteLoadBalancerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata";
    encode(message: DeleteLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLoadBalancerMetadata;
    fromJSON(object: any): DeleteLoadBalancerMetadata;
    toJSON(message: DeleteLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteLoadBalancerMetadata>): DeleteLoadBalancerMetadata;
};
export declare const UpdateLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest";
    encode(message: UpdateLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLoadBalancerRequest;
    fromJSON(object: any): UpdateLoadBalancerRequest;
    toJSON(message: UpdateLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<UpdateLoadBalancerRequest>): UpdateLoadBalancerRequest;
};
export declare const UpdateLoadBalancerRequest_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.LabelsEntry";
    encode(message: UpdateLoadBalancerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLoadBalancerRequest_LabelsEntry;
    fromJSON(object: any): UpdateLoadBalancerRequest_LabelsEntry;
    toJSON(message: UpdateLoadBalancerRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateLoadBalancerRequest_LabelsEntry>): UpdateLoadBalancerRequest_LabelsEntry;
};
export declare const UpdateLoadBalancerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata";
    encode(message: UpdateLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLoadBalancerMetadata;
    fromJSON(object: any): UpdateLoadBalancerMetadata;
    toJSON(message: UpdateLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateLoadBalancerMetadata>): UpdateLoadBalancerMetadata;
};
export declare const CreateLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest";
    encode(message: CreateLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLoadBalancerRequest;
    fromJSON(object: any): CreateLoadBalancerRequest;
    toJSON(message: CreateLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<CreateLoadBalancerRequest>): CreateLoadBalancerRequest;
};
export declare const CreateLoadBalancerRequest_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.LabelsEntry";
    encode(message: CreateLoadBalancerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLoadBalancerRequest_LabelsEntry;
    fromJSON(object: any): CreateLoadBalancerRequest_LabelsEntry;
    toJSON(message: CreateLoadBalancerRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateLoadBalancerRequest_LabelsEntry>): CreateLoadBalancerRequest_LabelsEntry;
};
export declare const CreateLoadBalancerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata";
    encode(message: CreateLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLoadBalancerMetadata;
    fromJSON(object: any): CreateLoadBalancerMetadata;
    toJSON(message: CreateLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<CreateLoadBalancerMetadata>): CreateLoadBalancerMetadata;
};
export declare const StartLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest";
    encode(message: StartLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartLoadBalancerRequest;
    fromJSON(object: any): StartLoadBalancerRequest;
    toJSON(message: StartLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<StartLoadBalancerRequest>): StartLoadBalancerRequest;
};
export declare const StartLoadBalancerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata";
    encode(message: StartLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartLoadBalancerMetadata;
    fromJSON(object: any): StartLoadBalancerMetadata;
    toJSON(message: StartLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<StartLoadBalancerMetadata>): StartLoadBalancerMetadata;
};
export declare const StopLoadBalancerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest";
    encode(message: StopLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopLoadBalancerRequest;
    fromJSON(object: any): StopLoadBalancerRequest;
    toJSON(message: StopLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<StopLoadBalancerRequest>): StopLoadBalancerRequest;
};
export declare const StopLoadBalancerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata";
    encode(message: StopLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopLoadBalancerMetadata;
    fromJSON(object: any): StopLoadBalancerMetadata;
    toJSON(message: StopLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<StopLoadBalancerMetadata>): StopLoadBalancerMetadata;
};
export declare const AddListenerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.AddListenerRequest";
    encode(message: AddListenerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddListenerRequest;
    fromJSON(object: any): AddListenerRequest;
    toJSON(message: AddListenerRequest): unknown;
    fromPartial(object: DeepPartial<AddListenerRequest>): AddListenerRequest;
};
export declare const AddListenerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.AddListenerMetadata";
    encode(message: AddListenerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddListenerMetadata;
    fromJSON(object: any): AddListenerMetadata;
    toJSON(message: AddListenerMetadata): unknown;
    fromPartial(object: DeepPartial<AddListenerMetadata>): AddListenerMetadata;
};
export declare const RemoveListenerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerRequest";
    encode(message: RemoveListenerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveListenerRequest;
    fromJSON(object: any): RemoveListenerRequest;
    toJSON(message: RemoveListenerRequest): unknown;
    fromPartial(object: DeepPartial<RemoveListenerRequest>): RemoveListenerRequest;
};
export declare const RemoveListenerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata";
    encode(message: RemoveListenerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveListenerMetadata;
    fromJSON(object: any): RemoveListenerMetadata;
    toJSON(message: RemoveListenerMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveListenerMetadata>): RemoveListenerMetadata;
};
export declare const UpdateListenerRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerRequest";
    encode(message: UpdateListenerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateListenerRequest;
    fromJSON(object: any): UpdateListenerRequest;
    toJSON(message: UpdateListenerRequest): unknown;
    fromPartial(object: DeepPartial<UpdateListenerRequest>): UpdateListenerRequest;
};
export declare const UpdateListenerMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata";
    encode(message: UpdateListenerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateListenerMetadata;
    fromJSON(object: any): UpdateListenerMetadata;
    toJSON(message: UpdateListenerMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateListenerMetadata>): UpdateListenerMetadata;
};
export declare const AddressSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.AddressSpec";
    encode(message: AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddressSpec;
    fromJSON(object: any): AddressSpec;
    toJSON(message: AddressSpec): unknown;
    fromPartial(object: DeepPartial<AddressSpec>): AddressSpec;
};
export declare const ExternalIpv4AddressSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec";
    encode(message: ExternalIpv4AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv4AddressSpec;
    fromJSON(object: any): ExternalIpv4AddressSpec;
    toJSON(message: ExternalIpv4AddressSpec): unknown;
    fromPartial(object: DeepPartial<ExternalIpv4AddressSpec>): ExternalIpv4AddressSpec;
};
export declare const InternalIpv4AddressSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec";
    encode(message: InternalIpv4AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InternalIpv4AddressSpec;
    fromJSON(object: any): InternalIpv4AddressSpec;
    toJSON(message: InternalIpv4AddressSpec): unknown;
    fromPartial(object: DeepPartial<InternalIpv4AddressSpec>): InternalIpv4AddressSpec;
};
export declare const ExternalIpv6AddressSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec";
    encode(message: ExternalIpv6AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv6AddressSpec;
    fromJSON(object: any): ExternalIpv6AddressSpec;
    toJSON(message: ExternalIpv6AddressSpec): unknown;
    fromPartial(object: DeepPartial<ExternalIpv6AddressSpec>): ExternalIpv6AddressSpec;
};
export declare const EndpointSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.EndpointSpec";
    encode(message: EndpointSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EndpointSpec;
    fromJSON(object: any): EndpointSpec;
    toJSON(message: EndpointSpec): unknown;
    fromPartial(object: DeepPartial<EndpointSpec>): EndpointSpec;
};
export declare const ListenerSpec: {
    $type: "yandex.cloud.apploadbalancer.v1.ListenerSpec";
    encode(message: ListenerSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListenerSpec;
    fromJSON(object: any): ListenerSpec;
    toJSON(message: ListenerSpec): unknown;
    fromPartial(object: DeepPartial<ListenerSpec>): ListenerSpec;
};
export declare const GetTargetStatesRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest";
    encode(message: GetTargetStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTargetStatesRequest;
    fromJSON(object: any): GetTargetStatesRequest;
    toJSON(message: GetTargetStatesRequest): unknown;
    fromPartial(object: DeepPartial<GetTargetStatesRequest>): GetTargetStatesRequest;
};
export declare const GetTargetStatesResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse";
    encode(message: GetTargetStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTargetStatesResponse;
    fromJSON(object: any): GetTargetStatesResponse;
    toJSON(message: GetTargetStatesResponse): unknown;
    fromPartial(object: DeepPartial<GetTargetStatesResponse>): GetTargetStatesResponse;
};
export declare const AddSniMatchRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchRequest";
    encode(message: AddSniMatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddSniMatchRequest;
    fromJSON(object: any): AddSniMatchRequest;
    toJSON(message: AddSniMatchRequest): unknown;
    fromPartial(object: DeepPartial<AddSniMatchRequest>): AddSniMatchRequest;
};
export declare const AddSniMatchMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata";
    encode(message: AddSniMatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddSniMatchMetadata;
    fromJSON(object: any): AddSniMatchMetadata;
    toJSON(message: AddSniMatchMetadata): unknown;
    fromPartial(object: DeepPartial<AddSniMatchMetadata>): AddSniMatchMetadata;
};
export declare const RemoveSniMatchRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest";
    encode(message: RemoveSniMatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveSniMatchRequest;
    fromJSON(object: any): RemoveSniMatchRequest;
    toJSON(message: RemoveSniMatchRequest): unknown;
    fromPartial(object: DeepPartial<RemoveSniMatchRequest>): RemoveSniMatchRequest;
};
export declare const RemoveSniMatchMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata";
    encode(message: RemoveSniMatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveSniMatchMetadata;
    fromJSON(object: any): RemoveSniMatchMetadata;
    toJSON(message: RemoveSniMatchMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveSniMatchMetadata>): RemoveSniMatchMetadata;
};
export declare const UpdateSniMatchRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest";
    encode(message: UpdateSniMatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSniMatchRequest;
    fromJSON(object: any): UpdateSniMatchRequest;
    toJSON(message: UpdateSniMatchRequest): unknown;
    fromPartial(object: DeepPartial<UpdateSniMatchRequest>): UpdateSniMatchRequest;
};
export declare const UpdateSniMatchMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata";
    encode(message: UpdateSniMatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSniMatchMetadata;
    fromJSON(object: any): UpdateSniMatchMetadata;
    toJSON(message: UpdateSniMatchMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateSniMatchMetadata>): UpdateSniMatchMetadata;
};
export declare const ListLoadBalancerOperationsRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest";
    encode(message: ListLoadBalancerOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancerOperationsRequest;
    fromJSON(object: any): ListLoadBalancerOperationsRequest;
    toJSON(message: ListLoadBalancerOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListLoadBalancerOperationsRequest>): ListLoadBalancerOperationsRequest;
};
export declare const ListLoadBalancerOperationsResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse";
    encode(message: ListLoadBalancerOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancerOperationsResponse;
    fromJSON(object: any): ListLoadBalancerOperationsResponse;
    toJSON(message: ListLoadBalancerOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListLoadBalancerOperationsResponse>): ListLoadBalancerOperationsResponse;
};
/** A set of methods for managing application load balancers. */
export declare const LoadBalancerServiceService: {
    /**
     * Returns the specified application load balancer.
     *
     * To get the list of all available application load balancers, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLoadBalancerRequest;
        readonly responseSerialize: (value: LoadBalancer) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LoadBalancer;
    };
    /** Lists application load balancers in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLoadBalancersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLoadBalancersRequest;
        readonly responseSerialize: (value: ListLoadBalancersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLoadBalancersResponse;
    };
    /** Creates an application load balancer in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified application load balancer. */
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified application load balancer. */
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified application load balancer. */
    readonly start: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified application load balancer. */
    readonly stop: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Adds a listener to the specified application load balancer. */
    readonly addListener: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddListenerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddListenerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified listener. */
    readonly removeListener: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveListenerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveListenerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified listener of the specified application load balancer. */
    readonly updateListener: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateListenerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateListenerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Adds a SNI handler to the specified listener.
     *
     * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    readonly addSniMatch: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddSniMatch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddSniMatchRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddSniMatchRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified SNI handler of the specified listener.
     *
     * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    readonly updateSniMatch: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateSniMatch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSniMatchRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSniMatchRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified SNI handler.
     *
     * This request does not allow to delete [TlsListener.default_handler].
     */
    readonly removeSniMatch: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveSniMatch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveSniMatchRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveSniMatchRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
    readonly getTargetStates: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTargetStatesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTargetStatesRequest;
        readonly responseSerialize: (value: GetTargetStatesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetTargetStatesResponse;
    };
    /** Lists operations for the specified application load balancer. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLoadBalancerOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLoadBalancerOperationsRequest;
        readonly responseSerialize: (value: ListLoadBalancerOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLoadBalancerOperationsResponse;
    };
};
export interface LoadBalancerServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified application load balancer.
     *
     * To get the list of all available application load balancers, make a [List] request.
     */
    get: handleUnaryCall<GetLoadBalancerRequest, LoadBalancer>;
    /** Lists application load balancers in the specified folder. */
    list: handleUnaryCall<ListLoadBalancersRequest, ListLoadBalancersResponse>;
    /** Creates an application load balancer in the specified folder. */
    create: handleUnaryCall<CreateLoadBalancerRequest, Operation>;
    /** Updates the specified application load balancer. */
    update: handleUnaryCall<UpdateLoadBalancerRequest, Operation>;
    /** Deletes the specified application load balancer. */
    delete: handleUnaryCall<DeleteLoadBalancerRequest, Operation>;
    /** Starts the specified application load balancer. */
    start: handleUnaryCall<StartLoadBalancerRequest, Operation>;
    /** Stops the specified application load balancer. */
    stop: handleUnaryCall<StopLoadBalancerRequest, Operation>;
    /** Adds a listener to the specified application load balancer. */
    addListener: handleUnaryCall<AddListenerRequest, Operation>;
    /** Deletes the specified listener. */
    removeListener: handleUnaryCall<RemoveListenerRequest, Operation>;
    /** Updates the specified listener of the specified application load balancer. */
    updateListener: handleUnaryCall<UpdateListenerRequest, Operation>;
    /**
     * Adds a SNI handler to the specified listener.
     *
     * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    addSniMatch: handleUnaryCall<AddSniMatchRequest, Operation>;
    /**
     * Updates the specified SNI handler of the specified listener.
     *
     * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    updateSniMatch: handleUnaryCall<UpdateSniMatchRequest, Operation>;
    /**
     * Deletes the specified SNI handler.
     *
     * This request does not allow to delete [TlsListener.default_handler].
     */
    removeSniMatch: handleUnaryCall<RemoveSniMatchRequest, Operation>;
    /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
    getTargetStates: handleUnaryCall<GetTargetStatesRequest, GetTargetStatesResponse>;
    /** Lists operations for the specified application load balancer. */
    listOperations: handleUnaryCall<ListLoadBalancerOperationsRequest, ListLoadBalancerOperationsResponse>;
}
export interface LoadBalancerServiceClient extends Client {
    /**
     * Returns the specified application load balancer.
     *
     * To get the list of all available application load balancers, make a [List] request.
     */
    get(request: GetLoadBalancerRequest, callback: (error: ServiceError | null, response: LoadBalancer) => void): ClientUnaryCall;
    get(request: GetLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LoadBalancer) => void): ClientUnaryCall;
    get(request: GetLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LoadBalancer) => void): ClientUnaryCall;
    /** Lists application load balancers in the specified folder. */
    list(request: ListLoadBalancersRequest, callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void): ClientUnaryCall;
    list(request: ListLoadBalancersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void): ClientUnaryCall;
    list(request: ListLoadBalancersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void): ClientUnaryCall;
    /** Creates an application load balancer in the specified folder. */
    create(request: CreateLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified application load balancer. */
    update(request: UpdateLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified application load balancer. */
    delete(request: DeleteLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified application load balancer. */
    start(request: StartLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified application load balancer. */
    stop(request: StopLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Adds a listener to the specified application load balancer. */
    addListener(request: AddListenerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addListener(request: AddListenerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addListener(request: AddListenerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified listener. */
    removeListener(request: RemoveListenerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeListener(request: RemoveListenerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeListener(request: RemoveListenerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified listener of the specified application load balancer. */
    updateListener(request: UpdateListenerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateListener(request: UpdateListenerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateListener(request: UpdateListenerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Adds a SNI handler to the specified listener.
     *
     * This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    addSniMatch(request: AddSniMatchRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addSniMatch(request: AddSniMatchRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addSniMatch(request: AddSniMatchRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified SNI handler of the specified listener.
     *
     * This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
     */
    updateSniMatch(request: UpdateSniMatchRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateSniMatch(request: UpdateSniMatchRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateSniMatch(request: UpdateSniMatchRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified SNI handler.
     *
     * This request does not allow to delete [TlsListener.default_handler].
     */
    removeSniMatch(request: RemoveSniMatchRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeSniMatch(request: RemoveSniMatchRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeSniMatch(request: RemoveSniMatchRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the statuses of all targets of the specified backend group in all their availability zones. */
    getTargetStates(request: GetTargetStatesRequest, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    getTargetStates(request: GetTargetStatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    getTargetStates(request: GetTargetStatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified application load balancer. */
    listOperations(request: ListLoadBalancerOperationsRequest, callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListLoadBalancerOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListLoadBalancerOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void): ClientUnaryCall;
}
export declare const LoadBalancerServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => LoadBalancerServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
