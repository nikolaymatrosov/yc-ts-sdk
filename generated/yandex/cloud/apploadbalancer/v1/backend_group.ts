/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Int64Value } from '../../../../google/protobuf/wrappers';
import { Payload } from '../../../../yandex/cloud/apploadbalancer/v1/payload';
import { ValidationContext } from '../../../../yandex/cloud/apploadbalancer/v1/tls';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';

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
    labels: { [key: string]: string };
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

const baseBackendGroup: object = {
    id: '',
    name: '',
    description: '',
    folderId: '',
};

export const BackendGroup = {
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
                { key: key as any, value },
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
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        return message;
    },
};

const baseBackendGroup_LabelsEntry: object = { key: '', value: '' };

export const BackendGroup_LabelsEntry = {
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

const baseHttpBackendGroup: object = {};

export const HttpBackendGroup = {
    encode(
        message: HttpBackendGroup,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.backends) {
            HttpBackend.encode(v!, writer.uint32(10).fork()).ldelim();
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
        return message;
    },
};

const baseGrpcBackendGroup: object = {};

export const GrpcBackendGroup = {
    encode(
        message: GrpcBackendGroup,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.backends) {
            GrpcBackend.encode(v!, writer.uint32(10).fork()).ldelim();
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
        return message;
    },
};

const baseHeaderSessionAffinity: object = { headerName: '' };

export const HeaderSessionAffinity = {
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

const baseCookieSessionAffinity: object = { name: '' };

export const CookieSessionAffinity = {
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

const baseConnectionSessionAffinity: object = { sourceIp: false };

export const ConnectionSessionAffinity = {
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

const baseLoadBalancingConfig: object = {
    panicThreshold: 0,
    localityAwareRoutingPercent: 0,
    strictLocality: false,
};

export const LoadBalancingConfig = {
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
        return message;
    },
};

const baseHttpBackend: object = { name: '', port: 0, useHttp2: false };

export const HttpBackend = {
    encode(
        message: HttpBackend,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.backendWeight !== undefined) {
            Int64Value.encode(
                { value: message.backendWeight! },
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

const baseGrpcBackend: object = { name: '', port: 0 };

export const GrpcBackend = {
    encode(
        message: GrpcBackend,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.backendWeight !== undefined) {
            Int64Value.encode(
                { value: message.backendWeight! },
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

const baseTargetGroupsBackend: object = { targetGroupIds: '' };

export const TargetGroupsBackend = {
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

const baseBackendTls: object = { sni: '' };

export const BackendTls = {
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

const baseHealthCheck: object = {
    intervalJitterPercent: 0,
    healthyThreshold: 0,
    unhealthyThreshold: 0,
    healthcheckPort: 0,
};

export const HealthCheck = {
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

const baseHealthCheck_StreamHealthCheck: object = {};

export const HealthCheck_StreamHealthCheck = {
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

const baseHealthCheck_HttpHealthCheck: object = {
    host: '',
    path: '',
    useHttp2: false,
};

export const HealthCheck_HttpHealthCheck = {
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

const baseHealthCheck_GrpcHealthCheck: object = { serviceName: '' };

export const HealthCheck_GrpcHealthCheck = {
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

declare var self: any | undefined;
declare var window: any | undefined;
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
