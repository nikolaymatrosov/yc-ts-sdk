/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Node, NodeTemplate, Taint } from '../../../../yandex/cloud/k8s/v1/node';
import { NodeGroup, ScalePolicy, NodeGroupAllocationPolicy, DeployPolicy, NodeGroupMaintenancePolicy } from '../../../../yandex/cloud/k8s/v1/node_group';
import { UpdateVersionSpec } from '../../../../yandex/cloud/k8s/v1/version';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export interface GetNodeGroupRequest {
    /**
     * ID of the node group to return.
     * To get the node group ID use a [NodeGroupService.List] request.
     */
    nodeGroupId: string;
}
export interface ListNodeGroupsRequest {
    /**
     * ID of the folder to list node groups in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListNodeGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListNodeGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [NodeGroup.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 1-61 characters long and match the regular expression `|[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}
export interface ListNodeGroupsResponse {
    /** List of node groups. */
    nodeGroups: NodeGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNodeGroupsRequest.page_size], use
     * the `next_page_token` as the value
     * for the [ListNodeGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListNodeGroupNodesRequest {
    /**
     * ID of the node group to list.
     * To get the node group ID use a [NodeGroupService.List] request.
     */
    nodeGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListNodeGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListNodeGroupNodesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListNodeGroupNodesResponse {
    /** List of nodes. */
    nodes: Node[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNodeGroupNodesRequest.page_size], use
     * the `next_page_token` as the value
     * for the [ListNodeGroupNodesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteNodeGroupRequest {
    /**
     * ID of the node group to delete.
     * To get node group ID use a [NodeGroupService.List] request.
     */
    nodeGroupId: string;
}
export interface DeleteNodeGroupMetadata {
    /** ID of the node group that is being deleted. */
    nodeGroupId: string;
}
export interface UpdateNodeGroupRequest {
    /**
     * ID of the node group to update.
     * To get the node group ID use a [NodeGroupService.List] request.
     */
    nodeGroupId: string;
    /** Field mask that specifies which fields of the node group are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the node group.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the node group. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * Node template for the node group.
     * Change may trigger nodes rolling reboot or recreate.
     */
    nodeTemplate: NodeTemplate | undefined;
    /** Scale policy of the node group. */
    scalePolicy: ScalePolicy | undefined;
    /** Allocation policy of the node group by the zones and regions. */
    allocationPolicy: NodeGroupAllocationPolicy | undefined;
    /**
     * Deploy policy according to which the updates are rolled out. If not specified,
     * the default is used.
     */
    deployPolicy: DeployPolicy | undefined;
    /** Version of Kubernetes components that runs on the nodes. */
    version: UpdateVersionSpec | undefined;
    /** Maintenance policy of the node group. */
    maintenancePolicy: NodeGroupMaintenancePolicy | undefined;
    /** Support for unsafe sysctl parameters. For more details see [documentation](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/). */
    allowedUnsafeSysctls: string[];
    /** Taints that are applied to the nodes of the node group at creation time. */
    nodeTaints: Taint[];
    /** Labels that are assigned to the nodes of the node group at creation time. */
    nodeLabels: {
        [key: string]: string;
    };
}
export interface UpdateNodeGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateNodeGroupRequest_NodeLabelsEntry {
    key: string;
    value: string;
}
export interface UpdateNodeGroupMetadata {
    /** ID of the Node group that is being updated. */
    nodeGroupId: string;
}
export interface CreateNodeGroupRequest {
    /**
     * ID of the Kubernetes cluster to create a node group in.
     * To get the Kubernetes cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the node group.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the node group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Node template for creating the node group. */
    nodeTemplate: NodeTemplate | undefined;
    /** Scale policy of the node group. */
    scalePolicy: ScalePolicy | undefined;
    /** Allocation policy of the node group by the zones and regions. */
    allocationPolicy: NodeGroupAllocationPolicy | undefined;
    /**
     * Deploy policy according to which the updates are rolled out. If not specified,
     * the default is used.
     */
    deployPolicy: DeployPolicy | undefined;
    /** Version of Kubernetes components that runs on the nodes. */
    version: string;
    /** Maintenance policy of the node group. */
    maintenancePolicy: NodeGroupMaintenancePolicy | undefined;
    /** Support for unsafe sysctl parameters. For more details see [documentation](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/). */
    allowedUnsafeSysctls: string[];
    /** Taints that are applied to the nodes of the node group at creation time. */
    nodeTaints: Taint[];
    /** Labels that are assigned to the nodes of the node group at creation time. */
    nodeLabels: {
        [key: string]: string;
    };
}
export interface CreateNodeGroupRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateNodeGroupRequest_NodeLabelsEntry {
    key: string;
    value: string;
}
export interface CreateNodeGroupMetadata {
    /** ID of the node group that is being created. */
    nodeGroupId: string;
}
export interface AutoUpgradeNodeGroupMetadata {
    /** ID of the node group that is being auto upgraded. */
    nodeGroupId: string;
}
export interface ListNodeGroupOperationsRequest {
    /** ID of the node group to list operations for. */
    nodeGroupId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListNodeGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListNodeGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on [NodeGroup.name] field.
     */
    filter: string;
}
export interface ListNodeGroupOperationsResponse {
    /** List of operations for the specified node group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNodeGroupOperationsRequest.page_size], use the `next_page_token` as the value
     * for the [ListNodeGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetNodeGroupRequest: {
    encode(message: GetNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetNodeGroupRequest;
    fromJSON(object: any): GetNodeGroupRequest;
    toJSON(message: GetNodeGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetNodeGroupRequest>): GetNodeGroupRequest;
};
export declare const ListNodeGroupsRequest: {
    encode(message: ListNodeGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupsRequest;
    fromJSON(object: any): ListNodeGroupsRequest;
    toJSON(message: ListNodeGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListNodeGroupsRequest>): ListNodeGroupsRequest;
};
export declare const ListNodeGroupsResponse: {
    encode(message: ListNodeGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupsResponse;
    fromJSON(object: any): ListNodeGroupsResponse;
    toJSON(message: ListNodeGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListNodeGroupsResponse>): ListNodeGroupsResponse;
};
export declare const ListNodeGroupNodesRequest: {
    encode(message: ListNodeGroupNodesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupNodesRequest;
    fromJSON(object: any): ListNodeGroupNodesRequest;
    toJSON(message: ListNodeGroupNodesRequest): unknown;
    fromPartial(object: DeepPartial<ListNodeGroupNodesRequest>): ListNodeGroupNodesRequest;
};
export declare const ListNodeGroupNodesResponse: {
    encode(message: ListNodeGroupNodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupNodesResponse;
    fromJSON(object: any): ListNodeGroupNodesResponse;
    toJSON(message: ListNodeGroupNodesResponse): unknown;
    fromPartial(object: DeepPartial<ListNodeGroupNodesResponse>): ListNodeGroupNodesResponse;
};
export declare const DeleteNodeGroupRequest: {
    encode(message: DeleteNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteNodeGroupRequest;
    fromJSON(object: any): DeleteNodeGroupRequest;
    toJSON(message: DeleteNodeGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteNodeGroupRequest>): DeleteNodeGroupRequest;
};
export declare const DeleteNodeGroupMetadata: {
    encode(message: DeleteNodeGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteNodeGroupMetadata;
    fromJSON(object: any): DeleteNodeGroupMetadata;
    toJSON(message: DeleteNodeGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteNodeGroupMetadata>): DeleteNodeGroupMetadata;
};
export declare const UpdateNodeGroupRequest: {
    encode(message: UpdateNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNodeGroupRequest;
    fromJSON(object: any): UpdateNodeGroupRequest;
    toJSON(message: UpdateNodeGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateNodeGroupRequest>): UpdateNodeGroupRequest;
};
export declare const UpdateNodeGroupRequest_LabelsEntry: {
    encode(message: UpdateNodeGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNodeGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateNodeGroupRequest_LabelsEntry;
    toJSON(message: UpdateNodeGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateNodeGroupRequest_LabelsEntry>): UpdateNodeGroupRequest_LabelsEntry;
};
export declare const UpdateNodeGroupRequest_NodeLabelsEntry: {
    encode(message: UpdateNodeGroupRequest_NodeLabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNodeGroupRequest_NodeLabelsEntry;
    fromJSON(object: any): UpdateNodeGroupRequest_NodeLabelsEntry;
    toJSON(message: UpdateNodeGroupRequest_NodeLabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateNodeGroupRequest_NodeLabelsEntry>): UpdateNodeGroupRequest_NodeLabelsEntry;
};
export declare const UpdateNodeGroupMetadata: {
    encode(message: UpdateNodeGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNodeGroupMetadata;
    fromJSON(object: any): UpdateNodeGroupMetadata;
    toJSON(message: UpdateNodeGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateNodeGroupMetadata>): UpdateNodeGroupMetadata;
};
export declare const CreateNodeGroupRequest: {
    encode(message: CreateNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNodeGroupRequest;
    fromJSON(object: any): CreateNodeGroupRequest;
    toJSON(message: CreateNodeGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateNodeGroupRequest>): CreateNodeGroupRequest;
};
export declare const CreateNodeGroupRequest_LabelsEntry: {
    encode(message: CreateNodeGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNodeGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateNodeGroupRequest_LabelsEntry;
    toJSON(message: CreateNodeGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateNodeGroupRequest_LabelsEntry>): CreateNodeGroupRequest_LabelsEntry;
};
export declare const CreateNodeGroupRequest_NodeLabelsEntry: {
    encode(message: CreateNodeGroupRequest_NodeLabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNodeGroupRequest_NodeLabelsEntry;
    fromJSON(object: any): CreateNodeGroupRequest_NodeLabelsEntry;
    toJSON(message: CreateNodeGroupRequest_NodeLabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateNodeGroupRequest_NodeLabelsEntry>): CreateNodeGroupRequest_NodeLabelsEntry;
};
export declare const CreateNodeGroupMetadata: {
    encode(message: CreateNodeGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNodeGroupMetadata;
    fromJSON(object: any): CreateNodeGroupMetadata;
    toJSON(message: CreateNodeGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateNodeGroupMetadata>): CreateNodeGroupMetadata;
};
export declare const AutoUpgradeNodeGroupMetadata: {
    encode(message: AutoUpgradeNodeGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AutoUpgradeNodeGroupMetadata;
    fromJSON(object: any): AutoUpgradeNodeGroupMetadata;
    toJSON(message: AutoUpgradeNodeGroupMetadata): unknown;
    fromPartial(object: DeepPartial<AutoUpgradeNodeGroupMetadata>): AutoUpgradeNodeGroupMetadata;
};
export declare const ListNodeGroupOperationsRequest: {
    encode(message: ListNodeGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupOperationsRequest;
    fromJSON(object: any): ListNodeGroupOperationsRequest;
    toJSON(message: ListNodeGroupOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListNodeGroupOperationsRequest>): ListNodeGroupOperationsRequest;
};
export declare const ListNodeGroupOperationsResponse: {
    encode(message: ListNodeGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNodeGroupOperationsResponse;
    fromJSON(object: any): ListNodeGroupOperationsResponse;
    toJSON(message: ListNodeGroupOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListNodeGroupOperationsResponse>): ListNodeGroupOperationsResponse;
};
/** A set of methods for managing node groups. */
export declare const NodeGroupServiceService: {
    /**
     * Returns the specified node group.
     *
     * To get the list of available node group, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetNodeGroupRequest;
        readonly responseSerialize: (value: NodeGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => NodeGroup;
    };
    /** Retrieves the list of node group in the specified Kubernetes cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNodeGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNodeGroupsRequest;
        readonly responseSerialize: (value: ListNodeGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNodeGroupsResponse;
    };
    /** Creates a node group in the specified Kubernetes cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified node group. */
    readonly update: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified node group. */
    readonly delete: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified node group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNodeGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNodeGroupOperationsRequest;
        readonly responseSerialize: (value: ListNodeGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNodeGroupOperationsResponse;
    };
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    readonly listNodes: {
        readonly path: "/yandex.cloud.k8s.v1.NodeGroupService/ListNodes";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNodeGroupNodesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNodeGroupNodesRequest;
        readonly responseSerialize: (value: ListNodeGroupNodesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNodeGroupNodesResponse;
    };
};
export interface NodeGroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified node group.
     *
     * To get the list of available node group, make a [List] request.
     */
    get: handleUnaryCall<GetNodeGroupRequest, NodeGroup>;
    /** Retrieves the list of node group in the specified Kubernetes cluster. */
    list: handleUnaryCall<ListNodeGroupsRequest, ListNodeGroupsResponse>;
    /** Creates a node group in the specified Kubernetes cluster. */
    create: handleUnaryCall<CreateNodeGroupRequest, Operation>;
    /** Updates the specified node group. */
    update: handleUnaryCall<UpdateNodeGroupRequest, Operation>;
    /** Deletes the specified node group. */
    delete: handleUnaryCall<DeleteNodeGroupRequest, Operation>;
    /** Lists operations for the specified node group. */
    listOperations: handleUnaryCall<ListNodeGroupOperationsRequest, ListNodeGroupOperationsResponse>;
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    listNodes: handleUnaryCall<ListNodeGroupNodesRequest, ListNodeGroupNodesResponse>;
}
export interface NodeGroupServiceClient extends Client {
    /**
     * Returns the specified node group.
     *
     * To get the list of available node group, make a [List] request.
     */
    get(request: GetNodeGroupRequest, callback: (error: ServiceError | null, response: NodeGroup) => void): ClientUnaryCall;
    get(request: GetNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: NodeGroup) => void): ClientUnaryCall;
    get(request: GetNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: NodeGroup) => void): ClientUnaryCall;
    /** Retrieves the list of node group in the specified Kubernetes cluster. */
    list(request: ListNodeGroupsRequest, callback: (error: ServiceError | null, response: ListNodeGroupsResponse) => void): ClientUnaryCall;
    list(request: ListNodeGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNodeGroupsResponse) => void): ClientUnaryCall;
    list(request: ListNodeGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNodeGroupsResponse) => void): ClientUnaryCall;
    /** Creates a node group in the specified Kubernetes cluster. */
    create(request: CreateNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified node group. */
    update(request: UpdateNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified node group. */
    delete(request: DeleteNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified node group. */
    listOperations(request: ListNodeGroupOperationsRequest, callback: (error: ServiceError | null, response: ListNodeGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListNodeGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNodeGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListNodeGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNodeGroupOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    listNodes(request: ListNodeGroupNodesRequest, callback: (error: ServiceError | null, response: ListNodeGroupNodesResponse) => void): ClientUnaryCall;
    listNodes(request: ListNodeGroupNodesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNodeGroupNodesResponse) => void): ClientUnaryCall;
    listNodes(request: ListNodeGroupNodesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNodeGroupNodesResponse) => void): ClientUnaryCall;
}
export declare const NodeGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => NodeGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
