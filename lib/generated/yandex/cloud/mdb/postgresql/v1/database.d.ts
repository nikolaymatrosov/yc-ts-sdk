import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1";
/**
 * A PostgreSQL Database resource. For more information, see
 * the [Developer's Guide](/docs/managed-postgresql/concepts).
 */
export interface Database {
    $type: 'yandex.cloud.mdb.postgresql.v1.Database';
    /** Name of the database. */
    name: string;
    /** ID of the PostgreSQL cluster that the database belongs to. */
    clusterId: string;
    /** Name of the user assigned as the owner of the database. */
    owner: string;
    /**
     * POSIX locale for string sorting order.
     * Can only be set at creation time.
     */
    lcCollate: string;
    /**
     * POSIX locale for character classification.
     * Can only be set at creation time.
     */
    lcCtype: string;
    /** PostgreSQL extensions enabled for the database. */
    extensions: Extension[];
}
export interface Extension {
    $type: 'yandex.cloud.mdb.postgresql.v1.Extension';
    /**
     * Name of the extension, e.g. `pg_trgm` or `pg_btree`.
     * Extensions supported by Managed Service for PostgreSQL are [listed in the Developer's Guide](/docs/managed-postgresql/operations/cluster-extensions).
     */
    name: string;
    /** Version of the extension. */
    version: string;
}
export interface DatabaseSpec {
    $type: 'yandex.cloud.mdb.postgresql.v1.DatabaseSpec';
    /** Name of the PostgreSQL database. 1-63 characters long. */
    name: string;
    /**
     * Name of the user to be assigned as the owner of the database.
     * To get the list of available PostgreSQL users, make a [UserService.List] request.
     */
    owner: string;
    /**
     * POSIX locale for string sorting order.
     * Can only be set at creation time.
     */
    lcCollate: string;
    /**
     * POSIX locale for character classification.
     * Can only be set at creation time.
     */
    lcCtype: string;
    /** PostgreSQL extensions to be enabled for the database. */
    extensions: Extension[];
}
export declare const Database: {
    $type: "yandex.cloud.mdb.postgresql.v1.Database";
    encode(message: Database, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Database;
    fromJSON(object: any): Database;
    toJSON(message: Database): unknown;
    fromPartial(object: DeepPartial<Database>): Database;
};
export declare const Extension: {
    $type: "yandex.cloud.mdb.postgresql.v1.Extension";
    encode(message: Extension, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Extension;
    fromJSON(object: any): Extension;
    toJSON(message: Extension): unknown;
    fromPartial(object: DeepPartial<Extension>): Extension;
};
export declare const DatabaseSpec: {
    $type: "yandex.cloud.mdb.postgresql.v1.DatabaseSpec";
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
