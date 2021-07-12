/* eslint-disable */
import { DiskType } from '../../../../yandex/cloud/compute/v1/disk_type';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.compute.v1';
const baseGetDiskTypeRequest = { diskTypeId: '' };
export const GetDiskTypeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.diskTypeId !== '') {
            writer.uint32(10).string(message.diskTypeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDiskTypeRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetDiskTypeRequest };
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = String(object.diskTypeId);
        }
        else {
            message.diskTypeId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskTypeId !== undefined &&
            (obj.diskTypeId = message.diskTypeId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetDiskTypeRequest };
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = object.diskTypeId;
        }
        else {
            message.diskTypeId = '';
        }
        return message;
    },
};
const baseListDiskTypesRequest = { pageSize: 0, pageToken: '' };
export const ListDiskTypesRequest = {
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
        const message = { ...baseListDiskTypesRequest };
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
        const message = { ...baseListDiskTypesRequest };
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
        const message = { ...baseListDiskTypesRequest };
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
const baseListDiskTypesResponse = { nextPageToken: '' };
export const ListDiskTypesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.diskTypes) {
            DiskType.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListDiskTypesResponse,
        };
        message.diskTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskTypes.push(DiskType.decode(reader, reader.uint32()));
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
            ...baseListDiskTypesResponse,
        };
        message.diskTypes = [];
        if (object.diskTypes !== undefined && object.diskTypes !== null) {
            for (const e of object.diskTypes) {
                message.diskTypes.push(DiskType.fromJSON(e));
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
        if (message.diskTypes) {
            obj.diskTypes = message.diskTypes.map((e) => e ? DiskType.toJSON(e) : undefined);
        }
        else {
            obj.diskTypes = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDiskTypesResponse,
        };
        message.diskTypes = [];
        if (object.diskTypes !== undefined && object.diskTypes !== null) {
            for (const e of object.diskTypes) {
                message.diskTypes.push(DiskType.fromPartial(e));
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
/** A set of methods to retrieve information about disk types. */
export const DiskTypeServiceService = {
    /**
     * Returns the information about specified disk type.
     *
     * To get the list of available disk types, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.DiskTypeService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetDiskTypeRequest.encode(value).finish()),
        requestDeserialize: (value) => GetDiskTypeRequest.decode(value),
        responseSerialize: (value) => Buffer.from(DiskType.encode(value).finish()),
        responseDeserialize: (value) => DiskType.decode(value),
    },
    /** Retrieves the list of disk types for the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.DiskTypeService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDiskTypesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDiskTypesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDiskTypesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDiskTypesResponse.decode(value),
    },
};
export const DiskTypeServiceClient = makeGenericClientConstructor(DiskTypeServiceService, 'yandex.cloud.compute.v1.DiskTypeService');
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
