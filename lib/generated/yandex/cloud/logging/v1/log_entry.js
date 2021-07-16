/* eslint-disable */
import { Struct } from '../../../../google/protobuf/struct';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { LogEntryResource } from '../../../../yandex/cloud/logging/v1/log_resource';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.logging.v1';
export var LogLevel_Level;
(function (LogLevel_Level) {
    LogLevel_Level[LogLevel_Level["LEVEL_UNSPECIFIED"] = 0] = "LEVEL_UNSPECIFIED";
    LogLevel_Level[LogLevel_Level["TRACE"] = 1] = "TRACE";
    LogLevel_Level[LogLevel_Level["DEBUG"] = 2] = "DEBUG";
    LogLevel_Level[LogLevel_Level["INFO"] = 3] = "INFO";
    LogLevel_Level[LogLevel_Level["WARN"] = 4] = "WARN";
    LogLevel_Level[LogLevel_Level["ERROR"] = 5] = "ERROR";
    LogLevel_Level[LogLevel_Level["FATAL"] = 6] = "FATAL";
    LogLevel_Level[LogLevel_Level["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LogLevel_Level || (LogLevel_Level = {}));
export function logLevel_LevelFromJSON(object) {
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
export function logLevel_LevelToJSON(object) {
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
const baseLogEntry = { uid: '', level: 0, message: '' };
export const LogEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uid !== '') {
            writer.uint32(10).string(message.uid);
        }
        if (message.resource !== undefined) {
            LogEntryResource.encode(message.resource, writer.uint32(18).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.ingestedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.ingestedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.savedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.savedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.level !== 0) {
            writer.uint32(48).int32(message.level);
        }
        if (message.message !== '') {
            writer.uint32(58).string(message.message);
        }
        if (message.jsonPayload !== undefined) {
            Struct.encode(message.jsonPayload, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.resource = LogEntryResource.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.ingestedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.savedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.level = reader.int32();
                    break;
                case 7:
                    message.message = reader.string();
                    break;
                case 8:
                    message.jsonPayload = Struct.decode(reader, reader.uint32());
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
            message.resource = LogEntryResource.fromJSON(object.resource);
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
            message.jsonPayload = Struct.fromJSON(object.jsonPayload);
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
                ? LogEntryResource.toJSON(message.resource)
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
                ? Struct.toJSON(message.jsonPayload)
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
            message.resource = LogEntryResource.fromPartial(object.resource);
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
            message.jsonPayload = Struct.fromPartial(object.jsonPayload);
        }
        else {
            message.jsonPayload = undefined;
        }
        return message;
    },
};
const baseIncomingLogEntry = { level: 0, message: '' };
export const IncomingLogEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        if (message.level !== 0) {
            writer.uint32(16).int32(message.level);
        }
        if (message.message !== '') {
            writer.uint32(26).string(message.message);
        }
        if (message.jsonPayload !== undefined) {
            Struct.encode(message.jsonPayload, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIncomingLogEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.level = reader.int32();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    message.jsonPayload = Struct.decode(reader, reader.uint32());
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
            message.jsonPayload = Struct.fromJSON(object.jsonPayload);
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
                ? Struct.toJSON(message.jsonPayload)
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
            message.jsonPayload = Struct.fromPartial(object.jsonPayload);
        }
        else {
            message.jsonPayload = undefined;
        }
        return message;
    },
};
const baseDestination = {};
export const Destination = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.logGroupId !== undefined) {
            writer.uint32(10).string(message.logGroupId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseLogLevel = { level: 0 };
export const LogLevel = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.level !== 0) {
            writer.uint32(8).int32(message.level);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
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
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
