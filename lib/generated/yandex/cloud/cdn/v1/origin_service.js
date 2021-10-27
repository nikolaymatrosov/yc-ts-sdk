"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginServiceClient = exports.OriginServiceService = exports.DeleteOriginMetadata = exports.DeleteOriginRequest = exports.UpdateOriginMetadata = exports.UpdateOriginRequest = exports.CreateOriginMetadata = exports.CreateOriginRequest = exports.ListOriginsResponse = exports.ListOriginsRequest = exports.GetOriginRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../google/protobuf/wrappers");
const typeRegistry_1 = require("../../../../typeRegistry");
const origin_1 = require("../../../../yandex/cloud/cdn/v1/origin");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.cdn.v1';
const baseGetOriginRequest = {
    $type: 'yandex.cloud.cdn.v1.GetOriginRequest',
    folderId: '',
    originId: 0,
};
exports.GetOriginRequest = {
    $type: 'yandex.cloud.cdn.v1.GetOriginRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originId !== 0) {
            writer.uint32(16).int64(message.originId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetOriginRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originId !== undefined && (obj.originId = message.originId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetOriginRequest.$type, exports.GetOriginRequest);
const baseListOriginsRequest = {
    $type: 'yandex.cloud.cdn.v1.ListOriginsRequest',
    folderId: '',
    originGroupId: 0,
};
exports.ListOriginsRequest = {
    $type: 'yandex.cloud.cdn.v1.ListOriginsRequest',
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
        const message = { ...baseListOriginsRequest };
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
        const message = { ...baseListOriginsRequest };
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
        const message = { ...baseListOriginsRequest };
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
typeRegistry_1.messageTypeRegistry.set(exports.ListOriginsRequest.$type, exports.ListOriginsRequest);
const baseListOriginsResponse = {
    $type: 'yandex.cloud.cdn.v1.ListOriginsResponse',
};
exports.ListOriginsResponse = {
    $type: 'yandex.cloud.cdn.v1.ListOriginsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.origins) {
            origin_1.Origin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListOriginsResponse };
        message.origins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.origins.push(origin_1.Origin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListOriginsResponse };
        message.origins = [];
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(origin_1.Origin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.origins) {
            obj.origins = message.origins.map((e) => e ? origin_1.Origin.toJSON(e) : undefined);
        }
        else {
            obj.origins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListOriginsResponse };
        message.origins = [];
        if (object.origins !== undefined && object.origins !== null) {
            for (const e of object.origins) {
                message.origins.push(origin_1.Origin.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOriginsResponse.$type, exports.ListOriginsResponse);
const baseCreateOriginRequest = {
    $type: 'yandex.cloud.cdn.v1.CreateOriginRequest',
    folderId: '',
    originGroupId: 0,
    source: '',
};
exports.CreateOriginRequest = {
    $type: 'yandex.cloud.cdn.v1.CreateOriginRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        if (message.source !== '') {
            writer.uint32(26).string(message.source);
        }
        if (message.enabled !== undefined) {
            wrappers_1.BoolValue.encode({ $type: 'google.protobuf.BoolValue', value: message.enabled }, writer.uint32(34).fork()).ldelim();
        }
        if (message.backup !== undefined) {
            wrappers_1.BoolValue.encode({ $type: 'google.protobuf.BoolValue', value: message.backup }, writer.uint32(42).fork()).ldelim();
        }
        if (message.meta !== undefined) {
            origin_1.OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateOriginRequest };
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
                    message.source = reader.string();
                    break;
                case 4:
                    message.enabled = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.backup = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.meta = origin_1.OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateOriginRequest };
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
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = undefined;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = Boolean(object.backup);
        }
        else {
            message.backup = undefined;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = origin_1.OriginMeta.fromJSON(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta
                ? origin_1.OriginMeta.toJSON(message.meta)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateOriginRequest };
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
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = undefined;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = object.backup;
        }
        else {
            message.backup = undefined;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = origin_1.OriginMeta.fromPartial(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateOriginRequest.$type, exports.CreateOriginRequest);
const baseCreateOriginMetadata = {
    $type: 'yandex.cloud.cdn.v1.CreateOriginMetadata',
    originId: 0,
    originGroupId: 0,
};
exports.CreateOriginMetadata = {
    $type: 'yandex.cloud.cdn.v1.CreateOriginMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originId !== 0) {
            writer.uint32(8).int64(message.originId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateOriginMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originId = longToNumber(reader.int64());
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
        const message = { ...baseCreateOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
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
        message.originId !== undefined && (obj.originId = message.originId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateOriginMetadata.$type, exports.CreateOriginMetadata);
const baseUpdateOriginRequest = {
    $type: 'yandex.cloud.cdn.v1.UpdateOriginRequest',
    folderId: '',
    originId: 0,
    source: '',
    enabled: false,
    backup: false,
};
exports.UpdateOriginRequest = {
    $type: 'yandex.cloud.cdn.v1.UpdateOriginRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originId !== 0) {
            writer.uint32(16).int64(message.originId);
        }
        if (message.source !== '') {
            writer.uint32(26).string(message.source);
        }
        if (message.enabled === true) {
            writer.uint32(32).bool(message.enabled);
        }
        if (message.backup === true) {
            writer.uint32(40).bool(message.backup);
        }
        if (message.meta !== undefined) {
            origin_1.OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOriginRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originId = longToNumber(reader.int64());
                    break;
                case 3:
                    message.source = reader.string();
                    break;
                case 4:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.backup = reader.bool();
                    break;
                case 6:
                    message.meta = origin_1.OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = Boolean(object.backup);
        }
        else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = origin_1.OriginMeta.fromJSON(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originId !== undefined && (obj.originId = message.originId);
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta
                ? origin_1.OriginMeta.toJSON(message.meta)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = object.backup;
        }
        else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = origin_1.OriginMeta.fromPartial(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOriginRequest.$type, exports.UpdateOriginRequest);
const baseUpdateOriginMetadata = {
    $type: 'yandex.cloud.cdn.v1.UpdateOriginMetadata',
    originId: 0,
    originGroupId: 0,
};
exports.UpdateOriginMetadata = {
    $type: 'yandex.cloud.cdn.v1.UpdateOriginMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originId !== 0) {
            writer.uint32(8).int64(message.originId);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateOriginMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originId = longToNumber(reader.int64());
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
        const message = { ...baseUpdateOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
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
        message.originId !== undefined && (obj.originId = message.originId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateOriginMetadata.$type, exports.UpdateOriginMetadata);
const baseDeleteOriginRequest = {
    $type: 'yandex.cloud.cdn.v1.DeleteOriginRequest',
    folderId: '',
    originId: 0,
};
exports.DeleteOriginRequest = {
    $type: 'yandex.cloud.cdn.v1.DeleteOriginRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.originId !== 0) {
            writer.uint32(16).int64(message.originId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteOriginRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.originId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.originId !== undefined && (obj.originId = message.originId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteOriginRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteOriginRequest.$type, exports.DeleteOriginRequest);
const baseDeleteOriginMetadata = {
    $type: 'yandex.cloud.cdn.v1.DeleteOriginMetadata',
    originId: 0,
};
exports.DeleteOriginMetadata = {
    $type: 'yandex.cloud.cdn.v1.DeleteOriginMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originId !== 0) {
            writer.uint32(8).int64(message.originId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteOriginMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = Number(object.originId);
        }
        else {
            message.originId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originId !== undefined && (obj.originId = message.originId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteOriginMetadata };
        if (object.originId !== undefined && object.originId !== null) {
            message.originId = object.originId;
        }
        else {
            message.originId = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteOriginMetadata.$type, exports.DeleteOriginMetadata);
/**
 * Origin management service.
 * Origin is not a standalone entity. It can live only within origin group.
 */
exports.OriginServiceService = {
    /** Get origin in origin group. */
    get: {
        path: '/yandex.cloud.cdn.v1.OriginService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(origin_1.Origin.encode(value).finish()),
        responseDeserialize: (value) => origin_1.Origin.decode(value),
    },
    /** Lists origins of origin group. */
    list: {
        path: '/yandex.cloud.cdn.v1.OriginService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListOriginsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListOriginsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListOriginsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListOriginsResponse.decode(value),
    },
    /** Creates origin inside origin group. */
    create: {
        path: '/yandex.cloud.cdn.v1.OriginService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates origin from origin group. */
    update: {
        path: '/yandex.cloud.cdn.v1.OriginService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes origin from origin group. */
    delete: {
        path: '/yandex.cloud.cdn.v1.OriginService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteOriginRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteOriginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.OriginServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.OriginServiceService, 'yandex.cloud.cdn.v1.OriginService');
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
