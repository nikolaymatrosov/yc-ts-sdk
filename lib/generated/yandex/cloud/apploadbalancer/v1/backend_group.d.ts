import { Duration } from '../../../../google/protobuf/duration';
import { Payload } from '../../../../yandex/cloud/apploadbalancer/v1/payload';
import { ValidationContext } from '../../../../yandex/cloud/apploadbalancer/v1/tls';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
export interface BackendGroup {
    /** Output only. ID of the backend group. */
    id: string;
    /** The name is unique within the folder. 3-63 characters long. */
    name: string;
    /** Description of the backend group. 0-256 characters long. */
    description: string;
    /** ID of the folder that the backend group belongs to. */
    folderId: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    http: HttpBackendGroup | undefined;
    grpc: GrpcBackendGroup | undefined;
    /** Creation timestamp for the backend group. */
    createdAt: Date | undefined;
}
export interface BackendGroup_LabelsEntry {
    key: string;
    value: string;
}
export interface HttpBackendGroup {
    backends: HttpBackend[];
}
export interface GrpcBackendGroup {
    backends: GrpcBackend[];
}
export interface HeaderSessionAffinity {
    headerName: string;
}
export interface CookieSessionAffinity {
    name: string;
    /** If not set, session cookie will be used (not persisted between browser restarts). */
    ttl: Duration | undefined;
}
export interface ConnectionSessionAffinity {
    sourceIp: boolean;
}
export interface LoadBalancingConfig {
    /**
     * If percentage of healthy hosts in the backend is lower than panic_threshold,
     * traffic will be routed to all backends no matter what the health status is.
     * This helps to avoid healthy backends overloading  when everything is bad.
     * zero means no panic threshold.
     */
    panicThreshold: number;
    /**
     * Percent of traffic to be sent to the same availability zone.
     * The rest will be equally divided between other zones.
     */
    localityAwareRoutingPercent: number;
    /**
     * If set, will route requests only to the same availability zone.
     * Balancer won't know about endpoints in other zones.
     */
    strictLocality: boolean;
}
export interface HttpBackend {
    /** Name. */
    name: string;
    /**
     * Traffic will be split between backends of the same BackendGroup according to
     * their weights.
     * If set to zero, backend will be disabled.
     * If not set in all backends, they all will have equal weights.
     * Must either set or unset in all backeds of the group.
     */
    backendWeight: number | undefined;
    loadBalancingConfig: LoadBalancingConfig | undefined;
    /** Port for all targets from target group. */
    port: number;
    /** References target groups for the backend. */
    targetGroups: TargetGroupsBackend | undefined;
    /** No health checks means no active health checking will be performed. */
    healthchecks: HealthCheck[];
    /** TLS settings for the upstream. */
    tls: BackendTls | undefined;
    /**
     * Enables HTTP2 for upstream requests.
     * If not set, HTTP 1.1 will be used by default.
     */
    useHttp2: boolean;
}
export interface GrpcBackend {
    /** Name. */
    name: string;
    /**
     * Traffic will be split between backends of the same BackendGroup according to
     * their weights.
     * If set to zero, backend will be disabled.
     * If not set in all backends, they all will have equal weights.
     * Must either set or unset in all backeds of the group.
     */
    backendWeight: number | undefined;
    loadBalancingConfig: LoadBalancingConfig | undefined;
    /** Port for all targets from target group. */
    port: number;
    /** References target groups for the backend. */
    targetGroups: TargetGroupsBackend | undefined;
    /** No health checks means no active health checking will be performed. */
    healthchecks: HealthCheck[];
    /** TLS settings for the upstream. */
    tls: BackendTls | undefined;
}
export interface TargetGroupsBackend {
    targetGroupIds: string[];
}
export interface BackendTls {
    /** SNI string for TLS connections. */
    sni: string;
    /** Validation context for backend TLS connections. */
    validationContext: ValidationContext | undefined;
}
/** Active health check. */
export interface HealthCheck {
    /** Time to wait for a health check response. */
    timeout: Duration | undefined;
    /** Interval between health checks. */
    interval: Duration | undefined;
    /**
     * An optional jitter amount as a percentage of interval.
     * If specified, during every interval value of
     * (interval_ms * interval_jitter_percent / 100) will be added to the wait time.
     */
    intervalJitterPercent: number;
    /**
     * Number of consecutive successful health checks required to promote endpoint
     * into the healthy state. 0 means 1.
     * Note that during startup, only a single successful health check is required to mark a host healthy.
     */
    healthyThreshold: number;
    /**
     * Number of consecutive failed health checks required to demote endpoint
     * into the unhealthy state. 0 means 1.
     * Note that for HTTP health checks, a single 503 immediately makes endpoint unhealthy.
     */
    unhealthyThreshold: number;
    /** Optional alternative port for health checking. */
    healthcheckPort: number;
    stream: HealthCheck_StreamHealthCheck | undefined;
    http: HealthCheck_HttpHealthCheck | undefined;
    grpc: HealthCheck_GrpcHealthCheck | undefined;
}
/** TCP (+TLS) health check ("Stream protocol HC"). */
export interface HealthCheck_StreamHealthCheck {
    /**
     * Optional message to send.
     * If empty, it's a connect-only health check.
     */
    send: Payload | undefined;
    /** Optional text to search in reply. */
    receive: Payload | undefined;
}
export interface HealthCheck_HttpHealthCheck {
    /** Optional "Host" HTTP header value. */
    host: string;
    /** HTTP path. */
    path: string;
    /** If set, health checks will use HTTP/2. */
    useHttp2: boolean;
}
export interface HealthCheck_GrpcHealthCheck {
    /** Optional service name for grpc.health.v1.HealthCheckRequest message. */
    serviceName: string;
}
export declare const BackendGroup: {
    encode(message: BackendGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackendGroup;
    fromJSON(object: any): BackendGroup;
    toJSON(message: BackendGroup): unknown;
    fromPartial(object: DeepPartial<BackendGroup>): BackendGroup;
};
export declare const BackendGroup_LabelsEntry: {
    encode(message: BackendGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackendGroup_LabelsEntry;
    fromJSON(object: any): BackendGroup_LabelsEntry;
    toJSON(message: BackendGroup_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<BackendGroup_LabelsEntry>): BackendGroup_LabelsEntry;
};
export declare const HttpBackendGroup: {
    encode(message: HttpBackendGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpBackendGroup;
    fromJSON(object: any): HttpBackendGroup;
    toJSON(message: HttpBackendGroup): unknown;
    fromPartial(object: DeepPartial<HttpBackendGroup>): HttpBackendGroup;
};
export declare const GrpcBackendGroup: {
    encode(message: GrpcBackendGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcBackendGroup;
    fromJSON(object: any): GrpcBackendGroup;
    toJSON(message: GrpcBackendGroup): unknown;
    fromPartial(object: DeepPartial<GrpcBackendGroup>): GrpcBackendGroup;
};
export declare const HeaderSessionAffinity: {
    encode(message: HeaderSessionAffinity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeaderSessionAffinity;
    fromJSON(object: any): HeaderSessionAffinity;
    toJSON(message: HeaderSessionAffinity): unknown;
    fromPartial(object: DeepPartial<HeaderSessionAffinity>): HeaderSessionAffinity;
};
export declare const CookieSessionAffinity: {
    encode(message: CookieSessionAffinity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CookieSessionAffinity;
    fromJSON(object: any): CookieSessionAffinity;
    toJSON(message: CookieSessionAffinity): unknown;
    fromPartial(object: DeepPartial<CookieSessionAffinity>): CookieSessionAffinity;
};
export declare const ConnectionSessionAffinity: {
    encode(message: ConnectionSessionAffinity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectionSessionAffinity;
    fromJSON(object: any): ConnectionSessionAffinity;
    toJSON(message: ConnectionSessionAffinity): unknown;
    fromPartial(object: DeepPartial<ConnectionSessionAffinity>): ConnectionSessionAffinity;
};
export declare const LoadBalancingConfig: {
    encode(message: LoadBalancingConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoadBalancingConfig;
    fromJSON(object: any): LoadBalancingConfig;
    toJSON(message: LoadBalancingConfig): unknown;
    fromPartial(object: DeepPartial<LoadBalancingConfig>): LoadBalancingConfig;
};
export declare const HttpBackend: {
    encode(message: HttpBackend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpBackend;
    fromJSON(object: any): HttpBackend;
    toJSON(message: HttpBackend): unknown;
    fromPartial(object: DeepPartial<HttpBackend>): HttpBackend;
};
export declare const GrpcBackend: {
    encode(message: GrpcBackend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcBackend;
    fromJSON(object: any): GrpcBackend;
    toJSON(message: GrpcBackend): unknown;
    fromPartial(object: DeepPartial<GrpcBackend>): GrpcBackend;
};
export declare const TargetGroupsBackend: {
    encode(message: TargetGroupsBackend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroupsBackend;
    fromJSON(object: any): TargetGroupsBackend;
    toJSON(message: TargetGroupsBackend): unknown;
    fromPartial(object: DeepPartial<TargetGroupsBackend>): TargetGroupsBackend;
};
export declare const BackendTls: {
    encode(message: BackendTls, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackendTls;
    fromJSON(object: any): BackendTls;
    toJSON(message: BackendTls): unknown;
    fromPartial(object: DeepPartial<BackendTls>): BackendTls;
};
export declare const HealthCheck: {
    encode(message: HealthCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck;
    fromJSON(object: any): HealthCheck;
    toJSON(message: HealthCheck): unknown;
    fromPartial(object: DeepPartial<HealthCheck>): HealthCheck;
};
export declare const HealthCheck_StreamHealthCheck: {
    encode(message: HealthCheck_StreamHealthCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck_StreamHealthCheck;
    fromJSON(object: any): HealthCheck_StreamHealthCheck;
    toJSON(message: HealthCheck_StreamHealthCheck): unknown;
    fromPartial(object: DeepPartial<HealthCheck_StreamHealthCheck>): HealthCheck_StreamHealthCheck;
};
export declare const HealthCheck_HttpHealthCheck: {
    encode(message: HealthCheck_HttpHealthCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck_HttpHealthCheck;
    fromJSON(object: any): HealthCheck_HttpHealthCheck;
    toJSON(message: HealthCheck_HttpHealthCheck): unknown;
    fromPartial(object: DeepPartial<HealthCheck_HttpHealthCheck>): HealthCheck_HttpHealthCheck;
};
export declare const HealthCheck_GrpcHealthCheck: {
    encode(message: HealthCheck_GrpcHealthCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck_GrpcHealthCheck;
    fromJSON(object: any): HealthCheck_GrpcHealthCheck;
    toJSON(message: HealthCheck_GrpcHealthCheck): unknown;
    fromPartial(object: DeepPartial<HealthCheck_GrpcHealthCheck>): HealthCheck_GrpcHealthCheck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
