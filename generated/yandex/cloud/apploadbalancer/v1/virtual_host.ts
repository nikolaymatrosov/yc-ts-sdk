/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { messageTypeRegistry } from '../../../../typeRegistry';
import { Payload } from '../../../../yandex/cloud/apploadbalancer/v1/payload';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';

/**
 * A virtual host resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
 */
export interface VirtualHost {
    $type: 'yandex.cloud.apploadbalancer.v1.VirtualHost';
    /** Name of the virtual host. The name is unique within the HTTP router. */
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
    /** Deprecated, use route_options.modify_request_headers. */
    modifyRequestHeaders: HeaderModification[];
    /** Deprecated, use route_options.modify_response_headers. */
    modifyResponseHeaders: HeaderModification[];
    routeOptions: RouteOptions | undefined;
}

export interface RouteOptions {
    $type: 'yandex.cloud.apploadbalancer.v1.RouteOptions';
    /** Apply the following modifications to the request headers. */
    modifyRequestHeaders: HeaderModification[];
    /** Apply the following modifications to the response headers. */
    modifyResponseHeaders: HeaderModification[];
}

/** A header modification resource. */
export interface HeaderModification {
    $type: 'yandex.cloud.apploadbalancer.v1.HeaderModification';
    /** Name of the header. */
    name: string;
    /**
     * Appends the specified string to the header value.
     *
     * Variables [defined for Envoy proxy](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#custom-request-response-headers)
     * are supported.
     */
    append: string | undefined;
    /**
     * Replaces the value of the header with the specified string.
     *
     * Variables [defined for Envoy proxy](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/headers#custom-request-response-headers)
     * are supported.
     */
    replace: string | undefined;
    /** Removes the header. */
    remove: boolean | undefined;
    /**
     * Replaces the name of the header with the specified string.
     * This operation is only supported for ALB Virtual Hosts.
     */
    rename: string | undefined;
}

/**
 * A route resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#routes).
 */
export interface Route {
    $type: 'yandex.cloud.apploadbalancer.v1.Route';
    /** Name of the route. */
    name: string;
    /** HTTP route configuration. */
    http: HttpRoute | undefined;
    /** gRPC route configuration. */
    grpc: GrpcRoute | undefined;
    routeOptions: RouteOptions | undefined;
}

/** An HTTP route configuration resource. */
export interface HttpRoute {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRoute';
    /** Condition (predicate) used to select the route. */
    match: HttpRouteMatch | undefined;
    /** Forwards the request to a backend group for processing as configured. */
    route: HttpRouteAction | undefined;
    /** Redirects the request as configured. */
    redirect: RedirectAction | undefined;
    /** Instructs the load balancer to respond directly as configured. */
    directResponse: DirectResponseAction | undefined;
}

/** A gRPC route configuration resource. */
export interface GrpcRoute {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcRoute';
    /** Condition (predicate) used to select the route. */
    match: GrpcRouteMatch | undefined;
    /** Forwards the request to a backend group for processing as configured. */
    route: GrpcRouteAction | undefined;
    /** Instructs the load balancer to respond directly with a specified status. */
    statusResponse: GrpcStatusResponseAction | undefined;
}

/** An HTTP route condition (predicate) resource. */
export interface HttpRouteMatch {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouteMatch';
    /** HTTP method specified in the request. */
    httpMethod: string[];
    /**
     * Match settings for the path specified in the request.
     *
     * If not specified, the route matches all paths.
     */
    path: StringMatch | undefined;
}

/** A gRPC route condition (predicate) resource. */
export interface GrpcRouteMatch {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcRouteMatch';
    /**
     * Match settings for gRPC service method called in the request.
     *
     * A match string must be a fully qualified method name, e.g. `foo.bar.v1.BazService/Get`, or a prefix of such.
     *
     * If not specified, the route matches all methods.
     */
    fqmn: StringMatch | undefined;
}

/** A string matcher resource. */
export interface StringMatch {
    $type: 'yandex.cloud.apploadbalancer.v1.StringMatch';
    /** Exact match string. */
    exactMatch: string | undefined;
    /** Prefix match string. */
    prefixMatch: string | undefined;
}

/** A redirect action resource. */
export interface RedirectAction {
    $type: 'yandex.cloud.apploadbalancer.v1.RedirectAction';
    /**
     * URI scheme replacement.
     *
     * If `http` or `https` scheme is to be replaced and `80` or `443` port is specified in the original URI,
     * the port is also removed.
     *
     * If not specified, the original scheme and port are used.
     */
    replaceScheme: string;
    /**
     * URI host replacement.
     *
     * If not specified, the original host is used.
     */
    replaceHost: string;
    /**
     * URI host replacement.
     *
     * If not specified, the original host is used.
     */
    replacePort: number;
    /** Replacement for the whole path. */
    replacePath: string | undefined;
    /**
     * Replacement for the path prefix matched by [StringMatch].
     *
     * For instance, if [StringMatch.prefix_match] value is `/foo` and `replace_prefix` value is `/bar`,
     * a request with `https://example.com/foobaz` URI is redirected to `https://example.com/barbaz`.
     * For [StringMatch.exact_match], the whole path is replaced.
     */
    replacePrefix: string | undefined;
    /** Removes URI query. */
    removeQuery: boolean;
    /** HTTP status code to use in redirect responses. */
    responseCode: RedirectAction_RedirectResponseCode;
}

/** HTTP status codes supported for use in redirect responses. */
export enum RedirectAction_RedirectResponseCode {
    /** MOVED_PERMANENTLY - `301 Moved Permanently` status code. */
    MOVED_PERMANENTLY = 0,
    /** FOUND - `302 Found` status code. */
    FOUND = 1,
    /** SEE_OTHER - `303 See Other` status code. */
    SEE_OTHER = 2,
    /** TEMPORARY_REDIRECT - `307 Temporary Redirect` status code. */
    TEMPORARY_REDIRECT = 3,
    /** PERMANENT_REDIRECT - `308 Permanent Redirect` status code. */
    PERMANENT_REDIRECT = 4,
    UNRECOGNIZED = -1,
}

export function redirectAction_RedirectResponseCodeFromJSON(
    object: any
): RedirectAction_RedirectResponseCode {
    switch (object) {
        case 0:
        case 'MOVED_PERMANENTLY':
            return RedirectAction_RedirectResponseCode.MOVED_PERMANENTLY;
        case 1:
        case 'FOUND':
            return RedirectAction_RedirectResponseCode.FOUND;
        case 2:
        case 'SEE_OTHER':
            return RedirectAction_RedirectResponseCode.SEE_OTHER;
        case 3:
        case 'TEMPORARY_REDIRECT':
            return RedirectAction_RedirectResponseCode.TEMPORARY_REDIRECT;
        case 4:
        case 'PERMANENT_REDIRECT':
            return RedirectAction_RedirectResponseCode.PERMANENT_REDIRECT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RedirectAction_RedirectResponseCode.UNRECOGNIZED;
    }
}

export function redirectAction_RedirectResponseCodeToJSON(
    object: RedirectAction_RedirectResponseCode
): string {
    switch (object) {
        case RedirectAction_RedirectResponseCode.MOVED_PERMANENTLY:
            return 'MOVED_PERMANENTLY';
        case RedirectAction_RedirectResponseCode.FOUND:
            return 'FOUND';
        case RedirectAction_RedirectResponseCode.SEE_OTHER:
            return 'SEE_OTHER';
        case RedirectAction_RedirectResponseCode.TEMPORARY_REDIRECT:
            return 'TEMPORARY_REDIRECT';
        case RedirectAction_RedirectResponseCode.PERMANENT_REDIRECT:
            return 'PERMANENT_REDIRECT';
        default:
            return 'UNKNOWN';
    }
}

/** A direct response action resource. */
export interface DirectResponseAction {
    $type: 'yandex.cloud.apploadbalancer.v1.DirectResponseAction';
    /** HTTP status code to use in responses. */
    status: number;
    /** Response body. */
    body: Payload | undefined;
}

/** A gRPC status response action resource. */
export interface GrpcStatusResponseAction {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction';
    /** gRPC [status code](https://grpc.github.io/grpc/core/md_doc_statuscodes.html) to use in responses. */
    status: GrpcStatusResponseAction_Status;
}

/** gRPC status code supported for use in responses. */
export enum GrpcStatusResponseAction_Status {
    /** OK - `OK` (0) status code. */
    OK = 0,
    /** INVALID_ARGUMENT - `INVALID_ARGUMENT` (3) status code. */
    INVALID_ARGUMENT = 1,
    /** NOT_FOUND - `NOT_FOUND` (5) status code. */
    NOT_FOUND = 2,
    /** PERMISSION_DENIED - `PERMISSION_DENIED` (7) status code. */
    PERMISSION_DENIED = 3,
    /** UNAUTHENTICATED - `UNAUTHENTICATED` (16) status code. */
    UNAUTHENTICATED = 4,
    /** UNIMPLEMENTED - `UNIMPLEMENTED` (12) status code. */
    UNIMPLEMENTED = 5,
    /** INTERNAL - `INTERNAL` (13) status code. */
    INTERNAL = 6,
    /** UNAVAILABLE - `UNAVAILABLE` (14) status code. */
    UNAVAILABLE = 7,
    UNRECOGNIZED = -1,
}

export function grpcStatusResponseAction_StatusFromJSON(
    object: any
): GrpcStatusResponseAction_Status {
    switch (object) {
        case 0:
        case 'OK':
            return GrpcStatusResponseAction_Status.OK;
        case 1:
        case 'INVALID_ARGUMENT':
            return GrpcStatusResponseAction_Status.INVALID_ARGUMENT;
        case 2:
        case 'NOT_FOUND':
            return GrpcStatusResponseAction_Status.NOT_FOUND;
        case 3:
        case 'PERMISSION_DENIED':
            return GrpcStatusResponseAction_Status.PERMISSION_DENIED;
        case 4:
        case 'UNAUTHENTICATED':
            return GrpcStatusResponseAction_Status.UNAUTHENTICATED;
        case 5:
        case 'UNIMPLEMENTED':
            return GrpcStatusResponseAction_Status.UNIMPLEMENTED;
        case 6:
        case 'INTERNAL':
            return GrpcStatusResponseAction_Status.INTERNAL;
        case 7:
        case 'UNAVAILABLE':
            return GrpcStatusResponseAction_Status.UNAVAILABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GrpcStatusResponseAction_Status.UNRECOGNIZED;
    }
}

export function grpcStatusResponseAction_StatusToJSON(
    object: GrpcStatusResponseAction_Status
): string {
    switch (object) {
        case GrpcStatusResponseAction_Status.OK:
            return 'OK';
        case GrpcStatusResponseAction_Status.INVALID_ARGUMENT:
            return 'INVALID_ARGUMENT';
        case GrpcStatusResponseAction_Status.NOT_FOUND:
            return 'NOT_FOUND';
        case GrpcStatusResponseAction_Status.PERMISSION_DENIED:
            return 'PERMISSION_DENIED';
        case GrpcStatusResponseAction_Status.UNAUTHENTICATED:
            return 'UNAUTHENTICATED';
        case GrpcStatusResponseAction_Status.UNIMPLEMENTED:
            return 'UNIMPLEMENTED';
        case GrpcStatusResponseAction_Status.INTERNAL:
            return 'INTERNAL';
        case GrpcStatusResponseAction_Status.UNAVAILABLE:
            return 'UNAVAILABLE';
        default:
            return 'UNKNOWN';
    }
}

/** An HTTP route action resource. */
export interface HttpRouteAction {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouteAction';
    /** Backend group to forward requests to. */
    backendGroupId: string;
    /**
     * Overall timeout for an HTTP connection between a load balancer node an a backend from the backend group:
     * the maximum time the connection is kept alive for, regardless of whether data is transferred over it.
     *
     * If a connection times out, the load balancer responds to the client with a `504 Gateway Timeout` status code.
     *
     * Default value: `60`.
     */
    timeout: Duration | undefined;
    /**
     * Idle timeout for an HTTP connection between a load balancer node an a backend from the backend group:
     * the maximum time the connection is allowed to be idle, i.e. without any data transferred over it.
     *
     * Specifying meaningful values for both [timeout] and `idle_timeout` is useful for implementing
     * server-push mechanisms such as long polling, server-sent events (`EventSource` interface) etc.
     *
     * If a connection times out, the load balancer responds to the client with a `504 Gateway Timeout` status code.
     *
     * If not specified, no idle timeout is used, and an alive connection may be idle for any duration (see [timeout]).
     */
    idleTimeout: Duration | undefined;
    /** Host replacement. */
    hostRewrite: string | undefined;
    /** Automatically replaces the host with that of the target. */
    autoHostRewrite: boolean | undefined;
    /**
     * Replacement for the path prefix matched by [StringMatch].
     *
     * For instance, if [StringMatch.prefix_match] value is `/foo` and `replace_prefix` value is `/bar`,
     * a request with `/foobaz` path is forwarded with `/barbaz` path.
     * For [StringMatch.exact_match], the whole path is replaced.
     *
     * If not specified, the path is not changed.
     */
    prefixRewrite: string;
    /** Supported values for HTTP `Upgrade` header. E.g. `websocket`. */
    upgradeTypes: string[];
}

/** A gRPC route action resource. */
export interface GrpcRouteAction {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcRouteAction';
    /** Backend group to forward requests to. */
    backendGroupId: string;
    /**
     * Overall timeout for an underlying HTTP connection between a load balancer node an a backend from the backend group:
     * the maximum time the connection is kept alive for, regardless of whether data is transferred over it.
     *
     * If a client specifies a lower timeout in HTTP `grpc-timeout` header, the `max_timeout` value is ignored.
     *
     * If a connection times out, the load balancer responds to the client with an `UNAVAILABLE` status code.
     *
     * Default value: `60`.
     */
    maxTimeout: Duration | undefined;
    /**
     * Idle timeout for an underlying HTTP connection between a load balancer node an a backend from the backend group:
     * the maximum time the connection is allowed to be idle, i.e. without any data transferred over it.
     *
     * Specifying meaningful values for both [max_timeout] and `idle_timeout` is useful for implementing
     * server-push mechanisms such as long polling, server-sent events etc.
     *
     * If a connection times out, the load balancer responds to the client with an `UNAVAILABLE` status code.
     *
     * If not specified, no idle timeout is used, and an alive connection may be idle for any duration
     * (see [max_timeout]).
     */
    idleTimeout: Duration | undefined;
    /** Host replacement. */
    hostRewrite: string | undefined;
    /** Automatically replaces the host with that of the target. */
    autoHostRewrite: boolean | undefined;
}

const baseVirtualHost: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.VirtualHost',
    name: '',
    authority: '',
};

export const VirtualHost = {
    $type: 'yandex.cloud.apploadbalancer.v1.VirtualHost' as const,

    encode(
        message: VirtualHost,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.authority) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.routes) {
            Route.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.modifyRequestHeaders) {
            HeaderModification.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            HeaderModification.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            RouteOptions.encode(
                message.routeOptions,
                writer.uint32(50).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VirtualHost {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVirtualHost } as VirtualHost;
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.authority.push(reader.string());
                    break;
                case 3:
                    message.routes.push(Route.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.modifyRequestHeaders.push(
                        HeaderModification.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.modifyResponseHeaders.push(
                        HeaderModification.decode(reader, reader.uint32())
                    );
                    break;
                case 6:
                    message.routeOptions = RouteOptions.decode(
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

    fromJSON(object: any): VirtualHost {
        const message = { ...baseVirtualHost } as VirtualHost;
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
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
        if (object.routeOptions !== undefined && object.routeOptions !== null) {
            message.routeOptions = RouteOptions.fromJSON(object.routeOptions);
        } else {
            message.routeOptions = undefined;
        }
        return message;
    },

    toJSON(message: VirtualHost): unknown {
        const obj: any = {};
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
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<VirtualHost>): VirtualHost {
        const message = { ...baseVirtualHost } as VirtualHost;
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
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
        if (object.routeOptions !== undefined && object.routeOptions !== null) {
            message.routeOptions = RouteOptions.fromPartial(
                object.routeOptions
            );
        } else {
            message.routeOptions = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(VirtualHost.$type, VirtualHost);

const baseRouteOptions: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.RouteOptions',
};

export const RouteOptions = {
    $type: 'yandex.cloud.apploadbalancer.v1.RouteOptions' as const,

    encode(
        message: RouteOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.modifyRequestHeaders) {
            HeaderModification.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            HeaderModification.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RouteOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRouteOptions } as RouteOptions;
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modifyRequestHeaders.push(
                        HeaderModification.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
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

    fromJSON(object: any): RouteOptions {
        const message = { ...baseRouteOptions } as RouteOptions;
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
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

    toJSON(message: RouteOptions): unknown {
        const obj: any = {};
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

    fromPartial(object: DeepPartial<RouteOptions>): RouteOptions {
        const message = { ...baseRouteOptions } as RouteOptions;
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
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

messageTypeRegistry.set(RouteOptions.$type, RouteOptions);

const baseHeaderModification: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HeaderModification',
    name: '',
};

export const HeaderModification = {
    $type: 'yandex.cloud.apploadbalancer.v1.HeaderModification' as const,

    encode(
        message: HeaderModification,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.append !== undefined) {
            writer.uint32(18).string(message.append);
        }
        if (message.replace !== undefined) {
            writer.uint32(26).string(message.replace);
        }
        if (message.remove !== undefined) {
            writer.uint32(32).bool(message.remove);
        }
        if (message.rename !== undefined) {
            writer.uint32(42).string(message.rename);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): HeaderModification {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHeaderModification } as HeaderModification;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.append = reader.string();
                    break;
                case 3:
                    message.replace = reader.string();
                    break;
                case 4:
                    message.remove = reader.bool();
                    break;
                case 5:
                    message.rename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HeaderModification {
        const message = { ...baseHeaderModification } as HeaderModification;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.append !== undefined && object.append !== null) {
            message.append = String(object.append);
        } else {
            message.append = undefined;
        }
        if (object.replace !== undefined && object.replace !== null) {
            message.replace = String(object.replace);
        } else {
            message.replace = undefined;
        }
        if (object.remove !== undefined && object.remove !== null) {
            message.remove = Boolean(object.remove);
        } else {
            message.remove = undefined;
        }
        if (object.rename !== undefined && object.rename !== null) {
            message.rename = String(object.rename);
        } else {
            message.rename = undefined;
        }
        return message;
    },

    toJSON(message: HeaderModification): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.append !== undefined && (obj.append = message.append);
        message.replace !== undefined && (obj.replace = message.replace);
        message.remove !== undefined && (obj.remove = message.remove);
        message.rename !== undefined && (obj.rename = message.rename);
        return obj;
    },

    fromPartial(object: DeepPartial<HeaderModification>): HeaderModification {
        const message = { ...baseHeaderModification } as HeaderModification;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.append !== undefined && object.append !== null) {
            message.append = object.append;
        } else {
            message.append = undefined;
        }
        if (object.replace !== undefined && object.replace !== null) {
            message.replace = object.replace;
        } else {
            message.replace = undefined;
        }
        if (object.remove !== undefined && object.remove !== null) {
            message.remove = object.remove;
        } else {
            message.remove = undefined;
        }
        if (object.rename !== undefined && object.rename !== null) {
            message.rename = object.rename;
        } else {
            message.rename = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(HeaderModification.$type, HeaderModification);

const baseRoute: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.Route',
    name: '',
};

export const Route = {
    $type: 'yandex.cloud.apploadbalancer.v1.Route' as const,

    encode(
        message: Route,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.http !== undefined) {
            HttpRoute.encode(message.http, writer.uint32(18).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            GrpcRoute.encode(message.grpc, writer.uint32(26).fork()).ldelim();
        }
        if (message.routeOptions !== undefined) {
            RouteOptions.encode(
                message.routeOptions,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Route {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRoute } as Route;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.http = HttpRoute.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.grpc = GrpcRoute.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.routeOptions = RouteOptions.decode(
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

    fromJSON(object: any): Route {
        const message = { ...baseRoute } as Route;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
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
        if (object.routeOptions !== undefined && object.routeOptions !== null) {
            message.routeOptions = RouteOptions.fromJSON(object.routeOptions);
        } else {
            message.routeOptions = undefined;
        }
        return message;
    },

    toJSON(message: Route): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpRoute.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? GrpcRoute.toJSON(message.grpc)
                : undefined);
        message.routeOptions !== undefined &&
            (obj.routeOptions = message.routeOptions
                ? RouteOptions.toJSON(message.routeOptions)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Route>): Route {
        const message = { ...baseRoute } as Route;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
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
        if (object.routeOptions !== undefined && object.routeOptions !== null) {
            message.routeOptions = RouteOptions.fromPartial(
                object.routeOptions
            );
        } else {
            message.routeOptions = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Route.$type, Route);

const baseHttpRoute: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRoute',
};

export const HttpRoute = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRoute' as const,

    encode(
        message: HttpRoute,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.match !== undefined) {
            HttpRouteMatch.encode(
                message.match,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.route !== undefined) {
            HttpRouteAction.encode(
                message.route,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.redirect !== undefined) {
            RedirectAction.encode(
                message.redirect,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.directResponse !== undefined) {
            DirectResponseAction.encode(
                message.directResponse,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpRoute {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpRoute } as HttpRoute;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = HttpRouteMatch.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.route = HttpRouteAction.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.redirect = RedirectAction.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.directResponse = DirectResponseAction.decode(
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

    fromJSON(object: any): HttpRoute {
        const message = { ...baseHttpRoute } as HttpRoute;
        if (object.match !== undefined && object.match !== null) {
            message.match = HttpRouteMatch.fromJSON(object.match);
        } else {
            message.match = undefined;
        }
        if (object.route !== undefined && object.route !== null) {
            message.route = HttpRouteAction.fromJSON(object.route);
        } else {
            message.route = undefined;
        }
        if (object.redirect !== undefined && object.redirect !== null) {
            message.redirect = RedirectAction.fromJSON(object.redirect);
        } else {
            message.redirect = undefined;
        }
        if (
            object.directResponse !== undefined &&
            object.directResponse !== null
        ) {
            message.directResponse = DirectResponseAction.fromJSON(
                object.directResponse
            );
        } else {
            message.directResponse = undefined;
        }
        return message;
    },

    toJSON(message: HttpRoute): unknown {
        const obj: any = {};
        message.match !== undefined &&
            (obj.match = message.match
                ? HttpRouteMatch.toJSON(message.match)
                : undefined);
        message.route !== undefined &&
            (obj.route = message.route
                ? HttpRouteAction.toJSON(message.route)
                : undefined);
        message.redirect !== undefined &&
            (obj.redirect = message.redirect
                ? RedirectAction.toJSON(message.redirect)
                : undefined);
        message.directResponse !== undefined &&
            (obj.directResponse = message.directResponse
                ? DirectResponseAction.toJSON(message.directResponse)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<HttpRoute>): HttpRoute {
        const message = { ...baseHttpRoute } as HttpRoute;
        if (object.match !== undefined && object.match !== null) {
            message.match = HttpRouteMatch.fromPartial(object.match);
        } else {
            message.match = undefined;
        }
        if (object.route !== undefined && object.route !== null) {
            message.route = HttpRouteAction.fromPartial(object.route);
        } else {
            message.route = undefined;
        }
        if (object.redirect !== undefined && object.redirect !== null) {
            message.redirect = RedirectAction.fromPartial(object.redirect);
        } else {
            message.redirect = undefined;
        }
        if (
            object.directResponse !== undefined &&
            object.directResponse !== null
        ) {
            message.directResponse = DirectResponseAction.fromPartial(
                object.directResponse
            );
        } else {
            message.directResponse = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(HttpRoute.$type, HttpRoute);

const baseGrpcRoute: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcRoute',
};

export const GrpcRoute = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcRoute' as const,

    encode(
        message: GrpcRoute,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.match !== undefined) {
            GrpcRouteMatch.encode(
                message.match,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.route !== undefined) {
            GrpcRouteAction.encode(
                message.route,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.statusResponse !== undefined) {
            GrpcStatusResponseAction.encode(
                message.statusResponse,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GrpcRoute {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcRoute } as GrpcRoute;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.match = GrpcRouteMatch.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.route = GrpcRouteAction.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.statusResponse = GrpcStatusResponseAction.decode(
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

    fromJSON(object: any): GrpcRoute {
        const message = { ...baseGrpcRoute } as GrpcRoute;
        if (object.match !== undefined && object.match !== null) {
            message.match = GrpcRouteMatch.fromJSON(object.match);
        } else {
            message.match = undefined;
        }
        if (object.route !== undefined && object.route !== null) {
            message.route = GrpcRouteAction.fromJSON(object.route);
        } else {
            message.route = undefined;
        }
        if (
            object.statusResponse !== undefined &&
            object.statusResponse !== null
        ) {
            message.statusResponse = GrpcStatusResponseAction.fromJSON(
                object.statusResponse
            );
        } else {
            message.statusResponse = undefined;
        }
        return message;
    },

    toJSON(message: GrpcRoute): unknown {
        const obj: any = {};
        message.match !== undefined &&
            (obj.match = message.match
                ? GrpcRouteMatch.toJSON(message.match)
                : undefined);
        message.route !== undefined &&
            (obj.route = message.route
                ? GrpcRouteAction.toJSON(message.route)
                : undefined);
        message.statusResponse !== undefined &&
            (obj.statusResponse = message.statusResponse
                ? GrpcStatusResponseAction.toJSON(message.statusResponse)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<GrpcRoute>): GrpcRoute {
        const message = { ...baseGrpcRoute } as GrpcRoute;
        if (object.match !== undefined && object.match !== null) {
            message.match = GrpcRouteMatch.fromPartial(object.match);
        } else {
            message.match = undefined;
        }
        if (object.route !== undefined && object.route !== null) {
            message.route = GrpcRouteAction.fromPartial(object.route);
        } else {
            message.route = undefined;
        }
        if (
            object.statusResponse !== undefined &&
            object.statusResponse !== null
        ) {
            message.statusResponse = GrpcStatusResponseAction.fromPartial(
                object.statusResponse
            );
        } else {
            message.statusResponse = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(GrpcRoute.$type, GrpcRoute);

const baseHttpRouteMatch: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouteMatch',
    httpMethod: '',
};

export const HttpRouteMatch = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouteMatch' as const,

    encode(
        message: HttpRouteMatch,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.httpMethod) {
            writer.uint32(10).string(v!);
        }
        if (message.path !== undefined) {
            StringMatch.encode(message.path, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpRouteMatch {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpRouteMatch } as HttpRouteMatch;
        message.httpMethod = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpMethod.push(reader.string());
                    break;
                case 2:
                    message.path = StringMatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HttpRouteMatch {
        const message = { ...baseHttpRouteMatch } as HttpRouteMatch;
        message.httpMethod = [];
        if (object.httpMethod !== undefined && object.httpMethod !== null) {
            for (const e of object.httpMethod) {
                message.httpMethod.push(String(e));
            }
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = StringMatch.fromJSON(object.path);
        } else {
            message.path = undefined;
        }
        return message;
    },

    toJSON(message: HttpRouteMatch): unknown {
        const obj: any = {};
        if (message.httpMethod) {
            obj.httpMethod = message.httpMethod.map((e) => e);
        } else {
            obj.httpMethod = [];
        }
        message.path !== undefined &&
            (obj.path = message.path
                ? StringMatch.toJSON(message.path)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<HttpRouteMatch>): HttpRouteMatch {
        const message = { ...baseHttpRouteMatch } as HttpRouteMatch;
        message.httpMethod = [];
        if (object.httpMethod !== undefined && object.httpMethod !== null) {
            for (const e of object.httpMethod) {
                message.httpMethod.push(e);
            }
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = StringMatch.fromPartial(object.path);
        } else {
            message.path = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(HttpRouteMatch.$type, HttpRouteMatch);

const baseGrpcRouteMatch: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcRouteMatch',
};

export const GrpcRouteMatch = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcRouteMatch' as const,

    encode(
        message: GrpcRouteMatch,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.fqmn !== undefined) {
            StringMatch.encode(message.fqmn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GrpcRouteMatch {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcRouteMatch } as GrpcRouteMatch;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fqmn = StringMatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GrpcRouteMatch {
        const message = { ...baseGrpcRouteMatch } as GrpcRouteMatch;
        if (object.fqmn !== undefined && object.fqmn !== null) {
            message.fqmn = StringMatch.fromJSON(object.fqmn);
        } else {
            message.fqmn = undefined;
        }
        return message;
    },

    toJSON(message: GrpcRouteMatch): unknown {
        const obj: any = {};
        message.fqmn !== undefined &&
            (obj.fqmn = message.fqmn
                ? StringMatch.toJSON(message.fqmn)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<GrpcRouteMatch>): GrpcRouteMatch {
        const message = { ...baseGrpcRouteMatch } as GrpcRouteMatch;
        if (object.fqmn !== undefined && object.fqmn !== null) {
            message.fqmn = StringMatch.fromPartial(object.fqmn);
        } else {
            message.fqmn = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(GrpcRouteMatch.$type, GrpcRouteMatch);

const baseStringMatch: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.StringMatch',
};

export const StringMatch = {
    $type: 'yandex.cloud.apploadbalancer.v1.StringMatch' as const,

    encode(
        message: StringMatch,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.exactMatch !== undefined) {
            writer.uint32(10).string(message.exactMatch);
        }
        if (message.prefixMatch !== undefined) {
            writer.uint32(18).string(message.prefixMatch);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StringMatch {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStringMatch } as StringMatch;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exactMatch = reader.string();
                    break;
                case 2:
                    message.prefixMatch = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StringMatch {
        const message = { ...baseStringMatch } as StringMatch;
        if (object.exactMatch !== undefined && object.exactMatch !== null) {
            message.exactMatch = String(object.exactMatch);
        } else {
            message.exactMatch = undefined;
        }
        if (object.prefixMatch !== undefined && object.prefixMatch !== null) {
            message.prefixMatch = String(object.prefixMatch);
        } else {
            message.prefixMatch = undefined;
        }
        return message;
    },

    toJSON(message: StringMatch): unknown {
        const obj: any = {};
        message.exactMatch !== undefined &&
            (obj.exactMatch = message.exactMatch);
        message.prefixMatch !== undefined &&
            (obj.prefixMatch = message.prefixMatch);
        return obj;
    },

    fromPartial(object: DeepPartial<StringMatch>): StringMatch {
        const message = { ...baseStringMatch } as StringMatch;
        if (object.exactMatch !== undefined && object.exactMatch !== null) {
            message.exactMatch = object.exactMatch;
        } else {
            message.exactMatch = undefined;
        }
        if (object.prefixMatch !== undefined && object.prefixMatch !== null) {
            message.prefixMatch = object.prefixMatch;
        } else {
            message.prefixMatch = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(StringMatch.$type, StringMatch);

const baseRedirectAction: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.RedirectAction',
    replaceScheme: '',
    replaceHost: '',
    replacePort: 0,
    removeQuery: false,
    responseCode: 0,
};

export const RedirectAction = {
    $type: 'yandex.cloud.apploadbalancer.v1.RedirectAction' as const,

    encode(
        message: RedirectAction,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.replaceScheme !== '') {
            writer.uint32(10).string(message.replaceScheme);
        }
        if (message.replaceHost !== '') {
            writer.uint32(18).string(message.replaceHost);
        }
        if (message.replacePort !== 0) {
            writer.uint32(24).int64(message.replacePort);
        }
        if (message.replacePath !== undefined) {
            writer.uint32(34).string(message.replacePath);
        }
        if (message.replacePrefix !== undefined) {
            writer.uint32(42).string(message.replacePrefix);
        }
        if (message.removeQuery === true) {
            writer.uint32(48).bool(message.removeQuery);
        }
        if (message.responseCode !== 0) {
            writer.uint32(56).int32(message.responseCode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RedirectAction {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedirectAction } as RedirectAction;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.replaceScheme = reader.string();
                    break;
                case 2:
                    message.replaceHost = reader.string();
                    break;
                case 3:
                    message.replacePort = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.replacePath = reader.string();
                    break;
                case 5:
                    message.replacePrefix = reader.string();
                    break;
                case 6:
                    message.removeQuery = reader.bool();
                    break;
                case 7:
                    message.responseCode = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RedirectAction {
        const message = { ...baseRedirectAction } as RedirectAction;
        if (
            object.replaceScheme !== undefined &&
            object.replaceScheme !== null
        ) {
            message.replaceScheme = String(object.replaceScheme);
        } else {
            message.replaceScheme = '';
        }
        if (object.replaceHost !== undefined && object.replaceHost !== null) {
            message.replaceHost = String(object.replaceHost);
        } else {
            message.replaceHost = '';
        }
        if (object.replacePort !== undefined && object.replacePort !== null) {
            message.replacePort = Number(object.replacePort);
        } else {
            message.replacePort = 0;
        }
        if (object.replacePath !== undefined && object.replacePath !== null) {
            message.replacePath = String(object.replacePath);
        } else {
            message.replacePath = undefined;
        }
        if (
            object.replacePrefix !== undefined &&
            object.replacePrefix !== null
        ) {
            message.replacePrefix = String(object.replacePrefix);
        } else {
            message.replacePrefix = undefined;
        }
        if (object.removeQuery !== undefined && object.removeQuery !== null) {
            message.removeQuery = Boolean(object.removeQuery);
        } else {
            message.removeQuery = false;
        }
        if (object.responseCode !== undefined && object.responseCode !== null) {
            message.responseCode = redirectAction_RedirectResponseCodeFromJSON(
                object.responseCode
            );
        } else {
            message.responseCode = 0;
        }
        return message;
    },

    toJSON(message: RedirectAction): unknown {
        const obj: any = {};
        message.replaceScheme !== undefined &&
            (obj.replaceScheme = message.replaceScheme);
        message.replaceHost !== undefined &&
            (obj.replaceHost = message.replaceHost);
        message.replacePort !== undefined &&
            (obj.replacePort = message.replacePort);
        message.replacePath !== undefined &&
            (obj.replacePath = message.replacePath);
        message.replacePrefix !== undefined &&
            (obj.replacePrefix = message.replacePrefix);
        message.removeQuery !== undefined &&
            (obj.removeQuery = message.removeQuery);
        message.responseCode !== undefined &&
            (obj.responseCode = redirectAction_RedirectResponseCodeToJSON(
                message.responseCode
            ));
        return obj;
    },

    fromPartial(object: DeepPartial<RedirectAction>): RedirectAction {
        const message = { ...baseRedirectAction } as RedirectAction;
        if (
            object.replaceScheme !== undefined &&
            object.replaceScheme !== null
        ) {
            message.replaceScheme = object.replaceScheme;
        } else {
            message.replaceScheme = '';
        }
        if (object.replaceHost !== undefined && object.replaceHost !== null) {
            message.replaceHost = object.replaceHost;
        } else {
            message.replaceHost = '';
        }
        if (object.replacePort !== undefined && object.replacePort !== null) {
            message.replacePort = object.replacePort;
        } else {
            message.replacePort = 0;
        }
        if (object.replacePath !== undefined && object.replacePath !== null) {
            message.replacePath = object.replacePath;
        } else {
            message.replacePath = undefined;
        }
        if (
            object.replacePrefix !== undefined &&
            object.replacePrefix !== null
        ) {
            message.replacePrefix = object.replacePrefix;
        } else {
            message.replacePrefix = undefined;
        }
        if (object.removeQuery !== undefined && object.removeQuery !== null) {
            message.removeQuery = object.removeQuery;
        } else {
            message.removeQuery = false;
        }
        if (object.responseCode !== undefined && object.responseCode !== null) {
            message.responseCode = object.responseCode;
        } else {
            message.responseCode = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(RedirectAction.$type, RedirectAction);

const baseDirectResponseAction: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.DirectResponseAction',
    status: 0,
};

export const DirectResponseAction = {
    $type: 'yandex.cloud.apploadbalancer.v1.DirectResponseAction' as const,

    encode(
        message: DirectResponseAction,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.status !== 0) {
            writer.uint32(8).int64(message.status);
        }
        if (message.body !== undefined) {
            Payload.encode(message.body, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DirectResponseAction {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDirectResponseAction } as DirectResponseAction;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.body = Payload.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DirectResponseAction {
        const message = { ...baseDirectResponseAction } as DirectResponseAction;
        if (object.status !== undefined && object.status !== null) {
            message.status = Number(object.status);
        } else {
            message.status = 0;
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = Payload.fromJSON(object.body);
        } else {
            message.body = undefined;
        }
        return message;
    },

    toJSON(message: DirectResponseAction): unknown {
        const obj: any = {};
        message.status !== undefined && (obj.status = message.status);
        message.body !== undefined &&
            (obj.body = message.body
                ? Payload.toJSON(message.body)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DirectResponseAction>
    ): DirectResponseAction {
        const message = { ...baseDirectResponseAction } as DirectResponseAction;
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = Payload.fromPartial(object.body);
        } else {
            message.body = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(DirectResponseAction.$type, DirectResponseAction);

const baseGrpcStatusResponseAction: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction',
    status: 0,
};

export const GrpcStatusResponseAction = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcStatusResponseAction' as const,

    encode(
        message: GrpcStatusResponseAction,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GrpcStatusResponseAction {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGrpcStatusResponseAction,
        } as GrpcStatusResponseAction;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GrpcStatusResponseAction {
        const message = {
            ...baseGrpcStatusResponseAction,
        } as GrpcStatusResponseAction;
        if (object.status !== undefined && object.status !== null) {
            message.status = grpcStatusResponseAction_StatusFromJSON(
                object.status
            );
        } else {
            message.status = 0;
        }
        return message;
    },

    toJSON(message: GrpcStatusResponseAction): unknown {
        const obj: any = {};
        message.status !== undefined &&
            (obj.status = grpcStatusResponseAction_StatusToJSON(
                message.status
            ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<GrpcStatusResponseAction>
    ): GrpcStatusResponseAction {
        const message = {
            ...baseGrpcStatusResponseAction,
        } as GrpcStatusResponseAction;
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(
    GrpcStatusResponseAction.$type,
    GrpcStatusResponseAction
);

const baseHttpRouteAction: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouteAction',
    backendGroupId: '',
    prefixRewrite: '',
    upgradeTypes: '',
};

export const HttpRouteAction = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpRouteAction' as const,

    encode(
        message: HttpRouteAction,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.timeout !== undefined) {
            Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
        }
        if (message.idleTimeout !== undefined) {
            Duration.encode(
                message.idleTimeout,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.hostRewrite !== undefined) {
            writer.uint32(34).string(message.hostRewrite);
        }
        if (message.autoHostRewrite !== undefined) {
            writer.uint32(40).bool(message.autoHostRewrite);
        }
        if (message.prefixRewrite !== '') {
            writer.uint32(50).string(message.prefixRewrite);
        }
        for (const v of message.upgradeTypes) {
            writer.uint32(58).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpRouteAction {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpRouteAction } as HttpRouteAction;
        message.upgradeTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.timeout = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.idleTimeout = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.hostRewrite = reader.string();
                    break;
                case 5:
                    message.autoHostRewrite = reader.bool();
                    break;
                case 6:
                    message.prefixRewrite = reader.string();
                    break;
                case 7:
                    message.upgradeTypes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HttpRouteAction {
        const message = { ...baseHttpRouteAction } as HttpRouteAction;
        message.upgradeTypes = [];
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Duration.fromJSON(object.timeout);
        } else {
            message.timeout = undefined;
        }
        if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
            message.idleTimeout = Duration.fromJSON(object.idleTimeout);
        } else {
            message.idleTimeout = undefined;
        }
        if (object.hostRewrite !== undefined && object.hostRewrite !== null) {
            message.hostRewrite = String(object.hostRewrite);
        } else {
            message.hostRewrite = undefined;
        }
        if (
            object.autoHostRewrite !== undefined &&
            object.autoHostRewrite !== null
        ) {
            message.autoHostRewrite = Boolean(object.autoHostRewrite);
        } else {
            message.autoHostRewrite = undefined;
        }
        if (
            object.prefixRewrite !== undefined &&
            object.prefixRewrite !== null
        ) {
            message.prefixRewrite = String(object.prefixRewrite);
        } else {
            message.prefixRewrite = '';
        }
        if (object.upgradeTypes !== undefined && object.upgradeTypes !== null) {
            for (const e of object.upgradeTypes) {
                message.upgradeTypes.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: HttpRouteAction): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? Duration.toJSON(message.timeout)
                : undefined);
        message.idleTimeout !== undefined &&
            (obj.idleTimeout = message.idleTimeout
                ? Duration.toJSON(message.idleTimeout)
                : undefined);
        message.hostRewrite !== undefined &&
            (obj.hostRewrite = message.hostRewrite);
        message.autoHostRewrite !== undefined &&
            (obj.autoHostRewrite = message.autoHostRewrite);
        message.prefixRewrite !== undefined &&
            (obj.prefixRewrite = message.prefixRewrite);
        if (message.upgradeTypes) {
            obj.upgradeTypes = message.upgradeTypes.map((e) => e);
        } else {
            obj.upgradeTypes = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<HttpRouteAction>): HttpRouteAction {
        const message = { ...baseHttpRouteAction } as HttpRouteAction;
        message.upgradeTypes = [];
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Duration.fromPartial(object.timeout);
        } else {
            message.timeout = undefined;
        }
        if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
            message.idleTimeout = Duration.fromPartial(object.idleTimeout);
        } else {
            message.idleTimeout = undefined;
        }
        if (object.hostRewrite !== undefined && object.hostRewrite !== null) {
            message.hostRewrite = object.hostRewrite;
        } else {
            message.hostRewrite = undefined;
        }
        if (
            object.autoHostRewrite !== undefined &&
            object.autoHostRewrite !== null
        ) {
            message.autoHostRewrite = object.autoHostRewrite;
        } else {
            message.autoHostRewrite = undefined;
        }
        if (
            object.prefixRewrite !== undefined &&
            object.prefixRewrite !== null
        ) {
            message.prefixRewrite = object.prefixRewrite;
        } else {
            message.prefixRewrite = '';
        }
        if (object.upgradeTypes !== undefined && object.upgradeTypes !== null) {
            for (const e of object.upgradeTypes) {
                message.upgradeTypes.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(HttpRouteAction.$type, HttpRouteAction);

const baseGrpcRouteAction: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcRouteAction',
    backendGroupId: '',
};

export const GrpcRouteAction = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcRouteAction' as const,

    encode(
        message: GrpcRouteAction,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.maxTimeout !== undefined) {
            Duration.encode(
                message.maxTimeout,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.idleTimeout !== undefined) {
            Duration.encode(
                message.idleTimeout,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.hostRewrite !== undefined) {
            writer.uint32(34).string(message.hostRewrite);
        }
        if (message.autoHostRewrite !== undefined) {
            writer.uint32(40).bool(message.autoHostRewrite);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GrpcRouteAction {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcRouteAction } as GrpcRouteAction;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.maxTimeout = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.idleTimeout = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.hostRewrite = reader.string();
                    break;
                case 5:
                    message.autoHostRewrite = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GrpcRouteAction {
        const message = { ...baseGrpcRouteAction } as GrpcRouteAction;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = String(object.backendGroupId);
        } else {
            message.backendGroupId = '';
        }
        if (object.maxTimeout !== undefined && object.maxTimeout !== null) {
            message.maxTimeout = Duration.fromJSON(object.maxTimeout);
        } else {
            message.maxTimeout = undefined;
        }
        if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
            message.idleTimeout = Duration.fromJSON(object.idleTimeout);
        } else {
            message.idleTimeout = undefined;
        }
        if (object.hostRewrite !== undefined && object.hostRewrite !== null) {
            message.hostRewrite = String(object.hostRewrite);
        } else {
            message.hostRewrite = undefined;
        }
        if (
            object.autoHostRewrite !== undefined &&
            object.autoHostRewrite !== null
        ) {
            message.autoHostRewrite = Boolean(object.autoHostRewrite);
        } else {
            message.autoHostRewrite = undefined;
        }
        return message;
    },

    toJSON(message: GrpcRouteAction): unknown {
        const obj: any = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.maxTimeout !== undefined &&
            (obj.maxTimeout = message.maxTimeout
                ? Duration.toJSON(message.maxTimeout)
                : undefined);
        message.idleTimeout !== undefined &&
            (obj.idleTimeout = message.idleTimeout
                ? Duration.toJSON(message.idleTimeout)
                : undefined);
        message.hostRewrite !== undefined &&
            (obj.hostRewrite = message.hostRewrite);
        message.autoHostRewrite !== undefined &&
            (obj.autoHostRewrite = message.autoHostRewrite);
        return obj;
    },

    fromPartial(object: DeepPartial<GrpcRouteAction>): GrpcRouteAction {
        const message = { ...baseGrpcRouteAction } as GrpcRouteAction;
        if (
            object.backendGroupId !== undefined &&
            object.backendGroupId !== null
        ) {
            message.backendGroupId = object.backendGroupId;
        } else {
            message.backendGroupId = '';
        }
        if (object.maxTimeout !== undefined && object.maxTimeout !== null) {
            message.maxTimeout = Duration.fromPartial(object.maxTimeout);
        } else {
            message.maxTimeout = undefined;
        }
        if (object.idleTimeout !== undefined && object.idleTimeout !== null) {
            message.idleTimeout = Duration.fromPartial(object.idleTimeout);
        } else {
            message.idleTimeout = undefined;
        }
        if (object.hostRewrite !== undefined && object.hostRewrite !== null) {
            message.hostRewrite = object.hostRewrite;
        } else {
            message.hostRewrite = undefined;
        }
        if (
            object.autoHostRewrite !== undefined &&
            object.autoHostRewrite !== null
        ) {
            message.autoHostRewrite = object.autoHostRewrite;
        } else {
            message.autoHostRewrite = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(GrpcRouteAction.$type, GrpcRouteAction);

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
