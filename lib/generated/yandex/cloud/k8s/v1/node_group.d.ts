import { MaintenanceWindow } from '../../../../yandex/cloud/k8s/v1/maintenance';
import { NodeTemplate, Taint } from '../../../../yandex/cloud/k8s/v1/node';
import { VersionInfo } from '../../../../yandex/cloud/k8s/v1/version';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export interface NodeGroup {
    /** ID of the node group. */
    id: string;
    /** ID of the cluster that the node group belongs to. */
    clusterId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /**
     * Name of the node group.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the node group. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Status of the node group. */
    status: NodeGroup_Status;
    /** Node template that specifies parameters of the compute instances for the node group. */
    nodeTemplate: NodeTemplate | undefined;
    /** Scale policy of the node group.  For more information, see [Scaling policy](/docs/compute/concepts/instance-groups/policies#scale-policy). */
    scalePolicy: ScalePolicy | undefined;
    /** Allocation policy by which resources for node group are allocated to zones and regions. */
    allocationPolicy: NodeGroupAllocationPolicy | undefined;
    /** Deploy policy according to which the updates are rolled out. */
    deployPolicy: DeployPolicy | undefined;
    /** ID of the managed instance group associated with this node group. */
    instanceGroupId: string;
    /**
     * Version of Kubernetes components that runs on the nodes.
     * Deprecated. Use version_info.current_version.
     */
    nodeVersion: string;
    /** Detailed information about the Kubernetes version that is running on the node. */
    versionInfo: VersionInfo | undefined;
    /** Maintenance policy of the node group. */
    maintenancePolicy: NodeGroupMaintenancePolicy | undefined;
    /** Support for unsafe sysctl parameters. For more details see [documentation](https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/). */
    allowedUnsafeSysctls: string[];
    /** Taints that are applied to the nodes of the node group at creation time. */
    nodeTaints: Taint[];
    /** Labels that are assigned to the nodes of the node group at creation time. */
    nodeLabels: {
        [key: string]: string;
    };
}
export declare enum NodeGroup_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Node group is waiting for resources to be allocated. */
    PROVISIONING = 1,
    /** RUNNING - Node group is running. */
    RUNNING = 2,
    /** RECONCILING - Node group is waiting for some work to be done, such as upgrading node software. */
    RECONCILING = 3,
    /** STOPPING - Node group is being stopped. */
    STOPPING = 4,
    /** STOPPED - Node group stopped. */
    STOPPED = 5,
    /** DELETING - Node group is being deleted. */
    DELETING = 6,
    /** STARTING - Node group is being started. */
    STARTING = 7,
    UNRECOGNIZED = -1
}
export declare function nodeGroup_StatusFromJSON(object: any): NodeGroup_Status;
export declare function nodeGroup_StatusToJSON(object: NodeGroup_Status): string;
export interface NodeGroup_LabelsEntry {
    key: string;
    value: string;
}
export interface NodeGroup_NodeLabelsEntry {
    key: string;
    value: string;
}
export interface ScalePolicy {
    /** Fixed scale policy of the node group. */
    fixedScale: ScalePolicy_FixedScale | undefined;
    /** Auto scale policy of the node group. */
    autoScale: ScalePolicy_AutoScale | undefined;
}
export interface ScalePolicy_FixedScale {
    /** Number of nodes in the node group. */
    size: number;
}
export interface ScalePolicy_AutoScale {
    /** Minimum number of nodes in the node group. */
    minSize: number;
    /** Maximum number of nodes in the node group. */
    maxSize: number;
    /** Initial number of nodes in the node group. */
    initialSize: number;
}
export interface NodeGroupAllocationPolicy {
    /** List of locations where resources for the node group will be allocated. */
    locations: NodeGroupLocation[];
}
export interface NodeGroupLocation {
    /** ID of the availability zone where the nodes may reside. */
    zoneId: string;
    /** ID of the subnet. If a network chosen for the Kubernetes cluster has only one subnet in the specified zone, subnet ID may be omitted. */
    subnetId: string;
}
export interface NodeGroupMaintenancePolicy {
    /**
     * If set to true, automatic updates are installed in the specified period of time with no interaction from the user.
     * If set to false, automatic upgrades are disabled.
     */
    autoUpgrade: boolean;
    /** If set to true, automatic repairs are enabled. Default value is false. */
    autoRepair: boolean;
    /**
     * Maintenance window settings. Update will start at the specified time and last no more than the specified duration.
     * The time is set in UTC.
     */
    maintenanceWindow: MaintenanceWindow | undefined;
}
export interface DeployPolicy {
    /**
     * The maximum number of running instances that can be taken offline (i.e.,
     * stopped or deleted) at the same time during the update process.
     * If [max_expansion] is not specified or set to zero, [max_unavailable] must
     * be set to a non-zero value.
     */
    maxUnavailable: number;
    /**
     * The maximum number of instances that can be temporarily allocated above
     * the group's target size during the update process.
     * If [max_unavailable] is not specified or set to zero, [max_expansion] must
     * be set to a non-zero value.
     */
    maxExpansion: number;
}
export declare const NodeGroup: {
    encode(message: NodeGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroup;
    fromJSON(object: any): NodeGroup;
    toJSON(message: NodeGroup): unknown;
    fromPartial(object: DeepPartial<NodeGroup>): NodeGroup;
};
export declare const NodeGroup_LabelsEntry: {
    encode(message: NodeGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroup_LabelsEntry;
    fromJSON(object: any): NodeGroup_LabelsEntry;
    toJSON(message: NodeGroup_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<NodeGroup_LabelsEntry>): NodeGroup_LabelsEntry;
};
export declare const NodeGroup_NodeLabelsEntry: {
    encode(message: NodeGroup_NodeLabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroup_NodeLabelsEntry;
    fromJSON(object: any): NodeGroup_NodeLabelsEntry;
    toJSON(message: NodeGroup_NodeLabelsEntry): unknown;
    fromPartial(object: DeepPartial<NodeGroup_NodeLabelsEntry>): NodeGroup_NodeLabelsEntry;
};
export declare const ScalePolicy: {
    encode(message: ScalePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy;
    fromJSON(object: any): ScalePolicy;
    toJSON(message: ScalePolicy): unknown;
    fromPartial(object: DeepPartial<ScalePolicy>): ScalePolicy;
};
export declare const ScalePolicy_FixedScale: {
    encode(message: ScalePolicy_FixedScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_FixedScale;
    fromJSON(object: any): ScalePolicy_FixedScale;
    toJSON(message: ScalePolicy_FixedScale): unknown;
    fromPartial(object: DeepPartial<ScalePolicy_FixedScale>): ScalePolicy_FixedScale;
};
export declare const ScalePolicy_AutoScale: {
    encode(message: ScalePolicy_AutoScale, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalePolicy_AutoScale;
    fromJSON(object: any): ScalePolicy_AutoScale;
    toJSON(message: ScalePolicy_AutoScale): unknown;
    fromPartial(object: DeepPartial<ScalePolicy_AutoScale>): ScalePolicy_AutoScale;
};
export declare const NodeGroupAllocationPolicy: {
    encode(message: NodeGroupAllocationPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroupAllocationPolicy;
    fromJSON(object: any): NodeGroupAllocationPolicy;
    toJSON(message: NodeGroupAllocationPolicy): unknown;
    fromPartial(object: DeepPartial<NodeGroupAllocationPolicy>): NodeGroupAllocationPolicy;
};
export declare const NodeGroupLocation: {
    encode(message: NodeGroupLocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroupLocation;
    fromJSON(object: any): NodeGroupLocation;
    toJSON(message: NodeGroupLocation): unknown;
    fromPartial(object: DeepPartial<NodeGroupLocation>): NodeGroupLocation;
};
export declare const NodeGroupMaintenancePolicy: {
    encode(message: NodeGroupMaintenancePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NodeGroupMaintenancePolicy;
    fromJSON(object: any): NodeGroupMaintenancePolicy;
    toJSON(message: NodeGroupMaintenancePolicy): unknown;
    fromPartial(object: DeepPartial<NodeGroupMaintenancePolicy>): NodeGroupMaintenancePolicy;
};
export declare const DeployPolicy: {
    encode(message: DeployPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeployPolicy;
    fromJSON(object: any): DeployPolicy;
    toJSON(message: DeployPolicy): unknown;
    fromPartial(object: DeepPartial<DeployPolicy>): DeployPolicy;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
