/* eslint-disable */
import { Int64Value } from '../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.mysql.v1';
export var GlobalPermission;
(function (GlobalPermission) {
    GlobalPermission[GlobalPermission["GLOBAL_PERMISSION_UNSPECIFIED"] = 0] = "GLOBAL_PERMISSION_UNSPECIFIED";
    /** REPLICATION_CLIENT - Enables use of the SHOW MASTER STATUS, SHOW SLAVE STATUS, and SHOW BINARY LOGS statements. */
    GlobalPermission[GlobalPermission["REPLICATION_CLIENT"] = 1] = "REPLICATION_CLIENT";
    /**
     * REPLICATION_SLAVE - Enables the account to request updates that have been made to databases on the master server,
     * using the SHOW SLAVE HOSTS, SHOW RELAYLOG EVENTS, and SHOW BINLOG EVENTS statements.
     */
    GlobalPermission[GlobalPermission["REPLICATION_SLAVE"] = 2] = "REPLICATION_SLAVE";
    /**
     * PROCESS - Enables display of information about the threads executing within the server
     * (that is, information about the statements being executed by sessions).
     * The privilege enables use of SHOW PROCESSLIST or mysqladmin processlist to see threads belonging
     * to other accounts; you can always see your own threads. The PROCESS privilege also enables use of SHOW ENGINE.
     */
    GlobalPermission[GlobalPermission["PROCESS"] = 3] = "PROCESS";
    GlobalPermission[GlobalPermission["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GlobalPermission || (GlobalPermission = {}));
export function globalPermissionFromJSON(object) {
    switch (object) {
        case 0:
        case 'GLOBAL_PERMISSION_UNSPECIFIED':
            return GlobalPermission.GLOBAL_PERMISSION_UNSPECIFIED;
        case 1:
        case 'REPLICATION_CLIENT':
            return GlobalPermission.REPLICATION_CLIENT;
        case 2:
        case 'REPLICATION_SLAVE':
            return GlobalPermission.REPLICATION_SLAVE;
        case 3:
        case 'PROCESS':
            return GlobalPermission.PROCESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GlobalPermission.UNRECOGNIZED;
    }
}
export function globalPermissionToJSON(object) {
    switch (object) {
        case GlobalPermission.GLOBAL_PERMISSION_UNSPECIFIED:
            return 'GLOBAL_PERMISSION_UNSPECIFIED';
        case GlobalPermission.REPLICATION_CLIENT:
            return 'REPLICATION_CLIENT';
        case GlobalPermission.REPLICATION_SLAVE:
            return 'REPLICATION_SLAVE';
        case GlobalPermission.PROCESS:
            return 'PROCESS';
        default:
            return 'UNKNOWN';
    }
}
export var AuthPlugin;
(function (AuthPlugin) {
    AuthPlugin[AuthPlugin["AUTH_PLUGIN_UNSPECIFIED"] = 0] = "AUTH_PLUGIN_UNSPECIFIED";
    /** MYSQL_NATIVE_PASSWORD - Use [Native Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/native-pluggable-authentication.html). */
    AuthPlugin[AuthPlugin["MYSQL_NATIVE_PASSWORD"] = 1] = "MYSQL_NATIVE_PASSWORD";
    /** CACHING_SHA2_PASSWORD - Use [Caching SHA-2 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html). */
    AuthPlugin[AuthPlugin["CACHING_SHA2_PASSWORD"] = 2] = "CACHING_SHA2_PASSWORD";
    /** SHA256_PASSWORD - Use [SHA-256 Pluggable Authentication](https://dev.mysql.com/doc/refman/8.0/en/sha256-pluggable-authentication.html). */
    AuthPlugin[AuthPlugin["SHA256_PASSWORD"] = 3] = "SHA256_PASSWORD";
    AuthPlugin[AuthPlugin["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthPlugin || (AuthPlugin = {}));
export function authPluginFromJSON(object) {
    switch (object) {
        case 0:
        case 'AUTH_PLUGIN_UNSPECIFIED':
            return AuthPlugin.AUTH_PLUGIN_UNSPECIFIED;
        case 1:
        case 'MYSQL_NATIVE_PASSWORD':
            return AuthPlugin.MYSQL_NATIVE_PASSWORD;
        case 2:
        case 'CACHING_SHA2_PASSWORD':
            return AuthPlugin.CACHING_SHA2_PASSWORD;
        case 3:
        case 'SHA256_PASSWORD':
            return AuthPlugin.SHA256_PASSWORD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AuthPlugin.UNRECOGNIZED;
    }
}
export function authPluginToJSON(object) {
    switch (object) {
        case AuthPlugin.AUTH_PLUGIN_UNSPECIFIED:
            return 'AUTH_PLUGIN_UNSPECIFIED';
        case AuthPlugin.MYSQL_NATIVE_PASSWORD:
            return 'MYSQL_NATIVE_PASSWORD';
        case AuthPlugin.CACHING_SHA2_PASSWORD:
            return 'CACHING_SHA2_PASSWORD';
        case AuthPlugin.SHA256_PASSWORD:
            return 'SHA256_PASSWORD';
        default:
            return 'UNKNOWN';
    }
}
export var Permission_Privilege;
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
    /** REFERENCES - Creation of a foreign key constraint for the parent table. */
    Permission_Privilege[Permission_Privilege["REFERENCES"] = 19] = "REFERENCES";
    Permission_Privilege[Permission_Privilege["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Permission_Privilege || (Permission_Privilege = {}));
export function permission_PrivilegeFromJSON(object) {
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
        case 19:
        case 'REFERENCES':
            return Permission_Privilege.REFERENCES;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Permission_Privilege.UNRECOGNIZED;
    }
}
export function permission_PrivilegeToJSON(object) {
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
        case Permission_Privilege.REFERENCES:
            return 'REFERENCES';
        default:
            return 'UNKNOWN';
    }
}
const baseUser = {
    name: '',
    clusterId: '',
    globalPermissions: 0,
    authenticationPlugin: 0,
};
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
        writer.uint32(34).fork();
        for (const v of message.globalPermissions) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.connectionLimits !== undefined) {
            ConnectionLimits.encode(message.connectionLimits, writer.uint32(42).fork()).ldelim();
        }
        if (message.authenticationPlugin !== 0) {
            writer.uint32(48).int32(message.authenticationPlugin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUser };
        message.permissions = [];
        message.globalPermissions = [];
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.globalPermissions.push(reader.int32());
                        }
                    }
                    else {
                        message.globalPermissions.push(reader.int32());
                    }
                    break;
                case 5:
                    message.connectionLimits = ConnectionLimits.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.authenticationPlugin = reader.int32();
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
        message.globalPermissions = [];
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
        if (object.globalPermissions !== undefined &&
            object.globalPermissions !== null) {
            for (const e of object.globalPermissions) {
                message.globalPermissions.push(globalPermissionFromJSON(e));
            }
        }
        if (object.connectionLimits !== undefined &&
            object.connectionLimits !== null) {
            message.connectionLimits = ConnectionLimits.fromJSON(object.connectionLimits);
        }
        else {
            message.connectionLimits = undefined;
        }
        if (object.authenticationPlugin !== undefined &&
            object.authenticationPlugin !== null) {
            message.authenticationPlugin = authPluginFromJSON(object.authenticationPlugin);
        }
        else {
            message.authenticationPlugin = 0;
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
        if (message.globalPermissions) {
            obj.globalPermissions = message.globalPermissions.map((e) => globalPermissionToJSON(e));
        }
        else {
            obj.globalPermissions = [];
        }
        message.connectionLimits !== undefined &&
            (obj.connectionLimits = message.connectionLimits
                ? ConnectionLimits.toJSON(message.connectionLimits)
                : undefined);
        message.authenticationPlugin !== undefined &&
            (obj.authenticationPlugin = authPluginToJSON(message.authenticationPlugin));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUser };
        message.permissions = [];
        message.globalPermissions = [];
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
        if (object.globalPermissions !== undefined &&
            object.globalPermissions !== null) {
            for (const e of object.globalPermissions) {
                message.globalPermissions.push(e);
            }
        }
        if (object.connectionLimits !== undefined &&
            object.connectionLimits !== null) {
            message.connectionLimits = ConnectionLimits.fromPartial(object.connectionLimits);
        }
        else {
            message.connectionLimits = undefined;
        }
        if (object.authenticationPlugin !== undefined &&
            object.authenticationPlugin !== null) {
            message.authenticationPlugin = object.authenticationPlugin;
        }
        else {
            message.authenticationPlugin = 0;
        }
        return message;
    },
};
const basePermission = { databaseName: '', roles: 0 };
export const Permission = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseConnectionLimits = {};
export const ConnectionLimits = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxQuestionsPerHour !== undefined) {
            Int64Value.encode({ value: message.maxQuestionsPerHour }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxUpdatesPerHour !== undefined) {
            Int64Value.encode({ value: message.maxUpdatesPerHour }, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxConnectionsPerHour !== undefined) {
            Int64Value.encode({ value: message.maxConnectionsPerHour }, writer.uint32(26).fork()).ldelim();
        }
        if (message.maxUserConnections !== undefined) {
            Int64Value.encode({ value: message.maxUserConnections }, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectionLimits };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxQuestionsPerHour = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxUpdatesPerHour = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.maxConnectionsPerHour = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.maxUserConnections = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseConnectionLimits };
        if (object.maxQuestionsPerHour !== undefined &&
            object.maxQuestionsPerHour !== null) {
            message.maxQuestionsPerHour = Number(object.maxQuestionsPerHour);
        }
        else {
            message.maxQuestionsPerHour = undefined;
        }
        if (object.maxUpdatesPerHour !== undefined &&
            object.maxUpdatesPerHour !== null) {
            message.maxUpdatesPerHour = Number(object.maxUpdatesPerHour);
        }
        else {
            message.maxUpdatesPerHour = undefined;
        }
        if (object.maxConnectionsPerHour !== undefined &&
            object.maxConnectionsPerHour !== null) {
            message.maxConnectionsPerHour = Number(object.maxConnectionsPerHour);
        }
        else {
            message.maxConnectionsPerHour = undefined;
        }
        if (object.maxUserConnections !== undefined &&
            object.maxUserConnections !== null) {
            message.maxUserConnections = Number(object.maxUserConnections);
        }
        else {
            message.maxUserConnections = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxQuestionsPerHour !== undefined &&
            (obj.maxQuestionsPerHour = message.maxQuestionsPerHour);
        message.maxUpdatesPerHour !== undefined &&
            (obj.maxUpdatesPerHour = message.maxUpdatesPerHour);
        message.maxConnectionsPerHour !== undefined &&
            (obj.maxConnectionsPerHour = message.maxConnectionsPerHour);
        message.maxUserConnections !== undefined &&
            (obj.maxUserConnections = message.maxUserConnections);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseConnectionLimits };
        if (object.maxQuestionsPerHour !== undefined &&
            object.maxQuestionsPerHour !== null) {
            message.maxQuestionsPerHour = object.maxQuestionsPerHour;
        }
        else {
            message.maxQuestionsPerHour = undefined;
        }
        if (object.maxUpdatesPerHour !== undefined &&
            object.maxUpdatesPerHour !== null) {
            message.maxUpdatesPerHour = object.maxUpdatesPerHour;
        }
        else {
            message.maxUpdatesPerHour = undefined;
        }
        if (object.maxConnectionsPerHour !== undefined &&
            object.maxConnectionsPerHour !== null) {
            message.maxConnectionsPerHour = object.maxConnectionsPerHour;
        }
        else {
            message.maxConnectionsPerHour = undefined;
        }
        if (object.maxUserConnections !== undefined &&
            object.maxUserConnections !== null) {
            message.maxUserConnections = object.maxUserConnections;
        }
        else {
            message.maxUserConnections = undefined;
        }
        return message;
    },
};
const baseUserSpec = {
    name: '',
    password: '',
    globalPermissions: 0,
    authenticationPlugin: 0,
};
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
        writer.uint32(34).fork();
        for (const v of message.globalPermissions) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.connectionLimits !== undefined) {
            ConnectionLimits.encode(message.connectionLimits, writer.uint32(42).fork()).ldelim();
        }
        if (message.authenticationPlugin !== 0) {
            writer.uint32(48).int32(message.authenticationPlugin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserSpec };
        message.permissions = [];
        message.globalPermissions = [];
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.globalPermissions.push(reader.int32());
                        }
                    }
                    else {
                        message.globalPermissions.push(reader.int32());
                    }
                    break;
                case 5:
                    message.connectionLimits = ConnectionLimits.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.authenticationPlugin = reader.int32();
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
        message.globalPermissions = [];
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
        if (object.globalPermissions !== undefined &&
            object.globalPermissions !== null) {
            for (const e of object.globalPermissions) {
                message.globalPermissions.push(globalPermissionFromJSON(e));
            }
        }
        if (object.connectionLimits !== undefined &&
            object.connectionLimits !== null) {
            message.connectionLimits = ConnectionLimits.fromJSON(object.connectionLimits);
        }
        else {
            message.connectionLimits = undefined;
        }
        if (object.authenticationPlugin !== undefined &&
            object.authenticationPlugin !== null) {
            message.authenticationPlugin = authPluginFromJSON(object.authenticationPlugin);
        }
        else {
            message.authenticationPlugin = 0;
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
        if (message.globalPermissions) {
            obj.globalPermissions = message.globalPermissions.map((e) => globalPermissionToJSON(e));
        }
        else {
            obj.globalPermissions = [];
        }
        message.connectionLimits !== undefined &&
            (obj.connectionLimits = message.connectionLimits
                ? ConnectionLimits.toJSON(message.connectionLimits)
                : undefined);
        message.authenticationPlugin !== undefined &&
            (obj.authenticationPlugin = authPluginToJSON(message.authenticationPlugin));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUserSpec };
        message.permissions = [];
        message.globalPermissions = [];
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
        if (object.globalPermissions !== undefined &&
            object.globalPermissions !== null) {
            for (const e of object.globalPermissions) {
                message.globalPermissions.push(e);
            }
        }
        if (object.connectionLimits !== undefined &&
            object.connectionLimits !== null) {
            message.connectionLimits = ConnectionLimits.fromPartial(object.connectionLimits);
        }
        else {
            message.connectionLimits = undefined;
        }
        if (object.authenticationPlugin !== undefined &&
            object.authenticationPlugin !== null) {
            message.authenticationPlugin = object.authenticationPlugin;
        }
        else {
            message.authenticationPlugin = 0;
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
