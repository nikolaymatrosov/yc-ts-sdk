/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.sqlserver.v1';
export var Permission_Role;
(function (Permission_Role) {
    Permission_Role[Permission_Role["ROLE_UNSPECIFIED"] = 0] = "ROLE_UNSPECIFIED";
    /** DB_OWNER - Members of this fixed database role can perform all configuration and maintenance activities on the database, and can also drop the database in SQL Server. */
    Permission_Role[Permission_Role["DB_OWNER"] = 1] = "DB_OWNER";
    /** DB_SECURITYADMIN - Members of this fixed database role can modify role membership for custom roles only and manage permissions. They can potentially elevate their privileges and their actions should be monitored. */
    Permission_Role[Permission_Role["DB_SECURITYADMIN"] = 2] = "DB_SECURITYADMIN";
    /** DB_ACCESSADMIN - Members of this fixed database role can add or remove access to the database for Windows logins, Windows groups, and SQL Server logins. */
    Permission_Role[Permission_Role["DB_ACCESSADMIN"] = 3] = "DB_ACCESSADMIN";
    /** DB_BACKUPOPERATOR - Members of this fixed database role can back up the database. */
    Permission_Role[Permission_Role["DB_BACKUPOPERATOR"] = 4] = "DB_BACKUPOPERATOR";
    /** DB_DDLADMIN - Members of this fixed database role can run any Data Definition Language (DDL) command in a database. */
    Permission_Role[Permission_Role["DB_DDLADMIN"] = 5] = "DB_DDLADMIN";
    /** DB_DATAWRITER - Members of this fixed database role can add, delete, or change data in all user tables. */
    Permission_Role[Permission_Role["DB_DATAWRITER"] = 6] = "DB_DATAWRITER";
    /** DB_DATAREADER - Members of this fixed database role can read all data from all user tables. */
    Permission_Role[Permission_Role["DB_DATAREADER"] = 7] = "DB_DATAREADER";
    /** DB_DENYDATAWRITER - Members of this fixed database role cannot add, modify, or delete any data in the user tables within a database. Denial has a higher priority than a grant, so you can use this role to quickly restrict one's privileges without explicitly revoking permissions or roles. */
    Permission_Role[Permission_Role["DB_DENYDATAWRITER"] = 8] = "DB_DENYDATAWRITER";
    /** DB_DENYDATAREADER - Members of this fixed database role cannot read any data in the user tables within a database. Denial has a higher priority than a grant, so you can use this role to quickly restrict one's privileges without explicitly revoking permissions or roles. */
    Permission_Role[Permission_Role["DB_DENYDATAREADER"] = 9] = "DB_DENYDATAREADER";
    Permission_Role[Permission_Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Permission_Role || (Permission_Role = {}));
export function permission_RoleFromJSON(object) {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return Permission_Role.ROLE_UNSPECIFIED;
        case 1:
        case 'DB_OWNER':
            return Permission_Role.DB_OWNER;
        case 2:
        case 'DB_SECURITYADMIN':
            return Permission_Role.DB_SECURITYADMIN;
        case 3:
        case 'DB_ACCESSADMIN':
            return Permission_Role.DB_ACCESSADMIN;
        case 4:
        case 'DB_BACKUPOPERATOR':
            return Permission_Role.DB_BACKUPOPERATOR;
        case 5:
        case 'DB_DDLADMIN':
            return Permission_Role.DB_DDLADMIN;
        case 6:
        case 'DB_DATAWRITER':
            return Permission_Role.DB_DATAWRITER;
        case 7:
        case 'DB_DATAREADER':
            return Permission_Role.DB_DATAREADER;
        case 8:
        case 'DB_DENYDATAWRITER':
            return Permission_Role.DB_DENYDATAWRITER;
        case 9:
        case 'DB_DENYDATAREADER':
            return Permission_Role.DB_DENYDATAREADER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Permission_Role.UNRECOGNIZED;
    }
}
export function permission_RoleToJSON(object) {
    switch (object) {
        case Permission_Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case Permission_Role.DB_OWNER:
            return 'DB_OWNER';
        case Permission_Role.DB_SECURITYADMIN:
            return 'DB_SECURITYADMIN';
        case Permission_Role.DB_ACCESSADMIN:
            return 'DB_ACCESSADMIN';
        case Permission_Role.DB_BACKUPOPERATOR:
            return 'DB_BACKUPOPERATOR';
        case Permission_Role.DB_DDLADMIN:
            return 'DB_DDLADMIN';
        case Permission_Role.DB_DATAWRITER:
            return 'DB_DATAWRITER';
        case Permission_Role.DB_DATAREADER:
            return 'DB_DATAREADER';
        case Permission_Role.DB_DENYDATAWRITER:
            return 'DB_DENYDATAWRITER';
        case Permission_Role.DB_DENYDATAREADER:
            return 'DB_DENYDATAREADER';
        default:
            return 'UNKNOWN';
    }
}
const baseUser = { name: '', clusterId: '' };
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.permissions.push(Permission.decode(reader, reader.uint32()));
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
                message.permissions.push(Permission.fromJSON(e));
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
                message.permissions.push(Permission.fromPartial(e));
            }
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
                message.roles.push(permission_RoleFromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        if (message.roles) {
            obj.roles = message.roles.map((e) => permission_RoleToJSON(e));
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.permissions.push(Permission.decode(reader, reader.uint32()));
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
                message.permissions.push(Permission.fromJSON(e));
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
                message.permissions.push(Permission.fromPartial(e));
            }
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
