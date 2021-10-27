/// <reference types="node" />
import { OriginMeta } from '../../../../yandex/cloud/cdn/v1/origin';
import { OriginProtocol, Resource, SecondaryHostnames, ResourceOptions, SSLTargetCertificate } from '../../../../yandex/cloud/cdn/v1/resource';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.cdn.v1";
/** A request to get a resource. */
export interface GetResourceRequest {
    $type: 'yandex.cloud.cdn.v1.GetResourceRequest';
    /** ID of the requested resource. */
    resourceId: string;
}
export interface ListResourcesRequest {
    $type: 'yandex.cloud.cdn.v1.ListResourcesRequest';
    /** ID of the folder to request listing for. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListResourcesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListResourcesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListResourcesResponse {
    $type: 'yandex.cloud.cdn.v1.ListResourcesResponse';
    /** List of the resources */
    resources: Resource[];
    /**
     * [next_page_token] token allows you to get the next page of results for list requests.
     * If the number of results is larger than [ListResourcesRequest.page_size], use
     * the [next_page_token] as the value for the [ListResourcesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateResourceRequest {
    $type: 'yandex.cloud.cdn.v1.CreateResourceRequest';
    /** ID of the to bind with new resource. */
    folderId: string;
    /** CDN endpoint CNAME, must be unique among clients's resources. */
    cname: string;
    /** Specify the origins to be used for CDN resources requests. */
    origin: CreateResourceRequest_Origin | undefined;
    /** List of additional CNAMEs. */
    secondaryHostnames: SecondaryHostnames | undefined;
    /** Specify the protocol schema to be used in communication with origin. */
    originProtocol: OriginProtocol;
    /**
     * Flag to create Resource either in active or disabled state.
     * In active state Origins payload could be transmitted from CDN CNAME requests.
     * Default value: true
     */
    active: boolean | undefined;
    /** Resource settings and options to tune CDN edge behavior. Most is unset. */
    options: ResourceOptions | undefined;
    /** SSL Certificate options. */
    sslCertificate: SSLTargetCertificate | undefined;
}
export interface CreateResourceRequest_Origin {
    $type: 'yandex.cloud.cdn.v1.CreateResourceRequest.Origin';
    /** ID of pre-created origin group. */
    originGroupId: number | undefined;
    /**
     * Create new Origins group with single source, it's id will be
     * returned in result.
     */
    originSource: string | undefined;
    /** Set up resourse origin parameters. */
    originSourceParams: ResourceOriginParams | undefined;
}
/** A set of resourse origin parameters. */
export interface ResourceOriginParams {
    $type: 'yandex.cloud.cdn.v1.ResourceOriginParams';
    /** Sourse of the content. */
    source: string;
    /** Set up type of the origin. */
    meta: OriginMeta | undefined;
}
export interface CreateResourceMetadata {
    $type: 'yandex.cloud.cdn.v1.CreateResourceMetadata';
    /** ID of created resource. */
    resourceId: string;
}
export interface UpdateResourceRequest {
    $type: 'yandex.cloud.cdn.v1.UpdateResourceRequest';
    /** ID of updated resource. */
    resourceId: string;
    /** ID of updated origin group. */
    originGroupId: number | undefined;
    /** List of additional CNAMEs. */
    secondaryHostnames: SecondaryHostnames | undefined;
    /** Resource settings and options to tune CDN edge behavior. */
    options: ResourceOptions | undefined;
    /** Specify the protocol schema to be used in communication with origin. */
    originProtocol: OriginProtocol;
    /**
     * Flag to create Resource either in active or disabled state.
     * In active state Origins payload could be transmitted from CDN CNAME requests.
     * Default value: true
     */
    active: boolean | undefined;
    /** SSL Certificate options. */
    sslCertificate: SSLTargetCertificate | undefined;
}
export interface UpdateResourceMetadata {
    $type: 'yandex.cloud.cdn.v1.UpdateResourceMetadata';
    /** ID of updated resource. */
    resourceId: string;
}
export interface DeleteResourceRequest {
    $type: 'yandex.cloud.cdn.v1.DeleteResourceRequest';
    /** ID of resource to delete. */
    resourceId: string;
}
export interface DeleteResourceMetadata {
    $type: 'yandex.cloud.cdn.v1.DeleteResourceMetadata';
    /** ID of deleted resource. */
    resourceId: string;
}
export interface GetProviderCNameRequest {
    $type: 'yandex.cloud.cdn.v1.GetProviderCNameRequest';
    /** Folder ID to get provider's CNAME. */
    folderId: string;
}
export interface GetProviderCNameResponse {
    $type: 'yandex.cloud.cdn.v1.GetProviderCNameResponse';
    /** Provider's CNAME. */
    cname: string;
    /** ID of the folder that the provider belongs to. */
    folderId: string;
}
export declare const GetResourceRequest: {
    $type: "yandex.cloud.cdn.v1.GetResourceRequest";
    encode(message: GetResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetResourceRequest;
    fromJSON(object: any): GetResourceRequest;
    toJSON(message: GetResourceRequest): unknown;
    fromPartial(object: DeepPartial<GetResourceRequest>): GetResourceRequest;
};
export declare const ListResourcesRequest: {
    $type: "yandex.cloud.cdn.v1.ListResourcesRequest";
    encode(message: ListResourcesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcesRequest;
    fromJSON(object: any): ListResourcesRequest;
    toJSON(message: ListResourcesRequest): unknown;
    fromPartial(object: DeepPartial<ListResourcesRequest>): ListResourcesRequest;
};
export declare const ListResourcesResponse: {
    $type: "yandex.cloud.cdn.v1.ListResourcesResponse";
    encode(message: ListResourcesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListResourcesResponse;
    fromJSON(object: any): ListResourcesResponse;
    toJSON(message: ListResourcesResponse): unknown;
    fromPartial(object: DeepPartial<ListResourcesResponse>): ListResourcesResponse;
};
export declare const CreateResourceRequest: {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest";
    encode(message: CreateResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateResourceRequest;
    fromJSON(object: any): CreateResourceRequest;
    toJSON(message: CreateResourceRequest): unknown;
    fromPartial(object: DeepPartial<CreateResourceRequest>): CreateResourceRequest;
};
export declare const CreateResourceRequest_Origin: {
    $type: "yandex.cloud.cdn.v1.CreateResourceRequest.Origin";
    encode(message: CreateResourceRequest_Origin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateResourceRequest_Origin;
    fromJSON(object: any): CreateResourceRequest_Origin;
    toJSON(message: CreateResourceRequest_Origin): unknown;
    fromPartial(object: DeepPartial<CreateResourceRequest_Origin>): CreateResourceRequest_Origin;
};
export declare const ResourceOriginParams: {
    $type: "yandex.cloud.cdn.v1.ResourceOriginParams";
    encode(message: ResourceOriginParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourceOriginParams;
    fromJSON(object: any): ResourceOriginParams;
    toJSON(message: ResourceOriginParams): unknown;
    fromPartial(object: DeepPartial<ResourceOriginParams>): ResourceOriginParams;
};
export declare const CreateResourceMetadata: {
    $type: "yandex.cloud.cdn.v1.CreateResourceMetadata";
    encode(message: CreateResourceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateResourceMetadata;
    fromJSON(object: any): CreateResourceMetadata;
    toJSON(message: CreateResourceMetadata): unknown;
    fromPartial(object: DeepPartial<CreateResourceMetadata>): CreateResourceMetadata;
};
export declare const UpdateResourceRequest: {
    $type: "yandex.cloud.cdn.v1.UpdateResourceRequest";
    encode(message: UpdateResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateResourceRequest;
    fromJSON(object: any): UpdateResourceRequest;
    toJSON(message: UpdateResourceRequest): unknown;
    fromPartial(object: DeepPartial<UpdateResourceRequest>): UpdateResourceRequest;
};
export declare const UpdateResourceMetadata: {
    $type: "yandex.cloud.cdn.v1.UpdateResourceMetadata";
    encode(message: UpdateResourceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateResourceMetadata;
    fromJSON(object: any): UpdateResourceMetadata;
    toJSON(message: UpdateResourceMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateResourceMetadata>): UpdateResourceMetadata;
};
export declare const DeleteResourceRequest: {
    $type: "yandex.cloud.cdn.v1.DeleteResourceRequest";
    encode(message: DeleteResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteResourceRequest;
    fromJSON(object: any): DeleteResourceRequest;
    toJSON(message: DeleteResourceRequest): unknown;
    fromPartial(object: DeepPartial<DeleteResourceRequest>): DeleteResourceRequest;
};
export declare const DeleteResourceMetadata: {
    $type: "yandex.cloud.cdn.v1.DeleteResourceMetadata";
    encode(message: DeleteResourceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteResourceMetadata;
    fromJSON(object: any): DeleteResourceMetadata;
    toJSON(message: DeleteResourceMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteResourceMetadata>): DeleteResourceMetadata;
};
export declare const GetProviderCNameRequest: {
    $type: "yandex.cloud.cdn.v1.GetProviderCNameRequest";
    encode(message: GetProviderCNameRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetProviderCNameRequest;
    fromJSON(object: any): GetProviderCNameRequest;
    toJSON(message: GetProviderCNameRequest): unknown;
    fromPartial(object: DeepPartial<GetProviderCNameRequest>): GetProviderCNameRequest;
};
export declare const GetProviderCNameResponse: {
    $type: "yandex.cloud.cdn.v1.GetProviderCNameResponse";
    encode(message: GetProviderCNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetProviderCNameResponse;
    fromJSON(object: any): GetProviderCNameResponse;
    toJSON(message: GetProviderCNameResponse): unknown;
    fromPartial(object: DeepPartial<GetProviderCNameResponse>): GetProviderCNameResponse;
};
/** Provider's resources management service. */
export declare const ResourceServiceService: {
    /** Get client's CDN resource by resource id. */
    readonly get: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetResourceRequest;
        readonly responseSerialize: (value: Resource) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Resource;
    };
    /** Lists CDN resources. */
    readonly list: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListResourcesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListResourcesRequest;
        readonly responseSerialize: (value: ListResourcesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListResourcesResponse;
    };
    /** Creates client's CDN resource. */
    readonly create: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateResourceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates of client's CDN resource. (PATCH behavior) */
    readonly update: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateResourceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes client's CDN resource. */
    readonly delete: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteResourceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Get Provider's CNAME (edge endpoint) binded to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    readonly getProviderCName: {
        readonly path: "/yandex.cloud.cdn.v1.ResourceService/GetProviderCName";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProviderCNameRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProviderCNameRequest;
        readonly responseSerialize: (value: GetProviderCNameResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetProviderCNameResponse;
    };
};
export interface ResourceServiceServer extends UntypedServiceImplementation {
    /** Get client's CDN resource by resource id. */
    get: handleUnaryCall<GetResourceRequest, Resource>;
    /** Lists CDN resources. */
    list: handleUnaryCall<ListResourcesRequest, ListResourcesResponse>;
    /** Creates client's CDN resource. */
    create: handleUnaryCall<CreateResourceRequest, Operation>;
    /** Updates of client's CDN resource. (PATCH behavior) */
    update: handleUnaryCall<UpdateResourceRequest, Operation>;
    /** Deletes client's CDN resource. */
    delete: handleUnaryCall<DeleteResourceRequest, Operation>;
    /**
     * Get Provider's CNAME (edge endpoint) binded to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    getProviderCName: handleUnaryCall<GetProviderCNameRequest, GetProviderCNameResponse>;
}
export interface ResourceServiceClient extends Client {
    /** Get client's CDN resource by resource id. */
    get(request: GetResourceRequest, callback: (error: ServiceError | null, response: Resource) => void): ClientUnaryCall;
    get(request: GetResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Resource) => void): ClientUnaryCall;
    get(request: GetResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Resource) => void): ClientUnaryCall;
    /** Lists CDN resources. */
    list(request: ListResourcesRequest, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    list(request: ListResourcesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    list(request: ListResourcesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListResourcesResponse) => void): ClientUnaryCall;
    /** Creates client's CDN resource. */
    create(request: CreateResourceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates of client's CDN resource. (PATCH behavior) */
    update(request: UpdateResourceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes client's CDN resource. */
    delete(request: DeleteResourceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Get Provider's CNAME (edge endpoint) binded to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    getProviderCName(request: GetProviderCNameRequest, callback: (error: ServiceError | null, response: GetProviderCNameResponse) => void): ClientUnaryCall;
    getProviderCName(request: GetProviderCNameRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetProviderCNameResponse) => void): ClientUnaryCall;
    getProviderCName(request: GetProviderCNameRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetProviderCNameResponse) => void): ClientUnaryCall;
}
export declare const ResourceServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ResourceServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
