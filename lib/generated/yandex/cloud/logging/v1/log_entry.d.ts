import { Struct } from '../../../../google/protobuf/struct';
import { LogEntryResource } from '../../../../yandex/cloud/logging/v1/log_resource';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface LogEntry {
    uid: string;
    resource: LogEntryResource | undefined;
    timestamp: Date | undefined;
    ingestedAt: Date | undefined;
    savedAt: Date | undefined;
    level: LogLevel_Level;
    message: string;
    jsonPayload: Struct | undefined;
}
export interface IncomingLogEntry {
    timestamp: Date | undefined;
    level: LogLevel_Level;
    message: string;
    jsonPayload: Struct | undefined;
}
export interface Destination {
    logGroupId: string | undefined;
    folderId: string | undefined;
}
export interface LogLevel {
    level: LogLevel_Level;
}
export declare enum LogLevel_Level {
    LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFO = 3,
    WARN = 4,
    ERROR = 5,
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
