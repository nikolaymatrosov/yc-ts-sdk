import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "google.type";
/**
 * Represents a time of day. The date and time zone are either not significant
 * or are specified elsewhere. An API may choose to allow leap seconds. Related
 * types are [google.type.Date](https://github.com/googleapis/googleapis/blob/master/google/type/date.proto) and [google.protobuf.Timestamp](https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/timestamp.proto).
 */
export interface TimeOfDay {
    $type: 'google.type.TimeOfDay';
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
     * to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours: number;
    /** Minutes of hour of day. Must be from 0 to 59. */
    minutes: number;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
     * allow the value 60 if it allows leap-seconds.
     */
    seconds: number;
    /** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
    nanos: number;
}
export declare const TimeOfDay: {
    $type: "google.type.TimeOfDay";
    encode(message: TimeOfDay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TimeOfDay;
    fromJSON(object: any): TimeOfDay;
    toJSON(message: TimeOfDay): unknown;
    fromPartial(object: DeepPartial<TimeOfDay>): TimeOfDay;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
