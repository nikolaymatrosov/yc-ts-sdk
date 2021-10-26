/* eslint-disable */
import { BoolValue } from '../../../../google/protobuf/wrappers';
import { Origin, OriginMeta } from '../../../../yandex/cloud/cdn/v1/origin';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.cdn.v1';
const baseGetOriginRequest = { folderId: '', originId: 0 };
export const GetOriginRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originId !== 0) {
            writer.uint32(16).int64(message.originId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetOriginRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originId !== undefined && (obj.originId = message.originId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
        }
        return message;
    },
};
const baseListOriginsRequest = { folderId: '', originGroupId: 0 };
export const ListOriginsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOriginsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListOriginsRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListOriginsRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
};
const baseListOriginsResponse = {};
export const ListOriginsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.origins) {
            Origin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOriginsResponse };
        message.origins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.origins.push(Origin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListOriginsResponse };
        message.origins = [];
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(Origin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.origins) {
            obj.origins = message.origins.map((e) => e ? Origin.toJSON(e) : undefined);
        }
        else {
            obj.origins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListOriginsResponse };
        message.origins = [];
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(Origin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCreateOriginRequest = {
    folderId: '',
    originGroupId: 0,
    source: '',
};
export const CreateOriginRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        if (message.source !== '') {
            writer.uint32(26).string(message.source);
        }
        if (message.enabled !== undefined) {
            BoolValue.encode({ value: message.enabled }, writer.uint32(34).fork()).ldelim();
        }
        if (message.backup !== undefined) {
            BoolValue.encode({ value: message.backup }, writer.uint32(42).fork()).ldelim();
        }
        if (message.meta !== undefined) {
            OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateOriginRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                case 3:
                    message.source = reader.string();
                    break;
                case 4:
                    message.enabled = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.backup = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.meta = OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = undefined;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = Boolean(object.backup);
        }
        else {
            message.backup = undefined;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = OriginMeta.fromJSON(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta
                ? OriginMeta.toJSON(message.meta)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = undefined;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = object.backup;
        }
        else {
            message.backup = undefined;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = OriginMeta.fromPartial(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
};
const baseCreateOriginMetadata = { originId: 0, originGroupId: 0 };
export const CreateOriginMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.originId !== 0) {
            writer.uint32(8).int64(message.originId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateOriginMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originId = longToNumber(reader.int64());
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originId !== undefined && (obj.originId = message.originId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
};
const baseUpdateOriginRequest = {
    folderId: '',
    originId: 0,
    source: '',
    enabled: false,
    backup: false,
};
export const UpdateOriginRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originId !== 0) {
            writer.uint32(16).int64(message.originId);
        }
        if (message.source !== '') {
            writer.uint32(26).string(message.source);
        }
        if (message.enabled === true) {
            writer.uint32(32).bool(message.enabled);
        }
        if (message.backup === true) {
            writer.uint32(40).bool(message.backup);
        }
        if (message.meta !== undefined) {
            OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOriginRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originId = longToNumber(reader.int64());
                    break;
                case 3:
                    message.source = reader.string();
                    break;
                case 4:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.backup = reader.bool();
                    break;
                case 6:
                    message.meta = OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = Boolean(object.backup);
        }
        else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = OriginMeta.fromJSON(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originId !== undefined && (obj.originId = message.originId);
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta
                ? OriginMeta.toJSON(message.meta)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = object.backup;
        }
        else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = OriginMeta.fromPartial(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
};
const baseUpdateOriginMetadata = { originId: 0, originGroupId: 0 };
export const UpdateOriginMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.originId !== 0) {
            writer.uint32(8).int64(message.originId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOriginMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originId = longToNumber(reader.int64());
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originId !== undefined && (obj.originId = message.originId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
};
const baseDeleteOriginRequest = { folderId: '', originId: 0 };
export const DeleteOriginRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originId !== 0) {
            writer.uint32(16).int64(message.originId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteOriginRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originId !== undefined && (obj.originId = message.originId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
        }
        return message;
    },
};
const baseDeleteOriginMetadata = { originId: 0 };
export const DeleteOriginMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.originId !== 0) {
            writer.uint32(8).int64(message.originId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteOriginMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originId !== undefined && (obj.originId = message.originId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
        }
        return message;
    },
};
/**
 * Origin management service.
 * Origin is not a standalone entity. It can live only within origin group.
 */
export const OriginServiceService = {
    /** Get origin in origin group. */
    get: {
        path: '/yandex.cloud.cdn.v1.OriginService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => GetOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Origin.encode(value).finish()),
        responseDeserialize: (value) => Origin.decode(value),
    },
    /** Lists origins of origin group. */
    list: {
        path: '/yandex.cloud.cdn.v1.OriginService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListOriginsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListOriginsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListOriginsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListOriginsResponse.decode(value),
    },
    /** Creates origin inside origin group. */
    create: {
        path: '/yandex.cloud.cdn.v1.OriginService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates origin from origin group. */
    update: {
        path: '/yandex.cloud.cdn.v1.OriginService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes origin from origin group. */
    delete: {
        path: '/yandex.cloud.cdn.v1.OriginService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const OriginServiceClient = makeGenericClientConstructor(OriginServiceService, 'yandex.cloud.cdn.v1.OriginService');
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
