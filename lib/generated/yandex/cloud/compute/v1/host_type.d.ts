import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
/**
 * Represents host resources.
 * Note: Platform can use hosts with different number of memory and cores.
 * TODO: Do we need sockets here?
 */
export interface HostType {
    /** Unique type identifier. */
    id: string;
    /** Total number of cores available for instances. */
    cores: number;
    /** Ammount of memory available for instances. */
    memory: number;
}
export declare const HostType: {
    encode(message: HostType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostType;
    fromJSON(object: any): HostType;
    toJSON(message: HostType): unknown;
    fromPartial(object: DeepPartial<HostType>): HostType;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
