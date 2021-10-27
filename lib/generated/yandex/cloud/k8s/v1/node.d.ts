import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export declare enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address, for example 192.168.0.0. */
    IPV4 = 1,
    /** IPV6 - IPv6 address, not available yet. */
    IPV6 = 2,
    UNRECOGNIZED = -1
}
export declare function ipVersionFromJSON(object: any): IpVersion;
export declare function ipVersionToJSON(object: IpVersion): string;
export interface Node {
    $type: 'yandex.cloud.k8s.v1.Node';
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
export declare enum Node_Status {
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
    UNRECOGNIZED = -1
}
export declare function node_StatusFromJSON(object: any): Node_Status;
export declare function node_StatusToJSON(object: Node_Status): string;
/** Kubernetes node info */
export interface Node_KubernetesStatus {
    $type: 'yandex.cloud.k8s.v1.Node.KubernetesStatus';
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
    $type: 'yandex.cloud.k8s.v1.Node.CloudStatus';
    /** Compute instance id */
    id: string;
    /** IG instance status */
    status: string;
    /** IG instance status message */
    statusMessage: string;
}
/** Node specification. */
export interface Node_Spec {
    $type: 'yandex.cloud.k8s.v1.Node.Spec';
    /** Node group specified resources. */
    resources: ResourcesSpec | undefined;
    /** Node group specified disk. */
    disk: DiskSpec | undefined;
}
export interface Condition {
    $type: 'yandex.cloud.k8s.v1.Condition';
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
    $type: 'yandex.cloud.k8s.v1.Taint';
    /** The taint key to be applied to a node. */
    key: string;
    /** The taint value corresponding to the taint key. */
    value: string;
    /** The effect of the taint on pods that do not tolerate the taint. */
    effect: Taint_Effect;
}
export declare enum Taint_Effect {
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
    UNRECOGNIZED = -1
}
export declare function taint_EffectFromJSON(object: any): Taint_Effect;
export declare function taint_EffectToJSON(object: Taint_Effect): string;
/** AttachedVolume describes a volume attached to a node */
export interface AttachedVolume {
    $type: 'yandex.cloud.k8s.v1.AttachedVolume';
    /** Name of the driver which has attached the volume */
    driverName: string;
    /** Volume handle (cloud disk id) */
    volumeHandle: string;
}
export interface NodeTemplate {
    $type: 'yandex.cloud.k8s.v1.NodeTemplate';
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
    metadata: {
        [key: string]: string;
    };
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
    $type: 'yandex.cloud.k8s.v1.NodeTemplate.MetadataEntry';
    key: string;
    value: string;
}
export interface NodeTemplate_NetworkSettings {
    $type: 'yandex.cloud.k8s.v1.NodeTemplate.NetworkSettings';
    type: NodeTemplate_NetworkSettings_Type;
}
export declare enum NodeTemplate_NetworkSettings_Type {
    TYPE_UNSPECIFIED = 0,
    STANDARD = 1,
    /**
     * SOFTWARE_ACCELERATED - unsupported yet, commented for possible future utilization.
     * HARDWARE_ACCELERATED = 3;
     */
    SOFTWARE_ACCELERATED = 2,
    UNRECOGNIZED = -1
}
export declare function nodeTemplate_NetworkSettings_TypeFromJSON(object: any): NodeTemplate_NetworkSettings_Type;
export declare function nodeTemplate_NetworkSettings_TypeToJSON(object: NodeTemplate_NetworkSettings_Type): string;
export interface NetworkInterfaceSpec {
    $type: 'yandex.cloud.k8s.v1.NetworkInterfaceSpec';
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
    $type: 'yandex.cloud.k8s.v1.NodeAddressSpec';
    /** One-to-one NAT configuration. Setting up one-to-one NAT ensures that public IP addresses are assigned to nodes, and therefore internet is accessible for all nodes of the node group. If the field is not set, NAT will not be set up. */
    oneToOneNatSpec: OneToOneNatSpec | undefined;
}
export interface OneToOneNatSpec {
    $type: 'yandex.cloud.k8s.v1.OneToOneNatSpec';
    /** IP version for the public IP address. */
    ipVersion: IpVersion;
}
export interface ResourcesSpec {
    $type: 'yandex.cloud.k8s.v1.ResourcesSpec';
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
    $type: 'yandex.cloud.k8s.v1.DiskSpec';
    /** ID of the disk type. */
    diskTypeId: string;
    /** Size of the disk, specified in bytes. */
    diskSize: number;
}
export interface SchedulingPolicy {
    $type: 'yandex.cloud.k8s.v1.SchedulingPolicy';
    /**
     * True for preemptible compute instances. Default value is false. Preemptible compute instances are stopped at least once every 24 hours, and can be stopped at any time
     * if their resources are needed by Compute.
     * For more information, see [Preemptible Virtual Machines](/docs/compute/concepts/preemptible-vm).
     */
    preemptible: boolean;
}
export interface PlacementPolicy {
    $type: 'yandex.cloud.k8s.v1.PlacementPolicy';
    /** Identifier of placement group */
    placementGroupId: string;
}
export declare const Node: {
    $type: "yandex.cloud.k8s.v1.Node";
    encode(message: Node, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): unknown;
    fromPartial(object: DeepPartial<Node>): Node;
};
export declare const Node_KubernetesStatus: {
    $type: "yandex.cloud.k8s.v1.Node.KubernetesStatus";
    encode(message: Node_KubernetesStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Node_KubernetesStatus;
    fromJSON(object: any): Node_KubernetesStatus;
    toJSON(message: Node_KubernetesStatus): unknown;
    fromPartial(object: DeepPartial<Node_KubernetesStatus>): Node_KubernetesStatus;
};
export declare const Node_CloudStatus: {
    $type: "yandex.cloud.k8s.v1.Node.CloudStatus";
    encode(message: Node_CloudStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Node_CloudStatus;
    fromJSON(object: any): Node_CloudStatus;
    toJSON(message: Node_CloudStatus): unknown;
    fromPartial(object: DeepPartial<Node_CloudStatus>): Node_CloudStatus;
};
export declare const Node_Spec: {
    $type: "yandex.cloud.k8s.v1.Node.Spec";
    encode(message: Node_Spec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Node_Spec;
    fromJSON(object: any): Node_Spec;
    toJSON(message: Node_Spec): unknown;
    fromPartial(object: DeepPartial<Node_Spec>): Node_Spec;
};
export declare const Condition: {
    $type: "yandex.cloud.k8s.v1.Condition";
    encode(message: Condition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Condition;
    fromJSON(object: any): Condition;
    toJSON(message: Condition): unknown;
    fromPartial(object: DeepPartial<Condition>): Condition;
};
export declare const Taint: {
    $type: "yandex.cloud.k8s.v1.Taint";
    encode(message: Taint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Taint;
    fromJSON(object: any): Taint;
    toJSON(message: Taint): unknown;
    fromPartial(object: DeepPartial<Taint>): Taint;
};
export declare const AttachedVolume: {
    $type: "yandex.cloud.k8s.v1.AttachedVolume";
    encode(message: AttachedVolume, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedVolume;
    fromJSON(object: any): AttachedVolume;
    toJSON(message: AttachedVolume): unknown;
    fromPartial(object: DeepPartial<AttachedVolume>): AttachedVolume;
};
export declare const NodeTemplate: {
    $type: "yandex.cloud.k8s.v1.NodeTemplate";
    encode(message: NodeTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeTemplate;
    fromJSON(object: any): NodeTemplate;
    toJSON(message: NodeTemplate): unknown;
    fromPartial(object: DeepPartial<NodeTemplate>): NodeTemplate;
};
export declare const NodeTemplate_MetadataEntry: {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.MetadataEntry";
    encode(message: NodeTemplate_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeTemplate_MetadataEntry;
    fromJSON(object: any): NodeTemplate_MetadataEntry;
    toJSON(message: NodeTemplate_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<NodeTemplate_MetadataEntry>): NodeTemplate_MetadataEntry;
};
export declare const NodeTemplate_NetworkSettings: {
    $type: "yandex.cloud.k8s.v1.NodeTemplate.NetworkSettings";
    encode(message: NodeTemplate_NetworkSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeTemplate_NetworkSettings;
    fromJSON(object: any): NodeTemplate_NetworkSettings;
    toJSON(message: NodeTemplate_NetworkSettings): unknown;
    fromPartial(object: DeepPartial<NodeTemplate_NetworkSettings>): NodeTemplate_NetworkSettings;
};
export declare const NetworkInterfaceSpec: {
    $type: "yandex.cloud.k8s.v1.NetworkInterfaceSpec";
    encode(message: NetworkInterfaceSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInterfaceSpec;
    fromJSON(object: any): NetworkInterfaceSpec;
    toJSON(message: NetworkInterfaceSpec): unknown;
    fromPartial(object: DeepPartial<NetworkInterfaceSpec>): NetworkInterfaceSpec;
};
export declare const NodeAddressSpec: {
    $type: "yandex.cloud.k8s.v1.NodeAddressSpec";
    encode(message: NodeAddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeAddressSpec;
    fromJSON(object: any): NodeAddressSpec;
    toJSON(message: NodeAddressSpec): unknown;
    fromPartial(object: DeepPartial<NodeAddressSpec>): NodeAddressSpec;
};
export declare const OneToOneNatSpec: {
    $type: "yandex.cloud.k8s.v1.OneToOneNatSpec";
    encode(message: OneToOneNatSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OneToOneNatSpec;
    fromJSON(object: any): OneToOneNatSpec;
    toJSON(message: OneToOneNatSpec): unknown;
    fromPartial(object: DeepPartial<OneToOneNatSpec>): OneToOneNatSpec;
};
export declare const ResourcesSpec: {
    $type: "yandex.cloud.k8s.v1.ResourcesSpec";
    encode(message: ResourcesSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourcesSpec;
    fromJSON(object: any): ResourcesSpec;
    toJSON(message: ResourcesSpec): unknown;
    fromPartial(object: DeepPartial<ResourcesSpec>): ResourcesSpec;
};
export declare const DiskSpec: {
    $type: "yandex.cloud.k8s.v1.DiskSpec";
    encode(message: DiskSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DiskSpec;
    fromJSON(object: any): DiskSpec;
    toJSON(message: DiskSpec): unknown;
    fromPartial(object: DeepPartial<DiskSpec>): DiskSpec;
};
export declare const SchedulingPolicy: {
    $type: "yandex.cloud.k8s.v1.SchedulingPolicy";
    encode(message: SchedulingPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchedulingPolicy;
    fromJSON(object: any): SchedulingPolicy;
    toJSON(message: SchedulingPolicy): unknown;
    fromPartial(object: DeepPartial<SchedulingPolicy>): SchedulingPolicy;
};
export declare const PlacementPolicy: {
    $type: "yandex.cloud.k8s.v1.PlacementPolicy";
    encode(message: PlacementPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementPolicy;
    fromJSON(object: any): PlacementPolicy;
    toJSON(message: PlacementPolicy): unknown;
    fromPartial(object: DeepPartial<PlacementPolicy>): PlacementPolicy;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
