import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlHostConfig` reflects parameters of a PostgreSQL
 * configuration file. Detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/9.6/runtime-config.html).
 */
export interface Postgresqlhostconfig96 {
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
    constraintExclusion: Postgresqlhostconfig96_ConstraintExclusion;
    cursorTupleFraction: number | undefined;
    fromCollapseLimit: number | undefined;
    joinCollapseLimit: number | undefined;
    forceParallelMode: Postgresqlhostconfig96_ForceParallelMode;
    clientMinMessages: Postgresqlhostconfig96_LogLevel;
    logMinMessages: Postgresqlhostconfig96_LogLevel;
    logMinErrorStatement: Postgresqlhostconfig96_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement: number | undefined;
    logCheckpoints: boolean | undefined;
    logConnections: boolean | undefined;
    logDisconnections: boolean | undefined;
    logDuration: boolean | undefined;
    logErrorVerbosity: Postgresqlhostconfig96_LogErrorVerbosity;
    logLockWaits: boolean | undefined;
    logStatement: Postgresqlhostconfig96_LogStatement;
    logTempFiles: number | undefined;
    searchPath: string;
    rowSecurity: boolean | undefined;
    defaultTransactionIsolation: Postgresqlhostconfig96_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout: number | undefined;
    /** in milliseconds. */
    lockTimeout: number | undefined;
    /** in milliseconds. */
    idleInTransactionSessionTimeout: number | undefined;
    byteaOutput: Postgresqlhostconfig96_ByteaOutput;
    xmlbinary: Postgresqlhostconfig96_XmlBinary;
    xmloption: Postgresqlhostconfig96_XmlOption;
    /** in bytes. */
    ginPendingListLimit: number | undefined;
    /** in milliseconds. */
    deadlockTimeout: number | undefined;
    maxLocksPerTransaction: number | undefined;
    maxPredLocksPerTransaction: number | undefined;
    arrayNulls: boolean | undefined;
    backslashQuote: Postgresqlhostconfig96_BackslashQuote;
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
    effectiveIoConcurrency: number | undefined;
    effectiveCacheSize: number | undefined;
}
export declare enum Postgresqlhostconfig96_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig96_ConstraintExclusionFromJSON(object: any): Postgresqlhostconfig96_ConstraintExclusion;
export declare function postgresqlhostconfig96_ConstraintExclusionToJSON(object: Postgresqlhostconfig96_ConstraintExclusion): string;
export declare enum Postgresqlhostconfig96_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig96_ForceParallelModeFromJSON(object: any): Postgresqlhostconfig96_ForceParallelMode;
export declare function postgresqlhostconfig96_ForceParallelModeToJSON(object: Postgresqlhostconfig96_ForceParallelMode): string;
export declare enum Postgresqlhostconfig96_LogLevel {
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
export declare function postgresqlhostconfig96_LogLevelFromJSON(object: any): Postgresqlhostconfig96_LogLevel;
export declare function postgresqlhostconfig96_LogLevelToJSON(object: Postgresqlhostconfig96_LogLevel): string;
export declare enum Postgresqlhostconfig96_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig96_LogErrorVerbosityFromJSON(object: any): Postgresqlhostconfig96_LogErrorVerbosity;
export declare function postgresqlhostconfig96_LogErrorVerbosityToJSON(object: Postgresqlhostconfig96_LogErrorVerbosity): string;
export declare enum Postgresqlhostconfig96_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig96_LogStatementFromJSON(object: any): Postgresqlhostconfig96_LogStatement;
export declare function postgresqlhostconfig96_LogStatementToJSON(object: Postgresqlhostconfig96_LogStatement): string;
export declare enum Postgresqlhostconfig96_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig96_TransactionIsolationFromJSON(object: any): Postgresqlhostconfig96_TransactionIsolation;
export declare function postgresqlhostconfig96_TransactionIsolationToJSON(object: Postgresqlhostconfig96_TransactionIsolation): string;
export declare enum Postgresqlhostconfig96_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig96_ByteaOutputFromJSON(object: any): Postgresqlhostconfig96_ByteaOutput;
export declare function postgresqlhostconfig96_ByteaOutputToJSON(object: Postgresqlhostconfig96_ByteaOutput): string;
export declare enum Postgresqlhostconfig96_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig96_XmlBinaryFromJSON(object: any): Postgresqlhostconfig96_XmlBinary;
export declare function postgresqlhostconfig96_XmlBinaryToJSON(object: Postgresqlhostconfig96_XmlBinary): string;
export declare enum Postgresqlhostconfig96_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig96_XmlOptionFromJSON(object: any): Postgresqlhostconfig96_XmlOption;
export declare function postgresqlhostconfig96_XmlOptionToJSON(object: Postgresqlhostconfig96_XmlOption): string;
export declare enum Postgresqlhostconfig96_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlhostconfig96_BackslashQuoteFromJSON(object: any): Postgresqlhostconfig96_BackslashQuote;
export declare function postgresqlhostconfig96_BackslashQuoteToJSON(object: Postgresqlhostconfig96_BackslashQuote): string;
export declare const Postgresqlhostconfig96: {
    encode(message: Postgresqlhostconfig96, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Postgresqlhostconfig96;
    fromJSON(object: any): Postgresqlhostconfig96;
    toJSON(message: Postgresqlhostconfig96): unknown;
    fromPartial(object: DeepPartial<Postgresqlhostconfig96>): Postgresqlhostconfig96;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
