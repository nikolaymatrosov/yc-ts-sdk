import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1.config";
/** Options and structure of `MysqlConfig8_0` reflects MySQL 8.0 configuration file */
export interface Mysqlconfig80 {
    /**
     * Size of the InnoDB buffer pool used for caching table and index data.
     *
     * For details, see [MySQL documentation for the parameter](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_buffer_pool_size).
     */
    innodbBufferPoolSize: number | undefined;
    /**
     * The maximum permitted number of simultaneous client connections.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_connections).
     */
    maxConnections: number | undefined;
    /**
     * Time that it takes to process a query before it is considered slow.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_long_query_time).
     */
    longQueryTime: number | undefined;
    /**
     * Enable writing of general query log of MySQL.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_general_log).
     */
    generalLog: boolean | undefined;
    /**
     * Enable writing of audit log of MySQL.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/audit-log-reference.html#audit-log-options-variables).
     */
    auditLog: boolean | undefined;
    /**
     * Server SQL mode of MySQL.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-setting).
     */
    sqlMode: Mysqlconfig80_SQLMode[];
    /**
     * The maximum size in bytes of one packet.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_allowed_packet).
     */
    maxAllowedPacket: number | undefined;
    /**
     * Authentication plugin used in the managed MySQL cluster.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_authentication_plugin)
     */
    defaultAuthenticationPlugin: Mysqlconfig80_AuthPlugin;
    /**
     * Transaction log flush behaviour.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_flush_log_at_trx_commit)
     */
    innodbFlushLogAtTrxCommit: number | undefined;
    /**
     * Max time in seconds for a transaction to wait for a row lock
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_lock_wait_timeout)
     */
    innodbLockWaitTimeout: number | undefined;
    /**
     * Default transaction isolation level.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_transaction_isolation)
     */
    transactionIsolation: Mysqlconfig80_TransactionIsolation;
    /**
     * Print information about deadlocks in error log
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_print_all_deadlocks)
     */
    innodbPrintAllDeadlocks: boolean | undefined;
    /**
     * The number of seconds to wait for more data from a connection before aborting the read.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_net_read_timeout)
     */
    netReadTimeout: number | undefined;
    /**
     * The number of seconds to wait for a block to be written to a connection before aborting the write.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_net_write_timeout)
     */
    netWriteTimeout: number | undefined;
    /**
     * The maximum permitted result length in bytes for the GROUP_CONCAT() function.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_group_concat_max_len)
     */
    groupConcatMaxLen: number | undefined;
    /**
     * The maximum size of internal in-memory temporary tables.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_tmp_table_size)
     */
    tmpTableSize: number | undefined;
    /**
     * This variable sets the maximum size to which user-created MEMORY tables are permitted to grow.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_heap_table_size)
     */
    maxHeapTableSize: number | undefined;
    /**
     * The servers default time zone.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-options.html#option_mysqld_default-time-zone)
     */
    defaultTimeZone: string;
    /**
     * The servers default character set.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_character_set_server)
     */
    characterSetServer: string;
    /**
     * The server default collation.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_collation_server)
     */
    collationServer: string;
    /**
     * Enables Innodb adaptive hash index
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_adaptive_hash_index)
     */
    innodbAdaptiveHashIndex: boolean | undefined;
    /**
     * Enables the NUMA interleave memory policy for allocation of the InnoDB buffer pool.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_numa_interleave)
     */
    innodbNumaInterleave: boolean | undefined;
    /**
     * The size in bytes of the buffer that InnoDB uses to write to the log files on disk.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_buffer_size)
     */
    innodbLogBufferSize: number | undefined;
    /**
     * The size in bytes of the single Innodb Redo log file.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_log_file_size)
     */
    innodbLogFileSize: number | undefined;
    /**
     * Limits IO available for InnoDB background tasks
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_io_capacity)
     */
    innodbIoCapacity: number | undefined;
    /**
     * Limits IO available for InnoDB background tasks
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_io_capacity_max)
     */
    innodbIoCapacityMax: number | undefined;
    /**
     * The number of I/O threads for read operations in InnoDB.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_read_io_threads)
     */
    innodbReadIoThreads: number | undefined;
    /**
     * The number of I/O threads for write operations in InnoDB.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_write_io_threads)
     */
    innodbWriteIoThreads: number | undefined;
    /**
     * The number of background threads devoted to the InnoDB purge operation.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_purge_threads)
     */
    innodbPurgeThreads: number | undefined;
    /**
     * Defines the maximum number of threads permitted inside of InnoDB.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_thread_concurrency)
     */
    innodbThreadConcurrency: number | undefined;
    /**
     * Limits the max size of InnoDB temp tablespace
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/innodb-parameters.html#sysvar_innodb_temp_data_file_path)
     */
    innodbTempDataFileMaxSize: number | undefined;
    /**
     * How many threads the server should cache for reuse.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_thread_cache_size).
     */
    threadCacheSize: number | undefined;
    /**
     * The stack size for each thread. The default is large enough for normal operation.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_thread_stack).
     */
    threadStack: number | undefined;
    /**
     * The minimum size of the buffer that is used for plain index scans, range index scans, and joins that do not use indexes and thus perform full table scans.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_join_buffer_size).
     */
    joinBufferSize: number | undefined;
    /**
     * Each session that must perform a sort allocates a buffer of this size.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_sort_buffer_size).
     */
    sortBufferSize: number | undefined;
    /**
     * The number of table definitions that can be stored in the definition cache.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_definition_cache).
     */
    tableDefinitionCache: number | undefined;
    /**
     * The number of open tables for all threads.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_open_cache).
     */
    tableOpenCache: number | undefined;
    /**
     * The number of open tables cache instances.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_table_open_cache_instances).
     */
    tableOpenCacheInstances: number | undefined;
    /**
     * This system variable determines whether the server enables certain nonstandard behaviors for default values and NULL-value handling in TIMESTAMP columns.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_explicit_defaults_for_timestamp).
     */
    explicitDefaultsForTimestamp: boolean | undefined;
    /**
     * Can be used to control the operation of AUTO_INCREMENT columns.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-master.html#sysvar_auto_increment_increment).
     */
    autoIncrementIncrement: number | undefined;
    /**
     * Can be used to control the operation of AUTO_INCREMENT columns.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-master.html#sysvar_auto_increment_offset).
     */
    autoIncrementOffset: number | undefined;
    /**
     * Controls how often the MySQL server synchronizes the binary log to disk.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_sync_binlog).
     */
    syncBinlog: number | undefined;
    /**
     * The size of the cache to hold changes to the binary log during a transaction.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_cache_size).
     */
    binlogCacheSize: number | undefined;
    /**
     * Controls how many microseconds the binary log commit waits before synchronizing the binary log file to disk.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_group_commit_sync_delay).
     */
    binlogGroupCommitSyncDelay: number | undefined;
    /**
     * For MySQL row-based replication, this variable determines how row images are written to the binary log.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_row_image).
     */
    binlogRowImage: Mysqlconfig80_BinlogRowImage;
    /**
     * When enabled, it causes the server to write informational log events such as row query log events into its binary log.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_rows_query_log_events).
     */
    binlogRowsQueryLogEvents: boolean | undefined;
    /**
     * The number of replica acknowledgments the source must receive per transaction before proceeding.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-master.html#sysvar_rpl_semi_sync_master_wait_for_slave_count).
     */
    rplSemiSyncMasterWaitForSlaveCount: number | undefined;
    /**
     * When using a multithreaded replica, this variable specifies the policy used to decide which transactions are allowed to execute in parallel on the replica.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_parallel_type).
     */
    slaveParallelType: Mysqlconfig80_SlaveParallelType;
    /**
     * Sets the number of applier threads for executing replication transactions in parallel.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_slave_parallel_workers).
     */
    slaveParallelWorkers: number | undefined;
    /**
     * The time limit for regular expression matching operations performed by REGEXP_LIKE and similar functions
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/replication-options-replica.html#sysvar_regexp_time_limit).
     */
    regexpTimeLimit: number | undefined;
    /** The size of the binary log to hold. */
    mdbPreserveBinlogBytes: number | undefined;
    /**
     * The number of seconds the server waits for activity on an interactive connection before closing it.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout).
     */
    interactiveTimeout: number | undefined;
    /**
     * The number of seconds the server waits for activity on a noninteractive connection before closing it.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout).
     */
    waitTimeout: number | undefined;
    /** Replication lag threshold (seconds) which will switch MySQL to 'offline_mode = ON' to prevent users from reading stale data. */
    mdbOfflineModeEnableLag: number | undefined;
    /**
     * Replication lag threshold (seconds) which will switch MySQL to 'offline_mode = OFF'.
     * Should be less than mdb_offline_mode_enable_lag.
     */
    mdbOfflineModeDisableLag: number | undefined;
    /**
     * The limit on memory consumption for the range optimizer.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_range_optimizer_max_mem_size).
     */
    rangeOptimizerMaxMemSize: number | undefined;
}
export declare enum Mysqlconfig80_SQLMode {
    SQLMODE_UNSPECIFIED = 0,
    ALLOW_INVALID_DATES = 1,
    ANSI_QUOTES = 2,
    ERROR_FOR_DIVISION_BY_ZERO = 3,
    HIGH_NOT_PRECEDENCE = 4,
    IGNORE_SPACE = 5,
    NO_AUTO_VALUE_ON_ZERO = 6,
    NO_BACKSLASH_ESCAPES = 7,
    NO_ENGINE_SUBSTITUTION = 8,
    NO_UNSIGNED_SUBTRACTION = 9,
    NO_ZERO_DATE = 10,
    NO_ZERO_IN_DATE = 11,
    ONLY_FULL_GROUP_BY = 15,
    PAD_CHAR_TO_FULL_LENGTH = 16,
    PIPES_AS_CONCAT = 17,
    REAL_AS_FLOAT = 18,
    STRICT_ALL_TABLES = 19,
    STRICT_TRANS_TABLES = 20,
    TIME_TRUNCATE_FRACTIONAL = 21,
    ANSI = 22,
    TRADITIONAL = 23,
    NO_DIR_IN_CREATE = 24,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig80_SQLModeFromJSON(object: any): Mysqlconfig80_SQLMode;
export declare function mysqlconfig80_SQLModeToJSON(object: Mysqlconfig80_SQLMode): string;
export declare enum Mysqlconfig80_AuthPlugin {
    AUTH_PLUGIN_UNSPECIFIED = 0,
    /** MYSQL_NATIVE_PASSWORD - Using [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/native-pluggable-authentication.html). */
    MYSQL_NATIVE_PASSWORD = 1,
    /** CACHING_SHA2_PASSWORD - Using [Caching SHA-2 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html). */
    CACHING_SHA2_PASSWORD = 2,
    /** SHA256_PASSWORD - Using [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/sha256-pluggable-authentication.html). */
    SHA256_PASSWORD = 3,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig80_AuthPluginFromJSON(object: any): Mysqlconfig80_AuthPlugin;
export declare function mysqlconfig80_AuthPluginToJSON(object: Mysqlconfig80_AuthPlugin): string;
export declare enum Mysqlconfig80_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    READ_COMMITTED = 1,
    REPEATABLE_READ = 2,
    SERIALIZABLE = 3,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig80_TransactionIsolationFromJSON(object: any): Mysqlconfig80_TransactionIsolation;
export declare function mysqlconfig80_TransactionIsolationToJSON(object: Mysqlconfig80_TransactionIsolation): string;
export declare enum Mysqlconfig80_BinlogRowImage {
    BINLOG_ROW_IMAGE_UNSPECIFIED = 0,
    FULL = 1,
    MINIMAL = 2,
    NOBLOB = 3,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig80_BinlogRowImageFromJSON(object: any): Mysqlconfig80_BinlogRowImage;
export declare function mysqlconfig80_BinlogRowImageToJSON(object: Mysqlconfig80_BinlogRowImage): string;
export declare enum Mysqlconfig80_SlaveParallelType {
    SLAVE_PARALLEL_TYPE_UNSPECIFIED = 0,
    DATABASE = 1,
    LOGICAL_CLOCK = 2,
    UNRECOGNIZED = -1
}
export declare function mysqlconfig80_SlaveParallelTypeFromJSON(object: any): Mysqlconfig80_SlaveParallelType;
export declare function mysqlconfig80_SlaveParallelTypeToJSON(object: Mysqlconfig80_SlaveParallelType): string;
export interface Mysqlconfigset80 {
    /**
     * Effective settings for a MySQL 8.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mysqlconfig80 | undefined;
    /** User-defined settings for a MySQL 8.0 cluster. */
    userConfig: Mysqlconfig80 | undefined;
    /** Default configuration for a MySQL 8.0 cluster. */
    defaultConfig: Mysqlconfig80 | undefined;
}
export declare const Mysqlconfig80: {
    encode(message: Mysqlconfig80, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mysqlconfig80;
    fromJSON(object: any): Mysqlconfig80;
    toJSON(message: Mysqlconfig80): unknown;
    fromPartial(object: DeepPartial<Mysqlconfig80>): Mysqlconfig80;
};
export declare const Mysqlconfigset80: {
    encode(message: Mysqlconfigset80, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mysqlconfigset80;
    fromJSON(object: any): Mysqlconfigset80;
    toJSON(message: Mysqlconfigset80): unknown;
    fromPartial(object: DeepPartial<Mysqlconfigset80>): Mysqlconfigset80;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
