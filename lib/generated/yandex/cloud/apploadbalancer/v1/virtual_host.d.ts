import { Duration } from '../../../../google/protobuf/duration';
import { Payload } from '../../../../yandex/cloud/apploadbalancer/v1/payload';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/**
 * A virtual host resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
 */
export interface VirtualHost {
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
    /** Apply the following modifications to the request headers. */
    modifyRequestHeaders: HeaderModification[];
    /** Apply the following modifications to the response headers. */
    modifyResponseHeaders: HeaderModification[];
}
/** A header modification resource. */
export interface HeaderModification {
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
    /** Condition (predicate) used to select the route. */
    match: GrpcRouteMatch | undefined;
    /** Forwards the request to a backend group for processing as configured. */
    route: GrpcRouteAction | undefined;
    /** Instructs the load balancer to respond directly with a specified status. */
    statusResponse: GrpcStatusResponseAction | undefined;
}
/** An HTTP route condition (predicate) resource. */
export interface HttpRouteMatch {
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
    /** Exact match string. */
    exactMatch: string | undefined;
    /** Prefix match string. */
    prefixMatch: string | undefined;
}
/** A redirect action resource. */
export interface RedirectAction {
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
export declare enum RedirectAction_RedirectResponseCode {
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
    UNRECOGNIZED = -1
}
export declare function redirectAction_RedirectResponseCodeFromJSON(object: any): RedirectAction_RedirectResponseCode;
export declare function redirectAction_RedirectResponseCodeToJSON(object: RedirectAction_RedirectResponseCode): string;
/** A direct response action resource. */
export interface DirectResponseAction {
    /** HTTP status code to use in responses. */
    status: number;
    /** Response body. */
    body: Payload | undefined;
}
/** A gRPC status response action resource. */
export interface GrpcStatusResponseAction {
    /** gRPC [status code](https://grpc.github.io/grpc/core/md_doc_statuscodes.html) to use in responses. */
    status: GrpcStatusResponseAction_Status;
}
/** gRPC status code supported for use in responses. */
export declare enum GrpcStatusResponseAction_Status {
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
    UNRECOGNIZED = -1
}
export declare function grpcStatusResponseAction_StatusFromJSON(object: any): GrpcStatusResponseAction_Status;
export declare function grpcStatusResponseAction_StatusToJSON(object: GrpcStatusResponseAction_Status): string;
/** An HTTP route action resource. */
export interface HttpRouteAction {
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
export declare const VirtualHost: {
    encode(message: VirtualHost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VirtualHost;
    fromJSON(object: any): VirtualHost;
    toJSON(message: VirtualHost): unknown;
    fromPartial(object: DeepPartial<VirtualHost>): VirtualHost;
};
export declare const RouteOptions: {
    encode(message: RouteOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteOptions;
    fromJSON(object: any): RouteOptions;
    toJSON(message: RouteOptions): unknown;
    fromPartial(object: DeepPartial<RouteOptions>): RouteOptions;
};
export declare const HeaderModification: {
    encode(message: HeaderModification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeaderModification;
    fromJSON(object: any): HeaderModification;
    toJSON(message: HeaderModification): unknown;
    fromPartial(object: DeepPartial<HeaderModification>): HeaderModification;
};
export declare const Route: {
    encode(message: Route, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Route;
    fromJSON(object: any): Route;
    toJSON(message: Route): unknown;
    fromPartial(object: DeepPartial<Route>): Route;
};
export declare const HttpRoute: {
    encode(message: HttpRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRoute;
    fromJSON(object: any): HttpRoute;
    toJSON(message: HttpRoute): unknown;
    fromPartial(object: DeepPartial<HttpRoute>): HttpRoute;
};
export declare const GrpcRoute: {
    encode(message: GrpcRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcRoute;
    fromJSON(object: any): GrpcRoute;
    toJSON(message: GrpcRoute): unknown;
    fromPartial(object: DeepPartial<GrpcRoute>): GrpcRoute;
};
export declare const HttpRouteMatch: {
    encode(message: HttpRouteMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRouteMatch;
    fromJSON(object: any): HttpRouteMatch;
    toJSON(message: HttpRouteMatch): unknown;
    fromPartial(object: DeepPartial<HttpRouteMatch>): HttpRouteMatch;
};
export declare const GrpcRouteMatch: {
    encode(message: GrpcRouteMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcRouteMatch;
    fromJSON(object: any): GrpcRouteMatch;
    toJSON(message: GrpcRouteMatch): unknown;
    fromPartial(object: DeepPartial<GrpcRouteMatch>): GrpcRouteMatch;
};
export declare const StringMatch: {
    encode(message: StringMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StringMatch;
    fromJSON(object: any): StringMatch;
    toJSON(message: StringMatch): unknown;
    fromPartial(object: DeepPartial<StringMatch>): StringMatch;
};
export declare const RedirectAction: {
    encode(message: RedirectAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RedirectAction;
    fromJSON(object: any): RedirectAction;
    toJSON(message: RedirectAction): unknown;
    fromPartial(object: DeepPartial<RedirectAction>): RedirectAction;
};
export declare const DirectResponseAction: {
    encode(message: DirectResponseAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DirectResponseAction;
    fromJSON(object: any): DirectResponseAction;
    toJSON(message: DirectResponseAction): unknown;
    fromPartial(object: DeepPartial<DirectResponseAction>): DirectResponseAction;
};
export declare const GrpcStatusResponseAction: {
    encode(message: GrpcStatusResponseAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcStatusResponseAction;
    fromJSON(object: any): GrpcStatusResponseAction;
    toJSON(message: GrpcStatusResponseAction): unknown;
    fromPartial(object: DeepPartial<GrpcStatusResponseAction>): GrpcStatusResponseAction;
};
export declare const HttpRouteAction: {
    encode(message: HttpRouteAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpRouteAction;
    fromJSON(object: any): HttpRouteAction;
    toJSON(message: HttpRouteAction): unknown;
    fromPartial(object: DeepPartial<HttpRouteAction>): HttpRouteAction;
};
export declare const GrpcRouteAction: {
    encode(message: GrpcRouteAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcRouteAction;
    fromJSON(object: any): GrpcRouteAction;
    toJSON(message: GrpcRouteAction): unknown;
    fromPartial(object: DeepPartial<GrpcRouteAction>): GrpcRouteAction;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
