/* eslint-disable */
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.cdn.v1';
const basePurgeCacheRequest = { resourceId: '', paths: '' };
export const PurgeCacheRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePurgeCacheRequest };
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
    fromJSON(object) {
        const message = { ...basePurgeCacheRequest };
        message.paths = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePurgeCacheRequest };
        message.paths = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
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
const basePurgeCacheMetadata = { resourceId: '' };
export const PurgeCacheMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePurgeCacheMetadata };
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
    fromJSON(object) {
        const message = { ...basePurgeCacheMetadata };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePurgeCacheMetadata };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
};
const basePrefetchCacheRequest = { resourceId: '', paths: '' };
export const PrefetchCacheRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrefetchCacheRequest };
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
    fromJSON(object) {
        const message = { ...basePrefetchCacheRequest };
        message.paths = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePrefetchCacheRequest };
        message.paths = [];
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
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
const basePrefetchCacheMetadata = { resourceId: '' };
export const PrefetchCacheMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePrefetchCacheMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...basePrefetchCacheMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePrefetchCacheMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
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
        requestSerialize: (value) => Buffer.from(PurgeCacheRequest.encode(value).finish()),
        requestDeserialize: (value) => PurgeCacheRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch). */
    prefetch: {
        path: '/yandex.cloud.cdn.v1.CacheService/Prefetch',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(PrefetchCacheRequest.encode(value).finish()),
        requestDeserialize: (value) => PrefetchCacheRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const CacheServiceClient = makeGenericClientConstructor(CacheServiceService, 'yandex.cloud.cdn.v1.CacheService');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
