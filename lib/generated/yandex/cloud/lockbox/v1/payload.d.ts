import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.lockbox.v1";
/** A payload. */
export interface Payload {
    /** ID of the version that the payload belongs to. */
    versionId: string;
    /** Payload entries. */
    entries: Payload_Entry[];
}
export interface Payload_Entry {
    /** Non-confidential key of the entry. */
    key: string;
    /** Text value. */
    textValue: string | undefined;
    /** Binary value. */
    binaryValue: Uint8Array | undefined;
}
export declare const Payload: {
    encode(message: Payload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Payload;
    fromJSON(object: any): Payload;
    toJSON(message: Payload): unknown;
    fromPartial(object: DeepPartial<Payload>): Payload;
};
export declare const Payload_Entry: {
    encode(message: Payload_Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Payload_Entry;
    fromJSON(object: any): Payload_Entry;
    toJSON(message: Payload_Entry): unknown;
    fromPartial(object: DeepPartial<Payload_Entry>): Payload_Entry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
