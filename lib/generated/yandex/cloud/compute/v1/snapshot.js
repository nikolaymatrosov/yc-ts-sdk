"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snapshot_LabelsEntry = exports.Snapshot = exports.snapshot_StatusToJSON = exports.snapshot_StatusFromJSON = exports.Snapshot_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
var Snapshot_Status;
(function (Snapshot_Status) {
    Snapshot_Status[Snapshot_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Snapshot is being created. */
    Snapshot_Status[Snapshot_Status["CREATING"] = 1] = "CREATING";
    /** READY - Snapshot is ready to use. */
    Snapshot_Status[Snapshot_Status["READY"] = 2] = "READY";
    /** ERROR - Snapshot encountered a problem and cannot operate. */
    Snapshot_Status[Snapshot_Status["ERROR"] = 3] = "ERROR";
    /** DELETING - Snapshot is being deleted. */
    Snapshot_Status[Snapshot_Status["DELETING"] = 4] = "DELETING";
    Snapshot_Status[Snapshot_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Snapshot_Status = exports.Snapshot_Status || (exports.Snapshot_Status = {}));
function snapshot_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Snapshot_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Snapshot_Status.CREATING;
        case 2:
        case 'READY':
            return Snapshot_Status.READY;
        case 3:
        case 'ERROR':
            return Snapshot_Status.ERROR;
        case 4:
        case 'DELETING':
            return Snapshot_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Snapshot_Status.UNRECOGNIZED;
    }
}
exports.snapshot_StatusFromJSON = snapshot_StatusFromJSON;
function snapshot_StatusToJSON(object) {
    switch (object) {
        case Snapshot_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Snapshot_Status.CREATING:
            return 'CREATING';
        case Snapshot_Status.READY:
            return 'READY';
        case Snapshot_Status.ERROR:
            return 'ERROR';
        case Snapshot_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}
exports.snapshot_StatusToJSON = snapshot_StatusToJSON;
const baseSnapshot = {
    $type: 'yandex.cloud.compute.v1.Snapshot',
    id: '',
    folderId: '',
    name: '',
    description: '',
    storageSize: 0,
    diskSize: 0,
    productIds: '',
    status: 0,
    sourceDiskId: '',
};
exports.Snapshot = {
    $type: 'yandex.cloud.compute.v1.Snapshot',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Snapshot_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.Snapshot.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.storageSize !== 0) {
            writer.uint32(56).int64(message.storageSize);
        }
        if (message.diskSize !== 0) {
            writer.uint32(64).int64(message.diskSize);
        }
        for (const v of message.productIds) {
            writer.uint32(74).string(v);
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        if (message.sourceDiskId !== '') {
            writer.uint32(90).string(message.sourceDiskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSnapshot };
        message.labels = {};
        message.productIds = [];
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Snapshot_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.storageSize = longToNumber(reader.int64());
                    break;
                case 8:
                    message.diskSize = longToNumber(reader.int64());
                    break;
                case 9:
                    message.productIds.push(reader.string());
                    break;
                case 10:
                    message.status = reader.int32();
                    break;
                case 11:
                    message.sourceDiskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSnapshot };
        message.labels = {};
        message.productIds = [];
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
        if (object.storageSize !== undefined && object.storageSize !== null) {
            message.storageSize = Number(object.storageSize);
        }
        else {
            message.storageSize = 0;
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = Number(object.diskSize);
        }
        else {
            message.diskSize = 0;
        }
        if (object.productIds !== undefined && object.productIds !== null) {
            for (const e of object.productIds) {
                message.productIds.push(String(e));
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = snapshot_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.sourceDiskId !== undefined && object.sourceDiskId !== null) {
            message.sourceDiskId = String(object.sourceDiskId);
        }
        else {
            message.sourceDiskId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
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
        message.storageSize !== undefined &&
            (obj.storageSize = message.storageSize);
        message.diskSize !== undefined && (obj.diskSize = message.diskSize);
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        }
        else {
            obj.productIds = [];
        }
        message.status !== undefined &&
            (obj.status = snapshot_StatusToJSON(message.status));
        message.sourceDiskId !== undefined &&
            (obj.sourceDiskId = message.sourceDiskId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSnapshot };
        message.labels = {};
        message.productIds = [];
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
        if (object.storageSize !== undefined && object.storageSize !== null) {
            message.storageSize = object.storageSize;
        }
        else {
            message.storageSize = 0;
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = object.diskSize;
        }
        else {
            message.diskSize = 0;
        }
        if (object.productIds !== undefined && object.productIds !== null) {
            for (const e of object.productIds) {
                message.productIds.push(e);
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.sourceDiskId !== undefined && object.sourceDiskId !== null) {
            message.sourceDiskId = object.sourceDiskId;
        }
        else {
            message.sourceDiskId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Snapshot.$type, exports.Snapshot);
const baseSnapshot_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.Snapshot.LabelsEntry',
    key: '',
    value: '',
};
exports.Snapshot_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.Snapshot.LabelsEntry',
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
        const message = { ...baseSnapshot_LabelsEntry };
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
        const message = { ...baseSnapshot_LabelsEntry };
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
        const message = { ...baseSnapshot_LabelsEntry };
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
typeRegistry_1.messageTypeRegistry.set(exports.Snapshot_LabelsEntry.$type, exports.Snapshot_LabelsEntry);
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
