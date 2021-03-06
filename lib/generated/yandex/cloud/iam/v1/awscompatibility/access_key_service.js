"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessKeyServiceClient = exports.AccessKeyServiceService = exports.ListAccessKeyOperationsResponse = exports.ListAccessKeyOperationsRequest = exports.DeleteAccessKeyMetadata = exports.DeleteAccessKeyRequest = exports.UpdateAccessKeyMetadata = exports.UpdateAccessKeyRequest = exports.CreateAccessKeyResponse = exports.CreateAccessKeyRequest = exports.ListAccessKeysResponse = exports.ListAccessKeysRequest = exports.GetAccessKeyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../../typeRegistry");
const access_key_1 = require("../../../../../yandex/cloud/iam/v1/awscompatibility/access_key");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iam.v1.awscompatibility';
const baseGetAccessKeyRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.GetAccessKeyRequest',
    accessKeyId: '',
};
exports.GetAccessKeyRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.GetAccessKeyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetAccessKeyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetAccessKeyRequest };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = String(object.accessKeyId);
        }
        else {
            message.accessKeyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetAccessKeyRequest };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = object.accessKeyId;
        }
        else {
            message.accessKeyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetAccessKeyRequest.$type, exports.GetAccessKeyRequest);
const baseListAccessKeysRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.ListAccessKeysRequest',
    serviceAccountId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListAccessKeysRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.ListAccessKeysRequest',
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
        const message = {
            ...baseListAccessKeysRequest,
        };
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
        const message = {
            ...baseListAccessKeysRequest,
        };
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
        const message = {
            ...baseListAccessKeysRequest,
        };
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
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessKeysRequest.$type, exports.ListAccessKeysRequest);
const baseListAccessKeysResponse = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.ListAccessKeysResponse',
    nextPageToken: '',
};
exports.ListAccessKeysResponse = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.ListAccessKeysResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accessKeys) {
            access_key_1.AccessKey.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListAccessKeysResponse,
        };
        message.accessKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeys.push(access_key_1.AccessKey.decode(reader, reader.uint32()));
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
            ...baseListAccessKeysResponse,
        };
        message.accessKeys = [];
        if (object.accessKeys !== undefined && object.accessKeys !== null) {
            for (const e of object.accessKeys) {
                message.accessKeys.push(access_key_1.AccessKey.fromJSON(e));
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
        if (message.accessKeys) {
            obj.accessKeys = message.accessKeys.map((e) => e ? access_key_1.AccessKey.toJSON(e) : undefined);
        }
        else {
            obj.accessKeys = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListAccessKeysResponse,
        };
        message.accessKeys = [];
        if (object.accessKeys !== undefined && object.accessKeys !== null) {
            for (const e of object.accessKeys) {
                message.accessKeys.push(access_key_1.AccessKey.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessKeysResponse.$type, exports.ListAccessKeysResponse);
const baseCreateAccessKeyRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyRequest',
    serviceAccountId: '',
    description: '',
};
exports.CreateAccessKeyRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyRequest',
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
        const message = {
            ...baseCreateAccessKeyRequest,
        };
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
        const message = {
            ...baseCreateAccessKeyRequest,
        };
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
        const message = {
            ...baseCreateAccessKeyRequest,
        };
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateAccessKeyRequest.$type, exports.CreateAccessKeyRequest);
const baseCreateAccessKeyResponse = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyResponse',
    secret: '',
};
exports.CreateAccessKeyResponse = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKey !== undefined) {
            access_key_1.AccessKey.encode(message.accessKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.secret !== '') {
            writer.uint32(18).string(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateAccessKeyResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKey = access_key_1.AccessKey.decode(reader, reader.uint32());
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
        const message = {
            ...baseCreateAccessKeyResponse,
        };
        if (object.accessKey !== undefined && object.accessKey !== null) {
            message.accessKey = access_key_1.AccessKey.fromJSON(object.accessKey);
        }
        else {
            message.accessKey = undefined;
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
        message.accessKey !== undefined &&
            (obj.accessKey = message.accessKey
                ? access_key_1.AccessKey.toJSON(message.accessKey)
                : undefined);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateAccessKeyResponse,
        };
        if (object.accessKey !== undefined && object.accessKey !== null) {
            message.accessKey = access_key_1.AccessKey.fromPartial(object.accessKey);
        }
        else {
            message.accessKey = undefined;
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateAccessKeyResponse.$type, exports.CreateAccessKeyResponse);
const baseUpdateAccessKeyRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyRequest',
    accessKeyId: '',
    description: '',
};
exports.UpdateAccessKeyRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
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
        const message = {
            ...baseUpdateAccessKeyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
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
        const message = {
            ...baseUpdateAccessKeyRequest,
        };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = String(object.accessKeyId);
        }
        else {
            message.accessKeyId = '';
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
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateAccessKeyRequest,
        };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = object.accessKeyId;
        }
        else {
            message.accessKeyId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAccessKeyRequest.$type, exports.UpdateAccessKeyRequest);
const baseUpdateAccessKeyMetadata = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyMetadata',
    accessKeyId: '',
};
exports.UpdateAccessKeyMetadata = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAccessKeyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
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
            ...baseUpdateAccessKeyMetadata,
        };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = String(object.accessKeyId);
        }
        else {
            message.accessKeyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateAccessKeyMetadata,
        };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = object.accessKeyId;
        }
        else {
            message.accessKeyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateAccessKeyMetadata.$type, exports.UpdateAccessKeyMetadata);
const baseDeleteAccessKeyRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyRequest',
    accessKeyId: '',
};
exports.DeleteAccessKeyRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAccessKeyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
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
            ...baseDeleteAccessKeyRequest,
        };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = String(object.accessKeyId);
        }
        else {
            message.accessKeyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteAccessKeyRequest,
        };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = object.accessKeyId;
        }
        else {
            message.accessKeyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAccessKeyRequest.$type, exports.DeleteAccessKeyRequest);
const baseDeleteAccessKeyMetadata = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyMetadata',
    accessKeyId: '',
};
exports.DeleteAccessKeyMetadata = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAccessKeyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
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
            ...baseDeleteAccessKeyMetadata,
        };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = String(object.accessKeyId);
        }
        else {
            message.accessKeyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteAccessKeyMetadata,
        };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = object.accessKeyId;
        }
        else {
            message.accessKeyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteAccessKeyMetadata.$type, exports.DeleteAccessKeyMetadata);
const baseListAccessKeyOperationsRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsRequest',
    accessKeyId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListAccessKeyOperationsRequest = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
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
            ...baseListAccessKeyOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeyId = reader.string();
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
            ...baseListAccessKeyOperationsRequest,
        };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = String(object.accessKeyId);
        }
        else {
            message.accessKeyId = '';
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
        message.accessKeyId !== undefined &&
            (obj.accessKeyId = message.accessKeyId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListAccessKeyOperationsRequest,
        };
        if (object.accessKeyId !== undefined && object.accessKeyId !== null) {
            message.accessKeyId = object.accessKeyId;
        }
        else {
            message.accessKeyId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessKeyOperationsRequest.$type, exports.ListAccessKeyOperationsRequest);
const baseListAccessKeyOperationsResponse = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsResponse',
    nextPageToken: '',
};
exports.ListAccessKeyOperationsResponse = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsResponse',
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
            ...baseListAccessKeyOperationsResponse,
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
            ...baseListAccessKeyOperationsResponse,
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
            ...baseListAccessKeyOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListAccessKeyOperationsResponse.$type, exports.ListAccessKeyOperationsResponse);
/** A set of methods for managing access keys. */
exports.AccessKeyServiceService = {
    /** Retrieves the list of access keys for the specified service account. */
    list: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAccessKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAccessKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAccessKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAccessKeysResponse.decode(value),
    },
    /**
     * Returns the specified access key.
     *
     * To get the list of available access keys, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_key_1.AccessKey.encode(value).finish()),
        responseDeserialize: (value) => access_key_1.AccessKey.decode(value),
    },
    /** Creates an access key for the specified service account. */
    create: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateAccessKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateAccessKeyResponse.decode(value),
    },
    /** Updates the specified access key. */
    update: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified access key. */
    delete: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of operations for the specified access key. */
    listOperations: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListAccessKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListAccessKeyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListAccessKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListAccessKeyOperationsResponse.decode(value),
    },
};
exports.AccessKeyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AccessKeyServiceService, 'yandex.cloud.iam.v1.awscompatibility.AccessKeyService');
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
