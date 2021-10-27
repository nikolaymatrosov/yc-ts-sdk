import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters which detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/11/runtime-config.html).
 */
export interface PostgresqlConfig12 {
    $type: 'yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig12';
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
    walLevel: PostgresqlConfig12_WalLevel;
    synchronousCommit: PostgresqlConfig12_SynchronousCommit;
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
    constraintExclusion: PostgresqlConfig12_ConstraintExclusion;
    cursorTupleFraction: number | undefined;
    fromCollapseLimit: number | undefined;
    joinCollapseLimit: number | undefined;
    forceParallelMode: PostgresqlConfig12_ForceParallelMode;
    clientMinMessages: PostgresqlConfig12_LogLevel;
    logMinMessages: PostgresqlConfig12_LogLevel;
    logMinErrorStatement: PostgresqlConfig12_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement: number | undefined;
    logCheckpoints: boolean | undefined;
    logConnections: boolean | undefined;
    logDisconnections: boolean | undefined;
    logDuration: boolean | undefined;
    logErrorVerbosity: PostgresqlConfig12_LogErrorVerbosity;
    logLockWaits: boolean | undefined;
    logStatement: PostgresqlConfig12_LogStatement;
    logTempFiles: number | undefined;
    searchPath: string;
    rowSecurity: boolean | undefined;
    defaultTransactionIsolation: PostgresqlConfig12_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout: number | undefined;
    /** in milliseconds. */
    lockTimeout: number | undefined;
    /** in milliseconds. */
    idleInTransactionSessionTimeout: number | undefined;
    byteaOutput: PostgresqlConfig12_ByteaOutput;
    xmlbinary: PostgresqlConfig12_XmlBinary;
    xmloption: PostgresqlConfig12_XmlOption;
    /** in bytes. */
    ginPendingListLimit: number | undefined;
    /** in milliseconds. */
    deadlockTimeout: number | undefined;
    maxLocksPerTransaction: number | undefined;
    maxPredLocksPerTransaction: number | undefined;
    arrayNulls: boolean | undefined;
    backslashQuote: PostgresqlConfig12_BackslashQuote;
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
    planCacheMode: PostgresqlConfig12_PlanCacheMode;
    effectiveIoConcurrency: number | undefined;
    effectiveCacheSize: number | undefined;
    sharedPreloadLibraries: PostgresqlConfig12_SharedPreloadLibraries[];
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
    pgHintPlanDebugPrint: PostgresqlConfig12_PgHintPlanDebugPrint;
    pgHintPlanMessageLevel: PostgresqlConfig12_LogLevel;
}
export declare enum PostgresqlConfig12_WalLevel {
    WAL_LEVEL_UNSPECIFIED = 0,
    WAL_LEVEL_REPLICA = 1,
    WAL_LEVEL_LOGICAL = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_WalLevelFromJSON(object: any): PostgresqlConfig12_WalLevel;
export declare function postgresqlConfig12_WalLevelToJSON(object: PostgresqlConfig12_WalLevel): string;
export declare enum PostgresqlConfig12_SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    SYNCHRONOUS_COMMIT_ON = 1,
    SYNCHRONOUS_COMMIT_OFF = 2,
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_SynchronousCommitFromJSON(object: any): PostgresqlConfig12_SynchronousCommit;
export declare function postgresqlConfig12_SynchronousCommitToJSON(object: PostgresqlConfig12_SynchronousCommit): string;
export declare enum PostgresqlConfig12_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_ConstraintExclusionFromJSON(object: any): PostgresqlConfig12_ConstraintExclusion;
export declare function postgresqlConfig12_ConstraintExclusionToJSON(object: PostgresqlConfig12_ConstraintExclusion): string;
export declare enum PostgresqlConfig12_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_ForceParallelModeFromJSON(object: any): PostgresqlConfig12_ForceParallelMode;
export declare function postgresqlConfig12_ForceParallelModeToJSON(object: PostgresqlConfig12_ForceParallelMode): string;
export declare enum PostgresqlConfig12_LogLevel {
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
export declare function postgresqlConfig12_LogLevelFromJSON(object: any): PostgresqlConfig12_LogLevel;
export declare function postgresqlConfig12_LogLevelToJSON(object: PostgresqlConfig12_LogLevel): string;
export declare enum PostgresqlConfig12_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_LogErrorVerbosityFromJSON(object: any): PostgresqlConfig12_LogErrorVerbosity;
export declare function postgresqlConfig12_LogErrorVerbosityToJSON(object: PostgresqlConfig12_LogErrorVerbosity): string;
export declare enum PostgresqlConfig12_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_LogStatementFromJSON(object: any): PostgresqlConfig12_LogStatement;
export declare function postgresqlConfig12_LogStatementToJSON(object: PostgresqlConfig12_LogStatement): string;
export declare enum PostgresqlConfig12_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_TransactionIsolationFromJSON(object: any): PostgresqlConfig12_TransactionIsolation;
export declare function postgresqlConfig12_TransactionIsolationToJSON(object: PostgresqlConfig12_TransactionIsolation): string;
export declare enum PostgresqlConfig12_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_ByteaOutputFromJSON(object: any): PostgresqlConfig12_ByteaOutput;
export declare function postgresqlConfig12_ByteaOutputToJSON(object: PostgresqlConfig12_ByteaOutput): string;
export declare enum PostgresqlConfig12_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_XmlBinaryFromJSON(object: any): PostgresqlConfig12_XmlBinary;
export declare function postgresqlConfig12_XmlBinaryToJSON(object: PostgresqlConfig12_XmlBinary): string;
export declare enum PostgresqlConfig12_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_XmlOptionFromJSON(object: any): PostgresqlConfig12_XmlOption;
export declare function postgresqlConfig12_XmlOptionToJSON(object: PostgresqlConfig12_XmlOption): string;
export declare enum PostgresqlConfig12_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_BackslashQuoteFromJSON(object: any): PostgresqlConfig12_BackslashQuote;
export declare function postgresqlConfig12_BackslashQuoteToJSON(object: PostgresqlConfig12_BackslashQuote): string;
export declare enum PostgresqlConfig12_PlanCacheMode {
    PLAN_CACHE_MODE_UNSPECIFIED = 0,
    PLAN_CACHE_MODE_AUTO = 1,
    PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN = 2,
    PLAN_CACHE_MODE_FORCE_GENERIC_PLAN = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_PlanCacheModeFromJSON(object: any): PostgresqlConfig12_PlanCacheMode;
export declare function postgresqlConfig12_PlanCacheModeToJSON(object: PostgresqlConfig12_PlanCacheMode): string;
export declare enum PostgresqlConfig12_PgHintPlanDebugPrint {
    PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED = 0,
    PG_HINT_PLAN_DEBUG_PRINT_OFF = 1,
    PG_HINT_PLAN_DEBUG_PRINT_ON = 2,
    PG_HINT_PLAN_DEBUG_PRINT_DETAILED = 3,
    PG_HINT_PLAN_DEBUG_PRINT_VERBOSE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_PgHintPlanDebugPrintFromJSON(object: any): PostgresqlConfig12_PgHintPlanDebugPrint;
export declare function postgresqlConfig12_PgHintPlanDebugPrintToJSON(object: PostgresqlConfig12_PgHintPlanDebugPrint): string;
export declare enum PostgresqlConfig12_SharedPreloadLibraries {
    SHARED_PRELOAD_LIBRARIES_UNSPECIFIED = 0,
    SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN = 1,
    SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig12_SharedPreloadLibrariesFromJSON(object: any): PostgresqlConfig12_SharedPreloadLibraries;
export declare function postgresqlConfig12_SharedPreloadLibrariesToJSON(object: PostgresqlConfig12_SharedPreloadLibraries): string;
export interface PostgresqlConfigSet12 {
    $type: 'yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet12';
    /**
     * Effective settings for a PostgreSQL 12 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: PostgresqlConfig12 | undefined;
    /** User-defined settings for a PostgreSQL 12 cluster. */
    userConfig: PostgresqlConfig12 | undefined;
    /** Default configuration for a PostgreSQL 12 cluster. */
    defaultConfig: PostgresqlConfig12 | undefined;
}
export declare const PostgresqlConfig12: {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfig12";
    encode(message: PostgresqlConfig12, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresqlConfig12;
    fromJSON(object: any): PostgresqlConfig12;
    toJSON(message: PostgresqlConfig12): unknown;
    fromPartial(object: DeepPartial<PostgresqlConfig12>): PostgresqlConfig12;
};
export declare const PostgresqlConfigSet12: {
    $type: "yandex.cloud.mdb.postgresql.v1.config.PostgresqlConfigSet12";
    encode(message: PostgresqlConfigSet12, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresqlConfigSet12;
    fromJSON(object: any): PostgresqlConfigSet12;
    toJSON(message: PostgresqlConfigSet12): unknown;
    fromPartial(object: DeepPartial<PostgresqlConfigSet12>): PostgresqlConfigSet12;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
