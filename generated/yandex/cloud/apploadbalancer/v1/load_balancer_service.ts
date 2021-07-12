/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import {
    LoadBalancer,
    AllocationPolicy,
    HttpListener,
    TlsListener,
    TargetState,
    TlsHandler,
} from '../../../../yandex/cloud/apploadbalancer/v1/load_balancer';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';

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
    labels: { [key: string]: string };
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
    labels: { [key: string]: string };
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

const baseGetLoadBalancerRequest: object = { loadBalancerId: '' };

export const GetLoadBalancerRequest = {
    encode(
        message: GetLoadBalancerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetLoadBalancerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetLoadBalancerRequest,
        } as GetLoadBalancerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLoadBalancerRequest {
        const message = {
            ...baseGetLoadBalancerRequest,
        } as GetLoadBalancerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },

    toJSON(message: GetLoadBalancerRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetLoadBalancerRequest>
    ): GetLoadBalancerRequest {
        const message = {
            ...baseGetLoadBalancerRequest,
        } as GetLoadBalancerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },
};

const baseListLoadBalancersRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListLoadBalancersRequest = {
    encode(
        message: ListLoadBalancersRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListLoadBalancersRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLoadBalancersRequest,
        } as ListLoadBalancersRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListLoadBalancersRequest {
        const message = {
            ...baseListLoadBalancersRequest,
        } as ListLoadBalancersRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        } else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        return message;
    },

    toJSON(message: ListLoadBalancersRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListLoadBalancersRequest>
    ): ListLoadBalancersRequest {
        const message = {
            ...baseListLoadBalancersRequest,
        } as ListLoadBalancersRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        } else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        return message;
    },
};

const baseListLoadBalancersResponse: object = { nextPageToken: '' };

export const ListLoadBalancersResponse = {
    encode(
        message: ListLoadBalancersResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.loadBalancers) {
            LoadBalancer.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListLoadBalancersResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLoadBalancersResponse,
        } as ListLoadBalancersResponse;
        message.loadBalancers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancers.push(
                        LoadBalancer.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListLoadBalancersResponse {
        const message = {
            ...baseListLoadBalancersResponse,
        } as ListLoadBalancersResponse;
        message.loadBalancers = [];
        if (
            object.loadBalancers !== undefined &&
            object.loadBalancers !== null
        ) {
            for (const e of object.loadBalancers) {
                message.loadBalancers.push(LoadBalancer.fromJSON(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = String(object.nextPageToken);
        } else {
            message.nextPageToken = '';
        }
        return message;
    },

    toJSON(message: ListLoadBalancersResponse): unknown {
        const obj: any = {};
        if (message.loadBalancers) {
            obj.loadBalancers = message.loadBalancers.map((e) =>
                e ? LoadBalancer.toJSON(e) : undefined
            );
        } else {
            obj.loadBalancers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListLoadBalancersResponse>
    ): ListLoadBalancersResponse {
        const message = {
            ...baseListLoadBalancersResponse,
        } as ListLoadBalancersResponse;
        message.loadBalancers = [];
        if (
            object.loadBalancers !== undefined &&
            object.loadBalancers !== null
        ) {
            for (const e of object.loadBalancers) {
                message.loadBalancers.push(LoadBalancer.fromPartial(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = object.nextPageToken;
        } else {
            message.nextPageToken = '';
        }
        return message;
    },
};

const baseDeleteLoadBalancerRequest: object = { loadBalancerId: '' };

export const DeleteLoadBalancerRequest = {
    encode(
        message: DeleteLoadBalancerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteLoadBalancerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteLoadBalancerRequest,
        } as DeleteLoadBalancerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteLoadBalancerRequest {
        const message = {
            ...baseDeleteLoadBalancerRequest,
        } as DeleteLoadBalancerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },

    toJSON(message: DeleteLoadBalancerRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteLoadBalancerRequest>
    ): DeleteLoadBalancerRequest {
        const message = {
            ...baseDeleteLoadBalancerRequest,
        } as DeleteLoadBalancerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },
};

const baseDeleteLoadBalancerMetadata: object = { loadBalancerId: '' };

export const DeleteLoadBalancerMetadata = {
    encode(
        message: DeleteLoadBalancerMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteLoadBalancerMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteLoadBalancerMetadata,
        } as DeleteLoadBalancerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteLoadBalancerMetadata {
        const message = {
            ...baseDeleteLoadBalancerMetadata,
        } as DeleteLoadBalancerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },

    toJSON(message: DeleteLoadBalancerMetadata): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteLoadBalancerMetadata>
    ): DeleteLoadBalancerMetadata {
        const message = {
            ...baseDeleteLoadBalancerMetadata,
        } as DeleteLoadBalancerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },
};

const baseUpdateLoadBalancerRequest: object = {
    loadBalancerId: '',
    name: '',
    description: '',
    securityGroupIds: '',
};

export const UpdateLoadBalancerRequest = {
    encode(
        message: UpdateLoadBalancerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateLoadBalancerRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        for (const v of message.listenerSpecs) {
            ListenerSpec.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            AllocationPolicy.encode(
                message.allocationPolicy,
                writer.uint32(58).fork()
            ).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateLoadBalancerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLoadBalancerRequest,
        } as UpdateLoadBalancerRequest;
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateLoadBalancerRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.listenerSpecs.push(
                        ListenerSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 7:
                    message.allocationPolicy = AllocationPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateLoadBalancerRequest {
        const message = {
            ...baseUpdateLoadBalancerRequest,
        } as UpdateLoadBalancerRequest;
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (
            object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null
        ) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(ListenerSpec.fromJSON(e));
            }
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromJSON(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: UpdateLoadBalancerRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.listenerSpecs) {
            obj.listenerSpecs = message.listenerSpecs.map((e) =>
                e ? ListenerSpec.toJSON(e) : undefined
            );
        } else {
            obj.listenerSpecs = [];
        }
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateLoadBalancerRequest>
    ): UpdateLoadBalancerRequest {
        const message = {
            ...baseUpdateLoadBalancerRequest,
        } as UpdateLoadBalancerRequest;
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (
            object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null
        ) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(ListenerSpec.fromPartial(e));
            }
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromPartial(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        return message;
    },
};

const baseUpdateLoadBalancerRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const UpdateLoadBalancerRequest_LabelsEntry = {
    encode(
        message: UpdateLoadBalancerRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateLoadBalancerRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLoadBalancerRequest_LabelsEntry,
        } as UpdateLoadBalancerRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateLoadBalancerRequest_LabelsEntry {
        const message = {
            ...baseUpdateLoadBalancerRequest_LabelsEntry,
        } as UpdateLoadBalancerRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: UpdateLoadBalancerRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateLoadBalancerRequest_LabelsEntry>
    ): UpdateLoadBalancerRequest_LabelsEntry {
        const message = {
            ...baseUpdateLoadBalancerRequest_LabelsEntry,
        } as UpdateLoadBalancerRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseUpdateLoadBalancerMetadata: object = { loadBalancerId: '' };

export const UpdateLoadBalancerMetadata = {
    encode(
        message: UpdateLoadBalancerMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateLoadBalancerMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLoadBalancerMetadata,
        } as UpdateLoadBalancerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateLoadBalancerMetadata {
        const message = {
            ...baseUpdateLoadBalancerMetadata,
        } as UpdateLoadBalancerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },

    toJSON(message: UpdateLoadBalancerMetadata): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateLoadBalancerMetadata>
    ): UpdateLoadBalancerMetadata {
        const message = {
            ...baseUpdateLoadBalancerMetadata,
        } as UpdateLoadBalancerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },
};

const baseCreateLoadBalancerRequest: object = {
    folderId: '',
    name: '',
    description: '',
    regionId: '',
    networkId: '',
    securityGroupIds: '',
};

export const CreateLoadBalancerRequest = {
    encode(
        message: CreateLoadBalancerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateLoadBalancerRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.regionId !== '') {
            writer.uint32(42).string(message.regionId);
        }
        if (message.networkId !== '') {
            writer.uint32(50).string(message.networkId);
        }
        for (const v of message.listenerSpecs) {
            ListenerSpec.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            AllocationPolicy.encode(
                message.allocationPolicy,
                writer.uint32(66).fork()
            ).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(74).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateLoadBalancerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLoadBalancerRequest,
        } as CreateLoadBalancerRequest;
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateLoadBalancerRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.regionId = reader.string();
                    break;
                case 6:
                    message.networkId = reader.string();
                    break;
                case 7:
                    message.listenerSpecs.push(
                        ListenerSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 8:
                    message.allocationPolicy = AllocationPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateLoadBalancerRequest {
        const message = {
            ...baseCreateLoadBalancerRequest,
        } as CreateLoadBalancerRequest;
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = String(object.regionId);
        } else {
            message.regionId = '';
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (
            object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null
        ) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(ListenerSpec.fromJSON(e));
            }
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromJSON(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: CreateLoadBalancerRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.listenerSpecs) {
            obj.listenerSpecs = message.listenerSpecs.map((e) =>
                e ? ListenerSpec.toJSON(e) : undefined
            );
        } else {
            obj.listenerSpecs = [];
        }
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateLoadBalancerRequest>
    ): CreateLoadBalancerRequest {
        const message = {
            ...baseCreateLoadBalancerRequest,
        } as CreateLoadBalancerRequest;
        message.labels = {};
        message.listenerSpecs = [];
        message.securityGroupIds = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = object.regionId;
        } else {
            message.regionId = '';
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (
            object.listenerSpecs !== undefined &&
            object.listenerSpecs !== null
        ) {
            for (const e of object.listenerSpecs) {
                message.listenerSpecs.push(ListenerSpec.fromPartial(e));
            }
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromPartial(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        return message;
    },
};

const baseCreateLoadBalancerRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const CreateLoadBalancerRequest_LabelsEntry = {
    encode(
        message: CreateLoadBalancerRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateLoadBalancerRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLoadBalancerRequest_LabelsEntry,
        } as CreateLoadBalancerRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateLoadBalancerRequest_LabelsEntry {
        const message = {
            ...baseCreateLoadBalancerRequest_LabelsEntry,
        } as CreateLoadBalancerRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: CreateLoadBalancerRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateLoadBalancerRequest_LabelsEntry>
    ): CreateLoadBalancerRequest_LabelsEntry {
        const message = {
            ...baseCreateLoadBalancerRequest_LabelsEntry,
        } as CreateLoadBalancerRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseCreateLoadBalancerMetadata: object = { loadBalancerId: '' };

export const CreateLoadBalancerMetadata = {
    encode(
        message: CreateLoadBalancerMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateLoadBalancerMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLoadBalancerMetadata,
        } as CreateLoadBalancerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateLoadBalancerMetadata {
        const message = {
            ...baseCreateLoadBalancerMetadata,
        } as CreateLoadBalancerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },

    toJSON(message: CreateLoadBalancerMetadata): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateLoadBalancerMetadata>
    ): CreateLoadBalancerMetadata {
        const message = {
            ...baseCreateLoadBalancerMetadata,
        } as CreateLoadBalancerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },
};

const baseStartLoadBalancerRequest: object = { loadBalancerId: '' };

export const StartLoadBalancerRequest = {
    encode(
        message: StartLoadBalancerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StartLoadBalancerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartLoadBalancerRequest,
        } as StartLoadBalancerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartLoadBalancerRequest {
        const message = {
            ...baseStartLoadBalancerRequest,
        } as StartLoadBalancerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },

    toJSON(message: StartLoadBalancerRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StartLoadBalancerRequest>
    ): StartLoadBalancerRequest {
        const message = {
            ...baseStartLoadBalancerRequest,
        } as StartLoadBalancerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },
};

const baseStartLoadBalancerMetadata: object = { loadBalancerId: '' };

export const StartLoadBalancerMetadata = {
    encode(
        message: StartLoadBalancerMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StartLoadBalancerMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartLoadBalancerMetadata,
        } as StartLoadBalancerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartLoadBalancerMetadata {
        const message = {
            ...baseStartLoadBalancerMetadata,
        } as StartLoadBalancerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },

    toJSON(message: StartLoadBalancerMetadata): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StartLoadBalancerMetadata>
    ): StartLoadBalancerMetadata {
        const message = {
            ...baseStartLoadBalancerMetadata,
        } as StartLoadBalancerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },
};

const baseStopLoadBalancerRequest: object = { loadBalancerId: '' };

export const StopLoadBalancerRequest = {
    encode(
        message: StopLoadBalancerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopLoadBalancerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopLoadBalancerRequest,
        } as StopLoadBalancerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopLoadBalancerRequest {
        const message = {
            ...baseStopLoadBalancerRequest,
        } as StopLoadBalancerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },

    toJSON(message: StopLoadBalancerRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StopLoadBalancerRequest>
    ): StopLoadBalancerRequest {
        const message = {
            ...baseStopLoadBalancerRequest,
        } as StopLoadBalancerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },
};

const baseStopLoadBalancerMetadata: object = { loadBalancerId: '' };

export const StopLoadBalancerMetadata = {
    encode(
        message: StopLoadBalancerMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopLoadBalancerMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopLoadBalancerMetadata,
        } as StopLoadBalancerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopLoadBalancerMetadata {
        const message = {
            ...baseStopLoadBalancerMetadata,
        } as StopLoadBalancerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },

    toJSON(message: StopLoadBalancerMetadata): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StopLoadBalancerMetadata>
    ): StopLoadBalancerMetadata {
        const message = {
            ...baseStopLoadBalancerMetadata,
        } as StopLoadBalancerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        return message;
    },
};

const baseAddListenerRequest: object = { loadBalancerId: '' };

export const AddListenerRequest = {
    encode(
        message: AddListenerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerSpec !== undefined) {
            ListenerSpec.encode(
                message.listenerSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddListenerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddListenerRequest } as AddListenerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerSpec = ListenerSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddListenerRequest {
        const message = { ...baseAddListenerRequest } as AddListenerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerSpec !== undefined && object.listenerSpec !== null) {
            message.listenerSpec = ListenerSpec.fromJSON(object.listenerSpec);
        } else {
            message.listenerSpec = undefined;
        }
        return message;
    },

    toJSON(message: AddListenerRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerSpec !== undefined &&
            (obj.listenerSpec = message.listenerSpec
                ? ListenerSpec.toJSON(message.listenerSpec)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<AddListenerRequest>): AddListenerRequest {
        const message = { ...baseAddListenerRequest } as AddListenerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerSpec !== undefined && object.listenerSpec !== null) {
            message.listenerSpec = ListenerSpec.fromPartial(
                object.listenerSpec
            );
        } else {
            message.listenerSpec = undefined;
        }
        return message;
    },
};

const baseAddListenerMetadata: object = {
    loadBalancerId: '',
    listenerName: '',
};

export const AddListenerMetadata = {
    encode(
        message: AddListenerMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddListenerMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddListenerMetadata } as AddListenerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddListenerMetadata {
        const message = { ...baseAddListenerMetadata } as AddListenerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        } else {
            message.listenerName = '';
        }
        return message;
    },

    toJSON(message: AddListenerMetadata): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        return obj;
    },

    fromPartial(object: DeepPartial<AddListenerMetadata>): AddListenerMetadata {
        const message = { ...baseAddListenerMetadata } as AddListenerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        } else {
            message.listenerName = '';
        }
        return message;
    },
};

const baseRemoveListenerRequest: object = { loadBalancerId: '', name: '' };

export const RemoveListenerRequest = {
    encode(
        message: RemoveListenerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveListenerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveListenerRequest,
        } as RemoveListenerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveListenerRequest {
        const message = {
            ...baseRemoveListenerRequest,
        } as RemoveListenerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        return message;
    },

    toJSON(message: RemoveListenerRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RemoveListenerRequest>
    ): RemoveListenerRequest {
        const message = {
            ...baseRemoveListenerRequest,
        } as RemoveListenerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        return message;
    },
};

const baseRemoveListenerMetadata: object = {
    loadBalancerId: '',
    listenerName: '',
};

export const RemoveListenerMetadata = {
    encode(
        message: RemoveListenerMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveListenerMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveListenerMetadata,
        } as RemoveListenerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveListenerMetadata {
        const message = {
            ...baseRemoveListenerMetadata,
        } as RemoveListenerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        } else {
            message.listenerName = '';
        }
        return message;
    },

    toJSON(message: RemoveListenerMetadata): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RemoveListenerMetadata>
    ): RemoveListenerMetadata {
        const message = {
            ...baseRemoveListenerMetadata,
        } as RemoveListenerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        } else {
            message.listenerName = '';
        }
        return message;
    },
};

const baseUpdateListenerRequest: object = { loadBalancerId: '' };

export const UpdateListenerRequest = {
    encode(
        message: UpdateListenerRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.listenerSpec !== undefined) {
            ListenerSpec.encode(
                message.listenerSpec,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateListenerRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateListenerRequest,
        } as UpdateListenerRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.listenerSpec = ListenerSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateListenerRequest {
        const message = {
            ...baseUpdateListenerRequest,
        } as UpdateListenerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.listenerSpec !== undefined && object.listenerSpec !== null) {
            message.listenerSpec = ListenerSpec.fromJSON(object.listenerSpec);
        } else {
            message.listenerSpec = undefined;
        }
        return message;
    },

    toJSON(message: UpdateListenerRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.listenerSpec !== undefined &&
            (obj.listenerSpec = message.listenerSpec
                ? ListenerSpec.toJSON(message.listenerSpec)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateListenerRequest>
    ): UpdateListenerRequest {
        const message = {
            ...baseUpdateListenerRequest,
        } as UpdateListenerRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.listenerSpec !== undefined && object.listenerSpec !== null) {
            message.listenerSpec = ListenerSpec.fromPartial(
                object.listenerSpec
            );
        } else {
            message.listenerSpec = undefined;
        }
        return message;
    },
};

const baseUpdateListenerMetadata: object = {
    loadBalancerId: '',
    listenerName: '',
};

export const UpdateListenerMetadata = {
    encode(
        message: UpdateListenerMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateListenerMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateListenerMetadata,
        } as UpdateListenerMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateListenerMetadata {
        const message = {
            ...baseUpdateListenerMetadata,
        } as UpdateListenerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        } else {
            message.listenerName = '';
        }
        return message;
    },

    toJSON(message: UpdateListenerMetadata): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateListenerMetadata>
    ): UpdateListenerMetadata {
        const message = {
            ...baseUpdateListenerMetadata,
        } as UpdateListenerMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        } else {
            message.listenerName = '';
        }
        return message;
    },
};

const baseAddressSpec: object = {};

export const AddressSpec = {
    encode(
        message: AddressSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.externalIpv4AddressSpec !== undefined) {
            ExternalIpv4AddressSpec.encode(
                message.externalIpv4AddressSpec,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.internalIpv4AddressSpec !== undefined) {
            InternalIpv4AddressSpec.encode(
                message.internalIpv4AddressSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.externalIpv6AddressSpec !== undefined) {
            ExternalIpv6AddressSpec.encode(
                message.externalIpv6AddressSpec,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddressSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddressSpec } as AddressSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalIpv4AddressSpec =
                        ExternalIpv4AddressSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.internalIpv4AddressSpec =
                        InternalIpv4AddressSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.externalIpv6AddressSpec =
                        ExternalIpv6AddressSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddressSpec {
        const message = { ...baseAddressSpec } as AddressSpec;
        if (
            object.externalIpv4AddressSpec !== undefined &&
            object.externalIpv4AddressSpec !== null
        ) {
            message.externalIpv4AddressSpec = ExternalIpv4AddressSpec.fromJSON(
                object.externalIpv4AddressSpec
            );
        } else {
            message.externalIpv4AddressSpec = undefined;
        }
        if (
            object.internalIpv4AddressSpec !== undefined &&
            object.internalIpv4AddressSpec !== null
        ) {
            message.internalIpv4AddressSpec = InternalIpv4AddressSpec.fromJSON(
                object.internalIpv4AddressSpec
            );
        } else {
            message.internalIpv4AddressSpec = undefined;
        }
        if (
            object.externalIpv6AddressSpec !== undefined &&
            object.externalIpv6AddressSpec !== null
        ) {
            message.externalIpv6AddressSpec = ExternalIpv6AddressSpec.fromJSON(
                object.externalIpv6AddressSpec
            );
        } else {
            message.externalIpv6AddressSpec = undefined;
        }
        return message;
    },

    toJSON(message: AddressSpec): unknown {
        const obj: any = {};
        message.externalIpv4AddressSpec !== undefined &&
            (obj.externalIpv4AddressSpec = message.externalIpv4AddressSpec
                ? ExternalIpv4AddressSpec.toJSON(
                      message.externalIpv4AddressSpec
                  )
                : undefined);
        message.internalIpv4AddressSpec !== undefined &&
            (obj.internalIpv4AddressSpec = message.internalIpv4AddressSpec
                ? InternalIpv4AddressSpec.toJSON(
                      message.internalIpv4AddressSpec
                  )
                : undefined);
        message.externalIpv6AddressSpec !== undefined &&
            (obj.externalIpv6AddressSpec = message.externalIpv6AddressSpec
                ? ExternalIpv6AddressSpec.toJSON(
                      message.externalIpv6AddressSpec
                  )
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<AddressSpec>): AddressSpec {
        const message = { ...baseAddressSpec } as AddressSpec;
        if (
            object.externalIpv4AddressSpec !== undefined &&
            object.externalIpv4AddressSpec !== null
        ) {
            message.externalIpv4AddressSpec =
                ExternalIpv4AddressSpec.fromPartial(
                    object.externalIpv4AddressSpec
                );
        } else {
            message.externalIpv4AddressSpec = undefined;
        }
        if (
            object.internalIpv4AddressSpec !== undefined &&
            object.internalIpv4AddressSpec !== null
        ) {
            message.internalIpv4AddressSpec =
                InternalIpv4AddressSpec.fromPartial(
                    object.internalIpv4AddressSpec
                );
        } else {
            message.internalIpv4AddressSpec = undefined;
        }
        if (
            object.externalIpv6AddressSpec !== undefined &&
            object.externalIpv6AddressSpec !== null
        ) {
            message.externalIpv6AddressSpec =
                ExternalIpv6AddressSpec.fromPartial(
                    object.externalIpv6AddressSpec
                );
        } else {
            message.externalIpv6AddressSpec = undefined;
        }
        return message;
    },
};

const baseExternalIpv4AddressSpec: object = { address: '' };

export const ExternalIpv4AddressSpec = {
    encode(
        message: ExternalIpv4AddressSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ExternalIpv4AddressSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalIpv4AddressSpec,
        } as ExternalIpv4AddressSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalIpv4AddressSpec {
        const message = {
            ...baseExternalIpv4AddressSpec,
        } as ExternalIpv4AddressSpec;
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        return message;
    },

    toJSON(message: ExternalIpv4AddressSpec): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ExternalIpv4AddressSpec>
    ): ExternalIpv4AddressSpec {
        const message = {
            ...baseExternalIpv4AddressSpec,
        } as ExternalIpv4AddressSpec;
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        return message;
    },
};

const baseInternalIpv4AddressSpec: object = { address: '', subnetId: '' };

export const InternalIpv4AddressSpec = {
    encode(
        message: InternalIpv4AddressSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): InternalIpv4AddressSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInternalIpv4AddressSpec,
        } as InternalIpv4AddressSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InternalIpv4AddressSpec {
        const message = {
            ...baseInternalIpv4AddressSpec,
        } as InternalIpv4AddressSpec;
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        return message;
    },

    toJSON(message: InternalIpv4AddressSpec): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<InternalIpv4AddressSpec>
    ): InternalIpv4AddressSpec {
        const message = {
            ...baseInternalIpv4AddressSpec,
        } as InternalIpv4AddressSpec;
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        return message;
    },
};

const baseExternalIpv6AddressSpec: object = { address: '' };

export const ExternalIpv6AddressSpec = {
    encode(
        message: ExternalIpv6AddressSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ExternalIpv6AddressSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalIpv6AddressSpec,
        } as ExternalIpv6AddressSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalIpv6AddressSpec {
        const message = {
            ...baseExternalIpv6AddressSpec,
        } as ExternalIpv6AddressSpec;
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        return message;
    },

    toJSON(message: ExternalIpv6AddressSpec): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ExternalIpv6AddressSpec>
    ): ExternalIpv6AddressSpec {
        const message = {
            ...baseExternalIpv6AddressSpec,
        } as ExternalIpv6AddressSpec;
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        return message;
    },
};

const baseEndpointSpec: object = { ports: 0 };

export const EndpointSpec = {
    encode(
        message: EndpointSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.addressSpecs) {
            AddressSpec.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.ports) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EndpointSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEndpointSpec } as EndpointSpec;
        message.addressSpecs = [];
        message.ports = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressSpecs.push(
                        AddressSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ports.push(
                                longToNumber(reader.int64() as Long)
                            );
                        }
                    } else {
                        message.ports.push(
                            longToNumber(reader.int64() as Long)
                        );
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): EndpointSpec {
        const message = { ...baseEndpointSpec } as EndpointSpec;
        message.addressSpecs = [];
        message.ports = [];
        if (object.addressSpecs !== undefined && object.addressSpecs !== null) {
            for (const e of object.addressSpecs) {
                message.addressSpecs.push(AddressSpec.fromJSON(e));
            }
        }
        if (object.ports !== undefined && object.ports !== null) {
            for (const e of object.ports) {
                message.ports.push(Number(e));
            }
        }
        return message;
    },

    toJSON(message: EndpointSpec): unknown {
        const obj: any = {};
        if (message.addressSpecs) {
            obj.addressSpecs = message.addressSpecs.map((e) =>
                e ? AddressSpec.toJSON(e) : undefined
            );
        } else {
            obj.addressSpecs = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map((e) => e);
        } else {
            obj.ports = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<EndpointSpec>): EndpointSpec {
        const message = { ...baseEndpointSpec } as EndpointSpec;
        message.addressSpecs = [];
        message.ports = [];
        if (object.addressSpecs !== undefined && object.addressSpecs !== null) {
            for (const e of object.addressSpecs) {
                message.addressSpecs.push(AddressSpec.fromPartial(e));
            }
        }
        if (object.ports !== undefined && object.ports !== null) {
            for (const e of object.ports) {
                message.ports.push(e);
            }
        }
        return message;
    },
};

const baseListenerSpec: object = { name: '' };

export const ListenerSpec = {
    encode(
        message: ListenerSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.endpointSpecs) {
            EndpointSpec.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.http !== undefined) {
            HttpListener.encode(
                message.http,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.tls !== undefined) {
            TlsListener.encode(message.tls, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListenerSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListenerSpec } as ListenerSpec;
        message.endpointSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.endpointSpecs.push(
                        EndpointSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 3:
                    message.http = HttpListener.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tls = TlsListener.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListenerSpec {
        const message = { ...baseListenerSpec } as ListenerSpec;
        message.endpointSpecs = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (
            object.endpointSpecs !== undefined &&
            object.endpointSpecs !== null
        ) {
            for (const e of object.endpointSpecs) {
                message.endpointSpecs.push(EndpointSpec.fromJSON(e));
            }
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpListener.fromJSON(object.http);
        } else {
            message.http = undefined;
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = TlsListener.fromJSON(object.tls);
        } else {
            message.tls = undefined;
        }
        return message;
    },

    toJSON(message: ListenerSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.endpointSpecs) {
            obj.endpointSpecs = message.endpointSpecs.map((e) =>
                e ? EndpointSpec.toJSON(e) : undefined
            );
        } else {
            obj.endpointSpecs = [];
        }
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpListener.toJSON(message.http)
                : undefined);
        message.tls !== undefined &&
            (obj.tls = message.tls
                ? TlsListener.toJSON(message.tls)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<ListenerSpec>): ListenerSpec {
        const message = { ...baseListenerSpec } as ListenerSpec;
        message.endpointSpecs = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (
            object.endpointSpecs !== undefined &&
            object.endpointSpecs !== null
        ) {
            for (const e of object.endpointSpecs) {
                message.endpointSpecs.push(EndpointSpec.fromPartial(e));
            }
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpListener.fromPartial(object.http);
        } else {
            message.http = undefined;
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = TlsListener.fromPartial(object.tls);
        } else {
            message.tls = undefined;
        }
        return message;
    },
};

const baseGetTargetStatesRequest: object = {
    loadBalancerId: '',
    backendGroupId: '',
    targetGroupId: '',
};

export const GetTargetStatesRequest = {
    encode(
        message: GetTargetStatesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.backendGroupId !== '') {
            writer.uint32(18).string(message.backendGroupId);
        }
        if (message.targetGroupId !== '') {
            writer.uint32(26).string(message.targetGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetTargetStatesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetTargetStatesRequest,
        } as GetTargetStatesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.backendGroupId = reader.string();
                    break;
                case 3:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTargetStatesRequest {
        const message = {
            ...baseGetTargetStatesRequest,
        } as GetTargetStatesRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        return message;
    },

    toJSON(message: GetTargetStatesRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetTargetStatesRequest>
    ): GetTargetStatesRequest {
        const message = {
            ...baseGetTargetStatesRequest,
        } as GetTargetStatesRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        return message;
    },
};

const baseGetTargetStatesResponse: object = {};

export const GetTargetStatesResponse = {
    encode(
        message: GetTargetStatesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.targetStates) {
            TargetState.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetTargetStatesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetTargetStatesResponse,
        } as GetTargetStatesResponse;
        message.targetStates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetStates.push(
                        TargetState.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTargetStatesResponse {
        const message = {
            ...baseGetTargetStatesResponse,
        } as GetTargetStatesResponse;
        message.targetStates = [];
        if (object.targetStates !== undefined && object.targetStates !== null) {
            for (const e of object.targetStates) {
                message.targetStates.push(TargetState.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: GetTargetStatesResponse): unknown {
        const obj: any = {};
        if (message.targetStates) {
            obj.targetStates = message.targetStates.map((e) =>
                e ? TargetState.toJSON(e) : undefined
            );
        } else {
            obj.targetStates = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetTargetStatesResponse>
    ): GetTargetStatesResponse {
        const message = {
            ...baseGetTargetStatesResponse,
        } as GetTargetStatesResponse;
        message.targetStates = [];
        if (object.targetStates !== undefined && object.targetStates !== null) {
            for (const e of object.targetStates) {
                message.targetStates.push(TargetState.fromPartial(e));
            }
        }
        return message;
    },
};

const baseAddSniMatchRequest: object = {
    loadBalancerId: '',
    listenerName: '',
    name: '',
    serverNames: '',
};

export const AddSniMatchRequest = {
    encode(
        message: AddSniMatchRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        for (const v of message.serverNames) {
            writer.uint32(34).string(v!);
        }
        if (message.handler !== undefined) {
            TlsHandler.encode(
                message.handler,
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddSniMatchRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddSniMatchRequest } as AddSniMatchRequest;
        message.serverNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.serverNames.push(reader.string());
                    break;
                case 5:
                    message.handler = TlsHandler.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddSniMatchRequest {
        const message = { ...baseAddSniMatchRequest } as AddSniMatchRequest;
        message.serverNames = [];
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        } else {
            message.listenerName = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.serverNames !== undefined && object.serverNames !== null) {
            for (const e of object.serverNames) {
                message.serverNames.push(String(e));
            }
        }
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = TlsHandler.fromJSON(object.handler);
        } else {
            message.handler = undefined;
        }
        return message;
    },

    toJSON(message: AddSniMatchRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.name !== undefined && (obj.name = message.name);
        if (message.serverNames) {
            obj.serverNames = message.serverNames.map((e) => e);
        } else {
            obj.serverNames = [];
        }
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? TlsHandler.toJSON(message.handler)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<AddSniMatchRequest>): AddSniMatchRequest {
        const message = { ...baseAddSniMatchRequest } as AddSniMatchRequest;
        message.serverNames = [];
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        } else {
            message.listenerName = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.serverNames !== undefined && object.serverNames !== null) {
            for (const e of object.serverNames) {
                message.serverNames.push(e);
            }
        }
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = TlsHandler.fromPartial(object.handler);
        } else {
            message.handler = undefined;
        }
        return message;
    },
};

const baseAddSniMatchMetadata: object = {
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};

export const AddSniMatchMetadata = {
    encode(
        message: AddSniMatchMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== '') {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddSniMatchMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddSniMatchMetadata } as AddSniMatchMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddSniMatchMetadata {
        const message = { ...baseAddSniMatchMetadata } as AddSniMatchMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        } else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = String(object.sniMatchName);
        } else {
            message.sniMatchName = '';
        }
        return message;
    },

    toJSON(message: AddSniMatchMetadata): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },

    fromPartial(object: DeepPartial<AddSniMatchMetadata>): AddSniMatchMetadata {
        const message = { ...baseAddSniMatchMetadata } as AddSniMatchMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        } else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = object.sniMatchName;
        } else {
            message.sniMatchName = '';
        }
        return message;
    },
};

const baseRemoveSniMatchRequest: object = {
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};

export const RemoveSniMatchRequest = {
    encode(
        message: RemoveSniMatchRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== '') {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveSniMatchRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveSniMatchRequest,
        } as RemoveSniMatchRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveSniMatchRequest {
        const message = {
            ...baseRemoveSniMatchRequest,
        } as RemoveSniMatchRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        } else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = String(object.sniMatchName);
        } else {
            message.sniMatchName = '';
        }
        return message;
    },

    toJSON(message: RemoveSniMatchRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RemoveSniMatchRequest>
    ): RemoveSniMatchRequest {
        const message = {
            ...baseRemoveSniMatchRequest,
        } as RemoveSniMatchRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        } else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = object.sniMatchName;
        } else {
            message.sniMatchName = '';
        }
        return message;
    },
};

const baseRemoveSniMatchMetadata: object = {
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};

export const RemoveSniMatchMetadata = {
    encode(
        message: RemoveSniMatchMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== '') {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveSniMatchMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveSniMatchMetadata,
        } as RemoveSniMatchMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveSniMatchMetadata {
        const message = {
            ...baseRemoveSniMatchMetadata,
        } as RemoveSniMatchMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        } else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = String(object.sniMatchName);
        } else {
            message.sniMatchName = '';
        }
        return message;
    },

    toJSON(message: RemoveSniMatchMetadata): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RemoveSniMatchMetadata>
    ): RemoveSniMatchMetadata {
        const message = {
            ...baseRemoveSniMatchMetadata,
        } as RemoveSniMatchMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        } else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = object.sniMatchName;
        } else {
            message.sniMatchName = '';
        }
        return message;
    },
};

const baseUpdateSniMatchRequest: object = {
    loadBalancerId: '',
    listenerName: '',
    name: '',
    serverNames: '',
};

export const UpdateSniMatchRequest = {
    encode(
        message: UpdateSniMatchRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(34).fork()
            ).ldelim();
        }
        for (const v of message.serverNames) {
            writer.uint32(42).string(v!);
        }
        if (message.handler !== undefined) {
            TlsHandler.encode(
                message.handler,
                writer.uint32(50).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSniMatchRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSniMatchRequest,
        } as UpdateSniMatchRequest;
        message.serverNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.serverNames.push(reader.string());
                    break;
                case 6:
                    message.handler = TlsHandler.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSniMatchRequest {
        const message = {
            ...baseUpdateSniMatchRequest,
        } as UpdateSniMatchRequest;
        message.serverNames = [];
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        } else {
            message.listenerName = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.serverNames !== undefined && object.serverNames !== null) {
            for (const e of object.serverNames) {
                message.serverNames.push(String(e));
            }
        }
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = TlsHandler.fromJSON(object.handler);
        } else {
            message.handler = undefined;
        }
        return message;
    },

    toJSON(message: UpdateSniMatchRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.name !== undefined && (obj.name = message.name);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        if (message.serverNames) {
            obj.serverNames = message.serverNames.map((e) => e);
        } else {
            obj.serverNames = [];
        }
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? TlsHandler.toJSON(message.handler)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSniMatchRequest>
    ): UpdateSniMatchRequest {
        const message = {
            ...baseUpdateSniMatchRequest,
        } as UpdateSniMatchRequest;
        message.serverNames = [];
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        } else {
            message.listenerName = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.serverNames !== undefined && object.serverNames !== null) {
            for (const e of object.serverNames) {
                message.serverNames.push(e);
            }
        }
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = TlsHandler.fromPartial(object.handler);
        } else {
            message.handler = undefined;
        }
        return message;
    },
};

const baseUpdateSniMatchMetadata: object = {
    loadBalancerId: '',
    listenerName: '',
    sniMatchName: '',
};

export const UpdateSniMatchMetadata = {
    encode(
        message: UpdateSniMatchMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.listenerName !== '') {
            writer.uint32(18).string(message.listenerName);
        }
        if (message.sniMatchName !== '') {
            writer.uint32(26).string(message.sniMatchName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSniMatchMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSniMatchMetadata,
        } as UpdateSniMatchMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.listenerName = reader.string();
                    break;
                case 3:
                    message.sniMatchName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSniMatchMetadata {
        const message = {
            ...baseUpdateSniMatchMetadata,
        } as UpdateSniMatchMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = String(object.listenerName);
        } else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = String(object.sniMatchName);
        } else {
            message.sniMatchName = '';
        }
        return message;
    },

    toJSON(message: UpdateSniMatchMetadata): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.listenerName !== undefined &&
            (obj.listenerName = message.listenerName);
        message.sniMatchName !== undefined &&
            (obj.sniMatchName = message.sniMatchName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSniMatchMetadata>
    ): UpdateSniMatchMetadata {
        const message = {
            ...baseUpdateSniMatchMetadata,
        } as UpdateSniMatchMetadata;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.listenerName !== undefined && object.listenerName !== null) {
            message.listenerName = object.listenerName;
        } else {
            message.listenerName = '';
        }
        if (object.sniMatchName !== undefined && object.sniMatchName !== null) {
            message.sniMatchName = object.sniMatchName;
        } else {
            message.sniMatchName = '';
        }
        return message;
    },
};

const baseListLoadBalancerOperationsRequest: object = {
    loadBalancerId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListLoadBalancerOperationsRequest = {
    encode(
        message: ListLoadBalancerOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.loadBalancerId !== '') {
            writer.uint32(10).string(message.loadBalancerId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListLoadBalancerOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLoadBalancerOperationsRequest,
        } as ListLoadBalancerOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.loadBalancerId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListLoadBalancerOperationsRequest {
        const message = {
            ...baseListLoadBalancerOperationsRequest,
        } as ListLoadBalancerOperationsRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = String(object.loadBalancerId);
        } else {
            message.loadBalancerId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        } else {
            message.pageToken = '';
        }
        return message;
    },

    toJSON(message: ListLoadBalancerOperationsRequest): unknown {
        const obj: any = {};
        message.loadBalancerId !== undefined &&
            (obj.loadBalancerId = message.loadBalancerId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListLoadBalancerOperationsRequest>
    ): ListLoadBalancerOperationsRequest {
        const message = {
            ...baseListLoadBalancerOperationsRequest,
        } as ListLoadBalancerOperationsRequest;
        if (
            object.loadBalancerId !== undefined &&
            object.loadBalancerId !== null
        ) {
            message.loadBalancerId = object.loadBalancerId;
        } else {
            message.loadBalancerId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        } else {
            message.pageToken = '';
        }
        return message;
    },
};

const baseListLoadBalancerOperationsResponse: object = { nextPageToken: '' };

export const ListLoadBalancerOperationsResponse = {
    encode(
        message: ListLoadBalancerOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListLoadBalancerOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLoadBalancerOperationsResponse,
        } as ListLoadBalancerOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(
                        Operation.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListLoadBalancerOperationsResponse {
        const message = {
            ...baseListLoadBalancerOperationsResponse,
        } as ListLoadBalancerOperationsResponse;
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromJSON(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = String(object.nextPageToken);
        } else {
            message.nextPageToken = '';
        }
        return message;
    },

    toJSON(message: ListLoadBalancerOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) =>
                e ? Operation.toJSON(e) : undefined
            );
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListLoadBalancerOperationsResponse>
    ): ListLoadBalancerOperationsResponse {
        const message = {
            ...baseListLoadBalancerOperationsResponse,
        } as ListLoadBalancerOperationsResponse;
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromPartial(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = object.nextPageToken;
        } else {
            message.nextPageToken = '';
        }
        return message;
    },
};

export const LoadBalancerServiceService = {
    get: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetLoadBalancerRequest) =>
            Buffer.from(GetLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetLoadBalancerRequest.decode(value),
        responseSerialize: (value: LoadBalancer) =>
            Buffer.from(LoadBalancer.encode(value).finish()),
        responseDeserialize: (value: Buffer) => LoadBalancer.decode(value),
    },
    list: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListLoadBalancersRequest) =>
            Buffer.from(ListLoadBalancersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListLoadBalancersRequest.decode(value),
        responseSerialize: (value: ListLoadBalancersResponse) =>
            Buffer.from(ListLoadBalancersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListLoadBalancersResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateLoadBalancerRequest) =>
            Buffer.from(CreateLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateLoadBalancerRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateLoadBalancerRequest) =>
            Buffer.from(UpdateLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateLoadBalancerRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteLoadBalancerRequest) =>
            Buffer.from(DeleteLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteLoadBalancerRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    start: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartLoadBalancerRequest) =>
            Buffer.from(StartLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StartLoadBalancerRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    stop: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopLoadBalancerRequest) =>
            Buffer.from(StopLoadBalancerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StopLoadBalancerRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** AddListener/UpdateListener technically do the same, but have different semantics. */
    addListener: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddListenerRequest) =>
            Buffer.from(AddListenerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddListenerRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    removeListener: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RemoveListenerRequest) =>
            Buffer.from(RemoveListenerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            RemoveListenerRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    updateListener: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateListenerRequest) =>
            Buffer.from(UpdateListenerRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateListenerRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    addSniMatch: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddSniMatch',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddSniMatchRequest) =>
            Buffer.from(AddSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddSniMatchRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    updateSniMatch: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateSniMatch',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateSniMatchRequest) =>
            Buffer.from(UpdateSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateSniMatchRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    removeSniMatch: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveSniMatch',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RemoveSniMatchRequest) =>
            Buffer.from(RemoveSniMatchRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            RemoveSniMatchRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Returns zonal state of each target within target group
     * for a given backend group and load balancer.
     */
    getTargetStates: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetTargetStatesRequest) =>
            Buffer.from(GetTargetStatesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetTargetStatesRequest.decode(value),
        responseSerialize: (value: GetTargetStatesResponse) =>
            Buffer.from(GetTargetStatesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            GetTargetStatesResponse.decode(value),
    },
    /** Lists operations for the specified load balancer. */
    listOperations: {
        path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListLoadBalancerOperationsRequest) =>
            Buffer.from(
                ListLoadBalancerOperationsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListLoadBalancerOperationsRequest.decode(value),
        responseSerialize: (value: ListLoadBalancerOperationsResponse) =>
            Buffer.from(
                ListLoadBalancerOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListLoadBalancerOperationsResponse.decode(value),
    },
} as const;

export interface LoadBalancerServiceServer
    extends UntypedServiceImplementation {
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
    getTargetStates: handleUnaryCall<
        GetTargetStatesRequest,
        GetTargetStatesResponse
    >;
    /** Lists operations for the specified load balancer. */
    listOperations: handleUnaryCall<
        ListLoadBalancerOperationsRequest,
        ListLoadBalancerOperationsResponse
    >;
}

export interface LoadBalancerServiceClient extends Client {
    get(
        request: GetLoadBalancerRequest,
        callback: (error: ServiceError | null, response: LoadBalancer) => void
    ): ClientUnaryCall;
    get(
        request: GetLoadBalancerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: LoadBalancer) => void
    ): ClientUnaryCall;
    get(
        request: GetLoadBalancerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: LoadBalancer) => void
    ): ClientUnaryCall;
    list(
        request: ListLoadBalancersRequest,
        callback: (
            error: ServiceError | null,
            response: ListLoadBalancersResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListLoadBalancersRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListLoadBalancersResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListLoadBalancersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListLoadBalancersResponse
        ) => void
    ): ClientUnaryCall;
    create(
        request: CreateLoadBalancerRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateLoadBalancerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateLoadBalancerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateLoadBalancerRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateLoadBalancerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateLoadBalancerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteLoadBalancerRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteLoadBalancerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteLoadBalancerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    start(
        request: StartLoadBalancerRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    start(
        request: StartLoadBalancerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    start(
        request: StartLoadBalancerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stop(
        request: StopLoadBalancerRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stop(
        request: StopLoadBalancerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stop(
        request: StopLoadBalancerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** AddListener/UpdateListener technically do the same, but have different semantics. */
    addListener(
        request: AddListenerRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addListener(
        request: AddListenerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addListener(
        request: AddListenerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeListener(
        request: RemoveListenerRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeListener(
        request: RemoveListenerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeListener(
        request: RemoveListenerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateListener(
        request: UpdateListenerRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateListener(
        request: UpdateListenerRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateListener(
        request: UpdateListenerRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addSniMatch(
        request: AddSniMatchRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addSniMatch(
        request: AddSniMatchRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addSniMatch(
        request: AddSniMatchRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateSniMatch(
        request: UpdateSniMatchRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateSniMatch(
        request: UpdateSniMatchRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateSniMatch(
        request: UpdateSniMatchRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeSniMatch(
        request: RemoveSniMatchRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeSniMatch(
        request: RemoveSniMatchRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeSniMatch(
        request: RemoveSniMatchRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Returns zonal state of each target within target group
     * for a given backend group and load balancer.
     */
    getTargetStates(
        request: GetTargetStatesRequest,
        callback: (
            error: ServiceError | null,
            response: GetTargetStatesResponse
        ) => void
    ): ClientUnaryCall;
    getTargetStates(
        request: GetTargetStatesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: GetTargetStatesResponse
        ) => void
    ): ClientUnaryCall;
    getTargetStates(
        request: GetTargetStatesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: GetTargetStatesResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified load balancer. */
    listOperations(
        request: ListLoadBalancerOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListLoadBalancerOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListLoadBalancerOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListLoadBalancerOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListLoadBalancerOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListLoadBalancerOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const LoadBalancerServiceClient = makeGenericClientConstructor(
    LoadBalancerServiceService,
    'yandex.cloud.apploadbalancer.v1.LoadBalancerService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): LoadBalancerServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
