import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.redis.v1";
/** A resource preset that describes hardware configuration for a host. */
export interface ResourcePreset {
    $type: 'yandex.cloud.mdb.redis.v1.ResourcePreset';
    /** ID of the resource preset. */
    id: string;
    /** IDs of availability zones where the resource preset is available. */
    zoneIds: string[];
    /** RAM volume for a Redis host created with the preset, in bytes. */
    memory: number;
    /** Number of CPU cores for a Redis host created with the preset. */
    cores: number;
}
export declare const ResourcePreset: {
    $type: "yandex.cloud.mdb.redis.v1.ResourcePreset";
    encode(message: ResourcePreset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourcePreset;
    fromJSON(object: any): ResourcePreset;
    toJSON(message: ResourcePreset): unknown;
    fromPartial(object: DeepPartial<ResourcePreset>): ResourcePreset;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
