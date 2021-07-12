import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.api";
/**
 * Operation is annotation for rpc that returns longrunning operation, describes
 * message types that will be returned in metadata [google.protobuf.Any], and
 * in response [google.protobuf.Any] (for successful operation).
 */
export interface Operation {
    /**
     * Optional. If present, rpc returns operation which metadata field will
     * contains message of specified type.
     */
    metadata: string;
    /**
     * Required. rpc returns operation, in case of success response will contains message of
     * specified field.
     */
    response: string;
}
export declare const Operation: {
    encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Operation;
    fromJSON(object: any): Operation;
    toJSON(message: Operation): unknown;
    fromPartial(object: DeepPartial<Operation>): Operation;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
