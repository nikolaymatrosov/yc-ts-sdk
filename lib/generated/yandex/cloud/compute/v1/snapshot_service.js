"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotServiceClient = exports.SnapshotServiceService = exports.ListSnapshotOperationsResponse = exports.ListSnapshotOperationsRequest = exports.DeleteSnapshotMetadata = exports.DeleteSnapshotRequest = exports.UpdateSnapshotMetadata = exports.UpdateSnapshotRequest_LabelsEntry = exports.UpdateSnapshotRequest = exports.CreateSnapshotMetadata = exports.CreateSnapshotRequest_LabelsEntry = exports.CreateSnapshotRequest = exports.ListSnapshotsResponse = exports.ListSnapshotsRequest = exports.GetSnapshotRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const snapshot_1 = require("../../../../yandex/cloud/compute/v1/snapshot");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.compute.v1';
const baseGetSnapshotRequest = { snapshotId: '' };
exports.GetSnapshotRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSnapshotRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetSnapshotRequest };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        }
        else {
            message.snapshotId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetSnapshotRequest };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        }
        else {
            message.snapshotId = '';
        }
        return message;
    },
};
const baseListSnapshotsRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListSnapshotsRequest = {
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
        const message = { ...baseListSnapshotsRequest };
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
        const message = { ...baseListSnapshotsRequest };
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
        const message = { ...baseListSnapshotsRequest };
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
const baseListSnapshotsResponse = { nextPageToken: '' };
exports.ListSnapshotsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.snapshots) {
            snapshot_1.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListSnapshotsResponse,
        };
        message.snapshots = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(snapshot_1.Snapshot.decode(reader, reader.uint32()));
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
            ...baseListSnapshotsResponse,
        };
        message.snapshots = [];
        if (object.snapshots !== undefined && object.snapshots !== null) {
            for (const e of object.snapshots) {
                message.snapshots.push(snapshot_1.Snapshot.fromJSON(e));
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
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map((e) => e ? snapshot_1.Snapshot.toJSON(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSnapshotsResponse,
        };
        message.snapshots = [];
        if (object.snapshots !== undefined && object.snapshots !== null) {
            for (const e of object.snapshots) {
                message.snapshots.push(snapshot_1.Snapshot.fromPartial(e));
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
const baseCreateSnapshotRequest = {
    folderId: '',
    diskId: '',
    name: '',
    description: '',
};
exports.CreateSnapshotRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.diskId !== '') {
            writer.uint32(18).string(message.diskId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateSnapshotRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSnapshotRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.diskId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.CreateSnapshotRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = {
            ...baseCreateSnapshotRequest,
        };
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        }
        else {
            message.diskId = '';
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
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
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
            ...baseCreateSnapshotRequest,
        };
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
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
const baseCreateSnapshotRequest_LabelsEntry = { key: '', value: '' };
exports.CreateSnapshotRequest_LabelsEntry = {
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
            ...baseCreateSnapshotRequest_LabelsEntry,
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
            ...baseCreateSnapshotRequest_LabelsEntry,
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
            ...baseCreateSnapshotRequest_LabelsEntry,
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
const baseCreateSnapshotMetadata = { snapshotId: '', diskId: '' };
exports.CreateSnapshotMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
        }
        if (message.diskId !== '') {
            writer.uint32(18).string(message.diskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSnapshotMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                case 2:
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
        const message = {
            ...baseCreateSnapshotMetadata,
        };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        }
        else {
            message.snapshotId = '';
        }
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
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateSnapshotMetadata,
        };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        }
        else {
            message.snapshotId = '';
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        }
        else {
            message.diskId = '';
        }
        return message;
    },
};
const baseUpdateSnapshotRequest = {
    snapshotId: '',
    name: '',
    description: '',
};
exports.UpdateSnapshotRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
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
            exports.UpdateSnapshotRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSnapshotRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
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
                    const entry5 = exports.UpdateSnapshotRequest_LabelsEntry.decode(reader, reader.uint32());
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
            ...baseUpdateSnapshotRequest,
        };
        message.labels = {};
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        }
        else {
            message.snapshotId = '';
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
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
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
            ...baseUpdateSnapshotRequest,
        };
        message.labels = {};
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        }
        else {
            message.snapshotId = '';
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
const baseUpdateSnapshotRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateSnapshotRequest_LabelsEntry = {
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
            ...baseUpdateSnapshotRequest_LabelsEntry,
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
            ...baseUpdateSnapshotRequest_LabelsEntry,
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
            ...baseUpdateSnapshotRequest_LabelsEntry,
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
const baseUpdateSnapshotMetadata = { snapshotId: '' };
exports.UpdateSnapshotMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSnapshotMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
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
            ...baseUpdateSnapshotMetadata,
        };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        }
        else {
            message.snapshotId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateSnapshotMetadata,
        };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        }
        else {
            message.snapshotId = '';
        }
        return message;
    },
};
const baseDeleteSnapshotRequest = { snapshotId: '' };
exports.DeleteSnapshotRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSnapshotRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
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
            ...baseDeleteSnapshotRequest,
        };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        }
        else {
            message.snapshotId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteSnapshotRequest,
        };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        }
        else {
            message.snapshotId = '';
        }
        return message;
    },
};
const baseDeleteSnapshotMetadata = { snapshotId: '' };
exports.DeleteSnapshotMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSnapshotMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
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
            ...baseDeleteSnapshotMetadata,
        };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        }
        else {
            message.snapshotId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteSnapshotMetadata,
        };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        }
        else {
            message.snapshotId = '';
        }
        return message;
    },
};
const baseListSnapshotOperationsRequest = {
    snapshotId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListSnapshotOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshotId !== '') {
            writer.uint32(10).string(message.snapshotId);
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
            ...baseListSnapshotOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
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
            ...baseListSnapshotOperationsRequest,
        };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = String(object.snapshotId);
        }
        else {
            message.snapshotId = '';
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
        message.snapshotId !== undefined &&
            (obj.snapshotId = message.snapshotId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSnapshotOperationsRequest,
        };
        if (object.snapshotId !== undefined && object.snapshotId !== null) {
            message.snapshotId = object.snapshotId;
        }
        else {
            message.snapshotId = '';
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
const baseListSnapshotOperationsResponse = { nextPageToken: '' };
exports.ListSnapshotOperationsResponse = {
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
            ...baseListSnapshotOperationsResponse,
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
            ...baseListSnapshotOperationsResponse,
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
            ...baseListSnapshotOperationsResponse,
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
/** A set of methods for managing Snapshot resources. */
exports.SnapshotServiceService = {
    /**
     * Returns the specified Snapshot resource.
     *
     * To get the list of available Snapshot resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.SnapshotService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSnapshotRequest.decode(value),
        responseSerialize: (value) => Buffer.from(snapshot_1.Snapshot.encode(value).finish()),
        responseDeserialize: (value) => snapshot_1.Snapshot.decode(value),
    },
    /** Retrieves the list of Snapshot resources in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.SnapshotService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSnapshotsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSnapshotsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSnapshotsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSnapshotsResponse.decode(value),
    },
    /** Creates a snapshot of the specified disk. */
    create: {
        path: '/yandex.cloud.compute.v1.SnapshotService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSnapshotRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified snapshot.
     *
     * Values of omitted parameters are not changed.
     */
    update: {
        path: '/yandex.cloud.compute.v1.SnapshotService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSnapshotRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Deletes the specified snapshot.
     *
     * Deleting a snapshot removes its data permanently and is irreversible.
     */
    delete: {
        path: '/yandex.cloud.compute.v1.SnapshotService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSnapshotRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSnapshotRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified snapshot. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.SnapshotService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSnapshotOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSnapshotOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSnapshotOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSnapshotOperationsResponse.decode(value),
    },
};
exports.SnapshotServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SnapshotServiceService, 'yandex.cloud.compute.v1.SnapshotService');
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
