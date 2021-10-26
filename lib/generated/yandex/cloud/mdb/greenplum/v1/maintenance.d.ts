import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.greenplum.v1";
export interface MaintenanceWindow {
    anytime: AnytimeMaintenanceWindow | undefined;
    weeklyMaintenanceWindow: WeeklyMaintenanceWindow | undefined;
}
export interface AnytimeMaintenanceWindow {
}
export interface WeeklyMaintenanceWindow {
    day: WeeklyMaintenanceWindow_WeekDay;
    /** Hour of the day in UTC. */
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
export interface MaintenanceOperation {
    info: string;
    delayedUntil: Date | undefined;
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
export declare const WeeklyMaintenanceWindow: {
    encode(message: WeeklyMaintenanceWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WeeklyMaintenanceWindow;
    fromJSON(object: any): WeeklyMaintenanceWindow;
    toJSON(message: WeeklyMaintenanceWindow): unknown;
    fromPartial(object: DeepPartial<WeeklyMaintenanceWindow>): WeeklyMaintenanceWindow;
};
export declare const MaintenanceOperation: {
    encode(message: MaintenanceOperation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MaintenanceOperation;
    fromJSON(object: any): MaintenanceOperation;
    toJSON(message: MaintenanceOperation): unknown;
    fromPartial(object: DeepPartial<MaintenanceOperation>): MaintenanceOperation;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
