import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
export declare enum FormatSchemaType {
    FORMAT_SCHEMA_TYPE_UNSPECIFIED = 0,
    FORMAT_SCHEMA_TYPE_PROTOBUF = 1,
    FORMAT_SCHEMA_TYPE_CAPNPROTO = 2,
    UNRECOGNIZED = -1
}
export declare function formatSchemaTypeFromJSON(object: any): FormatSchemaType;
export declare function formatSchemaTypeToJSON(object: FormatSchemaType): string;
export interface FormatSchema {
    $type: 'yandex.cloud.mdb.clickhouse.v1.FormatSchema';
    name: string;
    clusterId: string;
    type: FormatSchemaType;
    uri: string;
}
export declare const FormatSchema: {
    $type: "yandex.cloud.mdb.clickhouse.v1.FormatSchema";
    encode(message: FormatSchema, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FormatSchema;
    fromJSON(object: any): FormatSchema;
    toJSON(message: FormatSchema): unknown;
    fromPartial(object: DeepPartial<FormatSchema>): FormatSchema;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
