import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface LogEntryResource {
    type: string;
    id: string;
}
export interface LogGroupResource {
    type: string;
    ids: string[];
}
export declare const LogEntryResource: {
    encode(message: LogEntryResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogEntryResource;
    fromJSON(object: any): LogEntryResource;
    toJSON(message: LogEntryResource): unknown;
    fromPartial(object: DeepPartial<LogEntryResource>): LogEntryResource;
};
export declare const LogGroupResource: {
    encode(message: LogGroupResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogGroupResource;
    fromJSON(object: any): LogGroupResource;
    toJSON(message: LogGroupResource): unknown;
    fromPartial(object: DeepPartial<LogGroupResource>): LogGroupResource;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
