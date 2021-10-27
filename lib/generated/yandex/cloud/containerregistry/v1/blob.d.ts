import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
/** A Blob resource. */
export interface Blob {
    $type: 'yandex.cloud.containerregistry.v1.Blob';
    /** Output only. ID of the blob. */
    id: string;
    /** Content-addressable identifier of the blob. */
    digest: string;
    /** Size of the blob, specified in bytes. */
    size: number;
    /** List of blob urls. */
    urls: string[];
}
export declare const Blob: {
    $type: "yandex.cloud.containerregistry.v1.Blob";
    encode(message: Blob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Blob;
    fromJSON(object: any): Blob;
    toJSON(message: Blob): unknown;
    fromPartial(object: DeepPartial<Blob>): Blob;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
