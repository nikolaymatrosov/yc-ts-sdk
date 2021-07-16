import { Duration } from '../../../../google/protobuf/duration';
import { Payload } from '../../../../yandex/cloud/apploadbalancer/v1/payload';
import { ValidationContext } from '../../../../yandex/cloud/apploadbalancer/v1/tls';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/**
 * A backend group resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/backend-group).
 */
export interface BackendGroup {
    /** ID of the backend group. Generated at creation time. */
    id: string;
    /** Name of the backend group. The name is unique within the folder. The string length in characters is 3-63. */
    name: string;
    /** Description of the backend group. The string is 0-256 characters long. */
    description: string;
    /** ID of the folder that the backend group belongs to. */
    folderId: string;
    /**
     * Backend group labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     * The maximum number of labels is 64.
     */
    labels: {
        [key: string]: string;
    };
    /** List of HTTP backends that the backend group consists of. */
    http: HttpBackendGroup | undefined;
    /** List of gRPC backends that the backend group consists of. */
    grpc: GrpcBackendGroup | undefined;
    /** Creation timestamp. */
    createdAt: Date | undefined;
}
export interface BackendGroup_LabelsEntry {
    key: string;
    value: string;
}
/** An HTTP backend group resource. */
export interface HttpBackendGroup {
    /** List of HTTP backends. */
    backends: HttpBackend[];
}
/** A gRPC backend group resource. */
export interface GrpcBackendGroup {
    /** List of gRPC backends. */
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
/** A load balancing configuration resource. */
export interface LoadBalancingConfig {
    /**
     * Threshold for panic mode.
     *
     * If percentage of healthy backends in the group drops below threshold,
     * panic mode will be activated and traffic will be routed to all backends, regardless of their health check status.
     * This helps to avoid overloading healthy backends.
     * For details about panic mode, see [documentation](/docs/application-load-balancer/concepts/backend-group#panic-mode).
     *
     * If the value is `0`, panic mode will never be activated and traffic is routed only to healthy backends at all times.
     *
     * Default value: `0`.
     */
    panicThreshold: number;
    /**
     * Percentage of traffic that a load balancer node sends to healthy backends in its availability zone.
     * The rest is divided equally between other zones. For details about zone-aware routing, see [documentation](/docs/application-load-balancer/concepts/backend-group#locality).
     *
     * If there are no healthy backends in an availability zone, all the traffic is divided between other zones.
     *
     * If [strict_locality] is `true`, the specified value is ignored.
     * A load balancer node sends all the traffic within its availability zone, regardless of backends' health.
     *
     * Default value: `0`.
     */
    localityAwareRoutingPercent: number;
    /**
     * Specifies whether a load balancer node should only send traffic to backends in its availability zone,
     * regardless of their health, and ignore backends in other zones.
     *
     * If set to `true` and there are no healthy backends in the zone, the node in this zone will respond
     * to incoming traffic with errors.
     * For details about strict locality, see [documentation](/docs/application-load-balancer/concepts/backend-group#locality).
     *
     * If `strict_locality` is `true`, the value specified in [locality_aware_routing_percent] is ignored.
     *
     * Default value: `false`.
     */
    strictLocality: boolean;
}
/** An HTTP backend resource. */
export interface HttpBackend {
    /** Name of the backend. */
    name: string;
    /**
     * Backend weight. Traffic is distributed between backends of a backend group according to their weights.
     *
     * Weights must be set either for all backends in a group or for none of them.
     * Setting no weights is the same as setting equal non-zero weights for all backends.
     *
     * If set to `0`, traffic is not sent to the backend.
     */
    backendWeight: number | undefined;
    /** Load balancing configuration for the backend. */
    loadBalancingConfig: LoadBalancingConfig | undefined;
    /** Port used by all targets to receive traffic. */
    port: number;
    /** Target groups that belong to the backend. */
    targetGroups: TargetGroupsBackend | undefined;
    /**
     * Health checks to perform on targets from target groups.
     * For details about health checking, see [documentation](/docs/application-load-balancer/concepts/backend-group#health-checks).
     *
     * If no health checks are specified, active health checking is not performed.
     */
    healthchecks: HealthCheck[];
    /**
     * Settings for TLS connections between load balancer nodes and backend targets.
     *
     * If specified, the load balancer establishes HTTPS (HTTP over TLS) connections with targets
     * and compares received certificates with the one specified in [BackendTls.validation_context].
     * If not specified, the load balancer establishes unencrypted HTTP connections with targets.
     */
    tls: BackendTls | undefined;
    /**
     * Enables HTTP/2 usage in connections between load balancer nodes and backend targets.
     *
     * Default value: `false`, HTTP/1.1 is used.
     */
    useHttp2: boolean;
}
/** A gRPC backend resource. */
export interface GrpcBackend {
    /** Name of the backend. */
    name: string;
    /**
     * Backend weight. Traffic is distributed between backends of a backend group according to their weights.
     *
     * Weights must be set either for all backends of a group or for none of them.
     * Setting no weights is the same as setting equal non-zero weights for all backends.
     *
     * If set to `0`, traffic is not sent to the backend.
     */
    backendWeight: number | undefined;
    /** Load balancing configuration for the backend. */
    loadBalancingConfig: LoadBalancingConfig | undefined;
    /** Port used by all targets to receive traffic. */
    port: number;
    /** Target groups that belong to the backend. */
    targetGroups: TargetGroupsBackend | undefined;
    /**
     * Health checks to perform on targets from target groups.
     * For details about health checking, see [documentation](/docs/application-load-balancer/concepts/backend-group#health-checks).
     *
     * If no health checks are specified, active health checking is not performed.
     */
    healthchecks: HealthCheck[];
    /**
     * Settings for TLS connections between load balancer nodes and backend targets.
     *
     * If specified, the load balancer establishes HTTPS (HTTP over TLS) connections with targets
     * and compares received certificates with the one specified in [BackendTls.validation_context].
     * If not specified, the load balancer establishes unencrypted HTTP connections with targets.
     */
    tls: BackendTls | undefined;
}
/** A resource for target groups that belong to the backend. */
export interface TargetGroupsBackend {
    /**
     * List of ID's of target groups that belong to the backend.
     *
     * To get the ID's of all available target groups, make a [TargetGroupService.List] request.
     */
    targetGroupIds: string[];
}
/** A resource for backend TLS settings. */
export interface BackendTls {
    /** Server Name Indication (SNI) string for TLS connections. */
    sni: string;
    /** Validation context for TLS connections. */
    validationContext: ValidationContext | undefined;
}
/**
 * A health check resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/backend-group#health-checks).
 */
export interface HealthCheck {
    /**
     * Health check timeout.
     *
     * The timeout is the time allowed for the target to respond to a check.
     * If the target doesn't respond in time, the check is considered failed.
     */
    timeout: Duration | undefined;
    /** Base interval between consecutive health checks. */
    interval: Duration | undefined;
    intervalJitterPercent: number;
    /**
     * Number of consecutive successful health checks required to mark an unhealthy target as healthy.
     *
     * Both `0` and `1` values amount to one successful check required.
     *
     * The value is ignored when a load balancer is initialized; a target is marked healthy after one successful check.
     *
     * Default value: `0`.
     */
    healthyThreshold: number;
    /**
     * Number of consecutive failed health checks required to mark a healthy target as unhealthy.
     *
     * Both `0` and `1` values amount to one unsuccessful check required.
     *
     * The value is ignored if a health check is failed due to an HTTP `503 Service Unavailable` response from the target
     * (not applicable to TCP stream health checks). The target is immediately marked unhealthy.
     *
     * Default value: `0`.
     */
    unhealthyThreshold: number;
    /**
     * Port used for health checks.
     *
     * If not specified, the backend port ([HttpBackend.port] or [GrpcBackend.port]) is used for health checks.
     */
    healthcheckPort: number;
    /** TCP stream health check settings. */
    stream: HealthCheck_StreamHealthCheck | undefined;
    /** HTTP health check settings. */
    http: HealthCheck_HttpHealthCheck | undefined;
    /** gRPC health check settings. */
    grpc: HealthCheck_GrpcHealthCheck | undefined;
}
/** A resource for TCP stream health check settings. */
export interface HealthCheck_StreamHealthCheck {
    /**
     * Message sent to targets during TCP data transfer.
     *
     * If not specified, no data is sent to the target.
     */
    send: Payload | undefined;
    /**
     * Data that must be contained in the messages received from targets for a successful health check.
     *
     * If not specified, no messages are expected from targets, and those that are received are not checked.
     */
    receive: Payload | undefined;
}
/** A resource for HTTP health check settings. */
export interface HealthCheck_HttpHealthCheck {
    /** Value for the HTTP/1.1 `Host` header or the HTTP/2 `:authority` pseudo-header used in requests to targets. */
    host: string;
    /**
     * HTTP path used in requests to targets: request URI for HTTP/1.1 request line
     * or value for the HTTP/2 `:path` pseudo-header.
     */
    path: string;
    /**
     * Enables HTTP/2 usage in health checks.
     *
     * Default value: `false`, HTTP/1.1 is used.
     */
    useHttp2: boolean;
}
/** A resource for gRPC health check settings. */
export interface HealthCheck_GrpcHealthCheck {
    /**
     * Name of the gRPC service to be checked.
     *
     * If not specified, overall health is checked.
     *
     * For details about the concept, see [GRPC Health Checking Protocol](https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
     */
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
