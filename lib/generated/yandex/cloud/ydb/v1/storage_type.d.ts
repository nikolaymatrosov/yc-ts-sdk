import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface StorageType {
    id: string;
    deviceType: string;
    redundancyType: string;
}
export declare const StorageType: {
    encode(message: StorageType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StorageType;
    fromJSON(object: any): StorageType;
    toJSON(message: StorageType): unknown;
    fromPartial(object: DeepPartial<StorageType>): StorageType;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
