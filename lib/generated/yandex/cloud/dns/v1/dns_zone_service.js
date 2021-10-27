"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnsZoneServiceClient = exports.DnsZoneServiceService = exports.ListDnsZoneOperationsResponse = exports.ListDnsZoneOperationsRequest = exports.UpsertRecordSetsMetadata = exports.UpsertRecordSetsRequest = exports.UpdateRecordSetsMetadata = exports.UpdateRecordSetsRequest = exports.ListDnsZoneRecordSetsResponse = exports.ListDnsZoneRecordSetsRequest = exports.GetDnsZoneRecordSetRequest = exports.DeleteDnsZoneMetadata = exports.DeleteDnsZoneRequest = exports.UpdateDnsZoneMetadata = exports.UpdateDnsZoneRequest_LabelsEntry = exports.UpdateDnsZoneRequest = exports.CreateDnsZoneMetadata = exports.CreateDnsZoneRequest_LabelsEntry = exports.CreateDnsZoneRequest = exports.ListDnsZonesResponse = exports.ListDnsZonesRequest = exports.GetDnsZoneRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../typeRegistry");
const access_1 = require("../../../../yandex/cloud/access/access");
const dns_zone_1 = require("../../../../yandex/cloud/dns/v1/dns_zone");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.dns.v1';
const baseGetDnsZoneRequest = {
    $type: 'yandex.cloud.dns.v1.GetDnsZoneRequest',
    dnsZoneId: '',
};
exports.GetDnsZoneRequest = {
    $type: 'yandex.cloud.dns.v1.GetDnsZoneRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetDnsZoneRequest.$type, exports.GetDnsZoneRequest);
const baseListDnsZonesRequest = {
    $type: 'yandex.cloud.dns.v1.ListDnsZonesRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListDnsZonesRequest = {
    $type: 'yandex.cloud.dns.v1.ListDnsZonesRequest',
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDnsZonesRequest.$type, exports.ListDnsZonesRequest);
const baseListDnsZonesResponse = {
    $type: 'yandex.cloud.dns.v1.ListDnsZonesResponse',
    nextPageToken: '',
};
exports.ListDnsZonesResponse = {
    $type: 'yandex.cloud.dns.v1.ListDnsZonesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.dnsZones) {
            dns_zone_1.DnsZone.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDnsZonesResponse };
        message.dnsZones = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dnsZones.push(dns_zone_1.DnsZone.decode(reader, reader.uint32()));
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
                message.dnsZones.push(dns_zone_1.DnsZone.fromJSON(e));
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
            obj.dnsZones = message.dnsZones.map((e) => e ? dns_zone_1.DnsZone.toJSON(e) : undefined);
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
                message.dnsZones.push(dns_zone_1.DnsZone.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDnsZonesResponse.$type, exports.ListDnsZonesResponse);
const baseCreateDnsZoneRequest = {
    $type: 'yandex.cloud.dns.v1.CreateDnsZoneRequest',
    folderId: '',
    name: '',
    description: '',
    zone: '',
};
exports.CreateDnsZoneRequest = {
    $type: 'yandex.cloud.dns.v1.CreateDnsZoneRequest',
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
            exports.CreateDnsZoneRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.dns.v1.CreateDnsZoneRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.zone !== '') {
            writer.uint32(42).string(message.zone);
        }
        if (message.privateVisibility !== undefined) {
            dns_zone_1.PrivateVisibility.encode(message.privateVisibility, writer.uint32(50).fork()).ldelim();
        }
        if (message.publicVisibility !== undefined) {
            dns_zone_1.PublicVisibility.encode(message.publicVisibility, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    const entry4 = exports.CreateDnsZoneRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.zone = reader.string();
                    break;
                case 6:
                    message.privateVisibility = dns_zone_1.PrivateVisibility.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.publicVisibility = dns_zone_1.PublicVisibility.decode(reader, reader.uint32());
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
            message.privateVisibility = dns_zone_1.PrivateVisibility.fromJSON(object.privateVisibility);
        }
        else {
            message.privateVisibility = undefined;
        }
        if (object.publicVisibility !== undefined &&
            object.publicVisibility !== null) {
            message.publicVisibility = dns_zone_1.PublicVisibility.fromJSON(object.publicVisibility);
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
                ? dns_zone_1.PrivateVisibility.toJSON(message.privateVisibility)
                : undefined);
        message.publicVisibility !== undefined &&
            (obj.publicVisibility = message.publicVisibility
                ? dns_zone_1.PublicVisibility.toJSON(message.publicVisibility)
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
            message.privateVisibility = dns_zone_1.PrivateVisibility.fromPartial(object.privateVisibility);
        }
        else {
            message.privateVisibility = undefined;
        }
        if (object.publicVisibility !== undefined &&
            object.publicVisibility !== null) {
            message.publicVisibility = dns_zone_1.PublicVisibility.fromPartial(object.publicVisibility);
        }
        else {
            message.publicVisibility = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateDnsZoneRequest.$type, exports.CreateDnsZoneRequest);
const baseCreateDnsZoneRequest_LabelsEntry = {
    $type: 'yandex.cloud.dns.v1.CreateDnsZoneRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateDnsZoneRequest_LabelsEntry = {
    $type: 'yandex.cloud.dns.v1.CreateDnsZoneRequest.LabelsEntry',
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateDnsZoneRequest_LabelsEntry.$type, exports.CreateDnsZoneRequest_LabelsEntry);
const baseCreateDnsZoneMetadata = {
    $type: 'yandex.cloud.dns.v1.CreateDnsZoneMetadata',
    dnsZoneId: '',
};
exports.CreateDnsZoneMetadata = {
    $type: 'yandex.cloud.dns.v1.CreateDnsZoneMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateDnsZoneMetadata.$type, exports.CreateDnsZoneMetadata);
const baseUpdateDnsZoneRequest = {
    $type: 'yandex.cloud.dns.v1.UpdateDnsZoneRequest',
    dnsZoneId: '',
    name: '',
    description: '',
};
exports.UpdateDnsZoneRequest = {
    $type: 'yandex.cloud.dns.v1.UpdateDnsZoneRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
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
            exports.UpdateDnsZoneRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.dns.v1.UpdateDnsZoneRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.privateVisibility !== undefined) {
            dns_zone_1.PrivateVisibility.encode(message.privateVisibility, writer.uint32(50).fork()).ldelim();
        }
        if (message.publicVisibility !== undefined) {
            dns_zone_1.PublicVisibility.encode(message.publicVisibility, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateDnsZoneRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.privateVisibility = dns_zone_1.PrivateVisibility.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.publicVisibility = dns_zone_1.PublicVisibility.decode(reader, reader.uint32());
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
        if (object.privateVisibility !== undefined &&
            object.privateVisibility !== null) {
            message.privateVisibility = dns_zone_1.PrivateVisibility.fromJSON(object.privateVisibility);
        }
        else {
            message.privateVisibility = undefined;
        }
        if (object.publicVisibility !== undefined &&
            object.publicVisibility !== null) {
            message.publicVisibility = dns_zone_1.PublicVisibility.fromJSON(object.publicVisibility);
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
        message.privateVisibility !== undefined &&
            (obj.privateVisibility = message.privateVisibility
                ? dns_zone_1.PrivateVisibility.toJSON(message.privateVisibility)
                : undefined);
        message.publicVisibility !== undefined &&
            (obj.publicVisibility = message.publicVisibility
                ? dns_zone_1.PublicVisibility.toJSON(message.publicVisibility)
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
        if (object.privateVisibility !== undefined &&
            object.privateVisibility !== null) {
            message.privateVisibility = dns_zone_1.PrivateVisibility.fromPartial(object.privateVisibility);
        }
        else {
            message.privateVisibility = undefined;
        }
        if (object.publicVisibility !== undefined &&
            object.publicVisibility !== null) {
            message.publicVisibility = dns_zone_1.PublicVisibility.fromPartial(object.publicVisibility);
        }
        else {
            message.publicVisibility = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDnsZoneRequest.$type, exports.UpdateDnsZoneRequest);
const baseUpdateDnsZoneRequest_LabelsEntry = {
    $type: 'yandex.cloud.dns.v1.UpdateDnsZoneRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateDnsZoneRequest_LabelsEntry = {
    $type: 'yandex.cloud.dns.v1.UpdateDnsZoneRequest.LabelsEntry',
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDnsZoneRequest_LabelsEntry.$type, exports.UpdateDnsZoneRequest_LabelsEntry);
const baseUpdateDnsZoneMetadata = {
    $type: 'yandex.cloud.dns.v1.UpdateDnsZoneMetadata',
    dnsZoneId: '',
};
exports.UpdateDnsZoneMetadata = {
    $type: 'yandex.cloud.dns.v1.UpdateDnsZoneMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateDnsZoneMetadata.$type, exports.UpdateDnsZoneMetadata);
const baseDeleteDnsZoneRequest = {
    $type: 'yandex.cloud.dns.v1.DeleteDnsZoneRequest',
    dnsZoneId: '',
};
exports.DeleteDnsZoneRequest = {
    $type: 'yandex.cloud.dns.v1.DeleteDnsZoneRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDnsZoneRequest.$type, exports.DeleteDnsZoneRequest);
const baseDeleteDnsZoneMetadata = {
    $type: 'yandex.cloud.dns.v1.DeleteDnsZoneMetadata',
    dnsZoneId: '',
};
exports.DeleteDnsZoneMetadata = {
    $type: 'yandex.cloud.dns.v1.DeleteDnsZoneMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.DeleteDnsZoneMetadata.$type, exports.DeleteDnsZoneMetadata);
const baseGetDnsZoneRecordSetRequest = {
    $type: 'yandex.cloud.dns.v1.GetDnsZoneRecordSetRequest',
    dnsZoneId: '',
    name: '',
    type: '',
};
exports.GetDnsZoneRecordSetRequest = {
    $type: 'yandex.cloud.dns.v1.GetDnsZoneRecordSetRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetDnsZoneRecordSetRequest.$type, exports.GetDnsZoneRecordSetRequest);
const baseListDnsZoneRecordSetsRequest = {
    $type: 'yandex.cloud.dns.v1.ListDnsZoneRecordSetsRequest',
    dnsZoneId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListDnsZoneRecordSetsRequest = {
    $type: 'yandex.cloud.dns.v1.ListDnsZoneRecordSetsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDnsZoneRecordSetsRequest.$type, exports.ListDnsZoneRecordSetsRequest);
const baseListDnsZoneRecordSetsResponse = {
    $type: 'yandex.cloud.dns.v1.ListDnsZoneRecordSetsResponse',
    nextPageToken: '',
};
exports.ListDnsZoneRecordSetsResponse = {
    $type: 'yandex.cloud.dns.v1.ListDnsZoneRecordSetsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.recordSets) {
            dns_zone_1.RecordSet.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListDnsZoneRecordSetsResponse,
        };
        message.recordSets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recordSets.push(dns_zone_1.RecordSet.decode(reader, reader.uint32()));
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
                message.recordSets.push(dns_zone_1.RecordSet.fromJSON(e));
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
            obj.recordSets = message.recordSets.map((e) => e ? dns_zone_1.RecordSet.toJSON(e) : undefined);
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
                message.recordSets.push(dns_zone_1.RecordSet.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDnsZoneRecordSetsResponse.$type, exports.ListDnsZoneRecordSetsResponse);
const baseUpdateRecordSetsRequest = {
    $type: 'yandex.cloud.dns.v1.UpdateRecordSetsRequest',
    dnsZoneId: '',
};
exports.UpdateRecordSetsRequest = {
    $type: 'yandex.cloud.dns.v1.UpdateRecordSetsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        for (const v of message.deletions) {
            dns_zone_1.RecordSet.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.additions) {
            dns_zone_1.RecordSet.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.deletions.push(dns_zone_1.RecordSet.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.additions.push(dns_zone_1.RecordSet.decode(reader, reader.uint32()));
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
                message.deletions.push(dns_zone_1.RecordSet.fromJSON(e));
            }
        }
        if (object.additions !== undefined && object.additions !== null) {
            for (const e of object.additions) {
                message.additions.push(dns_zone_1.RecordSet.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        if (message.deletions) {
            obj.deletions = message.deletions.map((e) => e ? dns_zone_1.RecordSet.toJSON(e) : undefined);
        }
        else {
            obj.deletions = [];
        }
        if (message.additions) {
            obj.additions = message.additions.map((e) => e ? dns_zone_1.RecordSet.toJSON(e) : undefined);
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
                message.deletions.push(dns_zone_1.RecordSet.fromPartial(e));
            }
        }
        if (object.additions !== undefined && object.additions !== null) {
            for (const e of object.additions) {
                message.additions.push(dns_zone_1.RecordSet.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRecordSetsRequest.$type, exports.UpdateRecordSetsRequest);
const baseUpdateRecordSetsMetadata = {
    $type: 'yandex.cloud.dns.v1.UpdateRecordSetsMetadata',
};
exports.UpdateRecordSetsMetadata = {
    $type: 'yandex.cloud.dns.v1.UpdateRecordSetsMetadata',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateRecordSetsMetadata.$type, exports.UpdateRecordSetsMetadata);
const baseUpsertRecordSetsRequest = {
    $type: 'yandex.cloud.dns.v1.UpsertRecordSetsRequest',
    dnsZoneId: '',
};
exports.UpsertRecordSetsRequest = {
    $type: 'yandex.cloud.dns.v1.UpsertRecordSetsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dnsZoneId !== '') {
            writer.uint32(10).string(message.dnsZoneId);
        }
        for (const v of message.deletions) {
            dns_zone_1.RecordSet.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.replacements) {
            dns_zone_1.RecordSet.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.merges) {
            dns_zone_1.RecordSet.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.deletions.push(dns_zone_1.RecordSet.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.replacements.push(dns_zone_1.RecordSet.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.merges.push(dns_zone_1.RecordSet.decode(reader, reader.uint32()));
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
                message.deletions.push(dns_zone_1.RecordSet.fromJSON(e));
            }
        }
        if (object.replacements !== undefined && object.replacements !== null) {
            for (const e of object.replacements) {
                message.replacements.push(dns_zone_1.RecordSet.fromJSON(e));
            }
        }
        if (object.merges !== undefined && object.merges !== null) {
            for (const e of object.merges) {
                message.merges.push(dns_zone_1.RecordSet.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        if (message.deletions) {
            obj.deletions = message.deletions.map((e) => e ? dns_zone_1.RecordSet.toJSON(e) : undefined);
        }
        else {
            obj.deletions = [];
        }
        if (message.replacements) {
            obj.replacements = message.replacements.map((e) => e ? dns_zone_1.RecordSet.toJSON(e) : undefined);
        }
        else {
            obj.replacements = [];
        }
        if (message.merges) {
            obj.merges = message.merges.map((e) => e ? dns_zone_1.RecordSet.toJSON(e) : undefined);
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
                message.deletions.push(dns_zone_1.RecordSet.fromPartial(e));
            }
        }
        if (object.replacements !== undefined && object.replacements !== null) {
            for (const e of object.replacements) {
                message.replacements.push(dns_zone_1.RecordSet.fromPartial(e));
            }
        }
        if (object.merges !== undefined && object.merges !== null) {
            for (const e of object.merges) {
                message.merges.push(dns_zone_1.RecordSet.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpsertRecordSetsRequest.$type, exports.UpsertRecordSetsRequest);
const baseUpsertRecordSetsMetadata = {
    $type: 'yandex.cloud.dns.v1.UpsertRecordSetsMetadata',
};
exports.UpsertRecordSetsMetadata = {
    $type: 'yandex.cloud.dns.v1.UpsertRecordSetsMetadata',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.UpsertRecordSetsMetadata.$type, exports.UpsertRecordSetsMetadata);
const baseListDnsZoneOperationsRequest = {
    $type: 'yandex.cloud.dns.v1.ListDnsZoneOperationsRequest',
    dnsZoneId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListDnsZoneOperationsRequest = {
    $type: 'yandex.cloud.dns.v1.ListDnsZoneOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDnsZoneOperationsRequest.$type, exports.ListDnsZoneOperationsRequest);
const baseListDnsZoneOperationsResponse = {
    $type: 'yandex.cloud.dns.v1.ListDnsZoneOperationsResponse',
    nextPageToken: '',
};
exports.ListDnsZoneOperationsResponse = {
    $type: 'yandex.cloud.dns.v1.ListDnsZoneOperationsResponse',
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
            ...baseListDnsZoneOperationsResponse,
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
            ...baseListDnsZoneOperationsResponse,
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
            ...baseListDnsZoneOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListDnsZoneOperationsResponse.$type, exports.ListDnsZoneOperationsResponse);
/** A set of methods for managing DNS zones. */
exports.DnsZoneServiceService = {
    /**
     * Returns the specified DNS zone.
     *
     * To get the list of all available DNS zones, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDnsZoneRequest.decode(value),
        responseSerialize: (value) => Buffer.from(dns_zone_1.DnsZone.encode(value).finish()),
        responseDeserialize: (value) => dns_zone_1.DnsZone.decode(value),
    },
    /** Retrieves the list of DNS zones in the specified folder. */
    list: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDnsZonesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDnsZonesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDnsZonesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDnsZonesResponse.decode(value),
    },
    /** Creates a DNS zone in the specified folder. */
    create: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateDnsZoneRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified DNS zone. */
    update: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateDnsZoneRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified DNS zone. */
    delete: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteDnsZoneRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteDnsZoneRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the specified record set. */
    getRecordSet: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/GetRecordSet',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetDnsZoneRecordSetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetDnsZoneRecordSetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(dns_zone_1.RecordSet.encode(value).finish()),
        responseDeserialize: (value) => dns_zone_1.RecordSet.decode(value),
    },
    /** Retrieves the list of record sets in the specified folder. */
    listRecordSets: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/ListRecordSets',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDnsZoneRecordSetsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDnsZoneRecordSetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDnsZoneRecordSetsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDnsZoneRecordSetsResponse.decode(value),
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
        requestSerialize: (value) => Buffer.from(exports.UpdateRecordSetsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateRecordSetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
     * Deletes records that match all specified fields which allows to delete only specified records from a record set.
     */
    upsertRecordSets: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/UpsertRecordSets',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpsertRecordSetsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpsertRecordSetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified DNS zone. */
    listOperations: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListDnsZoneOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListDnsZoneOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListDnsZoneOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListDnsZoneOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified DNS zone. */
    listAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified DNS zone. */
    setAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified DNS zone. */
    updateAccessBindings: {
        path: '/yandex.cloud.dns.v1.DnsZoneService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.DnsZoneServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.DnsZoneServiceService, 'yandex.cloud.dns.v1.DnsZoneService');
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
