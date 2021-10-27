/// <reference types="node" />
import { OriginParams } from '../../../../yandex/cloud/cdn/v1/origin';
import { OriginGroup } from '../../../../yandex/cloud/cdn/v1/origin_group';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.cdn.v1";
export interface GetOriginGroupRequest {
    $type: 'yandex.cloud.cdn.v1.GetOriginGroupRequest';
    /** ID of the folder that the origin group belongs to. */
    folderId: string;
    /**
     * ID of the origin group to return.
     *
     * To get a origin group ID, make a [OriginGroupService.List] request.
     */
    originGroupId: number;
}
export interface ListOriginGroupsRequest {
    $type: 'yandex.cloud.cdn.v1.ListOriginGroupsRequest';
    /** ID of the folder that the origin group belongs to.. */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListOriginGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListOriginGroupsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListOriginGroupsResponse {
    $type: 'yandex.cloud.cdn.v1.ListOriginGroupsResponse';
    /** List of all Origin Groups associated with folder. */
    originGroups: OriginGroup[];
    /**
     * [next_page_token] token allows you to get the next page of results for list requests.
     * If the number of results is larger than [ListOriginGroupsRequest.page_size], use
     * the [next_page_token] as the value for the [ListOriginGroupsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateOriginGroupRequest {
    $type: 'yandex.cloud.cdn.v1.CreateOriginGroupRequest';
    /** ID of the folder that the origin group belongs to. */
    folderId: string;
    /** Name of the origin group. */
    name: string;
    /**
     * This option have two possible conditions:
     *  true - The option is active. In case the origin responds with 4XX or 5XX codes,
     *         use the next origin from the list.
     *  false - The option is disabled.
     *
     *  default value is true
     */
    useNext: boolean | undefined;
    /**
     * List of origins: IP addresses or Domain names of your origins and the port
     * (if custom).
     */
    origins: OriginParams[];
}
export interface CreateOriginGroupMetadata {
    $type: 'yandex.cloud.cdn.v1.CreateOriginGroupMetadata';
    /** ID of created origin group. */
    originGroupId: number;
}
export interface UpdateOriginGroupRequest {
    $type: 'yandex.cloud.cdn.v1.UpdateOriginGroupRequest';
    /** ID of the folder that the origin group belongs to. */
    folderId: string;
    /** ID of the origin group. */
    originGroupId: number;
    /** Name of the origin group. */
    groupName: string | undefined;
    /**
     * This option have two possible values:
     *
     *   True - The option is active. In case the origin responds with 4XX or 5XX
     *          codes, use the next origin from the list.
     *   False - The option is disabled.
     */
    useNext: boolean | undefined;
    /**
     * List of origins: IP addresses or Domain names of your origins and the port
     * (if custom).
     */
    origins: OriginParams[];
}
export interface UpdateOriginGroupMetadata {
    $type: 'yandex.cloud.cdn.v1.UpdateOriginGroupMetadata';
    /** ID of the origin group. */
    originGroupId: number;
}
export interface DeleteOriginGroupRequest {
    $type: 'yandex.cloud.cdn.v1.DeleteOriginGroupRequest';
    /** ID of the folder that the origin group belongs to. */
    folderId: string;
    /** ID of the origin group. */
    originGroupId: number;
}
export interface DeleteOriginGroupMetadata {
    $type: 'yandex.cloud.cdn.v1.DeleteOriginGroupMetadata';
    /** ID of the origin group. */
    originGroupId: number;
}
export declare const GetOriginGroupRequest: {
    $type: "yandex.cloud.cdn.v1.GetOriginGroupRequest";
    encode(message: GetOriginGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOriginGroupRequest;
    fromJSON(object: any): GetOriginGroupRequest;
    toJSON(message: GetOriginGroupRequest): unknown;
    fromPartial(object: DeepPartial<GetOriginGroupRequest>): GetOriginGroupRequest;
};
export declare const ListOriginGroupsRequest: {
    $type: "yandex.cloud.cdn.v1.ListOriginGroupsRequest";
    encode(message: ListOriginGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOriginGroupsRequest;
    fromJSON(object: any): ListOriginGroupsRequest;
    toJSON(message: ListOriginGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListOriginGroupsRequest>): ListOriginGroupsRequest;
};
export declare const ListOriginGroupsResponse: {
    $type: "yandex.cloud.cdn.v1.ListOriginGroupsResponse";
    encode(message: ListOriginGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOriginGroupsResponse;
    fromJSON(object: any): ListOriginGroupsResponse;
    toJSON(message: ListOriginGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListOriginGroupsResponse>): ListOriginGroupsResponse;
};
export declare const CreateOriginGroupRequest: {
    $type: "yandex.cloud.cdn.v1.CreateOriginGroupRequest";
    encode(message: CreateOriginGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateOriginGroupRequest;
    fromJSON(object: any): CreateOriginGroupRequest;
    toJSON(message: CreateOriginGroupRequest): unknown;
    fromPartial(object: DeepPartial<CreateOriginGroupRequest>): CreateOriginGroupRequest;
};
export declare const CreateOriginGroupMetadata: {
    $type: "yandex.cloud.cdn.v1.CreateOriginGroupMetadata";
    encode(message: CreateOriginGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateOriginGroupMetadata;
    fromJSON(object: any): CreateOriginGroupMetadata;
    toJSON(message: CreateOriginGroupMetadata): unknown;
    fromPartial(object: DeepPartial<CreateOriginGroupMetadata>): CreateOriginGroupMetadata;
};
export declare const UpdateOriginGroupRequest: {
    $type: "yandex.cloud.cdn.v1.UpdateOriginGroupRequest";
    encode(message: UpdateOriginGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOriginGroupRequest;
    fromJSON(object: any): UpdateOriginGroupRequest;
    toJSON(message: UpdateOriginGroupRequest): unknown;
    fromPartial(object: DeepPartial<UpdateOriginGroupRequest>): UpdateOriginGroupRequest;
};
export declare const UpdateOriginGroupMetadata: {
    $type: "yandex.cloud.cdn.v1.UpdateOriginGroupMetadata";
    encode(message: UpdateOriginGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOriginGroupMetadata;
    fromJSON(object: any): UpdateOriginGroupMetadata;
    toJSON(message: UpdateOriginGroupMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateOriginGroupMetadata>): UpdateOriginGroupMetadata;
};
export declare const DeleteOriginGroupRequest: {
    $type: "yandex.cloud.cdn.v1.DeleteOriginGroupRequest";
    encode(message: DeleteOriginGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteOriginGroupRequest;
    fromJSON(object: any): DeleteOriginGroupRequest;
    toJSON(message: DeleteOriginGroupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteOriginGroupRequest>): DeleteOriginGroupRequest;
};
export declare const DeleteOriginGroupMetadata: {
    $type: "yandex.cloud.cdn.v1.DeleteOriginGroupMetadata";
    encode(message: DeleteOriginGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteOriginGroupMetadata;
    fromJSON(object: any): DeleteOriginGroupMetadata;
    toJSON(message: DeleteOriginGroupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteOriginGroupMetadata>): DeleteOriginGroupMetadata;
};
/** Origin Groups management service. */
export declare const OriginGroupServiceService: {
    /** Gets origin group with specified origin group id. */
    readonly get: {
        readonly path: "/yandex.cloud.cdn.v1.OriginGroupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOriginGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOriginGroupRequest;
        readonly responseSerialize: (value: OriginGroup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => OriginGroup;
    };
    /** Lists origins of origin group. */
    readonly list: {
        readonly path: "/yandex.cloud.cdn.v1.OriginGroupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOriginGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOriginGroupsRequest;
        readonly responseSerialize: (value: ListOriginGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListOriginGroupsResponse;
    };
    /** Creates origin group. */
    readonly create: {
        readonly path: "/yandex.cloud.cdn.v1.OriginGroupService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateOriginGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateOriginGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates origin group. */
    readonly update: {
        readonly path: "/yandex.cloud.cdn.v1.OriginGroupService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateOriginGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateOriginGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes origin group with specified origin group id. */
    readonly delete: {
        readonly path: "/yandex.cloud.cdn.v1.OriginGroupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteOriginGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteOriginGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface OriginGroupServiceServer extends UntypedServiceImplementation {
    /** Gets origin group with specified origin group id. */
    get: handleUnaryCall<GetOriginGroupRequest, OriginGroup>;
    /** Lists origins of origin group. */
    list: handleUnaryCall<ListOriginGroupsRequest, ListOriginGroupsResponse>;
    /** Creates origin group. */
    create: handleUnaryCall<CreateOriginGroupRequest, Operation>;
    /** Updates origin group. */
    update: handleUnaryCall<UpdateOriginGroupRequest, Operation>;
    /** Deletes origin group with specified origin group id. */
    delete: handleUnaryCall<DeleteOriginGroupRequest, Operation>;
}
export interface OriginGroupServiceClient extends Client {
    /** Gets origin group with specified origin group id. */
    get(request: GetOriginGroupRequest, callback: (error: ServiceError | null, response: OriginGroup) => void): ClientUnaryCall;
    get(request: GetOriginGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: OriginGroup) => void): ClientUnaryCall;
    get(request: GetOriginGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: OriginGroup) => void): ClientUnaryCall;
    /** Lists origins of origin group. */
    list(request: ListOriginGroupsRequest, callback: (error: ServiceError | null, response: ListOriginGroupsResponse) => void): ClientUnaryCall;
    list(request: ListOriginGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListOriginGroupsResponse) => void): ClientUnaryCall;
    list(request: ListOriginGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListOriginGroupsResponse) => void): ClientUnaryCall;
    /** Creates origin group. */
    create(request: CreateOriginGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateOriginGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateOriginGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates origin group. */
    update(request: UpdateOriginGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateOriginGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateOriginGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes origin group with specified origin group id. */
    delete(request: DeleteOriginGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteOriginGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteOriginGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const OriginGroupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => OriginGroupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
