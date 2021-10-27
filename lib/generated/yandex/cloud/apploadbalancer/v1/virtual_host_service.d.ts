/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { VirtualHost, Route, HeaderModification, HttpRoute, GrpcRoute } from '../../../../yandex/cloud/apploadbalancer/v1/virtual_host';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetVirtualHostRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.GetVirtualHostRequest';
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
    $type: 'yandex.cloud.apploadbalancer.v1.ListVirtualHostsRequest';
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
    $type: 'yandex.cloud.apploadbalancer.v1.ListVirtualHostsResponse';
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
    $type: 'yandex.cloud.apploadbalancer.v1.CreateVirtualHostRequest';
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
    $type: 'yandex.cloud.apploadbalancer.v1.CreateVirtualHostMetadata';
    /** ID of the HTTP router that the virtual host is being created in. */
    httpRouterId: string;
    /** Name of the virtual host that is being created. */
    virtualHostName: string;
}
export interface UpdateVirtualHostRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateVirtualHostRequest';
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
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateVirtualHostMetadata';
    /** ID of the HTTP router that the virtual host is being updated in. */
    httpRouterId: string;
    /** Name of the virtual host that is being updated. */
    virtualHostName: string;
}
export interface DeleteVirtualHostRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteVirtualHostRequest';
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
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteVirtualHostMetadata';
    /** ID of the HTTP router that the virtual host is being deleted from. */
    httpRouterId: string;
    /** Name of the virtual host that is being deleted. */
    virtualHostName: string;
}
export interface RemoveRouteRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveRouteRequest';
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
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveRouteMetadata';
    /** ID of the HTTP router that the route is being deleted from. */
    httpRouterId: string;
    /** Name of the virtual host that the route is being deleted from. */
    virtualHostName: string;
    /** Name of the route that is being deleted. */
    routeName: string;
}
export interface UpdateRouteRequest {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateRouteRequest';
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
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateRouteMetadata';
    /** ID of the HTTP router that the route is being updated in. */
    httpRouterId: string;
    /** Name of the virtual host that the route is being updated in. */
    virtualHostName: string;
    /** Name of the route that is being updated. */
    routeName: string;
}
export declare const GetVirtualHostRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.GetVirtualHostRequest";
    encode(message: GetVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetVirtualHostRequest;
    fromJSON(object: any): GetVirtualHostRequest;
    toJSON(message: GetVirtualHostRequest): unknown;
    fromPartial(object: DeepPartial<GetVirtualHostRequest>): GetVirtualHostRequest;
};
export declare const ListVirtualHostsRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.ListVirtualHostsRequest";
    encode(message: ListVirtualHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVirtualHostsRequest;
    fromJSON(object: any): ListVirtualHostsRequest;
    toJSON(message: ListVirtualHostsRequest): unknown;
    fromPartial(object: DeepPartial<ListVirtualHostsRequest>): ListVirtualHostsRequest;
};
export declare const ListVirtualHostsResponse: {
    $type: "yandex.cloud.apploadbalancer.v1.ListVirtualHostsResponse";
    encode(message: ListVirtualHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVirtualHostsResponse;
    fromJSON(object: any): ListVirtualHostsResponse;
    toJSON(message: ListVirtualHostsResponse): unknown;
    fromPartial(object: DeepPartial<ListVirtualHostsResponse>): ListVirtualHostsResponse;
};
export declare const CreateVirtualHostRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateVirtualHostRequest";
    encode(message: CreateVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateVirtualHostRequest;
    fromJSON(object: any): CreateVirtualHostRequest;
    toJSON(message: CreateVirtualHostRequest): unknown;
    fromPartial(object: DeepPartial<CreateVirtualHostRequest>): CreateVirtualHostRequest;
};
export declare const CreateVirtualHostMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.CreateVirtualHostMetadata";
    encode(message: CreateVirtualHostMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateVirtualHostMetadata;
    fromJSON(object: any): CreateVirtualHostMetadata;
    toJSON(message: CreateVirtualHostMetadata): unknown;
    fromPartial(object: DeepPartial<CreateVirtualHostMetadata>): CreateVirtualHostMetadata;
};
export declare const UpdateVirtualHostRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateVirtualHostRequest";
    encode(message: UpdateVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateVirtualHostRequest;
    fromJSON(object: any): UpdateVirtualHostRequest;
    toJSON(message: UpdateVirtualHostRequest): unknown;
    fromPartial(object: DeepPartial<UpdateVirtualHostRequest>): UpdateVirtualHostRequest;
};
export declare const UpdateVirtualHostMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateVirtualHostMetadata";
    encode(message: UpdateVirtualHostMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateVirtualHostMetadata;
    fromJSON(object: any): UpdateVirtualHostMetadata;
    toJSON(message: UpdateVirtualHostMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateVirtualHostMetadata>): UpdateVirtualHostMetadata;
};
export declare const DeleteVirtualHostRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteVirtualHostRequest";
    encode(message: DeleteVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteVirtualHostRequest;
    fromJSON(object: any): DeleteVirtualHostRequest;
    toJSON(message: DeleteVirtualHostRequest): unknown;
    fromPartial(object: DeepPartial<DeleteVirtualHostRequest>): DeleteVirtualHostRequest;
};
export declare const DeleteVirtualHostMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.DeleteVirtualHostMetadata";
    encode(message: DeleteVirtualHostMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteVirtualHostMetadata;
    fromJSON(object: any): DeleteVirtualHostMetadata;
    toJSON(message: DeleteVirtualHostMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteVirtualHostMetadata>): DeleteVirtualHostMetadata;
};
export declare const RemoveRouteRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveRouteRequest";
    encode(message: RemoveRouteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveRouteRequest;
    fromJSON(object: any): RemoveRouteRequest;
    toJSON(message: RemoveRouteRequest): unknown;
    fromPartial(object: DeepPartial<RemoveRouteRequest>): RemoveRouteRequest;
};
export declare const RemoveRouteMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.RemoveRouteMetadata";
    encode(message: RemoveRouteMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveRouteMetadata;
    fromJSON(object: any): RemoveRouteMetadata;
    toJSON(message: RemoveRouteMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveRouteMetadata>): RemoveRouteMetadata;
};
export declare const UpdateRouteRequest: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateRouteRequest";
    encode(message: UpdateRouteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteRequest;
    fromJSON(object: any): UpdateRouteRequest;
    toJSON(message: UpdateRouteRequest): unknown;
    fromPartial(object: DeepPartial<UpdateRouteRequest>): UpdateRouteRequest;
};
export declare const UpdateRouteMetadata: {
    $type: "yandex.cloud.apploadbalancer.v1.UpdateRouteMetadata";
    encode(message: UpdateRouteMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteMetadata;
    fromJSON(object: any): UpdateRouteMetadata;
    toJSON(message: UpdateRouteMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateRouteMetadata>): UpdateRouteMetadata;
};
/** A set of methods for managing virtual hosts of HTTP routers. */
export declare const VirtualHostServiceService: {
    /**
     * Returns the specified virtual host.
     *
     * To get the list of all virtual hosts of an HTTP router, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetVirtualHostRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetVirtualHostRequest;
        readonly responseSerialize: (value: VirtualHost) => Buffer;
        readonly responseDeserialize: (value: Buffer) => VirtualHost;
    };
    /** Lists virtual hosts of the specified HTTP router. */
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListVirtualHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListVirtualHostsRequest;
        readonly responseSerialize: (value: ListVirtualHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListVirtualHostsResponse;
    };
    /** Creates a virtual host in the specified HTTP router. */
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateVirtualHostRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateVirtualHostRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified virtual host of the specified HTTP router. */
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateVirtualHostRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateVirtualHostRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified virtual host. */
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteVirtualHostRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteVirtualHostRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified route from the specified virtual host. */
    readonly removeRoute: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/RemoveRoute";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveRouteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveRouteRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified route of the specified virtual host. */
    readonly updateRoute: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/UpdateRoute";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRouteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRouteRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
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
    get(request: GetVirtualHostRequest, callback: (error: ServiceError | null, response: VirtualHost) => void): ClientUnaryCall;
    get(request: GetVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: VirtualHost) => void): ClientUnaryCall;
    get(request: GetVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: VirtualHost) => void): ClientUnaryCall;
    /** Lists virtual hosts of the specified HTTP router. */
    list(request: ListVirtualHostsRequest, callback: (error: ServiceError | null, response: ListVirtualHostsResponse) => void): ClientUnaryCall;
    list(request: ListVirtualHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListVirtualHostsResponse) => void): ClientUnaryCall;
    list(request: ListVirtualHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListVirtualHostsResponse) => void): ClientUnaryCall;
    /** Creates a virtual host in the specified HTTP router. */
    create(request: CreateVirtualHostRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified virtual host of the specified HTTP router. */
    update(request: UpdateVirtualHostRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified virtual host. */
    delete(request: DeleteVirtualHostRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified route from the specified virtual host. */
    removeRoute(request: RemoveRouteRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeRoute(request: RemoveRouteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeRoute(request: RemoveRouteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified route of the specified virtual host. */
    updateRoute(request: UpdateRouteRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRoute(request: UpdateRouteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRoute(request: UpdateRouteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const VirtualHostServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => VirtualHostServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
