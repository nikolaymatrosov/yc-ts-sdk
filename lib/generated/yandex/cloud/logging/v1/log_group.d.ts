import { Duration } from '../../../../google/protobuf/duration';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface LogGroup {
    id: string;
    folderId: string;
    cloudId: string;
    createdAt: Date | undefined;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    status: LogGroup_Status;
    retentionPeriod: Duration | undefined;
}
export declare enum LogGroup_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    DELETING = 3,
    ERROR = 4,
    UNRECOGNIZED = -1
}
export declare function logGroup_StatusFromJSON(object: any): LogGroup_Status;
export declare function logGroup_StatusToJSON(object: LogGroup_Status): string;
export interface LogGroup_LabelsEntry {
    key: string;
    value: string;
}
export declare const LogGroup: {
    encode(message: LogGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogGroup;
    fromJSON(object: any): LogGroup;
    toJSON(message: LogGroup): unknown;
    fromPartial(object: DeepPartial<LogGroup>): LogGroup;
};
export declare const LogGroup_LabelsEntry: {
    encode(message: LogGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogGroup_LabelsEntry;
    fromJSON(object: any): LogGroup_LabelsEntry;
    toJSON(message: LogGroup_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<LogGroup_LabelsEntry>): LogGroup_LabelsEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
