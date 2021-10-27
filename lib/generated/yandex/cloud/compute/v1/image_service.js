"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageServiceClient = exports.ImageServiceService = exports.ListImageOperationsResponse = exports.ListImageOperationsRequest = exports.DeleteImageMetadata = exports.DeleteImageRequest = exports.UpdateImageMetadata = exports.UpdateImageRequest_LabelsEntry = exports.UpdateImageRequest = exports.CreateImageMetadata = exports.CreateImageRequest_LabelsEntry = exports.CreateImageRequest = exports.ListImagesResponse = exports.ListImagesRequest = exports.GetImageLatestByFamilyRequest = exports.GetImageRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const image_1 = require("../../../../yandex/cloud/compute/v1/image");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
const baseGetImageRequest = { imageId: '' };
exports.GetImageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetImageRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetImageRequest };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetImageRequest };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
        }
        return message;
    },
};
const baseGetImageLatestByFamilyRequest = { folderId: '', family: '' };
exports.GetImageLatestByFamilyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.family !== '') {
            writer.uint32(18).string(message.family);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetImageLatestByFamilyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.family = reader.string();
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
            ...baseGetImageLatestByFamilyRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.family !== undefined && object.family !== null) {
            message.family = String(object.family);
        }
        else {
            message.family = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.family !== undefined && (obj.family = message.family);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetImageLatestByFamilyRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.family !== undefined && object.family !== null) {
            message.family = object.family;
        }
        else {
            message.family = '';
        }
        return message;
    },
};
const baseListImagesRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListImagesRequest = {
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
        const message = { ...baseListImagesRequest };
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
        const message = { ...baseListImagesRequest };
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
        const message = { ...baseListImagesRequest };
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
const baseListImagesResponse = { nextPageToken: '' };
exports.ListImagesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.images) {
            image_1.Image.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListImagesResponse };
        message.images = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.images.push(image_1.Image.decode(reader, reader.uint32()));
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
        const message = { ...baseListImagesResponse };
        message.images = [];
        if (object.images !== undefined && object.images !== null) {
            for (const e of object.images) {
                message.images.push(image_1.Image.fromJSON(e));
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
        if (message.images) {
            obj.images = message.images.map((e) => e ? image_1.Image.toJSON(e) : undefined);
        }
        else {
            obj.images = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListImagesResponse };
        message.images = [];
        if (object.images !== undefined && object.images !== null) {
            for (const e of object.images) {
                message.images.push(image_1.Image.fromPartial(e));
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
const baseCreateImageRequest = {
    folderId: '',
    name: '',
    description: '',
    family: '',
    minDiskSize: 0,
    productIds: '',
    pooled: false,
};
exports.CreateImageRequest = {
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
            exports.CreateImageRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.family !== '') {
            writer.uint32(42).string(message.family);
        }
        if (message.minDiskSize !== 0) {
            writer.uint32(48).int64(message.minDiskSize);
        }
        for (const v of message.productIds) {
            writer.uint32(58).string(v);
        }
        if (message.imageId !== undefined) {
            writer.uint32(66).string(message.imageId);
        }
        if (message.diskId !== undefined) {
            writer.uint32(74).string(message.diskId);
        }
        if (message.snapshotId !== undefined) {
            writer.uint32(82).string(message.snapshotId);
        }
        if (message.uri !== undefined) {
            writer.uint32(90).string(message.uri);
        }
        if (message.os !== undefined) {
            image_1.Os.encode(message.os, writer.uint32(98).fork()).ldelim();
        }
        if (message.pooled === true) {
            writer.uint32(136).bool(message.pooled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateImageRequest };
        message.labels = {};
        message.productIds = [];
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
                    const entry4 = exports.CreateImageRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.family = reader.string();
                    break;
                case 6:
                    message.minDiskSize = longToNumber(reader.int64());
                    break;
                case 7:
                    message.productIds.push(reader.string());
                    break;
                case 8:
                    message.imageId = reader.string();
                    break;
                case 9:
                    message.diskId = reader.string();
                    break;
                case 10:
                    message.snapshotId = reader.string();
                    break;
                case 11:
                    message.uri = reader.string();
                    break;
                case 12:
                    message.os = image_1.Os.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.pooled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateImageRequest };
        message.labels = {};
        message.productIds = [];
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
        if (object.family !== undefined && object.family !== null) {
            message.family = String(object.family);
        }
        else {
            message.family = '';
        }
        if (object.minDiskSize !== undefined && object.minDiskSize !== null) {
            message.minDiskSize = Number(object.minDiskSize);
        }
        else {
            message.minDiskSize = 0;
        }
        if (object.productIds !== undefined && object.productIds !== null) {
            for (const e of object.productIds) {
                message.productIds.push(String(e));
            }
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = undefined;
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = undefined;
        }
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        }
        else {
            message.snapshotId = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = undefined;
        }
        if (object.os !== undefined && object.os !== null) {
            message.os = image_1.Os.fromJSON(object.os);
        }
        else {
            message.os = undefined;
        }
        if (object.pooled !== undefined && object.pooled !== null) {
            message.pooled = Boolean(object.pooled);
        }
        else {
            message.pooled = false;
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
        message.family !== undefined && (obj.family = message.family);
        message.minDiskSize !== undefined &&
            (obj.minDiskSize = message.minDiskSize);
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        }
        else {
            obj.productIds = [];
        }
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        message.uri !== undefined && (obj.uri = message.uri);
        message.os !== undefined &&
            (obj.os = message.os ? image_1.Os.toJSON(message.os) : undefined);
        message.pooled !== undefined && (obj.pooled = message.pooled);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateImageRequest };
        message.labels = {};
        message.productIds = [];
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
        if (object.family !== undefined && object.family !== null) {
            message.family = object.family;
        }
        else {
            message.family = '';
        }
        if (object.minDiskSize !== undefined && object.minDiskSize !== null) {
            message.minDiskSize = object.minDiskSize;
        }
        else {
            message.minDiskSize = 0;
        }
        if (object.productIds !== undefined && object.productIds !== null) {
            for (const e of object.productIds) {
                message.productIds.push(e);
            }
        }
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = undefined;
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = undefined;
        }
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        }
        else {
            message.snapshotId = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = undefined;
        }
        if (object.os !== undefined && object.os !== null) {
            message.os = image_1.Os.fromPartial(object.os);
        }
        else {
            message.os = undefined;
        }
        if (object.pooled !== undefined && object.pooled !== null) {
            message.pooled = object.pooled;
        }
        else {
            message.pooled = false;
        }
        return message;
    },
};
const baseCreateImageRequest_LabelsEntry = { key: '', value: '' };
exports.CreateImageRequest_LabelsEntry = {
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
            ...baseCreateImageRequest_LabelsEntry,
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
            ...baseCreateImageRequest_LabelsEntry,
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
            ...baseCreateImageRequest_LabelsEntry,
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
const baseCreateImageMetadata = { imageId: '' };
exports.CreateImageMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateImageMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateImageMetadata };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateImageMetadata };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
        }
        return message;
    },
};
const baseUpdateImageRequest = {
    imageId: '',
    name: '',
    description: '',
    minDiskSize: 0,
};
exports.UpdateImageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
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
        if (message.minDiskSize !== 0) {
            writer.uint32(40).int64(message.minDiskSize);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateImageRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateImageRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
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
                    message.minDiskSize = longToNumber(reader.int64());
                    break;
                case 6:
                    const entry6 = exports.UpdateImageRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
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
        const message = { ...baseUpdateImageRequest };
        message.labels = {};
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
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
        if (object.minDiskSize !== undefined && object.minDiskSize !== null) {
            message.minDiskSize = Number(object.minDiskSize);
        }
        else {
            message.minDiskSize = 0;
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
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.minDiskSize !== undefined &&
            (obj.minDiskSize = message.minDiskSize);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateImageRequest };
        message.labels = {};
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
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
        if (object.minDiskSize !== undefined && object.minDiskSize !== null) {
            message.minDiskSize = object.minDiskSize;
        }
        else {
            message.minDiskSize = 0;
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
const baseUpdateImageRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateImageRequest_LabelsEntry = {
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
            ...baseUpdateImageRequest_LabelsEntry,
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
            ...baseUpdateImageRequest_LabelsEntry,
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
            ...baseUpdateImageRequest_LabelsEntry,
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
const baseUpdateImageMetadata = { imageId: '' };
exports.UpdateImageMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateImageMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateImageMetadata };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateImageMetadata };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
        }
        return message;
    },
};
const baseDeleteImageRequest = { imageId: '' };
exports.DeleteImageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteImageRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteImageRequest };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteImageRequest };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
        }
        return message;
    },
};
const baseDeleteImageMetadata = { imageId: '' };
exports.DeleteImageMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteImageMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteImageMetadata };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteImageMetadata };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
        }
        return message;
    },
};
const baseListImageOperationsRequest = {
    imageId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListImageOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
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
            ...baseListImageOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
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
            ...baseListImageOperationsRequest,
        };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        }
        else {
            message.imageId = '';
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
        message.imageId !== undefined && (obj.imageId = message.imageId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListImageOperationsRequest,
        };
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        }
        else {
            message.imageId = '';
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
const baseListImageOperationsResponse = { nextPageToken: '' };
exports.ListImageOperationsResponse = {
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
            ...baseListImageOperationsResponse,
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
            ...baseListImageOperationsResponse,
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
            ...baseListImageOperationsResponse,
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
/** A set of methods for managing Image resources. */
exports.ImageServiceService = {
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.ImageService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(image_1.Image.encode(value).finish()),
        responseDeserialize: (value) => image_1.Image.decode(value),
    },
    /** Returns the latest image that is part of an image family. */
    getLatestByFamily: {
        path: '/yandex.cloud.compute.v1.ImageService/GetLatestByFamily',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetImageLatestByFamilyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetImageLatestByFamilyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(image_1.Image.encode(value).finish()),
        responseDeserialize: (value) => image_1.Image.decode(value),
    },
    /** Retrieves the list of Image resources in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.ImageService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListImagesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListImagesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListImagesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListImagesResponse.decode(value),
    },
    /**
     * Creates an image in the specified folder.
     *
     * You can create an image from a disk, snapshot, other image or URI.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.compute.v1.ImageService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified image. */
    update: {
        path: '/yandex.cloud.compute.v1.ImageService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified image.
     *
     * Deleting an image removes its data permanently and is irreversible.
     */
    delete: {
        path: '/yandex.cloud.compute.v1.ImageService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteImageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteImageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified image. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.ImageService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListImageOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListImageOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListImageOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListImageOperationsResponse.decode(value),
    },
};
exports.ImageServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ImageServiceService, 'yandex.cloud.compute.v1.ImageService');
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
