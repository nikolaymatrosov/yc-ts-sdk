import { Duration } from '../../../../google/protobuf/duration';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.loadbalancer.v1";
/** A HealthCheck resource. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
export interface HealthCheck {
    $type: 'yandex.cloud.loadbalancer.v1.HealthCheck';
    /** Name of the health check. The name must be unique for each target group that attached to a single load balancer. 3-63 characters long. */
    name: string;
    /** The interval between health checks. The default is 2 seconds. */
    interval: Duration | undefined;
    /** Timeout for a target to return a response for the health check. The default is 1 second. */
    timeout: Duration | undefined;
    /** Number of failed health checks before changing the status to `` UNHEALTHY ``. The default is 2. */
    unhealthyThreshold: number;
    /** Number of successful health checks required in order to set the `` HEALTHY `` status for the target. The default is 2. */
    healthyThreshold: number;
    /** Options for TCP health check. */
    tcpOptions: HealthCheck_TcpOptions | undefined;
    /** Options for HTTP health check. */
    httpOptions: HealthCheck_HttpOptions | undefined;
}
/** Configuration option for a TCP health check. */
export interface HealthCheck_TcpOptions {
    $type: 'yandex.cloud.loadbalancer.v1.HealthCheck.TcpOptions';
    /** Port to use for TCP health checks. */
    port: number;
}
/** Configuration option for an HTTP health check. */
export interface HealthCheck_HttpOptions {
    $type: 'yandex.cloud.loadbalancer.v1.HealthCheck.HttpOptions';
    /** Port to use for HTTP health checks. */
    port: number;
    /**
     * URL path to set for health checking requests for every target in the target group.
     * For example `` /ping ``. The default path is `` / ``.
     */
    path: string;
}
export declare const HealthCheck: {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck";
    encode(message: HealthCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck;
    fromJSON(object: any): HealthCheck;
    toJSON(message: HealthCheck): unknown;
    fromPartial(object: DeepPartial<HealthCheck>): HealthCheck;
};
export declare const HealthCheck_TcpOptions: {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck.TcpOptions";
    encode(message: HealthCheck_TcpOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck_TcpOptions;
    fromJSON(object: any): HealthCheck_TcpOptions;
    toJSON(message: HealthCheck_TcpOptions): unknown;
    fromPartial(object: DeepPartial<HealthCheck_TcpOptions>): HealthCheck_TcpOptions;
};
export declare const HealthCheck_HttpOptions: {
    $type: "yandex.cloud.loadbalancer.v1.HealthCheck.HttpOptions";
    encode(message: HealthCheck_HttpOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HealthCheck_HttpOptions;
    fromJSON(object: any): HealthCheck_HttpOptions;
    toJSON(message: HealthCheck_HttpOptions): unknown;
    fromPartial(object: DeepPartial<HealthCheck_HttpOptions>): HealthCheck_HttpOptions;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
