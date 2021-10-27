import { Duration } from '../../../../google/protobuf/duration';
import { DayOfWeek } from '../../../../google/type/dayofweek';
import { TimeOfDay } from '../../../../google/type/timeofday';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface BackupSchedule {
    $type: 'yandex.cloud.ydb.v1.BackupSchedule';
    dailyBackupSchedule: DailyBackupSchedule | undefined;
    weeklyBackupSchedule: WeeklyBackupSchedule | undefined;
    recurringBackupSchedule: RecurringBackupSchedule | undefined;
    /**
     * output only field: when next backup will be executed
     * using provided schedule.
     */
    nextExecuteTime: Date | undefined;
}
export interface RecurringBackupSchedule {
    $type: 'yandex.cloud.ydb.v1.RecurringBackupSchedule';
    /** Timestamp of the first recurrence. */
    startTime: Date | undefined;
    /**
     * An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how
     * this backup reccurs.
     * The FREQ values of MINUTELY, and SECONDLY are not supported.
     */
    recurrence: string;
}
export interface DaysOfWeekBackupSchedule {
    $type: 'yandex.cloud.ydb.v1.DaysOfWeekBackupSchedule';
    days: DayOfWeek[];
    executeTime: TimeOfDay | undefined;
}
export interface WeeklyBackupSchedule {
    $type: 'yandex.cloud.ydb.v1.WeeklyBackupSchedule';
    daysOfWeek: DaysOfWeekBackupSchedule[];
}
export interface DailyBackupSchedule {
    $type: 'yandex.cloud.ydb.v1.DailyBackupSchedule';
    executeTime: TimeOfDay | undefined;
}
export interface BackupSettings {
    $type: 'yandex.cloud.ydb.v1.BackupSettings';
    /** name of backup settings */
    name: string;
    /** human readable description. */
    description: string;
    /** provide schedule. if empty, backup will be disabled. */
    backupSchedule: BackupSchedule | undefined;
    /** provide time to live of backup. */
    backupTimeToLive: Duration | undefined;
    /**
     * provide a list of source paths. Each path can be directory, table or even database itself.
     * Each directory (or database) will be traversed recursively and all childs of directory will be included to backup.
     * By default, backup will be created for full database.
     */
    sourcePaths: string[];
    /**
     * provide a list of paths to exclude from backup.
     * Each path is a directory, table, or database.
     * Each directory (or database) will be traversed recursively and all childs of directory will be excluded.
     */
    sourcePathsToExclude: string[];
    type: BackupSettings_Type;
    storageClass: BackupSettings_StorageClass;
}
export declare enum BackupSettings_Type {
    TYPE_UNSPECIFIED = 0,
    SYSTEM = 1,
    USER = 2,
    UNRECOGNIZED = -1
}
export declare function backupSettings_TypeFromJSON(object: any): BackupSettings_Type;
export declare function backupSettings_TypeToJSON(object: BackupSettings_Type): string;
export declare enum BackupSettings_StorageClass {
    STORAGE_CLASS_UNSPECIFIED = 0,
    STANDARD = 1,
    REDUCED_REDUNDANCY = 2,
    STANDARD_IA = 3,
    ONEZONE_IA = 4,
    INTELLIGENT_TIERING = 5,
    GLACIER = 6,
    DEEP_ARCHIVE = 7,
    OUTPOSTS = 8,
    UNRECOGNIZED = -1
}
export declare function backupSettings_StorageClassFromJSON(object: any): BackupSettings_StorageClass;
export declare function backupSettings_StorageClassToJSON(object: BackupSettings_StorageClass): string;
export interface BackupConfig {
    $type: 'yandex.cloud.ydb.v1.BackupConfig';
    backupSettings: BackupSettings[];
}
export interface Backup {
    $type: 'yandex.cloud.ydb.v1.Backup';
    id: string;
    /** human readable backup name. */
    name: string;
    folderId: string;
    databaseId: string;
    /** description of backup. */
    description: string;
    createdAt: Date | undefined;
    /** indicates when backup started. */
    startedAt: Date | undefined;
    /** indicates when backup completed. */
    completedAt: Date | undefined;
    status: Backup_Status;
    /** settings used to make backup. */
    backupSettings: BackupSettings | undefined;
    type: Backup_Type;
    /** size of backup in bytes. */
    size: number;
}
/** id of backup */
export declare enum Backup_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    ERROR = 3,
    CANCELLED = 4,
    UNRECOGNIZED = -1
}
export declare function backup_StatusFromJSON(object: any): Backup_Status;
export declare function backup_StatusToJSON(object: Backup_Status): string;
export declare enum Backup_Type {
    TYPE_UNSPECIFIED = 0,
    /** SYSTEM - indicates that backup started by the system. */
    SYSTEM = 1,
    USER = 2,
    UNRECOGNIZED = -1
}
export declare function backup_TypeFromJSON(object: any): Backup_Type;
export declare function backup_TypeToJSON(object: Backup_Type): string;
export declare const BackupSchedule: {
    $type: "yandex.cloud.ydb.v1.BackupSchedule";
    encode(message: BackupSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupSchedule;
    fromJSON(object: any): BackupSchedule;
    toJSON(message: BackupSchedule): unknown;
    fromPartial(object: DeepPartial<BackupSchedule>): BackupSchedule;
};
export declare const RecurringBackupSchedule: {
    $type: "yandex.cloud.ydb.v1.RecurringBackupSchedule";
    encode(message: RecurringBackupSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecurringBackupSchedule;
    fromJSON(object: any): RecurringBackupSchedule;
    toJSON(message: RecurringBackupSchedule): unknown;
    fromPartial(object: DeepPartial<RecurringBackupSchedule>): RecurringBackupSchedule;
};
export declare const DaysOfWeekBackupSchedule: {
    $type: "yandex.cloud.ydb.v1.DaysOfWeekBackupSchedule";
    encode(message: DaysOfWeekBackupSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DaysOfWeekBackupSchedule;
    fromJSON(object: any): DaysOfWeekBackupSchedule;
    toJSON(message: DaysOfWeekBackupSchedule): unknown;
    fromPartial(object: DeepPartial<DaysOfWeekBackupSchedule>): DaysOfWeekBackupSchedule;
};
export declare const WeeklyBackupSchedule: {
    $type: "yandex.cloud.ydb.v1.WeeklyBackupSchedule";
    encode(message: WeeklyBackupSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WeeklyBackupSchedule;
    fromJSON(object: any): WeeklyBackupSchedule;
    toJSON(message: WeeklyBackupSchedule): unknown;
    fromPartial(object: DeepPartial<WeeklyBackupSchedule>): WeeklyBackupSchedule;
};
export declare const DailyBackupSchedule: {
    $type: "yandex.cloud.ydb.v1.DailyBackupSchedule";
    encode(message: DailyBackupSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DailyBackupSchedule;
    fromJSON(object: any): DailyBackupSchedule;
    toJSON(message: DailyBackupSchedule): unknown;
    fromPartial(object: DeepPartial<DailyBackupSchedule>): DailyBackupSchedule;
};
export declare const BackupSettings: {
    $type: "yandex.cloud.ydb.v1.BackupSettings";
    encode(message: BackupSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupSettings;
    fromJSON(object: any): BackupSettings;
    toJSON(message: BackupSettings): unknown;
    fromPartial(object: DeepPartial<BackupSettings>): BackupSettings;
};
export declare const BackupConfig: {
    $type: "yandex.cloud.ydb.v1.BackupConfig";
    encode(message: BackupConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupConfig;
    fromJSON(object: any): BackupConfig;
    toJSON(message: BackupConfig): unknown;
    fromPartial(object: DeepPartial<BackupConfig>): BackupConfig;
};
export declare const Backup: {
    $type: "yandex.cloud.ydb.v1.Backup";
    encode(message: Backup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Backup;
    fromJSON(object: any): Backup;
    toJSON(message: Backup): unknown;
    fromPartial(object: DeepPartial<Backup>): Backup;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
