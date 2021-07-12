/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import {
    Health,
    healthFromJSON,
    healthToJSON,
} from '../../../../yandex/cloud/dataproc/v1/common';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.dataproc.v1';

/** A Data Proc cluster. For details about the concept, see [documentation](/docs/data-proc/concepts/). */
export interface Cluster {
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
    labels: { [key: string]: string };
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
}

export enum Cluster_Status {
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
    UNRECOGNIZED = -1,
}

export function cluster_StatusFromJSON(object: any): Cluster_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNKNOWN':
            return Cluster_Status.STATUS_UNKNOWN;
        case 1:
        case 'CREATING':
            return Cluster_Status.CREATING;
        case 2:
        case 'RUNNING':
            return Cluster_Status.RUNNING;
        case 3:
        case 'ERROR':
            return Cluster_Status.ERROR;
        case 4:
        case 'STOPPING':
            return Cluster_Status.STOPPING;
        case 5:
        case 'STOPPED':
            return Cluster_Status.STOPPED;
        case 6:
        case 'STARTING':
            return Cluster_Status.STARTING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Status.UNRECOGNIZED;
    }
}

export function cluster_StatusToJSON(object: Cluster_Status): string {
    switch (object) {
        case Cluster_Status.STATUS_UNKNOWN:
            return 'STATUS_UNKNOWN';
        case Cluster_Status.CREATING:
            return 'CREATING';
        case Cluster_Status.RUNNING:
            return 'RUNNING';
        case Cluster_Status.ERROR:
            return 'ERROR';
        case Cluster_Status.STOPPING:
            return 'STOPPING';
        case Cluster_Status.STOPPED:
            return 'STOPPED';
        case Cluster_Status.STARTING:
            return 'STARTING';
        default:
            return 'UNKNOWN';
    }
}

export interface Cluster_LabelsEntry {
    key: string;
    value: string;
}

/** Metadata of a monitoring system for a Data Proc cluster. */
export interface Monitoring {
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
    /** Set of services used in the cluster (if empty, the default set is used). */
    services: HadoopConfig_Service[];
    /**
     * Properties set for all hosts in `*-site.xml` configurations. The key should indicate
     * the service and the property.
     *
     * For example, use the key 'hdfs:dfs.replication' to set the `dfs.replication` property
     * in the file `/etc/hadoop/conf/hdfs-site.xml`.
     */
    properties: { [key: string]: string };
    /** List of public SSH keys to access to cluster hosts. */
    sshPublicKeys: string[];
}

export enum HadoopConfig_Service {
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
    UNRECOGNIZED = -1,
}

export function hadoopConfig_ServiceFromJSON(
    object: any
): HadoopConfig_Service {
    switch (object) {
        case 0:
        case 'SERVICE_UNSPECIFIED':
            return HadoopConfig_Service.SERVICE_UNSPECIFIED;
        case 1:
        case 'HDFS':
            return HadoopConfig_Service.HDFS;
        case 2:
        case 'YARN':
            return HadoopConfig_Service.YARN;
        case 3:
        case 'MAPREDUCE':
            return HadoopConfig_Service.MAPREDUCE;
        case 4:
        case 'HIVE':
            return HadoopConfig_Service.HIVE;
        case 5:
        case 'TEZ':
            return HadoopConfig_Service.TEZ;
        case 6:
        case 'ZOOKEEPER':
            return HadoopConfig_Service.ZOOKEEPER;
        case 7:
        case 'HBASE':
            return HadoopConfig_Service.HBASE;
        case 8:
        case 'SQOOP':
            return HadoopConfig_Service.SQOOP;
        case 9:
        case 'FLUME':
            return HadoopConfig_Service.FLUME;
        case 10:
        case 'SPARK':
            return HadoopConfig_Service.SPARK;
        case 11:
        case 'ZEPPELIN':
            return HadoopConfig_Service.ZEPPELIN;
        case 12:
        case 'OOZIE':
            return HadoopConfig_Service.OOZIE;
        case 13:
        case 'LIVY':
            return HadoopConfig_Service.LIVY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return HadoopConfig_Service.UNRECOGNIZED;
    }
}

export function hadoopConfig_ServiceToJSON(
    object: HadoopConfig_Service
): string {
    switch (object) {
        case HadoopConfig_Service.SERVICE_UNSPECIFIED:
            return 'SERVICE_UNSPECIFIED';
        case HadoopConfig_Service.HDFS:
            return 'HDFS';
        case HadoopConfig_Service.YARN:
            return 'YARN';
        case HadoopConfig_Service.MAPREDUCE:
            return 'MAPREDUCE';
        case HadoopConfig_Service.HIVE:
            return 'HIVE';
        case HadoopConfig_Service.TEZ:
            return 'TEZ';
        case HadoopConfig_Service.ZOOKEEPER:
            return 'ZOOKEEPER';
        case HadoopConfig_Service.HBASE:
            return 'HBASE';
        case HadoopConfig_Service.SQOOP:
            return 'SQOOP';
        case HadoopConfig_Service.FLUME:
            return 'FLUME';
        case HadoopConfig_Service.SPARK:
            return 'SPARK';
        case HadoopConfig_Service.ZEPPELIN:
            return 'ZEPPELIN';
        case HadoopConfig_Service.OOZIE:
            return 'OOZIE';
        case HadoopConfig_Service.LIVY:
            return 'LIVY';
        default:
            return 'UNKNOWN';
    }
}

export interface HadoopConfig_PropertiesEntry {
    key: string;
    value: string;
}

export interface ClusterConfig {
    /**
     * Image version for cluster provisioning.
     * All available versions are listed in the [documentation](/docs/managed-hadoop/concepts/image-versions).
     */
    versionId: string;
    /** Data Proc specific configuration options. */
    hadoop: HadoopConfig | undefined;
}

const baseCluster: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    health: 0,
    status: 0,
    zoneId: '',
    serviceAccountId: '',
    bucket: '',
    uiProxy: false,
    securityGroupIds: '',
    hostGroupIds: '',
};

export const Cluster = {
    encode(
        message: Cluster,
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
            Cluster_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork()
            ).ldelim();
        });
        for (const v of message.monitoring) {
            Monitoring.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.config !== undefined) {
            ClusterConfig.encode(
                message.config,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.health !== 0) {
            writer.uint32(72).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        if (message.zoneId !== '') {
            writer.uint32(90).string(message.zoneId);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(98).string(message.serviceAccountId);
        }
        if (message.bucket !== '') {
            writer.uint32(106).string(message.bucket);
        }
        if (message.uiProxy === true) {
            writer.uint32(112).bool(message.uiProxy);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(122).string(v!);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(130).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Cluster {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        message.monitoring = [];
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
                    const entry6 = Cluster_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.monitoring.push(
                        Monitoring.decode(reader, reader.uint32())
                    );
                    break;
                case 8:
                    message.config = ClusterConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.health = reader.int32() as any;
                    break;
                case 10:
                    message.status = reader.int32() as any;
                    break;
                case 11:
                    message.zoneId = reader.string();
                    break;
                case 12:
                    message.serviceAccountId = reader.string();
                    break;
                case 13:
                    message.bucket = reader.string();
                    break;
                case 14:
                    message.uiProxy = reader.bool();
                    break;
                case 15:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 16:
                    message.hostGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Cluster {
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        message.monitoring = [];
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
        if (object.monitoring !== undefined && object.monitoring !== null) {
            for (const e of object.monitoring) {
                message.monitoring.push(Monitoring.fromJSON(e));
            }
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = ClusterConfig.fromJSON(object.config);
        } else {
            message.config = undefined;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = healthFromJSON(object.health);
        } else {
            message.health = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = cluster_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = String(object.bucket);
        } else {
            message.bucket = '';
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = Boolean(object.uiProxy);
        } else {
            message.uiProxy = false;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        if (object.hostGroupIds !== undefined && object.hostGroupIds !== null) {
            for (const e of object.hostGroupIds) {
                message.hostGroupIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: Cluster): unknown {
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
        if (message.monitoring) {
            obj.monitoring = message.monitoring.map((e) =>
                e ? Monitoring.toJSON(e) : undefined
            );
        } else {
            obj.monitoring = [];
        }
        message.config !== undefined &&
            (obj.config = message.config
                ? ClusterConfig.toJSON(message.config)
                : undefined);
        message.health !== undefined &&
            (obj.health = healthToJSON(message.health));
        message.status !== undefined &&
            (obj.status = cluster_StatusToJSON(message.status));
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.uiProxy !== undefined && (obj.uiProxy = message.uiProxy);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        if (message.hostGroupIds) {
            obj.hostGroupIds = message.hostGroupIds.map((e) => e);
        } else {
            obj.hostGroupIds = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Cluster>): Cluster {
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        message.monitoring = [];
        message.securityGroupIds = [];
        message.hostGroupIds = [];
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
        if (object.monitoring !== undefined && object.monitoring !== null) {
            for (const e of object.monitoring) {
                message.monitoring.push(Monitoring.fromPartial(e));
            }
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = ClusterConfig.fromPartial(object.config);
        } else {
            message.config = undefined;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = object.health;
        } else {
            message.health = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = object.bucket;
        } else {
            message.bucket = '';
        }
        if (object.uiProxy !== undefined && object.uiProxy !== null) {
            message.uiProxy = object.uiProxy;
        } else {
            message.uiProxy = false;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        if (object.hostGroupIds !== undefined && object.hostGroupIds !== null) {
            for (const e of object.hostGroupIds) {
                message.hostGroupIds.push(e);
            }
        }
        return message;
    },
};

const baseCluster_LabelsEntry: object = { key: '', value: '' };

export const Cluster_LabelsEntry = {
    encode(
        message: Cluster_LabelsEntry,
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
    ): Cluster_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
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

    fromJSON(object: any): Cluster_LabelsEntry {
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
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

    toJSON(message: Cluster_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<Cluster_LabelsEntry>): Cluster_LabelsEntry {
        const message = { ...baseCluster_LabelsEntry } as Cluster_LabelsEntry;
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

const baseMonitoring: object = { name: '', description: '', link: '' };

export const Monitoring = {
    encode(
        message: Monitoring,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.link !== '') {
            writer.uint32(26).string(message.link);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMonitoring } as Monitoring;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.link = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Monitoring {
        const message = { ...baseMonitoring } as Monitoring;
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
        if (object.link !== undefined && object.link !== null) {
            message.link = String(object.link);
        } else {
            message.link = '';
        }
        return message;
    },

    toJSON(message: Monitoring): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.link !== undefined && (obj.link = message.link);
        return obj;
    },

    fromPartial(object: DeepPartial<Monitoring>): Monitoring {
        const message = { ...baseMonitoring } as Monitoring;
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
        if (object.link !== undefined && object.link !== null) {
            message.link = object.link;
        } else {
            message.link = '';
        }
        return message;
    },
};

const baseHadoopConfig: object = { services: 0, sshPublicKeys: '' };

export const HadoopConfig = {
    encode(
        message: HadoopConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        writer.uint32(10).fork();
        for (const v of message.services) {
            writer.int32(v);
        }
        writer.ldelim();
        Object.entries(message.properties).forEach(([key, value]) => {
            HadoopConfig_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork()
            ).ldelim();
        });
        for (const v of message.sshPublicKeys) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HadoopConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHadoopConfig } as HadoopConfig;
        message.services = [];
        message.properties = {};
        message.sshPublicKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.services.push(reader.int32() as any);
                        }
                    } else {
                        message.services.push(reader.int32() as any);
                    }
                    break;
                case 2:
                    const entry2 = HadoopConfig_PropertiesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry2.value !== undefined) {
                        message.properties[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.sshPublicKeys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HadoopConfig {
        const message = { ...baseHadoopConfig } as HadoopConfig;
        message.services = [];
        message.properties = {};
        message.sshPublicKeys = [];
        if (object.services !== undefined && object.services !== null) {
            for (const e of object.services) {
                message.services.push(hadoopConfig_ServiceFromJSON(e));
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (
            object.sshPublicKeys !== undefined &&
            object.sshPublicKeys !== null
        ) {
            for (const e of object.sshPublicKeys) {
                message.sshPublicKeys.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: HadoopConfig): unknown {
        const obj: any = {};
        if (message.services) {
            obj.services = message.services.map((e) =>
                hadoopConfig_ServiceToJSON(e)
            );
        } else {
            obj.services = [];
        }
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        if (message.sshPublicKeys) {
            obj.sshPublicKeys = message.sshPublicKeys.map((e) => e);
        } else {
            obj.sshPublicKeys = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<HadoopConfig>): HadoopConfig {
        const message = { ...baseHadoopConfig } as HadoopConfig;
        message.services = [];
        message.properties = {};
        message.sshPublicKeys = [];
        if (object.services !== undefined && object.services !== null) {
            for (const e of object.services) {
                message.services.push(e);
            }
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (
            object.sshPublicKeys !== undefined &&
            object.sshPublicKeys !== null
        ) {
            for (const e of object.sshPublicKeys) {
                message.sshPublicKeys.push(e);
            }
        }
        return message;
    },
};

const baseHadoopConfig_PropertiesEntry: object = { key: '', value: '' };

export const HadoopConfig_PropertiesEntry = {
    encode(
        message: HadoopConfig_PropertiesEntry,
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
    ): HadoopConfig_PropertiesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHadoopConfig_PropertiesEntry,
        } as HadoopConfig_PropertiesEntry;
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

    fromJSON(object: any): HadoopConfig_PropertiesEntry {
        const message = {
            ...baseHadoopConfig_PropertiesEntry,
        } as HadoopConfig_PropertiesEntry;
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

    toJSON(message: HadoopConfig_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<HadoopConfig_PropertiesEntry>
    ): HadoopConfig_PropertiesEntry {
        const message = {
            ...baseHadoopConfig_PropertiesEntry,
        } as HadoopConfig_PropertiesEntry;
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

const baseClusterConfig: object = { versionId: '' };

export const ClusterConfig = {
    encode(
        message: ClusterConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.versionId !== '') {
            writer.uint32(10).string(message.versionId);
        }
        if (message.hadoop !== undefined) {
            HadoopConfig.encode(
                message.hadoop,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClusterConfig } as ClusterConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versionId = reader.string();
                    break;
                case 2:
                    message.hadoop = HadoopConfig.decode(
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

    fromJSON(object: any): ClusterConfig {
        const message = { ...baseClusterConfig } as ClusterConfig;
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = HadoopConfig.fromJSON(object.hadoop);
        } else {
            message.hadoop = undefined;
        }
        return message;
    },

    toJSON(message: ClusterConfig): unknown {
        const obj: any = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.hadoop !== undefined &&
            (obj.hadoop = message.hadoop
                ? HadoopConfig.toJSON(message.hadoop)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig {
        const message = { ...baseClusterConfig } as ClusterConfig;
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (object.hadoop !== undefined && object.hadoop !== null) {
            message.hadoop = HadoopConfig.fromPartial(object.hadoop);
        } else {
            message.hadoop = undefined;
        }
        return message;
    },
};

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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
