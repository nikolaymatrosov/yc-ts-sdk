"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementPolicy = exports.SchedulingPolicy = exports.DiskSpec = exports.ResourcesSpec = exports.OneToOneNatSpec = exports.NodeAddressSpec = exports.NetworkInterfaceSpec = exports.NodeTemplate_NetworkSettings = exports.NodeTemplate_MetadataEntry = exports.NodeTemplate = exports.AttachedVolume = exports.Taint = exports.Condition = exports.Node_Spec = exports.Node_CloudStatus = exports.Node_KubernetesStatus = exports.Node = exports.nodeTemplate_NetworkSettings_TypeToJSON = exports.nodeTemplate_NetworkSettings_TypeFromJSON = exports.NodeTemplate_NetworkSettings_Type = exports.taint_EffectToJSON = exports.taint_EffectFromJSON = exports.Taint_Effect = exports.node_StatusToJSON = exports.node_StatusFromJSON = exports.Node_Status = exports.ipVersionToJSON = exports.ipVersionFromJSON = exports.IpVersion = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.k8s.v1';
var IpVersion;
(function (IpVersion) {
    IpVersion[IpVersion["IP_VERSION_UNSPECIFIED"] = 0] = "IP_VERSION_UNSPECIFIED";
    /** IPV4 - IPv4 address, for example 192.168.0.0. */
    IpVersion[IpVersion["IPV4"] = 1] = "IPV4";
    /** IPV6 - IPv6 address, not available yet. */
    IpVersion[IpVersion["IPV6"] = 2] = "IPV6";
    IpVersion[IpVersion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IpVersion = exports.IpVersion || (exports.IpVersion = {}));
function ipVersionFromJSON(object) {
    switch (object) {
        case 0:
        case 'IP_VERSION_UNSPECIFIED':
            return IpVersion.IP_VERSION_UNSPECIFIED;
        case 1:
        case 'IPV4':
            return IpVersion.IPV4;
        case 2:
        case 'IPV6':
            return IpVersion.IPV6;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return IpVersion.UNRECOGNIZED;
    }
}
exports.ipVersionFromJSON = ipVersionFromJSON;
function ipVersionToJSON(object) {
    switch (object) {
        case IpVersion.IP_VERSION_UNSPECIFIED:
            return 'IP_VERSION_UNSPECIFIED';
        case IpVersion.IPV4:
            return 'IPV4';
        case IpVersion.IPV6:
            return 'IPV6';
        default:
            return 'UNKNOWN';
    }
}
exports.ipVersionToJSON = ipVersionToJSON;
/** Computed node status. */
var Node_Status;
(function (Node_Status) {
    Node_Status[Node_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** PROVISIONING - Node instance is not yet created (e.g. in progress). */
    Node_Status[Node_Status["PROVISIONING"] = 1] = "PROVISIONING";
    /**
     * NOT_CONNECTED - Node instance is created but not registered
     * (e.g. is still initializing).
     */
    Node_Status[Node_Status["NOT_CONNECTED"] = 2] = "NOT_CONNECTED";
    /**
     * NOT_READY - Node has connected but is not ready for
     * workload (see conditions for details).
     */
    Node_Status[Node_Status["NOT_READY"] = 3] = "NOT_READY";
    /** READY - Node has connected and ready for workload. */
    Node_Status[Node_Status["READY"] = 4] = "READY";
    /**
     * MISSING - Node is still registered but its instance
     * is deleted (this is our bug).
     */
    Node_Status[Node_Status["MISSING"] = 5] = "MISSING";
    Node_Status[Node_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Node_Status = exports.Node_Status || (exports.Node_Status = {}));
function node_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Node_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROVISIONING':
            return Node_Status.PROVISIONING;
        case 2:
        case 'NOT_CONNECTED':
            return Node_Status.NOT_CONNECTED;
        case 3:
        case 'NOT_READY':
            return Node_Status.NOT_READY;
        case 4:
        case 'READY':
            return Node_Status.READY;
        case 5:
        case 'MISSING':
            return Node_Status.MISSING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Node_Status.UNRECOGNIZED;
    }
}
exports.node_StatusFromJSON = node_StatusFromJSON;
function node_StatusToJSON(object) {
    switch (object) {
        case Node_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Node_Status.PROVISIONING:
            return 'PROVISIONING';
        case Node_Status.NOT_CONNECTED:
            return 'NOT_CONNECTED';
        case Node_Status.NOT_READY:
            return 'NOT_READY';
        case Node_Status.READY:
            return 'READY';
        case Node_Status.MISSING:
            return 'MISSING';
        default:
            return 'UNKNOWN';
    }
}
exports.node_StatusToJSON = node_StatusToJSON;
var Taint_Effect;
(function (Taint_Effect) {
    Taint_Effect[Taint_Effect["EFFECT_UNSPECIFIED"] = 0] = "EFFECT_UNSPECIFIED";
    /**
     * NO_SCHEDULE - Do not allow new pods to schedule onto the node unless they tolerate the taint,
     * but allow all pods submitted to Kubelet without going through the scheduler
     * to start, and allow all already-running pods to continue running.
     */
    Taint_Effect[Taint_Effect["NO_SCHEDULE"] = 1] = "NO_SCHEDULE";
    /**
     * PREFER_NO_SCHEDULE - Like NO_SCHEDULE, but the scheduler tries not to schedule
     * new pods onto the node, rather than prohibiting new pods from scheduling
     * onto the node entirely. Enforced by the scheduler.
     */
    Taint_Effect[Taint_Effect["PREFER_NO_SCHEDULE"] = 2] = "PREFER_NO_SCHEDULE";
    /** NO_EXECUTE - Evict any already-running pods that do not tolerate the taint. */
    Taint_Effect[Taint_Effect["NO_EXECUTE"] = 3] = "NO_EXECUTE";
    Taint_Effect[Taint_Effect["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Taint_Effect = exports.Taint_Effect || (exports.Taint_Effect = {}));
function taint_EffectFromJSON(object) {
    switch (object) {
        case 0:
        case 'EFFECT_UNSPECIFIED':
            return Taint_Effect.EFFECT_UNSPECIFIED;
        case 1:
        case 'NO_SCHEDULE':
            return Taint_Effect.NO_SCHEDULE;
        case 2:
        case 'PREFER_NO_SCHEDULE':
            return Taint_Effect.PREFER_NO_SCHEDULE;
        case 3:
        case 'NO_EXECUTE':
            return Taint_Effect.NO_EXECUTE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Taint_Effect.UNRECOGNIZED;
    }
}
exports.taint_EffectFromJSON = taint_EffectFromJSON;
function taint_EffectToJSON(object) {
    switch (object) {
        case Taint_Effect.EFFECT_UNSPECIFIED:
            return 'EFFECT_UNSPECIFIED';
        case Taint_Effect.NO_SCHEDULE:
            return 'NO_SCHEDULE';
        case Taint_Effect.PREFER_NO_SCHEDULE:
            return 'PREFER_NO_SCHEDULE';
        case Taint_Effect.NO_EXECUTE:
            return 'NO_EXECUTE';
        default:
            return 'UNKNOWN';
    }
}
exports.taint_EffectToJSON = taint_EffectToJSON;
var NodeTemplate_NetworkSettings_Type;
(function (NodeTemplate_NetworkSettings_Type) {
    NodeTemplate_NetworkSettings_Type[NodeTemplate_NetworkSettings_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    NodeTemplate_NetworkSettings_Type[NodeTemplate_NetworkSettings_Type["STANDARD"] = 1] = "STANDARD";
    /**
     * SOFTWARE_ACCELERATED - unsupported yet, commented for possible future utilization.
     * HARDWARE_ACCELERATED = 3;
     */
    NodeTemplate_NetworkSettings_Type[NodeTemplate_NetworkSettings_Type["SOFTWARE_ACCELERATED"] = 2] = "SOFTWARE_ACCELERATED";
    NodeTemplate_NetworkSettings_Type[NodeTemplate_NetworkSettings_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NodeTemplate_NetworkSettings_Type = exports.NodeTemplate_NetworkSettings_Type || (exports.NodeTemplate_NetworkSettings_Type = {}));
function nodeTemplate_NetworkSettings_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return NodeTemplate_NetworkSettings_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'STANDARD':
            return NodeTemplate_NetworkSettings_Type.STANDARD;
        case 2:
        case 'SOFTWARE_ACCELERATED':
            return NodeTemplate_NetworkSettings_Type.SOFTWARE_ACCELERATED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NodeTemplate_NetworkSettings_Type.UNRECOGNIZED;
    }
}
exports.nodeTemplate_NetworkSettings_TypeFromJSON = nodeTemplate_NetworkSettings_TypeFromJSON;
function nodeTemplate_NetworkSettings_TypeToJSON(object) {
    switch (object) {
        case NodeTemplate_NetworkSettings_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case NodeTemplate_NetworkSettings_Type.STANDARD:
            return 'STANDARD';
        case NodeTemplate_NetworkSettings_Type.SOFTWARE_ACCELERATED:
            return 'SOFTWARE_ACCELERATED';
        default:
            return 'UNKNOWN';
    }
}
exports.nodeTemplate_NetworkSettings_TypeToJSON = nodeTemplate_NetworkSettings_TypeToJSON;
const baseNode = { status: 0 };
exports.Node = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.spec !== undefined) {
            exports.Node_Spec.encode(message.spec, writer.uint32(18).fork()).ldelim();
        }
        if (message.cloudStatus !== undefined) {
            exports.Node_CloudStatus.encode(message.cloudStatus, writer.uint32(26).fork()).ldelim();
        }
        if (message.kubernetesStatus !== undefined) {
            exports.Node_KubernetesStatus.encode(message.kubernetesStatus, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNode };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.spec = exports.Node_Spec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cloudStatus = exports.Node_CloudStatus.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.kubernetesStatus = exports.Node_KubernetesStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNode };
        if (object.status !== undefined && object.status !== null) {
            message.status = node_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.spec !== undefined && object.spec !== null) {
            message.spec = exports.Node_Spec.fromJSON(object.spec);
        }
        else {
            message.spec = undefined;
        }
        if (object.cloudStatus !== undefined && object.cloudStatus !== null) {
            message.cloudStatus = exports.Node_CloudStatus.fromJSON(object.cloudStatus);
        }
        else {
            message.cloudStatus = undefined;
        }
        if (object.kubernetesStatus !== undefined &&
            object.kubernetesStatus !== null) {
            message.kubernetesStatus = exports.Node_KubernetesStatus.fromJSON(object.kubernetesStatus);
        }
        else {
            message.kubernetesStatus = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = node_StatusToJSON(message.status));
        message.spec !== undefined &&
            (obj.spec = message.spec
                ? exports.Node_Spec.toJSON(message.spec)
                : undefined);
        message.cloudStatus !== undefined &&
            (obj.cloudStatus = message.cloudStatus
                ? exports.Node_CloudStatus.toJSON(message.cloudStatus)
                : undefined);
        message.kubernetesStatus !== undefined &&
            (obj.kubernetesStatus = message.kubernetesStatus
                ? exports.Node_KubernetesStatus.toJSON(message.kubernetesStatus)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNode };
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.spec !== undefined && object.spec !== null) {
            message.spec = exports.Node_Spec.fromPartial(object.spec);
        }
        else {
            message.spec = undefined;
        }
        if (object.cloudStatus !== undefined && object.cloudStatus !== null) {
            message.cloudStatus = exports.Node_CloudStatus.fromPartial(object.cloudStatus);
        }
        else {
            message.cloudStatus = undefined;
        }
        if (object.kubernetesStatus !== undefined &&
            object.kubernetesStatus !== null) {
            message.kubernetesStatus = exports.Node_KubernetesStatus.fromPartial(object.kubernetesStatus);
        }
        else {
            message.kubernetesStatus = undefined;
        }
        return message;
    },
};
const baseNode_KubernetesStatus = { id: '' };
exports.Node_KubernetesStatus = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.conditions) {
            exports.Condition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.taints) {
            exports.Taint.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.attachedVolumes) {
            exports.AttachedVolume.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseNode_KubernetesStatus,
        };
        message.conditions = [];
        message.taints = [];
        message.attachedVolumes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.conditions.push(exports.Condition.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.taints.push(exports.Taint.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.attachedVolumes.push(exports.AttachedVolume.decode(reader, reader.uint32()));
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
            ...baseNode_KubernetesStatus,
        };
        message.conditions = [];
        message.taints = [];
        message.attachedVolumes = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.conditions !== undefined && object.conditions !== null) {
            for (const e of object.conditions) {
                message.conditions.push(exports.Condition.fromJSON(e));
            }
        }
        if (object.taints !== undefined && object.taints !== null) {
            for (const e of object.taints) {
                message.taints.push(exports.Taint.fromJSON(e));
            }
        }
        if (object.attachedVolumes !== undefined &&
            object.attachedVolumes !== null) {
            for (const e of object.attachedVolumes) {
                message.attachedVolumes.push(exports.AttachedVolume.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.conditions) {
            obj.conditions = message.conditions.map((e) => e ? exports.Condition.toJSON(e) : undefined);
        }
        else {
            obj.conditions = [];
        }
        if (message.taints) {
            obj.taints = message.taints.map((e) => e ? exports.Taint.toJSON(e) : undefined);
        }
        else {
            obj.taints = [];
        }
        if (message.attachedVolumes) {
            obj.attachedVolumes = message.attachedVolumes.map((e) => e ? exports.AttachedVolume.toJSON(e) : undefined);
        }
        else {
            obj.attachedVolumes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseNode_KubernetesStatus,
        };
        message.conditions = [];
        message.taints = [];
        message.attachedVolumes = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.conditions !== undefined && object.conditions !== null) {
            for (const e of object.conditions) {
                message.conditions.push(exports.Condition.fromPartial(e));
            }
        }
        if (object.taints !== undefined && object.taints !== null) {
            for (const e of object.taints) {
                message.taints.push(exports.Taint.fromPartial(e));
            }
        }
        if (object.attachedVolumes !== undefined &&
            object.attachedVolumes !== null) {
            for (const e of object.attachedVolumes) {
                message.attachedVolumes.push(exports.AttachedVolume.fromPartial(e));
            }
        }
        return message;
    },
};
const baseNode_CloudStatus = { id: '', status: '', statusMessage: '' };
exports.Node_CloudStatus = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.status !== '') {
            writer.uint32(18).string(message.status);
        }
        if (message.statusMessage !== '') {
            writer.uint32(26).string(message.statusMessage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNode_CloudStatus };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.statusMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNode_CloudStatus };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = '';
        }
        if (object.statusMessage !== undefined &&
            object.statusMessage !== null) {
            message.statusMessage = String(object.statusMessage);
        }
        else {
            message.statusMessage = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.status !== undefined && (obj.status = message.status);
        message.statusMessage !== undefined &&
            (obj.statusMessage = message.statusMessage);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNode_CloudStatus };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = '';
        }
        if (object.statusMessage !== undefined &&
            object.statusMessage !== null) {
            message.statusMessage = object.statusMessage;
        }
        else {
            message.statusMessage = '';
        }
        return message;
    },
};
const baseNode_Spec = {};
exports.Node_Spec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            exports.ResourcesSpec.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.disk !== undefined) {
            exports.DiskSpec.encode(message.disk, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNode_Spec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = exports.ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.disk = exports.DiskSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNode_Spec };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.ResourcesSpec.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.disk !== undefined && object.disk !== null) {
            message.disk = exports.DiskSpec.fromJSON(object.disk);
        }
        else {
            message.disk = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.ResourcesSpec.toJSON(message.resources)
                : undefined);
        message.disk !== undefined &&
            (obj.disk = message.disk
                ? exports.DiskSpec.toJSON(message.disk)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNode_Spec };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.ResourcesSpec.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.disk !== undefined && object.disk !== null) {
            message.disk = exports.DiskSpec.fromPartial(object.disk);
        }
        else {
            message.disk = undefined;
        }
        return message;
    },
};
const baseCondition = { type: '', status: '', message: '' };
exports.Condition = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.status !== '') {
            writer.uint32(18).string(message.status);
        }
        if (message.message !== '') {
            writer.uint32(26).string(message.message);
        }
        if (message.lastHeartbeatTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastHeartbeatTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastTransitionTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastTransitionTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                case 4:
                    message.lastHeartbeatTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastTransitionTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCondition };
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = '';
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = '';
        }
        if (object.lastHeartbeatTime !== undefined &&
            object.lastHeartbeatTime !== null) {
            message.lastHeartbeatTime = fromJsonTimestamp(object.lastHeartbeatTime);
        }
        else {
            message.lastHeartbeatTime = undefined;
        }
        if (object.lastTransitionTime !== undefined &&
            object.lastTransitionTime !== null) {
            message.lastTransitionTime = fromJsonTimestamp(object.lastTransitionTime);
        }
        else {
            message.lastTransitionTime = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.status !== undefined && (obj.status = message.status);
        message.message !== undefined && (obj.message = message.message);
        message.lastHeartbeatTime !== undefined &&
            (obj.lastHeartbeatTime = message.lastHeartbeatTime.toISOString());
        message.lastTransitionTime !== undefined &&
            (obj.lastTransitionTime = message.lastTransitionTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCondition };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = '';
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = '';
        }
        if (object.lastHeartbeatTime !== undefined &&
            object.lastHeartbeatTime !== null) {
            message.lastHeartbeatTime = object.lastHeartbeatTime;
        }
        else {
            message.lastHeartbeatTime = undefined;
        }
        if (object.lastTransitionTime !== undefined &&
            object.lastTransitionTime !== null) {
            message.lastTransitionTime = object.lastTransitionTime;
        }
        else {
            message.lastTransitionTime = undefined;
        }
        return message;
    },
};
const baseTaint = { key: '', value: '', effect: 0 };
exports.Taint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        if (message.effect !== 0) {
            writer.uint32(24).int32(message.effect);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTaint };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.effect = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTaint };
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
        if (object.effect !== undefined && object.effect !== null) {
            message.effect = taint_EffectFromJSON(object.effect);
        }
        else {
            message.effect = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        message.effect !== undefined &&
            (obj.effect = taint_EffectToJSON(message.effect));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTaint };
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
        if (object.effect !== undefined && object.effect !== null) {
            message.effect = object.effect;
        }
        else {
            message.effect = 0;
        }
        return message;
    },
};
const baseAttachedVolume = { driverName: '', volumeHandle: '' };
exports.AttachedVolume = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.driverName !== '') {
            writer.uint32(10).string(message.driverName);
        }
        if (message.volumeHandle !== '') {
            writer.uint32(18).string(message.volumeHandle);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttachedVolume };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.driverName = reader.string();
                    break;
                case 2:
                    message.volumeHandle = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAttachedVolume };
        if (object.driverName !== undefined && object.driverName !== null) {
            message.driverName = String(object.driverName);
        }
        else {
            message.driverName = '';
        }
        if (object.volumeHandle !== undefined && object.volumeHandle !== null) {
            message.volumeHandle = String(object.volumeHandle);
        }
        else {
            message.volumeHandle = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.driverName !== undefined &&
            (obj.driverName = message.driverName);
        message.volumeHandle !== undefined &&
            (obj.volumeHandle = message.volumeHandle);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAttachedVolume };
        if (object.driverName !== undefined && object.driverName !== null) {
            message.driverName = object.driverName;
        }
        else {
            message.driverName = '';
        }
        if (object.volumeHandle !== undefined && object.volumeHandle !== null) {
            message.volumeHandle = object.volumeHandle;
        }
        else {
            message.volumeHandle = '';
        }
        return message;
    },
};
const baseNodeTemplate = { platformId: '' };
exports.NodeTemplate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.platformId !== '') {
            writer.uint32(10).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            exports.ResourcesSpec.encode(message.resourcesSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.bootDiskSpec !== undefined) {
            exports.DiskSpec.encode(message.bootDiskSpec, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            exports.NodeTemplate_MetadataEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.v4AddressSpec !== undefined) {
            exports.NodeAddressSpec.encode(message.v4AddressSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.schedulingPolicy !== undefined) {
            exports.SchedulingPolicy.encode(message.schedulingPolicy, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.networkInterfaceSpecs) {
            exports.NetworkInterfaceSpec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            exports.PlacementPolicy.encode(message.placementPolicy, writer.uint32(82).fork()).ldelim();
        }
        if (message.networkSettings !== undefined) {
            exports.NodeTemplate_NetworkSettings.encode(message.networkSettings, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeTemplate };
        message.metadata = {};
        message.networkInterfaceSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.platformId = reader.string();
                    break;
                case 2:
                    message.resourcesSpec = exports.ResourcesSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.bootDiskSpec = exports.DiskSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    const entry4 = exports.NodeTemplate_MetadataEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.metadata[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.v4AddressSpec = exports.NodeAddressSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.schedulingPolicy = exports.SchedulingPolicy.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.placementPolicy = exports.PlacementPolicy.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.networkSettings =
                        exports.NodeTemplate_NetworkSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNodeTemplate };
        message.metadata = {};
        message.networkInterfaceSpecs = [];
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = String(object.platformId);
        }
        else {
            message.platformId = '';
        }
        if (object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null) {
            message.resourcesSpec = exports.ResourcesSpec.fromJSON(object.resourcesSpec);
        }
        else {
            message.resourcesSpec = undefined;
        }
        if (object.bootDiskSpec !== undefined && object.bootDiskSpec !== null) {
            message.bootDiskSpec = exports.DiskSpec.fromJSON(object.bootDiskSpec);
        }
        else {
            message.bootDiskSpec = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                message.metadata[key] = String(value);
            });
        }
        if (object.v4AddressSpec !== undefined &&
            object.v4AddressSpec !== null) {
            message.v4AddressSpec = exports.NodeAddressSpec.fromJSON(object.v4AddressSpec);
        }
        else {
            message.v4AddressSpec = undefined;
        }
        if (object.schedulingPolicy !== undefined &&
            object.schedulingPolicy !== null) {
            message.schedulingPolicy = exports.SchedulingPolicy.fromJSON(object.schedulingPolicy);
        }
        else {
            message.schedulingPolicy = undefined;
        }
        if (object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.fromJSON(e));
            }
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = exports.PlacementPolicy.fromJSON(object.placementPolicy);
        }
        else {
            message.placementPolicy = undefined;
        }
        if (object.networkSettings !== undefined &&
            object.networkSettings !== null) {
            message.networkSettings = exports.NodeTemplate_NetworkSettings.fromJSON(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.platformId !== undefined &&
            (obj.platformId = message.platformId);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? exports.ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? exports.DiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.v4AddressSpec !== undefined &&
            (obj.v4AddressSpec = message.v4AddressSpec
                ? exports.NodeAddressSpec.toJSON(message.v4AddressSpec)
                : undefined);
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = message.schedulingPolicy
                ? exports.SchedulingPolicy.toJSON(message.schedulingPolicy)
                : undefined);
        if (message.networkInterfaceSpecs) {
            obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) => e ? exports.NetworkInterfaceSpec.toJSON(e) : undefined);
        }
        else {
            obj.networkInterfaceSpecs = [];
        }
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? exports.PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? exports.NodeTemplate_NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNodeTemplate };
        message.metadata = {};
        message.networkInterfaceSpecs = [];
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = object.platformId;
        }
        else {
            message.platformId = '';
        }
        if (object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null) {
            message.resourcesSpec = exports.ResourcesSpec.fromPartial(object.resourcesSpec);
        }
        else {
            message.resourcesSpec = undefined;
        }
        if (object.bootDiskSpec !== undefined && object.bootDiskSpec !== null) {
            message.bootDiskSpec = exports.DiskSpec.fromPartial(object.bootDiskSpec);
        }
        else {
            message.bootDiskSpec = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        if (object.v4AddressSpec !== undefined &&
            object.v4AddressSpec !== null) {
            message.v4AddressSpec = exports.NodeAddressSpec.fromPartial(object.v4AddressSpec);
        }
        else {
            message.v4AddressSpec = undefined;
        }
        if (object.schedulingPolicy !== undefined &&
            object.schedulingPolicy !== null) {
            message.schedulingPolicy = exports.SchedulingPolicy.fromPartial(object.schedulingPolicy);
        }
        else {
            message.schedulingPolicy = undefined;
        }
        if (object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(exports.NetworkInterfaceSpec.fromPartial(e));
            }
        }
        if (object.placementPolicy !== undefined &&
            object.placementPolicy !== null) {
            message.placementPolicy = exports.PlacementPolicy.fromPartial(object.placementPolicy);
        }
        else {
            message.placementPolicy = undefined;
        }
        if (object.networkSettings !== undefined &&
            object.networkSettings !== null) {
            message.networkSettings = exports.NodeTemplate_NetworkSettings.fromPartial(object.networkSettings);
        }
        else {
            message.networkSettings = undefined;
        }
        return message;
    },
};
const baseNodeTemplate_MetadataEntry = { key: '', value: '' };
exports.NodeTemplate_MetadataEntry = {
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
            ...baseNodeTemplate_MetadataEntry,
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
            ...baseNodeTemplate_MetadataEntry,
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
            ...baseNodeTemplate_MetadataEntry,
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
const baseNodeTemplate_NetworkSettings = { type: 0 };
exports.NodeTemplate_NetworkSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseNodeTemplate_NetworkSettings,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
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
            ...baseNodeTemplate_NetworkSettings,
        };
        if (object.type !== undefined && object.type !== null) {
            message.type = nodeTemplate_NetworkSettings_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = nodeTemplate_NetworkSettings_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseNodeTemplate_NetworkSettings,
        };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        return message;
    },
};
const baseNetworkInterfaceSpec = {
    subnetIds: '',
    securityGroupIds: '',
};
exports.NetworkInterfaceSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.subnetIds) {
            writer.uint32(18).string(v);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            exports.NodeAddressSpec.encode(message.primaryV4AddressSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            exports.NodeAddressSpec.encode(message.primaryV6AddressSpec, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterfaceSpec };
        message.subnetIds = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.subnetIds.push(reader.string());
                    break;
                case 3:
                    message.primaryV4AddressSpec = exports.NodeAddressSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.primaryV6AddressSpec = exports.NodeAddressSpec.decode(reader, reader.uint32());
                    break;
                case 5:
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
        const message = { ...baseNetworkInterfaceSpec };
        message.subnetIds = [];
        message.securityGroupIds = [];
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(String(e));
            }
        }
        if (object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null) {
            message.primaryV4AddressSpec = exports.NodeAddressSpec.fromJSON(object.primaryV4AddressSpec);
        }
        else {
            message.primaryV4AddressSpec = undefined;
        }
        if (object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null) {
            message.primaryV6AddressSpec = exports.NodeAddressSpec.fromJSON(object.primaryV6AddressSpec);
        }
        else {
            message.primaryV6AddressSpec = undefined;
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
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        }
        else {
            obj.subnetIds = [];
        }
        message.primaryV4AddressSpec !== undefined &&
            (obj.primaryV4AddressSpec = message.primaryV4AddressSpec
                ? exports.NodeAddressSpec.toJSON(message.primaryV4AddressSpec)
                : undefined);
        message.primaryV6AddressSpec !== undefined &&
            (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
                ? exports.NodeAddressSpec.toJSON(message.primaryV6AddressSpec)
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
        const message = { ...baseNetworkInterfaceSpec };
        message.subnetIds = [];
        message.securityGroupIds = [];
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(e);
            }
        }
        if (object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null) {
            message.primaryV4AddressSpec = exports.NodeAddressSpec.fromPartial(object.primaryV4AddressSpec);
        }
        else {
            message.primaryV4AddressSpec = undefined;
        }
        if (object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null) {
            message.primaryV6AddressSpec = exports.NodeAddressSpec.fromPartial(object.primaryV6AddressSpec);
        }
        else {
            message.primaryV6AddressSpec = undefined;
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
const baseNodeAddressSpec = {};
exports.NodeAddressSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.oneToOneNatSpec !== undefined) {
            exports.OneToOneNatSpec.encode(message.oneToOneNatSpec, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeAddressSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oneToOneNatSpec = exports.OneToOneNatSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNodeAddressSpec };
        if (object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null) {
            message.oneToOneNatSpec = exports.OneToOneNatSpec.fromJSON(object.oneToOneNatSpec);
        }
        else {
            message.oneToOneNatSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.oneToOneNatSpec !== undefined &&
            (obj.oneToOneNatSpec = message.oneToOneNatSpec
                ? exports.OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNodeAddressSpec };
        if (object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null) {
            message.oneToOneNatSpec = exports.OneToOneNatSpec.fromPartial(object.oneToOneNatSpec);
        }
        else {
            message.oneToOneNatSpec = undefined;
        }
        return message;
    },
};
const baseOneToOneNatSpec = { ipVersion: 0 };
exports.OneToOneNatSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ipVersion !== 0) {
            writer.uint32(8).int32(message.ipVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOneToOneNatSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipVersion = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOneToOneNatSpec };
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = ipVersionFromJSON(object.ipVersion);
        }
        else {
            message.ipVersion = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOneToOneNatSpec };
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        }
        else {
            message.ipVersion = 0;
        }
        return message;
    },
};
const baseResourcesSpec = {
    memory: 0,
    cores: 0,
    coreFraction: 0,
    gpus: 0,
};
exports.ResourcesSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.memory !== 0) {
            writer.uint32(8).int64(message.memory);
        }
        if (message.cores !== 0) {
            writer.uint32(16).int64(message.cores);
        }
        if (message.coreFraction !== 0) {
            writer.uint32(24).int64(message.coreFraction);
        }
        if (message.gpus !== 0) {
            writer.uint32(32).int64(message.gpus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourcesSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memory = longToNumber(reader.int64());
                    break;
                case 2:
                    message.cores = longToNumber(reader.int64());
                    break;
                case 3:
                    message.coreFraction = longToNumber(reader.int64());
                    break;
                case 4:
                    message.gpus = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResourcesSpec };
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = Number(object.memory);
        }
        else {
            message.memory = 0;
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = Number(object.cores);
        }
        else {
            message.cores = 0;
        }
        if (object.coreFraction !== undefined && object.coreFraction !== null) {
            message.coreFraction = Number(object.coreFraction);
        }
        else {
            message.coreFraction = 0;
        }
        if (object.gpus !== undefined && object.gpus !== null) {
            message.gpus = Number(object.gpus);
        }
        else {
            message.gpus = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.memory !== undefined && (obj.memory = message.memory);
        message.cores !== undefined && (obj.cores = message.cores);
        message.coreFraction !== undefined &&
            (obj.coreFraction = message.coreFraction);
        message.gpus !== undefined && (obj.gpus = message.gpus);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResourcesSpec };
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = object.memory;
        }
        else {
            message.memory = 0;
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = object.cores;
        }
        else {
            message.cores = 0;
        }
        if (object.coreFraction !== undefined && object.coreFraction !== null) {
            message.coreFraction = object.coreFraction;
        }
        else {
            message.coreFraction = 0;
        }
        if (object.gpus !== undefined && object.gpus !== null) {
            message.gpus = object.gpus;
        }
        else {
            message.gpus = 0;
        }
        return message;
    },
};
const baseDiskSpec = { diskTypeId: '', diskSize: 0 };
exports.DiskSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.diskTypeId !== '') {
            writer.uint32(10).string(message.diskTypeId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(16).int64(message.diskSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDiskSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskTypeId = reader.string();
                    break;
                case 2:
                    message.diskSize = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDiskSpec };
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = String(object.diskTypeId);
        }
        else {
            message.diskTypeId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = Number(object.diskSize);
        }
        else {
            message.diskSize = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.diskTypeId !== undefined &&
            (obj.diskTypeId = message.diskTypeId);
        message.diskSize !== undefined && (obj.diskSize = message.diskSize);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDiskSpec };
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = object.diskTypeId;
        }
        else {
            message.diskTypeId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = object.diskSize;
        }
        else {
            message.diskSize = 0;
        }
        return message;
    },
};
const baseSchedulingPolicy = { preemptible: false };
exports.SchedulingPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.preemptible === true) {
            writer.uint32(8).bool(message.preemptible);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchedulingPolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.preemptible = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSchedulingPolicy };
        if (object.preemptible !== undefined && object.preemptible !== null) {
            message.preemptible = Boolean(object.preemptible);
        }
        else {
            message.preemptible = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.preemptible !== undefined &&
            (obj.preemptible = message.preemptible);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSchedulingPolicy };
        if (object.preemptible !== undefined && object.preemptible !== null) {
            message.preemptible = object.preemptible;
        }
        else {
            message.preemptible = false;
        }
        return message;
    },
};
const basePlacementPolicy = { placementGroupId: '' };
exports.PlacementPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlacementPolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePlacementPolicy };
        if (object.placementGroupId !== undefined &&
            object.placementGroupId !== null) {
            message.placementGroupId = String(object.placementGroupId);
        }
        else {
            message.placementGroupId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePlacementPolicy };
        if (object.placementGroupId !== undefined &&
            object.placementGroupId !== null) {
            message.placementGroupId = object.placementGroupId;
        }
        else {
            message.placementGroupId = '';
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
