"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = exports.ClassAnnotation = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.ai.vision.v1';
const baseClassAnnotation = {};
exports.ClassAnnotation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.properties) {
            exports.Property.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClassAnnotation };
        message.properties = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.properties.push(exports.Property.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseClassAnnotation };
        message.properties = [];
        if (object.properties !== undefined && object.properties !== null) {
            for (const e of object.properties) {
                message.properties.push(exports.Property.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.properties) {
            obj.properties = message.properties.map((e) => e ? exports.Property.toJSON(e) : undefined);
        }
        else {
            obj.properties = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseClassAnnotation };
        message.properties = [];
        if (object.properties !== undefined && object.properties !== null) {
            for (const e of object.properties) {
                message.properties.push(exports.Property.fromPartial(e));
            }
        }
        return message;
    },
};
const baseProperty = { name: '', probability: 0 };
exports.Property = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.probability !== 0) {
            writer.uint32(17).double(message.probability);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProperty };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.probability = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseProperty };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.probability !== undefined && object.probability !== null) {
            message.probability = Number(object.probability);
        }
        else {
            message.probability = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.probability !== undefined &&
            (obj.probability = message.probability);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseProperty };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.probability !== undefined && object.probability !== null) {
            message.probability = object.probability;
        }
        else {
            message.probability = 0;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
