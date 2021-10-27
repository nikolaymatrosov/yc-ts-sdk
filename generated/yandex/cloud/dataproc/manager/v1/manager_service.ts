/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.dataproc.manager.v1';

export interface HbaseNodeInfo {
    $type: 'yandex.cloud.dataproc.manager.v1.HbaseNodeInfo';
    name: string;
    requests: number;
    heapSizeMb: number;
    maxHeapSizeMb: number;
}

export interface HbaseInfo {
    $type: 'yandex.cloud.dataproc.manager.v1.HbaseInfo';
    available: boolean;
    regions: number;
    requests: number;
    averageLoad: number;
    liveNodes: HbaseNodeInfo[];
    deadNodes: HbaseNodeInfo[];
}

export interface HDFSNodeInfo {
    $type: 'yandex.cloud.dataproc.manager.v1.HDFSNodeInfo';
    name: string;
    used: number;
    remaining: number;
    capacity: number;
    numBlocks: number;
    state: string;
}

export interface HDFSInfo {
    $type: 'yandex.cloud.dataproc.manager.v1.HDFSInfo';
    available: boolean;
    percentRemaining: number;
    used: number;
    free: number;
    totalBlocks: number;
    missingBlocks: number;
    missingBlocksReplicaOne: number;
    liveNodes: HDFSNodeInfo[];
    deadNodes: HDFSNodeInfo[];
    safemode: string;
    decommissioningNodes: HDFSNodeInfo[];
    decommissionedNodes: HDFSNodeInfo[];
    /** Actual list of decommission hosts in HDFS namenode memory */
    requestedDecommissionHosts: string[];
}

export interface HiveInfo {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveInfo';
    available: boolean;
    queriesSucceeded: number;
    queriesFailed: number;
    queriesExecuting: number;
    sessionsOpen: number;
    sessionsActive: number;
}

export interface YarnNodeInfo {
    $type: 'yandex.cloud.dataproc.manager.v1.YarnNodeInfo';
    name: string;
    state: string;
    numContainers: number;
    usedMemoryMb: number;
    availableMemoryMb: number;
    updateTime: number;
}

export interface YarnInfo {
    $type: 'yandex.cloud.dataproc.manager.v1.YarnInfo';
    available: boolean;
    liveNodes: YarnNodeInfo[];
    /** Actual list of decommission hosts in Yarn resource manager memory */
    requestedDecommissionHosts: string[];
}

export interface ZookeeperInfo {
    $type: 'yandex.cloud.dataproc.manager.v1.ZookeeperInfo';
    alive: boolean;
}

export interface OozieInfo {
    $type: 'yandex.cloud.dataproc.manager.v1.OozieInfo';
    alive: boolean;
}

export interface LivyInfo {
    $type: 'yandex.cloud.dataproc.manager.v1.LivyInfo';
    alive: boolean;
}

export interface Info {
    $type: 'yandex.cloud.dataproc.manager.v1.Info';
    hdfs: HDFSInfo | undefined;
    yarn: YarnInfo | undefined;
    hive: HiveInfo | undefined;
    zookeeper: ZookeeperInfo | undefined;
    hbase: HbaseInfo | undefined;
    oozie: OozieInfo | undefined;
    /**
     * Report count is incremented every time report is sent by Dataproc Agent.
     * So Worker can use this property to make sure that Dataproc Agent got data sent by Worker through Dataproc Manager
     * for synchronization purposes
     */
    reportCount: number;
    livy: LivyInfo | undefined;
}

/** The request message containing the host status report. */
export interface ReportRequest {
    $type: 'yandex.cloud.dataproc.manager.v1.ReportRequest';
    cid: string;
    topologyRevision: number;
    info: Info | undefined;
    collectedAt: Date | undefined;
}

/** The response message containing the agent commands to apply on host. */
export interface ReportReply {
    $type: 'yandex.cloud.dataproc.manager.v1.ReportReply';
    decommissionTimeout: number;
    yarnHostsToDecommission: string[];
    hdfsHostsToDecommission: string[];
}

const baseHbaseNodeInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.HbaseNodeInfo',
    name: '',
    requests: 0,
    heapSizeMb: 0,
    maxHeapSizeMb: 0,
};

export const HbaseNodeInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HbaseNodeInfo' as const,

    encode(
        message: HbaseNodeInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.requests !== 0) {
            writer.uint32(16).int64(message.requests);
        }
        if (message.heapSizeMb !== 0) {
            writer.uint32(24).int64(message.heapSizeMb);
        }
        if (message.maxHeapSizeMb !== 0) {
            writer.uint32(32).int64(message.maxHeapSizeMb);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HbaseNodeInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHbaseNodeInfo } as HbaseNodeInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.requests = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.heapSizeMb = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.maxHeapSizeMb = longToNumber(
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

    fromJSON(object: any): HbaseNodeInfo {
        const message = { ...baseHbaseNodeInfo } as HbaseNodeInfo;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.requests !== undefined && object.requests !== null) {
            message.requests = Number(object.requests);
        } else {
            message.requests = 0;
        }
        if (object.heapSizeMb !== undefined && object.heapSizeMb !== null) {
            message.heapSizeMb = Number(object.heapSizeMb);
        } else {
            message.heapSizeMb = 0;
        }
        if (
            object.maxHeapSizeMb !== undefined &&
            object.maxHeapSizeMb !== null
        ) {
            message.maxHeapSizeMb = Number(object.maxHeapSizeMb);
        } else {
            message.maxHeapSizeMb = 0;
        }
        return message;
    },

    toJSON(message: HbaseNodeInfo): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.requests !== undefined && (obj.requests = message.requests);
        message.heapSizeMb !== undefined &&
            (obj.heapSizeMb = message.heapSizeMb);
        message.maxHeapSizeMb !== undefined &&
            (obj.maxHeapSizeMb = message.maxHeapSizeMb);
        return obj;
    },

    fromPartial(object: DeepPartial<HbaseNodeInfo>): HbaseNodeInfo {
        const message = { ...baseHbaseNodeInfo } as HbaseNodeInfo;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.requests !== undefined && object.requests !== null) {
            message.requests = object.requests;
        } else {
            message.requests = 0;
        }
        if (object.heapSizeMb !== undefined && object.heapSizeMb !== null) {
            message.heapSizeMb = object.heapSizeMb;
        } else {
            message.heapSizeMb = 0;
        }
        if (
            object.maxHeapSizeMb !== undefined &&
            object.maxHeapSizeMb !== null
        ) {
            message.maxHeapSizeMb = object.maxHeapSizeMb;
        } else {
            message.maxHeapSizeMb = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(HbaseNodeInfo.$type, HbaseNodeInfo);

const baseHbaseInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.HbaseInfo',
    available: false,
    regions: 0,
    requests: 0,
    averageLoad: 0,
};

export const HbaseInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HbaseInfo' as const,

    encode(
        message: HbaseInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.regions !== 0) {
            writer.uint32(16).int64(message.regions);
        }
        if (message.requests !== 0) {
            writer.uint32(24).int64(message.requests);
        }
        if (message.averageLoad !== 0) {
            writer.uint32(33).double(message.averageLoad);
        }
        for (const v of message.liveNodes) {
            HbaseNodeInfo.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.deadNodes) {
            HbaseNodeInfo.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HbaseInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHbaseInfo } as HbaseInfo;
        message.liveNodes = [];
        message.deadNodes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.regions = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.requests = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.averageLoad = reader.double();
                    break;
                case 5:
                    message.liveNodes.push(
                        HbaseNodeInfo.decode(reader, reader.uint32())
                    );
                    break;
                case 6:
                    message.deadNodes.push(
                        HbaseNodeInfo.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HbaseInfo {
        const message = { ...baseHbaseInfo } as HbaseInfo;
        message.liveNodes = [];
        message.deadNodes = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = Boolean(object.available);
        } else {
            message.available = false;
        }
        if (object.regions !== undefined && object.regions !== null) {
            message.regions = Number(object.regions);
        } else {
            message.regions = 0;
        }
        if (object.requests !== undefined && object.requests !== null) {
            message.requests = Number(object.requests);
        } else {
            message.requests = 0;
        }
        if (object.averageLoad !== undefined && object.averageLoad !== null) {
            message.averageLoad = Number(object.averageLoad);
        } else {
            message.averageLoad = 0;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(HbaseNodeInfo.fromJSON(e));
            }
        }
        if (object.deadNodes !== undefined && object.deadNodes !== null) {
            for (const e of object.deadNodes) {
                message.deadNodes.push(HbaseNodeInfo.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: HbaseInfo): unknown {
        const obj: any = {};
        message.available !== undefined && (obj.available = message.available);
        message.regions !== undefined && (obj.regions = message.regions);
        message.requests !== undefined && (obj.requests = message.requests);
        message.averageLoad !== undefined &&
            (obj.averageLoad = message.averageLoad);
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) =>
                e ? HbaseNodeInfo.toJSON(e) : undefined
            );
        } else {
            obj.liveNodes = [];
        }
        if (message.deadNodes) {
            obj.deadNodes = message.deadNodes.map((e) =>
                e ? HbaseNodeInfo.toJSON(e) : undefined
            );
        } else {
            obj.deadNodes = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<HbaseInfo>): HbaseInfo {
        const message = { ...baseHbaseInfo } as HbaseInfo;
        message.liveNodes = [];
        message.deadNodes = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = object.available;
        } else {
            message.available = false;
        }
        if (object.regions !== undefined && object.regions !== null) {
            message.regions = object.regions;
        } else {
            message.regions = 0;
        }
        if (object.requests !== undefined && object.requests !== null) {
            message.requests = object.requests;
        } else {
            message.requests = 0;
        }
        if (object.averageLoad !== undefined && object.averageLoad !== null) {
            message.averageLoad = object.averageLoad;
        } else {
            message.averageLoad = 0;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(HbaseNodeInfo.fromPartial(e));
            }
        }
        if (object.deadNodes !== undefined && object.deadNodes !== null) {
            for (const e of object.deadNodes) {
                message.deadNodes.push(HbaseNodeInfo.fromPartial(e));
            }
        }
        return message;
    },
};

messageTypeRegistry.set(HbaseInfo.$type, HbaseInfo);

const baseHDFSNodeInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.HDFSNodeInfo',
    name: '',
    used: 0,
    remaining: 0,
    capacity: 0,
    numBlocks: 0,
    state: '',
};

export const HDFSNodeInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HDFSNodeInfo' as const,

    encode(
        message: HDFSNodeInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.used !== 0) {
            writer.uint32(16).int64(message.used);
        }
        if (message.remaining !== 0) {
            writer.uint32(24).int64(message.remaining);
        }
        if (message.capacity !== 0) {
            writer.uint32(32).int64(message.capacity);
        }
        if (message.numBlocks !== 0) {
            writer.uint32(40).int64(message.numBlocks);
        }
        if (message.state !== '') {
            writer.uint32(50).string(message.state);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HDFSNodeInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHDFSNodeInfo } as HDFSNodeInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.used = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.remaining = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.capacity = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.numBlocks = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.state = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HDFSNodeInfo {
        const message = { ...baseHDFSNodeInfo } as HDFSNodeInfo;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.used !== undefined && object.used !== null) {
            message.used = Number(object.used);
        } else {
            message.used = 0;
        }
        if (object.remaining !== undefined && object.remaining !== null) {
            message.remaining = Number(object.remaining);
        } else {
            message.remaining = 0;
        }
        if (object.capacity !== undefined && object.capacity !== null) {
            message.capacity = Number(object.capacity);
        } else {
            message.capacity = 0;
        }
        if (object.numBlocks !== undefined && object.numBlocks !== null) {
            message.numBlocks = Number(object.numBlocks);
        } else {
            message.numBlocks = 0;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = String(object.state);
        } else {
            message.state = '';
        }
        return message;
    },

    toJSON(message: HDFSNodeInfo): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.used !== undefined && (obj.used = message.used);
        message.remaining !== undefined && (obj.remaining = message.remaining);
        message.capacity !== undefined && (obj.capacity = message.capacity);
        message.numBlocks !== undefined && (obj.numBlocks = message.numBlocks);
        message.state !== undefined && (obj.state = message.state);
        return obj;
    },

    fromPartial(object: DeepPartial<HDFSNodeInfo>): HDFSNodeInfo {
        const message = { ...baseHDFSNodeInfo } as HDFSNodeInfo;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.used !== undefined && object.used !== null) {
            message.used = object.used;
        } else {
            message.used = 0;
        }
        if (object.remaining !== undefined && object.remaining !== null) {
            message.remaining = object.remaining;
        } else {
            message.remaining = 0;
        }
        if (object.capacity !== undefined && object.capacity !== null) {
            message.capacity = object.capacity;
        } else {
            message.capacity = 0;
        }
        if (object.numBlocks !== undefined && object.numBlocks !== null) {
            message.numBlocks = object.numBlocks;
        } else {
            message.numBlocks = 0;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        } else {
            message.state = '';
        }
        return message;
    },
};

messageTypeRegistry.set(HDFSNodeInfo.$type, HDFSNodeInfo);

const baseHDFSInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.HDFSInfo',
    available: false,
    percentRemaining: 0,
    used: 0,
    free: 0,
    totalBlocks: 0,
    missingBlocks: 0,
    missingBlocksReplicaOne: 0,
    safemode: '',
    requestedDecommissionHosts: '',
};

export const HDFSInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HDFSInfo' as const,

    encode(
        message: HDFSInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.percentRemaining !== 0) {
            writer.uint32(17).double(message.percentRemaining);
        }
        if (message.used !== 0) {
            writer.uint32(24).int64(message.used);
        }
        if (message.free !== 0) {
            writer.uint32(32).int64(message.free);
        }
        if (message.totalBlocks !== 0) {
            writer.uint32(40).int64(message.totalBlocks);
        }
        if (message.missingBlocks !== 0) {
            writer.uint32(48).int64(message.missingBlocks);
        }
        if (message.missingBlocksReplicaOne !== 0) {
            writer.uint32(56).int64(message.missingBlocksReplicaOne);
        }
        for (const v of message.liveNodes) {
            HDFSNodeInfo.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.deadNodes) {
            HDFSNodeInfo.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        if (message.safemode !== '') {
            writer.uint32(90).string(message.safemode);
        }
        for (const v of message.decommissioningNodes) {
            HDFSNodeInfo.encode(v!, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.decommissionedNodes) {
            HDFSNodeInfo.encode(v!, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.requestedDecommissionHosts) {
            writer.uint32(114).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HDFSInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHDFSInfo } as HDFSInfo;
        message.liveNodes = [];
        message.deadNodes = [];
        message.decommissioningNodes = [];
        message.decommissionedNodes = [];
        message.requestedDecommissionHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.percentRemaining = reader.double();
                    break;
                case 3:
                    message.used = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.free = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.totalBlocks = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.missingBlocks = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 7:
                    message.missingBlocksReplicaOne = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 8:
                    message.liveNodes.push(
                        HDFSNodeInfo.decode(reader, reader.uint32())
                    );
                    break;
                case 9:
                    message.deadNodes.push(
                        HDFSNodeInfo.decode(reader, reader.uint32())
                    );
                    break;
                case 11:
                    message.safemode = reader.string();
                    break;
                case 12:
                    message.decommissioningNodes.push(
                        HDFSNodeInfo.decode(reader, reader.uint32())
                    );
                    break;
                case 13:
                    message.decommissionedNodes.push(
                        HDFSNodeInfo.decode(reader, reader.uint32())
                    );
                    break;
                case 14:
                    message.requestedDecommissionHosts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HDFSInfo {
        const message = { ...baseHDFSInfo } as HDFSInfo;
        message.liveNodes = [];
        message.deadNodes = [];
        message.decommissioningNodes = [];
        message.decommissionedNodes = [];
        message.requestedDecommissionHosts = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = Boolean(object.available);
        } else {
            message.available = false;
        }
        if (
            object.percentRemaining !== undefined &&
            object.percentRemaining !== null
        ) {
            message.percentRemaining = Number(object.percentRemaining);
        } else {
            message.percentRemaining = 0;
        }
        if (object.used !== undefined && object.used !== null) {
            message.used = Number(object.used);
        } else {
            message.used = 0;
        }
        if (object.free !== undefined && object.free !== null) {
            message.free = Number(object.free);
        } else {
            message.free = 0;
        }
        if (object.totalBlocks !== undefined && object.totalBlocks !== null) {
            message.totalBlocks = Number(object.totalBlocks);
        } else {
            message.totalBlocks = 0;
        }
        if (
            object.missingBlocks !== undefined &&
            object.missingBlocks !== null
        ) {
            message.missingBlocks = Number(object.missingBlocks);
        } else {
            message.missingBlocks = 0;
        }
        if (
            object.missingBlocksReplicaOne !== undefined &&
            object.missingBlocksReplicaOne !== null
        ) {
            message.missingBlocksReplicaOne = Number(
                object.missingBlocksReplicaOne
            );
        } else {
            message.missingBlocksReplicaOne = 0;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(HDFSNodeInfo.fromJSON(e));
            }
        }
        if (object.deadNodes !== undefined && object.deadNodes !== null) {
            for (const e of object.deadNodes) {
                message.deadNodes.push(HDFSNodeInfo.fromJSON(e));
            }
        }
        if (object.safemode !== undefined && object.safemode !== null) {
            message.safemode = String(object.safemode);
        } else {
            message.safemode = '';
        }
        if (
            object.decommissioningNodes !== undefined &&
            object.decommissioningNodes !== null
        ) {
            for (const e of object.decommissioningNodes) {
                message.decommissioningNodes.push(HDFSNodeInfo.fromJSON(e));
            }
        }
        if (
            object.decommissionedNodes !== undefined &&
            object.decommissionedNodes !== null
        ) {
            for (const e of object.decommissionedNodes) {
                message.decommissionedNodes.push(HDFSNodeInfo.fromJSON(e));
            }
        }
        if (
            object.requestedDecommissionHosts !== undefined &&
            object.requestedDecommissionHosts !== null
        ) {
            for (const e of object.requestedDecommissionHosts) {
                message.requestedDecommissionHosts.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: HDFSInfo): unknown {
        const obj: any = {};
        message.available !== undefined && (obj.available = message.available);
        message.percentRemaining !== undefined &&
            (obj.percentRemaining = message.percentRemaining);
        message.used !== undefined && (obj.used = message.used);
        message.free !== undefined && (obj.free = message.free);
        message.totalBlocks !== undefined &&
            (obj.totalBlocks = message.totalBlocks);
        message.missingBlocks !== undefined &&
            (obj.missingBlocks = message.missingBlocks);
        message.missingBlocksReplicaOne !== undefined &&
            (obj.missingBlocksReplicaOne = message.missingBlocksReplicaOne);
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) =>
                e ? HDFSNodeInfo.toJSON(e) : undefined
            );
        } else {
            obj.liveNodes = [];
        }
        if (message.deadNodes) {
            obj.deadNodes = message.deadNodes.map((e) =>
                e ? HDFSNodeInfo.toJSON(e) : undefined
            );
        } else {
            obj.deadNodes = [];
        }
        message.safemode !== undefined && (obj.safemode = message.safemode);
        if (message.decommissioningNodes) {
            obj.decommissioningNodes = message.decommissioningNodes.map((e) =>
                e ? HDFSNodeInfo.toJSON(e) : undefined
            );
        } else {
            obj.decommissioningNodes = [];
        }
        if (message.decommissionedNodes) {
            obj.decommissionedNodes = message.decommissionedNodes.map((e) =>
                e ? HDFSNodeInfo.toJSON(e) : undefined
            );
        } else {
            obj.decommissionedNodes = [];
        }
        if (message.requestedDecommissionHosts) {
            obj.requestedDecommissionHosts =
                message.requestedDecommissionHosts.map((e) => e);
        } else {
            obj.requestedDecommissionHosts = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<HDFSInfo>): HDFSInfo {
        const message = { ...baseHDFSInfo } as HDFSInfo;
        message.liveNodes = [];
        message.deadNodes = [];
        message.decommissioningNodes = [];
        message.decommissionedNodes = [];
        message.requestedDecommissionHosts = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = object.available;
        } else {
            message.available = false;
        }
        if (
            object.percentRemaining !== undefined &&
            object.percentRemaining !== null
        ) {
            message.percentRemaining = object.percentRemaining;
        } else {
            message.percentRemaining = 0;
        }
        if (object.used !== undefined && object.used !== null) {
            message.used = object.used;
        } else {
            message.used = 0;
        }
        if (object.free !== undefined && object.free !== null) {
            message.free = object.free;
        } else {
            message.free = 0;
        }
        if (object.totalBlocks !== undefined && object.totalBlocks !== null) {
            message.totalBlocks = object.totalBlocks;
        } else {
            message.totalBlocks = 0;
        }
        if (
            object.missingBlocks !== undefined &&
            object.missingBlocks !== null
        ) {
            message.missingBlocks = object.missingBlocks;
        } else {
            message.missingBlocks = 0;
        }
        if (
            object.missingBlocksReplicaOne !== undefined &&
            object.missingBlocksReplicaOne !== null
        ) {
            message.missingBlocksReplicaOne = object.missingBlocksReplicaOne;
        } else {
            message.missingBlocksReplicaOne = 0;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(HDFSNodeInfo.fromPartial(e));
            }
        }
        if (object.deadNodes !== undefined && object.deadNodes !== null) {
            for (const e of object.deadNodes) {
                message.deadNodes.push(HDFSNodeInfo.fromPartial(e));
            }
        }
        if (object.safemode !== undefined && object.safemode !== null) {
            message.safemode = object.safemode;
        } else {
            message.safemode = '';
        }
        if (
            object.decommissioningNodes !== undefined &&
            object.decommissioningNodes !== null
        ) {
            for (const e of object.decommissioningNodes) {
                message.decommissioningNodes.push(HDFSNodeInfo.fromPartial(e));
            }
        }
        if (
            object.decommissionedNodes !== undefined &&
            object.decommissionedNodes !== null
        ) {
            for (const e of object.decommissionedNodes) {
                message.decommissionedNodes.push(HDFSNodeInfo.fromPartial(e));
            }
        }
        if (
            object.requestedDecommissionHosts !== undefined &&
            object.requestedDecommissionHosts !== null
        ) {
            for (const e of object.requestedDecommissionHosts) {
                message.requestedDecommissionHosts.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(HDFSInfo.$type, HDFSInfo);

const baseHiveInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveInfo',
    available: false,
    queriesSucceeded: 0,
    queriesFailed: 0,
    queriesExecuting: 0,
    sessionsOpen: 0,
    sessionsActive: 0,
};

export const HiveInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.HiveInfo' as const,

    encode(
        message: HiveInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        if (message.queriesSucceeded !== 0) {
            writer.uint32(16).int64(message.queriesSucceeded);
        }
        if (message.queriesFailed !== 0) {
            writer.uint32(24).int64(message.queriesFailed);
        }
        if (message.queriesExecuting !== 0) {
            writer.uint32(32).int64(message.queriesExecuting);
        }
        if (message.sessionsOpen !== 0) {
            writer.uint32(40).int64(message.sessionsOpen);
        }
        if (message.sessionsActive !== 0) {
            writer.uint32(48).int64(message.sessionsActive);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HiveInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHiveInfo } as HiveInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.queriesSucceeded = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 3:
                    message.queriesFailed = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 4:
                    message.queriesExecuting = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 5:
                    message.sessionsOpen = longToNumber(reader.int64() as Long);
                    break;
                case 6:
                    message.sessionsActive = longToNumber(
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

    fromJSON(object: any): HiveInfo {
        const message = { ...baseHiveInfo } as HiveInfo;
        if (object.available !== undefined && object.available !== null) {
            message.available = Boolean(object.available);
        } else {
            message.available = false;
        }
        if (
            object.queriesSucceeded !== undefined &&
            object.queriesSucceeded !== null
        ) {
            message.queriesSucceeded = Number(object.queriesSucceeded);
        } else {
            message.queriesSucceeded = 0;
        }
        if (
            object.queriesFailed !== undefined &&
            object.queriesFailed !== null
        ) {
            message.queriesFailed = Number(object.queriesFailed);
        } else {
            message.queriesFailed = 0;
        }
        if (
            object.queriesExecuting !== undefined &&
            object.queriesExecuting !== null
        ) {
            message.queriesExecuting = Number(object.queriesExecuting);
        } else {
            message.queriesExecuting = 0;
        }
        if (object.sessionsOpen !== undefined && object.sessionsOpen !== null) {
            message.sessionsOpen = Number(object.sessionsOpen);
        } else {
            message.sessionsOpen = 0;
        }
        if (
            object.sessionsActive !== undefined &&
            object.sessionsActive !== null
        ) {
            message.sessionsActive = Number(object.sessionsActive);
        } else {
            message.sessionsActive = 0;
        }
        return message;
    },

    toJSON(message: HiveInfo): unknown {
        const obj: any = {};
        message.available !== undefined && (obj.available = message.available);
        message.queriesSucceeded !== undefined &&
            (obj.queriesSucceeded = message.queriesSucceeded);
        message.queriesFailed !== undefined &&
            (obj.queriesFailed = message.queriesFailed);
        message.queriesExecuting !== undefined &&
            (obj.queriesExecuting = message.queriesExecuting);
        message.sessionsOpen !== undefined &&
            (obj.sessionsOpen = message.sessionsOpen);
        message.sessionsActive !== undefined &&
            (obj.sessionsActive = message.sessionsActive);
        return obj;
    },

    fromPartial(object: DeepPartial<HiveInfo>): HiveInfo {
        const message = { ...baseHiveInfo } as HiveInfo;
        if (object.available !== undefined && object.available !== null) {
            message.available = object.available;
        } else {
            message.available = false;
        }
        if (
            object.queriesSucceeded !== undefined &&
            object.queriesSucceeded !== null
        ) {
            message.queriesSucceeded = object.queriesSucceeded;
        } else {
            message.queriesSucceeded = 0;
        }
        if (
            object.queriesFailed !== undefined &&
            object.queriesFailed !== null
        ) {
            message.queriesFailed = object.queriesFailed;
        } else {
            message.queriesFailed = 0;
        }
        if (
            object.queriesExecuting !== undefined &&
            object.queriesExecuting !== null
        ) {
            message.queriesExecuting = object.queriesExecuting;
        } else {
            message.queriesExecuting = 0;
        }
        if (object.sessionsOpen !== undefined && object.sessionsOpen !== null) {
            message.sessionsOpen = object.sessionsOpen;
        } else {
            message.sessionsOpen = 0;
        }
        if (
            object.sessionsActive !== undefined &&
            object.sessionsActive !== null
        ) {
            message.sessionsActive = object.sessionsActive;
        } else {
            message.sessionsActive = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(HiveInfo.$type, HiveInfo);

const baseYarnNodeInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.YarnNodeInfo',
    name: '',
    state: '',
    numContainers: 0,
    usedMemoryMb: 0,
    availableMemoryMb: 0,
    updateTime: 0,
};

export const YarnNodeInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.YarnNodeInfo' as const,

    encode(
        message: YarnNodeInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.state !== '') {
            writer.uint32(18).string(message.state);
        }
        if (message.numContainers !== 0) {
            writer.uint32(24).int64(message.numContainers);
        }
        if (message.usedMemoryMb !== 0) {
            writer.uint32(32).int64(message.usedMemoryMb);
        }
        if (message.availableMemoryMb !== 0) {
            writer.uint32(40).int64(message.availableMemoryMb);
        }
        if (message.updateTime !== 0) {
            writer.uint32(48).int64(message.updateTime);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): YarnNodeInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYarnNodeInfo } as YarnNodeInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.state = reader.string();
                    break;
                case 3:
                    message.numContainers = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 4:
                    message.usedMemoryMb = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.availableMemoryMb = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 6:
                    message.updateTime = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): YarnNodeInfo {
        const message = { ...baseYarnNodeInfo } as YarnNodeInfo;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = String(object.state);
        } else {
            message.state = '';
        }
        if (
            object.numContainers !== undefined &&
            object.numContainers !== null
        ) {
            message.numContainers = Number(object.numContainers);
        } else {
            message.numContainers = 0;
        }
        if (object.usedMemoryMb !== undefined && object.usedMemoryMb !== null) {
            message.usedMemoryMb = Number(object.usedMemoryMb);
        } else {
            message.usedMemoryMb = 0;
        }
        if (
            object.availableMemoryMb !== undefined &&
            object.availableMemoryMb !== null
        ) {
            message.availableMemoryMb = Number(object.availableMemoryMb);
        } else {
            message.availableMemoryMb = 0;
        }
        if (object.updateTime !== undefined && object.updateTime !== null) {
            message.updateTime = Number(object.updateTime);
        } else {
            message.updateTime = 0;
        }
        return message;
    },

    toJSON(message: YarnNodeInfo): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.state !== undefined && (obj.state = message.state);
        message.numContainers !== undefined &&
            (obj.numContainers = message.numContainers);
        message.usedMemoryMb !== undefined &&
            (obj.usedMemoryMb = message.usedMemoryMb);
        message.availableMemoryMb !== undefined &&
            (obj.availableMemoryMb = message.availableMemoryMb);
        message.updateTime !== undefined &&
            (obj.updateTime = message.updateTime);
        return obj;
    },

    fromPartial(object: DeepPartial<YarnNodeInfo>): YarnNodeInfo {
        const message = { ...baseYarnNodeInfo } as YarnNodeInfo;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        } else {
            message.state = '';
        }
        if (
            object.numContainers !== undefined &&
            object.numContainers !== null
        ) {
            message.numContainers = object.numContainers;
        } else {
            message.numContainers = 0;
        }
        if (object.usedMemoryMb !== undefined && object.usedMemoryMb !== null) {
            message.usedMemoryMb = object.usedMemoryMb;
        } else {
            message.usedMemoryMb = 0;
        }
        if (
            object.availableMemoryMb !== undefined &&
            object.availableMemoryMb !== null
        ) {
            message.availableMemoryMb = object.availableMemoryMb;
        } else {
            message.availableMemoryMb = 0;
        }
        if (object.updateTime !== undefined && object.updateTime !== null) {
            message.updateTime = object.updateTime;
        } else {
            message.updateTime = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(YarnNodeInfo.$type, YarnNodeInfo);

const baseYarnInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.YarnInfo',
    available: false,
    requestedDecommissionHosts: '',
};

export const YarnInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.YarnInfo' as const,

    encode(
        message: YarnInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.available === true) {
            writer.uint32(8).bool(message.available);
        }
        for (const v of message.liveNodes) {
            YarnNodeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.requestedDecommissionHosts) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): YarnInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseYarnInfo } as YarnInfo;
        message.liveNodes = [];
        message.requestedDecommissionHosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.liveNodes.push(
                        YarnNodeInfo.decode(reader, reader.uint32())
                    );
                    break;
                case 3:
                    message.requestedDecommissionHosts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): YarnInfo {
        const message = { ...baseYarnInfo } as YarnInfo;
        message.liveNodes = [];
        message.requestedDecommissionHosts = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = Boolean(object.available);
        } else {
            message.available = false;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(YarnNodeInfo.fromJSON(e));
            }
        }
        if (
            object.requestedDecommissionHosts !== undefined &&
            object.requestedDecommissionHosts !== null
        ) {
            for (const e of object.requestedDecommissionHosts) {
                message.requestedDecommissionHosts.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: YarnInfo): unknown {
        const obj: any = {};
        message.available !== undefined && (obj.available = message.available);
        if (message.liveNodes) {
            obj.liveNodes = message.liveNodes.map((e) =>
                e ? YarnNodeInfo.toJSON(e) : undefined
            );
        } else {
            obj.liveNodes = [];
        }
        if (message.requestedDecommissionHosts) {
            obj.requestedDecommissionHosts =
                message.requestedDecommissionHosts.map((e) => e);
        } else {
            obj.requestedDecommissionHosts = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<YarnInfo>): YarnInfo {
        const message = { ...baseYarnInfo } as YarnInfo;
        message.liveNodes = [];
        message.requestedDecommissionHosts = [];
        if (object.available !== undefined && object.available !== null) {
            message.available = object.available;
        } else {
            message.available = false;
        }
        if (object.liveNodes !== undefined && object.liveNodes !== null) {
            for (const e of object.liveNodes) {
                message.liveNodes.push(YarnNodeInfo.fromPartial(e));
            }
        }
        if (
            object.requestedDecommissionHosts !== undefined &&
            object.requestedDecommissionHosts !== null
        ) {
            for (const e of object.requestedDecommissionHosts) {
                message.requestedDecommissionHosts.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(YarnInfo.$type, YarnInfo);

const baseZookeeperInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.ZookeeperInfo',
    alive: false,
};

export const ZookeeperInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.ZookeeperInfo' as const,

    encode(
        message: ZookeeperInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ZookeeperInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseZookeeperInfo } as ZookeeperInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ZookeeperInfo {
        const message = { ...baseZookeeperInfo } as ZookeeperInfo;
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = Boolean(object.alive);
        } else {
            message.alive = false;
        }
        return message;
    },

    toJSON(message: ZookeeperInfo): unknown {
        const obj: any = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },

    fromPartial(object: DeepPartial<ZookeeperInfo>): ZookeeperInfo {
        const message = { ...baseZookeeperInfo } as ZookeeperInfo;
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = object.alive;
        } else {
            message.alive = false;
        }
        return message;
    },
};

messageTypeRegistry.set(ZookeeperInfo.$type, ZookeeperInfo);

const baseOozieInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.OozieInfo',
    alive: false,
};

export const OozieInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.OozieInfo' as const,

    encode(
        message: OozieInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OozieInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOozieInfo } as OozieInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OozieInfo {
        const message = { ...baseOozieInfo } as OozieInfo;
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = Boolean(object.alive);
        } else {
            message.alive = false;
        }
        return message;
    },

    toJSON(message: OozieInfo): unknown {
        const obj: any = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },

    fromPartial(object: DeepPartial<OozieInfo>): OozieInfo {
        const message = { ...baseOozieInfo } as OozieInfo;
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = object.alive;
        } else {
            message.alive = false;
        }
        return message;
    },
};

messageTypeRegistry.set(OozieInfo.$type, OozieInfo);

const baseLivyInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.LivyInfo',
    alive: false,
};

export const LivyInfo = {
    $type: 'yandex.cloud.dataproc.manager.v1.LivyInfo' as const,

    encode(
        message: LivyInfo,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.alive === true) {
            writer.uint32(8).bool(message.alive);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LivyInfo {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLivyInfo } as LivyInfo;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LivyInfo {
        const message = { ...baseLivyInfo } as LivyInfo;
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = Boolean(object.alive);
        } else {
            message.alive = false;
        }
        return message;
    },

    toJSON(message: LivyInfo): unknown {
        const obj: any = {};
        message.alive !== undefined && (obj.alive = message.alive);
        return obj;
    },

    fromPartial(object: DeepPartial<LivyInfo>): LivyInfo {
        const message = { ...baseLivyInfo } as LivyInfo;
        if (object.alive !== undefined && object.alive !== null) {
            message.alive = object.alive;
        } else {
            message.alive = false;
        }
        return message;
    },
};

messageTypeRegistry.set(LivyInfo.$type, LivyInfo);

const baseInfo: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.Info',
    reportCount: 0,
};

export const Info = {
    $type: 'yandex.cloud.dataproc.manager.v1.Info' as const,

    encode(
        message: Info,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.hdfs !== undefined) {
            HDFSInfo.encode(message.hdfs, writer.uint32(10).fork()).ldelim();
        }
        if (message.yarn !== undefined) {
            YarnInfo.encode(message.yarn, writer.uint32(18).fork()).ldelim();
        }
        if (message.hive !== undefined) {
            HiveInfo.encode(message.hive, writer.uint32(26).fork()).ldelim();
        }
        if (message.zookeeper !== undefined) {
            ZookeeperInfo.encode(
                message.zookeeper,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.hbase !== undefined) {
            HbaseInfo.encode(message.hbase, writer.uint32(42).fork()).ldelim();
        }
        if (message.oozie !== undefined) {
            OozieInfo.encode(message.oozie, writer.uint32(50).fork()).ldelim();
        }
        if (message.reportCount !== 0) {
            writer.uint32(56).int64(message.reportCount);
        }
        if (message.livy !== undefined) {
            LivyInfo.encode(message.livy, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Info {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInfo } as Info;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hdfs = HDFSInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.yarn = YarnInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.hive = HiveInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.zookeeper = ZookeeperInfo.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.hbase = HbaseInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.oozie = OozieInfo.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.reportCount = longToNumber(reader.int64() as Long);
                    break;
                case 8:
                    message.livy = LivyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Info {
        const message = { ...baseInfo } as Info;
        if (object.hdfs !== undefined && object.hdfs !== null) {
            message.hdfs = HDFSInfo.fromJSON(object.hdfs);
        } else {
            message.hdfs = undefined;
        }
        if (object.yarn !== undefined && object.yarn !== null) {
            message.yarn = YarnInfo.fromJSON(object.yarn);
        } else {
            message.yarn = undefined;
        }
        if (object.hive !== undefined && object.hive !== null) {
            message.hive = HiveInfo.fromJSON(object.hive);
        } else {
            message.hive = undefined;
        }
        if (object.zookeeper !== undefined && object.zookeeper !== null) {
            message.zookeeper = ZookeeperInfo.fromJSON(object.zookeeper);
        } else {
            message.zookeeper = undefined;
        }
        if (object.hbase !== undefined && object.hbase !== null) {
            message.hbase = HbaseInfo.fromJSON(object.hbase);
        } else {
            message.hbase = undefined;
        }
        if (object.oozie !== undefined && object.oozie !== null) {
            message.oozie = OozieInfo.fromJSON(object.oozie);
        } else {
            message.oozie = undefined;
        }
        if (object.reportCount !== undefined && object.reportCount !== null) {
            message.reportCount = Number(object.reportCount);
        } else {
            message.reportCount = 0;
        }
        if (object.livy !== undefined && object.livy !== null) {
            message.livy = LivyInfo.fromJSON(object.livy);
        } else {
            message.livy = undefined;
        }
        return message;
    },

    toJSON(message: Info): unknown {
        const obj: any = {};
        message.hdfs !== undefined &&
            (obj.hdfs = message.hdfs
                ? HDFSInfo.toJSON(message.hdfs)
                : undefined);
        message.yarn !== undefined &&
            (obj.yarn = message.yarn
                ? YarnInfo.toJSON(message.yarn)
                : undefined);
        message.hive !== undefined &&
            (obj.hive = message.hive
                ? HiveInfo.toJSON(message.hive)
                : undefined);
        message.zookeeper !== undefined &&
            (obj.zookeeper = message.zookeeper
                ? ZookeeperInfo.toJSON(message.zookeeper)
                : undefined);
        message.hbase !== undefined &&
            (obj.hbase = message.hbase
                ? HbaseInfo.toJSON(message.hbase)
                : undefined);
        message.oozie !== undefined &&
            (obj.oozie = message.oozie
                ? OozieInfo.toJSON(message.oozie)
                : undefined);
        message.reportCount !== undefined &&
            (obj.reportCount = message.reportCount);
        message.livy !== undefined &&
            (obj.livy = message.livy
                ? LivyInfo.toJSON(message.livy)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Info>): Info {
        const message = { ...baseInfo } as Info;
        if (object.hdfs !== undefined && object.hdfs !== null) {
            message.hdfs = HDFSInfo.fromPartial(object.hdfs);
        } else {
            message.hdfs = undefined;
        }
        if (object.yarn !== undefined && object.yarn !== null) {
            message.yarn = YarnInfo.fromPartial(object.yarn);
        } else {
            message.yarn = undefined;
        }
        if (object.hive !== undefined && object.hive !== null) {
            message.hive = HiveInfo.fromPartial(object.hive);
        } else {
            message.hive = undefined;
        }
        if (object.zookeeper !== undefined && object.zookeeper !== null) {
            message.zookeeper = ZookeeperInfo.fromPartial(object.zookeeper);
        } else {
            message.zookeeper = undefined;
        }
        if (object.hbase !== undefined && object.hbase !== null) {
            message.hbase = HbaseInfo.fromPartial(object.hbase);
        } else {
            message.hbase = undefined;
        }
        if (object.oozie !== undefined && object.oozie !== null) {
            message.oozie = OozieInfo.fromPartial(object.oozie);
        } else {
            message.oozie = undefined;
        }
        if (object.reportCount !== undefined && object.reportCount !== null) {
            message.reportCount = object.reportCount;
        } else {
            message.reportCount = 0;
        }
        if (object.livy !== undefined && object.livy !== null) {
            message.livy = LivyInfo.fromPartial(object.livy);
        } else {
            message.livy = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Info.$type, Info);

const baseReportRequest: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.ReportRequest',
    cid: '',
    topologyRevision: 0,
};

export const ReportRequest = {
    $type: 'yandex.cloud.dataproc.manager.v1.ReportRequest' as const,

    encode(
        message: ReportRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.cid !== '') {
            writer.uint32(10).string(message.cid);
        }
        if (message.topologyRevision !== 0) {
            writer.uint32(16).int64(message.topologyRevision);
        }
        if (message.info !== undefined) {
            Info.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.collectedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.collectedAt),
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReportRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReportRequest } as ReportRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.topologyRevision = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 3:
                    message.info = Info.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.collectedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReportRequest {
        const message = { ...baseReportRequest } as ReportRequest;
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        } else {
            message.cid = '';
        }
        if (
            object.topologyRevision !== undefined &&
            object.topologyRevision !== null
        ) {
            message.topologyRevision = Number(object.topologyRevision);
        } else {
            message.topologyRevision = 0;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = Info.fromJSON(object.info);
        } else {
            message.info = undefined;
        }
        if (object.collectedAt !== undefined && object.collectedAt !== null) {
            message.collectedAt = fromJsonTimestamp(object.collectedAt);
        } else {
            message.collectedAt = undefined;
        }
        return message;
    },

    toJSON(message: ReportRequest): unknown {
        const obj: any = {};
        message.cid !== undefined && (obj.cid = message.cid);
        message.topologyRevision !== undefined &&
            (obj.topologyRevision = message.topologyRevision);
        message.info !== undefined &&
            (obj.info = message.info ? Info.toJSON(message.info) : undefined);
        message.collectedAt !== undefined &&
            (obj.collectedAt = message.collectedAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<ReportRequest>): ReportRequest {
        const message = { ...baseReportRequest } as ReportRequest;
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        } else {
            message.cid = '';
        }
        if (
            object.topologyRevision !== undefined &&
            object.topologyRevision !== null
        ) {
            message.topologyRevision = object.topologyRevision;
        } else {
            message.topologyRevision = 0;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = Info.fromPartial(object.info);
        } else {
            message.info = undefined;
        }
        if (object.collectedAt !== undefined && object.collectedAt !== null) {
            message.collectedAt = object.collectedAt;
        } else {
            message.collectedAt = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(ReportRequest.$type, ReportRequest);

const baseReportReply: object = {
    $type: 'yandex.cloud.dataproc.manager.v1.ReportReply',
    decommissionTimeout: 0,
    yarnHostsToDecommission: '',
    hdfsHostsToDecommission: '',
};

export const ReportReply = {
    $type: 'yandex.cloud.dataproc.manager.v1.ReportReply' as const,

    encode(
        message: ReportReply,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.decommissionTimeout !== 0) {
            writer.uint32(8).int64(message.decommissionTimeout);
        }
        for (const v of message.yarnHostsToDecommission) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.hdfsHostsToDecommission) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ReportReply {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReportReply } as ReportReply;
        message.yarnHostsToDecommission = [];
        message.hdfsHostsToDecommission = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.decommissionTimeout = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 2:
                    message.yarnHostsToDecommission.push(reader.string());
                    break;
                case 3:
                    message.hdfsHostsToDecommission.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ReportReply {
        const message = { ...baseReportReply } as ReportReply;
        message.yarnHostsToDecommission = [];
        message.hdfsHostsToDecommission = [];
        if (
            object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null
        ) {
            message.decommissionTimeout = Number(object.decommissionTimeout);
        } else {
            message.decommissionTimeout = 0;
        }
        if (
            object.yarnHostsToDecommission !== undefined &&
            object.yarnHostsToDecommission !== null
        ) {
            for (const e of object.yarnHostsToDecommission) {
                message.yarnHostsToDecommission.push(String(e));
            }
        }
        if (
            object.hdfsHostsToDecommission !== undefined &&
            object.hdfsHostsToDecommission !== null
        ) {
            for (const e of object.hdfsHostsToDecommission) {
                message.hdfsHostsToDecommission.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: ReportReply): unknown {
        const obj: any = {};
        message.decommissionTimeout !== undefined &&
            (obj.decommissionTimeout = message.decommissionTimeout);
        if (message.yarnHostsToDecommission) {
            obj.yarnHostsToDecommission = message.yarnHostsToDecommission.map(
                (e) => e
            );
        } else {
            obj.yarnHostsToDecommission = [];
        }
        if (message.hdfsHostsToDecommission) {
            obj.hdfsHostsToDecommission = message.hdfsHostsToDecommission.map(
                (e) => e
            );
        } else {
            obj.hdfsHostsToDecommission = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<ReportReply>): ReportReply {
        const message = { ...baseReportReply } as ReportReply;
        message.yarnHostsToDecommission = [];
        message.hdfsHostsToDecommission = [];
        if (
            object.decommissionTimeout !== undefined &&
            object.decommissionTimeout !== null
        ) {
            message.decommissionTimeout = object.decommissionTimeout;
        } else {
            message.decommissionTimeout = 0;
        }
        if (
            object.yarnHostsToDecommission !== undefined &&
            object.yarnHostsToDecommission !== null
        ) {
            for (const e of object.yarnHostsToDecommission) {
                message.yarnHostsToDecommission.push(e);
            }
        }
        if (
            object.hdfsHostsToDecommission !== undefined &&
            object.hdfsHostsToDecommission !== null
        ) {
            for (const e of object.hdfsHostsToDecommission) {
                message.hdfsHostsToDecommission.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(ReportReply.$type, ReportReply);

/** Data Proc manager service defifnition */
export const DataprocManagerServiceService = {
    /** Sends a status report from a host */
    report: {
        path: '/yandex.cloud.dataproc.manager.v1.DataprocManagerService/Report',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ReportRequest) =>
            Buffer.from(ReportRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ReportRequest.decode(value),
        responseSerialize: (value: ReportReply) =>
            Buffer.from(ReportReply.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ReportReply.decode(value),
    },
} as const;

export interface DataprocManagerServiceServer
    extends UntypedServiceImplementation {
    /** Sends a status report from a host */
    report: handleUnaryCall<ReportRequest, ReportReply>;
}

export interface DataprocManagerServiceClient extends Client {
    /** Sends a status report from a host */
    report(
        request: ReportRequest,
        callback: (error: ServiceError | null, response: ReportReply) => void
    ): ClientUnaryCall;
    report(
        request: ReportRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ReportReply) => void
    ): ClientUnaryCall;
    report(
        request: ReportRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ReportReply) => void
    ): ClientUnaryCall;
}

export const DataprocManagerServiceClient = makeGenericClientConstructor(
    DataprocManagerServiceService,
    'yandex.cloud.dataproc.manager.v1.DataprocManagerService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): DataprocManagerServiceClient;
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
