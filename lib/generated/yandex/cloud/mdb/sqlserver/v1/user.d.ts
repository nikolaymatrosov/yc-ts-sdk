import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
/** An SQL Server user. */
export interface User {
    /** Name of the SQL Server user. */
    name: string;
    /** ID of the SQL Server cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
}
export interface Permission {
    /** Name of the database the permission grants access to. */
    databaseName: string;
    /** Roles granted to the user within the database. */
    roles: Permission_Role[];
}
export declare enum Permission_Role {
    ROLE_UNSPECIFIED = 0,
    /** DB_OWNER - Members of this fixed database role can perform all configuration and maintenance activities on the database, and can also drop the database in SQL Server. */
    DB_OWNER = 1,
    /** DB_SECURITYADMIN - Members of this fixed database role can modify role membership for custom roles only and manage permissions. They can potentially elevate their privileges and their actions should be monitored. */
    DB_SECURITYADMIN = 2,
    /** DB_ACCESSADMIN - Members of this fixed database role can add or remove access to the database for Windows logins, Windows groups, and SQL Server logins. */
    DB_ACCESSADMIN = 3,
    /** DB_BACKUPOPERATOR - Members of this fixed database role can back up the database. */
    DB_BACKUPOPERATOR = 4,
    /** DB_DDLADMIN - Members of this fixed database role can run any Data Definition Language (DDL) command in a database. */
    DB_DDLADMIN = 5,
    /** DB_DATAWRITER - Members of this fixed database role can add, delete, or change data in all user tables. */
    DB_DATAWRITER = 6,
    /** DB_DATAREADER - Members of this fixed database role can read all data from all user tables. */
    DB_DATAREADER = 7,
    /** DB_DENYDATAWRITER - Members of this fixed database role cannot add, modify, or delete any data in the user tables within a database. Denial has a higher priority than a grant, so you can use this role to quickly restrict one's privileges without explicitly revoking permissions or roles. */
    DB_DENYDATAWRITER = 8,
    /** DB_DENYDATAREADER - Members of this fixed database role cannot read any data in the user tables within a database. Denial has a higher priority than a grant, so you can use this role to quickly restrict one's privileges without explicitly revoking permissions or roles. */
    DB_DENYDATAREADER = 9,
    UNRECOGNIZED = -1
}
export declare function permission_RoleFromJSON(object: any): Permission_Role;
export declare function permission_RoleToJSON(object: Permission_Role): string;
export interface UserSpec {
    /** Name of the SQL Server user. */
    name: string;
    /** Password of the SQL Server user. */
    password: string;
    /** Set of permissions to grant to the user. */
    permissions: Permission[];
}
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const Permission: {
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    fromPartial(object: DeepPartial<Permission>): Permission;
};
export declare const UserSpec: {
    encode(message: UserSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserSpec;
    fromJSON(object: any): UserSpec;
    toJSON(message: UserSpec): unknown;
    fromPartial(object: DeepPartial<UserSpec>): UserSpec;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
