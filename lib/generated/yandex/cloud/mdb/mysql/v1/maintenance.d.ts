import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1";
/** A maintenance window settings. */
export interface MaintenanceWindow {
    $type: 'yandex.cloud.mdb.mysql.v1.MaintenanceWindow';
    /** Maintenance operation can be scheduled anytime. */
    anytime: AnytimeMaintenanceWindow | undefined;
    /** Maintenance operation can be scheduled on a weekly basis. */
    weeklyMaintenanceWindow: WeeklyMaintenanceWindow | undefined;
}
export interface AnytimeMaintenanceWindow {
    $type: 'yandex.cloud.mdb.mysql.v1.AnytimeMaintenanceWindow';
}
/** Weelky maintenance window settings. */
export interface WeeklyMaintenanceWindow {
    $type: 'yandex.cloud.mdb.mysql.v1.WeeklyMaintenanceWindow';
    /** Day of the week (in `DDD` format). */
    day: WeeklyMaintenanceWindow_WeekDay;
    /** Hour of the day in UTC (in `HH` format). */
    hour: number;
}
export declare enum WeeklyMaintenanceWindow_WeekDay {
    WEEK_DAY_UNSPECIFIED = 0,
    MON = 1,
    TUE = 2,
    WED = 3,
    THU = 4,
    FRI = 5,
    SAT = 6,
    SUN = 7,
    UNRECOGNIZED = -1
}
export declare function weeklyMaintenanceWindow_WeekDayFromJSON(object: any): WeeklyMaintenanceWindow_WeekDay;
export declare function weeklyMaintenanceWindow_WeekDayToJSON(object: WeeklyMaintenanceWindow_WeekDay): string;
/** A planned maintenance operation. */
export interface MaintenanceOperation {
    $type: 'yandex.cloud.mdb.mysql.v1.MaintenanceOperation';
    /** Information about this maintenance operation. */
    info: string;
    /** Time until which this maintenance operation is delayed. */
    delayedUntil: Date | undefined;
}
export declare const MaintenanceWindow: {
    $type: "yandex.cloud.mdb.mysql.v1.MaintenanceWindow";
    encode(message: MaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MaintenanceWindow;
    fromJSON(object: any): MaintenanceWindow;
    toJSON(message: MaintenanceWindow): unknown;
    fromPartial(object: DeepPartial<MaintenanceWindow>): MaintenanceWindow;
};
export declare const AnytimeMaintenanceWindow: {
    $type: "yandex.cloud.mdb.mysql.v1.AnytimeMaintenanceWindow";
    encode(_: AnytimeMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AnytimeMaintenanceWindow;
    fromJSON(_: any): AnytimeMaintenanceWindow;
    toJSON(_: AnytimeMaintenanceWindow): unknown;
    fromPartial(_: DeepPartial<AnytimeMaintenanceWindow>): AnytimeMaintenanceWindow;
};
export declare const WeeklyMaintenanceWindow: {
    $type: "yandex.cloud.mdb.mysql.v1.WeeklyMaintenanceWindow";
    encode(message: WeeklyMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WeeklyMaintenanceWindow;
    fromJSON(object: any): WeeklyMaintenanceWindow;
    toJSON(message: WeeklyMaintenanceWindow): unknown;
    fromPartial(object: DeepPartial<WeeklyMaintenanceWindow>): WeeklyMaintenanceWindow;
};
export declare const MaintenanceOperation: {
    $type: "yandex.cloud.mdb.mysql.v1.MaintenanceOperation";
    encode(message: MaintenanceOperation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MaintenanceOperation;
    fromJSON(object: any): MaintenanceOperation;
    toJSON(message: MaintenanceOperation): unknown;
    fromPartial(object: DeepPartial<MaintenanceOperation>): MaintenanceOperation;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
