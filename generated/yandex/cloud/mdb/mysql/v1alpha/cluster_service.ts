/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { TimeOfDay } from '../../../../../google/type/timeofday';
import { Backup } from '../../../../../yandex/cloud/mdb/mysql/v1alpha/backup';
import {
    Cluster_Environment,
    Cluster,
    Host,
    Resources,
    cluster_EnvironmentFromJSON,
    cluster_EnvironmentToJSON,
} from '../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster';
import { Mysqlconfig57 } from '../../../../../yandex/cloud/mdb/mysql/v1alpha/config/mysql5_7';
import { DatabaseSpec } from '../../../../../yandex/cloud/mdb/mysql/v1alpha/database';
import { UserSpec } from '../../../../../yandex/cloud/mdb/mysql/v1alpha/user';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
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

export const protobufPackage = 'yandex.cloud.mdb.mysql.v1alpha';

export interface GetClusterRequest {
    /**
     * ID of the MySQL cluster to return.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface ListClustersRequest {
    /**
     * ID of the folder to list MySQL clusters in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 1-63 characters long and match the regular expression `^[a-zA-Z0-9_-]+$`.
     */
    filter: string;
}

export interface ListClustersResponse {
    /** List of MySQL clusters. */
    clusters: Cluster[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
     * for the [ListClustersRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateClusterRequest {
    /** ID of the folder to create the MySQL cluster in. */
    folderId: string;
    /** Name of the MySQL cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the MySQL cluster. */
    description: string;
    /**
     * Custom labels for the MySQL cluster as `key:value` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: { [key: string]: string };
    /** Deployment environment of the MySQL cluster. */
    environment: Cluster_Environment;
    /** Configuration and resources for hosts that should be created for the MySQL cluster. */
    configSpec: ConfigSpec | undefined;
    /** Descriptions of databases to be created in the MySQL cluster. */
    databaseSpecs: DatabaseSpec[];
    /** Descriptions of database users to be created in the MySQL cluster. */
    userSpecs: UserSpec[];
    /** Individual configurations for hosts that should be created for the MySQL cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the cluster in. */
    networkId: string;
}

export interface CreateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateClusterMetadata {
    /** ID of the MySQL cluster that is being created. */
    clusterId: string;
}

export interface UpdateClusterRequest {
    /**
     * ID of the MySQL cluster to update.
     * To get the MySQL cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which fields of the MySQL cluster should be updated. */
    updateMask: FieldMask | undefined;
    /** New description of the MySQL cluster. */
    description: string;
    /**
     * Custom labels for the MySQL cluster as `key:value` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     *
     * The new set of labels will completely replace the old ones. To add a label, request the current
     * set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
     */
    labels: { [key: string]: string };
    /** New configuration and resources for hosts in the cluster. */
    configSpec: ConfigSpec | undefined;
    /** New name for the cluster. */
    name: string;
}

export interface UpdateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateClusterMetadata {
    /** ID of the MySQL cluster that is being modified. */
    clusterId: string;
}

export interface DeleteClusterRequest {
    /**
     * ID of the MySQL cluster to delete.
     * To get the MySQL cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface DeleteClusterMetadata {
    /** ID of the MySQL cluster that is being deleted. */
    clusterId: string;
}

export interface BackupClusterRequest {
    /**
     * ID of the MySQL cluster to back up.
     * To get the MySQL cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}

export interface BackupClusterMetadata {
    /** ID of the MySQL cluster that is being backed up. */
    clusterId: string;
}

export interface RestoreClusterRequest {
    /**
     * ID of the backup to create a cluster from.
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
    /** Timestamp of the moment to which the MySQL cluster should be restored. */
    time: Date | undefined;
    /** Name of the new MySQL cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the new MySQL cluster. */
    description: string;
    /**
     * Custom labels for the MySQL cluster as `key:value` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: { [key: string]: string };
    /** Deployment environment of the new MySQL cluster. */
    environment: Cluster_Environment;
    /** Configuration for the MySQL cluster to be created. */
    configSpec: ConfigSpec | undefined;
    /**
     * Configurations for MySQL hosts that should be added
     * to the cluster that is being created from the backup.
     */
    hostSpecs: HostSpec[];
    /** ID of the network to create the MySQL cluster in. */
    networkId: string;
}

export interface RestoreClusterRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface RestoreClusterMetadata {
    /** ID of the new MySQL cluster that is being created from a backup. */
    clusterId: string;
    /** ID of the backup that is being used for creating a cluster. */
    backupId: string;
}

export interface LogRecord {
    /** Log record timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    timestamp: Date | undefined;
    /** Contents of the log record. */
    message: { [key: string]: string };
}

export interface LogRecord_MessageEntry {
    key: string;
    value: string;
}

export interface ListClusterLogsRequest {
    /**
     * ID of the MySQL cluster to request logs for.
     * To get the MySQL cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from the logs table to request.
     * If no columns are specified, entire log records are returned.
     */
    columnFilter: string[];
    /** Type of the service to request logs about. */
    serviceType: ListClusterLogsRequest_ServiceType;
    /** Start timestamp for the logs request. */
    fromTime: Date | undefined;
    /** End timestamp for the logs request. */
    toTime: Date | undefined;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterLogsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /** Always return `next_page_token`, even if current page is empty. */
    alwaysNextPageToken: boolean;
}

export enum ListClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** MYSQL - Logs of MySQL activity. */
    MYSQL = 1,
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
        case 'MYSQL':
            return ListClusterLogsRequest_ServiceType.MYSQL;
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
        case ListClusterLogsRequest_ServiceType.MYSQL:
            return 'MYSQL';
        default:
            return 'UNKNOWN';
    }
}

export interface ListClusterLogsResponse {
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListClusterOperationsRequest {
    /** ID of the MySQL cluster to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.  To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListClusterOperationsResponse {
    /** List of operations for the specified MySQL cluster. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListClusterBackupsRequest {
    /**
     * ID of the MySQL cluster.
     * To get the MySQL cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.  To get the next page of results, set [page_token] to the [ListClusterBackupsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListClusterBackupsResponse {
    /** List of MySQL backups. */
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterBackupsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterBackupsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListClusterHostsRequest {
    /**
     * ID of the MySQL cluster.
     * To get the MySQL cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.  To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListClusterHostsResponse {
    /** List of MySQL hosts. */
    hosts: Host[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterHostsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface AddClusterHostsRequest {
    /**
     * ID of the MySQL cluster to add hosts to.
     * To get the MySQL cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configurations for MySQL hosts that should be added to the cluster. */
    hostSpecs: HostSpec[];
}

export interface AddClusterHostsMetadata {
    /** ID of the MySQL cluster to which the hosts are being added. */
    clusterId: string;
    /** Names of hosts that are being added to the cluster. */
    hostNames: string[];
}

export interface DeleteClusterHostsRequest {
    /**
     * ID of the MySQL cluster to remove hosts from.
     * To get the MySQL cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Names of hosts to delete. */
    hostNames: string[];
}

export interface DeleteClusterHostsMetadata {
    /** ID of the MySQL cluster to remove hosts from. */
    clusterId: string;
    /** Names of hosts that are being deleted. */
    hostNames: string[];
}

export interface StartClusterRequest {
    /** ID of the MySQL cluster to start. */
    clusterId: string;
}

export interface StartClusterMetadata {
    /** ID of the MySQL cluster being started. */
    clusterId: string;
}

export interface StopClusterRequest {
    /** ID of the MySQL cluster to stop. */
    clusterId: string;
}

export interface StopClusterMetadata {
    /** ID of the MySQL cluster being stopped. */
    clusterId: string;
}

export interface UpdateClusterHostsMetadata {
    /** ID of the MySQL cluster to modify hosts in. */
    clusterId: string;
    /** Names of hosts that are being modified. */
    hostNames: string[];
}

export interface HostSpec {
    /**
     * ID of the availability zone where the host resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * ID of the subnet that the host should belong to. This subnet should be a part
     * of the network that the cluster belongs to.
     * The ID of the network is set in the field [Cluster.network_id].
     */
    subnetId: string;
    /**
     * Whether the host should get a public IP address on creation.
     *
     * After a host has been created, this setting cannot be changed. To remove an assigned public IP, or to assign
     * a public IP to a host without one, recreate the host with [assign_public_ip] set as needed.
     *
     * Possible values:
     * * false - don't assign a public IP to the host.
     * * true - the host should have a public IP address.
     */
    assignPublicIp: boolean;
}

export interface ConfigSpec {
    /**
     * Version of MySQL used in the cluster.
     * Possible values:
     * * 5.7
     */
    version: string;
    /** Configuration for a MySQL 5.7 cluster. */
    mysqlConfig57: Mysqlconfig57 | undefined;
    /** Resources allocated to MySQL hosts. */
    resources: Resources | undefined;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart: TimeOfDay | undefined;
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
        for (const v of message.databaseSpecs) {
            DatabaseSpec.encode(v!, writer.uint32(58).fork()).ldelim();
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
        message.databaseSpecs = [];
        message.userSpecs = [];
        message.hostSpecs = [];
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
                case 7:
                    message.databaseSpecs.push(
                        DatabaseSpec.decode(reader, reader.uint32())
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
        message.databaseSpecs = [];
        message.userSpecs = [];
        message.hostSpecs = [];
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
        if (
            object.databaseSpecs !== undefined &&
            object.databaseSpecs !== null
        ) {
            for (const e of object.databaseSpecs) {
                message.databaseSpecs.push(DatabaseSpec.fromJSON(e));
            }
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
        if (message.databaseSpecs) {
            obj.databaseSpecs = message.databaseSpecs.map((e) =>
                e ? DatabaseSpec.toJSON(e) : undefined
            );
        } else {
            obj.databaseSpecs = [];
        }
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
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateClusterRequest>
    ): CreateClusterRequest {
        const message = { ...baseCreateClusterRequest } as CreateClusterRequest;
        message.labels = {};
        message.databaseSpecs = [];
        message.userSpecs = [];
        message.hostSpecs = [];
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
        if (
            object.databaseSpecs !== undefined &&
            object.databaseSpecs !== null
        ) {
            for (const e of object.databaseSpecs) {
                message.databaseSpecs.push(DatabaseSpec.fromPartial(e));
            }
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
            ConfigSpec.encode(
                message.configSpec,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
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
                    message.configSpec = ConfigSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.name = reader.string();
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
            message.configSpec = ConfigSpec.fromJSON(object.configSpec);
        } else {
            message.configSpec = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
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
                ? ConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateClusterRequest>
    ): UpdateClusterRequest {
        const message = { ...baseUpdateClusterRequest } as UpdateClusterRequest;
        message.labels = {};
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
            message.configSpec = ConfigSpec.fromPartial(object.configSpec);
        } else {
            message.configSpec = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
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

const baseBackupClusterRequest: object = { clusterId: '' };

export const BackupClusterRequest = {
    encode(
        message: BackupClusterRequest,
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
    ): BackupClusterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackupClusterRequest } as BackupClusterRequest;
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

    fromJSON(object: any): BackupClusterRequest {
        const message = { ...baseBackupClusterRequest } as BackupClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        return message;
    },

    toJSON(message: BackupClusterRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<BackupClusterRequest>
    ): BackupClusterRequest {
        const message = { ...baseBackupClusterRequest } as BackupClusterRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        return message;
    },
};

const baseBackupClusterMetadata: object = { clusterId: '' };

export const BackupClusterMetadata = {
    encode(
        message: BackupClusterMetadata,
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
    ): BackupClusterMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBackupClusterMetadata,
        } as BackupClusterMetadata;
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

    fromJSON(object: any): BackupClusterMetadata {
        const message = {
            ...baseBackupClusterMetadata,
        } as BackupClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        return message;
    },

    toJSON(message: BackupClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<BackupClusterMetadata>
    ): BackupClusterMetadata {
        const message = {
            ...baseBackupClusterMetadata,
        } as BackupClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        return message;
    },
};

const baseRestoreClusterRequest: object = {
    backupId: '',
    name: '',
    description: '',
    environment: 0,
    networkId: '',
};

export const RestoreClusterRequest = {
    encode(
        message: RestoreClusterRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.time !== undefined) {
            Timestamp.encode(
                toTimestamp(message.time),
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            RestoreClusterRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(56).int32(message.environment);
        }
        if (message.configSpec !== undefined) {
            ConfigSpec.encode(
                message.configSpec,
                writer.uint32(66).fork()
            ).ldelim();
        }
        for (const v of message.hostSpecs) {
            HostSpec.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(82).string(message.networkId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RestoreClusterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestoreClusterRequest,
        } as RestoreClusterRequest;
        message.labels = {};
        message.hostSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.time = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = RestoreClusterRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.environment = reader.int32() as any;
                    break;
                case 8:
                    message.configSpec = ConfigSpec.decode(
                        reader,
                        reader.uint32()
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RestoreClusterRequest {
        const message = {
            ...baseRestoreClusterRequest,
        } as RestoreClusterRequest;
        message.labels = {};
        message.hostSpecs = [];
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        } else {
            message.backupId = '';
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromJsonTimestamp(object.time);
        } else {
            message.time = undefined;
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
        return message;
    },

    toJSON(message: RestoreClusterRequest): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.time !== undefined && (obj.time = message.time.toISOString());
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
        if (message.hostSpecs) {
            obj.hostSpecs = message.hostSpecs.map((e) =>
                e ? HostSpec.toJSON(e) : undefined
            );
        } else {
            obj.hostSpecs = [];
        }
        message.networkId !== undefined && (obj.networkId = message.networkId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RestoreClusterRequest>
    ): RestoreClusterRequest {
        const message = {
            ...baseRestoreClusterRequest,
        } as RestoreClusterRequest;
        message.labels = {};
        message.hostSpecs = [];
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        } else {
            message.backupId = '';
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = object.time;
        } else {
            message.time = undefined;
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
        return message;
    },
};

const baseRestoreClusterRequest_LabelsEntry: object = { key: '', value: '' };

export const RestoreClusterRequest_LabelsEntry = {
    encode(
        message: RestoreClusterRequest_LabelsEntry,
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
    ): RestoreClusterRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestoreClusterRequest_LabelsEntry,
        } as RestoreClusterRequest_LabelsEntry;
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

    fromJSON(object: any): RestoreClusterRequest_LabelsEntry {
        const message = {
            ...baseRestoreClusterRequest_LabelsEntry,
        } as RestoreClusterRequest_LabelsEntry;
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

    toJSON(message: RestoreClusterRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RestoreClusterRequest_LabelsEntry>
    ): RestoreClusterRequest_LabelsEntry {
        const message = {
            ...baseRestoreClusterRequest_LabelsEntry,
        } as RestoreClusterRequest_LabelsEntry;
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

const baseRestoreClusterMetadata: object = { clusterId: '', backupId: '' };

export const RestoreClusterMetadata = {
    encode(
        message: RestoreClusterMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.backupId !== '') {
            writer.uint32(18).string(message.backupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RestoreClusterMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestoreClusterMetadata,
        } as RestoreClusterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.backupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RestoreClusterMetadata {
        const message = {
            ...baseRestoreClusterMetadata,
        } as RestoreClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        } else {
            message.backupId = '';
        }
        return message;
    },

    toJSON(message: RestoreClusterMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RestoreClusterMetadata>
    ): RestoreClusterMetadata {
        const message = {
            ...baseRestoreClusterMetadata,
        } as RestoreClusterMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        } else {
            message.backupId = '';
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

const baseListClusterLogsRequest: object = {
    clusterId: '',
    columnFilter: '',
    serviceType: 0,
    pageSize: 0,
    pageToken: '',
    alwaysNextPageToken: false,
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
        if (message.serviceType !== 0) {
            writer.uint32(24).int32(message.serviceType);
        }
        if (message.fromTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.fromTime),
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.toTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.toTime),
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.pageSize !== 0) {
            writer.uint32(48).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(58).string(message.pageToken);
        }
        if (message.alwaysNextPageToken === true) {
            writer.uint32(64).bool(message.alwaysNextPageToken);
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
                    message.serviceType = reader.int32() as any;
                    break;
                case 4:
                    message.fromTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.toTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 6:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.pageToken = reader.string();
                    break;
                case 8:
                    message.alwaysNextPageToken = reader.bool();
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
        if (object.serviceType !== undefined && object.serviceType !== null) {
            message.serviceType = listClusterLogsRequest_ServiceTypeFromJSON(
                object.serviceType
            );
        } else {
            message.serviceType = 0;
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
        message.serviceType !== undefined &&
            (obj.serviceType = listClusterLogsRequest_ServiceTypeToJSON(
                message.serviceType
            ));
        message.fromTime !== undefined &&
            (obj.fromTime = message.fromTime.toISOString());
        message.toTime !== undefined &&
            (obj.toTime = message.toTime.toISOString());
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.alwaysNextPageToken !== undefined &&
            (obj.alwaysNextPageToken = message.alwaysNextPageToken);
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
        if (object.serviceType !== undefined && object.serviceType !== null) {
            message.serviceType = object.serviceType;
        } else {
            message.serviceType = 0;
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

const baseListClusterBackupsRequest: object = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListClusterBackupsRequest = {
    encode(
        message: ListClusterBackupsRequest,
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
    ): ListClusterBackupsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListClusterBackupsRequest,
        } as ListClusterBackupsRequest;
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

    fromJSON(object: any): ListClusterBackupsRequest {
        const message = {
            ...baseListClusterBackupsRequest,
        } as ListClusterBackupsRequest;
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

    toJSON(message: ListClusterBackupsRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListClusterBackupsRequest>
    ): ListClusterBackupsRequest {
        const message = {
            ...baseListClusterBackupsRequest,
        } as ListClusterBackupsRequest;
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

const baseListClusterBackupsResponse: object = { nextPageToken: '' };

export const ListClusterBackupsResponse = {
    encode(
        message: ListClusterBackupsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.backups) {
            Backup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListClusterBackupsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListClusterBackupsResponse,
        } as ListClusterBackupsResponse;
        message.backups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backups.push(
                        Backup.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListClusterBackupsResponse {
        const message = {
            ...baseListClusterBackupsResponse,
        } as ListClusterBackupsResponse;
        message.backups = [];
        if (object.backups !== undefined && object.backups !== null) {
            for (const e of object.backups) {
                message.backups.push(Backup.fromJSON(e));
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

    toJSON(message: ListClusterBackupsResponse): unknown {
        const obj: any = {};
        if (message.backups) {
            obj.backups = message.backups.map((e) =>
                e ? Backup.toJSON(e) : undefined
            );
        } else {
            obj.backups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListClusterBackupsResponse>
    ): ListClusterBackupsResponse {
        const message = {
            ...baseListClusterBackupsResponse,
        } as ListClusterBackupsResponse;
        message.backups = [];
        if (object.backups !== undefined && object.backups !== null) {
            for (const e of object.backups) {
                message.backups.push(Backup.fromPartial(e));
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

const baseUpdateClusterHostsMetadata: object = { clusterId: '', hostNames: '' };

export const UpdateClusterHostsMetadata = {
    encode(
        message: UpdateClusterHostsMetadata,
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
    ): UpdateClusterHostsMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateClusterHostsMetadata,
        } as UpdateClusterHostsMetadata;
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

    fromJSON(object: any): UpdateClusterHostsMetadata {
        const message = {
            ...baseUpdateClusterHostsMetadata,
        } as UpdateClusterHostsMetadata;
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

    toJSON(message: UpdateClusterHostsMetadata): unknown {
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
        object: DeepPartial<UpdateClusterHostsMetadata>
    ): UpdateClusterHostsMetadata {
        const message = {
            ...baseUpdateClusterHostsMetadata,
        } as UpdateClusterHostsMetadata;
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

const baseHostSpec: object = {
    zoneId: '',
    subnetId: '',
    assignPublicIp: false,
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
        return message;
    },

    toJSON(message: HostSpec): unknown {
        const obj: any = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
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
        return message;
    },
};

const baseConfigSpec: object = { version: '' };

export const ConfigSpec = {
    encode(
        message: ConfigSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.mysqlConfig57 !== undefined) {
            Mysqlconfig57.encode(
                message.mysqlConfig57,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.backupWindowStart !== undefined) {
            TimeOfDay.encode(
                message.backupWindowStart,
                writer.uint32(34).fork()
            ).ldelim();
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
                    message.mysqlConfig57 = Mysqlconfig57.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.resources = Resources.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.backupWindowStart = TimeOfDay.decode(
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

    fromJSON(object: any): ConfigSpec {
        const message = { ...baseConfigSpec } as ConfigSpec;
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        } else {
            message.version = '';
        }
        if (
            object.mysqlConfig57 !== undefined &&
            object.mysqlConfig57 !== null
        ) {
            message.mysqlConfig57 = Mysqlconfig57.fromJSON(
                object.mysqlConfig57
            );
        } else {
            message.mysqlConfig57 = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        if (
            object.backupWindowStart !== undefined &&
            object.backupWindowStart !== null
        ) {
            message.backupWindowStart = TimeOfDay.fromJSON(
                object.backupWindowStart
            );
        } else {
            message.backupWindowStart = undefined;
        }
        return message;
    },

    toJSON(message: ConfigSpec): unknown {
        const obj: any = {};
        message.version !== undefined && (obj.version = message.version);
        message.mysqlConfig57 !== undefined &&
            (obj.mysqlConfig57 = message.mysqlConfig57
                ? Mysqlconfig57.toJSON(message.mysqlConfig57)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
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
            object.mysqlConfig57 !== undefined &&
            object.mysqlConfig57 !== null
        ) {
            message.mysqlConfig57 = Mysqlconfig57.fromPartial(
                object.mysqlConfig57
            );
        } else {
            message.mysqlConfig57 = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        if (
            object.backupWindowStart !== undefined &&
            object.backupWindowStart !== null
        ) {
            message.backupWindowStart = TimeOfDay.fromPartial(
                object.backupWindowStart
            );
        } else {
            message.backupWindowStart = undefined;
        }
        return message;
    },
};

/** A set of methods for managing MySQL clusters. */
export const ClusterServiceService = {
    /**
     * Returns the specified MySQL cluster.
     *
     * To get the list of available MySQL clusters, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetClusterRequest) =>
            Buffer.from(GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetClusterRequest.decode(value),
        responseSerialize: (value: Cluster) =>
            Buffer.from(Cluster.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Cluster.decode(value),
    },
    /** Retrieves the list of MySQL clusters that belong to the specified folder. */
    list: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/List',
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
    /** Creates a MySQL cluster in the specified folder. */
    create: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Create',
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
    /** Modifies the specified MySQL cluster. */
    update: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Update',
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
    /** Deletes the specified MySQL cluster. */
    delete: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Delete',
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
    /** Starts the specified MySQL cluster. */
    start: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Start',
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
    /** Stops the specified MySQL cluster. */
    stop: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopClusterRequest) =>
            Buffer.from(StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => StopClusterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Creates a backup for the specified MySQL cluster. */
    backup: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Backup',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BackupClusterRequest) =>
            Buffer.from(BackupClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            BackupClusterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Creates a new MySQL cluster using the specified backup. */
    restore: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Restore',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RestoreClusterRequest) =>
            Buffer.from(RestoreClusterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            RestoreClusterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves logs for the specified MySQL cluster. */
    listLogs: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListLogs',
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
    /** Retrieves the list of operations for the specified MySQL cluster. */
    listOperations: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListOperations',
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
    /** Retrieves the list of available backups for the specified MySQL cluster. */
    listBackups: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListBackups',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListClusterBackupsRequest) =>
            Buffer.from(ListClusterBackupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListClusterBackupsRequest.decode(value),
        responseSerialize: (value: ListClusterBackupsResponse) =>
            Buffer.from(ListClusterBackupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListClusterBackupsResponse.decode(value),
    },
    /** Retrieves a list of hosts for the specified MySQL cluster. */
    listHosts: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListHosts',
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
    /** Creates new hosts for a cluster. */
    addHosts: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/AddHosts',
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
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: {
        path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/DeleteHosts',
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
     * Returns the specified MySQL cluster.
     *
     * To get the list of available MySQL clusters, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of MySQL clusters that belong to the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a MySQL cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Modifies the specified MySQL cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified MySQL cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Starts the specified MySQL cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified MySQL cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Creates a backup for the specified MySQL cluster. */
    backup: handleUnaryCall<BackupClusterRequest, Operation>;
    /** Creates a new MySQL cluster using the specified backup. */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
    /** Retrieves logs for the specified MySQL cluster. */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Retrieves the list of operations for the specified MySQL cluster. */
    listOperations: handleUnaryCall<
        ListClusterOperationsRequest,
        ListClusterOperationsResponse
    >;
    /** Retrieves the list of available backups for the specified MySQL cluster. */
    listBackups: handleUnaryCall<
        ListClusterBackupsRequest,
        ListClusterBackupsResponse
    >;
    /** Retrieves a list of hosts for the specified MySQL cluster. */
    listHosts: handleUnaryCall<
        ListClusterHostsRequest,
        ListClusterHostsResponse
    >;
    /** Creates new hosts for a cluster. */
    addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
}

export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified MySQL cluster.
     *
     * To get the list of available MySQL clusters, make a [List] request.
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
    /** Retrieves the list of MySQL clusters that belong to the specified folder. */
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
    /** Creates a MySQL cluster in the specified folder. */
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
    /** Modifies the specified MySQL cluster. */
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
    /** Deletes the specified MySQL cluster. */
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
    /** Starts the specified MySQL cluster. */
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
    /** Stops the specified MySQL cluster. */
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
    /** Creates a backup for the specified MySQL cluster. */
    backup(
        request: BackupClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    backup(
        request: BackupClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    backup(
        request: BackupClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Creates a new MySQL cluster using the specified backup. */
    restore(
        request: RestoreClusterRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    restore(
        request: RestoreClusterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    restore(
        request: RestoreClusterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Retrieves logs for the specified MySQL cluster. */
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
    /** Retrieves the list of operations for the specified MySQL cluster. */
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
    /** Retrieves the list of available backups for the specified MySQL cluster. */
    listBackups(
        request: ListClusterBackupsRequest,
        callback: (
            error: ServiceError | null,
            response: ListClusterBackupsResponse
        ) => void
    ): ClientUnaryCall;
    listBackups(
        request: ListClusterBackupsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListClusterBackupsResponse
        ) => void
    ): ClientUnaryCall;
    listBackups(
        request: ListClusterBackupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListClusterBackupsResponse
        ) => void
    ): ClientUnaryCall;
    /** Retrieves a list of hosts for the specified MySQL cluster. */
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
    /** Creates new hosts for a cluster. */
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
    /** Deletes the specified hosts for a cluster. */
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
    'yandex.cloud.mdb.mysql.v1alpha.ClusterService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ClusterServiceClient;
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