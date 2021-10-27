import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha";
/**
 * A MySQL database. For more information, see
 * the [documentation](/docs/managed-mysql/concepts).
 */
export interface Database {
    $type: 'yandex.cloud.mdb.mysql.v1alpha.Database';
    /** Name of the database. */
    name: string;
    /** ID of the MySQL cluster that the database belongs to. */
    clusterId: string;
}
export interface DatabaseSpec {
    $type: 'yandex.cloud.mdb.mysql.v1alpha.DatabaseSpec';
    /** Name of the MySQL database. */
    name: string;
}
export declare const Database: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.Database";
    encode(message: Database, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Database;
    fromJSON(object: any): Database;
    toJSON(message: Database): unknown;
    fromPartial(object: DeepPartial<Database>): Database;
};
export declare const DatabaseSpec: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.DatabaseSpec";
    encode(message: DatabaseSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DatabaseSpec;
    fromJSON(object: any): DatabaseSpec;
    toJSON(message: DatabaseSpec): unknown;
    fromPartial(object: DeepPartial<DatabaseSpec>): DatabaseSpec;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
