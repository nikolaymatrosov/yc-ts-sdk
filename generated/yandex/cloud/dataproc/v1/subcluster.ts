/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import {
    Health,
    Resources,
    healthFromJSON,
    healthToJSON,
} from '../../../../yandex/cloud/dataproc/v1/common';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.dataproc.v1';

export enum Role {
    ROLE_UNSPECIFIED = 0,
    /**
     * MASTERNODE - The subcluster fulfills the master role.
     *
     * Master can run the following services, depending on the requested components:
     * * HDFS: Namenode, Secondary Namenode
     * * YARN: ResourceManager, Timeline Server
     * * HBase Master
     * * Hive: Server, Metastore, HCatalog
     * * Spark History Server
     * * Zeppelin
     * * ZooKeeper
     */
    MASTERNODE = 1,
    /**
     * DATANODE - The subcluster is a DATANODE in a Data Proc cluster.
     *
     * DATANODE can run the following services, depending on the requested components:
     * * HDFS DataNode
     * * YARN NodeManager
     * * HBase RegionServer
     * * Spark libraries
     */
    DATANODE = 2,
    /**
     * COMPUTENODE - The subcluster is a COMPUTENODE in a Data Proc cluster.
     *
     * COMPUTENODE can run the following services, depending on the requested components:
     * * YARN NodeManager
     * * Spark libraries
     */
    COMPUTENODE = 3,
    UNRECOGNIZED = -1,
}

export function roleFromJSON(object: any): Role {
    switch (object) {
        case 0:
        case 'ROLE_UNSPECIFIED':
            return Role.ROLE_UNSPECIFIED;
        case 1:
        case 'MASTERNODE':
            return Role.MASTERNODE;
        case 2:
        case 'DATANODE':
            return Role.DATANODE;
        case 3:
        case 'COMPUTENODE':
            return Role.COMPUTENODE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Role.UNRECOGNIZED;
    }
}

export function roleToJSON(object: Role): string {
    switch (object) {
        case Role.ROLE_UNSPECIFIED:
            return 'ROLE_UNSPECIFIED';
        case Role.MASTERNODE:
            return 'MASTERNODE';
        case Role.DATANODE:
            return 'DATANODE';
        case Role.COMPUTENODE:
            return 'COMPUTENODE';
        default:
            return 'UNKNOWN';
    }
}

export interface AutoscalingConfig {
    /** Upper limit for total instance subcluster count. */
    maxHostsCount: number;
    /**
     * Preemptible instances are stopped at least once every 24 hours, and can be stopped at any time
     * if their resources are needed by Compute.
     * For more information, see [Preemptible Virtual Machines](/docs/compute/concepts/preemptible-vm).
     */
    preemptible: boolean;
    /** Time in seconds allotted for averaging metrics. */
    measurementDuration: Duration | undefined;
    /**
     * The warmup time of the instance in seconds. During this time,
     * traffic is sent to the instance, but instance metrics are not collected.
     */
    warmupDuration: Duration | undefined;
    /**
     * Minimum amount of time in seconds allotted for monitoring before
     * Instance Groups can reduce the number of instances in the group.
     * During this time, the group size doesn't decrease, even if the new metric values
     * indicate that it should.
     */
    stabilizationDuration: Duration | undefined;
    /** Defines an autoscaling rule based on the average CPU utilization of the instance group. */
    cpuUtilizationTarget: number;
    /** Timeout to gracefully decommission nodes during downscaling. In seconds. Default value: 120 */
    decommissionTimeout: number;
}

/** A Data Proc subcluster. For details about the concept, see [documentation](/docs/data-proc/concepts/). */
export interface Subcluster {
    /** ID of the subcluster. Generated at creation time. */
    id: string;
    /** ID of the Data Proc cluster that the subcluster belongs to. */
    clusterId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Name of the subcluster. The name is unique within the cluster. */
    name: string;
    /** Role that is fulfilled by hosts of the subcluster. */
    role: Role;
    /** Resources allocated for each host in the subcluster. */
    resources: Resources | undefined;
    /** ID of the VPC subnet used for hosts in the subcluster. */
    subnetId: string;
    /** Number of hosts in the subcluster. */
    hostsCount: number;
    /** Configuration for instance group based subclusters */
    autoscalingConfig: AutoscalingConfig | undefined;
    /** ID of Compute Instance Group for autoscaling subclusters */
    instanceGroupId: string;
}

/** A Data Proc host. For details about the concept, see [documentation](/docs/data-proc/concepts/). */
export interface Host {
    /**
     * Name of the Data Proc host. The host name is assigned by Data Proc at creation time
     * and cannot be changed. The name is generated to be unique across all existing Data Proc
     * hosts in Yandex.Cloud, as it defines the FQDN of the host.
     */
    name: string;
    /** ID of the Data Proc subcluster that the host belongs to. */
    subclusterId: string;
    /** Host status code. */
    health: Health;
    /** ID of the Compute virtual machine that is used as the Data Proc host. */
    computeInstanceId: string;
    /** Role of the host in the cluster. */
    role: Role;
}

const baseAutoscalingConfig: object = {
    maxHostsCount: 0,
    preemptible: false,
    cpuUtilizationTarget: 0,
    decommissionTimeout: 0,
};

export const AutoscalingConfig = {
    encode(
        message: AutoscalingConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.maxHostsCount !== 0) {
            writer.uint32(8).int64(message.maxHostsCount);
        }
        if (message.preemptible === true) {
            writer.uint32(16).bool(message.preemptible);
        }
        if (message.measurementDuration !== undefined) {
            Duration.encode(
                message.measurementDuration,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.warmupDuration !== undefined) {
            Duration.encode(
                message.warmupDuration,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.stabilizationDuration !== undefined) {
            Duration.encode(
                message.stabilizationDuration,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.cpuUtilizationTarget !== 0) {
            writer.uint32(49).double(message.cpuUtilizationTarget);
        }
        if (message.decommissionTimeout !== 0) {
            writer.uint32(56).int64(message.decommissionTimeout);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AutoscalingConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAutoscalingConfig } as AutoscalingConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxHostsCount = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 2:
                    message.preemptible = reader.bool();
                    break;
                case 3:
                    message.measurementDuration = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.warmupDuration = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.stabilizationDuration = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.cpuUtilizationTarget = reader.double();
                    break;
                case 7:
                    message.decommissionTimeout = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AutoscalingConfig {
        const message = { ...baseAutoscalingConfig } as AutoscalingConfig;
        if (
            object.maxHostsCount !== undefined &&
            object.maxHostsCount !== null
        ) {
            message.maxHostsCount = Number(object.maxHostsCount);
        } else {
            message.maxHostsCount = 0;
        }
        if (object.preemptible !== undefined && object.preemptible !== null) {
            message.preemptible = Boolean(object.preemptible);
        } else {
            message.preemptible = false;
        }
        if (
            object.measurementDuration !== undefined &&
            object.measurementDuration !== null
        ) {
            message.measurementDuration = Duration.fromJSON(
                object.measurementDuration
            );
        } else {
            message.measurementDuration = undefined;
        }
        if (
            object.warmupDuration !== undefined &&
            object.warmupDuration !== null
        ) {
            message.warmupDuration = Duration.fromJSON(object.warmupDuration);
        } else {
            message.warmupDuration = undefined;
        }
        if (
            object.stabilizationDuration !== undefined &&
            object.stabilizationDuration !== null
        ) {
            message.stabilizationDuration = Duration.fromJSON(
                object.stabilizationDuration
            );
        } else {
            message.stabilizationDuration = undefined;
        }
        if (
            object.cpuUtilizationTarget !== undefined &&
            object.cpuUtilizationTarget !== null
        ) {
            message.cpuUtilizationTarget = Number(object.cpuUtilizationTarget);
        } else {
            message.cpuUtilizationTarget = 0;
        }
        if (
            object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null
        ) {
            message.decommissionTimeout = Number(object.decommissionTimeout);
        } else {
            message.decommissionTimeout = 0;
        }
        return message;
    },

    toJSON(message: AutoscalingConfig): unknown {
        const obj: any = {};
        message.maxHostsCount !== undefined &&
            (obj.maxHostsCount = message.maxHostsCount);
        message.preemptible !== undefined &&
            (obj.preemptible = message.preemptible);
        message.measurementDuration !== undefined &&
            (obj.measurementDuration = message.measurementDuration
                ? Duration.toJSON(message.measurementDuration)
                : undefined);
        message.warmupDuration !== undefined &&
            (obj.warmupDuration = message.warmupDuration
                ? Duration.toJSON(message.warmupDuration)
                : undefined);
        message.stabilizationDuration !== undefined &&
            (obj.stabilizationDuration = message.stabilizationDuration
                ? Duration.toJSON(message.stabilizationDuration)
                : undefined);
        message.cpuUtilizationTarget !== undefined &&
            (obj.cpuUtilizationTarget = message.cpuUtilizationTarget);
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = message.decommissionTimeout);
        return obj;
    },

    fromPartial(object: DeepPartial<AutoscalingConfig>): AutoscalingConfig {
        const message = { ...baseAutoscalingConfig } as AutoscalingConfig;
        if (
            object.maxHostsCount !== undefined &&
            object.maxHostsCount !== null
        ) {
            message.maxHostsCount = object.maxHostsCount;
        } else {
            message.maxHostsCount = 0;
        }
        if (object.preemptible !== undefined && object.preemptible !== null) {
            message.preemptible = object.preemptible;
        } else {
            message.preemptible = false;
        }
        if (
            object.measurementDuration !== undefined &&
            object.measurementDuration !== null
        ) {
            message.measurementDuration = Duration.fromPartial(
                object.measurementDuration
            );
        } else {
            message.measurementDuration = undefined;
        }
        if (
            object.warmupDuration !== undefined &&
            object.warmupDuration !== null
        ) {
            message.warmupDuration = Duration.fromPartial(
                object.warmupDuration
            );
        } else {
            message.warmupDuration = undefined;
        }
        if (
            object.stabilizationDuration !== undefined &&
            object.stabilizationDuration !== null
        ) {
            message.stabilizationDuration = Duration.fromPartial(
                object.stabilizationDuration
            );
        } else {
            message.stabilizationDuration = undefined;
        }
        if (
            object.cpuUtilizationTarget !== undefined &&
            object.cpuUtilizationTarget !== null
        ) {
            message.cpuUtilizationTarget = object.cpuUtilizationTarget;
        } else {
            message.cpuUtilizationTarget = 0;
        }
        if (
            object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null
        ) {
            message.decommissionTimeout = object.decommissionTimeout;
        } else {
            message.decommissionTimeout = 0;
        }
        return message;
    },
};

const baseSubcluster: object = {
    id: '',
    clusterId: '',
    name: '',
    role: 0,
    subnetId: '',
    hostsCount: 0,
    instanceGroupId: '',
};

export const Subcluster = {
    encode(
        message: Subcluster,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
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
        if (message.role !== 0) {
            writer.uint32(40).int32(message.role);
        }
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.subnetId !== '') {
            writer.uint32(58).string(message.subnetId);
        }
        if (message.hostsCount !== 0) {
            writer.uint32(64).int64(message.hostsCount);
        }
        if (message.autoscalingConfig !== undefined) {
            AutoscalingConfig.encode(
                message.autoscalingConfig,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.instanceGroupId !== '') {
            writer.uint32(90).string(message.instanceGroupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Subcluster {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubcluster } as Subcluster;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
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
                    message.role = reader.int32() as any;
                    break;
                case 6:
                    message.resources = Resources.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.subnetId = reader.string();
                    break;
                case 8:
                    message.hostsCount = longToNumber(reader.int64() as Long);
                    break;
                case 10:
                    message.autoscalingConfig = AutoscalingConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.instanceGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Subcluster {
        const message = { ...baseSubcluster } as Subcluster;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
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
        if (object.role !== undefined && object.role !== null) {
            message.role = roleFromJSON(object.role);
        } else {
            message.role = 0;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        if (object.hostsCount !== undefined && object.hostsCount !== null) {
            message.hostsCount = Number(object.hostsCount);
        } else {
            message.hostsCount = 0;
        }
        if (
            object.autoscalingConfig !== undefined &&
            object.autoscalingConfig !== null
        ) {
            message.autoscalingConfig = AutoscalingConfig.fromJSON(
                object.autoscalingConfig
            );
        } else {
            message.autoscalingConfig = undefined;
        }
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = String(object.instanceGroupId);
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },

    toJSON(message: Subcluster): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.role !== undefined && (obj.role = roleToJSON(message.role));
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.hostsCount !== undefined &&
            (obj.hostsCount = message.hostsCount);
        message.autoscalingConfig !== undefined &&
            (obj.autoscalingConfig = message.autoscalingConfig
                ? AutoscalingConfig.toJSON(message.autoscalingConfig)
                : undefined);
        message.instanceGroupId !== undefined &&
            (obj.instanceGroupId = message.instanceGroupId);
        return obj;
    },

    fromPartial(object: DeepPartial<Subcluster>): Subcluster {
        const message = { ...baseSubcluster } as Subcluster;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
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
        if (object.role !== undefined && object.role !== null) {
            message.role = object.role;
        } else {
            message.role = 0;
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        if (object.hostsCount !== undefined && object.hostsCount !== null) {
            message.hostsCount = object.hostsCount;
        } else {
            message.hostsCount = 0;
        }
        if (
            object.autoscalingConfig !== undefined &&
            object.autoscalingConfig !== null
        ) {
            message.autoscalingConfig = AutoscalingConfig.fromPartial(
                object.autoscalingConfig
            );
        } else {
            message.autoscalingConfig = undefined;
        }
        if (
            object.instanceGroupId !== undefined &&
            object.instanceGroupId !== null
        ) {
            message.instanceGroupId = object.instanceGroupId;
        } else {
            message.instanceGroupId = '';
        }
        return message;
    },
};

const baseHost: object = {
    name: '',
    subclusterId: '',
    health: 0,
    computeInstanceId: '',
    role: 0,
};

export const Host = {
    encode(
        message: Host,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.subclusterId !== '') {
            writer.uint32(18).string(message.subclusterId);
        }
        if (message.health !== 0) {
            writer.uint32(24).int32(message.health);
        }
        if (message.computeInstanceId !== '') {
            writer.uint32(34).string(message.computeInstanceId);
        }
        if (message.role !== 0) {
            writer.uint32(40).int32(message.role);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Host {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHost } as Host;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.subclusterId = reader.string();
                    break;
                case 3:
                    message.health = reader.int32() as any;
                    break;
                case 4:
                    message.computeInstanceId = reader.string();
                    break;
                case 5:
                    message.role = reader.int32() as any;
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
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = String(object.subclusterId);
        } else {
            message.subclusterId = '';
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = healthFromJSON(object.health);
        } else {
            message.health = 0;
        }
        if (
            object.computeInstanceId !== undefined &&
            object.computeInstanceId !== null
        ) {
            message.computeInstanceId = String(object.computeInstanceId);
        } else {
            message.computeInstanceId = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = roleFromJSON(object.role);
        } else {
            message.role = 0;
        }
        return message;
    },

    toJSON(message: Host): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.subclusterId !== undefined &&
            (obj.subclusterId = message.subclusterId);
        message.health !== undefined &&
            (obj.health = healthToJSON(message.health));
        message.computeInstanceId !== undefined &&
            (obj.computeInstanceId = message.computeInstanceId);
        message.role !== undefined && (obj.role = roleToJSON(message.role));
        return obj;
    },

    fromPartial(object: DeepPartial<Host>): Host {
        const message = { ...baseHost } as Host;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.subclusterId !== undefined && object.subclusterId !== null) {
            message.subclusterId = object.subclusterId;
        } else {
            message.subclusterId = '';
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = object.health;
        } else {
            message.health = 0;
        }
        if (
            object.computeInstanceId !== undefined &&
            object.computeInstanceId !== null
        ) {
            message.computeInstanceId = object.computeInstanceId;
        } else {
            message.computeInstanceId = '';
        }
        if (object.role !== undefined && object.role !== null) {
            message.role = object.role;
        } else {
            message.role = 0;
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
