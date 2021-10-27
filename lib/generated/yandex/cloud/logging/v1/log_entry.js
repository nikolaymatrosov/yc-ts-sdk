"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = exports.Destination = exports.LogEntryDefaults = exports.IncomingLogEntry = exports.LogEntry = exports.logLevel_LevelToJSON = exports.logLevel_LevelFromJSON = exports.LogLevel_Level = exports.protobufPackage = void 0;
/* eslint-disable */
const struct_1 = require("../../../../google/protobuf/struct");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const log_resource_1 = require("../../../../yandex/cloud/logging/v1/log_resource");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.logging.v1';
/** Possible log levels for entries. */
var LogLevel_Level;
(function (LogLevel_Level) {
    /**
     * LEVEL_UNSPECIFIED - Default log level.
     *
     * Equivalent to not specifying log level at all.
     */
    LogLevel_Level[LogLevel_Level["LEVEL_UNSPECIFIED"] = 0] = "LEVEL_UNSPECIFIED";
    /**
     * TRACE - Trace log level.
     *
     * Possible use case: verbose logging of some business logic.
     */
    LogLevel_Level[LogLevel_Level["TRACE"] = 1] = "TRACE";
    /**
     * DEBUG - Debug log level.
     *
     * Possible use case: debugging special cases in application logic.
     */
    LogLevel_Level[LogLevel_Level["DEBUG"] = 2] = "DEBUG";
    /**
     * INFO - Info log level.
     *
     * Mostly used for information messages.
     */
    LogLevel_Level[LogLevel_Level["INFO"] = 3] = "INFO";
    /**
     * WARN - Warn log level.
     *
     * May be used to alert about significant events.
     */
    LogLevel_Level[LogLevel_Level["WARN"] = 4] = "WARN";
    /**
     * ERROR - Error log level.
     *
     * May be used to alert about errors in infrastructure, logic, etc.
     */
    LogLevel_Level[LogLevel_Level["ERROR"] = 5] = "ERROR";
    /**
     * FATAL - Fatal log level.
     *
     * May be used to alert about unrecoverable failures and events.
     */
    LogLevel_Level[LogLevel_Level["FATAL"] = 6] = "FATAL";
    LogLevel_Level[LogLevel_Level["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LogLevel_Level = exports.LogLevel_Level || (exports.LogLevel_Level = {}));
function logLevel_LevelFromJSON(object) {
    switch (object) {
        case 0:
        case 'LEVEL_UNSPECIFIED':
            return LogLevel_Level.LEVEL_UNSPECIFIED;
        case 1:
        case 'TRACE':
            return LogLevel_Level.TRACE;
        case 2:
        case 'DEBUG':
            return LogLevel_Level.DEBUG;
        case 3:
        case 'INFO':
            return LogLevel_Level.INFO;
        case 4:
        case 'WARN':
            return LogLevel_Level.WARN;
        case 5:
        case 'ERROR':
            return LogLevel_Level.ERROR;
        case 6:
        case 'FATAL':
            return LogLevel_Level.FATAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LogLevel_Level.UNRECOGNIZED;
    }
}
exports.logLevel_LevelFromJSON = logLevel_LevelFromJSON;
function logLevel_LevelToJSON(object) {
    switch (object) {
        case LogLevel_Level.LEVEL_UNSPECIFIED:
            return 'LEVEL_UNSPECIFIED';
        case LogLevel_Level.TRACE:
            return 'TRACE';
        case LogLevel_Level.DEBUG:
            return 'DEBUG';
        case LogLevel_Level.INFO:
            return 'INFO';
        case LogLevel_Level.WARN:
            return 'WARN';
        case LogLevel_Level.ERROR:
            return 'ERROR';
        case LogLevel_Level.FATAL:
            return 'FATAL';
        default:
            return 'UNKNOWN';
    }
}
exports.logLevel_LevelToJSON = logLevel_LevelToJSON;
const baseLogEntry = {
    $type: 'yandex.cloud.logging.v1.LogEntry',
    uid: '',
    level: 0,
    message: '',
};
exports.LogEntry = {
    $type: 'yandex.cloud.logging.v1.LogEntry',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uid !== '') {
            writer.uint32(10).string(message.uid);
        }
        if (message.resource !== undefined) {
            log_resource_1.LogEntryResource.encode(message.resource, writer.uint32(18).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.ingestedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.ingestedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.savedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.savedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.level !== 0) {
            writer.uint32(48).int32(message.level);
        }
        if (message.message !== '') {
            writer.uint32(58).string(message.message);
        }
        if (message.jsonPayload !== undefined) {
            struct_1.Struct.encode(message.jsonPayload, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.resource = log_resource_1.LogEntryResource.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.ingestedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.savedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.level = reader.int32();
                    break;
                case 7:
                    message.message = reader.string();
                    break;
                case 8:
                    message.jsonPayload = struct_1.Struct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLogEntry };
        if (object.uid !== undefined && object.uid !== null) {
            message.uid = String(object.uid);
        }
        else {
            message.uid = '';
        }
        if (object.resource !== undefined && object.resource !== null) {
            message.resource = log_resource_1.LogEntryResource.fromJSON(object.resource);
        }
        else {
            message.resource = undefined;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromJsonTimestamp(object.timestamp);
        }
        else {
            message.timestamp = undefined;
        }
        if (object.ingestedAt !== undefined && object.ingestedAt !== null) {
            message.ingestedAt = fromJsonTimestamp(object.ingestedAt);
        }
        else {
            message.ingestedAt = undefined;
        }
        if (object.savedAt !== undefined && object.savedAt !== null) {
            message.savedAt = fromJsonTimestamp(object.savedAt);
        }
        else {
            message.savedAt = undefined;
        }
        if (object.level !== undefined && object.level !== null) {
            message.level = logLevel_LevelFromJSON(object.level);
        }
        else {
            message.level = 0;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = '';
        }
        if (object.jsonPayload !== undefined && object.jsonPayload !== null) {
            message.jsonPayload = struct_1.Struct.fromJSON(object.jsonPayload);
        }
        else {
            message.jsonPayload = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.uid !== undefined && (obj.uid = message.uid);
        message.resource !== undefined &&
            (obj.resource = message.resource
                ? log_resource_1.LogEntryResource.toJSON(message.resource)
                : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.ingestedAt !== undefined &&
            (obj.ingestedAt = message.ingestedAt.toISOString());
        message.savedAt !== undefined &&
            (obj.savedAt = message.savedAt.toISOString());
        message.level !== undefined &&
            (obj.level = logLevel_LevelToJSON(message.level));
        message.message !== undefined && (obj.message = message.message);
        message.jsonPayload !== undefined &&
            (obj.jsonPayload = message.jsonPayload
                ? struct_1.Struct.toJSON(message.jsonPayload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLogEntry };
        if (object.uid !== undefined && object.uid !== null) {
            message.uid = object.uid;
        }
        else {
            message.uid = '';
        }
        if (object.resource !== undefined && object.resource !== null) {
            message.resource = log_resource_1.LogEntryResource.fromPartial(object.resource);
        }
        else {
            message.resource = undefined;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = undefined;
        }
        if (object.ingestedAt !== undefined && object.ingestedAt !== null) {
            message.ingestedAt = object.ingestedAt;
        }
        else {
            message.ingestedAt = undefined;
        }
        if (object.savedAt !== undefined && object.savedAt !== null) {
            message.savedAt = object.savedAt;
        }
        else {
            message.savedAt = undefined;
        }
        if (object.level !== undefined && object.level !== null) {
            message.level = object.level;
        }
        else {
            message.level = 0;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = '';
        }
        if (object.jsonPayload !== undefined && object.jsonPayload !== null) {
            message.jsonPayload = struct_1.Struct.fromPartial(object.jsonPayload);
        }
        else {
            message.jsonPayload = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogEntry.$type, exports.LogEntry);
const baseIncomingLogEntry = {
    $type: 'yandex.cloud.logging.v1.IncomingLogEntry',
    level: 0,
    message: '',
};
exports.IncomingLogEntry = {
    $type: 'yandex.cloud.logging.v1.IncomingLogEntry',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        if (message.level !== 0) {
            writer.uint32(16).int32(message.level);
        }
        if (message.message !== '') {
            writer.uint32(26).string(message.message);
        }
        if (message.jsonPayload !== undefined) {
            struct_1.Struct.encode(message.jsonPayload, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIncomingLogEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.level = reader.int32();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    message.jsonPayload = struct_1.Struct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIncomingLogEntry };
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromJsonTimestamp(object.timestamp);
        }
        else {
            message.timestamp = undefined;
        }
        if (object.level !== undefined && object.level !== null) {
            message.level = logLevel_LevelFromJSON(object.level);
        }
        else {
            message.level = 0;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = '';
        }
        if (object.jsonPayload !== undefined && object.jsonPayload !== null) {
            message.jsonPayload = struct_1.Struct.fromJSON(object.jsonPayload);
        }
        else {
            message.jsonPayload = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.level !== undefined &&
            (obj.level = logLevel_LevelToJSON(message.level));
        message.message !== undefined && (obj.message = message.message);
        message.jsonPayload !== undefined &&
            (obj.jsonPayload = message.jsonPayload
                ? struct_1.Struct.toJSON(message.jsonPayload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIncomingLogEntry };
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = undefined;
        }
        if (object.level !== undefined && object.level !== null) {
            message.level = object.level;
        }
        else {
            message.level = 0;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = '';
        }
        if (object.jsonPayload !== undefined && object.jsonPayload !== null) {
            message.jsonPayload = struct_1.Struct.fromPartial(object.jsonPayload);
        }
        else {
            message.jsonPayload = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.IncomingLogEntry.$type, exports.IncomingLogEntry);
const baseLogEntryDefaults = {
    $type: 'yandex.cloud.logging.v1.LogEntryDefaults',
    level: 0,
};
exports.LogEntryDefaults = {
    $type: 'yandex.cloud.logging.v1.LogEntryDefaults',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.level !== 0) {
            writer.uint32(16).int32(message.level);
        }
        if (message.jsonPayload !== undefined) {
            struct_1.Struct.encode(message.jsonPayload, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogEntryDefaults };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.level = reader.int32();
                    break;
                case 4:
                    message.jsonPayload = struct_1.Struct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLogEntryDefaults };
        if (object.level !== undefined && object.level !== null) {
            message.level = logLevel_LevelFromJSON(object.level);
        }
        else {
            message.level = 0;
        }
        if (object.jsonPayload !== undefined && object.jsonPayload !== null) {
            message.jsonPayload = struct_1.Struct.fromJSON(object.jsonPayload);
        }
        else {
            message.jsonPayload = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.level !== undefined &&
            (obj.level = logLevel_LevelToJSON(message.level));
        message.jsonPayload !== undefined &&
            (obj.jsonPayload = message.jsonPayload
                ? struct_1.Struct.toJSON(message.jsonPayload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLogEntryDefaults };
        if (object.level !== undefined && object.level !== null) {
            message.level = object.level;
        }
        else {
            message.level = 0;
        }
        if (object.jsonPayload !== undefined && object.jsonPayload !== null) {
            message.jsonPayload = struct_1.Struct.fromPartial(object.jsonPayload);
        }
        else {
            message.jsonPayload = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogEntryDefaults.$type, exports.LogEntryDefaults);
const baseDestination = {
    $type: 'yandex.cloud.logging.v1.Destination',
};
exports.Destination = {
    $type: 'yandex.cloud.logging.v1.Destination',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logGroupId !== undefined) {
            writer.uint32(10).string(message.logGroupId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDestination };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logGroupId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDestination };
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        }
        else {
            message.logGroupId = undefined;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDestination };
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        }
        else {
            message.logGroupId = undefined;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Destination.$type, exports.Destination);
const baseLogLevel = {
    $type: 'yandex.cloud.logging.v1.LogLevel',
    level: 0,
};
exports.LogLevel = {
    $type: 'yandex.cloud.logging.v1.LogLevel',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.level !== 0) {
            writer.uint32(8).int32(message.level);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogLevel };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.level = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLogLevel };
        if (object.level !== undefined && object.level !== null) {
            message.level = logLevel_LevelFromJSON(object.level);
        }
        else {
            message.level = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.level !== undefined &&
            (obj.level = logLevel_LevelToJSON(message.level));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLogLevel };
        if (object.level !== undefined && object.level !== null) {
            message.level = object.level;
        }
        else {
            message.level = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogLevel.$type, exports.LogLevel);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
