"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationContext = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.apploadbalancer.v1';
const baseValidationContext = {};
exports.ValidationContext = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.trustedCaId !== undefined) {
            writer.uint32(10).string(message.trustedCaId);
        }
        if (message.trustedCaBytes !== undefined) {
            writer.uint32(18).string(message.trustedCaBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValidationContext };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trustedCaId = reader.string();
                    break;
                case 2:
                    message.trustedCaBytes = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseValidationContext };
        if (object.trustedCaId !== undefined && object.trustedCaId !== null) {
            message.trustedCaId = String(object.trustedCaId);
        }
        else {
            message.trustedCaId = undefined;
        }
        if (object.trustedCaBytes !== undefined &&
            object.trustedCaBytes !== null) {
            message.trustedCaBytes = String(object.trustedCaBytes);
        }
        else {
            message.trustedCaBytes = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.trustedCaId !== undefined &&
            (obj.trustedCaId = message.trustedCaId);
        message.trustedCaBytes !== undefined &&
            (obj.trustedCaBytes = message.trustedCaBytes);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseValidationContext };
        if (object.trustedCaId !== undefined && object.trustedCaId !== null) {
            message.trustedCaId = object.trustedCaId;
        }
        else {
            message.trustedCaId = undefined;
        }
        if (object.trustedCaBytes !== undefined &&
            object.trustedCaBytes !== null) {
            message.trustedCaBytes = object.trustedCaBytes;
        }
        else {
            message.trustedCaBytes = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
