/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ReleaseChannel, Cluster, NetworkPolicy, MasterMaintenancePolicy, IPAllocationPolicy, KMSProvider, Cilium } from '../../../../yandex/cloud/k8s/v1/cluster';
import { Node } from '../../../../yandex/cloud/k8s/v1/node';
import { NodeGroup } from '../../../../yandex/cloud/k8s/v1/node_group';
import { UpdateVersionSpec } from '../../../../yandex/cloud/k8s/v1/version';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export interface GetClusterRequest {
    $type: 'yandex.cloud.k8s.v1.GetClusterRequest';
    /** ID of the Kubernetes cluster to return. */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: 'yandex.cloud.k8s.v1.ListClustersRequest';
    /**
     * ID of the folder to list Kubernetes cluster in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListClustersResponse.next_page_token]
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
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Cluster.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 1-61 characters long and match the regular expression `|[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     */
    filter: string;
}
export interface ListClustersResponse {
    $type: 'yandex.cloud.k8s.v1.ListClustersResponse';
    /** List of Kubernetes cluster. */
    clusters: Cluster[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClustersRequest.page_size], use
     * the `next_page_token` as the value
     * for the [ListClustersRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteClusterRequest {
    $type: 'yandex.cloud.k8s.v1.DeleteClusterRequest';
    /**
     * ID of the Kubernetes cluster to delete.
     * To get Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    $type: 'yandex.cloud.k8s.v1.DeleteClusterMetadata';
    /** ID of the Kubernetes cluster that is being deleted. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: 'yandex.cloud.k8s.v1.StopClusterRequest';
    /**
     * ID of the Kubernetes cluster to stop.
     * To get Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StopClusterMetadata {
    $type: 'yandex.cloud.k8s.v1.StopClusterMetadata';
    /** ID of the Kubernetes cluster that is being stopped. */
    clusterId: string;
}
export interface StartClusterRequest {
    $type: 'yandex.cloud.k8s.v1.StartClusterRequest';
    /**
     * ID of the Kubernetes cluster to start.
     * To get Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: 'yandex.cloud.k8s.v1.StartClusterMetadata';
    /** ID of the Kubernetes cluster that is being started. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: 'yandex.cloud.k8s.v1.UpdateClusterRequest';
    /**
     * ID of the Kubernetes cluster to update.
     * To get the Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    updateMask: FieldMask | undefined;
    /**
     * Name of the Kubernetes cluster.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the Kubernetes cluster. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /** Gateway IPv4 address. */
    gatewayIpv4Address: string | undefined;
    /** Specification of the master update. */
    masterSpec: MasterUpdateSpec | undefined;
    /**
     * Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster.
     * Selected service account should have `edit` role on the folder where the Kubernetes cluster will be
     * located and on the folder where selected network resides.
     */
    serviceAccountId: string;
    /**
     * Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry
     * or to push node logs and metrics.
     */
    nodeServiceAccountId: string;
    networkPolicy: NetworkPolicy | undefined;
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: 'yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface MasterUpdateSpec {
    $type: 'yandex.cloud.k8s.v1.MasterUpdateSpec';
    /** Specification of the master update. */
    version: UpdateVersionSpec | undefined;
    /** Maintenance policy of the master. */
    maintenancePolicy: MasterMaintenancePolicy | undefined;
    /** Master security groups. */
    securityGroupIds: string[];
}
export interface UpdateClusterMetadata {
    $type: 'yandex.cloud.k8s.v1.UpdateClusterMetadata';
    /** ID of the Kubernetes cluster that is being updated. */
    clusterId: string;
}
export interface CreateClusterRequest {
    $type: 'yandex.cloud.k8s.v1.CreateClusterRequest';
    /**
     * ID of the folder to create a Kubernetes cluster in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the Kubernetes cluster.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the Kubernetes cluster. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** ID of the network. */
    networkId: string;
    /** IP allocation policy of the Kubernetes cluster. */
    masterSpec: MasterSpec | undefined;
    /** IP allocation policy of the Kubernetes cluster. */
    ipAllocationPolicy: IPAllocationPolicy | undefined;
    /** Gateway IPv4 address. */
    gatewayIpv4Address: string | undefined;
    /**
     * Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster.
     * Selected service account should have `edit` role on the folder where the Kubernetes cluster will be
     * located and on the folder where selected network resides.
     */
    serviceAccountId: string;
    /** Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry or to push node logs and metrics. */
    nodeServiceAccountId: string;
    /** Release channel for the master. */
    releaseChannel: ReleaseChannel;
    networkPolicy: NetworkPolicy | undefined;
    /** KMS provider configuration. */
    kmsProvider: KMSProvider | undefined;
    cilium: Cilium | undefined;
}
export interface CreateClusterRequest_LabelsEntry {
    $type: 'yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    $type: 'yandex.cloud.k8s.v1.CreateClusterMetadata';
    /** ID of the Kubernetes cluster that is being created. */
    clusterId: string;
}
export interface AutoUpgradeMasterMetadata {
    $type: 'yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata';
    /** ID of the Kubernetes cluster that is being auto upgraded. */
    clusterId: string;
}
export interface ListClusterOperationsRequest {
    $type: 'yandex.cloud.k8s.v1.ListClusterOperationsRequest';
    /** ID of the Kubernetes cluster to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListClusterOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on [Cluster.name] field.
     */
    filter: string;
}
export interface ListClusterOperationsResponse {
    $type: 'yandex.cloud.k8s.v1.ListClusterOperationsResponse';
    /** List of operations for the specified Kubernetes cluster. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterOperationsRequest.page_size], use the `next_page_token` as the value
     * for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterNodeGroupsRequest {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest';
    /**
     * ID of the Kubernetes cluster to list node groups in.
     * To get the Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListClusterNodeGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListClusterNodeGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on [Cluster.name] field.
     */
    filter: string;
}
export interface ListClusterNodeGroupsResponse {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse';
    /** List of node groups for the specified Kubernetes cluster. */
    nodeGroups: NodeGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterNodeGroupsRequest.page_size], use
     * the `next_page_token` as the value
     * for the [ListClusterNodeGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterNodesRequest {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodesRequest';
    /**
     * ID of the Kubernetes cluster to list nodes in.
     * To get the Kubernetes cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListClusterNodesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListClusterNodeGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListClusterNodesResponse {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodesResponse';
    /** List of nodes for the specified Kubernetes cluster. */
    nodes: Node[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterNodesRequest.page_size], use
     * the `next_page_token` as the value
     * for the [ListClusterNodesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface MasterSpec {
    $type: 'yandex.cloud.k8s.v1.MasterSpec';
    /** Specification of the zonal master. */
    zonalMasterSpec: ZonalMasterSpec | undefined;
    /** Specification of the regional master. */
    regionalMasterSpec: RegionalMasterSpec | undefined;
    /** Version of Kubernetes components that runs on the master. */
    version: string;
    /** Maintenance policy of the master. */
    maintenancePolicy: MasterMaintenancePolicy | undefined;
    /** Master security groups. */
    securityGroupIds: string[];
}
export interface ZonalMasterSpec {
    $type: 'yandex.cloud.k8s.v1.ZonalMasterSpec';
    /** ID of the availability zone. */
    zoneId: string;
    /** Specification of parameters for internal IPv4 networking. */
    internalV4AddressSpec: InternalAddressSpec | undefined;
    /** Specification of parameters for external IPv4 networking. */
    externalV4AddressSpec: ExternalAddressSpec | undefined;
}
export interface RegionalMasterSpec {
    $type: 'yandex.cloud.k8s.v1.RegionalMasterSpec';
    /** ID of the availability zone where the master resides. */
    regionId: string;
    /** List of locations where the master will be allocated. */
    locations: MasterLocation[];
    /** Specify to allocate a static public IP for the master. */
    externalV4AddressSpec: ExternalAddressSpec | undefined;
}
export interface InternalAddressSpec {
    $type: 'yandex.cloud.k8s.v1.InternalAddressSpec';
    /** ID of the subnet. If no ID is specified, and there only one subnet in specified zone, an address in this subnet will be allocated. */
    subnetId: string;
}
export interface ExternalAddressSpec {
    $type: 'yandex.cloud.k8s.v1.ExternalAddressSpec';
}
export interface MasterLocation {
    $type: 'yandex.cloud.k8s.v1.MasterLocation';
    /** ID of the availability zone. */
    zoneId: string;
    /**
     * If not specified and there is a single subnet in specified zone, address
     * in this subnet will be allocated.
     */
    internalV4AddressSpec: InternalAddressSpec | undefined;
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.k8s.v1.GetClusterRequest";
    encode(message: GetClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetClusterRequest;
    fromJSON(object: any): GetClusterRequest;
    toJSON(message: GetClusterRequest): unknown;
    fromPartial(object: DeepPartial<GetClusterRequest>): GetClusterRequest;
};
export declare const ListClustersRequest: {
    $type: "yandex.cloud.k8s.v1.ListClustersRequest";
    encode(message: ListClustersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClustersRequest;
    fromJSON(object: any): ListClustersRequest;
    toJSON(message: ListClustersRequest): unknown;
    fromPartial(object: DeepPartial<ListClustersRequest>): ListClustersRequest;
};
export declare const ListClustersResponse: {
    $type: "yandex.cloud.k8s.v1.ListClustersResponse";
    encode(message: ListClustersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClustersResponse;
    fromJSON(object: any): ListClustersResponse;
    toJSON(message: ListClustersResponse): unknown;
    fromPartial(object: DeepPartial<ListClustersResponse>): ListClustersResponse;
};
export declare const DeleteClusterRequest: {
    $type: "yandex.cloud.k8s.v1.DeleteClusterRequest";
    encode(message: DeleteClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterRequest;
    fromJSON(object: any): DeleteClusterRequest;
    toJSON(message: DeleteClusterRequest): unknown;
    fromPartial(object: DeepPartial<DeleteClusterRequest>): DeleteClusterRequest;
};
export declare const DeleteClusterMetadata: {
    $type: "yandex.cloud.k8s.v1.DeleteClusterMetadata";
    encode(message: DeleteClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterMetadata;
    fromJSON(object: any): DeleteClusterMetadata;
    toJSON(message: DeleteClusterMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteClusterMetadata>): DeleteClusterMetadata;
};
export declare const StopClusterRequest: {
    $type: "yandex.cloud.k8s.v1.StopClusterRequest";
    encode(message: StopClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopClusterRequest;
    fromJSON(object: any): StopClusterRequest;
    toJSON(message: StopClusterRequest): unknown;
    fromPartial(object: DeepPartial<StopClusterRequest>): StopClusterRequest;
};
export declare const StopClusterMetadata: {
    $type: "yandex.cloud.k8s.v1.StopClusterMetadata";
    encode(message: StopClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopClusterMetadata;
    fromJSON(object: any): StopClusterMetadata;
    toJSON(message: StopClusterMetadata): unknown;
    fromPartial(object: DeepPartial<StopClusterMetadata>): StopClusterMetadata;
};
export declare const StartClusterRequest: {
    $type: "yandex.cloud.k8s.v1.StartClusterRequest";
    encode(message: StartClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterRequest;
    fromJSON(object: any): StartClusterRequest;
    toJSON(message: StartClusterRequest): unknown;
    fromPartial(object: DeepPartial<StartClusterRequest>): StartClusterRequest;
};
export declare const StartClusterMetadata: {
    $type: "yandex.cloud.k8s.v1.StartClusterMetadata";
    encode(message: StartClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterMetadata;
    fromJSON(object: any): StartClusterMetadata;
    toJSON(message: StartClusterMetadata): unknown;
    fromPartial(object: DeepPartial<StartClusterMetadata>): StartClusterMetadata;
};
export declare const UpdateClusterRequest: {
    $type: "yandex.cloud.k8s.v1.UpdateClusterRequest";
    encode(message: UpdateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterRequest;
    fromJSON(object: any): UpdateClusterRequest;
    toJSON(message: UpdateClusterRequest): unknown;
    fromPartial(object: DeepPartial<UpdateClusterRequest>): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry";
    encode(message: UpdateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterRequest_LabelsEntry;
    fromJSON(object: any): UpdateClusterRequest_LabelsEntry;
    toJSON(message: UpdateClusterRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateClusterRequest_LabelsEntry>): UpdateClusterRequest_LabelsEntry;
};
export declare const MasterUpdateSpec: {
    $type: "yandex.cloud.k8s.v1.MasterUpdateSpec";
    encode(message: MasterUpdateSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterUpdateSpec;
    fromJSON(object: any): MasterUpdateSpec;
    toJSON(message: MasterUpdateSpec): unknown;
    fromPartial(object: DeepPartial<MasterUpdateSpec>): MasterUpdateSpec;
};
export declare const UpdateClusterMetadata: {
    $type: "yandex.cloud.k8s.v1.UpdateClusterMetadata";
    encode(message: UpdateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterMetadata;
    fromJSON(object: any): UpdateClusterMetadata;
    toJSON(message: UpdateClusterMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateClusterMetadata>): UpdateClusterMetadata;
};
export declare const CreateClusterRequest: {
    $type: "yandex.cloud.k8s.v1.CreateClusterRequest";
    encode(message: CreateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterRequest;
    fromJSON(object: any): CreateClusterRequest;
    toJSON(message: CreateClusterRequest): unknown;
    fromPartial(object: DeepPartial<CreateClusterRequest>): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry";
    encode(message: CreateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterRequest_LabelsEntry;
    fromJSON(object: any): CreateClusterRequest_LabelsEntry;
    toJSON(message: CreateClusterRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateClusterRequest_LabelsEntry>): CreateClusterRequest_LabelsEntry;
};
export declare const CreateClusterMetadata: {
    $type: "yandex.cloud.k8s.v1.CreateClusterMetadata";
    encode(message: CreateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterMetadata;
    fromJSON(object: any): CreateClusterMetadata;
    toJSON(message: CreateClusterMetadata): unknown;
    fromPartial(object: DeepPartial<CreateClusterMetadata>): CreateClusterMetadata;
};
export declare const AutoUpgradeMasterMetadata: {
    $type: "yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata";
    encode(message: AutoUpgradeMasterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AutoUpgradeMasterMetadata;
    fromJSON(object: any): AutoUpgradeMasterMetadata;
    toJSON(message: AutoUpgradeMasterMetadata): unknown;
    fromPartial(object: DeepPartial<AutoUpgradeMasterMetadata>): AutoUpgradeMasterMetadata;
};
export declare const ListClusterOperationsRequest: {
    $type: "yandex.cloud.k8s.v1.ListClusterOperationsRequest";
    encode(message: ListClusterOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterOperationsRequest;
    fromJSON(object: any): ListClusterOperationsRequest;
    toJSON(message: ListClusterOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterOperationsRequest>): ListClusterOperationsRequest;
};
export declare const ListClusterOperationsResponse: {
    $type: "yandex.cloud.k8s.v1.ListClusterOperationsResponse";
    encode(message: ListClusterOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterOperationsResponse;
    fromJSON(object: any): ListClusterOperationsResponse;
    toJSON(message: ListClusterOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterOperationsResponse>): ListClusterOperationsResponse;
};
export declare const ListClusterNodeGroupsRequest: {
    $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest";
    encode(message: ListClusterNodeGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterNodeGroupsRequest;
    fromJSON(object: any): ListClusterNodeGroupsRequest;
    toJSON(message: ListClusterNodeGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterNodeGroupsRequest>): ListClusterNodeGroupsRequest;
};
export declare const ListClusterNodeGroupsResponse: {
    $type: "yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse";
    encode(message: ListClusterNodeGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterNodeGroupsResponse;
    fromJSON(object: any): ListClusterNodeGroupsResponse;
    toJSON(message: ListClusterNodeGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterNodeGroupsResponse>): ListClusterNodeGroupsResponse;
};
export declare const ListClusterNodesRequest: {
    $type: "yandex.cloud.k8s.v1.ListClusterNodesRequest";
    encode(message: ListClusterNodesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterNodesRequest;
    fromJSON(object: any): ListClusterNodesRequest;
    toJSON(message: ListClusterNodesRequest): unknown;
    fromPartial(object: DeepPartial<ListClusterNodesRequest>): ListClusterNodesRequest;
};
export declare const ListClusterNodesResponse: {
    $type: "yandex.cloud.k8s.v1.ListClusterNodesResponse";
    encode(message: ListClusterNodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterNodesResponse;
    fromJSON(object: any): ListClusterNodesResponse;
    toJSON(message: ListClusterNodesResponse): unknown;
    fromPartial(object: DeepPartial<ListClusterNodesResponse>): ListClusterNodesResponse;
};
export declare const MasterSpec: {
    $type: "yandex.cloud.k8s.v1.MasterSpec";
    encode(message: MasterSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterSpec;
    fromJSON(object: any): MasterSpec;
    toJSON(message: MasterSpec): unknown;
    fromPartial(object: DeepPartial<MasterSpec>): MasterSpec;
};
export declare const ZonalMasterSpec: {
    $type: "yandex.cloud.k8s.v1.ZonalMasterSpec";
    encode(message: ZonalMasterSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ZonalMasterSpec;
    fromJSON(object: any): ZonalMasterSpec;
    toJSON(message: ZonalMasterSpec): unknown;
    fromPartial(object: DeepPartial<ZonalMasterSpec>): ZonalMasterSpec;
};
export declare const RegionalMasterSpec: {
    $type: "yandex.cloud.k8s.v1.RegionalMasterSpec";
    encode(message: RegionalMasterSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegionalMasterSpec;
    fromJSON(object: any): RegionalMasterSpec;
    toJSON(message: RegionalMasterSpec): unknown;
    fromPartial(object: DeepPartial<RegionalMasterSpec>): RegionalMasterSpec;
};
export declare const InternalAddressSpec: {
    $type: "yandex.cloud.k8s.v1.InternalAddressSpec";
    encode(message: InternalAddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InternalAddressSpec;
    fromJSON(object: any): InternalAddressSpec;
    toJSON(message: InternalAddressSpec): unknown;
    fromPartial(object: DeepPartial<InternalAddressSpec>): InternalAddressSpec;
};
export declare const ExternalAddressSpec: {
    $type: "yandex.cloud.k8s.v1.ExternalAddressSpec";
    encode(_: ExternalAddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalAddressSpec;
    fromJSON(_: any): ExternalAddressSpec;
    toJSON(_: ExternalAddressSpec): unknown;
    fromPartial(_: DeepPartial<ExternalAddressSpec>): ExternalAddressSpec;
};
export declare const MasterLocation: {
    $type: "yandex.cloud.k8s.v1.MasterLocation";
    encode(message: MasterLocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterLocation;
    fromJSON(object: any): MasterLocation;
    toJSON(message: MasterLocation): unknown;
    fromPartial(object: DeepPartial<MasterLocation>): MasterLocation;
};
/** A set of methods for managing Kubernetes cluster. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified Kubernetes cluster.
     *
     * To get the list of available Kubernetes cluster, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves the list of Kubernetes cluster in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a Kubernetes cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified Kubernetes cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified Kubernetes cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified Kubernetes cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified Kubernetes cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists nodegroup for the specified Kubernetes cluster. */
    readonly listNodeGroups: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/ListNodeGroups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterNodeGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterNodeGroupsRequest;
        readonly responseSerialize: (value: ListClusterNodeGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterNodeGroupsResponse;
    };
    /** Lists operations for the specified Kubernetes cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Lists cluster's nodes. */
    readonly listNodes: {
        readonly path: "/yandex.cloud.k8s.v1.ClusterService/ListNodes";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterNodesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterNodesRequest;
        readonly responseSerialize: (value: ListClusterNodesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterNodesResponse;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Kubernetes cluster.
     *
     * To get the list of available Kubernetes cluster, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of Kubernetes cluster in the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a Kubernetes cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified Kubernetes cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified Kubernetes cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Stops the specified Kubernetes cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Starts the specified Kubernetes cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Lists nodegroup for the specified Kubernetes cluster. */
    listNodeGroups: handleUnaryCall<ListClusterNodeGroupsRequest, ListClusterNodeGroupsResponse>;
    /** Lists operations for the specified Kubernetes cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Lists cluster's nodes. */
    listNodes: handleUnaryCall<ListClusterNodesRequest, ListClusterNodesResponse>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified Kubernetes cluster.
     *
     * To get the list of available Kubernetes cluster, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves the list of Kubernetes cluster in the specified folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a Kubernetes cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified Kubernetes cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified Kubernetes cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified Kubernetes cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified Kubernetes cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists nodegroup for the specified Kubernetes cluster. */
    listNodeGroups(request: ListClusterNodeGroupsRequest, callback: (error: ServiceError | null, response: ListClusterNodeGroupsResponse) => void): ClientUnaryCall;
    listNodeGroups(request: ListClusterNodeGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterNodeGroupsResponse) => void): ClientUnaryCall;
    listNodeGroups(request: ListClusterNodeGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterNodeGroupsResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified Kubernetes cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Lists cluster's nodes. */
    listNodes(request: ListClusterNodesRequest, callback: (error: ServiceError | null, response: ListClusterNodesResponse) => void): ClientUnaryCall;
    listNodes(request: ListClusterNodesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterNodesResponse) => void): ClientUnaryCall;
    listNodes(request: ListClusterNodesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterNodesResponse) => void): ClientUnaryCall;
}
export declare const ClusterServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ClusterServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
