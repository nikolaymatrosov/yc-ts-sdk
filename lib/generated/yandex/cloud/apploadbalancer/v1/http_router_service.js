/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { HttpRouter } from '../../../../yandex/cloud/apploadbalancer/v1/http_router';
import { VirtualHost } from '../../../../yandex/cloud/apploadbalancer/v1/virtual_host';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';
const baseGetHttpRouterRequest = { httpRouterId: '' };
export const GetHttpRouterRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetHttpRouterRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetHttpRouterRequest };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetHttpRouterRequest };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        return message;
    },
};
const baseListHttpRoutersRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListHttpRoutersRequest = {
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
            ...baseListHttpRoutersRequest,
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
            ...baseListHttpRoutersRequest,
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
            ...baseListHttpRoutersRequest,
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
const baseListHttpRoutersResponse = { nextPageToken: '' };
export const ListHttpRoutersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.httpRouters) {
            HttpRouter.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListHttpRoutersResponse,
        };
        message.httpRouters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouters.push(HttpRouter.decode(reader, reader.uint32()));
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
            ...baseListHttpRoutersResponse,
        };
        message.httpRouters = [];
        if (object.httpRouters !== undefined && object.httpRouters !== null) {
            for (const e of object.httpRouters) {
                message.httpRouters.push(HttpRouter.fromJSON(e));
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
        if (message.httpRouters) {
            obj.httpRouters = message.httpRouters.map((e) => e ? HttpRouter.toJSON(e) : undefined);
        }
        else {
            obj.httpRouters = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListHttpRoutersResponse,
        };
        message.httpRouters = [];
        if (object.httpRouters !== undefined && object.httpRouters !== null) {
            for (const e of object.httpRouters) {
                message.httpRouters.push(HttpRouter.fromPartial(e));
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
const baseDeleteHttpRouterRequest = { httpRouterId: '' };
export const DeleteHttpRouterRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteHttpRouterRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
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
            ...baseDeleteHttpRouterRequest,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteHttpRouterRequest,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        return message;
    },
};
const baseDeleteHttpRouterMetadata = { httpRouterId: '' };
export const DeleteHttpRouterMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteHttpRouterMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
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
            ...baseDeleteHttpRouterMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteHttpRouterMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        return message;
    },
};
const baseUpdateHttpRouterRequest = {
    httpRouterId: '',
    name: '',
    description: '',
    httpsRedirect: false,
};
export const UpdateHttpRouterRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
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
            UpdateHttpRouterRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.virtualHosts) {
            VirtualHost.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.httpsRedirect === true) {
            writer.uint32(56).bool(message.httpsRedirect);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateHttpRouterRequest,
        };
        message.labels = {};
        message.virtualHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
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
                    const entry5 = UpdateHttpRouterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.virtualHosts.push(VirtualHost.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.httpsRedirect = reader.bool();
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
            ...baseUpdateHttpRouterRequest,
        };
        message.labels = {};
        message.virtualHosts = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
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
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromJSON(e));
            }
        }
        if (object.httpsRedirect !== undefined &&
            object.httpsRedirect !== null) {
            message.httpsRedirect = Boolean(object.httpsRedirect);
        }
        else {
            message.httpsRedirect = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
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
        if (message.virtualHosts) {
            obj.virtualHosts = message.virtualHosts.map((e) => e ? VirtualHost.toJSON(e) : undefined);
        }
        else {
            obj.virtualHosts = [];
        }
        message.httpsRedirect !== undefined &&
            (obj.httpsRedirect = message.httpsRedirect);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateHttpRouterRequest,
        };
        message.labels = {};
        message.virtualHosts = [];
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
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
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromPartial(e));
            }
        }
        if (object.httpsRedirect !== undefined &&
            object.httpsRedirect !== null) {
            message.httpsRedirect = object.httpsRedirect;
        }
        else {
            message.httpsRedirect = false;
        }
        return message;
    },
};
const baseUpdateHttpRouterRequest_LabelsEntry = { key: '', value: '' };
export const UpdateHttpRouterRequest_LabelsEntry = {
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
            ...baseUpdateHttpRouterRequest_LabelsEntry,
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
            ...baseUpdateHttpRouterRequest_LabelsEntry,
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
            ...baseUpdateHttpRouterRequest_LabelsEntry,
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
const baseUpdateHttpRouterMetadata = { httpRouterId: '' };
export const UpdateHttpRouterMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateHttpRouterMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
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
            ...baseUpdateHttpRouterMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateHttpRouterMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        return message;
    },
};
const baseCreateHttpRouterRequest = {
    folderId: '',
    name: '',
    description: '',
    httpsRedirect: false,
};
export const CreateHttpRouterRequest = {
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
            CreateHttpRouterRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        for (const v of message.virtualHosts) {
            VirtualHost.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.httpsRedirect === true) {
            writer.uint32(48).bool(message.httpsRedirect);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateHttpRouterRequest,
        };
        message.labels = {};
        message.virtualHosts = [];
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
                    const entry4 = CreateHttpRouterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.virtualHosts.push(VirtualHost.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.httpsRedirect = reader.bool();
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
            ...baseCreateHttpRouterRequest,
        };
        message.labels = {};
        message.virtualHosts = [];
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
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromJSON(e));
            }
        }
        if (object.httpsRedirect !== undefined &&
            object.httpsRedirect !== null) {
            message.httpsRedirect = Boolean(object.httpsRedirect);
        }
        else {
            message.httpsRedirect = false;
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
        if (message.virtualHosts) {
            obj.virtualHosts = message.virtualHosts.map((e) => e ? VirtualHost.toJSON(e) : undefined);
        }
        else {
            obj.virtualHosts = [];
        }
        message.httpsRedirect !== undefined &&
            (obj.httpsRedirect = message.httpsRedirect);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateHttpRouterRequest,
        };
        message.labels = {};
        message.virtualHosts = [];
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
        if (object.virtualHosts !== undefined && object.virtualHosts !== null) {
            for (const e of object.virtualHosts) {
                message.virtualHosts.push(VirtualHost.fromPartial(e));
            }
        }
        if (object.httpsRedirect !== undefined &&
            object.httpsRedirect !== null) {
            message.httpsRedirect = object.httpsRedirect;
        }
        else {
            message.httpsRedirect = false;
        }
        return message;
    },
};
const baseCreateHttpRouterRequest_LabelsEntry = { key: '', value: '' };
export const CreateHttpRouterRequest_LabelsEntry = {
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
            ...baseCreateHttpRouterRequest_LabelsEntry,
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
            ...baseCreateHttpRouterRequest_LabelsEntry,
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
            ...baseCreateHttpRouterRequest_LabelsEntry,
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
const baseCreateHttpRouterMetadata = { httpRouterId: '' };
export const CreateHttpRouterMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateHttpRouterMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
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
            ...baseCreateHttpRouterMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateHttpRouterMetadata,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
        }
        return message;
    },
};
const baseListHttpRouterOperationsRequest = {
    httpRouterId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListHttpRouterOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
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
            ...baseListHttpRouterOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
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
            ...baseListHttpRouterOperationsRequest,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        }
        else {
            message.httpRouterId = '';
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
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListHttpRouterOperationsRequest,
        };
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        }
        else {
            message.httpRouterId = '';
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
const baseListHttpRouterOperationsResponse = { nextPageToken: '' };
export const ListHttpRouterOperationsResponse = {
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
            ...baseListHttpRouterOperationsResponse,
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
            ...baseListHttpRouterOperationsResponse,
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
            ...baseListHttpRouterOperationsResponse,
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
/** A set of methods for managing HTTP routers. */
export const HttpRouterServiceService = {
    /**
     * Returns the specified HTTP router.
     *
     * To get the list of all available HTTP routers, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value) => GetHttpRouterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(HttpRouter.encode(value).finish()),
        responseDeserialize: (value) => HttpRouter.decode(value),
    },
    /** Lists HTTP routers in the specified folder. */
    list: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListHttpRoutersRequest.encode(value).finish()),
        requestDeserialize: (value) => ListHttpRoutersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListHttpRoutersResponse.encode(value).finish()),
        responseDeserialize: (value) => ListHttpRoutersResponse.decode(value),
    },
    /** Creates an HTTP router in the specified folder. */
    create: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateHttpRouterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified HTTP router. */
    update: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateHttpRouterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified HTTP router. */
    delete: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteHttpRouterRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteHttpRouterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified HTTP router. */
    listOperations: {
        path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListHttpRouterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListHttpRouterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListHttpRouterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListHttpRouterOperationsResponse.decode(value),
    },
};
export const HttpRouterServiceClient = makeGenericClientConstructor(HttpRouterServiceService, 'yandex.cloud.apploadbalancer.v1.HttpRouterService');
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
