/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { AccessKey } from '../../../../../yandex/cloud/iam/v1/awscompatibility/access_key';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.iam.v1.awscompatibility';
const baseGetAccessKeyRequest = { accessKeyId: '' };
export const GetAccessKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListAccessKeysRequest = {
    serviceAccountId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListAccessKeysRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListAccessKeysResponse = { nextPageToken: '' };
export const ListAccessKeysResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accessKeys) {
            AccessKey.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessKeysResponse,
        };
        message.accessKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKeys.push(AccessKey.decode(reader, reader.uint32()));
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
                message.accessKeys.push(AccessKey.fromJSON(e));
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
            obj.accessKeys = message.accessKeys.map((e) => e ? AccessKey.toJSON(e) : undefined);
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
                message.accessKeys.push(AccessKey.fromPartial(e));
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
const baseCreateAccessKeyRequest = {
    serviceAccountId: '',
    description: '',
};
export const CreateAccessKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseCreateAccessKeyResponse = { secret: '' };
export const CreateAccessKeyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessKey !== undefined) {
            AccessKey.encode(message.accessKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.secret !== '') {
            writer.uint32(18).string(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateAccessKeyResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKey = AccessKey.decode(reader, reader.uint32());
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
            message.accessKey = AccessKey.fromJSON(object.accessKey);
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
                ? AccessKey.toJSON(message.accessKey)
                : undefined);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateAccessKeyResponse,
        };
        if (object.accessKey !== undefined && object.accessKey !== null) {
            message.accessKey = AccessKey.fromPartial(object.accessKey);
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
const baseUpdateAccessKeyRequest = { accessKeyId: '', description: '' };
export const UpdateAccessKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
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
            message.updateMask = FieldMask.fromJSON(object.updateMask);
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
                ? FieldMask.toJSON(message.updateMask)
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
            message.updateMask = FieldMask.fromPartial(object.updateMask);
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
const baseUpdateAccessKeyMetadata = { accessKeyId: '' };
export const UpdateAccessKeyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteAccessKeyRequest = { accessKeyId: '' };
export const DeleteAccessKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteAccessKeyMetadata = { accessKeyId: '' };
export const DeleteAccessKeyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accessKeyId !== '') {
            writer.uint32(10).string(message.accessKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListAccessKeyOperationsRequest = {
    accessKeyId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListAccessKeyOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListAccessKeyOperationsResponse = { nextPageToken: '' };
export const ListAccessKeyOperationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.operations) {
            Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAccessKeyOperationsResponse,
        };
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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
                message.operations.push(Operation.fromJSON(e));
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
            obj.operations = message.operations.map((e) => e ? Operation.toJSON(e) : undefined);
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
                message.operations.push(Operation.fromPartial(e));
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
/** A set of methods for managing access keys. */
export const AccessKeyServiceService = {
    /** Retrieves the list of access keys for the specified service account. */
    list: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAccessKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAccessKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAccessKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAccessKeysResponse.decode(value),
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
        requestSerialize: (value) => Buffer.from(GetAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => GetAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(AccessKey.encode(value).finish()),
        responseDeserialize: (value) => AccessKey.decode(value),
    },
    /** Creates an access key for the specified service account. */
    create: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(CreateAccessKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => CreateAccessKeyResponse.decode(value),
    },
    /** Updates the specified access key. */
    update: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified access key. */
    delete: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteAccessKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteAccessKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Retrieves the list of operations for the specified access key. */
    listOperations: {
        path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAccessKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAccessKeyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAccessKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAccessKeyOperationsResponse.decode(value),
    },
};
export const AccessKeyServiceClient = makeGenericClientConstructor(AccessKeyServiceService, 'yandex.cloud.iam.v1.awscompatibility.AccessKeyService');
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
