"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifecycleRule = exports.LifecyclePolicy = exports.lifecyclePolicy_StatusToJSON = exports.lifecyclePolicy_StatusFromJSON = exports.LifecyclePolicy_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.containerregistry.v1';
var LifecyclePolicy_Status;
(function (LifecyclePolicy_Status) {
    LifecyclePolicy_Status[LifecyclePolicy_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** ACTIVE - Policy is active and regularly deletes Docker images according to the established rules. */
    LifecyclePolicy_Status[LifecyclePolicy_Status["ACTIVE"] = 1] = "ACTIVE";
    /**
     * DISABLED - Policy is disabled and does not delete Docker images in the repository.
     * Policies in this status can be used for preparing and testing rules.
     */
    LifecyclePolicy_Status[LifecyclePolicy_Status["DISABLED"] = 2] = "DISABLED";
    LifecyclePolicy_Status[LifecyclePolicy_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LifecyclePolicy_Status = exports.LifecyclePolicy_Status || (exports.LifecyclePolicy_Status = {}));
function lifecyclePolicy_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return LifecyclePolicy_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'ACTIVE':
            return LifecyclePolicy_Status.ACTIVE;
        case 2:
        case 'DISABLED':
            return LifecyclePolicy_Status.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LifecyclePolicy_Status.UNRECOGNIZED;
    }
}
exports.lifecyclePolicy_StatusFromJSON = lifecyclePolicy_StatusFromJSON;
function lifecyclePolicy_StatusToJSON(object) {
    switch (object) {
        case LifecyclePolicy_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case LifecyclePolicy_Status.ACTIVE:
            return 'ACTIVE';
        case LifecyclePolicy_Status.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}
exports.lifecyclePolicy_StatusToJSON = lifecyclePolicy_StatusToJSON;
const baseLifecyclePolicy = {
    $type: 'yandex.cloud.containerregistry.v1.LifecyclePolicy',
    id: '',
    name: '',
    repositoryId: '',
    description: '',
    status: 0,
};
exports.LifecyclePolicy = {
    $type: 'yandex.cloud.containerregistry.v1.LifecyclePolicy',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.repositoryId !== '') {
            writer.uint32(26).string(message.repositoryId);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.rules) {
            exports.LifecycleRule.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLifecyclePolicy };
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.repositoryId = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.rules.push(exports.LifecycleRule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLifecyclePolicy };
        message.rules = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        }
        else {
            message.repositoryId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = lifecyclePolicy_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(exports.LifecycleRule.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = lifecyclePolicy_StatusToJSON(message.status));
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        if (message.rules) {
            obj.rules = message.rules.map((e) => e ? exports.LifecycleRule.toJSON(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLifecyclePolicy };
        message.rules = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        }
        else {
            message.repositoryId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(exports.LifecycleRule.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LifecyclePolicy.$type, exports.LifecyclePolicy);
const baseLifecycleRule = {
    $type: 'yandex.cloud.containerregistry.v1.LifecycleRule',
    description: '',
    tagRegexp: '',
    untagged: false,
    retainedTop: 0,
};
exports.LifecycleRule = {
    $type: 'yandex.cloud.containerregistry.v1.LifecycleRule',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== '') {
            writer.uint32(10).string(message.description);
        }
        if (message.expirePeriod !== undefined) {
            duration_1.Duration.encode(message.expirePeriod, writer.uint32(18).fork()).ldelim();
        }
        if (message.tagRegexp !== '') {
            writer.uint32(26).string(message.tagRegexp);
        }
        if (message.untagged === true) {
            writer.uint32(32).bool(message.untagged);
        }
        if (message.retainedTop !== 0) {
            writer.uint32(40).int64(message.retainedTop);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLifecycleRule };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.expirePeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tagRegexp = reader.string();
                    break;
                case 4:
                    message.untagged = reader.bool();
                    break;
                case 5:
                    message.retainedTop = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLifecycleRule };
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.expirePeriod !== undefined && object.expirePeriod !== null) {
            message.expirePeriod = duration_1.Duration.fromJSON(object.expirePeriod);
        }
        else {
            message.expirePeriod = undefined;
        }
        if (object.tagRegexp !== undefined && object.tagRegexp !== null) {
            message.tagRegexp = String(object.tagRegexp);
        }
        else {
            message.tagRegexp = '';
        }
        if (object.untagged !== undefined && object.untagged !== null) {
            message.untagged = Boolean(object.untagged);
        }
        else {
            message.untagged = false;
        }
        if (object.retainedTop !== undefined && object.retainedTop !== null) {
            message.retainedTop = Number(object.retainedTop);
        }
        else {
            message.retainedTop = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.expirePeriod !== undefined &&
            (obj.expirePeriod = message.expirePeriod
                ? duration_1.Duration.toJSON(message.expirePeriod)
                : undefined);
        message.tagRegexp !== undefined && (obj.tagRegexp = message.tagRegexp);
        message.untagged !== undefined && (obj.untagged = message.untagged);
        message.retainedTop !== undefined &&
            (obj.retainedTop = message.retainedTop);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLifecycleRule };
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.expirePeriod !== undefined && object.expirePeriod !== null) {
            message.expirePeriod = duration_1.Duration.fromPartial(object.expirePeriod);
        }
        else {
            message.expirePeriod = undefined;
        }
        if (object.tagRegexp !== undefined && object.tagRegexp !== null) {
            message.tagRegexp = object.tagRegexp;
        }
        else {
            message.tagRegexp = '';
        }
        if (object.untagged !== undefined && object.untagged !== null) {
            message.untagged = object.untagged;
        }
        else {
            message.untagged = false;
        }
        if (object.retainedTop !== undefined && object.retainedTop !== null) {
            message.retainedTop = object.retainedTop;
        }
        else {
            message.retainedTop = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LifecycleRule.$type, exports.LifecycleRule);
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
