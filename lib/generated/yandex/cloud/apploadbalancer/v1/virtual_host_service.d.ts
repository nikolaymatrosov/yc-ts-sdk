/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { VirtualHost, Route, HeaderModification, HttpRoute, GrpcRoute } from '../../../../yandex/cloud/apploadbalancer/v1/virtual_host';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetVirtualHostRequest {
    /** ID of the HTTP Router that the virtual host belongs to. */
    httpRouterId: string;
    /** Name of the VirtualHost resource to return. */
    virtualHostName: string;
}
export interface ListVirtualHostsRequest {
    /** ID of the HTTP Router that the virtual host belongs to. */
    httpRouterId: string;
    pageSize: number;
    pageToken: string;
}
export interface ListVirtualHostsResponse {
    /** List of virtual hosts. */
    virtualHosts: VirtualHost[];
    nextPageToken: string;
}
export interface CreateVirtualHostRequest {
    /** ID of the HTTP Router that the virtual host belongs to. */
    httpRouterId: string;
    /** Configuration of the virtual host to create. */
    name: string;
    authority: string[];
    routes: Route[];
    modifyRequestHeaders: HeaderModification[];
    modifyResponseHeaders: HeaderModification[];
}
export interface CreateVirtualHostMetadata {
    /** ID of the HTTP Router that the virtual host is being created. */
    httpRouterId: string;
    /** Name of the virtual host that is being created. */
    virtualHostName: string;
}
export interface UpdateVirtualHostRequest {
    /** ID of the HTTP Router that the virtual host belongs to. */
    httpRouterId: string;
    virtualHostName: string;
    updateMask: FieldMask | undefined;
    /**
     * Fields of the virtual host to update.
     * Except name, that field used to address virtual host within the http router
     * and cannot be changed after creation.
     */
    authority: string[];
    routes: Route[];
    modifyRequestHeaders: HeaderModification[];
    modifyResponseHeaders: HeaderModification[];
}
export interface UpdateVirtualHostMetadata {
    /** ID of the HTTP Router where a virtual host is being updated. */
    httpRouterId: string;
    /** Name of the updated virtual host. */
    virtualHostName: string;
}
export interface DeleteVirtualHostRequest {
    /** ID of the HTTP Router to delete a virtual host in. */
    httpRouterId: string;
    /** Name of the virtual host to delete. */
    virtualHostName: string;
}
export interface DeleteVirtualHostMetadata {
    /** ID of the HTTP Router where a virtual host is being deleted. */
    httpRouterId: string;
    /** Name of the virtual host that is being deleted. */
    virtualHostName: string;
}
export interface RemoveRouteRequest {
    httpRouterId: string;
    virtualHostName: string;
    routeName: string;
}
export interface RemoveRouteMetadata {
    httpRouterId: string;
    virtualHostName: string;
    routeName: string;
}
export interface UpdateRouteRequest {
    httpRouterId: string;
    virtualHostName: string;
    routeName: string;
    updateMask: FieldMask | undefined;
    http: HttpRoute | undefined;
    grpc: GrpcRoute | undefined;
}
export interface UpdateRouteMetadata {
    httpRouterId: string;
    virtualHostName: string;
    routeName: string;
}
export declare const GetVirtualHostRequest: {
    encode(message: GetVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetVirtualHostRequest;
    fromJSON(object: any): GetVirtualHostRequest;
    toJSON(message: GetVirtualHostRequest): unknown;
    fromPartial(object: DeepPartial<GetVirtualHostRequest>): GetVirtualHostRequest;
};
export declare const ListVirtualHostsRequest: {
    encode(message: ListVirtualHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVirtualHostsRequest;
    fromJSON(object: any): ListVirtualHostsRequest;
    toJSON(message: ListVirtualHostsRequest): unknown;
    fromPartial(object: DeepPartial<ListVirtualHostsRequest>): ListVirtualHostsRequest;
};
export declare const ListVirtualHostsResponse: {
    encode(message: ListVirtualHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVirtualHostsResponse;
    fromJSON(object: any): ListVirtualHostsResponse;
    toJSON(message: ListVirtualHostsResponse): unknown;
    fromPartial(object: DeepPartial<ListVirtualHostsResponse>): ListVirtualHostsResponse;
};
export declare const CreateVirtualHostRequest: {
    encode(message: CreateVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateVirtualHostRequest;
    fromJSON(object: any): CreateVirtualHostRequest;
    toJSON(message: CreateVirtualHostRequest): unknown;
    fromPartial(object: DeepPartial<CreateVirtualHostRequest>): CreateVirtualHostRequest;
};
export declare const CreateVirtualHostMetadata: {
    encode(message: CreateVirtualHostMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateVirtualHostMetadata;
    fromJSON(object: any): CreateVirtualHostMetadata;
    toJSON(message: CreateVirtualHostMetadata): unknown;
    fromPartial(object: DeepPartial<CreateVirtualHostMetadata>): CreateVirtualHostMetadata;
};
export declare const UpdateVirtualHostRequest: {
    encode(message: UpdateVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateVirtualHostRequest;
    fromJSON(object: any): UpdateVirtualHostRequest;
    toJSON(message: UpdateVirtualHostRequest): unknown;
    fromPartial(object: DeepPartial<UpdateVirtualHostRequest>): UpdateVirtualHostRequest;
};
export declare const UpdateVirtualHostMetadata: {
    encode(message: UpdateVirtualHostMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateVirtualHostMetadata;
    fromJSON(object: any): UpdateVirtualHostMetadata;
    toJSON(message: UpdateVirtualHostMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateVirtualHostMetadata>): UpdateVirtualHostMetadata;
};
export declare const DeleteVirtualHostRequest: {
    encode(message: DeleteVirtualHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteVirtualHostRequest;
    fromJSON(object: any): DeleteVirtualHostRequest;
    toJSON(message: DeleteVirtualHostRequest): unknown;
    fromPartial(object: DeepPartial<DeleteVirtualHostRequest>): DeleteVirtualHostRequest;
};
export declare const DeleteVirtualHostMetadata: {
    encode(message: DeleteVirtualHostMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteVirtualHostMetadata;
    fromJSON(object: any): DeleteVirtualHostMetadata;
    toJSON(message: DeleteVirtualHostMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteVirtualHostMetadata>): DeleteVirtualHostMetadata;
};
export declare const RemoveRouteRequest: {
    encode(message: RemoveRouteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveRouteRequest;
    fromJSON(object: any): RemoveRouteRequest;
    toJSON(message: RemoveRouteRequest): unknown;
    fromPartial(object: DeepPartial<RemoveRouteRequest>): RemoveRouteRequest;
};
export declare const RemoveRouteMetadata: {
    encode(message: RemoveRouteMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveRouteMetadata;
    fromJSON(object: any): RemoveRouteMetadata;
    toJSON(message: RemoveRouteMetadata): unknown;
    fromPartial(object: DeepPartial<RemoveRouteMetadata>): RemoveRouteMetadata;
};
export declare const UpdateRouteRequest: {
    encode(message: UpdateRouteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteRequest;
    fromJSON(object: any): UpdateRouteRequest;
    toJSON(message: UpdateRouteRequest): unknown;
    fromPartial(object: DeepPartial<UpdateRouteRequest>): UpdateRouteRequest;
};
export declare const UpdateRouteMetadata: {
    encode(message: UpdateRouteMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteMetadata;
    fromJSON(object: any): UpdateRouteMetadata;
    toJSON(message: UpdateRouteMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateRouteMetadata>): UpdateRouteMetadata;
};
/** A set of methods for managing virtual hosts of HTTP Router resource. */
export declare const VirtualHostServiceService: {
    /** Returns the specified VirtualHost resource. */
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetVirtualHostRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetVirtualHostRequest;
        readonly responseSerialize: (value: VirtualHost) => Buffer;
        readonly responseDeserialize: (value: Buffer) => VirtualHost;
    };
    /** Retrieves the list of virtual hosts in the specified HTTP Router. */
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListVirtualHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListVirtualHostsRequest;
        readonly responseSerialize: (value: ListVirtualHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListVirtualHostsResponse;
    };
    /** Creates a new virtual host in the specified HTTP Router. */
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateVirtualHostRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateVirtualHostRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates an existing VirtualHost in the specified HTTP Router. */
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
    readonly removeRoute: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.VirtualHostService/RemoveRoute";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveRouteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveRouteRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
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
    /** Returns the specified VirtualHost resource. */
    get: handleUnaryCall<GetVirtualHostRequest, VirtualHost>;
    /** Retrieves the list of virtual hosts in the specified HTTP Router. */
    list: handleUnaryCall<ListVirtualHostsRequest, ListVirtualHostsResponse>;
    /** Creates a new virtual host in the specified HTTP Router. */
    create: handleUnaryCall<CreateVirtualHostRequest, Operation>;
    /** Updates an existing VirtualHost in the specified HTTP Router. */
    update: handleUnaryCall<UpdateVirtualHostRequest, Operation>;
    /** Deletes the specified virtual host. */
    delete: handleUnaryCall<DeleteVirtualHostRequest, Operation>;
    removeRoute: handleUnaryCall<RemoveRouteRequest, Operation>;
    updateRoute: handleUnaryCall<UpdateRouteRequest, Operation>;
}
export interface VirtualHostServiceClient extends Client {
    /** Returns the specified VirtualHost resource. */
    get(request: GetVirtualHostRequest, callback: (error: ServiceError | null, response: VirtualHost) => void): ClientUnaryCall;
    get(request: GetVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: VirtualHost) => void): ClientUnaryCall;
    get(request: GetVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: VirtualHost) => void): ClientUnaryCall;
    /** Retrieves the list of virtual hosts in the specified HTTP Router. */
    list(request: ListVirtualHostsRequest, callback: (error: ServiceError | null, response: ListVirtualHostsResponse) => void): ClientUnaryCall;
    list(request: ListVirtualHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListVirtualHostsResponse) => void): ClientUnaryCall;
    list(request: ListVirtualHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListVirtualHostsResponse) => void): ClientUnaryCall;
    /** Creates a new virtual host in the specified HTTP Router. */
    create(request: CreateVirtualHostRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates an existing VirtualHost in the specified HTTP Router. */
    update(request: UpdateVirtualHostRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified virtual host. */
    delete(request: DeleteVirtualHostRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteVirtualHostRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteVirtualHostRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeRoute(request: RemoveRouteRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeRoute(request: RemoveRouteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeRoute(request: RemoveRouteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRoute(request: UpdateRouteRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRoute(request: UpdateRouteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRoute(request: UpdateRouteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const VirtualHostServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => VirtualHostServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
