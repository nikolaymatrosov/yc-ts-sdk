/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { FieldMask } from '../../../../google/protobuf/field_mask';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';
import { LogGroup } from '../../../../yandex/cloud/logging/v1/log_group';
import { LogGroupResource } from '../../../../yandex/cloud/logging/v1/log_resource';
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

export const protobufPackage = 'yandex.cloud.logging.v1';

export interface GetLogGroupRequest {
    /**
     * ID of the log group to return.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
}

export interface GetLogGroupStatsRequest {
    /**
     * ID of the log group to return stats for.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
}

export interface ListLogGroupsRequest {
    /**
     * Folder ID of the log groups to return.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListLogGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListLogGroupsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters log groups listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [LogGroup.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Example of a filter: `name=my-log-group`.
     */
    filter: string;
}

export interface ListLogGroupsResponse {
    /** List of log groups in the specified folder. */
    groups: LogGroup[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListLogGroupsRequest.page_size], use `next_page_token` as the value
     * for the [ListLogGroupsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateLogGroupRequest {
    /**
     * ID of the folder to create a log group in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the log group.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the log group. */
    description: string;
    /** Log group labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /**
     * Log group entry retention period.
     *
     * Entries will be present in group during this period.
     * If specified, must be non-negative.
     * Empty or zero value is treated as no limit.
     */
    retentionPeriod: Duration | undefined;
}

export interface CreateLogGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateLogGroupMetadata {
    /** ID of the log group being created. */
    logGroupId: string;
}

export interface UpdateLogGroupRequest {
    /**
     * ID of the log group to update.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
    /** Field mask that specifies which attributes of the function should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name of the log group.
     * The name must be unique within the folder.
     */
    name: string;
    /** New Description of the log group. */
    description: string;
    /** New log group labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /**
     * New log group entry retention period.
     *
     * Entries will be present in group during this period.
     * If specified, must be non-negative.
     * Empty or zero value is treated as no limit.
     */
    retentionPeriod: Duration | undefined;
}

export interface UpdateLogGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateLogGroupMetadata {
    /** ID of the log group being updated. */
    logGroupId: string;
}

export interface DeleteLogGroupRequest {
    /**
     * ID of the log group to delete.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
}

export interface DeleteLogGroupMetadata {
    /** ID of the log group being deleted. */
    logGroupId: string;
}

export interface ListResourcesRequest {
    /**
     * ID of the log group to list resources for.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
    /**
     * Resource type to return resources for.
     *
     * If not specified, [ListResourcesResponse] will contain information about all resource types.
     */
    type: string;
}

export interface ListResourcesResponse {
    /** List of resources present in log group. */
    resources: LogGroupResource[];
}

export interface ListOperationsRequest {
    /**
     * ID of the log group to list operations for.
     *
     * To get a log group ID make a [LogGroupService.List] request.
     */
    logGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.description], [operation.Operation.created_at], [operation.Operation.modified_at], [operation.Operation.created_by], [operation.Operation.done] fields.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}

export interface ListOperationsResponse {
    /** List of operations for the specified log group. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface GetLogGroupStatsResponse {
    /** Log group ID the stats are returned for. */
    logGroupId: string;
    /** Size of data in log group in bytes. */
    bytes: number;
    /** Amount of records in log group. */
    records: number;
}

const baseGetLogGroupRequest: object = { logGroupId: '' };

export const GetLogGroupRequest = {
    encode(
        message: GetLogGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetLogGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetLogGroupRequest } as GetLogGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLogGroupRequest {
        const message = { ...baseGetLogGroupRequest } as GetLogGroupRequest;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        return message;
    },

    toJSON(message: GetLogGroupRequest): unknown {
        const obj: any = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetLogGroupRequest>): GetLogGroupRequest {
        const message = { ...baseGetLogGroupRequest } as GetLogGroupRequest;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        return message;
    },
};

const baseGetLogGroupStatsRequest: object = { logGroupId: '' };

export const GetLogGroupStatsRequest = {
    encode(
        message: GetLogGroupStatsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetLogGroupStatsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetLogGroupStatsRequest,
        } as GetLogGroupStatsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLogGroupStatsRequest {
        const message = {
            ...baseGetLogGroupStatsRequest,
        } as GetLogGroupStatsRequest;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        return message;
    },

    toJSON(message: GetLogGroupStatsRequest): unknown {
        const obj: any = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetLogGroupStatsRequest>
    ): GetLogGroupStatsRequest {
        const message = {
            ...baseGetLogGroupStatsRequest,
        } as GetLogGroupStatsRequest;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        return message;
    },
};

const baseListLogGroupsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListLogGroupsRequest = {
    encode(
        message: ListLogGroupsRequest,
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
    ): ListLogGroupsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListLogGroupsRequest } as ListLogGroupsRequest;
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

    fromJSON(object: any): ListLogGroupsRequest {
        const message = { ...baseListLogGroupsRequest } as ListLogGroupsRequest;
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

    toJSON(message: ListLogGroupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListLogGroupsRequest>
    ): ListLogGroupsRequest {
        const message = { ...baseListLogGroupsRequest } as ListLogGroupsRequest;
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

const baseListLogGroupsResponse: object = { nextPageToken: '' };

export const ListLogGroupsResponse = {
    encode(
        message: ListLogGroupsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.groups) {
            LogGroup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListLogGroupsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLogGroupsResponse,
        } as ListLogGroupsResponse;
        message.groups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(
                        LogGroup.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListLogGroupsResponse {
        const message = {
            ...baseListLogGroupsResponse,
        } as ListLogGroupsResponse;
        message.groups = [];
        if (object.groups !== undefined && object.groups !== null) {
            for (const e of object.groups) {
                message.groups.push(LogGroup.fromJSON(e));
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

    toJSON(message: ListLogGroupsResponse): unknown {
        const obj: any = {};
        if (message.groups) {
            obj.groups = message.groups.map((e) =>
                e ? LogGroup.toJSON(e) : undefined
            );
        } else {
            obj.groups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListLogGroupsResponse>
    ): ListLogGroupsResponse {
        const message = {
            ...baseListLogGroupsResponse,
        } as ListLogGroupsResponse;
        message.groups = [];
        if (object.groups !== undefined && object.groups !== null) {
            for (const e of object.groups) {
                message.groups.push(LogGroup.fromPartial(e));
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

const baseCreateLogGroupRequest: object = {
    folderId: '',
    name: '',
    description: '',
};

export const CreateLogGroupRequest = {
    encode(
        message: CreateLogGroupRequest,
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
            CreateLogGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.retentionPeriod !== undefined) {
            Duration.encode(
                message.retentionPeriod,
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateLogGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLogGroupRequest,
        } as CreateLogGroupRequest;
        message.labels = {};
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
                    const entry4 = CreateLogGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.retentionPeriod = Duration.decode(
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

    fromJSON(object: any): CreateLogGroupRequest {
        const message = {
            ...baseCreateLogGroupRequest,
        } as CreateLogGroupRequest;
        message.labels = {};
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
            object.retentionPeriod !== undefined &&
            object.retentionPeriod !== null
        ) {
            message.retentionPeriod = Duration.fromJSON(object.retentionPeriod);
        } else {
            message.retentionPeriod = undefined;
        }
        return message;
    },

    toJSON(message: CreateLogGroupRequest): unknown {
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
        message.retentionPeriod !== undefined &&
            (obj.retentionPeriod = message.retentionPeriod
                ? Duration.toJSON(message.retentionPeriod)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateLogGroupRequest>
    ): CreateLogGroupRequest {
        const message = {
            ...baseCreateLogGroupRequest,
        } as CreateLogGroupRequest;
        message.labels = {};
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
            object.retentionPeriod !== undefined &&
            object.retentionPeriod !== null
        ) {
            message.retentionPeriod = Duration.fromPartial(
                object.retentionPeriod
            );
        } else {
            message.retentionPeriod = undefined;
        }
        return message;
    },
};

const baseCreateLogGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateLogGroupRequest_LabelsEntry = {
    encode(
        message: CreateLogGroupRequest_LabelsEntry,
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
    ): CreateLogGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLogGroupRequest_LabelsEntry,
        } as CreateLogGroupRequest_LabelsEntry;
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

    fromJSON(object: any): CreateLogGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateLogGroupRequest_LabelsEntry,
        } as CreateLogGroupRequest_LabelsEntry;
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

    toJSON(message: CreateLogGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateLogGroupRequest_LabelsEntry>
    ): CreateLogGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateLogGroupRequest_LabelsEntry,
        } as CreateLogGroupRequest_LabelsEntry;
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

const baseCreateLogGroupMetadata: object = { logGroupId: '' };

export const CreateLogGroupMetadata = {
    encode(
        message: CreateLogGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateLogGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateLogGroupMetadata,
        } as CreateLogGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateLogGroupMetadata {
        const message = {
            ...baseCreateLogGroupMetadata,
        } as CreateLogGroupMetadata;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        return message;
    },

    toJSON(message: CreateLogGroupMetadata): unknown {
        const obj: any = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateLogGroupMetadata>
    ): CreateLogGroupMetadata {
        const message = {
            ...baseCreateLogGroupMetadata,
        } as CreateLogGroupMetadata;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        return message;
    },
};

const baseUpdateLogGroupRequest: object = {
    logGroupId: '',
    name: '',
    description: '',
};

export const UpdateLogGroupRequest = {
    encode(
        message: UpdateLogGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
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
            UpdateLogGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.retentionPeriod !== undefined) {
            Duration.encode(
                message.retentionPeriod,
                writer.uint32(50).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateLogGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLogGroupRequest,
        } as UpdateLogGroupRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
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
                    const entry5 = UpdateLogGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.retentionPeriod = Duration.decode(
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

    fromJSON(object: any): UpdateLogGroupRequest {
        const message = {
            ...baseUpdateLogGroupRequest,
        } as UpdateLogGroupRequest;
        message.labels = {};
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
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
            object.retentionPeriod !== undefined &&
            object.retentionPeriod !== null
        ) {
            message.retentionPeriod = Duration.fromJSON(object.retentionPeriod);
        } else {
            message.retentionPeriod = undefined;
        }
        return message;
    },

    toJSON(message: UpdateLogGroupRequest): unknown {
        const obj: any = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
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
        message.retentionPeriod !== undefined &&
            (obj.retentionPeriod = message.retentionPeriod
                ? Duration.toJSON(message.retentionPeriod)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateLogGroupRequest>
    ): UpdateLogGroupRequest {
        const message = {
            ...baseUpdateLogGroupRequest,
        } as UpdateLogGroupRequest;
        message.labels = {};
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
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
            object.retentionPeriod !== undefined &&
            object.retentionPeriod !== null
        ) {
            message.retentionPeriod = Duration.fromPartial(
                object.retentionPeriod
            );
        } else {
            message.retentionPeriod = undefined;
        }
        return message;
    },
};

const baseUpdateLogGroupRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateLogGroupRequest_LabelsEntry = {
    encode(
        message: UpdateLogGroupRequest_LabelsEntry,
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
    ): UpdateLogGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLogGroupRequest_LabelsEntry,
        } as UpdateLogGroupRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateLogGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateLogGroupRequest_LabelsEntry,
        } as UpdateLogGroupRequest_LabelsEntry;
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

    toJSON(message: UpdateLogGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateLogGroupRequest_LabelsEntry>
    ): UpdateLogGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateLogGroupRequest_LabelsEntry,
        } as UpdateLogGroupRequest_LabelsEntry;
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

const baseUpdateLogGroupMetadata: object = { logGroupId: '' };

export const UpdateLogGroupMetadata = {
    encode(
        message: UpdateLogGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateLogGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateLogGroupMetadata,
        } as UpdateLogGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateLogGroupMetadata {
        const message = {
            ...baseUpdateLogGroupMetadata,
        } as UpdateLogGroupMetadata;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        return message;
    },

    toJSON(message: UpdateLogGroupMetadata): unknown {
        const obj: any = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateLogGroupMetadata>
    ): UpdateLogGroupMetadata {
        const message = {
            ...baseUpdateLogGroupMetadata,
        } as UpdateLogGroupMetadata;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        return message;
    },
};

const baseDeleteLogGroupRequest: object = { logGroupId: '' };

export const DeleteLogGroupRequest = {
    encode(
        message: DeleteLogGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteLogGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteLogGroupRequest,
        } as DeleteLogGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteLogGroupRequest {
        const message = {
            ...baseDeleteLogGroupRequest,
        } as DeleteLogGroupRequest;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteLogGroupRequest): unknown {
        const obj: any = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteLogGroupRequest>
    ): DeleteLogGroupRequest {
        const message = {
            ...baseDeleteLogGroupRequest,
        } as DeleteLogGroupRequest;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        return message;
    },
};

const baseDeleteLogGroupMetadata: object = { logGroupId: '' };

export const DeleteLogGroupMetadata = {
    encode(
        message: DeleteLogGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteLogGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteLogGroupMetadata,
        } as DeleteLogGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteLogGroupMetadata {
        const message = {
            ...baseDeleteLogGroupMetadata,
        } as DeleteLogGroupMetadata;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteLogGroupMetadata): unknown {
        const obj: any = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteLogGroupMetadata>
    ): DeleteLogGroupMetadata {
        const message = {
            ...baseDeleteLogGroupMetadata,
        } as DeleteLogGroupMetadata;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        return message;
    },
};

const baseListResourcesRequest: object = { logGroupId: '', type: '' };

export const ListResourcesRequest = {
    encode(
        message: ListResourcesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListResourcesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListResourcesRequest } as ListResourcesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListResourcesRequest {
        const message = { ...baseListResourcesRequest } as ListResourcesRequest;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        } else {
            message.type = '';
        }
        return message;
    },

    toJSON(message: ListResourcesRequest): unknown {
        const obj: any = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListResourcesRequest>
    ): ListResourcesRequest {
        const message = { ...baseListResourcesRequest } as ListResourcesRequest;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = '';
        }
        return message;
    },
};

const baseListResourcesResponse: object = {};

export const ListResourcesResponse = {
    encode(
        message: ListResourcesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.resources) {
            LogGroupResource.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListResourcesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListResourcesResponse,
        } as ListResourcesResponse;
        message.resources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(
                        LogGroupResource.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListResourcesResponse {
        const message = {
            ...baseListResourcesResponse,
        } as ListResourcesResponse;
        message.resources = [];
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(LogGroupResource.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ListResourcesResponse): unknown {
        const obj: any = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) =>
                e ? LogGroupResource.toJSON(e) : undefined
            );
        } else {
            obj.resources = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListResourcesResponse>
    ): ListResourcesResponse {
        const message = {
            ...baseListResourcesResponse,
        } as ListResourcesResponse;
        message.resources = [];
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(LogGroupResource.fromPartial(e));
            }
        }
        return message;
    },
};

const baseListOperationsRequest: object = {
    logGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListOperationsRequest = {
    encode(
        message: ListOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
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
    ): ListOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOperationsRequest,
        } as ListOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
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

    fromJSON(object: any): ListOperationsRequest {
        const message = {
            ...baseListOperationsRequest,
        } as ListOperationsRequest;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
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

    toJSON(message: ListOperationsRequest): unknown {
        const obj: any = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListOperationsRequest>
    ): ListOperationsRequest {
        const message = {
            ...baseListOperationsRequest,
        } as ListOperationsRequest;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
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

const baseListOperationsResponse: object = { nextPageToken: '' };

export const ListOperationsResponse = {
    encode(
        message: ListOperationsResponse,
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
    ): ListOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOperationsResponse,
        } as ListOperationsResponse;
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

    fromJSON(object: any): ListOperationsResponse {
        const message = {
            ...baseListOperationsResponse,
        } as ListOperationsResponse;
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

    toJSON(message: ListOperationsResponse): unknown {
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
        object: DeepPartial<ListOperationsResponse>
    ): ListOperationsResponse {
        const message = {
            ...baseListOperationsResponse,
        } as ListOperationsResponse;
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

const baseGetLogGroupStatsResponse: object = {
    logGroupId: '',
    bytes: 0,
    records: 0,
};

export const GetLogGroupStatsResponse = {
    encode(
        message: GetLogGroupStatsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
        }
        if (message.bytes !== 0) {
            writer.uint32(16).int64(message.bytes);
        }
        if (message.records !== 0) {
            writer.uint32(24).int64(message.records);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetLogGroupStatsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetLogGroupStatsResponse,
        } as GetLogGroupStatsResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.bytes = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.records = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetLogGroupStatsResponse {
        const message = {
            ...baseGetLogGroupStatsResponse,
        } as GetLogGroupStatsResponse;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        if (object.bytes !== undefined && object.bytes !== null) {
            message.bytes = Number(object.bytes);
        } else {
            message.bytes = 0;
        }
        if (object.records !== undefined && object.records !== null) {
            message.records = Number(object.records);
        } else {
            message.records = 0;
        }
        return message;
    },

    toJSON(message: GetLogGroupStatsResponse): unknown {
        const obj: any = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        message.bytes !== undefined && (obj.bytes = message.bytes);
        message.records !== undefined && (obj.records = message.records);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetLogGroupStatsResponse>
    ): GetLogGroupStatsResponse {
        const message = {
            ...baseGetLogGroupStatsResponse,
        } as GetLogGroupStatsResponse;
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        if (object.bytes !== undefined && object.bytes !== null) {
            message.bytes = object.bytes;
        } else {
            message.bytes = 0;
        }
        if (object.records !== undefined && object.records !== null) {
            message.records = object.records;
        } else {
            message.records = 0;
        }
        return message;
    },
};

/** A set of methods for managing log groups. */
export const LogGroupServiceService = {
    /**
     * Returns the specified log group.
     *
     * To get the list of all available log groups, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.logging.v1.LogGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetLogGroupRequest) =>
            Buffer.from(GetLogGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetLogGroupRequest.decode(value),
        responseSerialize: (value: LogGroup) =>
            Buffer.from(LogGroup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => LogGroup.decode(value),
    },
    /** Returns stats for the specified log group. */
    stats: {
        path: '/yandex.cloud.logging.v1.LogGroupService/Stats',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetLogGroupStatsRequest) =>
            Buffer.from(GetLogGroupStatsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetLogGroupStatsRequest.decode(value),
        responseSerialize: (value: GetLogGroupStatsResponse) =>
            Buffer.from(GetLogGroupStatsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            GetLogGroupStatsResponse.decode(value),
    },
    /** Retrieves the list of log groups in the specified folder. */
    list: {
        path: '/yandex.cloud.logging.v1.LogGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListLogGroupsRequest) =>
            Buffer.from(ListLogGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListLogGroupsRequest.decode(value),
        responseSerialize: (value: ListLogGroupsResponse) =>
            Buffer.from(ListLogGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListLogGroupsResponse.decode(value),
    },
    /** Creates a log group in the specified folder. */
    create: {
        path: '/yandex.cloud.logging.v1.LogGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateLogGroupRequest) =>
            Buffer.from(CreateLogGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateLogGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified log group. */
    update: {
        path: '/yandex.cloud.logging.v1.LogGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateLogGroupRequest) =>
            Buffer.from(UpdateLogGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateLogGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified log group. */
    delete: {
        path: '/yandex.cloud.logging.v1.LogGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteLogGroupRequest) =>
            Buffer.from(DeleteLogGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteLogGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the resources (type and IDs) in the specified log group. */
    listResources: {
        path: '/yandex.cloud.logging.v1.LogGroupService/ListResources',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListResourcesRequest) =>
            Buffer.from(ListResourcesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListResourcesRequest.decode(value),
        responseSerialize: (value: ListResourcesResponse) =>
            Buffer.from(ListResourcesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListResourcesResponse.decode(value),
    },
    /** Lists operations for the specified log group. */
    listOperations: {
        path: '/yandex.cloud.logging.v1.LogGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOperationsRequest) =>
            Buffer.from(ListOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListOperationsRequest.decode(value),
        responseSerialize: (value: ListOperationsResponse) =>
            Buffer.from(ListOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified log group. */
    listAccessBindings: {
        path: '/yandex.cloud.logging.v1.LogGroupService/ListAccessBindings',
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
    /** Sets access bindings for the specified log group. */
    setAccessBindings: {
        path: '/yandex.cloud.logging.v1.LogGroupService/SetAccessBindings',
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
    /** Updates access bindings for the specified log group. */
    updateAccessBindings: {
        path: '/yandex.cloud.logging.v1.LogGroupService/UpdateAccessBindings',
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
} as const;

export interface LogGroupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified log group.
     *
     * To get the list of all available log groups, make a [List] request.
     */
    get: handleUnaryCall<GetLogGroupRequest, LogGroup>;
    /** Returns stats for the specified log group. */
    stats: handleUnaryCall<GetLogGroupStatsRequest, GetLogGroupStatsResponse>;
    /** Retrieves the list of log groups in the specified folder. */
    list: handleUnaryCall<ListLogGroupsRequest, ListLogGroupsResponse>;
    /** Creates a log group in the specified folder. */
    create: handleUnaryCall<CreateLogGroupRequest, Operation>;
    /** Updates the specified log group. */
    update: handleUnaryCall<UpdateLogGroupRequest, Operation>;
    /** Deletes the specified log group. */
    delete: handleUnaryCall<DeleteLogGroupRequest, Operation>;
    /** Retrieves the resources (type and IDs) in the specified log group. */
    listResources: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
    /** Lists operations for the specified log group. */
    listOperations: handleUnaryCall<
        ListOperationsRequest,
        ListOperationsResponse
    >;
    /** Lists existing access bindings for the specified log group. */
    listAccessBindings: handleUnaryCall<
        ListAccessBindingsRequest,
        ListAccessBindingsResponse
    >;
    /** Sets access bindings for the specified log group. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified log group. */
    updateAccessBindings: handleUnaryCall<
        UpdateAccessBindingsRequest,
        Operation
    >;
}

export interface LogGroupServiceClient extends Client {
    /**
     * Returns the specified log group.
     *
     * To get the list of all available log groups, make a [List] request.
     */
    get(
        request: GetLogGroupRequest,
        callback: (error: ServiceError | null, response: LogGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetLogGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: LogGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetLogGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: LogGroup) => void
    ): ClientUnaryCall;
    /** Returns stats for the specified log group. */
    stats(
        request: GetLogGroupStatsRequest,
        callback: (
            error: ServiceError | null,
            response: GetLogGroupStatsResponse
        ) => void
    ): ClientUnaryCall;
    stats(
        request: GetLogGroupStatsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: GetLogGroupStatsResponse
        ) => void
    ): ClientUnaryCall;
    stats(
        request: GetLogGroupStatsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: GetLogGroupStatsResponse
        ) => void
    ): ClientUnaryCall;
    /** Retrieves the list of log groups in the specified folder. */
    list(
        request: ListLogGroupsRequest,
        callback: (
            error: ServiceError | null,
            response: ListLogGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListLogGroupsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListLogGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListLogGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListLogGroupsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a log group in the specified folder. */
    create(
        request: CreateLogGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateLogGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateLogGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified log group. */
    update(
        request: UpdateLogGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateLogGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateLogGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified log group. */
    delete(
        request: DeleteLogGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteLogGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteLogGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Retrieves the resources (type and IDs) in the specified log group. */
    listResources(
        request: ListResourcesRequest,
        callback: (
            error: ServiceError | null,
            response: ListResourcesResponse
        ) => void
    ): ClientUnaryCall;
    listResources(
        request: ListResourcesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListResourcesResponse
        ) => void
    ): ClientUnaryCall;
    listResources(
        request: ListResourcesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListResourcesResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified log group. */
    listOperations(
        request: ListOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists existing access bindings for the specified log group. */
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
    /** Sets access bindings for the specified log group. */
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
    /** Updates access bindings for the specified log group. */
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
}

export const LogGroupServiceClient = makeGenericClientConstructor(
    LogGroupServiceService,
    'yandex.cloud.logging.v1.LogGroupService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): LogGroupServiceClient;
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
