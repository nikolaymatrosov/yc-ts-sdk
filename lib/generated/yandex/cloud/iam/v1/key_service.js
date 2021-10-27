"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyServiceClient = exports.KeyServiceService = exports.ListKeyOperationsResponse = exports.ListKeyOperationsRequest = exports.DeleteKeyMetadata = exports.DeleteKeyRequest = exports.UpdateKeyMetadata = exports.UpdateKeyRequest = exports.CreateKeyResponse = exports.CreateKeyRequest = exports.ListKeysResponse = exports.ListKeysRequest = exports.GetKeyRequest = exports.keyFormatToJSON = exports.keyFormatFromJSON = exports.KeyFormat = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const key_1 = require("../../../../yandex/cloud/iam/v1/key");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iam.v1';
var KeyFormat;
(function (KeyFormat) {
    /** PEM_FILE - Privacy-Enhanced Mail (PEM) format. Default value. */
    KeyFormat[KeyFormat["PEM_FILE"] = 0] = "PEM_FILE";
    KeyFormat[KeyFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(KeyFormat = exports.KeyFormat || (exports.KeyFormat = {}));
function keyFormatFromJSON(object) {
    switch (object) {
        case 0:
        case 'PEM_FILE':
            return KeyFormat.PEM_FILE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return KeyFormat.UNRECOGNIZED;
    }
}
exports.keyFormatFromJSON = keyFormatFromJSON;
function keyFormatToJSON(object) {
    switch (object) {
        case KeyFormat.PEM_FILE:
            return 'PEM_FILE';
        default:
            return 'UNKNOWN';
    }
}
exports.keyFormatToJSON = keyFormatToJSON;
const baseGetKeyRequest = { keyId: '', format: 0 };
exports.GetKeyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.format !== 0) {
            writer.uint32(16).int32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetKeyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.format = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetKeyRequest };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = keyFormatFromJSON(object.format);
        }
        else {
            message.format = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.format !== undefined &&
            (obj.format = keyFormatToJSON(message.format));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetKeyRequest };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = 0;
        }
        return message;
    },
};
const baseListKeysRequest = {
    format: 0,
    serviceAccountId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListKeysRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.format !== 0) {
            writer.uint32(8).int32(message.format);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(18).string(message.serviceAccountId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListKeysRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.format = reader.int32();
                    break;
                case 2:
                    message.serviceAccountId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListKeysRequest };
        if (object.format !== undefined && object.format !== null) {
            message.format = keyFormatFromJSON(object.format);
        }
        else {
            message.format = 0;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.format !== undefined &&
            (obj.format = keyFormatToJSON(message.format));
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListKeysRequest };
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = 0;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
};
const baseListKeysResponse = { nextPageToken: '' };
exports.ListKeysResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.keys) {
            key_1.Key.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListKeysResponse };
        message.keys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(key_1.Key.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListKeysResponse };
        message.keys = [];
        if (object.keys !== undefined && object.keys !== null) {
            for (const e of object.keys) {
                message.keys.push(key_1.Key.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => (e ? key_1.Key.toJSON(e) : undefined));
        }
        else {
            obj.keys = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListKeysResponse };
        message.keys = [];
        if (object.keys !== undefined && object.keys !== null) {
            for (const e of object.keys) {
                message.keys.push(key_1.Key.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
const baseCreateKeyRequest = {
    serviceAccountId: '',
    description: '',
    format: 0,
    keyAlgorithm: 0,
};
exports.CreateKeyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.format !== 0) {
            writer.uint32(24).int32(message.format);
        }
        if (message.keyAlgorithm !== 0) {
            writer.uint32(32).int32(message.keyAlgorithm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateKeyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.format = reader.int32();
                    break;
                case 4:
                    message.keyAlgorithm = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateKeyRequest };
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = keyFormatFromJSON(object.format);
        }
        else {
            message.format = 0;
        }
        if (object.keyAlgorithm !== undefined && object.keyAlgorithm !== null) {
            message.keyAlgorithm = (0, key_1.key_AlgorithmFromJSON)(object.keyAlgorithm);
        }
        else {
            message.keyAlgorithm = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.format !== undefined &&
            (obj.format = keyFormatToJSON(message.format));
        message.keyAlgorithm !== undefined &&
            (obj.keyAlgorithm = (0, key_1.key_AlgorithmToJSON)(message.keyAlgorithm));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateKeyRequest };
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = 0;
        }
        if (object.keyAlgorithm !== undefined && object.keyAlgorithm !== null) {
            message.keyAlgorithm = object.keyAlgorithm;
        }
        else {
            message.keyAlgorithm = 0;
        }
        return message;
    },
};
const baseCreateKeyResponse = { privateKey: '' };
exports.CreateKeyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== undefined) {
            key_1.Key.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        if (message.privateKey !== '') {
            writer.uint32(18).string(message.privateKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateKeyResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = key_1.Key.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.privateKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateKeyResponse };
        if (object.key !== undefined && object.key !== null) {
            message.key = key_1.Key.fromJSON(object.key);
        }
        else {
            message.key = undefined;
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = String(object.privateKey);
        }
        else {
            message.privateKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = message.key ? key_1.Key.toJSON(message.key) : undefined);
        message.privateKey !== undefined &&
            (obj.privateKey = message.privateKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateKeyResponse };
        if (object.key !== undefined && object.key !== null) {
            message.key = key_1.Key.fromPartial(object.key);
        }
        else {
            message.key = undefined;
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = object.privateKey;
        }
        else {
            message.privateKey = '';
        }
        return message;
    },
};
const baseUpdateKeyRequest = { keyId: '', description: '' };
exports.UpdateKeyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateKeyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateKeyRequest };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateKeyRequest };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        return message;
    },
};
const baseUpdateKeyMetadata = { keyId: '' };
exports.UpdateKeyMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateKeyMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateKeyMetadata };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateKeyMetadata };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        return message;
    },
};
const baseDeleteKeyRequest = { keyId: '' };
exports.DeleteKeyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteKeyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteKeyRequest };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteKeyRequest };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        return message;
    },
};
const baseDeleteKeyMetadata = { keyId: '' };
exports.DeleteKeyMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteKeyMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteKeyMetadata };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteKeyMetadata };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        return message;
    },
};
const baseListKeyOperationsRequest = {
    keyId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListKeyOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListKeyOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
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
            ...baseListKeyOperationsRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListKeyOperationsRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
};
const baseListKeyOperationsResponse = { nextPageToken: '' };
exports.ListKeyOperationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListKeyOperationsResponse,
        };
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
            ...baseListKeyOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListKeyOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
/** A set of methods for managing Key resources. */
exports.KeyServiceService = {
    /**
     * Returns the specified Key resource.
     *
     * To get the list of available Key resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.KeyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(key_1.Key.encode(value).finish()),
        responseDeserialize: (value) => key_1.Key.decode(value),
    },
    /** Retrieves the list of Key resources for the specified service account. */
    list: {
        path: '/yandex.cloud.iam.v1.KeyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListKeysResponse.decode(value),
    },
    /** Creates a key pair for the specified service account. */
    create: {
        path: '/yandex.cloud.iam.v1.KeyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateKeyResponse.decode(value),
    },
    /** Updates the specified key pair. */
    update: {
        path: '/yandex.cloud.iam.v1.KeyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified key pair. */
    delete: {
        path: '/yandex.cloud.iam.v1.KeyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified key. */
    listOperations: {
        path: '/yandex.cloud.iam.v1.KeyService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListKeyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListKeyOperationsResponse.decode(value),
    },
};
exports.KeyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.KeyServiceService, 'yandex.cloud.iam.v1.KeyService');
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
