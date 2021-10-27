/// <reference types="node" />
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from '../../../../../yandex/cloud/access/access';
import { InstanceTemplate, ScalePolicy, DeployPolicy, AllocationPolicy, LoadBalancerSpec, HealthChecksSpec, Variable, ApplicationLoadBalancerSpec, InstanceGroup, ManagedInstance, LogRecord } from '../../../../../yandex/cloud/compute/v1/instancegroup/instance_group';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1.instancegroup";
export declare enum InstanceGroupView {
    /** BASIC - Doesn't include the metadata of the instance template in the server response. */
    BASIC = 0,
    /** FULL - Returns the metadata of the instance template in the server response. */
    FULL = 1,
    UNRECOGNIZED = -1
}
export declare function instanceGroupViewFromJSON(object: any): InstanceGroupView;
export declare function instanceGroupViewToJSON(object: InstanceGroupView): string;
export interface ResumeInstanceGroupProcessesRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest';
    /**
     * ID of the instance group to resume processes in.
     *
     * The instance group must have a `PAUSED` status ([InstanceGroup.status]).
     *
     * To get the instance group ID, make a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface ResumeInstanceGroupProcessMetadata {
    $type: 'yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata';
    /** ID of the instance group that processes are being resumed in. */
    instanceGroupId: string;
}
export interface PauseInstanceGroupProcessesRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest';
    /**
     * ID of the instance group to pause processes in.
     *
     * The instance group must have an `ACTIVE` status ([InstanceGroup.status]).
     *
     * To get the instance group ID, make a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface PauseInstanceGroupProcessMetadata {
    $type: 'yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata';
    /** ID of the instance group that processes are being paused in. */
    instanceGroupId: string;
}
export interface GetInstanceGroupRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest';
    /**
     * ID of the InstanceGroup resource to return.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /** Defines which information about the Instance template should be returned in the server response. */
    view: InstanceGroupView;
}
export interface CreateInstanceGroupRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest';
    /**
     * ID of the folder to create an instance group in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the instance group. */
    name: string;
    /** Description of the instance group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Instance template that the instance group belongs to. */
    instanceTemplate: InstanceTemplate | undefined;
    /** [Scaling policy](/docs/compute/concepts/instance-groups/scale) of the instance group. */
    scalePolicy: ScalePolicy | undefined;
    /** Deployment policy of the instance group. */
    deployPolicy: DeployPolicy | undefined;
    /** Allocation policy of the instance group by zones and regions. */
    allocationPolicy: AllocationPolicy | undefined;
    /** Load balancing specification. */
    loadBalancerSpec: LoadBalancerSpec | undefined;
    /** Health checking specification. For more information, see [Health check](/docs/load-balancer/concepts/health-check). */
    healthChecksSpec: HealthChecksSpec | undefined;
    /**
     * ID of the service account. The service account will be used for all API calls
     * made by the Instance Groups component on behalf of the user (for example, creating instances, adding them to load balancer target group, etc.). For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    variables: Variable[];
    /**
     * Flag prohibiting deletion of the instance group.
     *
     * Allowed values:</br>- `false`: The instance group can be deleted.</br>- `true`: The instance group cannot be deleted.
     *
     * The default is `false`.
     */
    deletionProtection: boolean;
    /** Application Load balancing (L7) specification. */
    applicationLoadBalancerSpec: ApplicationLoadBalancerSpec | undefined;
}
export interface CreateInstanceGroupRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateInstanceGroupFromYamlRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest';
    /**
     * ID of the folder to create an instance group in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** [InstanceGroupService.Create] request in YAML format. */
    instanceGroupYaml: string;
}
export interface CreateInstanceGroupMetadata {
    $type: 'yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata';
    /** ID of the instance group that is being created. */
    instanceGroupId: string;
}
export interface UpdateInstanceGroupRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest';
    /**
     * ID of the instance group to update.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /** Field mask that specifies which fields of the InstanceGroup resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the instance group. */
    name: string;
    /** Description of the instance group. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * The existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /** Instance template that the instance group belongs to. */
    instanceTemplate: InstanceTemplate | undefined;
    /** [Scaling policy](/docs/compute/concepts/instance-groups/scale) of the instance group. */
    scalePolicy: ScalePolicy | undefined;
    /** Deployment policy of the instance group. */
    deployPolicy: DeployPolicy | undefined;
    /** Allocation policy of the instance group by zones and regions. */
    allocationPolicy: AllocationPolicy | undefined;
    /** Health checking specification. For more information, see [Health check](/docs/load-balancer/concepts/health-check). */
    healthChecksSpec: HealthChecksSpec | undefined;
    /**
     * ID of the service account. The service account will be used for all API calls
     * made by the Instance Groups component on behalf of the user (for example, creating instances, adding them to load balancer target group, etc.). For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** Load Balancer specification for load balancing support. */
    loadBalancerSpec: LoadBalancerSpec | undefined;
    variables: Variable[];
    /** Flag that inhibits deletion of the instance group */
    deletionProtection: boolean;
}
export interface UpdateInstanceGroupRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateInstanceGroupFromYamlRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest';
    /**
     * ID of the instance group to update.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /** [InstanceGroupService.Update] request in YAML format. */
    instanceGroupYaml: string;
}
export interface UpdateInstanceGroupMetadata {
    $type: 'yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata';
    /**
     * ID of the InstanceGroup resource that is being updated.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface StartInstanceGroupRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest';
    /**
     * ID of the instance group to start.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface StartInstanceGroupMetadata {
    $type: 'yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata';
    /** ID of the InstanceGroup resource that is being started. */
    instanceGroupId: string;
}
export interface StopInstanceGroupRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest';
    /**
     * ID of the instance group to stop.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface StopInstanceGroupMetadata {
    $type: 'yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata';
    /** ID of the InstanceGroup resource that is being stopped. */
    instanceGroupId: string;
}
export interface DeleteInstanceGroupRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest';
    /**
     * ID of the instance group to delete.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface DeleteInstanceGroupMetadata {
    $type: 'yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata';
    /**
     * ID of the instance group that is being deleted.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}
export interface DeleteInstancesMetadata {
    $type: 'yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata';
    /** ID of the instance group that the instances are being deleted from. */
    instanceGroupId: string;
}
export interface StopInstancesMetadata {
    $type: 'yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata';
    /** ID of the instance group that the instances are being stopped from. */
    instanceGroupId: string;
}
export interface ListInstanceGroupsRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest';
    /**
     * ID of the folder to list instance groups in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListInstanceGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListInstanceGroupsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [InstanceGroup.name] field.
     */
    filter: string;
    /** Defines which information about the Instance template should be returned in the server response. */
    view: InstanceGroupView;
}
export interface ListInstanceGroupsResponse {
    $type: 'yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse';
    /** Lists instance groups for the specified folder. */
    instanceGroups: InstanceGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListInstanceGroupsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListInstanceGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListInstanceGroupInstancesRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest';
    /**
     * ID of the InstanceGroup resource to list instances for.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListInstanceGroupInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListInstanceGroupInstancesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [ManagedInstance.name] field.
     */
    filter: string;
}
export interface ListInstanceGroupInstancesResponse {
    $type: 'yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse';
    /** Lists instances for the specified instance group. */
    instances: ManagedInstance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListInstanceGroupInstancesRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListInstanceGroupInstancesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteInstancesRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest';
    /**
     * ID of the instance group that the instances are being deleted from.
     * To get the ID of the instance group, use the [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * IDs of the instances to delete. Instances will be deleted along with all dependent resources.
     * Only IDs from the ManagedInstance.id field are allowed, not ManagedInstance.instance_id.
     */
    managedInstanceIds: string[];
    /**
     * If set to true, the target size of instance group will not be reduced and
     * a new instance will be created instead of the deleted one. By default, the target size of instance group
     * will be reduced by the specified number of instance IDs.
     */
    createAnother: boolean;
}
export interface StopInstancesRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.StopInstancesRequest';
    /**
     * ID of the instance group that the instances are being stopped from.
     * To get the ID of the instance group, use the [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * IDs of the instances to stop. After stopping, the instance can be updated, started, or deleted
     * according to scale and deploy policies.
     * Only IDs from the ManagedInstance.id field are allowed, not ManagedInstance.instance_id.
     */
    managedInstanceIds: string[];
}
export interface ListInstanceGroupOperationsRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest';
    /**
     * ID of the InstanceGroup resource to list operations for.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is more than [page_size], the service returns a [ListInstanceGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListInstanceGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [InstanceGroup.name] field.
     */
    filter: string;
}
export interface ListInstanceGroupOperationsResponse {
    $type: 'yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse';
    /** Lists operations for the specified instance group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListInstanceGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListInstanceGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListInstanceGroupLogRecordsRequest {
    $type: 'yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest';
    /**
     * ID of the InstanceGroup resource to list logs for.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListInstanceGroupLogRecordsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListInstanceGroupLogRecordsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [InstanceGroup.name] field.
     */
    filter: string;
}
export interface ListInstanceGroupLogRecordsResponse {
    $type: 'yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse';
    /** Lists logs for the specified instance group. */
    logRecords: LogRecord[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListInstanceGroupLogRecordsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListInstanceGroupLogRecordsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const ResumeInstanceGroupProcessesRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest";
    encode(message: ResumeInstanceGroupProcessesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeInstanceGroupProcessesRequest;
    fromJSON(object: any): ResumeInstanceGroupProcessesRequest;
    toJSON(message: ResumeInstanceGroupProcessesRequest): unknown;
    fromPartial(object: DeepPartial<ResumeInstanceGroupProcessesRequest>): ResumeInstanceGroupProcessesRequest;
};
export declare const ResumeInstanceGroupProcessMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessMetadata";
    encode(message: ResumeInstanceGroupProcessMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeInstanceGroupProcessMetadata;
    fromJSON(object: any): ResumeInstanceGroupProcessMetadata;
    toJSON(message: ResumeInstanceGroupProcessMetadata): unknown;
    fromPartial(object: DeepPartial<ResumeInstanceGroupProcessMetadata>): ResumeInstanceGroupProcessMetadata;
};
export declare const PauseInstanceGroupProcessesRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest";
    encode(message: PauseInstanceGroupProcessesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseInstanceGroupProcessesRequest;
    fromJSON(object: any): PauseInstanceGroupProcessesRequest;
    toJSON(message: PauseInstanceGroupProcessesRequest): unknown;
    fromPartial(object: DeepPartial<PauseInstanceGroupProcessesRequest>): PauseInstanceGroupProcessesRequest;
};
export declare const PauseInstanceGroupProcessMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessMetadata";
    encode(message: PauseInstanceGroupProcessMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseInstanceGroupProcessMetadata;
    fromJSON(object: any): PauseInstanceGroupProcessMetadata;
    toJSON(message: PauseInstanceGroupProcessMetadata): unknown;
    fromPartial(object: DeepPartial<PauseInstanceGroupProcessMetadata>): PauseInstanceGroupProcessMetadata;
};
export declare const GetInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest";
    encode(message: GetInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInstanceGroupRequest;
    fromJSON(object: any): GetInstanceGroupRequest;
    toJSON(message: GetInstanceGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetInstanceGroupRequest>): GetInstanceGroupRequest;
};
export declare const CreateInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest";
    encode(message: CreateInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceGroupRequest;
    fromJSON(object: any): CreateInstanceGroupRequest;
    toJSON(message: CreateInstanceGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateInstanceGroupRequest>): CreateInstanceGroupRequest;
};
export declare const CreateInstanceGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest.LabelsEntry";
    encode(message: CreateInstanceGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceGroupRequest_LabelsEntry;
    fromJSON(object: any): CreateInstanceGroupRequest_LabelsEntry;
    toJSON(message: CreateInstanceGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateInstanceGroupRequest_LabelsEntry>): CreateInstanceGroupRequest_LabelsEntry;
};
export declare const CreateInstanceGroupFromYamlRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest";
    encode(message: CreateInstanceGroupFromYamlRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceGroupFromYamlRequest;
    fromJSON(object: any): CreateInstanceGroupFromYamlRequest;
    toJSON(message: CreateInstanceGroupFromYamlRequest): unknown;
    fromPartial(object: DeepPartial<CreateInstanceGroupFromYamlRequest>): CreateInstanceGroupFromYamlRequest;
};
export declare const CreateInstanceGroupMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupMetadata";
    encode(message: CreateInstanceGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceGroupMetadata;
    fromJSON(object: any): CreateInstanceGroupMetadata;
    toJSON(message: CreateInstanceGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateInstanceGroupMetadata>): CreateInstanceGroupMetadata;
};
export declare const UpdateInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest";
    encode(message: UpdateInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceGroupRequest;
    fromJSON(object: any): UpdateInstanceGroupRequest;
    toJSON(message: UpdateInstanceGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceGroupRequest>): UpdateInstanceGroupRequest;
};
export declare const UpdateInstanceGroupRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest.LabelsEntry";
    encode(message: UpdateInstanceGroupRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceGroupRequest_LabelsEntry;
    fromJSON(object: any): UpdateInstanceGroupRequest_LabelsEntry;
    toJSON(message: UpdateInstanceGroupRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceGroupRequest_LabelsEntry>): UpdateInstanceGroupRequest_LabelsEntry;
};
export declare const UpdateInstanceGroupFromYamlRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest";
    encode(message: UpdateInstanceGroupFromYamlRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceGroupFromYamlRequest;
    fromJSON(object: any): UpdateInstanceGroupFromYamlRequest;
    toJSON(message: UpdateInstanceGroupFromYamlRequest): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceGroupFromYamlRequest>): UpdateInstanceGroupFromYamlRequest;
};
export declare const UpdateInstanceGroupMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupMetadata";
    encode(message: UpdateInstanceGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceGroupMetadata;
    fromJSON(object: any): UpdateInstanceGroupMetadata;
    toJSON(message: UpdateInstanceGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateInstanceGroupMetadata>): UpdateInstanceGroupMetadata;
};
export declare const StartInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest";
    encode(message: StartInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartInstanceGroupRequest;
    fromJSON(object: any): StartInstanceGroupRequest;
    toJSON(message: StartInstanceGroupRequest): unknown;
    fromPartial(object: DeepPartial<StartInstanceGroupRequest>): StartInstanceGroupRequest;
};
export declare const StartInstanceGroupMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.StartInstanceGroupMetadata";
    encode(message: StartInstanceGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartInstanceGroupMetadata;
    fromJSON(object: any): StartInstanceGroupMetadata;
    toJSON(message: StartInstanceGroupMetadata): unknown;
    fromPartial(object: DeepPartial<StartInstanceGroupMetadata>): StartInstanceGroupMetadata;
};
export declare const StopInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest";
    encode(message: StopInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstanceGroupRequest;
    fromJSON(object: any): StopInstanceGroupRequest;
    toJSON(message: StopInstanceGroupRequest): unknown;
    fromPartial(object: DeepPartial<StopInstanceGroupRequest>): StopInstanceGroupRequest;
};
export declare const StopInstanceGroupMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstanceGroupMetadata";
    encode(message: StopInstanceGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstanceGroupMetadata;
    fromJSON(object: any): StopInstanceGroupMetadata;
    toJSON(message: StopInstanceGroupMetadata): unknown;
    fromPartial(object: DeepPartial<StopInstanceGroupMetadata>): StopInstanceGroupMetadata;
};
export declare const DeleteInstanceGroupRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest";
    encode(message: DeleteInstanceGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstanceGroupRequest;
    fromJSON(object: any): DeleteInstanceGroupRequest;
    toJSON(message: DeleteInstanceGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteInstanceGroupRequest>): DeleteInstanceGroupRequest;
};
export declare const DeleteInstanceGroupMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupMetadata";
    encode(message: DeleteInstanceGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstanceGroupMetadata;
    fromJSON(object: any): DeleteInstanceGroupMetadata;
    toJSON(message: DeleteInstanceGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteInstanceGroupMetadata>): DeleteInstanceGroupMetadata;
};
export declare const DeleteInstancesMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesMetadata";
    encode(message: DeleteInstancesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstancesMetadata;
    fromJSON(object: any): DeleteInstancesMetadata;
    toJSON(message: DeleteInstancesMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteInstancesMetadata>): DeleteInstancesMetadata;
};
export declare const StopInstancesMetadata: {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesMetadata";
    encode(message: StopInstancesMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstancesMetadata;
    fromJSON(object: any): StopInstancesMetadata;
    toJSON(message: StopInstancesMetadata): unknown;
    fromPartial(object: DeepPartial<StopInstancesMetadata>): StopInstancesMetadata;
};
export declare const ListInstanceGroupsRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest";
    encode(message: ListInstanceGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupsRequest;
    fromJSON(object: any): ListInstanceGroupsRequest;
    toJSON(message: ListInstanceGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListInstanceGroupsRequest>): ListInstanceGroupsRequest;
};
export declare const ListInstanceGroupsResponse: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse";
    encode(message: ListInstanceGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupsResponse;
    fromJSON(object: any): ListInstanceGroupsResponse;
    toJSON(message: ListInstanceGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListInstanceGroupsResponse>): ListInstanceGroupsResponse;
};
export declare const ListInstanceGroupInstancesRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest";
    encode(message: ListInstanceGroupInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupInstancesRequest;
    fromJSON(object: any): ListInstanceGroupInstancesRequest;
    toJSON(message: ListInstanceGroupInstancesRequest): unknown;
    fromPartial(object: DeepPartial<ListInstanceGroupInstancesRequest>): ListInstanceGroupInstancesRequest;
};
export declare const ListInstanceGroupInstancesResponse: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse";
    encode(message: ListInstanceGroupInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupInstancesResponse;
    fromJSON(object: any): ListInstanceGroupInstancesResponse;
    toJSON(message: ListInstanceGroupInstancesResponse): unknown;
    fromPartial(object: DeepPartial<ListInstanceGroupInstancesResponse>): ListInstanceGroupInstancesResponse;
};
export declare const DeleteInstancesRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest";
    encode(message: DeleteInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstancesRequest;
    fromJSON(object: any): DeleteInstancesRequest;
    toJSON(message: DeleteInstancesRequest): unknown;
    fromPartial(object: DeepPartial<DeleteInstancesRequest>): DeleteInstancesRequest;
};
export declare const StopInstancesRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.StopInstancesRequest";
    encode(message: StopInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstancesRequest;
    fromJSON(object: any): StopInstancesRequest;
    toJSON(message: StopInstancesRequest): unknown;
    fromPartial(object: DeepPartial<StopInstancesRequest>): StopInstancesRequest;
};
export declare const ListInstanceGroupOperationsRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest";
    encode(message: ListInstanceGroupOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupOperationsRequest;
    fromJSON(object: any): ListInstanceGroupOperationsRequest;
    toJSON(message: ListInstanceGroupOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListInstanceGroupOperationsRequest>): ListInstanceGroupOperationsRequest;
};
export declare const ListInstanceGroupOperationsResponse: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse";
    encode(message: ListInstanceGroupOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupOperationsResponse;
    fromJSON(object: any): ListInstanceGroupOperationsResponse;
    toJSON(message: ListInstanceGroupOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListInstanceGroupOperationsResponse>): ListInstanceGroupOperationsResponse;
};
export declare const ListInstanceGroupLogRecordsRequest: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest";
    encode(message: ListInstanceGroupLogRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupLogRecordsRequest;
    fromJSON(object: any): ListInstanceGroupLogRecordsRequest;
    toJSON(message: ListInstanceGroupLogRecordsRequest): unknown;
    fromPartial(object: DeepPartial<ListInstanceGroupLogRecordsRequest>): ListInstanceGroupLogRecordsRequest;
};
export declare const ListInstanceGroupLogRecordsResponse: {
    $type: "yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse";
    encode(message: ListInstanceGroupLogRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceGroupLogRecordsResponse;
    fromJSON(object: any): ListInstanceGroupLogRecordsResponse;
    toJSON(message: ListInstanceGroupLogRecordsResponse): unknown;
    fromPartial(object: DeepPartial<ListInstanceGroupLogRecordsResponse>): ListInstanceGroupLogRecordsResponse;
};
/** A set of methods for managing InstanceGroup resources. */
export declare const InstanceGroupServiceService: {
    /**
     * Returns the specified InstanceGroup resource.
     *
     * To get the list of available InstanceGroup resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetInstanceGroupRequest;
        readonly responseSerialize: (value: InstanceGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => InstanceGroup;
    };
    /** Retrieves the list of InstanceGroup resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstanceGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstanceGroupsRequest;
        readonly responseSerialize: (value: ListInstanceGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstanceGroupsResponse;
    };
    /**
     * Creates an instance group in the specified folder.
     * This method starts an operation that can be cancelled by another operation.
     */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateInstanceGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Creates an instance group in the specified folder from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    readonly createFromYaml: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/CreateFromYaml";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateInstanceGroupFromYamlRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateInstanceGroupFromYamlRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified instance group.
     * This method starts an operation that can be cancelled by another operation.
     */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateInstanceGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified instance group from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    readonly updateFromYaml: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateFromYaml";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateInstanceGroupFromYamlRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateInstanceGroupFromYamlRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified instance group. */
    readonly stop: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopInstanceGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified instance group. */
    readonly start: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartInstanceGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified instance group. */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteInstanceGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteInstanceGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists instances for the specified instance group. */
    readonly listInstances: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListInstances";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstanceGroupInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstanceGroupInstancesRequest;
        readonly responseSerialize: (value: ListInstanceGroupInstancesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstanceGroupInstancesResponse;
    };
    /** Delete instances from the instance group. */
    readonly deleteInstances: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/DeleteInstances";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteInstancesRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stop instances from the instance group. */
    readonly stopInstances: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/StopInstances";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopInstancesRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified instance group. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstanceGroupOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstanceGroupOperationsRequest;
        readonly responseSerialize: (value: ListInstanceGroupOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstanceGroupOperationsResponse;
    };
    /** Lists logs for the specified instance group. */
    readonly listLogRecords: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListLogRecords";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstanceGroupLogRecordsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstanceGroupLogRecordsRequest;
        readonly responseSerialize: (value: ListInstanceGroupLogRecordsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstanceGroupLogRecordsResponse;
    };
    /** Lists existing access bindings for the specified instance group. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified instance group. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified instance group. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Resumes all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them.
     */
    readonly resumeProcesses: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ResumeProcesses";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ResumeInstanceGroupProcessesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ResumeInstanceGroupProcessesRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Pauses all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
     */
    readonly pauseProcesses: {
        readonly path: "/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/PauseProcesses";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PauseInstanceGroupProcessesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PauseInstanceGroupProcessesRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface InstanceGroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified InstanceGroup resource.
     *
     * To get the list of available InstanceGroup resources, make a [List] request.
     */
    get: handleUnaryCall<GetInstanceGroupRequest, InstanceGroup>;
    /** Retrieves the list of InstanceGroup resources in the specified folder. */
    list: handleUnaryCall<ListInstanceGroupsRequest, ListInstanceGroupsResponse>;
    /**
     * Creates an instance group in the specified folder.
     * This method starts an operation that can be cancelled by another operation.
     */
    create: handleUnaryCall<CreateInstanceGroupRequest, Operation>;
    /**
     * Creates an instance group in the specified folder from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    createFromYaml: handleUnaryCall<CreateInstanceGroupFromYamlRequest, Operation>;
    /**
     * Updates the specified instance group.
     * This method starts an operation that can be cancelled by another operation.
     */
    update: handleUnaryCall<UpdateInstanceGroupRequest, Operation>;
    /**
     * Updates the specified instance group from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    updateFromYaml: handleUnaryCall<UpdateInstanceGroupFromYamlRequest, Operation>;
    /** Stops the specified instance group. */
    stop: handleUnaryCall<StopInstanceGroupRequest, Operation>;
    /** Starts the specified instance group. */
    start: handleUnaryCall<StartInstanceGroupRequest, Operation>;
    /** Deletes the specified instance group. */
    delete: handleUnaryCall<DeleteInstanceGroupRequest, Operation>;
    /** Lists instances for the specified instance group. */
    listInstances: handleUnaryCall<ListInstanceGroupInstancesRequest, ListInstanceGroupInstancesResponse>;
    /** Delete instances from the instance group. */
    deleteInstances: handleUnaryCall<DeleteInstancesRequest, Operation>;
    /** Stop instances from the instance group. */
    stopInstances: handleUnaryCall<StopInstancesRequest, Operation>;
    /** Lists operations for the specified instance group. */
    listOperations: handleUnaryCall<ListInstanceGroupOperationsRequest, ListInstanceGroupOperationsResponse>;
    /** Lists logs for the specified instance group. */
    listLogRecords: handleUnaryCall<ListInstanceGroupLogRecordsRequest, ListInstanceGroupLogRecordsResponse>;
    /** Lists existing access bindings for the specified instance group. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified instance group. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified instance group. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /**
     * Resumes all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them.
     */
    resumeProcesses: handleUnaryCall<ResumeInstanceGroupProcessesRequest, Operation>;
    /**
     * Pauses all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
     */
    pauseProcesses: handleUnaryCall<PauseInstanceGroupProcessesRequest, Operation>;
}
export interface InstanceGroupServiceClient extends Client {
    /**
     * Returns the specified InstanceGroup resource.
     *
     * To get the list of available InstanceGroup resources, make a [List] request.
     */
    get(request: GetInstanceGroupRequest, callback: (error: ServiceError | null, response: InstanceGroup) => void): ClientUnaryCall;
    get(request: GetInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: InstanceGroup) => void): ClientUnaryCall;
    get(request: GetInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: InstanceGroup) => void): ClientUnaryCall;
    /** Retrieves the list of InstanceGroup resources in the specified folder. */
    list(request: ListInstanceGroupsRequest, callback: (error: ServiceError | null, response: ListInstanceGroupsResponse) => void): ClientUnaryCall;
    list(request: ListInstanceGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstanceGroupsResponse) => void): ClientUnaryCall;
    list(request: ListInstanceGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstanceGroupsResponse) => void): ClientUnaryCall;
    /**
     * Creates an instance group in the specified folder.
     * This method starts an operation that can be cancelled by another operation.
     */
    create(request: CreateInstanceGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Creates an instance group in the specified folder from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    createFromYaml(request: CreateInstanceGroupFromYamlRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createFromYaml(request: CreateInstanceGroupFromYamlRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createFromYaml(request: CreateInstanceGroupFromYamlRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified instance group.
     * This method starts an operation that can be cancelled by another operation.
     */
    update(request: UpdateInstanceGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified instance group from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    updateFromYaml(request: UpdateInstanceGroupFromYamlRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateFromYaml(request: UpdateInstanceGroupFromYamlRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateFromYaml(request: UpdateInstanceGroupFromYamlRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified instance group. */
    stop(request: StopInstanceGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified instance group. */
    start(request: StartInstanceGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified instance group. */
    delete(request: DeleteInstanceGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteInstanceGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteInstanceGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists instances for the specified instance group. */
    listInstances(request: ListInstanceGroupInstancesRequest, callback: (error: ServiceError | null, response: ListInstanceGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListInstanceGroupInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstanceGroupInstancesResponse) => void): ClientUnaryCall;
    listInstances(request: ListInstanceGroupInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstanceGroupInstancesResponse) => void): ClientUnaryCall;
    /** Delete instances from the instance group. */
    deleteInstances(request: DeleteInstancesRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteInstances(request: DeleteInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteInstances(request: DeleteInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stop instances from the instance group. */
    stopInstances(request: StopInstancesRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stopInstances(request: StopInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stopInstances(request: StopInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified instance group. */
    listOperations(request: ListInstanceGroupOperationsRequest, callback: (error: ServiceError | null, response: ListInstanceGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListInstanceGroupOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstanceGroupOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListInstanceGroupOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstanceGroupOperationsResponse) => void): ClientUnaryCall;
    /** Lists logs for the specified instance group. */
    listLogRecords(request: ListInstanceGroupLogRecordsRequest, callback: (error: ServiceError | null, response: ListInstanceGroupLogRecordsResponse) => void): ClientUnaryCall;
    listLogRecords(request: ListInstanceGroupLogRecordsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstanceGroupLogRecordsResponse) => void): ClientUnaryCall;
    listLogRecords(request: ListInstanceGroupLogRecordsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstanceGroupLogRecordsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified instance group. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified instance group. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified instance group. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Resumes all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them.
     */
    resumeProcesses(request: ResumeInstanceGroupProcessesRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resumeProcesses(request: ResumeInstanceGroupProcessesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resumeProcesses(request: ResumeInstanceGroupProcessesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Pauses all processes regarding management of the specified instance group,
     * i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
     */
    pauseProcesses(request: PauseInstanceGroupProcessesRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pauseProcesses(request: PauseInstanceGroupProcessesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pauseProcesses(request: PauseInstanceGroupProcessesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const InstanceGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => InstanceGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
