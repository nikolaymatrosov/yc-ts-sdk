/// <reference types="node" />
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.cdn.v1";
export interface PurgeCacheRequest {
    $type: 'yandex.cloud.cdn.v1.PurgeCacheRequest';
    /** ID of the resource to perform purge operation on. */
    resourceId: string;
    /**
     * Set of paths:
     * Paths of the files to remove from the cache.
     *
     * You may use asterisk (`*`) as a wildcard character that substitutes any number of characters.
     *
     * If an empty array of paths is specified, the cache is purged entirely.
     */
    paths: string[];
}
export interface PurgeCacheMetadata {
    $type: 'yandex.cloud.cdn.v1.PurgeCacheMetadata';
    /** ID of the resource. */
    resourceId: string;
}
export interface PrefetchCacheRequest {
    $type: 'yandex.cloud.cdn.v1.PrefetchCacheRequest';
    /** ID of the resource to perform prefetch operation on. */
    resourceId: string;
    /** Set of paths to prefetch. */
    paths: string[];
}
export interface PrefetchCacheMetadata {
    $type: 'yandex.cloud.cdn.v1.PrefetchCacheMetadata';
    /** ID of the resource. */
    resourceId: string;
}
export declare const PurgeCacheRequest: {
    $type: "yandex.cloud.cdn.v1.PurgeCacheRequest";
    encode(message: PurgeCacheRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PurgeCacheRequest;
    fromJSON(object: any): PurgeCacheRequest;
    toJSON(message: PurgeCacheRequest): unknown;
    fromPartial(object: DeepPartial<PurgeCacheRequest>): PurgeCacheRequest;
};
export declare const PurgeCacheMetadata: {
    $type: "yandex.cloud.cdn.v1.PurgeCacheMetadata";
    encode(message: PurgeCacheMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PurgeCacheMetadata;
    fromJSON(object: any): PurgeCacheMetadata;
    toJSON(message: PurgeCacheMetadata): unknown;
    fromPartial(object: DeepPartial<PurgeCacheMetadata>): PurgeCacheMetadata;
};
export declare const PrefetchCacheRequest: {
    $type: "yandex.cloud.cdn.v1.PrefetchCacheRequest";
    encode(message: PrefetchCacheRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrefetchCacheRequest;
    fromJSON(object: any): PrefetchCacheRequest;
    toJSON(message: PrefetchCacheRequest): unknown;
    fromPartial(object: DeepPartial<PrefetchCacheRequest>): PrefetchCacheRequest;
};
export declare const PrefetchCacheMetadata: {
    $type: "yandex.cloud.cdn.v1.PrefetchCacheMetadata";
    encode(message: PrefetchCacheMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrefetchCacheMetadata;
    fromJSON(object: any): PrefetchCacheMetadata;
    toJSON(message: PrefetchCacheMetadata): unknown;
    fromPartial(object: DeepPartial<PrefetchCacheMetadata>): PrefetchCacheMetadata;
};
/** A set of methods for managing Cache Service resources. */
export declare const CacheServiceService: {
    /** Removes specified files from the cache of the specified resource. For details about purging, see [documentation](/docs/cdn/concepts/caching#purge). */
    readonly purge: {
        readonly path: "/yandex.cloud.cdn.v1.CacheService/Purge";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PurgeCacheRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PurgeCacheRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch). */
    readonly prefetch: {
        readonly path: "/yandex.cloud.cdn.v1.CacheService/Prefetch";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PrefetchCacheRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PrefetchCacheRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface CacheServiceServer extends UntypedServiceImplementation {
    /** Removes specified files from the cache of the specified resource. For details about purging, see [documentation](/docs/cdn/concepts/caching#purge). */
    purge: handleUnaryCall<PurgeCacheRequest, Operation>;
    /** Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch). */
    prefetch: handleUnaryCall<PrefetchCacheRequest, Operation>;
}
export interface CacheServiceClient extends Client {
    /** Removes specified files from the cache of the specified resource. For details about purging, see [documentation](/docs/cdn/concepts/caching#purge). */
    purge(request: PurgeCacheRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    purge(request: PurgeCacheRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    purge(request: PurgeCacheRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch). */
    prefetch(request: PrefetchCacheRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    prefetch(request: PrefetchCacheRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    prefetch(request: PrefetchCacheRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const CacheServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => CacheServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
