/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { TimeOfDay } from '../../../../../google/type/timeofday';
import { Backup } from '../../../../../yandex/cloud/mdb/clickhouse/v1/backup';
import { Cluster_Environment, Host_Type, Cluster, Resources, Host, Shard, ShardGroup, Access, CloudStorage } from '../../../../../yandex/cloud/mdb/clickhouse/v1/cluster';
import { ClickhouseConfig_ExternalDictionary, ClickhouseConfig } from '../../../../../yandex/cloud/mdb/clickhouse/v1/config/clickhouse';
import { DatabaseSpec } from '../../../../../yandex/cloud/mdb/clickhouse/v1/database';
import { MaintenanceWindow } from '../../../../../yandex/cloud/mdb/clickhouse/v1/maintenance';
import { UserSpec } from '../../../../../yandex/cloud/mdb/clickhouse/v1/user';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, handleServerStreamingCall, Client, ClientUnaryCall, Metadata, CallOptions, ClientReadableStream, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
export interface GetClusterRequest {
    /**
     * ID of the ClickHouse Cluster resource to return.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    /**
     * ID of the folder to list ClickHouse clusters in.
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
    /** List of ClickHouse Cluster resources. */
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
    /** ID of the folder to create the ClickHouse cluster in. */
    folderId: string;
    /** Name of the ClickHouse cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the ClickHouse cluster. */
    description: string;
    /**
     * Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the ClickHouse cluster. */
    environment: Cluster_Environment;
    /** Configuration and resources for hosts that should be created for the ClickHouse cluster. */
    configSpec: ConfigSpec | undefined;
    /** Descriptions of databases to be created in the ClickHouse cluster. */
    databaseSpecs: DatabaseSpec[];
    /** Descriptions of database users to be created in the ClickHouse cluster. */
    userSpecs: UserSpec[];
    /** Individual configurations for hosts that should be created for the ClickHouse cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the cluster in. */
    networkId: string;
    /** Name of the first shard in cluster. If not set, defaults to the value 'shard1'. */
    shardName: string;
    /** ID of the service account used for access to Yandex Object Storage. */
    serviceAccountId: string;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
}
export interface CreateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    /** ID of the ClickHouse cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    /**
     * ID of the ClickHouse Cluster resource to update.
     * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which fields of the ClickHouse Cluster resource should be updated. */
    updateMask: FieldMask | undefined;
    /** New description of the ClickHouse cluster. */
    description: string;
    /**
     * Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     *
     * The new set of labels will completely replace the old ones. To add a label, request the current
     * set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
     */
    labels: {
        [key: string]: string;
    };
    /** New configuration and resources for hosts in the cluster. */
    configSpec: ConfigSpec | undefined;
    /** New name for the cluster. */
    name: string;
    /** ID of the service account used for access to Yandex Object Storage. */
    serviceAccountId: string;
    /** New maintenance window settings for the cluster. */
    maintenanceWindow: MaintenanceWindow | undefined;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
}
export interface UpdateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    /** ID of the ClickHouse Cluster resource that is being updated. */
    clusterId: string;
}
export interface DeleteClusterRequest {
    /**
     * ID of the ClickHouse cluster to delete.
     * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    /** ID of the ClickHouse cluster that is being deleted. */
    clusterId: string;
}
export interface StartClusterRequest {
    /** ID of the ClickHouse cluster to start. */
    clusterId: string;
}
export interface StartClusterMetadata {
    /** ID of the ClickHouse cluster being started. */
    clusterId: string;
}
export interface StopClusterRequest {
    /** ID of the ClickHouse cluster to stop. */
    clusterId: string;
}
export interface StopClusterMetadata {
    /** ID of the ClickHouse cluster being stopped. */
    clusterId: string;
}
export interface MoveClusterRequest {
    /** ID of the ClickHouse cluster to move. */
    clusterId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveClusterMetadata {
    /** ID of the ClickHouse cluster being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface AddClusterZookeeperRequest {
    /** ID of the ClickHouse cluster to modify. */
    clusterId: string;
    /** Resources allocated to Zookeeper hosts. */
    resources: Resources | undefined;
    /** Configuration of ZooKeeper hosts. */
    hostSpecs: HostSpec[];
}
export interface AddClusterZookeeperMetadata {
    /** ID of the ClickHouse cluster. */
    clusterId: string;
}
export interface BackupClusterRequest {
    /**
     * ID of the ClickHouse cluster to back up.
     * To get the ClickHouse cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface BackupClusterMetadata {
    /** ID of the ClickHouse cluster that is being backed up. */
    clusterId: string;
}
export interface RestoreClusterRequest {
    /**
     * ID of the backup to create a cluster from.
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
    /** Name of the new ClickHouse cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the new ClickHouse cluster. */
    description: string;
    /**
     * Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the new ClickHouse cluster. */
    environment: Cluster_Environment;
    /** Configuration for the ClickHouse cluster to be created. */
    configSpec: ConfigSpec | undefined;
    /**
     * Configurations for ClickHouse hosts that should be created for
     * the cluster that is being created from the backup.
     */
    hostSpecs: HostSpec[];
    /** ID of the network to create the ClickHouse cluster in. */
    networkId: string;
    /** ID of the folder to create the ClickHouse cluster in. */
    folderId: string;
    /** ID of the service account used for access to Yandex Object Storage. */
    serviceAccountId: string;
    /** User security groups */
    securityGroupIds: string[];
}
export interface RestoreClusterRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface RestoreClusterMetadata {
    /** ID of the new ClickHouse cluster that is being created from a backup. */
    clusterId: string;
    /** ID of the backup that is being used for creating a cluster. */
    backupId: string;
}
export interface RescheduleMaintenanceRequest {
    /** ID of the ClickHouse cluster to reschedule the maintenance operation for. */
    clusterId: string;
    /** The type of reschedule request. */
    rescheduleType: RescheduleMaintenanceRequest_RescheduleType;
    /** The time until which this maintenance operation should be delayed. The value should be ahead of the first time when the maintenance operation has been scheduled for no more than two weeks. The value can also point to the past moment of time if [reschedule_type.IMMEDIATE] reschedule type is chosen. */
    delayedUntil: Date | undefined;
}
export declare enum RescheduleMaintenanceRequest_RescheduleType {
    RESCHEDULE_TYPE_UNSPECIFIED = 0,
    /** IMMEDIATE - Start the maintenance operation immediately. */
    IMMEDIATE = 1,
    /** NEXT_AVAILABLE_WINDOW - Start the maintenance operation within the next available maintenance window. */
    NEXT_AVAILABLE_WINDOW = 2,
    /** SPECIFIC_TIME - Start the maintenance operation at the specific time. */
    SPECIFIC_TIME = 3,
    UNRECOGNIZED = -1
}
export declare function rescheduleMaintenanceRequest_RescheduleTypeFromJSON(object: any): RescheduleMaintenanceRequest_RescheduleType;
export declare function rescheduleMaintenanceRequest_RescheduleTypeToJSON(object: RescheduleMaintenanceRequest_RescheduleType): string;
/** Rescheduled maintenance operation metadata. */
export interface RescheduleMaintenanceMetadata {
    /** Required. ID of the ClickHouse cluster. */
    clusterId: string;
    /** Required. The time until which this maintenance operation is to be delayed. */
    delayedUntil: Date | undefined;
}
export interface LogRecord {
    /** Log record timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    timestamp: Date | undefined;
    /** Contents of the log record. */
    message: {
        [key: string]: string;
    };
}
export interface LogRecord_MessageEntry {
    key: string;
    value: string;
}
export interface ListClusterLogsRequest {
    /**
     * ID of the ClickHouse cluster to request logs for.
     * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from logs table to request.
     * If no columns are specified, entire log records are returned.
     */
    columnFilter: string[];
    /** Type of the service to request logs about. */
    serviceType: ListClusterLogsRequest_ServiceType;
    /** Start timestamp for the logs request, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    fromTime: Date | undefined;
    /** End timestamp for the logs request, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    toTime: Date | undefined;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.  To get the next page of results, set [page_token] to the [ListClusterLogsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export declare enum ListClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** CLICKHOUSE - Logs of ClickHouse activity. */
    CLICKHOUSE = 1,
    UNRECOGNIZED = -1
}
export declare function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType;
export declare function listClusterLogsRequest_ServiceTypeToJSON(object: ListClusterLogsRequest_ServiceType): string;
export interface ListClusterLogsResponse {
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     * This value is interchangeable with the [StreamLogRecord.next_record_token] from StreamLogs method.
     */
    nextPageToken: string;
}
export interface StreamLogRecord {
    /** One of the requested log records. */
    record: LogRecord | undefined;
    /**
     * This token allows you to continue streaming logs starting from the exact
     * same record. To continue streaming, specify value of [next_record_token[
     * as value for the [StreamClusterLogsRequest.record_token] parameter in the next StreamLogs request.
     * This value is interchangeable with the [ListClusterLogsResponse.next_page_token] from ListLogs method.
     */
    nextRecordToken: string;
}
export interface StreamClusterLogsRequest {
    /** Required. ID of the ClickHouse cluster. */
    clusterId: string;
    /** Columns from logs table to get in the response. */
    columnFilter: string[];
    serviceType: StreamClusterLogsRequest_ServiceType;
    /** Start timestamp for the logs request. */
    fromTime: Date | undefined;
    /**
     * End timestamp for the logs request.
     * If this field is not set, all existing logs will be sent and then the new ones as
     * they appear. In essence it has `tail -f` semantics.
     */
    toTime: Date | undefined;
    /**
     * Record token. Set [record_token] to the [StreamLogRecord.next_record_token] returned by a previous StreamLogs
     * request to start streaming from next log record.
     */
    recordToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.severity] fields.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 1-63 characters long and match the regular expression `^[a-z0-9.-]{1,61}$`.
     * Examples of a filter:
     * - `message.hostname='node1.db.cloud.yandex.net'`
     * - `message.severity IN ('Error', 'Fatal') AND message.hostname != 'node2.db.cloud.yandex.net'`.
     */
    filter: string;
}
export declare enum StreamClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** CLICKHOUSE - Logs of ClickHouse activity. */
    CLICKHOUSE = 1,
    UNRECOGNIZED = -1
}
export declare function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType;
export declare function streamClusterLogsRequest_ServiceTypeToJSON(object: StreamClusterLogsRequest_ServiceType): string;
export interface ListClusterOperationsRequest {
    /** ID of the ClickHouse Cluster resource to list operations for. */
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
    /** List of Operation resources for the specified ClickHouse cluster. */
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
     * ID of the ClickHouse cluster.
     * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterBackupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterBackupsResponse {
    /** List of ClickHouse Backup resources. */
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
     * ID of the ClickHouse cluster.
     * To get the ClickHouse cluster ID use a [ClusterService.List] request.
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
    /** Requested list of hosts for the cluster. */
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
     * ID of the ClickHouse cluster to add hosts to.
     * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configurations for ClickHouse hosts that should be added to the cluster. */
    hostSpecs: HostSpec[];
    /** Whether to copy schema to new ClickHouse hosts from replicas. */
    copySchema: boolean | undefined;
}
export interface AddClusterHostsMetadata {
    /** ID of the ClickHouse cluster to which the hosts are being added. */
    clusterId: string;
    /** Names of hosts that are being added to the cluster. */
    hostNames: string[];
}
export interface DeleteClusterHostsRequest {
    /**
     * ID of the ClickHouse cluster to remove hosts from.
     * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Names of hosts to delete. */
    hostNames: string[];
}
export interface DeleteClusterHostsMetadata {
    /** ID of the ClickHouse cluster to remove hosts from. */
    clusterId: string;
    /** Names of hosts that are being deleted. */
    hostNames: string[];
}
export interface GetClusterShardRequest {
    /**
     * ID of the cluster that the shard belongs to.
     * To get the cluster ID, use a [ClusterService.List] request.
     * To get the name of the database, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the shard to request information about.
     * To get the name of a shard, use a [ClusterService.ListShards] request.
     */
    shardName: string;
}
export interface ListClusterShardsRequest {
    /**
     * ID of the ClickHouse cluster to list shards in.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterShardsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.  to get the next page of results, set [page_token] to the [ListClusterShardsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterShardsResponse {
    /** List of ClickHouse shards. */
    shards: Shard[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterShardsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterShardsRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface AddClusterShardRequest {
    /**
     * ID of the ClickHouse cluster to add a shard to.
     * To get the ClickHouse cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name for the new shard. */
    shardName: string;
    /** Configuration of the new shard. */
    configSpec: ShardConfigSpec | undefined;
    /** Configurations for ClickHouse hosts that should be created with the shard. */
    hostSpecs: HostSpec[];
    /** Whether to copy schema to hosts of the shard to be created. The schema is copied from hosts of an existing shard. */
    copySchema: boolean | undefined;
}
export interface AddClusterShardMetadata {
    /** ID of the cluster that a shard is being added to. */
    clusterId: string;
    /** Name of the shard being created. */
    shardName: string;
}
export interface UpdateClusterShardRequest {
    /**
     * ID of the ClickHouse cluster the shard belongs to.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the shard to be updated.
     * To get the name of a shard, use a [ClusterService.ListShards] request.
     */
    shardName: string;
    /** Field mask that specifies which attributes of the ClickHouse shard should be updated. */
    updateMask: FieldMask | undefined;
    /** New configuration for the specified shard. */
    configSpec: ShardConfigSpec | undefined;
}
export interface UpdateClusterShardMetadata {
    /** ID of the cluster that contains the shard being updated. */
    clusterId: string;
    /** Name of the shard being updated. */
    shardName: string;
}
export interface DeleteClusterShardRequest {
    /**
     * ID of the ClickHouse cluster the shard belongs to.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the shard to be deleted.
     * To get the name of a shard, use a [ClusterService.ListShards] request.
     */
    shardName: string;
}
export interface DeleteClusterShardMetadata {
    /** ID of the cluster that contains the shard being deleted. */
    clusterId: string;
    /** Name of the shard being deleted. */
    shardName: string;
}
export interface GetClusterShardGroupRequest {
    /**
     * ID of the cluster that the shard group belongs to.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the shard group to request information about.
     *
     * To get the name of a shard group, make a [ClusterService.ListShardGroups] request.
     */
    shardGroupName: string;
}
export interface ListClusterShardGroupsRequest {
    /**
     * ID of the cluster that the shard group belongs to.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClusterShardGroupsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListClusterShardGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterShardGroupsResponse {
    /** List of ClickHouse cluster's shard groups. */
    shardGroups: ShardGroup[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterShardGroupsRequest.page_size], use the [next_page_token] as the value for the [ListClusterShardGroupsRequest.page_token] parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateClusterShardGroupRequest {
    /**
     * ID of the ClickHouse cluster to add a shard group to.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name for the new shard group. */
    shardGroupName: string;
    /** Description of the new shard group. 0-256 characters long. */
    description: string;
    /**
     * List of shard names that should be put into the new group.
     *
     * To get the list, make a [ClusterService.ListShardGroups] request.
     */
    shardNames: string[];
}
export interface CreateClusterShardGroupMetadata {
    /** ID of the cluster to add a shard group to. */
    clusterId: string;
    /** Name of the shard group that is being added. */
    shardGroupName: string;
}
export interface UpdateClusterShardGroupRequest {
    /**
     * ID of the ClickHouse cluster that contains the shard group to update.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the shard group that should be updated.
     *
     * To get the name, make a [ClusterService.ListShardGroups] request.
     */
    shardGroupName: string;
    updateMask: FieldMask | undefined;
    /** Updated description of the shard group. 0-256 characters long. */
    description: string;
    /** Updated list of shard names that belongs to the shard group. */
    shardNames: string[];
}
export interface UpdateClusterShardGroupMetadata {
    /** ID of the cluster that contains the shard group being updated. */
    clusterId: string;
    /** Name of the shard group that is being updated. */
    shardGroupName: string;
}
export interface DeleteClusterShardGroupRequest {
    /**
     * ID of the ClickHouse cluster that contains the shard group to delete.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the shard group that should be deleted.
     *
     * To get the name, make a [ClusterService.ListShardGroups] request.
     */
    shardGroupName: string;
}
export interface DeleteClusterShardGroupMetadata {
    /** ID of the cluster that contains the shard group being deleted. */
    clusterId: string;
    /** Name of the shard group that is being deleted. */
    shardGroupName: string;
}
export interface CreateClusterExternalDictionaryRequest {
    /**
     * ID of the ClickHouse cluster to create the external dictionary for.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the external dictionary. */
    externalDictionary: ClickhouseConfig_ExternalDictionary | undefined;
}
export interface CreateClusterExternalDictionaryMetadata {
    /** ID of the cluster for which an external dictionary is being created. */
    clusterId: string;
}
export interface DeleteClusterExternalDictionaryRequest {
    /**
     * ID of the ClickHouse cluster to delete the external dictionary from.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the external dictionary to delete. */
    externalDictionaryName: string;
}
export interface DeleteClusterExternalDictionaryMetadata {
    /** ID of the cluster where an external dictionary is being deleted. */
    clusterId: string;
}
export interface HostSpec {
    /**
     * ID of the availability zone where the host resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /** Type of the host to be deployed. */
    type: Host_Type;
    /**
     * ID of the subnet that the host should belong to. This subnet should be a part
     * of the network that the cluster belongs to.
     * The ID of the network is set in the [Cluster.network_id] field.
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
    /** Name of the shard that the host is assigned to. */
    shardName: string;
}
export interface ConfigSpec {
    /** Version of the ClickHouse server software. */
    version: string;
    /** Configuration and resources for a ClickHouse server. */
    clickhouse: ConfigSpec_Clickhouse | undefined;
    /** Configuration and resources for a ZooKeeper server. */
    zookeeper: ConfigSpec_Zookeeper | undefined;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart: TimeOfDay | undefined;
    /**
     * Access policy for external services.
     *
     * If you want a specific service to access the ClickHouse cluster, then set the necessary values in this policy.
     */
    access: Access | undefined;
    cloudStorage: CloudStorage | undefined;
    /** Whether database management through SQL commands is enabled. */
    sqlDatabaseManagement: boolean | undefined;
    /** Whether user management through SQL commands is enabled. */
    sqlUserManagement: boolean | undefined;
    /** Password for user 'admin' that has SQL user management access. */
    adminPassword: string;
}
export interface ConfigSpec_Clickhouse {
    /** Configuration for a ClickHouse server. */
    config: ClickhouseConfig | undefined;
    /** Resources allocated to ClickHouse hosts. */
    resources: Resources | undefined;
}
export interface ConfigSpec_Zookeeper {
    /**
     * Resources allocated to ZooKeeper hosts. If not set, minimal available resources will be used.
     * All available resource presets can be retrieved with a [ResourcePresetService.List] request.
     */
    resources: Resources | undefined;
}
export interface ShardConfigSpec {
    /** ClickHouse configuration for a shard. */
    clickhouse: ShardConfigSpec_Clickhouse | undefined;
}
export interface ShardConfigSpec_Clickhouse {
    /** ClickHouse settings for the shard. */
    config: ClickhouseConfig | undefined;
    /** Computational resources for the shard. */
    resources: Resources | undefined;
    /**
     * Relative weight of the shard considered when writing data to the cluster.
     * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/table_engines/distributed/).
     */
    weight: number | undefined;
}
export declare const GetClusterRequest: {
    encode(message: GetClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetClusterRequest;
    fromJSON(object: any): GetClusterRequest;
    toJSON(message: GetClusterRequest): unknown;
    fromPartial(object: DeepPartial<GetClusterRequest>): GetClusterRequest;
};
export declare const ListClustersRequest: {
    encode(message: ListClustersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClustersRequest;
    fromJSON(object: any): ListClustersRequest;
    toJSON(message: ListClustersRequest): unknown;
    fromPartial(object: DeepPartial<ListClustersRequest>): ListClustersRequest;
};
export declare const ListClustersResponse: {
    encode(message: ListClustersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClustersResponse;
    fromJSON(object: any): ListClustersResponse;
    toJSON(message: ListClustersResponse): unknown;
    fromPartial(object: DeepPartial<ListClustersResponse>): ListClustersResponse;
};
export declare const CreateClusterRequest: {
    encode(message: CreateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterRequest;
    fromJSON(object: any): CreateClusterRequest;
    toJSON(message: CreateClusterRequest): unknown;
    fromPartial(object: DeepPartial<CreateClusterRequest>): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    encode(message: CreateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterRequest_LabelsEntry;
    fromJSON(object: any): CreateClusterRequest_LabelsEntry;
    toJSON(message: CreateClusterRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateClusterRequest_LabelsEntry>): CreateClusterRequest_LabelsEntry;
};
export declare const CreateClusterMetadata: {
    encode(message: CreateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterMetadata;
    fromJSON(object: any): CreateClusterMetadata;
    toJSON(message: CreateClusterMetadata): unknown;
    fromPartial(object: DeepPartial<CreateClusterMetadata>): CreateClusterMetadata;
};
export declare const UpdateClusterRequest: {
    encode(message: UpdateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterRequest;
    fromJSON(object: any): UpdateClusterRequest;
    toJSON(message: UpdateClusterRequest): unknown;
    fromPartial(object: DeepPartial<UpdateClusterRequest>): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    encode(message: UpdateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterRequest_LabelsEntry;
    fromJSON(object: any): UpdateClusterRequest_LabelsEntry;
    toJSON(message: UpdateClusterRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateClusterRequest_LabelsEntry>): UpdateClusterRequest_LabelsEntry;
};
export declare const UpdateClusterMetadata: {
    encode(message: UpdateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterMetadata;
    fromJSON(object: any): UpdateClusterMetadata;
    toJSON(message: UpdateClusterMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateClusterMetadata>): UpdateClusterMetadata;
};
export declare const DeleteClusterRequest: {
    encode(message: DeleteClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterRequest;
    fromJSON(object: any): DeleteClusterRequest;
    toJSON(message: DeleteClusterRequest): unknown;
    fromPartial(object: DeepPartial<DeleteClusterRequest>): DeleteClusterRequest;
};
export declare const DeleteClusterMetadata: {
    encode(message: DeleteClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterMetadata;
    fromJSON(object: any): DeleteClusterMetadata;
    toJSON(message: DeleteClusterMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteClusterMetadata>): DeleteClusterMetadata;
};
export declare const StartClusterRequest: {
    encode(message: StartClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterRequest;
    fromJSON(object: any): StartClusterRequest;
    toJSON(message: StartClusterRequest): unknown;
    fromPartial(object: DeepPartial<StartClusterRequest>): StartClusterRequest;
};
export declare const StartClusterMetadata: {
    encode(message: StartClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterMetadata;
    fromJSON(object: any): StartClusterMetadata;
    toJSON(message: StartClusterMetadata): unknown;
    fromPartial(object: DeepPartial<StartClusterMetadata>): StartClusterMetadata;
};
export declare const StopClusterRequest: {
    encode(message: StopClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopClusterRequest;
    fromJSON(object: any): StopClusterRequest;
    toJSON(message: StopClusterRequest): unknown;
    fromPartial(object: DeepPartial<StopClusterRequest>): StopClusterRequest;
};
export declare const StopClusterMetadata: {
    encode(message: StopClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopClusterMetadata;
    fromJSON(object: any): StopClusterMetadata;
    toJSON(message: StopClusterMetadata): unknown;
    fromPartial(object: DeepPartial<StopClusterMetadata>): StopClusterMetadata;
};
export declare const MoveClusterRequest: {
    encode(message: MoveClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveClusterRequest;
    fromJSON(object: any): MoveClusterRequest;
    toJSON(message: MoveClusterRequest): unknown;
    fromPartial(object: DeepPartial<MoveClusterRequest>): MoveClusterRequest;
};
export declare const MoveClusterMetadata: {
    encode(message: MoveClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveClusterMetadata;
    fromJSON(object: any): MoveClusterMetadata;
    toJSON(message: MoveClusterMetadata): unknown;
    fromPartial(object: DeepPartial<MoveClusterMetadata>): MoveClusterMetadata;
};
export declare const AddClusterZookeeperRequest: {
    encode(message: AddClusterZookeeperRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterZookeeperRequest;
    fromJSON(object: any): AddClusterZookeeperRequest;
    toJSON(message: AddClusterZookeeperRequest): unknown;
    fromPartial(object: DeepPartial<AddClusterZookeeperRequest>): AddClusterZookeeperRequest;
};
export declare const AddClusterZookeeperMetadata: {
    encode(message: AddClusterZookeeperMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterZookeeperMetadata;
    fromJSON(object: any): AddClusterZookeeperMetadata;
    toJSON(message: AddClusterZookeeperMetadata): unknown;
    fromPartial(object: DeepPartial<AddClusterZookeeperMetadata>): AddClusterZookeeperMetadata;
};
export declare const BackupClusterRequest: {
    encode(message: BackupClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupClusterRequest;
    fromJSON(object: any): BackupClusterRequest;
    toJSON(message: BackupClusterRequest): unknown;
    fromPartial(object: DeepPartial<BackupClusterRequest>): BackupClusterRequest;
};
export declare const BackupClusterMetadata: {
    encode(message: BackupClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupClusterMetadata;
    fromJSON(object: any): BackupClusterMetadata;
    toJSON(message: BackupClusterMetadata): unknown;
    fromPartial(object: DeepPartial<BackupClusterMetadata>): BackupClusterMetadata;
};
export declare const RestoreClusterRequest: {
    encode(message: RestoreClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreClusterRequest;
    fromJSON(object: any): RestoreClusterRequest;
    toJSON(message: RestoreClusterRequest): unknown;
    fromPartial(object: DeepPartial<RestoreClusterRequest>): RestoreClusterRequest;
};
export declare const RestoreClusterRequest_LabelsEntry: {
    encode(message: RestoreClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreClusterRequest_LabelsEntry;
    fromJSON(object: any): RestoreClusterRequest_LabelsEntry;
    toJSON(message: RestoreClusterRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<RestoreClusterRequest_LabelsEntry>): RestoreClusterRequest_LabelsEntry;
};
export declare const RestoreClusterMetadata: {
    encode(message: RestoreClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreClusterMetadata;
    fromJSON(object: any): RestoreClusterMetadata;
    toJSON(message: RestoreClusterMetadata): unknown;
    fromPartial(object: DeepPartial<RestoreClusterMetadata>): RestoreClusterMetadata;
};
export declare const RescheduleMaintenanceRequest: {
    encode(message: RescheduleMaintenanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RescheduleMaintenanceRequest;
    fromJSON(object: any): RescheduleMaintenanceRequest;
    toJSON(message: RescheduleMaintenanceRequest): unknown;
    fromPartial(object: DeepPartial<RescheduleMaintenanceRequest>): RescheduleMaintenanceRequest;
};
export declare const RescheduleMaintenanceMetadata: {
    encode(message: RescheduleMaintenanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RescheduleMaintenanceMetadata;
    fromJSON(object: any): RescheduleMaintenanceMetadata;
    toJSON(message: RescheduleMaintenanceMetadata): unknown;
    fromPartial(object: DeepPartial<RescheduleMaintenanceMetadata>): RescheduleMaintenanceMetadata;
};
export declare const LogRecord: {
    encode(message: LogRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogRecord;
    fromJSON(object: any): LogRecord;
    toJSON(message: LogRecord): unknown;
    fromPartial(object: DeepPartial<LogRecord>): LogRecord;
};
export declare const LogRecord_MessageEntry: {
    encode(message: LogRecord_MessageEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogRecord_MessageEntry;
    fromJSON(object: any): LogRecord_MessageEntry;
    toJSON(message: LogRecord_MessageEntry): unknown;
    fromPartial(object: DeepPartial<LogRecord_MessageEntry>): LogRecord_MessageEntry;
};
export declare const ListClusterLogsRequest: {
    encode(message: ListClusterLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterLogsRequest;
    fromJSON(object: any): ListClusterLogsRequest;
    toJSON(message: ListClusterLogsRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterLogsRequest>): ListClusterLogsRequest;
};
export declare const ListClusterLogsResponse: {
    encode(message: ListClusterLogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterLogsResponse;
    fromJSON(object: any): ListClusterLogsResponse;
    toJSON(message: ListClusterLogsResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterLogsResponse>): ListClusterLogsResponse;
};
export declare const StreamLogRecord: {
    encode(message: StreamLogRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamLogRecord;
    fromJSON(object: any): StreamLogRecord;
    toJSON(message: StreamLogRecord): unknown;
    fromPartial(object: DeepPartial<StreamLogRecord>): StreamLogRecord;
};
export declare const StreamClusterLogsRequest: {
    encode(message: StreamClusterLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamClusterLogsRequest;
    fromJSON(object: any): StreamClusterLogsRequest;
    toJSON(message: StreamClusterLogsRequest): unknown;
    fromPartial(object: DeepPartial<StreamClusterLogsRequest>): StreamClusterLogsRequest;
};
export declare const ListClusterOperationsRequest: {
    encode(message: ListClusterOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterOperationsRequest;
    fromJSON(object: any): ListClusterOperationsRequest;
    toJSON(message: ListClusterOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterOperationsRequest>): ListClusterOperationsRequest;
};
export declare const ListClusterOperationsResponse: {
    encode(message: ListClusterOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterOperationsResponse;
    fromJSON(object: any): ListClusterOperationsResponse;
    toJSON(message: ListClusterOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterOperationsResponse>): ListClusterOperationsResponse;
};
export declare const ListClusterBackupsRequest: {
    encode(message: ListClusterBackupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterBackupsRequest;
    fromJSON(object: any): ListClusterBackupsRequest;
    toJSON(message: ListClusterBackupsRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterBackupsRequest>): ListClusterBackupsRequest;
};
export declare const ListClusterBackupsResponse: {
    encode(message: ListClusterBackupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterBackupsResponse;
    fromJSON(object: any): ListClusterBackupsResponse;
    toJSON(message: ListClusterBackupsResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterBackupsResponse>): ListClusterBackupsResponse;
};
export declare const ListClusterHostsRequest: {
    encode(message: ListClusterHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsRequest;
    fromJSON(object: any): ListClusterHostsRequest;
    toJSON(message: ListClusterHostsRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterHostsRequest>): ListClusterHostsRequest;
};
export declare const ListClusterHostsResponse: {
    encode(message: ListClusterHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsResponse;
    fromJSON(object: any): ListClusterHostsResponse;
    toJSON(message: ListClusterHostsResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterHostsResponse>): ListClusterHostsResponse;
};
export declare const AddClusterHostsRequest: {
    encode(message: AddClusterHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterHostsRequest;
    fromJSON(object: any): AddClusterHostsRequest;
    toJSON(message: AddClusterHostsRequest): unknown;
    fromPartial(object: DeepPartial<AddClusterHostsRequest>): AddClusterHostsRequest;
};
export declare const AddClusterHostsMetadata: {
    encode(message: AddClusterHostsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterHostsMetadata;
    fromJSON(object: any): AddClusterHostsMetadata;
    toJSON(message: AddClusterHostsMetadata): unknown;
    fromPartial(object: DeepPartial<AddClusterHostsMetadata>): AddClusterHostsMetadata;
};
export declare const DeleteClusterHostsRequest: {
    encode(message: DeleteClusterHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterHostsRequest;
    fromJSON(object: any): DeleteClusterHostsRequest;
    toJSON(message: DeleteClusterHostsRequest): unknown;
    fromPartial(object: DeepPartial<DeleteClusterHostsRequest>): DeleteClusterHostsRequest;
};
export declare const DeleteClusterHostsMetadata: {
    encode(message: DeleteClusterHostsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterHostsMetadata;
    fromJSON(object: any): DeleteClusterHostsMetadata;
    toJSON(message: DeleteClusterHostsMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteClusterHostsMetadata>): DeleteClusterHostsMetadata;
};
export declare const GetClusterShardRequest: {
    encode(message: GetClusterShardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetClusterShardRequest;
    fromJSON(object: any): GetClusterShardRequest;
    toJSON(message: GetClusterShardRequest): unknown;
    fromPartial(object: DeepPartial<GetClusterShardRequest>): GetClusterShardRequest;
};
export declare const ListClusterShardsRequest: {
    encode(message: ListClusterShardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterShardsRequest;
    fromJSON(object: any): ListClusterShardsRequest;
    toJSON(message: ListClusterShardsRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterShardsRequest>): ListClusterShardsRequest;
};
export declare const ListClusterShardsResponse: {
    encode(message: ListClusterShardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterShardsResponse;
    fromJSON(object: any): ListClusterShardsResponse;
    toJSON(message: ListClusterShardsResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterShardsResponse>): ListClusterShardsResponse;
};
export declare const AddClusterShardRequest: {
    encode(message: AddClusterShardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterShardRequest;
    fromJSON(object: any): AddClusterShardRequest;
    toJSON(message: AddClusterShardRequest): unknown;
    fromPartial(object: DeepPartial<AddClusterShardRequest>): AddClusterShardRequest;
};
export declare const AddClusterShardMetadata: {
    encode(message: AddClusterShardMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterShardMetadata;
    fromJSON(object: any): AddClusterShardMetadata;
    toJSON(message: AddClusterShardMetadata): unknown;
    fromPartial(object: DeepPartial<AddClusterShardMetadata>): AddClusterShardMetadata;
};
export declare const UpdateClusterShardRequest: {
    encode(message: UpdateClusterShardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterShardRequest;
    fromJSON(object: any): UpdateClusterShardRequest;
    toJSON(message: UpdateClusterShardRequest): unknown;
    fromPartial(object: DeepPartial<UpdateClusterShardRequest>): UpdateClusterShardRequest;
};
export declare const UpdateClusterShardMetadata: {
    encode(message: UpdateClusterShardMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterShardMetadata;
    fromJSON(object: any): UpdateClusterShardMetadata;
    toJSON(message: UpdateClusterShardMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateClusterShardMetadata>): UpdateClusterShardMetadata;
};
export declare const DeleteClusterShardRequest: {
    encode(message: DeleteClusterShardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterShardRequest;
    fromJSON(object: any): DeleteClusterShardRequest;
    toJSON(message: DeleteClusterShardRequest): unknown;
    fromPartial(object: DeepPartial<DeleteClusterShardRequest>): DeleteClusterShardRequest;
};
export declare const DeleteClusterShardMetadata: {
    encode(message: DeleteClusterShardMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterShardMetadata;
    fromJSON(object: any): DeleteClusterShardMetadata;
    toJSON(message: DeleteClusterShardMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteClusterShardMetadata>): DeleteClusterShardMetadata;
};
export declare const GetClusterShardGroupRequest: {
    encode(message: GetClusterShardGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetClusterShardGroupRequest;
    fromJSON(object: any): GetClusterShardGroupRequest;
    toJSON(message: GetClusterShardGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetClusterShardGroupRequest>): GetClusterShardGroupRequest;
};
export declare const ListClusterShardGroupsRequest: {
    encode(message: ListClusterShardGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterShardGroupsRequest;
    fromJSON(object: any): ListClusterShardGroupsRequest;
    toJSON(message: ListClusterShardGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterShardGroupsRequest>): ListClusterShardGroupsRequest;
};
export declare const ListClusterShardGroupsResponse: {
    encode(message: ListClusterShardGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterShardGroupsResponse;
    fromJSON(object: any): ListClusterShardGroupsResponse;
    toJSON(message: ListClusterShardGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterShardGroupsResponse>): ListClusterShardGroupsResponse;
};
export declare const CreateClusterShardGroupRequest: {
    encode(message: CreateClusterShardGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterShardGroupRequest;
    fromJSON(object: any): CreateClusterShardGroupRequest;
    toJSON(message: CreateClusterShardGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateClusterShardGroupRequest>): CreateClusterShardGroupRequest;
};
export declare const CreateClusterShardGroupMetadata: {
    encode(message: CreateClusterShardGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterShardGroupMetadata;
    fromJSON(object: any): CreateClusterShardGroupMetadata;
    toJSON(message: CreateClusterShardGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateClusterShardGroupMetadata>): CreateClusterShardGroupMetadata;
};
export declare const UpdateClusterShardGroupRequest: {
    encode(message: UpdateClusterShardGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterShardGroupRequest;
    fromJSON(object: any): UpdateClusterShardGroupRequest;
    toJSON(message: UpdateClusterShardGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateClusterShardGroupRequest>): UpdateClusterShardGroupRequest;
};
export declare const UpdateClusterShardGroupMetadata: {
    encode(message: UpdateClusterShardGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterShardGroupMetadata;
    fromJSON(object: any): UpdateClusterShardGroupMetadata;
    toJSON(message: UpdateClusterShardGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateClusterShardGroupMetadata>): UpdateClusterShardGroupMetadata;
};
export declare const DeleteClusterShardGroupRequest: {
    encode(message: DeleteClusterShardGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterShardGroupRequest;
    fromJSON(object: any): DeleteClusterShardGroupRequest;
    toJSON(message: DeleteClusterShardGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteClusterShardGroupRequest>): DeleteClusterShardGroupRequest;
};
export declare const DeleteClusterShardGroupMetadata: {
    encode(message: DeleteClusterShardGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterShardGroupMetadata;
    fromJSON(object: any): DeleteClusterShardGroupMetadata;
    toJSON(message: DeleteClusterShardGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteClusterShardGroupMetadata>): DeleteClusterShardGroupMetadata;
};
export declare const CreateClusterExternalDictionaryRequest: {
    encode(message: CreateClusterExternalDictionaryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterExternalDictionaryRequest;
    fromJSON(object: any): CreateClusterExternalDictionaryRequest;
    toJSON(message: CreateClusterExternalDictionaryRequest): unknown;
    fromPartial(object: DeepPartial<CreateClusterExternalDictionaryRequest>): CreateClusterExternalDictionaryRequest;
};
export declare const CreateClusterExternalDictionaryMetadata: {
    encode(message: CreateClusterExternalDictionaryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterExternalDictionaryMetadata;
    fromJSON(object: any): CreateClusterExternalDictionaryMetadata;
    toJSON(message: CreateClusterExternalDictionaryMetadata): unknown;
    fromPartial(object: DeepPartial<CreateClusterExternalDictionaryMetadata>): CreateClusterExternalDictionaryMetadata;
};
export declare const DeleteClusterExternalDictionaryRequest: {
    encode(message: DeleteClusterExternalDictionaryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterExternalDictionaryRequest;
    fromJSON(object: any): DeleteClusterExternalDictionaryRequest;
    toJSON(message: DeleteClusterExternalDictionaryRequest): unknown;
    fromPartial(object: DeepPartial<DeleteClusterExternalDictionaryRequest>): DeleteClusterExternalDictionaryRequest;
};
export declare const DeleteClusterExternalDictionaryMetadata: {
    encode(message: DeleteClusterExternalDictionaryMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterExternalDictionaryMetadata;
    fromJSON(object: any): DeleteClusterExternalDictionaryMetadata;
    toJSON(message: DeleteClusterExternalDictionaryMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteClusterExternalDictionaryMetadata>): DeleteClusterExternalDictionaryMetadata;
};
export declare const HostSpec: {
    encode(message: HostSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostSpec;
    fromJSON(object: any): HostSpec;
    toJSON(message: HostSpec): unknown;
    fromPartial(object: DeepPartial<HostSpec>): HostSpec;
};
export declare const ConfigSpec: {
    encode(message: ConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec;
    fromJSON(object: any): ConfigSpec;
    toJSON(message: ConfigSpec): unknown;
    fromPartial(object: DeepPartial<ConfigSpec>): ConfigSpec;
};
export declare const ConfigSpec_Clickhouse: {
    encode(message: ConfigSpec_Clickhouse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec_Clickhouse;
    fromJSON(object: any): ConfigSpec_Clickhouse;
    toJSON(message: ConfigSpec_Clickhouse): unknown;
    fromPartial(object: DeepPartial<ConfigSpec_Clickhouse>): ConfigSpec_Clickhouse;
};
export declare const ConfigSpec_Zookeeper: {
    encode(message: ConfigSpec_Zookeeper, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec_Zookeeper;
    fromJSON(object: any): ConfigSpec_Zookeeper;
    toJSON(message: ConfigSpec_Zookeeper): unknown;
    fromPartial(object: DeepPartial<ConfigSpec_Zookeeper>): ConfigSpec_Zookeeper;
};
export declare const ShardConfigSpec: {
    encode(message: ShardConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ShardConfigSpec;
    fromJSON(object: any): ShardConfigSpec;
    toJSON(message: ShardConfigSpec): unknown;
    fromPartial(object: DeepPartial<ShardConfigSpec>): ShardConfigSpec;
};
export declare const ShardConfigSpec_Clickhouse: {
    encode(message: ShardConfigSpec_Clickhouse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ShardConfigSpec_Clickhouse;
    fromJSON(object: any): ShardConfigSpec_Clickhouse;
    toJSON(message: ShardConfigSpec_Clickhouse): unknown;
    fromPartial(object: DeepPartial<ShardConfigSpec_Clickhouse>): ShardConfigSpec_Clickhouse;
};
/** A set of methods for managing ClickHouse clusters. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified ClickHouse cluster.
     *
     * To get the list of available ClickHouse clusters, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /**
     * Retrieves a list of ClickHouse clusters that belong
     * to the specified folder.
     */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a ClickHouse cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified ClickHouse cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified ClickHouse cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified ClickHouse cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified ClickHouse cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Moves a ClickHouse cluster to the specified folder. */
    readonly move: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Adds a ZooKeeper subcluster to the specified ClickHouse cluster. */
    readonly addZookeeper: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddZookeeper";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddClusterZookeeperRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddClusterZookeeperRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a backup for the specified ClickHouse cluster. */
    readonly backup: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Backup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BackupClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BackupClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a new ClickHouse cluster using the specified backup. */
    readonly restore: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Reschedules planned maintenance operation. */
    readonly rescheduleMaintenance: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/RescheduleMaintenance";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RescheduleMaintenanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves logs for the specified ClickHouse cluster. */
    readonly listLogs: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterLogsRequest;
        readonly responseSerialize: (value: ListClusterLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterLogsResponse;
    };
    /** Same as ListLogs but using server-side streaming. Also allows for `tail -f` semantics. */
    readonly streamLogs: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/StreamLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamClusterLogsRequest;
        readonly responseSerialize: (value: StreamLogRecord) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamLogRecord;
    };
    /** Retrieves the list of Operation resources for the specified cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves the list of available backups for the specified ClickHouse cluster. */
    readonly listBackups: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListBackups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterBackupsRequest;
        readonly responseSerialize: (value: ListClusterBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterBackupsResponse;
    };
    /** Retrieves a list of hosts for the specified cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Creates new hosts for a cluster. */
    readonly addHosts: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified hosts for a cluster. */
    readonly deleteHosts: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the specified shard. */
    readonly getShard: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShard";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterShardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterShardRequest;
        readonly responseSerialize: (value: Shard) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Shard;
    };
    /** Retrieves a list of shards that belong to the specified cluster. */
    readonly listShards: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShards";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterShardsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterShardsRequest;
        readonly responseSerialize: (value: ListClusterShardsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterShardsResponse;
    };
    /** Creates a new shard in the specified cluster. */
    readonly addShard: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddShard";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddClusterShardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddClusterShardRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Modifies the specified shard. */
    readonly updateShard: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShard";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterShardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterShardRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified shard. */
    readonly deleteShard: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShard";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterShardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterShardRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the specified shard group. */
    readonly getShardGroup: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShardGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterShardGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterShardGroupRequest;
        readonly responseSerialize: (value: ShardGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ShardGroup;
    };
    /** Retrieves a list of shard groups that belong to specified cluster. */
    readonly listShardGroups: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShardGroups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterShardGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterShardGroupsRequest;
        readonly responseSerialize: (value: ListClusterShardGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterShardGroupsResponse;
    };
    /** Creates a new shard group in the specified cluster. */
    readonly createShardGroup: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateShardGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterShardGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterShardGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified shard group. */
    readonly updateShardGroup: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShardGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterShardGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterShardGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified shard group. */
    readonly deleteShardGroup: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShardGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterShardGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterShardGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates an external dictionary for the specified ClickHouse cluster. */
    readonly createExternalDictionary: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateExternalDictionary";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterExternalDictionaryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterExternalDictionaryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified external dictionary. */
    readonly deleteExternalDictionary: {
        readonly path: "/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteExternalDictionary";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterExternalDictionaryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterExternalDictionaryRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified ClickHouse cluster.
     *
     * To get the list of available ClickHouse clusters, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /**
     * Retrieves a list of ClickHouse clusters that belong
     * to the specified folder.
     */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a ClickHouse cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified ClickHouse cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified ClickHouse cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Starts the specified ClickHouse cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified ClickHouse cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Moves a ClickHouse cluster to the specified folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /** Adds a ZooKeeper subcluster to the specified ClickHouse cluster. */
    addZookeeper: handleUnaryCall<AddClusterZookeeperRequest, Operation>;
    /** Creates a backup for the specified ClickHouse cluster. */
    backup: handleUnaryCall<BackupClusterRequest, Operation>;
    /** Creates a new ClickHouse cluster using the specified backup. */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
    /** Retrieves logs for the specified ClickHouse cluster. */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Same as ListLogs but using server-side streaming. Also allows for `tail -f` semantics. */
    streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves the list of available backups for the specified ClickHouse cluster. */
    listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Creates new hosts for a cluster. */
    addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
    /** Returns the specified shard. */
    getShard: handleUnaryCall<GetClusterShardRequest, Shard>;
    /** Retrieves a list of shards that belong to the specified cluster. */
    listShards: handleUnaryCall<ListClusterShardsRequest, ListClusterShardsResponse>;
    /** Creates a new shard in the specified cluster. */
    addShard: handleUnaryCall<AddClusterShardRequest, Operation>;
    /** Modifies the specified shard. */
    updateShard: handleUnaryCall<UpdateClusterShardRequest, Operation>;
    /** Deletes the specified shard. */
    deleteShard: handleUnaryCall<DeleteClusterShardRequest, Operation>;
    /** Returns the specified shard group. */
    getShardGroup: handleUnaryCall<GetClusterShardGroupRequest, ShardGroup>;
    /** Retrieves a list of shard groups that belong to specified cluster. */
    listShardGroups: handleUnaryCall<ListClusterShardGroupsRequest, ListClusterShardGroupsResponse>;
    /** Creates a new shard group in the specified cluster. */
    createShardGroup: handleUnaryCall<CreateClusterShardGroupRequest, Operation>;
    /** Updates the specified shard group. */
    updateShardGroup: handleUnaryCall<UpdateClusterShardGroupRequest, Operation>;
    /** Deletes the specified shard group. */
    deleteShardGroup: handleUnaryCall<DeleteClusterShardGroupRequest, Operation>;
    /** Creates an external dictionary for the specified ClickHouse cluster. */
    createExternalDictionary: handleUnaryCall<CreateClusterExternalDictionaryRequest, Operation>;
    /** Deletes the specified external dictionary. */
    deleteExternalDictionary: handleUnaryCall<DeleteClusterExternalDictionaryRequest, Operation>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified ClickHouse cluster.
     *
     * To get the list of available ClickHouse clusters, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /**
     * Retrieves a list of ClickHouse clusters that belong
     * to the specified folder.
     */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a ClickHouse cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified ClickHouse cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified ClickHouse cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified ClickHouse cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified ClickHouse cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Moves a ClickHouse cluster to the specified folder. */
    move(request: MoveClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Adds a ZooKeeper subcluster to the specified ClickHouse cluster. */
    addZookeeper(request: AddClusterZookeeperRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addZookeeper(request: AddClusterZookeeperRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addZookeeper(request: AddClusterZookeeperRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a backup for the specified ClickHouse cluster. */
    backup(request: BackupClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a new ClickHouse cluster using the specified backup. */
    restore(request: RestoreClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves logs for the specified ClickHouse cluster. */
    listLogs(request: ListClusterLogsRequest, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    /** Same as ListLogs but using server-side streaming. Also allows for `tail -f` semantics. */
    streamLogs(request: StreamClusterLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    streamLogs(request: StreamClusterLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of available backups for the specified ClickHouse cluster. */
    listBackups(request: ListClusterBackupsRequest, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    /** Creates new hosts for a cluster. */
    addHosts(request: AddClusterHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addHosts(request: AddClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addHosts(request: AddClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts(request: DeleteClusterHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteHosts(request: DeleteClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteHosts(request: DeleteClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the specified shard. */
    getShard(request: GetClusterShardRequest, callback: (error: ServiceError | null, response: Shard) => void): ClientUnaryCall;
    getShard(request: GetClusterShardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Shard) => void): ClientUnaryCall;
    getShard(request: GetClusterShardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Shard) => void): ClientUnaryCall;
    /** Retrieves a list of shards that belong to the specified cluster. */
    listShards(request: ListClusterShardsRequest, callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void): ClientUnaryCall;
    listShards(request: ListClusterShardsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void): ClientUnaryCall;
    listShards(request: ListClusterShardsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void): ClientUnaryCall;
    /** Creates a new shard in the specified cluster. */
    addShard(request: AddClusterShardRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addShard(request: AddClusterShardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addShard(request: AddClusterShardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Modifies the specified shard. */
    updateShard(request: UpdateClusterShardRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateShard(request: UpdateClusterShardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateShard(request: UpdateClusterShardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified shard. */
    deleteShard(request: DeleteClusterShardRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteShard(request: DeleteClusterShardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteShard(request: DeleteClusterShardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the specified shard group. */
    getShardGroup(request: GetClusterShardGroupRequest, callback: (error: ServiceError | null, response: ShardGroup) => void): ClientUnaryCall;
    getShardGroup(request: GetClusterShardGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ShardGroup) => void): ClientUnaryCall;
    getShardGroup(request: GetClusterShardGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ShardGroup) => void): ClientUnaryCall;
    /** Retrieves a list of shard groups that belong to specified cluster. */
    listShardGroups(request: ListClusterShardGroupsRequest, callback: (error: ServiceError | null, response: ListClusterShardGroupsResponse) => void): ClientUnaryCall;
    listShardGroups(request: ListClusterShardGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterShardGroupsResponse) => void): ClientUnaryCall;
    listShardGroups(request: ListClusterShardGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterShardGroupsResponse) => void): ClientUnaryCall;
    /** Creates a new shard group in the specified cluster. */
    createShardGroup(request: CreateClusterShardGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createShardGroup(request: CreateClusterShardGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createShardGroup(request: CreateClusterShardGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified shard group. */
    updateShardGroup(request: UpdateClusterShardGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateShardGroup(request: UpdateClusterShardGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateShardGroup(request: UpdateClusterShardGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified shard group. */
    deleteShardGroup(request: DeleteClusterShardGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteShardGroup(request: DeleteClusterShardGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteShardGroup(request: DeleteClusterShardGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates an external dictionary for the specified ClickHouse cluster. */
    createExternalDictionary(request: CreateClusterExternalDictionaryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createExternalDictionary(request: CreateClusterExternalDictionaryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createExternalDictionary(request: CreateClusterExternalDictionaryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified external dictionary. */
    deleteExternalDictionary(request: DeleteClusterExternalDictionaryRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteExternalDictionary(request: DeleteClusterExternalDictionaryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteExternalDictionary(request: DeleteClusterExternalDictionaryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ClusterServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ClusterServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
