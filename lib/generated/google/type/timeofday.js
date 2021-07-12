/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'google.type';
const baseTimeOfDay = { hours: 0, minutes: 0, seconds: 0, nanos: 0 };
export const TimeOfDay = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hours !== 0) {
            writer.uint32(8).int32(message.hours);
        }
        if (message.minutes !== 0) {
            writer.uint32(16).int32(message.minutes);
        }
        if (message.seconds !== 0) {
            writer.uint32(24).int32(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(32).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTimeOfDay };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hours = reader.int32();
                    break;
                case 2:
                    message.minutes = reader.int32();
                    break;
                case 3:
                    message.seconds = reader.int32();
                    break;
                case 4:
                    message.nanos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTimeOfDay };
        if (object.hours !== undefined && object.hours !== null) {
            message.hours = Number(object.hours);
        }
        else {
            message.hours = 0;
        }
        if (object.minutes !== undefined && object.minutes !== null) {
            message.minutes = Number(object.minutes);
        }
        else {
            message.minutes = 0;
        }
        if (object.seconds !== undefined && object.seconds !== null) {
            message.seconds = Number(object.seconds);
        }
        else {
            message.seconds = 0;
        }
        if (object.nanos !== undefined && object.nanos !== null) {
            message.nanos = Number(object.nanos);
        }
        else {
            message.nanos = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hours !== undefined && (obj.hours = message.hours);
        message.minutes !== undefined && (obj.minutes = message.minutes);
        message.seconds !== undefined && (obj.seconds = message.seconds);
        message.nanos !== undefined && (obj.nanos = message.nanos);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTimeOfDay };
        if (object.hours !== undefined && object.hours !== null) {
            message.hours = object.hours;
        }
        else {
            message.hours = 0;
        }
        if (object.minutes !== undefined && object.minutes !== null) {
            message.minutes = object.minutes;
        }
        else {
            message.minutes = 0;
        }
        if (object.seconds !== undefined && object.seconds !== null) {
            message.seconds = object.seconds;
        }
        else {
            message.seconds = 0;
        }
        if (object.nanos !== undefined && object.nanos !== null) {
            message.nanos = object.nanos;
        }
        else {
            message.nanos = 0;
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
