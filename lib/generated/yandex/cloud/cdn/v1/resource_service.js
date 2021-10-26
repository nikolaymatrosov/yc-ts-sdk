/* eslint-disable */
import { BoolValue, Int64Value } from '../../../../google/protobuf/wrappers';
import { OriginMeta } from '../../../../yandex/cloud/cdn/v1/origin';
import { Resource, SecondaryHostnames, ResourceOptions, SSLTargetCertificate, originProtocolFromJSON, originProtocolToJSON, } from '../../../../yandex/cloud/cdn/v1/resource';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.cdn.v1';
const baseGetResourceRequest = { resourceId: '' };
export const GetResourceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListResourcesRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListResourcesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.resources) {
            Resource.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListResourcesResponse,
        };
        message.resources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(Resource.decode(reader, reader.uint32()));
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
                message.resources.push(Resource.fromJSON(e));
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
            obj.resources = message.resources.map((e) => e ? Resource.toJSON(e) : undefined);
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
                message.resources.push(Resource.fromPartial(e));
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
export const CreateResourceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.cname !== '') {
            writer.uint32(18).string(message.cname);
        }
        if (message.origin !== undefined) {
            CreateResourceRequest_Origin.encode(message.origin, writer.uint32(26).fork()).ldelim();
        }
        if (message.secondaryHostnames !== undefined) {
            SecondaryHostnames.encode(message.secondaryHostnames, writer.uint32(34).fork()).ldelim();
        }
        if (message.originProtocol !== 0) {
            writer.uint32(40).int32(message.originProtocol);
        }
        if (message.active !== undefined) {
            BoolValue.encode({ value: message.active }, writer.uint32(50).fork()).ldelim();
        }
        if (message.options !== undefined) {
            ResourceOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        if (message.sslCertificate !== undefined) {
            SSLTargetCertificate.encode(message.sslCertificate, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.origin = CreateResourceRequest_Origin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.secondaryHostnames = SecondaryHostnames.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.originProtocol = reader.int32();
                    break;
                case 6:
                    message.active = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.options = ResourceOptions.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.sslCertificate = SSLTargetCertificate.decode(reader, reader.uint32());
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
            message.origin = CreateResourceRequest_Origin.fromJSON(object.origin);
        }
        else {
            message.origin = undefined;
        }
        if (object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null) {
            message.secondaryHostnames = SecondaryHostnames.fromJSON(object.secondaryHostnames);
        }
        else {
            message.secondaryHostnames = undefined;
        }
        if (object.originProtocol !== undefined &&
            object.originProtocol !== null) {
            message.originProtocol = originProtocolFromJSON(object.originProtocol);
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
            message.options = ResourceOptions.fromJSON(object.options);
        }
        else {
            message.options = undefined;
        }
        if (object.sslCertificate !== undefined &&
            object.sslCertificate !== null) {
            message.sslCertificate = SSLTargetCertificate.fromJSON(object.sslCertificate);
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
                ? CreateResourceRequest_Origin.toJSON(message.origin)
                : undefined);
        message.secondaryHostnames !== undefined &&
            (obj.secondaryHostnames = message.secondaryHostnames
                ? SecondaryHostnames.toJSON(message.secondaryHostnames)
                : undefined);
        message.originProtocol !== undefined &&
            (obj.originProtocol = originProtocolToJSON(message.originProtocol));
        message.active !== undefined && (obj.active = message.active);
        message.options !== undefined &&
            (obj.options = message.options
                ? ResourceOptions.toJSON(message.options)
                : undefined);
        message.sslCertificate !== undefined &&
            (obj.sslCertificate = message.sslCertificate
                ? SSLTargetCertificate.toJSON(message.sslCertificate)
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
            message.origin = CreateResourceRequest_Origin.fromPartial(object.origin);
        }
        else {
            message.origin = undefined;
        }
        if (object.secondaryHostnames !== undefined &&
            object.secondaryHostnames !== null) {
            message.secondaryHostnames = SecondaryHostnames.fromPartial(object.secondaryHostnames);
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
            message.options = ResourceOptions.fromPartial(object.options);
        }
        else {
            message.options = undefined;
        }
        if (object.sslCertificate !== undefined &&
            object.sslCertificate !== null) {
            message.sslCertificate = SSLTargetCertificate.fromPartial(object.sslCertificate);
        }
        else {
            message.sslCertificate = undefined;
        }
        return message;
    },
};
const baseCreateResourceRequest_Origin = {};
export const CreateResourceRequest_Origin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.originGroupId !== undefined) {
            writer.uint32(8).int64(message.originGroupId);
        }
        if (message.originSource !== undefined) {
            writer.uint32(18).string(message.originSource);
        }
        if (message.originSourceParams !== undefined) {
            ResourceOriginParams.encode(message.originSourceParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.originSourceParams = ResourceOriginParams.decode(reader, reader.uint32());
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
            message.originSourceParams = ResourceOriginParams.fromJSON(object.originSourceParams);
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
                ? ResourceOriginParams.toJSON(message.originSourceParams)
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
            message.originSourceParams = ResourceOriginParams.fromPartial(object.originSourceParams);
        }
        else {
            message.originSourceParams = undefined;
        }
        return message;
    },
};
const baseResourceOriginParams = { source: '' };
export const ResourceOriginParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.source !== '') {
            writer.uint32(10).string(message.source);
        }
        if (message.meta !== undefined) {
            OriginMeta.encode(message.meta, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceOriginParams };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = reader.string();
                    break;
                case 2:
                    message.meta = OriginMeta.decode(reader, reader.uint32());
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
            message.meta = OriginMeta.fromJSON(object.meta);
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
                ? OriginMeta.toJSON(message.meta)
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
            message.meta = OriginMeta.fromPartial(object.meta);
        }
        else {
            message.meta = undefined;
        }
        return message;
    },
};
const baseCreateResourceMetadata = { resourceId: '' };
export const CreateResourceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const UpdateResourceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.originGroupId !== undefined) {
            Int64Value.encode({ value: message.originGroupId }, writer.uint32(18).fork()).ldelim();
        }
        if (message.secondaryHostnames !== undefined) {
            SecondaryHostnames.encode(message.secondaryHostnames, writer.uint32(26).fork()).ldelim();
        }
        if (message.options !== undefined) {
            ResourceOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.originProtocol !== 0) {
            writer.uint32(40).int32(message.originProtocol);
        }
        if (message.active !== undefined) {
            BoolValue.encode({ value: message.active }, writer.uint32(50).fork()).ldelim();
        }
        if (message.sslCertificate !== undefined) {
            SSLTargetCertificate.encode(message.sslCertificate, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.originGroupId = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.secondaryHostnames = SecondaryHostnames.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.options = ResourceOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.originProtocol = reader.int32();
                    break;
                case 6:
                    message.active = BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.sslCertificate = SSLTargetCertificate.decode(reader, reader.uint32());
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
            message.secondaryHostnames = SecondaryHostnames.fromJSON(object.secondaryHostnames);
        }
        else {
            message.secondaryHostnames = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = ResourceOptions.fromJSON(object.options);
        }
        else {
            message.options = undefined;
        }
        if (object.originProtocol !== undefined &&
            object.originProtocol !== null) {
            message.originProtocol = originProtocolFromJSON(object.originProtocol);
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
            message.sslCertificate = SSLTargetCertificate.fromJSON(object.sslCertificate);
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
                ? SecondaryHostnames.toJSON(message.secondaryHostnames)
                : undefined);
        message.options !== undefined &&
            (obj.options = message.options
                ? ResourceOptions.toJSON(message.options)
                : undefined);
        message.originProtocol !== undefined &&
            (obj.originProtocol = originProtocolToJSON(message.originProtocol));
        message.active !== undefined && (obj.active = message.active);
        message.sslCertificate !== undefined &&
            (obj.sslCertificate = message.sslCertificate
                ? SSLTargetCertificate.toJSON(message.sslCertificate)
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
            message.secondaryHostnames = SecondaryHostnames.fromPartial(object.secondaryHostnames);
        }
        else {
            message.secondaryHostnames = undefined;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = ResourceOptions.fromPartial(object.options);
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
            message.sslCertificate = SSLTargetCertificate.fromPartial(object.sslCertificate);
        }
        else {
            message.sslCertificate = undefined;
        }
        return message;
    },
};
const baseUpdateResourceMetadata = { resourceId: '' };
export const UpdateResourceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const DeleteResourceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const DeleteResourceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== '') {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const GetProviderCNameRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const GetProviderCNameResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cname !== '') {
            writer.uint32(10).string(message.cname);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ResourceServiceService = {
    /** Get client's CDN resource by resource id. */
    get: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => GetResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Resource.encode(value).finish()),
        responseDeserialize: (value) => Resource.decode(value),
    },
    /** Lists CDN resources. */
    list: {
        path: '/yandex.cloud.cdn.v1.ResourceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListResourcesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListResourcesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListResourcesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListResourcesResponse.decode(value),
    },
    /** Creates client's CDN resource. */
    create: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates of client's CDN resource. (PATCH behavior) */
    update: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes client's CDN resource. */
    delete: {
        path: '/yandex.cloud.cdn.v1.ResourceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteResourceRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteResourceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Get Provider's CNAME (edge endpoint) binded to specified folder id.
     * Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
     */
    getProviderCName: {
        path: '/yandex.cloud.cdn.v1.ResourceService/GetProviderCName',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetProviderCNameRequest.encode(value).finish()),
        requestDeserialize: (value) => GetProviderCNameRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetProviderCNameResponse.encode(value).finish()),
        responseDeserialize: (value) => GetProviderCNameResponse.decode(value),
    },
};
export const ResourceServiceClient = makeGenericClientConstructor(ResourceServiceService, 'yandex.cloud.cdn.v1.ResourceService');
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
