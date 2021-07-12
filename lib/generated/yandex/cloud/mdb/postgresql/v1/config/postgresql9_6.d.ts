import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters whose detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/9.6/static/runtime-config).
 */
export interface Postgresqlconfig96 {
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
    walLevel: Postgresqlconfig96_WalLevel;
    synchronousCommit: Postgresqlconfig96_SynchronousCommit;
    /** in milliseconds. */
    checkpointTimeout: number | undefined;
    /** Acceptable values are 0.0 to 1.0, inclusive. */
    checkpointCompletionTarget: number | undefined;
    checkpointFlushAfter: number | undefined;
    /** in bytes. */
    maxWalSize: number | undefined;
    /** in bytes. */
    minWalSize: number | undefined;
    /** in milliseconds. */
    maxStandbyStreamingDelay: number | undefined;
    defaultStatisticsTarget: number | undefined;
    constraintExclusion: Postgresqlconfig96_ConstraintExclusion;
    cursorTupleFraction: number | undefined;
    fromCollapseLimit: number | undefined;
    joinCollapseLimit: number | undefined;
    forceParallelMode: Postgresqlconfig96_ForceParallelMode;
    clientMinMessages: Postgresqlconfig96_LogLevel;
    logMinMessages: Postgresqlconfig96_LogLevel;
    logMinErrorStatement: Postgresqlconfig96_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement: number | undefined;
    logCheckpoints: boolean | undefined;
    logConnections: boolean | undefined;
    logDisconnections: boolean | undefined;
    logDuration: boolean | undefined;
    logErrorVerbosity: Postgresqlconfig96_LogErrorVerbosity;
    logLockWaits: boolean | undefined;
    logStatement: Postgresqlconfig96_LogStatement;
    logTempFiles: number | undefined;
    searchPath: string;
    rowSecurity: boolean | undefined;
    defaultTransactionIsolation: Postgresqlconfig96_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout: number | undefined;
    /** in milliseconds. */
    lockTimeout: number | undefined;
    /** in milliseconds. */
    idleInTransactionSessionTimeout: number | undefined;
    byteaOutput: Postgresqlconfig96_ByteaOutput;
    xmlbinary: Postgresqlconfig96_XmlBinary;
    xmloption: Postgresqlconfig96_XmlOption;
    /** in bytes. */
    ginPendingListLimit: number | undefined;
    /** in milliseconds. */
    deadlockTimeout: number | undefined;
    maxLocksPerTransaction: number | undefined;
    maxPredLocksPerTransaction: number | undefined;
    arrayNulls: boolean | undefined;
    backslashQuote: Postgresqlconfig96_BackslashQuote;
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
    /** This option has been removed in PostgreSQL 10. */
    sqlInheritance: boolean | undefined;
    autovacuumMaxWorkers: number | undefined;
    autovacuumVacuumCostDelay: number | undefined;
    autovacuumVacuumCostLimit: number | undefined;
    /** in milliseconds. */
    autovacuumNaptime: number | undefined;
    /** in milliseconds. */
    archiveTimeout: number | undefined;
    trackActivityQuerySize: number | undefined;
    effectiveIoConcurrency: number | undefined;
    effectiveCacheSize: number | undefined;
}
export declare enum Postgresqlconfig96_WalLevel {
    WAL_LEVEL_UNSPECIFIED = 0,
    WAL_LEVEL_REPLICA = 1,
    WAL_LEVEL_LOGICAL = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_WalLevelFromJSON(object: any): Postgresqlconfig96_WalLevel;
export declare function postgresqlconfig96_WalLevelToJSON(object: Postgresqlconfig96_WalLevel): string;
export declare enum Postgresqlconfig96_SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    SYNCHRONOUS_COMMIT_ON = 1,
    SYNCHRONOUS_COMMIT_OFF = 2,
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_SynchronousCommitFromJSON(object: any): Postgresqlconfig96_SynchronousCommit;
export declare function postgresqlconfig96_SynchronousCommitToJSON(object: Postgresqlconfig96_SynchronousCommit): string;
export declare enum Postgresqlconfig96_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_ConstraintExclusionFromJSON(object: any): Postgresqlconfig96_ConstraintExclusion;
export declare function postgresqlconfig96_ConstraintExclusionToJSON(object: Postgresqlconfig96_ConstraintExclusion): string;
export declare enum Postgresqlconfig96_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_ForceParallelModeFromJSON(object: any): Postgresqlconfig96_ForceParallelMode;
export declare function postgresqlconfig96_ForceParallelModeToJSON(object: Postgresqlconfig96_ForceParallelMode): string;
export declare enum Postgresqlconfig96_LogLevel {
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
export declare function postgresqlconfig96_LogLevelFromJSON(object: any): Postgresqlconfig96_LogLevel;
export declare function postgresqlconfig96_LogLevelToJSON(object: Postgresqlconfig96_LogLevel): string;
export declare enum Postgresqlconfig96_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_LogErrorVerbosityFromJSON(object: any): Postgresqlconfig96_LogErrorVerbosity;
export declare function postgresqlconfig96_LogErrorVerbosityToJSON(object: Postgresqlconfig96_LogErrorVerbosity): string;
export declare enum Postgresqlconfig96_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_LogStatementFromJSON(object: any): Postgresqlconfig96_LogStatement;
export declare function postgresqlconfig96_LogStatementToJSON(object: Postgresqlconfig96_LogStatement): string;
export declare enum Postgresqlconfig96_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_TransactionIsolationFromJSON(object: any): Postgresqlconfig96_TransactionIsolation;
export declare function postgresqlconfig96_TransactionIsolationToJSON(object: Postgresqlconfig96_TransactionIsolation): string;
export declare enum Postgresqlconfig96_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_ByteaOutputFromJSON(object: any): Postgresqlconfig96_ByteaOutput;
export declare function postgresqlconfig96_ByteaOutputToJSON(object: Postgresqlconfig96_ByteaOutput): string;
export declare enum Postgresqlconfig96_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_XmlBinaryFromJSON(object: any): Postgresqlconfig96_XmlBinary;
export declare function postgresqlconfig96_XmlBinaryToJSON(object: Postgresqlconfig96_XmlBinary): string;
export declare enum Postgresqlconfig96_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_XmlOptionFromJSON(object: any): Postgresqlconfig96_XmlOption;
export declare function postgresqlconfig96_XmlOptionToJSON(object: Postgresqlconfig96_XmlOption): string;
export declare enum Postgresqlconfig96_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlconfig96_BackslashQuoteFromJSON(object: any): Postgresqlconfig96_BackslashQuote;
export declare function postgresqlconfig96_BackslashQuoteToJSON(object: Postgresqlconfig96_BackslashQuote): string;
export interface Postgresqlconfigset96 {
    /**
     * Effective settings for a PostgreSQL 9.6 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Postgresqlconfig96 | undefined;
    /** User-defined settings for a PostgreSQL 9.6 cluster. */
    userConfig: Postgresqlconfig96 | undefined;
    /** Default configuration for a PostgreSQL 9.6 cluster. */
    defaultConfig: Postgresqlconfig96 | undefined;
}
export declare const Postgresqlconfig96: {
    encode(message: Postgresqlconfig96, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Postgresqlconfig96;
    fromJSON(object: any): Postgresqlconfig96;
    toJSON(message: Postgresqlconfig96): unknown;
    fromPartial(object: DeepPartial<Postgresqlconfig96>): Postgresqlconfig96;
};
export declare const Postgresqlconfigset96: {
    encode(message: Postgresqlconfigset96, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Postgresqlconfigset96;
    fromJSON(object: any): Postgresqlconfigset96;
    toJSON(message: Postgresqlconfigset96): unknown;
    fromPartial(object: DeepPartial<Postgresqlconfigset96>): Postgresqlconfigset96;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
