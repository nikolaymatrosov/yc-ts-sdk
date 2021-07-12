import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters which detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/11/runtime-config.html).
 */
export interface PostgresqlConfig11 {
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
    walLevel: PostgresqlConfig11_WalLevel;
    synchronousCommit: PostgresqlConfig11_SynchronousCommit;
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
    constraintExclusion: PostgresqlConfig11_ConstraintExclusion;
    cursorTupleFraction: number | undefined;
    fromCollapseLimit: number | undefined;
    joinCollapseLimit: number | undefined;
    forceParallelMode: PostgresqlConfig11_ForceParallelMode;
    clientMinMessages: PostgresqlConfig11_LogLevel;
    logMinMessages: PostgresqlConfig11_LogLevel;
    logMinErrorStatement: PostgresqlConfig11_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement: number | undefined;
    logCheckpoints: boolean | undefined;
    logConnections: boolean | undefined;
    logDisconnections: boolean | undefined;
    logDuration: boolean | undefined;
    logErrorVerbosity: PostgresqlConfig11_LogErrorVerbosity;
    logLockWaits: boolean | undefined;
    logStatement: PostgresqlConfig11_LogStatement;
    logTempFiles: number | undefined;
    searchPath: string;
    rowSecurity: boolean | undefined;
    defaultTransactionIsolation: PostgresqlConfig11_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout: number | undefined;
    /** in milliseconds. */
    lockTimeout: number | undefined;
    /** in milliseconds. */
    idleInTransactionSessionTimeout: number | undefined;
    byteaOutput: PostgresqlConfig11_ByteaOutput;
    xmlbinary: PostgresqlConfig11_XmlBinary;
    xmloption: PostgresqlConfig11_XmlOption;
    /** in bytes. */
    ginPendingListLimit: number | undefined;
    /** in milliseconds. */
    deadlockTimeout: number | undefined;
    maxLocksPerTransaction: number | undefined;
    maxPredLocksPerTransaction: number | undefined;
    arrayNulls: boolean | undefined;
    backslashQuote: PostgresqlConfig11_BackslashQuote;
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
    effectiveIoConcurrency: number | undefined;
    effectiveCacheSize: number | undefined;
    sharedPreloadLibraries: PostgresqlConfig11_SharedPreloadLibraries[];
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
    pgHintPlanDebugPrint: PostgresqlConfig11_PgHintPlanDebugPrint;
    pgHintPlanMessageLevel: PostgresqlConfig11_LogLevel;
}
export declare enum PostgresqlConfig11_WalLevel {
    WAL_LEVEL_UNSPECIFIED = 0,
    WAL_LEVEL_REPLICA = 1,
    WAL_LEVEL_LOGICAL = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_WalLevelFromJSON(object: any): PostgresqlConfig11_WalLevel;
export declare function postgresqlConfig11_WalLevelToJSON(object: PostgresqlConfig11_WalLevel): string;
export declare enum PostgresqlConfig11_SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    SYNCHRONOUS_COMMIT_ON = 1,
    SYNCHRONOUS_COMMIT_OFF = 2,
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_SynchronousCommitFromJSON(object: any): PostgresqlConfig11_SynchronousCommit;
export declare function postgresqlConfig11_SynchronousCommitToJSON(object: PostgresqlConfig11_SynchronousCommit): string;
export declare enum PostgresqlConfig11_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_ConstraintExclusionFromJSON(object: any): PostgresqlConfig11_ConstraintExclusion;
export declare function postgresqlConfig11_ConstraintExclusionToJSON(object: PostgresqlConfig11_ConstraintExclusion): string;
export declare enum PostgresqlConfig11_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_ForceParallelModeFromJSON(object: any): PostgresqlConfig11_ForceParallelMode;
export declare function postgresqlConfig11_ForceParallelModeToJSON(object: PostgresqlConfig11_ForceParallelMode): string;
export declare enum PostgresqlConfig11_LogLevel {
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
export declare function postgresqlConfig11_LogLevelFromJSON(object: any): PostgresqlConfig11_LogLevel;
export declare function postgresqlConfig11_LogLevelToJSON(object: PostgresqlConfig11_LogLevel): string;
export declare enum PostgresqlConfig11_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_LogErrorVerbosityFromJSON(object: any): PostgresqlConfig11_LogErrorVerbosity;
export declare function postgresqlConfig11_LogErrorVerbosityToJSON(object: PostgresqlConfig11_LogErrorVerbosity): string;
export declare enum PostgresqlConfig11_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_LogStatementFromJSON(object: any): PostgresqlConfig11_LogStatement;
export declare function postgresqlConfig11_LogStatementToJSON(object: PostgresqlConfig11_LogStatement): string;
export declare enum PostgresqlConfig11_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_TransactionIsolationFromJSON(object: any): PostgresqlConfig11_TransactionIsolation;
export declare function postgresqlConfig11_TransactionIsolationToJSON(object: PostgresqlConfig11_TransactionIsolation): string;
export declare enum PostgresqlConfig11_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_ByteaOutputFromJSON(object: any): PostgresqlConfig11_ByteaOutput;
export declare function postgresqlConfig11_ByteaOutputToJSON(object: PostgresqlConfig11_ByteaOutput): string;
export declare enum PostgresqlConfig11_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_XmlBinaryFromJSON(object: any): PostgresqlConfig11_XmlBinary;
export declare function postgresqlConfig11_XmlBinaryToJSON(object: PostgresqlConfig11_XmlBinary): string;
export declare enum PostgresqlConfig11_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_XmlOptionFromJSON(object: any): PostgresqlConfig11_XmlOption;
export declare function postgresqlConfig11_XmlOptionToJSON(object: PostgresqlConfig11_XmlOption): string;
export declare enum PostgresqlConfig11_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_BackslashQuoteFromJSON(object: any): PostgresqlConfig11_BackslashQuote;
export declare function postgresqlConfig11_BackslashQuoteToJSON(object: PostgresqlConfig11_BackslashQuote): string;
export declare enum PostgresqlConfig11_PgHintPlanDebugPrint {
    PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED = 0,
    PG_HINT_PLAN_DEBUG_PRINT_OFF = 1,
    PG_HINT_PLAN_DEBUG_PRINT_ON = 2,
    PG_HINT_PLAN_DEBUG_PRINT_DETAILED = 3,
    PG_HINT_PLAN_DEBUG_PRINT_VERBOSE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_PgHintPlanDebugPrintFromJSON(object: any): PostgresqlConfig11_PgHintPlanDebugPrint;
export declare function postgresqlConfig11_PgHintPlanDebugPrintToJSON(object: PostgresqlConfig11_PgHintPlanDebugPrint): string;
export declare enum PostgresqlConfig11_SharedPreloadLibraries {
    SHARED_PRELOAD_LIBRARIES_UNSPECIFIED = 0,
    SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN = 1,
    SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlConfig11_SharedPreloadLibrariesFromJSON(object: any): PostgresqlConfig11_SharedPreloadLibraries;
export declare function postgresqlConfig11_SharedPreloadLibrariesToJSON(object: PostgresqlConfig11_SharedPreloadLibraries): string;
export interface PostgresqlConfigSet11 {
    /**
     * Effective settings for a PostgreSQL 11 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: PostgresqlConfig11 | undefined;
    /** User-defined settings for a PostgreSQL 11 cluster. */
    userConfig: PostgresqlConfig11 | undefined;
    /** Default configuration for a PostgreSQL 11 cluster. */
    defaultConfig: PostgresqlConfig11 | undefined;
}
export declare const PostgresqlConfig11: {
    encode(message: PostgresqlConfig11, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresqlConfig11;
    fromJSON(object: any): PostgresqlConfig11;
    toJSON(message: PostgresqlConfig11): unknown;
    fromPartial(object: DeepPartial<PostgresqlConfig11>): PostgresqlConfig11;
};
export declare const PostgresqlConfigSet11: {
    encode(message: PostgresqlConfigSet11, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresqlConfigSet11;
    fromJSON(object: any): PostgresqlConfigSet11;
    toJSON(message: PostgresqlConfigSet11): unknown;
    fromPartial(object: DeepPartial<PostgresqlConfigSet11>): PostgresqlConfigSet11;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
