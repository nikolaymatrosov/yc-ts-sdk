/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ApiKey } from '../../../../yandex/cloud/iam/v1/api_key';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.iam.v1';
const baseGetApiKeyRequest = { apiKeyId: '' };
export const GetApiKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListApiKeysRequest = {
    serviceAccountId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListApiKeysRequest = {
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
const baseListApiKeysResponse = { nextPageToken: '' };
export const ListApiKeysResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.apiKeys) {
            ApiKey.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListApiKeysResponse };
        message.apiKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeys.push(ApiKey.decode(reader, reader.uint32()));
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
                message.apiKeys.push(ApiKey.fromJSON(e));
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
            obj.apiKeys = message.apiKeys.map((e) => e ? ApiKey.toJSON(e) : undefined);
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
                message.apiKeys.push(ApiKey.fromPartial(e));
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
const baseCreateApiKeyRequest = {
    serviceAccountId: '',
    description: '',
};
export const CreateApiKeyRequest = {
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
const baseCreateApiKeyResponse = { secret: '' };
export const CreateApiKeyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.apiKey !== undefined) {
            ApiKey.encode(message.apiKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.secret !== '') {
            writer.uint32(18).string(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateApiKeyResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKey = ApiKey.decode(reader, reader.uint32());
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
            message.apiKey = ApiKey.fromJSON(object.apiKey);
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
                ? ApiKey.toJSON(message.apiKey)
                : undefined);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateApiKeyResponse };
        if (object.apiKey !== undefined && object.apiKey !== null) {
            message.apiKey = ApiKey.fromPartial(object.apiKey);
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
const baseUpdateApiKeyRequest = { apiKeyId: '', description: '' };
export const UpdateApiKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
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
        const message = { ...baseUpdateApiKeyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
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
        const message = { ...baseUpdateApiKeyRequest };
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        }
        else {
            message.apiKeyId = '';
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
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
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
const baseUpdateApiKeyMetadata = { apiKeyId: '' };
export const UpdateApiKeyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteApiKeyRequest = { apiKeyId: '' };
export const DeleteApiKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteApiKeyMetadata = { apiKeyId: '' };
export const DeleteApiKeyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListApiKeyOperationsRequest = {
    apiKeyId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListApiKeyOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListApiKeyOperationsResponse = { nextPageToken: '' };
export const ListApiKeyOperationsResponse = {
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
            ...baseListApiKeyOperationsResponse,
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
            ...baseListApiKeyOperationsResponse,
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
            ...baseListApiKeyOperationsResponse,
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
/** A set of methods for managing API keys. */
export const ApiKeyServiceService = {
    /** Retrieves the list of API keys for the specified service account. */
    list: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListApiKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => ListApiKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListApiKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => ListApiKeysResponse.decode(value),
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
        requestSerialize: (value) => Buffer.from(GetApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => GetApiKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ApiKey.encode(value).finish()),
        responseDeserialize: (value) => ApiKey.decode(value),
    },
    /** Creates an API key for the specified service account. */
    create: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateApiKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(CreateApiKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => CreateApiKeyResponse.decode(value),
    },
    /** Updates the specified API key. */
    update: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateApiKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified API key. */
    delete: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteApiKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Retrieves the list of operations for the specified API key. */
    listOperations: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListApiKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListApiKeyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListApiKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListApiKeyOperationsResponse.decode(value),
    },
};
export const ApiKeyServiceClient = makeGenericClientConstructor(ApiKeyServiceService, 'yandex.cloud.iam.v1.ApiKeyService');
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
