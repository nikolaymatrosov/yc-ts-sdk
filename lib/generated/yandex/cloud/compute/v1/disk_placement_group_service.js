"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskPlacementGroupServiceClient = exports.DiskPlacementGroupServiceService = exports.ListDiskPlacementGroupOperationsResponse = exports.ListDiskPlacementGroupOperationsRequest = exports.ListDiskPlacementGroupDisksResponse = exports.ListDiskPlacementGroupDisksRequest = exports.DeleteDiskPlacementGroupMetadata = exports.DeleteDiskPlacementGroupRequest = exports.UpdateDiskPlacementGroupMetadata = exports.UpdateDiskPlacementGroupRequest_LabelsEntry = exports.UpdateDiskPlacementGroupRequest = exports.CreateDiskPlacementGroupMetadata = exports.CreateDiskPlacementGroupRequest_LabelsEntry = exports.CreateDiskPlacementGroupRequest = exports.ListDiskPlacementGroupsResponse = exports.ListDiskPlacementGroupsRequest = exports.GetDiskPlacementGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../typeRegistry");
const disk_1 = require("../../../../yandex/cloud/compute/v1/disk");
const disk_placement_group_1 = require("../../../../yandex/cloud/compute/v1/disk_placement_group");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
const baseGetDiskPlacementGroupRequest = {
    $type: 'yandex.cloud.compute.v1.GetDiskPlacementGroupRequest',
    diskPlacementGroupId: '',
};
exports.GetDiskPlacementGroupRequest = {
    $type: 'yandex.cloud.compute.v1.GetDiskPlacementGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetDiskPlacementGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
            ...baseGetDiskPlacementGroupRequest,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        }
        else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetDiskPlacementGroupRequest,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        }
        else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetDiskPlacementGroupRequest.$type, exports.GetDiskPlacementGroupRequest);
const baseListDiskPlacementGroupsRequest = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListDiskPlacementGroupsRequest = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupsRequest',
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
            ...baseListDiskPlacementGroupsRequest,
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
            ...baseListDiskPlacementGroupsRequest,
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
            ...baseListDiskPlacementGroupsRequest,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupsRequest.$type, exports.ListDiskPlacementGroupsRequest);
const baseListDiskPlacementGroupsResponse = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupsResponse',
    nextPageToken: '',
};
exports.ListDiskPlacementGroupsResponse = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.diskPlacementGroups) {
            disk_placement_group_1.DiskPlacementGroup.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListDiskPlacementGroupsResponse,
        };
        message.diskPlacementGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroups.push(disk_placement_group_1.DiskPlacementGroup.decode(reader, reader.uint32()));
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
            ...baseListDiskPlacementGroupsResponse,
        };
        message.diskPlacementGroups = [];
        if (object.diskPlacementGroups !== undefined &&
            object.diskPlacementGroups !== null) {
            for (const e of object.diskPlacementGroups) {
                message.diskPlacementGroups.push(disk_placement_group_1.DiskPlacementGroup.fromJSON(e));
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
        if (message.diskPlacementGroups) {
            obj.diskPlacementGroups = message.diskPlacementGroups.map((e) => e ? disk_placement_group_1.DiskPlacementGroup.toJSON(e) : undefined);
        }
        else {
            obj.diskPlacementGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDiskPlacementGroupsResponse,
        };
        message.diskPlacementGroups = [];
        if (object.diskPlacementGroups !== undefined &&
            object.diskPlacementGroups !== null) {
            for (const e of object.diskPlacementGroups) {
                message.diskPlacementGroups.push(disk_placement_group_1.DiskPlacementGroup.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupsResponse.$type, exports.ListDiskPlacementGroupsResponse);
const baseCreateDiskPlacementGroupRequest = {
    $type: 'yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest',
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
};
exports.CreateDiskPlacementGroupRequest = {
    $type: 'yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest',
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
            exports.CreateDiskPlacementGroupRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.spreadPlacementStrategy !== undefined) {
            disk_placement_group_1.DiskSpreadPlacementStrategy.encode(message.spreadPlacementStrategy, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDiskPlacementGroupRequest,
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
                    const entry4 = exports.CreateDiskPlacementGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zoneId = reader.string();
                    break;
                case 6:
                    message.spreadPlacementStrategy =
                        disk_placement_group_1.DiskSpreadPlacementStrategy.decode(reader, reader.uint32());
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
            ...baseCreateDiskPlacementGroupRequest,
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
        if (object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null) {
            message.spreadPlacementStrategy =
                disk_placement_group_1.DiskSpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy);
        }
        else {
            message.spreadPlacementStrategy = undefined;
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
        message.spreadPlacementStrategy !== undefined &&
            (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
                ? disk_placement_group_1.DiskSpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateDiskPlacementGroupRequest,
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
        if (object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null) {
            message.spreadPlacementStrategy =
                disk_placement_group_1.DiskSpreadPlacementStrategy.fromPartial(object.spreadPlacementStrategy);
        }
        else {
            message.spreadPlacementStrategy = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDiskPlacementGroupRequest.$type, exports.CreateDiskPlacementGroupRequest);
const baseCreateDiskPlacementGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateDiskPlacementGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest.LabelsEntry',
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
            ...baseCreateDiskPlacementGroupRequest_LabelsEntry,
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
            ...baseCreateDiskPlacementGroupRequest_LabelsEntry,
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
            ...baseCreateDiskPlacementGroupRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateDiskPlacementGroupRequest_LabelsEntry.$type, exports.CreateDiskPlacementGroupRequest_LabelsEntry);
const baseCreateDiskPlacementGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.CreateDiskPlacementGroupMetadata',
    diskPlacementGroupId: '',
};
exports.CreateDiskPlacementGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.CreateDiskPlacementGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDiskPlacementGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
            ...baseCreateDiskPlacementGroupMetadata,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        }
        else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateDiskPlacementGroupMetadata,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        }
        else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDiskPlacementGroupMetadata.$type, exports.CreateDiskPlacementGroupMetadata);
const baseUpdateDiskPlacementGroupRequest = {
    $type: 'yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest',
    diskPlacementGroupId: '',
    name: '',
    description: '',
};
exports.UpdateDiskPlacementGroupRequest = {
    $type: 'yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
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
            exports.UpdateDiskPlacementGroupRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDiskPlacementGroupRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
                    const entry5 = exports.UpdateDiskPlacementGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
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
            ...baseUpdateDiskPlacementGroupRequest,
        };
        message.labels = {};
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        }
        else {
            message.diskPlacementGroupId = '';
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
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
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateDiskPlacementGroupRequest,
        };
        message.labels = {};
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        }
        else {
            message.diskPlacementGroupId = '';
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDiskPlacementGroupRequest.$type, exports.UpdateDiskPlacementGroupRequest);
const baseUpdateDiskPlacementGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateDiskPlacementGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest.LabelsEntry',
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
            ...baseUpdateDiskPlacementGroupRequest_LabelsEntry,
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
            ...baseUpdateDiskPlacementGroupRequest_LabelsEntry,
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
            ...baseUpdateDiskPlacementGroupRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDiskPlacementGroupRequest_LabelsEntry.$type, exports.UpdateDiskPlacementGroupRequest_LabelsEntry);
const baseUpdateDiskPlacementGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.UpdateDiskPlacementGroupMetadata',
    diskPlacementGroupId: '',
};
exports.UpdateDiskPlacementGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.UpdateDiskPlacementGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDiskPlacementGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
            ...baseUpdateDiskPlacementGroupMetadata,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        }
        else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateDiskPlacementGroupMetadata,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        }
        else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDiskPlacementGroupMetadata.$type, exports.UpdateDiskPlacementGroupMetadata);
const baseDeleteDiskPlacementGroupRequest = {
    $type: 'yandex.cloud.compute.v1.DeleteDiskPlacementGroupRequest',
    diskPlacementGroupId: '',
};
exports.DeleteDiskPlacementGroupRequest = {
    $type: 'yandex.cloud.compute.v1.DeleteDiskPlacementGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDiskPlacementGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
            ...baseDeleteDiskPlacementGroupRequest,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        }
        else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteDiskPlacementGroupRequest,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        }
        else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDiskPlacementGroupRequest.$type, exports.DeleteDiskPlacementGroupRequest);
const baseDeleteDiskPlacementGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.DeleteDiskPlacementGroupMetadata',
    diskPlacementGroupId: '',
};
exports.DeleteDiskPlacementGroupMetadata = {
    $type: 'yandex.cloud.compute.v1.DeleteDiskPlacementGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDiskPlacementGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
            ...baseDeleteDiskPlacementGroupMetadata,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        }
        else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteDiskPlacementGroupMetadata,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        }
        else {
            message.diskPlacementGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDiskPlacementGroupMetadata.$type, exports.DeleteDiskPlacementGroupMetadata);
const baseListDiskPlacementGroupDisksRequest = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupDisksRequest',
    diskPlacementGroupId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListDiskPlacementGroupDisksRequest = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupDisksRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
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
            ...baseListDiskPlacementGroupDisksRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
            ...baseListDiskPlacementGroupDisksRequest,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        }
        else {
            message.diskPlacementGroupId = '';
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
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDiskPlacementGroupDisksRequest,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        }
        else {
            message.diskPlacementGroupId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupDisksRequest.$type, exports.ListDiskPlacementGroupDisksRequest);
const baseListDiskPlacementGroupDisksResponse = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupDisksResponse',
    nextPageToken: '',
};
exports.ListDiskPlacementGroupDisksResponse = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupDisksResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.disks) {
            disk_1.Disk.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListDiskPlacementGroupDisksResponse,
        };
        message.disks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disks.push(disk_1.Disk.decode(reader, reader.uint32()));
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
            ...baseListDiskPlacementGroupDisksResponse,
        };
        message.disks = [];
        if (object.disks !== undefined && object.disks !== null) {
            for (const e of object.disks) {
                message.disks.push(disk_1.Disk.fromJSON(e));
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
        if (message.disks) {
            obj.disks = message.disks.map((e) => e ? disk_1.Disk.toJSON(e) : undefined);
        }
        else {
            obj.disks = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDiskPlacementGroupDisksResponse,
        };
        message.disks = [];
        if (object.disks !== undefined && object.disks !== null) {
            for (const e of object.disks) {
                message.disks.push(disk_1.Disk.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupDisksResponse.$type, exports.ListDiskPlacementGroupDisksResponse);
const baseListDiskPlacementGroupOperationsRequest = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsRequest',
    diskPlacementGroupId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListDiskPlacementGroupOperationsRequest = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
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
            ...baseListDiskPlacementGroupOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroupId = reader.string();
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
            ...baseListDiskPlacementGroupOperationsRequest,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = String(object.diskPlacementGroupId);
        }
        else {
            message.diskPlacementGroupId = '';
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
        message.diskPlacementGroupId !== undefined &&
            (obj.diskPlacementGroupId = message.diskPlacementGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDiskPlacementGroupOperationsRequest,
        };
        if (object.diskPlacementGroupId !== undefined &&
            object.diskPlacementGroupId !== null) {
            message.diskPlacementGroupId = object.diskPlacementGroupId;
        }
        else {
            message.diskPlacementGroupId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupOperationsRequest.$type, exports.ListDiskPlacementGroupOperationsRequest);
const baseListDiskPlacementGroupOperationsResponse = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsResponse',
    nextPageToken: '',
};
exports.ListDiskPlacementGroupOperationsResponse = {
    $type: 'yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsResponse',
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
            ...baseListDiskPlacementGroupOperationsResponse,
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
            ...baseListDiskPlacementGroupOperationsResponse,
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
            ...baseListDiskPlacementGroupOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDiskPlacementGroupOperationsResponse.$type, exports.ListDiskPlacementGroupOperationsResponse);
/** A set of methods for managing DiskPlacementGroup resources. */
exports.DiskPlacementGroupServiceService = {
    /** Returns the specified placement group. */
    get: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(disk_placement_group_1.DiskPlacementGroup.encode(value).finish()),
        responseDeserialize: (value) => disk_placement_group_1.DiskPlacementGroup.decode(value),
    },
    /** Retrieves the list of placement groups in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDiskPlacementGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDiskPlacementGroupsResponse.decode(value),
    },
    /** Creates a placement group in the specified folder. */
    create: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified placement group. */
    update: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified placement group. */
    delete: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists disks for the specified placement group. */
    listDisks: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/ListDisks',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupDisksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDiskPlacementGroupDisksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupDisksResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDiskPlacementGroupDisksResponse.decode(value),
    },
    /** Lists operations for the specified placement group. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDiskPlacementGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDiskPlacementGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDiskPlacementGroupOperationsResponse.decode(value),
    },
};
exports.DiskPlacementGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DiskPlacementGroupServiceService, 'yandex.cloud.compute.v1.DiskPlacementGroupService');
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
