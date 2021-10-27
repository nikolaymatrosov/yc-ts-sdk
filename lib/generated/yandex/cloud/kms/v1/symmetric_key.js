"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymmetricKeyVersion = exports.SymmetricKey_LabelsEntry = exports.SymmetricKey = exports.symmetricKeyVersion_StatusToJSON = exports.symmetricKeyVersion_StatusFromJSON = exports.SymmetricKeyVersion_Status = exports.symmetricKey_StatusToJSON = exports.symmetricKey_StatusFromJSON = exports.SymmetricKey_Status = exports.symmetricAlgorithmToJSON = exports.symmetricAlgorithmFromJSON = exports.SymmetricAlgorithm = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.kms.v1';
/** Supported symmetric encryption algorithms. */
var SymmetricAlgorithm;
(function (SymmetricAlgorithm) {
    SymmetricAlgorithm[SymmetricAlgorithm["SYMMETRIC_ALGORITHM_UNSPECIFIED"] = 0] = "SYMMETRIC_ALGORITHM_UNSPECIFIED";
    /** AES_128 - AES algorithm with 128-bit keys. */
    SymmetricAlgorithm[SymmetricAlgorithm["AES_128"] = 1] = "AES_128";
    /** AES_192 - AES algorithm with 192-bit keys. */
    SymmetricAlgorithm[SymmetricAlgorithm["AES_192"] = 2] = "AES_192";
    /** AES_256 - AES algorithm with 256-bit keys. */
    SymmetricAlgorithm[SymmetricAlgorithm["AES_256"] = 3] = "AES_256";
    /** AES_256_HSM - AES algorithm with 256-bit keys hosted by HSM */
    SymmetricAlgorithm[SymmetricAlgorithm["AES_256_HSM"] = 4] = "AES_256_HSM";
    SymmetricAlgorithm[SymmetricAlgorithm["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SymmetricAlgorithm = exports.SymmetricAlgorithm || (exports.SymmetricAlgorithm = {}));
function symmetricAlgorithmFromJSON(object) {
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
        case 4:
        case 'AES_256_HSM':
            return SymmetricAlgorithm.AES_256_HSM;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SymmetricAlgorithm.UNRECOGNIZED;
    }
}
exports.symmetricAlgorithmFromJSON = symmetricAlgorithmFromJSON;
function symmetricAlgorithmToJSON(object) {
    switch (object) {
        case SymmetricAlgorithm.SYMMETRIC_ALGORITHM_UNSPECIFIED:
            return 'SYMMETRIC_ALGORITHM_UNSPECIFIED';
        case SymmetricAlgorithm.AES_128:
            return 'AES_128';
        case SymmetricAlgorithm.AES_192:
            return 'AES_192';
        case SymmetricAlgorithm.AES_256:
            return 'AES_256';
        case SymmetricAlgorithm.AES_256_HSM:
            return 'AES_256_HSM';
        default:
            return 'UNKNOWN';
    }
}
exports.symmetricAlgorithmToJSON = symmetricAlgorithmToJSON;
var SymmetricKey_Status;
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
})(SymmetricKey_Status = exports.SymmetricKey_Status || (exports.SymmetricKey_Status = {}));
function symmetricKey_StatusFromJSON(object) {
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
exports.symmetricKey_StatusFromJSON = symmetricKey_StatusFromJSON;
function symmetricKey_StatusToJSON(object) {
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
exports.symmetricKey_StatusToJSON = symmetricKey_StatusToJSON;
/** Possible version status. */
var SymmetricKeyVersion_Status;
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
})(SymmetricKeyVersion_Status = exports.SymmetricKeyVersion_Status || (exports.SymmetricKeyVersion_Status = {}));
function symmetricKeyVersion_StatusFromJSON(object) {
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
exports.symmetricKeyVersion_StatusFromJSON = symmetricKeyVersion_StatusFromJSON;
function symmetricKeyVersion_StatusToJSON(object) {
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
exports.symmetricKeyVersion_StatusToJSON = symmetricKeyVersion_StatusToJSON;
const baseSymmetricKey = {
    $type: 'yandex.cloud.kms.v1.SymmetricKey',
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    defaultAlgorithm: 0,
    deletionProtection: false,
};
exports.SymmetricKey = {
    $type: 'yandex.cloud.kms.v1.SymmetricKey',
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
            exports.SymmetricKey_LabelsEntry.encode({
                $type: 'yandex.cloud.kms.v1.SymmetricKey.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.primaryVersion !== undefined) {
            exports.SymmetricKeyVersion.encode(message.primaryVersion, writer.uint32(66).fork()).ldelim();
        }
        if (message.defaultAlgorithm !== 0) {
            writer.uint32(72).int32(message.defaultAlgorithm);
        }
        if (message.rotatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.rotatedAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.rotationPeriod !== undefined) {
            duration_1.Duration.encode(message.rotationPeriod, writer.uint32(90).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.SymmetricKey_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.primaryVersion = exports.SymmetricKeyVersion.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.defaultAlgorithm = reader.int32();
                    break;
                case 10:
                    message.rotatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.rotationPeriod = duration_1.Duration.decode(reader, reader.uint32());
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
            message.primaryVersion = exports.SymmetricKeyVersion.fromJSON(object.primaryVersion);
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
            message.rotationPeriod = duration_1.Duration.fromJSON(object.rotationPeriod);
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
                ? exports.SymmetricKeyVersion.toJSON(message.primaryVersion)
                : undefined);
        message.defaultAlgorithm !== undefined &&
            (obj.defaultAlgorithm = symmetricAlgorithmToJSON(message.defaultAlgorithm));
        message.rotatedAt !== undefined &&
            (obj.rotatedAt = message.rotatedAt.toISOString());
        message.rotationPeriod !== undefined &&
            (obj.rotationPeriod = message.rotationPeriod
                ? duration_1.Duration.toJSON(message.rotationPeriod)
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
            message.primaryVersion = exports.SymmetricKeyVersion.fromPartial(object.primaryVersion);
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
            message.rotationPeriod = duration_1.Duration.fromPartial(object.rotationPeriod);
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
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricKey.$type, exports.SymmetricKey);
const baseSymmetricKey_LabelsEntry = {
    $type: 'yandex.cloud.kms.v1.SymmetricKey.LabelsEntry',
    key: '',
    value: '',
};
exports.SymmetricKey_LabelsEntry = {
    $type: 'yandex.cloud.kms.v1.SymmetricKey.LabelsEntry',
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
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricKey_LabelsEntry.$type, exports.SymmetricKey_LabelsEntry);
const baseSymmetricKeyVersion = {
    $type: 'yandex.cloud.kms.v1.SymmetricKeyVersion',
    id: '',
    keyId: '',
    status: 0,
    algorithm: 0,
    primary: false,
    hostedByHsm: false,
};
exports.SymmetricKeyVersion = {
    $type: 'yandex.cloud.kms.v1.SymmetricKeyVersion',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.primary === true) {
            writer.uint32(48).bool(message.primary);
        }
        if (message.destroyAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.hostedByHsm === true) {
            writer.uint32(64).bool(message.hostedByHsm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.primary = reader.bool();
                    break;
                case 7:
                    message.destroyAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.hostedByHsm = reader.bool();
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
        if (object.hostedByHsm !== undefined && object.hostedByHsm !== null) {
            message.hostedByHsm = Boolean(object.hostedByHsm);
        }
        else {
            message.hostedByHsm = false;
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
        message.hostedByHsm !== undefined &&
            (obj.hostedByHsm = message.hostedByHsm);
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
        if (object.hostedByHsm !== undefined && object.hostedByHsm !== null) {
            message.hostedByHsm = object.hostedByHsm;
        }
        else {
            message.hostedByHsm = false;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SymmetricKeyVersion.$type, exports.SymmetricKeyVersion);
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
