/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { TimeOfDay } from '../../../../../google/type/timeofday';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import {
    MasterSubclusterConfig,
    SegmentSubclusterConfig,
} from '../../../../../yandex/cloud/mdb/greenplum/v1/config';
import {
    MaintenanceWindow,
    MaintenanceOperation,
} from '../../../../../yandex/cloud/mdb/greenplum/v1/maintenance';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.greenplum.v1';

/** A Greenplum Cluster resource. For more information, see the */
export interface Cluster {
    $type: 'yandex.cloud.mdb.greenplum.v1.Cluster';
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
    labels: { [key: string]: string };
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
export enum Cluster_Environment {
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
        case 4:
        case 'UNBALANCED':
            return Cluster_Health.UNBALANCED;
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
        case Cluster_Health.UNBALANCED:
            return 'UNBALANCED';
        default:
            return 'UNKNOWN';
    }
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
    /** UPDATING - Cluster is being updated. */
    UPDATING = 4,
    /** STOPPING - Cluster is stopping. */
    STOPPING = 5,
    /** STOPPED - Cluster stopped. */
    STOPPED = 6,
    /** STARTING - Cluster is starting. */
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
    $type: 'yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry';
    key: string;
    value: string;
}

/** Monitoring system metadata. */
export interface Monitoring {
    $type: 'yandex.cloud.mdb.greenplum.v1.Monitoring';
    /** Name of the monitoring system. */
    name: string;
    /** Description of the monitoring system. */
    description: string;
    /** Link to the monitoring system charts for the Greenplum cluster. */
    link: string;
}

export interface GreenplumConfig {
    $type: 'yandex.cloud.mdb.greenplum.v1.GreenplumConfig';
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
    $type: 'yandex.cloud.mdb.greenplum.v1.Access';
    /** Allow to export data from the cluster to Yandex DataLens. */
    dataLens: boolean;
    /** Allow SQL queries to the cluster databases from the Yandex.Cloud management console. */
    webSql: boolean;
}

const baseCluster: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.Cluster',
    id: '',
    folderId: '',
    name: '',
    description: '',
    environment: 0,
    masterHostCount: 0,
    segmentHostCount: 0,
    segmentInHost: 0,
    networkId: '',
    health: 0,
    status: 0,
    securityGroupIds: '',
    userName: '',
    deletionProtection: false,
    hostGroupIds: '',
};

export const Cluster = {
    $type: 'yandex.cloud.mdb.greenplum.v1.Cluster' as const,

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
        if (message.config !== undefined) {
            GreenplumConfig.encode(
                message.config,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Cluster_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(58).fork()
            ).ldelim();
        });
        if (message.environment !== 0) {
            writer.uint32(64).int32(message.environment);
        }
        for (const v of message.monitoring) {
            Monitoring.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        if (message.masterConfig !== undefined) {
            MasterSubclusterConfig.encode(
                message.masterConfig,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.segmentConfig !== undefined) {
            SegmentSubclusterConfig.encode(
                message.segmentConfig,
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.masterHostCount !== 0) {
            writer.uint32(96).int64(message.masterHostCount);
        }
        if (message.segmentHostCount !== 0) {
            writer.uint32(104).int64(message.segmentHostCount);
        }
        if (message.segmentInHost !== 0) {
            writer.uint32(112).int64(message.segmentInHost);
        }
        if (message.networkId !== '') {
            writer.uint32(122).string(message.networkId);
        }
        if (message.health !== 0) {
            writer.uint32(128).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(136).int32(message.status);
        }
        if (message.maintenanceWindow !== undefined) {
            MaintenanceWindow.encode(
                message.maintenanceWindow,
                writer.uint32(146).fork()
            ).ldelim();
        }
        if (message.plannedOperation !== undefined) {
            MaintenanceOperation.encode(
                message.plannedOperation,
                writer.uint32(154).fork()
            ).ldelim();
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(162).string(v!);
        }
        if (message.userName !== '') {
            writer.uint32(170).string(message.userName);
        }
        if (message.deletionProtection === true) {
            writer.uint32(176).bool(message.deletionProtection);
        }
        for (const v of message.hostGroupIds) {
            writer.uint32(186).string(v!);
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
                    message.config = GreenplumConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = Cluster_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.environment = reader.int32() as any;
                    break;
                case 9:
                    message.monitoring.push(
                        Monitoring.decode(reader, reader.uint32())
                    );
                    break;
                case 10:
                    message.masterConfig = MasterSubclusterConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.segmentConfig = SegmentSubclusterConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 12:
                    message.masterHostCount = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 13:
                    message.segmentHostCount = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 14:
                    message.segmentInHost = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 15:
                    message.networkId = reader.string();
                    break;
                case 16:
                    message.health = reader.int32() as any;
                    break;
                case 17:
                    message.status = reader.int32() as any;
                    break;
                case 18:
                    message.maintenanceWindow = MaintenanceWindow.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 19:
                    message.plannedOperation = MaintenanceOperation.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 20:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 21:
                    message.userName = reader.string();
                    break;
                case 22:
                    message.deletionProtection = reader.bool();
                    break;
                case 23:
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
        if (object.config !== undefined && object.config !== null) {
            message.config = GreenplumConfig.fromJSON(object.config);
        } else {
            message.config = undefined;
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
        if (object.masterConfig !== undefined && object.masterConfig !== null) {
            message.masterConfig = MasterSubclusterConfig.fromJSON(
                object.masterConfig
            );
        } else {
            message.masterConfig = undefined;
        }
        if (
            object.segmentConfig !== undefined &&
            object.segmentConfig !== null
        ) {
            message.segmentConfig = SegmentSubclusterConfig.fromJSON(
                object.segmentConfig
            );
        } else {
            message.segmentConfig = undefined;
        }
        if (
            object.masterHostCount !== undefined &&
            object.masterHostCount !== null
        ) {
            message.masterHostCount = Number(object.masterHostCount);
        } else {
            message.masterHostCount = 0;
        }
        if (
            object.segmentHostCount !== undefined &&
            object.segmentHostCount !== null
        ) {
            message.segmentHostCount = Number(object.segmentHostCount);
        } else {
            message.segmentHostCount = 0;
        }
        if (
            object.segmentInHost !== undefined &&
            object.segmentInHost !== null
        ) {
            message.segmentInHost = Number(object.segmentInHost);
        } else {
            message.segmentInHost = 0;
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
            object.maintenanceWindow !== undefined &&
            object.maintenanceWindow !== null
        ) {
            message.maintenanceWindow = MaintenanceWindow.fromJSON(
                object.maintenanceWindow
            );
        } else {
            message.maintenanceWindow = undefined;
        }
        if (
            object.plannedOperation !== undefined &&
            object.plannedOperation !== null
        ) {
            message.plannedOperation = MaintenanceOperation.fromJSON(
                object.plannedOperation
            );
        } else {
            message.plannedOperation = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = String(object.userName);
        } else {
            message.userName = '';
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = Boolean(object.deletionProtection);
        } else {
            message.deletionProtection = false;
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
        message.config !== undefined &&
            (obj.config = message.config
                ? GreenplumConfig.toJSON(message.config)
                : undefined);
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
        message.masterConfig !== undefined &&
            (obj.masterConfig = message.masterConfig
                ? MasterSubclusterConfig.toJSON(message.masterConfig)
                : undefined);
        message.segmentConfig !== undefined &&
            (obj.segmentConfig = message.segmentConfig
                ? SegmentSubclusterConfig.toJSON(message.segmentConfig)
                : undefined);
        message.masterHostCount !== undefined &&
            (obj.masterHostCount = message.masterHostCount);
        message.segmentHostCount !== undefined &&
            (obj.segmentHostCount = message.segmentHostCount);
        message.segmentInHost !== undefined &&
            (obj.segmentInHost = message.segmentInHost);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.health !== undefined &&
            (obj.health = cluster_HealthToJSON(message.health));
        message.status !== undefined &&
            (obj.status = cluster_StatusToJSON(message.status));
        message.maintenanceWindow !== undefined &&
            (obj.maintenanceWindow = message.maintenanceWindow
                ? MaintenanceWindow.toJSON(message.maintenanceWindow)
                : undefined);
        message.plannedOperation !== undefined &&
            (obj.plannedOperation = message.plannedOperation
                ? MaintenanceOperation.toJSON(message.plannedOperation)
                : undefined);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        message.userName !== undefined && (obj.userName = message.userName);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
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
        if (object.config !== undefined && object.config !== null) {
            message.config = GreenplumConfig.fromPartial(object.config);
        } else {
            message.config = undefined;
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
        if (object.masterConfig !== undefined && object.masterConfig !== null) {
            message.masterConfig = MasterSubclusterConfig.fromPartial(
                object.masterConfig
            );
        } else {
            message.masterConfig = undefined;
        }
        if (
            object.segmentConfig !== undefined &&
            object.segmentConfig !== null
        ) {
            message.segmentConfig = SegmentSubclusterConfig.fromPartial(
                object.segmentConfig
            );
        } else {
            message.segmentConfig = undefined;
        }
        if (
            object.masterHostCount !== undefined &&
            object.masterHostCount !== null
        ) {
            message.masterHostCount = object.masterHostCount;
        } else {
            message.masterHostCount = 0;
        }
        if (
            object.segmentHostCount !== undefined &&
            object.segmentHostCount !== null
        ) {
            message.segmentHostCount = object.segmentHostCount;
        } else {
            message.segmentHostCount = 0;
        }
        if (
            object.segmentInHost !== undefined &&
            object.segmentInHost !== null
        ) {
            message.segmentInHost = object.segmentInHost;
        } else {
            message.segmentInHost = 0;
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
            object.maintenanceWindow !== undefined &&
            object.maintenanceWindow !== null
        ) {
            message.maintenanceWindow = MaintenanceWindow.fromPartial(
                object.maintenanceWindow
            );
        } else {
            message.maintenanceWindow = undefined;
        }
        if (
            object.plannedOperation !== undefined &&
            object.plannedOperation !== null
        ) {
            message.plannedOperation = MaintenanceOperation.fromPartial(
                object.plannedOperation
            );
        } else {
            message.plannedOperation = undefined;
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        if (object.userName !== undefined && object.userName !== null) {
            message.userName = object.userName;
        } else {
            message.userName = '';
        }
        if (
            object.deletionProtection !== undefined &&
            object.deletionProtection !== null
        ) {
            message.deletionProtection = object.deletionProtection;
        } else {
            message.deletionProtection = false;
        }
        if (object.hostGroupIds !== undefined && object.hostGroupIds !== null) {
            for (const e of object.hostGroupIds) {
                message.hostGroupIds.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(Cluster.$type, Cluster);

const baseCluster_LabelsEntry: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry',
    key: '',
    value: '',
};

export const Cluster_LabelsEntry = {
    $type: 'yandex.cloud.mdb.greenplum.v1.Cluster.LabelsEntry' as const,

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

messageTypeRegistry.set(Cluster_LabelsEntry.$type, Cluster_LabelsEntry);

const baseMonitoring: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.Monitoring',
    name: '',
    description: '',
    link: '',
};

export const Monitoring = {
    $type: 'yandex.cloud.mdb.greenplum.v1.Monitoring' as const,

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

messageTypeRegistry.set(Monitoring.$type, Monitoring);

const baseGreenplumConfig: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GreenplumConfig',
    version: '',
    zoneId: '',
    subnetId: '',
    assignPublicIp: false,
};

export const GreenplumConfig = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GreenplumConfig' as const,

    encode(
        message: GreenplumConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.backupWindowStart !== undefined) {
            TimeOfDay.encode(
                message.backupWindowStart,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.access !== undefined) {
            Access.encode(message.access, writer.uint32(26).fork()).ldelim();
        }
        if (message.zoneId !== '') {
            writer.uint32(34).string(message.zoneId);
        }
        if (message.subnetId !== '') {
            writer.uint32(42).string(message.subnetId);
        }
        if (message.assignPublicIp === true) {
            writer.uint32(48).bool(message.assignPublicIp);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GreenplumConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGreenplumConfig } as GreenplumConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.backupWindowStart = TimeOfDay.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.access = Access.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.zoneId = reader.string();
                    break;
                case 5:
                    message.subnetId = reader.string();
                    break;
                case 6:
                    message.assignPublicIp = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GreenplumConfig {
        const message = { ...baseGreenplumConfig } as GreenplumConfig;
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        } else {
            message.version = '';
        }
        if (
            object.backupWindowStart !== undefined &&
            object.backupWindowStart !== null
        ) {
            message.backupWindowStart = TimeOfDay.fromJSON(
                object.backupWindowStart
            );
        } else {
            message.backupWindowStart = undefined;
        }
        if (object.access !== undefined && object.access !== null) {
            message.access = Access.fromJSON(object.access);
        } else {
            message.access = undefined;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
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

    toJSON(message: GreenplumConfig): unknown {
        const obj: any = {};
        message.version !== undefined && (obj.version = message.version);
        message.backupWindowStart !== undefined &&
            (obj.backupWindowStart = message.backupWindowStart
                ? TimeOfDay.toJSON(message.backupWindowStart)
                : undefined);
        message.access !== undefined &&
            (obj.access = message.access
                ? Access.toJSON(message.access)
                : undefined);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.assignPublicIp !== undefined &&
            (obj.assignPublicIp = message.assignPublicIp);
        return obj;
    },

    fromPartial(object: DeepPartial<GreenplumConfig>): GreenplumConfig {
        const message = { ...baseGreenplumConfig } as GreenplumConfig;
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        } else {
            message.version = '';
        }
        if (
            object.backupWindowStart !== undefined &&
            object.backupWindowStart !== null
        ) {
            message.backupWindowStart = TimeOfDay.fromPartial(
                object.backupWindowStart
            );
        } else {
            message.backupWindowStart = undefined;
        }
        if (object.access !== undefined && object.access !== null) {
            message.access = Access.fromPartial(object.access);
        } else {
            message.access = undefined;
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
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

messageTypeRegistry.set(GreenplumConfig.$type, GreenplumConfig);

const baseAccess: object = {
    $type: 'yandex.cloud.mdb.greenplum.v1.Access',
    dataLens: false,
    webSql: false,
};

export const Access = {
    $type: 'yandex.cloud.mdb.greenplum.v1.Access' as const,

    encode(
        message: Access,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.dataLens === true) {
            writer.uint32(8).bool(message.dataLens);
        }
        if (message.webSql === true) {
            writer.uint32(16).bool(message.webSql);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Access {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccess } as Access;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataLens = reader.bool();
                    break;
                case 2:
                    message.webSql = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Access {
        const message = { ...baseAccess } as Access;
        if (object.dataLens !== undefined && object.dataLens !== null) {
            message.dataLens = Boolean(object.dataLens);
        } else {
            message.dataLens = false;
        }
        if (object.webSql !== undefined && object.webSql !== null) {
            message.webSql = Boolean(object.webSql);
        } else {
            message.webSql = false;
        }
        return message;
    },

    toJSON(message: Access): unknown {
        const obj: any = {};
        message.dataLens !== undefined && (obj.dataLens = message.dataLens);
        message.webSql !== undefined && (obj.webSql = message.webSql);
        return obj;
    },

    fromPartial(object: DeepPartial<Access>): Access {
        const message = { ...baseAccess } as Access;
        if (object.dataLens !== undefined && object.dataLens !== null) {
            message.dataLens = object.dataLens;
        } else {
            message.dataLens = false;
        }
        if (object.webSql !== undefined && object.webSql !== null) {
            message.webSql = object.webSql;
        } else {
            message.webSql = false;
        }
        return message;
    },
};

messageTypeRegistry.set(Access.$type, Access);

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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
