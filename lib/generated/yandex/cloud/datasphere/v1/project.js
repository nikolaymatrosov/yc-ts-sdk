/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.datasphere.v1';
export var Project_Settings_CommitMode;
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
})(Project_Settings_CommitMode || (Project_Settings_CommitMode = {}));
export function project_Settings_CommitModeFromJSON(object) {
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
export function project_Settings_CommitModeToJSON(object) {
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
const baseProject = { id: '', folderId: '', name: '', description: '' };
export const Project = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.settings !== undefined) {
            Project_Settings.encode(message.settings, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.settings = Project_Settings.decode(reader, reader.uint32());
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
            message.settings = Project_Settings.fromJSON(object.settings);
        }
        else {
            message.settings = undefined;
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
                ? Project_Settings.toJSON(message.settings)
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
            message.settings = Project_Settings.fromPartial(object.settings);
        }
        else {
            message.settings = undefined;
        }
        return message;
    },
};
const baseProject_Settings = {
    serviceAccountId: '',
    subnetId: '',
    dataProcClusterId: '',
    commitMode: 0,
};
export const Project_Settings = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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