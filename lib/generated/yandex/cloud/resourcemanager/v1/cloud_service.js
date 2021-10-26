/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest, } from '../../../../yandex/cloud/access/access';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Cloud } from '../../../../yandex/cloud/resourcemanager/v1/cloud';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.resourcemanager.v1';
const baseGetCloudRequest = { cloudId: '' };
export const GetCloudRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetCloudRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetCloudRequest };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = String(object.cloudId);
        }
        else {
            message.cloudId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetCloudRequest };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = object.cloudId;
        }
        else {
            message.cloudId = '';
        }
        return message;
    },
};
const baseListCloudsRequest = {
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListCloudsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(26).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCloudsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                case 3:
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
        const message = { ...baseListCloudsRequest };
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
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListCloudsRequest };
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
const baseListCloudsResponse = { nextPageToken: '' };
export const ListCloudsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.clouds) {
            Cloud.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCloudsResponse };
        message.clouds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clouds.push(Cloud.decode(reader, reader.uint32()));
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
        const message = { ...baseListCloudsResponse };
        message.clouds = [];
        if (object.clouds !== undefined && object.clouds !== null) {
            for (const e of object.clouds) {
                message.clouds.push(Cloud.fromJSON(e));
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
        if (message.clouds) {
            obj.clouds = message.clouds.map((e) => e ? Cloud.toJSON(e) : undefined);
        }
        else {
            obj.clouds = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListCloudsResponse };
        message.clouds = [];
        if (object.clouds !== undefined && object.clouds !== null) {
            for (const e of object.clouds) {
                message.clouds.push(Cloud.fromPartial(e));
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
const baseCreateCloudRequest = {
    organizationId: '',
    name: '',
    description: '',
};
export const CreateCloudRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateCloudRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateCloudRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateCloudRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = { ...baseCreateCloudRequest };
        message.labels = {};
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = String(object.organizationId);
        }
        else {
            message.organizationId = '';
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
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
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
        const message = { ...baseCreateCloudRequest };
        message.labels = {};
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = object.organizationId;
        }
        else {
            message.organizationId = '';
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
const baseCreateCloudRequest_LabelsEntry = { key: '', value: '' };
export const CreateCloudRequest_LabelsEntry = {
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
            ...baseCreateCloudRequest_LabelsEntry,
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
            ...baseCreateCloudRequest_LabelsEntry,
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
            ...baseCreateCloudRequest_LabelsEntry,
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
const baseCreateCloudMetadata = { cloudId: '' };
export const CreateCloudMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateCloudMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateCloudMetadata };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = String(object.cloudId);
        }
        else {
            message.cloudId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateCloudMetadata };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = object.cloudId;
        }
        else {
            message.cloudId = '';
        }
        return message;
    },
};
const baseListCloudOperationsRequest = {
    cloudId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListCloudOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
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
            ...baseListCloudOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
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
            ...baseListCloudOperationsRequest,
        };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = String(object.cloudId);
        }
        else {
            message.cloudId = '';
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
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListCloudOperationsRequest,
        };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = object.cloudId;
        }
        else {
            message.cloudId = '';
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
const baseListCloudOperationsResponse = { nextPageToken: '' };
export const ListCloudOperationsResponse = {
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
            ...baseListCloudOperationsResponse,
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
            ...baseListCloudOperationsResponse,
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
            ...baseListCloudOperationsResponse,
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
const baseUpdateCloudRequest = {
    cloudId: '',
    name: '',
    description: '',
};
export const UpdateCloudRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
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
            UpdateCloudRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateCloudRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
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
                    const entry5 = UpdateCloudRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = { ...baseUpdateCloudRequest };
        message.labels = {};
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = String(object.cloudId);
        }
        else {
            message.cloudId = '';
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
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
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
        const message = { ...baseUpdateCloudRequest };
        message.labels = {};
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = object.cloudId;
        }
        else {
            message.cloudId = '';
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
const baseUpdateCloudRequest_LabelsEntry = { key: '', value: '' };
export const UpdateCloudRequest_LabelsEntry = {
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
            ...baseUpdateCloudRequest_LabelsEntry,
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
            ...baseUpdateCloudRequest_LabelsEntry,
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
            ...baseUpdateCloudRequest_LabelsEntry,
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
const baseUpdateCloudMetadata = { cloudId: '' };
export const UpdateCloudMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateCloudMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateCloudMetadata };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = String(object.cloudId);
        }
        else {
            message.cloudId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateCloudMetadata };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = object.cloudId;
        }
        else {
            message.cloudId = '';
        }
        return message;
    },
};
const baseDeleteCloudRequest = { cloudId: '' };
export const DeleteCloudRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        if (message.deleteAfter !== undefined) {
            Timestamp.encode(toTimestamp(message.deleteAfter), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteCloudRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                case 2:
                    message.deleteAfter = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteCloudRequest };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = String(object.cloudId);
        }
        else {
            message.cloudId = '';
        }
        if (object.deleteAfter !== undefined && object.deleteAfter !== null) {
            message.deleteAfter = fromJsonTimestamp(object.deleteAfter);
        }
        else {
            message.deleteAfter = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.deleteAfter !== undefined &&
            (obj.deleteAfter = message.deleteAfter.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteCloudRequest };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = object.cloudId;
        }
        else {
            message.cloudId = '';
        }
        if (object.deleteAfter !== undefined && object.deleteAfter !== null) {
            message.deleteAfter = object.deleteAfter;
        }
        else {
            message.deleteAfter = undefined;
        }
        return message;
    },
};
const baseDeleteCloudMetadata = { cloudId: '' };
export const DeleteCloudMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cloudId !== '') {
            writer.uint32(10).string(message.cloudId);
        }
        if (message.deleteAfter !== undefined) {
            Timestamp.encode(toTimestamp(message.deleteAfter), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteCloudMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cloudId = reader.string();
                    break;
                case 2:
                    message.deleteAfter = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteCloudMetadata };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = String(object.cloudId);
        }
        else {
            message.cloudId = '';
        }
        if (object.deleteAfter !== undefined && object.deleteAfter !== null) {
            message.deleteAfter = fromJsonTimestamp(object.deleteAfter);
        }
        else {
            message.deleteAfter = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
        message.deleteAfter !== undefined &&
            (obj.deleteAfter = message.deleteAfter.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteCloudMetadata };
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = object.cloudId;
        }
        else {
            message.cloudId = '';
        }
        if (object.deleteAfter !== undefined && object.deleteAfter !== null) {
            message.deleteAfter = object.deleteAfter;
        }
        else {
            message.deleteAfter = undefined;
        }
        return message;
    },
};
/** A set of methods for managing Cloud resources. */
export const CloudServiceService = {
    /**
     * Returns the specified Cloud resource.
     *
     * To get the list of available Cloud resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetCloudRequest.encode(value).finish()),
        requestDeserialize: (value) => GetCloudRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Cloud.encode(value).finish()),
        responseDeserialize: (value) => Cloud.decode(value),
    },
    /** Retrieves the list of Cloud resources. */
    list: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListCloudsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListCloudsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListCloudsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListCloudsResponse.decode(value),
    },
    /** Creates a cloud in the specified organization. */
    create: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateCloudRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateCloudRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified cloud. */
    update: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateCloudRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateCloudRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified cloud. */
    delete: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteCloudRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteCloudRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified cloud. */
    listOperations: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListCloudOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListCloudOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListCloudOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListCloudOperationsResponse.decode(value),
    },
    /** Lists access bindings for the specified cloud. */
    listAccessBindings: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified cloud. */
    setAccessBindings: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates access bindings for the specified cloud. */
    updateAccessBindings: {
        path: '/yandex.cloud.resourcemanager.v1.CloudService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const CloudServiceClient = makeGenericClientConstructor(CloudServiceService, 'yandex.cloud.resourcemanager.v1.CloudService');
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
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
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
