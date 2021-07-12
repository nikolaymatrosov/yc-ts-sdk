import { CompressionType } from '../../../../../yandex/cloud/mdb/kafka/v1/common';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
/**
 * An Apache Kafka® cluster resource.
 * For more information, see the [Concepts](/docs/managed-kafka/concepts) section of the documentation.
 */
export interface Cluster {
    /**
     * ID of the Apache Kafka® cluster.
     * This ID is assigned at creation time.
     */
    id: string;
    /** ID of the folder that the Apache Kafka® cluster belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /**
     * Name of the Apache Kafka® cluster.
     * The name must be unique within the folder. 1-63 characters long. Value must match the regular expression `[a-zA-Z0-9_-]*`.
     */
    name: string;
    /** Description of the Apache Kafka® cluster. 0-256 characters long. */
    description: string;
    /**
     * Custom labels for the Apache Kafka® cluster as `key:value` pairs.
     * A maximum of 64 labels per resource is allowed.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Apache Kafka® cluster. */
    environment: Cluster_Environment;
    /** Description of monitoring systems relevant to the Apache Kafka® cluster. */
    monitoring: Monitoring[];
    /** Configuration of the Apache Kafka® cluster. */
    config: ConfigSpec | undefined;
    /** ID of the network that the cluster belongs to. */
    networkId: string;
    /** Aggregated cluster health. */
    health: Cluster_Health;
    /** Current state of the cluster. */
    status: Cluster_Status;
    /** User security groups */
    securityGroupIds: string[];
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
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
    /** Link to the monitoring system charts for the Apache Kafka® cluster. */
    link: string;
}
export interface ConfigSpec {
    /** Version of Apache Kafka® used in the cluster. Possible values: `2.1`, `2.6`. */
    version: string;
    /** Configuration and resource allocation for Kafka brokers. */
    kafka: ConfigSpec_Kafka | undefined;
    /** Configuration and resource allocation for ZooKeeper hosts. */
    zookeeper: ConfigSpec_Zookeeper | undefined;
    /** IDs of availability zones where Kafka brokers reside. */
    zoneId: string[];
    /** The number of Kafka brokers deployed in each availability zone. */
    brokersCount: number | undefined;
    /**
     * The flag that defines whether a public IP address is assigned to the cluster.
     * If the value is `true`, then Apache Kafka® cluster is available on the Internet via it's public IP address.
     */
    assignPublicIp: boolean;
    /** Allows to manage topics via AdminAPI */
    unmanagedTopics: boolean;
}
export interface ConfigSpec_Kafka {
    /** Resources allocated to Kafka brokers. */
    resources: Resources | undefined;
    kafkaConfig21: Kafkaconfig21 | undefined;
    kafkaConfig26: Kafkaconfig26 | undefined;
}
export interface ConfigSpec_Zookeeper {
    /** Resources allocated to ZooKeeper hosts. */
    resources: Resources | undefined;
}
export interface Resources {
    /**
     * ID of the preset for computational resources available to a host (CPU, memory, etc.).
     * All available presets are listed in the [documentation](/docs/managed-kafka/concepts/instance-types).
     */
    resourcePresetId: string;
    /** Volume of the storage available to a host, in bytes. */
    diskSize: number;
    /** Type of the storage environment for the host. */
    diskTypeId: string;
}
/** Kafka version 2.1 broker configuration. */
export interface Kafkaconfig21 {
    /** Cluster topics compression type. */
    compressionType: CompressionType;
    /**
     * The number of messages accumulated on a log partition before messages are flushed to disk.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_1.flush_messages] setting.
     */
    logFlushIntervalMessages: number | undefined;
    /**
     * The maximum time (in milliseconds) that a message in any topic is kept in memory before flushed to disk.
     * If not set, the value of [log_flush_scheduler_interval_ms] is used.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_1.flush_ms] setting.
     */
    logFlushIntervalMs: number | undefined;
    /**
     * The frequency of checks (in milliseconds) for any logs that need to be flushed to disk.
     * This check is done by the log flusher.
     */
    logFlushSchedulerIntervalMs: number | undefined;
    /**
     * Partition size limit; Kafka will discard old log segments to free up space if `delete` [TopicConfig2_1.cleanup_policy] is in effect.
     * This setting is helpful if you need to control the size of a log due to limited disk space.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_1.retention_bytes] setting.
     */
    logRetentionBytes: number | undefined;
    /** The number of hours to keep a log segment file before deleting it. */
    logRetentionHours: number | undefined;
    /**
     * The number of minutes to keep a log segment file before deleting it.
     *
     * If not set, the value of [log_retention_hours] is used.
     */
    logRetentionMinutes: number | undefined;
    /**
     * The number of milliseconds to keep a log segment file before deleting it.
     *
     * If not set, the value of [log_retention_minutes] is used.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_1.retention_ms] setting.
     */
    logRetentionMs: number | undefined;
    /**
     * The maximum size of a single log file.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_1.segment_bytes] setting.
     */
    logSegmentBytes: number | undefined;
    /**
     * Should pre allocate file when create new segment?
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_1.preallocate] setting.
     */
    logPreallocate: boolean | undefined;
    /** The SO_SNDBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
    socketSendBufferBytes: number | undefined;
    /** The SO_RCVBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
    socketReceiveBufferBytes: number | undefined;
    /** Enable auto creation of topic on the server */
    autoCreateTopicsEnable: boolean | undefined;
    /** Default number of partitions per topic on the whole cluster */
    numPartitions: number | undefined;
    /** Default replication factor of the topic on the whole cluster */
    defaultReplicationFactor: number | undefined;
}
/** Kafka version 2.6 broker configuration. */
export interface Kafkaconfig26 {
    /** Cluster topics compression type. */
    compressionType: CompressionType;
    /**
     * The number of messages accumulated on a log partition before messages are flushed to disk.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_6.flush_messages] setting.
     */
    logFlushIntervalMessages: number | undefined;
    /**
     * The maximum time (in milliseconds) that a message in any topic is kept in memory before flushed to disk.
     * If not set, the value of [log_flush_scheduler_interval_ms] is used.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_6.flush_ms] setting.
     */
    logFlushIntervalMs: number | undefined;
    /**
     * The frequency of checks (in milliseconds) for any logs that need to be flushed to disk.
     * This check is done by the log flusher.
     */
    logFlushSchedulerIntervalMs: number | undefined;
    /**
     * Partition size limit; Kafka will discard old log segments to free up space if `delete` [TopicConfig2_6.cleanup_policy] is in effect.
     * This setting is helpful if you need to control the size of a log due to limited disk space.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_6.retention_bytes] setting.
     */
    logRetentionBytes: number | undefined;
    /** The number of hours to keep a log segment file before deleting it. */
    logRetentionHours: number | undefined;
    /**
     * The number of minutes to keep a log segment file before deleting it.
     *
     * If not set, the value of [log_retention_hours] is used.
     */
    logRetentionMinutes: number | undefined;
    /**
     * The number of milliseconds to keep a log segment file before deleting it.
     *
     * If not set, the value of [log_retention_minutes] is used.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_6.retention_ms] setting.
     */
    logRetentionMs: number | undefined;
    /**
     * The maximum size of a single log file.
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_6.segment_bytes] setting.
     */
    logSegmentBytes: number | undefined;
    /**
     * Should pre allocate file when create new segment?
     *
     * This is the global cluster-level setting that can be overridden on a topic level by using the [TopicConfig2_6.preallocate] setting.
     */
    logPreallocate: boolean | undefined;
    /** The SO_SNDBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
    socketSendBufferBytes: number | undefined;
    /** The SO_RCVBUF buffer of the socket server sockets. If the value is -1, the OS default will be used. */
    socketReceiveBufferBytes: number | undefined;
    /** Enable auto creation of topic on the server */
    autoCreateTopicsEnable: boolean | undefined;
    /** Default number of partitions per topic on the whole cluster */
    numPartitions: number | undefined;
    /** Default replication factor of the topic on the whole cluster */
    defaultReplicationFactor: number | undefined;
}
/** Cluster host metadata. */
export interface Host {
    /** Name of the host. */
    name: string;
    /** ID of the Apache Kafka® cluster. */
    clusterId: string;
    /** ID of the availability zone where the host resides. */
    zoneId: string;
    /** Host role. */
    role: Host_Role;
    /** Computational resources allocated to the host. */
    resources: Resources | undefined;
    /** Aggregated host health data. */
    health: Host_Health;
    /** ID of the subnet the host resides in. */
    subnetId: string;
    /**
     * The flag that defines whether a public IP address is assigned to the node.
     *
     * If the value is `true`, then this node is available on the Internet via it's public IP address.
     */
    assignPublicIp: boolean;
}
export declare enum Host_Role {
    ROLE_UNSPECIFIED = 0,
    /** KAFKA - the host is a Kafka broker. */
    KAFKA = 1,
    /** ZOOKEEPER - the host is a ZooKeeper server. */
    ZOOKEEPER = 2,
    UNRECOGNIZED = -1
}
export declare function host_RoleFromJSON(object: any): Host_Role;
export declare function host_RoleToJSON(object: Host_Role): string;
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
export declare const ConfigSpec: {
    encode(message: ConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec;
    fromJSON(object: any): ConfigSpec;
    toJSON(message: ConfigSpec): unknown;
    fromPartial(object: DeepPartial<ConfigSpec>): ConfigSpec;
};
export declare const ConfigSpec_Kafka: {
    encode(message: ConfigSpec_Kafka, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec_Kafka;
    fromJSON(object: any): ConfigSpec_Kafka;
    toJSON(message: ConfigSpec_Kafka): unknown;
    fromPartial(object: DeepPartial<ConfigSpec_Kafka>): ConfigSpec_Kafka;
};
export declare const ConfigSpec_Zookeeper: {
    encode(message: ConfigSpec_Zookeeper, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec_Zookeeper;
    fromJSON(object: any): ConfigSpec_Zookeeper;
    toJSON(message: ConfigSpec_Zookeeper): unknown;
    fromPartial(object: DeepPartial<ConfigSpec_Zookeeper>): ConfigSpec_Zookeeper;
};
export declare const Resources: {
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial(object: DeepPartial<Resources>): Resources;
};
export declare const Kafkaconfig21: {
    encode(message: Kafkaconfig21, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Kafkaconfig21;
    fromJSON(object: any): Kafkaconfig21;
    toJSON(message: Kafkaconfig21): unknown;
    fromPartial(object: DeepPartial<Kafkaconfig21>): Kafkaconfig21;
};
export declare const Kafkaconfig26: {
    encode(message: Kafkaconfig26, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Kafkaconfig26;
    fromJSON(object: any): Kafkaconfig26;
    toJSON(message: Kafkaconfig26): unknown;
    fromPartial(object: DeepPartial<Kafkaconfig26>): Kafkaconfig26;
};
export declare const Host: {
    encode(message: Host, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Host;
    fromJSON(object: any): Host;
    toJSON(message: Host): unknown;
    fromPartial(object: DeepPartial<Host>): Host;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
