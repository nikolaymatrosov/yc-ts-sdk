/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Disk } from '../../../../yandex/cloud/compute/v1/disk';
import {
    DiskPlacementGroup,
    DiskSpreadPlacementStrategy,
} from '../../../../yandex/cloud/compute/v1/disk_placement_group';
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

export interface GetDiskPlacementGroupRequest {
    /**
     * ID of the placement group to return.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
}

export interface ListDiskPlacementGroupsRequest {
    /**
     * ID of the folder to list placement groups in.
     * To get the folder ID, use [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDiskPlacementGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListDiskPlacementGroupsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [DiskPlacementGroup.name] field.
     */
    filter: string;
}

export interface ListDiskPlacementGroupsResponse {
    /** Lists placement groups for the specified folder. */
    diskPlacementGroups: DiskPlacementGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDiskPlacementGroupsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListDiskPlacementGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateDiskPlacementGroupRequest {
    /**
     * ID of the folder to create a placement group in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the placement group. */
    name: string;
    /** Description of the placement group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /**
     * ID of the availability zone where the placement group resides.
     * To get a list of available zones use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /** Distribute disks over distinct failure domains. */
    spreadPlacementStrategy: DiskSpreadPlacementStrategy | undefined;
}

export interface CreateDiskPlacementGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateDiskPlacementGroupMetadata {
    /** ID of the placement group that is being created. */
    diskPlacementGroupId: string;
}

export interface UpdateDiskPlacementGroupRequest {
    /**
     * ID of the placement group to update.
     * To get the placement group ID, use an [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
    /** Field mask that specifies which fields of the DiskPlacementGroup resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the placement group. */
    name: string;
    /** Description of the placement group. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * The existing set of `labels` is completely replaced by the provided set.
     */
    labels: { [key: string]: string };
}

export interface UpdateDiskPlacementGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateDiskPlacementGroupMetadata {
    /** ID of the placement group that is being updated. */
    diskPlacementGroupId: string;
}

export interface DeleteDiskPlacementGroupRequest {
    /**
     * ID of the placement group to delete.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
}

export interface DeleteDiskPlacementGroupMetadata {
    /** ID of the placement group that is being deleted. */
    diskPlacementGroupId: string;
}

export interface ListDiskPlacementGroupDisksRequest {
    /**
     * ID of the placement group to list disks for.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDiskPlacementGroupDisksResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListDiskPlacementGroupDisksResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListDiskPlacementGroupDisksResponse {
    /** Lists disks for the specified placement group. */
    disks: Disk[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListDiskPlacementGroupDisksRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListDiskPlacementGroupDisksRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListDiskPlacementGroupOperationsRequest {
    /**
     * ID of the placement group to list operations for.
     * To get the placement group ID, use [DiskPlacementGroupService.List] request.
     */
    diskPlacementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListDiskPlacementGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDiskPlacementGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListDiskPlacementGroupOperationsResponse {
    /** List of operations for the specified placement group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDiskPlacementGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListDiskPlacementGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetDiskPlacementGroupRequest: object = { diskPlacementGroupId: '' };

export const GetDiskPlacementGroupRequest = {
    encode(
        message: GetDiskPlacementGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetDiskPlacementGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetDiskPlacementGroupRequest,
        } as GetDiskPlacementGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDiskPlacementGroupRequest {
        const message = {
            ...baseGetDiskPlacementGroupRequest,
        } as GetDiskPlacementGroupRequest;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        } else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },

    toJSON(message: GetDiskPlacementGroupRequest): unknown {
        const obj: any = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetDiskPlacementGroupRequest>
    ): GetDiskPlacementGroupRequest {
        const message = {
            ...baseGetDiskPlacementGroupRequest,
        } as GetDiskPlacementGroupRequest;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        } else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
};

const baseListDiskPlacementGroupsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListDiskPlacementGroupsRequest = {
    encode(
        message: ListDiskPlacementGroupsRequest,
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
    ): ListDiskPlacementGroupsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDiskPlacementGroupsRequest,
        } as ListDiskPlacementGroupsRequest;
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

    fromJSON(object: any): ListDiskPlacementGroupsRequest {
        const message = {
            ...baseListDiskPlacementGroupsRequest,
        } as ListDiskPlacementGroupsRequest;
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

    toJSON(message: ListDiskPlacementGroupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDiskPlacementGroupsRequest>
    ): ListDiskPlacementGroupsRequest {
        const message = {
            ...baseListDiskPlacementGroupsRequest,
        } as ListDiskPlacementGroupsRequest;
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

const baseListDiskPlacementGroupsResponse: object = { nextPageToken: '' };

export const ListDiskPlacementGroupsResponse = {
    encode(
        message: ListDiskPlacementGroupsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.diskPlacementGroups) {
            DiskPlacementGroup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDiskPlacementGroupsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDiskPlacementGroupsResponse,
        } as ListDiskPlacementGroupsResponse;
        message.diskPlacementGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroups.push(
                        DiskPlacementGroup.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListDiskPlacementGroupsResponse {
        const message = {
            ...baseListDiskPlacementGroupsResponse,
        } as ListDiskPlacementGroupsResponse;
        message.diskPlacementGroups = [];
        if (
            object.diskPlacementGroups !== undefined &&
            object.diskPlacementGroups !== null
        ) {
            for (const e of object.diskPlacementGroups) {
                message.diskPlacementGroups.push(
                    DiskPlacementGroup.fromJSON(e)
                );
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

    toJSON(message: ListDiskPlacementGroupsResponse): unknown {
        const obj: any = {};
        if (message.diskPlacementGroups) {
            obj.diskPlacementGroups = message.diskPlacementGroups.map((e) =>
                e ? DiskPlacementGroup.toJSON(e) : undefined
            );
        } else {
            obj.diskPlacementGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDiskPlacementGroupsResponse>
    ): ListDiskPlacementGroupsResponse {
        const message = {
            ...baseListDiskPlacementGroupsResponse,
        } as ListDiskPlacementGroupsResponse;
        message.diskPlacementGroups = [];
        if (
            object.diskPlacementGroups !== undefined &&
            object.diskPlacementGroups !== null
        ) {
            for (const e of object.diskPlacementGroups) {
                message.diskPlacementGroups.push(
                    DiskPlacementGroup.fromPartial(e)
                );
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

const baseCreateDiskPlacementGroupRequest: object = {
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
};

export const CreateDiskPlacementGroupRequest = {
    encode(
        message: CreateDiskPlacementGroupRequest,
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
            CreateDiskPlacementGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.spreadPlacementStrategy !== undefined) {
            DiskSpreadPlacementStrategy.encode(
                message.spreadPlacementStrategy,
                writer.uint32(50).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateDiskPlacementGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDiskPlacementGroupRequest,
        } as CreateDiskPlacementGroupRequest;
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
                    const entry4 =
                        CreateDiskPlacementGroupRequest_LabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zoneId = reader.string();
                    break;
                case 6:
                    message.spreadPlacementStrategy =
                        DiskSpreadPlacementStrategy.decode(
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

    fromJSON(object: any): CreateDiskPlacementGroupRequest {
        const message = {
            ...baseCreateDiskPlacementGroupRequest,
        } as CreateDiskPlacementGroupRequest;
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (
            object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null
        ) {
            message.spreadPlacementStrategy =
                DiskSpreadPlacementStrategy.fromJSON(
                    object.spreadPlacementStrategy
                );
        } else {
            message.spreadPlacementStrategy = undefined;
        }
        return message;
    },

    toJSON(message: CreateDiskPlacementGroupRequest): unknown {
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.spreadPlacementStrategy !== undefined &&
            (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
                ? DiskSpreadPlacementStrategy.toJSON(
                      message.spreadPlacementStrategy
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDiskPlacementGroupRequest>
    ): CreateDiskPlacementGroupRequest {
        const message = {
            ...baseCreateDiskPlacementGroupRequest,
        } as CreateDiskPlacementGroupRequest;
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (
            object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null
        ) {
            message.spreadPlacementStrategy =
                DiskSpreadPlacementStrategy.fromPartial(
                    object.spreadPlacementStrategy
                );
        } else {
            message.spreadPlacementStrategy = undefined;
        }
        return message;
    },
};

const baseCreateDiskPlacementGroupRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const CreateDiskPlacementGroupRequest_LabelsEntry = {
    encode(
        message: CreateDiskPlacementGroupRequest_LabelsEntry,
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
    ): CreateDiskPlacementGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDiskPlacementGroupRequest_LabelsEntry,
        } as CreateDiskPlacementGroupRequest_LabelsEntry;
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

    fromJSON(object: any): CreateDiskPlacementGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateDiskPlacementGroupRequest_LabelsEntry,
        } as CreateDiskPlacementGroupRequest_LabelsEntry;
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

    toJSON(message: CreateDiskPlacementGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDiskPlacementGroupRequest_LabelsEntry>
    ): CreateDiskPlacementGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateDiskPlacementGroupRequest_LabelsEntry,
        } as CreateDiskPlacementGroupRequest_LabelsEntry;
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

const baseCreateDiskPlacementGroupMetadata: object = {
    diskPlacementGroupId: '',
};

export const CreateDiskPlacementGroupMetadata = {
    encode(
        message: CreateDiskPlacementGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateDiskPlacementGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDiskPlacementGroupMetadata,
        } as CreateDiskPlacementGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDiskPlacementGroupMetadata {
        const message = {
            ...baseCreateDiskPlacementGroupMetadata,
        } as CreateDiskPlacementGroupMetadata;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        } else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },

    toJSON(message: CreateDiskPlacementGroupMetadata): unknown {
        const obj: any = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDiskPlacementGroupMetadata>
    ): CreateDiskPlacementGroupMetadata {
        const message = {
            ...baseCreateDiskPlacementGroupMetadata,
        } as CreateDiskPlacementGroupMetadata;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        } else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
};

const baseUpdateDiskPlacementGroupRequest: object = {
    diskPlacementGroupId: '',
    name: '',
    description: '',
};

export const UpdateDiskPlacementGroupRequest = {
    encode(
        message: UpdateDiskPlacementGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
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
            UpdateDiskPlacementGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateDiskPlacementGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDiskPlacementGroupRequest,
        } as UpdateDiskPlacementGroupRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
                        UpdateDiskPlacementGroupRequest_LabelsEntry.decode(
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

    fromJSON(object: any): UpdateDiskPlacementGroupRequest {
        const message = {
            ...baseUpdateDiskPlacementGroupRequest,
        } as UpdateDiskPlacementGroupRequest;
        message.labels = {};
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        } else {
            message.diskPlacementGroupId = '';
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

    toJSON(message: UpdateDiskPlacementGroupRequest): unknown {
        const obj: any = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
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
        object: DeepPartial<UpdateDiskPlacementGroupRequest>
    ): UpdateDiskPlacementGroupRequest {
        const message = {
            ...baseUpdateDiskPlacementGroupRequest,
        } as UpdateDiskPlacementGroupRequest;
        message.labels = {};
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        } else {
            message.diskPlacementGroupId = '';
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

const baseUpdateDiskPlacementGroupRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const UpdateDiskPlacementGroupRequest_LabelsEntry = {
    encode(
        message: UpdateDiskPlacementGroupRequest_LabelsEntry,
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
    ): UpdateDiskPlacementGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDiskPlacementGroupRequest_LabelsEntry,
        } as UpdateDiskPlacementGroupRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateDiskPlacementGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateDiskPlacementGroupRequest_LabelsEntry,
        } as UpdateDiskPlacementGroupRequest_LabelsEntry;
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

    toJSON(message: UpdateDiskPlacementGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateDiskPlacementGroupRequest_LabelsEntry>
    ): UpdateDiskPlacementGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateDiskPlacementGroupRequest_LabelsEntry,
        } as UpdateDiskPlacementGroupRequest_LabelsEntry;
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

const baseUpdateDiskPlacementGroupMetadata: object = {
    diskPlacementGroupId: '',
};

export const UpdateDiskPlacementGroupMetadata = {
    encode(
        message: UpdateDiskPlacementGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateDiskPlacementGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDiskPlacementGroupMetadata,
        } as UpdateDiskPlacementGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateDiskPlacementGroupMetadata {
        const message = {
            ...baseUpdateDiskPlacementGroupMetadata,
        } as UpdateDiskPlacementGroupMetadata;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        } else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },

    toJSON(message: UpdateDiskPlacementGroupMetadata): unknown {
        const obj: any = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateDiskPlacementGroupMetadata>
    ): UpdateDiskPlacementGroupMetadata {
        const message = {
            ...baseUpdateDiskPlacementGroupMetadata,
        } as UpdateDiskPlacementGroupMetadata;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        } else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
};

const baseDeleteDiskPlacementGroupRequest: object = {
    diskPlacementGroupId: '',
};

export const DeleteDiskPlacementGroupRequest = {
    encode(
        message: DeleteDiskPlacementGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDiskPlacementGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDiskPlacementGroupRequest,
        } as DeleteDiskPlacementGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDiskPlacementGroupRequest {
        const message = {
            ...baseDeleteDiskPlacementGroupRequest,
        } as DeleteDiskPlacementGroupRequest;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        } else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteDiskPlacementGroupRequest): unknown {
        const obj: any = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDiskPlacementGroupRequest>
    ): DeleteDiskPlacementGroupRequest {
        const message = {
            ...baseDeleteDiskPlacementGroupRequest,
        } as DeleteDiskPlacementGroupRequest;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        } else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
};

const baseDeleteDiskPlacementGroupMetadata: object = {
    diskPlacementGroupId: '',
};

export const DeleteDiskPlacementGroupMetadata = {
    encode(
        message: DeleteDiskPlacementGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDiskPlacementGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDiskPlacementGroupMetadata,
        } as DeleteDiskPlacementGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDiskPlacementGroupMetadata {
        const message = {
            ...baseDeleteDiskPlacementGroupMetadata,
        } as DeleteDiskPlacementGroupMetadata;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        } else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteDiskPlacementGroupMetadata): unknown {
        const obj: any = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDiskPlacementGroupMetadata>
    ): DeleteDiskPlacementGroupMetadata {
        const message = {
            ...baseDeleteDiskPlacementGroupMetadata,
        } as DeleteDiskPlacementGroupMetadata;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        } else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
};

const baseListDiskPlacementGroupDisksRequest: object = {
    diskPlacementGroupId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListDiskPlacementGroupDisksRequest = {
    encode(
        message: ListDiskPlacementGroupDisksRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
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
    ): ListDiskPlacementGroupDisksRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDiskPlacementGroupDisksRequest,
        } as ListDiskPlacementGroupDisksRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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

    fromJSON(object: any): ListDiskPlacementGroupDisksRequest {
        const message = {
            ...baseListDiskPlacementGroupDisksRequest,
        } as ListDiskPlacementGroupDisksRequest;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        } else {
            message.diskPlacementGroupId = '';
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

    toJSON(message: ListDiskPlacementGroupDisksRequest): unknown {
        const obj: any = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDiskPlacementGroupDisksRequest>
    ): ListDiskPlacementGroupDisksRequest {
        const message = {
            ...baseListDiskPlacementGroupDisksRequest,
        } as ListDiskPlacementGroupDisksRequest;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        } else {
            message.diskPlacementGroupId = '';
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

const baseListDiskPlacementGroupDisksResponse: object = { nextPageToken: '' };

export const ListDiskPlacementGroupDisksResponse = {
    encode(
        message: ListDiskPlacementGroupDisksResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.disks) {
            Disk.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDiskPlacementGroupDisksResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDiskPlacementGroupDisksResponse,
        } as ListDiskPlacementGroupDisksResponse;
        message.disks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disks.push(Disk.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListDiskPlacementGroupDisksResponse {
        const message = {
            ...baseListDiskPlacementGroupDisksResponse,
        } as ListDiskPlacementGroupDisksResponse;
        message.disks = [];
        if (object.disks !== undefined && object.disks !== null) {
            for (const e of object.disks) {
                message.disks.push(Disk.fromJSON(e));
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

    toJSON(message: ListDiskPlacementGroupDisksResponse): unknown {
        const obj: any = {};
        if (message.disks) {
            obj.disks = message.disks.map((e) =>
                e ? Disk.toJSON(e) : undefined
            );
        } else {
            obj.disks = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDiskPlacementGroupDisksResponse>
    ): ListDiskPlacementGroupDisksResponse {
        const message = {
            ...baseListDiskPlacementGroupDisksResponse,
        } as ListDiskPlacementGroupDisksResponse;
        message.disks = [];
        if (object.disks !== undefined && object.disks !== null) {
            for (const e of object.disks) {
                message.disks.push(Disk.fromPartial(e));
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

const baseListDiskPlacementGroupOperationsRequest: object = {
    diskPlacementGroupId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListDiskPlacementGroupOperationsRequest = {
    encode(
        message: ListDiskPlacementGroupOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
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
    ): ListDiskPlacementGroupOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDiskPlacementGroupOperationsRequest,
        } as ListDiskPlacementGroupOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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

    fromJSON(object: any): ListDiskPlacementGroupOperationsRequest {
        const message = {
            ...baseListDiskPlacementGroupOperationsRequest,
        } as ListDiskPlacementGroupOperationsRequest;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        } else {
            message.diskPlacementGroupId = '';
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

    toJSON(message: ListDiskPlacementGroupOperationsRequest): unknown {
        const obj: any = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDiskPlacementGroupOperationsRequest>
    ): ListDiskPlacementGroupOperationsRequest {
        const message = {
            ...baseListDiskPlacementGroupOperationsRequest,
        } as ListDiskPlacementGroupOperationsRequest;
        if (
            object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null
        ) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        } else {
            message.diskPlacementGroupId = '';
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

const baseListDiskPlacementGroupOperationsResponse: object = {
    nextPageToken: '',
};

export const ListDiskPlacementGroupOperationsResponse = {
    encode(
        message: ListDiskPlacementGroupOperationsResponse,
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
    ): ListDiskPlacementGroupOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDiskPlacementGroupOperationsResponse,
        } as ListDiskPlacementGroupOperationsResponse;
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

    fromJSON(object: any): ListDiskPlacementGroupOperationsResponse {
        const message = {
            ...baseListDiskPlacementGroupOperationsResponse,
        } as ListDiskPlacementGroupOperationsResponse;
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

    toJSON(message: ListDiskPlacementGroupOperationsResponse): unknown {
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
        object: DeepPartial<ListDiskPlacementGroupOperationsResponse>
    ): ListDiskPlacementGroupOperationsResponse {
        const message = {
            ...baseListDiskPlacementGroupOperationsResponse,
        } as ListDiskPlacementGroupOperationsResponse;
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

/** A set of methods for managing DiskPlacementGroup resources. */
export const DiskPlacementGroupServiceService = {
    /** Returns the specified placement group. */
    get: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDiskPlacementGroupRequest) =>
            Buffer.from(GetDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value: DiskPlacementGroup) =>
            Buffer.from(DiskPlacementGroup.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            DiskPlacementGroup.decode(value),
    },
    /** Retrieves the list of placement groups in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDiskPlacementGroupsRequest) =>
            Buffer.from(ListDiskPlacementGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListDiskPlacementGroupsRequest.decode(value),
        responseSerialize: (value: ListDiskPlacementGroupsResponse) =>
            Buffer.from(ListDiskPlacementGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDiskPlacementGroupsResponse.decode(value),
    },
    /** Creates a placement group in the specified folder. */
    create: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateDiskPlacementGroupRequest) =>
            Buffer.from(CreateDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified placement group. */
    update: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateDiskPlacementGroupRequest) =>
            Buffer.from(UpdateDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified placement group. */
    delete: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDiskPlacementGroupRequest) =>
            Buffer.from(DeleteDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists disks for the specified placement group. */
    listDisks: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/ListDisks',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDiskPlacementGroupDisksRequest) =>
            Buffer.from(
                ListDiskPlacementGroupDisksRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListDiskPlacementGroupDisksRequest.decode(value),
        responseSerialize: (value: ListDiskPlacementGroupDisksResponse) =>
            Buffer.from(
                ListDiskPlacementGroupDisksResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListDiskPlacementGroupDisksResponse.decode(value),
    },
    /** Lists operations for the specified placement group. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDiskPlacementGroupOperationsRequest) =>
            Buffer.from(
                ListDiskPlacementGroupOperationsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListDiskPlacementGroupOperationsRequest.decode(value),
        responseSerialize: (value: ListDiskPlacementGroupOperationsResponse) =>
            Buffer.from(
                ListDiskPlacementGroupOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListDiskPlacementGroupOperationsResponse.decode(value),
    },
} as const;

export interface DiskPlacementGroupServiceServer
    extends UntypedServiceImplementation {
    /** Returns the specified placement group. */
    get: handleUnaryCall<GetDiskPlacementGroupRequest, DiskPlacementGroup>;
    /** Retrieves the list of placement groups in the specified folder. */
    list: handleUnaryCall<
        ListDiskPlacementGroupsRequest,
        ListDiskPlacementGroupsResponse
    >;
    /** Creates a placement group in the specified folder. */
    create: handleUnaryCall<CreateDiskPlacementGroupRequest, Operation>;
    /** Updates the specified placement group. */
    update: handleUnaryCall<UpdateDiskPlacementGroupRequest, Operation>;
    /** Deletes the specified placement group. */
    delete: handleUnaryCall<DeleteDiskPlacementGroupRequest, Operation>;
    /** Lists disks for the specified placement group. */
    listDisks: handleUnaryCall<
        ListDiskPlacementGroupDisksRequest,
        ListDiskPlacementGroupDisksResponse
    >;
    /** Lists operations for the specified placement group. */
    listOperations: handleUnaryCall<
        ListDiskPlacementGroupOperationsRequest,
        ListDiskPlacementGroupOperationsResponse
    >;
}

export interface DiskPlacementGroupServiceClient extends Client {
    /** Returns the specified placement group. */
    get(
        request: GetDiskPlacementGroupRequest,
        callback: (
            error: ServiceError | null,
            response: DiskPlacementGroup
        ) => void
    ): ClientUnaryCall;
    get(
        request: GetDiskPlacementGroupRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: DiskPlacementGroup
        ) => void
    ): ClientUnaryCall;
    get(
        request: GetDiskPlacementGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: DiskPlacementGroup
        ) => void
    ): ClientUnaryCall;
    /** Retrieves the list of placement groups in the specified folder. */
    list(
        request: ListDiskPlacementGroupsRequest,
        callback: (
            error: ServiceError | null,
            response: ListDiskPlacementGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDiskPlacementGroupsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDiskPlacementGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDiskPlacementGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDiskPlacementGroupsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a placement group in the specified folder. */
    create(
        request: CreateDiskPlacementGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateDiskPlacementGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateDiskPlacementGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified placement group. */
    update(
        request: UpdateDiskPlacementGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateDiskPlacementGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateDiskPlacementGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified placement group. */
    delete(
        request: DeleteDiskPlacementGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteDiskPlacementGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteDiskPlacementGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists disks for the specified placement group. */
    listDisks(
        request: ListDiskPlacementGroupDisksRequest,
        callback: (
            error: ServiceError | null,
            response: ListDiskPlacementGroupDisksResponse
        ) => void
    ): ClientUnaryCall;
    listDisks(
        request: ListDiskPlacementGroupDisksRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDiskPlacementGroupDisksResponse
        ) => void
    ): ClientUnaryCall;
    listDisks(
        request: ListDiskPlacementGroupDisksRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDiskPlacementGroupDisksResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified placement group. */
    listOperations(
        request: ListDiskPlacementGroupOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListDiskPlacementGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListDiskPlacementGroupOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDiskPlacementGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListDiskPlacementGroupOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDiskPlacementGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const DiskPlacementGroupServiceClient = makeGenericClientConstructor(
    DiskPlacementGroupServiceService,
    'yandex.cloud.compute.v1.DiskPlacementGroupService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): DiskPlacementGroupServiceClient;
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
