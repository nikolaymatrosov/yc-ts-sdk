"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubnetServiceClient = exports.SubnetServiceService = exports.UsedAddress = exports.ListUsedAddressesResponse = exports.ListUsedAddressesRequest = exports.MoveSubnetMetadata = exports.MoveSubnetRequest = exports.ListSubnetOperationsResponse = exports.ListSubnetOperationsRequest = exports.DeleteSubnetMetadata = exports.DeleteSubnetRequest = exports.RemoveSubnetCidrBlocksMetadata = exports.RemoveSubnetCidrBlocksRequest = exports.AddSubnetCidrBlocksMetadata = exports.AddSubnetCidrBlocksRequest = exports.UpdateSubnetMetadata = exports.UpdateSubnetRequest_LabelsEntry = exports.UpdateSubnetRequest = exports.CreateSubnetMetadata = exports.CreateSubnetRequest_LabelsEntry = exports.CreateSubnetRequest = exports.ListSubnetsResponse = exports.ListSubnetsRequest = exports.GetSubnetRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const reference_1 = require("../../../../yandex/cloud/reference/reference");
const subnet_1 = require("../../../../yandex/cloud/vpc/v1/subnet");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.vpc.v1';
const baseGetSubnetRequest = { subnetId: '' };
exports.GetSubnetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSubnetRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetSubnetRequest };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetSubnetRequest };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
};
const baseListSubnetsRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListSubnetsRequest = {
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
        const message = { ...baseListSubnetsRequest };
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
        const message = { ...baseListSubnetsRequest };
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
        const message = { ...baseListSubnetsRequest };
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
const baseListSubnetsResponse = { nextPageToken: '' };
exports.ListSubnetsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.subnets) {
            subnet_1.Subnet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSubnetsResponse };
        message.subnets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnets.push(subnet_1.Subnet.decode(reader, reader.uint32()));
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
        const message = { ...baseListSubnetsResponse };
        message.subnets = [];
        if (object.subnets !== undefined && object.subnets !== null) {
            for (const e of object.subnets) {
                message.subnets.push(subnet_1.Subnet.fromJSON(e));
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
        if (message.subnets) {
            obj.subnets = message.subnets.map((e) => e ? subnet_1.Subnet.toJSON(e) : undefined);
        }
        else {
            obj.subnets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListSubnetsResponse };
        message.subnets = [];
        if (object.subnets !== undefined && object.subnets !== null) {
            for (const e of object.subnets) {
                message.subnets.push(subnet_1.Subnet.fromPartial(e));
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
const baseCreateSubnetRequest = {
    folderId: '',
    name: '',
    description: '',
    networkId: '',
    zoneId: '',
    v4CidrBlocks: '',
    routeTableId: '',
};
exports.CreateSubnetRequest = {
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
            exports.CreateSubnetRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.networkId !== '') {
            writer.uint32(42).string(message.networkId);
        }
        if (message.zoneId !== '') {
            writer.uint32(50).string(message.zoneId);
        }
        for (const v of message.v4CidrBlocks) {
            writer.uint32(58).string(v);
        }
        if (message.routeTableId !== '') {
            writer.uint32(74).string(message.routeTableId);
        }
        if (message.dhcpOptions !== undefined) {
            subnet_1.DhcpOptions.encode(message.dhcpOptions, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSubnetRequest };
        message.labels = {};
        message.v4CidrBlocks = [];
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
                    const entry4 = exports.CreateSubnetRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.networkId = reader.string();
                    break;
                case 6:
                    message.zoneId = reader.string();
                    break;
                case 7:
                    message.v4CidrBlocks.push(reader.string());
                    break;
                case 9:
                    message.routeTableId = reader.string();
                    break;
                case 10:
                    message.dhcpOptions = subnet_1.DhcpOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateSubnetRequest };
        message.labels = {};
        message.v4CidrBlocks = [];
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        }
        else {
            message.networkId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(String(e));
            }
        }
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = subnet_1.DhcpOptions.fromJSON(object.dhcpOptions);
        }
        else {
            message.dhcpOptions = undefined;
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        }
        else {
            obj.v4CidrBlocks = [];
        }
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? subnet_1.DhcpOptions.toJSON(message.dhcpOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateSubnetRequest };
        message.labels = {};
        message.v4CidrBlocks = [];
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        }
        else {
            message.networkId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(e);
            }
        }
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = subnet_1.DhcpOptions.fromPartial(object.dhcpOptions);
        }
        else {
            message.dhcpOptions = undefined;
        }
        return message;
    },
};
const baseCreateSubnetRequest_LabelsEntry = { key: '', value: '' };
exports.CreateSubnetRequest_LabelsEntry = {
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
            ...baseCreateSubnetRequest_LabelsEntry,
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
            ...baseCreateSubnetRequest_LabelsEntry,
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
            ...baseCreateSubnetRequest_LabelsEntry,
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
const baseCreateSubnetMetadata = { subnetId: '' };
exports.CreateSubnetMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSubnetMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateSubnetMetadata };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateSubnetMetadata };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
};
const baseUpdateSubnetRequest = {
    subnetId: '',
    name: '',
    description: '',
    routeTableId: '',
};
exports.UpdateSubnetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
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
            exports.UpdateSubnetRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.routeTableId !== '') {
            writer.uint32(50).string(message.routeTableId);
        }
        if (message.dhcpOptions !== undefined) {
            subnet_1.DhcpOptions.encode(message.dhcpOptions, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateSubnetRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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
                    const entry5 = exports.UpdateSubnetRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.routeTableId = reader.string();
                    break;
                case 7:
                    message.dhcpOptions = subnet_1.DhcpOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateSubnetRequest };
        message.labels = {};
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
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
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = subnet_1.DhcpOptions.fromJSON(object.dhcpOptions);
        }
        else {
            message.dhcpOptions = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
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
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? subnet_1.DhcpOptions.toJSON(message.dhcpOptions)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateSubnetRequest };
        message.labels = {};
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
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
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = subnet_1.DhcpOptions.fromPartial(object.dhcpOptions);
        }
        else {
            message.dhcpOptions = undefined;
        }
        return message;
    },
};
const baseUpdateSubnetRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateSubnetRequest_LabelsEntry = {
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
            ...baseUpdateSubnetRequest_LabelsEntry,
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
            ...baseUpdateSubnetRequest_LabelsEntry,
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
            ...baseUpdateSubnetRequest_LabelsEntry,
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
const baseUpdateSubnetMetadata = { subnetId: '' };
exports.UpdateSubnetMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateSubnetMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateSubnetMetadata };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateSubnetMetadata };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
};
const baseAddSubnetCidrBlocksRequest = {
    subnetId: '',
    v4CidrBlocks: '',
};
exports.AddSubnetCidrBlocksRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        for (const v of message.v4CidrBlocks) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddSubnetCidrBlocksRequest,
        };
        message.v4CidrBlocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                case 2:
                    message.v4CidrBlocks.push(reader.string());
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
            ...baseAddSubnetCidrBlocksRequest,
        };
        message.v4CidrBlocks = [];
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        }
        else {
            obj.v4CidrBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddSubnetCidrBlocksRequest,
        };
        message.v4CidrBlocks = [];
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(e);
            }
        }
        return message;
    },
};
const baseAddSubnetCidrBlocksMetadata = { subnetId: '' };
exports.AddSubnetCidrBlocksMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddSubnetCidrBlocksMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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
            ...baseAddSubnetCidrBlocksMetadata,
        };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddSubnetCidrBlocksMetadata,
        };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
};
const baseRemoveSubnetCidrBlocksRequest = {
    subnetId: '',
    v4CidrBlocks: '',
};
exports.RemoveSubnetCidrBlocksRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        for (const v of message.v4CidrBlocks) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveSubnetCidrBlocksRequest,
        };
        message.v4CidrBlocks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                case 2:
                    message.v4CidrBlocks.push(reader.string());
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
            ...baseRemoveSubnetCidrBlocksRequest,
        };
        message.v4CidrBlocks = [];
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        }
        else {
            obj.v4CidrBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveSubnetCidrBlocksRequest,
        };
        message.v4CidrBlocks = [];
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(e);
            }
        }
        return message;
    },
};
const baseRemoveSubnetCidrBlocksMetadata = { subnetId: '' };
exports.RemoveSubnetCidrBlocksMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRemoveSubnetCidrBlocksMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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
            ...baseRemoveSubnetCidrBlocksMetadata,
        };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseRemoveSubnetCidrBlocksMetadata,
        };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
};
const baseDeleteSubnetRequest = { subnetId: '' };
exports.DeleteSubnetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSubnetRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteSubnetRequest };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteSubnetRequest };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
};
const baseDeleteSubnetMetadata = { subnetId: '' };
exports.DeleteSubnetMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSubnetMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteSubnetMetadata };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteSubnetMetadata };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
};
const baseListSubnetOperationsRequest = {
    subnetId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListSubnetOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSubnetOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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
            ...baseListSubnetOperationsRequest,
        };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
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
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSubnetOperationsRequest,
        };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
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
const baseListSubnetOperationsResponse = { nextPageToken: '' };
exports.ListSubnetOperationsResponse = {
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
            ...baseListSubnetOperationsResponse,
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
            ...baseListSubnetOperationsResponse,
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
            ...baseListSubnetOperationsResponse,
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
const baseMoveSubnetRequest = { subnetId: '', destinationFolderId: '' };
exports.MoveSubnetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveSubnetRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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
        const message = { ...baseMoveSubnetRequest };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
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
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMoveSubnetRequest };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
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
const baseMoveSubnetMetadata = { subnetId: '' };
exports.MoveSubnetMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveSubnetMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMoveSubnetMetadata };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMoveSubnetMetadata };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
};
const baseListUsedAddressesRequest = {
    subnetId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListUsedAddressesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
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
            ...baseListUsedAddressesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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
            ...baseListUsedAddressesRequest,
        };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
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
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListUsedAddressesRequest,
        };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
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
const baseListUsedAddressesResponse = { nextPageToken: '' };
exports.ListUsedAddressesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.addresses) {
            exports.UsedAddress.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListUsedAddressesResponse,
        };
        message.addresses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(exports.UsedAddress.decode(reader, reader.uint32()));
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
            ...baseListUsedAddressesResponse,
        };
        message.addresses = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(exports.UsedAddress.fromJSON(e));
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
            obj.addresses = message.addresses.map((e) => e ? exports.UsedAddress.toJSON(e) : undefined);
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
            ...baseListUsedAddressesResponse,
        };
        message.addresses = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(exports.UsedAddress.fromPartial(e));
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
const baseUsedAddress = { address: '', ipVersion: 0 };
exports.UsedAddress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(16).int32(message.ipVersion);
        }
        for (const v of message.references) {
            reference_1.Reference.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUsedAddress };
        message.references = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.ipVersion = reader.int32();
                    break;
                case 3:
                    message.references.push(reference_1.Reference.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUsedAddress };
        message.references = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = (0, subnet_1.ipVersionFromJSON)(object.ipVersion);
        }
        else {
            message.ipVersion = 0;
        }
        if (object.references !== undefined && object.references !== null) {
            for (const e of object.references) {
                message.references.push(reference_1.Reference.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.ipVersion !== undefined &&
            (obj.ipVersion = (0, subnet_1.ipVersionToJSON)(message.ipVersion));
        if (message.references) {
            obj.references = message.references.map((e) => e ? reference_1.Reference.toJSON(e) : undefined);
        }
        else {
            obj.references = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUsedAddress };
        message.references = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        }
        else {
            message.ipVersion = 0;
        }
        if (object.references !== undefined && object.references !== null) {
            for (const e of object.references) {
                message.references.push(reference_1.Reference.fromPartial(e));
            }
        }
        return message;
    },
};
/** A set of methods for managing Subnet resources. */
exports.SubnetServiceService = {
    /**
     * Returns the specified Subnet resource.
     *
     * To get the list of available Subnet resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.vpc.v1.SubnetService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSubnetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSubnetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(subnet_1.Subnet.encode(value).finish()),
        responseDeserialize: (value) => subnet_1.Subnet.decode(value),
    },
    /** Retrieves the list of Subnet resources in the specified folder. */
    list: {
        path: '/yandex.cloud.vpc.v1.SubnetService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSubnetsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSubnetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSubnetsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSubnetsResponse.decode(value),
    },
    /**
     * Creates a subnet in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.vpc.v1.SubnetService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSubnetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSubnetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: {
        path: '/yandex.cloud.vpc.v1.SubnetService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSubnetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSubnetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Adds CIDR blocks to the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    addCidrBlocks: {
        path: '/yandex.cloud.vpc.v1.SubnetService/AddCidrBlocks',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddSubnetCidrBlocksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddSubnetCidrBlocksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Removes CIDR blocks from the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    removeCidrBlocks: {
        path: '/yandex.cloud.vpc.v1.SubnetService/RemoveCidrBlocks',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveSubnetCidrBlocksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveSubnetCidrBlocksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified subnet. */
    delete: {
        path: '/yandex.cloud.vpc.v1.SubnetService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSubnetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSubnetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List operations for the specified subnet. */
    listOperations: {
        path: '/yandex.cloud.vpc.v1.SubnetService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSubnetOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSubnetOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSubnetOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSubnetOperationsResponse.decode(value),
    },
    /** Move subnet to another folder. */
    move: {
        path: '/yandex.cloud.vpc.v1.SubnetService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveSubnetRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveSubnetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List used addresses in specified subnet. */
    listUsedAddresses: {
        path: '/yandex.cloud.vpc.v1.SubnetService/ListUsedAddresses',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListUsedAddressesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListUsedAddressesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListUsedAddressesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListUsedAddressesResponse.decode(value),
    },
};
exports.SubnetServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SubnetServiceService, 'yandex.cloud.vpc.v1.SubnetService');
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
