/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Node, NodeTemplate, Taint, } from '../../../../yandex/cloud/k8s/v1/node';
import { NodeGroup, ScalePolicy, NodeGroupAllocationPolicy, DeployPolicy, NodeGroupMaintenancePolicy, } from '../../../../yandex/cloud/k8s/v1/node_group';
import { UpdateVersionSpec } from '../../../../yandex/cloud/k8s/v1/version';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.k8s.v1';
const baseGetNodeGroupRequest = { nodeGroupId: '' };
export const GetNodeGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListNodeGroupsRequest = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListNodeGroupsRequest = {
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
const baseListNodeGroupsResponse = { nextPageToken: '' };
export const ListNodeGroupsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.nodeGroups) {
            NodeGroup.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListNodeGroupsResponse,
        };
        message.nodeGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeGroups.push(NodeGroup.decode(reader, reader.uint32()));
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
                message.nodeGroups.push(NodeGroup.fromJSON(e));
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
            obj.nodeGroups = message.nodeGroups.map((e) => e ? NodeGroup.toJSON(e) : undefined);
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
                message.nodeGroups.push(NodeGroup.fromPartial(e));
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
const baseListNodeGroupNodesRequest = {
    nodeGroupId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListNodeGroupNodesRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListNodeGroupNodesResponse = { nextPageToken: '' };
export const ListNodeGroupNodesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.nodes) {
            Node.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListNodeGroupNodesResponse,
        };
        message.nodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodes.push(Node.decode(reader, reader.uint32()));
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
                message.nodes.push(Node.fromJSON(e));
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
            obj.nodes = message.nodes.map((e) => e ? Node.toJSON(e) : undefined);
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
                message.nodes.push(Node.fromPartial(e));
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
const baseDeleteNodeGroupRequest = { nodeGroupId: '' };
export const DeleteNodeGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseDeleteNodeGroupMetadata = { nodeGroupId: '' };
export const DeleteNodeGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseUpdateNodeGroupRequest = {
    nodeGroupId: '',
    name: '',
    description: '',
    allowedUnsafeSysctls: '',
};
export const UpdateNodeGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
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
            UpdateNodeGroupRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.nodeTemplate !== undefined) {
            NodeTemplate.encode(message.nodeTemplate, writer.uint32(66).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            NodeGroupAllocationPolicy.encode(message.allocationPolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            DeployPolicy.encode(message.deployPolicy, writer.uint32(122).fork()).ldelim();
        }
        if (message.version !== undefined) {
            UpdateVersionSpec.encode(message.version, writer.uint32(82).fork()).ldelim();
        }
        if (message.maintenancePolicy !== undefined) {
            NodeGroupMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.allowedUnsafeSysctls) {
            writer.uint32(98).string(v);
        }
        for (const v of message.nodeTaints) {
            Taint.encode(v, writer.uint32(106).fork()).ldelim();
        }
        Object.entries(message.nodeLabels).forEach(([key, value]) => {
            UpdateNodeGroupRequest_NodeLabelsEntry.encode({ key: key, value }, writer.uint32(114).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.updateMask = FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateNodeGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 8:
                    message.nodeTemplate = NodeTemplate.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.allocationPolicy = NodeGroupAllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.version = UpdateVersionSpec.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.maintenancePolicy =
                        NodeGroupMaintenancePolicy.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.allowedUnsafeSysctls.push(reader.string());
                    break;
                case 13:
                    message.nodeTaints.push(Taint.decode(reader, reader.uint32()));
                    break;
                case 14:
                    const entry14 = UpdateNodeGroupRequest_NodeLabelsEntry.decode(reader, reader.uint32());
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
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = NodeTemplate.fromJSON(object.nodeTemplate);
        }
        else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromJSON(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = UpdateVersionSpec.fromJSON(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy);
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
                message.nodeTaints.push(Taint.fromJSON(e));
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
        message.nodeTemplate !== undefined &&
            (obj.nodeTemplate = message.nodeTemplate
                ? NodeTemplate.toJSON(message.nodeTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? UpdateVersionSpec.toJSON(message.version)
                : undefined);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.allowedUnsafeSysctls) {
            obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls.map((e) => e);
        }
        else {
            obj.allowedUnsafeSysctls = [];
        }
        if (message.nodeTaints) {
            obj.nodeTaints = message.nodeTaints.map((e) => e ? Taint.toJSON(e) : undefined);
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
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = NodeTemplate.fromPartial(object.nodeTemplate);
        }
        else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromPartial(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = UpdateVersionSpec.fromPartial(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy);
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
                message.nodeTaints.push(Taint.fromPartial(e));
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
const baseUpdateNodeGroupRequest_LabelsEntry = { key: '', value: '' };
export const UpdateNodeGroupRequest_LabelsEntry = {
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
const baseUpdateNodeGroupRequest_NodeLabelsEntry = {
    key: '',
    value: '',
};
export const UpdateNodeGroupRequest_NodeLabelsEntry = {
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
const baseUpdateNodeGroupMetadata = { nodeGroupId: '' };
export const UpdateNodeGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseCreateNodeGroupRequest = {
    clusterId: '',
    name: '',
    description: '',
    version: '',
    allowedUnsafeSysctls: '',
};
export const CreateNodeGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
            CreateNodeGroupRequest_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.nodeTemplate !== undefined) {
            NodeTemplate.encode(message.nodeTemplate, writer.uint32(42).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            ScalePolicy.encode(message.scalePolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            NodeGroupAllocationPolicy.encode(message.allocationPolicy, writer.uint32(58).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            DeployPolicy.encode(message.deployPolicy, writer.uint32(106).fork()).ldelim();
        }
        if (message.version !== '') {
            writer.uint32(66).string(message.version);
        }
        if (message.maintenancePolicy !== undefined) {
            NodeGroupMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.allowedUnsafeSysctls) {
            writer.uint32(82).string(v);
        }
        for (const v of message.nodeTaints) {
            Taint.encode(v, writer.uint32(90).fork()).ldelim();
        }
        Object.entries(message.nodeLabels).forEach(([key, value]) => {
            CreateNodeGroupRequest_NodeLabelsEntry.encode({ key: key, value }, writer.uint32(98).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    const entry4 = CreateNodeGroupRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.nodeTemplate = NodeTemplate.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.scalePolicy = ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.allocationPolicy = NodeGroupAllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.deployPolicy = DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.version = reader.string();
                    break;
                case 9:
                    message.maintenancePolicy =
                        NodeGroupMaintenancePolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.allowedUnsafeSysctls.push(reader.string());
                    break;
                case 11:
                    message.nodeTaints.push(Taint.decode(reader, reader.uint32()));
                    break;
                case 12:
                    const entry12 = CreateNodeGroupRequest_NodeLabelsEntry.decode(reader, reader.uint32());
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
            message.nodeTemplate = NodeTemplate.fromJSON(object.nodeTemplate);
        }
        else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromJSON(object.deployPolicy);
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
            message.maintenancePolicy = NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy);
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
                message.nodeTaints.push(Taint.fromJSON(e));
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
                ? NodeTemplate.toJSON(message.nodeTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.version !== undefined && (obj.version = message.version);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.allowedUnsafeSysctls) {
            obj.allowedUnsafeSysctls = message.allowedUnsafeSysctls.map((e) => e);
        }
        else {
            obj.allowedUnsafeSysctls = [];
        }
        if (message.nodeTaints) {
            obj.nodeTaints = message.nodeTaints.map((e) => e ? Taint.toJSON(e) : undefined);
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
            message.nodeTemplate = NodeTemplate.fromPartial(object.nodeTemplate);
        }
        else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = DeployPolicy.fromPartial(object.deployPolicy);
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
            message.maintenancePolicy = NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy);
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
                message.nodeTaints.push(Taint.fromPartial(e));
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
const baseCreateNodeGroupRequest_LabelsEntry = { key: '', value: '' };
export const CreateNodeGroupRequest_LabelsEntry = {
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
const baseCreateNodeGroupRequest_NodeLabelsEntry = {
    key: '',
    value: '',
};
export const CreateNodeGroupRequest_NodeLabelsEntry = {
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
const baseCreateNodeGroupMetadata = { nodeGroupId: '' };
export const CreateNodeGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseAutoUpgradeNodeGroupMetadata = { nodeGroupId: '' };
export const AutoUpgradeNodeGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeGroupId !== '') {
            writer.uint32(10).string(message.nodeGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListNodeGroupOperationsRequest = {
    nodeGroupId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
export const ListNodeGroupOperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseListNodeGroupOperationsResponse = { nextPageToken: '' };
export const ListNodeGroupOperationsResponse = {
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
            ...baseListNodeGroupOperationsResponse,
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
            ...baseListNodeGroupOperationsResponse,
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
            ...baseListNodeGroupOperationsResponse,
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
/** A set of methods for managing node groups. */
export const NodeGroupServiceService = {
    /**
     * Returns the specified node group.
     *
     * To get the list of available node group, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => GetNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(NodeGroup.encode(value).finish()),
        responseDeserialize: (value) => NodeGroup.decode(value),
    },
    /** Retrieves the list of node group in the specified Kubernetes cluster. */
    list: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListNodeGroupsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListNodeGroupsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListNodeGroupsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListNodeGroupsResponse.decode(value),
    },
    /** Creates a node group in the specified Kubernetes cluster. */
    create: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates the specified node group. */
    update: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Deletes the specified node group. */
    delete: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteNodeGroupRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteNodeGroupRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists operations for the specified node group. */
    listOperations: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListNodeGroupOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListNodeGroupOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListNodeGroupOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListNodeGroupOperationsResponse.decode(value),
    },
    /** Retrieves the list of nodes in the specified Kubernetes cluster. */
    listNodes: {
        path: '/yandex.cloud.k8s.v1.NodeGroupService/ListNodes',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListNodeGroupNodesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListNodeGroupNodesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListNodeGroupNodesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListNodeGroupNodesResponse.decode(value),
    },
};
export const NodeGroupServiceClient = makeGenericClientConstructor(NodeGroupServiceService, 'yandex.cloud.k8s.v1.NodeGroupService');
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
