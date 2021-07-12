import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
export interface Version {
    /** ID of the version. */
    id: string;
    /** Name of the version. */
    name: string;
    /** Whether version is deprecated. */
    deprecated: boolean;
    /** List of versions that can be updated from current. */
    updatableTo: string[];
}
export declare const Version: {
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    fromPartial(object: DeepPartial<Version>): Version;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
