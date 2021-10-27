/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Int64Value } from '../../../../google/protobuf/wrappers';
import { messageTypeRegistry } from '../../../../typeRegistry';
import { Payload } from '../../../../yandex/cloud/apploadbalancer/v1/payload';
import { ValidationContext } from '../../../../yandex/cloud/apploadbalancer/v1/tls';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';

/**
 * A load balancing mode resource.
 * For details about the concept, see
 * [documentation](/docs/application-load-balancer/concepts/backend-group#balancing-mode).
 */
export enum LoadBalancingMode {
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
    UNRECOGNIZED = -1,
}

export function loadBalancingModeFromJSON(object: any): LoadBalancingMode {
    switch (object) {
        case 0:
        case 'ROUND_ROBIN':
            return LoadBalancingMode.ROUND_ROBIN;
        case 1:
        case 'RANDOM':
            return LoadBalancingMode.RANDOM;
        case 2:
        case 'LEAST_REQUEST':
            return LoadBalancingMode.LEAST_REQUEST;
        case 3:
        case 'MAGLEV_HASH':
            return LoadBalancingMode.MAGLEV_HASH;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LoadBalancingMode.UNRECOGNIZED;
    }
}

export function loadBalancingModeToJSON(object: LoadBalancingMode): string {
    switch (object) {
        case LoadBalancingMode.ROUND_ROBIN:
            return 'ROUND_ROBIN';
        case LoadBalancingMode.RANDOM:
            return 'RANDOM';
        case LoadBalancingMode.LEAST_REQUEST:
            return 'LEAST_REQUEST';
        case LoadBalancingMode.MAGLEV_HASH:
            return 'MAGLEV_HASH';
        default:
            return 'UNKNOWN';
    }
}

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
    labels: { [key: string]: string };
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

const baseBackendGroup: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.BackendGroup',
    id: '',
    name: '',
    description: '',
    folderId: '',
};

export const BackendGroup = {
    $type: 'yandex.cloud.apploadbalancer.v1.BackendGroup' as const,

    encode(
        message: BackendGroup,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.folderId !== '') {
            writer.uint32(34).string(message.folderId);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            BackendGroup_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.http !== undefined) {
            HttpBackendGroup.encode(
                message.http,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.grpc !== undefined) {
            GrpcBackendGroup.encode(
                message.grpc,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.stream !== undefined) {
            StreamBackendGroup.encode(
                message.stream,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(74).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackendGroup {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackendGroup } as BackendGroup;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.folderId = reader.string();
                    break;
                case 5:
                    const entry5 = BackendGroup_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.http = HttpBackendGroup.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.grpc = GrpcBackendGroup.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 10:
                    message.stream = StreamBackendGroup.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.createdAt = fromTimestamp(
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

    fromJSON(object: any): BackendGroup {
        const message = { ...baseBackendGroup } as BackendGroup;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
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
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpBackendGroup.fromJSON(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcBackendGroup.fromJSON(object.grpc);
        } else {
            message.grpc = undefined;
        }
        if (object.stream !== undefined && object.stream !== null) {
            message.stream = StreamBackendGroup.fromJSON(object.stream);
        } else {
            message.stream = undefined;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        return message;
    },

    toJSON(message: BackendGroup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpBackendGroup.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? GrpcBackendGroup.toJSON(message.grpc)
                : undefined);
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? StreamBackendGroup.toJSON(message.stream)
                : undefined);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<BackendGroup>): BackendGroup {
        const message = { ...baseBackendGroup } as BackendGroup;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
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
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpBackendGroup.fromPartial(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = GrpcBackendGroup.fromPartial(object.grpc);
        } else {
            message.grpc = undefined;
        }
        if (object.stream !== undefined && object.stream !== null) {
            message.stream = StreamBackendGroup.fromPartial(object.stream);
        } else {
            message.stream = undefined;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(BackendGroup.$type, BackendGroup);

const baseBackendGroup_LabelsEntry: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry',
    key: '',
    value: '',
};

export const BackendGroup_LabelsEntry = {
    $type: 'yandex.cloud.apploadbalancer.v1.BackendGroup.LabelsEntry' as const,

    encode(
        message: BackendGroup_LabelsEntry,
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
    ): BackendGroup_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBackendGroup_LabelsEntry,
        } as BackendGroup_LabelsEntry;
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

    fromJSON(object: any): BackendGroup_LabelsEntry {
        const message = {
            ...baseBackendGroup_LabelsEntry,
        } as BackendGroup_LabelsEntry;
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

    toJSON(message: BackendGroup_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<BackendGroup_LabelsEntry>
    ): BackendGroup_LabelsEntry {
        const message = {
            ...baseBackendGroup_LabelsEntry,
        } as BackendGroup_LabelsEntry;
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

messageTypeRegistry.set(
    BackendGroup_LabelsEntry.$type,
    BackendGroup_LabelsEntry
);

const baseStreamBackendGroup: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.StreamBackendGroup',
};

export const StreamBackendGroup = {
    $type: 'yandex.cloud.apploadbalancer.v1.StreamBackendGroup' as const,

    encode(
        message: StreamBackendGroup,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.backends) {
            StreamBackend.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.connection !== undefined) {
            ConnectionSessionAffinity.encode(
                message.connection,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StreamBackendGroup {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamBackendGroup } as StreamBackendGroup;
        message.backends = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backends.push(
                        StreamBackend.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.connection = ConnectionSessionAffinity.decode(
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

    fromJSON(object: any): StreamBackendGroup {
        const message = { ...baseStreamBackendGroup } as StreamBackendGroup;
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(StreamBackend.fromJSON(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = ConnectionSessionAffinity.fromJSON(
                object.connection
            );
        } else {
            message.connection = undefined;
        }
        return message;
    },

    toJSON(message: StreamBackendGroup): unknown {
        const obj: any = {};
        if (message.backends) {
            obj.backends = message.backends.map((e) =>
                e ? StreamBackend.toJSON(e) : undefined
            );
        } else {
            obj.backends = [];
        }
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? ConnectionSessionAffinity.toJSON(message.connection)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<StreamBackendGroup>): StreamBackendGroup {
        const message = { ...baseStreamBackendGroup } as StreamBackendGroup;
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(StreamBackend.fromPartial(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = ConnectionSessionAffinity.fromPartial(
                object.connection
            );
        } else {
            message.connection = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(StreamBackendGroup.$type, StreamBackendGroup);

const baseHttpBackendGroup: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpBackendGroup',
};

export const HttpBackendGroup = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpBackendGroup' as const,

    encode(
        message: HttpBackendGroup,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.backends) {
            HttpBackend.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.connection !== undefined) {
            ConnectionSessionAffinity.encode(
                message.connection,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.header !== undefined) {
            HeaderSessionAffinity.encode(
                message.header,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.cookie !== undefined) {
            CookieSessionAffinity.encode(
                message.cookie,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpBackendGroup {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpBackendGroup } as HttpBackendGroup;
        message.backends = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backends.push(
                        HttpBackend.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.connection = ConnectionSessionAffinity.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.header = HeaderSessionAffinity.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.cookie = CookieSessionAffinity.decode(
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

    fromJSON(object: any): HttpBackendGroup {
        const message = { ...baseHttpBackendGroup } as HttpBackendGroup;
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(HttpBackend.fromJSON(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = ConnectionSessionAffinity.fromJSON(
                object.connection
            );
        } else {
            message.connection = undefined;
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = HeaderSessionAffinity.fromJSON(object.header);
        } else {
            message.header = undefined;
        }
        if (object.cookie !== undefined && object.cookie !== null) {
            message.cookie = CookieSessionAffinity.fromJSON(object.cookie);
        } else {
            message.cookie = undefined;
        }
        return message;
    },

    toJSON(message: HttpBackendGroup): unknown {
        const obj: any = {};
        if (message.backends) {
            obj.backends = message.backends.map((e) =>
                e ? HttpBackend.toJSON(e) : undefined
            );
        } else {
            obj.backends = [];
        }
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? ConnectionSessionAffinity.toJSON(message.connection)
                : undefined);
        message.header !== undefined &&
            (obj.header = message.header
                ? HeaderSessionAffinity.toJSON(message.header)
                : undefined);
        message.cookie !== undefined &&
            (obj.cookie = message.cookie
                ? CookieSessionAffinity.toJSON(message.cookie)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<HttpBackendGroup>): HttpBackendGroup {
        const message = { ...baseHttpBackendGroup } as HttpBackendGroup;
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(HttpBackend.fromPartial(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = ConnectionSessionAffinity.fromPartial(
                object.connection
            );
        } else {
            message.connection = undefined;
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = HeaderSessionAffinity.fromPartial(object.header);
        } else {
            message.header = undefined;
        }
        if (object.cookie !== undefined && object.cookie !== null) {
            message.cookie = CookieSessionAffinity.fromPartial(object.cookie);
        } else {
            message.cookie = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(HttpBackendGroup.$type, HttpBackendGroup);

const baseGrpcBackendGroup: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcBackendGroup',
};

export const GrpcBackendGroup = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcBackendGroup' as const,

    encode(
        message: GrpcBackendGroup,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.backends) {
            GrpcBackend.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.connection !== undefined) {
            ConnectionSessionAffinity.encode(
                message.connection,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.header !== undefined) {
            HeaderSessionAffinity.encode(
                message.header,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.cookie !== undefined) {
            CookieSessionAffinity.encode(
                message.cookie,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GrpcBackendGroup {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcBackendGroup } as GrpcBackendGroup;
        message.backends = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backends.push(
                        GrpcBackend.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.connection = ConnectionSessionAffinity.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.header = HeaderSessionAffinity.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.cookie = CookieSessionAffinity.decode(
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

    fromJSON(object: any): GrpcBackendGroup {
        const message = { ...baseGrpcBackendGroup } as GrpcBackendGroup;
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(GrpcBackend.fromJSON(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = ConnectionSessionAffinity.fromJSON(
                object.connection
            );
        } else {
            message.connection = undefined;
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = HeaderSessionAffinity.fromJSON(object.header);
        } else {
            message.header = undefined;
        }
        if (object.cookie !== undefined && object.cookie !== null) {
            message.cookie = CookieSessionAffinity.fromJSON(object.cookie);
        } else {
            message.cookie = undefined;
        }
        return message;
    },

    toJSON(message: GrpcBackendGroup): unknown {
        const obj: any = {};
        if (message.backends) {
            obj.backends = message.backends.map((e) =>
                e ? GrpcBackend.toJSON(e) : undefined
            );
        } else {
            obj.backends = [];
        }
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? ConnectionSessionAffinity.toJSON(message.connection)
                : undefined);
        message.header !== undefined &&
            (obj.header = message.header
                ? HeaderSessionAffinity.toJSON(message.header)
                : undefined);
        message.cookie !== undefined &&
            (obj.cookie = message.cookie
                ? CookieSessionAffinity.toJSON(message.cookie)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<GrpcBackendGroup>): GrpcBackendGroup {
        const message = { ...baseGrpcBackendGroup } as GrpcBackendGroup;
        message.backends = [];
        if (object.backends !== undefined && object.backends !== null) {
            for (const e of object.backends) {
                message.backends.push(GrpcBackend.fromPartial(e));
            }
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = ConnectionSessionAffinity.fromPartial(
                object.connection
            );
        } else {
            message.connection = undefined;
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = HeaderSessionAffinity.fromPartial(object.header);
        } else {
            message.header = undefined;
        }
        if (object.cookie !== undefined && object.cookie !== null) {
            message.cookie = CookieSessionAffinity.fromPartial(object.cookie);
        } else {
            message.cookie = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(GrpcBackendGroup.$type, GrpcBackendGroup);

const baseHeaderSessionAffinity: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HeaderSessionAffinity',
    headerName: '',
};

export const HeaderSessionAffinity = {
    $type: 'yandex.cloud.apploadbalancer.v1.HeaderSessionAffinity' as const,

    encode(
        message: HeaderSessionAffinity,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.headerName !== '') {
            writer.uint32(10).string(message.headerName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): HeaderSessionAffinity {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHeaderSessionAffinity,
        } as HeaderSessionAffinity;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.headerName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HeaderSessionAffinity {
        const message = {
            ...baseHeaderSessionAffinity,
        } as HeaderSessionAffinity;
        if (object.headerName !== undefined && object.headerName !== null) {
            message.headerName = String(object.headerName);
        } else {
            message.headerName = '';
        }
        return message;
    },

    toJSON(message: HeaderSessionAffinity): unknown {
        const obj: any = {};
        message.headerName !== undefined &&
            (obj.headerName = message.headerName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<HeaderSessionAffinity>
    ): HeaderSessionAffinity {
        const message = {
            ...baseHeaderSessionAffinity,
        } as HeaderSessionAffinity;
        if (object.headerName !== undefined && object.headerName !== null) {
            message.headerName = object.headerName;
        } else {
            message.headerName = '';
        }
        return message;
    },
};

messageTypeRegistry.set(HeaderSessionAffinity.$type, HeaderSessionAffinity);

const baseCookieSessionAffinity: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.CookieSessionAffinity',
    name: '',
};

export const CookieSessionAffinity = {
    $type: 'yandex.cloud.apploadbalancer.v1.CookieSessionAffinity' as const,

    encode(
        message: CookieSessionAffinity,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.ttl !== undefined) {
            Duration.encode(message.ttl, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CookieSessionAffinity {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCookieSessionAffinity,
        } as CookieSessionAffinity;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.ttl = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CookieSessionAffinity {
        const message = {
            ...baseCookieSessionAffinity,
        } as CookieSessionAffinity;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = Duration.fromJSON(object.ttl);
        } else {
            message.ttl = undefined;
        }
        return message;
    },

    toJSON(message: CookieSessionAffinity): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.ttl !== undefined &&
            (obj.ttl = message.ttl ? Duration.toJSON(message.ttl) : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CookieSessionAffinity>
    ): CookieSessionAffinity {
        const message = {
            ...baseCookieSessionAffinity,
        } as CookieSessionAffinity;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = Duration.fromPartial(object.ttl);
        } else {
            message.ttl = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(CookieSessionAffinity.$type, CookieSessionAffinity);

const baseConnectionSessionAffinity: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.ConnectionSessionAffinity',
    sourceIp: false,
};

export const ConnectionSessionAffinity = {
    $type: 'yandex.cloud.apploadbalancer.v1.ConnectionSessionAffinity' as const,

    encode(
        message: ConnectionSessionAffinity,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sourceIp === true) {
            writer.uint32(8).bool(message.sourceIp);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ConnectionSessionAffinity {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseConnectionSessionAffinity,
        } as ConnectionSessionAffinity;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceIp = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConnectionSessionAffinity {
        const message = {
            ...baseConnectionSessionAffinity,
        } as ConnectionSessionAffinity;
        if (object.sourceIp !== undefined && object.sourceIp !== null) {
            message.sourceIp = Boolean(object.sourceIp);
        } else {
            message.sourceIp = false;
        }
        return message;
    },

    toJSON(message: ConnectionSessionAffinity): unknown {
        const obj: any = {};
        message.sourceIp !== undefined && (obj.sourceIp = message.sourceIp);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ConnectionSessionAffinity>
    ): ConnectionSessionAffinity {
        const message = {
            ...baseConnectionSessionAffinity,
        } as ConnectionSessionAffinity;
        if (object.sourceIp !== undefined && object.sourceIp !== null) {
            message.sourceIp = object.sourceIp;
        } else {
            message.sourceIp = false;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ConnectionSessionAffinity.$type,
    ConnectionSessionAffinity
);

const baseLoadBalancingConfig: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.LoadBalancingConfig',
    panicThreshold: 0,
    localityAwareRoutingPercent: 0,
    strictLocality: false,
    mode: 0,
};

export const LoadBalancingConfig = {
    $type: 'yandex.cloud.apploadbalancer.v1.LoadBalancingConfig' as const,

    encode(
        message: LoadBalancingConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.panicThreshold !== 0) {
            writer.uint32(8).int64(message.panicThreshold);
        }
        if (message.localityAwareRoutingPercent !== 0) {
            writer.uint32(16).int64(message.localityAwareRoutingPercent);
        }
        if (message.strictLocality === true) {
            writer.uint32(24).bool(message.strictLocality);
        }
        if (message.mode !== 0) {
            writer.uint32(32).int32(message.mode);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): LoadBalancingConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoadBalancingConfig } as LoadBalancingConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.panicThreshold = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 2:
                    message.localityAwareRoutingPercent = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 3:
                    message.strictLocality = reader.bool();
                    break;
                case 4:
                    message.mode = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LoadBalancingConfig {
        const message = { ...baseLoadBalancingConfig } as LoadBalancingConfig;
        if (
            object.panicThreshold !== undefined &&
            object.panicThreshold !== null
        ) {
            message.panicThreshold = Number(object.panicThreshold);
        } else {
            message.panicThreshold = 0;
        }
        if (
            object.localityAwareRoutingPercent !== undefined &&
            object.localityAwareRoutingPercent !== null
        ) {
            message.localityAwareRoutingPercent = Number(
                object.localityAwareRoutingPercent
            );
        } else {
            message.localityAwareRoutingPercent = 0;
        }
        if (
            object.strictLocality !== undefined &&
            object.strictLocality !== null
        ) {
            message.strictLocality = Boolean(object.strictLocality);
        } else {
            message.strictLocality = false;
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = loadBalancingModeFromJSON(object.mode);
        } else {
            message.mode = 0;
        }
        return message;
    },

    toJSON(message: LoadBalancingConfig): unknown {
        const obj: any = {};
        message.panicThreshold !== undefined &&
            (obj.panicThreshold = message.panicThreshold);
        message.localityAwareRoutingPercent !== undefined &&
            (obj.localityAwareRoutingPercent =
                message.localityAwareRoutingPercent);
        message.strictLocality !== undefined &&
            (obj.strictLocality = message.strictLocality);
        message.mode !== undefined &&
            (obj.mode = loadBalancingModeToJSON(message.mode));
        return obj;
    },

    fromPartial(object: DeepPartial<LoadBalancingConfig>): LoadBalancingConfig {
        const message = { ...baseLoadBalancingConfig } as LoadBalancingConfig;
        if (
            object.panicThreshold !== undefined &&
            object.panicThreshold !== null
        ) {
            message.panicThreshold = object.panicThreshold;
        } else {
            message.panicThreshold = 0;
        }
        if (
            object.localityAwareRoutingPercent !== undefined &&
            object.localityAwareRoutingPercent !== null
        ) {
            message.localityAwareRoutingPercent =
                object.localityAwareRoutingPercent;
        } else {
            message.localityAwareRoutingPercent = 0;
        }
        if (
            object.strictLocality !== undefined &&
            object.strictLocality !== null
        ) {
            message.strictLocality = object.strictLocality;
        } else {
            message.strictLocality = false;
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        } else {
            message.mode = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(LoadBalancingConfig.$type, LoadBalancingConfig);

const baseStreamBackend: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.StreamBackend',
    name: '',
    port: 0,
};

export const StreamBackend = {
    $type: 'yandex.cloud.apploadbalancer.v1.StreamBackend' as const,

    encode(
        message: StreamBackend,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.backendWeight !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.backendWeight!,
                },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.loadBalancingConfig !== undefined) {
            LoadBalancingConfig.encode(
                message.loadBalancingConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.targetGroups !== undefined) {
            TargetGroupsBackend.encode(
                message.targetGroups,
                writer.uint32(42).fork()
            ).ldelim();
        }
        for (const v of message.healthchecks) {
            HealthCheck.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            BackendTls.encode(message.tls, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): StreamBackend {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStreamBackend } as StreamBackend;
        message.healthchecks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.backendWeight = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.loadBalancingConfig = LoadBalancingConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.targetGroups = TargetGroupsBackend.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.healthchecks.push(
                        HealthCheck.decode(reader, reader.uint32())
                    );
                    break;
                case 7:
                    message.tls = BackendTls.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StreamBackend {
        const message = { ...baseStreamBackend } as StreamBackend;
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (
            object.backendWeight !== undefined &&
            object.backendWeight !== null
        ) {
            message.backendWeight = Number(object.backendWeight);
        } else {
            message.backendWeight = undefined;
        }
        if (
            object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null
        ) {
            message.loadBalancingConfig = LoadBalancingConfig.fromJSON(
                object.loadBalancingConfig
            );
        } else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = TargetGroupsBackend.fromJSON(
                object.targetGroups
            );
        } else {
            message.targetGroups = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(HealthCheck.fromJSON(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = BackendTls.fromJSON(object.tls);
        } else {
            message.tls = undefined;
        }
        return message;
    },

    toJSON(message: StreamBackend): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.backendWeight !== undefined &&
            (obj.backendWeight = message.backendWeight);
        message.loadBalancingConfig !== undefined &&
            (obj.loadBalancingConfig = message.loadBalancingConfig
                ? LoadBalancingConfig.toJSON(message.loadBalancingConfig)
                : undefined);
        message.port !== undefined && (obj.port = message.port);
        message.targetGroups !== undefined &&
            (obj.targetGroups = message.targetGroups
                ? TargetGroupsBackend.toJSON(message.targetGroups)
                : undefined);
        if (message.healthchecks) {
            obj.healthchecks = message.healthchecks.map((e) =>
                e ? HealthCheck.toJSON(e) : undefined
            );
        } else {
            obj.healthchecks = [];
        }
        message.tls !== undefined &&
            (obj.tls = message.tls
                ? BackendTls.toJSON(message.tls)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<StreamBackend>): StreamBackend {
        const message = { ...baseStreamBackend } as StreamBackend;
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (
            object.backendWeight !== undefined &&
            object.backendWeight !== null
        ) {
            message.backendWeight = object.backendWeight;
        } else {
            message.backendWeight = undefined;
        }
        if (
            object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null
        ) {
            message.loadBalancingConfig = LoadBalancingConfig.fromPartial(
                object.loadBalancingConfig
            );
        } else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = TargetGroupsBackend.fromPartial(
                object.targetGroups
            );
        } else {
            message.targetGroups = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(HealthCheck.fromPartial(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = BackendTls.fromPartial(object.tls);
        } else {
            message.tls = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(StreamBackend.$type, StreamBackend);

const baseHttpBackend: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpBackend',
    name: '',
    port: 0,
    useHttp2: false,
};

export const HttpBackend = {
    $type: 'yandex.cloud.apploadbalancer.v1.HttpBackend' as const,

    encode(
        message: HttpBackend,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.backendWeight !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.backendWeight!,
                },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.loadBalancingConfig !== undefined) {
            LoadBalancingConfig.encode(
                message.loadBalancingConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.targetGroups !== undefined) {
            TargetGroupsBackend.encode(
                message.targetGroups,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.storageBucket !== undefined) {
            StorageBucketBackend.encode(
                message.storageBucket,
                writer.uint32(74).fork()
            ).ldelim();
        }
        for (const v of message.healthchecks) {
            HealthCheck.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            BackendTls.encode(message.tls, writer.uint32(58).fork()).ldelim();
        }
        if (message.useHttp2 === true) {
            writer.uint32(64).bool(message.useHttp2);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpBackend {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpBackend } as HttpBackend;
        message.healthchecks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.backendWeight = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.loadBalancingConfig = LoadBalancingConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.targetGroups = TargetGroupsBackend.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.storageBucket = StorageBucketBackend.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.healthchecks.push(
                        HealthCheck.decode(reader, reader.uint32())
                    );
                    break;
                case 7:
                    message.tls = BackendTls.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.useHttp2 = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HttpBackend {
        const message = { ...baseHttpBackend } as HttpBackend;
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (
            object.backendWeight !== undefined &&
            object.backendWeight !== null
        ) {
            message.backendWeight = Number(object.backendWeight);
        } else {
            message.backendWeight = undefined;
        }
        if (
            object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null
        ) {
            message.loadBalancingConfig = LoadBalancingConfig.fromJSON(
                object.loadBalancingConfig
            );
        } else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = TargetGroupsBackend.fromJSON(
                object.targetGroups
            );
        } else {
            message.targetGroups = undefined;
        }
        if (
            object.storageBucket !== undefined &&
            object.storageBucket !== null
        ) {
            message.storageBucket = StorageBucketBackend.fromJSON(
                object.storageBucket
            );
        } else {
            message.storageBucket = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(HealthCheck.fromJSON(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = BackendTls.fromJSON(object.tls);
        } else {
            message.tls = undefined;
        }
        if (object.useHttp2 !== undefined && object.useHttp2 !== null) {
            message.useHttp2 = Boolean(object.useHttp2);
        } else {
            message.useHttp2 = false;
        }
        return message;
    },

    toJSON(message: HttpBackend): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.backendWeight !== undefined &&
            (obj.backendWeight = message.backendWeight);
        message.loadBalancingConfig !== undefined &&
            (obj.loadBalancingConfig = message.loadBalancingConfig
                ? LoadBalancingConfig.toJSON(message.loadBalancingConfig)
                : undefined);
        message.port !== undefined && (obj.port = message.port);
        message.targetGroups !== undefined &&
            (obj.targetGroups = message.targetGroups
                ? TargetGroupsBackend.toJSON(message.targetGroups)
                : undefined);
        message.storageBucket !== undefined &&
            (obj.storageBucket = message.storageBucket
                ? StorageBucketBackend.toJSON(message.storageBucket)
                : undefined);
        if (message.healthchecks) {
            obj.healthchecks = message.healthchecks.map((e) =>
                e ? HealthCheck.toJSON(e) : undefined
            );
        } else {
            obj.healthchecks = [];
        }
        message.tls !== undefined &&
            (obj.tls = message.tls
                ? BackendTls.toJSON(message.tls)
                : undefined);
        message.useHttp2 !== undefined && (obj.useHttp2 = message.useHttp2);
        return obj;
    },

    fromPartial(object: DeepPartial<HttpBackend>): HttpBackend {
        const message = { ...baseHttpBackend } as HttpBackend;
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (
            object.backendWeight !== undefined &&
            object.backendWeight !== null
        ) {
            message.backendWeight = object.backendWeight;
        } else {
            message.backendWeight = undefined;
        }
        if (
            object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null
        ) {
            message.loadBalancingConfig = LoadBalancingConfig.fromPartial(
                object.loadBalancingConfig
            );
        } else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = TargetGroupsBackend.fromPartial(
                object.targetGroups
            );
        } else {
            message.targetGroups = undefined;
        }
        if (
            object.storageBucket !== undefined &&
            object.storageBucket !== null
        ) {
            message.storageBucket = StorageBucketBackend.fromPartial(
                object.storageBucket
            );
        } else {
            message.storageBucket = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(HealthCheck.fromPartial(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = BackendTls.fromPartial(object.tls);
        } else {
            message.tls = undefined;
        }
        if (object.useHttp2 !== undefined && object.useHttp2 !== null) {
            message.useHttp2 = object.useHttp2;
        } else {
            message.useHttp2 = false;
        }
        return message;
    },
};

messageTypeRegistry.set(HttpBackend.$type, HttpBackend);

const baseGrpcBackend: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcBackend',
    name: '',
    port: 0,
};

export const GrpcBackend = {
    $type: 'yandex.cloud.apploadbalancer.v1.GrpcBackend' as const,

    encode(
        message: GrpcBackend,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.backendWeight !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.backendWeight!,
                },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.loadBalancingConfig !== undefined) {
            LoadBalancingConfig.encode(
                message.loadBalancingConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.targetGroups !== undefined) {
            TargetGroupsBackend.encode(
                message.targetGroups,
                writer.uint32(42).fork()
            ).ldelim();
        }
        for (const v of message.healthchecks) {
            HealthCheck.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        if (message.tls !== undefined) {
            BackendTls.encode(message.tls, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GrpcBackend {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrpcBackend } as GrpcBackend;
        message.healthchecks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.backendWeight = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.loadBalancingConfig = LoadBalancingConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.targetGroups = TargetGroupsBackend.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.healthchecks.push(
                        HealthCheck.decode(reader, reader.uint32())
                    );
                    break;
                case 8:
                    message.tls = BackendTls.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GrpcBackend {
        const message = { ...baseGrpcBackend } as GrpcBackend;
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (
            object.backendWeight !== undefined &&
            object.backendWeight !== null
        ) {
            message.backendWeight = Number(object.backendWeight);
        } else {
            message.backendWeight = undefined;
        }
        if (
            object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null
        ) {
            message.loadBalancingConfig = LoadBalancingConfig.fromJSON(
                object.loadBalancingConfig
            );
        } else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = TargetGroupsBackend.fromJSON(
                object.targetGroups
            );
        } else {
            message.targetGroups = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(HealthCheck.fromJSON(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = BackendTls.fromJSON(object.tls);
        } else {
            message.tls = undefined;
        }
        return message;
    },

    toJSON(message: GrpcBackend): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.backendWeight !== undefined &&
            (obj.backendWeight = message.backendWeight);
        message.loadBalancingConfig !== undefined &&
            (obj.loadBalancingConfig = message.loadBalancingConfig
                ? LoadBalancingConfig.toJSON(message.loadBalancingConfig)
                : undefined);
        message.port !== undefined && (obj.port = message.port);
        message.targetGroups !== undefined &&
            (obj.targetGroups = message.targetGroups
                ? TargetGroupsBackend.toJSON(message.targetGroups)
                : undefined);
        if (message.healthchecks) {
            obj.healthchecks = message.healthchecks.map((e) =>
                e ? HealthCheck.toJSON(e) : undefined
            );
        } else {
            obj.healthchecks = [];
        }
        message.tls !== undefined &&
            (obj.tls = message.tls
                ? BackendTls.toJSON(message.tls)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<GrpcBackend>): GrpcBackend {
        const message = { ...baseGrpcBackend } as GrpcBackend;
        message.healthchecks = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (
            object.backendWeight !== undefined &&
            object.backendWeight !== null
        ) {
            message.backendWeight = object.backendWeight;
        } else {
            message.backendWeight = undefined;
        }
        if (
            object.loadBalancingConfig !== undefined &&
            object.loadBalancingConfig !== null
        ) {
            message.loadBalancingConfig = LoadBalancingConfig.fromPartial(
                object.loadBalancingConfig
            );
        } else {
            message.loadBalancingConfig = undefined;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        if (object.targetGroups !== undefined && object.targetGroups !== null) {
            message.targetGroups = TargetGroupsBackend.fromPartial(
                object.targetGroups
            );
        } else {
            message.targetGroups = undefined;
        }
        if (object.healthchecks !== undefined && object.healthchecks !== null) {
            for (const e of object.healthchecks) {
                message.healthchecks.push(HealthCheck.fromPartial(e));
            }
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = BackendTls.fromPartial(object.tls);
        } else {
            message.tls = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(GrpcBackend.$type, GrpcBackend);

const baseTargetGroupsBackend: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.TargetGroupsBackend',
    targetGroupIds: '',
};

export const TargetGroupsBackend = {
    $type: 'yandex.cloud.apploadbalancer.v1.TargetGroupsBackend' as const,

    encode(
        message: TargetGroupsBackend,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.targetGroupIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): TargetGroupsBackend {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTargetGroupsBackend } as TargetGroupsBackend;
        message.targetGroupIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetGroupIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TargetGroupsBackend {
        const message = { ...baseTargetGroupsBackend } as TargetGroupsBackend;
        message.targetGroupIds = [];
        if (
            object.targetGroupIds !== undefined &&
            object.targetGroupIds !== null
        ) {
            for (const e of object.targetGroupIds) {
                message.targetGroupIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: TargetGroupsBackend): unknown {
        const obj: any = {};
        if (message.targetGroupIds) {
            obj.targetGroupIds = message.targetGroupIds.map((e) => e);
        } else {
            obj.targetGroupIds = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<TargetGroupsBackend>): TargetGroupsBackend {
        const message = { ...baseTargetGroupsBackend } as TargetGroupsBackend;
        message.targetGroupIds = [];
        if (
            object.targetGroupIds !== undefined &&
            object.targetGroupIds !== null
        ) {
            for (const e of object.targetGroupIds) {
                message.targetGroupIds.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(TargetGroupsBackend.$type, TargetGroupsBackend);

const baseBackendTls: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.BackendTls',
    sni: '',
};

export const BackendTls = {
    $type: 'yandex.cloud.apploadbalancer.v1.BackendTls' as const,

    encode(
        message: BackendTls,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sni !== '') {
            writer.uint32(10).string(message.sni);
        }
        if (message.validationContext !== undefined) {
            ValidationContext.encode(
                message.validationContext,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BackendTls {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackendTls } as BackendTls;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sni = reader.string();
                    break;
                case 3:
                    message.validationContext = ValidationContext.decode(
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

    fromJSON(object: any): BackendTls {
        const message = { ...baseBackendTls } as BackendTls;
        if (object.sni !== undefined && object.sni !== null) {
            message.sni = String(object.sni);
        } else {
            message.sni = '';
        }
        if (
            object.validationContext !== undefined &&
            object.validationContext !== null
        ) {
            message.validationContext = ValidationContext.fromJSON(
                object.validationContext
            );
        } else {
            message.validationContext = undefined;
        }
        return message;
    },

    toJSON(message: BackendTls): unknown {
        const obj: any = {};
        message.sni !== undefined && (obj.sni = message.sni);
        message.validationContext !== undefined &&
            (obj.validationContext = message.validationContext
                ? ValidationContext.toJSON(message.validationContext)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<BackendTls>): BackendTls {
        const message = { ...baseBackendTls } as BackendTls;
        if (object.sni !== undefined && object.sni !== null) {
            message.sni = object.sni;
        } else {
            message.sni = '';
        }
        if (
            object.validationContext !== undefined &&
            object.validationContext !== null
        ) {
            message.validationContext = ValidationContext.fromPartial(
                object.validationContext
            );
        } else {
            message.validationContext = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(BackendTls.$type, BackendTls);

const baseStorageBucketBackend: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.StorageBucketBackend',
    bucket: '',
};

export const StorageBucketBackend = {
    $type: 'yandex.cloud.apploadbalancer.v1.StorageBucketBackend' as const,

    encode(
        message: StorageBucketBackend,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.bucket !== '') {
            writer.uint32(10).string(message.bucket);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): StorageBucketBackend {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageBucketBackend } as StorageBucketBackend;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucket = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): StorageBucketBackend {
        const message = { ...baseStorageBucketBackend } as StorageBucketBackend;
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = String(object.bucket);
        } else {
            message.bucket = '';
        }
        return message;
    },

    toJSON(message: StorageBucketBackend): unknown {
        const obj: any = {};
        message.bucket !== undefined && (obj.bucket = message.bucket);
        return obj;
    },

    fromPartial(
        object: DeepPartial<StorageBucketBackend>
    ): StorageBucketBackend {
        const message = { ...baseStorageBucketBackend } as StorageBucketBackend;
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = object.bucket;
        } else {
            message.bucket = '';
        }
        return message;
    },
};

messageTypeRegistry.set(StorageBucketBackend.$type, StorageBucketBackend);

const baseHealthCheck: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck',
    intervalJitterPercent: 0,
    healthyThreshold: 0,
    unhealthyThreshold: 0,
    healthcheckPort: 0,
};

export const HealthCheck = {
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck' as const,

    encode(
        message: HealthCheck,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.timeout !== undefined) {
            Duration.encode(message.timeout, writer.uint32(10).fork()).ldelim();
        }
        if (message.interval !== undefined) {
            Duration.encode(
                message.interval,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.intervalJitterPercent !== 0) {
            writer.uint32(25).double(message.intervalJitterPercent);
        }
        if (message.healthyThreshold !== 0) {
            writer.uint32(32).int64(message.healthyThreshold);
        }
        if (message.unhealthyThreshold !== 0) {
            writer.uint32(40).int64(message.unhealthyThreshold);
        }
        if (message.healthcheckPort !== 0) {
            writer.uint32(48).int64(message.healthcheckPort);
        }
        if (message.stream !== undefined) {
            HealthCheck_StreamHealthCheck.encode(
                message.stream,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.http !== undefined) {
            HealthCheck_HttpHealthCheck.encode(
                message.http,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.grpc !== undefined) {
            HealthCheck_GrpcHealthCheck.encode(
                message.grpc,
                writer.uint32(74).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheck {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHealthCheck } as HealthCheck;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timeout = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.interval = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.intervalJitterPercent = reader.double();
                    break;
                case 4:
                    message.healthyThreshold = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 5:
                    message.unhealthyThreshold = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 6:
                    message.healthcheckPort = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 7:
                    message.stream = HealthCheck_StreamHealthCheck.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.http = HealthCheck_HttpHealthCheck.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.grpc = HealthCheck_GrpcHealthCheck.decode(
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

    fromJSON(object: any): HealthCheck {
        const message = { ...baseHealthCheck } as HealthCheck;
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Duration.fromJSON(object.timeout);
        } else {
            message.timeout = undefined;
        }
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = Duration.fromJSON(object.interval);
        } else {
            message.interval = undefined;
        }
        if (
            object.intervalJitterPercent !== undefined &&
            object.intervalJitterPercent !== null
        ) {
            message.intervalJitterPercent = Number(
                object.intervalJitterPercent
            );
        } else {
            message.intervalJitterPercent = 0;
        }
        if (
            object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null
        ) {
            message.healthyThreshold = Number(object.healthyThreshold);
        } else {
            message.healthyThreshold = 0;
        }
        if (
            object.unhealthyThreshold !== undefined &&
            object.unhealthyThreshold !== null
        ) {
            message.unhealthyThreshold = Number(object.unhealthyThreshold);
        } else {
            message.unhealthyThreshold = 0;
        }
        if (
            object.healthcheckPort !== undefined &&
            object.healthcheckPort !== null
        ) {
            message.healthcheckPort = Number(object.healthcheckPort);
        } else {
            message.healthcheckPort = 0;
        }
        if (object.stream !== undefined && object.stream !== null) {
            message.stream = HealthCheck_StreamHealthCheck.fromJSON(
                object.stream
            );
        } else {
            message.stream = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HealthCheck_HttpHealthCheck.fromJSON(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = HealthCheck_GrpcHealthCheck.fromJSON(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },

    toJSON(message: HealthCheck): unknown {
        const obj: any = {};
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? Duration.toJSON(message.timeout)
                : undefined);
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? Duration.toJSON(message.interval)
                : undefined);
        message.intervalJitterPercent !== undefined &&
            (obj.intervalJitterPercent = message.intervalJitterPercent);
        message.healthyThreshold !== undefined &&
            (obj.healthyThreshold = message.healthyThreshold);
        message.unhealthyThreshold !== undefined &&
            (obj.unhealthyThreshold = message.unhealthyThreshold);
        message.healthcheckPort !== undefined &&
            (obj.healthcheckPort = message.healthcheckPort);
        message.stream !== undefined &&
            (obj.stream = message.stream
                ? HealthCheck_StreamHealthCheck.toJSON(message.stream)
                : undefined);
        message.http !== undefined &&
            (obj.http = message.http
                ? HealthCheck_HttpHealthCheck.toJSON(message.http)
                : undefined);
        message.grpc !== undefined &&
            (obj.grpc = message.grpc
                ? HealthCheck_GrpcHealthCheck.toJSON(message.grpc)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<HealthCheck>): HealthCheck {
        const message = { ...baseHealthCheck } as HealthCheck;
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Duration.fromPartial(object.timeout);
        } else {
            message.timeout = undefined;
        }
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = Duration.fromPartial(object.interval);
        } else {
            message.interval = undefined;
        }
        if (
            object.intervalJitterPercent !== undefined &&
            object.intervalJitterPercent !== null
        ) {
            message.intervalJitterPercent = object.intervalJitterPercent;
        } else {
            message.intervalJitterPercent = 0;
        }
        if (
            object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null
        ) {
            message.healthyThreshold = object.healthyThreshold;
        } else {
            message.healthyThreshold = 0;
        }
        if (
            object.unhealthyThreshold !== undefined &&
            object.unhealthyThreshold !== null
        ) {
            message.unhealthyThreshold = object.unhealthyThreshold;
        } else {
            message.unhealthyThreshold = 0;
        }
        if (
            object.healthcheckPort !== undefined &&
            object.healthcheckPort !== null
        ) {
            message.healthcheckPort = object.healthcheckPort;
        } else {
            message.healthcheckPort = 0;
        }
        if (object.stream !== undefined && object.stream !== null) {
            message.stream = HealthCheck_StreamHealthCheck.fromPartial(
                object.stream
            );
        } else {
            message.stream = undefined;
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HealthCheck_HttpHealthCheck.fromPartial(object.http);
        } else {
            message.http = undefined;
        }
        if (object.grpc !== undefined && object.grpc !== null) {
            message.grpc = HealthCheck_GrpcHealthCheck.fromPartial(object.grpc);
        } else {
            message.grpc = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(HealthCheck.$type, HealthCheck);

const baseHealthCheck_StreamHealthCheck: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck.StreamHealthCheck',
};

export const HealthCheck_StreamHealthCheck = {
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck.StreamHealthCheck' as const,

    encode(
        message: HealthCheck_StreamHealthCheck,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.send !== undefined) {
            Payload.encode(message.send, writer.uint32(10).fork()).ldelim();
        }
        if (message.receive !== undefined) {
            Payload.encode(message.receive, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): HealthCheck_StreamHealthCheck {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheck_StreamHealthCheck,
        } as HealthCheck_StreamHealthCheck;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.send = Payload.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.receive = Payload.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HealthCheck_StreamHealthCheck {
        const message = {
            ...baseHealthCheck_StreamHealthCheck,
        } as HealthCheck_StreamHealthCheck;
        if (object.send !== undefined && object.send !== null) {
            message.send = Payload.fromJSON(object.send);
        } else {
            message.send = undefined;
        }
        if (object.receive !== undefined && object.receive !== null) {
            message.receive = Payload.fromJSON(object.receive);
        } else {
            message.receive = undefined;
        }
        return message;
    },

    toJSON(message: HealthCheck_StreamHealthCheck): unknown {
        const obj: any = {};
        message.send !== undefined &&
            (obj.send = message.send
                ? Payload.toJSON(message.send)
                : undefined);
        message.receive !== undefined &&
            (obj.receive = message.receive
                ? Payload.toJSON(message.receive)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<HealthCheck_StreamHealthCheck>
    ): HealthCheck_StreamHealthCheck {
        const message = {
            ...baseHealthCheck_StreamHealthCheck,
        } as HealthCheck_StreamHealthCheck;
        if (object.send !== undefined && object.send !== null) {
            message.send = Payload.fromPartial(object.send);
        } else {
            message.send = undefined;
        }
        if (object.receive !== undefined && object.receive !== null) {
            message.receive = Payload.fromPartial(object.receive);
        } else {
            message.receive = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    HealthCheck_StreamHealthCheck.$type,
    HealthCheck_StreamHealthCheck
);

const baseHealthCheck_HttpHealthCheck: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck.HttpHealthCheck',
    host: '',
    path: '',
    useHttp2: false,
};

export const HealthCheck_HttpHealthCheck = {
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck.HttpHealthCheck' as const,

    encode(
        message: HealthCheck_HttpHealthCheck,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.host !== '') {
            writer.uint32(10).string(message.host);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        if (message.useHttp2 === true) {
            writer.uint32(24).bool(message.useHttp2);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): HealthCheck_HttpHealthCheck {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheck_HttpHealthCheck,
        } as HealthCheck_HttpHealthCheck;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.useHttp2 = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HealthCheck_HttpHealthCheck {
        const message = {
            ...baseHealthCheck_HttpHealthCheck,
        } as HealthCheck_HttpHealthCheck;
        if (object.host !== undefined && object.host !== null) {
            message.host = String(object.host);
        } else {
            message.host = '';
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        } else {
            message.path = '';
        }
        if (object.useHttp2 !== undefined && object.useHttp2 !== null) {
            message.useHttp2 = Boolean(object.useHttp2);
        } else {
            message.useHttp2 = false;
        }
        return message;
    },

    toJSON(message: HealthCheck_HttpHealthCheck): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.path !== undefined && (obj.path = message.path);
        message.useHttp2 !== undefined && (obj.useHttp2 = message.useHttp2);
        return obj;
    },

    fromPartial(
        object: DeepPartial<HealthCheck_HttpHealthCheck>
    ): HealthCheck_HttpHealthCheck {
        const message = {
            ...baseHealthCheck_HttpHealthCheck,
        } as HealthCheck_HttpHealthCheck;
        if (object.host !== undefined && object.host !== null) {
            message.host = object.host;
        } else {
            message.host = '';
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        } else {
            message.path = '';
        }
        if (object.useHttp2 !== undefined && object.useHttp2 !== null) {
            message.useHttp2 = object.useHttp2;
        } else {
            message.useHttp2 = false;
        }
        return message;
    },
};

messageTypeRegistry.set(
    HealthCheck_HttpHealthCheck.$type,
    HealthCheck_HttpHealthCheck
);

const baseHealthCheck_GrpcHealthCheck: object = {
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck.GrpcHealthCheck',
    serviceName: '',
};

export const HealthCheck_GrpcHealthCheck = {
    $type: 'yandex.cloud.apploadbalancer.v1.HealthCheck.GrpcHealthCheck' as const,

    encode(
        message: HealthCheck_GrpcHealthCheck,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.serviceName !== '') {
            writer.uint32(10).string(message.serviceName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): HealthCheck_GrpcHealthCheck {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheck_GrpcHealthCheck,
        } as HealthCheck_GrpcHealthCheck;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HealthCheck_GrpcHealthCheck {
        const message = {
            ...baseHealthCheck_GrpcHealthCheck,
        } as HealthCheck_GrpcHealthCheck;
        if (object.serviceName !== undefined && object.serviceName !== null) {
            message.serviceName = String(object.serviceName);
        } else {
            message.serviceName = '';
        }
        return message;
    },

    toJSON(message: HealthCheck_GrpcHealthCheck): unknown {
        const obj: any = {};
        message.serviceName !== undefined &&
            (obj.serviceName = message.serviceName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<HealthCheck_GrpcHealthCheck>
    ): HealthCheck_GrpcHealthCheck {
        const message = {
            ...baseHealthCheck_GrpcHealthCheck,
        } as HealthCheck_GrpcHealthCheck;
        if (object.serviceName !== undefined && object.serviceName !== null) {
            message.serviceName = object.serviceName;
        } else {
            message.serviceName = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    HealthCheck_GrpcHealthCheck.$type,
    HealthCheck_GrpcHealthCheck
);

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
