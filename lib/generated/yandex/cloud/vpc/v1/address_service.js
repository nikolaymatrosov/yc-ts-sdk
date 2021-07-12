/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Address, AddressRequirements, } from '../../../../yandex/cloud/vpc/v1/address';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.vpc.v1';
const baseGetAddressRequest = { addressId: '' };
export const GetAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetAddressRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetAddressRequest };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        }
        else {
            message.addressId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetAddressRequest };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        }
        else {
            message.addressId = '';
        }
        return message;
    },
};
const baseGetAddressByValueRequest = {};
export const GetAddressByValueRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.externalIpv4Address !== undefined) {
            writer.uint32(10).string(message.externalIpv4Address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetAddressByValueRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalIpv4Address = reader.string();
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
            ...baseGetAddressByValueRequest,
        };
        if (object.externalIpv4Address !== undefined &&
            object.externalIpv4Address !== null) {
            message.externalIpv4Address = String(object.externalIpv4Address);
        }
        else {
            message.externalIpv4Address = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.externalIpv4Address !== undefined &&
            (obj.externalIpv4Address = message.externalIpv4Address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetAddressByValueRequest,
        };
        if (object.externalIpv4Address !== undefined &&
            object.externalIpv4Address !== null) {
            message.externalIpv4Address = object.externalIpv4Address;
        }
        else {
            message.externalIpv4Address = undefined;
        }
        return message;
    },
};
const baseListAddressesRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListAddressesRequest = {
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
        const message = { ...baseListAddressesRequest };
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
        const message = { ...baseListAddressesRequest };
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
        const message = { ...baseListAddressesRequest };
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
const baseListAddressesResponse = { nextPageToken: '' };
export const ListAddressesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addresses) {
            Address.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListAddressesResponse,
        };
        message.addresses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(Address.decode(reader, reader.uint32()));
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
            ...baseListAddressesResponse,
        };
        message.addresses = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(Address.fromJSON(e));
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
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e ? Address.toJSON(e) : undefined);
        }
        else {
            obj.addresses = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListAddressesResponse,
        };
        message.addresses = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(Address.fromPartial(e));
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
const baseCreateAddressRequest = {
    folderId: '',
    name: '',
    description: '',
};
export const CreateAddressRequest = {
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
            CreateAddressRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.externalIpv4AddressSpec !== undefined) {
            ExternalIpv4AddressSpec.encode(message.externalIpv4AddressSpec, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateAddressRequest };
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
                    const entry4 = CreateAddressRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.externalIpv4AddressSpec =
                        ExternalIpv4AddressSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateAddressRequest };
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
        if (object.externalIpv4AddressSpec !== undefined &&
            object.externalIpv4AddressSpec !== null) {
            message.externalIpv4AddressSpec = ExternalIpv4AddressSpec.fromJSON(object.externalIpv4AddressSpec);
        }
        else {
            message.externalIpv4AddressSpec = undefined;
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
        message.externalIpv4AddressSpec !== undefined &&
            (obj.externalIpv4AddressSpec = message.externalIpv4AddressSpec
                ? ExternalIpv4AddressSpec.toJSON(message.externalIpv4AddressSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateAddressRequest };
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
        if (object.externalIpv4AddressSpec !== undefined &&
            object.externalIpv4AddressSpec !== null) {
            message.externalIpv4AddressSpec =
                ExternalIpv4AddressSpec.fromPartial(object.externalIpv4AddressSpec);
        }
        else {
            message.externalIpv4AddressSpec = undefined;
        }
        return message;
    },
};
const baseCreateAddressRequest_LabelsEntry = { key: '', value: '' };
export const CreateAddressRequest_LabelsEntry = {
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
            ...baseCreateAddressRequest_LabelsEntry,
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
            ...baseCreateAddressRequest_LabelsEntry,
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
            ...baseCreateAddressRequest_LabelsEntry,
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
const baseExternalIpv4AddressSpec = { address: '', zoneId: '' };
export const ExternalIpv4AddressSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.zoneId !== '') {
            writer.uint32(18).string(message.zoneId);
        }
        if (message.requirements !== undefined) {
            AddressRequirements.encode(message.requirements, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalIpv4AddressSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.zoneId = reader.string();
                    break;
                case 3:
                    message.requirements = AddressRequirements.decode(reader, reader.uint32());
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
            ...baseExternalIpv4AddressSpec,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.requirements !== undefined && object.requirements !== null) {
            message.requirements = AddressRequirements.fromJSON(object.requirements);
        }
        else {
            message.requirements = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.requirements !== undefined &&
            (obj.requirements = message.requirements
                ? AddressRequirements.toJSON(message.requirements)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseExternalIpv4AddressSpec,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.requirements !== undefined && object.requirements !== null) {
            message.requirements = AddressRequirements.fromPartial(object.requirements);
        }
        else {
            message.requirements = undefined;
        }
        return message;
    },
};
const baseCreateAddressMetadata = { addressId: '' };
export const CreateAddressMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateAddressMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
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
            ...baseCreateAddressMetadata,
        };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        }
        else {
            message.addressId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateAddressMetadata,
        };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        }
        else {
            message.addressId = '';
        }
        return message;
    },
};
const baseUpdateAddressRequest = {
    addressId: '',
    name: '',
    description: '',
    reserved: false,
};
export const UpdateAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
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
            UpdateAddressRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.reserved === true) {
            writer.uint32(48).bool(message.reserved);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAddressRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
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
                    const entry5 = UpdateAddressRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.reserved = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateAddressRequest };
        message.labels = {};
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        }
        else {
            message.addressId = '';
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
        if (object.reserved !== undefined && object.reserved !== null) {
            message.reserved = Boolean(object.reserved);
        }
        else {
            message.reserved = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
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
        message.reserved !== undefined && (obj.reserved = message.reserved);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateAddressRequest };
        message.labels = {};
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        }
        else {
            message.addressId = '';
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
        if (object.reserved !== undefined && object.reserved !== null) {
            message.reserved = object.reserved;
        }
        else {
            message.reserved = false;
        }
        return message;
    },
};
const baseUpdateAddressRequest_LabelsEntry = { key: '', value: '' };
export const UpdateAddressRequest_LabelsEntry = {
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
            ...baseUpdateAddressRequest_LabelsEntry,
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
            ...baseUpdateAddressRequest_LabelsEntry,
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
            ...baseUpdateAddressRequest_LabelsEntry,
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
const baseUpdateAddressMetadata = { addressId: '' };
export const UpdateAddressMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAddressMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
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
            ...baseUpdateAddressMetadata,
        };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        }
        else {
            message.addressId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateAddressMetadata,
        };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        }
        else {
            message.addressId = '';
        }
        return message;
    },
};
const baseDeleteAddressRequest = { addressId: '' };
export const DeleteAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteAddressRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteAddressRequest };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        }
        else {
            message.addressId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteAddressRequest };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        }
        else {
            message.addressId = '';
        }
        return message;
    },
};
const baseDeleteAddressMetadata = { addressId: '' };
export const DeleteAddressMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAddressMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
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
            ...baseDeleteAddressMetadata,
        };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        }
        else {
            message.addressId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteAddressMetadata,
        };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        }
        else {
            message.addressId = '';
        }
        return message;
    },
};
const baseListAddressOperationsRequest = {
    addressId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListAddressOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
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
            ...baseListAddressOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
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
            ...baseListAddressOperationsRequest,
        };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        }
        else {
            message.addressId = '';
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
        message.addressId !== undefined && (obj.addressId = message.addressId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListAddressOperationsRequest,
        };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        }
        else {
            message.addressId = '';
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
const baseListAddressOperationsResponse = { nextPageToken: '' };
export const ListAddressOperationsResponse = {
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
            ...baseListAddressOperationsResponse,
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
            ...baseListAddressOperationsResponse,
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
            ...baseListAddressOperationsResponse,
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
const baseMoveAddressRequest = {
    addressId: '',
    destinationFolderId: '',
};
export const MoveAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveAddressRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMoveAddressRequest };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        }
        else {
            message.addressId = '';
        }
        if (object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null) {
            message.destinationFolderId = String(object.destinationFolderId);
        }
        else {
            message.destinationFolderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMoveAddressRequest };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        }
        else {
            message.addressId = '';
        }
        if (object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null) {
            message.destinationFolderId = object.destinationFolderId;
        }
        else {
            message.destinationFolderId = '';
        }
        return message;
    },
};
const baseMoveAddressMetadata = { addressId: '' };
export const MoveAddressMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveAddressMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMoveAddressMetadata };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        }
        else {
            message.addressId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMoveAddressMetadata };
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        }
        else {
            message.addressId = '';
        }
        return message;
    },
};
/** A set of methods for managing Address resources. */
export const AddressServiceService = {
    /**
     * Returns the specified Address resource.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.vpc.v1.AddressService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetAddressRequest.encode(value).finish()),
        requestDeserialize: (value) => GetAddressRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Address.encode(value).finish()),
        responseDeserialize: (value) => Address.decode(value),
    },
    /**
     * Returns the specified Address resource by a given value.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    getByValue: {
        path: '/yandex.cloud.vpc.v1.AddressService/GetByValue',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetAddressByValueRequest.encode(value).finish()),
        requestDeserialize: (value) => GetAddressByValueRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Address.encode(value).finish()),
        responseDeserialize: (value) => Address.decode(value),
    },
    /** Retrieves the list of Address resources in the specified folder. */
    list: {
        path: '/yandex.cloud.vpc.v1.AddressService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAddressesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAddressesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAddressesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAddressesResponse.decode(value),
    },
    /** Creates an address in the specified folder and network. */
    create: {
        path: '/yandex.cloud.vpc.v1.AddressService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateAddressRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateAddressRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified address. */
    update: {
        path: '/yandex.cloud.vpc.v1.AddressService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAddressRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAddressRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified address. */
    delete: {
        path: '/yandex.cloud.vpc.v1.AddressService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteAddressRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteAddressRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** List operations for the specified address. */
    listOperations: {
        path: '/yandex.cloud.vpc.v1.AddressService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAddressOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAddressOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAddressOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAddressOperationsResponse.decode(value),
    },
    /** Move an address to another folder */
    move: {
        path: '/yandex.cloud.vpc.v1.AddressService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(MoveAddressRequest.encode(value).finish()),
        requestDeserialize: (value) => MoveAddressRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const AddressServiceClient = makeGenericClientConstructor(AddressServiceService, 'yandex.cloud.vpc.v1.AddressService');
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
