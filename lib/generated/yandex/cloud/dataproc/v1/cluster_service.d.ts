/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Cluster, HadoopConfig } from '../../../../yandex/cloud/dataproc/v1/cluster';
import { Resources } from '../../../../yandex/cloud/dataproc/v1/common';
import { Role, AutoscalingConfig, Host } from '../../../../yandex/cloud/dataproc/v1/subcluster';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
export interface GetClusterRequest {
    /**
     * ID of the Data Proc cluster.
     *
     * To get a cluster ID make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
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
    /** New configuration for subclusters in a cluster. */
    subclustersSpec: UpdateSubclusterConfigSpec[];
    /** Hadoop specific options */
    hadoop: HadoopConfig | undefined;
}
export interface CreateClusterRequest {
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
    labels: {
        [key: string]: string;
    };
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
}
export interface CreateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    /** ID of the cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
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
    labels: {
        [key: string]: string;
    };
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
}
export interface UpdateClusterRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    /** ID of the cluster that is being updated. */
    clusterId: string;
}
export interface DeleteClusterRequest {
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
    /** ID of the Data Proc cluster that is being deleted. */
    clusterId: string;
}
export interface StartClusterRequest {
    /**
     * ID of the cluster to start.
     *
     * To get a cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StartClusterMetadata {
    /** ID of the Data Proc cluster that is being started. */
    clusterId: string;
}
export interface StopClusterRequest {
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
    /** ID of the Data Proc cluster that is being stopped. */
    clusterId: string;
}
export interface ListClusterOperationsRequest {
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
    /** Required. ID of the Hadoop cluster. */
    clusterId: string;
}
export interface UILink {
    name: string;
    url: string;
}
export interface ListUILinksResponse {
    /** Requested list of ui links. */
    links: UILink[];
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
export declare const CreateSubclusterConfigSpec: {
    encode(message: CreateSubclusterConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSubclusterConfigSpec;
    fromJSON(object: any): CreateSubclusterConfigSpec;
    toJSON(message: CreateSubclusterConfigSpec): unknown;
    fromPartial(object: DeepPartial<CreateSubclusterConfigSpec>): CreateSubclusterConfigSpec;
};
export declare const UpdateSubclusterConfigSpec: {
    encode(message: UpdateSubclusterConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSubclusterConfigSpec;
    fromJSON(object: any): UpdateSubclusterConfigSpec;
    toJSON(message: UpdateSubclusterConfigSpec): unknown;
    fromPartial(object: DeepPartial<UpdateSubclusterConfigSpec>): UpdateSubclusterConfigSpec;
};
export declare const CreateClusterConfigSpec: {
    encode(message: CreateClusterConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterConfigSpec;
    fromJSON(object: any): CreateClusterConfigSpec;
    toJSON(message: CreateClusterConfigSpec): unknown;
    fromPartial(object: DeepPartial<CreateClusterConfigSpec>): CreateClusterConfigSpec;
};
export declare const UpdateClusterConfigSpec: {
    encode(message: UpdateClusterConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterConfigSpec;
    fromJSON(object: any): UpdateClusterConfigSpec;
    toJSON(message: UpdateClusterConfigSpec): unknown;
    fromPartial(object: DeepPartial<UpdateClusterConfigSpec>): UpdateClusterConfigSpec;
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
export declare const ListUILinksRequest: {
    encode(message: ListUILinksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUILinksRequest;
    fromJSON(object: any): ListUILinksRequest;
    toJSON(message: ListUILinksRequest): unknown;
    fromPartial(object: DeepPartial<ListUILinksRequest>): ListUILinksRequest;
};
export declare const UILink: {
    encode(message: UILink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UILink;
    fromJSON(object: any): UILink;
    toJSON(message: UILink): unknown;
    fromPartial(object: DeepPartial<UILink>): UILink;
};
export declare const ListUILinksResponse: {
    encode(message: ListUILinksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUILinksResponse;
    fromJSON(object: any): ListUILinksResponse;
    toJSON(message: ListUILinksResponse): unknown;
    fromPartial(object: DeepPartial<ListUILinksResponse>): ListUILinksResponse;
};
/** A set of methods for managing Data Proc clusters. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified cluster.
     *
     * To get the list of all available clusters, make a [ClusterService.List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves the list of clusters in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the configuration of the specified cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves the list of hosts in the specified cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
    readonly listUILinks: {
        readonly path: "/yandex.cloud.dataproc.v1.ClusterService/ListUILinks";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListUILinksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListUILinksRequest;
        readonly responseSerialize: (value: ListUILinksResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListUILinksResponse;
    };
};
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
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves the list of hosts in the specified cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
    listUILinks: handleUnaryCall<ListUILinksRequest, ListUILinksResponse>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified cluster.
     *
     * To get the list of all available clusters, make a [ClusterService.List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves the list of clusters in the specified folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the configuration of the specified cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of hosts in the specified cluster. */
    listHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
    listUILinks(request: ListUILinksRequest, callback: (error: ServiceError | null, response: ListUILinksResponse) => void): ClientUnaryCall;
    listUILinks(request: ListUILinksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListUILinksResponse) => void): ClientUnaryCall;
    listUILinks(request: ListUILinksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListUILinksResponse) => void): ClientUnaryCall;
}
export declare const ClusterServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ClusterServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
