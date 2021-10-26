import { Struct } from '../../../../google/protobuf/struct';
import { LogEntryResource } from '../../../../yandex/cloud/logging/v1/log_resource';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface LogEntry {
    /**
     * Unique entry ID.
     *
     * Useful for logs deduplication.
     */
    uid: string;
    /**
     * Entry resource specification.
     *
     * May contain information about source service and resource ID.
     * Also may be provided by the user.
     */
    resource: LogEntryResource | undefined;
    /** Timestamp of the entry. */
    timestamp: Date | undefined;
    /** Entry ingestion time observed by [LogIngestionService]. */
    ingestedAt: Date | undefined;
    /**
     * Entry save time.
     *
     * Entry is ready to be read since this moment.
     */
    savedAt: Date | undefined;
    /**
     * Entry severity.
     *
     * See [LogLevel.Level] for details.
     */
    level: LogLevel_Level;
    /** Entry text message. */
    message: string;
    /** Entry annotation. */
    jsonPayload: Struct | undefined;
}
export interface IncomingLogEntry {
    /** Timestamp of the entry. */
    timestamp: Date | undefined;
    /**
     * Entry severity.
     *
     * See [LogLevel.Level] for details.
     */
    level: LogLevel_Level;
    /** Entry text message. */
    message: string;
    /** Entry annotation. */
    jsonPayload: Struct | undefined;
}
export interface LogEntryDefaults {
    /**
     * Default entry severity.
     * Will be applied if entry level is unspecified.
     *
     * See [LogLevel.Level] for details.
     */
    level: LogLevel_Level;
    /**
     * Default entry annotation.
     * Will be merged with entry annotation.
     * Any conflict will be resolved in favor of entry own annotation.
     */
    jsonPayload: Struct | undefined;
}
export interface Destination {
    /** Entry should be written to log group resolved by ID. */
    logGroupId: string | undefined;
    /** Entry should be written to default log group for the folder. */
    folderId: string | undefined;
}
export interface LogLevel {
    /**
     * Entry level.
     *
     * See [Level] for possible values.
     */
    level: LogLevel_Level;
}
/** Possible log levels for entries. */
export declare enum LogLevel_Level {
    /**
     * LEVEL_UNSPECIFIED - Default log level.
     *
     * Equivalent to not specifying log level at all.
     */
    LEVEL_UNSPECIFIED = 0,
    /**
     * TRACE - Trace log level.
     *
     * Possible use case: verbose logging of some business logic.
     */
    TRACE = 1,
    /**
     * DEBUG - Debug log level.
     *
     * Possible use case: debugging special cases in application logic.
     */
    DEBUG = 2,
    /**
     * INFO - Info log level.
     *
     * Mostly used for information messages.
     */
    INFO = 3,
    /**
     * WARN - Warn log level.
     *
     * May be used to alert about significant events.
     */
    WARN = 4,
    /**
     * ERROR - Error log level.
     *
     * May be used to alert about errors in infrastructure, logic, etc.
     */
    ERROR = 5,
    /**
     * FATAL - Fatal log level.
     *
     * May be used to alert about unrecoverable failures and events.
     */
    FATAL = 6,
    UNRECOGNIZED = -1
}
export declare function logLevel_LevelFromJSON(object: any): LogLevel_Level;
export declare function logLevel_LevelToJSON(object: LogLevel_Level): string;
export declare const LogEntry: {
    encode(message: LogEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogEntry;
    fromJSON(object: any): LogEntry;
    toJSON(message: LogEntry): unknown;
    fromPartial(object: DeepPartial<LogEntry>): LogEntry;
};
export declare const IncomingLogEntry: {
    encode(message: IncomingLogEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IncomingLogEntry;
    fromJSON(object: any): IncomingLogEntry;
    toJSON(message: IncomingLogEntry): unknown;
    fromPartial(object: DeepPartial<IncomingLogEntry>): IncomingLogEntry;
};
export declare const LogEntryDefaults: {
    encode(message: LogEntryDefaults, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogEntryDefaults;
    fromJSON(object: any): LogEntryDefaults;
    toJSON(message: LogEntryDefaults): unknown;
    fromPartial(object: DeepPartial<LogEntryDefaults>): LogEntryDefaults;
};
export declare const Destination: {
    encode(message: Destination, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Destination;
    fromJSON(object: any): Destination;
    toJSON(message: Destination): unknown;
    fromPartial(object: DeepPartial<Destination>): Destination;
};
export declare const LogLevel: {
    encode(message: LogLevel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogLevel;
    fromJSON(object: any): LogLevel;
    toJSON(message: LogLevel): unknown;
    fromPartial(object: DeepPartial<LogLevel>): LogLevel;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
