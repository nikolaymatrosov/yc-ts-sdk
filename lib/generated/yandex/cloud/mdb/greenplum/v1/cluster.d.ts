import { TimeOfDay } from '../../../../../google/type/timeofday';
import { MasterSubclusterConfig, SegmentSubclusterConfig } from '../../../../../yandex/cloud/mdb/greenplum/v1/config';
import { MaintenanceWindow, MaintenanceOperation } from '../../../../../yandex/cloud/mdb/greenplum/v1/maintenance';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.greenplum.v1";
/** A Greenplum Cluster resource. For more information, see the */
export interface Cluster {
    /**
     * ID of the Greenplum cluster.
     * This ID is assigned by MDB at creation time.
     */
    id: string;
    /** ID of the folder that the Greenplum cluster belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /**
     * Name of the Greenplum cluster.
     * The name is unique within the folder. 1-63 characters long.
     */
    name: string;
    /** Greenplum cluster config */
    config: GreenplumConfig | undefined;
    /** Description of the Greenplum cluster. 0-256 characters long. */
    description: string;
    /** Custom labels for the Greenplum cluster as `key:value` pairs. Maximum 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Greenplum cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the Greenplum cluster. */
    monitoring: Monitoring[];
    /** Configuration of the Greenplum master subcluster. */
    masterConfig: MasterSubclusterConfig | undefined;
    /** Configuration of the Greenplum segment subcluster. */
    segmentConfig: SegmentSubclusterConfig | undefined;
    /** Number of hosts of the master subcluster */
    masterHostCount: number;
    /** Number of hosts of the segment subcluster */
    segmentHostCount: number;
    /** Number of segments in the host */
    segmentInHost: number;
    /** ID of the network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** Window of maintenance operations. */
    maintenanceWindow: MaintenanceWindow | undefined;
    /** Maintenance operation planned at nearest maintenance_window. */
    plannedOperation: MaintenanceOperation | undefined;
    /** User security groups */
    securityGroupIds: string[];
    /** Owner user name */
    userName: string;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
}
/** Deployment environment. */
export declare enum Cluster_Environment {
    ENVIRONMENT_UNSPECIFIED = 0,
    /**
     * PRODUCTION - Stable environment with a conservative update policy:
     * only hotfixes are applied during regular maintenance.
     */
    PRODUCTION = 1,
    /**
     * PRESTABLE - Environment with more aggressive update policy: new versions
     * are rolled out irrespective of backward compatibility.
     */
    PRESTABLE = 2,
    UNRECOGNIZED = -1
}
export declare function cluster_EnvironmentFromJSON(object: any): Cluster_Environment;
export declare function cluster_EnvironmentToJSON(object: Cluster_Environment): string;
export declare enum Cluster_Health {
    /** HEALTH_UNKNOWN - State of the cluster is unknown ([Host.health] for every host in the cluster is UNKNOWN). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is alive and well ([Host.health] for every host in the cluster is ALIVE). */
    ALIVE = 1,
    /** DEAD - Cluster is inoperable ([Host.health] for every host in the cluster is DEAD). */
    DEAD = 2,
    /** DEGRADED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is not ALIVE). */
    DEGRADED = 3,
    /** UNBALANCED - Cluster is working below capacity ([Host.health] for at least one host in the cluster is UNBALANCED). */
    UNBALANCED = 4,
    UNRECOGNIZED = -1
}
export declare function cluster_HealthFromJSON(object: any): Cluster_Health;
export declare function cluster_HealthToJSON(object: Cluster_Health): string;
export declare enum Cluster_Status {
    /** STATUS_UNKNOWN - Cluster state is unknown. */
    STATUS_UNKNOWN = 0,
    /** CREATING - Cluster is being created. */
    CREATING = 1,
    /** RUNNING - Cluster is running normally. */
    RUNNING = 2,
    /** ERROR - Cluster encountered a problem and cannot operate. */
    ERROR = 3,
    /** UPDATING - Cluster is being updated. */
    UPDATING = 4,
    /** STOPPING - Cluster is stopping. */
    STOPPING = 5,
    /** STOPPED - Cluster stopped. */
    STOPPED = 6,
    /** STARTING - Cluster is starting. */
    STARTING = 7,
    UNRECOGNIZED = -1
}
export declare function cluster_StatusFromJSON(object: any): Cluster_Status;
export declare function cluster_StatusToJSON(object: Cluster_Status): string;
export interface Cluster_LabelsEntry {
    key: string;
    value: string;
}
/** Monitoring system metadata. */
export interface Monitoring {
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the Greenplum cluster. */
    link: string;
}
export interface GreenplumConfig {
    /** Version of the Greenplum server software. */
    version: string;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart: TimeOfDay | undefined;
    /** Access policy for external services. */
    access: Access | undefined;
    /**
     * ID of the availability zone where the host resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * ID of the subnet that the host should belong to. This subnet should be a part
     * of the network that the cluster belongs to.
     * The ID of the network is set in the field [Cluster.network_id].
     */
    subnetId: string;
    /**
     * Whether the host should get a public IP address on creation.
     *
     * After a host has been created, this setting cannot be changed. To remove an assigned public IP, or to assign
     * a public IP to a host without one, recreate the host with [assign_public_ip] set as needed.
     *
     * Possible values:
     * * false - don't assign a public IP to the master hosts.
     * * true - the master hosts should have a public IP address.
     */
    assignPublicIp: boolean;
}
export interface Access {
    /** Allow to export data from the cluster to Yandex DataLens. */
    dataLens: boolean;
    /** Allow SQL queries to the cluster databases from the Yandex.Cloud management console. */
    webSql: boolean;
}
export declare const Cluster: {
    encode(message: Cluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster;
    fromJSON(object: any): Cluster;
    toJSON(message: Cluster): unknown;
    fromPartial(object: DeepPartial<Cluster>): Cluster;
};
export declare const Cluster_LabelsEntry: {
    encode(message: Cluster_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster_LabelsEntry;
    fromJSON(object: any): Cluster_LabelsEntry;
    toJSON(message: Cluster_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Cluster_LabelsEntry>): Cluster_LabelsEntry;
};
export declare const Monitoring: {
    encode(message: Monitoring, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Monitoring;
    fromJSON(object: any): Monitoring;
    toJSON(message: Monitoring): unknown;
    fromPartial(object: DeepPartial<Monitoring>): Monitoring;
};
export declare const GreenplumConfig: {
    encode(message: GreenplumConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GreenplumConfig;
    fromJSON(object: any): GreenplumConfig;
    toJSON(message: GreenplumConfig): unknown;
    fromPartial(object: DeepPartial<GreenplumConfig>): GreenplumConfig;
};
export declare const Access: {
    encode(message: Access, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Access;
    fromJSON(object: any): Access;
    toJSON(message: Access): unknown;
    fromPartial(object: DeepPartial<Access>): Access;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
