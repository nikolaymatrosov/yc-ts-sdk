"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSpec = exports.Permission = exports.User = exports.permission_PrivilegeToJSON = exports.permission_PrivilegeFromJSON = exports.Permission_Privilege = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.mysql.v1alpha';
var Permission_Privilege;
(function (Permission_Privilege) {
    Permission_Privilege[Permission_Privilege["PRIVILEGE_UNSPECIFIED"] = 0] = "PRIVILEGE_UNSPECIFIED";
    /** ALL_PRIVILEGES - All privileges that can be made available to the user. */
    Permission_Privilege[Permission_Privilege["ALL_PRIVILEGES"] = 1] = "ALL_PRIVILEGES";
    /** ALTER - Altering tables. */
    Permission_Privilege[Permission_Privilege["ALTER"] = 2] = "ALTER";
    /** ALTER_ROUTINE - Altering stored routines (stored procedures and functions). */
    Permission_Privilege[Permission_Privilege["ALTER_ROUTINE"] = 3] = "ALTER_ROUTINE";
    /** CREATE - Creating tables or indexes. */
    Permission_Privilege[Permission_Privilege["CREATE"] = 4] = "CREATE";
    /** CREATE_ROUTINE - Creating stored routines. */
    Permission_Privilege[Permission_Privilege["CREATE_ROUTINE"] = 5] = "CREATE_ROUTINE";
    /** CREATE_TEMPORARY_TABLES - Creating temporary tables. */
    Permission_Privilege[Permission_Privilege["CREATE_TEMPORARY_TABLES"] = 6] = "CREATE_TEMPORARY_TABLES";
    /** CREATE_VIEW - Creating views. */
    Permission_Privilege[Permission_Privilege["CREATE_VIEW"] = 7] = "CREATE_VIEW";
    /** DELETE - Deleting tables. */
    Permission_Privilege[Permission_Privilege["DELETE"] = 8] = "DELETE";
    /** DROP - Removing tables or views. */
    Permission_Privilege[Permission_Privilege["DROP"] = 9] = "DROP";
    /** EVENT - Creating, altering, dropping, or displaying events for the Event Scheduler. */
    Permission_Privilege[Permission_Privilege["EVENT"] = 10] = "EVENT";
    /** EXECUTE - Executing stored routines. */
    Permission_Privilege[Permission_Privilege["EXECUTE"] = 11] = "EXECUTE";
    /** INDEX - Creating and removing indexes. */
    Permission_Privilege[Permission_Privilege["INDEX"] = 12] = "INDEX";
    /** INSERT - Inserting rows into the database. */
    Permission_Privilege[Permission_Privilege["INSERT"] = 13] = "INSERT";
    /** LOCK_TABLES - Using LOCK TABLES statement for tables available with SELECT privilege. */
    Permission_Privilege[Permission_Privilege["LOCK_TABLES"] = 14] = "LOCK_TABLES";
    /**
     * SELECT - Selecting rows from tables.
     *
     * Some SELECT statements can be allowed without the SELECT privilege. All
     * statements that read column values require the SELECT privilege. See
     * details in [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/privileges-provided.html#priv_select).
     */
    Permission_Privilege[Permission_Privilege["SELECT"] = 15] = "SELECT";
    /** SHOW_VIEW - Using the SHOW CREATE VIEW statement. Also needed for views used with EXPLAIN. */
    Permission_Privilege[Permission_Privilege["SHOW_VIEW"] = 16] = "SHOW_VIEW";
    /** TRIGGER - Creating, removing, executing, or displaying triggers for a table. */
    Permission_Privilege[Permission_Privilege["TRIGGER"] = 17] = "TRIGGER";
    /** UPDATE - Updating rows in the database. */
    Permission_Privilege[Permission_Privilege["UPDATE"] = 18] = "UPDATE";
    Permission_Privilege[Permission_Privilege["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Permission_Privilege = exports.Permission_Privilege || (exports.Permission_Privilege = {}));
function permission_PrivilegeFromJSON(object) {
    switch (object) {
        case 0:
        case 'PRIVILEGE_UNSPECIFIED':
            return Permission_Privilege.PRIVILEGE_UNSPECIFIED;
        case 1:
        case 'ALL_PRIVILEGES':
            return Permission_Privilege.ALL_PRIVILEGES;
        case 2:
        case 'ALTER':
            return Permission_Privilege.ALTER;
        case 3:
        case 'ALTER_ROUTINE':
            return Permission_Privilege.ALTER_ROUTINE;
        case 4:
        case 'CREATE':
            return Permission_Privilege.CREATE;
        case 5:
        case 'CREATE_ROUTINE':
            return Permission_Privilege.CREATE_ROUTINE;
        case 6:
        case 'CREATE_TEMPORARY_TABLES':
            return Permission_Privilege.CREATE_TEMPORARY_TABLES;
        case 7:
        case 'CREATE_VIEW':
            return Permission_Privilege.CREATE_VIEW;
        case 8:
        case 'DELETE':
            return Permission_Privilege.DELETE;
        case 9:
        case 'DROP':
            return Permission_Privilege.DROP;
        case 10:
        case 'EVENT':
            return Permission_Privilege.EVENT;
        case 11:
        case 'EXECUTE':
            return Permission_Privilege.EXECUTE;
        case 12:
        case 'INDEX':
            return Permission_Privilege.INDEX;
        case 13:
        case 'INSERT':
            return Permission_Privilege.INSERT;
        case 14:
        case 'LOCK_TABLES':
            return Permission_Privilege.LOCK_TABLES;
        case 15:
        case 'SELECT':
            return Permission_Privilege.SELECT;
        case 16:
        case 'SHOW_VIEW':
            return Permission_Privilege.SHOW_VIEW;
        case 17:
        case 'TRIGGER':
            return Permission_Privilege.TRIGGER;
        case 18:
        case 'UPDATE':
            return Permission_Privilege.UPDATE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Permission_Privilege.UNRECOGNIZED;
    }
}
exports.permission_PrivilegeFromJSON = permission_PrivilegeFromJSON;
function permission_PrivilegeToJSON(object) {
    switch (object) {
        case Permission_Privilege.PRIVILEGE_UNSPECIFIED:
            return 'PRIVILEGE_UNSPECIFIED';
        case Permission_Privilege.ALL_PRIVILEGES:
            return 'ALL_PRIVILEGES';
        case Permission_Privilege.ALTER:
            return 'ALTER';
        case Permission_Privilege.ALTER_ROUTINE:
            return 'ALTER_ROUTINE';
        case Permission_Privilege.CREATE:
            return 'CREATE';
        case Permission_Privilege.CREATE_ROUTINE:
            return 'CREATE_ROUTINE';
        case Permission_Privilege.CREATE_TEMPORARY_TABLES:
            return 'CREATE_TEMPORARY_TABLES';
        case Permission_Privilege.CREATE_VIEW:
            return 'CREATE_VIEW';
        case Permission_Privilege.DELETE:
            return 'DELETE';
        case Permission_Privilege.DROP:
            return 'DROP';
        case Permission_Privilege.EVENT:
            return 'EVENT';
        case Permission_Privilege.EXECUTE:
            return 'EXECUTE';
        case Permission_Privilege.INDEX:
            return 'INDEX';
        case Permission_Privilege.INSERT:
            return 'INSERT';
        case Permission_Privilege.LOCK_TABLES:
            return 'LOCK_TABLES';
        case Permission_Privilege.SELECT:
            return 'SELECT';
        case Permission_Privilege.SHOW_VIEW:
            return 'SHOW_VIEW';
        case Permission_Privilege.TRIGGER:
            return 'TRIGGER';
        case Permission_Privilege.UPDATE:
            return 'UPDATE';
        default:
            return 'UNKNOWN';
    }
}
exports.permission_PrivilegeToJSON = permission_PrivilegeToJSON;
const baseUser = { name: '', clusterId: '' };
exports.User = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUser };
        message.permissions = [];
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
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
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
                message.permissions.push(exports.Permission.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? exports.Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUser };
        message.permissions = [];
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
                message.permissions.push(exports.Permission.fromPartial(e));
            }
        }
        return message;
    },
};
const basePermission = { databaseName: '', roles: 0 };
exports.Permission = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.databaseName !== '') {
            writer.uint32(10).string(message.databaseName);
        }
        writer.uint32(18).fork();
        for (const v of message.roles) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePermission };
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databaseName = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.roles.push(reader.int32());
                        }
                    }
                    else {
                        message.roles.push(reader.int32());
                    }
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
        message.roles = [];
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        }
        else {
            message.databaseName = '';
        }
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(permission_PrivilegeFromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        if (message.roles) {
            obj.roles = message.roles.map((e) => permission_PrivilegeToJSON(e));
        }
        else {
            obj.roles = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePermission };
        message.roles = [];
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        }
        else {
            message.databaseName = '';
        }
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(e);
            }
        }
        return message;
    },
};
const baseUserSpec = { name: '', password: '' };
exports.UserSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSpec };
        message.permissions = [];
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
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
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
                message.permissions.push(exports.Permission.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.password !== undefined && (obj.password = message.password);
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? exports.Permission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUserSpec };
        message.permissions = [];
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
                message.permissions.push(exports.Permission.fromPartial(e));
            }
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
