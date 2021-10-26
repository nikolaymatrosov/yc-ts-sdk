/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { TimeOfDay } from '../../../../../google/type/timeofday';
import { Backup } from '../../../../../yandex/cloud/mdb/mongodb/v1/backup';
import { Cluster_Environment, Host_Type, Cluster, Host, Resources, Shard, Access } from '../../../../../yandex/cloud/mdb/mongodb/v1/cluster';
import { Mongodconfig36, Mongocfgconfig36, Mongosconfig36 } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb3_6';
import { Mongodconfig40, Mongocfgconfig40, Mongosconfig40 } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_0';
import { Mongodconfig42, Mongocfgconfig42, Mongosconfig42 } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_2';
import { Mongodconfig44, Mongocfgconfig44, Mongosconfig44 } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4';
import { Mongodconfig50, Mongocfgconfig50, Mongosconfig50 } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0';
import { DatabaseSpec } from '../../../../../yandex/cloud/mdb/mongodb/v1/database';
import { MaintenanceWindow } from '../../../../../yandex/cloud/mdb/mongodb/v1/maintenance';
import { UserSpec } from '../../../../../yandex/cloud/mdb/mongodb/v1/user';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, handleServerStreamingCall, Client, ClientUnaryCall, Metadata, CallOptions, ClientReadableStream, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1";
export interface GetClusterRequest {
    /**
     * ID of the MongoDB Cluster resource to return.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    /**
     * ID of the folder to list MongoDB clusters in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListClustersResponse.next_page_token] returned by a previous list request.
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
    /** List of MongoDB Cluster resources. */
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
    /** ID of the folder to create MongoDB cluster in. */
    folderId: string;
    /** Name of the MongoDB cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the MongoDB cluster. */
    description: string;
    /**
     * Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the MongoDB cluster. */
    environment: Cluster_Environment;
    /** Configuration and resources for hosts that should be created for the MongoDB cluster. */
    configSpec: ConfigSpec | undefined;
    /** Descriptions of databases to be created in the MongoDB cluster. */
    databaseSpecs: DatabaseSpec[];
    /** Descriptions of database users to be created in the MongoDB cluster. */
    userSpecs: UserSpec[];
    /** Individual configurations for hosts that should be created for the MongoDB cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the cluster in. */
    networkId: string;
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
    /** ID of the MongoDB cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    /**
     * ID of the MongoDB Cluster resource to update.
     * To get the MongoDB cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which fields of the MongoDB Cluster resource should be updated. */
    updateMask: FieldMask | undefined;
    /** New description of the MongoDB cluster. */
    description: string;
    /**
     * Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource.
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
    /** ID of the MongoDB Cluster resource that is being updated. */
    clusterId: string;
}
export interface DeleteClusterRequest {
    /**
     * ID of the MongoDB cluster to delete.
     * To get the MongoDB cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    /** ID of the MongoDB cluster that is being deleted. */
    clusterId: string;
}
export interface StartClusterRequest {
    /** ID of the MongoDB cluster to start. */
    clusterId: string;
}
export interface StartClusterMetadata {
    /** ID of the MongoDB cluster. */
    clusterId: string;
}
export interface StopClusterRequest {
    /** ID of the MongoDB cluster to stop. */
    clusterId: string;
}
export interface StopClusterMetadata {
    /** ID of the MongoDB cluster. */
    clusterId: string;
}
export interface MoveClusterRequest {
    /** ID of the MongoDB cluster to move. */
    clusterId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveClusterMetadata {
    /** ID of the MongoDB cluster being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destnation folder. */
    destinationFolderId: string;
}
export interface BackupClusterRequest {
    /**
     * ID of the MongoDB cluster to back up.
     * To get the MongoDB cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface BackupClusterMetadata {
    /** ID of the MongoDB cluster that is being backed up. */
    clusterId: string;
}
export interface RestoreClusterRequest {
    /**
     * ID of the backup to create a cluster from.
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
    /** Name of the new MongoDB cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the new MongoDB cluster. */
    description: string;
    /**
     * Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the new MongoDB cluster. */
    environment: Cluster_Environment;
    /** Configuration for the MongoDB cluster to be created. */
    configSpec: ConfigSpec | undefined;
    /**
     * Configurations for MongoDB hosts that should be created for
     * the cluster that is being created from the backup.
     */
    hostSpecs: HostSpec[];
    /** ID of the network to create the MongoDB cluster in. */
    networkId: string;
    /** Required. ID of the folder to create the MongoDB cluster in. */
    folderId: string;
    /** Specification of the moment to which the MongoDB cluster should be restored. */
    recoveryTargetSpec: RestoreClusterRequest_RecoveryTargetSpec | undefined;
    /** User security groups */
    securityGroupIds: string[];
}
export interface RestoreClusterRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface RestoreClusterRequest_RecoveryTargetSpec {
    /** Timestamp of the recovery target */
    timestamp: number;
}
export interface RestoreClusterMetadata {
    /** ID of the new MongoDB cluster that is being created from a backup. */
    clusterId: string;
    /** ID of the backup that is being used for creating a cluster. */
    backupId: string;
}
export interface RescheduleMaintenanceRequest {
    /** ID of the MongoDB cluster to reschedule the maintenance operation for. */
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
    /** Required. ID of the MongoDB cluster. */
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
     * ID of the MongoDB cluster to request logs for.
     * To get the MongoDB cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from the logs table to request.
     * If no columns are specified, entire log records are returned.
     */
    columnFilter: string[];
    /** Type of the service to request logs about. */
    serviceType: ListClusterLogsRequest_ServiceType;
    /** Start timestamp for the logs request, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    fromTime: Date | undefined;
    /** End timestamp for the logs request, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    toTime: Date | undefined;
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterLogsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export declare enum ListClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** MONGOD - Logs of MongoDB activity. */
    MONGOD = 1,
    MONGOS = 2,
    MONGOCFG = 3,
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
     * This value is interchangeable with `next_record_token` from StreamLogs method.
     */
    nextPageToken: string;
}
export interface StreamLogRecord {
    /** One of the requested log records. */
    record: LogRecord | undefined;
    /**
     * This token allows you to continue streaming logs starting from the exact
     * same record. To continue streaming, specify value of `next_record_token`
     * as value for `record_token` parameter in the next StreamLogs request.
     * This value is interchangeable with `next_page_token` from ListLogs method.
     */
    nextRecordToken: string;
}
export interface StreamClusterLogsRequest {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Columns from logs table to get in the response. */
    columnFilter: string[];
    serviceType: StreamClusterLogsRequest_ServiceType;
    /** Start timestamp for the logs request. */
    fromTime: Date | undefined;
    /**
     * End timestamp for the logs request.
     * If this field is not set, all existing logs will be sent and then the new ones as
     * they appear. In essence it has 'tail -f' semantics.
     */
    toTime: Date | undefined;
    /**
     * Record token. Set `record_token` to the `next_record_token` returned by a previous StreamLogs
     * request to start streaming from next log record.
     */
    recordToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.severity] fields.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 1-63 characters long and match the regular expression `^[a-z0-9.-]{1,61}$`.
     * Examples of a filter: `message.hostname='node1.db.cloud.yandex.net'`, `message.severity IN ('E', 'F')`
     */
    filter: string;
}
export declare enum StreamClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** MONGOD - Logs of MongoDB activity. */
    MONGOD = 1,
    MONGOS = 2,
    MONGOCFG = 3,
    UNRECOGNIZED = -1
}
export declare function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType;
export declare function streamClusterLogsRequest_ServiceTypeToJSON(object: StreamClusterLogsRequest_ServiceType): string;
export interface ListClusterOperationsRequest {
    /** ID of the MongoDB Cluster resource to list operations for. */
    clusterId: string;
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterOperationsResponse {
    /** List of Operation resources for the specified MongoDB cluster. */
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
     * ID of the MongoDB cluster.
     * To get the MongoDB cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    pageSize: number;
    /**
     * Page token.  To get the next page of results, set [page_token] to the
     * [ListClusterBackupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterBackupsResponse {
    /** List of MongoDB Backup resources. */
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
     * ID of the MongoDB cluster.
     * To get the MongoDB cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterHostsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterHostsResponse {
    /** List of Host resources. */
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
     * ID of the MongoDB cluster to add hosts to.
     * To get the MongoDB cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configurations for MongoDB hosts that should be added to the cluster. */
    hostSpecs: HostSpec[];
}
export interface AddClusterHostsMetadata {
    /** ID of the MongoDB cluster to which the hosts are being added. */
    clusterId: string;
    /** Names of hosts that are being added to the cluster. */
    hostNames: string[];
}
export interface DeleteClusterHostsRequest {
    /**
     * ID of the MongoDB cluster to remove hosts from.
     * To get the MongoDB cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Names of hosts to delete. */
    hostNames: string[];
}
export interface DeleteClusterHostsMetadata {
    /** ID of the MongoDB cluster to remove hosts from. */
    clusterId: string;
    /** Names of hosts that are being deleted. */
    hostNames: string[];
}
export interface EnableClusterShardingRequest {
    /** ID of the MongoDB cluster to enable sharding for. */
    clusterId: string;
    /** mongocfg specification for sharding. */
    mongocfg: EnableClusterShardingRequest_MongoCfg | undefined;
    /** mongos specification for sharding. */
    mongos: EnableClusterShardingRequest_Mongos | undefined;
    /** Configurations for mongos and mongocfg hosts. */
    hostSpecs: HostSpec[];
    /** mongos specification for sharding. */
    mongoinfra: EnableClusterShardingRequest_MongoInfra | undefined;
}
export interface EnableClusterShardingRequest_MongoCfg {
    /** Resources for mongocfg hosts. */
    resources: Resources | undefined;
}
export interface EnableClusterShardingRequest_Mongos {
    /** Resources for mongos hosts. */
    resources: Resources | undefined;
}
export interface EnableClusterShardingRequest_MongoInfra {
    /** Resources for mongoinfra (mongos+mongocfg) hosts. */
    resources: Resources | undefined;
}
export interface EnableClusterShardingMetadata {
    /** ID of the MongoDB cluster that sharding is being enabled for. */
    clusterId: string;
}
export interface GetClusterShardRequest {
    /**
     * ID of the MongoDB cluster that the shard belongs to.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the MongoDB shard to return.
     * To get the name of the shard use a [ClusterService.ListShards] request.
     */
    shardName: string;
}
export interface ListClusterShardsRequest {
    /**
     * ID of the MongoDB cluster to list databases in.
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
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterShardsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterShardsResponse {
    /** List of MongoDB shards. */
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
     * ID of the MongoDB cluster to add a shard to.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the MongoDB shard to create. */
    shardName: string;
    /** Configurations for mongod hosts to be created with the shard. */
    hostSpecs: HostSpec[];
}
export interface AddClusterShardMetadata {
    /** ID of the MongoDB cluster that a shard is being added to. */
    clusterId: string;
    /** Name of the shard being added. */
    shardName: string;
}
export interface DeleteClusterShardRequest {
    /**
     * ID of the MongoDB cluster to delete a shard in.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the MongoDB shard to delete.
     * To get the name of the shard use a [ClusterService.ListShards] request.
     */
    shardName: string;
}
export interface DeleteClusterShardMetadata {
    /** ID of the MongoDB cluster that a shard is being deleted in. */
    clusterId: string;
    /** Name of the shard being deleted. */
    shardName: string;
}
export interface ResetupHostsRequest {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. Name of the hosts to resetup. */
    hostNames: string[];
}
export interface ResetupHostsMetadata {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. The name of hosts to resetup. */
    hostNames: string[];
}
export interface RestartHostsRequest {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. Name of the hosts to restart. */
    hostNames: string[];
}
export interface RestartHostsMetadata {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. The name of hosts to restart. */
    hostNames: string[];
}
export interface StepdownHostsRequest {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. Name of the hosts to resetup. */
    hostNames: string[];
}
export interface StepdownHostsMetadata {
    /** Required. ID of the MongoDB cluster. */
    clusterId: string;
    /** Required. The name of hosts to resetup. */
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
     * The network ID is set in the [Cluster.network_id] field.
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
    /** Type of the host to be deployed. */
    type: Host_Type;
    /** Name of the shard that the host belongs to. */
    shardName: string;
}
export interface Mongodbspec36 {
    /** Configuration and resource allocation for mongod 3.6 hosts. */
    mongod: Mongodbspec36_Mongod | undefined;
    /** Configuration and resource allocation for mongocfg 3.6 hosts. */
    mongocfg: Mongodbspec36_MongoCfg | undefined;
    /** Configuration and resource allocation for mongos 3.6 hosts. */
    mongos: Mongodbspec36_Mongos | undefined;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 3.6 hosts. */
    mongoinfra: Mongodbspec36_MongoInfra | undefined;
}
export interface Mongodbspec36_Mongod {
    /** Configuration for mongod 3.6 hosts. */
    config: Mongodconfig36 | undefined;
    /** Resources allocated to each mongod host. */
    resources: Resources | undefined;
}
export interface Mongodbspec36_MongoCfg {
    /** Configuration for mongocfg 3.6 hosts. */
    config: Mongocfgconfig36 | undefined;
    /** Resources allocated to each mongocfg host. */
    resources: Resources | undefined;
}
export interface Mongodbspec36_Mongos {
    /** Configuration for mongos 3.6 hosts. */
    config: Mongosconfig36 | undefined;
    /** Resources allocated to each mongos host. */
    resources: Resources | undefined;
}
export interface Mongodbspec36_MongoInfra {
    /** Configuration for mongoinfra 3.6 hosts. */
    configMongos: Mongosconfig36 | undefined;
    configMongocfg: Mongocfgconfig36 | undefined;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources: Resources | undefined;
}
export interface Mongodbspec40 {
    /** Configuration and resource allocation for mongod 4.0 hosts. */
    mongod: Mongodbspec40_Mongod | undefined;
    /** Configuration and resource allocation for mongocfg 4.0 hosts. */
    mongocfg: Mongodbspec40_MongoCfg | undefined;
    /** Configuration and resource allocation for mongos 4.0 hosts. */
    mongos: Mongodbspec40_Mongos | undefined;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 4.0 hosts. */
    mongoinfra: Mongodbspec40_MongoInfra | undefined;
}
export interface Mongodbspec40_Mongod {
    /** Configuration for mongod 4.0 hosts. */
    config: Mongodconfig40 | undefined;
    /** Resources allocated to each mongod host. */
    resources: Resources | undefined;
}
export interface Mongodbspec40_MongoCfg {
    /** Configuration for mongocfg 4.0 hosts. */
    config: Mongocfgconfig40 | undefined;
    /** Resources allocated to each mongocfg host. */
    resources: Resources | undefined;
}
export interface Mongodbspec40_Mongos {
    /** Configuration for mongos 4.0 hosts. */
    config: Mongosconfig40 | undefined;
    /** Resources allocated to each mongos host. */
    resources: Resources | undefined;
}
export interface Mongodbspec40_MongoInfra {
    /** Configuration for mongoinfra 4.0 hosts. */
    configMongos: Mongosconfig40 | undefined;
    configMongocfg: Mongocfgconfig40 | undefined;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources: Resources | undefined;
}
export interface Mongodbspec42 {
    /** Configuration and resource allocation for mongod 4.2 hosts. */
    mongod: Mongodbspec42_Mongod | undefined;
    /** Configuration and resource allocation for mongocfg 4.2 hosts. */
    mongocfg: Mongodbspec42_MongoCfg | undefined;
    /** Configuration and resource allocation for mongos 4.2 hosts. */
    mongos: Mongodbspec42_Mongos | undefined;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 4.2 hosts. */
    mongoinfra: Mongodbspec42_MongoInfra | undefined;
}
export interface Mongodbspec42_Mongod {
    /** Configuration for mongod 4.2 hosts. */
    config: Mongodconfig42 | undefined;
    /** Resources allocated to each mongod host. */
    resources: Resources | undefined;
}
export interface Mongodbspec42_MongoCfg {
    /** Configuration for mongocfg 4.2 hosts. */
    config: Mongocfgconfig42 | undefined;
    /** Resources allocated to each mongocfg host. */
    resources: Resources | undefined;
}
export interface Mongodbspec42_Mongos {
    /** Configuration for mongos 4.2 hosts. */
    config: Mongosconfig42 | undefined;
    /** Resources allocated to each mongos host. */
    resources: Resources | undefined;
}
export interface Mongodbspec42_MongoInfra {
    /** Configuration for mongoinfra 4.2 hosts. */
    configMongos: Mongosconfig42 | undefined;
    configMongocfg: Mongocfgconfig42 | undefined;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources: Resources | undefined;
}
export interface Mongodbspec44 {
    /** Configuration and resource allocation for mongod 4.4 hosts. */
    mongod: Mongodbspec44_Mongod | undefined;
    /** Configuration and resource allocation for mongocfg 4.4 hosts. */
    mongocfg: Mongodbspec44_MongoCfg | undefined;
    /** Configuration and resource allocation for mongos 4.4 hosts. */
    mongos: Mongodbspec44_Mongos | undefined;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 4.4 hosts. */
    mongoinfra: Mongodbspec44_MongoInfra | undefined;
}
export interface Mongodbspec44_Mongod {
    /** Configuration for mongod 4.4 hosts. */
    config: Mongodconfig44 | undefined;
    /** Resources allocated to each mongod host. */
    resources: Resources | undefined;
}
export interface Mongodbspec44_MongoCfg {
    /** Configuration for mongocfg 4.4 hosts. */
    config: Mongocfgconfig44 | undefined;
    /** Resources allocated to each mongocfg host. */
    resources: Resources | undefined;
}
export interface Mongodbspec44_Mongos {
    /** Configuration for mongos 4.4 hosts. */
    config: Mongosconfig44 | undefined;
    /** Resources allocated to each mongos host. */
    resources: Resources | undefined;
}
export interface Mongodbspec44_MongoInfra {
    /** Configuration for mongoinfra 4.4 hosts. */
    configMongos: Mongosconfig44 | undefined;
    configMongocfg: Mongocfgconfig44 | undefined;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources: Resources | undefined;
}
export interface Mongodbspec50 {
    /** Configuration and resource allocation for mongod 5.0 hosts. */
    mongod: Mongodbspec50_Mongod | undefined;
    /** Configuration and resource allocation for mongocfg 5.0 hosts. */
    mongocfg: Mongodbspec50_MongoCfg | undefined;
    /** Configuration and resource allocation for mongos 5.0 hosts. */
    mongos: Mongodbspec50_Mongos | undefined;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) 5.0 hosts. */
    mongoinfra: Mongodbspec50_MongoInfra | undefined;
}
export interface Mongodbspec50_Mongod {
    /** Configuration for mongod 5.0 hosts. */
    config: Mongodconfig50 | undefined;
    /** Resources allocated to each mongod host. */
    resources: Resources | undefined;
}
export interface Mongodbspec50_MongoCfg {
    /** Configuration for mongocfg 5.0 hosts. */
    config: Mongocfgconfig50 | undefined;
    /** Resources allocated to each mongocfg host. */
    resources: Resources | undefined;
}
export interface Mongodbspec50_Mongos {
    /** Configuration for mongos 5.0 hosts. */
    config: Mongosconfig50 | undefined;
    /** Resources allocated to each mongos host. */
    resources: Resources | undefined;
}
export interface Mongodbspec50_MongoInfra {
    /** Configuration for mongoinfra 5.0 hosts. */
    configMongos: Mongosconfig50 | undefined;
    configMongocfg: Mongocfgconfig50 | undefined;
    /** Resources allocated to each mongoinfra (mongos+mongocfg) host. */
    resources: Resources | undefined;
}
export interface ConfigSpec {
    /** Version of MongoDB used in the cluster. Possible values: `3.6`, `4.0`, `4.2`, `4.4`, `5.0`. */
    version: string;
    /**
     * MongoDB feature compatibility version. See usage details in [MongoDB documentation](https://docs.mongodb.com/manual/reference/command/setFeatureCompatibilityVersion/).
     *
     * Possible values:
     * * `3.6` - persist data compatibility for version 3.6. After setting this option the data will not be compatible with 3.4 or older.
     * * `4.0` - persist data compatibility for version 4.0. After setting this option the data will not be compatible with 3.6 or older.
     * * `4.2` - persist data compatibility for version 4.2. After setting this option the data will not be compatible with 4.0 or older.
     * * `4.4` - persist data compatibility for version 4.4. After setting this option the data will not be compatible with 4.2 or older.
     * * `5.0` - persist data compatibility for version 5.0. After setting this option the data will not be compatible with 4.4 or older.
     */
    featureCompatibilityVersion: string;
    /** Configuration and resource allocation for a MongoDB 3.6 cluster. */
    mongodbSpec36: Mongodbspec36 | undefined;
    /** Configuration and resource allocation for a MongoDB 4.0 cluster. */
    mongodbSpec40: Mongodbspec40 | undefined;
    /** Configuration and resource allocation for a MongoDB 4.2 cluster. */
    mongodbSpec42: Mongodbspec42 | undefined;
    /** Configuration and resource allocation for a MongoDB 4.4 cluster. */
    mongodbSpec44: Mongodbspec44 | undefined;
    /** Configuration and resource allocation for a MongoDB 5.0 cluster. */
    mongodbSpec50: Mongodbspec50 | undefined;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart: TimeOfDay | undefined;
    /** Retain period of automatically created backup in days */
    backupRetainPeriodDays: number | undefined;
    /** Access policy to DB */
    access: Access | undefined;
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
export declare const RestoreClusterRequest_RecoveryTargetSpec: {
    encode(message: RestoreClusterRequest_RecoveryTargetSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreClusterRequest_RecoveryTargetSpec;
    fromJSON(object: any): RestoreClusterRequest_RecoveryTargetSpec;
    toJSON(message: RestoreClusterRequest_RecoveryTargetSpec): unknown;
    fromPartial(object: DeepPartial<RestoreClusterRequest_RecoveryTargetSpec>): RestoreClusterRequest_RecoveryTargetSpec;
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
export declare const EnableClusterShardingRequest: {
    encode(message: EnableClusterShardingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EnableClusterShardingRequest;
    fromJSON(object: any): EnableClusterShardingRequest;
    toJSON(message: EnableClusterShardingRequest): unknown;
    fromPartial(object: DeepPartial<EnableClusterShardingRequest>): EnableClusterShardingRequest;
};
export declare const EnableClusterShardingRequest_MongoCfg: {
    encode(message: EnableClusterShardingRequest_MongoCfg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EnableClusterShardingRequest_MongoCfg;
    fromJSON(object: any): EnableClusterShardingRequest_MongoCfg;
    toJSON(message: EnableClusterShardingRequest_MongoCfg): unknown;
    fromPartial(object: DeepPartial<EnableClusterShardingRequest_MongoCfg>): EnableClusterShardingRequest_MongoCfg;
};
export declare const EnableClusterShardingRequest_Mongos: {
    encode(message: EnableClusterShardingRequest_Mongos, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EnableClusterShardingRequest_Mongos;
    fromJSON(object: any): EnableClusterShardingRequest_Mongos;
    toJSON(message: EnableClusterShardingRequest_Mongos): unknown;
    fromPartial(object: DeepPartial<EnableClusterShardingRequest_Mongos>): EnableClusterShardingRequest_Mongos;
};
export declare const EnableClusterShardingRequest_MongoInfra: {
    encode(message: EnableClusterShardingRequest_MongoInfra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EnableClusterShardingRequest_MongoInfra;
    fromJSON(object: any): EnableClusterShardingRequest_MongoInfra;
    toJSON(message: EnableClusterShardingRequest_MongoInfra): unknown;
    fromPartial(object: DeepPartial<EnableClusterShardingRequest_MongoInfra>): EnableClusterShardingRequest_MongoInfra;
};
export declare const EnableClusterShardingMetadata: {
    encode(message: EnableClusterShardingMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EnableClusterShardingMetadata;
    fromJSON(object: any): EnableClusterShardingMetadata;
    toJSON(message: EnableClusterShardingMetadata): unknown;
    fromPartial(object: DeepPartial<EnableClusterShardingMetadata>): EnableClusterShardingMetadata;
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
export declare const ResetupHostsRequest: {
    encode(message: ResetupHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResetupHostsRequest;
    fromJSON(object: any): ResetupHostsRequest;
    toJSON(message: ResetupHostsRequest): unknown;
    fromPartial(object: DeepPartial<ResetupHostsRequest>): ResetupHostsRequest;
};
export declare const ResetupHostsMetadata: {
    encode(message: ResetupHostsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResetupHostsMetadata;
    fromJSON(object: any): ResetupHostsMetadata;
    toJSON(message: ResetupHostsMetadata): unknown;
    fromPartial(object: DeepPartial<ResetupHostsMetadata>): ResetupHostsMetadata;
};
export declare const RestartHostsRequest: {
    encode(message: RestartHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestartHostsRequest;
    fromJSON(object: any): RestartHostsRequest;
    toJSON(message: RestartHostsRequest): unknown;
    fromPartial(object: DeepPartial<RestartHostsRequest>): RestartHostsRequest;
};
export declare const RestartHostsMetadata: {
    encode(message: RestartHostsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestartHostsMetadata;
    fromJSON(object: any): RestartHostsMetadata;
    toJSON(message: RestartHostsMetadata): unknown;
    fromPartial(object: DeepPartial<RestartHostsMetadata>): RestartHostsMetadata;
};
export declare const StepdownHostsRequest: {
    encode(message: StepdownHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StepdownHostsRequest;
    fromJSON(object: any): StepdownHostsRequest;
    toJSON(message: StepdownHostsRequest): unknown;
    fromPartial(object: DeepPartial<StepdownHostsRequest>): StepdownHostsRequest;
};
export declare const StepdownHostsMetadata: {
    encode(message: StepdownHostsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StepdownHostsMetadata;
    fromJSON(object: any): StepdownHostsMetadata;
    toJSON(message: StepdownHostsMetadata): unknown;
    fromPartial(object: DeepPartial<StepdownHostsMetadata>): StepdownHostsMetadata;
};
export declare const HostSpec: {
    encode(message: HostSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostSpec;
    fromJSON(object: any): HostSpec;
    toJSON(message: HostSpec): unknown;
    fromPartial(object: DeepPartial<HostSpec>): HostSpec;
};
export declare const Mongodbspec36: {
    encode(message: Mongodbspec36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec36;
    fromJSON(object: any): Mongodbspec36;
    toJSON(message: Mongodbspec36): unknown;
    fromPartial(object: DeepPartial<Mongodbspec36>): Mongodbspec36;
};
export declare const Mongodbspec36_Mongod: {
    encode(message: Mongodbspec36_Mongod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec36_Mongod;
    fromJSON(object: any): Mongodbspec36_Mongod;
    toJSON(message: Mongodbspec36_Mongod): unknown;
    fromPartial(object: DeepPartial<Mongodbspec36_Mongod>): Mongodbspec36_Mongod;
};
export declare const Mongodbspec36_MongoCfg: {
    encode(message: Mongodbspec36_MongoCfg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec36_MongoCfg;
    fromJSON(object: any): Mongodbspec36_MongoCfg;
    toJSON(message: Mongodbspec36_MongoCfg): unknown;
    fromPartial(object: DeepPartial<Mongodbspec36_MongoCfg>): Mongodbspec36_MongoCfg;
};
export declare const Mongodbspec36_Mongos: {
    encode(message: Mongodbspec36_Mongos, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec36_Mongos;
    fromJSON(object: any): Mongodbspec36_Mongos;
    toJSON(message: Mongodbspec36_Mongos): unknown;
    fromPartial(object: DeepPartial<Mongodbspec36_Mongos>): Mongodbspec36_Mongos;
};
export declare const Mongodbspec36_MongoInfra: {
    encode(message: Mongodbspec36_MongoInfra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec36_MongoInfra;
    fromJSON(object: any): Mongodbspec36_MongoInfra;
    toJSON(message: Mongodbspec36_MongoInfra): unknown;
    fromPartial(object: DeepPartial<Mongodbspec36_MongoInfra>): Mongodbspec36_MongoInfra;
};
export declare const Mongodbspec40: {
    encode(message: Mongodbspec40, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec40;
    fromJSON(object: any): Mongodbspec40;
    toJSON(message: Mongodbspec40): unknown;
    fromPartial(object: DeepPartial<Mongodbspec40>): Mongodbspec40;
};
export declare const Mongodbspec40_Mongod: {
    encode(message: Mongodbspec40_Mongod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec40_Mongod;
    fromJSON(object: any): Mongodbspec40_Mongod;
    toJSON(message: Mongodbspec40_Mongod): unknown;
    fromPartial(object: DeepPartial<Mongodbspec40_Mongod>): Mongodbspec40_Mongod;
};
export declare const Mongodbspec40_MongoCfg: {
    encode(message: Mongodbspec40_MongoCfg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec40_MongoCfg;
    fromJSON(object: any): Mongodbspec40_MongoCfg;
    toJSON(message: Mongodbspec40_MongoCfg): unknown;
    fromPartial(object: DeepPartial<Mongodbspec40_MongoCfg>): Mongodbspec40_MongoCfg;
};
export declare const Mongodbspec40_Mongos: {
    encode(message: Mongodbspec40_Mongos, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec40_Mongos;
    fromJSON(object: any): Mongodbspec40_Mongos;
    toJSON(message: Mongodbspec40_Mongos): unknown;
    fromPartial(object: DeepPartial<Mongodbspec40_Mongos>): Mongodbspec40_Mongos;
};
export declare const Mongodbspec40_MongoInfra: {
    encode(message: Mongodbspec40_MongoInfra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec40_MongoInfra;
    fromJSON(object: any): Mongodbspec40_MongoInfra;
    toJSON(message: Mongodbspec40_MongoInfra): unknown;
    fromPartial(object: DeepPartial<Mongodbspec40_MongoInfra>): Mongodbspec40_MongoInfra;
};
export declare const Mongodbspec42: {
    encode(message: Mongodbspec42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec42;
    fromJSON(object: any): Mongodbspec42;
    toJSON(message: Mongodbspec42): unknown;
    fromPartial(object: DeepPartial<Mongodbspec42>): Mongodbspec42;
};
export declare const Mongodbspec42_Mongod: {
    encode(message: Mongodbspec42_Mongod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec42_Mongod;
    fromJSON(object: any): Mongodbspec42_Mongod;
    toJSON(message: Mongodbspec42_Mongod): unknown;
    fromPartial(object: DeepPartial<Mongodbspec42_Mongod>): Mongodbspec42_Mongod;
};
export declare const Mongodbspec42_MongoCfg: {
    encode(message: Mongodbspec42_MongoCfg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec42_MongoCfg;
    fromJSON(object: any): Mongodbspec42_MongoCfg;
    toJSON(message: Mongodbspec42_MongoCfg): unknown;
    fromPartial(object: DeepPartial<Mongodbspec42_MongoCfg>): Mongodbspec42_MongoCfg;
};
export declare const Mongodbspec42_Mongos: {
    encode(message: Mongodbspec42_Mongos, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec42_Mongos;
    fromJSON(object: any): Mongodbspec42_Mongos;
    toJSON(message: Mongodbspec42_Mongos): unknown;
    fromPartial(object: DeepPartial<Mongodbspec42_Mongos>): Mongodbspec42_Mongos;
};
export declare const Mongodbspec42_MongoInfra: {
    encode(message: Mongodbspec42_MongoInfra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec42_MongoInfra;
    fromJSON(object: any): Mongodbspec42_MongoInfra;
    toJSON(message: Mongodbspec42_MongoInfra): unknown;
    fromPartial(object: DeepPartial<Mongodbspec42_MongoInfra>): Mongodbspec42_MongoInfra;
};
export declare const Mongodbspec44: {
    encode(message: Mongodbspec44, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec44;
    fromJSON(object: any): Mongodbspec44;
    toJSON(message: Mongodbspec44): unknown;
    fromPartial(object: DeepPartial<Mongodbspec44>): Mongodbspec44;
};
export declare const Mongodbspec44_Mongod: {
    encode(message: Mongodbspec44_Mongod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec44_Mongod;
    fromJSON(object: any): Mongodbspec44_Mongod;
    toJSON(message: Mongodbspec44_Mongod): unknown;
    fromPartial(object: DeepPartial<Mongodbspec44_Mongod>): Mongodbspec44_Mongod;
};
export declare const Mongodbspec44_MongoCfg: {
    encode(message: Mongodbspec44_MongoCfg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec44_MongoCfg;
    fromJSON(object: any): Mongodbspec44_MongoCfg;
    toJSON(message: Mongodbspec44_MongoCfg): unknown;
    fromPartial(object: DeepPartial<Mongodbspec44_MongoCfg>): Mongodbspec44_MongoCfg;
};
export declare const Mongodbspec44_Mongos: {
    encode(message: Mongodbspec44_Mongos, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec44_Mongos;
    fromJSON(object: any): Mongodbspec44_Mongos;
    toJSON(message: Mongodbspec44_Mongos): unknown;
    fromPartial(object: DeepPartial<Mongodbspec44_Mongos>): Mongodbspec44_Mongos;
};
export declare const Mongodbspec44_MongoInfra: {
    encode(message: Mongodbspec44_MongoInfra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec44_MongoInfra;
    fromJSON(object: any): Mongodbspec44_MongoInfra;
    toJSON(message: Mongodbspec44_MongoInfra): unknown;
    fromPartial(object: DeepPartial<Mongodbspec44_MongoInfra>): Mongodbspec44_MongoInfra;
};
export declare const Mongodbspec50: {
    encode(message: Mongodbspec50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec50;
    fromJSON(object: any): Mongodbspec50;
    toJSON(message: Mongodbspec50): unknown;
    fromPartial(object: DeepPartial<Mongodbspec50>): Mongodbspec50;
};
export declare const Mongodbspec50_Mongod: {
    encode(message: Mongodbspec50_Mongod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec50_Mongod;
    fromJSON(object: any): Mongodbspec50_Mongod;
    toJSON(message: Mongodbspec50_Mongod): unknown;
    fromPartial(object: DeepPartial<Mongodbspec50_Mongod>): Mongodbspec50_Mongod;
};
export declare const Mongodbspec50_MongoCfg: {
    encode(message: Mongodbspec50_MongoCfg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec50_MongoCfg;
    fromJSON(object: any): Mongodbspec50_MongoCfg;
    toJSON(message: Mongodbspec50_MongoCfg): unknown;
    fromPartial(object: DeepPartial<Mongodbspec50_MongoCfg>): Mongodbspec50_MongoCfg;
};
export declare const Mongodbspec50_Mongos: {
    encode(message: Mongodbspec50_Mongos, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec50_Mongos;
    fromJSON(object: any): Mongodbspec50_Mongos;
    toJSON(message: Mongodbspec50_Mongos): unknown;
    fromPartial(object: DeepPartial<Mongodbspec50_Mongos>): Mongodbspec50_Mongos;
};
export declare const Mongodbspec50_MongoInfra: {
    encode(message: Mongodbspec50_MongoInfra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodbspec50_MongoInfra;
    fromJSON(object: any): Mongodbspec50_MongoInfra;
    toJSON(message: Mongodbspec50_MongoInfra): unknown;
    fromPartial(object: DeepPartial<Mongodbspec50_MongoInfra>): Mongodbspec50_MongoInfra;
};
export declare const ConfigSpec: {
    encode(message: ConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec;
    fromJSON(object: any): ConfigSpec;
    toJSON(message: ConfigSpec): unknown;
    fromPartial(object: DeepPartial<ConfigSpec>): ConfigSpec;
};
/** A set of methods for managing MongoDB Cluster resources. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified MongoDB Cluster resource.
     *
     * To get the list of available MongoDB Cluster resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /**
     * Retrieves the list of MongoDB Cluster resources that belong
     * to the specified folder.
     */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a MongoDB cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified MongoDB cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified MongoDB cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Start the specified MongoDB cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stop the specified MongoDB cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Moves the specified MongoDB cluster to the specified folder. */
    readonly move: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a backup for the specified MongoDB cluster. */
    readonly backup: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Backup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BackupClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BackupClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a new MongoDB cluster using the specified backup. */
    readonly restore: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Reschedules planned maintenance operation. */
    readonly rescheduleMaintenance: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/RescheduleMaintenance";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RescheduleMaintenanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves logs for the specified MongoDB cluster. */
    readonly listLogs: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterLogsRequest;
        readonly responseSerialize: (value: ListClusterLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterLogsResponse;
    };
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    readonly streamLogs: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/StreamLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamClusterLogsRequest;
        readonly responseSerialize: (value: StreamLogRecord) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamLogRecord;
    };
    /** Retrieves the list of Operation resources for the specified cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves the list of available backups for the specified MongoDB cluster. */
    readonly listBackups: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListBackups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterBackupsRequest;
        readonly responseSerialize: (value: ListClusterBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterBackupsResponse;
    };
    /** Retrieves a list of hosts for the specified cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Creates new hosts for a cluster. */
    readonly addHosts: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/AddHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified hosts for a cluster. */
    readonly deleteHosts: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/DeleteHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Enables sharding for the cluster: creates 3 mongoinfra (or 3 mongocfg and 2 mongos) hosts
     * that would support adding and using shards in the cluster.
     */
    readonly enableSharding: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/EnableSharding";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EnableClusterShardingRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EnableClusterShardingRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the specified shard. */
    readonly getShard: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/GetShard";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterShardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterShardRequest;
        readonly responseSerialize: (value: Shard) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Shard;
    };
    /** Retrieves a list of shards. */
    readonly listShards: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ListShards";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterShardsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterShardsRequest;
        readonly responseSerialize: (value: ListClusterShardsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterShardsResponse;
    };
    /** Creates a new shard. */
    readonly addShard: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/AddShard";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddClusterShardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddClusterShardRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified shard. */
    readonly deleteShard: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/DeleteShard";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterShardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterShardRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Resetups hosts. */
    readonly resetupHosts: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/ResetupHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ResetupHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ResetupHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Restarts hosts. */
    readonly restartHosts: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/RestartHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestartHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestartHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stepdown hosts. */
    readonly stepdownHosts: {
        readonly path: "/yandex.cloud.mdb.mongodb.v1.ClusterService/StepdownHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StepdownHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StepdownHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified MongoDB Cluster resource.
     *
     * To get the list of available MongoDB Cluster resources, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /**
     * Retrieves the list of MongoDB Cluster resources that belong
     * to the specified folder.
     */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a MongoDB cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified MongoDB cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified MongoDB cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Start the specified MongoDB cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stop the specified MongoDB cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Moves the specified MongoDB cluster to the specified folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /** Creates a backup for the specified MongoDB cluster. */
    backup: handleUnaryCall<BackupClusterRequest, Operation>;
    /** Creates a new MongoDB cluster using the specified backup. */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
    /** Retrieves logs for the specified MongoDB cluster. */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves the list of available backups for the specified MongoDB cluster. */
    listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Creates new hosts for a cluster. */
    addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
    /**
     * Enables sharding for the cluster: creates 3 mongoinfra (or 3 mongocfg and 2 mongos) hosts
     * that would support adding and using shards in the cluster.
     */
    enableSharding: handleUnaryCall<EnableClusterShardingRequest, Operation>;
    /** Returns the specified shard. */
    getShard: handleUnaryCall<GetClusterShardRequest, Shard>;
    /** Retrieves a list of shards. */
    listShards: handleUnaryCall<ListClusterShardsRequest, ListClusterShardsResponse>;
    /** Creates a new shard. */
    addShard: handleUnaryCall<AddClusterShardRequest, Operation>;
    /** Deletes the specified shard. */
    deleteShard: handleUnaryCall<DeleteClusterShardRequest, Operation>;
    /** Resetups hosts. */
    resetupHosts: handleUnaryCall<ResetupHostsRequest, Operation>;
    /** Restarts hosts. */
    restartHosts: handleUnaryCall<RestartHostsRequest, Operation>;
    /** Stepdown hosts. */
    stepdownHosts: handleUnaryCall<StepdownHostsRequest, Operation>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified MongoDB Cluster resource.
     *
     * To get the list of available MongoDB Cluster resources, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /**
     * Retrieves the list of MongoDB Cluster resources that belong
     * to the specified folder.
     */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a MongoDB cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified MongoDB cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified MongoDB cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Start the specified MongoDB cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stop the specified MongoDB cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Moves the specified MongoDB cluster to the specified folder. */
    move(request: MoveClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a backup for the specified MongoDB cluster. */
    backup(request: BackupClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a new MongoDB cluster using the specified backup. */
    restore(request: RestoreClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves logs for the specified MongoDB cluster. */
    listLogs(request: ListClusterLogsRequest, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs(request: StreamClusterLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    streamLogs(request: StreamClusterLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of available backups for the specified MongoDB cluster. */
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
    /**
     * Enables sharding for the cluster: creates 3 mongoinfra (or 3 mongocfg and 2 mongos) hosts
     * that would support adding and using shards in the cluster.
     */
    enableSharding(request: EnableClusterShardingRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    enableSharding(request: EnableClusterShardingRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    enableSharding(request: EnableClusterShardingRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the specified shard. */
    getShard(request: GetClusterShardRequest, callback: (error: ServiceError | null, response: Shard) => void): ClientUnaryCall;
    getShard(request: GetClusterShardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Shard) => void): ClientUnaryCall;
    getShard(request: GetClusterShardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Shard) => void): ClientUnaryCall;
    /** Retrieves a list of shards. */
    listShards(request: ListClusterShardsRequest, callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void): ClientUnaryCall;
    listShards(request: ListClusterShardsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void): ClientUnaryCall;
    listShards(request: ListClusterShardsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void): ClientUnaryCall;
    /** Creates a new shard. */
    addShard(request: AddClusterShardRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addShard(request: AddClusterShardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addShard(request: AddClusterShardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified shard. */
    deleteShard(request: DeleteClusterShardRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteShard(request: DeleteClusterShardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteShard(request: DeleteClusterShardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Resetups hosts. */
    resetupHosts(request: ResetupHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resetupHosts(request: ResetupHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resetupHosts(request: ResetupHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Restarts hosts. */
    restartHosts(request: RestartHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restartHosts(request: RestartHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restartHosts(request: RestartHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stepdown hosts. */
    stepdownHosts(request: StepdownHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stepdownHosts(request: StepdownHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stepdownHosts(request: StepdownHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ClusterServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ClusterServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
