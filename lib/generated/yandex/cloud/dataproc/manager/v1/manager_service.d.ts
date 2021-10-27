/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.dataproc.manager.v1";
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
export declare const HbaseNodeInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseNodeInfo";
    encode(message: HbaseNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HbaseNodeInfo;
    fromJSON(object: any): HbaseNodeInfo;
    toJSON(message: HbaseNodeInfo): unknown;
    fromPartial(object: DeepPartial<HbaseNodeInfo>): HbaseNodeInfo;
};
export declare const HbaseInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.HbaseInfo";
    encode(message: HbaseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HbaseInfo;
    fromJSON(object: any): HbaseInfo;
    toJSON(message: HbaseInfo): unknown;
    fromPartial(object: DeepPartial<HbaseInfo>): HbaseInfo;
};
export declare const HDFSNodeInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSNodeInfo";
    encode(message: HDFSNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HDFSNodeInfo;
    fromJSON(object: any): HDFSNodeInfo;
    toJSON(message: HDFSNodeInfo): unknown;
    fromPartial(object: DeepPartial<HDFSNodeInfo>): HDFSNodeInfo;
};
export declare const HDFSInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.HDFSInfo";
    encode(message: HDFSInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HDFSInfo;
    fromJSON(object: any): HDFSInfo;
    toJSON(message: HDFSInfo): unknown;
    fromPartial(object: DeepPartial<HDFSInfo>): HDFSInfo;
};
export declare const HiveInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.HiveInfo";
    encode(message: HiveInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HiveInfo;
    fromJSON(object: any): HiveInfo;
    toJSON(message: HiveInfo): unknown;
    fromPartial(object: DeepPartial<HiveInfo>): HiveInfo;
};
export declare const YarnNodeInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.YarnNodeInfo";
    encode(message: YarnNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): YarnNodeInfo;
    fromJSON(object: any): YarnNodeInfo;
    toJSON(message: YarnNodeInfo): unknown;
    fromPartial(object: DeepPartial<YarnNodeInfo>): YarnNodeInfo;
};
export declare const YarnInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.YarnInfo";
    encode(message: YarnInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): YarnInfo;
    fromJSON(object: any): YarnInfo;
    toJSON(message: YarnInfo): unknown;
    fromPartial(object: DeepPartial<YarnInfo>): YarnInfo;
};
export declare const ZookeeperInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.ZookeeperInfo";
    encode(message: ZookeeperInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ZookeeperInfo;
    fromJSON(object: any): ZookeeperInfo;
    toJSON(message: ZookeeperInfo): unknown;
    fromPartial(object: DeepPartial<ZookeeperInfo>): ZookeeperInfo;
};
export declare const OozieInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.OozieInfo";
    encode(message: OozieInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OozieInfo;
    fromJSON(object: any): OozieInfo;
    toJSON(message: OozieInfo): unknown;
    fromPartial(object: DeepPartial<OozieInfo>): OozieInfo;
};
export declare const LivyInfo: {
    $type: "yandex.cloud.dataproc.manager.v1.LivyInfo";
    encode(message: LivyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LivyInfo;
    fromJSON(object: any): LivyInfo;
    toJSON(message: LivyInfo): unknown;
    fromPartial(object: DeepPartial<LivyInfo>): LivyInfo;
};
export declare const Info: {
    $type: "yandex.cloud.dataproc.manager.v1.Info";
    encode(message: Info, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Info;
    fromJSON(object: any): Info;
    toJSON(message: Info): unknown;
    fromPartial(object: DeepPartial<Info>): Info;
};
export declare const ReportRequest: {
    $type: "yandex.cloud.dataproc.manager.v1.ReportRequest";
    encode(message: ReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReportRequest;
    fromJSON(object: any): ReportRequest;
    toJSON(message: ReportRequest): unknown;
    fromPartial(object: DeepPartial<ReportRequest>): ReportRequest;
};
export declare const ReportReply: {
    $type: "yandex.cloud.dataproc.manager.v1.ReportReply";
    encode(message: ReportReply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ReportReply;
    fromJSON(object: any): ReportReply;
    toJSON(message: ReportReply): unknown;
    fromPartial(object: DeepPartial<ReportReply>): ReportReply;
};
/** Data Proc manager service defifnition */
export declare const DataprocManagerServiceService: {
    /** Sends a status report from a host */
    readonly report: {
        readonly path: "/yandex.cloud.dataproc.manager.v1.DataprocManagerService/Report";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ReportRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ReportRequest;
        readonly responseSerialize: (value: ReportReply) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ReportReply;
    };
};
export interface DataprocManagerServiceServer extends UntypedServiceImplementation {
    /** Sends a status report from a host */
    report: handleUnaryCall<ReportRequest, ReportReply>;
}
export interface DataprocManagerServiceClient extends Client {
    /** Sends a status report from a host */
    report(request: ReportRequest, callback: (error: ServiceError | null, response: ReportReply) => void): ClientUnaryCall;
    report(request: ReportRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ReportReply) => void): ClientUnaryCall;
    report(request: ReportRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ReportReply) => void): ClientUnaryCall;
}
export declare const DataprocManagerServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => DataprocManagerServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
