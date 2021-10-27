"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheServiceClient = exports.CacheServiceService = exports.PrefetchCacheMetadata = exports.PrefetchCacheRequest = exports.PurgeCacheMetadata = exports.PurgeCacheRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.cdn.v1';
const basePurgeCacheRequest = {
    $type: 'yandex.cloud.cdn.v1.PurgeCacheRequest',
    resourceId: '',
    paths: '',
};
exports.PurgeCacheRequest = {
    $type: 'yandex.cloud.cdn.v1.PurgeCacheRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.PurgeCacheRequest.$type, exports.PurgeCacheRequest);
const basePurgeCacheMetadata = {
    $type: 'yandex.cloud.cdn.v1.PurgeCacheMetadata',
    resourceId: '',
};
exports.PurgeCacheMetadata = {
    $type: 'yandex.cloud.cdn.v1.PurgeCacheMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.PurgeCacheMetadata.$type, exports.PurgeCacheMetadata);
const basePrefetchCacheRequest = {
    $type: 'yandex.cloud.cdn.v1.PrefetchCacheRequest',
    resourceId: '',
    paths: '',
};
exports.PrefetchCacheRequest = {
    $type: 'yandex.cloud.cdn.v1.PrefetchCacheRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.PrefetchCacheRequest.$type, exports.PrefetchCacheRequest);
const basePrefetchCacheMetadata = {
    $type: 'yandex.cloud.cdn.v1.PrefetchCacheMetadata',
    resourceId: '',
};
exports.PrefetchCacheMetadata = {
    $type: 'yandex.cloud.cdn.v1.PrefetchCacheMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.PrefetchCacheMetadata.$type, exports.PrefetchCacheMetadata);
/** A set of methods for managing Cache Service resources. */
exports.CacheServiceService = {
    /** Removes specified files from the cache of the specified resource. For details about purging, see [documentation](/docs/cdn/concepts/caching#purge). */
    purge: {
        path: '/yandex.cloud.cdn.v1.CacheService/Purge',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PurgeCacheRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.PurgeCacheRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch). */
    prefetch: {
        path: '/yandex.cloud.cdn.v1.CacheService/Prefetch',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PrefetchCacheRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.PrefetchCacheRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.CacheServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.CacheServiceService, 'yandex.cloud.cdn.v1.CacheService');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
