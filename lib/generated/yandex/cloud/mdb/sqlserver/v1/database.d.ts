import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
/**
 * An SQL Server database.
 * For more information, see the [Concepts](/docs/managed-sqlserver/concepts) section of the documentation.
 */
export interface Database {
    $type: 'yandex.cloud.mdb.sqlserver.v1.Database';
    /** Name of the database. */
    name: string;
    /** ID of the SQL Server cluster the database belongs to. */
    clusterId: string;
}
export interface DatabaseSpec {
    $type: 'yandex.cloud.mdb.sqlserver.v1.DatabaseSpec';
    /** Name of the database. */
    name: string;
}
export declare const Database: {
    $type: "yandex.cloud.mdb.sqlserver.v1.Database";
    encode(message: Database, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Database;
    fromJSON(object: any): Database;
    toJSON(message: Database): unknown;
    fromPartial(object: DeepPartial<Database>): Database;
};
export declare const DatabaseSpec: {
    $type: "yandex.cloud.mdb.sqlserver.v1.DatabaseSpec";
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
