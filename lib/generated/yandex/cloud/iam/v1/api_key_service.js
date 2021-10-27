"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyServiceClient = exports.ApiKeyServiceService = exports.ListApiKeyOperationsResponse = exports.ListApiKeyOperationsRequest = exports.DeleteApiKeyMetadata = exports.DeleteApiKeyRequest = exports.UpdateApiKeyMetadata = exports.UpdateApiKeyRequest = exports.CreateApiKeyResponse = exports.CreateApiKeyRequest = exports.ListApiKeysResponse = exports.ListApiKeysRequest = exports.GetApiKeyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../typeRegistry");
const api_key_1 = require("../../../../yandex/cloud/iam/v1/api_key");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iam.v1';
const baseGetApiKeyRequest = {
    $type: 'yandex.cloud.iam.v1.GetApiKeyRequest',
    apiKeyId: '',
};
exports.GetApiKeyRequest = {
    $type: 'yandex.cloud.iam.v1.GetApiKeyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetApiKeyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetApiKeyRequest };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        }
        else {
            message.apiKeyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetApiKeyRequest };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        }
        else {
            message.apiKeyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetApiKeyRequest.$type, exports.GetApiKeyRequest);
const baseListApiKeysRequest = {
    $type: 'yandex.cloud.iam.v1.ListApiKeysRequest',
    serviceAccountId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListApiKeysRequest = {
    $type: 'yandex.cloud.iam.v1.ListApiKeysRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
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
        const message = { ...baseListApiKeysRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
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
        const message = { ...baseListApiKeysRequest };
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
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListApiKeysRequest };
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
typeRegistry_1.messageTypeRegistry.set(exports.ListApiKeysRequest.$type, exports.ListApiKeysRequest);
const baseListApiKeysResponse = {
    $type: 'yandex.cloud.iam.v1.ListApiKeysResponse',
    nextPageToken: '',
};
exports.ListApiKeysResponse = {
    $type: 'yandex.cloud.iam.v1.ListApiKeysResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.apiKeys) {
            api_key_1.ApiKey.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListApiKeysResponse };
        message.apiKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeys.push(api_key_1.ApiKey.decode(reader, reader.uint32()));
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
        const message = { ...baseListApiKeysResponse };
        message.apiKeys = [];
        if (object.apiKeys !== undefined && object.apiKeys !== null) {
            for (const e of object.apiKeys) {
                message.apiKeys.push(api_key_1.ApiKey.fromJSON(e));
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
        if (message.apiKeys) {
            obj.apiKeys = message.apiKeys.map((e) => e ? api_key_1.ApiKey.toJSON(e) : undefined);
        }
        else {
            obj.apiKeys = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListApiKeysResponse };
        message.apiKeys = [];
        if (object.apiKeys !== undefined && object.apiKeys !== null) {
            for (const e of object.apiKeys) {
                message.apiKeys.push(api_key_1.ApiKey.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListApiKeysResponse.$type, exports.ListApiKeysResponse);
const baseCreateApiKeyRequest = {
    $type: 'yandex.cloud.iam.v1.CreateApiKeyRequest',
    serviceAccountId: '',
    description: '',
};
exports.CreateApiKeyRequest = {
    $type: 'yandex.cloud.iam.v1.CreateApiKeyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateApiKeyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
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
        const message = { ...baseCreateApiKeyRequest };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateApiKeyRequest };
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateApiKeyRequest.$type, exports.CreateApiKeyRequest);
const baseCreateApiKeyResponse = {
    $type: 'yandex.cloud.iam.v1.CreateApiKeyResponse',
    secret: '',
};
exports.CreateApiKeyResponse = {
    $type: 'yandex.cloud.iam.v1.CreateApiKeyResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiKey !== undefined) {
            api_key_1.ApiKey.encode(message.apiKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.secret !== '') {
            writer.uint32(18).string(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateApiKeyResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKey = api_key_1.ApiKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateApiKeyResponse };
        if (object.apiKey !== undefined && object.apiKey !== null) {
            message.apiKey = api_key_1.ApiKey.fromJSON(object.apiKey);
        }
        else {
            message.apiKey = undefined;
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = String(object.secret);
        }
        else {
            message.secret = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiKey !== undefined &&
            (obj.apiKey = message.apiKey
                ? api_key_1.ApiKey.toJSON(message.apiKey)
                : undefined);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateApiKeyResponse };
        if (object.apiKey !== undefined && object.apiKey !== null) {
            message.apiKey = api_key_1.ApiKey.fromPartial(object.apiKey);
        }
        else {
            message.apiKey = undefined;
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = object.secret;
        }
        else {
            message.secret = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateApiKeyResponse.$type, exports.CreateApiKeyResponse);
const baseUpdateApiKeyRequest = {
    $type: 'yandex.cloud.iam.v1.UpdateApiKeyRequest',
    apiKeyId: '',
    description: '',
};
exports.UpdateApiKeyRequest = {
    $type: 'yandex.cloud.iam.v1.UpdateApiKeyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
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
        const message = { ...baseUpdateApiKeyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
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
        const message = { ...baseUpdateApiKeyRequest };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        }
        else {
            message.apiKeyId = '';
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
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateApiKeyRequest };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        }
        else {
            message.apiKeyId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateApiKeyRequest.$type, exports.UpdateApiKeyRequest);
const baseUpdateApiKeyMetadata = {
    $type: 'yandex.cloud.iam.v1.UpdateApiKeyMetadata',
    apiKeyId: '',
};
exports.UpdateApiKeyMetadata = {
    $type: 'yandex.cloud.iam.v1.UpdateApiKeyMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateApiKeyMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateApiKeyMetadata };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        }
        else {
            message.apiKeyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateApiKeyMetadata };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        }
        else {
            message.apiKeyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateApiKeyMetadata.$type, exports.UpdateApiKeyMetadata);
const baseDeleteApiKeyRequest = {
    $type: 'yandex.cloud.iam.v1.DeleteApiKeyRequest',
    apiKeyId: '',
};
exports.DeleteApiKeyRequest = {
    $type: 'yandex.cloud.iam.v1.DeleteApiKeyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteApiKeyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteApiKeyRequest };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        }
        else {
            message.apiKeyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteApiKeyRequest };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        }
        else {
            message.apiKeyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteApiKeyRequest.$type, exports.DeleteApiKeyRequest);
const baseDeleteApiKeyMetadata = {
    $type: 'yandex.cloud.iam.v1.DeleteApiKeyMetadata',
    apiKeyId: '',
};
exports.DeleteApiKeyMetadata = {
    $type: 'yandex.cloud.iam.v1.DeleteApiKeyMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteApiKeyMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteApiKeyMetadata };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        }
        else {
            message.apiKeyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteApiKeyMetadata };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        }
        else {
            message.apiKeyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteApiKeyMetadata.$type, exports.DeleteApiKeyMetadata);
const baseListApiKeyOperationsRequest = {
    $type: 'yandex.cloud.iam.v1.ListApiKeyOperationsRequest',
    apiKeyId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListApiKeyOperationsRequest = {
    $type: 'yandex.cloud.iam.v1.ListApiKeyOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
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
            ...baseListApiKeyOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
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
            ...baseListApiKeyOperationsRequest,
        };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        }
        else {
            message.apiKeyId = '';
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
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListApiKeyOperationsRequest,
        };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        }
        else {
            message.apiKeyId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListApiKeyOperationsRequest.$type, exports.ListApiKeyOperationsRequest);
const baseListApiKeyOperationsResponse = {
    $type: 'yandex.cloud.iam.v1.ListApiKeyOperationsResponse',
    nextPageToken: '',
};
exports.ListApiKeyOperationsResponse = {
    $type: 'yandex.cloud.iam.v1.ListApiKeyOperationsResponse',
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
            ...baseListApiKeyOperationsResponse,
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
            ...baseListApiKeyOperationsResponse,
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
            ...baseListApiKeyOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListApiKeyOperationsResponse.$type, exports.ListApiKeyOperationsResponse);
/** A set of methods for managing API keys. */
exports.ApiKeyServiceService = {
    /** Retrieves the list of API keys for the specified service account. */
    list: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListApiKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListApiKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListApiKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListApiKeysResponse.decode(value),
    },
    /**
     * Returns the specified API key.
     *
     * To get the list of available API keys, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetApiKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(api_key_1.ApiKey.encode(value).finish()),
        responseDeserialize: (value) => api_key_1.ApiKey.decode(value),
    },
    /** Creates an API key for the specified service account. */
    create: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateApiKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateApiKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateApiKeyResponse.decode(value),
    },
    /** Updates the specified API key. */
    update: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateApiKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified API key. */
    delete: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteApiKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of operations for the specified API key. */
    listOperations: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListApiKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListApiKeyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListApiKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListApiKeyOperationsResponse.decode(value),
    },
};
exports.ApiKeyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ApiKeyServiceService, 'yandex.cloud.iam.v1.ApiKeyService');
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
