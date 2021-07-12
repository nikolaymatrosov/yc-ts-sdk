/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Snapshot } from '../../../../yandex/cloud/compute/v1/snapshot';
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

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface GetSnapshotRequest {
    /**
     * ID of the Snapshot resource to return.
     * To get the snapshot ID, use a [SnapshotService.List] request.
     */
    snapshotId: string;
}

export interface ListSnapshotsRequest {
    /**
     * ID of the folder to list snapshots in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListSnapshotsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSnapshotsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Snapshot.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z]([-a-z0-9]{,61}[a-z0-9])?$`.
     */
    filter: string;
}

export interface ListSnapshotsResponse {
    /** List of snapshots. */
    snapshots: Snapshot[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSnapshotsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListSnapshotsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateSnapshotRequest {
    /**
     * ID of the folder to create a snapshot in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * ID of the disk to create the snapshot from.
     * To get the disk ID use a [yandex.cloud.compute.v1.DiskService.List] request.
     */
    diskId: string;
    /** Name of the snapshot. */
    name: string;
    /** Description of the snapshot. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
}

export interface CreateSnapshotRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateSnapshotMetadata {
    /** ID of the snapshot that is being created. */
    snapshotId: string;
    /** ID of the source disk used to create this snapshot. */
    diskId: string;
}

export interface UpdateSnapshotRequest {
    /**
     * ID of the Snapshot resource to update.
     * To get the snapshot ID use a [SnapshotService.List] request.
     */
    snapshotId: string;
    /** Field mask that specifies which fields of the Snapshot resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the snapshot. */
    name: string;
    /** Description of the snapshot. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
}

export interface UpdateSnapshotRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateSnapshotMetadata {
    /** ID of the Snapshot resource that is being updated. */
    snapshotId: string;
}

export interface DeleteSnapshotRequest {
    /**
     * ID of the snapshot to delete.
     * To get the snapshot ID, use a [SnapshotService.List] request.
     */
    snapshotId: string;
}

export interface DeleteSnapshotMetadata {
    /** ID of the snapshot that is being deleted. */
    snapshotId: string;
}

export interface ListSnapshotOperationsRequest {
    /** ID of the Snapshot resource to list operations for. */
    snapshotId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListSnapshotOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSnapshotOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListSnapshotOperationsResponse {
    /** List of operations for the specified snapshot. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSnapshotOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListSnapshotOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetSnapshotRequest: object = { snapshotId: '' };

export const GetSnapshotRequest = {
    encode(
        message: GetSnapshotRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetSnapshotRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSnapshotRequest } as GetSnapshotRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSnapshotRequest {
        const message = { ...baseGetSnapshotRequest } as GetSnapshotRequest;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        } else {
            message.snapshotId = '';
        }
        return message;
    },

    toJSON(message: GetSnapshotRequest): unknown {
        const obj: any = {};
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetSnapshotRequest>): GetSnapshotRequest {
        const message = { ...baseGetSnapshotRequest } as GetSnapshotRequest;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        } else {
            message.snapshotId = '';
        }
        return message;
    },
};

const baseListSnapshotsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListSnapshotsRequest = {
    encode(
        message: ListSnapshotsRequest,
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
    ): ListSnapshotsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSnapshotsRequest } as ListSnapshotsRequest;
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

    fromJSON(object: any): ListSnapshotsRequest {
        const message = { ...baseListSnapshotsRequest } as ListSnapshotsRequest;
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

    toJSON(message: ListSnapshotsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListSnapshotsRequest>
    ): ListSnapshotsRequest {
        const message = { ...baseListSnapshotsRequest } as ListSnapshotsRequest;
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

const baseListSnapshotsResponse: object = { nextPageToken: '' };

export const ListSnapshotsResponse = {
    encode(
        message: ListSnapshotsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.snapshots) {
            Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListSnapshotsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSnapshotsResponse,
        } as ListSnapshotsResponse;
        message.snapshots = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(
                        Snapshot.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListSnapshotsResponse {
        const message = {
            ...baseListSnapshotsResponse,
        } as ListSnapshotsResponse;
        message.snapshots = [];
        if (object.snapshots !== undefined && object.snapshots !== null) {
            for (const e of object.snapshots) {
                message.snapshots.push(Snapshot.fromJSON(e));
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

    toJSON(message: ListSnapshotsResponse): unknown {
        const obj: any = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map((e) =>
                e ? Snapshot.toJSON(e) : undefined
            );
        } else {
            obj.snapshots = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListSnapshotsResponse>
    ): ListSnapshotsResponse {
        const message = {
            ...baseListSnapshotsResponse,
        } as ListSnapshotsResponse;
        message.snapshots = [];
        if (object.snapshots !== undefined && object.snapshots !== null) {
            for (const e of object.snapshots) {
                message.snapshots.push(Snapshot.fromPartial(e));
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

const baseCreateSnapshotRequest: object = {
    folderId: '',
    diskId: '',
    name: '',
    description: '',
};

export const CreateSnapshotRequest = {
    encode(
        message: CreateSnapshotRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.diskId !== '') {
            writer.uint32(18).string(message.diskId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateSnapshotRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateSnapshotRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSnapshotRequest,
        } as CreateSnapshotRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.diskId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = CreateSnapshotRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSnapshotRequest {
        const message = {
            ...baseCreateSnapshotRequest,
        } as CreateSnapshotRequest;
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        } else {
            message.diskId = '';
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
        return message;
    },

    toJSON(message: CreateSnapshotRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateSnapshotRequest>
    ): CreateSnapshotRequest {
        const message = {
            ...baseCreateSnapshotRequest,
        } as CreateSnapshotRequest;
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        } else {
            message.diskId = '';
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
        return message;
    },
};

const baseCreateSnapshotRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateSnapshotRequest_LabelsEntry = {
    encode(
        message: CreateSnapshotRequest_LabelsEntry,
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
    ): CreateSnapshotRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSnapshotRequest_LabelsEntry,
        } as CreateSnapshotRequest_LabelsEntry;
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

    fromJSON(object: any): CreateSnapshotRequest_LabelsEntry {
        const message = {
            ...baseCreateSnapshotRequest_LabelsEntry,
        } as CreateSnapshotRequest_LabelsEntry;
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

    toJSON(message: CreateSnapshotRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateSnapshotRequest_LabelsEntry>
    ): CreateSnapshotRequest_LabelsEntry {
        const message = {
            ...baseCreateSnapshotRequest_LabelsEntry,
        } as CreateSnapshotRequest_LabelsEntry;
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

const baseCreateSnapshotMetadata: object = { snapshotId: '', diskId: '' };

export const CreateSnapshotMetadata = {
    encode(
        message: CreateSnapshotMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
        }
        if (message.diskId !== '') {
            writer.uint32(18).string(message.diskId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateSnapshotMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSnapshotMetadata,
        } as CreateSnapshotMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                case 2:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSnapshotMetadata {
        const message = {
            ...baseCreateSnapshotMetadata,
        } as CreateSnapshotMetadata;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        } else {
            message.snapshotId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        } else {
            message.diskId = '';
        }
        return message;
    },

    toJSON(message: CreateSnapshotMetadata): unknown {
        const obj: any = {};
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateSnapshotMetadata>
    ): CreateSnapshotMetadata {
        const message = {
            ...baseCreateSnapshotMetadata,
        } as CreateSnapshotMetadata;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        } else {
            message.snapshotId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        } else {
            message.diskId = '';
        }
        return message;
    },
};

const baseUpdateSnapshotRequest: object = {
    snapshotId: '',
    name: '',
    description: '',
};

export const UpdateSnapshotRequest = {
    encode(
        message: UpdateSnapshotRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
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
            UpdateSnapshotRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSnapshotRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSnapshotRequest,
        } as UpdateSnapshotRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
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
                    const entry5 = UpdateSnapshotRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSnapshotRequest {
        const message = {
            ...baseUpdateSnapshotRequest,
        } as UpdateSnapshotRequest;
        message.labels = {};
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        } else {
            message.snapshotId = '';
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
        return message;
    },

    toJSON(message: UpdateSnapshotRequest): unknown {
        const obj: any = {};
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
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
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSnapshotRequest>
    ): UpdateSnapshotRequest {
        const message = {
            ...baseUpdateSnapshotRequest,
        } as UpdateSnapshotRequest;
        message.labels = {};
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        } else {
            message.snapshotId = '';
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
        return message;
    },
};

const baseUpdateSnapshotRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateSnapshotRequest_LabelsEntry = {
    encode(
        message: UpdateSnapshotRequest_LabelsEntry,
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
    ): UpdateSnapshotRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSnapshotRequest_LabelsEntry,
        } as UpdateSnapshotRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateSnapshotRequest_LabelsEntry {
        const message = {
            ...baseUpdateSnapshotRequest_LabelsEntry,
        } as UpdateSnapshotRequest_LabelsEntry;
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

    toJSON(message: UpdateSnapshotRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSnapshotRequest_LabelsEntry>
    ): UpdateSnapshotRequest_LabelsEntry {
        const message = {
            ...baseUpdateSnapshotRequest_LabelsEntry,
        } as UpdateSnapshotRequest_LabelsEntry;
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

const baseUpdateSnapshotMetadata: object = { snapshotId: '' };

export const UpdateSnapshotMetadata = {
    encode(
        message: UpdateSnapshotMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSnapshotMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSnapshotMetadata,
        } as UpdateSnapshotMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSnapshotMetadata {
        const message = {
            ...baseUpdateSnapshotMetadata,
        } as UpdateSnapshotMetadata;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        } else {
            message.snapshotId = '';
        }
        return message;
    },

    toJSON(message: UpdateSnapshotMetadata): unknown {
        const obj: any = {};
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSnapshotMetadata>
    ): UpdateSnapshotMetadata {
        const message = {
            ...baseUpdateSnapshotMetadata,
        } as UpdateSnapshotMetadata;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        } else {
            message.snapshotId = '';
        }
        return message;
    },
};

const baseDeleteSnapshotRequest: object = { snapshotId: '' };

export const DeleteSnapshotRequest = {
    encode(
        message: DeleteSnapshotRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteSnapshotRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSnapshotRequest,
        } as DeleteSnapshotRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSnapshotRequest {
        const message = {
            ...baseDeleteSnapshotRequest,
        } as DeleteSnapshotRequest;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        } else {
            message.snapshotId = '';
        }
        return message;
    },

    toJSON(message: DeleteSnapshotRequest): unknown {
        const obj: any = {};
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteSnapshotRequest>
    ): DeleteSnapshotRequest {
        const message = {
            ...baseDeleteSnapshotRequest,
        } as DeleteSnapshotRequest;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        } else {
            message.snapshotId = '';
        }
        return message;
    },
};

const baseDeleteSnapshotMetadata: object = { snapshotId: '' };

export const DeleteSnapshotMetadata = {
    encode(
        message: DeleteSnapshotMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteSnapshotMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSnapshotMetadata,
        } as DeleteSnapshotMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSnapshotMetadata {
        const message = {
            ...baseDeleteSnapshotMetadata,
        } as DeleteSnapshotMetadata;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        } else {
            message.snapshotId = '';
        }
        return message;
    },

    toJSON(message: DeleteSnapshotMetadata): unknown {
        const obj: any = {};
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteSnapshotMetadata>
    ): DeleteSnapshotMetadata {
        const message = {
            ...baseDeleteSnapshotMetadata,
        } as DeleteSnapshotMetadata;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        } else {
            message.snapshotId = '';
        }
        return message;
    },
};

const baseListSnapshotOperationsRequest: object = {
    snapshotId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListSnapshotOperationsRequest = {
    encode(
        message: ListSnapshotOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
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
    ): ListSnapshotOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSnapshotOperationsRequest,
        } as ListSnapshotOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
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

    fromJSON(object: any): ListSnapshotOperationsRequest {
        const message = {
            ...baseListSnapshotOperationsRequest,
        } as ListSnapshotOperationsRequest;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        } else {
            message.snapshotId = '';
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

    toJSON(message: ListSnapshotOperationsRequest): unknown {
        const obj: any = {};
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListSnapshotOperationsRequest>
    ): ListSnapshotOperationsRequest {
        const message = {
            ...baseListSnapshotOperationsRequest,
        } as ListSnapshotOperationsRequest;
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        } else {
            message.snapshotId = '';
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

const baseListSnapshotOperationsResponse: object = { nextPageToken: '' };

export const ListSnapshotOperationsResponse = {
    encode(
        message: ListSnapshotOperationsResponse,
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
    ): ListSnapshotOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSnapshotOperationsResponse,
        } as ListSnapshotOperationsResponse;
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

    fromJSON(object: any): ListSnapshotOperationsResponse {
        const message = {
            ...baseListSnapshotOperationsResponse,
        } as ListSnapshotOperationsResponse;
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

    toJSON(message: ListSnapshotOperationsResponse): unknown {
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
        object: DeepPartial<ListSnapshotOperationsResponse>
    ): ListSnapshotOperationsResponse {
        const message = {
            ...baseListSnapshotOperationsResponse,
        } as ListSnapshotOperationsResponse;
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

/** A set of methods for managing Snapshot resources. */
export const SnapshotServiceService = {
    /**
     * Returns the specified Snapshot resource.
     *
     * To get the list of available Snapshot resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.SnapshotService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetSnapshotRequest) =>
            Buffer.from(GetSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetSnapshotRequest.decode(value),
        responseSerialize: (value: Snapshot) =>
            Buffer.from(Snapshot.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Snapshot.decode(value),
    },
    /** Retrieves the list of Snapshot resources in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.SnapshotService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSnapshotsRequest) =>
            Buffer.from(ListSnapshotsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListSnapshotsRequest.decode(value),
        responseSerialize: (value: ListSnapshotsResponse) =>
            Buffer.from(ListSnapshotsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListSnapshotsResponse.decode(value),
    },
    /** Creates a snapshot of the specified disk. */
    create: {
        path: '/yandex.cloud.compute.v1.SnapshotService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateSnapshotRequest) =>
            Buffer.from(CreateSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateSnapshotRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates the specified snapshot.
     *
     * Values of omitted parameters are not changed.
     */
    update: {
        path: '/yandex.cloud.compute.v1.SnapshotService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateSnapshotRequest) =>
            Buffer.from(UpdateSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateSnapshotRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Deletes the specified snapshot.
     *
     * Deleting a snapshot removes its data permanently and is irreversible.
     */
    delete: {
        path: '/yandex.cloud.compute.v1.SnapshotService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteSnapshotRequest) =>
            Buffer.from(DeleteSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteSnapshotRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified snapshot. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.SnapshotService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSnapshotOperationsRequest) =>
            Buffer.from(ListSnapshotOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListSnapshotOperationsRequest.decode(value),
        responseSerialize: (value: ListSnapshotOperationsResponse) =>
            Buffer.from(ListSnapshotOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListSnapshotOperationsResponse.decode(value),
    },
} as const;

export interface SnapshotServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Snapshot resource.
     *
     * To get the list of available Snapshot resources, make a [List] request.
     */
    get: handleUnaryCall<GetSnapshotRequest, Snapshot>;
    /** Retrieves the list of Snapshot resources in the specified folder. */
    list: handleUnaryCall<ListSnapshotsRequest, ListSnapshotsResponse>;
    /** Creates a snapshot of the specified disk. */
    create: handleUnaryCall<CreateSnapshotRequest, Operation>;
    /**
     * Updates the specified snapshot.
     *
     * Values of omitted parameters are not changed.
     */
    update: handleUnaryCall<UpdateSnapshotRequest, Operation>;
    /**
     * Deletes the specified snapshot.
     *
     * Deleting a snapshot removes its data permanently and is irreversible.
     */
    delete: handleUnaryCall<DeleteSnapshotRequest, Operation>;
    /** Lists operations for the specified snapshot. */
    listOperations: handleUnaryCall<
        ListSnapshotOperationsRequest,
        ListSnapshotOperationsResponse
    >;
}

export interface SnapshotServiceClient extends Client {
    /**
     * Returns the specified Snapshot resource.
     *
     * To get the list of available Snapshot resources, make a [List] request.
     */
    get(
        request: GetSnapshotRequest,
        callback: (error: ServiceError | null, response: Snapshot) => void
    ): ClientUnaryCall;
    get(
        request: GetSnapshotRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Snapshot) => void
    ): ClientUnaryCall;
    get(
        request: GetSnapshotRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Snapshot) => void
    ): ClientUnaryCall;
    /** Retrieves the list of Snapshot resources in the specified folder. */
    list(
        request: ListSnapshotsRequest,
        callback: (
            error: ServiceError | null,
            response: ListSnapshotsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListSnapshotsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListSnapshotsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListSnapshotsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListSnapshotsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a snapshot of the specified disk. */
    create(
        request: CreateSnapshotRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateSnapshotRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateSnapshotRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Updates the specified snapshot.
     *
     * Values of omitted parameters are not changed.
     */
    update(
        request: UpdateSnapshotRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateSnapshotRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateSnapshotRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Deletes the specified snapshot.
     *
     * Deleting a snapshot removes its data permanently and is irreversible.
     */
    delete(
        request: DeleteSnapshotRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteSnapshotRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteSnapshotRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified snapshot. */
    listOperations(
        request: ListSnapshotOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListSnapshotOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListSnapshotOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListSnapshotOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListSnapshotOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListSnapshotOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const SnapshotServiceClient = makeGenericClientConstructor(
    SnapshotServiceService,
    'yandex.cloud.compute.v1.SnapshotService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): SnapshotServiceClient;
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
