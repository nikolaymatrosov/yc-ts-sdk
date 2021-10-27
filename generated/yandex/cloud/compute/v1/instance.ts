/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.compute.v1';

export enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address, for example 192.0.2.235. */
    IPV4 = 1,
    /** IPV6 - IPv6 address. Not available yet. */
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

/** An Instance resource. For more information, see [Instances](/docs/compute/concepts/vm). */
export interface Instance {
    $type: 'yandex.cloud.compute.v1.Instance';
    /** ID of the instance. */
    id: string;
    /** ID of the folder that the instance belongs to. */
    folderId: string;
    createdAt: Date | undefined;
    /** Name of the instance. 1-63 characters long. */
    name: string;
    /** Description of the instance. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** ID of the availability zone where the instance resides. */
    zoneId: string;
    /** ID of the hardware platform configuration for the instance. */
    platformId: string;
    /** Computing resources of the instance such as the amount of memory and number of cores. */
    resources: Resources | undefined;
    /** Status of the instance. */
    status: Instance_Status;
    /**
     * The metadata `key:value` pairs assigned to this instance. This includes custom metadata and predefined keys.
     *
     * For example, you may use the metadata in order to provide your public SSH key to the instance.
     * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
     */
    metadata: { [key: string]: string };
    /** Boot disk that is attached to the instance. */
    bootDisk: AttachedDisk | undefined;
    /** Array of secondary disks that are attached to the instance. */
    secondaryDisks: AttachedDisk[];
    /** Array of filesystems that are attached to the instance. */
    filesystems: AttachedFilesystem[];
    /** Array of network interfaces that are attached to the instance. */
    networkInterfaces: NetworkInterface[];
    /**
     * A domain name of the instance. FQDN is defined by the server
     * in the format `<hostname>.<region_id>.internal` when the instance is created.
     * If the hostname were not specified when the instance was created, FQDN would be `<id>.auto.internal`.
     */
    fqdn: string;
    /** Scheduling policy configuration. */
    schedulingPolicy: SchedulingPolicy | undefined;
    /**
     * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** Network Settings */
    networkSettings: NetworkSettings | undefined;
    /** Placement policy configuration. */
    placementPolicy: PlacementPolicy | undefined;
}

export enum Instance_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Instance is waiting for resources to be allocated. */
    PROVISIONING = 1,
    /** RUNNING - Instance is running normally. */
    RUNNING = 2,
    /** STOPPING - Instance is being stopped. */
    STOPPING = 3,
    /** STOPPED - Instance stopped. */
    STOPPED = 4,
    /** STARTING - Instance is being started. */
    STARTING = 5,
    /** RESTARTING - Instance is being restarted. */
    RESTARTING = 6,
    /** UPDATING - Instance is being updated. */
    UPDATING = 7,
    /** ERROR - Instance encountered a problem and cannot operate. */
    ERROR = 8,
    /** CRASHED - Instance crashed and will be restarted automatically. */
    CRASHED = 9,
    /** DELETING - Instance is being deleted. */
    DELETING = 10,
    UNRECOGNIZED = -1,
}

export function instance_StatusFromJSON(object: any): Instance_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Instance_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'PROVISIONING':
            return Instance_Status.PROVISIONING;
        case 2:
        case 'RUNNING':
            return Instance_Status.RUNNING;
        case 3:
        case 'STOPPING':
            return Instance_Status.STOPPING;
        case 4:
        case 'STOPPED':
            return Instance_Status.STOPPED;
        case 5:
        case 'STARTING':
            return Instance_Status.STARTING;
        case 6:
        case 'RESTARTING':
            return Instance_Status.RESTARTING;
        case 7:
        case 'UPDATING':
            return Instance_Status.UPDATING;
        case 8:
        case 'ERROR':
            return Instance_Status.ERROR;
        case 9:
        case 'CRASHED':
            return Instance_Status.CRASHED;
        case 10:
        case 'DELETING':
            return Instance_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Instance_Status.UNRECOGNIZED;
    }
}

export function instance_StatusToJSON(object: Instance_Status): string {
    switch (object) {
        case Instance_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Instance_Status.PROVISIONING:
            return 'PROVISIONING';
        case Instance_Status.RUNNING:
            return 'RUNNING';
        case Instance_Status.STOPPING:
            return 'STOPPING';
        case Instance_Status.STOPPED:
            return 'STOPPED';
        case Instance_Status.STARTING:
            return 'STARTING';
        case Instance_Status.RESTARTING:
            return 'RESTARTING';
        case Instance_Status.UPDATING:
            return 'UPDATING';
        case Instance_Status.ERROR:
            return 'ERROR';
        case Instance_Status.CRASHED:
            return 'CRASHED';
        case Instance_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Instance_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.Instance.LabelsEntry';
    key: string;
    value: string;
}

export interface Instance_MetadataEntry {
    $type: 'yandex.cloud.compute.v1.Instance.MetadataEntry';
    key: string;
    value: string;
}

export interface Resources {
    $type: 'yandex.cloud.compute.v1.Resources';
    /** The amount of memory available to the instance, specified in bytes. */
    memory: number;
    /** The number of cores available to the instance. */
    cores: number;
    /**
     * Baseline level of CPU performance with the ability to burst performance above that baseline level.
     * This field sets baseline performance for each core.
     */
    coreFraction: number;
    /** The number of GPUs available to the instance. */
    gpus: number;
}

export interface AttachedDisk {
    $type: 'yandex.cloud.compute.v1.AttachedDisk';
    /** Access mode to the Disk resource. */
    mode: AttachedDisk_Mode;
    /**
     * Serial number that is reflected into the /dev/disk/by-id/ tree
     * of a Linux operating system running within the instance.
     *
     * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
     */
    deviceName: string;
    /** Specifies whether the disk will be auto-deleted when the instance is deleted. */
    autoDelete: boolean;
    /** ID of the disk that is attached to the instance. */
    diskId: string;
}

export enum AttachedDisk_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1,
}

export function attachedDisk_ModeFromJSON(object: any): AttachedDisk_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return AttachedDisk_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'READ_ONLY':
            return AttachedDisk_Mode.READ_ONLY;
        case 2:
        case 'READ_WRITE':
            return AttachedDisk_Mode.READ_WRITE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AttachedDisk_Mode.UNRECOGNIZED;
    }
}

export function attachedDisk_ModeToJSON(object: AttachedDisk_Mode): string {
    switch (object) {
        case AttachedDisk_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case AttachedDisk_Mode.READ_ONLY:
            return 'READ_ONLY';
        case AttachedDisk_Mode.READ_WRITE:
            return 'READ_WRITE';
        default:
            return 'UNKNOWN';
    }
}

export interface AttachedFilesystem {
    $type: 'yandex.cloud.compute.v1.AttachedFilesystem';
    /** Access mode to the filesystem. */
    mode: AttachedFilesystem_Mode;
    /**
     * Name of the device representing the filesystem on the instance.
     *
     * The name should be used for referencing the filesystem from within the instance
     * when it's being mounted, resized etc.
     */
    deviceName: string;
    /** ID of the filesystem that is attached to the instance. */
    filesystemId: string;
}

export enum AttachedFilesystem_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1,
}

export function attachedFilesystem_ModeFromJSON(
    object: any
): AttachedFilesystem_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return AttachedFilesystem_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'READ_ONLY':
            return AttachedFilesystem_Mode.READ_ONLY;
        case 2:
        case 'READ_WRITE':
            return AttachedFilesystem_Mode.READ_WRITE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AttachedFilesystem_Mode.UNRECOGNIZED;
    }
}

export function attachedFilesystem_ModeToJSON(
    object: AttachedFilesystem_Mode
): string {
    switch (object) {
        case AttachedFilesystem_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case AttachedFilesystem_Mode.READ_ONLY:
            return 'READ_ONLY';
        case AttachedFilesystem_Mode.READ_WRITE:
            return 'READ_WRITE';
        default:
            return 'UNKNOWN';
    }
}

export interface NetworkInterface {
    $type: 'yandex.cloud.compute.v1.NetworkInterface';
    /**
     * The index of the network interface, generated by the server, 0,1,2... etc.
     * Currently only one network interface is supported per instance.
     */
    index: string;
    /** MAC address that is assigned to the network interface. */
    macAddress: string;
    /** ID of the subnet. */
    subnetId: string;
    /** Primary IPv4 address that is assigned to the instance for this network interface. */
    primaryV4Address: PrimaryAddress | undefined;
    /** Primary IPv6 address that is assigned to the instance for this network interface. IPv6 not available yet. */
    primaryV6Address: PrimaryAddress | undefined;
    /** ID's of security groups attached to the interface */
    securityGroupIds: string[];
}

export interface PrimaryAddress {
    $type: 'yandex.cloud.compute.v1.PrimaryAddress';
    /** An IPv4 internal network address that is assigned to the instance for this network interface. */
    address: string;
    /** One-to-one NAT configuration. If missing, NAT has not been set up. */
    oneToOneNat: OneToOneNat | undefined;
    /** Internal DNS configuration */
    dnsRecords: DnsRecord[];
}

export interface OneToOneNat {
    $type: 'yandex.cloud.compute.v1.OneToOneNat';
    /** An external IP address associated with this instance. */
    address: string;
    /** IP version for the external IP address. */
    ipVersion: IpVersion;
    /** External DNS configuration */
    dnsRecords: DnsRecord[];
}

export interface DnsRecord {
    $type: 'yandex.cloud.compute.v1.DnsRecord';
    /**
     * Name of the A/AAAA record as specified when creating the instance.
     * Note that if `fqdn' has no trailing '.', it is specified relative to the zone (@see dns_zone_id).
     */
    fqdn: string;
    /** DNS zone id for the record (optional, if not set, some private zone is used). */
    dnsZoneId: string;
    /** DNS record ttl (optional, if not set, a reasonable default is used.) */
    ttl: number;
    /** When true, indicates there is a corresponding auto-created PTR DNS record. */
    ptr: boolean;
}

export interface SchedulingPolicy {
    $type: 'yandex.cloud.compute.v1.SchedulingPolicy';
    /** True for short-lived compute instances. For more information, see [Preemptible VMs](/docs/compute/concepts/preemptible-vm). */
    preemptible: boolean;
}

export interface NetworkSettings {
    $type: 'yandex.cloud.compute.v1.NetworkSettings';
    /** Network Type */
    type: NetworkSettings_Type;
}

export enum NetworkSettings_Type {
    TYPE_UNSPECIFIED = 0,
    /** STANDARD - Standard network. */
    STANDARD = 1,
    /** SOFTWARE_ACCELERATED - Software accelerated network. */
    SOFTWARE_ACCELERATED = 2,
    /** HARDWARE_ACCELERATED - Hardware accelerated network (not available yet, reserved for future use). */
    HARDWARE_ACCELERATED = 3,
    UNRECOGNIZED = -1,
}

export function networkSettings_TypeFromJSON(
    object: any
): NetworkSettings_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return NetworkSettings_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'STANDARD':
            return NetworkSettings_Type.STANDARD;
        case 2:
        case 'SOFTWARE_ACCELERATED':
            return NetworkSettings_Type.SOFTWARE_ACCELERATED;
        case 3:
        case 'HARDWARE_ACCELERATED':
            return NetworkSettings_Type.HARDWARE_ACCELERATED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NetworkSettings_Type.UNRECOGNIZED;
    }
}

export function networkSettings_TypeToJSON(
    object: NetworkSettings_Type
): string {
    switch (object) {
        case NetworkSettings_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case NetworkSettings_Type.STANDARD:
            return 'STANDARD';
        case NetworkSettings_Type.SOFTWARE_ACCELERATED:
            return 'SOFTWARE_ACCELERATED';
        case NetworkSettings_Type.HARDWARE_ACCELERATED:
            return 'HARDWARE_ACCELERATED';
        default:
            return 'UNKNOWN';
    }
}

export interface PlacementPolicy {
    $type: 'yandex.cloud.compute.v1.PlacementPolicy';
    /** Placement group ID. */
    placementGroupId: string;
    /** List of affinity rules. Scheduler will attempt to allocate instances according to order of rules. */
    hostAffinityRules: PlacementPolicy_HostAffinityRule[];
}

/** Affinitity definition */
export interface PlacementPolicy_HostAffinityRule {
    $type: 'yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule';
    /** Affinity label or one of reserved values - 'yc.hostId', 'yc.hostGroupId' */
    key: string;
    /** Include or exclude action */
    op: PlacementPolicy_HostAffinityRule_Operator;
    /** Affinity value or host ID or host group ID */
    values: string[];
}

export enum PlacementPolicy_HostAffinityRule_Operator {
    OPERATOR_UNSPECIFIED = 0,
    IN = 1,
    NOT_IN = 2,
    UNRECOGNIZED = -1,
}

export function placementPolicy_HostAffinityRule_OperatorFromJSON(
    object: any
): PlacementPolicy_HostAffinityRule_Operator {
    switch (object) {
        case 0:
        case 'OPERATOR_UNSPECIFIED':
            return PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED;
        case 1:
        case 'IN':
            return PlacementPolicy_HostAffinityRule_Operator.IN;
        case 2:
        case 'NOT_IN':
            return PlacementPolicy_HostAffinityRule_Operator.NOT_IN;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PlacementPolicy_HostAffinityRule_Operator.UNRECOGNIZED;
    }
}

export function placementPolicy_HostAffinityRule_OperatorToJSON(
    object: PlacementPolicy_HostAffinityRule_Operator
): string {
    switch (object) {
        case PlacementPolicy_HostAffinityRule_Operator.OPERATOR_UNSPECIFIED:
            return 'OPERATOR_UNSPECIFIED';
        case PlacementPolicy_HostAffinityRule_Operator.IN:
            return 'IN';
        case PlacementPolicy_HostAffinityRule_Operator.NOT_IN:
            return 'NOT_IN';
        default:
            return 'UNKNOWN';
    }
}

const baseInstance: object = {
    $type: 'yandex.cloud.compute.v1.Instance',
    id: '',
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    platformId: '',
    status: 0,
    fqdn: '',
    serviceAccountId: '',
};

export const Instance = {
    $type: 'yandex.cloud.compute.v1.Instance' as const,

    encode(
        message: Instance,
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
            Instance_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.compute.v1.Instance.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.platformId !== '') {
            writer.uint32(66).string(message.platformId);
        }
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        Object.entries(message.metadata).forEach(([key, value]) => {
            Instance_MetadataEntry.encode(
                {
                    $type: 'yandex.cloud.compute.v1.Instance.MetadataEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(90).fork()
            ).ldelim();
        });
        if (message.bootDisk !== undefined) {
            AttachedDisk.encode(
                message.bootDisk,
                writer.uint32(98).fork()
            ).ldelim();
        }
        for (const v of message.secondaryDisks) {
            AttachedDisk.encode(v!, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.filesystems) {
            AttachedFilesystem.encode(v!, writer.uint32(170).fork()).ldelim();
        }
        for (const v of message.networkInterfaces) {
            NetworkInterface.encode(v!, writer.uint32(114).fork()).ldelim();
        }
        if (message.fqdn !== '') {
            writer.uint32(130).string(message.fqdn);
        }
        if (message.schedulingPolicy !== undefined) {
            SchedulingPolicy.encode(
                message.schedulingPolicy,
                writer.uint32(138).fork()
            ).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(146).string(message.serviceAccountId);
        }
        if (message.networkSettings !== undefined) {
            NetworkSettings.encode(
                message.networkSettings,
                writer.uint32(154).fork()
            ).ldelim();
        }
        if (message.placementPolicy !== undefined) {
            PlacementPolicy.encode(
                message.placementPolicy,
                writer.uint32(162).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Instance {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInstance } as Instance;
        message.labels = {};
        message.metadata = {};
        message.secondaryDisks = [];
        message.filesystems = [];
        message.networkInterfaces = [];
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
                    const entry6 = Instance_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 8:
                    message.platformId = reader.string();
                    break;
                case 9:
                    message.resources = Resources.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 10:
                    message.status = reader.int32() as any;
                    break;
                case 11:
                    const entry11 = Instance_MetadataEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry11.value !== undefined) {
                        message.metadata[entry11.key] = entry11.value;
                    }
                    break;
                case 12:
                    message.bootDisk = AttachedDisk.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 13:
                    message.secondaryDisks.push(
                        AttachedDisk.decode(reader, reader.uint32())
                    );
                    break;
                case 21:
                    message.filesystems.push(
                        AttachedFilesystem.decode(reader, reader.uint32())
                    );
                    break;
                case 14:
                    message.networkInterfaces.push(
                        NetworkInterface.decode(reader, reader.uint32())
                    );
                    break;
                case 16:
                    message.fqdn = reader.string();
                    break;
                case 17:
                    message.schedulingPolicy = SchedulingPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 18:
                    message.serviceAccountId = reader.string();
                    break;
                case 19:
                    message.networkSettings = NetworkSettings.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 20:
                    message.placementPolicy = PlacementPolicy.decode(
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

    fromJSON(object: any): Instance {
        const message = { ...baseInstance } as Instance;
        message.labels = {};
        message.metadata = {};
        message.secondaryDisks = [];
        message.filesystems = [];
        message.networkInterfaces = [];
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = String(object.platformId);
        } else {
            message.platformId = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = instance_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                message.metadata[key] = String(value);
            });
        }
        if (object.bootDisk !== undefined && object.bootDisk !== null) {
            message.bootDisk = AttachedDisk.fromJSON(object.bootDisk);
        } else {
            message.bootDisk = undefined;
        }
        if (
            object.secondaryDisks !== undefined &&
            object.secondaryDisks !== null
        ) {
            for (const e of object.secondaryDisks) {
                message.secondaryDisks.push(AttachedDisk.fromJSON(e));
            }
        }
        if (object.filesystems !== undefined && object.filesystems !== null) {
            for (const e of object.filesystems) {
                message.filesystems.push(AttachedFilesystem.fromJSON(e));
            }
        }
        if (
            object.networkInterfaces !== undefined &&
            object.networkInterfaces !== null
        ) {
            for (const e of object.networkInterfaces) {
                message.networkInterfaces.push(NetworkInterface.fromJSON(e));
            }
        }
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = String(object.fqdn);
        } else {
            message.fqdn = '';
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
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.networkSettings !== undefined &&
            object.networkSettings !== null
        ) {
            message.networkSettings = NetworkSettings.fromJSON(
                object.networkSettings
            );
        } else {
            message.networkSettings = undefined;
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
        return message;
    },

    toJSON(message: Instance): unknown {
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.platformId !== undefined &&
            (obj.platformId = message.platformId);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.status !== undefined &&
            (obj.status = instance_StatusToJSON(message.status));
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.bootDisk !== undefined &&
            (obj.bootDisk = message.bootDisk
                ? AttachedDisk.toJSON(message.bootDisk)
                : undefined);
        if (message.secondaryDisks) {
            obj.secondaryDisks = message.secondaryDisks.map((e) =>
                e ? AttachedDisk.toJSON(e) : undefined
            );
        } else {
            obj.secondaryDisks = [];
        }
        if (message.filesystems) {
            obj.filesystems = message.filesystems.map((e) =>
                e ? AttachedFilesystem.toJSON(e) : undefined
            );
        } else {
            obj.filesystems = [];
        }
        if (message.networkInterfaces) {
            obj.networkInterfaces = message.networkInterfaces.map((e) =>
                e ? NetworkInterface.toJSON(e) : undefined
            );
        } else {
            obj.networkInterfaces = [];
        }
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.schedulingPolicy !== undefined &&
            (obj.schedulingPolicy = message.schedulingPolicy
                ? SchedulingPolicy.toJSON(message.schedulingPolicy)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.networkSettings !== undefined &&
            (obj.networkSettings = message.networkSettings
                ? NetworkSettings.toJSON(message.networkSettings)
                : undefined);
        message.placementPolicy !== undefined &&
            (obj.placementPolicy = message.placementPolicy
                ? PlacementPolicy.toJSON(message.placementPolicy)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Instance>): Instance {
        const message = { ...baseInstance } as Instance;
        message.labels = {};
        message.metadata = {};
        message.secondaryDisks = [];
        message.filesystems = [];
        message.networkInterfaces = [];
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (object.platformId !== undefined && object.platformId !== null) {
            message.platformId = object.platformId;
        } else {
            message.platformId = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            Object.entries(object.metadata).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.metadata[key] = String(value);
                }
            });
        }
        if (object.bootDisk !== undefined && object.bootDisk !== null) {
            message.bootDisk = AttachedDisk.fromPartial(object.bootDisk);
        } else {
            message.bootDisk = undefined;
        }
        if (
            object.secondaryDisks !== undefined &&
            object.secondaryDisks !== null
        ) {
            for (const e of object.secondaryDisks) {
                message.secondaryDisks.push(AttachedDisk.fromPartial(e));
            }
        }
        if (object.filesystems !== undefined && object.filesystems !== null) {
            for (const e of object.filesystems) {
                message.filesystems.push(AttachedFilesystem.fromPartial(e));
            }
        }
        if (
            object.networkInterfaces !== undefined &&
            object.networkInterfaces !== null
        ) {
            for (const e of object.networkInterfaces) {
                message.networkInterfaces.push(NetworkInterface.fromPartial(e));
            }
        }
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = object.fqdn;
        } else {
            message.fqdn = '';
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
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.networkSettings !== undefined &&
            object.networkSettings !== null
        ) {
            message.networkSettings = NetworkSettings.fromPartial(
                object.networkSettings
            );
        } else {
            message.networkSettings = undefined;
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
        return message;
    },
};

messageTypeRegistry.set(Instance.$type, Instance);

const baseInstance_LabelsEntry: object = {
    $type: 'yandex.cloud.compute.v1.Instance.LabelsEntry',
    key: '',
    value: '',
};

export const Instance_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.Instance.LabelsEntry' as const,

    encode(
        message: Instance_LabelsEntry,
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
    ): Instance_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInstance_LabelsEntry } as Instance_LabelsEntry;
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

    fromJSON(object: any): Instance_LabelsEntry {
        const message = { ...baseInstance_LabelsEntry } as Instance_LabelsEntry;
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

    toJSON(message: Instance_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Instance_LabelsEntry>
    ): Instance_LabelsEntry {
        const message = { ...baseInstance_LabelsEntry } as Instance_LabelsEntry;
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

messageTypeRegistry.set(Instance_LabelsEntry.$type, Instance_LabelsEntry);

const baseInstance_MetadataEntry: object = {
    $type: 'yandex.cloud.compute.v1.Instance.MetadataEntry',
    key: '',
    value: '',
};

export const Instance_MetadataEntry = {
    $type: 'yandex.cloud.compute.v1.Instance.MetadataEntry' as const,

    encode(
        message: Instance_MetadataEntry,
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
    ): Instance_MetadataEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInstance_MetadataEntry,
        } as Instance_MetadataEntry;
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

    fromJSON(object: any): Instance_MetadataEntry {
        const message = {
            ...baseInstance_MetadataEntry,
        } as Instance_MetadataEntry;
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

    toJSON(message: Instance_MetadataEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Instance_MetadataEntry>
    ): Instance_MetadataEntry {
        const message = {
            ...baseInstance_MetadataEntry,
        } as Instance_MetadataEntry;
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

messageTypeRegistry.set(Instance_MetadataEntry.$type, Instance_MetadataEntry);

const baseResources: object = {
    $type: 'yandex.cloud.compute.v1.Resources',
    memory: 0,
    cores: 0,
    coreFraction: 0,
    gpus: 0,
};

export const Resources = {
    $type: 'yandex.cloud.compute.v1.Resources' as const,

    encode(
        message: Resources,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResources } as Resources;
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

    fromJSON(object: any): Resources {
        const message = { ...baseResources } as Resources;
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

    toJSON(message: Resources): unknown {
        const obj: any = {};
        message.memory !== undefined && (obj.memory = message.memory);
        message.cores !== undefined && (obj.cores = message.cores);
        message.coreFraction !== undefined &&
            (obj.coreFraction = message.coreFraction);
        message.gpus !== undefined && (obj.gpus = message.gpus);
        return obj;
    },

    fromPartial(object: DeepPartial<Resources>): Resources {
        const message = { ...baseResources } as Resources;
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

messageTypeRegistry.set(Resources.$type, Resources);

const baseAttachedDisk: object = {
    $type: 'yandex.cloud.compute.v1.AttachedDisk',
    mode: 0,
    deviceName: '',
    autoDelete: false,
    diskId: '',
};

export const AttachedDisk = {
    $type: 'yandex.cloud.compute.v1.AttachedDisk' as const,

    encode(
        message: AttachedDisk,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.deviceName !== '') {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.autoDelete === true) {
            writer.uint32(24).bool(message.autoDelete);
        }
        if (message.diskId !== '') {
            writer.uint32(34).string(message.diskId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AttachedDisk {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttachedDisk } as AttachedDisk;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.autoDelete = reader.bool();
                    break;
                case 4:
                    message.diskId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AttachedDisk {
        const message = { ...baseAttachedDisk } as AttachedDisk;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = attachedDisk_ModeFromJSON(object.mode);
        } else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        } else {
            message.deviceName = '';
        }
        if (object.autoDelete !== undefined && object.autoDelete !== null) {
            message.autoDelete = Boolean(object.autoDelete);
        } else {
            message.autoDelete = false;
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = String(object.diskId);
        } else {
            message.diskId = '';
        }
        return message;
    },

    toJSON(message: AttachedDisk): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = attachedDisk_ModeToJSON(message.mode));
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        message.autoDelete !== undefined &&
            (obj.autoDelete = message.autoDelete);
        message.diskId !== undefined && (obj.diskId = message.diskId);
        return obj;
    },

    fromPartial(object: DeepPartial<AttachedDisk>): AttachedDisk {
        const message = { ...baseAttachedDisk } as AttachedDisk;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        } else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        } else {
            message.deviceName = '';
        }
        if (object.autoDelete !== undefined && object.autoDelete !== null) {
            message.autoDelete = object.autoDelete;
        } else {
            message.autoDelete = false;
        }
        if (object.diskId !== undefined && object.diskId !== null) {
            message.diskId = object.diskId;
        } else {
            message.diskId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(AttachedDisk.$type, AttachedDisk);

const baseAttachedFilesystem: object = {
    $type: 'yandex.cloud.compute.v1.AttachedFilesystem',
    mode: 0,
    deviceName: '',
    filesystemId: '',
};

export const AttachedFilesystem = {
    $type: 'yandex.cloud.compute.v1.AttachedFilesystem' as const,

    encode(
        message: AttachedFilesystem,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.deviceName !== '') {
            writer.uint32(18).string(message.deviceName);
        }
        if (message.filesystemId !== '') {
            writer.uint32(26).string(message.filesystemId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AttachedFilesystem {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttachedFilesystem } as AttachedFilesystem;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                case 2:
                    message.deviceName = reader.string();
                    break;
                case 3:
                    message.filesystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AttachedFilesystem {
        const message = { ...baseAttachedFilesystem } as AttachedFilesystem;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = attachedFilesystem_ModeFromJSON(object.mode);
        } else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = String(object.deviceName);
        } else {
            message.deviceName = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = String(object.filesystemId);
        } else {
            message.filesystemId = '';
        }
        return message;
    },

    toJSON(message: AttachedFilesystem): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = attachedFilesystem_ModeToJSON(message.mode));
        message.deviceName !== undefined &&
            (obj.deviceName = message.deviceName);
        message.filesystemId !== undefined &&
            (obj.filesystemId = message.filesystemId);
        return obj;
    },

    fromPartial(object: DeepPartial<AttachedFilesystem>): AttachedFilesystem {
        const message = { ...baseAttachedFilesystem } as AttachedFilesystem;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        } else {
            message.mode = 0;
        }
        if (object.deviceName !== undefined && object.deviceName !== null) {
            message.deviceName = object.deviceName;
        } else {
            message.deviceName = '';
        }
        if (object.filesystemId !== undefined && object.filesystemId !== null) {
            message.filesystemId = object.filesystemId;
        } else {
            message.filesystemId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(AttachedFilesystem.$type, AttachedFilesystem);

const baseNetworkInterface: object = {
    $type: 'yandex.cloud.compute.v1.NetworkInterface',
    index: '',
    macAddress: '',
    subnetId: '',
    securityGroupIds: '',
};

export const NetworkInterface = {
    $type: 'yandex.cloud.compute.v1.NetworkInterface' as const,

    encode(
        message: NetworkInterface,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        if (message.macAddress !== '') {
            writer.uint32(18).string(message.macAddress);
        }
        if (message.subnetId !== '') {
            writer.uint32(26).string(message.subnetId);
        }
        if (message.primaryV4Address !== undefined) {
            PrimaryAddress.encode(
                message.primaryV4Address,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.primaryV6Address !== undefined) {
            PrimaryAddress.encode(
                message.primaryV6Address,
                writer.uint32(42).fork()
            ).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(50).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInterface {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkInterface } as NetworkInterface;
        message.securityGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.macAddress = reader.string();
                    break;
                case 3:
                    message.subnetId = reader.string();
                    break;
                case 4:
                    message.primaryV4Address = PrimaryAddress.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.primaryV6Address = PrimaryAddress.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.securityGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NetworkInterface {
        const message = { ...baseNetworkInterface } as NetworkInterface;
        message.securityGroupIds = [];
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        } else {
            message.index = '';
        }
        if (object.macAddress !== undefined && object.macAddress !== null) {
            message.macAddress = String(object.macAddress);
        } else {
            message.macAddress = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        if (
            object.primaryV4Address !== undefined &&
            object.primaryV4Address !== null
        ) {
            message.primaryV4Address = PrimaryAddress.fromJSON(
                object.primaryV4Address
            );
        } else {
            message.primaryV4Address = undefined;
        }
        if (
            object.primaryV6Address !== undefined &&
            object.primaryV6Address !== null
        ) {
            message.primaryV6Address = PrimaryAddress.fromJSON(
                object.primaryV6Address
            );
        } else {
            message.primaryV6Address = undefined;
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

    toJSON(message: NetworkInterface): unknown {
        const obj: any = {};
        message.index !== undefined && (obj.index = message.index);
        message.macAddress !== undefined &&
            (obj.macAddress = message.macAddress);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.primaryV4Address !== undefined &&
            (obj.primaryV4Address = message.primaryV4Address
                ? PrimaryAddress.toJSON(message.primaryV4Address)
                : undefined);
        message.primaryV6Address !== undefined &&
            (obj.primaryV6Address = message.primaryV6Address
                ? PrimaryAddress.toJSON(message.primaryV6Address)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<NetworkInterface>): NetworkInterface {
        const message = { ...baseNetworkInterface } as NetworkInterface;
        message.securityGroupIds = [];
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        } else {
            message.index = '';
        }
        if (object.macAddress !== undefined && object.macAddress !== null) {
            message.macAddress = object.macAddress;
        } else {
            message.macAddress = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        if (
            object.primaryV4Address !== undefined &&
            object.primaryV4Address !== null
        ) {
            message.primaryV4Address = PrimaryAddress.fromPartial(
                object.primaryV4Address
            );
        } else {
            message.primaryV4Address = undefined;
        }
        if (
            object.primaryV6Address !== undefined &&
            object.primaryV6Address !== null
        ) {
            message.primaryV6Address = PrimaryAddress.fromPartial(
                object.primaryV6Address
            );
        } else {
            message.primaryV6Address = undefined;
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

messageTypeRegistry.set(NetworkInterface.$type, NetworkInterface);

const basePrimaryAddress: object = {
    $type: 'yandex.cloud.compute.v1.PrimaryAddress',
    address: '',
};

export const PrimaryAddress = {
    $type: 'yandex.cloud.compute.v1.PrimaryAddress' as const,

    encode(
        message: PrimaryAddress,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.oneToOneNat !== undefined) {
            OneToOneNat.encode(
                message.oneToOneNat,
                writer.uint32(18).fork()
            ).ldelim();
        }
        for (const v of message.dnsRecords) {
            DnsRecord.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrimaryAddress {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrimaryAddress } as PrimaryAddress;
        message.dnsRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.oneToOneNat = OneToOneNat.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.dnsRecords.push(
                        DnsRecord.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrimaryAddress {
        const message = { ...basePrimaryAddress } as PrimaryAddress;
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (object.oneToOneNat !== undefined && object.oneToOneNat !== null) {
            message.oneToOneNat = OneToOneNat.fromJSON(object.oneToOneNat);
        } else {
            message.oneToOneNat = undefined;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(DnsRecord.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: PrimaryAddress): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.oneToOneNat !== undefined &&
            (obj.oneToOneNat = message.oneToOneNat
                ? OneToOneNat.toJSON(message.oneToOneNat)
                : undefined);
        if (message.dnsRecords) {
            obj.dnsRecords = message.dnsRecords.map((e) =>
                e ? DnsRecord.toJSON(e) : undefined
            );
        } else {
            obj.dnsRecords = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PrimaryAddress>): PrimaryAddress {
        const message = { ...basePrimaryAddress } as PrimaryAddress;
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        if (object.oneToOneNat !== undefined && object.oneToOneNat !== null) {
            message.oneToOneNat = OneToOneNat.fromPartial(object.oneToOneNat);
        } else {
            message.oneToOneNat = undefined;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(DnsRecord.fromPartial(e));
            }
        }
        return message;
    },
};

messageTypeRegistry.set(PrimaryAddress.$type, PrimaryAddress);

const baseOneToOneNat: object = {
    $type: 'yandex.cloud.compute.v1.OneToOneNat',
    address: '',
    ipVersion: 0,
};

export const OneToOneNat = {
    $type: 'yandex.cloud.compute.v1.OneToOneNat' as const,

    encode(
        message: OneToOneNat,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(16).int32(message.ipVersion);
        }
        for (const v of message.dnsRecords) {
            DnsRecord.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OneToOneNat {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOneToOneNat } as OneToOneNat;
        message.dnsRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.ipVersion = reader.int32() as any;
                    break;
                case 3:
                    message.dnsRecords.push(
                        DnsRecord.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OneToOneNat {
        const message = { ...baseOneToOneNat } as OneToOneNat;
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = ipVersionFromJSON(object.ipVersion);
        } else {
            message.ipVersion = 0;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(DnsRecord.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: OneToOneNat): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        if (message.dnsRecords) {
            obj.dnsRecords = message.dnsRecords.map((e) =>
                e ? DnsRecord.toJSON(e) : undefined
            );
        } else {
            obj.dnsRecords = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<OneToOneNat>): OneToOneNat {
        const message = { ...baseOneToOneNat } as OneToOneNat;
        message.dnsRecords = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        } else {
            message.ipVersion = 0;
        }
        if (object.dnsRecords !== undefined && object.dnsRecords !== null) {
            for (const e of object.dnsRecords) {
                message.dnsRecords.push(DnsRecord.fromPartial(e));
            }
        }
        return message;
    },
};

messageTypeRegistry.set(OneToOneNat.$type, OneToOneNat);

const baseDnsRecord: object = {
    $type: 'yandex.cloud.compute.v1.DnsRecord',
    fqdn: '',
    dnsZoneId: '',
    ttl: 0,
    ptr: false,
};

export const DnsRecord = {
    $type: 'yandex.cloud.compute.v1.DnsRecord' as const,

    encode(
        message: DnsRecord,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.fqdn !== '') {
            writer.uint32(10).string(message.fqdn);
        }
        if (message.dnsZoneId !== '') {
            writer.uint32(18).string(message.dnsZoneId);
        }
        if (message.ttl !== 0) {
            writer.uint32(24).int64(message.ttl);
        }
        if (message.ptr === true) {
            writer.uint32(32).bool(message.ptr);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DnsRecord {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDnsRecord } as DnsRecord;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fqdn = reader.string();
                    break;
                case 2:
                    message.dnsZoneId = reader.string();
                    break;
                case 3:
                    message.ttl = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.ptr = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DnsRecord {
        const message = { ...baseDnsRecord } as DnsRecord;
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = String(object.fqdn);
        } else {
            message.fqdn = '';
        }
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = String(object.dnsZoneId);
        } else {
            message.dnsZoneId = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = Number(object.ttl);
        } else {
            message.ttl = 0;
        }
        if (object.ptr !== undefined && object.ptr !== null) {
            message.ptr = Boolean(object.ptr);
        } else {
            message.ptr = false;
        }
        return message;
    },

    toJSON(message: DnsRecord): unknown {
        const obj: any = {};
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.dnsZoneId !== undefined && (obj.dnsZoneId = message.dnsZoneId);
        message.ttl !== undefined && (obj.ttl = message.ttl);
        message.ptr !== undefined && (obj.ptr = message.ptr);
        return obj;
    },

    fromPartial(object: DeepPartial<DnsRecord>): DnsRecord {
        const message = { ...baseDnsRecord } as DnsRecord;
        if (object.fqdn !== undefined && object.fqdn !== null) {
            message.fqdn = object.fqdn;
        } else {
            message.fqdn = '';
        }
        if (object.dnsZoneId !== undefined && object.dnsZoneId !== null) {
            message.dnsZoneId = object.dnsZoneId;
        } else {
            message.dnsZoneId = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = object.ttl;
        } else {
            message.ttl = 0;
        }
        if (object.ptr !== undefined && object.ptr !== null) {
            message.ptr = object.ptr;
        } else {
            message.ptr = false;
        }
        return message;
    },
};

messageTypeRegistry.set(DnsRecord.$type, DnsRecord);

const baseSchedulingPolicy: object = {
    $type: 'yandex.cloud.compute.v1.SchedulingPolicy',
    preemptible: false,
};

export const SchedulingPolicy = {
    $type: 'yandex.cloud.compute.v1.SchedulingPolicy' as const,

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

messageTypeRegistry.set(SchedulingPolicy.$type, SchedulingPolicy);

const baseNetworkSettings: object = {
    $type: 'yandex.cloud.compute.v1.NetworkSettings',
    type: 0,
};

export const NetworkSettings = {
    $type: 'yandex.cloud.compute.v1.NetworkSettings' as const,

    encode(
        message: NetworkSettings,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkSettings {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNetworkSettings } as NetworkSettings;
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

    fromJSON(object: any): NetworkSettings {
        const message = { ...baseNetworkSettings } as NetworkSettings;
        if (object.type !== undefined && object.type !== null) {
            message.type = networkSettings_TypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        return message;
    },

    toJSON(message: NetworkSettings): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = networkSettings_TypeToJSON(message.type));
        return obj;
    },

    fromPartial(object: DeepPartial<NetworkSettings>): NetworkSettings {
        const message = { ...baseNetworkSettings } as NetworkSettings;
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(NetworkSettings.$type, NetworkSettings);

const basePlacementPolicy: object = {
    $type: 'yandex.cloud.compute.v1.PlacementPolicy',
    placementGroupId: '',
};

export const PlacementPolicy = {
    $type: 'yandex.cloud.compute.v1.PlacementPolicy' as const,

    encode(
        message: PlacementPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        for (const v of message.hostAffinityRules) {
            PlacementPolicy_HostAffinityRule.encode(
                v!,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PlacementPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlacementPolicy } as PlacementPolicy;
        message.hostAffinityRules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                case 2:
                    message.hostAffinityRules.push(
                        PlacementPolicy_HostAffinityRule.decode(
                            reader,
                            reader.uint32()
                        )
                    );
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
        message.hostAffinityRules = [];
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
        }
        if (
            object.hostAffinityRules !== undefined &&
            object.hostAffinityRules !== null
        ) {
            for (const e of object.hostAffinityRules) {
                message.hostAffinityRules.push(
                    PlacementPolicy_HostAffinityRule.fromJSON(e)
                );
            }
        }
        return message;
    },

    toJSON(message: PlacementPolicy): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        if (message.hostAffinityRules) {
            obj.hostAffinityRules = message.hostAffinityRules.map((e) =>
                e ? PlacementPolicy_HostAffinityRule.toJSON(e) : undefined
            );
        } else {
            obj.hostAffinityRules = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PlacementPolicy>): PlacementPolicy {
        const message = { ...basePlacementPolicy } as PlacementPolicy;
        message.hostAffinityRules = [];
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
        }
        if (
            object.hostAffinityRules !== undefined &&
            object.hostAffinityRules !== null
        ) {
            for (const e of object.hostAffinityRules) {
                message.hostAffinityRules.push(
                    PlacementPolicy_HostAffinityRule.fromPartial(e)
                );
            }
        }
        return message;
    },
};

messageTypeRegistry.set(PlacementPolicy.$type, PlacementPolicy);

const basePlacementPolicy_HostAffinityRule: object = {
    $type: 'yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule',
    key: '',
    op: 0,
    values: '',
};

export const PlacementPolicy_HostAffinityRule = {
    $type: 'yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule' as const,

    encode(
        message: PlacementPolicy_HostAffinityRule,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.op !== 0) {
            writer.uint32(16).int32(message.op);
        }
        for (const v of message.values) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlacementPolicy_HostAffinityRule {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePlacementPolicy_HostAffinityRule,
        } as PlacementPolicy_HostAffinityRule;
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.op = reader.int32() as any;
                    break;
                case 3:
                    message.values.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PlacementPolicy_HostAffinityRule {
        const message = {
            ...basePlacementPolicy_HostAffinityRule,
        } as PlacementPolicy_HostAffinityRule;
        message.values = [];
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.op !== undefined && object.op !== null) {
            message.op = placementPolicy_HostAffinityRule_OperatorFromJSON(
                object.op
            );
        } else {
            message.op = 0;
        }
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: PlacementPolicy_HostAffinityRule): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.op !== undefined &&
            (obj.op = placementPolicy_HostAffinityRule_OperatorToJSON(
                message.op
            ));
        if (message.values) {
            obj.values = message.values.map((e) => e);
        } else {
            obj.values = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<PlacementPolicy_HostAffinityRule>
    ): PlacementPolicy_HostAffinityRule {
        const message = {
            ...basePlacementPolicy_HostAffinityRule,
        } as PlacementPolicy_HostAffinityRule;
        message.values = [];
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.op !== undefined && object.op !== null) {
            message.op = object.op;
        } else {
            message.op = 0;
        }
        if (object.values !== undefined && object.values !== null) {
            for (const e of object.values) {
                message.values.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(
    PlacementPolicy_HostAffinityRule.$type,
    PlacementPolicy_HostAffinityRule
);

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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
