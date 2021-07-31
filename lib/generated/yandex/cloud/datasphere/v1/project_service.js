/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Project_Settings, Project, } from '../../../../yandex/cloud/datasphere/v1/project';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.datasphere.v1';
const baseCreateProjectRequest = {
    folderId: '',
    name: '',
    description: '',
};
export const CreateProjectRequest = {
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
        if (message.settings !== undefined) {
            Project_Settings.encode(message.settings, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.settings = Project_Settings.decode(reader, reader.uint32());
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
            message.settings = Project_Settings.fromJSON(object.settings);
        }
        else {
            message.settings = undefined;
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
                ? Project_Settings.toJSON(message.settings)
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
            message.settings = Project_Settings.fromPartial(object.settings);
        }
        else {
            message.settings = undefined;
        }
        return message;
    },
};
const baseCreateProjectMetadata = { projectId: '' };
export const CreateProjectMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseUpdateProjectRequest = {
    projectId: '',
    name: '',
    description: '',
};
export const UpdateProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
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
        if (message.settings !== undefined) {
            Project_Settings.encode(message.settings, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateProjectRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
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
                    message.settings = Project_Settings.decode(reader, reader.uint32());
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = Project_Settings.fromJSON(object.settings);
        }
        else {
            message.settings = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? Project_Settings.toJSON(message.settings)
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
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = Project_Settings.fromPartial(object.settings);
        }
        else {
            message.settings = undefined;
        }
        return message;
    },
};
const baseUpdateProjectMetadata = { projectId: '' };
export const UpdateProjectMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteProjectRequest = { projectId: '' };
export const DeleteProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteProjectMetadata = { projectId: '' };
export const DeleteProjectMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseOpenProjectRequest = { projectId: '' };
export const OpenProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseOpenProjectMetadata = { projectId: '' };
export const OpenProjectMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseOpenProjectResponse = { projectUrl: '', sessionToken: '' };
export const OpenProjectResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectUrl !== '') {
            writer.uint32(10).string(message.projectUrl);
        }
        if (message.sessionToken !== '') {
            writer.uint32(18).string(message.sessionToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseGetProjectRequest = { projectId: '' };
export const GetProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== '') {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListProjectsRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListProjectsRequest = {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListProjectsResponse = { nextPageToken: '' };
export const ListProjectsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.projects) {
            Project.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListProjectsResponse };
        message.projects = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(Project.decode(reader, reader.uint32()));
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
                message.projects.push(Project.fromJSON(e));
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
            obj.projects = message.projects.map((e) => e ? Project.toJSON(e) : undefined);
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
                message.projects.push(Project.fromPartial(e));
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
/** A set of methods for managing Project resources. */
export const ProjectServiceService = {
    /** Creates a project in the specified folder. */
    create: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified project. */
    update: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified project. */
    delete: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Opens the specified project. */
    open: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Open',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(OpenProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => OpenProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Returns the specified project. */
    get: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => GetProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Project.encode(value).finish()),
        responseDeserialize: (value) => Project.decode(value),
    },
    /** Lists projects for the specified folder. */
    list: {
        path: '/yandex.cloud.datasphere.v1.ProjectService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListProjectsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListProjectsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListProjectsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListProjectsResponse.decode(value),
    },
};
export const ProjectServiceClient = makeGenericClientConstructor(ProjectServiceService, 'yandex.cloud.datasphere.v1.ProjectService');
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