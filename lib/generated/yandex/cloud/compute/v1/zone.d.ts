import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
/** Availability zone. For more information, see [Availability zones](/docs/overview/concepts/geo-scope). */
export interface Zone {
    $type: 'yandex.cloud.compute.v1.Zone';
    /** ID of the zone. */
    id: string;
    /** ID of the region. */
    regionId: string;
    /** Status of the zone. */
    status: Zone_Status;
}
export declare enum Zone_Status {
    STATUS_UNSPECIFIED = 0,
    /** UP - Zone is available. You can access the resources allocated in this zone. */
    UP = 1,
    /** DOWN - Zone is not available. */
    DOWN = 2,
    UNRECOGNIZED = -1
}
export declare function zone_StatusFromJSON(object: any): Zone_Status;
export declare function zone_StatusToJSON(object: Zone_Status): string;
export declare const Zone: {
    $type: "yandex.cloud.compute.v1.Zone";
    encode(message: Zone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Zone;
    fromJSON(object: any): Zone;
    toJSON(message: Zone): unknown;
    fromPartial(object: DeepPartial<Zone>): Zone;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
