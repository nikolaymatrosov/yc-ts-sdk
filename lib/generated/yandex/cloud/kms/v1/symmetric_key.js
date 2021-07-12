/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.kms.v1';
/** Supported symmetric encryption algorithms. */
export var SymmetricAlgorithm;
(function (SymmetricAlgorithm) {
    SymmetricAlgorithm[SymmetricAlgorithm["SYMMETRIC_ALGORITHM_UNSPECIFIED"] = 0] = "SYMMETRIC_ALGORITHM_UNSPECIFIED";
    /** AES_128 - AES algorithm with 128-bit keys. */
    SymmetricAlgorithm[SymmetricAlgorithm["AES_128"] = 1] = "AES_128";
    /** AES_192 - AES algorithm with 192-bit keys. */
    SymmetricAlgorithm[SymmetricAlgorithm["AES_192"] = 2] = "AES_192";
    /** AES_256 - AES algorithm with 256-bit keys. */
    SymmetricAlgorithm[SymmetricAlgorithm["AES_256"] = 3] = "AES_256";
    SymmetricAlgorithm[SymmetricAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SymmetricAlgorithm || (SymmetricAlgorithm = {}));
export function symmetricAlgorithmFromJSON(object) {
    switch (object) {
        case 0:
        case 'SYMMETRIC_ALGORITHM_UNSPECIFIED':
            return SymmetricAlgorithm.SYMMETRIC_ALGORITHM_UNSPECIFIED;
        case 1:
        case 'AES_128':
            return SymmetricAlgorithm.AES_128;
        case 2:
        case 'AES_192':
            return SymmetricAlgorithm.AES_192;
        case 3:
        case 'AES_256':
            return SymmetricAlgorithm.AES_256;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SymmetricAlgorithm.UNRECOGNIZED;
    }
}
export function symmetricAlgorithmToJSON(object) {
    switch (object) {
        case SymmetricAlgorithm.SYMMETRIC_ALGORITHM_UNSPECIFIED:
            return 'SYMMETRIC_ALGORITHM_UNSPECIFIED';
        case SymmetricAlgorithm.AES_128:
            return 'AES_128';
        case SymmetricAlgorithm.AES_192:
            return 'AES_192';
        case SymmetricAlgorithm.AES_256:
            return 'AES_256';
        default:
            return 'UNKNOWN';
    }
}
export var SymmetricKey_Status;
(function (SymmetricKey_Status) {
    SymmetricKey_Status[SymmetricKey_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - The key is being created. */
    SymmetricKey_Status[SymmetricKey_Status["CREATING"] = 1] = "CREATING";
    /**
     * ACTIVE - The key is active and can be used for encryption and decryption.
     * Can be set to INACTIVE using the [SymmetricKeyService.Update] method.
     */
    SymmetricKey_Status[SymmetricKey_Status["ACTIVE"] = 2] = "ACTIVE";
    /**
     * INACTIVE - The key is inactive and unusable.
     * Can be set to ACTIVE using the [SymmetricKeyService.Update] method.
     */
    SymmetricKey_Status[SymmetricKey_Status["INACTIVE"] = 3] = "INACTIVE";
    SymmetricKey_Status[SymmetricKey_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SymmetricKey_Status || (SymmetricKey_Status = {}));
export function symmetricKey_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return SymmetricKey_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return SymmetricKey_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return SymmetricKey_Status.ACTIVE;
        case 3:
        case 'INACTIVE':
            return SymmetricKey_Status.INACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SymmetricKey_Status.UNRECOGNIZED;
    }
}
export function symmetricKey_StatusToJSON(object) {
    switch (object) {
        case SymmetricKey_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case SymmetricKey_Status.CREATING:
            return 'CREATING';
        case SymmetricKey_Status.ACTIVE:
            return 'ACTIVE';
        case SymmetricKey_Status.INACTIVE:
            return 'INACTIVE';
        default:
            return 'UNKNOWN';
    }
}
/** Possible version status. */
export var SymmetricKeyVersion_Status;
(function (SymmetricKeyVersion_Status) {
    SymmetricKeyVersion_Status[SymmetricKeyVersion_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** ACTIVE - The version is active and can be used for encryption and decryption. */
    SymmetricKeyVersion_Status[SymmetricKeyVersion_Status["ACTIVE"] = 1] = "ACTIVE";
    /**
     * SCHEDULED_FOR_DESTRUCTION - The version is scheduled for destruction, the time when it will be destroyed
     * is specified in the [SymmetricKeyVersion.destroy_at] field.
     */
    SymmetricKeyVersion_Status[SymmetricKeyVersion_Status["SCHEDULED_FOR_DESTRUCTION"] = 2] = "SCHEDULED_FOR_DESTRUCTION";
    /** DESTROYED - The version is destroyed and cannot be recovered. */
    SymmetricKeyVersion_Status[SymmetricKeyVersion_Status["DESTROYED"] = 3] = "DESTROYED";
    SymmetricKeyVersion_Status[SymmetricKeyVersion_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SymmetricKeyVersion_Status || (SymmetricKeyVersion_Status = {}));
export function symmetricKeyVersion_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return SymmetricKeyVersion_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'ACTIVE':
            return SymmetricKeyVersion_Status.ACTIVE;
        case 2:
        case 'SCHEDULED_FOR_DESTRUCTION':
            return SymmetricKeyVersion_Status.SCHEDULED_FOR_DESTRUCTION;
        case 3:
        case 'DESTROYED':
            return SymmetricKeyVersion_Status.DESTROYED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SymmetricKeyVersion_Status.UNRECOGNIZED;
    }
}
export function symmetricKeyVersion_StatusToJSON(object) {
    switch (object) {
        case SymmetricKeyVersion_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case SymmetricKeyVersion_Status.ACTIVE:
            return 'ACTIVE';
        case SymmetricKeyVersion_Status.SCHEDULED_FOR_DESTRUCTION:
            return 'SCHEDULED_FOR_DESTRUCTION';
        case SymmetricKeyVersion_Status.DESTROYED:
            return 'DESTROYED';
        default:
            return 'UNKNOWN';
    }
}
const baseSymmetricKey = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    defaultAlgorithm: 0,
    deletionProtection: false,
};
export const SymmetricKey = {
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
            SymmetricKey_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.primaryVersion !== undefined) {
            SymmetricKeyVersion.encode(message.primaryVersion, writer.uint32(66).fork()).ldelim();
        }
        if (message.defaultAlgorithm !== 0) {
            writer.uint32(72).int32(message.defaultAlgorithm);
        }
        if (message.rotatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.rotatedAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.rotationPeriod !== undefined) {
            Duration.encode(message.rotationPeriod, writer.uint32(90).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSymmetricKey };
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
                    const entry6 = SymmetricKey_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.primaryVersion = SymmetricKeyVersion.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.defaultAlgorithm = reader.int32();
                    break;
                case 10:
                    message.rotatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.rotationPeriod = Duration.decode(reader, reader.uint32());
                    break;
                case 12:
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
        const message = { ...baseSymmetricKey };
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
        if (object.status !== undefined && object.status !== null) {
            message.status = symmetricKey_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.primaryVersion !== undefined &&
            object.primaryVersion !== null) {
            message.primaryVersion = SymmetricKeyVersion.fromJSON(object.primaryVersion);
        }
        else {
            message.primaryVersion = undefined;
        }
        if (object.defaultAlgorithm !== undefined &&
            object.defaultAlgorithm !== null) {
            message.defaultAlgorithm = symmetricAlgorithmFromJSON(object.defaultAlgorithm);
        }
        else {
            message.defaultAlgorithm = 0;
        }
        if (object.rotatedAt !== undefined && object.rotatedAt !== null) {
            message.rotatedAt = fromJsonTimestamp(object.rotatedAt);
        }
        else {
            message.rotatedAt = undefined;
        }
        if (object.rotationPeriod !== undefined &&
            object.rotationPeriod !== null) {
            message.rotationPeriod = Duration.fromJSON(object.rotationPeriod);
        }
        else {
            message.rotationPeriod = undefined;
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
        message.status !== undefined &&
            (obj.status = symmetricKey_StatusToJSON(message.status));
        message.primaryVersion !== undefined &&
            (obj.primaryVersion = message.primaryVersion
                ? SymmetricKeyVersion.toJSON(message.primaryVersion)
                : undefined);
        message.defaultAlgorithm !== undefined &&
            (obj.defaultAlgorithm = symmetricAlgorithmToJSON(message.defaultAlgorithm));
        message.rotatedAt !== undefined &&
            (obj.rotatedAt = message.rotatedAt.toISOString());
        message.rotationPeriod !== undefined &&
            (obj.rotationPeriod = message.rotationPeriod
                ? Duration.toJSON(message.rotationPeriod)
                : undefined);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSymmetricKey };
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.primaryVersion !== undefined &&
            object.primaryVersion !== null) {
            message.primaryVersion = SymmetricKeyVersion.fromPartial(object.primaryVersion);
        }
        else {
            message.primaryVersion = undefined;
        }
        if (object.defaultAlgorithm !== undefined &&
            object.defaultAlgorithm !== null) {
            message.defaultAlgorithm = object.defaultAlgorithm;
        }
        else {
            message.defaultAlgorithm = 0;
        }
        if (object.rotatedAt !== undefined && object.rotatedAt !== null) {
            message.rotatedAt = object.rotatedAt;
        }
        else {
            message.rotatedAt = undefined;
        }
        if (object.rotationPeriod !== undefined &&
            object.rotationPeriod !== null) {
            message.rotationPeriod = Duration.fromPartial(object.rotationPeriod);
        }
        else {
            message.rotationPeriod = undefined;
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
const baseSymmetricKey_LabelsEntry = { key: '', value: '' };
export const SymmetricKey_LabelsEntry = {
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
            ...baseSymmetricKey_LabelsEntry,
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
            ...baseSymmetricKey_LabelsEntry,
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
            ...baseSymmetricKey_LabelsEntry,
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
const baseSymmetricKeyVersion = {
    id: '',
    keyId: '',
    status: 0,
    algorithm: 0,
    primary: false,
};
export const SymmetricKeyVersion = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.keyId !== '') {
            writer.uint32(18).string(message.keyId);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.algorithm !== 0) {
            writer.uint32(32).int32(message.algorithm);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.primary === true) {
            writer.uint32(48).bool(message.primary);
        }
        if (message.destroyAt !== undefined) {
            Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSymmetricKeyVersion };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.keyId = reader.string();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.algorithm = reader.int32();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.primary = reader.bool();
                    break;
                case 7:
                    message.destroyAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSymmetricKeyVersion };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = symmetricKeyVersion_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.algorithm !== undefined && object.algorithm !== null) {
            message.algorithm = symmetricAlgorithmFromJSON(object.algorithm);
        }
        else {
            message.algorithm = 0;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.primary !== undefined && object.primary !== null) {
            message.primary = Boolean(object.primary);
        }
        else {
            message.primary = false;
        }
        if (object.destroyAt !== undefined && object.destroyAt !== null) {
            message.destroyAt = fromJsonTimestamp(object.destroyAt);
        }
        else {
            message.destroyAt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.status !== undefined &&
            (obj.status = symmetricKeyVersion_StatusToJSON(message.status));
        message.algorithm !== undefined &&
            (obj.algorithm = symmetricAlgorithmToJSON(message.algorithm));
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.primary !== undefined && (obj.primary = message.primary);
        message.destroyAt !== undefined &&
            (obj.destroyAt = message.destroyAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSymmetricKeyVersion };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.algorithm !== undefined && object.algorithm !== null) {
            message.algorithm = object.algorithm;
        }
        else {
            message.algorithm = 0;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.primary !== undefined && object.primary !== null) {
            message.primary = object.primary;
        }
        else {
            message.primary = false;
        }
        if (object.destroyAt !== undefined && object.destroyAt !== null) {
            message.destroyAt = object.destroyAt;
        }
        else {
            message.destroyAt = undefined;
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
