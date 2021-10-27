"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.ydb.v1';
const baseStorageType = { id: '', deviceType: '', redundancyType: '' };
exports.StorageType = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.deviceType !== '') {
            writer.uint32(18).string(message.deviceType);
        }
        if (message.redundancyType !== '') {
            writer.uint32(26).string(message.redundancyType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageType };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.deviceType = reader.string();
                    break;
                case 3:
                    message.redundancyType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStorageType };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.deviceType !== undefined && object.deviceType !== null) {
            message.deviceType = String(object.deviceType);
        }
        else {
            message.deviceType = '';
        }
        if (object.redundancyType !== undefined &&
            object.redundancyType !== null) {
            message.redundancyType = String(object.redundancyType);
        }
        else {
            message.redundancyType = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.deviceType !== undefined &&
            (obj.deviceType = message.deviceType);
        message.redundancyType !== undefined &&
            (obj.redundancyType = message.redundancyType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStorageType };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.deviceType !== undefined && object.deviceType !== null) {
            message.deviceType = object.deviceType;
        }
        else {
            message.deviceType = '';
        }
        if (object.redundancyType !== undefined &&
            object.redundancyType !== null) {
            message.redundancyType = object.redundancyType;
        }
        else {
            message.redundancyType = '';
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
