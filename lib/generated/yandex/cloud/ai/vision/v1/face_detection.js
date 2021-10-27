"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Face = exports.FaceAnnotation = exports.protobufPackage = void 0;
/* eslint-disable */
const primitives_1 = require("../../../../../yandex/cloud/ai/vision/v1/primitives");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.ai.vision.v1';
const baseFaceAnnotation = {};
exports.FaceAnnotation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.faces) {
            exports.Face.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFaceAnnotation };
        message.faces = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.faces.push(exports.Face.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFaceAnnotation };
        message.faces = [];
        if (object.faces !== undefined && object.faces !== null) {
            for (const e of object.faces) {
                message.faces.push(exports.Face.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.faces) {
            obj.faces = message.faces.map((e) => e ? exports.Face.toJSON(e) : undefined);
        }
        else {
            obj.faces = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFaceAnnotation };
        message.faces = [];
        if (object.faces !== undefined && object.faces !== null) {
            for (const e of object.faces) {
                message.faces.push(exports.Face.fromPartial(e));
            }
        }
        return message;
    },
};
const baseFace = {};
exports.Face = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.boundingBox !== undefined) {
            primitives_1.Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFace };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = primitives_1.Polygon.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFace };
        if (object.boundingBox !== undefined && object.boundingBox !== null) {
            message.boundingBox = primitives_1.Polygon.fromJSON(object.boundingBox);
        }
        else {
            message.boundingBox = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? primitives_1.Polygon.toJSON(message.boundingBox)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFace };
        if (object.boundingBox !== undefined && object.boundingBox !== null) {
            message.boundingBox = primitives_1.Polygon.fromPartial(object.boundingBox);
        }
        else {
            message.boundingBox = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
