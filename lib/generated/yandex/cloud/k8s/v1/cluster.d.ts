import { MaintenanceWindow } from '../../../../yandex/cloud/k8s/v1/maintenance';
import { VersionInfo } from '../../../../yandex/cloud/k8s/v1/version';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export declare enum ReleaseChannel {
    RELEASE_CHANNEL_UNSPECIFIED = 0,
    /**
     * RAPID - Minor updates with new functions and improvements are often added.
     * You can't disable automatic updates in this channel, but you can specify a time period for automatic updates.
     */
    RAPID = 1,
    /** REGULAR - New functions and improvements are added in chunks shortly after they appear on `RAPID`. */
    REGULAR = 2,
    /** STABLE - Only updates related to bug fixes or security improvements are added. */
    STABLE = 3,
    UNRECOGNIZED = -1
}
export declare function releaseChannelFromJSON(object: any): ReleaseChannel;
export declare function releaseChannelToJSON(object: ReleaseChannel): string;
/** A Kubernetes cluster. */
export interface Cluster {
    $type: 'yandex.cloud.k8s.v1.Cluster';
    /** ID of the Kubernetes cluster. */
    id: string;
    /** ID of the folder that the Kubernetes cluster belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Name of the Kubernetes cluster. */
    name: string;
    /** Description of the Kubernetes cluster. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Status of the Kubernetes cluster. */
    status: Cluster_Status;
    /** Health of the Kubernetes cluster. */
    health: Cluster_Health;
    /** ID of the network the Kubernetes cluster belongs to. */
    networkId: string;
    /** Properties of the master for the Kubernetes cluster. */
    master: Master | undefined;
    /** Allocation policy for IP addresses of services and pods inside the Kubernetes cluster in different availability zones. */
    ipAllocationPolicy: IPAllocationPolicy | undefined;
    /** Gateway IPv4 address. */
    gatewayIpv4Address: string | undefined;
    /** Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster. */
    serviceAccountId: string;
    /** Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry or to push node logs and metrics. */
    nodeServiceAccountId: string;
    /**
     * When creating a Kubernetes cluster, you should specify one of three release channels. The release channel contains several Kubernetes versions.
     * Channels differ in the set of available versions, the management of auto-updates, and the updates received.
     * You can't change the channel once the Kubernetes cluster is created, you can only recreate the Kubernetes cluster and specify a new release channel.
     * For more details see [documentation](https://cloud.yandex.com/docs/managed-kubernetes/concepts/release-channels-and-updates).
     */
    releaseChannel: ReleaseChannel;
    networkPolicy: NetworkPolicy | undefined;
    /** KMS provider configuration. */
    kmsProvider: KMSProvider | undefined;
    /** Log group where cluster stores cluster system logs, like audit, events, or controlplane logs. */
    logGroupId: string;
    cilium: Cilium | undefined;
}
export declare enum Cluster_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Kubernetes cluster is waiting for resources to be allocated. */
    PROVISIONING = 1,
    /** RUNNING - Kubernetes cluster is running. */
    RUNNING = 2,
    /** RECONCILING - Kubernetes cluster is being reconciled. */
    RECONCILING = 3,
    /** STOPPING - Kubernetes cluster is being stopped. */
    STOPPING = 4,
    /** STOPPED - Kubernetes cluster stopped. */
    STOPPED = 5,
    /** DELETING - Kubernetes cluster is being deleted. */
    DELETING = 6,
    /** STARTING - Kubernetes cluster is being started. */
    STARTING = 7,
    UNRECOGNIZED = -1
}
export declare function cluster_StatusFromJSON(object: any): Cluster_Status;
export declare function cluster_StatusToJSON(object: Cluster_Status): string;
export declare enum Cluster_Health {
    HEALTH_UNSPECIFIED = 0,
    /** HEALTHY - Kubernetes cluster is alive and well. */
    HEALTHY = 1,
    /** UNHEALTHY - Kubernetes cluster is inoperable. */
    UNHEALTHY = 2,
    UNRECOGNIZED = -1
}
export declare function cluster_HealthFromJSON(object: any): Cluster_Health;
export declare function cluster_HealthToJSON(object: Cluster_Health): string;
export interface Cluster_LabelsEntry {
    $type: 'yandex.cloud.k8s.v1.Cluster.LabelsEntry';
    key: string;
    value: string;
}
export interface Master {
    $type: 'yandex.cloud.k8s.v1.Master';
    /** Parameters of the availability zone for the master. */
    zonalMaster: ZonalMaster | undefined;
    /** Parameters of the region for the master. */
    regionalMaster: RegionalMaster | undefined;
    /** Version of Kubernetes components that runs on the master. */
    version: string;
    /**
     * Endpoints of the master. Endpoints constitute of scheme and port (i.e. `https://ip-address:port`)
     * and can be used by the clients to communicate with the Kubernetes API of the Kubernetes cluster.
     */
    endpoints: MasterEndpoints | undefined;
    /** Master authentication parameters are used to establish trust between the master and a client. */
    masterAuth: MasterAuth | undefined;
    /** Detailed information about the Kubernetes version that is running on the master. */
    versionInfo: VersionInfo | undefined;
    /** Maintenance policy of the master. */
    maintenancePolicy: MasterMaintenancePolicy | undefined;
    /** Master security groups. */
    securityGroupIds: string[];
}
export interface MasterAuth {
    $type: 'yandex.cloud.k8s.v1.MasterAuth';
    /** PEM-encoded public certificate that is the root of trust for the Kubernetes cluster. */
    clusterCaCertificate: string;
}
export interface ZonalMaster {
    $type: 'yandex.cloud.k8s.v1.ZonalMaster';
    /** ID of the availability zone where the master resides. */
    zoneId: string;
    /** IPv4 internal network address that is assigned to the master. */
    internalV4Address: string;
    /** IPv4 external network address that is assigned to the master. */
    externalV4Address: string;
}
export interface RegionalMaster {
    $type: 'yandex.cloud.k8s.v1.RegionalMaster';
    /** ID of the region where the master resides. */
    regionId: string;
    /** IPv4 internal network address that is assigned to the master. */
    internalV4Address: string;
    /** IPv4 external network address that is assigned to the master. */
    externalV4Address: string;
}
export interface MasterEndpoints {
    $type: 'yandex.cloud.k8s.v1.MasterEndpoints';
    /** Internal endpoint that can be used to connect to the master from cloud networks. */
    internalV4Endpoint: string;
    /** External endpoint that can be used to access Kubernetes cluster API from the internet (outside of the cloud). */
    externalV4Endpoint: string;
}
export interface IPAllocationPolicy {
    $type: 'yandex.cloud.k8s.v1.IPAllocationPolicy';
    /**
     * CIDR block. IP range for allocating pod addresses.
     *
     * It should not overlap with any subnet in the network the Kubernetes cluster located in. Static routes will be
     * set up for this CIDR blocks in node subnets.
     */
    clusterIpv4CidrBlock: string;
    /**
     * Size of the masks that are assigned for each node in the cluster.
     *
     * If not specified, 24 is used.
     */
    nodeIpv4CidrMaskSize: number;
    /**
     * CIDR block. IP range Kubernetes service Kubernetes cluster IP addresses will be allocated from.
     *
     * It should not overlap with any subnet in the network the Kubernetes cluster located in.
     */
    serviceIpv4CidrBlock: string;
    /** IPv6 range for allocating pod IP addresses. */
    clusterIpv6CidrBlock: string;
    /** IPv6 range for allocating Kubernetes service IP addresses */
    serviceIpv6CidrBlock: string;
}
export interface MasterMaintenancePolicy {
    $type: 'yandex.cloud.k8s.v1.MasterMaintenancePolicy';
    /**
     * If set to true, automatic updates are installed in the specified period of time with no interaction from the user.
     * If set to false, automatic upgrades are disabled.
     */
    autoUpgrade: boolean;
    /**
     * Maintenance window settings. Update will start at the specified time and last no more than the specified duration.
     * The time is set in UTC.
     */
    maintenanceWindow: MaintenanceWindow | undefined;
}
export interface NetworkPolicy {
    $type: 'yandex.cloud.k8s.v1.NetworkPolicy';
    provider: NetworkPolicy_Provider;
}
export declare enum NetworkPolicy_Provider {
    PROVIDER_UNSPECIFIED = 0,
    CALICO = 1,
    UNRECOGNIZED = -1
}
export declare function networkPolicy_ProviderFromJSON(object: any): NetworkPolicy_Provider;
export declare function networkPolicy_ProviderToJSON(object: NetworkPolicy_Provider): string;
export interface KMSProvider {
    $type: 'yandex.cloud.k8s.v1.KMSProvider';
    /**
     * KMS key ID for secrets encryption.
     * To obtain a KMS key ID use a [yandex.cloud.kms.v1.SymmetricKeyService.List] request.
     */
    keyId: string;
}
export interface Cilium {
    $type: 'yandex.cloud.k8s.v1.Cilium';
    routingMode: Cilium_RoutingMode;
}
export declare enum Cilium_RoutingMode {
    ROUTING_MODE_UNSPECIFIED = 0,
    TUNNEL = 1,
    UNRECOGNIZED = -1
}
export declare function cilium_RoutingModeFromJSON(object: any): Cilium_RoutingMode;
export declare function cilium_RoutingModeToJSON(object: Cilium_RoutingMode): string;
export declare const Cluster: {
    $type: "yandex.cloud.k8s.v1.Cluster";
    encode(message: Cluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster;
    fromJSON(object: any): Cluster;
    toJSON(message: Cluster): unknown;
    fromPartial(object: DeepPartial<Cluster>): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.k8s.v1.Cluster.LabelsEntry";
    encode(message: Cluster_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster_LabelsEntry;
    fromJSON(object: any): Cluster_LabelsEntry;
    toJSON(message: Cluster_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Cluster_LabelsEntry>): Cluster_LabelsEntry;
};
export declare const Master: {
    $type: "yandex.cloud.k8s.v1.Master";
    encode(message: Master, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Master;
    fromJSON(object: any): Master;
    toJSON(message: Master): unknown;
    fromPartial(object: DeepPartial<Master>): Master;
};
export declare const MasterAuth: {
    $type: "yandex.cloud.k8s.v1.MasterAuth";
    encode(message: MasterAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterAuth;
    fromJSON(object: any): MasterAuth;
    toJSON(message: MasterAuth): unknown;
    fromPartial(object: DeepPartial<MasterAuth>): MasterAuth;
};
export declare const ZonalMaster: {
    $type: "yandex.cloud.k8s.v1.ZonalMaster";
    encode(message: ZonalMaster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ZonalMaster;
    fromJSON(object: any): ZonalMaster;
    toJSON(message: ZonalMaster): unknown;
    fromPartial(object: DeepPartial<ZonalMaster>): ZonalMaster;
};
export declare const RegionalMaster: {
    $type: "yandex.cloud.k8s.v1.RegionalMaster";
    encode(message: RegionalMaster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegionalMaster;
    fromJSON(object: any): RegionalMaster;
    toJSON(message: RegionalMaster): unknown;
    fromPartial(object: DeepPartial<RegionalMaster>): RegionalMaster;
};
export declare const MasterEndpoints: {
    $type: "yandex.cloud.k8s.v1.MasterEndpoints";
    encode(message: MasterEndpoints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterEndpoints;
    fromJSON(object: any): MasterEndpoints;
    toJSON(message: MasterEndpoints): unknown;
    fromPartial(object: DeepPartial<MasterEndpoints>): MasterEndpoints;
};
export declare const IPAllocationPolicy: {
    $type: "yandex.cloud.k8s.v1.IPAllocationPolicy";
    encode(message: IPAllocationPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IPAllocationPolicy;
    fromJSON(object: any): IPAllocationPolicy;
    toJSON(message: IPAllocationPolicy): unknown;
    fromPartial(object: DeepPartial<IPAllocationPolicy>): IPAllocationPolicy;
};
export declare const MasterMaintenancePolicy: {
    $type: "yandex.cloud.k8s.v1.MasterMaintenancePolicy";
    encode(message: MasterMaintenancePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterMaintenancePolicy;
    fromJSON(object: any): MasterMaintenancePolicy;
    toJSON(message: MasterMaintenancePolicy): unknown;
    fromPartial(object: DeepPartial<MasterMaintenancePolicy>): MasterMaintenancePolicy;
};
export declare const NetworkPolicy: {
    $type: "yandex.cloud.k8s.v1.NetworkPolicy";
    encode(message: NetworkPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkPolicy;
    fromJSON(object: any): NetworkPolicy;
    toJSON(message: NetworkPolicy): unknown;
    fromPartial(object: DeepPartial<NetworkPolicy>): NetworkPolicy;
};
export declare const KMSProvider: {
    $type: "yandex.cloud.k8s.v1.KMSProvider";
    encode(message: KMSProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KMSProvider;
    fromJSON(object: any): KMSProvider;
    toJSON(message: KMSProvider): unknown;
    fromPartial(object: DeepPartial<KMSProvider>): KMSProvider;
};
export declare const Cilium: {
    $type: "yandex.cloud.k8s.v1.Cilium";
    encode(message: Cilium, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cilium;
    fromJSON(object: any): Cilium;
    toJSON(message: Cilium): unknown;
    fromPartial(object: DeepPartial<Cilium>): Cilium;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
