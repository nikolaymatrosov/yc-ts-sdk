/* eslint-disable */
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.serverless.containers.v1';
export var Container_Status;
(function (Container_Status) {
    Container_Status[Container_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Container_Status[Container_Status["CREATING"] = 1] = "CREATING";
    Container_Status[Container_Status["ACTIVE"] = 2] = "ACTIVE";
    Container_Status[Container_Status["DELETING"] = 3] = "DELETING";
    Container_Status[Container_Status["ERROR"] = 4] = "ERROR";
    Container_Status[Container_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Container_Status || (Container_Status = {}));
export function container_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Container_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Container_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Container_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return Container_Status.DELETING;
        case 4:
        case 'ERROR':
            return Container_Status.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Container_Status.UNRECOGNIZED;
    }
}
export function container_StatusToJSON(object) {
    switch (object) {
        case Container_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Container_Status.CREATING:
            return 'CREATING';
        case Container_Status.ACTIVE:
            return 'ACTIVE';
        case Container_Status.DELETING:
            return 'DELETING';
        case Container_Status.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}
export var Revision_Status;
(function (Revision_Status) {
    Revision_Status[Revision_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Revision_Status[Revision_Status["CREATING"] = 1] = "CREATING";
    Revision_Status[Revision_Status["ACTIVE"] = 2] = "ACTIVE";
    Revision_Status[Revision_Status["OBSOLETE"] = 3] = "OBSOLETE";
    Revision_Status[Revision_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Revision_Status || (Revision_Status = {}));
export function revision_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Revision_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Revision_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Revision_Status.ACTIVE;
        case 3:
        case 'OBSOLETE':
            return Revision_Status.OBSOLETE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Revision_Status.UNRECOGNIZED;
    }
}
export function revision_StatusToJSON(object) {
    switch (object) {
        case Revision_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Revision_Status.CREATING:
            return 'CREATING';
        case Revision_Status.ACTIVE:
            return 'ACTIVE';
        case Revision_Status.OBSOLETE:
            return 'OBSOLETE';
        default:
            return 'UNKNOWN';
    }
}
const baseContainer = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    url: '',
    status: 0,
};
export const Container = {
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
        Object.entries(message.labels).forEach(([key, value]) => {
            Container_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.url !== '') {
            writer.uint32(66).string(message.url);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContainer };
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Container_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 8:
                    message.url = reader.string();
                    break;
                case 9:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseContainer };
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
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = container_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
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
        message.url !== undefined && (obj.url = message.url);
        message.status !== undefined &&
            (obj.status = container_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseContainer };
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
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        return message;
    },
};
const baseContainer_LabelsEntry = { key: '', value: '' };
export const Container_LabelsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseContainer_LabelsEntry,
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
            ...baseContainer_LabelsEntry,
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
            ...baseContainer_LabelsEntry,
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
const baseRevision = {
    id: '',
    containerId: '',
    description: '',
    concurrency: 0,
    serviceAccountId: '',
    status: 0,
};
export const Revision = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.containerId !== '') {
            writer.uint32(18).string(message.containerId);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.image !== undefined) {
            Image.encode(message.image, writer.uint32(42).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(50).fork()).ldelim();
        }
        if (message.executionTimeout !== undefined) {
            Duration.encode(message.executionTimeout, writer.uint32(58).fork()).ldelim();
        }
        if (message.concurrency !== 0) {
            writer.uint32(64).int64(message.concurrency);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(74).string(message.serviceAccountId);
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRevision };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.containerId = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.image = Image.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.executionTimeout = Duration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.concurrency = longToNumber(reader.int64());
                    break;
                case 9:
                    message.serviceAccountId = reader.string();
                    break;
                case 10:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRevision };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        }
        else {
            message.containerId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = Image.fromJSON(object.image);
        }
        else {
            message.image = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.executionTimeout !== undefined &&
            object.executionTimeout !== null) {
            message.executionTimeout = Duration.fromJSON(object.executionTimeout);
        }
        else {
            message.executionTimeout = undefined;
        }
        if (object.concurrency !== undefined && object.concurrency !== null) {
            message.concurrency = Number(object.concurrency);
        }
        else {
            message.concurrency = 0;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = revision_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.image !== undefined &&
            (obj.image = message.image
                ? Image.toJSON(message.image)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.executionTimeout !== undefined &&
            (obj.executionTimeout = message.executionTimeout
                ? Duration.toJSON(message.executionTimeout)
                : undefined);
        message.concurrency !== undefined &&
            (obj.concurrency = message.concurrency);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.status !== undefined &&
            (obj.status = revision_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRevision };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        }
        else {
            message.containerId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.image !== undefined && object.image !== null) {
            message.image = Image.fromPartial(object.image);
        }
        else {
            message.image = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.executionTimeout !== undefined &&
            object.executionTimeout !== null) {
            message.executionTimeout = Duration.fromPartial(object.executionTimeout);
        }
        else {
            message.executionTimeout = undefined;
        }
        if (object.concurrency !== undefined && object.concurrency !== null) {
            message.concurrency = object.concurrency;
        }
        else {
            message.concurrency = 0;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        return message;
    },
};
const baseImage = { imageUrl: '', imageDigest: '', workingDir: '' };
export const Image = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.imageUrl !== '') {
            writer.uint32(10).string(message.imageUrl);
        }
        if (message.imageDigest !== '') {
            writer.uint32(18).string(message.imageDigest);
        }
        if (message.command !== undefined) {
            Command.encode(message.command, writer.uint32(26).fork()).ldelim();
        }
        if (message.args !== undefined) {
            Args.encode(message.args, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.environment).forEach(([key, value]) => {
            Image_EnvironmentEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.workingDir !== '') {
            writer.uint32(50).string(message.workingDir);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImage };
        message.environment = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageUrl = reader.string();
                    break;
                case 2:
                    message.imageDigest = reader.string();
                    break;
                case 3:
                    message.command = Command.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.args = Args.decode(reader, reader.uint32());
                    break;
                case 5:
                    const entry5 = Image_EnvironmentEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.environment[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.workingDir = reader.string();
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
        message.environment = {};
        if (object.imageUrl !== undefined && object.imageUrl !== null) {
            message.imageUrl = String(object.imageUrl);
        }
        else {
            message.imageUrl = '';
        }
        if (object.imageDigest !== undefined && object.imageDigest !== null) {
            message.imageDigest = String(object.imageDigest);
        }
        else {
            message.imageDigest = '';
        }
        if (object.command !== undefined && object.command !== null) {
            message.command = Command.fromJSON(object.command);
        }
        else {
            message.command = undefined;
        }
        if (object.args !== undefined && object.args !== null) {
            message.args = Args.fromJSON(object.args);
        }
        else {
            message.args = undefined;
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                message.environment[key] = String(value);
            });
        }
        if (object.workingDir !== undefined && object.workingDir !== null) {
            message.workingDir = String(object.workingDir);
        }
        else {
            message.workingDir = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
        message.imageDigest !== undefined &&
            (obj.imageDigest = message.imageDigest);
        message.command !== undefined &&
            (obj.command = message.command
                ? Command.toJSON(message.command)
                : undefined);
        message.args !== undefined &&
            (obj.args = message.args ? Args.toJSON(message.args) : undefined);
        obj.environment = {};
        if (message.environment) {
            Object.entries(message.environment).forEach(([k, v]) => {
                obj.environment[k] = v;
            });
        }
        message.workingDir !== undefined &&
            (obj.workingDir = message.workingDir);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseImage };
        message.environment = {};
        if (object.imageUrl !== undefined && object.imageUrl !== null) {
            message.imageUrl = object.imageUrl;
        }
        else {
            message.imageUrl = '';
        }
        if (object.imageDigest !== undefined && object.imageDigest !== null) {
            message.imageDigest = object.imageDigest;
        }
        else {
            message.imageDigest = '';
        }
        if (object.command !== undefined && object.command !== null) {
            message.command = Command.fromPartial(object.command);
        }
        else {
            message.command = undefined;
        }
        if (object.args !== undefined && object.args !== null) {
            message.args = Args.fromPartial(object.args);
        }
        else {
            message.args = undefined;
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.environment[key] = String(value);
                }
            });
        }
        if (object.workingDir !== undefined && object.workingDir !== null) {
            message.workingDir = object.workingDir;
        }
        else {
            message.workingDir = '';
        }
        return message;
    },
};
const baseImage_EnvironmentEntry = { key: '', value: '' };
export const Image_EnvironmentEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseImage_EnvironmentEntry,
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
            ...baseImage_EnvironmentEntry,
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
            ...baseImage_EnvironmentEntry,
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
const baseCommand = { command: '' };
export const Command = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.command) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCommand };
        message.command = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.command.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCommand };
        message.command = [];
        if (object.command !== undefined && object.command !== null) {
            for (const e of object.command) {
                message.command.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.command) {
            obj.command = message.command.map((e) => e);
        }
        else {
            obj.command = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCommand };
        message.command = [];
        if (object.command !== undefined && object.command !== null) {
            for (const e of object.command) {
                message.command.push(e);
            }
        }
        return message;
    },
};
const baseArgs = { args: '' };
export const Args = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.args) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseArgs };
        message.args = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseArgs };
        message.args = [];
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.args) {
            obj.args = message.args.map((e) => e);
        }
        else {
            obj.args = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseArgs };
        message.args = [];
        if (object.args !== undefined && object.args !== null) {
            for (const e of object.args) {
                message.args.push(e);
            }
        }
        return message;
    },
};
const baseResources = { memory: 0, cores: 0, coreFraction: 0 };
export const Resources = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.memory !== 0) {
            writer.uint32(8).int64(message.memory);
        }
        if (message.cores !== 0) {
            writer.uint32(16).int64(message.cores);
        }
        if (message.coreFraction !== 0) {
            writer.uint32(24).int64(message.coreFraction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResources };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memory = longToNumber(reader.int64());
                    break;
                case 2:
                    message.cores = longToNumber(reader.int64());
                    break;
                case 3:
                    message.coreFraction = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResources };
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = Number(object.memory);
        }
        else {
            message.memory = 0;
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = Number(object.cores);
        }
        else {
            message.cores = 0;
        }
        if (object.coreFraction !== undefined && object.coreFraction !== null) {
            message.coreFraction = Number(object.coreFraction);
        }
        else {
            message.coreFraction = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.memory !== undefined && (obj.memory = message.memory);
        message.cores !== undefined && (obj.cores = message.cores);
        message.coreFraction !== undefined &&
            (obj.coreFraction = message.coreFraction);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResources };
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = object.memory;
        }
        else {
            message.memory = 0;
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = object.cores;
        }
        else {
            message.cores = 0;
        }
        if (object.coreFraction !== undefined && object.coreFraction !== null) {
            message.coreFraction = object.coreFraction;
        }
        else {
            message.coreFraction = 0;
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
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
