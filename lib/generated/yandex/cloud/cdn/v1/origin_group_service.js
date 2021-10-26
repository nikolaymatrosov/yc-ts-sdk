/* eslint-disable */
import { BoolValue, StringValue } from '../../../../google/protobuf/wrappers';
import { OriginParams } from '../../../../yandex/cloud/cdn/v1/origin';
import { OriginGroup } from '../../../../yandex/cloud/cdn/v1/origin_group';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.cdn.v1';
const baseGetOriginGroupRequest = { folderId: '', originGroupId: 0 };
export const GetOriginGroupRequest = {
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
        const message = {
            ...baseGetOriginGroupRequest,
        };
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
        const message = {
            ...baseGetOriginGroupRequest,
        };
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
        const message = {
            ...baseGetOriginGroupRequest,
        };
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
const baseListOriginGroupsRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListOriginGroupsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOriginGroupsRequest,
        };
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
        const message = {
            ...baseListOriginGroupsRequest,
        };
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
        const message = {
            ...baseListOriginGroupsRequest,
        };
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
const baseListOriginGroupsResponse = { nextPageToken: '' };
export const ListOriginGroupsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.originGroups) {
            OriginGroup.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListOriginGroupsResponse,
        };
        message.originGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroups.push(OriginGroup.decode(reader, reader.uint32()));
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
            ...baseListOriginGroupsResponse,
        };
        message.originGroups = [];
        if (object.originGroups !== undefined && object.originGroups !== null) {
            for (const e of object.originGroups) {
                message.originGroups.push(OriginGroup.fromJSON(e));
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
        if (message.originGroups) {
            obj.originGroups = message.originGroups.map((e) => e ? OriginGroup.toJSON(e) : undefined);
        }
        else {
            obj.originGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListOriginGroupsResponse,
        };
        message.originGroups = [];
        if (object.originGroups !== undefined && object.originGroups !== null) {
            for (const e of object.originGroups) {
                message.originGroups.push(OriginGroup.fromPartial(e));
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
const baseCreateOriginGroupRequest = { folderId: '', name: '' };
export const CreateOriginGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.useNext !== undefined) {
            BoolValue.encode({ value: message.useNext }, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.origins) {
            OriginParams.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateOriginGroupRequest,
        };
        message.origins = [];
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
                    message.useNext = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.origins.push(OriginParams.decode(reader, reader.uint32()));
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
            ...baseCreateOriginGroupRequest,
        };
        message.origins = [];
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
        if (object.useNext !== undefined && object.useNext !== null) {
            message.useNext = Boolean(object.useNext);
        }
        else {
            message.useNext = undefined;
        }
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(OriginParams.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.useNext !== undefined && (obj.useNext = message.useNext);
        if (message.origins) {
            obj.origins = message.origins.map((e) => e ? OriginParams.toJSON(e) : undefined);
        }
        else {
            obj.origins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateOriginGroupRequest,
        };
        message.origins = [];
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
        if (object.useNext !== undefined && object.useNext !== null) {
            message.useNext = object.useNext;
        }
        else {
            message.useNext = undefined;
        }
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(OriginParams.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCreateOriginGroupMetadata = { originGroupId: 0 };
export const CreateOriginGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.originGroupId !== 0) {
            writer.uint32(8).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateOriginGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = {
            ...baseCreateOriginGroupMetadata,
        };
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
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateOriginGroupMetadata,
        };
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
const baseUpdateOriginGroupRequest = { folderId: '', originGroupId: 0 };
export const UpdateOriginGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        if (message.groupName !== undefined) {
            StringValue.encode({ value: message.groupName }, writer.uint32(26).fork()).ldelim();
        }
        if (message.useNext !== undefined) {
            BoolValue.encode({ value: message.useNext }, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.origins) {
            OriginParams.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOriginGroupRequest,
        };
        message.origins = [];
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
                    message.groupName = StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.useNext = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.origins.push(OriginParams.decode(reader, reader.uint32()));
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
            ...baseUpdateOriginGroupRequest,
        };
        message.origins = [];
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
        if (object.groupName !== undefined && object.groupName !== null) {
            message.groupName = String(object.groupName);
        }
        else {
            message.groupName = undefined;
        }
        if (object.useNext !== undefined && object.useNext !== null) {
            message.useNext = Boolean(object.useNext);
        }
        else {
            message.useNext = undefined;
        }
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(OriginParams.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.groupName !== undefined && (obj.groupName = message.groupName);
        message.useNext !== undefined && (obj.useNext = message.useNext);
        if (message.origins) {
            obj.origins = message.origins.map((e) => e ? OriginParams.toJSON(e) : undefined);
        }
        else {
            obj.origins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateOriginGroupRequest,
        };
        message.origins = [];
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
        if (object.groupName !== undefined && object.groupName !== null) {
            message.groupName = object.groupName;
        }
        else {
            message.groupName = undefined;
        }
        if (object.useNext !== undefined && object.useNext !== null) {
            message.useNext = object.useNext;
        }
        else {
            message.useNext = undefined;
        }
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(OriginParams.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateOriginGroupMetadata = { originGroupId: 0 };
export const UpdateOriginGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.originGroupId !== 0) {
            writer.uint32(8).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOriginGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = {
            ...baseUpdateOriginGroupMetadata,
        };
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
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateOriginGroupMetadata,
        };
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
const baseDeleteOriginGroupRequest = { folderId: '', originGroupId: 0 };
export const DeleteOriginGroupRequest = {
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
        const message = {
            ...baseDeleteOriginGroupRequest,
        };
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
        const message = {
            ...baseDeleteOriginGroupRequest,
        };
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
        const message = {
            ...baseDeleteOriginGroupRequest,
        };
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
const baseDeleteOriginGroupMetadata = { originGroupId: 0 };
export const DeleteOriginGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.originGroupId !== 0) {
            writer.uint32(8).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteOriginGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = {
            ...baseDeleteOriginGroupMetadata,
        };
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
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteOriginGroupMetadata,
        };
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
/** Origin Groups management service. */
export const OriginGroupServiceService = {
    /** Gets origin group with specified origin group id. */
    get: {
        path: '/yandex.cloud.cdn.v1.OriginGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => GetOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(OriginGroup.encode(value).finish()),
        responseDeserialize: (value) => OriginGroup.decode(value),
    },
    /** Lists origins of origin group. */
    list: {
        path: '/yandex.cloud.cdn.v1.OriginGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListOriginGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListOriginGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListOriginGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListOriginGroupsResponse.decode(value),
    },
    /** Creates origin group. */
    create: {
        path: '/yandex.cloud.cdn.v1.OriginGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates origin group. */
    update: {
        path: '/yandex.cloud.cdn.v1.OriginGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes origin group with specified origin group id. */
    delete: {
        path: '/yandex.cloud.cdn.v1.OriginGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const OriginGroupServiceClient = makeGenericClientConstructor(OriginGroupServiceService, 'yandex.cloud.cdn.v1.OriginGroupService');
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
