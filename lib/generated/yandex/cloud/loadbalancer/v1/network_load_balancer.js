/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { HealthCheck } from '../../../../yandex/cloud/loadbalancer/v1/health_check';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.loadbalancer.v1';
/**
 * IP version of the addresses that the load balancer works with.
 * Only IPv4 is currently available.
 */
export var IpVersion;
(function (IpVersion) {
    IpVersion[IpVersion["IP_VERSION_UNSPECIFIED"] = 0] = "IP_VERSION_UNSPECIFIED";
    /** IPV4 - IPv4 */
    IpVersion[IpVersion["IPV4"] = 1] = "IPV4";
    /** IPV6 - IPv6 */
    IpVersion[IpVersion["IPV6"] = 2] = "IPV6";
    IpVersion[IpVersion["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IpVersion || (IpVersion = {}));
export function ipVersionFromJSON(object) {
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
export function ipVersionToJSON(object) {
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
export var NetworkLoadBalancer_Status;
(function (NetworkLoadBalancer_Status) {
    NetworkLoadBalancer_Status[NetworkLoadBalancer_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Network load balancer is being created. */
    NetworkLoadBalancer_Status[NetworkLoadBalancer_Status["CREATING"] = 1] = "CREATING";
    /** STARTING - Network load balancer is being started. */
    NetworkLoadBalancer_Status[NetworkLoadBalancer_Status["STARTING"] = 2] = "STARTING";
    /** ACTIVE - Network load balancer is active and sends traffic to the targets. */
    NetworkLoadBalancer_Status[NetworkLoadBalancer_Status["ACTIVE"] = 3] = "ACTIVE";
    /** STOPPING - Network load balancer is being stopped. */
    NetworkLoadBalancer_Status[NetworkLoadBalancer_Status["STOPPING"] = 4] = "STOPPING";
    /** STOPPED - Network load balancer is stopped and doesn't send traffic to the targets. */
    NetworkLoadBalancer_Status[NetworkLoadBalancer_Status["STOPPED"] = 5] = "STOPPED";
    /** DELETING - Network load balancer is being deleted. */
    NetworkLoadBalancer_Status[NetworkLoadBalancer_Status["DELETING"] = 6] = "DELETING";
    /**
     * INACTIVE - The load balancer doesn't have any listeners or target groups, or
     * attached target groups are empty. The load balancer doesn't perform any health checks or
     * send traffic in this state.
     */
    NetworkLoadBalancer_Status[NetworkLoadBalancer_Status["INACTIVE"] = 7] = "INACTIVE";
    NetworkLoadBalancer_Status[NetworkLoadBalancer_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NetworkLoadBalancer_Status || (NetworkLoadBalancer_Status = {}));
export function networkLoadBalancer_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return NetworkLoadBalancer_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return NetworkLoadBalancer_Status.CREATING;
        case 2:
        case 'STARTING':
            return NetworkLoadBalancer_Status.STARTING;
        case 3:
        case 'ACTIVE':
            return NetworkLoadBalancer_Status.ACTIVE;
        case 4:
        case 'STOPPING':
            return NetworkLoadBalancer_Status.STOPPING;
        case 5:
        case 'STOPPED':
            return NetworkLoadBalancer_Status.STOPPED;
        case 6:
        case 'DELETING':
            return NetworkLoadBalancer_Status.DELETING;
        case 7:
        case 'INACTIVE':
            return NetworkLoadBalancer_Status.INACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NetworkLoadBalancer_Status.UNRECOGNIZED;
    }
}
export function networkLoadBalancer_StatusToJSON(object) {
    switch (object) {
        case NetworkLoadBalancer_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case NetworkLoadBalancer_Status.CREATING:
            return 'CREATING';
        case NetworkLoadBalancer_Status.STARTING:
            return 'STARTING';
        case NetworkLoadBalancer_Status.ACTIVE:
            return 'ACTIVE';
        case NetworkLoadBalancer_Status.STOPPING:
            return 'STOPPING';
        case NetworkLoadBalancer_Status.STOPPED:
            return 'STOPPED';
        case NetworkLoadBalancer_Status.DELETING:
            return 'DELETING';
        case NetworkLoadBalancer_Status.INACTIVE:
            return 'INACTIVE';
        default:
            return 'UNKNOWN';
    }
}
/** Type of the load balancer. Only external load balancers are currently available. */
export var NetworkLoadBalancer_Type;
(function (NetworkLoadBalancer_Type) {
    NetworkLoadBalancer_Type[NetworkLoadBalancer_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** EXTERNAL - External network load balancer. */
    NetworkLoadBalancer_Type[NetworkLoadBalancer_Type["EXTERNAL"] = 1] = "EXTERNAL";
    /** INTERNAL - Internal network load balancer. */
    NetworkLoadBalancer_Type[NetworkLoadBalancer_Type["INTERNAL"] = 2] = "INTERNAL";
    NetworkLoadBalancer_Type[NetworkLoadBalancer_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NetworkLoadBalancer_Type || (NetworkLoadBalancer_Type = {}));
export function networkLoadBalancer_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return NetworkLoadBalancer_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'EXTERNAL':
            return NetworkLoadBalancer_Type.EXTERNAL;
        case 2:
        case 'INTERNAL':
            return NetworkLoadBalancer_Type.INTERNAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NetworkLoadBalancer_Type.UNRECOGNIZED;
    }
}
export function networkLoadBalancer_TypeToJSON(object) {
    switch (object) {
        case NetworkLoadBalancer_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case NetworkLoadBalancer_Type.EXTERNAL:
            return 'EXTERNAL';
        case NetworkLoadBalancer_Type.INTERNAL:
            return 'INTERNAL';
        default:
            return 'UNKNOWN';
    }
}
/**
 * Type of session affinity. Only 5-tuple affinity is currently available.
 * For more information, see [Load Balancer concepts](/docs/network-load-balancer/concepts/).
 */
export var NetworkLoadBalancer_SessionAffinity;
(function (NetworkLoadBalancer_SessionAffinity) {
    NetworkLoadBalancer_SessionAffinity[NetworkLoadBalancer_SessionAffinity["SESSION_AFFINITY_UNSPECIFIED"] = 0] = "SESSION_AFFINITY_UNSPECIFIED";
    /** CLIENT_IP_PORT_PROTO - 5-tuple affinity. */
    NetworkLoadBalancer_SessionAffinity[NetworkLoadBalancer_SessionAffinity["CLIENT_IP_PORT_PROTO"] = 1] = "CLIENT_IP_PORT_PROTO";
    NetworkLoadBalancer_SessionAffinity[NetworkLoadBalancer_SessionAffinity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NetworkLoadBalancer_SessionAffinity || (NetworkLoadBalancer_SessionAffinity = {}));
export function networkLoadBalancer_SessionAffinityFromJSON(object) {
    switch (object) {
        case 0:
        case 'SESSION_AFFINITY_UNSPECIFIED':
            return NetworkLoadBalancer_SessionAffinity.SESSION_AFFINITY_UNSPECIFIED;
        case 1:
        case 'CLIENT_IP_PORT_PROTO':
            return NetworkLoadBalancer_SessionAffinity.CLIENT_IP_PORT_PROTO;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NetworkLoadBalancer_SessionAffinity.UNRECOGNIZED;
    }
}
export function networkLoadBalancer_SessionAffinityToJSON(object) {
    switch (object) {
        case NetworkLoadBalancer_SessionAffinity.SESSION_AFFINITY_UNSPECIFIED:
            return 'SESSION_AFFINITY_UNSPECIFIED';
        case NetworkLoadBalancer_SessionAffinity.CLIENT_IP_PORT_PROTO:
            return 'CLIENT_IP_PORT_PROTO';
        default:
            return 'UNKNOWN';
    }
}
/** Network protocol to use. */
export var Listener_Protocol;
(function (Listener_Protocol) {
    Listener_Protocol[Listener_Protocol["PROTOCOL_UNSPECIFIED"] = 0] = "PROTOCOL_UNSPECIFIED";
    Listener_Protocol[Listener_Protocol["TCP"] = 1] = "TCP";
    Listener_Protocol[Listener_Protocol["UDP"] = 2] = "UDP";
    Listener_Protocol[Listener_Protocol["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Listener_Protocol || (Listener_Protocol = {}));
export function listener_ProtocolFromJSON(object) {
    switch (object) {
        case 0:
        case 'PROTOCOL_UNSPECIFIED':
            return Listener_Protocol.PROTOCOL_UNSPECIFIED;
        case 1:
        case 'TCP':
            return Listener_Protocol.TCP;
        case 2:
        case 'UDP':
            return Listener_Protocol.UDP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Listener_Protocol.UNRECOGNIZED;
    }
}
export function listener_ProtocolToJSON(object) {
    switch (object) {
        case Listener_Protocol.PROTOCOL_UNSPECIFIED:
            return 'PROTOCOL_UNSPECIFIED';
        case Listener_Protocol.TCP:
            return 'TCP';
        case Listener_Protocol.UDP:
            return 'UDP';
        default:
            return 'UNKNOWN';
    }
}
/** Status of the target. */
export var TargetState_Status;
(function (TargetState_Status) {
    TargetState_Status[TargetState_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** INITIAL - The network load balancer is setting up health checks for this target. */
    TargetState_Status[TargetState_Status["INITIAL"] = 1] = "INITIAL";
    /** HEALTHY - Health check passed and the target is ready to receive traffic. */
    TargetState_Status[TargetState_Status["HEALTHY"] = 2] = "HEALTHY";
    /** UNHEALTHY - Health check failed and the target is not receiving traffic. */
    TargetState_Status[TargetState_Status["UNHEALTHY"] = 3] = "UNHEALTHY";
    /** DRAINING - Target is being deleted and the network load balancer is no longer sending traffic to this target. */
    TargetState_Status[TargetState_Status["DRAINING"] = 4] = "DRAINING";
    /** INACTIVE - The network load balancer is stopped and not performing health checks on this target. */
    TargetState_Status[TargetState_Status["INACTIVE"] = 5] = "INACTIVE";
    TargetState_Status[TargetState_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TargetState_Status || (TargetState_Status = {}));
export function targetState_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return TargetState_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'INITIAL':
            return TargetState_Status.INITIAL;
        case 2:
        case 'HEALTHY':
            return TargetState_Status.HEALTHY;
        case 3:
        case 'UNHEALTHY':
            return TargetState_Status.UNHEALTHY;
        case 4:
        case 'DRAINING':
            return TargetState_Status.DRAINING;
        case 5:
        case 'INACTIVE':
            return TargetState_Status.INACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TargetState_Status.UNRECOGNIZED;
    }
}
export function targetState_StatusToJSON(object) {
    switch (object) {
        case TargetState_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case TargetState_Status.INITIAL:
            return 'INITIAL';
        case TargetState_Status.HEALTHY:
            return 'HEALTHY';
        case TargetState_Status.UNHEALTHY:
            return 'UNHEALTHY';
        case TargetState_Status.DRAINING:
            return 'DRAINING';
        case TargetState_Status.INACTIVE:
            return 'INACTIVE';
        default:
            return 'UNKNOWN';
    }
}
const baseNetworkLoadBalancer = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    regionId: '',
    status: 0,
    type: 0,
    sessionAffinity: 0,
};
export const NetworkLoadBalancer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            NetworkLoadBalancer_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.regionId !== '') {
            writer.uint32(58).string(message.regionId);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.type !== 0) {
            writer.uint32(80).int32(message.type);
        }
        if (message.sessionAffinity !== 0) {
            writer.uint32(88).int32(message.sessionAffinity);
        }
        for (const v of message.listeners) {
            Listener.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.attachedTargetGroups) {
            AttachedTargetGroup.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkLoadBalancer };
        message.labels = {};
        message.listeners = [];
        message.attachedTargetGroups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = NetworkLoadBalancer_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.regionId = reader.string();
                    break;
                case 9:
                    message.status = reader.int32();
                    break;
                case 10:
                    message.type = reader.int32();
                    break;
                case 11:
                    message.sessionAffinity = reader.int32();
                    break;
                case 12:
                    message.listeners.push(Listener.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.attachedTargetGroups.push(AttachedTargetGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNetworkLoadBalancer };
        message.labels = {};
        message.listeners = [];
        message.attachedTargetGroups = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
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
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = String(object.regionId);
        }
        else {
            message.regionId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = networkLoadBalancer_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = networkLoadBalancer_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.sessionAffinity !== undefined &&
            object.sessionAffinity !== null) {
            message.sessionAffinity =
                networkLoadBalancer_SessionAffinityFromJSON(object.sessionAffinity);
        }
        else {
            message.sessionAffinity = 0;
        }
        if (object.listeners !== undefined && object.listeners !== null) {
            for (const e of object.listeners) {
                message.listeners.push(Listener.fromJSON(e));
            }
        }
        if (object.attachedTargetGroups !== undefined &&
            object.attachedTargetGroups !== null) {
            for (const e of object.attachedTargetGroups) {
                message.attachedTargetGroups.push(AttachedTargetGroup.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
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
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.status !== undefined &&
            (obj.status = networkLoadBalancer_StatusToJSON(message.status));
        message.type !== undefined &&
            (obj.type = networkLoadBalancer_TypeToJSON(message.type));
        message.sessionAffinity !== undefined &&
            (obj.sessionAffinity = networkLoadBalancer_SessionAffinityToJSON(message.sessionAffinity));
        if (message.listeners) {
            obj.listeners = message.listeners.map((e) => e ? Listener.toJSON(e) : undefined);
        }
        else {
            obj.listeners = [];
        }
        if (message.attachedTargetGroups) {
            obj.attachedTargetGroups = message.attachedTargetGroups.map((e) => e ? AttachedTargetGroup.toJSON(e) : undefined);
        }
        else {
            obj.attachedTargetGroups = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNetworkLoadBalancer };
        message.labels = {};
        message.listeners = [];
        message.attachedTargetGroups = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
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
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = object.regionId;
        }
        else {
            message.regionId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.sessionAffinity !== undefined &&
            object.sessionAffinity !== null) {
            message.sessionAffinity = object.sessionAffinity;
        }
        else {
            message.sessionAffinity = 0;
        }
        if (object.listeners !== undefined && object.listeners !== null) {
            for (const e of object.listeners) {
                message.listeners.push(Listener.fromPartial(e));
            }
        }
        if (object.attachedTargetGroups !== undefined &&
            object.attachedTargetGroups !== null) {
            for (const e of object.attachedTargetGroups) {
                message.attachedTargetGroups.push(AttachedTargetGroup.fromPartial(e));
            }
        }
        return message;
    },
};
const baseNetworkLoadBalancer_LabelsEntry = { key: '', value: '' };
export const NetworkLoadBalancer_LabelsEntry = {
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
            ...baseNetworkLoadBalancer_LabelsEntry,
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
            ...baseNetworkLoadBalancer_LabelsEntry,
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
            ...baseNetworkLoadBalancer_LabelsEntry,
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
const baseAttachedTargetGroup = { targetGroupId: '' };
export const AttachedTargetGroup = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.targetGroupId !== '') {
            writer.uint32(10).string(message.targetGroupId);
        }
        for (const v of message.healthChecks) {
            HealthCheck.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttachedTargetGroup };
        message.healthChecks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupId = reader.string();
                    break;
                case 2:
                    message.healthChecks.push(HealthCheck.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAttachedTargetGroup };
        message.healthChecks = [];
        if (object.targetGroupId !== undefined &&
            object.targetGroupId !== null) {
            message.targetGroupId = String(object.targetGroupId);
        }
        else {
            message.targetGroupId = '';
        }
        if (object.healthChecks !== undefined && object.healthChecks !== null) {
            for (const e of object.healthChecks) {
                message.healthChecks.push(HealthCheck.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.targetGroupId !== undefined &&
            (obj.targetGroupId = message.targetGroupId);
        if (message.healthChecks) {
            obj.healthChecks = message.healthChecks.map((e) => e ? HealthCheck.toJSON(e) : undefined);
        }
        else {
            obj.healthChecks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAttachedTargetGroup };
        message.healthChecks = [];
        if (object.targetGroupId !== undefined &&
            object.targetGroupId !== null) {
            message.targetGroupId = object.targetGroupId;
        }
        else {
            message.targetGroupId = '';
        }
        if (object.healthChecks !== undefined && object.healthChecks !== null) {
            for (const e of object.healthChecks) {
                message.healthChecks.push(HealthCheck.fromPartial(e));
            }
        }
        return message;
    },
};
const baseListener = {
    name: '',
    address: '',
    port: 0,
    protocol: 0,
    targetPort: 0,
    subnetId: '',
    ipVersion: 0,
};
export const Listener = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.address !== '') {
            writer.uint32(18).string(message.address);
        }
        if (message.port !== 0) {
            writer.uint32(24).int64(message.port);
        }
        if (message.protocol !== 0) {
            writer.uint32(32).int32(message.protocol);
        }
        if (message.targetPort !== 0) {
            writer.uint32(40).int64(message.targetPort);
        }
        if (message.subnetId !== '') {
            writer.uint32(50).string(message.subnetId);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(56).int32(message.ipVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListener };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.port = longToNumber(reader.int64());
                    break;
                case 4:
                    message.protocol = reader.int32();
                    break;
                case 5:
                    message.targetPort = longToNumber(reader.int64());
                    break;
                case 6:
                    message.subnetId = reader.string();
                    break;
                case 7:
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
        const message = { ...baseListener };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        }
        else {
            message.port = 0;
        }
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = listener_ProtocolFromJSON(object.protocol);
        }
        else {
            message.protocol = 0;
        }
        if (object.targetPort !== undefined && object.targetPort !== null) {
            message.targetPort = Number(object.targetPort);
        }
        else {
            message.targetPort = 0;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
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
        message.name !== undefined && (obj.name = message.name);
        message.address !== undefined && (obj.address = message.address);
        message.port !== undefined && (obj.port = message.port);
        message.protocol !== undefined &&
            (obj.protocol = listener_ProtocolToJSON(message.protocol));
        message.targetPort !== undefined &&
            (obj.targetPort = message.targetPort);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListener };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = 0;
        }
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = object.protocol;
        }
        else {
            message.protocol = 0;
        }
        if (object.targetPort !== undefined && object.targetPort !== null) {
            message.targetPort = object.targetPort;
        }
        else {
            message.targetPort = 0;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        }
        else {
            message.ipVersion = 0;
        }
        return message;
    },
};
const baseTargetState = { subnetId: '', address: '', status: 0 };
export const TargetState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        if (message.address !== '') {
            writer.uint32(18).string(message.address);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTargetState };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTargetState };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        }
        else {
            message.subnetId = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = targetState_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.address !== undefined && (obj.address = message.address);
        message.status !== undefined &&
            (obj.status = targetState_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTargetState };
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        }
        else {
            message.subnetId = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
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
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
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