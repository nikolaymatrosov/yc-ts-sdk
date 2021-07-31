/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { User, UserSpec, Permission, ConnectionLimits, globalPermissionFromJSON, authPluginFromJSON, globalPermissionToJSON, authPluginToJSON, } from '../../../../../yandex/cloud/mdb/mysql/v1/user';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.mysql.v1';
const baseGetUserRequest = { clusterId: '', userName: '' };
export const GetUserRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetUserRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetUserRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        }
        else {
            message.userName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetUserRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        }
        else {
            message.userName = '';
        }
        return message;
    },
};
const baseListUsersRequest = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListUsersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUsersRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListUsersRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListUsersRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
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
        return message;
    },
};
const baseListUsersResponse = { nextPageToken: '' };
export const ListUsersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.users) {
            User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUsersResponse };
        message.users = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(User.decode(reader, reader.uint32()));
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
        const message = { ...baseListUsersResponse };
        message.users = [];
        if (object.users !== undefined && object.users !== null) {
            for (const e of object.users) {
                message.users.push(User.fromJSON(e));
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
        if (message.users) {
            obj.users = message.users.map((e) => e ? User.toJSON(e) : undefined);
        }
        else {
            obj.users = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListUsersResponse };
        message.users = [];
        if (object.users !== undefined && object.users !== null) {
            for (const e of object.users) {
                message.users.push(User.fromPartial(e));
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
const baseCreateUserRequest = { clusterId: '' };
export const CreateUserRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userSpec !== undefined) {
            UserSpec.encode(message.userSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateUserRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userSpec = UserSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateUserRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.userSpec !== undefined && object.userSpec !== null) {
            message.userSpec = UserSpec.fromJSON(object.userSpec);
        }
        else {
            message.userSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userSpec !== undefined &&
            (obj.userSpec = message.userSpec
                ? UserSpec.toJSON(message.userSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateUserRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.userSpec !== undefined && object.userSpec !== null) {
            message.userSpec = UserSpec.fromPartial(object.userSpec);
        }
        else {
            message.userSpec = undefined;
        }
        return message;
    },
};
const baseCreateUserMetadata = { clusterId: '', userName: '' };
export const CreateUserMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateUserMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateUserMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        }
        else {
            message.userName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateUserMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        }
        else {
            message.userName = '';
        }
        return message;
    },
};
const baseUpdateUserRequest = {
    clusterId: '',
    userName: '',
    password: '',
    globalPermissions: 0,
    authenticationPlugin: 0,
};
export const UpdateUserRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.password !== '') {
            writer.uint32(34).string(message.password);
        }
        for (const v of message.permissions) {
            Permission.encode(v, writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(50).fork();
        for (const v of message.globalPermissions) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.connectionLimits !== undefined) {
            ConnectionLimits.encode(message.connectionLimits, writer.uint32(58).fork()).ldelim();
        }
        if (message.authenticationPlugin !== 0) {
            writer.uint32(64).int32(message.authenticationPlugin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateUserRequest };
        message.permissions = [];
        message.globalPermissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.password = reader.string();
                    break;
                case 5:
                    message.permissions.push(Permission.decode(reader, reader.uint32()));
                    break;
                case 6:
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
                case 7:
                    message.connectionLimits = ConnectionLimits.decode(reader, reader.uint32());
                    break;
                case 8:
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
        const message = { ...baseUpdateUserRequest };
        message.permissions = [];
        message.globalPermissions = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        }
        else {
            message.userName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
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
        const message = { ...baseUpdateUserRequest };
        message.permissions = [];
        message.globalPermissions = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        }
        else {
            message.userName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
const baseUpdateUserMetadata = { clusterId: '', userName: '' };
export const UpdateUserMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateUserMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateUserMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        }
        else {
            message.userName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateUserMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        }
        else {
            message.userName = '';
        }
        return message;
    },
};
const baseDeleteUserRequest = { clusterId: '', userName: '' };
export const DeleteUserRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteUserRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        }
        else {
            message.userName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteUserRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        }
        else {
            message.userName = '';
        }
        return message;
    },
};
const baseDeleteUserMetadata = { clusterId: '', userName: '' };
export const DeleteUserMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteUserMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteUserMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        }
        else {
            message.userName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteUserMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        }
        else {
            message.userName = '';
        }
        return message;
    },
};
const baseGrantUserPermissionRequest = { clusterId: '', userName: '' };
export const GrantUserPermissionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        if (message.permission !== undefined) {
            Permission.encode(message.permission, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGrantUserPermissionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.permission = Permission.decode(reader, reader.uint32());
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
            ...baseGrantUserPermissionRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        }
        else {
            message.userName = '';
        }
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = Permission.fromJSON(object.permission);
        }
        else {
            message.permission = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.permission !== undefined &&
            (obj.permission = message.permission
                ? Permission.toJSON(message.permission)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGrantUserPermissionRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        }
        else {
            message.userName = '';
        }
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = Permission.fromPartial(object.permission);
        }
        else {
            message.permission = undefined;
        }
        return message;
    },
};
const baseGrantUserPermissionMetadata = { clusterId: '', userName: '' };
export const GrantUserPermissionMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGrantUserPermissionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
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
            ...baseGrantUserPermissionMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        }
        else {
            message.userName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGrantUserPermissionMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        }
        else {
            message.userName = '';
        }
        return message;
    },
};
const baseRevokeUserPermissionRequest = { clusterId: '', userName: '' };
export const RevokeUserPermissionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        if (message.permission !== undefined) {
            Permission.encode(message.permission, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRevokeUserPermissionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.permission = Permission.decode(reader, reader.uint32());
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
            ...baseRevokeUserPermissionRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        }
        else {
            message.userName = '';
        }
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = Permission.fromJSON(object.permission);
        }
        else {
            message.permission = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        message.permission !== undefined &&
            (obj.permission = message.permission
                ? Permission.toJSON(message.permission)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRevokeUserPermissionRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        }
        else {
            message.userName = '';
        }
        if (object.permission !== undefined && object.permission !== null) {
            message.permission = Permission.fromPartial(object.permission);
        }
        else {
            message.permission = undefined;
        }
        return message;
    },
};
const baseRevokeUserPermissionMetadata = {
    clusterId: '',
    userName: '',
};
export const RevokeUserPermissionMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.userName !== '') {
            writer.uint32(18).string(message.userName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRevokeUserPermissionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.userName = reader.string();
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
            ...baseRevokeUserPermissionMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        }
        else {
            message.userName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.userName !== undefined && (obj.userName = message.userName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRevokeUserPermissionMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        }
        else {
            message.userName = '';
        }
        return message;
    },
};
/** A set of methods for managing MySQL users. */
export const UserServiceService = {
    /**
     * Returns the specified MySQL user.
     *
     * To get the list of available MySQL users, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.mysql.v1.UserService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetUserRequest.encode(value).finish()),
        requestDeserialize: (value) => GetUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(User.encode(value).finish()),
        responseDeserialize: (value) => User.decode(value),
    },
    /** Retrieves a list of MySQL users in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.mysql.v1.UserService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListUsersRequest.encode(value).finish()),
        requestDeserialize: (value) => ListUsersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListUsersResponse.encode(value).finish()),
        responseDeserialize: (value) => ListUsersResponse.decode(value),
    },
    /** Creates a MySQL user in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.mysql.v1.UserService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateUserRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Modifies the specified MySQL user. */
    update: {
        path: '/yandex.cloud.mdb.mysql.v1.UserService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateUserRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified MySQL user. */
    delete: {
        path: '/yandex.cloud.mdb.mysql.v1.UserService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteUserRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Grants a permission to the specified MySQL user. */
    grantPermission: {
        path: '/yandex.cloud.mdb.mysql.v1.UserService/GrantPermission',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GrantUserPermissionRequest.encode(value).finish()),
        requestDeserialize: (value) => GrantUserPermissionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Revokes a permission from the specified MySQL user. */
    revokePermission: {
        path: '/yandex.cloud.mdb.mysql.v1.UserService/RevokePermission',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(RevokeUserPermissionRequest.encode(value).finish()),
        requestDeserialize: (value) => RevokeUserPermissionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const UserServiceClient = makeGenericClientConstructor(UserServiceService, 'yandex.cloud.mdb.mysql.v1.UserService');
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