"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginBalancerMeta = exports.OriginNamedMeta = exports.OriginMeta = exports.OriginParams = exports.Origin = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.cdn.v1';
const baseOrigin = {
    id: 0,
    originGroupId: 0,
    source: '',
    enabled: false,
    backup: false,
};
exports.Origin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        if (message.source !== '') {
            writer.uint32(26).string(message.source);
        }
        if (message.enabled === true) {
            writer.uint32(32).bool(message.enabled);
        }
        if (message.backup === true) {
            writer.uint32(40).bool(message.backup);
        }
        if (message.meta !== undefined) {
            exports.OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOrigin };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.int64());
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                case 3:
                    message.source = reader.string();
                    break;
                case 4:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.backup = reader.bool();
                    break;
                case 6:
                    message.meta = exports.OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOrigin };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = Boolean(object.backup);
        }
        else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = exports.OriginMeta.fromJSON(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta
                ? exports.OriginMeta.toJSON(message.meta)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOrigin };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = object.backup;
        }
        else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = exports.OriginMeta.fromPartial(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
};
const baseOriginParams = { source: '', enabled: false, backup: false };
exports.OriginParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.source !== '') {
            writer.uint32(10).string(message.source);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        if (message.backup === true) {
            writer.uint32(24).bool(message.backup);
        }
        if (message.meta !== undefined) {
            exports.OriginMeta.encode(message.meta, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOriginParams };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
                    break;
                case 3:
                    message.backup = reader.bool();
                    break;
                case 4:
                    message.meta = exports.OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOriginParams };
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = Boolean(object.backup);
        }
        else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = exports.OriginMeta.fromJSON(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta
                ? exports.OriginMeta.toJSON(message.meta)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOriginParams };
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = object.backup;
        }
        else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = exports.OriginMeta.fromPartial(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
};
const baseOriginMeta = {};
exports.OriginMeta = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.common !== undefined) {
            exports.OriginNamedMeta.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        if (message.bucket !== undefined) {
            exports.OriginNamedMeta.encode(message.bucket, writer.uint32(18).fork()).ldelim();
        }
        if (message.website !== undefined) {
            exports.OriginNamedMeta.encode(message.website, writer.uint32(26).fork()).ldelim();
        }
        if (message.balancer !== undefined) {
            exports.OriginBalancerMeta.encode(message.balancer, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOriginMeta };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.common = exports.OriginNamedMeta.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bucket = exports.OriginNamedMeta.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.website = exports.OriginNamedMeta.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balancer = exports.OriginBalancerMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOriginMeta };
        if (object.common !== undefined && object.common !== null) {
            message.common = exports.OriginNamedMeta.fromJSON(object.common);
        }
        else {
            message.common = undefined;
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = exports.OriginNamedMeta.fromJSON(object.bucket);
        }
        else {
            message.bucket = undefined;
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = exports.OriginNamedMeta.fromJSON(object.website);
        }
        else {
            message.website = undefined;
        }
        if (object.balancer !== undefined && object.balancer !== null) {
            message.balancer = exports.OriginBalancerMeta.fromJSON(object.balancer);
        }
        else {
            message.balancer = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.common !== undefined &&
            (obj.common = message.common
                ? exports.OriginNamedMeta.toJSON(message.common)
                : undefined);
        message.bucket !== undefined &&
            (obj.bucket = message.bucket
                ? exports.OriginNamedMeta.toJSON(message.bucket)
                : undefined);
        message.website !== undefined &&
            (obj.website = message.website
                ? exports.OriginNamedMeta.toJSON(message.website)
                : undefined);
        message.balancer !== undefined &&
            (obj.balancer = message.balancer
                ? exports.OriginBalancerMeta.toJSON(message.balancer)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOriginMeta };
        if (object.common !== undefined && object.common !== null) {
            message.common = exports.OriginNamedMeta.fromPartial(object.common);
        }
        else {
            message.common = undefined;
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = exports.OriginNamedMeta.fromPartial(object.bucket);
        }
        else {
            message.bucket = undefined;
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = exports.OriginNamedMeta.fromPartial(object.website);
        }
        else {
            message.website = undefined;
        }
        if (object.balancer !== undefined && object.balancer !== null) {
            message.balancer = exports.OriginBalancerMeta.fromPartial(object.balancer);
        }
        else {
            message.balancer = undefined;
        }
        return message;
    },
};
const baseOriginNamedMeta = { name: '' };
exports.OriginNamedMeta = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOriginNamedMeta };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOriginNamedMeta };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOriginNamedMeta };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        return message;
    },
};
const baseOriginBalancerMeta = { id: '' };
exports.OriginBalancerMeta = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOriginBalancerMeta };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOriginBalancerMeta };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOriginBalancerMeta };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
