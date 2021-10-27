"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceServiceClient = exports.DeviceServiceService = exports.ListDeviceOperationsResponse = exports.ListDeviceOperationsRequest = exports.DeleteDevicePasswordMetadata = exports.DeleteDevicePasswordRequest = exports.AddDevicePasswordMetadata = exports.AddDevicePasswordRequest = exports.ListDevicePasswordsResponse = exports.ListDevicePasswordsRequest = exports.DeleteDeviceCertificateMetadata = exports.DeleteDeviceCertificateRequest = exports.AddDeviceCertificateMetadata = exports.AddDeviceCertificateRequest = exports.ListDeviceCertificatesResponse = exports.ListDeviceCertificatesRequest = exports.DeleteDeviceMetadata = exports.DeleteDeviceRequest = exports.UpdateDeviceMetadata = exports.UpdateDeviceRequest_TopicAliasesEntry = exports.UpdateDeviceRequest = exports.CreateDeviceMetadata = exports.CreateDeviceRequest_Certificate = exports.CreateDeviceRequest_TopicAliasesEntry = exports.CreateDeviceRequest = exports.ListDevicesResponse = exports.ListDevicesRequest = exports.GetByNameDeviceRequest = exports.GetDeviceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../../typeRegistry");
const device_1 = require("../../../../../yandex/cloud/iot/devices/v1/device");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iot.devices.v1';
const baseGetDeviceRequest = {
    $type: 'yandex.cloud.iot.devices.v1.GetDeviceRequest',
    deviceId: '',
    deviceView: 0,
};
exports.GetDeviceRequest = {
    $type: 'yandex.cloud.iot.devices.v1.GetDeviceRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.deviceView !== 0) {
            writer.uint32(16).int32(message.deviceView);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            message.deviceView = (0, device_1.deviceViewFromJSON)(object.deviceView);
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
            (obj.deviceView = (0, device_1.deviceViewToJSON)(message.deviceView));
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
typeRegistry_1.messageTypeRegistry.set(exports.GetDeviceRequest.$type, exports.GetDeviceRequest);
const baseGetByNameDeviceRequest = {
    $type: 'yandex.cloud.iot.devices.v1.GetByNameDeviceRequest',
    registryId: '',
    deviceName: '',
    deviceView: 0,
};
exports.GetByNameDeviceRequest = {
    $type: 'yandex.cloud.iot.devices.v1.GetByNameDeviceRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            message.deviceView = (0, device_1.deviceViewFromJSON)(object.deviceView);
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
            (obj.deviceView = (0, device_1.deviceViewToJSON)(message.deviceView));
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
typeRegistry_1.messageTypeRegistry.set(exports.GetByNameDeviceRequest.$type, exports.GetByNameDeviceRequest);
const baseListDevicesRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListDevicesRequest',
    pageSize: 0,
    pageToken: '',
    deviceView: 0,
};
exports.ListDevicesRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListDevicesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            message.deviceView = (0, device_1.deviceViewFromJSON)(object.deviceView);
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
            (obj.deviceView = (0, device_1.deviceViewToJSON)(message.deviceView));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDevicesRequest.$type, exports.ListDevicesRequest);
const baseListDevicesResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListDevicesResponse',
    nextPageToken: '',
};
exports.ListDevicesResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListDevicesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.devices) {
            device_1.Device.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDevicesResponse };
        message.devices = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.devices.push(device_1.Device.decode(reader, reader.uint32()));
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
                message.devices.push(device_1.Device.fromJSON(e));
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
            obj.devices = message.devices.map((e) => e ? device_1.Device.toJSON(e) : undefined);
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
                message.devices.push(device_1.Device.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDevicesResponse.$type, exports.ListDevicesResponse);
const baseCreateDeviceRequest = {
    $type: 'yandex.cloud.iot.devices.v1.CreateDeviceRequest',
    registryId: '',
    name: '',
    description: '',
    password: '',
};
exports.CreateDeviceRequest = {
    $type: 'yandex.cloud.iot.devices.v1.CreateDeviceRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.CreateDeviceRequest_Certificate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.topicAliases).forEach(([key, value]) => {
            exports.CreateDeviceRequest_TopicAliasesEntry.encode({
                $type: 'yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.password !== '') {
            writer.uint32(50).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.certificates.push(exports.CreateDeviceRequest_Certificate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    const entry5 = exports.CreateDeviceRequest_TopicAliasesEntry.decode(reader, reader.uint32());
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
                message.certificates.push(exports.CreateDeviceRequest_Certificate.fromJSON(e));
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
            obj.certificates = message.certificates.map((e) => e ? exports.CreateDeviceRequest_Certificate.toJSON(e) : undefined);
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
                message.certificates.push(exports.CreateDeviceRequest_Certificate.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateDeviceRequest.$type, exports.CreateDeviceRequest);
const baseCreateDeviceRequest_TopicAliasesEntry = {
    $type: 'yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry',
    key: '',
    value: '',
};
exports.CreateDeviceRequest_TopicAliasesEntry = {
    $type: 'yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry',
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateDeviceRequest_TopicAliasesEntry.$type, exports.CreateDeviceRequest_TopicAliasesEntry);
const baseCreateDeviceRequest_Certificate = {
    $type: 'yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate',
    certificateData: '',
};
exports.CreateDeviceRequest_Certificate = {
    $type: 'yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateData !== '') {
            writer.uint32(10).string(message.certificateData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateDeviceRequest_Certificate.$type, exports.CreateDeviceRequest_Certificate);
const baseCreateDeviceMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.CreateDeviceMetadata',
    deviceId: '',
};
exports.CreateDeviceMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.CreateDeviceMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateDeviceMetadata.$type, exports.CreateDeviceMetadata);
const baseUpdateDeviceRequest = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateDeviceRequest',
    deviceId: '',
    name: '',
    description: '',
};
exports.UpdateDeviceRequest = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateDeviceRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
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
        Object.entries(message.topicAliases).forEach(([key, value]) => {
            exports.UpdateDeviceRequest_TopicAliasesEntry.encode({
                $type: 'yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateDeviceRequest_TopicAliasesEntry.decode(reader, reader.uint32());
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
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDeviceRequest.$type, exports.UpdateDeviceRequest);
const baseUpdateDeviceRequest_TopicAliasesEntry = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry',
    key: '',
    value: '',
};
exports.UpdateDeviceRequest_TopicAliasesEntry = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry',
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDeviceRequest_TopicAliasesEntry.$type, exports.UpdateDeviceRequest_TopicAliasesEntry);
const baseUpdateDeviceMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateDeviceMetadata',
    deviceId: '',
};
exports.UpdateDeviceMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateDeviceMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDeviceMetadata.$type, exports.UpdateDeviceMetadata);
const baseDeleteDeviceRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDeviceRequest',
    deviceId: '',
};
exports.DeleteDeviceRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDeviceRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDeviceRequest.$type, exports.DeleteDeviceRequest);
const baseDeleteDeviceMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDeviceMetadata',
    deviceId: '',
};
exports.DeleteDeviceMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDeviceMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDeviceMetadata.$type, exports.DeleteDeviceMetadata);
const baseListDeviceCertificatesRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest',
    deviceId: '',
};
exports.ListDeviceCertificatesRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDeviceCertificatesRequest.$type, exports.ListDeviceCertificatesRequest);
const baseListDeviceCertificatesResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse',
};
exports.ListDeviceCertificatesResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.certificates) {
            device_1.DeviceCertificate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDeviceCertificatesResponse,
        };
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(device_1.DeviceCertificate.decode(reader, reader.uint32()));
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
                message.certificates.push(device_1.DeviceCertificate.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? device_1.DeviceCertificate.toJSON(e) : undefined);
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
                message.certificates.push(device_1.DeviceCertificate.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDeviceCertificatesResponse.$type, exports.ListDeviceCertificatesResponse);
const baseAddDeviceCertificateRequest = {
    $type: 'yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest',
    deviceId: '',
    certificateData: '',
};
exports.AddDeviceCertificateRequest = {
    $type: 'yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.certificateData !== '') {
            writer.uint32(26).string(message.certificateData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.AddDeviceCertificateRequest.$type, exports.AddDeviceCertificateRequest);
const baseAddDeviceCertificateMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata',
    deviceId: '',
    fingerprint: '',
};
exports.AddDeviceCertificateMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.AddDeviceCertificateMetadata.$type, exports.AddDeviceCertificateMetadata);
const baseDeleteDeviceCertificateRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest',
    deviceId: '',
    fingerprint: '',
};
exports.DeleteDeviceCertificateRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDeviceCertificateRequest.$type, exports.DeleteDeviceCertificateRequest);
const baseDeleteDeviceCertificateMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata',
    deviceId: '',
    fingerprint: '',
};
exports.DeleteDeviceCertificateMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.fingerprint !== '') {
            writer.uint32(18).string(message.fingerprint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDeviceCertificateMetadata.$type, exports.DeleteDeviceCertificateMetadata);
const baseListDevicePasswordsRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest',
    deviceId: '',
};
exports.ListDevicePasswordsRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDevicePasswordsRequest.$type, exports.ListDevicePasswordsRequest);
const baseListDevicePasswordsResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse',
};
exports.ListDevicePasswordsResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.passwords) {
            device_1.DevicePassword.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDevicePasswordsResponse,
        };
        message.passwords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwords.push(device_1.DevicePassword.decode(reader, reader.uint32()));
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
                message.passwords.push(device_1.DevicePassword.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.passwords) {
            obj.passwords = message.passwords.map((e) => e ? device_1.DevicePassword.toJSON(e) : undefined);
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
                message.passwords.push(device_1.DevicePassword.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListDevicePasswordsResponse.$type, exports.ListDevicePasswordsResponse);
const baseAddDevicePasswordRequest = {
    $type: 'yandex.cloud.iot.devices.v1.AddDevicePasswordRequest',
    deviceId: '',
    password: '',
};
exports.AddDevicePasswordRequest = {
    $type: 'yandex.cloud.iot.devices.v1.AddDevicePasswordRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.AddDevicePasswordRequest.$type, exports.AddDevicePasswordRequest);
const baseAddDevicePasswordMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata',
    deviceId: '',
    passwordId: '',
};
exports.AddDevicePasswordMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.AddDevicePasswordMetadata.$type, exports.AddDevicePasswordMetadata);
const baseDeleteDevicePasswordRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest',
    deviceId: '',
    passwordId: '',
};
exports.DeleteDevicePasswordRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDevicePasswordRequest.$type, exports.DeleteDevicePasswordRequest);
const baseDeleteDevicePasswordMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata',
    deviceId: '',
    passwordId: '',
};
exports.DeleteDevicePasswordMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deviceId !== '') {
            writer.uint32(10).string(message.deviceId);
        }
        if (message.passwordId !== '') {
            writer.uint32(18).string(message.passwordId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDevicePasswordMetadata.$type, exports.DeleteDevicePasswordMetadata);
const baseListDeviceOperationsRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest',
    deviceId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListDeviceOperationsRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDeviceOperationsRequest.$type, exports.ListDeviceOperationsRequest);
const baseListDeviceOperationsResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse',
    nextPageToken: '',
};
exports.ListDeviceOperationsResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse',
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
            ...baseListDeviceOperationsResponse,
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
            ...baseListDeviceOperationsResponse,
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
            ...baseListDeviceOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDeviceOperationsResponse.$type, exports.ListDeviceOperationsResponse);
/** A set of methods for managing devices. */
exports.DeviceServiceService = {
    /**
     * Returns the specified device.
     *
     * To get the list of available devices, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(device_1.Device.encode(value).finish()),
        responseDeserialize: (value) => device_1.Device.decode(value),
    },
    getByName: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/GetByName',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetByNameDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetByNameDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(device_1.Device.encode(value).finish()),
        responseDeserialize: (value) => device_1.Device.decode(value),
    },
    /** Retrieves the list of devices in the specified registry. */
    list: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDevicesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDevicesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDevicesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDevicesResponse.decode(value),
    },
    /** Creates a device in the specified registry. */
    create: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified device. */
    update: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified device. */
    delete: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDeviceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDeviceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of device certificates for the specified device. */
    listCertificates: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/ListCertificates',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDeviceCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDeviceCertificatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDeviceCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDeviceCertificatesResponse.decode(value),
    },
    /** Adds a certificate. */
    addCertificate: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/AddCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddDeviceCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddDeviceCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified device certificate. */
    deleteCertificate: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/DeleteCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDeviceCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDeviceCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of passwords for the specified device. */
    listPasswords: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/ListPasswords',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDevicePasswordsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDevicePasswordsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDevicePasswordsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDevicePasswordsResponse.decode(value),
    },
    /** Adds password for the specified device. */
    addPassword: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/AddPassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddDevicePasswordRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddDevicePasswordRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified password. */
    deletePassword: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/DeletePassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDevicePasswordRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDevicePasswordRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified device. */
    listOperations: {
        path: '/yandex.cloud.iot.devices.v1.DeviceService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDeviceOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDeviceOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDeviceOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDeviceOperationsResponse.decode(value),
    },
};
exports.DeviceServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DeviceServiceService, 'yandex.cloud.iot.devices.v1.DeviceService');
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
