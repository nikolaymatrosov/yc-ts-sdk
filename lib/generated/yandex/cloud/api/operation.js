"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.api';
const baseOperation = {
    $type: 'yandex.cloud.api.Operation',
    metadata: '',
    response: '',
};
exports.Operation = {
    $type: 'yandex.cloud.api.Operation',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metadata !== '') {
            writer.uint32(10).string(message.metadata);
        }
        if (message.response !== '') {
            writer.uint32(18).string(message.response);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOperation };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = reader.string();
                    break;
                case 2:
                    message.response = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOperation };
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = String(object.metadata);
        }
        else {
            message.metadata = '';
        }
        if (object.response !== undefined && object.response !== null) {
            message.response = String(object.response);
        }
        else {
            message.response = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.response !== undefined && (obj.response = message.response);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOperation };
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        else {
            message.metadata = '';
        }
        if (object.response !== undefined && object.response !== null) {
            message.response = object.response;
        }
        else {
            message.response = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Operation.$type, exports.Operation);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
