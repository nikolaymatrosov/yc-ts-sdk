/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { ElasticsearchConfigSet7 } from '../../../../../yandex/cloud/mdb/elasticsearch/v1/config/elasticsearch';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.elasticsearch.v1';

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
    labels: { [key: string]: string };
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

export enum Cluster_Environment {
    ENVIRONMENT_UNSPECIFIED = 0,
    /** PRODUCTION - stable environment with a conservative update policy when only hotfixes are applied during regular maintenance. */
    PRODUCTION = 1,
    /** PRESTABLE - environment with a more aggressive update policy when new versions are rolled out irrespective of backward compatibility. */
    PRESTABLE = 2,
    UNRECOGNIZED = -1,
}

export function cluster_EnvironmentFromJSON(object: any): Cluster_Environment {
    switch (object) {
        case 0:
        case 'ENVIRONMENT_UNSPECIFIED':
            return Cluster_Environment.ENVIRONMENT_UNSPECIFIED;
        case 1:
        case 'PRODUCTION':
            return Cluster_Environment.PRODUCTION;
        case 2:
        case 'PRESTABLE':
            return Cluster_Environment.PRESTABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Environment.UNRECOGNIZED;
    }
}

export function cluster_EnvironmentToJSON(object: Cluster_Environment): string {
    switch (object) {
        case Cluster_Environment.ENVIRONMENT_UNSPECIFIED:
            return 'ENVIRONMENT_UNSPECIFIED';
        case Cluster_Environment.PRODUCTION:
            return 'PRODUCTION';
        case Cluster_Environment.PRESTABLE:
            return 'PRESTABLE';
        default:
            return 'UNKNOWN';
    }
}

export enum Cluster_Health {
    /** HEALTH_UNKNOWN - state of the cluster is unknown ([Host.health] of all hosts in the cluster is `UNKNOWN`). */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - cluster is alive and well ([Host.health] of all hosts in the cluster is `ALIVE`). */
    ALIVE = 1,
    /** DEAD - cluster is inoperable ([Host.health] of all hosts in the cluster is `DEAD`). */
    DEAD = 2,
    /** DEGRADED - cluster is in degraded state ([Host.health] of at least one of the hosts in the cluster is not `ALIVE`). */
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function cluster_HealthFromJSON(object: any): Cluster_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return Cluster_Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return Cluster_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Cluster_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return Cluster_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Cluster_Health.UNRECOGNIZED;
    }
}

export function cluster_HealthToJSON(object: Cluster_Health): string {
    switch (object) {
        case Cluster_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case Cluster_Health.ALIVE:
            return 'ALIVE';
        case Cluster_Health.DEAD:
            return 'DEAD';
        case Cluster_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

export enum Cluster_Status {
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
        case 'UPDATING':
            return Cluster_Status.UPDATING;
        case 5:
        case 'STOPPING':
            return Cluster_Status.STOPPING;
        case 6:
        case 'STOPPED':
            return Cluster_Status.STOPPED;
        case 7:
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
        case Cluster_Status.UPDATING:
            return 'UPDATING';
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

export enum Host_Type {
    TYPE_UNSPECIFIED = 0,
    /** DATA_NODE - the host is an Elasticsearch data node. */
    DATA_NODE = 1,
    /** MASTER_NODE - the host is an Elasticsearch master node. */
    MASTER_NODE = 2,
    UNRECOGNIZED = -1,
}

export function host_TypeFromJSON(object: any): Host_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Host_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'DATA_NODE':
            return Host_Type.DATA_NODE;
        case 2:
        case 'MASTER_NODE':
            return Host_Type.MASTER_NODE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_Type.UNRECOGNIZED;
    }
}

export function host_TypeToJSON(object: Host_Type): string {
    switch (object) {
        case Host_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Host_Type.DATA_NODE:
            return 'DATA_NODE';
        case Host_Type.MASTER_NODE:
            return 'MASTER_NODE';
        default:
            return 'UNKNOWN';
    }
}

export enum Host_Health {
    /** UNKNOWN - health of the host is unknown. */
    UNKNOWN = 0,
    /** ALIVE - the host is performing all its functions normally. */
    ALIVE = 1,
    /** DEAD - the host is inoperable and cannot perform any of its essential functions. */
    DEAD = 2,
    /** DEGRADED - the host is degraded and can perform only some of its essential functions. */
    DEGRADED = 3,
    UNRECOGNIZED = -1,
}

export function host_HealthFromJSON(object: any): Host_Health {
    switch (object) {
        case 0:
        case 'UNKNOWN':
            return Host_Health.UNKNOWN;
        case 1:
        case 'ALIVE':
            return Host_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Host_Health.DEAD;
        case 3:
        case 'DEGRADED':
            return Host_Health.DEGRADED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Host_Health.UNRECOGNIZED;
    }
}

export function host_HealthToJSON(object: Host_Health): string {
    switch (object) {
        case Host_Health.UNKNOWN:
            return 'UNKNOWN';
        case Host_Health.ALIVE:
            return 'ALIVE';
        case Host_Health.DEAD:
            return 'DEAD';
        case Host_Health.DEGRADED:
            return 'DEGRADED';
        default:
            return 'UNKNOWN';
    }
}

/** Cluster service metadata. */
export interface Service {
    /** Type of the service provided by the host. */
    type: Service_Type;
    /** Service health data. */
    health: Service_Health;
}

export enum Service_Type {
    TYPE_UNSPECIFIED = 0,
    /** ELASTICSEARCH - the Elasticsearch service. */
    ELASTICSEARCH = 1,
    UNRECOGNIZED = -1,
}

export function service_TypeFromJSON(object: any): Service_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Service_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'ELASTICSEARCH':
            return Service_Type.ELASTICSEARCH;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Service_Type.UNRECOGNIZED;
    }
}

export function service_TypeToJSON(object: Service_Type): string {
    switch (object) {
        case Service_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Service_Type.ELASTICSEARCH:
            return 'ELASTICSEARCH';
        default:
            return 'UNKNOWN';
    }
}

export enum Service_Health {
    /** UNKNOWN - health of the service is unknown. */
    UNKNOWN = 0,
    /** ALIVE - the service is working normally. */
    ALIVE = 1,
    /** DEAD - the service is dead or unresponsive. */
    DEAD = 2,
    UNRECOGNIZED = -1,
}

export function service_HealthFromJSON(object: any): Service_Health {
    switch (object) {
        case 0:
        case 'UNKNOWN':
            return Service_Health.UNKNOWN;
        case 1:
        case 'ALIVE':
            return Service_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Service_Health.DEAD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Service_Health.UNRECOGNIZED;
    }
}

export function service_HealthToJSON(object: Service_Health): string {
    switch (object) {
        case Service_Health.UNKNOWN:
            return 'UNKNOWN';
        case Service_Health.ALIVE:
            return 'ALIVE';
        case Service_Health.DEAD:
            return 'DEAD';
        default:
            return 'UNKNOWN';
    }
}

const baseCluster: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    environment: 0,
    networkId: '',
    health: 0,
    status: 0,
    securityGroupIds: '',
    serviceAccountId: '',
    deletionProtection: false,
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
        if (message.environment !== 0) {
            writer.uint32(56).int32(message.environment);
        }
        for (const v of message.monitoring) {
            Monitoring.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.config !== undefined) {
            ClusterConfig.encode(
                message.config,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.networkId !== '') {
            writer.uint32(82).string(message.networkId);
        }
        if (message.health !== 0) {
            writer.uint32(88).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(96).int32(message.status);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(106).string(v!);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(114).string(message.serviceAccountId);
        }
        if (message.deletionProtection === true) {
            writer.uint32(120).bool(message.deletionProtection);
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
                    message.environment = reader.int32() as any;
                    break;
                case 8:
                    message.monitoring.push(
                        Monitoring.decode(reader, reader.uint32())
                    );
                    break;
                case 9:
                    message.config = ClusterConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 10:
                    message.networkId = reader.string();
                    break;
                case 11:
                    message.health = reader.int32() as any;
                    break;
                case 12:
                    message.status = reader.int32() as any;
                    break;
                case 13:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 14:
                    message.serviceAccountId = reader.string();
                    break;
                case 15:
                    message.deletionProtection = reader.bool();
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
        if (object.environment !== undefined && object.environment !== null) {
            message.environment = cluster_EnvironmentFromJSON(
                object.environment
            );
        } else {
            message.environment = 0;
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = cluster_HealthFromJSON(object.health);
        } else {
            message.health = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = cluster_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = Boolean(object.deletionProtection);
        } else {
            message.deletionProtection = false;
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
        message.environment !== undefined &&
            (obj.environment = cluster_EnvironmentToJSON(message.environment));
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.health !== undefined &&
            (obj.health = cluster_HealthToJSON(message.health));
        message.status !== undefined &&
            (obj.status = cluster_StatusToJSON(message.status));
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },

    fromPartial(object: DeepPartial<Cluster>): Cluster {
        const message = { ...baseCluster } as Cluster;
        message.labels = {};
        message.monitoring = [];
        message.securityGroupIds = [];
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
        if (object.environment !== undefined && object.environment !== null) {
            message.environment = object.environment;
        } else {
            message.environment = 0;
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
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
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = object.deletionProtection;
        } else {
            message.deletionProtection = false;
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

const baseClusterConfig: object = { version: '', edition: '' };

export const ClusterConfig = {
    encode(
        message: ClusterConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.elasticsearch !== undefined) {
            Elasticsearch.encode(
                message.elasticsearch,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.edition !== '') {
            writer.uint32(26).string(message.edition);
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
                    message.version = reader.string();
                    break;
                case 2:
                    message.elasticsearch = Elasticsearch.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.edition = reader.string();
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
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        } else {
            message.version = '';
        }
        if (
            object.elasticsearch !== undefined &&
            object.elasticsearch !== null
        ) {
            message.elasticsearch = Elasticsearch.fromJSON(
                object.elasticsearch
            );
        } else {
            message.elasticsearch = undefined;
        }
        if (object.edition !== undefined && object.edition !== null) {
            message.edition = String(object.edition);
        } else {
            message.edition = '';
        }
        return message;
    },

    toJSON(message: ClusterConfig): unknown {
        const obj: any = {};
        message.version !== undefined && (obj.version = message.version);
        message.elasticsearch !== undefined &&
            (obj.elasticsearch = message.elasticsearch
                ? Elasticsearch.toJSON(message.elasticsearch)
                : undefined);
        message.edition !== undefined && (obj.edition = message.edition);
        return obj;
    },

    fromPartial(object: DeepPartial<ClusterConfig>): ClusterConfig {
        const message = { ...baseClusterConfig } as ClusterConfig;
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        } else {
            message.version = '';
        }
        if (
            object.elasticsearch !== undefined &&
            object.elasticsearch !== null
        ) {
            message.elasticsearch = Elasticsearch.fromPartial(
                object.elasticsearch
            );
        } else {
            message.elasticsearch = undefined;
        }
        if (object.edition !== undefined && object.edition !== null) {
            message.edition = object.edition;
        } else {
            message.edition = '';
        }
        return message;
    },
};

const baseElasticsearch: object = { plugins: '' };

export const Elasticsearch = {
    encode(
        message: Elasticsearch,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dataNode !== undefined) {
            Elasticsearch_DataNode.encode(
                message.dataNode,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.masterNode !== undefined) {
            Elasticsearch_MasterNode.encode(
                message.masterNode,
                writer.uint32(18).fork()
            ).ldelim();
        }
        for (const v of message.plugins) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Elasticsearch {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseElasticsearch } as Elasticsearch;
        message.plugins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataNode = Elasticsearch_DataNode.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.masterNode = Elasticsearch_MasterNode.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.plugins.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Elasticsearch {
        const message = { ...baseElasticsearch } as Elasticsearch;
        message.plugins = [];
        if (object.dataNode !== undefined && object.dataNode !== null) {
            message.dataNode = Elasticsearch_DataNode.fromJSON(object.dataNode);
        } else {
            message.dataNode = undefined;
        }
        if (object.masterNode !== undefined && object.masterNode !== null) {
            message.masterNode = Elasticsearch_MasterNode.fromJSON(
                object.masterNode
            );
        } else {
            message.masterNode = undefined;
        }
        if (object.plugins !== undefined && object.plugins !== null) {
            for (const e of object.plugins) {
                message.plugins.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: Elasticsearch): unknown {
        const obj: any = {};
        message.dataNode !== undefined &&
            (obj.dataNode = message.dataNode
                ? Elasticsearch_DataNode.toJSON(message.dataNode)
                : undefined);
        message.masterNode !== undefined &&
            (obj.masterNode = message.masterNode
                ? Elasticsearch_MasterNode.toJSON(message.masterNode)
                : undefined);
        if (message.plugins) {
            obj.plugins = message.plugins.map((e) => e);
        } else {
            obj.plugins = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Elasticsearch>): Elasticsearch {
        const message = { ...baseElasticsearch } as Elasticsearch;
        message.plugins = [];
        if (object.dataNode !== undefined && object.dataNode !== null) {
            message.dataNode = Elasticsearch_DataNode.fromPartial(
                object.dataNode
            );
        } else {
            message.dataNode = undefined;
        }
        if (object.masterNode !== undefined && object.masterNode !== null) {
            message.masterNode = Elasticsearch_MasterNode.fromPartial(
                object.masterNode
            );
        } else {
            message.masterNode = undefined;
        }
        if (object.plugins !== undefined && object.plugins !== null) {
            for (const e of object.plugins) {
                message.plugins.push(e);
            }
        }
        return message;
    },
};

const baseElasticsearch_DataNode: object = {};

export const Elasticsearch_DataNode = {
    encode(
        message: Elasticsearch_DataNode,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.elasticsearchConfigSet7 !== undefined) {
            ElasticsearchConfigSet7.encode(
                message.elasticsearchConfigSet7,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Elasticsearch_DataNode {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseElasticsearch_DataNode,
        } as Elasticsearch_DataNode;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.elasticsearchConfigSet7 =
                        ElasticsearchConfigSet7.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.resources = Resources.decode(
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

    fromJSON(object: any): Elasticsearch_DataNode {
        const message = {
            ...baseElasticsearch_DataNode,
        } as Elasticsearch_DataNode;
        if (
            object.elasticsearchConfigSet7 !== undefined &&
            object.elasticsearchConfigSet7 !== null
        ) {
            message.elasticsearchConfigSet7 = ElasticsearchConfigSet7.fromJSON(
                object.elasticsearchConfigSet7
            );
        } else {
            message.elasticsearchConfigSet7 = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        return message;
    },

    toJSON(message: Elasticsearch_DataNode): unknown {
        const obj: any = {};
        message.elasticsearchConfigSet7 !== undefined &&
            (obj.elasticsearchConfigSet7 = message.elasticsearchConfigSet7
                ? ElasticsearchConfigSet7.toJSON(
                      message.elasticsearchConfigSet7
                  )
                : undefined);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Elasticsearch_DataNode>
    ): Elasticsearch_DataNode {
        const message = {
            ...baseElasticsearch_DataNode,
        } as Elasticsearch_DataNode;
        if (
            object.elasticsearchConfigSet7 !== undefined &&
            object.elasticsearchConfigSet7 !== null
        ) {
            message.elasticsearchConfigSet7 =
                ElasticsearchConfigSet7.fromPartial(
                    object.elasticsearchConfigSet7
                );
        } else {
            message.elasticsearchConfigSet7 = undefined;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        return message;
    },
};

const baseElasticsearch_MasterNode: object = {};

export const Elasticsearch_MasterNode = {
    encode(
        message: Elasticsearch_MasterNode,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Elasticsearch_MasterNode {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseElasticsearch_MasterNode,
        } as Elasticsearch_MasterNode;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = Resources.decode(
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

    fromJSON(object: any): Elasticsearch_MasterNode {
        const message = {
            ...baseElasticsearch_MasterNode,
        } as Elasticsearch_MasterNode;
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        return message;
    },

    toJSON(message: Elasticsearch_MasterNode): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Elasticsearch_MasterNode>
    ): Elasticsearch_MasterNode {
        const message = {
            ...baseElasticsearch_MasterNode,
        } as Elasticsearch_MasterNode;
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        return message;
    },
};

const baseResources: object = {
    resourcePresetId: '',
    diskSize: 0,
    diskTypeId: '',
};

export const Resources = {
    encode(
        message: Resources,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(16).int64(message.diskSize);
        }
        if (message.diskTypeId !== '') {
            writer.uint32(26).string(message.diskTypeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResources } as Resources;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.diskSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.diskTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Resources {
        const message = { ...baseResources } as Resources;
        if (
            object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null
        ) {
            message.resourcePresetId = String(object.resourcePresetId);
        } else {
            message.resourcePresetId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = Number(object.diskSize);
        } else {
            message.diskSize = 0;
        }
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = String(object.diskTypeId);
        } else {
            message.diskTypeId = '';
        }
        return message;
    },

    toJSON(message: Resources): unknown {
        const obj: any = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.diskSize !== undefined && (obj.diskSize = message.diskSize);
        message.diskTypeId !== undefined &&
            (obj.diskTypeId = message.diskTypeId);
        return obj;
    },

    fromPartial(object: DeepPartial<Resources>): Resources {
        const message = { ...baseResources } as Resources;
        if (
            object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null
        ) {
            message.resourcePresetId = object.resourcePresetId;
        } else {
            message.resourcePresetId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = object.diskSize;
        } else {
            message.diskSize = 0;
        }
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = object.diskTypeId;
        } else {
            message.diskTypeId = '';
        }
        return message;
    },
};

const baseHost: object = {
    name: '',
    clusterId: '',
    zoneId: '',
    type: 0,
    health: 0,
    subnetId: '',
    assignPublicIp: false,
};

export const Host = {
    encode(
        message: Host,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.zoneId !== '') {
            writer.uint32(26).string(message.zoneId);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.health !== 0) {
            writer.uint32(48).int32(message.health);
        }
        for (const v of message.services) {
            Service.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.subnetId !== '') {
            writer.uint32(66).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(72).bool(message.assignPublicIp);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Host {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHost } as Host;
        message.services = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.zoneId = reader.string();
                    break;
                case 4:
                    message.type = reader.int32() as any;
                    break;
                case 5:
                    message.resources = Resources.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.health = reader.int32() as any;
                    break;
                case 7:
                    message.services.push(
                        Service.decode(reader, reader.uint32())
                    );
                    break;
                case 8:
                    message.subnetId = reader.string();
                    break;
                case 9:
                    message.assignPublicIp = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Host {
        const message = { ...baseHost } as Host;
        message.services = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = host_TypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = host_HealthFromJSON(object.health);
        } else {
            message.health = 0;
        }
        if (object.services !== undefined && object.services !== null) {
            for (const e of object.services) {
                message.services.push(Service.fromJSON(e));
            }
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        if (
            object.assignPublicIp !== undefined &&
            object.assignPublicIp !== null
        ) {
            message.assignPublicIp = Boolean(object.assignPublicIp);
        } else {
            message.assignPublicIp = false;
        }
        return message;
    },

    toJSON(message: Host): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.type !== undefined &&
            (obj.type = host_TypeToJSON(message.type));
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.health !== undefined &&
            (obj.health = host_HealthToJSON(message.health));
        if (message.services) {
            obj.services = message.services.map((e) =>
                e ? Service.toJSON(e) : undefined
            );
        } else {
            obj.services = [];
        }
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },

    fromPartial(object: DeepPartial<Host>): Host {
        const message = { ...baseHost } as Host;
        message.services = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = object.health;
        } else {
            message.health = 0;
        }
        if (object.services !== undefined && object.services !== null) {
            for (const e of object.services) {
                message.services.push(Service.fromPartial(e));
            }
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        if (
            object.assignPublicIp !== undefined &&
            object.assignPublicIp !== null
        ) {
            message.assignPublicIp = object.assignPublicIp;
        } else {
            message.assignPublicIp = false;
        }
        return message;
    },
};

const baseService: object = { type: 0, health: 0 };

export const Service = {
    encode(
        message: Service,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.health !== 0) {
            writer.uint32(16).int32(message.health);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Service {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseService } as Service;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.health = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Service {
        const message = { ...baseService } as Service;
        if (object.type !== undefined && object.type !== null) {
            message.type = service_TypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = service_HealthFromJSON(object.health);
        } else {
            message.health = 0;
        }
        return message;
    },

    toJSON(message: Service): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = service_TypeToJSON(message.type));
        message.health !== undefined &&
            (obj.health = service_HealthToJSON(message.health));
        return obj;
    },

    fromPartial(object: DeepPartial<Service>): Service {
        const message = { ...baseService } as Service;
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = object.health;
        } else {
            message.health = 0;
        }
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
