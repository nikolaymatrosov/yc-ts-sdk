"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalePolicy_FixedScale = exports.ScalePolicy = exports.Host = exports.HostGroup_LabelsEntry = exports.HostGroup = exports.host_StatusToJSON = exports.host_StatusFromJSON = exports.Host_Status = exports.hostGroup_StatusToJSON = exports.hostGroup_StatusFromJSON = exports.HostGroup_Status = exports.maintenancePolicyToJSON = exports.maintenancePolicyFromJSON = exports.MaintenancePolicy = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
var MaintenancePolicy;
(function (MaintenancePolicy) {
    MaintenancePolicy[MaintenancePolicy["MAINTENANCE_POLICY_UNSPECIFIED"] = 0] = "MAINTENANCE_POLICY_UNSPECIFIED";
    /** RESTART - Restart instances on the same host after maintenance event. */
    MaintenancePolicy[MaintenancePolicy["RESTART"] = 1] = "RESTART";
    /** MIGRATE - Migrate instances to another host before maintenance event. */
    MaintenancePolicy[MaintenancePolicy["MIGRATE"] = 2] = "MIGRATE";
    MaintenancePolicy[MaintenancePolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MaintenancePolicy = exports.MaintenancePolicy || (exports.MaintenancePolicy = {}));
function maintenancePolicyFromJSON(object) {
    switch (object) {
        case 0:
        case 'MAINTENANCE_POLICY_UNSPECIFIED':
            return MaintenancePolicy.MAINTENANCE_POLICY_UNSPECIFIED;
        case 1:
        case 'RESTART':
            return MaintenancePolicy.RESTART;
        case 2:
        case 'MIGRATE':
            return MaintenancePolicy.MIGRATE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return MaintenancePolicy.UNRECOGNIZED;
    }
}
exports.maintenancePolicyFromJSON = maintenancePolicyFromJSON;
function maintenancePolicyToJSON(object) {
    switch (object) {
        case MaintenancePolicy.MAINTENANCE_POLICY_UNSPECIFIED:
            return 'MAINTENANCE_POLICY_UNSPECIFIED';
        case MaintenancePolicy.RESTART:
            return 'RESTART';
        case MaintenancePolicy.MIGRATE:
            return 'MIGRATE';
        default:
            return 'UNKNOWN';
    }
}
exports.maintenancePolicyToJSON = maintenancePolicyToJSON;
var HostGroup_Status;
(function (HostGroup_Status) {
    HostGroup_Status[HostGroup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    HostGroup_Status[HostGroup_Status["CREATING"] = 1] = "CREATING";
    HostGroup_Status[HostGroup_Status["READY"] = 2] = "READY";
    HostGroup_Status[HostGroup_Status["UPDATING"] = 3] = "UPDATING";
    HostGroup_Status[HostGroup_Status["DELETING"] = 4] = "DELETING";
    HostGroup_Status[HostGroup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HostGroup_Status = exports.HostGroup_Status || (exports.HostGroup_Status = {}));
function hostGroup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return HostGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return HostGroup_Status.CREATING;
        case 2:
        case 'READY':
            return HostGroup_Status.READY;
        case 3:
        case 'UPDATING':
            return HostGroup_Status.UPDATING;
        case 4:
        case 'DELETING':
            return HostGroup_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return HostGroup_Status.UNRECOGNIZED;
    }
}
exports.hostGroup_StatusFromJSON = hostGroup_StatusFromJSON;
function hostGroup_StatusToJSON(object) {
    switch (object) {
        case HostGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case HostGroup_Status.CREATING:
            return 'CREATING';
        case HostGroup_Status.READY:
            return 'READY';
        case HostGroup_Status.UPDATING:
            return 'UPDATING';
        case HostGroup_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}
exports.hostGroup_StatusToJSON = hostGroup_StatusToJSON;
var Host_Status;
(function (Host_Status) {
    Host_Status[Host_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Host_Status[Host_Status["UP"] = 1] = "UP";
    Host_Status[Host_Status["DOWN"] = 2] = "DOWN";
    Host_Status[Host_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Host_Status = exports.Host_Status || (exports.Host_Status = {}));
function host_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Host_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'UP':
            return Host_Status.UP;
        case 2:
        case 'DOWN':
            return Host_Status.DOWN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_Status.UNRECOGNIZED;
    }
}
exports.host_StatusFromJSON = host_StatusFromJSON;
function host_StatusToJSON(object) {
    switch (object) {
        case Host_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Host_Status.UP:
            return 'UP';
        case Host_Status.DOWN:
            return 'DOWN';
        default:
            return 'UNKNOWN';
    }
}
exports.host_StatusToJSON = host_StatusToJSON;
const baseHostGroup = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    status: 0,
    typeId: '',
    maintenancePolicy: 0,
};
exports.HostGroup = {
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
            exports.HostGroup_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.typeId !== '') {
            writer.uint32(74).string(message.typeId);
        }
        if (message.maintenancePolicy !== 0) {
            writer.uint32(80).int32(message.maintenancePolicy);
        }
        if (message.scalePolicy !== undefined) {
            exports.ScalePolicy.encode(message.scalePolicy, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHostGroup };
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
                    const entry6 = exports.HostGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.typeId = reader.string();
                    break;
                case 10:
                    message.maintenancePolicy = reader.int32();
                    break;
                case 11:
                    message.scalePolicy = exports.ScalePolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHostGroup };
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
            message.status = hostGroup_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = String(object.typeId);
        }
        else {
            message.typeId = '';
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = maintenancePolicyFromJSON(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = 0;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = exports.ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
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
            (obj.status = hostGroup_StatusToJSON(message.status));
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = maintenancePolicyToJSON(message.maintenancePolicy));
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? exports.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHostGroup };
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
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = object.typeId;
        }
        else {
            message.typeId = '';
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = object.maintenancePolicy;
        }
        else {
            message.maintenancePolicy = 0;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = exports.ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        return message;
    },
};
const baseHostGroup_LabelsEntry = { key: '', value: '' };
exports.HostGroup_LabelsEntry = {
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
            ...baseHostGroup_LabelsEntry,
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
            ...baseHostGroup_LabelsEntry,
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
            ...baseHostGroup_LabelsEntry,
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
const baseHost = { id: '', status: 0, serverId: '' };
exports.Host = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.serverId !== '') {
            writer.uint32(26).string(message.serverId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHost };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.serverId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHost };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = host_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.serverId !== undefined && object.serverId !== null) {
            message.serverId = String(object.serverId);
        }
        else {
            message.serverId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.status !== undefined &&
            (obj.status = host_StatusToJSON(message.status));
        message.serverId !== undefined && (obj.serverId = message.serverId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHost };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.serverId !== undefined && object.serverId !== null) {
            message.serverId = object.serverId;
        }
        else {
            message.serverId = '';
        }
        return message;
    },
};
const baseScalePolicy = {};
exports.ScalePolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fixedScale !== undefined) {
            exports.ScalePolicy_FixedScale.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalePolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixedScale = exports.ScalePolicy_FixedScale.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScalePolicy };
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = exports.ScalePolicy_FixedScale.fromJSON(object.fixedScale);
        }
        else {
            message.fixedScale = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? exports.ScalePolicy_FixedScale.toJSON(message.fixedScale)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScalePolicy };
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = exports.ScalePolicy_FixedScale.fromPartial(object.fixedScale);
        }
        else {
            message.fixedScale = undefined;
        }
        return message;
    },
};
const baseScalePolicy_FixedScale = { size: 0 };
exports.ScalePolicy_FixedScale = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_FixedScale,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
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
            ...baseScalePolicy_FixedScale,
        };
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = message.size);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScalePolicy_FixedScale,
        };
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
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
