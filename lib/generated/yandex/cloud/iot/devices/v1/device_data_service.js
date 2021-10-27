"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceDataServiceClient = exports.DeviceDataServiceService = exports.PublishDeviceDataResponse = exports.PublishDeviceDataRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iot.devices.v1';
const basePublishDeviceDataRequest = { deviceId: '', topic: '' };
exports.PublishDeviceDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.topic !== '') {
            writer.uint32(18).string(message.topic);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePublishDeviceDataRequest,
        };
        message.data = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.topic = reader.string();
                    break;
                case 3:
                    message.data = reader.bytes();
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
            ...basePublishDeviceDataRequest,
        };
        message.data = new Uint8Array();
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = String(object.topic);
        }
        else {
            message.topic = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.topic !== undefined && (obj.topic = message.topic);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePublishDeviceDataRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = object.topic;
        }
        else {
            message.topic = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
const basePublishDeviceDataResponse = {};
exports.PublishDeviceDataResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePublishDeviceDataResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...basePublishDeviceDataResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...basePublishDeviceDataResponse,
        };
        return message;
    },
};
/** A set of methods to work with IoT Core messages on behalf of device */
exports.DeviceDataServiceService = {
    /** Publishes message on behalf of specified device */
    publish: {
        path: '/yandex.cloud.iot.devices.v1.DeviceDataService/Publish',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PublishDeviceDataRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.PublishDeviceDataRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.PublishDeviceDataResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.PublishDeviceDataResponse.decode(value),
    },
};
exports.DeviceDataServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DeviceDataServiceService, 'yandex.cloud.iot.devices.v1.DeviceDataService');
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
