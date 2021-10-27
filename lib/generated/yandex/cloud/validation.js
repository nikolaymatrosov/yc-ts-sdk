"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapKeySpec = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud';
const baseMapKeySpec = {
    $type: 'yandex.cloud.MapKeySpec',
    value: '',
    pattern: '',
    length: '',
};
exports.MapKeySpec = {
    $type: 'yandex.cloud.MapKeySpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== '') {
            writer.uint32(10).string(message.value);
        }
        if (message.pattern !== '') {
            writer.uint32(18).string(message.pattern);
        }
        if (message.length !== '') {
            writer.uint32(26).string(message.length);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMapKeySpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                case 2:
                    message.pattern = reader.string();
                    break;
                case 3:
                    message.length = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMapKeySpec };
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        if (object.pattern !== undefined && object.pattern !== null) {
            message.pattern = String(object.pattern);
        }
        else {
            message.pattern = '';
        }
        if (object.length !== undefined && object.length !== null) {
            message.length = String(object.length);
        }
        else {
            message.length = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        message.pattern !== undefined && (obj.pattern = message.pattern);
        message.length !== undefined && (obj.length = message.length);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMapKeySpec };
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        if (object.pattern !== undefined && object.pattern !== null) {
            message.pattern = object.pattern;
        }
        else {
            message.pattern = '';
        }
        if (object.length !== undefined && object.length !== null) {
            message.length = object.length;
        }
        else {
            message.length = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MapKeySpec.$type, exports.MapKeySpec);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
