"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskPlacementPolicy = exports.Disk_LabelsEntry = exports.Disk = exports.disk_StatusToJSON = exports.disk_StatusFromJSON = exports.Disk_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
var Disk_Status;
(function (Disk_Status) {
    Disk_Status[Disk_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Disk is being created. */
    Disk_Status[Disk_Status["CREATING"] = 1] = "CREATING";
    /** READY - Disk is ready to use. */
    Disk_Status[Disk_Status["READY"] = 2] = "READY";
    /** ERROR - Disk encountered a problem and cannot operate. */
    Disk_Status[Disk_Status["ERROR"] = 3] = "ERROR";
    /** DELETING - Disk is being deleted. */
    Disk_Status[Disk_Status["DELETING"] = 4] = "DELETING";
    Disk_Status[Disk_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Disk_Status = exports.Disk_Status || (exports.Disk_Status = {}));
function disk_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Disk_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Disk_Status.CREATING;
        case 2:
        case 'READY':
            return Disk_Status.READY;
        case 3:
        case 'ERROR':
            return Disk_Status.ERROR;
        case 4:
        case 'DELETING':
            return Disk_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Disk_Status.UNRECOGNIZED;
    }
}
exports.disk_StatusFromJSON = disk_StatusFromJSON;
function disk_StatusToJSON(object) {
    switch (object) {
        case Disk_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Disk_Status.CREATING:
            return 'CREATING';
        case Disk_Status.READY:
            return 'READY';
        case Disk_Status.ERROR:
            return 'ERROR';
        case Disk_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}
exports.disk_StatusToJSON = disk_StatusToJSON;
const baseDisk = {
    $type: 'yandex.cloud.compute.v1.Disk',
    id: '',
    folderId: '',
    name: '',
    description: '',
    typeId: '',
    zoneId: '',
    size: 0,
    blockSize: 0,
    productIds: '',
    status: 0,
    instanceIds: '',
};
exports.Disk = {
    $type: 'yandex.cloud.compute.v1.Disk',
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
            exports.Disk_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.Disk.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.typeId !== '') {
            writer.uint32(58).string(message.typeId);
        }
        if (message.zoneId !== '') {
            writer.uint32(66).string(message.zoneId);
        }
        if (message.size !== 0) {
            writer.uint32(72).int64(message.size);
        }
        if (message.blockSize !== 0) {
            writer.uint32(120).int64(message.blockSize);
        }
        for (const v of message.productIds) {
            writer.uint32(82).string(v);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        if (message.sourceImageId !== undefined) {
            writer.uint32(98).string(message.sourceImageId);
        }
        if (message.sourceSnapshotId !== undefined) {
            writer.uint32(106).string(message.sourceSnapshotId);
        }
        for (const v of message.instanceIds) {
            writer.uint32(114).string(v);
        }
        if (message.diskPlacementPolicy !== undefined) {
            exports.DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDisk };
        message.labels = {};
        message.productIds = [];
        message.instanceIds = [];
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
                    const entry6 = exports.Disk_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.typeId = reader.string();
                    break;
                case 8:
                    message.zoneId = reader.string();
                    break;
                case 9:
                    message.size = longToNumber(reader.int64());
                    break;
                case 15:
                    message.blockSize = longToNumber(reader.int64());
                    break;
                case 10:
                    message.productIds.push(reader.string());
                    break;
                case 11:
                    message.status = reader.int32();
                    break;
                case 12:
                    message.sourceImageId = reader.string();
                    break;
                case 13:
                    message.sourceSnapshotId = reader.string();
                    break;
                case 14:
                    message.instanceIds.push(reader.string());
                    break;
                case 16:
                    message.diskPlacementPolicy = exports.DiskPlacementPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDisk };
        message.labels = {};
        message.productIds = [];
        message.instanceIds = [];
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
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = String(object.typeId);
        }
        else {
            message.typeId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        if (object.blockSize !== undefined && object.blockSize !== null) {
            message.blockSize = Number(object.blockSize);
        }
        else {
            message.blockSize = 0;
        }
        if (object.productIds !== undefined && object.productIds !== null) {
            for (const e of object.productIds) {
                message.productIds.push(String(e));
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = disk_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.sourceImageId !== undefined &&
            object.sourceImageId !== null) {
            message.sourceImageId = String(object.sourceImageId);
        }
        else {
            message.sourceImageId = undefined;
        }
        if (object.sourceSnapshotId !== undefined &&
            object.sourceSnapshotId !== null) {
            message.sourceSnapshotId = String(object.sourceSnapshotId);
        }
        else {
            message.sourceSnapshotId = undefined;
        }
        if (object.instanceIds !== undefined && object.instanceIds !== null) {
            for (const e of object.instanceIds) {
                message.instanceIds.push(String(e));
            }
        }
        if (object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null) {
            message.diskPlacementPolicy = exports.DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy);
        }
        else {
            message.diskPlacementPolicy = undefined;
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
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.size !== undefined && (obj.size = message.size);
        message.blockSize !== undefined && (obj.blockSize = message.blockSize);
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        }
        else {
            obj.productIds = [];
        }
        message.status !== undefined &&
            (obj.status = disk_StatusToJSON(message.status));
        message.sourceImageId !== undefined &&
            (obj.sourceImageId = message.sourceImageId);
        message.sourceSnapshotId !== undefined &&
            (obj.sourceSnapshotId = message.sourceSnapshotId);
        if (message.instanceIds) {
            obj.instanceIds = message.instanceIds.map((e) => e);
        }
        else {
            obj.instanceIds = [];
        }
        message.diskPlacementPolicy !== undefined &&
            (obj.diskPlacementPolicy = message.diskPlacementPolicy
                ? exports.DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDisk };
        message.labels = {};
        message.productIds = [];
        message.instanceIds = [];
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
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = object.typeId;
        }
        else {
            message.typeId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
        }
        if (object.blockSize !== undefined && object.blockSize !== null) {
            message.blockSize = object.blockSize;
        }
        else {
            message.blockSize = 0;
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
        if (object.sourceImageId !== undefined &&
            object.sourceImageId !== null) {
            message.sourceImageId = object.sourceImageId;
        }
        else {
            message.sourceImageId = undefined;
        }
        if (object.sourceSnapshotId !== undefined &&
            object.sourceSnapshotId !== null) {
            message.sourceSnapshotId = object.sourceSnapshotId;
        }
        else {
            message.sourceSnapshotId = undefined;
        }
        if (object.instanceIds !== undefined && object.instanceIds !== null) {
            for (const e of object.instanceIds) {
                message.instanceIds.push(e);
            }
        }
        if (object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null) {
            message.diskPlacementPolicy = exports.DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy);
        }
        else {
            message.diskPlacementPolicy = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Disk.$type, exports.Disk);
const baseDisk_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.Disk.LabelsEntry',
    key: '',
    value: '',
};
exports.Disk_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.Disk.LabelsEntry',
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
        const message = { ...baseDisk_LabelsEntry };
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
        const message = { ...baseDisk_LabelsEntry };
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
        const message = { ...baseDisk_LabelsEntry };
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
typeRegistry_1.messageTypeRegistry.set(exports.Disk_LabelsEntry.$type, exports.Disk_LabelsEntry);
const baseDiskPlacementPolicy = {
    $type: 'yandex.cloud.compute.v1.DiskPlacementPolicy',
    placementGroupId: '',
};
exports.DiskPlacementPolicy = {
    $type: 'yandex.cloud.compute.v1.DiskPlacementPolicy',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDiskPlacementPolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDiskPlacementPolicy };
        if (object.placementGroupId !== undefined &&
            object.placementGroupId !== null) {
            message.placementGroupId = String(object.placementGroupId);
        }
        else {
            message.placementGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDiskPlacementPolicy };
        if (object.placementGroupId !== undefined &&
            object.placementGroupId !== null) {
            message.placementGroupId = object.placementGroupId;
        }
        else {
            message.placementGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DiskPlacementPolicy.$type, exports.DiskPlacementPolicy);
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
