/* eslint-disable */
import { Polygon } from '../../../../../yandex/cloud/ai/vision/v1/primitives';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.ai.vision.v1';
const baseFaceAnnotation = {};
export const FaceAnnotation = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.faces) {
            Face.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFaceAnnotation };
        message.faces = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.faces.push(Face.decode(reader, reader.uint32()));
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
                message.faces.push(Face.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.faces) {
            obj.faces = message.faces.map((e) => e ? Face.toJSON(e) : undefined);
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
                message.faces.push(Face.fromPartial(e));
            }
        }
        return message;
    },
};
const baseFace = {};
export const Face = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.boundingBox !== undefined) {
            Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFace };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = Polygon.decode(reader, reader.uint32());
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
            message.boundingBox = Polygon.fromJSON(object.boundingBox);
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
                ? Polygon.toJSON(message.boundingBox)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFace };
        if (object.boundingBox !== undefined && object.boundingBox !== null) {
            message.boundingBox = Polygon.fromPartial(object.boundingBox);
        }
        else {
            message.boundingBox = undefined;
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
