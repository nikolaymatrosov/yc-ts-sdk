import { ElasticsearchConfigSet7 } from '../../../../../yandex/cloud/mdb/elasticsearch/v1/config/elasticsearch';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
/**
 * An Elasticsearch cluster resource.
 * For more information, see the [Concepts](/docs/managed-elasticsearch/concepts) section of the documentation.
 */
export interface Cluster {
    /**
     * ID of the Elasticsearch cluster.
     * This ID is assigned at creation time.
     */
    id: string;
    /** ID of the folder that the Elasticsearch cluster belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /**
     * Name of the Elasticsearch cluster.
     * The name must be unique within the folder. 1-63 characters long.
     */
    name: string;
    /** Description of the Elasticsearch cluster. 0-256 characters long. */
    description: string;
    /**
     * Custom labels for the Elasticsearch cluster as `key:value` pairs.
     * A maximum of 64 labels per resource is allowed.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Elasticsearch cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the Elasticsearch cluster. */
    monitoring: Monitoring[];
    /** Configuration of the Elasticsearch cluster. */
    config: ClusterConfig | undefined;
    /** ID of the network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** User security groups */
    securityGroupIds: string[];
    /** ID of the service account used for access to Yandex Object Storage. */
    serviceAccountId: string;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
}
export declare enum Cluster_Environment {
    ENVIRONMENT_UNSPECIFIED = 0,
    /** PRODUCTION - stable environment with a conservative update policy when only hotfixes are applied during regular maintenance. */
    PRODUCTION = 1,
    /** PRESTABLE - environment with a more aggressive update policy when new versions are rolled out irrespective of backward compatibility. */
    PRESTABLE = 2,
    UNRECOGNIZED = -1
}
export declare function cluster_EnvironmentFromJSON(object: any): Cluster_Environment;
export declare function cluster_EnvironmentToJSON(object: Cluster_Environment): string;
export declare enum Cluster_Health {
    /** HEALTH_UNKNOWN - state of the cluster is unknown ([Host.health] of all hosts in the cluster is `UNKNOWN`). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - cluster is alive and well ([Host.health] of all hosts in the cluster is `ALIVE`). */
    ALIVE = 1,
    /** DEAD - cluster is inoperable ([Host.health] of all hosts in the cluster is `DEAD`). */
    DEAD = 2,
    /** DEGRADED - cluster is in degraded state ([Host.health] of at least one of the hosts in the cluster is not `ALIVE`). */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function cluster_HealthFromJSON(object: any): Cluster_Health;
export declare function cluster_HealthToJSON(object: Cluster_Health): string;
export declare enum Cluster_Status {
    /** STATUS_UNKNOWN - cluster state is unknown. */
    STATUS_UNKNOWN = 0,
    /** CREATING - cluster is being created. */
    CREATING = 1,
    /** RUNNING - cluster is running normally. */
    RUNNING = 2,
    /** ERROR - cluster encountered a problem and cannot operate. */
    ERROR = 3,
    /** UPDATING - cluster is being updated. */
    UPDATING = 4,
    /** STOPPING - cluster is stopping. */
    STOPPING = 5,
    /** STOPPED - cluster stopped. */
    STOPPED = 6,
    /** STARTING - cluster is starting. */
    STARTING = 7,
    UNRECOGNIZED = -1
}
export declare function cluster_StatusFromJSON(object: any): Cluster_Status;
export declare function cluster_StatusToJSON(object: Cluster_Status): string;
export interface Cluster_LabelsEntry {
    key: string;
    value: string;
}
/** Metadata of monitoring system. */
export interface Monitoring {
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the Elasticsearch cluster. */
    link: string;
}
export interface ClusterConfig {
    /** Elasticsearch version. */
    version: string;
    /** Configuration and resource allocation for Elasticsearch nodes. */
    elasticsearch: Elasticsearch | undefined;
    /** ElasticSearch edition. */
    edition: string;
}
export interface Elasticsearch {
    /** Configuration and resource allocation for Elasticsearch data nodes. */
    dataNode: Elasticsearch_DataNode | undefined;
    /** Configuration and resource allocation for Elasticsearch master nodes. */
    masterNode: Elasticsearch_MasterNode | undefined;
    /** Cluster wide plugins */
    plugins: string[];
}
export interface Elasticsearch_DataNode {
    /** Elasticsearch 7.x data node configuration. */
    elasticsearchConfigSet7: ElasticsearchConfigSet7 | undefined;
    /** Resources allocated to Elasticsearch data nodes. */
    resources: Resources | undefined;
}
export interface Elasticsearch_MasterNode {
    /** Resources allocated to Elasticsearch master nodes. */
    resources: Resources | undefined;
}
/** Computational resources. */
export interface Resources {
    /**
     * ID of the preset for computational resources available to a host (CPU, memory etc.).
     * All available presets are listed in the [documentation](/docs/managed-elasticsearch/concepts/instance-types).
     */
    resourcePresetId: string;
    /** Volume of the storage available to a host, in bytes. */
    diskSize: number;
    /**
     * Type of the storage environment for the host.
     * All available types are listed in the [documentation](/docs/managed-elasticsearch/concepts/storage).
     */
    diskTypeId: string;
}
/** Cluster host metadata. */
export interface Host {
    /** Name of the host. */
    name: string;
    /** ID of the Elasticsearch cluster. */
    clusterId: string;
    /** ID of the availability zone where the host resides. */
    zoneId: string;
    /** Host type. */
    type: Host_Type;
    resources: Resources | undefined;
    /** Aggregated host health data. */
    health: Host_Health;
    /** Services provided by the host. */
    services: Service[];
    /** ID of the subnet the host resides in. */
    subnetId: string;
    /**
     * The flag that defines whether a public IP address is assigned to the host.
     *
     * If the value is `true`, then this host is available on the Internet via it's public IP address.
     */
    assignPublicIp: boolean;
}
export declare enum Host_Type {
    TYPE_UNSPECIFIED = 0,
    /** DATA_NODE - the host is an Elasticsearch data node. */
    DATA_NODE = 1,
    /** MASTER_NODE - the host is an Elasticsearch master node. */
    MASTER_NODE = 2,
    UNRECOGNIZED = -1
}
export declare function host_TypeFromJSON(object: any): Host_Type;
export declare function host_TypeToJSON(object: Host_Type): string;
export declare enum Host_Health {
    /** UNKNOWN - health of the host is unknown. */
    UNKNOWN = 0,
    /** ALIVE - the host is performing all its functions normally. */
    ALIVE = 1,
    /** DEAD - the host is inoperable and cannot perform any of its essential functions. */
    DEAD = 2,
    /** DEGRADED - the host is degraded and can perform only some of its essential functions. */
    DEGRADED = 3,
    UNRECOGNIZED = -1
}
export declare function host_HealthFromJSON(object: any): Host_Health;
export declare function host_HealthToJSON(object: Host_Health): string;
/** Cluster service metadata. */
export interface Service {
    /** Type of the service provided by the host. */
    type: Service_Type;
    /** Service health data. */
    health: Service_Health;
}
export declare enum Service_Type {
    TYPE_UNSPECIFIED = 0,
    /** ELASTICSEARCH - the Elasticsearch service. */
    ELASTICSEARCH = 1,
    UNRECOGNIZED = -1
}
export declare function service_TypeFromJSON(object: any): Service_Type;
export declare function service_TypeToJSON(object: Service_Type): string;
export declare enum Service_Health {
    /** UNKNOWN - health of the service is unknown. */
    UNKNOWN = 0,
    /** ALIVE - the service is working normally. */
    ALIVE = 1,
    /** DEAD - the service is dead or unresponsive. */
    DEAD = 2,
    UNRECOGNIZED = -1
}
export declare function service_HealthFromJSON(object: any): Service_Health;
export declare function service_HealthToJSON(object: Service_Health): string;
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
export declare const Elasticsearch: {
    encode(message: Elasticsearch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Elasticsearch;
    fromJSON(object: any): Elasticsearch;
    toJSON(message: Elasticsearch): unknown;
    fromPartial(object: DeepPartial<Elasticsearch>): Elasticsearch;
};
export declare const Elasticsearch_DataNode: {
    encode(message: Elasticsearch_DataNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Elasticsearch_DataNode;
    fromJSON(object: any): Elasticsearch_DataNode;
    toJSON(message: Elasticsearch_DataNode): unknown;
    fromPartial(object: DeepPartial<Elasticsearch_DataNode>): Elasticsearch_DataNode;
};
export declare const Elasticsearch_MasterNode: {
    encode(message: Elasticsearch_MasterNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Elasticsearch_MasterNode;
    fromJSON(object: any): Elasticsearch_MasterNode;
    toJSON(message: Elasticsearch_MasterNode): unknown;
    fromPartial(object: DeepPartial<Elasticsearch_MasterNode>): Elasticsearch_MasterNode;
};
export declare const Resources: {
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial(object: DeepPartial<Resources>): Resources;
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
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
