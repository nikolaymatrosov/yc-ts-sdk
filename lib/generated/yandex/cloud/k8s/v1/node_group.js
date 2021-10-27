"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployPolicy = exports.NodeGroupMaintenancePolicy = exports.NodeGroupLocation = exports.NodeGroupAllocationPolicy = exports.ScalePolicy_AutoScale = exports.ScalePolicy_FixedScale = exports.ScalePolicy = exports.NodeGroup_NodeLabelsEntry = exports.NodeGroup_LabelsEntry = exports.NodeGroup = exports.nodeGroup_StatusToJSON = exports.nodeGroup_StatusFromJSON = exports.NodeGroup_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const maintenance_1 = require("../../../../yandex/cloud/k8s/v1/maintenance");
const node_1 = require("../../../../yandex/cloud/k8s/v1/node");
const version_1 = require("../../../../yandex/cloud/k8s/v1/version");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.k8s.v1';
var NodeGroup_Status;
(function (NodeGroup_Status) {
    NodeGroup_Status[NodeGroup_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** PROVISIONING - Node group is waiting for resources to be allocated. */
    NodeGroup_Status[NodeGroup_Status["PROVISIONING"] = 1] = "PROVISIONING";
    /** RUNNING - Node group is running. */
    NodeGroup_Status[NodeGroup_Status["RUNNING"] = 2] = "RUNNING";
    /** RECONCILING - Node group is waiting for some work to be done, such as upgrading node software. */
    NodeGroup_Status[NodeGroup_Status["RECONCILING"] = 3] = "RECONCILING";
    /** STOPPING - Node group is being stopped. */
    NodeGroup_Status[NodeGroup_Status["STOPPING"] = 4] = "STOPPING";
    /** STOPPED - Node group stopped. */
    NodeGroup_Status[NodeGroup_Status["STOPPED"] = 5] = "STOPPED";
    /** DELETING - Node group is being deleted. */
    NodeGroup_Status[NodeGroup_Status["DELETING"] = 6] = "DELETING";
    /** STARTING - Node group is being started. */
    NodeGroup_Status[NodeGroup_Status["STARTING"] = 7] = "STARTING";
    NodeGroup_Status[NodeGroup_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NodeGroup_Status = exports.NodeGroup_Status || (exports.NodeGroup_Status = {}));
function nodeGroup_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return NodeGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROVISIONING':
            return NodeGroup_Status.PROVISIONING;
        case 2:
        case 'RUNNING':
            return NodeGroup_Status.RUNNING;
        case 3:
        case 'RECONCILING':
            return NodeGroup_Status.RECONCILING;
        case 4:
        case 'STOPPING':
            return NodeGroup_Status.STOPPING;
        case 5:
        case 'STOPPED':
            return NodeGroup_Status.STOPPED;
        case 6:
        case 'DELETING':
            return NodeGroup_Status.DELETING;
        case 7:
        case 'STARTING':
            return NodeGroup_Status.STARTING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NodeGroup_Status.UNRECOGNIZED;
    }
}
exports.nodeGroup_StatusFromJSON = nodeGroup_StatusFromJSON;
function nodeGroup_StatusToJSON(object) {
    switch (object) {
        case NodeGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case NodeGroup_Status.PROVISIONING:
            return 'PROVISIONING';
        case NodeGroup_Status.RUNNING:
            return 'RUNNING';
        case NodeGroup_Status.RECONCILING:
            return 'RECONCILING';
        case NodeGroup_Status.STOPPING:
            return 'STOPPING';
        case NodeGroup_Status.STOPPED:
            return 'STOPPED';
        case NodeGroup_Status.DELETING:
            return 'DELETING';
        case NodeGroup_Status.STARTING:
            return 'STARTING';
        default:
            return 'UNKNOWN';
    }
}
exports.nodeGroup_StatusToJSON = nodeGroup_StatusToJSON;
const baseNodeGroup = {
    id: '',
    clusterId: '',
    name: '',
    description: '',
    status: 0,
    instanceGroupId: '',
    nodeVersion: '',
    allowedUnsafeSysctls: '',
};
exports.NodeGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.NodeGroup_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.nodeTemplate !== undefined) {
            node_1.NodeTemplate.encode(message.nodeTemplate, writer.uint32(66).fork()).ldelim();
        }
        if (message.scalePolicy !== undefined) {
            exports.ScalePolicy.encode(message.scalePolicy, writer.uint32(74).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            exports.NodeGroupAllocationPolicy.encode(message.allocationPolicy, writer.uint32(82).fork()).ldelim();
        }
        if (message.deployPolicy !== undefined) {
            exports.DeployPolicy.encode(message.deployPolicy, writer.uint32(146).fork()).ldelim();
        }
        if (message.instanceGroupId !== '') {
            writer.uint32(90).string(message.instanceGroupId);
        }
        if (message.nodeVersion !== '') {
            writer.uint32(98).string(message.nodeVersion);
        }
        if (message.versionInfo !== undefined) {
            version_1.VersionInfo.encode(message.versionInfo, writer.uint32(106).fork()).ldelim();
        }
        if (message.maintenancePolicy !== undefined) {
            exports.NodeGroupMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.allowedUnsafeSysctls) {
            writer.uint32(122).string(v);
        }
        for (const v of message.nodeTaints) {
            node_1.Taint.encode(v, writer.uint32(130).fork()).ldelim();
        }
        Object.entries(message.nodeLabels).forEach(([key, value]) => {
            exports.NodeGroup_NodeLabelsEntry.encode({ key: key, value }, writer.uint32(138).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeGroup };
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.NodeGroup_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.nodeTemplate = node_1.NodeTemplate.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.scalePolicy = exports.ScalePolicy.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.allocationPolicy = exports.NodeGroupAllocationPolicy.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.deployPolicy = exports.DeployPolicy.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.instanceGroupId = reader.string();
                    break;
                case 12:
                    message.nodeVersion = reader.string();
                    break;
                case 13:
                    message.versionInfo = version_1.VersionInfo.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.maintenancePolicy =
                        exports.NodeGroupMaintenancePolicy.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.allowedUnsafeSysctls.push(reader.string());
                    break;
                case 16:
                    message.nodeTaints.push(node_1.Taint.decode(reader, reader.uint32()));
                    break;
                case 17:
                    const entry17 = exports.NodeGroup_NodeLabelsEntry.decode(reader, reader.uint32());
                    if (entry17.value !== undefined) {
                        message.nodeLabels[entry17.key] = entry17.value;
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
        const message = { ...baseNodeGroup };
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
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
        if (object.status !== undefined && object.status !== null) {
            message.status = nodeGroup_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = node_1.NodeTemplate.fromJSON(object.nodeTemplate);
        }
        else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = exports.ScalePolicy.fromJSON(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = exports.NodeGroupAllocationPolicy.fromJSON(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = exports.DeployPolicy.fromJSON(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = String(object.instanceGroupId);
        }
        else {
            message.instanceGroupId = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = String(object.nodeVersion);
        }
        else {
            message.nodeVersion = '';
        }
        if (object.versionInfo !== undefined && object.versionInfo !== null) {
            message.versionInfo = version_1.VersionInfo.fromJSON(object.versionInfo);
        }
        else {
            message.versionInfo = undefined;
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = exports.NodeGroupMaintenancePolicy.fromJSON(object.maintenancePolicy);
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
        message.id !== undefined && (obj.id = message.id);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.status !== undefined &&
            (obj.status = nodeGroup_StatusToJSON(message.status));
        message.nodeTemplate !== undefined &&
            (obj.nodeTemplate = message.nodeTemplate
                ? node_1.NodeTemplate.toJSON(message.nodeTemplate)
                : undefined);
        message.scalePolicy !== undefined &&
            (obj.scalePolicy = message.scalePolicy
                ? exports.ScalePolicy.toJSON(message.scalePolicy)
                : undefined);
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? exports.NodeGroupAllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.deployPolicy !== undefined &&
            (obj.deployPolicy = message.deployPolicy
                ? exports.DeployPolicy.toJSON(message.deployPolicy)
                : undefined);
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        message.nodeVersion !== undefined &&
            (obj.nodeVersion = message.nodeVersion);
        message.versionInfo !== undefined &&
            (obj.versionInfo = message.versionInfo
                ? version_1.VersionInfo.toJSON(message.versionInfo)
                : undefined);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? exports.NodeGroupMaintenancePolicy.toJSON(message.maintenancePolicy)
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
        const message = { ...baseNodeGroup };
        message.labels = {};
        message.allowedUnsafeSysctls = [];
        message.nodeTaints = [];
        message.nodeLabels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.nodeTemplate !== undefined && object.nodeTemplate !== null) {
            message.nodeTemplate = node_1.NodeTemplate.fromPartial(object.nodeTemplate);
        }
        else {
            message.nodeTemplate = undefined;
        }
        if (object.scalePolicy !== undefined && object.scalePolicy !== null) {
            message.scalePolicy = exports.ScalePolicy.fromPartial(object.scalePolicy);
        }
        else {
            message.scalePolicy = undefined;
        }
        if (object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null) {
            message.allocationPolicy = exports.NodeGroupAllocationPolicy.fromPartial(object.allocationPolicy);
        }
        else {
            message.allocationPolicy = undefined;
        }
        if (object.deployPolicy !== undefined && object.deployPolicy !== null) {
            message.deployPolicy = exports.DeployPolicy.fromPartial(object.deployPolicy);
        }
        else {
            message.deployPolicy = undefined;
        }
        if (object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null) {
            message.instanceGroupId = object.instanceGroupId;
        }
        else {
            message.instanceGroupId = '';
        }
        if (object.nodeVersion !== undefined && object.nodeVersion !== null) {
            message.nodeVersion = object.nodeVersion;
        }
        else {
            message.nodeVersion = '';
        }
        if (object.versionInfo !== undefined && object.versionInfo !== null) {
            message.versionInfo = version_1.VersionInfo.fromPartial(object.versionInfo);
        }
        else {
            message.versionInfo = undefined;
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = exports.NodeGroupMaintenancePolicy.fromPartial(object.maintenancePolicy);
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
const baseNodeGroup_LabelsEntry = { key: '', value: '' };
exports.NodeGroup_LabelsEntry = {
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
            ...baseNodeGroup_LabelsEntry,
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
            ...baseNodeGroup_LabelsEntry,
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
            ...baseNodeGroup_LabelsEntry,
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
const baseNodeGroup_NodeLabelsEntry = { key: '', value: '' };
exports.NodeGroup_NodeLabelsEntry = {
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
            ...baseNodeGroup_NodeLabelsEntry,
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
            ...baseNodeGroup_NodeLabelsEntry,
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
            ...baseNodeGroup_NodeLabelsEntry,
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
const baseScalePolicy = {};
exports.ScalePolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fixedScale !== undefined) {
            exports.ScalePolicy_FixedScale.encode(message.fixedScale, writer.uint32(10).fork()).ldelim();
        }
        if (message.autoScale !== undefined) {
            exports.ScalePolicy_AutoScale.encode(message.autoScale, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalePolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fixedScale = exports.ScalePolicy_FixedScale.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.autoScale = exports.ScalePolicy_AutoScale.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScalePolicy };
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = exports.ScalePolicy_FixedScale.fromJSON(object.fixedScale);
        }
        else {
            message.fixedScale = undefined;
        }
        if (object.autoScale !== undefined && object.autoScale !== null) {
            message.autoScale = exports.ScalePolicy_AutoScale.fromJSON(object.autoScale);
        }
        else {
            message.autoScale = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fixedScale !== undefined &&
            (obj.fixedScale = message.fixedScale
                ? exports.ScalePolicy_FixedScale.toJSON(message.fixedScale)
                : undefined);
        message.autoScale !== undefined &&
            (obj.autoScale = message.autoScale
                ? exports.ScalePolicy_AutoScale.toJSON(message.autoScale)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScalePolicy };
        if (object.fixedScale !== undefined && object.fixedScale !== null) {
            message.fixedScale = exports.ScalePolicy_FixedScale.fromPartial(object.fixedScale);
        }
        else {
            message.fixedScale = undefined;
        }
        if (object.autoScale !== undefined && object.autoScale !== null) {
            message.autoScale = exports.ScalePolicy_AutoScale.fromPartial(object.autoScale);
        }
        else {
            message.autoScale = undefined;
        }
        return message;
    },
};
const baseScalePolicy_FixedScale = { size: 0 };
exports.ScalePolicy_FixedScale = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_FixedScale,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
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
            ...baseScalePolicy_FixedScale,
        };
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.size !== undefined && (obj.size = message.size);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScalePolicy_FixedScale,
        };
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
        }
        return message;
    },
};
const baseScalePolicy_AutoScale = {
    minSize: 0,
    maxSize: 0,
    initialSize: 0,
};
exports.ScalePolicy_AutoScale = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.minSize !== 0) {
            writer.uint32(8).int64(message.minSize);
        }
        if (message.maxSize !== 0) {
            writer.uint32(16).int64(message.maxSize);
        }
        if (message.initialSize !== 0) {
            writer.uint32(24).int64(message.initialSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseScalePolicy_AutoScale,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minSize = longToNumber(reader.int64());
                    break;
                case 2:
                    message.maxSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.initialSize = longToNumber(reader.int64());
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
            ...baseScalePolicy_AutoScale,
        };
        if (object.minSize !== undefined && object.minSize !== null) {
            message.minSize = Number(object.minSize);
        }
        else {
            message.minSize = 0;
        }
        if (object.maxSize !== undefined && object.maxSize !== null) {
            message.maxSize = Number(object.maxSize);
        }
        else {
            message.maxSize = 0;
        }
        if (object.initialSize !== undefined && object.initialSize !== null) {
            message.initialSize = Number(object.initialSize);
        }
        else {
            message.initialSize = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.minSize !== undefined && (obj.minSize = message.minSize);
        message.maxSize !== undefined && (obj.maxSize = message.maxSize);
        message.initialSize !== undefined &&
            (obj.initialSize = message.initialSize);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseScalePolicy_AutoScale,
        };
        if (object.minSize !== undefined && object.minSize !== null) {
            message.minSize = object.minSize;
        }
        else {
            message.minSize = 0;
        }
        if (object.maxSize !== undefined && object.maxSize !== null) {
            message.maxSize = object.maxSize;
        }
        else {
            message.maxSize = 0;
        }
        if (object.initialSize !== undefined && object.initialSize !== null) {
            message.initialSize = object.initialSize;
        }
        else {
            message.initialSize = 0;
        }
        return message;
    },
};
const baseNodeGroupAllocationPolicy = {};
exports.NodeGroupAllocationPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.locations) {
            exports.NodeGroupLocation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseNodeGroupAllocationPolicy,
        };
        message.locations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locations.push(exports.NodeGroupLocation.decode(reader, reader.uint32()));
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
            ...baseNodeGroupAllocationPolicy,
        };
        message.locations = [];
        if (object.locations !== undefined && object.locations !== null) {
            for (const e of object.locations) {
                message.locations.push(exports.NodeGroupLocation.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.locations) {
            obj.locations = message.locations.map((e) => e ? exports.NodeGroupLocation.toJSON(e) : undefined);
        }
        else {
            obj.locations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseNodeGroupAllocationPolicy,
        };
        message.locations = [];
        if (object.locations !== undefined && object.locations !== null) {
            for (const e of object.locations) {
                message.locations.push(exports.NodeGroupLocation.fromPartial(e));
            }
        }
        return message;
    },
};
const baseNodeGroupLocation = { zoneId: '', subnetId: '' };
exports.NodeGroupLocation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeGroupLocation };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
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
        const message = { ...baseNodeGroupLocation };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNodeGroupLocation };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        return message;
    },
};
const baseNodeGroupMaintenancePolicy = {
    autoUpgrade: false,
    autoRepair: false,
};
exports.NodeGroupMaintenancePolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.autoUpgrade === true) {
            writer.uint32(8).bool(message.autoUpgrade);
        }
        if (message.autoRepair === true) {
            writer.uint32(16).bool(message.autoRepair);
        }
        if (message.maintenanceWindow !== undefined) {
            maintenance_1.MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseNodeGroupMaintenancePolicy,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.autoUpgrade = reader.bool();
                    break;
                case 2:
                    message.autoRepair = reader.bool();
                    break;
                case 3:
                    message.maintenanceWindow = maintenance_1.MaintenanceWindow.decode(reader, reader.uint32());
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
            ...baseNodeGroupMaintenancePolicy,
        };
        if (object.autoUpgrade !== undefined && object.autoUpgrade !== null) {
            message.autoUpgrade = Boolean(object.autoUpgrade);
        }
        else {
            message.autoUpgrade = false;
        }
        if (object.autoRepair !== undefined && object.autoRepair !== null) {
            message.autoRepair = Boolean(object.autoRepair);
        }
        else {
            message.autoRepair = false;
        }
        if (object.maintenanceWindow !== undefined &&
            object.maintenanceWindow !== null) {
            message.maintenanceWindow = maintenance_1.MaintenanceWindow.fromJSON(object.maintenanceWindow);
        }
        else {
            message.maintenanceWindow = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.autoUpgrade !== undefined &&
            (obj.autoUpgrade = message.autoUpgrade);
        message.autoRepair !== undefined &&
            (obj.autoRepair = message.autoRepair);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? maintenance_1.MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseNodeGroupMaintenancePolicy,
        };
        if (object.autoUpgrade !== undefined && object.autoUpgrade !== null) {
            message.autoUpgrade = object.autoUpgrade;
        }
        else {
            message.autoUpgrade = false;
        }
        if (object.autoRepair !== undefined && object.autoRepair !== null) {
            message.autoRepair = object.autoRepair;
        }
        else {
            message.autoRepair = false;
        }
        if (object.maintenanceWindow !== undefined &&
            object.maintenanceWindow !== null) {
            message.maintenanceWindow = maintenance_1.MaintenanceWindow.fromPartial(object.maintenanceWindow);
        }
        else {
            message.maintenanceWindow = undefined;
        }
        return message;
    },
};
const baseDeployPolicy = { maxUnavailable: 0, maxExpansion: 0 };
exports.DeployPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxUnavailable !== 0) {
            writer.uint32(8).int64(message.maxUnavailable);
        }
        if (message.maxExpansion !== 0) {
            writer.uint32(16).int64(message.maxExpansion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeployPolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxUnavailable = longToNumber(reader.int64());
                    break;
                case 2:
                    message.maxExpansion = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeployPolicy };
        if (object.maxUnavailable !== undefined &&
            object.maxUnavailable !== null) {
            message.maxUnavailable = Number(object.maxUnavailable);
        }
        else {
            message.maxUnavailable = 0;
        }
        if (object.maxExpansion !== undefined && object.maxExpansion !== null) {
            message.maxExpansion = Number(object.maxExpansion);
        }
        else {
            message.maxExpansion = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxUnavailable !== undefined &&
            (obj.maxUnavailable = message.maxUnavailable);
        message.maxExpansion !== undefined &&
            (obj.maxExpansion = message.maxExpansion);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeployPolicy };
        if (object.maxUnavailable !== undefined &&
            object.maxUnavailable !== null) {
            message.maxUnavailable = object.maxUnavailable;
        }
        else {
            message.maxUnavailable = 0;
        }
        if (object.maxExpansion !== undefined && object.maxExpansion !== null) {
            message.maxExpansion = object.maxExpansion;
        }
        else {
            message.maxExpansion = 0;
        }
        return message;
    },
};
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
