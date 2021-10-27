"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostGroupServiceClient = exports.HostGroupServiceService = exports.ListHostGroupOperationsResponse = exports.ListHostGroupOperationsRequest = exports.ListHostGroupHostsResponse = exports.ListHostGroupHostsRequest = exports.ListHostGroupInstancesResponse = exports.ListHostGroupInstancesRequest = exports.DeleteHostGroupMetadata = exports.DeleteHostGroupRequest = exports.UpdateHostGroupMetadata = exports.UpdateHostGroupRequest_LabelsEntry = exports.UpdateHostGroupRequest = exports.CreateHostGroupMetadata = exports.CreateHostGroupRequest_LabelsEntry = exports.CreateHostGroupRequest = exports.ListHostGroupsResponse = exports.ListHostGroupsRequest = exports.GetHostGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../typeRegistry");
const host_group_1 = require("../../../../yandex/cloud/compute/v1/host_group");
const instance_1 = require("../../../../yandex/cloud/compute/v1/instance");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
const baseGetHostGroupRequest = {
    $type: 'yandex.cloud.compute.v1.GetHostGroupRequest',
    hostGroupId: '',
};
exports.GetHostGroupRequest = {
    $type: 'yandex.cloud.compute.v1.GetHostGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetHostGroupRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetHostGroupRequest };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = String(object.hostGroupId);
        }
        else {
            message.hostGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetHostGroupRequest };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = object.hostGroupId;
        }
        else {
            message.hostGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetHostGroupRequest.$type, exports.GetHostGroupRequest);
const baseListHostGroupsRequest = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListHostGroupsRequest = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupsRequest',
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
            ...baseListHostGroupsRequest,
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
            ...baseListHostGroupsRequest,
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
            ...baseListHostGroupsRequest,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupsRequest.$type, exports.ListHostGroupsRequest);
const baseListHostGroupsResponse = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupsResponse',
    nextPageToken: '',
};
exports.ListHostGroupsResponse = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hostGroups) {
            host_group_1.HostGroup.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListHostGroupsResponse,
        };
        message.hostGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroups.push(host_group_1.HostGroup.decode(reader, reader.uint32()));
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
            ...baseListHostGroupsResponse,
        };
        message.hostGroups = [];
        if (object.hostGroups !== undefined && object.hostGroups !== null) {
            for (const e of object.hostGroups) {
                message.hostGroups.push(host_group_1.HostGroup.fromJSON(e));
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
        if (message.hostGroups) {
            obj.hostGroups = message.hostGroups.map((e) => e ? host_group_1.HostGroup.toJSON(e) : undefined);
        }
        else {
            obj.hostGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListHostGroupsResponse,
        };
        message.hostGroups = [];
        if (object.hostGroups !== undefined && object.hostGroups !== null) {
            for (const e of object.hostGroups) {
                message.hostGroups.push(host_group_1.HostGroup.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupsResponse.$type, exports.ListHostGroupsResponse);
const baseCreateHostGroupRequest = {
    $type: 'yandex.cloud.compute.v1.CreateHostGroupRequest',
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    typeId: '',
    maintenancePolicy: 0,
};
exports.CreateHostGroupRequest = {
    $type: 'yandex.cloud.compute.v1.CreateHostGroupRequest',
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
            exports.CreateHostGroupRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.typeId !== '') {
            writer.uint32(50).string(message.typeId);
        }
        if (message.maintenancePolicy !== 0) {
            writer.uint32(56).int32(message.maintenancePolicy);
        }
        if (message.scalePolicy !== undefined) {
            host_group_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateHostGroupRequest,
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
                    const entry4 = exports.CreateHostGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zoneId = reader.string();
                    break;
                case 6:
                    message.typeId = reader.string();
                    break;
                case 7:
                    message.maintenancePolicy = reader.int32();
                    break;
                case 8:
                    message.scalePolicy = host_group_1.ScalePolicy.decode(reader, reader.uint32());
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
            ...baseCreateHostGroupRequest,
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = String(object.typeId);
        }
        else {
            message.typeId = '';
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = (0, host_group_1.maintenancePolicyFromJSON)(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = 0;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = host_group_1.ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = (0, host_group_1.maintenancePolicyToJSON)(message.maintenancePolicy));
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? host_group_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateHostGroupRequest,
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = object.typeId;
        }
        else {
            message.typeId = '';
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = object.maintenancePolicy;
        }
        else {
            message.maintenancePolicy = 0;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = host_group_1.ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateHostGroupRequest.$type, exports.CreateHostGroupRequest);
const baseCreateHostGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateHostGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.CreateHostGroupRequest.LabelsEntry',
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
            ...baseCreateHostGroupRequest_LabelsEntry,
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
            ...baseCreateHostGroupRequest_LabelsEntry,
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
            ...baseCreateHostGroupRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateHostGroupRequest_LabelsEntry.$type, exports.CreateHostGroupRequest_LabelsEntry);
const baseCreateHostGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.CreateHostGroupMetadata',
    hostGroupId: '',
};
exports.CreateHostGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.CreateHostGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateHostGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
            ...baseCreateHostGroupMetadata,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = String(object.hostGroupId);
        }
        else {
            message.hostGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateHostGroupMetadata,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = object.hostGroupId;
        }
        else {
            message.hostGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateHostGroupMetadata.$type, exports.CreateHostGroupMetadata);
const baseUpdateHostGroupRequest = {
    $type: 'yandex.cloud.compute.v1.UpdateHostGroupRequest',
    hostGroupId: '',
    name: '',
    description: '',
    maintenancePolicy: 0,
};
exports.UpdateHostGroupRequest = {
    $type: 'yandex.cloud.compute.v1.UpdateHostGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
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
            exports.UpdateHostGroupRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.maintenancePolicy !== 0) {
            writer.uint32(48).int32(message.maintenancePolicy);
        }
        if (message.scalePolicy !== undefined) {
            host_group_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateHostGroupRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
                    const entry5 = exports.UpdateHostGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.maintenancePolicy = reader.int32();
                    break;
                case 7:
                    message.scalePolicy = host_group_1.ScalePolicy.decode(reader, reader.uint32());
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
            ...baseUpdateHostGroupRequest,
        };
        message.labels = {};
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = String(object.hostGroupId);
        }
        else {
            message.hostGroupId = '';
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
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = (0, host_group_1.maintenancePolicyFromJSON)(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = 0;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = host_group_1.ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
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
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = (0, host_group_1.maintenancePolicyToJSON)(message.maintenancePolicy));
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? host_group_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateHostGroupRequest,
        };
        message.labels = {};
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = object.hostGroupId;
        }
        else {
            message.hostGroupId = '';
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
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = object.maintenancePolicy;
        }
        else {
            message.maintenancePolicy = 0;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = host_group_1.ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateHostGroupRequest.$type, exports.UpdateHostGroupRequest);
const baseUpdateHostGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateHostGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.UpdateHostGroupRequest.LabelsEntry',
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
            ...baseUpdateHostGroupRequest_LabelsEntry,
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
            ...baseUpdateHostGroupRequest_LabelsEntry,
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
            ...baseUpdateHostGroupRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateHostGroupRequest_LabelsEntry.$type, exports.UpdateHostGroupRequest_LabelsEntry);
const baseUpdateHostGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.UpdateHostGroupMetadata',
    hostGroupId: '',
};
exports.UpdateHostGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.UpdateHostGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateHostGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
            ...baseUpdateHostGroupMetadata,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = String(object.hostGroupId);
        }
        else {
            message.hostGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateHostGroupMetadata,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = object.hostGroupId;
        }
        else {
            message.hostGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateHostGroupMetadata.$type, exports.UpdateHostGroupMetadata);
const baseDeleteHostGroupRequest = {
    $type: 'yandex.cloud.compute.v1.DeleteHostGroupRequest',
    hostGroupId: '',
};
exports.DeleteHostGroupRequest = {
    $type: 'yandex.cloud.compute.v1.DeleteHostGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteHostGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
            ...baseDeleteHostGroupRequest,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = String(object.hostGroupId);
        }
        else {
            message.hostGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteHostGroupRequest,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = object.hostGroupId;
        }
        else {
            message.hostGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteHostGroupRequest.$type, exports.DeleteHostGroupRequest);
const baseDeleteHostGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.DeleteHostGroupMetadata',
    hostGroupId: '',
};
exports.DeleteHostGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.DeleteHostGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteHostGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
            ...baseDeleteHostGroupMetadata,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = String(object.hostGroupId);
        }
        else {
            message.hostGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteHostGroupMetadata,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = object.hostGroupId;
        }
        else {
            message.hostGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteHostGroupMetadata.$type, exports.DeleteHostGroupMetadata);
const baseListHostGroupInstancesRequest = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupInstancesRequest',
    hostGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListHostGroupInstancesRequest = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupInstancesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
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
            ...baseListHostGroupInstancesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
            ...baseListHostGroupInstancesRequest,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = String(object.hostGroupId);
        }
        else {
            message.hostGroupId = '';
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
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListHostGroupInstancesRequest,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = object.hostGroupId;
        }
        else {
            message.hostGroupId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupInstancesRequest.$type, exports.ListHostGroupInstancesRequest);
const baseListHostGroupInstancesResponse = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupInstancesResponse',
    nextPageToken: '',
};
exports.ListHostGroupInstancesResponse = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupInstancesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.instances) {
            instance_1.Instance.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListHostGroupInstancesResponse,
        };
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(instance_1.Instance.decode(reader, reader.uint32()));
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
            ...baseListHostGroupInstancesResponse,
        };
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(instance_1.Instance.fromJSON(e));
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
        if (message.instances) {
            obj.instances = message.instances.map((e) => e ? instance_1.Instance.toJSON(e) : undefined);
        }
        else {
            obj.instances = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListHostGroupInstancesResponse,
        };
        message.instances = [];
        if (object.instances !== undefined && object.instances !== null) {
            for (const e of object.instances) {
                message.instances.push(instance_1.Instance.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupInstancesResponse.$type, exports.ListHostGroupInstancesResponse);
const baseListHostGroupHostsRequest = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupHostsRequest',
    hostGroupId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListHostGroupHostsRequest = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupHostsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
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
            ...baseListHostGroupHostsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
            ...baseListHostGroupHostsRequest,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = String(object.hostGroupId);
        }
        else {
            message.hostGroupId = '';
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
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListHostGroupHostsRequest,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = object.hostGroupId;
        }
        else {
            message.hostGroupId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupHostsRequest.$type, exports.ListHostGroupHostsRequest);
const baseListHostGroupHostsResponse = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupHostsResponse',
    nextPageToken: '',
};
exports.ListHostGroupHostsResponse = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupHostsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hosts) {
            host_group_1.Host.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListHostGroupHostsResponse,
        };
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(host_group_1.Host.decode(reader, reader.uint32()));
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
            ...baseListHostGroupHostsResponse,
        };
        message.hosts = [];
        if (object.hosts !== undefined && object.hosts !== null) {
            for (const e of object.hosts) {
                message.hosts.push(host_group_1.Host.fromJSON(e));
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
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => e ? host_group_1.Host.toJSON(e) : undefined);
        }
        else {
            obj.hosts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListHostGroupHostsResponse,
        };
        message.hosts = [];
        if (object.hosts !== undefined && object.hosts !== null) {
            for (const e of object.hosts) {
                message.hosts.push(host_group_1.Host.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupHostsResponse.$type, exports.ListHostGroupHostsResponse);
const baseListHostGroupOperationsRequest = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupOperationsRequest',
    hostGroupId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListHostGroupOperationsRequest = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
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
            ...baseListHostGroupOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroupId = reader.string();
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
            ...baseListHostGroupOperationsRequest,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = String(object.hostGroupId);
        }
        else {
            message.hostGroupId = '';
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
        message.hostGroupId !== undefined &&
            (obj.hostGroupId = message.hostGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListHostGroupOperationsRequest,
        };
        if (object.hostGroupId !== undefined && object.hostGroupId !== null) {
            message.hostGroupId = object.hostGroupId;
        }
        else {
            message.hostGroupId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupOperationsRequest.$type, exports.ListHostGroupOperationsRequest);
const baseListHostGroupOperationsResponse = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupOperationsResponse',
    nextPageToken: '',
};
exports.ListHostGroupOperationsResponse = {
    $type: 'yandex.cloud.compute.v1.ListHostGroupOperationsResponse',
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
            ...baseListHostGroupOperationsResponse,
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
            ...baseListHostGroupOperationsResponse,
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
            ...baseListHostGroupOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListHostGroupOperationsResponse.$type, exports.ListHostGroupOperationsResponse);
/** A set of methods for managing groups of dedicated hosts. */
exports.HostGroupServiceService = {
    /** Returns the specified host group. */
    get: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(host_group_1.HostGroup.encode(value).finish()),
        responseDeserialize: (value) => host_group_1.HostGroup.decode(value),
    },
    /** Retrieves the list of host groups in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.HostGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListHostGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListHostGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListHostGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListHostGroupsResponse.decode(value),
    },
    /** Creates a host group in the specified folder. */
    create: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified host group. */
    update: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified host group. */
    delete: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified host group. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.HostGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListHostGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListHostGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListHostGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListHostGroupOperationsResponse.decode(value),
    },
    /** Lists instances that belongs to the specified host group. */
    listInstances: {
        path: '/yandex.cloud.compute.v1.HostGroupService/ListInstances',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListHostGroupInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListHostGroupInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListHostGroupInstancesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListHostGroupInstancesResponse.decode(value),
    },
    /** Lists hosts that belongs to the specified host group. */
    listHosts: {
        path: '/yandex.cloud.compute.v1.HostGroupService/ListHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListHostGroupHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListHostGroupHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListHostGroupHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListHostGroupHostsResponse.decode(value),
    },
};
exports.HostGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.HostGroupServiceService, 'yandex.cloud.compute.v1.HostGroupService');
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
