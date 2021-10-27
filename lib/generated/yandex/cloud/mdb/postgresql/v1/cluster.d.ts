import { TimeOfDay } from '../../../../../google/type/timeofday';
import { Postgresqlhostconfig96 } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/host9_6';
import { PostgresqlHostConfig10 } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/host10';
import { Postgresqlhostconfig101c } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/host10_1c';
import { PostgresqlHostConfig11 } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/host11';
import { Postgresqlhostconfig111c } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/host11_1c';
import { PostgresqlHostConfig12 } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/host12';
import { Postgresqlhostconfig121c } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/host12_1c';
import { PostgresqlHostConfig13 } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/host13';
import { Postgresqlconfigset96 } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql9_6';
import { PostgresqlConfigSet10 } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10';
import { Postgresqlconfigset101c } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10_1c';
import { PostgresqlConfigSet11 } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11';
import { Postgresqlconfigset111c } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11_1c';
import { PostgresqlConfigSet12 } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12';
import { Postgresqlconfigset121c } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12_1c';
import { PostgresqlConfigSet13 } from '../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql13';
import { MaintenanceWindow, MaintenanceOperation } from '../../../../../yandex/cloud/mdb/postgresql/v1/maintenance';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1";
/**
 * A PostgreSQL Cluster resource. For more information, see
 * the [Concepts](/docs/managed-postgresql/concepts) section of the documentation.
 */
export interface Cluster {
    $type: 'yandex.cloud.mdb.postgresql.v1.Cluster';
    /**
     * ID of the PostgreSQL cluster.
     * This ID is assigned by MDB at creation time.
     */
    id: string;
    /** ID of the folder that the PostgreSQL cluster belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /**
     * Name of the PostgreSQL cluster.
     * The name is unique within the folder. 1-63 characters long.
     */
    name: string;
    /** Description of the PostgreSQL cluster. 0-256 characters long. */
    description: string;
    /**
     * Custom labels for the PostgreSQL cluster as `` key:value `` pairs.
     * Maximum 64 per resource.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the PostgreSQL cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the PostgreSQL cluster. */
    monitoring: Monitoring[];
    /** Configuration of the PostgreSQL cluster. */
    config: ClusterConfig | undefined;
    /** ID of the network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** Maintenance window for the cluster. */
    maintenanceWindow: MaintenanceWindow | undefined;
    /** Planned maintenance operation to be started for the cluster within the nearest [maintenance_window]. */
    plannedOperation: MaintenanceOperation | undefined;
    /** User security groups */
    securityGroupIds: string[];
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
    $type: 'yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry';
    key: string;
    value: string;
}
/** Monitoring system. */
export interface Monitoring {
    $type: 'yandex.cloud.mdb.postgresql.v1.Monitoring';
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the PostgreSQL cluster. */
    link: string;
}
export interface ClusterConfig {
    $type: 'yandex.cloud.mdb.postgresql.v1.ClusterConfig';
    /** Version of PostgreSQL server software. */
    version: string;
    /** Configuration of a PostgreSQL 9.6 server. */
    postgresqlConfig96: Postgresqlconfigset96 | undefined;
    /** Configuration of a PostgreSQL 10 1C server. */
    postgresqlConfig101c: Postgresqlconfigset101c | undefined;
    /** Configuration of a PostgreSQL 10 server. */
    postgresqlConfig10: PostgresqlConfigSet10 | undefined;
    /** Configuration of a PostgreSQL 11 server. */
    postgresqlConfig11: PostgresqlConfigSet11 | undefined;
    /** Configuration of a PostgreSQL 11 1C server. */
    postgresqlConfig111c: Postgresqlconfigset111c | undefined;
    /** Configuration of a PostgreSQL 12 server. */
    postgresqlConfig12: PostgresqlConfigSet12 | undefined;
    /** Configuration of a PostgreSQL 12 1C server. */
    postgresqlConfig121c: Postgresqlconfigset121c | undefined;
    /** Configuration of a PostgreSQL 13 server. */
    postgresqlConfig13: PostgresqlConfigSet13 | undefined;
    /** Configuration of the connection pooler. */
    poolerConfig: ConnectionPoolerConfig | undefined;
    /** Resources allocated to PostgreSQL hosts. */
    resources: Resources | undefined;
    /** Configuration setting which enables/disables autofailover in cluster. */
    autofailover: boolean | undefined;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart: TimeOfDay | undefined;
    /** Retention policy of automated backups. */
    backupRetainPeriodDays: number | undefined;
    /** Access policy to DB */
    access: Access | undefined;
    /** Configuration of the performance diagnostics service. */
    performanceDiagnostics: PerformanceDiagnostics | undefined;
}
export interface ConnectionPoolerConfig {
    $type: 'yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig';
    /**
     * Mode that the connection pooler is working in.
     * See descriptions of all modes in the [documentation for PgBouncer](https://pgbouncer.github.io/usage).
     */
    poolingMode: ConnectionPoolerConfig_PoolingMode;
    /** Setting `server_reset_query_always` parameter in PgBouncer. */
    poolDiscard: boolean | undefined;
}
export declare enum ConnectionPoolerConfig_PoolingMode {
    POOLING_MODE_UNSPECIFIED = 0,
    /** SESSION - Session pooling mode. */
    SESSION = 1,
    /** TRANSACTION - Transaction pooling mode. */
    TRANSACTION = 2,
    /** STATEMENT - Statement pooling mode. */
    STATEMENT = 3,
    UNRECOGNIZED = -1
}
export declare function connectionPoolerConfig_PoolingModeFromJSON(object: any): ConnectionPoolerConfig_PoolingMode;
export declare function connectionPoolerConfig_PoolingModeToJSON(object: ConnectionPoolerConfig_PoolingMode): string;
export interface Host {
    $type: 'yandex.cloud.mdb.postgresql.v1.Host';
    /**
     * Name of the PostgreSQL host. The host name is assigned by MDB at creation time, and cannot be changed.
     * 1-63 characters long.
     *
     * The name is unique across all existing MDB hosts in Yandex.Cloud, as it defines the FQDN of the host.
     */
    name: string;
    /** ID of the PostgreSQL host. The ID is assigned by MDB at creation time. */
    clusterId: string;
    /** ID of the availability zone where the PostgreSQL host resides. */
    zoneId: string;
    /** Resources allocated to the PostgreSQL host. */
    resources: Resources | undefined;
    /** Role of the host in the cluster. */
    role: Host_Role;
    /** Status code of the aggregated health of the host. */
    health: Host_Health;
    /** Services provided by the host. */
    services: Service[];
    /** ID of the subnet that the host belongs to. */
    subnetId: string;
    /** Name of the host to be used as the replication source for cascading replication. */
    replicationSource: string;
    /**
     * Priority of the host as a replica. Higher value means higher priority.
     *
     * The host with the highest priority is the synchronous replica. All others are asynchronous.
     * The synchronous replica replaces the master when needed.
     *
     * When a replica becomes the master, its priority is ignored.
     */
    priority: number | undefined;
    /** Configuration of a PostgreSQL server for the host. */
    config: HostConfig | undefined;
    /** Flag showing public IP assignment status to this host. */
    assignPublicIp: boolean;
    replicaType: Host_ReplicaType;
}
export declare enum Host_Role {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    ROLE_UNKNOWN = 0,
    /** MASTER - Host is the master PostgreSQL server in the cluster. */
    MASTER = 1,
    /** REPLICA - Host is a replica (standby) PostgreSQL server in the cluster. */
    REPLICA = 2,
    UNRECOGNIZED = -1
}
export declare function host_RoleFromJSON(object: any): Host_Role;
export declare function host_RoleToJSON(object: Host_Role): string;
export declare enum Host_ReplicaType {
    /** REPLICA_TYPE_UNKNOWN - Replica type is unknown (we have no data) or it's master */
    REPLICA_TYPE_UNKNOWN = 0,
    ASYNC = 1,
    SYNC = 2,
    QUORUM = 3,
    UNRECOGNIZED = -1
}
export declare function host_ReplicaTypeFromJSON(object: any): Host_ReplicaType;
export declare function host_ReplicaTypeToJSON(object: Host_ReplicaType): string;
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
export interface HostConfig {
    $type: 'yandex.cloud.mdb.postgresql.v1.HostConfig';
    /** Configuration for a host with PostgreSQL 9.6 server deployed. */
    postgresqlConfig96: Postgresqlhostconfig96 | undefined;
    /** Configuration for a host with PostgreSQL 10 1C server deployed. */
    postgresqlConfig101c: Postgresqlhostconfig101c | undefined;
    /** Configuration for a host with PostgreSQL 10 server deployed. */
    postgresqlConfig10: PostgresqlHostConfig10 | undefined;
    /** Configuration for a host with PostgreSQL 11 server deployed. */
    postgresqlConfig11: PostgresqlHostConfig11 | undefined;
    /** Configuration for a host with PostgreSQL 11 1C server deployed. */
    postgresqlConfig111c: Postgresqlhostconfig111c | undefined;
    /** Configuration for a host with PostgreSQL 12 server deployed. */
    postgresqlConfig12: PostgresqlHostConfig12 | undefined;
    /** Configuration for a host with PostgreSQL 12 1C server deployed. */
    postgresqlConfig121c: Postgresqlhostconfig121c | undefined;
    /** Configuration for a host with PostgreSQL 13 server deployed. */
    postgresqlConfig13: PostgresqlHostConfig13 | undefined;
}
export interface Service {
    $type: 'yandex.cloud.mdb.postgresql.v1.Service';
    /** Type of the service provided by the host. */
    type: Service_Type;
    /** Status code of server availability. */
    health: Service_Health;
}
export declare enum Service_Type {
    TYPE_UNSPECIFIED = 0,
    /** POSTGRESQL - The host is a PostgreSQL server. */
    POSTGRESQL = 1,
    /** POOLER - The host is a PgBouncer server. */
    POOLER = 2,
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
    $type: 'yandex.cloud.mdb.postgresql.v1.Resources';
    /**
     * ID of the preset for computational resources available to a host (CPU, memory etc.).
     * All available presets are listed in the [documentation](/docs/managed-postgresql/concepts/instance-types).
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
    $type: 'yandex.cloud.mdb.postgresql.v1.Access';
    /** Allow access for DataLens */
    dataLens: boolean;
    /**
     * Allow SQL queries to the cluster databases from the Yandex.Cloud management console.
     *
     * See [SQL queries in the management console](/docs/managed-postgresql/operations/web-sql-query) for more details.
     */
    webSql: boolean;
    /** Allow access for Serverless */
    serverless: boolean;
}
export interface PerformanceDiagnostics {
    $type: 'yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics';
    /** Configuration setting which enables/disables performance diagnostics service in cluster. */
    enabled: boolean;
    /** Interval (in seconds) for pg_stat_activity sampling */
    sessionsSamplingInterval: number;
    /** Interval (in seconds) for pg_stat_statements sampling */
    statementsSamplingInterval: number;
}
export declare const Cluster: {
    $type: "yandex.cloud.mdb.postgresql.v1.Cluster";
    encode(message: Cluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster;
    fromJSON(object: any): Cluster;
    toJSON(message: Cluster): unknown;
    fromPartial(object: DeepPartial<Cluster>): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.mdb.postgresql.v1.Cluster.LabelsEntry";
    encode(message: Cluster_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster_LabelsEntry;
    fromJSON(object: any): Cluster_LabelsEntry;
    toJSON(message: Cluster_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Cluster_LabelsEntry>): Cluster_LabelsEntry;
};
export declare const Monitoring: {
    $type: "yandex.cloud.mdb.postgresql.v1.Monitoring";
    encode(message: Monitoring, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Monitoring;
    fromJSON(object: any): Monitoring;
    toJSON(message: Monitoring): unknown;
    fromPartial(object: DeepPartial<Monitoring>): Monitoring;
};
export declare const ClusterConfig: {
    $type: "yandex.cloud.mdb.postgresql.v1.ClusterConfig";
    encode(message: ClusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfig;
    fromJSON(object: any): ClusterConfig;
    toJSON(message: ClusterConfig): unknown;
    fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig;
};
export declare const ConnectionPoolerConfig: {
    $type: "yandex.cloud.mdb.postgresql.v1.ConnectionPoolerConfig";
    encode(message: ConnectionPoolerConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectionPoolerConfig;
    fromJSON(object: any): ConnectionPoolerConfig;
    toJSON(message: ConnectionPoolerConfig): unknown;
    fromPartial(object: DeepPartial<ConnectionPoolerConfig>): ConnectionPoolerConfig;
};
export declare const Host: {
    $type: "yandex.cloud.mdb.postgresql.v1.Host";
    encode(message: Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host;
    fromJSON(object: any): Host;
    toJSON(message: Host): unknown;
    fromPartial(object: DeepPartial<Host>): Host;
};
export declare const HostConfig: {
    $type: "yandex.cloud.mdb.postgresql.v1.HostConfig";
    encode(message: HostConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostConfig;
    fromJSON(object: any): HostConfig;
    toJSON(message: HostConfig): unknown;
    fromPartial(object: DeepPartial<HostConfig>): HostConfig;
};
export declare const Service: {
    $type: "yandex.cloud.mdb.postgresql.v1.Service";
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial(object: DeepPartial<Service>): Service;
};
export declare const Resources: {
    $type: "yandex.cloud.mdb.postgresql.v1.Resources";
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial(object: DeepPartial<Resources>): Resources;
};
export declare const Access: {
    $type: "yandex.cloud.mdb.postgresql.v1.Access";
    encode(message: Access, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Access;
    fromJSON(object: any): Access;
    toJSON(message: Access): unknown;
    fromPartial(object: DeepPartial<Access>): Access;
};
export declare const PerformanceDiagnostics: {
    $type: "yandex.cloud.mdb.postgresql.v1.PerformanceDiagnostics";
    encode(message: PerformanceDiagnostics, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PerformanceDiagnostics;
    fromJSON(object: any): PerformanceDiagnostics;
    toJSON(message: PerformanceDiagnostics): unknown;
    fromPartial(object: DeepPartial<PerformanceDiagnostics>): PerformanceDiagnostics;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
