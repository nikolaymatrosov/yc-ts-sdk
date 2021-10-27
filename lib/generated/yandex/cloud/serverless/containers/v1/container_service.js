"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerServiceClient = exports.ContainerServiceService = exports.ListContainerOperationsResponse = exports.ListContainerOperationsRequest = exports.DeployContainerRevisionMetadata = exports.ImageSpec_EnvironmentEntry = exports.ImageSpec = exports.DeployContainerRevisionRequest = exports.ListContainersRevisionsResponse = exports.ListContainersRevisionsRequest = exports.GetContainerRevisionRequest = exports.DeleteContainerMetadata = exports.DeleteContainerRequest = exports.UpdateContainerMetadata = exports.UpdateContainerRequest_LabelsEntry = exports.UpdateContainerRequest = exports.CreateContainerMetadata = exports.CreateContainerRequest_LabelsEntry = exports.CreateContainerRequest = exports.ListContainersResponse = exports.ListContainersRequest = exports.GetContainerRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../../google/protobuf/duration");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const access_1 = require("../../../../../yandex/cloud/access/access");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const container_1 = require("../../../../../yandex/cloud/serverless/containers/v1/container");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.serverless.containers.v1';
const baseGetContainerRequest = { containerId: '' };
exports.GetContainerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetContainerRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetContainerRequest };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        }
        else {
            message.containerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetContainerRequest };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        }
        else {
            message.containerId = '';
        }
        return message;
    },
};
const baseListContainersRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListContainersRequest = {
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
            ...baseListContainersRequest,
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
            ...baseListContainersRequest,
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
            ...baseListContainersRequest,
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
const baseListContainersResponse = { nextPageToken: '' };
exports.ListContainersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.containers) {
            container_1.Container.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListContainersResponse,
        };
        message.containers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containers.push(container_1.Container.decode(reader, reader.uint32()));
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
            ...baseListContainersResponse,
        };
        message.containers = [];
        if (object.containers !== undefined && object.containers !== null) {
            for (const e of object.containers) {
                message.containers.push(container_1.Container.fromJSON(e));
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
        if (message.containers) {
            obj.containers = message.containers.map((e) => e ? container_1.Container.toJSON(e) : undefined);
        }
        else {
            obj.containers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListContainersResponse,
        };
        message.containers = [];
        if (object.containers !== undefined && object.containers !== null) {
            for (const e of object.containers) {
                message.containers.push(container_1.Container.fromPartial(e));
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
const baseCreateContainerRequest = {
    folderId: '',
    name: '',
    description: '',
};
exports.CreateContainerRequest = {
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
            exports.CreateContainerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateContainerRequest,
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
                    const entry4 = exports.CreateContainerRequest_LabelsEntry.decode(reader, reader.uint32());
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
            ...baseCreateContainerRequest,
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
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateContainerRequest,
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
        return message;
    },
};
const baseCreateContainerRequest_LabelsEntry = { key: '', value: '' };
exports.CreateContainerRequest_LabelsEntry = {
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
            ...baseCreateContainerRequest_LabelsEntry,
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
            ...baseCreateContainerRequest_LabelsEntry,
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
            ...baseCreateContainerRequest_LabelsEntry,
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
const baseCreateContainerMetadata = { containerId: '' };
exports.CreateContainerMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateContainerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
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
            ...baseCreateContainerMetadata,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        }
        else {
            message.containerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateContainerMetadata,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        }
        else {
            message.containerId = '';
        }
        return message;
    },
};
const baseUpdateContainerRequest = {
    containerId: '',
    name: '',
    description: '',
};
exports.UpdateContainerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
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
            exports.UpdateContainerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateContainerRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
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
                    const entry5 = exports.UpdateContainerRequest_LabelsEntry.decode(reader, reader.uint32());
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
            ...baseUpdateContainerRequest,
        };
        message.labels = {};
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        }
        else {
            message.containerId = '';
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
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
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
            ...baseUpdateContainerRequest,
        };
        message.labels = {};
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        }
        else {
            message.containerId = '';
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
const baseUpdateContainerRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateContainerRequest_LabelsEntry = {
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
            ...baseUpdateContainerRequest_LabelsEntry,
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
            ...baseUpdateContainerRequest_LabelsEntry,
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
            ...baseUpdateContainerRequest_LabelsEntry,
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
const baseUpdateContainerMetadata = { containerId: '' };
exports.UpdateContainerMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateContainerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
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
            ...baseUpdateContainerMetadata,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        }
        else {
            message.containerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateContainerMetadata,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        }
        else {
            message.containerId = '';
        }
        return message;
    },
};
const baseDeleteContainerRequest = { containerId: '' };
exports.DeleteContainerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteContainerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
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
            ...baseDeleteContainerRequest,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        }
        else {
            message.containerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteContainerRequest,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        }
        else {
            message.containerId = '';
        }
        return message;
    },
};
const baseDeleteContainerMetadata = { containerId: '' };
exports.DeleteContainerMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteContainerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
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
            ...baseDeleteContainerMetadata,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        }
        else {
            message.containerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteContainerMetadata,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        }
        else {
            message.containerId = '';
        }
        return message;
    },
};
const baseGetContainerRevisionRequest = { containerRevisionId: '' };
exports.GetContainerRevisionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerRevisionId !== '') {
            writer.uint32(10).string(message.containerRevisionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetContainerRevisionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerRevisionId = reader.string();
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
            ...baseGetContainerRevisionRequest,
        };
        if (object.containerRevisionId !== undefined &&
            object.containerRevisionId !== null) {
            message.containerRevisionId = String(object.containerRevisionId);
        }
        else {
            message.containerRevisionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerRevisionId !== undefined &&
            (obj.containerRevisionId = message.containerRevisionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetContainerRevisionRequest,
        };
        if (object.containerRevisionId !== undefined &&
            object.containerRevisionId !== null) {
            message.containerRevisionId = object.containerRevisionId;
        }
        else {
            message.containerRevisionId = '';
        }
        return message;
    },
};
const baseListContainersRevisionsRequest = {
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListContainersRevisionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== undefined) {
            writer.uint32(10).string(message.folderId);
        }
        if (message.containerId !== undefined) {
            writer.uint32(18).string(message.containerId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListContainersRevisionsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.containerId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
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
            ...baseListContainersRevisionsRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = undefined;
        }
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        }
        else {
            message.containerId = undefined;
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
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListContainersRevisionsRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = undefined;
        }
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        }
        else {
            message.containerId = undefined;
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
const baseListContainersRevisionsResponse = { nextPageToken: '' };
exports.ListContainersRevisionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.revisions) {
            container_1.Revision.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListContainersRevisionsResponse,
        };
        message.revisions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.revisions.push(container_1.Revision.decode(reader, reader.uint32()));
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
            ...baseListContainersRevisionsResponse,
        };
        message.revisions = [];
        if (object.revisions !== undefined && object.revisions !== null) {
            for (const e of object.revisions) {
                message.revisions.push(container_1.Revision.fromJSON(e));
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
        if (message.revisions) {
            obj.revisions = message.revisions.map((e) => e ? container_1.Revision.toJSON(e) : undefined);
        }
        else {
            obj.revisions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListContainersRevisionsResponse,
        };
        message.revisions = [];
        if (object.revisions !== undefined && object.revisions !== null) {
            for (const e of object.revisions) {
                message.revisions.push(container_1.Revision.fromPartial(e));
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
const baseDeployContainerRevisionRequest = {
    containerId: '',
    description: '',
    serviceAccountId: '',
    concurrency: 0,
};
exports.DeployContainerRevisionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.resources !== undefined) {
            container_1.Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
        }
        if (message.executionTimeout !== undefined) {
            duration_1.Duration.encode(message.executionTimeout, writer.uint32(50).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.imageSpec !== undefined) {
            exports.ImageSpec.encode(message.imageSpec, writer.uint32(66).fork()).ldelim();
        }
        if (message.concurrency !== 0) {
            writer.uint32(72).int64(message.concurrency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeployContainerRevisionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 5:
                    message.resources = container_1.Resources.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.executionTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                case 8:
                    message.imageSpec = exports.ImageSpec.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.concurrency = longToNumber(reader.int64());
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
            ...baseDeployContainerRevisionRequest,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        }
        else {
            message.containerId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = container_1.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.executionTimeout !== undefined &&
            object.executionTimeout !== null) {
            message.executionTimeout = duration_1.Duration.fromJSON(object.executionTimeout);
        }
        else {
            message.executionTimeout = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.imageSpec !== undefined && object.imageSpec !== null) {
            message.imageSpec = exports.ImageSpec.fromJSON(object.imageSpec);
        }
        else {
            message.imageSpec = undefined;
        }
        if (object.concurrency !== undefined && object.concurrency !== null) {
            message.concurrency = Number(object.concurrency);
        }
        else {
            message.concurrency = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? container_1.Resources.toJSON(message.resources)
                : undefined);
        message.executionTimeout !== undefined &&
            (obj.executionTimeout = message.executionTimeout
                ? duration_1.Duration.toJSON(message.executionTimeout)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.imageSpec !== undefined &&
            (obj.imageSpec = message.imageSpec
                ? exports.ImageSpec.toJSON(message.imageSpec)
                : undefined);
        message.concurrency !== undefined &&
            (obj.concurrency = message.concurrency);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeployContainerRevisionRequest,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        }
        else {
            message.containerId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = container_1.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.executionTimeout !== undefined &&
            object.executionTimeout !== null) {
            message.executionTimeout = duration_1.Duration.fromPartial(object.executionTimeout);
        }
        else {
            message.executionTimeout = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.imageSpec !== undefined && object.imageSpec !== null) {
            message.imageSpec = exports.ImageSpec.fromPartial(object.imageSpec);
        }
        else {
            message.imageSpec = undefined;
        }
        if (object.concurrency !== undefined && object.concurrency !== null) {
            message.concurrency = object.concurrency;
        }
        else {
            message.concurrency = 0;
        }
        return message;
    },
};
const baseImageSpec = { imageUrl: '', workingDir: '' };
exports.ImageSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageUrl !== '') {
            writer.uint32(10).string(message.imageUrl);
        }
        if (message.command !== undefined) {
            container_1.Command.encode(message.command, writer.uint32(18).fork()).ldelim();
        }
        if (message.args !== undefined) {
            container_1.Args.encode(message.args, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.environment).forEach(([key, value]) => {
            exports.ImageSpec_EnvironmentEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.workingDir !== '') {
            writer.uint32(42).string(message.workingDir);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImageSpec };
        message.environment = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageUrl = reader.string();
                    break;
                case 2:
                    message.command = container_1.Command.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.args = container_1.Args.decode(reader, reader.uint32());
                    break;
                case 4:
                    const entry4 = exports.ImageSpec_EnvironmentEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.environment[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.workingDir = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseImageSpec };
        message.environment = {};
        if (object.imageUrl !== undefined && object.imageUrl !== null) {
            message.imageUrl = String(object.imageUrl);
        }
        else {
            message.imageUrl = '';
        }
        if (object.command !== undefined && object.command !== null) {
            message.command = container_1.Command.fromJSON(object.command);
        }
        else {
            message.command = undefined;
        }
        if (object.args !== undefined && object.args !== null) {
            message.args = container_1.Args.fromJSON(object.args);
        }
        else {
            message.args = undefined;
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                message.environment[key] = String(value);
            });
        }
        if (object.workingDir !== undefined && object.workingDir !== null) {
            message.workingDir = String(object.workingDir);
        }
        else {
            message.workingDir = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
        message.command !== undefined &&
            (obj.command = message.command
                ? container_1.Command.toJSON(message.command)
                : undefined);
        message.args !== undefined &&
            (obj.args = message.args ? container_1.Args.toJSON(message.args) : undefined);
        obj.environment = {};
        if (message.environment) {
            Object.entries(message.environment).forEach(([k, v]) => {
                obj.environment[k] = v;
            });
        }
        message.workingDir !== undefined &&
            (obj.workingDir = message.workingDir);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseImageSpec };
        message.environment = {};
        if (object.imageUrl !== undefined && object.imageUrl !== null) {
            message.imageUrl = object.imageUrl;
        }
        else {
            message.imageUrl = '';
        }
        if (object.command !== undefined && object.command !== null) {
            message.command = container_1.Command.fromPartial(object.command);
        }
        else {
            message.command = undefined;
        }
        if (object.args !== undefined && object.args !== null) {
            message.args = container_1.Args.fromPartial(object.args);
        }
        else {
            message.args = undefined;
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.environment[key] = String(value);
                }
            });
        }
        if (object.workingDir !== undefined && object.workingDir !== null) {
            message.workingDir = object.workingDir;
        }
        else {
            message.workingDir = '';
        }
        return message;
    },
};
const baseImageSpec_EnvironmentEntry = { key: '', value: '' };
exports.ImageSpec_EnvironmentEntry = {
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
            ...baseImageSpec_EnvironmentEntry,
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
            ...baseImageSpec_EnvironmentEntry,
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
            ...baseImageSpec_EnvironmentEntry,
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
const baseDeployContainerRevisionMetadata = { containerRevisionId: '' };
exports.DeployContainerRevisionMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerRevisionId !== '') {
            writer.uint32(10).string(message.containerRevisionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeployContainerRevisionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerRevisionId = reader.string();
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
            ...baseDeployContainerRevisionMetadata,
        };
        if (object.containerRevisionId !== undefined &&
            object.containerRevisionId !== null) {
            message.containerRevisionId = String(object.containerRevisionId);
        }
        else {
            message.containerRevisionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerRevisionId !== undefined &&
            (obj.containerRevisionId = message.containerRevisionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeployContainerRevisionMetadata,
        };
        if (object.containerRevisionId !== undefined &&
            object.containerRevisionId !== null) {
            message.containerRevisionId = object.containerRevisionId;
        }
        else {
            message.containerRevisionId = '';
        }
        return message;
    },
};
const baseListContainerOperationsRequest = {
    containerId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListContainerOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
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
            ...baseListContainerOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerId = reader.string();
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
            ...baseListContainerOperationsRequest,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = String(object.containerId);
        }
        else {
            message.containerId = '';
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
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListContainerOperationsRequest,
        };
        if (object.containerId !== undefined && object.containerId !== null) {
            message.containerId = object.containerId;
        }
        else {
            message.containerId = '';
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
const baseListContainerOperationsResponse = { nextPageToken: '' };
exports.ListContainerOperationsResponse = {
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
            ...baseListContainerOperationsResponse,
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
            ...baseListContainerOperationsResponse,
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
            ...baseListContainerOperationsResponse,
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
exports.ContainerServiceService = {
    get: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetContainerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetContainerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(container_1.Container.encode(value).finish()),
        responseDeserialize: (value) => container_1.Container.decode(value),
    },
    list: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListContainersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListContainersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListContainersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListContainersResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateContainerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateContainerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateContainerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateContainerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteContainerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteContainerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    deployRevision: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/DeployRevision',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeployContainerRevisionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeployContainerRevisionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    getRevision: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/GetRevision',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetContainerRevisionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetContainerRevisionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(container_1.Revision.encode(value).finish()),
        responseDeserialize: (value) => container_1.Revision.decode(value),
    },
    listRevisions: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListRevisions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListContainersRevisionsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListContainersRevisionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListContainersRevisionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListContainersRevisionsResponse.decode(value),
    },
    listOperations: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListContainerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListContainerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListContainerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListContainerOperationsResponse.decode(value),
    },
    listAccessBindings: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    setAccessBindings: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ContainerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ContainerServiceService, 'yandex.cloud.serverless.containers.v1.ContainerService');
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
