/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { dayOfWeekFromJSON, dayOfWeekToJSON, } from '../../../../google/type/dayofweek';
import { TimeOfDay } from '../../../../google/type/timeofday';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.k8s.v1';
const baseMaintenanceWindow = {};
export const MaintenanceWindow = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.anytime !== undefined) {
            AnytimeMaintenanceWindow.encode(message.anytime, writer.uint32(10).fork()).ldelim();
        }
        if (message.dailyMaintenanceWindow !== undefined) {
            DailyMaintenanceWindow.encode(message.dailyMaintenanceWindow, writer.uint32(18).fork()).ldelim();
        }
        if (message.weeklyMaintenanceWindow !== undefined) {
            WeeklyMaintenanceWindow.encode(message.weeklyMaintenanceWindow, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaintenanceWindow };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.anytime = AnytimeMaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dailyMaintenanceWindow =
                        DailyMaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.weeklyMaintenanceWindow =
                        WeeklyMaintenanceWindow.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMaintenanceWindow };
        if (object.anytime !== undefined && object.anytime !== null) {
            message.anytime = AnytimeMaintenanceWindow.fromJSON(object.anytime);
        }
        else {
            message.anytime = undefined;
        }
        if (object.dailyMaintenanceWindow !== undefined &&
            object.dailyMaintenanceWindow !== null) {
            message.dailyMaintenanceWindow = DailyMaintenanceWindow.fromJSON(object.dailyMaintenanceWindow);
        }
        else {
            message.dailyMaintenanceWindow = undefined;
        }
        if (object.weeklyMaintenanceWindow !== undefined &&
            object.weeklyMaintenanceWindow !== null) {
            message.weeklyMaintenanceWindow = WeeklyMaintenanceWindow.fromJSON(object.weeklyMaintenanceWindow);
        }
        else {
            message.weeklyMaintenanceWindow = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.anytime !== undefined &&
            (obj.anytime = message.anytime
                ? AnytimeMaintenanceWindow.toJSON(message.anytime)
                : undefined);
        message.dailyMaintenanceWindow !== undefined &&
            (obj.dailyMaintenanceWindow = message.dailyMaintenanceWindow
                ? DailyMaintenanceWindow.toJSON(message.dailyMaintenanceWindow)
                : undefined);
        message.weeklyMaintenanceWindow !== undefined &&
            (obj.weeklyMaintenanceWindow = message.weeklyMaintenanceWindow
                ? WeeklyMaintenanceWindow.toJSON(message.weeklyMaintenanceWindow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMaintenanceWindow };
        if (object.anytime !== undefined && object.anytime !== null) {
            message.anytime = AnytimeMaintenanceWindow.fromPartial(object.anytime);
        }
        else {
            message.anytime = undefined;
        }
        if (object.dailyMaintenanceWindow !== undefined &&
            object.dailyMaintenanceWindow !== null) {
            message.dailyMaintenanceWindow = DailyMaintenanceWindow.fromPartial(object.dailyMaintenanceWindow);
        }
        else {
            message.dailyMaintenanceWindow = undefined;
        }
        if (object.weeklyMaintenanceWindow !== undefined &&
            object.weeklyMaintenanceWindow !== null) {
            message.weeklyMaintenanceWindow =
                WeeklyMaintenanceWindow.fromPartial(object.weeklyMaintenanceWindow);
        }
        else {
            message.weeklyMaintenanceWindow = undefined;
        }
        return message;
    },
};
const baseAnytimeMaintenanceWindow = {};
export const AnytimeMaintenanceWindow = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAnytimeMaintenanceWindow,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseAnytimeMaintenanceWindow,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseAnytimeMaintenanceWindow,
        };
        return message;
    },
};
const baseDailyMaintenanceWindow = {};
export const DailyMaintenanceWindow = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.startTime !== undefined) {
            TimeOfDay.encode(message.startTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDailyMaintenanceWindow,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseDailyMaintenanceWindow,
        };
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = TimeOfDay.fromJSON(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromJSON(object.duration);
        }
        else {
            message.duration = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined &&
            (obj.startTime = message.startTime
                ? TimeOfDay.toJSON(message.startTime)
                : undefined);
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? Duration.toJSON(message.duration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDailyMaintenanceWindow,
        };
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = TimeOfDay.fromPartial(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromPartial(object.duration);
        }
        else {
            message.duration = undefined;
        }
        return message;
    },
};
const baseDaysOfWeekMaintenanceWindow = { days: 0 };
export const DaysOfWeekMaintenanceWindow = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.days) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.startTime !== undefined) {
            TimeOfDay.encode(message.startTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDaysOfWeekMaintenanceWindow,
        };
        message.days = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.days.push(reader.int32());
                        }
                    }
                    else {
                        message.days.push(reader.int32());
                    }
                    break;
                case 2:
                    message.startTime = TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseDaysOfWeekMaintenanceWindow,
        };
        message.days = [];
        if (object.days !== undefined && object.days !== null) {
            for (const e of object.days) {
                message.days.push(dayOfWeekFromJSON(e));
            }
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = TimeOfDay.fromJSON(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromJSON(object.duration);
        }
        else {
            message.duration = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.days) {
            obj.days = message.days.map((e) => dayOfWeekToJSON(e));
        }
        else {
            obj.days = [];
        }
        message.startTime !== undefined &&
            (obj.startTime = message.startTime
                ? TimeOfDay.toJSON(message.startTime)
                : undefined);
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? Duration.toJSON(message.duration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDaysOfWeekMaintenanceWindow,
        };
        message.days = [];
        if (object.days !== undefined && object.days !== null) {
            for (const e of object.days) {
                message.days.push(e);
            }
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = TimeOfDay.fromPartial(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromPartial(object.duration);
        }
        else {
            message.duration = undefined;
        }
        return message;
    },
};
const baseWeeklyMaintenanceWindow = {};
export const WeeklyMaintenanceWindow = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.daysOfWeek) {
            DaysOfWeekMaintenanceWindow.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWeeklyMaintenanceWindow,
        };
        message.daysOfWeek = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.daysOfWeek.push(DaysOfWeekMaintenanceWindow.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseWeeklyMaintenanceWindow,
        };
        message.daysOfWeek = [];
        if (object.daysOfWeek !== undefined && object.daysOfWeek !== null) {
            for (const e of object.daysOfWeek) {
                message.daysOfWeek.push(DaysOfWeekMaintenanceWindow.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.daysOfWeek) {
            obj.daysOfWeek = message.daysOfWeek.map((e) => e ? DaysOfWeekMaintenanceWindow.toJSON(e) : undefined);
        }
        else {
            obj.daysOfWeek = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseWeeklyMaintenanceWindow,
        };
        message.daysOfWeek = [];
        if (object.daysOfWeek !== undefined && object.daysOfWeek !== null) {
            for (const e of object.daysOfWeek) {
                message.daysOfWeek.push(DaysOfWeekMaintenanceWindow.fromPartial(e));
            }
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
