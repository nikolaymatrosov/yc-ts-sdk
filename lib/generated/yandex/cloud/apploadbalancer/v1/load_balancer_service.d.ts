/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { LoadBalancer, AllocationPolicy, HttpListener, TlsListener, TargetState, TlsHandler } from '../../../../yandex/cloud/apploadbalancer/v1/load_balancer';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetLoadBalancerRequest {
    loadBalancerId: string;
}
export interface ListLoadBalancersRequest {
    folderId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}
export interface ListLoadBalancersResponse {
    loadBalancers: LoadBalancer[];
    nextPageToken: string;
}
export interface DeleteLoadBalancerRequest {
    loadBalancerId: string;
}
export interface DeleteLoadBalancerMetadata {
    loadBalancerId: string;
}
export interface UpdateLoadBalancerRequest {
    loadBalancerId: string;
    updateMask: FieldMask | undefined;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    listenerSpecs: ListenerSpec[];
    allocationPolicy: AllocationPolicy | undefined;
    securityGroupIds: string[];
}
export interface UpdateLoadBalancerRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateLoadBalancerMetadata {
    loadBalancerId: string;
}
export interface CreateLoadBalancerRequest {
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    regionId: string;
    networkId: string;
    listenerSpecs: ListenerSpec[];
    allocationPolicy: AllocationPolicy | undefined;
    securityGroupIds: string[];
}
export interface CreateLoadBalancerRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateLoadBalancerMetadata {
    loadBalancerId: string;
}
export interface StartLoadBalancerRequest {
    loadBalancerId: string;
}
export interface StartLoadBalancerMetadata {
    loadBalancerId: string;
}
export interface StopLoadBalancerRequest {
    loadBalancerId: string;
}
export interface StopLoadBalancerMetadata {
    loadBalancerId: string;
}
export interface AddListenerRequest {
    loadBalancerId: string;
    listenerSpec: ListenerSpec | undefined;
}
export interface AddListenerMetadata {
    loadBalancerId: string;
    listenerName: string;
}
export interface RemoveListenerRequest {
    loadBalancerId: string;
    name: string;
}
export interface RemoveListenerMetadata {
    loadBalancerId: string;
    listenerName: string;
}
export interface UpdateListenerRequest {
    loadBalancerId: string;
    updateMask: FieldMask | undefined;
    listenerSpec: ListenerSpec | undefined;
}
export interface UpdateListenerMetadata {
    loadBalancerId: string;
    listenerName: string;
}
export interface AddressSpec {
    externalIpv4AddressSpec: ExternalIpv4AddressSpec | undefined;
    internalIpv4AddressSpec: InternalIpv4AddressSpec | undefined;
    externalIpv6AddressSpec: ExternalIpv6AddressSpec | undefined;
}
export interface ExternalIpv4AddressSpec {
    address: string;
}
export interface InternalIpv4AddressSpec {
    address: string;
    subnetId: string;
}
export interface ExternalIpv6AddressSpec {
    address: string;
}
export interface EndpointSpec {
    addressSpecs: AddressSpec[];
    ports: number[];
}
export interface ListenerSpec {
    name: string;
    endpointSpecs: EndpointSpec[];
    http: HttpListener | undefined;
    tls: TlsListener | undefined;
}
export interface GetTargetStatesRequest {
    loadBalancerId: string;
    backendGroupId: string;
    targetGroupId: string;
}
export interface GetTargetStatesResponse {
    targetStates: TargetState[];
}
export interface AddSniMatchRequest {
    loadBalancerId: string;
    listenerName: string;
    name: string;
    serverNames: string[];
    handler: TlsHandler | undefined;
}
export interface AddSniMatchMetadata {
    loadBalancerId: string;
    listenerName: string;
    sniMatchName: string;
}
export interface RemoveSniMatchRequest {
    loadBalancerId: string;
    listenerName: string;
    sniMatchName: string;
}
export interface RemoveSniMatchMetadata {
    loadBalancerId: string;
    listenerName: string;
    sniMatchName: string;
}
export interface UpdateSniMatchRequest {
    loadBalancerId: string;
    listenerName: string;
    name: string;
    updateMask: FieldMask | undefined;
    serverNames: string[];
    handler: TlsHandler | undefined;
}
export interface UpdateSniMatchMetadata {
    loadBalancerId: string;
    listenerName: string;
    sniMatchName: string;
}
export interface ListLoadBalancerOperationsRequest {
    /**
     * ID of the load balancer to get operations for.
     *
     * To get the load balancer ID, use a [LoadBalancerService.List] request.
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
    /** List of operations for the specified target group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListLoadBalancerOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListLoadBalancerOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetLoadBalancerRequest: {
    encode(message: GetLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLoadBalancerRequest;
    fromJSON(object: any): GetLoadBalancerRequest;
    toJSON(message: GetLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<GetLoadBalancerRequest>): GetLoadBalancerRequest;
};
export declare const ListLoadBalancersRequest: {
    encode(message: ListLoadBalancersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancersRequest;
    fromJSON(object: any): ListLoadBalancersRequest;
    toJSON(message: ListLoadBalancersRequest): unknown;
    fromPartial(object: DeepPartial<ListLoadBalancersRequest>): ListLoadBalancersRequest;
};
export declare const ListLoadBalancersResponse: {
    encode(message: ListLoadBalancersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancersResponse;
    fromJSON(object: any): ListLoadBalancersResponse;
    toJSON(message: ListLoadBalancersResponse): unknown;
    fromPartial(object: DeepPartial<ListLoadBalancersResponse>): ListLoadBalancersResponse;
};
export declare const DeleteLoadBalancerRequest: {
    encode(message: DeleteLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLoadBalancerRequest;
    fromJSON(object: any): DeleteLoadBalancerRequest;
    toJSON(message: DeleteLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<DeleteLoadBalancerRequest>): DeleteLoadBalancerRequest;
};
export declare const DeleteLoadBalancerMetadata: {
    encode(message: DeleteLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteLoadBalancerMetadata;
    fromJSON(object: any): DeleteLoadBalancerMetadata;
    toJSON(message: DeleteLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteLoadBalancerMetadata>): DeleteLoadBalancerMetadata;
};
export declare const UpdateLoadBalancerRequest: {
    encode(message: UpdateLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLoadBalancerRequest;
    fromJSON(object: any): UpdateLoadBalancerRequest;
    toJSON(message: UpdateLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<UpdateLoadBalancerRequest>): UpdateLoadBalancerRequest;
};
export declare const UpdateLoadBalancerRequest_LabelsEntry: {
    encode(message: UpdateLoadBalancerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLoadBalancerRequest_LabelsEntry;
    fromJSON(object: any): UpdateLoadBalancerRequest_LabelsEntry;
    toJSON(message: UpdateLoadBalancerRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateLoadBalancerRequest_LabelsEntry>): UpdateLoadBalancerRequest_LabelsEntry;
};
export declare const UpdateLoadBalancerMetadata: {
    encode(message: UpdateLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLoadBalancerMetadata;
    fromJSON(object: any): UpdateLoadBalancerMetadata;
    toJSON(message: UpdateLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateLoadBalancerMetadata>): UpdateLoadBalancerMetadata;
};
export declare const CreateLoadBalancerRequest: {
    encode(message: CreateLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLoadBalancerRequest;
    fromJSON(object: any): CreateLoadBalancerRequest;
    toJSON(message: CreateLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<CreateLoadBalancerRequest>): CreateLoadBalancerRequest;
};
export declare const CreateLoadBalancerRequest_LabelsEntry: {
    encode(message: CreateLoadBalancerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLoadBalancerRequest_LabelsEntry;
    fromJSON(object: any): CreateLoadBalancerRequest_LabelsEntry;
    toJSON(message: CreateLoadBalancerRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateLoadBalancerRequest_LabelsEntry>): CreateLoadBalancerRequest_LabelsEntry;
};
export declare const CreateLoadBalancerMetadata: {
    encode(message: CreateLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateLoadBalancerMetadata;
    fromJSON(object: any): CreateLoadBalancerMetadata;
    toJSON(message: CreateLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<CreateLoadBalancerMetadata>): CreateLoadBalancerMetadata;
};
export declare const StartLoadBalancerRequest: {
    encode(message: StartLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartLoadBalancerRequest;
    fromJSON(object: any): StartLoadBalancerRequest;
    toJSON(message: StartLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<StartLoadBalancerRequest>): StartLoadBalancerRequest;
};
export declare const StartLoadBalancerMetadata: {
    encode(message: StartLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartLoadBalancerMetadata;
    fromJSON(object: any): StartLoadBalancerMetadata;
    toJSON(message: StartLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<StartLoadBalancerMetadata>): StartLoadBalancerMetadata;
};
export declare const StopLoadBalancerRequest: {
    encode(message: StopLoadBalancerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopLoadBalancerRequest;
    fromJSON(object: any): StopLoadBalancerRequest;
    toJSON(message: StopLoadBalancerRequest): unknown;
    fromPartial(object: DeepPartial<StopLoadBalancerRequest>): StopLoadBalancerRequest;
};
export declare const StopLoadBalancerMetadata: {
    encode(message: StopLoadBalancerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopLoadBalancerMetadata;
    fromJSON(object: any): StopLoadBalancerMetadata;
    toJSON(message: StopLoadBalancerMetadata): unknown;
    fromPartial(object: DeepPartial<StopLoadBalancerMetadata>): StopLoadBalancerMetadata;
};
export declare const AddListenerRequest: {
    encode(message: AddListenerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddListenerRequest;
    fromJSON(object: any): AddListenerRequest;
    toJSON(message: AddListenerRequest): unknown;
    fromPartial(object: DeepPartial<AddListenerRequest>): AddListenerRequest;
};
export declare const AddListenerMetadata: {
    encode(message: AddListenerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddListenerMetadata;
    fromJSON(object: any): AddListenerMetadata;
    toJSON(message: AddListenerMetadata): unknown;
    fromPartial(object: DeepPartial<AddListenerMetadata>): AddListenerMetadata;
};
export declare const RemoveListenerRequest: {
    encode(message: RemoveListenerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveListenerRequest;
    fromJSON(object: any): RemoveListenerRequest;
    toJSON(message: RemoveListenerRequest): unknown;
    fromPartial(object: DeepPartial<RemoveListenerRequest>): RemoveListenerRequest;
};
export declare const RemoveListenerMetadata: {
    encode(message: RemoveListenerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveListenerMetadata;
    fromJSON(object: any): RemoveListenerMetadata;
    toJSON(message: RemoveListenerMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveListenerMetadata>): RemoveListenerMetadata;
};
export declare const UpdateListenerRequest: {
    encode(message: UpdateListenerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateListenerRequest;
    fromJSON(object: any): UpdateListenerRequest;
    toJSON(message: UpdateListenerRequest): unknown;
    fromPartial(object: DeepPartial<UpdateListenerRequest>): UpdateListenerRequest;
};
export declare const UpdateListenerMetadata: {
    encode(message: UpdateListenerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateListenerMetadata;
    fromJSON(object: any): UpdateListenerMetadata;
    toJSON(message: UpdateListenerMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateListenerMetadata>): UpdateListenerMetadata;
};
export declare const AddressSpec: {
    encode(message: AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddressSpec;
    fromJSON(object: any): AddressSpec;
    toJSON(message: AddressSpec): unknown;
    fromPartial(object: DeepPartial<AddressSpec>): AddressSpec;
};
export declare const ExternalIpv4AddressSpec: {
    encode(message: ExternalIpv4AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv4AddressSpec;
    fromJSON(object: any): ExternalIpv4AddressSpec;
    toJSON(message: ExternalIpv4AddressSpec): unknown;
    fromPartial(object: DeepPartial<ExternalIpv4AddressSpec>): ExternalIpv4AddressSpec;
};
export declare const InternalIpv4AddressSpec: {
    encode(message: InternalIpv4AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InternalIpv4AddressSpec;
    fromJSON(object: any): InternalIpv4AddressSpec;
    toJSON(message: InternalIpv4AddressSpec): unknown;
    fromPartial(object: DeepPartial<InternalIpv4AddressSpec>): InternalIpv4AddressSpec;
};
export declare const ExternalIpv6AddressSpec: {
    encode(message: ExternalIpv6AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv6AddressSpec;
    fromJSON(object: any): ExternalIpv6AddressSpec;
    toJSON(message: ExternalIpv6AddressSpec): unknown;
    fromPartial(object: DeepPartial<ExternalIpv6AddressSpec>): ExternalIpv6AddressSpec;
};
export declare const EndpointSpec: {
    encode(message: EndpointSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EndpointSpec;
    fromJSON(object: any): EndpointSpec;
    toJSON(message: EndpointSpec): unknown;
    fromPartial(object: DeepPartial<EndpointSpec>): EndpointSpec;
};
export declare const ListenerSpec: {
    encode(message: ListenerSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListenerSpec;
    fromJSON(object: any): ListenerSpec;
    toJSON(message: ListenerSpec): unknown;
    fromPartial(object: DeepPartial<ListenerSpec>): ListenerSpec;
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
export declare const AddSniMatchRequest: {
    encode(message: AddSniMatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddSniMatchRequest;
    fromJSON(object: any): AddSniMatchRequest;
    toJSON(message: AddSniMatchRequest): unknown;
    fromPartial(object: DeepPartial<AddSniMatchRequest>): AddSniMatchRequest;
};
export declare const AddSniMatchMetadata: {
    encode(message: AddSniMatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddSniMatchMetadata;
    fromJSON(object: any): AddSniMatchMetadata;
    toJSON(message: AddSniMatchMetadata): unknown;
    fromPartial(object: DeepPartial<AddSniMatchMetadata>): AddSniMatchMetadata;
};
export declare const RemoveSniMatchRequest: {
    encode(message: RemoveSniMatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveSniMatchRequest;
    fromJSON(object: any): RemoveSniMatchRequest;
    toJSON(message: RemoveSniMatchRequest): unknown;
    fromPartial(object: DeepPartial<RemoveSniMatchRequest>): RemoveSniMatchRequest;
};
export declare const RemoveSniMatchMetadata: {
    encode(message: RemoveSniMatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveSniMatchMetadata;
    fromJSON(object: any): RemoveSniMatchMetadata;
    toJSON(message: RemoveSniMatchMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveSniMatchMetadata>): RemoveSniMatchMetadata;
};
export declare const UpdateSniMatchRequest: {
    encode(message: UpdateSniMatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSniMatchRequest;
    fromJSON(object: any): UpdateSniMatchRequest;
    toJSON(message: UpdateSniMatchRequest): unknown;
    fromPartial(object: DeepPartial<UpdateSniMatchRequest>): UpdateSniMatchRequest;
};
export declare const UpdateSniMatchMetadata: {
    encode(message: UpdateSniMatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSniMatchMetadata;
    fromJSON(object: any): UpdateSniMatchMetadata;
    toJSON(message: UpdateSniMatchMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateSniMatchMetadata>): UpdateSniMatchMetadata;
};
export declare const ListLoadBalancerOperationsRequest: {
    encode(message: ListLoadBalancerOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancerOperationsRequest;
    fromJSON(object: any): ListLoadBalancerOperationsRequest;
    toJSON(message: ListLoadBalancerOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListLoadBalancerOperationsRequest>): ListLoadBalancerOperationsRequest;
};
export declare const ListLoadBalancerOperationsResponse: {
    encode(message: ListLoadBalancerOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListLoadBalancerOperationsResponse;
    fromJSON(object: any): ListLoadBalancerOperationsResponse;
    toJSON(message: ListLoadBalancerOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListLoadBalancerOperationsResponse>): ListLoadBalancerOperationsResponse;
};
export declare const LoadBalancerServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLoadBalancerRequest;
        readonly responseSerialize: (value: LoadBalancer) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LoadBalancer;
    };
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListLoadBalancersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListLoadBalancersRequest;
        readonly responseSerialize: (value: ListLoadBalancersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListLoadBalancersResponse;
    };
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly start: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly stop: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopLoadBalancerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopLoadBalancerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** AddListener/UpdateListener technically do the same, but have different semantics. */
    readonly addListener: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddListenerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddListenerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly removeListener: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveListenerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveListenerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly updateListener: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateListenerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateListenerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly addSniMatch: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddSniMatch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddSniMatchRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddSniMatchRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly updateSniMatch: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateSniMatch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateSniMatchRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateSniMatchRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly removeSniMatch: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveSniMatch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveSniMatchRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveSniMatchRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Returns zonal state of each target within target group
     * for a given backend group and load balancer.
     */
    readonly getTargetStates: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTargetStatesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTargetStatesRequest;
        readonly responseSerialize: (value: GetTargetStatesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetTargetStatesResponse;
    };
    /** Lists operations for the specified load balancer. */
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
    get: handleUnaryCall<GetLoadBalancerRequest, LoadBalancer>;
    list: handleUnaryCall<ListLoadBalancersRequest, ListLoadBalancersResponse>;
    create: handleUnaryCall<CreateLoadBalancerRequest, Operation>;
    update: handleUnaryCall<UpdateLoadBalancerRequest, Operation>;
    delete: handleUnaryCall<DeleteLoadBalancerRequest, Operation>;
    start: handleUnaryCall<StartLoadBalancerRequest, Operation>;
    stop: handleUnaryCall<StopLoadBalancerRequest, Operation>;
    /** AddListener/UpdateListener technically do the same, but have different semantics. */
    addListener: handleUnaryCall<AddListenerRequest, Operation>;
    removeListener: handleUnaryCall<RemoveListenerRequest, Operation>;
    updateListener: handleUnaryCall<UpdateListenerRequest, Operation>;
    addSniMatch: handleUnaryCall<AddSniMatchRequest, Operation>;
    updateSniMatch: handleUnaryCall<UpdateSniMatchRequest, Operation>;
    removeSniMatch: handleUnaryCall<RemoveSniMatchRequest, Operation>;
    /**
     * Returns zonal state of each target within target group
     * for a given backend group and load balancer.
     */
    getTargetStates: handleUnaryCall<GetTargetStatesRequest, GetTargetStatesResponse>;
    /** Lists operations for the specified load balancer. */
    listOperations: handleUnaryCall<ListLoadBalancerOperationsRequest, ListLoadBalancerOperationsResponse>;
}
export interface LoadBalancerServiceClient extends Client {
    get(request: GetLoadBalancerRequest, callback: (error: ServiceError | null, response: LoadBalancer) => void): ClientUnaryCall;
    get(request: GetLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LoadBalancer) => void): ClientUnaryCall;
    get(request: GetLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LoadBalancer) => void): ClientUnaryCall;
    list(request: ListLoadBalancersRequest, callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void): ClientUnaryCall;
    list(request: ListLoadBalancersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void): ClientUnaryCall;
    list(request: ListLoadBalancersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLoadBalancersResponse) => void): ClientUnaryCall;
    create(request: CreateLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopLoadBalancerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopLoadBalancerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopLoadBalancerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** AddListener/UpdateListener technically do the same, but have different semantics. */
    addListener(request: AddListenerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addListener(request: AddListenerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addListener(request: AddListenerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeListener(request: RemoveListenerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeListener(request: RemoveListenerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeListener(request: RemoveListenerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateListener(request: UpdateListenerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateListener(request: UpdateListenerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateListener(request: UpdateListenerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addSniMatch(request: AddSniMatchRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addSniMatch(request: AddSniMatchRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addSniMatch(request: AddSniMatchRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateSniMatch(request: UpdateSniMatchRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateSniMatch(request: UpdateSniMatchRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateSniMatch(request: UpdateSniMatchRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeSniMatch(request: RemoveSniMatchRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeSniMatch(request: RemoveSniMatchRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeSniMatch(request: RemoveSniMatchRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Returns zonal state of each target within target group
     * for a given backend group and load balancer.
     */
    getTargetStates(request: GetTargetStatesRequest, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    getTargetStates(request: GetTargetStatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    getTargetStates(request: GetTargetStatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetTargetStatesResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified load balancer. */
    listOperations(request: ListLoadBalancerOperationsRequest, callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListLoadBalancerOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListLoadBalancerOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListLoadBalancerOperationsResponse) => void): ClientUnaryCall;
}
export declare const LoadBalancerServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => LoadBalancerServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
