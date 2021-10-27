"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteTableServiceClient = exports.RouteTableServiceService = exports.MoveRouteTableMetadata = exports.MoveRouteTableRequest = exports.ListRouteTableOperationsResponse = exports.ListRouteTableOperationsRequest = exports.DeleteRouteTableMetadata = exports.DeleteRouteTableRequest = exports.UpdateRouteTableMetadata = exports.UpdateRouteTableRequest_LabelsEntry = exports.UpdateRouteTableRequest = exports.CreateRouteTableMetadata = exports.CreateRouteTableRequest_LabelsEntry = exports.CreateRouteTableRequest = exports.ListRouteTablesResponse = exports.ListRouteTablesRequest = exports.GetRouteTableRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const route_table_1 = require("../../../../yandex/cloud/vpc/v1/route_table");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.vpc.v1';
const baseGetRouteTableRequest = { routeTableId: '' };
exports.GetRouteTableRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRouteTableRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetRouteTableRequest };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetRouteTableRequest };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
};
const baseListRouteTablesRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListRouteTablesRequest = {
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
        const message = {
            ...baseListRouteTablesRequest,
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
            ...baseListRouteTablesRequest,
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
            ...baseListRouteTablesRequest,
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
const baseListRouteTablesResponse = { nextPageToken: '' };
exports.ListRouteTablesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.routeTables) {
            route_table_1.RouteTable.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListRouteTablesResponse,
        };
        message.routeTables = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTables.push(route_table_1.RouteTable.decode(reader, reader.uint32()));
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
            ...baseListRouteTablesResponse,
        };
        message.routeTables = [];
        if (object.routeTables !== undefined && object.routeTables !== null) {
            for (const e of object.routeTables) {
                message.routeTables.push(route_table_1.RouteTable.fromJSON(e));
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
        if (message.routeTables) {
            obj.routeTables = message.routeTables.map((e) => e ? route_table_1.RouteTable.toJSON(e) : undefined);
        }
        else {
            obj.routeTables = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListRouteTablesResponse,
        };
        message.routeTables = [];
        if (object.routeTables !== undefined && object.routeTables !== null) {
            for (const e of object.routeTables) {
                message.routeTables.push(route_table_1.RouteTable.fromPartial(e));
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
const baseCreateRouteTableRequest = {
    folderId: '',
    name: '',
    description: '',
    networkId: '',
};
exports.CreateRouteTableRequest = {
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
            exports.CreateRouteTableRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.networkId !== '') {
            writer.uint32(42).string(message.networkId);
        }
        for (const v of message.staticRoutes) {
            route_table_1.StaticRoute.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRouteTableRequest,
        };
        message.labels = {};
        message.staticRoutes = [];
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
                    const entry4 = exports.CreateRouteTableRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.networkId = reader.string();
                    break;
                case 6:
                    message.staticRoutes.push(route_table_1.StaticRoute.decode(reader, reader.uint32()));
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
            ...baseCreateRouteTableRequest,
        };
        message.labels = {};
        message.staticRoutes = [];
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
        if (object.staticRoutes !== undefined && object.staticRoutes !== null) {
            for (const e of object.staticRoutes) {
                message.staticRoutes.push(route_table_1.StaticRoute.fromJSON(e));
            }
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
        if (message.staticRoutes) {
            obj.staticRoutes = message.staticRoutes.map((e) => e ? route_table_1.StaticRoute.toJSON(e) : undefined);
        }
        else {
            obj.staticRoutes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateRouteTableRequest,
        };
        message.labels = {};
        message.staticRoutes = [];
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
        if (object.staticRoutes !== undefined && object.staticRoutes !== null) {
            for (const e of object.staticRoutes) {
                message.staticRoutes.push(route_table_1.StaticRoute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCreateRouteTableRequest_LabelsEntry = { key: '', value: '' };
exports.CreateRouteTableRequest_LabelsEntry = {
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
            ...baseCreateRouteTableRequest_LabelsEntry,
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
            ...baseCreateRouteTableRequest_LabelsEntry,
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
            ...baseCreateRouteTableRequest_LabelsEntry,
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
const baseCreateRouteTableMetadata = { routeTableId: '' };
exports.CreateRouteTableMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateRouteTableMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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
            ...baseCreateRouteTableMetadata,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateRouteTableMetadata,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
};
const baseUpdateRouteTableRequest = {
    routeTableId: '',
    name: '',
    description: '',
};
exports.UpdateRouteTableRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
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
            exports.UpdateRouteTableRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        for (const v of message.staticRoutes) {
            route_table_1.StaticRoute.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRouteTableRequest,
        };
        message.labels = {};
        message.staticRoutes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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
                    const entry5 = exports.UpdateRouteTableRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.staticRoutes.push(route_table_1.StaticRoute.decode(reader, reader.uint32()));
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
            ...baseUpdateRouteTableRequest,
        };
        message.labels = {};
        message.staticRoutes = [];
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
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
        if (object.staticRoutes !== undefined && object.staticRoutes !== null) {
            for (const e of object.staticRoutes) {
                message.staticRoutes.push(route_table_1.StaticRoute.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
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
        if (message.staticRoutes) {
            obj.staticRoutes = message.staticRoutes.map((e) => e ? route_table_1.StaticRoute.toJSON(e) : undefined);
        }
        else {
            obj.staticRoutes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateRouteTableRequest,
        };
        message.labels = {};
        message.staticRoutes = [];
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
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
        if (object.staticRoutes !== undefined && object.staticRoutes !== null) {
            for (const e of object.staticRoutes) {
                message.staticRoutes.push(route_table_1.StaticRoute.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateRouteTableRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateRouteTableRequest_LabelsEntry = {
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
            ...baseUpdateRouteTableRequest_LabelsEntry,
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
            ...baseUpdateRouteTableRequest_LabelsEntry,
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
            ...baseUpdateRouteTableRequest_LabelsEntry,
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
const baseUpdateRouteTableMetadata = { routeTableId: '' };
exports.UpdateRouteTableMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateRouteTableMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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
            ...baseUpdateRouteTableMetadata,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateRouteTableMetadata,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
};
const baseDeleteRouteTableRequest = { routeTableId: '' };
exports.DeleteRouteTableRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRouteTableRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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
            ...baseDeleteRouteTableRequest,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteRouteTableRequest,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
};
const baseDeleteRouteTableMetadata = { routeTableId: '' };
exports.DeleteRouteTableMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRouteTableMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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
            ...baseDeleteRouteTableMetadata,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteRouteTableMetadata,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
};
const baseListRouteTableOperationsRequest = {
    routeTableId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListRouteTableOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
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
            ...baseListRouteTableOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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
            ...baseListRouteTableOperationsRequest,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
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
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListRouteTableOperationsRequest,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
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
const baseListRouteTableOperationsResponse = { nextPageToken: '' };
exports.ListRouteTableOperationsResponse = {
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
            ...baseListRouteTableOperationsResponse,
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
            ...baseListRouteTableOperationsResponse,
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
            ...baseListRouteTableOperationsResponse,
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
const baseMoveRouteTableRequest = {
    routeTableId: '',
    destinationFolderId: '',
};
exports.MoveRouteTableRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMoveRouteTableRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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
        const message = {
            ...baseMoveRouteTableRequest,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
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
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMoveRouteTableRequest,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
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
const baseMoveRouteTableMetadata = { routeTableId: '' };
exports.MoveRouteTableMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routeTableId !== '') {
            writer.uint32(10).string(message.routeTableId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMoveRouteTableMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routeTableId = reader.string();
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
            ...baseMoveRouteTableMetadata,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMoveRouteTableMetadata,
        };
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        }
        else {
            message.routeTableId = '';
        }
        return message;
    },
};
/** A set of methods for managing RouteTable resources. */
exports.RouteTableServiceService = {
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetRouteTableRequest.decode(value),
        responseSerialize: (value) => Buffer.from(route_table_1.RouteTable.encode(value).finish()),
        responseDeserialize: (value) => route_table_1.RouteTable.decode(value),
    },
    /** Retrieves the list of RouteTable resources in the specified folder. */
    list: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRouteTablesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRouteTablesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRouteTablesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRouteTablesResponse.decode(value),
    },
    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateRouteTableRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateRouteTableRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified route table. */
    delete: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteRouteTableRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** List operations for the specified route table. */
    listOperations: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListRouteTableOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListRouteTableOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListRouteTableOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListRouteTableOperationsResponse.decode(value),
    },
    /** Move route table to another folder. */
    move: {
        path: '/yandex.cloud.vpc.v1.RouteTableService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.MoveRouteTableRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.MoveRouteTableRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.RouteTableServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RouteTableServiceService, 'yandex.cloud.vpc.v1.RouteTableService');
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
