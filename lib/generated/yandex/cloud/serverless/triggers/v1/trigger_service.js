"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerServiceClient = exports.TriggerServiceService = exports.ListTriggerOperationsResponse = exports.ListTriggerOperationsRequest = exports.ResumeTriggerMetadata = exports.ResumeTriggerRequest = exports.PauseTriggerMetadata = exports.PauseTriggerRequest = exports.DeleteTriggerMetadata = exports.DeleteTriggerRequest = exports.UpdateTriggerMetadata = exports.UpdateTriggerRequest_LabelsEntry = exports.UpdateTriggerRequest = exports.CreateTriggerMetadata = exports.CreateTriggerRequest_LabelsEntry = exports.CreateTriggerRequest = exports.ListTriggersResponse = exports.ListTriggersRequest = exports.GetTriggerRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const trigger_1 = require("../../../../../yandex/cloud/serverless/triggers/v1/trigger");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.serverless.triggers.v1';
const baseGetTriggerRequest = { triggerId: '' };
exports.GetTriggerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.ListTriggersRequest = {
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
exports.ListTriggersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.triggers) {
            trigger_1.Trigger.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTriggersResponse };
        message.triggers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggers.push(trigger_1.Trigger.decode(reader, reader.uint32()));
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
                message.triggers.push(trigger_1.Trigger.fromJSON(e));
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
            obj.triggers = message.triggers.map((e) => e ? trigger_1.Trigger.toJSON(e) : undefined);
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
                message.triggers.push(trigger_1.Trigger.fromPartial(e));
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
exports.CreateTriggerRequest = {
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
            exports.CreateTriggerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.rule !== undefined) {
            trigger_1.Trigger_Rule.encode(message.rule, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    const entry4 = exports.CreateTriggerRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.rule = trigger_1.Trigger_Rule.decode(reader, reader.uint32());
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
            message.rule = trigger_1.Trigger_Rule.fromJSON(object.rule);
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
                ? trigger_1.Trigger_Rule.toJSON(message.rule)
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
            message.rule = trigger_1.Trigger_Rule.fromPartial(object.rule);
        }
        else {
            message.rule = undefined;
        }
        return message;
    },
};
const baseCreateTriggerRequest_LabelsEntry = { key: '', value: '' };
exports.CreateTriggerRequest_LabelsEntry = {
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
exports.CreateTriggerMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.UpdateTriggerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
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
            exports.UpdateTriggerRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateTriggerRequest_LabelsEntry.decode(reader, reader.uint32());
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
        message.triggerId !== undefined && (obj.triggerId = message.triggerId);
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
        const message = { ...baseUpdateTriggerRequest };
        message.labels = {};
        if (object.triggerId !== undefined && object.triggerId !== null) {
            message.triggerId = object.triggerId;
        }
        else {
            message.triggerId = '';
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
const baseUpdateTriggerRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateTriggerRequest_LabelsEntry = {
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
exports.UpdateTriggerMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.DeleteTriggerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.DeleteTriggerMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.PauseTriggerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.PauseTriggerMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.ResumeTriggerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.ResumeTriggerMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.triggerId !== '') {
            writer.uint32(10).string(message.triggerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.ListTriggerOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.ListTriggerOperationsResponse = {
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
            ...baseListTriggerOperationsResponse,
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
            ...baseListTriggerOperationsResponse,
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
            ...baseListTriggerOperationsResponse,
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
/** A set of methods for managing triggers for serverless functions. */
exports.TriggerServiceService = {
    /**
     * Returns the specified trigger.
     *
     * To get the list of all available triggers, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(trigger_1.Trigger.encode(value).finish()),
        responseDeserialize: (value) => trigger_1.Trigger.decode(value),
    },
    /** Retrieves the list of triggers in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTriggersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTriggersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTriggersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTriggersResponse.decode(value),
    },
    /** Creates a trigger in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified trigger. */
    update: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified trigger. */
    delete: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Pauses the specified trigger. */
    pause: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Pause',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PauseTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.PauseTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Restarts the specified trigger. */
    resume: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Resume',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ResumeTriggerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ResumeTriggerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified trigger. */
    listOperations: {
        path: '/yandex.cloud.serverless.triggers.v1.TriggerService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTriggerOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTriggerOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTriggerOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTriggerOperationsResponse.decode(value),
    },
};
exports.TriggerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TriggerServiceService, 'yandex.cloud.serverless.triggers.v1.TriggerService');
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
