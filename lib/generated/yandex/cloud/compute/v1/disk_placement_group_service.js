/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Disk } from '../../../../yandex/cloud/compute/v1/disk';
import { DiskPlacementGroup, DiskSpreadPlacementStrategy, } from '../../../../yandex/cloud/compute/v1/disk_placement_group';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.compute.v1';
const baseGetDiskPlacementGroupRequest = { diskPlacementGroupId: '' };
export const GetDiskPlacementGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListDiskPlacementGroupsRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListDiskPlacementGroupsRequest = {
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
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListDiskPlacementGroupsResponse = { nextPageToken: '' };
export const ListDiskPlacementGroupsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.diskPlacementGroups) {
            DiskPlacementGroup.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListDiskPlacementGroupsResponse,
        };
        message.diskPlacementGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskPlacementGroups.push(DiskPlacementGroup.decode(reader, reader.uint32()));
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
                message.diskPlacementGroups.push(DiskPlacementGroup.fromJSON(e));
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
            obj.diskPlacementGroups = message.diskPlacementGroups.map((e) => e ? DiskPlacementGroup.toJSON(e) : undefined);
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
                message.diskPlacementGroups.push(DiskPlacementGroup.fromPartial(e));
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
const baseCreateDiskPlacementGroupRequest = {
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
};
export const CreateDiskPlacementGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
            CreateDiskPlacementGroupRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(42).string(message.zoneId);
        }
        if (message.spreadPlacementStrategy !== undefined) {
            DiskSpreadPlacementStrategy.encode(message.spreadPlacementStrategy, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    const entry4 = CreateDiskPlacementGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zoneId = reader.string();
                    break;
                case 6:
                    message.spreadPlacementStrategy =
                        DiskSpreadPlacementStrategy.decode(reader, reader.uint32());
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
                DiskSpreadPlacementStrategy.fromJSON(object.spreadPlacementStrategy);
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
                ? DiskSpreadPlacementStrategy.toJSON(message.spreadPlacementStrategy)
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
                DiskSpreadPlacementStrategy.fromPartial(object.spreadPlacementStrategy);
        }
        else {
            message.spreadPlacementStrategy = undefined;
        }
        return message;
    },
};
const baseCreateDiskPlacementGroupRequest_LabelsEntry = {
    key: '',
    value: '',
};
export const CreateDiskPlacementGroupRequest_LabelsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseCreateDiskPlacementGroupMetadata = {
    diskPlacementGroupId: '',
};
export const CreateDiskPlacementGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseUpdateDiskPlacementGroupRequest = {
    diskPlacementGroupId: '',
    name: '',
    description: '',
};
export const UpdateDiskPlacementGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateDiskPlacementGroupRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateDiskPlacementGroupRequest_LabelsEntry.decode(reader, reader.uint32());
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
            message.updateMask = FieldMask.fromJSON(object.updateMask);
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
                ? FieldMask.toJSON(message.updateMask)
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
            message.updateMask = FieldMask.fromPartial(object.updateMask);
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
const baseUpdateDiskPlacementGroupRequest_LabelsEntry = {
    key: '',
    value: '',
};
export const UpdateDiskPlacementGroupRequest_LabelsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseUpdateDiskPlacementGroupMetadata = {
    diskPlacementGroupId: '',
};
export const UpdateDiskPlacementGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteDiskPlacementGroupRequest = {
    diskPlacementGroupId: '',
};
export const DeleteDiskPlacementGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteDiskPlacementGroupMetadata = {
    diskPlacementGroupId: '',
};
export const DeleteDiskPlacementGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.diskPlacementGroupId !== '') {
            writer.uint32(10).string(message.diskPlacementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListDiskPlacementGroupDisksRequest = {
    diskPlacementGroupId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListDiskPlacementGroupDisksRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListDiskPlacementGroupDisksResponse = { nextPageToken: '' };
export const ListDiskPlacementGroupDisksResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.disks) {
            Disk.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListDiskPlacementGroupDisksResponse,
        };
        message.disks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disks.push(Disk.decode(reader, reader.uint32()));
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
                message.disks.push(Disk.fromJSON(e));
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
            obj.disks = message.disks.map((e) => e ? Disk.toJSON(e) : undefined);
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
                message.disks.push(Disk.fromPartial(e));
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
const baseListDiskPlacementGroupOperationsRequest = {
    diskPlacementGroupId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListDiskPlacementGroupOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListDiskPlacementGroupOperationsResponse = {
    nextPageToken: '',
};
export const ListDiskPlacementGroupOperationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.operations) {
            Operation.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListDiskPlacementGroupOperationsResponse,
        };
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(Operation.decode(reader, reader.uint32()));
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
                message.operations.push(Operation.fromJSON(e));
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
            obj.operations = message.operations.map((e) => e ? Operation.toJSON(e) : undefined);
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
                message.operations.push(Operation.fromPartial(e));
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
/** A set of methods for managing DiskPlacementGroup resources. */
export const DiskPlacementGroupServiceService = {
    /** Returns the specified placement group. */
    get: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => GetDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(DiskPlacementGroup.encode(value).finish()),
        responseDeserialize: (value) => DiskPlacementGroup.decode(value),
    },
    /** Retrieves the list of placement groups in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDiskPlacementGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDiskPlacementGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDiskPlacementGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDiskPlacementGroupsResponse.decode(value),
    },
    /** Creates a placement group in the specified folder. */
    create: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified placement group. */
    update: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified placement group. */
    delete: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteDiskPlacementGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteDiskPlacementGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists disks for the specified placement group. */
    listDisks: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/ListDisks',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDiskPlacementGroupDisksRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDiskPlacementGroupDisksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDiskPlacementGroupDisksResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDiskPlacementGroupDisksResponse.decode(value),
    },
    /** Lists operations for the specified placement group. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDiskPlacementGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDiskPlacementGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDiskPlacementGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDiskPlacementGroupOperationsResponse.decode(value),
    },
};
export const DiskPlacementGroupServiceClient = makeGenericClientConstructor(DiskPlacementGroupServiceService, 'yandex.cloud.compute.v1.DiskPlacementGroupService');
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
