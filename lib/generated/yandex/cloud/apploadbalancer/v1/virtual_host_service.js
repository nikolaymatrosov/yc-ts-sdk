"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualHostServiceClient = exports.VirtualHostServiceService = exports.UpdateRouteMetadata = exports.UpdateRouteRequest = exports.RemoveRouteMetadata = exports.RemoveRouteRequest = exports.DeleteVirtualHostMetadata = exports.DeleteVirtualHostRequest = exports.UpdateVirtualHostMetadata = exports.UpdateVirtualHostRequest = exports.CreateVirtualHostMetadata = exports.CreateVirtualHostRequest = exports.ListVirtualHostsResponse = exports.ListVirtualHostsRequest = exports.GetVirtualHostRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const virtual_host_1 = require("../../../../yandex/cloud/apploadbalancer/v1/virtual_host");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.apploadbalancer.v1';
const baseGetVirtualHostRequest = {
    httpRouterId: '',
    virtualHostName: '',
};
exports.GetVirtualHostRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.ListVirtualHostsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.ListVirtualHostsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.virtualHosts) {
            virtual_host_1.VirtualHost.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListVirtualHostsResponse,
        };
        message.virtualHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.virtualHosts.push(virtual_host_1.VirtualHost.decode(reader, reader.uint32()));
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
                message.virtualHosts.push(virtual_host_1.VirtualHost.fromJSON(e));
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
            obj.virtualHosts = message.virtualHosts.map((e) => e ? virtual_host_1.VirtualHost.toJSON(e) : undefined);
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
                message.virtualHosts.push(virtual_host_1.VirtualHost.fromPartial(e));
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
exports.CreateVirtualHostRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            virtual_host_1.Route.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.modifyRequestHeaders) {
            virtual_host_1.HeaderModification.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            virtual_host_1.HeaderModification.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.routes.push(virtual_host_1.Route.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.modifyRequestHeaders.push(virtual_host_1.HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.modifyResponseHeaders.push(virtual_host_1.HeaderModification.decode(reader, reader.uint32()));
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
                message.routes.push(virtual_host_1.Route.fromJSON(e));
            }
        }
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(virtual_host_1.HeaderModification.fromJSON(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(virtual_host_1.HeaderModification.fromJSON(e));
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
            obj.routes = message.routes.map((e) => e ? virtual_host_1.Route.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => e ? virtual_host_1.HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => e ? virtual_host_1.HeaderModification.toJSON(e) : undefined);
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
                message.routes.push(virtual_host_1.Route.fromPartial(e));
            }
        }
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(virtual_host_1.HeaderModification.fromPartial(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(virtual_host_1.HeaderModification.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCreateVirtualHostMetadata = {
    httpRouterId: '',
    virtualHostName: '',
};
exports.CreateVirtualHostMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.UpdateVirtualHostRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.authority) {
            writer.uint32(34).string(v);
        }
        for (const v of message.routes) {
            virtual_host_1.Route.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.modifyRequestHeaders) {
            virtual_host_1.HeaderModification.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.modifyResponseHeaders) {
            virtual_host_1.HeaderModification.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.authority.push(reader.string());
                    break;
                case 6:
                    message.routes.push(virtual_host_1.Route.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.modifyRequestHeaders.push(virtual_host_1.HeaderModification.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.modifyResponseHeaders.push(virtual_host_1.HeaderModification.decode(reader, reader.uint32()));
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
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
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
                message.routes.push(virtual_host_1.Route.fromJSON(e));
            }
        }
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(virtual_host_1.HeaderModification.fromJSON(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(virtual_host_1.HeaderModification.fromJSON(e));
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
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        if (message.authority) {
            obj.authority = message.authority.map((e) => e);
        }
        else {
            obj.authority = [];
        }
        if (message.routes) {
            obj.routes = message.routes.map((e) => e ? virtual_host_1.Route.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        if (message.modifyRequestHeaders) {
            obj.modifyRequestHeaders = message.modifyRequestHeaders.map((e) => e ? virtual_host_1.HeaderModification.toJSON(e) : undefined);
        }
        else {
            obj.modifyRequestHeaders = [];
        }
        if (message.modifyResponseHeaders) {
            obj.modifyResponseHeaders = message.modifyResponseHeaders.map((e) => e ? virtual_host_1.HeaderModification.toJSON(e) : undefined);
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
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
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
                message.routes.push(virtual_host_1.Route.fromPartial(e));
            }
        }
        if (object.modifyRequestHeaders !== undefined &&
            object.modifyRequestHeaders !== null) {
            for (const e of object.modifyRequestHeaders) {
                message.modifyRequestHeaders.push(virtual_host_1.HeaderModification.fromPartial(e));
            }
        }
        if (object.modifyResponseHeaders !== undefined &&
            object.modifyResponseHeaders !== null) {
            for (const e of object.modifyResponseHeaders) {
                message.modifyResponseHeaders.push(virtual_host_1.HeaderModification.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateVirtualHostMetadata = {
    httpRouterId: '',
    virtualHostName: '',
};
exports.UpdateVirtualHostMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.DeleteVirtualHostRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.DeleteVirtualHostMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.virtualHostName !== '') {
            writer.uint32(18).string(message.virtualHostName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.RemoveRouteRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.RemoveRouteMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.UpdateRouteRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(34).fork()).ldelim();
        }
        if (message.http !== undefined) {
            virtual_host_1.HttpRoute.encode(message.http, writer.uint32(42).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            virtual_host_1.GrpcRoute.encode(message.grpc, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.http = virtual_host_1.HttpRoute.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.grpc = virtual_host_1.GrpcRoute.decode(reader, reader.uint32());
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
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = virtual_host_1.HttpRoute.fromJSON(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = virtual_host_1.GrpcRoute.fromJSON(object.grpc);
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
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.http !== undefined &&
            (obj.http = message.http
                ? virtual_host_1.HttpRoute.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? virtual_host_1.GrpcRoute.toJSON(message.grpc)
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
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = virtual_host_1.HttpRoute.fromPartial(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = virtual_host_1.GrpcRoute.fromPartial(object.grpc);
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
exports.UpdateRouteMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.VirtualHostServiceService = {
    /**
     * Returns the specified virtual host.
     *
     * To get the list of all virtual hosts of an HTTP router, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(virtual_host_1.VirtualHost.encode(value).finish()),
        responseDeserialize: (value) => virtual_host_1.VirtualHost.decode(value),
    },
    /** Lists virtual hosts of the specified HTTP router. */
    list: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListVirtualHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListVirtualHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListVirtualHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListVirtualHostsResponse.decode(value),
    },
    /** Creates a virtual host in the specified HTTP router. */
    create: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified virtual host of the specified HTTP router. */
    update: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified virtual host. */
    delete: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteVirtualHostRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteVirtualHostRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified route from the specified virtual host. */
    removeRoute: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/RemoveRoute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveRouteRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveRouteRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified route of the specified virtual host. */
    updateRoute: {
        path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/UpdateRoute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateRouteRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateRouteRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.VirtualHostServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.VirtualHostServiceService, 'yandex.cloud.apploadbalancer.v1.VirtualHostService');
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
