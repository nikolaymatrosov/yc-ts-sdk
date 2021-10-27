import { TimeOfDay } from '../../../../../google/type/timeofday';
import { ClickhouseConfigSet } from '../../../../../yandex/cloud/mdb/clickhouse/v1/config/clickhouse';
import { MaintenanceWindow, MaintenanceOperation } from '../../../../../yandex/cloud/mdb/clickhouse/v1/maintenance';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
/**
 * A ClickHouse Cluster resource. For more information, see the
 * [Cluster](/docs/managed-clickhouse/concepts) section in the Developer's Guide.
 */
export interface Cluster {
    $type: 'yandex.cloud.mdb.clickhouse.v1.Cluster';
    /**
     * ID of the ClickHouse cluster.
     * This ID is assigned by MDB at creation time.
     */
    id: string;
    /** ID of the folder that the ClickHouse cluster belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /**
     * Name of the ClickHouse cluster.
     * The name is unique within the folder. 1-63 characters long.
     */
    name: string;
    /** Description of the ClickHouse cluster. 0-256 characters long. */
    description: string;
    /** Custom labels for the ClickHouse cluster as `key:value` pairs. Maximum 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the ClickHouse cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the ClickHouse cluster. */
    monitoring: Monitoring[];
    /** Configuration of the ClickHouse cluster. */
    config: ClusterConfig | undefined;
    /** ID of the network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** ID of the service account used for access to Yandex Object Storage. */
    serviceAccountId: string;
    /** Maintenance window for the cluster. */
    maintenanceWindow: MaintenanceWindow | undefined;
    /** Planned maintenance operation to be started for the cluster within the nearest [maintenance_window]. */
    plannedOperation: MaintenanceOperation | undefined;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry';
    key: string;
    value: string;
}
/** Monitoring system metadata. */
export interface Monitoring {
    $type: 'yandex.cloud.mdb.clickhouse.v1.Monitoring';
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the ClickHouse cluster. */
    link: string;
}
export interface ClusterConfig {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ClusterConfig';
    /** Version of the ClickHouse server software. */
    version: string;
    /** Configuration and resource allocation for ClickHouse hosts. */
    clickhouse: ClusterConfig_Clickhouse | undefined;
    /** Configuration and resource allocation for ZooKeeper hosts. */
    zookeeper: ClusterConfig_Zookeeper | undefined;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart: TimeOfDay | undefined;
    /** Access policy for external services. */
    access: Access | undefined;
    cloudStorage: CloudStorage | undefined;
    /** Whether database management through SQL commands is enabled. */
    sqlDatabaseManagement: boolean | undefined;
    /** Whether user management through SQL commands is enabled. */
    sqlUserManagement: boolean | undefined;
}
export interface ClusterConfig_Clickhouse {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Clickhouse';
    /** Configuration settings of a ClickHouse server. */
    config: ClickhouseConfigSet | undefined;
    /** Resources allocated to ClickHouse hosts. */
    resources: Resources | undefined;
}
export interface ClusterConfig_Zookeeper {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Zookeeper';
    /** Resources allocated to ZooKeeper hosts. */
    resources: Resources | undefined;
}
export interface Shard {
    $type: 'yandex.cloud.mdb.clickhouse.v1.Shard';
    /** Name of the shard. */
    name: string;
    /** ID of the cluster that the shard belongs to. */
    clusterId: string;
    /** Configuration of the shard. */
    config: ShardConfig | undefined;
}
export interface ShardGroup {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ShardGroup';
    /** Name of the shard group. */
    name: string;
    /** ID of the ClickHouse cluster that the shard group belongs to. */
    clusterId: string;
    /** Description of the shard group. 0-256 characters long. */
    description: string;
    /** List of shard names contained in the shard group. */
    shardNames: string[];
}
export interface ShardConfig {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ShardConfig';
    /** ClickHouse configuration for a shard. */
    clickhouse: ShardConfig_Clickhouse | undefined;
}
export interface ShardConfig_Clickhouse {
    $type: 'yandex.cloud.mdb.clickhouse.v1.ShardConfig.Clickhouse';
    /** ClickHouse settings for a shard. */
    config: ClickhouseConfigSet | undefined;
    /** Computational resources for a shard. */
    resources: Resources | undefined;
    /**
     * Relative weight of a shard considered when writing data to the cluster.
     * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/table_engines/distributed/).
     */
    weight: number | undefined;
}
export interface Host {
    $type: 'yandex.cloud.mdb.clickhouse.v1.Host';
    /**
     * Name of the ClickHouse host. The host name is assigned by MDB at creation time, and cannot be changed.
     * 1-63 characters long.
     *
     * The name is unique across all existing MDB hosts in Yandex.Cloud, as it defines the FQDN of the host.
     */
    name: string;
    /** ID of the ClickHouse host. The ID is assigned by MDB at creation time. */
    clusterId: string;
    /** ID of the availability zone where the ClickHouse host resides. */
    zoneId: string;
    /** Type of the host. */
    type: Host_Type;
    /** Resources allocated to the ClickHouse host. */
    resources: Resources | undefined;
    /** Status code of the aggregated health of the host. */
    health: Host_Health;
    /** Services provided by the host. */
    services: Service[];
    /** ID of the subnet that the host belongs to. */
    subnetId: string;
    /** Flag showing public IP assignment status to this host. */
    assignPublicIp: boolean;
    shardName: string;
}
export declare enum Host_Type {
    TYPE_UNSPECIFIED = 0,
    /** CLICKHOUSE - ClickHouse host. */
    CLICKHOUSE = 1,
    /** ZOOKEEPER - ZooKeeper host. */
    ZOOKEEPER = 2,
    UNRECOGNIZED = -1
}
export declare function host_TypeFromJSON(object: any): Host_Type;
export declare function host_TypeToJSON(object: Host_Type): string;
export declare enum Host_Health {
    /** UNKNOWN - Health of the host is unknown. */
    UNKNOWN = 0,
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.Service';
    /** Type of the service provided by the host. */
    type: Service_Type;
    /** Status code of server availability. */
    health: Service_Health;
}
export declare enum Service_Type {
    TYPE_UNSPECIFIED = 0,
    /** CLICKHOUSE - The host is a ClickHouse server. */
    CLICKHOUSE = 1,
    /** ZOOKEEPER - The host is a ZooKeeper server. */
    ZOOKEEPER = 2,
    UNRECOGNIZED = -1
}
export declare function service_TypeFromJSON(object: any): Service_Type;
export declare function service_TypeToJSON(object: Service_Type): string;
export declare enum Service_Health {
    /** UNKNOWN - Health of the server is unknown. */
    UNKNOWN = 0,
    /** ALIVE - The server is working normally. */
    ALIVE = 1,
    /** DEAD - The server is dead or unresponsive. */
    DEAD = 2,
    UNRECOGNIZED = -1
}
export declare function service_HealthFromJSON(object: any): Service_Health;
export declare function service_HealthToJSON(object: Service_Health): string;
export interface Resources {
    $type: 'yandex.cloud.mdb.clickhouse.v1.Resources';
    /**
     * ID of the preset for computational resources available to a host (CPU, memory etc.).
     * All available presets are listed in the [documentation](/docs/managed-clickhouse/concepts/instance-types)
     */
    resourcePresetId: string;
    /** Volume of the storage available to a host, in bytes. */
    diskSize: number;
    /**
     * Type of the storage environment for the host.
     * Possible values:
     * * network-hdd - network HDD drive,
     * * network-ssd - network SSD drive,
     * * local-ssd - local SSD storage.
     */
    diskTypeId: string;
}
export interface Access {
    $type: 'yandex.cloud.mdb.clickhouse.v1.Access';
    /** Allow to export data from the cluster to Yandex DataLens. */
    dataLens: boolean;
    /**
     * Allow SQL queries to the cluster databases from the Yandex.Cloud management console.
     *
     * See [SQL queries in the management console](/docs/managed-clickhouse/operations/web-sql-query) for more details.
     */
    webSql: boolean;
    /**
     * Allow to import data from Yandex.Metrica and AppMetrica to the cluster.
     *
     * See [Export data to Yandex.Cloud](https://appmetrica.yandex.com/docs/cloud/index.html) for more details.
     */
    metrika: boolean;
    /** Allow access to cluster for Serverless. */
    serverless: boolean;
}
export interface CloudStorage {
    $type: 'yandex.cloud.mdb.clickhouse.v1.CloudStorage';
    /** Whether to use Yandex Object Storage for storing ClickHouse data. */
    enabled: boolean;
}
export declare const Cluster: {
    $type: "yandex.cloud.mdb.clickhouse.v1.Cluster";
    encode(message: Cluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster;
    fromJSON(object: any): Cluster;
    toJSON(message: Cluster): unknown;
    fromPartial(object: DeepPartial<Cluster>): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.mdb.clickhouse.v1.Cluster.LabelsEntry";
    encode(message: Cluster_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster_LabelsEntry;
    fromJSON(object: any): Cluster_LabelsEntry;
    toJSON(message: Cluster_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Cluster_LabelsEntry>): Cluster_LabelsEntry;
};
export declare const Monitoring: {
    $type: "yandex.cloud.mdb.clickhouse.v1.Monitoring";
    encode(message: Monitoring, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Monitoring;
    fromJSON(object: any): Monitoring;
    toJSON(message: Monitoring): unknown;
    fromPartial(object: DeepPartial<Monitoring>): Monitoring;
};
export declare const ClusterConfig: {
    $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig";
    encode(message: ClusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfig;
    fromJSON(object: any): ClusterConfig;
    toJSON(message: ClusterConfig): unknown;
    fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig;
};
export declare const ClusterConfig_Clickhouse: {
    $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Clickhouse";
    encode(message: ClusterConfig_Clickhouse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfig_Clickhouse;
    fromJSON(object: any): ClusterConfig_Clickhouse;
    toJSON(message: ClusterConfig_Clickhouse): unknown;
    fromPartial(object: DeepPartial<ClusterConfig_Clickhouse>): ClusterConfig_Clickhouse;
};
export declare const ClusterConfig_Zookeeper: {
    $type: "yandex.cloud.mdb.clickhouse.v1.ClusterConfig.Zookeeper";
    encode(message: ClusterConfig_Zookeeper, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfig_Zookeeper;
    fromJSON(object: any): ClusterConfig_Zookeeper;
    toJSON(message: ClusterConfig_Zookeeper): unknown;
    fromPartial(object: DeepPartial<ClusterConfig_Zookeeper>): ClusterConfig_Zookeeper;
};
export declare const Shard: {
    $type: "yandex.cloud.mdb.clickhouse.v1.Shard";
    encode(message: Shard, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Shard;
    fromJSON(object: any): Shard;
    toJSON(message: Shard): unknown;
    fromPartial(object: DeepPartial<Shard>): Shard;
};
export declare const ShardGroup: {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardGroup";
    encode(message: ShardGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ShardGroup;
    fromJSON(object: any): ShardGroup;
    toJSON(message: ShardGroup): unknown;
    fromPartial(object: DeepPartial<ShardGroup>): ShardGroup;
};
export declare const ShardConfig: {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig";
    encode(message: ShardConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ShardConfig;
    fromJSON(object: any): ShardConfig;
    toJSON(message: ShardConfig): unknown;
    fromPartial(object: DeepPartial<ShardConfig>): ShardConfig;
};
export declare const ShardConfig_Clickhouse: {
    $type: "yandex.cloud.mdb.clickhouse.v1.ShardConfig.Clickhouse";
    encode(message: ShardConfig_Clickhouse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ShardConfig_Clickhouse;
    fromJSON(object: any): ShardConfig_Clickhouse;
    toJSON(message: ShardConfig_Clickhouse): unknown;
    fromPartial(object: DeepPartial<ShardConfig_Clickhouse>): ShardConfig_Clickhouse;
};
export declare const Host: {
    $type: "yandex.cloud.mdb.clickhouse.v1.Host";
    encode(message: Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host;
    fromJSON(object: any): Host;
    toJSON(message: Host): unknown;
    fromPartial(object: DeepPartial<Host>): Host;
};
export declare const Service: {
    $type: "yandex.cloud.mdb.clickhouse.v1.Service";
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial(object: DeepPartial<Service>): Service;
};
export declare const Resources: {
    $type: "yandex.cloud.mdb.clickhouse.v1.Resources";
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial(object: DeepPartial<Resources>): Resources;
};
export declare const Access: {
    $type: "yandex.cloud.mdb.clickhouse.v1.Access";
    encode(message: Access, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Access;
    fromJSON(object: any): Access;
    toJSON(message: Access): unknown;
    fromPartial(object: DeepPartial<Access>): Access;
};
export declare const CloudStorage: {
    $type: "yandex.cloud.mdb.clickhouse.v1.CloudStorage";
    encode(message: CloudStorage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CloudStorage;
    fromJSON(object: any): CloudStorage;
    toJSON(message: CloudStorage): unknown;
    fromPartial(object: DeepPartial<CloudStorage>): CloudStorage;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
