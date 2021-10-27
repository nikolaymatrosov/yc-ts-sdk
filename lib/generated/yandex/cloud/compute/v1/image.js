"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Os = exports.Image_LabelsEntry = exports.Image = exports.os_TypeToJSON = exports.os_TypeFromJSON = exports.Os_Type = exports.image_StatusToJSON = exports.image_StatusFromJSON = exports.Image_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
var Image_Status;
(function (Image_Status) {
    Image_Status[Image_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Image is being created. */
    Image_Status[Image_Status["CREATING"] = 1] = "CREATING";
    /** READY - Image is ready to use. */
    Image_Status[Image_Status["READY"] = 2] = "READY";
    /** ERROR - Image encountered a problem and cannot operate. */
    Image_Status[Image_Status["ERROR"] = 3] = "ERROR";
    /** DELETING - Image is being deleted. */
    Image_Status[Image_Status["DELETING"] = 4] = "DELETING";
    Image_Status[Image_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Image_Status = exports.Image_Status || (exports.Image_Status = {}));
function image_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Image_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Image_Status.CREATING;
        case 2:
        case 'READY':
            return Image_Status.READY;
        case 3:
        case 'ERROR':
            return Image_Status.ERROR;
        case 4:
        case 'DELETING':
            return Image_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Image_Status.UNRECOGNIZED;
    }
}
exports.image_StatusFromJSON = image_StatusFromJSON;
function image_StatusToJSON(object) {
    switch (object) {
        case Image_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Image_Status.CREATING:
            return 'CREATING';
        case Image_Status.READY:
            return 'READY';
        case Image_Status.ERROR:
            return 'ERROR';
        case Image_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}
exports.image_StatusToJSON = image_StatusToJSON;
var Os_Type;
(function (Os_Type) {
    Os_Type[Os_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** LINUX - Linux operating system. */
    Os_Type[Os_Type["LINUX"] = 1] = "LINUX";
    /** WINDOWS - Windows operating system. */
    Os_Type[Os_Type["WINDOWS"] = 2] = "WINDOWS";
    Os_Type[Os_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Os_Type = exports.Os_Type || (exports.Os_Type = {}));
function os_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Os_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'LINUX':
            return Os_Type.LINUX;
        case 2:
        case 'WINDOWS':
            return Os_Type.WINDOWS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Os_Type.UNRECOGNIZED;
    }
}
exports.os_TypeFromJSON = os_TypeFromJSON;
function os_TypeToJSON(object) {
    switch (object) {
        case Os_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Os_Type.LINUX:
            return 'LINUX';
        case Os_Type.WINDOWS:
            return 'WINDOWS';
        default:
            return 'UNKNOWN';
    }
}
exports.os_TypeToJSON = os_TypeToJSON;
const baseImage = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    family: '',
    storageSize: 0,
    minDiskSize: 0,
    productIds: '',
    status: 0,
    pooled: false,
};
exports.Image = {
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
            exports.Image_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.family !== '') {
            writer.uint32(58).string(message.family);
        }
        if (message.storageSize !== 0) {
            writer.uint32(64).int64(message.storageSize);
        }
        if (message.minDiskSize !== 0) {
            writer.uint32(72).int64(message.minDiskSize);
        }
        for (const v of message.productIds) {
            writer.uint32(82).string(v);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        if (message.os !== undefined) {
            exports.Os.encode(message.os, writer.uint32(98).fork()).ldelim();
        }
        if (message.pooled === true) {
            writer.uint32(104).bool(message.pooled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImage };
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
                    const entry6 = exports.Image_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.family = reader.string();
                    break;
                case 8:
                    message.storageSize = longToNumber(reader.int64());
                    break;
                case 9:
                    message.minDiskSize = longToNumber(reader.int64());
                    break;
                case 10:
                    message.productIds.push(reader.string());
                    break;
                case 11:
                    message.status = reader.int32();
                    break;
                case 12:
                    message.os = exports.Os.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.pooled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseImage };
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
        if (object.family !== undefined && object.family !== null) {
            message.family = String(object.family);
        }
        else {
            message.family = '';
        }
        if (object.storageSize !== undefined && object.storageSize !== null) {
            message.storageSize = Number(object.storageSize);
        }
        else {
            message.storageSize = 0;
        }
        if (object.minDiskSize !== undefined && object.minDiskSize !== null) {
            message.minDiskSize = Number(object.minDiskSize);
        }
        else {
            message.minDiskSize = 0;
        }
        if (object.productIds !== undefined && object.productIds !== null) {
            for (const e of object.productIds) {
                message.productIds.push(String(e));
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = image_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.os !== undefined && object.os !== null) {
            message.os = exports.Os.fromJSON(object.os);
        }
        else {
            message.os = undefined;
        }
        if (object.pooled !== undefined && object.pooled !== null) {
            message.pooled = Boolean(object.pooled);
        }
        else {
            message.pooled = false;
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
        message.family !== undefined && (obj.family = message.family);
        message.storageSize !== undefined &&
            (obj.storageSize = message.storageSize);
        message.minDiskSize !== undefined &&
            (obj.minDiskSize = message.minDiskSize);
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        }
        else {
            obj.productIds = [];
        }
        message.status !== undefined &&
            (obj.status = image_StatusToJSON(message.status));
        message.os !== undefined &&
            (obj.os = message.os ? exports.Os.toJSON(message.os) : undefined);
        message.pooled !== undefined && (obj.pooled = message.pooled);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseImage };
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
        if (object.family !== undefined && object.family !== null) {
            message.family = object.family;
        }
        else {
            message.family = '';
        }
        if (object.storageSize !== undefined && object.storageSize !== null) {
            message.storageSize = object.storageSize;
        }
        else {
            message.storageSize = 0;
        }
        if (object.minDiskSize !== undefined && object.minDiskSize !== null) {
            message.minDiskSize = object.minDiskSize;
        }
        else {
            message.minDiskSize = 0;
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
        if (object.os !== undefined && object.os !== null) {
            message.os = exports.Os.fromPartial(object.os);
        }
        else {
            message.os = undefined;
        }
        if (object.pooled !== undefined && object.pooled !== null) {
            message.pooled = object.pooled;
        }
        else {
            message.pooled = false;
        }
        return message;
    },
};
const baseImage_LabelsEntry = { key: '', value: '' };
exports.Image_LabelsEntry = {
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
        const message = { ...baseImage_LabelsEntry };
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
        const message = { ...baseImage_LabelsEntry };
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
        const message = { ...baseImage_LabelsEntry };
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
const baseOs = { type: 0 };
exports.Os = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOs };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOs };
        if (object.type !== undefined && object.type !== null) {
            message.type = os_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = os_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOs };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
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
