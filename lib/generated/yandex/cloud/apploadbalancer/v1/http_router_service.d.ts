/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { HttpRouter } from '../../../../yandex/cloud/apploadbalancer/v1/http_router';
import { VirtualHost } from '../../../../yandex/cloud/apploadbalancer/v1/virtual_host';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetHttpRouterRequest {
    /**
     * ID of the HTTP router to return.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
}
export interface ListHttpRoutersRequest {
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
    /**
     * ID of the HTTP router to delete.
     *
     * To get the HTTP router ID, make a [HttpRouterService.List] request.
     */
    httpRouterId: string;
}
export interface DeleteHttpRouterMetadata {
    /** ID of the HTTP router that is being deleted. */
    httpRouterId: string;
}
export interface UpdateHttpRouterRequest {
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
    labels: {
        [key: string]: string;
    };
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
    httpsRedirect: boolean;
}
export interface UpdateHttpRouterRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateHttpRouterMetadata {
    /** ID of the HTTP router that is being updated. */
    httpRouterId: string;
}
export interface CreateHttpRouterRequest {
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
    labels: {
        [key: string]: string;
    };
    /**
     * Virtual hosts that combine routes inside the router.
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router#virtual-host).
     *
     * Only one virtual host with no authority (default match) can be specified.
     */
    virtualHosts: VirtualHost[];
    httpsRedirect: boolean;
}
export interface CreateHttpRouterRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateHttpRouterMetadata {
    /** ID of the HTTP router that is being created. */
    httpRouterId: string;
}
export interface ListHttpRouterOperationsRequest {
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
export declare const GetHttpRouterRequest: {
    encode(message: GetHttpRouterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetHttpRouterRequest;
    fromJSON(object: any): GetHttpRouterRequest;
    toJSON(message: GetHttpRouterRequest): unknown;
    fromPartial(object: DeepPartial<GetHttpRouterRequest>): GetHttpRouterRequest;
};
export declare const ListHttpRoutersRequest: {
    encode(message: ListHttpRoutersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHttpRoutersRequest;
    fromJSON(object: any): ListHttpRoutersRequest;
    toJSON(message: ListHttpRoutersRequest): unknown;
    fromPartial(object: DeepPartial<ListHttpRoutersRequest>): ListHttpRoutersRequest;
};
export declare const ListHttpRoutersResponse: {
    encode(message: ListHttpRoutersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHttpRoutersResponse;
    fromJSON(object: any): ListHttpRoutersResponse;
    toJSON(message: ListHttpRoutersResponse): unknown;
    fromPartial(object: DeepPartial<ListHttpRoutersResponse>): ListHttpRoutersResponse;
};
export declare const DeleteHttpRouterRequest: {
    encode(message: DeleteHttpRouterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteHttpRouterRequest;
    fromJSON(object: any): DeleteHttpRouterRequest;
    toJSON(message: DeleteHttpRouterRequest): unknown;
    fromPartial(object: DeepPartial<DeleteHttpRouterRequest>): DeleteHttpRouterRequest;
};
export declare const DeleteHttpRouterMetadata: {
    encode(message: DeleteHttpRouterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteHttpRouterMetadata;
    fromJSON(object: any): DeleteHttpRouterMetadata;
    toJSON(message: DeleteHttpRouterMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteHttpRouterMetadata>): DeleteHttpRouterMetadata;
};
export declare const UpdateHttpRouterRequest: {
    encode(message: UpdateHttpRouterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHttpRouterRequest;
    fromJSON(object: any): UpdateHttpRouterRequest;
    toJSON(message: UpdateHttpRouterRequest): unknown;
    fromPartial(object: DeepPartial<UpdateHttpRouterRequest>): UpdateHttpRouterRequest;
};
export declare const UpdateHttpRouterRequest_LabelsEntry: {
    encode(message: UpdateHttpRouterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHttpRouterRequest_LabelsEntry;
    fromJSON(object: any): UpdateHttpRouterRequest_LabelsEntry;
    toJSON(message: UpdateHttpRouterRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateHttpRouterRequest_LabelsEntry>): UpdateHttpRouterRequest_LabelsEntry;
};
export declare const UpdateHttpRouterMetadata: {
    encode(message: UpdateHttpRouterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHttpRouterMetadata;
    fromJSON(object: any): UpdateHttpRouterMetadata;
    toJSON(message: UpdateHttpRouterMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateHttpRouterMetadata>): UpdateHttpRouterMetadata;
};
export declare const CreateHttpRouterRequest: {
    encode(message: CreateHttpRouterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHttpRouterRequest;
    fromJSON(object: any): CreateHttpRouterRequest;
    toJSON(message: CreateHttpRouterRequest): unknown;
    fromPartial(object: DeepPartial<CreateHttpRouterRequest>): CreateHttpRouterRequest;
};
export declare const CreateHttpRouterRequest_LabelsEntry: {
    encode(message: CreateHttpRouterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHttpRouterRequest_LabelsEntry;
    fromJSON(object: any): CreateHttpRouterRequest_LabelsEntry;
    toJSON(message: CreateHttpRouterRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateHttpRouterRequest_LabelsEntry>): CreateHttpRouterRequest_LabelsEntry;
};
export declare const CreateHttpRouterMetadata: {
    encode(message: CreateHttpRouterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateHttpRouterMetadata;
    fromJSON(object: any): CreateHttpRouterMetadata;
    toJSON(message: CreateHttpRouterMetadata): unknown;
    fromPartial(object: DeepPartial<CreateHttpRouterMetadata>): CreateHttpRouterMetadata;
};
export declare const ListHttpRouterOperationsRequest: {
    encode(message: ListHttpRouterOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHttpRouterOperationsRequest;
    fromJSON(object: any): ListHttpRouterOperationsRequest;
    toJSON(message: ListHttpRouterOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListHttpRouterOperationsRequest>): ListHttpRouterOperationsRequest;
};
export declare const ListHttpRouterOperationsResponse: {
    encode(message: ListHttpRouterOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListHttpRouterOperationsResponse;
    fromJSON(object: any): ListHttpRouterOperationsResponse;
    toJSON(message: ListHttpRouterOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListHttpRouterOperationsResponse>): ListHttpRouterOperationsResponse;
};
/** A set of methods for managing HTTP routers. */
export declare const HttpRouterServiceService: {
    /**
     * Returns the specified HTTP router.
     *
     * To get the list of all available HTTP routers, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetHttpRouterRequest;
        readonly responseSerialize: (value: HttpRouter) => Buffer;
        readonly responseDeserialize: (value: Buffer) => HttpRouter;
    };
    /** Lists HTTP routers in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHttpRoutersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHttpRoutersRequest;
        readonly responseSerialize: (value: ListHttpRoutersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHttpRoutersResponse;
    };
    /** Creates an HTTP router in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateHttpRouterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified HTTP router. */
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateHttpRouterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified HTTP router. */
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteHttpRouterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified HTTP router. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHttpRouterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHttpRouterOperationsRequest;
        readonly responseSerialize: (value: ListHttpRouterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHttpRouterOperationsResponse;
    };
};
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
    listOperations: handleUnaryCall<ListHttpRouterOperationsRequest, ListHttpRouterOperationsResponse>;
}
export interface HttpRouterServiceClient extends Client {
    /**
     * Returns the specified HTTP router.
     *
     * To get the list of all available HTTP routers, make a [List] request.
     */
    get(request: GetHttpRouterRequest, callback: (error: ServiceError | null, response: HttpRouter) => void): ClientUnaryCall;
    get(request: GetHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: HttpRouter) => void): ClientUnaryCall;
    get(request: GetHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: HttpRouter) => void): ClientUnaryCall;
    /** Lists HTTP routers in the specified folder. */
    list(request: ListHttpRoutersRequest, callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void): ClientUnaryCall;
    list(request: ListHttpRoutersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void): ClientUnaryCall;
    list(request: ListHttpRoutersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void): ClientUnaryCall;
    /** Creates an HTTP router in the specified folder. */
    create(request: CreateHttpRouterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified HTTP router. */
    update(request: UpdateHttpRouterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified HTTP router. */
    delete(request: DeleteHttpRouterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified HTTP router. */
    listOperations(request: ListHttpRouterOperationsRequest, callback: (error: ServiceError | null, response: ListHttpRouterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListHttpRouterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHttpRouterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListHttpRouterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHttpRouterOperationsResponse) => void): ClientUnaryCall;
}
export declare const HttpRouterServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => HttpRouterServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
