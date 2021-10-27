"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterServiceClient = exports.ClusterServiceService = exports.SegmentSubclusterConfigSpec = exports.MasterSubclusterConfigSpec = exports.ListClusterHostsResponse = exports.ListClusterHostsRequest = exports.ListClusterOperationsResponse = exports.ListClusterOperationsRequest = exports.StopClusterMetadata = exports.StopClusterRequest = exports.StartClusterMetadata = exports.StartClusterRequest = exports.DeleteClusterMetadata = exports.DeleteClusterRequest = exports.UpdateClusterMetadata = exports.UpdateClusterRequest_LabelsEntry = exports.UpdateClusterRequest = exports.CreateClusterMetadata = exports.CreateClusterRequest_LabelsEntry = exports.CreateClusterRequest = exports.ListClustersResponse = exports.ListClustersRequest = exports.GetClusterRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const cluster_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/cluster");
const config_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/config");
const host_1 = require("../../../../../yandex/cloud/mdb/greenplum/v1/host");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.greenplum.v1';
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
const baseCreateClusterRequest = {
    folderId: '',
    name: '',
    description: '',
    environment: 0,
    masterHostCount: 0,
    segmentInHost: 0,
    segmentHostCount: 0,
    userName: '',
    userPassword: '',
    networkId: '',
    securityGroupIds: '',
    deletionProtection: false,
    hostGroupIds: '',
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
        if (message.environment !== 0) {
            writer.uint32(40).int32(message.environment);
        }
        if (message.config !== undefined) {
            cluster_1.GreenplumConfig.encode(message.config, writer.uint32(50).fork()).ldelim();
        }
        if (message.masterConfig !== undefined) {
            exports.MasterSubclusterConfigSpec.encode(message.masterConfig, writer.uint32(58).fork()).ldelim();
        }
        if (message.segmentConfig !== undefined) {
            exports.SegmentSubclusterConfigSpec.encode(message.segmentConfig, writer.uint32(66).fork()).ldelim();
        }
        if (message.masterHostCount !== 0) {
            writer.uint32(72).int64(message.masterHostCount);
        }
        if (message.segmentInHost !== 0) {
            writer.uint32(80).int64(message.segmentInHost);
        }
        if (message.segmentHostCount !== 0) {
            writer.uint32(88).int64(message.segmentHostCount);
        }
        if (message.userName !== '') {
            writer.uint32(98).string(message.userName);
        }
        if (message.userPassword !== '') {
            writer.uint32(106).string(message.userPassword);
        }
        if (message.networkId !== '') {
            writer.uint32(114).string(message.networkId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(122).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(128).bool(message.deletionProtection);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(138).string(v);
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
                case 5:
                    message.environment = reader.int32();
                    break;
                case 6:
                    message.config = cluster_1.GreenplumConfig.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.masterConfig = exports.MasterSubclusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.segmentConfig = exports.SegmentSubclusterConfigSpec.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.masterHostCount = longToNumber(reader.int64());
                    break;
                case 10:
                    message.segmentInHost = longToNumber(reader.int64());
                    break;
                case 11:
                    message.segmentHostCount = longToNumber(reader.int64());
                    break;
                case 12:
                    message.userName = reader.string();
                    break;
                case 13:
                    message.userPassword = reader.string();
                    break;
                case 14:
                    message.networkId = reader.string();
                    break;
                case 15:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 16:
                    message.deletionProtection = reader.bool();
                    break;
                case 17:
                    message.hostGroupIds.push(reader.string());
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
        if (object.environment !== undefined && object.environment !== null) {
            message.environment = (0, cluster_1.cluster_EnvironmentFromJSON)(object.environment);
        }
        else {
            message.environment = 0;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = cluster_1.GreenplumConfig.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.masterConfig !== undefined && object.masterConfig !== null) {
            message.masterConfig = exports.MasterSubclusterConfigSpec.fromJSON(object.masterConfig);
        }
        else {
            message.masterConfig = undefined;
        }
        if (object.segmentConfig !== undefined &&
            object.segmentConfig !== null) {
            message.segmentConfig = exports.SegmentSubclusterConfigSpec.fromJSON(object.segmentConfig);
        }
        else {
            message.segmentConfig = undefined;
        }
        if (object.masterHostCount !== undefined &&
            object.masterHostCount !== null) {
            message.masterHostCount = Number(object.masterHostCount);
        }
        else {
            message.masterHostCount = 0;
        }
        if (object.segmentInHost !== undefined &&
            object.segmentInHost !== null) {
            message.segmentInHost = Number(object.segmentInHost);
        }
        else {
            message.segmentInHost = 0;
        }
        if (object.segmentHostCount !== undefined &&
            object.segmentHostCount !== null) {
            message.segmentHostCount = Number(object.segmentHostCount);
        }
        else {
            message.segmentHostCount = 0;
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        }
        else {
            message.userName = '';
        }
        if (object.userPassword !== undefined && object.userPassword !== null) {
            message.userPassword = String(object.userPassword);
        }
        else {
            message.userPassword = '';
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        }
        else {
            message.networkId = '';
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
        if (object.hostGroupIds !== undefined && object.hostGroupIds !== null) {
            for (const e of object.hostGroupIds) {
                message.hostGroupIds.push(String(e));
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
        message.environment !== undefined &&
            (obj.environment = (0, cluster_1.cluster_EnvironmentToJSON)(message.environment));
        message.config !== undefined &&
            (obj.config = message.config
                ? cluster_1.GreenplumConfig.toJSON(message.config)
                : undefined);
        message.masterConfig !== undefined &&
            (obj.masterConfig = message.masterConfig
                ? exports.MasterSubclusterConfigSpec.toJSON(message.masterConfig)
                : undefined);
        message.segmentConfig !== undefined &&
            (obj.segmentConfig = message.segmentConfig
                ? exports.SegmentSubclusterConfigSpec.toJSON(message.segmentConfig)
                : undefined);
        message.masterHostCount !== undefined &&
            (obj.masterHostCount = message.masterHostCount);
        message.segmentInHost !== undefined &&
            (obj.segmentInHost = message.segmentInHost);
        message.segmentHostCount !== undefined &&
            (obj.segmentHostCount = message.segmentHostCount);
        message.userName !== undefined && (obj.userName = message.userName);
        message.userPassword !== undefined &&
            (obj.userPassword = message.userPassword);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        if (message.hostGroupIds) {
            obj.hostGroupIds = message.hostGroupIds.map((e) => e);
        }
        else {
            obj.hostGroupIds = [];
        }
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
        if (object.environment !== undefined && object.environment !== null) {
            message.environment = object.environment;
        }
        else {
            message.environment = 0;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = cluster_1.GreenplumConfig.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.masterConfig !== undefined && object.masterConfig !== null) {
            message.masterConfig = exports.MasterSubclusterConfigSpec.fromPartial(object.masterConfig);
        }
        else {
            message.masterConfig = undefined;
        }
        if (object.segmentConfig !== undefined &&
            object.segmentConfig !== null) {
            message.segmentConfig = exports.SegmentSubclusterConfigSpec.fromPartial(object.segmentConfig);
        }
        else {
            message.segmentConfig = undefined;
        }
        if (object.masterHostCount !== undefined &&
            object.masterHostCount !== null) {
            message.masterHostCount = object.masterHostCount;
        }
        else {
            message.masterHostCount = 0;
        }
        if (object.segmentInHost !== undefined &&
            object.segmentInHost !== null) {
            message.segmentInHost = object.segmentInHost;
        }
        else {
            message.segmentInHost = 0;
        }
        if (object.segmentHostCount !== undefined &&
            object.segmentHostCount !== null) {
            message.segmentHostCount = object.segmentHostCount;
        }
        else {
            message.segmentHostCount = 0;
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        }
        else {
            message.userName = '';
        }
        if (object.userPassword !== undefined && object.userPassword !== null) {
            message.userPassword = object.userPassword;
        }
        else {
            message.userPassword = '';
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        }
        else {
            message.networkId = '';
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
        if (object.hostGroupIds !== undefined && object.hostGroupIds !== null) {
            for (const e of object.hostGroupIds) {
                message.hostGroupIds.push(e);
            }
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
    securityGroupIds: '',
    deletionProtection: false,
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
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.config !== undefined) {
            cluster_1.GreenplumConfig.encode(message.config, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(138).string(v);
        }
        if (message.deletionProtection === true) {
            writer.uint32(144).bool(message.deletionProtection);
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
                    message.name = reader.string();
                    break;
                case 6:
                    message.config = cluster_1.GreenplumConfig.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 18:
                    message.deletionProtection = reader.bool();
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
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = cluster_1.GreenplumConfig.fromJSON(object.config);
        }
        else {
            message.config = undefined;
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
        message.name !== undefined && (obj.name = message.name);
        message.config !== undefined &&
            (obj.config = message.config
                ? cluster_1.GreenplumConfig.toJSON(message.config)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        }
        else {
            obj.securityGroupIds = [];
        }
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
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
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = cluster_1.GreenplumConfig.fromPartial(object.config);
        }
        else {
            message.config = undefined;
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
const baseDeleteClusterRequest = { clusterId: '' };
exports.DeleteClusterRequest = {
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
const baseStopClusterRequest = { clusterId: '' };
exports.StopClusterRequest = {
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
        return message;
    },
};
const baseListClusterHostsResponse = { nextPageToken: '' };
exports.ListClusterHostsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.hosts) {
            host_1.Host.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.hosts.push(host_1.Host.decode(reader, reader.uint32()));
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
                message.hosts.push(host_1.Host.fromJSON(e));
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
            obj.hosts = message.hosts.map((e) => e ? host_1.Host.toJSON(e) : undefined);
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
                message.hosts.push(host_1.Host.fromPartial(e));
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
const baseMasterSubclusterConfigSpec = {};
exports.MasterSubclusterConfigSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            config_1.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.config !== undefined) {
            config_1.GreenplumMasterConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMasterSubclusterConfigSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = config_1.Resources.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.config = config_1.GreenplumMasterConfig.decode(reader, reader.uint32());
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
            ...baseMasterSubclusterConfigSpec,
        };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = config_1.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = config_1.GreenplumMasterConfig.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? config_1.Resources.toJSON(message.resources)
                : undefined);
        message.config !== undefined &&
            (obj.config = message.config
                ? config_1.GreenplumMasterConfig.toJSON(message.config)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMasterSubclusterConfigSpec,
        };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = config_1.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = config_1.GreenplumMasterConfig.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        return message;
    },
};
const baseSegmentSubclusterConfigSpec = {};
exports.SegmentSubclusterConfigSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            config_1.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.config !== undefined) {
            config_1.GreenplumSegmentConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSegmentSubclusterConfigSpec,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = config_1.Resources.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.config = config_1.GreenplumSegmentConfig.decode(reader, reader.uint32());
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
            ...baseSegmentSubclusterConfigSpec,
        };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = config_1.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = config_1.GreenplumSegmentConfig.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? config_1.Resources.toJSON(message.resources)
                : undefined);
        message.config !== undefined &&
            (obj.config = message.config
                ? config_1.GreenplumSegmentConfig.toJSON(message.config)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSegmentSubclusterConfigSpec,
        };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = config_1.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = config_1.GreenplumSegmentConfig.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        return message;
    },
};
/** A set of methods for managing Greenplum clusters. */
exports.ClusterServiceService = {
    /**
     * Returns the specified Greenplum cluster.
     *
     * To get the list of available Greenplum clusters, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.greenplum.v1.ClusterService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(cluster_1.Cluster.encode(value).finish()),
        responseDeserialize: (value) => cluster_1.Cluster.decode(value),
    },
    /**
     * Retrieves a list of Greenplum clusters that belong
     * to the specified folder.
     */
    list: {
        path: '/yandex.cloud.mdb.greenplum.v1.ClusterService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClustersRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClustersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClustersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClustersResponse.decode(value),
    },
    /** Creates a Greenplum cluster in the specified folder. */
    create: {
        path: '/yandex.cloud.mdb.greenplum.v1.ClusterService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified Greenplum cluster. */
    update: {
        path: '/yandex.cloud.mdb.greenplum.v1.ClusterService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified Greenplum cluster. */
    delete: {
        path: '/yandex.cloud.mdb.greenplum.v1.ClusterService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Starts the specified Greenplum cluster. */
    start: {
        path: '/yandex.cloud.mdb.greenplum.v1.ClusterService/Start',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StartClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StartClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Stops the specified Greenplum cluster. */
    stop: {
        path: '/yandex.cloud.mdb.greenplum.v1.ClusterService/Stop',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.StopClusterRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.StopClusterRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: {
        path: '/yandex.cloud.mdb.greenplum.v1.ClusterService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterOperationsResponse.decode(value),
    },
    /** Retrieves a list of master hosts for the specified cluster. */
    listMasterHosts: {
        path: '/yandex.cloud.mdb.greenplum.v1.ClusterService/ListMasterHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterHostsResponse.decode(value),
    },
    /** Retrieves a list of segment hosts for the specified cluster. */
    listSegmentHosts: {
        path: '/yandex.cloud.mdb.greenplum.v1.ClusterService/ListSegmentHosts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListClusterHostsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListClusterHostsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListClusterHostsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListClusterHostsResponse.decode(value),
    },
};
exports.ClusterServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ClusterServiceService, 'yandex.cloud.mdb.greenplum.v1.ClusterService');
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
