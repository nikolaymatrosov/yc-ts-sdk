/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { messageTypeRegistry } from '../../../../typeRegistry';
import { HttpRouter } from '../../../../yandex/cloud/apploadbalancer/v1/http_router';
import { VirtualHost } from '../../../../yandex/cloud/apploadbalancer/v1/virtual_host';
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

export interface GetHttpRouterRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest';
    /**
     * ID of the HTTP router to return.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
}

export interface ListHttpRoutersRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest';
    /**
     * ID of the folder to list HTTP routers in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListHttpRoutersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListHttpRoutersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters HTTP routers listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [HttpRouter.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-http-router`.
     */
    filter: string;
}

export interface ListHttpRoutersResponse {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse';
    /** List of HTTP routers in the specified folder. */
    httpRouters: HttpRouter[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListHttpRoutersRequest.page_size], use `next_page_token` as the value
     * for the [ListHttpRoutersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface DeleteHttpRouterRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest';
    /**
     * ID of the HTTP router to delete.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
}

export interface DeleteHttpRouterMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata';
    /** ID of the HTTP router that is being deleted. */
    httpRouterId: string;
}

export interface UpdateHttpRouterRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest';
    /**
     * ID of the HTTP router to update.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /** Field mask that specifies which attributes of the HTTP router should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name for the HTTP router.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the HTTP router. */
    description: string;
    /**
     * HTTP router labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [HttpRouterService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: { [key: string]: string };
    /**
     * New virtual hosts that combine routes inside the router.
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
     *
     * Only one virtual host with no authority (default match) can be specified.
     *
     * Existing list of virtual hosts is completely replaced by the specified list, so if you just want to add or remove
     * a virtual host, make a [VirtualHostService.Create] request or a [VirtualHostService.Delete] request.
     */
    virtualHosts: VirtualHost[];
}

export interface UpdateHttpRouterRequest_LabelsEntry {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateHttpRouterMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata';
    /** ID of the HTTP router that is being updated. */
    httpRouterId: string;
}

export interface CreateHttpRouterRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest';
    /**
     * ID of the folder to create an HTTP router in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the HTTP router.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the HTTP router. */
    description: string;
    /**
     * HTTP router labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: { [key: string]: string };
    /**
     * Virtual hosts that combine routes inside the router.
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
     *
     * Only one virtual host with no authority (default match) can be specified.
     */
    virtualHosts: VirtualHost[];
}

export interface CreateHttpRouterRequest_LabelsEntry {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface CreateHttpRouterMetadata {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata';
    /** ID of the HTTP router that is being created. */
    httpRouterId: string;
}

export interface ListHttpRouterOperationsRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest';
    /**
     * ID of the HTTP router to get operations for.
     *
     * To get the HTTP router ID, use a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListHttpRouterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListHttpRouterOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListHttpRouterOperationsResponse {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse';
    /** List of operations for the specified HTTP router. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListHttpRouterOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListHttpRouterOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetHttpRouterRequest: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest',
    httpRouterId: '',
};

export const GetHttpRouterRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest' as const,

    encode(
        message: GetHttpRouterRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetHttpRouterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetHttpRouterRequest } as GetHttpRouterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetHttpRouterRequest {
        const message = { ...baseGetHttpRouterRequest } as GetHttpRouterRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        return message;
    },

    toJSON(message: GetHttpRouterRequest): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetHttpRouterRequest>
    ): GetHttpRouterRequest {
        const message = { ...baseGetHttpRouterRequest } as GetHttpRouterRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(GetHttpRouterRequest.$type, GetHttpRouterRequest);

const baseListHttpRoutersRequest: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListHttpRoutersRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest' as const,

    encode(
        message: ListHttpRoutersRequest,
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
    ): ListHttpRoutersRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListHttpRoutersRequest,
        } as ListHttpRoutersRequest;
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

    fromJSON(object: any): ListHttpRoutersRequest {
        const message = {
            ...baseListHttpRoutersRequest,
        } as ListHttpRoutersRequest;
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

    toJSON(message: ListHttpRoutersRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListHttpRoutersRequest>
    ): ListHttpRoutersRequest {
        const message = {
            ...baseListHttpRoutersRequest,
        } as ListHttpRoutersRequest;
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

messageTypeRegistry.set(ListHttpRoutersRequest.$type, ListHttpRoutersRequest);

const baseListHttpRoutersResponse: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse',
    nextPageToken: '',
};

export const ListHttpRoutersResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse' as const,

    encode(
        message: ListHttpRoutersResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.httpRouters) {
            HttpRouter.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListHttpRoutersResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListHttpRoutersResponse,
        } as ListHttpRoutersResponse;
        message.httpRouters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouters.push(
                        HttpRouter.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListHttpRoutersResponse {
        const message = {
            ...baseListHttpRoutersResponse,
        } as ListHttpRoutersResponse;
        message.httpRouters = [];
        if (object.httpRouters !== undefined && object.httpRouters !== null) {
            for (const e of object.httpRouters) {
                message.httpRouters.push(HttpRouter.fromJSON(e));
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

    toJSON(message: ListHttpRoutersResponse): unknown {
        const obj: any = {};
        if (message.httpRouters) {
            obj.httpRouters = message.httpRouters.map((e) =>
                e ? HttpRouter.toJSON(e) : undefined
            );
        } else {
            obj.httpRouters = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListHttpRoutersResponse>
    ): ListHttpRoutersResponse {
        const message = {
            ...baseListHttpRoutersResponse,
        } as ListHttpRoutersResponse;
        message.httpRouters = [];
        if (object.httpRouters !== undefined && object.httpRouters !== null) {
            for (const e of object.httpRouters) {
                message.httpRouters.push(HttpRouter.fromPartial(e));
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

messageTypeRegistry.set(ListHttpRoutersResponse.$type, ListHttpRoutersResponse);

const baseDeleteHttpRouterRequest: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest',
    httpRouterId: '',
};

export const DeleteHttpRouterRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest' as const,

    encode(
        message: DeleteHttpRouterRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteHttpRouterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteHttpRouterRequest,
        } as DeleteHttpRouterRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteHttpRouterRequest {
        const message = {
            ...baseDeleteHttpRouterRequest,
        } as DeleteHttpRouterRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        return message;
    },

    toJSON(message: DeleteHttpRouterRequest): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteHttpRouterRequest>
    ): DeleteHttpRouterRequest {
        const message = {
            ...baseDeleteHttpRouterRequest,
        } as DeleteHttpRouterRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(DeleteHttpRouterRequest.$type, DeleteHttpRouterRequest);

const baseDeleteHttpRouterMetadata: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata',
    httpRouterId: '',
};

export const DeleteHttpRouterMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteHttpRouterMetadata' as const,

    encode(
        message: DeleteHttpRouterMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteHttpRouterMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteHttpRouterMetadata,
        } as DeleteHttpRouterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteHttpRouterMetadata {
        const message = {
            ...baseDeleteHttpRouterMetadata,
        } as DeleteHttpRouterMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        return message;
    },

    toJSON(message: DeleteHttpRouterMetadata): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteHttpRouterMetadata>
    ): DeleteHttpRouterMetadata {
        const message = {
            ...baseDeleteHttpRouterMetadata,
        } as DeleteHttpRouterMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    DeleteHttpRouterMetadata.$type,
    DeleteHttpRouterMetadata
);

const baseUpdateHttpRouterRequest: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest',
    httpRouterId: '',
    name: '',
    description: '',
};

export const UpdateHttpRouterRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest' as const,

    encode(
        message: UpdateHttpRouterRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
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
            UpdateHttpRouterRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork()
            ).ldelim();
        });
        for (const v of message.virtualHosts) {
            VirtualHost.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateHttpRouterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateHttpRouterRequest,
        } as UpdateHttpRouterRequest;
        message.labels = {};
        message.virtualHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
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
                    const entry5 = UpdateHttpRouterRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.virtualHosts.push(
                        VirtualHost.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateHttpRouterRequest {
        const message = {
            ...baseUpdateHttpRouterRequest,
        } as UpdateHttpRouterRequest;
        message.labels = {};
        message.virtualHosts = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
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
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UpdateHttpRouterRequest): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
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
        if (message.virtualHosts) {
            obj.virtualHosts = message.virtualHosts.map((e) =>
                e ? VirtualHost.toJSON(e) : undefined
            );
        } else {
            obj.virtualHosts = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateHttpRouterRequest>
    ): UpdateHttpRouterRequest {
        const message = {
            ...baseUpdateHttpRouterRequest,
        } as UpdateHttpRouterRequest;
        message.labels = {};
        message.virtualHosts = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
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
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromPartial(e));
            }
        }
        return message;
    },
};

messageTypeRegistry.set(UpdateHttpRouterRequest.$type, UpdateHttpRouterRequest);

const baseUpdateHttpRouterRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateHttpRouterRequest_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest.LabelsEntry' as const,

    encode(
        message: UpdateHttpRouterRequest_LabelsEntry,
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
    ): UpdateHttpRouterRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateHttpRouterRequest_LabelsEntry,
        } as UpdateHttpRouterRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateHttpRouterRequest_LabelsEntry {
        const message = {
            ...baseUpdateHttpRouterRequest_LabelsEntry,
        } as UpdateHttpRouterRequest_LabelsEntry;
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

    toJSON(message: UpdateHttpRouterRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateHttpRouterRequest_LabelsEntry>
    ): UpdateHttpRouterRequest_LabelsEntry {
        const message = {
            ...baseUpdateHttpRouterRequest_LabelsEntry,
        } as UpdateHttpRouterRequest_LabelsEntry;
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
    UpdateHttpRouterRequest_LabelsEntry.$type,
    UpdateHttpRouterRequest_LabelsEntry
);

const baseUpdateHttpRouterMetadata: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata',
    httpRouterId: '',
};

export const UpdateHttpRouterMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateHttpRouterMetadata' as const,

    encode(
        message: UpdateHttpRouterMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateHttpRouterMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateHttpRouterMetadata,
        } as UpdateHttpRouterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateHttpRouterMetadata {
        const message = {
            ...baseUpdateHttpRouterMetadata,
        } as UpdateHttpRouterMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        return message;
    },

    toJSON(message: UpdateHttpRouterMetadata): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateHttpRouterMetadata>
    ): UpdateHttpRouterMetadata {
        const message = {
            ...baseUpdateHttpRouterMetadata,
        } as UpdateHttpRouterMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    UpdateHttpRouterMetadata.$type,
    UpdateHttpRouterMetadata
);

const baseCreateHttpRouterRequest: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest',
    folderId: '',
    name: '',
    description: '',
};

export const CreateHttpRouterRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest' as const,

    encode(
        message: CreateHttpRouterRequest,
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
            CreateHttpRouterRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(34).fork()
            ).ldelim();
        });
        for (const v of message.virtualHosts) {
            VirtualHost.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateHttpRouterRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateHttpRouterRequest,
        } as CreateHttpRouterRequest;
        message.labels = {};
        message.virtualHosts = [];
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
                    const entry4 = CreateHttpRouterRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.virtualHosts.push(
                        VirtualHost.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateHttpRouterRequest {
        const message = {
            ...baseCreateHttpRouterRequest,
        } as CreateHttpRouterRequest;
        message.labels = {};
        message.virtualHosts = [];
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
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: CreateHttpRouterRequest): unknown {
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
        if (message.virtualHosts) {
            obj.virtualHosts = message.virtualHosts.map((e) =>
                e ? VirtualHost.toJSON(e) : undefined
            );
        } else {
            obj.virtualHosts = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateHttpRouterRequest>
    ): CreateHttpRouterRequest {
        const message = {
            ...baseCreateHttpRouterRequest,
        } as CreateHttpRouterRequest;
        message.labels = {};
        message.virtualHosts = [];
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
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromPartial(e));
            }
        }
        return message;
    },
};

messageTypeRegistry.set(CreateHttpRouterRequest.$type, CreateHttpRouterRequest);

const baseCreateHttpRouterRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateHttpRouterRequest_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest.LabelsEntry' as const,

    encode(
        message: CreateHttpRouterRequest_LabelsEntry,
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
    ): CreateHttpRouterRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateHttpRouterRequest_LabelsEntry,
        } as CreateHttpRouterRequest_LabelsEntry;
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

    fromJSON(object: any): CreateHttpRouterRequest_LabelsEntry {
        const message = {
            ...baseCreateHttpRouterRequest_LabelsEntry,
        } as CreateHttpRouterRequest_LabelsEntry;
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

    toJSON(message: CreateHttpRouterRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateHttpRouterRequest_LabelsEntry>
    ): CreateHttpRouterRequest_LabelsEntry {
        const message = {
            ...baseCreateHttpRouterRequest_LabelsEntry,
        } as CreateHttpRouterRequest_LabelsEntry;
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
    CreateHttpRouterRequest_LabelsEntry.$type,
    CreateHttpRouterRequest_LabelsEntry
);

const baseCreateHttpRouterMetadata: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata',
    httpRouterId: '',
};

export const CreateHttpRouterMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateHttpRouterMetadata' as const,

    encode(
        message: CreateHttpRouterMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateHttpRouterMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateHttpRouterMetadata,
        } as CreateHttpRouterMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateHttpRouterMetadata {
        const message = {
            ...baseCreateHttpRouterMetadata,
        } as CreateHttpRouterMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        return message;
    },

    toJSON(message: CreateHttpRouterMetadata): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateHttpRouterMetadata>
    ): CreateHttpRouterMetadata {
        const message = {
            ...baseCreateHttpRouterMetadata,
        } as CreateHttpRouterMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    CreateHttpRouterMetadata.$type,
    CreateHttpRouterMetadata
);

const baseListHttpRouterOperationsRequest: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest',
    httpRouterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListHttpRouterOperationsRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest' as const,

    encode(
        message: ListHttpRouterOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
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
    ): ListHttpRouterOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListHttpRouterOperationsRequest,
        } as ListHttpRouterOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
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

    fromJSON(object: any): ListHttpRouterOperationsRequest {
        const message = {
            ...baseListHttpRouterOperationsRequest,
        } as ListHttpRouterOperationsRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
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

    toJSON(message: ListHttpRouterOperationsRequest): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListHttpRouterOperationsRequest>
    ): ListHttpRouterOperationsRequest {
        const message = {
            ...baseListHttpRouterOperationsRequest,
        } as ListHttpRouterOperationsRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
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

messageTypeRegistry.set(
    ListHttpRouterOperationsRequest.$type,
    ListHttpRouterOperationsRequest
);

const baseListHttpRouterOperationsResponse: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse',
    nextPageToken: '',
};

export const ListHttpRouterOperationsResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse' as const,

    encode(
        message: ListHttpRouterOperationsResponse,
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
    ): ListHttpRouterOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListHttpRouterOperationsResponse,
        } as ListHttpRouterOperationsResponse;
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

    fromJSON(object: any): ListHttpRouterOperationsResponse {
        const message = {
            ...baseListHttpRouterOperationsResponse,
        } as ListHttpRouterOperationsResponse;
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

    toJSON(message: ListHttpRouterOperationsResponse): unknown {
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
        object: DeepPartial<ListHttpRouterOperationsResponse>
    ): ListHttpRouterOperationsResponse {
        const message = {
            ...baseListHttpRouterOperationsResponse,
        } as ListHttpRouterOperationsResponse;
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
    ListHttpRouterOperationsResponse.$type,
    ListHttpRouterOperationsResponse
);

/** A set of methods for managing HTTP routers. */
export const HttpRouterServiceService = {
    /**
     * Returns the specified HTTP router.
     *
     * To get the list of all available HTTP routers, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetHttpRouterRequest) =>
            Buffer.from(GetHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetHttpRouterRequest.decode(value),
        responseSerialize: (value: HttpRouter) =>
            Buffer.from(HttpRouter.encode(value).finish()),
        responseDeserialize: (value: Buffer) => HttpRouter.decode(value),
    },
    /** Lists HTTP routers in the specified folder. */
    list: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListHttpRoutersRequest) =>
            Buffer.from(ListHttpRoutersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListHttpRoutersRequest.decode(value),
        responseSerialize: (value: ListHttpRoutersResponse) =>
            Buffer.from(ListHttpRoutersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListHttpRoutersResponse.decode(value),
    },
    /** Creates an HTTP router in the specified folder. */
    create: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateHttpRouterRequest) =>
            Buffer.from(CreateHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateHttpRouterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified HTTP router. */
    update: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateHttpRouterRequest) =>
            Buffer.from(UpdateHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateHttpRouterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified HTTP router. */
    delete: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteHttpRouterRequest) =>
            Buffer.from(DeleteHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteHttpRouterRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified HTTP router. */
    listOperations: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListHttpRouterOperationsRequest) =>
            Buffer.from(ListHttpRouterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListHttpRouterOperationsRequest.decode(value),
        responseSerialize: (value: ListHttpRouterOperationsResponse) =>
            Buffer.from(
                ListHttpRouterOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListHttpRouterOperationsResponse.decode(value),
    },
} as const;

export interface HttpRouterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified HTTP router.
     *
     * To get the list of all available HTTP routers, make a [List] request.
     */
    get: handleUnaryCall<GetHttpRouterRequest, HttpRouter>;
    /** Lists HTTP routers in the specified folder. */
    list: handleUnaryCall<ListHttpRoutersRequest, ListHttpRoutersResponse>;
    /** Creates an HTTP router in the specified folder. */
    create: handleUnaryCall<CreateHttpRouterRequest, Operation>;
    /** Updates the specified HTTP router. */
    update: handleUnaryCall<UpdateHttpRouterRequest, Operation>;
    /** Deletes the specified HTTP router. */
    delete: handleUnaryCall<DeleteHttpRouterRequest, Operation>;
    /** Lists operations for the specified HTTP router. */
    listOperations: handleUnaryCall<
        ListHttpRouterOperationsRequest,
        ListHttpRouterOperationsResponse
    >;
}

export interface HttpRouterServiceClient extends Client {
    /**
     * Returns the specified HTTP router.
     *
     * To get the list of all available HTTP routers, make a [List] request.
     */
    get(
        request: GetHttpRouterRequest,
        callback: (error: ServiceError | null, response: HttpRouter) => void
    ): ClientUnaryCall;
    get(
        request: GetHttpRouterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: HttpRouter) => void
    ): ClientUnaryCall;
    get(
        request: GetHttpRouterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: HttpRouter) => void
    ): ClientUnaryCall;
    /** Lists HTTP routers in the specified folder. */
    list(
        request: ListHttpRoutersRequest,
        callback: (
            error: ServiceError | null,
            response: ListHttpRoutersResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListHttpRoutersRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListHttpRoutersResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListHttpRoutersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListHttpRoutersResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates an HTTP router in the specified folder. */
    create(
        request: CreateHttpRouterRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateHttpRouterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateHttpRouterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified HTTP router. */
    update(
        request: UpdateHttpRouterRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateHttpRouterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateHttpRouterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified HTTP router. */
    delete(
        request: DeleteHttpRouterRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteHttpRouterRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteHttpRouterRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified HTTP router. */
    listOperations(
        request: ListHttpRouterOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListHttpRouterOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListHttpRouterOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListHttpRouterOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListHttpRouterOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListHttpRouterOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const HttpRouterServiceClient = makeGenericClientConstructor(
    HttpRouterServiceService,
    'yandex.cloud.apploadbalancer.v1.HttpRouterService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): HttpRouterServiceClient;
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
