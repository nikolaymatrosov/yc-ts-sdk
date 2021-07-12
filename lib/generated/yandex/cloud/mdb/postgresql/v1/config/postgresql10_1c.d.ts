import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters whose detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/10/runtime-config.html).
 */
export interface Postgresqlconfig101c {
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
    replacementSortTuples: number | undefined;
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
    walLevel: Postgresqlconfig101c_WalLevel;
    synchronousCommit: Postgresqlconfig101c_SynchronousCommit;
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
    constraintExclusion: Postgresqlconfig101c_ConstraintExclusion;
    cursorTupleFraction: number | undefined;
    fromCollapseLimit: number | undefined;
    joinCollapseLimit: number | undefined;
    forceParallelMode: Postgresqlconfig101c_ForceParallelMode;
    clientMinMessages: Postgresqlconfig101c_LogLevel;
    logMinMessages: Postgresqlconfig101c_LogLevel;
    logMinErrorStatement: Postgresqlconfig101c_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement: number | undefined;
    logCheckpoints: boolean | undefined;
    logConnections: boolean | undefined;
    logDisconnections: boolean | undefined;
    logDuration: boolean | undefined;
    logErrorVerbosity: Postgresqlconfig101c_LogErrorVerbosity;
    logLockWaits: boolean | undefined;
    logStatement: Postgresqlconfig101c_LogStatement;
    logTempFiles: number | undefined;
    searchPath: string;
    rowSecurity: boolean | undefined;
    defaultTransactionIsolation: Postgresqlconfig101c_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout: number | undefined;
    /** in milliseconds. */
    lockTimeout: number | undefined;
    /** in milliseconds. */
    idleInTransactionSessionTimeout: number | undefined;
    byteaOutput: Postgresqlconfig101c_ByteaOutput;
    xmlbinary: Postgresqlconfig101c_XmlBinary;
    xmloption: Postgresqlconfig101c_XmlOption;
    /** in bytes. */
    ginPendingListLimit: number | undefined;
    /** in milliseconds. */
    deadlockTimeout: number | undefined;
    maxLocksPerTransaction: number | undefined;
    maxPredLocksPerTransaction: number | undefined;
    arrayNulls: boolean | undefined;
    backslashQuote: Postgresqlconfig101c_BackslashQuote;
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
    effectiveIoConcurrency: number | undefined;
    effectiveCacheSize: number | undefined;
    sharedPreloadLibraries: Postgresqlconfig101c_SharedPreloadLibraries[];
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
    pgHintPlanDebugPrint: Postgresqlconfig101c_PgHintPlanDebugPrint;
    pgHintPlanMessageLevel: Postgresqlconfig101c_LogLevel;
    onlineAnalyzeEnable: boolean | undefined;
    plantunerFixEmptyTable: boolean | undefined;
}
export declare enum Postgresqlconfig101c_WalLevel {
    WAL_LEVEL_UNSPECIFIED = 0,
    WAL_LEVEL_REPLICA = 1,
    WAL_LEVEL_LOGICAL = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_WalLevelFromJSON(object: any): Postgresqlconfig101c_WalLevel;
export declare function postgresqlconfig101c_WalLevelToJSON(object: Postgresqlconfig101c_WalLevel): string;
export declare enum Postgresqlconfig101c_SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    SYNCHRONOUS_COMMIT_ON = 1,
    SYNCHRONOUS_COMMIT_OFF = 2,
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_SynchronousCommitFromJSON(object: any): Postgresqlconfig101c_SynchronousCommit;
export declare function postgresqlconfig101c_SynchronousCommitToJSON(object: Postgresqlconfig101c_SynchronousCommit): string;
export declare enum Postgresqlconfig101c_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_ConstraintExclusionFromJSON(object: any): Postgresqlconfig101c_ConstraintExclusion;
export declare function postgresqlconfig101c_ConstraintExclusionToJSON(object: Postgresqlconfig101c_ConstraintExclusion): string;
export declare enum Postgresqlconfig101c_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_ForceParallelModeFromJSON(object: any): Postgresqlconfig101c_ForceParallelMode;
export declare function postgresqlconfig101c_ForceParallelModeToJSON(object: Postgresqlconfig101c_ForceParallelMode): string;
export declare enum Postgresqlconfig101c_LogLevel {
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
export declare function postgresqlconfig101c_LogLevelFromJSON(object: any): Postgresqlconfig101c_LogLevel;
export declare function postgresqlconfig101c_LogLevelToJSON(object: Postgresqlconfig101c_LogLevel): string;
export declare enum Postgresqlconfig101c_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_LogErrorVerbosityFromJSON(object: any): Postgresqlconfig101c_LogErrorVerbosity;
export declare function postgresqlconfig101c_LogErrorVerbosityToJSON(object: Postgresqlconfig101c_LogErrorVerbosity): string;
export declare enum Postgresqlconfig101c_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_LogStatementFromJSON(object: any): Postgresqlconfig101c_LogStatement;
export declare function postgresqlconfig101c_LogStatementToJSON(object: Postgresqlconfig101c_LogStatement): string;
export declare enum Postgresqlconfig101c_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_TransactionIsolationFromJSON(object: any): Postgresqlconfig101c_TransactionIsolation;
export declare function postgresqlconfig101c_TransactionIsolationToJSON(object: Postgresqlconfig101c_TransactionIsolation): string;
export declare enum Postgresqlconfig101c_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_ByteaOutputFromJSON(object: any): Postgresqlconfig101c_ByteaOutput;
export declare function postgresqlconfig101c_ByteaOutputToJSON(object: Postgresqlconfig101c_ByteaOutput): string;
export declare enum Postgresqlconfig101c_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_XmlBinaryFromJSON(object: any): Postgresqlconfig101c_XmlBinary;
export declare function postgresqlconfig101c_XmlBinaryToJSON(object: Postgresqlconfig101c_XmlBinary): string;
export declare enum Postgresqlconfig101c_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_XmlOptionFromJSON(object: any): Postgresqlconfig101c_XmlOption;
export declare function postgresqlconfig101c_XmlOptionToJSON(object: Postgresqlconfig101c_XmlOption): string;
export declare enum Postgresqlconfig101c_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_BackslashQuoteFromJSON(object: any): Postgresqlconfig101c_BackslashQuote;
export declare function postgresqlconfig101c_BackslashQuoteToJSON(object: Postgresqlconfig101c_BackslashQuote): string;
export declare enum Postgresqlconfig101c_PgHintPlanDebugPrint {
    PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED = 0,
    PG_HINT_PLAN_DEBUG_PRINT_OFF = 1,
    PG_HINT_PLAN_DEBUG_PRINT_ON = 2,
    PG_HINT_PLAN_DEBUG_PRINT_DETAILED = 3,
    PG_HINT_PLAN_DEBUG_PRINT_VERBOSE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_PgHintPlanDebugPrintFromJSON(object: any): Postgresqlconfig101c_PgHintPlanDebugPrint;
export declare function postgresqlconfig101c_PgHintPlanDebugPrintToJSON(object: Postgresqlconfig101c_PgHintPlanDebugPrint): string;
export declare enum Postgresqlconfig101c_SharedPreloadLibraries {
    SHARED_PRELOAD_LIBRARIES_UNSPECIFIED = 0,
    SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN = 1,
    SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig101c_SharedPreloadLibrariesFromJSON(object: any): Postgresqlconfig101c_SharedPreloadLibraries;
export declare function postgresqlconfig101c_SharedPreloadLibrariesToJSON(object: Postgresqlconfig101c_SharedPreloadLibraries): string;
export interface Postgresqlconfigset101c {
    /**
     * Effective settings for a PostgreSQL 10 1C cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Postgresqlconfig101c | undefined;
    /** User-defined settings for a PostgreSQL 10 1C cluster. */
    userConfig: Postgresqlconfig101c | undefined;
    /** Default configuration for a PostgreSQL 10 1C cluster. */
    defaultConfig: Postgresqlconfig101c | undefined;
}
export declare const Postgresqlconfig101c: {
    encode(message: Postgresqlconfig101c, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Postgresqlconfig101c;
    fromJSON(object: any): Postgresqlconfig101c;
    toJSON(message: Postgresqlconfig101c): unknown;
    fromPartial(object: DeepPartial<Postgresqlconfig101c>): Postgresqlconfig101c;
};
export declare const Postgresqlconfigset101c: {
    encode(message: Postgresqlconfigset101c, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Postgresqlconfigset101c;
    fromJSON(object: any): Postgresqlconfigset101c;
    toJSON(message: Postgresqlconfigset101c): unknown;
    fromPartial(object: DeepPartial<Postgresqlconfigset101c>): Postgresqlconfigset101c;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
