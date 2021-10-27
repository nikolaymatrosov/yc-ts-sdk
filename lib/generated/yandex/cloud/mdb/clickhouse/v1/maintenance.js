"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceOperation = exports.WeeklyMaintenanceWindow = exports.AnytimeMaintenanceWindow = exports.MaintenanceWindow = exports.weeklyMaintenanceWindow_WeekDayToJSON = exports.weeklyMaintenanceWindow_WeekDayFromJSON = exports.WeeklyMaintenanceWindow_WeekDay = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';
var WeeklyMaintenanceWindow_WeekDay;
(function (WeeklyMaintenanceWindow_WeekDay) {
    WeeklyMaintenanceWindow_WeekDay[WeeklyMaintenanceWindow_WeekDay["WEEK_DAY_UNSPECIFIED"] = 0] = "WEEK_DAY_UNSPECIFIED";
    WeeklyMaintenanceWindow_WeekDay[WeeklyMaintenanceWindow_WeekDay["MON"] = 1] = "MON";
    WeeklyMaintenanceWindow_WeekDay[WeeklyMaintenanceWindow_WeekDay["TUE"] = 2] = "TUE";
    WeeklyMaintenanceWindow_WeekDay[WeeklyMaintenanceWindow_WeekDay["WED"] = 3] = "WED";
    WeeklyMaintenanceWindow_WeekDay[WeeklyMaintenanceWindow_WeekDay["THU"] = 4] = "THU";
    WeeklyMaintenanceWindow_WeekDay[WeeklyMaintenanceWindow_WeekDay["FRI"] = 5] = "FRI";
    WeeklyMaintenanceWindow_WeekDay[WeeklyMaintenanceWindow_WeekDay["SAT"] = 6] = "SAT";
    WeeklyMaintenanceWindow_WeekDay[WeeklyMaintenanceWindow_WeekDay["SUN"] = 7] = "SUN";
    WeeklyMaintenanceWindow_WeekDay[WeeklyMaintenanceWindow_WeekDay["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(WeeklyMaintenanceWindow_WeekDay = exports.WeeklyMaintenanceWindow_WeekDay || (exports.WeeklyMaintenanceWindow_WeekDay = {}));
function weeklyMaintenanceWindow_WeekDayFromJSON(object) {
    switch (object) {
        case 0:
        case 'WEEK_DAY_UNSPECIFIED':
            return WeeklyMaintenanceWindow_WeekDay.WEEK_DAY_UNSPECIFIED;
        case 1:
        case 'MON':
            return WeeklyMaintenanceWindow_WeekDay.MON;
        case 2:
        case 'TUE':
            return WeeklyMaintenanceWindow_WeekDay.TUE;
        case 3:
        case 'WED':
            return WeeklyMaintenanceWindow_WeekDay.WED;
        case 4:
        case 'THU':
            return WeeklyMaintenanceWindow_WeekDay.THU;
        case 5:
        case 'FRI':
            return WeeklyMaintenanceWindow_WeekDay.FRI;
        case 6:
        case 'SAT':
            return WeeklyMaintenanceWindow_WeekDay.SAT;
        case 7:
        case 'SUN':
            return WeeklyMaintenanceWindow_WeekDay.SUN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return WeeklyMaintenanceWindow_WeekDay.UNRECOGNIZED;
    }
}
exports.weeklyMaintenanceWindow_WeekDayFromJSON = weeklyMaintenanceWindow_WeekDayFromJSON;
function weeklyMaintenanceWindow_WeekDayToJSON(object) {
    switch (object) {
        case WeeklyMaintenanceWindow_WeekDay.WEEK_DAY_UNSPECIFIED:
            return 'WEEK_DAY_UNSPECIFIED';
        case WeeklyMaintenanceWindow_WeekDay.MON:
            return 'MON';
        case WeeklyMaintenanceWindow_WeekDay.TUE:
            return 'TUE';
        case WeeklyMaintenanceWindow_WeekDay.WED:
            return 'WED';
        case WeeklyMaintenanceWindow_WeekDay.THU:
            return 'THU';
        case WeeklyMaintenanceWindow_WeekDay.FRI:
            return 'FRI';
        case WeeklyMaintenanceWindow_WeekDay.SAT:
            return 'SAT';
        case WeeklyMaintenanceWindow_WeekDay.SUN:
            return 'SUN';
        default:
            return 'UNKNOWN';
    }
}
exports.weeklyMaintenanceWindow_WeekDayToJSON = weeklyMaintenanceWindow_WeekDayToJSON;
const baseMaintenanceWindow = {};
exports.MaintenanceWindow = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.anytime !== undefined) {
            exports.AnytimeMaintenanceWindow.encode(message.anytime, writer.uint32(10).fork()).ldelim();
        }
        if (message.weeklyMaintenanceWindow !== undefined) {
            exports.WeeklyMaintenanceWindow.encode(message.weeklyMaintenanceWindow, writer.uint32(18).fork()).ldelim();
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
const baseWeeklyMaintenanceWindow = { day: 0, hour: 0 };
exports.WeeklyMaintenanceWindow = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.day !== 0) {
            writer.uint32(8).int32(message.day);
        }
        if (message.hour !== 0) {
            writer.uint32(16).int64(message.hour);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWeeklyMaintenanceWindow,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.day = reader.int32();
                    break;
                case 2:
                    message.hour = longToNumber(reader.int64());
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
        if (object.day !== undefined && object.day !== null) {
            message.day = weeklyMaintenanceWindow_WeekDayFromJSON(object.day);
        }
        else {
            message.day = 0;
        }
        if (object.hour !== undefined && object.hour !== null) {
            message.hour = Number(object.hour);
        }
        else {
            message.hour = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.day !== undefined &&
            (obj.day = weeklyMaintenanceWindow_WeekDayToJSON(message.day));
        message.hour !== undefined && (obj.hour = message.hour);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseWeeklyMaintenanceWindow,
        };
        if (object.day !== undefined && object.day !== null) {
            message.day = object.day;
        }
        else {
            message.day = 0;
        }
        if (object.hour !== undefined && object.hour !== null) {
            message.hour = object.hour;
        }
        else {
            message.hour = 0;
        }
        return message;
    },
};
const baseMaintenanceOperation = { info: '' };
exports.MaintenanceOperation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.info !== '') {
            writer.uint32(10).string(message.info);
        }
        if (message.delayedUntil !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.delayedUntil), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaintenanceOperation };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = reader.string();
                    break;
                case 2:
                    message.delayedUntil = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMaintenanceOperation };
        if (object.info !== undefined && object.info !== null) {
            message.info = String(object.info);
        }
        else {
            message.info = '';
        }
        if (object.delayedUntil !== undefined && object.delayedUntil !== null) {
            message.delayedUntil = fromJsonTimestamp(object.delayedUntil);
        }
        else {
            message.delayedUntil = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info);
        message.delayedUntil !== undefined &&
            (obj.delayedUntil = message.delayedUntil.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMaintenanceOperation };
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        else {
            message.info = '';
        }
        if (object.delayedUntil !== undefined && object.delayedUntil !== null) {
            message.delayedUntil = object.delayedUntil;
        }
        else {
            message.delayedUntil = undefined;
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
