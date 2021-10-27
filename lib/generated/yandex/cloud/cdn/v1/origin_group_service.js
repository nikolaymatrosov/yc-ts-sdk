"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginGroupServiceClient = exports.OriginGroupServiceService = exports.DeleteOriginGroupMetadata = exports.DeleteOriginGroupRequest = exports.UpdateOriginGroupMetadata = exports.UpdateOriginGroupRequest = exports.CreateOriginGroupMetadata = exports.CreateOriginGroupRequest = exports.ListOriginGroupsResponse = exports.ListOriginGroupsRequest = exports.GetOriginGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../google/protobuf/wrappers");
const typeRegistry_1 = require("../../../../typeRegistry");
const origin_1 = require("../../../../yandex/cloud/cdn/v1/origin");
const origin_group_1 = require("../../../../yandex/cloud/cdn/v1/origin_group");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.cdn.v1';
const baseGetOriginGroupRequest = {
    $type: 'yandex.cloud.cdn.v1.GetOriginGroupRequest',
    folderId: '',
    originGroupId: 0,
};
exports.GetOriginGroupRequest = {
    $type: 'yandex.cloud.cdn.v1.GetOriginGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetOriginGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
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
            ...baseGetOriginGroupRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetOriginGroupRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetOriginGroupRequest.$type, exports.GetOriginGroupRequest);
const baseListOriginGroupsRequest = {
    $type: 'yandex.cloud.cdn.v1.ListOriginGroupsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListOriginGroupsRequest = {
    $type: 'yandex.cloud.cdn.v1.ListOriginGroupsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
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
        const message = {
            ...baseListOriginGroupsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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
        const message = {
            ...baseListOriginGroupsRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListOriginGroupsRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListOriginGroupsRequest.$type, exports.ListOriginGroupsRequest);
const baseListOriginGroupsResponse = {
    $type: 'yandex.cloud.cdn.v1.ListOriginGroupsResponse',
    nextPageToken: '',
};
exports.ListOriginGroupsResponse = {
    $type: 'yandex.cloud.cdn.v1.ListOriginGroupsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.originGroups) {
            origin_group_1.OriginGroup.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOriginGroupsResponse,
        };
        message.originGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroups.push(origin_group_1.OriginGroup.decode(reader, reader.uint32()));
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
        const message = {
            ...baseListOriginGroupsResponse,
        };
        message.originGroups = [];
        if (object.originGroups !== undefined && object.originGroups !== null) {
            for (const e of object.originGroups) {
                message.originGroups.push(origin_group_1.OriginGroup.fromJSON(e));
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
        if (message.originGroups) {
            obj.originGroups = message.originGroups.map((e) => e ? origin_group_1.OriginGroup.toJSON(e) : undefined);
        }
        else {
            obj.originGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListOriginGroupsResponse,
        };
        message.originGroups = [];
        if (object.originGroups !== undefined && object.originGroups !== null) {
            for (const e of object.originGroups) {
                message.originGroups.push(origin_group_1.OriginGroup.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListOriginGroupsResponse.$type, exports.ListOriginGroupsResponse);
const baseCreateOriginGroupRequest = {
    $type: 'yandex.cloud.cdn.v1.CreateOriginGroupRequest',
    folderId: '',
    name: '',
};
exports.CreateOriginGroupRequest = {
    $type: 'yandex.cloud.cdn.v1.CreateOriginGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.useNext !== undefined) {
            wrappers_1.BoolValue.encode({ $type: 'google.protobuf.BoolValue', value: message.useNext }, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.origins) {
            origin_1.OriginParams.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateOriginGroupRequest,
        };
        message.origins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.useNext = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.origins.push(origin_1.OriginParams.decode(reader, reader.uint32()));
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
            ...baseCreateOriginGroupRequest,
        };
        message.origins = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.useNext !== undefined && object.useNext !== null) {
            message.useNext = Boolean(object.useNext);
        }
        else {
            message.useNext = undefined;
        }
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(origin_1.OriginParams.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.useNext !== undefined && (obj.useNext = message.useNext);
        if (message.origins) {
            obj.origins = message.origins.map((e) => e ? origin_1.OriginParams.toJSON(e) : undefined);
        }
        else {
            obj.origins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateOriginGroupRequest,
        };
        message.origins = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.useNext !== undefined && object.useNext !== null) {
            message.useNext = object.useNext;
        }
        else {
            message.useNext = undefined;
        }
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(origin_1.OriginParams.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateOriginGroupRequest.$type, exports.CreateOriginGroupRequest);
const baseCreateOriginGroupMetadata = {
    $type: 'yandex.cloud.cdn.v1.CreateOriginGroupMetadata',
    originGroupId: 0,
};
exports.CreateOriginGroupMetadata = {
    $type: 'yandex.cloud.cdn.v1.CreateOriginGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originGroupId !== 0) {
            writer.uint32(8).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateOriginGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroupId = longToNumber(reader.int64());
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
            ...baseCreateOriginGroupMetadata,
        };
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateOriginGroupMetadata,
        };
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateOriginGroupMetadata.$type, exports.CreateOriginGroupMetadata);
const baseUpdateOriginGroupRequest = {
    $type: 'yandex.cloud.cdn.v1.UpdateOriginGroupRequest',
    folderId: '',
    originGroupId: 0,
};
exports.UpdateOriginGroupRequest = {
    $type: 'yandex.cloud.cdn.v1.UpdateOriginGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        if (message.groupName !== undefined) {
            wrappers_1.StringValue.encode({
                $type: 'google.protobuf.StringValue',
                value: message.groupName,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.useNext !== undefined) {
            wrappers_1.BoolValue.encode({ $type: 'google.protobuf.BoolValue', value: message.useNext }, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.origins) {
            origin_1.OriginParams.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOriginGroupRequest,
        };
        message.origins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                case 3:
                    message.groupName = wrappers_1.StringValue.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.useNext = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.origins.push(origin_1.OriginParams.decode(reader, reader.uint32()));
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
            ...baseUpdateOriginGroupRequest,
        };
        message.origins = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        if (object.groupName !== undefined && object.groupName !== null) {
            message.groupName = String(object.groupName);
        }
        else {
            message.groupName = undefined;
        }
        if (object.useNext !== undefined && object.useNext !== null) {
            message.useNext = Boolean(object.useNext);
        }
        else {
            message.useNext = undefined;
        }
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(origin_1.OriginParams.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.groupName !== undefined && (obj.groupName = message.groupName);
        message.useNext !== undefined && (obj.useNext = message.useNext);
        if (message.origins) {
            obj.origins = message.origins.map((e) => e ? origin_1.OriginParams.toJSON(e) : undefined);
        }
        else {
            obj.origins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateOriginGroupRequest,
        };
        message.origins = [];
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        if (object.groupName !== undefined && object.groupName !== null) {
            message.groupName = object.groupName;
        }
        else {
            message.groupName = undefined;
        }
        if (object.useNext !== undefined && object.useNext !== null) {
            message.useNext = object.useNext;
        }
        else {
            message.useNext = undefined;
        }
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(origin_1.OriginParams.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOriginGroupRequest.$type, exports.UpdateOriginGroupRequest);
const baseUpdateOriginGroupMetadata = {
    $type: 'yandex.cloud.cdn.v1.UpdateOriginGroupMetadata',
    originGroupId: 0,
};
exports.UpdateOriginGroupMetadata = {
    $type: 'yandex.cloud.cdn.v1.UpdateOriginGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originGroupId !== 0) {
            writer.uint32(8).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOriginGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroupId = longToNumber(reader.int64());
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
            ...baseUpdateOriginGroupMetadata,
        };
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateOriginGroupMetadata,
        };
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOriginGroupMetadata.$type, exports.UpdateOriginGroupMetadata);
const baseDeleteOriginGroupRequest = {
    $type: 'yandex.cloud.cdn.v1.DeleteOriginGroupRequest',
    folderId: '',
    originGroupId: 0,
};
exports.DeleteOriginGroupRequest = {
    $type: 'yandex.cloud.cdn.v1.DeleteOriginGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteOriginGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originGroupId = longToNumber(reader.int64());
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
            ...baseDeleteOriginGroupRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteOriginGroupRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteOriginGroupRequest.$type, exports.DeleteOriginGroupRequest);
const baseDeleteOriginGroupMetadata = {
    $type: 'yandex.cloud.cdn.v1.DeleteOriginGroupMetadata',
    originGroupId: 0,
};
exports.DeleteOriginGroupMetadata = {
    $type: 'yandex.cloud.cdn.v1.DeleteOriginGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originGroupId !== 0) {
            writer.uint32(8).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteOriginGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroupId = longToNumber(reader.int64());
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
            ...baseDeleteOriginGroupMetadata,
        };
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteOriginGroupMetadata,
        };
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteOriginGroupMetadata.$type, exports.DeleteOriginGroupMetadata);
/** Origin Groups management service. */
exports.OriginGroupServiceService = {
    /** Gets origin group with specified origin group id. */
    get: {
        path: '/yandex.cloud.cdn.v1.OriginGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(origin_group_1.OriginGroup.encode(value).finish()),
        responseDeserialize: (value) => origin_group_1.OriginGroup.decode(value),
    },
    /** Lists origins of origin group. */
    list: {
        path: '/yandex.cloud.cdn.v1.OriginGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListOriginGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListOriginGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListOriginGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListOriginGroupsResponse.decode(value),
    },
    /** Creates origin group. */
    create: {
        path: '/yandex.cloud.cdn.v1.OriginGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates origin group. */
    update: {
        path: '/yandex.cloud.cdn.v1.OriginGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes origin group with specified origin group id. */
    delete: {
        path: '/yandex.cloud.cdn.v1.OriginGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteOriginGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteOriginGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.OriginGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.OriginGroupServiceService, 'yandex.cloud.cdn.v1.OriginGroupService');
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
