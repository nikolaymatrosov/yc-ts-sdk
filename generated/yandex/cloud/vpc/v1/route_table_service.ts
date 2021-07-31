/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    RouteTable,
    StaticRoute,
} from '../../../../yandex/cloud/vpc/v1/route_table';
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

export const protobufPackage = 'yandex.cloud.vpc.v1';

export interface GetRouteTableRequest {
    /**
     * ID of the RouteTable resource to return.
     * To get the route table ID use a [RouteTableService.List] request.
     */
    routeTableId: string;
}

export interface ListRouteTablesRequest {
    /**
     * ID of the folder that the route table belongs to.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRouteTablesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRouteTablesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [RouteTable.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter: string;
}

export interface ListRouteTablesResponse {
    /** List of RouteTable resources. */
    routeTables: RouteTable[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRouteTablesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRouteTablesRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateRouteTableRequest {
    /**
     * ID of the folder that the route table belongs to.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the route table.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the route table. */
    description: string;
    /** Resource labels, `` key:value `` pairs. */
    labels: { [key: string]: string };
    /** ID of the network the route table belongs to. */
    networkId: string;
    /** List of static routes. */
    staticRoutes: StaticRoute[];
}

export interface CreateRouteTableRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateRouteTableMetadata {
    /** ID of the route table that is being created. */
    routeTableId: string;
}

export interface UpdateRouteTableRequest {
    /** ID of the RouteTable resource to update. */
    routeTableId: string;
    /** Field mask that specifies which fields of the RouteTable resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the route table.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the route table. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
    /** List of static routes. */
    staticRoutes: StaticRoute[];
}

export interface UpdateRouteTableRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateRouteTableMetadata {
    /** ID of the RouteTable resource that is being updated. */
    routeTableId: string;
}

export interface DeleteRouteTableRequest {
    /**
     * ID of the route table to delete.
     * To get the route table ID use a [RouteTableService.List] request.
     */
    routeTableId: string;
}

export interface DeleteRouteTableMetadata {
    /** ID of the RouteTable resource that is being deleted. */
    routeTableId: string;
}

export interface ListRouteTableOperationsRequest {
    /** ID of the RouteTable resource to list operations for. */
    routeTableId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListRouteTableOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRouteTableOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListRouteTableOperationsResponse {
    /** List of operations for the specified RouteTable resource. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRouteTableOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListRouteTableOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface MoveRouteTableRequest {
    /** ID of the RouteTable resource to move. */
    routeTableId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}

export interface MoveRouteTableMetadata {
    /** ID of the RouteTable resource that is being moved. */
    routeTableId: string;
}

const baseGetRouteTableRequest: object = { routeTableId: '' };

export const GetRouteTableRequest = {
    encode(
        message: GetRouteTableRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetRouteTableRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRouteTableRequest } as GetRouteTableRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRouteTableRequest {
        const message = { ...baseGetRouteTableRequest } as GetRouteTableRequest;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
        }
        return message;
    },

    toJSON(message: GetRouteTableRequest): unknown {
        const obj: any = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetRouteTableRequest>
    ): GetRouteTableRequest {
        const message = { ...baseGetRouteTableRequest } as GetRouteTableRequest;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
        }
        return message;
    },
};

const baseListRouteTablesRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListRouteTablesRequest = {
    encode(
        message: ListRouteTablesRequest,
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
    ): ListRouteTablesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRouteTablesRequest,
        } as ListRouteTablesRequest;
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

    fromJSON(object: any): ListRouteTablesRequest {
        const message = {
            ...baseListRouteTablesRequest,
        } as ListRouteTablesRequest;
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

    toJSON(message: ListRouteTablesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRouteTablesRequest>
    ): ListRouteTablesRequest {
        const message = {
            ...baseListRouteTablesRequest,
        } as ListRouteTablesRequest;
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

const baseListRouteTablesResponse: object = { nextPageToken: '' };

export const ListRouteTablesResponse = {
    encode(
        message: ListRouteTablesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.routeTables) {
            RouteTable.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListRouteTablesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRouteTablesResponse,
        } as ListRouteTablesResponse;
        message.routeTables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTables.push(
                        RouteTable.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListRouteTablesResponse {
        const message = {
            ...baseListRouteTablesResponse,
        } as ListRouteTablesResponse;
        message.routeTables = [];
        if (object.routeTables !== undefined && object.routeTables !== null) {
            for (const e of object.routeTables) {
                message.routeTables.push(RouteTable.fromJSON(e));
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

    toJSON(message: ListRouteTablesResponse): unknown {
        const obj: any = {};
        if (message.routeTables) {
            obj.routeTables = message.routeTables.map((e) =>
                e ? RouteTable.toJSON(e) : undefined
            );
        } else {
            obj.routeTables = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRouteTablesResponse>
    ): ListRouteTablesResponse {
        const message = {
            ...baseListRouteTablesResponse,
        } as ListRouteTablesResponse;
        message.routeTables = [];
        if (object.routeTables !== undefined && object.routeTables !== null) {
            for (const e of object.routeTables) {
                message.routeTables.push(RouteTable.fromPartial(e));
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

const baseCreateRouteTableRequest: object = {
    folderId: '',
    name: '',
    description: '',
    networkId: '',
};

export const CreateRouteTableRequest = {
    encode(
        message: CreateRouteTableRequest,
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
            CreateRouteTableRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.networkId !== '') {
            writer.uint32(42).string(message.networkId);
        }
        for (const v of message.staticRoutes) {
            StaticRoute.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateRouteTableRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRouteTableRequest,
        } as CreateRouteTableRequest;
        message.labels = {};
        message.staticRoutes = [];
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
                    const entry4 = CreateRouteTableRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.networkId = reader.string();
                    break;
                case 6:
                    message.staticRoutes.push(
                        StaticRoute.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRouteTableRequest {
        const message = {
            ...baseCreateRouteTableRequest,
        } as CreateRouteTableRequest;
        message.labels = {};
        message.staticRoutes = [];
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (object.staticRoutes !== undefined && object.staticRoutes !== null) {
            for (const e of object.staticRoutes) {
                message.staticRoutes.push(StaticRoute.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: CreateRouteTableRequest): unknown {
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.staticRoutes) {
            obj.staticRoutes = message.staticRoutes.map((e) =>
                e ? StaticRoute.toJSON(e) : undefined
            );
        } else {
            obj.staticRoutes = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateRouteTableRequest>
    ): CreateRouteTableRequest {
        const message = {
            ...baseCreateRouteTableRequest,
        } as CreateRouteTableRequest;
        message.labels = {};
        message.staticRoutes = [];
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (object.staticRoutes !== undefined && object.staticRoutes !== null) {
            for (const e of object.staticRoutes) {
                message.staticRoutes.push(StaticRoute.fromPartial(e));
            }
        }
        return message;
    },
};

const baseCreateRouteTableRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateRouteTableRequest_LabelsEntry = {
    encode(
        message: CreateRouteTableRequest_LabelsEntry,
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
    ): CreateRouteTableRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRouteTableRequest_LabelsEntry,
        } as CreateRouteTableRequest_LabelsEntry;
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

    fromJSON(object: any): CreateRouteTableRequest_LabelsEntry {
        const message = {
            ...baseCreateRouteTableRequest_LabelsEntry,
        } as CreateRouteTableRequest_LabelsEntry;
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

    toJSON(message: CreateRouteTableRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateRouteTableRequest_LabelsEntry>
    ): CreateRouteTableRequest_LabelsEntry {
        const message = {
            ...baseCreateRouteTableRequest_LabelsEntry,
        } as CreateRouteTableRequest_LabelsEntry;
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

const baseCreateRouteTableMetadata: object = { routeTableId: '' };

export const CreateRouteTableMetadata = {
    encode(
        message: CreateRouteTableMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateRouteTableMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRouteTableMetadata,
        } as CreateRouteTableMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateRouteTableMetadata {
        const message = {
            ...baseCreateRouteTableMetadata,
        } as CreateRouteTableMetadata;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
        }
        return message;
    },

    toJSON(message: CreateRouteTableMetadata): unknown {
        const obj: any = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateRouteTableMetadata>
    ): CreateRouteTableMetadata {
        const message = {
            ...baseCreateRouteTableMetadata,
        } as CreateRouteTableMetadata;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
        }
        return message;
    },
};

const baseUpdateRouteTableRequest: object = {
    routeTableId: '',
    name: '',
    description: '',
};

export const UpdateRouteTableRequest = {
    encode(
        message: UpdateRouteTableRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
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
            UpdateRouteTableRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        for (const v of message.staticRoutes) {
            StaticRoute.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateRouteTableRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRouteTableRequest,
        } as UpdateRouteTableRequest;
        message.labels = {};
        message.staticRoutes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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
                    const entry5 = UpdateRouteTableRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.staticRoutes.push(
                        StaticRoute.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRouteTableRequest {
        const message = {
            ...baseUpdateRouteTableRequest,
        } as UpdateRouteTableRequest;
        message.labels = {};
        message.staticRoutes = [];
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
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
        if (object.staticRoutes !== undefined && object.staticRoutes !== null) {
            for (const e of object.staticRoutes) {
                message.staticRoutes.push(StaticRoute.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UpdateRouteTableRequest): unknown {
        const obj: any = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
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
        if (message.staticRoutes) {
            obj.staticRoutes = message.staticRoutes.map((e) =>
                e ? StaticRoute.toJSON(e) : undefined
            );
        } else {
            obj.staticRoutes = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateRouteTableRequest>
    ): UpdateRouteTableRequest {
        const message = {
            ...baseUpdateRouteTableRequest,
        } as UpdateRouteTableRequest;
        message.labels = {};
        message.staticRoutes = [];
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
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
        if (object.staticRoutes !== undefined && object.staticRoutes !== null) {
            for (const e of object.staticRoutes) {
                message.staticRoutes.push(StaticRoute.fromPartial(e));
            }
        }
        return message;
    },
};

const baseUpdateRouteTableRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateRouteTableRequest_LabelsEntry = {
    encode(
        message: UpdateRouteTableRequest_LabelsEntry,
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
    ): UpdateRouteTableRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRouteTableRequest_LabelsEntry,
        } as UpdateRouteTableRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateRouteTableRequest_LabelsEntry {
        const message = {
            ...baseUpdateRouteTableRequest_LabelsEntry,
        } as UpdateRouteTableRequest_LabelsEntry;
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

    toJSON(message: UpdateRouteTableRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateRouteTableRequest_LabelsEntry>
    ): UpdateRouteTableRequest_LabelsEntry {
        const message = {
            ...baseUpdateRouteTableRequest_LabelsEntry,
        } as UpdateRouteTableRequest_LabelsEntry;
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

const baseUpdateRouteTableMetadata: object = { routeTableId: '' };

export const UpdateRouteTableMetadata = {
    encode(
        message: UpdateRouteTableMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateRouteTableMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRouteTableMetadata,
        } as UpdateRouteTableMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRouteTableMetadata {
        const message = {
            ...baseUpdateRouteTableMetadata,
        } as UpdateRouteTableMetadata;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
        }
        return message;
    },

    toJSON(message: UpdateRouteTableMetadata): unknown {
        const obj: any = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateRouteTableMetadata>
    ): UpdateRouteTableMetadata {
        const message = {
            ...baseUpdateRouteTableMetadata,
        } as UpdateRouteTableMetadata;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
        }
        return message;
    },
};

const baseDeleteRouteTableRequest: object = { routeTableId: '' };

export const DeleteRouteTableRequest = {
    encode(
        message: DeleteRouteTableRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteRouteTableRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRouteTableRequest,
        } as DeleteRouteTableRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRouteTableRequest {
        const message = {
            ...baseDeleteRouteTableRequest,
        } as DeleteRouteTableRequest;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
        }
        return message;
    },

    toJSON(message: DeleteRouteTableRequest): unknown {
        const obj: any = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteRouteTableRequest>
    ): DeleteRouteTableRequest {
        const message = {
            ...baseDeleteRouteTableRequest,
        } as DeleteRouteTableRequest;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
        }
        return message;
    },
};

const baseDeleteRouteTableMetadata: object = { routeTableId: '' };

export const DeleteRouteTableMetadata = {
    encode(
        message: DeleteRouteTableMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteRouteTableMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRouteTableMetadata,
        } as DeleteRouteTableMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRouteTableMetadata {
        const message = {
            ...baseDeleteRouteTableMetadata,
        } as DeleteRouteTableMetadata;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
        }
        return message;
    },

    toJSON(message: DeleteRouteTableMetadata): unknown {
        const obj: any = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteRouteTableMetadata>
    ): DeleteRouteTableMetadata {
        const message = {
            ...baseDeleteRouteTableMetadata,
        } as DeleteRouteTableMetadata;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
        }
        return message;
    },
};

const baseListRouteTableOperationsRequest: object = {
    routeTableId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListRouteTableOperationsRequest = {
    encode(
        message: ListRouteTableOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
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
    ): ListRouteTableOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRouteTableOperationsRequest,
        } as ListRouteTableOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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

    fromJSON(object: any): ListRouteTableOperationsRequest {
        const message = {
            ...baseListRouteTableOperationsRequest,
        } as ListRouteTableOperationsRequest;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
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

    toJSON(message: ListRouteTableOperationsRequest): unknown {
        const obj: any = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRouteTableOperationsRequest>
    ): ListRouteTableOperationsRequest {
        const message = {
            ...baseListRouteTableOperationsRequest,
        } as ListRouteTableOperationsRequest;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
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

const baseListRouteTableOperationsResponse: object = { nextPageToken: '' };

export const ListRouteTableOperationsResponse = {
    encode(
        message: ListRouteTableOperationsResponse,
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
    ): ListRouteTableOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRouteTableOperationsResponse,
        } as ListRouteTableOperationsResponse;
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

    fromJSON(object: any): ListRouteTableOperationsResponse {
        const message = {
            ...baseListRouteTableOperationsResponse,
        } as ListRouteTableOperationsResponse;
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

    toJSON(message: ListRouteTableOperationsResponse): unknown {
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
        object: DeepPartial<ListRouteTableOperationsResponse>
    ): ListRouteTableOperationsResponse {
        const message = {
            ...baseListRouteTableOperationsResponse,
        } as ListRouteTableOperationsResponse;
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

const baseMoveRouteTableRequest: object = {
    routeTableId: '',
    destinationFolderId: '',
};

export const MoveRouteTableRequest = {
    encode(
        message: MoveRouteTableRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MoveRouteTableRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMoveRouteTableRequest,
        } as MoveRouteTableRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveRouteTableRequest {
        const message = {
            ...baseMoveRouteTableRequest,
        } as MoveRouteTableRequest;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
        }
        if (
            object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null
        ) {
            message.destinationFolderId = String(object.destinationFolderId);
        } else {
            message.destinationFolderId = '';
        }
        return message;
    },

    toJSON(message: MoveRouteTableRequest): unknown {
        const obj: any = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<MoveRouteTableRequest>
    ): MoveRouteTableRequest {
        const message = {
            ...baseMoveRouteTableRequest,
        } as MoveRouteTableRequest;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
        }
        if (
            object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null
        ) {
            message.destinationFolderId = object.destinationFolderId;
        } else {
            message.destinationFolderId = '';
        }
        return message;
    },
};

const baseMoveRouteTableMetadata: object = { routeTableId: '' };

export const MoveRouteTableMetadata = {
    encode(
        message: MoveRouteTableMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MoveRouteTableMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMoveRouteTableMetadata,
        } as MoveRouteTableMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveRouteTableMetadata {
        const message = {
            ...baseMoveRouteTableMetadata,
        } as MoveRouteTableMetadata;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
        }
        return message;
    },

    toJSON(message: MoveRouteTableMetadata): unknown {
        const obj: any = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<MoveRouteTableMetadata>
    ): MoveRouteTableMetadata {
        const message = {
            ...baseMoveRouteTableMetadata,
        } as MoveRouteTableMetadata;
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
        }
        return message;
    },
};

/** A set of methods for managing RouteTable resources. */
export const RouteTableServiceService = {
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRouteTableRequest) =>
            Buffer.from(GetRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetRouteTableRequest.decode(value),
        responseSerialize: (value: RouteTable) =>
            Buffer.from(RouteTable.encode(value).finish()),
        responseDeserialize: (value: Buffer) => RouteTable.decode(value),
    },
    /** Retrieves the list of RouteTable resources in the specified folder. */
    list: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRouteTablesRequest) =>
            Buffer.from(ListRouteTablesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListRouteTablesRequest.decode(value),
        responseSerialize: (value: ListRouteTablesResponse) =>
            Buffer.from(ListRouteTablesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListRouteTablesResponse.decode(value),
    },
    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateRouteTableRequest) =>
            Buffer.from(CreateRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateRouteTableRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateRouteTableRequest) =>
            Buffer.from(UpdateRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateRouteTableRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified route table. */
    delete: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRouteTableRequest) =>
            Buffer.from(DeleteRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteRouteTableRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** List operations for the specified route table. */
    listOperations: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRouteTableOperationsRequest) =>
            Buffer.from(ListRouteTableOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListRouteTableOperationsRequest.decode(value),
        responseSerialize: (value: ListRouteTableOperationsResponse) =>
            Buffer.from(
                ListRouteTableOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListRouteTableOperationsResponse.decode(value),
    },
    /** Move route table to another folder. */
    move: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MoveRouteTableRequest) =>
            Buffer.from(MoveRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            MoveRouteTableRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface RouteTableServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    get: handleUnaryCall<GetRouteTableRequest, RouteTable>;
    /** Retrieves the list of RouteTable resources in the specified folder. */
    list: handleUnaryCall<ListRouteTablesRequest, ListRouteTablesResponse>;
    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateRouteTableRequest, Operation>;
    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: handleUnaryCall<UpdateRouteTableRequest, Operation>;
    /** Deletes the specified route table. */
    delete: handleUnaryCall<DeleteRouteTableRequest, Operation>;
    /** List operations for the specified route table. */
    listOperations: handleUnaryCall<
        ListRouteTableOperationsRequest,
        ListRouteTableOperationsResponse
    >;
    /** Move route table to another folder. */
    move: handleUnaryCall<MoveRouteTableRequest, Operation>;
}

export interface RouteTableServiceClient extends Client {
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    get(
        request: GetRouteTableRequest,
        callback: (error: ServiceError | null, response: RouteTable) => void
    ): ClientUnaryCall;
    get(
        request: GetRouteTableRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: RouteTable) => void
    ): ClientUnaryCall;
    get(
        request: GetRouteTableRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: RouteTable) => void
    ): ClientUnaryCall;
    /** Retrieves the list of RouteTable resources in the specified folder. */
    list(
        request: ListRouteTablesRequest,
        callback: (
            error: ServiceError | null,
            response: ListRouteTablesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListRouteTablesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListRouteTablesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListRouteTablesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListRouteTablesResponse
        ) => void
    ): ClientUnaryCall;
    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(
        request: CreateRouteTableRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateRouteTableRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateRouteTableRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(
        request: UpdateRouteTableRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateRouteTableRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateRouteTableRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified route table. */
    delete(
        request: DeleteRouteTableRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteRouteTableRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteRouteTableRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** List operations for the specified route table. */
    listOperations(
        request: ListRouteTableOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListRouteTableOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListRouteTableOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListRouteTableOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListRouteTableOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListRouteTableOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Move route table to another folder. */
    move(
        request: MoveRouteTableRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveRouteTableRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveRouteTableRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const RouteTableServiceClient = makeGenericClientConstructor(
    RouteTableServiceService,
    'yandex.cloud.vpc.v1.RouteTableService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): RouteTableServiceClient;
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