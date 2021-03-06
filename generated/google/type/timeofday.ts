/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'google.type';

/**
 * Represents a time of day. The date and time zone are either not significant
 * or are specified elsewhere. An API may choose to allow leap seconds. Related
 * types are [google.type.Date](https://github.com/googleapis/googleapis/blob/master/google/type/date.proto) and [google.protobuf.Timestamp](https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/timestamp.proto).
 */
export interface TimeOfDay {
    $type: 'google.type.TimeOfDay';
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
     * to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours: number;
    /** Minutes of hour of day. Must be from 0 to 59. */
    minutes: number;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
     * allow the value 60 if it allows leap-seconds.
     */
    seconds: number;
    /** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
    nanos: number;
}

const baseTimeOfDay: object = {
    $type: 'google.type.TimeOfDay',
    hours: 0,
    minutes: 0,
    seconds: 0,
    nanos: 0,
};

export const TimeOfDay = {
    $type: 'google.type.TimeOfDay' as const,

    encode(
        message: TimeOfDay,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): TimeOfDay {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTimeOfDay } as TimeOfDay;
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

    fromJSON(object: any): TimeOfDay {
        const message = { ...baseTimeOfDay } as TimeOfDay;
        if (object.hours !== undefined && object.hours !== null) {
            message.hours = Number(object.hours);
        } else {
            message.hours = 0;
        }
        if (object.minutes !== undefined && object.minutes !== null) {
            message.minutes = Number(object.minutes);
        } else {
            message.minutes = 0;
        }
        if (object.seconds !== undefined && object.seconds !== null) {
            message.seconds = Number(object.seconds);
        } else {
            message.seconds = 0;
        }
        if (object.nanos !== undefined && object.nanos !== null) {
            message.nanos = Number(object.nanos);
        } else {
            message.nanos = 0;
        }
        return message;
    },

    toJSON(message: TimeOfDay): unknown {
        const obj: any = {};
        message.hours !== undefined && (obj.hours = message.hours);
        message.minutes !== undefined && (obj.minutes = message.minutes);
        message.seconds !== undefined && (obj.seconds = message.seconds);
        message.nanos !== undefined && (obj.nanos = message.nanos);
        return obj;
    },

    fromPartial(object: DeepPartial<TimeOfDay>): TimeOfDay {
        const message = { ...baseTimeOfDay } as TimeOfDay;
        if (object.hours !== undefined && object.hours !== null) {
            message.hours = object.hours;
        } else {
            message.hours = 0;
        }
        if (object.minutes !== undefined && object.minutes !== null) {
            message.minutes = object.minutes;
        } else {
            message.minutes = 0;
        }
        if (object.seconds !== undefined && object.seconds !== null) {
            message.seconds = object.seconds;
        } else {
            message.seconds = 0;
        }
        if (object.nanos !== undefined && object.nanos !== null) {
            message.nanos = object.nanos;
        } else {
            message.nanos = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(TimeOfDay.$type, TimeOfDay);

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
