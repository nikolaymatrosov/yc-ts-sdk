/* eslint-disable */
import { Int64Value, BoolValue } from '../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

/**
 * A ClickHouse User resource. For more information, see
 * the [Developer's guide](/docs/managed-clickhouse/concepts).
 */
export interface User {
    /** Name of the ClickHouse user. */
    name: string;
    /** ID of the ClickHouse cluster the user belongs to. */
    clusterId: string;
    /** Set of permissions granted to the user. */
    permissions: Permission[];
    settings: UserSettings | undefined;
    /** Set of quotas assigned to the user. */
    quotas: UserQuota[];
}

export interface Permission {
    /** Name of the database that the permission grants access to. */
    databaseName: string;
}

export interface UserSpec {
    /** Name of the ClickHouse user. */
    name: string;
    /** Password of the ClickHouse user. */
    password: string;
    /** Set of permissions to grant to the user. */
    permissions: Permission[];
    settings: UserSettings | undefined;
    /** Set of quotas assigned to the user. */
    quotas: UserQuota[];
}

/**
 * ClickHouse user settings. Supported settings are a limited subset of all settings
 * described in [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/settings/).
 */
export interface UserSettings {
    /**
     * Restricts permissions for non-DDL queries. To restrict permissions for DDL queries, use [allow_ddl] instead.
     * * **0** (default)-no restrictions.
     * * **1**-only read data queries are allowed.
     * * **2**-read data and change settings queries are allowed.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/permissions-for-queries/#settings_readonly).
     */
    readonly: number | undefined;
    /**
     * Determines whether DDL queries are allowed (e.g., **CREATE**, **ALTER**, **RENAME**, etc).
     *
     * Default value: **true**.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/permissions-for-queries/#settings_allow_ddl).
     */
    allowDdl: boolean | undefined;
    /**
     * Enables or disables write quorum for ClickHouse cluster.
     * If the value is less than **2**, then write quorum is disabled, otherwise it is enabled.
     *
     * When used, write quorum guarantees that ClickHouse has written data to the quorum of **insert_quorum** replicas with no errors until the [insert_quorum_timeout] expires.
     * All replicas in the quorum are in the consistent state, meaning that they contain linearized data from the previous **INSERT** queries.
     * Employ write quorum, if you need the guarantees that the written data would not be lost in case of one or more replicas failure.
     *
     * You can use [select_sequential_consistency] setting to read the data written with write quorum.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#settings-insert_quorum).
     */
    insertQuorum: number | undefined;
    /**
     * Connection timeout in milliseconds.
     *
     * Value must be greater than **0** (default: **10000**, 10 seconds).
     */
    connectTimeout: number | undefined;
    /**
     * Receive timeout in milliseconds.
     *
     * Value must be greater than **0** (default: **300000**, 300 seconds or 5 minutes).
     */
    receiveTimeout: number | undefined;
    /**
     * Send timeout in milliseconds.
     *
     * Value must be greater than **0** (default: **300000**, 300 seconds or 5 minutes).
     */
    sendTimeout: number | undefined;
    /**
     * Quorum write timeout in milliseconds.
     *
     * If the write quorum is enabled in the cluster, this timeout expires and some data is not written to the [insert_quorum] replicas, then ClickHouse will abort the execution of **INSERT** query and return an error.
     * In this case, the client must send the query again to write the data block into the same or another replica.
     *
     * Minimum value: **1000**, 1 second (default: **60000**, 1 minute).
     */
    insertQuorumTimeout: number | undefined;
    /**
     * Determines the behavior of **SELECT** queries from the replicated table: if enabled, ClickHouse will terminate a query with error message in case the replica does not have a chunk written with the quorum and will not read the parts that have not yet been written with the quorum.
     *
     * Default value: **false** (sequential consistency is disabled).
     */
    selectSequentialConsistency: boolean | undefined;
    /**
     * Max replica delay in milliseconds. If a replica lags more than the set value, this replica is not used and becomes a stale one.
     *
     * Minimum value: **1000**, 1 second (default: **300000**, 300 seconds or 5 minutes).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#settings-max_replica_delay_for_distributed_queries).
     */
    maxReplicaDelayForDistributedQueries: number | undefined;
    /**
     * Enables or disables query forcing to a stale replica in case the actual data is unavailable.
     * If enabled, ClickHouse will choose the most up-to-date replica and force the query to use the data in this replica.
     * This setting can be used when doing **SELECT** query from a distributed table that points to replicated tables.
     *
     * Default value: **true** (query forcing is enabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#settings-fallback_to_stale_replicas_for_distributed_queries).
     */
    fallbackToStaleReplicasForDistributedQueries: boolean | undefined;
    /**
     * Wait mode for asynchronous actions in **ALTER** queries on replicated tables:
     *
     * * **0**-do not wait for replicas.
     * * **1**-only wait for own execution (default).
     * * **2**-wait for all replicas.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/sql-reference/statements/alter/#synchronicity-of-alter-queries).
     */
    replicationAlterPartitionsSync: number | undefined;
    /**
     * Determine the behavior of distributed subqueries.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#distributed-product-mode).
     */
    distributedProductMode: UserSettings_DistributedProductMode;
    /**
     * Enables of disables memory saving mode when doing distributed aggregation.
     *
     * When ClickHouse works with a distributed query, external aggregation is done on remote servers.
     * Enable this setting to achieve a smaller memory footprint on the server that sourced such a distributed query.
     *
     * Default value: **false** (memory saving mode is disabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/sql-reference/statements/select/group-by/#select-group-by-in-external-memory).
     */
    distributedAggregationMemoryEfficient: boolean | undefined;
    /** Timeout for DDL queries, in milliseconds. */
    distributedDdlTaskTimeout: number | undefined;
    /**
     * Enables or disables silent skipping of unavailable shards.
     *
     * A shard is considered unavailable if all its replicas are also unavailable.
     *
     * Default value: **false** (silent skipping is disabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#settings-skip_unavailable_shards).
     */
    skipUnavailableShards: boolean | undefined;
    /**
     * Enables or disables query compilation.
     * If you execute a lot of structurally identical queries, then enable this setting.
     * As a result, such queries may be executed faster due to use of queries' compiled parts.
     *
     * Use this setting in combination with [min_count_to_compile] setting.
     *
     * Default value: **false** (compilation is disabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#compile).
     */
    compile: boolean | undefined;
    /**
     * How many structurally identical queries ClickHouse has to encounter before they are compiled.
     *
     * Minimum value: **0** (default: **3**).
     *
     * For the **0** value compilation is synchronous: a query waits for compilation process to complete prior to continuing execution.
     * It is recommended to set this value only for testing purposes.
     *
     * For all other values, compilation is asynchronous: the compilation process executes in a separate thread.
     * When a compiled part of query is ready, it will be used by ClickHouse for eligible queries, including the ones that are currently running.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#min-count-to-compile).
     */
    minCountToCompile: number | undefined;
    /**
     * Enables or disables expression compilation.
     * If you execute a lot of queries that contain identical expressions, then enable this setting.
     * As a result, such queries may be executed faster due to use of compiled expressions.
     *
     * Use this setting in combination with [min_count_to_compile_expression] setting.
     *
     * Default value: **false** (expression compilation is disabled).
     */
    compileExpressions: boolean | undefined;
    /**
     * How many identical expressions ClickHouse has to encounter before they are compiled.
     *
     * Minimum value: **0** (default: **3**).
     *
     * For the **0** value compilation is synchronous: a query waits for expression compilation process to complete prior to continuing execution.
     * It is recommended to set this value only for testing purposes.
     *
     * For all other values, compilation is asynchronous: the compilation process executes in a separate thread.
     * When a compiled expression is ready, it will be used by ClickHouse for eligible queries, including the ones that are currently running.
     */
    minCountToCompileExpression: number | undefined;
    /**
     * The maximum block size for reading.
     *
     * Data in ClickHouse is organized and processed by blocks (block is a set of columns' parts).
     * The internal processing cycles for a single block are efficient enough, but there are noticeable expenditures on each block.
     *
     * This setting is a recommendation for size of block (in a count of rows) that should be loaded from tables.
     *
     * Value must be greater than **0** (default: **65536**).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#setting-max_block_size).
     */
    maxBlockSize: number | undefined;
    /**
     * Limits the minimum number of rows in a block to be inserted in a table by **INSERT** query.
     * Blocks that are smaller than the specified value, will be squashed together into the bigger blocks.
     *
     * Minimal value: **0**, block squashing is disabled (default: **1048576**).
     */
    minInsertBlockSizeRows: number | undefined;
    /**
     * Limits the minimum number of bytes in a block to be inserted in a table by **INSERT** query.
     * Blocks that are smaller than the specified value, will be squashed together into the bigger blocks.
     *
     * Minimal value: **0**, block squashing is disabled (default: **268435456**, 256 MB).
     */
    minInsertBlockSizeBytes: number | undefined;
    /**
     * Allows to form blocks of the specified size (in bytes) when inserting data in a table.
     * This setting has effect only if server is creating such blocks by itself.
     *
     * Value must be greater than **0** (default: **1048576**).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#settings-max_insert_block_size).
     */
    maxInsertBlockSize: number | undefined;
    /**
     * Limits the minimum number of bytes to enable unbuffered direct reads from disk (Direct I/O).
     *
     * By default, ClickHouse does not read data directly from disk, but relies on the filesystem and its cache instead.
     * Such reading strategy is effective when the data volume is small.
     * If the amount of the data to read is huge, it is more effective to read directly from the disk, bypassing the filesystem cache.
     *
     * If the total amount of the data to read is greater than the value of this setting, then ClickHouse will fetch this data directly from the disk.
     *
     * Minimal value and default value: **0**, Direct I/O is disabled.
     */
    minBytesToUseDirectIo: number | undefined;
    /**
     * Determines whether to use the cache of uncompressed blocks, or not.
     * Using this cache can significantly reduce latency and increase the throughput when a huge amount of small queries is to be processed.
     * Enable this setting for the users who instantiates small queries frequently.
     *
     * This setting has effect only for tables of the MergeTree family.
     *
     * Default value: **false** (uncompressed cache is disabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#setting-use_uncompressed_cache).
     */
    useUncompressedCache: boolean | undefined;
    /**
     * Limits the maximum size in rows of the request that can use the cache of uncompressed data. The cache is not used for requests larger
     * than the specified value.
     *
     * Use this setting in combination with [use_uncompressed_cache] setting.
     *
     * Value must be greater than **0** (default: **128x8192**).
     */
    mergeTreeMaxRowsToUseCache: number | undefined;
    /**
     * Limits the maximum size in bytes of the request that can use the cache of uncompressed data. The cache is not used for requests larger
     * than the specified value.
     *
     * Use this setting in combination with [use_uncompressed_cache] setting.
     *
     * Value must be greater than **0** (default: **192x10x1024x1024**).
     */
    mergeTreeMaxBytesToUseCache: number | undefined;
    /**
     * Limits the minimum number of rows to be read from a file to enable concurrent read.
     * If the number of rows to be read exceeds this value, then ClickHouse will try to use a few threads to read from a file concurrently.
     *
     * This setting has effect only for tables of the MergeTree family.
     *
     * Value must be greater than **0** (default: **20x8192**).
     */
    mergeTreeMinRowsForConcurrentRead: number | undefined;
    /**
     * Limits the number of bytes to be read from a file to enable concurrent read.
     * If the number of bytes to be read exceeds this value, then ClickHouse will try to use a few threads to read from a file concurrently.
     *
     * This setting has effect only for tables of the MergeTree family.
     *
     * Value must be greater than **0** (default: **24x10x1024x1024**).
     */
    mergeTreeMinBytesForConcurrentRead: number | undefined;
    /**
     * Sets the threshold of RAM consumption (in bytes) after that the temporary data, collected during the **GROUP BY** operation, should be flushed to disk to limit the RAM comsumption.
     *
     * By default, aggregation is done by employing hash table that resides in RAM.
     * A query can result in aggregation of huge data volumes that can lead to memory exhaustion and abortion of the query (see the [max_memory_usage] setting).
     * For such queries, you can use this setting to force ClickHouse to do flushing and complete aggregation successfully.
     *
     * Minimal value and default value: **0**, **GROUP BY** in the external memory is disabled.
     *
     * When using aggregation in external memory, it is recommended to set the value of this setting twice as low as the [max_memory_usage] setting value (by default, the maximum memory usage is limited to ten gigabytes).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/sql-reference/statements/select/group-by/#select-group-by-in-external-memory).
     *
     * See also: the [distributed_aggregation_memory_efficient] setting.
     */
    maxBytesBeforeExternalGroupBy: number | undefined;
    /** This setting is equivalent of the [max_bytes_before_external_group_by] setting, except for it is for sort operation (**ORDER BY**), not aggregation. */
    maxBytesBeforeExternalSort: number | undefined;
    /**
     * Sets the threshold of the number of keys, after that the two-level aggregation should be used.
     *
     * Minimal value: **0**, threshold is not set (default: **10000**).
     */
    groupByTwoLevelThreshold: number | undefined;
    /**
     * Sets the threshold of the number of bytes, after that the two-level aggregation should be used.
     *
     * Minimal value: **0**, threshold is not set (default: **100000000**).
     */
    groupByTwoLevelThresholdBytes: number | undefined;
    /**
     * Sets the priority of a query.
     *
     * * **0**-priority is not used.
     * * **1**-the highest priority.
     * * and so on. The higher the number, the lower a query's priority.
     *
     * This setting should be set up for each query individually.
     *
     * If ClickHouse is working with the high-priority queries, and a low-priority query enters, then the low-priority query is paused until higher-priority queries are completed.
     *
     * Minimal value and default value: **0**, priority is not used.
     */
    priority: number | undefined;
    /**
     * Limits the maximum number of threads to process the request (setting does not take threads that read data from remote servers into account).
     *
     * This setting applies to threads that perform the same stages of the query processing pipeline in parallel.
     *
     * Minimal value and default value: **0** (the thread number is calculated automatically based on the number of physical CPU cores, no HyperThreading cores are taken into account).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#settings-max_threads).
     */
    maxThreads: number | undefined;
    /**
     * Limits the maximum memory usage (in bytes) for processing of a single user's query on a single server.
     * This setting does not take server's free RAM amount or total RAM amount into account.
     *
     * This limitation is enforced for any user's single query on a single server.
     *
     * Minimal value: **0**, no limitation is set.
     * Value that is set in the ClickHouse default config file: **10737418240** (10 GB).
     *
     * If you use [max_bytes_before_external_group_by] or [max_bytes_before_external_sort] setting, then it is recommended to set their values twice as low as [max_memory_usage] setting value.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/query-complexity/#settings_max_memory_usage).
     */
    maxMemoryUsage: number | undefined;
    /**
     * Limits the maximum memory usage (in bytes) for processing of user's queries on a single server.
     * This setting does not take server's free RAM amount or total RAM amount into account.
     *
     * This limitation is enforced for all queries that belong to one user and run simultaneously on a single server.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxMemoryUsageForUser: number | undefined;
    /**
     * The maximum speed of data exchange over the network in bytes per second for a query.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxNetworkBandwidth: number | undefined;
    /**
     * The maximum speed of data exchange over the network in bytes per second for all concurrently running user queries.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxNetworkBandwidthForUser: number | undefined;
    /**
     * If enabled, query is not executed if the ClickHouse can't use index by date.
     * This setting has effect only for tables of the MergeTree family.
     *
     * Default value: **false** (setting is disabled, query executes even if ClickHouse can't use index by date).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#settings-force_index_by_date).
     */
    forceIndexByDate: boolean | undefined;
    /**
     * If enabled, query is not executed if the ClickHouse can't use index by primary key.
     * This setting has effect only for tables of the MergeTree family.
     *
     * Default value: **false** (setting is disabled, query executes even if ClickHouse can't use index by primary key).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#force-primary-key).
     */
    forcePrimaryKey: boolean | undefined;
    /**
     * Limits the maximum number of rows that can be read from a table when running a query.
     *
     * Minimal value and default value: **0**, no limitation is set.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/query-complexity/#max-rows-to-read).
     */
    maxRowsToRead: number | undefined;
    /**
     * Limits the maximum number of bytes (uncompressed data) that can be read from a table when running a query.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxBytesToRead: number | undefined;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.tech/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while reading the data.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    readOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of unique keys received from aggregation function.
     * This setting helps to reduce RAM consumption while doing aggregation.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxRowsToGroupBy: number | undefined;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.tech/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing aggregation.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     * * **any**-perform approximate **GROUP BY** operation by continuing aggregation for the keys that got into the set, but don't add new keys to the set.
     */
    groupByOverflowMode: UserSettings_GroupByOverflowMode;
    /**
     * Limits the maximum number of rows that can be read from a table for sorting.
     * This setting helps to reduce RAM consumption.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxRowsToSort: number | undefined;
    /**
     * Limits the maximum number of bytes (uncompressed data) that can be read from a table for sorting.
     * This setting helps to reduce RAM consumption.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxBytesToSort: number | undefined;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.tech/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while sorting.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    sortOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the number of rows in the result.
     * This limitation is also checked for subqueries and parts of distributed queries that run on remote servers.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxResultRows: number | undefined;
    /**
     * Limits the number of bytes in the result.
     * This limitation is also checked for subqueries and parts of distributed queries that run on remote servers.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxResultBytes: number | undefined;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.tech/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while forming result.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    resultOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of different rows when using **DISTINCT**.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxRowsInDistinct: number | undefined;
    /** Limits the maximum size of a hash table in bytes (uncompressed data) when using **DISTINCT**. */
    maxBytesInDistinct: number | undefined;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.tech/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing **DISCTINCT**.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    distinctOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of rows that can be passed to a remote server or saved in a temporary table when using **GLOBAL IN**.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxRowsToTransfer: number | undefined;
    /**
     * Limits the maximum number of bytes (uncompressed data) that can be passed to a remote server or saved in a temporary
     * table when using **GLOBAL IN**.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxBytesToTransfer: number | undefined;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.tech/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) while doing transfers.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    transferOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum query execution time in milliseconds.
     * At this moment, this limitation is not checked when passing one of the sorting stages, as well as merging and finalizing aggregation funictions.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxExecutionTime: number | undefined;
    /**
     * Determines the behavior on exceeding [limits](https://clickhouse.tech/docs/en/operations/settings/query-complexity/#restrictions-on-query-complexity) of execution time.
     *
     * * **throw**-abort query execution, return an error.
     * * **break**-stop query execution, return partial result.
     */
    timeoutOverflowMode: UserSettings_OverflowMode;
    /** Limit on the number of rows in the set resulting from the execution of the IN section. */
    maxRowsInSet: number | undefined;
    /** Limit on the number of bytes in the set resulting from the execution of the IN section. */
    maxBytesInSet: number | undefined;
    /**
     * Determine the behavior on exceeding max_rows_in_set or max_bytes_in_set limit.
     * Possible values: OVERFLOW_MODE_THROW, OVERFLOW_MODE_BREAK.
     */
    setOverflowMode: UserSettings_OverflowMode;
    /** Limit on maximum size of the hash table for JOIN, in rows. */
    maxRowsInJoin: number | undefined;
    /** Limit on maximum size of the hash table for JOIN, in bytes. */
    maxBytesInJoin: number | undefined;
    /**
     * Determine the behavior on exceeding max_rows_in_join or max_bytes_in_join limit.
     * Possible values: OVERFLOW_MODE_THROW, OVERFLOW_MODE_BREAK.
     */
    joinOverflowMode: UserSettings_OverflowMode;
    /**
     * Limits the maximum number of columns that can be read from a table in a single query.
     * If the query requires to read more columns to complete, then it will be aborted.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxColumnsToRead: number | undefined;
    /**
     * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, including constant columns.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxTemporaryColumns: number | undefined;
    /**
     * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, excluding constant columns.
     *
     * Minimal value and default value: **0**, no limitation is set.
     */
    maxTemporaryNonConstColumns: number | undefined;
    /**
     * Limits the size of the part of a query that can be transferred to RAM for parsing with the SQL parser, in bytes.
     *
     * Value must be greater than **0** (default: **262144**).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#settings-max_query_size).
     */
    maxQuerySize: number | undefined;
    /**
     * Limits the maximum depth of query syntax tree.
     *
     * Executing a big and complex query may result in building a syntax tree of enormous depth.
     * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
     *
     * For example, the **SELECT *** query may result in more complex and deeper syntax tree, compared to the **SELECT ... WHERE ...** query, containing constraints and conditions, in the most cases.
     * A user can be forced to construct more optimized queries, if this setting is used.
     *
     * Value must be greater than **0** (default: **1000**).
     * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/query-complexity/#max-ast-depth).
     */
    maxAstDepth: number | undefined;
    /**
     * Limits the maximum size of query syntax tree in number of nodes.
     *
     * Executing a big and complex query may result in building a syntax tree of enormous size.
     * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
     *
     * Value must be greater than **0** (default: **50000**).
     * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/query-complexity/#max-ast-elements).
     */
    maxAstElements: number | undefined;
    /**
     * Limits the maximum size of query syntax tree in number of nodes after expansion of aliases and the asterisk values.
     *
     * Executing a big and complex query may result in building a syntax tree of enormous size.
     * By using this setting, you can prohibit execution of over-sized or non-optimized queries for huge tables.
     *
     * Value must be greater than **0** (default: **500000**).
     * If a too small value is set, it may render ClickHouse unable to execute even simple queries.
     */
    maxExpandedAstElements: number | undefined;
    /** Minimal execution speed in rows per second. */
    minExecutionSpeed: number | undefined;
    /** Minimal execution speed in bytes per second. */
    minExecutionSpeedBytes: number | undefined;
    /** Aggregate function to use for implementation of count(DISTINCT ...). */
    countDistinctImplementation: UserSettings_CountDistinctImplementation;
    /**
     * Enables or disables SQL parser if the fast stream parser cannot parse the data.
     *
     * Enable this setting, if the data that you want to insert into a table contains SQL expressions.
     *
     * For example, the stream parser is unable to parse a value that contains **now()** expression; therefore an **INSERT** query for this value will fail and no data will be inserted into a table.
     * With enabled SQL parser, this expression is parsed correctly: the **now()** expression will be parsed as SQL function, interpreted, and the current date and time will be inserted into the table as a result.
     *
     * This setting has effect only if you use [Values](https://clickhouse.tech/docs/en/interfaces/formats/#data-format-values) format when inserting data.
     *
     * Default value: **true** (SQL parser is enabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/operations/settings/settings/#settings-input_format_values_interpret_expressions).
     */
    inputFormatValuesInterpretExpressions: boolean | undefined;
    /**
     * Enables or disables replacing omitted input values with default values of the respective columns when performing **INSERT** queries.
     *
     * Default value: **true** (replacing is enabled).
     */
    inputFormatDefaultsForOmittedFields: boolean | undefined;
    /**
     * Enables quoting of 64-bit integers in JSON output format.
     *
     * If this setting is enabled, then 64-bit integers (**UInt64** and **Int64**) will be quoted when written to JSON output in order to maintain compatibility with the most of the JavaScript engines.
     * Otherwise, such integers will not be quoted.
     *
     * Default value: **false** (quoting 64-bit integers is disabled).
     */
    outputFormatJsonQuote64bitIntegers: boolean | undefined;
    /**
     * Enables special floating-point values (**+nan**, **-nan**, **+inf** and **-inf**) in JSON output format.
     *
     * Default value: **false** (special values do not present in output).
     */
    outputFormatJsonQuoteDenormals: boolean | undefined;
    /**
     * Determines whether to use LowCardinality type in Native format.
     *
     * * **true** (default)-yes, use.
     * * **false**-convert LowCardinality columns to regular columns when doing **SELECT**, and convert regular columns to LowCardinality when doing **INSERT**.
     *
     * LowCardinality columns (aka sparse columns) store data in more effective way, compared to regular columns, by using hash tables.
     * If data to insert suits this storage format, ClickHouse will place them into LowCardinality column.
     *
     * If you use a third-party ClickHouse client that can't work with LowCardinality columns, then this client will not be able to correctly interpret the result of the query that asks for data stored in LowCardinality column.
     * Disable this setting to convert LowCardinality column to regular column when creating the result, so such clients will be able to process the result.
     *
     * Official ClickHouse client works with LowCardinality columns out-of-the-box.
     *
     * Default value: **true** (LowCardinality columns are used in Native format).
     */
    lowCardinalityAllowInNativeFormat: boolean | undefined;
    /**
     * Enables returning of empty result when aggregating without keys (with **GROUP BY** operation absent) on empty set (e.g., **SELECT count(*) FROM table WHERE 0**).
     *
     * * **true**-ClickHouse will return an empty result for such queries.
     * * **false** (default)-ClickHouse will return a single-line result consisting of **NULL** values for aggregation functions, in accordance with SQL standard.
     */
    emptyResultForAggregationByEmptySet: boolean | undefined;
    joinedSubqueryRequiresAlias: boolean | undefined;
    joinUseNulls: boolean | undefined;
    transformNullIn: boolean | undefined;
    /**
     * HTTP connection timeout, in milliseconds.
     *
     * Value must be greater than **0** (default: **1000**, 1 second).
     */
    httpConnectionTimeout: number | undefined;
    /**
     * HTTP receive timeout, in milliseconds.
     *
     * Value must be greater than **0** (default: **1800000**, 1800 seconds, 30 minutes).
     */
    httpReceiveTimeout: number | undefined;
    /**
     * HTTP send timeout, in milliseconds.
     *
     * Value must be greater than **0** (default: **1800000**, 1800 seconds, 30 minutes).
     */
    httpSendTimeout: number | undefined;
    /**
     * Enables or disables data compression in HTTP responses.
     *
     * By default, ClickHouse stores data compressed. When executing a query, its result is uncompressed.
     * Use this setting to command ClickHouse to compress the result when sending it via HTTP.
     *
     * Enable this setting and add the **Accept-Encoding: <compression method>** HTTP header in a HTTP request to force compression of HTTP response from ClickHouse.
     *
     * ClickHouse support the following compression methods: **gzip**, **br** and **deflate**.
     *
     * Default value: **false** (compression is disabled).
     *
     * See in-depth description in [ClickHouse documentation](https://clickhouse.tech/docs/en/interfaces/http/).
     */
    enableHttpCompression: boolean | undefined;
    /**
     * Enables progress notifications using **X-ClickHouse-Progress** HTTP header.
     *
     * Default value: **false** (notifications disabled).
     */
    sendProgressInHttpHeaders: boolean | undefined;
    /**
     * Minimum interval between progress notifications with **X-ClickHouse-Progress** HTTP header, in milliseconds.
     *
     * Value must be greater than **0** (default: **100**).
     */
    httpHeadersProgressInterval: number | undefined;
    /**
     * Adds CORS header in HTTP responses.
     *
     * Default value: **false** (header is not added).
     */
    addHttpCorsHeader: boolean | undefined;
    /** Quota accounting mode. Possible values: QUOTA_MODE_DEFAULT, QUOTA_MODE_KEYED and QUOTA_MODE_KEYED_BY_IP. */
    quotaMode: UserSettings_QuotaMode;
}

export enum UserSettings_OverflowMode {
    OVERFLOW_MODE_UNSPECIFIED = 0,
    OVERFLOW_MODE_THROW = 1,
    OVERFLOW_MODE_BREAK = 2,
    UNRECOGNIZED = -1,
}

export function userSettings_OverflowModeFromJSON(
    object: any
): UserSettings_OverflowMode {
    switch (object) {
        case 0:
        case 'OVERFLOW_MODE_UNSPECIFIED':
            return UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED;
        case 1:
        case 'OVERFLOW_MODE_THROW':
            return UserSettings_OverflowMode.OVERFLOW_MODE_THROW;
        case 2:
        case 'OVERFLOW_MODE_BREAK':
            return UserSettings_OverflowMode.OVERFLOW_MODE_BREAK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_OverflowMode.UNRECOGNIZED;
    }
}

export function userSettings_OverflowModeToJSON(
    object: UserSettings_OverflowMode
): string {
    switch (object) {
        case UserSettings_OverflowMode.OVERFLOW_MODE_UNSPECIFIED:
            return 'OVERFLOW_MODE_UNSPECIFIED';
        case UserSettings_OverflowMode.OVERFLOW_MODE_THROW:
            return 'OVERFLOW_MODE_THROW';
        case UserSettings_OverflowMode.OVERFLOW_MODE_BREAK:
            return 'OVERFLOW_MODE_BREAK';
        default:
            return 'UNKNOWN';
    }
}

export enum UserSettings_GroupByOverflowMode {
    GROUP_BY_OVERFLOW_MODE_UNSPECIFIED = 0,
    GROUP_BY_OVERFLOW_MODE_THROW = 1,
    GROUP_BY_OVERFLOW_MODE_BREAK = 2,
    GROUP_BY_OVERFLOW_MODE_ANY = 3,
    UNRECOGNIZED = -1,
}

export function userSettings_GroupByOverflowModeFromJSON(
    object: any
): UserSettings_GroupByOverflowMode {
    switch (object) {
        case 0:
        case 'GROUP_BY_OVERFLOW_MODE_UNSPECIFIED':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED;
        case 1:
        case 'GROUP_BY_OVERFLOW_MODE_THROW':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW;
        case 2:
        case 'GROUP_BY_OVERFLOW_MODE_BREAK':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK;
        case 3:
        case 'GROUP_BY_OVERFLOW_MODE_ANY':
            return UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_GroupByOverflowMode.UNRECOGNIZED;
    }
}

export function userSettings_GroupByOverflowModeToJSON(
    object: UserSettings_GroupByOverflowMode
): string {
    switch (object) {
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_UNSPECIFIED:
            return 'GROUP_BY_OVERFLOW_MODE_UNSPECIFIED';
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_THROW:
            return 'GROUP_BY_OVERFLOW_MODE_THROW';
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_BREAK:
            return 'GROUP_BY_OVERFLOW_MODE_BREAK';
        case UserSettings_GroupByOverflowMode.GROUP_BY_OVERFLOW_MODE_ANY:
            return 'GROUP_BY_OVERFLOW_MODE_ANY';
        default:
            return 'UNKNOWN';
    }
}

export enum UserSettings_DistributedProductMode {
    DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED = 0,
    /** DISTRIBUTED_PRODUCT_MODE_DENY - Default value. Prohibits using these types of subqueries (returns the "Double-distributed in/JOIN subqueries is denied" exception). */
    DISTRIBUTED_PRODUCT_MODE_DENY = 1,
    /** DISTRIBUTED_PRODUCT_MODE_LOCAL - Replaces the database and table in the subquery with local ones for the destination server (shard), leaving the normal IN/JOIN. */
    DISTRIBUTED_PRODUCT_MODE_LOCAL = 2,
    /** DISTRIBUTED_PRODUCT_MODE_GLOBAL - Replaces the IN/JOIN query with GLOBAL IN/GLOBAL JOIN. */
    DISTRIBUTED_PRODUCT_MODE_GLOBAL = 3,
    /** DISTRIBUTED_PRODUCT_MODE_ALLOW - Allows the use of these types of subqueries. */
    DISTRIBUTED_PRODUCT_MODE_ALLOW = 4,
    UNRECOGNIZED = -1,
}

export function userSettings_DistributedProductModeFromJSON(
    object: any
): UserSettings_DistributedProductMode {
    switch (object) {
        case 0:
        case 'DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED;
        case 1:
        case 'DISTRIBUTED_PRODUCT_MODE_DENY':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY;
        case 2:
        case 'DISTRIBUTED_PRODUCT_MODE_LOCAL':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL;
        case 3:
        case 'DISTRIBUTED_PRODUCT_MODE_GLOBAL':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL;
        case 4:
        case 'DISTRIBUTED_PRODUCT_MODE_ALLOW':
            return UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_DistributedProductMode.UNRECOGNIZED;
    }
}

export function userSettings_DistributedProductModeToJSON(
    object: UserSettings_DistributedProductMode
): string {
    switch (object) {
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED:
            return 'DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_DENY:
            return 'DISTRIBUTED_PRODUCT_MODE_DENY';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_LOCAL:
            return 'DISTRIBUTED_PRODUCT_MODE_LOCAL';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_GLOBAL:
            return 'DISTRIBUTED_PRODUCT_MODE_GLOBAL';
        case UserSettings_DistributedProductMode.DISTRIBUTED_PRODUCT_MODE_ALLOW:
            return 'DISTRIBUTED_PRODUCT_MODE_ALLOW';
        default:
            return 'UNKNOWN';
    }
}

export enum UserSettings_QuotaMode {
    QUOTA_MODE_UNSPECIFIED = 0,
    QUOTA_MODE_DEFAULT = 1,
    QUOTA_MODE_KEYED = 2,
    QUOTA_MODE_KEYED_BY_IP = 3,
    UNRECOGNIZED = -1,
}

export function userSettings_QuotaModeFromJSON(
    object: any
): UserSettings_QuotaMode {
    switch (object) {
        case 0:
        case 'QUOTA_MODE_UNSPECIFIED':
            return UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED;
        case 1:
        case 'QUOTA_MODE_DEFAULT':
            return UserSettings_QuotaMode.QUOTA_MODE_DEFAULT;
        case 2:
        case 'QUOTA_MODE_KEYED':
            return UserSettings_QuotaMode.QUOTA_MODE_KEYED;
        case 3:
        case 'QUOTA_MODE_KEYED_BY_IP':
            return UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_QuotaMode.UNRECOGNIZED;
    }
}

export function userSettings_QuotaModeToJSON(
    object: UserSettings_QuotaMode
): string {
    switch (object) {
        case UserSettings_QuotaMode.QUOTA_MODE_UNSPECIFIED:
            return 'QUOTA_MODE_UNSPECIFIED';
        case UserSettings_QuotaMode.QUOTA_MODE_DEFAULT:
            return 'QUOTA_MODE_DEFAULT';
        case UserSettings_QuotaMode.QUOTA_MODE_KEYED:
            return 'QUOTA_MODE_KEYED';
        case UserSettings_QuotaMode.QUOTA_MODE_KEYED_BY_IP:
            return 'QUOTA_MODE_KEYED_BY_IP';
        default:
            return 'UNKNOWN';
    }
}

export enum UserSettings_CountDistinctImplementation {
    COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED = 0,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ = 1,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED = 2,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64 = 3,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12 = 4,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT = 5,
    UNRECOGNIZED = -1,
}

export function userSettings_CountDistinctImplementationFromJSON(
    object: any
): UserSettings_CountDistinctImplementation {
    switch (object) {
        case 0:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED;
        case 1:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ;
        case 2:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED;
        case 3:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64;
        case 4:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12;
        case 5:
        case 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT':
            return UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_CountDistinctImplementation.UNRECOGNIZED;
    }
}

export function userSettings_CountDistinctImplementationToJSON(
    object: UserSettings_CountDistinctImplementation
): string {
    switch (object) {
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12';
        case UserSettings_CountDistinctImplementation.COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT:
            return 'COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT';
        default:
            return 'UNKNOWN';
    }
}

/**
 * ClickHouse quota representation. Each quota associated with an user and limits it resource usage for an interval.
 * See in-depth description [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/quotas/).
 */
export interface UserQuota {
    /**
     * Duration of interval for quota in milliseconds.
     * Minimal value is 1 second.
     */
    intervalDuration: number | undefined;
    /**
     * The total number of queries.
     * 0 - unlimited.
     */
    queries: number | undefined;
    /**
     * The number of queries that threw exception.
     * 0 - unlimited.
     */
    errors: number | undefined;
    /**
     * The total number of rows given as the result..
     * 0 - unlimited.
     */
    resultRows: number | undefined;
    /**
     * The total number of source rows read from tables for running the query, on all remote servers.
     * 0 - unlimited.
     */
    readRows: number | undefined;
    /**
     * The total query execution time, in milliseconds (wall time).
     * 0 - unlimited.
     */
    executionTime: number | undefined;
}

const baseUser: object = { name: '', clusterId: '' };

export const User = {
    encode(
        message: User,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        for (const v of message.permissions) {
            Permission.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            UserSettings.encode(
                message.settings,
                writer.uint32(34).fork()
            ).ldelim();
        }
        for (const v of message.quotas) {
            UserQuota.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): User {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUser } as User;
        message.permissions = [];
        message.quotas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.permissions.push(
                        Permission.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.settings = UserSettings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.quotas.push(
                        UserQuota.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): User {
        const message = { ...baseUser } as User;
        message.permissions = [];
        message.quotas = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromJSON(e));
            }
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = UserSettings.fromJSON(object.settings);
        } else {
            message.settings = undefined;
        }
        if (object.quotas !== undefined && object.quotas !== null) {
            for (const e of object.quotas) {
                message.quotas.push(UserQuota.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: User): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) =>
                e ? Permission.toJSON(e) : undefined
            );
        } else {
            obj.permissions = [];
        }
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? UserSettings.toJSON(message.settings)
                : undefined);
        if (message.quotas) {
            obj.quotas = message.quotas.map((e) =>
                e ? UserQuota.toJSON(e) : undefined
            );
        } else {
            obj.quotas = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<User>): User {
        const message = { ...baseUser } as User;
        message.permissions = [];
        message.quotas = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromPartial(e));
            }
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = UserSettings.fromPartial(object.settings);
        } else {
            message.settings = undefined;
        }
        if (object.quotas !== undefined && object.quotas !== null) {
            for (const e of object.quotas) {
                message.quotas.push(UserQuota.fromPartial(e));
            }
        }
        return message;
    },
};

const basePermission: object = { databaseName: '' };

export const Permission = {
    encode(
        message: Permission,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.databaseName !== '') {
            writer.uint32(10).string(message.databaseName);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePermission } as Permission;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Permission {
        const message = { ...basePermission } as Permission;
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        } else {
            message.databaseName = '';
        }
        return message;
    },

    toJSON(message: Permission): unknown {
        const obj: any = {};
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial(object: DeepPartial<Permission>): Permission {
        const message = { ...basePermission } as Permission;
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        } else {
            message.databaseName = '';
        }
        return message;
    },
};

const baseUserSpec: object = { name: '', password: '' };

export const UserSpec = {
    encode(
        message: UserSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        for (const v of message.permissions) {
            Permission.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            UserSettings.encode(
                message.settings,
                writer.uint32(34).fork()
            ).ldelim();
        }
        for (const v of message.quotas) {
            UserQuota.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSpec } as UserSpec;
        message.permissions = [];
        message.quotas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.permissions.push(
                        Permission.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.settings = UserSettings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.quotas.push(
                        UserQuota.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserSpec {
        const message = { ...baseUserSpec } as UserSpec;
        message.permissions = [];
        message.quotas = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromJSON(e));
            }
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = UserSettings.fromJSON(object.settings);
        } else {
            message.settings = undefined;
        }
        if (object.quotas !== undefined && object.quotas !== null) {
            for (const e of object.quotas) {
                message.quotas.push(UserQuota.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UserSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.password !== undefined && (obj.password = message.password);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) =>
                e ? Permission.toJSON(e) : undefined
            );
        } else {
            obj.permissions = [];
        }
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? UserSettings.toJSON(message.settings)
                : undefined);
        if (message.quotas) {
            obj.quotas = message.quotas.map((e) =>
                e ? UserQuota.toJSON(e) : undefined
            );
        } else {
            obj.quotas = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<UserSpec>): UserSpec {
        const message = { ...baseUserSpec } as UserSpec;
        message.permissions = [];
        message.quotas = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromPartial(e));
            }
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = UserSettings.fromPartial(object.settings);
        } else {
            message.settings = undefined;
        }
        if (object.quotas !== undefined && object.quotas !== null) {
            for (const e of object.quotas) {
                message.quotas.push(UserQuota.fromPartial(e));
            }
        }
        return message;
    },
};

const baseUserSettings: object = {
    distributedProductMode: 0,
    readOverflowMode: 0,
    groupByOverflowMode: 0,
    sortOverflowMode: 0,
    resultOverflowMode: 0,
    distinctOverflowMode: 0,
    transferOverflowMode: 0,
    timeoutOverflowMode: 0,
    setOverflowMode: 0,
    joinOverflowMode: 0,
    countDistinctImplementation: 0,
    quotaMode: 0,
};

export const UserSettings = {
    encode(
        message: UserSettings,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.readonly !== undefined) {
            Int64Value.encode(
                { value: message.readonly! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.allowDdl !== undefined) {
            BoolValue.encode(
                { value: message.allowDdl! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.insertQuorum !== undefined) {
            Int64Value.encode(
                { value: message.insertQuorum! },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.connectTimeout !== undefined) {
            Int64Value.encode(
                { value: message.connectTimeout! },
                writer.uint32(314).fork()
            ).ldelim();
        }
        if (message.receiveTimeout !== undefined) {
            Int64Value.encode(
                { value: message.receiveTimeout! },
                writer.uint32(322).fork()
            ).ldelim();
        }
        if (message.sendTimeout !== undefined) {
            Int64Value.encode(
                { value: message.sendTimeout! },
                writer.uint32(330).fork()
            ).ldelim();
        }
        if (message.insertQuorumTimeout !== undefined) {
            Int64Value.encode(
                { value: message.insertQuorumTimeout! },
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.selectSequentialConsistency !== undefined) {
            BoolValue.encode(
                { value: message.selectSequentialConsistency! },
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.maxReplicaDelayForDistributedQueries !== undefined) {
            Int64Value.encode(
                { value: message.maxReplicaDelayForDistributedQueries! },
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (
            message.fallbackToStaleReplicasForDistributedQueries !== undefined
        ) {
            BoolValue.encode(
                {
                    value: message.fallbackToStaleReplicasForDistributedQueries!,
                },
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.replicationAlterPartitionsSync !== undefined) {
            Int64Value.encode(
                { value: message.replicationAlterPartitionsSync! },
                writer.uint32(338).fork()
            ).ldelim();
        }
        if (message.distributedProductMode !== 0) {
            writer.uint32(344).int32(message.distributedProductMode);
        }
        if (message.distributedAggregationMemoryEfficient !== undefined) {
            BoolValue.encode(
                { value: message.distributedAggregationMemoryEfficient! },
                writer.uint32(578).fork()
            ).ldelim();
        }
        if (message.distributedDdlTaskTimeout !== undefined) {
            Int64Value.encode(
                { value: message.distributedDdlTaskTimeout! },
                writer.uint32(586).fork()
            ).ldelim();
        }
        if (message.skipUnavailableShards !== undefined) {
            BoolValue.encode(
                { value: message.skipUnavailableShards! },
                writer.uint32(650).fork()
            ).ldelim();
        }
        if (message.compile !== undefined) {
            BoolValue.encode(
                { value: message.compile! },
                writer.uint32(354).fork()
            ).ldelim();
        }
        if (message.minCountToCompile !== undefined) {
            Int64Value.encode(
                { value: message.minCountToCompile! },
                writer.uint32(362).fork()
            ).ldelim();
        }
        if (message.compileExpressions !== undefined) {
            BoolValue.encode(
                { value: message.compileExpressions! },
                writer.uint32(370).fork()
            ).ldelim();
        }
        if (message.minCountToCompileExpression !== undefined) {
            Int64Value.encode(
                { value: message.minCountToCompileExpression! },
                writer.uint32(378).fork()
            ).ldelim();
        }
        if (message.maxBlockSize !== undefined) {
            Int64Value.encode(
                { value: message.maxBlockSize! },
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.minInsertBlockSizeRows !== undefined) {
            Int64Value.encode(
                { value: message.minInsertBlockSizeRows! },
                writer.uint32(386).fork()
            ).ldelim();
        }
        if (message.minInsertBlockSizeBytes !== undefined) {
            Int64Value.encode(
                { value: message.minInsertBlockSizeBytes! },
                writer.uint32(394).fork()
            ).ldelim();
        }
        if (message.maxInsertBlockSize !== undefined) {
            Int64Value.encode(
                { value: message.maxInsertBlockSize! },
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.minBytesToUseDirectIo !== undefined) {
            Int64Value.encode(
                { value: message.minBytesToUseDirectIo! },
                writer.uint32(402).fork()
            ).ldelim();
        }
        if (message.useUncompressedCache !== undefined) {
            BoolValue.encode(
                { value: message.useUncompressedCache! },
                writer.uint32(410).fork()
            ).ldelim();
        }
        if (message.mergeTreeMaxRowsToUseCache !== undefined) {
            Int64Value.encode(
                { value: message.mergeTreeMaxRowsToUseCache! },
                writer.uint32(418).fork()
            ).ldelim();
        }
        if (message.mergeTreeMaxBytesToUseCache !== undefined) {
            Int64Value.encode(
                { value: message.mergeTreeMaxBytesToUseCache! },
                writer.uint32(426).fork()
            ).ldelim();
        }
        if (message.mergeTreeMinRowsForConcurrentRead !== undefined) {
            Int64Value.encode(
                { value: message.mergeTreeMinRowsForConcurrentRead! },
                writer.uint32(434).fork()
            ).ldelim();
        }
        if (message.mergeTreeMinBytesForConcurrentRead !== undefined) {
            Int64Value.encode(
                { value: message.mergeTreeMinBytesForConcurrentRead! },
                writer.uint32(442).fork()
            ).ldelim();
        }
        if (message.maxBytesBeforeExternalGroupBy !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesBeforeExternalGroupBy! },
                writer.uint32(594).fork()
            ).ldelim();
        }
        if (message.maxBytesBeforeExternalSort !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesBeforeExternalSort! },
                writer.uint32(602).fork()
            ).ldelim();
        }
        if (message.groupByTwoLevelThreshold !== undefined) {
            Int64Value.encode(
                { value: message.groupByTwoLevelThreshold! },
                writer.uint32(610).fork()
            ).ldelim();
        }
        if (message.groupByTwoLevelThresholdBytes !== undefined) {
            Int64Value.encode(
                { value: message.groupByTwoLevelThresholdBytes! },
                writer.uint32(618).fork()
            ).ldelim();
        }
        if (message.priority !== undefined) {
            Int64Value.encode(
                { value: message.priority! },
                writer.uint32(450).fork()
            ).ldelim();
        }
        if (message.maxThreads !== undefined) {
            Int64Value.encode(
                { value: message.maxThreads! },
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.maxMemoryUsage !== undefined) {
            Int64Value.encode(
                { value: message.maxMemoryUsage! },
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.maxMemoryUsageForUser !== undefined) {
            Int64Value.encode(
                { value: message.maxMemoryUsageForUser! },
                writer.uint32(98).fork()
            ).ldelim();
        }
        if (message.maxNetworkBandwidth !== undefined) {
            Int64Value.encode(
                { value: message.maxNetworkBandwidth! },
                writer.uint32(458).fork()
            ).ldelim();
        }
        if (message.maxNetworkBandwidthForUser !== undefined) {
            Int64Value.encode(
                { value: message.maxNetworkBandwidthForUser! },
                writer.uint32(466).fork()
            ).ldelim();
        }
        if (message.forceIndexByDate !== undefined) {
            BoolValue.encode(
                { value: message.forceIndexByDate! },
                writer.uint32(474).fork()
            ).ldelim();
        }
        if (message.forcePrimaryKey !== undefined) {
            BoolValue.encode(
                { value: message.forcePrimaryKey! },
                writer.uint32(482).fork()
            ).ldelim();
        }
        if (message.maxRowsToRead !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsToRead! },
                writer.uint32(106).fork()
            ).ldelim();
        }
        if (message.maxBytesToRead !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesToRead! },
                writer.uint32(114).fork()
            ).ldelim();
        }
        if (message.readOverflowMode !== 0) {
            writer.uint32(120).int32(message.readOverflowMode);
        }
        if (message.maxRowsToGroupBy !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsToGroupBy! },
                writer.uint32(130).fork()
            ).ldelim();
        }
        if (message.groupByOverflowMode !== 0) {
            writer.uint32(136).int32(message.groupByOverflowMode);
        }
        if (message.maxRowsToSort !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsToSort! },
                writer.uint32(146).fork()
            ).ldelim();
        }
        if (message.maxBytesToSort !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesToSort! },
                writer.uint32(154).fork()
            ).ldelim();
        }
        if (message.sortOverflowMode !== 0) {
            writer.uint32(160).int32(message.sortOverflowMode);
        }
        if (message.maxResultRows !== undefined) {
            Int64Value.encode(
                { value: message.maxResultRows! },
                writer.uint32(170).fork()
            ).ldelim();
        }
        if (message.maxResultBytes !== undefined) {
            Int64Value.encode(
                { value: message.maxResultBytes! },
                writer.uint32(178).fork()
            ).ldelim();
        }
        if (message.resultOverflowMode !== 0) {
            writer.uint32(184).int32(message.resultOverflowMode);
        }
        if (message.maxRowsInDistinct !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsInDistinct! },
                writer.uint32(194).fork()
            ).ldelim();
        }
        if (message.maxBytesInDistinct !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesInDistinct! },
                writer.uint32(202).fork()
            ).ldelim();
        }
        if (message.distinctOverflowMode !== 0) {
            writer.uint32(208).int32(message.distinctOverflowMode);
        }
        if (message.maxRowsToTransfer !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsToTransfer! },
                writer.uint32(218).fork()
            ).ldelim();
        }
        if (message.maxBytesToTransfer !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesToTransfer! },
                writer.uint32(226).fork()
            ).ldelim();
        }
        if (message.transferOverflowMode !== 0) {
            writer.uint32(232).int32(message.transferOverflowMode);
        }
        if (message.maxExecutionTime !== undefined) {
            Int64Value.encode(
                { value: message.maxExecutionTime! },
                writer.uint32(242).fork()
            ).ldelim();
        }
        if (message.timeoutOverflowMode !== 0) {
            writer.uint32(248).int32(message.timeoutOverflowMode);
        }
        if (message.maxRowsInSet !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsInSet! },
                writer.uint32(698).fork()
            ).ldelim();
        }
        if (message.maxBytesInSet !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesInSet! },
                writer.uint32(706).fork()
            ).ldelim();
        }
        if (message.setOverflowMode !== 0) {
            writer.uint32(712).int32(message.setOverflowMode);
        }
        if (message.maxRowsInJoin !== undefined) {
            Int64Value.encode(
                { value: message.maxRowsInJoin! },
                writer.uint32(722).fork()
            ).ldelim();
        }
        if (message.maxBytesInJoin !== undefined) {
            Int64Value.encode(
                { value: message.maxBytesInJoin! },
                writer.uint32(730).fork()
            ).ldelim();
        }
        if (message.joinOverflowMode !== 0) {
            writer.uint32(736).int32(message.joinOverflowMode);
        }
        if (message.maxColumnsToRead !== undefined) {
            Int64Value.encode(
                { value: message.maxColumnsToRead! },
                writer.uint32(258).fork()
            ).ldelim();
        }
        if (message.maxTemporaryColumns !== undefined) {
            Int64Value.encode(
                { value: message.maxTemporaryColumns! },
                writer.uint32(266).fork()
            ).ldelim();
        }
        if (message.maxTemporaryNonConstColumns !== undefined) {
            Int64Value.encode(
                { value: message.maxTemporaryNonConstColumns! },
                writer.uint32(274).fork()
            ).ldelim();
        }
        if (message.maxQuerySize !== undefined) {
            Int64Value.encode(
                { value: message.maxQuerySize! },
                writer.uint32(282).fork()
            ).ldelim();
        }
        if (message.maxAstDepth !== undefined) {
            Int64Value.encode(
                { value: message.maxAstDepth! },
                writer.uint32(290).fork()
            ).ldelim();
        }
        if (message.maxAstElements !== undefined) {
            Int64Value.encode(
                { value: message.maxAstElements! },
                writer.uint32(298).fork()
            ).ldelim();
        }
        if (message.maxExpandedAstElements !== undefined) {
            Int64Value.encode(
                { value: message.maxExpandedAstElements! },
                writer.uint32(306).fork()
            ).ldelim();
        }
        if (message.minExecutionSpeed !== undefined) {
            Int64Value.encode(
                { value: message.minExecutionSpeed! },
                writer.uint32(674).fork()
            ).ldelim();
        }
        if (message.minExecutionSpeedBytes !== undefined) {
            Int64Value.encode(
                { value: message.minExecutionSpeedBytes! },
                writer.uint32(682).fork()
            ).ldelim();
        }
        if (message.countDistinctImplementation !== 0) {
            writer.uint32(688).int32(message.countDistinctImplementation);
        }
        if (message.inputFormatValuesInterpretExpressions !== undefined) {
            BoolValue.encode(
                { value: message.inputFormatValuesInterpretExpressions! },
                writer.uint32(490).fork()
            ).ldelim();
        }
        if (message.inputFormatDefaultsForOmittedFields !== undefined) {
            BoolValue.encode(
                { value: message.inputFormatDefaultsForOmittedFields! },
                writer.uint32(498).fork()
            ).ldelim();
        }
        if (message.outputFormatJsonQuote64bitIntegers !== undefined) {
            BoolValue.encode(
                { value: message.outputFormatJsonQuote64bitIntegers! },
                writer.uint32(506).fork()
            ).ldelim();
        }
        if (message.outputFormatJsonQuoteDenormals !== undefined) {
            BoolValue.encode(
                { value: message.outputFormatJsonQuoteDenormals! },
                writer.uint32(514).fork()
            ).ldelim();
        }
        if (message.lowCardinalityAllowInNativeFormat !== undefined) {
            BoolValue.encode(
                { value: message.lowCardinalityAllowInNativeFormat! },
                writer.uint32(626).fork()
            ).ldelim();
        }
        if (message.emptyResultForAggregationByEmptySet !== undefined) {
            BoolValue.encode(
                { value: message.emptyResultForAggregationByEmptySet! },
                writer.uint32(634).fork()
            ).ldelim();
        }
        if (message.joinedSubqueryRequiresAlias !== undefined) {
            BoolValue.encode(
                { value: message.joinedSubqueryRequiresAlias! },
                writer.uint32(746).fork()
            ).ldelim();
        }
        if (message.joinUseNulls !== undefined) {
            BoolValue.encode(
                { value: message.joinUseNulls! },
                writer.uint32(754).fork()
            ).ldelim();
        }
        if (message.transformNullIn !== undefined) {
            BoolValue.encode(
                { value: message.transformNullIn! },
                writer.uint32(762).fork()
            ).ldelim();
        }
        if (message.httpConnectionTimeout !== undefined) {
            Int64Value.encode(
                { value: message.httpConnectionTimeout! },
                writer.uint32(522).fork()
            ).ldelim();
        }
        if (message.httpReceiveTimeout !== undefined) {
            Int64Value.encode(
                { value: message.httpReceiveTimeout! },
                writer.uint32(530).fork()
            ).ldelim();
        }
        if (message.httpSendTimeout !== undefined) {
            Int64Value.encode(
                { value: message.httpSendTimeout! },
                writer.uint32(538).fork()
            ).ldelim();
        }
        if (message.enableHttpCompression !== undefined) {
            BoolValue.encode(
                { value: message.enableHttpCompression! },
                writer.uint32(546).fork()
            ).ldelim();
        }
        if (message.sendProgressInHttpHeaders !== undefined) {
            BoolValue.encode(
                { value: message.sendProgressInHttpHeaders! },
                writer.uint32(554).fork()
            ).ldelim();
        }
        if (message.httpHeadersProgressInterval !== undefined) {
            Int64Value.encode(
                { value: message.httpHeadersProgressInterval! },
                writer.uint32(562).fork()
            ).ldelim();
        }
        if (message.addHttpCorsHeader !== undefined) {
            BoolValue.encode(
                { value: message.addHttpCorsHeader! },
                writer.uint32(570).fork()
            ).ldelim();
        }
        if (message.quotaMode !== 0) {
            writer.uint32(640).int32(message.quotaMode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserSettings {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSettings } as UserSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.readonly = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 2:
                    message.allowDdl = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.insertQuorum = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 39:
                    message.connectTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 40:
                    message.receiveTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 41:
                    message.sendTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 4:
                    message.insertQuorumTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 5:
                    message.selectSequentialConsistency = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 6:
                    message.maxReplicaDelayForDistributedQueries =
                        Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.fallbackToStaleReplicasForDistributedQueries =
                        BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.replicationAlterPartitionsSync = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 43:
                    message.distributedProductMode = reader.int32() as any;
                    break;
                case 72:
                    message.distributedAggregationMemoryEfficient =
                        BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 73:
                    message.distributedDdlTaskTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 81:
                    message.skipUnavailableShards = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 44:
                    message.compile = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 45:
                    message.minCountToCompile = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 46:
                    message.compileExpressions = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 47:
                    message.minCountToCompileExpression = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 9:
                    message.maxBlockSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 48:
                    message.minInsertBlockSizeRows = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 49:
                    message.minInsertBlockSizeBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 10:
                    message.maxInsertBlockSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 50:
                    message.minBytesToUseDirectIo = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 51:
                    message.useUncompressedCache = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 52:
                    message.mergeTreeMaxRowsToUseCache = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 53:
                    message.mergeTreeMaxBytesToUseCache = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 54:
                    message.mergeTreeMinRowsForConcurrentRead =
                        Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 55:
                    message.mergeTreeMinBytesForConcurrentRead =
                        Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 74:
                    message.maxBytesBeforeExternalGroupBy = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 75:
                    message.maxBytesBeforeExternalSort = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 76:
                    message.groupByTwoLevelThreshold = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 77:
                    message.groupByTwoLevelThresholdBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 56:
                    message.priority = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 8:
                    message.maxThreads = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 11:
                    message.maxMemoryUsage = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 12:
                    message.maxMemoryUsageForUser = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 57:
                    message.maxNetworkBandwidth = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 58:
                    message.maxNetworkBandwidthForUser = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 59:
                    message.forceIndexByDate = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 60:
                    message.forcePrimaryKey = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 13:
                    message.maxRowsToRead = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 14:
                    message.maxBytesToRead = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 15:
                    message.readOverflowMode = reader.int32() as any;
                    break;
                case 16:
                    message.maxRowsToGroupBy = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 17:
                    message.groupByOverflowMode = reader.int32() as any;
                    break;
                case 18:
                    message.maxRowsToSort = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 19:
                    message.maxBytesToSort = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 20:
                    message.sortOverflowMode = reader.int32() as any;
                    break;
                case 21:
                    message.maxResultRows = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 22:
                    message.maxResultBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 23:
                    message.resultOverflowMode = reader.int32() as any;
                    break;
                case 24:
                    message.maxRowsInDistinct = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 25:
                    message.maxBytesInDistinct = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 26:
                    message.distinctOverflowMode = reader.int32() as any;
                    break;
                case 27:
                    message.maxRowsToTransfer = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 28:
                    message.maxBytesToTransfer = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 29:
                    message.transferOverflowMode = reader.int32() as any;
                    break;
                case 30:
                    message.maxExecutionTime = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 31:
                    message.timeoutOverflowMode = reader.int32() as any;
                    break;
                case 87:
                    message.maxRowsInSet = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 88:
                    message.maxBytesInSet = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 89:
                    message.setOverflowMode = reader.int32() as any;
                    break;
                case 90:
                    message.maxRowsInJoin = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 91:
                    message.maxBytesInJoin = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 92:
                    message.joinOverflowMode = reader.int32() as any;
                    break;
                case 32:
                    message.maxColumnsToRead = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 33:
                    message.maxTemporaryColumns = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 34:
                    message.maxTemporaryNonConstColumns = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 35:
                    message.maxQuerySize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 36:
                    message.maxAstDepth = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 37:
                    message.maxAstElements = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 38:
                    message.maxExpandedAstElements = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 84:
                    message.minExecutionSpeed = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 85:
                    message.minExecutionSpeedBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 86:
                    message.countDistinctImplementation = reader.int32() as any;
                    break;
                case 61:
                    message.inputFormatValuesInterpretExpressions =
                        BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 62:
                    message.inputFormatDefaultsForOmittedFields =
                        BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 63:
                    message.outputFormatJsonQuote64bitIntegers =
                        BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 64:
                    message.outputFormatJsonQuoteDenormals = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 78:
                    message.lowCardinalityAllowInNativeFormat =
                        BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 79:
                    message.emptyResultForAggregationByEmptySet =
                        BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 93:
                    message.joinedSubqueryRequiresAlias = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 94:
                    message.joinUseNulls = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 95:
                    message.transformNullIn = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 65:
                    message.httpConnectionTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 66:
                    message.httpReceiveTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 67:
                    message.httpSendTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 68:
                    message.enableHttpCompression = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 69:
                    message.sendProgressInHttpHeaders = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 70:
                    message.httpHeadersProgressInterval = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 71:
                    message.addHttpCorsHeader = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 80:
                    message.quotaMode = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserSettings {
        const message = { ...baseUserSettings } as UserSettings;
        if (object.readonly !== undefined && object.readonly !== null) {
            message.readonly = Number(object.readonly);
        } else {
            message.readonly = undefined;
        }
        if (object.allowDdl !== undefined && object.allowDdl !== null) {
            message.allowDdl = Boolean(object.allowDdl);
        } else {
            message.allowDdl = undefined;
        }
        if (object.insertQuorum !== undefined && object.insertQuorum !== null) {
            message.insertQuorum = Number(object.insertQuorum);
        } else {
            message.insertQuorum = undefined;
        }
        if (
            object.connectTimeout !== undefined &&
            object.connectTimeout !== null
        ) {
            message.connectTimeout = Number(object.connectTimeout);
        } else {
            message.connectTimeout = undefined;
        }
        if (
            object.receiveTimeout !== undefined &&
            object.receiveTimeout !== null
        ) {
            message.receiveTimeout = Number(object.receiveTimeout);
        } else {
            message.receiveTimeout = undefined;
        }
        if (object.sendTimeout !== undefined && object.sendTimeout !== null) {
            message.sendTimeout = Number(object.sendTimeout);
        } else {
            message.sendTimeout = undefined;
        }
        if (
            object.insertQuorumTimeout !== undefined &&
            object.insertQuorumTimeout !== null
        ) {
            message.insertQuorumTimeout = Number(object.insertQuorumTimeout);
        } else {
            message.insertQuorumTimeout = undefined;
        }
        if (
            object.selectSequentialConsistency !== undefined &&
            object.selectSequentialConsistency !== null
        ) {
            message.selectSequentialConsistency = Boolean(
                object.selectSequentialConsistency
            );
        } else {
            message.selectSequentialConsistency = undefined;
        }
        if (
            object.maxReplicaDelayForDistributedQueries !== undefined &&
            object.maxReplicaDelayForDistributedQueries !== null
        ) {
            message.maxReplicaDelayForDistributedQueries = Number(
                object.maxReplicaDelayForDistributedQueries
            );
        } else {
            message.maxReplicaDelayForDistributedQueries = undefined;
        }
        if (
            object.fallbackToStaleReplicasForDistributedQueries !== undefined &&
            object.fallbackToStaleReplicasForDistributedQueries !== null
        ) {
            message.fallbackToStaleReplicasForDistributedQueries = Boolean(
                object.fallbackToStaleReplicasForDistributedQueries
            );
        } else {
            message.fallbackToStaleReplicasForDistributedQueries = undefined;
        }
        if (
            object.replicationAlterPartitionsSync !== undefined &&
            object.replicationAlterPartitionsSync !== null
        ) {
            message.replicationAlterPartitionsSync = Number(
                object.replicationAlterPartitionsSync
            );
        } else {
            message.replicationAlterPartitionsSync = undefined;
        }
        if (
            object.distributedProductMode !== undefined &&
            object.distributedProductMode !== null
        ) {
            message.distributedProductMode =
                userSettings_DistributedProductModeFromJSON(
                    object.distributedProductMode
                );
        } else {
            message.distributedProductMode = 0;
        }
        if (
            object.distributedAggregationMemoryEfficient !== undefined &&
            object.distributedAggregationMemoryEfficient !== null
        ) {
            message.distributedAggregationMemoryEfficient = Boolean(
                object.distributedAggregationMemoryEfficient
            );
        } else {
            message.distributedAggregationMemoryEfficient = undefined;
        }
        if (
            object.distributedDdlTaskTimeout !== undefined &&
            object.distributedDdlTaskTimeout !== null
        ) {
            message.distributedDdlTaskTimeout = Number(
                object.distributedDdlTaskTimeout
            );
        } else {
            message.distributedDdlTaskTimeout = undefined;
        }
        if (
            object.skipUnavailableShards !== undefined &&
            object.skipUnavailableShards !== null
        ) {
            message.skipUnavailableShards = Boolean(
                object.skipUnavailableShards
            );
        } else {
            message.skipUnavailableShards = undefined;
        }
        if (object.compile !== undefined && object.compile !== null) {
            message.compile = Boolean(object.compile);
        } else {
            message.compile = undefined;
        }
        if (
            object.minCountToCompile !== undefined &&
            object.minCountToCompile !== null
        ) {
            message.minCountToCompile = Number(object.minCountToCompile);
        } else {
            message.minCountToCompile = undefined;
        }
        if (
            object.compileExpressions !== undefined &&
            object.compileExpressions !== null
        ) {
            message.compileExpressions = Boolean(object.compileExpressions);
        } else {
            message.compileExpressions = undefined;
        }
        if (
            object.minCountToCompileExpression !== undefined &&
            object.minCountToCompileExpression !== null
        ) {
            message.minCountToCompileExpression = Number(
                object.minCountToCompileExpression
            );
        } else {
            message.minCountToCompileExpression = undefined;
        }
        if (object.maxBlockSize !== undefined && object.maxBlockSize !== null) {
            message.maxBlockSize = Number(object.maxBlockSize);
        } else {
            message.maxBlockSize = undefined;
        }
        if (
            object.minInsertBlockSizeRows !== undefined &&
            object.minInsertBlockSizeRows !== null
        ) {
            message.minInsertBlockSizeRows = Number(
                object.minInsertBlockSizeRows
            );
        } else {
            message.minInsertBlockSizeRows = undefined;
        }
        if (
            object.minInsertBlockSizeBytes !== undefined &&
            object.minInsertBlockSizeBytes !== null
        ) {
            message.minInsertBlockSizeBytes = Number(
                object.minInsertBlockSizeBytes
            );
        } else {
            message.minInsertBlockSizeBytes = undefined;
        }
        if (
            object.maxInsertBlockSize !== undefined &&
            object.maxInsertBlockSize !== null
        ) {
            message.maxInsertBlockSize = Number(object.maxInsertBlockSize);
        } else {
            message.maxInsertBlockSize = undefined;
        }
        if (
            object.minBytesToUseDirectIo !== undefined &&
            object.minBytesToUseDirectIo !== null
        ) {
            message.minBytesToUseDirectIo = Number(
                object.minBytesToUseDirectIo
            );
        } else {
            message.minBytesToUseDirectIo = undefined;
        }
        if (
            object.useUncompressedCache !== undefined &&
            object.useUncompressedCache !== null
        ) {
            message.useUncompressedCache = Boolean(object.useUncompressedCache);
        } else {
            message.useUncompressedCache = undefined;
        }
        if (
            object.mergeTreeMaxRowsToUseCache !== undefined &&
            object.mergeTreeMaxRowsToUseCache !== null
        ) {
            message.mergeTreeMaxRowsToUseCache = Number(
                object.mergeTreeMaxRowsToUseCache
            );
        } else {
            message.mergeTreeMaxRowsToUseCache = undefined;
        }
        if (
            object.mergeTreeMaxBytesToUseCache !== undefined &&
            object.mergeTreeMaxBytesToUseCache !== null
        ) {
            message.mergeTreeMaxBytesToUseCache = Number(
                object.mergeTreeMaxBytesToUseCache
            );
        } else {
            message.mergeTreeMaxBytesToUseCache = undefined;
        }
        if (
            object.mergeTreeMinRowsForConcurrentRead !== undefined &&
            object.mergeTreeMinRowsForConcurrentRead !== null
        ) {
            message.mergeTreeMinRowsForConcurrentRead = Number(
                object.mergeTreeMinRowsForConcurrentRead
            );
        } else {
            message.mergeTreeMinRowsForConcurrentRead = undefined;
        }
        if (
            object.mergeTreeMinBytesForConcurrentRead !== undefined &&
            object.mergeTreeMinBytesForConcurrentRead !== null
        ) {
            message.mergeTreeMinBytesForConcurrentRead = Number(
                object.mergeTreeMinBytesForConcurrentRead
            );
        } else {
            message.mergeTreeMinBytesForConcurrentRead = undefined;
        }
        if (
            object.maxBytesBeforeExternalGroupBy !== undefined &&
            object.maxBytesBeforeExternalGroupBy !== null
        ) {
            message.maxBytesBeforeExternalGroupBy = Number(
                object.maxBytesBeforeExternalGroupBy
            );
        } else {
            message.maxBytesBeforeExternalGroupBy = undefined;
        }
        if (
            object.maxBytesBeforeExternalSort !== undefined &&
            object.maxBytesBeforeExternalSort !== null
        ) {
            message.maxBytesBeforeExternalSort = Number(
                object.maxBytesBeforeExternalSort
            );
        } else {
            message.maxBytesBeforeExternalSort = undefined;
        }
        if (
            object.groupByTwoLevelThreshold !== undefined &&
            object.groupByTwoLevelThreshold !== null
        ) {
            message.groupByTwoLevelThreshold = Number(
                object.groupByTwoLevelThreshold
            );
        } else {
            message.groupByTwoLevelThreshold = undefined;
        }
        if (
            object.groupByTwoLevelThresholdBytes !== undefined &&
            object.groupByTwoLevelThresholdBytes !== null
        ) {
            message.groupByTwoLevelThresholdBytes = Number(
                object.groupByTwoLevelThresholdBytes
            );
        } else {
            message.groupByTwoLevelThresholdBytes = undefined;
        }
        if (object.priority !== undefined && object.priority !== null) {
            message.priority = Number(object.priority);
        } else {
            message.priority = undefined;
        }
        if (object.maxThreads !== undefined && object.maxThreads !== null) {
            message.maxThreads = Number(object.maxThreads);
        } else {
            message.maxThreads = undefined;
        }
        if (
            object.maxMemoryUsage !== undefined &&
            object.maxMemoryUsage !== null
        ) {
            message.maxMemoryUsage = Number(object.maxMemoryUsage);
        } else {
            message.maxMemoryUsage = undefined;
        }
        if (
            object.maxMemoryUsageForUser !== undefined &&
            object.maxMemoryUsageForUser !== null
        ) {
            message.maxMemoryUsageForUser = Number(
                object.maxMemoryUsageForUser
            );
        } else {
            message.maxMemoryUsageForUser = undefined;
        }
        if (
            object.maxNetworkBandwidth !== undefined &&
            object.maxNetworkBandwidth !== null
        ) {
            message.maxNetworkBandwidth = Number(object.maxNetworkBandwidth);
        } else {
            message.maxNetworkBandwidth = undefined;
        }
        if (
            object.maxNetworkBandwidthForUser !== undefined &&
            object.maxNetworkBandwidthForUser !== null
        ) {
            message.maxNetworkBandwidthForUser = Number(
                object.maxNetworkBandwidthForUser
            );
        } else {
            message.maxNetworkBandwidthForUser = undefined;
        }
        if (
            object.forceIndexByDate !== undefined &&
            object.forceIndexByDate !== null
        ) {
            message.forceIndexByDate = Boolean(object.forceIndexByDate);
        } else {
            message.forceIndexByDate = undefined;
        }
        if (
            object.forcePrimaryKey !== undefined &&
            object.forcePrimaryKey !== null
        ) {
            message.forcePrimaryKey = Boolean(object.forcePrimaryKey);
        } else {
            message.forcePrimaryKey = undefined;
        }
        if (
            object.maxRowsToRead !== undefined &&
            object.maxRowsToRead !== null
        ) {
            message.maxRowsToRead = Number(object.maxRowsToRead);
        } else {
            message.maxRowsToRead = undefined;
        }
        if (
            object.maxBytesToRead !== undefined &&
            object.maxBytesToRead !== null
        ) {
            message.maxBytesToRead = Number(object.maxBytesToRead);
        } else {
            message.maxBytesToRead = undefined;
        }
        if (
            object.readOverflowMode !== undefined &&
            object.readOverflowMode !== null
        ) {
            message.readOverflowMode = userSettings_OverflowModeFromJSON(
                object.readOverflowMode
            );
        } else {
            message.readOverflowMode = 0;
        }
        if (
            object.maxRowsToGroupBy !== undefined &&
            object.maxRowsToGroupBy !== null
        ) {
            message.maxRowsToGroupBy = Number(object.maxRowsToGroupBy);
        } else {
            message.maxRowsToGroupBy = undefined;
        }
        if (
            object.groupByOverflowMode !== undefined &&
            object.groupByOverflowMode !== null
        ) {
            message.groupByOverflowMode =
                userSettings_GroupByOverflowModeFromJSON(
                    object.groupByOverflowMode
                );
        } else {
            message.groupByOverflowMode = 0;
        }
        if (
            object.maxRowsToSort !== undefined &&
            object.maxRowsToSort !== null
        ) {
            message.maxRowsToSort = Number(object.maxRowsToSort);
        } else {
            message.maxRowsToSort = undefined;
        }
        if (
            object.maxBytesToSort !== undefined &&
            object.maxBytesToSort !== null
        ) {
            message.maxBytesToSort = Number(object.maxBytesToSort);
        } else {
            message.maxBytesToSort = undefined;
        }
        if (
            object.sortOverflowMode !== undefined &&
            object.sortOverflowMode !== null
        ) {
            message.sortOverflowMode = userSettings_OverflowModeFromJSON(
                object.sortOverflowMode
            );
        } else {
            message.sortOverflowMode = 0;
        }
        if (
            object.maxResultRows !== undefined &&
            object.maxResultRows !== null
        ) {
            message.maxResultRows = Number(object.maxResultRows);
        } else {
            message.maxResultRows = undefined;
        }
        if (
            object.maxResultBytes !== undefined &&
            object.maxResultBytes !== null
        ) {
            message.maxResultBytes = Number(object.maxResultBytes);
        } else {
            message.maxResultBytes = undefined;
        }
        if (
            object.resultOverflowMode !== undefined &&
            object.resultOverflowMode !== null
        ) {
            message.resultOverflowMode = userSettings_OverflowModeFromJSON(
                object.resultOverflowMode
            );
        } else {
            message.resultOverflowMode = 0;
        }
        if (
            object.maxRowsInDistinct !== undefined &&
            object.maxRowsInDistinct !== null
        ) {
            message.maxRowsInDistinct = Number(object.maxRowsInDistinct);
        } else {
            message.maxRowsInDistinct = undefined;
        }
        if (
            object.maxBytesInDistinct !== undefined &&
            object.maxBytesInDistinct !== null
        ) {
            message.maxBytesInDistinct = Number(object.maxBytesInDistinct);
        } else {
            message.maxBytesInDistinct = undefined;
        }
        if (
            object.distinctOverflowMode !== undefined &&
            object.distinctOverflowMode !== null
        ) {
            message.distinctOverflowMode = userSettings_OverflowModeFromJSON(
                object.distinctOverflowMode
            );
        } else {
            message.distinctOverflowMode = 0;
        }
        if (
            object.maxRowsToTransfer !== undefined &&
            object.maxRowsToTransfer !== null
        ) {
            message.maxRowsToTransfer = Number(object.maxRowsToTransfer);
        } else {
            message.maxRowsToTransfer = undefined;
        }
        if (
            object.maxBytesToTransfer !== undefined &&
            object.maxBytesToTransfer !== null
        ) {
            message.maxBytesToTransfer = Number(object.maxBytesToTransfer);
        } else {
            message.maxBytesToTransfer = undefined;
        }
        if (
            object.transferOverflowMode !== undefined &&
            object.transferOverflowMode !== null
        ) {
            message.transferOverflowMode = userSettings_OverflowModeFromJSON(
                object.transferOverflowMode
            );
        } else {
            message.transferOverflowMode = 0;
        }
        if (
            object.maxExecutionTime !== undefined &&
            object.maxExecutionTime !== null
        ) {
            message.maxExecutionTime = Number(object.maxExecutionTime);
        } else {
            message.maxExecutionTime = undefined;
        }
        if (
            object.timeoutOverflowMode !== undefined &&
            object.timeoutOverflowMode !== null
        ) {
            message.timeoutOverflowMode = userSettings_OverflowModeFromJSON(
                object.timeoutOverflowMode
            );
        } else {
            message.timeoutOverflowMode = 0;
        }
        if (object.maxRowsInSet !== undefined && object.maxRowsInSet !== null) {
            message.maxRowsInSet = Number(object.maxRowsInSet);
        } else {
            message.maxRowsInSet = undefined;
        }
        if (
            object.maxBytesInSet !== undefined &&
            object.maxBytesInSet !== null
        ) {
            message.maxBytesInSet = Number(object.maxBytesInSet);
        } else {
            message.maxBytesInSet = undefined;
        }
        if (
            object.setOverflowMode !== undefined &&
            object.setOverflowMode !== null
        ) {
            message.setOverflowMode = userSettings_OverflowModeFromJSON(
                object.setOverflowMode
            );
        } else {
            message.setOverflowMode = 0;
        }
        if (
            object.maxRowsInJoin !== undefined &&
            object.maxRowsInJoin !== null
        ) {
            message.maxRowsInJoin = Number(object.maxRowsInJoin);
        } else {
            message.maxRowsInJoin = undefined;
        }
        if (
            object.maxBytesInJoin !== undefined &&
            object.maxBytesInJoin !== null
        ) {
            message.maxBytesInJoin = Number(object.maxBytesInJoin);
        } else {
            message.maxBytesInJoin = undefined;
        }
        if (
            object.joinOverflowMode !== undefined &&
            object.joinOverflowMode !== null
        ) {
            message.joinOverflowMode = userSettings_OverflowModeFromJSON(
                object.joinOverflowMode
            );
        } else {
            message.joinOverflowMode = 0;
        }
        if (
            object.maxColumnsToRead !== undefined &&
            object.maxColumnsToRead !== null
        ) {
            message.maxColumnsToRead = Number(object.maxColumnsToRead);
        } else {
            message.maxColumnsToRead = undefined;
        }
        if (
            object.maxTemporaryColumns !== undefined &&
            object.maxTemporaryColumns !== null
        ) {
            message.maxTemporaryColumns = Number(object.maxTemporaryColumns);
        } else {
            message.maxTemporaryColumns = undefined;
        }
        if (
            object.maxTemporaryNonConstColumns !== undefined &&
            object.maxTemporaryNonConstColumns !== null
        ) {
            message.maxTemporaryNonConstColumns = Number(
                object.maxTemporaryNonConstColumns
            );
        } else {
            message.maxTemporaryNonConstColumns = undefined;
        }
        if (object.maxQuerySize !== undefined && object.maxQuerySize !== null) {
            message.maxQuerySize = Number(object.maxQuerySize);
        } else {
            message.maxQuerySize = undefined;
        }
        if (object.maxAstDepth !== undefined && object.maxAstDepth !== null) {
            message.maxAstDepth = Number(object.maxAstDepth);
        } else {
            message.maxAstDepth = undefined;
        }
        if (
            object.maxAstElements !== undefined &&
            object.maxAstElements !== null
        ) {
            message.maxAstElements = Number(object.maxAstElements);
        } else {
            message.maxAstElements = undefined;
        }
        if (
            object.maxExpandedAstElements !== undefined &&
            object.maxExpandedAstElements !== null
        ) {
            message.maxExpandedAstElements = Number(
                object.maxExpandedAstElements
            );
        } else {
            message.maxExpandedAstElements = undefined;
        }
        if (
            object.minExecutionSpeed !== undefined &&
            object.minExecutionSpeed !== null
        ) {
            message.minExecutionSpeed = Number(object.minExecutionSpeed);
        } else {
            message.minExecutionSpeed = undefined;
        }
        if (
            object.minExecutionSpeedBytes !== undefined &&
            object.minExecutionSpeedBytes !== null
        ) {
            message.minExecutionSpeedBytes = Number(
                object.minExecutionSpeedBytes
            );
        } else {
            message.minExecutionSpeedBytes = undefined;
        }
        if (
            object.countDistinctImplementation !== undefined &&
            object.countDistinctImplementation !== null
        ) {
            message.countDistinctImplementation =
                userSettings_CountDistinctImplementationFromJSON(
                    object.countDistinctImplementation
                );
        } else {
            message.countDistinctImplementation = 0;
        }
        if (
            object.inputFormatValuesInterpretExpressions !== undefined &&
            object.inputFormatValuesInterpretExpressions !== null
        ) {
            message.inputFormatValuesInterpretExpressions = Boolean(
                object.inputFormatValuesInterpretExpressions
            );
        } else {
            message.inputFormatValuesInterpretExpressions = undefined;
        }
        if (
            object.inputFormatDefaultsForOmittedFields !== undefined &&
            object.inputFormatDefaultsForOmittedFields !== null
        ) {
            message.inputFormatDefaultsForOmittedFields = Boolean(
                object.inputFormatDefaultsForOmittedFields
            );
        } else {
            message.inputFormatDefaultsForOmittedFields = undefined;
        }
        if (
            object.outputFormatJsonQuote64bitIntegers !== undefined &&
            object.outputFormatJsonQuote64bitIntegers !== null
        ) {
            message.outputFormatJsonQuote64bitIntegers = Boolean(
                object.outputFormatJsonQuote64bitIntegers
            );
        } else {
            message.outputFormatJsonQuote64bitIntegers = undefined;
        }
        if (
            object.outputFormatJsonQuoteDenormals !== undefined &&
            object.outputFormatJsonQuoteDenormals !== null
        ) {
            message.outputFormatJsonQuoteDenormals = Boolean(
                object.outputFormatJsonQuoteDenormals
            );
        } else {
            message.outputFormatJsonQuoteDenormals = undefined;
        }
        if (
            object.lowCardinalityAllowInNativeFormat !== undefined &&
            object.lowCardinalityAllowInNativeFormat !== null
        ) {
            message.lowCardinalityAllowInNativeFormat = Boolean(
                object.lowCardinalityAllowInNativeFormat
            );
        } else {
            message.lowCardinalityAllowInNativeFormat = undefined;
        }
        if (
            object.emptyResultForAggregationByEmptySet !== undefined &&
            object.emptyResultForAggregationByEmptySet !== null
        ) {
            message.emptyResultForAggregationByEmptySet = Boolean(
                object.emptyResultForAggregationByEmptySet
            );
        } else {
            message.emptyResultForAggregationByEmptySet = undefined;
        }
        if (
            object.joinedSubqueryRequiresAlias !== undefined &&
            object.joinedSubqueryRequiresAlias !== null
        ) {
            message.joinedSubqueryRequiresAlias = Boolean(
                object.joinedSubqueryRequiresAlias
            );
        } else {
            message.joinedSubqueryRequiresAlias = undefined;
        }
        if (object.joinUseNulls !== undefined && object.joinUseNulls !== null) {
            message.joinUseNulls = Boolean(object.joinUseNulls);
        } else {
            message.joinUseNulls = undefined;
        }
        if (
            object.transformNullIn !== undefined &&
            object.transformNullIn !== null
        ) {
            message.transformNullIn = Boolean(object.transformNullIn);
        } else {
            message.transformNullIn = undefined;
        }
        if (
            object.httpConnectionTimeout !== undefined &&
            object.httpConnectionTimeout !== null
        ) {
            message.httpConnectionTimeout = Number(
                object.httpConnectionTimeout
            );
        } else {
            message.httpConnectionTimeout = undefined;
        }
        if (
            object.httpReceiveTimeout !== undefined &&
            object.httpReceiveTimeout !== null
        ) {
            message.httpReceiveTimeout = Number(object.httpReceiveTimeout);
        } else {
            message.httpReceiveTimeout = undefined;
        }
        if (
            object.httpSendTimeout !== undefined &&
            object.httpSendTimeout !== null
        ) {
            message.httpSendTimeout = Number(object.httpSendTimeout);
        } else {
            message.httpSendTimeout = undefined;
        }
        if (
            object.enableHttpCompression !== undefined &&
            object.enableHttpCompression !== null
        ) {
            message.enableHttpCompression = Boolean(
                object.enableHttpCompression
            );
        } else {
            message.enableHttpCompression = undefined;
        }
        if (
            object.sendProgressInHttpHeaders !== undefined &&
            object.sendProgressInHttpHeaders !== null
        ) {
            message.sendProgressInHttpHeaders = Boolean(
                object.sendProgressInHttpHeaders
            );
        } else {
            message.sendProgressInHttpHeaders = undefined;
        }
        if (
            object.httpHeadersProgressInterval !== undefined &&
            object.httpHeadersProgressInterval !== null
        ) {
            message.httpHeadersProgressInterval = Number(
                object.httpHeadersProgressInterval
            );
        } else {
            message.httpHeadersProgressInterval = undefined;
        }
        if (
            object.addHttpCorsHeader !== undefined &&
            object.addHttpCorsHeader !== null
        ) {
            message.addHttpCorsHeader = Boolean(object.addHttpCorsHeader);
        } else {
            message.addHttpCorsHeader = undefined;
        }
        if (object.quotaMode !== undefined && object.quotaMode !== null) {
            message.quotaMode = userSettings_QuotaModeFromJSON(
                object.quotaMode
            );
        } else {
            message.quotaMode = 0;
        }
        return message;
    },

    toJSON(message: UserSettings): unknown {
        const obj: any = {};
        message.readonly !== undefined && (obj.readonly = message.readonly);
        message.allowDdl !== undefined && (obj.allowDdl = message.allowDdl);
        message.insertQuorum !== undefined &&
            (obj.insertQuorum = message.insertQuorum);
        message.connectTimeout !== undefined &&
            (obj.connectTimeout = message.connectTimeout);
        message.receiveTimeout !== undefined &&
            (obj.receiveTimeout = message.receiveTimeout);
        message.sendTimeout !== undefined &&
            (obj.sendTimeout = message.sendTimeout);
        message.insertQuorumTimeout !== undefined &&
            (obj.insertQuorumTimeout = message.insertQuorumTimeout);
        message.selectSequentialConsistency !== undefined &&
            (obj.selectSequentialConsistency =
                message.selectSequentialConsistency);
        message.maxReplicaDelayForDistributedQueries !== undefined &&
            (obj.maxReplicaDelayForDistributedQueries =
                message.maxReplicaDelayForDistributedQueries);
        message.fallbackToStaleReplicasForDistributedQueries !== undefined &&
            (obj.fallbackToStaleReplicasForDistributedQueries =
                message.fallbackToStaleReplicasForDistributedQueries);
        message.replicationAlterPartitionsSync !== undefined &&
            (obj.replicationAlterPartitionsSync =
                message.replicationAlterPartitionsSync);
        message.distributedProductMode !== undefined &&
            (obj.distributedProductMode =
                userSettings_DistributedProductModeToJSON(
                    message.distributedProductMode
                ));
        message.distributedAggregationMemoryEfficient !== undefined &&
            (obj.distributedAggregationMemoryEfficient =
                message.distributedAggregationMemoryEfficient);
        message.distributedDdlTaskTimeout !== undefined &&
            (obj.distributedDdlTaskTimeout = message.distributedDdlTaskTimeout);
        message.skipUnavailableShards !== undefined &&
            (obj.skipUnavailableShards = message.skipUnavailableShards);
        message.compile !== undefined && (obj.compile = message.compile);
        message.minCountToCompile !== undefined &&
            (obj.minCountToCompile = message.minCountToCompile);
        message.compileExpressions !== undefined &&
            (obj.compileExpressions = message.compileExpressions);
        message.minCountToCompileExpression !== undefined &&
            (obj.minCountToCompileExpression =
                message.minCountToCompileExpression);
        message.maxBlockSize !== undefined &&
            (obj.maxBlockSize = message.maxBlockSize);
        message.minInsertBlockSizeRows !== undefined &&
            (obj.minInsertBlockSizeRows = message.minInsertBlockSizeRows);
        message.minInsertBlockSizeBytes !== undefined &&
            (obj.minInsertBlockSizeBytes = message.minInsertBlockSizeBytes);
        message.maxInsertBlockSize !== undefined &&
            (obj.maxInsertBlockSize = message.maxInsertBlockSize);
        message.minBytesToUseDirectIo !== undefined &&
            (obj.minBytesToUseDirectIo = message.minBytesToUseDirectIo);
        message.useUncompressedCache !== undefined &&
            (obj.useUncompressedCache = message.useUncompressedCache);
        message.mergeTreeMaxRowsToUseCache !== undefined &&
            (obj.mergeTreeMaxRowsToUseCache =
                message.mergeTreeMaxRowsToUseCache);
        message.mergeTreeMaxBytesToUseCache !== undefined &&
            (obj.mergeTreeMaxBytesToUseCache =
                message.mergeTreeMaxBytesToUseCache);
        message.mergeTreeMinRowsForConcurrentRead !== undefined &&
            (obj.mergeTreeMinRowsForConcurrentRead =
                message.mergeTreeMinRowsForConcurrentRead);
        message.mergeTreeMinBytesForConcurrentRead !== undefined &&
            (obj.mergeTreeMinBytesForConcurrentRead =
                message.mergeTreeMinBytesForConcurrentRead);
        message.maxBytesBeforeExternalGroupBy !== undefined &&
            (obj.maxBytesBeforeExternalGroupBy =
                message.maxBytesBeforeExternalGroupBy);
        message.maxBytesBeforeExternalSort !== undefined &&
            (obj.maxBytesBeforeExternalSort =
                message.maxBytesBeforeExternalSort);
        message.groupByTwoLevelThreshold !== undefined &&
            (obj.groupByTwoLevelThreshold = message.groupByTwoLevelThreshold);
        message.groupByTwoLevelThresholdBytes !== undefined &&
            (obj.groupByTwoLevelThresholdBytes =
                message.groupByTwoLevelThresholdBytes);
        message.priority !== undefined && (obj.priority = message.priority);
        message.maxThreads !== undefined &&
            (obj.maxThreads = message.maxThreads);
        message.maxMemoryUsage !== undefined &&
            (obj.maxMemoryUsage = message.maxMemoryUsage);
        message.maxMemoryUsageForUser !== undefined &&
            (obj.maxMemoryUsageForUser = message.maxMemoryUsageForUser);
        message.maxNetworkBandwidth !== undefined &&
            (obj.maxNetworkBandwidth = message.maxNetworkBandwidth);
        message.maxNetworkBandwidthForUser !== undefined &&
            (obj.maxNetworkBandwidthForUser =
                message.maxNetworkBandwidthForUser);
        message.forceIndexByDate !== undefined &&
            (obj.forceIndexByDate = message.forceIndexByDate);
        message.forcePrimaryKey !== undefined &&
            (obj.forcePrimaryKey = message.forcePrimaryKey);
        message.maxRowsToRead !== undefined &&
            (obj.maxRowsToRead = message.maxRowsToRead);
        message.maxBytesToRead !== undefined &&
            (obj.maxBytesToRead = message.maxBytesToRead);
        message.readOverflowMode !== undefined &&
            (obj.readOverflowMode = userSettings_OverflowModeToJSON(
                message.readOverflowMode
            ));
        message.maxRowsToGroupBy !== undefined &&
            (obj.maxRowsToGroupBy = message.maxRowsToGroupBy);
        message.groupByOverflowMode !== undefined &&
            (obj.groupByOverflowMode = userSettings_GroupByOverflowModeToJSON(
                message.groupByOverflowMode
            ));
        message.maxRowsToSort !== undefined &&
            (obj.maxRowsToSort = message.maxRowsToSort);
        message.maxBytesToSort !== undefined &&
            (obj.maxBytesToSort = message.maxBytesToSort);
        message.sortOverflowMode !== undefined &&
            (obj.sortOverflowMode = userSettings_OverflowModeToJSON(
                message.sortOverflowMode
            ));
        message.maxResultRows !== undefined &&
            (obj.maxResultRows = message.maxResultRows);
        message.maxResultBytes !== undefined &&
            (obj.maxResultBytes = message.maxResultBytes);
        message.resultOverflowMode !== undefined &&
            (obj.resultOverflowMode = userSettings_OverflowModeToJSON(
                message.resultOverflowMode
            ));
        message.maxRowsInDistinct !== undefined &&
            (obj.maxRowsInDistinct = message.maxRowsInDistinct);
        message.maxBytesInDistinct !== undefined &&
            (obj.maxBytesInDistinct = message.maxBytesInDistinct);
        message.distinctOverflowMode !== undefined &&
            (obj.distinctOverflowMode = userSettings_OverflowModeToJSON(
                message.distinctOverflowMode
            ));
        message.maxRowsToTransfer !== undefined &&
            (obj.maxRowsToTransfer = message.maxRowsToTransfer);
        message.maxBytesToTransfer !== undefined &&
            (obj.maxBytesToTransfer = message.maxBytesToTransfer);
        message.transferOverflowMode !== undefined &&
            (obj.transferOverflowMode = userSettings_OverflowModeToJSON(
                message.transferOverflowMode
            ));
        message.maxExecutionTime !== undefined &&
            (obj.maxExecutionTime = message.maxExecutionTime);
        message.timeoutOverflowMode !== undefined &&
            (obj.timeoutOverflowMode = userSettings_OverflowModeToJSON(
                message.timeoutOverflowMode
            ));
        message.maxRowsInSet !== undefined &&
            (obj.maxRowsInSet = message.maxRowsInSet);
        message.maxBytesInSet !== undefined &&
            (obj.maxBytesInSet = message.maxBytesInSet);
        message.setOverflowMode !== undefined &&
            (obj.setOverflowMode = userSettings_OverflowModeToJSON(
                message.setOverflowMode
            ));
        message.maxRowsInJoin !== undefined &&
            (obj.maxRowsInJoin = message.maxRowsInJoin);
        message.maxBytesInJoin !== undefined &&
            (obj.maxBytesInJoin = message.maxBytesInJoin);
        message.joinOverflowMode !== undefined &&
            (obj.joinOverflowMode = userSettings_OverflowModeToJSON(
                message.joinOverflowMode
            ));
        message.maxColumnsToRead !== undefined &&
            (obj.maxColumnsToRead = message.maxColumnsToRead);
        message.maxTemporaryColumns !== undefined &&
            (obj.maxTemporaryColumns = message.maxTemporaryColumns);
        message.maxTemporaryNonConstColumns !== undefined &&
            (obj.maxTemporaryNonConstColumns =
                message.maxTemporaryNonConstColumns);
        message.maxQuerySize !== undefined &&
            (obj.maxQuerySize = message.maxQuerySize);
        message.maxAstDepth !== undefined &&
            (obj.maxAstDepth = message.maxAstDepth);
        message.maxAstElements !== undefined &&
            (obj.maxAstElements = message.maxAstElements);
        message.maxExpandedAstElements !== undefined &&
            (obj.maxExpandedAstElements = message.maxExpandedAstElements);
        message.minExecutionSpeed !== undefined &&
            (obj.minExecutionSpeed = message.minExecutionSpeed);
        message.minExecutionSpeedBytes !== undefined &&
            (obj.minExecutionSpeedBytes = message.minExecutionSpeedBytes);
        message.countDistinctImplementation !== undefined &&
            (obj.countDistinctImplementation =
                userSettings_CountDistinctImplementationToJSON(
                    message.countDistinctImplementation
                ));
        message.inputFormatValuesInterpretExpressions !== undefined &&
            (obj.inputFormatValuesInterpretExpressions =
                message.inputFormatValuesInterpretExpressions);
        message.inputFormatDefaultsForOmittedFields !== undefined &&
            (obj.inputFormatDefaultsForOmittedFields =
                message.inputFormatDefaultsForOmittedFields);
        message.outputFormatJsonQuote64bitIntegers !== undefined &&
            (obj.outputFormatJsonQuote64bitIntegers =
                message.outputFormatJsonQuote64bitIntegers);
        message.outputFormatJsonQuoteDenormals !== undefined &&
            (obj.outputFormatJsonQuoteDenormals =
                message.outputFormatJsonQuoteDenormals);
        message.lowCardinalityAllowInNativeFormat !== undefined &&
            (obj.lowCardinalityAllowInNativeFormat =
                message.lowCardinalityAllowInNativeFormat);
        message.emptyResultForAggregationByEmptySet !== undefined &&
            (obj.emptyResultForAggregationByEmptySet =
                message.emptyResultForAggregationByEmptySet);
        message.joinedSubqueryRequiresAlias !== undefined &&
            (obj.joinedSubqueryRequiresAlias =
                message.joinedSubqueryRequiresAlias);
        message.joinUseNulls !== undefined &&
            (obj.joinUseNulls = message.joinUseNulls);
        message.transformNullIn !== undefined &&
            (obj.transformNullIn = message.transformNullIn);
        message.httpConnectionTimeout !== undefined &&
            (obj.httpConnectionTimeout = message.httpConnectionTimeout);
        message.httpReceiveTimeout !== undefined &&
            (obj.httpReceiveTimeout = message.httpReceiveTimeout);
        message.httpSendTimeout !== undefined &&
            (obj.httpSendTimeout = message.httpSendTimeout);
        message.enableHttpCompression !== undefined &&
            (obj.enableHttpCompression = message.enableHttpCompression);
        message.sendProgressInHttpHeaders !== undefined &&
            (obj.sendProgressInHttpHeaders = message.sendProgressInHttpHeaders);
        message.httpHeadersProgressInterval !== undefined &&
            (obj.httpHeadersProgressInterval =
                message.httpHeadersProgressInterval);
        message.addHttpCorsHeader !== undefined &&
            (obj.addHttpCorsHeader = message.addHttpCorsHeader);
        message.quotaMode !== undefined &&
            (obj.quotaMode = userSettings_QuotaModeToJSON(message.quotaMode));
        return obj;
    },

    fromPartial(object: DeepPartial<UserSettings>): UserSettings {
        const message = { ...baseUserSettings } as UserSettings;
        if (object.readonly !== undefined && object.readonly !== null) {
            message.readonly = object.readonly;
        } else {
            message.readonly = undefined;
        }
        if (object.allowDdl !== undefined && object.allowDdl !== null) {
            message.allowDdl = object.allowDdl;
        } else {
            message.allowDdl = undefined;
        }
        if (object.insertQuorum !== undefined && object.insertQuorum !== null) {
            message.insertQuorum = object.insertQuorum;
        } else {
            message.insertQuorum = undefined;
        }
        if (
            object.connectTimeout !== undefined &&
            object.connectTimeout !== null
        ) {
            message.connectTimeout = object.connectTimeout;
        } else {
            message.connectTimeout = undefined;
        }
        if (
            object.receiveTimeout !== undefined &&
            object.receiveTimeout !== null
        ) {
            message.receiveTimeout = object.receiveTimeout;
        } else {
            message.receiveTimeout = undefined;
        }
        if (object.sendTimeout !== undefined && object.sendTimeout !== null) {
            message.sendTimeout = object.sendTimeout;
        } else {
            message.sendTimeout = undefined;
        }
        if (
            object.insertQuorumTimeout !== undefined &&
            object.insertQuorumTimeout !== null
        ) {
            message.insertQuorumTimeout = object.insertQuorumTimeout;
        } else {
            message.insertQuorumTimeout = undefined;
        }
        if (
            object.selectSequentialConsistency !== undefined &&
            object.selectSequentialConsistency !== null
        ) {
            message.selectSequentialConsistency =
                object.selectSequentialConsistency;
        } else {
            message.selectSequentialConsistency = undefined;
        }
        if (
            object.maxReplicaDelayForDistributedQueries !== undefined &&
            object.maxReplicaDelayForDistributedQueries !== null
        ) {
            message.maxReplicaDelayForDistributedQueries =
                object.maxReplicaDelayForDistributedQueries;
        } else {
            message.maxReplicaDelayForDistributedQueries = undefined;
        }
        if (
            object.fallbackToStaleReplicasForDistributedQueries !== undefined &&
            object.fallbackToStaleReplicasForDistributedQueries !== null
        ) {
            message.fallbackToStaleReplicasForDistributedQueries =
                object.fallbackToStaleReplicasForDistributedQueries;
        } else {
            message.fallbackToStaleReplicasForDistributedQueries = undefined;
        }
        if (
            object.replicationAlterPartitionsSync !== undefined &&
            object.replicationAlterPartitionsSync !== null
        ) {
            message.replicationAlterPartitionsSync =
                object.replicationAlterPartitionsSync;
        } else {
            message.replicationAlterPartitionsSync = undefined;
        }
        if (
            object.distributedProductMode !== undefined &&
            object.distributedProductMode !== null
        ) {
            message.distributedProductMode = object.distributedProductMode;
        } else {
            message.distributedProductMode = 0;
        }
        if (
            object.distributedAggregationMemoryEfficient !== undefined &&
            object.distributedAggregationMemoryEfficient !== null
        ) {
            message.distributedAggregationMemoryEfficient =
                object.distributedAggregationMemoryEfficient;
        } else {
            message.distributedAggregationMemoryEfficient = undefined;
        }
        if (
            object.distributedDdlTaskTimeout !== undefined &&
            object.distributedDdlTaskTimeout !== null
        ) {
            message.distributedDdlTaskTimeout =
                object.distributedDdlTaskTimeout;
        } else {
            message.distributedDdlTaskTimeout = undefined;
        }
        if (
            object.skipUnavailableShards !== undefined &&
            object.skipUnavailableShards !== null
        ) {
            message.skipUnavailableShards = object.skipUnavailableShards;
        } else {
            message.skipUnavailableShards = undefined;
        }
        if (object.compile !== undefined && object.compile !== null) {
            message.compile = object.compile;
        } else {
            message.compile = undefined;
        }
        if (
            object.minCountToCompile !== undefined &&
            object.minCountToCompile !== null
        ) {
            message.minCountToCompile = object.minCountToCompile;
        } else {
            message.minCountToCompile = undefined;
        }
        if (
            object.compileExpressions !== undefined &&
            object.compileExpressions !== null
        ) {
            message.compileExpressions = object.compileExpressions;
        } else {
            message.compileExpressions = undefined;
        }
        if (
            object.minCountToCompileExpression !== undefined &&
            object.minCountToCompileExpression !== null
        ) {
            message.minCountToCompileExpression =
                object.minCountToCompileExpression;
        } else {
            message.minCountToCompileExpression = undefined;
        }
        if (object.maxBlockSize !== undefined && object.maxBlockSize !== null) {
            message.maxBlockSize = object.maxBlockSize;
        } else {
            message.maxBlockSize = undefined;
        }
        if (
            object.minInsertBlockSizeRows !== undefined &&
            object.minInsertBlockSizeRows !== null
        ) {
            message.minInsertBlockSizeRows = object.minInsertBlockSizeRows;
        } else {
            message.minInsertBlockSizeRows = undefined;
        }
        if (
            object.minInsertBlockSizeBytes !== undefined &&
            object.minInsertBlockSizeBytes !== null
        ) {
            message.minInsertBlockSizeBytes = object.minInsertBlockSizeBytes;
        } else {
            message.minInsertBlockSizeBytes = undefined;
        }
        if (
            object.maxInsertBlockSize !== undefined &&
            object.maxInsertBlockSize !== null
        ) {
            message.maxInsertBlockSize = object.maxInsertBlockSize;
        } else {
            message.maxInsertBlockSize = undefined;
        }
        if (
            object.minBytesToUseDirectIo !== undefined &&
            object.minBytesToUseDirectIo !== null
        ) {
            message.minBytesToUseDirectIo = object.minBytesToUseDirectIo;
        } else {
            message.minBytesToUseDirectIo = undefined;
        }
        if (
            object.useUncompressedCache !== undefined &&
            object.useUncompressedCache !== null
        ) {
            message.useUncompressedCache = object.useUncompressedCache;
        } else {
            message.useUncompressedCache = undefined;
        }
        if (
            object.mergeTreeMaxRowsToUseCache !== undefined &&
            object.mergeTreeMaxRowsToUseCache !== null
        ) {
            message.mergeTreeMaxRowsToUseCache =
                object.mergeTreeMaxRowsToUseCache;
        } else {
            message.mergeTreeMaxRowsToUseCache = undefined;
        }
        if (
            object.mergeTreeMaxBytesToUseCache !== undefined &&
            object.mergeTreeMaxBytesToUseCache !== null
        ) {
            message.mergeTreeMaxBytesToUseCache =
                object.mergeTreeMaxBytesToUseCache;
        } else {
            message.mergeTreeMaxBytesToUseCache = undefined;
        }
        if (
            object.mergeTreeMinRowsForConcurrentRead !== undefined &&
            object.mergeTreeMinRowsForConcurrentRead !== null
        ) {
            message.mergeTreeMinRowsForConcurrentRead =
                object.mergeTreeMinRowsForConcurrentRead;
        } else {
            message.mergeTreeMinRowsForConcurrentRead = undefined;
        }
        if (
            object.mergeTreeMinBytesForConcurrentRead !== undefined &&
            object.mergeTreeMinBytesForConcurrentRead !== null
        ) {
            message.mergeTreeMinBytesForConcurrentRead =
                object.mergeTreeMinBytesForConcurrentRead;
        } else {
            message.mergeTreeMinBytesForConcurrentRead = undefined;
        }
        if (
            object.maxBytesBeforeExternalGroupBy !== undefined &&
            object.maxBytesBeforeExternalGroupBy !== null
        ) {
            message.maxBytesBeforeExternalGroupBy =
                object.maxBytesBeforeExternalGroupBy;
        } else {
            message.maxBytesBeforeExternalGroupBy = undefined;
        }
        if (
            object.maxBytesBeforeExternalSort !== undefined &&
            object.maxBytesBeforeExternalSort !== null
        ) {
            message.maxBytesBeforeExternalSort =
                object.maxBytesBeforeExternalSort;
        } else {
            message.maxBytesBeforeExternalSort = undefined;
        }
        if (
            object.groupByTwoLevelThreshold !== undefined &&
            object.groupByTwoLevelThreshold !== null
        ) {
            message.groupByTwoLevelThreshold = object.groupByTwoLevelThreshold;
        } else {
            message.groupByTwoLevelThreshold = undefined;
        }
        if (
            object.groupByTwoLevelThresholdBytes !== undefined &&
            object.groupByTwoLevelThresholdBytes !== null
        ) {
            message.groupByTwoLevelThresholdBytes =
                object.groupByTwoLevelThresholdBytes;
        } else {
            message.groupByTwoLevelThresholdBytes = undefined;
        }
        if (object.priority !== undefined && object.priority !== null) {
            message.priority = object.priority;
        } else {
            message.priority = undefined;
        }
        if (object.maxThreads !== undefined && object.maxThreads !== null) {
            message.maxThreads = object.maxThreads;
        } else {
            message.maxThreads = undefined;
        }
        if (
            object.maxMemoryUsage !== undefined &&
            object.maxMemoryUsage !== null
        ) {
            message.maxMemoryUsage = object.maxMemoryUsage;
        } else {
            message.maxMemoryUsage = undefined;
        }
        if (
            object.maxMemoryUsageForUser !== undefined &&
            object.maxMemoryUsageForUser !== null
        ) {
            message.maxMemoryUsageForUser = object.maxMemoryUsageForUser;
        } else {
            message.maxMemoryUsageForUser = undefined;
        }
        if (
            object.maxNetworkBandwidth !== undefined &&
            object.maxNetworkBandwidth !== null
        ) {
            message.maxNetworkBandwidth = object.maxNetworkBandwidth;
        } else {
            message.maxNetworkBandwidth = undefined;
        }
        if (
            object.maxNetworkBandwidthForUser !== undefined &&
            object.maxNetworkBandwidthForUser !== null
        ) {
            message.maxNetworkBandwidthForUser =
                object.maxNetworkBandwidthForUser;
        } else {
            message.maxNetworkBandwidthForUser = undefined;
        }
        if (
            object.forceIndexByDate !== undefined &&
            object.forceIndexByDate !== null
        ) {
            message.forceIndexByDate = object.forceIndexByDate;
        } else {
            message.forceIndexByDate = undefined;
        }
        if (
            object.forcePrimaryKey !== undefined &&
            object.forcePrimaryKey !== null
        ) {
            message.forcePrimaryKey = object.forcePrimaryKey;
        } else {
            message.forcePrimaryKey = undefined;
        }
        if (
            object.maxRowsToRead !== undefined &&
            object.maxRowsToRead !== null
        ) {
            message.maxRowsToRead = object.maxRowsToRead;
        } else {
            message.maxRowsToRead = undefined;
        }
        if (
            object.maxBytesToRead !== undefined &&
            object.maxBytesToRead !== null
        ) {
            message.maxBytesToRead = object.maxBytesToRead;
        } else {
            message.maxBytesToRead = undefined;
        }
        if (
            object.readOverflowMode !== undefined &&
            object.readOverflowMode !== null
        ) {
            message.readOverflowMode = object.readOverflowMode;
        } else {
            message.readOverflowMode = 0;
        }
        if (
            object.maxRowsToGroupBy !== undefined &&
            object.maxRowsToGroupBy !== null
        ) {
            message.maxRowsToGroupBy = object.maxRowsToGroupBy;
        } else {
            message.maxRowsToGroupBy = undefined;
        }
        if (
            object.groupByOverflowMode !== undefined &&
            object.groupByOverflowMode !== null
        ) {
            message.groupByOverflowMode = object.groupByOverflowMode;
        } else {
            message.groupByOverflowMode = 0;
        }
        if (
            object.maxRowsToSort !== undefined &&
            object.maxRowsToSort !== null
        ) {
            message.maxRowsToSort = object.maxRowsToSort;
        } else {
            message.maxRowsToSort = undefined;
        }
        if (
            object.maxBytesToSort !== undefined &&
            object.maxBytesToSort !== null
        ) {
            message.maxBytesToSort = object.maxBytesToSort;
        } else {
            message.maxBytesToSort = undefined;
        }
        if (
            object.sortOverflowMode !== undefined &&
            object.sortOverflowMode !== null
        ) {
            message.sortOverflowMode = object.sortOverflowMode;
        } else {
            message.sortOverflowMode = 0;
        }
        if (
            object.maxResultRows !== undefined &&
            object.maxResultRows !== null
        ) {
            message.maxResultRows = object.maxResultRows;
        } else {
            message.maxResultRows = undefined;
        }
        if (
            object.maxResultBytes !== undefined &&
            object.maxResultBytes !== null
        ) {
            message.maxResultBytes = object.maxResultBytes;
        } else {
            message.maxResultBytes = undefined;
        }
        if (
            object.resultOverflowMode !== undefined &&
            object.resultOverflowMode !== null
        ) {
            message.resultOverflowMode = object.resultOverflowMode;
        } else {
            message.resultOverflowMode = 0;
        }
        if (
            object.maxRowsInDistinct !== undefined &&
            object.maxRowsInDistinct !== null
        ) {
            message.maxRowsInDistinct = object.maxRowsInDistinct;
        } else {
            message.maxRowsInDistinct = undefined;
        }
        if (
            object.maxBytesInDistinct !== undefined &&
            object.maxBytesInDistinct !== null
        ) {
            message.maxBytesInDistinct = object.maxBytesInDistinct;
        } else {
            message.maxBytesInDistinct = undefined;
        }
        if (
            object.distinctOverflowMode !== undefined &&
            object.distinctOverflowMode !== null
        ) {
            message.distinctOverflowMode = object.distinctOverflowMode;
        } else {
            message.distinctOverflowMode = 0;
        }
        if (
            object.maxRowsToTransfer !== undefined &&
            object.maxRowsToTransfer !== null
        ) {
            message.maxRowsToTransfer = object.maxRowsToTransfer;
        } else {
            message.maxRowsToTransfer = undefined;
        }
        if (
            object.maxBytesToTransfer !== undefined &&
            object.maxBytesToTransfer !== null
        ) {
            message.maxBytesToTransfer = object.maxBytesToTransfer;
        } else {
            message.maxBytesToTransfer = undefined;
        }
        if (
            object.transferOverflowMode !== undefined &&
            object.transferOverflowMode !== null
        ) {
            message.transferOverflowMode = object.transferOverflowMode;
        } else {
            message.transferOverflowMode = 0;
        }
        if (
            object.maxExecutionTime !== undefined &&
            object.maxExecutionTime !== null
        ) {
            message.maxExecutionTime = object.maxExecutionTime;
        } else {
            message.maxExecutionTime = undefined;
        }
        if (
            object.timeoutOverflowMode !== undefined &&
            object.timeoutOverflowMode !== null
        ) {
            message.timeoutOverflowMode = object.timeoutOverflowMode;
        } else {
            message.timeoutOverflowMode = 0;
        }
        if (object.maxRowsInSet !== undefined && object.maxRowsInSet !== null) {
            message.maxRowsInSet = object.maxRowsInSet;
        } else {
            message.maxRowsInSet = undefined;
        }
        if (
            object.maxBytesInSet !== undefined &&
            object.maxBytesInSet !== null
        ) {
            message.maxBytesInSet = object.maxBytesInSet;
        } else {
            message.maxBytesInSet = undefined;
        }
        if (
            object.setOverflowMode !== undefined &&
            object.setOverflowMode !== null
        ) {
            message.setOverflowMode = object.setOverflowMode;
        } else {
            message.setOverflowMode = 0;
        }
        if (
            object.maxRowsInJoin !== undefined &&
            object.maxRowsInJoin !== null
        ) {
            message.maxRowsInJoin = object.maxRowsInJoin;
        } else {
            message.maxRowsInJoin = undefined;
        }
        if (
            object.maxBytesInJoin !== undefined &&
            object.maxBytesInJoin !== null
        ) {
            message.maxBytesInJoin = object.maxBytesInJoin;
        } else {
            message.maxBytesInJoin = undefined;
        }
        if (
            object.joinOverflowMode !== undefined &&
            object.joinOverflowMode !== null
        ) {
            message.joinOverflowMode = object.joinOverflowMode;
        } else {
            message.joinOverflowMode = 0;
        }
        if (
            object.maxColumnsToRead !== undefined &&
            object.maxColumnsToRead !== null
        ) {
            message.maxColumnsToRead = object.maxColumnsToRead;
        } else {
            message.maxColumnsToRead = undefined;
        }
        if (
            object.maxTemporaryColumns !== undefined &&
            object.maxTemporaryColumns !== null
        ) {
            message.maxTemporaryColumns = object.maxTemporaryColumns;
        } else {
            message.maxTemporaryColumns = undefined;
        }
        if (
            object.maxTemporaryNonConstColumns !== undefined &&
            object.maxTemporaryNonConstColumns !== null
        ) {
            message.maxTemporaryNonConstColumns =
                object.maxTemporaryNonConstColumns;
        } else {
            message.maxTemporaryNonConstColumns = undefined;
        }
        if (object.maxQuerySize !== undefined && object.maxQuerySize !== null) {
            message.maxQuerySize = object.maxQuerySize;
        } else {
            message.maxQuerySize = undefined;
        }
        if (object.maxAstDepth !== undefined && object.maxAstDepth !== null) {
            message.maxAstDepth = object.maxAstDepth;
        } else {
            message.maxAstDepth = undefined;
        }
        if (
            object.maxAstElements !== undefined &&
            object.maxAstElements !== null
        ) {
            message.maxAstElements = object.maxAstElements;
        } else {
            message.maxAstElements = undefined;
        }
        if (
            object.maxExpandedAstElements !== undefined &&
            object.maxExpandedAstElements !== null
        ) {
            message.maxExpandedAstElements = object.maxExpandedAstElements;
        } else {
            message.maxExpandedAstElements = undefined;
        }
        if (
            object.minExecutionSpeed !== undefined &&
            object.minExecutionSpeed !== null
        ) {
            message.minExecutionSpeed = object.minExecutionSpeed;
        } else {
            message.minExecutionSpeed = undefined;
        }
        if (
            object.minExecutionSpeedBytes !== undefined &&
            object.minExecutionSpeedBytes !== null
        ) {
            message.minExecutionSpeedBytes = object.minExecutionSpeedBytes;
        } else {
            message.minExecutionSpeedBytes = undefined;
        }
        if (
            object.countDistinctImplementation !== undefined &&
            object.countDistinctImplementation !== null
        ) {
            message.countDistinctImplementation =
                object.countDistinctImplementation;
        } else {
            message.countDistinctImplementation = 0;
        }
        if (
            object.inputFormatValuesInterpretExpressions !== undefined &&
            object.inputFormatValuesInterpretExpressions !== null
        ) {
            message.inputFormatValuesInterpretExpressions =
                object.inputFormatValuesInterpretExpressions;
        } else {
            message.inputFormatValuesInterpretExpressions = undefined;
        }
        if (
            object.inputFormatDefaultsForOmittedFields !== undefined &&
            object.inputFormatDefaultsForOmittedFields !== null
        ) {
            message.inputFormatDefaultsForOmittedFields =
                object.inputFormatDefaultsForOmittedFields;
        } else {
            message.inputFormatDefaultsForOmittedFields = undefined;
        }
        if (
            object.outputFormatJsonQuote64bitIntegers !== undefined &&
            object.outputFormatJsonQuote64bitIntegers !== null
        ) {
            message.outputFormatJsonQuote64bitIntegers =
                object.outputFormatJsonQuote64bitIntegers;
        } else {
            message.outputFormatJsonQuote64bitIntegers = undefined;
        }
        if (
            object.outputFormatJsonQuoteDenormals !== undefined &&
            object.outputFormatJsonQuoteDenormals !== null
        ) {
            message.outputFormatJsonQuoteDenormals =
                object.outputFormatJsonQuoteDenormals;
        } else {
            message.outputFormatJsonQuoteDenormals = undefined;
        }
        if (
            object.lowCardinalityAllowInNativeFormat !== undefined &&
            object.lowCardinalityAllowInNativeFormat !== null
        ) {
            message.lowCardinalityAllowInNativeFormat =
                object.lowCardinalityAllowInNativeFormat;
        } else {
            message.lowCardinalityAllowInNativeFormat = undefined;
        }
        if (
            object.emptyResultForAggregationByEmptySet !== undefined &&
            object.emptyResultForAggregationByEmptySet !== null
        ) {
            message.emptyResultForAggregationByEmptySet =
                object.emptyResultForAggregationByEmptySet;
        } else {
            message.emptyResultForAggregationByEmptySet = undefined;
        }
        if (
            object.joinedSubqueryRequiresAlias !== undefined &&
            object.joinedSubqueryRequiresAlias !== null
        ) {
            message.joinedSubqueryRequiresAlias =
                object.joinedSubqueryRequiresAlias;
        } else {
            message.joinedSubqueryRequiresAlias = undefined;
        }
        if (object.joinUseNulls !== undefined && object.joinUseNulls !== null) {
            message.joinUseNulls = object.joinUseNulls;
        } else {
            message.joinUseNulls = undefined;
        }
        if (
            object.transformNullIn !== undefined &&
            object.transformNullIn !== null
        ) {
            message.transformNullIn = object.transformNullIn;
        } else {
            message.transformNullIn = undefined;
        }
        if (
            object.httpConnectionTimeout !== undefined &&
            object.httpConnectionTimeout !== null
        ) {
            message.httpConnectionTimeout = object.httpConnectionTimeout;
        } else {
            message.httpConnectionTimeout = undefined;
        }
        if (
            object.httpReceiveTimeout !== undefined &&
            object.httpReceiveTimeout !== null
        ) {
            message.httpReceiveTimeout = object.httpReceiveTimeout;
        } else {
            message.httpReceiveTimeout = undefined;
        }
        if (
            object.httpSendTimeout !== undefined &&
            object.httpSendTimeout !== null
        ) {
            message.httpSendTimeout = object.httpSendTimeout;
        } else {
            message.httpSendTimeout = undefined;
        }
        if (
            object.enableHttpCompression !== undefined &&
            object.enableHttpCompression !== null
        ) {
            message.enableHttpCompression = object.enableHttpCompression;
        } else {
            message.enableHttpCompression = undefined;
        }
        if (
            object.sendProgressInHttpHeaders !== undefined &&
            object.sendProgressInHttpHeaders !== null
        ) {
            message.sendProgressInHttpHeaders =
                object.sendProgressInHttpHeaders;
        } else {
            message.sendProgressInHttpHeaders = undefined;
        }
        if (
            object.httpHeadersProgressInterval !== undefined &&
            object.httpHeadersProgressInterval !== null
        ) {
            message.httpHeadersProgressInterval =
                object.httpHeadersProgressInterval;
        } else {
            message.httpHeadersProgressInterval = undefined;
        }
        if (
            object.addHttpCorsHeader !== undefined &&
            object.addHttpCorsHeader !== null
        ) {
            message.addHttpCorsHeader = object.addHttpCorsHeader;
        } else {
            message.addHttpCorsHeader = undefined;
        }
        if (object.quotaMode !== undefined && object.quotaMode !== null) {
            message.quotaMode = object.quotaMode;
        } else {
            message.quotaMode = 0;
        }
        return message;
    },
};

const baseUserQuota: object = {};

export const UserQuota = {
    encode(
        message: UserQuota,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.intervalDuration !== undefined) {
            Int64Value.encode(
                { value: message.intervalDuration! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.queries !== undefined) {
            Int64Value.encode(
                { value: message.queries! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.errors !== undefined) {
            Int64Value.encode(
                { value: message.errors! },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.resultRows !== undefined) {
            Int64Value.encode(
                { value: message.resultRows! },
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.readRows !== undefined) {
            Int64Value.encode(
                { value: message.readRows! },
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.executionTime !== undefined) {
            Int64Value.encode(
                { value: message.executionTime! },
                writer.uint32(50).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UserQuota {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserQuota } as UserQuota;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.intervalDuration = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 2:
                    message.queries = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.errors = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 4:
                    message.resultRows = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 5:
                    message.readRows = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 6:
                    message.executionTime = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UserQuota {
        const message = { ...baseUserQuota } as UserQuota;
        if (
            object.intervalDuration !== undefined &&
            object.intervalDuration !== null
        ) {
            message.intervalDuration = Number(object.intervalDuration);
        } else {
            message.intervalDuration = undefined;
        }
        if (object.queries !== undefined && object.queries !== null) {
            message.queries = Number(object.queries);
        } else {
            message.queries = undefined;
        }
        if (object.errors !== undefined && object.errors !== null) {
            message.errors = Number(object.errors);
        } else {
            message.errors = undefined;
        }
        if (object.resultRows !== undefined && object.resultRows !== null) {
            message.resultRows = Number(object.resultRows);
        } else {
            message.resultRows = undefined;
        }
        if (object.readRows !== undefined && object.readRows !== null) {
            message.readRows = Number(object.readRows);
        } else {
            message.readRows = undefined;
        }
        if (
            object.executionTime !== undefined &&
            object.executionTime !== null
        ) {
            message.executionTime = Number(object.executionTime);
        } else {
            message.executionTime = undefined;
        }
        return message;
    },

    toJSON(message: UserQuota): unknown {
        const obj: any = {};
        message.intervalDuration !== undefined &&
            (obj.intervalDuration = message.intervalDuration);
        message.queries !== undefined && (obj.queries = message.queries);
        message.errors !== undefined && (obj.errors = message.errors);
        message.resultRows !== undefined &&
            (obj.resultRows = message.resultRows);
        message.readRows !== undefined && (obj.readRows = message.readRows);
        message.executionTime !== undefined &&
            (obj.executionTime = message.executionTime);
        return obj;
    },

    fromPartial(object: DeepPartial<UserQuota>): UserQuota {
        const message = { ...baseUserQuota } as UserQuota;
        if (
            object.intervalDuration !== undefined &&
            object.intervalDuration !== null
        ) {
            message.intervalDuration = object.intervalDuration;
        } else {
            message.intervalDuration = undefined;
        }
        if (object.queries !== undefined && object.queries !== null) {
            message.queries = object.queries;
        } else {
            message.queries = undefined;
        }
        if (object.errors !== undefined && object.errors !== null) {
            message.errors = object.errors;
        } else {
            message.errors = undefined;
        }
        if (object.resultRows !== undefined && object.resultRows !== null) {
            message.resultRows = object.resultRows;
        } else {
            message.resultRows = undefined;
        }
        if (object.readRows !== undefined && object.readRows !== null) {
            message.readRows = object.readRows;
        } else {
            message.readRows = undefined;
        }
        if (
            object.executionTime !== undefined &&
            object.executionTime !== null
        ) {
            message.executionTime = object.executionTime;
        } else {
            message.executionTime = undefined;
        }
        return message;
    },
};

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
