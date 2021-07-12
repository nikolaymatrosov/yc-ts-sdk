/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Device, DeviceCertificate, DevicePassword, deviceViewFromJSON, deviceViewToJSON, } from '../../../../../yandex/cloud/iot/devices/v1/device';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.iot.devices.v1';
const baseGetDeviceRequest = { deviceId: '', deviceView: 0 };
export const GetDeviceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.deviceView !== 0) {
            writer.uint32(16).int32(message.deviceView);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDeviceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.deviceView = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetDeviceRequest };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = deviceViewFromJSON(object.deviceView);
        }
        else {
            message.deviceView = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.deviceView !== undefined &&
            (obj.deviceView = deviceViewToJSON(message.deviceView));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetDeviceRequest };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = object.deviceView;
        }
        else {
            message.deviceView = 0;
        }
        return message;
    },
};
const baseGetByNameDeviceRequest = {
    registryId: '',
    deviceName: '',
    deviceView: 0,
};
export const GetByNameDeviceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.deviceName !== '') {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.deviceView !== 0) {
            writer.uint32(24).int32(message.deviceView);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetByNameDeviceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.deviceView = reader.int32();
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
            ...baseGetByNameDeviceRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        }
        else {
            message.deviceName = '';
        }
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = deviceViewFromJSON(object.deviceView);
        }
        else {
            message.deviceView = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        message.deviceView !== undefined &&
            (obj.deviceView = deviceViewToJSON(message.deviceView));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetByNameDeviceRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        }
        else {
            message.deviceName = '';
        }
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = object.deviceView;
        }
        else {
            message.deviceView = 0;
        }
        return message;
    },
};
const baseListDevicesRequest = {
    pageSize: 0,
    pageToken: '',
    deviceView: 0,
};
export const ListDevicesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== undefined) {
            writer.uint32(10).string(message.registryId);
        }
        if (message.folderId !== undefined) {
            writer.uint32(18).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.deviceView !== 0) {
            writer.uint32(40).int32(message.deviceView);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDevicesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.deviceView = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListDevicesRequest };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = undefined;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = undefined;
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
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = deviceViewFromJSON(object.deviceView);
        }
        else {
            message.deviceView = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.deviceView !== undefined &&
            (obj.deviceView = deviceViewToJSON(message.deviceView));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListDevicesRequest };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = undefined;
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = undefined;
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
        if (object.deviceView !== undefined && object.deviceView !== null) {
            message.deviceView = object.deviceView;
        }
        else {
            message.deviceView = 0;
        }
        return message;
    },
};
const baseListDevicesResponse = { nextPageToken: '' };
export const ListDevicesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.devices) {
            Device.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDevicesResponse };
        message.devices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.devices.push(Device.decode(reader, reader.uint32()));
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
        const message = { ...baseListDevicesResponse };
        message.devices = [];
        if (object.devices !== undefined && object.devices !== null) {
            for (const e of object.devices) {
                message.devices.push(Device.fromJSON(e));
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
        if (message.devices) {
            obj.devices = message.devices.map((e) => e ? Device.toJSON(e) : undefined);
        }
        else {
            obj.devices = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListDevicesResponse };
        message.devices = [];
        if (object.devices !== undefined && object.devices !== null) {
            for (const e of object.devices) {
                message.devices.push(Device.fromPartial(e));
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
const baseCreateDeviceRequest = {
    registryId: '',
    name: '',
    description: '',
    password: '',
};
export const CreateDeviceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        for (const v of message.certificates) {
            CreateDeviceRequest_Certificate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.topicAliases).forEach(([key, value]) => {
            CreateDeviceRequest_TopicAliasesEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.password !== '') {
            writer.uint32(50).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDeviceRequest };
        message.certificates = [];
        message.topicAliases = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.certificates.push(CreateDeviceRequest_Certificate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    const entry5 = CreateDeviceRequest_TopicAliasesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.topicAliases[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateDeviceRequest };
        message.certificates = [];
        message.topicAliases = {};
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(CreateDeviceRequest_Certificate.fromJSON(e));
            }
        }
        if (object.topicAliases !== undefined && object.topicAliases !== null) {
            Object.entries(object.topicAliases).forEach(([key, value]) => {
                message.topicAliases[key] = String(value);
            });
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        }
        else {
            message.password = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? CreateDeviceRequest_Certificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        obj.topicAliases = {};
        if (message.topicAliases) {
            Object.entries(message.topicAliases).forEach(([k, v]) => {
                obj.topicAliases[k] = v;
            });
        }
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateDeviceRequest };
        message.certificates = [];
        message.topicAliases = {};
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(CreateDeviceRequest_Certificate.fromPartial(e));
            }
        }
        if (object.topicAliases !== undefined && object.topicAliases !== null) {
            Object.entries(object.topicAliases).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.topicAliases[key] = String(value);
                }
            });
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        }
        else {
            message.password = '';
        }
        return message;
    },
};
const baseCreateDeviceRequest_TopicAliasesEntry = {
    key: '',
    value: '',
};
export const CreateDeviceRequest_TopicAliasesEntry = {
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
            ...baseCreateDeviceRequest_TopicAliasesEntry,
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
            ...baseCreateDeviceRequest_TopicAliasesEntry,
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
            ...baseCreateDeviceRequest_TopicAliasesEntry,
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
const baseCreateDeviceRequest_Certificate = { certificateData: '' };
export const CreateDeviceRequest_Certificate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.certificateData !== '') {
            writer.uint32(10).string(message.certificateData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDeviceRequest_Certificate,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateData = reader.string();
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
            ...baseCreateDeviceRequest_Certificate,
        };
        if (object.certificateData !== undefined &&
            object.certificateData !== null) {
            message.certificateData = String(object.certificateData);
        }
        else {
            message.certificateData = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateDeviceRequest_Certificate,
        };
        if (object.certificateData !== undefined &&
            object.certificateData !== null) {
            message.certificateData = object.certificateData;
        }
        else {
            message.certificateData = '';
        }
        return message;
    },
};
const baseCreateDeviceMetadata = { deviceId: '' };
export const CreateDeviceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDeviceMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateDeviceMetadata };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateDeviceMetadata };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
};
const baseUpdateDeviceRequest = {
    deviceId: '',
    name: '',
    description: '',
};
export const UpdateDeviceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
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
        Object.entries(message.topicAliases).forEach(([key, value]) => {
            UpdateDeviceRequest_TopicAliasesEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDeviceRequest };
        message.topicAliases = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
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
                    const entry5 = UpdateDeviceRequest_TopicAliasesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.topicAliases[entry5.key] = entry5.value;
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
        const message = { ...baseUpdateDeviceRequest };
        message.topicAliases = {};
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
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
        if (object.topicAliases !== undefined && object.topicAliases !== null) {
            Object.entries(object.topicAliases).forEach(([key, value]) => {
                message.topicAliases[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.topicAliases = {};
        if (message.topicAliases) {
            Object.entries(message.topicAliases).forEach(([k, v]) => {
                obj.topicAliases[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateDeviceRequest };
        message.topicAliases = {};
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
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
        if (object.topicAliases !== undefined && object.topicAliases !== null) {
            Object.entries(object.topicAliases).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.topicAliases[key] = String(value);
                }
            });
        }
        return message;
    },
};
const baseUpdateDeviceRequest_TopicAliasesEntry = {
    key: '',
    value: '',
};
export const UpdateDeviceRequest_TopicAliasesEntry = {
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
            ...baseUpdateDeviceRequest_TopicAliasesEntry,
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
            ...baseUpdateDeviceRequest_TopicAliasesEntry,
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
            ...baseUpdateDeviceRequest_TopicAliasesEntry,
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
const baseUpdateDeviceMetadata = { deviceId: '' };
export const UpdateDeviceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDeviceMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateDeviceMetadata };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateDeviceMetadata };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
};
const baseDeleteDeviceRequest = { deviceId: '' };
export const DeleteDeviceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDeviceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteDeviceRequest };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteDeviceRequest };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
};
const baseDeleteDeviceMetadata = { deviceId: '' };
export const DeleteDeviceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDeviceMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteDeviceMetadata };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteDeviceMetadata };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
};
const baseListDeviceCertificatesRequest = { deviceId: '' };
export const ListDeviceCertificatesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDeviceCertificatesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
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
            ...baseListDeviceCertificatesRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDeviceCertificatesRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
};
const baseListDeviceCertificatesResponse = {};
export const ListDeviceCertificatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.certificates) {
            DeviceCertificate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDeviceCertificatesResponse,
        };
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(DeviceCertificate.decode(reader, reader.uint32()));
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
            ...baseListDeviceCertificatesResponse,
        };
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(DeviceCertificate.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? DeviceCertificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDeviceCertificatesResponse,
        };
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(DeviceCertificate.fromPartial(e));
            }
        }
        return message;
    },
};
const baseAddDeviceCertificateRequest = {
    deviceId: '',
    certificateData: '',
};
export const AddDeviceCertificateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.certificateData !== '') {
            writer.uint32(26).string(message.certificateData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddDeviceCertificateRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 3:
                    message.certificateData = reader.string();
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
            ...baseAddDeviceCertificateRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.certificateData !== undefined &&
            object.certificateData !== null) {
            message.certificateData = String(object.certificateData);
        }
        else {
            message.certificateData = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddDeviceCertificateRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.certificateData !== undefined &&
            object.certificateData !== null) {
            message.certificateData = object.certificateData;
        }
        else {
            message.certificateData = '';
        }
        return message;
    },
};
const baseAddDeviceCertificateMetadata = {
    deviceId: '',
    fingerprint: '',
};
export const AddDeviceCertificateMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddDeviceCertificateMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
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
            ...baseAddDeviceCertificateMetadata,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        }
        else {
            message.fingerprint = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddDeviceCertificateMetadata,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        }
        else {
            message.fingerprint = '';
        }
        return message;
    },
};
const baseDeleteDeviceCertificateRequest = {
    deviceId: '',
    fingerprint: '',
};
export const DeleteDeviceCertificateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDeviceCertificateRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
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
            ...baseDeleteDeviceCertificateRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        }
        else {
            message.fingerprint = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteDeviceCertificateRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        }
        else {
            message.fingerprint = '';
        }
        return message;
    },
};
const baseDeleteDeviceCertificateMetadata = {
    deviceId: '',
    fingerprint: '',
};
export const DeleteDeviceCertificateMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDeviceCertificateMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.fingerprint = reader.string();
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
            ...baseDeleteDeviceCertificateMetadata,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        }
        else {
            message.fingerprint = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteDeviceCertificateMetadata,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        }
        else {
            message.fingerprint = '';
        }
        return message;
    },
};
const baseListDevicePasswordsRequest = { deviceId: '' };
export const ListDevicePasswordsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDevicePasswordsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
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
            ...baseListDevicePasswordsRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDevicePasswordsRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        return message;
    },
};
const baseListDevicePasswordsResponse = {};
export const ListDevicePasswordsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.passwords) {
            DevicePassword.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDevicePasswordsResponse,
        };
        message.passwords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwords.push(DevicePassword.decode(reader, reader.uint32()));
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
            ...baseListDevicePasswordsResponse,
        };
        message.passwords = [];
        if (object.passwords !== undefined && object.passwords !== null) {
            for (const e of object.passwords) {
                message.passwords.push(DevicePassword.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.passwords) {
            obj.passwords = message.passwords.map((e) => e ? DevicePassword.toJSON(e) : undefined);
        }
        else {
            obj.passwords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDevicePasswordsResponse,
        };
        message.passwords = [];
        if (object.passwords !== undefined && object.passwords !== null) {
            for (const e of object.passwords) {
                message.passwords.push(DevicePassword.fromPartial(e));
            }
        }
        return message;
    },
};
const baseAddDevicePasswordRequest = { deviceId: '', password: '' };
export const AddDevicePasswordRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddDevicePasswordRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
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
            ...baseAddDevicePasswordRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        }
        else {
            message.password = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddDevicePasswordRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        }
        else {
            message.password = '';
        }
        return message;
    },
};
const baseAddDevicePasswordMetadata = { deviceId: '', passwordId: '' };
export const AddDevicePasswordMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddDevicePasswordMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
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
            ...baseAddDevicePasswordMetadata,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = String(object.passwordId);
        }
        else {
            message.passwordId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddDevicePasswordMetadata,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = object.passwordId;
        }
        else {
            message.passwordId = '';
        }
        return message;
    },
};
const baseDeleteDevicePasswordRequest = {
    deviceId: '',
    passwordId: '',
};
export const DeleteDevicePasswordRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDevicePasswordRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
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
            ...baseDeleteDevicePasswordRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = String(object.passwordId);
        }
        else {
            message.passwordId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteDevicePasswordRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = object.passwordId;
        }
        else {
            message.passwordId = '';
        }
        return message;
    },
};
const baseDeleteDevicePasswordMetadata = {
    deviceId: '',
    passwordId: '',
};
export const DeleteDevicePasswordMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDevicePasswordMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
                    break;
                case 2:
                    message.passwordId = reader.string();
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
            ...baseDeleteDevicePasswordMetadata,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = String(object.passwordId);
        }
        else {
            message.passwordId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteDevicePasswordMetadata,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
        }
        if (object.passwordId !== undefined && object.passwordId !== null) {
            message.passwordId = object.passwordId;
        }
        else {
            message.passwordId = '';
        }
        return message;
    },
};
const baseListDeviceOperationsRequest = {
    deviceId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListDeviceOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
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
            ...baseListDeviceOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deviceId = reader.string();
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
            ...baseListDeviceOperationsRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = '';
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
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDeviceOperationsRequest,
        };
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = '';
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
const baseListDeviceOperationsResponse = { nextPageToken: '' };
export const ListDeviceOperationsResponse = {
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
            ...baseListDeviceOperationsResponse,
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
            ...baseListDeviceOperationsResponse,
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
            ...baseListDeviceOperationsResponse,
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
/** A set of methods for managing devices. */
export const DeviceServiceService = {
    /**
     * Returns the specified device.
     *
     * To get the list of available devices, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => GetDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Device.encode(value).finish()),
        responseDeserialize: (value) => Device.decode(value),
    },
    getByName: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/GetByName',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetByNameDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => GetByNameDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Device.encode(value).finish()),
        responseDeserialize: (value) => Device.decode(value),
    },
    /** Retrieves the list of devices in the specified registry. */
    list: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDevicesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDevicesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDevicesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDevicesResponse.decode(value),
    },
    /** Creates a device in the specified registry. */
    create: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified device. */
    update: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified device. */
    delete: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Retrieves the list of device certificates for the specified device. */
    listCertificates: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/ListCertificates',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDeviceCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDeviceCertificatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDeviceCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDeviceCertificatesResponse.decode(value),
    },
    /** Adds a certificate. */
    addCertificate: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/AddCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(AddDeviceCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => AddDeviceCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified device certificate. */
    deleteCertificate: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/DeleteCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteDeviceCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteDeviceCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Retrieves the list of passwords for the specified device. */
    listPasswords: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/ListPasswords',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDevicePasswordsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDevicePasswordsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDevicePasswordsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDevicePasswordsResponse.decode(value),
    },
    /** Adds password for the specified device. */
    addPassword: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/AddPassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(AddDevicePasswordRequest.encode(value).finish()),
        requestDeserialize: (value) => AddDevicePasswordRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified password. */
    deletePassword: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/DeletePassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteDevicePasswordRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteDevicePasswordRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified device. */
    listOperations: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDeviceOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDeviceOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDeviceOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDeviceOperationsResponse.decode(value),
    },
};
export const DeviceServiceClient = makeGenericClientConstructor(DeviceServiceService, 'yandex.cloud.iot.devices.v1.DeviceService');
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
