import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1.config";
/**
 * Options and structure of `PostgresqlConfig` reflects PostgreSQL configuration file
 * parameters which detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/11/runtime-config.html).
 */
export interface PostgresqlHostConfig11 {
    /** in milliseconds. */
    recoveryMinApplyDelay: number | undefined;
    /** in bytes. */
    sharedBuffers: number | undefined;
    /** in bytes. */
    tempBuffers: number | undefined;
    /** in bytes. */
    workMem: number | undefined;
    /** in bytes. */
    tempFileLimit: number | undefined;
    backendFlushAfter: number | undefined;
    oldSnapshotThreshold: number | undefined;
    /** in milliseconds. */
    maxStandbyStreamingDelay: number | undefined;
    constraintExclusion: PostgresqlHostConfig11_ConstraintExclusion;
    cursorTupleFraction: number | undefined;
    fromCollapseLimit: number | undefined;
    joinCollapseLimit: number | undefined;
    forceParallelMode: PostgresqlHostConfig11_ForceParallelMode;
    clientMinMessages: PostgresqlHostConfig11_LogLevel;
    logMinMessages: PostgresqlHostConfig11_LogLevel;
    logMinErrorStatement: PostgresqlHostConfig11_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement: number | undefined;
    logCheckpoints: boolean | undefined;
    logConnections: boolean | undefined;
    logDisconnections: boolean | undefined;
    logDuration: boolean | undefined;
    logErrorVerbosity: PostgresqlHostConfig11_LogErrorVerbosity;
    logLockWaits: boolean | undefined;
    logStatement: PostgresqlHostConfig11_LogStatement;
    logTempFiles: number | undefined;
    searchPath: string;
    rowSecurity: boolean | undefined;
    defaultTransactionIsolation: PostgresqlHostConfig11_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout: number | undefined;
    /** in milliseconds. */
    lockTimeout: number | undefined;
    /** in milliseconds. */
    idleInTransactionSessionTimeout: number | undefined;
    byteaOutput: PostgresqlHostConfig11_ByteaOutput;
    xmlbinary: PostgresqlHostConfig11_XmlBinary;
    xmloption: PostgresqlHostConfig11_XmlOption;
    /** in bytes. */
    ginPendingListLimit: number | undefined;
    /** in milliseconds. */
    deadlockTimeout: number | undefined;
    maxLocksPerTransaction: number | undefined;
    maxPredLocksPerTransaction: number | undefined;
    arrayNulls: boolean | undefined;
    backslashQuote: PostgresqlHostConfig11_BackslashQuote;
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
export declare enum PostgresqlHostConfig11_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig11_ConstraintExclusionFromJSON(object: any): PostgresqlHostConfig11_ConstraintExclusion;
export declare function postgresqlHostConfig11_ConstraintExclusionToJSON(object: PostgresqlHostConfig11_ConstraintExclusion): string;
export declare enum PostgresqlHostConfig11_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig11_ForceParallelModeFromJSON(object: any): PostgresqlHostConfig11_ForceParallelMode;
export declare function postgresqlHostConfig11_ForceParallelModeToJSON(object: PostgresqlHostConfig11_ForceParallelMode): string;
export declare enum PostgresqlHostConfig11_LogLevel {
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
export declare function postgresqlHostConfig11_LogLevelFromJSON(object: any): PostgresqlHostConfig11_LogLevel;
export declare function postgresqlHostConfig11_LogLevelToJSON(object: PostgresqlHostConfig11_LogLevel): string;
export declare enum PostgresqlHostConfig11_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig11_LogErrorVerbosityFromJSON(object: any): PostgresqlHostConfig11_LogErrorVerbosity;
export declare function postgresqlHostConfig11_LogErrorVerbosityToJSON(object: PostgresqlHostConfig11_LogErrorVerbosity): string;
export declare enum PostgresqlHostConfig11_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig11_LogStatementFromJSON(object: any): PostgresqlHostConfig11_LogStatement;
export declare function postgresqlHostConfig11_LogStatementToJSON(object: PostgresqlHostConfig11_LogStatement): string;
export declare enum PostgresqlHostConfig11_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig11_TransactionIsolationFromJSON(object: any): PostgresqlHostConfig11_TransactionIsolation;
export declare function postgresqlHostConfig11_TransactionIsolationToJSON(object: PostgresqlHostConfig11_TransactionIsolation): string;
export declare enum PostgresqlHostConfig11_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig11_ByteaOutputFromJSON(object: any): PostgresqlHostConfig11_ByteaOutput;
export declare function postgresqlHostConfig11_ByteaOutputToJSON(object: PostgresqlHostConfig11_ByteaOutput): string;
export declare enum PostgresqlHostConfig11_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig11_XmlBinaryFromJSON(object: any): PostgresqlHostConfig11_XmlBinary;
export declare function postgresqlHostConfig11_XmlBinaryToJSON(object: PostgresqlHostConfig11_XmlBinary): string;
export declare enum PostgresqlHostConfig11_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig11_XmlOptionFromJSON(object: any): PostgresqlHostConfig11_XmlOption;
export declare function postgresqlHostConfig11_XmlOptionToJSON(object: PostgresqlHostConfig11_XmlOption): string;
export declare enum PostgresqlHostConfig11_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1
}
export declare function postgresqlHostConfig11_BackslashQuoteFromJSON(object: any): PostgresqlHostConfig11_BackslashQuote;
export declare function postgresqlHostConfig11_BackslashQuoteToJSON(object: PostgresqlHostConfig11_BackslashQuote): string;
export declare const PostgresqlHostConfig11: {
    encode(message: PostgresqlHostConfig11, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostgresqlHostConfig11;
    fromJSON(object: any): PostgresqlHostConfig11;
    toJSON(message: PostgresqlHostConfig11): unknown;
    fromPartial(object: DeepPartial<PostgresqlHostConfig11>): PostgresqlHostConfig11;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
