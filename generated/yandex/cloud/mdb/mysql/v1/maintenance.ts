/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.mysql.v1';

/** A maintenance window settings. */
export interface MaintenanceWindow {
    /** Maintenance operation can be scheduled anytime. */
    anytime: AnytimeMaintenanceWindow | undefined;
    /** Maintenance operation can be scheduled on a weekly basis. */
    weeklyMaintenanceWindow: WeeklyMaintenanceWindow | undefined;
}

export interface AnytimeMaintenanceWindow {}

/** Weelky maintenance window settings. */
export interface WeeklyMaintenanceWindow {
    /** Day of the week (in `DDD` format). */
    day: WeeklyMaintenanceWindow_WeekDay;
    /** Hour of the day in UTC (in `HH` format). */
    hour: number;
}

export enum WeeklyMaintenanceWindow_WeekDay {
    WEEK_DAY_UNSPECIFIED = 0,
    MON = 1,
    TUE = 2,
    WED = 3,
    THU = 4,
    FRI = 5,
    SAT = 6,
    SUN = 7,
    UNRECOGNIZED = -1,
}

export function weeklyMaintenanceWindow_WeekDayFromJSON(
    object: any
): WeeklyMaintenanceWindow_WeekDay {
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

export function weeklyMaintenanceWindow_WeekDayToJSON(
    object: WeeklyMaintenanceWindow_WeekDay
): string {
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

/** A planned maintenance operation. */
export interface MaintenanceOperation {
    /** Information about this maintenance operation. */
    info: string;
    /** Time until which this maintenance operation is delayed. */
    delayedUntil: Date | undefined;
}

const baseMaintenanceWindow: object = {};

export const MaintenanceWindow = {
    encode(
        message: MaintenanceWindow,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.anytime !== undefined) {
            AnytimeMaintenanceWindow.encode(
                message.anytime,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.weeklyMaintenanceWindow !== undefined) {
            WeeklyMaintenanceWindow.encode(
                message.weeklyMaintenanceWindow,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MaintenanceWindow {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaintenanceWindow } as MaintenanceWindow;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.anytime = AnytimeMaintenanceWindow.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
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

    fromJSON(object: any): MaintenanceWindow {
        const message = { ...baseMaintenanceWindow } as MaintenanceWindow;
        if (object.anytime !== undefined && object.anytime !== null) {
            message.anytime = AnytimeMaintenanceWindow.fromJSON(object.anytime);
        } else {
            message.anytime = undefined;
        }
        if (
            object.weeklyMaintenanceWindow !== undefined &&
            object.weeklyMaintenanceWindow !== null
        ) {
            message.weeklyMaintenanceWindow = WeeklyMaintenanceWindow.fromJSON(
                object.weeklyMaintenanceWindow
            );
        } else {
            message.weeklyMaintenanceWindow = undefined;
        }
        return message;
    },

    toJSON(message: MaintenanceWindow): unknown {
        const obj: any = {};
        message.anytime !== undefined &&
            (obj.anytime = message.anytime
                ? AnytimeMaintenanceWindow.toJSON(message.anytime)
                : undefined);
        message.weeklyMaintenanceWindow !== undefined &&
            (obj.weeklyMaintenanceWindow = message.weeklyMaintenanceWindow
                ? WeeklyMaintenanceWindow.toJSON(
                      message.weeklyMaintenanceWindow
                  )
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<MaintenanceWindow>): MaintenanceWindow {
        const message = { ...baseMaintenanceWindow } as MaintenanceWindow;
        if (object.anytime !== undefined && object.anytime !== null) {
            message.anytime = AnytimeMaintenanceWindow.fromPartial(
                object.anytime
            );
        } else {
            message.anytime = undefined;
        }
        if (
            object.weeklyMaintenanceWindow !== undefined &&
            object.weeklyMaintenanceWindow !== null
        ) {
            message.weeklyMaintenanceWindow =
                WeeklyMaintenanceWindow.fromPartial(
                    object.weeklyMaintenanceWindow
                );
        } else {
            message.weeklyMaintenanceWindow = undefined;
        }
        return message;
    },
};

const baseAnytimeMaintenanceWindow: object = {};

export const AnytimeMaintenanceWindow = {
    encode(
        _: AnytimeMaintenanceWindow,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AnytimeMaintenanceWindow {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAnytimeMaintenanceWindow,
        } as AnytimeMaintenanceWindow;
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

    fromJSON(_: any): AnytimeMaintenanceWindow {
        const message = {
            ...baseAnytimeMaintenanceWindow,
        } as AnytimeMaintenanceWindow;
        return message;
    },

    toJSON(_: AnytimeMaintenanceWindow): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(
        _: DeepPartial<AnytimeMaintenanceWindow>
    ): AnytimeMaintenanceWindow {
        const message = {
            ...baseAnytimeMaintenanceWindow,
        } as AnytimeMaintenanceWindow;
        return message;
    },
};

const baseWeeklyMaintenanceWindow: object = { day: 0, hour: 0 };

export const WeeklyMaintenanceWindow = {
    encode(
        message: WeeklyMaintenanceWindow,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.day !== 0) {
            writer.uint32(8).int32(message.day);
        }
        if (message.hour !== 0) {
            writer.uint32(16).int64(message.hour);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): WeeklyMaintenanceWindow {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWeeklyMaintenanceWindow,
        } as WeeklyMaintenanceWindow;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.day = reader.int32() as any;
                    break;
                case 2:
                    message.hour = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WeeklyMaintenanceWindow {
        const message = {
            ...baseWeeklyMaintenanceWindow,
        } as WeeklyMaintenanceWindow;
        if (object.day !== undefined && object.day !== null) {
            message.day = weeklyMaintenanceWindow_WeekDayFromJSON(object.day);
        } else {
            message.day = 0;
        }
        if (object.hour !== undefined && object.hour !== null) {
            message.hour = Number(object.hour);
        } else {
            message.hour = 0;
        }
        return message;
    },

    toJSON(message: WeeklyMaintenanceWindow): unknown {
        const obj: any = {};
        message.day !== undefined &&
            (obj.day = weeklyMaintenanceWindow_WeekDayToJSON(message.day));
        message.hour !== undefined && (obj.hour = message.hour);
        return obj;
    },

    fromPartial(
        object: DeepPartial<WeeklyMaintenanceWindow>
    ): WeeklyMaintenanceWindow {
        const message = {
            ...baseWeeklyMaintenanceWindow,
        } as WeeklyMaintenanceWindow;
        if (object.day !== undefined && object.day !== null) {
            message.day = object.day;
        } else {
            message.day = 0;
        }
        if (object.hour !== undefined && object.hour !== null) {
            message.hour = object.hour;
        } else {
            message.hour = 0;
        }
        return message;
    },
};

const baseMaintenanceOperation: object = { info: '' };

export const MaintenanceOperation = {
    encode(
        message: MaintenanceOperation,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.info !== '') {
            writer.uint32(10).string(message.info);
        }
        if (message.delayedUntil !== undefined) {
            Timestamp.encode(
                toTimestamp(message.delayedUntil),
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MaintenanceOperation {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaintenanceOperation } as MaintenanceOperation;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = reader.string();
                    break;
                case 2:
                    message.delayedUntil = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MaintenanceOperation {
        const message = { ...baseMaintenanceOperation } as MaintenanceOperation;
        if (object.info !== undefined && object.info !== null) {
            message.info = String(object.info);
        } else {
            message.info = '';
        }
        if (object.delayedUntil !== undefined && object.delayedUntil !== null) {
            message.delayedUntil = fromJsonTimestamp(object.delayedUntil);
        } else {
            message.delayedUntil = undefined;
        }
        return message;
    },

    toJSON(message: MaintenanceOperation): unknown {
        const obj: any = {};
        message.info !== undefined && (obj.info = message.info);
        message.delayedUntil !== undefined &&
            (obj.delayedUntil = message.delayedUntil.toISOString());
        return obj;
    },

    fromPartial(
        object: DeepPartial<MaintenanceOperation>
    ): MaintenanceOperation {
        const message = { ...baseMaintenanceOperation } as MaintenanceOperation;
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        } else {
            message.info = '';
        }
        if (object.delayedUntil !== undefined && object.delayedUntil !== null) {
            message.delayedUntil = object.delayedUntil;
        } else {
            message.delayedUntil = undefined;
        }
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
