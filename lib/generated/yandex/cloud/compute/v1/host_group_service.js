/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { HostGroup, ScalePolicy, Host, maintenancePolicyFromJSON, maintenancePolicyToJSON, } from '../../../../yandex/cloud/compute/v1/host_group';
import { Instance } from '../../../../yandex/cloud/compute/v1/instance';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.compute.v1';
const baseGetHostGroupRequest = { hostGroupId: '' };
export const GetHostGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListHostGroupsRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListHostGroupsRequest = {
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
const baseListHostGroupsResponse = { nextPageToken: '' };
export const ListHostGroupsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.hostGroups) {
            HostGroup.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListHostGroupsResponse,
        };
        message.hostGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostGroups.push(HostGroup.decode(reader, reader.uint32()));
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
                message.hostGroups.push(HostGroup.fromJSON(e));
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
            obj.hostGroups = message.hostGroups.map((e) => e ? HostGroup.toJSON(e) : undefined);
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
                message.hostGroups.push(HostGroup.fromPartial(e));
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
const baseCreateHostGroupRequest = {
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    typeId: '',
    maintenancePolicy: 0,
};
export const CreateHostGroupRequest = {
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
            CreateHostGroupRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
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
            ScalePolicy.encode(message.scalePolicy, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    const entry4 = CreateHostGroupRequest_LabelsEntry.decode(reader, reader.uint32());
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
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
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
            message.maintenancePolicy = maintenancePolicyFromJSON(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = 0;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
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
            (obj.maintenancePolicy = maintenancePolicyToJSON(message.maintenancePolicy));
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
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
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        return message;
    },
};
const baseCreateHostGroupRequest_LabelsEntry = { key: '', value: '' };
export const CreateHostGroupRequest_LabelsEntry = {
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
const baseCreateHostGroupMetadata = { hostGroupId: '' };
export const CreateHostGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseUpdateHostGroupRequest = {
    hostGroupId: '',
    name: '',
    description: '',
    maintenancePolicy: 0,
};
export const UpdateHostGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
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
            UpdateHostGroupRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.maintenancePolicy !== 0) {
            writer.uint32(48).int32(message.maintenancePolicy);
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateHostGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.maintenancePolicy = reader.int32();
                    break;
                case 7:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
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
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = maintenancePolicyFromJSON(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = 0;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
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
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = maintenancePolicyToJSON(message.maintenancePolicy));
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
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
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = object.maintenancePolicy;
        }
        else {
            message.maintenancePolicy = 0;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        return message;
    },
};
const baseUpdateHostGroupRequest_LabelsEntry = { key: '', value: '' };
export const UpdateHostGroupRequest_LabelsEntry = {
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
const baseUpdateHostGroupMetadata = { hostGroupId: '' };
export const UpdateHostGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteHostGroupRequest = { hostGroupId: '' };
export const DeleteHostGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteHostGroupMetadata = { hostGroupId: '' };
export const DeleteHostGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hostGroupId !== '') {
            writer.uint32(10).string(message.hostGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListHostGroupInstancesRequest = {
    hostGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListHostGroupInstancesRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListHostGroupInstancesResponse = { nextPageToken: '' };
export const ListHostGroupInstancesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.instances) {
            Instance.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListHostGroupInstancesResponse,
        };
        message.instances = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instances.push(Instance.decode(reader, reader.uint32()));
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
                message.instances.push(Instance.fromJSON(e));
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
            obj.instances = message.instances.map((e) => e ? Instance.toJSON(e) : undefined);
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
                message.instances.push(Instance.fromPartial(e));
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
const baseListHostGroupHostsRequest = {
    hostGroupId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListHostGroupHostsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListHostGroupHostsResponse = { nextPageToken: '' };
export const ListHostGroupHostsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.hosts) {
            Host.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListHostGroupHostsResponse,
        };
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(Host.decode(reader, reader.uint32()));
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
                message.hosts.push(Host.fromJSON(e));
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
            obj.hosts = message.hosts.map((e) => e ? Host.toJSON(e) : undefined);
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
                message.hosts.push(Host.fromPartial(e));
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
const baseListHostGroupOperationsRequest = {
    hostGroupId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListHostGroupOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListHostGroupOperationsResponse = { nextPageToken: '' };
export const ListHostGroupOperationsResponse = {
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
            ...baseListHostGroupOperationsResponse,
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
            ...baseListHostGroupOperationsResponse,
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
            ...baseListHostGroupOperationsResponse,
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
/** A set of methods for managing groups of dedicated hosts. */
export const HostGroupServiceService = {
    /** Returns the specified host group. */
    get: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => GetHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(HostGroup.encode(value).finish()),
        responseDeserialize: (value) => HostGroup.decode(value),
    },
    /** Retrieves the list of host groups in the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.HostGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListHostGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListHostGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListHostGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListHostGroupsResponse.decode(value),
    },
    /** Creates a host group in the specified folder. */
    create: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified host group. */
    update: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified host group. */
    delete: {
        path: '/yandex.cloud.compute.v1.HostGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteHostGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteHostGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified host group. */
    listOperations: {
        path: '/yandex.cloud.compute.v1.HostGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListHostGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListHostGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListHostGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListHostGroupOperationsResponse.decode(value),
    },
    /** Lists instances that belongs to the specified host group. */
    listInstances: {
        path: '/yandex.cloud.compute.v1.HostGroupService/ListInstances',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListHostGroupInstancesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListHostGroupInstancesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListHostGroupInstancesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListHostGroupInstancesResponse.decode(value),
    },
    /** Lists hosts that belongs to the specified host group. */
    listHosts: {
        path: '/yandex.cloud.compute.v1.HostGroupService/ListHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListHostGroupHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListHostGroupHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListHostGroupHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListHostGroupHostsResponse.decode(value),
    },
};
export const HostGroupServiceClient = makeGenericClientConstructor(HostGroupServiceService, 'yandex.cloud.compute.v1.HostGroupService');
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
