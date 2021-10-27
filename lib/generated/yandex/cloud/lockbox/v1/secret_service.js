"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretServiceClient = exports.SecretServiceService = exports.ListSecretOperationsResponse = exports.ListSecretOperationsRequest = exports.CancelVersionDestructionMetadata = exports.CancelVersionDestructionRequest = exports.ScheduleVersionDestructionMetadata = exports.ScheduleVersionDestructionRequest = exports.ListVersionsResponse = exports.ListVersionsRequest = exports.AddVersionMetadata = exports.AddVersionRequest = exports.DeactivateSecretMetadata = exports.DeactivateSecretRequest = exports.ActivateSecretMetadata = exports.ActivateSecretRequest = exports.DeleteSecretMetadata = exports.DeleteSecretRequest = exports.UpdateSecretMetadata = exports.UpdateSecretRequest_LabelsEntry = exports.UpdateSecretRequest = exports.CreateSecretMetadata = exports.CreateSecretRequest_LabelsEntry = exports.CreateSecretRequest = exports.ListSecretsResponse = exports.ListSecretsRequest = exports.GetSecretRequest = exports.PayloadEntryChange = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../google/protobuf/duration");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const access_1 = require("../../../../yandex/cloud/access/access");
const secret_1 = require("../../../../yandex/cloud/lockbox/v1/secret");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.lockbox.v1';
const basePayloadEntryChange = { key: '' };
exports.PayloadEntryChange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.textValue !== undefined) {
            writer.uint32(18).string(message.textValue);
        }
        if (message.binaryValue !== undefined) {
            writer.uint32(26).bytes(message.binaryValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePayloadEntryChange };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.textValue = reader.string();
                    break;
                case 3:
                    message.binaryValue = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePayloadEntryChange };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.textValue !== undefined && object.textValue !== null) {
            message.textValue = String(object.textValue);
        }
        else {
            message.textValue = undefined;
        }
        if (object.binaryValue !== undefined && object.binaryValue !== null) {
            message.binaryValue = bytesFromBase64(object.binaryValue);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.textValue !== undefined && (obj.textValue = message.textValue);
        message.binaryValue !== undefined &&
            (obj.binaryValue =
                message.binaryValue !== undefined
                    ? base64FromBytes(message.binaryValue)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePayloadEntryChange };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.textValue !== undefined && object.textValue !== null) {
            message.textValue = object.textValue;
        }
        else {
            message.textValue = undefined;
        }
        if (object.binaryValue !== undefined && object.binaryValue !== null) {
            message.binaryValue = object.binaryValue;
        }
        else {
            message.binaryValue = undefined;
        }
        return message;
    },
};
const baseGetSecretRequest = { secretId: '' };
exports.GetSecretRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSecretRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetSecretRequest };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetSecretRequest };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        return message;
    },
};
const baseListSecretsRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListSecretsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
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
        const message = { ...baseListSecretsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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
        const message = { ...baseListSecretsRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListSecretsRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
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
const baseListSecretsResponse = { nextPageToken: '' };
exports.ListSecretsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.secrets) {
            secret_1.Secret.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSecretsResponse };
        message.secrets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secrets.push(secret_1.Secret.decode(reader, reader.uint32()));
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
        const message = { ...baseListSecretsResponse };
        message.secrets = [];
        if (object.secrets !== undefined && object.secrets !== null) {
            for (const e of object.secrets) {
                message.secrets.push(secret_1.Secret.fromJSON(e));
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
        if (message.secrets) {
            obj.secrets = message.secrets.map((e) => e ? secret_1.Secret.toJSON(e) : undefined);
        }
        else {
            obj.secrets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListSecretsResponse };
        message.secrets = [];
        if (object.secrets !== undefined && object.secrets !== null) {
            for (const e of object.secrets) {
                message.secrets.push(secret_1.Secret.fromPartial(e));
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
const baseCreateSecretRequest = {
    folderId: '',
    name: '',
    description: '',
    kmsKeyId: '',
    versionDescription: '',
    deletionProtection: false,
};
exports.CreateSecretRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateSecretRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.kmsKeyId !== '') {
            writer.uint32(42).string(message.kmsKeyId);
        }
        if (message.versionDescription !== '') {
            writer.uint32(50).string(message.versionDescription);
        }
        for (const v of message.versionPayloadEntries) {
            exports.PayloadEntryChange.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.deletionProtection === true) {
            writer.uint32(64).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSecretRequest };
        message.labels = {};
        message.versionPayloadEntries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateSecretRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.kmsKeyId = reader.string();
                    break;
                case 6:
                    message.versionDescription = reader.string();
                    break;
                case 7:
                    message.versionPayloadEntries.push(exports.PayloadEntryChange.decode(reader, reader.uint32()));
                    break;
                case 8:
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
        const message = { ...baseCreateSecretRequest };
        message.labels = {};
        message.versionPayloadEntries = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
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
        if (object.versionDescription !== undefined &&
            object.versionDescription !== null) {
            message.versionDescription = String(object.versionDescription);
        }
        else {
            message.versionDescription = '';
        }
        if (object.versionPayloadEntries !== undefined &&
            object.versionPayloadEntries !== null) {
            for (const e of object.versionPayloadEntries) {
                message.versionPayloadEntries.push(exports.PayloadEntryChange.fromJSON(e));
            }
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
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
        message.versionDescription !== undefined &&
            (obj.versionDescription = message.versionDescription);
        if (message.versionPayloadEntries) {
            obj.versionPayloadEntries = message.versionPayloadEntries.map((e) => e ? exports.PayloadEntryChange.toJSON(e) : undefined);
        }
        else {
            obj.versionPayloadEntries = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateSecretRequest };
        message.labels = {};
        message.versionPayloadEntries = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
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
        if (object.versionDescription !== undefined &&
            object.versionDescription !== null) {
            message.versionDescription = object.versionDescription;
        }
        else {
            message.versionDescription = '';
        }
        if (object.versionPayloadEntries !== undefined &&
            object.versionPayloadEntries !== null) {
            for (const e of object.versionPayloadEntries) {
                message.versionPayloadEntries.push(exports.PayloadEntryChange.fromPartial(e));
            }
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
const baseCreateSecretRequest_LabelsEntry = { key: '', value: '' };
exports.CreateSecretRequest_LabelsEntry = {
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
            ...baseCreateSecretRequest_LabelsEntry,
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
            ...baseCreateSecretRequest_LabelsEntry,
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
            ...baseCreateSecretRequest_LabelsEntry,
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
const baseCreateSecretMetadata = { secretId: '', versionId: '' };
exports.CreateSecretMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSecretMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateSecretMetadata };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateSecretMetadata };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        return message;
    },
};
const baseUpdateSecretRequest = {
    secretId: '',
    name: '',
    description: '',
    deletionProtection: false,
};
exports.UpdateSecretRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateSecretRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.deletionProtection === true) {
            writer.uint32(48).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateSecretRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateSecretRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
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
        const message = { ...baseUpdateSecretRequest };
        message.labels = {};
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateSecretRequest };
        message.labels = {};
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
const baseUpdateSecretRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateSecretRequest_LabelsEntry = {
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
            ...baseUpdateSecretRequest_LabelsEntry,
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
            ...baseUpdateSecretRequest_LabelsEntry,
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
            ...baseUpdateSecretRequest_LabelsEntry,
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
const baseUpdateSecretMetadata = { secretId: '' };
exports.UpdateSecretMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateSecretMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateSecretMetadata };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateSecretMetadata };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        return message;
    },
};
const baseDeleteSecretRequest = { secretId: '' };
exports.DeleteSecretRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSecretRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteSecretRequest };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteSecretRequest };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        return message;
    },
};
const baseDeleteSecretMetadata = { secretId: '' };
exports.DeleteSecretMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSecretMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteSecretMetadata };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteSecretMetadata };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        return message;
    },
};
const baseActivateSecretRequest = { secretId: '' };
exports.ActivateSecretRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseActivateSecretRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
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
            ...baseActivateSecretRequest,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseActivateSecretRequest,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        return message;
    },
};
const baseActivateSecretMetadata = { secretId: '' };
exports.ActivateSecretMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseActivateSecretMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
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
            ...baseActivateSecretMetadata,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseActivateSecretMetadata,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        return message;
    },
};
const baseDeactivateSecretRequest = { secretId: '' };
exports.DeactivateSecretRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeactivateSecretRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
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
            ...baseDeactivateSecretRequest,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeactivateSecretRequest,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        return message;
    },
};
const baseDeactivateSecretMetadata = { secretId: '' };
exports.DeactivateSecretMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeactivateSecretMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
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
            ...baseDeactivateSecretMetadata,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeactivateSecretMetadata,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        return message;
    },
};
const baseAddVersionRequest = {
    secretId: '',
    description: '',
    baseVersionId: '',
};
exports.AddVersionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.payloadEntries) {
            exports.PayloadEntryChange.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.baseVersionId !== '') {
            writer.uint32(34).string(message.baseVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddVersionRequest };
        message.payloadEntries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.payloadEntries.push(exports.PayloadEntryChange.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.baseVersionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddVersionRequest };
        message.payloadEntries = [];
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.payloadEntries !== undefined &&
            object.payloadEntries !== null) {
            for (const e of object.payloadEntries) {
                message.payloadEntries.push(exports.PayloadEntryChange.fromJSON(e));
            }
        }
        if (object.baseVersionId !== undefined &&
            object.baseVersionId !== null) {
            message.baseVersionId = String(object.baseVersionId);
        }
        else {
            message.baseVersionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.payloadEntries) {
            obj.payloadEntries = message.payloadEntries.map((e) => e ? exports.PayloadEntryChange.toJSON(e) : undefined);
        }
        else {
            obj.payloadEntries = [];
        }
        message.baseVersionId !== undefined &&
            (obj.baseVersionId = message.baseVersionId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddVersionRequest };
        message.payloadEntries = [];
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.payloadEntries !== undefined &&
            object.payloadEntries !== null) {
            for (const e of object.payloadEntries) {
                message.payloadEntries.push(exports.PayloadEntryChange.fromPartial(e));
            }
        }
        if (object.baseVersionId !== undefined &&
            object.baseVersionId !== null) {
            message.baseVersionId = object.baseVersionId;
        }
        else {
            message.baseVersionId = '';
        }
        return message;
    },
};
const baseAddVersionMetadata = { secretId: '', versionId: '' };
exports.AddVersionMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddVersionMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddVersionMetadata };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddVersionMetadata };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        return message;
    },
};
const baseListVersionsRequest = {
    secretId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListVersionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
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
        const message = { ...baseListVersionsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
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
        const message = { ...baseListVersionsRequest };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
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
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListVersionsRequest };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
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
const baseListVersionsResponse = { nextPageToken: '' };
exports.ListVersionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.versions) {
            secret_1.Version.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVersionsResponse };
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versions.push(secret_1.Version.decode(reader, reader.uint32()));
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
        const message = { ...baseListVersionsResponse };
        message.versions = [];
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(secret_1.Version.fromJSON(e));
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
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? secret_1.Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListVersionsResponse };
        message.versions = [];
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(secret_1.Version.fromPartial(e));
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
const baseScheduleVersionDestructionRequest = {
    secretId: '',
    versionId: '',
};
exports.ScheduleVersionDestructionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.pendingPeriod !== undefined) {
            duration_1.Duration.encode(message.pendingPeriod, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScheduleVersionDestructionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.pendingPeriod = duration_1.Duration.decode(reader, reader.uint32());
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
            ...baseScheduleVersionDestructionRequest,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.pendingPeriod !== undefined &&
            object.pendingPeriod !== null) {
            message.pendingPeriod = duration_1.Duration.fromJSON(object.pendingPeriod);
        }
        else {
            message.pendingPeriod = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.pendingPeriod !== undefined &&
            (obj.pendingPeriod = message.pendingPeriod
                ? duration_1.Duration.toJSON(message.pendingPeriod)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScheduleVersionDestructionRequest,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.pendingPeriod !== undefined &&
            object.pendingPeriod !== null) {
            message.pendingPeriod = duration_1.Duration.fromPartial(object.pendingPeriod);
        }
        else {
            message.pendingPeriod = undefined;
        }
        return message;
    },
};
const baseScheduleVersionDestructionMetadata = {
    secretId: '',
    versionId: '',
};
exports.ScheduleVersionDestructionMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.destroyAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.destroyAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScheduleVersionDestructionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.destroyAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            ...baseScheduleVersionDestructionMetadata,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
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
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.destroyAt !== undefined &&
            (obj.destroyAt = message.destroyAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScheduleVersionDestructionMetadata,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
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
const baseCancelVersionDestructionRequest = {
    secretId: '',
    versionId: '',
};
exports.CancelVersionDestructionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCancelVersionDestructionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
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
            ...baseCancelVersionDestructionRequest,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCancelVersionDestructionRequest,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        return message;
    },
};
const baseCancelVersionDestructionMetadata = {
    secretId: '',
    versionId: '',
};
exports.CancelVersionDestructionMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCancelVersionDestructionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
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
            ...baseCancelVersionDestructionMetadata,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCancelVersionDestructionMetadata,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        return message;
    },
};
const baseListSecretOperationsRequest = {
    secretId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListSecretOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
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
            ...baseListSecretOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
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
            ...baseListSecretOperationsRequest,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
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
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSecretOperationsRequest,
        };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
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
const baseListSecretOperationsResponse = { nextPageToken: '' };
exports.ListSecretOperationsResponse = {
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
            ...baseListSecretOperationsResponse,
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
            ...baseListSecretOperationsResponse,
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
            ...baseListSecretOperationsResponse,
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
/** A set of methods for managing secrets. */
exports.SecretServiceService = {
    /**
     * Returns the specified secret.
     *
     * To get the list of all available secrets, make a [List] request.
     * Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
     */
    get: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(secret_1.Secret.encode(value).finish()),
        responseDeserialize: (value) => secret_1.Secret.decode(value),
    },
    /** Retrieves the list of secrets in the specified folder. */
    list: {
        path: '/yandex.cloud.lockbox.v1.SecretService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSecretsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSecretsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSecretsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSecretsResponse.decode(value),
    },
    /** Creates a secret in the specified folder. */
    create: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified secret. */
    update: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified secret. */
    delete: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Activates the specified secret. */
    activate: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Activate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ActivateSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ActivateSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deactivates the specified secret. */
    deactivate: {
        path: '/yandex.cloud.lockbox.v1.SecretService/Deactivate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeactivateSecretRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeactivateSecretRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of versions of the specified secret. */
    listVersions: {
        path: '/yandex.cloud.lockbox.v1.SecretService/ListVersions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListVersionsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListVersionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListVersionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListVersionsResponse.decode(value),
    },
    /** Adds new version based on a previous one. */
    addVersion: {
        path: '/yandex.cloud.lockbox.v1.SecretService/AddVersion',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddVersionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddVersionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Schedules the specified version for destruction.
     *
     * Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
     */
    scheduleVersionDestruction: {
        path: '/yandex.cloud.lockbox.v1.SecretService/ScheduleVersionDestruction',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ScheduleVersionDestructionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ScheduleVersionDestructionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Cancels previously scheduled version destruction, if the version hasn't been destroyed yet. */
    cancelVersionDestruction: {
        path: '/yandex.cloud.lockbox.v1.SecretService/CancelVersionDestruction',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CancelVersionDestructionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CancelVersionDestructionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified secret. */
    listOperations: {
        path: '/yandex.cloud.lockbox.v1.SecretService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSecretOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSecretOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSecretOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSecretOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified secret. */
    listAccessBindings: {
        path: '/yandex.cloud.lockbox.v1.SecretService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the secret. */
    setAccessBindings: {
        path: '/yandex.cloud.lockbox.v1.SecretService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the secret. */
    updateAccessBindings: {
        path: '/yandex.cloud.lockbox.v1.SecretService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.SecretServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SecretServiceService, 'yandex.cloud.lockbox.v1.SecretService');
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}
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
