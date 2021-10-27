import { Duration } from '../../../../google/protobuf/duration';
import { Payload } from '../../../../yandex/cloud/apploadbalancer/v1/payload';
import { ValidationContext } from '../../../../yandex/cloud/apploadbalancer/v1/tls';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/**
 * A load balancing mode resource.
 * For details about the concept, see
 * [documentation](/docs/application-load-balancer/concepts/backend-group#balancing-mode).
 */
export declare enum LoadBalancingMode {
    /**
     * ROUND_ROBIN - Round robin load balancing mode.
     *
     * All endpoints of the backend take their turns to receive requests attributed to the backend.
     */
    ROUND_ROBIN = 0,
    /**
     * RANDOM - Random load balancing mode. Default value.
     *
     * For a request attributed to the backend, an endpoint that receives it is picked at random.
     */
    RANDOM = 1,
    /**
     * LEAST_REQUEST - Least request load balancing mode.
     *
     * To pick an endpoint that receives a request attributed to the backend, the power of two choices algorithm is used;
     * that is, two endpoints are picked at random, and the request is sent to the one which has the fewest active
     * requests.
     */
    LEAST_REQUEST = 2,
    /**
     * MAGLEV_HASH - Maglev hashing load balancing mode, used only if session affinity is working for the backend group.
     *
     * Each endpoint is hashed, and a hash table with 65537 rows is filled accordingly, so that every endpoint occupies
     * the same amount of rows. An attribute of each request, specified in session affinity configuration of the backend
     * group, is also hashed by the same function. The row with the same number as the resulting value is looked up in the
     * table to determine the endpoint that receives the request.
     *
     * If session affinity is not working for the backend group (i.e. it is not configured or the group contains more
     * than one backend with positive weight), endpoints for backends with `MAGLEV_HASH` load balancing mode are picked at
     * `RANDOM` instead.
     */
    MAGLEV_HASH = 3,
    UNRECOGNIZED = -1
}
export declare function loadBalancingModeFromJSON(object: any): LoadBalancingMode;
export declare function loadBalancingModeToJSON(object: LoadBalancingMode): string;
/**
 * A backend group resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/backend-group).
 */
export interface BackendGroup {
    $type: 'yandex.cloud.apploadbalancer.v1.BackendGroup';
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
    /** List of stream backends that the backend group consist of. */
    stream: StreamBackendGroup | undefined;
    /** Creation timestamp. */
    createdAt: Date | undefined;
}
export interface BackendGroup_LabelsEntry {
    $type: 'yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry';
    key: string;
    value: string;
}
/** A Stream backend group resource. */
export interface StreamBackendGroup {
    $type: 'yandex.cloud.apploadbalancer.v1.StreamBackendGroup';
    backends: StreamBackend[];
    connection: ConnectionSessionAffinity | undefined;
}
/** An HTTP backend group resource. */
export interface HttpBackendGroup {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpBackendGroup';
    /** List of HTTP backends. */
    backends: HttpBackend[];
    /**
     * Connection-based session affinity configuration.
     *
     * For now, a connection is defined only by an IP address of the client.
     */
    connection: ConnectionSessionAffinity | undefined;
    /** HTTP-header-field-based session affinity configuration. */
    header: HeaderSessionAffinity | undefined;
    /** Cookie-based session affinity configuration. */
    cookie: CookieSessionAffinity | undefined;
}
/** A gRPC backend group resource. */
export interface GrpcBackendGroup {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcBackendGroup';
    /** List of gRPC backends. */
    backends: GrpcBackend[];
    /**
     * Connection-based session affinity configuration.
     *
     * For now, a connection is defined only by an IP address of the client.
     */
    connection: ConnectionSessionAffinity | undefined;
    /** HTTP-header-field-based session affinity configuration. */
    header: HeaderSessionAffinity | undefined;
    /** Cookie-based session affinity configuration. */
    cookie: CookieSessionAffinity | undefined;
}
/** A resource for HTTP-header-field-based session affinity configuration. */
export interface HeaderSessionAffinity {
    $type: 'yandex.cloud.apploadbalancer.v1.HeaderSessionAffinity';
    /** Name of the HTTP header field that is used for session affinity. */
    headerName: string;
}
/** A resource for cookie-based session affinity configuration. */
export interface CookieSessionAffinity {
    $type: 'yandex.cloud.apploadbalancer.v1.CookieSessionAffinity';
    /** Name of the cookie that is used for session affinity. */
    name: string;
    /**
     * Maximum age of cookies that are generated for sessions (persistent cookies).
     *
     * If not set, session cookies are used, which are stored by clients in temporary memory and are deleted
     * on client restarts.
     */
    ttl: Duration | undefined;
}
/** A resource for connection-based session affinity configuration. */
export interface ConnectionSessionAffinity {
    $type: 'yandex.cloud.apploadbalancer.v1.ConnectionSessionAffinity';
    /** Specifies whether an IP address of the client is used to define a connection for session affinity. */
    sourceIp: boolean;
}
/** A load balancing configuration resource. */
export interface LoadBalancingConfig {
    $type: 'yandex.cloud.apploadbalancer.v1.LoadBalancingConfig';
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
    /**
     * Load balancing mode for the backend.
     *
     * For detals about load balancing modes, see
     * [documentation](/docs/application-load-balancer/concepts/backend-group#balancing-mode).
     */
    mode: LoadBalancingMode;
}
/** A stream backend resource. */
export interface StreamBackend {
    $type: 'yandex.cloud.apploadbalancer.v1.StreamBackend';
    name: string;
    /** If not set, backend will be disabled. */
    backendWeight: number | undefined;
    loadBalancingConfig: LoadBalancingConfig | undefined;
    /** Optional alternative port for all targets. */
    port: number;
    targetGroups: TargetGroupsBackend | undefined;
    healthchecks: HealthCheck[];
    tls: BackendTls | undefined;
}
/** An HTTP backend resource. */
export interface HttpBackend {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpBackend';
    /** Name of the backend. */
    name: string;
    /**
     * Backend weight. Traffic is distributed between backends of a backend group according to their weights.
     *
     * Weights must be set either for all backends in a group or for none of them.
     * Setting no weights is the same as setting equal non-zero weights for all backends.
     *
     * If the weight is non-positive, traffic is not sent to the backend.
     */
    backendWeight: number | undefined;
    /** Load balancing configuration for the backend. */
    loadBalancingConfig: LoadBalancingConfig | undefined;
    /** Port used by all targets to receive traffic. */
    port: number;
    /**
     * Target groups that belong to the backend. For details about target groups, see
     * [documentation](/docs/application-load-balancer/concepts/target-group).
     */
    targetGroups: TargetGroupsBackend | undefined;
    /**
     * Object Storage bucket to use as the backend. For details about buckets, see
     * [documentation](/docs/storage/concepts/bucket).
     *
     * If a bucket is used as a backend, the list of bucket objects and the objects themselves must be publicly
     * accessible. For instructions, see [documentation](/docs/storage/operations/buckets/bucket-availability).
     */
    storageBucket: StorageBucketBackend | undefined;
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
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcBackend';
    /** Name of the backend. */
    name: string;
    /**
     * Backend weight. Traffic is distributed between backends of a backend group according to their weights.
     *
     * Weights must be set either for all backends of a group or for none of them.
     * Setting no weights is the same as setting equal non-zero weights for all backends.
     *
     * If the weight is non-positive, traffic is not sent to the backend.
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
    $type: 'yandex.cloud.apploadbalancer.v1.TargetGroupsBackend';
    /**
     * List of ID's of target groups that belong to the backend.
     *
     * To get the ID's of all available target groups, make a [TargetGroupService.List] request.
     */
    targetGroupIds: string[];
}
/** A resource for backend TLS settings. */
export interface BackendTls {
    $type: 'yandex.cloud.apploadbalancer.v1.BackendTls';
    /** Server Name Indication (SNI) string for TLS connections. */
    sni: string;
    /** Validation context for TLS connections. */
    validationContext: ValidationContext | undefined;
}
/**
 * A resource for Object Storage bucket used as a backend. For details about the concept,
 * see [documentation](/docs/storage/concepts/bucket).
 */
export interface StorageBucketBackend {
    $type: 'yandex.cloud.apploadbalancer.v1.StorageBucketBackend';
    /** Name of the bucket. */
    bucket: string;
}
/**
 * A health check resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/backend-group#health-checks).
 */
export interface HealthCheck {
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck';
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
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck.StreamHealthCheck';
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
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck.HttpHealthCheck';
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
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck.GrpcHealthCheck';
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
    $type: "yandex.cloud.apploadbalancer.v1.BackendGroup";
    encode(message: BackendGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackendGroup;
    fromJSON(object: any): BackendGroup;
    toJSON(message: BackendGroup): unknown;
    fromPartial(object: DeepPartial<BackendGroup>): BackendGroup;
};
export declare const BackendGroup_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry";
    encode(message: BackendGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackendGroup_LabelsEntry;
    fromJSON(object: any): BackendGroup_LabelsEntry;
    toJSON(message: BackendGroup_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<BackendGroup_LabelsEntry>): BackendGroup_LabelsEntry;
};
export declare const StreamBackendGroup: {
    $type: "yandex.cloud.apploadbalancer.v1.StreamBackendGroup";
    encode(message: StreamBackendGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamBackendGroup;
    fromJSON(object: any): StreamBackendGroup;
    toJSON(message: StreamBackendGroup): unknown;
    fromPartial(object: DeepPartial<StreamBackendGroup>): StreamBackendGroup;
};
export declare const HttpBackendGroup: {
    $type: "yandex.cloud.apploadbalancer.v1.HttpBackendGroup";
    encode(message: HttpBackendGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpBackendGroup;
    fromJSON(object: any): HttpBackendGroup;
    toJSON(message: HttpBackendGroup): unknown;
    fromPartial(object: DeepPartial<HttpBackendGroup>): HttpBackendGroup;
};
export declare const GrpcBackendGroup: {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcBackendGroup";
    encode(message: GrpcBackendGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcBackendGroup;
    fromJSON(object: any): GrpcBackendGroup;
    toJSON(message: GrpcBackendGroup): unknown;
    fromPartial(object: DeepPartial<GrpcBackendGroup>): GrpcBackendGroup;
};
export declare const HeaderSessionAffinity: {
    $type: "yandex.cloud.apploadbalancer.v1.HeaderSessionAffinity";
    encode(message: HeaderSessionAffinity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeaderSessionAffinity;
    fromJSON(object: any): HeaderSessionAffinity;
    toJSON(message: HeaderSessionAffinity): unknown;
    fromPartial(object: DeepPartial<HeaderSessionAffinity>): HeaderSessionAffinity;
};
export declare const CookieSessionAffinity: {
    $type: "yandex.cloud.apploadbalancer.v1.CookieSessionAffinity";
    encode(message: CookieSessionAffinity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CookieSessionAffinity;
    fromJSON(object: any): CookieSessionAffinity;
    toJSON(message: CookieSessionAffinity): unknown;
    fromPartial(object: DeepPartial<CookieSessionAffinity>): CookieSessionAffinity;
};
export declare const ConnectionSessionAffinity: {
    $type: "yandex.cloud.apploadbalancer.v1.ConnectionSessionAffinity";
    encode(message: ConnectionSessionAffinity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectionSessionAffinity;
    fromJSON(object: any): ConnectionSessionAffinity;
    toJSON(message: ConnectionSessionAffinity): unknown;
    fromPartial(object: DeepPartial<ConnectionSessionAffinity>): ConnectionSessionAffinity;
};
export declare const LoadBalancingConfig: {
    $type: "yandex.cloud.apploadbalancer.v1.LoadBalancingConfig";
    encode(message: LoadBalancingConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoadBalancingConfig;
    fromJSON(object: any): LoadBalancingConfig;
    toJSON(message: LoadBalancingConfig): unknown;
    fromPartial(object: DeepPartial<LoadBalancingConfig>): LoadBalancingConfig;
};
export declare const StreamBackend: {
    $type: "yandex.cloud.apploadbalancer.v1.StreamBackend";
    encode(message: StreamBackend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamBackend;
    fromJSON(object: any): StreamBackend;
    toJSON(message: StreamBackend): unknown;
    fromPartial(object: DeepPartial<StreamBackend>): StreamBackend;
};
export declare const HttpBackend: {
    $type: "yandex.cloud.apploadbalancer.v1.HttpBackend";
    encode(message: HttpBackend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpBackend;
    fromJSON(object: any): HttpBackend;
    toJSON(message: HttpBackend): unknown;
    fromPartial(object: DeepPartial<HttpBackend>): HttpBackend;
};
export declare const GrpcBackend: {
    $type: "yandex.cloud.apploadbalancer.v1.GrpcBackend";
    encode(message: GrpcBackend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrpcBackend;
    fromJSON(object: any): GrpcBackend;
    toJSON(message: GrpcBackend): unknown;
    fromPartial(object: DeepPartial<GrpcBackend>): GrpcBackend;
};
export declare const TargetGroupsBackend: {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroupsBackend";
    encode(message: TargetGroupsBackend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroupsBackend;
    fromJSON(object: any): TargetGroupsBackend;
    toJSON(message: TargetGroupsBackend): unknown;
    fromPartial(object: DeepPartial<TargetGroupsBackend>): TargetGroupsBackend;
};
export declare const BackendTls: {
    $type: "yandex.cloud.apploadbalancer.v1.BackendTls";
    encode(message: BackendTls, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackendTls;
    fromJSON(object: any): BackendTls;
    toJSON(message: BackendTls): unknown;
    fromPartial(object: DeepPartial<BackendTls>): BackendTls;
};
export declare const StorageBucketBackend: {
    $type: "yandex.cloud.apploadbalancer.v1.StorageBucketBackend";
    encode(message: StorageBucketBackend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StorageBucketBackend;
    fromJSON(object: any): StorageBucketBackend;
    toJSON(message: StorageBucketBackend): unknown;
    fromPartial(object: DeepPartial<StorageBucketBackend>): StorageBucketBackend;
};
export declare const HealthCheck: {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck";
    encode(message: HealthCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck;
    fromJSON(object: any): HealthCheck;
    toJSON(message: HealthCheck): unknown;
    fromPartial(object: DeepPartial<HealthCheck>): HealthCheck;
};
export declare const HealthCheck_StreamHealthCheck: {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.StreamHealthCheck";
    encode(message: HealthCheck_StreamHealthCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck_StreamHealthCheck;
    fromJSON(object: any): HealthCheck_StreamHealthCheck;
    toJSON(message: HealthCheck_StreamHealthCheck): unknown;
    fromPartial(object: DeepPartial<HealthCheck_StreamHealthCheck>): HealthCheck_StreamHealthCheck;
};
export declare const HealthCheck_HttpHealthCheck: {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.HttpHealthCheck";
    encode(message: HealthCheck_HttpHealthCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck_HttpHealthCheck;
    fromJSON(object: any): HealthCheck_HttpHealthCheck;
    toJSON(message: HealthCheck_HttpHealthCheck): unknown;
    fromPartial(object: DeepPartial<HealthCheck_HttpHealthCheck>): HealthCheck_HttpHealthCheck;
};
export declare const HealthCheck_GrpcHealthCheck: {
    $type: "yandex.cloud.apploadbalancer.v1.HealthCheck.GrpcHealthCheck";
    encode(message: HealthCheck_GrpcHealthCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck_GrpcHealthCheck;
    fromJSON(object: any): HealthCheck_GrpcHealthCheck;
    toJSON(message: HealthCheck_GrpcHealthCheck): unknown;
    fromPartial(object: DeepPartial<HealthCheck_GrpcHealthCheck>): HealthCheck_GrpcHealthCheck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
