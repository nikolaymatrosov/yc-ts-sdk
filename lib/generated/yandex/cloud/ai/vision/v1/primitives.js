"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vertex = exports.Polygon = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.ai.vision.v1';
const basePolygon = {};
exports.Polygon = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.vertices) {
            exports.Vertex.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePolygon };
        message.vertices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vertices.push(exports.Vertex.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePolygon };
        message.vertices = [];
        if (object.vertices !== undefined && object.vertices !== null) {
            for (const e of object.vertices) {
                message.vertices.push(exports.Vertex.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.vertices) {
            obj.vertices = message.vertices.map((e) => e ? exports.Vertex.toJSON(e) : undefined);
        }
        else {
            obj.vertices = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePolygon };
        message.vertices = [];
        if (object.vertices !== undefined && object.vertices !== null) {
            for (const e of object.vertices) {
                message.vertices.push(exports.Vertex.fromPartial(e));
            }
        }
        return message;
    },
};
const baseVertex = { x: 0, y: 0 };
exports.Vertex = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.x !== 0) {
            writer.uint32(8).int64(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(16).int64(message.y);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVertex };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.x = longToNumber(reader.int64());
                    break;
                case 2:
                    message.y = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVertex };
        if (object.x !== undefined && object.x !== null) {
            message.x = Number(object.x);
        }
        else {
            message.x = 0;
        }
        if (object.y !== undefined && object.y !== null) {
            message.y = Number(object.y);
        }
        else {
            message.y = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.x !== undefined && (obj.x = message.x);
        message.y !== undefined && (obj.y = message.y);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVertex };
        if (object.x !== undefined && object.x !== null) {
            message.x = object.x;
        }
        else {
            message.x = 0;
        }
        if (object.y !== undefined && object.y !== null) {
            message.y = object.y;
        }
        else {
            message.y = 0;
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
