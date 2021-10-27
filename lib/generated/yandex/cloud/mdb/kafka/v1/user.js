"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = exports.UserSpec = exports.User = exports.permission_AccessRoleToJSON = exports.permission_AccessRoleFromJSON = exports.Permission_AccessRole = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.kafka.v1';
var Permission_AccessRole;
(function (Permission_AccessRole) {
    Permission_AccessRole[Permission_AccessRole["ACCESS_ROLE_UNSPECIFIED"] = 0] = "ACCESS_ROLE_UNSPECIFIED";
    /** ACCESS_ROLE_PRODUCER - producer role for the user. */
    Permission_AccessRole[Permission_AccessRole["ACCESS_ROLE_PRODUCER"] = 1] = "ACCESS_ROLE_PRODUCER";
    /** ACCESS_ROLE_CONSUMER - consumer role for the user. */
    Permission_AccessRole[Permission_AccessRole["ACCESS_ROLE_CONSUMER"] = 2] = "ACCESS_ROLE_CONSUMER";
    /** ACCESS_ROLE_ADMIN - admin role for the user. */
    Permission_AccessRole[Permission_AccessRole["ACCESS_ROLE_ADMIN"] = 3] = "ACCESS_ROLE_ADMIN";
    Permission_AccessRole[Permission_AccessRole["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Permission_AccessRole = exports.Permission_AccessRole || (exports.Permission_AccessRole = {}));
function permission_AccessRoleFromJSON(object) {
    switch (object) {
        case 0:
        case 'ACCESS_ROLE_UNSPECIFIED':
            return Permission_AccessRole.ACCESS_ROLE_UNSPECIFIED;
        case 1:
        case 'ACCESS_ROLE_PRODUCER':
            return Permission_AccessRole.ACCESS_ROLE_PRODUCER;
        case 2:
        case 'ACCESS_ROLE_CONSUMER':
            return Permission_AccessRole.ACCESS_ROLE_CONSUMER;
        case 3:
        case 'ACCESS_ROLE_ADMIN':
            return Permission_AccessRole.ACCESS_ROLE_ADMIN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Permission_AccessRole.UNRECOGNIZED;
    }
}
exports.permission_AccessRoleFromJSON = permission_AccessRoleFromJSON;
function permission_AccessRoleToJSON(object) {
    switch (object) {
        case Permission_AccessRole.ACCESS_ROLE_UNSPECIFIED:
            return 'ACCESS_ROLE_UNSPECIFIED';
        case Permission_AccessRole.ACCESS_ROLE_PRODUCER:
            return 'ACCESS_ROLE_PRODUCER';
        case Permission_AccessRole.ACCESS_ROLE_CONSUMER:
            return 'ACCESS_ROLE_CONSUMER';
        case Permission_AccessRole.ACCESS_ROLE_ADMIN:
            return 'ACCESS_ROLE_ADMIN';
        default:
            return 'UNKNOWN';
    }
}
exports.permission_AccessRoleToJSON = permission_AccessRoleToJSON;
const baseUser = {
    $type: 'yandex.cloud.mdb.kafka.v1.User',
    name: '',
    clusterId: '',
};
exports.User = {
    $type: 'yandex.cloud.mdb.kafka.v1.User',
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
typeRegistry_1.messageTypeRegistry.set(exports.User.$type, exports.User);
const baseUserSpec = {
    $type: 'yandex.cloud.mdb.kafka.v1.UserSpec',
    name: '',
    password: '',
};
exports.UserSpec = {
    $type: 'yandex.cloud.mdb.kafka.v1.UserSpec',
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
typeRegistry_1.messageTypeRegistry.set(exports.UserSpec.$type, exports.UserSpec);
const basePermission = {
    $type: 'yandex.cloud.mdb.kafka.v1.Permission',
    topicName: '',
    role: 0,
};
exports.Permission = {
    $type: 'yandex.cloud.mdb.kafka.v1.Permission',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.topicName !== '') {
            writer.uint32(10).string(message.topicName);
        }
        if (message.role !== 0) {
            writer.uint32(16).int32(message.role);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePermission };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topicName = reader.string();
                    break;
                case 2:
                    message.role = reader.int32();
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
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        }
        else {
            message.topicName = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = permission_AccessRoleFromJSON(object.role);
        }
        else {
            message.role = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.topicName !== undefined && (obj.topicName = message.topicName);
        message.role !== undefined &&
            (obj.role = permission_AccessRoleToJSON(message.role));
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePermission };
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        }
        else {
            message.topicName = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = object.role;
        }
        else {
            message.role = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Permission.$type, exports.Permission);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
