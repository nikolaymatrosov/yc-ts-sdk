"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServiceClient = exports.ProjectServiceService = exports.GetStateVariablesResponse = exports.GetStateVariablesRequest = exports.CellOutputsResponse = exports.CellOutputsRequest = exports.ProjectExecutionResponse = exports.ProjectExecutionMetadata = exports.ProjectExecutionRequest = exports.SetUnitBalanceRequest = exports.GetUnitBalanceResponse = exports.GetUnitBalanceRequest = exports.ListProjectsResponse = exports.ListProjectsRequest = exports.GetProjectRequest = exports.OpenProjectResponse = exports.OpenProjectMetadata = exports.OpenProjectRequest = exports.DeleteProjectMetadata = exports.DeleteProjectRequest = exports.UpdateProjectMetadata = exports.UpdateProjectRequest = exports.CreateProjectMetadata = exports.CreateProjectRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const empty_1 = require("../../../../google/protobuf/empty");
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const struct_1 = require("../../../../google/protobuf/struct");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const wrappers_1 = require("../../../../google/protobuf/wrappers");
const typeRegistry_1 = require("../../../../typeRegistry");
const project_1 = require("../../../../yandex/cloud/datasphere/v1/project");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.datasphere.v1';
const baseCreateProjectRequest = {
    $type: 'yandex.cloud.datasphere.v1.CreateProjectRequest',
    folderId: '',
    name: '',
    description: '',
};
exports.CreateProjectRequest = {
    $type: 'yandex.cloud.datasphere.v1.CreateProjectRequest',
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
        if (message.settings !== undefined) {
            project_1.Project_Settings.encode(message.settings, writer.uint32(34).fork()).ldelim();
        }
        if (message.limits !== undefined) {
            project_1.Project_Limits.encode(message.limits, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProjectRequest };
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
                    message.settings = project_1.Project_Settings.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.limits = project_1.Project_Limits.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateProjectRequest };
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = project_1.Project_Settings.fromJSON(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = project_1.Project_Limits.fromJSON(object.limits);
        }
        else {
            message.limits = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? project_1.Project_Settings.toJSON(message.settings)
                : undefined);
        message.limits !== undefined &&
            (obj.limits = message.limits
                ? project_1.Project_Limits.toJSON(message.limits)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateProjectRequest };
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = project_1.Project_Settings.fromPartial(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = project_1.Project_Limits.fromPartial(object.limits);
        }
        else {
            message.limits = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateProjectRequest.$type, exports.CreateProjectRequest);
const baseCreateProjectMetadata = {
    $type: 'yandex.cloud.datasphere.v1.CreateProjectMetadata',
    projectId: '',
};
exports.CreateProjectMetadata = {
    $type: 'yandex.cloud.datasphere.v1.CreateProjectMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateProjectMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
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
            ...baseCreateProjectMetadata,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateProjectMetadata,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateProjectMetadata.$type, exports.CreateProjectMetadata);
const baseUpdateProjectRequest = {
    $type: 'yandex.cloud.datasphere.v1.UpdateProjectRequest',
    projectId: '',
    name: '',
    description: '',
};
exports.UpdateProjectRequest = {
    $type: 'yandex.cloud.datasphere.v1.UpdateProjectRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
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
        if (message.settings !== undefined) {
            project_1.Project_Settings.encode(message.settings, writer.uint32(42).fork()).ldelim();
        }
        if (message.limits !== undefined) {
            project_1.Project_Limits.encode(message.limits, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateProjectRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
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
                    message.settings = project_1.Project_Settings.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.limits = project_1.Project_Limits.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateProjectRequest };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = project_1.Project_Settings.fromJSON(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = project_1.Project_Limits.fromJSON(object.limits);
        }
        else {
            message.limits = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? project_1.Project_Settings.toJSON(message.settings)
                : undefined);
        message.limits !== undefined &&
            (obj.limits = message.limits
                ? project_1.Project_Limits.toJSON(message.limits)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateProjectRequest };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = project_1.Project_Settings.fromPartial(object.settings);
        }
        else {
            message.settings = undefined;
        }
        if (object.limits !== undefined && object.limits !== null) {
            message.limits = project_1.Project_Limits.fromPartial(object.limits);
        }
        else {
            message.limits = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateProjectRequest.$type, exports.UpdateProjectRequest);
const baseUpdateProjectMetadata = {
    $type: 'yandex.cloud.datasphere.v1.UpdateProjectMetadata',
    projectId: '',
};
exports.UpdateProjectMetadata = {
    $type: 'yandex.cloud.datasphere.v1.UpdateProjectMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateProjectMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
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
            ...baseUpdateProjectMetadata,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateProjectMetadata,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateProjectMetadata.$type, exports.UpdateProjectMetadata);
const baseDeleteProjectRequest = {
    $type: 'yandex.cloud.datasphere.v1.DeleteProjectRequest',
    projectId: '',
};
exports.DeleteProjectRequest = {
    $type: 'yandex.cloud.datasphere.v1.DeleteProjectRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteProjectRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteProjectRequest };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteProjectRequest };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteProjectRequest.$type, exports.DeleteProjectRequest);
const baseDeleteProjectMetadata = {
    $type: 'yandex.cloud.datasphere.v1.DeleteProjectMetadata',
    projectId: '',
};
exports.DeleteProjectMetadata = {
    $type: 'yandex.cloud.datasphere.v1.DeleteProjectMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteProjectMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
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
            ...baseDeleteProjectMetadata,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteProjectMetadata,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteProjectMetadata.$type, exports.DeleteProjectMetadata);
const baseOpenProjectRequest = {
    $type: 'yandex.cloud.datasphere.v1.OpenProjectRequest',
    projectId: '',
};
exports.OpenProjectRequest = {
    $type: 'yandex.cloud.datasphere.v1.OpenProjectRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenProjectRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOpenProjectRequest };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOpenProjectRequest };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenProjectRequest.$type, exports.OpenProjectRequest);
const baseOpenProjectMetadata = {
    $type: 'yandex.cloud.datasphere.v1.OpenProjectMetadata',
    projectId: '',
};
exports.OpenProjectMetadata = {
    $type: 'yandex.cloud.datasphere.v1.OpenProjectMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenProjectMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOpenProjectMetadata };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOpenProjectMetadata };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenProjectMetadata.$type, exports.OpenProjectMetadata);
const baseOpenProjectResponse = {
    $type: 'yandex.cloud.datasphere.v1.OpenProjectResponse',
    projectUrl: '',
    sessionToken: '',
};
exports.OpenProjectResponse = {
    $type: 'yandex.cloud.datasphere.v1.OpenProjectResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectUrl !== '') {
            writer.uint32(10).string(message.projectUrl);
        }
        if (message.sessionToken !== '') {
            writer.uint32(18).string(message.sessionToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOpenProjectResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectUrl = reader.string();
                    break;
                case 2:
                    message.sessionToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOpenProjectResponse };
        if (object.projectUrl !== undefined && object.projectUrl !== null) {
            message.projectUrl = String(object.projectUrl);
        }
        else {
            message.projectUrl = '';
        }
        if (object.sessionToken !== undefined && object.sessionToken !== null) {
            message.sessionToken = String(object.sessionToken);
        }
        else {
            message.sessionToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectUrl !== undefined &&
            (obj.projectUrl = message.projectUrl);
        message.sessionToken !== undefined &&
            (obj.sessionToken = message.sessionToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOpenProjectResponse };
        if (object.projectUrl !== undefined && object.projectUrl !== null) {
            message.projectUrl = object.projectUrl;
        }
        else {
            message.projectUrl = '';
        }
        if (object.sessionToken !== undefined && object.sessionToken !== null) {
            message.sessionToken = object.sessionToken;
        }
        else {
            message.sessionToken = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.OpenProjectResponse.$type, exports.OpenProjectResponse);
const baseGetProjectRequest = {
    $type: 'yandex.cloud.datasphere.v1.GetProjectRequest',
    projectId: '',
};
exports.GetProjectRequest = {
    $type: 'yandex.cloud.datasphere.v1.GetProjectRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetProjectRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetProjectRequest };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetProjectRequest };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetProjectRequest.$type, exports.GetProjectRequest);
const baseListProjectsRequest = {
    $type: 'yandex.cloud.datasphere.v1.ListProjectsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListProjectsRequest = {
    $type: 'yandex.cloud.datasphere.v1.ListProjectsRequest',
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
        const message = { ...baseListProjectsRequest };
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
        const message = { ...baseListProjectsRequest };
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
        const message = { ...baseListProjectsRequest };
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
typeRegistry_1.messageTypeRegistry.set(exports.ListProjectsRequest.$type, exports.ListProjectsRequest);
const baseListProjectsResponse = {
    $type: 'yandex.cloud.datasphere.v1.ListProjectsResponse',
    nextPageToken: '',
};
exports.ListProjectsResponse = {
    $type: 'yandex.cloud.datasphere.v1.ListProjectsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.projects) {
            project_1.Project.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListProjectsResponse };
        message.projects = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(project_1.Project.decode(reader, reader.uint32()));
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
        const message = { ...baseListProjectsResponse };
        message.projects = [];
        if (object.projects !== undefined && object.projects !== null) {
            for (const e of object.projects) {
                message.projects.push(project_1.Project.fromJSON(e));
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
        if (message.projects) {
            obj.projects = message.projects.map((e) => e ? project_1.Project.toJSON(e) : undefined);
        }
        else {
            obj.projects = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListProjectsResponse };
        message.projects = [];
        if (object.projects !== undefined && object.projects !== null) {
            for (const e of object.projects) {
                message.projects.push(project_1.Project.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListProjectsResponse.$type, exports.ListProjectsResponse);
const baseGetUnitBalanceRequest = {
    $type: 'yandex.cloud.datasphere.v1.GetUnitBalanceRequest',
    projectId: '',
};
exports.GetUnitBalanceRequest = {
    $type: 'yandex.cloud.datasphere.v1.GetUnitBalanceRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetUnitBalanceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
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
            ...baseGetUnitBalanceRequest,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetUnitBalanceRequest,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetUnitBalanceRequest.$type, exports.GetUnitBalanceRequest);
const baseGetUnitBalanceResponse = {
    $type: 'yandex.cloud.datasphere.v1.GetUnitBalanceResponse',
};
exports.GetUnitBalanceResponse = {
    $type: 'yandex.cloud.datasphere.v1.GetUnitBalanceResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.unitBalance !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.unitBalance,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetUnitBalanceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unitBalance = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
            ...baseGetUnitBalanceResponse,
        };
        if (object.unitBalance !== undefined && object.unitBalance !== null) {
            message.unitBalance = Number(object.unitBalance);
        }
        else {
            message.unitBalance = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.unitBalance !== undefined &&
            (obj.unitBalance = message.unitBalance);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetUnitBalanceResponse,
        };
        if (object.unitBalance !== undefined && object.unitBalance !== null) {
            message.unitBalance = object.unitBalance;
        }
        else {
            message.unitBalance = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetUnitBalanceResponse.$type, exports.GetUnitBalanceResponse);
const baseSetUnitBalanceRequest = {
    $type: 'yandex.cloud.datasphere.v1.SetUnitBalanceRequest',
    projectId: '',
};
exports.SetUnitBalanceRequest = {
    $type: 'yandex.cloud.datasphere.v1.SetUnitBalanceRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.unitBalance !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.unitBalance,
            }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSetUnitBalanceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.unitBalance = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
            ...baseSetUnitBalanceRequest,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        if (object.unitBalance !== undefined && object.unitBalance !== null) {
            message.unitBalance = Number(object.unitBalance);
        }
        else {
            message.unitBalance = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.unitBalance !== undefined &&
            (obj.unitBalance = message.unitBalance);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSetUnitBalanceRequest,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        if (object.unitBalance !== undefined && object.unitBalance !== null) {
            message.unitBalance = object.unitBalance;
        }
        else {
            message.unitBalance = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SetUnitBalanceRequest.$type, exports.SetUnitBalanceRequest);
const baseProjectExecutionRequest = {
    $type: 'yandex.cloud.datasphere.v1.ProjectExecutionRequest',
    projectId: '',
    outputVariableNames: '',
};
exports.ProjectExecutionRequest = {
    $type: 'yandex.cloud.datasphere.v1.ProjectExecutionRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookId !== undefined) {
            writer.uint32(18).string(message.notebookId);
        }
        if (message.cellId !== undefined) {
            writer.uint32(26).string(message.cellId);
        }
        if (message.inputVariables !== undefined) {
            struct_1.Struct.encode(message.inputVariables, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.outputVariableNames) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseProjectExecutionRequest,
        };
        message.outputVariableNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookId = reader.string();
                    break;
                case 3:
                    message.cellId = reader.string();
                    break;
                case 4:
                    message.inputVariables = struct_1.Struct.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.outputVariableNames.push(reader.string());
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
            ...baseProjectExecutionRequest,
        };
        message.outputVariableNames = [];
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = String(object.notebookId);
        }
        else {
            message.notebookId = undefined;
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = String(object.cellId);
        }
        else {
            message.cellId = undefined;
        }
        if (object.inputVariables !== undefined &&
            object.inputVariables !== null) {
            message.inputVariables = struct_1.Struct.fromJSON(object.inputVariables);
        }
        else {
            message.inputVariables = undefined;
        }
        if (object.outputVariableNames !== undefined &&
            object.outputVariableNames !== null) {
            for (const e of object.outputVariableNames) {
                message.outputVariableNames.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookId !== undefined &&
            (obj.notebookId = message.notebookId);
        message.cellId !== undefined && (obj.cellId = message.cellId);
        message.inputVariables !== undefined &&
            (obj.inputVariables = message.inputVariables
                ? struct_1.Struct.toJSON(message.inputVariables)
                : undefined);
        if (message.outputVariableNames) {
            obj.outputVariableNames = message.outputVariableNames.map((e) => e);
        }
        else {
            obj.outputVariableNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseProjectExecutionRequest,
        };
        message.outputVariableNames = [];
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = object.notebookId;
        }
        else {
            message.notebookId = undefined;
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = object.cellId;
        }
        else {
            message.cellId = undefined;
        }
        if (object.inputVariables !== undefined &&
            object.inputVariables !== null) {
            message.inputVariables = struct_1.Struct.fromPartial(object.inputVariables);
        }
        else {
            message.inputVariables = undefined;
        }
        if (object.outputVariableNames !== undefined &&
            object.outputVariableNames !== null) {
            for (const e of object.outputVariableNames) {
                message.outputVariableNames.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ProjectExecutionRequest.$type, exports.ProjectExecutionRequest);
const baseProjectExecutionMetadata = {
    $type: 'yandex.cloud.datasphere.v1.ProjectExecutionMetadata',
    projectId: '',
};
exports.ProjectExecutionMetadata = {
    $type: 'yandex.cloud.datasphere.v1.ProjectExecutionMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookId !== undefined) {
            writer.uint32(18).string(message.notebookId);
        }
        if (message.cellId !== undefined) {
            writer.uint32(26).string(message.cellId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseProjectExecutionMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookId = reader.string();
                    break;
                case 3:
                    message.cellId = reader.string();
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
            ...baseProjectExecutionMetadata,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = String(object.notebookId);
        }
        else {
            message.notebookId = undefined;
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = String(object.cellId);
        }
        else {
            message.cellId = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookId !== undefined &&
            (obj.notebookId = message.notebookId);
        message.cellId !== undefined && (obj.cellId = message.cellId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseProjectExecutionMetadata,
        };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = object.notebookId;
        }
        else {
            message.notebookId = undefined;
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = object.cellId;
        }
        else {
            message.cellId = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ProjectExecutionMetadata.$type, exports.ProjectExecutionMetadata);
const baseProjectExecutionResponse = {
    $type: 'yandex.cloud.datasphere.v1.ProjectExecutionResponse',
    checkpointId: '',
};
exports.ProjectExecutionResponse = {
    $type: 'yandex.cloud.datasphere.v1.ProjectExecutionResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.checkpointId !== '') {
            writer.uint32(10).string(message.checkpointId);
        }
        if (message.outputVariables !== undefined) {
            struct_1.Struct.encode(message.outputVariables, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseProjectExecutionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.checkpointId = reader.string();
                    break;
                case 2:
                    message.outputVariables = struct_1.Struct.decode(reader, reader.uint32());
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
            ...baseProjectExecutionResponse,
        };
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = String(object.checkpointId);
        }
        else {
            message.checkpointId = '';
        }
        if (object.outputVariables !== undefined &&
            object.outputVariables !== null) {
            message.outputVariables = struct_1.Struct.fromJSON(object.outputVariables);
        }
        else {
            message.outputVariables = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.checkpointId !== undefined &&
            (obj.checkpointId = message.checkpointId);
        message.outputVariables !== undefined &&
            (obj.outputVariables = message.outputVariables
                ? struct_1.Struct.toJSON(message.outputVariables)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseProjectExecutionResponse,
        };
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = object.checkpointId;
        }
        else {
            message.checkpointId = '';
        }
        if (object.outputVariables !== undefined &&
            object.outputVariables !== null) {
            message.outputVariables = struct_1.Struct.fromPartial(object.outputVariables);
        }
        else {
            message.outputVariables = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ProjectExecutionResponse.$type, exports.ProjectExecutionResponse);
const baseCellOutputsRequest = {
    $type: 'yandex.cloud.datasphere.v1.CellOutputsRequest',
    projectId: '',
    cellId: '',
    checkpointId: '',
};
exports.CellOutputsRequest = {
    $type: 'yandex.cloud.datasphere.v1.CellOutputsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.cellId !== '') {
            writer.uint32(18).string(message.cellId);
        }
        if (message.checkpointId !== '') {
            writer.uint32(26).string(message.checkpointId);
        }
        if (message.startAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCellOutputsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.cellId = reader.string();
                    break;
                case 3:
                    message.checkpointId = reader.string();
                    break;
                case 4:
                    message.startAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCellOutputsRequest };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = String(object.cellId);
        }
        else {
            message.cellId = '';
        }
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = String(object.checkpointId);
        }
        else {
            message.checkpointId = '';
        }
        if (object.startAt !== undefined && object.startAt !== null) {
            message.startAt = fromJsonTimestamp(object.startAt);
        }
        else {
            message.startAt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.cellId !== undefined && (obj.cellId = message.cellId);
        message.checkpointId !== undefined &&
            (obj.checkpointId = message.checkpointId);
        message.startAt !== undefined &&
            (obj.startAt = message.startAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCellOutputsRequest };
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        if (object.cellId !== undefined && object.cellId !== null) {
            message.cellId = object.cellId;
        }
        else {
            message.cellId = '';
        }
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = object.checkpointId;
        }
        else {
            message.checkpointId = '';
        }
        if (object.startAt !== undefined && object.startAt !== null) {
            message.startAt = object.startAt;
        }
        else {
            message.startAt = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CellOutputsRequest.$type, exports.CellOutputsRequest);
const baseCellOutputsResponse = {
    $type: 'yandex.cloud.datasphere.v1.CellOutputsResponse',
    outputs: '',
};
exports.CellOutputsResponse = {
    $type: 'yandex.cloud.datasphere.v1.CellOutputsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.outputs) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCellOutputsResponse };
        message.outputs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.outputs.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCellOutputsResponse };
        message.outputs = [];
        if (object.outputs !== undefined && object.outputs !== null) {
            for (const e of object.outputs) {
                message.outputs.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.outputs) {
            obj.outputs = message.outputs.map((e) => e);
        }
        else {
            obj.outputs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCellOutputsResponse };
        message.outputs = [];
        if (object.outputs !== undefined && object.outputs !== null) {
            for (const e of object.outputs) {
                message.outputs.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CellOutputsResponse.$type, exports.CellOutputsResponse);
const baseGetStateVariablesRequest = {
    $type: 'yandex.cloud.datasphere.v1.GetStateVariablesRequest',
    projectId: '',
    notebookId: '',
    variableNames: '',
    checkpointId: '',
};
exports.GetStateVariablesRequest = {
    $type: 'yandex.cloud.datasphere.v1.GetStateVariablesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        if (message.notebookId !== '') {
            writer.uint32(18).string(message.notebookId);
        }
        for (const v of message.variableNames) {
            writer.uint32(26).string(v);
        }
        if (message.checkpointId !== '') {
            writer.uint32(34).string(message.checkpointId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetStateVariablesRequest,
        };
        message.variableNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.notebookId = reader.string();
                    break;
                case 3:
                    message.variableNames.push(reader.string());
                    break;
                case 4:
                    message.checkpointId = reader.string();
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
            ...baseGetStateVariablesRequest,
        };
        message.variableNames = [];
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = String(object.projectId);
        }
        else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = String(object.notebookId);
        }
        else {
            message.notebookId = '';
        }
        if (object.variableNames !== undefined &&
            object.variableNames !== null) {
            for (const e of object.variableNames) {
                message.variableNames.push(String(e));
            }
        }
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = String(object.checkpointId);
        }
        else {
            message.checkpointId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.notebookId !== undefined &&
            (obj.notebookId = message.notebookId);
        if (message.variableNames) {
            obj.variableNames = message.variableNames.map((e) => e);
        }
        else {
            obj.variableNames = [];
        }
        message.checkpointId !== undefined &&
            (obj.checkpointId = message.checkpointId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetStateVariablesRequest,
        };
        message.variableNames = [];
        if (object.projectId !== undefined && object.projectId !== null) {
            message.projectId = object.projectId;
        }
        else {
            message.projectId = '';
        }
        if (object.notebookId !== undefined && object.notebookId !== null) {
            message.notebookId = object.notebookId;
        }
        else {
            message.notebookId = '';
        }
        if (object.variableNames !== undefined &&
            object.variableNames !== null) {
            for (const e of object.variableNames) {
                message.variableNames.push(e);
            }
        }
        if (object.checkpointId !== undefined && object.checkpointId !== null) {
            message.checkpointId = object.checkpointId;
        }
        else {
            message.checkpointId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetStateVariablesRequest.$type, exports.GetStateVariablesRequest);
const baseGetStateVariablesResponse = {
    $type: 'yandex.cloud.datasphere.v1.GetStateVariablesResponse',
};
exports.GetStateVariablesResponse = {
    $type: 'yandex.cloud.datasphere.v1.GetStateVariablesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.variables !== undefined) {
            struct_1.Struct.encode(message.variables, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetStateVariablesResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.variables = struct_1.Struct.decode(reader, reader.uint32());
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
            ...baseGetStateVariablesResponse,
        };
        if (object.variables !== undefined && object.variables !== null) {
            message.variables = struct_1.Struct.fromJSON(object.variables);
        }
        else {
            message.variables = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.variables !== undefined &&
            (obj.variables = message.variables
                ? struct_1.Struct.toJSON(message.variables)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetStateVariablesResponse,
        };
        if (object.variables !== undefined && object.variables !== null) {
            message.variables = struct_1.Struct.fromPartial(object.variables);
        }
        else {
            message.variables = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetStateVariablesResponse.$type, exports.GetStateVariablesResponse);
/** A set of methods for managing Project resources. */
exports.ProjectServiceService = {
    /** Creates a project in the specified folder. */
    create: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified project. */
    update: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified project. */
    delete: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Opens the specified project. */
    open: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Open',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.OpenProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.OpenProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the specified project. */
    get: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(project_1.Project.encode(value).finish()),
        responseDeserialize: (value) => project_1.Project.decode(value),
    },
    /** Lists projects for the specified folder. */
    list: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListProjectsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListProjectsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListProjectsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListProjectsResponse.decode(value),
    },
    /** Returns the unit balance of the specified project. */
    getUnitBalance: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/GetUnitBalance',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetUnitBalanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetUnitBalanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetUnitBalanceResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetUnitBalanceResponse.decode(value),
    },
    /** Sets the unit balance of the specified project. */
    setUnitBalance: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/SetUnitBalance',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SetUnitBalanceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SetUnitBalanceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
    /** Executes code in the specified cell or notebook. */
    execute: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Execute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ProjectExecutionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ProjectExecutionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns outputs of the specified cell. */
    getCellOutputs: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/GetCellOutputs',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CellOutputsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CellOutputsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CellOutputsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CellOutputsResponse.decode(value),
    },
    /** Returns state variables of the specified notebook. */
    getStateVariables: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/GetStateVariables',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetStateVariablesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetStateVariablesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetStateVariablesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetStateVariablesResponse.decode(value),
    },
};
exports.ProjectServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ProjectServiceService, 'yandex.cloud.datasphere.v1.ProjectService');
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
