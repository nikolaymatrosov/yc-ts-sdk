import { Duration } from '../../../../google/protobuf/duration';
import { DayOfWeek } from '../../../../google/type/dayofweek';
import { TimeOfDay } from '../../../../google/type/timeofday';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export interface MaintenanceWindow {
    /** Updating the master at any time. */
    anytime: AnytimeMaintenanceWindow | undefined;
    /** Updating the master on any day during the specified time window. */
    dailyMaintenanceWindow: DailyMaintenanceWindow | undefined;
    /** Updating the master on selected days during the specified time window. */
    weeklyMaintenanceWindow: WeeklyMaintenanceWindow | undefined;
}
export interface AnytimeMaintenanceWindow {
}
export interface DailyMaintenanceWindow {
    /** Window start time, in the UTC timezone. */
    startTime: TimeOfDay | undefined;
    /** Window duration. */
    duration: Duration | undefined;
}
export interface DaysOfWeekMaintenanceWindow {
    /** Days of the week when automatic updates are allowed. */
    days: DayOfWeek[];
    /** Window start time, in the UTC timezone. */
    startTime: TimeOfDay | undefined;
    /** Window duration. */
    duration: Duration | undefined;
}
export interface WeeklyMaintenanceWindow {
    /** Days of the week and the maintenance window for these days when automatic updates are allowed. */
    daysOfWeek: DaysOfWeekMaintenanceWindow[];
}
export declare const MaintenanceWindow: {
    encode(message: MaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MaintenanceWindow;
    fromJSON(object: any): MaintenanceWindow;
    toJSON(message: MaintenanceWindow): unknown;
    fromPartial(object: DeepPartial<MaintenanceWindow>): MaintenanceWindow;
};
export declare const AnytimeMaintenanceWindow: {
    encode(_: AnytimeMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnytimeMaintenanceWindow;
    fromJSON(_: any): AnytimeMaintenanceWindow;
    toJSON(_: AnytimeMaintenanceWindow): unknown;
    fromPartial(_: DeepPartial<AnytimeMaintenanceWindow>): AnytimeMaintenanceWindow;
};
export declare const DailyMaintenanceWindow: {
    encode(message: DailyMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DailyMaintenanceWindow;
    fromJSON(object: any): DailyMaintenanceWindow;
    toJSON(message: DailyMaintenanceWindow): unknown;
    fromPartial(object: DeepPartial<DailyMaintenanceWindow>): DailyMaintenanceWindow;
};
export declare const DaysOfWeekMaintenanceWindow: {
    encode(message: DaysOfWeekMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DaysOfWeekMaintenanceWindow;
    fromJSON(object: any): DaysOfWeekMaintenanceWindow;
    toJSON(message: DaysOfWeekMaintenanceWindow): unknown;
    fromPartial(object: DeepPartial<DaysOfWeekMaintenanceWindow>): DaysOfWeekMaintenanceWindow;
};
export declare const WeeklyMaintenanceWindow: {
    encode(message: WeeklyMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WeeklyMaintenanceWindow;
    fromJSON(object: any): WeeklyMaintenanceWindow;
    toJSON(message: WeeklyMaintenanceWindow): unknown;
    fromPartial(object: DeepPartial<WeeklyMaintenanceWindow>): WeeklyMaintenanceWindow;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
