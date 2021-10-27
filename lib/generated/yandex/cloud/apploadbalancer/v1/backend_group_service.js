"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendGroupServiceClient = exports.BackendGroupServiceService = exports.ListBackendGroupOperationsResponse = exports.ListBackendGroupOperationsRequest = exports.RemoveBackendMetadata = exports.RemoveBackendRequest = exports.UpdateBackendMetadata = exports.UpdateBackendRequest = exports.AddBackendMetadata = exports.AddBackendRequest = exports.CreateBackendGroupMetadata = exports.CreateBackendGroupRequest_LabelsEntry = exports.CreateBackendGroupRequest = exports.UpdateBackendGroupMetadata = exports.UpdateBackendGroupRequest_LabelsEntry = exports.UpdateBackendGroupRequest = exports.DeleteBackendGroupMetadata = exports.DeleteBackendGroupRequest = exports.ListBackendGroupsResponse = exports.ListBackendGroupsRequest = exports.GetBackendGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../typeRegistry");
const backend_group_1 = require("../../../../yandex/cloud/apploadbalancer/v1/backend_group");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.apploadbalancer.v1';
const baseGetBackendGroupRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest',
    backendGroupId: '',
};
exports.GetBackendGroupRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetBackendGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
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
            ...baseGetBackendGroupRequest,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetBackendGroupRequest,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetBackendGroupRequest.$type, exports.GetBackendGroupRequest);
const baseListBackendGroupsRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListBackendGroupsRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest',
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
        const message = {
            ...baseListBackendGroupsRequest,
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
            ...baseListBackendGroupsRequest,
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
        const message = {
            ...baseListBackendGroupsRequest,
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListBackendGroupsRequest.$type, exports.ListBackendGroupsRequest);
const baseListBackendGroupsResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse',
    nextPageToken: '',
};
exports.ListBackendGroupsResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.backendGroups) {
            backend_group_1.BackendGroup.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListBackendGroupsResponse,
        };
        message.backendGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroups.push(backend_group_1.BackendGroup.decode(reader, reader.uint32()));
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
            ...baseListBackendGroupsResponse,
        };
        message.backendGroups = [];
        if (object.backendGroups !== undefined &&
            object.backendGroups !== null) {
            for (const e of object.backendGroups) {
                message.backendGroups.push(backend_group_1.BackendGroup.fromJSON(e));
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
        if (message.backendGroups) {
            obj.backendGroups = message.backendGroups.map((e) => e ? backend_group_1.BackendGroup.toJSON(e) : undefined);
        }
        else {
            obj.backendGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListBackendGroupsResponse,
        };
        message.backendGroups = [];
        if (object.backendGroups !== undefined &&
            object.backendGroups !== null) {
            for (const e of object.backendGroups) {
                message.backendGroups.push(backend_group_1.BackendGroup.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListBackendGroupsResponse.$type, exports.ListBackendGroupsResponse);
const baseDeleteBackendGroupRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest',
    backendGroupId: '',
};
exports.DeleteBackendGroupRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteBackendGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
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
            ...baseDeleteBackendGroupRequest,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteBackendGroupRequest,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBackendGroupRequest.$type, exports.DeleteBackendGroupRequest);
const baseDeleteBackendGroupMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata',
    backendGroupId: '',
};
exports.DeleteBackendGroupMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.DeleteBackendGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteBackendGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
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
            ...baseDeleteBackendGroupMetadata,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteBackendGroupMetadata,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteBackendGroupMetadata.$type, exports.DeleteBackendGroupMetadata);
const baseUpdateBackendGroupRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest',
    backendGroupId: '',
    name: '',
    description: '',
};
exports.UpdateBackendGroupRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
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
            exports.UpdateBackendGroupRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.http !== undefined) {
            backend_group_1.HttpBackendGroup.encode(message.http, writer.uint32(50).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            backend_group_1.GrpcBackendGroup.encode(message.grpc, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateBackendGroupRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
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
                    const entry5 = exports.UpdateBackendGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.http = backend_group_1.HttpBackendGroup.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.grpc = backend_group_1.GrpcBackendGroup.decode(reader, reader.uint32());
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
            ...baseUpdateBackendGroupRequest,
        };
        message.labels = {};
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
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
        if (object.http !== undefined && object.http !== null) {
            message.http = backend_group_1.HttpBackendGroup.fromJSON(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = backend_group_1.GrpcBackendGroup.fromJSON(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
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
        message.http !== undefined &&
            (obj.http = message.http
                ? backend_group_1.HttpBackendGroup.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? backend_group_1.GrpcBackendGroup.toJSON(message.grpc)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateBackendGroupRequest,
        };
        message.labels = {};
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
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
        if (object.http !== undefined && object.http !== null) {
            message.http = backend_group_1.HttpBackendGroup.fromPartial(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = backend_group_1.GrpcBackendGroup.fromPartial(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBackendGroupRequest.$type, exports.UpdateBackendGroupRequest);
const baseUpdateBackendGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateBackendGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest.LabelsEntry',
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
            ...baseUpdateBackendGroupRequest_LabelsEntry,
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
            ...baseUpdateBackendGroupRequest_LabelsEntry,
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
            ...baseUpdateBackendGroupRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBackendGroupRequest_LabelsEntry.$type, exports.UpdateBackendGroupRequest_LabelsEntry);
const baseUpdateBackendGroupMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata',
    backendGroupId: '',
};
exports.UpdateBackendGroupMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateBackendGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateBackendGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
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
            ...baseUpdateBackendGroupMetadata,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateBackendGroupMetadata,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBackendGroupMetadata.$type, exports.UpdateBackendGroupMetadata);
const baseCreateBackendGroupRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest',
    folderId: '',
    name: '',
    description: '',
};
exports.CreateBackendGroupRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest',
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
            exports.CreateBackendGroupRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.http !== undefined) {
            backend_group_1.HttpBackendGroup.encode(message.http, writer.uint32(42).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            backend_group_1.GrpcBackendGroup.encode(message.grpc, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateBackendGroupRequest,
        };
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
                    const entry4 = exports.CreateBackendGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.http = backend_group_1.HttpBackendGroup.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.grpc = backend_group_1.GrpcBackendGroup.decode(reader, reader.uint32());
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
            ...baseCreateBackendGroupRequest,
        };
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
        if (object.http !== undefined && object.http !== null) {
            message.http = backend_group_1.HttpBackendGroup.fromJSON(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = backend_group_1.GrpcBackendGroup.fromJSON(object.grpc);
        }
        else {
            message.grpc = undefined;
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
        message.http !== undefined &&
            (obj.http = message.http
                ? backend_group_1.HttpBackendGroup.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? backend_group_1.GrpcBackendGroup.toJSON(message.grpc)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateBackendGroupRequest,
        };
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
        if (object.http !== undefined && object.http !== null) {
            message.http = backend_group_1.HttpBackendGroup.fromPartial(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = backend_group_1.GrpcBackendGroup.fromPartial(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBackendGroupRequest.$type, exports.CreateBackendGroupRequest);
const baseCreateBackendGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateBackendGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest.LabelsEntry',
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
            ...baseCreateBackendGroupRequest_LabelsEntry,
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
            ...baseCreateBackendGroupRequest_LabelsEntry,
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
            ...baseCreateBackendGroupRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateBackendGroupRequest_LabelsEntry.$type, exports.CreateBackendGroupRequest_LabelsEntry);
const baseCreateBackendGroupMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata',
    backendGroupId: '',
};
exports.CreateBackendGroupMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.CreateBackendGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateBackendGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
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
            ...baseCreateBackendGroupMetadata,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateBackendGroupMetadata,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateBackendGroupMetadata.$type, exports.CreateBackendGroupMetadata);
const baseAddBackendRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddBackendRequest',
    backendGroupId: '',
};
exports.AddBackendRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddBackendRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.http !== undefined) {
            backend_group_1.HttpBackend.encode(message.http, writer.uint32(18).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            backend_group_1.GrpcBackend.encode(message.grpc, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddBackendRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.http = backend_group_1.HttpBackend.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.grpc = backend_group_1.GrpcBackend.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddBackendRequest };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = backend_group_1.HttpBackend.fromJSON(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = backend_group_1.GrpcBackend.fromJSON(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.http !== undefined &&
            (obj.http = message.http
                ? backend_group_1.HttpBackend.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? backend_group_1.GrpcBackend.toJSON(message.grpc)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddBackendRequest };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = backend_group_1.HttpBackend.fromPartial(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = backend_group_1.GrpcBackend.fromPartial(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddBackendRequest.$type, exports.AddBackendRequest);
const baseAddBackendMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddBackendMetadata',
    backendGroupId: '',
    backendName: '',
};
exports.AddBackendMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.AddBackendMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== '') {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddBackendMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddBackendMetadata };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = String(object.backendName);
        }
        else {
            message.backendName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddBackendMetadata };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = object.backendName;
        }
        else {
            message.backendName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddBackendMetadata.$type, exports.AddBackendMetadata);
const baseUpdateBackendRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateBackendRequest',
    backendGroupId: '',
};
exports.UpdateBackendRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateBackendRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.http !== undefined) {
            backend_group_1.HttpBackend.encode(message.http, writer.uint32(26).fork()).ldelim();
        }
        if (message.grpc !== undefined) {
            backend_group_1.GrpcBackend.encode(message.grpc, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateBackendRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.http = backend_group_1.HttpBackend.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.grpc = backend_group_1.GrpcBackend.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateBackendRequest };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = backend_group_1.HttpBackend.fromJSON(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = backend_group_1.GrpcBackend.fromJSON(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.http !== undefined &&
            (obj.http = message.http
                ? backend_group_1.HttpBackend.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? backend_group_1.GrpcBackend.toJSON(message.grpc)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateBackendRequest };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = backend_group_1.HttpBackend.fromPartial(object.http);
        }
        else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = backend_group_1.GrpcBackend.fromPartial(object.grpc);
        }
        else {
            message.grpc = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBackendRequest.$type, exports.UpdateBackendRequest);
const baseUpdateBackendMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata',
    backendGroupId: '',
    backendName: '',
};
exports.UpdateBackendMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.UpdateBackendMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== '') {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateBackendMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
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
            ...baseUpdateBackendMetadata,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = String(object.backendName);
        }
        else {
            message.backendName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateBackendMetadata,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = object.backendName;
        }
        else {
            message.backendName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateBackendMetadata.$type, exports.UpdateBackendMetadata);
const baseRemoveBackendRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveBackendRequest',
    backendGroupId: '',
    backendName: '',
};
exports.RemoveBackendRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveBackendRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== '') {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveBackendRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRemoveBackendRequest };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = String(object.backendName);
        }
        else {
            message.backendName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRemoveBackendRequest };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = object.backendName;
        }
        else {
            message.backendName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveBackendRequest.$type, exports.RemoveBackendRequest);
const baseRemoveBackendMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata',
    backendGroupId: '',
    backendName: '',
};
exports.RemoveBackendMetadata = {
    $type: 'yandex.cloud.apploadbalancer.v1.RemoveBackendMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
        }
        if (message.backendName !== '') {
            writer.uint32(18).string(message.backendName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveBackendMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
                    break;
                case 2:
                    message.backendName = reader.string();
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
            ...baseRemoveBackendMetadata,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = String(object.backendName);
        }
        else {
            message.backendName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.backendName !== undefined &&
            (obj.backendName = message.backendName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveBackendMetadata,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
        }
        if (object.backendName !== undefined && object.backendName !== null) {
            message.backendName = object.backendName;
        }
        else {
            message.backendName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveBackendMetadata.$type, exports.RemoveBackendMetadata);
const baseListBackendGroupOperationsRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest',
    backendGroupId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListBackendGroupOperationsRequest = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.backendGroupId !== '') {
            writer.uint32(10).string(message.backendGroupId);
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
            ...baseListBackendGroupOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendGroupId = reader.string();
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
            ...baseListBackendGroupOperationsRequest,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = String(object.backendGroupId);
        }
        else {
            message.backendGroupId = '';
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
        message.backendGroupId !== undefined &&
            (obj.backendGroupId = message.backendGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListBackendGroupOperationsRequest,
        };
        if (object.backendGroupId !== undefined &&
            object.backendGroupId !== null) {
            message.backendGroupId = object.backendGroupId;
        }
        else {
            message.backendGroupId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListBackendGroupOperationsRequest.$type, exports.ListBackendGroupOperationsRequest);
const baseListBackendGroupOperationsResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse',
    nextPageToken: '',
};
exports.ListBackendGroupOperationsResponse = {
    $type: 'yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse',
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
            ...baseListBackendGroupOperationsResponse,
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
            ...baseListBackendGroupOperationsResponse,
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
            ...baseListBackendGroupOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListBackendGroupOperationsResponse.$type, exports.ListBackendGroupOperationsResponse);
/** A set of methods for managing backend groups. */
exports.BackendGroupServiceService = {
    /**
     * Returns the specified backend group.
     *
     * To get the list of all available backend groups, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBackendGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(backend_group_1.BackendGroup.encode(value).finish()),
        responseDeserialize: (value) => backend_group_1.BackendGroup.decode(value),
    },
    /** Lists backend groups in the specified folder. */
    list: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBackendGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBackendGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBackendGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBackendGroupsResponse.decode(value),
    },
    /** Creates a backend group in the specified folder. */
    create: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateBackendGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified backend group. */
    update: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateBackendGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified backend group. */
    delete: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteBackendGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteBackendGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Adds backends to the specified backend group. */
    addBackend: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/AddBackend',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddBackendRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddBackendRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Removes backends from the specified backend group. */
    removeBackend: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/RemoveBackend',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveBackendRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveBackendRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified backend. */
    updateBackend: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/UpdateBackend',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateBackendRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateBackendRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified backend group. */
    listOperations: {
        path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBackendGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBackendGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBackendGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBackendGroupOperationsResponse.decode(value),
    },
};
exports.BackendGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BackendGroupServiceService, 'yandex.cloud.apploadbalancer.v1.BackendGroupService');
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
