import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "google.protobuf";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
export declare enum NullValue {
    /** NULL_VALUE - Null value. */
    NULL_VALUE = 0,
    UNRECOGNIZED = -1
}
export declare function nullValueFromJSON(object: any): NullValue;
export declare function nullValueToJSON(object: NullValue): string;
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
    $type: 'google.protobuf.Struct';
    /** Unordered map of dynamically typed values. */
    fields: {
        [key: string]: Value;
    };
}
export interface Struct_FieldsEntry {
    $type: 'google.protobuf.Struct.FieldsEntry';
    key: string;
    value: Value | undefined;
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
    $type: 'google.protobuf.Value';
    /** Represents a null value. */
    nullValue: NullValue | undefined;
    /** Represents a double value. */
    numberValue: number | undefined;
    /** Represents a string value. */
    stringValue: string | undefined;
    /** Represents a boolean value. */
    boolValue: boolean | undefined;
    /** Represents a structured value. */
    structValue: Struct | undefined;
    /** Represents a repeated `Value`. */
    listValue: ListValue | undefined;
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
    $type: 'google.protobuf.ListValue';
    /** Repeated field of dynamically typed values. */
    values: Value[];
}
export declare const Struct: {
    $type: "google.protobuf.Struct";
    encode(message: Struct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Struct;
    fromJSON(object: any): Struct;
    toJSON(message: Struct): unknown;
    fromPartial(object: DeepPartial<Struct>): Struct;
};
export declare const Struct_FieldsEntry: {
    $type: "google.protobuf.Struct.FieldsEntry";
    encode(message: Struct_FieldsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Struct_FieldsEntry;
    fromJSON(object: any): Struct_FieldsEntry;
    toJSON(message: Struct_FieldsEntry): unknown;
    fromPartial(object: DeepPartial<Struct_FieldsEntry>): Struct_FieldsEntry;
};
export declare const Value: {
    $type: "google.protobuf.Value";
    encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    fromPartial(object: DeepPartial<Value>): Value;
};
export declare const ListValue: {
    $type: "google.protobuf.ListValue";
    encode(message: ListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListValue;
    fromJSON(object: any): ListValue;
    toJSON(message: ListValue): unknown;
    fromPartial(object: DeepPartial<ListValue>): ListValue;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
