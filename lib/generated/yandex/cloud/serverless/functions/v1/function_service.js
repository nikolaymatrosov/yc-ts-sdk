"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionServiceClient = exports.FunctionServiceService = exports.RemoveScalingPolicyMetadata = exports.RemoveScalingPolicyRequest = exports.SetScalingPolicyMetadata = exports.SetScalingPolicyRequest = exports.ListScalingPoliciesResponse = exports.ListScalingPoliciesRequest = exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord = exports.ListFunctionTagHistoryResponse = exports.ListFunctionTagHistoryRequest = exports.RemoveFunctionTagMetadata = exports.SetFunctionTagMetadata = exports.RemoveFunctionTagRequest = exports.SetFunctionTagRequest = exports.CreateFunctionVersionMetadata = exports.CreateFunctionVersionRequest_NamedServiceAccountsEntry = exports.CreateFunctionVersionRequest_EnvironmentEntry = exports.CreateFunctionVersionRequest = exports.ListFunctionOperationsResponse = exports.ListFunctionOperationsRequest = exports.ListFunctionsVersionsResponse = exports.ListFunctionsVersionsRequest = exports.ListRuntimesResponse = exports.ListRuntimesRequest = exports.DeleteFunctionMetadata = exports.DeleteFunctionRequest = exports.UpdateFunctionMetadata = exports.UpdateFunctionRequest_LabelsEntry = exports.UpdateFunctionRequest = exports.CreateFunctionMetadata = exports.CreateFunctionRequest_LabelsEntry = exports.CreateFunctionRequest = exports.ListFunctionsResponse = exports.ListFunctionsRequest = exports.GetFunctionVersionByTagRequest = exports.GetFunctionVersionRequest = exports.GetFunctionRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../../google/protobuf/duration");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const access_1 = require("../../../../../yandex/cloud/access/access");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const function_1 = require("../../../../../yandex/cloud/serverless/functions/v1/function");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.serverless.functions.v1';
const baseGetFunctionRequest = { functionId: '' };
exports.GetFunctionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetFunctionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetFunctionRequest };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetFunctionRequest };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        return message;
    },
};
const baseGetFunctionVersionRequest = { functionVersionId: '' };
exports.GetFunctionVersionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== '') {
            writer.uint32(10).string(message.functionVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetFunctionVersionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
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
            ...baseGetFunctionVersionRequest,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = String(object.functionVersionId);
        }
        else {
            message.functionVersionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetFunctionVersionRequest,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = object.functionVersionId;
        }
        else {
            message.functionVersionId = '';
        }
        return message;
    },
};
const baseGetFunctionVersionByTagRequest = { functionId: '', tag: '' };
exports.GetFunctionVersionByTagRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== '') {
            writer.uint32(18).string(message.tag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetFunctionVersionByTagRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
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
            ...baseGetFunctionVersionByTagRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = String(object.tag);
        }
        else {
            message.tag = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetFunctionVersionByTagRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = object.tag;
        }
        else {
            message.tag = '';
        }
        return message;
    },
};
const baseListFunctionsRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListFunctionsRequest = {
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
        const message = { ...baseListFunctionsRequest };
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
        const message = { ...baseListFunctionsRequest };
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
        const message = { ...baseListFunctionsRequest };
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
const baseListFunctionsResponse = { nextPageToken: '' };
exports.ListFunctionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.functions) {
            function_1.Function.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListFunctionsResponse,
        };
        message.functions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functions.push(function_1.Function.decode(reader, reader.uint32()));
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
            ...baseListFunctionsResponse,
        };
        message.functions = [];
        if (object.functions !== undefined && object.functions !== null) {
            for (const e of object.functions) {
                message.functions.push(function_1.Function.fromJSON(e));
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
        if (message.functions) {
            obj.functions = message.functions.map((e) => e ? function_1.Function.toJSON(e) : undefined);
        }
        else {
            obj.functions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFunctionsResponse,
        };
        message.functions = [];
        if (object.functions !== undefined && object.functions !== null) {
            for (const e of object.functions) {
                message.functions.push(function_1.Function.fromPartial(e));
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
const baseCreateFunctionRequest = {
    folderId: '',
    name: '',
    description: '',
};
exports.CreateFunctionRequest = {
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
            exports.CreateFunctionRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFunctionRequest,
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
                    const entry4 = exports.CreateFunctionRequest_LabelsEntry.decode(reader, reader.uint32());
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
            ...baseCreateFunctionRequest,
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
            ...baseCreateFunctionRequest,
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
const baseCreateFunctionRequest_LabelsEntry = { key: '', value: '' };
exports.CreateFunctionRequest_LabelsEntry = {
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
            ...baseCreateFunctionRequest_LabelsEntry,
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
            ...baseCreateFunctionRequest_LabelsEntry,
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
            ...baseCreateFunctionRequest_LabelsEntry,
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
const baseCreateFunctionMetadata = { functionId: '' };
exports.CreateFunctionMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFunctionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
            ...baseCreateFunctionMetadata,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateFunctionMetadata,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        return message;
    },
};
const baseUpdateFunctionRequest = {
    functionId: '',
    name: '',
    description: '',
};
exports.UpdateFunctionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
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
            exports.UpdateFunctionRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateFunctionRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
                    const entry5 = exports.UpdateFunctionRequest_LabelsEntry.decode(reader, reader.uint32());
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
            ...baseUpdateFunctionRequest,
        };
        message.labels = {};
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
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
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
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
            ...baseUpdateFunctionRequest,
        };
        message.labels = {};
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
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
const baseUpdateFunctionRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateFunctionRequest_LabelsEntry = {
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
            ...baseUpdateFunctionRequest_LabelsEntry,
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
            ...baseUpdateFunctionRequest_LabelsEntry,
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
            ...baseUpdateFunctionRequest_LabelsEntry,
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
const baseUpdateFunctionMetadata = { functionId: '' };
exports.UpdateFunctionMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateFunctionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
            ...baseUpdateFunctionMetadata,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateFunctionMetadata,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        return message;
    },
};
const baseDeleteFunctionRequest = { functionId: '' };
exports.DeleteFunctionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFunctionRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
            ...baseDeleteFunctionRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteFunctionRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        return message;
    },
};
const baseDeleteFunctionMetadata = { functionId: '' };
exports.DeleteFunctionMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFunctionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
            ...baseDeleteFunctionMetadata,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteFunctionMetadata,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        return message;
    },
};
const baseListRuntimesRequest = {};
exports.ListRuntimesRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRuntimesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseListRuntimesRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseListRuntimesRequest };
        return message;
    },
};
const baseListRuntimesResponse = { runtimes: '' };
exports.ListRuntimesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.runtimes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListRuntimesResponse };
        message.runtimes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.runtimes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListRuntimesResponse };
        message.runtimes = [];
        if (object.runtimes !== undefined && object.runtimes !== null) {
            for (const e of object.runtimes) {
                message.runtimes.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.runtimes) {
            obj.runtimes = message.runtimes.map((e) => e);
        }
        else {
            obj.runtimes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListRuntimesResponse };
        message.runtimes = [];
        if (object.runtimes !== undefined && object.runtimes !== null) {
            for (const e of object.runtimes) {
                message.runtimes.push(e);
            }
        }
        return message;
    },
};
const baseListFunctionsVersionsRequest = {
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListFunctionsVersionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== undefined) {
            writer.uint32(10).string(message.folderId);
        }
        if (message.functionId !== undefined) {
            writer.uint32(18).string(message.functionId);
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
            ...baseListFunctionsVersionsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.functionId = reader.string();
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
            ...baseListFunctionsVersionsRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = undefined;
        }
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = undefined;
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
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFunctionsVersionsRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = undefined;
        }
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = undefined;
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
const baseListFunctionsVersionsResponse = { nextPageToken: '' };
exports.ListFunctionsVersionsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.versions) {
            function_1.Version.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListFunctionsVersionsResponse,
        };
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versions.push(function_1.Version.decode(reader, reader.uint32()));
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
            ...baseListFunctionsVersionsResponse,
        };
        message.versions = [];
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(function_1.Version.fromJSON(e));
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
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? function_1.Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFunctionsVersionsResponse,
        };
        message.versions = [];
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(function_1.Version.fromPartial(e));
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
const baseListFunctionOperationsRequest = {
    functionId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListFunctionOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
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
            ...baseListFunctionOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
            ...baseListFunctionOperationsRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
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
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFunctionOperationsRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
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
const baseListFunctionOperationsResponse = { nextPageToken: '' };
exports.ListFunctionOperationsResponse = {
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
            ...baseListFunctionOperationsResponse,
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
            ...baseListFunctionOperationsResponse,
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
            ...baseListFunctionOperationsResponse,
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
const baseCreateFunctionVersionRequest = {
    functionId: '',
    runtime: '',
    description: '',
    entrypoint: '',
    serviceAccountId: '',
    tag: '',
};
exports.CreateFunctionVersionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.runtime !== '') {
            writer.uint32(18).string(message.runtime);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.entrypoint !== '') {
            writer.uint32(34).string(message.entrypoint);
        }
        if (message.resources !== undefined) {
            function_1.Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
        }
        if (message.executionTimeout !== undefined) {
            duration_1.Duration.encode(message.executionTimeout, writer.uint32(50).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.package !== undefined) {
            function_1.Package.encode(message.package, writer.uint32(74).fork()).ldelim();
        }
        if (message.content !== undefined) {
            writer.uint32(82).bytes(message.content);
        }
        if (message.versionId !== undefined) {
            writer.uint32(90).string(message.versionId);
        }
        Object.entries(message.environment).forEach(([key, value]) => {
            exports.CreateFunctionVersionRequest_EnvironmentEntry.encode({ key: key, value }, writer.uint32(98).fork()).ldelim();
        });
        for (const v of message.tag) {
            writer.uint32(106).string(v);
        }
        if (message.connectivity !== undefined) {
            function_1.Connectivity.encode(message.connectivity, writer.uint32(138).fork()).ldelim();
        }
        Object.entries(message.namedServiceAccounts).forEach(([key, value]) => {
            exports.CreateFunctionVersionRequest_NamedServiceAccountsEntry.encode({ key: key, value }, writer.uint32(122).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFunctionVersionRequest,
        };
        message.environment = {};
        message.tag = [];
        message.namedServiceAccounts = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.runtime = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.entrypoint = reader.string();
                    break;
                case 5:
                    message.resources = function_1.Resources.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.executionTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    message.package = function_1.Package.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.content = reader.bytes();
                    break;
                case 11:
                    message.versionId = reader.string();
                    break;
                case 12:
                    const entry12 = exports.CreateFunctionVersionRequest_EnvironmentEntry.decode(reader, reader.uint32());
                    if (entry12.value !== undefined) {
                        message.environment[entry12.key] = entry12.value;
                    }
                    break;
                case 13:
                    message.tag.push(reader.string());
                    break;
                case 17:
                    message.connectivity = function_1.Connectivity.decode(reader, reader.uint32());
                    break;
                case 15:
                    const entry15 = exports.CreateFunctionVersionRequest_NamedServiceAccountsEntry.decode(reader, reader.uint32());
                    if (entry15.value !== undefined) {
                        message.namedServiceAccounts[entry15.key] =
                            entry15.value;
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
            ...baseCreateFunctionVersionRequest,
        };
        message.environment = {};
        message.tag = [];
        message.namedServiceAccounts = {};
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        if (object.runtime !== undefined && object.runtime !== null) {
            message.runtime = String(object.runtime);
        }
        else {
            message.runtime = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.entrypoint !== undefined && object.entrypoint !== null) {
            message.entrypoint = String(object.entrypoint);
        }
        else {
            message.entrypoint = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = function_1.Resources.fromJSON(object.resources);
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
        if (object.package !== undefined && object.package !== null) {
            message.package = function_1.Package.fromJSON(object.package);
        }
        else {
            message.package = undefined;
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = bytesFromBase64(object.content);
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = undefined;
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                message.environment[key] = String(value);
            });
        }
        if (object.tag !== undefined && object.tag !== null) {
            for (const e of object.tag) {
                message.tag.push(String(e));
            }
        }
        if (object.connectivity !== undefined && object.connectivity !== null) {
            message.connectivity = function_1.Connectivity.fromJSON(object.connectivity);
        }
        else {
            message.connectivity = undefined;
        }
        if (object.namedServiceAccounts !== undefined &&
            object.namedServiceAccounts !== null) {
            Object.entries(object.namedServiceAccounts).forEach(([key, value]) => {
                message.namedServiceAccounts[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.description !== undefined &&
            (obj.description = message.description);
        message.entrypoint !== undefined &&
            (obj.entrypoint = message.entrypoint);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? function_1.Resources.toJSON(message.resources)
                : undefined);
        message.executionTimeout !== undefined &&
            (obj.executionTimeout = message.executionTimeout
                ? duration_1.Duration.toJSON(message.executionTimeout)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.package !== undefined &&
            (obj.package = message.package
                ? function_1.Package.toJSON(message.package)
                : undefined);
        message.content !== undefined &&
            (obj.content =
                message.content !== undefined
                    ? base64FromBytes(message.content)
                    : undefined);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        obj.environment = {};
        if (message.environment) {
            Object.entries(message.environment).forEach(([k, v]) => {
                obj.environment[k] = v;
            });
        }
        if (message.tag) {
            obj.tag = message.tag.map((e) => e);
        }
        else {
            obj.tag = [];
        }
        message.connectivity !== undefined &&
            (obj.connectivity = message.connectivity
                ? function_1.Connectivity.toJSON(message.connectivity)
                : undefined);
        obj.namedServiceAccounts = {};
        if (message.namedServiceAccounts) {
            Object.entries(message.namedServiceAccounts).forEach(([k, v]) => {
                obj.namedServiceAccounts[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateFunctionVersionRequest,
        };
        message.environment = {};
        message.tag = [];
        message.namedServiceAccounts = {};
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        if (object.runtime !== undefined && object.runtime !== null) {
            message.runtime = object.runtime;
        }
        else {
            message.runtime = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.entrypoint !== undefined && object.entrypoint !== null) {
            message.entrypoint = object.entrypoint;
        }
        else {
            message.entrypoint = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = function_1.Resources.fromPartial(object.resources);
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
        if (object.package !== undefined && object.package !== null) {
            message.package = function_1.Package.fromPartial(object.package);
        }
        else {
            message.package = undefined;
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        else {
            message.content = undefined;
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = undefined;
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.environment[key] = String(value);
                }
            });
        }
        if (object.tag !== undefined && object.tag !== null) {
            for (const e of object.tag) {
                message.tag.push(e);
            }
        }
        if (object.connectivity !== undefined && object.connectivity !== null) {
            message.connectivity = function_1.Connectivity.fromPartial(object.connectivity);
        }
        else {
            message.connectivity = undefined;
        }
        if (object.namedServiceAccounts !== undefined &&
            object.namedServiceAccounts !== null) {
            Object.entries(object.namedServiceAccounts).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.namedServiceAccounts[key] = String(value);
                }
            });
        }
        return message;
    },
};
const baseCreateFunctionVersionRequest_EnvironmentEntry = {
    key: '',
    value: '',
};
exports.CreateFunctionVersionRequest_EnvironmentEntry = {
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
            ...baseCreateFunctionVersionRequest_EnvironmentEntry,
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
            ...baseCreateFunctionVersionRequest_EnvironmentEntry,
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
            ...baseCreateFunctionVersionRequest_EnvironmentEntry,
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
const baseCreateFunctionVersionRequest_NamedServiceAccountsEntry = {
    key: '',
    value: '',
};
exports.CreateFunctionVersionRequest_NamedServiceAccountsEntry = {
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
            ...baseCreateFunctionVersionRequest_NamedServiceAccountsEntry,
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
            ...baseCreateFunctionVersionRequest_NamedServiceAccountsEntry,
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
            ...baseCreateFunctionVersionRequest_NamedServiceAccountsEntry,
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
const baseCreateFunctionVersionMetadata = { functionVersionId: '' };
exports.CreateFunctionVersionMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== '') {
            writer.uint32(10).string(message.functionVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFunctionVersionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
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
            ...baseCreateFunctionVersionMetadata,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = String(object.functionVersionId);
        }
        else {
            message.functionVersionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateFunctionVersionMetadata,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = object.functionVersionId;
        }
        else {
            message.functionVersionId = '';
        }
        return message;
    },
};
const baseSetFunctionTagRequest = { functionVersionId: '', tag: '' };
exports.SetFunctionTagRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== '') {
            writer.uint32(10).string(message.functionVersionId);
        }
        if (message.tag !== '') {
            writer.uint32(18).string(message.tag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetFunctionTagRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
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
            ...baseSetFunctionTagRequest,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = String(object.functionVersionId);
        }
        else {
            message.functionVersionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = String(object.tag);
        }
        else {
            message.tag = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        message.tag !== undefined && (obj.tag = message.tag);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSetFunctionTagRequest,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = object.functionVersionId;
        }
        else {
            message.functionVersionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = object.tag;
        }
        else {
            message.tag = '';
        }
        return message;
    },
};
const baseRemoveFunctionTagRequest = { functionVersionId: '', tag: '' };
exports.RemoveFunctionTagRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== '') {
            writer.uint32(10).string(message.functionVersionId);
        }
        if (message.tag !== '') {
            writer.uint32(18).string(message.tag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveFunctionTagRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
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
            ...baseRemoveFunctionTagRequest,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = String(object.functionVersionId);
        }
        else {
            message.functionVersionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = String(object.tag);
        }
        else {
            message.tag = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        message.tag !== undefined && (obj.tag = message.tag);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveFunctionTagRequest,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = object.functionVersionId;
        }
        else {
            message.functionVersionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = object.tag;
        }
        else {
            message.tag = '';
        }
        return message;
    },
};
const baseSetFunctionTagMetadata = { functionVersionId: '' };
exports.SetFunctionTagMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== '') {
            writer.uint32(10).string(message.functionVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetFunctionTagMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
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
            ...baseSetFunctionTagMetadata,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = String(object.functionVersionId);
        }
        else {
            message.functionVersionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSetFunctionTagMetadata,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = object.functionVersionId;
        }
        else {
            message.functionVersionId = '';
        }
        return message;
    },
};
const baseRemoveFunctionTagMetadata = { functionVersionId: '' };
exports.RemoveFunctionTagMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionVersionId !== '') {
            writer.uint32(10).string(message.functionVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveFunctionTagMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionVersionId = reader.string();
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
            ...baseRemoveFunctionTagMetadata,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = String(object.functionVersionId);
        }
        else {
            message.functionVersionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveFunctionTagMetadata,
        };
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = object.functionVersionId;
        }
        else {
            message.functionVersionId = '';
        }
        return message;
    },
};
const baseListFunctionTagHistoryRequest = {
    functionId: '',
    tag: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListFunctionTagHistoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== '') {
            writer.uint32(18).string(message.tag);
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
            ...baseListFunctionTagHistoryRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
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
            ...baseListFunctionTagHistoryRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = String(object.tag);
        }
        else {
            message.tag = '';
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
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFunctionTagHistoryRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = object.tag;
        }
        else {
            message.tag = '';
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
const baseListFunctionTagHistoryResponse = { nextPageToken: '' };
exports.ListFunctionTagHistoryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.functionTagHistoryRecord) {
            exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListFunctionTagHistoryResponse,
        };
        message.functionTagHistoryRecord = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionTagHistoryRecord.push(exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.decode(reader, reader.uint32()));
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
            ...baseListFunctionTagHistoryResponse,
        };
        message.functionTagHistoryRecord = [];
        if (object.functionTagHistoryRecord !== undefined &&
            object.functionTagHistoryRecord !== null) {
            for (const e of object.functionTagHistoryRecord) {
                message.functionTagHistoryRecord.push(exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.fromJSON(e));
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
        if (message.functionTagHistoryRecord) {
            obj.functionTagHistoryRecord = message.functionTagHistoryRecord.map((e) => e
                ? exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.toJSON(e)
                : undefined);
        }
        else {
            obj.functionTagHistoryRecord = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFunctionTagHistoryResponse,
        };
        message.functionTagHistoryRecord = [];
        if (object.functionTagHistoryRecord !== undefined &&
            object.functionTagHistoryRecord !== null) {
            for (const e of object.functionTagHistoryRecord) {
                message.functionTagHistoryRecord.push(exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord.fromPartial(e));
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
const baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord = {
    functionId: '',
    functionVersionId: '',
    tag: '',
};
exports.ListFunctionTagHistoryResponse_FunctionTagHistoryRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.functionVersionId !== '') {
            writer.uint32(26).string(message.functionVersionId);
        }
        if (message.tag !== '') {
            writer.uint32(18).string(message.tag);
        }
        if (message.effectiveFrom !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.effectiveFrom), writer.uint32(34).fork()).ldelim();
        }
        if (message.effectiveTo !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.effectiveTo), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 3:
                    message.functionVersionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                case 4:
                    message.effectiveFrom = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.effectiveTo = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            ...baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = String(object.functionVersionId);
        }
        else {
            message.functionVersionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = String(object.tag);
        }
        else {
            message.tag = '';
        }
        if (object.effectiveFrom !== undefined &&
            object.effectiveFrom !== null) {
            message.effectiveFrom = fromJsonTimestamp(object.effectiveFrom);
        }
        else {
            message.effectiveFrom = undefined;
        }
        if (object.effectiveTo !== undefined && object.effectiveTo !== null) {
            message.effectiveTo = fromJsonTimestamp(object.effectiveTo);
        }
        else {
            message.effectiveTo = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.functionVersionId !== undefined &&
            (obj.functionVersionId = message.functionVersionId);
        message.tag !== undefined && (obj.tag = message.tag);
        message.effectiveFrom !== undefined &&
            (obj.effectiveFrom = message.effectiveFrom.toISOString());
        message.effectiveTo !== undefined &&
            (obj.effectiveTo = message.effectiveTo.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFunctionTagHistoryResponse_FunctionTagHistoryRecord,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        if (object.functionVersionId !== undefined &&
            object.functionVersionId !== null) {
            message.functionVersionId = object.functionVersionId;
        }
        else {
            message.functionVersionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = object.tag;
        }
        else {
            message.tag = '';
        }
        if (object.effectiveFrom !== undefined &&
            object.effectiveFrom !== null) {
            message.effectiveFrom = object.effectiveFrom;
        }
        else {
            message.effectiveFrom = undefined;
        }
        if (object.effectiveTo !== undefined && object.effectiveTo !== null) {
            message.effectiveTo = object.effectiveTo;
        }
        else {
            message.effectiveTo = undefined;
        }
        return message;
    },
};
const baseListScalingPoliciesRequest = {
    functionId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListScalingPoliciesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
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
            ...baseListScalingPoliciesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
            ...baseListScalingPoliciesRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
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
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListScalingPoliciesRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
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
const baseListScalingPoliciesResponse = { nextPageToken: '' };
exports.ListScalingPoliciesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.scalingPolicies) {
            function_1.ScalingPolicy.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListScalingPoliciesResponse,
        };
        message.scalingPolicies = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scalingPolicies.push(function_1.ScalingPolicy.decode(reader, reader.uint32()));
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
            ...baseListScalingPoliciesResponse,
        };
        message.scalingPolicies = [];
        if (object.scalingPolicies !== undefined &&
            object.scalingPolicies !== null) {
            for (const e of object.scalingPolicies) {
                message.scalingPolicies.push(function_1.ScalingPolicy.fromJSON(e));
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
        if (message.scalingPolicies) {
            obj.scalingPolicies = message.scalingPolicies.map((e) => e ? function_1.ScalingPolicy.toJSON(e) : undefined);
        }
        else {
            obj.scalingPolicies = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListScalingPoliciesResponse,
        };
        message.scalingPolicies = [];
        if (object.scalingPolicies !== undefined &&
            object.scalingPolicies !== null) {
            for (const e of object.scalingPolicies) {
                message.scalingPolicies.push(function_1.ScalingPolicy.fromPartial(e));
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
const baseSetScalingPolicyRequest = {
    functionId: '',
    tag: '',
    provisionedInstancesCount: 0,
    zoneInstancesLimit: 0,
    zoneRequestsLimit: 0,
};
exports.SetScalingPolicyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== '') {
            writer.uint32(18).string(message.tag);
        }
        if (message.provisionedInstancesCount !== 0) {
            writer.uint32(32).int64(message.provisionedInstancesCount);
        }
        if (message.zoneInstancesLimit !== 0) {
            writer.uint32(40).int64(message.zoneInstancesLimit);
        }
        if (message.zoneRequestsLimit !== 0) {
            writer.uint32(48).int64(message.zoneRequestsLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetScalingPolicyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                case 4:
                    message.provisionedInstancesCount = longToNumber(reader.int64());
                    break;
                case 5:
                    message.zoneInstancesLimit = longToNumber(reader.int64());
                    break;
                case 6:
                    message.zoneRequestsLimit = longToNumber(reader.int64());
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
            ...baseSetScalingPolicyRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = String(object.tag);
        }
        else {
            message.tag = '';
        }
        if (object.provisionedInstancesCount !== undefined &&
            object.provisionedInstancesCount !== null) {
            message.provisionedInstancesCount = Number(object.provisionedInstancesCount);
        }
        else {
            message.provisionedInstancesCount = 0;
        }
        if (object.zoneInstancesLimit !== undefined &&
            object.zoneInstancesLimit !== null) {
            message.zoneInstancesLimit = Number(object.zoneInstancesLimit);
        }
        else {
            message.zoneInstancesLimit = 0;
        }
        if (object.zoneRequestsLimit !== undefined &&
            object.zoneRequestsLimit !== null) {
            message.zoneRequestsLimit = Number(object.zoneRequestsLimit);
        }
        else {
            message.zoneRequestsLimit = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        message.provisionedInstancesCount !== undefined &&
            (obj.provisionedInstancesCount = message.provisionedInstancesCount);
        message.zoneInstancesLimit !== undefined &&
            (obj.zoneInstancesLimit = message.zoneInstancesLimit);
        message.zoneRequestsLimit !== undefined &&
            (obj.zoneRequestsLimit = message.zoneRequestsLimit);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSetScalingPolicyRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = object.tag;
        }
        else {
            message.tag = '';
        }
        if (object.provisionedInstancesCount !== undefined &&
            object.provisionedInstancesCount !== null) {
            message.provisionedInstancesCount =
                object.provisionedInstancesCount;
        }
        else {
            message.provisionedInstancesCount = 0;
        }
        if (object.zoneInstancesLimit !== undefined &&
            object.zoneInstancesLimit !== null) {
            message.zoneInstancesLimit = object.zoneInstancesLimit;
        }
        else {
            message.zoneInstancesLimit = 0;
        }
        if (object.zoneRequestsLimit !== undefined &&
            object.zoneRequestsLimit !== null) {
            message.zoneRequestsLimit = object.zoneRequestsLimit;
        }
        else {
            message.zoneRequestsLimit = 0;
        }
        return message;
    },
};
const baseSetScalingPolicyMetadata = { functionId: '' };
exports.SetScalingPolicyMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetScalingPolicyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
            ...baseSetScalingPolicyMetadata,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSetScalingPolicyMetadata,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        return message;
    },
};
const baseRemoveScalingPolicyRequest = { functionId: '', tag: '' };
exports.RemoveScalingPolicyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== '') {
            writer.uint32(18).string(message.tag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveScalingPolicyRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
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
            ...baseRemoveScalingPolicyRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = String(object.tag);
        }
        else {
            message.tag = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveScalingPolicyRequest,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = object.tag;
        }
        else {
            message.tag = '';
        }
        return message;
    },
};
const baseRemoveScalingPolicyMetadata = { functionId: '' };
exports.RemoveScalingPolicyMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveScalingPolicyMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
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
            ...baseRemoveScalingPolicyMetadata,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveScalingPolicyMetadata,
        };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        return message;
    },
};
/** A set of methods for managing serverless functions. */
exports.FunctionServiceService = {
    /**
     * Returns the specified function.
     *
     * To get the list of all available functions, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetFunctionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetFunctionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(function_1.Function.encode(value).finish()),
        responseDeserialize: (value) => function_1.Function.decode(value),
    },
    /** Retrieves the list of functions in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFunctionsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFunctionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFunctionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFunctionsResponse.decode(value),
    },
    /** Creates a function in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateFunctionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateFunctionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified function. */
    update: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateFunctionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateFunctionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified function. */
    delete: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteFunctionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteFunctionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Returns the specified version of a function.
     *
     * To get the list of available version, make a [ListVersions] request.
     */
    getVersion: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/GetVersion',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetFunctionVersionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetFunctionVersionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(function_1.Version.encode(value).finish()),
        responseDeserialize: (value) => function_1.Version.decode(value),
    },
    /**
     * Returns all versions with the specified tag.
     *
     * To get the list of all available versions, make a [ListVersions] request.
     */
    getVersionByTag: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/GetVersionByTag',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetFunctionVersionByTagRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetFunctionVersionByTagRequest.decode(value),
        responseSerialize: (value) => Buffer.from(function_1.Version.encode(value).finish()),
        responseDeserialize: (value) => function_1.Version.decode(value),
    },
    /**
     * Retrieves the list of versions for the specified function, or of all function versions
     * in the specified folder.
     */
    listVersions: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListVersions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFunctionsVersionsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFunctionsVersionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFunctionsVersionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFunctionsVersionsResponse.decode(value),
    },
    /** Set a tag for the specified version of a function. */
    setTag: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/SetTag',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SetFunctionTagRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SetFunctionTagRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Remove a tag from the specified version of a function. */
    removeTag: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/RemoveTag',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveFunctionTagRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveFunctionTagRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the log of tags assigned to versions of the specified function. */
    listTagHistory: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListTagHistory',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFunctionTagHistoryRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFunctionTagHistoryRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFunctionTagHistoryResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFunctionTagHistoryResponse.decode(value),
    },
    /** Creates a version for the specified function. */
    createVersion: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/CreateVersion',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateFunctionVersionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateFunctionVersionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists available runtime environments for the specified function. */
    listRuntimes: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListRuntimes',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRuntimesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRuntimesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRuntimesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRuntimesResponse.decode(value),
    },
    /** Lists operations for the specified function. */
    listOperations: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFunctionOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFunctionOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFunctionOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFunctionOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified function. */
    listAccessBindings: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the function. */
    setAccessBindings: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified function. */
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists existing scaling policies for specified function */
    listScalingPolicies: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListScalingPolicies',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListScalingPoliciesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListScalingPoliciesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListScalingPoliciesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListScalingPoliciesResponse.decode(value),
    },
    /** Set scaling policy for specified function and tag */
    setScalingPolicy: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/SetScalingPolicy',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SetScalingPolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SetScalingPolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Remove scaling policy for specified function and tag */
    removeScalingPolicy: {
        path: '/yandex.cloud.serverless.functions.v1.FunctionService/RemoveScalingPolicy',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveScalingPolicyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveScalingPolicyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.FunctionServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.FunctionServiceService, 'yandex.cloud.serverless.functions.v1.FunctionService');
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
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
