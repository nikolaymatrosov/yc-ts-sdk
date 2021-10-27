"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresqlConfigSet13 = exports.PostgresqlConfig13 = exports.postgresqlConfig13_SharedPreloadLibrariesToJSON = exports.postgresqlConfig13_SharedPreloadLibrariesFromJSON = exports.PostgresqlConfig13_SharedPreloadLibraries = exports.postgresqlConfig13_PgHintPlanDebugPrintToJSON = exports.postgresqlConfig13_PgHintPlanDebugPrintFromJSON = exports.PostgresqlConfig13_PgHintPlanDebugPrint = exports.postgresqlConfig13_PlanCacheModeToJSON = exports.postgresqlConfig13_PlanCacheModeFromJSON = exports.PostgresqlConfig13_PlanCacheMode = exports.postgresqlConfig13_BackslashQuoteToJSON = exports.postgresqlConfig13_BackslashQuoteFromJSON = exports.PostgresqlConfig13_BackslashQuote = exports.postgresqlConfig13_XmlOptionToJSON = exports.postgresqlConfig13_XmlOptionFromJSON = exports.PostgresqlConfig13_XmlOption = exports.postgresqlConfig13_XmlBinaryToJSON = exports.postgresqlConfig13_XmlBinaryFromJSON = exports.PostgresqlConfig13_XmlBinary = exports.postgresqlConfig13_ByteaOutputToJSON = exports.postgresqlConfig13_ByteaOutputFromJSON = exports.PostgresqlConfig13_ByteaOutput = exports.postgresqlConfig13_TransactionIsolationToJSON = exports.postgresqlConfig13_TransactionIsolationFromJSON = exports.PostgresqlConfig13_TransactionIsolation = exports.postgresqlConfig13_LogStatementToJSON = exports.postgresqlConfig13_LogStatementFromJSON = exports.PostgresqlConfig13_LogStatement = exports.postgresqlConfig13_LogErrorVerbosityToJSON = exports.postgresqlConfig13_LogErrorVerbosityFromJSON = exports.PostgresqlConfig13_LogErrorVerbosity = exports.postgresqlConfig13_LogLevelToJSON = exports.postgresqlConfig13_LogLevelFromJSON = exports.PostgresqlConfig13_LogLevel = exports.postgresqlConfig13_ForceParallelModeToJSON = exports.postgresqlConfig13_ForceParallelModeFromJSON = exports.PostgresqlConfig13_ForceParallelMode = exports.postgresqlConfig13_ConstraintExclusionToJSON = exports.postgresqlConfig13_ConstraintExclusionFromJSON = exports.PostgresqlConfig13_ConstraintExclusion = exports.postgresqlConfig13_SynchronousCommitToJSON = exports.postgresqlConfig13_SynchronousCommitFromJSON = exports.PostgresqlConfig13_SynchronousCommit = exports.postgresqlConfig13_WalLevelToJSON = exports.postgresqlConfig13_WalLevelFromJSON = exports.PostgresqlConfig13_WalLevel = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.postgresql.v1.config';
var PostgresqlConfig13_WalLevel;
(function (PostgresqlConfig13_WalLevel) {
    PostgresqlConfig13_WalLevel[PostgresqlConfig13_WalLevel["WAL_LEVEL_UNSPECIFIED"] = 0] = "WAL_LEVEL_UNSPECIFIED";
    PostgresqlConfig13_WalLevel[PostgresqlConfig13_WalLevel["WAL_LEVEL_REPLICA"] = 1] = "WAL_LEVEL_REPLICA";
    PostgresqlConfig13_WalLevel[PostgresqlConfig13_WalLevel["WAL_LEVEL_LOGICAL"] = 2] = "WAL_LEVEL_LOGICAL";
    PostgresqlConfig13_WalLevel[PostgresqlConfig13_WalLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_WalLevel = exports.PostgresqlConfig13_WalLevel || (exports.PostgresqlConfig13_WalLevel = {}));
function postgresqlConfig13_WalLevelFromJSON(object) {
    switch (object) {
        case 0:
        case 'WAL_LEVEL_UNSPECIFIED':
            return PostgresqlConfig13_WalLevel.WAL_LEVEL_UNSPECIFIED;
        case 1:
        case 'WAL_LEVEL_REPLICA':
            return PostgresqlConfig13_WalLevel.WAL_LEVEL_REPLICA;
        case 2:
        case 'WAL_LEVEL_LOGICAL':
            return PostgresqlConfig13_WalLevel.WAL_LEVEL_LOGICAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_WalLevel.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_WalLevelFromJSON = postgresqlConfig13_WalLevelFromJSON;
function postgresqlConfig13_WalLevelToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_WalLevel.WAL_LEVEL_UNSPECIFIED:
            return 'WAL_LEVEL_UNSPECIFIED';
        case PostgresqlConfig13_WalLevel.WAL_LEVEL_REPLICA:
            return 'WAL_LEVEL_REPLICA';
        case PostgresqlConfig13_WalLevel.WAL_LEVEL_LOGICAL:
            return 'WAL_LEVEL_LOGICAL';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_WalLevelToJSON = postgresqlConfig13_WalLevelToJSON;
var PostgresqlConfig13_SynchronousCommit;
(function (PostgresqlConfig13_SynchronousCommit) {
    PostgresqlConfig13_SynchronousCommit[PostgresqlConfig13_SynchronousCommit["SYNCHRONOUS_COMMIT_UNSPECIFIED"] = 0] = "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    PostgresqlConfig13_SynchronousCommit[PostgresqlConfig13_SynchronousCommit["SYNCHRONOUS_COMMIT_ON"] = 1] = "SYNCHRONOUS_COMMIT_ON";
    PostgresqlConfig13_SynchronousCommit[PostgresqlConfig13_SynchronousCommit["SYNCHRONOUS_COMMIT_OFF"] = 2] = "SYNCHRONOUS_COMMIT_OFF";
    PostgresqlConfig13_SynchronousCommit[PostgresqlConfig13_SynchronousCommit["SYNCHRONOUS_COMMIT_LOCAL"] = 3] = "SYNCHRONOUS_COMMIT_LOCAL";
    PostgresqlConfig13_SynchronousCommit[PostgresqlConfig13_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_WRITE"] = 4] = "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    PostgresqlConfig13_SynchronousCommit[PostgresqlConfig13_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_APPLY"] = 5] = "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    PostgresqlConfig13_SynchronousCommit[PostgresqlConfig13_SynchronousCommit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_SynchronousCommit = exports.PostgresqlConfig13_SynchronousCommit || (exports.PostgresqlConfig13_SynchronousCommit = {}));
function postgresqlConfig13_SynchronousCommitFromJSON(object) {
    switch (object) {
        case 0:
        case 'SYNCHRONOUS_COMMIT_UNSPECIFIED':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
        case 1:
        case 'SYNCHRONOUS_COMMIT_ON':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
        case 2:
        case 'SYNCHRONOUS_COMMIT_OFF':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
        case 3:
        case 'SYNCHRONOUS_COMMIT_LOCAL':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
        case 4:
        case 'SYNCHRONOUS_COMMIT_REMOTE_WRITE':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
        case 5:
        case 'SYNCHRONOUS_COMMIT_REMOTE_APPLY':
            return PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_SynchronousCommit.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_SynchronousCommitFromJSON = postgresqlConfig13_SynchronousCommitFromJSON;
function postgresqlConfig13_SynchronousCommitToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
            return 'SYNCHRONOUS_COMMIT_UNSPECIFIED';
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
            return 'SYNCHRONOUS_COMMIT_ON';
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
            return 'SYNCHRONOUS_COMMIT_OFF';
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
            return 'SYNCHRONOUS_COMMIT_LOCAL';
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
            return 'SYNCHRONOUS_COMMIT_REMOTE_WRITE';
        case PostgresqlConfig13_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
            return 'SYNCHRONOUS_COMMIT_REMOTE_APPLY';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_SynchronousCommitToJSON = postgresqlConfig13_SynchronousCommitToJSON;
var PostgresqlConfig13_ConstraintExclusion;
(function (PostgresqlConfig13_ConstraintExclusion) {
    PostgresqlConfig13_ConstraintExclusion[PostgresqlConfig13_ConstraintExclusion["CONSTRAINT_EXCLUSION_UNSPECIFIED"] = 0] = "CONSTRAINT_EXCLUSION_UNSPECIFIED";
    PostgresqlConfig13_ConstraintExclusion[PostgresqlConfig13_ConstraintExclusion["CONSTRAINT_EXCLUSION_ON"] = 1] = "CONSTRAINT_EXCLUSION_ON";
    PostgresqlConfig13_ConstraintExclusion[PostgresqlConfig13_ConstraintExclusion["CONSTRAINT_EXCLUSION_OFF"] = 2] = "CONSTRAINT_EXCLUSION_OFF";
    PostgresqlConfig13_ConstraintExclusion[PostgresqlConfig13_ConstraintExclusion["CONSTRAINT_EXCLUSION_PARTITION"] = 3] = "CONSTRAINT_EXCLUSION_PARTITION";
    PostgresqlConfig13_ConstraintExclusion[PostgresqlConfig13_ConstraintExclusion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_ConstraintExclusion = exports.PostgresqlConfig13_ConstraintExclusion || (exports.PostgresqlConfig13_ConstraintExclusion = {}));
function postgresqlConfig13_ConstraintExclusionFromJSON(object) {
    switch (object) {
        case 0:
        case 'CONSTRAINT_EXCLUSION_UNSPECIFIED':
            return PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED;
        case 1:
        case 'CONSTRAINT_EXCLUSION_ON':
            return PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON;
        case 2:
        case 'CONSTRAINT_EXCLUSION_OFF':
            return PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF;
        case 3:
        case 'CONSTRAINT_EXCLUSION_PARTITION':
            return PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_ConstraintExclusion.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_ConstraintExclusionFromJSON = postgresqlConfig13_ConstraintExclusionFromJSON;
function postgresqlConfig13_ConstraintExclusionToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_UNSPECIFIED:
            return 'CONSTRAINT_EXCLUSION_UNSPECIFIED';
        case PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_ON:
            return 'CONSTRAINT_EXCLUSION_ON';
        case PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_OFF:
            return 'CONSTRAINT_EXCLUSION_OFF';
        case PostgresqlConfig13_ConstraintExclusion.CONSTRAINT_EXCLUSION_PARTITION:
            return 'CONSTRAINT_EXCLUSION_PARTITION';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_ConstraintExclusionToJSON = postgresqlConfig13_ConstraintExclusionToJSON;
var PostgresqlConfig13_ForceParallelMode;
(function (PostgresqlConfig13_ForceParallelMode) {
    PostgresqlConfig13_ForceParallelMode[PostgresqlConfig13_ForceParallelMode["FORCE_PARALLEL_MODE_UNSPECIFIED"] = 0] = "FORCE_PARALLEL_MODE_UNSPECIFIED";
    PostgresqlConfig13_ForceParallelMode[PostgresqlConfig13_ForceParallelMode["FORCE_PARALLEL_MODE_ON"] = 1] = "FORCE_PARALLEL_MODE_ON";
    PostgresqlConfig13_ForceParallelMode[PostgresqlConfig13_ForceParallelMode["FORCE_PARALLEL_MODE_OFF"] = 2] = "FORCE_PARALLEL_MODE_OFF";
    PostgresqlConfig13_ForceParallelMode[PostgresqlConfig13_ForceParallelMode["FORCE_PARALLEL_MODE_REGRESS"] = 3] = "FORCE_PARALLEL_MODE_REGRESS";
    PostgresqlConfig13_ForceParallelMode[PostgresqlConfig13_ForceParallelMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_ForceParallelMode = exports.PostgresqlConfig13_ForceParallelMode || (exports.PostgresqlConfig13_ForceParallelMode = {}));
function postgresqlConfig13_ForceParallelModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'FORCE_PARALLEL_MODE_UNSPECIFIED':
            return PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED;
        case 1:
        case 'FORCE_PARALLEL_MODE_ON':
            return PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_ON;
        case 2:
        case 'FORCE_PARALLEL_MODE_OFF':
            return PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_OFF;
        case 3:
        case 'FORCE_PARALLEL_MODE_REGRESS':
            return PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_ForceParallelMode.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_ForceParallelModeFromJSON = postgresqlConfig13_ForceParallelModeFromJSON;
function postgresqlConfig13_ForceParallelModeToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_UNSPECIFIED:
            return 'FORCE_PARALLEL_MODE_UNSPECIFIED';
        case PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_ON:
            return 'FORCE_PARALLEL_MODE_ON';
        case PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_OFF:
            return 'FORCE_PARALLEL_MODE_OFF';
        case PostgresqlConfig13_ForceParallelMode.FORCE_PARALLEL_MODE_REGRESS:
            return 'FORCE_PARALLEL_MODE_REGRESS';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_ForceParallelModeToJSON = postgresqlConfig13_ForceParallelModeToJSON;
var PostgresqlConfig13_LogLevel;
(function (PostgresqlConfig13_LogLevel) {
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_DEBUG5"] = 1] = "LOG_LEVEL_DEBUG5";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_DEBUG4"] = 2] = "LOG_LEVEL_DEBUG4";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_DEBUG3"] = 3] = "LOG_LEVEL_DEBUG3";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_DEBUG2"] = 4] = "LOG_LEVEL_DEBUG2";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_DEBUG1"] = 5] = "LOG_LEVEL_DEBUG1";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_LOG"] = 6] = "LOG_LEVEL_LOG";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_NOTICE"] = 7] = "LOG_LEVEL_NOTICE";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_WARNING"] = 8] = "LOG_LEVEL_WARNING";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_ERROR"] = 9] = "LOG_LEVEL_ERROR";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_FATAL"] = 10] = "LOG_LEVEL_FATAL";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["LOG_LEVEL_PANIC"] = 11] = "LOG_LEVEL_PANIC";
    PostgresqlConfig13_LogLevel[PostgresqlConfig13_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_LogLevel = exports.PostgresqlConfig13_LogLevel || (exports.PostgresqlConfig13_LogLevel = {}));
function postgresqlConfig13_LogLevelFromJSON(object) {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_UNSPECIFIED':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case 'LOG_LEVEL_DEBUG5':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG5;
        case 2:
        case 'LOG_LEVEL_DEBUG4':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG4;
        case 3:
        case 'LOG_LEVEL_DEBUG3':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG3;
        case 4:
        case 'LOG_LEVEL_DEBUG2':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG2;
        case 5:
        case 'LOG_LEVEL_DEBUG1':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG1;
        case 6:
        case 'LOG_LEVEL_LOG':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_LOG;
        case 7:
        case 'LOG_LEVEL_NOTICE':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_NOTICE;
        case 8:
        case 'LOG_LEVEL_WARNING':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_WARNING;
        case 9:
        case 'LOG_LEVEL_ERROR':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_ERROR;
        case 10:
        case 'LOG_LEVEL_FATAL':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_FATAL;
        case 11:
        case 'LOG_LEVEL_PANIC':
            return PostgresqlConfig13_LogLevel.LOG_LEVEL_PANIC;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_LogLevel.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_LogLevelFromJSON = postgresqlConfig13_LogLevelFromJSON;
function postgresqlConfig13_LogLevelToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return 'LOG_LEVEL_UNSPECIFIED';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG5:
            return 'LOG_LEVEL_DEBUG5';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG4:
            return 'LOG_LEVEL_DEBUG4';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG3:
            return 'LOG_LEVEL_DEBUG3';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG2:
            return 'LOG_LEVEL_DEBUG2';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_DEBUG1:
            return 'LOG_LEVEL_DEBUG1';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_LOG:
            return 'LOG_LEVEL_LOG';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_NOTICE:
            return 'LOG_LEVEL_NOTICE';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_WARNING:
            return 'LOG_LEVEL_WARNING';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_ERROR:
            return 'LOG_LEVEL_ERROR';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_FATAL:
            return 'LOG_LEVEL_FATAL';
        case PostgresqlConfig13_LogLevel.LOG_LEVEL_PANIC:
            return 'LOG_LEVEL_PANIC';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_LogLevelToJSON = postgresqlConfig13_LogLevelToJSON;
var PostgresqlConfig13_LogErrorVerbosity;
(function (PostgresqlConfig13_LogErrorVerbosity) {
    PostgresqlConfig13_LogErrorVerbosity[PostgresqlConfig13_LogErrorVerbosity["LOG_ERROR_VERBOSITY_UNSPECIFIED"] = 0] = "LOG_ERROR_VERBOSITY_UNSPECIFIED";
    PostgresqlConfig13_LogErrorVerbosity[PostgresqlConfig13_LogErrorVerbosity["LOG_ERROR_VERBOSITY_TERSE"] = 1] = "LOG_ERROR_VERBOSITY_TERSE";
    PostgresqlConfig13_LogErrorVerbosity[PostgresqlConfig13_LogErrorVerbosity["LOG_ERROR_VERBOSITY_DEFAULT"] = 2] = "LOG_ERROR_VERBOSITY_DEFAULT";
    PostgresqlConfig13_LogErrorVerbosity[PostgresqlConfig13_LogErrorVerbosity["LOG_ERROR_VERBOSITY_VERBOSE"] = 3] = "LOG_ERROR_VERBOSITY_VERBOSE";
    PostgresqlConfig13_LogErrorVerbosity[PostgresqlConfig13_LogErrorVerbosity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_LogErrorVerbosity = exports.PostgresqlConfig13_LogErrorVerbosity || (exports.PostgresqlConfig13_LogErrorVerbosity = {}));
function postgresqlConfig13_LogErrorVerbosityFromJSON(object) {
    switch (object) {
        case 0:
        case 'LOG_ERROR_VERBOSITY_UNSPECIFIED':
            return PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED;
        case 1:
        case 'LOG_ERROR_VERBOSITY_TERSE':
            return PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE;
        case 2:
        case 'LOG_ERROR_VERBOSITY_DEFAULT':
            return PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT;
        case 3:
        case 'LOG_ERROR_VERBOSITY_VERBOSE':
            return PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_LogErrorVerbosity.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_LogErrorVerbosityFromJSON = postgresqlConfig13_LogErrorVerbosityFromJSON;
function postgresqlConfig13_LogErrorVerbosityToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_UNSPECIFIED:
            return 'LOG_ERROR_VERBOSITY_UNSPECIFIED';
        case PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_TERSE:
            return 'LOG_ERROR_VERBOSITY_TERSE';
        case PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_DEFAULT:
            return 'LOG_ERROR_VERBOSITY_DEFAULT';
        case PostgresqlConfig13_LogErrorVerbosity.LOG_ERROR_VERBOSITY_VERBOSE:
            return 'LOG_ERROR_VERBOSITY_VERBOSE';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_LogErrorVerbosityToJSON = postgresqlConfig13_LogErrorVerbosityToJSON;
var PostgresqlConfig13_LogStatement;
(function (PostgresqlConfig13_LogStatement) {
    PostgresqlConfig13_LogStatement[PostgresqlConfig13_LogStatement["LOG_STATEMENT_UNSPECIFIED"] = 0] = "LOG_STATEMENT_UNSPECIFIED";
    PostgresqlConfig13_LogStatement[PostgresqlConfig13_LogStatement["LOG_STATEMENT_NONE"] = 1] = "LOG_STATEMENT_NONE";
    PostgresqlConfig13_LogStatement[PostgresqlConfig13_LogStatement["LOG_STATEMENT_DDL"] = 2] = "LOG_STATEMENT_DDL";
    PostgresqlConfig13_LogStatement[PostgresqlConfig13_LogStatement["LOG_STATEMENT_MOD"] = 3] = "LOG_STATEMENT_MOD";
    PostgresqlConfig13_LogStatement[PostgresqlConfig13_LogStatement["LOG_STATEMENT_ALL"] = 4] = "LOG_STATEMENT_ALL";
    PostgresqlConfig13_LogStatement[PostgresqlConfig13_LogStatement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_LogStatement = exports.PostgresqlConfig13_LogStatement || (exports.PostgresqlConfig13_LogStatement = {}));
function postgresqlConfig13_LogStatementFromJSON(object) {
    switch (object) {
        case 0:
        case 'LOG_STATEMENT_UNSPECIFIED':
            return PostgresqlConfig13_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case 'LOG_STATEMENT_NONE':
            return PostgresqlConfig13_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case 'LOG_STATEMENT_DDL':
            return PostgresqlConfig13_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case 'LOG_STATEMENT_MOD':
            return PostgresqlConfig13_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case 'LOG_STATEMENT_ALL':
            return PostgresqlConfig13_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_LogStatement.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_LogStatementFromJSON = postgresqlConfig13_LogStatementFromJSON;
function postgresqlConfig13_LogStatementToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return 'LOG_STATEMENT_UNSPECIFIED';
        case PostgresqlConfig13_LogStatement.LOG_STATEMENT_NONE:
            return 'LOG_STATEMENT_NONE';
        case PostgresqlConfig13_LogStatement.LOG_STATEMENT_DDL:
            return 'LOG_STATEMENT_DDL';
        case PostgresqlConfig13_LogStatement.LOG_STATEMENT_MOD:
            return 'LOG_STATEMENT_MOD';
        case PostgresqlConfig13_LogStatement.LOG_STATEMENT_ALL:
            return 'LOG_STATEMENT_ALL';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_LogStatementToJSON = postgresqlConfig13_LogStatementToJSON;
var PostgresqlConfig13_TransactionIsolation;
(function (PostgresqlConfig13_TransactionIsolation) {
    PostgresqlConfig13_TransactionIsolation[PostgresqlConfig13_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    PostgresqlConfig13_TransactionIsolation[PostgresqlConfig13_TransactionIsolation["TRANSACTION_ISOLATION_READ_UNCOMMITTED"] = 1] = "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    PostgresqlConfig13_TransactionIsolation[PostgresqlConfig13_TransactionIsolation["TRANSACTION_ISOLATION_READ_COMMITTED"] = 2] = "TRANSACTION_ISOLATION_READ_COMMITTED";
    PostgresqlConfig13_TransactionIsolation[PostgresqlConfig13_TransactionIsolation["TRANSACTION_ISOLATION_REPEATABLE_READ"] = 3] = "TRANSACTION_ISOLATION_REPEATABLE_READ";
    PostgresqlConfig13_TransactionIsolation[PostgresqlConfig13_TransactionIsolation["TRANSACTION_ISOLATION_SERIALIZABLE"] = 4] = "TRANSACTION_ISOLATION_SERIALIZABLE";
    PostgresqlConfig13_TransactionIsolation[PostgresqlConfig13_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_TransactionIsolation = exports.PostgresqlConfig13_TransactionIsolation || (exports.PostgresqlConfig13_TransactionIsolation = {}));
function postgresqlConfig13_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case 'TRANSACTION_ISOLATION_UNSPECIFIED':
            return PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case 'TRANSACTION_ISOLATION_READ_UNCOMMITTED':
            return PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case 'TRANSACTION_ISOLATION_READ_COMMITTED':
            return PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case 'TRANSACTION_ISOLATION_REPEATABLE_READ':
            return PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case 'TRANSACTION_ISOLATION_SERIALIZABLE':
            return PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_TransactionIsolation.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_TransactionIsolationFromJSON = postgresqlConfig13_TransactionIsolationFromJSON;
function postgresqlConfig13_TransactionIsolationToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return 'TRANSACTION_ISOLATION_UNSPECIFIED';
        case PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return 'TRANSACTION_ISOLATION_READ_UNCOMMITTED';
        case PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return 'TRANSACTION_ISOLATION_READ_COMMITTED';
        case PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return 'TRANSACTION_ISOLATION_REPEATABLE_READ';
        case PostgresqlConfig13_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return 'TRANSACTION_ISOLATION_SERIALIZABLE';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_TransactionIsolationToJSON = postgresqlConfig13_TransactionIsolationToJSON;
var PostgresqlConfig13_ByteaOutput;
(function (PostgresqlConfig13_ByteaOutput) {
    PostgresqlConfig13_ByteaOutput[PostgresqlConfig13_ByteaOutput["BYTEA_OUTPUT_UNSPECIFIED"] = 0] = "BYTEA_OUTPUT_UNSPECIFIED";
    PostgresqlConfig13_ByteaOutput[PostgresqlConfig13_ByteaOutput["BYTEA_OUTPUT_HEX"] = 1] = "BYTEA_OUTPUT_HEX";
    PostgresqlConfig13_ByteaOutput[PostgresqlConfig13_ByteaOutput["BYTEA_OUTPUT_ESCAPED"] = 2] = "BYTEA_OUTPUT_ESCAPED";
    PostgresqlConfig13_ByteaOutput[PostgresqlConfig13_ByteaOutput["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_ByteaOutput = exports.PostgresqlConfig13_ByteaOutput || (exports.PostgresqlConfig13_ByteaOutput = {}));
function postgresqlConfig13_ByteaOutputFromJSON(object) {
    switch (object) {
        case 0:
        case 'BYTEA_OUTPUT_UNSPECIFIED':
            return PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED;
        case 1:
        case 'BYTEA_OUTPUT_HEX':
            return PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_HEX;
        case 2:
        case 'BYTEA_OUTPUT_ESCAPED':
            return PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_ESCAPED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_ByteaOutput.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_ByteaOutputFromJSON = postgresqlConfig13_ByteaOutputFromJSON;
function postgresqlConfig13_ByteaOutputToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_UNSPECIFIED:
            return 'BYTEA_OUTPUT_UNSPECIFIED';
        case PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_HEX:
            return 'BYTEA_OUTPUT_HEX';
        case PostgresqlConfig13_ByteaOutput.BYTEA_OUTPUT_ESCAPED:
            return 'BYTEA_OUTPUT_ESCAPED';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_ByteaOutputToJSON = postgresqlConfig13_ByteaOutputToJSON;
var PostgresqlConfig13_XmlBinary;
(function (PostgresqlConfig13_XmlBinary) {
    PostgresqlConfig13_XmlBinary[PostgresqlConfig13_XmlBinary["XML_BINARY_UNSPECIFIED"] = 0] = "XML_BINARY_UNSPECIFIED";
    PostgresqlConfig13_XmlBinary[PostgresqlConfig13_XmlBinary["XML_BINARY_BASE64"] = 1] = "XML_BINARY_BASE64";
    PostgresqlConfig13_XmlBinary[PostgresqlConfig13_XmlBinary["XML_BINARY_HEX"] = 2] = "XML_BINARY_HEX";
    PostgresqlConfig13_XmlBinary[PostgresqlConfig13_XmlBinary["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_XmlBinary = exports.PostgresqlConfig13_XmlBinary || (exports.PostgresqlConfig13_XmlBinary = {}));
function postgresqlConfig13_XmlBinaryFromJSON(object) {
    switch (object) {
        case 0:
        case 'XML_BINARY_UNSPECIFIED':
            return PostgresqlConfig13_XmlBinary.XML_BINARY_UNSPECIFIED;
        case 1:
        case 'XML_BINARY_BASE64':
            return PostgresqlConfig13_XmlBinary.XML_BINARY_BASE64;
        case 2:
        case 'XML_BINARY_HEX':
            return PostgresqlConfig13_XmlBinary.XML_BINARY_HEX;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_XmlBinary.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_XmlBinaryFromJSON = postgresqlConfig13_XmlBinaryFromJSON;
function postgresqlConfig13_XmlBinaryToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_XmlBinary.XML_BINARY_UNSPECIFIED:
            return 'XML_BINARY_UNSPECIFIED';
        case PostgresqlConfig13_XmlBinary.XML_BINARY_BASE64:
            return 'XML_BINARY_BASE64';
        case PostgresqlConfig13_XmlBinary.XML_BINARY_HEX:
            return 'XML_BINARY_HEX';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_XmlBinaryToJSON = postgresqlConfig13_XmlBinaryToJSON;
var PostgresqlConfig13_XmlOption;
(function (PostgresqlConfig13_XmlOption) {
    PostgresqlConfig13_XmlOption[PostgresqlConfig13_XmlOption["XML_OPTION_UNSPECIFIED"] = 0] = "XML_OPTION_UNSPECIFIED";
    PostgresqlConfig13_XmlOption[PostgresqlConfig13_XmlOption["XML_OPTION_DOCUMENT"] = 1] = "XML_OPTION_DOCUMENT";
    PostgresqlConfig13_XmlOption[PostgresqlConfig13_XmlOption["XML_OPTION_CONTENT"] = 2] = "XML_OPTION_CONTENT";
    PostgresqlConfig13_XmlOption[PostgresqlConfig13_XmlOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_XmlOption = exports.PostgresqlConfig13_XmlOption || (exports.PostgresqlConfig13_XmlOption = {}));
function postgresqlConfig13_XmlOptionFromJSON(object) {
    switch (object) {
        case 0:
        case 'XML_OPTION_UNSPECIFIED':
            return PostgresqlConfig13_XmlOption.XML_OPTION_UNSPECIFIED;
        case 1:
        case 'XML_OPTION_DOCUMENT':
            return PostgresqlConfig13_XmlOption.XML_OPTION_DOCUMENT;
        case 2:
        case 'XML_OPTION_CONTENT':
            return PostgresqlConfig13_XmlOption.XML_OPTION_CONTENT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_XmlOption.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_XmlOptionFromJSON = postgresqlConfig13_XmlOptionFromJSON;
function postgresqlConfig13_XmlOptionToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_XmlOption.XML_OPTION_UNSPECIFIED:
            return 'XML_OPTION_UNSPECIFIED';
        case PostgresqlConfig13_XmlOption.XML_OPTION_DOCUMENT:
            return 'XML_OPTION_DOCUMENT';
        case PostgresqlConfig13_XmlOption.XML_OPTION_CONTENT:
            return 'XML_OPTION_CONTENT';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_XmlOptionToJSON = postgresqlConfig13_XmlOptionToJSON;
var PostgresqlConfig13_BackslashQuote;
(function (PostgresqlConfig13_BackslashQuote) {
    PostgresqlConfig13_BackslashQuote[PostgresqlConfig13_BackslashQuote["BACKSLASH_QUOTE_UNSPECIFIED"] = 0] = "BACKSLASH_QUOTE_UNSPECIFIED";
    PostgresqlConfig13_BackslashQuote[PostgresqlConfig13_BackslashQuote["BACKSLASH_QUOTE"] = 1] = "BACKSLASH_QUOTE";
    PostgresqlConfig13_BackslashQuote[PostgresqlConfig13_BackslashQuote["BACKSLASH_QUOTE_ON"] = 2] = "BACKSLASH_QUOTE_ON";
    PostgresqlConfig13_BackslashQuote[PostgresqlConfig13_BackslashQuote["BACKSLASH_QUOTE_OFF"] = 3] = "BACKSLASH_QUOTE_OFF";
    PostgresqlConfig13_BackslashQuote[PostgresqlConfig13_BackslashQuote["BACKSLASH_QUOTE_SAFE_ENCODING"] = 4] = "BACKSLASH_QUOTE_SAFE_ENCODING";
    PostgresqlConfig13_BackslashQuote[PostgresqlConfig13_BackslashQuote["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_BackslashQuote = exports.PostgresqlConfig13_BackslashQuote || (exports.PostgresqlConfig13_BackslashQuote = {}));
function postgresqlConfig13_BackslashQuoteFromJSON(object) {
    switch (object) {
        case 0:
        case 'BACKSLASH_QUOTE_UNSPECIFIED':
            return PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED;
        case 1:
        case 'BACKSLASH_QUOTE':
            return PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE;
        case 2:
        case 'BACKSLASH_QUOTE_ON':
            return PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_ON;
        case 3:
        case 'BACKSLASH_QUOTE_OFF':
            return PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_OFF;
        case 4:
        case 'BACKSLASH_QUOTE_SAFE_ENCODING':
            return PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_BackslashQuote.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_BackslashQuoteFromJSON = postgresqlConfig13_BackslashQuoteFromJSON;
function postgresqlConfig13_BackslashQuoteToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_UNSPECIFIED:
            return 'BACKSLASH_QUOTE_UNSPECIFIED';
        case PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE:
            return 'BACKSLASH_QUOTE';
        case PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_ON:
            return 'BACKSLASH_QUOTE_ON';
        case PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_OFF:
            return 'BACKSLASH_QUOTE_OFF';
        case PostgresqlConfig13_BackslashQuote.BACKSLASH_QUOTE_SAFE_ENCODING:
            return 'BACKSLASH_QUOTE_SAFE_ENCODING';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_BackslashQuoteToJSON = postgresqlConfig13_BackslashQuoteToJSON;
var PostgresqlConfig13_PlanCacheMode;
(function (PostgresqlConfig13_PlanCacheMode) {
    PostgresqlConfig13_PlanCacheMode[PostgresqlConfig13_PlanCacheMode["PLAN_CACHE_MODE_UNSPECIFIED"] = 0] = "PLAN_CACHE_MODE_UNSPECIFIED";
    PostgresqlConfig13_PlanCacheMode[PostgresqlConfig13_PlanCacheMode["PLAN_CACHE_MODE_AUTO"] = 1] = "PLAN_CACHE_MODE_AUTO";
    PostgresqlConfig13_PlanCacheMode[PostgresqlConfig13_PlanCacheMode["PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN"] = 2] = "PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN";
    PostgresqlConfig13_PlanCacheMode[PostgresqlConfig13_PlanCacheMode["PLAN_CACHE_MODE_FORCE_GENERIC_PLAN"] = 3] = "PLAN_CACHE_MODE_FORCE_GENERIC_PLAN";
    PostgresqlConfig13_PlanCacheMode[PostgresqlConfig13_PlanCacheMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_PlanCacheMode = exports.PostgresqlConfig13_PlanCacheMode || (exports.PostgresqlConfig13_PlanCacheMode = {}));
function postgresqlConfig13_PlanCacheModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'PLAN_CACHE_MODE_UNSPECIFIED':
            return PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_UNSPECIFIED;
        case 1:
        case 'PLAN_CACHE_MODE_AUTO':
            return PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_AUTO;
        case 2:
        case 'PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN':
            return PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN;
        case 3:
        case 'PLAN_CACHE_MODE_FORCE_GENERIC_PLAN':
            return PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_FORCE_GENERIC_PLAN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_PlanCacheMode.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_PlanCacheModeFromJSON = postgresqlConfig13_PlanCacheModeFromJSON;
function postgresqlConfig13_PlanCacheModeToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_UNSPECIFIED:
            return 'PLAN_CACHE_MODE_UNSPECIFIED';
        case PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_AUTO:
            return 'PLAN_CACHE_MODE_AUTO';
        case PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN:
            return 'PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN';
        case PostgresqlConfig13_PlanCacheMode.PLAN_CACHE_MODE_FORCE_GENERIC_PLAN:
            return 'PLAN_CACHE_MODE_FORCE_GENERIC_PLAN';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_PlanCacheModeToJSON = postgresqlConfig13_PlanCacheModeToJSON;
var PostgresqlConfig13_PgHintPlanDebugPrint;
(function (PostgresqlConfig13_PgHintPlanDebugPrint) {
    PostgresqlConfig13_PgHintPlanDebugPrint[PostgresqlConfig13_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED"] = 0] = "PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED";
    PostgresqlConfig13_PgHintPlanDebugPrint[PostgresqlConfig13_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_OFF"] = 1] = "PG_HINT_PLAN_DEBUG_PRINT_OFF";
    PostgresqlConfig13_PgHintPlanDebugPrint[PostgresqlConfig13_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_ON"] = 2] = "PG_HINT_PLAN_DEBUG_PRINT_ON";
    PostgresqlConfig13_PgHintPlanDebugPrint[PostgresqlConfig13_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_DETAILED"] = 3] = "PG_HINT_PLAN_DEBUG_PRINT_DETAILED";
    PostgresqlConfig13_PgHintPlanDebugPrint[PostgresqlConfig13_PgHintPlanDebugPrint["PG_HINT_PLAN_DEBUG_PRINT_VERBOSE"] = 4] = "PG_HINT_PLAN_DEBUG_PRINT_VERBOSE";
    PostgresqlConfig13_PgHintPlanDebugPrint[PostgresqlConfig13_PgHintPlanDebugPrint["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_PgHintPlanDebugPrint = exports.PostgresqlConfig13_PgHintPlanDebugPrint || (exports.PostgresqlConfig13_PgHintPlanDebugPrint = {}));
function postgresqlConfig13_PgHintPlanDebugPrintFromJSON(object) {
    switch (object) {
        case 0:
        case 'PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED':
            return PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED;
        case 1:
        case 'PG_HINT_PLAN_DEBUG_PRINT_OFF':
            return PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF;
        case 2:
        case 'PG_HINT_PLAN_DEBUG_PRINT_ON':
            return PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON;
        case 3:
        case 'PG_HINT_PLAN_DEBUG_PRINT_DETAILED':
            return PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED;
        case 4:
        case 'PG_HINT_PLAN_DEBUG_PRINT_VERBOSE':
            return PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_PgHintPlanDebugPrint.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_PgHintPlanDebugPrintFromJSON = postgresqlConfig13_PgHintPlanDebugPrintFromJSON;
function postgresqlConfig13_PgHintPlanDebugPrintToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED:
            return 'PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED';
        case PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_OFF:
            return 'PG_HINT_PLAN_DEBUG_PRINT_OFF';
        case PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_ON:
            return 'PG_HINT_PLAN_DEBUG_PRINT_ON';
        case PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_DETAILED:
            return 'PG_HINT_PLAN_DEBUG_PRINT_DETAILED';
        case PostgresqlConfig13_PgHintPlanDebugPrint.PG_HINT_PLAN_DEBUG_PRINT_VERBOSE:
            return 'PG_HINT_PLAN_DEBUG_PRINT_VERBOSE';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_PgHintPlanDebugPrintToJSON = postgresqlConfig13_PgHintPlanDebugPrintToJSON;
var PostgresqlConfig13_SharedPreloadLibraries;
(function (PostgresqlConfig13_SharedPreloadLibraries) {
    PostgresqlConfig13_SharedPreloadLibraries[PostgresqlConfig13_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_UNSPECIFIED"] = 0] = "SHARED_PRELOAD_LIBRARIES_UNSPECIFIED";
    PostgresqlConfig13_SharedPreloadLibraries[PostgresqlConfig13_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN"] = 1] = "SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN";
    PostgresqlConfig13_SharedPreloadLibraries[PostgresqlConfig13_SharedPreloadLibraries["SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN"] = 2] = "SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN";
    PostgresqlConfig13_SharedPreloadLibraries[PostgresqlConfig13_SharedPreloadLibraries["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PostgresqlConfig13_SharedPreloadLibraries = exports.PostgresqlConfig13_SharedPreloadLibraries || (exports.PostgresqlConfig13_SharedPreloadLibraries = {}));
function postgresqlConfig13_SharedPreloadLibrariesFromJSON(object) {
    switch (object) {
        case 0:
        case 'SHARED_PRELOAD_LIBRARIES_UNSPECIFIED':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED;
        case 1:
        case 'SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN;
        case 2:
        case 'SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN':
            return PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PostgresqlConfig13_SharedPreloadLibraries.UNRECOGNIZED;
    }
}
exports.postgresqlConfig13_SharedPreloadLibrariesFromJSON = postgresqlConfig13_SharedPreloadLibrariesFromJSON;
function postgresqlConfig13_SharedPreloadLibrariesToJSON(object) {
    switch (object) {
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_UNSPECIFIED:
            return 'SHARED_PRELOAD_LIBRARIES_UNSPECIFIED';
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN:
            return 'SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN';
        case PostgresqlConfig13_SharedPreloadLibraries.SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN:
            return 'SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN';
        default:
            return 'UNKNOWN';
    }
}
exports.postgresqlConfig13_SharedPreloadLibrariesToJSON = postgresqlConfig13_SharedPreloadLibrariesToJSON;
const basePostgresqlConfig13 = {
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
    planCacheMode: 0,
    sharedPreloadLibraries: 0,
    pgHintPlanDebugPrint: 0,
    pgHintPlanMessageLevel: 0,
};
exports.PostgresqlConfig13 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxConnections }, writer.uint32(10).fork()).ldelim();
        }
        if (message.sharedBuffers !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.sharedBuffers }, writer.uint32(18).fork()).ldelim();
        }
        if (message.tempBuffers !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.tempBuffers }, writer.uint32(26).fork()).ldelim();
        }
        if (message.maxPreparedTransactions !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxPreparedTransactions }, writer.uint32(34).fork()).ldelim();
        }
        if (message.workMem !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.workMem }, writer.uint32(42).fork()).ldelim();
        }
        if (message.maintenanceWorkMem !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maintenanceWorkMem }, writer.uint32(50).fork()).ldelim();
        }
        if (message.autovacuumWorkMem !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.autovacuumWorkMem }, writer.uint32(58).fork()).ldelim();
        }
        if (message.tempFileLimit !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.tempFileLimit }, writer.uint32(66).fork()).ldelim();
        }
        if (message.vacuumCostDelay !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.vacuumCostDelay }, writer.uint32(74).fork()).ldelim();
        }
        if (message.vacuumCostPageHit !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.vacuumCostPageHit }, writer.uint32(82).fork()).ldelim();
        }
        if (message.vacuumCostPageMiss !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.vacuumCostPageMiss }, writer.uint32(90).fork()).ldelim();
        }
        if (message.vacuumCostPageDirty !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.vacuumCostPageDirty }, writer.uint32(98).fork()).ldelim();
        }
        if (message.vacuumCostLimit !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.vacuumCostLimit }, writer.uint32(106).fork()).ldelim();
        }
        if (message.bgwriterDelay !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.bgwriterDelay }, writer.uint32(114).fork()).ldelim();
        }
        if (message.bgwriterLruMaxpages !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.bgwriterLruMaxpages }, writer.uint32(122).fork()).ldelim();
        }
        if (message.bgwriterLruMultiplier !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.bgwriterLruMultiplier }, writer.uint32(130).fork()).ldelim();
        }
        if (message.bgwriterFlushAfter !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.bgwriterFlushAfter }, writer.uint32(138).fork()).ldelim();
        }
        if (message.backendFlushAfter !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.backendFlushAfter }, writer.uint32(146).fork()).ldelim();
        }
        if (message.oldSnapshotThreshold !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.oldSnapshotThreshold }, writer.uint32(154).fork()).ldelim();
        }
        if (message.walLevel !== 0) {
            writer.uint32(160).int32(message.walLevel);
        }
        if (message.synchronousCommit !== 0) {
            writer.uint32(168).int32(message.synchronousCommit);
        }
        if (message.checkpointTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.checkpointTimeout }, writer.uint32(178).fork()).ldelim();
        }
        if (message.checkpointCompletionTarget !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.checkpointCompletionTarget }, writer.uint32(186).fork()).ldelim();
        }
        if (message.checkpointFlushAfter !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.checkpointFlushAfter }, writer.uint32(194).fork()).ldelim();
        }
        if (message.maxWalSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxWalSize }, writer.uint32(202).fork()).ldelim();
        }
        if (message.minWalSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.minWalSize }, writer.uint32(210).fork()).ldelim();
        }
        if (message.maxStandbyStreamingDelay !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxStandbyStreamingDelay }, writer.uint32(218).fork()).ldelim();
        }
        if (message.defaultStatisticsTarget !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.defaultStatisticsTarget }, writer.uint32(226).fork()).ldelim();
        }
        if (message.constraintExclusion !== 0) {
            writer.uint32(232).int32(message.constraintExclusion);
        }
        if (message.cursorTupleFraction !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.cursorTupleFraction }, writer.uint32(242).fork()).ldelim();
        }
        if (message.fromCollapseLimit !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.fromCollapseLimit }, writer.uint32(250).fork()).ldelim();
        }
        if (message.joinCollapseLimit !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.joinCollapseLimit }, writer.uint32(258).fork()).ldelim();
        }
        if (message.forceParallelMode !== 0) {
            writer.uint32(264).int32(message.forceParallelMode);
        }
        if (message.clientMinMessages !== 0) {
            writer.uint32(272).int32(message.clientMinMessages);
        }
        if (message.logMinMessages !== 0) {
            writer.uint32(280).int32(message.logMinMessages);
        }
        if (message.logMinErrorStatement !== 0) {
            writer.uint32(288).int32(message.logMinErrorStatement);
        }
        if (message.logMinDurationStatement !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.logMinDurationStatement }, writer.uint32(298).fork()).ldelim();
        }
        if (message.logCheckpoints !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.logCheckpoints }, writer.uint32(306).fork()).ldelim();
        }
        if (message.logConnections !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.logConnections }, writer.uint32(314).fork()).ldelim();
        }
        if (message.logDisconnections !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.logDisconnections }, writer.uint32(322).fork()).ldelim();
        }
        if (message.logDuration !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.logDuration }, writer.uint32(330).fork()).ldelim();
        }
        if (message.logErrorVerbosity !== 0) {
            writer.uint32(336).int32(message.logErrorVerbosity);
        }
        if (message.logLockWaits !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.logLockWaits }, writer.uint32(346).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(352).int32(message.logStatement);
        }
        if (message.logTempFiles !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.logTempFiles }, writer.uint32(362).fork()).ldelim();
        }
        if (message.searchPath !== '') {
            writer.uint32(370).string(message.searchPath);
        }
        if (message.rowSecurity !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.rowSecurity }, writer.uint32(378).fork()).ldelim();
        }
        if (message.defaultTransactionIsolation !== 0) {
            writer.uint32(384).int32(message.defaultTransactionIsolation);
        }
        if (message.statementTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.statementTimeout }, writer.uint32(394).fork()).ldelim();
        }
        if (message.lockTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.lockTimeout }, writer.uint32(402).fork()).ldelim();
        }
        if (message.idleInTransactionSessionTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.idleInTransactionSessionTimeout }, writer.uint32(410).fork()).ldelim();
        }
        if (message.byteaOutput !== 0) {
            writer.uint32(416).int32(message.byteaOutput);
        }
        if (message.xmlbinary !== 0) {
            writer.uint32(424).int32(message.xmlbinary);
        }
        if (message.xmloption !== 0) {
            writer.uint32(432).int32(message.xmloption);
        }
        if (message.ginPendingListLimit !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.ginPendingListLimit }, writer.uint32(442).fork()).ldelim();
        }
        if (message.deadlockTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.deadlockTimeout }, writer.uint32(450).fork()).ldelim();
        }
        if (message.maxLocksPerTransaction !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxLocksPerTransaction }, writer.uint32(458).fork()).ldelim();
        }
        if (message.maxPredLocksPerTransaction !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxPredLocksPerTransaction }, writer.uint32(466).fork()).ldelim();
        }
        if (message.arrayNulls !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.arrayNulls }, writer.uint32(474).fork()).ldelim();
        }
        if (message.backslashQuote !== 0) {
            writer.uint32(480).int32(message.backslashQuote);
        }
        if (message.defaultWithOids !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.defaultWithOids }, writer.uint32(490).fork()).ldelim();
        }
        if (message.escapeStringWarning !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.escapeStringWarning }, writer.uint32(498).fork()).ldelim();
        }
        if (message.loCompatPrivileges !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.loCompatPrivileges }, writer.uint32(506).fork()).ldelim();
        }
        if (message.operatorPrecedenceWarning !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.operatorPrecedenceWarning }, writer.uint32(514).fork()).ldelim();
        }
        if (message.quoteAllIdentifiers !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.quoteAllIdentifiers }, writer.uint32(522).fork()).ldelim();
        }
        if (message.standardConformingStrings !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.standardConformingStrings }, writer.uint32(530).fork()).ldelim();
        }
        if (message.synchronizeSeqscans !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.synchronizeSeqscans }, writer.uint32(538).fork()).ldelim();
        }
        if (message.transformNullEquals !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.transformNullEquals }, writer.uint32(546).fork()).ldelim();
        }
        if (message.exitOnError !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.exitOnError }, writer.uint32(554).fork()).ldelim();
        }
        if (message.seqPageCost !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.seqPageCost }, writer.uint32(562).fork()).ldelim();
        }
        if (message.randomPageCost !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.randomPageCost }, writer.uint32(570).fork()).ldelim();
        }
        if (message.autovacuumMaxWorkers !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.autovacuumMaxWorkers }, writer.uint32(578).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostDelay !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.autovacuumVacuumCostDelay }, writer.uint32(586).fork()).ldelim();
        }
        if (message.autovacuumVacuumCostLimit !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.autovacuumVacuumCostLimit }, writer.uint32(594).fork()).ldelim();
        }
        if (message.autovacuumNaptime !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.autovacuumNaptime }, writer.uint32(602).fork()).ldelim();
        }
        if (message.archiveTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.archiveTimeout }, writer.uint32(610).fork()).ldelim();
        }
        if (message.trackActivityQuerySize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.trackActivityQuerySize }, writer.uint32(618).fork()).ldelim();
        }
        if (message.enableBitmapscan !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableBitmapscan }, writer.uint32(642).fork()).ldelim();
        }
        if (message.enableHashagg !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableHashagg }, writer.uint32(650).fork()).ldelim();
        }
        if (message.enableHashjoin !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableHashjoin }, writer.uint32(658).fork()).ldelim();
        }
        if (message.enableIndexscan !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableIndexscan }, writer.uint32(666).fork()).ldelim();
        }
        if (message.enableIndexonlyscan !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableIndexonlyscan }, writer.uint32(674).fork()).ldelim();
        }
        if (message.enableMaterial !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableMaterial }, writer.uint32(682).fork()).ldelim();
        }
        if (message.enableMergejoin !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableMergejoin }, writer.uint32(690).fork()).ldelim();
        }
        if (message.enableNestloop !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableNestloop }, writer.uint32(698).fork()).ldelim();
        }
        if (message.enableSeqscan !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableSeqscan }, writer.uint32(706).fork()).ldelim();
        }
        if (message.enableSort !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableSort }, writer.uint32(714).fork()).ldelim();
        }
        if (message.enableTidscan !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableTidscan }, writer.uint32(722).fork()).ldelim();
        }
        if (message.maxWorkerProcesses !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxWorkerProcesses }, writer.uint32(730).fork()).ldelim();
        }
        if (message.maxParallelWorkers !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxParallelWorkers }, writer.uint32(738).fork()).ldelim();
        }
        if (message.maxParallelWorkersPerGather !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxParallelWorkersPerGather }, writer.uint32(746).fork()).ldelim();
        }
        if (message.autovacuumVacuumScaleFactor !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.autovacuumVacuumScaleFactor }, writer.uint32(754).fork()).ldelim();
        }
        if (message.autovacuumAnalyzeScaleFactor !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.autovacuumAnalyzeScaleFactor }, writer.uint32(762).fork()).ldelim();
        }
        if (message.defaultTransactionReadOnly !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.defaultTransactionReadOnly }, writer.uint32(770).fork()).ldelim();
        }
        if (message.timezone !== '') {
            writer.uint32(778).string(message.timezone);
        }
        if (message.enableParallelAppend !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableParallelAppend }, writer.uint32(786).fork()).ldelim();
        }
        if (message.enableParallelHash !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableParallelHash }, writer.uint32(794).fork()).ldelim();
        }
        if (message.enablePartitionPruning !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enablePartitionPruning }, writer.uint32(802).fork()).ldelim();
        }
        if (message.enablePartitionwiseAggregate !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enablePartitionwiseAggregate }, writer.uint32(810).fork()).ldelim();
        }
        if (message.enablePartitionwiseJoin !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enablePartitionwiseJoin }, writer.uint32(818).fork()).ldelim();
        }
        if (message.jit !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.jit }, writer.uint32(826).fork()).ldelim();
        }
        if (message.maxParallelMaintenanceWorkers !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxParallelMaintenanceWorkers }, writer.uint32(834).fork()).ldelim();
        }
        if (message.parallelLeaderParticipation !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.parallelLeaderParticipation }, writer.uint32(842).fork()).ldelim();
        }
        if (message.vacuumCleanupIndexScaleFactor !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.vacuumCleanupIndexScaleFactor }, writer.uint32(850).fork()).ldelim();
        }
        if (message.logTransactionSampleRate !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.logTransactionSampleRate }, writer.uint32(858).fork()).ldelim();
        }
        if (message.planCacheMode !== 0) {
            writer.uint32(864).int32(message.planCacheMode);
        }
        if (message.effectiveIoConcurrency !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.effectiveIoConcurrency }, writer.uint32(874).fork()).ldelim();
        }
        if (message.effectiveCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.effectiveCacheSize }, writer.uint32(882).fork()).ldelim();
        }
        writer.uint32(890).fork();
        for (const v of message.sharedPreloadLibraries) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.autoExplainLogMinDuration !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.autoExplainLogMinDuration }, writer.uint32(898).fork()).ldelim();
        }
        if (message.autoExplainLogAnalyze !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.autoExplainLogAnalyze }, writer.uint32(906).fork()).ldelim();
        }
        if (message.autoExplainLogBuffers !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.autoExplainLogBuffers }, writer.uint32(914).fork()).ldelim();
        }
        if (message.autoExplainLogTiming !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.autoExplainLogTiming }, writer.uint32(922).fork()).ldelim();
        }
        if (message.autoExplainLogTriggers !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.autoExplainLogTriggers }, writer.uint32(930).fork()).ldelim();
        }
        if (message.autoExplainLogVerbose !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.autoExplainLogVerbose }, writer.uint32(938).fork()).ldelim();
        }
        if (message.autoExplainLogNestedStatements !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.autoExplainLogNestedStatements }, writer.uint32(946).fork()).ldelim();
        }
        if (message.autoExplainSampleRate !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.autoExplainSampleRate }, writer.uint32(954).fork()).ldelim();
        }
        if (message.pgHintPlanEnableHint !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.pgHintPlanEnableHint }, writer.uint32(962).fork()).ldelim();
        }
        if (message.pgHintPlanEnableHintTable !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.pgHintPlanEnableHintTable }, writer.uint32(970).fork()).ldelim();
        }
        if (message.pgHintPlanDebugPrint !== 0) {
            writer.uint32(976).int32(message.pgHintPlanDebugPrint);
        }
        if (message.pgHintPlanMessageLevel !== 0) {
            writer.uint32(984).int32(message.pgHintPlanMessageLevel);
        }
        if (message.hashMemMultiplier !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.hashMemMultiplier }, writer.uint32(994).fork()).ldelim();
        }
        if (message.logicalDecodingWorkMem !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.logicalDecodingWorkMem }, writer.uint32(1010).fork()).ldelim();
        }
        if (message.maintenanceIoConcurrency !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maintenanceIoConcurrency }, writer.uint32(1018).fork()).ldelim();
        }
        if (message.maxSlotWalKeepSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxSlotWalKeepSize }, writer.uint32(1026).fork()).ldelim();
        }
        if (message.walKeepSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.walKeepSize }, writer.uint32(1034).fork()).ldelim();
        }
        if (message.enableIncrementalSort !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.enableIncrementalSort }, writer.uint32(1042).fork()).ldelim();
        }
        if (message.autovacuumVacuumInsertThreshold !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.autovacuumVacuumInsertThreshold }, writer.uint32(1050).fork()).ldelim();
        }
        if (message.autovacuumVacuumInsertScaleFactor !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.autovacuumVacuumInsertScaleFactor }, writer.uint32(1058).fork()).ldelim();
        }
        if (message.logMinDurationSample !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.logMinDurationSample }, writer.uint32(1066).fork()).ldelim();
        }
        if (message.logStatementSampleRate !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.logStatementSampleRate }, writer.uint32(1074).fork()).ldelim();
        }
        if (message.logParameterMaxLength !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.logParameterMaxLength }, writer.uint32(1082).fork()).ldelim();
        }
        if (message.logParameterMaxLengthOnError !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.logParameterMaxLengthOnError }, writer.uint32(1090).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePostgresqlConfig13 };
        message.sharedPreloadLibraries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.sharedBuffers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.tempBuffers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.maxPreparedTransactions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.workMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.maintenanceWorkMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.autovacuumWorkMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.tempFileLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.vacuumCostDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.vacuumCostPageHit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.vacuumCostPageMiss = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.vacuumCostPageDirty = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.vacuumCostLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.bgwriterDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.bgwriterLruMaxpages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 16:
                    message.bgwriterLruMultiplier = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.bgwriterFlushAfter = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 18:
                    message.backendFlushAfter = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.oldSnapshotThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.walLevel = reader.int32();
                    break;
                case 21:
                    message.synchronousCommit = reader.int32();
                    break;
                case 22:
                    message.checkpointTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 23:
                    message.checkpointCompletionTarget = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 24:
                    message.checkpointFlushAfter = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.maxWalSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.minWalSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.maxStandbyStreamingDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.defaultStatisticsTarget = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.constraintExclusion = reader.int32();
                    break;
                case 30:
                    message.cursorTupleFraction = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.fromCollapseLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.joinCollapseLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.forceParallelMode = reader.int32();
                    break;
                case 34:
                    message.clientMinMessages = reader.int32();
                    break;
                case 35:
                    message.logMinMessages = reader.int32();
                    break;
                case 36:
                    message.logMinErrorStatement = reader.int32();
                    break;
                case 37:
                    message.logMinDurationStatement = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 38:
                    message.logCheckpoints = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 39:
                    message.logConnections = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.logDisconnections = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.logDuration = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.logErrorVerbosity = reader.int32();
                    break;
                case 43:
                    message.logLockWaits = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 44:
                    message.logStatement = reader.int32();
                    break;
                case 45:
                    message.logTempFiles = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 46:
                    message.searchPath = reader.string();
                    break;
                case 47:
                    message.rowSecurity = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 48:
                    message.defaultTransactionIsolation = reader.int32();
                    break;
                case 49:
                    message.statementTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 50:
                    message.lockTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.idleInTransactionSessionTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 52:
                    message.byteaOutput = reader.int32();
                    break;
                case 53:
                    message.xmlbinary = reader.int32();
                    break;
                case 54:
                    message.xmloption = reader.int32();
                    break;
                case 55:
                    message.ginPendingListLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 56:
                    message.deadlockTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 57:
                    message.maxLocksPerTransaction = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 58:
                    message.maxPredLocksPerTransaction = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 59:
                    message.arrayNulls = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 60:
                    message.backslashQuote = reader.int32();
                    break;
                case 61:
                    message.defaultWithOids = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 62:
                    message.escapeStringWarning = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 63:
                    message.loCompatPrivileges = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 64:
                    message.operatorPrecedenceWarning = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 65:
                    message.quoteAllIdentifiers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 66:
                    message.standardConformingStrings = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 67:
                    message.synchronizeSeqscans = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 68:
                    message.transformNullEquals = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 69:
                    message.exitOnError = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 70:
                    message.seqPageCost = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 71:
                    message.randomPageCost = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 72:
                    message.autovacuumMaxWorkers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 73:
                    message.autovacuumVacuumCostDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 74:
                    message.autovacuumVacuumCostLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 75:
                    message.autovacuumNaptime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 76:
                    message.archiveTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 77:
                    message.trackActivityQuerySize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 80:
                    message.enableBitmapscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 81:
                    message.enableHashagg = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 82:
                    message.enableHashjoin = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 83:
                    message.enableIndexscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 84:
                    message.enableIndexonlyscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 85:
                    message.enableMaterial = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 86:
                    message.enableMergejoin = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 87:
                    message.enableNestloop = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 88:
                    message.enableSeqscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 89:
                    message.enableSort = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 90:
                    message.enableTidscan = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 91:
                    message.maxWorkerProcesses = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 92:
                    message.maxParallelWorkers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 93:
                    message.maxParallelWorkersPerGather = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 94:
                    message.autovacuumVacuumScaleFactor = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 95:
                    message.autovacuumAnalyzeScaleFactor = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 96:
                    message.defaultTransactionReadOnly = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 97:
                    message.timezone = reader.string();
                    break;
                case 98:
                    message.enableParallelAppend = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 99:
                    message.enableParallelHash = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 100:
                    message.enablePartitionPruning = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 101:
                    message.enablePartitionwiseAggregate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 102:
                    message.enablePartitionwiseJoin = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 103:
                    message.jit = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 104:
                    message.maxParallelMaintenanceWorkers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 105:
                    message.parallelLeaderParticipation = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 106:
                    message.vacuumCleanupIndexScaleFactor = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 107:
                    message.logTransactionSampleRate = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 108:
                    message.planCacheMode = reader.int32();
                    break;
                case 109:
                    message.effectiveIoConcurrency = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 110:
                    message.effectiveCacheSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 111:
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
                case 112:
                    message.autoExplainLogMinDuration = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 113:
                    message.autoExplainLogAnalyze = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 114:
                    message.autoExplainLogBuffers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 115:
                    message.autoExplainLogTiming = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 116:
                    message.autoExplainLogTriggers = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 117:
                    message.autoExplainLogVerbose = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 118:
                    message.autoExplainLogNestedStatements = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 119:
                    message.autoExplainSampleRate = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 120:
                    message.pgHintPlanEnableHint = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 121:
                    message.pgHintPlanEnableHintTable = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 122:
                    message.pgHintPlanDebugPrint = reader.int32();
                    break;
                case 123:
                    message.pgHintPlanMessageLevel = reader.int32();
                    break;
                case 124:
                    message.hashMemMultiplier = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 126:
                    message.logicalDecodingWorkMem = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 127:
                    message.maintenanceIoConcurrency = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 128:
                    message.maxSlotWalKeepSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 129:
                    message.walKeepSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 130:
                    message.enableIncrementalSort = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 131:
                    message.autovacuumVacuumInsertThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 132:
                    message.autovacuumVacuumInsertScaleFactor =
                        wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 133:
                    message.logMinDurationSample = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 134:
                    message.logStatementSampleRate = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 135:
                    message.logParameterMaxLength = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 136:
                    message.logParameterMaxLengthOnError = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePostgresqlConfig13 };
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
            message.walLevel = postgresqlConfig13_WalLevelFromJSON(object.walLevel);
        }
        else {
            message.walLevel = 0;
        }
        if (object.synchronousCommit !== undefined &&
            object.synchronousCommit !== null) {
            message.synchronousCommit =
                postgresqlConfig13_SynchronousCommitFromJSON(object.synchronousCommit);
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
                postgresqlConfig13_ConstraintExclusionFromJSON(object.constraintExclusion);
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
                postgresqlConfig13_ForceParallelModeFromJSON(object.forceParallelMode);
        }
        else {
            message.forceParallelMode = 0;
        }
        if (object.clientMinMessages !== undefined &&
            object.clientMinMessages !== null) {
            message.clientMinMessages = postgresqlConfig13_LogLevelFromJSON(object.clientMinMessages);
        }
        else {
            message.clientMinMessages = 0;
        }
        if (object.logMinMessages !== undefined &&
            object.logMinMessages !== null) {
            message.logMinMessages = postgresqlConfig13_LogLevelFromJSON(object.logMinMessages);
        }
        else {
            message.logMinMessages = 0;
        }
        if (object.logMinErrorStatement !== undefined &&
            object.logMinErrorStatement !== null) {
            message.logMinErrorStatement = postgresqlConfig13_LogLevelFromJSON(object.logMinErrorStatement);
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
                postgresqlConfig13_LogErrorVerbosityFromJSON(object.logErrorVerbosity);
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
            message.logStatement = postgresqlConfig13_LogStatementFromJSON(object.logStatement);
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
                postgresqlConfig13_TransactionIsolationFromJSON(object.defaultTransactionIsolation);
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
            message.byteaOutput = postgresqlConfig13_ByteaOutputFromJSON(object.byteaOutput);
        }
        else {
            message.byteaOutput = 0;
        }
        if (object.xmlbinary !== undefined && object.xmlbinary !== null) {
            message.xmlbinary = postgresqlConfig13_XmlBinaryFromJSON(object.xmlbinary);
        }
        else {
            message.xmlbinary = 0;
        }
        if (object.xmloption !== undefined && object.xmloption !== null) {
            message.xmloption = postgresqlConfig13_XmlOptionFromJSON(object.xmloption);
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
            message.backslashQuote = postgresqlConfig13_BackslashQuoteFromJSON(object.backslashQuote);
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
        if (object.enableParallelAppend !== undefined &&
            object.enableParallelAppend !== null) {
            message.enableParallelAppend = Boolean(object.enableParallelAppend);
        }
        else {
            message.enableParallelAppend = undefined;
        }
        if (object.enableParallelHash !== undefined &&
            object.enableParallelHash !== null) {
            message.enableParallelHash = Boolean(object.enableParallelHash);
        }
        else {
            message.enableParallelHash = undefined;
        }
        if (object.enablePartitionPruning !== undefined &&
            object.enablePartitionPruning !== null) {
            message.enablePartitionPruning = Boolean(object.enablePartitionPruning);
        }
        else {
            message.enablePartitionPruning = undefined;
        }
        if (object.enablePartitionwiseAggregate !== undefined &&
            object.enablePartitionwiseAggregate !== null) {
            message.enablePartitionwiseAggregate = Boolean(object.enablePartitionwiseAggregate);
        }
        else {
            message.enablePartitionwiseAggregate = undefined;
        }
        if (object.enablePartitionwiseJoin !== undefined &&
            object.enablePartitionwiseJoin !== null) {
            message.enablePartitionwiseJoin = Boolean(object.enablePartitionwiseJoin);
        }
        else {
            message.enablePartitionwiseJoin = undefined;
        }
        if (object.jit !== undefined && object.jit !== null) {
            message.jit = Boolean(object.jit);
        }
        else {
            message.jit = undefined;
        }
        if (object.maxParallelMaintenanceWorkers !== undefined &&
            object.maxParallelMaintenanceWorkers !== null) {
            message.maxParallelMaintenanceWorkers = Number(object.maxParallelMaintenanceWorkers);
        }
        else {
            message.maxParallelMaintenanceWorkers = undefined;
        }
        if (object.parallelLeaderParticipation !== undefined &&
            object.parallelLeaderParticipation !== null) {
            message.parallelLeaderParticipation = Boolean(object.parallelLeaderParticipation);
        }
        else {
            message.parallelLeaderParticipation = undefined;
        }
        if (object.vacuumCleanupIndexScaleFactor !== undefined &&
            object.vacuumCleanupIndexScaleFactor !== null) {
            message.vacuumCleanupIndexScaleFactor = Number(object.vacuumCleanupIndexScaleFactor);
        }
        else {
            message.vacuumCleanupIndexScaleFactor = undefined;
        }
        if (object.logTransactionSampleRate !== undefined &&
            object.logTransactionSampleRate !== null) {
            message.logTransactionSampleRate = Number(object.logTransactionSampleRate);
        }
        else {
            message.logTransactionSampleRate = undefined;
        }
        if (object.planCacheMode !== undefined &&
            object.planCacheMode !== null) {
            message.planCacheMode = postgresqlConfig13_PlanCacheModeFromJSON(object.planCacheMode);
        }
        else {
            message.planCacheMode = 0;
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
                message.sharedPreloadLibraries.push(postgresqlConfig13_SharedPreloadLibrariesFromJSON(e));
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
                postgresqlConfig13_PgHintPlanDebugPrintFromJSON(object.pgHintPlanDebugPrint);
        }
        else {
            message.pgHintPlanDebugPrint = 0;
        }
        if (object.pgHintPlanMessageLevel !== undefined &&
            object.pgHintPlanMessageLevel !== null) {
            message.pgHintPlanMessageLevel =
                postgresqlConfig13_LogLevelFromJSON(object.pgHintPlanMessageLevel);
        }
        else {
            message.pgHintPlanMessageLevel = 0;
        }
        if (object.hashMemMultiplier !== undefined &&
            object.hashMemMultiplier !== null) {
            message.hashMemMultiplier = Number(object.hashMemMultiplier);
        }
        else {
            message.hashMemMultiplier = undefined;
        }
        if (object.logicalDecodingWorkMem !== undefined &&
            object.logicalDecodingWorkMem !== null) {
            message.logicalDecodingWorkMem = Number(object.logicalDecodingWorkMem);
        }
        else {
            message.logicalDecodingWorkMem = undefined;
        }
        if (object.maintenanceIoConcurrency !== undefined &&
            object.maintenanceIoConcurrency !== null) {
            message.maintenanceIoConcurrency = Number(object.maintenanceIoConcurrency);
        }
        else {
            message.maintenanceIoConcurrency = undefined;
        }
        if (object.maxSlotWalKeepSize !== undefined &&
            object.maxSlotWalKeepSize !== null) {
            message.maxSlotWalKeepSize = Number(object.maxSlotWalKeepSize);
        }
        else {
            message.maxSlotWalKeepSize = undefined;
        }
        if (object.walKeepSize !== undefined && object.walKeepSize !== null) {
            message.walKeepSize = Number(object.walKeepSize);
        }
        else {
            message.walKeepSize = undefined;
        }
        if (object.enableIncrementalSort !== undefined &&
            object.enableIncrementalSort !== null) {
            message.enableIncrementalSort = Boolean(object.enableIncrementalSort);
        }
        else {
            message.enableIncrementalSort = undefined;
        }
        if (object.autovacuumVacuumInsertThreshold !== undefined &&
            object.autovacuumVacuumInsertThreshold !== null) {
            message.autovacuumVacuumInsertThreshold = Number(object.autovacuumVacuumInsertThreshold);
        }
        else {
            message.autovacuumVacuumInsertThreshold = undefined;
        }
        if (object.autovacuumVacuumInsertScaleFactor !== undefined &&
            object.autovacuumVacuumInsertScaleFactor !== null) {
            message.autovacuumVacuumInsertScaleFactor = Number(object.autovacuumVacuumInsertScaleFactor);
        }
        else {
            message.autovacuumVacuumInsertScaleFactor = undefined;
        }
        if (object.logMinDurationSample !== undefined &&
            object.logMinDurationSample !== null) {
            message.logMinDurationSample = Number(object.logMinDurationSample);
        }
        else {
            message.logMinDurationSample = undefined;
        }
        if (object.logStatementSampleRate !== undefined &&
            object.logStatementSampleRate !== null) {
            message.logStatementSampleRate = Number(object.logStatementSampleRate);
        }
        else {
            message.logStatementSampleRate = undefined;
        }
        if (object.logParameterMaxLength !== undefined &&
            object.logParameterMaxLength !== null) {
            message.logParameterMaxLength = Number(object.logParameterMaxLength);
        }
        else {
            message.logParameterMaxLength = undefined;
        }
        if (object.logParameterMaxLengthOnError !== undefined &&
            object.logParameterMaxLengthOnError !== null) {
            message.logParameterMaxLengthOnError = Number(object.logParameterMaxLengthOnError);
        }
        else {
            message.logParameterMaxLengthOnError = undefined;
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
            (obj.walLevel = postgresqlConfig13_WalLevelToJSON(message.walLevel));
        message.synchronousCommit !== undefined &&
            (obj.synchronousCommit = postgresqlConfig13_SynchronousCommitToJSON(message.synchronousCommit));
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
                postgresqlConfig13_ConstraintExclusionToJSON(message.constraintExclusion));
        message.cursorTupleFraction !== undefined &&
            (obj.cursorTupleFraction = message.cursorTupleFraction);
        message.fromCollapseLimit !== undefined &&
            (obj.fromCollapseLimit = message.fromCollapseLimit);
        message.joinCollapseLimit !== undefined &&
            (obj.joinCollapseLimit = message.joinCollapseLimit);
        message.forceParallelMode !== undefined &&
            (obj.forceParallelMode = postgresqlConfig13_ForceParallelModeToJSON(message.forceParallelMode));
        message.clientMinMessages !== undefined &&
            (obj.clientMinMessages = postgresqlConfig13_LogLevelToJSON(message.clientMinMessages));
        message.logMinMessages !== undefined &&
            (obj.logMinMessages = postgresqlConfig13_LogLevelToJSON(message.logMinMessages));
        message.logMinErrorStatement !== undefined &&
            (obj.logMinErrorStatement = postgresqlConfig13_LogLevelToJSON(message.logMinErrorStatement));
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
            (obj.logErrorVerbosity = postgresqlConfig13_LogErrorVerbosityToJSON(message.logErrorVerbosity));
        message.logLockWaits !== undefined &&
            (obj.logLockWaits = message.logLockWaits);
        message.logStatement !== undefined &&
            (obj.logStatement = postgresqlConfig13_LogStatementToJSON(message.logStatement));
        message.logTempFiles !== undefined &&
            (obj.logTempFiles = message.logTempFiles);
        message.searchPath !== undefined &&
            (obj.searchPath = message.searchPath);
        message.rowSecurity !== undefined &&
            (obj.rowSecurity = message.rowSecurity);
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation =
                postgresqlConfig13_TransactionIsolationToJSON(message.defaultTransactionIsolation));
        message.statementTimeout !== undefined &&
            (obj.statementTimeout = message.statementTimeout);
        message.lockTimeout !== undefined &&
            (obj.lockTimeout = message.lockTimeout);
        message.idleInTransactionSessionTimeout !== undefined &&
            (obj.idleInTransactionSessionTimeout =
                message.idleInTransactionSessionTimeout);
        message.byteaOutput !== undefined &&
            (obj.byteaOutput = postgresqlConfig13_ByteaOutputToJSON(message.byteaOutput));
        message.xmlbinary !== undefined &&
            (obj.xmlbinary = postgresqlConfig13_XmlBinaryToJSON(message.xmlbinary));
        message.xmloption !== undefined &&
            (obj.xmloption = postgresqlConfig13_XmlOptionToJSON(message.xmloption));
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
            (obj.backslashQuote = postgresqlConfig13_BackslashQuoteToJSON(message.backslashQuote));
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
        message.enableParallelAppend !== undefined &&
            (obj.enableParallelAppend = message.enableParallelAppend);
        message.enableParallelHash !== undefined &&
            (obj.enableParallelHash = message.enableParallelHash);
        message.enablePartitionPruning !== undefined &&
            (obj.enablePartitionPruning = message.enablePartitionPruning);
        message.enablePartitionwiseAggregate !== undefined &&
            (obj.enablePartitionwiseAggregate =
                message.enablePartitionwiseAggregate);
        message.enablePartitionwiseJoin !== undefined &&
            (obj.enablePartitionwiseJoin = message.enablePartitionwiseJoin);
        message.jit !== undefined && (obj.jit = message.jit);
        message.maxParallelMaintenanceWorkers !== undefined &&
            (obj.maxParallelMaintenanceWorkers =
                message.maxParallelMaintenanceWorkers);
        message.parallelLeaderParticipation !== undefined &&
            (obj.parallelLeaderParticipation =
                message.parallelLeaderParticipation);
        message.vacuumCleanupIndexScaleFactor !== undefined &&
            (obj.vacuumCleanupIndexScaleFactor =
                message.vacuumCleanupIndexScaleFactor);
        message.logTransactionSampleRate !== undefined &&
            (obj.logTransactionSampleRate = message.logTransactionSampleRate);
        message.planCacheMode !== undefined &&
            (obj.planCacheMode = postgresqlConfig13_PlanCacheModeToJSON(message.planCacheMode));
        message.effectiveIoConcurrency !== undefined &&
            (obj.effectiveIoConcurrency = message.effectiveIoConcurrency);
        message.effectiveCacheSize !== undefined &&
            (obj.effectiveCacheSize = message.effectiveCacheSize);
        if (message.sharedPreloadLibraries) {
            obj.sharedPreloadLibraries = message.sharedPreloadLibraries.map((e) => postgresqlConfig13_SharedPreloadLibrariesToJSON(e));
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
                postgresqlConfig13_PgHintPlanDebugPrintToJSON(message.pgHintPlanDebugPrint));
        message.pgHintPlanMessageLevel !== undefined &&
            (obj.pgHintPlanMessageLevel = postgresqlConfig13_LogLevelToJSON(message.pgHintPlanMessageLevel));
        message.hashMemMultiplier !== undefined &&
            (obj.hashMemMultiplier = message.hashMemMultiplier);
        message.logicalDecodingWorkMem !== undefined &&
            (obj.logicalDecodingWorkMem = message.logicalDecodingWorkMem);
        message.maintenanceIoConcurrency !== undefined &&
            (obj.maintenanceIoConcurrency = message.maintenanceIoConcurrency);
        message.maxSlotWalKeepSize !== undefined &&
            (obj.maxSlotWalKeepSize = message.maxSlotWalKeepSize);
        message.walKeepSize !== undefined &&
            (obj.walKeepSize = message.walKeepSize);
        message.enableIncrementalSort !== undefined &&
            (obj.enableIncrementalSort = message.enableIncrementalSort);
        message.autovacuumVacuumInsertThreshold !== undefined &&
            (obj.autovacuumVacuumInsertThreshold =
                message.autovacuumVacuumInsertThreshold);
        message.autovacuumVacuumInsertScaleFactor !== undefined &&
            (obj.autovacuumVacuumInsertScaleFactor =
                message.autovacuumVacuumInsertScaleFactor);
        message.logMinDurationSample !== undefined &&
            (obj.logMinDurationSample = message.logMinDurationSample);
        message.logStatementSampleRate !== undefined &&
            (obj.logStatementSampleRate = message.logStatementSampleRate);
        message.logParameterMaxLength !== undefined &&
            (obj.logParameterMaxLength = message.logParameterMaxLength);
        message.logParameterMaxLengthOnError !== undefined &&
            (obj.logParameterMaxLengthOnError =
                message.logParameterMaxLengthOnError);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePostgresqlConfig13 };
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
        if (object.enableParallelAppend !== undefined &&
            object.enableParallelAppend !== null) {
            message.enableParallelAppend = object.enableParallelAppend;
        }
        else {
            message.enableParallelAppend = undefined;
        }
        if (object.enableParallelHash !== undefined &&
            object.enableParallelHash !== null) {
            message.enableParallelHash = object.enableParallelHash;
        }
        else {
            message.enableParallelHash = undefined;
        }
        if (object.enablePartitionPruning !== undefined &&
            object.enablePartitionPruning !== null) {
            message.enablePartitionPruning = object.enablePartitionPruning;
        }
        else {
            message.enablePartitionPruning = undefined;
        }
        if (object.enablePartitionwiseAggregate !== undefined &&
            object.enablePartitionwiseAggregate !== null) {
            message.enablePartitionwiseAggregate =
                object.enablePartitionwiseAggregate;
        }
        else {
            message.enablePartitionwiseAggregate = undefined;
        }
        if (object.enablePartitionwiseJoin !== undefined &&
            object.enablePartitionwiseJoin !== null) {
            message.enablePartitionwiseJoin = object.enablePartitionwiseJoin;
        }
        else {
            message.enablePartitionwiseJoin = undefined;
        }
        if (object.jit !== undefined && object.jit !== null) {
            message.jit = object.jit;
        }
        else {
            message.jit = undefined;
        }
        if (object.maxParallelMaintenanceWorkers !== undefined &&
            object.maxParallelMaintenanceWorkers !== null) {
            message.maxParallelMaintenanceWorkers =
                object.maxParallelMaintenanceWorkers;
        }
        else {
            message.maxParallelMaintenanceWorkers = undefined;
        }
        if (object.parallelLeaderParticipation !== undefined &&
            object.parallelLeaderParticipation !== null) {
            message.parallelLeaderParticipation =
                object.parallelLeaderParticipation;
        }
        else {
            message.parallelLeaderParticipation = undefined;
        }
        if (object.vacuumCleanupIndexScaleFactor !== undefined &&
            object.vacuumCleanupIndexScaleFactor !== null) {
            message.vacuumCleanupIndexScaleFactor =
                object.vacuumCleanupIndexScaleFactor;
        }
        else {
            message.vacuumCleanupIndexScaleFactor = undefined;
        }
        if (object.logTransactionSampleRate !== undefined &&
            object.logTransactionSampleRate !== null) {
            message.logTransactionSampleRate = object.logTransactionSampleRate;
        }
        else {
            message.logTransactionSampleRate = undefined;
        }
        if (object.planCacheMode !== undefined &&
            object.planCacheMode !== null) {
            message.planCacheMode = object.planCacheMode;
        }
        else {
            message.planCacheMode = 0;
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
        if (object.hashMemMultiplier !== undefined &&
            object.hashMemMultiplier !== null) {
            message.hashMemMultiplier = object.hashMemMultiplier;
        }
        else {
            message.hashMemMultiplier = undefined;
        }
        if (object.logicalDecodingWorkMem !== undefined &&
            object.logicalDecodingWorkMem !== null) {
            message.logicalDecodingWorkMem = object.logicalDecodingWorkMem;
        }
        else {
            message.logicalDecodingWorkMem = undefined;
        }
        if (object.maintenanceIoConcurrency !== undefined &&
            object.maintenanceIoConcurrency !== null) {
            message.maintenanceIoConcurrency = object.maintenanceIoConcurrency;
        }
        else {
            message.maintenanceIoConcurrency = undefined;
        }
        if (object.maxSlotWalKeepSize !== undefined &&
            object.maxSlotWalKeepSize !== null) {
            message.maxSlotWalKeepSize = object.maxSlotWalKeepSize;
        }
        else {
            message.maxSlotWalKeepSize = undefined;
        }
        if (object.walKeepSize !== undefined && object.walKeepSize !== null) {
            message.walKeepSize = object.walKeepSize;
        }
        else {
            message.walKeepSize = undefined;
        }
        if (object.enableIncrementalSort !== undefined &&
            object.enableIncrementalSort !== null) {
            message.enableIncrementalSort = object.enableIncrementalSort;
        }
        else {
            message.enableIncrementalSort = undefined;
        }
        if (object.autovacuumVacuumInsertThreshold !== undefined &&
            object.autovacuumVacuumInsertThreshold !== null) {
            message.autovacuumVacuumInsertThreshold =
                object.autovacuumVacuumInsertThreshold;
        }
        else {
            message.autovacuumVacuumInsertThreshold = undefined;
        }
        if (object.autovacuumVacuumInsertScaleFactor !== undefined &&
            object.autovacuumVacuumInsertScaleFactor !== null) {
            message.autovacuumVacuumInsertScaleFactor =
                object.autovacuumVacuumInsertScaleFactor;
        }
        else {
            message.autovacuumVacuumInsertScaleFactor = undefined;
        }
        if (object.logMinDurationSample !== undefined &&
            object.logMinDurationSample !== null) {
            message.logMinDurationSample = object.logMinDurationSample;
        }
        else {
            message.logMinDurationSample = undefined;
        }
        if (object.logStatementSampleRate !== undefined &&
            object.logStatementSampleRate !== null) {
            message.logStatementSampleRate = object.logStatementSampleRate;
        }
        else {
            message.logStatementSampleRate = undefined;
        }
        if (object.logParameterMaxLength !== undefined &&
            object.logParameterMaxLength !== null) {
            message.logParameterMaxLength = object.logParameterMaxLength;
        }
        else {
            message.logParameterMaxLength = undefined;
        }
        if (object.logParameterMaxLengthOnError !== undefined &&
            object.logParameterMaxLengthOnError !== null) {
            message.logParameterMaxLengthOnError =
                object.logParameterMaxLengthOnError;
        }
        else {
            message.logParameterMaxLengthOnError = undefined;
        }
        return message;
    },
};
const basePostgresqlConfigSet13 = {};
exports.PostgresqlConfigSet13 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.PostgresqlConfig13.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.PostgresqlConfig13.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.PostgresqlConfig13.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePostgresqlConfigSet13,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.PostgresqlConfig13.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.PostgresqlConfig13.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.PostgresqlConfig13.decode(reader, reader.uint32());
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
            ...basePostgresqlConfigSet13,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.PostgresqlConfig13.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.PostgresqlConfig13.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.PostgresqlConfig13.fromJSON(object.defaultConfig);
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
                ? exports.PostgresqlConfig13.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.PostgresqlConfig13.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.PostgresqlConfig13.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...basePostgresqlConfigSet13,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.PostgresqlConfig13.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.PostgresqlConfig13.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.PostgresqlConfig13.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
