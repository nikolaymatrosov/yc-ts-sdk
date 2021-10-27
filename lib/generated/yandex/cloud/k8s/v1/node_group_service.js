"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeGroupServiceClient = exports.NodeGroupServiceService = exports.ListNodeGroupOperationsResponse = exports.ListNodeGroupOperationsRequest = exports.AutoUpgradeNodeGroupMetadata = exports.CreateNodeGroupMetadata = exports.CreateNodeGroupRequest_NodeLabelsEntry = exports.CreateNodeGroupRequest_LabelsEntry = exports.CreateNodeGroupRequest = exports.UpdateNodeGroupMetadata = exports.UpdateNodeGroupRequest_NodeLabelsEntry = exports.UpdateNodeGroupRequest_LabelsEntry = exports.UpdateNodeGroupRequest = exports.DeleteNodeGroupMetadata = exports.DeleteNodeGroupRequest = exports.ListNodeGroupNodesResponse = exports.ListNodeGroupNodesRequest = exports.ListNodeGroupsResponse = exports.ListNodeGroupsRequest = exports.GetNodeGroupRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../typeRegistry");
const node_1 = require("../../../../yandex/cloud/k8s/v1/node");
const node_group_1 = require("../../../../yandex/cloud/k8s/v1/node_group");
const version_1 = require("../../../../yandex/cloud/k8s/v1/version");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.k8s.v1';
const baseGetNodeGroupRequest = {
    $type: 'yandex.cloud.k8s.v1.GetNodeGroupRequest',
    nodeGroupId: '',
};
exports.GetNodeGroupRequest = {
    $type: 'yandex.cloud.k8s.v1.GetNodeGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetNodeGroupRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetNodeGroupRequest };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetNodeGroupRequest };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetNodeGroupRequest.$type, exports.GetNodeGroupRequest);
const baseListNodeGroupsRequest = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListNodeGroupsRequest = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupsRequest',
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
            ...baseListNodeGroupsRequest,
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
            ...baseListNodeGroupsRequest,
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
            ...baseListNodeGroupsRequest,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupsRequest.$type, exports.ListNodeGroupsRequest);
const baseListNodeGroupsResponse = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupsResponse',
    nextPageToken: '',
};
exports.ListNodeGroupsResponse = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupsResponse',
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
            ...baseListNodeGroupsResponse,
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
            ...baseListNodeGroupsResponse,
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
            ...baseListNodeGroupsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupsResponse.$type, exports.ListNodeGroupsResponse);
const baseListNodeGroupNodesRequest = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupNodesRequest',
    nodeGroupId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListNodeGroupNodesRequest = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupNodesRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
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
            ...baseListNodeGroupNodesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
            ...baseListNodeGroupNodesRequest,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        }
        else {
            message.nodeGroupId = '';
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
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListNodeGroupNodesRequest,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        }
        else {
            message.nodeGroupId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupNodesRequest.$type, exports.ListNodeGroupNodesRequest);
const baseListNodeGroupNodesResponse = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupNodesResponse',
    nextPageToken: '',
};
exports.ListNodeGroupNodesResponse = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupNodesResponse',
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
            ...baseListNodeGroupNodesResponse,
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
            ...baseListNodeGroupNodesResponse,
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
            ...baseListNodeGroupNodesResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupNodesResponse.$type, exports.ListNodeGroupNodesResponse);
const baseDeleteNodeGroupRequest = {
    $type: 'yandex.cloud.k8s.v1.DeleteNodeGroupRequest',
    nodeGroupId: '',
};
exports.DeleteNodeGroupRequest = {
    $type: 'yandex.cloud.k8s.v1.DeleteNodeGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteNodeGroupRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
            ...baseDeleteNodeGroupRequest,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteNodeGroupRequest,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteNodeGroupRequest.$type, exports.DeleteNodeGroupRequest);
const baseDeleteNodeGroupMetadata = {
    $type: 'yandex.cloud.k8s.v1.DeleteNodeGroupMetadata',
    nodeGroupId: '',
};
exports.DeleteNodeGroupMetadata = {
    $type: 'yandex.cloud.k8s.v1.DeleteNodeGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteNodeGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
            ...baseDeleteNodeGroupMetadata,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteNodeGroupMetadata,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteNodeGroupMetadata.$type, exports.DeleteNodeGroupMetadata);
const baseUpdateNodeGroupRequest = {
    $type: 'yandex.cloud.k8s.v1.UpdateNodeGroupRequest',
    nodeGroupId: '',
    name: '',
    description: '',
    allowedUnsafeSysctls: '',
};
exports.UpdateNodeGroupRequest = {
    $type: 'yandex.cloud.k8s.v1.UpdateNodeGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
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
            exports.UpdateNodeGroupRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.nodeTemplate !== undefined) {
            node_1.NodeTemplate.encode(message.nodeTemplate, writer.uint32(66).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            node_group_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            node_group_1.NodeGroupAllocationPolicy.encode(message.allocationPolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            node_group_1.DeployPolicy.encode(message.deployPolicy, writer.uint32(122).fork()).ldelim();
        }
        if (message.version !== undefined) {
            version_1.UpdateVersionSpec.encode(message.version, writer.uint32(82).fork()).ldelim();
        }
        if (message.maintenancePolicy !== undefined) {
            node_group_1.NodeGroupMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.allowedUnsafeSysctls) {
            writer.uint32(98).string(v);
        }
        for (const v of message.nodeTaints) {
            node_1.Taint.encode(v, writer.uint32(106).fork()).ldelim();
        }
        Object.entries(message.nodeLabels).forEach(([key, value]) => {
            exports.UpdateNodeGroupRequest_NodeLabelsEntry.encode({
                $type: 'yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry',
                key: key,
                value,
            }, writer.uint32(114).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateNodeGroupRequest,
        };
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
                    const entry5 = exports.UpdateNodeGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 8:
                    message.nodeTemplate = node_1.NodeTemplate.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.scalePolicy = node_group_1.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.allocationPolicy = node_group_1.NodeGroupAllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.deployPolicy = node_group_1.DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.version = version_1.UpdateVersionSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.maintenancePolicy =
                        node_group_1.NodeGroupMaintenancePolicy.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.allowedUnsafeSysctls.push(reader.string());
                    break;
                case 13:
                    message.nodeTaints.push(node_1.Taint.decode(reader, reader.uint32()));
                    break;
                case 14:
                    const entry14 = exports.UpdateNodeGroupRequest_NodeLabelsEntry.decode(reader, reader.uint32());
                    if (entry14.value !== undefined) {
                        message.nodeLabels[entry14.key] = entry14.value;
                    }
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
            ...baseUpdateNodeGroupRequest,
        };
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        }
        else {
            message.nodeGroupId = '';
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
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = node_1.NodeTemplate.fromJSON(object.nodeTemplate);
        }
        else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = node_group_1.ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = node_group_1.NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = node_group_1.DeployPolicy.fromJSON(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = version_1.UpdateVersionSpec.fromJSON(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = node_group_1.NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = undefined;
        }
        if (object.allowedUnsafeSysctls !== undefined &&
            object.allowedUnsafeSysctls !== null) {
            for (const e of object.allowedUnsafeSysctls) {
                message.allowedUnsafeSysctls.push(String(e));
            }
        }
        if (object.nodeTaints !== undefined && object.nodeTaints !== null) {
            for (const e of object.nodeTaints) {
                message.nodeTaints.push(node_1.Taint.fromJSON(e));
            }
        }
        if (object.nodeLabels !== undefined && object.nodeLabels !== null) {
            Object.entries(object.nodeLabels).forEach(([key, value]) => {
                message.nodeLabels[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
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
        message.nodeTemplate !== undefined &&
            (obj.nodeTemplate = message.nodeTemplate
                ? node_1.NodeTemplate.toJSON(message.nodeTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? node_group_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? node_group_1.NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? node_group_1.DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? version_1.UpdateVersionSpec.toJSON(message.version)
                : undefined);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? node_group_1.NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.allowedUnsafeSysctls) {
            obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls.map((e) => e);
        }
        else {
            obj.allowedUnsafeSysctls = [];
        }
        if (message.nodeTaints) {
            obj.nodeTaints = message.nodeTaints.map((e) => e ? node_1.Taint.toJSON(e) : undefined);
        }
        else {
            obj.nodeTaints = [];
        }
        obj.nodeLabels = {};
        if (message.nodeLabels) {
            Object.entries(message.nodeLabels).forEach(([k, v]) => {
                obj.nodeLabels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateNodeGroupRequest,
        };
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        }
        else {
            message.nodeGroupId = '';
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
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = node_1.NodeTemplate.fromPartial(object.nodeTemplate);
        }
        else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = node_group_1.ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = node_group_1.NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = node_group_1.DeployPolicy.fromPartial(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = version_1.UpdateVersionSpec.fromPartial(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = node_group_1.NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = undefined;
        }
        if (object.allowedUnsafeSysctls !== undefined &&
            object.allowedUnsafeSysctls !== null) {
            for (const e of object.allowedUnsafeSysctls) {
                message.allowedUnsafeSysctls.push(e);
            }
        }
        if (object.nodeTaints !== undefined && object.nodeTaints !== null) {
            for (const e of object.nodeTaints) {
                message.nodeTaints.push(node_1.Taint.fromPartial(e));
            }
        }
        if (object.nodeLabels !== undefined && object.nodeLabels !== null) {
            Object.entries(object.nodeLabels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.nodeLabels[key] = String(value);
                }
            });
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNodeGroupRequest.$type, exports.UpdateNodeGroupRequest);
const baseUpdateNodeGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateNodeGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.UpdateNodeGroupRequest.LabelsEntry',
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
            ...baseUpdateNodeGroupRequest_LabelsEntry,
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
            ...baseUpdateNodeGroupRequest_LabelsEntry,
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
            ...baseUpdateNodeGroupRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNodeGroupRequest_LabelsEntry.$type, exports.UpdateNodeGroupRequest_LabelsEntry);
const baseUpdateNodeGroupRequest_NodeLabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry',
    key: '',
    value: '',
};
exports.UpdateNodeGroupRequest_NodeLabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.UpdateNodeGroupRequest.NodeLabelsEntry',
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
            ...baseUpdateNodeGroupRequest_NodeLabelsEntry,
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
            ...baseUpdateNodeGroupRequest_NodeLabelsEntry,
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
            ...baseUpdateNodeGroupRequest_NodeLabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNodeGroupRequest_NodeLabelsEntry.$type, exports.UpdateNodeGroupRequest_NodeLabelsEntry);
const baseUpdateNodeGroupMetadata = {
    $type: 'yandex.cloud.k8s.v1.UpdateNodeGroupMetadata',
    nodeGroupId: '',
};
exports.UpdateNodeGroupMetadata = {
    $type: 'yandex.cloud.k8s.v1.UpdateNodeGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateNodeGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
            ...baseUpdateNodeGroupMetadata,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateNodeGroupMetadata,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateNodeGroupMetadata.$type, exports.UpdateNodeGroupMetadata);
const baseCreateNodeGroupRequest = {
    $type: 'yandex.cloud.k8s.v1.CreateNodeGroupRequest',
    clusterId: '',
    name: '',
    description: '',
    version: '',
    allowedUnsafeSysctls: '',
};
exports.CreateNodeGroupRequest = {
    $type: 'yandex.cloud.k8s.v1.CreateNodeGroupRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateNodeGroupRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.nodeTemplate !== undefined) {
            node_1.NodeTemplate.encode(message.nodeTemplate, writer.uint32(42).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            node_group_1.ScalePolicy.encode(message.scalePolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            node_group_1.NodeGroupAllocationPolicy.encode(message.allocationPolicy, writer.uint32(58).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            node_group_1.DeployPolicy.encode(message.deployPolicy, writer.uint32(106).fork()).ldelim();
        }
        if (message.version !== '') {
            writer.uint32(66).string(message.version);
        }
        if (message.maintenancePolicy !== undefined) {
            node_group_1.NodeGroupMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.allowedUnsafeSysctls) {
            writer.uint32(82).string(v);
        }
        for (const v of message.nodeTaints) {
            node_1.Taint.encode(v, writer.uint32(90).fork()).ldelim();
        }
        Object.entries(message.nodeLabels).forEach(([key, value]) => {
            exports.CreateNodeGroupRequest_NodeLabelsEntry.encode({
                $type: 'yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry',
                key: key,
                value,
            }, writer.uint32(98).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateNodeGroupRequest,
        };
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
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
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateNodeGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.nodeTemplate = node_1.NodeTemplate.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.scalePolicy = node_group_1.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.allocationPolicy = node_group_1.NodeGroupAllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.deployPolicy = node_group_1.DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.version = reader.string();
                    break;
                case 9:
                    message.maintenancePolicy =
                        node_group_1.NodeGroupMaintenancePolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.allowedUnsafeSysctls.push(reader.string());
                    break;
                case 11:
                    message.nodeTaints.push(node_1.Taint.decode(reader, reader.uint32()));
                    break;
                case 12:
                    const entry12 = exports.CreateNodeGroupRequest_NodeLabelsEntry.decode(reader, reader.uint32());
                    if (entry12.value !== undefined) {
                        message.nodeLabels[entry12.key] = entry12.value;
                    }
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
            ...baseCreateNodeGroupRequest,
        };
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
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
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = node_1.NodeTemplate.fromJSON(object.nodeTemplate);
        }
        else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = node_group_1.ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = node_group_1.NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = node_group_1.DeployPolicy.fromJSON(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = node_group_1.NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = undefined;
        }
        if (object.allowedUnsafeSysctls !== undefined &&
            object.allowedUnsafeSysctls !== null) {
            for (const e of object.allowedUnsafeSysctls) {
                message.allowedUnsafeSysctls.push(String(e));
            }
        }
        if (object.nodeTaints !== undefined && object.nodeTaints !== null) {
            for (const e of object.nodeTaints) {
                message.nodeTaints.push(node_1.Taint.fromJSON(e));
            }
        }
        if (object.nodeLabels !== undefined && object.nodeLabels !== null) {
            Object.entries(object.nodeLabels).forEach(([key, value]) => {
                message.nodeLabels[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.nodeTemplate !== undefined &&
            (obj.nodeTemplate = message.nodeTemplate
                ? node_1.NodeTemplate.toJSON(message.nodeTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? node_group_1.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? node_group_1.NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? node_group_1.DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.version !== undefined && (obj.version = message.version);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? node_group_1.NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.allowedUnsafeSysctls) {
            obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls.map((e) => e);
        }
        else {
            obj.allowedUnsafeSysctls = [];
        }
        if (message.nodeTaints) {
            obj.nodeTaints = message.nodeTaints.map((e) => e ? node_1.Taint.toJSON(e) : undefined);
        }
        else {
            obj.nodeTaints = [];
        }
        obj.nodeLabels = {};
        if (message.nodeLabels) {
            Object.entries(message.nodeLabels).forEach(([k, v]) => {
                obj.nodeLabels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateNodeGroupRequest,
        };
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
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
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = node_1.NodeTemplate.fromPartial(object.nodeTemplate);
        }
        else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = node_group_1.ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = node_group_1.NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = node_group_1.DeployPolicy.fromPartial(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = node_group_1.NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = undefined;
        }
        if (object.allowedUnsafeSysctls !== undefined &&
            object.allowedUnsafeSysctls !== null) {
            for (const e of object.allowedUnsafeSysctls) {
                message.allowedUnsafeSysctls.push(e);
            }
        }
        if (object.nodeTaints !== undefined && object.nodeTaints !== null) {
            for (const e of object.nodeTaints) {
                message.nodeTaints.push(node_1.Taint.fromPartial(e));
            }
        }
        if (object.nodeLabels !== undefined && object.nodeLabels !== null) {
            Object.entries(object.nodeLabels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.nodeLabels[key] = String(value);
                }
            });
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateNodeGroupRequest.$type, exports.CreateNodeGroupRequest);
const baseCreateNodeGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateNodeGroupRequest_LabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.CreateNodeGroupRequest.LabelsEntry',
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
            ...baseCreateNodeGroupRequest_LabelsEntry,
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
            ...baseCreateNodeGroupRequest_LabelsEntry,
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
            ...baseCreateNodeGroupRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateNodeGroupRequest_LabelsEntry.$type, exports.CreateNodeGroupRequest_LabelsEntry);
const baseCreateNodeGroupRequest_NodeLabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry',
    key: '',
    value: '',
};
exports.CreateNodeGroupRequest_NodeLabelsEntry = {
    $type: 'yandex.cloud.k8s.v1.CreateNodeGroupRequest.NodeLabelsEntry',
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
            ...baseCreateNodeGroupRequest_NodeLabelsEntry,
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
            ...baseCreateNodeGroupRequest_NodeLabelsEntry,
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
            ...baseCreateNodeGroupRequest_NodeLabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateNodeGroupRequest_NodeLabelsEntry.$type, exports.CreateNodeGroupRequest_NodeLabelsEntry);
const baseCreateNodeGroupMetadata = {
    $type: 'yandex.cloud.k8s.v1.CreateNodeGroupMetadata',
    nodeGroupId: '',
};
exports.CreateNodeGroupMetadata = {
    $type: 'yandex.cloud.k8s.v1.CreateNodeGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateNodeGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
            ...baseCreateNodeGroupMetadata,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateNodeGroupMetadata,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateNodeGroupMetadata.$type, exports.CreateNodeGroupMetadata);
const baseAutoUpgradeNodeGroupMetadata = {
    $type: 'yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata',
    nodeGroupId: '',
};
exports.AutoUpgradeNodeGroupMetadata = {
    $type: 'yandex.cloud.k8s.v1.AutoUpgradeNodeGroupMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAutoUpgradeNodeGroupMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
            ...baseAutoUpgradeNodeGroupMetadata,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAutoUpgradeNodeGroupMetadata,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        }
        else {
            message.nodeGroupId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AutoUpgradeNodeGroupMetadata.$type, exports.AutoUpgradeNodeGroupMetadata);
const baseListNodeGroupOperationsRequest = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest',
    nodeGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListNodeGroupOperationsRequest = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
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
            ...baseListNodeGroupOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroupId = reader.string();
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
            ...baseListNodeGroupOperationsRequest,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = String(object.nodeGroupId);
        }
        else {
            message.nodeGroupId = '';
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
        message.nodeGroupId !== undefined &&
            (obj.nodeGroupId = message.nodeGroupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListNodeGroupOperationsRequest,
        };
        if (object.nodeGroupId !== undefined && object.nodeGroupId !== null) {
            message.nodeGroupId = object.nodeGroupId;
        }
        else {
            message.nodeGroupId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupOperationsRequest.$type, exports.ListNodeGroupOperationsRequest);
const baseListNodeGroupOperationsResponse = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse',
    nextPageToken: '',
};
exports.ListNodeGroupOperationsResponse = {
    $type: 'yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse',
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
            ...baseListNodeGroupOperationsResponse,
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
            ...baseListNodeGroupOperationsResponse,
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
            ...baseListNodeGroupOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListNodeGroupOperationsResponse.$type, exports.ListNodeGroupOperationsResponse);
/** A set of methods for managing node groups. */
exports.NodeGroupServiceService = {
    /**
     * Returns the specified node group.
     *
     * To get the list of available node group, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(node_group_1.NodeGroup.encode(value).finish()),
        responseDeserialize: (value) => node_group_1.NodeGroup.decode(value),
    },
    /** Retrieves the list of node group in the specified Kubernetes cluster. */
    list: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListNodeGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListNodeGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListNodeGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListNodeGroupsResponse.decode(value),
    },
    /** Creates a node group in the specified Kubernetes cluster. */
    create: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified node group. */
    update: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified node group. */
    delete: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified node group. */
    listOperations: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListNodeGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListNodeGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListNodeGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListNodeGroupOperationsResponse.decode(value),
    },
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    listNodes: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/ListNodes',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListNodeGroupNodesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListNodeGroupNodesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListNodeGroupNodesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListNodeGroupNodesResponse.decode(value),
    },
};
exports.NodeGroupServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.NodeGroupServiceService, 'yandex.cloud.k8s.v1.NodeGroupService');
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
