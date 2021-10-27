"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskServiceClient = exports.DiskServiceService = exports.ListDiskOperationsResponse = exports.ListDiskOperationsRequest = exports.DeleteDiskMetadata = exports.DeleteDiskRequest = exports.UpdateDiskMetadata = exports.UpdateDiskRequest_LabelsEntry = exports.UpdateDiskRequest = exports.CreateDiskMetadata = exports.CreateDiskRequest_LabelsEntry = exports.CreateDiskRequest = exports.ListDisksResponse = exports.ListDisksRequest = exports.GetDiskRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const disk_1 = require("../../../../yandex/cloud/compute/v1/disk");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
const baseGetDiskRequest = { diskId: '' };
exports.GetDiskRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== '') {
            writer.uint32(10).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDiskRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetDiskRequest };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetDiskRequest };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
        }
        return message;
    },
};
const baseListDisksRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListDisksRequest = {
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
        const message = { ...baseListDisksRequest };
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
        const message = { ...baseListDisksRequest };
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
        const message = { ...baseListDisksRequest };
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
const baseListDisksResponse = { nextPageToken: '' };
exports.ListDisksResponse = {
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
        const message = { ...baseListDisksResponse };
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
        const message = { ...baseListDisksResponse };
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
        const message = { ...baseListDisksResponse };
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
const baseCreateDiskRequest = {
    folderId: '',
    name: '',
    description: '',
    typeId: '',
    zoneId: '',
    size: 0,
    blockSize: 0,
};
exports.CreateDiskRequest = {
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
            exports.CreateDiskRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.typeId !== '') {
            writer.uint32(42).string(message.typeId);
        }
        if (message.zoneId !== '') {
            writer.uint32(50).string(message.zoneId);
        }
        if (message.size !== 0) {
            writer.uint32(56).int64(message.size);
        }
        if (message.imageId !== undefined) {
            writer.uint32(66).string(message.imageId);
        }
        if (message.snapshotId !== undefined) {
            writer.uint32(74).string(message.snapshotId);
        }
        if (message.blockSize !== 0) {
            writer.uint32(80).int64(message.blockSize);
        }
        if (message.diskPlacementPolicy !== undefined) {
            disk_1.DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDiskRequest };
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
                    const entry4 = exports.CreateDiskRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.typeId = reader.string();
                    break;
                case 6:
                    message.zoneId = reader.string();
                    break;
                case 7:
                    message.size = longToNumber(reader.int64());
                    break;
                case 8:
                    message.imageId = reader.string();
                    break;
                case 9:
                    message.snapshotId = reader.string();
                    break;
                case 10:
                    message.blockSize = longToNumber(reader.int64());
                    break;
                case 11:
                    message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateDiskRequest };
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
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = String(object.typeId);
        }
        else {
            message.typeId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = undefined;
        }
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        }
        else {
            message.snapshotId = undefined;
        }
        if (object.blockSize !== undefined && object.blockSize !== null) {
            message.blockSize = Number(object.blockSize);
        }
        else {
            message.blockSize = 0;
        }
        if (object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null) {
            message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy);
        }
        else {
            message.diskPlacementPolicy = undefined;
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
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.size !== undefined && (obj.size = message.size);
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        message.blockSize !== undefined && (obj.blockSize = message.blockSize);
        message.diskPlacementPolicy !== undefined &&
            (obj.diskPlacementPolicy = message.diskPlacementPolicy
                ? disk_1.DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateDiskRequest };
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
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = object.typeId;
        }
        else {
            message.typeId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = undefined;
        }
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        }
        else {
            message.snapshotId = undefined;
        }
        if (object.blockSize !== undefined && object.blockSize !== null) {
            message.blockSize = object.blockSize;
        }
        else {
            message.blockSize = 0;
        }
        if (object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null) {
            message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy);
        }
        else {
            message.diskPlacementPolicy = undefined;
        }
        return message;
    },
};
const baseCreateDiskRequest_LabelsEntry = { key: '', value: '' };
exports.CreateDiskRequest_LabelsEntry = {
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
            ...baseCreateDiskRequest_LabelsEntry,
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
            ...baseCreateDiskRequest_LabelsEntry,
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
            ...baseCreateDiskRequest_LabelsEntry,
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
const baseCreateDiskMetadata = { diskId: '' };
exports.CreateDiskMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== '') {
            writer.uint32(10).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDiskMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateDiskMetadata };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateDiskMetadata };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
        }
        return message;
    },
};
const baseUpdateDiskRequest = {
    diskId: '',
    name: '',
    description: '',
    size: 0,
};
exports.UpdateDiskRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== '') {
            writer.uint32(10).string(message.diskId);
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
            exports.UpdateDiskRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.size !== 0) {
            writer.uint32(48).int64(message.size);
        }
        if (message.diskPlacementPolicy !== undefined) {
            disk_1.DiskPlacementPolicy.encode(message.diskPlacementPolicy, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDiskRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
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
                    const entry5 = exports.UpdateDiskRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.size = longToNumber(reader.int64());
                    break;
                case 7:
                    message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateDiskRequest };
        message.labels = {};
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = '';
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
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        if (object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null) {
            message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.fromJSON(object.diskPlacementPolicy);
        }
        else {
            message.diskPlacementPolicy = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
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
        message.size !== undefined && (obj.size = message.size);
        message.diskPlacementPolicy !== undefined &&
            (obj.diskPlacementPolicy = message.diskPlacementPolicy
                ? disk_1.DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateDiskRequest };
        message.labels = {};
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
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
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
        }
        if (object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null) {
            message.diskPlacementPolicy = disk_1.DiskPlacementPolicy.fromPartial(object.diskPlacementPolicy);
        }
        else {
            message.diskPlacementPolicy = undefined;
        }
        return message;
    },
};
const baseUpdateDiskRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateDiskRequest_LabelsEntry = {
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
            ...baseUpdateDiskRequest_LabelsEntry,
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
            ...baseUpdateDiskRequest_LabelsEntry,
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
            ...baseUpdateDiskRequest_LabelsEntry,
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
const baseUpdateDiskMetadata = { diskId: '' };
exports.UpdateDiskMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== '') {
            writer.uint32(10).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDiskMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateDiskMetadata };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateDiskMetadata };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
        }
        return message;
    },
};
const baseDeleteDiskRequest = { diskId: '' };
exports.DeleteDiskRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== '') {
            writer.uint32(10).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDiskRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteDiskRequest };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteDiskRequest };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
        }
        return message;
    },
};
const baseDeleteDiskMetadata = { diskId: '' };
exports.DeleteDiskMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== '') {
            writer.uint32(10).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDiskMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteDiskMetadata };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteDiskMetadata };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
        }
        return message;
    },
};
const baseListDiskOperationsRequest = {
    diskId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListDiskOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskId !== '') {
            writer.uint32(10).string(message.diskId);
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
            ...baseListDiskOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskId = reader.string();
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
            ...baseListDiskOperationsRequest,
        };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = '';
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
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDiskOperationsRequest,
        };
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
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
const baseListDiskOperationsResponse = { nextPageToken: '' };
exports.ListDiskOperationsResponse = {
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
            ...baseListDiskOperationsResponse,
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
            ...baseListDiskOperationsResponse,
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
            ...baseListDiskOperationsResponse,
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
/** A set of methods for managing Disk resources. */
exports.DiskServiceService = {
    /**
     * Returns the specified Disk resource.
     *
     * To get the list of available Disk resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.DiskService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(disk_1.Disk.encode(value).finish()),
        responseDeserialize: (value) => disk_1.Disk.decode(value),
    },
    /** Retrieves the list of Disk resources in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.DiskService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDisksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDisksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDisksResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDisksResponse.decode(value),
    },
    /**
     * Creates a disk in the specified folder.
     *
     * You can create an empty disk or restore it from a snapshot or an image.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.compute.v1.DiskService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified disk. */
    update: {
        path: '/yandex.cloud.compute.v1.DiskService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified disk.
     *
     * Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
     * any snapshots or images previously made from the disk. You must delete snapshots and images separately.
     *
     * It is not possible to delete a disk that is attached to an instance.
     */
    delete: {
        path: '/yandex.cloud.compute.v1.DiskService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDiskRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDiskRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified disk. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.DiskService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDiskOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDiskOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDiskOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDiskOperationsResponse.decode(value),
    },
};
exports.DiskServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DiskServiceService, 'yandex.cloud.compute.v1.DiskService');
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
