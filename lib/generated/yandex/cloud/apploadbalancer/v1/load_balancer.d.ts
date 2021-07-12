import { Target } from '../../../../yandex/cloud/apploadbalancer/v1/target_group';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
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
    labels: {
        [key: string]: string;
    };
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
export declare enum LoadBalancer_Status {
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
    UNRECOGNIZED = -1
}
export declare function loadBalancer_StatusFromJSON(object: any): LoadBalancer_Status;
export declare function loadBalancer_StatusToJSON(object: LoadBalancer_Status): string;
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
export declare enum TargetState_Status {
    STATUS_UNSPECIFIED = 0,
    HEALTHY = 1,
    PARTIALLY_HEALTHY = 2,
    UNHEALTHY = 3,
    DRAINING = 4,
    TIMEOUT = 5,
    UNRECOGNIZED = -1
}
export declare function targetState_StatusFromJSON(object: any): TargetState_Status;
export declare function targetState_StatusToJSON(object: TargetState_Status): string;
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
export declare const LoadBalancer: {
    encode(message: LoadBalancer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoadBalancer;
    fromJSON(object: any): LoadBalancer;
    toJSON(message: LoadBalancer): unknown;
    fromPartial(object: DeepPartial<LoadBalancer>): LoadBalancer;
};
export declare const LoadBalancer_LabelsEntry: {
    encode(message: LoadBalancer_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoadBalancer_LabelsEntry;
    fromJSON(object: any): LoadBalancer_LabelsEntry;
    toJSON(message: LoadBalancer_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<LoadBalancer_LabelsEntry>): LoadBalancer_LabelsEntry;
};
export declare const Address: {
    encode(message: Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Address;
    fromJSON(object: any): Address;
    toJSON(message: Address): unknown;
    fromPartial(object: DeepPartial<Address>): Address;
};
export declare const ExternalIpv4Address: {
    encode(message: ExternalIpv4Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv4Address;
    fromJSON(object: any): ExternalIpv4Address;
    toJSON(message: ExternalIpv4Address): unknown;
    fromPartial(object: DeepPartial<ExternalIpv4Address>): ExternalIpv4Address;
};
export declare const InternalIpv4Address: {
    encode(message: InternalIpv4Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InternalIpv4Address;
    fromJSON(object: any): InternalIpv4Address;
    toJSON(message: InternalIpv4Address): unknown;
    fromPartial(object: DeepPartial<InternalIpv4Address>): InternalIpv4Address;
};
export declare const ExternalIpv6Address: {
    encode(message: ExternalIpv6Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv6Address;
    fromJSON(object: any): ExternalIpv6Address;
    toJSON(message: ExternalIpv6Address): unknown;
    fromPartial(object: DeepPartial<ExternalIpv6Address>): ExternalIpv6Address;
};
export declare const Location: {
    encode(message: Location, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Location;
    fromJSON(object: any): Location;
    toJSON(message: Location): unknown;
    fromPartial(object: DeepPartial<Location>): Location;
};
export declare const AllocationPolicy: {
    encode(message: AllocationPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AllocationPolicy;
    fromJSON(object: any): AllocationPolicy;
    toJSON(message: AllocationPolicy): unknown;
    fromPartial(object: DeepPartial<AllocationPolicy>): AllocationPolicy;
};
export declare const Listener: {
    encode(message: Listener, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Listener;
    fromJSON(object: any): Listener;
    toJSON(message: Listener): unknown;
    fromPartial(object: DeepPartial<Listener>): Listener;
};
export declare const Endpoint: {
    encode(message: Endpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Endpoint;
    fromJSON(object: any): Endpoint;
    toJSON(message: Endpoint): unknown;
    fromPartial(object: DeepPartial<Endpoint>): Endpoint;
};
export declare const HttpListener: {
    encode(message: HttpListener, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpListener;
    fromJSON(object: any): HttpListener;
    toJSON(message: HttpListener): unknown;
    fromPartial(object: DeepPartial<HttpListener>): HttpListener;
};
export declare const TlsListener: {
    encode(message: TlsListener, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TlsListener;
    fromJSON(object: any): TlsListener;
    toJSON(message: TlsListener): unknown;
    fromPartial(object: DeepPartial<TlsListener>): TlsListener;
};
export declare const Http2Options: {
    encode(message: Http2Options, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Http2Options;
    fromJSON(object: any): Http2Options;
    toJSON(message: Http2Options): unknown;
    fromPartial(object: DeepPartial<Http2Options>): Http2Options;
};
export declare const HttpHandler: {
    encode(message: HttpHandler, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HttpHandler;
    fromJSON(object: any): HttpHandler;
    toJSON(message: HttpHandler): unknown;
    fromPartial(object: DeepPartial<HttpHandler>): HttpHandler;
};
export declare const Redirects: {
    encode(message: Redirects, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Redirects;
    fromJSON(object: any): Redirects;
    toJSON(message: Redirects): unknown;
    fromPartial(object: DeepPartial<Redirects>): Redirects;
};
export declare const SniMatch: {
    encode(message: SniMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SniMatch;
    fromJSON(object: any): SniMatch;
    toJSON(message: SniMatch): unknown;
    fromPartial(object: DeepPartial<SniMatch>): SniMatch;
};
export declare const TlsHandler: {
    encode(message: TlsHandler, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TlsHandler;
    fromJSON(object: any): TlsHandler;
    toJSON(message: TlsHandler): unknown;
    fromPartial(object: DeepPartial<TlsHandler>): TlsHandler;
};
export declare const TargetState: {
    encode(message: TargetState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetState;
    fromJSON(object: any): TargetState;
    toJSON(message: TargetState): unknown;
    fromPartial(object: DeepPartial<TargetState>): TargetState;
};
export declare const TargetState_HealthcheckStatus: {
    encode(message: TargetState_HealthcheckStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetState_HealthcheckStatus;
    fromJSON(object: any): TargetState_HealthcheckStatus;
    toJSON(message: TargetState_HealthcheckStatus): unknown;
    fromPartial(object: DeepPartial<TargetState_HealthcheckStatus>): TargetState_HealthcheckStatus;
};
export declare const TargetState_ZoneHealthcheckStatus: {
    encode(message: TargetState_ZoneHealthcheckStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetState_ZoneHealthcheckStatus;
    fromJSON(object: any): TargetState_ZoneHealthcheckStatus;
    toJSON(message: TargetState_ZoneHealthcheckStatus): unknown;
    fromPartial(object: DeepPartial<TargetState_ZoneHealthcheckStatus>): TargetState_ZoneHealthcheckStatus;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
