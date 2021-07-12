/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest, } from '../../../../yandex/cloud/access/access';
import { IpPermission, IpPermissionDelta, } from '../../../../yandex/cloud/containerregistry/v1/ip_permission';
import { Registry } from '../../../../yandex/cloud/containerregistry/v1/registry';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.containerregistry.v1';
const baseGetRegistryRequest = { registryId: '' };
export const GetRegistryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRegistryRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetRegistryRequest };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetRegistryRequest };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        return message;
    },
};
const baseListRegistriesRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListRegistriesRequest = {
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
            ...baseListRegistriesRequest,
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
            ...baseListRegistriesRequest,
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
            ...baseListRegistriesRequest,
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
const baseListRegistriesResponse = { nextPageToken: '' };
export const ListRegistriesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.registries) {
            Registry.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListRegistriesResponse,
        };
        message.registries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registries.push(Registry.decode(reader, reader.uint32()));
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
            ...baseListRegistriesResponse,
        };
        message.registries = [];
        if (object.registries !== undefined && object.registries !== null) {
            for (const e of object.registries) {
                message.registries.push(Registry.fromJSON(e));
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
        if (message.registries) {
            obj.registries = message.registries.map((e) => e ? Registry.toJSON(e) : undefined);
        }
        else {
            obj.registries = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListRegistriesResponse,
        };
        message.registries = [];
        if (object.registries !== undefined && object.registries !== null) {
            for (const e of object.registries) {
                message.registries.push(Registry.fromPartial(e));
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
const baseCreateRegistryRequest = { folderId: '', name: '' };
export const CreateRegistryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateRegistryRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegistryRequest,
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
                    const entry3 = CreateRegistryRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.labels[entry3.key] = entry3.value;
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
            ...baseCreateRegistryRequest,
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
        message.name !== undefined && (obj.name = message.name);
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
            ...baseCreateRegistryRequest,
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
const baseCreateRegistryRequest_LabelsEntry = { key: '', value: '' };
export const CreateRegistryRequest_LabelsEntry = {
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
            ...baseCreateRegistryRequest_LabelsEntry,
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
            ...baseCreateRegistryRequest_LabelsEntry,
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
            ...baseCreateRegistryRequest_LabelsEntry,
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
const baseCreateRegistryMetadata = { registryId: '' };
export const CreateRegistryMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegistryMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseCreateRegistryMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateRegistryMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        return message;
    },
};
const baseUpdateRegistryRequest = { registryId: '', name: '' };
export const UpdateRegistryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateRegistryRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRegistryRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    const entry4 = UpdateRegistryRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
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
            ...baseUpdateRegistryRequest,
        };
        message.labels = {};
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
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
            ...baseUpdateRegistryRequest,
        };
        message.labels = {};
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
const baseUpdateRegistryRequest_LabelsEntry = { key: '', value: '' };
export const UpdateRegistryRequest_LabelsEntry = {
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
            ...baseUpdateRegistryRequest_LabelsEntry,
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
            ...baseUpdateRegistryRequest_LabelsEntry,
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
            ...baseUpdateRegistryRequest_LabelsEntry,
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
const baseUpdateRegistryMetadata = { registryId: '' };
export const UpdateRegistryMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRegistryMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseUpdateRegistryMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateRegistryMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        return message;
    },
};
const baseDeleteRegistryRequest = { registryId: '' };
export const DeleteRegistryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegistryRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseDeleteRegistryRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteRegistryRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        return message;
    },
};
const baseDeleteRegistryMetadata = { registryId: '' };
export const DeleteRegistryMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRegistryMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseDeleteRegistryMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteRegistryMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        return message;
    },
};
const baseSetIpPermissionRequest = { registryId: '' };
export const SetIpPermissionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        for (const v of message.ipPermission) {
            IpPermission.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetIpPermissionRequest,
        };
        message.ipPermission = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.ipPermission.push(IpPermission.decode(reader, reader.uint32()));
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
            ...baseSetIpPermissionRequest,
        };
        message.ipPermission = [];
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        if (object.ipPermission !== undefined && object.ipPermission !== null) {
            for (const e of object.ipPermission) {
                message.ipPermission.push(IpPermission.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        if (message.ipPermission) {
            obj.ipPermission = message.ipPermission.map((e) => e ? IpPermission.toJSON(e) : undefined);
        }
        else {
            obj.ipPermission = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSetIpPermissionRequest,
        };
        message.ipPermission = [];
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        if (object.ipPermission !== undefined && object.ipPermission !== null) {
            for (const e of object.ipPermission) {
                message.ipPermission.push(IpPermission.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateIpPermissionRequest = { registryId: '' };
export const UpdateIpPermissionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        for (const v of message.ipPermissionDeltas) {
            IpPermissionDelta.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateIpPermissionRequest,
        };
        message.ipPermissionDeltas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.ipPermissionDeltas.push(IpPermissionDelta.decode(reader, reader.uint32()));
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
            ...baseUpdateIpPermissionRequest,
        };
        message.ipPermissionDeltas = [];
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        if (object.ipPermissionDeltas !== undefined &&
            object.ipPermissionDeltas !== null) {
            for (const e of object.ipPermissionDeltas) {
                message.ipPermissionDeltas.push(IpPermissionDelta.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        if (message.ipPermissionDeltas) {
            obj.ipPermissionDeltas = message.ipPermissionDeltas.map((e) => e ? IpPermissionDelta.toJSON(e) : undefined);
        }
        else {
            obj.ipPermissionDeltas = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateIpPermissionRequest,
        };
        message.ipPermissionDeltas = [];
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        if (object.ipPermissionDeltas !== undefined &&
            object.ipPermissionDeltas !== null) {
            for (const e of object.ipPermissionDeltas) {
                message.ipPermissionDeltas.push(IpPermissionDelta.fromPartial(e));
            }
        }
        return message;
    },
};
const baseListIpPermissionRequest = { registryId: '' };
export const ListIpPermissionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListIpPermissionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseListIpPermissionRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListIpPermissionRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        return message;
    },
};
const baseListIpPermissionsResponse = {};
export const ListIpPermissionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.permissions) {
            IpPermission.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListIpPermissionsResponse,
        };
        message.permissions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.permissions.push(IpPermission.decode(reader, reader.uint32()));
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
            ...baseListIpPermissionsResponse,
        };
        message.permissions = [];
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(IpPermission.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.permissions) {
            obj.permissions = message.permissions.map((e) => e ? IpPermission.toJSON(e) : undefined);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListIpPermissionsResponse,
        };
        message.permissions = [];
        if (object.permissions !== undefined && object.permissions !== null) {
            for (const e of object.permissions) {
                message.permissions.push(IpPermission.fromPartial(e));
            }
        }
        return message;
    },
};
const baseSetIpPermissionMetadata = { registryId: '' };
export const SetIpPermissionMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetIpPermissionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseSetIpPermissionMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSetIpPermissionMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        return message;
    },
};
const baseUpdateIpPermissionMetadata = { registryId: '' };
export const UpdateIpPermissionMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateIpPermissionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseUpdateIpPermissionMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateIpPermissionMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        return message;
    },
};
/** A set of methods for managing Registry resources. */
export const RegistryServiceService = {
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.containerregistry.v1.RegistryService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => GetRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Registry.encode(value).finish()),
        responseDeserialize: (value) => Registry.decode(value),
    },
    /** Retrieves the list of Registry resources in the specified folder. */
    list: {
        path: '/yandex.cloud.containerregistry.v1.RegistryService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListRegistriesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListRegistriesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListRegistriesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListRegistriesResponse.decode(value),
    },
    /** Creates a registry in the specified folder. */
    create: {
        path: '/yandex.cloud.containerregistry.v1.RegistryService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified registry. */
    update: {
        path: '/yandex.cloud.containerregistry.v1.RegistryService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified registry. */
    delete: {
        path: '/yandex.cloud.containerregistry.v1.RegistryService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists access bindings for the specified registry. */
    listAccessBindings: {
        path: '/yandex.cloud.containerregistry.v1.RegistryService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified registry. */
    setAccessBindings: {
        path: '/yandex.cloud.containerregistry.v1.RegistryService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates access bindings for the specified registry. */
    updateAccessBindings: {
        path: '/yandex.cloud.containerregistry.v1.RegistryService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** List ip permissions for the specified registry. */
    listIpPermission: {
        path: '/yandex.cloud.containerregistry.v1.RegistryService/ListIpPermission',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListIpPermissionRequest.encode(value).finish()),
        requestDeserialize: (value) => ListIpPermissionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListIpPermissionsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListIpPermissionsResponse.decode(value),
    },
    /** Set ip permissions for the specified registry. */
    setIpPermission: {
        path: '/yandex.cloud.containerregistry.v1.RegistryService/SetIpPermission',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SetIpPermissionRequest.encode(value).finish()),
        requestDeserialize: (value) => SetIpPermissionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Update ip permissions for the specified registry. */
    updateIpPermission: {
        path: '/yandex.cloud.containerregistry.v1.RegistryService/UpdateIpPermission',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateIpPermissionRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateIpPermissionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const RegistryServiceClient = makeGenericClientConstructor(RegistryServiceService, 'yandex.cloud.containerregistry.v1.RegistryService');
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
