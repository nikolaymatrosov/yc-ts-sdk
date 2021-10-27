"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeklyMaintenanceWindow = exports.DaysOfWeekMaintenanceWindow = exports.DailyMaintenanceWindow = exports.AnytimeMaintenanceWindow = exports.MaintenanceWindow = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../google/protobuf/duration");
const dayofweek_1 = require("../../../../google/type/dayofweek");
const timeofday_1 = require("../../../../google/type/timeofday");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.k8s.v1';
const baseMaintenanceWindow = {};
exports.MaintenanceWindow = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.anytime !== undefined) {
            exports.AnytimeMaintenanceWindow.encode(message.anytime, writer.uint32(10).fork()).ldelim();
        }
        if (message.dailyMaintenanceWindow !== undefined) {
            exports.DailyMaintenanceWindow.encode(message.dailyMaintenanceWindow, writer.uint32(18).fork()).ldelim();
        }
        if (message.weeklyMaintenanceWindow !== undefined) {
            exports.WeeklyMaintenanceWindow.encode(message.weeklyMaintenanceWindow, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaintenanceWindow };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.anytime = exports.AnytimeMaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dailyMaintenanceWindow =
                        exports.DailyMaintenanceWindow.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.weeklyMaintenanceWindow =
                        exports.WeeklyMaintenanceWindow.decode(reader, reader.uint32());
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
            message.anytime = exports.AnytimeMaintenanceWindow.fromJSON(object.anytime);
        }
        else {
            message.anytime = undefined;
        }
        if (object.dailyMaintenanceWindow !== undefined &&
            object.dailyMaintenanceWindow !== null) {
            message.dailyMaintenanceWindow = exports.DailyMaintenanceWindow.fromJSON(object.dailyMaintenanceWindow);
        }
        else {
            message.dailyMaintenanceWindow = undefined;
        }
        if (object.weeklyMaintenanceWindow !== undefined &&
            object.weeklyMaintenanceWindow !== null) {
            message.weeklyMaintenanceWindow = exports.WeeklyMaintenanceWindow.fromJSON(object.weeklyMaintenanceWindow);
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
                ? exports.AnytimeMaintenanceWindow.toJSON(message.anytime)
                : undefined);
        message.dailyMaintenanceWindow !== undefined &&
            (obj.dailyMaintenanceWindow = message.dailyMaintenanceWindow
                ? exports.DailyMaintenanceWindow.toJSON(message.dailyMaintenanceWindow)
                : undefined);
        message.weeklyMaintenanceWindow !== undefined &&
            (obj.weeklyMaintenanceWindow = message.weeklyMaintenanceWindow
                ? exports.WeeklyMaintenanceWindow.toJSON(message.weeklyMaintenanceWindow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMaintenanceWindow };
        if (object.anytime !== undefined && object.anytime !== null) {
            message.anytime = exports.AnytimeMaintenanceWindow.fromPartial(object.anytime);
        }
        else {
            message.anytime = undefined;
        }
        if (object.dailyMaintenanceWindow !== undefined &&
            object.dailyMaintenanceWindow !== null) {
            message.dailyMaintenanceWindow = exports.DailyMaintenanceWindow.fromPartial(object.dailyMaintenanceWindow);
        }
        else {
            message.dailyMaintenanceWindow = undefined;
        }
        if (object.weeklyMaintenanceWindow !== undefined &&
            object.weeklyMaintenanceWindow !== null) {
            message.weeklyMaintenanceWindow =
                exports.WeeklyMaintenanceWindow.fromPartial(object.weeklyMaintenanceWindow);
        }
        else {
            message.weeklyMaintenanceWindow = undefined;
        }
        return message;
    },
};
const baseAnytimeMaintenanceWindow = {};
exports.AnytimeMaintenanceWindow = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.DailyMaintenanceWindow = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.startTime !== undefined) {
            timeofday_1.TimeOfDay.encode(message.startTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDailyMaintenanceWindow,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
            message.startTime = timeofday_1.TimeOfDay.fromJSON(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromJSON(object.duration);
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
                ? timeofday_1.TimeOfDay.toJSON(message.startTime)
                : undefined);
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? duration_1.Duration.toJSON(message.duration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDailyMaintenanceWindow,
        };
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timeofday_1.TimeOfDay.fromPartial(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        else {
            message.duration = undefined;
        }
        return message;
    },
};
const baseDaysOfWeekMaintenanceWindow = { days: 0 };
exports.DaysOfWeekMaintenanceWindow = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.days) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.startTime !== undefined) {
            timeofday_1.TimeOfDay.encode(message.startTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.startTime = timeofday_1.TimeOfDay.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
                message.days.push((0, dayofweek_1.dayOfWeekFromJSON)(e));
            }
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = timeofday_1.TimeOfDay.fromJSON(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromJSON(object.duration);
        }
        else {
            message.duration = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.days) {
            obj.days = message.days.map((e) => (0, dayofweek_1.dayOfWeekToJSON)(e));
        }
        else {
            obj.days = [];
        }
        message.startTime !== undefined &&
            (obj.startTime = message.startTime
                ? timeofday_1.TimeOfDay.toJSON(message.startTime)
                : undefined);
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? duration_1.Duration.toJSON(message.duration)
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
            message.startTime = timeofday_1.TimeOfDay.fromPartial(object.startTime);
        }
        else {
            message.startTime = undefined;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromPartial(object.duration);
        }
        else {
            message.duration = undefined;
        }
        return message;
    },
};
const baseWeeklyMaintenanceWindow = {};
exports.WeeklyMaintenanceWindow = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.daysOfWeek) {
            exports.DaysOfWeekMaintenanceWindow.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWeeklyMaintenanceWindow,
        };
        message.daysOfWeek = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.daysOfWeek.push(exports.DaysOfWeekMaintenanceWindow.decode(reader, reader.uint32()));
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
                message.daysOfWeek.push(exports.DaysOfWeekMaintenanceWindow.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.daysOfWeek) {
            obj.daysOfWeek = message.daysOfWeek.map((e) => e ? exports.DaysOfWeekMaintenanceWindow.toJSON(e) : undefined);
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
                message.daysOfWeek.push(exports.DaysOfWeekMaintenanceWindow.fromPartial(e));
            }
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
