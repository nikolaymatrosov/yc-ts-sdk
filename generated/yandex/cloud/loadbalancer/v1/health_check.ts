/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.loadbalancer.v1';

/** A HealthCheck resource. For more information, see [Health check](/docs/network-load-balancer/concepts/health-check). */
export interface HealthCheck {
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
    /** Port to use for TCP health checks. */
    port: number;
}

/** Configuration option for an HTTP health check. */
export interface HealthCheck_HttpOptions {
    /** Port to use for HTTP health checks. */
    port: number;
    /**
     * URL path to set for health checking requests for every target in the target group.
     * For example `` /ping ``. The default path is `` / ``.
     */
    path: string;
}

const baseHealthCheck: object = {
    name: '',
    unhealthyThreshold: 0,
    healthyThreshold: 0,
};

export const HealthCheck = {
    encode(
        message: HealthCheck,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.interval !== undefined) {
            Duration.encode(
                message.interval,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.timeout !== undefined) {
            Duration.encode(message.timeout, writer.uint32(26).fork()).ldelim();
        }
        if (message.unhealthyThreshold !== 0) {
            writer.uint32(32).int64(message.unhealthyThreshold);
        }
        if (message.healthyThreshold !== 0) {
            writer.uint32(40).int64(message.healthyThreshold);
        }
        if (message.tcpOptions !== undefined) {
            HealthCheck_TcpOptions.encode(
                message.tcpOptions,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.httpOptions !== undefined) {
            HealthCheck_HttpOptions.encode(
                message.httpOptions,
                writer.uint32(58).fork()
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
                    message.name = reader.string();
                    break;
                case 2:
                    message.interval = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timeout = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.unhealthyThreshold = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 5:
                    message.healthyThreshold = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 6:
                    message.tcpOptions = HealthCheck_TcpOptions.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.httpOptions = HealthCheck_HttpOptions.decode(
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
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = Duration.fromJSON(object.interval);
        } else {
            message.interval = undefined;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Duration.fromJSON(object.timeout);
        } else {
            message.timeout = undefined;
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
            object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null
        ) {
            message.healthyThreshold = Number(object.healthyThreshold);
        } else {
            message.healthyThreshold = 0;
        }
        if (object.tcpOptions !== undefined && object.tcpOptions !== null) {
            message.tcpOptions = HealthCheck_TcpOptions.fromJSON(
                object.tcpOptions
            );
        } else {
            message.tcpOptions = undefined;
        }
        if (object.httpOptions !== undefined && object.httpOptions !== null) {
            message.httpOptions = HealthCheck_HttpOptions.fromJSON(
                object.httpOptions
            );
        } else {
            message.httpOptions = undefined;
        }
        return message;
    },

    toJSON(message: HealthCheck): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.interval !== undefined &&
            (obj.interval = message.interval
                ? Duration.toJSON(message.interval)
                : undefined);
        message.timeout !== undefined &&
            (obj.timeout = message.timeout
                ? Duration.toJSON(message.timeout)
                : undefined);
        message.unhealthyThreshold !== undefined &&
            (obj.unhealthyThreshold = message.unhealthyThreshold);
        message.healthyThreshold !== undefined &&
            (obj.healthyThreshold = message.healthyThreshold);
        message.tcpOptions !== undefined &&
            (obj.tcpOptions = message.tcpOptions
                ? HealthCheck_TcpOptions.toJSON(message.tcpOptions)
                : undefined);
        message.httpOptions !== undefined &&
            (obj.httpOptions = message.httpOptions
                ? HealthCheck_HttpOptions.toJSON(message.httpOptions)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<HealthCheck>): HealthCheck {
        const message = { ...baseHealthCheck } as HealthCheck;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.interval !== undefined && object.interval !== null) {
            message.interval = Duration.fromPartial(object.interval);
        } else {
            message.interval = undefined;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = Duration.fromPartial(object.timeout);
        } else {
            message.timeout = undefined;
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
            object.healthyThreshold !== undefined &&
            object.healthyThreshold !== null
        ) {
            message.healthyThreshold = object.healthyThreshold;
        } else {
            message.healthyThreshold = 0;
        }
        if (object.tcpOptions !== undefined && object.tcpOptions !== null) {
            message.tcpOptions = HealthCheck_TcpOptions.fromPartial(
                object.tcpOptions
            );
        } else {
            message.tcpOptions = undefined;
        }
        if (object.httpOptions !== undefined && object.httpOptions !== null) {
            message.httpOptions = HealthCheck_HttpOptions.fromPartial(
                object.httpOptions
            );
        } else {
            message.httpOptions = undefined;
        }
        return message;
    },
};

const baseHealthCheck_TcpOptions: object = { port: 0 };

export const HealthCheck_TcpOptions = {
    encode(
        message: HealthCheck_TcpOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): HealthCheck_TcpOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheck_TcpOptions,
        } as HealthCheck_TcpOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HealthCheck_TcpOptions {
        const message = {
            ...baseHealthCheck_TcpOptions,
        } as HealthCheck_TcpOptions;
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        return message;
    },

    toJSON(message: HealthCheck_TcpOptions): unknown {
        const obj: any = {};
        message.port !== undefined && (obj.port = message.port);
        return obj;
    },

    fromPartial(
        object: DeepPartial<HealthCheck_TcpOptions>
    ): HealthCheck_TcpOptions {
        const message = {
            ...baseHealthCheck_TcpOptions,
        } as HealthCheck_TcpOptions;
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        return message;
    },
};

const baseHealthCheck_HttpOptions: object = { port: 0, path: '' };

export const HealthCheck_HttpOptions = {
    encode(
        message: HealthCheck_HttpOptions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.port !== 0) {
            writer.uint32(8).int64(message.port);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): HealthCheck_HttpOptions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseHealthCheck_HttpOptions,
        } as HealthCheck_HttpOptions;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): HealthCheck_HttpOptions {
        const message = {
            ...baseHealthCheck_HttpOptions,
        } as HealthCheck_HttpOptions;
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = String(object.path);
        } else {
            message.path = '';
        }
        return message;
    },

    toJSON(message: HealthCheck_HttpOptions): unknown {
        const obj: any = {};
        message.port !== undefined && (obj.port = message.port);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },

    fromPartial(
        object: DeepPartial<HealthCheck_HttpOptions>
    ): HealthCheck_HttpOptions {
        const message = {
            ...baseHealthCheck_HttpOptions,
        } as HealthCheck_HttpOptions;
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        } else {
            message.path = '';
        }
        return message;
    },
};

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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

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
