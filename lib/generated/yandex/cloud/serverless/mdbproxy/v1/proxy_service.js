"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyServiceClient = exports.ProxyServiceService = exports.ListProxyOperationsResponse = exports.ListProxyOperationsRequest = exports.DeleteProxyMetadata = exports.DeleteProxyRequest = exports.UpdateProxyMetadata = exports.UpdateProxyRequest_LabelsEntry = exports.UpdateProxyRequest = exports.CreateProxyMetadata = exports.CreateProxyRequest_LabelsEntry = exports.CreateProxyRequest = exports.ListProxyResponse = exports.ListProxyRequest = exports.GetProxyRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../../typeRegistry");
const access_1 = require("../../../../../yandex/cloud/access/access");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const proxy_1 = require("../../../../../yandex/cloud/serverless/mdbproxy/v1/proxy");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.serverless.mdbproxy.v1';
const baseGetProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.GetProxyRequest',
    proxyId: '',
};
exports.GetProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.GetProxyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetProxyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetProxyRequest };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetProxyRequest };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetProxyRequest.$type, exports.GetProxyRequest);
const baseListProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyRequest',
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
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListProxyRequest };
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
                case 4:
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
        const message = { ...baseListProxyRequest };
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListProxyRequest };
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListProxyRequest.$type, exports.ListProxyRequest);
const baseListProxyResponse = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyResponse',
    nextPageToken: '',
};
exports.ListProxyResponse = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.proxies) {
            proxy_1.Proxy.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListProxyResponse };
        message.proxies = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxies.push(proxy_1.Proxy.decode(reader, reader.uint32()));
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
        const message = { ...baseListProxyResponse };
        message.proxies = [];
        if (object.proxies !== undefined && object.proxies !== null) {
            for (const e of object.proxies) {
                message.proxies.push(proxy_1.Proxy.fromJSON(e));
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
        if (message.proxies) {
            obj.proxies = message.proxies.map((e) => e ? proxy_1.Proxy.toJSON(e) : undefined);
        }
        else {
            obj.proxies = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListProxyResponse };
        message.proxies = [];
        if (object.proxies !== undefined && object.proxies !== null) {
            for (const e of object.proxies) {
                message.proxies.push(proxy_1.Proxy.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListProxyResponse.$type, exports.ListProxyResponse);
const baseCreateProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest',
    folderId: '',
    name: '',
    description: '',
};
exports.CreateProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateProxyRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.target !== undefined) {
            proxy_1.Target.encode(message.target, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProxyRequest };
        message.labels = {};
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
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateProxyRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.target = proxy_1.Target.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateProxyRequest };
        message.labels = {};
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
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = proxy_1.Target.fromJSON(object.target);
        }
        else {
            message.target = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.target !== undefined &&
            (obj.target = message.target
                ? proxy_1.Target.toJSON(message.target)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateProxyRequest };
        message.labels = {};
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
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = proxy_1.Target.fromPartial(object.target);
        }
        else {
            message.target = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateProxyRequest.$type, exports.CreateProxyRequest);
const baseCreateProxyRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateProxyRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest.LabelsEntry',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateProxyRequest_LabelsEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            ...baseCreateProxyRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateProxyRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateProxyRequest_LabelsEntry.$type, exports.CreateProxyRequest_LabelsEntry);
const baseCreateProxyMetadata = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyMetadata',
    proxyId: '',
};
exports.CreateProxyMetadata = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.CreateProxyMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProxyMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateProxyMetadata.$type, exports.CreateProxyMetadata);
const baseUpdateProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest',
    proxyId: '',
    name: '',
    description: '',
};
exports.UpdateProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateProxyRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.target !== undefined) {
            proxy_1.Target.encode(message.target, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateProxyRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateProxyRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.target = proxy_1.Target.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateProxyRequest };
        message.labels = {};
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = proxy_1.Target.fromJSON(object.target);
        }
        else {
            message.target = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.target !== undefined &&
            (obj.target = message.target
                ? proxy_1.Target.toJSON(message.target)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateProxyRequest };
        message.labels = {};
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = proxy_1.Target.fromPartial(object.target);
        }
        else {
            message.target = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateProxyRequest.$type, exports.UpdateProxyRequest);
const baseUpdateProxyRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateProxyRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest.LabelsEntry',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateProxyRequest_LabelsEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            ...baseUpdateProxyRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateProxyRequest_LabelsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateProxyRequest_LabelsEntry.$type, exports.UpdateProxyRequest_LabelsEntry);
const baseUpdateProxyMetadata = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyMetadata',
    proxyId: '',
};
exports.UpdateProxyMetadata = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.UpdateProxyMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateProxyMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateProxyMetadata.$type, exports.UpdateProxyMetadata);
const baseDeleteProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.DeleteProxyRequest',
    proxyId: '',
};
exports.DeleteProxyRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.DeleteProxyRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteProxyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteProxyRequest };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteProxyRequest };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteProxyRequest.$type, exports.DeleteProxyRequest);
const baseDeleteProxyMetadata = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.DeleteProxyMetadata',
    proxyId: '',
};
exports.DeleteProxyMetadata = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.DeleteProxyMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteProxyMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteProxyMetadata.$type, exports.DeleteProxyMetadata);
const baseListProxyOperationsRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsRequest',
    proxyId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListProxyOperationsRequest = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListProxyOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
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
        const message = {
            ...baseListProxyOperationsRequest,
        };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
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
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListProxyOperationsRequest,
        };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListProxyOperationsRequest.$type, exports.ListProxyOperationsRequest);
const baseListProxyOperationsResponse = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsResponse',
    nextPageToken: '',
};
exports.ListProxyOperationsResponse = {
    $type: 'yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListProxyOperationsResponse,
        };
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
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
            ...baseListProxyOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromJSON(e));
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
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListProxyOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListProxyOperationsResponse.$type, exports.ListProxyOperationsResponse);
/** A set of methods for managing serverless MDB proxy. */
exports.ProxyServiceService = {
    /**
     * Returns the specified proxy.
     *
     * To get the list of all available proxies, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetProxyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetProxyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(proxy_1.Proxy.encode(value).finish()),
        responseDeserialize: (value) => proxy_1.Proxy.decode(value),
    },
    /** Retrieves the list of proxies in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListProxyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListProxyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListProxyResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListProxyResponse.decode(value),
    },
    /** Creates a proxy in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateProxyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateProxyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified proxy. */
    update: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateProxyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateProxyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified proxy. */
    delete: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteProxyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteProxyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified proxy. */
    listOperations: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListProxyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListProxyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListProxyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListProxyOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified proxy. */
    listAccessBindings: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the proxy. */
    setAccessBindings: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified proxy. */
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ProxyServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ProxyServiceService, 'yandex.cloud.serverless.mdbproxy.v1.ProxyService');
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
