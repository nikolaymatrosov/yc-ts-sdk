"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceClient = exports.UserServiceService = exports.DeleteMembershipResponse = exports.DeleteMembershipMetadata = exports.DeleteMembershipRequest = exports.ListMembersResponse_OrganizationUser = exports.ListMembersResponse = exports.ListMembersRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const claims_1 = require("../../../../yandex/cloud/oauth/claims");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.organizationmanager.v1';
const baseListMembersRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.ListMembersRequest',
    organizationId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListMembersRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.ListMembersRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListMembersRequest.$type, exports.ListMembersRequest);
const baseListMembersResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.ListMembersResponse',
    nextPageToken: '',
};
exports.ListMembersResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.ListMembersResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.users) {
            exports.ListMembersResponse_OrganizationUser.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListMembersResponse };
        message.users = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(exports.ListMembersResponse_OrganizationUser.decode(reader, reader.uint32()));
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
                message.users.push(exports.ListMembersResponse_OrganizationUser.fromJSON(e));
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
            obj.users = message.users.map((e) => e ? exports.ListMembersResponse_OrganizationUser.toJSON(e) : undefined);
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
                message.users.push(exports.ListMembersResponse_OrganizationUser.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListMembersResponse.$type, exports.ListMembersResponse);
const baseListMembersResponse_OrganizationUser = {
    $type: 'yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser',
};
exports.ListMembersResponse_OrganizationUser = {
    $type: 'yandex.cloud.organizationmanager.v1.ListMembersResponse.OrganizationUser',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subjectClaims !== undefined) {
            claims_1.SubjectClaims.encode(message.subjectClaims, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListMembersResponse_OrganizationUser,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subjectClaims = claims_1.SubjectClaims.decode(reader, reader.uint32());
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
            message.subjectClaims = claims_1.SubjectClaims.fromJSON(object.subjectClaims);
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
                ? claims_1.SubjectClaims.toJSON(message.subjectClaims)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListMembersResponse_OrganizationUser,
        };
        if (object.subjectClaims !== undefined &&
            object.subjectClaims !== null) {
            message.subjectClaims = claims_1.SubjectClaims.fromPartial(object.subjectClaims);
        }
        else {
            message.subjectClaims = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListMembersResponse_OrganizationUser.$type, exports.ListMembersResponse_OrganizationUser);
const baseDeleteMembershipRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteMembershipRequest',
    organizationId: '',
    subjectId: '',
};
exports.DeleteMembershipRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteMembershipRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== '') {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteMembershipRequest.$type, exports.DeleteMembershipRequest);
const baseDeleteMembershipMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata',
    organizationId: '',
    subjectId: '',
};
exports.DeleteMembershipMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteMembershipMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== '') {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteMembershipMetadata.$type, exports.DeleteMembershipMetadata);
const baseDeleteMembershipResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteMembershipResponse',
    organizationId: '',
    subjectId: '',
};
exports.DeleteMembershipResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.DeleteMembershipResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.subjectId !== '') {
            writer.uint32(18).string(message.subjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteMembershipResponse.$type, exports.DeleteMembershipResponse);
/** A set of methods for managing Organization users. */
exports.UserServiceService = {
    /** List organization active members. */
    listMembers: {
        path: '/yandex.cloud.organizationmanager.v1.UserService/ListMembers',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListMembersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListMembersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListMembersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListMembersResponse.decode(value),
    },
    /** Delete user membership. */
    deleteMembership: {
        path: '/yandex.cloud.organizationmanager.v1.UserService/DeleteMembership',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteMembershipRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteMembershipRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.UserServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.UserServiceService, 'yandex.cloud.organizationmanager.v1.UserService');
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
