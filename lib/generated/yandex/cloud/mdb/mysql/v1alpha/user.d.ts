import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha";
/**
 * A MySQL user. For more information, see
 * the [documentation](/docs/managed-mysql/concepts).
 */
export interface User {
    $type: 'yandex.cloud.mdb.mysql.v1alpha.User';
    /** Name of the MySQL user. */
    name: string;
    /** ID of the MySQL cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
}
export interface Permission {
    $type: 'yandex.cloud.mdb.mysql.v1alpha.Permission';
    /** Name of the database that the permission grants access to. */
    databaseName: string;
    /** Roles granted to the user within the database. */
    roles: Permission_Privilege[];
}
export declare enum Permission_Privilege {
    PRIVILEGE_UNSPECIFIED = 0,
    /** ALL_PRIVILEGES - All privileges that can be made available to the user. */
    ALL_PRIVILEGES = 1,
    /** ALTER - Altering tables. */
    ALTER = 2,
    /** ALTER_ROUTINE - Altering stored routines (stored procedures and functions). */
    ALTER_ROUTINE = 3,
    /** CREATE - Creating tables or indexes. */
    CREATE = 4,
    /** CREATE_ROUTINE - Creating stored routines. */
    CREATE_ROUTINE = 5,
    /** CREATE_TEMPORARY_TABLES - Creating temporary tables. */
    CREATE_TEMPORARY_TABLES = 6,
    /** CREATE_VIEW - Creating views. */
    CREATE_VIEW = 7,
    /** DELETE - Deleting tables. */
    DELETE = 8,
    /** DROP - Removing tables or views. */
    DROP = 9,
    /** EVENT - Creating, altering, dropping, or displaying events for the Event Scheduler. */
    EVENT = 10,
    /** EXECUTE - Executing stored routines. */
    EXECUTE = 11,
    /** INDEX - Creating and removing indexes. */
    INDEX = 12,
    /** INSERT - Inserting rows into the database. */
    INSERT = 13,
    /** LOCK_TABLES - Using LOCK TABLES statement for tables available with SELECT privilege. */
    LOCK_TABLES = 14,
    /**
     * SELECT - Selecting rows from tables.
     *
     * Some SELECT statements can be allowed without the SELECT privilege. All
     * statements that read column values require the SELECT privilege. See
     * details in [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/privileges-provided.html#priv_select).
     */
    SELECT = 15,
    /** SHOW_VIEW - Using the SHOW CREATE VIEW statement. Also needed for views used with EXPLAIN. */
    SHOW_VIEW = 16,
    /** TRIGGER - Creating, removing, executing, or displaying triggers for a table. */
    TRIGGER = 17,
    /** UPDATE - Updating rows in the database. */
    UPDATE = 18,
    UNRECOGNIZED = -1
}
export declare function permission_PrivilegeFromJSON(object: any): Permission_Privilege;
export declare function permission_PrivilegeToJSON(object: Permission_Privilege): string;
export interface UserSpec {
    $type: 'yandex.cloud.mdb.mysql.v1alpha.UserSpec';
    /** Name of the MySQL user. */
    name: string;
    /** Password of the MySQL user. */
    password: string;
    /** Set of permissions to grant to the user. */
    permissions: Permission[];
}
export declare const User: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.User";
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const Permission: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.Permission";
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    fromPartial(object: DeepPartial<Permission>): Permission;
};
export declare const UserSpec: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.UserSpec";
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
