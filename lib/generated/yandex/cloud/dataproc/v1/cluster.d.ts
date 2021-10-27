import { Health } from '../../../../yandex/cloud/dataproc/v1/common';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
/** A Data Proc cluster. For details about the concept, see [documentation](/docs/data-proc/concepts/). */
export interface Cluster {
    $type: 'yandex.cloud.dataproc.v1.Cluster';
    /** ID of the cluster. Generated at creation time. */
    id: string;
    /** ID of the folder that the cluster belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Name of the cluster. The name is unique within the folder. */
    name: string;
    /** Description of the cluster. */
    description: string;
    /** Cluster labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Monitoring systems relevant to the cluster. */
    monitoring: Monitoring[];
    /** Configuration of the cluster. */
    config: ClusterConfig | undefined;
    /** Aggregated cluster health. */
    health: Health;
    /** Cluster status. */
    status: Cluster_Status;
    /** ID of the availability zone where the cluster resides. */
    zoneId: string;
    /** ID of service account for the Data Proc manager agent. */
    serviceAccountId: string;
    /** Object Storage bucket to be used for Data Proc jobs that are run in the cluster. */
    bucket: string;
    /** Whether UI Proxy feature is enabled. */
    uiProxy: boolean;
    /** User security groups. */
    securityGroupIds: string[];
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** ID of the cloud logging log group to write logs. If not set, logs will not be sent to logging service */
    logGroupId: string;
}
export declare enum Cluster_Status {
    /** STATUS_UNKNOWN - Cluster state is unknown. */
    STATUS_UNKNOWN = 0,
    /** CREATING - Cluster is being created. */
    CREATING = 1,
    /** RUNNING - Cluster is running normally. */
    RUNNING = 2,
    /** ERROR - Cluster encountered a problem and cannot operate. */
    ERROR = 3,
    /** STOPPING - Cluster is stopping. */
    STOPPING = 4,
    /** STOPPED - Cluster stopped. */
    STOPPED = 5,
    /** STARTING - Cluster is starting. */
    STARTING = 6,
    UNRECOGNIZED = -1
}
export declare function cluster_StatusFromJSON(object: any): Cluster_Status;
export declare function cluster_StatusToJSON(object: Cluster_Status): string;
export interface Cluster_LabelsEntry {
    $type: 'yandex.cloud.dataproc.v1.Cluster.LabelsEntry';
    key: string;
    value: string;
}
/** Metadata of a monitoring system for a Data Proc cluster. */
export interface Monitoring {
    $type: 'yandex.cloud.dataproc.v1.Monitoring';
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system. */
    link: string;
}
/**
 * Hadoop configuration that describes services installed in a cluster,
 * their properties and settings.
 */
export interface HadoopConfig {
    $type: 'yandex.cloud.dataproc.v1.HadoopConfig';
    /** Set of services used in the cluster (if empty, the default set is used). */
    services: HadoopConfig_Service[];
    /**
     * Properties set for all hosts in `*-site.xml` configurations. The key should indicate
     * the service and the property.
     *
     * For example, use the key 'hdfs:dfs.replication' to set the `dfs.replication` property
     * in the file `/etc/hadoop/conf/hdfs-site.xml`.
     */
    properties: {
        [key: string]: string;
    };
    /** List of public SSH keys to access to cluster hosts. */
    sshPublicKeys: string[];
}
export declare enum HadoopConfig_Service {
    SERVICE_UNSPECIFIED = 0,
    HDFS = 1,
    YARN = 2,
    MAPREDUCE = 3,
    HIVE = 4,
    TEZ = 5,
    ZOOKEEPER = 6,
    HBASE = 7,
    SQOOP = 8,
    FLUME = 9,
    SPARK = 10,
    ZEPPELIN = 11,
    OOZIE = 12,
    LIVY = 13,
    UNRECOGNIZED = -1
}
export declare function hadoopConfig_ServiceFromJSON(object: any): HadoopConfig_Service;
export declare function hadoopConfig_ServiceToJSON(object: HadoopConfig_Service): string;
export interface HadoopConfig_PropertiesEntry {
    $type: 'yandex.cloud.dataproc.v1.HadoopConfig.PropertiesEntry';
    key: string;
    value: string;
}
export interface ClusterConfig {
    $type: 'yandex.cloud.dataproc.v1.ClusterConfig';
    /**
     * Image version for cluster provisioning.
     * All available versions are listed in the [documentation](/docs/managed-hadoop/concepts/image-versions).
     */
    versionId: string;
    /** Data Proc specific configuration options. */
    hadoop: HadoopConfig | undefined;
}
export declare const Cluster: {
    $type: "yandex.cloud.dataproc.v1.Cluster";
    encode(message: Cluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster;
    fromJSON(object: any): Cluster;
    toJSON(message: Cluster): unknown;
    fromPartial(object: DeepPartial<Cluster>): Cluster;
};
export declare const Cluster_LabelsEntry: {
    $type: "yandex.cloud.dataproc.v1.Cluster.LabelsEntry";
    encode(message: Cluster_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cluster_LabelsEntry;
    fromJSON(object: any): Cluster_LabelsEntry;
    toJSON(message: Cluster_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Cluster_LabelsEntry>): Cluster_LabelsEntry;
};
export declare const Monitoring: {
    $type: "yandex.cloud.dataproc.v1.Monitoring";
    encode(message: Monitoring, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Monitoring;
    fromJSON(object: any): Monitoring;
    toJSON(message: Monitoring): unknown;
    fromPartial(object: DeepPartial<Monitoring>): Monitoring;
};
export declare const HadoopConfig: {
    $type: "yandex.cloud.dataproc.v1.HadoopConfig";
    encode(message: HadoopConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HadoopConfig;
    fromJSON(object: any): HadoopConfig;
    toJSON(message: HadoopConfig): unknown;
    fromPartial(object: DeepPartial<HadoopConfig>): HadoopConfig;
};
export declare const HadoopConfig_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.v1.HadoopConfig.PropertiesEntry";
    encode(message: HadoopConfig_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HadoopConfig_PropertiesEntry;
    fromJSON(object: any): HadoopConfig_PropertiesEntry;
    toJSON(message: HadoopConfig_PropertiesEntry): unknown;
    fromPartial(object: DeepPartial<HadoopConfig_PropertiesEntry>): HadoopConfig_PropertiesEntry;
};
export declare const ClusterConfig: {
    $type: "yandex.cloud.dataproc.v1.ClusterConfig";
    encode(message: ClusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConfig;
    fromJSON(object: any): ClusterConfig;
    toJSON(message: ClusterConfig): unknown;
    fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
