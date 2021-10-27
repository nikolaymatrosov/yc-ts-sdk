import { TimeOfDay } from '../../../../../google/type/timeofday';
import { Mongodconfigset36, Mongocfgconfigset36, Mongosconfigset36 } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb3_6';
import { Mongodconfigset40, Mongocfgconfigset40, Mongosconfigset40 } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_0';
import { Mongodconfigset42, Mongocfgconfigset42, Mongosconfigset42 } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_2';
import { Mongodconfigset44, Mongocfgconfigset44, Mongosconfigset44 } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4';
import { Mongodconfigset50, Mongocfgconfigset50, Mongosconfigset50 } from '../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0';
import { MaintenanceWindow, MaintenanceOperation } from '../../../../../yandex/cloud/mdb/mongodb/v1/maintenance';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1";
/** A managed MongoDB cluster. For more information, see the [documentation](/docs/managed-mongodb/concepts). */
export interface Cluster {
    $type: 'yandex.cloud.mdb.mongodb.v1.Cluster';
    /**
     * ID of the MongoDB cluster.
     * This ID is assigned by MDB at creation time.
     */
    id: string;
    /** ID of the folder that the MongoDB cluster belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /**
     * Name of the MongoDB cluster.
     * The name is unique within the folder. 1-63 characters long.
     */
    name: string;
    /** Description of the MongoDB cluster. 0-256 characters long. */
    description: string;
    /** Custom labels for the MongoDB cluster as `` key:value `` pairs. Maximum 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the MongoDB cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the MongoDB cluster. */
    monitoring: Monitoring[];
    /** Configuration of the MongoDB cluster. */
    config: ClusterConfig | undefined;
    /** ID of the network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** Indicates current sharding status of the cluster. */
    sharded: boolean;
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
     * PRODUCTION - Stable environment with a conservative update policy: only hotfixes
     * are applied during regular maintenance.
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
    $type: 'yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry';
    key: string;
    value: string;
}
/** Monitoring system. */
export interface Monitoring {
    $type: 'yandex.cloud.mdb.mongodb.v1.Monitoring';
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the MongoDB cluster. */
    link: string;
}
export interface ClusterConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.ClusterConfig';
    /** Version of MongoDB server software. Possible values: `3.6`, `4.0`, `4.2`, `4.4`, `5.0`. */
    version: string;
    /**
     * MongoDB feature compatibility version. See usage details in [MongoDB documentation](https://docs.mongodb.com/manual/reference/command/setFeatureCompatibilityVersion/).
     *
     * Possible values:
     * * `3.6` - persist data compatibility for version 3.6. After setting this option the data will not be compatible with 3.4 or lower.
     * * `4.0` - persist data compatibility for version 4.0. After setting this option the data will not be compatible with 3.6 or lower.
     * * `4.2` - persist data compatibility for version 4.2. After setting this option the data will not be compatible with 4.0 or lower.
     * * `4.4` - persist data compatibility for version 4.4. After setting this option the data will not be compatible with 4.2 or lower.
     * * `5.0` - persist data compatibility for version 5.0. After setting this option the data will not be compatible with 5.0 or lower.
     */
    featureCompatibilityVersion: string;
    /** Configuration and resource allocation for a MongoDB 3.6 cluster. */
    mongodb36: Mongodb36 | undefined;
    /** Configuration and resource allocation for a MongoDB 4.0 cluster. */
    mongodb40: Mongodb40 | undefined;
    /** Configuration and resource allocation for a MongoDB 4.2 cluster. */
    mongodb42: Mongodb42 | undefined;
    /** Configuration and resource allocation for a MongoDB 4.4 cluster. */
    mongodb44: Mongodb44 | undefined;
    /** Configuration and resource allocation for a MongoDB 5.0 cluster. */
    mongodb50: Mongodb50 | undefined;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart: TimeOfDay | undefined;
    /** Retain period of automatically created backup in days */
    backupRetainPeriodDays: number | undefined;
    /** Access policy to DB */
    access: Access | undefined;
}
export interface Mongodb36 {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb3_6';
    /** Configuration and resource allocation for mongod in a MongoDB 3.6 cluster. */
    mongod: Mongodb36_Mongod | undefined;
    /** Configuration and resource allocation for mongocfg in a MongoDB 3.6 cluster. */
    mongocfg: Mongodb36_MongoCfg | undefined;
    /** Configuration and resource allocation for mongos in a MongoDB 3.6 cluster. */
    mongos: Mongodb36_Mongos | undefined;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 3.6 cluster. */
    mongoinfra: Mongodb36_MongoInfra | undefined;
}
export interface Mongodb36_Mongod {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod';
    /** Configuration for a mongod 3.6 hosts. */
    config: Mongodconfigset36 | undefined;
    /** Resources allocated to MongoDB hosts. */
    resources: Resources | undefined;
}
export interface Mongodb36_MongoCfg {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg';
    config: Mongocfgconfigset36 | undefined;
    /** Resources allocated to mongocfg hosts. */
    resources: Resources | undefined;
}
export interface Mongodb36_Mongos {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos';
    config: Mongosconfigset36 | undefined;
    /** Resources allocated to mongocfg hosts. */
    resources: Resources | undefined;
}
export interface Mongodb36_MongoInfra {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra';
    configMongos: Mongosconfigset36 | undefined;
    configMongocfg: Mongocfgconfigset36 | undefined;
    /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
    resources: Resources | undefined;
}
export interface Mongodb40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_0';
    /** Configuration and resource allocation for mongod in a MongoDB 4.0 cluster. */
    mongod: Mongodb40_Mongod | undefined;
    /** Configuration and resource allocation for mongocfg in a MongoDB 4.0 cluster. */
    mongocfg: Mongodb40_MongoCfg | undefined;
    /** Configuration and resource allocation for mongos in a MongoDB 4.0 cluster. */
    mongos: Mongodb40_Mongos | undefined;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 4.0 cluster. */
    mongoinfra: Mongodb40_MongoInfra | undefined;
}
export interface Mongodb40_Mongod {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod';
    /** Configuration for mongod 4.0 hosts. */
    config: Mongodconfigset40 | undefined;
    /** Resources allocated to mongod hosts. */
    resources: Resources | undefined;
}
export interface Mongodb40_MongoCfg {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg';
    /** Configuration for mongocfg 4.0 hosts. */
    config: Mongocfgconfigset40 | undefined;
    /** Resources allocated to mongocfg hosts. */
    resources: Resources | undefined;
}
export interface Mongodb40_Mongos {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos';
    /** Configuration for mongos 4.0 hosts. */
    config: Mongosconfigset40 | undefined;
    /** Resources allocated to mongos hosts. */
    resources: Resources | undefined;
}
export interface Mongodb40_MongoInfra {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra';
    configMongos: Mongosconfigset40 | undefined;
    configMongocfg: Mongocfgconfigset40 | undefined;
    /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
    resources: Resources | undefined;
}
export interface Mongodb42 {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_2';
    /** Configuration and resource allocation for mongod in a MongoDB 4.2 cluster. */
    mongod: Mongodb42_Mongod | undefined;
    /** Configuration and resource allocation for mongocfg in a MongoDB 4.2 cluster. */
    mongocfg: Mongodb42_MongoCfg | undefined;
    /** Configuration and resource allocation for mongos in a MongoDB 4.2 cluster. */
    mongos: Mongodb42_Mongos | undefined;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 4.2 cluster. */
    mongoinfra: Mongodb42_MongoInfra | undefined;
}
export interface Mongodb42_Mongod {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod';
    /** Configuration for mongod 4.2 hosts. */
    config: Mongodconfigset42 | undefined;
    /** Resources allocated to mongod hosts. */
    resources: Resources | undefined;
}
export interface Mongodb42_MongoCfg {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg';
    /** Configuration for mongocfg 4.2 hosts. */
    config: Mongocfgconfigset42 | undefined;
    /** Resources allocated to mongocfg hosts. */
    resources: Resources | undefined;
}
export interface Mongodb42_Mongos {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos';
    /** Configuration for mongos 4.2 hosts. */
    config: Mongosconfigset42 | undefined;
    /** Resources allocated to mongos hosts. */
    resources: Resources | undefined;
}
export interface Mongodb42_MongoInfra {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra';
    configMongos: Mongosconfigset42 | undefined;
    configMongocfg: Mongocfgconfigset42 | undefined;
    /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
    resources: Resources | undefined;
}
export interface Mongodb44 {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_4';
    /** Configuration and resource allocation for mongod in a MongoDB 4.4 cluster. */
    mongod: Mongodb44_Mongod | undefined;
    /** Configuration and resource allocation for mongocfg in a MongoDB 4.4 cluster. */
    mongocfg: Mongodb44_MongoCfg | undefined;
    /** Configuration and resource allocation for mongos in a MongoDB 4.4 cluster. */
    mongos: Mongodb44_Mongos | undefined;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 4.4 cluster. */
    mongoinfra: Mongodb44_MongoInfra | undefined;
}
export interface Mongodb44_Mongod {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod';
    /** Configuration for mongod 4.4 hosts. */
    config: Mongodconfigset44 | undefined;
    /** Resources allocated to mongod hosts. */
    resources: Resources | undefined;
}
export interface Mongodb44_MongoCfg {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg';
    /** Configuration for mongocfg 4.4 hosts. */
    config: Mongocfgconfigset44 | undefined;
    /** Resources allocated to mongocfg hosts. */
    resources: Resources | undefined;
}
export interface Mongodb44_Mongos {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos';
    /** Configuration for mongos 4.4 hosts. */
    config: Mongosconfigset44 | undefined;
    /** Resources allocated to mongos hosts. */
    resources: Resources | undefined;
}
export interface Mongodb44_MongoInfra {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra';
    configMongos: Mongosconfigset44 | undefined;
    configMongocfg: Mongocfgconfigset44 | undefined;
    /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
    resources: Resources | undefined;
}
export interface Mongodb50 {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb5_0';
    /** Configuration and resource allocation for mongod in a MongoDB 5.0 cluster. */
    mongod: Mongodb50_Mongod | undefined;
    /** Configuration and resource allocation for mongocfg in a MongoDB 5.0 cluster. */
    mongocfg: Mongodb50_MongoCfg | undefined;
    /** Configuration and resource allocation for mongos in a MongoDB 5.0 cluster. */
    mongos: Mongodb50_Mongos | undefined;
    /** Configuration and resource allocation for mongoinfra (mongos+mongocfg) in a MongoDB 5.0 cluster. */
    mongoinfra: Mongodb50_MongoInfra | undefined;
}
export interface Mongodb50_Mongod {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod';
    /** Configuration for mongod 5.0 hosts. */
    config: Mongodconfigset50 | undefined;
    /** Resources allocated to mongod hosts. */
    resources: Resources | undefined;
}
export interface Mongodb50_MongoCfg {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg';
    /** Configuration for mongocfg 5.0 hosts. */
    config: Mongocfgconfigset50 | undefined;
    /** Resources allocated to mongocfg hosts. */
    resources: Resources | undefined;
}
export interface Mongodb50_Mongos {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos';
    /** Configuration for mongos 5.0 hosts. */
    config: Mongosconfigset50 | undefined;
    /** Resources allocated to mongos hosts. */
    resources: Resources | undefined;
}
export interface Mongodb50_MongoInfra {
    $type: 'yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra';
    configMongos: Mongosconfigset50 | undefined;
    configMongocfg: Mongocfgconfigset50 | undefined;
    /** Resources allocated to mongoinfra (mongos+mongocfg) hosts. */
    resources: Resources | undefined;
}
export interface Shard {
    $type: 'yandex.cloud.mdb.mongodb.v1.Shard';
    /** Name of the shard. */
    name: string;
    /** ID of the cluster that the shard belongs to. */
    clusterId: string;
}
export interface Host {
    $type: 'yandex.cloud.mdb.mongodb.v1.Host';
    /**
     * Name of the MongoDB host. The host name is assigned by MDB at creation time, and cannot be changed.
     * 1-63 characters long.
     *
     * The name is unique across all existing MDB hosts in Yandex.Cloud, as it defines the FQDN of the host.
     */
    name: string;
    /** ID of the MongoDB host. The ID is assigned by MDB at creation time. */
    clusterId: string;
    /** ID of the availability zone where the MongoDB host resides. */
    zoneId: string;
    /** Resources allocated to the MongoDB host. */
    resources: Resources | undefined;
    /** Role of the host in the cluster. */
    role: Host_Role;
    /** Status code of the aggregated health of the host. */
    health: Host_Health;
    /** Services provided by the host. */
    services: Service[];
    /** ID of the subnet that the host belongs to. */
    subnetId: string;
    /** Flag showing public IP assignment status to this host. */
    assignPublicIp: boolean;
    /** Shard which this host belongs to. */
    shardName: string;
    /** Host type */
    type: Host_Type;
}
export declare enum Host_Type {
    TYPE_UNSPECIFIED = 0,
    /** MONGOD - A mongod host. */
    MONGOD = 1,
    /** MONGOS - A mongos host. */
    MONGOS = 2,
    /** MONGOCFG - A mongocfg host. */
    MONGOCFG = 3,
    /** MONGOINFRA - A mongoinfra (mongos+mongocfg) host. */
    MONGOINFRA = 4,
    UNRECOGNIZED = -1
}
export declare function host_TypeFromJSON(object: any): Host_Type;
export declare function host_TypeToJSON(object: Host_Type): string;
export declare enum Host_Role {
    /** ROLE_UNKNOWN - Role of the host in the cluster is unknown. */
    ROLE_UNKNOWN = 0,
    /** PRIMARY - Host is the primary MongoDB server in the cluster. */
    PRIMARY = 1,
    /** SECONDARY - Host is a secondary MongoDB server in the cluster. */
    SECONDARY = 2,
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
    $type: 'yandex.cloud.mdb.mongodb.v1.Service';
    /** Type of the service provided by the host. */
    type: Service_Type;
    /** Status code of server availability. */
    health: Service_Health;
}
export declare enum Service_Type {
    TYPE_UNSPECIFIED = 0,
    /** MONGOD - The host is running a mongod daemon. */
    MONGOD = 1,
    /** MONGOS - The host is running a mongos daemon. */
    MONGOS = 2,
    /** MONGOCFG - The host is running a MongoDB config server. */
    MONGOCFG = 3,
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
    $type: 'yandex.cloud.mdb.mongodb.v1.Resources';
    /**
     * ID of the preset for computational resources available to a host (CPU, memory etc.).
     * All available presets are listed in the [documentation](/docs/managed-mongodb/concepts/instance-types).
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
    $type: 'yandex.cloud.mdb.mongodb.v1.Access';
    /** Allow access for DataLens */
    dataLens: boolean;
}
export declare const Cluster: {
    $type: "yandex.cloud.mdb.mongodb.v1.Cluster";
    encode(message: Cluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster;
    fromJSON(object: any): Cluster;
    toJSON(message: Cluster): unknown;
    fromPartial(object: DeepPartial<Cluster>): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.mdb.mongodb.v1.Cluster.LabelsEntry";
    encode(message: Cluster_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster_LabelsEntry;
    fromJSON(object: any): Cluster_LabelsEntry;
    toJSON(message: Cluster_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Cluster_LabelsEntry>): Cluster_LabelsEntry;
};
export declare const Monitoring: {
    $type: "yandex.cloud.mdb.mongodb.v1.Monitoring";
    encode(message: Monitoring, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Monitoring;
    fromJSON(object: any): Monitoring;
    toJSON(message: Monitoring): unknown;
    fromPartial(object: DeepPartial<Monitoring>): Monitoring;
};
export declare const ClusterConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.ClusterConfig";
    encode(message: ClusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfig;
    fromJSON(object: any): ClusterConfig;
    toJSON(message: ClusterConfig): unknown;
    fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig;
};
export declare const Mongodb36: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6";
    encode(message: Mongodb36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb36;
    fromJSON(object: any): Mongodb36;
    toJSON(message: Mongodb36): unknown;
    fromPartial(object: DeepPartial<Mongodb36>): Mongodb36;
};
export declare const Mongodb36_Mongod: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongod";
    encode(message: Mongodb36_Mongod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb36_Mongod;
    fromJSON(object: any): Mongodb36_Mongod;
    toJSON(message: Mongodb36_Mongod): unknown;
    fromPartial(object: DeepPartial<Mongodb36_Mongod>): Mongodb36_Mongod;
};
export declare const Mongodb36_MongoCfg: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoCfg";
    encode(message: Mongodb36_MongoCfg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb36_MongoCfg;
    fromJSON(object: any): Mongodb36_MongoCfg;
    toJSON(message: Mongodb36_MongoCfg): unknown;
    fromPartial(object: DeepPartial<Mongodb36_MongoCfg>): Mongodb36_MongoCfg;
};
export declare const Mongodb36_Mongos: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.Mongos";
    encode(message: Mongodb36_Mongos, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb36_Mongos;
    fromJSON(object: any): Mongodb36_Mongos;
    toJSON(message: Mongodb36_Mongos): unknown;
    fromPartial(object: DeepPartial<Mongodb36_Mongos>): Mongodb36_Mongos;
};
export declare const Mongodb36_MongoInfra: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb3_6.MongoInfra";
    encode(message: Mongodb36_MongoInfra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb36_MongoInfra;
    fromJSON(object: any): Mongodb36_MongoInfra;
    toJSON(message: Mongodb36_MongoInfra): unknown;
    fromPartial(object: DeepPartial<Mongodb36_MongoInfra>): Mongodb36_MongoInfra;
};
export declare const Mongodb40: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0";
    encode(message: Mongodb40, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb40;
    fromJSON(object: any): Mongodb40;
    toJSON(message: Mongodb40): unknown;
    fromPartial(object: DeepPartial<Mongodb40>): Mongodb40;
};
export declare const Mongodb40_Mongod: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongod";
    encode(message: Mongodb40_Mongod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb40_Mongod;
    fromJSON(object: any): Mongodb40_Mongod;
    toJSON(message: Mongodb40_Mongod): unknown;
    fromPartial(object: DeepPartial<Mongodb40_Mongod>): Mongodb40_Mongod;
};
export declare const Mongodb40_MongoCfg: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoCfg";
    encode(message: Mongodb40_MongoCfg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb40_MongoCfg;
    fromJSON(object: any): Mongodb40_MongoCfg;
    toJSON(message: Mongodb40_MongoCfg): unknown;
    fromPartial(object: DeepPartial<Mongodb40_MongoCfg>): Mongodb40_MongoCfg;
};
export declare const Mongodb40_Mongos: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.Mongos";
    encode(message: Mongodb40_Mongos, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb40_Mongos;
    fromJSON(object: any): Mongodb40_Mongos;
    toJSON(message: Mongodb40_Mongos): unknown;
    fromPartial(object: DeepPartial<Mongodb40_Mongos>): Mongodb40_Mongos;
};
export declare const Mongodb40_MongoInfra: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_0.MongoInfra";
    encode(message: Mongodb40_MongoInfra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb40_MongoInfra;
    fromJSON(object: any): Mongodb40_MongoInfra;
    toJSON(message: Mongodb40_MongoInfra): unknown;
    fromPartial(object: DeepPartial<Mongodb40_MongoInfra>): Mongodb40_MongoInfra;
};
export declare const Mongodb42: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2";
    encode(message: Mongodb42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb42;
    fromJSON(object: any): Mongodb42;
    toJSON(message: Mongodb42): unknown;
    fromPartial(object: DeepPartial<Mongodb42>): Mongodb42;
};
export declare const Mongodb42_Mongod: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongod";
    encode(message: Mongodb42_Mongod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb42_Mongod;
    fromJSON(object: any): Mongodb42_Mongod;
    toJSON(message: Mongodb42_Mongod): unknown;
    fromPartial(object: DeepPartial<Mongodb42_Mongod>): Mongodb42_Mongod;
};
export declare const Mongodb42_MongoCfg: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoCfg";
    encode(message: Mongodb42_MongoCfg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb42_MongoCfg;
    fromJSON(object: any): Mongodb42_MongoCfg;
    toJSON(message: Mongodb42_MongoCfg): unknown;
    fromPartial(object: DeepPartial<Mongodb42_MongoCfg>): Mongodb42_MongoCfg;
};
export declare const Mongodb42_Mongos: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.Mongos";
    encode(message: Mongodb42_Mongos, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb42_Mongos;
    fromJSON(object: any): Mongodb42_Mongos;
    toJSON(message: Mongodb42_Mongos): unknown;
    fromPartial(object: DeepPartial<Mongodb42_Mongos>): Mongodb42_Mongos;
};
export declare const Mongodb42_MongoInfra: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_2.MongoInfra";
    encode(message: Mongodb42_MongoInfra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb42_MongoInfra;
    fromJSON(object: any): Mongodb42_MongoInfra;
    toJSON(message: Mongodb42_MongoInfra): unknown;
    fromPartial(object: DeepPartial<Mongodb42_MongoInfra>): Mongodb42_MongoInfra;
};
export declare const Mongodb44: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4";
    encode(message: Mongodb44, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb44;
    fromJSON(object: any): Mongodb44;
    toJSON(message: Mongodb44): unknown;
    fromPartial(object: DeepPartial<Mongodb44>): Mongodb44;
};
export declare const Mongodb44_Mongod: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongod";
    encode(message: Mongodb44_Mongod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb44_Mongod;
    fromJSON(object: any): Mongodb44_Mongod;
    toJSON(message: Mongodb44_Mongod): unknown;
    fromPartial(object: DeepPartial<Mongodb44_Mongod>): Mongodb44_Mongod;
};
export declare const Mongodb44_MongoCfg: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoCfg";
    encode(message: Mongodb44_MongoCfg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb44_MongoCfg;
    fromJSON(object: any): Mongodb44_MongoCfg;
    toJSON(message: Mongodb44_MongoCfg): unknown;
    fromPartial(object: DeepPartial<Mongodb44_MongoCfg>): Mongodb44_MongoCfg;
};
export declare const Mongodb44_Mongos: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.Mongos";
    encode(message: Mongodb44_Mongos, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb44_Mongos;
    fromJSON(object: any): Mongodb44_Mongos;
    toJSON(message: Mongodb44_Mongos): unknown;
    fromPartial(object: DeepPartial<Mongodb44_Mongos>): Mongodb44_Mongos;
};
export declare const Mongodb44_MongoInfra: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb4_4.MongoInfra";
    encode(message: Mongodb44_MongoInfra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb44_MongoInfra;
    fromJSON(object: any): Mongodb44_MongoInfra;
    toJSON(message: Mongodb44_MongoInfra): unknown;
    fromPartial(object: DeepPartial<Mongodb44_MongoInfra>): Mongodb44_MongoInfra;
};
export declare const Mongodb50: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0";
    encode(message: Mongodb50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb50;
    fromJSON(object: any): Mongodb50;
    toJSON(message: Mongodb50): unknown;
    fromPartial(object: DeepPartial<Mongodb50>): Mongodb50;
};
export declare const Mongodb50_Mongod: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongod";
    encode(message: Mongodb50_Mongod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb50_Mongod;
    fromJSON(object: any): Mongodb50_Mongod;
    toJSON(message: Mongodb50_Mongod): unknown;
    fromPartial(object: DeepPartial<Mongodb50_Mongod>): Mongodb50_Mongod;
};
export declare const Mongodb50_MongoCfg: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoCfg";
    encode(message: Mongodb50_MongoCfg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb50_MongoCfg;
    fromJSON(object: any): Mongodb50_MongoCfg;
    toJSON(message: Mongodb50_MongoCfg): unknown;
    fromPartial(object: DeepPartial<Mongodb50_MongoCfg>): Mongodb50_MongoCfg;
};
export declare const Mongodb50_Mongos: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.Mongos";
    encode(message: Mongodb50_Mongos, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb50_Mongos;
    fromJSON(object: any): Mongodb50_Mongos;
    toJSON(message: Mongodb50_Mongos): unknown;
    fromPartial(object: DeepPartial<Mongodb50_Mongos>): Mongodb50_Mongos;
};
export declare const Mongodb50_MongoInfra: {
    $type: "yandex.cloud.mdb.mongodb.v1.Mongodb5_0.MongoInfra";
    encode(message: Mongodb50_MongoInfra, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodb50_MongoInfra;
    fromJSON(object: any): Mongodb50_MongoInfra;
    toJSON(message: Mongodb50_MongoInfra): unknown;
    fromPartial(object: DeepPartial<Mongodb50_MongoInfra>): Mongodb50_MongoInfra;
};
export declare const Shard: {
    $type: "yandex.cloud.mdb.mongodb.v1.Shard";
    encode(message: Shard, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Shard;
    fromJSON(object: any): Shard;
    toJSON(message: Shard): unknown;
    fromPartial(object: DeepPartial<Shard>): Shard;
};
export declare const Host: {
    $type: "yandex.cloud.mdb.mongodb.v1.Host";
    encode(message: Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host;
    fromJSON(object: any): Host;
    toJSON(message: Host): unknown;
    fromPartial(object: DeepPartial<Host>): Host;
};
export declare const Service: {
    $type: "yandex.cloud.mdb.mongodb.v1.Service";
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial(object: DeepPartial<Service>): Service;
};
export declare const Resources: {
    $type: "yandex.cloud.mdb.mongodb.v1.Resources";
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial(object: DeepPartial<Resources>): Resources;
};
export declare const Access: {
    $type: "yandex.cloud.mdb.mongodb.v1.Access";
    encode(message: Access, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Access;
    fromJSON(object: any): Access;
    toJSON(message: Access): unknown;
    fromPartial(object: DeepPartial<Access>): Access;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
