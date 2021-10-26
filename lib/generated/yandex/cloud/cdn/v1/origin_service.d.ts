/// <reference types="node" />
import { Origin, OriginMeta } from '../../../../yandex/cloud/cdn/v1/origin';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.cdn.v1";
export interface GetOriginRequest {
    /** ID of the folder that the origin belongs to. */
    folderId: string;
    /** [origin_id] group ID to request origin from. */
    originId: number;
}
export interface ListOriginsRequest {
    /** ID of the folder that the origin belongs to. */
    folderId: string;
    /** ID of the group to request origins from. */
    originGroupId: number;
}
export interface ListOriginsResponse {
    /** Origin from response. */
    origins: Origin[];
}
export interface CreateOriginRequest {
    /** ID of the folder that the origin belongs to. */
    folderId: string;
    /** [origin_group_id] group ID to request origins from. */
    originGroupId: number;
    /**
     * IP address or Domain name of your origin and the port (if custom).
     * Used if [meta] variant is `common`.
     */
    source: string;
    /**
     * The setting allows to enable or disable an Origin source in the Origins group.
     *
     * It has two possible values:
     *
     * True - The origin is enabled and used as a source for the CDN. An origins
     * group must contain at least one enabled origin. Default value.
     * False - The origin is disabled and the CDN is not using it to pull content.
     */
    enabled: boolean | undefined;
    /**
     * Specifies whether the origin is used in its origin group as backup.
     * A backup origin is used when one of active origins becomes unavailable.
     *
     * Default value: False.
     */
    backup: boolean | undefined;
    /** Set up origin of the content. */
    meta: OriginMeta | undefined;
}
export interface CreateOriginMetadata {
    /** ID of the origin. */
    originId: number;
    /** ID pf the parent origins group. */
    originGroupId: number;
}
export interface UpdateOriginRequest {
    /** ID of the folder that the origin belongs to. */
    folderId: string;
    /** ID of the origin. */
    originId: number;
    /**
     * IP address or Domain name of your origin and the port (if custom).
     * Used if [meta] variant is `common`.
     * Required.
     */
    source: string;
    /**
     * The setting allows to enable or disable an Origin source in the Origins group.
     *
     * It has two possible values:
     *
     * True - The origin is enabled and used as a source for the CDN. An origins
     * group must contain at least one enabled origin. Default value.
     * False - The origin is disabled and the CDN is not using it to pull content.
     *
     * Required.
     */
    enabled: boolean;
    /**
     * Specifies whether the origin is used in its origin group as backup.
     * A backup origin is used when one of active origins becomes unavailable.
     *
     * Required.
     */
    backup: boolean;
    /** Set up type of the origin. */
    meta: OriginMeta | undefined;
}
export interface UpdateOriginMetadata {
    /** ID of the origin. */
    originId: number;
    /** Parent origins group ID. */
    originGroupId: number;
}
export interface DeleteOriginRequest {
    /** ID of the folder that the origin belongs to. */
    folderId: string;
    /** ID of the origin. */
    originId: number;
}
export interface DeleteOriginMetadata {
    /** ID of the origin. */
    originId: number;
}
export declare const GetOriginRequest: {
    encode(message: GetOriginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOriginRequest;
    fromJSON(object: any): GetOriginRequest;
    toJSON(message: GetOriginRequest): unknown;
    fromPartial(object: DeepPartial<GetOriginRequest>): GetOriginRequest;
};
export declare const ListOriginsRequest: {
    encode(message: ListOriginsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOriginsRequest;
    fromJSON(object: any): ListOriginsRequest;
    toJSON(message: ListOriginsRequest): unknown;
    fromPartial(object: DeepPartial<ListOriginsRequest>): ListOriginsRequest;
};
export declare const ListOriginsResponse: {
    encode(message: ListOriginsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOriginsResponse;
    fromJSON(object: any): ListOriginsResponse;
    toJSON(message: ListOriginsResponse): unknown;
    fromPartial(object: DeepPartial<ListOriginsResponse>): ListOriginsResponse;
};
export declare const CreateOriginRequest: {
    encode(message: CreateOriginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateOriginRequest;
    fromJSON(object: any): CreateOriginRequest;
    toJSON(message: CreateOriginRequest): unknown;
    fromPartial(object: DeepPartial<CreateOriginRequest>): CreateOriginRequest;
};
export declare const CreateOriginMetadata: {
    encode(message: CreateOriginMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateOriginMetadata;
    fromJSON(object: any): CreateOriginMetadata;
    toJSON(message: CreateOriginMetadata): unknown;
    fromPartial(object: DeepPartial<CreateOriginMetadata>): CreateOriginMetadata;
};
export declare const UpdateOriginRequest: {
    encode(message: UpdateOriginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOriginRequest;
    fromJSON(object: any): UpdateOriginRequest;
    toJSON(message: UpdateOriginRequest): unknown;
    fromPartial(object: DeepPartial<UpdateOriginRequest>): UpdateOriginRequest;
};
export declare const UpdateOriginMetadata: {
    encode(message: UpdateOriginMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOriginMetadata;
    fromJSON(object: any): UpdateOriginMetadata;
    toJSON(message: UpdateOriginMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateOriginMetadata>): UpdateOriginMetadata;
};
export declare const DeleteOriginRequest: {
    encode(message: DeleteOriginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteOriginRequest;
    fromJSON(object: any): DeleteOriginRequest;
    toJSON(message: DeleteOriginRequest): unknown;
    fromPartial(object: DeepPartial<DeleteOriginRequest>): DeleteOriginRequest;
};
export declare const DeleteOriginMetadata: {
    encode(message: DeleteOriginMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteOriginMetadata;
    fromJSON(object: any): DeleteOriginMetadata;
    toJSON(message: DeleteOriginMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteOriginMetadata>): DeleteOriginMetadata;
};
/**
 * Origin management service.
 * Origin is not a standalone entity. It can live only within origin group.
 */
export declare const OriginServiceService: {
    /** Get origin in origin group. */
    readonly get: {
        readonly path: "/yandex.cloud.cdn.v1.OriginService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOriginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOriginRequest;
        readonly responseSerialize: (value: Origin) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Origin;
    };
    /** Lists origins of origin group. */
    readonly list: {
        readonly path: "/yandex.cloud.cdn.v1.OriginService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOriginsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOriginsRequest;
        readonly responseSerialize: (value: ListOriginsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListOriginsResponse;
    };
    /** Creates origin inside origin group. */
    readonly create: {
        readonly path: "/yandex.cloud.cdn.v1.OriginService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateOriginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateOriginRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates origin from origin group. */
    readonly update: {
        readonly path: "/yandex.cloud.cdn.v1.OriginService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateOriginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateOriginRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes origin from origin group. */
    readonly delete: {
        readonly path: "/yandex.cloud.cdn.v1.OriginService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteOriginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteOriginRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface OriginServiceServer extends UntypedServiceImplementation {
    /** Get origin in origin group. */
    get: handleUnaryCall<GetOriginRequest, Origin>;
    /** Lists origins of origin group. */
    list: handleUnaryCall<ListOriginsRequest, ListOriginsResponse>;
    /** Creates origin inside origin group. */
    create: handleUnaryCall<CreateOriginRequest, Operation>;
    /** Updates origin from origin group. */
    update: handleUnaryCall<UpdateOriginRequest, Operation>;
    /** Deletes origin from origin group. */
    delete: handleUnaryCall<DeleteOriginRequest, Operation>;
}
export interface OriginServiceClient extends Client {
    /** Get origin in origin group. */
    get(request: GetOriginRequest, callback: (error: ServiceError | null, response: Origin) => void): ClientUnaryCall;
    get(request: GetOriginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Origin) => void): ClientUnaryCall;
    get(request: GetOriginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Origin) => void): ClientUnaryCall;
    /** Lists origins of origin group. */
    list(request: ListOriginsRequest, callback: (error: ServiceError | null, response: ListOriginsResponse) => void): ClientUnaryCall;
    list(request: ListOriginsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListOriginsResponse) => void): ClientUnaryCall;
    list(request: ListOriginsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListOriginsResponse) => void): ClientUnaryCall;
    /** Creates origin inside origin group. */
    create(request: CreateOriginRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateOriginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateOriginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates origin from origin group. */
    update(request: UpdateOriginRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateOriginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateOriginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes origin from origin group. */
    delete(request: DeleteOriginRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteOriginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteOriginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const OriginServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => OriginServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
