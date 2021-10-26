/* eslint-disable */
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.cdn.v1';

export interface PurgeCacheRequest {
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
    /** ID of the resource. */
    resourceId: string;
}

export interface PrefetchCacheRequest {
    /** ID of the resource to perform prefetch operation on. */
    resourceId: string;
    /** Set of paths to prefetch. */
    paths: string[];
}

export interface PrefetchCacheMetadata {
    /** ID of the resource. */
    resourceId: string;
}

const basePurgeCacheRequest: object = { resourceId: '', paths: '' };

export const PurgeCacheRequest = {
    encode(
        message: PurgeCacheRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PurgeCacheRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePurgeCacheRequest } as PurgeCacheRequest;
        message.paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.paths.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PurgeCacheRequest {
        const message = { ...basePurgeCacheRequest } as PurgeCacheRequest;
        message.paths = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: PurgeCacheRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        } else {
            obj.paths = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PurgeCacheRequest>): PurgeCacheRequest {
        const message = { ...basePurgeCacheRequest } as PurgeCacheRequest;
        message.paths = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(e);
            }
        }
        return message;
    },
};

const basePurgeCacheMetadata: object = { resourceId: '' };

export const PurgeCacheMetadata = {
    encode(
        message: PurgeCacheMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PurgeCacheMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePurgeCacheMetadata } as PurgeCacheMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PurgeCacheMetadata {
        const message = { ...basePurgeCacheMetadata } as PurgeCacheMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        return message;
    },

    toJSON(message: PurgeCacheMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial(object: DeepPartial<PurgeCacheMetadata>): PurgeCacheMetadata {
        const message = { ...basePurgeCacheMetadata } as PurgeCacheMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        return message;
    },
};

const basePrefetchCacheRequest: object = { resourceId: '', paths: '' };

export const PrefetchCacheRequest = {
    encode(
        message: PrefetchCacheRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PrefetchCacheRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrefetchCacheRequest } as PrefetchCacheRequest;
        message.paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.paths.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrefetchCacheRequest {
        const message = { ...basePrefetchCacheRequest } as PrefetchCacheRequest;
        message.paths = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: PrefetchCacheRequest): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        } else {
            obj.paths = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<PrefetchCacheRequest>
    ): PrefetchCacheRequest {
        const message = { ...basePrefetchCacheRequest } as PrefetchCacheRequest;
        message.paths = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(e);
            }
        }
        return message;
    },
};

const basePrefetchCacheMetadata: object = { resourceId: '' };

export const PrefetchCacheMetadata = {
    encode(
        message: PrefetchCacheMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PrefetchCacheMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePrefetchCacheMetadata,
        } as PrefetchCacheMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrefetchCacheMetadata {
        const message = {
            ...basePrefetchCacheMetadata,
        } as PrefetchCacheMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        } else {
            message.resourceId = '';
        }
        return message;
    },

    toJSON(message: PrefetchCacheMetadata): unknown {
        const obj: any = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<PrefetchCacheMetadata>
    ): PrefetchCacheMetadata {
        const message = {
            ...basePrefetchCacheMetadata,
        } as PrefetchCacheMetadata;
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        } else {
            message.resourceId = '';
        }
        return message;
    },
};

/** A set of methods for managing Cache Service resources. */
export const CacheServiceService = {
    /** Removes specified files from the cache of the specified resource. For details about purging, see [documentation](/docs/cdn/concepts/caching#purge). */
    purge: {
        path: '/yandex.cloud.cdn.v1.CacheService/Purge',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PurgeCacheRequest) =>
            Buffer.from(PurgeCacheRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => PurgeCacheRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch). */
    prefetch: {
        path: '/yandex.cloud.cdn.v1.CacheService/Prefetch',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PrefetchCacheRequest) =>
            Buffer.from(PrefetchCacheRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            PrefetchCacheRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface CacheServiceServer extends UntypedServiceImplementation {
    /** Removes specified files from the cache of the specified resource. For details about purging, see [documentation](/docs/cdn/concepts/caching#purge). */
    purge: handleUnaryCall<PurgeCacheRequest, Operation>;
    /** Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch). */
    prefetch: handleUnaryCall<PrefetchCacheRequest, Operation>;
}

export interface CacheServiceClient extends Client {
    /** Removes specified files from the cache of the specified resource. For details about purging, see [documentation](/docs/cdn/concepts/caching#purge). */
    purge(
        request: PurgeCacheRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    purge(
        request: PurgeCacheRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    purge(
        request: PurgeCacheRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch). */
    prefetch(
        request: PrefetchCacheRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    prefetch(
        request: PrefetchCacheRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    prefetch(
        request: PrefetchCacheRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const CacheServiceClient = makeGenericClientConstructor(
    CacheServiceService,
    'yandex.cloud.cdn.v1.CacheService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): CacheServiceClient;
};

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}