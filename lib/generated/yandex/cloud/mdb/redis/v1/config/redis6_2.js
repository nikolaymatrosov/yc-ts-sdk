/* eslint-disable */
import { Int64Value } from '../../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.redis.v1.config';
export var Redisconfig62_MaxmemoryPolicy;
(function (Redisconfig62_MaxmemoryPolicy) {
    Redisconfig62_MaxmemoryPolicy[Redisconfig62_MaxmemoryPolicy["MAXMEMORY_POLICY_UNSPECIFIED"] = 0] = "MAXMEMORY_POLICY_UNSPECIFIED";
    /** VOLATILE_LRU - Try to remove less recently used (LRU) keys with `expire set`. */
    Redisconfig62_MaxmemoryPolicy[Redisconfig62_MaxmemoryPolicy["VOLATILE_LRU"] = 1] = "VOLATILE_LRU";
    /** ALLKEYS_LRU - Remove less recently used (LRU) keys. */
    Redisconfig62_MaxmemoryPolicy[Redisconfig62_MaxmemoryPolicy["ALLKEYS_LRU"] = 2] = "ALLKEYS_LRU";
    /** VOLATILE_LFU - Try to remove least frequently used (LFU) keys with `expire set`. */
    Redisconfig62_MaxmemoryPolicy[Redisconfig62_MaxmemoryPolicy["VOLATILE_LFU"] = 3] = "VOLATILE_LFU";
    /** ALLKEYS_LFU - Remove least frequently used (LFU) keys. */
    Redisconfig62_MaxmemoryPolicy[Redisconfig62_MaxmemoryPolicy["ALLKEYS_LFU"] = 4] = "ALLKEYS_LFU";
    /** VOLATILE_RANDOM - Try to remove keys with `expire set` randomly. */
    Redisconfig62_MaxmemoryPolicy[Redisconfig62_MaxmemoryPolicy["VOLATILE_RANDOM"] = 5] = "VOLATILE_RANDOM";
    /** ALLKEYS_RANDOM - Remove keys randomly. */
    Redisconfig62_MaxmemoryPolicy[Redisconfig62_MaxmemoryPolicy["ALLKEYS_RANDOM"] = 6] = "ALLKEYS_RANDOM";
    /**
     * VOLATILE_TTL - Try to remove less recently used (LRU) keys with `expire set`
     * and shorter TTL first.
     */
    Redisconfig62_MaxmemoryPolicy[Redisconfig62_MaxmemoryPolicy["VOLATILE_TTL"] = 7] = "VOLATILE_TTL";
    /**
     * NOEVICTION - Return errors when memory limit was reached and commands could require
     * more memory to be used.
     */
    Redisconfig62_MaxmemoryPolicy[Redisconfig62_MaxmemoryPolicy["NOEVICTION"] = 8] = "NOEVICTION";
    Redisconfig62_MaxmemoryPolicy[Redisconfig62_MaxmemoryPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Redisconfig62_MaxmemoryPolicy || (Redisconfig62_MaxmemoryPolicy = {}));
export function redisconfig62_MaxmemoryPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case 'MAXMEMORY_POLICY_UNSPECIFIED':
            return Redisconfig62_MaxmemoryPolicy.MAXMEMORY_POLICY_UNSPECIFIED;
        case 1:
        case 'VOLATILE_LRU':
            return Redisconfig62_MaxmemoryPolicy.VOLATILE_LRU;
        case 2:
        case 'ALLKEYS_LRU':
            return Redisconfig62_MaxmemoryPolicy.ALLKEYS_LRU;
        case 3:
        case 'VOLATILE_LFU':
            return Redisconfig62_MaxmemoryPolicy.VOLATILE_LFU;
        case 4:
        case 'ALLKEYS_LFU':
            return Redisconfig62_MaxmemoryPolicy.ALLKEYS_LFU;
        case 5:
        case 'VOLATILE_RANDOM':
            return Redisconfig62_MaxmemoryPolicy.VOLATILE_RANDOM;
        case 6:
        case 'ALLKEYS_RANDOM':
            return Redisconfig62_MaxmemoryPolicy.ALLKEYS_RANDOM;
        case 7:
        case 'VOLATILE_TTL':
            return Redisconfig62_MaxmemoryPolicy.VOLATILE_TTL;
        case 8:
        case 'NOEVICTION':
            return Redisconfig62_MaxmemoryPolicy.NOEVICTION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Redisconfig62_MaxmemoryPolicy.UNRECOGNIZED;
    }
}
export function redisconfig62_MaxmemoryPolicyToJSON(object) {
    switch (object) {
        case Redisconfig62_MaxmemoryPolicy.MAXMEMORY_POLICY_UNSPECIFIED:
            return 'MAXMEMORY_POLICY_UNSPECIFIED';
        case Redisconfig62_MaxmemoryPolicy.VOLATILE_LRU:
            return 'VOLATILE_LRU';
        case Redisconfig62_MaxmemoryPolicy.ALLKEYS_LRU:
            return 'ALLKEYS_LRU';
        case Redisconfig62_MaxmemoryPolicy.VOLATILE_LFU:
            return 'VOLATILE_LFU';
        case Redisconfig62_MaxmemoryPolicy.ALLKEYS_LFU:
            return 'ALLKEYS_LFU';
        case Redisconfig62_MaxmemoryPolicy.VOLATILE_RANDOM:
            return 'VOLATILE_RANDOM';
        case Redisconfig62_MaxmemoryPolicy.ALLKEYS_RANDOM:
            return 'ALLKEYS_RANDOM';
        case Redisconfig62_MaxmemoryPolicy.VOLATILE_TTL:
            return 'VOLATILE_TTL';
        case Redisconfig62_MaxmemoryPolicy.NOEVICTION:
            return 'NOEVICTION';
        default:
            return 'UNKNOWN';
    }
}
const baseRedisconfig62 = {
    maxmemoryPolicy: 0,
    password: '',
    notifyKeyspaceEvents: '',
};
export const Redisconfig62 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxmemoryPolicy !== 0) {
            writer.uint32(8).int32(message.maxmemoryPolicy);
        }
        if (message.timeout !== undefined) {
            Int64Value.encode({ value: message.timeout }, writer.uint32(18).fork()).ldelim();
        }
        if (message.password !== '') {
            writer.uint32(26).string(message.password);
        }
        if (message.databases !== undefined) {
            Int64Value.encode({ value: message.databases }, writer.uint32(34).fork()).ldelim();
        }
        if (message.slowlogLogSlowerThan !== undefined) {
            Int64Value.encode({ value: message.slowlogLogSlowerThan }, writer.uint32(42).fork()).ldelim();
        }
        if (message.slowlogMaxLen !== undefined) {
            Int64Value.encode({ value: message.slowlogMaxLen }, writer.uint32(50).fork()).ldelim();
        }
        if (message.notifyKeyspaceEvents !== '') {
            writer.uint32(58).string(message.notifyKeyspaceEvents);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedisconfig62 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxmemoryPolicy = reader.int32();
                    break;
                case 2:
                    message.timeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.databases = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.slowlogLogSlowerThan = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.slowlogMaxLen = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.notifyKeyspaceEvents = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRedisconfig62 };
        if (object.maxmemoryPolicy !== undefined &&
            object.maxmemoryPolicy !== null) {
            message.maxmemoryPolicy = redisconfig62_MaxmemoryPolicyFromJSON(object.maxmemoryPolicy);
        }
        else {
            message.maxmemoryPolicy = 0;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Number(object.timeout);
        }
        else {
            message.timeout = undefined;
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        }
        else {
            message.password = '';
        }
        if (object.databases !== undefined && object.databases !== null) {
            message.databases = Number(object.databases);
        }
        else {
            message.databases = undefined;
        }
        if (object.slowlogLogSlowerThan !== undefined &&
            object.slowlogLogSlowerThan !== null) {
            message.slowlogLogSlowerThan = Number(object.slowlogLogSlowerThan);
        }
        else {
            message.slowlogLogSlowerThan = undefined;
        }
        if (object.slowlogMaxLen !== undefined &&
            object.slowlogMaxLen !== null) {
            message.slowlogMaxLen = Number(object.slowlogMaxLen);
        }
        else {
            message.slowlogMaxLen = undefined;
        }
        if (object.notifyKeyspaceEvents !== undefined &&
            object.notifyKeyspaceEvents !== null) {
            message.notifyKeyspaceEvents = String(object.notifyKeyspaceEvents);
        }
        else {
            message.notifyKeyspaceEvents = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxmemoryPolicy !== undefined &&
            (obj.maxmemoryPolicy = redisconfig62_MaxmemoryPolicyToJSON(message.maxmemoryPolicy));
        message.timeout !== undefined && (obj.timeout = message.timeout);
        message.password !== undefined && (obj.password = message.password);
        message.databases !== undefined && (obj.databases = message.databases);
        message.slowlogLogSlowerThan !== undefined &&
            (obj.slowlogLogSlowerThan = message.slowlogLogSlowerThan);
        message.slowlogMaxLen !== undefined &&
            (obj.slowlogMaxLen = message.slowlogMaxLen);
        message.notifyKeyspaceEvents !== undefined &&
            (obj.notifyKeyspaceEvents = message.notifyKeyspaceEvents);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRedisconfig62 };
        if (object.maxmemoryPolicy !== undefined &&
            object.maxmemoryPolicy !== null) {
            message.maxmemoryPolicy = object.maxmemoryPolicy;
        }
        else {
            message.maxmemoryPolicy = 0;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = object.timeout;
        }
        else {
            message.timeout = undefined;
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        }
        else {
            message.password = '';
        }
        if (object.databases !== undefined && object.databases !== null) {
            message.databases = object.databases;
        }
        else {
            message.databases = undefined;
        }
        if (object.slowlogLogSlowerThan !== undefined &&
            object.slowlogLogSlowerThan !== null) {
            message.slowlogLogSlowerThan = object.slowlogLogSlowerThan;
        }
        else {
            message.slowlogLogSlowerThan = undefined;
        }
        if (object.slowlogMaxLen !== undefined &&
            object.slowlogMaxLen !== null) {
            message.slowlogMaxLen = object.slowlogMaxLen;
        }
        else {
            message.slowlogMaxLen = undefined;
        }
        if (object.notifyKeyspaceEvents !== undefined &&
            object.notifyKeyspaceEvents !== null) {
            message.notifyKeyspaceEvents = object.notifyKeyspaceEvents;
        }
        else {
            message.notifyKeyspaceEvents = '';
        }
        return message;
    },
};
const baseRedisconfigset62 = {};
export const Redisconfigset62 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            Redisconfig62.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Redisconfig62.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Redisconfig62.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedisconfigset62 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Redisconfig62.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Redisconfig62.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Redisconfig62.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRedisconfigset62 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Redisconfig62.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Redisconfig62.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Redisconfig62.fromJSON(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Redisconfig62.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Redisconfig62.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Redisconfig62.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRedisconfigset62 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Redisconfig62.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Redisconfig62.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Redisconfig62.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
