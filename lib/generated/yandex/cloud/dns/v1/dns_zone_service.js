/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest, } from '../../../../yandex/cloud/access/access';
import { DnsZone, PrivateVisibility, PublicVisibility, RecordSet, } from '../../../../yandex/cloud/dns/v1/dns_zone';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.dns.v1';
const baseGetDnsZoneRequest = { dnsZoneId: '' };
export const GetDnsZoneRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDnsZoneRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetDnsZoneRequest };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetDnsZoneRequest };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
        }
        return message;
    },
};
const baseListDnsZonesRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListDnsZonesRequest = {
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
        const message = { ...baseListDnsZonesRequest };
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
        const message = { ...baseListDnsZonesRequest };
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
        const message = { ...baseListDnsZonesRequest };
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
const baseListDnsZonesResponse = { nextPageToken: '' };
export const ListDnsZonesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.dnsZones) {
            DnsZone.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDnsZonesResponse };
        message.dnsZones = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZones.push(DnsZone.decode(reader, reader.uint32()));
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
        const message = { ...baseListDnsZonesResponse };
        message.dnsZones = [];
        if (object.dnsZones !== undefined && object.dnsZones !== null) {
            for (const e of object.dnsZones) {
                message.dnsZones.push(DnsZone.fromJSON(e));
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
        if (message.dnsZones) {
            obj.dnsZones = message.dnsZones.map((e) => e ? DnsZone.toJSON(e) : undefined);
        }
        else {
            obj.dnsZones = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListDnsZonesResponse };
        message.dnsZones = [];
        if (object.dnsZones !== undefined && object.dnsZones !== null) {
            for (const e of object.dnsZones) {
                message.dnsZones.push(DnsZone.fromPartial(e));
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
const baseCreateDnsZoneRequest = {
    folderId: '',
    name: '',
    description: '',
    zone: '',
};
export const CreateDnsZoneRequest = {
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
            CreateDnsZoneRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zone !== '') {
            writer.uint32(42).string(message.zone);
        }
        if (message.privateVisibility !== undefined) {
            PrivateVisibility.encode(message.privateVisibility, writer.uint32(50).fork()).ldelim();
        }
        if (message.publicVisibility !== undefined) {
            PublicVisibility.encode(message.publicVisibility, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateDnsZoneRequest };
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
                    const entry4 = CreateDnsZoneRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zone = reader.string();
                    break;
                case 6:
                    message.privateVisibility = PrivateVisibility.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.publicVisibility = PublicVisibility.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateDnsZoneRequest };
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
        if (object.zone !== undefined && object.zone !== null) {
            message.zone = String(object.zone);
        }
        else {
            message.zone = '';
        }
        if (object.privateVisibility !== undefined &&
            object.privateVisibility !== null) {
            message.privateVisibility = PrivateVisibility.fromJSON(object.privateVisibility);
        }
        else {
            message.privateVisibility = undefined;
        }
        if (object.publicVisibility !== undefined &&
            object.publicVisibility !== null) {
            message.publicVisibility = PublicVisibility.fromJSON(object.publicVisibility);
        }
        else {
            message.publicVisibility = undefined;
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
        message.zone !== undefined && (obj.zone = message.zone);
        message.privateVisibility !== undefined &&
            (obj.privateVisibility = message.privateVisibility
                ? PrivateVisibility.toJSON(message.privateVisibility)
                : undefined);
        message.publicVisibility !== undefined &&
            (obj.publicVisibility = message.publicVisibility
                ? PublicVisibility.toJSON(message.publicVisibility)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateDnsZoneRequest };
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
        if (object.zone !== undefined && object.zone !== null) {
            message.zone = object.zone;
        }
        else {
            message.zone = '';
        }
        if (object.privateVisibility !== undefined &&
            object.privateVisibility !== null) {
            message.privateVisibility = PrivateVisibility.fromPartial(object.privateVisibility);
        }
        else {
            message.privateVisibility = undefined;
        }
        if (object.publicVisibility !== undefined &&
            object.publicVisibility !== null) {
            message.publicVisibility = PublicVisibility.fromPartial(object.publicVisibility);
        }
        else {
            message.publicVisibility = undefined;
        }
        return message;
    },
};
const baseCreateDnsZoneRequest_LabelsEntry = { key: '', value: '' };
export const CreateDnsZoneRequest_LabelsEntry = {
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
            ...baseCreateDnsZoneRequest_LabelsEntry,
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
            ...baseCreateDnsZoneRequest_LabelsEntry,
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
            ...baseCreateDnsZoneRequest_LabelsEntry,
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
const baseCreateDnsZoneMetadata = { dnsZoneId: '' };
export const CreateDnsZoneMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDnsZoneMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
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
            ...baseCreateDnsZoneMetadata,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateDnsZoneMetadata,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
        }
        return message;
    },
};
const baseUpdateDnsZoneRequest = {
    dnsZoneId: '',
    name: '',
    description: '',
};
export const UpdateDnsZoneRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
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
            UpdateDnsZoneRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.privateVisibility !== undefined) {
            PrivateVisibility.encode(message.privateVisibility, writer.uint32(50).fork()).ldelim();
        }
        if (message.publicVisibility !== undefined) {
            PublicVisibility.encode(message.publicVisibility, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateDnsZoneRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
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
                    const entry5 = UpdateDnsZoneRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.privateVisibility = PrivateVisibility.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.publicVisibility = PublicVisibility.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateDnsZoneRequest };
        message.labels = {};
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
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
        if (object.privateVisibility !== undefined &&
            object.privateVisibility !== null) {
            message.privateVisibility = PrivateVisibility.fromJSON(object.privateVisibility);
        }
        else {
            message.privateVisibility = undefined;
        }
        if (object.publicVisibility !== undefined &&
            object.publicVisibility !== null) {
            message.publicVisibility = PublicVisibility.fromJSON(object.publicVisibility);
        }
        else {
            message.publicVisibility = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
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
        message.privateVisibility !== undefined &&
            (obj.privateVisibility = message.privateVisibility
                ? PrivateVisibility.toJSON(message.privateVisibility)
                : undefined);
        message.publicVisibility !== undefined &&
            (obj.publicVisibility = message.publicVisibility
                ? PublicVisibility.toJSON(message.publicVisibility)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateDnsZoneRequest };
        message.labels = {};
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
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
        if (object.privateVisibility !== undefined &&
            object.privateVisibility !== null) {
            message.privateVisibility = PrivateVisibility.fromPartial(object.privateVisibility);
        }
        else {
            message.privateVisibility = undefined;
        }
        if (object.publicVisibility !== undefined &&
            object.publicVisibility !== null) {
            message.publicVisibility = PublicVisibility.fromPartial(object.publicVisibility);
        }
        else {
            message.publicVisibility = undefined;
        }
        return message;
    },
};
const baseUpdateDnsZoneRequest_LabelsEntry = { key: '', value: '' };
export const UpdateDnsZoneRequest_LabelsEntry = {
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
            ...baseUpdateDnsZoneRequest_LabelsEntry,
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
            ...baseUpdateDnsZoneRequest_LabelsEntry,
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
            ...baseUpdateDnsZoneRequest_LabelsEntry,
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
const baseUpdateDnsZoneMetadata = { dnsZoneId: '' };
export const UpdateDnsZoneMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateDnsZoneMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
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
            ...baseUpdateDnsZoneMetadata,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateDnsZoneMetadata,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
        }
        return message;
    },
};
const baseDeleteDnsZoneRequest = { dnsZoneId: '' };
export const DeleteDnsZoneRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteDnsZoneRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteDnsZoneRequest };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteDnsZoneRequest };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
        }
        return message;
    },
};
const baseDeleteDnsZoneMetadata = { dnsZoneId: '' };
export const DeleteDnsZoneMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDnsZoneMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
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
            ...baseDeleteDnsZoneMetadata,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteDnsZoneMetadata,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
        }
        return message;
    },
};
const baseGetDnsZoneRecordSetRequest = {
    dnsZoneId: '',
    name: '',
    type: '',
};
export const GetDnsZoneRecordSetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.type !== '') {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetDnsZoneRecordSetRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
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
            ...baseGetDnsZoneRecordSetRequest,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetDnsZoneRecordSetRequest,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = '';
        }
        return message;
    },
};
const baseListDnsZoneRecordSetsRequest = {
    dnsZoneId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListDnsZoneRecordSetsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
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
            ...baseListDnsZoneRecordSetsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
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
            ...baseListDnsZoneRecordSetsRequest,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
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
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDnsZoneRecordSetsRequest,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
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
const baseListDnsZoneRecordSetsResponse = { nextPageToken: '' };
export const ListDnsZoneRecordSetsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.recordSets) {
            RecordSet.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListDnsZoneRecordSetsResponse,
        };
        message.recordSets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recordSets.push(RecordSet.decode(reader, reader.uint32()));
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
            ...baseListDnsZoneRecordSetsResponse,
        };
        message.recordSets = [];
        if (object.recordSets !== undefined && object.recordSets !== null) {
            for (const e of object.recordSets) {
                message.recordSets.push(RecordSet.fromJSON(e));
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
        if (message.recordSets) {
            obj.recordSets = message.recordSets.map((e) => e ? RecordSet.toJSON(e) : undefined);
        }
        else {
            obj.recordSets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDnsZoneRecordSetsResponse,
        };
        message.recordSets = [];
        if (object.recordSets !== undefined && object.recordSets !== null) {
            for (const e of object.recordSets) {
                message.recordSets.push(RecordSet.fromPartial(e));
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
const baseUpdateRecordSetsRequest = { dnsZoneId: '' };
export const UpdateRecordSetsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        for (const v of message.deletions) {
            RecordSet.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.additions) {
            RecordSet.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRecordSetsRequest,
        };
        message.deletions = [];
        message.additions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                case 2:
                    message.deletions.push(RecordSet.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.additions.push(RecordSet.decode(reader, reader.uint32()));
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
            ...baseUpdateRecordSetsRequest,
        };
        message.deletions = [];
        message.additions = [];
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
        }
        if (object.deletions !== undefined && object.deletions !== null) {
            for (const e of object.deletions) {
                message.deletions.push(RecordSet.fromJSON(e));
            }
        }
        if (object.additions !== undefined && object.additions !== null) {
            for (const e of object.additions) {
                message.additions.push(RecordSet.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        if (message.deletions) {
            obj.deletions = message.deletions.map((e) => e ? RecordSet.toJSON(e) : undefined);
        }
        else {
            obj.deletions = [];
        }
        if (message.additions) {
            obj.additions = message.additions.map((e) => e ? RecordSet.toJSON(e) : undefined);
        }
        else {
            obj.additions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateRecordSetsRequest,
        };
        message.deletions = [];
        message.additions = [];
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
        }
        if (object.deletions !== undefined && object.deletions !== null) {
            for (const e of object.deletions) {
                message.deletions.push(RecordSet.fromPartial(e));
            }
        }
        if (object.additions !== undefined && object.additions !== null) {
            for (const e of object.additions) {
                message.additions.push(RecordSet.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateRecordSetsMetadata = {};
export const UpdateRecordSetsMetadata = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRecordSetsMetadata,
        };
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
        const message = {
            ...baseUpdateRecordSetsMetadata,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseUpdateRecordSetsMetadata,
        };
        return message;
    },
};
const baseUpsertRecordSetsRequest = { dnsZoneId: '' };
export const UpsertRecordSetsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        for (const v of message.deletions) {
            RecordSet.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.replacements) {
            RecordSet.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.merges) {
            RecordSet.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpsertRecordSetsRequest,
        };
        message.deletions = [];
        message.replacements = [];
        message.merges = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
                    break;
                case 2:
                    message.deletions.push(RecordSet.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.replacements.push(RecordSet.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.merges.push(RecordSet.decode(reader, reader.uint32()));
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
            ...baseUpsertRecordSetsRequest,
        };
        message.deletions = [];
        message.replacements = [];
        message.merges = [];
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
        }
        if (object.deletions !== undefined && object.deletions !== null) {
            for (const e of object.deletions) {
                message.deletions.push(RecordSet.fromJSON(e));
            }
        }
        if (object.replacements !== undefined && object.replacements !== null) {
            for (const e of object.replacements) {
                message.replacements.push(RecordSet.fromJSON(e));
            }
        }
        if (object.merges !== undefined && object.merges !== null) {
            for (const e of object.merges) {
                message.merges.push(RecordSet.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        if (message.deletions) {
            obj.deletions = message.deletions.map((e) => e ? RecordSet.toJSON(e) : undefined);
        }
        else {
            obj.deletions = [];
        }
        if (message.replacements) {
            obj.replacements = message.replacements.map((e) => e ? RecordSet.toJSON(e) : undefined);
        }
        else {
            obj.replacements = [];
        }
        if (message.merges) {
            obj.merges = message.merges.map((e) => e ? RecordSet.toJSON(e) : undefined);
        }
        else {
            obj.merges = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpsertRecordSetsRequest,
        };
        message.deletions = [];
        message.replacements = [];
        message.merges = [];
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
        }
        if (object.deletions !== undefined && object.deletions !== null) {
            for (const e of object.deletions) {
                message.deletions.push(RecordSet.fromPartial(e));
            }
        }
        if (object.replacements !== undefined && object.replacements !== null) {
            for (const e of object.replacements) {
                message.replacements.push(RecordSet.fromPartial(e));
            }
        }
        if (object.merges !== undefined && object.merges !== null) {
            for (const e of object.merges) {
                message.merges.push(RecordSet.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpsertRecordSetsMetadata = {};
export const UpsertRecordSetsMetadata = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpsertRecordSetsMetadata,
        };
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
        const message = {
            ...baseUpsertRecordSetsMetadata,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseUpsertRecordSetsMetadata,
        };
        return message;
    },
};
const baseListDnsZoneOperationsRequest = {
    dnsZoneId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListDnsZoneOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
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
            ...baseListDnsZoneOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZoneId = reader.string();
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
            ...baseListDnsZoneOperationsRequest,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        }
        else {
            message.dnsZoneId = '';
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
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListDnsZoneOperationsRequest,
        };
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        }
        else {
            message.dnsZoneId = '';
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
const baseListDnsZoneOperationsResponse = { nextPageToken: '' };
export const ListDnsZoneOperationsResponse = {
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
            ...baseListDnsZoneOperationsResponse,
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
            ...baseListDnsZoneOperationsResponse,
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
            ...baseListDnsZoneOperationsResponse,
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
/** A set of methods for managing DNS zones. */
export const DnsZoneServiceService = {
    /**
     * Returns the specified DNS zone.
     *
     * To get the list of all available DNS zones, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value) => GetDnsZoneRequest.decode(value),
        responseSerialize: (value) => Buffer.from(DnsZone.encode(value).finish()),
        responseDeserialize: (value) => DnsZone.decode(value),
    },
    /** Retrieves the list of DNS zones in the specified folder. */
    list: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDnsZonesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDnsZonesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDnsZonesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDnsZonesResponse.decode(value),
    },
    /** Creates a DNS zone in the specified folder. */
    create: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateDnsZoneRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified DNS zone. */
    update: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateDnsZoneRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified DNS zone. */
    delete: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteDnsZoneRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Returns the specified record set. */
    getRecordSet: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/GetRecordSet',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetDnsZoneRecordSetRequest.encode(value).finish()),
        requestDeserialize: (value) => GetDnsZoneRecordSetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(RecordSet.encode(value).finish()),
        responseDeserialize: (value) => RecordSet.decode(value),
    },
    /** Retrieves the list of record sets in the specified folder. */
    listRecordSets: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/ListRecordSets',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDnsZoneRecordSetsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDnsZoneRecordSetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDnsZoneRecordSetsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDnsZoneRecordSetsResponse.decode(value),
    },
    /**
     * Method with strict control for changing zone state. Returns error when:
     * 1. Deleted record is not found.
     * 2. Found record with matched type and name but different TTL or value.
     * 3. Attempted to add record with existing name and type.
     * Deletions happen first. If a record with the same name and type exists in both lists,
     * then the existing record will be deleted, and a new one added.
     */
    updateRecordSets: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/UpdateRecordSets',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateRecordSetsRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateRecordSetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /**
     * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
     * Deletes records that match all specified fields which allows to delete only specified records from a record set.
     */
    upsertRecordSets: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/UpsertRecordSets',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpsertRecordSetsRequest.encode(value).finish()),
        requestDeserialize: (value) => UpsertRecordSetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified DNS zone. */
    listOperations: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListDnsZoneOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListDnsZoneOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListDnsZoneOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListDnsZoneOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified DNS zone. */
    listAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified DNS zone. */
    setAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates access bindings for the specified DNS zone. */
    updateAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const DnsZoneServiceClient = makeGenericClientConstructor(DnsZoneServiceService, 'yandex.cloud.dns.v1.DnsZoneService');
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
