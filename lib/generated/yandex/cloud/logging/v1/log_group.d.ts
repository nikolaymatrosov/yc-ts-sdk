import { Duration } from '../../../../google/protobuf/duration';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface LogGroup {
    /** Log group ID. */
    id: string;
    /** Log group folder ID. */
    folderId: string;
    /** Log group cloud ID. */
    cloudId: string;
    /** Log group creation time. */
    createdAt: Date | undefined;
    /** Log group name. */
    name: string;
    /** Log group description. */
    description: string;
    /** Log group labels. */
    labels: {
        [key: string]: string;
    };
    /** Status of the log group. */
    status: LogGroup_Status;
    /**
     * Log group entry retention period.
     *
     * Entries will be present in group during this period.
     */
    retentionPeriod: Duration | undefined;
}
/** Possible log group statuses. */
export declare enum LogGroup_Status {
    /**
     * STATUS_UNSPECIFIED - Unknown status.
     *
     * Should never occur.
     */
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Log group is creating. */
    CREATING = 1,
    /** ACTIVE - Log group is ready to accept messages, */
    ACTIVE = 2,
    /**
     * DELETING - Log group is being deleted.
     *
     * No messages will be accepted.
     */
    DELETING = 3,
    /** ERROR - Log group is in failed state. */
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
