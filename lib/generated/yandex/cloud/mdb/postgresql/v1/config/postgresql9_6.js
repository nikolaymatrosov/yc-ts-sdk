/* eslint-disable */
import { Int64Value, DoubleValue, BoolValue, } from '../../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.postgresql.v1.config';
export var Postgresqlconfig96_WalLevel;
(function (Postgresqlconfig96_WalLevel) {
    Postgresqlconfig96_WalLevel[Postgresqlconfig96_WalLevel["WAL_LEVEL_UNSPECIFIED"] = 0] = "WAL_LEVEL_UNSPECIFIED";
    Postgresqlconfig96_WalLevel[Postgresqlconfig96_WalLevel["WAL_LEVEL_REPLICA"] = 1] = "WAL_LEVEL_REPLICA";
    Postgresqlconfig96_WalLevel[Postgresqlconfig96_WalLevel["WAL_LEVEL_LOGICAL"] = 2] = "WAL_LEVEL_LOGICAL";
    Postgresqlconfig96_WalLevel[Postgresqlconfig96_WalLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_WalLevel || (Postgresqlconfig96_WalLevel = {}));
export function postgresqlconfig96_WalLevelFromJSON(object) {
    switch (object) {
        case 0:
        case 'WAL_LEVEL_UNSPECIFIED':
            return Postgresqlconfig96_WalLevel.WAL_LEVEL_UNSPECIFIED;
        case 1:
        case 'WAL_LEVEL_REPLICA':
            return Postgresqlconfig96_WalLevel.WAL_LEVEL_REPLICA;
        case 2:
        case 'WAL_LEVEL_LOGICAL':
            return Postgresqlconfig96_WalLevel.WAL_LEVEL_LOGICAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_WalLevel.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_WalLevelToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_WalLevel.WAL_LEVEL_UNSPECIFIED:
            return 'WAL_LEVEL_UNSPECIFIED';
        case Postgresqlconfig96_WalLevel.WAL_LEVEL_REPLICA:
            return 'WAL_LEVEL_REPLICA';
        case Postgresqlconfig96_WalLevel.WAL_LEVEL_LOGICAL:
            return 'WAL_LEVEL_LOGICAL';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig96_SynchronousCommit;
(function (Postgresqlconfig96_SynchronousCommit) {
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_UNSPECIFIED"] = 0] = "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_ON"] = 1] = "SYNCHRONOUS_COMMIT_ON";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_OFF"] = 2] = "SYNCHRONOUS_COMMIT_OFF";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_LOCAL"] = 3] = "SYNCHRONOUS_COMMIT_LOCAL";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_WRITE"] = 4] = "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_APPLY"] = 5] = "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    Postgresqlconfig96_SynchronousCommit[Postgresqlconfig96_SynchronousCommit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_SynchronousCommit || (Postgresqlconfig96_SynchronousCommit = {}));
export function postgresqlconfig96_SynchronousCommitFromJSON(object) {
    switch (object) {
        case 0:
        case 'SYNCHRONOUS_COMMIT_UNSPECIFIED':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
        case 1:
        case 'SYNCHRONOUS_COMMIT_ON':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
        case 2:
        case 'SYNCHRONOUS_COMMIT_OFF':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
        case 3:
        case 'SYNCHRONOUS_COMMIT_LOCAL':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
        case 4:
        case 'SYNCHRONOUS_COMMIT_REMOTE_WRITE':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
        case 5:
        case 'SYNCHRONOUS_COMMIT_REMOTE_APPLY':
            return Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_SynchronousCommit.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_SynchronousCommitToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
            return 'SYNCHRONOUS_COMMIT_UNSPECIFIED';
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
            return 'SYNCHRONOUS_COMMIT_ON';
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
            return 'SYNCHRONOUS_COMMIT_OFF';
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
            return 'SYNCHRONOUS_COMMIT_LOCAL';
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
            return 'SYNCHRONOUS_COMMIT_REMOTE_WRITE';
        case Postgresqlconfig96_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
            return 'SYNCHRONOUS_COMMIT_REMOTE_APPLY';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig96_ConstraintExclusion;
(function (Postgresqlconfig96_ConstraintExclusion) {
    Postgresqlconfig96_ConstraintExclusion[Postgresqlconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_UNSPECIFIED"] = 0] = "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    Postgresqlconfig96_ConstraintExclusion[Postgresqlconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_ON"] = 1] = "CONSTRAINT_EXCLUSION_ON";
    Postgresqlconfig96_ConstraintExclusion[Postgresqlconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_OFF"] = 2] = "CONSTRAINT_EXCLUSION_OFF";
    Postgresqlconfig96_ConstraintExclusion[Postgresqlconfig96_ConstraintExclusion["CONSTRAINT_EXCLUSION_PARTITION"] = 3] = "CONSTRAINT_EXCLUSION_PARTITION";
    Postgresqlconfig96_ConstraintExclusion[Postgresqlconfig96_ConstraintExclusion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_ConstraintExclusion || (Postgresqlconfig96_ConstraintExclusion = {}));
export function postgresqlconfig96_ConstraintExclusionFromJSON(object) {
    switch (object) {
        case 0:
        case 'CONSTRAINT_EXCLUSION_UNSPECIFIED':
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case 'CONSTRAINT_EXCLUSION_ON':
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case 'CONSTRAINT_EXCLUSION_OFF':
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case 'CONSTRAINT_EXCLUSION_PARTITION':
            return Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_ConstraintExclusion.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_ConstraintExclusionToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return 'CONSTRAINT_EXCLUSION_UNSPECIFIED';
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return 'CONSTRAINT_EXCLUSION_ON';
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return 'CONSTRAINT_EXCLUSION_OFF';
        case Postgresqlconfig96_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return 'CONSTRAINT_EXCLUSION_PARTITION';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig96_ForceParallelMode;
(function (Postgresqlconfig96_ForceParallelMode) {
    Postgresqlconfig96_ForceParallelMode[Postgresqlconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_UNSPECIFIED"] = 0] = "FORCE_PARALLEL_MODE_UNSPECIFIED";
    Postgresqlconfig96_ForceParallelMode[Postgresqlconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_ON"] = 1] = "FORCE_PARALLEL_MODE_ON";
    Postgresqlconfig96_ForceParallelMode[Postgresqlconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_OFF"] = 2] = "FORCE_PARALLEL_MODE_OFF";
    Postgresqlconfig96_ForceParallelMode[Postgresqlconfig96_ForceParallelMode["FORCE_PARALLEL_MODE_REGRESS"] = 3] = "FORCE_PARALLEL_MODE_REGRESS";
    Postgresqlconfig96_ForceParallelMode[Postgresqlconfig96_ForceParallelMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_ForceParallelMode || (Postgresqlconfig96_ForceParallelMode = {}));
export function postgresqlconfig96_ForceParallelModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'FORCE_PARALLEL_MODE_UNSPECIFIED':
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case 'FORCE_PARALLEL_MODE_ON':
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case 'FORCE_PARALLEL_MODE_OFF':
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case 'FORCE_PARALLEL_MODE_REGRESS':
            return Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_ForceParallelMode.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_ForceParallelModeToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return 'FORCE_PARALLEL_MODE_UNSPECIFIED';
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return 'FORCE_PARALLEL_MODE_ON';
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return 'FORCE_PARALLEL_MODE_OFF';
        case Postgresqlconfig96_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return 'FORCE_PARALLEL_MODE_REGRESS';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig96_LogLevel;
(function (Postgresqlconfig96_LogLevel) {
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_DEBUG5"] = 1] = "LOG_LEVEL_DEBUG5";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_DEBUG4"] = 2] = "LOG_LEVEL_DEBUG4";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_DEBUG3"] = 3] = "LOG_LEVEL_DEBUG3";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_DEBUG2"] = 4] = "LOG_LEVEL_DEBUG2";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_DEBUG1"] = 5] = "LOG_LEVEL_DEBUG1";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_LOG"] = 6] = "LOG_LEVEL_LOG";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_NOTICE"] = 7] = "LOG_LEVEL_NOTICE";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_WARNING"] = 8] = "LOG_LEVEL_WARNING";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_ERROR"] = 9] = "LOG_LEVEL_ERROR";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_FATAL"] = 10] = "LOG_LEVEL_FATAL";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["LOG_LEVEL_PANIC"] = 11] = "LOG_LEVEL_PANIC";
    Postgresqlconfig96_LogLevel[Postgresqlconfig96_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_LogLevel || (Postgresqlconfig96_LogLevel = {}));
export function postgresqlconfig96_LogLevelFromJSON(object) {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_UNSPECIFIED':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case 'LOG_LEVEL_DEBUG5':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case 'LOG_LEVEL_DEBUG4':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case 'LOG_LEVEL_DEBUG3':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case 'LOG_LEVEL_DEBUG2':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case 'LOG_LEVEL_DEBUG1':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case 'LOG_LEVEL_LOG':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case 'LOG_LEVEL_NOTICE':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case 'LOG_LEVEL_WARNING':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case 'LOG_LEVEL_ERROR':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case 'LOG_LEVEL_FATAL':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case 'LOG_LEVEL_PANIC':
            return Postgresqlconfig96_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_LogLevel.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_LogLevelToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return 'LOG_LEVEL_UNSPECIFIED';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG5:
            return 'LOG_LEVEL_DEBUG5';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG4:
            return 'LOG_LEVEL_DEBUG4';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG3:
            return 'LOG_LEVEL_DEBUG3';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG2:
            return 'LOG_LEVEL_DEBUG2';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_DEBUG1:
            return 'LOG_LEVEL_DEBUG1';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_LOG:
            return 'LOG_LEVEL_LOG';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_NOTICE:
            return 'LOG_LEVEL_NOTICE';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_WARNING:
            return 'LOG_LEVEL_WARNING';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_ERROR:
            return 'LOG_LEVEL_ERROR';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_FATAL:
            return 'LOG_LEVEL_FATAL';
        case Postgresqlconfig96_LogLevel.LOG_LEVEL_PANIC:
            return 'LOG_LEVEL_PANIC';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig96_LogErrorVerbosity;
(function (Postgresqlconfig96_LogErrorVerbosity) {
    Postgresqlconfig96_LogErrorVerbosity[Postgresqlconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_UNSPECIFIED"] = 0] = "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    Postgresqlconfig96_LogErrorVerbosity[Postgresqlconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_TERSE"] = 1] = "LOG_ERROR_VERBOSITY_TERSE";
    Postgresqlconfig96_LogErrorVerbosity[Postgresqlconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_DEFAULT"] = 2] = "LOG_ERROR_VERBOSITY_DEFAULT";
    Postgresqlconfig96_LogErrorVerbosity[Postgresqlconfig96_LogErrorVerbosity["LOG_ERROR_VERBOSITY_VERBOSE"] = 3] = "LOG_ERROR_VERBOSITY_VERBOSE";
    Postgresqlconfig96_LogErrorVerbosity[Postgresqlconfig96_LogErrorVerbosity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_LogErrorVerbosity || (Postgresqlconfig96_LogErrorVerbosity = {}));
export function postgresqlconfig96_LogErrorVerbosityFromJSON(object) {
    switch (object) {
        case 0:
        case 'LOG_ERROR_VERBOSITY_UNSPECIFIED':
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case 'LOG_ERROR_VERBOSITY_TERSE':
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case 'LOG_ERROR_VERBOSITY_DEFAULT':
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case 'LOG_ERROR_VERBOSITY_VERBOSE':
            return Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_LogErrorVerbosity.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_LogErrorVerbosityToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return 'LOG_ERROR_VERBOSITY_UNSPECIFIED';
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return 'LOG_ERROR_VERBOSITY_TERSE';
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return 'LOG_ERROR_VERBOSITY_DEFAULT';
        case Postgresqlconfig96_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return 'LOG_ERROR_VERBOSITY_VERBOSE';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig96_LogStatement;
(function (Postgresqlconfig96_LogStatement) {
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["LOG_STATEMENT_UNSPECIFIED"] = 0] = "LOG_STATEMENT_UNSPECIFIED";
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["LOG_STATEMENT_NONE"] = 1] = "LOG_STATEMENT_NONE";
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["LOG_STATEMENT_DDL"] = 2] = "LOG_STATEMENT_DDL";
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["LOG_STATEMENT_MOD"] = 3] = "LOG_STATEMENT_MOD";
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["LOG_STATEMENT_ALL"] = 4] = "LOG_STATEMENT_ALL";
    Postgresqlconfig96_LogStatement[Postgresqlconfig96_LogStatement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_LogStatement || (Postgresqlconfig96_LogStatement = {}));
export function postgresqlconfig96_LogStatementFromJSON(object) {
    switch (object) {
        case 0:
        case 'LOG_STATEMENT_UNSPECIFIED':
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case 'LOG_STATEMENT_NONE':
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case 'LOG_STATEMENT_DDL':
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case 'LOG_STATEMENT_MOD':
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case 'LOG_STATEMENT_ALL':
            return Postgresqlconfig96_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_LogStatement.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_LogStatementToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return 'LOG_STATEMENT_UNSPECIFIED';
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_NONE:
            return 'LOG_STATEMENT_NONE';
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_DDL:
            return 'LOG_STATEMENT_DDL';
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_MOD:
            return 'LOG_STATEMENT_MOD';
        case Postgresqlconfig96_LogStatement.LOG_STATEMENT_ALL:
            return 'LOG_STATEMENT_ALL';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig96_TransactionIsolation;
(function (Postgresqlconfig96_TransactionIsolation) {
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["TRANSACTION_ISOLATION_READ_UNCOMMITTED"] = 1] = "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["TRANSACTION_ISOLATION_READ_COMMITTED"] = 2] = "TRANSACTION_ISOLATION_READ_COMMITTED";
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["TRANSACTION_ISOLATION_REPEATABLE_READ"] = 3] = "TRANSACTION_ISOLATION_REPEATABLE_READ";
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["TRANSACTION_ISOLATION_SERIALIZABLE"] = 4] = "TRANSACTION_ISOLATION_SERIALIZABLE";
    Postgresqlconfig96_TransactionIsolation[Postgresqlconfig96_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_TransactionIsolation || (Postgresqlconfig96_TransactionIsolation = {}));
export function postgresqlconfig96_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case 'TRANSACTION_ISOLATION_UNSPECIFIED':
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case 'TRANSACTION_ISOLATION_READ_UNCOMMITTED':
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case 'TRANSACTION_ISOLATION_READ_COMMITTED':
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case 'TRANSACTION_ISOLATION_REPEATABLE_READ':
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case 'TRANSACTION_ISOLATION_SERIALIZABLE':
            return Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_TransactionIsolation.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_TransactionIsolationToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return 'TRANSACTION_ISOLATION_UNSPECIFIED';
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return 'TRANSACTION_ISOLATION_READ_UNCOMMITTED';
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return 'TRANSACTION_ISOLATION_READ_COMMITTED';
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return 'TRANSACTION_ISOLATION_REPEATABLE_READ';
        case Postgresqlconfig96_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return 'TRANSACTION_ISOLATION_SERIALIZABLE';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig96_ByteaOutput;
(function (Postgresqlconfig96_ByteaOutput) {
    Postgresqlconfig96_ByteaOutput[Postgresqlconfig96_ByteaOutput["BYTEA_OUTPUT_UNSPECIFIED"] = 0] = "BYTEA_OUTPUT_UNSPECIFIED";
    Postgresqlconfig96_ByteaOutput[Postgresqlconfig96_ByteaOutput["BYTEA_OUTPUT_HEX"] = 1] = "BYTEA_OUTPUT_HEX";
    Postgresqlconfig96_ByteaOutput[Postgresqlconfig96_ByteaOutput["BYTEA_OUTPUT_ESCAPED"] = 2] = "BYTEA_OUTPUT_ESCAPED";
    Postgresqlconfig96_ByteaOutput[Postgresqlconfig96_ByteaOutput["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_ByteaOutput || (Postgresqlconfig96_ByteaOutput = {}));
export function postgresqlconfig96_ByteaOutputFromJSON(object) {
    switch (object) {
        case 0:
        case 'BYTEA_OUTPUT_UNSPECIFIED':
            return Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case 'BYTEA_OUTPUT_HEX':
            return Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case 'BYTEA_OUTPUT_ESCAPED':
            return Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_ByteaOutput.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_ByteaOutputToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return 'BYTEA_OUTPUT_UNSPECIFIED';
        case Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_HEX:
            return 'BYTEA_OUTPUT_HEX';
        case Postgresqlconfig96_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return 'BYTEA_OUTPUT_ESCAPED';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig96_XmlBinary;
(function (Postgresqlconfig96_XmlBinary) {
    Postgresqlconfig96_XmlBinary[Postgresqlconfig96_XmlBinary["XML_BINARY_UNSPECIFIED"] = 0] = "XML_BINARY_UNSPECIFIED";
    Postgresqlconfig96_XmlBinary[Postgresqlconfig96_XmlBinary["XML_BINARY_BASE64"] = 1] = "XML_BINARY_BASE64";
    Postgresqlconfig96_XmlBinary[Postgresqlconfig96_XmlBinary["XML_BINARY_HEX"] = 2] = "XML_BINARY_HEX";
    Postgresqlconfig96_XmlBinary[Postgresqlconfig96_XmlBinary["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_XmlBinary || (Postgresqlconfig96_XmlBinary = {}));
export function postgresqlconfig96_XmlBinaryFromJSON(object) {
    switch (object) {
        case 0:
        case 'XML_BINARY_UNSPECIFIED':
            return Postgresqlconfig96_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case 'XML_BINARY_BASE64':
            return Postgresqlconfig96_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case 'XML_BINARY_HEX':
            return Postgresqlconfig96_XmlBinary.XML_BINARY_HEX;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_XmlBinary.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_XmlBinaryToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_XmlBinary.XML_BINARY_UNSPECIFIED:
            return 'XML_BINARY_UNSPECIFIED';
        case Postgresqlconfig96_XmlBinary.XML_BINARY_BASE64:
            return 'XML_BINARY_BASE64';
        case Postgresqlconfig96_XmlBinary.XML_BINARY_HEX:
            return 'XML_BINARY_HEX';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig96_XmlOption;
(function (Postgresqlconfig96_XmlOption) {
    Postgresqlconfig96_XmlOption[Postgresqlconfig96_XmlOption["XML_OPTION_UNSPECIFIED"] = 0] = "XML_OPTION_UNSPECIFIED";
    Postgresqlconfig96_XmlOption[Postgresqlconfig96_XmlOption["XML_OPTION_DOCUMENT"] = 1] = "XML_OPTION_DOCUMENT";
    Postgresqlconfig96_XmlOption[Postgresqlconfig96_XmlOption["XML_OPTION_CONTENT"] = 2] = "XML_OPTION_CONTENT";
    Postgresqlconfig96_XmlOption[Postgresqlconfig96_XmlOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_XmlOption || (Postgresqlconfig96_XmlOption = {}));
export function postgresqlconfig96_XmlOptionFromJSON(object) {
    switch (object) {
        case 0:
        case 'XML_OPTION_UNSPECIFIED':
            return Postgresqlconfig96_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case 'XML_OPTION_DOCUMENT':
            return Postgresqlconfig96_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case 'XML_OPTION_CONTENT':
            return Postgresqlconfig96_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_XmlOption.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_XmlOptionToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_XmlOption.XML_OPTION_UNSPECIFIED:
            return 'XML_OPTION_UNSPECIFIED';
        case Postgresqlconfig96_XmlOption.XML_OPTION_DOCUMENT:
            return 'XML_OPTION_DOCUMENT';
        case Postgresqlconfig96_XmlOption.XML_OPTION_CONTENT:
            return 'XML_OPTION_CONTENT';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig96_BackslashQuote;
(function (Postgresqlconfig96_BackslashQuote) {
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["BACKSLASH_QUOTE_UNSPECIFIED"] = 0] = "BACKSLASH_QUOTE_UNSPECIFIED";
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["BACKSLASH_QUOTE"] = 1] = "BACKSLASH_QUOTE";
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["BACKSLASH_QUOTE_ON"] = 2] = "BACKSLASH_QUOTE_ON";
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["BACKSLASH_QUOTE_OFF"] = 3] = "BACKSLASH_QUOTE_OFF";
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["BACKSLASH_QUOTE_SAFE_ENCODING"] = 4] = "BACKSLASH_QUOTE_SAFE_ENCODING";
    Postgresqlconfig96_BackslashQuote[Postgresqlconfig96_BackslashQuote["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig96_BackslashQuote || (Postgresqlconfig96_BackslashQuote = {}));
export function postgresqlconfig96_BackslashQuoteFromJSON(object) {
    switch (object) {
        case 0:
        case 'BACKSLASH_QUOTE_UNSPECIFIED':
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case 'BACKSLASH_QUOTE':
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case 'BACKSLASH_QUOTE_ON':
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case 'BACKSLASH_QUOTE_OFF':
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case 'BACKSLASH_QUOTE_SAFE_ENCODING':
            return Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig96_BackslashQuote.UNRECOGNIZED;
    }
}
export function postgresqlconfig96_BackslashQuoteToJSON(object) {
    switch (object) {
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return 'BACKSLASH_QUOTE_UNSPECIFIED';
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE:
            return 'BACKSLASH_QUOTE';
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_ON:
            return 'BACKSLASH_QUOTE_ON';
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return 'BACKSLASH_QUOTE_OFF';
        case Postgresqlconfig96_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return 'BACKSLASH_QUOTE_SAFE_ENCODING';
        default:
            return 'UNKNOWN';
    }
}
const basePostgresqlconfig96 = {
    walLevel: 0,
    synchronousCommit: 0,
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
export const Postgresqlconfig96 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxConnections !== undefined) {
            Int64Value.encode({ value: message.maxConnections }, writer.uint32(10).fork()).ldelim();
        }
        if (message.sharedBuffers !== undefined) {
            Int64Value.encode({ value: message.sharedBuffers }, writer.uint32(18).fork()).ldelim();
        }
        if (message.tempBuffers !== undefined) {
            Int64Value.encode({ value: message.tempBuffers }, writer.uint32(26).fork()).ldelim();
        }
        if (message.maxPreparedTransactions !== undefined) {
            Int64Value.encode({ value: message.maxPreparedTransactions }, writer.uint32(34).fork()).ldelim();
        }
        if (message.workMem !== undefined) {
            Int64Value.encode({ value: message.workMem }, writer.uint32(42).fork()).ldelim();
        }
        if (message.maintenanceWorkMem !== undefined) {
            Int64Value.encode({ value: message.maintenanceWorkMem }, writer.uint32(50).fork()).ldelim();
        }
        if (message.replacementSortTuples !== undefined) {
            Int64Value.encode({ value: message.replacementSortTuples }, writer.uint32(58).fork()).ldelim();
        }
        if (message.autovacuumWorkMem !== undefined) {
            Int64Value.encode({ value: message.autovacuumWorkMem }, writer.uint32(66).fork()).ldelim();
        }
        if (message.tempFileLimit !== undefined) {
            Int64Value.encode({ value: message.tempFileLimit }, writer.uint32(74).fork()).ldelim();
        }
        if (message.vacuumCostDelay !== undefined) {
            Int64Value.encode({ value: message.vacuumCostDelay }, writer.uint32(82).fork()).ldelim();
        }
        if (message.vacuumCostPageHit !== undefined) {
            Int64Value.encode({ value: message.vacuumCostPageHit }, writer.uint32(90).fork()).ldelim();
        }
        if (message.vacuumCostPageMiss !== undefined) {
            Int64Value.encode({ value: message.vacuumCostPageMiss }, writer.uint32(98).fork()).ldelim();
        }
        if (message.vacuumCostPageDirty !== undefined) {
            Int64Value.encode({ value: message.vacuumCostPageDirty }, writer.uint32(106).fork()).ldelim();
        }
        if (message.vacuumCostLimit !== undefined) {
            Int64Value.encode({ value: message.vacuumCostLimit }, writer.uint32(114).fork()).ldelim();
        }
        if (message.bgwriterDelay !== undefined) {
            Int64Value.encode({ value: message.bgwriterDelay }, writer.uint32(122).fork()).ldelim();
        }
        if (message.bgwriterLruMaxpages !== undefined) {
            Int64Value.encode({ value: message.bgwriterLruMaxpages }, writer.uint32(130).fork()).ldelim();
        }
        if (message.bgwriterLruMultiplier !== undefined) {
            DoubleValue.encode({ value: message.bgwriterLruMultiplier }, writer.uint32(138).fork()).ldelim();
        }
        if (message.bgwriterFlushAfter !== undefined) {
            Int64Value.encode({ value: message.bgwriterFlushAfter }, writer.uint32(146).fork()).ldelim();
        }
        if (message.backendFlushAfter !== undefined) {
            Int64Value.encode({ value: message.backendFlushAfter }, writer.uint32(154).fork()).ldelim();
        }
        if (message.oldSnapshotThreshold !== undefined) {
            Int64Value.encode({ value: message.oldSnapshotThreshold }, writer.uint32(162).fork()).ldelim();
        }
        if (message.walLevel !== 0) {
            writer.uint32(168).int32(message.walLevel);
        }
        if (message.synchronousCommit !== 0) {
            writer.uint32(176).int32(message.synchronousCommit);
        }
        if (message.checkpointTimeout !== undefined) {
            Int64Value.encode({ value: message.checkpointTimeout }, writer.uint32(186).fork()).ldelim();
        }
        if (message.checkpointCompletionTarget !== undefined) {
            DoubleValue.encode({ value: message.checkpointCompletionTarget }, writer.uint32(194).fork()).ldelim();
        }
        if (message.checkpointFlushAfter !== undefined) {
            Int64Value.encode({ value: message.checkpointFlushAfter }, writer.uint32(202).fork()).ldelim();
        }
        if (message.maxWalSize !== undefined) {
            Int64Value.encode({ value: message.maxWalSize }, writer.uint32(210).fork()).ldelim();
        }
        if (message.minWalSize !== undefined) {
            Int64Value.encode({ value: message.minWalSize }, writer.uint32(218).fork()).ldelim();
        }
        if (message.maxStandbyStreamingDelay !== undefined) {
            Int64Value.encode({ value: message.maxStandbyStreamingDelay }, writer.uint32(226).fork()).ldelim();
        }
        if (message.defaultStatisticsTarget !== undefined) {
            Int64Value.encode({ value: message.defaultStatisticsTarget }, writer.uint32(234).fork()).ldelim();
        }
        if (message.constraintExclusion !== 0) {
            writer.uint32(240).int32(message.constraintExclusion);
        }
        if (message.cursorTupleFraction !== undefined) {
            DoubleValue.encode({ value: message.cursorTupleFraction }, writer.uint32(250).fork()).ldelim();
        }
        if (message.fromCollapseLimit !== undefined) {
            Int64Value.encode({ value: message.fromCollapseLimit }, writer.uint32(258).fork()).ldelim();
        }
        if (message.joinCollapseLimit !== undefined) {
            Int64Value.encode({ value: message.joinCollapseLimit }, writer.uint32(266).fork()).ldelim();
        }
        if (message.forceParallelMode !== 0) {
            writer.uint32(272).int32(message.forceParallelMode);
        }
        if (message.clientMinMessages !== 0) {
            writer.uint32(280).int32(message.clientMinMessages);
        }
        if (message.logMinMessages !== 0) {
            writer.uint32(288).int32(message.logMinMessages);
        }
        if (message.logMinErrorStatement !== 0) {
            writer.uint32(296).int32(message.logMinErrorStatement);
        }
        if (message.logMinDurationStatement !== undefined) {
            Int64Value.encode({ value: message.logMinDurationStatement }, writer.uint32(306).fork()).ldelim();
        }
        if (message.logCheckpoints !== undefined) {
            BoolValue.encode({ value: message.logCheckpoints }, writer.uint32(314).fork()).ldelim();
        }
        if (message.logConnections !== undefined) {
            BoolValue.encode({ value: message.logConnections }, writer.uint32(322).fork()).ldelim();
        }
        if (message.logDisconnections !== undefined) {
            BoolValue.encode({ value: message.logDisconnections }, writer.uint32(330).fork()).ldelim();
        }
        if (message.logDuration !== undefined) {
            BoolValue.encode({ value: message.logDuration }, writer.uint32(338).fork()).ldelim();
        }
        if (message.logErrorVerbosity !== 0) {
            writer.uint32(344).int32(message.logErrorVerbosity);
        }
        if (message.logLockWaits !== undefined) {
            BoolValue.encode({ value: message.logLockWaits }, writer.uint32(354).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(360).int32(message.logStatement);
        }
        if (message.logTempFiles !== undefined) {
            Int64Value.encode({ value: message.logTempFiles }, writer.uint32(370).fork()).ldelim();
        }
        if (message.searchPath !== '') {
            writer.uint32(378).string(message.searchPath);
        }
        if (message.rowSecurity !== undefined) {
            BoolValue.encode({ value: message.rowSecurity }, writer.uint32(386).fork()).ldelim();
        }
        if (message.defaultTransactionIsolation !== 0) {
            writer.uint32(392).int32(message.defaultTransactionIsolation);
        }
        if (message.statementTimeout !== undefined) {
            Int64Value.encode({ value: message.statementTimeout }, writer.uint32(402).fork()).ldelim();
        }
        if (message.lockTimeout !== undefined) {
            Int64Value.encode({ value: message.lockTimeout }, writer.uint32(410).fork()).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            Int64Value.encode({ value: message.idleInTransactionSessionTimeout }, writer.uint32(418).fork()).ldelim();
        }
        if (message.byteaOutput !== 0) {
            writer.uint32(424).int32(message.byteaOutput);
        }
        if (message.xmlbinary !== 0) {
            writer.uint32(432).int32(message.xmlbinary);
        }
        if (message.xmloption !== 0) {
            writer.uint32(440).int32(message.xmloption);
        }
        if (message.ginPendingListLimit !== undefined) {
            Int64Value.encode({ value: message.ginPendingListLimit }, writer.uint32(450).fork()).ldelim();
        }
        if (message.deadlockTimeout !== undefined) {
            Int64Value.encode({ value: message.deadlockTimeout }, writer.uint32(458).fork()).ldelim();
        }
        if (message.maxLocksPerTransaction !== undefined) {
            Int64Value.encode({ value: message.maxLocksPerTransaction }, writer.uint32(466).fork()).ldelim();
        }
        if (message.maxPredLocksPerTransaction !== undefined) {
            Int64Value.encode({ value: message.maxPredLocksPerTransaction }, writer.uint32(474).fork()).ldelim();
        }
        if (message.arrayNulls !== undefined) {
            BoolValue.encode({ value: message.arrayNulls }, writer.uint32(482).fork()).ldelim();
        }
        if (message.backslashQuote !== 0) {
            writer.uint32(488).int32(message.backslashQuote);
        }
        if (message.defaultWithOids !== undefined) {
            BoolValue.encode({ value: message.defaultWithOids }, writer.uint32(498).fork()).ldelim();
        }
        if (message.escapeStringWarning !== undefined) {
            BoolValue.encode({ value: message.escapeStringWarning }, writer.uint32(506).fork()).ldelim();
        }
        if (message.loCompatPrivileges !== undefined) {
            BoolValue.encode({ value: message.loCompatPrivileges }, writer.uint32(514).fork()).ldelim();
        }
        if (message.operatorPrecedenceWarning !== undefined) {
            BoolValue.encode({ value: message.operatorPrecedenceWarning }, writer.uint32(522).fork()).ldelim();
        }
        if (message.quoteAllIdentifiers !== undefined) {
            BoolValue.encode({ value: message.quoteAllIdentifiers }, writer.uint32(530).fork()).ldelim();
        }
        if (message.standardConformingStrings !== undefined) {
            BoolValue.encode({ value: message.standardConformingStrings }, writer.uint32(538).fork()).ldelim();
        }
        if (message.synchronizeSeqscans !== undefined) {
            BoolValue.encode({ value: message.synchronizeSeqscans }, writer.uint32(546).fork()).ldelim();
        }
        if (message.transformNullEquals !== undefined) {
            BoolValue.encode({ value: message.transformNullEquals }, writer.uint32(554).fork()).ldelim();
        }
        if (message.exitOnError !== undefined) {
            BoolValue.encode({ value: message.exitOnError }, writer.uint32(562).fork()).ldelim();
        }
        if (message.seqPageCost !== undefined) {
            DoubleValue.encode({ value: message.seqPageCost }, writer.uint32(570).fork()).ldelim();
        }
        if (message.randomPageCost !== undefined) {
            DoubleValue.encode({ value: message.randomPageCost }, writer.uint32(578).fork()).ldelim();
        }
        if (message.sqlInheritance !== undefined) {
            BoolValue.encode({ value: message.sqlInheritance }, writer.uint32(586).fork()).ldelim();
        }
        if (message.autovacuumMaxWorkers !== undefined) {
            Int64Value.encode({ value: message.autovacuumMaxWorkers }, writer.uint32(594).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostDelay !== undefined) {
            Int64Value.encode({ value: message.autovacuumVacuumCostDelay }, writer.uint32(602).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostLimit !== undefined) {
            Int64Value.encode({ value: message.autovacuumVacuumCostLimit }, writer.uint32(610).fork()).ldelim();
        }
        if (message.autovacuumNaptime !== undefined) {
            Int64Value.encode({ value: message.autovacuumNaptime }, writer.uint32(618).fork()).ldelim();
        }
        if (message.archiveTimeout !== undefined) {
            Int64Value.encode({ value: message.archiveTimeout }, writer.uint32(626).fork()).ldelim();
        }
        if (message.trackActivityQuerySize !== undefined) {
            Int64Value.encode({ value: message.trackActivityQuerySize }, writer.uint32(634).fork()).ldelim();
        }
        if (message.effectiveIoConcurrency !== undefined) {
            Int64Value.encode({ value: message.effectiveIoConcurrency }, writer.uint32(642).fork()).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            Int64Value.encode({ value: message.effectiveCacheSize }, writer.uint32(650).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresqlconfig96 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.sharedBuffers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.tempBuffers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.maxPreparedTransactions = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.workMem = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.maintenanceWorkMem = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.replacementSortTuples = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.autovacuumWorkMem = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.tempFileLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.vacuumCostDelay = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.vacuumCostPageHit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.vacuumCostPageMiss = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.vacuumCostPageDirty = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.vacuumCostLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.bgwriterDelay = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 16:
                    message.bgwriterLruMaxpages = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.bgwriterLruMultiplier = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 18:
                    message.bgwriterFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.backendFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.oldSnapshotThreshold = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 21:
                    message.walLevel = reader.int32();
                    break;
                case 22:
                    message.synchronousCommit = reader.int32();
                    break;
                case 23:
                    message.checkpointTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 24:
                    message.checkpointCompletionTarget = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.checkpointFlushAfter = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.maxWalSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.minWalSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.maxStandbyStreamingDelay = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.defaultStatisticsTarget = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 30:
                    message.constraintExclusion = reader.int32();
                    break;
                case 31:
                    message.cursorTupleFraction = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.fromCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.joinCollapseLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 34:
                    message.forceParallelMode = reader.int32();
                    break;
                case 35:
                    message.clientMinMessages = reader.int32();
                    break;
                case 36:
                    message.logMinMessages = reader.int32();
                    break;
                case 37:
                    message.logMinErrorStatement = reader.int32();
                    break;
                case 38:
                    message.logMinDurationStatement = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 39:
                    message.logCheckpoints = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.logConnections = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.logDisconnections = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.logDuration = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 43:
                    message.logErrorVerbosity = reader.int32();
                    break;
                case 44:
                    message.logLockWaits = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 45:
                    message.logStatement = reader.int32();
                    break;
                case 46:
                    message.logTempFiles = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 47:
                    message.searchPath = reader.string();
                    break;
                case 48:
                    message.rowSecurity = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 49:
                    message.defaultTransactionIsolation = reader.int32();
                    break;
                case 50:
                    message.statementTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.lockTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 52:
                    message.idleInTransactionSessionTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 53:
                    message.byteaOutput = reader.int32();
                    break;
                case 54:
                    message.xmlbinary = reader.int32();
                    break;
                case 55:
                    message.xmloption = reader.int32();
                    break;
                case 56:
                    message.ginPendingListLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 57:
                    message.deadlockTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 58:
                    message.maxLocksPerTransaction = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 59:
                    message.maxPredLocksPerTransaction = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 60:
                    message.arrayNulls = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 61:
                    message.backslashQuote = reader.int32();
                    break;
                case 62:
                    message.defaultWithOids = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 63:
                    message.escapeStringWarning = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 64:
                    message.loCompatPrivileges = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 65:
                    message.operatorPrecedenceWarning = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 66:
                    message.quoteAllIdentifiers = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 67:
                    message.standardConformingStrings = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 68:
                    message.synchronizeSeqscans = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 69:
                    message.transformNullEquals = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 70:
                    message.exitOnError = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 71:
                    message.seqPageCost = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 72:
                    message.randomPageCost = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 73:
                    message.sqlInheritance = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 74:
                    message.autovacuumMaxWorkers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 75:
                    message.autovacuumVacuumCostDelay = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 76:
                    message.autovacuumVacuumCostLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 77:
                    message.autovacuumNaptime = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 78:
                    message.archiveTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 79:
                    message.trackActivityQuerySize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 80:
                    message.effectiveIoConcurrency = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 81:
                    message.effectiveCacheSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePostgresqlconfig96 };
        if (object.maxConnections !== undefined &&
            object.maxConnections !== null) {
            message.maxConnections = Number(object.maxConnections);
        }
        else {
            message.maxConnections = undefined;
        }
        if (object.sharedBuffers !== undefined &&
            object.sharedBuffers !== null) {
            message.sharedBuffers = Number(object.sharedBuffers);
        }
        else {
            message.sharedBuffers = undefined;
        }
        if (object.tempBuffers !== undefined && object.tempBuffers !== null) {
            message.tempBuffers = Number(object.tempBuffers);
        }
        else {
            message.tempBuffers = undefined;
        }
        if (object.maxPreparedTransactions !== undefined &&
            object.maxPreparedTransactions !== null) {
            message.maxPreparedTransactions = Number(object.maxPreparedTransactions);
        }
        else {
            message.maxPreparedTransactions = undefined;
        }
        if (object.workMem !== undefined && object.workMem !== null) {
            message.workMem = Number(object.workMem);
        }
        else {
            message.workMem = undefined;
        }
        if (object.maintenanceWorkMem !== undefined &&
            object.maintenanceWorkMem !== null) {
            message.maintenanceWorkMem = Number(object.maintenanceWorkMem);
        }
        else {
            message.maintenanceWorkMem = undefined;
        }
        if (object.replacementSortTuples !== undefined &&
            object.replacementSortTuples !== null) {
            message.replacementSortTuples = Number(object.replacementSortTuples);
        }
        else {
            message.replacementSortTuples = undefined;
        }
        if (object.autovacuumWorkMem !== undefined &&
            object.autovacuumWorkMem !== null) {
            message.autovacuumWorkMem = Number(object.autovacuumWorkMem);
        }
        else {
            message.autovacuumWorkMem = undefined;
        }
        if (object.tempFileLimit !== undefined &&
            object.tempFileLimit !== null) {
            message.tempFileLimit = Number(object.tempFileLimit);
        }
        else {
            message.tempFileLimit = undefined;
        }
        if (object.vacuumCostDelay !== undefined &&
            object.vacuumCostDelay !== null) {
            message.vacuumCostDelay = Number(object.vacuumCostDelay);
        }
        else {
            message.vacuumCostDelay = undefined;
        }
        if (object.vacuumCostPageHit !== undefined &&
            object.vacuumCostPageHit !== null) {
            message.vacuumCostPageHit = Number(object.vacuumCostPageHit);
        }
        else {
            message.vacuumCostPageHit = undefined;
        }
        if (object.vacuumCostPageMiss !== undefined &&
            object.vacuumCostPageMiss !== null) {
            message.vacuumCostPageMiss = Number(object.vacuumCostPageMiss);
        }
        else {
            message.vacuumCostPageMiss = undefined;
        }
        if (object.vacuumCostPageDirty !== undefined &&
            object.vacuumCostPageDirty !== null) {
            message.vacuumCostPageDirty = Number(object.vacuumCostPageDirty);
        }
        else {
            message.vacuumCostPageDirty = undefined;
        }
        if (object.vacuumCostLimit !== undefined &&
            object.vacuumCostLimit !== null) {
            message.vacuumCostLimit = Number(object.vacuumCostLimit);
        }
        else {
            message.vacuumCostLimit = undefined;
        }
        if (object.bgwriterDelay !== undefined &&
            object.bgwriterDelay !== null) {
            message.bgwriterDelay = Number(object.bgwriterDelay);
        }
        else {
            message.bgwriterDelay = undefined;
        }
        if (object.bgwriterLruMaxpages !== undefined &&
            object.bgwriterLruMaxpages !== null) {
            message.bgwriterLruMaxpages = Number(object.bgwriterLruMaxpages);
        }
        else {
            message.bgwriterLruMaxpages = undefined;
        }
        if (object.bgwriterLruMultiplier !== undefined &&
            object.bgwriterLruMultiplier !== null) {
            message.bgwriterLruMultiplier = Number(object.bgwriterLruMultiplier);
        }
        else {
            message.bgwriterLruMultiplier = undefined;
        }
        if (object.bgwriterFlushAfter !== undefined &&
            object.bgwriterFlushAfter !== null) {
            message.bgwriterFlushAfter = Number(object.bgwriterFlushAfter);
        }
        else {
            message.bgwriterFlushAfter = undefined;
        }
        if (object.backendFlushAfter !== undefined &&
            object.backendFlushAfter !== null) {
            message.backendFlushAfter = Number(object.backendFlushAfter);
        }
        else {
            message.backendFlushAfter = undefined;
        }
        if (object.oldSnapshotThreshold !== undefined &&
            object.oldSnapshotThreshold !== null) {
            message.oldSnapshotThreshold = Number(object.oldSnapshotThreshold);
        }
        else {
            message.oldSnapshotThreshold = undefined;
        }
        if (object.walLevel !== undefined && object.walLevel !== null) {
            message.walLevel = postgresqlconfig96_WalLevelFromJSON(object.walLevel);
        }
        else {
            message.walLevel = 0;
        }
        if (object.synchronousCommit !== undefined &&
            object.synchronousCommit !== null) {
            message.synchronousCommit =
                postgresqlconfig96_SynchronousCommitFromJSON(object.synchronousCommit);
        }
        else {
            message.synchronousCommit = 0;
        }
        if (object.checkpointTimeout !== undefined &&
            object.checkpointTimeout !== null) {
            message.checkpointTimeout = Number(object.checkpointTimeout);
        }
        else {
            message.checkpointTimeout = undefined;
        }
        if (object.checkpointCompletionTarget !== undefined &&
            object.checkpointCompletionTarget !== null) {
            message.checkpointCompletionTarget = Number(object.checkpointCompletionTarget);
        }
        else {
            message.checkpointCompletionTarget = undefined;
        }
        if (object.checkpointFlushAfter !== undefined &&
            object.checkpointFlushAfter !== null) {
            message.checkpointFlushAfter = Number(object.checkpointFlushAfter);
        }
        else {
            message.checkpointFlushAfter = undefined;
        }
        if (object.maxWalSize !== undefined && object.maxWalSize !== null) {
            message.maxWalSize = Number(object.maxWalSize);
        }
        else {
            message.maxWalSize = undefined;
        }
        if (object.minWalSize !== undefined && object.minWalSize !== null) {
            message.minWalSize = Number(object.minWalSize);
        }
        else {
            message.minWalSize = undefined;
        }
        if (object.maxStandbyStreamingDelay !== undefined &&
            object.maxStandbyStreamingDelay !== null) {
            message.maxStandbyStreamingDelay = Number(object.maxStandbyStreamingDelay);
        }
        else {
            message.maxStandbyStreamingDelay = undefined;
        }
        if (object.defaultStatisticsTarget !== undefined &&
            object.defaultStatisticsTarget !== null) {
            message.defaultStatisticsTarget = Number(object.defaultStatisticsTarget);
        }
        else {
            message.defaultStatisticsTarget = undefined;
        }
        if (object.constraintExclusion !== undefined &&
            object.constraintExclusion !== null) {
            message.constraintExclusion =
                postgresqlconfig96_ConstraintExclusionFromJSON(object.constraintExclusion);
        }
        else {
            message.constraintExclusion = 0;
        }
        if (object.cursorTupleFraction !== undefined &&
            object.cursorTupleFraction !== null) {
            message.cursorTupleFraction = Number(object.cursorTupleFraction);
        }
        else {
            message.cursorTupleFraction = undefined;
        }
        if (object.fromCollapseLimit !== undefined &&
            object.fromCollapseLimit !== null) {
            message.fromCollapseLimit = Number(object.fromCollapseLimit);
        }
        else {
            message.fromCollapseLimit = undefined;
        }
        if (object.joinCollapseLimit !== undefined &&
            object.joinCollapseLimit !== null) {
            message.joinCollapseLimit = Number(object.joinCollapseLimit);
        }
        else {
            message.joinCollapseLimit = undefined;
        }
        if (object.forceParallelMode !== undefined &&
            object.forceParallelMode !== null) {
            message.forceParallelMode =
                postgresqlconfig96_ForceParallelModeFromJSON(object.forceParallelMode);
        }
        else {
            message.forceParallelMode = 0;
        }
        if (object.clientMinMessages !== undefined &&
            object.clientMinMessages !== null) {
            message.clientMinMessages = postgresqlconfig96_LogLevelFromJSON(object.clientMinMessages);
        }
        else {
            message.clientMinMessages = 0;
        }
        if (object.logMinMessages !== undefined &&
            object.logMinMessages !== null) {
            message.logMinMessages = postgresqlconfig96_LogLevelFromJSON(object.logMinMessages);
        }
        else {
            message.logMinMessages = 0;
        }
        if (object.logMinErrorStatement !== undefined &&
            object.logMinErrorStatement !== null) {
            message.logMinErrorStatement = postgresqlconfig96_LogLevelFromJSON(object.logMinErrorStatement);
        }
        else {
            message.logMinErrorStatement = 0;
        }
        if (object.logMinDurationStatement !== undefined &&
            object.logMinDurationStatement !== null) {
            message.logMinDurationStatement = Number(object.logMinDurationStatement);
        }
        else {
            message.logMinDurationStatement = undefined;
        }
        if (object.logCheckpoints !== undefined &&
            object.logCheckpoints !== null) {
            message.logCheckpoints = Boolean(object.logCheckpoints);
        }
        else {
            message.logCheckpoints = undefined;
        }
        if (object.logConnections !== undefined &&
            object.logConnections !== null) {
            message.logConnections = Boolean(object.logConnections);
        }
        else {
            message.logConnections = undefined;
        }
        if (object.logDisconnections !== undefined &&
            object.logDisconnections !== null) {
            message.logDisconnections = Boolean(object.logDisconnections);
        }
        else {
            message.logDisconnections = undefined;
        }
        if (object.logDuration !== undefined && object.logDuration !== null) {
            message.logDuration = Boolean(object.logDuration);
        }
        else {
            message.logDuration = undefined;
        }
        if (object.logErrorVerbosity !== undefined &&
            object.logErrorVerbosity !== null) {
            message.logErrorVerbosity =
                postgresqlconfig96_LogErrorVerbosityFromJSON(object.logErrorVerbosity);
        }
        else {
            message.logErrorVerbosity = 0;
        }
        if (object.logLockWaits !== undefined && object.logLockWaits !== null) {
            message.logLockWaits = Boolean(object.logLockWaits);
        }
        else {
            message.logLockWaits = undefined;
        }
        if (object.logStatement !== undefined && object.logStatement !== null) {
            message.logStatement = postgresqlconfig96_LogStatementFromJSON(object.logStatement);
        }
        else {
            message.logStatement = 0;
        }
        if (object.logTempFiles !== undefined && object.logTempFiles !== null) {
            message.logTempFiles = Number(object.logTempFiles);
        }
        else {
            message.logTempFiles = undefined;
        }
        if (object.searchPath !== undefined && object.searchPath !== null) {
            message.searchPath = String(object.searchPath);
        }
        else {
            message.searchPath = '';
        }
        if (object.rowSecurity !== undefined && object.rowSecurity !== null) {
            message.rowSecurity = Boolean(object.rowSecurity);
        }
        else {
            message.rowSecurity = undefined;
        }
        if (object.defaultTransactionIsolation !== undefined &&
            object.defaultTransactionIsolation !== null) {
            message.defaultTransactionIsolation =
                postgresqlconfig96_TransactionIsolationFromJSON(object.defaultTransactionIsolation);
        }
        else {
            message.defaultTransactionIsolation = 0;
        }
        if (object.statementTimeout !== undefined &&
            object.statementTimeout !== null) {
            message.statementTimeout = Number(object.statementTimeout);
        }
        else {
            message.statementTimeout = undefined;
        }
        if (object.lockTimeout !== undefined && object.lockTimeout !== null) {
            message.lockTimeout = Number(object.lockTimeout);
        }
        else {
            message.lockTimeout = undefined;
        }
        if (object.idleInTransactionSessionTimeout !== undefined &&
            object.idleInTransactionSessionTimeout !== null) {
            message.idleInTransactionSessionTimeout = Number(object.idleInTransactionSessionTimeout);
        }
        else {
            message.idleInTransactionSessionTimeout = undefined;
        }
        if (object.byteaOutput !== undefined && object.byteaOutput !== null) {
            message.byteaOutput = postgresqlconfig96_ByteaOutputFromJSON(object.byteaOutput);
        }
        else {
            message.byteaOutput = 0;
        }
        if (object.xmlbinary !== undefined && object.xmlbinary !== null) {
            message.xmlbinary = postgresqlconfig96_XmlBinaryFromJSON(object.xmlbinary);
        }
        else {
            message.xmlbinary = 0;
        }
        if (object.xmloption !== undefined && object.xmloption !== null) {
            message.xmloption = postgresqlconfig96_XmlOptionFromJSON(object.xmloption);
        }
        else {
            message.xmloption = 0;
        }
        if (object.ginPendingListLimit !== undefined &&
            object.ginPendingListLimit !== null) {
            message.ginPendingListLimit = Number(object.ginPendingListLimit);
        }
        else {
            message.ginPendingListLimit = undefined;
        }
        if (object.deadlockTimeout !== undefined &&
            object.deadlockTimeout !== null) {
            message.deadlockTimeout = Number(object.deadlockTimeout);
        }
        else {
            message.deadlockTimeout = undefined;
        }
        if (object.maxLocksPerTransaction !== undefined &&
            object.maxLocksPerTransaction !== null) {
            message.maxLocksPerTransaction = Number(object.maxLocksPerTransaction);
        }
        else {
            message.maxLocksPerTransaction = undefined;
        }
        if (object.maxPredLocksPerTransaction !== undefined &&
            object.maxPredLocksPerTransaction !== null) {
            message.maxPredLocksPerTransaction = Number(object.maxPredLocksPerTransaction);
        }
        else {
            message.maxPredLocksPerTransaction = undefined;
        }
        if (object.arrayNulls !== undefined && object.arrayNulls !== null) {
            message.arrayNulls = Boolean(object.arrayNulls);
        }
        else {
            message.arrayNulls = undefined;
        }
        if (object.backslashQuote !== undefined &&
            object.backslashQuote !== null) {
            message.backslashQuote = postgresqlconfig96_BackslashQuoteFromJSON(object.backslashQuote);
        }
        else {
            message.backslashQuote = 0;
        }
        if (object.defaultWithOids !== undefined &&
            object.defaultWithOids !== null) {
            message.defaultWithOids = Boolean(object.defaultWithOids);
        }
        else {
            message.defaultWithOids = undefined;
        }
        if (object.escapeStringWarning !== undefined &&
            object.escapeStringWarning !== null) {
            message.escapeStringWarning = Boolean(object.escapeStringWarning);
        }
        else {
            message.escapeStringWarning = undefined;
        }
        if (object.loCompatPrivileges !== undefined &&
            object.loCompatPrivileges !== null) {
            message.loCompatPrivileges = Boolean(object.loCompatPrivileges);
        }
        else {
            message.loCompatPrivileges = undefined;
        }
        if (object.operatorPrecedenceWarning !== undefined &&
            object.operatorPrecedenceWarning !== null) {
            message.operatorPrecedenceWarning = Boolean(object.operatorPrecedenceWarning);
        }
        else {
            message.operatorPrecedenceWarning = undefined;
        }
        if (object.quoteAllIdentifiers !== undefined &&
            object.quoteAllIdentifiers !== null) {
            message.quoteAllIdentifiers = Boolean(object.quoteAllIdentifiers);
        }
        else {
            message.quoteAllIdentifiers = undefined;
        }
        if (object.standardConformingStrings !== undefined &&
            object.standardConformingStrings !== null) {
            message.standardConformingStrings = Boolean(object.standardConformingStrings);
        }
        else {
            message.standardConformingStrings = undefined;
        }
        if (object.synchronizeSeqscans !== undefined &&
            object.synchronizeSeqscans !== null) {
            message.synchronizeSeqscans = Boolean(object.synchronizeSeqscans);
        }
        else {
            message.synchronizeSeqscans = undefined;
        }
        if (object.transformNullEquals !== undefined &&
            object.transformNullEquals !== null) {
            message.transformNullEquals = Boolean(object.transformNullEquals);
        }
        else {
            message.transformNullEquals = undefined;
        }
        if (object.exitOnError !== undefined && object.exitOnError !== null) {
            message.exitOnError = Boolean(object.exitOnError);
        }
        else {
            message.exitOnError = undefined;
        }
        if (object.seqPageCost !== undefined && object.seqPageCost !== null) {
            message.seqPageCost = Number(object.seqPageCost);
        }
        else {
            message.seqPageCost = undefined;
        }
        if (object.randomPageCost !== undefined &&
            object.randomPageCost !== null) {
            message.randomPageCost = Number(object.randomPageCost);
        }
        else {
            message.randomPageCost = undefined;
        }
        if (object.sqlInheritance !== undefined &&
            object.sqlInheritance !== null) {
            message.sqlInheritance = Boolean(object.sqlInheritance);
        }
        else {
            message.sqlInheritance = undefined;
        }
        if (object.autovacuumMaxWorkers !== undefined &&
            object.autovacuumMaxWorkers !== null) {
            message.autovacuumMaxWorkers = Number(object.autovacuumMaxWorkers);
        }
        else {
            message.autovacuumMaxWorkers = undefined;
        }
        if (object.autovacuumVacuumCostDelay !== undefined &&
            object.autovacuumVacuumCostDelay !== null) {
            message.autovacuumVacuumCostDelay = Number(object.autovacuumVacuumCostDelay);
        }
        else {
            message.autovacuumVacuumCostDelay = undefined;
        }
        if (object.autovacuumVacuumCostLimit !== undefined &&
            object.autovacuumVacuumCostLimit !== null) {
            message.autovacuumVacuumCostLimit = Number(object.autovacuumVacuumCostLimit);
        }
        else {
            message.autovacuumVacuumCostLimit = undefined;
        }
        if (object.autovacuumNaptime !== undefined &&
            object.autovacuumNaptime !== null) {
            message.autovacuumNaptime = Number(object.autovacuumNaptime);
        }
        else {
            message.autovacuumNaptime = undefined;
        }
        if (object.archiveTimeout !== undefined &&
            object.archiveTimeout !== null) {
            message.archiveTimeout = Number(object.archiveTimeout);
        }
        else {
            message.archiveTimeout = undefined;
        }
        if (object.trackActivityQuerySize !== undefined &&
            object.trackActivityQuerySize !== null) {
            message.trackActivityQuerySize = Number(object.trackActivityQuerySize);
        }
        else {
            message.trackActivityQuerySize = undefined;
        }
        if (object.effectiveIoConcurrency !== undefined &&
            object.effectiveIoConcurrency !== null) {
            message.effectiveIoConcurrency = Number(object.effectiveIoConcurrency);
        }
        else {
            message.effectiveIoConcurrency = undefined;
        }
        if (object.effectiveCacheSize !== undefined &&
            object.effectiveCacheSize !== null) {
            message.effectiveCacheSize = Number(object.effectiveCacheSize);
        }
        else {
            message.effectiveCacheSize = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.sharedBuffers !== undefined &&
            (obj.sharedBuffers = message.sharedBuffers);
        message.tempBuffers !== undefined &&
            (obj.tempBuffers = message.tempBuffers);
        message.maxPreparedTransactions !== undefined &&
            (obj.maxPreparedTransactions = message.maxPreparedTransactions);
        message.workMem !== undefined && (obj.workMem = message.workMem);
        message.maintenanceWorkMem !== undefined &&
            (obj.maintenanceWorkMem = message.maintenanceWorkMem);
        message.replacementSortTuples !== undefined &&
            (obj.replacementSortTuples = message.replacementSortTuples);
        message.autovacuumWorkMem !== undefined &&
            (obj.autovacuumWorkMem = message.autovacuumWorkMem);
        message.tempFileLimit !== undefined &&
            (obj.tempFileLimit = message.tempFileLimit);
        message.vacuumCostDelay !== undefined &&
            (obj.vacuumCostDelay = message.vacuumCostDelay);
        message.vacuumCostPageHit !== undefined &&
            (obj.vacuumCostPageHit = message.vacuumCostPageHit);
        message.vacuumCostPageMiss !== undefined &&
            (obj.vacuumCostPageMiss = message.vacuumCostPageMiss);
        message.vacuumCostPageDirty !== undefined &&
            (obj.vacuumCostPageDirty = message.vacuumCostPageDirty);
        message.vacuumCostLimit !== undefined &&
            (obj.vacuumCostLimit = message.vacuumCostLimit);
        message.bgwriterDelay !== undefined &&
            (obj.bgwriterDelay = message.bgwriterDelay);
        message.bgwriterLruMaxpages !== undefined &&
            (obj.bgwriterLruMaxpages = message.bgwriterLruMaxpages);
        message.bgwriterLruMultiplier !== undefined &&
            (obj.bgwriterLruMultiplier = message.bgwriterLruMultiplier);
        message.bgwriterFlushAfter !== undefined &&
            (obj.bgwriterFlushAfter = message.bgwriterFlushAfter);
        message.backendFlushAfter !== undefined &&
            (obj.backendFlushAfter = message.backendFlushAfter);
        message.oldSnapshotThreshold !== undefined &&
            (obj.oldSnapshotThreshold = message.oldSnapshotThreshold);
        message.walLevel !== undefined &&
            (obj.walLevel = postgresqlconfig96_WalLevelToJSON(message.walLevel));
        message.synchronousCommit !== undefined &&
            (obj.synchronousCommit = postgresqlconfig96_SynchronousCommitToJSON(message.synchronousCommit));
        message.checkpointTimeout !== undefined &&
            (obj.checkpointTimeout = message.checkpointTimeout);
        message.checkpointCompletionTarget !== undefined &&
            (obj.checkpointCompletionTarget =
                message.checkpointCompletionTarget);
        message.checkpointFlushAfter !== undefined &&
            (obj.checkpointFlushAfter = message.checkpointFlushAfter);
        message.maxWalSize !== undefined &&
            (obj.maxWalSize = message.maxWalSize);
        message.minWalSize !== undefined &&
            (obj.minWalSize = message.minWalSize);
        message.maxStandbyStreamingDelay !== undefined &&
            (obj.maxStandbyStreamingDelay = message.maxStandbyStreamingDelay);
        message.defaultStatisticsTarget !== undefined &&
            (obj.defaultStatisticsTarget = message.defaultStatisticsTarget);
        message.constraintExclusion !== undefined &&
            (obj.constraintExclusion =
                postgresqlconfig96_ConstraintExclusionToJSON(message.constraintExclusion));
        message.cursorTupleFraction !== undefined &&
            (obj.cursorTupleFraction = message.cursorTupleFraction);
        message.fromCollapseLimit !== undefined &&
            (obj.fromCollapseLimit = message.fromCollapseLimit);
        message.joinCollapseLimit !== undefined &&
            (obj.joinCollapseLimit = message.joinCollapseLimit);
        message.forceParallelMode !== undefined &&
            (obj.forceParallelMode = postgresqlconfig96_ForceParallelModeToJSON(message.forceParallelMode));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlconfig96_LogLevelToJSON(message.clientMinMessages));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlconfig96_LogLevelToJSON(message.logMinMessages));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlconfig96_LogLevelToJSON(message.logMinErrorStatement));
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
            (obj.logErrorVerbosity = postgresqlconfig96_LogErrorVerbosityToJSON(message.logErrorVerbosity));
        message.logLockWaits !== undefined &&
            (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlconfig96_LogStatementToJSON(message.logStatement));
        message.logTempFiles !== undefined &&
            (obj.logTempFiles = message.logTempFiles);
        message.searchPath !== undefined &&
            (obj.searchPath = message.searchPath);
        message.rowSecurity !== undefined &&
            (obj.rowSecurity = message.rowSecurity);
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation =
                postgresqlconfig96_TransactionIsolationToJSON(message.defaultTransactionIsolation));
        message.statementTimeout !== undefined &&
            (obj.statementTimeout = message.statementTimeout);
        message.lockTimeout !== undefined &&
            (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout =
                message.idleInTransactionSessionTimeout);
        message.byteaOutput !== undefined &&
            (obj.byteaOutput = postgresqlconfig96_ByteaOutputToJSON(message.byteaOutput));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlconfig96_XmlBinaryToJSON(message.xmlbinary));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlconfig96_XmlOptionToJSON(message.xmloption));
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
            (obj.backslashQuote = postgresqlconfig96_BackslashQuoteToJSON(message.backslashQuote));
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
        message.autovacuumMaxWorkers !== undefined &&
            (obj.autovacuumMaxWorkers = message.autovacuumMaxWorkers);
        message.autovacuumVacuumCostDelay !== undefined &&
            (obj.autovacuumVacuumCostDelay = message.autovacuumVacuumCostDelay);
        message.autovacuumVacuumCostLimit !== undefined &&
            (obj.autovacuumVacuumCostLimit = message.autovacuumVacuumCostLimit);
        message.autovacuumNaptime !== undefined &&
            (obj.autovacuumNaptime = message.autovacuumNaptime);
        message.archiveTimeout !== undefined &&
            (obj.archiveTimeout = message.archiveTimeout);
        message.trackActivityQuerySize !== undefined &&
            (obj.trackActivityQuerySize = message.trackActivityQuerySize);
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePostgresqlconfig96 };
        if (object.maxConnections !== undefined &&
            object.maxConnections !== null) {
            message.maxConnections = object.maxConnections;
        }
        else {
            message.maxConnections = undefined;
        }
        if (object.sharedBuffers !== undefined &&
            object.sharedBuffers !== null) {
            message.sharedBuffers = object.sharedBuffers;
        }
        else {
            message.sharedBuffers = undefined;
        }
        if (object.tempBuffers !== undefined && object.tempBuffers !== null) {
            message.tempBuffers = object.tempBuffers;
        }
        else {
            message.tempBuffers = undefined;
        }
        if (object.maxPreparedTransactions !== undefined &&
            object.maxPreparedTransactions !== null) {
            message.maxPreparedTransactions = object.maxPreparedTransactions;
        }
        else {
            message.maxPreparedTransactions = undefined;
        }
        if (object.workMem !== undefined && object.workMem !== null) {
            message.workMem = object.workMem;
        }
        else {
            message.workMem = undefined;
        }
        if (object.maintenanceWorkMem !== undefined &&
            object.maintenanceWorkMem !== null) {
            message.maintenanceWorkMem = object.maintenanceWorkMem;
        }
        else {
            message.maintenanceWorkMem = undefined;
        }
        if (object.replacementSortTuples !== undefined &&
            object.replacementSortTuples !== null) {
            message.replacementSortTuples = object.replacementSortTuples;
        }
        else {
            message.replacementSortTuples = undefined;
        }
        if (object.autovacuumWorkMem !== undefined &&
            object.autovacuumWorkMem !== null) {
            message.autovacuumWorkMem = object.autovacuumWorkMem;
        }
        else {
            message.autovacuumWorkMem = undefined;
        }
        if (object.tempFileLimit !== undefined &&
            object.tempFileLimit !== null) {
            message.tempFileLimit = object.tempFileLimit;
        }
        else {
            message.tempFileLimit = undefined;
        }
        if (object.vacuumCostDelay !== undefined &&
            object.vacuumCostDelay !== null) {
            message.vacuumCostDelay = object.vacuumCostDelay;
        }
        else {
            message.vacuumCostDelay = undefined;
        }
        if (object.vacuumCostPageHit !== undefined &&
            object.vacuumCostPageHit !== null) {
            message.vacuumCostPageHit = object.vacuumCostPageHit;
        }
        else {
            message.vacuumCostPageHit = undefined;
        }
        if (object.vacuumCostPageMiss !== undefined &&
            object.vacuumCostPageMiss !== null) {
            message.vacuumCostPageMiss = object.vacuumCostPageMiss;
        }
        else {
            message.vacuumCostPageMiss = undefined;
        }
        if (object.vacuumCostPageDirty !== undefined &&
            object.vacuumCostPageDirty !== null) {
            message.vacuumCostPageDirty = object.vacuumCostPageDirty;
        }
        else {
            message.vacuumCostPageDirty = undefined;
        }
        if (object.vacuumCostLimit !== undefined &&
            object.vacuumCostLimit !== null) {
            message.vacuumCostLimit = object.vacuumCostLimit;
        }
        else {
            message.vacuumCostLimit = undefined;
        }
        if (object.bgwriterDelay !== undefined &&
            object.bgwriterDelay !== null) {
            message.bgwriterDelay = object.bgwriterDelay;
        }
        else {
            message.bgwriterDelay = undefined;
        }
        if (object.bgwriterLruMaxpages !== undefined &&
            object.bgwriterLruMaxpages !== null) {
            message.bgwriterLruMaxpages = object.bgwriterLruMaxpages;
        }
        else {
            message.bgwriterLruMaxpages = undefined;
        }
        if (object.bgwriterLruMultiplier !== undefined &&
            object.bgwriterLruMultiplier !== null) {
            message.bgwriterLruMultiplier = object.bgwriterLruMultiplier;
        }
        else {
            message.bgwriterLruMultiplier = undefined;
        }
        if (object.bgwriterFlushAfter !== undefined &&
            object.bgwriterFlushAfter !== null) {
            message.bgwriterFlushAfter = object.bgwriterFlushAfter;
        }
        else {
            message.bgwriterFlushAfter = undefined;
        }
        if (object.backendFlushAfter !== undefined &&
            object.backendFlushAfter !== null) {
            message.backendFlushAfter = object.backendFlushAfter;
        }
        else {
            message.backendFlushAfter = undefined;
        }
        if (object.oldSnapshotThreshold !== undefined &&
            object.oldSnapshotThreshold !== null) {
            message.oldSnapshotThreshold = object.oldSnapshotThreshold;
        }
        else {
            message.oldSnapshotThreshold = undefined;
        }
        if (object.walLevel !== undefined && object.walLevel !== null) {
            message.walLevel = object.walLevel;
        }
        else {
            message.walLevel = 0;
        }
        if (object.synchronousCommit !== undefined &&
            object.synchronousCommit !== null) {
            message.synchronousCommit = object.synchronousCommit;
        }
        else {
            message.synchronousCommit = 0;
        }
        if (object.checkpointTimeout !== undefined &&
            object.checkpointTimeout !== null) {
            message.checkpointTimeout = object.checkpointTimeout;
        }
        else {
            message.checkpointTimeout = undefined;
        }
        if (object.checkpointCompletionTarget !== undefined &&
            object.checkpointCompletionTarget !== null) {
            message.checkpointCompletionTarget =
                object.checkpointCompletionTarget;
        }
        else {
            message.checkpointCompletionTarget = undefined;
        }
        if (object.checkpointFlushAfter !== undefined &&
            object.checkpointFlushAfter !== null) {
            message.checkpointFlushAfter = object.checkpointFlushAfter;
        }
        else {
            message.checkpointFlushAfter = undefined;
        }
        if (object.maxWalSize !== undefined && object.maxWalSize !== null) {
            message.maxWalSize = object.maxWalSize;
        }
        else {
            message.maxWalSize = undefined;
        }
        if (object.minWalSize !== undefined && object.minWalSize !== null) {
            message.minWalSize = object.minWalSize;
        }
        else {
            message.minWalSize = undefined;
        }
        if (object.maxStandbyStreamingDelay !== undefined &&
            object.maxStandbyStreamingDelay !== null) {
            message.maxStandbyStreamingDelay = object.maxStandbyStreamingDelay;
        }
        else {
            message.maxStandbyStreamingDelay = undefined;
        }
        if (object.defaultStatisticsTarget !== undefined &&
            object.defaultStatisticsTarget !== null) {
            message.defaultStatisticsTarget = object.defaultStatisticsTarget;
        }
        else {
            message.defaultStatisticsTarget = undefined;
        }
        if (object.constraintExclusion !== undefined &&
            object.constraintExclusion !== null) {
            message.constraintExclusion = object.constraintExclusion;
        }
        else {
            message.constraintExclusion = 0;
        }
        if (object.cursorTupleFraction !== undefined &&
            object.cursorTupleFraction !== null) {
            message.cursorTupleFraction = object.cursorTupleFraction;
        }
        else {
            message.cursorTupleFraction = undefined;
        }
        if (object.fromCollapseLimit !== undefined &&
            object.fromCollapseLimit !== null) {
            message.fromCollapseLimit = object.fromCollapseLimit;
        }
        else {
            message.fromCollapseLimit = undefined;
        }
        if (object.joinCollapseLimit !== undefined &&
            object.joinCollapseLimit !== null) {
            message.joinCollapseLimit = object.joinCollapseLimit;
        }
        else {
            message.joinCollapseLimit = undefined;
        }
        if (object.forceParallelMode !== undefined &&
            object.forceParallelMode !== null) {
            message.forceParallelMode = object.forceParallelMode;
        }
        else {
            message.forceParallelMode = 0;
        }
        if (object.clientMinMessages !== undefined &&
            object.clientMinMessages !== null) {
            message.clientMinMessages = object.clientMinMessages;
        }
        else {
            message.clientMinMessages = 0;
        }
        if (object.logMinMessages !== undefined &&
            object.logMinMessages !== null) {
            message.logMinMessages = object.logMinMessages;
        }
        else {
            message.logMinMessages = 0;
        }
        if (object.logMinErrorStatement !== undefined &&
            object.logMinErrorStatement !== null) {
            message.logMinErrorStatement = object.logMinErrorStatement;
        }
        else {
            message.logMinErrorStatement = 0;
        }
        if (object.logMinDurationStatement !== undefined &&
            object.logMinDurationStatement !== null) {
            message.logMinDurationStatement = object.logMinDurationStatement;
        }
        else {
            message.logMinDurationStatement = undefined;
        }
        if (object.logCheckpoints !== undefined &&
            object.logCheckpoints !== null) {
            message.logCheckpoints = object.logCheckpoints;
        }
        else {
            message.logCheckpoints = undefined;
        }
        if (object.logConnections !== undefined &&
            object.logConnections !== null) {
            message.logConnections = object.logConnections;
        }
        else {
            message.logConnections = undefined;
        }
        if (object.logDisconnections !== undefined &&
            object.logDisconnections !== null) {
            message.logDisconnections = object.logDisconnections;
        }
        else {
            message.logDisconnections = undefined;
        }
        if (object.logDuration !== undefined && object.logDuration !== null) {
            message.logDuration = object.logDuration;
        }
        else {
            message.logDuration = undefined;
        }
        if (object.logErrorVerbosity !== undefined &&
            object.logErrorVerbosity !== null) {
            message.logErrorVerbosity = object.logErrorVerbosity;
        }
        else {
            message.logErrorVerbosity = 0;
        }
        if (object.logLockWaits !== undefined && object.logLockWaits !== null) {
            message.logLockWaits = object.logLockWaits;
        }
        else {
            message.logLockWaits = undefined;
        }
        if (object.logStatement !== undefined && object.logStatement !== null) {
            message.logStatement = object.logStatement;
        }
        else {
            message.logStatement = 0;
        }
        if (object.logTempFiles !== undefined && object.logTempFiles !== null) {
            message.logTempFiles = object.logTempFiles;
        }
        else {
            message.logTempFiles = undefined;
        }
        if (object.searchPath !== undefined && object.searchPath !== null) {
            message.searchPath = object.searchPath;
        }
        else {
            message.searchPath = '';
        }
        if (object.rowSecurity !== undefined && object.rowSecurity !== null) {
            message.rowSecurity = object.rowSecurity;
        }
        else {
            message.rowSecurity = undefined;
        }
        if (object.defaultTransactionIsolation !== undefined &&
            object.defaultTransactionIsolation !== null) {
            message.defaultTransactionIsolation =
                object.defaultTransactionIsolation;
        }
        else {
            message.defaultTransactionIsolation = 0;
        }
        if (object.statementTimeout !== undefined &&
            object.statementTimeout !== null) {
            message.statementTimeout = object.statementTimeout;
        }
        else {
            message.statementTimeout = undefined;
        }
        if (object.lockTimeout !== undefined && object.lockTimeout !== null) {
            message.lockTimeout = object.lockTimeout;
        }
        else {
            message.lockTimeout = undefined;
        }
        if (object.idleInTransactionSessionTimeout !== undefined &&
            object.idleInTransactionSessionTimeout !== null) {
            message.idleInTransactionSessionTimeout =
                object.idleInTransactionSessionTimeout;
        }
        else {
            message.idleInTransactionSessionTimeout = undefined;
        }
        if (object.byteaOutput !== undefined && object.byteaOutput !== null) {
            message.byteaOutput = object.byteaOutput;
        }
        else {
            message.byteaOutput = 0;
        }
        if (object.xmlbinary !== undefined && object.xmlbinary !== null) {
            message.xmlbinary = object.xmlbinary;
        }
        else {
            message.xmlbinary = 0;
        }
        if (object.xmloption !== undefined && object.xmloption !== null) {
            message.xmloption = object.xmloption;
        }
        else {
            message.xmloption = 0;
        }
        if (object.ginPendingListLimit !== undefined &&
            object.ginPendingListLimit !== null) {
            message.ginPendingListLimit = object.ginPendingListLimit;
        }
        else {
            message.ginPendingListLimit = undefined;
        }
        if (object.deadlockTimeout !== undefined &&
            object.deadlockTimeout !== null) {
            message.deadlockTimeout = object.deadlockTimeout;
        }
        else {
            message.deadlockTimeout = undefined;
        }
        if (object.maxLocksPerTransaction !== undefined &&
            object.maxLocksPerTransaction !== null) {
            message.maxLocksPerTransaction = object.maxLocksPerTransaction;
        }
        else {
            message.maxLocksPerTransaction = undefined;
        }
        if (object.maxPredLocksPerTransaction !== undefined &&
            object.maxPredLocksPerTransaction !== null) {
            message.maxPredLocksPerTransaction =
                object.maxPredLocksPerTransaction;
        }
        else {
            message.maxPredLocksPerTransaction = undefined;
        }
        if (object.arrayNulls !== undefined && object.arrayNulls !== null) {
            message.arrayNulls = object.arrayNulls;
        }
        else {
            message.arrayNulls = undefined;
        }
        if (object.backslashQuote !== undefined &&
            object.backslashQuote !== null) {
            message.backslashQuote = object.backslashQuote;
        }
        else {
            message.backslashQuote = 0;
        }
        if (object.defaultWithOids !== undefined &&
            object.defaultWithOids !== null) {
            message.defaultWithOids = object.defaultWithOids;
        }
        else {
            message.defaultWithOids = undefined;
        }
        if (object.escapeStringWarning !== undefined &&
            object.escapeStringWarning !== null) {
            message.escapeStringWarning = object.escapeStringWarning;
        }
        else {
            message.escapeStringWarning = undefined;
        }
        if (object.loCompatPrivileges !== undefined &&
            object.loCompatPrivileges !== null) {
            message.loCompatPrivileges = object.loCompatPrivileges;
        }
        else {
            message.loCompatPrivileges = undefined;
        }
        if (object.operatorPrecedenceWarning !== undefined &&
            object.operatorPrecedenceWarning !== null) {
            message.operatorPrecedenceWarning =
                object.operatorPrecedenceWarning;
        }
        else {
            message.operatorPrecedenceWarning = undefined;
        }
        if (object.quoteAllIdentifiers !== undefined &&
            object.quoteAllIdentifiers !== null) {
            message.quoteAllIdentifiers = object.quoteAllIdentifiers;
        }
        else {
            message.quoteAllIdentifiers = undefined;
        }
        if (object.standardConformingStrings !== undefined &&
            object.standardConformingStrings !== null) {
            message.standardConformingStrings =
                object.standardConformingStrings;
        }
        else {
            message.standardConformingStrings = undefined;
        }
        if (object.synchronizeSeqscans !== undefined &&
            object.synchronizeSeqscans !== null) {
            message.synchronizeSeqscans = object.synchronizeSeqscans;
        }
        else {
            message.synchronizeSeqscans = undefined;
        }
        if (object.transformNullEquals !== undefined &&
            object.transformNullEquals !== null) {
            message.transformNullEquals = object.transformNullEquals;
        }
        else {
            message.transformNullEquals = undefined;
        }
        if (object.exitOnError !== undefined && object.exitOnError !== null) {
            message.exitOnError = object.exitOnError;
        }
        else {
            message.exitOnError = undefined;
        }
        if (object.seqPageCost !== undefined && object.seqPageCost !== null) {
            message.seqPageCost = object.seqPageCost;
        }
        else {
            message.seqPageCost = undefined;
        }
        if (object.randomPageCost !== undefined &&
            object.randomPageCost !== null) {
            message.randomPageCost = object.randomPageCost;
        }
        else {
            message.randomPageCost = undefined;
        }
        if (object.sqlInheritance !== undefined &&
            object.sqlInheritance !== null) {
            message.sqlInheritance = object.sqlInheritance;
        }
        else {
            message.sqlInheritance = undefined;
        }
        if (object.autovacuumMaxWorkers !== undefined &&
            object.autovacuumMaxWorkers !== null) {
            message.autovacuumMaxWorkers = object.autovacuumMaxWorkers;
        }
        else {
            message.autovacuumMaxWorkers = undefined;
        }
        if (object.autovacuumVacuumCostDelay !== undefined &&
            object.autovacuumVacuumCostDelay !== null) {
            message.autovacuumVacuumCostDelay =
                object.autovacuumVacuumCostDelay;
        }
        else {
            message.autovacuumVacuumCostDelay = undefined;
        }
        if (object.autovacuumVacuumCostLimit !== undefined &&
            object.autovacuumVacuumCostLimit !== null) {
            message.autovacuumVacuumCostLimit =
                object.autovacuumVacuumCostLimit;
        }
        else {
            message.autovacuumVacuumCostLimit = undefined;
        }
        if (object.autovacuumNaptime !== undefined &&
            object.autovacuumNaptime !== null) {
            message.autovacuumNaptime = object.autovacuumNaptime;
        }
        else {
            message.autovacuumNaptime = undefined;
        }
        if (object.archiveTimeout !== undefined &&
            object.archiveTimeout !== null) {
            message.archiveTimeout = object.archiveTimeout;
        }
        else {
            message.archiveTimeout = undefined;
        }
        if (object.trackActivityQuerySize !== undefined &&
            object.trackActivityQuerySize !== null) {
            message.trackActivityQuerySize = object.trackActivityQuerySize;
        }
        else {
            message.trackActivityQuerySize = undefined;
        }
        if (object.effectiveIoConcurrency !== undefined &&
            object.effectiveIoConcurrency !== null) {
            message.effectiveIoConcurrency = object.effectiveIoConcurrency;
        }
        else {
            message.effectiveIoConcurrency = undefined;
        }
        if (object.effectiveCacheSize !== undefined &&
            object.effectiveCacheSize !== null) {
            message.effectiveCacheSize = object.effectiveCacheSize;
        }
        else {
            message.effectiveCacheSize = undefined;
        }
        return message;
    },
};
const basePostgresqlconfigset96 = {};
export const Postgresqlconfigset96 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            Postgresqlconfig96.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Postgresqlconfig96.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Postgresqlconfig96.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePostgresqlconfigset96,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Postgresqlconfig96.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Postgresqlconfig96.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Postgresqlconfig96.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...basePostgresqlconfigset96,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Postgresqlconfig96.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Postgresqlconfig96.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Postgresqlconfig96.fromJSON(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Postgresqlconfig96.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Postgresqlconfig96.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Postgresqlconfig96.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePostgresqlconfigset96,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Postgresqlconfig96.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Postgresqlconfig96.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Postgresqlconfig96.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
