"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryDataServiceClient = exports.RegistryDataServiceService = exports.PublishRegistryDataResponse = exports.PublishRegistryDataRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iot.devices.v1';
const basePublishRegistryDataRequest = {
    $type: 'yandex.cloud.iot.devices.v1.PublishRegistryDataRequest',
    registryId: '',
    topic: '',
};
exports.PublishRegistryDataRequest = {
    $type: 'yandex.cloud.iot.devices.v1.PublishRegistryDataRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            ...basePublishRegistryDataRequest,
        };
        message.data = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...basePublishRegistryDataRequest,
        };
        message.data = new Uint8Array();
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.topic !== undefined && (obj.topic = message.topic);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePublishRegistryDataRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.PublishRegistryDataRequest.$type, exports.PublishRegistryDataRequest);
const basePublishRegistryDataResponse = {
    $type: 'yandex.cloud.iot.devices.v1.PublishRegistryDataResponse',
};
exports.PublishRegistryDataResponse = {
    $type: 'yandex.cloud.iot.devices.v1.PublishRegistryDataResponse',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePublishRegistryDataResponse,
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
            ...basePublishRegistryDataResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...basePublishRegistryDataResponse,
        };
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.PublishRegistryDataResponse.$type, exports.PublishRegistryDataResponse);
/** A set of methods to work with IoT Core messages on behalf of registry */
exports.RegistryDataServiceService = {
    /** Publishes message on behalf of specified registry */
    publish: {
        path: '/yandex.cloud.iot.devices.v1.RegistryDataService/Publish',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PublishRegistryDataRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.PublishRegistryDataRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.PublishRegistryDataResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.PublishRegistryDataResponse.decode(value),
    },
};
exports.RegistryDataServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RegistryDataServiceService, 'yandex.cloud.iot.devices.v1.RegistryDataService');
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
