"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskSpreadPlacementStrategy = exports.DiskPlacementGroup_LabelsEntry = exports.DiskPlacementGroup = exports.diskPlacementGroup_StatusToJSON = exports.diskPlacementGroup_StatusFromJSON = exports.DiskPlacementGroup_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
var DiskPlacementGroup_Status;
(function (DiskPlacementGroup_Status) {
    DiskPlacementGroup_Status[DiskPlacementGroup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    DiskPlacementGroup_Status[DiskPlacementGroup_Status["CREATING"] = 1] = "CREATING";
    DiskPlacementGroup_Status[DiskPlacementGroup_Status["READY"] = 2] = "READY";
    DiskPlacementGroup_Status[DiskPlacementGroup_Status["DELETING"] = 4] = "DELETING";
    DiskPlacementGroup_Status[DiskPlacementGroup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DiskPlacementGroup_Status = exports.DiskPlacementGroup_Status || (exports.DiskPlacementGroup_Status = {}));
function diskPlacementGroup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return DiskPlacementGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return DiskPlacementGroup_Status.CREATING;
        case 2:
        case 'READY':
            return DiskPlacementGroup_Status.READY;
        case 4:
        case 'DELETING':
            return DiskPlacementGroup_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DiskPlacementGroup_Status.UNRECOGNIZED;
    }
}
exports.diskPlacementGroup_StatusFromJSON = diskPlacementGroup_StatusFromJSON;
function diskPlacementGroup_StatusToJSON(object) {
    switch (object) {
        case DiskPlacementGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case DiskPlacementGroup_Status.CREATING:
            return 'CREATING';
        case DiskPlacementGroup_Status.READY:
            return 'READY';
        case DiskPlacementGroup_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}
exports.diskPlacementGroup_StatusToJSON = diskPlacementGroup_StatusToJSON;
const baseDiskPlacementGroup = {
    $type: 'yandex.cloud.compute.v1.DiskPlacementGroup',
    id: '',
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    status: 0,
};
exports.DiskPlacementGroup = {
    $type: 'yandex.cloud.compute.v1.DiskPlacementGroup',
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
            exports.DiskPlacementGroup_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        if (message.spreadPlacementStrategy !== undefined) {
            exports.DiskSpreadPlacementStrategy.encode(message.spreadPlacementStrategy, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDiskPlacementGroup };
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.DiskPlacementGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 11:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.spreadPlacementStrategy =
                        exports.DiskSpreadPlacementStrategy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDiskPlacementGroup };
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = diskPlacementGroup_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null) {
            message.spreadPlacementStrategy =
                exports.DiskSpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy);
        }
        else {
            message.spreadPlacementStrategy = undefined;
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.status !== undefined &&
            (obj.status = diskPlacementGroup_StatusToJSON(message.status));
        message.spreadPlacementStrategy !== undefined &&
            (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
                ? exports.DiskSpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDiskPlacementGroup };
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null) {
            message.spreadPlacementStrategy =
                exports.DiskSpreadPlacementStrategy.fromPartial(object.spreadPlacementStrategy);
        }
        else {
            message.spreadPlacementStrategy = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DiskPlacementGroup.$type, exports.DiskPlacementGroup);
const baseDiskPlacementGroup_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry',
    key: '',
    value: '',
};
exports.DiskPlacementGroup_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.DiskPlacementGroup.LabelsEntry',
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
        const message = {
            ...baseDiskPlacementGroup_LabelsEntry,
        };
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
        const message = {
            ...baseDiskPlacementGroup_LabelsEntry,
        };
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
        const message = {
            ...baseDiskPlacementGroup_LabelsEntry,
        };
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
typeRegistry_1.messageTypeRegistry.set(exports.DiskPlacementGroup_LabelsEntry.$type, exports.DiskPlacementGroup_LabelsEntry);
const baseDiskSpreadPlacementStrategy = {
    $type: 'yandex.cloud.compute.v1.DiskSpreadPlacementStrategy',
};
exports.DiskSpreadPlacementStrategy = {
    $type: 'yandex.cloud.compute.v1.DiskSpreadPlacementStrategy',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDiskSpreadPlacementStrategy,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseDiskSpreadPlacementStrategy,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseDiskSpreadPlacementStrategy,
        };
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DiskSpreadPlacementStrategy.$type, exports.DiskSpreadPlacementStrategy);
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
