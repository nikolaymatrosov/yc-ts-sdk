/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';
const baseValidationContext = {};
export const ValidationContext = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trustedCaId !== undefined) {
            writer.uint32(10).string(message.trustedCaId);
        }
        if (message.trustedCaBytes !== undefined) {
            writer.uint32(18).string(message.trustedCaBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
