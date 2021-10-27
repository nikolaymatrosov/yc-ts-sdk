"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_Limits = exports.Project_Settings = exports.Project = exports.project_Settings_CommitModeToJSON = exports.project_Settings_CommitModeFromJSON = exports.Project_Settings_CommitMode = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.datasphere.v1';
var Project_Settings_CommitMode;
(function (Project_Settings_CommitMode) {
    Project_Settings_CommitMode[Project_Settings_CommitMode["COMMIT_MODE_UNSPECIFIED"] = 0] = "COMMIT_MODE_UNSPECIFIED";
    /** STANDARD - Commit happens after the execution of a cell or group of cells or after completion with an error. */
    Project_Settings_CommitMode[Project_Settings_CommitMode["STANDARD"] = 1] = "STANDARD";
    /**
     * AUTO - Commit happens periodically.
     * Also, automatic saving of state occurs when switching to another type of computing resource.
     */
    Project_Settings_CommitMode[Project_Settings_CommitMode["AUTO"] = 2] = "AUTO";
    Project_Settings_CommitMode[Project_Settings_CommitMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Project_Settings_CommitMode = exports.Project_Settings_CommitMode || (exports.Project_Settings_CommitMode = {}));
function project_Settings_CommitModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'COMMIT_MODE_UNSPECIFIED':
            return Project_Settings_CommitMode.COMMIT_MODE_UNSPECIFIED;
        case 1:
        case 'STANDARD':
            return Project_Settings_CommitMode.STANDARD;
        case 2:
        case 'AUTO':
            return Project_Settings_CommitMode.AUTO;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Project_Settings_CommitMode.UNRECOGNIZED;
    }
}
exports.project_Settings_CommitModeFromJSON = project_Settings_CommitModeFromJSON;
function project_Settings_CommitModeToJSON(object) {
    switch (object) {
        case Project_Settings_CommitMode.COMMIT_MODE_UNSPECIFIED:
            return 'COMMIT_MODE_UNSPECIFIED';
        case Project_Settings_CommitMode.STANDARD:
            return 'STANDARD';
        case Project_Settings_CommitMode.AUTO:
            return 'AUTO';
        default:
            return 'UNKNOWN';
    }
}
exports.project_Settings_CommitModeToJSON = project_Settings_CommitModeToJSON;
const baseProject = {
    $type: 'yandex.cloud.datasphere.v1.Project',
    id: '',
    folderId: '',
    name: '',
    description: '',
};
exports.Project = {
    $type: 'yandex.cloud.datasphere.v1.Project',
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
        if (message.settings !== undefined) {
            exports.Project_Settings.encode(message.settings, writer.uint32(50).fork()).ldelim();
        }
        if (message.limits !== undefined) {
            exports.Project_Limits.encode(message.limits, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProject };
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
                    message.settings = exports.Project_Settings.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.limits = exports.Project_Limits.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseProject };
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = exports.Project_Settings.fromJSON(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = exports.Project_Limits.fromJSON(object.limits);
        }
        else {
            message.limits = undefined;
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
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.Project_Settings.toJSON(message.settings)
                : undefined);
        message.limits !== undefined &&
            (obj.limits = message.limits
                ? exports.Project_Limits.toJSON(message.limits)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseProject };
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = exports.Project_Settings.fromPartial(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = exports.Project_Limits.fromPartial(object.limits);
        }
        else {
            message.limits = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Project.$type, exports.Project);
const baseProject_Settings = {
    $type: 'yandex.cloud.datasphere.v1.Project.Settings',
    serviceAccountId: '',
    subnetId: '',
    dataProcClusterId: '',
    commitMode: 0,
};
exports.Project_Settings = {
    $type: 'yandex.cloud.datasphere.v1.Project.Settings',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.dataProcClusterId !== '') {
            writer.uint32(26).string(message.dataProcClusterId);
        }
        if (message.commitMode !== 0) {
            writer.uint32(32).int32(message.commitMode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProject_Settings };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.dataProcClusterId = reader.string();
                    break;
                case 4:
                    message.commitMode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseProject_Settings };
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        if (object.dataProcClusterId !== undefined &&
            object.dataProcClusterId !== null) {
            message.dataProcClusterId = String(object.dataProcClusterId);
        }
        else {
            message.dataProcClusterId = '';
        }
        if (object.commitMode !== undefined && object.commitMode !== null) {
            message.commitMode = project_Settings_CommitModeFromJSON(object.commitMode);
        }
        else {
            message.commitMode = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.dataProcClusterId !== undefined &&
            (obj.dataProcClusterId = message.dataProcClusterId);
        message.commitMode !== undefined &&
            (obj.commitMode = project_Settings_CommitModeToJSON(message.commitMode));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseProject_Settings };
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        if (object.dataProcClusterId !== undefined &&
            object.dataProcClusterId !== null) {
            message.dataProcClusterId = object.dataProcClusterId;
        }
        else {
            message.dataProcClusterId = '';
        }
        if (object.commitMode !== undefined && object.commitMode !== null) {
            message.commitMode = object.commitMode;
        }
        else {
            message.commitMode = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Project_Settings.$type, exports.Project_Settings);
const baseProject_Limits = {
    $type: 'yandex.cloud.datasphere.v1.Project.Limits',
};
exports.Project_Limits = {
    $type: 'yandex.cloud.datasphere.v1.Project.Limits',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxUnitsPerHour !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxUnitsPerHour,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxUnitsPerExecution !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxUnitsPerExecution,
            }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProject_Limits };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.maxUnitsPerHour = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.maxUnitsPerExecution = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseProject_Limits };
        if (object.maxUnitsPerHour !== undefined &&
            object.maxUnitsPerHour !== null) {
            message.maxUnitsPerHour = Number(object.maxUnitsPerHour);
        }
        else {
            message.maxUnitsPerHour = undefined;
        }
        if (object.maxUnitsPerExecution !== undefined &&
            object.maxUnitsPerExecution !== null) {
            message.maxUnitsPerExecution = Number(object.maxUnitsPerExecution);
        }
        else {
            message.maxUnitsPerExecution = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxUnitsPerHour !== undefined &&
            (obj.maxUnitsPerHour = message.maxUnitsPerHour);
        message.maxUnitsPerExecution !== undefined &&
            (obj.maxUnitsPerExecution = message.maxUnitsPerExecution);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseProject_Limits };
        if (object.maxUnitsPerHour !== undefined &&
            object.maxUnitsPerHour !== null) {
            message.maxUnitsPerHour = object.maxUnitsPerHour;
        }
        else {
            message.maxUnitsPerHour = undefined;
        }
        if (object.maxUnitsPerExecution !== undefined &&
            object.maxUnitsPerExecution !== null) {
            message.maxUnitsPerExecution = object.maxUnitsPerExecution;
        }
        else {
            message.maxUnitsPerExecution = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Project_Limits.$type, exports.Project_Limits);
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
