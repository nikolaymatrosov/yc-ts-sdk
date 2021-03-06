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
 * Options and structure of `PostgresqlHostConfig` reflects PostgreSQL configuration file
 * parameters whose detailed description is available in
 * [PostgreSQL documentation](https://www.postgresql.org/docs/10/runtime-config.html).
 */
export interface PostgresqlHostConfig10 {
    $type: 'yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10';
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
    constraintExclusion: PostgresqlHostConfig10_ConstraintExclusion;
    cursorTupleFraction: number | undefined;
    fromCollapseLimit: number | undefined;
    joinCollapseLimit: number | undefined;
    forceParallelMode: PostgresqlHostConfig10_ForceParallelMode;
    clientMinMessages: PostgresqlHostConfig10_LogLevel;
    logMinMessages: PostgresqlHostConfig10_LogLevel;
    logMinErrorStatement: PostgresqlHostConfig10_LogLevel;
    /** in milliseconds. */
    logMinDurationStatement: number | undefined;
    logCheckpoints: boolean | undefined;
    logConnections: boolean | undefined;
    logDisconnections: boolean | undefined;
    logDuration: boolean | undefined;
    logErrorVerbosity: PostgresqlHostConfig10_LogErrorVerbosity;
    logLockWaits: boolean | undefined;
    logStatement: PostgresqlHostConfig10_LogStatement;
    logTempFiles: number | undefined;
    searchPath: string;
    rowSecurity: boolean | undefined;
    defaultTransactionIsolation: PostgresqlHostConfig10_TransactionIsolation;
    /** in milliseconds. */
    statementTimeout: number | undefined;
    /** in milliseconds. */
    lockTimeout: number | undefined;
    /** in milliseconds. */
    idleInTransactionSessionTimeout: number | undefined;
    byteaOutput: PostgresqlHostConfig10_ByteaOutput;
    xmlbinary: PostgresqlHostConfig10_XmlBinary;
    xmloption: PostgresqlHostConfig10_XmlOption;
    /** in bytes. */
    ginPendingListLimit: number | undefined;
    /** in milliseconds. */
    deadlockTimeout: number | undefined;
    maxLocksPerTransaction: number | undefined;
    maxPredLocksPerTransaction: number | undefined;
    arrayNulls: boolean | undefined;
    backslashQuote: PostgresqlHostConfig10_BackslashQuote;
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

export enum PostgresqlHostConfig10_ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlHostConfig10_ConstraintExclusionFromJSON(
    object: any
): PostgresqlHostConfig10_ConstraintExclusion {
    switch (object) {
        case 0:
        case 'CONSTRAINT_EXCLUSION_UNSPECIFIED':
            return PostgresqlHostConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case 'CONSTRAINT_EXCLUSION_ON':
            return PostgresqlHostConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case 'CONSTRAINT_EXCLUSION_OFF':
            return PostgresqlHostConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case 'CONSTRAINT_EXCLUSION_PARTITION':
            return PostgresqlHostConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlHostConfig10_ConstraintExclusion.UNRECOGNIZED;
    }
}

export function postgresqlHostConfig10_ConstraintExclusionToJSON(
    object: PostgresqlHostConfig10_ConstraintExclusion
): string {
    switch (object) {
        case PostgresqlHostConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return 'CONSTRAINT_EXCLUSION_UNSPECIFIED';
        case PostgresqlHostConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return 'CONSTRAINT_EXCLUSION_ON';
        case PostgresqlHostConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return 'CONSTRAINT_EXCLUSION_OFF';
        case PostgresqlHostConfig10_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return 'CONSTRAINT_EXCLUSION_PARTITION';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlHostConfig10_ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlHostConfig10_ForceParallelModeFromJSON(
    object: any
): PostgresqlHostConfig10_ForceParallelMode {
    switch (object) {
        case 0:
        case 'FORCE_PARALLEL_MODE_UNSPECIFIED':
            return PostgresqlHostConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case 'FORCE_PARALLEL_MODE_ON':
            return PostgresqlHostConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case 'FORCE_PARALLEL_MODE_OFF':
            return PostgresqlHostConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case 'FORCE_PARALLEL_MODE_REGRESS':
            return PostgresqlHostConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlHostConfig10_ForceParallelMode.UNRECOGNIZED;
    }
}

export function postgresqlHostConfig10_ForceParallelModeToJSON(
    object: PostgresqlHostConfig10_ForceParallelMode
): string {
    switch (object) {
        case PostgresqlHostConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return 'FORCE_PARALLEL_MODE_UNSPECIFIED';
        case PostgresqlHostConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return 'FORCE_PARALLEL_MODE_ON';
        case PostgresqlHostConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return 'FORCE_PARALLEL_MODE_OFF';
        case PostgresqlHostConfig10_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return 'FORCE_PARALLEL_MODE_REGRESS';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlHostConfig10_LogLevel {
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

export function postgresqlHostConfig10_LogLevelFromJSON(
    object: any
): PostgresqlHostConfig10_LogLevel {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_UNSPECIFIED':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case 'LOG_LEVEL_DEBUG5':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case 'LOG_LEVEL_DEBUG4':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case 'LOG_LEVEL_DEBUG3':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case 'LOG_LEVEL_DEBUG2':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case 'LOG_LEVEL_DEBUG1':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case 'LOG_LEVEL_LOG':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case 'LOG_LEVEL_NOTICE':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case 'LOG_LEVEL_WARNING':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case 'LOG_LEVEL_ERROR':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case 'LOG_LEVEL_FATAL':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case 'LOG_LEVEL_PANIC':
            return PostgresqlHostConfig10_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlHostConfig10_LogLevel.UNRECOGNIZED;
    }
}

export function postgresqlHostConfig10_LogLevelToJSON(
    object: PostgresqlHostConfig10_LogLevel
): string {
    switch (object) {
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return 'LOG_LEVEL_UNSPECIFIED';
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_DEBUG5:
            return 'LOG_LEVEL_DEBUG5';
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_DEBUG4:
            return 'LOG_LEVEL_DEBUG4';
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_DEBUG3:
            return 'LOG_LEVEL_DEBUG3';
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_DEBUG2:
            return 'LOG_LEVEL_DEBUG2';
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_DEBUG1:
            return 'LOG_LEVEL_DEBUG1';
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_LOG:
            return 'LOG_LEVEL_LOG';
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_NOTICE:
            return 'LOG_LEVEL_NOTICE';
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_WARNING:
            return 'LOG_LEVEL_WARNING';
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_ERROR:
            return 'LOG_LEVEL_ERROR';
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_FATAL:
            return 'LOG_LEVEL_FATAL';
        case PostgresqlHostConfig10_LogLevel.LOG_LEVEL_PANIC:
            return 'LOG_LEVEL_PANIC';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlHostConfig10_LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    UNRECOGNIZED = -1,
}

export function postgresqlHostConfig10_LogErrorVerbosityFromJSON(
    object: any
): PostgresqlHostConfig10_LogErrorVerbosity {
    switch (object) {
        case 0:
        case 'LOG_ERROR_VERBOSITY_UNSPECIFIED':
            return PostgresqlHostConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case 'LOG_ERROR_VERBOSITY_TERSE':
            return PostgresqlHostConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case 'LOG_ERROR_VERBOSITY_DEFAULT':
            return PostgresqlHostConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case 'LOG_ERROR_VERBOSITY_VERBOSE':
            return PostgresqlHostConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlHostConfig10_LogErrorVerbosity.UNRECOGNIZED;
    }
}

export function postgresqlHostConfig10_LogErrorVerbosityToJSON(
    object: PostgresqlHostConfig10_LogErrorVerbosity
): string {
    switch (object) {
        case PostgresqlHostConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return 'LOG_ERROR_VERBOSITY_UNSPECIFIED';
        case PostgresqlHostConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return 'LOG_ERROR_VERBOSITY_TERSE';
        case PostgresqlHostConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return 'LOG_ERROR_VERBOSITY_DEFAULT';
        case PostgresqlHostConfig10_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return 'LOG_ERROR_VERBOSITY_VERBOSE';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlHostConfig10_LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlHostConfig10_LogStatementFromJSON(
    object: any
): PostgresqlHostConfig10_LogStatement {
    switch (object) {
        case 0:
        case 'LOG_STATEMENT_UNSPECIFIED':
            return PostgresqlHostConfig10_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case 'LOG_STATEMENT_NONE':
            return PostgresqlHostConfig10_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case 'LOG_STATEMENT_DDL':
            return PostgresqlHostConfig10_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case 'LOG_STATEMENT_MOD':
            return PostgresqlHostConfig10_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case 'LOG_STATEMENT_ALL':
            return PostgresqlHostConfig10_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlHostConfig10_LogStatement.UNRECOGNIZED;
    }
}

export function postgresqlHostConfig10_LogStatementToJSON(
    object: PostgresqlHostConfig10_LogStatement
): string {
    switch (object) {
        case PostgresqlHostConfig10_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return 'LOG_STATEMENT_UNSPECIFIED';
        case PostgresqlHostConfig10_LogStatement.LOG_STATEMENT_NONE:
            return 'LOG_STATEMENT_NONE';
        case PostgresqlHostConfig10_LogStatement.LOG_STATEMENT_DDL:
            return 'LOG_STATEMENT_DDL';
        case PostgresqlHostConfig10_LogStatement.LOG_STATEMENT_MOD:
            return 'LOG_STATEMENT_MOD';
        case PostgresqlHostConfig10_LogStatement.LOG_STATEMENT_ALL:
            return 'LOG_STATEMENT_ALL';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlHostConfig10_TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlHostConfig10_TransactionIsolationFromJSON(
    object: any
): PostgresqlHostConfig10_TransactionIsolation {
    switch (object) {
        case 0:
        case 'TRANSACTION_ISOLATION_UNSPECIFIED':
            return PostgresqlHostConfig10_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case 'TRANSACTION_ISOLATION_READ_UNCOMMITTED':
            return PostgresqlHostConfig10_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case 'TRANSACTION_ISOLATION_READ_COMMITTED':
            return PostgresqlHostConfig10_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case 'TRANSACTION_ISOLATION_REPEATABLE_READ':
            return PostgresqlHostConfig10_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case 'TRANSACTION_ISOLATION_SERIALIZABLE':
            return PostgresqlHostConfig10_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlHostConfig10_TransactionIsolation.UNRECOGNIZED;
    }
}

export function postgresqlHostConfig10_TransactionIsolationToJSON(
    object: PostgresqlHostConfig10_TransactionIsolation
): string {
    switch (object) {
        case PostgresqlHostConfig10_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return 'TRANSACTION_ISOLATION_UNSPECIFIED';
        case PostgresqlHostConfig10_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return 'TRANSACTION_ISOLATION_READ_UNCOMMITTED';
        case PostgresqlHostConfig10_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return 'TRANSACTION_ISOLATION_READ_COMMITTED';
        case PostgresqlHostConfig10_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return 'TRANSACTION_ISOLATION_REPEATABLE_READ';
        case PostgresqlHostConfig10_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return 'TRANSACTION_ISOLATION_SERIALIZABLE';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlHostConfig10_ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlHostConfig10_ByteaOutputFromJSON(
    object: any
): PostgresqlHostConfig10_ByteaOutput {
    switch (object) {
        case 0:
        case 'BYTEA_OUTPUT_UNSPECIFIED':
            return PostgresqlHostConfig10_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case 'BYTEA_OUTPUT_HEX':
            return PostgresqlHostConfig10_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case 'BYTEA_OUTPUT_ESCAPED':
            return PostgresqlHostConfig10_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlHostConfig10_ByteaOutput.UNRECOGNIZED;
    }
}

export function postgresqlHostConfig10_ByteaOutputToJSON(
    object: PostgresqlHostConfig10_ByteaOutput
): string {
    switch (object) {
        case PostgresqlHostConfig10_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return 'BYTEA_OUTPUT_UNSPECIFIED';
        case PostgresqlHostConfig10_ByteaOutput.BYTEA_OUTPUT_HEX:
            return 'BYTEA_OUTPUT_HEX';
        case PostgresqlHostConfig10_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return 'BYTEA_OUTPUT_ESCAPED';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlHostConfig10_XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlHostConfig10_XmlBinaryFromJSON(
    object: any
): PostgresqlHostConfig10_XmlBinary {
    switch (object) {
        case 0:
        case 'XML_BINARY_UNSPECIFIED':
            return PostgresqlHostConfig10_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case 'XML_BINARY_BASE64':
            return PostgresqlHostConfig10_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case 'XML_BINARY_HEX':
            return PostgresqlHostConfig10_XmlBinary.XML_BINARY_HEX;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlHostConfig10_XmlBinary.UNRECOGNIZED;
    }
}

export function postgresqlHostConfig10_XmlBinaryToJSON(
    object: PostgresqlHostConfig10_XmlBinary
): string {
    switch (object) {
        case PostgresqlHostConfig10_XmlBinary.XML_BINARY_UNSPECIFIED:
            return 'XML_BINARY_UNSPECIFIED';
        case PostgresqlHostConfig10_XmlBinary.XML_BINARY_BASE64:
            return 'XML_BINARY_BASE64';
        case PostgresqlHostConfig10_XmlBinary.XML_BINARY_HEX:
            return 'XML_BINARY_HEX';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlHostConfig10_XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    UNRECOGNIZED = -1,
}

export function postgresqlHostConfig10_XmlOptionFromJSON(
    object: any
): PostgresqlHostConfig10_XmlOption {
    switch (object) {
        case 0:
        case 'XML_OPTION_UNSPECIFIED':
            return PostgresqlHostConfig10_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case 'XML_OPTION_DOCUMENT':
            return PostgresqlHostConfig10_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case 'XML_OPTION_CONTENT':
            return PostgresqlHostConfig10_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlHostConfig10_XmlOption.UNRECOGNIZED;
    }
}

export function postgresqlHostConfig10_XmlOptionToJSON(
    object: PostgresqlHostConfig10_XmlOption
): string {
    switch (object) {
        case PostgresqlHostConfig10_XmlOption.XML_OPTION_UNSPECIFIED:
            return 'XML_OPTION_UNSPECIFIED';
        case PostgresqlHostConfig10_XmlOption.XML_OPTION_DOCUMENT:
            return 'XML_OPTION_DOCUMENT';
        case PostgresqlHostConfig10_XmlOption.XML_OPTION_CONTENT:
            return 'XML_OPTION_CONTENT';
        default:
            return 'UNKNOWN';
    }
}

export enum PostgresqlHostConfig10_BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    UNRECOGNIZED = -1,
}

export function postgresqlHostConfig10_BackslashQuoteFromJSON(
    object: any
): PostgresqlHostConfig10_BackslashQuote {
    switch (object) {
        case 0:
        case 'BACKSLASH_QUOTE_UNSPECIFIED':
            return PostgresqlHostConfig10_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case 'BACKSLASH_QUOTE':
            return PostgresqlHostConfig10_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case 'BACKSLASH_QUOTE_ON':
            return PostgresqlHostConfig10_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case 'BACKSLASH_QUOTE_OFF':
            return PostgresqlHostConfig10_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case 'BACKSLASH_QUOTE_SAFE_ENCODING':
            return PostgresqlHostConfig10_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlHostConfig10_BackslashQuote.UNRECOGNIZED;
    }
}

export function postgresqlHostConfig10_BackslashQuoteToJSON(
    object: PostgresqlHostConfig10_BackslashQuote
): string {
    switch (object) {
        case PostgresqlHostConfig10_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return 'BACKSLASH_QUOTE_UNSPECIFIED';
        case PostgresqlHostConfig10_BackslashQuote.BACKSLASH_QUOTE:
            return 'BACKSLASH_QUOTE';
        case PostgresqlHostConfig10_BackslashQuote.BACKSLASH_QUOTE_ON:
            return 'BACKSLASH_QUOTE_ON';
        case PostgresqlHostConfig10_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return 'BACKSLASH_QUOTE_OFF';
        case PostgresqlHostConfig10_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return 'BACKSLASH_QUOTE_SAFE_ENCODING';
        default:
            return 'UNKNOWN';
    }
}

const basePostgresqlHostConfig10: object = {
    $type: 'yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10',
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
    timezone: '',
};

export const PostgresqlHostConfig10 = {
    $type: 'yandex.cloud.mdb.postgresql.v1.config.PostgresqlHostConfig10' as const,

    encode(
        message: PostgresqlHostConfig10,
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
        if (message.enableBitmapscan !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.enableBitmapscan!,
                },
                writer.uint32(434).fork()
            ).ldelim();
        }
        if (message.enableHashagg !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.enableHashagg!,
                },
                writer.uint32(442).fork()
            ).ldelim();
        }
        if (message.enableHashjoin !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.enableHashjoin!,
                },
                writer.uint32(450).fork()
            ).ldelim();
        }
        if (message.enableIndexscan !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.enableIndexscan!,
                },
                writer.uint32(458).fork()
            ).ldelim();
        }
        if (message.enableIndexonlyscan !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.enableIndexonlyscan!,
                },
                writer.uint32(466).fork()
            ).ldelim();
        }
        if (message.enableMaterial !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.enableMaterial!,
                },
                writer.uint32(474).fork()
            ).ldelim();
        }
        if (message.enableMergejoin !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.enableMergejoin!,
                },
                writer.uint32(482).fork()
            ).ldelim();
        }
        if (message.enableNestloop !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.enableNestloop!,
                },
                writer.uint32(490).fork()
            ).ldelim();
        }
        if (message.enableSeqscan !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.enableSeqscan!,
                },
                writer.uint32(498).fork()
            ).ldelim();
        }
        if (message.enableSort !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.enableSort!,
                },
                writer.uint32(506).fork()
            ).ldelim();
        }
        if (message.enableTidscan !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.enableTidscan!,
                },
                writer.uint32(514).fork()
            ).ldelim();
        }
        if (message.maxParallelWorkers !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxParallelWorkers!,
                },
                writer.uint32(522).fork()
            ).ldelim();
        }
        if (message.maxParallelWorkersPerGather !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxParallelWorkersPerGather!,
                },
                writer.uint32(530).fork()
            ).ldelim();
        }
        if (message.timezone !== '') {
            writer.uint32(538).string(message.timezone);
        }
        if (message.effectiveIoConcurrency !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.effectiveIoConcurrency!,
                },
                writer.uint32(546).fork()
            ).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.effectiveCacheSize!,
                },
                writer.uint32(554).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PostgresqlHostConfig10 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePostgresqlHostConfig10,
        } as PostgresqlHostConfig10;
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
                case 54:
                    message.enableBitmapscan = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 55:
                    message.enableHashagg = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 56:
                    message.enableHashjoin = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 57:
                    message.enableIndexscan = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 58:
                    message.enableIndexonlyscan = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 59:
                    message.enableMaterial = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 60:
                    message.enableMergejoin = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 61:
                    message.enableNestloop = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 62:
                    message.enableSeqscan = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 63:
                    message.enableSort = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 64:
                    message.enableTidscan = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 65:
                    message.maxParallelWorkers = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 66:
                    message.maxParallelWorkersPerGather = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 67:
                    message.timezone = reader.string();
                    break;
                case 68:
                    message.effectiveIoConcurrency = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 69:
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

    fromJSON(object: any): PostgresqlHostConfig10 {
        const message = {
            ...basePostgresqlHostConfig10,
        } as PostgresqlHostConfig10;
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
                postgresqlHostConfig10_ConstraintExclusionFromJSON(
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
                postgresqlHostConfig10_ForceParallelModeFromJSON(
                    object.forceParallelMode
                );
        } else {
            message.forceParallelMode = 0;
        }
        if (
            object.clientMinMessages !== undefined &&
            object.clientMinMessages !== null
        ) {
            message.clientMinMessages = postgresqlHostConfig10_LogLevelFromJSON(
                object.clientMinMessages
            );
        } else {
            message.clientMinMessages = 0;
        }
        if (
            object.logMinMessages !== undefined &&
            object.logMinMessages !== null
        ) {
            message.logMinMessages = postgresqlHostConfig10_LogLevelFromJSON(
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
                postgresqlHostConfig10_LogLevelFromJSON(
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
                postgresqlHostConfig10_LogErrorVerbosityFromJSON(
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
            message.logStatement = postgresqlHostConfig10_LogStatementFromJSON(
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
                postgresqlHostConfig10_TransactionIsolationFromJSON(
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
            message.byteaOutput = postgresqlHostConfig10_ByteaOutputFromJSON(
                object.byteaOutput
            );
        } else {
            message.byteaOutput = 0;
        }
        if (object.xmlbinary !== undefined && object.xmlbinary !== null) {
            message.xmlbinary = postgresqlHostConfig10_XmlBinaryFromJSON(
                object.xmlbinary
            );
        } else {
            message.xmlbinary = 0;
        }
        if (object.xmloption !== undefined && object.xmloption !== null) {
            message.xmloption = postgresqlHostConfig10_XmlOptionFromJSON(
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
                postgresqlHostConfig10_BackslashQuoteFromJSON(
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
            object.enableBitmapscan !== undefined &&
            object.enableBitmapscan !== null
        ) {
            message.enableBitmapscan = Boolean(object.enableBitmapscan);
        } else {
            message.enableBitmapscan = undefined;
        }
        if (
            object.enableHashagg !== undefined &&
            object.enableHashagg !== null
        ) {
            message.enableHashagg = Boolean(object.enableHashagg);
        } else {
            message.enableHashagg = undefined;
        }
        if (
            object.enableHashjoin !== undefined &&
            object.enableHashjoin !== null
        ) {
            message.enableHashjoin = Boolean(object.enableHashjoin);
        } else {
            message.enableHashjoin = undefined;
        }
        if (
            object.enableIndexscan !== undefined &&
            object.enableIndexscan !== null
        ) {
            message.enableIndexscan = Boolean(object.enableIndexscan);
        } else {
            message.enableIndexscan = undefined;
        }
        if (
            object.enableIndexonlyscan !== undefined &&
            object.enableIndexonlyscan !== null
        ) {
            message.enableIndexonlyscan = Boolean(object.enableIndexonlyscan);
        } else {
            message.enableIndexonlyscan = undefined;
        }
        if (
            object.enableMaterial !== undefined &&
            object.enableMaterial !== null
        ) {
            message.enableMaterial = Boolean(object.enableMaterial);
        } else {
            message.enableMaterial = undefined;
        }
        if (
            object.enableMergejoin !== undefined &&
            object.enableMergejoin !== null
        ) {
            message.enableMergejoin = Boolean(object.enableMergejoin);
        } else {
            message.enableMergejoin = undefined;
        }
        if (
            object.enableNestloop !== undefined &&
            object.enableNestloop !== null
        ) {
            message.enableNestloop = Boolean(object.enableNestloop);
        } else {
            message.enableNestloop = undefined;
        }
        if (
            object.enableSeqscan !== undefined &&
            object.enableSeqscan !== null
        ) {
            message.enableSeqscan = Boolean(object.enableSeqscan);
        } else {
            message.enableSeqscan = undefined;
        }
        if (object.enableSort !== undefined && object.enableSort !== null) {
            message.enableSort = Boolean(object.enableSort);
        } else {
            message.enableSort = undefined;
        }
        if (
            object.enableTidscan !== undefined &&
            object.enableTidscan !== null
        ) {
            message.enableTidscan = Boolean(object.enableTidscan);
        } else {
            message.enableTidscan = undefined;
        }
        if (
            object.maxParallelWorkers !== undefined &&
            object.maxParallelWorkers !== null
        ) {
            message.maxParallelWorkers = Number(object.maxParallelWorkers);
        } else {
            message.maxParallelWorkers = undefined;
        }
        if (
            object.maxParallelWorkersPerGather !== undefined &&
            object.maxParallelWorkersPerGather !== null
        ) {
            message.maxParallelWorkersPerGather = Number(
                object.maxParallelWorkersPerGather
            );
        } else {
            message.maxParallelWorkersPerGather = undefined;
        }
        if (object.timezone !== undefined && object.timezone !== null) {
            message.timezone = String(object.timezone);
        } else {
            message.timezone = '';
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

    toJSON(message: PostgresqlHostConfig10): unknown {
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
                postgresqlHostConfig10_ConstraintExclusionToJSON(
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
                postgresqlHostConfig10_ForceParallelModeToJSON(
                    message.forceParallelMode
                ));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlHostConfig10_LogLevelToJSON(
                message.clientMinMessages
            ));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlHostConfig10_LogLevelToJSON(
                message.logMinMessages
            ));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlHostConfig10_LogLevelToJSON(
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
                postgresqlHostConfig10_LogErrorVerbosityToJSON(
                    message.logErrorVerbosity
                ));
        message.logLockWaits !== undefined &&
            (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlHostConfig10_LogStatementToJSON(
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
                postgresqlHostConfig10_TransactionIsolationToJSON(
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
            (obj.byteaOutput = postgresqlHostConfig10_ByteaOutputToJSON(
                message.byteaOutput
            ));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlHostConfig10_XmlBinaryToJSON(
                message.xmlbinary
            ));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlHostConfig10_XmlOptionToJSON(
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
            (obj.backslashQuote = postgresqlHostConfig10_BackslashQuoteToJSON(
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
        message.enableBitmapscan !== undefined &&
            (obj.enableBitmapscan = message.enableBitmapscan);
        message.enableHashagg !== undefined &&
            (obj.enableHashagg = message.enableHashagg);
        message.enableHashjoin !== undefined &&
            (obj.enableHashjoin = message.enableHashjoin);
        message.enableIndexscan !== undefined &&
            (obj.enableIndexscan = message.enableIndexscan);
        message.enableIndexonlyscan !== undefined &&
            (obj.enableIndexonlyscan = message.enableIndexonlyscan);
        message.enableMaterial !== undefined &&
            (obj.enableMaterial = message.enableMaterial);
        message.enableMergejoin !== undefined &&
            (obj.enableMergejoin = message.enableMergejoin);
        message.enableNestloop !== undefined &&
            (obj.enableNestloop = message.enableNestloop);
        message.enableSeqscan !== undefined &&
            (obj.enableSeqscan = message.enableSeqscan);
        message.enableSort !== undefined &&
            (obj.enableSort = message.enableSort);
        message.enableTidscan !== undefined &&
            (obj.enableTidscan = message.enableTidscan);
        message.maxParallelWorkers !== undefined &&
            (obj.maxParallelWorkers = message.maxParallelWorkers);
        message.maxParallelWorkersPerGather !== undefined &&
            (obj.maxParallelWorkersPerGather =
                message.maxParallelWorkersPerGather);
        message.timezone !== undefined && (obj.timezone = message.timezone);
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        return obj;
    },

    fromPartial(
        object: DeepPartial<PostgresqlHostConfig10>
    ): PostgresqlHostConfig10 {
        const message = {
            ...basePostgresqlHostConfig10,
        } as PostgresqlHostConfig10;
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
            object.enableBitmapscan !== undefined &&
            object.enableBitmapscan !== null
        ) {
            message.enableBitmapscan = object.enableBitmapscan;
        } else {
            message.enableBitmapscan = undefined;
        }
        if (
            object.enableHashagg !== undefined &&
            object.enableHashagg !== null
        ) {
            message.enableHashagg = object.enableHashagg;
        } else {
            message.enableHashagg = undefined;
        }
        if (
            object.enableHashjoin !== undefined &&
            object.enableHashjoin !== null
        ) {
            message.enableHashjoin = object.enableHashjoin;
        } else {
            message.enableHashjoin = undefined;
        }
        if (
            object.enableIndexscan !== undefined &&
            object.enableIndexscan !== null
        ) {
            message.enableIndexscan = object.enableIndexscan;
        } else {
            message.enableIndexscan = undefined;
        }
        if (
            object.enableIndexonlyscan !== undefined &&
            object.enableIndexonlyscan !== null
        ) {
            message.enableIndexonlyscan = object.enableIndexonlyscan;
        } else {
            message.enableIndexonlyscan = undefined;
        }
        if (
            object.enableMaterial !== undefined &&
            object.enableMaterial !== null
        ) {
            message.enableMaterial = object.enableMaterial;
        } else {
            message.enableMaterial = undefined;
        }
        if (
            object.enableMergejoin !== undefined &&
            object.enableMergejoin !== null
        ) {
            message.enableMergejoin = object.enableMergejoin;
        } else {
            message.enableMergejoin = undefined;
        }
        if (
            object.enableNestloop !== undefined &&
            object.enableNestloop !== null
        ) {
            message.enableNestloop = object.enableNestloop;
        } else {
            message.enableNestloop = undefined;
        }
        if (
            object.enableSeqscan !== undefined &&
            object.enableSeqscan !== null
        ) {
            message.enableSeqscan = object.enableSeqscan;
        } else {
            message.enableSeqscan = undefined;
        }
        if (object.enableSort !== undefined && object.enableSort !== null) {
            message.enableSort = object.enableSort;
        } else {
            message.enableSort = undefined;
        }
        if (
            object.enableTidscan !== undefined &&
            object.enableTidscan !== null
        ) {
            message.enableTidscan = object.enableTidscan;
        } else {
            message.enableTidscan = undefined;
        }
        if (
            object.maxParallelWorkers !== undefined &&
            object.maxParallelWorkers !== null
        ) {
            message.maxParallelWorkers = object.maxParallelWorkers;
        } else {
            message.maxParallelWorkers = undefined;
        }
        if (
            object.maxParallelWorkersPerGather !== undefined &&
            object.maxParallelWorkersPerGather !== null
        ) {
            message.maxParallelWorkersPerGather =
                object.maxParallelWorkersPerGather;
        } else {
            message.maxParallelWorkersPerGather = undefined;
        }
        if (object.timezone !== undefined && object.timezone !== null) {
            message.timezone = object.timezone;
        } else {
            message.timezone = '';
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

messageTypeRegistry.set(PostgresqlHostConfig10.$type, PostgresqlHostConfig10);

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
