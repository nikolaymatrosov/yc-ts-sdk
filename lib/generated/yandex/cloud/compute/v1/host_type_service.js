/* eslint-disable */
import { HostType } from '../../../../yandex/cloud/compute/v1/host_type';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.compute.v1';
const baseGetHostTypeRequest = { hostTypeId: '' };
export const GetHostTypeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hostTypeId !== '') {
            writer.uint32(10).string(message.hostTypeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetHostTypeRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetHostTypeRequest };
        if (object.hostTypeId !== undefined && object.hostTypeId !== null) {
            message.hostTypeId = String(object.hostTypeId);
        }
        else {
            message.hostTypeId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostTypeId !== undefined &&
            (obj.hostTypeId = message.hostTypeId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetHostTypeRequest };
        if (object.hostTypeId !== undefined && object.hostTypeId !== null) {
            message.hostTypeId = object.hostTypeId;
        }
        else {
            message.hostTypeId = '';
        }
        return message;
    },
};
const baseListHostTypesRequest = { pageSize: 0, pageToken: '' };
export const ListHostTypesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListHostTypesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 2:
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
        const message = { ...baseListHostTypesRequest };
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
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListHostTypesRequest };
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
const baseListHostTypesResponse = { nextPageToken: '' };
export const ListHostTypesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.hostTypes) {
            HostType.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListHostTypesResponse,
        };
        message.hostTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostTypes.push(HostType.decode(reader, reader.uint32()));
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
            ...baseListHostTypesResponse,
        };
        message.hostTypes = [];
        if (object.hostTypes !== undefined && object.hostTypes !== null) {
            for (const e of object.hostTypes) {
                message.hostTypes.push(HostType.fromJSON(e));
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
        if (message.hostTypes) {
            obj.hostTypes = message.hostTypes.map((e) => e ? HostType.toJSON(e) : undefined);
        }
        else {
            obj.hostTypes = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListHostTypesResponse,
        };
        message.hostTypes = [];
        if (object.hostTypes !== undefined && object.hostTypes !== null) {
            for (const e of object.hostTypes) {
                message.hostTypes.push(HostType.fromPartial(e));
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
/** Set of methods to view possible host configurations. */
export const HostTypeServiceService = {
    /** Returns information about specified host type. */
    get: {
        path: '/yandex.cloud.compute.v1.HostTypeService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetHostTypeRequest.encode(value).finish()),
        requestDeserialize: (value) => GetHostTypeRequest.decode(value),
        responseSerialize: (value) => Buffer.from(HostType.encode(value).finish()),
        responseDeserialize: (value) => HostType.decode(value),
    },
    /** List avaliable host types. */
    list: {
        path: '/yandex.cloud.compute.v1.HostTypeService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListHostTypesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListHostTypesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListHostTypesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListHostTypesResponse.decode(value),
    },
};
export const HostTypeServiceClient = makeGenericClientConstructor(HostTypeServiceService, 'yandex.cloud.compute.v1.HostTypeService');
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
