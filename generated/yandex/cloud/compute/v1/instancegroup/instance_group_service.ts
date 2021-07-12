/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../../yandex/cloud/access/access';
import {
    InstanceTemplate,
    ScalePolicy,
    DeployPolicy,
    AllocationPolicy,
    LoadBalancerSpec,
    HealthChecksSpec,
    Variable,
    ApplicationLoadBalancerSpec,
    InstanceGroup,
    ManagedInstance,
    LogRecord,
} from '../../../../../yandex/cloud/compute/v1/instancegroup/instance_group';
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

export const protobufPackage = 'yandex.cloud.compute.v1.instancegroup';

export enum InstanceGroupView {
    /** BASIC - Doesn't include the metadata of the instance template in the server response. */
    BASIC = 0,
    /** FULL - Returns the metadata of the instance template in the server response. */
    FULL = 1,
    UNRECOGNIZED = -1,
}

export function instanceGroupViewFromJSON(object: any): InstanceGroupView {
    switch (object) {
        case 0:
        case 'BASIC':
            return InstanceGroupView.BASIC;
        case 1:
        case 'FULL':
            return InstanceGroupView.FULL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return InstanceGroupView.UNRECOGNIZED;
    }
}

export function instanceGroupViewToJSON(object: InstanceGroupView): string {
    switch (object) {
        case InstanceGroupView.BASIC:
            return 'BASIC';
        case InstanceGroupView.FULL:
            return 'FULL';
        default:
            return 'UNKNOWN';
    }
}

export interface ResumeInstanceGroupProcessesRequest {
    instanceGroupId: string;
}

export interface ResumeInstanceGroupProcessMetadata {
    instanceGroupId: string;
}

export interface PauseInstanceGroupProcessesRequest {
    instanceGroupId: string;
}

export interface PauseInstanceGroupProcessMetadata {
    instanceGroupId: string;
}

export interface GetInstanceGroupRequest {
    /**
     * ID of the InstanceGroup resource to return.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /** Defines which information about the Instance template should be returned in the server response. */
    view: InstanceGroupView;
}

export interface CreateInstanceGroupRequest {
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
    labels: { [key: string]: string };
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
    key: string;
    value: string;
}

export interface CreateInstanceGroupFromYamlRequest {
    /**
     * ID of the folder to create an instance group in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** [InstanceGroupService.Create] request in YAML format. */
    instanceGroupYaml: string;
}

export interface CreateInstanceGroupMetadata {
    /** ID of the instance group that is being created. */
    instanceGroupId: string;
}

export interface UpdateInstanceGroupRequest {
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
    labels: { [key: string]: string };
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
    key: string;
    value: string;
}

export interface UpdateInstanceGroupFromYamlRequest {
    /**
     * ID of the instance group to update.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
    /** [InstanceGroupService.Update] request in YAML format. */
    instanceGroupYaml: string;
}

export interface UpdateInstanceGroupMetadata {
    /**
     * ID of the InstanceGroup resource that is being updated.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}

export interface StartInstanceGroupRequest {
    /**
     * ID of the instance group to start.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}

export interface StartInstanceGroupMetadata {
    /** ID of the InstanceGroup resource that is being started. */
    instanceGroupId: string;
}

export interface StopInstanceGroupRequest {
    /**
     * ID of the instance group to stop.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}

export interface StopInstanceGroupMetadata {
    /** ID of the InstanceGroup resource that is being stopped. */
    instanceGroupId: string;
}

export interface DeleteInstanceGroupRequest {
    /**
     * ID of the instance group to delete.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}

export interface DeleteInstanceGroupMetadata {
    /**
     * ID of the instance group that is being deleted.
     * To get the instance group ID, use a [InstanceGroupService.List] request.
     */
    instanceGroupId: string;
}

export interface DeleteInstancesMetadata {
    /** ID of the instance group that the instances are being deleted from. */
    instanceGroupId: string;
}

export interface StopInstancesMetadata {
    /** ID of the instance group that the instances are being stopped from. */
    instanceGroupId: string;
}

export interface ListInstanceGroupsRequest {
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
     * Currently you can use filtering only on the [InstanceGroup.name] field.
     */
    filter: string;
}

export interface ListInstanceGroupInstancesResponse {
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

const baseResumeInstanceGroupProcessesRequest: object = { instanceGroupId: '' };

export const ResumeInstanceGroupProcessesRequest = {
    encode(
        message: ResumeInstanceGroupProcessesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResumeInstanceGroupProcessesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResumeInstanceGroupProcessesRequest,
        } as ResumeInstanceGroupProcessesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResumeInstanceGroupProcessesRequest {
        const message = {
            ...baseResumeInstanceGroupProcessesRequest,
        } as ResumeInstanceGroupProcessesRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: ResumeInstanceGroupProcessesRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResumeInstanceGroupProcessesRequest>
    ): ResumeInstanceGroupProcessesRequest {
        const message = {
            ...baseResumeInstanceGroupProcessesRequest,
        } as ResumeInstanceGroupProcessesRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseResumeInstanceGroupProcessMetadata: object = { instanceGroupId: '' };

export const ResumeInstanceGroupProcessMetadata = {
    encode(
        message: ResumeInstanceGroupProcessMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ResumeInstanceGroupProcessMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResumeInstanceGroupProcessMetadata,
        } as ResumeInstanceGroupProcessMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResumeInstanceGroupProcessMetadata {
        const message = {
            ...baseResumeInstanceGroupProcessMetadata,
        } as ResumeInstanceGroupProcessMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: ResumeInstanceGroupProcessMetadata): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ResumeInstanceGroupProcessMetadata>
    ): ResumeInstanceGroupProcessMetadata {
        const message = {
            ...baseResumeInstanceGroupProcessMetadata,
        } as ResumeInstanceGroupProcessMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const basePauseInstanceGroupProcessesRequest: object = { instanceGroupId: '' };

export const PauseInstanceGroupProcessesRequest = {
    encode(
        message: PauseInstanceGroupProcessesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PauseInstanceGroupProcessesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePauseInstanceGroupProcessesRequest,
        } as PauseInstanceGroupProcessesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PauseInstanceGroupProcessesRequest {
        const message = {
            ...basePauseInstanceGroupProcessesRequest,
        } as PauseInstanceGroupProcessesRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: PauseInstanceGroupProcessesRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<PauseInstanceGroupProcessesRequest>
    ): PauseInstanceGroupProcessesRequest {
        const message = {
            ...basePauseInstanceGroupProcessesRequest,
        } as PauseInstanceGroupProcessesRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const basePauseInstanceGroupProcessMetadata: object = { instanceGroupId: '' };

export const PauseInstanceGroupProcessMetadata = {
    encode(
        message: PauseInstanceGroupProcessMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PauseInstanceGroupProcessMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePauseInstanceGroupProcessMetadata,
        } as PauseInstanceGroupProcessMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PauseInstanceGroupProcessMetadata {
        const message = {
            ...basePauseInstanceGroupProcessMetadata,
        } as PauseInstanceGroupProcessMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: PauseInstanceGroupProcessMetadata): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<PauseInstanceGroupProcessMetadata>
    ): PauseInstanceGroupProcessMetadata {
        const message = {
            ...basePauseInstanceGroupProcessMetadata,
        } as PauseInstanceGroupProcessMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseGetInstanceGroupRequest: object = { instanceGroupId: '', view: 0 };

export const GetInstanceGroupRequest = {
    encode(
        message: GetInstanceGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        if (message.view !== 0) {
            writer.uint32(16).int32(message.view);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetInstanceGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetInstanceGroupRequest,
        } as GetInstanceGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.view = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetInstanceGroupRequest {
        const message = {
            ...baseGetInstanceGroupRequest,
        } as GetInstanceGroupRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        if (object.view !== undefined && object.view !== null) {
            message.view = instanceGroupViewFromJSON(object.view);
        } else {
            message.view = 0;
        }
        return message;
    },

    toJSON(message: GetInstanceGroupRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.view !== undefined &&
            (obj.view = instanceGroupViewToJSON(message.view));
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetInstanceGroupRequest>
    ): GetInstanceGroupRequest {
        const message = {
            ...baseGetInstanceGroupRequest,
        } as GetInstanceGroupRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        if (object.view !== undefined && object.view !== null) {
            message.view = object.view;
        } else {
            message.view = 0;
        }
        return message;
    },
};

const baseCreateInstanceGroupRequest: object = {
    folderId: '',
    name: '',
    description: '',
    serviceAccountId: '',
    deletionProtection: false,
};

export const CreateInstanceGroupRequest = {
    encode(
        message: CreateInstanceGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateInstanceGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.instanceTemplate !== undefined) {
            InstanceTemplate.encode(
                message.instanceTemplate,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(
                message.scalePolicy,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            DeployPolicy.encode(
                message.deployPolicy,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            AllocationPolicy.encode(
                message.allocationPolicy,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.loadBalancerSpec !== undefined) {
            LoadBalancerSpec.encode(
                message.loadBalancerSpec,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.healthChecksSpec !== undefined) {
            HealthChecksSpec.encode(
                message.healthChecksSpec,
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(98).string(message.serviceAccountId);
        }
        for (const v of message.variables) {
            Variable.encode(v!, writer.uint32(106).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(112).bool(message.deletionProtection);
        }
        if (message.applicationLoadBalancerSpec !== undefined) {
            ApplicationLoadBalancerSpec.encode(
                message.applicationLoadBalancerSpec,
                writer.uint32(122).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateInstanceGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceGroupRequest,
        } as CreateInstanceGroupRequest;
        message.labels = {};
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 =
                        CreateInstanceGroupRequest_LabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.instanceTemplate = InstanceTemplate.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.scalePolicy = ScalePolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.deployPolicy = DeployPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.allocationPolicy = AllocationPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 10:
                    message.loadBalancerSpec = LoadBalancerSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.healthChecksSpec = HealthChecksSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 12:
                    message.serviceAccountId = reader.string();
                    break;
                case 13:
                    message.variables.push(
                        Variable.decode(reader, reader.uint32())
                    );
                    break;
                case 14:
                    message.deletionProtection = reader.bool();
                    break;
                case 15:
                    message.applicationLoadBalancerSpec =
                        ApplicationLoadBalancerSpec.decode(
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

    fromJSON(object: any): CreateInstanceGroupRequest {
        const message = {
            ...baseCreateInstanceGroupRequest,
        } as CreateInstanceGroupRequest;
        message.labels = {};
        message.variables = [];
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
        if (
            object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null
        ) {
            message.instanceTemplate = InstanceTemplate.fromJSON(
                object.instanceTemplate
            );
        } else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromJSON(object.deployPolicy);
        } else {
            message.deployPolicy = undefined;
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromJSON(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (
            object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null
        ) {
            message.loadBalancerSpec = LoadBalancerSpec.fromJSON(
                object.loadBalancerSpec
            );
        } else {
            message.loadBalancerSpec = undefined;
        }
        if (
            object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null
        ) {
            message.healthChecksSpec = HealthChecksSpec.fromJSON(
                object.healthChecksSpec
            );
        } else {
            message.healthChecksSpec = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(Variable.fromJSON(e));
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
        if (
            object.applicationLoadBalancerSpec !== undefined &&
            object.applicationLoadBalancerSpec !== null
        ) {
            message.applicationLoadBalancerSpec =
                ApplicationLoadBalancerSpec.fromJSON(
                    object.applicationLoadBalancerSpec
                );
        } else {
            message.applicationLoadBalancerSpec = undefined;
        }
        return message;
    },

    toJSON(message: CreateInstanceGroupRequest): unknown {
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
        message.instanceTemplate !== undefined &&
            (obj.instanceTemplate = message.instanceTemplate
                ? InstanceTemplate.toJSON(message.instanceTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.loadBalancerSpec !== undefined &&
            (obj.loadBalancerSpec = message.loadBalancerSpec
                ? LoadBalancerSpec.toJSON(message.loadBalancerSpec)
                : undefined);
        message.healthChecksSpec !== undefined &&
            (obj.healthChecksSpec = message.healthChecksSpec
                ? HealthChecksSpec.toJSON(message.healthChecksSpec)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        if (message.variables) {
            obj.variables = message.variables.map((e) =>
                e ? Variable.toJSON(e) : undefined
            );
        } else {
            obj.variables = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.applicationLoadBalancerSpec !== undefined &&
            (obj.applicationLoadBalancerSpec =
                message.applicationLoadBalancerSpec
                    ? ApplicationLoadBalancerSpec.toJSON(
                          message.applicationLoadBalancerSpec
                      )
                    : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateInstanceGroupRequest>
    ): CreateInstanceGroupRequest {
        const message = {
            ...baseCreateInstanceGroupRequest,
        } as CreateInstanceGroupRequest;
        message.labels = {};
        message.variables = [];
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
        if (
            object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null
        ) {
            message.instanceTemplate = InstanceTemplate.fromPartial(
                object.instanceTemplate
            );
        } else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromPartial(
                object.deployPolicy
            );
        } else {
            message.deployPolicy = undefined;
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromPartial(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (
            object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null
        ) {
            message.loadBalancerSpec = LoadBalancerSpec.fromPartial(
                object.loadBalancerSpec
            );
        } else {
            message.loadBalancerSpec = undefined;
        }
        if (
            object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null
        ) {
            message.healthChecksSpec = HealthChecksSpec.fromPartial(
                object.healthChecksSpec
            );
        } else {
            message.healthChecksSpec = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(Variable.fromPartial(e));
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
        if (
            object.applicationLoadBalancerSpec !== undefined &&
            object.applicationLoadBalancerSpec !== null
        ) {
            message.applicationLoadBalancerSpec =
                ApplicationLoadBalancerSpec.fromPartial(
                    object.applicationLoadBalancerSpec
                );
        } else {
            message.applicationLoadBalancerSpec = undefined;
        }
        return message;
    },
};

const baseCreateInstanceGroupRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const CreateInstanceGroupRequest_LabelsEntry = {
    encode(
        message: CreateInstanceGroupRequest_LabelsEntry,
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
    ): CreateInstanceGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceGroupRequest_LabelsEntry,
        } as CreateInstanceGroupRequest_LabelsEntry;
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

    fromJSON(object: any): CreateInstanceGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateInstanceGroupRequest_LabelsEntry,
        } as CreateInstanceGroupRequest_LabelsEntry;
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

    toJSON(message: CreateInstanceGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateInstanceGroupRequest_LabelsEntry>
    ): CreateInstanceGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateInstanceGroupRequest_LabelsEntry,
        } as CreateInstanceGroupRequest_LabelsEntry;
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

const baseCreateInstanceGroupFromYamlRequest: object = {
    folderId: '',
    instanceGroupYaml: '',
};

export const CreateInstanceGroupFromYamlRequest = {
    encode(
        message: CreateInstanceGroupFromYamlRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.instanceGroupYaml !== '') {
            writer.uint32(18).string(message.instanceGroupYaml);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateInstanceGroupFromYamlRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceGroupFromYamlRequest,
        } as CreateInstanceGroupFromYamlRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.instanceGroupYaml = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateInstanceGroupFromYamlRequest {
        const message = {
            ...baseCreateInstanceGroupFromYamlRequest,
        } as CreateInstanceGroupFromYamlRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (
            object.instanceGroupYaml !== undefined &&
            object.instanceGroupYaml !== null
        ) {
            message.instanceGroupYaml = String(object.instanceGroupYaml);
        } else {
            message.instanceGroupYaml = '';
        }
        return message;
    },

    toJSON(message: CreateInstanceGroupFromYamlRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.instanceGroupYaml !== undefined &&
            (obj.instanceGroupYaml = message.instanceGroupYaml);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateInstanceGroupFromYamlRequest>
    ): CreateInstanceGroupFromYamlRequest {
        const message = {
            ...baseCreateInstanceGroupFromYamlRequest,
        } as CreateInstanceGroupFromYamlRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (
            object.instanceGroupYaml !== undefined &&
            object.instanceGroupYaml !== null
        ) {
            message.instanceGroupYaml = object.instanceGroupYaml;
        } else {
            message.instanceGroupYaml = '';
        }
        return message;
    },
};

const baseCreateInstanceGroupMetadata: object = { instanceGroupId: '' };

export const CreateInstanceGroupMetadata = {
    encode(
        message: CreateInstanceGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateInstanceGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateInstanceGroupMetadata,
        } as CreateInstanceGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateInstanceGroupMetadata {
        const message = {
            ...baseCreateInstanceGroupMetadata,
        } as CreateInstanceGroupMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: CreateInstanceGroupMetadata): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateInstanceGroupMetadata>
    ): CreateInstanceGroupMetadata {
        const message = {
            ...baseCreateInstanceGroupMetadata,
        } as CreateInstanceGroupMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseUpdateInstanceGroupRequest: object = {
    instanceGroupId: '',
    name: '',
    description: '',
    serviceAccountId: '',
    deletionProtection: false,
};

export const UpdateInstanceGroupRequest = {
    encode(
        message: UpdateInstanceGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
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
            UpdateInstanceGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.instanceTemplate !== undefined) {
            InstanceTemplate.encode(
                message.instanceTemplate,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(
                message.scalePolicy,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            DeployPolicy.encode(
                message.deployPolicy,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            AllocationPolicy.encode(
                message.allocationPolicy,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.healthChecksSpec !== undefined) {
            HealthChecksSpec.encode(
                message.healthChecksSpec,
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(98).string(message.serviceAccountId);
        }
        if (message.loadBalancerSpec !== undefined) {
            LoadBalancerSpec.encode(
                message.loadBalancerSpec,
                writer.uint32(114).fork()
            ).ldelim();
        }
        for (const v of message.variables) {
            Variable.encode(v!, writer.uint32(122).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(128).bool(message.deletionProtection);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateInstanceGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceGroupRequest,
        } as UpdateInstanceGroupRequest;
        message.labels = {};
        message.variables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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
                    const entry5 =
                        UpdateInstanceGroupRequest_LabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.instanceTemplate = InstanceTemplate.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.scalePolicy = ScalePolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.deployPolicy = DeployPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.allocationPolicy = AllocationPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.healthChecksSpec = HealthChecksSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 12:
                    message.serviceAccountId = reader.string();
                    break;
                case 14:
                    message.loadBalancerSpec = LoadBalancerSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 15:
                    message.variables.push(
                        Variable.decode(reader, reader.uint32())
                    );
                    break;
                case 16:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateInstanceGroupRequest {
        const message = {
            ...baseUpdateInstanceGroupRequest,
        } as UpdateInstanceGroupRequest;
        message.labels = {};
        message.variables = [];
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
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
        if (
            object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null
        ) {
            message.instanceTemplate = InstanceTemplate.fromJSON(
                object.instanceTemplate
            );
        } else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromJSON(object.deployPolicy);
        } else {
            message.deployPolicy = undefined;
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromJSON(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (
            object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null
        ) {
            message.healthChecksSpec = HealthChecksSpec.fromJSON(
                object.healthChecksSpec
            );
        } else {
            message.healthChecksSpec = undefined;
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
            object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null
        ) {
            message.loadBalancerSpec = LoadBalancerSpec.fromJSON(
                object.loadBalancerSpec
            );
        } else {
            message.loadBalancerSpec = undefined;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(Variable.fromJSON(e));
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
        return message;
    },

    toJSON(message: UpdateInstanceGroupRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
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
        message.instanceTemplate !== undefined &&
            (obj.instanceTemplate = message.instanceTemplate
                ? InstanceTemplate.toJSON(message.instanceTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.healthChecksSpec !== undefined &&
            (obj.healthChecksSpec = message.healthChecksSpec
                ? HealthChecksSpec.toJSON(message.healthChecksSpec)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.loadBalancerSpec !== undefined &&
            (obj.loadBalancerSpec = message.loadBalancerSpec
                ? LoadBalancerSpec.toJSON(message.loadBalancerSpec)
                : undefined);
        if (message.variables) {
            obj.variables = message.variables.map((e) =>
                e ? Variable.toJSON(e) : undefined
            );
        } else {
            obj.variables = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceGroupRequest>
    ): UpdateInstanceGroupRequest {
        const message = {
            ...baseUpdateInstanceGroupRequest,
        } as UpdateInstanceGroupRequest;
        message.labels = {};
        message.variables = [];
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
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
        if (
            object.instanceTemplate !== undefined &&
            object.instanceTemplate !== null
        ) {
            message.instanceTemplate = InstanceTemplate.fromPartial(
                object.instanceTemplate
            );
        } else {
            message.instanceTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        } else {
            message.scalePolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromPartial(
                object.deployPolicy
            );
        } else {
            message.deployPolicy = undefined;
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromPartial(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (
            object.healthChecksSpec !== undefined &&
            object.healthChecksSpec !== null
        ) {
            message.healthChecksSpec = HealthChecksSpec.fromPartial(
                object.healthChecksSpec
            );
        } else {
            message.healthChecksSpec = undefined;
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
            object.loadBalancerSpec !== undefined &&
            object.loadBalancerSpec !== null
        ) {
            message.loadBalancerSpec = LoadBalancerSpec.fromPartial(
                object.loadBalancerSpec
            );
        } else {
            message.loadBalancerSpec = undefined;
        }
        if (object.variables !== undefined && object.variables !== null) {
            for (const e of object.variables) {
                message.variables.push(Variable.fromPartial(e));
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
        return message;
    },
};

const baseUpdateInstanceGroupRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const UpdateInstanceGroupRequest_LabelsEntry = {
    encode(
        message: UpdateInstanceGroupRequest_LabelsEntry,
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
    ): UpdateInstanceGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceGroupRequest_LabelsEntry,
        } as UpdateInstanceGroupRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateInstanceGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateInstanceGroupRequest_LabelsEntry,
        } as UpdateInstanceGroupRequest_LabelsEntry;
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

    toJSON(message: UpdateInstanceGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceGroupRequest_LabelsEntry>
    ): UpdateInstanceGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateInstanceGroupRequest_LabelsEntry,
        } as UpdateInstanceGroupRequest_LabelsEntry;
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

const baseUpdateInstanceGroupFromYamlRequest: object = {
    instanceGroupId: '',
    instanceGroupYaml: '',
};

export const UpdateInstanceGroupFromYamlRequest = {
    encode(
        message: UpdateInstanceGroupFromYamlRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        if (message.instanceGroupYaml !== '') {
            writer.uint32(18).string(message.instanceGroupYaml);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateInstanceGroupFromYamlRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceGroupFromYamlRequest,
        } as UpdateInstanceGroupFromYamlRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.instanceGroupYaml = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateInstanceGroupFromYamlRequest {
        const message = {
            ...baseUpdateInstanceGroupFromYamlRequest,
        } as UpdateInstanceGroupFromYamlRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        if (
            object.instanceGroupYaml !== undefined &&
            object.instanceGroupYaml !== null
        ) {
            message.instanceGroupYaml = String(object.instanceGroupYaml);
        } else {
            message.instanceGroupYaml = '';
        }
        return message;
    },

    toJSON(message: UpdateInstanceGroupFromYamlRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.instanceGroupYaml !== undefined &&
            (obj.instanceGroupYaml = message.instanceGroupYaml);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceGroupFromYamlRequest>
    ): UpdateInstanceGroupFromYamlRequest {
        const message = {
            ...baseUpdateInstanceGroupFromYamlRequest,
        } as UpdateInstanceGroupFromYamlRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        if (
            object.instanceGroupYaml !== undefined &&
            object.instanceGroupYaml !== null
        ) {
            message.instanceGroupYaml = object.instanceGroupYaml;
        } else {
            message.instanceGroupYaml = '';
        }
        return message;
    },
};

const baseUpdateInstanceGroupMetadata: object = { instanceGroupId: '' };

export const UpdateInstanceGroupMetadata = {
    encode(
        message: UpdateInstanceGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateInstanceGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateInstanceGroupMetadata,
        } as UpdateInstanceGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateInstanceGroupMetadata {
        const message = {
            ...baseUpdateInstanceGroupMetadata,
        } as UpdateInstanceGroupMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: UpdateInstanceGroupMetadata): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateInstanceGroupMetadata>
    ): UpdateInstanceGroupMetadata {
        const message = {
            ...baseUpdateInstanceGroupMetadata,
        } as UpdateInstanceGroupMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseStartInstanceGroupRequest: object = { instanceGroupId: '' };

export const StartInstanceGroupRequest = {
    encode(
        message: StartInstanceGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StartInstanceGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartInstanceGroupRequest,
        } as StartInstanceGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartInstanceGroupRequest {
        const message = {
            ...baseStartInstanceGroupRequest,
        } as StartInstanceGroupRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: StartInstanceGroupRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StartInstanceGroupRequest>
    ): StartInstanceGroupRequest {
        const message = {
            ...baseStartInstanceGroupRequest,
        } as StartInstanceGroupRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseStartInstanceGroupMetadata: object = { instanceGroupId: '' };

export const StartInstanceGroupMetadata = {
    encode(
        message: StartInstanceGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StartInstanceGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStartInstanceGroupMetadata,
        } as StartInstanceGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StartInstanceGroupMetadata {
        const message = {
            ...baseStartInstanceGroupMetadata,
        } as StartInstanceGroupMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: StartInstanceGroupMetadata): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StartInstanceGroupMetadata>
    ): StartInstanceGroupMetadata {
        const message = {
            ...baseStartInstanceGroupMetadata,
        } as StartInstanceGroupMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseStopInstanceGroupRequest: object = { instanceGroupId: '' };

export const StopInstanceGroupRequest = {
    encode(
        message: StopInstanceGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopInstanceGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopInstanceGroupRequest,
        } as StopInstanceGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopInstanceGroupRequest {
        const message = {
            ...baseStopInstanceGroupRequest,
        } as StopInstanceGroupRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: StopInstanceGroupRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StopInstanceGroupRequest>
    ): StopInstanceGroupRequest {
        const message = {
            ...baseStopInstanceGroupRequest,
        } as StopInstanceGroupRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseStopInstanceGroupMetadata: object = { instanceGroupId: '' };

export const StopInstanceGroupMetadata = {
    encode(
        message: StopInstanceGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopInstanceGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopInstanceGroupMetadata,
        } as StopInstanceGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopInstanceGroupMetadata {
        const message = {
            ...baseStopInstanceGroupMetadata,
        } as StopInstanceGroupMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: StopInstanceGroupMetadata): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StopInstanceGroupMetadata>
    ): StopInstanceGroupMetadata {
        const message = {
            ...baseStopInstanceGroupMetadata,
        } as StopInstanceGroupMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseDeleteInstanceGroupRequest: object = { instanceGroupId: '' };

export const DeleteInstanceGroupRequest = {
    encode(
        message: DeleteInstanceGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteInstanceGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstanceGroupRequest,
        } as DeleteInstanceGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteInstanceGroupRequest {
        const message = {
            ...baseDeleteInstanceGroupRequest,
        } as DeleteInstanceGroupRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteInstanceGroupRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteInstanceGroupRequest>
    ): DeleteInstanceGroupRequest {
        const message = {
            ...baseDeleteInstanceGroupRequest,
        } as DeleteInstanceGroupRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseDeleteInstanceGroupMetadata: object = { instanceGroupId: '' };

export const DeleteInstanceGroupMetadata = {
    encode(
        message: DeleteInstanceGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteInstanceGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstanceGroupMetadata,
        } as DeleteInstanceGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteInstanceGroupMetadata {
        const message = {
            ...baseDeleteInstanceGroupMetadata,
        } as DeleteInstanceGroupMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteInstanceGroupMetadata): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteInstanceGroupMetadata>
    ): DeleteInstanceGroupMetadata {
        const message = {
            ...baseDeleteInstanceGroupMetadata,
        } as DeleteInstanceGroupMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseDeleteInstancesMetadata: object = { instanceGroupId: '' };

export const DeleteInstancesMetadata = {
    encode(
        message: DeleteInstancesMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteInstancesMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstancesMetadata,
        } as DeleteInstancesMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteInstancesMetadata {
        const message = {
            ...baseDeleteInstancesMetadata,
        } as DeleteInstancesMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteInstancesMetadata): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteInstancesMetadata>
    ): DeleteInstancesMetadata {
        const message = {
            ...baseDeleteInstancesMetadata,
        } as DeleteInstancesMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseStopInstancesMetadata: object = { instanceGroupId: '' };

export const StopInstancesMetadata = {
    encode(
        message: StopInstancesMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopInstancesMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseStopInstancesMetadata,
        } as StopInstancesMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopInstancesMetadata {
        const message = {
            ...baseStopInstancesMetadata,
        } as StopInstancesMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: StopInstancesMetadata): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StopInstancesMetadata>
    ): StopInstancesMetadata {
        const message = {
            ...baseStopInstancesMetadata,
        } as StopInstancesMetadata;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseListInstanceGroupsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    view: 0,
};

export const ListInstanceGroupsRequest = {
    encode(
        message: ListInstanceGroupsRequest,
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
        if (message.view !== 0) {
            writer.uint32(40).int32(message.view);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListInstanceGroupsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceGroupsRequest,
        } as ListInstanceGroupsRequest;
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
                case 5:
                    message.view = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListInstanceGroupsRequest {
        const message = {
            ...baseListInstanceGroupsRequest,
        } as ListInstanceGroupsRequest;
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
        if (object.view !== undefined && object.view !== null) {
            message.view = instanceGroupViewFromJSON(object.view);
        } else {
            message.view = 0;
        }
        return message;
    },

    toJSON(message: ListInstanceGroupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.view !== undefined &&
            (obj.view = instanceGroupViewToJSON(message.view));
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListInstanceGroupsRequest>
    ): ListInstanceGroupsRequest {
        const message = {
            ...baseListInstanceGroupsRequest,
        } as ListInstanceGroupsRequest;
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
        if (object.view !== undefined && object.view !== null) {
            message.view = object.view;
        } else {
            message.view = 0;
        }
        return message;
    },
};

const baseListInstanceGroupsResponse: object = { nextPageToken: '' };

export const ListInstanceGroupsResponse = {
    encode(
        message: ListInstanceGroupsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.instanceGroups) {
            InstanceGroup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListInstanceGroupsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceGroupsResponse,
        } as ListInstanceGroupsResponse;
        message.instanceGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroups.push(
                        InstanceGroup.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListInstanceGroupsResponse {
        const message = {
            ...baseListInstanceGroupsResponse,
        } as ListInstanceGroupsResponse;
        message.instanceGroups = [];
        if (
            object.instanceGroups !== undefined &&
            object.instanceGroups !== null
        ) {
            for (const e of object.instanceGroups) {
                message.instanceGroups.push(InstanceGroup.fromJSON(e));
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

    toJSON(message: ListInstanceGroupsResponse): unknown {
        const obj: any = {};
        if (message.instanceGroups) {
            obj.instanceGroups = message.instanceGroups.map((e) =>
                e ? InstanceGroup.toJSON(e) : undefined
            );
        } else {
            obj.instanceGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListInstanceGroupsResponse>
    ): ListInstanceGroupsResponse {
        const message = {
            ...baseListInstanceGroupsResponse,
        } as ListInstanceGroupsResponse;
        message.instanceGroups = [];
        if (
            object.instanceGroups !== undefined &&
            object.instanceGroups !== null
        ) {
            for (const e of object.instanceGroups) {
                message.instanceGroups.push(InstanceGroup.fromPartial(e));
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

const baseListInstanceGroupInstancesRequest: object = {
    instanceGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListInstanceGroupInstancesRequest = {
    encode(
        message: ListInstanceGroupInstancesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
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
    ): ListInstanceGroupInstancesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceGroupInstancesRequest,
        } as ListInstanceGroupInstancesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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

    fromJSON(object: any): ListInstanceGroupInstancesRequest {
        const message = {
            ...baseListInstanceGroupInstancesRequest,
        } as ListInstanceGroupInstancesRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
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

    toJSON(message: ListInstanceGroupInstancesRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListInstanceGroupInstancesRequest>
    ): ListInstanceGroupInstancesRequest {
        const message = {
            ...baseListInstanceGroupInstancesRequest,
        } as ListInstanceGroupInstancesRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
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

const baseListInstanceGroupInstancesResponse: object = { nextPageToken: '' };

export const ListInstanceGroupInstancesResponse = {
    encode(
        message: ListInstanceGroupInstancesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.instances) {
            ManagedInstance.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListInstanceGroupInstancesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceGroupInstancesResponse,
        } as ListInstanceGroupInstancesResponse;
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(
                        ManagedInstance.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListInstanceGroupInstancesResponse {
        const message = {
            ...baseListInstanceGroupInstancesResponse,
        } as ListInstanceGroupInstancesResponse;
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(ManagedInstance.fromJSON(e));
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

    toJSON(message: ListInstanceGroupInstancesResponse): unknown {
        const obj: any = {};
        if (message.instances) {
            obj.instances = message.instances.map((e) =>
                e ? ManagedInstance.toJSON(e) : undefined
            );
        } else {
            obj.instances = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListInstanceGroupInstancesResponse>
    ): ListInstanceGroupInstancesResponse {
        const message = {
            ...baseListInstanceGroupInstancesResponse,
        } as ListInstanceGroupInstancesResponse;
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(ManagedInstance.fromPartial(e));
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

const baseDeleteInstancesRequest: object = {
    instanceGroupId: '',
    managedInstanceIds: '',
    createAnother: false,
};

export const DeleteInstancesRequest = {
    encode(
        message: DeleteInstancesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        for (const v of message.managedInstanceIds) {
            writer.uint32(18).string(v!);
        }
        if (message.createAnother === true) {
            writer.uint32(24).bool(message.createAnother);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteInstancesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteInstancesRequest,
        } as DeleteInstancesRequest;
        message.managedInstanceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.managedInstanceIds.push(reader.string());
                    break;
                case 3:
                    message.createAnother = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteInstancesRequest {
        const message = {
            ...baseDeleteInstancesRequest,
        } as DeleteInstancesRequest;
        message.managedInstanceIds = [];
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        if (
            object.managedInstanceIds !== undefined &&
            object.managedInstanceIds !== null
        ) {
            for (const e of object.managedInstanceIds) {
                message.managedInstanceIds.push(String(e));
            }
        }
        if (
            object.createAnother !== undefined &&
            object.createAnother !== null
        ) {
            message.createAnother = Boolean(object.createAnother);
        } else {
            message.createAnother = false;
        }
        return message;
    },

    toJSON(message: DeleteInstancesRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        if (message.managedInstanceIds) {
            obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
        } else {
            obj.managedInstanceIds = [];
        }
        message.createAnother !== undefined &&
            (obj.createAnother = message.createAnother);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteInstancesRequest>
    ): DeleteInstancesRequest {
        const message = {
            ...baseDeleteInstancesRequest,
        } as DeleteInstancesRequest;
        message.managedInstanceIds = [];
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        if (
            object.managedInstanceIds !== undefined &&
            object.managedInstanceIds !== null
        ) {
            for (const e of object.managedInstanceIds) {
                message.managedInstanceIds.push(e);
            }
        }
        if (
            object.createAnother !== undefined &&
            object.createAnother !== null
        ) {
            message.createAnother = object.createAnother;
        } else {
            message.createAnother = false;
        }
        return message;
    },
};

const baseStopInstancesRequest: object = {
    instanceGroupId: '',
    managedInstanceIds: '',
};

export const StopInstancesRequest = {
    encode(
        message: StopInstancesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
        }
        for (const v of message.managedInstanceIds) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StopInstancesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopInstancesRequest } as StopInstancesRequest;
        message.managedInstanceIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
                    break;
                case 2:
                    message.managedInstanceIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StopInstancesRequest {
        const message = { ...baseStopInstancesRequest } as StopInstancesRequest;
        message.managedInstanceIds = [];
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        if (
            object.managedInstanceIds !== undefined &&
            object.managedInstanceIds !== null
        ) {
            for (const e of object.managedInstanceIds) {
                message.managedInstanceIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: StopInstancesRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        if (message.managedInstanceIds) {
            obj.managedInstanceIds = message.managedInstanceIds.map((e) => e);
        } else {
            obj.managedInstanceIds = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<StopInstancesRequest>
    ): StopInstancesRequest {
        const message = { ...baseStopInstancesRequest } as StopInstancesRequest;
        message.managedInstanceIds = [];
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        if (
            object.managedInstanceIds !== undefined &&
            object.managedInstanceIds !== null
        ) {
            for (const e of object.managedInstanceIds) {
                message.managedInstanceIds.push(e);
            }
        }
        return message;
    },
};

const baseListInstanceGroupOperationsRequest: object = {
    instanceGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListInstanceGroupOperationsRequest = {
    encode(
        message: ListInstanceGroupOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
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
    ): ListInstanceGroupOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceGroupOperationsRequest,
        } as ListInstanceGroupOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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

    fromJSON(object: any): ListInstanceGroupOperationsRequest {
        const message = {
            ...baseListInstanceGroupOperationsRequest,
        } as ListInstanceGroupOperationsRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
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

    toJSON(message: ListInstanceGroupOperationsRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListInstanceGroupOperationsRequest>
    ): ListInstanceGroupOperationsRequest {
        const message = {
            ...baseListInstanceGroupOperationsRequest,
        } as ListInstanceGroupOperationsRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
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

const baseListInstanceGroupOperationsResponse: object = { nextPageToken: '' };

export const ListInstanceGroupOperationsResponse = {
    encode(
        message: ListInstanceGroupOperationsResponse,
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
    ): ListInstanceGroupOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceGroupOperationsResponse,
        } as ListInstanceGroupOperationsResponse;
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

    fromJSON(object: any): ListInstanceGroupOperationsResponse {
        const message = {
            ...baseListInstanceGroupOperationsResponse,
        } as ListInstanceGroupOperationsResponse;
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

    toJSON(message: ListInstanceGroupOperationsResponse): unknown {
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
        object: DeepPartial<ListInstanceGroupOperationsResponse>
    ): ListInstanceGroupOperationsResponse {
        const message = {
            ...baseListInstanceGroupOperationsResponse,
        } as ListInstanceGroupOperationsResponse;
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

const baseListInstanceGroupLogRecordsRequest: object = {
    instanceGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListInstanceGroupLogRecordsRequest = {
    encode(
        message: ListInstanceGroupLogRecordsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instanceGroupId !== '') {
            writer.uint32(10).string(message.instanceGroupId);
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
    ): ListInstanceGroupLogRecordsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceGroupLogRecordsRequest,
        } as ListInstanceGroupLogRecordsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceGroupId = reader.string();
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

    fromJSON(object: any): ListInstanceGroupLogRecordsRequest {
        const message = {
            ...baseListInstanceGroupLogRecordsRequest,
        } as ListInstanceGroupLogRecordsRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
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

    toJSON(message: ListInstanceGroupLogRecordsRequest): unknown {
        const obj: any = {};
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListInstanceGroupLogRecordsRequest>
    ): ListInstanceGroupLogRecordsRequest {
        const message = {
            ...baseListInstanceGroupLogRecordsRequest,
        } as ListInstanceGroupLogRecordsRequest;
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
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

const baseListInstanceGroupLogRecordsResponse: object = { nextPageToken: '' };

export const ListInstanceGroupLogRecordsResponse = {
    encode(
        message: ListInstanceGroupLogRecordsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.logRecords) {
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
    ): ListInstanceGroupLogRecordsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListInstanceGroupLogRecordsResponse,
        } as ListInstanceGroupLogRecordsResponse;
        message.logRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logRecords.push(
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

    fromJSON(object: any): ListInstanceGroupLogRecordsResponse {
        const message = {
            ...baseListInstanceGroupLogRecordsResponse,
        } as ListInstanceGroupLogRecordsResponse;
        message.logRecords = [];
        if (object.logRecords !== undefined && object.logRecords !== null) {
            for (const e of object.logRecords) {
                message.logRecords.push(LogRecord.fromJSON(e));
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

    toJSON(message: ListInstanceGroupLogRecordsResponse): unknown {
        const obj: any = {};
        if (message.logRecords) {
            obj.logRecords = message.logRecords.map((e) =>
                e ? LogRecord.toJSON(e) : undefined
            );
        } else {
            obj.logRecords = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListInstanceGroupLogRecordsResponse>
    ): ListInstanceGroupLogRecordsResponse {
        const message = {
            ...baseListInstanceGroupLogRecordsResponse,
        } as ListInstanceGroupLogRecordsResponse;
        message.logRecords = [];
        if (object.logRecords !== undefined && object.logRecords !== null) {
            for (const e of object.logRecords) {
                message.logRecords.push(LogRecord.fromPartial(e));
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

/** A set of methods for managing InstanceGroup resources. */
export const InstanceGroupServiceService = {
    /**
     * Returns the specified InstanceGroup resource.
     *
     * To get the list of available InstanceGroup resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetInstanceGroupRequest) =>
            Buffer.from(GetInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetInstanceGroupRequest.decode(value),
        responseSerialize: (value: InstanceGroup) =>
            Buffer.from(InstanceGroup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => InstanceGroup.decode(value),
    },
    /** Retrieves the list of InstanceGroup resources in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListInstanceGroupsRequest) =>
            Buffer.from(ListInstanceGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListInstanceGroupsRequest.decode(value),
        responseSerialize: (value: ListInstanceGroupsResponse) =>
            Buffer.from(ListInstanceGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListInstanceGroupsResponse.decode(value),
    },
    /**
     * Creates an instance group in the specified folder.
     * This method starts an operation that can be cancelled by another operation.
     */
    create: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateInstanceGroupRequest) =>
            Buffer.from(CreateInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateInstanceGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Creates an instance group in the specified folder from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    createFromYaml: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/CreateFromYaml',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateInstanceGroupFromYamlRequest) =>
            Buffer.from(
                CreateInstanceGroupFromYamlRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            CreateInstanceGroupFromYamlRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates the specified instance group.
     * This method starts an operation that can be cancelled by another operation.
     */
    update: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateInstanceGroupRequest) =>
            Buffer.from(UpdateInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateInstanceGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates the specified instance group from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    updateFromYaml: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateFromYaml',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateInstanceGroupFromYamlRequest) =>
            Buffer.from(
                UpdateInstanceGroupFromYamlRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            UpdateInstanceGroupFromYamlRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stops the specified instance group. */
    stop: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopInstanceGroupRequest) =>
            Buffer.from(StopInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StopInstanceGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Starts the specified instance group. */
    start: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StartInstanceGroupRequest) =>
            Buffer.from(StartInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StartInstanceGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified instance group. */
    delete: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteInstanceGroupRequest) =>
            Buffer.from(DeleteInstanceGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteInstanceGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists instances for the specified instance group. */
    listInstances: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListInstances',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListInstanceGroupInstancesRequest) =>
            Buffer.from(
                ListInstanceGroupInstancesRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListInstanceGroupInstancesRequest.decode(value),
        responseSerialize: (value: ListInstanceGroupInstancesResponse) =>
            Buffer.from(
                ListInstanceGroupInstancesResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListInstanceGroupInstancesResponse.decode(value),
    },
    /** Delete instances from the instance group. */
    deleteInstances: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/DeleteInstances',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteInstancesRequest) =>
            Buffer.from(DeleteInstancesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteInstancesRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Stop instances from the instance group. */
    stopInstances: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/StopInstances',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: StopInstancesRequest) =>
            Buffer.from(StopInstancesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            StopInstancesRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified instance group. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListInstanceGroupOperationsRequest) =>
            Buffer.from(
                ListInstanceGroupOperationsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListInstanceGroupOperationsRequest.decode(value),
        responseSerialize: (value: ListInstanceGroupOperationsResponse) =>
            Buffer.from(
                ListInstanceGroupOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListInstanceGroupOperationsResponse.decode(value),
    },
    /** Lists logs for the specified instance group. */
    listLogRecords: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListLogRecords',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListInstanceGroupLogRecordsRequest) =>
            Buffer.from(
                ListInstanceGroupLogRecordsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListInstanceGroupLogRecordsRequest.decode(value),
        responseSerialize: (value: ListInstanceGroupLogRecordsResponse) =>
            Buffer.from(
                ListInstanceGroupLogRecordsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListInstanceGroupLogRecordsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified instance group. */
    listAccessBindings: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified instance group. */
    setAccessBindings: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified instance group. */
    updateAccessBindings: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Resume all process in instance group. */
    resumeProcesses: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ResumeProcesses',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ResumeInstanceGroupProcessesRequest) =>
            Buffer.from(
                ResumeInstanceGroupProcessesRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ResumeInstanceGroupProcessesRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Pause all process in instance group. */
    pauseProcesses: {
        path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/PauseProcesses',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PauseInstanceGroupProcessesRequest) =>
            Buffer.from(
                PauseInstanceGroupProcessesRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            PauseInstanceGroupProcessesRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface InstanceGroupServiceServer
    extends UntypedServiceImplementation {
    /**
     * Returns the specified InstanceGroup resource.
     *
     * To get the list of available InstanceGroup resources, make a [List] request.
     */
    get: handleUnaryCall<GetInstanceGroupRequest, InstanceGroup>;
    /** Retrieves the list of InstanceGroup resources in the specified folder. */
    list: handleUnaryCall<
        ListInstanceGroupsRequest,
        ListInstanceGroupsResponse
    >;
    /**
     * Creates an instance group in the specified folder.
     * This method starts an operation that can be cancelled by another operation.
     */
    create: handleUnaryCall<CreateInstanceGroupRequest, Operation>;
    /**
     * Creates an instance group in the specified folder from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    createFromYaml: handleUnaryCall<
        CreateInstanceGroupFromYamlRequest,
        Operation
    >;
    /**
     * Updates the specified instance group.
     * This method starts an operation that can be cancelled by another operation.
     */
    update: handleUnaryCall<UpdateInstanceGroupRequest, Operation>;
    /**
     * Updates the specified instance group from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    updateFromYaml: handleUnaryCall<
        UpdateInstanceGroupFromYamlRequest,
        Operation
    >;
    /** Stops the specified instance group. */
    stop: handleUnaryCall<StopInstanceGroupRequest, Operation>;
    /** Starts the specified instance group. */
    start: handleUnaryCall<StartInstanceGroupRequest, Operation>;
    /** Deletes the specified instance group. */
    delete: handleUnaryCall<DeleteInstanceGroupRequest, Operation>;
    /** Lists instances for the specified instance group. */
    listInstances: handleUnaryCall<
        ListInstanceGroupInstancesRequest,
        ListInstanceGroupInstancesResponse
    >;
    /** Delete instances from the instance group. */
    deleteInstances: handleUnaryCall<DeleteInstancesRequest, Operation>;
    /** Stop instances from the instance group. */
    stopInstances: handleUnaryCall<StopInstancesRequest, Operation>;
    /** Lists operations for the specified instance group. */
    listOperations: handleUnaryCall<
        ListInstanceGroupOperationsRequest,
        ListInstanceGroupOperationsResponse
    >;
    /** Lists logs for the specified instance group. */
    listLogRecords: handleUnaryCall<
        ListInstanceGroupLogRecordsRequest,
        ListInstanceGroupLogRecordsResponse
    >;
    /** Lists existing access bindings for the specified instance group. */
    listAccessBindings: handleUnaryCall<
        ListAccessBindingsRequest,
        ListAccessBindingsResponse
    >;
    /** Sets access bindings for the specified instance group. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified instance group. */
    updateAccessBindings: handleUnaryCall<
        UpdateAccessBindingsRequest,
        Operation
    >;
    /** Resume all process in instance group. */
    resumeProcesses: handleUnaryCall<
        ResumeInstanceGroupProcessesRequest,
        Operation
    >;
    /** Pause all process in instance group. */
    pauseProcesses: handleUnaryCall<
        PauseInstanceGroupProcessesRequest,
        Operation
    >;
}

export interface InstanceGroupServiceClient extends Client {
    /**
     * Returns the specified InstanceGroup resource.
     *
     * To get the list of available InstanceGroup resources, make a [List] request.
     */
    get(
        request: GetInstanceGroupRequest,
        callback: (error: ServiceError | null, response: InstanceGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetInstanceGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: InstanceGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetInstanceGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: InstanceGroup) => void
    ): ClientUnaryCall;
    /** Retrieves the list of InstanceGroup resources in the specified folder. */
    list(
        request: ListInstanceGroupsRequest,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListInstanceGroupsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListInstanceGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupsResponse
        ) => void
    ): ClientUnaryCall;
    /**
     * Creates an instance group in the specified folder.
     * This method starts an operation that can be cancelled by another operation.
     */
    create(
        request: CreateInstanceGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateInstanceGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateInstanceGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Creates an instance group in the specified folder from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    createFromYaml(
        request: CreateInstanceGroupFromYamlRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    createFromYaml(
        request: CreateInstanceGroupFromYamlRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    createFromYaml(
        request: CreateInstanceGroupFromYamlRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Updates the specified instance group.
     * This method starts an operation that can be cancelled by another operation.
     */
    update(
        request: UpdateInstanceGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateInstanceGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateInstanceGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Updates the specified instance group from a YAML file.
     * This method starts an operation that can be cancelled by another operation.
     */
    updateFromYaml(
        request: UpdateInstanceGroupFromYamlRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateFromYaml(
        request: UpdateInstanceGroupFromYamlRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateFromYaml(
        request: UpdateInstanceGroupFromYamlRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Stops the specified instance group. */
    stop(
        request: StopInstanceGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stop(
        request: StopInstanceGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stop(
        request: StopInstanceGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Starts the specified instance group. */
    start(
        request: StartInstanceGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    start(
        request: StartInstanceGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    start(
        request: StartInstanceGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified instance group. */
    delete(
        request: DeleteInstanceGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteInstanceGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteInstanceGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists instances for the specified instance group. */
    listInstances(
        request: ListInstanceGroupInstancesRequest,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupInstancesResponse
        ) => void
    ): ClientUnaryCall;
    listInstances(
        request: ListInstanceGroupInstancesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupInstancesResponse
        ) => void
    ): ClientUnaryCall;
    listInstances(
        request: ListInstanceGroupInstancesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupInstancesResponse
        ) => void
    ): ClientUnaryCall;
    /** Delete instances from the instance group. */
    deleteInstances(
        request: DeleteInstancesRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deleteInstances(
        request: DeleteInstancesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    deleteInstances(
        request: DeleteInstancesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Stop instances from the instance group. */
    stopInstances(
        request: StopInstancesRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stopInstances(
        request: StopInstancesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    stopInstances(
        request: StopInstancesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified instance group. */
    listOperations(
        request: ListInstanceGroupOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListInstanceGroupOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListInstanceGroupOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists logs for the specified instance group. */
    listLogRecords(
        request: ListInstanceGroupLogRecordsRequest,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupLogRecordsResponse
        ) => void
    ): ClientUnaryCall;
    listLogRecords(
        request: ListInstanceGroupLogRecordsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupLogRecordsResponse
        ) => void
    ): ClientUnaryCall;
    listLogRecords(
        request: ListInstanceGroupLogRecordsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListInstanceGroupLogRecordsResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists existing access bindings for the specified instance group. */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    /** Sets access bindings for the specified instance group. */
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates access bindings for the specified instance group. */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Resume all process in instance group. */
    resumeProcesses(
        request: ResumeInstanceGroupProcessesRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    resumeProcesses(
        request: ResumeInstanceGroupProcessesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    resumeProcesses(
        request: ResumeInstanceGroupProcessesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Pause all process in instance group. */
    pauseProcesses(
        request: PauseInstanceGroupProcessesRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    pauseProcesses(
        request: PauseInstanceGroupProcessesRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    pauseProcesses(
        request: PauseInstanceGroupProcessesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const InstanceGroupServiceClient = makeGenericClientConstructor(
    InstanceGroupServiceService,
    'yandex.cloud.compute.v1.instancegroup.InstanceGroupService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): InstanceGroupServiceClient;
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
