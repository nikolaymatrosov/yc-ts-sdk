"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payload_Entry = exports.Payload = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.lockbox.v1';
const basePayload = { versionId: '' };
exports.Payload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.versionId !== '') {
            writer.uint32(10).string(message.versionId);
        }
        for (const v of message.entries) {
            exports.Payload_Entry.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePayload };
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versionId = reader.string();
                    break;
                case 2:
                    message.entries.push(exports.Payload_Entry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePayload };
        message.entries = [];
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(exports.Payload_Entry.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? exports.Payload_Entry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePayload };
        message.entries = [];
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(exports.Payload_Entry.fromPartial(e));
            }
        }
        return message;
    },
};
const basePayload_Entry = { key: '' };
exports.Payload_Entry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.textValue !== undefined) {
            writer.uint32(18).string(message.textValue);
        }
        if (message.binaryValue !== undefined) {
            writer.uint32(26).bytes(message.binaryValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePayload_Entry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.textValue = reader.string();
                    break;
                case 3:
                    message.binaryValue = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePayload_Entry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.textValue !== undefined && object.textValue !== null) {
            message.textValue = String(object.textValue);
        }
        else {
            message.textValue = undefined;
        }
        if (object.binaryValue !== undefined && object.binaryValue !== null) {
            message.binaryValue = bytesFromBase64(object.binaryValue);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.textValue !== undefined && (obj.textValue = message.textValue);
        message.binaryValue !== undefined &&
            (obj.binaryValue =
                message.binaryValue !== undefined
                    ? base64FromBytes(message.binaryValue)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePayload_Entry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.textValue !== undefined && object.textValue !== null) {
            message.textValue = object.textValue;
        }
        else {
            message.textValue = undefined;
        }
        if (object.binaryValue !== undefined && object.binaryValue !== null) {
            message.binaryValue = object.binaryValue;
        }
        else {
            message.binaryValue = undefined;
        }
        return message;
    },
};
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
