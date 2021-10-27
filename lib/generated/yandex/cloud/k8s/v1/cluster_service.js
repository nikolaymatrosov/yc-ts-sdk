"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterServiceClient = exports.ClusterServiceService = exports.MasterLocation = exports.ExternalAddressSpec = exports.InternalAddressSpec = exports.RegionalMasterSpec = exports.ZonalMasterSpec = exports.MasterSpec = exports.ListClusterNodesResponse = exports.ListClusterNodesRequest = exports.ListClusterNodeGroupsResponse = exports.ListClusterNodeGroupsRequest = exports.ListClusterOperationsResponse = exports.ListClusterOperationsRequest = exports.AutoUpgradeMasterMetadata = exports.CreateClusterMetadata = exports.CreateClusterRequest_LabelsEntry = exports.CreateClusterRequest = exports.UpdateClusterMetadata = exports.MasterUpdateSpec = exports.UpdateClusterRequest_LabelsEntry = exports.UpdateClusterRequest = exports.StartClusterMetadata = exports.StartClusterRequest = exports.StopClusterMetadata = exports.StopClusterRequest = exports.DeleteClusterMetadata = exports.DeleteClusterRequest = exports.ListClustersResponse = exports.ListClustersRequest = exports.GetClusterRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../typeRegistry");
const cluster_1 = require("../../../../yandex/cloud/k8s/v1/cluster");
const node_1 = require("../../../../yandex/cloud/k8s/v1/node");
const node_group_1 = require("../../../../yandex/cloud/k8s/v1/node_group");
const version_1 = require("../../../../yandex/cloud/k8s/v1/version");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.k8s.v1';
const baseGetClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.GetClusterRequest',
    clusterId: '',
};
exports.GetClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.GetClusterRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetClusterRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetClusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetClusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetClusterRequest.$type, exports.GetClusterRequest);
const baseListClustersRequest = {
    $type: 'yandex.cloud.k8s.v1.ListClustersRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListClustersRequest = {
    $type: 'yandex.cloud.k8s.v1.ListClustersRequest',
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
        const message = { ...baseListClustersRequest };
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
        const message = { ...baseListClustersRequest };
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
        const message = { ...baseListClustersRequest };
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
typeRegistry_1.messageTypeRegistry.set(exports.ListClustersRequest.$type, exports.ListClustersRequest);
const baseListClustersResponse = {
    $type: 'yandex.cloud.k8s.v1.ListClustersResponse',
    nextPageToken: '',
};
exports.ListClustersResponse = {
    $type: 'yandex.cloud.k8s.v1.ListClustersResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.clusters) {
            cluster_1.Cluster.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListClustersResponse };
        message.clusters = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusters.push(cluster_1.Cluster.decode(reader, reader.uint32()));
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
        const message = { ...baseListClustersResponse };
        message.clusters = [];
        if (object.clusters !== undefined && object.clusters !== null) {
            for (const e of object.clusters) {
                message.clusters.push(cluster_1.Cluster.fromJSON(e));
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
        if (message.clusters) {
            obj.clusters = message.clusters.map((e) => e ? cluster_1.Cluster.toJSON(e) : undefined);
        }
        else {
            obj.clusters = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListClustersResponse };
        message.clusters = [];
        if (object.clusters !== undefined && object.clusters !== null) {
            for (const e of object.clusters) {
                message.clusters.push(cluster_1.Cluster.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListClustersResponse.$type, exports.ListClustersResponse);
const baseDeleteClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.DeleteClusterRequest',
    clusterId: '',
};
exports.DeleteClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.DeleteClusterRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteClusterRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteClusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteClusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterRequest.$type, exports.DeleteClusterRequest);
const baseDeleteClusterMetadata = {
    $type: 'yandex.cloud.k8s.v1.DeleteClusterMetadata',
    clusterId: '',
};
exports.DeleteClusterMetadata = {
    $type: 'yandex.cloud.k8s.v1.DeleteClusterMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteClusterMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
            ...baseDeleteClusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteClusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteClusterMetadata.$type, exports.DeleteClusterMetadata);
const baseStopClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.StopClusterRequest',
    clusterId: '',
};
exports.StopClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.StopClusterRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopClusterRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStopClusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStopClusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopClusterRequest.$type, exports.StopClusterRequest);
const baseStopClusterMetadata = {
    $type: 'yandex.cloud.k8s.v1.StopClusterMetadata',
    clusterId: '',
};
exports.StopClusterMetadata = {
    $type: 'yandex.cloud.k8s.v1.StopClusterMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStopClusterMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStopClusterMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStopClusterMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StopClusterMetadata.$type, exports.StopClusterMetadata);
const baseStartClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.StartClusterRequest',
    clusterId: '',
};
exports.StartClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.StartClusterRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartClusterRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStartClusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStartClusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartClusterRequest.$type, exports.StartClusterRequest);
const baseStartClusterMetadata = {
    $type: 'yandex.cloud.k8s.v1.StartClusterMetadata',
    clusterId: '',
};
exports.StartClusterMetadata = {
    $type: 'yandex.cloud.k8s.v1.StartClusterMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStartClusterMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStartClusterMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStartClusterMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StartClusterMetadata.$type, exports.StartClusterMetadata);
const baseUpdateClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.UpdateClusterRequest',
    clusterId: '',
    name: '',
    description: '',
    serviceAccountId: '',
    nodeServiceAccountId: '',
};
exports.UpdateClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.UpdateClusterRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
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
            exports.UpdateClusterRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.gatewayIpv4Address !== undefined) {
            writer.uint32(50).string(message.gatewayIpv4Address);
        }
        if (message.masterSpec !== undefined) {
            exports.MasterUpdateSpec.encode(message.masterSpec, writer.uint32(58).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(74).string(message.serviceAccountId);
        }
        if (message.nodeServiceAccountId !== '') {
            writer.uint32(66).string(message.nodeServiceAccountId);
        }
        if (message.networkPolicy !== undefined) {
            cluster_1.NetworkPolicy.encode(message.networkPolicy, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateClusterRequest };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
                    const entry5 = exports.UpdateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.gatewayIpv4Address = reader.string();
                    break;
                case 7:
                    message.masterSpec = exports.MasterUpdateSpec.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.serviceAccountId = reader.string();
                    break;
                case 8:
                    message.nodeServiceAccountId = reader.string();
                    break;
                case 10:
                    message.networkPolicy = cluster_1.NetworkPolicy.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateClusterRequest };
        message.labels = {};
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
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
        if (object.gatewayIpv4Address !== undefined &&
            object.gatewayIpv4Address !== null) {
            message.gatewayIpv4Address = String(object.gatewayIpv4Address);
        }
        else {
            message.gatewayIpv4Address = undefined;
        }
        if (object.masterSpec !== undefined && object.masterSpec !== null) {
            message.masterSpec = exports.MasterUpdateSpec.fromJSON(object.masterSpec);
        }
        else {
            message.masterSpec = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.nodeServiceAccountId !== undefined &&
            object.nodeServiceAccountId !== null) {
            message.nodeServiceAccountId = String(object.nodeServiceAccountId);
        }
        else {
            message.nodeServiceAccountId = '';
        }
        if (object.networkPolicy !== undefined &&
            object.networkPolicy !== null) {
            message.networkPolicy = cluster_1.NetworkPolicy.fromJSON(object.networkPolicy);
        }
        else {
            message.networkPolicy = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
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
        message.gatewayIpv4Address !== undefined &&
            (obj.gatewayIpv4Address = message.gatewayIpv4Address);
        message.masterSpec !== undefined &&
            (obj.masterSpec = message.masterSpec
                ? exports.MasterUpdateSpec.toJSON(message.masterSpec)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.nodeServiceAccountId !== undefined &&
            (obj.nodeServiceAccountId = message.nodeServiceAccountId);
        message.networkPolicy !== undefined &&
            (obj.networkPolicy = message.networkPolicy
                ? cluster_1.NetworkPolicy.toJSON(message.networkPolicy)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateClusterRequest };
        message.labels = {};
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
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
        if (object.gatewayIpv4Address !== undefined &&
            object.gatewayIpv4Address !== null) {
            message.gatewayIpv4Address = object.gatewayIpv4Address;
        }
        else {
            message.gatewayIpv4Address = undefined;
        }
        if (object.masterSpec !== undefined && object.masterSpec !== null) {
            message.masterSpec = exports.MasterUpdateSpec.fromPartial(object.masterSpec);
        }
        else {
            message.masterSpec = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.nodeServiceAccountId !== undefined &&
            object.nodeServiceAccountId !== null) {
            message.nodeServiceAccountId = object.nodeServiceAccountId;
        }
        else {
            message.nodeServiceAccountId = '';
        }
        if (object.networkPolicy !== undefined &&
            object.networkPolicy !== null) {
            message.networkPolicy = cluster_1.NetworkPolicy.fromPartial(object.networkPolicy);
        }
        else {
            message.networkPolicy = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterRequest.$type, exports.UpdateClusterRequest);
const baseUpdateClusterRequest_LabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateClusterRequest_LabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.UpdateClusterRequest.LabelsEntry',
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
            ...baseUpdateClusterRequest_LabelsEntry,
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
            ...baseUpdateClusterRequest_LabelsEntry,
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
            ...baseUpdateClusterRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterRequest_LabelsEntry.$type, exports.UpdateClusterRequest_LabelsEntry);
const baseMasterUpdateSpec = {
    $type: 'yandex.cloud.k8s.v1.MasterUpdateSpec',
    securityGroupIds: '',
};
exports.MasterUpdateSpec = {
    $type: 'yandex.cloud.k8s.v1.MasterUpdateSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== undefined) {
            version_1.UpdateVersionSpec.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.maintenancePolicy !== undefined) {
            cluster_1.MasterMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMasterUpdateSpec };
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = version_1.UpdateVersionSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maintenancePolicy = cluster_1.MasterMaintenancePolicy.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMasterUpdateSpec };
        message.securityGroupIds = [];
        if (object.version !== undefined && object.version !== null) {
            message.version = version_1.UpdateVersionSpec.fromJSON(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = cluster_1.MasterMaintenancePolicy.fromJSON(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined &&
            (obj.version = message.version
                ? version_1.UpdateVersionSpec.toJSON(message.version)
                : undefined);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? cluster_1.MasterMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMasterUpdateSpec };
        message.securityGroupIds = [];
        if (object.version !== undefined && object.version !== null) {
            message.version = version_1.UpdateVersionSpec.fromPartial(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = cluster_1.MasterMaintenancePolicy.fromPartial(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MasterUpdateSpec.$type, exports.MasterUpdateSpec);
const baseUpdateClusterMetadata = {
    $type: 'yandex.cloud.k8s.v1.UpdateClusterMetadata',
    clusterId: '',
};
exports.UpdateClusterMetadata = {
    $type: 'yandex.cloud.k8s.v1.UpdateClusterMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateClusterMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
            ...baseUpdateClusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateClusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateClusterMetadata.$type, exports.UpdateClusterMetadata);
const baseCreateClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.CreateClusterRequest',
    folderId: '',
    name: '',
    description: '',
    networkId: '',
    serviceAccountId: '',
    nodeServiceAccountId: '',
    releaseChannel: 0,
};
exports.CreateClusterRequest = {
    $type: 'yandex.cloud.k8s.v1.CreateClusterRequest',
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
            exports.CreateClusterRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.networkId !== '') {
            writer.uint32(42).string(message.networkId);
        }
        if (message.masterSpec !== undefined) {
            exports.MasterSpec.encode(message.masterSpec, writer.uint32(50).fork()).ldelim();
        }
        if (message.ipAllocationPolicy !== undefined) {
            cluster_1.IPAllocationPolicy.encode(message.ipAllocationPolicy, writer.uint32(58).fork()).ldelim();
        }
        if (message.gatewayIpv4Address !== undefined) {
            writer.uint32(66).string(message.gatewayIpv4Address);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(74).string(message.serviceAccountId);
        }
        if (message.nodeServiceAccountId !== '') {
            writer.uint32(82).string(message.nodeServiceAccountId);
        }
        if (message.releaseChannel !== 0) {
            writer.uint32(88).int32(message.releaseChannel);
        }
        if (message.networkPolicy !== undefined) {
            cluster_1.NetworkPolicy.encode(message.networkPolicy, writer.uint32(98).fork()).ldelim();
        }
        if (message.kmsProvider !== undefined) {
            cluster_1.KMSProvider.encode(message.kmsProvider, writer.uint32(106).fork()).ldelim();
        }
        if (message.cilium !== undefined) {
            cluster_1.Cilium.encode(message.cilium, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateClusterRequest };
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
                    const entry4 = exports.CreateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.networkId = reader.string();
                    break;
                case 6:
                    message.masterSpec = exports.MasterSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.ipAllocationPolicy = cluster_1.IPAllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.gatewayIpv4Address = reader.string();
                    break;
                case 9:
                    message.serviceAccountId = reader.string();
                    break;
                case 10:
                    message.nodeServiceAccountId = reader.string();
                    break;
                case 11:
                    message.releaseChannel = reader.int32();
                    break;
                case 12:
                    message.networkPolicy = cluster_1.NetworkPolicy.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.kmsProvider = cluster_1.KMSProvider.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.cilium = cluster_1.Cilium.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateClusterRequest };
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        }
        else {
            message.networkId = '';
        }
        if (object.masterSpec !== undefined && object.masterSpec !== null) {
            message.masterSpec = exports.MasterSpec.fromJSON(object.masterSpec);
        }
        else {
            message.masterSpec = undefined;
        }
        if (object.ipAllocationPolicy !== undefined &&
            object.ipAllocationPolicy !== null) {
            message.ipAllocationPolicy = cluster_1.IPAllocationPolicy.fromJSON(object.ipAllocationPolicy);
        }
        else {
            message.ipAllocationPolicy = undefined;
        }
        if (object.gatewayIpv4Address !== undefined &&
            object.gatewayIpv4Address !== null) {
            message.gatewayIpv4Address = String(object.gatewayIpv4Address);
        }
        else {
            message.gatewayIpv4Address = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.nodeServiceAccountId !== undefined &&
            object.nodeServiceAccountId !== null) {
            message.nodeServiceAccountId = String(object.nodeServiceAccountId);
        }
        else {
            message.nodeServiceAccountId = '';
        }
        if (object.releaseChannel !== undefined &&
            object.releaseChannel !== null) {
            message.releaseChannel = (0, cluster_1.releaseChannelFromJSON)(object.releaseChannel);
        }
        else {
            message.releaseChannel = 0;
        }
        if (object.networkPolicy !== undefined &&
            object.networkPolicy !== null) {
            message.networkPolicy = cluster_1.NetworkPolicy.fromJSON(object.networkPolicy);
        }
        else {
            message.networkPolicy = undefined;
        }
        if (object.kmsProvider !== undefined && object.kmsProvider !== null) {
            message.kmsProvider = cluster_1.KMSProvider.fromJSON(object.kmsProvider);
        }
        else {
            message.kmsProvider = undefined;
        }
        if (object.cilium !== undefined && object.cilium !== null) {
            message.cilium = cluster_1.Cilium.fromJSON(object.cilium);
        }
        else {
            message.cilium = undefined;
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
        message.masterSpec !== undefined &&
            (obj.masterSpec = message.masterSpec
                ? exports.MasterSpec.toJSON(message.masterSpec)
                : undefined);
        message.ipAllocationPolicy !== undefined &&
            (obj.ipAllocationPolicy = message.ipAllocationPolicy
                ? cluster_1.IPAllocationPolicy.toJSON(message.ipAllocationPolicy)
                : undefined);
        message.gatewayIpv4Address !== undefined &&
            (obj.gatewayIpv4Address = message.gatewayIpv4Address);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.nodeServiceAccountId !== undefined &&
            (obj.nodeServiceAccountId = message.nodeServiceAccountId);
        message.releaseChannel !== undefined &&
            (obj.releaseChannel = (0, cluster_1.releaseChannelToJSON)(message.releaseChannel));
        message.networkPolicy !== undefined &&
            (obj.networkPolicy = message.networkPolicy
                ? cluster_1.NetworkPolicy.toJSON(message.networkPolicy)
                : undefined);
        message.kmsProvider !== undefined &&
            (obj.kmsProvider = message.kmsProvider
                ? cluster_1.KMSProvider.toJSON(message.kmsProvider)
                : undefined);
        message.cilium !== undefined &&
            (obj.cilium = message.cilium
                ? cluster_1.Cilium.toJSON(message.cilium)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateClusterRequest };
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        }
        else {
            message.networkId = '';
        }
        if (object.masterSpec !== undefined && object.masterSpec !== null) {
            message.masterSpec = exports.MasterSpec.fromPartial(object.masterSpec);
        }
        else {
            message.masterSpec = undefined;
        }
        if (object.ipAllocationPolicy !== undefined &&
            object.ipAllocationPolicy !== null) {
            message.ipAllocationPolicy = cluster_1.IPAllocationPolicy.fromPartial(object.ipAllocationPolicy);
        }
        else {
            message.ipAllocationPolicy = undefined;
        }
        if (object.gatewayIpv4Address !== undefined &&
            object.gatewayIpv4Address !== null) {
            message.gatewayIpv4Address = object.gatewayIpv4Address;
        }
        else {
            message.gatewayIpv4Address = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.nodeServiceAccountId !== undefined &&
            object.nodeServiceAccountId !== null) {
            message.nodeServiceAccountId = object.nodeServiceAccountId;
        }
        else {
            message.nodeServiceAccountId = '';
        }
        if (object.releaseChannel !== undefined &&
            object.releaseChannel !== null) {
            message.releaseChannel = object.releaseChannel;
        }
        else {
            message.releaseChannel = 0;
        }
        if (object.networkPolicy !== undefined &&
            object.networkPolicy !== null) {
            message.networkPolicy = cluster_1.NetworkPolicy.fromPartial(object.networkPolicy);
        }
        else {
            message.networkPolicy = undefined;
        }
        if (object.kmsProvider !== undefined && object.kmsProvider !== null) {
            message.kmsProvider = cluster_1.KMSProvider.fromPartial(object.kmsProvider);
        }
        else {
            message.kmsProvider = undefined;
        }
        if (object.cilium !== undefined && object.cilium !== null) {
            message.cilium = cluster_1.Cilium.fromPartial(object.cilium);
        }
        else {
            message.cilium = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterRequest.$type, exports.CreateClusterRequest);
const baseCreateClusterRequest_LabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateClusterRequest_LabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.CreateClusterRequest.LabelsEntry',
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
            ...baseCreateClusterRequest_LabelsEntry,
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
            ...baseCreateClusterRequest_LabelsEntry,
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
            ...baseCreateClusterRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterRequest_LabelsEntry.$type, exports.CreateClusterRequest_LabelsEntry);
const baseCreateClusterMetadata = {
    $type: 'yandex.cloud.k8s.v1.CreateClusterMetadata',
    clusterId: '',
};
exports.CreateClusterMetadata = {
    $type: 'yandex.cloud.k8s.v1.CreateClusterMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateClusterMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
            ...baseCreateClusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateClusterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateClusterMetadata.$type, exports.CreateClusterMetadata);
const baseAutoUpgradeMasterMetadata = {
    $type: 'yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata',
    clusterId: '',
};
exports.AutoUpgradeMasterMetadata = {
    $type: 'yandex.cloud.k8s.v1.AutoUpgradeMasterMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAutoUpgradeMasterMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
            ...baseAutoUpgradeMasterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAutoUpgradeMasterMetadata,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AutoUpgradeMasterMetadata.$type, exports.AutoUpgradeMasterMetadata);
const baseListClusterOperationsRequest = {
    $type: 'yandex.cloud.k8s.v1.ListClusterOperationsRequest',
    clusterId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListClusterOperationsRequest = {
    $type: 'yandex.cloud.k8s.v1.ListClusterOperationsRequest',
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
            ...baseListClusterOperationsRequest,
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
            ...baseListClusterOperationsRequest,
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
            ...baseListClusterOperationsRequest,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterOperationsRequest.$type, exports.ListClusterOperationsRequest);
const baseListClusterOperationsResponse = {
    $type: 'yandex.cloud.k8s.v1.ListClusterOperationsResponse',
    nextPageToken: '',
};
exports.ListClusterOperationsResponse = {
    $type: 'yandex.cloud.k8s.v1.ListClusterOperationsResponse',
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
            ...baseListClusterOperationsResponse,
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
            ...baseListClusterOperationsResponse,
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
            ...baseListClusterOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterOperationsResponse.$type, exports.ListClusterOperationsResponse);
const baseListClusterNodeGroupsRequest = {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest',
    clusterId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListClusterNodeGroupsRequest = {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodeGroupsRequest',
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
            ...baseListClusterNodeGroupsRequest,
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
            ...baseListClusterNodeGroupsRequest,
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
            ...baseListClusterNodeGroupsRequest,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterNodeGroupsRequest.$type, exports.ListClusterNodeGroupsRequest);
const baseListClusterNodeGroupsResponse = {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse',
    nextPageToken: '',
};
exports.ListClusterNodeGroupsResponse = {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodeGroupsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.nodeGroups) {
            node_group_1.NodeGroup.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListClusterNodeGroupsResponse,
        };
        message.nodeGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroups.push(node_group_1.NodeGroup.decode(reader, reader.uint32()));
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
            ...baseListClusterNodeGroupsResponse,
        };
        message.nodeGroups = [];
        if (object.nodeGroups !== undefined && object.nodeGroups !== null) {
            for (const e of object.nodeGroups) {
                message.nodeGroups.push(node_group_1.NodeGroup.fromJSON(e));
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
        if (message.nodeGroups) {
            obj.nodeGroups = message.nodeGroups.map((e) => e ? node_group_1.NodeGroup.toJSON(e) : undefined);
        }
        else {
            obj.nodeGroups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListClusterNodeGroupsResponse,
        };
        message.nodeGroups = [];
        if (object.nodeGroups !== undefined && object.nodeGroups !== null) {
            for (const e of object.nodeGroups) {
                message.nodeGroups.push(node_group_1.NodeGroup.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterNodeGroupsResponse.$type, exports.ListClusterNodeGroupsResponse);
const baseListClusterNodesRequest = {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodesRequest',
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListClusterNodesRequest = {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodesRequest',
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListClusterNodesRequest,
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseListClusterNodesRequest,
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListClusterNodesRequest,
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterNodesRequest.$type, exports.ListClusterNodesRequest);
const baseListClusterNodesResponse = {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodesResponse',
    nextPageToken: '',
};
exports.ListClusterNodesResponse = {
    $type: 'yandex.cloud.k8s.v1.ListClusterNodesResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.nodes) {
            node_1.Node.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListClusterNodesResponse,
        };
        message.nodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodes.push(node_1.Node.decode(reader, reader.uint32()));
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
            ...baseListClusterNodesResponse,
        };
        message.nodes = [];
        if (object.nodes !== undefined && object.nodes !== null) {
            for (const e of object.nodes) {
                message.nodes.push(node_1.Node.fromJSON(e));
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
        if (message.nodes) {
            obj.nodes = message.nodes.map((e) => e ? node_1.Node.toJSON(e) : undefined);
        }
        else {
            obj.nodes = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListClusterNodesResponse,
        };
        message.nodes = [];
        if (object.nodes !== undefined && object.nodes !== null) {
            for (const e of object.nodes) {
                message.nodes.push(node_1.Node.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListClusterNodesResponse.$type, exports.ListClusterNodesResponse);
const baseMasterSpec = {
    $type: 'yandex.cloud.k8s.v1.MasterSpec',
    version: '',
    securityGroupIds: '',
};
exports.MasterSpec = {
    $type: 'yandex.cloud.k8s.v1.MasterSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zonalMasterSpec !== undefined) {
            exports.ZonalMasterSpec.encode(message.zonalMasterSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.regionalMasterSpec !== undefined) {
            exports.RegionalMasterSpec.encode(message.regionalMasterSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== '') {
            writer.uint32(26).string(message.version);
        }
        if (message.maintenancePolicy !== undefined) {
            cluster_1.MasterMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMasterSpec };
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zonalMasterSpec = exports.ZonalMasterSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.regionalMasterSpec = exports.RegionalMasterSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.maintenancePolicy = cluster_1.MasterMaintenancePolicy.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMasterSpec };
        message.securityGroupIds = [];
        if (object.zonalMasterSpec !== undefined &&
            object.zonalMasterSpec !== null) {
            message.zonalMasterSpec = exports.ZonalMasterSpec.fromJSON(object.zonalMasterSpec);
        }
        else {
            message.zonalMasterSpec = undefined;
        }
        if (object.regionalMasterSpec !== undefined &&
            object.regionalMasterSpec !== null) {
            message.regionalMasterSpec = exports.RegionalMasterSpec.fromJSON(object.regionalMasterSpec);
        }
        else {
            message.regionalMasterSpec = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = cluster_1.MasterMaintenancePolicy.fromJSON(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zonalMasterSpec !== undefined &&
            (obj.zonalMasterSpec = message.zonalMasterSpec
                ? exports.ZonalMasterSpec.toJSON(message.zonalMasterSpec)
                : undefined);
        message.regionalMasterSpec !== undefined &&
            (obj.regionalMasterSpec = message.regionalMasterSpec
                ? exports.RegionalMasterSpec.toJSON(message.regionalMasterSpec)
                : undefined);
        message.version !== undefined && (obj.version = message.version);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? cluster_1.MasterMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMasterSpec };
        message.securityGroupIds = [];
        if (object.zonalMasterSpec !== undefined &&
            object.zonalMasterSpec !== null) {
            message.zonalMasterSpec = exports.ZonalMasterSpec.fromPartial(object.zonalMasterSpec);
        }
        else {
            message.zonalMasterSpec = undefined;
        }
        if (object.regionalMasterSpec !== undefined &&
            object.regionalMasterSpec !== null) {
            message.regionalMasterSpec = exports.RegionalMasterSpec.fromPartial(object.regionalMasterSpec);
        }
        else {
            message.regionalMasterSpec = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = cluster_1.MasterMaintenancePolicy.fromPartial(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = undefined;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MasterSpec.$type, exports.MasterSpec);
const baseZonalMasterSpec = {
    $type: 'yandex.cloud.k8s.v1.ZonalMasterSpec',
    zoneId: '',
};
exports.ZonalMasterSpec = {
    $type: 'yandex.cloud.k8s.v1.ZonalMasterSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.internalV4AddressSpec !== undefined) {
            exports.InternalAddressSpec.encode(message.internalV4AddressSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalV4AddressSpec !== undefined) {
            exports.ExternalAddressSpec.encode(message.externalV4AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseZonalMasterSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.internalV4AddressSpec = exports.InternalAddressSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.externalV4AddressSpec = exports.ExternalAddressSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseZonalMasterSpec };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.internalV4AddressSpec !== undefined &&
            object.internalV4AddressSpec !== null) {
            message.internalV4AddressSpec = exports.InternalAddressSpec.fromJSON(object.internalV4AddressSpec);
        }
        else {
            message.internalV4AddressSpec = undefined;
        }
        if (object.externalV4AddressSpec !== undefined &&
            object.externalV4AddressSpec !== null) {
            message.externalV4AddressSpec = exports.ExternalAddressSpec.fromJSON(object.externalV4AddressSpec);
        }
        else {
            message.externalV4AddressSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.internalV4AddressSpec !== undefined &&
            (obj.internalV4AddressSpec = message.internalV4AddressSpec
                ? exports.InternalAddressSpec.toJSON(message.internalV4AddressSpec)
                : undefined);
        message.externalV4AddressSpec !== undefined &&
            (obj.externalV4AddressSpec = message.externalV4AddressSpec
                ? exports.ExternalAddressSpec.toJSON(message.externalV4AddressSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseZonalMasterSpec };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.internalV4AddressSpec !== undefined &&
            object.internalV4AddressSpec !== null) {
            message.internalV4AddressSpec = exports.InternalAddressSpec.fromPartial(object.internalV4AddressSpec);
        }
        else {
            message.internalV4AddressSpec = undefined;
        }
        if (object.externalV4AddressSpec !== undefined &&
            object.externalV4AddressSpec !== null) {
            message.externalV4AddressSpec = exports.ExternalAddressSpec.fromPartial(object.externalV4AddressSpec);
        }
        else {
            message.externalV4AddressSpec = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ZonalMasterSpec.$type, exports.ZonalMasterSpec);
const baseRegionalMasterSpec = {
    $type: 'yandex.cloud.k8s.v1.RegionalMasterSpec',
    regionId: '',
};
exports.RegionalMasterSpec = {
    $type: 'yandex.cloud.k8s.v1.RegionalMasterSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.regionId !== '') {
            writer.uint32(10).string(message.regionId);
        }
        for (const v of message.locations) {
            exports.MasterLocation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.externalV4AddressSpec !== undefined) {
            exports.ExternalAddressSpec.encode(message.externalV4AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegionalMasterSpec };
        message.locations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.regionId = reader.string();
                    break;
                case 2:
                    message.locations.push(exports.MasterLocation.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.externalV4AddressSpec = exports.ExternalAddressSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRegionalMasterSpec };
        message.locations = [];
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = String(object.regionId);
        }
        else {
            message.regionId = '';
        }
        if (object.locations !== undefined && object.locations !== null) {
            for (const e of object.locations) {
                message.locations.push(exports.MasterLocation.fromJSON(e));
            }
        }
        if (object.externalV4AddressSpec !== undefined &&
            object.externalV4AddressSpec !== null) {
            message.externalV4AddressSpec = exports.ExternalAddressSpec.fromJSON(object.externalV4AddressSpec);
        }
        else {
            message.externalV4AddressSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.regionId !== undefined && (obj.regionId = message.regionId);
        if (message.locations) {
            obj.locations = message.locations.map((e) => e ? exports.MasterLocation.toJSON(e) : undefined);
        }
        else {
            obj.locations = [];
        }
        message.externalV4AddressSpec !== undefined &&
            (obj.externalV4AddressSpec = message.externalV4AddressSpec
                ? exports.ExternalAddressSpec.toJSON(message.externalV4AddressSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRegionalMasterSpec };
        message.locations = [];
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = object.regionId;
        }
        else {
            message.regionId = '';
        }
        if (object.locations !== undefined && object.locations !== null) {
            for (const e of object.locations) {
                message.locations.push(exports.MasterLocation.fromPartial(e));
            }
        }
        if (object.externalV4AddressSpec !== undefined &&
            object.externalV4AddressSpec !== null) {
            message.externalV4AddressSpec = exports.ExternalAddressSpec.fromPartial(object.externalV4AddressSpec);
        }
        else {
            message.externalV4AddressSpec = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RegionalMasterSpec.$type, exports.RegionalMasterSpec);
const baseInternalAddressSpec = {
    $type: 'yandex.cloud.k8s.v1.InternalAddressSpec',
    subnetId: '',
};
exports.InternalAddressSpec = {
    $type: 'yandex.cloud.k8s.v1.InternalAddressSpec',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInternalAddressSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
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
        const message = { ...baseInternalAddressSpec };
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
        const message = { ...baseInternalAddressSpec };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.InternalAddressSpec.$type, exports.InternalAddressSpec);
const baseExternalAddressSpec = {
    $type: 'yandex.cloud.k8s.v1.ExternalAddressSpec',
};
exports.ExternalAddressSpec = {
    $type: 'yandex.cloud.k8s.v1.ExternalAddressSpec',
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalAddressSpec };
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
        const message = { ...baseExternalAddressSpec };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseExternalAddressSpec };
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalAddressSpec.$type, exports.ExternalAddressSpec);
const baseMasterLocation = {
    $type: 'yandex.cloud.k8s.v1.MasterLocation',
    zoneId: '',
};
exports.MasterLocation = {
    $type: 'yandex.cloud.k8s.v1.MasterLocation',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.internalV4AddressSpec !== undefined) {
            exports.InternalAddressSpec.encode(message.internalV4AddressSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMasterLocation };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.internalV4AddressSpec = exports.InternalAddressSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMasterLocation };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.internalV4AddressSpec !== undefined &&
            object.internalV4AddressSpec !== null) {
            message.internalV4AddressSpec = exports.InternalAddressSpec.fromJSON(object.internalV4AddressSpec);
        }
        else {
            message.internalV4AddressSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.internalV4AddressSpec !== undefined &&
            (obj.internalV4AddressSpec = message.internalV4AddressSpec
                ? exports.InternalAddressSpec.toJSON(message.internalV4AddressSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMasterLocation };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.internalV4AddressSpec !== undefined &&
            object.internalV4AddressSpec !== null) {
            message.internalV4AddressSpec = exports.InternalAddressSpec.fromPartial(object.internalV4AddressSpec);
        }
        else {
            message.internalV4AddressSpec = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MasterLocation.$type, exports.MasterLocation);
/** A set of methods for managing Kubernetes cluster. */
exports.ClusterServiceService = {
    /**
     * Returns the specified Kubernetes cluster.
     *
     * To get the list of available Kubernetes cluster, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.k8s.v1.ClusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
    /** Retrieves the list of Kubernetes cluster in the specified folder. */
    list: {
        path: '/yandex.cloud.k8s.v1.ClusterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClustersResponse.decode(value),
    },
    /** Creates a Kubernetes cluster in the specified folder. */
    create: {
        path: '/yandex.cloud.k8s.v1.ClusterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified Kubernetes cluster. */
    update: {
        path: '/yandex.cloud.k8s.v1.ClusterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified Kubernetes cluster. */
    delete: {
        path: '/yandex.cloud.k8s.v1.ClusterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified Kubernetes cluster. */
    stop: {
        path: '/yandex.cloud.k8s.v1.ClusterService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified Kubernetes cluster. */
    start: {
        path: '/yandex.cloud.k8s.v1.ClusterService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists nodegroup for the specified Kubernetes cluster. */
    listNodeGroups: {
        path: '/yandex.cloud.k8s.v1.ClusterService/ListNodeGroups',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterNodeGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterNodeGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterNodeGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterNodeGroupsResponse.decode(value),
    },
    /** Lists operations for the specified Kubernetes cluster. */
    listOperations: {
        path: '/yandex.cloud.k8s.v1.ClusterService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterOperationsResponse.decode(value),
    },
    /** Lists cluster's nodes. */
    listNodes: {
        path: '/yandex.cloud.k8s.v1.ClusterService/ListNodes',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterNodesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterNodesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterNodesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterNodesResponse.decode(value),
    },
};
exports.ClusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ClusterServiceService, 'yandex.cloud.k8s.v1.ClusterService');
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
