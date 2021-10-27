/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import {
    Cluster_Environment,
    Host_Type,
    Cluster,
    Host,
    Resources,
    cluster_EnvironmentFromJSON,
    cluster_EnvironmentToJSON,
    host_TypeFromJSON,
    host_TypeToJSON,
} from '../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster';
import { ElasticsearchConfig7 } from '../../../../../yandex/cloud/mdb/elasticsearch/v1/config/elasticsearch';
import { UserSpec } from '../../../../../yandex/cloud/mdb/elasticsearch/v1/user';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    handleServerStreamingCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ClientReadableStream,
    ServiceError,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.elasticsearch.v1';

export interface GetClusterRequest {
    /**
     * ID of the Elasticsearch cluster to return.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface ListClustersRequest {
    /**
     * ID of the folder to list Elasticsearch clusters in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return.
     * If the number of available results is larger than `page_size`, the service returns a [ListClustersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     * To get the next page of results, set `page_token` to the [ListClustersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name to filter by. Currently you can only use filtering with the [Cluster.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 1-63 characters long and match the regular expression `^[a-zA-Z0-9_-]+$`.
     *
     * Example of a filter: `name NOT IN 'test,beta'`.
     */
    filter: string;
}

export interface ListClustersResponse {
    /** List of Elasticsearch clusters. */
    clusters: Cluster[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClustersRequest.page_size], use `next_page_token` as the value
     * for the [ListClustersRequest.page_token] parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateClusterRequest {
    /** ID of the folder to create the Elasticsearch cluster in. */
    folderId: string;
    /** Name of the Elasticsearch cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the Elasticsearch cluster. */
    description: string;
    /**
     * Custom labels for the Elasticsearch cluster as `key:value` pairs.
     *
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: { [key: string]: string };
    /** Deployment environment of the Elasticsearch cluster. */
    environment: Cluster_Environment;
    /** Elasticsearch and hosts configuration for the cluster. */
    configSpec: ConfigSpec | undefined;
    /** One or more descriptions of users to be created in Elasticsearch cluster. */
    userSpecs: UserSpec[];
    /** One or more configurations of hosts to be created in the Elasticsearch cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the Elasticsearch cluster in. */
    networkId: string;
    /** User security groups */
    securityGroupIds: string[];
    /** ID of the service account used for access to Yandex Object Storage. */
    serviceAccountId: string;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
}

export interface CreateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateClusterMetadata {
    /** ID of the Elasticsearch cluster that is being created. */
    clusterId: string;
}

export interface UpdateClusterRequest {
    /**
     * ID of the Elasticsearch cluster to update.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    updateMask: FieldMask | undefined;
    /** New description of the Elasticsearch cluster. */
    description: string;
    /**
     * Custom labels for the Elasticsearch cluster as `key:value` pairs.
     *
     * For example, "project": "mvp" or "source": "dictionary".
     *
     * The new set of labels will completely replace the old ones.
     * To add a label, request the current set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
     */
    labels: { [key: string]: string };
    /**
     * New configuration and resources for hosts in the Elasticsearch cluster.
     *
     * Use [update_mask] to prevent reverting all cluster settings that are not listed in `config_spec` to their default values.
     */
    configSpec: ConfigSpecUpdate | undefined;
    /** New name for the Elasticsearch cluster. */
    name: string;
    /** User security groups */
    securityGroupIds: string[];
    /** ID of the service account used for access to Yandex Object Storage. */
    serviceAccountId: string;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
}

export interface UpdateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateClusterMetadata {
    /** ID of the Elasticsearch cluster that is being updated. */
    clusterId: string;
}

export interface DeleteClusterRequest {
    /**
     * ID of the Elasticsearch cluster to delete.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface DeleteClusterMetadata {
    /** ID of the Elasticsearch cluster that is being deleted. */
    clusterId: string;
}

export interface ListClusterLogsRequest {
    /**
     * ID of the Elasticsearch cluster to request logs for.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from the logs table to request.
     *
     * If no columns are specified, full log records are returned.
     */
    columnFilter: string[];
    /** Start timestamp for the logs request. */
    fromTime: Date | undefined;
    /** End timestamp for the logs request. */
    toTime: Date | undefined;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than `page_size`, the service returns a [ListClusterLogsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set `page_token` to the [ListClusterLogsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * The flag that defines behavior of providing the next page token.
     *
     * If this flag is set to `true`, this API method will always return [ListClusterLogsResponse.next_page_token], even if current page is empty.
     */
    alwaysNextPageToken: boolean;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name to filter by. Currently filtering can be applied to the `hostname` field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 1-63 characters long and match the regular expression `^[a-z0-9.-]{1,61}$`.
     *
     * Example of a filter: `message.hostname='node1.db.cloud.yandex.net'`
     */
    filter: string;
    /** Type of the service to request logs about. */
    serviceType: ListClusterLogsRequest_ServiceType;
}

export enum ListClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    ELASTICSEARCH = 1,
    KIBANA = 2,
    UNRECOGNIZED = -1,
}

export function listClusterLogsRequest_ServiceTypeFromJSON(
    object: any
): ListClusterLogsRequest_ServiceType {
    switch (object) {
        case 0:
        case 'SERVICE_TYPE_UNSPECIFIED':
            return ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case 'ELASTICSEARCH':
            return ListClusterLogsRequest_ServiceType.ELASTICSEARCH;
        case 2:
        case 'KIBANA':
            return ListClusterLogsRequest_ServiceType.KIBANA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ListClusterLogsRequest_ServiceType.UNRECOGNIZED;
    }
}

export function listClusterLogsRequest_ServiceTypeToJSON(
    object: ListClusterLogsRequest_ServiceType
): string {
    switch (object) {
        case ListClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
            return 'SERVICE_TYPE_UNSPECIFIED';
        case ListClusterLogsRequest_ServiceType.ELASTICSEARCH:
            return 'ELASTICSEARCH';
        case ListClusterLogsRequest_ServiceType.KIBANA:
            return 'KIBANA';
        default:
            return 'UNKNOWN';
    }
}

/** A single log record. */
export interface LogRecord {
    /** Log record timestamp. */
    timestamp: Date | undefined;
    /** Contents of the log record. */
    message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
    key: string;
    value: string;
}

export interface ListClusterLogsResponse {
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterLogsRequest.page_size], use `next_page_token` as the value for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     *
     * This value is interchangeable with [StreamLogRecord.next_record_token] from StreamLogs method.
     */
    nextPageToken: string;
}

export interface StreamLogRecord {
    /** One of the requested log records. */
    record: LogRecord | undefined;
    /**
     * This token allows you to continue streaming logs starting from the exact same record.
     *
     * To continue streaming, specify value of `next_record_token` as value for [StreamClusterLogsRequest.record_token] parameter in the next StreamLogs request.
     *
     * This value is interchangeable with [ListClusterLogsResponse.next_page_token] from ListLogs method.
     */
    nextRecordToken: string;
}

export interface StreamClusterLogsRequest {
    /**
     * ID of the Elasticsearch cluster.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from logs table to get in the response.
     *
     * If no columns are specified, full log records are returned.
     */
    columnFilter: string[];
    /** Start timestamp for the logs request. */
    fromTime: Date | undefined;
    /**
     * End timestamp for the logs request.
     *
     * If this field is not set, all existing logs will be sent and then the new ones asthey appear.
     * In essence it has `tail -f` semantics.
     */
    toTime: Date | undefined;
    /**
     * Record token.
     *
     * Set `record_token` to the [StreamLogRecord.next_record_token] returned by a previous [ClusterService.StreamLogs] request to start streaming from next log record.
     */
    recordToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name to filter by. Currently filtering can be applied to the `hostname` field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     *
     * Example of a filter: `message.hostname='node1.db.cloud.yandex.net'`
     */
    filter: string;
    /** Type of the service to request logs about. */
    serviceType: StreamClusterLogsRequest_ServiceType;
}

export enum StreamClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    ELASTICSEARCH = 1,
    KIBANA = 2,
    UNRECOGNIZED = -1,
}

export function streamClusterLogsRequest_ServiceTypeFromJSON(
    object: any
): StreamClusterLogsRequest_ServiceType {
    switch (object) {
        case 0:
        case 'SERVICE_TYPE_UNSPECIFIED':
            return StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED;
        case 1:
        case 'ELASTICSEARCH':
            return StreamClusterLogsRequest_ServiceType.ELASTICSEARCH;
        case 2:
        case 'KIBANA':
            return StreamClusterLogsRequest_ServiceType.KIBANA;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StreamClusterLogsRequest_ServiceType.UNRECOGNIZED;
    }
}

export function streamClusterLogsRequest_ServiceTypeToJSON(
    object: StreamClusterLogsRequest_ServiceType
): string {
    switch (object) {
        case StreamClusterLogsRequest_ServiceType.SERVICE_TYPE_UNSPECIFIED:
            return 'SERVICE_TYPE_UNSPECIFIED';
        case StreamClusterLogsRequest_ServiceType.ELASTICSEARCH:
            return 'ELASTICSEARCH';
        case StreamClusterLogsRequest_ServiceType.KIBANA:
            return 'KIBANA';
        default:
            return 'UNKNOWN';
    }
}

export interface ListClusterOperationsRequest {
    /**
     * ID of the Elasticsearch cluster to list operations for.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than `page_size`, the service returns a [ListClusterOperationsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set `page_token` to the [ListClusterOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListClusterOperationsResponse {
    /** List of operations for the specified Elasticsearch cluster. */
    operations: Operation[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterOperationsRequest.page_size], use the `next_page_token` as the value for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListClusterHostsRequest {
    /**
     * ID of the Elasticsearch cluster.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than `page_size`, the service returns a [ListClusterHostsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set `page_token` to the [ListClusterHostsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListClusterHostsResponse {
    /** List of hosts. */
    hosts: Host[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterHostsRequest.page_size], use the `next_page_token` as the value for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface MoveClusterRequest {
    /**
     * ID of the Elasticsearch cluster to move.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}

export interface MoveClusterMetadata {
    /** ID of the Elasticsearch cluster being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}

export interface StartClusterRequest {
    /**
     * ID of the Elasticsearch cluster to start.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface StartClusterMetadata {
    /** ID of the Elasticsearch cluster. */
    clusterId: string;
}

export interface StopClusterRequest {
    /**
     * ID of the Elasticsearch cluster to stop.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface StopClusterMetadata {
    /** ID of the Elasticsearch cluster. */
    clusterId: string;
}

export interface HostSpec {
    /** ID of the availability zone where the host resides. */
    zoneId: string;
    /** ID of the subnet the host resides in. */
    subnetId: string;
    /**
     * The flag that defines whether a public IP address is assigned to the host.
     *
     * If the value is `true`, then this host is available on the Internet via it's public IP address.
     */
    assignPublicIp: boolean;
    /** Host type. */
    type: Host_Type;
    /** The shard name to create on the host. */
    shardName: string;
}

export interface ElasticsearchSpec {
    /** Configuration and resource allocation for Elasticsearch data nodes. */
    dataNode: ElasticsearchSpec_DataNode | undefined;
    /** Configuration and resource allocation for Elasticsearch master nodes. */
    masterNode: ElasticsearchSpec_MasterNode | undefined;
    /** Cluster wide plugins */
    plugins: string[];
}

export interface ElasticsearchSpec_DataNode {
    elasticsearchConfig7: ElasticsearchConfig7 | undefined;
    /** Resources allocated to Elasticsearch data nodes. */
    resources: Resources | undefined;
}

export interface ElasticsearchSpec_MasterNode {
    /** Resources allocated to Elasticsearch master nodes. */
    resources: Resources | undefined;
}

export interface ConfigSpec {
    /** Elasticsearch version. */
    version: string;
    /** Configuration and resource allocation for Elasticsearch nodes. */
    elasticsearchSpec: ElasticsearchSpec | undefined;
    /** ElasticSearch edition. */
    edition: string;
    /** ElasticSearch admin password. */
    adminPassword: string;
}

export interface ConfigSpecUpdate {
    /** Elasticsearch version. */
    version: string;
    /** Configuration and resource allocation for Elasticsearch nodes. */
    elasticsearchSpec: ElasticsearchSpec | undefined;
    /** ElasticSearch edition. */
    edition: string;
    /** ElasticSearch admin password. */
    adminPassword: string;
}

export interface AddClusterHostsRequest {
    /**
     * ID of the Elasticsearch cluster.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** One or more configurations of hosts to be added to the Elasticsearch cluster. */
    hostSpecs: HostSpec[];
}

export interface AddClusterHostsMetadata {
    /** ID of the Elasticsearch cluster. */
    clusterId: string;
    /** Names of the host that are being added. */
    hostNames: string[];
}

export interface DeleteClusterHostsRequest {
    /**
     * ID of the Elasticsearch cluster.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Names of the hosts to delete. */
    hostNames: string[];
}

export interface DeleteClusterHostsMetadata {
    /** ID of the Elasticsearch cluster. */
    clusterId: string;
    /** Names of the hosts that are being deleted. */
    hostNames: string[];
}

const baseGetClusterRequest: object = { clusterId: '' };

export const GetClusterRequest = {
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

const baseListClustersRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListClustersRequest = {
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

const baseListClustersResponse: object = { nextPageToken: '' };

export const ListClustersResponse = {
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

const baseCreateClusterRequest: object = {
    folderId: '',
    name: '',
    description: '',
    environment: 0,
    networkId: '',
    securityGroupIds: '',
    serviceAccountId: '',
    deletionProtection: false,
};

export const CreateClusterRequest = {
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
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(40).int32(message.environment);
        }
        if (message.configSpec !== undefined) {
            ConfigSpec.encode(
                message.configSpec,
                writer.uint32(50).fork()
            ).ldelim();
        }
        for (const v of message.userSpecs) {
            UserSpec.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.hostSpecs) {
            HostSpec.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(82).string(message.networkId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v!);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(98).string(message.serviceAccountId);
        }
        if (message.deletionProtection === true) {
            writer.uint32(104).bool(message.deletionProtection);
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
        message.userSpecs = [];
        message.hostSpecs = [];
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
                    const entry4 = CreateClusterRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.environment = reader.int32() as any;
                    break;
                case 6:
                    message.configSpec = ConfigSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.userSpecs.push(
                        UserSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 9:
                    message.hostSpecs.push(
                        HostSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 10:
                    message.networkId = reader.string();
                    break;
                case 11:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 12:
                    message.serviceAccountId = reader.string();
                    break;
                case 13:
                    message.deletionProtection = reader.bool();
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
        message.userSpecs = [];
        message.hostSpecs = [];
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
        if (object.environment !== undefined && object.environment !== null) {
            message.environment = cluster_EnvironmentFromJSON(
                object.environment
            );
        } else {
            message.environment = 0;
        }
        if (object.configSpec !== undefined && object.configSpec !== null) {
            message.configSpec = ConfigSpec.fromJSON(object.configSpec);
        } else {
            message.configSpec = undefined;
        }
        if (object.userSpecs !== undefined && object.userSpecs !== null) {
            for (const e of object.userSpecs) {
                message.userSpecs.push(UserSpec.fromJSON(e));
            }
        }
        if (object.hostSpecs !== undefined && object.hostSpecs !== null) {
            for (const e of object.hostSpecs) {
                message.hostSpecs.push(HostSpec.fromJSON(e));
            }
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
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
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = Boolean(object.deletionProtection);
        } else {
            message.deletionProtection = false;
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
        message.environment !== undefined &&
            (obj.environment = cluster_EnvironmentToJSON(message.environment));
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? ConfigSpec.toJSON(message.configSpec)
                : undefined);
        if (message.userSpecs) {
            obj.userSpecs = message.userSpecs.map((e) =>
                e ? UserSpec.toJSON(e) : undefined
            );
        } else {
            obj.userSpecs = [];
        }
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) =>
                e ? HostSpec.toJSON(e) : undefined
            );
        } else {
            obj.hostSpecs = [];
        }
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateClusterRequest>
    ): CreateClusterRequest {
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
        message.labels = {};
        message.userSpecs = [];
        message.hostSpecs = [];
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
        if (object.environment !== undefined && object.environment !== null) {
            message.environment = object.environment;
        } else {
            message.environment = 0;
        }
        if (object.configSpec !== undefined && object.configSpec !== null) {
            message.configSpec = ConfigSpec.fromPartial(object.configSpec);
        } else {
            message.configSpec = undefined;
        }
        if (object.userSpecs !== undefined && object.userSpecs !== null) {
            for (const e of object.userSpecs) {
                message.userSpecs.push(UserSpec.fromPartial(e));
            }
        }
        if (object.hostSpecs !== undefined && object.hostSpecs !== null) {
            for (const e of object.hostSpecs) {
                message.hostSpecs.push(HostSpec.fromPartial(e));
            }
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
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
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = object.deletionProtection;
        } else {
            message.deletionProtection = false;
        }
        return message;
    },
};

const baseCreateClusterRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateClusterRequest_LabelsEntry = {
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

const baseCreateClusterMetadata: object = { clusterId: '' };

export const CreateClusterMetadata = {
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

const baseUpdateClusterRequest: object = {
    clusterId: '',
    description: '',
    name: '',
    securityGroupIds: '',
    serviceAccountId: '',
    deletionProtection: false,
};

export const UpdateClusterRequest = {
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
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.configSpec !== undefined) {
            ConfigSpecUpdate.encode(
                message.configSpec,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(58).string(v!);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(66).string(message.serviceAccountId);
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
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
                    message.configSpec = ConfigSpecUpdate.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    message.deletionProtection = reader.bool();
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
            message.configSpec = ConfigSpecUpdate.fromJSON(object.configSpec);
        } else {
            message.configSpec = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
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
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = Boolean(object.deletionProtection);
        } else {
            message.deletionProtection = false;
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
                ? ConfigSpecUpdate.toJSON(message.configSpec)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
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
            message.configSpec = ConfigSpecUpdate.fromPartial(
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
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = object.deletionProtection;
        } else {
            message.deletionProtection = false;
        }
        return message;
    },
};

const baseUpdateClusterRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateClusterRequest_LabelsEntry = {
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

const baseUpdateClusterMetadata: object = { clusterId: '' };

export const UpdateClusterMetadata = {
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

const baseDeleteClusterRequest: object = { clusterId: '' };

export const DeleteClusterRequest = {
    encode(
        message: DeleteClusterRequest,
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
        return message;
    },

    toJSON(message: DeleteClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
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
        return message;
    },
};

const baseDeleteClusterMetadata: object = { clusterId: '' };

export const DeleteClusterMetadata = {
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

const baseListClusterLogsRequest: object = {
    clusterId: '',
    columnFilter: '',
    pageSize: 0,
    pageToken: '',
    alwaysNextPageToken: false,
    filter: '',
    serviceType: 0,
};

export const ListClusterLogsRequest = {
    encode(
        message: ListClusterLogsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.columnFilter) {
            writer.uint32(18).string(v!);
        }
        if (message.fromTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.fromTime),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.toTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.toTime),
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.pageSize !== 0) {
            writer.uint32(40).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(50).string(message.pageToken);
        }
        if (message.alwaysNextPageToken === true) {
            writer.uint32(56).bool(message.alwaysNextPageToken);
        }
        if (message.filter !== '') {
            writer.uint32(66).string(message.filter);
        }
        if (message.serviceType !== 0) {
            writer.uint32(72).int32(message.serviceType);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListClusterLogsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListClusterLogsRequest,
        } as ListClusterLogsRequest;
        message.columnFilter = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.columnFilter.push(reader.string());
                    break;
                case 3:
                    message.fromTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.toTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.pageToken = reader.string();
                    break;
                case 7:
                    message.alwaysNextPageToken = reader.bool();
                    break;
                case 8:
                    message.filter = reader.string();
                    break;
                case 9:
                    message.serviceType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListClusterLogsRequest {
        const message = {
            ...baseListClusterLogsRequest,
        } as ListClusterLogsRequest;
        message.columnFilter = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.columnFilter !== undefined && object.columnFilter !== null) {
            for (const e of object.columnFilter) {
                message.columnFilter.push(String(e));
            }
        }
        if (object.fromTime !== undefined && object.fromTime !== null) {
            message.fromTime = fromJsonTimestamp(object.fromTime);
        } else {
            message.fromTime = undefined;
        }
        if (object.toTime !== undefined && object.toTime !== null) {
            message.toTime = fromJsonTimestamp(object.toTime);
        } else {
            message.toTime = undefined;
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
        if (
            object.alwaysNextPageToken !== undefined &&
            object.alwaysNextPageToken !== null
        ) {
            message.alwaysNextPageToken = Boolean(object.alwaysNextPageToken);
        } else {
            message.alwaysNextPageToken = false;
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        if (object.serviceType !== undefined && object.serviceType !== null) {
            message.serviceType = listClusterLogsRequest_ServiceTypeFromJSON(
                object.serviceType
            );
        } else {
            message.serviceType = 0;
        }
        return message;
    },

    toJSON(message: ListClusterLogsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.columnFilter) {
            obj.columnFilter = message.columnFilter.map((e) => e);
        } else {
            obj.columnFilter = [];
        }
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined &&
            (obj.toTime = message.toTime.toISOString());
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.alwaysNextPageToken !== undefined &&
            (obj.alwaysNextPageToken = message.alwaysNextPageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.serviceType !== undefined &&
            (obj.serviceType = listClusterLogsRequest_ServiceTypeToJSON(
                message.serviceType
            ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListClusterLogsRequest>
    ): ListClusterLogsRequest {
        const message = {
            ...baseListClusterLogsRequest,
        } as ListClusterLogsRequest;
        message.columnFilter = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.columnFilter !== undefined && object.columnFilter !== null) {
            for (const e of object.columnFilter) {
                message.columnFilter.push(e);
            }
        }
        if (object.fromTime !== undefined && object.fromTime !== null) {
            message.fromTime = object.fromTime;
        } else {
            message.fromTime = undefined;
        }
        if (object.toTime !== undefined && object.toTime !== null) {
            message.toTime = object.toTime;
        } else {
            message.toTime = undefined;
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
        if (
            object.alwaysNextPageToken !== undefined &&
            object.alwaysNextPageToken !== null
        ) {
            message.alwaysNextPageToken = object.alwaysNextPageToken;
        } else {
            message.alwaysNextPageToken = false;
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        if (object.serviceType !== undefined && object.serviceType !== null) {
            message.serviceType = object.serviceType;
        } else {
            message.serviceType = 0;
        }
        return message;
    },
};

const baseLogRecord: object = {};

export const LogRecord = {
    encode(
        message: LogRecord,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.timestamp !== undefined) {
            Timestamp.encode(
                toTimestamp(message.timestamp),
                writer.uint32(10).fork()
            ).ldelim();
        }
        Object.entries(message.message).forEach(([key, value]) => {
            LogRecord_MessageEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LogRecord {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogRecord } as LogRecord;
        message.message = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    const entry2 = LogRecord_MessageEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry2.value !== undefined) {
                        message.message[entry2.key] = entry2.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LogRecord {
        const message = { ...baseLogRecord } as LogRecord;
        message.message = {};
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromJsonTimestamp(object.timestamp);
        } else {
            message.timestamp = undefined;
        }
        if (object.message !== undefined && object.message !== null) {
            Object.entries(object.message).forEach(([key, value]) => {
                message.message[key] = String(value);
            });
        }
        return message;
    },

    toJSON(message: LogRecord): unknown {
        const obj: any = {};
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        obj.message = {};
        if (message.message) {
            Object.entries(message.message).forEach(([k, v]) => {
                obj.message[k] = v;
            });
        }
        return obj;
    },

    fromPartial(object: DeepPartial<LogRecord>): LogRecord {
        const message = { ...baseLogRecord } as LogRecord;
        message.message = {};
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        } else {
            message.timestamp = undefined;
        }
        if (object.message !== undefined && object.message !== null) {
            Object.entries(object.message).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.message[key] = String(value);
                }
            });
        }
        return message;
    },
};

const baseLogRecord_MessageEntry: object = { key: '', value: '' };

export const LogRecord_MessageEntry = {
    encode(
        message: LogRecord_MessageEntry,
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
    ): LogRecord_MessageEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLogRecord_MessageEntry,
        } as LogRecord_MessageEntry;
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

    fromJSON(object: any): LogRecord_MessageEntry {
        const message = {
            ...baseLogRecord_MessageEntry,
        } as LogRecord_MessageEntry;
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

    toJSON(message: LogRecord_MessageEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<LogRecord_MessageEntry>
    ): LogRecord_MessageEntry {
        const message = {
            ...baseLogRecord_MessageEntry,
        } as LogRecord_MessageEntry;
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

const baseListClusterLogsResponse: object = { nextPageToken: '' };

export const ListClusterLogsResponse = {
    encode(
        message: ListClusterLogsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.logs) {
            LogRecord.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListClusterLogsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListClusterLogsResponse,
        } as ListClusterLogsResponse;
        message.logs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logs.push(
                        LogRecord.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListClusterLogsResponse {
        const message = {
            ...baseListClusterLogsResponse,
        } as ListClusterLogsResponse;
        message.logs = [];
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(LogRecord.fromJSON(e));
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

    toJSON(message: ListClusterLogsResponse): unknown {
        const obj: any = {};
        if (message.logs) {
            obj.logs = message.logs.map((e) =>
                e ? LogRecord.toJSON(e) : undefined
            );
        } else {
            obj.logs = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListClusterLogsResponse>
    ): ListClusterLogsResponse {
        const message = {
            ...baseListClusterLogsResponse,
        } as ListClusterLogsResponse;
        message.logs = [];
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(LogRecord.fromPartial(e));
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

const baseStreamLogRecord: object = { nextRecordToken: '' };

export const StreamLogRecord = {
    encode(
        message: StreamLogRecord,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.record !== undefined) {
            LogRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextRecordToken !== '') {
            writer.uint32(18).string(message.nextRecordToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StreamLogRecord {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamLogRecord } as StreamLogRecord;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.record = LogRecord.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nextRecordToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StreamLogRecord {
        const message = { ...baseStreamLogRecord } as StreamLogRecord;
        if (object.record !== undefined && object.record !== null) {
            message.record = LogRecord.fromJSON(object.record);
        } else {
            message.record = undefined;
        }
        if (
            object.nextRecordToken !== undefined &&
            object.nextRecordToken !== null
        ) {
            message.nextRecordToken = String(object.nextRecordToken);
        } else {
            message.nextRecordToken = '';
        }
        return message;
    },

    toJSON(message: StreamLogRecord): unknown {
        const obj: any = {};
        message.record !== undefined &&
            (obj.record = message.record
                ? LogRecord.toJSON(message.record)
                : undefined);
        message.nextRecordToken !== undefined &&
            (obj.nextRecordToken = message.nextRecordToken);
        return obj;
    },

    fromPartial(object: DeepPartial<StreamLogRecord>): StreamLogRecord {
        const message = { ...baseStreamLogRecord } as StreamLogRecord;
        if (object.record !== undefined && object.record !== null) {
            message.record = LogRecord.fromPartial(object.record);
        } else {
            message.record = undefined;
        }
        if (
            object.nextRecordToken !== undefined &&
            object.nextRecordToken !== null
        ) {
            message.nextRecordToken = object.nextRecordToken;
        } else {
            message.nextRecordToken = '';
        }
        return message;
    },
};

const baseStreamClusterLogsRequest: object = {
    clusterId: '',
    columnFilter: '',
    recordToken: '',
    filter: '',
    serviceType: 0,
};

export const StreamClusterLogsRequest = {
    encode(
        message: StreamClusterLogsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.columnFilter) {
            writer.uint32(18).string(v!);
        }
        if (message.fromTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.fromTime),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.toTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.toTime),
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.recordToken !== '') {
            writer.uint32(42).string(message.recordToken);
        }
        if (message.filter !== '') {
            writer.uint32(50).string(message.filter);
        }
        if (message.serviceType !== 0) {
            writer.uint32(56).int32(message.serviceType);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StreamClusterLogsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStreamClusterLogsRequest,
        } as StreamClusterLogsRequest;
        message.columnFilter = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.columnFilter.push(reader.string());
                    break;
                case 3:
                    message.fromTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.toTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.recordToken = reader.string();
                    break;
                case 6:
                    message.filter = reader.string();
                    break;
                case 7:
                    message.serviceType = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StreamClusterLogsRequest {
        const message = {
            ...baseStreamClusterLogsRequest,
        } as StreamClusterLogsRequest;
        message.columnFilter = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.columnFilter !== undefined && object.columnFilter !== null) {
            for (const e of object.columnFilter) {
                message.columnFilter.push(String(e));
            }
        }
        if (object.fromTime !== undefined && object.fromTime !== null) {
            message.fromTime = fromJsonTimestamp(object.fromTime);
        } else {
            message.fromTime = undefined;
        }
        if (object.toTime !== undefined && object.toTime !== null) {
            message.toTime = fromJsonTimestamp(object.toTime);
        } else {
            message.toTime = undefined;
        }
        if (object.recordToken !== undefined && object.recordToken !== null) {
            message.recordToken = String(object.recordToken);
        } else {
            message.recordToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        if (object.serviceType !== undefined && object.serviceType !== null) {
            message.serviceType = streamClusterLogsRequest_ServiceTypeFromJSON(
                object.serviceType
            );
        } else {
            message.serviceType = 0;
        }
        return message;
    },

    toJSON(message: StreamClusterLogsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.columnFilter) {
            obj.columnFilter = message.columnFilter.map((e) => e);
        } else {
            obj.columnFilter = [];
        }
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined &&
            (obj.toTime = message.toTime.toISOString());
        message.recordToken !== undefined &&
            (obj.recordToken = message.recordToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.serviceType !== undefined &&
            (obj.serviceType = streamClusterLogsRequest_ServiceTypeToJSON(
                message.serviceType
            ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<StreamClusterLogsRequest>
    ): StreamClusterLogsRequest {
        const message = {
            ...baseStreamClusterLogsRequest,
        } as StreamClusterLogsRequest;
        message.columnFilter = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.columnFilter !== undefined && object.columnFilter !== null) {
            for (const e of object.columnFilter) {
                message.columnFilter.push(e);
            }
        }
        if (object.fromTime !== undefined && object.fromTime !== null) {
            message.fromTime = object.fromTime;
        } else {
            message.fromTime = undefined;
        }
        if (object.toTime !== undefined && object.toTime !== null) {
            message.toTime = object.toTime;
        } else {
            message.toTime = undefined;
        }
        if (object.recordToken !== undefined && object.recordToken !== null) {
            message.recordToken = object.recordToken;
        } else {
            message.recordToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        if (object.serviceType !== undefined && object.serviceType !== null) {
            message.serviceType = object.serviceType;
        } else {
            message.serviceType = 0;
        }
        return message;
    },
};

const baseListClusterOperationsRequest: object = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListClusterOperationsRequest = {
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

const baseListClusterOperationsResponse: object = { nextPageToken: '' };

export const ListClusterOperationsResponse = {
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

const baseListClusterHostsRequest: object = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListClusterHostsRequest = {
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
        return message;
    },

    toJSON(message: ListClusterHostsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
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
        return message;
    },
};

const baseListClusterHostsResponse: object = { nextPageToken: '' };

export const ListClusterHostsResponse = {
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

const baseMoveClusterRequest: object = {
    clusterId: '',
    destinationFolderId: '',
};

export const MoveClusterRequest = {
    encode(
        message: MoveClusterRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MoveClusterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveClusterRequest } as MoveClusterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveClusterRequest {
        const message = { ...baseMoveClusterRequest } as MoveClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null
        ) {
            message.destinationFolderId = String(object.destinationFolderId);
        } else {
            message.destinationFolderId = '';
        }
        return message;
    },

    toJSON(message: MoveClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },

    fromPartial(object: DeepPartial<MoveClusterRequest>): MoveClusterRequest {
        const message = { ...baseMoveClusterRequest } as MoveClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null
        ) {
            message.destinationFolderId = object.destinationFolderId;
        } else {
            message.destinationFolderId = '';
        }
        return message;
    },
};

const baseMoveClusterMetadata: object = {
    clusterId: '',
    sourceFolderId: '',
    destinationFolderId: '',
};

export const MoveClusterMetadata = {
    encode(
        message: MoveClusterMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.sourceFolderId !== '') {
            writer.uint32(18).string(message.sourceFolderId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(26).string(message.destinationFolderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MoveClusterMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveClusterMetadata } as MoveClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.sourceFolderId = reader.string();
                    break;
                case 3:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveClusterMetadata {
        const message = { ...baseMoveClusterMetadata } as MoveClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.sourceFolderId !== undefined &&
            object.sourceFolderId !== null
        ) {
            message.sourceFolderId = String(object.sourceFolderId);
        } else {
            message.sourceFolderId = '';
        }
        if (
            object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null
        ) {
            message.destinationFolderId = String(object.destinationFolderId);
        } else {
            message.destinationFolderId = '';
        }
        return message;
    },

    toJSON(message: MoveClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.sourceFolderId !== undefined &&
            (obj.sourceFolderId = message.sourceFolderId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },

    fromPartial(object: DeepPartial<MoveClusterMetadata>): MoveClusterMetadata {
        const message = { ...baseMoveClusterMetadata } as MoveClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.sourceFolderId !== undefined &&
            object.sourceFolderId !== null
        ) {
            message.sourceFolderId = object.sourceFolderId;
        } else {
            message.sourceFolderId = '';
        }
        if (
            object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null
        ) {
            message.destinationFolderId = object.destinationFolderId;
        } else {
            message.destinationFolderId = '';
        }
        return message;
    },
};

const baseStartClusterRequest: object = { clusterId: '' };

export const StartClusterRequest = {
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

const baseStartClusterMetadata: object = { clusterId: '' };

export const StartClusterMetadata = {
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

const baseStopClusterRequest: object = { clusterId: '' };

export const StopClusterRequest = {
    encode(
        message: StopClusterRequest,
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
        return message;
    },

    toJSON(message: StopClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial(object: DeepPartial<StopClusterRequest>): StopClusterRequest {
        const message = { ...baseStopClusterRequest } as StopClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        return message;
    },
};

const baseStopClusterMetadata: object = { clusterId: '' };

export const StopClusterMetadata = {
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

const baseHostSpec: object = {
    zoneId: '',
    subnetId: '',
    assignPublicIp: false,
    type: 0,
    shardName: '',
};

export const HostSpec = {
    encode(
        message: HostSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(24).bool(message.assignPublicIp);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.shardName !== '') {
            writer.uint32(42).string(message.shardName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HostSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHostSpec } as HostSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.assignPublicIp = reader.bool();
                    break;
                case 4:
                    message.type = reader.int32() as any;
                    break;
                case 5:
                    message.shardName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HostSpec {
        const message = { ...baseHostSpec } as HostSpec;
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        if (
            object.assignPublicIp !== undefined &&
            object.assignPublicIp !== null
        ) {
            message.assignPublicIp = Boolean(object.assignPublicIp);
        } else {
            message.assignPublicIp = false;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = host_TypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.shardName !== undefined && object.shardName !== null) {
            message.shardName = String(object.shardName);
        } else {
            message.shardName = '';
        }
        return message;
    },

    toJSON(message: HostSpec): unknown {
        const obj: any = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        message.type !== undefined &&
            (obj.type = host_TypeToJSON(message.type));
        message.shardName !== undefined && (obj.shardName = message.shardName);
        return obj;
    },

    fromPartial(object: DeepPartial<HostSpec>): HostSpec {
        const message = { ...baseHostSpec } as HostSpec;
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        if (
            object.assignPublicIp !== undefined &&
            object.assignPublicIp !== null
        ) {
            message.assignPublicIp = object.assignPublicIp;
        } else {
            message.assignPublicIp = false;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.shardName !== undefined && object.shardName !== null) {
            message.shardName = object.shardName;
        } else {
            message.shardName = '';
        }
        return message;
    },
};

const baseElasticsearchSpec: object = { plugins: '' };

export const ElasticsearchSpec = {
    encode(
        message: ElasticsearchSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dataNode !== undefined) {
            ElasticsearchSpec_DataNode.encode(
                message.dataNode,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.masterNode !== undefined) {
            ElasticsearchSpec_MasterNode.encode(
                message.masterNode,
                writer.uint32(18).fork()
            ).ldelim();
        }
        for (const v of message.plugins) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ElasticsearchSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseElasticsearchSpec } as ElasticsearchSpec;
        message.plugins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataNode = ElasticsearchSpec_DataNode.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.masterNode = ElasticsearchSpec_MasterNode.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.plugins.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ElasticsearchSpec {
        const message = { ...baseElasticsearchSpec } as ElasticsearchSpec;
        message.plugins = [];
        if (object.dataNode !== undefined && object.dataNode !== null) {
            message.dataNode = ElasticsearchSpec_DataNode.fromJSON(
                object.dataNode
            );
        } else {
            message.dataNode = undefined;
        }
        if (object.masterNode !== undefined && object.masterNode !== null) {
            message.masterNode = ElasticsearchSpec_MasterNode.fromJSON(
                object.masterNode
            );
        } else {
            message.masterNode = undefined;
        }
        if (object.plugins !== undefined && object.plugins !== null) {
            for (const e of object.plugins) {
                message.plugins.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: ElasticsearchSpec): unknown {
        const obj: any = {};
        message.dataNode !== undefined &&
            (obj.dataNode = message.dataNode
                ? ElasticsearchSpec_DataNode.toJSON(message.dataNode)
                : undefined);
        message.masterNode !== undefined &&
            (obj.masterNode = message.masterNode
                ? ElasticsearchSpec_MasterNode.toJSON(message.masterNode)
                : undefined);
        if (message.plugins) {
            obj.plugins = message.plugins.map((e) => e);
        } else {
            obj.plugins = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<ElasticsearchSpec>): ElasticsearchSpec {
        const message = { ...baseElasticsearchSpec } as ElasticsearchSpec;
        message.plugins = [];
        if (object.dataNode !== undefined && object.dataNode !== null) {
            message.dataNode = ElasticsearchSpec_DataNode.fromPartial(
                object.dataNode
            );
        } else {
            message.dataNode = undefined;
        }
        if (object.masterNode !== undefined && object.masterNode !== null) {
            message.masterNode = ElasticsearchSpec_MasterNode.fromPartial(
                object.masterNode
            );
        } else {
            message.masterNode = undefined;
        }
        if (object.plugins !== undefined && object.plugins !== null) {
            for (const e of object.plugins) {
                message.plugins.push(e);
            }
        }
        return message;
    },
};

const baseElasticsearchSpec_DataNode: object = {};

export const ElasticsearchSpec_DataNode = {
    encode(
        message: ElasticsearchSpec_DataNode,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.elasticsearchConfig7 !== undefined) {
            ElasticsearchConfig7.encode(
                message.elasticsearchConfig7,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ElasticsearchSpec_DataNode {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseElasticsearchSpec_DataNode,
        } as ElasticsearchSpec_DataNode;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.elasticsearchConfig7 = ElasticsearchConfig7.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.resources = Resources.decode(
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

    fromJSON(object: any): ElasticsearchSpec_DataNode {
        const message = {
            ...baseElasticsearchSpec_DataNode,
        } as ElasticsearchSpec_DataNode;
        if (
            object.elasticsearchConfig7 !== undefined &&
            object.elasticsearchConfig7 !== null
        ) {
            message.elasticsearchConfig7 = ElasticsearchConfig7.fromJSON(
                object.elasticsearchConfig7
            );
        } else {
            message.elasticsearchConfig7 = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        return message;
    },

    toJSON(message: ElasticsearchSpec_DataNode): unknown {
        const obj: any = {};
        message.elasticsearchConfig7 !== undefined &&
            (obj.elasticsearchConfig7 = message.elasticsearchConfig7
                ? ElasticsearchConfig7.toJSON(message.elasticsearchConfig7)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ElasticsearchSpec_DataNode>
    ): ElasticsearchSpec_DataNode {
        const message = {
            ...baseElasticsearchSpec_DataNode,
        } as ElasticsearchSpec_DataNode;
        if (
            object.elasticsearchConfig7 !== undefined &&
            object.elasticsearchConfig7 !== null
        ) {
            message.elasticsearchConfig7 = ElasticsearchConfig7.fromPartial(
                object.elasticsearchConfig7
            );
        } else {
            message.elasticsearchConfig7 = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        return message;
    },
};

const baseElasticsearchSpec_MasterNode: object = {};

export const ElasticsearchSpec_MasterNode = {
    encode(
        message: ElasticsearchSpec_MasterNode,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ElasticsearchSpec_MasterNode {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseElasticsearchSpec_MasterNode,
        } as ElasticsearchSpec_MasterNode;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = Resources.decode(
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

    fromJSON(object: any): ElasticsearchSpec_MasterNode {
        const message = {
            ...baseElasticsearchSpec_MasterNode,
        } as ElasticsearchSpec_MasterNode;
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        return message;
    },

    toJSON(message: ElasticsearchSpec_MasterNode): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ElasticsearchSpec_MasterNode>
    ): ElasticsearchSpec_MasterNode {
        const message = {
            ...baseElasticsearchSpec_MasterNode,
        } as ElasticsearchSpec_MasterNode;
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        return message;
    },
};

const baseConfigSpec: object = { version: '', edition: '', adminPassword: '' };

export const ConfigSpec = {
    encode(
        message: ConfigSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.elasticsearchSpec !== undefined) {
            ElasticsearchSpec.encode(
                message.elasticsearchSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.edition !== '') {
            writer.uint32(26).string(message.edition);
        }
        if (message.adminPassword !== '') {
            writer.uint32(34).string(message.adminPassword);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConfigSpec } as ConfigSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.elasticsearchSpec = ElasticsearchSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.edition = reader.string();
                    break;
                case 4:
                    message.adminPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConfigSpec {
        const message = { ...baseConfigSpec } as ConfigSpec;
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        } else {
            message.version = '';
        }
        if (
            object.elasticsearchSpec !== undefined &&
            object.elasticsearchSpec !== null
        ) {
            message.elasticsearchSpec = ElasticsearchSpec.fromJSON(
                object.elasticsearchSpec
            );
        } else {
            message.elasticsearchSpec = undefined;
        }
        if (object.edition !== undefined && object.edition !== null) {
            message.edition = String(object.edition);
        } else {
            message.edition = '';
        }
        if (
            object.adminPassword !== undefined &&
            object.adminPassword !== null
        ) {
            message.adminPassword = String(object.adminPassword);
        } else {
            message.adminPassword = '';
        }
        return message;
    },

    toJSON(message: ConfigSpec): unknown {
        const obj: any = {};
        message.version !== undefined && (obj.version = message.version);
        message.elasticsearchSpec !== undefined &&
            (obj.elasticsearchSpec = message.elasticsearchSpec
                ? ElasticsearchSpec.toJSON(message.elasticsearchSpec)
                : undefined);
        message.edition !== undefined && (obj.edition = message.edition);
        message.adminPassword !== undefined &&
            (obj.adminPassword = message.adminPassword);
        return obj;
    },

    fromPartial(object: DeepPartial<ConfigSpec>): ConfigSpec {
        const message = { ...baseConfigSpec } as ConfigSpec;
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        } else {
            message.version = '';
        }
        if (
            object.elasticsearchSpec !== undefined &&
            object.elasticsearchSpec !== null
        ) {
            message.elasticsearchSpec = ElasticsearchSpec.fromPartial(
                object.elasticsearchSpec
            );
        } else {
            message.elasticsearchSpec = undefined;
        }
        if (object.edition !== undefined && object.edition !== null) {
            message.edition = object.edition;
        } else {
            message.edition = '';
        }
        if (
            object.adminPassword !== undefined &&
            object.adminPassword !== null
        ) {
            message.adminPassword = object.adminPassword;
        } else {
            message.adminPassword = '';
        }
        return message;
    },
};

const baseConfigSpecUpdate: object = {
    version: '',
    edition: '',
    adminPassword: '',
};

export const ConfigSpecUpdate = {
    encode(
        message: ConfigSpecUpdate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.elasticsearchSpec !== undefined) {
            ElasticsearchSpec.encode(
                message.elasticsearchSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.edition !== '') {
            writer.uint32(26).string(message.edition);
        }
        if (message.adminPassword !== '') {
            writer.uint32(34).string(message.adminPassword);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSpecUpdate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConfigSpecUpdate } as ConfigSpecUpdate;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.elasticsearchSpec = ElasticsearchSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.edition = reader.string();
                    break;
                case 4:
                    message.adminPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConfigSpecUpdate {
        const message = { ...baseConfigSpecUpdate } as ConfigSpecUpdate;
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        } else {
            message.version = '';
        }
        if (
            object.elasticsearchSpec !== undefined &&
            object.elasticsearchSpec !== null
        ) {
            message.elasticsearchSpec = ElasticsearchSpec.fromJSON(
                object.elasticsearchSpec
            );
        } else {
            message.elasticsearchSpec = undefined;
        }
        if (object.edition !== undefined && object.edition !== null) {
            message.edition = String(object.edition);
        } else {
            message.edition = '';
        }
        if (
            object.adminPassword !== undefined &&
            object.adminPassword !== null
        ) {
            message.adminPassword = String(object.adminPassword);
        } else {
            message.adminPassword = '';
        }
        return message;
    },

    toJSON(message: ConfigSpecUpdate): unknown {
        const obj: any = {};
        message.version !== undefined && (obj.version = message.version);
        message.elasticsearchSpec !== undefined &&
            (obj.elasticsearchSpec = message.elasticsearchSpec
                ? ElasticsearchSpec.toJSON(message.elasticsearchSpec)
                : undefined);
        message.edition !== undefined && (obj.edition = message.edition);
        message.adminPassword !== undefined &&
            (obj.adminPassword = message.adminPassword);
        return obj;
    },

    fromPartial(object: DeepPartial<ConfigSpecUpdate>): ConfigSpecUpdate {
        const message = { ...baseConfigSpecUpdate } as ConfigSpecUpdate;
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        } else {
            message.version = '';
        }
        if (
            object.elasticsearchSpec !== undefined &&
            object.elasticsearchSpec !== null
        ) {
            message.elasticsearchSpec = ElasticsearchSpec.fromPartial(
                object.elasticsearchSpec
            );
        } else {
            message.elasticsearchSpec = undefined;
        }
        if (object.edition !== undefined && object.edition !== null) {
            message.edition = object.edition;
        } else {
            message.edition = '';
        }
        if (
            object.adminPassword !== undefined &&
            object.adminPassword !== null
        ) {
            message.adminPassword = object.adminPassword;
        } else {
            message.adminPassword = '';
        }
        return message;
    },
};

const baseAddClusterHostsRequest: object = { clusterId: '' };

export const AddClusterHostsRequest = {
    encode(
        message: AddClusterHostsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostSpecs) {
            HostSpec.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddClusterHostsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddClusterHostsRequest,
        } as AddClusterHostsRequest;
        message.hostSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hostSpecs.push(
                        HostSpec.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddClusterHostsRequest {
        const message = {
            ...baseAddClusterHostsRequest,
        } as AddClusterHostsRequest;
        message.hostSpecs = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.hostSpecs !== undefined && object.hostSpecs !== null) {
            for (const e of object.hostSpecs) {
                message.hostSpecs.push(HostSpec.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: AddClusterHostsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) =>
                e ? HostSpec.toJSON(e) : undefined
            );
        } else {
            obj.hostSpecs = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddClusterHostsRequest>
    ): AddClusterHostsRequest {
        const message = {
            ...baseAddClusterHostsRequest,
        } as AddClusterHostsRequest;
        message.hostSpecs = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.hostSpecs !== undefined && object.hostSpecs !== null) {
            for (const e of object.hostSpecs) {
                message.hostSpecs.push(HostSpec.fromPartial(e));
            }
        }
        return message;
    },
};

const baseAddClusterHostsMetadata: object = { clusterId: '', hostNames: '' };

export const AddClusterHostsMetadata = {
    encode(
        message: AddClusterHostsMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddClusterHostsMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddClusterHostsMetadata,
        } as AddClusterHostsMetadata;
        message.hostNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hostNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddClusterHostsMetadata {
        const message = {
            ...baseAddClusterHostsMetadata,
        } as AddClusterHostsMetadata;
        message.hostNames = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.hostNames !== undefined && object.hostNames !== null) {
            for (const e of object.hostNames) {
                message.hostNames.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: AddClusterHostsMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        } else {
            obj.hostNames = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<AddClusterHostsMetadata>
    ): AddClusterHostsMetadata {
        const message = {
            ...baseAddClusterHostsMetadata,
        } as AddClusterHostsMetadata;
        message.hostNames = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.hostNames !== undefined && object.hostNames !== null) {
            for (const e of object.hostNames) {
                message.hostNames.push(e);
            }
        }
        return message;
    },
};

const baseDeleteClusterHostsRequest: object = { clusterId: '', hostNames: '' };

export const DeleteClusterHostsRequest = {
    encode(
        message: DeleteClusterHostsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteClusterHostsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteClusterHostsRequest,
        } as DeleteClusterHostsRequest;
        message.hostNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hostNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteClusterHostsRequest {
        const message = {
            ...baseDeleteClusterHostsRequest,
        } as DeleteClusterHostsRequest;
        message.hostNames = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.hostNames !== undefined && object.hostNames !== null) {
            for (const e of object.hostNames) {
                message.hostNames.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: DeleteClusterHostsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        } else {
            obj.hostNames = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteClusterHostsRequest>
    ): DeleteClusterHostsRequest {
        const message = {
            ...baseDeleteClusterHostsRequest,
        } as DeleteClusterHostsRequest;
        message.hostNames = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.hostNames !== undefined && object.hostNames !== null) {
            for (const e of object.hostNames) {
                message.hostNames.push(e);
            }
        }
        return message;
    },
};

const baseDeleteClusterHostsMetadata: object = { clusterId: '', hostNames: '' };

export const DeleteClusterHostsMetadata = {
    encode(
        message: DeleteClusterHostsMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.hostNames) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteClusterHostsMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteClusterHostsMetadata,
        } as DeleteClusterHostsMetadata;
        message.hostNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.hostNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteClusterHostsMetadata {
        const message = {
            ...baseDeleteClusterHostsMetadata,
        } as DeleteClusterHostsMetadata;
        message.hostNames = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.hostNames !== undefined && object.hostNames !== null) {
            for (const e of object.hostNames) {
                message.hostNames.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: DeleteClusterHostsMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.hostNames) {
            obj.hostNames = message.hostNames.map((e) => e);
        } else {
            obj.hostNames = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteClusterHostsMetadata>
    ): DeleteClusterHostsMetadata {
        const message = {
            ...baseDeleteClusterHostsMetadata,
        } as DeleteClusterHostsMetadata;
        message.hostNames = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.hostNames !== undefined && object.hostNames !== null) {
            for (const e of object.hostNames) {
                message.hostNames.push(e);
            }
        }
        return message;
    },
};

/** A set of methods for managing Elasticsearch clusters. */
export const ClusterServiceService = {
    /**
     * Returns the specified Elasticsearch cluster.
     *
     * To get the list of available Elasticsearch clusters, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetClusterRequest) =>
            Buffer.from(GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
        responseSerialize: (value: Cluster) =>
            Buffer.from(Cluster.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Cluster.decode(value),
    },
    /** Retrieves the list of Elasticsearch clusters that belong to the specified folder. */
    list: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/List',
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
    /** Creates a new Elasticsearch cluster in the specified folder. */
    create: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Create',
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
    /** Updates the specified Elasticsearch cluster. */
    update: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Update',
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
    /** Deletes the specified Elasticsearch cluster. */
    delete: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Delete',
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
    /** Moves the specified Elasticsearch cluster to the specified folder. */
    move: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MoveClusterRequest) =>
            Buffer.from(MoveClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MoveClusterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Starts the specified Elasticsearch cluster. */
    start: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Start',
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
    /** Stops the specified Elasticsearch cluster. */
    stop: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopClusterRequest) =>
            Buffer.from(StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Retrieves logs for the specified Elasticsearch cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-elasticsearch/operations/cluster-logs) section in the documentation.
     */
    listLogs: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListLogs',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterLogsRequest) =>
            Buffer.from(ListClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListClusterLogsRequest.decode(value),
        responseSerialize: (value: ListClusterLogsResponse) =>
            Buffer.from(ListClusterLogsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListClusterLogsResponse.decode(value),
    },
    /** Same as [ListLogs] but using server-side streaming. Also supports `tail -f` semantics. */
    streamLogs: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/StreamLogs',
        requestStream: false,
        responseStream: true,
        requestSerialize: (value: StreamClusterLogsRequest) =>
            Buffer.from(StreamClusterLogsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StreamClusterLogsRequest.decode(value),
        responseSerialize: (value: StreamLogRecord) =>
            Buffer.from(StreamLogRecord.encode(value).finish()),
        responseDeserialize: (value: Buffer) => StreamLogRecord.decode(value),
    },
    /** Retrieves the list of operations for the specified Elasticsearch cluster. */
    listOperations: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListOperations',
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
    /** Retrieves a list of hosts for the specified Elasticsearch cluster. */
    listHosts: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListHosts',
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
    /** Adds new hosts to the specified Elasticsearch cluster. */
    addHosts: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/AddHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddClusterHostsRequest) =>
            Buffer.from(AddClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            AddClusterHostsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes specified hosts from the specified Elasticsearch cluster. */
    deleteHosts: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.ClusterService/DeleteHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteClusterHostsRequest) =>
            Buffer.from(DeleteClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteClusterHostsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Elasticsearch cluster.
     *
     * To get the list of available Elasticsearch clusters, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of Elasticsearch clusters that belong to the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a new Elasticsearch cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified Elasticsearch cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified Elasticsearch cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Moves the specified Elasticsearch cluster to the specified folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /** Starts the specified Elasticsearch cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified Elasticsearch cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /**
     * Retrieves logs for the specified Elasticsearch cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-elasticsearch/operations/cluster-logs) section in the documentation.
     */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Same as [ListLogs] but using server-side streaming. Also supports `tail -f` semantics. */
    streamLogs: handleServerStreamingCall<
        StreamClusterLogsRequest,
        StreamLogRecord
    >;
    /** Retrieves the list of operations for the specified Elasticsearch cluster. */
    listOperations: handleUnaryCall<
        ListClusterOperationsRequest,
        ListClusterOperationsResponse
    >;
    /** Retrieves a list of hosts for the specified Elasticsearch cluster. */
    listHosts: handleUnaryCall<
        ListClusterHostsRequest,
        ListClusterHostsResponse
    >;
    /** Adds new hosts to the specified Elasticsearch cluster. */
    addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
    /** Deletes specified hosts from the specified Elasticsearch cluster. */
    deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified Elasticsearch cluster.
     *
     * To get the list of available Elasticsearch clusters, make a [List] request.
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
    /** Retrieves the list of Elasticsearch clusters that belong to the specified folder. */
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
    /** Creates a new Elasticsearch cluster in the specified folder. */
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
    /** Updates the specified Elasticsearch cluster. */
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
    /** Deletes the specified Elasticsearch cluster. */
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
    /** Moves the specified Elasticsearch cluster to the specified folder. */
    move(
        request: MoveClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Starts the specified Elasticsearch cluster. */
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
    /** Stops the specified Elasticsearch cluster. */
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
    /**
     * Retrieves logs for the specified Elasticsearch cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-elasticsearch/operations/cluster-logs) section in the documentation.
     */
    listLogs(
        request: ListClusterLogsRequest,
        callback: (
            error: ServiceError | null,
            response: ListClusterLogsResponse
        ) => void
    ): ClientUnaryCall;
    listLogs(
        request: ListClusterLogsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListClusterLogsResponse
        ) => void
    ): ClientUnaryCall;
    listLogs(
        request: ListClusterLogsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListClusterLogsResponse
        ) => void
    ): ClientUnaryCall;
    /** Same as [ListLogs] but using server-side streaming. Also supports `tail -f` semantics. */
    streamLogs(
        request: StreamClusterLogsRequest,
        options?: Partial<CallOptions>
    ): ClientReadableStream<StreamLogRecord>;
    streamLogs(
        request: StreamClusterLogsRequest,
        metadata?: Metadata,
        options?: Partial<CallOptions>
    ): ClientReadableStream<StreamLogRecord>;
    /** Retrieves the list of operations for the specified Elasticsearch cluster. */
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
    /** Retrieves a list of hosts for the specified Elasticsearch cluster. */
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
    /** Adds new hosts to the specified Elasticsearch cluster. */
    addHosts(
        request: AddClusterHostsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addHosts(
        request: AddClusterHostsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addHosts(
        request: AddClusterHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes specified hosts from the specified Elasticsearch cluster. */
    deleteHosts(
        request: DeleteClusterHostsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deleteHosts(
        request: DeleteClusterHostsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deleteHosts(
        request: DeleteClusterHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const ClusterServiceClient = makeGenericClientConstructor(
    ClusterServiceService,
    'yandex.cloud.mdb.elasticsearch.v1.ClusterService'
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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
