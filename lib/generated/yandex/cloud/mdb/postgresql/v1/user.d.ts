import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1";
/**
 * A PostgreSQL User resource. For more information, see
 * the [Developer's Guide](/docs/managed-postgresql/concepts).
 */
export interface User {
    $type: 'yandex.cloud.mdb.postgresql.v1.User';
    /** Name of the PostgreSQL user. */
    name: string;
    /** ID of the PostgreSQL cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions granted to the user to access specific databases. */
    permissions: Permission[];
    /**
     * Maximum number of database connections available to the user.
     *
     * When used in session pooling, this setting limits the number of connections to every single host in PostgreSQL cluster. In this case, the setting's value must be greater than the total number of connections that backend services can open to access the PostgreSQL cluster. The setting's value should not exceed the value of the [Cluster.config.postgresql_config_12.effective_config.max_connections] setting.
     *
     * When used in transaction pooling, this setting limits the number of user's active transactions; therefore, in this mode user can open thousands of connections, but only `N` concurrent connections will be opened, where `N` is the value of the setting.
     *
     * Minimum value: `10` (default: `50`), when used in session pooling.
     */
    connLimit: number;
    settings: UserSettings | undefined;
    /**
     * This flag defines whether the user can login to a PostgreSQL database.
     *
     * Default value: `true` (login is allowed).
     */
    login: boolean | undefined;
    /**
     * Roles and privileges that are granted to the user (`GRANT <role> TO <user>`).
     *
     * For more information, see [the documentation](/docs/managed-postgresql/operations/grant).
     */
    grants: string[];
}
export interface Permission {
    $type: 'yandex.cloud.mdb.postgresql.v1.Permission';
    /** Name of the database that the permission grants access to. */
    databaseName: string;
}
export interface UserSpec {
    $type: 'yandex.cloud.mdb.postgresql.v1.UserSpec';
    /** Name of the PostgreSQL user. */
    name: string;
    /** Password of the PostgreSQL user. */
    password: string;
    /** Set of permissions to grant to the user to access specific databases. */
    permissions: Permission[];
    /**
     * Maximum number of database connections that should be available to the user.
     *
     * When used in session pooling, this setting limits the number of connections to every single host in PostgreSQL cluster. In this case, the setting's value must be greater than the total number of connections that backend services can open to access the PostgreSQL cluster. The setting's value should not exceed the value of the [Cluster.config.postgresql_config_12.effective_config.max_connections] setting.
     *
     * When used in transaction pooling, this setting limits the number of user's active transactions; therefore, in this mode user can open thousands of connections, but only `N` concurrent connections will be opened, where `N` is the value of the setting.
     *
     * Minimum value: `10` (default: `50`), when used in session pooling.
     */
    connLimit: number | undefined;
    /** PostgreSQL settings for the user. */
    settings: UserSettings | undefined;
    /**
     * This flag defines whether the user can login to a PostgreSQL database.
     *
     * Default value: `true` (login is allowed).
     */
    login: boolean | undefined;
    /**
     * Roles and privileges that are granted to the user (`GRANT <role> TO <user>`).
     *
     * For more information, see [the documentation](/docs/managed-postgresql/operations/grant).
     */
    grants: string[];
}
/** PostgreSQL user settings. */
export interface UserSettings {
    $type: 'yandex.cloud.mdb.postgresql.v1.UserSettings';
    /**
     * SQL sets an isolation level for each transaction.
     * This setting defines the default isolation level to be set for all new SQL transactions.
     *
     * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/transaction-iso.html).
     */
    defaultTransactionIsolation: UserSettings_TransactionIsolation;
    /**
     * The maximum time (in milliseconds) for any statement to wait for acquiring a lock on an table, index, row or other database object.
     * If the wait time is longer than the specified amount, then this statement is aborted.
     *
     * Default value: `0` (no control is enforced, a statement waiting time is unlimited).
     */
    lockTimeout: number | undefined;
    /**
     * This setting controls logging of the duration of statements.
     *
     * The duration of each completed statement will be logged if the statement ran for at least the specified amount of time (in milliseconds).
     * E.g., if this setting's value is set to `500`, a statement that took 300 milliseconds to complete will not be logged; on the other hand, the one that took 2000 milliseconds to complete, will be logged.
     *
     * Value of `0` forces PostgreSQL to log the duration of all statements.
     *
     * Value of `-1` (default) disables logging of the duration of statements.
     *
     * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/runtime-config-logging.html).
     */
    logMinDurationStatement: number | undefined;
    /**
     * This setting defines whether DBMS will commit transaction in a synchronous way.
     *
     * When synchronization is enabled, cluster waits for the synchronous operations to be completed prior to reporting `success` to the client.
     * These operations guarantee different levels of the data safety and visibility in the cluster.
     *
     * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/runtime-config-wal.html#GUC-SYNCHRONOUS-COMMIT).
     */
    synchronousCommit: UserSettings_SynchronousCommit;
    /**
     * The maximum storage space size (in kilobytes) that a single process can use to create temporary files.
     * If a transaction exceeds this limit during execution, it will be aborted.
     *
     * A huge query may not fit into a server's RAM, therefore PostgreSQL will use some storage to store and execute such a query. Too big queries can make excessive use of the storage system, effectively making other quieries to run slow. This setting prevents execution of a big queries that can influence other queries by limiting size of temporary files.
     */
    tempFileLimit: number | undefined;
    /**
     * This setting specifies which SQL statements should be logged (on the user level).
     *
     * See in-depth description in [PostgreSQL documentation](https://www.postgresql.org/docs/current/runtime-config-logging.html).
     */
    logStatement: UserSettings_LogStatement;
}
export declare enum UserSettings_SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    /** SYNCHRONOUS_COMMIT_ON - (default value) success is reported to the client if the data is in WAL (Write-Ahead Log), and WAL is written to the storage of both the master and its synchronous standby server. */
    SYNCHRONOUS_COMMIT_ON = 1,
    /**
     * SYNCHRONOUS_COMMIT_OFF - success is reported to the client even if the data is not in WAL.
     * There is no synchronous write operation, data may be loss in case of storage subsystem failure.
     */
    SYNCHRONOUS_COMMIT_OFF = 2,
    /**
     * SYNCHRONOUS_COMMIT_LOCAL - success is reported to the client if the data is in WAL, and WAL is written to the storage of the master server.
     * The transaction may be lost due to storage subsystem failure on the master server.
     */
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    /**
     * SYNCHRONOUS_COMMIT_REMOTE_WRITE - success is reported to the client if the data is in WAL, WAL is written to the storage of the master server, and the server's synchronous standby indicates that it has received WAL and written it out to its operating system.
     * The transaction may be lost due to simultaneous storage subsystem failure on the master and operating system's failure on the synchronous standby.
     */
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    /**
     * SYNCHRONOUS_COMMIT_REMOTE_APPLY - success is reported to the client if the data is in WAL (Write-Ahead Log), WAL is written to the storage of the master server, and its synchronous standby indicates that it has received WAL and applied it.
     * The transaction may be lost due to irrecoverably failure of both the master and its synchronous standby.
     */
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
    UNRECOGNIZED = -1
}
export declare function userSettings_SynchronousCommitFromJSON(object: any): UserSettings_SynchronousCommit;
export declare function userSettings_SynchronousCommitToJSON(object: UserSettings_SynchronousCommit): string;
export declare enum UserSettings_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    /** LOG_STATEMENT_NONE - (default) logs none of SQL statements. */
    LOG_STATEMENT_NONE = 1,
    /** LOG_STATEMENT_DDL - logs all data definition statements (such as `CREATE`, `ALTER`, `DROP` and others). */
    LOG_STATEMENT_DDL = 2,
    /** LOG_STATEMENT_MOD - logs all statements that fall in the `LOG_STATEMENT_DDL` category plus data-modifying statements (such as `INSERT`, `UPDATE` and others). */
    LOG_STATEMENT_MOD = 3,
    /** LOG_STATEMENT_ALL - logs all SQL statements. */
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function userSettings_LogStatementFromJSON(object: any): UserSettings_LogStatement;
export declare function userSettings_LogStatementToJSON(object: UserSettings_LogStatement): string;
export declare enum UserSettings_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    /** TRANSACTION_ISOLATION_READ_UNCOMMITTED - this level behaves like `TRANSACTION_ISOLATION_READ_COMMITTED` in PostgreSQL. */
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    /** TRANSACTION_ISOLATION_READ_COMMITTED - (default) on this level query sees only data committed before the query began. */
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    /** TRANSACTION_ISOLATION_REPEATABLE_READ - on this level all subsequent queries in a transaction will see the same rows, that were read by the first `SELECT` or `INSERT` query in this transaction, unchanged (these rows are locked during the first query). */
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    /**
     * TRANSACTION_ISOLATION_SERIALIZABLE - this level provides the strictest transaction isolation.
     * All queries in the current transaction see only the rows that were fixed prior to execution of the first `SELECT` or `INSERT` query in this transaction.
     * If read and write operations in a concurrent set of serializable transactions overlap and this may cause an inconsistency that is not possible during the serial transaction execution, then one of the transaction will be rolled back, triggering a serialization failure.
     */
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function userSettings_TransactionIsolationFromJSON(object: any): UserSettings_TransactionIsolation;
export declare function userSettings_TransactionIsolationToJSON(object: UserSettings_TransactionIsolation): string;
export declare const User: {
    $type: "yandex.cloud.mdb.postgresql.v1.User";
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const Permission: {
    $type: "yandex.cloud.mdb.postgresql.v1.Permission";
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    fromPartial(object: DeepPartial<Permission>): Permission;
};
export declare const UserSpec: {
    $type: "yandex.cloud.mdb.postgresql.v1.UserSpec";
    encode(message: UserSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserSpec;
    fromJSON(object: any): UserSpec;
    toJSON(message: UserSpec): unknown;
    fromPartial(object: DeepPartial<UserSpec>): UserSpec;
};
export declare const UserSettings: {
    $type: "yandex.cloud.mdb.postgresql.v1.UserSettings";
    encode(message: UserSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserSettings;
    fromJSON(object: any): UserSettings;
    toJSON(message: UserSettings): unknown;
    fromPartial(object: DeepPartial<UserSettings>): UserSettings;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
