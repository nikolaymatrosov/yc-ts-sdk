"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneServiceClient = exports.ZoneServiceService = exports.GetZoneRequest = exports.ListZonesResponse = exports.ListZonesRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const zone_1 = require("../../../../yandex/cloud/compute/v1/zone");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
const baseListZonesRequest = { pageSize: 0, pageToken: '' };
exports.ListZonesRequest = {
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
        const message = { ...baseListZonesRequest };
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
        const message = { ...baseListZonesRequest };
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
        const message = { ...baseListZonesRequest };
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
const baseListZonesResponse = { nextPageToken: '' };
exports.ListZonesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.zones) {
            zone_1.Zone.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListZonesResponse };
        message.zones = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zones.push(zone_1.Zone.decode(reader, reader.uint32()));
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
        const message = { ...baseListZonesResponse };
        message.zones = [];
        if (object.zones !== undefined && object.zones !== null) {
            for (const e of object.zones) {
                message.zones.push(zone_1.Zone.fromJSON(e));
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
        if (message.zones) {
            obj.zones = message.zones.map((e) => e ? zone_1.Zone.toJSON(e) : undefined);
        }
        else {
            obj.zones = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListZonesResponse };
        message.zones = [];
        if (object.zones !== undefined && object.zones !== null) {
            for (const e of object.zones) {
                message.zones.push(zone_1.Zone.fromPartial(e));
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
const baseGetZoneRequest = { zoneId: '' };
exports.GetZoneRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetZoneRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetZoneRequest };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetZoneRequest };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        return message;
    },
};
/** A set of methods to retrieve information about availability zones. */
exports.ZoneServiceService = {
    /**
     * Returns the information about the specified availability zone.
     *
     * To get the list of availability zones, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.ZoneService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetZoneRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetZoneRequest.decode(value),
        responseSerialize: (value) => Buffer.from(zone_1.Zone.encode(value).finish()),
        responseDeserialize: (value) => zone_1.Zone.decode(value),
    },
    /** Retrieves the list of availability zones. */
    list: {
        path: '/yandex.cloud.compute.v1.ZoneService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListZonesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListZonesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListZonesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListZonesResponse.decode(value),
    },
};
exports.ZoneServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ZoneServiceService, 'yandex.cloud.compute.v1.ZoneService');
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
