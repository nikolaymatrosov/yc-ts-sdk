/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { MaintenanceWindow } from '../../../../yandex/cloud/k8s/v1/maintenance';
import { VersionInfo } from '../../../../yandex/cloud/k8s/v1/version';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.k8s.v1';

export enum ReleaseChannel {
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
    UNRECOGNIZED = -1,
}

export function releaseChannelFromJSON(object: any): ReleaseChannel {
    switch (object) {
        case 0:
        case 'RELEASE_CHANNEL_UNSPECIFIED':
            return ReleaseChannel.RELEASE_CHANNEL_UNSPECIFIED;
        case 1:
        case 'RAPID':
            return ReleaseChannel.RAPID;
        case 2:
        case 'REGULAR':
            return ReleaseChannel.REGULAR;
        case 3:
        case 'STABLE':
            return ReleaseChannel.STABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ReleaseChannel.UNRECOGNIZED;
    }
}

export function releaseChannelToJSON(object: ReleaseChannel): string {
    switch (object) {
        case ReleaseChannel.RELEASE_CHANNEL_UNSPECIFIED:
            return 'RELEASE_CHANNEL_UNSPECIFIED';
        case ReleaseChannel.RAPID:
            return 'RAPID';
        case ReleaseChannel.REGULAR:
            return 'REGULAR';
        case ReleaseChannel.STABLE:
            return 'STABLE';
        default:
            return 'UNKNOWN';
    }
}

/** A Kubernetes cluster. */
export interface Cluster {
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
    labels: { [key: string]: string };
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

export enum Cluster_Status {
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
    UNRECOGNIZED = -1,
}

export function cluster_StatusFromJSON(object: any): Cluster_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Cluster_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROVISIONING':
            return Cluster_Status.PROVISIONING;
        case 2:
        case 'RUNNING':
            return Cluster_Status.RUNNING;
        case 3:
        case 'RECONCILING':
            return Cluster_Status.RECONCILING;
        case 4:
        case 'STOPPING':
            return Cluster_Status.STOPPING;
        case 5:
        case 'STOPPED':
            return Cluster_Status.STOPPED;
        case 6:
        case 'DELETING':
            return Cluster_Status.DELETING;
        case 7:
        case 'STARTING':
            return Cluster_Status.STARTING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Status.UNRECOGNIZED;
    }
}

export function cluster_StatusToJSON(object: Cluster_Status): string {
    switch (object) {
        case Cluster_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Cluster_Status.PROVISIONING:
            return 'PROVISIONING';
        case Cluster_Status.RUNNING:
            return 'RUNNING';
        case Cluster_Status.RECONCILING:
            return 'RECONCILING';
        case Cluster_Status.STOPPING:
            return 'STOPPING';
        case Cluster_Status.STOPPED:
            return 'STOPPED';
        case Cluster_Status.DELETING:
            return 'DELETING';
        case Cluster_Status.STARTING:
            return 'STARTING';
        default:
            return 'UNKNOWN';
    }
}

export enum Cluster_Health {
    HEALTH_UNSPECIFIED = 0,
    /** HEALTHY - Kubernetes cluster is alive and well. */
    HEALTHY = 1,
    /** UNHEALTHY - Kubernetes cluster is inoperable. */
    UNHEALTHY = 2,
    UNRECOGNIZED = -1,
}

export function cluster_HealthFromJSON(object: any): Cluster_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNSPECIFIED':
            return Cluster_Health.HEALTH_UNSPECIFIED;
        case 1:
        case 'HEALTHY':
            return Cluster_Health.HEALTHY;
        case 2:
        case 'UNHEALTHY':
            return Cluster_Health.UNHEALTHY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Health.UNRECOGNIZED;
    }
}

export function cluster_HealthToJSON(object: Cluster_Health): string {
    switch (object) {
        case Cluster_Health.HEALTH_UNSPECIFIED:
            return 'HEALTH_UNSPECIFIED';
        case Cluster_Health.HEALTHY:
            return 'HEALTHY';
        case Cluster_Health.UNHEALTHY:
            return 'UNHEALTHY';
        default:
            return 'UNKNOWN';
    }
}

export interface Cluster_LabelsEntry {
    key: string;
    value: string;
}

export interface Master {
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
    /** PEM-encoded public certificate that is the root of trust for the Kubernetes cluster. */
    clusterCaCertificate: string;
}

export interface ZonalMaster {
    /** ID of the availability zone where the master resides. */
    zoneId: string;
    /** IPv4 internal network address that is assigned to the master. */
    internalV4Address: string;
    /** IPv4 external network address that is assigned to the master. */
    externalV4Address: string;
}

export interface RegionalMaster {
    /** ID of the region where the master resides. */
    regionId: string;
    /** IPv4 internal network address that is assigned to the master. */
    internalV4Address: string;
    /** IPv4 external network address that is assigned to the master. */
    externalV4Address: string;
}

export interface MasterEndpoints {
    /** Internal endpoint that can be used to connect to the master from cloud networks. */
    internalV4Endpoint: string;
    /** External endpoint that can be used to access Kubernetes cluster API from the internet (outside of the cloud). */
    externalV4Endpoint: string;
}

export interface IPAllocationPolicy {
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
    provider: NetworkPolicy_Provider;
}

export enum NetworkPolicy_Provider {
    PROVIDER_UNSPECIFIED = 0,
    CALICO = 1,
    UNRECOGNIZED = -1,
}

export function networkPolicy_ProviderFromJSON(
    object: any
): NetworkPolicy_Provider {
    switch (object) {
        case 0:
        case 'PROVIDER_UNSPECIFIED':
            return NetworkPolicy_Provider.PROVIDER_UNSPECIFIED;
        case 1:
        case 'CALICO':
            return NetworkPolicy_Provider.CALICO;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NetworkPolicy_Provider.UNRECOGNIZED;
    }
}

export function networkPolicy_ProviderToJSON(
    object: NetworkPolicy_Provider
): string {
    switch (object) {
        case NetworkPolicy_Provider.PROVIDER_UNSPECIFIED:
            return 'PROVIDER_UNSPECIFIED';
        case NetworkPolicy_Provider.CALICO:
            return 'CALICO';
        default:
            return 'UNKNOWN';
    }
}

export interface KMSProvider {
    /**
     * KMS key ID for secrets encryption.
     * To obtain a KMS key ID use a [yandex.cloud.kms.v1.SymmetricKeyService.List] request.
     */
    keyId: string;
}

export interface Cilium {
    routingMode: Cilium_RoutingMode;
}

export enum Cilium_RoutingMode {
    ROUTING_MODE_UNSPECIFIED = 0,
    TUNNEL = 1,
    UNRECOGNIZED = -1,
}

export function cilium_RoutingModeFromJSON(object: any): Cilium_RoutingMode {
    switch (object) {
        case 0:
        case 'ROUTING_MODE_UNSPECIFIED':
            return Cilium_RoutingMode.ROUTING_MODE_UNSPECIFIED;
        case 1:
        case 'TUNNEL':
            return Cilium_RoutingMode.TUNNEL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cilium_RoutingMode.UNRECOGNIZED;
    }
}

export function cilium_RoutingModeToJSON(object: Cilium_RoutingMode): string {
    switch (object) {
        case Cilium_RoutingMode.ROUTING_MODE_UNSPECIFIED:
            return 'ROUTING_MODE_UNSPECIFIED';
        case Cilium_RoutingMode.TUNNEL:
            return 'TUNNEL';
        default:
            return 'UNKNOWN';
    }
}

const baseCluster: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    health: 0,
    networkId: '',
    serviceAccountId: '',
    nodeServiceAccountId: '',
    releaseChannel: 0,
    logGroupId: '',
};

export const Cluster = {
    encode(
        message: Cluster,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Cluster_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.health !== 0) {
            writer.uint32(64).int32(message.health);
        }
        if (message.networkId !== '') {
            writer.uint32(74).string(message.networkId);
        }
        if (message.master !== undefined) {
            Master.encode(message.master, writer.uint32(82).fork()).ldelim();
        }
        if (message.ipAllocationPolicy !== undefined) {
            IPAllocationPolicy.encode(
                message.ipAllocationPolicy,
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.gatewayIpv4Address !== undefined) {
            writer.uint32(98).string(message.gatewayIpv4Address);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(106).string(message.serviceAccountId);
        }
        if (message.nodeServiceAccountId !== '') {
            writer.uint32(114).string(message.nodeServiceAccountId);
        }
        if (message.releaseChannel !== 0) {
            writer.uint32(120).int32(message.releaseChannel);
        }
        if (message.networkPolicy !== undefined) {
            NetworkPolicy.encode(
                message.networkPolicy,
                writer.uint32(130).fork()
            ).ldelim();
        }
        if (message.kmsProvider !== undefined) {
            KMSProvider.encode(
                message.kmsProvider,
                writer.uint32(138).fork()
            ).ldelim();
        }
        if (message.logGroupId !== '') {
            writer.uint32(146).string(message.logGroupId);
        }
        if (message.cilium !== undefined) {
            Cilium.encode(message.cilium, writer.uint32(154).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
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
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Cluster_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.health = reader.int32() as any;
                    break;
                case 9:
                    message.networkId = reader.string();
                    break;
                case 10:
                    message.master = Master.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.ipAllocationPolicy = IPAllocationPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 12:
                    message.gatewayIpv4Address = reader.string();
                    break;
                case 13:
                    message.serviceAccountId = reader.string();
                    break;
                case 14:
                    message.nodeServiceAccountId = reader.string();
                    break;
                case 15:
                    message.releaseChannel = reader.int32() as any;
                    break;
                case 16:
                    message.networkPolicy = NetworkPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 17:
                    message.kmsProvider = KMSProvider.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 18:
                    message.logGroupId = reader.string();
                    break;
                case 19:
                    message.cilium = Cilium.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Cluster {
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = cluster_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = cluster_HealthFromJSON(object.health);
        } else {
            message.health = 0;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (object.master !== undefined && object.master !== null) {
            message.master = Master.fromJSON(object.master);
        } else {
            message.master = undefined;
        }
        if (
            object.ipAllocationPolicy !== undefined &&
            object.ipAllocationPolicy !== null
        ) {
            message.ipAllocationPolicy = IPAllocationPolicy.fromJSON(
                object.ipAllocationPolicy
            );
        } else {
            message.ipAllocationPolicy = undefined;
        }
        if (
            object.gatewayIpv4Address !== undefined &&
            object.gatewayIpv4Address !== null
        ) {
            message.gatewayIpv4Address = String(object.gatewayIpv4Address);
        } else {
            message.gatewayIpv4Address = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.nodeServiceAccountId !== undefined &&
            object.nodeServiceAccountId !== null
        ) {
            message.nodeServiceAccountId = String(object.nodeServiceAccountId);
        } else {
            message.nodeServiceAccountId = '';
        }
        if (
            object.releaseChannel !== undefined &&
            object.releaseChannel !== null
        ) {
            message.releaseChannel = releaseChannelFromJSON(
                object.releaseChannel
            );
        } else {
            message.releaseChannel = 0;
        }
        if (
            object.networkPolicy !== undefined &&
            object.networkPolicy !== null
        ) {
            message.networkPolicy = NetworkPolicy.fromJSON(
                object.networkPolicy
            );
        } else {
            message.networkPolicy = undefined;
        }
        if (object.kmsProvider !== undefined && object.kmsProvider !== null) {
            message.kmsProvider = KMSProvider.fromJSON(object.kmsProvider);
        } else {
            message.kmsProvider = undefined;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        if (object.cilium !== undefined && object.cilium !== null) {
            message.cilium = Cilium.fromJSON(object.cilium);
        } else {
            message.cilium = undefined;
        }
        return message;
    },

    toJSON(message: Cluster): unknown {
        const obj: any = {};
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
        message.status !== undefined &&
            (obj.status = cluster_StatusToJSON(message.status));
        message.health !== undefined &&
            (obj.health = cluster_HealthToJSON(message.health));
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.master !== undefined &&
            (obj.master = message.master
                ? Master.toJSON(message.master)
                : undefined);
        message.ipAllocationPolicy !== undefined &&
            (obj.ipAllocationPolicy = message.ipAllocationPolicy
                ? IPAllocationPolicy.toJSON(message.ipAllocationPolicy)
                : undefined);
        message.gatewayIpv4Address !== undefined &&
            (obj.gatewayIpv4Address = message.gatewayIpv4Address);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.nodeServiceAccountId !== undefined &&
            (obj.nodeServiceAccountId = message.nodeServiceAccountId);
        message.releaseChannel !== undefined &&
            (obj.releaseChannel = releaseChannelToJSON(message.releaseChannel));
        message.networkPolicy !== undefined &&
            (obj.networkPolicy = message.networkPolicy
                ? NetworkPolicy.toJSON(message.networkPolicy)
                : undefined);
        message.kmsProvider !== undefined &&
            (obj.kmsProvider = message.kmsProvider
                ? KMSProvider.toJSON(message.kmsProvider)
                : undefined);
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        message.cilium !== undefined &&
            (obj.cilium = message.cilium
                ? Cilium.toJSON(message.cilium)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Cluster>): Cluster {
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
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
        } else {
            message.status = 0;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = object.health;
        } else {
            message.health = 0;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (object.master !== undefined && object.master !== null) {
            message.master = Master.fromPartial(object.master);
        } else {
            message.master = undefined;
        }
        if (
            object.ipAllocationPolicy !== undefined &&
            object.ipAllocationPolicy !== null
        ) {
            message.ipAllocationPolicy = IPAllocationPolicy.fromPartial(
                object.ipAllocationPolicy
            );
        } else {
            message.ipAllocationPolicy = undefined;
        }
        if (
            object.gatewayIpv4Address !== undefined &&
            object.gatewayIpv4Address !== null
        ) {
            message.gatewayIpv4Address = object.gatewayIpv4Address;
        } else {
            message.gatewayIpv4Address = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.nodeServiceAccountId !== undefined &&
            object.nodeServiceAccountId !== null
        ) {
            message.nodeServiceAccountId = object.nodeServiceAccountId;
        } else {
            message.nodeServiceAccountId = '';
        }
        if (
            object.releaseChannel !== undefined &&
            object.releaseChannel !== null
        ) {
            message.releaseChannel = object.releaseChannel;
        } else {
            message.releaseChannel = 0;
        }
        if (
            object.networkPolicy !== undefined &&
            object.networkPolicy !== null
        ) {
            message.networkPolicy = NetworkPolicy.fromPartial(
                object.networkPolicy
            );
        } else {
            message.networkPolicy = undefined;
        }
        if (object.kmsProvider !== undefined && object.kmsProvider !== null) {
            message.kmsProvider = KMSProvider.fromPartial(object.kmsProvider);
        } else {
            message.kmsProvider = undefined;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        if (object.cilium !== undefined && object.cilium !== null) {
            message.cilium = Cilium.fromPartial(object.cilium);
        } else {
            message.cilium = undefined;
        }
        return message;
    },
};

const baseCluster_LabelsEntry: object = { key: '', value: '' };

export const Cluster_LabelsEntry = {
    encode(
        message: Cluster_LabelsEntry,
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
    ): Cluster_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
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

    fromJSON(object: any): Cluster_LabelsEntry {
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
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

    toJSON(message: Cluster_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<Cluster_LabelsEntry>): Cluster_LabelsEntry {
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
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

const baseMaster: object = { version: '', securityGroupIds: '' };

export const Master = {
    encode(
        message: Master,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.zonalMaster !== undefined) {
            ZonalMaster.encode(
                message.zonalMaster,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.regionalMaster !== undefined) {
            RegionalMaster.encode(
                message.regionalMaster,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        if (message.endpoints !== undefined) {
            MasterEndpoints.encode(
                message.endpoints,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.masterAuth !== undefined) {
            MasterAuth.encode(
                message.masterAuth,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.versionInfo !== undefined) {
            VersionInfo.encode(
                message.versionInfo,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.maintenancePolicy !== undefined) {
            MasterMaintenancePolicy.encode(
                message.maintenancePolicy,
                writer.uint32(50).fork()
            ).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Master {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaster } as Master;
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zonalMaster = ZonalMaster.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.regionalMaster = RegionalMaster.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.endpoints = MasterEndpoints.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.masterAuth = MasterAuth.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.versionInfo = VersionInfo.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.maintenancePolicy = MasterMaintenancePolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Master {
        const message = { ...baseMaster } as Master;
        message.securityGroupIds = [];
        if (object.zonalMaster !== undefined && object.zonalMaster !== null) {
            message.zonalMaster = ZonalMaster.fromJSON(object.zonalMaster);
        } else {
            message.zonalMaster = undefined;
        }
        if (
            object.regionalMaster !== undefined &&
            object.regionalMaster !== null
        ) {
            message.regionalMaster = RegionalMaster.fromJSON(
                object.regionalMaster
            );
        } else {
            message.regionalMaster = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        } else {
            message.version = '';
        }
        if (object.endpoints !== undefined && object.endpoints !== null) {
            message.endpoints = MasterEndpoints.fromJSON(object.endpoints);
        } else {
            message.endpoints = undefined;
        }
        if (object.masterAuth !== undefined && object.masterAuth !== null) {
            message.masterAuth = MasterAuth.fromJSON(object.masterAuth);
        } else {
            message.masterAuth = undefined;
        }
        if (object.versionInfo !== undefined && object.versionInfo !== null) {
            message.versionInfo = VersionInfo.fromJSON(object.versionInfo);
        } else {
            message.versionInfo = undefined;
        }
        if (
            object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null
        ) {
            message.maintenancePolicy = MasterMaintenancePolicy.fromJSON(
                object.maintenancePolicy
            );
        } else {
            message.maintenancePolicy = undefined;
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

    toJSON(message: Master): unknown {
        const obj: any = {};
        message.zonalMaster !== undefined &&
            (obj.zonalMaster = message.zonalMaster
                ? ZonalMaster.toJSON(message.zonalMaster)
                : undefined);
        message.regionalMaster !== undefined &&
            (obj.regionalMaster = message.regionalMaster
                ? RegionalMaster.toJSON(message.regionalMaster)
                : undefined);
        message.version !== undefined && (obj.version = message.version);
        message.endpoints !== undefined &&
            (obj.endpoints = message.endpoints
                ? MasterEndpoints.toJSON(message.endpoints)
                : undefined);
        message.masterAuth !== undefined &&
            (obj.masterAuth = message.masterAuth
                ? MasterAuth.toJSON(message.masterAuth)
                : undefined);
        message.versionInfo !== undefined &&
            (obj.versionInfo = message.versionInfo
                ? VersionInfo.toJSON(message.versionInfo)
                : undefined);
        message.maintenancePolicy !== undefined &&
            (obj.maintenancePolicy = message.maintenancePolicy
                ? MasterMaintenancePolicy.toJSON(message.maintenancePolicy)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Master>): Master {
        const message = { ...baseMaster } as Master;
        message.securityGroupIds = [];
        if (object.zonalMaster !== undefined && object.zonalMaster !== null) {
            message.zonalMaster = ZonalMaster.fromPartial(object.zonalMaster);
        } else {
            message.zonalMaster = undefined;
        }
        if (
            object.regionalMaster !== undefined &&
            object.regionalMaster !== null
        ) {
            message.regionalMaster = RegionalMaster.fromPartial(
                object.regionalMaster
            );
        } else {
            message.regionalMaster = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        } else {
            message.version = '';
        }
        if (object.endpoints !== undefined && object.endpoints !== null) {
            message.endpoints = MasterEndpoints.fromPartial(object.endpoints);
        } else {
            message.endpoints = undefined;
        }
        if (object.masterAuth !== undefined && object.masterAuth !== null) {
            message.masterAuth = MasterAuth.fromPartial(object.masterAuth);
        } else {
            message.masterAuth = undefined;
        }
        if (object.versionInfo !== undefined && object.versionInfo !== null) {
            message.versionInfo = VersionInfo.fromPartial(object.versionInfo);
        } else {
            message.versionInfo = undefined;
        }
        if (
            object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null
        ) {
            message.maintenancePolicy = MasterMaintenancePolicy.fromPartial(
                object.maintenancePolicy
            );
        } else {
            message.maintenancePolicy = undefined;
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

const baseMasterAuth: object = { clusterCaCertificate: '' };

export const MasterAuth = {
    encode(
        message: MasterAuth,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterCaCertificate !== '') {
            writer.uint32(10).string(message.clusterCaCertificate);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MasterAuth {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMasterAuth } as MasterAuth;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterCaCertificate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MasterAuth {
        const message = { ...baseMasterAuth } as MasterAuth;
        if (
            object.clusterCaCertificate !== undefined &&
            object.clusterCaCertificate !== null
        ) {
            message.clusterCaCertificate = String(object.clusterCaCertificate);
        } else {
            message.clusterCaCertificate = '';
        }
        return message;
    },

    toJSON(message: MasterAuth): unknown {
        const obj: any = {};
        message.clusterCaCertificate !== undefined &&
            (obj.clusterCaCertificate = message.clusterCaCertificate);
        return obj;
    },

    fromPartial(object: DeepPartial<MasterAuth>): MasterAuth {
        const message = { ...baseMasterAuth } as MasterAuth;
        if (
            object.clusterCaCertificate !== undefined &&
            object.clusterCaCertificate !== null
        ) {
            message.clusterCaCertificate = object.clusterCaCertificate;
        } else {
            message.clusterCaCertificate = '';
        }
        return message;
    },
};

const baseZonalMaster: object = {
    zoneId: '',
    internalV4Address: '',
    externalV4Address: '',
};

export const ZonalMaster = {
    encode(
        message: ZonalMaster,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.internalV4Address !== '') {
            writer.uint32(18).string(message.internalV4Address);
        }
        if (message.externalV4Address !== '') {
            writer.uint32(26).string(message.externalV4Address);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ZonalMaster {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseZonalMaster } as ZonalMaster;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.internalV4Address = reader.string();
                    break;
                case 3:
                    message.externalV4Address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ZonalMaster {
        const message = { ...baseZonalMaster } as ZonalMaster;
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (
            object.internalV4Address !== undefined &&
            object.internalV4Address !== null
        ) {
            message.internalV4Address = String(object.internalV4Address);
        } else {
            message.internalV4Address = '';
        }
        if (
            object.externalV4Address !== undefined &&
            object.externalV4Address !== null
        ) {
            message.externalV4Address = String(object.externalV4Address);
        } else {
            message.externalV4Address = '';
        }
        return message;
    },

    toJSON(message: ZonalMaster): unknown {
        const obj: any = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.internalV4Address !== undefined &&
            (obj.internalV4Address = message.internalV4Address);
        message.externalV4Address !== undefined &&
            (obj.externalV4Address = message.externalV4Address);
        return obj;
    },

    fromPartial(object: DeepPartial<ZonalMaster>): ZonalMaster {
        const message = { ...baseZonalMaster } as ZonalMaster;
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (
            object.internalV4Address !== undefined &&
            object.internalV4Address !== null
        ) {
            message.internalV4Address = object.internalV4Address;
        } else {
            message.internalV4Address = '';
        }
        if (
            object.externalV4Address !== undefined &&
            object.externalV4Address !== null
        ) {
            message.externalV4Address = object.externalV4Address;
        } else {
            message.externalV4Address = '';
        }
        return message;
    },
};

const baseRegionalMaster: object = {
    regionId: '',
    internalV4Address: '',
    externalV4Address: '',
};

export const RegionalMaster = {
    encode(
        message: RegionalMaster,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.regionId !== '') {
            writer.uint32(10).string(message.regionId);
        }
        if (message.internalV4Address !== '') {
            writer.uint32(18).string(message.internalV4Address);
        }
        if (message.externalV4Address !== '') {
            writer.uint32(26).string(message.externalV4Address);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RegionalMaster {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegionalMaster } as RegionalMaster;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.regionId = reader.string();
                    break;
                case 2:
                    message.internalV4Address = reader.string();
                    break;
                case 3:
                    message.externalV4Address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RegionalMaster {
        const message = { ...baseRegionalMaster } as RegionalMaster;
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = String(object.regionId);
        } else {
            message.regionId = '';
        }
        if (
            object.internalV4Address !== undefined &&
            object.internalV4Address !== null
        ) {
            message.internalV4Address = String(object.internalV4Address);
        } else {
            message.internalV4Address = '';
        }
        if (
            object.externalV4Address !== undefined &&
            object.externalV4Address !== null
        ) {
            message.externalV4Address = String(object.externalV4Address);
        } else {
            message.externalV4Address = '';
        }
        return message;
    },

    toJSON(message: RegionalMaster): unknown {
        const obj: any = {};
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.internalV4Address !== undefined &&
            (obj.internalV4Address = message.internalV4Address);
        message.externalV4Address !== undefined &&
            (obj.externalV4Address = message.externalV4Address);
        return obj;
    },

    fromPartial(object: DeepPartial<RegionalMaster>): RegionalMaster {
        const message = { ...baseRegionalMaster } as RegionalMaster;
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = object.regionId;
        } else {
            message.regionId = '';
        }
        if (
            object.internalV4Address !== undefined &&
            object.internalV4Address !== null
        ) {
            message.internalV4Address = object.internalV4Address;
        } else {
            message.internalV4Address = '';
        }
        if (
            object.externalV4Address !== undefined &&
            object.externalV4Address !== null
        ) {
            message.externalV4Address = object.externalV4Address;
        } else {
            message.externalV4Address = '';
        }
        return message;
    },
};

const baseMasterEndpoints: object = {
    internalV4Endpoint: '',
    externalV4Endpoint: '',
};

export const MasterEndpoints = {
    encode(
        message: MasterEndpoints,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.internalV4Endpoint !== '') {
            writer.uint32(10).string(message.internalV4Endpoint);
        }
        if (message.externalV4Endpoint !== '') {
            writer.uint32(18).string(message.externalV4Endpoint);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MasterEndpoints {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMasterEndpoints } as MasterEndpoints;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.internalV4Endpoint = reader.string();
                    break;
                case 2:
                    message.externalV4Endpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MasterEndpoints {
        const message = { ...baseMasterEndpoints } as MasterEndpoints;
        if (
            object.internalV4Endpoint !== undefined &&
            object.internalV4Endpoint !== null
        ) {
            message.internalV4Endpoint = String(object.internalV4Endpoint);
        } else {
            message.internalV4Endpoint = '';
        }
        if (
            object.externalV4Endpoint !== undefined &&
            object.externalV4Endpoint !== null
        ) {
            message.externalV4Endpoint = String(object.externalV4Endpoint);
        } else {
            message.externalV4Endpoint = '';
        }
        return message;
    },

    toJSON(message: MasterEndpoints): unknown {
        const obj: any = {};
        message.internalV4Endpoint !== undefined &&
            (obj.internalV4Endpoint = message.internalV4Endpoint);
        message.externalV4Endpoint !== undefined &&
            (obj.externalV4Endpoint = message.externalV4Endpoint);
        return obj;
    },

    fromPartial(object: DeepPartial<MasterEndpoints>): MasterEndpoints {
        const message = { ...baseMasterEndpoints } as MasterEndpoints;
        if (
            object.internalV4Endpoint !== undefined &&
            object.internalV4Endpoint !== null
        ) {
            message.internalV4Endpoint = object.internalV4Endpoint;
        } else {
            message.internalV4Endpoint = '';
        }
        if (
            object.externalV4Endpoint !== undefined &&
            object.externalV4Endpoint !== null
        ) {
            message.externalV4Endpoint = object.externalV4Endpoint;
        } else {
            message.externalV4Endpoint = '';
        }
        return message;
    },
};

const baseIPAllocationPolicy: object = {
    clusterIpv4CidrBlock: '',
    nodeIpv4CidrMaskSize: 0,
    serviceIpv4CidrBlock: '',
    clusterIpv6CidrBlock: '',
    serviceIpv6CidrBlock: '',
};

export const IPAllocationPolicy = {
    encode(
        message: IPAllocationPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterIpv4CidrBlock !== '') {
            writer.uint32(10).string(message.clusterIpv4CidrBlock);
        }
        if (message.nodeIpv4CidrMaskSize !== 0) {
            writer.uint32(40).int64(message.nodeIpv4CidrMaskSize);
        }
        if (message.serviceIpv4CidrBlock !== '') {
            writer.uint32(18).string(message.serviceIpv4CidrBlock);
        }
        if (message.clusterIpv6CidrBlock !== '') {
            writer.uint32(50).string(message.clusterIpv6CidrBlock);
        }
        if (message.serviceIpv6CidrBlock !== '') {
            writer.uint32(58).string(message.serviceIpv6CidrBlock);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): IPAllocationPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIPAllocationPolicy } as IPAllocationPolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterIpv4CidrBlock = reader.string();
                    break;
                case 5:
                    message.nodeIpv4CidrMaskSize = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 2:
                    message.serviceIpv4CidrBlock = reader.string();
                    break;
                case 6:
                    message.clusterIpv6CidrBlock = reader.string();
                    break;
                case 7:
                    message.serviceIpv6CidrBlock = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): IPAllocationPolicy {
        const message = { ...baseIPAllocationPolicy } as IPAllocationPolicy;
        if (
            object.clusterIpv4CidrBlock !== undefined &&
            object.clusterIpv4CidrBlock !== null
        ) {
            message.clusterIpv4CidrBlock = String(object.clusterIpv4CidrBlock);
        } else {
            message.clusterIpv4CidrBlock = '';
        }
        if (
            object.nodeIpv4CidrMaskSize !== undefined &&
            object.nodeIpv4CidrMaskSize !== null
        ) {
            message.nodeIpv4CidrMaskSize = Number(object.nodeIpv4CidrMaskSize);
        } else {
            message.nodeIpv4CidrMaskSize = 0;
        }
        if (
            object.serviceIpv4CidrBlock !== undefined &&
            object.serviceIpv4CidrBlock !== null
        ) {
            message.serviceIpv4CidrBlock = String(object.serviceIpv4CidrBlock);
        } else {
            message.serviceIpv4CidrBlock = '';
        }
        if (
            object.clusterIpv6CidrBlock !== undefined &&
            object.clusterIpv6CidrBlock !== null
        ) {
            message.clusterIpv6CidrBlock = String(object.clusterIpv6CidrBlock);
        } else {
            message.clusterIpv6CidrBlock = '';
        }
        if (
            object.serviceIpv6CidrBlock !== undefined &&
            object.serviceIpv6CidrBlock !== null
        ) {
            message.serviceIpv6CidrBlock = String(object.serviceIpv6CidrBlock);
        } else {
            message.serviceIpv6CidrBlock = '';
        }
        return message;
    },

    toJSON(message: IPAllocationPolicy): unknown {
        const obj: any = {};
        message.clusterIpv4CidrBlock !== undefined &&
            (obj.clusterIpv4CidrBlock = message.clusterIpv4CidrBlock);
        message.nodeIpv4CidrMaskSize !== undefined &&
            (obj.nodeIpv4CidrMaskSize = message.nodeIpv4CidrMaskSize);
        message.serviceIpv4CidrBlock !== undefined &&
            (obj.serviceIpv4CidrBlock = message.serviceIpv4CidrBlock);
        message.clusterIpv6CidrBlock !== undefined &&
            (obj.clusterIpv6CidrBlock = message.clusterIpv6CidrBlock);
        message.serviceIpv6CidrBlock !== undefined &&
            (obj.serviceIpv6CidrBlock = message.serviceIpv6CidrBlock);
        return obj;
    },

    fromPartial(object: DeepPartial<IPAllocationPolicy>): IPAllocationPolicy {
        const message = { ...baseIPAllocationPolicy } as IPAllocationPolicy;
        if (
            object.clusterIpv4CidrBlock !== undefined &&
            object.clusterIpv4CidrBlock !== null
        ) {
            message.clusterIpv4CidrBlock = object.clusterIpv4CidrBlock;
        } else {
            message.clusterIpv4CidrBlock = '';
        }
        if (
            object.nodeIpv4CidrMaskSize !== undefined &&
            object.nodeIpv4CidrMaskSize !== null
        ) {
            message.nodeIpv4CidrMaskSize = object.nodeIpv4CidrMaskSize;
        } else {
            message.nodeIpv4CidrMaskSize = 0;
        }
        if (
            object.serviceIpv4CidrBlock !== undefined &&
            object.serviceIpv4CidrBlock !== null
        ) {
            message.serviceIpv4CidrBlock = object.serviceIpv4CidrBlock;
        } else {
            message.serviceIpv4CidrBlock = '';
        }
        if (
            object.clusterIpv6CidrBlock !== undefined &&
            object.clusterIpv6CidrBlock !== null
        ) {
            message.clusterIpv6CidrBlock = object.clusterIpv6CidrBlock;
        } else {
            message.clusterIpv6CidrBlock = '';
        }
        if (
            object.serviceIpv6CidrBlock !== undefined &&
            object.serviceIpv6CidrBlock !== null
        ) {
            message.serviceIpv6CidrBlock = object.serviceIpv6CidrBlock;
        } else {
            message.serviceIpv6CidrBlock = '';
        }
        return message;
    },
};

const baseMasterMaintenancePolicy: object = { autoUpgrade: false };

export const MasterMaintenancePolicy = {
    encode(
        message: MasterMaintenancePolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.autoUpgrade === true) {
            writer.uint32(8).bool(message.autoUpgrade);
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(
                message.maintenanceWindow,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MasterMaintenancePolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMasterMaintenancePolicy,
        } as MasterMaintenancePolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.autoUpgrade = reader.bool();
                    break;
                case 2:
                    message.maintenanceWindow = MaintenanceWindow.decode(
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

    fromJSON(object: any): MasterMaintenancePolicy {
        const message = {
            ...baseMasterMaintenancePolicy,
        } as MasterMaintenancePolicy;
        if (object.autoUpgrade !== undefined && object.autoUpgrade !== null) {
            message.autoUpgrade = Boolean(object.autoUpgrade);
        } else {
            message.autoUpgrade = false;
        }
        if (
            object.maintenanceWindow !== undefined &&
            object.maintenanceWindow !== null
        ) {
            message.maintenanceWindow = MaintenanceWindow.fromJSON(
                object.maintenanceWindow
            );
        } else {
            message.maintenanceWindow = undefined;
        }
        return message;
    },

    toJSON(message: MasterMaintenancePolicy): unknown {
        const obj: any = {};
        message.autoUpgrade !== undefined &&
            (obj.autoUpgrade = message.autoUpgrade);
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<MasterMaintenancePolicy>
    ): MasterMaintenancePolicy {
        const message = {
            ...baseMasterMaintenancePolicy,
        } as MasterMaintenancePolicy;
        if (object.autoUpgrade !== undefined && object.autoUpgrade !== null) {
            message.autoUpgrade = object.autoUpgrade;
        } else {
            message.autoUpgrade = false;
        }
        if (
            object.maintenanceWindow !== undefined &&
            object.maintenanceWindow !== null
        ) {
            message.maintenanceWindow = MaintenanceWindow.fromPartial(
                object.maintenanceWindow
            );
        } else {
            message.maintenanceWindow = undefined;
        }
        return message;
    },
};

const baseNetworkPolicy: object = { provider: 0 };

export const NetworkPolicy = {
    encode(
        message: NetworkPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.provider !== 0) {
            writer.uint32(8).int32(message.provider);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkPolicy } as NetworkPolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.provider = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NetworkPolicy {
        const message = { ...baseNetworkPolicy } as NetworkPolicy;
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = networkPolicy_ProviderFromJSON(object.provider);
        } else {
            message.provider = 0;
        }
        return message;
    },

    toJSON(message: NetworkPolicy): unknown {
        const obj: any = {};
        message.provider !== undefined &&
            (obj.provider = networkPolicy_ProviderToJSON(message.provider));
        return obj;
    },

    fromPartial(object: DeepPartial<NetworkPolicy>): NetworkPolicy {
        const message = { ...baseNetworkPolicy } as NetworkPolicy;
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        } else {
            message.provider = 0;
        }
        return message;
    },
};

const baseKMSProvider: object = { keyId: '' };

export const KMSProvider = {
    encode(
        message: KMSProvider,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): KMSProvider {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKMSProvider } as KMSProvider;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KMSProvider {
        const message = { ...baseKMSProvider } as KMSProvider;
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        } else {
            message.keyId = '';
        }
        return message;
    },

    toJSON(message: KMSProvider): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },

    fromPartial(object: DeepPartial<KMSProvider>): KMSProvider {
        const message = { ...baseKMSProvider } as KMSProvider;
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        } else {
            message.keyId = '';
        }
        return message;
    },
};

const baseCilium: object = { routingMode: 0 };

export const Cilium = {
    encode(
        message: Cilium,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.routingMode !== 0) {
            writer.uint32(8).int32(message.routingMode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cilium {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCilium } as Cilium;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingMode = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Cilium {
        const message = { ...baseCilium } as Cilium;
        if (object.routingMode !== undefined && object.routingMode !== null) {
            message.routingMode = cilium_RoutingModeFromJSON(
                object.routingMode
            );
        } else {
            message.routingMode = 0;
        }
        return message;
    },

    toJSON(message: Cilium): unknown {
        const obj: any = {};
        message.routingMode !== undefined &&
            (obj.routingMode = cilium_RoutingModeToJSON(message.routingMode));
        return obj;
    },

    fromPartial(object: DeepPartial<Cilium>): Cilium {
        const message = { ...baseCilium } as Cilium;
        if (object.routingMode !== undefined && object.routingMode !== null) {
            message.routingMode = object.routingMode;
        } else {
            message.routingMode = 0;
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
