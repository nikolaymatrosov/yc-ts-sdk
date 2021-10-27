"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryServiceClient = exports.RegistryServiceService = exports.ListRegistryOperationsResponse = exports.ListRegistryOperationsRequest = exports.ListDeviceTopicAliasesResponse = exports.ListDeviceTopicAliasesRequest = exports.DeleteRegistryPasswordMetadata = exports.DeleteRegistryPasswordRequest = exports.AddRegistryPasswordMetadata = exports.AddRegistryPasswordRequest = exports.ListRegistryPasswordsResponse = exports.ListRegistryPasswordsRequest = exports.DeleteRegistryCertificateMetadata = exports.DeleteRegistryCertificateRequest = exports.AddRegistryCertificateMetadata = exports.AddRegistryCertificateRequest = exports.ListRegistryCertificatesResponse = exports.ListRegistryCertificatesRequest = exports.DeleteRegistryMetadata = exports.DeleteRegistryRequest = exports.UpdateRegistryMetadata = exports.UpdateRegistryRequest_LabelsEntry = exports.UpdateRegistryRequest = exports.CreateRegistryMetadata = exports.CreateRegistryRequest_Certificate = exports.CreateRegistryRequest_LabelsEntry = exports.CreateRegistryRequest = exports.ListRegistriesResponse = exports.ListRegistriesRequest = exports.GetByNameRegistryRequest = exports.GetRegistryRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../../typeRegistry");
const registry_1 = require("../../../../../yandex/cloud/iot/devices/v1/registry");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iot.devices.v1';
const baseGetRegistryRequest = {
    $type: 'yandex.cloud.iot.devices.v1.GetRegistryRequest',
    registryId: '',
};
exports.GetRegistryRequest = {
    $type: 'yandex.cloud.iot.devices.v1.GetRegistryRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetRegistryRequest.$type, exports.GetRegistryRequest);
const baseGetByNameRegistryRequest = {
    $type: 'yandex.cloud.iot.devices.v1.GetByNameRegistryRequest',
    folderId: '',
    registryName: '',
};
exports.GetByNameRegistryRequest = {
    $type: 'yandex.cloud.iot.devices.v1.GetByNameRegistryRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.registryName !== '') {
            writer.uint32(18).string(message.registryName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetByNameRegistryRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.registryName = reader.string();
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
            ...baseGetByNameRegistryRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.registryName !== undefined && object.registryName !== null) {
            message.registryName = String(object.registryName);
        }
        else {
            message.registryName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.registryName !== undefined &&
            (obj.registryName = message.registryName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetByNameRegistryRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.registryName !== undefined && object.registryName !== null) {
            message.registryName = object.registryName;
        }
        else {
            message.registryName = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetByNameRegistryRequest.$type, exports.GetByNameRegistryRequest);
const baseListRegistriesRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistriesRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListRegistriesRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistriesRequest',
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRegistriesRequest.$type, exports.ListRegistriesRequest);
const baseListRegistriesResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistriesResponse',
    nextPageToken: '',
};
exports.ListRegistriesResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistriesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.registries) {
            registry_1.Registry.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListRegistriesResponse,
        };
        message.registries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registries.push(registry_1.Registry.decode(reader, reader.uint32()));
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
                message.registries.push(registry_1.Registry.fromJSON(e));
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
            obj.registries = message.registries.map((e) => e ? registry_1.Registry.toJSON(e) : undefined);
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
                message.registries.push(registry_1.Registry.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListRegistriesResponse.$type, exports.ListRegistriesResponse);
const baseCreateRegistryRequest = {
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryRequest',
    folderId: '',
    name: '',
    description: '',
    password: '',
};
exports.CreateRegistryRequest = {
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryRequest',
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
            exports.CreateRegistryRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.iot.devices.v1.CreateRegistryRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        for (const v of message.certificates) {
            exports.CreateRegistryRequest_Certificate.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.password !== '') {
            writer.uint32(50).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRegistryRequest,
        };
        message.labels = {};
        message.certificates = [];
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
                    const entry4 = exports.CreateRegistryRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.certificates.push(exports.CreateRegistryRequest_Certificate.decode(reader, reader.uint32()));
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
        const message = {
            ...baseCreateRegistryRequest,
        };
        message.labels = {};
        message.certificates = [];
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
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(exports.CreateRegistryRequest_Certificate.fromJSON(e));
            }
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
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? exports.CreateRegistryRequest_Certificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateRegistryRequest,
        };
        message.labels = {};
        message.certificates = [];
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
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(exports.CreateRegistryRequest_Certificate.fromPartial(e));
            }
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateRegistryRequest.$type, exports.CreateRegistryRequest);
const baseCreateRegistryRequest_LabelsEntry = {
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateRegistryRequest_LabelsEntry = {
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryRequest.LabelsEntry',
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateRegistryRequest_LabelsEntry.$type, exports.CreateRegistryRequest_LabelsEntry);
const baseCreateRegistryRequest_Certificate = {
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryRequest.Certificate',
    certificateData: '',
};
exports.CreateRegistryRequest_Certificate = {
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryRequest.Certificate',
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
            ...baseCreateRegistryRequest_Certificate,
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
            ...baseCreateRegistryRequest_Certificate,
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
            ...baseCreateRegistryRequest_Certificate,
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateRegistryRequest_Certificate.$type, exports.CreateRegistryRequest_Certificate);
const baseCreateRegistryMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryMetadata',
    registryId: '',
};
exports.CreateRegistryMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.CreateRegistryMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateRegistryMetadata.$type, exports.CreateRegistryMetadata);
const baseUpdateRegistryRequest = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateRegistryRequest',
    registryId: '',
    name: '',
    description: '',
};
exports.UpdateRegistryRequest = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateRegistryRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            exports.UpdateRegistryRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.iot.devices.v1.UpdateRegistryRequest.LabelsEntry',
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateRegistryRequest_LabelsEntry.decode(reader, reader.uint32());
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
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRegistryRequest.$type, exports.UpdateRegistryRequest);
const baseUpdateRegistryRequest_LabelsEntry = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateRegistryRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateRegistryRequest_LabelsEntry = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateRegistryRequest.LabelsEntry',
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRegistryRequest_LabelsEntry.$type, exports.UpdateRegistryRequest_LabelsEntry);
const baseUpdateRegistryMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateRegistryMetadata',
    registryId: '',
};
exports.UpdateRegistryMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.UpdateRegistryMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRegistryMetadata.$type, exports.UpdateRegistryMetadata);
const baseDeleteRegistryRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryRequest',
    registryId: '',
};
exports.DeleteRegistryRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRegistryRequest.$type, exports.DeleteRegistryRequest);
const baseDeleteRegistryMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryMetadata',
    registryId: '',
};
exports.DeleteRegistryMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRegistryMetadata.$type, exports.DeleteRegistryMetadata);
const baseListRegistryCertificatesRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryCertificatesRequest',
    registryId: '',
};
exports.ListRegistryCertificatesRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryCertificatesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryCertificatesRequest,
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
            ...baseListRegistryCertificatesRequest,
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
            ...baseListRegistryCertificatesRequest,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListRegistryCertificatesRequest.$type, exports.ListRegistryCertificatesRequest);
const baseListRegistryCertificatesResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryCertificatesResponse',
};
exports.ListRegistryCertificatesResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryCertificatesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.certificates) {
            registry_1.RegistryCertificate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryCertificatesResponse,
        };
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(registry_1.RegistryCertificate.decode(reader, reader.uint32()));
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
            ...baseListRegistryCertificatesResponse,
        };
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(registry_1.RegistryCertificate.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? registry_1.RegistryCertificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListRegistryCertificatesResponse,
        };
        message.certificates = [];
        if (object.certificates !== undefined && object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(registry_1.RegistryCertificate.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRegistryCertificatesResponse.$type, exports.ListRegistryCertificatesResponse);
const baseAddRegistryCertificateRequest = {
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryCertificateRequest',
    registryId: '',
    certificateData: '',
};
exports.AddRegistryCertificateRequest = {
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryCertificateRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            ...baseAddRegistryCertificateRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseAddRegistryCertificateRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.certificateData !== undefined &&
            (obj.certificateData = message.certificateData);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddRegistryCertificateRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.AddRegistryCertificateRequest.$type, exports.AddRegistryCertificateRequest);
const baseAddRegistryCertificateMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryCertificateMetadata',
    registryId: '',
    fingerprint: '',
};
exports.AddRegistryCertificateMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryCertificateMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            ...baseAddRegistryCertificateMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseAddRegistryCertificateMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddRegistryCertificateMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.AddRegistryCertificateMetadata.$type, exports.AddRegistryCertificateMetadata);
const baseDeleteRegistryCertificateRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryCertificateRequest',
    registryId: '',
    fingerprint: '',
};
exports.DeleteRegistryCertificateRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryCertificateRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            ...baseDeleteRegistryCertificateRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseDeleteRegistryCertificateRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteRegistryCertificateRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRegistryCertificateRequest.$type, exports.DeleteRegistryCertificateRequest);
const baseDeleteRegistryCertificateMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryCertificateMetadata',
    registryId: '',
    fingerprint: '',
};
exports.DeleteRegistryCertificateMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryCertificateMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            ...baseDeleteRegistryCertificateMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseDeleteRegistryCertificateMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteRegistryCertificateMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRegistryCertificateMetadata.$type, exports.DeleteRegistryCertificateMetadata);
const baseListRegistryPasswordsRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryPasswordsRequest',
    registryId: '',
};
exports.ListRegistryPasswordsRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryPasswordsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryPasswordsRequest,
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
            ...baseListRegistryPasswordsRequest,
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
            ...baseListRegistryPasswordsRequest,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListRegistryPasswordsRequest.$type, exports.ListRegistryPasswordsRequest);
const baseListRegistryPasswordsResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryPasswordsResponse',
};
exports.ListRegistryPasswordsResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryPasswordsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.passwords) {
            registry_1.RegistryPassword.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRegistryPasswordsResponse,
        };
        message.passwords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.passwords.push(registry_1.RegistryPassword.decode(reader, reader.uint32()));
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
            ...baseListRegistryPasswordsResponse,
        };
        message.passwords = [];
        if (object.passwords !== undefined && object.passwords !== null) {
            for (const e of object.passwords) {
                message.passwords.push(registry_1.RegistryPassword.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.passwords) {
            obj.passwords = message.passwords.map((e) => e ? registry_1.RegistryPassword.toJSON(e) : undefined);
        }
        else {
            obj.passwords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListRegistryPasswordsResponse,
        };
        message.passwords = [];
        if (object.passwords !== undefined && object.passwords !== null) {
            for (const e of object.passwords) {
                message.passwords.push(registry_1.RegistryPassword.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListRegistryPasswordsResponse.$type, exports.ListRegistryPasswordsResponse);
const baseAddRegistryPasswordRequest = {
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryPasswordRequest',
    registryId: '',
    password: '',
};
exports.AddRegistryPasswordRequest = {
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryPasswordRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            ...baseAddRegistryPasswordRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseAddRegistryPasswordRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddRegistryPasswordRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.AddRegistryPasswordRequest.$type, exports.AddRegistryPasswordRequest);
const baseAddRegistryPasswordMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryPasswordMetadata',
    registryId: '',
    passwordId: '',
};
exports.AddRegistryPasswordMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.AddRegistryPasswordMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            ...baseAddRegistryPasswordMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseAddRegistryPasswordMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddRegistryPasswordMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.AddRegistryPasswordMetadata.$type, exports.AddRegistryPasswordMetadata);
const baseDeleteRegistryPasswordRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryPasswordRequest',
    registryId: '',
    passwordId: '',
};
exports.DeleteRegistryPasswordRequest = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryPasswordRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            ...baseDeleteRegistryPasswordRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseDeleteRegistryPasswordRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteRegistryPasswordRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRegistryPasswordRequest.$type, exports.DeleteRegistryPasswordRequest);
const baseDeleteRegistryPasswordMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryPasswordMetadata',
    registryId: '',
    passwordId: '',
};
exports.DeleteRegistryPasswordMetadata = {
    $type: 'yandex.cloud.iot.devices.v1.DeleteRegistryPasswordMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            ...baseDeleteRegistryPasswordMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseDeleteRegistryPasswordMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.passwordId !== undefined &&
            (obj.passwordId = message.passwordId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteRegistryPasswordMetadata,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteRegistryPasswordMetadata.$type, exports.DeleteRegistryPasswordMetadata);
const baseListDeviceTopicAliasesRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceTopicAliasesRequest',
    registryId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListDeviceTopicAliasesRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceTopicAliasesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            ...baseListDeviceTopicAliasesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseListDeviceTopicAliasesRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDeviceTopicAliasesRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDeviceTopicAliasesRequest.$type, exports.ListDeviceTopicAliasesRequest);
const baseListDeviceTopicAliasesResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceTopicAliasesResponse',
    nextPageToken: '',
};
exports.ListDeviceTopicAliasesResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListDeviceTopicAliasesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.aliases) {
            registry_1.DeviceAlias.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListDeviceTopicAliasesResponse,
        };
        message.aliases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aliases.push(registry_1.DeviceAlias.decode(reader, reader.uint32()));
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
            ...baseListDeviceTopicAliasesResponse,
        };
        message.aliases = [];
        if (object.aliases !== undefined && object.aliases !== null) {
            for (const e of object.aliases) {
                message.aliases.push(registry_1.DeviceAlias.fromJSON(e));
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
        if (message.aliases) {
            obj.aliases = message.aliases.map((e) => e ? registry_1.DeviceAlias.toJSON(e) : undefined);
        }
        else {
            obj.aliases = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDeviceTopicAliasesResponse,
        };
        message.aliases = [];
        if (object.aliases !== undefined && object.aliases !== null) {
            for (const e of object.aliases) {
                message.aliases.push(registry_1.DeviceAlias.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDeviceTopicAliasesResponse.$type, exports.ListDeviceTopicAliasesResponse);
const baseListRegistryOperationsRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryOperationsRequest',
    registryId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListRegistryOperationsRequest = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
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
            ...baseListRegistryOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
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
            ...baseListRegistryOperationsRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        }
        else {
            message.registryId = '';
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
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListRegistryOperationsRequest,
        };
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        }
        else {
            message.registryId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListRegistryOperationsRequest.$type, exports.ListRegistryOperationsRequest);
const baseListRegistryOperationsResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryOperationsResponse',
    nextPageToken: '',
};
exports.ListRegistryOperationsResponse = {
    $type: 'yandex.cloud.iot.devices.v1.ListRegistryOperationsResponse',
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
            ...baseListRegistryOperationsResponse,
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
            ...baseListRegistryOperationsResponse,
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
            ...baseListRegistryOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListRegistryOperationsResponse.$type, exports.ListRegistryOperationsResponse);
/** A set of methods for managing registry. */
exports.RegistryServiceService = {
    /**
     * Returns the specified registry.
     *
     * To get the list of available registries, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(registry_1.Registry.encode(value).finish()),
        responseDeserialize: (value) => registry_1.Registry.decode(value),
    },
    getByName: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/GetByName',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetByNameRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetByNameRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(registry_1.Registry.encode(value).finish()),
        responseDeserialize: (value) => registry_1.Registry.decode(value),
    },
    /** Retrieves the list of registries in the specified folder. */
    list: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRegistriesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRegistriesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRegistriesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRegistriesResponse.decode(value),
    },
    /** Creates a registry in the specified folder. */
    create: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified registry. */
    update: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified registry. */
    delete: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteRegistryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteRegistryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of registry certificates for the specified registry. */
    listCertificates: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListCertificates',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRegistryCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRegistryCertificatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRegistryCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRegistryCertificatesResponse.decode(value),
    },
    /** Adds a certificate. */
    addCertificate: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/AddCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddRegistryCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddRegistryCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified registry certificate. */
    deleteCertificate: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/DeleteCertificate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteRegistryCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteRegistryCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of passwords for the specified registry. */
    listPasswords: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListPasswords',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRegistryPasswordsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRegistryPasswordsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRegistryPasswordsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRegistryPasswordsResponse.decode(value),
    },
    /** Adds password for the specified registry. */
    addPassword: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/AddPassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddRegistryPasswordRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddRegistryPasswordRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified password. */
    deletePassword: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/DeletePassword',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteRegistryPasswordRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteRegistryPasswordRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of device topic aliases for the specified registry. */
    listDeviceTopicAliases: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListDeviceTopicAliases',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDeviceTopicAliasesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDeviceTopicAliasesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDeviceTopicAliasesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDeviceTopicAliasesResponse.decode(value),
    },
    /** Lists operations for the specified registry. */
    listOperations: {
        path: '/yandex.cloud.iot.devices.v1.RegistryService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRegistryOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRegistryOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRegistryOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRegistryOperationsResponse.decode(value),
    },
};
exports.RegistryServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RegistryServiceService, 'yandex.cloud.iot.devices.v1.RegistryService');
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
