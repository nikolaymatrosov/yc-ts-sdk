import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export declare enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address, for example 192.0.2.235. */
    IPV4 = 1,
    /** IPV6 - IPv6 address. Not available yet. */
    IPV6 = 2,
    UNRECOGNIZED = -1
}
export declare function ipVersionFromJSON(object: any): IpVersion;
export declare function ipVersionToJSON(object: IpVersion): string;
/** An Instance resource. For more information, see [Instances](/docs/compute/concepts/vm). */
export interface Instance {
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
    labels: {
        [key: string]: string;
    };
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
    metadata: {
        [key: string]: string;
    };
    /** Boot disk that is attached to the instance. */
    bootDisk: AttachedDisk | undefined;
    /** Array of secondary disks that are attached to the instance. */
    secondaryDisks: AttachedDisk[];
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
export declare enum Instance_Status {
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
    UNRECOGNIZED = -1
}
export declare function instance_StatusFromJSON(object: any): Instance_Status;
export declare function instance_StatusToJSON(object: Instance_Status): string;
export interface Instance_LabelsEntry {
    key: string;
    value: string;
}
export interface Instance_MetadataEntry {
    key: string;
    value: string;
}
export interface Resources {
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
export declare enum AttachedDisk_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1
}
export declare function attachedDisk_ModeFromJSON(object: any): AttachedDisk_Mode;
export declare function attachedDisk_ModeToJSON(object: AttachedDisk_Mode): string;
export interface NetworkInterface {
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
    /** An IPv4 internal network address that is assigned to the instance for this network interface. */
    address: string;
    /** One-to-one NAT configuration. If missing, NAT has not been set up. */
    oneToOneNat: OneToOneNat | undefined;
    /** Internal DNS configuration */
    dnsRecords: DnsRecord[];
}
export interface OneToOneNat {
    /** An external IP address associated with this instance. */
    address: string;
    /** IP version for the external IP address. */
    ipVersion: IpVersion;
    /** External DNS configuration */
    dnsRecords: DnsRecord[];
}
export interface DnsRecord {
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
    /** True for short-lived compute instances. For more information, see [Preemptible VMs](/docs/compute/concepts/preemptible-vm). */
    preemptible: boolean;
}
export interface NetworkSettings {
    /** Network Type */
    type: NetworkSettings_Type;
}
export declare enum NetworkSettings_Type {
    TYPE_UNSPECIFIED = 0,
    /** STANDARD - Standard network. */
    STANDARD = 1,
    /** SOFTWARE_ACCELERATED - Software accelerated network. */
    SOFTWARE_ACCELERATED = 2,
    /** HARDWARE_ACCELERATED - Hardware accelerated network (not available yet, reserved for future use). */
    HARDWARE_ACCELERATED = 3,
    UNRECOGNIZED = -1
}
export declare function networkSettings_TypeFromJSON(object: any): NetworkSettings_Type;
export declare function networkSettings_TypeToJSON(object: NetworkSettings_Type): string;
export interface PlacementPolicy {
    /** Placement group ID. */
    placementGroupId: string;
    /** List of affinity rules. Scheduler will attempt to allocate instances according to order of rules. */
    hostAffinityRules: PlacementPolicy_HostAffinityRule[];
}
/** Affinitity definition */
export interface PlacementPolicy_HostAffinityRule {
    /** Affinity label or one of reserved values - 'yc.hostId', 'yc.hostGroupId' */
    key: string;
    /** Include or exclude action */
    op: PlacementPolicy_HostAffinityRule_Operator;
    /** Affinity value or host ID or host group ID */
    values: string[];
}
export declare enum PlacementPolicy_HostAffinityRule_Operator {
    OPERATOR_UNSPECIFIED = 0,
    IN = 1,
    NOT_IN = 2,
    UNRECOGNIZED = -1
}
export declare function placementPolicy_HostAffinityRule_OperatorFromJSON(object: any): PlacementPolicy_HostAffinityRule_Operator;
export declare function placementPolicy_HostAffinityRule_OperatorToJSON(object: PlacementPolicy_HostAffinityRule_Operator): string;
export declare const Instance: {
    encode(message: Instance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Instance;
    fromJSON(object: any): Instance;
    toJSON(message: Instance): unknown;
    fromPartial(object: DeepPartial<Instance>): Instance;
};
export declare const Instance_LabelsEntry: {
    encode(message: Instance_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Instance_LabelsEntry;
    fromJSON(object: any): Instance_LabelsEntry;
    toJSON(message: Instance_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Instance_LabelsEntry>): Instance_LabelsEntry;
};
export declare const Instance_MetadataEntry: {
    encode(message: Instance_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Instance_MetadataEntry;
    fromJSON(object: any): Instance_MetadataEntry;
    toJSON(message: Instance_MetadataEntry): unknown;
    fromPartial(object: DeepPartial<Instance_MetadataEntry>): Instance_MetadataEntry;
};
export declare const Resources: {
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial(object: DeepPartial<Resources>): Resources;
};
export declare const AttachedDisk: {
    encode(message: AttachedDisk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedDisk;
    fromJSON(object: any): AttachedDisk;
    toJSON(message: AttachedDisk): unknown;
    fromPartial(object: DeepPartial<AttachedDisk>): AttachedDisk;
};
export declare const NetworkInterface: {
    encode(message: NetworkInterface, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInterface;
    fromJSON(object: any): NetworkInterface;
    toJSON(message: NetworkInterface): unknown;
    fromPartial(object: DeepPartial<NetworkInterface>): NetworkInterface;
};
export declare const PrimaryAddress: {
    encode(message: PrimaryAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrimaryAddress;
    fromJSON(object: any): PrimaryAddress;
    toJSON(message: PrimaryAddress): unknown;
    fromPartial(object: DeepPartial<PrimaryAddress>): PrimaryAddress;
};
export declare const OneToOneNat: {
    encode(message: OneToOneNat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OneToOneNat;
    fromJSON(object: any): OneToOneNat;
    toJSON(message: OneToOneNat): unknown;
    fromPartial(object: DeepPartial<OneToOneNat>): OneToOneNat;
};
export declare const DnsRecord: {
    encode(message: DnsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DnsRecord;
    fromJSON(object: any): DnsRecord;
    toJSON(message: DnsRecord): unknown;
    fromPartial(object: DeepPartial<DnsRecord>): DnsRecord;
};
export declare const SchedulingPolicy: {
    encode(message: SchedulingPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchedulingPolicy;
    fromJSON(object: any): SchedulingPolicy;
    toJSON(message: SchedulingPolicy): unknown;
    fromPartial(object: DeepPartial<SchedulingPolicy>): SchedulingPolicy;
};
export declare const NetworkSettings: {
    encode(message: NetworkSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkSettings;
    fromJSON(object: any): NetworkSettings;
    toJSON(message: NetworkSettings): unknown;
    fromPartial(object: DeepPartial<NetworkSettings>): NetworkSettings;
};
export declare const PlacementPolicy: {
    encode(message: PlacementPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementPolicy;
    fromJSON(object: any): PlacementPolicy;
    toJSON(message: PlacementPolicy): unknown;
    fromPartial(object: DeepPartial<PlacementPolicy>): PlacementPolicy;
};
export declare const PlacementPolicy_HostAffinityRule: {
    encode(message: PlacementPolicy_HostAffinityRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementPolicy_HostAffinityRule;
    fromJSON(object: any): PlacementPolicy_HostAffinityRule;
    toJSON(message: PlacementPolicy_HostAffinityRule): unknown;
    fromPartial(object: DeepPartial<PlacementPolicy_HostAffinityRule>): PlacementPolicy_HostAffinityRule;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
