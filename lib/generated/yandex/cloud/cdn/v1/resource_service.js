"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceServiceClient = exports.ResourceServiceService = exports.GetProviderCNameResponse = exports.GetProviderCNameRequest = exports.DeleteResourceMetadata = exports.DeleteResourceRequest = exports.UpdateResourceMetadata = exports.UpdateResourceRequest = exports.CreateResourceMetadata = exports.ResourceOriginParams = exports.CreateResourceRequest_Origin = exports.CreateResourceRequest = exports.ListResourcesResponse = exports.ListResourcesRequest = exports.GetResourceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../google/protobuf/wrappers");
const origin_1 = require("../../../../yandex/cloud/cdn/v1/origin");
const resource_1 = require("../../../../yandex/cloud/cdn/v1/resource");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.cdn.v1';
const baseGetResourceRequest = { resourceId: '' };
exports.GetResourceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetResourceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetResourceRequest };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetResourceRequest };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
};
const baseListResourcesRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListResourcesRequest = {
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
        const message = { ...baseListResourcesRequest };
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
        const message = { ...baseListResourcesRequest };
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
        const message = { ...baseListResourcesRequest };
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
const baseListResourcesResponse = { nextPageToken: '' };
exports.ListResourcesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_1.Resource.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListResourcesResponse,
        };
        message.resources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(resource_1.Resource.decode(reader, reader.uint32()));
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
            ...baseListResourcesResponse,
        };
        message.resources = [];
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(resource_1.Resource.fromJSON(e));
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
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? resource_1.Resource.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListResourcesResponse,
        };
        message.resources = [];
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(resource_1.Resource.fromPartial(e));
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
const baseCreateResourceRequest = {
    folderId: '',
    cname: '',
    originProtocol: 0,
};
exports.CreateResourceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.cname !== '') {
            writer.uint32(18).string(message.cname);
        }
        if (message.origin !== undefined) {
            exports.CreateResourceRequest_Origin.encode(message.origin, writer.uint32(26).fork()).ldelim();
        }
        if (message.secondaryHostnames !== undefined) {
            resource_1.SecondaryHostnames.encode(message.secondaryHostnames, writer.uint32(34).fork()).ldelim();
        }
        if (message.originProtocol !== 0) {
            writer.uint32(40).int32(message.originProtocol);
        }
        if (message.active !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.active }, writer.uint32(50).fork()).ldelim();
        }
        if (message.options !== undefined) {
            resource_1.ResourceOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        if (message.sslCertificate !== undefined) {
            resource_1.SSLTargetCertificate.encode(message.sslCertificate, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateResourceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.cname = reader.string();
                    break;
                case 3:
                    message.origin = exports.CreateResourceRequest_Origin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.secondaryHostnames = resource_1.SecondaryHostnames.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.originProtocol = reader.int32();
                    break;
                case 6:
                    message.active = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.options = resource_1.ResourceOptions.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.sslCertificate = resource_1.SSLTargetCertificate.decode(reader, reader.uint32());
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
            ...baseCreateResourceRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = String(object.cname);
        }
        else {
            message.cname = '';
        }
        if (object.origin !== undefined && object.origin !== null) {
            message.origin = exports.CreateResourceRequest_Origin.fromJSON(object.origin);
        }
        else {
            message.origin = undefined;
        }
        if (object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null) {
            message.secondaryHostnames = resource_1.SecondaryHostnames.fromJSON(object.secondaryHostnames);
        }
        else {
            message.secondaryHostnames = undefined;
        }
        if (object.originProtocol !== undefined &&
            object.originProtocol !== null) {
            message.originProtocol = (0, resource_1.originProtocolFromJSON)(object.originProtocol);
        }
        else {
            message.originProtocol = 0;
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = Boolean(object.active);
        }
        else {
            message.active = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = resource_1.ResourceOptions.fromJSON(object.options);
        }
        else {
            message.options = undefined;
        }
        if (object.sslCertificate !== undefined &&
            object.sslCertificate !== null) {
            message.sslCertificate = resource_1.SSLTargetCertificate.fromJSON(object.sslCertificate);
        }
        else {
            message.sslCertificate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.cname !== undefined && (obj.cname = message.cname);
        message.origin !== undefined &&
            (obj.origin = message.origin
                ? exports.CreateResourceRequest_Origin.toJSON(message.origin)
                : undefined);
        message.secondaryHostnames !== undefined &&
            (obj.secondaryHostnames = message.secondaryHostnames
                ? resource_1.SecondaryHostnames.toJSON(message.secondaryHostnames)
                : undefined);
        message.originProtocol !== undefined &&
            (obj.originProtocol = (0, resource_1.originProtocolToJSON)(message.originProtocol));
        message.active !== undefined && (obj.active = message.active);
        message.options !== undefined &&
            (obj.options = message.options
                ? resource_1.ResourceOptions.toJSON(message.options)
                : undefined);
        message.sslCertificate !== undefined &&
            (obj.sslCertificate = message.sslCertificate
                ? resource_1.SSLTargetCertificate.toJSON(message.sslCertificate)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateResourceRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = object.cname;
        }
        else {
            message.cname = '';
        }
        if (object.origin !== undefined && object.origin !== null) {
            message.origin = exports.CreateResourceRequest_Origin.fromPartial(object.origin);
        }
        else {
            message.origin = undefined;
        }
        if (object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null) {
            message.secondaryHostnames = resource_1.SecondaryHostnames.fromPartial(object.secondaryHostnames);
        }
        else {
            message.secondaryHostnames = undefined;
        }
        if (object.originProtocol !== undefined &&
            object.originProtocol !== null) {
            message.originProtocol = object.originProtocol;
        }
        else {
            message.originProtocol = 0;
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = object.active;
        }
        else {
            message.active = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = resource_1.ResourceOptions.fromPartial(object.options);
        }
        else {
            message.options = undefined;
        }
        if (object.sslCertificate !== undefined &&
            object.sslCertificate !== null) {
            message.sslCertificate = resource_1.SSLTargetCertificate.fromPartial(object.sslCertificate);
        }
        else {
            message.sslCertificate = undefined;
        }
        return message;
    },
};
const baseCreateResourceRequest_Origin = {};
exports.CreateResourceRequest_Origin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.originGroupId !== undefined) {
            writer.uint32(8).int64(message.originGroupId);
        }
        if (message.originSource !== undefined) {
            writer.uint32(18).string(message.originSource);
        }
        if (message.originSourceParams !== undefined) {
            exports.ResourceOriginParams.encode(message.originSourceParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateResourceRequest_Origin,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originGroupId = longToNumber(reader.int64());
                    break;
                case 2:
                    message.originSource = reader.string();
                    break;
                case 3:
                    message.originSourceParams = exports.ResourceOriginParams.decode(reader, reader.uint32());
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
            ...baseCreateResourceRequest_Origin,
        };
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = undefined;
        }
        if (object.originSource !== undefined && object.originSource !== null) {
            message.originSource = String(object.originSource);
        }
        else {
            message.originSource = undefined;
        }
        if (object.originSourceParams !== undefined &&
            object.originSourceParams !== null) {
            message.originSourceParams = exports.ResourceOriginParams.fromJSON(object.originSourceParams);
        }
        else {
            message.originSourceParams = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.originSource !== undefined &&
            (obj.originSource = message.originSource);
        message.originSourceParams !== undefined &&
            (obj.originSourceParams = message.originSourceParams
                ? exports.ResourceOriginParams.toJSON(message.originSourceParams)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateResourceRequest_Origin,
        };
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = undefined;
        }
        if (object.originSource !== undefined && object.originSource !== null) {
            message.originSource = object.originSource;
        }
        else {
            message.originSource = undefined;
        }
        if (object.originSourceParams !== undefined &&
            object.originSourceParams !== null) {
            message.originSourceParams = exports.ResourceOriginParams.fromPartial(object.originSourceParams);
        }
        else {
            message.originSourceParams = undefined;
        }
        return message;
    },
};
const baseResourceOriginParams = { source: '' };
exports.ResourceOriginParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.source !== '') {
            writer.uint32(10).string(message.source);
        }
        if (message.meta !== undefined) {
            origin_1.OriginMeta.encode(message.meta, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOriginParams };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = reader.string();
                    break;
                case 2:
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
        const message = { ...baseResourceOriginParams };
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        }
        else {
            message.source = '';
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
        message.source !== undefined && (obj.source = message.source);
        message.meta !== undefined &&
            (obj.meta = message.meta
                ? origin_1.OriginMeta.toJSON(message.meta)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResourceOriginParams };
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        }
        else {
            message.source = '';
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
const baseCreateResourceMetadata = { resourceId: '' };
exports.CreateResourceMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateResourceMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
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
            ...baseCreateResourceMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateResourceMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
};
const baseUpdateResourceRequest = { resourceId: '', originProtocol: 0 };
exports.UpdateResourceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.originGroupId !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.originGroupId }, writer.uint32(18).fork()).ldelim();
        }
        if (message.secondaryHostnames !== undefined) {
            resource_1.SecondaryHostnames.encode(message.secondaryHostnames, writer.uint32(26).fork()).ldelim();
        }
        if (message.options !== undefined) {
            resource_1.ResourceOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.originProtocol !== 0) {
            writer.uint32(40).int32(message.originProtocol);
        }
        if (message.active !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.active }, writer.uint32(50).fork()).ldelim();
        }
        if (message.sslCertificate !== undefined) {
            resource_1.SSLTargetCertificate.encode(message.sslCertificate, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateResourceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.originGroupId = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.secondaryHostnames = resource_1.SecondaryHostnames.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.options = resource_1.ResourceOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.originProtocol = reader.int32();
                    break;
                case 6:
                    message.active = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.sslCertificate = resource_1.SSLTargetCertificate.decode(reader, reader.uint32());
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
            ...baseUpdateResourceRequest,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = Number(object.originGroupId);
        }
        else {
            message.originGroupId = undefined;
        }
        if (object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null) {
            message.secondaryHostnames = resource_1.SecondaryHostnames.fromJSON(object.secondaryHostnames);
        }
        else {
            message.secondaryHostnames = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = resource_1.ResourceOptions.fromJSON(object.options);
        }
        else {
            message.options = undefined;
        }
        if (object.originProtocol !== undefined &&
            object.originProtocol !== null) {
            message.originProtocol = (0, resource_1.originProtocolFromJSON)(object.originProtocol);
        }
        else {
            message.originProtocol = 0;
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = Boolean(object.active);
        }
        else {
            message.active = undefined;
        }
        if (object.sslCertificate !== undefined &&
            object.sslCertificate !== null) {
            message.sslCertificate = resource_1.SSLTargetCertificate.fromJSON(object.sslCertificate);
        }
        else {
            message.sslCertificate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.secondaryHostnames !== undefined &&
            (obj.secondaryHostnames = message.secondaryHostnames
                ? resource_1.SecondaryHostnames.toJSON(message.secondaryHostnames)
                : undefined);
        message.options !== undefined &&
            (obj.options = message.options
                ? resource_1.ResourceOptions.toJSON(message.options)
                : undefined);
        message.originProtocol !== undefined &&
            (obj.originProtocol = (0, resource_1.originProtocolToJSON)(message.originProtocol));
        message.active !== undefined && (obj.active = message.active);
        message.sslCertificate !== undefined &&
            (obj.sslCertificate = message.sslCertificate
                ? resource_1.SSLTargetCertificate.toJSON(message.sslCertificate)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateResourceRequest,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        if (object.originGroupId !== undefined &&
            object.originGroupId !== null) {
            message.originGroupId = object.originGroupId;
        }
        else {
            message.originGroupId = undefined;
        }
        if (object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null) {
            message.secondaryHostnames = resource_1.SecondaryHostnames.fromPartial(object.secondaryHostnames);
        }
        else {
            message.secondaryHostnames = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = resource_1.ResourceOptions.fromPartial(object.options);
        }
        else {
            message.options = undefined;
        }
        if (object.originProtocol !== undefined &&
            object.originProtocol !== null) {
            message.originProtocol = object.originProtocol;
        }
        else {
            message.originProtocol = 0;
        }
        if (object.active !== undefined && object.active !== null) {
            message.active = object.active;
        }
        else {
            message.active = undefined;
        }
        if (object.sslCertificate !== undefined &&
            object.sslCertificate !== null) {
            message.sslCertificate = resource_1.SSLTargetCertificate.fromPartial(object.sslCertificate);
        }
        else {
            message.sslCertificate = undefined;
        }
        return message;
    },
};
const baseUpdateResourceMetadata = { resourceId: '' };
exports.UpdateResourceMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateResourceMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
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
            ...baseUpdateResourceMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateResourceMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
};
const baseDeleteResourceRequest = { resourceId: '' };
exports.DeleteResourceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteResourceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
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
            ...baseDeleteResourceRequest,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteResourceRequest,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
};
const baseDeleteResourceMetadata = { resourceId: '' };
exports.DeleteResourceMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteResourceMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
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
            ...baseDeleteResourceMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = String(object.resourceId);
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourceId !== undefined &&
            (obj.resourceId = message.resourceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteResourceMetadata,
        };
        if (object.resourceId !== undefined && object.resourceId !== null) {
            message.resourceId = object.resourceId;
        }
        else {
            message.resourceId = '';
        }
        return message;
    },
};
const baseGetProviderCNameRequest = { folderId: '' };
exports.GetProviderCNameRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetProviderCNameRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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
            ...baseGetProviderCNameRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetProviderCNameRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        return message;
    },
};
const baseGetProviderCNameResponse = { cname: '', folderId: '' };
exports.GetProviderCNameResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cname !== '') {
            writer.uint32(10).string(message.cname);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetProviderCNameResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cname = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
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
            ...baseGetProviderCNameResponse,
        };
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = String(object.cname);
        }
        else {
            message.cname = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cname !== undefined && (obj.cname = message.cname);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetProviderCNameResponse,
        };
        if (object.cname !== undefined && object.cname !== null) {
            message.cname = object.cname;
        }
        else {
            message.cname = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        return message;
    },
};
/** Provider's resources management service. */
exports.ResourceServiceService = {
    /** Get client's CDN resource by resource id. */
    get: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(resource_1.Resource.encode(value).finish()),
        responseDeserialize: (value) => resource_1.Resource.decode(value),
    },
    /** Lists CDN resources. */
    list: {
        path: '/yandex.cloud.cdn.v1.ResourceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListResourcesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListResourcesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListResourcesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListResourcesResponse.decode(value),
    },
    /** Creates client's CDN resource. */
    create: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates of client's CDN resource. (PATCH behavior) */
    update: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes client's CDN resource. */
    delete: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Get Provider's CNAME (edge endpoint) binded to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    getProviderCName: {
        path: '/yandex.cloud.cdn.v1.ResourceService/GetProviderCName',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetProviderCNameRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetProviderCNameRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetProviderCNameResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetProviderCNameResponse.decode(value),
    },
};
exports.ResourceServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ResourceServiceService, 'yandex.cloud.cdn.v1.ResourceService');
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
