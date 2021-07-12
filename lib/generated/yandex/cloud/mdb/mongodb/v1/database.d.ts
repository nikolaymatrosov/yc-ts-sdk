import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1";
/**
 * A MongoDB Database resource. For more information, see the
 * [Developer's Guide](/docs/managed-mongodb/concepts).
 */
export interface Database {
    /** Name of the database. */
    name: string;
    /** ID of the MongoDB cluster that the database belongs to. */
    clusterId: string;
}
export interface DatabaseSpec {
    /** Name of the MongoDB database. 1-63 characters long. */
    name: string;
}
export declare const Database: {
    encode(message: Database, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Database;
    fromJSON(object: any): Database;
    toJSON(message: Database): unknown;
    fromPartial(object: DeepPartial<Database>): Database;
};
export declare const DatabaseSpec: {
    encode(message: DatabaseSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DatabaseSpec;
    fromJSON(object: any): DatabaseSpec;
    toJSON(message: DatabaseSpec): unknown;
    fromPartial(object: DeepPartial<DatabaseSpec>): DatabaseSpec;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
