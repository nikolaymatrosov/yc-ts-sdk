/* eslint-disable */
import {
    Int64Value,
    DoubleValue,
    BoolValue,
} from '../../../../../../google/protobuf/wrappers';
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.postgresql.v1.config';

/**
 * Options and structure of `PostgresqlHostConfig` reflects parameters of a PostgreSQL
 * configuration file. Detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/9.6/runtime-config.html).
 */
export interface Postgresqlhostconfig96 {
    $type: 'yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig9_6';
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

export enum Postgresqlhostconfig96_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlhostconfig96_ConstraintExclusionFromJSON(
    object: any
): Postgresqlhostconfig96_ConstraintExclusion {
    switch (object) {
        case 0:
        case 'CONSTRAINT_EXCLUSION_UNSPECIFIED':
            return Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case 'CONSTRAINT_EXCLUSION_ON':
            return Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case 'CONSTRAINT_EXCLUSION_OFF':
            return Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case 'CONSTRAINT_EXCLUSION_PARTITION':
            return Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlhostconfig96_ConstraintExclusion.UNRECOGNIZED;
    }
}

export function postgresqlhostconfig96_ConstraintExclusionToJSON(
    object: Postgresqlhostconfig96_ConstraintExclusion
): string {
    switch (object) {
        case Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return 'CONSTRAINT_EXCLUSION_UNSPECIFIED';
        case Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return 'CONSTRAINT_EXCLUSION_ON';
        case Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return 'CONSTRAINT_EXCLUSION_OFF';
        case Postgresqlhostconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return 'CONSTRAINT_EXCLUSION_PARTITION';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlhostconfig96_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlhostconfig96_ForceParallelModeFromJSON(
    object: any
): Postgresqlhostconfig96_ForceParallelMode {
    switch (object) {
        case 0:
        case 'FORCE_PARALLEL_MODE_UNSPECIFIED':
            return Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case 'FORCE_PARALLEL_MODE_ON':
            return Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case 'FORCE_PARALLEL_MODE_OFF':
            return Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case 'FORCE_PARALLEL_MODE_REGRESS':
            return Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlhostconfig96_ForceParallelMode.UNRECOGNIZED;
    }
}

export function postgresqlhostconfig96_ForceParallelModeToJSON(
    object: Postgresqlhostconfig96_ForceParallelMode
): string {
    switch (object) {
        case Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return 'FORCE_PARALLEL_MODE_UNSPECIFIED';
        case Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return 'FORCE_PARALLEL_MODE_ON';
        case Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return 'FORCE_PARALLEL_MODE_OFF';
        case Postgresqlhostconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return 'FORCE_PARALLEL_MODE_REGRESS';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlhostconfig96_LogLevel {
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
    UNRECOGNIZED = -1,
}

export function postgresqlhostconfig96_LogLevelFromJSON(
    object: any
): Postgresqlhostconfig96_LogLevel {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_UNSPECIFIED':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case 'LOG_LEVEL_DEBUG5':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case 'LOG_LEVEL_DEBUG4':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case 'LOG_LEVEL_DEBUG3':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case 'LOG_LEVEL_DEBUG2':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case 'LOG_LEVEL_DEBUG1':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case 'LOG_LEVEL_LOG':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case 'LOG_LEVEL_NOTICE':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case 'LOG_LEVEL_WARNING':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case 'LOG_LEVEL_ERROR':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case 'LOG_LEVEL_FATAL':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case 'LOG_LEVEL_PANIC':
            return Postgresqlhostconfig96_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlhostconfig96_LogLevel.UNRECOGNIZED;
    }
}

export function postgresqlhostconfig96_LogLevelToJSON(
    object: Postgresqlhostconfig96_LogLevel
): string {
    switch (object) {
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return 'LOG_LEVEL_UNSPECIFIED';
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG5:
            return 'LOG_LEVEL_DEBUG5';
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG4:
            return 'LOG_LEVEL_DEBUG4';
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG3:
            return 'LOG_LEVEL_DEBUG3';
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG2:
            return 'LOG_LEVEL_DEBUG2';
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_DEBUG1:
            return 'LOG_LEVEL_DEBUG1';
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_LOG:
            return 'LOG_LEVEL_LOG';
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_NOTICE:
            return 'LOG_LEVEL_NOTICE';
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_WARNING:
            return 'LOG_LEVEL_WARNING';
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_ERROR:
            return 'LOG_LEVEL_ERROR';
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_FATAL:
            return 'LOG_LEVEL_FATAL';
        case Postgresqlhostconfig96_LogLevel.LOG_LEVEL_PANIC:
            return 'LOG_LEVEL_PANIC';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlhostconfig96_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlhostconfig96_LogErrorVerbosityFromJSON(
    object: any
): Postgresqlhostconfig96_LogErrorVerbosity {
    switch (object) {
        case 0:
        case 'LOG_ERROR_VERBOSITY_UNSPECIFIED':
            return Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case 'LOG_ERROR_VERBOSITY_TERSE':
            return Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case 'LOG_ERROR_VERBOSITY_DEFAULT':
            return Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case 'LOG_ERROR_VERBOSITY_VERBOSE':
            return Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlhostconfig96_LogErrorVerbosity.UNRECOGNIZED;
    }
}

export function postgresqlhostconfig96_LogErrorVerbosityToJSON(
    object: Postgresqlhostconfig96_LogErrorVerbosity
): string {
    switch (object) {
        case Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return 'LOG_ERROR_VERBOSITY_UNSPECIFIED';
        case Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return 'LOG_ERROR_VERBOSITY_TERSE';
        case Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return 'LOG_ERROR_VERBOSITY_DEFAULT';
        case Postgresqlhostconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return 'LOG_ERROR_VERBOSITY_VERBOSE';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlhostconfig96_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlhostconfig96_LogStatementFromJSON(
    object: any
): Postgresqlhostconfig96_LogStatement {
    switch (object) {
        case 0:
        case 'LOG_STATEMENT_UNSPECIFIED':
            return Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case 'LOG_STATEMENT_NONE':
            return Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case 'LOG_STATEMENT_DDL':
            return Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case 'LOG_STATEMENT_MOD':
            return Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case 'LOG_STATEMENT_ALL':
            return Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlhostconfig96_LogStatement.UNRECOGNIZED;
    }
}

export function postgresqlhostconfig96_LogStatementToJSON(
    object: Postgresqlhostconfig96_LogStatement
): string {
    switch (object) {
        case Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return 'LOG_STATEMENT_UNSPECIFIED';
        case Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_NONE:
            return 'LOG_STATEMENT_NONE';
        case Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_DDL:
            return 'LOG_STATEMENT_DDL';
        case Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_MOD:
            return 'LOG_STATEMENT_MOD';
        case Postgresqlhostconfig96_LogStatement.LOG_STATEMENT_ALL:
            return 'LOG_STATEMENT_ALL';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlhostconfig96_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlhostconfig96_TransactionIsolationFromJSON(
    object: any
): Postgresqlhostconfig96_TransactionIsolation {
    switch (object) {
        case 0:
        case 'TRANSACTION_ISOLATION_UNSPECIFIED':
            return Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case 'TRANSACTION_ISOLATION_READ_UNCOMMITTED':
            return Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case 'TRANSACTION_ISOLATION_READ_COMMITTED':
            return Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case 'TRANSACTION_ISOLATION_REPEATABLE_READ':
            return Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case 'TRANSACTION_ISOLATION_SERIALIZABLE':
            return Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlhostconfig96_TransactionIsolation.UNRECOGNIZED;
    }
}

export function postgresqlhostconfig96_TransactionIsolationToJSON(
    object: Postgresqlhostconfig96_TransactionIsolation
): string {
    switch (object) {
        case Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return 'TRANSACTION_ISOLATION_UNSPECIFIED';
        case Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return 'TRANSACTION_ISOLATION_READ_UNCOMMITTED';
        case Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return 'TRANSACTION_ISOLATION_READ_COMMITTED';
        case Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return 'TRANSACTION_ISOLATION_REPEATABLE_READ';
        case Postgresqlhostconfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return 'TRANSACTION_ISOLATION_SERIALIZABLE';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlhostconfig96_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlhostconfig96_ByteaOutputFromJSON(
    object: any
): Postgresqlhostconfig96_ByteaOutput {
    switch (object) {
        case 0:
        case 'BYTEA_OUTPUT_UNSPECIFIED':
            return Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case 'BYTEA_OUTPUT_HEX':
            return Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case 'BYTEA_OUTPUT_ESCAPED':
            return Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlhostconfig96_ByteaOutput.UNRECOGNIZED;
    }
}

export function postgresqlhostconfig96_ByteaOutputToJSON(
    object: Postgresqlhostconfig96_ByteaOutput
): string {
    switch (object) {
        case Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return 'BYTEA_OUTPUT_UNSPECIFIED';
        case Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_HEX:
            return 'BYTEA_OUTPUT_HEX';
        case Postgresqlhostconfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return 'BYTEA_OUTPUT_ESCAPED';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlhostconfig96_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlhostconfig96_XmlBinaryFromJSON(
    object: any
): Postgresqlhostconfig96_XmlBinary {
    switch (object) {
        case 0:
        case 'XML_BINARY_UNSPECIFIED':
            return Postgresqlhostconfig96_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case 'XML_BINARY_BASE64':
            return Postgresqlhostconfig96_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case 'XML_BINARY_HEX':
            return Postgresqlhostconfig96_XmlBinary.XML_BINARY_HEX;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlhostconfig96_XmlBinary.UNRECOGNIZED;
    }
}

export function postgresqlhostconfig96_XmlBinaryToJSON(
    object: Postgresqlhostconfig96_XmlBinary
): string {
    switch (object) {
        case Postgresqlhostconfig96_XmlBinary.XML_BINARY_UNSPECIFIED:
            return 'XML_BINARY_UNSPECIFIED';
        case Postgresqlhostconfig96_XmlBinary.XML_BINARY_BASE64:
            return 'XML_BINARY_BASE64';
        case Postgresqlhostconfig96_XmlBinary.XML_BINARY_HEX:
            return 'XML_BINARY_HEX';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlhostconfig96_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlhostconfig96_XmlOptionFromJSON(
    object: any
): Postgresqlhostconfig96_XmlOption {
    switch (object) {
        case 0:
        case 'XML_OPTION_UNSPECIFIED':
            return Postgresqlhostconfig96_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case 'XML_OPTION_DOCUMENT':
            return Postgresqlhostconfig96_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case 'XML_OPTION_CONTENT':
            return Postgresqlhostconfig96_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlhostconfig96_XmlOption.UNRECOGNIZED;
    }
}

export function postgresqlhostconfig96_XmlOptionToJSON(
    object: Postgresqlhostconfig96_XmlOption
): string {
    switch (object) {
        case Postgresqlhostconfig96_XmlOption.XML_OPTION_UNSPECIFIED:
            return 'XML_OPTION_UNSPECIFIED';
        case Postgresqlhostconfig96_XmlOption.XML_OPTION_DOCUMENT:
            return 'XML_OPTION_DOCUMENT';
        case Postgresqlhostconfig96_XmlOption.XML_OPTION_CONTENT:
            return 'XML_OPTION_CONTENT';
        default:
            return 'UNKNOWN';
    }
}

export enum Postgresqlhostconfig96_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlhostconfig96_BackslashQuoteFromJSON(
    object: any
): Postgresqlhostconfig96_BackslashQuote {
    switch (object) {
        case 0:
        case 'BACKSLASH_QUOTE_UNSPECIFIED':
            return Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case 'BACKSLASH_QUOTE':
            return Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case 'BACKSLASH_QUOTE_ON':
            return Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case 'BACKSLASH_QUOTE_OFF':
            return Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case 'BACKSLASH_QUOTE_SAFE_ENCODING':
            return Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlhostconfig96_BackslashQuote.UNRECOGNIZED;
    }
}

export function postgresqlhostconfig96_BackslashQuoteToJSON(
    object: Postgresqlhostconfig96_BackslashQuote
): string {
    switch (object) {
        case Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return 'BACKSLASH_QUOTE_UNSPECIFIED';
        case Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE:
            return 'BACKSLASH_QUOTE';
        case Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_ON:
            return 'BACKSLASH_QUOTE_ON';
        case Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return 'BACKSLASH_QUOTE_OFF';
        case Postgresqlhostconfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return 'BACKSLASH_QUOTE_SAFE_ENCODING';
        default:
            return 'UNKNOWN';
    }
}

const basePostgresqlhostconfig96: object = {
    $type: 'yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig9_6',
    constraintExclusion: 0,
    forceParallelMode: 0,
    clientMinMessages: 0,
    logMinMessages: 0,
    logMinErrorStatement: 0,
    logErrorVerbosity: 0,
    logStatement: 0,
    searchPath: '',
    defaultTransactionIsolation: 0,
    byteaOutput: 0,
    xmlbinary: 0,
    xmloption: 0,
    backslashQuote: 0,
};

export const Postgresqlhostconfig96 = {
    $type: 'yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig9_6' as const,

    encode(
        message: Postgresqlhostconfig96,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.recoveryMinApplyDelay !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.recoveryMinApplyDelay!,
                },
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.sharedBuffers !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.sharedBuffers!,
                },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.tempBuffers !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.tempBuffers!,
                },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.workMem !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.workMem!,
                },
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.replacementSortTuples !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.replacementSortTuples!,
                },
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.tempFileLimit !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.tempFileLimit!,
                },
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.backendFlushAfter !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.backendFlushAfter!,
                },
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.oldSnapshotThreshold !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.oldSnapshotThreshold!,
                },
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.maxStandbyStreamingDelay !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxStandbyStreamingDelay!,
                },
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.constraintExclusion !== 0) {
            writer.uint32(80).int32(message.constraintExclusion);
        }
        if (message.cursorTupleFraction !== undefined) {
            DoubleValue.encode(
                {
                    $type: 'google.protobuf.DoubleValue',
                    value: message.cursorTupleFraction!,
                },
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.fromCollapseLimit !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.fromCollapseLimit!,
                },
                writer.uint32(98).fork()
            ).ldelim();
        }
        if (message.joinCollapseLimit !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.joinCollapseLimit!,
                },
                writer.uint32(106).fork()
            ).ldelim();
        }
        if (message.forceParallelMode !== 0) {
            writer.uint32(112).int32(message.forceParallelMode);
        }
        if (message.clientMinMessages !== 0) {
            writer.uint32(120).int32(message.clientMinMessages);
        }
        if (message.logMinMessages !== 0) {
            writer.uint32(128).int32(message.logMinMessages);
        }
        if (message.logMinErrorStatement !== 0) {
            writer.uint32(136).int32(message.logMinErrorStatement);
        }
        if (message.logMinDurationStatement !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.logMinDurationStatement!,
                },
                writer.uint32(146).fork()
            ).ldelim();
        }
        if (message.logCheckpoints !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.logCheckpoints!,
                },
                writer.uint32(154).fork()
            ).ldelim();
        }
        if (message.logConnections !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.logConnections!,
                },
                writer.uint32(162).fork()
            ).ldelim();
        }
        if (message.logDisconnections !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.logDisconnections!,
                },
                writer.uint32(170).fork()
            ).ldelim();
        }
        if (message.logDuration !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.logDuration!,
                },
                writer.uint32(178).fork()
            ).ldelim();
        }
        if (message.logErrorVerbosity !== 0) {
            writer.uint32(184).int32(message.logErrorVerbosity);
        }
        if (message.logLockWaits !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.logLockWaits!,
                },
                writer.uint32(194).fork()
            ).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(200).int32(message.logStatement);
        }
        if (message.logTempFiles !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.logTempFiles!,
                },
                writer.uint32(210).fork()
            ).ldelim();
        }
        if (message.searchPath !== '') {
            writer.uint32(218).string(message.searchPath);
        }
        if (message.rowSecurity !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.rowSecurity!,
                },
                writer.uint32(226).fork()
            ).ldelim();
        }
        if (message.defaultTransactionIsolation !== 0) {
            writer.uint32(232).int32(message.defaultTransactionIsolation);
        }
        if (message.statementTimeout !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.statementTimeout!,
                },
                writer.uint32(242).fork()
            ).ldelim();
        }
        if (message.lockTimeout !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.lockTimeout!,
                },
                writer.uint32(250).fork()
            ).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.idleInTransactionSessionTimeout!,
                },
                writer.uint32(258).fork()
            ).ldelim();
        }
        if (message.byteaOutput !== 0) {
            writer.uint32(264).int32(message.byteaOutput);
        }
        if (message.xmlbinary !== 0) {
            writer.uint32(272).int32(message.xmlbinary);
        }
        if (message.xmloption !== 0) {
            writer.uint32(280).int32(message.xmloption);
        }
        if (message.ginPendingListLimit !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.ginPendingListLimit!,
                },
                writer.uint32(290).fork()
            ).ldelim();
        }
        if (message.deadlockTimeout !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.deadlockTimeout!,
                },
                writer.uint32(298).fork()
            ).ldelim();
        }
        if (message.maxLocksPerTransaction !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxLocksPerTransaction!,
                },
                writer.uint32(306).fork()
            ).ldelim();
        }
        if (message.maxPredLocksPerTransaction !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxPredLocksPerTransaction!,
                },
                writer.uint32(314).fork()
            ).ldelim();
        }
        if (message.arrayNulls !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.arrayNulls!,
                },
                writer.uint32(322).fork()
            ).ldelim();
        }
        if (message.backslashQuote !== 0) {
            writer.uint32(328).int32(message.backslashQuote);
        }
        if (message.defaultWithOids !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.defaultWithOids!,
                },
                writer.uint32(338).fork()
            ).ldelim();
        }
        if (message.escapeStringWarning !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.escapeStringWarning!,
                },
                writer.uint32(346).fork()
            ).ldelim();
        }
        if (message.loCompatPrivileges !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.loCompatPrivileges!,
                },
                writer.uint32(354).fork()
            ).ldelim();
        }
        if (message.operatorPrecedenceWarning !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.operatorPrecedenceWarning!,
                },
                writer.uint32(362).fork()
            ).ldelim();
        }
        if (message.quoteAllIdentifiers !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.quoteAllIdentifiers!,
                },
                writer.uint32(370).fork()
            ).ldelim();
        }
        if (message.standardConformingStrings !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.standardConformingStrings!,
                },
                writer.uint32(378).fork()
            ).ldelim();
        }
        if (message.synchronizeSeqscans !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.synchronizeSeqscans!,
                },
                writer.uint32(386).fork()
            ).ldelim();
        }
        if (message.transformNullEquals !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.transformNullEquals!,
                },
                writer.uint32(394).fork()
            ).ldelim();
        }
        if (message.exitOnError !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.exitOnError!,
                },
                writer.uint32(402).fork()
            ).ldelim();
        }
        if (message.seqPageCost !== undefined) {
            DoubleValue.encode(
                {
                    $type: 'google.protobuf.DoubleValue',
                    value: message.seqPageCost!,
                },
                writer.uint32(410).fork()
            ).ldelim();
        }
        if (message.randomPageCost !== undefined) {
            DoubleValue.encode(
                {
                    $type: 'google.protobuf.DoubleValue',
                    value: message.randomPageCost!,
                },
                writer.uint32(418).fork()
            ).ldelim();
        }
        if (message.sqlInheritance !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.sqlInheritance!,
                },
                writer.uint32(426).fork()
            ).ldelim();
        }
        if (message.effectiveIoConcurrency !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.effectiveIoConcurrency!,
                },
                writer.uint32(434).fork()
            ).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.effectiveCacheSize!,
                },
                writer.uint32(442).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Postgresqlhostconfig96 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePostgresqlhostconfig96,
        } as Postgresqlhostconfig96;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recoveryMinApplyDelay = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 2:
                    message.sharedBuffers = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.tempBuffers = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 4:
                    message.workMem = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 5:
                    message.replacementSortTuples = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 6:
                    message.tempFileLimit = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 7:
                    message.backendFlushAfter = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 8:
                    message.oldSnapshotThreshold = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 9:
                    message.maxStandbyStreamingDelay = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 10:
                    message.constraintExclusion = reader.int32() as any;
                    break;
                case 11:
                    message.cursorTupleFraction = DoubleValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 12:
                    message.fromCollapseLimit = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 13:
                    message.joinCollapseLimit = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 14:
                    message.forceParallelMode = reader.int32() as any;
                    break;
                case 15:
                    message.clientMinMessages = reader.int32() as any;
                    break;
                case 16:
                    message.logMinMessages = reader.int32() as any;
                    break;
                case 17:
                    message.logMinErrorStatement = reader.int32() as any;
                    break;
                case 18:
                    message.logMinDurationStatement = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 19:
                    message.logCheckpoints = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 20:
                    message.logConnections = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 21:
                    message.logDisconnections = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 22:
                    message.logDuration = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 23:
                    message.logErrorVerbosity = reader.int32() as any;
                    break;
                case 24:
                    message.logLockWaits = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 25:
                    message.logStatement = reader.int32() as any;
                    break;
                case 26:
                    message.logTempFiles = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 27:
                    message.searchPath = reader.string();
                    break;
                case 28:
                    message.rowSecurity = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 29:
                    message.defaultTransactionIsolation = reader.int32() as any;
                    break;
                case 30:
                    message.statementTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 31:
                    message.lockTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 32:
                    message.idleInTransactionSessionTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 33:
                    message.byteaOutput = reader.int32() as any;
                    break;
                case 34:
                    message.xmlbinary = reader.int32() as any;
                    break;
                case 35:
                    message.xmloption = reader.int32() as any;
                    break;
                case 36:
                    message.ginPendingListLimit = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 37:
                    message.deadlockTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 38:
                    message.maxLocksPerTransaction = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 39:
                    message.maxPredLocksPerTransaction = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 40:
                    message.arrayNulls = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 41:
                    message.backslashQuote = reader.int32() as any;
                    break;
                case 42:
                    message.defaultWithOids = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 43:
                    message.escapeStringWarning = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 44:
                    message.loCompatPrivileges = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 45:
                    message.operatorPrecedenceWarning = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 46:
                    message.quoteAllIdentifiers = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 47:
                    message.standardConformingStrings = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 48:
                    message.synchronizeSeqscans = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 49:
                    message.transformNullEquals = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 50:
                    message.exitOnError = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 51:
                    message.seqPageCost = DoubleValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 52:
                    message.randomPageCost = DoubleValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 53:
                    message.sqlInheritance = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 54:
                    message.effectiveIoConcurrency = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 55:
                    message.effectiveCacheSize = Int64Value.decode(
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

    fromJSON(object: any): Postgresqlhostconfig96 {
        const message = {
            ...basePostgresqlhostconfig96,
        } as Postgresqlhostconfig96;
        if (
            object.recoveryMinApplyDelay !== undefined &&
            object.recoveryMinApplyDelay !== null
        ) {
            message.recoveryMinApplyDelay = Number(
                object.recoveryMinApplyDelay
            );
        } else {
            message.recoveryMinApplyDelay = undefined;
        }
        if (
            object.sharedBuffers !== undefined &&
            object.sharedBuffers !== null
        ) {
            message.sharedBuffers = Number(object.sharedBuffers);
        } else {
            message.sharedBuffers = undefined;
        }
        if (object.tempBuffers !== undefined && object.tempBuffers !== null) {
            message.tempBuffers = Number(object.tempBuffers);
        } else {
            message.tempBuffers = undefined;
        }
        if (object.workMem !== undefined && object.workMem !== null) {
            message.workMem = Number(object.workMem);
        } else {
            message.workMem = undefined;
        }
        if (
            object.replacementSortTuples !== undefined &&
            object.replacementSortTuples !== null
        ) {
            message.replacementSortTuples = Number(
                object.replacementSortTuples
            );
        } else {
            message.replacementSortTuples = undefined;
        }
        if (
            object.tempFileLimit !== undefined &&
            object.tempFileLimit !== null
        ) {
            message.tempFileLimit = Number(object.tempFileLimit);
        } else {
            message.tempFileLimit = undefined;
        }
        if (
            object.backendFlushAfter !== undefined &&
            object.backendFlushAfter !== null
        ) {
            message.backendFlushAfter = Number(object.backendFlushAfter);
        } else {
            message.backendFlushAfter = undefined;
        }
        if (
            object.oldSnapshotThreshold !== undefined &&
            object.oldSnapshotThreshold !== null
        ) {
            message.oldSnapshotThreshold = Number(object.oldSnapshotThreshold);
        } else {
            message.oldSnapshotThreshold = undefined;
        }
        if (
            object.maxStandbyStreamingDelay !== undefined &&
            object.maxStandbyStreamingDelay !== null
        ) {
            message.maxStandbyStreamingDelay = Number(
                object.maxStandbyStreamingDelay
            );
        } else {
            message.maxStandbyStreamingDelay = undefined;
        }
        if (
            object.constraintExclusion !== undefined &&
            object.constraintExclusion !== null
        ) {
            message.constraintExclusion =
                postgresqlhostconfig96_ConstraintExclusionFromJSON(
                    object.constraintExclusion
                );
        } else {
            message.constraintExclusion = 0;
        }
        if (
            object.cursorTupleFraction !== undefined &&
            object.cursorTupleFraction !== null
        ) {
            message.cursorTupleFraction = Number(object.cursorTupleFraction);
        } else {
            message.cursorTupleFraction = undefined;
        }
        if (
            object.fromCollapseLimit !== undefined &&
            object.fromCollapseLimit !== null
        ) {
            message.fromCollapseLimit = Number(object.fromCollapseLimit);
        } else {
            message.fromCollapseLimit = undefined;
        }
        if (
            object.joinCollapseLimit !== undefined &&
            object.joinCollapseLimit !== null
        ) {
            message.joinCollapseLimit = Number(object.joinCollapseLimit);
        } else {
            message.joinCollapseLimit = undefined;
        }
        if (
            object.forceParallelMode !== undefined &&
            object.forceParallelMode !== null
        ) {
            message.forceParallelMode =
                postgresqlhostconfig96_ForceParallelModeFromJSON(
                    object.forceParallelMode
                );
        } else {
            message.forceParallelMode = 0;
        }
        if (
            object.clientMinMessages !== undefined &&
            object.clientMinMessages !== null
        ) {
            message.clientMinMessages = postgresqlhostconfig96_LogLevelFromJSON(
                object.clientMinMessages
            );
        } else {
            message.clientMinMessages = 0;
        }
        if (
            object.logMinMessages !== undefined &&
            object.logMinMessages !== null
        ) {
            message.logMinMessages = postgresqlhostconfig96_LogLevelFromJSON(
                object.logMinMessages
            );
        } else {
            message.logMinMessages = 0;
        }
        if (
            object.logMinErrorStatement !== undefined &&
            object.logMinErrorStatement !== null
        ) {
            message.logMinErrorStatement =
                postgresqlhostconfig96_LogLevelFromJSON(
                    object.logMinErrorStatement
                );
        } else {
            message.logMinErrorStatement = 0;
        }
        if (
            object.logMinDurationStatement !== undefined &&
            object.logMinDurationStatement !== null
        ) {
            message.logMinDurationStatement = Number(
                object.logMinDurationStatement
            );
        } else {
            message.logMinDurationStatement = undefined;
        }
        if (
            object.logCheckpoints !== undefined &&
            object.logCheckpoints !== null
        ) {
            message.logCheckpoints = Boolean(object.logCheckpoints);
        } else {
            message.logCheckpoints = undefined;
        }
        if (
            object.logConnections !== undefined &&
            object.logConnections !== null
        ) {
            message.logConnections = Boolean(object.logConnections);
        } else {
            message.logConnections = undefined;
        }
        if (
            object.logDisconnections !== undefined &&
            object.logDisconnections !== null
        ) {
            message.logDisconnections = Boolean(object.logDisconnections);
        } else {
            message.logDisconnections = undefined;
        }
        if (object.logDuration !== undefined && object.logDuration !== null) {
            message.logDuration = Boolean(object.logDuration);
        } else {
            message.logDuration = undefined;
        }
        if (
            object.logErrorVerbosity !== undefined &&
            object.logErrorVerbosity !== null
        ) {
            message.logErrorVerbosity =
                postgresqlhostconfig96_LogErrorVerbosityFromJSON(
                    object.logErrorVerbosity
                );
        } else {
            message.logErrorVerbosity = 0;
        }
        if (object.logLockWaits !== undefined && object.logLockWaits !== null) {
            message.logLockWaits = Boolean(object.logLockWaits);
        } else {
            message.logLockWaits = undefined;
        }
        if (object.logStatement !== undefined && object.logStatement !== null) {
            message.logStatement = postgresqlhostconfig96_LogStatementFromJSON(
                object.logStatement
            );
        } else {
            message.logStatement = 0;
        }
        if (object.logTempFiles !== undefined && object.logTempFiles !== null) {
            message.logTempFiles = Number(object.logTempFiles);
        } else {
            message.logTempFiles = undefined;
        }
        if (object.searchPath !== undefined && object.searchPath !== null) {
            message.searchPath = String(object.searchPath);
        } else {
            message.searchPath = '';
        }
        if (object.rowSecurity !== undefined && object.rowSecurity !== null) {
            message.rowSecurity = Boolean(object.rowSecurity);
        } else {
            message.rowSecurity = undefined;
        }
        if (
            object.defaultTransactionIsolation !== undefined &&
            object.defaultTransactionIsolation !== null
        ) {
            message.defaultTransactionIsolation =
                postgresqlhostconfig96_TransactionIsolationFromJSON(
                    object.defaultTransactionIsolation
                );
        } else {
            message.defaultTransactionIsolation = 0;
        }
        if (
            object.statementTimeout !== undefined &&
            object.statementTimeout !== null
        ) {
            message.statementTimeout = Number(object.statementTimeout);
        } else {
            message.statementTimeout = undefined;
        }
        if (object.lockTimeout !== undefined && object.lockTimeout !== null) {
            message.lockTimeout = Number(object.lockTimeout);
        } else {
            message.lockTimeout = undefined;
        }
        if (
            object.idleInTransactionSessionTimeout !== undefined &&
            object.idleInTransactionSessionTimeout !== null
        ) {
            message.idleInTransactionSessionTimeout = Number(
                object.idleInTransactionSessionTimeout
            );
        } else {
            message.idleInTransactionSessionTimeout = undefined;
        }
        if (object.byteaOutput !== undefined && object.byteaOutput !== null) {
            message.byteaOutput = postgresqlhostconfig96_ByteaOutputFromJSON(
                object.byteaOutput
            );
        } else {
            message.byteaOutput = 0;
        }
        if (object.xmlbinary !== undefined && object.xmlbinary !== null) {
            message.xmlbinary = postgresqlhostconfig96_XmlBinaryFromJSON(
                object.xmlbinary
            );
        } else {
            message.xmlbinary = 0;
        }
        if (object.xmloption !== undefined && object.xmloption !== null) {
            message.xmloption = postgresqlhostconfig96_XmlOptionFromJSON(
                object.xmloption
            );
        } else {
            message.xmloption = 0;
        }
        if (
            object.ginPendingListLimit !== undefined &&
            object.ginPendingListLimit !== null
        ) {
            message.ginPendingListLimit = Number(object.ginPendingListLimit);
        } else {
            message.ginPendingListLimit = undefined;
        }
        if (
            object.deadlockTimeout !== undefined &&
            object.deadlockTimeout !== null
        ) {
            message.deadlockTimeout = Number(object.deadlockTimeout);
        } else {
            message.deadlockTimeout = undefined;
        }
        if (
            object.maxLocksPerTransaction !== undefined &&
            object.maxLocksPerTransaction !== null
        ) {
            message.maxLocksPerTransaction = Number(
                object.maxLocksPerTransaction
            );
        } else {
            message.maxLocksPerTransaction = undefined;
        }
        if (
            object.maxPredLocksPerTransaction !== undefined &&
            object.maxPredLocksPerTransaction !== null
        ) {
            message.maxPredLocksPerTransaction = Number(
                object.maxPredLocksPerTransaction
            );
        } else {
            message.maxPredLocksPerTransaction = undefined;
        }
        if (object.arrayNulls !== undefined && object.arrayNulls !== null) {
            message.arrayNulls = Boolean(object.arrayNulls);
        } else {
            message.arrayNulls = undefined;
        }
        if (
            object.backslashQuote !== undefined &&
            object.backslashQuote !== null
        ) {
            message.backslashQuote =
                postgresqlhostconfig96_BackslashQuoteFromJSON(
                    object.backslashQuote
                );
        } else {
            message.backslashQuote = 0;
        }
        if (
            object.defaultWithOids !== undefined &&
            object.defaultWithOids !== null
        ) {
            message.defaultWithOids = Boolean(object.defaultWithOids);
        } else {
            message.defaultWithOids = undefined;
        }
        if (
            object.escapeStringWarning !== undefined &&
            object.escapeStringWarning !== null
        ) {
            message.escapeStringWarning = Boolean(object.escapeStringWarning);
        } else {
            message.escapeStringWarning = undefined;
        }
        if (
            object.loCompatPrivileges !== undefined &&
            object.loCompatPrivileges !== null
        ) {
            message.loCompatPrivileges = Boolean(object.loCompatPrivileges);
        } else {
            message.loCompatPrivileges = undefined;
        }
        if (
            object.operatorPrecedenceWarning !== undefined &&
            object.operatorPrecedenceWarning !== null
        ) {
            message.operatorPrecedenceWarning = Boolean(
                object.operatorPrecedenceWarning
            );
        } else {
            message.operatorPrecedenceWarning = undefined;
        }
        if (
            object.quoteAllIdentifiers !== undefined &&
            object.quoteAllIdentifiers !== null
        ) {
            message.quoteAllIdentifiers = Boolean(object.quoteAllIdentifiers);
        } else {
            message.quoteAllIdentifiers = undefined;
        }
        if (
            object.standardConformingStrings !== undefined &&
            object.standardConformingStrings !== null
        ) {
            message.standardConformingStrings = Boolean(
                object.standardConformingStrings
            );
        } else {
            message.standardConformingStrings = undefined;
        }
        if (
            object.synchronizeSeqscans !== undefined &&
            object.synchronizeSeqscans !== null
        ) {
            message.synchronizeSeqscans = Boolean(object.synchronizeSeqscans);
        } else {
            message.synchronizeSeqscans = undefined;
        }
        if (
            object.transformNullEquals !== undefined &&
            object.transformNullEquals !== null
        ) {
            message.transformNullEquals = Boolean(object.transformNullEquals);
        } else {
            message.transformNullEquals = undefined;
        }
        if (object.exitOnError !== undefined && object.exitOnError !== null) {
            message.exitOnError = Boolean(object.exitOnError);
        } else {
            message.exitOnError = undefined;
        }
        if (object.seqPageCost !== undefined && object.seqPageCost !== null) {
            message.seqPageCost = Number(object.seqPageCost);
        } else {
            message.seqPageCost = undefined;
        }
        if (
            object.randomPageCost !== undefined &&
            object.randomPageCost !== null
        ) {
            message.randomPageCost = Number(object.randomPageCost);
        } else {
            message.randomPageCost = undefined;
        }
        if (
            object.sqlInheritance !== undefined &&
            object.sqlInheritance !== null
        ) {
            message.sqlInheritance = Boolean(object.sqlInheritance);
        } else {
            message.sqlInheritance = undefined;
        }
        if (
            object.effectiveIoConcurrency !== undefined &&
            object.effectiveIoConcurrency !== null
        ) {
            message.effectiveIoConcurrency = Number(
                object.effectiveIoConcurrency
            );
        } else {
            message.effectiveIoConcurrency = undefined;
        }
        if (
            object.effectiveCacheSize !== undefined &&
            object.effectiveCacheSize !== null
        ) {
            message.effectiveCacheSize = Number(object.effectiveCacheSize);
        } else {
            message.effectiveCacheSize = undefined;
        }
        return message;
    },

    toJSON(message: Postgresqlhostconfig96): unknown {
        const obj: any = {};
        message.recoveryMinApplyDelay !== undefined &&
            (obj.recoveryMinApplyDelay = message.recoveryMinApplyDelay);
        message.sharedBuffers !== undefined &&
            (obj.sharedBuffers = message.sharedBuffers);
        message.tempBuffers !== undefined &&
            (obj.tempBuffers = message.tempBuffers);
        message.workMem !== undefined && (obj.workMem = message.workMem);
        message.replacementSortTuples !== undefined &&
            (obj.replacementSortTuples = message.replacementSortTuples);
        message.tempFileLimit !== undefined &&
            (obj.tempFileLimit = message.tempFileLimit);
        message.backendFlushAfter !== undefined &&
            (obj.backendFlushAfter = message.backendFlushAfter);
        message.oldSnapshotThreshold !== undefined &&
            (obj.oldSnapshotThreshold = message.oldSnapshotThreshold);
        message.maxStandbyStreamingDelay !== undefined &&
            (obj.maxStandbyStreamingDelay = message.maxStandbyStreamingDelay);
        message.constraintExclusion !== undefined &&
            (obj.constraintExclusion =
                postgresqlhostconfig96_ConstraintExclusionToJSON(
                    message.constraintExclusion
                ));
        message.cursorTupleFraction !== undefined &&
            (obj.cursorTupleFraction = message.cursorTupleFraction);
        message.fromCollapseLimit !== undefined &&
            (obj.fromCollapseLimit = message.fromCollapseLimit);
        message.joinCollapseLimit !== undefined &&
            (obj.joinCollapseLimit = message.joinCollapseLimit);
        message.forceParallelMode !== undefined &&
            (obj.forceParallelMode =
                postgresqlhostconfig96_ForceParallelModeToJSON(
                    message.forceParallelMode
                ));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlhostconfig96_LogLevelToJSON(
                message.clientMinMessages
            ));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlhostconfig96_LogLevelToJSON(
                message.logMinMessages
            ));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlhostconfig96_LogLevelToJSON(
                message.logMinErrorStatement
            ));
        message.logMinDurationStatement !== undefined &&
            (obj.logMinDurationStatement = message.logMinDurationStatement);
        message.logCheckpoints !== undefined &&
            (obj.logCheckpoints = message.logCheckpoints);
        message.logConnections !== undefined &&
            (obj.logConnections = message.logConnections);
        message.logDisconnections !== undefined &&
            (obj.logDisconnections = message.logDisconnections);
        message.logDuration !== undefined &&
            (obj.logDuration = message.logDuration);
        message.logErrorVerbosity !== undefined &&
            (obj.logErrorVerbosity =
                postgresqlhostconfig96_LogErrorVerbosityToJSON(
                    message.logErrorVerbosity
                ));
        message.logLockWaits !== undefined &&
            (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlhostconfig96_LogStatementToJSON(
                message.logStatement
            ));
        message.logTempFiles !== undefined &&
            (obj.logTempFiles = message.logTempFiles);
        message.searchPath !== undefined &&
            (obj.searchPath = message.searchPath);
        message.rowSecurity !== undefined &&
            (obj.rowSecurity = message.rowSecurity);
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation =
                postgresqlhostconfig96_TransactionIsolationToJSON(
                    message.defaultTransactionIsolation
                ));
        message.statementTimeout !== undefined &&
            (obj.statementTimeout = message.statementTimeout);
        message.lockTimeout !== undefined &&
            (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout =
                message.idleInTransactionSessionTimeout);
        message.byteaOutput !== undefined &&
            (obj.byteaOutput = postgresqlhostconfig96_ByteaOutputToJSON(
                message.byteaOutput
            ));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlhostconfig96_XmlBinaryToJSON(
                message.xmlbinary
            ));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlhostconfig96_XmlOptionToJSON(
                message.xmloption
            ));
        message.ginPendingListLimit !== undefined &&
            (obj.ginPendingListLimit = message.ginPendingListLimit);
        message.deadlockTimeout !== undefined &&
            (obj.deadlockTimeout = message.deadlockTimeout);
        message.maxLocksPerTransaction !== undefined &&
            (obj.maxLocksPerTransaction = message.maxLocksPerTransaction);
        message.maxPredLocksPerTransaction !== undefined &&
            (obj.maxPredLocksPerTransaction =
                message.maxPredLocksPerTransaction);
        message.arrayNulls !== undefined &&
            (obj.arrayNulls = message.arrayNulls);
        message.backslashQuote !== undefined &&
            (obj.backslashQuote = postgresqlhostconfig96_BackslashQuoteToJSON(
                message.backslashQuote
            ));
        message.defaultWithOids !== undefined &&
            (obj.defaultWithOids = message.defaultWithOids);
        message.escapeStringWarning !== undefined &&
            (obj.escapeStringWarning = message.escapeStringWarning);
        message.loCompatPrivileges !== undefined &&
            (obj.loCompatPrivileges = message.loCompatPrivileges);
        message.operatorPrecedenceWarning !== undefined &&
            (obj.operatorPrecedenceWarning = message.operatorPrecedenceWarning);
        message.quoteAllIdentifiers !== undefined &&
            (obj.quoteAllIdentifiers = message.quoteAllIdentifiers);
        message.standardConformingStrings !== undefined &&
            (obj.standardConformingStrings = message.standardConformingStrings);
        message.synchronizeSeqscans !== undefined &&
            (obj.synchronizeSeqscans = message.synchronizeSeqscans);
        message.transformNullEquals !== undefined &&
            (obj.transformNullEquals = message.transformNullEquals);
        message.exitOnError !== undefined &&
            (obj.exitOnError = message.exitOnError);
        message.seqPageCost !== undefined &&
            (obj.seqPageCost = message.seqPageCost);
        message.randomPageCost !== undefined &&
            (obj.randomPageCost = message.randomPageCost);
        message.sqlInheritance !== undefined &&
            (obj.sqlInheritance = message.sqlInheritance);
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Postgresqlhostconfig96>
    ): Postgresqlhostconfig96 {
        const message = {
            ...basePostgresqlhostconfig96,
        } as Postgresqlhostconfig96;
        if (
            object.recoveryMinApplyDelay !== undefined &&
            object.recoveryMinApplyDelay !== null
        ) {
            message.recoveryMinApplyDelay = object.recoveryMinApplyDelay;
        } else {
            message.recoveryMinApplyDelay = undefined;
        }
        if (
            object.sharedBuffers !== undefined &&
            object.sharedBuffers !== null
        ) {
            message.sharedBuffers = object.sharedBuffers;
        } else {
            message.sharedBuffers = undefined;
        }
        if (object.tempBuffers !== undefined && object.tempBuffers !== null) {
            message.tempBuffers = object.tempBuffers;
        } else {
            message.tempBuffers = undefined;
        }
        if (object.workMem !== undefined && object.workMem !== null) {
            message.workMem = object.workMem;
        } else {
            message.workMem = undefined;
        }
        if (
            object.replacementSortTuples !== undefined &&
            object.replacementSortTuples !== null
        ) {
            message.replacementSortTuples = object.replacementSortTuples;
        } else {
            message.replacementSortTuples = undefined;
        }
        if (
            object.tempFileLimit !== undefined &&
            object.tempFileLimit !== null
        ) {
            message.tempFileLimit = object.tempFileLimit;
        } else {
            message.tempFileLimit = undefined;
        }
        if (
            object.backendFlushAfter !== undefined &&
            object.backendFlushAfter !== null
        ) {
            message.backendFlushAfter = object.backendFlushAfter;
        } else {
            message.backendFlushAfter = undefined;
        }
        if (
            object.oldSnapshotThreshold !== undefined &&
            object.oldSnapshotThreshold !== null
        ) {
            message.oldSnapshotThreshold = object.oldSnapshotThreshold;
        } else {
            message.oldSnapshotThreshold = undefined;
        }
        if (
            object.maxStandbyStreamingDelay !== undefined &&
            object.maxStandbyStreamingDelay !== null
        ) {
            message.maxStandbyStreamingDelay = object.maxStandbyStreamingDelay;
        } else {
            message.maxStandbyStreamingDelay = undefined;
        }
        if (
            object.constraintExclusion !== undefined &&
            object.constraintExclusion !== null
        ) {
            message.constraintExclusion = object.constraintExclusion;
        } else {
            message.constraintExclusion = 0;
        }
        if (
            object.cursorTupleFraction !== undefined &&
            object.cursorTupleFraction !== null
        ) {
            message.cursorTupleFraction = object.cursorTupleFraction;
        } else {
            message.cursorTupleFraction = undefined;
        }
        if (
            object.fromCollapseLimit !== undefined &&
            object.fromCollapseLimit !== null
        ) {
            message.fromCollapseLimit = object.fromCollapseLimit;
        } else {
            message.fromCollapseLimit = undefined;
        }
        if (
            object.joinCollapseLimit !== undefined &&
            object.joinCollapseLimit !== null
        ) {
            message.joinCollapseLimit = object.joinCollapseLimit;
        } else {
            message.joinCollapseLimit = undefined;
        }
        if (
            object.forceParallelMode !== undefined &&
            object.forceParallelMode !== null
        ) {
            message.forceParallelMode = object.forceParallelMode;
        } else {
            message.forceParallelMode = 0;
        }
        if (
            object.clientMinMessages !== undefined &&
            object.clientMinMessages !== null
        ) {
            message.clientMinMessages = object.clientMinMessages;
        } else {
            message.clientMinMessages = 0;
        }
        if (
            object.logMinMessages !== undefined &&
            object.logMinMessages !== null
        ) {
            message.logMinMessages = object.logMinMessages;
        } else {
            message.logMinMessages = 0;
        }
        if (
            object.logMinErrorStatement !== undefined &&
            object.logMinErrorStatement !== null
        ) {
            message.logMinErrorStatement = object.logMinErrorStatement;
        } else {
            message.logMinErrorStatement = 0;
        }
        if (
            object.logMinDurationStatement !== undefined &&
            object.logMinDurationStatement !== null
        ) {
            message.logMinDurationStatement = object.logMinDurationStatement;
        } else {
            message.logMinDurationStatement = undefined;
        }
        if (
            object.logCheckpoints !== undefined &&
            object.logCheckpoints !== null
        ) {
            message.logCheckpoints = object.logCheckpoints;
        } else {
            message.logCheckpoints = undefined;
        }
        if (
            object.logConnections !== undefined &&
            object.logConnections !== null
        ) {
            message.logConnections = object.logConnections;
        } else {
            message.logConnections = undefined;
        }
        if (
            object.logDisconnections !== undefined &&
            object.logDisconnections !== null
        ) {
            message.logDisconnections = object.logDisconnections;
        } else {
            message.logDisconnections = undefined;
        }
        if (object.logDuration !== undefined && object.logDuration !== null) {
            message.logDuration = object.logDuration;
        } else {
            message.logDuration = undefined;
        }
        if (
            object.logErrorVerbosity !== undefined &&
            object.logErrorVerbosity !== null
        ) {
            message.logErrorVerbosity = object.logErrorVerbosity;
        } else {
            message.logErrorVerbosity = 0;
        }
        if (object.logLockWaits !== undefined && object.logLockWaits !== null) {
            message.logLockWaits = object.logLockWaits;
        } else {
            message.logLockWaits = undefined;
        }
        if (object.logStatement !== undefined && object.logStatement !== null) {
            message.logStatement = object.logStatement;
        } else {
            message.logStatement = 0;
        }
        if (object.logTempFiles !== undefined && object.logTempFiles !== null) {
            message.logTempFiles = object.logTempFiles;
        } else {
            message.logTempFiles = undefined;
        }
        if (object.searchPath !== undefined && object.searchPath !== null) {
            message.searchPath = object.searchPath;
        } else {
            message.searchPath = '';
        }
        if (object.rowSecurity !== undefined && object.rowSecurity !== null) {
            message.rowSecurity = object.rowSecurity;
        } else {
            message.rowSecurity = undefined;
        }
        if (
            object.defaultTransactionIsolation !== undefined &&
            object.defaultTransactionIsolation !== null
        ) {
            message.defaultTransactionIsolation =
                object.defaultTransactionIsolation;
        } else {
            message.defaultTransactionIsolation = 0;
        }
        if (
            object.statementTimeout !== undefined &&
            object.statementTimeout !== null
        ) {
            message.statementTimeout = object.statementTimeout;
        } else {
            message.statementTimeout = undefined;
        }
        if (object.lockTimeout !== undefined && object.lockTimeout !== null) {
            message.lockTimeout = object.lockTimeout;
        } else {
            message.lockTimeout = undefined;
        }
        if (
            object.idleInTransactionSessionTimeout !== undefined &&
            object.idleInTransactionSessionTimeout !== null
        ) {
            message.idleInTransactionSessionTimeout =
                object.idleInTransactionSessionTimeout;
        } else {
            message.idleInTransactionSessionTimeout = undefined;
        }
        if (object.byteaOutput !== undefined && object.byteaOutput !== null) {
            message.byteaOutput = object.byteaOutput;
        } else {
            message.byteaOutput = 0;
        }
        if (object.xmlbinary !== undefined && object.xmlbinary !== null) {
            message.xmlbinary = object.xmlbinary;
        } else {
            message.xmlbinary = 0;
        }
        if (object.xmloption !== undefined && object.xmloption !== null) {
            message.xmloption = object.xmloption;
        } else {
            message.xmloption = 0;
        }
        if (
            object.ginPendingListLimit !== undefined &&
            object.ginPendingListLimit !== null
        ) {
            message.ginPendingListLimit = object.ginPendingListLimit;
        } else {
            message.ginPendingListLimit = undefined;
        }
        if (
            object.deadlockTimeout !== undefined &&
            object.deadlockTimeout !== null
        ) {
            message.deadlockTimeout = object.deadlockTimeout;
        } else {
            message.deadlockTimeout = undefined;
        }
        if (
            object.maxLocksPerTransaction !== undefined &&
            object.maxLocksPerTransaction !== null
        ) {
            message.maxLocksPerTransaction = object.maxLocksPerTransaction;
        } else {
            message.maxLocksPerTransaction = undefined;
        }
        if (
            object.maxPredLocksPerTransaction !== undefined &&
            object.maxPredLocksPerTransaction !== null
        ) {
            message.maxPredLocksPerTransaction =
                object.maxPredLocksPerTransaction;
        } else {
            message.maxPredLocksPerTransaction = undefined;
        }
        if (object.arrayNulls !== undefined && object.arrayNulls !== null) {
            message.arrayNulls = object.arrayNulls;
        } else {
            message.arrayNulls = undefined;
        }
        if (
            object.backslashQuote !== undefined &&
            object.backslashQuote !== null
        ) {
            message.backslashQuote = object.backslashQuote;
        } else {
            message.backslashQuote = 0;
        }
        if (
            object.defaultWithOids !== undefined &&
            object.defaultWithOids !== null
        ) {
            message.defaultWithOids = object.defaultWithOids;
        } else {
            message.defaultWithOids = undefined;
        }
        if (
            object.escapeStringWarning !== undefined &&
            object.escapeStringWarning !== null
        ) {
            message.escapeStringWarning = object.escapeStringWarning;
        } else {
            message.escapeStringWarning = undefined;
        }
        if (
            object.loCompatPrivileges !== undefined &&
            object.loCompatPrivileges !== null
        ) {
            message.loCompatPrivileges = object.loCompatPrivileges;
        } else {
            message.loCompatPrivileges = undefined;
        }
        if (
            object.operatorPrecedenceWarning !== undefined &&
            object.operatorPrecedenceWarning !== null
        ) {
            message.operatorPrecedenceWarning =
                object.operatorPrecedenceWarning;
        } else {
            message.operatorPrecedenceWarning = undefined;
        }
        if (
            object.quoteAllIdentifiers !== undefined &&
            object.quoteAllIdentifiers !== null
        ) {
            message.quoteAllIdentifiers = object.quoteAllIdentifiers;
        } else {
            message.quoteAllIdentifiers = undefined;
        }
        if (
            object.standardConformingStrings !== undefined &&
            object.standardConformingStrings !== null
        ) {
            message.standardConformingStrings =
                object.standardConformingStrings;
        } else {
            message.standardConformingStrings = undefined;
        }
        if (
            object.synchronizeSeqscans !== undefined &&
            object.synchronizeSeqscans !== null
        ) {
            message.synchronizeSeqscans = object.synchronizeSeqscans;
        } else {
            message.synchronizeSeqscans = undefined;
        }
        if (
            object.transformNullEquals !== undefined &&
            object.transformNullEquals !== null
        ) {
            message.transformNullEquals = object.transformNullEquals;
        } else {
            message.transformNullEquals = undefined;
        }
        if (object.exitOnError !== undefined && object.exitOnError !== null) {
            message.exitOnError = object.exitOnError;
        } else {
            message.exitOnError = undefined;
        }
        if (object.seqPageCost !== undefined && object.seqPageCost !== null) {
            message.seqPageCost = object.seqPageCost;
        } else {
            message.seqPageCost = undefined;
        }
        if (
            object.randomPageCost !== undefined &&
            object.randomPageCost !== null
        ) {
            message.randomPageCost = object.randomPageCost;
        } else {
            message.randomPageCost = undefined;
        }
        if (
            object.sqlInheritance !== undefined &&
            object.sqlInheritance !== null
        ) {
            message.sqlInheritance = object.sqlInheritance;
        } else {
            message.sqlInheritance = undefined;
        }
        if (
            object.effectiveIoConcurrency !== undefined &&
            object.effectiveIoConcurrency !== null
        ) {
            message.effectiveIoConcurrency = object.effectiveIoConcurrency;
        } else {
            message.effectiveIoConcurrency = undefined;
        }
        if (
            object.effectiveCacheSize !== undefined &&
            object.effectiveCacheSize !== null
        ) {
            message.effectiveCacheSize = object.effectiveCacheSize;
        } else {
            message.effectiveCacheSize = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Postgresqlhostconfig96.$type, Postgresqlhostconfig96);

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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
