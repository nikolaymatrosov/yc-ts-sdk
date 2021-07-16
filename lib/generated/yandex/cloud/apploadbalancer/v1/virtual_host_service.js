/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { VirtualHost, Route, HeaderModification, HttpRoute, GrpcRoute, } from '../../../../yandex/cloud/apploadbalancer/v1/virtual_host';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';
const baseGetVirtualHostRequest = {
    httpRouterId: '',
    virtualHostName: '',
};
export const GetVirtualHostRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetVirtualHostRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
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
            ...baseGetVirtualHostRequest,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = String(object.virtualHostName);
        }
        else {
            message.virtualHostName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetVirtualHostRequest,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = object.virtualHostName;
        }
        else {
            message.virtualHostName = '';
        }
        return message;
    },
};
const baseListVirtualHostsRequest = {
    httpRouterId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListVirtualHostsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
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
        const message = {
            ...baseListVirtualHostsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
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
            ...baseListVirtualHostsRequest,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
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
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListVirtualHostsRequest,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
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
const baseListVirtualHostsResponse = { nextPageToken: '' };
export const ListVirtualHostsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.virtualHosts) {
            VirtualHost.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListVirtualHostsResponse,
        };
        message.virtualHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.virtualHosts.push(VirtualHost.decode(reader, reader.uint32()));
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
            ...baseListVirtualHostsResponse,
        };
        message.virtualHosts = [];
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromJSON(e));
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
        if (message.virtualHosts) {
            obj.virtualHosts = message.virtualHosts.map((e) => e ? VirtualHost.toJSON(e) : undefined);
        }
        else {
            obj.virtualHosts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListVirtualHostsResponse,
        };
        message.virtualHosts = [];
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromPartial(e));
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
const baseCreateVirtualHostRequest = {
    httpRouterId: '',
    name: '',
    authority: '',
};
export const CreateVirtualHostRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.authority) {
            writer.uint32(26).string(v);
        }
        for (const v of message.routes) {
            Route.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.modifyRequestHeaders) {
            HeaderModification.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            HeaderModification.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateVirtualHostRequest,
        };
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.authority.push(reader.string());
                    break;
                case 5:
                    message.routes.push(Route.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.modifyRequestHeaders.push(HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.modifyResponseHeaders.push(HeaderModification.decode(reader, reader.uint32()));
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
            ...baseCreateVirtualHostRequest,
        };
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.authority !== undefined && object.authority !== null) {
            for (const e of object.authority) {
                message.authority.push(String(e));
            }
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(Route.fromJSON(e));
            }
        }
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(HeaderModification.fromJSON(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(HeaderModification.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.name !== undefined && (obj.name = message.name);
        if (message.authority) {
            obj.authority = message.authority.map((e) => e);
        }
        else {
            obj.authority = [];
        }
        if (message.routes) {
            obj.routes = message.routes.map((e) => e ? Route.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => e ? HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => e ? HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyResponseHeaders = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateVirtualHostRequest,
        };
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.authority !== undefined && object.authority !== null) {
            for (const e of object.authority) {
                message.authority.push(e);
            }
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(Route.fromPartial(e));
            }
        }
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(HeaderModification.fromPartial(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(HeaderModification.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCreateVirtualHostMetadata = {
    httpRouterId: '',
    virtualHostName: '',
};
export const CreateVirtualHostMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateVirtualHostMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
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
            ...baseCreateVirtualHostMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = String(object.virtualHostName);
        }
        else {
            message.virtualHostName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateVirtualHostMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = object.virtualHostName;
        }
        else {
            message.virtualHostName = '';
        }
        return message;
    },
};
const baseUpdateVirtualHostRequest = {
    httpRouterId: '',
    virtualHostName: '',
    authority: '',
};
export const UpdateVirtualHostRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.authority) {
            writer.uint32(34).string(v);
        }
        for (const v of message.routes) {
            Route.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.modifyRequestHeaders) {
            HeaderModification.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            HeaderModification.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateVirtualHostRequest,
        };
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.authority.push(reader.string());
                    break;
                case 6:
                    message.routes.push(Route.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.modifyRequestHeaders.push(HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.modifyResponseHeaders.push(HeaderModification.decode(reader, reader.uint32()));
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
            ...baseUpdateVirtualHostRequest,
        };
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = String(object.virtualHostName);
        }
        else {
            message.virtualHostName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.authority !== undefined && object.authority !== null) {
            for (const e of object.authority) {
                message.authority.push(String(e));
            }
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(Route.fromJSON(e));
            }
        }
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(HeaderModification.fromJSON(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(HeaderModification.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        if (message.authority) {
            obj.authority = message.authority.map((e) => e);
        }
        else {
            obj.authority = [];
        }
        if (message.routes) {
            obj.routes = message.routes.map((e) => e ? Route.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => e ? HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => e ? HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyResponseHeaders = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateVirtualHostRequest,
        };
        message.authority = [];
        message.routes = [];
        message.modifyRequestHeaders = [];
        message.modifyResponseHeaders = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = object.virtualHostName;
        }
        else {
            message.virtualHostName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.authority !== undefined && object.authority !== null) {
            for (const e of object.authority) {
                message.authority.push(e);
            }
        }
        if (object.routes !== undefined && object.routes !== null) {
            for (const e of object.routes) {
                message.routes.push(Route.fromPartial(e));
            }
        }
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(HeaderModification.fromPartial(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(HeaderModification.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateVirtualHostMetadata = {
    httpRouterId: '',
    virtualHostName: '',
};
export const UpdateVirtualHostMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateVirtualHostMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
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
            ...baseUpdateVirtualHostMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = String(object.virtualHostName);
        }
        else {
            message.virtualHostName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateVirtualHostMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = object.virtualHostName;
        }
        else {
            message.virtualHostName = '';
        }
        return message;
    },
};
const baseDeleteVirtualHostRequest = {
    httpRouterId: '',
    virtualHostName: '',
};
export const DeleteVirtualHostRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteVirtualHostRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
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
            ...baseDeleteVirtualHostRequest,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = String(object.virtualHostName);
        }
        else {
            message.virtualHostName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteVirtualHostRequest,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = object.virtualHostName;
        }
        else {
            message.virtualHostName = '';
        }
        return message;
    },
};
const baseDeleteVirtualHostMetadata = {
    httpRouterId: '',
    virtualHostName: '',
};
export const DeleteVirtualHostMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteVirtualHostMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
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
            ...baseDeleteVirtualHostMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = String(object.virtualHostName);
        }
        else {
            message.virtualHostName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteVirtualHostMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = object.virtualHostName;
        }
        else {
            message.virtualHostName = '';
        }
        return message;
    },
};
const baseRemoveRouteRequest = {
    httpRouterId: '',
    virtualHostName: '',
    routeName: '',
};
export const RemoveRouteRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== '') {
            writer.uint32(26).string(message.routeName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveRouteRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRemoveRouteRequest };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = String(object.virtualHostName);
        }
        else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = String(object.routeName);
        }
        else {
            message.routeName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRemoveRouteRequest };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = object.virtualHostName;
        }
        else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = object.routeName;
        }
        else {
            message.routeName = '';
        }
        return message;
    },
};
const baseRemoveRouteMetadata = {
    httpRouterId: '',
    virtualHostName: '',
    routeName: '',
};
export const RemoveRouteMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== '') {
            writer.uint32(26).string(message.routeName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveRouteMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRemoveRouteMetadata };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = String(object.virtualHostName);
        }
        else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = String(object.routeName);
        }
        else {
            message.routeName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRemoveRouteMetadata };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = object.virtualHostName;
        }
        else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = object.routeName;
        }
        else {
            message.routeName = '';
        }
        return message;
    },
};
const baseUpdateRouteRequest = {
    httpRouterId: '',
    virtualHostName: '',
    routeName: '',
};
export const UpdateRouteRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== '') {
            writer.uint32(26).string(message.routeName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
        }
        if (message.http !== undefined) {
            HttpRoute.encode(message.http, writer.uint32(42).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            GrpcRoute.encode(message.grpc, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRouteRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                case 4:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.http = HttpRoute.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.grpc = GrpcRoute.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateRouteRequest };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = String(object.virtualHostName);
        }
        else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = String(object.routeName);
        }
        else {
            message.routeName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpRoute.fromJSON(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcRoute.fromJSON(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpRoute.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? GrpcRoute.toJSON(message.grpc)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateRouteRequest };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = object.virtualHostName;
        }
        else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = object.routeName;
        }
        else {
            message.routeName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpRoute.fromPartial(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcRoute.fromPartial(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        return message;
    },
};
const baseUpdateRouteMetadata = {
    httpRouterId: '',
    virtualHostName: '',
    routeName: '',
};
export const UpdateRouteMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.routeName !== '') {
            writer.uint32(26).string(message.routeName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateRouteMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.virtualHostName = reader.string();
                    break;
                case 3:
                    message.routeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateRouteMetadata };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = String(object.virtualHostName);
        }
        else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = String(object.routeName);
        }
        else {
            message.routeName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.virtualHostName !== undefined &&
            (obj.virtualHostName = message.virtualHostName);
        message.routeName !== undefined && (obj.routeName = message.routeName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateRouteMetadata };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        if (object.virtualHostName !== undefined &&
            object.virtualHostName !== null) {
            message.virtualHostName = object.virtualHostName;
        }
        else {
            message.virtualHostName = '';
        }
        if (object.routeName !== undefined && object.routeName !== null) {
            message.routeName = object.routeName;
        }
        else {
            message.routeName = '';
        }
        return message;
    },
};
/** A set of methods for managing virtual hosts of HTTP routers. */
export const VirtualHostServiceService = {
    /**
     * Returns the specified virtual host.
     *
     * To get the list of all virtual hosts of an HTTP router, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => GetVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(VirtualHost.encode(value).finish()),
        responseDeserialize: (value) => VirtualHost.decode(value),
    },
    /** Lists virtual hosts of the specified HTTP router. */
    list: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListVirtualHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListVirtualHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListVirtualHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListVirtualHostsResponse.decode(value),
    },
    /** Creates a virtual host in the specified HTTP router. */
    create: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified virtual host of the specified HTTP router. */
    update: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified virtual host. */
    delete: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified route from the specified virtual host. */
    removeRoute: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/RemoveRoute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(RemoveRouteRequest.encode(value).finish()),
        requestDeserialize: (value) => RemoveRouteRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified route of the specified virtual host. */
    updateRoute: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/UpdateRoute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateRouteRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateRouteRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const VirtualHostServiceClient = makeGenericClientConstructor(VirtualHostServiceService, 'yandex.cloud.apploadbalancer.v1.VirtualHostService');
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
