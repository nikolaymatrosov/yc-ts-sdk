"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleServiceClient = exports.RoleServiceService = exports.ListRolesResponse = exports.ListRolesRequest = exports.GetRoleRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const role_1 = require("../../../../yandex/cloud/iam/v1/role");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iam.v1';
const baseGetRoleRequest = { roleId: '' };
exports.GetRoleRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roleId !== '') {
            writer.uint32(10).string(message.roleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRoleRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetRoleRequest };
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = String(object.roleId);
        }
        else {
            message.roleId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.roleId !== undefined && (obj.roleId = message.roleId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetRoleRequest };
        if (object.roleId !== undefined && object.roleId !== null) {
            message.roleId = object.roleId;
        }
        else {
            message.roleId = '';
        }
        return message;
    },
};
const baseListRolesRequest = { pageSize: 0, pageToken: '', filter: '' };
exports.ListRolesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(26).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRolesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                case 3:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListRolesRequest };
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        }
        else {
            message.filter = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListRolesRequest };
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        return message;
    },
};
const baseListRolesResponse = { nextPageToken: '' };
exports.ListRolesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.roles) {
            role_1.Role.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRolesResponse };
        message.roles = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roles.push(role_1.Role.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListRolesResponse };
        message.roles = [];
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(role_1.Role.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.roles) {
            obj.roles = message.roles.map((e) => e ? role_1.Role.toJSON(e) : undefined);
        }
        else {
            obj.roles = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListRolesResponse };
        message.roles = [];
        if (object.roles !== undefined && object.roles !== null) {
            for (const e of object.roles) {
                message.roles.push(role_1.Role.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
/** A set of methods for managing Role resources. */
exports.RoleServiceService = {
    /**
     * Returns the specified Role resource.
     *
     * To get the list of available Role resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.RoleService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetRoleRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRoleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(role_1.Role.encode(value).finish()),
        responseDeserialize: (value) => role_1.Role.decode(value),
    },
    /** Retrieves the list of Role resources. */
    list: {
        path: '/yandex.cloud.iam.v1.RoleService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRolesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRolesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRolesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRolesResponse.decode(value),
    },
};
exports.RoleServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RoleServiceService, 'yandex.cloud.iam.v1.RoleService');
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
