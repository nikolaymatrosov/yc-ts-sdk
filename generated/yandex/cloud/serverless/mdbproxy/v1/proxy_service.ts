/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../../yandex/cloud/access/access';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import {
    Proxy,
    Target,
} from '../../../../../yandex/cloud/serverless/mdbproxy/v1/proxy';
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

export const protobufPackage = 'yandex.cloud.serverless.mdbproxy.v1';

export interface GetProxyRequest {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.GetProxyRequest';
    /**
     * ID of the proxy to return.
     *
     * To get a proxy ID make a [ProxyService.List] request.
     */
    proxyId: string;
}

export interface ListProxyRequest {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyRequest';
    /**
     * ID of the folder to list proxies in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListProxyResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListProxyResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters proxies listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Proxy.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Example of a filter: `name=my-proxy`.
     */
    filter: string;
}

export interface ListProxyResponse {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyResponse';
    /** List of proxies in the specified folder. */
    proxies: Proxy[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListProxyRequest.page_size], use `nextPageToken` as the value
     * for the [ListProxyRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateProxyRequest {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest';
    /**
     * ID of the folder to create a proxy in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the proxy.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the proxy. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Proxy target. */
    target: Target | undefined;
}

export interface CreateProxyRequest_LabelsEntry {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface CreateProxyMetadata {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyMetadata';
    /** ID of the proxy. */
    proxyId: string;
}

export interface UpdateProxyRequest {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest';
    /** ID of the proxy to update. */
    proxyId: string;
    /** Field mask that specifies which attributes of the proxy should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name for the proxy.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description for the proxy. */
    description: string;
    /** Proxy labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** Proxy target. */
    target: Target | undefined;
}

export interface UpdateProxyRequest_LabelsEntry {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateProxyMetadata {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyMetadata';
    /** ID of the proxy. */
    proxyId: string;
}

export interface DeleteProxyRequest {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.DeleteProxyRequest';
    /** ID of the proxy. */
    proxyId: string;
}

export interface DeleteProxyMetadata {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.DeleteProxyMetadata';
    /** ID of the proxy. */
    proxyId: string;
}

export interface ListProxyOperationsRequest {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsRequest';
    /** ID of the proxy to list operations for. */
    proxyId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListProxyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListProxyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}

export interface ListProxyOperationsResponse {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsResponse';
    /** List of operations for the specified proxy. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListProxyOperationsRequest.page_size], use `nextPageToken` as the value
     * for the [ListProxyOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetProxyRequest: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.GetProxyRequest',
    proxyId: '',
};

export const GetProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.GetProxyRequest' as const,

    encode(
        message: GetProxyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetProxyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetProxyRequest } as GetProxyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetProxyRequest {
        const message = { ...baseGetProxyRequest } as GetProxyRequest;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        } else {
            message.proxyId = '';
        }
        return message;
    },

    toJSON(message: GetProxyRequest): unknown {
        const obj: any = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetProxyRequest>): GetProxyRequest {
        const message = { ...baseGetProxyRequest } as GetProxyRequest;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        } else {
            message.proxyId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(GetProxyRequest.$type, GetProxyRequest);

const baseListProxyRequest: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyRequest' as const,

    encode(
        message: ListProxyRequest,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ListProxyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListProxyRequest } as ListProxyRequest;
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

    fromJSON(object: any): ListProxyRequest {
        const message = { ...baseListProxyRequest } as ListProxyRequest;
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

    toJSON(message: ListProxyRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(object: DeepPartial<ListProxyRequest>): ListProxyRequest {
        const message = { ...baseListProxyRequest } as ListProxyRequest;
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

messageTypeRegistry.set(ListProxyRequest.$type, ListProxyRequest);

const baseListProxyResponse: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyResponse',
    nextPageToken: '',
};

export const ListProxyResponse = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyResponse' as const,

    encode(
        message: ListProxyResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.proxies) {
            Proxy.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListProxyResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListProxyResponse } as ListProxyResponse;
        message.proxies = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxies.push(Proxy.decode(reader, reader.uint32()));
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

    fromJSON(object: any): ListProxyResponse {
        const message = { ...baseListProxyResponse } as ListProxyResponse;
        message.proxies = [];
        if (object.proxies !== undefined && object.proxies !== null) {
            for (const e of object.proxies) {
                message.proxies.push(Proxy.fromJSON(e));
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

    toJSON(message: ListProxyResponse): unknown {
        const obj: any = {};
        if (message.proxies) {
            obj.proxies = message.proxies.map((e) =>
                e ? Proxy.toJSON(e) : undefined
            );
        } else {
            obj.proxies = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListProxyResponse>): ListProxyResponse {
        const message = { ...baseListProxyResponse } as ListProxyResponse;
        message.proxies = [];
        if (object.proxies !== undefined && object.proxies !== null) {
            for (const e of object.proxies) {
                message.proxies.push(Proxy.fromPartial(e));
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

messageTypeRegistry.set(ListProxyResponse.$type, ListProxyResponse);

const baseCreateProxyRequest: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest',
    folderId: '',
    name: '',
    description: '',
};

export const CreateProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest' as const,

    encode(
        message: CreateProxyRequest,
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
            CreateProxyRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.target !== undefined) {
            Target.encode(message.target, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateProxyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProxyRequest } as CreateProxyRequest;
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
                    const entry4 = CreateProxyRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.target = Target.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateProxyRequest {
        const message = { ...baseCreateProxyRequest } as CreateProxyRequest;
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
        if (object.target !== undefined && object.target !== null) {
            message.target = Target.fromJSON(object.target);
        } else {
            message.target = undefined;
        }
        return message;
    },

    toJSON(message: CreateProxyRequest): unknown {
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
        message.target !== undefined &&
            (obj.target = message.target
                ? Target.toJSON(message.target)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateProxyRequest>): CreateProxyRequest {
        const message = { ...baseCreateProxyRequest } as CreateProxyRequest;
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
        if (object.target !== undefined && object.target !== null) {
            message.target = Target.fromPartial(object.target);
        } else {
            message.target = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(CreateProxyRequest.$type, CreateProxyRequest);

const baseCreateProxyRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateProxyRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry' as const,

    encode(
        message: CreateProxyRequest_LabelsEntry,
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
    ): CreateProxyRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateProxyRequest_LabelsEntry,
        } as CreateProxyRequest_LabelsEntry;
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

    fromJSON(object: any): CreateProxyRequest_LabelsEntry {
        const message = {
            ...baseCreateProxyRequest_LabelsEntry,
        } as CreateProxyRequest_LabelsEntry;
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

    toJSON(message: CreateProxyRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateProxyRequest_LabelsEntry>
    ): CreateProxyRequest_LabelsEntry {
        const message = {
            ...baseCreateProxyRequest_LabelsEntry,
        } as CreateProxyRequest_LabelsEntry;
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

messageTypeRegistry.set(
    CreateProxyRequest_LabelsEntry.$type,
    CreateProxyRequest_LabelsEntry
);

const baseCreateProxyMetadata: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyMetadata',
    proxyId: '',
};

export const CreateProxyMetadata = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyMetadata' as const,

    encode(
        message: CreateProxyMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateProxyMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProxyMetadata } as CreateProxyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateProxyMetadata {
        const message = { ...baseCreateProxyMetadata } as CreateProxyMetadata;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        } else {
            message.proxyId = '';
        }
        return message;
    },

    toJSON(message: CreateProxyMetadata): unknown {
        const obj: any = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateProxyMetadata>): CreateProxyMetadata {
        const message = { ...baseCreateProxyMetadata } as CreateProxyMetadata;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        } else {
            message.proxyId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(CreateProxyMetadata.$type, CreateProxyMetadata);

const baseUpdateProxyRequest: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest',
    proxyId: '',
    name: '',
    description: '',
};

export const UpdateProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest' as const,

    encode(
        message: UpdateProxyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
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
            UpdateProxyRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.target !== undefined) {
            Target.encode(message.target, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateProxyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateProxyRequest } as UpdateProxyRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
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
                    const entry5 = UpdateProxyRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.target = Target.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateProxyRequest {
        const message = { ...baseUpdateProxyRequest } as UpdateProxyRequest;
        message.labels = {};
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        } else {
            message.proxyId = '';
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
        if (object.target !== undefined && object.target !== null) {
            message.target = Target.fromJSON(object.target);
        } else {
            message.target = undefined;
        }
        return message;
    },

    toJSON(message: UpdateProxyRequest): unknown {
        const obj: any = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
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
        message.target !== undefined &&
            (obj.target = message.target
                ? Target.toJSON(message.target)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateProxyRequest>): UpdateProxyRequest {
        const message = { ...baseUpdateProxyRequest } as UpdateProxyRequest;
        message.labels = {};
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        } else {
            message.proxyId = '';
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
        if (object.target !== undefined && object.target !== null) {
            message.target = Target.fromPartial(object.target);
        } else {
            message.target = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(UpdateProxyRequest.$type, UpdateProxyRequest);

const baseUpdateProxyRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateProxyRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry' as const,

    encode(
        message: UpdateProxyRequest_LabelsEntry,
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
    ): UpdateProxyRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateProxyRequest_LabelsEntry,
        } as UpdateProxyRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateProxyRequest_LabelsEntry {
        const message = {
            ...baseUpdateProxyRequest_LabelsEntry,
        } as UpdateProxyRequest_LabelsEntry;
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

    toJSON(message: UpdateProxyRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateProxyRequest_LabelsEntry>
    ): UpdateProxyRequest_LabelsEntry {
        const message = {
            ...baseUpdateProxyRequest_LabelsEntry,
        } as UpdateProxyRequest_LabelsEntry;
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

messageTypeRegistry.set(
    UpdateProxyRequest_LabelsEntry.$type,
    UpdateProxyRequest_LabelsEntry
);

const baseUpdateProxyMetadata: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyMetadata',
    proxyId: '',
};

export const UpdateProxyMetadata = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyMetadata' as const,

    encode(
        message: UpdateProxyMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateProxyMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateProxyMetadata } as UpdateProxyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateProxyMetadata {
        const message = { ...baseUpdateProxyMetadata } as UpdateProxyMetadata;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        } else {
            message.proxyId = '';
        }
        return message;
    },

    toJSON(message: UpdateProxyMetadata): unknown {
        const obj: any = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateProxyMetadata>): UpdateProxyMetadata {
        const message = { ...baseUpdateProxyMetadata } as UpdateProxyMetadata;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        } else {
            message.proxyId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(UpdateProxyMetadata.$type, UpdateProxyMetadata);

const baseDeleteProxyRequest: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.DeleteProxyRequest',
    proxyId: '',
};

export const DeleteProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.DeleteProxyRequest' as const,

    encode(
        message: DeleteProxyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteProxyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteProxyRequest } as DeleteProxyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteProxyRequest {
        const message = { ...baseDeleteProxyRequest } as DeleteProxyRequest;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        } else {
            message.proxyId = '';
        }
        return message;
    },

    toJSON(message: DeleteProxyRequest): unknown {
        const obj: any = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteProxyRequest>): DeleteProxyRequest {
        const message = { ...baseDeleteProxyRequest } as DeleteProxyRequest;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        } else {
            message.proxyId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(DeleteProxyRequest.$type, DeleteProxyRequest);

const baseDeleteProxyMetadata: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.DeleteProxyMetadata',
    proxyId: '',
};

export const DeleteProxyMetadata = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.DeleteProxyMetadata' as const,

    encode(
        message: DeleteProxyMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteProxyMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteProxyMetadata } as DeleteProxyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteProxyMetadata {
        const message = { ...baseDeleteProxyMetadata } as DeleteProxyMetadata;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        } else {
            message.proxyId = '';
        }
        return message;
    },

    toJSON(message: DeleteProxyMetadata): unknown {
        const obj: any = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteProxyMetadata>): DeleteProxyMetadata {
        const message = { ...baseDeleteProxyMetadata } as DeleteProxyMetadata;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        } else {
            message.proxyId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(DeleteProxyMetadata.$type, DeleteProxyMetadata);

const baseListProxyOperationsRequest: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsRequest',
    proxyId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListProxyOperationsRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsRequest' as const,

    encode(
        message: ListProxyOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
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
    ): ListProxyOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListProxyOperationsRequest,
        } as ListProxyOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
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

    fromJSON(object: any): ListProxyOperationsRequest {
        const message = {
            ...baseListProxyOperationsRequest,
        } as ListProxyOperationsRequest;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        } else {
            message.proxyId = '';
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

    toJSON(message: ListProxyOperationsRequest): unknown {
        const obj: any = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListProxyOperationsRequest>
    ): ListProxyOperationsRequest {
        const message = {
            ...baseListProxyOperationsRequest,
        } as ListProxyOperationsRequest;
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        } else {
            message.proxyId = '';
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

messageTypeRegistry.set(
    ListProxyOperationsRequest.$type,
    ListProxyOperationsRequest
);

const baseListProxyOperationsResponse: object = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsResponse',
    nextPageToken: '',
};

export const ListProxyOperationsResponse = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsResponse' as const,

    encode(
        message: ListProxyOperationsResponse,
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
    ): ListProxyOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListProxyOperationsResponse,
        } as ListProxyOperationsResponse;
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

    fromJSON(object: any): ListProxyOperationsResponse {
        const message = {
            ...baseListProxyOperationsResponse,
        } as ListProxyOperationsResponse;
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

    toJSON(message: ListProxyOperationsResponse): unknown {
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
        object: DeepPartial<ListProxyOperationsResponse>
    ): ListProxyOperationsResponse {
        const message = {
            ...baseListProxyOperationsResponse,
        } as ListProxyOperationsResponse;
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

messageTypeRegistry.set(
    ListProxyOperationsResponse.$type,
    ListProxyOperationsResponse
);

/** A set of methods for managing serverless MDB proxy. */
export const ProxyServiceService = {
    /**
     * Returns the specified proxy.
     *
     * To get the list of all available proxies, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetProxyRequest) =>
            Buffer.from(GetProxyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetProxyRequest.decode(value),
        responseSerialize: (value: Proxy) =>
            Buffer.from(Proxy.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Proxy.decode(value),
    },
    /** Retrieves the list of proxies in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListProxyRequest) =>
            Buffer.from(ListProxyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListProxyRequest.decode(value),
        responseSerialize: (value: ListProxyResponse) =>
            Buffer.from(ListProxyResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListProxyResponse.decode(value),
    },
    /** Creates a proxy in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateProxyRequest) =>
            Buffer.from(CreateProxyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => CreateProxyRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified proxy. */
    update: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateProxyRequest) =>
            Buffer.from(UpdateProxyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateProxyRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified proxy. */
    delete: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteProxyRequest) =>
            Buffer.from(DeleteProxyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteProxyRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified proxy. */
    listOperations: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListProxyOperationsRequest) =>
            Buffer.from(ListProxyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListProxyOperationsRequest.decode(value),
        responseSerialize: (value: ListProxyOperationsResponse) =>
            Buffer.from(ListProxyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListProxyOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified proxy. */
    listAccessBindings: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListAccessBindings',
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
    /** Sets access bindings for the proxy. */
    setAccessBindings: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/SetAccessBindings',
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
    /** Updates access bindings for the specified proxy. */
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/UpdateAccessBindings',
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

export interface ProxyServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified proxy.
     *
     * To get the list of all available proxies, make a [List] request.
     */
    get: handleUnaryCall<GetProxyRequest, Proxy>;
    /** Retrieves the list of proxies in the specified folder. */
    list: handleUnaryCall<ListProxyRequest, ListProxyResponse>;
    /** Creates a proxy in the specified folder. */
    create: handleUnaryCall<CreateProxyRequest, Operation>;
    /** Updates the specified proxy. */
    update: handleUnaryCall<UpdateProxyRequest, Operation>;
    /** Deletes the specified proxy. */
    delete: handleUnaryCall<DeleteProxyRequest, Operation>;
    /** Lists operations for the specified proxy. */
    listOperations: handleUnaryCall<
        ListProxyOperationsRequest,
        ListProxyOperationsResponse
    >;
    /** Lists existing access bindings for the specified proxy. */
    listAccessBindings: handleUnaryCall<
        ListAccessBindingsRequest,
        ListAccessBindingsResponse
    >;
    /** Sets access bindings for the proxy. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified proxy. */
    updateAccessBindings: handleUnaryCall<
        UpdateAccessBindingsRequest,
        Operation
    >;
}

export interface ProxyServiceClient extends Client {
    /**
     * Returns the specified proxy.
     *
     * To get the list of all available proxies, make a [List] request.
     */
    get(
        request: GetProxyRequest,
        callback: (error: ServiceError | null, response: Proxy) => void
    ): ClientUnaryCall;
    get(
        request: GetProxyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Proxy) => void
    ): ClientUnaryCall;
    get(
        request: GetProxyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Proxy) => void
    ): ClientUnaryCall;
    /** Retrieves the list of proxies in the specified folder. */
    list(
        request: ListProxyRequest,
        callback: (
            error: ServiceError | null,
            response: ListProxyResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListProxyRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListProxyResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListProxyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListProxyResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a proxy in the specified folder. */
    create(
        request: CreateProxyRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateProxyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateProxyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified proxy. */
    update(
        request: UpdateProxyRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateProxyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateProxyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified proxy. */
    delete(
        request: DeleteProxyRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteProxyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteProxyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified proxy. */
    listOperations(
        request: ListProxyOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListProxyOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListProxyOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListProxyOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListProxyOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListProxyOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists existing access bindings for the specified proxy. */
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
    /** Sets access bindings for the proxy. */
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
    /** Updates access bindings for the specified proxy. */
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

export const ProxyServiceClient = makeGenericClientConstructor(
    ProxyServiceService,
    'yandex.cloud.serverless.mdbproxy.v1.ProxyService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ProxyServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
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
