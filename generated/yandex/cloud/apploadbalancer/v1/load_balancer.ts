/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Target } from '../../../../yandex/cloud/apploadbalancer/v1/target_group';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';

/** A LoadBalancer resource. */
export interface LoadBalancer {
    /** Output only. ID of the load balancer. */
    id: string;
    /** The name is unique within the folder. 3-63 characters long. */
    name: string;
    /** Description of the load balancer. 0-256 characters long. */
    description: string;
    /** ID of the folder that the load balancer belongs to. */
    folderId: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Status of the application load balancer. */
    status: LoadBalancer_Status;
    /** ID of the region that the load balancer located at. */
    regionId: string;
    /** ID of the network that the load balancer located at. */
    networkId: string;
    /** List of listeners for the application load balancer. */
    listeners: Listener[];
    /** Allocation sites for application load balancer instances. */
    allocationPolicy: AllocationPolicy | undefined;
    /** Cloud log group used by the load balancer to store access logs. */
    logGroupId: string;
    /** ID's of security groups attached to the load balancer. */
    securityGroupIds: string[];
    /** Creation timestamp for the load balancer. */
    createdAt: Date | undefined;
}

export enum LoadBalancer_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Application load balancer is being created. */
    CREATING = 1,
    /** STARTING - Application load balancer is being started. */
    STARTING = 2,
    /** ACTIVE - Application load balancer is active and sends traffic to the targets. */
    ACTIVE = 3,
    /** STOPPING - Application load balancer is being stopped. */
    STOPPING = 4,
    /** STOPPED - Application load balancer is stopped and doesn't send traffic to the targets. */
    STOPPED = 5,
    /** DELETING - Application load balancer is being deleted. */
    DELETING = 6,
    UNRECOGNIZED = -1,
}

export function loadBalancer_StatusFromJSON(object: any): LoadBalancer_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return LoadBalancer_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return LoadBalancer_Status.CREATING;
        case 2:
        case 'STARTING':
            return LoadBalancer_Status.STARTING;
        case 3:
        case 'ACTIVE':
            return LoadBalancer_Status.ACTIVE;
        case 4:
        case 'STOPPING':
            return LoadBalancer_Status.STOPPING;
        case 5:
        case 'STOPPED':
            return LoadBalancer_Status.STOPPED;
        case 6:
        case 'DELETING':
            return LoadBalancer_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LoadBalancer_Status.UNRECOGNIZED;
    }
}

export function loadBalancer_StatusToJSON(object: LoadBalancer_Status): string {
    switch (object) {
        case LoadBalancer_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case LoadBalancer_Status.CREATING:
            return 'CREATING';
        case LoadBalancer_Status.STARTING:
            return 'STARTING';
        case LoadBalancer_Status.ACTIVE:
            return 'ACTIVE';
        case LoadBalancer_Status.STOPPING:
            return 'STOPPING';
        case LoadBalancer_Status.STOPPED:
            return 'STOPPED';
        case LoadBalancer_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface LoadBalancer_LabelsEntry {
    key: string;
    value: string;
}

export interface Address {
    externalIpv4Address: ExternalIpv4Address | undefined;
    internalIpv4Address: InternalIpv4Address | undefined;
    externalIpv6Address: ExternalIpv6Address | undefined;
}

export interface ExternalIpv4Address {
    address: string;
}

export interface InternalIpv4Address {
    address: string;
    subnetId: string;
}

export interface ExternalIpv6Address {
    address: string;
}

export interface Location {
    zoneId: string;
    subnetId: string;
    /** If set, will disable all L7 instances in the zone for request handling. */
    disableTraffic: boolean;
}

export interface AllocationPolicy {
    locations: Location[];
}

/** A Listener resource. */
export interface Listener {
    /** Name of the listener. The name must be unique for each listener on a single load balancer. 3-63 characters long. */
    name: string;
    /** Network endpoints (addresses and ports) of the listener. */
    endpoints: Endpoint[];
    http: HttpListener | undefined;
    tls: TlsListener | undefined;
}

export interface Endpoint {
    addresses: Address[];
    ports: number[];
}

export interface HttpListener {
    /** Sets plaintext HTTP router, optional. */
    handler: HttpHandler | undefined;
    /**
     * Shortcut for adding http -> https redirects,
     * can be used instead of the HttpHandler above.
     */
    redirects: Redirects | undefined;
}

export interface TlsListener {
    defaultHandler: TlsHandler | undefined;
    sniHandlers: SniMatch[];
}

export interface Http2Options {
    maxConcurrentStreams: number;
}

export interface HttpHandler {
    httpRouterId: string;
    /** If set, will enable HTTP2 protocol for the handler. */
    http2Options: Http2Options | undefined;
    /** If set, will enable only HTTP1 protocol with HTTP1.0 support. */
    allowHttp10: boolean | undefined;
}

export interface Redirects {
    /** Adds "*" VirtualHost with a http -> https redirect. */
    httpToHttps: boolean;
}

export interface SniMatch {
    name: string;
    serverNames: string[];
    handler: TlsHandler | undefined;
}

export interface TlsHandler {
    httpHandler: HttpHandler | undefined;
    /**
     * Certificate IDs in the Certificate Manager.
     * Multiple TLS certificates can be associated with the same context to allow
     * both RSA and ECDSA certificates.
     * Only the first certificate of each type will be used.
     */
    certificateIds: string[];
}

export interface TargetState {
    /** Statuses of the target for all known zones. */
    status: TargetState_HealthcheckStatus | undefined;
    target: Target | undefined;
}

export enum TargetState_Status {
    STATUS_UNSPECIFIED = 0,
    HEALTHY = 1,
    PARTIALLY_HEALTHY = 2,
    UNHEALTHY = 3,
    DRAINING = 4,
    TIMEOUT = 5,
    UNRECOGNIZED = -1,
}

export function targetState_StatusFromJSON(object: any): TargetState_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return TargetState_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'HEALTHY':
            return TargetState_Status.HEALTHY;
        case 2:
        case 'PARTIALLY_HEALTHY':
            return TargetState_Status.PARTIALLY_HEALTHY;
        case 3:
        case 'UNHEALTHY':
            return TargetState_Status.UNHEALTHY;
        case 4:
        case 'DRAINING':
            return TargetState_Status.DRAINING;
        case 5:
        case 'TIMEOUT':
            return TargetState_Status.TIMEOUT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TargetState_Status.UNRECOGNIZED;
    }
}

export function targetState_StatusToJSON(object: TargetState_Status): string {
    switch (object) {
        case TargetState_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case TargetState_Status.HEALTHY:
            return 'HEALTHY';
        case TargetState_Status.PARTIALLY_HEALTHY:
            return 'PARTIALLY_HEALTHY';
        case TargetState_Status.UNHEALTHY:
            return 'UNHEALTHY';
        case TargetState_Status.DRAINING:
            return 'DRAINING';
        case TargetState_Status.TIMEOUT:
            return 'TIMEOUT';
        default:
            return 'UNKNOWN';
    }
}

export interface TargetState_HealthcheckStatus {
    zoneStatuses: TargetState_ZoneHealthcheckStatus[];
}

export interface TargetState_ZoneHealthcheckStatus {
    zoneId: string;
    /** Healthcheck status of target for the specific zone. */
    status: TargetState_Status;
    /** Whether UNHEALTHY status was set due to failed active checks or not. */
    failedActiveHc: boolean;
}

const baseLoadBalancer: object = {
    id: '',
    name: '',
    description: '',
    folderId: '',
    status: 0,
    regionId: '',
    networkId: '',
    logGroupId: '',
    securityGroupIds: '',
};

export const LoadBalancer = {
    encode(
        message: LoadBalancer,
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
            LoadBalancer_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.regionId !== '') {
            writer.uint32(58).string(message.regionId);
        }
        if (message.networkId !== '') {
            writer.uint32(66).string(message.networkId);
        }
        for (const v of message.listeners) {
            Listener.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        if (message.allocationPolicy !== undefined) {
            AllocationPolicy.encode(
                message.allocationPolicy,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.logGroupId !== '') {
            writer.uint32(90).string(message.logGroupId);
        }
        for (const v of message.securityGroupIds) {
            writer.uint32(98).string(v!);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(106).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LoadBalancer {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoadBalancer } as LoadBalancer;
        message.labels = {};
        message.listeners = [];
        message.securityGroupIds = [];
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
                    const entry5 = LoadBalancer_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.status = reader.int32() as any;
                    break;
                case 7:
                    message.regionId = reader.string();
                    break;
                case 8:
                    message.networkId = reader.string();
                    break;
                case 9:
                    message.listeners.push(
                        Listener.decode(reader, reader.uint32())
                    );
                    break;
                case 10:
                    message.allocationPolicy = AllocationPolicy.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 11:
                    message.logGroupId = reader.string();
                    break;
                case 12:
                    message.securityGroupIds.push(reader.string());
                    break;
                case 13:
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

    fromJSON(object: any): LoadBalancer {
        const message = { ...baseLoadBalancer } as LoadBalancer;
        message.labels = {};
        message.listeners = [];
        message.securityGroupIds = [];
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
        if (object.status !== undefined && object.status !== null) {
            message.status = loadBalancer_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = String(object.regionId);
        } else {
            message.regionId = '';
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (object.listeners !== undefined && object.listeners !== null) {
            for (const e of object.listeners) {
                message.listeners.push(Listener.fromJSON(e));
            }
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromJSON(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        } else {
            message.logGroupId = '';
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(String(e));
            }
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        return message;
    },

    toJSON(message: LoadBalancer): unknown {
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
        message.status !== undefined &&
            (obj.status = loadBalancer_StatusToJSON(message.status));
        message.regionId !== undefined && (obj.regionId = message.regionId);
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.listeners) {
            obj.listeners = message.listeners.map((e) =>
                e ? Listener.toJSON(e) : undefined
            );
        } else {
            obj.listeners = [];
        }
        message.allocationPolicy !== undefined &&
            (obj.allocationPolicy = message.allocationPolicy
                ? AllocationPolicy.toJSON(message.allocationPolicy)
                : undefined);
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        if (message.securityGroupIds) {
            obj.securityGroupIds = message.securityGroupIds.map((e) => e);
        } else {
            obj.securityGroupIds = [];
        }
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<LoadBalancer>): LoadBalancer {
        const message = { ...baseLoadBalancer } as LoadBalancer;
        message.labels = {};
        message.listeners = [];
        message.securityGroupIds = [];
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.regionId !== undefined && object.regionId !== null) {
            message.regionId = object.regionId;
        } else {
            message.regionId = '';
        }
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (object.listeners !== undefined && object.listeners !== null) {
            for (const e of object.listeners) {
                message.listeners.push(Listener.fromPartial(e));
            }
        }
        if (
            object.allocationPolicy !== undefined &&
            object.allocationPolicy !== null
        ) {
            message.allocationPolicy = AllocationPolicy.fromPartial(
                object.allocationPolicy
            );
        } else {
            message.allocationPolicy = undefined;
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        } else {
            message.logGroupId = '';
        }
        if (
            object.securityGroupIds !== undefined &&
            object.securityGroupIds !== null
        ) {
            for (const e of object.securityGroupIds) {
                message.securityGroupIds.push(e);
            }
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        return message;
    },
};

const baseLoadBalancer_LabelsEntry: object = { key: '', value: '' };

export const LoadBalancer_LabelsEntry = {
    encode(
        message: LoadBalancer_LabelsEntry,
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
    ): LoadBalancer_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseLoadBalancer_LabelsEntry,
        } as LoadBalancer_LabelsEntry;
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

    fromJSON(object: any): LoadBalancer_LabelsEntry {
        const message = {
            ...baseLoadBalancer_LabelsEntry,
        } as LoadBalancer_LabelsEntry;
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

    toJSON(message: LoadBalancer_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<LoadBalancer_LabelsEntry>
    ): LoadBalancer_LabelsEntry {
        const message = {
            ...baseLoadBalancer_LabelsEntry,
        } as LoadBalancer_LabelsEntry;
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

const baseAddress: object = {};

export const Address = {
    encode(
        message: Address,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.externalIpv4Address !== undefined) {
            ExternalIpv4Address.encode(
                message.externalIpv4Address,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.internalIpv4Address !== undefined) {
            InternalIpv4Address.encode(
                message.internalIpv4Address,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.externalIpv6Address !== undefined) {
            ExternalIpv6Address.encode(
                message.externalIpv6Address,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Address {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddress } as Address;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalIpv4Address = ExternalIpv4Address.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.internalIpv4Address = InternalIpv4Address.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.externalIpv6Address = ExternalIpv6Address.decode(
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

    fromJSON(object: any): Address {
        const message = { ...baseAddress } as Address;
        if (
            object.externalIpv4Address !== undefined &&
            object.externalIpv4Address !== null
        ) {
            message.externalIpv4Address = ExternalIpv4Address.fromJSON(
                object.externalIpv4Address
            );
        } else {
            message.externalIpv4Address = undefined;
        }
        if (
            object.internalIpv4Address !== undefined &&
            object.internalIpv4Address !== null
        ) {
            message.internalIpv4Address = InternalIpv4Address.fromJSON(
                object.internalIpv4Address
            );
        } else {
            message.internalIpv4Address = undefined;
        }
        if (
            object.externalIpv6Address !== undefined &&
            object.externalIpv6Address !== null
        ) {
            message.externalIpv6Address = ExternalIpv6Address.fromJSON(
                object.externalIpv6Address
            );
        } else {
            message.externalIpv6Address = undefined;
        }
        return message;
    },

    toJSON(message: Address): unknown {
        const obj: any = {};
        message.externalIpv4Address !== undefined &&
            (obj.externalIpv4Address = message.externalIpv4Address
                ? ExternalIpv4Address.toJSON(message.externalIpv4Address)
                : undefined);
        message.internalIpv4Address !== undefined &&
            (obj.internalIpv4Address = message.internalIpv4Address
                ? InternalIpv4Address.toJSON(message.internalIpv4Address)
                : undefined);
        message.externalIpv6Address !== undefined &&
            (obj.externalIpv6Address = message.externalIpv6Address
                ? ExternalIpv6Address.toJSON(message.externalIpv6Address)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Address>): Address {
        const message = { ...baseAddress } as Address;
        if (
            object.externalIpv4Address !== undefined &&
            object.externalIpv4Address !== null
        ) {
            message.externalIpv4Address = ExternalIpv4Address.fromPartial(
                object.externalIpv4Address
            );
        } else {
            message.externalIpv4Address = undefined;
        }
        if (
            object.internalIpv4Address !== undefined &&
            object.internalIpv4Address !== null
        ) {
            message.internalIpv4Address = InternalIpv4Address.fromPartial(
                object.internalIpv4Address
            );
        } else {
            message.internalIpv4Address = undefined;
        }
        if (
            object.externalIpv6Address !== undefined &&
            object.externalIpv6Address !== null
        ) {
            message.externalIpv6Address = ExternalIpv6Address.fromPartial(
                object.externalIpv6Address
            );
        } else {
            message.externalIpv6Address = undefined;
        }
        return message;
    },
};

const baseExternalIpv4Address: object = { address: '' };

export const ExternalIpv4Address = {
    encode(
        message: ExternalIpv4Address,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ExternalIpv4Address {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalIpv4Address } as ExternalIpv4Address;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalIpv4Address {
        const message = { ...baseExternalIpv4Address } as ExternalIpv4Address;
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        return message;
    },

    toJSON(message: ExternalIpv4Address): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },

    fromPartial(object: DeepPartial<ExternalIpv4Address>): ExternalIpv4Address {
        const message = { ...baseExternalIpv4Address } as ExternalIpv4Address;
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        return message;
    },
};

const baseInternalIpv4Address: object = { address: '', subnetId: '' };

export const InternalIpv4Address = {
    encode(
        message: InternalIpv4Address,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): InternalIpv4Address {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInternalIpv4Address } as InternalIpv4Address;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InternalIpv4Address {
        const message = { ...baseInternalIpv4Address } as InternalIpv4Address;
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        return message;
    },

    toJSON(message: InternalIpv4Address): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial(object: DeepPartial<InternalIpv4Address>): InternalIpv4Address {
        const message = { ...baseInternalIpv4Address } as InternalIpv4Address;
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        return message;
    },
};

const baseExternalIpv6Address: object = { address: '' };

export const ExternalIpv6Address = {
    encode(
        message: ExternalIpv6Address,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ExternalIpv6Address {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalIpv6Address } as ExternalIpv6Address;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalIpv6Address {
        const message = { ...baseExternalIpv6Address } as ExternalIpv6Address;
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        return message;
    },

    toJSON(message: ExternalIpv6Address): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },

    fromPartial(object: DeepPartial<ExternalIpv6Address>): ExternalIpv6Address {
        const message = { ...baseExternalIpv6Address } as ExternalIpv6Address;
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        return message;
    },
};

const baseLocation: object = {
    zoneId: '',
    subnetId: '',
    disableTraffic: false,
};

export const Location = {
    encode(
        message: Location,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.subnetId !== '') {
            writer.uint32(18).string(message.subnetId);
        }
        if (message.disableTraffic === true) {
            writer.uint32(24).bool(message.disableTraffic);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Location {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLocation } as Location;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.string();
                    break;
                case 3:
                    message.disableTraffic = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Location {
        const message = { ...baseLocation } as Location;
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
            object.disableTraffic !== undefined &&
            object.disableTraffic !== null
        ) {
            message.disableTraffic = Boolean(object.disableTraffic);
        } else {
            message.disableTraffic = false;
        }
        return message;
    },

    toJSON(message: Location): unknown {
        const obj: any = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.disableTraffic !== undefined &&
            (obj.disableTraffic = message.disableTraffic);
        return obj;
    },

    fromPartial(object: DeepPartial<Location>): Location {
        const message = { ...baseLocation } as Location;
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
            object.disableTraffic !== undefined &&
            object.disableTraffic !== null
        ) {
            message.disableTraffic = object.disableTraffic;
        } else {
            message.disableTraffic = false;
        }
        return message;
    },
};

const baseAllocationPolicy: object = {};

export const AllocationPolicy = {
    encode(
        message: AllocationPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.locations) {
            Location.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AllocationPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAllocationPolicy } as AllocationPolicy;
        message.locations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locations.push(
                        Location.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AllocationPolicy {
        const message = { ...baseAllocationPolicy } as AllocationPolicy;
        message.locations = [];
        if (object.locations !== undefined && object.locations !== null) {
            for (const e of object.locations) {
                message.locations.push(Location.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: AllocationPolicy): unknown {
        const obj: any = {};
        if (message.locations) {
            obj.locations = message.locations.map((e) =>
                e ? Location.toJSON(e) : undefined
            );
        } else {
            obj.locations = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<AllocationPolicy>): AllocationPolicy {
        const message = { ...baseAllocationPolicy } as AllocationPolicy;
        message.locations = [];
        if (object.locations !== undefined && object.locations !== null) {
            for (const e of object.locations) {
                message.locations.push(Location.fromPartial(e));
            }
        }
        return message;
    },
};

const baseListener: object = { name: '' };

export const Listener = {
    encode(
        message: Listener,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.endpoints) {
            Endpoint.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.http !== undefined) {
            HttpListener.encode(
                message.http,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.tls !== undefined) {
            TlsListener.encode(message.tls, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Listener {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListener } as Listener;
        message.endpoints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.endpoints.push(
                        Endpoint.decode(reader, reader.uint32())
                    );
                    break;
                case 3:
                    message.http = HttpListener.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tls = TlsListener.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Listener {
        const message = { ...baseListener } as Listener;
        message.endpoints = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.endpoints !== undefined && object.endpoints !== null) {
            for (const e of object.endpoints) {
                message.endpoints.push(Endpoint.fromJSON(e));
            }
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpListener.fromJSON(object.http);
        } else {
            message.http = undefined;
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = TlsListener.fromJSON(object.tls);
        } else {
            message.tls = undefined;
        }
        return message;
    },

    toJSON(message: Listener): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map((e) =>
                e ? Endpoint.toJSON(e) : undefined
            );
        } else {
            obj.endpoints = [];
        }
        message.http !== undefined &&
            (obj.http = message.http
                ? HttpListener.toJSON(message.http)
                : undefined);
        message.tls !== undefined &&
            (obj.tls = message.tls
                ? TlsListener.toJSON(message.tls)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Listener>): Listener {
        const message = { ...baseListener } as Listener;
        message.endpoints = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.endpoints !== undefined && object.endpoints !== null) {
            for (const e of object.endpoints) {
                message.endpoints.push(Endpoint.fromPartial(e));
            }
        }
        if (object.http !== undefined && object.http !== null) {
            message.http = HttpListener.fromPartial(object.http);
        } else {
            message.http = undefined;
        }
        if (object.tls !== undefined && object.tls !== null) {
            message.tls = TlsListener.fromPartial(object.tls);
        } else {
            message.tls = undefined;
        }
        return message;
    },
};

const baseEndpoint: object = { ports: 0 };

export const Endpoint = {
    encode(
        message: Endpoint,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.addresses) {
            Address.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.ports) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEndpoint } as Endpoint;
        message.addresses = [];
        message.ports = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(
                        Address.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ports.push(
                                longToNumber(reader.int64() as Long)
                            );
                        }
                    } else {
                        message.ports.push(
                            longToNumber(reader.int64() as Long)
                        );
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Endpoint {
        const message = { ...baseEndpoint } as Endpoint;
        message.addresses = [];
        message.ports = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(Address.fromJSON(e));
            }
        }
        if (object.ports !== undefined && object.ports !== null) {
            for (const e of object.ports) {
                message.ports.push(Number(e));
            }
        }
        return message;
    },

    toJSON(message: Endpoint): unknown {
        const obj: any = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) =>
                e ? Address.toJSON(e) : undefined
            );
        } else {
            obj.addresses = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map((e) => e);
        } else {
            obj.ports = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Endpoint>): Endpoint {
        const message = { ...baseEndpoint } as Endpoint;
        message.addresses = [];
        message.ports = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(Address.fromPartial(e));
            }
        }
        if (object.ports !== undefined && object.ports !== null) {
            for (const e of object.ports) {
                message.ports.push(e);
            }
        }
        return message;
    },
};

const baseHttpListener: object = {};

export const HttpListener = {
    encode(
        message: HttpListener,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.handler !== undefined) {
            HttpHandler.encode(
                message.handler,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.redirects !== undefined) {
            Redirects.encode(
                message.redirects,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpListener {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpListener } as HttpListener;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.handler = HttpHandler.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.redirects = Redirects.decode(
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

    fromJSON(object: any): HttpListener {
        const message = { ...baseHttpListener } as HttpListener;
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = HttpHandler.fromJSON(object.handler);
        } else {
            message.handler = undefined;
        }
        if (object.redirects !== undefined && object.redirects !== null) {
            message.redirects = Redirects.fromJSON(object.redirects);
        } else {
            message.redirects = undefined;
        }
        return message;
    },

    toJSON(message: HttpListener): unknown {
        const obj: any = {};
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? HttpHandler.toJSON(message.handler)
                : undefined);
        message.redirects !== undefined &&
            (obj.redirects = message.redirects
                ? Redirects.toJSON(message.redirects)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<HttpListener>): HttpListener {
        const message = { ...baseHttpListener } as HttpListener;
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = HttpHandler.fromPartial(object.handler);
        } else {
            message.handler = undefined;
        }
        if (object.redirects !== undefined && object.redirects !== null) {
            message.redirects = Redirects.fromPartial(object.redirects);
        } else {
            message.redirects = undefined;
        }
        return message;
    },
};

const baseTlsListener: object = {};

export const TlsListener = {
    encode(
        message: TlsListener,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.defaultHandler !== undefined) {
            TlsHandler.encode(
                message.defaultHandler,
                writer.uint32(10).fork()
            ).ldelim();
        }
        for (const v of message.sniHandlers) {
            SniMatch.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TlsListener {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTlsListener } as TlsListener;
        message.sniHandlers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultHandler = TlsHandler.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.sniHandlers.push(
                        SniMatch.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TlsListener {
        const message = { ...baseTlsListener } as TlsListener;
        message.sniHandlers = [];
        if (
            object.defaultHandler !== undefined &&
            object.defaultHandler !== null
        ) {
            message.defaultHandler = TlsHandler.fromJSON(object.defaultHandler);
        } else {
            message.defaultHandler = undefined;
        }
        if (object.sniHandlers !== undefined && object.sniHandlers !== null) {
            for (const e of object.sniHandlers) {
                message.sniHandlers.push(SniMatch.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: TlsListener): unknown {
        const obj: any = {};
        message.defaultHandler !== undefined &&
            (obj.defaultHandler = message.defaultHandler
                ? TlsHandler.toJSON(message.defaultHandler)
                : undefined);
        if (message.sniHandlers) {
            obj.sniHandlers = message.sniHandlers.map((e) =>
                e ? SniMatch.toJSON(e) : undefined
            );
        } else {
            obj.sniHandlers = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<TlsListener>): TlsListener {
        const message = { ...baseTlsListener } as TlsListener;
        message.sniHandlers = [];
        if (
            object.defaultHandler !== undefined &&
            object.defaultHandler !== null
        ) {
            message.defaultHandler = TlsHandler.fromPartial(
                object.defaultHandler
            );
        } else {
            message.defaultHandler = undefined;
        }
        if (object.sniHandlers !== undefined && object.sniHandlers !== null) {
            for (const e of object.sniHandlers) {
                message.sniHandlers.push(SniMatch.fromPartial(e));
            }
        }
        return message;
    },
};

const baseHttp2Options: object = { maxConcurrentStreams: 0 };

export const Http2Options = {
    encode(
        message: Http2Options,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.maxConcurrentStreams !== 0) {
            writer.uint32(8).int64(message.maxConcurrentStreams);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Http2Options {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttp2Options } as Http2Options;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxConcurrentStreams = longToNumber(
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

    fromJSON(object: any): Http2Options {
        const message = { ...baseHttp2Options } as Http2Options;
        if (
            object.maxConcurrentStreams !== undefined &&
            object.maxConcurrentStreams !== null
        ) {
            message.maxConcurrentStreams = Number(object.maxConcurrentStreams);
        } else {
            message.maxConcurrentStreams = 0;
        }
        return message;
    },

    toJSON(message: Http2Options): unknown {
        const obj: any = {};
        message.maxConcurrentStreams !== undefined &&
            (obj.maxConcurrentStreams = message.maxConcurrentStreams);
        return obj;
    },

    fromPartial(object: DeepPartial<Http2Options>): Http2Options {
        const message = { ...baseHttp2Options } as Http2Options;
        if (
            object.maxConcurrentStreams !== undefined &&
            object.maxConcurrentStreams !== null
        ) {
            message.maxConcurrentStreams = object.maxConcurrentStreams;
        } else {
            message.maxConcurrentStreams = 0;
        }
        return message;
    },
};

const baseHttpHandler: object = { httpRouterId: '' };

export const HttpHandler = {
    encode(
        message: HttpHandler,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpRouterId !== '') {
            writer.uint32(10).string(message.httpRouterId);
        }
        if (message.http2Options !== undefined) {
            Http2Options.encode(
                message.http2Options,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.allowHttp10 !== undefined) {
            writer.uint32(24).bool(message.allowHttp10);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HttpHandler {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpHandler } as HttpHandler;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpRouterId = reader.string();
                    break;
                case 2:
                    message.http2Options = Http2Options.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.allowHttp10 = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HttpHandler {
        const message = { ...baseHttpHandler } as HttpHandler;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = String(object.httpRouterId);
        } else {
            message.httpRouterId = '';
        }
        if (object.http2Options !== undefined && object.http2Options !== null) {
            message.http2Options = Http2Options.fromJSON(object.http2Options);
        } else {
            message.http2Options = undefined;
        }
        if (object.allowHttp10 !== undefined && object.allowHttp10 !== null) {
            message.allowHttp10 = Boolean(object.allowHttp10);
        } else {
            message.allowHttp10 = undefined;
        }
        return message;
    },

    toJSON(message: HttpHandler): unknown {
        const obj: any = {};
        message.httpRouterId !== undefined &&
            (obj.httpRouterId = message.httpRouterId);
        message.http2Options !== undefined &&
            (obj.http2Options = message.http2Options
                ? Http2Options.toJSON(message.http2Options)
                : undefined);
        message.allowHttp10 !== undefined &&
            (obj.allowHttp10 = message.allowHttp10);
        return obj;
    },

    fromPartial(object: DeepPartial<HttpHandler>): HttpHandler {
        const message = { ...baseHttpHandler } as HttpHandler;
        if (object.httpRouterId !== undefined && object.httpRouterId !== null) {
            message.httpRouterId = object.httpRouterId;
        } else {
            message.httpRouterId = '';
        }
        if (object.http2Options !== undefined && object.http2Options !== null) {
            message.http2Options = Http2Options.fromPartial(
                object.http2Options
            );
        } else {
            message.http2Options = undefined;
        }
        if (object.allowHttp10 !== undefined && object.allowHttp10 !== null) {
            message.allowHttp10 = object.allowHttp10;
        } else {
            message.allowHttp10 = undefined;
        }
        return message;
    },
};

const baseRedirects: object = { httpToHttps: false };

export const Redirects = {
    encode(
        message: Redirects,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpToHttps === true) {
            writer.uint32(8).bool(message.httpToHttps);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Redirects {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedirects } as Redirects;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpToHttps = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Redirects {
        const message = { ...baseRedirects } as Redirects;
        if (object.httpToHttps !== undefined && object.httpToHttps !== null) {
            message.httpToHttps = Boolean(object.httpToHttps);
        } else {
            message.httpToHttps = false;
        }
        return message;
    },

    toJSON(message: Redirects): unknown {
        const obj: any = {};
        message.httpToHttps !== undefined &&
            (obj.httpToHttps = message.httpToHttps);
        return obj;
    },

    fromPartial(object: DeepPartial<Redirects>): Redirects {
        const message = { ...baseRedirects } as Redirects;
        if (object.httpToHttps !== undefined && object.httpToHttps !== null) {
            message.httpToHttps = object.httpToHttps;
        } else {
            message.httpToHttps = false;
        }
        return message;
    },
};

const baseSniMatch: object = { name: '', serverNames: '' };

export const SniMatch = {
    encode(
        message: SniMatch,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.serverNames) {
            writer.uint32(18).string(v!);
        }
        if (message.handler !== undefined) {
            TlsHandler.encode(
                message.handler,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SniMatch {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSniMatch } as SniMatch;
        message.serverNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.serverNames.push(reader.string());
                    break;
                case 3:
                    message.handler = TlsHandler.decode(
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

    fromJSON(object: any): SniMatch {
        const message = { ...baseSniMatch } as SniMatch;
        message.serverNames = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.serverNames !== undefined && object.serverNames !== null) {
            for (const e of object.serverNames) {
                message.serverNames.push(String(e));
            }
        }
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = TlsHandler.fromJSON(object.handler);
        } else {
            message.handler = undefined;
        }
        return message;
    },

    toJSON(message: SniMatch): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.serverNames) {
            obj.serverNames = message.serverNames.map((e) => e);
        } else {
            obj.serverNames = [];
        }
        message.handler !== undefined &&
            (obj.handler = message.handler
                ? TlsHandler.toJSON(message.handler)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<SniMatch>): SniMatch {
        const message = { ...baseSniMatch } as SniMatch;
        message.serverNames = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.serverNames !== undefined && object.serverNames !== null) {
            for (const e of object.serverNames) {
                message.serverNames.push(e);
            }
        }
        if (object.handler !== undefined && object.handler !== null) {
            message.handler = TlsHandler.fromPartial(object.handler);
        } else {
            message.handler = undefined;
        }
        return message;
    },
};

const baseTlsHandler: object = { certificateIds: '' };

export const TlsHandler = {
    encode(
        message: TlsHandler,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.httpHandler !== undefined) {
            HttpHandler.encode(
                message.httpHandler,
                writer.uint32(18).fork()
            ).ldelim();
        }
        for (const v of message.certificateIds) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TlsHandler {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTlsHandler } as TlsHandler;
        message.certificateIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.httpHandler = HttpHandler.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.certificateIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TlsHandler {
        const message = { ...baseTlsHandler } as TlsHandler;
        message.certificateIds = [];
        if (object.httpHandler !== undefined && object.httpHandler !== null) {
            message.httpHandler = HttpHandler.fromJSON(object.httpHandler);
        } else {
            message.httpHandler = undefined;
        }
        if (
            object.certificateIds !== undefined &&
            object.certificateIds !== null
        ) {
            for (const e of object.certificateIds) {
                message.certificateIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: TlsHandler): unknown {
        const obj: any = {};
        message.httpHandler !== undefined &&
            (obj.httpHandler = message.httpHandler
                ? HttpHandler.toJSON(message.httpHandler)
                : undefined);
        if (message.certificateIds) {
            obj.certificateIds = message.certificateIds.map((e) => e);
        } else {
            obj.certificateIds = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<TlsHandler>): TlsHandler {
        const message = { ...baseTlsHandler } as TlsHandler;
        message.certificateIds = [];
        if (object.httpHandler !== undefined && object.httpHandler !== null) {
            message.httpHandler = HttpHandler.fromPartial(object.httpHandler);
        } else {
            message.httpHandler = undefined;
        }
        if (
            object.certificateIds !== undefined &&
            object.certificateIds !== null
        ) {
            for (const e of object.certificateIds) {
                message.certificateIds.push(e);
            }
        }
        return message;
    },
};

const baseTargetState: object = {};

export const TargetState = {
    encode(
        message: TargetState,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.status !== undefined) {
            TargetState_HealthcheckStatus.encode(
                message.status,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.target !== undefined) {
            Target.encode(message.target, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TargetState {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTargetState } as TargetState;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = TargetState_HealthcheckStatus.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.target = Target.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TargetState {
        const message = { ...baseTargetState } as TargetState;
        if (object.status !== undefined && object.status !== null) {
            message.status = TargetState_HealthcheckStatus.fromJSON(
                object.status
            );
        } else {
            message.status = undefined;
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = Target.fromJSON(object.target);
        } else {
            message.target = undefined;
        }
        return message;
    },

    toJSON(message: TargetState): unknown {
        const obj: any = {};
        message.status !== undefined &&
            (obj.status = message.status
                ? TargetState_HealthcheckStatus.toJSON(message.status)
                : undefined);
        message.target !== undefined &&
            (obj.target = message.target
                ? Target.toJSON(message.target)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<TargetState>): TargetState {
        const message = { ...baseTargetState } as TargetState;
        if (object.status !== undefined && object.status !== null) {
            message.status = TargetState_HealthcheckStatus.fromPartial(
                object.status
            );
        } else {
            message.status = undefined;
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = Target.fromPartial(object.target);
        } else {
            message.target = undefined;
        }
        return message;
    },
};

const baseTargetState_HealthcheckStatus: object = {};

export const TargetState_HealthcheckStatus = {
    encode(
        message: TargetState_HealthcheckStatus,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.zoneStatuses) {
            TargetState_ZoneHealthcheckStatus.encode(
                v!,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): TargetState_HealthcheckStatus {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTargetState_HealthcheckStatus,
        } as TargetState_HealthcheckStatus;
        message.zoneStatuses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneStatuses.push(
                        TargetState_ZoneHealthcheckStatus.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TargetState_HealthcheckStatus {
        const message = {
            ...baseTargetState_HealthcheckStatus,
        } as TargetState_HealthcheckStatus;
        message.zoneStatuses = [];
        if (object.zoneStatuses !== undefined && object.zoneStatuses !== null) {
            for (const e of object.zoneStatuses) {
                message.zoneStatuses.push(
                    TargetState_ZoneHealthcheckStatus.fromJSON(e)
                );
            }
        }
        return message;
    },

    toJSON(message: TargetState_HealthcheckStatus): unknown {
        const obj: any = {};
        if (message.zoneStatuses) {
            obj.zoneStatuses = message.zoneStatuses.map((e) =>
                e ? TargetState_ZoneHealthcheckStatus.toJSON(e) : undefined
            );
        } else {
            obj.zoneStatuses = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<TargetState_HealthcheckStatus>
    ): TargetState_HealthcheckStatus {
        const message = {
            ...baseTargetState_HealthcheckStatus,
        } as TargetState_HealthcheckStatus;
        message.zoneStatuses = [];
        if (object.zoneStatuses !== undefined && object.zoneStatuses !== null) {
            for (const e of object.zoneStatuses) {
                message.zoneStatuses.push(
                    TargetState_ZoneHealthcheckStatus.fromPartial(e)
                );
            }
        }
        return message;
    },
};

const baseTargetState_ZoneHealthcheckStatus: object = {
    zoneId: '',
    status: 0,
    failedActiveHc: false,
};

export const TargetState_ZoneHealthcheckStatus = {
    encode(
        message: TargetState_ZoneHealthcheckStatus,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.zoneId !== '') {
            writer.uint32(10).string(message.zoneId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.failedActiveHc === true) {
            writer.uint32(24).bool(message.failedActiveHc);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): TargetState_ZoneHealthcheckStatus {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTargetState_ZoneHealthcheckStatus,
        } as TargetState_ZoneHealthcheckStatus;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneId = reader.string();
                    break;
                case 2:
                    message.status = reader.int32() as any;
                    break;
                case 3:
                    message.failedActiveHc = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TargetState_ZoneHealthcheckStatus {
        const message = {
            ...baseTargetState_ZoneHealthcheckStatus,
        } as TargetState_ZoneHealthcheckStatus;
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = targetState_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (
            object.failedActiveHc !== undefined &&
            object.failedActiveHc !== null
        ) {
            message.failedActiveHc = Boolean(object.failedActiveHc);
        } else {
            message.failedActiveHc = false;
        }
        return message;
    },

    toJSON(message: TargetState_ZoneHealthcheckStatus): unknown {
        const obj: any = {};
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.status !== undefined &&
            (obj.status = targetState_StatusToJSON(message.status));
        message.failedActiveHc !== undefined &&
            (obj.failedActiveHc = message.failedActiveHc);
        return obj;
    },

    fromPartial(
        object: DeepPartial<TargetState_ZoneHealthcheckStatus>
    ): TargetState_ZoneHealthcheckStatus {
        const message = {
            ...baseTargetState_ZoneHealthcheckStatus,
        } as TargetState_ZoneHealthcheckStatus;
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (
            object.failedActiveHc !== undefined &&
            object.failedActiveHc !== null
        ) {
            message.failedActiveHc = object.failedActiveHc;
        } else {
            message.failedActiveHc = false;
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
