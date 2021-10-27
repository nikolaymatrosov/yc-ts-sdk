"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogReadingServiceClient = exports.LogReadingServiceService = exports.Criteria = exports.ReadResponse = exports.ReadRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const log_entry_1 = require("../../../../yandex/cloud/logging/v1/log_entry");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.logging.v1';
const baseReadRequest = {
    $type: 'yandex.cloud.logging.v1.ReadRequest',
};
exports.ReadRequest = {
    $type: 'yandex.cloud.logging.v1.ReadRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageToken !== undefined) {
            writer.uint32(10).string(message.pageToken);
        }
        if (message.criteria !== undefined) {
            exports.Criteria.encode(message.criteria, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReadRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageToken = reader.string();
                    break;
                case 2:
                    message.criteria = exports.Criteria.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseReadRequest };
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = undefined;
        }
        if (object.criteria !== undefined && object.criteria !== null) {
            message.criteria = exports.Criteria.fromJSON(object.criteria);
        }
        else {
            message.criteria = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.criteria !== undefined &&
            (obj.criteria = message.criteria
                ? exports.Criteria.toJSON(message.criteria)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReadRequest };
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = undefined;
        }
        if (object.criteria !== undefined && object.criteria !== null) {
            message.criteria = exports.Criteria.fromPartial(object.criteria);
        }
        else {
            message.criteria = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ReadRequest.$type, exports.ReadRequest);
const baseReadResponse = {
    $type: 'yandex.cloud.logging.v1.ReadResponse',
    logGroupId: '',
    nextPageToken: '',
    previousPageToken: '',
};
exports.ReadResponse = {
    $type: 'yandex.cloud.logging.v1.ReadResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
        }
        for (const v of message.entries) {
            log_entry_1.LogEntry.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(26).string(message.nextPageToken);
        }
        if (message.previousPageToken !== '') {
            writer.uint32(34).string(message.previousPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReadResponse };
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.entries.push(log_entry_1.LogEntry.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nextPageToken = reader.string();
                    break;
                case 4:
                    message.previousPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseReadResponse };
        message.entries = [];
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        }
        else {
            message.logGroupId = '';
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(log_entry_1.LogEntry.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        if (object.previousPageToken !== undefined &&
            object.previousPageToken !== null) {
            message.previousPageToken = String(object.previousPageToken);
        }
        else {
            message.previousPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? log_entry_1.LogEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        message.previousPageToken !== undefined &&
            (obj.previousPageToken = message.previousPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReadResponse };
        message.entries = [];
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        }
        else {
            message.logGroupId = '';
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(log_entry_1.LogEntry.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        if (object.previousPageToken !== undefined &&
            object.previousPageToken !== null) {
            message.previousPageToken = object.previousPageToken;
        }
        else {
            message.previousPageToken = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ReadResponse.$type, exports.ReadResponse);
const baseCriteria = {
    $type: 'yandex.cloud.logging.v1.Criteria',
    logGroupId: '',
    resourceTypes: '',
    resourceIds: '',
    levels: 0,
    filter: '',
    pageSize: 0,
};
exports.Criteria = {
    $type: 'yandex.cloud.logging.v1.Criteria',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== '') {
            writer.uint32(10).string(message.logGroupId);
        }
        for (const v of message.resourceTypes) {
            writer.uint32(18).string(v);
        }
        for (const v of message.resourceIds) {
            writer.uint32(26).string(v);
        }
        if (message.since !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.since), writer.uint32(34).fork()).ldelim();
        }
        if (message.until !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.until), writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(50).fork();
        for (const v of message.levels) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.filter !== '') {
            writer.uint32(58).string(message.filter);
        }
        if (message.pageSize !== 0) {
            writer.uint32(64).int64(message.pageSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCriteria };
        message.resourceTypes = [];
        message.resourceIds = [];
        message.levels = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.resourceTypes.push(reader.string());
                    break;
                case 3:
                    message.resourceIds.push(reader.string());
                    break;
                case 4:
                    message.since = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.until = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.levels.push(reader.int32());
                        }
                    }
                    else {
                        message.levels.push(reader.int32());
                    }
                    break;
                case 7:
                    message.filter = reader.string();
                    break;
                case 8:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCriteria };
        message.resourceTypes = [];
        message.resourceIds = [];
        message.levels = [];
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        }
        else {
            message.logGroupId = '';
        }
        if (object.resourceTypes !== undefined &&
            object.resourceTypes !== null) {
            for (const e of object.resourceTypes) {
                message.resourceTypes.push(String(e));
            }
        }
        if (object.resourceIds !== undefined && object.resourceIds !== null) {
            for (const e of object.resourceIds) {
                message.resourceIds.push(String(e));
            }
        }
        if (object.since !== undefined && object.since !== null) {
            message.since = fromJsonTimestamp(object.since);
        }
        else {
            message.since = undefined;
        }
        if (object.until !== undefined && object.until !== null) {
            message.until = fromJsonTimestamp(object.until);
        }
        else {
            message.until = undefined;
        }
        if (object.levels !== undefined && object.levels !== null) {
            for (const e of object.levels) {
                message.levels.push((0, log_entry_1.logLevel_LevelFromJSON)(e));
            }
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        }
        else {
            message.filter = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        if (message.resourceTypes) {
            obj.resourceTypes = message.resourceTypes.map((e) => e);
        }
        else {
            obj.resourceTypes = [];
        }
        if (message.resourceIds) {
            obj.resourceIds = message.resourceIds.map((e) => e);
        }
        else {
            obj.resourceIds = [];
        }
        message.since !== undefined &&
            (obj.since = message.since.toISOString());
        message.until !== undefined &&
            (obj.until = message.until.toISOString());
        if (message.levels) {
            obj.levels = message.levels.map((e) => (0, log_entry_1.logLevel_LevelToJSON)(e));
        }
        else {
            obj.levels = [];
        }
        message.filter !== undefined && (obj.filter = message.filter);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCriteria };
        message.resourceTypes = [];
        message.resourceIds = [];
        message.levels = [];
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        }
        else {
            message.logGroupId = '';
        }
        if (object.resourceTypes !== undefined &&
            object.resourceTypes !== null) {
            for (const e of object.resourceTypes) {
                message.resourceTypes.push(e);
            }
        }
        if (object.resourceIds !== undefined && object.resourceIds !== null) {
            for (const e of object.resourceIds) {
                message.resourceIds.push(e);
            }
        }
        if (object.since !== undefined && object.since !== null) {
            message.since = object.since;
        }
        else {
            message.since = undefined;
        }
        if (object.until !== undefined && object.until !== null) {
            message.until = object.until;
        }
        else {
            message.until = undefined;
        }
        if (object.levels !== undefined && object.levels !== null) {
            for (const e of object.levels) {
                message.levels.push(e);
            }
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Criteria.$type, exports.Criteria);
/** A set of methods for reading from log groups. To make a request use `reader.logging.yandexcloud.net`. */
exports.LogReadingServiceService = {
    /** Read log entries from the specified log group. */
    read: {
        path: '/yandex.cloud.logging.v1.LogReadingService/Read',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ReadRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ReadRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ReadResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ReadResponse.decode(value),
    },
};
exports.LogReadingServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LogReadingServiceService, 'yandex.cloud.logging.v1.LogReadingService');
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
