/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import {
    Node,
    NodeTemplate,
    Taint,
} from '../../../../yandex/cloud/k8s/v1/node';
import {
    NodeGroup,
    ScalePolicy,
    NodeGroupAllocationPolicy,
    DeployPolicy,
    NodeGroupMaintenancePolicy,
} from '../../../../yandex/cloud/k8s/v1/node_group';
import { UpdateVersionSpec } from '../../../../yandex/cloud/k8s/v1/version';
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

export const protobufPackage = 'yandex.cloud.k8s.v1';

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
    labels: { [key: string]: string };
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
    nodeLabels: { [key: string]: string };
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
    labels: { [key: string]: string };
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
    nodeLabels: { [key: string]: string };
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

const baseGetNodeGroupRequest: object = { nodeGroupId: '' };

export const GetNodeGroupRequest = {
    encode(
        message: GetNodeGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetNodeGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetNodeGroupRequest } as GetNodeGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetNodeGroupRequest {
        const message = { ...baseGetNodeGroupRequest } as GetNodeGroupRequest;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },

    toJSON(message: GetNodeGroupRequest): unknown {
        const obj: any = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetNodeGroupRequest>): GetNodeGroupRequest {
        const message = { ...baseGetNodeGroupRequest } as GetNodeGroupRequest;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },
};

const baseListNodeGroupsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListNodeGroupsRequest = {
    encode(
        message: ListNodeGroupsRequest,
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
    ): ListNodeGroupsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListNodeGroupsRequest,
        } as ListNodeGroupsRequest;
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

    fromJSON(object: any): ListNodeGroupsRequest {
        const message = {
            ...baseListNodeGroupsRequest,
        } as ListNodeGroupsRequest;
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

    toJSON(message: ListNodeGroupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListNodeGroupsRequest>
    ): ListNodeGroupsRequest {
        const message = {
            ...baseListNodeGroupsRequest,
        } as ListNodeGroupsRequest;
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

const baseListNodeGroupsResponse: object = { nextPageToken: '' };

export const ListNodeGroupsResponse = {
    encode(
        message: ListNodeGroupsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.nodeGroups) {
            NodeGroup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListNodeGroupsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListNodeGroupsResponse,
        } as ListNodeGroupsResponse;
        message.nodeGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroups.push(
                        NodeGroup.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListNodeGroupsResponse {
        const message = {
            ...baseListNodeGroupsResponse,
        } as ListNodeGroupsResponse;
        message.nodeGroups = [];
        if (object.nodeGroups !== undefined && object.nodeGroups !== null) {
            for (const e of object.nodeGroups) {
                message.nodeGroups.push(NodeGroup.fromJSON(e));
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

    toJSON(message: ListNodeGroupsResponse): unknown {
        const obj: any = {};
        if (message.nodeGroups) {
            obj.nodeGroups = message.nodeGroups.map((e) =>
                e ? NodeGroup.toJSON(e) : undefined
            );
        } else {
            obj.nodeGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListNodeGroupsResponse>
    ): ListNodeGroupsResponse {
        const message = {
            ...baseListNodeGroupsResponse,
        } as ListNodeGroupsResponse;
        message.nodeGroups = [];
        if (object.nodeGroups !== undefined && object.nodeGroups !== null) {
            for (const e of object.nodeGroups) {
                message.nodeGroups.push(NodeGroup.fromPartial(e));
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

const baseListNodeGroupNodesRequest: object = {
    nodeGroupId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListNodeGroupNodesRequest = {
    encode(
        message: ListNodeGroupNodesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
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
    ): ListNodeGroupNodesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListNodeGroupNodesRequest,
        } as ListNodeGroupNodesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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

    fromJSON(object: any): ListNodeGroupNodesRequest {
        const message = {
            ...baseListNodeGroupNodesRequest,
        } as ListNodeGroupNodesRequest;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        } else {
            message.nodeGroupId = '';
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

    toJSON(message: ListNodeGroupNodesRequest): unknown {
        const obj: any = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListNodeGroupNodesRequest>
    ): ListNodeGroupNodesRequest {
        const message = {
            ...baseListNodeGroupNodesRequest,
        } as ListNodeGroupNodesRequest;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        } else {
            message.nodeGroupId = '';
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

const baseListNodeGroupNodesResponse: object = { nextPageToken: '' };

export const ListNodeGroupNodesResponse = {
    encode(
        message: ListNodeGroupNodesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.nodes) {
            Node.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListNodeGroupNodesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListNodeGroupNodesResponse,
        } as ListNodeGroupNodesResponse;
        message.nodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodes.push(Node.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListNodeGroupNodesResponse {
        const message = {
            ...baseListNodeGroupNodesResponse,
        } as ListNodeGroupNodesResponse;
        message.nodes = [];
        if (object.nodes !== undefined && object.nodes !== null) {
            for (const e of object.nodes) {
                message.nodes.push(Node.fromJSON(e));
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

    toJSON(message: ListNodeGroupNodesResponse): unknown {
        const obj: any = {};
        if (message.nodes) {
            obj.nodes = message.nodes.map((e) =>
                e ? Node.toJSON(e) : undefined
            );
        } else {
            obj.nodes = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListNodeGroupNodesResponse>
    ): ListNodeGroupNodesResponse {
        const message = {
            ...baseListNodeGroupNodesResponse,
        } as ListNodeGroupNodesResponse;
        message.nodes = [];
        if (object.nodes !== undefined && object.nodes !== null) {
            for (const e of object.nodes) {
                message.nodes.push(Node.fromPartial(e));
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

const baseDeleteNodeGroupRequest: object = { nodeGroupId: '' };

export const DeleteNodeGroupRequest = {
    encode(
        message: DeleteNodeGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteNodeGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteNodeGroupRequest,
        } as DeleteNodeGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteNodeGroupRequest {
        const message = {
            ...baseDeleteNodeGroupRequest,
        } as DeleteNodeGroupRequest;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteNodeGroupRequest): unknown {
        const obj: any = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteNodeGroupRequest>
    ): DeleteNodeGroupRequest {
        const message = {
            ...baseDeleteNodeGroupRequest,
        } as DeleteNodeGroupRequest;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },
};

const baseDeleteNodeGroupMetadata: object = { nodeGroupId: '' };

export const DeleteNodeGroupMetadata = {
    encode(
        message: DeleteNodeGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteNodeGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteNodeGroupMetadata,
        } as DeleteNodeGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteNodeGroupMetadata {
        const message = {
            ...baseDeleteNodeGroupMetadata,
        } as DeleteNodeGroupMetadata;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteNodeGroupMetadata): unknown {
        const obj: any = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteNodeGroupMetadata>
    ): DeleteNodeGroupMetadata {
        const message = {
            ...baseDeleteNodeGroupMetadata,
        } as DeleteNodeGroupMetadata;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },
};

const baseUpdateNodeGroupRequest: object = {
    nodeGroupId: '',
    name: '',
    description: '',
    allowedUnsafeSysctls: '',
};

export const UpdateNodeGroupRequest = {
    encode(
        message: UpdateNodeGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
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
            UpdateNodeGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.nodeTemplate !== undefined) {
            NodeTemplate.encode(
                message.nodeTemplate,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(
                message.scalePolicy,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            NodeGroupAllocationPolicy.encode(
                message.allocationPolicy,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            DeployPolicy.encode(
                message.deployPolicy,
                writer.uint32(122).fork()
            ).ldelim();
        }
        if (message.version !== undefined) {
            UpdateVersionSpec.encode(
                message.version,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.maintenancePolicy !== undefined) {
            NodeGroupMaintenancePolicy.encode(
                message.maintenancePolicy,
                writer.uint32(90).fork()
            ).ldelim();
        }
        for (const v of message.allowedUnsafeSysctls) {
            writer.uint32(98).string(v!);
        }
        for (const v of message.nodeTaints) {
            Taint.encode(v!, writer.uint32(106).fork()).ldelim();
        }
        Object.entries(message.nodeLabels).forEach(([key, value]) => {
            UpdateNodeGroupRequest_NodeLabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(114).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateNodeGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateNodeGroupRequest,
        } as UpdateNodeGroupRequest;
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
                    const entry5 = UpdateNodeGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 8:
                    message.nodeTemplate = NodeTemplate.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.scalePolicy = ScalePolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.allocationPolicy = NodeGroupAllocationPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 15:
                    message.deployPolicy = DeployPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 10:
                    message.version = UpdateVersionSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.maintenancePolicy =
                        NodeGroupMaintenancePolicy.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 12:
                    message.allowedUnsafeSysctls.push(reader.string());
                    break;
                case 13:
                    message.nodeTaints.push(
                        Taint.decode(reader, reader.uint32())
                    );
                    break;
                case 14:
                    const entry14 =
                        UpdateNodeGroupRequest_NodeLabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry14.value !== undefined) {
                        message.nodeLabels[entry14.key] = entry14.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateNodeGroupRequest {
        const message = {
            ...baseUpdateNodeGroupRequest,
        } as UpdateNodeGroupRequest;
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        } else {
            message.nodeGroupId = '';
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
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = NodeTemplate.fromJSON(object.nodeTemplate);
        } else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = NodeGroupAllocationPolicy.fromJSON(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromJSON(object.deployPolicy);
        } else {
            message.deployPolicy = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = UpdateVersionSpec.fromJSON(object.version);
        } else {
            message.version = undefined;
        }
        if (
            object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null
        ) {
            message.maintenancePolicy = NodeGroupMaintenancePolicy.fromJSON(
                object.maintenancePolicy
            );
        } else {
            message.maintenancePolicy = undefined;
        }
        if (
            object.allowedUnsafeSysctls !== undefined &&
            object.allowedUnsafeSysctls !== null
        ) {
            for (const e of object.allowedUnsafeSysctls) {
                message.allowedUnsafeSysctls.push(String(e));
            }
        }
        if (object.nodeTaints !== undefined && object.nodeTaints !== null) {
            for (const e of object.nodeTaints) {
                message.nodeTaints.push(Taint.fromJSON(e));
            }
        }
        if (object.nodeLabels !== undefined && object.nodeLabels !== null) {
            Object.entries(object.nodeLabels).forEach(([key, value]) => {
                message.nodeLabels[key] = String(value);
            });
        }
        return message;
    },

    toJSON(message: UpdateNodeGroupRequest): unknown {
        const obj: any = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
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
        message.nodeTemplate !== undefined &&
            (obj.nodeTemplate = message.nodeTemplate
                ? NodeTemplate.toJSON(message.nodeTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? UpdateVersionSpec.toJSON(message.version)
                : undefined);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.allowedUnsafeSysctls) {
            obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls.map(
                (e) => e
            );
        } else {
            obj.allowedUnsafeSysctls = [];
        }
        if (message.nodeTaints) {
            obj.nodeTaints = message.nodeTaints.map((e) =>
                e ? Taint.toJSON(e) : undefined
            );
        } else {
            obj.nodeTaints = [];
        }
        obj.nodeLabels = {};
        if (message.nodeLabels) {
            Object.entries(message.nodeLabels).forEach(([k, v]) => {
                obj.nodeLabels[k] = v;
            });
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateNodeGroupRequest>
    ): UpdateNodeGroupRequest {
        const message = {
            ...baseUpdateNodeGroupRequest,
        } as UpdateNodeGroupRequest;
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        } else {
            message.nodeGroupId = '';
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
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = NodeTemplate.fromPartial(
                object.nodeTemplate
            );
        } else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = NodeGroupAllocationPolicy.fromPartial(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromPartial(
                object.deployPolicy
            );
        } else {
            message.deployPolicy = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = UpdateVersionSpec.fromPartial(object.version);
        } else {
            message.version = undefined;
        }
        if (
            object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null
        ) {
            message.maintenancePolicy = NodeGroupMaintenancePolicy.fromPartial(
                object.maintenancePolicy
            );
        } else {
            message.maintenancePolicy = undefined;
        }
        if (
            object.allowedUnsafeSysctls !== undefined &&
            object.allowedUnsafeSysctls !== null
        ) {
            for (const e of object.allowedUnsafeSysctls) {
                message.allowedUnsafeSysctls.push(e);
            }
        }
        if (object.nodeTaints !== undefined && object.nodeTaints !== null) {
            for (const e of object.nodeTaints) {
                message.nodeTaints.push(Taint.fromPartial(e));
            }
        }
        if (object.nodeLabels !== undefined && object.nodeLabels !== null) {
            Object.entries(object.nodeLabels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.nodeLabels[key] = String(value);
                }
            });
        }
        return message;
    },
};

const baseUpdateNodeGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateNodeGroupRequest_LabelsEntry = {
    encode(
        message: UpdateNodeGroupRequest_LabelsEntry,
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
    ): UpdateNodeGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateNodeGroupRequest_LabelsEntry,
        } as UpdateNodeGroupRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateNodeGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateNodeGroupRequest_LabelsEntry,
        } as UpdateNodeGroupRequest_LabelsEntry;
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

    toJSON(message: UpdateNodeGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateNodeGroupRequest_LabelsEntry>
    ): UpdateNodeGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateNodeGroupRequest_LabelsEntry,
        } as UpdateNodeGroupRequest_LabelsEntry;
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

const baseUpdateNodeGroupRequest_NodeLabelsEntry: object = {
    key: '',
    value: '',
};

export const UpdateNodeGroupRequest_NodeLabelsEntry = {
    encode(
        message: UpdateNodeGroupRequest_NodeLabelsEntry,
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
    ): UpdateNodeGroupRequest_NodeLabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateNodeGroupRequest_NodeLabelsEntry,
        } as UpdateNodeGroupRequest_NodeLabelsEntry;
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

    fromJSON(object: any): UpdateNodeGroupRequest_NodeLabelsEntry {
        const message = {
            ...baseUpdateNodeGroupRequest_NodeLabelsEntry,
        } as UpdateNodeGroupRequest_NodeLabelsEntry;
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

    toJSON(message: UpdateNodeGroupRequest_NodeLabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateNodeGroupRequest_NodeLabelsEntry>
    ): UpdateNodeGroupRequest_NodeLabelsEntry {
        const message = {
            ...baseUpdateNodeGroupRequest_NodeLabelsEntry,
        } as UpdateNodeGroupRequest_NodeLabelsEntry;
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

const baseUpdateNodeGroupMetadata: object = { nodeGroupId: '' };

export const UpdateNodeGroupMetadata = {
    encode(
        message: UpdateNodeGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateNodeGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateNodeGroupMetadata,
        } as UpdateNodeGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateNodeGroupMetadata {
        const message = {
            ...baseUpdateNodeGroupMetadata,
        } as UpdateNodeGroupMetadata;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },

    toJSON(message: UpdateNodeGroupMetadata): unknown {
        const obj: any = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateNodeGroupMetadata>
    ): UpdateNodeGroupMetadata {
        const message = {
            ...baseUpdateNodeGroupMetadata,
        } as UpdateNodeGroupMetadata;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },
};

const baseCreateNodeGroupRequest: object = {
    clusterId: '',
    name: '',
    description: '',
    version: '',
    allowedUnsafeSysctls: '',
};

export const CreateNodeGroupRequest = {
    encode(
        message: CreateNodeGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateNodeGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.nodeTemplate !== undefined) {
            NodeTemplate.encode(
                message.nodeTemplate,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(
                message.scalePolicy,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            NodeGroupAllocationPolicy.encode(
                message.allocationPolicy,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            DeployPolicy.encode(
                message.deployPolicy,
                writer.uint32(106).fork()
            ).ldelim();
        }
        if (message.version !== '') {
            writer.uint32(66).string(message.version);
        }
        if (message.maintenancePolicy !== undefined) {
            NodeGroupMaintenancePolicy.encode(
                message.maintenancePolicy,
                writer.uint32(74).fork()
            ).ldelim();
        }
        for (const v of message.allowedUnsafeSysctls) {
            writer.uint32(82).string(v!);
        }
        for (const v of message.nodeTaints) {
            Taint.encode(v!, writer.uint32(90).fork()).ldelim();
        }
        Object.entries(message.nodeLabels).forEach(([key, value]) => {
            CreateNodeGroupRequest_NodeLabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(98).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateNodeGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateNodeGroupRequest,
        } as CreateNodeGroupRequest;
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateNodeGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.nodeTemplate = NodeTemplate.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.scalePolicy = ScalePolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.allocationPolicy = NodeGroupAllocationPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 13:
                    message.deployPolicy = DeployPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.version = reader.string();
                    break;
                case 9:
                    message.maintenancePolicy =
                        NodeGroupMaintenancePolicy.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 10:
                    message.allowedUnsafeSysctls.push(reader.string());
                    break;
                case 11:
                    message.nodeTaints.push(
                        Taint.decode(reader, reader.uint32())
                    );
                    break;
                case 12:
                    const entry12 =
                        CreateNodeGroupRequest_NodeLabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry12.value !== undefined) {
                        message.nodeLabels[entry12.key] = entry12.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateNodeGroupRequest {
        const message = {
            ...baseCreateNodeGroupRequest,
        } as CreateNodeGroupRequest;
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
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
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = NodeTemplate.fromJSON(object.nodeTemplate);
        } else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = NodeGroupAllocationPolicy.fromJSON(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromJSON(object.deployPolicy);
        } else {
            message.deployPolicy = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        } else {
            message.version = '';
        }
        if (
            object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null
        ) {
            message.maintenancePolicy = NodeGroupMaintenancePolicy.fromJSON(
                object.maintenancePolicy
            );
        } else {
            message.maintenancePolicy = undefined;
        }
        if (
            object.allowedUnsafeSysctls !== undefined &&
            object.allowedUnsafeSysctls !== null
        ) {
            for (const e of object.allowedUnsafeSysctls) {
                message.allowedUnsafeSysctls.push(String(e));
            }
        }
        if (object.nodeTaints !== undefined && object.nodeTaints !== null) {
            for (const e of object.nodeTaints) {
                message.nodeTaints.push(Taint.fromJSON(e));
            }
        }
        if (object.nodeLabels !== undefined && object.nodeLabels !== null) {
            Object.entries(object.nodeLabels).forEach(([key, value]) => {
                message.nodeLabels[key] = String(value);
            });
        }
        return message;
    },

    toJSON(message: CreateNodeGroupRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.nodeTemplate !== undefined &&
            (obj.nodeTemplate = message.nodeTemplate
                ? NodeTemplate.toJSON(message.nodeTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.version !== undefined && (obj.version = message.version);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.allowedUnsafeSysctls) {
            obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls.map(
                (e) => e
            );
        } else {
            obj.allowedUnsafeSysctls = [];
        }
        if (message.nodeTaints) {
            obj.nodeTaints = message.nodeTaints.map((e) =>
                e ? Taint.toJSON(e) : undefined
            );
        } else {
            obj.nodeTaints = [];
        }
        obj.nodeLabels = {};
        if (message.nodeLabels) {
            Object.entries(message.nodeLabels).forEach(([k, v]) => {
                obj.nodeLabels[k] = v;
            });
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateNodeGroupRequest>
    ): CreateNodeGroupRequest {
        const message = {
            ...baseCreateNodeGroupRequest,
        } as CreateNodeGroupRequest;
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
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
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = NodeTemplate.fromPartial(
                object.nodeTemplate
            );
        } else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = NodeGroupAllocationPolicy.fromPartial(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromPartial(
                object.deployPolicy
            );
        } else {
            message.deployPolicy = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        } else {
            message.version = '';
        }
        if (
            object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null
        ) {
            message.maintenancePolicy = NodeGroupMaintenancePolicy.fromPartial(
                object.maintenancePolicy
            );
        } else {
            message.maintenancePolicy = undefined;
        }
        if (
            object.allowedUnsafeSysctls !== undefined &&
            object.allowedUnsafeSysctls !== null
        ) {
            for (const e of object.allowedUnsafeSysctls) {
                message.allowedUnsafeSysctls.push(e);
            }
        }
        if (object.nodeTaints !== undefined && object.nodeTaints !== null) {
            for (const e of object.nodeTaints) {
                message.nodeTaints.push(Taint.fromPartial(e));
            }
        }
        if (object.nodeLabels !== undefined && object.nodeLabels !== null) {
            Object.entries(object.nodeLabels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.nodeLabels[key] = String(value);
                }
            });
        }
        return message;
    },
};

const baseCreateNodeGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateNodeGroupRequest_LabelsEntry = {
    encode(
        message: CreateNodeGroupRequest_LabelsEntry,
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
    ): CreateNodeGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateNodeGroupRequest_LabelsEntry,
        } as CreateNodeGroupRequest_LabelsEntry;
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

    fromJSON(object: any): CreateNodeGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateNodeGroupRequest_LabelsEntry,
        } as CreateNodeGroupRequest_LabelsEntry;
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

    toJSON(message: CreateNodeGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateNodeGroupRequest_LabelsEntry>
    ): CreateNodeGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateNodeGroupRequest_LabelsEntry,
        } as CreateNodeGroupRequest_LabelsEntry;
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

const baseCreateNodeGroupRequest_NodeLabelsEntry: object = {
    key: '',
    value: '',
};

export const CreateNodeGroupRequest_NodeLabelsEntry = {
    encode(
        message: CreateNodeGroupRequest_NodeLabelsEntry,
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
    ): CreateNodeGroupRequest_NodeLabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateNodeGroupRequest_NodeLabelsEntry,
        } as CreateNodeGroupRequest_NodeLabelsEntry;
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

    fromJSON(object: any): CreateNodeGroupRequest_NodeLabelsEntry {
        const message = {
            ...baseCreateNodeGroupRequest_NodeLabelsEntry,
        } as CreateNodeGroupRequest_NodeLabelsEntry;
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

    toJSON(message: CreateNodeGroupRequest_NodeLabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateNodeGroupRequest_NodeLabelsEntry>
    ): CreateNodeGroupRequest_NodeLabelsEntry {
        const message = {
            ...baseCreateNodeGroupRequest_NodeLabelsEntry,
        } as CreateNodeGroupRequest_NodeLabelsEntry;
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

const baseCreateNodeGroupMetadata: object = { nodeGroupId: '' };

export const CreateNodeGroupMetadata = {
    encode(
        message: CreateNodeGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateNodeGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateNodeGroupMetadata,
        } as CreateNodeGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateNodeGroupMetadata {
        const message = {
            ...baseCreateNodeGroupMetadata,
        } as CreateNodeGroupMetadata;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },

    toJSON(message: CreateNodeGroupMetadata): unknown {
        const obj: any = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateNodeGroupMetadata>
    ): CreateNodeGroupMetadata {
        const message = {
            ...baseCreateNodeGroupMetadata,
        } as CreateNodeGroupMetadata;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },
};

const baseAutoUpgradeNodeGroupMetadata: object = { nodeGroupId: '' };

export const AutoUpgradeNodeGroupMetadata = {
    encode(
        message: AutoUpgradeNodeGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AutoUpgradeNodeGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAutoUpgradeNodeGroupMetadata,
        } as AutoUpgradeNodeGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AutoUpgradeNodeGroupMetadata {
        const message = {
            ...baseAutoUpgradeNodeGroupMetadata,
        } as AutoUpgradeNodeGroupMetadata;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },

    toJSON(message: AutoUpgradeNodeGroupMetadata): unknown {
        const obj: any = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<AutoUpgradeNodeGroupMetadata>
    ): AutoUpgradeNodeGroupMetadata {
        const message = {
            ...baseAutoUpgradeNodeGroupMetadata,
        } as AutoUpgradeNodeGroupMetadata;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        } else {
            message.nodeGroupId = '';
        }
        return message;
    },
};

const baseListNodeGroupOperationsRequest: object = {
    nodeGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListNodeGroupOperationsRequest = {
    encode(
        message: ListNodeGroupOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
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
    ): ListNodeGroupOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListNodeGroupOperationsRequest,
        } as ListNodeGroupOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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

    fromJSON(object: any): ListNodeGroupOperationsRequest {
        const message = {
            ...baseListNodeGroupOperationsRequest,
        } as ListNodeGroupOperationsRequest;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        } else {
            message.nodeGroupId = '';
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

    toJSON(message: ListNodeGroupOperationsRequest): unknown {
        const obj: any = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListNodeGroupOperationsRequest>
    ): ListNodeGroupOperationsRequest {
        const message = {
            ...baseListNodeGroupOperationsRequest,
        } as ListNodeGroupOperationsRequest;
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        } else {
            message.nodeGroupId = '';
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

const baseListNodeGroupOperationsResponse: object = { nextPageToken: '' };

export const ListNodeGroupOperationsResponse = {
    encode(
        message: ListNodeGroupOperationsResponse,
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
    ): ListNodeGroupOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListNodeGroupOperationsResponse,
        } as ListNodeGroupOperationsResponse;
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

    fromJSON(object: any): ListNodeGroupOperationsResponse {
        const message = {
            ...baseListNodeGroupOperationsResponse,
        } as ListNodeGroupOperationsResponse;
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

    toJSON(message: ListNodeGroupOperationsResponse): unknown {
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
        object: DeepPartial<ListNodeGroupOperationsResponse>
    ): ListNodeGroupOperationsResponse {
        const message = {
            ...baseListNodeGroupOperationsResponse,
        } as ListNodeGroupOperationsResponse;
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

/** A set of methods for managing node groups. */
export const NodeGroupServiceService = {
    /**
     * Returns the specified node group.
     *
     * To get the list of available node group, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetNodeGroupRequest) =>
            Buffer.from(GetNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetNodeGroupRequest.decode(value),
        responseSerialize: (value: NodeGroup) =>
            Buffer.from(NodeGroup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => NodeGroup.decode(value),
    },
    /** Retrieves the list of node group in the specified Kubernetes cluster. */
    list: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListNodeGroupsRequest) =>
            Buffer.from(ListNodeGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListNodeGroupsRequest.decode(value),
        responseSerialize: (value: ListNodeGroupsResponse) =>
            Buffer.from(ListNodeGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListNodeGroupsResponse.decode(value),
    },
    /** Creates a node group in the specified Kubernetes cluster. */
    create: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateNodeGroupRequest) =>
            Buffer.from(CreateNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateNodeGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified node group. */
    update: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateNodeGroupRequest) =>
            Buffer.from(UpdateNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateNodeGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified node group. */
    delete: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteNodeGroupRequest) =>
            Buffer.from(DeleteNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteNodeGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified node group. */
    listOperations: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListNodeGroupOperationsRequest) =>
            Buffer.from(ListNodeGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListNodeGroupOperationsRequest.decode(value),
        responseSerialize: (value: ListNodeGroupOperationsResponse) =>
            Buffer.from(ListNodeGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListNodeGroupOperationsResponse.decode(value),
    },
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    listNodes: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/ListNodes',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListNodeGroupNodesRequest) =>
            Buffer.from(ListNodeGroupNodesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListNodeGroupNodesRequest.decode(value),
        responseSerialize: (value: ListNodeGroupNodesResponse) =>
            Buffer.from(ListNodeGroupNodesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListNodeGroupNodesResponse.decode(value),
    },
} as const;

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
    listOperations: handleUnaryCall<
        ListNodeGroupOperationsRequest,
        ListNodeGroupOperationsResponse
    >;
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    listNodes: handleUnaryCall<
        ListNodeGroupNodesRequest,
        ListNodeGroupNodesResponse
    >;
}

export interface NodeGroupServiceClient extends Client {
    /**
     * Returns the specified node group.
     *
     * To get the list of available node group, make a [List] request.
     */
    get(
        request: GetNodeGroupRequest,
        callback: (error: ServiceError | null, response: NodeGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetNodeGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: NodeGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetNodeGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: NodeGroup) => void
    ): ClientUnaryCall;
    /** Retrieves the list of node group in the specified Kubernetes cluster. */
    list(
        request: ListNodeGroupsRequest,
        callback: (
            error: ServiceError | null,
            response: ListNodeGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListNodeGroupsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListNodeGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListNodeGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListNodeGroupsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a node group in the specified Kubernetes cluster. */
    create(
        request: CreateNodeGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateNodeGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateNodeGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified node group. */
    update(
        request: UpdateNodeGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateNodeGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateNodeGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified node group. */
    delete(
        request: DeleteNodeGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteNodeGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteNodeGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified node group. */
    listOperations(
        request: ListNodeGroupOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListNodeGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListNodeGroupOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListNodeGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListNodeGroupOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListNodeGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    listNodes(
        request: ListNodeGroupNodesRequest,
        callback: (
            error: ServiceError | null,
            response: ListNodeGroupNodesResponse
        ) => void
    ): ClientUnaryCall;
    listNodes(
        request: ListNodeGroupNodesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListNodeGroupNodesResponse
        ) => void
    ): ClientUnaryCall;
    listNodes(
        request: ListNodeGroupNodesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListNodeGroupNodesResponse
        ) => void
    ): ClientUnaryCall;
}

export const NodeGroupServiceClient = makeGenericClientConstructor(
    NodeGroupServiceService,
    'yandex.cloud.k8s.v1.NodeGroupService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): NodeGroupServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
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
