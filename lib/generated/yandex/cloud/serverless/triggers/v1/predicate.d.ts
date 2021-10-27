import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.serverless.triggers.v1";
export interface Predicate {
    $type: 'yandex.cloud.serverless.triggers.v1.Predicate';
    andPredicate: AndPredicate | undefined;
    fieldValuePredicate: FieldValuePredicate | undefined;
}
export interface AndPredicate {
    $type: 'yandex.cloud.serverless.triggers.v1.AndPredicate';
    predicate: Predicate[];
}
export interface FieldValuePredicate {
    $type: 'yandex.cloud.serverless.triggers.v1.FieldValuePredicate';
    fieldPath: string;
    /** string representation of the value matches exactly to the given string */
    exact: string | undefined;
    /** value has given prefix */
    prefix: string | undefined;
    /** value has given suffix */
    suffix: string | undefined;
}
export declare const Predicate: {
    $type: "yandex.cloud.serverless.triggers.v1.Predicate";
    encode(message: Predicate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Predicate;
    fromJSON(object: any): Predicate;
    toJSON(message: Predicate): unknown;
    fromPartial(object: DeepPartial<Predicate>): Predicate;
};
export declare const AndPredicate: {
    $type: "yandex.cloud.serverless.triggers.v1.AndPredicate";
    encode(message: AndPredicate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AndPredicate;
    fromJSON(object: any): AndPredicate;
    toJSON(message: AndPredicate): unknown;
    fromPartial(object: DeepPartial<AndPredicate>): AndPredicate;
};
export declare const FieldValuePredicate: {
    $type: "yandex.cloud.serverless.triggers.v1.FieldValuePredicate";
    encode(message: FieldValuePredicate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FieldValuePredicate;
    fromJSON(object: any): FieldValuePredicate;
    toJSON(message: FieldValuePredicate): unknown;
    fromPartial(object: DeepPartial<FieldValuePredicate>): FieldValuePredicate;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
