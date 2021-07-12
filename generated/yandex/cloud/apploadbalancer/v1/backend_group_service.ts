/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import {
    BackendGroup,
    HttpBackendGroup,
    GrpcBackendGroup,
    HttpBackend,
    GrpcBackend,
} from '../../../../yandex/cloud/apploadbalancer/v1/backend_group';
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

export interface GetBackendGroupRequest {
    backendGroupId: string;
}

export interface ListBackendGroupsRequest {
    folderId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}

export interface ListBackendGroupsResponse {
    backendGroups: BackendGroup[];
    nextPageToken: string;
}

export interface DeleteBackendGroupRequest {
    backendGroupId: string;
}

export interface DeleteBackendGroupMetadata {
    backendGroupId: string;
}

export interface UpdateBackendGroupRequest {
    backendGroupId: string;
    updateMask: FieldMask | undefined;
    name: string;
    description: string;
    labels: { [key: string]: string };
    http: HttpBackendGroup | undefined;
    grpc: GrpcBackendGroup | undefined;
}

export interface UpdateBackendGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateBackendGroupMetadata {
    backendGroupId: string;
}

export interface CreateBackendGroupRequest {
    folderId: string;
    name: string;
    description: string;
    labels: { [key: string]: string };
    http: HttpBackendGroup | undefined;
    grpc: GrpcBackendGroup | undefined;
}

export interface CreateBackendGroupRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateBackendGroupMetadata {
    backendGroupId: string;
}

export interface AddBackendRequest {
    backendGroupId: string;
    http: HttpBackend | undefined;
    grpc: GrpcBackend | undefined;
}

export interface AddBackendMetadata {
    backendGroupId: string;
    backendName: string;
}

export interface UpdateBackendRequest {
    backendGroupId: string;
    updateMask: FieldMask | undefined;
    http: HttpBackend | undefined;
    grpc: GrpcBackend | undefined;
}

export interface UpdateBackendMetadata {
    backendGroupId: string;
    backendName: string;
}

export interface RemoveBackendRequest {
    backendGroupId: string;
    backendName: string;
}

export interface RemoveBackendMetadata {
    backendGroupId: string;
    backendName: string;
}

export interface ListBackendGroupOperationsRequest {
    /**
     * ID of the backend group to get operations for.
     *
     * To get the backend group ID, use a [BackendGroupService.List] request.
     */
    backendGroupId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListBackendGroupOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListBackendGroupOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListBackendGroupOperationsResponse {
    /** List of operations for the specified target group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListBackendGroupOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListBackendGroupOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetBackendGroupRequest: object = { backendGroupId: '' };

export const GetBackendGroupRequest = {
    encode(
        message: GetBackendGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetBackendGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetBackendGroupRequest,
        } as GetBackendGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetBackendGroupRequest {
        const message = {
            ...baseGetBackendGroupRequest,
        } as GetBackendGroupRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        return message;
    },

    toJSON(message: GetBackendGroupRequest): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetBackendGroupRequest>
    ): GetBackendGroupRequest {
        const message = {
            ...baseGetBackendGroupRequest,
        } as GetBackendGroupRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        return message;
    },
};

const baseListBackendGroupsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListBackendGroupsRequest = {
    encode(
        message: ListBackendGroupsRequest,
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
    ): ListBackendGroupsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBackendGroupsRequest,
        } as ListBackendGroupsRequest;
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

    fromJSON(object: any): ListBackendGroupsRequest {
        const message = {
            ...baseListBackendGroupsRequest,
        } as ListBackendGroupsRequest;
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

    toJSON(message: ListBackendGroupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListBackendGroupsRequest>
    ): ListBackendGroupsRequest {
        const message = {
            ...baseListBackendGroupsRequest,
        } as ListBackendGroupsRequest;
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

const baseListBackendGroupsResponse: object = { nextPageToken: '' };

export const ListBackendGroupsResponse = {
    encode(
        message: ListBackendGroupsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.backendGroups) {
            BackendGroup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListBackendGroupsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBackendGroupsResponse,
        } as ListBackendGroupsResponse;
        message.backendGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroups.push(
                        BackendGroup.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListBackendGroupsResponse {
        const message = {
            ...baseListBackendGroupsResponse,
        } as ListBackendGroupsResponse;
        message.backendGroups = [];
        if (
            object.backendGroups !== undefined &&
            object.backendGroups !== null
        ) {
            for (const e of object.backendGroups) {
                message.backendGroups.push(BackendGroup.fromJSON(e));
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

    toJSON(message: ListBackendGroupsResponse): unknown {
        const obj: any = {};
        if (message.backendGroups) {
            obj.backendGroups = message.backendGroups.map((e) =>
                e ? BackendGroup.toJSON(e) : undefined
            );
        } else {
            obj.backendGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListBackendGroupsResponse>
    ): ListBackendGroupsResponse {
        const message = {
            ...baseListBackendGroupsResponse,
        } as ListBackendGroupsResponse;
        message.backendGroups = [];
        if (
            object.backendGroups !== undefined &&
            object.backendGroups !== null
        ) {
            for (const e of object.backendGroups) {
                message.backendGroups.push(BackendGroup.fromPartial(e));
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

const baseDeleteBackendGroupRequest: object = { backendGroupId: '' };

export const DeleteBackendGroupRequest = {
    encode(
        message: DeleteBackendGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteBackendGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteBackendGroupRequest,
        } as DeleteBackendGroupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteBackendGroupRequest {
        const message = {
            ...baseDeleteBackendGroupRequest,
        } as DeleteBackendGroupRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteBackendGroupRequest): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteBackendGroupRequest>
    ): DeleteBackendGroupRequest {
        const message = {
            ...baseDeleteBackendGroupRequest,
        } as DeleteBackendGroupRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        return message;
    },
};

const baseDeleteBackendGroupMetadata: object = { backendGroupId: '' };

export const DeleteBackendGroupMetadata = {
    encode(
        message: DeleteBackendGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteBackendGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteBackendGroupMetadata,
        } as DeleteBackendGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteBackendGroupMetadata {
        const message = {
            ...baseDeleteBackendGroupMetadata,
        } as DeleteBackendGroupMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        return message;
    },

    toJSON(message: DeleteBackendGroupMetadata): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteBackendGroupMetadata>
    ): DeleteBackendGroupMetadata {
        const message = {
            ...baseDeleteBackendGroupMetadata,
        } as DeleteBackendGroupMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        return message;
    },
};

const baseUpdateBackendGroupRequest: object = {
    backendGroupId: '',
    name: '',
    description: '',
};

export const UpdateBackendGroupRequest = {
    encode(
        message: UpdateBackendGroupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
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
            UpdateBackendGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.http !== undefined) {
            HttpBackendGroup.encode(
                message.http,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.grpc !== undefined) {
            GrpcBackendGroup.encode(
                message.grpc,
                writer.uint32(58).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateBackendGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateBackendGroupRequest,
        } as UpdateBackendGroupRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
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
                    const entry5 = UpdateBackendGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.http = HttpBackendGroup.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.grpc = GrpcBackendGroup.decode(
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

    fromJSON(object: any): UpdateBackendGroupRequest {
        const message = {
            ...baseUpdateBackendGroupRequest,
        } as UpdateBackendGroupRequest;
        message.labels = {};
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
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
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpBackendGroup.fromJSON(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcBackendGroup.fromJSON(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },

    toJSON(message: UpdateBackendGroupRequest): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
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
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpBackendGroup.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? GrpcBackendGroup.toJSON(message.grpc)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateBackendGroupRequest>
    ): UpdateBackendGroupRequest {
        const message = {
            ...baseUpdateBackendGroupRequest,
        } as UpdateBackendGroupRequest;
        message.labels = {};
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
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
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpBackendGroup.fromPartial(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcBackendGroup.fromPartial(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },
};

const baseUpdateBackendGroupRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const UpdateBackendGroupRequest_LabelsEntry = {
    encode(
        message: UpdateBackendGroupRequest_LabelsEntry,
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
    ): UpdateBackendGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateBackendGroupRequest_LabelsEntry,
        } as UpdateBackendGroupRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateBackendGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateBackendGroupRequest_LabelsEntry,
        } as UpdateBackendGroupRequest_LabelsEntry;
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

    toJSON(message: UpdateBackendGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateBackendGroupRequest_LabelsEntry>
    ): UpdateBackendGroupRequest_LabelsEntry {
        const message = {
            ...baseUpdateBackendGroupRequest_LabelsEntry,
        } as UpdateBackendGroupRequest_LabelsEntry;
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

const baseUpdateBackendGroupMetadata: object = { backendGroupId: '' };

export const UpdateBackendGroupMetadata = {
    encode(
        message: UpdateBackendGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateBackendGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateBackendGroupMetadata,
        } as UpdateBackendGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateBackendGroupMetadata {
        const message = {
            ...baseUpdateBackendGroupMetadata,
        } as UpdateBackendGroupMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        return message;
    },

    toJSON(message: UpdateBackendGroupMetadata): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateBackendGroupMetadata>
    ): UpdateBackendGroupMetadata {
        const message = {
            ...baseUpdateBackendGroupMetadata,
        } as UpdateBackendGroupMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        return message;
    },
};

const baseCreateBackendGroupRequest: object = {
    folderId: '',
    name: '',
    description: '',
};

export const CreateBackendGroupRequest = {
    encode(
        message: CreateBackendGroupRequest,
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
            CreateBackendGroupRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.http !== undefined) {
            HttpBackendGroup.encode(
                message.http,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.grpc !== undefined) {
            GrpcBackendGroup.encode(
                message.grpc,
                writer.uint32(50).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateBackendGroupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateBackendGroupRequest,
        } as CreateBackendGroupRequest;
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
                    const entry4 = CreateBackendGroupRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.http = HttpBackendGroup.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.grpc = GrpcBackendGroup.decode(
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

    fromJSON(object: any): CreateBackendGroupRequest {
        const message = {
            ...baseCreateBackendGroupRequest,
        } as CreateBackendGroupRequest;
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
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpBackendGroup.fromJSON(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcBackendGroup.fromJSON(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },

    toJSON(message: CreateBackendGroupRequest): unknown {
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
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpBackendGroup.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? GrpcBackendGroup.toJSON(message.grpc)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateBackendGroupRequest>
    ): CreateBackendGroupRequest {
        const message = {
            ...baseCreateBackendGroupRequest,
        } as CreateBackendGroupRequest;
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
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpBackendGroup.fromPartial(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcBackendGroup.fromPartial(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },
};

const baseCreateBackendGroupRequest_LabelsEntry: object = {
    key: '',
    value: '',
};

export const CreateBackendGroupRequest_LabelsEntry = {
    encode(
        message: CreateBackendGroupRequest_LabelsEntry,
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
    ): CreateBackendGroupRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateBackendGroupRequest_LabelsEntry,
        } as CreateBackendGroupRequest_LabelsEntry;
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

    fromJSON(object: any): CreateBackendGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateBackendGroupRequest_LabelsEntry,
        } as CreateBackendGroupRequest_LabelsEntry;
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

    toJSON(message: CreateBackendGroupRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateBackendGroupRequest_LabelsEntry>
    ): CreateBackendGroupRequest_LabelsEntry {
        const message = {
            ...baseCreateBackendGroupRequest_LabelsEntry,
        } as CreateBackendGroupRequest_LabelsEntry;
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

const baseCreateBackendGroupMetadata: object = { backendGroupId: '' };

export const CreateBackendGroupMetadata = {
    encode(
        message: CreateBackendGroupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateBackendGroupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateBackendGroupMetadata,
        } as CreateBackendGroupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateBackendGroupMetadata {
        const message = {
            ...baseCreateBackendGroupMetadata,
        } as CreateBackendGroupMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        return message;
    },

    toJSON(message: CreateBackendGroupMetadata): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateBackendGroupMetadata>
    ): CreateBackendGroupMetadata {
        const message = {
            ...baseCreateBackendGroupMetadata,
        } as CreateBackendGroupMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        return message;
    },
};

const baseAddBackendRequest: object = { backendGroupId: '' };

export const AddBackendRequest = {
    encode(
        message: AddBackendRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.http !== undefined) {
            HttpBackend.encode(message.http, writer.uint32(18).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            GrpcBackend.encode(message.grpc, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddBackendRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddBackendRequest } as AddBackendRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.http = HttpBackend.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.grpc = GrpcBackend.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddBackendRequest {
        const message = { ...baseAddBackendRequest } as AddBackendRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpBackend.fromJSON(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcBackend.fromJSON(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },

    toJSON(message: AddBackendRequest): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpBackend.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? GrpcBackend.toJSON(message.grpc)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<AddBackendRequest>): AddBackendRequest {
        const message = { ...baseAddBackendRequest } as AddBackendRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpBackend.fromPartial(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcBackend.fromPartial(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },
};

const baseAddBackendMetadata: object = { backendGroupId: '', backendName: '' };

export const AddBackendMetadata = {
    encode(
        message: AddBackendMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== '') {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AddBackendMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddBackendMetadata } as AddBackendMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddBackendMetadata {
        const message = { ...baseAddBackendMetadata } as AddBackendMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = String(object.backendName);
        } else {
            message.backendName = '';
        }
        return message;
    },

    toJSON(message: AddBackendMetadata): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },

    fromPartial(object: DeepPartial<AddBackendMetadata>): AddBackendMetadata {
        const message = { ...baseAddBackendMetadata } as AddBackendMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = object.backendName;
        } else {
            message.backendName = '';
        }
        return message;
    },
};

const baseUpdateBackendRequest: object = { backendGroupId: '' };

export const UpdateBackendRequest = {
    encode(
        message: UpdateBackendRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.http !== undefined) {
            HttpBackend.encode(message.http, writer.uint32(26).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            GrpcBackend.encode(message.grpc, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateBackendRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateBackendRequest } as UpdateBackendRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.http = HttpBackend.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.grpc = GrpcBackend.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateBackendRequest {
        const message = { ...baseUpdateBackendRequest } as UpdateBackendRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpBackend.fromJSON(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcBackend.fromJSON(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },

    toJSON(message: UpdateBackendRequest): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpBackend.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? GrpcBackend.toJSON(message.grpc)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateBackendRequest>
    ): UpdateBackendRequest {
        const message = { ...baseUpdateBackendRequest } as UpdateBackendRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpBackend.fromPartial(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcBackend.fromPartial(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },
};

const baseUpdateBackendMetadata: object = {
    backendGroupId: '',
    backendName: '',
};

export const UpdateBackendMetadata = {
    encode(
        message: UpdateBackendMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== '') {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateBackendMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateBackendMetadata,
        } as UpdateBackendMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateBackendMetadata {
        const message = {
            ...baseUpdateBackendMetadata,
        } as UpdateBackendMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = String(object.backendName);
        } else {
            message.backendName = '';
        }
        return message;
    },

    toJSON(message: UpdateBackendMetadata): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateBackendMetadata>
    ): UpdateBackendMetadata {
        const message = {
            ...baseUpdateBackendMetadata,
        } as UpdateBackendMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = object.backendName;
        } else {
            message.backendName = '';
        }
        return message;
    },
};

const baseRemoveBackendRequest: object = {
    backendGroupId: '',
    backendName: '',
};

export const RemoveBackendRequest = {
    encode(
        message: RemoveBackendRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== '') {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveBackendRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveBackendRequest } as RemoveBackendRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveBackendRequest {
        const message = { ...baseRemoveBackendRequest } as RemoveBackendRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = String(object.backendName);
        } else {
            message.backendName = '';
        }
        return message;
    },

    toJSON(message: RemoveBackendRequest): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RemoveBackendRequest>
    ): RemoveBackendRequest {
        const message = { ...baseRemoveBackendRequest } as RemoveBackendRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = object.backendName;
        } else {
            message.backendName = '';
        }
        return message;
    },
};

const baseRemoveBackendMetadata: object = {
    backendGroupId: '',
    backendName: '',
};

export const RemoveBackendMetadata = {
    encode(
        message: RemoveBackendMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== '') {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveBackendMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveBackendMetadata,
        } as RemoveBackendMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveBackendMetadata {
        const message = {
            ...baseRemoveBackendMetadata,
        } as RemoveBackendMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = String(object.backendName);
        } else {
            message.backendName = '';
        }
        return message;
    },

    toJSON(message: RemoveBackendMetadata): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RemoveBackendMetadata>
    ): RemoveBackendMetadata {
        const message = {
            ...baseRemoveBackendMetadata,
        } as RemoveBackendMetadata;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = object.backendName;
        } else {
            message.backendName = '';
        }
        return message;
    },
};

const baseListBackendGroupOperationsRequest: object = {
    backendGroupId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListBackendGroupOperationsRequest = {
    encode(
        message: ListBackendGroupOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
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
    ): ListBackendGroupOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBackendGroupOperationsRequest,
        } as ListBackendGroupOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
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

    fromJSON(object: any): ListBackendGroupOperationsRequest {
        const message = {
            ...baseListBackendGroupOperationsRequest,
        } as ListBackendGroupOperationsRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
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

    toJSON(message: ListBackendGroupOperationsRequest): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListBackendGroupOperationsRequest>
    ): ListBackendGroupOperationsRequest {
        const message = {
            ...baseListBackendGroupOperationsRequest,
        } as ListBackendGroupOperationsRequest;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
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

const baseListBackendGroupOperationsResponse: object = { nextPageToken: '' };

export const ListBackendGroupOperationsResponse = {
    encode(
        message: ListBackendGroupOperationsResponse,
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
    ): ListBackendGroupOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBackendGroupOperationsResponse,
        } as ListBackendGroupOperationsResponse;
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

    fromJSON(object: any): ListBackendGroupOperationsResponse {
        const message = {
            ...baseListBackendGroupOperationsResponse,
        } as ListBackendGroupOperationsResponse;
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

    toJSON(message: ListBackendGroupOperationsResponse): unknown {
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
        object: DeepPartial<ListBackendGroupOperationsResponse>
    ): ListBackendGroupOperationsResponse {
        const message = {
            ...baseListBackendGroupOperationsResponse,
        } as ListBackendGroupOperationsResponse;
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

export const BackendGroupServiceService = {
    get: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetBackendGroupRequest) =>
            Buffer.from(GetBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetBackendGroupRequest.decode(value),
        responseSerialize: (value: BackendGroup) =>
            Buffer.from(BackendGroup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => BackendGroup.decode(value),
    },
    list: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBackendGroupsRequest) =>
            Buffer.from(ListBackendGroupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListBackendGroupsRequest.decode(value),
        responseSerialize: (value: ListBackendGroupsResponse) =>
            Buffer.from(ListBackendGroupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListBackendGroupsResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateBackendGroupRequest) =>
            Buffer.from(CreateBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateBackendGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateBackendGroupRequest) =>
            Buffer.from(UpdateBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateBackendGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteBackendGroupRequest) =>
            Buffer.from(DeleteBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteBackendGroupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** AddBackend/RemoveBackend technically do the same, but have different semantics. */
    addBackend: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/AddBackend',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddBackendRequest) =>
            Buffer.from(AddBackendRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddBackendRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    removeBackend: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/RemoveBackend',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RemoveBackendRequest) =>
            Buffer.from(RemoveBackendRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            RemoveBackendRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    updateBackend: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/UpdateBackend',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateBackendRequest) =>
            Buffer.from(UpdateBackendRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateBackendRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified backend group. */
    listOperations: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBackendGroupOperationsRequest) =>
            Buffer.from(
                ListBackendGroupOperationsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListBackendGroupOperationsRequest.decode(value),
        responseSerialize: (value: ListBackendGroupOperationsResponse) =>
            Buffer.from(
                ListBackendGroupOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListBackendGroupOperationsResponse.decode(value),
    },
} as const;

export interface BackendGroupServiceServer
    extends UntypedServiceImplementation {
    get: handleUnaryCall<GetBackendGroupRequest, BackendGroup>;
    list: handleUnaryCall<ListBackendGroupsRequest, ListBackendGroupsResponse>;
    create: handleUnaryCall<CreateBackendGroupRequest, Operation>;
    update: handleUnaryCall<UpdateBackendGroupRequest, Operation>;
    delete: handleUnaryCall<DeleteBackendGroupRequest, Operation>;
    /** AddBackend/RemoveBackend technically do the same, but have different semantics. */
    addBackend: handleUnaryCall<AddBackendRequest, Operation>;
    removeBackend: handleUnaryCall<RemoveBackendRequest, Operation>;
    updateBackend: handleUnaryCall<UpdateBackendRequest, Operation>;
    /** Lists operations for the specified backend group. */
    listOperations: handleUnaryCall<
        ListBackendGroupOperationsRequest,
        ListBackendGroupOperationsResponse
    >;
}

export interface BackendGroupServiceClient extends Client {
    get(
        request: GetBackendGroupRequest,
        callback: (error: ServiceError | null, response: BackendGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetBackendGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: BackendGroup) => void
    ): ClientUnaryCall;
    get(
        request: GetBackendGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: BackendGroup) => void
    ): ClientUnaryCall;
    list(
        request: ListBackendGroupsRequest,
        callback: (
            error: ServiceError | null,
            response: ListBackendGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListBackendGroupsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListBackendGroupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListBackendGroupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListBackendGroupsResponse
        ) => void
    ): ClientUnaryCall;
    create(
        request: CreateBackendGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateBackendGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateBackendGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateBackendGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateBackendGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateBackendGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteBackendGroupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteBackendGroupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteBackendGroupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** AddBackend/RemoveBackend technically do the same, but have different semantics. */
    addBackend(
        request: AddBackendRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addBackend(
        request: AddBackendRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addBackend(
        request: AddBackendRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeBackend(
        request: RemoveBackendRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeBackend(
        request: RemoveBackendRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeBackend(
        request: RemoveBackendRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateBackend(
        request: UpdateBackendRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateBackend(
        request: UpdateBackendRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateBackend(
        request: UpdateBackendRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified backend group. */
    listOperations(
        request: ListBackendGroupOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListBackendGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListBackendGroupOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListBackendGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListBackendGroupOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListBackendGroupOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const BackendGroupServiceClient = makeGenericClientConstructor(
    BackendGroupServiceService,
    'yandex.cloud.apploadbalancer.v1.BackendGroupService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): BackendGroupServiceClient;
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
