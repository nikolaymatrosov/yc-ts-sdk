import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1";
export declare enum GlobalPermission {
    GLOBAL_PERMISSION_UNSPECIFIED = 0,
    /** REPLICATION_CLIENT - Enables use of the SHOW MASTER STATUS, SHOW SLAVE STATUS, and SHOW BINARY LOGS statements. */
    REPLICATION_CLIENT = 1,
    /**
     * REPLICATION_SLAVE - Enables the account to request updates that have been made to databases on the master server,
     * using the SHOW SLAVE HOSTS, SHOW RELAYLOG EVENTS, and SHOW BINLOG EVENTS statements.
     */
    REPLICATION_SLAVE = 2,
    /**
     * PROCESS - Enables display of information about the threads executing within the server
     * (that is, information about the statements being executed by sessions).
     * The privilege enables use of SHOW PROCESSLIST or mysqladmin processlist to see threads belonging
     * to other accounts; you can always see your own threads. The PROCESS privilege also enables use of SHOW ENGINE.
     */
    PROCESS = 3,
    UNRECOGNIZED = -1
}
export declare function globalPermissionFromJSON(object: any): GlobalPermission;
export declare function globalPermissionToJSON(object: GlobalPermission): string;
export declare enum AuthPlugin {
    AUTH_PLUGIN_UNSPECIFIED = 0,
    /** MYSQL_NATIVE_PASSWORD - Use [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/native-pluggable-authentication.html). */
    MYSQL_NATIVE_PASSWORD = 1,
    /** CACHING_SHA2_PASSWORD - Use [Caching SHA-2 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html). */
    CACHING_SHA2_PASSWORD = 2,
    /** SHA256_PASSWORD - Use [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/sha256-pluggable-authentication.html). */
    SHA256_PASSWORD = 3,
    UNRECOGNIZED = -1
}
export declare function authPluginFromJSON(object: any): AuthPlugin;
export declare function authPluginToJSON(object: AuthPlugin): string;
/**
 * A MySQL user. For more information, see
 * the [documentation](/docs/managed-mysql/concepts).
 */
export interface User {
    $type: 'yandex.cloud.mdb.mysql.v1.User';
    /** Name of the MySQL user. */
    name: string;
    /** ID of the MySQL cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
    /** Set of global permissions to grant to the user. */
    globalPermissions: GlobalPermission[];
    /** Set of user connection limits. */
    connectionLimits: ConnectionLimits | undefined;
    /** User authentication plugin. */
    authenticationPlugin: AuthPlugin;
}
export interface Permission {
    $type: 'yandex.cloud.mdb.mysql.v1.Permission';
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
    /** REFERENCES - Creation of a foreign key constraint for the parent table. */
    REFERENCES = 19,
    UNRECOGNIZED = -1
}
export declare function permission_PrivilegeFromJSON(object: any): Permission_Privilege;
export declare function permission_PrivilegeToJSON(object: Permission_Privilege): string;
export interface ConnectionLimits {
    $type: 'yandex.cloud.mdb.mysql.v1.ConnectionLimits';
    /** The maximum permitted number of user questions per hour. */
    maxQuestionsPerHour: number | undefined;
    /** The maximum permitted number of user updates per hour. */
    maxUpdatesPerHour: number | undefined;
    /** The maximum permitted number of simultaneous client connections per hour. */
    maxConnectionsPerHour: number | undefined;
    /** The maximum number of simultaneous connections permitted to any given MySQL user account. */
    maxUserConnections: number | undefined;
}
export interface UserSpec {
    $type: 'yandex.cloud.mdb.mysql.v1.UserSpec';
    /** Name of the MySQL user. */
    name: string;
    /** Password of the MySQL user. */
    password: string;
    /** Set of permissions to grant to the user. */
    permissions: Permission[];
    /** Set of global permissions to grant to the user. */
    globalPermissions: GlobalPermission[];
    /** Set of user connection limits. */
    connectionLimits: ConnectionLimits | undefined;
    /** User authentication plugin. */
    authenticationPlugin: AuthPlugin;
}
export declare const User: {
    $type: "yandex.cloud.mdb.mysql.v1.User";
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const Permission: {
    $type: "yandex.cloud.mdb.mysql.v1.Permission";
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    fromPartial(object: DeepPartial<Permission>): Permission;
};
export declare const ConnectionLimits: {
    $type: "yandex.cloud.mdb.mysql.v1.ConnectionLimits";
    encode(message: ConnectionLimits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectionLimits;
    fromJSON(object: any): ConnectionLimits;
    toJSON(message: ConnectionLimits): unknown;
    fromPartial(object: DeepPartial<ConnectionLimits>): ConnectionLimits;
};
export declare const UserSpec: {
    $type: "yandex.cloud.mdb.mysql.v1.UserSpec";
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
