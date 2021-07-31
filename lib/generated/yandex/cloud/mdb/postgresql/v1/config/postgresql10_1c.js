/* eslint-disable */
import { Int64Value, DoubleValue, BoolValue, } from '../../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.postgresql.v1.config';
export var Postgresqlconfig101c_WalLevel;
(function (Postgresqlconfig101c_WalLevel) {
    Postgresqlconfig101c_WalLevel[Postgresqlconfig101c_WalLevel["WAL_LEVEL_UNSPECIFIED"] = 0] = "WAL_LEVEL_UNSPECIFIED";
    Postgresqlconfig101c_WalLevel[Postgresqlconfig101c_WalLevel["WAL_LEVEL_REPLICA"] = 1] = "WAL_LEVEL_REPLICA";
    Postgresqlconfig101c_WalLevel[Postgresqlconfig101c_WalLevel["WAL_LEVEL_LOGICAL"] = 2] = "WAL_LEVEL_LOGICAL";
    Postgresqlconfig101c_WalLevel[Postgresqlconfig101c_WalLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_WalLevel || (Postgresqlconfig101c_WalLevel = {}));
export function postgresqlconfig101c_WalLevelFromJSON(object) {
    switch (object) {
        case 0:
        case 'WAL_LEVEL_UNSPECIFIED':
            return Postgresqlconfig101c_WalLevel.WAL_LEVEL_UNSPECIFIED;
        case 1:
        case 'WAL_LEVEL_REPLICA':
            return Postgresqlconfig101c_WalLevel.WAL_LEVEL_REPLICA;
        case 2:
        case 'WAL_LEVEL_LOGICAL':
            return Postgresqlconfig101c_WalLevel.WAL_LEVEL_LOGICAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_WalLevel.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_WalLevelToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_WalLevel.WAL_LEVEL_UNSPECIFIED:
            return 'WAL_LEVEL_UNSPECIFIED';
        case Postgresqlconfig101c_WalLevel.WAL_LEVEL_REPLICA:
            return 'WAL_LEVEL_REPLICA';
        case Postgresqlconfig101c_WalLevel.WAL_LEVEL_LOGICAL:
            return 'WAL_LEVEL_LOGICAL';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_SynchronousCommit;
(function (Postgresqlconfig101c_SynchronousCommit) {
    Postgresqlconfig101c_SynchronousCommit[Postgresqlconfig101c_SynchronousCommit["SYNCHRONOUS_COMMIT_UNSPECIFIED"] = 0] = "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    Postgresqlconfig101c_SynchronousCommit[Postgresqlconfig101c_SynchronousCommit["SYNCHRONOUS_COMMIT_ON"] = 1] = "SYNCHRONOUS_COMMIT_ON";
    Postgresqlconfig101c_SynchronousCommit[Postgresqlconfig101c_SynchronousCommit["SYNCHRONOUS_COMMIT_OFF"] = 2] = "SYNCHRONOUS_COMMIT_OFF";
    Postgresqlconfig101c_SynchronousCommit[Postgresqlconfig101c_SynchronousCommit["SYNCHRONOUS_COMMIT_LOCAL"] = 3] = "SYNCHRONOUS_COMMIT_LOCAL";
    Postgresqlconfig101c_SynchronousCommit[Postgresqlconfig101c_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_WRITE"] = 4] = "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    Postgresqlconfig101c_SynchronousCommit[Postgresqlconfig101c_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_APPLY"] = 5] = "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    Postgresqlconfig101c_SynchronousCommit[Postgresqlconfig101c_SynchronousCommit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_SynchronousCommit || (Postgresqlconfig101c_SynchronousCommit = {}));
export function postgresqlconfig101c_SynchronousCommitFromJSON(object) {
    switch (object) {
        case 0:
        case 'SYNCHRONOUS_COMMIT_UNSPECIFIED':
            return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
        case 1:
        case 'SYNCHRONOUS_COMMIT_ON':
            return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
        case 2:
        case 'SYNCHRONOUS_COMMIT_OFF':
            return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
        case 3:
        case 'SYNCHRONOUS_COMMIT_LOCAL':
            return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
        case 4:
        case 'SYNCHRONOUS_COMMIT_REMOTE_WRITE':
            return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
        case 5:
        case 'SYNCHRONOUS_COMMIT_REMOTE_APPLY':
            return Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_SynchronousCommit.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_SynchronousCommitToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
            return 'SYNCHRONOUS_COMMIT_UNSPECIFIED';
        case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
            return 'SYNCHRONOUS_COMMIT_ON';
        case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
            return 'SYNCHRONOUS_COMMIT_OFF';
        case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
            return 'SYNCHRONOUS_COMMIT_LOCAL';
        case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
            return 'SYNCHRONOUS_COMMIT_REMOTE_WRITE';
        case Postgresqlconfig101c_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
            return 'SYNCHRONOUS_COMMIT_REMOTE_APPLY';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_ConstraintExclusion;
(function (Postgresqlconfig101c_ConstraintExclusion) {
    Postgresqlconfig101c_ConstraintExclusion[Postgresqlconfig101c_ConstraintExclusion["CONSTRAINT_EXCLUSION_UNSPECIFIED"] = 0] = "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    Postgresqlconfig101c_ConstraintExclusion[Postgresqlconfig101c_ConstraintExclusion["CONSTRAINT_EXCLUSION_ON"] = 1] = "CONSTRAINT_EXCLUSION_ON";
    Postgresqlconfig101c_ConstraintExclusion[Postgresqlconfig101c_ConstraintExclusion["CONSTRAINT_EXCLUSION_OFF"] = 2] = "CONSTRAINT_EXCLUSION_OFF";
    Postgresqlconfig101c_ConstraintExclusion[Postgresqlconfig101c_ConstraintExclusion["CONSTRAINT_EXCLUSION_PARTITION"] = 3] = "CONSTRAINT_EXCLUSION_PARTITION";
    Postgresqlconfig101c_ConstraintExclusion[Postgresqlconfig101c_ConstraintExclusion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_ConstraintExclusion || (Postgresqlconfig101c_ConstraintExclusion = {}));
export function postgresqlconfig101c_ConstraintExclusionFromJSON(object) {
    switch (object) {
        case 0:
        case 'CONSTRAINT_EXCLUSION_UNSPECIFIED':
            return Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case 'CONSTRAINT_EXCLUSION_ON':
            return Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case 'CONSTRAINT_EXCLUSION_OFF':
            return Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case 'CONSTRAINT_EXCLUSION_PARTITION':
            return Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_ConstraintExclusion.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_ConstraintExclusionToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return 'CONSTRAINT_EXCLUSION_UNSPECIFIED';
        case Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return 'CONSTRAINT_EXCLUSION_ON';
        case Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return 'CONSTRAINT_EXCLUSION_OFF';
        case Postgresqlconfig101c_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return 'CONSTRAINT_EXCLUSION_PARTITION';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_ForceParallelMode;
(function (Postgresqlconfig101c_ForceParallelMode) {
    Postgresqlconfig101c_ForceParallelMode[Postgresqlconfig101c_ForceParallelMode["FORCE_PARALLEL_MODE_UNSPECIFIED"] = 0] = "FORCE_PARALLEL_MODE_UNSPECIFIED";
    Postgresqlconfig101c_ForceParallelMode[Postgresqlconfig101c_ForceParallelMode["FORCE_PARALLEL_MODE_ON"] = 1] = "FORCE_PARALLEL_MODE_ON";
    Postgresqlconfig101c_ForceParallelMode[Postgresqlconfig101c_ForceParallelMode["FORCE_PARALLEL_MODE_OFF"] = 2] = "FORCE_PARALLEL_MODE_OFF";
    Postgresqlconfig101c_ForceParallelMode[Postgresqlconfig101c_ForceParallelMode["FORCE_PARALLEL_MODE_REGRESS"] = 3] = "FORCE_PARALLEL_MODE_REGRESS";
    Postgresqlconfig101c_ForceParallelMode[Postgresqlconfig101c_ForceParallelMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_ForceParallelMode || (Postgresqlconfig101c_ForceParallelMode = {}));
export function postgresqlconfig101c_ForceParallelModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'FORCE_PARALLEL_MODE_UNSPECIFIED':
            return Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case 'FORCE_PARALLEL_MODE_ON':
            return Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case 'FORCE_PARALLEL_MODE_OFF':
            return Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case 'FORCE_PARALLEL_MODE_REGRESS':
            return Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_ForceParallelMode.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_ForceParallelModeToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return 'FORCE_PARALLEL_MODE_UNSPECIFIED';
        case Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return 'FORCE_PARALLEL_MODE_ON';
        case Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return 'FORCE_PARALLEL_MODE_OFF';
        case Postgresqlconfig101c_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return 'FORCE_PARALLEL_MODE_REGRESS';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_LogLevel;
(function (Postgresqlconfig101c_LogLevel) {
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_DEBUG5"] = 1] = "LOG_LEVEL_DEBUG5";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_DEBUG4"] = 2] = "LOG_LEVEL_DEBUG4";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_DEBUG3"] = 3] = "LOG_LEVEL_DEBUG3";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_DEBUG2"] = 4] = "LOG_LEVEL_DEBUG2";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_DEBUG1"] = 5] = "LOG_LEVEL_DEBUG1";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_LOG"] = 6] = "LOG_LEVEL_LOG";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_NOTICE"] = 7] = "LOG_LEVEL_NOTICE";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_WARNING"] = 8] = "LOG_LEVEL_WARNING";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_ERROR"] = 9] = "LOG_LEVEL_ERROR";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_FATAL"] = 10] = "LOG_LEVEL_FATAL";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["LOG_LEVEL_PANIC"] = 11] = "LOG_LEVEL_PANIC";
    Postgresqlconfig101c_LogLevel[Postgresqlconfig101c_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_LogLevel || (Postgresqlconfig101c_LogLevel = {}));
export function postgresqlconfig101c_LogLevelFromJSON(object) {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_UNSPECIFIED':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case 'LOG_LEVEL_DEBUG5':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case 'LOG_LEVEL_DEBUG4':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case 'LOG_LEVEL_DEBUG3':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case 'LOG_LEVEL_DEBUG2':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case 'LOG_LEVEL_DEBUG1':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case 'LOG_LEVEL_LOG':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case 'LOG_LEVEL_NOTICE':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case 'LOG_LEVEL_WARNING':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case 'LOG_LEVEL_ERROR':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case 'LOG_LEVEL_FATAL':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case 'LOG_LEVEL_PANIC':
            return Postgresqlconfig101c_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_LogLevel.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_LogLevelToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return 'LOG_LEVEL_UNSPECIFIED';
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG5:
            return 'LOG_LEVEL_DEBUG5';
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG4:
            return 'LOG_LEVEL_DEBUG4';
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG3:
            return 'LOG_LEVEL_DEBUG3';
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG2:
            return 'LOG_LEVEL_DEBUG2';
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_DEBUG1:
            return 'LOG_LEVEL_DEBUG1';
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_LOG:
            return 'LOG_LEVEL_LOG';
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_NOTICE:
            return 'LOG_LEVEL_NOTICE';
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_WARNING:
            return 'LOG_LEVEL_WARNING';
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_ERROR:
            return 'LOG_LEVEL_ERROR';
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_FATAL:
            return 'LOG_LEVEL_FATAL';
        case Postgresqlconfig101c_LogLevel.LOG_LEVEL_PANIC:
            return 'LOG_LEVEL_PANIC';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_LogErrorVerbosity;
(function (Postgresqlconfig101c_LogErrorVerbosity) {
    Postgresqlconfig101c_LogErrorVerbosity[Postgresqlconfig101c_LogErrorVerbosity["LOG_ERROR_VERBOSITY_UNSPECIFIED"] = 0] = "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    Postgresqlconfig101c_LogErrorVerbosity[Postgresqlconfig101c_LogErrorVerbosity["LOG_ERROR_VERBOSITY_TERSE"] = 1] = "LOG_ERROR_VERBOSITY_TERSE";
    Postgresqlconfig101c_LogErrorVerbosity[Postgresqlconfig101c_LogErrorVerbosity["LOG_ERROR_VERBOSITY_DEFAULT"] = 2] = "LOG_ERROR_VERBOSITY_DEFAULT";
    Postgresqlconfig101c_LogErrorVerbosity[Postgresqlconfig101c_LogErrorVerbosity["LOG_ERROR_VERBOSITY_VERBOSE"] = 3] = "LOG_ERROR_VERBOSITY_VERBOSE";
    Postgresqlconfig101c_LogErrorVerbosity[Postgresqlconfig101c_LogErrorVerbosity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_LogErrorVerbosity || (Postgresqlconfig101c_LogErrorVerbosity = {}));
export function postgresqlconfig101c_LogErrorVerbosityFromJSON(object) {
    switch (object) {
        case 0:
        case 'LOG_ERROR_VERBOSITY_UNSPECIFIED':
            return Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case 'LOG_ERROR_VERBOSITY_TERSE':
            return Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case 'LOG_ERROR_VERBOSITY_DEFAULT':
            return Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case 'LOG_ERROR_VERBOSITY_VERBOSE':
            return Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_LogErrorVerbosity.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_LogErrorVerbosityToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return 'LOG_ERROR_VERBOSITY_UNSPECIFIED';
        case Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return 'LOG_ERROR_VERBOSITY_TERSE';
        case Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return 'LOG_ERROR_VERBOSITY_DEFAULT';
        case Postgresqlconfig101c_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return 'LOG_ERROR_VERBOSITY_VERBOSE';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_LogStatement;
(function (Postgresqlconfig101c_LogStatement) {
    Postgresqlconfig101c_LogStatement[Postgresqlconfig101c_LogStatement["LOG_STATEMENT_UNSPECIFIED"] = 0] = "LOG_STATEMENT_UNSPECIFIED";
    Postgresqlconfig101c_LogStatement[Postgresqlconfig101c_LogStatement["LOG_STATEMENT_NONE"] = 1] = "LOG_STATEMENT_NONE";
    Postgresqlconfig101c_LogStatement[Postgresqlconfig101c_LogStatement["LOG_STATEMENT_DDL"] = 2] = "LOG_STATEMENT_DDL";
    Postgresqlconfig101c_LogStatement[Postgresqlconfig101c_LogStatement["LOG_STATEMENT_MOD"] = 3] = "LOG_STATEMENT_MOD";
    Postgresqlconfig101c_LogStatement[Postgresqlconfig101c_LogStatement["LOG_STATEMENT_ALL"] = 4] = "LOG_STATEMENT_ALL";
    Postgresqlconfig101c_LogStatement[Postgresqlconfig101c_LogStatement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_LogStatement || (Postgresqlconfig101c_LogStatement = {}));
export function postgresqlconfig101c_LogStatementFromJSON(object) {
    switch (object) {
        case 0:
        case 'LOG_STATEMENT_UNSPECIFIED':
            return Postgresqlconfig101c_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case 'LOG_STATEMENT_NONE':
            return Postgresqlconfig101c_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case 'LOG_STATEMENT_DDL':
            return Postgresqlconfig101c_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case 'LOG_STATEMENT_MOD':
            return Postgresqlconfig101c_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case 'LOG_STATEMENT_ALL':
            return Postgresqlconfig101c_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_LogStatement.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_LogStatementToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return 'LOG_STATEMENT_UNSPECIFIED';
        case Postgresqlconfig101c_LogStatement.LOG_STATEMENT_NONE:
            return 'LOG_STATEMENT_NONE';
        case Postgresqlconfig101c_LogStatement.LOG_STATEMENT_DDL:
            return 'LOG_STATEMENT_DDL';
        case Postgresqlconfig101c_LogStatement.LOG_STATEMENT_MOD:
            return 'LOG_STATEMENT_MOD';
        case Postgresqlconfig101c_LogStatement.LOG_STATEMENT_ALL:
            return 'LOG_STATEMENT_ALL';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_TransactionIsolation;
(function (Postgresqlconfig101c_TransactionIsolation) {
    Postgresqlconfig101c_TransactionIsolation[Postgresqlconfig101c_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    Postgresqlconfig101c_TransactionIsolation[Postgresqlconfig101c_TransactionIsolation["TRANSACTION_ISOLATION_READ_UNCOMMITTED"] = 1] = "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    Postgresqlconfig101c_TransactionIsolation[Postgresqlconfig101c_TransactionIsolation["TRANSACTION_ISOLATION_READ_COMMITTED"] = 2] = "TRANSACTION_ISOLATION_READ_COMMITTED";
    Postgresqlconfig101c_TransactionIsolation[Postgresqlconfig101c_TransactionIsolation["TRANSACTION_ISOLATION_REPEATABLE_READ"] = 3] = "TRANSACTION_ISOLATION_REPEATABLE_READ";
    Postgresqlconfig101c_TransactionIsolation[Postgresqlconfig101c_TransactionIsolation["TRANSACTION_ISOLATION_SERIALIZABLE"] = 4] = "TRANSACTION_ISOLATION_SERIALIZABLE";
    Postgresqlconfig101c_TransactionIsolation[Postgresqlconfig101c_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_TransactionIsolation || (Postgresqlconfig101c_TransactionIsolation = {}));
export function postgresqlconfig101c_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case 'TRANSACTION_ISOLATION_UNSPECIFIED':
            return Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case 'TRANSACTION_ISOLATION_READ_UNCOMMITTED':
            return Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case 'TRANSACTION_ISOLATION_READ_COMMITTED':
            return Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case 'TRANSACTION_ISOLATION_REPEATABLE_READ':
            return Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case 'TRANSACTION_ISOLATION_SERIALIZABLE':
            return Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_TransactionIsolation.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_TransactionIsolationToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return 'TRANSACTION_ISOLATION_UNSPECIFIED';
        case Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return 'TRANSACTION_ISOLATION_READ_UNCOMMITTED';
        case Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return 'TRANSACTION_ISOLATION_READ_COMMITTED';
        case Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return 'TRANSACTION_ISOLATION_REPEATABLE_READ';
        case Postgresqlconfig101c_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return 'TRANSACTION_ISOLATION_SERIALIZABLE';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_ByteaOutput;
(function (Postgresqlconfig101c_ByteaOutput) {
    Postgresqlconfig101c_ByteaOutput[Postgresqlconfig101c_ByteaOutput["BYTEA_OUTPUT_UNSPECIFIED"] = 0] = "BYTEA_OUTPUT_UNSPECIFIED";
    Postgresqlconfig101c_ByteaOutput[Postgresqlconfig101c_ByteaOutput["BYTEA_OUTPUT_HEX"] = 1] = "BYTEA_OUTPUT_HEX";
    Postgresqlconfig101c_ByteaOutput[Postgresqlconfig101c_ByteaOutput["BYTEA_OUTPUT_ESCAPED"] = 2] = "BYTEA_OUTPUT_ESCAPED";
    Postgresqlconfig101c_ByteaOutput[Postgresqlconfig101c_ByteaOutput["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_ByteaOutput || (Postgresqlconfig101c_ByteaOutput = {}));
export function postgresqlconfig101c_ByteaOutputFromJSON(object) {
    switch (object) {
        case 0:
        case 'BYTEA_OUTPUT_UNSPECIFIED':
            return Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case 'BYTEA_OUTPUT_HEX':
            return Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case 'BYTEA_OUTPUT_ESCAPED':
            return Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_ByteaOutput.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_ByteaOutputToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return 'BYTEA_OUTPUT_UNSPECIFIED';
        case Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_HEX:
            return 'BYTEA_OUTPUT_HEX';
        case Postgresqlconfig101c_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return 'BYTEA_OUTPUT_ESCAPED';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_XmlBinary;
(function (Postgresqlconfig101c_XmlBinary) {
    Postgresqlconfig101c_XmlBinary[Postgresqlconfig101c_XmlBinary["XML_BINARY_UNSPECIFIED"] = 0] = "XML_BINARY_UNSPECIFIED";
    Postgresqlconfig101c_XmlBinary[Postgresqlconfig101c_XmlBinary["XML_BINARY_BASE64"] = 1] = "XML_BINARY_BASE64";
    Postgresqlconfig101c_XmlBinary[Postgresqlconfig101c_XmlBinary["XML_BINARY_HEX"] = 2] = "XML_BINARY_HEX";
    Postgresqlconfig101c_XmlBinary[Postgresqlconfig101c_XmlBinary["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_XmlBinary || (Postgresqlconfig101c_XmlBinary = {}));
export function postgresqlconfig101c_XmlBinaryFromJSON(object) {
    switch (object) {
        case 0:
        case 'XML_BINARY_UNSPECIFIED':
            return Postgresqlconfig101c_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case 'XML_BINARY_BASE64':
            return Postgresqlconfig101c_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case 'XML_BINARY_HEX':
            return Postgresqlconfig101c_XmlBinary.XML_BINARY_HEX;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_XmlBinary.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_XmlBinaryToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_XmlBinary.XML_BINARY_UNSPECIFIED:
            return 'XML_BINARY_UNSPECIFIED';
        case Postgresqlconfig101c_XmlBinary.XML_BINARY_BASE64:
            return 'XML_BINARY_BASE64';
        case Postgresqlconfig101c_XmlBinary.XML_BINARY_HEX:
            return 'XML_BINARY_HEX';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_XmlOption;
(function (Postgresqlconfig101c_XmlOption) {
    Postgresqlconfig101c_XmlOption[Postgresqlconfig101c_XmlOption["XML_OPTION_UNSPECIFIED"] = 0] = "XML_OPTION_UNSPECIFIED";
    Postgresqlconfig101c_XmlOption[Postgresqlconfig101c_XmlOption["XML_OPTION_DOCUMENT"] = 1] = "XML_OPTION_DOCUMENT";
    Postgresqlconfig101c_XmlOption[Postgresqlconfig101c_XmlOption["XML_OPTION_CONTENT"] = 2] = "XML_OPTION_CONTENT";
    Postgresqlconfig101c_XmlOption[Postgresqlconfig101c_XmlOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_XmlOption || (Postgresqlconfig101c_XmlOption = {}));
export function postgresqlconfig101c_XmlOptionFromJSON(object) {
    switch (object) {
        case 0:
        case 'XML_OPTION_UNSPECIFIED':
            return Postgresqlconfig101c_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case 'XML_OPTION_DOCUMENT':
            return Postgresqlconfig101c_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case 'XML_OPTION_CONTENT':
            return Postgresqlconfig101c_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_XmlOption.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_XmlOptionToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_XmlOption.XML_OPTION_UNSPECIFIED:
            return 'XML_OPTION_UNSPECIFIED';
        case Postgresqlconfig101c_XmlOption.XML_OPTION_DOCUMENT:
            return 'XML_OPTION_DOCUMENT';
        case Postgresqlconfig101c_XmlOption.XML_OPTION_CONTENT:
            return 'XML_OPTION_CONTENT';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_BackslashQuote;
(function (Postgresqlconfig101c_BackslashQuote) {
    Postgresqlconfig101c_BackslashQuote[Postgresqlconfig101c_BackslashQuote["BACKSLASH_QUOTE_UNSPECIFIED"] = 0] = "BACKSLASH_QUOTE_UNSPECIFIED";
    Postgresqlconfig101c_BackslashQuote[Postgresqlconfig101c_BackslashQuote["BACKSLASH_QUOTE"] = 1] = "BACKSLASH_QUOTE";
    Postgresqlconfig101c_BackslashQuote[Postgresqlconfig101c_BackslashQuote["BACKSLASH_QUOTE_ON"] = 2] = "BACKSLASH_QUOTE_ON";
    Postgresqlconfig101c_BackslashQuote[Postgresqlconfig101c_BackslashQuote["BACKSLASH_QUOTE_OFF"] = 3] = "BACKSLASH_QUOTE_OFF";
    Postgresqlconfig101c_BackslashQuote[Postgresqlconfig101c_BackslashQuote["BACKSLASH_QUOTE_SAFE_ENCODING"] = 4] = "BACKSLASH_QUOTE_SAFE_ENCODING";
    Postgresqlconfig101c_BackslashQuote[Postgresqlconfig101c_BackslashQuote["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_BackslashQuote || (Postgresqlconfig101c_BackslashQuote = {}));
export function postgresqlconfig101c_BackslashQuoteFromJSON(object) {
    switch (object) {
        case 0:
        case 'BACKSLASH_QUOTE_UNSPECIFIED':
            return Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case 'BACKSLASH_QUOTE':
            return Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case 'BACKSLASH_QUOTE_ON':
            return Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case 'BACKSLASH_QUOTE_OFF':
            return Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case 'BACKSLASH_QUOTE_SAFE_ENCODING':
            return Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_BackslashQuote.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_BackslashQuoteToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return 'BACKSLASH_QUOTE_UNSPECIFIED';
        case Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE:
            return 'BACKSLASH_QUOTE';
        case Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_ON:
            return 'BACKSLASH_QUOTE_ON';
        case Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return 'BACKSLASH_QUOTE_OFF';
        case Postgresqlconfig101c_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return 'BACKSLASH_QUOTE_SAFE_ENCODING';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_PgHintPlanDebugPrint;
(function (Postgresqlconfig101c_PgHintPlanDebugPrint) {
    Postgresqlconfig101c_PgHintPlanDebugPrint[Postgresqlconfig101c_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED"] = 0] = "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED";
    Postgresqlconfig101c_PgHintPlanDebugPrint[Postgresqlconfig101c_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_OFF"] = 1] = "PG_HINT_PLAN_DEBUG_PRINT_OFF";
    Postgresqlconfig101c_PgHintPlanDebugPrint[Postgresqlconfig101c_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_ON"] = 2] = "PG_HINT_PLAN_DEBUG_PRINT_ON";
    Postgresqlconfig101c_PgHintPlanDebugPrint[Postgresqlconfig101c_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_DETAILED"] = 3] = "PG_HINT_PLAN_DEBUG_PRINT_DETAILED";
    Postgresqlconfig101c_PgHintPlanDebugPrint[Postgresqlconfig101c_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_VERBOSE"] = 4] = "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE";
    Postgresqlconfig101c_PgHintPlanDebugPrint[Postgresqlconfig101c_PgHintPlanDebugPrint["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_PgHintPlanDebugPrint || (Postgresqlconfig101c_PgHintPlanDebugPrint = {}));
export function postgresqlconfig101c_PgHintPlanDebugPrintFromJSON(object) {
    switch (object) {
        case 0:
        case 'PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED':
            return Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED;
        case 1:
        case 'PG_HINT_PLAN_DEBUG_PRINT_OFF':
            return Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF;
        case 2:
        case 'PG_HINT_PLAN_DEBUG_PRINT_ON':
            return Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON;
        case 3:
        case 'PG_HINT_PLAN_DEBUG_PRINT_DETAILED':
            return Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED;
        case 4:
        case 'PG_HINT_PLAN_DEBUG_PRINT_VERBOSE':
            return Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_PgHintPlanDebugPrint.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_PgHintPlanDebugPrintToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED:
            return 'PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED';
        case Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF:
            return 'PG_HINT_PLAN_DEBUG_PRINT_OFF';
        case Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON:
            return 'PG_HINT_PLAN_DEBUG_PRINT_ON';
        case Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED:
            return 'PG_HINT_PLAN_DEBUG_PRINT_DETAILED';
        case Postgresqlconfig101c_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE:
            return 'PG_HINT_PLAN_DEBUG_PRINT_VERBOSE';
        default:
            return 'UNKNOWN';
    }
}
export var Postgresqlconfig101c_SharedPreloadLibraries;
(function (Postgresqlconfig101c_SharedPreloadLibraries) {
    Postgresqlconfig101c_SharedPreloadLibraries[Postgresqlconfig101c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_UNSPECIFIED"] = 0] = "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED";
    Postgresqlconfig101c_SharedPreloadLibraries[Postgresqlconfig101c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN"] = 1] = "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN";
    Postgresqlconfig101c_SharedPreloadLibraries[Postgresqlconfig101c_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN"] = 2] = "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN";
    Postgresqlconfig101c_SharedPreloadLibraries[Postgresqlconfig101c_SharedPreloadLibraries["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Postgresqlconfig101c_SharedPreloadLibraries || (Postgresqlconfig101c_SharedPreloadLibraries = {}));
export function postgresqlconfig101c_SharedPreloadLibrariesFromJSON(object) {
    switch (object) {
        case 0:
        case 'SHARED_PRELOAD_LIBRARIES_UNSPECIFIED':
            return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED;
        case 1:
        case 'SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN':
            return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN;
        case 2:
        case 'SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN':
            return Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Postgresqlconfig101c_SharedPreloadLibraries.UNRECOGNIZED;
    }
}
export function postgresqlconfig101c_SharedPreloadLibrariesToJSON(object) {
    switch (object) {
        case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED:
            return 'SHARED_PRELOAD_LIBRARIES_UNSPECIFIED';
        case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN:
            return 'SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN';
        case Postgresqlconfig101c_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN:
            return 'SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN';
        default:
            return 'UNKNOWN';
    }
}
const basePostgresqlconfig101c = {
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
    timezone: '',
    sharedPreloadLibraries: 0,
    pgHintPlanDebugPrint: 0,
    pgHintPlanMessageLevel: 0,
};
export const Postgresqlconfig101c = {
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
        if (message.autovacuumMaxWorkers !== undefined) {
            Int64Value.encode({ value: message.autovacuumMaxWorkers }, writer.uint32(586).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostDelay !== undefined) {
            Int64Value.encode({ value: message.autovacuumVacuumCostDelay }, writer.uint32(594).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostLimit !== undefined) {
            Int64Value.encode({ value: message.autovacuumVacuumCostLimit }, writer.uint32(602).fork()).ldelim();
        }
        if (message.autovacuumNaptime !== undefined) {
            Int64Value.encode({ value: message.autovacuumNaptime }, writer.uint32(610).fork()).ldelim();
        }
        if (message.archiveTimeout !== undefined) {
            Int64Value.encode({ value: message.archiveTimeout }, writer.uint32(618).fork()).ldelim();
        }
        if (message.trackActivityQuerySize !== undefined) {
            Int64Value.encode({ value: message.trackActivityQuerySize }, writer.uint32(626).fork()).ldelim();
        }
        if (message.enableBitmapscan !== undefined) {
            BoolValue.encode({ value: message.enableBitmapscan }, writer.uint32(642).fork()).ldelim();
        }
        if (message.enableHashagg !== undefined) {
            BoolValue.encode({ value: message.enableHashagg }, writer.uint32(650).fork()).ldelim();
        }
        if (message.enableHashjoin !== undefined) {
            BoolValue.encode({ value: message.enableHashjoin }, writer.uint32(658).fork()).ldelim();
        }
        if (message.enableIndexscan !== undefined) {
            BoolValue.encode({ value: message.enableIndexscan }, writer.uint32(666).fork()).ldelim();
        }
        if (message.enableIndexonlyscan !== undefined) {
            BoolValue.encode({ value: message.enableIndexonlyscan }, writer.uint32(674).fork()).ldelim();
        }
        if (message.enableMaterial !== undefined) {
            BoolValue.encode({ value: message.enableMaterial }, writer.uint32(682).fork()).ldelim();
        }
        if (message.enableMergejoin !== undefined) {
            BoolValue.encode({ value: message.enableMergejoin }, writer.uint32(690).fork()).ldelim();
        }
        if (message.enableNestloop !== undefined) {
            BoolValue.encode({ value: message.enableNestloop }, writer.uint32(698).fork()).ldelim();
        }
        if (message.enableSeqscan !== undefined) {
            BoolValue.encode({ value: message.enableSeqscan }, writer.uint32(706).fork()).ldelim();
        }
        if (message.enableSort !== undefined) {
            BoolValue.encode({ value: message.enableSort }, writer.uint32(714).fork()).ldelim();
        }
        if (message.enableTidscan !== undefined) {
            BoolValue.encode({ value: message.enableTidscan }, writer.uint32(722).fork()).ldelim();
        }
        if (message.maxWorkerProcesses !== undefined) {
            Int64Value.encode({ value: message.maxWorkerProcesses }, writer.uint32(730).fork()).ldelim();
        }
        if (message.maxParallelWorkers !== undefined) {
            Int64Value.encode({ value: message.maxParallelWorkers }, writer.uint32(738).fork()).ldelim();
        }
        if (message.maxParallelWorkersPerGather !== undefined) {
            Int64Value.encode({ value: message.maxParallelWorkersPerGather }, writer.uint32(746).fork()).ldelim();
        }
        if (message.autovacuumVacuumScaleFactor !== undefined) {
            DoubleValue.encode({ value: message.autovacuumVacuumScaleFactor }, writer.uint32(754).fork()).ldelim();
        }
        if (message.autovacuumAnalyzeScaleFactor !== undefined) {
            DoubleValue.encode({ value: message.autovacuumAnalyzeScaleFactor }, writer.uint32(762).fork()).ldelim();
        }
        if (message.defaultTransactionReadOnly !== undefined) {
            BoolValue.encode({ value: message.defaultTransactionReadOnly }, writer.uint32(770).fork()).ldelim();
        }
        if (message.timezone !== '') {
            writer.uint32(778).string(message.timezone);
        }
        if (message.effectiveIoConcurrency !== undefined) {
            Int64Value.encode({ value: message.effectiveIoConcurrency }, writer.uint32(786).fork()).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            Int64Value.encode({ value: message.effectiveCacheSize }, writer.uint32(794).fork()).ldelim();
        }
        writer.uint32(802).fork();
        for (const v of message.sharedPreloadLibraries) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.autoExplainLogMinDuration !== undefined) {
            Int64Value.encode({ value: message.autoExplainLogMinDuration }, writer.uint32(810).fork()).ldelim();
        }
        if (message.autoExplainLogAnalyze !== undefined) {
            BoolValue.encode({ value: message.autoExplainLogAnalyze }, writer.uint32(818).fork()).ldelim();
        }
        if (message.autoExplainLogBuffers !== undefined) {
            BoolValue.encode({ value: message.autoExplainLogBuffers }, writer.uint32(826).fork()).ldelim();
        }
        if (message.autoExplainLogTiming !== undefined) {
            BoolValue.encode({ value: message.autoExplainLogTiming }, writer.uint32(834).fork()).ldelim();
        }
        if (message.autoExplainLogTriggers !== undefined) {
            BoolValue.encode({ value: message.autoExplainLogTriggers }, writer.uint32(842).fork()).ldelim();
        }
        if (message.autoExplainLogVerbose !== undefined) {
            BoolValue.encode({ value: message.autoExplainLogVerbose }, writer.uint32(850).fork()).ldelim();
        }
        if (message.autoExplainLogNestedStatements !== undefined) {
            BoolValue.encode({ value: message.autoExplainLogNestedStatements }, writer.uint32(858).fork()).ldelim();
        }
        if (message.autoExplainSampleRate !== undefined) {
            DoubleValue.encode({ value: message.autoExplainSampleRate }, writer.uint32(866).fork()).ldelim();
        }
        if (message.pgHintPlanEnableHint !== undefined) {
            BoolValue.encode({ value: message.pgHintPlanEnableHint }, writer.uint32(874).fork()).ldelim();
        }
        if (message.pgHintPlanEnableHintTable !== undefined) {
            BoolValue.encode({ value: message.pgHintPlanEnableHintTable }, writer.uint32(882).fork()).ldelim();
        }
        if (message.pgHintPlanDebugPrint !== 0) {
            writer.uint32(888).int32(message.pgHintPlanDebugPrint);
        }
        if (message.pgHintPlanMessageLevel !== 0) {
            writer.uint32(896).int32(message.pgHintPlanMessageLevel);
        }
        if (message.onlineAnalyzeEnable !== undefined) {
            BoolValue.encode({ value: message.onlineAnalyzeEnable }, writer.uint32(906).fork()).ldelim();
        }
        if (message.plantunerFixEmptyTable !== undefined) {
            BoolValue.encode({ value: message.plantunerFixEmptyTable }, writer.uint32(914).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresqlconfig101c };
        message.sharedPreloadLibraries = [];
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
                    message.autovacuumMaxWorkers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 74:
                    message.autovacuumVacuumCostDelay = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 75:
                    message.autovacuumVacuumCostLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 76:
                    message.autovacuumNaptime = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 77:
                    message.archiveTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 78:
                    message.trackActivityQuerySize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 80:
                    message.enableBitmapscan = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 81:
                    message.enableHashagg = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 82:
                    message.enableHashjoin = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 83:
                    message.enableIndexscan = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 84:
                    message.enableIndexonlyscan = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 85:
                    message.enableMaterial = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 86:
                    message.enableMergejoin = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 87:
                    message.enableNestloop = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 88:
                    message.enableSeqscan = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 89:
                    message.enableSort = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 90:
                    message.enableTidscan = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 91:
                    message.maxWorkerProcesses = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 92:
                    message.maxParallelWorkers = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 93:
                    message.maxParallelWorkersPerGather = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 94:
                    message.autovacuumVacuumScaleFactor = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 95:
                    message.autovacuumAnalyzeScaleFactor = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 96:
                    message.defaultTransactionReadOnly = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 97:
                    message.timezone = reader.string();
                    break;
                case 98:
                    message.effectiveIoConcurrency = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 99:
                    message.effectiveCacheSize = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sharedPreloadLibraries.push(reader.int32());
                        }
                    }
                    else {
                        message.sharedPreloadLibraries.push(reader.int32());
                    }
                    break;
                case 101:
                    message.autoExplainLogMinDuration = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 102:
                    message.autoExplainLogAnalyze = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 103:
                    message.autoExplainLogBuffers = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 104:
                    message.autoExplainLogTiming = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 105:
                    message.autoExplainLogTriggers = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 106:
                    message.autoExplainLogVerbose = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 107:
                    message.autoExplainLogNestedStatements = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 108:
                    message.autoExplainSampleRate = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 109:
                    message.pgHintPlanEnableHint = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 110:
                    message.pgHintPlanEnableHintTable = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 111:
                    message.pgHintPlanDebugPrint = reader.int32();
                    break;
                case 112:
                    message.pgHintPlanMessageLevel = reader.int32();
                    break;
                case 113:
                    message.onlineAnalyzeEnable = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 114:
                    message.plantunerFixEmptyTable = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePostgresqlconfig101c };
        message.sharedPreloadLibraries = [];
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
            message.walLevel = postgresqlconfig101c_WalLevelFromJSON(object.walLevel);
        }
        else {
            message.walLevel = 0;
        }
        if (object.synchronousCommit !== undefined &&
            object.synchronousCommit !== null) {
            message.synchronousCommit =
                postgresqlconfig101c_SynchronousCommitFromJSON(object.synchronousCommit);
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
                postgresqlconfig101c_ConstraintExclusionFromJSON(object.constraintExclusion);
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
                postgresqlconfig101c_ForceParallelModeFromJSON(object.forceParallelMode);
        }
        else {
            message.forceParallelMode = 0;
        }
        if (object.clientMinMessages !== undefined &&
            object.clientMinMessages !== null) {
            message.clientMinMessages = postgresqlconfig101c_LogLevelFromJSON(object.clientMinMessages);
        }
        else {
            message.clientMinMessages = 0;
        }
        if (object.logMinMessages !== undefined &&
            object.logMinMessages !== null) {
            message.logMinMessages = postgresqlconfig101c_LogLevelFromJSON(object.logMinMessages);
        }
        else {
            message.logMinMessages = 0;
        }
        if (object.logMinErrorStatement !== undefined &&
            object.logMinErrorStatement !== null) {
            message.logMinErrorStatement =
                postgresqlconfig101c_LogLevelFromJSON(object.logMinErrorStatement);
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
                postgresqlconfig101c_LogErrorVerbosityFromJSON(object.logErrorVerbosity);
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
            message.logStatement = postgresqlconfig101c_LogStatementFromJSON(object.logStatement);
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
                postgresqlconfig101c_TransactionIsolationFromJSON(object.defaultTransactionIsolation);
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
            message.byteaOutput = postgresqlconfig101c_ByteaOutputFromJSON(object.byteaOutput);
        }
        else {
            message.byteaOutput = 0;
        }
        if (object.xmlbinary !== undefined && object.xmlbinary !== null) {
            message.xmlbinary = postgresqlconfig101c_XmlBinaryFromJSON(object.xmlbinary);
        }
        else {
            message.xmlbinary = 0;
        }
        if (object.xmloption !== undefined && object.xmloption !== null) {
            message.xmloption = postgresqlconfig101c_XmlOptionFromJSON(object.xmloption);
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
            message.backslashQuote =
                postgresqlconfig101c_BackslashQuoteFromJSON(object.backslashQuote);
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
        if (object.enableBitmapscan !== undefined &&
            object.enableBitmapscan !== null) {
            message.enableBitmapscan = Boolean(object.enableBitmapscan);
        }
        else {
            message.enableBitmapscan = undefined;
        }
        if (object.enableHashagg !== undefined &&
            object.enableHashagg !== null) {
            message.enableHashagg = Boolean(object.enableHashagg);
        }
        else {
            message.enableHashagg = undefined;
        }
        if (object.enableHashjoin !== undefined &&
            object.enableHashjoin !== null) {
            message.enableHashjoin = Boolean(object.enableHashjoin);
        }
        else {
            message.enableHashjoin = undefined;
        }
        if (object.enableIndexscan !== undefined &&
            object.enableIndexscan !== null) {
            message.enableIndexscan = Boolean(object.enableIndexscan);
        }
        else {
            message.enableIndexscan = undefined;
        }
        if (object.enableIndexonlyscan !== undefined &&
            object.enableIndexonlyscan !== null) {
            message.enableIndexonlyscan = Boolean(object.enableIndexonlyscan);
        }
        else {
            message.enableIndexonlyscan = undefined;
        }
        if (object.enableMaterial !== undefined &&
            object.enableMaterial !== null) {
            message.enableMaterial = Boolean(object.enableMaterial);
        }
        else {
            message.enableMaterial = undefined;
        }
        if (object.enableMergejoin !== undefined &&
            object.enableMergejoin !== null) {
            message.enableMergejoin = Boolean(object.enableMergejoin);
        }
        else {
            message.enableMergejoin = undefined;
        }
        if (object.enableNestloop !== undefined &&
            object.enableNestloop !== null) {
            message.enableNestloop = Boolean(object.enableNestloop);
        }
        else {
            message.enableNestloop = undefined;
        }
        if (object.enableSeqscan !== undefined &&
            object.enableSeqscan !== null) {
            message.enableSeqscan = Boolean(object.enableSeqscan);
        }
        else {
            message.enableSeqscan = undefined;
        }
        if (object.enableSort !== undefined && object.enableSort !== null) {
            message.enableSort = Boolean(object.enableSort);
        }
        else {
            message.enableSort = undefined;
        }
        if (object.enableTidscan !== undefined &&
            object.enableTidscan !== null) {
            message.enableTidscan = Boolean(object.enableTidscan);
        }
        else {
            message.enableTidscan = undefined;
        }
        if (object.maxWorkerProcesses !== undefined &&
            object.maxWorkerProcesses !== null) {
            message.maxWorkerProcesses = Number(object.maxWorkerProcesses);
        }
        else {
            message.maxWorkerProcesses = undefined;
        }
        if (object.maxParallelWorkers !== undefined &&
            object.maxParallelWorkers !== null) {
            message.maxParallelWorkers = Number(object.maxParallelWorkers);
        }
        else {
            message.maxParallelWorkers = undefined;
        }
        if (object.maxParallelWorkersPerGather !== undefined &&
            object.maxParallelWorkersPerGather !== null) {
            message.maxParallelWorkersPerGather = Number(object.maxParallelWorkersPerGather);
        }
        else {
            message.maxParallelWorkersPerGather = undefined;
        }
        if (object.autovacuumVacuumScaleFactor !== undefined &&
            object.autovacuumVacuumScaleFactor !== null) {
            message.autovacuumVacuumScaleFactor = Number(object.autovacuumVacuumScaleFactor);
        }
        else {
            message.autovacuumVacuumScaleFactor = undefined;
        }
        if (object.autovacuumAnalyzeScaleFactor !== undefined &&
            object.autovacuumAnalyzeScaleFactor !== null) {
            message.autovacuumAnalyzeScaleFactor = Number(object.autovacuumAnalyzeScaleFactor);
        }
        else {
            message.autovacuumAnalyzeScaleFactor = undefined;
        }
        if (object.defaultTransactionReadOnly !== undefined &&
            object.defaultTransactionReadOnly !== null) {
            message.defaultTransactionReadOnly = Boolean(object.defaultTransactionReadOnly);
        }
        else {
            message.defaultTransactionReadOnly = undefined;
        }
        if (object.timezone !== undefined && object.timezone !== null) {
            message.timezone = String(object.timezone);
        }
        else {
            message.timezone = '';
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
        if (object.sharedPreloadLibraries !== undefined &&
            object.sharedPreloadLibraries !== null) {
            for (const e of object.sharedPreloadLibraries) {
                message.sharedPreloadLibraries.push(postgresqlconfig101c_SharedPreloadLibrariesFromJSON(e));
            }
        }
        if (object.autoExplainLogMinDuration !== undefined &&
            object.autoExplainLogMinDuration !== null) {
            message.autoExplainLogMinDuration = Number(object.autoExplainLogMinDuration);
        }
        else {
            message.autoExplainLogMinDuration = undefined;
        }
        if (object.autoExplainLogAnalyze !== undefined &&
            object.autoExplainLogAnalyze !== null) {
            message.autoExplainLogAnalyze = Boolean(object.autoExplainLogAnalyze);
        }
        else {
            message.autoExplainLogAnalyze = undefined;
        }
        if (object.autoExplainLogBuffers !== undefined &&
            object.autoExplainLogBuffers !== null) {
            message.autoExplainLogBuffers = Boolean(object.autoExplainLogBuffers);
        }
        else {
            message.autoExplainLogBuffers = undefined;
        }
        if (object.autoExplainLogTiming !== undefined &&
            object.autoExplainLogTiming !== null) {
            message.autoExplainLogTiming = Boolean(object.autoExplainLogTiming);
        }
        else {
            message.autoExplainLogTiming = undefined;
        }
        if (object.autoExplainLogTriggers !== undefined &&
            object.autoExplainLogTriggers !== null) {
            message.autoExplainLogTriggers = Boolean(object.autoExplainLogTriggers);
        }
        else {
            message.autoExplainLogTriggers = undefined;
        }
        if (object.autoExplainLogVerbose !== undefined &&
            object.autoExplainLogVerbose !== null) {
            message.autoExplainLogVerbose = Boolean(object.autoExplainLogVerbose);
        }
        else {
            message.autoExplainLogVerbose = undefined;
        }
        if (object.autoExplainLogNestedStatements !== undefined &&
            object.autoExplainLogNestedStatements !== null) {
            message.autoExplainLogNestedStatements = Boolean(object.autoExplainLogNestedStatements);
        }
        else {
            message.autoExplainLogNestedStatements = undefined;
        }
        if (object.autoExplainSampleRate !== undefined &&
            object.autoExplainSampleRate !== null) {
            message.autoExplainSampleRate = Number(object.autoExplainSampleRate);
        }
        else {
            message.autoExplainSampleRate = undefined;
        }
        if (object.pgHintPlanEnableHint !== undefined &&
            object.pgHintPlanEnableHint !== null) {
            message.pgHintPlanEnableHint = Boolean(object.pgHintPlanEnableHint);
        }
        else {
            message.pgHintPlanEnableHint = undefined;
        }
        if (object.pgHintPlanEnableHintTable !== undefined &&
            object.pgHintPlanEnableHintTable !== null) {
            message.pgHintPlanEnableHintTable = Boolean(object.pgHintPlanEnableHintTable);
        }
        else {
            message.pgHintPlanEnableHintTable = undefined;
        }
        if (object.pgHintPlanDebugPrint !== undefined &&
            object.pgHintPlanDebugPrint !== null) {
            message.pgHintPlanDebugPrint =
                postgresqlconfig101c_PgHintPlanDebugPrintFromJSON(object.pgHintPlanDebugPrint);
        }
        else {
            message.pgHintPlanDebugPrint = 0;
        }
        if (object.pgHintPlanMessageLevel !== undefined &&
            object.pgHintPlanMessageLevel !== null) {
            message.pgHintPlanMessageLevel =
                postgresqlconfig101c_LogLevelFromJSON(object.pgHintPlanMessageLevel);
        }
        else {
            message.pgHintPlanMessageLevel = 0;
        }
        if (object.onlineAnalyzeEnable !== undefined &&
            object.onlineAnalyzeEnable !== null) {
            message.onlineAnalyzeEnable = Boolean(object.onlineAnalyzeEnable);
        }
        else {
            message.onlineAnalyzeEnable = undefined;
        }
        if (object.plantunerFixEmptyTable !== undefined &&
            object.plantunerFixEmptyTable !== null) {
            message.plantunerFixEmptyTable = Boolean(object.plantunerFixEmptyTable);
        }
        else {
            message.plantunerFixEmptyTable = undefined;
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
            (obj.walLevel = postgresqlconfig101c_WalLevelToJSON(message.walLevel));
        message.synchronousCommit !== undefined &&
            (obj.synchronousCommit =
                postgresqlconfig101c_SynchronousCommitToJSON(message.synchronousCommit));
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
                postgresqlconfig101c_ConstraintExclusionToJSON(message.constraintExclusion));
        message.cursorTupleFraction !== undefined &&
            (obj.cursorTupleFraction = message.cursorTupleFraction);
        message.fromCollapseLimit !== undefined &&
            (obj.fromCollapseLimit = message.fromCollapseLimit);
        message.joinCollapseLimit !== undefined &&
            (obj.joinCollapseLimit = message.joinCollapseLimit);
        message.forceParallelMode !== undefined &&
            (obj.forceParallelMode =
                postgresqlconfig101c_ForceParallelModeToJSON(message.forceParallelMode));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlconfig101c_LogLevelToJSON(message.clientMinMessages));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlconfig101c_LogLevelToJSON(message.logMinMessages));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlconfig101c_LogLevelToJSON(message.logMinErrorStatement));
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
                postgresqlconfig101c_LogErrorVerbosityToJSON(message.logErrorVerbosity));
        message.logLockWaits !== undefined &&
            (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlconfig101c_LogStatementToJSON(message.logStatement));
        message.logTempFiles !== undefined &&
            (obj.logTempFiles = message.logTempFiles);
        message.searchPath !== undefined &&
            (obj.searchPath = message.searchPath);
        message.rowSecurity !== undefined &&
            (obj.rowSecurity = message.rowSecurity);
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation =
                postgresqlconfig101c_TransactionIsolationToJSON(message.defaultTransactionIsolation));
        message.statementTimeout !== undefined &&
            (obj.statementTimeout = message.statementTimeout);
        message.lockTimeout !== undefined &&
            (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout =
                message.idleInTransactionSessionTimeout);
        message.byteaOutput !== undefined &&
            (obj.byteaOutput = postgresqlconfig101c_ByteaOutputToJSON(message.byteaOutput));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlconfig101c_XmlBinaryToJSON(message.xmlbinary));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlconfig101c_XmlOptionToJSON(message.xmloption));
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
            (obj.backslashQuote = postgresqlconfig101c_BackslashQuoteToJSON(message.backslashQuote));
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
        message.maxWorkerProcesses !== undefined &&
            (obj.maxWorkerProcesses = message.maxWorkerProcesses);
        message.maxParallelWorkers !== undefined &&
            (obj.maxParallelWorkers = message.maxParallelWorkers);
        message.maxParallelWorkersPerGather !== undefined &&
            (obj.maxParallelWorkersPerGather =
                message.maxParallelWorkersPerGather);
        message.autovacuumVacuumScaleFactor !== undefined &&
            (obj.autovacuumVacuumScaleFactor =
                message.autovacuumVacuumScaleFactor);
        message.autovacuumAnalyzeScaleFactor !== undefined &&
            (obj.autovacuumAnalyzeScaleFactor =
                message.autovacuumAnalyzeScaleFactor);
        message.defaultTransactionReadOnly !== undefined &&
            (obj.defaultTransactionReadOnly =
                message.defaultTransactionReadOnly);
        message.timezone !== undefined && (obj.timezone = message.timezone);
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        if (message.sharedPreloadLibraries) {
            obj.sharedPreloadLibraries = message.sharedPreloadLibraries.map((e) => postgresqlconfig101c_SharedPreloadLibrariesToJSON(e));
        }
        else {
            obj.sharedPreloadLibraries = [];
        }
        message.autoExplainLogMinDuration !== undefined &&
            (obj.autoExplainLogMinDuration = message.autoExplainLogMinDuration);
        message.autoExplainLogAnalyze !== undefined &&
            (obj.autoExplainLogAnalyze = message.autoExplainLogAnalyze);
        message.autoExplainLogBuffers !== undefined &&
            (obj.autoExplainLogBuffers = message.autoExplainLogBuffers);
        message.autoExplainLogTiming !== undefined &&
            (obj.autoExplainLogTiming = message.autoExplainLogTiming);
        message.autoExplainLogTriggers !== undefined &&
            (obj.autoExplainLogTriggers = message.autoExplainLogTriggers);
        message.autoExplainLogVerbose !== undefined &&
            (obj.autoExplainLogVerbose = message.autoExplainLogVerbose);
        message.autoExplainLogNestedStatements !== undefined &&
            (obj.autoExplainLogNestedStatements =
                message.autoExplainLogNestedStatements);
        message.autoExplainSampleRate !== undefined &&
            (obj.autoExplainSampleRate = message.autoExplainSampleRate);
        message.pgHintPlanEnableHint !== undefined &&
            (obj.pgHintPlanEnableHint = message.pgHintPlanEnableHint);
        message.pgHintPlanEnableHintTable !== undefined &&
            (obj.pgHintPlanEnableHintTable = message.pgHintPlanEnableHintTable);
        message.pgHintPlanDebugPrint !== undefined &&
            (obj.pgHintPlanDebugPrint =
                postgresqlconfig101c_PgHintPlanDebugPrintToJSON(message.pgHintPlanDebugPrint));
        message.pgHintPlanMessageLevel !== undefined &&
            (obj.pgHintPlanMessageLevel = postgresqlconfig101c_LogLevelToJSON(message.pgHintPlanMessageLevel));
        message.onlineAnalyzeEnable !== undefined &&
            (obj.onlineAnalyzeEnable = message.onlineAnalyzeEnable);
        message.plantunerFixEmptyTable !== undefined &&
            (obj.plantunerFixEmptyTable = message.plantunerFixEmptyTable);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePostgresqlconfig101c };
        message.sharedPreloadLibraries = [];
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
        if (object.enableBitmapscan !== undefined &&
            object.enableBitmapscan !== null) {
            message.enableBitmapscan = object.enableBitmapscan;
        }
        else {
            message.enableBitmapscan = undefined;
        }
        if (object.enableHashagg !== undefined &&
            object.enableHashagg !== null) {
            message.enableHashagg = object.enableHashagg;
        }
        else {
            message.enableHashagg = undefined;
        }
        if (object.enableHashjoin !== undefined &&
            object.enableHashjoin !== null) {
            message.enableHashjoin = object.enableHashjoin;
        }
        else {
            message.enableHashjoin = undefined;
        }
        if (object.enableIndexscan !== undefined &&
            object.enableIndexscan !== null) {
            message.enableIndexscan = object.enableIndexscan;
        }
        else {
            message.enableIndexscan = undefined;
        }
        if (object.enableIndexonlyscan !== undefined &&
            object.enableIndexonlyscan !== null) {
            message.enableIndexonlyscan = object.enableIndexonlyscan;
        }
        else {
            message.enableIndexonlyscan = undefined;
        }
        if (object.enableMaterial !== undefined &&
            object.enableMaterial !== null) {
            message.enableMaterial = object.enableMaterial;
        }
        else {
            message.enableMaterial = undefined;
        }
        if (object.enableMergejoin !== undefined &&
            object.enableMergejoin !== null) {
            message.enableMergejoin = object.enableMergejoin;
        }
        else {
            message.enableMergejoin = undefined;
        }
        if (object.enableNestloop !== undefined &&
            object.enableNestloop !== null) {
            message.enableNestloop = object.enableNestloop;
        }
        else {
            message.enableNestloop = undefined;
        }
        if (object.enableSeqscan !== undefined &&
            object.enableSeqscan !== null) {
            message.enableSeqscan = object.enableSeqscan;
        }
        else {
            message.enableSeqscan = undefined;
        }
        if (object.enableSort !== undefined && object.enableSort !== null) {
            message.enableSort = object.enableSort;
        }
        else {
            message.enableSort = undefined;
        }
        if (object.enableTidscan !== undefined &&
            object.enableTidscan !== null) {
            message.enableTidscan = object.enableTidscan;
        }
        else {
            message.enableTidscan = undefined;
        }
        if (object.maxWorkerProcesses !== undefined &&
            object.maxWorkerProcesses !== null) {
            message.maxWorkerProcesses = object.maxWorkerProcesses;
        }
        else {
            message.maxWorkerProcesses = undefined;
        }
        if (object.maxParallelWorkers !== undefined &&
            object.maxParallelWorkers !== null) {
            message.maxParallelWorkers = object.maxParallelWorkers;
        }
        else {
            message.maxParallelWorkers = undefined;
        }
        if (object.maxParallelWorkersPerGather !== undefined &&
            object.maxParallelWorkersPerGather !== null) {
            message.maxParallelWorkersPerGather =
                object.maxParallelWorkersPerGather;
        }
        else {
            message.maxParallelWorkersPerGather = undefined;
        }
        if (object.autovacuumVacuumScaleFactor !== undefined &&
            object.autovacuumVacuumScaleFactor !== null) {
            message.autovacuumVacuumScaleFactor =
                object.autovacuumVacuumScaleFactor;
        }
        else {
            message.autovacuumVacuumScaleFactor = undefined;
        }
        if (object.autovacuumAnalyzeScaleFactor !== undefined &&
            object.autovacuumAnalyzeScaleFactor !== null) {
            message.autovacuumAnalyzeScaleFactor =
                object.autovacuumAnalyzeScaleFactor;
        }
        else {
            message.autovacuumAnalyzeScaleFactor = undefined;
        }
        if (object.defaultTransactionReadOnly !== undefined &&
            object.defaultTransactionReadOnly !== null) {
            message.defaultTransactionReadOnly =
                object.defaultTransactionReadOnly;
        }
        else {
            message.defaultTransactionReadOnly = undefined;
        }
        if (object.timezone !== undefined && object.timezone !== null) {
            message.timezone = object.timezone;
        }
        else {
            message.timezone = '';
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
        if (object.sharedPreloadLibraries !== undefined &&
            object.sharedPreloadLibraries !== null) {
            for (const e of object.sharedPreloadLibraries) {
                message.sharedPreloadLibraries.push(e);
            }
        }
        if (object.autoExplainLogMinDuration !== undefined &&
            object.autoExplainLogMinDuration !== null) {
            message.autoExplainLogMinDuration =
                object.autoExplainLogMinDuration;
        }
        else {
            message.autoExplainLogMinDuration = undefined;
        }
        if (object.autoExplainLogAnalyze !== undefined &&
            object.autoExplainLogAnalyze !== null) {
            message.autoExplainLogAnalyze = object.autoExplainLogAnalyze;
        }
        else {
            message.autoExplainLogAnalyze = undefined;
        }
        if (object.autoExplainLogBuffers !== undefined &&
            object.autoExplainLogBuffers !== null) {
            message.autoExplainLogBuffers = object.autoExplainLogBuffers;
        }
        else {
            message.autoExplainLogBuffers = undefined;
        }
        if (object.autoExplainLogTiming !== undefined &&
            object.autoExplainLogTiming !== null) {
            message.autoExplainLogTiming = object.autoExplainLogTiming;
        }
        else {
            message.autoExplainLogTiming = undefined;
        }
        if (object.autoExplainLogTriggers !== undefined &&
            object.autoExplainLogTriggers !== null) {
            message.autoExplainLogTriggers = object.autoExplainLogTriggers;
        }
        else {
            message.autoExplainLogTriggers = undefined;
        }
        if (object.autoExplainLogVerbose !== undefined &&
            object.autoExplainLogVerbose !== null) {
            message.autoExplainLogVerbose = object.autoExplainLogVerbose;
        }
        else {
            message.autoExplainLogVerbose = undefined;
        }
        if (object.autoExplainLogNestedStatements !== undefined &&
            object.autoExplainLogNestedStatements !== null) {
            message.autoExplainLogNestedStatements =
                object.autoExplainLogNestedStatements;
        }
        else {
            message.autoExplainLogNestedStatements = undefined;
        }
        if (object.autoExplainSampleRate !== undefined &&
            object.autoExplainSampleRate !== null) {
            message.autoExplainSampleRate = object.autoExplainSampleRate;
        }
        else {
            message.autoExplainSampleRate = undefined;
        }
        if (object.pgHintPlanEnableHint !== undefined &&
            object.pgHintPlanEnableHint !== null) {
            message.pgHintPlanEnableHint = object.pgHintPlanEnableHint;
        }
        else {
            message.pgHintPlanEnableHint = undefined;
        }
        if (object.pgHintPlanEnableHintTable !== undefined &&
            object.pgHintPlanEnableHintTable !== null) {
            message.pgHintPlanEnableHintTable =
                object.pgHintPlanEnableHintTable;
        }
        else {
            message.pgHintPlanEnableHintTable = undefined;
        }
        if (object.pgHintPlanDebugPrint !== undefined &&
            object.pgHintPlanDebugPrint !== null) {
            message.pgHintPlanDebugPrint = object.pgHintPlanDebugPrint;
        }
        else {
            message.pgHintPlanDebugPrint = 0;
        }
        if (object.pgHintPlanMessageLevel !== undefined &&
            object.pgHintPlanMessageLevel !== null) {
            message.pgHintPlanMessageLevel = object.pgHintPlanMessageLevel;
        }
        else {
            message.pgHintPlanMessageLevel = 0;
        }
        if (object.onlineAnalyzeEnable !== undefined &&
            object.onlineAnalyzeEnable !== null) {
            message.onlineAnalyzeEnable = object.onlineAnalyzeEnable;
        }
        else {
            message.onlineAnalyzeEnable = undefined;
        }
        if (object.plantunerFixEmptyTable !== undefined &&
            object.plantunerFixEmptyTable !== null) {
            message.plantunerFixEmptyTable = object.plantunerFixEmptyTable;
        }
        else {
            message.plantunerFixEmptyTable = undefined;
        }
        return message;
    },
};
const basePostgresqlconfigset101c = {};
export const Postgresqlconfigset101c = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            Postgresqlconfig101c.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Postgresqlconfig101c.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Postgresqlconfig101c.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePostgresqlconfigset101c,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Postgresqlconfig101c.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Postgresqlconfig101c.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Postgresqlconfig101c.decode(reader, reader.uint32());
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
            ...basePostgresqlconfigset101c,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Postgresqlconfig101c.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Postgresqlconfig101c.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Postgresqlconfig101c.fromJSON(object.defaultConfig);
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
                ? Postgresqlconfig101c.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Postgresqlconfig101c.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Postgresqlconfig101c.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePostgresqlconfigset101c,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Postgresqlconfig101c.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Postgresqlconfig101c.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Postgresqlconfig101c.fromPartial(object.defaultConfig);
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