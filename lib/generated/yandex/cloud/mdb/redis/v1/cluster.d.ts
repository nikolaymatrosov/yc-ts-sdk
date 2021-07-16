import { TimeOfDay } from '../../../../../google/type/timeofday';
import { Redisconfigset50 } from '../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0';
import { Redisconfigset60 } from '../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0';
import { Redisconfigset62 } from '../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2';
import { MaintenanceWindow, MaintenanceOperation } from '../../../../../yandex/cloud/mdb/redis/v1/maintenance';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.redis.v1";
/**
 * Description of a Redis cluster. For more information, see
 * the Managed Service for Redis [documentation](/docs/managed-redis/concepts/).
 */
export interface Cluster {
    /**
     * ID of the Redis cluster.
     * This ID is assigned by MDB at creation time.
     */
    id: string;
    /** ID of the folder that the Redis cluster belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /**
     * Name of the Redis cluster.
     * The name is unique within the folder. 3-63 characters long.
     */
    name: string;
    /** Description of the Redis cluster. 0-256 characters long. */
    description: string;
    /**
     * Custom labels for the Redis cluster as `key:value` pairs.
     * Maximum 64 per cluster.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Redis cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the Redis cluster. */
    monitoring: Monitoring[];
    /** Configuration of the Redis cluster. */
    config: ClusterConfig | undefined;
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Cluster status. */
    status: Cluster_Status;
    /** Redis cluster mode on/off. */
    sharded: boolean;
    /** Maintenance window for the cluster. */
    maintenanceWindow: MaintenanceWindow | undefined;
    /** Planned maintenance operation to be started for the cluster within the nearest [maintenance_window]. */
    plannedOperation: MaintenanceOperation | undefined;
    /** User security groups */
    securityGroupIds: string[];
    /** TLS port and functionality on\off */
    tlsEnabled: boolean;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
}
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
    /** HEALTH_UNKNOWN - Cluster is in unknown state (we have no data) */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Cluster is alive and well (all hosts are alive) */
    ALIVE = 1,
    /** DEAD - Cluster is inoperable (it cannot perform any of its essential functions) */
    DEAD = 2,
    /** DEGRADED - Cluster is partially alive (it can perform some of its essential functions) */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function cluster_HealthFromJSON(object: any): Cluster_Health;
export declare function cluster_HealthToJSON(object: Cluster_Health): string;
export declare enum Cluster_Status {
    /** STATUS_UNKNOWN - Cluster status is unknown */
    STATUS_UNKNOWN = 0,
    /** CREATING - Cluster is being created */
    CREATING = 1,
    /** RUNNING - Cluster is running */
    RUNNING = 2,
    /** ERROR - Cluster failed */
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
export interface Monitoring {
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the Redis cluster. */
    link: string;
}
export interface ClusterConfig {
    /** Version of Redis server software. */
    version: string;
    /** Configuration of a Redis 5.0 server. */
    redisConfig50: Redisconfigset50 | undefined;
    /** Configuration of a Redis 6.0 server. */
    redisConfig60: Redisconfigset60 | undefined;
    /** Configuration of a Redis 6.2 server. */
    redisConfig62: Redisconfigset62 | undefined;
    /** Resources allocated to Redis hosts. */
    resources: Resources | undefined;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart: TimeOfDay | undefined;
    /** Access policy to DB */
    access: Access | undefined;
}
export interface Shard {
    /**
     * Name of the Redis shard. The shard name is assigned by user at creation time, and cannot be changed.
     * 1-63 characters long.
     */
    name: string;
    /** ID of the Redis cluster the shard belongs to. The ID is assigned by MDB at creation time. */
    clusterId: string;
}
export interface Host {
    /**
     * Name of the Redis host. The host name is assigned by MDB at creation time, and cannot be changed.
     * 1-63 characters long.
     *
     * The name is unique across all existing MDB hosts in Yandex.Cloud, as it defines the FQDN of the host.
     */
    name: string;
    /** ID of the Redis cluster. The ID is assigned by MDB at creation time. */
    clusterId: string;
    /** ID of the availability zone where the Redis host resides. */
    zoneId: string;
    /** ID of the subnet that the host belongs to. */
    subnetId: string;
    /** Resources allocated to the Redis host. */
    resources: Resources | undefined;
    /** Role of the host in the cluster. */
    role: Host_Role;
    /** Status code of the aggregated health of the host. */
    health: Host_Health;
    /** Services provided by the host. */
    services: Service[];
    shardName: string;
}
export declare enum Host_Role {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    ROLE_UNKNOWN = 0,
    /** MASTER - Host is the master Redis server in the cluster. */
    MASTER = 1,
    /** REPLICA - Host is a replica (standby) Redis server in the cluster. */
    REPLICA = 2,
    UNRECOGNIZED = -1
}
export declare function host_RoleFromJSON(object: any): Host_Role;
export declare function host_RoleToJSON(object: Host_Role): string;
export declare enum Host_Health {
    /** HEALTH_UNKNOWN - Health of the host is unknown. */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - The host is performing all its functions normally. */
    ALIVE = 1,
    /** DEAD - The host is inoperable, and cannot perform any of its essential functions. */
    DEAD = 2,
    /** DEGRADED - The host is degraded, and can perform only some of its essential functions. */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function host_HealthFromJSON(object: any): Host_Health;
export declare function host_HealthToJSON(object: Host_Health): string;
export interface Service {
    /** Type of the service provided by the host. */
    type: Service_Type;
    /** Status code of server availability. */
    health: Service_Health;
}
export declare enum Service_Type {
    TYPE_UNSPECIFIED = 0,
    /** REDIS - The host is a Redis server. */
    REDIS = 1,
    /** ARBITER - The host provides a Sentinel-only service (a quorum node). */
    ARBITER = 2,
    /** REDIS_CLUSTER - The host is a Redis Cluster node. */
    REDIS_CLUSTER = 3,
    UNRECOGNIZED = -1
}
export declare function service_TypeFromJSON(object: any): Service_Type;
export declare function service_TypeToJSON(object: Service_Type): string;
export declare enum Service_Health {
    /** HEALTH_UNKNOWN - Health of the server is unknown. */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - The server is working normally. */
    ALIVE = 1,
    /** DEAD - The server is dead or unresponsive. */
    DEAD = 2,
    UNRECOGNIZED = -1
}
export declare function service_HealthFromJSON(object: any): Service_Health;
export declare function service_HealthToJSON(object: Service_Health): string;
export interface Resources {
    /**
     * ID of the preset for computational resources available to a host (CPU, memory etc.).
     * All available presets are listed in the [documentation](/docs/managed-redis/concepts/instance-types).
     */
    resourcePresetId: string;
    /** Volume of the storage available to a host, in bytes. */
    diskSize: number;
    /**
     * Type of the storage environment for the host.
     * Possible values:
     * * network-ssd - network SSD drive,
     * * local-ssd - local SSD storage.
     */
    diskTypeId: string;
}
export interface Access {
    /** Allow access for DataLens */
    dataLens: boolean;
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
export declare const ClusterConfig: {
    encode(message: ClusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfig;
    fromJSON(object: any): ClusterConfig;
    toJSON(message: ClusterConfig): unknown;
    fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig;
};
export declare const Shard: {
    encode(message: Shard, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Shard;
    fromJSON(object: any): Shard;
    toJSON(message: Shard): unknown;
    fromPartial(object: DeepPartial<Shard>): Shard;
};
export declare const Host: {
    encode(message: Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host;
    fromJSON(object: any): Host;
    toJSON(message: Host): unknown;
    fromPartial(object: DeepPartial<Host>): Host;
};
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial(object: DeepPartial<Service>): Service;
};
export declare const Resources: {
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial(object: DeepPartial<Resources>): Resources;
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
