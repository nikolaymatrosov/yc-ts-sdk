import { Target } from '../../../../yandex/cloud/apploadbalancer/v1/target_group';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/**
 * An application load balancer resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer).
 */
export interface LoadBalancer {
    /** ID of the application load balancer. Generated at creation time. */
    id: string;
    /** Name of the application load balancer. The name is unique within the folder. */
    name: string;
    /** Description of the application load balancer. */
    description: string;
    /** ID of the folder that the application load balancer belongs to. */
    folderId: string;
    /**
     * Application load balancer labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /** Status of the application load balancer. */
    status: LoadBalancer_Status;
    /**
     * ID of the region that the application load balancer is located at.
     *
     * Currently Yandex Cloud supports only `ru-central1` region.
     */
    regionId: string;
    /** ID of the network that the application load balancer belongs to. */
    networkId: string;
    /**
     * Listeners that belong to the application load balancer.
     *
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
     */
    listeners: Listener[];
    /**
     * Locality settings of the application load balancer.
     *
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
     */
    allocationPolicy: AllocationPolicy | undefined;
    /**
     * ID of the log group that stores access logs of the application load balancer.
     *
     * The logs can be accessed using a Cloud Functions [trigger for Cloud Logs](/docs/functions/operations/trigger/cloudlogs-trigger-create).
     */
    logGroupId: string;
    /**
     * ID's of the security groups attributed to the application load balancer.
     *
     * For details about the concept,
     * see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#security-groups).
     */
    securityGroupIds: string[];
    /** Creation timestamp. */
    createdAt: Date | undefined;
}
export declare enum LoadBalancer_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The application load balancer is being created. */
    CREATING = 1,
    /** STARTING - The application load balancer is being started. */
    STARTING = 2,
    /** ACTIVE - The application load balancer is active and sends traffic to the targets. */
    ACTIVE = 3,
    /** STOPPING - The application load balancer is being stopped. */
    STOPPING = 4,
    /** STOPPED - The application load balancer is stopped and doesn't send traffic to the targets. */
    STOPPED = 5,
    /** DELETING - The application load balancer is being deleted. */
    DELETING = 6,
    UNRECOGNIZED = -1
}
export declare function loadBalancer_StatusFromJSON(object: any): LoadBalancer_Status;
export declare function loadBalancer_StatusToJSON(object: LoadBalancer_Status): string;
export interface LoadBalancer_LabelsEntry {
    key: string;
    value: string;
}
/** An endpoint address resource. */
export interface Address {
    /** Public IPv4 endpoint address. */
    externalIpv4Address: ExternalIpv4Address | undefined;
    /**
     * Internal IPv4 endpoint address.
     *
     * To enable the use of listeners with internal addresses, [contact support](https://console.cloud.yandex.ru/support).
     */
    internalIpv4Address: InternalIpv4Address | undefined;
    /** Public IPv6 endpoint address. */
    externalIpv6Address: ExternalIpv6Address | undefined;
}
/** A public (external) IPv4 endpoint address resource. */
export interface ExternalIpv4Address {
    /** IPv4 address. */
    address: string;
}
/** An internal IPv4 endpoint address resource. */
export interface InternalIpv4Address {
    /** IPv4 address. */
    address: string;
    /** ID of the subnet that the address belongs to. */
    subnetId: string;
}
/** A public (external) IPv4 endpoint address resource. */
export interface ExternalIpv6Address {
    /** IPv6 address. */
    address: string;
}
/**
 * An application load balancer location resource.
 *
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#lb-location).
 */
export interface Location {
    /**
     * ID of the availability zone where the application load balancer resides.
     *
     * Each Yandex Cloud availability zone can only be specified once.
     */
    zoneId: string;
    /** ID of the subnet that the application load balancer belongs to. */
    subnetId: string;
    /**
     * Disables the load balancer node in the specified availability zone.
     *
     * Backends in the availability zone are not directly affected by this setting.
     * They still may receive traffic from the load balancer nodes in other availability zones,
     * subject to [LoadBalancingConfig.locality_aware_routing_percent] and [LoadBalancingConfig.strict_locality] settings.
     */
    disableTraffic: boolean;
}
/** A locality settings (allocation policy) resource. */
export interface AllocationPolicy {
    /** Availability zones and subnets that the application load balancer resides. */
    locations: Location[];
}
/**
 * A listener resource.
 *
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/application-load-balancer#listener).
 */
export interface Listener {
    /**
     * Name of the listener. The name is unique within the application load balancer.
     * The string length in characters is 3-63.
     */
    name: string;
    /**
     * Endpoints of the listener.
     *
     * Endpoints are defined by their IP addresses and ports.
     */
    endpoints: Endpoint[];
    /** HTTP listener settings. */
    http: HttpListener | undefined;
    /** HTTPS (HTTP over TLS) listener settings. */
    tls: TlsListener | undefined;
    /** TCP listener settings. */
    tcp: TcpListener | undefined;
}
/** An endpoint resource. */
export interface Endpoint {
    /** Endpoint public (external) and internal addresses. */
    addresses: Address[];
    /** Endpoint ports. */
    ports: number[];
}
/** An HTTP listener resource. */
export interface HttpListener {
    /**
     * Settings for handling HTTP requests.
     *
     * Only one of `handler` and [redirects] can be specified.
     */
    handler: HttpHandler | undefined;
    /**
     * Redirects settings.
     *
     * Only one of `redirects` and [handler] can be specified.
     */
    redirects: Redirects | undefined;
}
/** An HTTPS (HTTP over TLS) listener resource. */
export interface TlsListener {
    /**
     * Settings for handling HTTPS requests by default,
     * with Server Name Indication (SNI) not matching any of the [sni_handlers].
     */
    defaultHandler: TlsHandler | undefined;
    /**
     * Settings for handling HTTPS requests with Server Name Indication (SNI)
     * matching one of [SniMatch.server_names] values.
     */
    sniHandlers: SniMatch[];
}
/** A TCP listener resource. */
export interface TcpListener {
    handler: StreamHandler | undefined;
}
/** An HTTP/2 options resource. */
export interface Http2Options {
    /** Maximum number of concurrent HTTP/2 streams in a connection. */
    maxConcurrentStreams: number;
}
/** A stream handler resource. */
export interface StreamHandler {
    backendGroupId: string;
}
/** An HTTP handler resource. */
export interface HttpHandler {
    /**
     * ID of the HTTP router processing requests.
     *
     * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/http-router).
     */
    httpRouterId: string;
    /**
     * HTTP/2 settings.
     *
     * If specified, incoming HTTP/2 requests are supported by the listener.
     */
    http2Options: Http2Options | undefined;
    /** Enables support for incoming HTTP/1.0 and HTTP/1.1 requests and disables it for HTTP/2 requests. */
    allowHttp10: boolean | undefined;
}
/** A listener redirects resource. */
export interface Redirects {
    /**
     * Redirects all unencrypted HTTP requests to the same URI with scheme changed to `https`.
     *
     * The setting has the same effect as a single, catch-all [HttpRoute]
     * with [RedirectAction.replace_scheme] set to `https`.
     */
    httpToHttps: boolean;
}
/** A SNI handler resource. */
export interface SniMatch {
    /** Name of the SNI handler. */
    name: string;
    /** Server names that are matched by the SNI handler. */
    serverNames: string[];
    /** Settings for handling requests with Server Name Indication (SNI) matching one of [server_names] values. */
    handler: TlsHandler | undefined;
}
/** An HTTPS (HTTP over TLS) handler resource. */
export interface TlsHandler {
    /** HTTP handler. */
    httpHandler: HttpHandler | undefined;
    /** Stream handler */
    streamHandler: StreamHandler | undefined;
    /**
     * ID's of the TLS server certificates from [Certificate Manager](/docs/certificate-manager/).
     *
     * RSA and ECDSA certificates are supported, and only the first certificate of each type is used.
     */
    certificateIds: string[];
}
/** A target state resource. */
export interface TargetState {
    /** Health of the target, i.e. its statuses in all availability zones. */
    status: TargetState_HealthcheckStatus | undefined;
    /** Target. */
    target: Target | undefined;
}
/** Supported target statuses. */
export declare enum TargetState_Status {
    STATUS_UNSPECIFIED = 0,
    /**
     * HEALTHY - All of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] are passed
     * (the number depends on the [HealthCheck.healthy_threshold] setting) and the target is ready to receive traffic.
     */
    HEALTHY = 1,
    /**
     * PARTIALLY_HEALTHY - Some of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] failed
     * (the number depends on the [HealthCheck.unhealthy_threshold] setting).
     * The target is ready to receive traffic from the load balancer nodes which, based on their health checks,
     * consider the target healthy.
     */
    PARTIALLY_HEALTHY = 2,
    /**
     * UNHEALTHY - All of the health checks specified in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks] failed
     * (the number depends on the [HealthCheck.unhealthy_threshold] setting) and the target is not receiving traffic.
     */
    UNHEALTHY = 3,
    /** DRAINING - Target is being deleted and the application load balancer is no longer sending traffic to this target. */
    DRAINING = 4,
    TIMEOUT = 5,
    UNRECOGNIZED = -1
}
export declare function targetState_StatusFromJSON(object: any): TargetState_Status;
export declare function targetState_StatusToJSON(object: TargetState_Status): string;
/** Health of the target. */
export interface TargetState_HealthcheckStatus {
    /** Statuses of the target in its availability zones. */
    zoneStatuses: TargetState_ZoneHealthcheckStatus[];
}
/** Health of the target in the availability zone. */
export interface TargetState_ZoneHealthcheckStatus {
    /** ID of the availability zone. */
    zoneId: string;
    /** Status of the target in the availability zone. */
    status: TargetState_Status;
    /**
     * Indicates whether the target has been marked `UNHEALTHY` due to failing active health checks,
     * which determine target statuses as configured in [HttpBackend.healthchecks] or [GrpcBackend.healthchecks].
     *
     * Currently the only type of health checks is active, as described above.
     * Passive health checks, which determine the health of a target based on its responses to production requests
     * (HTTP 5xx status codes, connection errors etc.), are not implemented yet.
     */
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
export declare const TcpListener: {
    encode(message: TcpListener, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TcpListener;
    fromJSON(object: any): TcpListener;
    toJSON(message: TcpListener): unknown;
    fromPartial(object: DeepPartial<TcpListener>): TcpListener;
};
export declare const Http2Options: {
    encode(message: Http2Options, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Http2Options;
    fromJSON(object: any): Http2Options;
    toJSON(message: Http2Options): unknown;
    fromPartial(object: DeepPartial<Http2Options>): Http2Options;
};
export declare const StreamHandler: {
    encode(message: StreamHandler, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamHandler;
    fromJSON(object: any): StreamHandler;
    toJSON(message: StreamHandler): unknown;
    fromPartial(object: DeepPartial<StreamHandler>): StreamHandler;
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
