/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import {
    TargetGroup,
    Target,
} from '../../../../yandex/cloud/apploadbalancer/v1/target_group';
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

export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';

export interface GetTargetGroupRequest {
    targetGroupId: string;
}

export interface ListTargetGroupsRequest {
    folderId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}

export interface ListTargetGroupsResponse {
    targetGroups: TargetGroup[];
    nextPageToken: string;
}

export interface DeleteTargetGroupRequest {
    targetGroupId: string;
}

export interface DeleteTargetGroupMetadata {
    targetGroupId: string;
}

export interface UpdateTargetGroupRequest {
    targetGroupId: string;
    updateMask: FieldMask | undefined;
    name: string;
    description: string;
    labels: { [key: string]: string };
    targets: Target[];
}

export interface UpdateTargetGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateTargetGroupMetadata {
    targetGroupId: string;
}

export interface CreateTargetGroupRequest {
    folderId: string;
    name: string;
    description: string;
    labels: { [key: string]: string };
    targets: Target[];
}

export interface CreateTargetGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateTargetGroupMetadata {
    targetGroupId: string;
}

export interface AddTargetsRequest {
    targetGroupId: string;
    targets: Target[];
}

export interface AddTargetsMetadata {
    targetGroupId: string;
}

export interface RemoveTargetsRequest {
    targetGroupId: string;
    targets: Target[];
}

export interface RemoveTargetsMetadata {
    targetGroupId: string;
}

export interface ListTargetGroupOperationsRequest {
    /**
     * ID of the target group to get operations for.
     *
     * To get the target group ID, use a [TargetGroupService.List] request.
     */
    targetGroupId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListTargetGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListTargetGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListTargetGroupOperationsResponse {
    /** List of operations for the specified target group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListTargetGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListTargetGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetTargetGroupRequest: object = { targetGroupId: '' };

export const GetTargetGroupRequest = {
    encode(
        message: GetTargetGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetTargetGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetTargetGroupRequest,
        } as GetTargetGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetTargetGroupRequest {
        const message = {
            ...baseGetTargetGroupRequest,
        } as GetTargetGroupRequest;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        return message;
    },

    toJSON(message: GetTargetGroupRequest): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetTargetGroupRequest>
    ): GetTargetGroupRequest {
        const message = {
            ...baseGetTargetGroupRequest,
        } as GetTargetGroupRequest;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        return message;
    },
};

const baseListTargetGroupsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListTargetGroupsRequest = {
    encode(
        message: ListTargetGroupsRequest,
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
    ): ListTargetGroupsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListTargetGroupsRequest,
        } as ListTargetGroupsRequest;
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

    fromJSON(object: any): ListTargetGroupsRequest {
        const message = {
            ...baseListTargetGroupsRequest,
        } as ListTargetGroupsRequest;
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

    toJSON(message: ListTargetGroupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListTargetGroupsRequest>
    ): ListTargetGroupsRequest {
        const message = {
            ...baseListTargetGroupsRequest,
        } as ListTargetGroupsRequest;
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

const baseListTargetGroupsResponse: object = { nextPageToken: '' };

export const ListTargetGroupsResponse = {
    encode(
        message: ListTargetGroupsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.targetGroups) {
            TargetGroup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListTargetGroupsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListTargetGroupsResponse,
        } as ListTargetGroupsResponse;
        message.targetGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroups.push(
                        TargetGroup.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListTargetGroupsResponse {
        const message = {
            ...baseListTargetGroupsResponse,
        } as ListTargetGroupsResponse;
        message.targetGroups = [];
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            for (const e of object.targetGroups) {
                message.targetGroups.push(TargetGroup.fromJSON(e));
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

    toJSON(message: ListTargetGroupsResponse): unknown {
        const obj: any = {};
        if (message.targetGroups) {
            obj.targetGroups = message.targetGroups.map((e) =>
                e ? TargetGroup.toJSON(e) : undefined
            );
        } else {
            obj.targetGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListTargetGroupsResponse>
    ): ListTargetGroupsResponse {
        const message = {
            ...baseListTargetGroupsResponse,
        } as ListTargetGroupsResponse;
        message.targetGroups = [];
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            for (const e of object.targetGroups) {
                message.targetGroups.push(TargetGroup.fromPartial(e));
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

const baseDeleteTargetGroupRequest: object = { targetGroupId: '' };

export const DeleteTargetGroupRequest = {
    encode(
        message: DeleteTargetGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteTargetGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteTargetGroupRequest,
        } as DeleteTargetGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteTargetGroupRequest {
        const message = {
            ...baseDeleteTargetGroupRequest,
        } as DeleteTargetGroupRequest;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteTargetGroupRequest): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteTargetGroupRequest>
    ): DeleteTargetGroupRequest {
        const message = {
            ...baseDeleteTargetGroupRequest,
        } as DeleteTargetGroupRequest;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        return message;
    },
};

const baseDeleteTargetGroupMetadata: object = { targetGroupId: '' };

export const DeleteTargetGroupMetadata = {
    encode(
        message: DeleteTargetGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteTargetGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteTargetGroupMetadata,
        } as DeleteTargetGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteTargetGroupMetadata {
        const message = {
            ...baseDeleteTargetGroupMetadata,
        } as DeleteTargetGroupMetadata;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteTargetGroupMetadata): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteTargetGroupMetadata>
    ): DeleteTargetGroupMetadata {
        const message = {
            ...baseDeleteTargetGroupMetadata,
        } as DeleteTargetGroupMetadata;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        return message;
    },
};

const baseUpdateTargetGroupRequest: object = {
    targetGroupId: '',
    name: '',
    description: '',
};

export const UpdateTargetGroupRequest = {
    encode(
        message: UpdateTargetGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
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
            UpdateTargetGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        for (const v of message.targets) {
            Target.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateTargetGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateTargetGroupRequest,
        } as UpdateTargetGroupRequest;
        message.labels = {};
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
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
                    const entry5 = UpdateTargetGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.targets.push(
                        Target.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateTargetGroupRequest {
        const message = {
            ...baseUpdateTargetGroupRequest,
        } as UpdateTargetGroupRequest;
        message.labels = {};
        message.targets = [];
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
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
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(Target.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UpdateTargetGroupRequest): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
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
        if (message.targets) {
            obj.targets = message.targets.map((e) =>
                e ? Target.toJSON(e) : undefined
            );
        } else {
            obj.targets = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateTargetGroupRequest>
    ): UpdateTargetGroupRequest {
        const message = {
            ...baseUpdateTargetGroupRequest,
        } as UpdateTargetGroupRequest;
        message.labels = {};
        message.targets = [];
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
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
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(Target.fromPartial(e));
            }
        }
        return message;
    },
};

const baseUpdateTargetGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateTargetGroupRequest_LabelsEntry = {
    encode(
        message: UpdateTargetGroupRequest_LabelsEntry,
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
    ): UpdateTargetGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateTargetGroupRequest_LabelsEntry,
        } as UpdateTargetGroupRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateTargetGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateTargetGroupRequest_LabelsEntry,
        } as UpdateTargetGroupRequest_LabelsEntry;
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

    toJSON(message: UpdateTargetGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateTargetGroupRequest_LabelsEntry>
    ): UpdateTargetGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateTargetGroupRequest_LabelsEntry,
        } as UpdateTargetGroupRequest_LabelsEntry;
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

const baseUpdateTargetGroupMetadata: object = { targetGroupId: '' };

export const UpdateTargetGroupMetadata = {
    encode(
        message: UpdateTargetGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateTargetGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateTargetGroupMetadata,
        } as UpdateTargetGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateTargetGroupMetadata {
        const message = {
            ...baseUpdateTargetGroupMetadata,
        } as UpdateTargetGroupMetadata;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        return message;
    },

    toJSON(message: UpdateTargetGroupMetadata): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateTargetGroupMetadata>
    ): UpdateTargetGroupMetadata {
        const message = {
            ...baseUpdateTargetGroupMetadata,
        } as UpdateTargetGroupMetadata;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        return message;
    },
};

const baseCreateTargetGroupRequest: object = {
    folderId: '',
    name: '',
    description: '',
};

export const CreateTargetGroupRequest = {
    encode(
        message: CreateTargetGroupRequest,
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
            CreateTargetGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        for (const v of message.targets) {
            Target.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateTargetGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateTargetGroupRequest,
        } as CreateTargetGroupRequest;
        message.labels = {};
        message.targets = [];
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
                    const entry4 = CreateTargetGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.targets.push(
                        Target.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateTargetGroupRequest {
        const message = {
            ...baseCreateTargetGroupRequest,
        } as CreateTargetGroupRequest;
        message.labels = {};
        message.targets = [];
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
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(Target.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: CreateTargetGroupRequest): unknown {
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
        if (message.targets) {
            obj.targets = message.targets.map((e) =>
                e ? Target.toJSON(e) : undefined
            );
        } else {
            obj.targets = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateTargetGroupRequest>
    ): CreateTargetGroupRequest {
        const message = {
            ...baseCreateTargetGroupRequest,
        } as CreateTargetGroupRequest;
        message.labels = {};
        message.targets = [];
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
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(Target.fromPartial(e));
            }
        }
        return message;
    },
};

const baseCreateTargetGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateTargetGroupRequest_LabelsEntry = {
    encode(
        message: CreateTargetGroupRequest_LabelsEntry,
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
    ): CreateTargetGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateTargetGroupRequest_LabelsEntry,
        } as CreateTargetGroupRequest_LabelsEntry;
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

    fromJSON(object: any): CreateTargetGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateTargetGroupRequest_LabelsEntry,
        } as CreateTargetGroupRequest_LabelsEntry;
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

    toJSON(message: CreateTargetGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateTargetGroupRequest_LabelsEntry>
    ): CreateTargetGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateTargetGroupRequest_LabelsEntry,
        } as CreateTargetGroupRequest_LabelsEntry;
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

const baseCreateTargetGroupMetadata: object = { targetGroupId: '' };

export const CreateTargetGroupMetadata = {
    encode(
        message: CreateTargetGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateTargetGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateTargetGroupMetadata,
        } as CreateTargetGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateTargetGroupMetadata {
        const message = {
            ...baseCreateTargetGroupMetadata,
        } as CreateTargetGroupMetadata;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        return message;
    },

    toJSON(message: CreateTargetGroupMetadata): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateTargetGroupMetadata>
    ): CreateTargetGroupMetadata {
        const message = {
            ...baseCreateTargetGroupMetadata,
        } as CreateTargetGroupMetadata;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        return message;
    },
};

const baseAddTargetsRequest: object = { targetGroupId: '' };

export const AddTargetsRequest = {
    encode(
        message: AddTargetsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        for (const v of message.targets) {
            Target.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddTargetsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddTargetsRequest } as AddTargetsRequest;
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                case 2:
                    message.targets.push(
                        Target.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddTargetsRequest {
        const message = { ...baseAddTargetsRequest } as AddTargetsRequest;
        message.targets = [];
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(Target.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: AddTargetsRequest): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        if (message.targets) {
            obj.targets = message.targets.map((e) =>
                e ? Target.toJSON(e) : undefined
            );
        } else {
            obj.targets = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<AddTargetsRequest>): AddTargetsRequest {
        const message = { ...baseAddTargetsRequest } as AddTargetsRequest;
        message.targets = [];
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(Target.fromPartial(e));
            }
        }
        return message;
    },
};

const baseAddTargetsMetadata: object = { targetGroupId: '' };

export const AddTargetsMetadata = {
    encode(
        message: AddTargetsMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddTargetsMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddTargetsMetadata } as AddTargetsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddTargetsMetadata {
        const message = { ...baseAddTargetsMetadata } as AddTargetsMetadata;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        return message;
    },

    toJSON(message: AddTargetsMetadata): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },

    fromPartial(object: DeepPartial<AddTargetsMetadata>): AddTargetsMetadata {
        const message = { ...baseAddTargetsMetadata } as AddTargetsMetadata;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        return message;
    },
};

const baseRemoveTargetsRequest: object = { targetGroupId: '' };

export const RemoveTargetsRequest = {
    encode(
        message: RemoveTargetsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        for (const v of message.targets) {
            Target.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveTargetsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveTargetsRequest } as RemoveTargetsRequest;
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                case 2:
                    message.targets.push(
                        Target.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveTargetsRequest {
        const message = { ...baseRemoveTargetsRequest } as RemoveTargetsRequest;
        message.targets = [];
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(Target.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: RemoveTargetsRequest): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        if (message.targets) {
            obj.targets = message.targets.map((e) =>
                e ? Target.toJSON(e) : undefined
            );
        } else {
            obj.targets = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<RemoveTargetsRequest>
    ): RemoveTargetsRequest {
        const message = { ...baseRemoveTargetsRequest } as RemoveTargetsRequest;
        message.targets = [];
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(Target.fromPartial(e));
            }
        }
        return message;
    },
};

const baseRemoveTargetsMetadata: object = { targetGroupId: '' };

export const RemoveTargetsMetadata = {
    encode(
        message: RemoveTargetsMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveTargetsMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveTargetsMetadata,
        } as RemoveTargetsMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveTargetsMetadata {
        const message = {
            ...baseRemoveTargetsMetadata,
        } as RemoveTargetsMetadata;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
        }
        return message;
    },

    toJSON(message: RemoveTargetsMetadata): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RemoveTargetsMetadata>
    ): RemoveTargetsMetadata {
        const message = {
            ...baseRemoveTargetsMetadata,
        } as RemoveTargetsMetadata;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
        }
        return message;
    },
};

const baseListTargetGroupOperationsRequest: object = {
    targetGroupId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListTargetGroupOperationsRequest = {
    encode(
        message: ListTargetGroupOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
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
    ): ListTargetGroupOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListTargetGroupOperationsRequest,
        } as ListTargetGroupOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
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

    fromJSON(object: any): ListTargetGroupOperationsRequest {
        const message = {
            ...baseListTargetGroupOperationsRequest,
        } as ListTargetGroupOperationsRequest;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = String(object.targetGroupId);
        } else {
            message.targetGroupId = '';
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

    toJSON(message: ListTargetGroupOperationsRequest): unknown {
        const obj: any = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListTargetGroupOperationsRequest>
    ): ListTargetGroupOperationsRequest {
        const message = {
            ...baseListTargetGroupOperationsRequest,
        } as ListTargetGroupOperationsRequest;
        if (
            object.targetGroupId !== undefined &&
            object.targetGroupId !== null
        ) {
            message.targetGroupId = object.targetGroupId;
        } else {
            message.targetGroupId = '';
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

const baseListTargetGroupOperationsResponse: object = { nextPageToken: '' };

export const ListTargetGroupOperationsResponse = {
    encode(
        message: ListTargetGroupOperationsResponse,
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
    ): ListTargetGroupOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListTargetGroupOperationsResponse,
        } as ListTargetGroupOperationsResponse;
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

    fromJSON(object: any): ListTargetGroupOperationsResponse {
        const message = {
            ...baseListTargetGroupOperationsResponse,
        } as ListTargetGroupOperationsResponse;
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

    toJSON(message: ListTargetGroupOperationsResponse): unknown {
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
        object: DeepPartial<ListTargetGroupOperationsResponse>
    ): ListTargetGroupOperationsResponse {
        const message = {
            ...baseListTargetGroupOperationsResponse,
        } as ListTargetGroupOperationsResponse;
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

export const TargetGroupServiceService = {
    get: {
        path: '/yandex.cloud.apploadbalancer.v1.TargetGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetTargetGroupRequest) =>
            Buffer.from(GetTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetTargetGroupRequest.decode(value),
        responseSerialize: (value: TargetGroup) =>
            Buffer.from(TargetGroup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => TargetGroup.decode(value),
    },
    list: {
        path: '/yandex.cloud.apploadbalancer.v1.TargetGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListTargetGroupsRequest) =>
            Buffer.from(ListTargetGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListTargetGroupsRequest.decode(value),
        responseSerialize: (value: ListTargetGroupsResponse) =>
            Buffer.from(ListTargetGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListTargetGroupsResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.apploadbalancer.v1.TargetGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateTargetGroupRequest) =>
            Buffer.from(CreateTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateTargetGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.apploadbalancer.v1.TargetGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateTargetGroupRequest) =>
            Buffer.from(UpdateTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateTargetGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.apploadbalancer.v1.TargetGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteTargetGroupRequest) =>
            Buffer.from(DeleteTargetGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteTargetGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    addTargets: {
        path: '/yandex.cloud.apploadbalancer.v1.TargetGroupService/AddTargets',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddTargetsRequest) =>
            Buffer.from(AddTargetsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddTargetsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    removeTargets: {
        path: '/yandex.cloud.apploadbalancer.v1.TargetGroupService/RemoveTargets',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RemoveTargetsRequest) =>
            Buffer.from(RemoveTargetsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            RemoveTargetsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified target group. */
    listOperations: {
        path: '/yandex.cloud.apploadbalancer.v1.TargetGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListTargetGroupOperationsRequest) =>
            Buffer.from(
                ListTargetGroupOperationsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListTargetGroupOperationsRequest.decode(value),
        responseSerialize: (value: ListTargetGroupOperationsResponse) =>
            Buffer.from(
                ListTargetGroupOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListTargetGroupOperationsResponse.decode(value),
    },
} as const;

export interface TargetGroupServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetTargetGroupRequest, TargetGroup>;
    list: handleUnaryCall<ListTargetGroupsRequest, ListTargetGroupsResponse>;
    create: handleUnaryCall<CreateTargetGroupRequest, Operation>;
    update: handleUnaryCall<UpdateTargetGroupRequest, Operation>;
    delete: handleUnaryCall<DeleteTargetGroupRequest, Operation>;
    addTargets: handleUnaryCall<AddTargetsRequest, Operation>;
    removeTargets: handleUnaryCall<RemoveTargetsRequest, Operation>;
    /** Lists operations for the specified target group. */
    listOperations: handleUnaryCall<
        ListTargetGroupOperationsRequest,
        ListTargetGroupOperationsResponse
    >;
}

export interface TargetGroupServiceClient extends Client {
    get(
        request: GetTargetGroupRequest,
        callback: (error: ServiceError | null, response: TargetGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetTargetGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: TargetGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetTargetGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: TargetGroup) => void
    ): ClientUnaryCall;
    list(
        request: ListTargetGroupsRequest,
        callback: (
            error: ServiceError | null,
            response: ListTargetGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListTargetGroupsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListTargetGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListTargetGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListTargetGroupsResponse
        ) => void
    ): ClientUnaryCall;
    create(
        request: CreateTargetGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateTargetGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateTargetGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateTargetGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateTargetGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateTargetGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteTargetGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteTargetGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteTargetGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addTargets(
        request: AddTargetsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addTargets(
        request: AddTargetsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addTargets(
        request: AddTargetsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeTargets(
        request: RemoveTargetsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeTargets(
        request: RemoveTargetsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeTargets(
        request: RemoveTargetsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified target group. */
    listOperations(
        request: ListTargetGroupOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListTargetGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListTargetGroupOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListTargetGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListTargetGroupOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListTargetGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const TargetGroupServiceClient = makeGenericClientConstructor(
    TargetGroupServiceService,
    'yandex.cloud.apploadbalancer.v1.TargetGroupService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): TargetGroupServiceClient;
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
