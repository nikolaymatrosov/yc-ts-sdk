/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.lockbox.v1';
export var Secret_Status;
(function (Secret_Status) {
    Secret_Status[Secret_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - The secret is being created. */
    Secret_Status[Secret_Status["CREATING"] = 1] = "CREATING";
    /**
     * ACTIVE - The secret is active and the secret payload can be accessed.
     *
     * Can be set to INACTIVE using the [SecretService.Deactivate] method.
     */
    Secret_Status[Secret_Status["ACTIVE"] = 2] = "ACTIVE";
    /**
     * INACTIVE - The secret is inactive and unusable.
     *
     * Can be set to ACTIVE using the [SecretService.Deactivate] method.
     */
    Secret_Status[Secret_Status["INACTIVE"] = 3] = "INACTIVE";
    Secret_Status[Secret_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Secret_Status || (Secret_Status = {}));
export function secret_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Secret_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Secret_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Secret_Status.ACTIVE;
        case 3:
        case 'INACTIVE':
            return Secret_Status.INACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Secret_Status.UNRECOGNIZED;
    }
}
export function secret_StatusToJSON(object) {
    switch (object) {
        case Secret_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Secret_Status.CREATING:
            return 'CREATING';
        case Secret_Status.ACTIVE:
            return 'ACTIVE';
        case Secret_Status.INACTIVE:
            return 'INACTIVE';
        default:
            return 'UNKNOWN';
    }
}
export var Version_Status;
(function (Version_Status) {
    Version_Status[Version_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** ACTIVE - The version is active and the secret payload can be accessed. */
    Version_Status[Version_Status["ACTIVE"] = 1] = "ACTIVE";
    /**
     * SCHEDULED_FOR_DESTRUCTION - The version is scheduled for destruction, the time when it will be destroyed
     * is specified in the [Version.destroy_at] field.
     */
    Version_Status[Version_Status["SCHEDULED_FOR_DESTRUCTION"] = 2] = "SCHEDULED_FOR_DESTRUCTION";
    /** DESTROYED - The version is destroyed and cannot be recovered. */
    Version_Status[Version_Status["DESTROYED"] = 3] = "DESTROYED";
    Version_Status[Version_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Version_Status || (Version_Status = {}));
export function version_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Version_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'ACTIVE':
            return Version_Status.ACTIVE;
        case 2:
        case 'SCHEDULED_FOR_DESTRUCTION':
            return Version_Status.SCHEDULED_FOR_DESTRUCTION;
        case 3:
        case 'DESTROYED':
            return Version_Status.DESTROYED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Version_Status.UNRECOGNIZED;
    }
}
export function version_StatusToJSON(object) {
    switch (object) {
        case Version_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Version_Status.ACTIVE:
            return 'ACTIVE';
        case Version_Status.SCHEDULED_FOR_DESTRUCTION:
            return 'SCHEDULED_FOR_DESTRUCTION';
        case Version_Status.DESTROYED:
            return 'DESTROYED';
        default:
            return 'UNKNOWN';
    }
}
const baseSecret = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    kmsKeyId: '',
    status: 0,
    deletionProtection: false,
};
export const Secret = {
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
            Secret_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.kmsKeyId !== '') {
            writer.uint32(58).string(message.kmsKeyId);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.currentVersion !== undefined) {
            Version.encode(message.currentVersion, writer.uint32(74).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(80).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecret };
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
                    const entry6 = Secret_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.kmsKeyId = reader.string();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.currentVersion = Version.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSecret };
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
        if (object.kmsKeyId !== undefined && object.kmsKeyId !== null) {
            message.kmsKeyId = String(object.kmsKeyId);
        }
        else {
            message.kmsKeyId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = secret_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.currentVersion !== undefined &&
            object.currentVersion !== null) {
            message.currentVersion = Version.fromJSON(object.currentVersion);
        }
        else {
            message.currentVersion = undefined;
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = Boolean(object.deletionProtection);
        }
        else {
            message.deletionProtection = false;
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
        message.kmsKeyId !== undefined && (obj.kmsKeyId = message.kmsKeyId);
        message.status !== undefined &&
            (obj.status = secret_StatusToJSON(message.status));
        message.currentVersion !== undefined &&
            (obj.currentVersion = message.currentVersion
                ? Version.toJSON(message.currentVersion)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSecret };
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
        if (object.kmsKeyId !== undefined && object.kmsKeyId !== null) {
            message.kmsKeyId = object.kmsKeyId;
        }
        else {
            message.kmsKeyId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.currentVersion !== undefined &&
            object.currentVersion !== null) {
            message.currentVersion = Version.fromPartial(object.currentVersion);
        }
        else {
            message.currentVersion = undefined;
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = object.deletionProtection;
        }
        else {
            message.deletionProtection = false;
        }
        return message;
    },
};
const baseSecret_LabelsEntry = { key: '', value: '' };
export const Secret_LabelsEntry = {
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
        const message = { ...baseSecret_LabelsEntry };
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
        const message = { ...baseSecret_LabelsEntry };
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
        const message = { ...baseSecret_LabelsEntry };
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
const baseVersion = {
    id: '',
    secretId: '',
    description: '',
    status: 0,
    payloadEntryKeys: '',
};
export const Version = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.secretId !== '') {
            writer.uint32(18).string(message.secretId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.destroyAt !== undefined) {
            Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        for (const v of message.payloadEntryKeys) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVersion };
        message.payloadEntryKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.secretId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.destroyAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                case 7:
                    message.payloadEntryKeys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVersion };
        message.payloadEntryKeys = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.destroyAt !== undefined && object.destroyAt !== null) {
            message.destroyAt = fromJsonTimestamp(object.destroyAt);
        }
        else {
            message.destroyAt = undefined;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = version_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.payloadEntryKeys !== undefined &&
            object.payloadEntryKeys !== null) {
            for (const e of object.payloadEntryKeys) {
                message.payloadEntryKeys.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.destroyAt !== undefined &&
            (obj.destroyAt = message.destroyAt.toISOString());
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = version_StatusToJSON(message.status));
        if (message.payloadEntryKeys) {
            obj.payloadEntryKeys = message.payloadEntryKeys.map((e) => e);
        }
        else {
            obj.payloadEntryKeys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVersion };
        message.payloadEntryKeys = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.destroyAt !== undefined && object.destroyAt !== null) {
            message.destroyAt = object.destroyAt;
        }
        else {
            message.destroyAt = undefined;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.payloadEntryKeys !== undefined &&
            object.payloadEntryKeys !== null) {
            for (const e of object.payloadEntryKeys) {
                message.payloadEntryKeys.push(e);
            }
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
