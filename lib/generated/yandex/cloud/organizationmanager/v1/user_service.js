/* eslint-disable */
import { SubjectClaims } from '../../../../yandex/cloud/oauth/claims';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.organizationmanager.v1';
const baseListMembersRequest = {
    organizationId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListMembersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
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
        const message = { ...baseListMembersRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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
        const message = { ...baseListMembersRequest };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = String(object.organizationId);
        }
        else {
            message.organizationId = '';
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
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListMembersRequest };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = object.organizationId;
        }
        else {
            message.organizationId = '';
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
const baseListMembersResponse = { nextPageToken: '' };
export const ListMembersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.users) {
            ListMembersResponse_OrganizationUser.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMembersResponse };
        message.users = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(ListMembersResponse_OrganizationUser.decode(reader, reader.uint32()));
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
        const message = { ...baseListMembersResponse };
        message.users = [];
        if (object.users !== undefined && object.users !== null) {
            for (const e of object.users) {
                message.users.push(ListMembersResponse_OrganizationUser.fromJSON(e));
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
            obj.users = message.users.map((e) => e ? ListMembersResponse_OrganizationUser.toJSON(e) : undefined);
        }
        else {
            obj.users = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListMembersResponse };
        message.users = [];
        if (object.users !== undefined && object.users !== null) {
            for (const e of object.users) {
                message.users.push(ListMembersResponse_OrganizationUser.fromPartial(e));
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
const baseListMembersResponse_OrganizationUser = {};
export const ListMembersResponse_OrganizationUser = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subjectClaims !== undefined) {
            SubjectClaims.encode(message.subjectClaims, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListMembersResponse_OrganizationUser,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectClaims = SubjectClaims.decode(reader, reader.uint32());
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
            ...baseListMembersResponse_OrganizationUser,
        };
        if (object.subjectClaims !== undefined &&
            object.subjectClaims !== null) {
            message.subjectClaims = SubjectClaims.fromJSON(object.subjectClaims);
        }
        else {
            message.subjectClaims = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subjectClaims !== undefined &&
            (obj.subjectClaims = message.subjectClaims
                ? SubjectClaims.toJSON(message.subjectClaims)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListMembersResponse_OrganizationUser,
        };
        if (object.subjectClaims !== undefined &&
            object.subjectClaims !== null) {
            message.subjectClaims = SubjectClaims.fromPartial(object.subjectClaims);
        }
        else {
            message.subjectClaims = undefined;
        }
        return message;
    },
};
const baseDeleteMembershipRequest = {
    organizationId: '',
    subjectId: '',
};
export const DeleteMembershipRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== '') {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteMembershipRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.subjectId = reader.string();
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
            ...baseDeleteMembershipRequest,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = String(object.organizationId);
        }
        else {
            message.organizationId = '';
        }
        if (object.subjectId !== undefined && object.subjectId !== null) {
            message.subjectId = String(object.subjectId);
        }
        else {
            message.subjectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteMembershipRequest,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = object.organizationId;
        }
        else {
            message.organizationId = '';
        }
        if (object.subjectId !== undefined && object.subjectId !== null) {
            message.subjectId = object.subjectId;
        }
        else {
            message.subjectId = '';
        }
        return message;
    },
};
const baseDeleteMembershipMetadata = {
    organizationId: '',
    subjectId: '',
};
export const DeleteMembershipMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== '') {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteMembershipMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.subjectId = reader.string();
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
            ...baseDeleteMembershipMetadata,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = String(object.organizationId);
        }
        else {
            message.organizationId = '';
        }
        if (object.subjectId !== undefined && object.subjectId !== null) {
            message.subjectId = String(object.subjectId);
        }
        else {
            message.subjectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteMembershipMetadata,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = object.organizationId;
        }
        else {
            message.organizationId = '';
        }
        if (object.subjectId !== undefined && object.subjectId !== null) {
            message.subjectId = object.subjectId;
        }
        else {
            message.subjectId = '';
        }
        return message;
    },
};
const baseDeleteMembershipResponse = {
    organizationId: '',
    subjectId: '',
};
export const DeleteMembershipResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== '') {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteMembershipResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.subjectId = reader.string();
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
            ...baseDeleteMembershipResponse,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = String(object.organizationId);
        }
        else {
            message.organizationId = '';
        }
        if (object.subjectId !== undefined && object.subjectId !== null) {
            message.subjectId = String(object.subjectId);
        }
        else {
            message.subjectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.subjectId !== undefined && (obj.subjectId = message.subjectId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteMembershipResponse,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = object.organizationId;
        }
        else {
            message.organizationId = '';
        }
        if (object.subjectId !== undefined && object.subjectId !== null) {
            message.subjectId = object.subjectId;
        }
        else {
            message.subjectId = '';
        }
        return message;
    },
};
/** A set of methods for managing Organization users. */
export const UserServiceService = {
    /** List organization active members. */
    listMembers: {
        path: '/yandex.cloud.organizationmanager.v1.UserService/ListMembers',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListMembersRequest.encode(value).finish()),
        requestDeserialize: (value) => ListMembersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListMembersResponse.encode(value).finish()),
        responseDeserialize: (value) => ListMembersResponse.decode(value),
    },
    /** Delete user membership. */
    deleteMembership: {
        path: '/yandex.cloud.organizationmanager.v1.UserService/DeleteMembership',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteMembershipRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteMembershipRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const UserServiceClient = makeGenericClientConstructor(UserServiceService, 'yandex.cloud.organizationmanager.v1.UserService');
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
