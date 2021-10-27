import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters which detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/11/runtime-config.html).
 */
export interface PostgresqlConfig13 {
    $type: 'yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig13';
    maxConnections: number | undefined;
    /** in bytes. */
    sharedBuffers: number | undefined;
    /** in bytes. */
    tempBuffers: number | undefined;
    maxPreparedTransactions: number | undefined;
    /** in bytes. */
    workMem: number | undefined;
    /** in bytes. */
    maintenanceWorkMem: number | undefined;
    /** in bytes. */
    autovacuumWorkMem: number | undefined;
    /** in bytes. */
    tempFileLimit: number | undefined;
    /** in milliseconds. */
    vacuumCostDelay: number | undefined;
    vacuumCostPageHit: number | undefined;
    vacuumCostPageMiss: number | undefined;
    vacuumCostPageDirty: number | undefined;
    vacuumCostLimit: number | undefined;
    /** in milliseconds. */
    bgwriterDelay: number | undefined;
    bgwriterLruMaxpages: number | undefined;
    bgwriterLruMultiplier: number | undefined;
    bgwriterFlushAfter: number | undefined;
    backendFlushAfter: number | undefined;
    oldSnapshotThreshold: number | undefined;
    walLevel: PostgresqlConfig13_WalLevel;
    synchronousCommit: PostgresqlConfig13_SynchronousCommit;
    /** in milliseconds. */
    checkpointTimeout: number | undefined;
    checkpointCompletionTarget: number | undefined;
    checkpointFlushAfter: number | undefined;
    /** in bytes. */
    maxWalSize: number | undefined;
    /** in bytes. */
    minWalSize: number | undefined;
    /** in milliseconds. */
    maxStandbyStreamingDelay: number | undefined;
    defaultStatisticsTarget: number | undefined;
    constraintExclusion: PostgresqlConfig13_ConstraintExclusion;
    cursorTupleFraction: number | undefined;
    fromCollapseLimit: number | undefined;
    joinCollapseLimit: number | undefined;
    forceParallelMode: PostgresqlConfig13_ForceParallelMode;
    clientMinMessages: PostgresqlConfig13_LogLevel;
    logMinMessages: PostgresqlConfig13_LogLevel;
    logMinErrorStatement: PostgresqlConfig13_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement: number | undefined;
    logCheckpoints: boolean | undefined;
    logConnections: boolean | undefined;
    logDisconnections: boolean | undefined;
    logDuration: boolean | undefined;
    logErrorVerbosity: PostgresqlConfig13_LogErrorVerbosity;
    logLockWaits: boolean | undefined;
    logStatement: PostgresqlConfig13_LogStatement;
    logTempFiles: number | undefined;
    searchPath: string;
    rowSecurity: boolean | undefined;
    defaultTransactionIsolation: PostgresqlConfig13_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout: number | undefined;
    /** in milliseconds. */
    lockTimeout: number | undefined;
    /** in milliseconds. */
    idleInTransactionSessionTimeout: number | undefined;
    byteaOutput: PostgresqlConfig13_ByteaOutput;
    xmlbinary: PostgresqlConfig13_XmlBinary;
    xmloption: PostgresqlConfig13_XmlOption;
    /** in bytes. */
    ginPendingListLimit: number | undefined;
    /** in milliseconds. */
    deadlockTimeout: number | undefined;
    maxLocksPerTransaction: number | undefined;
    maxPredLocksPerTransaction: number | undefined;
    arrayNulls: boolean | undefined;
    backslashQuote: PostgresqlConfig13_BackslashQuote;
    defaultWithOids: boolean | undefined;
    escapeStringWarning: boolean | undefined;
    loCompatPrivileges: boolean | undefined;
    operatorPrecedenceWarning: boolean | undefined;
    quoteAllIdentifiers: boolean | undefined;
    standardConformingStrings: boolean | undefined;
    synchronizeSeqscans: boolean | undefined;
    transformNullEquals: boolean | undefined;
    exitOnError: boolean | undefined;
    seqPageCost: number | undefined;
    randomPageCost: number | undefined;
    autovacuumMaxWorkers: number | undefined;
    autovacuumVacuumCostDelay: number | undefined;
    autovacuumVacuumCostLimit: number | undefined;
    /** in milliseconds. */
    autovacuumNaptime: number | undefined;
    /** in milliseconds. */
    archiveTimeout: number | undefined;
    trackActivityQuerySize: number | undefined;
    enableBitmapscan: boolean | undefined;
    enableHashagg: boolean | undefined;
    enableHashjoin: boolean | undefined;
    enableIndexscan: boolean | undefined;
    enableIndexonlyscan: boolean | undefined;
    enableMaterial: boolean | undefined;
    enableMergejoin: boolean | undefined;
    enableNestloop: boolean | undefined;
    enableSeqscan: boolean | undefined;
    enableSort: boolean | undefined;
    enableTidscan: boolean | undefined;
    maxWorkerProcesses: number | undefined;
    maxParallelWorkers: number | undefined;
    maxParallelWorkersPerGather: number | undefined;
    autovacuumVacuumScaleFactor: number | undefined;
    autovacuumAnalyzeScaleFactor: number | undefined;
    defaultTransactionReadOnly: boolean | undefined;
    timezone: string;
    enableParallelAppend: boolean | undefined;
    enableParallelHash: boolean | undefined;
    enablePartitionPruning: boolean | undefined;
    enablePartitionwiseAggregate: boolean | undefined;
    enablePartitionwiseJoin: boolean | undefined;
    jit: boolean | undefined;
    maxParallelMaintenanceWorkers: number | undefined;
    parallelLeaderParticipation: boolean | undefined;
    vacuumCleanupIndexScaleFactor: number | undefined;
    logTransactionSampleRate: number | undefined;
    planCacheMode: PostgresqlConfig13_PlanCacheMode;
    effectiveIoConcurrency: number | undefined;
    effectiveCacheSize: number | undefined;
    sharedPreloadLibraries: PostgresqlConfig13_SharedPreloadLibraries[];
    /** in milliseconds. */
    autoExplainLogMinDuration: number | undefined;
    autoExplainLogAnalyze: boolean | undefined;
    autoExplainLogBuffers: boolean | undefined;
    autoExplainLogTiming: boolean | undefined;
    autoExplainLogTriggers: boolean | undefined;
    autoExplainLogVerbose: boolean | undefined;
    autoExplainLogNestedStatements: boolean | undefined;
    autoExplainSampleRate: number | undefined;
    pgHintPlanEnableHint: boolean | undefined;
    pgHintPlanEnableHintTable: boolean | undefined;
    pgHintPlanDebugPrint: PostgresqlConfig13_PgHintPlanDebugPrint;
    pgHintPlanMessageLevel: PostgresqlConfig13_LogLevel;
    hashMemMultiplier: number | undefined;
    /** in bytes. */
    logicalDecodingWorkMem: number | undefined;
    maintenanceIoConcurrency: number | undefined;
    /** in bytes. */
    maxSlotWalKeepSize: number | undefined;
    /** in bytes. */
    walKeepSize: number | undefined;
    enableIncrementalSort: boolean | undefined;
    autovacuumVacuumInsertThreshold: number | undefined;
    autovacuumVacuumInsertScaleFactor: number | undefined;
    /** in milliseconds. */
    logMinDurationSample: number | undefined;
    logStatementSampleRate: number | undefined;
    /** in bytes. */
    logParameterMaxLength: number | undefined;
    /** in bytes. */
    logParameterMaxLengthOnError: number | undefined;
}
export declare enum PostgresqlConfig13_WalLevel {
    WAL_LEVEL_UNSPECIFIED = 0,
    WAL_LEVEL_REPLICA = 1,
    WAL_LEVEL_LOGICAL = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_WalLevelFromJSON(object: any): PostgresqlConfig13_WalLevel;
export declare function postgresqlConfig13_WalLevelToJSON(object: PostgresqlConfig13_WalLevel): string;
export declare enum PostgresqlConfig13_SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    SYNCHRONOUS_COMMIT_ON = 1,
    SYNCHRONOUS_COMMIT_OFF = 2,
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_SynchronousCommitFromJSON(object: any): PostgresqlConfig13_SynchronousCommit;
export declare function postgresqlConfig13_SynchronousCommitToJSON(object: PostgresqlConfig13_SynchronousCommit): string;
export declare enum PostgresqlConfig13_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_ConstraintExclusionFromJSON(object: any): PostgresqlConfig13_ConstraintExclusion;
export declare function postgresqlConfig13_ConstraintExclusionToJSON(object: PostgresqlConfig13_ConstraintExclusion): string;
export declare enum PostgresqlConfig13_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_ForceParallelModeFromJSON(object: any): PostgresqlConfig13_ForceParallelMode;
export declare function postgresqlConfig13_ForceParallelModeToJSON(object: PostgresqlConfig13_ForceParallelMode): string;
export declare enum PostgresqlConfig13_LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    LOG_LEVEL_DEBUG5 = 1,
    LOG_LEVEL_DEBUG4 = 2,
    LOG_LEVEL_DEBUG3 = 3,
    LOG_LEVEL_DEBUG2 = 4,
    LOG_LEVEL_DEBUG1 = 5,
    LOG_LEVEL_LOG = 6,
    LOG_LEVEL_NOTICE = 7,
    LOG_LEVEL_WARNING = 8,
    LOG_LEVEL_ERROR = 9,
    LOG_LEVEL_FATAL = 10,
    LOG_LEVEL_PANIC = 11,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_LogLevelFromJSON(object: any): PostgresqlConfig13_LogLevel;
export declare function postgresqlConfig13_LogLevelToJSON(object: PostgresqlConfig13_LogLevel): string;
export declare enum PostgresqlConfig13_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_LogErrorVerbosityFromJSON(object: any): PostgresqlConfig13_LogErrorVerbosity;
export declare function postgresqlConfig13_LogErrorVerbosityToJSON(object: PostgresqlConfig13_LogErrorVerbosity): string;
export declare enum PostgresqlConfig13_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_LogStatementFromJSON(object: any): PostgresqlConfig13_LogStatement;
export declare function postgresqlConfig13_LogStatementToJSON(object: PostgresqlConfig13_LogStatement): string;
export declare enum PostgresqlConfig13_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_TransactionIsolationFromJSON(object: any): PostgresqlConfig13_TransactionIsolation;
export declare function postgresqlConfig13_TransactionIsolationToJSON(object: PostgresqlConfig13_TransactionIsolation): string;
export declare enum PostgresqlConfig13_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_ByteaOutputFromJSON(object: any): PostgresqlConfig13_ByteaOutput;
export declare function postgresqlConfig13_ByteaOutputToJSON(object: PostgresqlConfig13_ByteaOutput): string;
export declare enum PostgresqlConfig13_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_XmlBinaryFromJSON(object: any): PostgresqlConfig13_XmlBinary;
export declare function postgresqlConfig13_XmlBinaryToJSON(object: PostgresqlConfig13_XmlBinary): string;
export declare enum PostgresqlConfig13_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_XmlOptionFromJSON(object: any): PostgresqlConfig13_XmlOption;
export declare function postgresqlConfig13_XmlOptionToJSON(object: PostgresqlConfig13_XmlOption): string;
export declare enum PostgresqlConfig13_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_BackslashQuoteFromJSON(object: any): PostgresqlConfig13_BackslashQuote;
export declare function postgresqlConfig13_BackslashQuoteToJSON(object: PostgresqlConfig13_BackslashQuote): string;
export declare enum PostgresqlConfig13_PlanCacheMode {
    PLAN_CACHE_MODE_UNSPECIFIED = 0,
    PLAN_CACHE_MODE_AUTO = 1,
    PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN = 2,
    PLAN_CACHE_MODE_FORCE_GENERIC_PLAN = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_PlanCacheModeFromJSON(object: any): PostgresqlConfig13_PlanCacheMode;
export declare function postgresqlConfig13_PlanCacheModeToJSON(object: PostgresqlConfig13_PlanCacheMode): string;
export declare enum PostgresqlConfig13_PgHintPlanDebugPrint {
    PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED = 0,
    PG_HINT_PLAN_DEBUG_PRINT_OFF = 1,
    PG_HINT_PLAN_DEBUG_PRINT_ON = 2,
    PG_HINT_PLAN_DEBUG_PRINT_DETAILED = 3,
    PG_HINT_PLAN_DEBUG_PRINT_VERBOSE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_PgHintPlanDebugPrintFromJSON(object: any): PostgresqlConfig13_PgHintPlanDebugPrint;
export declare function postgresqlConfig13_PgHintPlanDebugPrintToJSON(object: PostgresqlConfig13_PgHintPlanDebugPrint): string;
export declare enum PostgresqlConfig13_SharedPreloadLibraries {
    SHARED_PRELOAD_LIBRARIES_UNSPECIFIED = 0,
    SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN = 1,
    SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig13_SharedPreloadLibrariesFromJSON(object: any): PostgresqlConfig13_SharedPreloadLibraries;
export declare function postgresqlConfig13_SharedPreloadLibrariesToJSON(object: PostgresqlConfig13_SharedPreloadLibraries): string;
export interface PostgresqlConfigSet13 {
    $type: 'yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet13';
    /**
     * Effective settings for a PostgreSQL 13 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: PostgresqlConfig13 | undefined;
    /** User-defined settings for a PostgreSQL 13 cluster. */
    userConfig: PostgresqlConfig13 | undefined;
    /** Default configuration for a PostgreSQL 13 cluster. */
    defaultConfig: PostgresqlConfig13 | undefined;
}
export declare const PostgresqlConfig13: {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig13";
    encode(message: PostgresqlConfig13, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresqlConfig13;
    fromJSON(object: any): PostgresqlConfig13;
    toJSON(message: PostgresqlConfig13): unknown;
    fromPartial(object: DeepPartial<PostgresqlConfig13>): PostgresqlConfig13;
};
export declare const PostgresqlConfigSet13: {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet13";
    encode(message: PostgresqlConfigSet13, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresqlConfigSet13;
    fromJSON(object: any): PostgresqlConfigSet13;
    toJSON(message: PostgresqlConfigSet13): unknown;
    fromPartial(object: DeepPartial<PostgresqlConfigSet13>): PostgresqlConfigSet13;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
