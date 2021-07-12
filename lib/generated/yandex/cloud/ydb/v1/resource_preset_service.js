/* eslint-disable */
import { ResourcePreset } from '../../../../yandex/cloud/ydb/v1/resource_preset';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.ydb.v1';
const baseGetResourcePresetRequest = { resourcePresetId: '' };
export const GetResourcePresetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetResourcePresetRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
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
            ...baseGetResourcePresetRequest,
        };
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = String(object.resourcePresetId);
        }
        else {
            message.resourcePresetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetResourcePresetRequest,
        };
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = object.resourcePresetId;
        }
        else {
            message.resourcePresetId = '';
        }
        return message;
    },
};
const baseListResourcePresetsRequest = { pageSize: 0, pageToken: '' };
export const ListResourcePresetsRequest = {
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
        const message = {
            ...baseListResourcePresetsRequest,
        };
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
        const message = {
            ...baseListResourcePresetsRequest,
        };
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
        const message = {
            ...baseListResourcePresetsRequest,
        };
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
const baseListResourcePresetsResponse = { nextPageToken: '' };
export const ListResourcePresetsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.resourcePresets) {
            ResourcePreset.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListResourcePresetsResponse,
        };
        message.resourcePresets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresets.push(ResourcePreset.decode(reader, reader.uint32()));
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
            ...baseListResourcePresetsResponse,
        };
        message.resourcePresets = [];
        if (object.resourcePresets !== undefined &&
            object.resourcePresets !== null) {
            for (const e of object.resourcePresets) {
                message.resourcePresets.push(ResourcePreset.fromJSON(e));
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
        if (message.resourcePresets) {
            obj.resourcePresets = message.resourcePresets.map((e) => e ? ResourcePreset.toJSON(e) : undefined);
        }
        else {
            obj.resourcePresets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListResourcePresetsResponse,
        };
        message.resourcePresets = [];
        if (object.resourcePresets !== undefined &&
            object.resourcePresets !== null) {
            for (const e of object.resourcePresets) {
                message.resourcePresets.push(ResourcePreset.fromPartial(e));
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
export const ResourcePresetServiceService = {
    /** Returns the specified resource preset. */
    get: {
        path: '/yandex.cloud.ydb.v1.ResourcePresetService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetResourcePresetRequest.encode(value).finish()),
        requestDeserialize: (value) => GetResourcePresetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ResourcePreset.encode(value).finish()),
        responseDeserialize: (value) => ResourcePreset.decode(value),
    },
    /** Returns the list of available resource presets. */
    list: {
        path: '/yandex.cloud.ydb.v1.ResourcePresetService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListResourcePresetsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListResourcePresetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListResourcePresetsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListResourcePresetsResponse.decode(value),
    },
};
export const ResourcePresetServiceClient = makeGenericClientConstructor(ResourcePresetServiceService, 'yandex.cloud.ydb.v1.ResourcePresetService');
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
