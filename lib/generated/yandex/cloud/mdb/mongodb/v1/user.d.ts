import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1";
/**
 * A MongoDB User resource. For more information, see the
 * [Developer's Guide](/docs/managed-mongodb/concepts).
 */
export interface User {
    $type: 'yandex.cloud.mdb.mongodb.v1.User';
    /** Name of the MongoDB user. */
    name: string;
    /** ID of the MongoDB cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
}
export interface Permission {
    $type: 'yandex.cloud.mdb.mongodb.v1.Permission';
    /** Name of the database that the permission grants access to. */
    databaseName: string;
    /** MongoDB roles for the [database_name] database that the permission grants. */
    roles: string[];
}
export interface UserSpec {
    $type: 'yandex.cloud.mdb.mongodb.v1.UserSpec';
    /** Name of the MongoDB user. */
    name: string;
    /** Password of the MongoDB user. */
    password: string;
    /** Set of permissions to grant to the user. */
    permissions: Permission[];
}
export declare const User: {
    $type: "yandex.cloud.mdb.mongodb.v1.User";
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const Permission: {
    $type: "yandex.cloud.mdb.mongodb.v1.Permission";
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    fromPartial(object: DeepPartial<Permission>): Permission;
};
export declare const UserSpec: {
    $type: "yandex.cloud.mdb.mongodb.v1.UserSpec";
    encode(message: UserSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserSpec;
    fromJSON(object: any): UserSpec;
    toJSON(message: UserSpec): unknown;
    fromPartial(object: DeepPartial<UserSpec>): UserSpec;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
