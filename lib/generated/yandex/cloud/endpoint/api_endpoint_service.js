/* eslint-disable */
import { ApiEndpoint } from '../../../yandex/cloud/endpoint/api_endpoint';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.endpoint';
const baseGetApiEndpointRequest = { apiEndpointId: '' };
export const GetApiEndpointRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.apiEndpointId !== '') {
            writer.uint32(10).string(message.apiEndpointId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetApiEndpointRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiEndpointId = reader.string();
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
            ...baseGetApiEndpointRequest,
        };
        if (object.apiEndpointId !== undefined &&
            object.apiEndpointId !== null) {
            message.apiEndpointId = String(object.apiEndpointId);
        }
        else {
            message.apiEndpointId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiEndpointId !== undefined &&
            (obj.apiEndpointId = message.apiEndpointId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetApiEndpointRequest,
        };
        if (object.apiEndpointId !== undefined &&
            object.apiEndpointId !== null) {
            message.apiEndpointId = object.apiEndpointId;
        }
        else {
            message.apiEndpointId = '';
        }
        return message;
    },
};
const baseListApiEndpointsRequest = { pageSize: 0, pageToken: '' };
export const ListApiEndpointsRequest = {
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
            ...baseListApiEndpointsRequest,
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
            ...baseListApiEndpointsRequest,
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
            ...baseListApiEndpointsRequest,
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
const baseListApiEndpointsResponse = { nextPageToken: '' };
export const ListApiEndpointsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.endpoints) {
            ApiEndpoint.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListApiEndpointsResponse,
        };
        message.endpoints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpoints.push(ApiEndpoint.decode(reader, reader.uint32()));
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
            ...baseListApiEndpointsResponse,
        };
        message.endpoints = [];
        if (object.endpoints !== undefined && object.endpoints !== null) {
            for (const e of object.endpoints) {
                message.endpoints.push(ApiEndpoint.fromJSON(e));
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
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map((e) => e ? ApiEndpoint.toJSON(e) : undefined);
        }
        else {
            obj.endpoints = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListApiEndpointsResponse,
        };
        message.endpoints = [];
        if (object.endpoints !== undefined && object.endpoints !== null) {
            for (const e of object.endpoints) {
                message.endpoints.push(ApiEndpoint.fromPartial(e));
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
export const ApiEndpointServiceService = {
    get: {
        path: '/yandex.cloud.endpoint.ApiEndpointService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetApiEndpointRequest.encode(value).finish()),
        requestDeserialize: (value) => GetApiEndpointRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ApiEndpoint.encode(value).finish()),
        responseDeserialize: (value) => ApiEndpoint.decode(value),
    },
    list: {
        path: '/yandex.cloud.endpoint.ApiEndpointService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListApiEndpointsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListApiEndpointsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListApiEndpointsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListApiEndpointsResponse.decode(value),
    },
};
export const ApiEndpointServiceClient = makeGenericClientConstructor(ApiEndpointServiceService, 'yandex.cloud.endpoint.ApiEndpointService');
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