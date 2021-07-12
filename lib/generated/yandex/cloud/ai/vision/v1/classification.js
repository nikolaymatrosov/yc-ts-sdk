/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.ai.vision.v1';
const baseClassAnnotation = {};
export const ClassAnnotation = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.properties) {
            Property.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClassAnnotation };
        message.properties = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.properties.push(Property.decode(reader, reader.uint32()));
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
                message.properties.push(Property.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.properties) {
            obj.properties = message.properties.map((e) => e ? Property.toJSON(e) : undefined);
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
                message.properties.push(Property.fromPartial(e));
            }
        }
        return message;
    },
};
const baseProperty = { name: '', probability: 0 };
export const Property = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.probability !== 0) {
            writer.uint32(17).double(message.probability);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
