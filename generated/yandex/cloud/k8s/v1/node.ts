/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.k8s.v1';

export enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address, for example 192.168.0.0. */
    IPV4 = 1,
    /** IPV6 - IPv6 address, not available yet. */
    IPV6 = 2,
    UNRECOGNIZED = -1,
}

export function ipVersionFromJSON(object: any): IpVersion {
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

export function ipVersionToJSON(object: IpVersion): string {
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

export interface Node {
    /** Computed node status. */
    status: Node_Status;
    /** Node specificaion. */
    spec: Node_Spec | undefined;
    /**
     * Cloud instance status.
     * Not available in `MISSING` status.
     */
    cloudStatus: Node_CloudStatus | undefined;
    /**
     * Kubernetes node status.
     * Not available in `PROVISIONING` and `NOT_CONNECTED` states.
     */
    kubernetesStatus: Node_KubernetesStatus | undefined;
}

/** Computed node status. */
export enum Node_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Node instance is not yet created (e.g. in progress). */
    PROVISIONING = 1,
    /**
     * NOT_CONNECTED - Node instance is created but not registered
     * (e.g. is still initializing).
     */
    NOT_CONNECTED = 2,
    /**
     * NOT_READY - Node has connected but is not ready for
     * workload (see conditions for details).
     */
    NOT_READY = 3,
    /** READY - Node has connected and ready for workload. */
    READY = 4,
    /**
     * MISSING - Node is still registered but its instance
     * is deleted (this is our bug).
     */
    MISSING = 5,
    UNRECOGNIZED = -1,
}

export function node_StatusFromJSON(object: any): Node_Status {
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

export function node_StatusToJSON(object: Node_Status): string {
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

/** Kubernetes node info */
export interface Node_KubernetesStatus {
    /** Node id (and instance name) */
    id: string;
    /**
     * Conditions is an array of current observed node conditions.
     * More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
     */
    conditions: Condition[];
    /** If specified, the node's taints. */
    taints: Taint[];
    /** List of volumes that are attached to the node. */
    attachedVolumes: AttachedVolume[];
}

/** Cloud instance info */
export interface Node_CloudStatus {
    /** Compute instance id */
    id: string;
    /** IG instance status */
    status: string;
    /** IG instance status message */
    statusMessage: string;
}

/** Node specification. */
export interface Node_Spec {
    /** Node group specified resources. */
    resources: ResourcesSpec | undefined;
    /** Node group specified disk. */
    disk: DiskSpec | undefined;
}

export interface Condition {
    /** Type of node condition. */
    type: string;
    /** Status is the status of the condition. */
    status: string;
    /** Human-readable message indicating details about last transition. */
    message: string;
    /** Last time we got an update on a given condition. */
    lastHeartbeatTime: Date | undefined;
    /** Last time the condition transit from one status to another. */
    lastTransitionTime: Date | undefined;
}

export interface Taint {
    /** The taint key to be applied to a node. */
    key: string;
    /** The taint value corresponding to the taint key. */
    value: string;
    /** The effect of the taint on pods that do not tolerate the taint. */
    effect: Taint_Effect;
}

export enum Taint_Effect {
    EFFECT_UNSPECIFIED = 0,
    /**
     * NO_SCHEDULE - Do not allow new pods to schedule onto the node unless they tolerate the taint,
     * but allow all pods submitted to Kubelet without going through the scheduler
     * to start, and allow all already-running pods to continue running.
     */
    NO_SCHEDULE = 1,
    /**
     * PREFER_NO_SCHEDULE - Like NO_SCHEDULE, but the scheduler tries not to schedule
     * new pods onto the node, rather than prohibiting new pods from scheduling
     * onto the node entirely. Enforced by the scheduler.
     */
    PREFER_NO_SCHEDULE = 2,
    /** NO_EXECUTE - Evict any already-running pods that do not tolerate the taint. */
    NO_EXECUTE = 3,
    UNRECOGNIZED = -1,
}

export function taint_EffectFromJSON(object: any): Taint_Effect {
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

export function taint_EffectToJSON(object: Taint_Effect): string {
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

/** AttachedVolume describes a volume attached to a node */
export interface AttachedVolume {
    /** Name of the driver which has attached the volume */
    driverName: string;
    /** Volume handle (cloud disk id) */
    volumeHandle: string;
}

export interface NodeTemplate {
    /** ID of the hardware platform configuration for the node. */
    platformId: string;
    /** Computing resources of the node such as the amount of memory and number of cores. */
    resourcesSpec: ResourcesSpec | undefined;
    /** Specification for the boot disk that will be attached to the node. */
    bootDiskSpec: DiskSpec | undefined;
    /**
     * The metadata as `key:value` pairs assigned to this instance template. This includes custom metadata and predefined keys.
     *
     * For example, you may use the metadata in order to provide your public SSH key to the node.
     * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
     */
    metadata: { [key: string]: string };
    /**
     * Specification for the create network interfaces for the node group compute instances.
     * Deprecated, please use network_interface_specs.
     *
     * @deprecated
     */
    v4AddressSpec: NodeAddressSpec | undefined;
    /** Scheduling policy configuration. */
    schedulingPolicy: SchedulingPolicy | undefined;
    /**
     * New api, to specify network interfaces for the node group compute instances.
     * Can not be used together with 'v4_address_spec'
     */
    networkInterfaceSpecs: NetworkInterfaceSpec[];
    placementPolicy: PlacementPolicy | undefined;
    /** this parameter allows to specify type of network acceleration used on nodes (instances) */
    networkSettings: NodeTemplate_NetworkSettings | undefined;
}

export interface NodeTemplate_MetadataEntry {
    key: string;
    value: string;
}

export interface NodeTemplate_NetworkSettings {
    type: NodeTemplate_NetworkSettings_Type;
}

export enum NodeTemplate_NetworkSettings_Type {
    TYPE_UNSPECIFIED = 0,
    STANDARD = 1,
    /**
     * SOFTWARE_ACCELERATED - unsupported yet, commented for possible future utilization.
     * HARDWARE_ACCELERATED = 3;
     */
    SOFTWARE_ACCELERATED = 2,
    UNRECOGNIZED = -1,
}

export function nodeTemplate_NetworkSettings_TypeFromJSON(
    object: any
): NodeTemplate_NetworkSettings_Type {
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

export function nodeTemplate_NetworkSettings_TypeToJSON(
    object: NodeTemplate_NetworkSettings_Type
): string {
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

export interface NetworkInterfaceSpec {
    /** IDs of the subnets. */
    subnetIds: string[];
    /** Primary IPv4 address that is assigned to the instance for this network interface. */
    primaryV4AddressSpec: NodeAddressSpec | undefined;
    /** Primary IPv6 address that is assigned to the instance for this network interface. */
    primaryV6AddressSpec: NodeAddressSpec | undefined;
    /** IDs of security groups. */
    securityGroupIds: string[];
}

export interface NodeAddressSpec {
    /** One-to-one NAT configuration. Setting up one-to-one NAT ensures that public IP addresses are assigned to nodes, and therefore internet is accessible for all nodes of the node group. If the field is not set, NAT will not be set up. */
    oneToOneNatSpec: OneToOneNatSpec | undefined;
}

export interface OneToOneNatSpec {
    /** IP version for the public IP address. */
    ipVersion: IpVersion;
}

export interface ResourcesSpec {
    /** Amount of memory available to the node, specified in bytes. */
    memory: number;
    /** Number of cores available to the node. */
    cores: number;
    /**
     * Baseline level of CPU performance with the possibility to burst performance above that baseline level.
     * This field sets baseline performance for each core.
     */
    coreFraction: number;
    /** Number of GPUs available to the node. */
    gpus: number;
}

export interface DiskSpec {
    /** ID of the disk type. */
    diskTypeId: string;
    /** Size of the disk, specified in bytes. */
    diskSize: number;
}

export interface SchedulingPolicy {
    /**
     * True for preemptible compute instances. Default value is false. Preemptible compute instances are stopped at least once every 24 hours, and can be stopped at any time
     * if their resources are needed by Compute.
     * For more information, see [Preemptible Virtual Machines](/docs/compute/concepts/preemptible-vm).
     */
    preemptible: boolean;
}

export interface PlacementPolicy {
    /** Identifier of placement group */
    placementGroupId: string;
}

const baseNode: object = { status: 0 };

export const Node = {
    encode(
        message: Node,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.spec !== undefined) {
            Node_Spec.encode(message.spec, writer.uint32(18).fork()).ldelim();
        }
        if (message.cloudStatus !== undefined) {
            Node_CloudStatus.encode(
                message.cloudStatus,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.kubernetesStatus !== undefined) {
            Node_KubernetesStatus.encode(
                message.kubernetesStatus,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Node {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNode } as Node;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32() as any;
                    break;
                case 2:
                    message.spec = Node_Spec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.cloudStatus = Node_CloudStatus.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.kubernetesStatus = Node_KubernetesStatus.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Node {
        const message = { ...baseNode } as Node;
        if (object.status !== undefined && object.status !== null) {
            message.status = node_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.spec !== undefined && object.spec !== null) {
            message.spec = Node_Spec.fromJSON(object.spec);
        } else {
            message.spec = undefined;
        }
        if (object.cloudStatus !== undefined && object.cloudStatus !== null) {
            message.cloudStatus = Node_CloudStatus.fromJSON(object.cloudStatus);
        } else {
            message.cloudStatus = undefined;
        }
        if (
            object.kubernetesStatus !== undefined &&
            object.kubernetesStatus !== null
        ) {
            message.kubernetesStatus = Node_KubernetesStatus.fromJSON(
                object.kubernetesStatus
            );
        } else {
            message.kubernetesStatus = undefined;
        }
        return message;
    },

    toJSON(message: Node): unknown {
        const obj: any = {};
        message.status !== undefined &&
            (obj.status = node_StatusToJSON(message.status));
        message.spec !== undefined &&
            (obj.spec = message.spec
                ? Node_Spec.toJSON(message.spec)
                : undefined);
        message.cloudStatus !== undefined &&
            (obj.cloudStatus = message.cloudStatus
                ? Node_CloudStatus.toJSON(message.cloudStatus)
                : undefined);
        message.kubernetesStatus !== undefined &&
            (obj.kubernetesStatus = message.kubernetesStatus
                ? Node_KubernetesStatus.toJSON(message.kubernetesStatus)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Node>): Node {
        const message = { ...baseNode } as Node;
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.spec !== undefined && object.spec !== null) {
            message.spec = Node_Spec.fromPartial(object.spec);
        } else {
            message.spec = undefined;
        }
        if (object.cloudStatus !== undefined && object.cloudStatus !== null) {
            message.cloudStatus = Node_CloudStatus.fromPartial(
                object.cloudStatus
            );
        } else {
            message.cloudStatus = undefined;
        }
        if (
            object.kubernetesStatus !== undefined &&
            object.kubernetesStatus !== null
        ) {
            message.kubernetesStatus = Node_KubernetesStatus.fromPartial(
                object.kubernetesStatus
            );
        } else {
            message.kubernetesStatus = undefined;
        }
        return message;
    },
};

const baseNode_KubernetesStatus: object = { id: '' };

export const Node_KubernetesStatus = {
    encode(
        message: Node_KubernetesStatus,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.conditions) {
            Condition.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.taints) {
            Taint.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.attachedVolumes) {
            AttachedVolume.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Node_KubernetesStatus {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseNode_KubernetesStatus,
        } as Node_KubernetesStatus;
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
                    message.conditions.push(
                        Condition.decode(reader, reader.uint32())
                    );
                    break;
                case 3:
                    message.taints.push(Taint.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.attachedVolumes.push(
                        AttachedVolume.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Node_KubernetesStatus {
        const message = {
            ...baseNode_KubernetesStatus,
        } as Node_KubernetesStatus;
        message.conditions = [];
        message.taints = [];
        message.attachedVolumes = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.conditions !== undefined && object.conditions !== null) {
            for (const e of object.conditions) {
                message.conditions.push(Condition.fromJSON(e));
            }
        }
        if (object.taints !== undefined && object.taints !== null) {
            for (const e of object.taints) {
                message.taints.push(Taint.fromJSON(e));
            }
        }
        if (
            object.attachedVolumes !== undefined &&
            object.attachedVolumes !== null
        ) {
            for (const e of object.attachedVolumes) {
                message.attachedVolumes.push(AttachedVolume.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: Node_KubernetesStatus): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.conditions) {
            obj.conditions = message.conditions.map((e) =>
                e ? Condition.toJSON(e) : undefined
            );
        } else {
            obj.conditions = [];
        }
        if (message.taints) {
            obj.taints = message.taints.map((e) =>
                e ? Taint.toJSON(e) : undefined
            );
        } else {
            obj.taints = [];
        }
        if (message.attachedVolumes) {
            obj.attachedVolumes = message.attachedVolumes.map((e) =>
                e ? AttachedVolume.toJSON(e) : undefined
            );
        } else {
            obj.attachedVolumes = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<Node_KubernetesStatus>
    ): Node_KubernetesStatus {
        const message = {
            ...baseNode_KubernetesStatus,
        } as Node_KubernetesStatus;
        message.conditions = [];
        message.taints = [];
        message.attachedVolumes = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.conditions !== undefined && object.conditions !== null) {
            for (const e of object.conditions) {
                message.conditions.push(Condition.fromPartial(e));
            }
        }
        if (object.taints !== undefined && object.taints !== null) {
            for (const e of object.taints) {
                message.taints.push(Taint.fromPartial(e));
            }
        }
        if (
            object.attachedVolumes !== undefined &&
            object.attachedVolumes !== null
        ) {
            for (const e of object.attachedVolumes) {
                message.attachedVolumes.push(AttachedVolume.fromPartial(e));
            }
        }
        return message;
    },
};

const baseNode_CloudStatus: object = { id: '', status: '', statusMessage: '' };

export const Node_CloudStatus = {
    encode(
        message: Node_CloudStatus,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Node_CloudStatus {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNode_CloudStatus } as Node_CloudStatus;
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

    fromJSON(object: any): Node_CloudStatus {
        const message = { ...baseNode_CloudStatus } as Node_CloudStatus;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        } else {
            message.status = '';
        }
        if (
            object.statusMessage !== undefined &&
            object.statusMessage !== null
        ) {
            message.statusMessage = String(object.statusMessage);
        } else {
            message.statusMessage = '';
        }
        return message;
    },

    toJSON(message: Node_CloudStatus): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.status !== undefined && (obj.status = message.status);
        message.statusMessage !== undefined &&
            (obj.statusMessage = message.statusMessage);
        return obj;
    },

    fromPartial(object: DeepPartial<Node_CloudStatus>): Node_CloudStatus {
        const message = { ...baseNode_CloudStatus } as Node_CloudStatus;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = '';
        }
        if (
            object.statusMessage !== undefined &&
            object.statusMessage !== null
        ) {
            message.statusMessage = object.statusMessage;
        } else {
            message.statusMessage = '';
        }
        return message;
    },
};

const baseNode_Spec: object = {};

export const Node_Spec = {
    encode(
        message: Node_Spec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resources !== undefined) {
            ResourcesSpec.encode(
                message.resources,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.disk !== undefined) {
            DiskSpec.encode(message.disk, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Node_Spec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNode_Spec } as Node_Spec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = ResourcesSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.disk = DiskSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Node_Spec {
        const message = { ...baseNode_Spec } as Node_Spec;
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = ResourcesSpec.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.disk !== undefined && object.disk !== null) {
            message.disk = DiskSpec.fromJSON(object.disk);
        } else {
            message.disk = undefined;
        }
        return message;
    },

    toJSON(message: Node_Spec): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? ResourcesSpec.toJSON(message.resources)
                : undefined);
        message.disk !== undefined &&
            (obj.disk = message.disk
                ? DiskSpec.toJSON(message.disk)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Node_Spec>): Node_Spec {
        const message = { ...baseNode_Spec } as Node_Spec;
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = ResourcesSpec.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.disk !== undefined && object.disk !== null) {
            message.disk = DiskSpec.fromPartial(object.disk);
        } else {
            message.disk = undefined;
        }
        return message;
    },
};

const baseCondition: object = { type: '', status: '', message: '' };

export const Condition = {
    encode(
        message: Condition,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
            Timestamp.encode(
                toTimestamp(message.lastHeartbeatTime),
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.lastTransitionTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.lastTransitionTime),
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Condition {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCondition } as Condition;
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
                    message.lastHeartbeatTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.lastTransitionTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Condition {
        const message = { ...baseCondition } as Condition;
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        } else {
            message.type = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        } else {
            message.status = '';
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        } else {
            message.message = '';
        }
        if (
            object.lastHeartbeatTime !== undefined &&
            object.lastHeartbeatTime !== null
        ) {
            message.lastHeartbeatTime = fromJsonTimestamp(
                object.lastHeartbeatTime
            );
        } else {
            message.lastHeartbeatTime = undefined;
        }
        if (
            object.lastTransitionTime !== undefined &&
            object.lastTransitionTime !== null
        ) {
            message.lastTransitionTime = fromJsonTimestamp(
                object.lastTransitionTime
            );
        } else {
            message.lastTransitionTime = undefined;
        }
        return message;
    },

    toJSON(message: Condition): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = message.type);
        message.status !== undefined && (obj.status = message.status);
        message.message !== undefined && (obj.message = message.message);
        message.lastHeartbeatTime !== undefined &&
            (obj.lastHeartbeatTime = message.lastHeartbeatTime.toISOString());
        message.lastTransitionTime !== undefined &&
            (obj.lastTransitionTime = message.lastTransitionTime.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<Condition>): Condition {
        const message = { ...baseCondition } as Condition;
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = '';
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        } else {
            message.message = '';
        }
        if (
            object.lastHeartbeatTime !== undefined &&
            object.lastHeartbeatTime !== null
        ) {
            message.lastHeartbeatTime = object.lastHeartbeatTime;
        } else {
            message.lastHeartbeatTime = undefined;
        }
        if (
            object.lastTransitionTime !== undefined &&
            object.lastTransitionTime !== null
        ) {
            message.lastTransitionTime = object.lastTransitionTime;
        } else {
            message.lastTransitionTime = undefined;
        }
        return message;
    },
};

const baseTaint: object = { key: '', value: '', effect: 0 };

export const Taint = {
    encode(
        message: Taint,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Taint {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTaint } as Taint;
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
                    message.effect = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Taint {
        const message = { ...baseTaint } as Taint;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        if (object.effect !== undefined && object.effect !== null) {
            message.effect = taint_EffectFromJSON(object.effect);
        } else {
            message.effect = 0;
        }
        return message;
    },

    toJSON(message: Taint): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        message.effect !== undefined &&
            (obj.effect = taint_EffectToJSON(message.effect));
        return obj;
    },

    fromPartial(object: DeepPartial<Taint>): Taint {
        const message = { ...baseTaint } as Taint;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        if (object.effect !== undefined && object.effect !== null) {
            message.effect = object.effect;
        } else {
            message.effect = 0;
        }
        return message;
    },
};

const baseAttachedVolume: object = { driverName: '', volumeHandle: '' };

export const AttachedVolume = {
    encode(
        message: AttachedVolume,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.driverName !== '') {
            writer.uint32(10).string(message.driverName);
        }
        if (message.volumeHandle !== '') {
            writer.uint32(18).string(message.volumeHandle);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AttachedVolume {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttachedVolume } as AttachedVolume;
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

    fromJSON(object: any): AttachedVolume {
        const message = { ...baseAttachedVolume } as AttachedVolume;
        if (object.driverName !== undefined && object.driverName !== null) {
            message.driverName = String(object.driverName);
        } else {
            message.driverName = '';
        }
        if (object.volumeHandle !== undefined && object.volumeHandle !== null) {
            message.volumeHandle = String(object.volumeHandle);
        } else {
            message.volumeHandle = '';
        }
        return message;
    },

    toJSON(message: AttachedVolume): unknown {
        const obj: any = {};
        message.driverName !== undefined &&
            (obj.driverName = message.driverName);
        message.volumeHandle !== undefined &&
            (obj.volumeHandle = message.volumeHandle);
        return obj;
    },

    fromPartial(object: DeepPartial<AttachedVolume>): AttachedVolume {
        const message = { ...baseAttachedVolume } as AttachedVolume;
        if (object.driverName !== undefined && object.driverName !== null) {
            message.driverName = object.driverName;
        } else {
            message.driverName = '';
        }
        if (object.volumeHandle !== undefined && object.volumeHandle !== null) {
            message.volumeHandle = object.volumeHandle;
        } else {
            message.volumeHandle = '';
        }
        return message;
    },
};

const baseNodeTemplate: object = { platformId: '' };

export const NodeTemplate = {
    encode(
        message: NodeTemplate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.platformId !== '') {
            writer.uint32(10).string(message.platformId);
        }
        if (message.resourcesSpec !== undefined) {
            ResourcesSpec.encode(
                message.resourcesSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.bootDiskSpec !== undefined) {
            DiskSpec.encode(
                message.bootDiskSpec,
                writer.uint32(26).fork()
            ).ldelim();
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            NodeTemplate_MetadataEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.v4AddressSpec !== undefined) {
            NodeAddressSpec.encode(
                message.v4AddressSpec,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.schedulingPolicy !== undefined) {
            SchedulingPolicy.encode(
                message.schedulingPolicy,
                writer.uint32(50).fork()
            ).ldelim();
        }
        for (const v of message.networkInterfaceSpecs) {
            NetworkInterfaceSpec.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            PlacementPolicy.encode(
                message.placementPolicy,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.networkSettings !== undefined) {
            NodeTemplate_NetworkSettings.encode(
                message.networkSettings,
                writer.uint32(90).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NodeTemplate {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeTemplate } as NodeTemplate;
        message.metadata = {};
        message.networkInterfaceSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.platformId = reader.string();
                    break;
                case 2:
                    message.resourcesSpec = ResourcesSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.bootDiskSpec = DiskSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    const entry4 = NodeTemplate_MetadataEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.metadata[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.v4AddressSpec = NodeAddressSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.schedulingPolicy = SchedulingPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.networkInterfaceSpecs.push(
                        NetworkInterfaceSpec.decode(reader, reader.uint32())
                    );
                    break;
                case 10:
                    message.placementPolicy = PlacementPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.networkSettings =
                        NodeTemplate_NetworkSettings.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NodeTemplate {
        const message = { ...baseNodeTemplate } as NodeTemplate;
        message.metadata = {};
        message.networkInterfaceSpecs = [];
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = String(object.platformId);
        } else {
            message.platformId = '';
        }
        if (
            object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null
        ) {
            message.resourcesSpec = ResourcesSpec.fromJSON(
                object.resourcesSpec
            );
        } else {
            message.resourcesSpec = undefined;
        }
        if (object.bootDiskSpec !== undefined && object.bootDiskSpec !== null) {
            message.bootDiskSpec = DiskSpec.fromJSON(object.bootDiskSpec);
        } else {
            message.bootDiskSpec = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                message.metadata[key] = String(value);
            });
        }
        if (
            object.v4AddressSpec !== undefined &&
            object.v4AddressSpec !== null
        ) {
            message.v4AddressSpec = NodeAddressSpec.fromJSON(
                object.v4AddressSpec
            );
        } else {
            message.v4AddressSpec = undefined;
        }
        if (
            object.schedulingPolicy !== undefined &&
            object.schedulingPolicy !== null
        ) {
            message.schedulingPolicy = SchedulingPolicy.fromJSON(
                object.schedulingPolicy
            );
        } else {
            message.schedulingPolicy = undefined;
        }
        if (
            object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null
        ) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(
                    NetworkInterfaceSpec.fromJSON(e)
                );
            }
        }
        if (
            object.placementPolicy !== undefined &&
            object.placementPolicy !== null
        ) {
            message.placementPolicy = PlacementPolicy.fromJSON(
                object.placementPolicy
            );
        } else {
            message.placementPolicy = undefined;
        }
        if (
            object.networkSettings !== undefined &&
            object.networkSettings !== null
        ) {
            message.networkSettings = NodeTemplate_NetworkSettings.fromJSON(
                object.networkSettings
            );
        } else {
            message.networkSettings = undefined;
        }
        return message;
    },

    toJSON(message: NodeTemplate): unknown {
        const obj: any = {};
        message.platformId !== undefined &&
            (obj.platformId = message.platformId);
        message.resourcesSpec !== undefined &&
            (obj.resourcesSpec = message.resourcesSpec
                ? ResourcesSpec.toJSON(message.resourcesSpec)
                : undefined);
        message.bootDiskSpec !== undefined &&
            (obj.bootDiskSpec = message.bootDiskSpec
                ? DiskSpec.toJSON(message.bootDiskSpec)
                : undefined);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.v4AddressSpec !== undefined &&
            (obj.v4AddressSpec = message.v4AddressSpec
                ? NodeAddressSpec.toJSON(message.v4AddressSpec)
                : undefined);
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = message.schedulingPolicy
                ? SchedulingPolicy.toJSON(message.schedulingPolicy)
                : undefined);
        if (message.networkInterfaceSpecs) {
            obj.networkInterfaceSpecs = message.networkInterfaceSpecs.map((e) =>
                e ? NetworkInterfaceSpec.toJSON(e) : undefined
            );
        } else {
            obj.networkInterfaceSpecs = [];
        }
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? NodeTemplate_NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<NodeTemplate>): NodeTemplate {
        const message = { ...baseNodeTemplate } as NodeTemplate;
        message.metadata = {};
        message.networkInterfaceSpecs = [];
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = object.platformId;
        } else {
            message.platformId = '';
        }
        if (
            object.resourcesSpec !== undefined &&
            object.resourcesSpec !== null
        ) {
            message.resourcesSpec = ResourcesSpec.fromPartial(
                object.resourcesSpec
            );
        } else {
            message.resourcesSpec = undefined;
        }
        if (object.bootDiskSpec !== undefined && object.bootDiskSpec !== null) {
            message.bootDiskSpec = DiskSpec.fromPartial(object.bootDiskSpec);
        } else {
            message.bootDiskSpec = undefined;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        if (
            object.v4AddressSpec !== undefined &&
            object.v4AddressSpec !== null
        ) {
            message.v4AddressSpec = NodeAddressSpec.fromPartial(
                object.v4AddressSpec
            );
        } else {
            message.v4AddressSpec = undefined;
        }
        if (
            object.schedulingPolicy !== undefined &&
            object.schedulingPolicy !== null
        ) {
            message.schedulingPolicy = SchedulingPolicy.fromPartial(
                object.schedulingPolicy
            );
        } else {
            message.schedulingPolicy = undefined;
        }
        if (
            object.networkInterfaceSpecs !== undefined &&
            object.networkInterfaceSpecs !== null
        ) {
            for (const e of object.networkInterfaceSpecs) {
                message.networkInterfaceSpecs.push(
                    NetworkInterfaceSpec.fromPartial(e)
                );
            }
        }
        if (
            object.placementPolicy !== undefined &&
            object.placementPolicy !== null
        ) {
            message.placementPolicy = PlacementPolicy.fromPartial(
                object.placementPolicy
            );
        } else {
            message.placementPolicy = undefined;
        }
        if (
            object.networkSettings !== undefined &&
            object.networkSettings !== null
        ) {
            message.networkSettings = NodeTemplate_NetworkSettings.fromPartial(
                object.networkSettings
            );
        } else {
            message.networkSettings = undefined;
        }
        return message;
    },
};

const baseNodeTemplate_MetadataEntry: object = { key: '', value: '' };

export const NodeTemplate_MetadataEntry = {
    encode(
        message: NodeTemplate_MetadataEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): NodeTemplate_MetadataEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseNodeTemplate_MetadataEntry,
        } as NodeTemplate_MetadataEntry;
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

    fromJSON(object: any): NodeTemplate_MetadataEntry {
        const message = {
            ...baseNodeTemplate_MetadataEntry,
        } as NodeTemplate_MetadataEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: NodeTemplate_MetadataEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<NodeTemplate_MetadataEntry>
    ): NodeTemplate_MetadataEntry {
        const message = {
            ...baseNodeTemplate_MetadataEntry,
        } as NodeTemplate_MetadataEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseNodeTemplate_NetworkSettings: object = { type: 0 };

export const NodeTemplate_NetworkSettings = {
    encode(
        message: NodeTemplate_NetworkSettings,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): NodeTemplate_NetworkSettings {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseNodeTemplate_NetworkSettings,
        } as NodeTemplate_NetworkSettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NodeTemplate_NetworkSettings {
        const message = {
            ...baseNodeTemplate_NetworkSettings,
        } as NodeTemplate_NetworkSettings;
        if (object.type !== undefined && object.type !== null) {
            message.type = nodeTemplate_NetworkSettings_TypeFromJSON(
                object.type
            );
        } else {
            message.type = 0;
        }
        return message;
    },

    toJSON(message: NodeTemplate_NetworkSettings): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = nodeTemplate_NetworkSettings_TypeToJSON(message.type));
        return obj;
    },

    fromPartial(
        object: DeepPartial<NodeTemplate_NetworkSettings>
    ): NodeTemplate_NetworkSettings {
        const message = {
            ...baseNodeTemplate_NetworkSettings,
        } as NodeTemplate_NetworkSettings;
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        return message;
    },
};

const baseNetworkInterfaceSpec: object = {
    subnetIds: '',
    securityGroupIds: '',
};

export const NetworkInterfaceSpec = {
    encode(
        message: NetworkInterfaceSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.subnetIds) {
            writer.uint32(18).string(v!);
        }
        if (message.primaryV4AddressSpec !== undefined) {
            NodeAddressSpec.encode(
                message.primaryV4AddressSpec,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.primaryV6AddressSpec !== undefined) {
            NodeAddressSpec.encode(
                message.primaryV6AddressSpec,
                writer.uint32(34).fork()
            ).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(42).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): NetworkInterfaceSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.subnetIds = [];
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.subnetIds.push(reader.string());
                    break;
                case 3:
                    message.primaryV4AddressSpec = NodeAddressSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.primaryV6AddressSpec = NodeAddressSpec.decode(
                        reader,
                        reader.uint32()
                    );
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

    fromJSON(object: any): NetworkInterfaceSpec {
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.subnetIds = [];
        message.securityGroupIds = [];
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(String(e));
            }
        }
        if (
            object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null
        ) {
            message.primaryV4AddressSpec = NodeAddressSpec.fromJSON(
                object.primaryV4AddressSpec
            );
        } else {
            message.primaryV4AddressSpec = undefined;
        }
        if (
            object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null
        ) {
            message.primaryV6AddressSpec = NodeAddressSpec.fromJSON(
                object.primaryV6AddressSpec
            );
        } else {
            message.primaryV6AddressSpec = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: NetworkInterfaceSpec): unknown {
        const obj: any = {};
        if (message.subnetIds) {
            obj.subnetIds = message.subnetIds.map((e) => e);
        } else {
            obj.subnetIds = [];
        }
        message.primaryV4AddressSpec !== undefined &&
            (obj.primaryV4AddressSpec = message.primaryV4AddressSpec
                ? NodeAddressSpec.toJSON(message.primaryV4AddressSpec)
                : undefined);
        message.primaryV6AddressSpec !== undefined &&
            (obj.primaryV6AddressSpec = message.primaryV6AddressSpec
                ? NodeAddressSpec.toJSON(message.primaryV6AddressSpec)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<NetworkInterfaceSpec>
    ): NetworkInterfaceSpec {
        const message = { ...baseNetworkInterfaceSpec } as NetworkInterfaceSpec;
        message.subnetIds = [];
        message.securityGroupIds = [];
        if (object.subnetIds !== undefined && object.subnetIds !== null) {
            for (const e of object.subnetIds) {
                message.subnetIds.push(e);
            }
        }
        if (
            object.primaryV4AddressSpec !== undefined &&
            object.primaryV4AddressSpec !== null
        ) {
            message.primaryV4AddressSpec = NodeAddressSpec.fromPartial(
                object.primaryV4AddressSpec
            );
        } else {
            message.primaryV4AddressSpec = undefined;
        }
        if (
            object.primaryV6AddressSpec !== undefined &&
            object.primaryV6AddressSpec !== null
        ) {
            message.primaryV6AddressSpec = NodeAddressSpec.fromPartial(
                object.primaryV6AddressSpec
            );
        } else {
            message.primaryV6AddressSpec = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        return message;
    },
};

const baseNodeAddressSpec: object = {};

export const NodeAddressSpec = {
    encode(
        message: NodeAddressSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.oneToOneNatSpec !== undefined) {
            OneToOneNatSpec.encode(
                message.oneToOneNatSpec,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NodeAddressSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeAddressSpec } as NodeAddressSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oneToOneNatSpec = OneToOneNatSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NodeAddressSpec {
        const message = { ...baseNodeAddressSpec } as NodeAddressSpec;
        if (
            object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null
        ) {
            message.oneToOneNatSpec = OneToOneNatSpec.fromJSON(
                object.oneToOneNatSpec
            );
        } else {
            message.oneToOneNatSpec = undefined;
        }
        return message;
    },

    toJSON(message: NodeAddressSpec): unknown {
        const obj: any = {};
        message.oneToOneNatSpec !== undefined &&
            (obj.oneToOneNatSpec = message.oneToOneNatSpec
                ? OneToOneNatSpec.toJSON(message.oneToOneNatSpec)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<NodeAddressSpec>): NodeAddressSpec {
        const message = { ...baseNodeAddressSpec } as NodeAddressSpec;
        if (
            object.oneToOneNatSpec !== undefined &&
            object.oneToOneNatSpec !== null
        ) {
            message.oneToOneNatSpec = OneToOneNatSpec.fromPartial(
                object.oneToOneNatSpec
            );
        } else {
            message.oneToOneNatSpec = undefined;
        }
        return message;
    },
};

const baseOneToOneNatSpec: object = { ipVersion: 0 };

export const OneToOneNatSpec = {
    encode(
        message: OneToOneNatSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.ipVersion !== 0) {
            writer.uint32(8).int32(message.ipVersion);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OneToOneNatSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOneToOneNatSpec } as OneToOneNatSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipVersion = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OneToOneNatSpec {
        const message = { ...baseOneToOneNatSpec } as OneToOneNatSpec;
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = ipVersionFromJSON(object.ipVersion);
        } else {
            message.ipVersion = 0;
        }
        return message;
    },

    toJSON(message: OneToOneNatSpec): unknown {
        const obj: any = {};
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        return obj;
    },

    fromPartial(object: DeepPartial<OneToOneNatSpec>): OneToOneNatSpec {
        const message = { ...baseOneToOneNatSpec } as OneToOneNatSpec;
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        } else {
            message.ipVersion = 0;
        }
        return message;
    },
};

const baseResourcesSpec: object = {
    memory: 0,
    cores: 0,
    coreFraction: 0,
    gpus: 0,
};

export const ResourcesSpec = {
    encode(
        message: ResourcesSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): ResourcesSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourcesSpec } as ResourcesSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memory = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.cores = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.coreFraction = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.gpus = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ResourcesSpec {
        const message = { ...baseResourcesSpec } as ResourcesSpec;
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = Number(object.memory);
        } else {
            message.memory = 0;
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = Number(object.cores);
        } else {
            message.cores = 0;
        }
        if (object.coreFraction !== undefined && object.coreFraction !== null) {
            message.coreFraction = Number(object.coreFraction);
        } else {
            message.coreFraction = 0;
        }
        if (object.gpus !== undefined && object.gpus !== null) {
            message.gpus = Number(object.gpus);
        } else {
            message.gpus = 0;
        }
        return message;
    },

    toJSON(message: ResourcesSpec): unknown {
        const obj: any = {};
        message.memory !== undefined && (obj.memory = message.memory);
        message.cores !== undefined && (obj.cores = message.cores);
        message.coreFraction !== undefined &&
            (obj.coreFraction = message.coreFraction);
        message.gpus !== undefined && (obj.gpus = message.gpus);
        return obj;
    },

    fromPartial(object: DeepPartial<ResourcesSpec>): ResourcesSpec {
        const message = { ...baseResourcesSpec } as ResourcesSpec;
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = object.memory;
        } else {
            message.memory = 0;
        }
        if (object.cores !== undefined && object.cores !== null) {
            message.cores = object.cores;
        } else {
            message.cores = 0;
        }
        if (object.coreFraction !== undefined && object.coreFraction !== null) {
            message.coreFraction = object.coreFraction;
        } else {
            message.coreFraction = 0;
        }
        if (object.gpus !== undefined && object.gpus !== null) {
            message.gpus = object.gpus;
        } else {
            message.gpus = 0;
        }
        return message;
    },
};

const baseDiskSpec: object = { diskTypeId: '', diskSize: 0 };

export const DiskSpec = {
    encode(
        message: DiskSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.diskTypeId !== '') {
            writer.uint32(10).string(message.diskTypeId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(16).int64(message.diskSize);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DiskSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDiskSpec } as DiskSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskTypeId = reader.string();
                    break;
                case 2:
                    message.diskSize = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DiskSpec {
        const message = { ...baseDiskSpec } as DiskSpec;
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = String(object.diskTypeId);
        } else {
            message.diskTypeId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = Number(object.diskSize);
        } else {
            message.diskSize = 0;
        }
        return message;
    },

    toJSON(message: DiskSpec): unknown {
        const obj: any = {};
        message.diskTypeId !== undefined &&
            (obj.diskTypeId = message.diskTypeId);
        message.diskSize !== undefined && (obj.diskSize = message.diskSize);
        return obj;
    },

    fromPartial(object: DeepPartial<DiskSpec>): DiskSpec {
        const message = { ...baseDiskSpec } as DiskSpec;
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = object.diskTypeId;
        } else {
            message.diskTypeId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = object.diskSize;
        } else {
            message.diskSize = 0;
        }
        return message;
    },
};

const baseSchedulingPolicy: object = { preemptible: false };

export const SchedulingPolicy = {
    encode(
        message: SchedulingPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.preemptible === true) {
            writer.uint32(8).bool(message.preemptible);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SchedulingPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchedulingPolicy } as SchedulingPolicy;
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

    fromJSON(object: any): SchedulingPolicy {
        const message = { ...baseSchedulingPolicy } as SchedulingPolicy;
        if (object.preemptible !== undefined && object.preemptible !== null) {
            message.preemptible = Boolean(object.preemptible);
        } else {
            message.preemptible = false;
        }
        return message;
    },

    toJSON(message: SchedulingPolicy): unknown {
        const obj: any = {};
        message.preemptible !== undefined &&
            (obj.preemptible = message.preemptible);
        return obj;
    },

    fromPartial(object: DeepPartial<SchedulingPolicy>): SchedulingPolicy {
        const message = { ...baseSchedulingPolicy } as SchedulingPolicy;
        if (object.preemptible !== undefined && object.preemptible !== null) {
            message.preemptible = object.preemptible;
        } else {
            message.preemptible = false;
        }
        return message;
    },
};

const basePlacementPolicy: object = { placementGroupId: '' };

export const PlacementPolicy = {
    encode(
        message: PlacementPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PlacementPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlacementPolicy } as PlacementPolicy;
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

    fromJSON(object: any): PlacementPolicy {
        const message = { ...basePlacementPolicy } as PlacementPolicy;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
        }
        return message;
    },

    toJSON(message: PlacementPolicy): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },

    fromPartial(object: DeepPartial<PlacementPolicy>): PlacementPolicy {
        const message = { ...basePlacementPolicy } as PlacementPolicy;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
        }
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
