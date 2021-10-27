"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationServiceClient = exports.LocationServiceService = exports.ListLocationsResponse = exports.ListLocationsRequest = exports.GetLocationRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const location_1 = require("../../../../yandex/cloud/ydb/v1/location");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.ydb.v1';
const baseGetLocationRequest = { locationId: '' };
exports.GetLocationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.locationId !== '') {
            writer.uint32(10).string(message.locationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetLocationRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetLocationRequest };
        if (object.locationId !== undefined && object.locationId !== null) {
            message.locationId = String(object.locationId);
        }
        else {
            message.locationId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.locationId !== undefined &&
            (obj.locationId = message.locationId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetLocationRequest };
        if (object.locationId !== undefined && object.locationId !== null) {
            message.locationId = object.locationId;
        }
        else {
            message.locationId = '';
        }
        return message;
    },
};
const baseListLocationsRequest = { pageSize: 0, pageToken: '' };
exports.ListLocationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListLocationsRequest };
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
        const message = { ...baseListLocationsRequest };
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
        const message = { ...baseListLocationsRequest };
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
const baseListLocationsResponse = { nextPageToken: '' };
exports.ListLocationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.locations) {
            location_1.Location.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListLocationsResponse,
        };
        message.locations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locations.push(location_1.Location.decode(reader, reader.uint32()));
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
            ...baseListLocationsResponse,
        };
        message.locations = [];
        if (object.locations !== undefined && object.locations !== null) {
            for (const e of object.locations) {
                message.locations.push(location_1.Location.fromJSON(e));
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
        if (message.locations) {
            obj.locations = message.locations.map((e) => e ? location_1.Location.toJSON(e) : undefined);
        }
        else {
            obj.locations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListLocationsResponse,
        };
        message.locations = [];
        if (object.locations !== undefined && object.locations !== null) {
            for (const e of object.locations) {
                message.locations.push(location_1.Location.fromPartial(e));
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
exports.LocationServiceService = {
    /** Returns the specified location. */
    get: {
        path: '/yandex.cloud.ydb.v1.LocationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetLocationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetLocationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(location_1.Location.encode(value).finish()),
        responseDeserialize: (value) => location_1.Location.decode(value),
    },
    /** Returns the list of available locations. */
    list: {
        path: '/yandex.cloud.ydb.v1.LocationService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListLocationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListLocationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListLocationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListLocationsResponse.decode(value),
    },
};
exports.LocationServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.LocationServiceService, 'yandex.cloud.ydb.v1.LocationService');
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
