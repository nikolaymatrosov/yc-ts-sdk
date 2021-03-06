/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Cluster_Environment, Cluster, ConfigSpec, Host } from '../../../../../yandex/cloud/mdb/kafka/v1/cluster';
import { TopicSpec } from '../../../../../yandex/cloud/mdb/kafka/v1/topic';
import { UserSpec } from '../../../../../yandex/cloud/mdb/kafka/v1/user';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, handleServerStreamingCall, Client, ClientUnaryCall, Metadata, CallOptions, ClientReadableStream, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
export interface GetClusterRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.GetClusterRequest';
    /**
     * ID of the Apache Kafka® Cluster resource to return.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.ListClustersRequest';
    /**
     * ID of the folder to list Apache Kafka® clusters in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /** Filter support is not currently implemented. Any filters are ignored. */
    filter: string;
}
export interface ListClustersResponse {
    $type: 'yandex.cloud.mdb.kafka.v1.ListClustersResponse';
    /** List of Apache Kafka® clusters. */
    clusters: Cluster[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClustersRequest.page_size], use [next_page_token] as the value for the [ListClustersRequest.page_token] parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateClusterRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.CreateClusterRequest';
    /**
     * ID of the folder to create the Apache Kafka® cluster in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the Apache Kafka® cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the Apache Kafka® cluster. */
    description: string;
    /**
     * Custom labels for the Apache Kafka® cluster as `key:value` pairs.
     *
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Apache Kafka® cluster. */
    environment: Cluster_Environment;
    /** Kafka and hosts configuration the Apache Kafka® cluster. */
    configSpec: ConfigSpec | undefined;
    /** One or more configurations of topics to be created in the Apache Kafka® cluster. */
    topicSpecs: TopicSpec[];
    /** Configurations of accounts to be created in the Apache Kafka® cluster. */
    userSpecs: UserSpec[];
    /** ID of the network to create the Apache Kafka® cluster in. */
    networkId: string;
    /** IDs of subnets to create brokers in. */
    subnetId: string[];
    /** User security groups */
    securityGroupIds: string[];
    /** Host groups to place VMs of cluster on. */
    hostGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
}
export interface CreateClusterRequest_LabelsEntry {
    $type: 'yandex.cloud.mdb.kafka.v1.CreateClusterRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    $type: 'yandex.cloud.mdb.kafka.v1.CreateClusterMetadata';
    /** ID of the Apache Kafka® cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.UpdateClusterRequest';
    /**
     * ID of the Apache Kafka® cluster to update.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    updateMask: FieldMask | undefined;
    /** New description of the Apache Kafka® cluster. */
    description: string;
    /**
     * Custom labels for the Apache Kafka® cluster as `key:value` pairs.
     *
     * For example, "project": "mvp" or "source": "dictionary".
     *
     * The new set of labels will completely replace the old ones.
     * To add a label, request the current set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * New configuration and resources for hosts in the Apache Kafka® cluster.
     *
     * Use [update_mask] to prevent reverting all cluster settings that are not listed in [config_spec] to their default values.
     */
    configSpec: ConfigSpec | undefined;
    /** New name for the Apache Kafka® cluster. */
    name: string;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: 'yandex.cloud.mdb.kafka.v1.UpdateClusterRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    $type: 'yandex.cloud.mdb.kafka.v1.UpdateClusterMetadata';
    /** ID of the Apache Kafka® cluster that is being updated. */
    clusterId: string;
}
export interface DeleteClusterRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.DeleteClusterRequest';
    /**
     * ID of the Apache Kafka® cluster to delete.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    $type: 'yandex.cloud.mdb.kafka.v1.DeleteClusterMetadata';
    /** ID of the Apache Kafka® cluster that is being deleted. */
    clusterId: string;
}
export interface ListClusterLogsRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.ListClusterLogsRequest';
    /**
     * ID of the Apache Kafka® cluster to request logs for.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
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
     * If the number of available results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListClusterLogsResponse.next_page_token] returned by a previous list request.
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
}
/** A single log record. */
export interface LogRecord {
    $type: 'yandex.cloud.mdb.kafka.v1.LogRecord';
    /** Log record timestamp. */
    timestamp: Date | undefined;
    /** Contents of the log record. */
    message: {
        [key: string]: string;
    };
}
export interface LogRecord_MessageEntry {
    $type: 'yandex.cloud.mdb.kafka.v1.LogRecord.MessageEntry';
    key: string;
    value: string;
}
export interface ListClusterLogsResponse {
    $type: 'yandex.cloud.mdb.kafka.v1.ListClusterLogsResponse';
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterLogsRequest.page_size], use [next_page_token] as the value for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     * This value is interchangeable with [StreamLogRecord.next_record_token] from StreamLogs method.
     */
    nextPageToken: string;
}
export interface StreamLogRecord {
    $type: 'yandex.cloud.mdb.kafka.v1.StreamLogRecord';
    /** One of the requested log records. */
    record: LogRecord | undefined;
    /**
     * This token allows you to continue streaming logs starting from the exact same record.
     *
     * To continue streaming, specify value of [next_record_token] as value for [StreamClusterLogsRequest.record_token] parameter in the next StreamLogs request.
     *
     * This value is interchangeable with [ListClusterLogsResponse.next_page_token] from ListLogs method.
     */
    nextRecordToken: string;
}
export interface StreamClusterLogsRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.StreamClusterLogsRequest';
    /**
     * ID of the Apache Kafka® cluster.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
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
     * If this field is not set, all existing logs will be sent and then the new ones as they appear.
     * In essence it has `tail -f` semantics.
     */
    toTime: Date | undefined;
    /**
     * Record token.
     *
     * Set [record_token] to the [StreamLogRecord.next_record_token] returned by a previous [ClusterService.StreamLogs] request to start streaming from next log record.
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
}
export interface ListClusterOperationsRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.ListClusterOperationsRequest';
    /** ID of the Apache Kafka® cluster to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterOperationsResponse {
    $type: 'yandex.cloud.mdb.kafka.v1.ListClusterOperationsResponse';
    /** List of operations for the specified Apache Kafka® cluster. */
    operations: Operation[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterOperationsRequest.page_size], use [next_page_token] as the value for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterHostsRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.ListClusterHostsRequest';
    /**
     * ID of the Apache Kafka® cluster.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterHostsResponse {
    $type: 'yandex.cloud.mdb.kafka.v1.ListClusterHostsResponse';
    /** List of hosts. */
    hosts: Host[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterHostsRequest.page_size], use the [next_page_token] as the value for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface MoveClusterRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.MoveClusterRequest';
    /**
     * ID of the Apache Kafka® cluster to move.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveClusterMetadata {
    $type: 'yandex.cloud.mdb.kafka.v1.MoveClusterMetadata';
    /** ID of the Apache Kafka® cluster being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destnation folder. */
    destinationFolderId: string;
}
export interface StartClusterRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.StartClusterRequest';
    /**
     * ID of the Apache Kafka® cluster to start.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: 'yandex.cloud.mdb.kafka.v1.StartClusterMetadata';
    /** ID of the Apache Kafka® cluster. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: 'yandex.cloud.mdb.kafka.v1.StopClusterRequest';
    /**
     * ID of the Apache Kafka® cluster to stop.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StopClusterMetadata {
    $type: 'yandex.cloud.mdb.kafka.v1.StopClusterMetadata';
    /** ID of the Apache Kafka® cluster. */
    clusterId: string;
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.GetClusterRequest";
    encode(message: GetClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetClusterRequest;
    fromJSON(object: any): GetClusterRequest;
    toJSON(message: GetClusterRequest): unknown;
    fromPartial(object: DeepPartial<GetClusterRequest>): GetClusterRequest;
};
export declare const ListClustersRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClustersRequest";
    encode(message: ListClustersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClustersRequest;
    fromJSON(object: any): ListClustersRequest;
    toJSON(message: ListClustersRequest): unknown;
    fromPartial(object: DeepPartial<ListClustersRequest>): ListClustersRequest;
};
export declare const ListClustersResponse: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClustersResponse";
    encode(message: ListClustersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClustersResponse;
    fromJSON(object: any): ListClustersResponse;
    toJSON(message: ListClustersResponse): unknown;
    fromPartial(object: DeepPartial<ListClustersResponse>): ListClustersResponse;
};
export declare const CreateClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateClusterRequest";
    encode(message: CreateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterRequest;
    fromJSON(object: any): CreateClusterRequest;
    toJSON(message: CreateClusterRequest): unknown;
    fromPartial(object: DeepPartial<CreateClusterRequest>): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateClusterRequest.LabelsEntry";
    encode(message: CreateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterRequest_LabelsEntry;
    fromJSON(object: any): CreateClusterRequest_LabelsEntry;
    toJSON(message: CreateClusterRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateClusterRequest_LabelsEntry>): CreateClusterRequest_LabelsEntry;
};
export declare const CreateClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateClusterMetadata";
    encode(message: CreateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterMetadata;
    fromJSON(object: any): CreateClusterMetadata;
    toJSON(message: CreateClusterMetadata): unknown;
    fromPartial(object: DeepPartial<CreateClusterMetadata>): CreateClusterMetadata;
};
export declare const UpdateClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateClusterRequest";
    encode(message: UpdateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterRequest;
    fromJSON(object: any): UpdateClusterRequest;
    toJSON(message: UpdateClusterRequest): unknown;
    fromPartial(object: DeepPartial<UpdateClusterRequest>): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateClusterRequest.LabelsEntry";
    encode(message: UpdateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterRequest_LabelsEntry;
    fromJSON(object: any): UpdateClusterRequest_LabelsEntry;
    toJSON(message: UpdateClusterRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateClusterRequest_LabelsEntry>): UpdateClusterRequest_LabelsEntry;
};
export declare const UpdateClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateClusterMetadata";
    encode(message: UpdateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterMetadata;
    fromJSON(object: any): UpdateClusterMetadata;
    toJSON(message: UpdateClusterMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateClusterMetadata>): UpdateClusterMetadata;
};
export declare const DeleteClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteClusterRequest";
    encode(message: DeleteClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterRequest;
    fromJSON(object: any): DeleteClusterRequest;
    toJSON(message: DeleteClusterRequest): unknown;
    fromPartial(object: DeepPartial<DeleteClusterRequest>): DeleteClusterRequest;
};
export declare const DeleteClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteClusterMetadata";
    encode(message: DeleteClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterMetadata;
    fromJSON(object: any): DeleteClusterMetadata;
    toJSON(message: DeleteClusterMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteClusterMetadata>): DeleteClusterMetadata;
};
export declare const ListClusterLogsRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterLogsRequest";
    encode(message: ListClusterLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterLogsRequest;
    fromJSON(object: any): ListClusterLogsRequest;
    toJSON(message: ListClusterLogsRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterLogsRequest>): ListClusterLogsRequest;
};
export declare const LogRecord: {
    $type: "yandex.cloud.mdb.kafka.v1.LogRecord";
    encode(message: LogRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogRecord;
    fromJSON(object: any): LogRecord;
    toJSON(message: LogRecord): unknown;
    fromPartial(object: DeepPartial<LogRecord>): LogRecord;
};
export declare const LogRecord_MessageEntry: {
    $type: "yandex.cloud.mdb.kafka.v1.LogRecord.MessageEntry";
    encode(message: LogRecord_MessageEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogRecord_MessageEntry;
    fromJSON(object: any): LogRecord_MessageEntry;
    toJSON(message: LogRecord_MessageEntry): unknown;
    fromPartial(object: DeepPartial<LogRecord_MessageEntry>): LogRecord_MessageEntry;
};
export declare const ListClusterLogsResponse: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterLogsResponse";
    encode(message: ListClusterLogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterLogsResponse;
    fromJSON(object: any): ListClusterLogsResponse;
    toJSON(message: ListClusterLogsResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterLogsResponse>): ListClusterLogsResponse;
};
export declare const StreamLogRecord: {
    $type: "yandex.cloud.mdb.kafka.v1.StreamLogRecord";
    encode(message: StreamLogRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamLogRecord;
    fromJSON(object: any): StreamLogRecord;
    toJSON(message: StreamLogRecord): unknown;
    fromPartial(object: DeepPartial<StreamLogRecord>): StreamLogRecord;
};
export declare const StreamClusterLogsRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.StreamClusterLogsRequest";
    encode(message: StreamClusterLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamClusterLogsRequest;
    fromJSON(object: any): StreamClusterLogsRequest;
    toJSON(message: StreamClusterLogsRequest): unknown;
    fromPartial(object: DeepPartial<StreamClusterLogsRequest>): StreamClusterLogsRequest;
};
export declare const ListClusterOperationsRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterOperationsRequest";
    encode(message: ListClusterOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterOperationsRequest;
    fromJSON(object: any): ListClusterOperationsRequest;
    toJSON(message: ListClusterOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterOperationsRequest>): ListClusterOperationsRequest;
};
export declare const ListClusterOperationsResponse: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterOperationsResponse";
    encode(message: ListClusterOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterOperationsResponse;
    fromJSON(object: any): ListClusterOperationsResponse;
    toJSON(message: ListClusterOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterOperationsResponse>): ListClusterOperationsResponse;
};
export declare const ListClusterHostsRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterHostsRequest";
    encode(message: ListClusterHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsRequest;
    fromJSON(object: any): ListClusterHostsRequest;
    toJSON(message: ListClusterHostsRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterHostsRequest>): ListClusterHostsRequest;
};
export declare const ListClusterHostsResponse: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterHostsResponse";
    encode(message: ListClusterHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsResponse;
    fromJSON(object: any): ListClusterHostsResponse;
    toJSON(message: ListClusterHostsResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterHostsResponse>): ListClusterHostsResponse;
};
export declare const MoveClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.MoveClusterRequest";
    encode(message: MoveClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveClusterRequest;
    fromJSON(object: any): MoveClusterRequest;
    toJSON(message: MoveClusterRequest): unknown;
    fromPartial(object: DeepPartial<MoveClusterRequest>): MoveClusterRequest;
};
export declare const MoveClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.MoveClusterMetadata";
    encode(message: MoveClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveClusterMetadata;
    fromJSON(object: any): MoveClusterMetadata;
    toJSON(message: MoveClusterMetadata): unknown;
    fromPartial(object: DeepPartial<MoveClusterMetadata>): MoveClusterMetadata;
};
export declare const StartClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.StartClusterRequest";
    encode(message: StartClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterRequest;
    fromJSON(object: any): StartClusterRequest;
    toJSON(message: StartClusterRequest): unknown;
    fromPartial(object: DeepPartial<StartClusterRequest>): StartClusterRequest;
};
export declare const StartClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.StartClusterMetadata";
    encode(message: StartClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterMetadata;
    fromJSON(object: any): StartClusterMetadata;
    toJSON(message: StartClusterMetadata): unknown;
    fromPartial(object: DeepPartial<StartClusterMetadata>): StartClusterMetadata;
};
export declare const StopClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.StopClusterRequest";
    encode(message: StopClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopClusterRequest;
    fromJSON(object: any): StopClusterRequest;
    toJSON(message: StopClusterRequest): unknown;
    fromPartial(object: DeepPartial<StopClusterRequest>): StopClusterRequest;
};
export declare const StopClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.StopClusterMetadata";
    encode(message: StopClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopClusterMetadata;
    fromJSON(object: any): StopClusterMetadata;
    toJSON(message: StopClusterMetadata): unknown;
    fromPartial(object: DeepPartial<StopClusterMetadata>): StopClusterMetadata;
};
/** A set of methods for managing Apache Kafka® clusters. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified Apache Kafka® cluster.
     *
     * To get the list of available Apache Kafka® clusters, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves the list of Apache Kafka® clusters that belong to the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a new Apache Kafka® cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified Apache Kafka® cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified Apache Kafka® cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Moves the specified Apache Kafka® cluster to the specified folder. */
    readonly move: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified Apache Kafka® cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified Apache Kafka® cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Retrieves logs for the specified Apache Kafka® cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-kafka/operations/cluster-logs) section in the documentation.
     */
    readonly listLogs: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/ListLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterLogsRequest;
        readonly responseSerialize: (value: ListClusterLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterLogsResponse;
    };
    /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
    readonly streamLogs: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/StreamLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamClusterLogsRequest;
        readonly responseSerialize: (value: StreamLogRecord) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamLogRecord;
    };
    /** Retrieves the list of operations for the specified Apache Kafka® cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves a list of hosts for the specified Apache Kafka® cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Apache Kafka® cluster.
     *
     * To get the list of available Apache Kafka® clusters, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of Apache Kafka® clusters that belong to the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a new Apache Kafka® cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified Apache Kafka® cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified Apache Kafka® cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Moves the specified Apache Kafka® cluster to the specified folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /** Starts the specified Apache Kafka® cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified Apache Kafka® cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /**
     * Retrieves logs for the specified Apache Kafka® cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-kafka/operations/cluster-logs) section in the documentation.
     */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
    streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
    /** Retrieves the list of operations for the specified Apache Kafka® cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves a list of hosts for the specified Apache Kafka® cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified Apache Kafka® cluster.
     *
     * To get the list of available Apache Kafka® clusters, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves the list of Apache Kafka® clusters that belong to the specified folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a new Apache Kafka® cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified Apache Kafka® cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified Apache Kafka® cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Moves the specified Apache Kafka® cluster to the specified folder. */
    move(request: MoveClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified Apache Kafka® cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified Apache Kafka® cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Retrieves logs for the specified Apache Kafka® cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-kafka/operations/cluster-logs) section in the documentation.
     */
    listLogs(request: ListClusterLogsRequest, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
    streamLogs(request: StreamClusterLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    streamLogs(request: StreamClusterLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    /** Retrieves the list of operations for the specified Apache Kafka® cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of hosts for the specified Apache Kafka® cluster. */
    listHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
}
export declare const ClusterServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ClusterServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
