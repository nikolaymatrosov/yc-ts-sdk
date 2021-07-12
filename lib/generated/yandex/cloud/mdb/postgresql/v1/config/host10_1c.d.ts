import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlHostConfig` reflects PostgreSQL configuration file
 * parameters whose detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/10/runtime-config.html).
 */
export interface Postgresqlhostconfig101c {
    /** in milliseconds. */
    recoveryMinApplyDelay: number | undefined;
    /** in bytes. */
    sharedBuffers: number | undefined;
    /** in bytes. */
    tempBuffers: number | undefined;
    /** in bytes. */
    workMem: number | undefined;
    /** in bytes. */
    replacementSortTuples: number | undefined;
    /** in bytes. */
    tempFileLimit: number | undefined;
    backendFlushAfter: number | undefined;
    oldSnapshotThreshold: number | undefined;
    /** in milliseconds. */
    maxStandbyStreamingDelay: number | undefined;
    constraintExclusion: Postgresqlhostconfig101c_ConstraintExclusion;
    cursorTupleFraction: number | undefined;
    fromCollapseLimit: number | undefined;
    joinCollapseLimit: number | undefined;
    forceParallelMode: Postgresqlhostconfig101c_ForceParallelMode;
    clientMinMessages: Postgresqlhostconfig101c_LogLevel;
    logMinMessages: Postgresqlhostconfig101c_LogLevel;
    logMinErrorStatement: Postgresqlhostconfig101c_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement: number | undefined;
    logCheckpoints: boolean | undefined;
    logConnections: boolean | undefined;
    logDisconnections: boolean | undefined;
    logDuration: boolean | undefined;
    logErrorVerbosity: Postgresqlhostconfig101c_LogErrorVerbosity;
    logLockWaits: boolean | undefined;
    logStatement: Postgresqlhostconfig101c_LogStatement;
    logTempFiles: number | undefined;
    searchPath: string;
    rowSecurity: boolean | undefined;
    defaultTransactionIsolation: Postgresqlhostconfig101c_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout: number | undefined;
    /** in milliseconds. */
    lockTimeout: number | undefined;
    /** in milliseconds. */
    idleInTransactionSessionTimeout: number | undefined;
    byteaOutput: Postgresqlhostconfig101c_ByteaOutput;
    xmlbinary: Postgresqlhostconfig101c_XmlBinary;
    xmloption: Postgresqlhostconfig101c_XmlOption;
    /** in bytes. */
    ginPendingListLimit: number | undefined;
    /** in milliseconds. */
    deadlockTimeout: number | undefined;
    maxLocksPerTransaction: number | undefined;
    maxPredLocksPerTransaction: number | undefined;
    arrayNulls: boolean | undefined;
    backslashQuote: Postgresqlhostconfig101c_BackslashQuote;
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
    maxParallelWorkers: number | undefined;
    maxParallelWorkersPerGather: number | undefined;
    timezone: string;
    effectiveIoConcurrency: number | undefined;
    effectiveCacheSize: number | undefined;
}
export declare enum Postgresqlhostconfig101c_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig101c_ConstraintExclusionFromJSON(object: any): Postgresqlhostconfig101c_ConstraintExclusion;
export declare function postgresqlhostconfig101c_ConstraintExclusionToJSON(object: Postgresqlhostconfig101c_ConstraintExclusion): string;
export declare enum Postgresqlhostconfig101c_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig101c_ForceParallelModeFromJSON(object: any): Postgresqlhostconfig101c_ForceParallelMode;
export declare function postgresqlhostconfig101c_ForceParallelModeToJSON(object: Postgresqlhostconfig101c_ForceParallelMode): string;
export declare enum Postgresqlhostconfig101c_LogLevel {
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
export declare function postgresqlhostconfig101c_LogLevelFromJSON(object: any): Postgresqlhostconfig101c_LogLevel;
export declare function postgresqlhostconfig101c_LogLevelToJSON(object: Postgresqlhostconfig101c_LogLevel): string;
export declare enum Postgresqlhostconfig101c_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig101c_LogErrorVerbosityFromJSON(object: any): Postgresqlhostconfig101c_LogErrorVerbosity;
export declare function postgresqlhostconfig101c_LogErrorVerbosityToJSON(object: Postgresqlhostconfig101c_LogErrorVerbosity): string;
export declare enum Postgresqlhostconfig101c_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig101c_LogStatementFromJSON(object: any): Postgresqlhostconfig101c_LogStatement;
export declare function postgresqlhostconfig101c_LogStatementToJSON(object: Postgresqlhostconfig101c_LogStatement): string;
export declare enum Postgresqlhostconfig101c_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig101c_TransactionIsolationFromJSON(object: any): Postgresqlhostconfig101c_TransactionIsolation;
export declare function postgresqlhostconfig101c_TransactionIsolationToJSON(object: Postgresqlhostconfig101c_TransactionIsolation): string;
export declare enum Postgresqlhostconfig101c_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig101c_ByteaOutputFromJSON(object: any): Postgresqlhostconfig101c_ByteaOutput;
export declare function postgresqlhostconfig101c_ByteaOutputToJSON(object: Postgresqlhostconfig101c_ByteaOutput): string;
export declare enum Postgresqlhostconfig101c_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig101c_XmlBinaryFromJSON(object: any): Postgresqlhostconfig101c_XmlBinary;
export declare function postgresqlhostconfig101c_XmlBinaryToJSON(object: Postgresqlhostconfig101c_XmlBinary): string;
export declare enum Postgresqlhostconfig101c_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig101c_XmlOptionFromJSON(object: any): Postgresqlhostconfig101c_XmlOption;
export declare function postgresqlhostconfig101c_XmlOptionToJSON(object: Postgresqlhostconfig101c_XmlOption): string;
export declare enum Postgresqlhostconfig101c_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig101c_BackslashQuoteFromJSON(object: any): Postgresqlhostconfig101c_BackslashQuote;
export declare function postgresqlhostconfig101c_BackslashQuoteToJSON(object: Postgresqlhostconfig101c_BackslashQuote): string;
export declare const Postgresqlhostconfig101c: {
    encode(message: Postgresqlhostconfig101c, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Postgresqlhostconfig101c;
    fromJSON(object: any): Postgresqlhostconfig101c;
    toJSON(message: Postgresqlhostconfig101c): unknown;
    fromPartial(object: DeepPartial<Postgresqlhostconfig101c>): Postgresqlhostconfig101c;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
