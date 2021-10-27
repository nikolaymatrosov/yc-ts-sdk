/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { messageTypeRegistry } from '../../../../typeRegistry';
import {
    Cluster,
    HadoopConfig,
} from '../../../../yandex/cloud/dataproc/v1/cluster';
import { Resources } from '../../../../yandex/cloud/dataproc/v1/common';
import {
    Role,
    AutoscalingConfig,
    Host,
    roleFromJSON,
    roleToJSON,
} from '../../../../yandex/cloud/dataproc/v1/subcluster';
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

export const protobufPackage = 'yandex.cloud.dataproc.v1';

export interface GetClusterRequest {
    $type: 'yandex.cloud.dataproc.v1.GetClusterRequest';
    /**
     * ID of the Data Proc cluster.
     *
     * To get a cluster ID make a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface ListClustersRequest {
    $type: 'yandex.cloud.dataproc.v1.ListClustersRequest';
    /**
     * ID of the folder to list clusters in.
     *
     * To get the folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListClustersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters clusters listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Cluster.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9].
     * Example of a filter: `name=my-cluster`.
     */
    filter: string;
}

export interface ListClustersResponse {
    $type: 'yandex.cloud.dataproc.v1.ListClustersResponse';
    /** List of clusters in the specified folder. */
    clusters: Cluster[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListClustersRequest.page_size], use `next_page_token` as the value
     * for the [ListClustersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateSubclusterConfigSpec {
    $type: 'yandex.cloud.dataproc.v1.CreateSubclusterConfigSpec';
    /** Name of the subcluster. */
    name: string;
    /** Role of the subcluster in the Data Proc cluster. */
    role: Role;
    /** Resource configuration for hosts in the subcluster. */
    resources: Resources | undefined;
    /** ID of the VPC subnet used for hosts in the subcluster. */
    subnetId: string;
    /** Number of hosts in the subcluster. */
    hostsCount: number;
    /** Configuration for instance group based subclusters */
    autoscalingConfig: AutoscalingConfig | undefined;
}

export interface UpdateSubclusterConfigSpec {
    $type: 'yandex.cloud.dataproc.v1.UpdateSubclusterConfigSpec';
    /**
     * ID of the subcluster to update.
     *
     * To get the subcluster ID make a [SubclusterService.List] request.
     */
    id: string;
    /** Name of the subcluster. */
    name: string;
    /** Resource configuration for each host in the subcluster. */
    resources: Resources | undefined;
    /** Number of hosts in the subcluster. */
    hostsCount: number;
    /** Configuration for instance group based subclusters */
    autoscalingConfig: AutoscalingConfig | undefined;
}

export interface CreateClusterConfigSpec {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterConfigSpec';
    /**
     * Version of the image for cluster provisioning.
     *
     * All available versions are listed in the [documentation](/docs/data-proc/concepts/image-versions).
     */
    versionId: string;
    /** Data Proc specific options. */
    hadoop: HadoopConfig | undefined;
    /** Specification for creating subclusters. */
    subclustersSpec: CreateSubclusterConfigSpec[];
}

export interface UpdateClusterConfigSpec {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterConfigSpec';
    /** New configuration for subclusters in a cluster. */
    subclustersSpec: UpdateSubclusterConfigSpec[];
    /** Hadoop specific options */
    hadoop: HadoopConfig | undefined;
}

export interface CreateClusterRequest {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterRequest';
    /**
     * ID of the folder to create a cluster in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the cluster. The name must be unique within the folder.
     * The name can't be changed after the Data Proc cluster is created.
     */
    name: string;
    /** Description of the cluster. */
    description: string;
    /** Cluster labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Configuration and resources for hosts that should be created with the cluster. */
    configSpec: CreateClusterConfigSpec | undefined;
    /**
     * ID of the availability zone where the cluster should be placed.
     *
     * To get the list of available zones make a [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /** ID of the service account to be used by the Data Proc manager agent. */
    serviceAccountId: string;
    /** Name of the Object Storage bucket to use for Data Proc jobs. */
    bucket: string;
    /** Enable UI Proxy feature. */
    uiProxy: boolean;
    /** User security groups. */
    securityGroupIds: string[];
    /** Host groups to place VMs of cluster on. */
    hostGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** ID of the cloud logging log group to write logs. If not set, logs will not be sent to logging service */
    logGroupId: string;
}

export interface CreateClusterRequest_LabelsEntry {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface CreateClusterMetadata {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterMetadata';
    /** ID of the cluster that is being created. */
    clusterId: string;
}

export interface UpdateClusterRequest {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterRequest';
    /**
     * ID of the cluster to update.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which attributes of the cluster should be updated. */
    updateMask: FieldMask | undefined;
    /** New description for the cluster. */
    description: string;
    /** A new set of cluster labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Configuration and resources for hosts that should be created with the Data Proc cluster. */
    configSpec: UpdateClusterConfigSpec | undefined;
    /** New name for the Data Proc cluster. The name must be unique within the folder. */
    name: string;
    /** ID of the new service account to be used by the Data Proc manager agent. */
    serviceAccountId: string;
    /** Name of the new Object Storage bucket to use for Data Proc jobs. */
    bucket: string;
    /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
    decommissionTimeout: number;
    /** Enable UI Proxy feature. */
    uiProxy: boolean;
    /** User security groups. */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** ID of the cloud logging log group to write logs. If not set, logs will not be sent to logging service */
    logGroupId: string;
}

export interface UpdateClusterRequest_LabelsEntry {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateClusterMetadata {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterMetadata';
    /** ID of the cluster that is being updated. */
    clusterId: string;
}

export interface DeleteClusterRequest {
    $type: 'yandex.cloud.dataproc.v1.DeleteClusterRequest';
    /**
     * ID of the cluster to delete.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
    decommissionTimeout: number;
}

export interface DeleteClusterMetadata {
    $type: 'yandex.cloud.dataproc.v1.DeleteClusterMetadata';
    /** ID of the Data Proc cluster that is being deleted. */
    clusterId: string;
}

export interface StartClusterRequest {
    $type: 'yandex.cloud.dataproc.v1.StartClusterRequest';
    /**
     * ID of the cluster to start.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface StartClusterMetadata {
    $type: 'yandex.cloud.dataproc.v1.StartClusterMetadata';
    /** ID of the Data Proc cluster that is being started. */
    clusterId: string;
}

export interface StopClusterRequest {
    $type: 'yandex.cloud.dataproc.v1.StopClusterRequest';
    /**
     * ID of the cluster to stop.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Timeout to gracefully decommission nodes. In seconds. Default value: 0 */
    decommissionTimeout: number;
}

export interface StopClusterMetadata {
    $type: 'yandex.cloud.dataproc.v1.StopClusterMetadata';
    /** ID of the Data Proc cluster that is being stopped. */
    clusterId: string;
}

export interface ListClusterOperationsRequest {
    $type: 'yandex.cloud.dataproc.v1.ListClusterOperationsRequest';
    /** ID of the cluster to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListClusterOperationsResponse {
    $type: 'yandex.cloud.dataproc.v1.ListClusterOperationsResponse';
    /** List of operations for the specified cluster. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListClusterOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListClusterOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListClusterHostsRequest {
    $type: 'yandex.cloud.dataproc.v1.ListClusterHostsRequest';
    /**
     * ID of the cluster to list hosts for.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterHostsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters hosts listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Cluster.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9].
     * Example of a filter: `name=my-host`
     */
    filter: string;
}

export interface ListClusterHostsResponse {
    $type: 'yandex.cloud.dataproc.v1.ListClusterHostsResponse';
    /** Requested list of hosts. */
    hosts: Host[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListClusterHostsRequest.page_size], use `next_page_token` as the value
     * for the [ListClusterHostsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListUILinksRequest {
    $type: 'yandex.cloud.dataproc.v1.ListUILinksRequest';
    /** Required. ID of the Hadoop cluster. */
    clusterId: string;
}

export interface UILink {
    $type: 'yandex.cloud.dataproc.v1.UILink';
    name: string;
    url: string;
}

export interface ListUILinksResponse {
    $type: 'yandex.cloud.dataproc.v1.ListUILinksResponse';
    /** Requested list of ui links. */
    links: UILink[];
}

const baseGetClusterRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.GetClusterRequest',
    clusterId: '',
};

export const GetClusterRequest = {
    $type: 'yandex.cloud.dataproc.v1.GetClusterRequest' as const,

    encode(
        message: GetClusterRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetClusterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetClusterRequest } as GetClusterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetClusterRequest {
        const message = { ...baseGetClusterRequest } as GetClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        return message;
    },

    toJSON(message: GetClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetClusterRequest>): GetClusterRequest {
        const message = { ...baseGetClusterRequest } as GetClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(GetClusterRequest.$type, GetClusterRequest);

const baseListClustersRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.ListClustersRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListClustersRequest = {
    $type: 'yandex.cloud.dataproc.v1.ListClustersRequest' as const,

    encode(
        message: ListClustersRequest,
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
    ): ListClustersRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClustersRequest } as ListClustersRequest;
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

    fromJSON(object: any): ListClustersRequest {
        const message = { ...baseListClustersRequest } as ListClustersRequest;
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

    toJSON(message: ListClustersRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(object: DeepPartial<ListClustersRequest>): ListClustersRequest {
        const message = { ...baseListClustersRequest } as ListClustersRequest;
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

messageTypeRegistry.set(ListClustersRequest.$type, ListClustersRequest);

const baseListClustersResponse: object = {
    $type: 'yandex.cloud.dataproc.v1.ListClustersResponse',
    nextPageToken: '',
};

export const ListClustersResponse = {
    $type: 'yandex.cloud.dataproc.v1.ListClustersResponse' as const,

    encode(
        message: ListClustersResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.clusters) {
            Cluster.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListClustersResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClustersResponse } as ListClustersResponse;
        message.clusters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusters.push(
                        Cluster.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListClustersResponse {
        const message = { ...baseListClustersResponse } as ListClustersResponse;
        message.clusters = [];
        if (object.clusters !== undefined && object.clusters !== null) {
            for (const e of object.clusters) {
                message.clusters.push(Cluster.fromJSON(e));
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

    toJSON(message: ListClustersResponse): unknown {
        const obj: any = {};
        if (message.clusters) {
            obj.clusters = message.clusters.map((e) =>
                e ? Cluster.toJSON(e) : undefined
            );
        } else {
            obj.clusters = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListClustersResponse>
    ): ListClustersResponse {
        const message = { ...baseListClustersResponse } as ListClustersResponse;
        message.clusters = [];
        if (object.clusters !== undefined && object.clusters !== null) {
            for (const e of object.clusters) {
                message.clusters.push(Cluster.fromPartial(e));
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

messageTypeRegistry.set(ListClustersResponse.$type, ListClustersResponse);

const baseCreateSubclusterConfigSpec: object = {
    $type: 'yandex.cloud.dataproc.v1.CreateSubclusterConfigSpec',
    name: '',
    role: 0,
    subnetId: '',
    hostsCount: 0,
};

export const CreateSubclusterConfigSpec = {
    $type: 'yandex.cloud.dataproc.v1.CreateSubclusterConfigSpec' as const,

    encode(
        message: CreateSubclusterConfigSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.role !== 0) {
            writer.uint32(16).int32(message.role);
        }
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.subnetId !== '') {
            writer.uint32(34).string(message.subnetId);
        }
        if (message.hostsCount !== 0) {
            writer.uint32(40).int64(message.hostsCount);
        }
        if (message.autoscalingConfig !== undefined) {
            AutoscalingConfig.encode(
                message.autoscalingConfig,
                writer.uint32(58).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateSubclusterConfigSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSubclusterConfigSpec,
        } as CreateSubclusterConfigSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.role = reader.int32() as any;
                    break;
                case 3:
                    message.resources = Resources.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.subnetId = reader.string();
                    break;
                case 5:
                    message.hostsCount = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.autoscalingConfig = AutoscalingConfig.decode(
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

    fromJSON(object: any): CreateSubclusterConfigSpec {
        const message = {
            ...baseCreateSubclusterConfigSpec,
        } as CreateSubclusterConfigSpec;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = roleFromJSON(object.role);
        } else {
            message.role = 0;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        if (object.hostsCount !== undefined && object.hostsCount !== null) {
            message.hostsCount = Number(object.hostsCount);
        } else {
            message.hostsCount = 0;
        }
        if (
            object.autoscalingConfig !== undefined &&
            object.autoscalingConfig !== null
        ) {
            message.autoscalingConfig = AutoscalingConfig.fromJSON(
                object.autoscalingConfig
            );
        } else {
            message.autoscalingConfig = undefined;
        }
        return message;
    },

    toJSON(message: CreateSubclusterConfigSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.role !== undefined && (obj.role = roleToJSON(message.role));
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.hostsCount !== undefined &&
            (obj.hostsCount = message.hostsCount);
        message.autoscalingConfig !== undefined &&
            (obj.autoscalingConfig = message.autoscalingConfig
                ? AutoscalingConfig.toJSON(message.autoscalingConfig)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateSubclusterConfigSpec>
    ): CreateSubclusterConfigSpec {
        const message = {
            ...baseCreateSubclusterConfigSpec,
        } as CreateSubclusterConfigSpec;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = object.role;
        } else {
            message.role = 0;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        if (object.hostsCount !== undefined && object.hostsCount !== null) {
            message.hostsCount = object.hostsCount;
        } else {
            message.hostsCount = 0;
        }
        if (
            object.autoscalingConfig !== undefined &&
            object.autoscalingConfig !== null
        ) {
            message.autoscalingConfig = AutoscalingConfig.fromPartial(
                object.autoscalingConfig
            );
        } else {
            message.autoscalingConfig = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    CreateSubclusterConfigSpec.$type,
    CreateSubclusterConfigSpec
);

const baseUpdateSubclusterConfigSpec: object = {
    $type: 'yandex.cloud.dataproc.v1.UpdateSubclusterConfigSpec',
    id: '',
    name: '',
    hostsCount: 0,
};

export const UpdateSubclusterConfigSpec = {
    $type: 'yandex.cloud.dataproc.v1.UpdateSubclusterConfigSpec' as const,

    encode(
        message: UpdateSubclusterConfigSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.hostsCount !== 0) {
            writer.uint32(32).int64(message.hostsCount);
        }
        if (message.autoscalingConfig !== undefined) {
            AutoscalingConfig.encode(
                message.autoscalingConfig,
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSubclusterConfigSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSubclusterConfigSpec,
        } as UpdateSubclusterConfigSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.resources = Resources.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.hostsCount = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.autoscalingConfig = AutoscalingConfig.decode(
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

    fromJSON(object: any): UpdateSubclusterConfigSpec {
        const message = {
            ...baseUpdateSubclusterConfigSpec,
        } as UpdateSubclusterConfigSpec;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.hostsCount !== undefined && object.hostsCount !== null) {
            message.hostsCount = Number(object.hostsCount);
        } else {
            message.hostsCount = 0;
        }
        if (
            object.autoscalingConfig !== undefined &&
            object.autoscalingConfig !== null
        ) {
            message.autoscalingConfig = AutoscalingConfig.fromJSON(
                object.autoscalingConfig
            );
        } else {
            message.autoscalingConfig = undefined;
        }
        return message;
    },

    toJSON(message: UpdateSubclusterConfigSpec): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.hostsCount !== undefined &&
            (obj.hostsCount = message.hostsCount);
        message.autoscalingConfig !== undefined &&
            (obj.autoscalingConfig = message.autoscalingConfig
                ? AutoscalingConfig.toJSON(message.autoscalingConfig)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSubclusterConfigSpec>
    ): UpdateSubclusterConfigSpec {
        const message = {
            ...baseUpdateSubclusterConfigSpec,
        } as UpdateSubclusterConfigSpec;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.hostsCount !== undefined && object.hostsCount !== null) {
            message.hostsCount = object.hostsCount;
        } else {
            message.hostsCount = 0;
        }
        if (
            object.autoscalingConfig !== undefined &&
            object.autoscalingConfig !== null
        ) {
            message.autoscalingConfig = AutoscalingConfig.fromPartial(
                object.autoscalingConfig
            );
        } else {
            message.autoscalingConfig = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    UpdateSubclusterConfigSpec.$type,
    UpdateSubclusterConfigSpec
);

const baseCreateClusterConfigSpec: object = {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterConfigSpec',
    versionId: '',
};

export const CreateClusterConfigSpec = {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterConfigSpec' as const,

    encode(
        message: CreateClusterConfigSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.versionId !== '') {
            writer.uint32(10).string(message.versionId);
        }
        if (message.hadoop !== undefined) {
            HadoopConfig.encode(
                message.hadoop,
                writer.uint32(18).fork()
            ).ldelim();
        }
        for (const v of message.subclustersSpec) {
            CreateSubclusterConfigSpec.encode(
                v!,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateClusterConfigSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateClusterConfigSpec,
        } as CreateClusterConfigSpec;
        message.subclustersSpec = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versionId = reader.string();
                    break;
                case 2:
                    message.hadoop = HadoopConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.subclustersSpec.push(
                        CreateSubclusterConfigSpec.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateClusterConfigSpec {
        const message = {
            ...baseCreateClusterConfigSpec,
        } as CreateClusterConfigSpec;
        message.subclustersSpec = [];
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = HadoopConfig.fromJSON(object.hadoop);
        } else {
            message.hadoop = undefined;
        }
        if (
            object.subclustersSpec !== undefined &&
            object.subclustersSpec !== null
        ) {
            for (const e of object.subclustersSpec) {
                message.subclustersSpec.push(
                    CreateSubclusterConfigSpec.fromJSON(e)
                );
            }
        }
        return message;
    },

    toJSON(message: CreateClusterConfigSpec): unknown {
        const obj: any = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.hadoop !== undefined &&
            (obj.hadoop = message.hadoop
                ? HadoopConfig.toJSON(message.hadoop)
                : undefined);
        if (message.subclustersSpec) {
            obj.subclustersSpec = message.subclustersSpec.map((e) =>
                e ? CreateSubclusterConfigSpec.toJSON(e) : undefined
            );
        } else {
            obj.subclustersSpec = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateClusterConfigSpec>
    ): CreateClusterConfigSpec {
        const message = {
            ...baseCreateClusterConfigSpec,
        } as CreateClusterConfigSpec;
        message.subclustersSpec = [];
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = HadoopConfig.fromPartial(object.hadoop);
        } else {
            message.hadoop = undefined;
        }
        if (
            object.subclustersSpec !== undefined &&
            object.subclustersSpec !== null
        ) {
            for (const e of object.subclustersSpec) {
                message.subclustersSpec.push(
                    CreateSubclusterConfigSpec.fromPartial(e)
                );
            }
        }
        return message;
    },
};

messageTypeRegistry.set(CreateClusterConfigSpec.$type, CreateClusterConfigSpec);

const baseUpdateClusterConfigSpec: object = {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterConfigSpec',
};

export const UpdateClusterConfigSpec = {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterConfigSpec' as const,

    encode(
        message: UpdateClusterConfigSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.subclustersSpec) {
            UpdateSubclusterConfigSpec.encode(
                v!,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.hadoop !== undefined) {
            HadoopConfig.encode(
                message.hadoop,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateClusterConfigSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateClusterConfigSpec,
        } as UpdateClusterConfigSpec;
        message.subclustersSpec = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subclustersSpec.push(
                        UpdateSubclusterConfigSpec.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                case 2:
                    message.hadoop = HadoopConfig.decode(
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

    fromJSON(object: any): UpdateClusterConfigSpec {
        const message = {
            ...baseUpdateClusterConfigSpec,
        } as UpdateClusterConfigSpec;
        message.subclustersSpec = [];
        if (
            object.subclustersSpec !== undefined &&
            object.subclustersSpec !== null
        ) {
            for (const e of object.subclustersSpec) {
                message.subclustersSpec.push(
                    UpdateSubclusterConfigSpec.fromJSON(e)
                );
            }
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = HadoopConfig.fromJSON(object.hadoop);
        } else {
            message.hadoop = undefined;
        }
        return message;
    },

    toJSON(message: UpdateClusterConfigSpec): unknown {
        const obj: any = {};
        if (message.subclustersSpec) {
            obj.subclustersSpec = message.subclustersSpec.map((e) =>
                e ? UpdateSubclusterConfigSpec.toJSON(e) : undefined
            );
        } else {
            obj.subclustersSpec = [];
        }
        message.hadoop !== undefined &&
            (obj.hadoop = message.hadoop
                ? HadoopConfig.toJSON(message.hadoop)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateClusterConfigSpec>
    ): UpdateClusterConfigSpec {
        const message = {
            ...baseUpdateClusterConfigSpec,
        } as UpdateClusterConfigSpec;
        message.subclustersSpec = [];
        if (
            object.subclustersSpec !== undefined &&
            object.subclustersSpec !== null
        ) {
            for (const e of object.subclustersSpec) {
                message.subclustersSpec.push(
                    UpdateSubclusterConfigSpec.fromPartial(e)
                );
            }
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = HadoopConfig.fromPartial(object.hadoop);
        } else {
            message.hadoop = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(UpdateClusterConfigSpec.$type, UpdateClusterConfigSpec);

const baseCreateClusterRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterRequest',
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    serviceAccountId: '',
    bucket: '',
    uiProxy: false,
    securityGroupIds: '',
    hostGroupIds: '',
    deletionProtection: false,
    logGroupId: '',
};

export const CreateClusterRequest = {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterRequest' as const,

    encode(
        message: CreateClusterRequest,
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
            CreateClusterRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.configSpec !== undefined) {
            CreateClusterConfigSpec.encode(
                message.configSpec,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.zoneId !== '') {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(66).string(message.serviceAccountId);
        }
        if (message.bucket !== '') {
            writer.uint32(74).string(message.bucket);
        }
        if (message.uiProxy === true) {
            writer.uint32(80).bool(message.uiProxy);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v!);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(98).string(v!);
        }
        if (message.deletionProtection === true) {
            writer.uint32(104).bool(message.deletionProtection);
        }
        if (message.logGroupId !== '') {
            writer.uint32(114).string(message.logGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateClusterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
        message.labels = {};
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
                    const entry4 = CreateClusterRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 6:
                    message.configSpec = CreateClusterConfigSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    message.bucket = reader.string();
                    break;
                case 10:
                    message.uiProxy = reader.bool();
                    break;
                case 11:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 12:
                    message.hostGroupIds.push(reader.string());
                    break;
                case 13:
                    message.deletionProtection = reader.bool();
                    break;
                case 14:
                    message.logGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateClusterRequest {
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
        message.labels = {};
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
        if (object.configSpec !== undefined && object.configSpec !== null) {
            message.configSpec = CreateClusterConfigSpec.fromJSON(
                object.configSpec
            );
        } else {
            message.configSpec = undefined;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = String(object.bucket);
        } else {
            message.bucket = '';
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = Boolean(object.uiProxy);
        } else {
            message.uiProxy = false;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        if (object.hostGroupIds !== undefined && object.hostGroupIds !== null) {
            for (const e of object.hostGroupIds) {
                message.hostGroupIds.push(String(e));
            }
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = Boolean(object.deletionProtection);
        } else {
            message.deletionProtection = false;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        return message;
    },

    toJSON(message: CreateClusterRequest): unknown {
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
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? CreateClusterConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.uiProxy !== undefined && (obj.uiProxy = message.uiProxy);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        if (message.hostGroupIds) {
            obj.hostGroupIds = message.hostGroupIds.map((e) => e);
        } else {
            obj.hostGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateClusterRequest>
    ): CreateClusterRequest {
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
        message.labels = {};
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
        if (object.configSpec !== undefined && object.configSpec !== null) {
            message.configSpec = CreateClusterConfigSpec.fromPartial(
                object.configSpec
            );
        } else {
            message.configSpec = undefined;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = object.bucket;
        } else {
            message.bucket = '';
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = object.uiProxy;
        } else {
            message.uiProxy = false;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        if (object.hostGroupIds !== undefined && object.hostGroupIds !== null) {
            for (const e of object.hostGroupIds) {
                message.hostGroupIds.push(e);
            }
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = object.deletionProtection;
        } else {
            message.deletionProtection = false;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(CreateClusterRequest.$type, CreateClusterRequest);

const baseCreateClusterRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateClusterRequest_LabelsEntry = {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterRequest.LabelsEntry' as const,

    encode(
        message: CreateClusterRequest_LabelsEntry,
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
    ): CreateClusterRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateClusterRequest_LabelsEntry,
        } as CreateClusterRequest_LabelsEntry;
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

    fromJSON(object: any): CreateClusterRequest_LabelsEntry {
        const message = {
            ...baseCreateClusterRequest_LabelsEntry,
        } as CreateClusterRequest_LabelsEntry;
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

    toJSON(message: CreateClusterRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateClusterRequest_LabelsEntry>
    ): CreateClusterRequest_LabelsEntry {
        const message = {
            ...baseCreateClusterRequest_LabelsEntry,
        } as CreateClusterRequest_LabelsEntry;
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

messageTypeRegistry.set(
    CreateClusterRequest_LabelsEntry.$type,
    CreateClusterRequest_LabelsEntry
);

const baseCreateClusterMetadata: object = {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterMetadata',
    clusterId: '',
};

export const CreateClusterMetadata = {
    $type: 'yandex.cloud.dataproc.v1.CreateClusterMetadata' as const,

    encode(
        message: CreateClusterMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateClusterMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateClusterMetadata,
        } as CreateClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateClusterMetadata {
        const message = {
            ...baseCreateClusterMetadata,
        } as CreateClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        return message;
    },

    toJSON(message: CreateClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateClusterMetadata>
    ): CreateClusterMetadata {
        const message = {
            ...baseCreateClusterMetadata,
        } as CreateClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(CreateClusterMetadata.$type, CreateClusterMetadata);

const baseUpdateClusterRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterRequest',
    clusterId: '',
    description: '',
    name: '',
    serviceAccountId: '',
    bucket: '',
    decommissionTimeout: 0,
    uiProxy: false,
    securityGroupIds: '',
    deletionProtection: false,
    logGroupId: '',
};

export const UpdateClusterRequest = {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterRequest' as const,

    encode(
        message: UpdateClusterRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateClusterRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.configSpec !== undefined) {
            UpdateClusterConfigSpec.encode(
                message.configSpec,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.bucket !== '') {
            writer.uint32(66).string(message.bucket);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(72).int64(message.decommissionTimeout);
        }
        if (message.uiProxy === true) {
            writer.uint32(80).bool(message.uiProxy);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v!);
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
        }
        if (message.logGroupId !== '') {
            writer.uint32(106).string(message.logGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateClusterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
        message.labels = {};
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = UpdateClusterRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.configSpec = UpdateClusterConfigSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                case 8:
                    message.bucket = reader.string();
                    break;
                case 9:
                    message.decommissionTimeout = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 10:
                    message.uiProxy = reader.bool();
                    break;
                case 11:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 12:
                    message.deletionProtection = reader.bool();
                    break;
                case 13:
                    message.logGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateClusterRequest {
        const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
        message.labels = {};
        message.securityGroupIds = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
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
        if (object.configSpec !== undefined && object.configSpec !== null) {
            message.configSpec = UpdateClusterConfigSpec.fromJSON(
                object.configSpec
            );
        } else {
            message.configSpec = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = String(object.bucket);
        } else {
            message.bucket = '';
        }
        if (
            object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null
        ) {
            message.decommissionTimeout = Number(object.decommissionTimeout);
        } else {
            message.decommissionTimeout = 0;
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = Boolean(object.uiProxy);
        } else {
            message.uiProxy = false;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = Boolean(object.deletionProtection);
        } else {
            message.deletionProtection = false;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        return message;
    },

    toJSON(message: UpdateClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? UpdateClusterConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = message.decommissionTimeout);
        message.uiProxy !== undefined && (obj.uiProxy = message.uiProxy);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateClusterRequest>
    ): UpdateClusterRequest {
        const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
        message.labels = {};
        message.securityGroupIds = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
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
        if (object.configSpec !== undefined && object.configSpec !== null) {
            message.configSpec = UpdateClusterConfigSpec.fromPartial(
                object.configSpec
            );
        } else {
            message.configSpec = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = object.bucket;
        } else {
            message.bucket = '';
        }
        if (
            object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null
        ) {
            message.decommissionTimeout = object.decommissionTimeout;
        } else {
            message.decommissionTimeout = 0;
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = object.uiProxy;
        } else {
            message.uiProxy = false;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = object.deletionProtection;
        } else {
            message.deletionProtection = false;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(UpdateClusterRequest.$type, UpdateClusterRequest);

const baseUpdateClusterRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateClusterRequest_LabelsEntry = {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterRequest.LabelsEntry' as const,

    encode(
        message: UpdateClusterRequest_LabelsEntry,
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
    ): UpdateClusterRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateClusterRequest_LabelsEntry,
        } as UpdateClusterRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateClusterRequest_LabelsEntry {
        const message = {
            ...baseUpdateClusterRequest_LabelsEntry,
        } as UpdateClusterRequest_LabelsEntry;
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

    toJSON(message: UpdateClusterRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateClusterRequest_LabelsEntry>
    ): UpdateClusterRequest_LabelsEntry {
        const message = {
            ...baseUpdateClusterRequest_LabelsEntry,
        } as UpdateClusterRequest_LabelsEntry;
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

messageTypeRegistry.set(
    UpdateClusterRequest_LabelsEntry.$type,
    UpdateClusterRequest_LabelsEntry
);

const baseUpdateClusterMetadata: object = {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterMetadata',
    clusterId: '',
};

export const UpdateClusterMetadata = {
    $type: 'yandex.cloud.dataproc.v1.UpdateClusterMetadata' as const,

    encode(
        message: UpdateClusterMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateClusterMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateClusterMetadata,
        } as UpdateClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateClusterMetadata {
        const message = {
            ...baseUpdateClusterMetadata,
        } as UpdateClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        return message;
    },

    toJSON(message: UpdateClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateClusterMetadata>
    ): UpdateClusterMetadata {
        const message = {
            ...baseUpdateClusterMetadata,
        } as UpdateClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(UpdateClusterMetadata.$type, UpdateClusterMetadata);

const baseDeleteClusterRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.DeleteClusterRequest',
    clusterId: '',
    decommissionTimeout: 0,
};

export const DeleteClusterRequest = {
    $type: 'yandex.cloud.dataproc.v1.DeleteClusterRequest' as const,

    encode(
        message: DeleteClusterRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(16).int64(message.decommissionTimeout);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteClusterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteClusterRequest } as DeleteClusterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.decommissionTimeout = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteClusterRequest {
        const message = { ...baseDeleteClusterRequest } as DeleteClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null
        ) {
            message.decommissionTimeout = Number(object.decommissionTimeout);
        } else {
            message.decommissionTimeout = 0;
        }
        return message;
    },

    toJSON(message: DeleteClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = message.decommissionTimeout);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteClusterRequest>
    ): DeleteClusterRequest {
        const message = { ...baseDeleteClusterRequest } as DeleteClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null
        ) {
            message.decommissionTimeout = object.decommissionTimeout;
        } else {
            message.decommissionTimeout = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(DeleteClusterRequest.$type, DeleteClusterRequest);

const baseDeleteClusterMetadata: object = {
    $type: 'yandex.cloud.dataproc.v1.DeleteClusterMetadata',
    clusterId: '',
};

export const DeleteClusterMetadata = {
    $type: 'yandex.cloud.dataproc.v1.DeleteClusterMetadata' as const,

    encode(
        message: DeleteClusterMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteClusterMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteClusterMetadata,
        } as DeleteClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteClusterMetadata {
        const message = {
            ...baseDeleteClusterMetadata,
        } as DeleteClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        return message;
    },

    toJSON(message: DeleteClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteClusterMetadata>
    ): DeleteClusterMetadata {
        const message = {
            ...baseDeleteClusterMetadata,
        } as DeleteClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(DeleteClusterMetadata.$type, DeleteClusterMetadata);

const baseStartClusterRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.StartClusterRequest',
    clusterId: '',
};

export const StartClusterRequest = {
    $type: 'yandex.cloud.dataproc.v1.StartClusterRequest' as const,

    encode(
        message: StartClusterRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StartClusterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartClusterRequest } as StartClusterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartClusterRequest {
        const message = { ...baseStartClusterRequest } as StartClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        return message;
    },

    toJSON(message: StartClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial(object: DeepPartial<StartClusterRequest>): StartClusterRequest {
        const message = { ...baseStartClusterRequest } as StartClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(StartClusterRequest.$type, StartClusterRequest);

const baseStartClusterMetadata: object = {
    $type: 'yandex.cloud.dataproc.v1.StartClusterMetadata',
    clusterId: '',
};

export const StartClusterMetadata = {
    $type: 'yandex.cloud.dataproc.v1.StartClusterMetadata' as const,

    encode(
        message: StartClusterMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StartClusterMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartClusterMetadata } as StartClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartClusterMetadata {
        const message = { ...baseStartClusterMetadata } as StartClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        return message;
    },

    toJSON(message: StartClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StartClusterMetadata>
    ): StartClusterMetadata {
        const message = { ...baseStartClusterMetadata } as StartClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(StartClusterMetadata.$type, StartClusterMetadata);

const baseStopClusterRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.StopClusterRequest',
    clusterId: '',
    decommissionTimeout: 0,
};

export const StopClusterRequest = {
    $type: 'yandex.cloud.dataproc.v1.StopClusterRequest' as const,

    encode(
        message: StopClusterRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(16).int64(message.decommissionTimeout);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopClusterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopClusterRequest } as StopClusterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.decommissionTimeout = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopClusterRequest {
        const message = { ...baseStopClusterRequest } as StopClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null
        ) {
            message.decommissionTimeout = Number(object.decommissionTimeout);
        } else {
            message.decommissionTimeout = 0;
        }
        return message;
    },

    toJSON(message: StopClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = message.decommissionTimeout);
        return obj;
    },

    fromPartial(object: DeepPartial<StopClusterRequest>): StopClusterRequest {
        const message = { ...baseStopClusterRequest } as StopClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null
        ) {
            message.decommissionTimeout = object.decommissionTimeout;
        } else {
            message.decommissionTimeout = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(StopClusterRequest.$type, StopClusterRequest);

const baseStopClusterMetadata: object = {
    $type: 'yandex.cloud.dataproc.v1.StopClusterMetadata',
    clusterId: '',
};

export const StopClusterMetadata = {
    $type: 'yandex.cloud.dataproc.v1.StopClusterMetadata' as const,

    encode(
        message: StopClusterMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopClusterMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopClusterMetadata } as StopClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopClusterMetadata {
        const message = { ...baseStopClusterMetadata } as StopClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        return message;
    },

    toJSON(message: StopClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial(object: DeepPartial<StopClusterMetadata>): StopClusterMetadata {
        const message = { ...baseStopClusterMetadata } as StopClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(StopClusterMetadata.$type, StopClusterMetadata);

const baseListClusterOperationsRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.ListClusterOperationsRequest',
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListClusterOperationsRequest = {
    $type: 'yandex.cloud.dataproc.v1.ListClusterOperationsRequest' as const,

    encode(
        message: ListClusterOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
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
    ): ListClusterOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListClusterOperationsRequest,
        } as ListClusterOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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

    fromJSON(object: any): ListClusterOperationsRequest {
        const message = {
            ...baseListClusterOperationsRequest,
        } as ListClusterOperationsRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
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

    toJSON(message: ListClusterOperationsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListClusterOperationsRequest>
    ): ListClusterOperationsRequest {
        const message = {
            ...baseListClusterOperationsRequest,
        } as ListClusterOperationsRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
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

messageTypeRegistry.set(
    ListClusterOperationsRequest.$type,
    ListClusterOperationsRequest
);

const baseListClusterOperationsResponse: object = {
    $type: 'yandex.cloud.dataproc.v1.ListClusterOperationsResponse',
    nextPageToken: '',
};

export const ListClusterOperationsResponse = {
    $type: 'yandex.cloud.dataproc.v1.ListClusterOperationsResponse' as const,

    encode(
        message: ListClusterOperationsResponse,
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
    ): ListClusterOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListClusterOperationsResponse,
        } as ListClusterOperationsResponse;
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

    fromJSON(object: any): ListClusterOperationsResponse {
        const message = {
            ...baseListClusterOperationsResponse,
        } as ListClusterOperationsResponse;
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

    toJSON(message: ListClusterOperationsResponse): unknown {
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
        object: DeepPartial<ListClusterOperationsResponse>
    ): ListClusterOperationsResponse {
        const message = {
            ...baseListClusterOperationsResponse,
        } as ListClusterOperationsResponse;
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

messageTypeRegistry.set(
    ListClusterOperationsResponse.$type,
    ListClusterOperationsResponse
);

const baseListClusterHostsRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.ListClusterHostsRequest',
    clusterId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListClusterHostsRequest = {
    $type: 'yandex.cloud.dataproc.v1.ListClusterHostsRequest' as const,

    encode(
        message: ListClusterHostsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
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
    ): ListClusterHostsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListClusterHostsRequest,
        } as ListClusterHostsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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

    fromJSON(object: any): ListClusterHostsRequest {
        const message = {
            ...baseListClusterHostsRequest,
        } as ListClusterHostsRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
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

    toJSON(message: ListClusterHostsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListClusterHostsRequest>
    ): ListClusterHostsRequest {
        const message = {
            ...baseListClusterHostsRequest,
        } as ListClusterHostsRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
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

messageTypeRegistry.set(ListClusterHostsRequest.$type, ListClusterHostsRequest);

const baseListClusterHostsResponse: object = {
    $type: 'yandex.cloud.dataproc.v1.ListClusterHostsResponse',
    nextPageToken: '',
};

export const ListClusterHostsResponse = {
    $type: 'yandex.cloud.dataproc.v1.ListClusterHostsResponse' as const,

    encode(
        message: ListClusterHostsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.hosts) {
            Host.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListClusterHostsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListClusterHostsResponse,
        } as ListClusterHostsResponse;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(Host.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListClusterHostsResponse {
        const message = {
            ...baseListClusterHostsResponse,
        } as ListClusterHostsResponse;
        message.hosts = [];
        if (object.hosts !== undefined && object.hosts !== null) {
            for (const e of object.hosts) {
                message.hosts.push(Host.fromJSON(e));
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

    toJSON(message: ListClusterHostsResponse): unknown {
        const obj: any = {};
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) =>
                e ? Host.toJSON(e) : undefined
            );
        } else {
            obj.hosts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListClusterHostsResponse>
    ): ListClusterHostsResponse {
        const message = {
            ...baseListClusterHostsResponse,
        } as ListClusterHostsResponse;
        message.hosts = [];
        if (object.hosts !== undefined && object.hosts !== null) {
            for (const e of object.hosts) {
                message.hosts.push(Host.fromPartial(e));
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

messageTypeRegistry.set(
    ListClusterHostsResponse.$type,
    ListClusterHostsResponse
);

const baseListUILinksRequest: object = {
    $type: 'yandex.cloud.dataproc.v1.ListUILinksRequest',
    clusterId: '',
};

export const ListUILinksRequest = {
    $type: 'yandex.cloud.dataproc.v1.ListUILinksRequest' as const,

    encode(
        message: ListUILinksRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListUILinksRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUILinksRequest } as ListUILinksRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListUILinksRequest {
        const message = { ...baseListUILinksRequest } as ListUILinksRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        return message;
    },

    toJSON(message: ListUILinksRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial(object: DeepPartial<ListUILinksRequest>): ListUILinksRequest {
        const message = { ...baseListUILinksRequest } as ListUILinksRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(ListUILinksRequest.$type, ListUILinksRequest);

const baseUILink: object = {
    $type: 'yandex.cloud.dataproc.v1.UILink',
    name: '',
    url: '',
};

export const UILink = {
    $type: 'yandex.cloud.dataproc.v1.UILink' as const,

    encode(
        message: UILink,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== '') {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UILink {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUILink } as UILink;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UILink {
        const message = { ...baseUILink } as UILink;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        } else {
            message.url = '';
        }
        return message;
    },

    toJSON(message: UILink): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },

    fromPartial(object: DeepPartial<UILink>): UILink {
        const message = { ...baseUILink } as UILink;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        } else {
            message.url = '';
        }
        return message;
    },
};

messageTypeRegistry.set(UILink.$type, UILink);

const baseListUILinksResponse: object = {
    $type: 'yandex.cloud.dataproc.v1.ListUILinksResponse',
};

export const ListUILinksResponse = {
    $type: 'yandex.cloud.dataproc.v1.ListUILinksResponse' as const,

    encode(
        message: ListUILinksResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.links) {
            UILink.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListUILinksResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUILinksResponse } as ListUILinksResponse;
        message.links = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.links.push(UILink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListUILinksResponse {
        const message = { ...baseListUILinksResponse } as ListUILinksResponse;
        message.links = [];
        if (object.links !== undefined && object.links !== null) {
            for (const e of object.links) {
                message.links.push(UILink.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ListUILinksResponse): unknown {
        const obj: any = {};
        if (message.links) {
            obj.links = message.links.map((e) =>
                e ? UILink.toJSON(e) : undefined
            );
        } else {
            obj.links = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<ListUILinksResponse>): ListUILinksResponse {
        const message = { ...baseListUILinksResponse } as ListUILinksResponse;
        message.links = [];
        if (object.links !== undefined && object.links !== null) {
            for (const e of object.links) {
                message.links.push(UILink.fromPartial(e));
            }
        }
        return message;
    },
};

messageTypeRegistry.set(ListUILinksResponse.$type, ListUILinksResponse);

/** A set of methods for managing Data Proc clusters. */
export const ClusterServiceService = {
    /**
     * Returns the specified cluster.
     *
     * To get the list of all available clusters, make a [ClusterService.List] request.
     */
    get: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetClusterRequest) =>
            Buffer.from(GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
        responseSerialize: (value: Cluster) =>
            Buffer.from(Cluster.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Cluster.decode(value),
    },
    /** Retrieves the list of clusters in the specified folder. */
    list: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClustersRequest) =>
            Buffer.from(ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListClustersRequest.decode(value),
        responseSerialize: (value: ListClustersResponse) =>
            Buffer.from(ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListClustersResponse.decode(value),
    },
    /** Creates a cluster in the specified folder. */
    create: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateClusterRequest) =>
            Buffer.from(CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateClusterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the configuration of the specified cluster. */
    update: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateClusterRequest) =>
            Buffer.from(UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateClusterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified cluster. */
    delete: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterRequest) =>
            Buffer.from(DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteClusterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Starts the specified cluster. */
    start: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartClusterRequest) =>
            Buffer.from(StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StartClusterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stops the specified cluster. */
    stop: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopClusterRequest) =>
            Buffer.from(StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified cluster. */
    listOperations: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterOperationsRequest) =>
            Buffer.from(ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListClusterOperationsRequest.decode(value),
        responseSerialize: (value: ListClusterOperationsResponse) =>
            Buffer.from(ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves the list of hosts in the specified cluster. */
    listHosts: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/ListHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterHostsRequest) =>
            Buffer.from(ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListClusterHostsRequest.decode(value),
        responseSerialize: (value: ListClusterHostsResponse) =>
            Buffer.from(ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListClusterHostsResponse.decode(value),
    },
    /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
    listUILinks: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/ListUILinks',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListUILinksRequest) =>
            Buffer.from(ListUILinksRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListUILinksRequest.decode(value),
        responseSerialize: (value: ListUILinksResponse) =>
            Buffer.from(ListUILinksResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListUILinksResponse.decode(value),
    },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified cluster.
     *
     * To get the list of all available clusters, make a [ClusterService.List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of clusters in the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the configuration of the specified cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Starts the specified cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Lists operations for the specified cluster. */
    listOperations: handleUnaryCall<
        ListClusterOperationsRequest,
        ListClusterOperationsResponse
    >;
    /** Retrieves the list of hosts in the specified cluster. */
    listHosts: handleUnaryCall<
        ListClusterHostsRequest,
        ListClusterHostsResponse
    >;
    /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
    listUILinks: handleUnaryCall<ListUILinksRequest, ListUILinksResponse>;
}

export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified cluster.
     *
     * To get the list of all available clusters, make a [ClusterService.List] request.
     */
    get(
        request: GetClusterRequest,
        callback: (error: ServiceError | null, response: Cluster) => void
    ): ClientUnaryCall;
    get(
        request: GetClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Cluster) => void
    ): ClientUnaryCall;
    get(
        request: GetClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Cluster) => void
    ): ClientUnaryCall;
    /** Retrieves the list of clusters in the specified folder. */
    list(
        request: ListClustersRequest,
        callback: (
            error: ServiceError | null,
            response: ListClustersResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListClustersRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListClustersResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListClustersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListClustersResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a cluster in the specified folder. */
    create(
        request: CreateClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the configuration of the specified cluster. */
    update(
        request: UpdateClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified cluster. */
    delete(
        request: DeleteClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Starts the specified cluster. */
    start(
        request: StartClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    start(
        request: StartClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    start(
        request: StartClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Stops the specified cluster. */
    stop(
        request: StopClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stop(
        request: StopClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stop(
        request: StopClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified cluster. */
    listOperations(
        request: ListClusterOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListClusterOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListClusterOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListClusterOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListClusterOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListClusterOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Retrieves the list of hosts in the specified cluster. */
    listHosts(
        request: ListClusterHostsRequest,
        callback: (
            error: ServiceError | null,
            response: ListClusterHostsResponse
        ) => void
    ): ClientUnaryCall;
    listHosts(
        request: ListClusterHostsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListClusterHostsResponse
        ) => void
    ): ClientUnaryCall;
    listHosts(
        request: ListClusterHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListClusterHostsResponse
        ) => void
    ): ClientUnaryCall;
    /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
    listUILinks(
        request: ListUILinksRequest,
        callback: (
            error: ServiceError | null,
            response: ListUILinksResponse
        ) => void
    ): ClientUnaryCall;
    listUILinks(
        request: ListUILinksRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListUILinksResponse
        ) => void
    ): ClientUnaryCall;
    listUILinks(
        request: ListUILinksRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListUILinksResponse
        ) => void
    ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
    ClusterServiceService,
    'yandex.cloud.dataproc.v1.ClusterService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ClusterServiceClient;
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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
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
