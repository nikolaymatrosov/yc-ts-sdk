/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { MaintenanceWindow } from '../../../../yandex/cloud/k8s/v1/maintenance';
import { VersionInfo } from '../../../../yandex/cloud/k8s/v1/version';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.k8s.v1';
export var ReleaseChannel;
(function (ReleaseChannel) {
    ReleaseChannel[ReleaseChannel["RELEASE_CHANNEL_UNSPECIFIED"] = 0] = "RELEASE_CHANNEL_UNSPECIFIED";
    /**
     * RAPID - Minor updates with new functions and improvements are often added.
     * You can't disable automatic updates in this channel, but you can specify a time period for automatic updates.
     */
    ReleaseChannel[ReleaseChannel["RAPID"] = 1] = "RAPID";
    /** REGULAR - New functions and improvements are added in chunks shortly after they appear on `RAPID`. */
    ReleaseChannel[ReleaseChannel["REGULAR"] = 2] = "REGULAR";
    /** STABLE - Only updates related to bug fixes or security improvements are added. */
    ReleaseChannel[ReleaseChannel["STABLE"] = 3] = "STABLE";
    ReleaseChannel[ReleaseChannel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ReleaseChannel || (ReleaseChannel = {}));
export function releaseChannelFromJSON(object) {
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
export function releaseChannelToJSON(object) {
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
export var Cluster_Status;
(function (Cluster_Status) {
    Cluster_Status[Cluster_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** PROVISIONING - Kubernetes cluster is waiting for resources to be allocated. */
    Cluster_Status[Cluster_Status["PROVISIONING"] = 1] = "PROVISIONING";
    /** RUNNING - Kubernetes cluster is running. */
    Cluster_Status[Cluster_Status["RUNNING"] = 2] = "RUNNING";
    /** RECONCILING - Kubernetes cluster is being reconciled. */
    Cluster_Status[Cluster_Status["RECONCILING"] = 3] = "RECONCILING";
    /** STOPPING - Kubernetes cluster is being stopped. */
    Cluster_Status[Cluster_Status["STOPPING"] = 4] = "STOPPING";
    /** STOPPED - Kubernetes cluster stopped. */
    Cluster_Status[Cluster_Status["STOPPED"] = 5] = "STOPPED";
    /** DELETING - Kubernetes cluster is being deleted. */
    Cluster_Status[Cluster_Status["DELETING"] = 6] = "DELETING";
    /** STARTING - Kubernetes cluster is being started. */
    Cluster_Status[Cluster_Status["STARTING"] = 7] = "STARTING";
    Cluster_Status[Cluster_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Status || (Cluster_Status = {}));
export function cluster_StatusFromJSON(object) {
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
export function cluster_StatusToJSON(object) {
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
export var Cluster_Health;
(function (Cluster_Health) {
    Cluster_Health[Cluster_Health["HEALTH_UNSPECIFIED"] = 0] = "HEALTH_UNSPECIFIED";
    /** HEALTHY - Kubernetes cluster is alive and well. */
    Cluster_Health[Cluster_Health["HEALTHY"] = 1] = "HEALTHY";
    /** UNHEALTHY - Kubernetes cluster is inoperable. */
    Cluster_Health[Cluster_Health["UNHEALTHY"] = 2] = "UNHEALTHY";
    Cluster_Health[Cluster_Health["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cluster_Health || (Cluster_Health = {}));
export function cluster_HealthFromJSON(object) {
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
export function cluster_HealthToJSON(object) {
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
export var NetworkPolicy_Provider;
(function (NetworkPolicy_Provider) {
    NetworkPolicy_Provider[NetworkPolicy_Provider["PROVIDER_UNSPECIFIED"] = 0] = "PROVIDER_UNSPECIFIED";
    NetworkPolicy_Provider[NetworkPolicy_Provider["CALICO"] = 1] = "CALICO";
    NetworkPolicy_Provider[NetworkPolicy_Provider["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NetworkPolicy_Provider || (NetworkPolicy_Provider = {}));
export function networkPolicy_ProviderFromJSON(object) {
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
export function networkPolicy_ProviderToJSON(object) {
    switch (object) {
        case NetworkPolicy_Provider.PROVIDER_UNSPECIFIED:
            return 'PROVIDER_UNSPECIFIED';
        case NetworkPolicy_Provider.CALICO:
            return 'CALICO';
        default:
            return 'UNKNOWN';
    }
}
export var Cilium_RoutingMode;
(function (Cilium_RoutingMode) {
    Cilium_RoutingMode[Cilium_RoutingMode["ROUTING_MODE_UNSPECIFIED"] = 0] = "ROUTING_MODE_UNSPECIFIED";
    Cilium_RoutingMode[Cilium_RoutingMode["TUNNEL"] = 1] = "TUNNEL";
    Cilium_RoutingMode[Cilium_RoutingMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Cilium_RoutingMode || (Cilium_RoutingMode = {}));
export function cilium_RoutingModeFromJSON(object) {
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
export function cilium_RoutingModeToJSON(object) {
    switch (object) {
        case Cilium_RoutingMode.ROUTING_MODE_UNSPECIFIED:
            return 'ROUTING_MODE_UNSPECIFIED';
        case Cilium_RoutingMode.TUNNEL:
            return 'TUNNEL';
        default:
            return 'UNKNOWN';
    }
}
const baseCluster = {
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
            Cluster_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
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
            IPAllocationPolicy.encode(message.ipAllocationPolicy, writer.uint32(90).fork()).ldelim();
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
            NetworkPolicy.encode(message.networkPolicy, writer.uint32(130).fork()).ldelim();
        }
        if (message.kmsProvider !== undefined) {
            KMSProvider.encode(message.kmsProvider, writer.uint32(138).fork()).ldelim();
        }
        if (message.logGroupId !== '') {
            writer.uint32(146).string(message.logGroupId);
        }
        if (message.cilium !== undefined) {
            Cilium.encode(message.cilium, writer.uint32(154).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster };
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
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = Cluster_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.health = reader.int32();
                    break;
                case 9:
                    message.networkId = reader.string();
                    break;
                case 10:
                    message.master = Master.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.ipAllocationPolicy = IPAllocationPolicy.decode(reader, reader.uint32());
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
                    message.releaseChannel = reader.int32();
                    break;
                case 16:
                    message.networkPolicy = NetworkPolicy.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.kmsProvider = KMSProvider.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const message = { ...baseCluster };
        message.labels = {};
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
        if (object.status !== undefined && object.status !== null) {
            message.status = cluster_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = cluster_HealthFromJSON(object.health);
        }
        else {
            message.health = 0;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        }
        else {
            message.networkId = '';
        }
        if (object.master !== undefined && object.master !== null) {
            message.master = Master.fromJSON(object.master);
        }
        else {
            message.master = undefined;
        }
        if (object.ipAllocationPolicy !== undefined &&
            object.ipAllocationPolicy !== null) {
            message.ipAllocationPolicy = IPAllocationPolicy.fromJSON(object.ipAllocationPolicy);
        }
        else {
            message.ipAllocationPolicy = undefined;
        }
        if (object.gatewayIpv4Address !== undefined &&
            object.gatewayIpv4Address !== null) {
            message.gatewayIpv4Address = String(object.gatewayIpv4Address);
        }
        else {
            message.gatewayIpv4Address = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.nodeServiceAccountId !== undefined &&
            object.nodeServiceAccountId !== null) {
            message.nodeServiceAccountId = String(object.nodeServiceAccountId);
        }
        else {
            message.nodeServiceAccountId = '';
        }
        if (object.releaseChannel !== undefined &&
            object.releaseChannel !== null) {
            message.releaseChannel = releaseChannelFromJSON(object.releaseChannel);
        }
        else {
            message.releaseChannel = 0;
        }
        if (object.networkPolicy !== undefined &&
            object.networkPolicy !== null) {
            message.networkPolicy = NetworkPolicy.fromJSON(object.networkPolicy);
        }
        else {
            message.networkPolicy = undefined;
        }
        if (object.kmsProvider !== undefined && object.kmsProvider !== null) {
            message.kmsProvider = KMSProvider.fromJSON(object.kmsProvider);
        }
        else {
            message.kmsProvider = undefined;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        }
        else {
            message.logGroupId = '';
        }
        if (object.cilium !== undefined && object.cilium !== null) {
            message.cilium = Cilium.fromJSON(object.cilium);
        }
        else {
            message.cilium = undefined;
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
    fromPartial(object) {
        const message = { ...baseCluster };
        message.labels = {};
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = object.health;
        }
        else {
            message.health = 0;
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        }
        else {
            message.networkId = '';
        }
        if (object.master !== undefined && object.master !== null) {
            message.master = Master.fromPartial(object.master);
        }
        else {
            message.master = undefined;
        }
        if (object.ipAllocationPolicy !== undefined &&
            object.ipAllocationPolicy !== null) {
            message.ipAllocationPolicy = IPAllocationPolicy.fromPartial(object.ipAllocationPolicy);
        }
        else {
            message.ipAllocationPolicy = undefined;
        }
        if (object.gatewayIpv4Address !== undefined &&
            object.gatewayIpv4Address !== null) {
            message.gatewayIpv4Address = object.gatewayIpv4Address;
        }
        else {
            message.gatewayIpv4Address = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.nodeServiceAccountId !== undefined &&
            object.nodeServiceAccountId !== null) {
            message.nodeServiceAccountId = object.nodeServiceAccountId;
        }
        else {
            message.nodeServiceAccountId = '';
        }
        if (object.releaseChannel !== undefined &&
            object.releaseChannel !== null) {
            message.releaseChannel = object.releaseChannel;
        }
        else {
            message.releaseChannel = 0;
        }
        if (object.networkPolicy !== undefined &&
            object.networkPolicy !== null) {
            message.networkPolicy = NetworkPolicy.fromPartial(object.networkPolicy);
        }
        else {
            message.networkPolicy = undefined;
        }
        if (object.kmsProvider !== undefined && object.kmsProvider !== null) {
            message.kmsProvider = KMSProvider.fromPartial(object.kmsProvider);
        }
        else {
            message.kmsProvider = undefined;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        }
        else {
            message.logGroupId = '';
        }
        if (object.cilium !== undefined && object.cilium !== null) {
            message.cilium = Cilium.fromPartial(object.cilium);
        }
        else {
            message.cilium = undefined;
        }
        return message;
    },
};
const baseCluster_LabelsEntry = { key: '', value: '' };
export const Cluster_LabelsEntry = {
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
        const message = { ...baseCluster_LabelsEntry };
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
        const message = { ...baseCluster_LabelsEntry };
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
        const message = { ...baseCluster_LabelsEntry };
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
const baseMaster = { version: '', securityGroupIds: '' };
export const Master = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.zonalMaster !== undefined) {
            ZonalMaster.encode(message.zonalMaster, writer.uint32(10).fork()).ldelim();
        }
        if (message.regionalMaster !== undefined) {
            RegionalMaster.encode(message.regionalMaster, writer.uint32(58).fork()).ldelim();
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        if (message.endpoints !== undefined) {
            MasterEndpoints.encode(message.endpoints, writer.uint32(26).fork()).ldelim();
        }
        if (message.masterAuth !== undefined) {
            MasterAuth.encode(message.masterAuth, writer.uint32(34).fork()).ldelim();
        }
        if (message.versionInfo !== undefined) {
            VersionInfo.encode(message.versionInfo, writer.uint32(42).fork()).ldelim();
        }
        if (message.maintenancePolicy !== undefined) {
            MasterMaintenancePolicy.encode(message.maintenancePolicy, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(66).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMaster };
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zonalMaster = ZonalMaster.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.regionalMaster = RegionalMaster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.endpoints = MasterEndpoints.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.masterAuth = MasterAuth.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.versionInfo = VersionInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.maintenancePolicy = MasterMaintenancePolicy.decode(reader, reader.uint32());
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
    fromJSON(object) {
        const message = { ...baseMaster };
        message.securityGroupIds = [];
        if (object.zonalMaster !== undefined && object.zonalMaster !== null) {
            message.zonalMaster = ZonalMaster.fromJSON(object.zonalMaster);
        }
        else {
            message.zonalMaster = undefined;
        }
        if (object.regionalMaster !== undefined &&
            object.regionalMaster !== null) {
            message.regionalMaster = RegionalMaster.fromJSON(object.regionalMaster);
        }
        else {
            message.regionalMaster = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = '';
        }
        if (object.endpoints !== undefined && object.endpoints !== null) {
            message.endpoints = MasterEndpoints.fromJSON(object.endpoints);
        }
        else {
            message.endpoints = undefined;
        }
        if (object.masterAuth !== undefined && object.masterAuth !== null) {
            message.masterAuth = MasterAuth.fromJSON(object.masterAuth);
        }
        else {
            message.masterAuth = undefined;
        }
        if (object.versionInfo !== undefined && object.versionInfo !== null) {
            message.versionInfo = VersionInfo.fromJSON(object.versionInfo);
        }
        else {
            message.versionInfo = undefined;
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = MasterMaintenancePolicy.fromJSON(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = undefined;
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
        }
        else {
            obj.securityGroupIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMaster };
        message.securityGroupIds = [];
        if (object.zonalMaster !== undefined && object.zonalMaster !== null) {
            message.zonalMaster = ZonalMaster.fromPartial(object.zonalMaster);
        }
        else {
            message.zonalMaster = undefined;
        }
        if (object.regionalMaster !== undefined &&
            object.regionalMaster !== null) {
            message.regionalMaster = RegionalMaster.fromPartial(object.regionalMaster);
        }
        else {
            message.regionalMaster = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = '';
        }
        if (object.endpoints !== undefined && object.endpoints !== null) {
            message.endpoints = MasterEndpoints.fromPartial(object.endpoints);
        }
        else {
            message.endpoints = undefined;
        }
        if (object.masterAuth !== undefined && object.masterAuth !== null) {
            message.masterAuth = MasterAuth.fromPartial(object.masterAuth);
        }
        else {
            message.masterAuth = undefined;
        }
        if (object.versionInfo !== undefined && object.versionInfo !== null) {
            message.versionInfo = VersionInfo.fromPartial(object.versionInfo);
        }
        else {
            message.versionInfo = undefined;
        }
        if (object.maintenancePolicy !== undefined &&
            object.maintenancePolicy !== null) {
            message.maintenancePolicy = MasterMaintenancePolicy.fromPartial(object.maintenancePolicy);
        }
        else {
            message.maintenancePolicy = undefined;
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
const baseMasterAuth = { clusterCaCertificate: '' };
export const MasterAuth = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterCaCertificate !== '') {
            writer.uint32(10).string(message.clusterCaCertificate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMasterAuth };
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
    fromJSON(object) {
        const message = { ...baseMasterAuth };
        if (object.clusterCaCertificate !== undefined &&
            object.clusterCaCertificate !== null) {
            message.clusterCaCertificate = String(object.clusterCaCertificate);
        }
        else {
            message.clusterCaCertificate = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterCaCertificate !== undefined &&
            (obj.clusterCaCertificate = message.clusterCaCertificate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMasterAuth };
        if (object.clusterCaCertificate !== undefined &&
            object.clusterCaCertificate !== null) {
            message.clusterCaCertificate = object.clusterCaCertificate;
        }
        else {
            message.clusterCaCertificate = '';
        }
        return message;
    },
};
const baseZonalMaster = {
    zoneId: '',
    internalV4Address: '',
    externalV4Address: '',
};
export const ZonalMaster = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseZonalMaster };
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
    fromJSON(object) {
        const message = { ...baseZonalMaster };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        }
        else {
            message.zoneId = '';
        }
        if (object.internalV4Address !== undefined &&
            object.internalV4Address !== null) {
            message.internalV4Address = String(object.internalV4Address);
        }
        else {
            message.internalV4Address = '';
        }
        if (object.externalV4Address !== undefined &&
            object.externalV4Address !== null) {
            message.externalV4Address = String(object.externalV4Address);
        }
        else {
            message.externalV4Address = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.internalV4Address !== undefined &&
            (obj.internalV4Address = message.internalV4Address);
        message.externalV4Address !== undefined &&
            (obj.externalV4Address = message.externalV4Address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseZonalMaster };
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        }
        else {
            message.zoneId = '';
        }
        if (object.internalV4Address !== undefined &&
            object.internalV4Address !== null) {
            message.internalV4Address = object.internalV4Address;
        }
        else {
            message.internalV4Address = '';
        }
        if (object.externalV4Address !== undefined &&
            object.externalV4Address !== null) {
            message.externalV4Address = object.externalV4Address;
        }
        else {
            message.externalV4Address = '';
        }
        return message;
    },
};
const baseRegionalMaster = {
    regionId: '',
    internalV4Address: '',
    externalV4Address: '',
};
export const RegionalMaster = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRegionalMaster };
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
    fromJSON(object) {
        const message = { ...baseRegionalMaster };
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = String(object.regionId);
        }
        else {
            message.regionId = '';
        }
        if (object.internalV4Address !== undefined &&
            object.internalV4Address !== null) {
            message.internalV4Address = String(object.internalV4Address);
        }
        else {
            message.internalV4Address = '';
        }
        if (object.externalV4Address !== undefined &&
            object.externalV4Address !== null) {
            message.externalV4Address = String(object.externalV4Address);
        }
        else {
            message.externalV4Address = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.internalV4Address !== undefined &&
            (obj.internalV4Address = message.internalV4Address);
        message.externalV4Address !== undefined &&
            (obj.externalV4Address = message.externalV4Address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRegionalMaster };
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = object.regionId;
        }
        else {
            message.regionId = '';
        }
        if (object.internalV4Address !== undefined &&
            object.internalV4Address !== null) {
            message.internalV4Address = object.internalV4Address;
        }
        else {
            message.internalV4Address = '';
        }
        if (object.externalV4Address !== undefined &&
            object.externalV4Address !== null) {
            message.externalV4Address = object.externalV4Address;
        }
        else {
            message.externalV4Address = '';
        }
        return message;
    },
};
const baseMasterEndpoints = {
    internalV4Endpoint: '',
    externalV4Endpoint: '',
};
export const MasterEndpoints = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.internalV4Endpoint !== '') {
            writer.uint32(10).string(message.internalV4Endpoint);
        }
        if (message.externalV4Endpoint !== '') {
            writer.uint32(18).string(message.externalV4Endpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMasterEndpoints };
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
    fromJSON(object) {
        const message = { ...baseMasterEndpoints };
        if (object.internalV4Endpoint !== undefined &&
            object.internalV4Endpoint !== null) {
            message.internalV4Endpoint = String(object.internalV4Endpoint);
        }
        else {
            message.internalV4Endpoint = '';
        }
        if (object.externalV4Endpoint !== undefined &&
            object.externalV4Endpoint !== null) {
            message.externalV4Endpoint = String(object.externalV4Endpoint);
        }
        else {
            message.externalV4Endpoint = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.internalV4Endpoint !== undefined &&
            (obj.internalV4Endpoint = message.internalV4Endpoint);
        message.externalV4Endpoint !== undefined &&
            (obj.externalV4Endpoint = message.externalV4Endpoint);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMasterEndpoints };
        if (object.internalV4Endpoint !== undefined &&
            object.internalV4Endpoint !== null) {
            message.internalV4Endpoint = object.internalV4Endpoint;
        }
        else {
            message.internalV4Endpoint = '';
        }
        if (object.externalV4Endpoint !== undefined &&
            object.externalV4Endpoint !== null) {
            message.externalV4Endpoint = object.externalV4Endpoint;
        }
        else {
            message.externalV4Endpoint = '';
        }
        return message;
    },
};
const baseIPAllocationPolicy = {
    clusterIpv4CidrBlock: '',
    nodeIpv4CidrMaskSize: 0,
    serviceIpv4CidrBlock: '',
    clusterIpv6CidrBlock: '',
    serviceIpv6CidrBlock: '',
};
export const IPAllocationPolicy = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIPAllocationPolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterIpv4CidrBlock = reader.string();
                    break;
                case 5:
                    message.nodeIpv4CidrMaskSize = longToNumber(reader.int64());
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
    fromJSON(object) {
        const message = { ...baseIPAllocationPolicy };
        if (object.clusterIpv4CidrBlock !== undefined &&
            object.clusterIpv4CidrBlock !== null) {
            message.clusterIpv4CidrBlock = String(object.clusterIpv4CidrBlock);
        }
        else {
            message.clusterIpv4CidrBlock = '';
        }
        if (object.nodeIpv4CidrMaskSize !== undefined &&
            object.nodeIpv4CidrMaskSize !== null) {
            message.nodeIpv4CidrMaskSize = Number(object.nodeIpv4CidrMaskSize);
        }
        else {
            message.nodeIpv4CidrMaskSize = 0;
        }
        if (object.serviceIpv4CidrBlock !== undefined &&
            object.serviceIpv4CidrBlock !== null) {
            message.serviceIpv4CidrBlock = String(object.serviceIpv4CidrBlock);
        }
        else {
            message.serviceIpv4CidrBlock = '';
        }
        if (object.clusterIpv6CidrBlock !== undefined &&
            object.clusterIpv6CidrBlock !== null) {
            message.clusterIpv6CidrBlock = String(object.clusterIpv6CidrBlock);
        }
        else {
            message.clusterIpv6CidrBlock = '';
        }
        if (object.serviceIpv6CidrBlock !== undefined &&
            object.serviceIpv6CidrBlock !== null) {
            message.serviceIpv6CidrBlock = String(object.serviceIpv6CidrBlock);
        }
        else {
            message.serviceIpv6CidrBlock = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseIPAllocationPolicy };
        if (object.clusterIpv4CidrBlock !== undefined &&
            object.clusterIpv4CidrBlock !== null) {
            message.clusterIpv4CidrBlock = object.clusterIpv4CidrBlock;
        }
        else {
            message.clusterIpv4CidrBlock = '';
        }
        if (object.nodeIpv4CidrMaskSize !== undefined &&
            object.nodeIpv4CidrMaskSize !== null) {
            message.nodeIpv4CidrMaskSize = object.nodeIpv4CidrMaskSize;
        }
        else {
            message.nodeIpv4CidrMaskSize = 0;
        }
        if (object.serviceIpv4CidrBlock !== undefined &&
            object.serviceIpv4CidrBlock !== null) {
            message.serviceIpv4CidrBlock = object.serviceIpv4CidrBlock;
        }
        else {
            message.serviceIpv4CidrBlock = '';
        }
        if (object.clusterIpv6CidrBlock !== undefined &&
            object.clusterIpv6CidrBlock !== null) {
            message.clusterIpv6CidrBlock = object.clusterIpv6CidrBlock;
        }
        else {
            message.clusterIpv6CidrBlock = '';
        }
        if (object.serviceIpv6CidrBlock !== undefined &&
            object.serviceIpv6CidrBlock !== null) {
            message.serviceIpv6CidrBlock = object.serviceIpv6CidrBlock;
        }
        else {
            message.serviceIpv6CidrBlock = '';
        }
        return message;
    },
};
const baseMasterMaintenancePolicy = { autoUpgrade: false };
export const MasterMaintenancePolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.autoUpgrade === true) {
            writer.uint32(8).bool(message.autoUpgrade);
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(message.maintenanceWindow, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMasterMaintenancePolicy,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.autoUpgrade = reader.bool();
                    break;
                case 2:
                    message.maintenanceWindow = MaintenanceWindow.decode(reader, reader.uint32());
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
            ...baseMasterMaintenancePolicy,
        };
        if (object.autoUpgrade !== undefined && object.autoUpgrade !== null) {
            message.autoUpgrade = Boolean(object.autoUpgrade);
        }
        else {
            message.autoUpgrade = false;
        }
        if (object.maintenanceWindow !== undefined &&
            object.maintenanceWindow !== null) {
            message.maintenanceWindow = MaintenanceWindow.fromJSON(object.maintenanceWindow);
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
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMasterMaintenancePolicy,
        };
        if (object.autoUpgrade !== undefined && object.autoUpgrade !== null) {
            message.autoUpgrade = object.autoUpgrade;
        }
        else {
            message.autoUpgrade = false;
        }
        if (object.maintenanceWindow !== undefined &&
            object.maintenanceWindow !== null) {
            message.maintenanceWindow = MaintenanceWindow.fromPartial(object.maintenanceWindow);
        }
        else {
            message.maintenanceWindow = undefined;
        }
        return message;
    },
};
const baseNetworkPolicy = { provider: 0 };
export const NetworkPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.provider !== 0) {
            writer.uint32(8).int32(message.provider);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkPolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.provider = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNetworkPolicy };
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = networkPolicy_ProviderFromJSON(object.provider);
        }
        else {
            message.provider = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.provider !== undefined &&
            (obj.provider = networkPolicy_ProviderToJSON(message.provider));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNetworkPolicy };
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = object.provider;
        }
        else {
            message.provider = 0;
        }
        return message;
    },
};
const baseKMSProvider = { keyId: '' };
export const KMSProvider = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKMSProvider };
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
    fromJSON(object) {
        const message = { ...baseKMSProvider };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseKMSProvider };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        return message;
    },
};
const baseCilium = { routingMode: 0 };
export const Cilium = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.routingMode !== 0) {
            writer.uint32(8).int32(message.routingMode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCilium };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.routingMode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCilium };
        if (object.routingMode !== undefined && object.routingMode !== null) {
            message.routingMode = cilium_RoutingModeFromJSON(object.routingMode);
        }
        else {
            message.routingMode = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.routingMode !== undefined &&
            (obj.routingMode = cilium_RoutingModeToJSON(message.routingMode));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCilium };
        if (object.routingMode !== undefined && object.routingMode !== null) {
            message.routingMode = object.routingMode;
        }
        else {
            message.routingMode = 0;
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