/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Instance } from '../../../../yandex/cloud/compute/v1/instance';
import {
    PlacementGroup,
    SpreadPlacementStrategy,
} from '../../../../yandex/cloud/compute/v1/placement_group';
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

export interface GetPlacementGroupRequest {
    /**
     * ID of the placement group to return.
     *
     * To get a placement group ID make a [PlacementGroupService.List] request.
     */
    placementGroupId: string;
}

export interface ListPlacementGroupsRequest {
    /**
     * ID of the folder to list placement groups in.
     *
     * To get the folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListPlacementGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListPlacementGroupsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on the [PlacementGroup.name] field.
     */
    filter: string;
}

export interface ListPlacementGroupsResponse {
    /** Lists placement groups in the specified folder. */
    placementGroups: PlacementGroup[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListPlacementGroupsRequest.page_size], use `next_page_token` as the value
     * for the [ListPlacementGroupsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreatePlacementGroupRequest {
    /**
     * ID of the folder to create a placement group in.
     *
     * To get a folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the placement group. */
    name: string;
    /** Description of the placement group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Anti-affinity placement strategy (`spread`). Instances are distributed over distinct failure domains. */
    spreadPlacementStrategy: SpreadPlacementStrategy | undefined;
}

export interface CreatePlacementGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreatePlacementGroupMetadata {
    /** ID of the placement group that is being created. */
    placementGroupId: string;
}

export interface UpdatePlacementGroupRequest {
    /**
     * ID of the placement group to update.
     *
     * To get the placement group ID, use an [PlacementGroupService.List] request.
     */
    placementGroupId: string;
    /** Field mask that specifies which fields of the PlacementGroup resource should be updated. */
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

export interface UpdatePlacementGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdatePlacementGroupMetadata {
    /** ID of the placement group that is being updated. */
    placementGroupId: string;
}

export interface DeletePlacementGroupRequest {
    /**
     * ID of the placement group to delete.
     *
     * To get the placement group ID, use [PlacementGroupService.List] request.
     */
    placementGroupId: string;
}

export interface DeletePlacementGroupMetadata {
    /** ID of the placement group that is being deleted. */
    placementGroupId: string;
}

export interface ListPlacementGroupInstancesRequest {
    /**
     * ID of the placement group to list instances for.
     *
     * To get the placement group ID, use [PlacementGroupService.List] request.
     */
    placementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListPlacementGroupInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListPlacementGroupInstancesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListPlacementGroupInstancesResponse {
    /** Lists instances for the specified placement group. */
    instances: Instance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is more than [ListPlacementGroupInstancesRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListPlacementGroupInstancesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListPlacementGroupOperationsRequest {
    /**
     * ID of the placement group to list operations for.
     *
     * To get the placement group ID, use [PlacementGroupService.List] request.
     */
    placementGroupId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListPlacementGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListPlacementGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListPlacementGroupOperationsResponse {
    /** List of operations for the specified placement group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListPlacementGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListPlacementGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetPlacementGroupRequest: object = { placementGroupId: '' };

export const GetPlacementGroupRequest = {
    encode(
        message: GetPlacementGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetPlacementGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetPlacementGroupRequest,
        } as GetPlacementGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPlacementGroupRequest {
        const message = {
            ...baseGetPlacementGroupRequest,
        } as GetPlacementGroupRequest;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
        }
        return message;
    },

    toJSON(message: GetPlacementGroupRequest): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetPlacementGroupRequest>
    ): GetPlacementGroupRequest {
        const message = {
            ...baseGetPlacementGroupRequest,
        } as GetPlacementGroupRequest;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
        }
        return message;
    },
};

const baseListPlacementGroupsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListPlacementGroupsRequest = {
    encode(
        message: ListPlacementGroupsRequest,
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
    ): ListPlacementGroupsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPlacementGroupsRequest,
        } as ListPlacementGroupsRequest;
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

    fromJSON(object: any): ListPlacementGroupsRequest {
        const message = {
            ...baseListPlacementGroupsRequest,
        } as ListPlacementGroupsRequest;
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

    toJSON(message: ListPlacementGroupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListPlacementGroupsRequest>
    ): ListPlacementGroupsRequest {
        const message = {
            ...baseListPlacementGroupsRequest,
        } as ListPlacementGroupsRequest;
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

const baseListPlacementGroupsResponse: object = { nextPageToken: '' };

export const ListPlacementGroupsResponse = {
    encode(
        message: ListPlacementGroupsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.placementGroups) {
            PlacementGroup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListPlacementGroupsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPlacementGroupsResponse,
        } as ListPlacementGroupsResponse;
        message.placementGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroups.push(
                        PlacementGroup.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListPlacementGroupsResponse {
        const message = {
            ...baseListPlacementGroupsResponse,
        } as ListPlacementGroupsResponse;
        message.placementGroups = [];
        if (
            object.placementGroups !== undefined &&
            object.placementGroups !== null
        ) {
            for (const e of object.placementGroups) {
                message.placementGroups.push(PlacementGroup.fromJSON(e));
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

    toJSON(message: ListPlacementGroupsResponse): unknown {
        const obj: any = {};
        if (message.placementGroups) {
            obj.placementGroups = message.placementGroups.map((e) =>
                e ? PlacementGroup.toJSON(e) : undefined
            );
        } else {
            obj.placementGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListPlacementGroupsResponse>
    ): ListPlacementGroupsResponse {
        const message = {
            ...baseListPlacementGroupsResponse,
        } as ListPlacementGroupsResponse;
        message.placementGroups = [];
        if (
            object.placementGroups !== undefined &&
            object.placementGroups !== null
        ) {
            for (const e of object.placementGroups) {
                message.placementGroups.push(PlacementGroup.fromPartial(e));
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

const baseCreatePlacementGroupRequest: object = {
    folderId: '',
    name: '',
    description: '',
};

export const CreatePlacementGroupRequest = {
    encode(
        message: CreatePlacementGroupRequest,
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
            CreatePlacementGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.spreadPlacementStrategy !== undefined) {
            SpreadPlacementStrategy.encode(
                message.spreadPlacementStrategy,
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreatePlacementGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreatePlacementGroupRequest,
        } as CreatePlacementGroupRequest;
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
                        CreatePlacementGroupRequest_LabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.spreadPlacementStrategy =
                        SpreadPlacementStrategy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePlacementGroupRequest {
        const message = {
            ...baseCreatePlacementGroupRequest,
        } as CreatePlacementGroupRequest;
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
            object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null
        ) {
            message.spreadPlacementStrategy = SpreadPlacementStrategy.fromJSON(
                object.spreadPlacementStrategy
            );
        } else {
            message.spreadPlacementStrategy = undefined;
        }
        return message;
    },

    toJSON(message: CreatePlacementGroupRequest): unknown {
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
        message.spreadPlacementStrategy !== undefined &&
            (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
                ? SpreadPlacementStrategy.toJSON(
                      message.spreadPlacementStrategy
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreatePlacementGroupRequest>
    ): CreatePlacementGroupRequest {
        const message = {
            ...baseCreatePlacementGroupRequest,
        } as CreatePlacementGroupRequest;
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
            object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null
        ) {
            message.spreadPlacementStrategy =
                SpreadPlacementStrategy.fromPartial(
                    object.spreadPlacementStrategy
                );
        } else {
            message.spreadPlacementStrategy = undefined;
        }
        return message;
    },
};

const baseCreatePlacementGroupRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const CreatePlacementGroupRequest_LabelsEntry = {
    encode(
        message: CreatePlacementGroupRequest_LabelsEntry,
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
    ): CreatePlacementGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreatePlacementGroupRequest_LabelsEntry,
        } as CreatePlacementGroupRequest_LabelsEntry;
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

    fromJSON(object: any): CreatePlacementGroupRequest_LabelsEntry {
        const message = {
            ...baseCreatePlacementGroupRequest_LabelsEntry,
        } as CreatePlacementGroupRequest_LabelsEntry;
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

    toJSON(message: CreatePlacementGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreatePlacementGroupRequest_LabelsEntry>
    ): CreatePlacementGroupRequest_LabelsEntry {
        const message = {
            ...baseCreatePlacementGroupRequest_LabelsEntry,
        } as CreatePlacementGroupRequest_LabelsEntry;
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

const baseCreatePlacementGroupMetadata: object = { placementGroupId: '' };

export const CreatePlacementGroupMetadata = {
    encode(
        message: CreatePlacementGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreatePlacementGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreatePlacementGroupMetadata,
        } as CreatePlacementGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreatePlacementGroupMetadata {
        const message = {
            ...baseCreatePlacementGroupMetadata,
        } as CreatePlacementGroupMetadata;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
        }
        return message;
    },

    toJSON(message: CreatePlacementGroupMetadata): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreatePlacementGroupMetadata>
    ): CreatePlacementGroupMetadata {
        const message = {
            ...baseCreatePlacementGroupMetadata,
        } as CreatePlacementGroupMetadata;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
        }
        return message;
    },
};

const baseUpdatePlacementGroupRequest: object = {
    placementGroupId: '',
    name: '',
    description: '',
};

export const UpdatePlacementGroupRequest = {
    encode(
        message: UpdatePlacementGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
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
            UpdatePlacementGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdatePlacementGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdatePlacementGroupRequest,
        } as UpdatePlacementGroupRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
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
                        UpdatePlacementGroupRequest_LabelsEntry.decode(
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

    fromJSON(object: any): UpdatePlacementGroupRequest {
        const message = {
            ...baseUpdatePlacementGroupRequest,
        } as UpdatePlacementGroupRequest;
        message.labels = {};
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
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

    toJSON(message: UpdatePlacementGroupRequest): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
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
        object: DeepPartial<UpdatePlacementGroupRequest>
    ): UpdatePlacementGroupRequest {
        const message = {
            ...baseUpdatePlacementGroupRequest,
        } as UpdatePlacementGroupRequest;
        message.labels = {};
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
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

const baseUpdatePlacementGroupRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const UpdatePlacementGroupRequest_LabelsEntry = {
    encode(
        message: UpdatePlacementGroupRequest_LabelsEntry,
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
    ): UpdatePlacementGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdatePlacementGroupRequest_LabelsEntry,
        } as UpdatePlacementGroupRequest_LabelsEntry;
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

    fromJSON(object: any): UpdatePlacementGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdatePlacementGroupRequest_LabelsEntry,
        } as UpdatePlacementGroupRequest_LabelsEntry;
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

    toJSON(message: UpdatePlacementGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdatePlacementGroupRequest_LabelsEntry>
    ): UpdatePlacementGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdatePlacementGroupRequest_LabelsEntry,
        } as UpdatePlacementGroupRequest_LabelsEntry;
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

const baseUpdatePlacementGroupMetadata: object = { placementGroupId: '' };

export const UpdatePlacementGroupMetadata = {
    encode(
        message: UpdatePlacementGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdatePlacementGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdatePlacementGroupMetadata,
        } as UpdatePlacementGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdatePlacementGroupMetadata {
        const message = {
            ...baseUpdatePlacementGroupMetadata,
        } as UpdatePlacementGroupMetadata;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
        }
        return message;
    },

    toJSON(message: UpdatePlacementGroupMetadata): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdatePlacementGroupMetadata>
    ): UpdatePlacementGroupMetadata {
        const message = {
            ...baseUpdatePlacementGroupMetadata,
        } as UpdatePlacementGroupMetadata;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
        }
        return message;
    },
};

const baseDeletePlacementGroupRequest: object = { placementGroupId: '' };

export const DeletePlacementGroupRequest = {
    encode(
        message: DeletePlacementGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeletePlacementGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeletePlacementGroupRequest,
        } as DeletePlacementGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePlacementGroupRequest {
        const message = {
            ...baseDeletePlacementGroupRequest,
        } as DeletePlacementGroupRequest;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
        }
        return message;
    },

    toJSON(message: DeletePlacementGroupRequest): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeletePlacementGroupRequest>
    ): DeletePlacementGroupRequest {
        const message = {
            ...baseDeletePlacementGroupRequest,
        } as DeletePlacementGroupRequest;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
        }
        return message;
    },
};

const baseDeletePlacementGroupMetadata: object = { placementGroupId: '' };

export const DeletePlacementGroupMetadata = {
    encode(
        message: DeletePlacementGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeletePlacementGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeletePlacementGroupMetadata,
        } as DeletePlacementGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeletePlacementGroupMetadata {
        const message = {
            ...baseDeletePlacementGroupMetadata,
        } as DeletePlacementGroupMetadata;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
        }
        return message;
    },

    toJSON(message: DeletePlacementGroupMetadata): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeletePlacementGroupMetadata>
    ): DeletePlacementGroupMetadata {
        const message = {
            ...baseDeletePlacementGroupMetadata,
        } as DeletePlacementGroupMetadata;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
        }
        return message;
    },
};

const baseListPlacementGroupInstancesRequest: object = {
    placementGroupId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListPlacementGroupInstancesRequest = {
    encode(
        message: ListPlacementGroupInstancesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
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
    ): ListPlacementGroupInstancesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPlacementGroupInstancesRequest,
        } as ListPlacementGroupInstancesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
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

    fromJSON(object: any): ListPlacementGroupInstancesRequest {
        const message = {
            ...baseListPlacementGroupInstancesRequest,
        } as ListPlacementGroupInstancesRequest;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
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

    toJSON(message: ListPlacementGroupInstancesRequest): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListPlacementGroupInstancesRequest>
    ): ListPlacementGroupInstancesRequest {
        const message = {
            ...baseListPlacementGroupInstancesRequest,
        } as ListPlacementGroupInstancesRequest;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
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

const baseListPlacementGroupInstancesResponse: object = { nextPageToken: '' };

export const ListPlacementGroupInstancesResponse = {
    encode(
        message: ListPlacementGroupInstancesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.instances) {
            Instance.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListPlacementGroupInstancesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPlacementGroupInstancesResponse,
        } as ListPlacementGroupInstancesResponse;
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(
                        Instance.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListPlacementGroupInstancesResponse {
        const message = {
            ...baseListPlacementGroupInstancesResponse,
        } as ListPlacementGroupInstancesResponse;
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(Instance.fromJSON(e));
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

    toJSON(message: ListPlacementGroupInstancesResponse): unknown {
        const obj: any = {};
        if (message.instances) {
            obj.instances = message.instances.map((e) =>
                e ? Instance.toJSON(e) : undefined
            );
        } else {
            obj.instances = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListPlacementGroupInstancesResponse>
    ): ListPlacementGroupInstancesResponse {
        const message = {
            ...baseListPlacementGroupInstancesResponse,
        } as ListPlacementGroupInstancesResponse;
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(Instance.fromPartial(e));
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

const baseListPlacementGroupOperationsRequest: object = {
    placementGroupId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListPlacementGroupOperationsRequest = {
    encode(
        message: ListPlacementGroupOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
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
    ): ListPlacementGroupOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPlacementGroupOperationsRequest,
        } as ListPlacementGroupOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
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

    fromJSON(object: any): ListPlacementGroupOperationsRequest {
        const message = {
            ...baseListPlacementGroupOperationsRequest,
        } as ListPlacementGroupOperationsRequest;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
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

    toJSON(message: ListPlacementGroupOperationsRequest): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListPlacementGroupOperationsRequest>
    ): ListPlacementGroupOperationsRequest {
        const message = {
            ...baseListPlacementGroupOperationsRequest,
        } as ListPlacementGroupOperationsRequest;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
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

const baseListPlacementGroupOperationsResponse: object = { nextPageToken: '' };

export const ListPlacementGroupOperationsResponse = {
    encode(
        message: ListPlacementGroupOperationsResponse,
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
    ): ListPlacementGroupOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListPlacementGroupOperationsResponse,
        } as ListPlacementGroupOperationsResponse;
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

    fromJSON(object: any): ListPlacementGroupOperationsResponse {
        const message = {
            ...baseListPlacementGroupOperationsResponse,
        } as ListPlacementGroupOperationsResponse;
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

    toJSON(message: ListPlacementGroupOperationsResponse): unknown {
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
        object: DeepPartial<ListPlacementGroupOperationsResponse>
    ): ListPlacementGroupOperationsResponse {
        const message = {
            ...baseListPlacementGroupOperationsResponse,
        } as ListPlacementGroupOperationsResponse;
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

/** A set of methods for managing placement groups. */
export const PlacementGroupServiceService = {
    /**
     * Returns the specified placement group.
     *
     * To get the list of all available placement groups, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.PlacementGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPlacementGroupRequest) =>
            Buffer.from(GetPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetPlacementGroupRequest.decode(value),
        responseSerialize: (value: PlacementGroup) =>
            Buffer.from(PlacementGroup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => PlacementGroup.decode(value),
    },
    /** Retrieves the list of placement groups in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.PlacementGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPlacementGroupsRequest) =>
            Buffer.from(ListPlacementGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListPlacementGroupsRequest.decode(value),
        responseSerialize: (value: ListPlacementGroupsResponse) =>
            Buffer.from(ListPlacementGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListPlacementGroupsResponse.decode(value),
    },
    /** Creates a placement group in the specified folder. */
    create: {
        path: '/yandex.cloud.compute.v1.PlacementGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreatePlacementGroupRequest) =>
            Buffer.from(CreatePlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreatePlacementGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified placement group. */
    update: {
        path: '/yandex.cloud.compute.v1.PlacementGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdatePlacementGroupRequest) =>
            Buffer.from(UpdatePlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdatePlacementGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified placement group. */
    delete: {
        path: '/yandex.cloud.compute.v1.PlacementGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeletePlacementGroupRequest) =>
            Buffer.from(DeletePlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeletePlacementGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists instances for the specified placement group. */
    listInstances: {
        path: '/yandex.cloud.compute.v1.PlacementGroupService/ListInstances',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPlacementGroupInstancesRequest) =>
            Buffer.from(
                ListPlacementGroupInstancesRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListPlacementGroupInstancesRequest.decode(value),
        responseSerialize: (value: ListPlacementGroupInstancesResponse) =>
            Buffer.from(
                ListPlacementGroupInstancesResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListPlacementGroupInstancesResponse.decode(value),
    },
    /** Lists operations for the specified placement group. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.PlacementGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPlacementGroupOperationsRequest) =>
            Buffer.from(
                ListPlacementGroupOperationsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListPlacementGroupOperationsRequest.decode(value),
        responseSerialize: (value: ListPlacementGroupOperationsResponse) =>
            Buffer.from(
                ListPlacementGroupOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListPlacementGroupOperationsResponse.decode(value),
    },
} as const;

export interface PlacementGroupServiceServer
    extends UntypedServiceImplementation {
    /**
     * Returns the specified placement group.
     *
     * To get the list of all available placement groups, make a [List] request.
     */
    get: handleUnaryCall<GetPlacementGroupRequest, PlacementGroup>;
    /** Retrieves the list of placement groups in the specified folder. */
    list: handleUnaryCall<
        ListPlacementGroupsRequest,
        ListPlacementGroupsResponse
    >;
    /** Creates a placement group in the specified folder. */
    create: handleUnaryCall<CreatePlacementGroupRequest, Operation>;
    /** Updates the specified placement group. */
    update: handleUnaryCall<UpdatePlacementGroupRequest, Operation>;
    /** Deletes the specified placement group. */
    delete: handleUnaryCall<DeletePlacementGroupRequest, Operation>;
    /** Lists instances for the specified placement group. */
    listInstances: handleUnaryCall<
        ListPlacementGroupInstancesRequest,
        ListPlacementGroupInstancesResponse
    >;
    /** Lists operations for the specified placement group. */
    listOperations: handleUnaryCall<
        ListPlacementGroupOperationsRequest,
        ListPlacementGroupOperationsResponse
    >;
}

export interface PlacementGroupServiceClient extends Client {
    /**
     * Returns the specified placement group.
     *
     * To get the list of all available placement groups, make a [List] request.
     */
    get(
        request: GetPlacementGroupRequest,
        callback: (error: ServiceError | null, response: PlacementGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetPlacementGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: PlacementGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetPlacementGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: PlacementGroup) => void
    ): ClientUnaryCall;
    /** Retrieves the list of placement groups in the specified folder. */
    list(
        request: ListPlacementGroupsRequest,
        callback: (
            error: ServiceError | null,
            response: ListPlacementGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListPlacementGroupsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListPlacementGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListPlacementGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListPlacementGroupsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a placement group in the specified folder. */
    create(
        request: CreatePlacementGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreatePlacementGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreatePlacementGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified placement group. */
    update(
        request: UpdatePlacementGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdatePlacementGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdatePlacementGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified placement group. */
    delete(
        request: DeletePlacementGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeletePlacementGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeletePlacementGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists instances for the specified placement group. */
    listInstances(
        request: ListPlacementGroupInstancesRequest,
        callback: (
            error: ServiceError | null,
            response: ListPlacementGroupInstancesResponse
        ) => void
    ): ClientUnaryCall;
    listInstances(
        request: ListPlacementGroupInstancesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListPlacementGroupInstancesResponse
        ) => void
    ): ClientUnaryCall;
    listInstances(
        request: ListPlacementGroupInstancesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListPlacementGroupInstancesResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified placement group. */
    listOperations(
        request: ListPlacementGroupOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListPlacementGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListPlacementGroupOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListPlacementGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListPlacementGroupOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListPlacementGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const PlacementGroupServiceClient = makeGenericClientConstructor(
    PlacementGroupServiceService,
    'yandex.cloud.compute.v1.PlacementGroupService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): PlacementGroupServiceClient;
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
