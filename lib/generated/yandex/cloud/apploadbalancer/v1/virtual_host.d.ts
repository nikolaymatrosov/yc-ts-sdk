import { Duration } from '../../../../google/protobuf/duration';
import { Payload } from '../../../../yandex/cloud/apploadbalancer/v1/payload';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface VirtualHost {
    name: string;
    /**
     * A list of domains (host/authority header) that will be matched to this
     * virtual host. Wildcard hosts are supported in the form of '*.foo.com' or
     * '*-bar.foo.com'.
     * If not specified, all domains will be matched.
     */
    authority: string[];
    /**
     * Routes are matched *in-order*. Be careful when adding them to the end.
     * For instance, having http '/' match first makes all other routes unused.
     */
    routes: Route[];
    /** Apply the following modifications to the request headers. */
    modifyRequestHeaders: HeaderModification[];
    /** Apply the following modifications to the response headers. */
    modifyResponseHeaders: HeaderModification[];
}
export interface HeaderModification {
    /** Name of the header. */
    name: string;
    /** Append string to the header value. */
    append: string | undefined;
    /** New value for a header. */
    replace: string | undefined;
    /** Remove the header. */
    remove: boolean | undefined;
    /** New name for a header. */
    rename: string | undefined;
}
export interface Route {
    name: string;
    http: HttpRoute | undefined;
    grpc: GrpcRoute | undefined;
}
export interface HttpRoute {
    /** Checks "/" prefix by default. */
    match: HttpRouteMatch | undefined;
    route: HttpRouteAction | undefined;
    redirect: RedirectAction | undefined;
    directResponse: DirectResponseAction | undefined;
}
export interface GrpcRoute {
    /** Checks "/" prefix by default. */
    match: GrpcRouteMatch | undefined;
    route: GrpcRouteAction | undefined;
    statusResponse: GrpcStatusResponseAction | undefined;
}
export interface HttpRouteMatch {
    httpMethod: string[];
    /** If not set, '/' is assumed. */
    path: StringMatch | undefined;
}
export interface GrpcRouteMatch {
    /** If not set, all services/methods are assumed. */
    fqmn: StringMatch | undefined;
}
export interface StringMatch {
    exactMatch: string | undefined;
    prefixMatch: string | undefined;
}
export interface RedirectAction {
    /**
     * Replaces scheme.
     * If the original scheme is `http` or `https`,
     * will also remove the 80 or 443 port, if present.
     */
    replaceScheme: string;
    /** Replaces hostname. */
    replaceHost: string;
    /** Replaces port. */
    replacePort: number;
    /** Replace path. */
    replacePath: string | undefined;
    /**
     * Replace only matched prefix.
     * Example:
     *    match:    { prefix_match: "/some" }
     *    redirect: { replace_prefix: "/other" }
     * will redirect "/something" to "/otherthing"
     */
    replacePrefix: string | undefined;
    /** Remove query part. */
    removeQuery: boolean;
    /** The HTTP status code to use in the redirect response. */
    responseCode: RedirectAction_RedirectResponseCode;
}
export declare enum RedirectAction_RedirectResponseCode {
    /** MOVED_PERMANENTLY - Moved Permanently HTTP Status Code - 301. */
    MOVED_PERMANENTLY = 0,
    /** FOUND - Found HTTP Status Code - 302. */
    FOUND = 1,
    /** SEE_OTHER - See Other HTTP Status Code - 303. */
    SEE_OTHER = 2,
    /** TEMPORARY_REDIRECT - Temporary Redirect HTTP Status Code - 307. */
    TEMPORARY_REDIRECT = 3,
    /** PERMANENT_REDIRECT - Permanent Redirect HTTP Status Code - 308. */
    PERMANENT_REDIRECT = 4,
    UNRECOGNIZED = -1
}
export declare function redirectAction_RedirectResponseCodeFromJSON(object: any): RedirectAction_RedirectResponseCode;
export declare function redirectAction_RedirectResponseCodeToJSON(object: RedirectAction_RedirectResponseCode): string;
export interface DirectResponseAction {
    /** HTTP response status. */
    status: number;
    /** Optional response body. */
    body: Payload | undefined;
}
export interface GrpcStatusResponseAction {
    status: GrpcStatusResponseAction_Status;
}
export declare enum GrpcStatusResponseAction_Status {
    OK = 0,
    INVALID_ARGUMENT = 1,
    NOT_FOUND = 2,
    PERMISSION_DENIED = 3,
    UNAUTHENTICATED = 4,
    UNIMPLEMENTED = 5,
    INTERNAL = 6,
    UNAVAILABLE = 7,
    UNRECOGNIZED = -1
}
export declare function grpcStatusResponseAction_StatusFromJSON(object: any): GrpcStatusResponseAction_Status;
export declare function grpcStatusResponseAction_StatusToJSON(object: GrpcStatusResponseAction_Status): string;
export interface HttpRouteAction {
    /** Backend group to route requests. */
    backendGroupId: string;
    /**
     * Specifies the request timeout (overall time request processing is allowed to take) for the route.
     * If not set, default is 60 seconds.
     */
    timeout: Duration | undefined;
    /**
     * Specifies the idle timeout (time without any data transfer for the active request) for the route.
     * It is useful for streaming scenarios (i.e. long-polling, server-sent events) - one should set
     * idle_timeout to something meaningful and timeout to the maximum time the stream is allowed to be alive.
     * If not specified, there is no per-route idle timeout.
     */
    idleTimeout: Duration | undefined;
    hostRewrite: string | undefined;
    autoHostRewrite: boolean | undefined;
    /** If not empty, matched path prefix will be replaced by this value. */
    prefixRewrite: string;
    /** Only specified upgrade types will be allowed. For example, "websocket". */
    upgradeTypes: string[];
}
export interface GrpcRouteAction {
    /** Backend group to route requests. */
    backendGroupId: string;
    /**
     * Lower timeout may be specified by the client (using grpc-timeout header).
     * If not set, default is 60 seconds.
     */
    maxTimeout: Duration | undefined;
    /**
     * Specifies the idle timeout (time without any data transfer for the active request) for the route.
     * It is useful for streaming scenarios - one should set idle_timeout to something meaningful
     * and max_timeout to the maximum time the stream is allowed to be alive.
     * If not specified, there is no per-route idle timeout.
     */
    idleTimeout: Duration | undefined;
    hostRewrite: string | undefined;
    autoHostRewrite: boolean | undefined;
}
export declare const VirtualHost: {
    encode(message: VirtualHost, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VirtualHost;
    fromJSON(object: any): VirtualHost;
    toJSON(message: VirtualHost): unknown;
    fromPartial(object: DeepPartial<VirtualHost>): VirtualHost;
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
