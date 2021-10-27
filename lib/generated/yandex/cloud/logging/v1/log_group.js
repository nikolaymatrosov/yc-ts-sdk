"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogGroup_LabelsEntry = exports.LogGroup = exports.logGroup_StatusToJSON = exports.logGroup_StatusFromJSON = exports.LogGroup_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.logging.v1';
/** Possible log group statuses. */
var LogGroup_Status;
(function (LogGroup_Status) {
    /**
     * STATUS_UNSPECIFIED - Unknown status.
     *
     * Should never occur.
     */
    LogGroup_Status[LogGroup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Log group is creating. */
    LogGroup_Status[LogGroup_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Log group is ready to accept messages, */
    LogGroup_Status[LogGroup_Status["ACTIVE"] = 2] = "ACTIVE";
    /**
     * DELETING - Log group is being deleted.
     *
     * No messages will be accepted.
     */
    LogGroup_Status[LogGroup_Status["DELETING"] = 3] = "DELETING";
    /** ERROR - Log group is in failed state. */
    LogGroup_Status[LogGroup_Status["ERROR"] = 4] = "ERROR";
    LogGroup_Status[LogGroup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LogGroup_Status = exports.LogGroup_Status || (exports.LogGroup_Status = {}));
function logGroup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return LogGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return LogGroup_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return LogGroup_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return LogGroup_Status.DELETING;
        case 4:
        case 'ERROR':
            return LogGroup_Status.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LogGroup_Status.UNRECOGNIZED;
    }
}
exports.logGroup_StatusFromJSON = logGroup_StatusFromJSON;
function logGroup_StatusToJSON(object) {
    switch (object) {
        case LogGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case LogGroup_Status.CREATING:
            return 'CREATING';
        case LogGroup_Status.ACTIVE:
            return 'ACTIVE';
        case LogGroup_Status.DELETING:
            return 'DELETING';
        case LogGroup_Status.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}
exports.logGroup_StatusToJSON = logGroup_StatusToJSON;
const baseLogGroup = {
    $type: 'yandex.cloud.logging.v1.LogGroup',
    id: '',
    folderId: '',
    cloudId: '',
    name: '',
    description: '',
    status: 0,
};
exports.LogGroup = {
    $type: 'yandex.cloud.logging.v1.LogGroup',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.cloudId !== '') {
            writer.uint32(26).string(message.cloudId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.LogGroup_LabelsEntry.encode({
                $type: 'yandex.cloud.logging.v1.LogGroup.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(58).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.retentionPeriod !== undefined) {
            duration_1.Duration.encode(message.retentionPeriod, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogGroup };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.cloudId = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = exports.LogGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.retentionPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLogGroup };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = String(object.cloudId);
        }
        else {
            message.cloudId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = logGroup_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.retentionPeriod !== undefined &&
            object.retentionPeriod !== null) {
            message.retentionPeriod = duration_1.Duration.fromJSON(object.retentionPeriod);
        }
        else {
            message.retentionPeriod = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.status !== undefined &&
            (obj.status = logGroup_StatusToJSON(message.status));
        message.retentionPeriod !== undefined &&
            (obj.retentionPeriod = message.retentionPeriod
                ? duration_1.Duration.toJSON(message.retentionPeriod)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLogGroup };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = object.cloudId;
        }
        else {
            message.cloudId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.retentionPeriod !== undefined &&
            object.retentionPeriod !== null) {
            message.retentionPeriod = duration_1.Duration.fromPartial(object.retentionPeriod);
        }
        else {
            message.retentionPeriod = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogGroup.$type, exports.LogGroup);
const baseLogGroup_LabelsEntry = {
    $type: 'yandex.cloud.logging.v1.LogGroup.LabelsEntry',
    key: '',
    value: '',
};
exports.LogGroup_LabelsEntry = {
    $type: 'yandex.cloud.logging.v1.LogGroup.LabelsEntry',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogGroup_LabelsEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLogGroup_LabelsEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLogGroup_LabelsEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LogGroup_LabelsEntry.$type, exports.LogGroup_LabelsEntry);
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
