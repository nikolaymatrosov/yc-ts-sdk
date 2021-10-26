/* eslint-disable */
import { Duration } from '../../../../../google/protobuf/duration';
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest, } from '../../../../../yandex/cloud/access/access';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { Container, Revision, Resources, Command, Args, } from '../../../../../yandex/cloud/serverless/containers/v1/container';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.serverless.containers.v1';
const baseGetContainerRequest = { containerId: '' };
export const GetContainerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListContainersRequest = {
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
export const ListContainersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.containers) {
            Container.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListContainersResponse,
        };
        message.containers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containers.push(Container.decode(reader, reader.uint32()));
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
                message.containers.push(Container.fromJSON(e));
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
            obj.containers = message.containers.map((e) => e ? Container.toJSON(e) : undefined);
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
                message.containers.push(Container.fromPartial(e));
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
export const CreateContainerRequest = {
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
            CreateContainerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    const entry4 = CreateContainerRequest_LabelsEntry.decode(reader, reader.uint32());
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
export const CreateContainerRequest_LabelsEntry = {
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
export const CreateContainerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const UpdateContainerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
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
            UpdateContainerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateContainerRequest_LabelsEntry.decode(reader, reader.uint32());
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
        message.containerId !== undefined &&
            (obj.containerId = message.containerId);
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
const baseUpdateContainerRequest_LabelsEntry = { key: '', value: '' };
export const UpdateContainerRequest_LabelsEntry = {
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
export const UpdateContainerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const DeleteContainerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const DeleteContainerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const GetContainerRevisionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.containerRevisionId !== '') {
            writer.uint32(10).string(message.containerRevisionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListContainersRevisionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListContainersRevisionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.revisions) {
            Revision.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListContainersRevisionsResponse,
        };
        message.revisions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.revisions.push(Revision.decode(reader, reader.uint32()));
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
                message.revisions.push(Revision.fromJSON(e));
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
            obj.revisions = message.revisions.map((e) => e ? Revision.toJSON(e) : undefined);
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
                message.revisions.push(Revision.fromPartial(e));
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
export const DeployContainerRevisionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.containerId !== '') {
            writer.uint32(10).string(message.containerId);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(42).fork()).ldelim();
        }
        if (message.executionTimeout !== undefined) {
            Duration.encode(message.executionTimeout, writer.uint32(50).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.imageSpec !== undefined) {
            ImageSpec.encode(message.imageSpec, writer.uint32(66).fork()).ldelim();
        }
        if (message.concurrency !== 0) {
            writer.uint32(72).int64(message.concurrency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.executionTimeout = Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                case 8:
                    message.imageSpec = ImageSpec.decode(reader, reader.uint32());
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
            message.resources = Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.executionTimeout !== undefined &&
            object.executionTimeout !== null) {
            message.executionTimeout = Duration.fromJSON(object.executionTimeout);
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
            message.imageSpec = ImageSpec.fromJSON(object.imageSpec);
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
                ? Resources.toJSON(message.resources)
                : undefined);
        message.executionTimeout !== undefined &&
            (obj.executionTimeout = message.executionTimeout
                ? Duration.toJSON(message.executionTimeout)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.imageSpec !== undefined &&
            (obj.imageSpec = message.imageSpec
                ? ImageSpec.toJSON(message.imageSpec)
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
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.executionTimeout !== undefined &&
            object.executionTimeout !== null) {
            message.executionTimeout = Duration.fromPartial(object.executionTimeout);
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
            message.imageSpec = ImageSpec.fromPartial(object.imageSpec);
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
export const ImageSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.imageUrl !== '') {
            writer.uint32(10).string(message.imageUrl);
        }
        if (message.command !== undefined) {
            Command.encode(message.command, writer.uint32(18).fork()).ldelim();
        }
        if (message.args !== undefined) {
            Args.encode(message.args, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.environment).forEach(([key, value]) => {
            ImageSpec_EnvironmentEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.workingDir !== '') {
            writer.uint32(42).string(message.workingDir);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.command = Command.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.args = Args.decode(reader, reader.uint32());
                    break;
                case 4:
                    const entry4 = ImageSpec_EnvironmentEntry.decode(reader, reader.uint32());
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
            message.command = Command.fromJSON(object.command);
        }
        else {
            message.command = undefined;
        }
        if (object.args !== undefined && object.args !== null) {
            message.args = Args.fromJSON(object.args);
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
                ? Command.toJSON(message.command)
                : undefined);
        message.args !== undefined &&
            (obj.args = message.args ? Args.toJSON(message.args) : undefined);
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
            message.command = Command.fromPartial(object.command);
        }
        else {
            message.command = undefined;
        }
        if (object.args !== undefined && object.args !== null) {
            message.args = Args.fromPartial(object.args);
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
export const ImageSpec_EnvironmentEntry = {
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
export const DeployContainerRevisionMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.containerRevisionId !== '') {
            writer.uint32(10).string(message.containerRevisionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListContainerOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const ListContainerOperationsResponse = {
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
            ...baseListContainerOperationsResponse,
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
            ...baseListContainerOperationsResponse,
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
            ...baseListContainerOperationsResponse,
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
export const ContainerServiceService = {
    get: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetContainerRequest.encode(value).finish()),
        requestDeserialize: (value) => GetContainerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Container.encode(value).finish()),
        responseDeserialize: (value) => Container.decode(value),
    },
    list: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListContainersRequest.encode(value).finish()),
        requestDeserialize: (value) => ListContainersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListContainersResponse.encode(value).finish()),
        responseDeserialize: (value) => ListContainersResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateContainerRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateContainerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateContainerRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateContainerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteContainerRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteContainerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    deployRevision: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/DeployRevision',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeployContainerRevisionRequest.encode(value).finish()),
        requestDeserialize: (value) => DeployContainerRevisionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    getRevision: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/GetRevision',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetContainerRevisionRequest.encode(value).finish()),
        requestDeserialize: (value) => GetContainerRevisionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Revision.encode(value).finish()),
        responseDeserialize: (value) => Revision.decode(value),
    },
    listRevisions: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListRevisions',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListContainersRevisionsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListContainersRevisionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListContainersRevisionsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListContainersRevisionsResponse.decode(value),
    },
    listOperations: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListContainerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListContainerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListContainerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListContainerOperationsResponse.decode(value),
    },
    listAccessBindings: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAccessBindingsResponse.decode(value),
    },
    setAccessBindings: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.containers.v1.ContainerService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const ContainerServiceClient = makeGenericClientConstructor(ContainerServiceService, 'yandex.cloud.serverless.containers.v1.ContainerService');
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
