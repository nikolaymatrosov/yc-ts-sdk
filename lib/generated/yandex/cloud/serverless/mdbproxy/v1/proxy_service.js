/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest, } from '../../../../../yandex/cloud/access/access';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { Proxy, Target, } from '../../../../../yandex/cloud/serverless/mdbproxy/v1/proxy';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.serverless.mdbproxy.v1';
const baseGetProxyRequest = { proxyId: '' };
export const GetProxyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetProxyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetProxyRequest };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetProxyRequest };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
};
const baseListProxyRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListProxyRequest = {
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
        const message = { ...baseListProxyRequest };
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
        const message = { ...baseListProxyRequest };
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
        const message = { ...baseListProxyRequest };
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
const baseListProxyResponse = { nextPageToken: '' };
export const ListProxyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.proxies) {
            Proxy.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListProxyResponse };
        message.proxies = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxies.push(Proxy.decode(reader, reader.uint32()));
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
        const message = { ...baseListProxyResponse };
        message.proxies = [];
        if (object.proxies !== undefined && object.proxies !== null) {
            for (const e of object.proxies) {
                message.proxies.push(Proxy.fromJSON(e));
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
        if (message.proxies) {
            obj.proxies = message.proxies.map((e) => e ? Proxy.toJSON(e) : undefined);
        }
        else {
            obj.proxies = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListProxyResponse };
        message.proxies = [];
        if (object.proxies !== undefined && object.proxies !== null) {
            for (const e of object.proxies) {
                message.proxies.push(Proxy.fromPartial(e));
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
const baseCreateProxyRequest = {
    folderId: '',
    name: '',
    description: '',
};
export const CreateProxyRequest = {
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
            CreateProxyRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.target !== undefined) {
            Target.encode(message.target, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProxyRequest };
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
                    const entry4 = CreateProxyRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.target = Target.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateProxyRequest };
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
        if (object.target !== undefined && object.target !== null) {
            message.target = Target.fromJSON(object.target);
        }
        else {
            message.target = undefined;
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
        message.target !== undefined &&
            (obj.target = message.target
                ? Target.toJSON(message.target)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateProxyRequest };
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
        if (object.target !== undefined && object.target !== null) {
            message.target = Target.fromPartial(object.target);
        }
        else {
            message.target = undefined;
        }
        return message;
    },
};
const baseCreateProxyRequest_LabelsEntry = { key: '', value: '' };
export const CreateProxyRequest_LabelsEntry = {
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
            ...baseCreateProxyRequest_LabelsEntry,
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
            ...baseCreateProxyRequest_LabelsEntry,
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
            ...baseCreateProxyRequest_LabelsEntry,
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
const baseCreateProxyMetadata = { proxyId: '' };
export const CreateProxyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateProxyMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
};
const baseUpdateProxyRequest = {
    proxyId: '',
    name: '',
    description: '',
};
export const UpdateProxyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
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
            UpdateProxyRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.target !== undefined) {
            Target.encode(message.target, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateProxyRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
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
                    const entry5 = UpdateProxyRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.target = Target.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateProxyRequest };
        message.labels = {};
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
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
        if (object.target !== undefined && object.target !== null) {
            message.target = Target.fromJSON(object.target);
        }
        else {
            message.target = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
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
        message.target !== undefined &&
            (obj.target = message.target
                ? Target.toJSON(message.target)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateProxyRequest };
        message.labels = {};
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
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
        if (object.target !== undefined && object.target !== null) {
            message.target = Target.fromPartial(object.target);
        }
        else {
            message.target = undefined;
        }
        return message;
    },
};
const baseUpdateProxyRequest_LabelsEntry = { key: '', value: '' };
export const UpdateProxyRequest_LabelsEntry = {
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
            ...baseUpdateProxyRequest_LabelsEntry,
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
            ...baseUpdateProxyRequest_LabelsEntry,
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
            ...baseUpdateProxyRequest_LabelsEntry,
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
const baseUpdateProxyMetadata = { proxyId: '' };
export const UpdateProxyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateProxyMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
};
const baseDeleteProxyRequest = { proxyId: '' };
export const DeleteProxyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteProxyRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteProxyRequest };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteProxyRequest };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
};
const baseDeleteProxyMetadata = { proxyId: '' };
export const DeleteProxyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteProxyMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteProxyMetadata };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
        }
        return message;
    },
};
const baseListProxyOperationsRequest = {
    proxyId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListProxyOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proxyId !== '') {
            writer.uint32(10).string(message.proxyId);
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
            ...baseListProxyOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proxyId = reader.string();
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
            ...baseListProxyOperationsRequest,
        };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = String(object.proxyId);
        }
        else {
            message.proxyId = '';
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
        message.proxyId !== undefined && (obj.proxyId = message.proxyId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListProxyOperationsRequest,
        };
        if (object.proxyId !== undefined && object.proxyId !== null) {
            message.proxyId = object.proxyId;
        }
        else {
            message.proxyId = '';
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
const baseListProxyOperationsResponse = { nextPageToken: '' };
export const ListProxyOperationsResponse = {
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
            ...baseListProxyOperationsResponse,
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
            ...baseListProxyOperationsResponse,
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
            ...baseListProxyOperationsResponse,
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
/** A set of methods for managing serverless MDB proxy. */
export const ProxyServiceService = {
    /**
     * Returns the specified proxy.
     *
     * To get the list of all available proxies, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetProxyRequest.encode(value).finish()),
        requestDeserialize: (value) => GetProxyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Proxy.encode(value).finish()),
        responseDeserialize: (value) => Proxy.decode(value),
    },
    /** Retrieves the list of proxies in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListProxyRequest.encode(value).finish()),
        requestDeserialize: (value) => ListProxyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListProxyResponse.encode(value).finish()),
        responseDeserialize: (value) => ListProxyResponse.decode(value),
    },
    /** Creates a proxy in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateProxyRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateProxyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified proxy. */
    update: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateProxyRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateProxyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified proxy. */
    delete: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteProxyRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteProxyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified proxy. */
    listOperations: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListProxyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListProxyOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListProxyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListProxyOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified proxy. */
    listAccessBindings: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the proxy. */
    setAccessBindings: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates access bindings for the specified proxy. */
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const ProxyServiceClient = makeGenericClientConstructor(ProxyServiceService, 'yandex.cloud.serverless.mdbproxy.v1.ProxyService');
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
