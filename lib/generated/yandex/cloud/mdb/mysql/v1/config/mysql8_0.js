"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mysqlconfigset80 = exports.Mysqlconfig80 = exports.mysqlconfig80_SlaveParallelTypeToJSON = exports.mysqlconfig80_SlaveParallelTypeFromJSON = exports.Mysqlconfig80_SlaveParallelType = exports.mysqlconfig80_BinlogRowImageToJSON = exports.mysqlconfig80_BinlogRowImageFromJSON = exports.Mysqlconfig80_BinlogRowImage = exports.mysqlconfig80_TransactionIsolationToJSON = exports.mysqlconfig80_TransactionIsolationFromJSON = exports.Mysqlconfig80_TransactionIsolation = exports.mysqlconfig80_AuthPluginToJSON = exports.mysqlconfig80_AuthPluginFromJSON = exports.Mysqlconfig80_AuthPlugin = exports.mysqlconfig80_SQLModeToJSON = exports.mysqlconfig80_SQLModeFromJSON = exports.Mysqlconfig80_SQLMode = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.mysql.v1.config';
var Mysqlconfig80_SQLMode;
(function (Mysqlconfig80_SQLMode) {
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["SQLMODE_UNSPECIFIED"] = 0] = "SQLMODE_UNSPECIFIED";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["ALLOW_INVALID_DATES"] = 1] = "ALLOW_INVALID_DATES";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["ANSI_QUOTES"] = 2] = "ANSI_QUOTES";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["ERROR_FOR_DIVISION_BY_ZERO"] = 3] = "ERROR_FOR_DIVISION_BY_ZERO";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["HIGH_NOT_PRECEDENCE"] = 4] = "HIGH_NOT_PRECEDENCE";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["IGNORE_SPACE"] = 5] = "IGNORE_SPACE";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_AUTO_VALUE_ON_ZERO"] = 6] = "NO_AUTO_VALUE_ON_ZERO";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_BACKSLASH_ESCAPES"] = 7] = "NO_BACKSLASH_ESCAPES";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_ENGINE_SUBSTITUTION"] = 8] = "NO_ENGINE_SUBSTITUTION";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_UNSIGNED_SUBTRACTION"] = 9] = "NO_UNSIGNED_SUBTRACTION";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_ZERO_DATE"] = 10] = "NO_ZERO_DATE";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_ZERO_IN_DATE"] = 11] = "NO_ZERO_IN_DATE";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["ONLY_FULL_GROUP_BY"] = 15] = "ONLY_FULL_GROUP_BY";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["PAD_CHAR_TO_FULL_LENGTH"] = 16] = "PAD_CHAR_TO_FULL_LENGTH";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["PIPES_AS_CONCAT"] = 17] = "PIPES_AS_CONCAT";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["REAL_AS_FLOAT"] = 18] = "REAL_AS_FLOAT";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["STRICT_ALL_TABLES"] = 19] = "STRICT_ALL_TABLES";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["STRICT_TRANS_TABLES"] = 20] = "STRICT_TRANS_TABLES";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["TIME_TRUNCATE_FRACTIONAL"] = 21] = "TIME_TRUNCATE_FRACTIONAL";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["ANSI"] = 22] = "ANSI";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["TRADITIONAL"] = 23] = "TRADITIONAL";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["NO_DIR_IN_CREATE"] = 24] = "NO_DIR_IN_CREATE";
    Mysqlconfig80_SQLMode[Mysqlconfig80_SQLMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_SQLMode = exports.Mysqlconfig80_SQLMode || (exports.Mysqlconfig80_SQLMode = {}));
function mysqlconfig80_SQLModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'SQLMODE_UNSPECIFIED':
            return Mysqlconfig80_SQLMode.SQLMODE_UNSPECIFIED;
        case 1:
        case 'ALLOW_INVALID_DATES':
            return Mysqlconfig80_SQLMode.ALLOW_INVALID_DATES;
        case 2:
        case 'ANSI_QUOTES':
            return Mysqlconfig80_SQLMode.ANSI_QUOTES;
        case 3:
        case 'ERROR_FOR_DIVISION_BY_ZERO':
            return Mysqlconfig80_SQLMode.ERROR_FOR_DIVISION_BY_ZERO;
        case 4:
        case 'HIGH_NOT_PRECEDENCE':
            return Mysqlconfig80_SQLMode.HIGH_NOT_PRECEDENCE;
        case 5:
        case 'IGNORE_SPACE':
            return Mysqlconfig80_SQLMode.IGNORE_SPACE;
        case 6:
        case 'NO_AUTO_VALUE_ON_ZERO':
            return Mysqlconfig80_SQLMode.NO_AUTO_VALUE_ON_ZERO;
        case 7:
        case 'NO_BACKSLASH_ESCAPES':
            return Mysqlconfig80_SQLMode.NO_BACKSLASH_ESCAPES;
        case 8:
        case 'NO_ENGINE_SUBSTITUTION':
            return Mysqlconfig80_SQLMode.NO_ENGINE_SUBSTITUTION;
        case 9:
        case 'NO_UNSIGNED_SUBTRACTION':
            return Mysqlconfig80_SQLMode.NO_UNSIGNED_SUBTRACTION;
        case 10:
        case 'NO_ZERO_DATE':
            return Mysqlconfig80_SQLMode.NO_ZERO_DATE;
        case 11:
        case 'NO_ZERO_IN_DATE':
            return Mysqlconfig80_SQLMode.NO_ZERO_IN_DATE;
        case 15:
        case 'ONLY_FULL_GROUP_BY':
            return Mysqlconfig80_SQLMode.ONLY_FULL_GROUP_BY;
        case 16:
        case 'PAD_CHAR_TO_FULL_LENGTH':
            return Mysqlconfig80_SQLMode.PAD_CHAR_TO_FULL_LENGTH;
        case 17:
        case 'PIPES_AS_CONCAT':
            return Mysqlconfig80_SQLMode.PIPES_AS_CONCAT;
        case 18:
        case 'REAL_AS_FLOAT':
            return Mysqlconfig80_SQLMode.REAL_AS_FLOAT;
        case 19:
        case 'STRICT_ALL_TABLES':
            return Mysqlconfig80_SQLMode.STRICT_ALL_TABLES;
        case 20:
        case 'STRICT_TRANS_TABLES':
            return Mysqlconfig80_SQLMode.STRICT_TRANS_TABLES;
        case 21:
        case 'TIME_TRUNCATE_FRACTIONAL':
            return Mysqlconfig80_SQLMode.TIME_TRUNCATE_FRACTIONAL;
        case 22:
        case 'ANSI':
            return Mysqlconfig80_SQLMode.ANSI;
        case 23:
        case 'TRADITIONAL':
            return Mysqlconfig80_SQLMode.TRADITIONAL;
        case 24:
        case 'NO_DIR_IN_CREATE':
            return Mysqlconfig80_SQLMode.NO_DIR_IN_CREATE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mysqlconfig80_SQLMode.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_SQLModeFromJSON = mysqlconfig80_SQLModeFromJSON;
function mysqlconfig80_SQLModeToJSON(object) {
    switch (object) {
        case Mysqlconfig80_SQLMode.SQLMODE_UNSPECIFIED:
            return 'SQLMODE_UNSPECIFIED';
        case Mysqlconfig80_SQLMode.ALLOW_INVALID_DATES:
            return 'ALLOW_INVALID_DATES';
        case Mysqlconfig80_SQLMode.ANSI_QUOTES:
            return 'ANSI_QUOTES';
        case Mysqlconfig80_SQLMode.ERROR_FOR_DIVISION_BY_ZERO:
            return 'ERROR_FOR_DIVISION_BY_ZERO';
        case Mysqlconfig80_SQLMode.HIGH_NOT_PRECEDENCE:
            return 'HIGH_NOT_PRECEDENCE';
        case Mysqlconfig80_SQLMode.IGNORE_SPACE:
            return 'IGNORE_SPACE';
        case Mysqlconfig80_SQLMode.NO_AUTO_VALUE_ON_ZERO:
            return 'NO_AUTO_VALUE_ON_ZERO';
        case Mysqlconfig80_SQLMode.NO_BACKSLASH_ESCAPES:
            return 'NO_BACKSLASH_ESCAPES';
        case Mysqlconfig80_SQLMode.NO_ENGINE_SUBSTITUTION:
            return 'NO_ENGINE_SUBSTITUTION';
        case Mysqlconfig80_SQLMode.NO_UNSIGNED_SUBTRACTION:
            return 'NO_UNSIGNED_SUBTRACTION';
        case Mysqlconfig80_SQLMode.NO_ZERO_DATE:
            return 'NO_ZERO_DATE';
        case Mysqlconfig80_SQLMode.NO_ZERO_IN_DATE:
            return 'NO_ZERO_IN_DATE';
        case Mysqlconfig80_SQLMode.ONLY_FULL_GROUP_BY:
            return 'ONLY_FULL_GROUP_BY';
        case Mysqlconfig80_SQLMode.PAD_CHAR_TO_FULL_LENGTH:
            return 'PAD_CHAR_TO_FULL_LENGTH';
        case Mysqlconfig80_SQLMode.PIPES_AS_CONCAT:
            return 'PIPES_AS_CONCAT';
        case Mysqlconfig80_SQLMode.REAL_AS_FLOAT:
            return 'REAL_AS_FLOAT';
        case Mysqlconfig80_SQLMode.STRICT_ALL_TABLES:
            return 'STRICT_ALL_TABLES';
        case Mysqlconfig80_SQLMode.STRICT_TRANS_TABLES:
            return 'STRICT_TRANS_TABLES';
        case Mysqlconfig80_SQLMode.TIME_TRUNCATE_FRACTIONAL:
            return 'TIME_TRUNCATE_FRACTIONAL';
        case Mysqlconfig80_SQLMode.ANSI:
            return 'ANSI';
        case Mysqlconfig80_SQLMode.TRADITIONAL:
            return 'TRADITIONAL';
        case Mysqlconfig80_SQLMode.NO_DIR_IN_CREATE:
            return 'NO_DIR_IN_CREATE';
        default:
            return 'UNKNOWN';
    }
}
exports.mysqlconfig80_SQLModeToJSON = mysqlconfig80_SQLModeToJSON;
var Mysqlconfig80_AuthPlugin;
(function (Mysqlconfig80_AuthPlugin) {
    Mysqlconfig80_AuthPlugin[Mysqlconfig80_AuthPlugin["AUTH_PLUGIN_UNSPECIFIED"] = 0] = "AUTH_PLUGIN_UNSPECIFIED";
    /** MYSQL_NATIVE_PASSWORD - Using [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/native-pluggable-authentication.html). */
    Mysqlconfig80_AuthPlugin[Mysqlconfig80_AuthPlugin["MYSQL_NATIVE_PASSWORD"] = 1] = "MYSQL_NATIVE_PASSWORD";
    /** CACHING_SHA2_PASSWORD - Using [Caching SHA-2 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html). */
    Mysqlconfig80_AuthPlugin[Mysqlconfig80_AuthPlugin["CACHING_SHA2_PASSWORD"] = 2] = "CACHING_SHA2_PASSWORD";
    /** SHA256_PASSWORD - Using [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/sha256-pluggable-authentication.html). */
    Mysqlconfig80_AuthPlugin[Mysqlconfig80_AuthPlugin["SHA256_PASSWORD"] = 3] = "SHA256_PASSWORD";
    Mysqlconfig80_AuthPlugin[Mysqlconfig80_AuthPlugin["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_AuthPlugin = exports.Mysqlconfig80_AuthPlugin || (exports.Mysqlconfig80_AuthPlugin = {}));
function mysqlconfig80_AuthPluginFromJSON(object) {
    switch (object) {
        case 0:
        case 'AUTH_PLUGIN_UNSPECIFIED':
            return Mysqlconfig80_AuthPlugin.AUTH_PLUGIN_UNSPECIFIED;
        case 1:
        case 'MYSQL_NATIVE_PASSWORD':
            return Mysqlconfig80_AuthPlugin.MYSQL_NATIVE_PASSWORD;
        case 2:
        case 'CACHING_SHA2_PASSWORD':
            return Mysqlconfig80_AuthPlugin.CACHING_SHA2_PASSWORD;
        case 3:
        case 'SHA256_PASSWORD':
            return Mysqlconfig80_AuthPlugin.SHA256_PASSWORD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mysqlconfig80_AuthPlugin.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_AuthPluginFromJSON = mysqlconfig80_AuthPluginFromJSON;
function mysqlconfig80_AuthPluginToJSON(object) {
    switch (object) {
        case Mysqlconfig80_AuthPlugin.AUTH_PLUGIN_UNSPECIFIED:
            return 'AUTH_PLUGIN_UNSPECIFIED';
        case Mysqlconfig80_AuthPlugin.MYSQL_NATIVE_PASSWORD:
            return 'MYSQL_NATIVE_PASSWORD';
        case Mysqlconfig80_AuthPlugin.CACHING_SHA2_PASSWORD:
            return 'CACHING_SHA2_PASSWORD';
        case Mysqlconfig80_AuthPlugin.SHA256_PASSWORD:
            return 'SHA256_PASSWORD';
        default:
            return 'UNKNOWN';
    }
}
exports.mysqlconfig80_AuthPluginToJSON = mysqlconfig80_AuthPluginToJSON;
var Mysqlconfig80_TransactionIsolation;
(function (Mysqlconfig80_TransactionIsolation) {
    Mysqlconfig80_TransactionIsolation[Mysqlconfig80_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    Mysqlconfig80_TransactionIsolation[Mysqlconfig80_TransactionIsolation["READ_COMMITTED"] = 1] = "READ_COMMITTED";
    Mysqlconfig80_TransactionIsolation[Mysqlconfig80_TransactionIsolation["REPEATABLE_READ"] = 2] = "REPEATABLE_READ";
    Mysqlconfig80_TransactionIsolation[Mysqlconfig80_TransactionIsolation["SERIALIZABLE"] = 3] = "SERIALIZABLE";
    Mysqlconfig80_TransactionIsolation[Mysqlconfig80_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_TransactionIsolation = exports.Mysqlconfig80_TransactionIsolation || (exports.Mysqlconfig80_TransactionIsolation = {}));
function mysqlconfig80_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case 'TRANSACTION_ISOLATION_UNSPECIFIED':
            return Mysqlconfig80_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case 'READ_COMMITTED':
            return Mysqlconfig80_TransactionIsolation.READ_COMMITTED;
        case 2:
        case 'REPEATABLE_READ':
            return Mysqlconfig80_TransactionIsolation.REPEATABLE_READ;
        case 3:
        case 'SERIALIZABLE':
            return Mysqlconfig80_TransactionIsolation.SERIALIZABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mysqlconfig80_TransactionIsolation.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_TransactionIsolationFromJSON = mysqlconfig80_TransactionIsolationFromJSON;
function mysqlconfig80_TransactionIsolationToJSON(object) {
    switch (object) {
        case Mysqlconfig80_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return 'TRANSACTION_ISOLATION_UNSPECIFIED';
        case Mysqlconfig80_TransactionIsolation.READ_COMMITTED:
            return 'READ_COMMITTED';
        case Mysqlconfig80_TransactionIsolation.REPEATABLE_READ:
            return 'REPEATABLE_READ';
        case Mysqlconfig80_TransactionIsolation.SERIALIZABLE:
            return 'SERIALIZABLE';
        default:
            return 'UNKNOWN';
    }
}
exports.mysqlconfig80_TransactionIsolationToJSON = mysqlconfig80_TransactionIsolationToJSON;
var Mysqlconfig80_BinlogRowImage;
(function (Mysqlconfig80_BinlogRowImage) {
    Mysqlconfig80_BinlogRowImage[Mysqlconfig80_BinlogRowImage["BINLOG_ROW_IMAGE_UNSPECIFIED"] = 0] = "BINLOG_ROW_IMAGE_UNSPECIFIED";
    Mysqlconfig80_BinlogRowImage[Mysqlconfig80_BinlogRowImage["FULL"] = 1] = "FULL";
    Mysqlconfig80_BinlogRowImage[Mysqlconfig80_BinlogRowImage["MINIMAL"] = 2] = "MINIMAL";
    Mysqlconfig80_BinlogRowImage[Mysqlconfig80_BinlogRowImage["NOBLOB"] = 3] = "NOBLOB";
    Mysqlconfig80_BinlogRowImage[Mysqlconfig80_BinlogRowImage["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_BinlogRowImage = exports.Mysqlconfig80_BinlogRowImage || (exports.Mysqlconfig80_BinlogRowImage = {}));
function mysqlconfig80_BinlogRowImageFromJSON(object) {
    switch (object) {
        case 0:
        case 'BINLOG_ROW_IMAGE_UNSPECIFIED':
            return Mysqlconfig80_BinlogRowImage.BINLOG_ROW_IMAGE_UNSPECIFIED;
        case 1:
        case 'FULL':
            return Mysqlconfig80_BinlogRowImage.FULL;
        case 2:
        case 'MINIMAL':
            return Mysqlconfig80_BinlogRowImage.MINIMAL;
        case 3:
        case 'NOBLOB':
            return Mysqlconfig80_BinlogRowImage.NOBLOB;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mysqlconfig80_BinlogRowImage.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_BinlogRowImageFromJSON = mysqlconfig80_BinlogRowImageFromJSON;
function mysqlconfig80_BinlogRowImageToJSON(object) {
    switch (object) {
        case Mysqlconfig80_BinlogRowImage.BINLOG_ROW_IMAGE_UNSPECIFIED:
            return 'BINLOG_ROW_IMAGE_UNSPECIFIED';
        case Mysqlconfig80_BinlogRowImage.FULL:
            return 'FULL';
        case Mysqlconfig80_BinlogRowImage.MINIMAL:
            return 'MINIMAL';
        case Mysqlconfig80_BinlogRowImage.NOBLOB:
            return 'NOBLOB';
        default:
            return 'UNKNOWN';
    }
}
exports.mysqlconfig80_BinlogRowImageToJSON = mysqlconfig80_BinlogRowImageToJSON;
var Mysqlconfig80_SlaveParallelType;
(function (Mysqlconfig80_SlaveParallelType) {
    Mysqlconfig80_SlaveParallelType[Mysqlconfig80_SlaveParallelType["SLAVE_PARALLEL_TYPE_UNSPECIFIED"] = 0] = "SLAVE_PARALLEL_TYPE_UNSPECIFIED";
    Mysqlconfig80_SlaveParallelType[Mysqlconfig80_SlaveParallelType["DATABASE"] = 1] = "DATABASE";
    Mysqlconfig80_SlaveParallelType[Mysqlconfig80_SlaveParallelType["LOGICAL_CLOCK"] = 2] = "LOGICAL_CLOCK";
    Mysqlconfig80_SlaveParallelType[Mysqlconfig80_SlaveParallelType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mysqlconfig80_SlaveParallelType = exports.Mysqlconfig80_SlaveParallelType || (exports.Mysqlconfig80_SlaveParallelType = {}));
function mysqlconfig80_SlaveParallelTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'SLAVE_PARALLEL_TYPE_UNSPECIFIED':
            return Mysqlconfig80_SlaveParallelType.SLAVE_PARALLEL_TYPE_UNSPECIFIED;
        case 1:
        case 'DATABASE':
            return Mysqlconfig80_SlaveParallelType.DATABASE;
        case 2:
        case 'LOGICAL_CLOCK':
            return Mysqlconfig80_SlaveParallelType.LOGICAL_CLOCK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mysqlconfig80_SlaveParallelType.UNRECOGNIZED;
    }
}
exports.mysqlconfig80_SlaveParallelTypeFromJSON = mysqlconfig80_SlaveParallelTypeFromJSON;
function mysqlconfig80_SlaveParallelTypeToJSON(object) {
    switch (object) {
        case Mysqlconfig80_SlaveParallelType.SLAVE_PARALLEL_TYPE_UNSPECIFIED:
            return 'SLAVE_PARALLEL_TYPE_UNSPECIFIED';
        case Mysqlconfig80_SlaveParallelType.DATABASE:
            return 'DATABASE';
        case Mysqlconfig80_SlaveParallelType.LOGICAL_CLOCK:
            return 'LOGICAL_CLOCK';
        default:
            return 'UNKNOWN';
    }
}
exports.mysqlconfig80_SlaveParallelTypeToJSON = mysqlconfig80_SlaveParallelTypeToJSON;
const baseMysqlconfig80 = {
    sqlMode: 0,
    defaultAuthenticationPlugin: 0,
    transactionIsolation: 0,
    defaultTimeZone: '',
    characterSetServer: '',
    collationServer: '',
    binlogRowImage: 0,
    slaveParallelType: 0,
};
exports.Mysqlconfig80 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.innodbBufferPoolSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbBufferPoolSize }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxConnections }, writer.uint32(18).fork()).ldelim();
        }
        if (message.longQueryTime !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.longQueryTime }, writer.uint32(26).fork()).ldelim();
        }
        if (message.generalLog !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.generalLog }, writer.uint32(34).fork()).ldelim();
        }
        if (message.auditLog !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.auditLog }, writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(50).fork();
        for (const v of message.sqlMode) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.maxAllowedPacket !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxAllowedPacket }, writer.uint32(58).fork()).ldelim();
        }
        if (message.defaultAuthenticationPlugin !== 0) {
            writer.uint32(64).int32(message.defaultAuthenticationPlugin);
        }
        if (message.innodbFlushLogAtTrxCommit !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbFlushLogAtTrxCommit }, writer.uint32(74).fork()).ldelim();
        }
        if (message.innodbLockWaitTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbLockWaitTimeout }, writer.uint32(82).fork()).ldelim();
        }
        if (message.transactionIsolation !== 0) {
            writer.uint32(88).int32(message.transactionIsolation);
        }
        if (message.innodbPrintAllDeadlocks !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.innodbPrintAllDeadlocks }, writer.uint32(98).fork()).ldelim();
        }
        if (message.netReadTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.netReadTimeout }, writer.uint32(106).fork()).ldelim();
        }
        if (message.netWriteTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.netWriteTimeout }, writer.uint32(114).fork()).ldelim();
        }
        if (message.groupConcatMaxLen !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.groupConcatMaxLen }, writer.uint32(122).fork()).ldelim();
        }
        if (message.tmpTableSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.tmpTableSize }, writer.uint32(130).fork()).ldelim();
        }
        if (message.maxHeapTableSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxHeapTableSize }, writer.uint32(138).fork()).ldelim();
        }
        if (message.defaultTimeZone !== '') {
            writer.uint32(146).string(message.defaultTimeZone);
        }
        if (message.characterSetServer !== '') {
            writer.uint32(154).string(message.characterSetServer);
        }
        if (message.collationServer !== '') {
            writer.uint32(162).string(message.collationServer);
        }
        if (message.innodbAdaptiveHashIndex !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.innodbAdaptiveHashIndex }, writer.uint32(170).fork()).ldelim();
        }
        if (message.innodbNumaInterleave !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.innodbNumaInterleave }, writer.uint32(178).fork()).ldelim();
        }
        if (message.innodbLogBufferSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbLogBufferSize }, writer.uint32(186).fork()).ldelim();
        }
        if (message.innodbLogFileSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbLogFileSize }, writer.uint32(194).fork()).ldelim();
        }
        if (message.innodbIoCapacity !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbIoCapacity }, writer.uint32(202).fork()).ldelim();
        }
        if (message.innodbIoCapacityMax !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbIoCapacityMax }, writer.uint32(210).fork()).ldelim();
        }
        if (message.innodbReadIoThreads !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbReadIoThreads }, writer.uint32(218).fork()).ldelim();
        }
        if (message.innodbWriteIoThreads !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbWriteIoThreads }, writer.uint32(226).fork()).ldelim();
        }
        if (message.innodbPurgeThreads !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbPurgeThreads }, writer.uint32(234).fork()).ldelim();
        }
        if (message.innodbThreadConcurrency !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbThreadConcurrency }, writer.uint32(242).fork()).ldelim();
        }
        if (message.innodbTempDataFileMaxSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbTempDataFileMaxSize }, writer.uint32(250).fork()).ldelim();
        }
        if (message.threadCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.threadCacheSize }, writer.uint32(258).fork()).ldelim();
        }
        if (message.threadStack !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.threadStack }, writer.uint32(266).fork()).ldelim();
        }
        if (message.joinBufferSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.joinBufferSize }, writer.uint32(274).fork()).ldelim();
        }
        if (message.sortBufferSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.sortBufferSize }, writer.uint32(282).fork()).ldelim();
        }
        if (message.tableDefinitionCache !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.tableDefinitionCache }, writer.uint32(290).fork()).ldelim();
        }
        if (message.tableOpenCache !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.tableOpenCache }, writer.uint32(298).fork()).ldelim();
        }
        if (message.tableOpenCacheInstances !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.tableOpenCacheInstances }, writer.uint32(306).fork()).ldelim();
        }
        if (message.explicitDefaultsForTimestamp !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.explicitDefaultsForTimestamp }, writer.uint32(314).fork()).ldelim();
        }
        if (message.autoIncrementIncrement !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.autoIncrementIncrement }, writer.uint32(322).fork()).ldelim();
        }
        if (message.autoIncrementOffset !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.autoIncrementOffset }, writer.uint32(330).fork()).ldelim();
        }
        if (message.syncBinlog !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.syncBinlog }, writer.uint32(338).fork()).ldelim();
        }
        if (message.binlogCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.binlogCacheSize }, writer.uint32(346).fork()).ldelim();
        }
        if (message.binlogGroupCommitSyncDelay !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.binlogGroupCommitSyncDelay }, writer.uint32(354).fork()).ldelim();
        }
        if (message.binlogRowImage !== 0) {
            writer.uint32(360).int32(message.binlogRowImage);
        }
        if (message.binlogRowsQueryLogEvents !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.binlogRowsQueryLogEvents }, writer.uint32(370).fork()).ldelim();
        }
        if (message.rplSemiSyncMasterWaitForSlaveCount !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.rplSemiSyncMasterWaitForSlaveCount }, writer.uint32(378).fork()).ldelim();
        }
        if (message.slaveParallelType !== 0) {
            writer.uint32(384).int32(message.slaveParallelType);
        }
        if (message.slaveParallelWorkers !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.slaveParallelWorkers }, writer.uint32(394).fork()).ldelim();
        }
        if (message.regexpTimeLimit !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.regexpTimeLimit }, writer.uint32(402).fork()).ldelim();
        }
        if (message.mdbPreserveBinlogBytes !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.mdbPreserveBinlogBytes }, writer.uint32(410).fork()).ldelim();
        }
        if (message.interactiveTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.interactiveTimeout }, writer.uint32(418).fork()).ldelim();
        }
        if (message.waitTimeout !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.waitTimeout }, writer.uint32(426).fork()).ldelim();
        }
        if (message.mdbOfflineModeEnableLag !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.mdbOfflineModeEnableLag }, writer.uint32(434).fork()).ldelim();
        }
        if (message.mdbOfflineModeDisableLag !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.mdbOfflineModeDisableLag }, writer.uint32(442).fork()).ldelim();
        }
        if (message.rangeOptimizerMaxMemSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.rangeOptimizerMaxMemSize }, writer.uint32(450).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMysqlconfig80 };
        message.sqlMode = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.innodbBufferPoolSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.longQueryTime = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.generalLog = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.auditLog = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sqlMode.push(reader.int32());
                        }
                    }
                    else {
                        message.sqlMode.push(reader.int32());
                    }
                    break;
                case 7:
                    message.maxAllowedPacket = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.defaultAuthenticationPlugin = reader.int32();
                    break;
                case 9:
                    message.innodbFlushLogAtTrxCommit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.innodbLockWaitTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.transactionIsolation = reader.int32();
                    break;
                case 12:
                    message.innodbPrintAllDeadlocks = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.netReadTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.netWriteTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 15:
                    message.groupConcatMaxLen = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 16:
                    message.tmpTableSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.maxHeapTableSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 18:
                    message.defaultTimeZone = reader.string();
                    break;
                case 19:
                    message.characterSetServer = reader.string();
                    break;
                case 20:
                    message.collationServer = reader.string();
                    break;
                case 21:
                    message.innodbAdaptiveHashIndex = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 22:
                    message.innodbNumaInterleave = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 23:
                    message.innodbLogBufferSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 24:
                    message.innodbLogFileSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.innodbIoCapacity = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.innodbIoCapacityMax = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.innodbReadIoThreads = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.innodbWriteIoThreads = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.innodbPurgeThreads = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 30:
                    message.innodbThreadConcurrency = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.innodbTempDataFileMaxSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.threadCacheSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 33:
                    message.threadStack = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 34:
                    message.joinBufferSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 35:
                    message.sortBufferSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 36:
                    message.tableDefinitionCache = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 37:
                    message.tableOpenCache = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 38:
                    message.tableOpenCacheInstances = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 39:
                    message.explicitDefaultsForTimestamp = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 40:
                    message.autoIncrementIncrement = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 41:
                    message.autoIncrementOffset = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 42:
                    message.syncBinlog = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 43:
                    message.binlogCacheSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 44:
                    message.binlogGroupCommitSyncDelay = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 45:
                    message.binlogRowImage = reader.int32();
                    break;
                case 46:
                    message.binlogRowsQueryLogEvents = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 47:
                    message.rplSemiSyncMasterWaitForSlaveCount =
                        wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 48:
                    message.slaveParallelType = reader.int32();
                    break;
                case 49:
                    message.slaveParallelWorkers = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 50:
                    message.regexpTimeLimit = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 51:
                    message.mdbPreserveBinlogBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 52:
                    message.interactiveTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 53:
                    message.waitTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 54:
                    message.mdbOfflineModeEnableLag = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 55:
                    message.mdbOfflineModeDisableLag = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 56:
                    message.rangeOptimizerMaxMemSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMysqlconfig80 };
        message.sqlMode = [];
        if (object.innodbBufferPoolSize !== undefined &&
            object.innodbBufferPoolSize !== null) {
            message.innodbBufferPoolSize = Number(object.innodbBufferPoolSize);
        }
        else {
            message.innodbBufferPoolSize = undefined;
        }
        if (object.maxConnections !== undefined &&
            object.maxConnections !== null) {
            message.maxConnections = Number(object.maxConnections);
        }
        else {
            message.maxConnections = undefined;
        }
        if (object.longQueryTime !== undefined &&
            object.longQueryTime !== null) {
            message.longQueryTime = Number(object.longQueryTime);
        }
        else {
            message.longQueryTime = undefined;
        }
        if (object.generalLog !== undefined && object.generalLog !== null) {
            message.generalLog = Boolean(object.generalLog);
        }
        else {
            message.generalLog = undefined;
        }
        if (object.auditLog !== undefined && object.auditLog !== null) {
            message.auditLog = Boolean(object.auditLog);
        }
        else {
            message.auditLog = undefined;
        }
        if (object.sqlMode !== undefined && object.sqlMode !== null) {
            for (const e of object.sqlMode) {
                message.sqlMode.push(mysqlconfig80_SQLModeFromJSON(e));
            }
        }
        if (object.maxAllowedPacket !== undefined &&
            object.maxAllowedPacket !== null) {
            message.maxAllowedPacket = Number(object.maxAllowedPacket);
        }
        else {
            message.maxAllowedPacket = undefined;
        }
        if (object.defaultAuthenticationPlugin !== undefined &&
            object.defaultAuthenticationPlugin !== null) {
            message.defaultAuthenticationPlugin =
                mysqlconfig80_AuthPluginFromJSON(object.defaultAuthenticationPlugin);
        }
        else {
            message.defaultAuthenticationPlugin = 0;
        }
        if (object.innodbFlushLogAtTrxCommit !== undefined &&
            object.innodbFlushLogAtTrxCommit !== null) {
            message.innodbFlushLogAtTrxCommit = Number(object.innodbFlushLogAtTrxCommit);
        }
        else {
            message.innodbFlushLogAtTrxCommit = undefined;
        }
        if (object.innodbLockWaitTimeout !== undefined &&
            object.innodbLockWaitTimeout !== null) {
            message.innodbLockWaitTimeout = Number(object.innodbLockWaitTimeout);
        }
        else {
            message.innodbLockWaitTimeout = undefined;
        }
        if (object.transactionIsolation !== undefined &&
            object.transactionIsolation !== null) {
            message.transactionIsolation =
                mysqlconfig80_TransactionIsolationFromJSON(object.transactionIsolation);
        }
        else {
            message.transactionIsolation = 0;
        }
        if (object.innodbPrintAllDeadlocks !== undefined &&
            object.innodbPrintAllDeadlocks !== null) {
            message.innodbPrintAllDeadlocks = Boolean(object.innodbPrintAllDeadlocks);
        }
        else {
            message.innodbPrintAllDeadlocks = undefined;
        }
        if (object.netReadTimeout !== undefined &&
            object.netReadTimeout !== null) {
            message.netReadTimeout = Number(object.netReadTimeout);
        }
        else {
            message.netReadTimeout = undefined;
        }
        if (object.netWriteTimeout !== undefined &&
            object.netWriteTimeout !== null) {
            message.netWriteTimeout = Number(object.netWriteTimeout);
        }
        else {
            message.netWriteTimeout = undefined;
        }
        if (object.groupConcatMaxLen !== undefined &&
            object.groupConcatMaxLen !== null) {
            message.groupConcatMaxLen = Number(object.groupConcatMaxLen);
        }
        else {
            message.groupConcatMaxLen = undefined;
        }
        if (object.tmpTableSize !== undefined && object.tmpTableSize !== null) {
            message.tmpTableSize = Number(object.tmpTableSize);
        }
        else {
            message.tmpTableSize = undefined;
        }
        if (object.maxHeapTableSize !== undefined &&
            object.maxHeapTableSize !== null) {
            message.maxHeapTableSize = Number(object.maxHeapTableSize);
        }
        else {
            message.maxHeapTableSize = undefined;
        }
        if (object.defaultTimeZone !== undefined &&
            object.defaultTimeZone !== null) {
            message.defaultTimeZone = String(object.defaultTimeZone);
        }
        else {
            message.defaultTimeZone = '';
        }
        if (object.characterSetServer !== undefined &&
            object.characterSetServer !== null) {
            message.characterSetServer = String(object.characterSetServer);
        }
        else {
            message.characterSetServer = '';
        }
        if (object.collationServer !== undefined &&
            object.collationServer !== null) {
            message.collationServer = String(object.collationServer);
        }
        else {
            message.collationServer = '';
        }
        if (object.innodbAdaptiveHashIndex !== undefined &&
            object.innodbAdaptiveHashIndex !== null) {
            message.innodbAdaptiveHashIndex = Boolean(object.innodbAdaptiveHashIndex);
        }
        else {
            message.innodbAdaptiveHashIndex = undefined;
        }
        if (object.innodbNumaInterleave !== undefined &&
            object.innodbNumaInterleave !== null) {
            message.innodbNumaInterleave = Boolean(object.innodbNumaInterleave);
        }
        else {
            message.innodbNumaInterleave = undefined;
        }
        if (object.innodbLogBufferSize !== undefined &&
            object.innodbLogBufferSize !== null) {
            message.innodbLogBufferSize = Number(object.innodbLogBufferSize);
        }
        else {
            message.innodbLogBufferSize = undefined;
        }
        if (object.innodbLogFileSize !== undefined &&
            object.innodbLogFileSize !== null) {
            message.innodbLogFileSize = Number(object.innodbLogFileSize);
        }
        else {
            message.innodbLogFileSize = undefined;
        }
        if (object.innodbIoCapacity !== undefined &&
            object.innodbIoCapacity !== null) {
            message.innodbIoCapacity = Number(object.innodbIoCapacity);
        }
        else {
            message.innodbIoCapacity = undefined;
        }
        if (object.innodbIoCapacityMax !== undefined &&
            object.innodbIoCapacityMax !== null) {
            message.innodbIoCapacityMax = Number(object.innodbIoCapacityMax);
        }
        else {
            message.innodbIoCapacityMax = undefined;
        }
        if (object.innodbReadIoThreads !== undefined &&
            object.innodbReadIoThreads !== null) {
            message.innodbReadIoThreads = Number(object.innodbReadIoThreads);
        }
        else {
            message.innodbReadIoThreads = undefined;
        }
        if (object.innodbWriteIoThreads !== undefined &&
            object.innodbWriteIoThreads !== null) {
            message.innodbWriteIoThreads = Number(object.innodbWriteIoThreads);
        }
        else {
            message.innodbWriteIoThreads = undefined;
        }
        if (object.innodbPurgeThreads !== undefined &&
            object.innodbPurgeThreads !== null) {
            message.innodbPurgeThreads = Number(object.innodbPurgeThreads);
        }
        else {
            message.innodbPurgeThreads = undefined;
        }
        if (object.innodbThreadConcurrency !== undefined &&
            object.innodbThreadConcurrency !== null) {
            message.innodbThreadConcurrency = Number(object.innodbThreadConcurrency);
        }
        else {
            message.innodbThreadConcurrency = undefined;
        }
        if (object.innodbTempDataFileMaxSize !== undefined &&
            object.innodbTempDataFileMaxSize !== null) {
            message.innodbTempDataFileMaxSize = Number(object.innodbTempDataFileMaxSize);
        }
        else {
            message.innodbTempDataFileMaxSize = undefined;
        }
        if (object.threadCacheSize !== undefined &&
            object.threadCacheSize !== null) {
            message.threadCacheSize = Number(object.threadCacheSize);
        }
        else {
            message.threadCacheSize = undefined;
        }
        if (object.threadStack !== undefined && object.threadStack !== null) {
            message.threadStack = Number(object.threadStack);
        }
        else {
            message.threadStack = undefined;
        }
        if (object.joinBufferSize !== undefined &&
            object.joinBufferSize !== null) {
            message.joinBufferSize = Number(object.joinBufferSize);
        }
        else {
            message.joinBufferSize = undefined;
        }
        if (object.sortBufferSize !== undefined &&
            object.sortBufferSize !== null) {
            message.sortBufferSize = Number(object.sortBufferSize);
        }
        else {
            message.sortBufferSize = undefined;
        }
        if (object.tableDefinitionCache !== undefined &&
            object.tableDefinitionCache !== null) {
            message.tableDefinitionCache = Number(object.tableDefinitionCache);
        }
        else {
            message.tableDefinitionCache = undefined;
        }
        if (object.tableOpenCache !== undefined &&
            object.tableOpenCache !== null) {
            message.tableOpenCache = Number(object.tableOpenCache);
        }
        else {
            message.tableOpenCache = undefined;
        }
        if (object.tableOpenCacheInstances !== undefined &&
            object.tableOpenCacheInstances !== null) {
            message.tableOpenCacheInstances = Number(object.tableOpenCacheInstances);
        }
        else {
            message.tableOpenCacheInstances = undefined;
        }
        if (object.explicitDefaultsForTimestamp !== undefined &&
            object.explicitDefaultsForTimestamp !== null) {
            message.explicitDefaultsForTimestamp = Boolean(object.explicitDefaultsForTimestamp);
        }
        else {
            message.explicitDefaultsForTimestamp = undefined;
        }
        if (object.autoIncrementIncrement !== undefined &&
            object.autoIncrementIncrement !== null) {
            message.autoIncrementIncrement = Number(object.autoIncrementIncrement);
        }
        else {
            message.autoIncrementIncrement = undefined;
        }
        if (object.autoIncrementOffset !== undefined &&
            object.autoIncrementOffset !== null) {
            message.autoIncrementOffset = Number(object.autoIncrementOffset);
        }
        else {
            message.autoIncrementOffset = undefined;
        }
        if (object.syncBinlog !== undefined && object.syncBinlog !== null) {
            message.syncBinlog = Number(object.syncBinlog);
        }
        else {
            message.syncBinlog = undefined;
        }
        if (object.binlogCacheSize !== undefined &&
            object.binlogCacheSize !== null) {
            message.binlogCacheSize = Number(object.binlogCacheSize);
        }
        else {
            message.binlogCacheSize = undefined;
        }
        if (object.binlogGroupCommitSyncDelay !== undefined &&
            object.binlogGroupCommitSyncDelay !== null) {
            message.binlogGroupCommitSyncDelay = Number(object.binlogGroupCommitSyncDelay);
        }
        else {
            message.binlogGroupCommitSyncDelay = undefined;
        }
        if (object.binlogRowImage !== undefined &&
            object.binlogRowImage !== null) {
            message.binlogRowImage = mysqlconfig80_BinlogRowImageFromJSON(object.binlogRowImage);
        }
        else {
            message.binlogRowImage = 0;
        }
        if (object.binlogRowsQueryLogEvents !== undefined &&
            object.binlogRowsQueryLogEvents !== null) {
            message.binlogRowsQueryLogEvents = Boolean(object.binlogRowsQueryLogEvents);
        }
        else {
            message.binlogRowsQueryLogEvents = undefined;
        }
        if (object.rplSemiSyncMasterWaitForSlaveCount !== undefined &&
            object.rplSemiSyncMasterWaitForSlaveCount !== null) {
            message.rplSemiSyncMasterWaitForSlaveCount = Number(object.rplSemiSyncMasterWaitForSlaveCount);
        }
        else {
            message.rplSemiSyncMasterWaitForSlaveCount = undefined;
        }
        if (object.slaveParallelType !== undefined &&
            object.slaveParallelType !== null) {
            message.slaveParallelType = mysqlconfig80_SlaveParallelTypeFromJSON(object.slaveParallelType);
        }
        else {
            message.slaveParallelType = 0;
        }
        if (object.slaveParallelWorkers !== undefined &&
            object.slaveParallelWorkers !== null) {
            message.slaveParallelWorkers = Number(object.slaveParallelWorkers);
        }
        else {
            message.slaveParallelWorkers = undefined;
        }
        if (object.regexpTimeLimit !== undefined &&
            object.regexpTimeLimit !== null) {
            message.regexpTimeLimit = Number(object.regexpTimeLimit);
        }
        else {
            message.regexpTimeLimit = undefined;
        }
        if (object.mdbPreserveBinlogBytes !== undefined &&
            object.mdbPreserveBinlogBytes !== null) {
            message.mdbPreserveBinlogBytes = Number(object.mdbPreserveBinlogBytes);
        }
        else {
            message.mdbPreserveBinlogBytes = undefined;
        }
        if (object.interactiveTimeout !== undefined &&
            object.interactiveTimeout !== null) {
            message.interactiveTimeout = Number(object.interactiveTimeout);
        }
        else {
            message.interactiveTimeout = undefined;
        }
        if (object.waitTimeout !== undefined && object.waitTimeout !== null) {
            message.waitTimeout = Number(object.waitTimeout);
        }
        else {
            message.waitTimeout = undefined;
        }
        if (object.mdbOfflineModeEnableLag !== undefined &&
            object.mdbOfflineModeEnableLag !== null) {
            message.mdbOfflineModeEnableLag = Number(object.mdbOfflineModeEnableLag);
        }
        else {
            message.mdbOfflineModeEnableLag = undefined;
        }
        if (object.mdbOfflineModeDisableLag !== undefined &&
            object.mdbOfflineModeDisableLag !== null) {
            message.mdbOfflineModeDisableLag = Number(object.mdbOfflineModeDisableLag);
        }
        else {
            message.mdbOfflineModeDisableLag = undefined;
        }
        if (object.rangeOptimizerMaxMemSize !== undefined &&
            object.rangeOptimizerMaxMemSize !== null) {
            message.rangeOptimizerMaxMemSize = Number(object.rangeOptimizerMaxMemSize);
        }
        else {
            message.rangeOptimizerMaxMemSize = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.innodbBufferPoolSize !== undefined &&
            (obj.innodbBufferPoolSize = message.innodbBufferPoolSize);
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.longQueryTime !== undefined &&
            (obj.longQueryTime = message.longQueryTime);
        message.generalLog !== undefined &&
            (obj.generalLog = message.generalLog);
        message.auditLog !== undefined && (obj.auditLog = message.auditLog);
        if (message.sqlMode) {
            obj.sqlMode = message.sqlMode.map((e) => mysqlconfig80_SQLModeToJSON(e));
        }
        else {
            obj.sqlMode = [];
        }
        message.maxAllowedPacket !== undefined &&
            (obj.maxAllowedPacket = message.maxAllowedPacket);
        message.defaultAuthenticationPlugin !== undefined &&
            (obj.defaultAuthenticationPlugin = mysqlconfig80_AuthPluginToJSON(message.defaultAuthenticationPlugin));
        message.innodbFlushLogAtTrxCommit !== undefined &&
            (obj.innodbFlushLogAtTrxCommit = message.innodbFlushLogAtTrxCommit);
        message.innodbLockWaitTimeout !== undefined &&
            (obj.innodbLockWaitTimeout = message.innodbLockWaitTimeout);
        message.transactionIsolation !== undefined &&
            (obj.transactionIsolation =
                mysqlconfig80_TransactionIsolationToJSON(message.transactionIsolation));
        message.innodbPrintAllDeadlocks !== undefined &&
            (obj.innodbPrintAllDeadlocks = message.innodbPrintAllDeadlocks);
        message.netReadTimeout !== undefined &&
            (obj.netReadTimeout = message.netReadTimeout);
        message.netWriteTimeout !== undefined &&
            (obj.netWriteTimeout = message.netWriteTimeout);
        message.groupConcatMaxLen !== undefined &&
            (obj.groupConcatMaxLen = message.groupConcatMaxLen);
        message.tmpTableSize !== undefined &&
            (obj.tmpTableSize = message.tmpTableSize);
        message.maxHeapTableSize !== undefined &&
            (obj.maxHeapTableSize = message.maxHeapTableSize);
        message.defaultTimeZone !== undefined &&
            (obj.defaultTimeZone = message.defaultTimeZone);
        message.characterSetServer !== undefined &&
            (obj.characterSetServer = message.characterSetServer);
        message.collationServer !== undefined &&
            (obj.collationServer = message.collationServer);
        message.innodbAdaptiveHashIndex !== undefined &&
            (obj.innodbAdaptiveHashIndex = message.innodbAdaptiveHashIndex);
        message.innodbNumaInterleave !== undefined &&
            (obj.innodbNumaInterleave = message.innodbNumaInterleave);
        message.innodbLogBufferSize !== undefined &&
            (obj.innodbLogBufferSize = message.innodbLogBufferSize);
        message.innodbLogFileSize !== undefined &&
            (obj.innodbLogFileSize = message.innodbLogFileSize);
        message.innodbIoCapacity !== undefined &&
            (obj.innodbIoCapacity = message.innodbIoCapacity);
        message.innodbIoCapacityMax !== undefined &&
            (obj.innodbIoCapacityMax = message.innodbIoCapacityMax);
        message.innodbReadIoThreads !== undefined &&
            (obj.innodbReadIoThreads = message.innodbReadIoThreads);
        message.innodbWriteIoThreads !== undefined &&
            (obj.innodbWriteIoThreads = message.innodbWriteIoThreads);
        message.innodbPurgeThreads !== undefined &&
            (obj.innodbPurgeThreads = message.innodbPurgeThreads);
        message.innodbThreadConcurrency !== undefined &&
            (obj.innodbThreadConcurrency = message.innodbThreadConcurrency);
        message.innodbTempDataFileMaxSize !== undefined &&
            (obj.innodbTempDataFileMaxSize = message.innodbTempDataFileMaxSize);
        message.threadCacheSize !== undefined &&
            (obj.threadCacheSize = message.threadCacheSize);
        message.threadStack !== undefined &&
            (obj.threadStack = message.threadStack);
        message.joinBufferSize !== undefined &&
            (obj.joinBufferSize = message.joinBufferSize);
        message.sortBufferSize !== undefined &&
            (obj.sortBufferSize = message.sortBufferSize);
        message.tableDefinitionCache !== undefined &&
            (obj.tableDefinitionCache = message.tableDefinitionCache);
        message.tableOpenCache !== undefined &&
            (obj.tableOpenCache = message.tableOpenCache);
        message.tableOpenCacheInstances !== undefined &&
            (obj.tableOpenCacheInstances = message.tableOpenCacheInstances);
        message.explicitDefaultsForTimestamp !== undefined &&
            (obj.explicitDefaultsForTimestamp =
                message.explicitDefaultsForTimestamp);
        message.autoIncrementIncrement !== undefined &&
            (obj.autoIncrementIncrement = message.autoIncrementIncrement);
        message.autoIncrementOffset !== undefined &&
            (obj.autoIncrementOffset = message.autoIncrementOffset);
        message.syncBinlog !== undefined &&
            (obj.syncBinlog = message.syncBinlog);
        message.binlogCacheSize !== undefined &&
            (obj.binlogCacheSize = message.binlogCacheSize);
        message.binlogGroupCommitSyncDelay !== undefined &&
            (obj.binlogGroupCommitSyncDelay =
                message.binlogGroupCommitSyncDelay);
        message.binlogRowImage !== undefined &&
            (obj.binlogRowImage = mysqlconfig80_BinlogRowImageToJSON(message.binlogRowImage));
        message.binlogRowsQueryLogEvents !== undefined &&
            (obj.binlogRowsQueryLogEvents = message.binlogRowsQueryLogEvents);
        message.rplSemiSyncMasterWaitForSlaveCount !== undefined &&
            (obj.rplSemiSyncMasterWaitForSlaveCount =
                message.rplSemiSyncMasterWaitForSlaveCount);
        message.slaveParallelType !== undefined &&
            (obj.slaveParallelType = mysqlconfig80_SlaveParallelTypeToJSON(message.slaveParallelType));
        message.slaveParallelWorkers !== undefined &&
            (obj.slaveParallelWorkers = message.slaveParallelWorkers);
        message.regexpTimeLimit !== undefined &&
            (obj.regexpTimeLimit = message.regexpTimeLimit);
        message.mdbPreserveBinlogBytes !== undefined &&
            (obj.mdbPreserveBinlogBytes = message.mdbPreserveBinlogBytes);
        message.interactiveTimeout !== undefined &&
            (obj.interactiveTimeout = message.interactiveTimeout);
        message.waitTimeout !== undefined &&
            (obj.waitTimeout = message.waitTimeout);
        message.mdbOfflineModeEnableLag !== undefined &&
            (obj.mdbOfflineModeEnableLag = message.mdbOfflineModeEnableLag);
        message.mdbOfflineModeDisableLag !== undefined &&
            (obj.mdbOfflineModeDisableLag = message.mdbOfflineModeDisableLag);
        message.rangeOptimizerMaxMemSize !== undefined &&
            (obj.rangeOptimizerMaxMemSize = message.rangeOptimizerMaxMemSize);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMysqlconfig80 };
        message.sqlMode = [];
        if (object.innodbBufferPoolSize !== undefined &&
            object.innodbBufferPoolSize !== null) {
            message.innodbBufferPoolSize = object.innodbBufferPoolSize;
        }
        else {
            message.innodbBufferPoolSize = undefined;
        }
        if (object.maxConnections !== undefined &&
            object.maxConnections !== null) {
            message.maxConnections = object.maxConnections;
        }
        else {
            message.maxConnections = undefined;
        }
        if (object.longQueryTime !== undefined &&
            object.longQueryTime !== null) {
            message.longQueryTime = object.longQueryTime;
        }
        else {
            message.longQueryTime = undefined;
        }
        if (object.generalLog !== undefined && object.generalLog !== null) {
            message.generalLog = object.generalLog;
        }
        else {
            message.generalLog = undefined;
        }
        if (object.auditLog !== undefined && object.auditLog !== null) {
            message.auditLog = object.auditLog;
        }
        else {
            message.auditLog = undefined;
        }
        if (object.sqlMode !== undefined && object.sqlMode !== null) {
            for (const e of object.sqlMode) {
                message.sqlMode.push(e);
            }
        }
        if (object.maxAllowedPacket !== undefined &&
            object.maxAllowedPacket !== null) {
            message.maxAllowedPacket = object.maxAllowedPacket;
        }
        else {
            message.maxAllowedPacket = undefined;
        }
        if (object.defaultAuthenticationPlugin !== undefined &&
            object.defaultAuthenticationPlugin !== null) {
            message.defaultAuthenticationPlugin =
                object.defaultAuthenticationPlugin;
        }
        else {
            message.defaultAuthenticationPlugin = 0;
        }
        if (object.innodbFlushLogAtTrxCommit !== undefined &&
            object.innodbFlushLogAtTrxCommit !== null) {
            message.innodbFlushLogAtTrxCommit =
                object.innodbFlushLogAtTrxCommit;
        }
        else {
            message.innodbFlushLogAtTrxCommit = undefined;
        }
        if (object.innodbLockWaitTimeout !== undefined &&
            object.innodbLockWaitTimeout !== null) {
            message.innodbLockWaitTimeout = object.innodbLockWaitTimeout;
        }
        else {
            message.innodbLockWaitTimeout = undefined;
        }
        if (object.transactionIsolation !== undefined &&
            object.transactionIsolation !== null) {
            message.transactionIsolation = object.transactionIsolation;
        }
        else {
            message.transactionIsolation = 0;
        }
        if (object.innodbPrintAllDeadlocks !== undefined &&
            object.innodbPrintAllDeadlocks !== null) {
            message.innodbPrintAllDeadlocks = object.innodbPrintAllDeadlocks;
        }
        else {
            message.innodbPrintAllDeadlocks = undefined;
        }
        if (object.netReadTimeout !== undefined &&
            object.netReadTimeout !== null) {
            message.netReadTimeout = object.netReadTimeout;
        }
        else {
            message.netReadTimeout = undefined;
        }
        if (object.netWriteTimeout !== undefined &&
            object.netWriteTimeout !== null) {
            message.netWriteTimeout = object.netWriteTimeout;
        }
        else {
            message.netWriteTimeout = undefined;
        }
        if (object.groupConcatMaxLen !== undefined &&
            object.groupConcatMaxLen !== null) {
            message.groupConcatMaxLen = object.groupConcatMaxLen;
        }
        else {
            message.groupConcatMaxLen = undefined;
        }
        if (object.tmpTableSize !== undefined && object.tmpTableSize !== null) {
            message.tmpTableSize = object.tmpTableSize;
        }
        else {
            message.tmpTableSize = undefined;
        }
        if (object.maxHeapTableSize !== undefined &&
            object.maxHeapTableSize !== null) {
            message.maxHeapTableSize = object.maxHeapTableSize;
        }
        else {
            message.maxHeapTableSize = undefined;
        }
        if (object.defaultTimeZone !== undefined &&
            object.defaultTimeZone !== null) {
            message.defaultTimeZone = object.defaultTimeZone;
        }
        else {
            message.defaultTimeZone = '';
        }
        if (object.characterSetServer !== undefined &&
            object.characterSetServer !== null) {
            message.characterSetServer = object.characterSetServer;
        }
        else {
            message.characterSetServer = '';
        }
        if (object.collationServer !== undefined &&
            object.collationServer !== null) {
            message.collationServer = object.collationServer;
        }
        else {
            message.collationServer = '';
        }
        if (object.innodbAdaptiveHashIndex !== undefined &&
            object.innodbAdaptiveHashIndex !== null) {
            message.innodbAdaptiveHashIndex = object.innodbAdaptiveHashIndex;
        }
        else {
            message.innodbAdaptiveHashIndex = undefined;
        }
        if (object.innodbNumaInterleave !== undefined &&
            object.innodbNumaInterleave !== null) {
            message.innodbNumaInterleave = object.innodbNumaInterleave;
        }
        else {
            message.innodbNumaInterleave = undefined;
        }
        if (object.innodbLogBufferSize !== undefined &&
            object.innodbLogBufferSize !== null) {
            message.innodbLogBufferSize = object.innodbLogBufferSize;
        }
        else {
            message.innodbLogBufferSize = undefined;
        }
        if (object.innodbLogFileSize !== undefined &&
            object.innodbLogFileSize !== null) {
            message.innodbLogFileSize = object.innodbLogFileSize;
        }
        else {
            message.innodbLogFileSize = undefined;
        }
        if (object.innodbIoCapacity !== undefined &&
            object.innodbIoCapacity !== null) {
            message.innodbIoCapacity = object.innodbIoCapacity;
        }
        else {
            message.innodbIoCapacity = undefined;
        }
        if (object.innodbIoCapacityMax !== undefined &&
            object.innodbIoCapacityMax !== null) {
            message.innodbIoCapacityMax = object.innodbIoCapacityMax;
        }
        else {
            message.innodbIoCapacityMax = undefined;
        }
        if (object.innodbReadIoThreads !== undefined &&
            object.innodbReadIoThreads !== null) {
            message.innodbReadIoThreads = object.innodbReadIoThreads;
        }
        else {
            message.innodbReadIoThreads = undefined;
        }
        if (object.innodbWriteIoThreads !== undefined &&
            object.innodbWriteIoThreads !== null) {
            message.innodbWriteIoThreads = object.innodbWriteIoThreads;
        }
        else {
            message.innodbWriteIoThreads = undefined;
        }
        if (object.innodbPurgeThreads !== undefined &&
            object.innodbPurgeThreads !== null) {
            message.innodbPurgeThreads = object.innodbPurgeThreads;
        }
        else {
            message.innodbPurgeThreads = undefined;
        }
        if (object.innodbThreadConcurrency !== undefined &&
            object.innodbThreadConcurrency !== null) {
            message.innodbThreadConcurrency = object.innodbThreadConcurrency;
        }
        else {
            message.innodbThreadConcurrency = undefined;
        }
        if (object.innodbTempDataFileMaxSize !== undefined &&
            object.innodbTempDataFileMaxSize !== null) {
            message.innodbTempDataFileMaxSize =
                object.innodbTempDataFileMaxSize;
        }
        else {
            message.innodbTempDataFileMaxSize = undefined;
        }
        if (object.threadCacheSize !== undefined &&
            object.threadCacheSize !== null) {
            message.threadCacheSize = object.threadCacheSize;
        }
        else {
            message.threadCacheSize = undefined;
        }
        if (object.threadStack !== undefined && object.threadStack !== null) {
            message.threadStack = object.threadStack;
        }
        else {
            message.threadStack = undefined;
        }
        if (object.joinBufferSize !== undefined &&
            object.joinBufferSize !== null) {
            message.joinBufferSize = object.joinBufferSize;
        }
        else {
            message.joinBufferSize = undefined;
        }
        if (object.sortBufferSize !== undefined &&
            object.sortBufferSize !== null) {
            message.sortBufferSize = object.sortBufferSize;
        }
        else {
            message.sortBufferSize = undefined;
        }
        if (object.tableDefinitionCache !== undefined &&
            object.tableDefinitionCache !== null) {
            message.tableDefinitionCache = object.tableDefinitionCache;
        }
        else {
            message.tableDefinitionCache = undefined;
        }
        if (object.tableOpenCache !== undefined &&
            object.tableOpenCache !== null) {
            message.tableOpenCache = object.tableOpenCache;
        }
        else {
            message.tableOpenCache = undefined;
        }
        if (object.tableOpenCacheInstances !== undefined &&
            object.tableOpenCacheInstances !== null) {
            message.tableOpenCacheInstances = object.tableOpenCacheInstances;
        }
        else {
            message.tableOpenCacheInstances = undefined;
        }
        if (object.explicitDefaultsForTimestamp !== undefined &&
            object.explicitDefaultsForTimestamp !== null) {
            message.explicitDefaultsForTimestamp =
                object.explicitDefaultsForTimestamp;
        }
        else {
            message.explicitDefaultsForTimestamp = undefined;
        }
        if (object.autoIncrementIncrement !== undefined &&
            object.autoIncrementIncrement !== null) {
            message.autoIncrementIncrement = object.autoIncrementIncrement;
        }
        else {
            message.autoIncrementIncrement = undefined;
        }
        if (object.autoIncrementOffset !== undefined &&
            object.autoIncrementOffset !== null) {
            message.autoIncrementOffset = object.autoIncrementOffset;
        }
        else {
            message.autoIncrementOffset = undefined;
        }
        if (object.syncBinlog !== undefined && object.syncBinlog !== null) {
            message.syncBinlog = object.syncBinlog;
        }
        else {
            message.syncBinlog = undefined;
        }
        if (object.binlogCacheSize !== undefined &&
            object.binlogCacheSize !== null) {
            message.binlogCacheSize = object.binlogCacheSize;
        }
        else {
            message.binlogCacheSize = undefined;
        }
        if (object.binlogGroupCommitSyncDelay !== undefined &&
            object.binlogGroupCommitSyncDelay !== null) {
            message.binlogGroupCommitSyncDelay =
                object.binlogGroupCommitSyncDelay;
        }
        else {
            message.binlogGroupCommitSyncDelay = undefined;
        }
        if (object.binlogRowImage !== undefined &&
            object.binlogRowImage !== null) {
            message.binlogRowImage = object.binlogRowImage;
        }
        else {
            message.binlogRowImage = 0;
        }
        if (object.binlogRowsQueryLogEvents !== undefined &&
            object.binlogRowsQueryLogEvents !== null) {
            message.binlogRowsQueryLogEvents = object.binlogRowsQueryLogEvents;
        }
        else {
            message.binlogRowsQueryLogEvents = undefined;
        }
        if (object.rplSemiSyncMasterWaitForSlaveCount !== undefined &&
            object.rplSemiSyncMasterWaitForSlaveCount !== null) {
            message.rplSemiSyncMasterWaitForSlaveCount =
                object.rplSemiSyncMasterWaitForSlaveCount;
        }
        else {
            message.rplSemiSyncMasterWaitForSlaveCount = undefined;
        }
        if (object.slaveParallelType !== undefined &&
            object.slaveParallelType !== null) {
            message.slaveParallelType = object.slaveParallelType;
        }
        else {
            message.slaveParallelType = 0;
        }
        if (object.slaveParallelWorkers !== undefined &&
            object.slaveParallelWorkers !== null) {
            message.slaveParallelWorkers = object.slaveParallelWorkers;
        }
        else {
            message.slaveParallelWorkers = undefined;
        }
        if (object.regexpTimeLimit !== undefined &&
            object.regexpTimeLimit !== null) {
            message.regexpTimeLimit = object.regexpTimeLimit;
        }
        else {
            message.regexpTimeLimit = undefined;
        }
        if (object.mdbPreserveBinlogBytes !== undefined &&
            object.mdbPreserveBinlogBytes !== null) {
            message.mdbPreserveBinlogBytes = object.mdbPreserveBinlogBytes;
        }
        else {
            message.mdbPreserveBinlogBytes = undefined;
        }
        if (object.interactiveTimeout !== undefined &&
            object.interactiveTimeout !== null) {
            message.interactiveTimeout = object.interactiveTimeout;
        }
        else {
            message.interactiveTimeout = undefined;
        }
        if (object.waitTimeout !== undefined && object.waitTimeout !== null) {
            message.waitTimeout = object.waitTimeout;
        }
        else {
            message.waitTimeout = undefined;
        }
        if (object.mdbOfflineModeEnableLag !== undefined &&
            object.mdbOfflineModeEnableLag !== null) {
            message.mdbOfflineModeEnableLag = object.mdbOfflineModeEnableLag;
        }
        else {
            message.mdbOfflineModeEnableLag = undefined;
        }
        if (object.mdbOfflineModeDisableLag !== undefined &&
            object.mdbOfflineModeDisableLag !== null) {
            message.mdbOfflineModeDisableLag = object.mdbOfflineModeDisableLag;
        }
        else {
            message.mdbOfflineModeDisableLag = undefined;
        }
        if (object.rangeOptimizerMaxMemSize !== undefined &&
            object.rangeOptimizerMaxMemSize !== null) {
            message.rangeOptimizerMaxMemSize = object.rangeOptimizerMaxMemSize;
        }
        else {
            message.rangeOptimizerMaxMemSize = undefined;
        }
        return message;
    },
};
const baseMysqlconfigset80 = {};
exports.Mysqlconfigset80 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mysqlconfig80.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mysqlconfig80.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mysqlconfig80.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMysqlconfigset80 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mysqlconfig80.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mysqlconfig80.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mysqlconfig80.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMysqlconfigset80 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mysqlconfig80.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mysqlconfig80.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mysqlconfig80.fromJSON(object.defaultConfig);
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
                ? exports.Mysqlconfig80.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mysqlconfig80.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mysqlconfig80.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMysqlconfigset80 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mysqlconfig80.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mysqlconfig80.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mysqlconfig80.fromPartial(object.defaultConfig);
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
