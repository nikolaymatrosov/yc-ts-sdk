"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterServiceClient = exports.ClusterServiceService = exports.ListUILinksResponse = exports.UILink = exports.ListUILinksRequest = exports.ListClusterHostsResponse = exports.ListClusterHostsRequest = exports.ListClusterOperationsResponse = exports.ListClusterOperationsRequest = exports.StopClusterMetadata = exports.StopClusterRequest = exports.StartClusterMetadata = exports.StartClusterRequest = exports.DeleteClusterMetadata = exports.DeleteClusterRequest = exports.UpdateClusterMetadata = exports.UpdateClusterRequest_LabelsEntry = exports.UpdateClusterRequest = exports.CreateClusterMetadata = exports.CreateClusterRequest_LabelsEntry = exports.CreateClusterRequest = exports.UpdateClusterConfigSpec = exports.CreateClusterConfigSpec = exports.UpdateSubclusterConfigSpec = exports.CreateSubclusterConfigSpec = exports.ListClustersResponse = exports.ListClustersRequest = exports.GetClusterRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const cluster_1 = require("../../../../yandex/cloud/dataproc/v1/cluster");
const common_1 = require("../../../../yandex/cloud/dataproc/v1/common");
const subcluster_1 = require("../../../../yandex/cloud/dataproc/v1/subcluster");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.dataproc.v1';
const baseGetClusterRequest = { clusterId: '' };
exports.GetClusterRequest = {
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
const baseListClustersRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListClustersRequest = {
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
const baseListClustersResponse = { nextPageToken: '' };
exports.ListClustersResponse = {
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
const baseCreateSubclusterConfigSpec = {
    name: '',
    role: 0,
    subnetId: '',
    hostsCount: 0,
};
exports.CreateSubclusterConfigSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.role !== 0) {
            writer.uint32(16).int32(message.role);
        }
        if (message.resources !== undefined) {
            common_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.subnetId !== '') {
            writer.uint32(34).string(message.subnetId);
        }
        if (message.hostsCount !== 0) {
            writer.uint32(40).int64(message.hostsCount);
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
            ...baseCreateSubclusterConfigSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.role = reader.int32();
                    break;
                case 3:
                    message.resources = common_1.Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subnetId = reader.string();
                    break;
                case 5:
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
            ...baseCreateSubclusterConfigSpec,
        };
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
            ...baseCreateSubclusterConfigSpec,
        };
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
const baseUpdateSubclusterConfigSpec = {
    id: '',
    name: '',
    hostsCount: 0,
};
exports.UpdateSubclusterConfigSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.resources !== undefined) {
            common_1.Resources.encode(message.resources, writer.uint32(26).fork()).ldelim();
        }
        if (message.hostsCount !== 0) {
            writer.uint32(32).int64(message.hostsCount);
        }
        if (message.autoscalingConfig !== undefined) {
            subcluster_1.AutoscalingConfig.encode(message.autoscalingConfig, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSubclusterConfigSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.resources = common_1.Resources.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hostsCount = longToNumber(reader.int64());
                    break;
                case 5:
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
            ...baseUpdateSubclusterConfigSpec,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = common_1.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
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
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? common_1.Resources.toJSON(message.resources)
                : undefined);
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
            ...baseUpdateSubclusterConfigSpec,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = common_1.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
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
const baseCreateClusterConfigSpec = { versionId: '' };
exports.CreateClusterConfigSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.versionId !== '') {
            writer.uint32(10).string(message.versionId);
        }
        if (message.hadoop !== undefined) {
            cluster_1.HadoopConfig.encode(message.hadoop, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.subclustersSpec) {
            exports.CreateSubclusterConfigSpec.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateClusterConfigSpec,
        };
        message.subclustersSpec = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versionId = reader.string();
                    break;
                case 2:
                    message.hadoop = cluster_1.HadoopConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.subclustersSpec.push(exports.CreateSubclusterConfigSpec.decode(reader, reader.uint32()));
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
            ...baseCreateClusterConfigSpec,
        };
        message.subclustersSpec = [];
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = cluster_1.HadoopConfig.fromJSON(object.hadoop);
        }
        else {
            message.hadoop = undefined;
        }
        if (object.subclustersSpec !== undefined &&
            object.subclustersSpec !== null) {
            for (const e of object.subclustersSpec) {
                message.subclustersSpec.push(exports.CreateSubclusterConfigSpec.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.hadoop !== undefined &&
            (obj.hadoop = message.hadoop
                ? cluster_1.HadoopConfig.toJSON(message.hadoop)
                : undefined);
        if (message.subclustersSpec) {
            obj.subclustersSpec = message.subclustersSpec.map((e) => e ? exports.CreateSubclusterConfigSpec.toJSON(e) : undefined);
        }
        else {
            obj.subclustersSpec = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateClusterConfigSpec,
        };
        message.subclustersSpec = [];
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = cluster_1.HadoopConfig.fromPartial(object.hadoop);
        }
        else {
            message.hadoop = undefined;
        }
        if (object.subclustersSpec !== undefined &&
            object.subclustersSpec !== null) {
            for (const e of object.subclustersSpec) {
                message.subclustersSpec.push(exports.CreateSubclusterConfigSpec.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateClusterConfigSpec = {};
exports.UpdateClusterConfigSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.subclustersSpec) {
            exports.UpdateSubclusterConfigSpec.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.hadoop !== undefined) {
            cluster_1.HadoopConfig.encode(message.hadoop, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateClusterConfigSpec,
        };
        message.subclustersSpec = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subclustersSpec.push(exports.UpdateSubclusterConfigSpec.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.hadoop = cluster_1.HadoopConfig.decode(reader, reader.uint32());
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
            ...baseUpdateClusterConfigSpec,
        };
        message.subclustersSpec = [];
        if (object.subclustersSpec !== undefined &&
            object.subclustersSpec !== null) {
            for (const e of object.subclustersSpec) {
                message.subclustersSpec.push(exports.UpdateSubclusterConfigSpec.fromJSON(e));
            }
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = cluster_1.HadoopConfig.fromJSON(object.hadoop);
        }
        else {
            message.hadoop = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.subclustersSpec) {
            obj.subclustersSpec = message.subclustersSpec.map((e) => e ? exports.UpdateSubclusterConfigSpec.toJSON(e) : undefined);
        }
        else {
            obj.subclustersSpec = [];
        }
        message.hadoop !== undefined &&
            (obj.hadoop = message.hadoop
                ? cluster_1.HadoopConfig.toJSON(message.hadoop)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateClusterConfigSpec,
        };
        message.subclustersSpec = [];
        if (object.subclustersSpec !== undefined &&
            object.subclustersSpec !== null) {
            for (const e of object.subclustersSpec) {
                message.subclustersSpec.push(exports.UpdateSubclusterConfigSpec.fromPartial(e));
            }
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = cluster_1.HadoopConfig.fromPartial(object.hadoop);
        }
        else {
            message.hadoop = undefined;
        }
        return message;
    },
};
const baseCreateClusterRequest = {
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    serviceAccountId: '',
    bucket: '',
    uiProxy: false,
    securityGroupIds: '',
    hostGroupIds: '',
    deletionProtection: false,
    logGroupId: '',
};
exports.CreateClusterRequest = {
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
            exports.CreateClusterRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.configSpec !== undefined) {
            exports.CreateClusterConfigSpec.encode(message.configSpec, writer.uint32(50).fork()).ldelim();
        }
        if (message.zoneId !== '') {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(66).string(message.serviceAccountId);
        }
        if (message.bucket !== '') {
            writer.uint32(74).string(message.bucket);
        }
        if (message.uiProxy === true) {
            writer.uint32(80).bool(message.uiProxy);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(98).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(104).bool(message.deletionProtection);
        }
        if (message.logGroupId !== '') {
            writer.uint32(114).string(message.logGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateClusterRequest };
        message.labels = {};
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
                case 6:
                    message.configSpec = exports.CreateClusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.serviceAccountId = reader.string();
                    break;
                case 9:
                    message.bucket = reader.string();
                    break;
                case 10:
                    message.uiProxy = reader.bool();
                    break;
                case 11:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 12:
                    message.hostGroupIds.push(reader.string());
                    break;
                case 13:
                    message.deletionProtection = reader.bool();
                    break;
                case 14:
                    message.logGroupId = reader.string();
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
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
        if (object.configSpec !== undefined && object.configSpec !== null) {
            message.configSpec = exports.CreateClusterConfigSpec.fromJSON(object.configSpec);
        }
        else {
            message.configSpec = undefined;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = String(object.bucket);
        }
        else {
            message.bucket = '';
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = Boolean(object.uiProxy);
        }
        else {
            message.uiProxy = false;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        if (object.hostGroupIds !== undefined && object.hostGroupIds !== null) {
            for (const e of object.hostGroupIds) {
                message.hostGroupIds.push(String(e));
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = Boolean(object.deletionProtection);
        }
        else {
            message.deletionProtection = false;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        }
        else {
            message.logGroupId = '';
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
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.CreateClusterConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.uiProxy !== undefined && (obj.uiProxy = message.uiProxy);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        if (message.hostGroupIds) {
            obj.hostGroupIds = message.hostGroupIds.map((e) => e);
        }
        else {
            obj.hostGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateClusterRequest };
        message.labels = {};
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
        if (object.configSpec !== undefined && object.configSpec !== null) {
            message.configSpec = exports.CreateClusterConfigSpec.fromPartial(object.configSpec);
        }
        else {
            message.configSpec = undefined;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = object.bucket;
        }
        else {
            message.bucket = '';
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = object.uiProxy;
        }
        else {
            message.uiProxy = false;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        if (object.hostGroupIds !== undefined && object.hostGroupIds !== null) {
            for (const e of object.hostGroupIds) {
                message.hostGroupIds.push(e);
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = object.deletionProtection;
        }
        else {
            message.deletionProtection = false;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        }
        else {
            message.logGroupId = '';
        }
        return message;
    },
};
const baseCreateClusterRequest_LabelsEntry = { key: '', value: '' };
exports.CreateClusterRequest_LabelsEntry = {
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
const baseCreateClusterMetadata = { clusterId: '' };
exports.CreateClusterMetadata = {
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
const baseUpdateClusterRequest = {
    clusterId: '',
    description: '',
    name: '',
    serviceAccountId: '',
    bucket: '',
    decommissionTimeout: 0,
    uiProxy: false,
    securityGroupIds: '',
    deletionProtection: false,
    logGroupId: '',
};
exports.UpdateClusterRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateClusterRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.configSpec !== undefined) {
            exports.UpdateClusterConfigSpec.encode(message.configSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(50).string(message.name);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(58).string(message.serviceAccountId);
        }
        if (message.bucket !== '') {
            writer.uint32(66).string(message.bucket);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(72).int64(message.decommissionTimeout);
        }
        if (message.uiProxy === true) {
            writer.uint32(80).bool(message.uiProxy);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(90).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(96).bool(message.deletionProtection);
        }
        if (message.logGroupId !== '') {
            writer.uint32(106).string(message.logGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateClusterRequest };
        message.labels = {};
        message.securityGroupIds = [];
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
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.UpdateClusterRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.configSpec = exports.UpdateClusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.serviceAccountId = reader.string();
                    break;
                case 8:
                    message.bucket = reader.string();
                    break;
                case 9:
                    message.decommissionTimeout = longToNumber(reader.int64());
                    break;
                case 10:
                    message.uiProxy = reader.bool();
                    break;
                case 11:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 12:
                    message.deletionProtection = reader.bool();
                    break;
                case 13:
                    message.logGroupId = reader.string();
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
        message.securityGroupIds = [];
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
        if (object.configSpec !== undefined && object.configSpec !== null) {
            message.configSpec = exports.UpdateClusterConfigSpec.fromJSON(object.configSpec);
        }
        else {
            message.configSpec = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = String(object.bucket);
        }
        else {
            message.bucket = '';
        }
        if (object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null) {
            message.decommissionTimeout = Number(object.decommissionTimeout);
        }
        else {
            message.decommissionTimeout = 0;
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = Boolean(object.uiProxy);
        }
        else {
            message.uiProxy = false;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = Boolean(object.deletionProtection);
        }
        else {
            message.deletionProtection = false;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        }
        else {
            message.logGroupId = '';
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
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.configSpec !== undefined &&
            (obj.configSpec = message.configSpec
                ? exports.UpdateClusterConfigSpec.toJSON(message.configSpec)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = message.decommissionTimeout);
        message.uiProxy !== undefined && (obj.uiProxy = message.uiProxy);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateClusterRequest };
        message.labels = {};
        message.securityGroupIds = [];
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
        if (object.configSpec !== undefined && object.configSpec !== null) {
            message.configSpec = exports.UpdateClusterConfigSpec.fromPartial(object.configSpec);
        }
        else {
            message.configSpec = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = object.bucket;
        }
        else {
            message.bucket = '';
        }
        if (object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null) {
            message.decommissionTimeout = object.decommissionTimeout;
        }
        else {
            message.decommissionTimeout = 0;
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = object.uiProxy;
        }
        else {
            message.uiProxy = false;
        }
        if (object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        if (object.deletionProtection !== undefined &&
            object.deletionProtection !== null) {
            message.deletionProtection = object.deletionProtection;
        }
        else {
            message.deletionProtection = false;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        }
        else {
            message.logGroupId = '';
        }
        return message;
    },
};
const baseUpdateClusterRequest_LabelsEntry = { key: '', value: '' };
exports.UpdateClusterRequest_LabelsEntry = {
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
const baseUpdateClusterMetadata = { clusterId: '' };
exports.UpdateClusterMetadata = {
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
const baseDeleteClusterRequest = {
    clusterId: '',
    decommissionTimeout: 0,
};
exports.DeleteClusterRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(16).int64(message.decommissionTimeout);
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
                case 2:
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
        const message = { ...baseDeleteClusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
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
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = message.decommissionTimeout);
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
const baseDeleteClusterMetadata = { clusterId: '' };
exports.DeleteClusterMetadata = {
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
const baseStartClusterRequest = { clusterId: '' };
exports.StartClusterRequest = {
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
const baseStartClusterMetadata = { clusterId: '' };
exports.StartClusterMetadata = {
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
const baseStopClusterRequest = {
    clusterId: '',
    decommissionTimeout: 0,
};
exports.StopClusterRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(16).int64(message.decommissionTimeout);
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
                case 2:
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
        const message = { ...baseStopClusterRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
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
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = message.decommissionTimeout);
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
const baseStopClusterMetadata = { clusterId: '' };
exports.StopClusterMetadata = {
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
const baseListClusterOperationsRequest = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListClusterOperationsRequest = {
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
        return message;
    },
};
const baseListClusterOperationsResponse = { nextPageToken: '' };
exports.ListClusterOperationsResponse = {
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
const baseListClusterHostsRequest = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListClusterHostsRequest = {
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
            ...baseListClusterHostsRequest,
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
            ...baseListClusterHostsRequest,
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
            ...baseListClusterHostsRequest,
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
const baseListClusterHostsResponse = { nextPageToken: '' };
exports.ListClusterHostsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hosts) {
            subcluster_1.Host.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListClusterHostsResponse,
        };
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hosts.push(subcluster_1.Host.decode(reader, reader.uint32()));
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
            ...baseListClusterHostsResponse,
        };
        message.hosts = [];
        if (object.hosts !== undefined && object.hosts !== null) {
            for (const e of object.hosts) {
                message.hosts.push(subcluster_1.Host.fromJSON(e));
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
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => e ? subcluster_1.Host.toJSON(e) : undefined);
        }
        else {
            obj.hosts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListClusterHostsResponse,
        };
        message.hosts = [];
        if (object.hosts !== undefined && object.hosts !== null) {
            for (const e of object.hosts) {
                message.hosts.push(subcluster_1.Host.fromPartial(e));
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
const baseListUILinksRequest = { clusterId: '' };
exports.ListUILinksRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUILinksRequest };
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
        const message = { ...baseListUILinksRequest };
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
        const message = { ...baseListUILinksRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
const baseUILink = { name: '', url: '' };
exports.UILink = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== '') {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUILink };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUILink };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUILink };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = '';
        }
        return message;
    },
};
const baseListUILinksResponse = {};
exports.ListUILinksResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.links) {
            exports.UILink.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListUILinksResponse };
        message.links = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.links.push(exports.UILink.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListUILinksResponse };
        message.links = [];
        if (object.links !== undefined && object.links !== null) {
            for (const e of object.links) {
                message.links.push(exports.UILink.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.links) {
            obj.links = message.links.map((e) => e ? exports.UILink.toJSON(e) : undefined);
        }
        else {
            obj.links = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListUILinksResponse };
        message.links = [];
        if (object.links !== undefined && object.links !== null) {
            for (const e of object.links) {
                message.links.push(exports.UILink.fromPartial(e));
            }
        }
        return message;
    },
};
/** A set of methods for managing Data Proc clusters. */
exports.ClusterServiceService = {
    /**
     * Returns the specified cluster.
     *
     * To get the list of all available clusters, make a [ClusterService.List] request.
     */
    get: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
    /** Retrieves the list of clusters in the specified folder. */
    list: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClustersResponse.decode(value),
    },
    /** Creates a cluster in the specified folder. */
    create: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the configuration of the specified cluster. */
    update: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified cluster. */
    delete: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified cluster. */
    start: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified cluster. */
    stop: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified cluster. */
    listOperations: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves the list of hosts in the specified cluster. */
    listHosts: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/ListHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterHostsResponse.decode(value),
    },
    /** Retrieves a list of links to web interfaces being proxied by Data Proc UI Proxy. */
    listUILinks: {
        path: '/yandex.cloud.dataproc.v1.ClusterService/ListUILinks',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListUILinksRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListUILinksRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListUILinksResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListUILinksResponse.decode(value),
    },
};
exports.ClusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ClusterServiceService, 'yandex.cloud.dataproc.v1.ClusterService');
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
