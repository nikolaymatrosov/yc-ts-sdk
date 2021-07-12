/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { Trigger, Trigger_Rule, } from '../../../../../yandex/cloud/serverless/triggers/v1/trigger';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.serverless.triggers.v1';
const baseGetTriggerRequest = { triggerId: '' };
export const GetTriggerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTriggerRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetTriggerRequest };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = String(object.triggerId);
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetTriggerRequest };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
};
const baseListTriggersRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListTriggersRequest = {
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
        const message = { ...baseListTriggersRequest };
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
        const message = { ...baseListTriggersRequest };
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
        const message = { ...baseListTriggersRequest };
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
const baseListTriggersResponse = { nextPageToken: '' };
export const ListTriggersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.triggers) {
            Trigger.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTriggersResponse };
        message.triggers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggers.push(Trigger.decode(reader, reader.uint32()));
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
        const message = { ...baseListTriggersResponse };
        message.triggers = [];
        if (object.triggers !== undefined && object.triggers !== null) {
            for (const e of object.triggers) {
                message.triggers.push(Trigger.fromJSON(e));
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
        if (message.triggers) {
            obj.triggers = message.triggers.map((e) => e ? Trigger.toJSON(e) : undefined);
        }
        else {
            obj.triggers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListTriggersResponse };
        message.triggers = [];
        if (object.triggers !== undefined && object.triggers !== null) {
            for (const e of object.triggers) {
                message.triggers.push(Trigger.fromPartial(e));
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
const baseCreateTriggerRequest = {
    folderId: '',
    name: '',
    description: '',
};
export const CreateTriggerRequest = {
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
            CreateTriggerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.rule !== undefined) {
            Trigger_Rule.encode(message.rule, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateTriggerRequest };
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
                    const entry4 = CreateTriggerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.rule = Trigger_Rule.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateTriggerRequest };
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
        if (object.rule !== undefined && object.rule !== null) {
            message.rule = Trigger_Rule.fromJSON(object.rule);
        }
        else {
            message.rule = undefined;
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
        message.rule !== undefined &&
            (obj.rule = message.rule
                ? Trigger_Rule.toJSON(message.rule)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateTriggerRequest };
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
        if (object.rule !== undefined && object.rule !== null) {
            message.rule = Trigger_Rule.fromPartial(object.rule);
        }
        else {
            message.rule = undefined;
        }
        return message;
    },
};
const baseCreateTriggerRequest_LabelsEntry = { key: '', value: '' };
export const CreateTriggerRequest_LabelsEntry = {
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
            ...baseCreateTriggerRequest_LabelsEntry,
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
            ...baseCreateTriggerRequest_LabelsEntry,
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
            ...baseCreateTriggerRequest_LabelsEntry,
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
const baseCreateTriggerMetadata = { triggerId: '' };
export const CreateTriggerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateTriggerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
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
            ...baseCreateTriggerMetadata,
        };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = String(object.triggerId);
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateTriggerMetadata,
        };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
};
const baseUpdateTriggerRequest = {
    triggerId: '',
    name: '',
    description: '',
};
export const UpdateTriggerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
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
            UpdateTriggerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateTriggerRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
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
                    const entry5 = UpdateTriggerRequest_LabelsEntry.decode(reader, reader.uint32());
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
        const message = { ...baseUpdateTriggerRequest };
        message.labels = {};
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = String(object.triggerId);
        }
        else {
            message.triggerId = '';
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
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
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
        const message = { ...baseUpdateTriggerRequest };
        message.labels = {};
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
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
const baseUpdateTriggerRequest_LabelsEntry = { key: '', value: '' };
export const UpdateTriggerRequest_LabelsEntry = {
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
            ...baseUpdateTriggerRequest_LabelsEntry,
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
            ...baseUpdateTriggerRequest_LabelsEntry,
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
            ...baseUpdateTriggerRequest_LabelsEntry,
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
const baseUpdateTriggerMetadata = { triggerId: '' };
export const UpdateTriggerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateTriggerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
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
            ...baseUpdateTriggerMetadata,
        };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = String(object.triggerId);
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateTriggerMetadata,
        };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
};
const baseDeleteTriggerRequest = { triggerId: '' };
export const DeleteTriggerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteTriggerRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteTriggerRequest };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = String(object.triggerId);
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteTriggerRequest };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
};
const baseDeleteTriggerMetadata = { triggerId: '' };
export const DeleteTriggerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteTriggerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
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
            ...baseDeleteTriggerMetadata,
        };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = String(object.triggerId);
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteTriggerMetadata,
        };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
};
const basePauseTriggerRequest = { triggerId: '' };
export const PauseTriggerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePauseTriggerRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePauseTriggerRequest };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = String(object.triggerId);
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePauseTriggerRequest };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
};
const basePauseTriggerMetadata = { triggerId: '' };
export const PauseTriggerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePauseTriggerMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePauseTriggerMetadata };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = String(object.triggerId);
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePauseTriggerMetadata };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
};
const baseResumeTriggerRequest = { triggerId: '' };
export const ResumeTriggerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResumeTriggerRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResumeTriggerRequest };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = String(object.triggerId);
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResumeTriggerRequest };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
};
const baseResumeTriggerMetadata = { triggerId: '' };
export const ResumeTriggerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResumeTriggerMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
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
            ...baseResumeTriggerMetadata,
        };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = String(object.triggerId);
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResumeTriggerMetadata,
        };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
        }
        return message;
    },
};
const baseListTriggerOperationsRequest = {
    triggerId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListTriggerOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
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
            ...baseListTriggerOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerId = reader.string();
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
            ...baseListTriggerOperationsRequest,
        };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = String(object.triggerId);
        }
        else {
            message.triggerId = '';
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
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListTriggerOperationsRequest,
        };
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
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
const baseListTriggerOperationsResponse = { nextPageToken: '' };
export const ListTriggerOperationsResponse = {
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
            ...baseListTriggerOperationsResponse,
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
            ...baseListTriggerOperationsResponse,
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
            ...baseListTriggerOperationsResponse,
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
/** A set of methods for managing triggers for serverless functions. */
export const TriggerServiceService = {
    /**
     * Returns the specified trigger.
     *
     * To get the list of all available triggers, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => GetTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Trigger.encode(value).finish()),
        responseDeserialize: (value) => Trigger.decode(value),
    },
    /** Retrieves the list of triggers in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListTriggersRequest.encode(value).finish()),
        requestDeserialize: (value) => ListTriggersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListTriggersResponse.encode(value).finish()),
        responseDeserialize: (value) => ListTriggersResponse.decode(value),
    },
    /** Creates a trigger in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified trigger. */
    update: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified trigger. */
    delete: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Pauses the specified trigger. */
    pause: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Pause',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(PauseTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => PauseTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Restarts the specified trigger. */
    resume: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Resume',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ResumeTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => ResumeTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified trigger. */
    listOperations: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListTriggerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListTriggerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListTriggerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListTriggerOperationsResponse.decode(value),
    },
};
export const TriggerServiceClient = makeGenericClientConstructor(TriggerServiceService, 'yandex.cloud.serverless.triggers.v1.TriggerService');
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
