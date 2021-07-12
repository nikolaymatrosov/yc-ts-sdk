import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface DiskType {
    /** ID of the disk type. */
    id: string;
    /** Description of the disk type. 0-256 characters long. */
    description: string;
    /** Array of availability zones where the disk type is available. */
    zoneIds: string[];
}
export declare const DiskType: {
    encode(message: DiskType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DiskType;
    fromJSON(object: any): DiskType;
    toJSON(message: DiskType): unknown;
    fromPartial(object: DeepPartial<DiskType>): DiskType;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
