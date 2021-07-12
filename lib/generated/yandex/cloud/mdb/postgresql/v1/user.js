/* eslint-disable */
import { BoolValue, Int64Value } from '../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.postgresql.v1';
export var UserSettings_SynchronousCommit;
(function (UserSettings_SynchronousCommit) {
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_UNSPECIFIED"] = 0] = "SYNCHRONOUS_COMMIT_UNSPECIFIED";
    /** SYNCHRONOUS_COMMIT_ON - (default value) success is reported to the client if the data is in WAL (Write-Ahead Log), and WAL is written to the storage of both the master and its synchronous standby server. */
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_ON"] = 1] = "SYNCHRONOUS_COMMIT_ON";
    /**
     * SYNCHRONOUS_COMMIT_OFF - success is reported to the client even if the data is not in WAL.
     * There is no synchronous write operation, data may be loss in case of storage subsystem failure.
     */
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_OFF"] = 2] = "SYNCHRONOUS_COMMIT_OFF";
    /**
     * SYNCHRONOUS_COMMIT_LOCAL - success is reported to the client if the data is in WAL, and WAL is written to the storage of the master server.
     * The transaction may be lost due to storage subsystem failure on the master server.
     */
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_LOCAL"] = 3] = "SYNCHRONOUS_COMMIT_LOCAL";
    /**
     * SYNCHRONOUS_COMMIT_REMOTE_WRITE - success is reported to the client if the data is in WAL, WAL is written to the storage of the master server, and the server's synchronous standby indicates that it has received WAL and written it out to its operating system.
     * The transaction may be lost due to simultaneous storage subsystem failure on the master and operating system's failure on the synchronous standby.
     */
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_WRITE"] = 4] = "SYNCHRONOUS_COMMIT_REMOTE_WRITE";
    /**
     * SYNCHRONOUS_COMMIT_REMOTE_APPLY - success is reported to the client if the data is in WAL (Write-Ahead Log), WAL is written to the storage of the master server, and its synchronous standby indicates that it has received WAL and applied it.
     * The transaction may be lost due to irrecoverably failure of both the master and its synchronous standby.
     */
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["SYNCHRONOUS_COMMIT_REMOTE_APPLY"] = 5] = "SYNCHRONOUS_COMMIT_REMOTE_APPLY";
    UserSettings_SynchronousCommit[UserSettings_SynchronousCommit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_SynchronousCommit || (UserSettings_SynchronousCommit = {}));
export function userSettings_SynchronousCommitFromJSON(object) {
    switch (object) {
        case 0:
        case 'SYNCHRONOUS_COMMIT_UNSPECIFIED':
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED;
        case 1:
        case 'SYNCHRONOUS_COMMIT_ON':
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_ON;
        case 2:
        case 'SYNCHRONOUS_COMMIT_OFF':
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF;
        case 3:
        case 'SYNCHRONOUS_COMMIT_LOCAL':
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL;
        case 4:
        case 'SYNCHRONOUS_COMMIT_REMOTE_WRITE':
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE;
        case 5:
        case 'SYNCHRONOUS_COMMIT_REMOTE_APPLY':
            return UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_SynchronousCommit.UNRECOGNIZED;
    }
}
export function userSettings_SynchronousCommitToJSON(object) {
    switch (object) {
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_UNSPECIFIED:
            return 'SYNCHRONOUS_COMMIT_UNSPECIFIED';
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_ON:
            return 'SYNCHRONOUS_COMMIT_ON';
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_OFF:
            return 'SYNCHRONOUS_COMMIT_OFF';
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_LOCAL:
            return 'SYNCHRONOUS_COMMIT_LOCAL';
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_WRITE:
            return 'SYNCHRONOUS_COMMIT_REMOTE_WRITE';
        case UserSettings_SynchronousCommit.SYNCHRONOUS_COMMIT_REMOTE_APPLY:
            return 'SYNCHRONOUS_COMMIT_REMOTE_APPLY';
        default:
            return 'UNKNOWN';
    }
}
export var UserSettings_LogStatement;
(function (UserSettings_LogStatement) {
    UserSettings_LogStatement[UserSettings_LogStatement["LOG_STATEMENT_UNSPECIFIED"] = 0] = "LOG_STATEMENT_UNSPECIFIED";
    /** LOG_STATEMENT_NONE - (default) logs none of SQL statements. */
    UserSettings_LogStatement[UserSettings_LogStatement["LOG_STATEMENT_NONE"] = 1] = "LOG_STATEMENT_NONE";
    /** LOG_STATEMENT_DDL - logs all data definition statements (such as `CREATE`, `ALTER`, `DROP` and others). */
    UserSettings_LogStatement[UserSettings_LogStatement["LOG_STATEMENT_DDL"] = 2] = "LOG_STATEMENT_DDL";
    /** LOG_STATEMENT_MOD - logs all statements that fall in the `LOG_STATEMENT_DDL` category plus data-modifying statements (such as `INSERT`, `UPDATE` and others). */
    UserSettings_LogStatement[UserSettings_LogStatement["LOG_STATEMENT_MOD"] = 3] = "LOG_STATEMENT_MOD";
    /** LOG_STATEMENT_ALL - logs all SQL statements. */
    UserSettings_LogStatement[UserSettings_LogStatement["LOG_STATEMENT_ALL"] = 4] = "LOG_STATEMENT_ALL";
    UserSettings_LogStatement[UserSettings_LogStatement["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_LogStatement || (UserSettings_LogStatement = {}));
export function userSettings_LogStatementFromJSON(object) {
    switch (object) {
        case 0:
        case 'LOG_STATEMENT_UNSPECIFIED':
            return UserSettings_LogStatement.LOG_STATEMENT_UNSPECIFIED;
        case 1:
        case 'LOG_STATEMENT_NONE':
            return UserSettings_LogStatement.LOG_STATEMENT_NONE;
        case 2:
        case 'LOG_STATEMENT_DDL':
            return UserSettings_LogStatement.LOG_STATEMENT_DDL;
        case 3:
        case 'LOG_STATEMENT_MOD':
            return UserSettings_LogStatement.LOG_STATEMENT_MOD;
        case 4:
        case 'LOG_STATEMENT_ALL':
            return UserSettings_LogStatement.LOG_STATEMENT_ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_LogStatement.UNRECOGNIZED;
    }
}
export function userSettings_LogStatementToJSON(object) {
    switch (object) {
        case UserSettings_LogStatement.LOG_STATEMENT_UNSPECIFIED:
            return 'LOG_STATEMENT_UNSPECIFIED';
        case UserSettings_LogStatement.LOG_STATEMENT_NONE:
            return 'LOG_STATEMENT_NONE';
        case UserSettings_LogStatement.LOG_STATEMENT_DDL:
            return 'LOG_STATEMENT_DDL';
        case UserSettings_LogStatement.LOG_STATEMENT_MOD:
            return 'LOG_STATEMENT_MOD';
        case UserSettings_LogStatement.LOG_STATEMENT_ALL:
            return 'LOG_STATEMENT_ALL';
        default:
            return 'UNKNOWN';
    }
}
export var UserSettings_TransactionIsolation;
(function (UserSettings_TransactionIsolation) {
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["TRANSACTION_ISOLATION_UNSPECIFIED"] = 0] = "TRANSACTION_ISOLATION_UNSPECIFIED";
    /** TRANSACTION_ISOLATION_READ_UNCOMMITTED - this level behaves like `TRANSACTION_ISOLATION_READ_COMMITTED` in PostgreSQL. */
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["TRANSACTION_ISOLATION_READ_UNCOMMITTED"] = 1] = "TRANSACTION_ISOLATION_READ_UNCOMMITTED";
    /** TRANSACTION_ISOLATION_READ_COMMITTED - (default) on this level query sees only data committed before the query began. */
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["TRANSACTION_ISOLATION_READ_COMMITTED"] = 2] = "TRANSACTION_ISOLATION_READ_COMMITTED";
    /** TRANSACTION_ISOLATION_REPEATABLE_READ - on this level all subsequent queries in a transaction will see the same rows, that were read by the first `SELECT` or `INSERT` query in this transaction, unchanged (these rows are locked during the first query). */
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["TRANSACTION_ISOLATION_REPEATABLE_READ"] = 3] = "TRANSACTION_ISOLATION_REPEATABLE_READ";
    /**
     * TRANSACTION_ISOLATION_SERIALIZABLE - this level provides the strictest transaction isolation.
     * All queries in the current transaction see only the rows that were fixed prior to execution of the first `SELECT` or `INSERT` query in this transaction.
     * If read and write operations in a concurrent set of serializable transactions overlap and this may cause an inconsistency that is not possible during the serial transaction execution, then one of the transaction will be rolled back, triggering a serialization failure.
     */
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["TRANSACTION_ISOLATION_SERIALIZABLE"] = 4] = "TRANSACTION_ISOLATION_SERIALIZABLE";
    UserSettings_TransactionIsolation[UserSettings_TransactionIsolation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserSettings_TransactionIsolation || (UserSettings_TransactionIsolation = {}));
export function userSettings_TransactionIsolationFromJSON(object) {
    switch (object) {
        case 0:
        case 'TRANSACTION_ISOLATION_UNSPECIFIED':
            return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED;
        case 1:
        case 'TRANSACTION_ISOLATION_READ_UNCOMMITTED':
            return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED;
        case 2:
        case 'TRANSACTION_ISOLATION_READ_COMMITTED':
            return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED;
        case 3:
        case 'TRANSACTION_ISOLATION_REPEATABLE_READ':
            return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ;
        case 4:
        case 'TRANSACTION_ISOLATION_SERIALIZABLE':
            return UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return UserSettings_TransactionIsolation.UNRECOGNIZED;
    }
}
export function userSettings_TransactionIsolationToJSON(object) {
    switch (object) {
        case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_UNSPECIFIED:
            return 'TRANSACTION_ISOLATION_UNSPECIFIED';
        case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_UNCOMMITTED:
            return 'TRANSACTION_ISOLATION_READ_UNCOMMITTED';
        case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_READ_COMMITTED:
            return 'TRANSACTION_ISOLATION_READ_COMMITTED';
        case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_REPEATABLE_READ:
            return 'TRANSACTION_ISOLATION_REPEATABLE_READ';
        case UserSettings_TransactionIsolation.TRANSACTION_ISOLATION_SERIALIZABLE:
            return 'TRANSACTION_ISOLATION_SERIALIZABLE';
        default:
            return 'UNKNOWN';
    }
}
const baseUser = { name: '', clusterId: '', connLimit: 0, grants: '' };
export const User = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        for (const v of message.permissions) {
            Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.connLimit !== 0) {
            writer.uint32(32).int64(message.connLimit);
        }
        if (message.settings !== undefined) {
            UserSettings.encode(message.settings, writer.uint32(42).fork()).ldelim();
        }
        if (message.login !== undefined) {
            BoolValue.encode({ value: message.login }, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.grants) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUser };
        message.permissions = [];
        message.grants = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.permissions.push(Permission.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.connLimit = longToNumber(reader.int64());
                    break;
                case 5:
                    message.settings = UserSettings.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.login = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.grants.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUser };
        message.permissions = [];
        message.grants = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromJSON(e));
            }
        }
        if (object.connLimit !== undefined && object.connLimit !== null) {
            message.connLimit = Number(object.connLimit);
        }
        else {
            message.connLimit = 0;
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = UserSettings.fromJSON(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.login !== undefined && object.login !== null) {
            message.login = Boolean(object.login);
        }
        else {
            message.login = undefined;
        }
        if (object.grants !== undefined && object.grants !== null) {
            for (const e of object.grants) {
                message.grants.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        message.connLimit !== undefined && (obj.connLimit = message.connLimit);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? UserSettings.toJSON(message.settings)
                : undefined);
        message.login !== undefined && (obj.login = message.login);
        if (message.grants) {
            obj.grants = message.grants.map((e) => e);
        }
        else {
            obj.grants = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUser };
        message.permissions = [];
        message.grants = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromPartial(e));
            }
        }
        if (object.connLimit !== undefined && object.connLimit !== null) {
            message.connLimit = object.connLimit;
        }
        else {
            message.connLimit = 0;
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = UserSettings.fromPartial(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.login !== undefined && object.login !== null) {
            message.login = object.login;
        }
        else {
            message.login = undefined;
        }
        if (object.grants !== undefined && object.grants !== null) {
            for (const e of object.grants) {
                message.grants.push(e);
            }
        }
        return message;
    },
};
const basePermission = { databaseName: '' };
export const Permission = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.databaseName !== '') {
            writer.uint32(10).string(message.databaseName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePermission };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePermission };
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePermission };
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        return message;
    },
};
const baseUserSpec = { name: '', password: '', grants: '' };
export const UserSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        for (const v of message.permissions) {
            Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.connLimit !== undefined) {
            Int64Value.encode({ value: message.connLimit }, writer.uint32(34).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            UserSettings.encode(message.settings, writer.uint32(42).fork()).ldelim();
        }
        if (message.login !== undefined) {
            BoolValue.encode({ value: message.login }, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.grants) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSpec };
        message.permissions = [];
        message.grants = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.permissions.push(Permission.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.connLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.settings = UserSettings.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.login = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.grants.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUserSpec };
        message.permissions = [];
        message.grants = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        }
        else {
            message.password = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromJSON(e));
            }
        }
        if (object.connLimit !== undefined && object.connLimit !== null) {
            message.connLimit = Number(object.connLimit);
        }
        else {
            message.connLimit = undefined;
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = UserSettings.fromJSON(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.login !== undefined && object.login !== null) {
            message.login = Boolean(object.login);
        }
        else {
            message.login = undefined;
        }
        if (object.grants !== undefined && object.grants !== null) {
            for (const e of object.grants) {
                message.grants.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.password !== undefined && (obj.password = message.password);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        message.connLimit !== undefined && (obj.connLimit = message.connLimit);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? UserSettings.toJSON(message.settings)
                : undefined);
        message.login !== undefined && (obj.login = message.login);
        if (message.grants) {
            obj.grants = message.grants.map((e) => e);
        }
        else {
            obj.grants = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUserSpec };
        message.permissions = [];
        message.grants = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        }
        else {
            message.password = '';
        }
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(Permission.fromPartial(e));
            }
        }
        if (object.connLimit !== undefined && object.connLimit !== null) {
            message.connLimit = object.connLimit;
        }
        else {
            message.connLimit = undefined;
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = UserSettings.fromPartial(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.login !== undefined && object.login !== null) {
            message.login = object.login;
        }
        else {
            message.login = undefined;
        }
        if (object.grants !== undefined && object.grants !== null) {
            for (const e of object.grants) {
                message.grants.push(e);
            }
        }
        return message;
    },
};
const baseUserSettings = {
    defaultTransactionIsolation: 0,
    synchronousCommit: 0,
    logStatement: 0,
};
export const UserSettings = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.defaultTransactionIsolation !== 0) {
            writer.uint32(8).int32(message.defaultTransactionIsolation);
        }
        if (message.lockTimeout !== undefined) {
            Int64Value.encode({ value: message.lockTimeout }, writer.uint32(18).fork()).ldelim();
        }
        if (message.logMinDurationStatement !== undefined) {
            Int64Value.encode({ value: message.logMinDurationStatement }, writer.uint32(26).fork()).ldelim();
        }
        if (message.synchronousCommit !== 0) {
            writer.uint32(32).int32(message.synchronousCommit);
        }
        if (message.tempFileLimit !== undefined) {
            Int64Value.encode({ value: message.tempFileLimit }, writer.uint32(42).fork()).ldelim();
        }
        if (message.logStatement !== 0) {
            writer.uint32(48).int32(message.logStatement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSettings };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultTransactionIsolation = reader.int32();
                    break;
                case 2:
                    message.lockTimeout = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.logMinDurationStatement = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.synchronousCommit = reader.int32();
                    break;
                case 5:
                    message.tempFileLimit = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.logStatement = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUserSettings };
        if (object.defaultTransactionIsolation !== undefined &&
            object.defaultTransactionIsolation !== null) {
            message.defaultTransactionIsolation =
                userSettings_TransactionIsolationFromJSON(object.defaultTransactionIsolation);
        }
        else {
            message.defaultTransactionIsolation = 0;
        }
        if (object.lockTimeout !== undefined && object.lockTimeout !== null) {
            message.lockTimeout = Number(object.lockTimeout);
        }
        else {
            message.lockTimeout = undefined;
        }
        if (object.logMinDurationStatement !== undefined &&
            object.logMinDurationStatement !== null) {
            message.logMinDurationStatement = Number(object.logMinDurationStatement);
        }
        else {
            message.logMinDurationStatement = undefined;
        }
        if (object.synchronousCommit !== undefined &&
            object.synchronousCommit !== null) {
            message.synchronousCommit = userSettings_SynchronousCommitFromJSON(object.synchronousCommit);
        }
        else {
            message.synchronousCommit = 0;
        }
        if (object.tempFileLimit !== undefined &&
            object.tempFileLimit !== null) {
            message.tempFileLimit = Number(object.tempFileLimit);
        }
        else {
            message.tempFileLimit = undefined;
        }
        if (object.logStatement !== undefined && object.logStatement !== null) {
            message.logStatement = userSettings_LogStatementFromJSON(object.logStatement);
        }
        else {
            message.logStatement = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.defaultTransactionIsolation !== undefined &&
            (obj.defaultTransactionIsolation =
                userSettings_TransactionIsolationToJSON(message.defaultTransactionIsolation));
        message.lockTimeout !== undefined &&
            (obj.lockTimeout = message.lockTimeout);
        message.logMinDurationStatement !== undefined &&
            (obj.logMinDurationStatement = message.logMinDurationStatement);
        message.synchronousCommit !== undefined &&
            (obj.synchronousCommit = userSettings_SynchronousCommitToJSON(message.synchronousCommit));
        message.tempFileLimit !== undefined &&
            (obj.tempFileLimit = message.tempFileLimit);
        message.logStatement !== undefined &&
            (obj.logStatement = userSettings_LogStatementToJSON(message.logStatement));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUserSettings };
        if (object.defaultTransactionIsolation !== undefined &&
            object.defaultTransactionIsolation !== null) {
            message.defaultTransactionIsolation =
                object.defaultTransactionIsolation;
        }
        else {
            message.defaultTransactionIsolation = 0;
        }
        if (object.lockTimeout !== undefined && object.lockTimeout !== null) {
            message.lockTimeout = object.lockTimeout;
        }
        else {
            message.lockTimeout = undefined;
        }
        if (object.logMinDurationStatement !== undefined &&
            object.logMinDurationStatement !== null) {
            message.logMinDurationStatement = object.logMinDurationStatement;
        }
        else {
            message.logMinDurationStatement = undefined;
        }
        if (object.synchronousCommit !== undefined &&
            object.synchronousCommit !== null) {
            message.synchronousCommit = object.synchronousCommit;
        }
        else {
            message.synchronousCommit = 0;
        }
        if (object.tempFileLimit !== undefined &&
            object.tempFileLimit !== null) {
            message.tempFileLimit = object.tempFileLimit;
        }
        else {
            message.tempFileLimit = undefined;
        }
        if (object.logStatement !== undefined && object.logStatement !== null) {
            message.logStatement = object.logStatement;
        }
        else {
            message.logStatement = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
