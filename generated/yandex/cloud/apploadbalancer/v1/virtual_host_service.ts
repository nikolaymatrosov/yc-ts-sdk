/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import {
    VirtualHost,
    Route,
    HeaderModification,
    HttpRoute,
    GrpcRoute,
} from '../../../../yandex/cloud/apploadbalancer/v1/virtual_host';
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

export interface GetVirtualHostRequest {
    /**
     * ID of the HTTP router that the virtual host belongs to.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * Name of the virtual host to return.
     *
     * To get the virtual host name, make a [VirtualHostService.List] request.
     */
    virtualHostName: string;
}

export interface ListVirtualHostsRequest {
    /**
     * ID of the HTTP router to list virtual hosts in.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListVirtualHostsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListVirtualHostsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListVirtualHostsResponse {
    /** List of virtual hosts of the specified HTTP router. */
    virtualHosts: VirtualHost[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListVirtualHostsRequest.page_size], use `next_page_token` as the value
     * for the [ListVirtualHostsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateVirtualHostRequest {
    /**
     * ID of the HTTP router to create a virtual host in.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /** Name of the virtual host. The name must be unique within the HTTP router and cannot be changed after creation. */
    name: string;
    /**
     * List of domains that are attributed to the virtual host.
     *
     * The host is selected to process the request received by the load balancer
     * if the domain specified in the HTTP/1.1 `Host` header or the HTTP/2 `:authority` pseudo-header matches a domain
     * specified in the host.
     *
     * A wildcard asterisk character (`*`) matches 0 or more characters.
     *
     * If not specified, all domains are attributed to the host, which is the same as specifying a `*` value.
     * An HTTP router must not contain more than one virtual host to which all domains are attributed.
     */
    authority: string[];
    /**
     * Routes of the virtual host.
     *
     * A route contains a set of conditions (predicates) that are used by the load balancer to select the route
     * for the request and an action on the request.
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#routes).
     *
     * The order of routes matters: the first route whose predicate matches the request is selected.
     * The most specific routes should be at the top of the list, so that they are not overridden.
     * For example, if the first HTTP route is configured, via [HttpRoute.match], to match paths prefixed with just `/`,
     * other routes are never matched.
     */
    routes: Route[];
    /** Modifications that are made to the headers of incoming HTTP requests before they are forwarded to backends. */
    modifyRequestHeaders: HeaderModification[];
    /**
     * Modifications that are made to the headers of HTTP responses received from backends
     * before responses are forwarded to clients.
     */
    modifyResponseHeaders: HeaderModification[];
}

export interface CreateVirtualHostMetadata {
    /** ID of the HTTP router that the virtual host is being created in. */
    httpRouterId: string;
    /** Name of the virtual host that is being created. */
    virtualHostName: string;
}

export interface UpdateVirtualHostRequest {
    /**
     * ID of the HTTP router to update a virtual host in.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * Name of the virtual host.
     *
     * Used only to refer to the virtual host. The name of a host cannot be changed.
     *
     * To get the virtual host name, make a [VirtualHostService.List] request.
     */
    virtualHostName: string;
    /** Field mask that specifies which attributes of the virtual host should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New list of domains to attribute to the virtual host.
     *
     * The host is selected to process the request received by the load balancer
     * if the domain specified in the HTTP/1.1 `Host` header or the HTTP/2 `:authority` pseudo-header matches a domain
     * specified in the host.
     *
     * A wildcard asterisk character (`*`) matches 0 or more characters.
     *
     * Existing list of domains is completely replaced by the specified list.
     *
     * If not specified, all domains are attributed to the host, which is the same as specifying a `*` value.
     * An HTTP router must not contain more than one virtual host to which all domains are attributed.
     */
    authority: string[];
    /**
     * New list of routes of the virtual host.
     *
     * A route contains a set of conditions (predicates) that are used by the load balancer to select the route
     * for the request and an action on the request.
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#routes).
     *
     * The order of routes matters: the first route whose predicate matches the request is selected.
     * The most specific routes should be at the top of the list, so that they are not overridden.
     * For example, if the first HTTP route is configured, via [HttpRoute.match], to match paths prefixed with just `/`,
     * other routes are never matched.
     *
     * Existing list of routes is completely replaced by the specified list, so if you just want to remove a route,
     * make a [VirtualHostService.RemoveRoute] request.
     */
    routes: Route[];
    /**
     * New list of modifications that are made to the headers of incoming HTTP requests
     * before they are forwarded to backends.
     *
     * Existing list of modifications is completely replaced by the specified list.
     */
    modifyRequestHeaders: HeaderModification[];
    /**
     * New list of modifications that are made to the headers of HTTP responses received from backends
     * before responses are forwarded to clients.
     *
     * Existing list of modifications is completely replaced by the specified list.
     */
    modifyResponseHeaders: HeaderModification[];
}

export interface UpdateVirtualHostMetadata {
    /** ID of the HTTP router that the virtual host is being updated in. */
    httpRouterId: string;
    /** Name of the virtual host that is being updated. */
    virtualHostName: string;
}

export interface DeleteVirtualHostRequest {
    /**
     * ID of the HTTP router to delete a virtual host from.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * Name of the virtual host to delete.
     *
     * To get the virtual host name, make a [VirtualHostService.List] request.
     */
    virtualHostName: string;
}

export interface DeleteVirtualHostMetadata {
    /** ID of the HTTP router that the virtual host is being deleted from. */
    httpRouterId: string;
    /** Name of the virtual host that is being deleted. */
    virtualHostName: string;
}

export interface RemoveRouteRequest {
    /**
     * ID of the HTTP router to delete a route from.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * Name of the virtual host to delete a route from.
     *
     * To get the virtual host name, make a [VirtualHostService.List] request.
     */
    virtualHostName: string;
    /**
     * Name of the route to delete.
     *
     * To get the route name, make a [VirtualHostService.Get] request.
     */
    routeName: string;
}

export interface RemoveRouteMetadata {
    /** ID of the HTTP router that the route is being deleted from. */
    httpRouterId: string;
    /** Name of the virtual host that the route is being deleted from. */
    virtualHostName: string;
    /** Name of the route that is being deleted. */
    routeName: string;
}

export interface UpdateRouteRequest {
    /**
     * ID of the HTTP router to update a route in.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
    /**
     * Name of the virtual host to update a route in.
     *
     * To get the virtual host name, make a [VirtualHostService.List] request.
     */
    virtualHostName: string;
    /**
     * Name of the route to update.
     *
     * To get the route name, make a [VirtualHostService.Get] request.
     */
    routeName: string;
    /** Field mask that specifies which attributes of the route should be updated. */
    updateMask: FieldMask | undefined;
    /** New settings of the HTTP route. */
    http: HttpRoute | undefined;
    /** New settings of the gRPC route. */
    grpc: GrpcRoute | undefined;
}

export interface UpdateRouteMetadata {
    /** ID of the HTTP router that the route is being updated in. */
    httpRouterId: string;
    /** Name of the virtual host that the route is being updated in. */
    virtualHostName: string;
    /** Name of the route that is being updated. */
    routeName: string;
}

const baseGetVirtualHostRequest: object = {
    httpRouterId: '',
    virtualHostName: '',
};

export const GetVirtualHostRequest = {
    encode(
        message: GetVirtualHostRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetVirtualHostRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetVirtualHostRequest,
        } as GetVirtualHostRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetVirtualHostRequest {
        const message = {
            ...baseGetVirtualHostRequest,
        } as GetVirtualHostRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = String(object.virtualHostName);
        } else {
            message.virtualHostName = '';
        }
        return message;
    },

    toJSON(message: GetVirtualHostRequest): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetVirtualHostRequest>
    ): GetVirtualHostRequest {
        const message = {
            ...baseGetVirtualHostRequest,
        } as GetVirtualHostRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = object.virtualHostName;
        } else {
            message.virtualHostName = '';
        }
        return message;
    },
};

const baseListVirtualHostsRequest: object = {
    httpRouterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListVirtualHostsRequest = {
    encode(
        message: ListVirtualHostsRequest,
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
    ): ListVirtualHostsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListVirtualHostsRequest,
        } as ListVirtualHostsRequest;
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

    fromJSON(object: any): ListVirtualHostsRequest {
        const message = {
            ...baseListVirtualHostsRequest,
        } as ListVirtualHostsRequest;
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

    toJSON(message: ListVirtualHostsRequest): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListVirtualHostsRequest>
    ): ListVirtualHostsRequest {
        const message = {
            ...baseListVirtualHostsRequest,
        } as ListVirtualHostsRequest;
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

const baseListVirtualHostsResponse: object = { nextPageToken: '' };

export const ListVirtualHostsResponse = {
    encode(
        message: ListVirtualHostsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.virtualHosts) {
            VirtualHost.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListVirtualHostsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListVirtualHostsResponse,
        } as ListVirtualHostsResponse;
        message.virtualHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.virtualHosts.push(
                        VirtualHost.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListVirtualHostsResponse {
        const message = {
            ...baseListVirtualHostsResponse,
        } as ListVirtualHostsResponse;
        message.virtualHosts = [];
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromJSON(e));
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

    toJSON(message: ListVirtualHostsResponse): unknown {
        const obj: any = {};
        if (message.virtualHosts) {
            obj.virtualHosts = message.virtualHosts.map((e) =>
                e ? VirtualHost.toJSON(e) : undefined
            );
        } else {
            obj.virtualHosts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListVirtualHostsResponse>
    ): ListVirtualHostsResponse {
        const message = {
            ...baseListVirtualHostsResponse,
        } as ListVirtualHostsResponse;
        message.virtualHosts = [];
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromPartial(e));
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

const baseCreateVirtualHostRequest: object = {
    httpRouterId: '',
    name: '',
    authority: '',
};

export const CreateVirtualHostRequest = {
    encode(
        message: CreateVirtualHostRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.authority) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.routes) {
            Route.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.modifyRequestHeaders) {
            HeaderModification.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            HeaderModification.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateVirtualHostRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateVirtualHostRequest,
        } as CreateVirtualHostRequest;
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.authority.push(reader.string());
                    break;
                case 5:
                    message.routes.push(Route.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.modifyRequestHeaders.push(
                        HeaderModification.decode(reader, reader.uint32())
                    );
                    break;
                case 7:
                    message.modifyResponseHeaders.push(
                        HeaderModification.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateVirtualHostRequest {
        const message = {
            ...baseCreateVirtualHostRequest,
        } as CreateVirtualHostRequest;
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.authority !== undefined && object.authority !== null) {
            for (const e of object.authority) {
                message.authority.push(String(e));
            }
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(Route.fromJSON(e));
            }
        }
        if (
            object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null
        ) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(
                    HeaderModification.fromJSON(e)
                );
            }
        }
        if (
            object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null
        ) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(
                    HeaderModification.fromJSON(e)
                );
            }
        }
        return message;
    },

    toJSON(message: CreateVirtualHostRequest): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.name !== undefined && (obj.name = message.name);
        if (message.authority) {
            obj.authority = message.authority.map((e) => e);
        } else {
            obj.authority = [];
        }
        if (message.routes) {
            obj.routes = message.routes.map((e) =>
                e ? Route.toJSON(e) : undefined
            );
        } else {
            obj.routes = [];
        }
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) =>
                e ? HeaderModification.toJSON(e) : undefined
            );
        } else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) =>
                e ? HeaderModification.toJSON(e) : undefined
            );
        } else {
            obj.modifyResponseHeaders = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateVirtualHostRequest>
    ): CreateVirtualHostRequest {
        const message = {
            ...baseCreateVirtualHostRequest,
        } as CreateVirtualHostRequest;
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.authority !== undefined && object.authority !== null) {
            for (const e of object.authority) {
                message.authority.push(e);
            }
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(Route.fromPartial(e));
            }
        }
        if (
            object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null
        ) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(
                    HeaderModification.fromPartial(e)
                );
            }
        }
        if (
            object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null
        ) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(
                    HeaderModification.fromPartial(e)
                );
            }
        }
        return message;
    },
};

const baseCreateVirtualHostMetadata: object = {
    httpRouterId: '',
    virtualHostName: '',
};

export const CreateVirtualHostMetadata = {
    encode(
        message: CreateVirtualHostMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateVirtualHostMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateVirtualHostMetadata,
        } as CreateVirtualHostMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateVirtualHostMetadata {
        const message = {
            ...baseCreateVirtualHostMetadata,
        } as CreateVirtualHostMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = String(object.virtualHostName);
        } else {
            message.virtualHostName = '';
        }
        return message;
    },

    toJSON(message: CreateVirtualHostMetadata): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateVirtualHostMetadata>
    ): CreateVirtualHostMetadata {
        const message = {
            ...baseCreateVirtualHostMetadata,
        } as CreateVirtualHostMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = object.virtualHostName;
        } else {
            message.virtualHostName = '';
        }
        return message;
    },
};

const baseUpdateVirtualHostRequest: object = {
    httpRouterId: '',
    virtualHostName: '',
    authority: '',
};

export const UpdateVirtualHostRequest = {
    encode(
        message: UpdateVirtualHostRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(26).fork()
            ).ldelim();
        }
        for (const v of message.authority) {
            writer.uint32(34).string(v!);
        }
        for (const v of message.routes) {
            Route.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.modifyRequestHeaders) {
            HeaderModification.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            HeaderModification.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateVirtualHostRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateVirtualHostRequest,
        } as UpdateVirtualHostRequest;
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.authority.push(reader.string());
                    break;
                case 6:
                    message.routes.push(Route.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.modifyRequestHeaders.push(
                        HeaderModification.decode(reader, reader.uint32())
                    );
                    break;
                case 8:
                    message.modifyResponseHeaders.push(
                        HeaderModification.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateVirtualHostRequest {
        const message = {
            ...baseUpdateVirtualHostRequest,
        } as UpdateVirtualHostRequest;
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = String(object.virtualHostName);
        } else {
            message.virtualHostName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.authority !== undefined && object.authority !== null) {
            for (const e of object.authority) {
                message.authority.push(String(e));
            }
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(Route.fromJSON(e));
            }
        }
        if (
            object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null
        ) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(
                    HeaderModification.fromJSON(e)
                );
            }
        }
        if (
            object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null
        ) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(
                    HeaderModification.fromJSON(e)
                );
            }
        }
        return message;
    },

    toJSON(message: UpdateVirtualHostRequest): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        if (message.authority) {
            obj.authority = message.authority.map((e) => e);
        } else {
            obj.authority = [];
        }
        if (message.routes) {
            obj.routes = message.routes.map((e) =>
                e ? Route.toJSON(e) : undefined
            );
        } else {
            obj.routes = [];
        }
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) =>
                e ? HeaderModification.toJSON(e) : undefined
            );
        } else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) =>
                e ? HeaderModification.toJSON(e) : undefined
            );
        } else {
            obj.modifyResponseHeaders = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateVirtualHostRequest>
    ): UpdateVirtualHostRequest {
        const message = {
            ...baseUpdateVirtualHostRequest,
        } as UpdateVirtualHostRequest;
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = object.virtualHostName;
        } else {
            message.virtualHostName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.authority !== undefined && object.authority !== null) {
            for (const e of object.authority) {
                message.authority.push(e);
            }
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(Route.fromPartial(e));
            }
        }
        if (
            object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null
        ) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(
                    HeaderModification.fromPartial(e)
                );
            }
        }
        if (
            object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null
        ) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(
                    HeaderModification.fromPartial(e)
                );
            }
        }
        return message;
    },
};

const baseUpdateVirtualHostMetadata: object = {
    httpRouterId: '',
    virtualHostName: '',
};

export const UpdateVirtualHostMetadata = {
    encode(
        message: UpdateVirtualHostMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateVirtualHostMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateVirtualHostMetadata,
        } as UpdateVirtualHostMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateVirtualHostMetadata {
        const message = {
            ...baseUpdateVirtualHostMetadata,
        } as UpdateVirtualHostMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = String(object.virtualHostName);
        } else {
            message.virtualHostName = '';
        }
        return message;
    },

    toJSON(message: UpdateVirtualHostMetadata): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateVirtualHostMetadata>
    ): UpdateVirtualHostMetadata {
        const message = {
            ...baseUpdateVirtualHostMetadata,
        } as UpdateVirtualHostMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = object.virtualHostName;
        } else {
            message.virtualHostName = '';
        }
        return message;
    },
};

const baseDeleteVirtualHostRequest: object = {
    httpRouterId: '',
    virtualHostName: '',
};

export const DeleteVirtualHostRequest = {
    encode(
        message: DeleteVirtualHostRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteVirtualHostRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteVirtualHostRequest,
        } as DeleteVirtualHostRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteVirtualHostRequest {
        const message = {
            ...baseDeleteVirtualHostRequest,
        } as DeleteVirtualHostRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = String(object.virtualHostName);
        } else {
            message.virtualHostName = '';
        }
        return message;
    },

    toJSON(message: DeleteVirtualHostRequest): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteVirtualHostRequest>
    ): DeleteVirtualHostRequest {
        const message = {
            ...baseDeleteVirtualHostRequest,
        } as DeleteVirtualHostRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = object.virtualHostName;
        } else {
            message.virtualHostName = '';
        }
        return message;
    },
};

const baseDeleteVirtualHostMetadata: object = {
    httpRouterId: '',
    virtualHostName: '',
};

export const DeleteVirtualHostMetadata = {
    encode(
        message: DeleteVirtualHostMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteVirtualHostMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteVirtualHostMetadata,
        } as DeleteVirtualHostMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteVirtualHostMetadata {
        const message = {
            ...baseDeleteVirtualHostMetadata,
        } as DeleteVirtualHostMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = String(object.virtualHostName);
        } else {
            message.virtualHostName = '';
        }
        return message;
    },

    toJSON(message: DeleteVirtualHostMetadata): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteVirtualHostMetadata>
    ): DeleteVirtualHostMetadata {
        const message = {
            ...baseDeleteVirtualHostMetadata,
        } as DeleteVirtualHostMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = object.virtualHostName;
        } else {
            message.virtualHostName = '';
        }
        return message;
    },
};

const baseRemoveRouteRequest: object = {
    httpRouterId: '',
    virtualHostName: '',
    routeName: '',
};

export const RemoveRouteRequest = {
    encode(
        message: RemoveRouteRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== '') {
            writer.uint32(26).string(message.routeName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveRouteRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveRouteRequest } as RemoveRouteRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveRouteRequest {
        const message = { ...baseRemoveRouteRequest } as RemoveRouteRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = String(object.virtualHostName);
        } else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = String(object.routeName);
        } else {
            message.routeName = '';
        }
        return message;
    },

    toJSON(message: RemoveRouteRequest): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        return obj;
    },

    fromPartial(object: DeepPartial<RemoveRouteRequest>): RemoveRouteRequest {
        const message = { ...baseRemoveRouteRequest } as RemoveRouteRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = object.virtualHostName;
        } else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = object.routeName;
        } else {
            message.routeName = '';
        }
        return message;
    },
};

const baseRemoveRouteMetadata: object = {
    httpRouterId: '',
    virtualHostName: '',
    routeName: '',
};

export const RemoveRouteMetadata = {
    encode(
        message: RemoveRouteMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== '') {
            writer.uint32(26).string(message.routeName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveRouteMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveRouteMetadata } as RemoveRouteMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveRouteMetadata {
        const message = { ...baseRemoveRouteMetadata } as RemoveRouteMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = String(object.virtualHostName);
        } else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = String(object.routeName);
        } else {
            message.routeName = '';
        }
        return message;
    },

    toJSON(message: RemoveRouteMetadata): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        return obj;
    },

    fromPartial(object: DeepPartial<RemoveRouteMetadata>): RemoveRouteMetadata {
        const message = { ...baseRemoveRouteMetadata } as RemoveRouteMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = object.virtualHostName;
        } else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = object.routeName;
        } else {
            message.routeName = '';
        }
        return message;
    },
};

const baseUpdateRouteRequest: object = {
    httpRouterId: '',
    virtualHostName: '',
    routeName: '',
};

export const UpdateRouteRequest = {
    encode(
        message: UpdateRouteRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== '') {
            writer.uint32(26).string(message.routeName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.http !== undefined) {
            HttpRoute.encode(message.http, writer.uint32(42).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            GrpcRoute.encode(message.grpc, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateRouteRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRouteRequest } as UpdateRouteRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                case 4:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.http = HttpRoute.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.grpc = GrpcRoute.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRouteRequest {
        const message = { ...baseUpdateRouteRequest } as UpdateRouteRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = String(object.virtualHostName);
        } else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = String(object.routeName);
        } else {
            message.routeName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpRoute.fromJSON(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcRoute.fromJSON(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },

    toJSON(message: UpdateRouteRequest): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpRoute.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? GrpcRoute.toJSON(message.grpc)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateRouteRequest>): UpdateRouteRequest {
        const message = { ...baseUpdateRouteRequest } as UpdateRouteRequest;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = object.virtualHostName;
        } else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = object.routeName;
        } else {
            message.routeName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpRoute.fromPartial(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcRoute.fromPartial(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },
};

const baseUpdateRouteMetadata: object = {
    httpRouterId: '',
    virtualHostName: '',
    routeName: '',
};

export const UpdateRouteMetadata = {
    encode(
        message: UpdateRouteMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== '') {
            writer.uint32(26).string(message.routeName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateRouteMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRouteMetadata } as UpdateRouteMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateRouteMetadata {
        const message = { ...baseUpdateRouteMetadata } as UpdateRouteMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = String(object.virtualHostName);
        } else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = String(object.routeName);
        } else {
            message.routeName = '';
        }
        return message;
    },

    toJSON(message: UpdateRouteMetadata): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateRouteMetadata>): UpdateRouteMetadata {
        const message = { ...baseUpdateRouteMetadata } as UpdateRouteMetadata;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (
            object.virtualHostName !== undefined &&
            object.virtualHostName !== null
        ) {
            message.virtualHostName = object.virtualHostName;
        } else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = object.routeName;
        } else {
            message.routeName = '';
        }
        return message;
    },
};

/** A set of methods for managing virtual hosts of HTTP routers. */
export const VirtualHostServiceService = {
    /**
     * Returns the specified virtual host.
     *
     * To get the list of all virtual hosts of an HTTP router, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetVirtualHostRequest) =>
            Buffer.from(GetVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetVirtualHostRequest.decode(value),
        responseSerialize: (value: VirtualHost) =>
            Buffer.from(VirtualHost.encode(value).finish()),
        responseDeserialize: (value: Buffer) => VirtualHost.decode(value),
    },
    /** Lists virtual hosts of the specified HTTP router. */
    list: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListVirtualHostsRequest) =>
            Buffer.from(ListVirtualHostsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListVirtualHostsRequest.decode(value),
        responseSerialize: (value: ListVirtualHostsResponse) =>
            Buffer.from(ListVirtualHostsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListVirtualHostsResponse.decode(value),
    },
    /** Creates a virtual host in the specified HTTP router. */
    create: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateVirtualHostRequest) =>
            Buffer.from(CreateVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateVirtualHostRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified virtual host of the specified HTTP router. */
    update: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateVirtualHostRequest) =>
            Buffer.from(UpdateVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateVirtualHostRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified virtual host. */
    delete: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteVirtualHostRequest) =>
            Buffer.from(DeleteVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteVirtualHostRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified route from the specified virtual host. */
    removeRoute: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/RemoveRoute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RemoveRouteRequest) =>
            Buffer.from(RemoveRouteRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => RemoveRouteRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified route of the specified virtual host. */
    updateRoute: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/UpdateRoute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateRouteRequest) =>
            Buffer.from(UpdateRouteRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => UpdateRouteRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface VirtualHostServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified virtual host.
     *
     * To get the list of all virtual hosts of an HTTP router, make a [List] request.
     */
    get: handleUnaryCall<GetVirtualHostRequest, VirtualHost>;
    /** Lists virtual hosts of the specified HTTP router. */
    list: handleUnaryCall<ListVirtualHostsRequest, ListVirtualHostsResponse>;
    /** Creates a virtual host in the specified HTTP router. */
    create: handleUnaryCall<CreateVirtualHostRequest, Operation>;
    /** Updates the specified virtual host of the specified HTTP router. */
    update: handleUnaryCall<UpdateVirtualHostRequest, Operation>;
    /** Deletes the specified virtual host. */
    delete: handleUnaryCall<DeleteVirtualHostRequest, Operation>;
    /** Deletes the specified route from the specified virtual host. */
    removeRoute: handleUnaryCall<RemoveRouteRequest, Operation>;
    /** Updates the specified route of the specified virtual host. */
    updateRoute: handleUnaryCall<UpdateRouteRequest, Operation>;
}

export interface VirtualHostServiceClient extends Client {
    /**
     * Returns the specified virtual host.
     *
     * To get the list of all virtual hosts of an HTTP router, make a [List] request.
     */
    get(
        request: GetVirtualHostRequest,
        callback: (error: ServiceError | null, response: VirtualHost) => void
    ): ClientUnaryCall;
    get(
        request: GetVirtualHostRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: VirtualHost) => void
    ): ClientUnaryCall;
    get(
        request: GetVirtualHostRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: VirtualHost) => void
    ): ClientUnaryCall;
    /** Lists virtual hosts of the specified HTTP router. */
    list(
        request: ListVirtualHostsRequest,
        callback: (
            error: ServiceError | null,
            response: ListVirtualHostsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListVirtualHostsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListVirtualHostsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListVirtualHostsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListVirtualHostsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a virtual host in the specified HTTP router. */
    create(
        request: CreateVirtualHostRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateVirtualHostRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateVirtualHostRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified virtual host of the specified HTTP router. */
    update(
        request: UpdateVirtualHostRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateVirtualHostRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateVirtualHostRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified virtual host. */
    delete(
        request: DeleteVirtualHostRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteVirtualHostRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteVirtualHostRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified route from the specified virtual host. */
    removeRoute(
        request: RemoveRouteRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeRoute(
        request: RemoveRouteRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeRoute(
        request: RemoveRouteRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified route of the specified virtual host. */
    updateRoute(
        request: UpdateRouteRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateRoute(
        request: UpdateRouteRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateRoute(
        request: UpdateRouteRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const VirtualHostServiceClient = makeGenericClientConstructor(
    VirtualHostServiceService,
    'yandex.cloud.apploadbalancer.v1.VirtualHostService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): VirtualHostServiceClient;
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
