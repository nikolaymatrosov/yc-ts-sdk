"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubclusterServiceClient = exports.SubclusterServiceService = exports.DeleteSubclusterMetadata = exports.DeleteSubclusterRequest = exports.UpdateSubclusterMetadata = exports.UpdateSubclusterRequest = exports.CreateSubclusterMetadata = exports.CreateSubclusterRequest = exports.ListSubclustersResponse = exports.ListSubclustersRequest = exports.GetSubclusterRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const common_1 = require("../../../../yandex/cloud/dataproc/v1/common");
const subcluster_1 = require("../../../../yandex/cloud/dataproc/v1/subcluster");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.dataproc.v1';
const baseGetSubclusterRequest = { clusterId: '', subclusterId: '' };
exports.GetSubclusterRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.subclusterId !== '') {
            writer.uint32(18).string(message.subclusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSubclusterRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.subclusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetSubclusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = String(object.subclusterId);
        }
        else {
            message.subclusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.subclusterId !== undefined &&
            (obj.subclusterId = message.subclusterId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetSubclusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = object.subclusterId;
        }
        else {
            message.subclusterId = '';
        }
        return message;
    },
};
const baseListSubclustersRequest = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListSubclustersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
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
            ...baseListSubclustersRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
            ...baseListSubclustersRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
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
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSubclustersRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
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
const baseListSubclustersResponse = { nextPageToken: '' };
exports.ListSubclustersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.subclusters) {
            subcluster_1.Subcluster.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListSubclustersResponse,
        };
        message.subclusters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subclusters.push(subcluster_1.Subcluster.decode(reader, reader.uint32()));
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
            ...baseListSubclustersResponse,
        };
        message.subclusters = [];
        if (object.subclusters !== undefined && object.subclusters !== null) {
            for (const e of object.subclusters) {
                message.subclusters.push(subcluster_1.Subcluster.fromJSON(e));
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
        if (message.subclusters) {
            obj.subclusters = message.subclusters.map((e) => e ? subcluster_1.Subcluster.toJSON(e) : undefined);
        }
        else {
            obj.subclusters = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListSubclustersResponse,
        };
        message.subclusters = [];
        if (object.subclusters !== undefined && object.subclusters !== null) {
            for (const e of object.subclusters) {
                message.subclusters.push(subcluster_1.Subcluster.fromPartial(e));
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
const baseCreateSubclusterRequest = {
    clusterId: '',
    name: '',
    role: 0,
    subnetId: '',
    hostsCount: 0,
};
exports.CreateSubclusterRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.role !== 0) {
            writer.uint32(24).int32(message.role);
        }
        if (message.resources !== undefined) {
            common_1.Resources.encode(message.resources, writer.uint32(34).fork()).ldelim();
        }
        if (message.subnetId !== '') {
            writer.uint32(42).string(message.subnetId);
        }
        if (message.hostsCount !== 0) {
            writer.uint32(48).int64(message.hostsCount);
        }
        if (message.autoscalingConfig !== undefined) {
            subcluster_1.AutoscalingConfig.encode(message.autoscalingConfig, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSubclusterRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.role = reader.int32();
                    break;
                case 4:
                    message.resources = common_1.Resources.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.subnetId = reader.string();
                    break;
                case 6:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                case 7:
                    message.autoscalingConfig = subcluster_1.AutoscalingConfig.decode(reader, reader.uint32());
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
            ...baseCreateSubclusterRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = (0, subcluster_1.roleFromJSON)(object.role);
        }
        else {
            message.role = 0;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = common_1.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        if (object.hostsCount !== undefined && object.hostsCount !== null) {
            message.hostsCount = Number(object.hostsCount);
        }
        else {
            message.hostsCount = 0;
        }
        if (object.autoscalingConfig !== undefined &&
            object.autoscalingConfig !== null) {
            message.autoscalingConfig = subcluster_1.AutoscalingConfig.fromJSON(object.autoscalingConfig);
        }
        else {
            message.autoscalingConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        message.role !== undefined && (obj.role = (0, subcluster_1.roleToJSON)(message.role));
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? common_1.Resources.toJSON(message.resources)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.hostsCount !== undefined &&
            (obj.hostsCount = message.hostsCount);
        message.autoscalingConfig !== undefined &&
            (obj.autoscalingConfig = message.autoscalingConfig
                ? subcluster_1.AutoscalingConfig.toJSON(message.autoscalingConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateSubclusterRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = object.role;
        }
        else {
            message.role = 0;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = common_1.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        if (object.hostsCount !== undefined && object.hostsCount !== null) {
            message.hostsCount = object.hostsCount;
        }
        else {
            message.hostsCount = 0;
        }
        if (object.autoscalingConfig !== undefined &&
            object.autoscalingConfig !== null) {
            message.autoscalingConfig = subcluster_1.AutoscalingConfig.fromPartial(object.autoscalingConfig);
        }
        else {
            message.autoscalingConfig = undefined;
        }
        return message;
    },
};
const baseCreateSubclusterMetadata = {
    clusterId: '',
    subclusterId: '',
};
exports.CreateSubclusterMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.subclusterId !== '') {
            writer.uint32(18).string(message.subclusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSubclusterMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.subclusterId = reader.string();
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
            ...baseCreateSubclusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = String(object.subclusterId);
        }
        else {
            message.subclusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.subclusterId !== undefined &&
            (obj.subclusterId = message.subclusterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateSubclusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = object.subclusterId;
        }
        else {
            message.subclusterId = '';
        }
        return message;
    },
};
const baseUpdateSubclusterRequest = {
    clusterId: '',
    subclusterId: '',
    name: '',
    hostsCount: 0,
    decommissionTimeout: 0,
};
exports.UpdateSubclusterRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.subclusterId !== '') {
            writer.uint32(18).string(message.subclusterId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.resources !== undefined) {
            common_1.Resources.encode(message.resources, writer.uint32(34).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.hostsCount !== 0) {
            writer.uint32(48).int64(message.hostsCount);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(56).int64(message.decommissionTimeout);
        }
        if (message.autoscalingConfig !== undefined) {
            subcluster_1.AutoscalingConfig.encode(message.autoscalingConfig, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSubclusterRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.subclusterId = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.resources = common_1.Resources.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                case 7:
                    message.decommissionTimeout = longToNumber(reader.int64());
                    break;
                case 8:
                    message.autoscalingConfig = subcluster_1.AutoscalingConfig.decode(reader, reader.uint32());
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
            ...baseUpdateSubclusterRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = String(object.subclusterId);
        }
        else {
            message.subclusterId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = common_1.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.hostsCount !== undefined && object.hostsCount !== null) {
            message.hostsCount = Number(object.hostsCount);
        }
        else {
            message.hostsCount = 0;
        }
        if (object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null) {
            message.decommissionTimeout = Number(object.decommissionTimeout);
        }
        else {
            message.decommissionTimeout = 0;
        }
        if (object.autoscalingConfig !== undefined &&
            object.autoscalingConfig !== null) {
            message.autoscalingConfig = subcluster_1.AutoscalingConfig.fromJSON(object.autoscalingConfig);
        }
        else {
            message.autoscalingConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.subclusterId !== undefined &&
            (obj.subclusterId = message.subclusterId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? common_1.Resources.toJSON(message.resources)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.hostsCount !== undefined &&
            (obj.hostsCount = message.hostsCount);
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = message.decommissionTimeout);
        message.autoscalingConfig !== undefined &&
            (obj.autoscalingConfig = message.autoscalingConfig
                ? subcluster_1.AutoscalingConfig.toJSON(message.autoscalingConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateSubclusterRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = object.subclusterId;
        }
        else {
            message.subclusterId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = common_1.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.hostsCount !== undefined && object.hostsCount !== null) {
            message.hostsCount = object.hostsCount;
        }
        else {
            message.hostsCount = 0;
        }
        if (object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null) {
            message.decommissionTimeout = object.decommissionTimeout;
        }
        else {
            message.decommissionTimeout = 0;
        }
        if (object.autoscalingConfig !== undefined &&
            object.autoscalingConfig !== null) {
            message.autoscalingConfig = subcluster_1.AutoscalingConfig.fromPartial(object.autoscalingConfig);
        }
        else {
            message.autoscalingConfig = undefined;
        }
        return message;
    },
};
const baseUpdateSubclusterMetadata = {
    clusterId: '',
    subclusterId: '',
};
exports.UpdateSubclusterMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.subclusterId !== '') {
            writer.uint32(18).string(message.subclusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSubclusterMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.subclusterId = reader.string();
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
            ...baseUpdateSubclusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = String(object.subclusterId);
        }
        else {
            message.subclusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.subclusterId !== undefined &&
            (obj.subclusterId = message.subclusterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateSubclusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = object.subclusterId;
        }
        else {
            message.subclusterId = '';
        }
        return message;
    },
};
const baseDeleteSubclusterRequest = {
    clusterId: '',
    subclusterId: '',
    decommissionTimeout: 0,
};
exports.DeleteSubclusterRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.subclusterId !== '') {
            writer.uint32(18).string(message.subclusterId);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(24).int64(message.decommissionTimeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSubclusterRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.subclusterId = reader.string();
                    break;
                case 3:
                    message.decommissionTimeout = longToNumber(reader.int64());
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
            ...baseDeleteSubclusterRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = String(object.subclusterId);
        }
        else {
            message.subclusterId = '';
        }
        if (object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null) {
            message.decommissionTimeout = Number(object.decommissionTimeout);
        }
        else {
            message.decommissionTimeout = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.subclusterId !== undefined &&
            (obj.subclusterId = message.subclusterId);
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = message.decommissionTimeout);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteSubclusterRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = object.subclusterId;
        }
        else {
            message.subclusterId = '';
        }
        if (object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null) {
            message.decommissionTimeout = object.decommissionTimeout;
        }
        else {
            message.decommissionTimeout = 0;
        }
        return message;
    },
};
const baseDeleteSubclusterMetadata = {
    clusterId: '',
    subclusterId: '',
};
exports.DeleteSubclusterMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.subclusterId !== '') {
            writer.uint32(18).string(message.subclusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteSubclusterMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.subclusterId = reader.string();
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
            ...baseDeleteSubclusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = String(object.subclusterId);
        }
        else {
            message.subclusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.subclusterId !== undefined &&
            (obj.subclusterId = message.subclusterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteSubclusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = object.subclusterId;
        }
        else {
            message.subclusterId = '';
        }
        return message;
    },
};
/** A set of methods for managing Data Proc subclusters. */
exports.SubclusterServiceService = {
    /**
     * Returns the specified subcluster.
     *
     * To get the list of all available subclusters, make a [SubclusterService.List] request.
     */
    get: {
        path: '/yandex.cloud.dataproc.v1.SubclusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetSubclusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetSubclusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(subcluster_1.Subcluster.encode(value).finish()),
        responseDeserialize: (value) => subcluster_1.Subcluster.decode(value),
    },
    /** Retrieves a list of subclusters in the specified cluster. */
    list: {
        path: '/yandex.cloud.dataproc.v1.SubclusterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListSubclustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListSubclustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListSubclustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListSubclustersResponse.decode(value),
    },
    /** Creates a subcluster in the specified cluster. */
    create: {
        path: '/yandex.cloud.dataproc.v1.SubclusterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateSubclusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateSubclusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified subcluster. */
    update: {
        path: '/yandex.cloud.dataproc.v1.SubclusterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateSubclusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateSubclusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified subcluster. */
    delete: {
        path: '/yandex.cloud.dataproc.v1.SubclusterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteSubclusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteSubclusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.SubclusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SubclusterServiceService, 'yandex.cloud.dataproc.v1.SubclusterService');
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
