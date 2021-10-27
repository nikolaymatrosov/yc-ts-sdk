import { Duration } from '../../../../google/protobuf/duration';
import { DayOfWeek } from '../../../../google/type/dayofweek';
import { TimeOfDay } from '../../../../google/type/timeofday';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export interface MaintenanceWindow {
    $type: 'yandex.cloud.k8s.v1.MaintenanceWindow';
    /** Updating the master at any time. */
    anytime: AnytimeMaintenanceWindow | undefined;
    /** Updating the master on any day during the specified time window. */
    dailyMaintenanceWindow: DailyMaintenanceWindow | undefined;
    /** Updating the master on selected days during the specified time window. */
    weeklyMaintenanceWindow: WeeklyMaintenanceWindow | undefined;
}
export interface AnytimeMaintenanceWindow {
    $type: 'yandex.cloud.k8s.v1.AnytimeMaintenanceWindow';
}
export interface DailyMaintenanceWindow {
    $type: 'yandex.cloud.k8s.v1.DailyMaintenanceWindow';
    /** Window start time, in the UTC timezone. */
    startTime: TimeOfDay | undefined;
    /** Window duration. */
    duration: Duration | undefined;
}
export interface DaysOfWeekMaintenanceWindow {
    $type: 'yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow';
    /** Days of the week when automatic updates are allowed. */
    days: DayOfWeek[];
    /** Window start time, in the UTC timezone. */
    startTime: TimeOfDay | undefined;
    /** Window duration. */
    duration: Duration | undefined;
}
export interface WeeklyMaintenanceWindow {
    $type: 'yandex.cloud.k8s.v1.WeeklyMaintenanceWindow';
    /** Days of the week and the maintenance window for these days when automatic updates are allowed. */
    daysOfWeek: DaysOfWeekMaintenanceWindow[];
}
export declare const MaintenanceWindow: {
    $type: "yandex.cloud.k8s.v1.MaintenanceWindow";
    encode(message: MaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MaintenanceWindow;
    fromJSON(object: any): MaintenanceWindow;
    toJSON(message: MaintenanceWindow): unknown;
    fromPartial(object: DeepPartial<MaintenanceWindow>): MaintenanceWindow;
};
export declare const AnytimeMaintenanceWindow: {
    $type: "yandex.cloud.k8s.v1.AnytimeMaintenanceWindow";
    encode(_: AnytimeMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnytimeMaintenanceWindow;
    fromJSON(_: any): AnytimeMaintenanceWindow;
    toJSON(_: AnytimeMaintenanceWindow): unknown;
    fromPartial(_: DeepPartial<AnytimeMaintenanceWindow>): AnytimeMaintenanceWindow;
};
export declare const DailyMaintenanceWindow: {
    $type: "yandex.cloud.k8s.v1.DailyMaintenanceWindow";
    encode(message: DailyMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DailyMaintenanceWindow;
    fromJSON(object: any): DailyMaintenanceWindow;
    toJSON(message: DailyMaintenanceWindow): unknown;
    fromPartial(object: DeepPartial<DailyMaintenanceWindow>): DailyMaintenanceWindow;
};
export declare const DaysOfWeekMaintenanceWindow: {
    $type: "yandex.cloud.k8s.v1.DaysOfWeekMaintenanceWindow";
    encode(message: DaysOfWeekMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DaysOfWeekMaintenanceWindow;
    fromJSON(object: any): DaysOfWeekMaintenanceWindow;
    toJSON(message: DaysOfWeekMaintenanceWindow): unknown;
    fromPartial(object: DeepPartial<DaysOfWeekMaintenanceWindow>): DaysOfWeekMaintenanceWindow;
};
export declare const WeeklyMaintenanceWindow: {
    $type: "yandex.cloud.k8s.v1.WeeklyMaintenanceWindow";
    encode(message: WeeklyMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WeeklyMaintenanceWindow;
    fromJSON(object: any): WeeklyMaintenanceWindow;
    toJSON(message: WeeklyMaintenanceWindow): unknown;
    fromPartial(object: DeepPartial<WeeklyMaintenanceWindow>): WeeklyMaintenanceWindow;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
