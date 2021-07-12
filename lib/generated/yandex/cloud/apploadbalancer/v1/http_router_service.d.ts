/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { HttpRouter } from '../../../../yandex/cloud/apploadbalancer/v1/http_router';
import { VirtualHost } from '../../../../yandex/cloud/apploadbalancer/v1/virtual_host';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface GetHttpRouterRequest {
    httpRouterId: string;
}
export interface ListHttpRoutersRequest {
    folderId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}
export interface ListHttpRoutersResponse {
    httpRouters: HttpRouter[];
    nextPageToken: string;
}
export interface DeleteHttpRouterRequest {
    httpRouterId: string;
}
export interface DeleteHttpRouterMetadata {
    httpRouterId: string;
}
export interface UpdateHttpRouterRequest {
    httpRouterId: string;
    updateMask: FieldMask | undefined;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    virtualHosts: VirtualHost[];
    httpsRedirect: boolean;
}
export interface UpdateHttpRouterRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateHttpRouterMetadata {
    httpRouterId: string;
}
export interface CreateHttpRouterRequest {
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    virtualHosts: VirtualHost[];
    httpsRedirect: boolean;
}
export interface CreateHttpRouterRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateHttpRouterMetadata {
    httpRouterId: string;
}
export interface ListHttpRouterOperationsRequest {
    /**
     * ID of the http router to get operations for.
     *
     * To get the http router ID, use a [HttpRouterService.List] request.
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
    /** List of operations for the specified target group. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListHttpRouterOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListHttpRouterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
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
export declare const HttpRouterServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetHttpRouterRequest;
        readonly responseSerialize: (value: HttpRouter) => Buffer;
        readonly responseDeserialize: (value: Buffer) => HttpRouter;
    };
    readonly list: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListHttpRoutersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListHttpRoutersRequest;
        readonly responseSerialize: (value: ListHttpRoutersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListHttpRoutersResponse;
    };
    readonly create: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateHttpRouterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateHttpRouterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteHttpRouterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteHttpRouterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified http router. */
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
    get: handleUnaryCall<GetHttpRouterRequest, HttpRouter>;
    list: handleUnaryCall<ListHttpRoutersRequest, ListHttpRoutersResponse>;
    create: handleUnaryCall<CreateHttpRouterRequest, Operation>;
    update: handleUnaryCall<UpdateHttpRouterRequest, Operation>;
    delete: handleUnaryCall<DeleteHttpRouterRequest, Operation>;
    /** Lists operations for the specified http router. */
    listOperations: handleUnaryCall<ListHttpRouterOperationsRequest, ListHttpRouterOperationsResponse>;
}
export interface HttpRouterServiceClient extends Client {
    get(request: GetHttpRouterRequest, callback: (error: ServiceError | null, response: HttpRouter) => void): ClientUnaryCall;
    get(request: GetHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: HttpRouter) => void): ClientUnaryCall;
    get(request: GetHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: HttpRouter) => void): ClientUnaryCall;
    list(request: ListHttpRoutersRequest, callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void): ClientUnaryCall;
    list(request: ListHttpRoutersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void): ClientUnaryCall;
    list(request: ListHttpRoutersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListHttpRoutersResponse) => void): ClientUnaryCall;
    create(request: CreateHttpRouterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateHttpRouterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteHttpRouterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteHttpRouterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteHttpRouterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified http router. */
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
