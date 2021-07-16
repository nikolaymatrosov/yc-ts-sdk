import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/** A TLS validation context resource. */
export interface ValidationContext {
    trustedCaId: string | undefined;
    /** X.509 certificate contents in PEM format. */
    trustedCaBytes: string | undefined;
}
export declare const ValidationContext: {
    encode(message: ValidationContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidationContext;
    fromJSON(object: any): ValidationContext;
    toJSON(message: ValidationContext): unknown;
    fromPartial(object: DeepPartial<ValidationContext>): ValidationContext;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
