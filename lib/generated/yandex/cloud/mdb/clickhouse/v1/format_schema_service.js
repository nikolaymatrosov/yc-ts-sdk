/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { FormatSchema, formatSchemaTypeFromJSON, formatSchemaTypeToJSON, } from '../../../../../yandex/cloud/mdb/clickhouse/v1/format_schema';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';
const baseGetFormatSchemaRequest = {
    clusterId: '',
    formatSchemaName: '',
};
export const GetFormatSchemaRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetFormatSchemaRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
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
            ...baseGetFormatSchemaRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = String(object.formatSchemaName);
        }
        else {
            message.formatSchemaName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetFormatSchemaRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = object.formatSchemaName;
        }
        else {
            message.formatSchemaName = '';
        }
        return message;
    },
};
const baseListFormatSchemasRequest = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListFormatSchemasRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
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
            ...baseListFormatSchemasRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
            ...baseListFormatSchemasRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFormatSchemasRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
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
const baseListFormatSchemasResponse = { nextPageToken: '' };
export const ListFormatSchemasResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.formatSchemas) {
            FormatSchema.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListFormatSchemasResponse,
        };
        message.formatSchemas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.formatSchemas.push(FormatSchema.decode(reader, reader.uint32()));
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
            ...baseListFormatSchemasResponse,
        };
        message.formatSchemas = [];
        if (object.formatSchemas !== undefined &&
            object.formatSchemas !== null) {
            for (const e of object.formatSchemas) {
                message.formatSchemas.push(FormatSchema.fromJSON(e));
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
        if (message.formatSchemas) {
            obj.formatSchemas = message.formatSchemas.map((e) => e ? FormatSchema.toJSON(e) : undefined);
        }
        else {
            obj.formatSchemas = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFormatSchemasResponse,
        };
        message.formatSchemas = [];
        if (object.formatSchemas !== undefined &&
            object.formatSchemas !== null) {
            for (const e of object.formatSchemas) {
                message.formatSchemas.push(FormatSchema.fromPartial(e));
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
const baseCreateFormatSchemaRequest = {
    clusterId: '',
    formatSchemaName: '',
    type: 0,
    uri: '',
};
export const CreateFormatSchemaRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFormatSchemaRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.uri = reader.string();
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
            ...baseCreateFormatSchemaRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = String(object.formatSchemaName);
        }
        else {
            message.formatSchemaName = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = formatSchemaTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        message.type !== undefined &&
            (obj.type = formatSchemaTypeToJSON(message.type));
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateFormatSchemaRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = object.formatSchemaName;
        }
        else {
            message.formatSchemaName = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = '';
        }
        return message;
    },
};
const baseCreateFormatSchemaMetadata = {
    clusterId: '',
    formatSchemaName: '',
};
export const CreateFormatSchemaMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFormatSchemaMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
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
            ...baseCreateFormatSchemaMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = String(object.formatSchemaName);
        }
        else {
            message.formatSchemaName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateFormatSchemaMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = object.formatSchemaName;
        }
        else {
            message.formatSchemaName = '';
        }
        return message;
    },
};
const baseUpdateFormatSchemaRequest = {
    clusterId: '',
    formatSchemaName: '',
    uri: '',
};
export const UpdateFormatSchemaRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateFormatSchemaRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.uri = reader.string();
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
            ...baseUpdateFormatSchemaRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = String(object.formatSchemaName);
        }
        else {
            message.formatSchemaName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateFormatSchemaRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = object.formatSchemaName;
        }
        else {
            message.formatSchemaName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = '';
        }
        return message;
    },
};
const baseUpdateFormatSchemaMetadata = {
    clusterId: '',
    formatSchemaName: '',
};
export const UpdateFormatSchemaMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateFormatSchemaMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
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
            ...baseUpdateFormatSchemaMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = String(object.formatSchemaName);
        }
        else {
            message.formatSchemaName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateFormatSchemaMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = object.formatSchemaName;
        }
        else {
            message.formatSchemaName = '';
        }
        return message;
    },
};
const baseDeleteFormatSchemaRequest = {
    clusterId: '',
    formatSchemaName: '',
};
export const DeleteFormatSchemaRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFormatSchemaRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
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
            ...baseDeleteFormatSchemaRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = String(object.formatSchemaName);
        }
        else {
            message.formatSchemaName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteFormatSchemaRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = object.formatSchemaName;
        }
        else {
            message.formatSchemaName = '';
        }
        return message;
    },
};
const baseDeleteFormatSchemaMetadata = {
    clusterId: '',
    formatSchemaName: '',
};
export const DeleteFormatSchemaMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFormatSchemaMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
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
            ...baseDeleteFormatSchemaMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = String(object.formatSchemaName);
        }
        else {
            message.formatSchemaName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteFormatSchemaMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null) {
            message.formatSchemaName = object.formatSchemaName;
        }
        else {
            message.formatSchemaName = '';
        }
        return message;
    },
};
export const FormatSchemaServiceService = {
    get: {
        path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value) => GetFormatSchemaRequest.decode(value),
        responseSerialize: (value) => Buffer.from(FormatSchema.encode(value).finish()),
        responseDeserialize: (value) => FormatSchema.decode(value),
    },
    list: {
        path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListFormatSchemasRequest.encode(value).finish()),
        requestDeserialize: (value) => ListFormatSchemasRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListFormatSchemasResponse.encode(value).finish()),
        responseDeserialize: (value) => ListFormatSchemasResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateFormatSchemaRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateFormatSchemaRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteFormatSchemaRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const FormatSchemaServiceClient = makeGenericClientConstructor(FormatSchemaServiceService, 'yandex.cloud.mdb.clickhouse.v1.FormatSchemaService');
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
