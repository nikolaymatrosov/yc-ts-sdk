/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud';
const baseMapKeySpec = { value: '', pattern: '', length: '' };
export const MapKeySpec = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
