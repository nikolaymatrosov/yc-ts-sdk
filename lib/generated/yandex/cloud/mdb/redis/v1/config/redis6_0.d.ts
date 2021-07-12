import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.redis.v1.config";
/**
 * Fields and structure of `RedisConfig` reflects Redis configuration file
 * parameters.
 */
export interface Redisconfig60 {
    /**
     * Redis key eviction policy for a dataset that reaches maximum memory,
     * available to the host. Redis maxmemory setting depends on Managed
     * Service for Redis [host class](/docs/managed-redis/concepts/instance-types).
     *
     * All policies are described in detail in [Redis documentation](https://redis.io/topics/lru-cache).
     */
    maxmemoryPolicy: Redisconfig60_MaxmemoryPolicy;
    /**
     * Time that Redis keeps the connection open while the client is idle.
     * If no new command is sent during that time, the connection is closed.
     */
    timeout: number | undefined;
    /** Authentication password. */
    password: string;
    /** Number of database buckets on a single redis-server process. */
    databases: number | undefined;
    /** Threshold for logging slow requests to server in microseconds (log only slower than it). */
    slowlogLogSlowerThan: number | undefined;
    /** Max slow requests number to log. */
    slowlogMaxLen: number | undefined;
    /** String setting for pub\sub functionality; subset of KEg$lshzxeAtm. */
    notifyKeyspaceEvents: string;
}
export declare enum Redisconfig60_MaxmemoryPolicy {
    MAXMEMORY_POLICY_UNSPECIFIED = 0,
    /** VOLATILE_LRU - Try to remove less recently used (LRU) keys with `expire set`. */
    VOLATILE_LRU = 1,
    /** ALLKEYS_LRU - Remove less recently used (LRU) keys. */
    ALLKEYS_LRU = 2,
    /** VOLATILE_LFU - Try to remove least frequently used (LFU) keys with `expire set`. */
    VOLATILE_LFU = 3,
    /** ALLKEYS_LFU - Remove least frequently used (LFU) keys. */
    ALLKEYS_LFU = 4,
    /** VOLATILE_RANDOM - Try to remove keys with `expire set` randomly. */
    VOLATILE_RANDOM = 5,
    /** ALLKEYS_RANDOM - Remove keys randomly. */
    ALLKEYS_RANDOM = 6,
    /**
     * VOLATILE_TTL - Try to remove less recently used (LRU) keys with `expire set`
     * and shorter TTL first.
     */
    VOLATILE_TTL = 7,
    /**
     * NOEVICTION - Return errors when memory limit was reached and commands could require
     * more memory to be used.
     */
    NOEVICTION = 8,
    UNRECOGNIZED = -1
}
export declare function redisconfig60_MaxmemoryPolicyFromJSON(object: any): Redisconfig60_MaxmemoryPolicy;
export declare function redisconfig60_MaxmemoryPolicyToJSON(object: Redisconfig60_MaxmemoryPolicy): string;
export interface Redisconfigset60 {
    /**
     * Effective settings for a Redis 6.0 cluster (a combination of settings
     * defined in [user_config] and [default_config]).
     */
    effectiveConfig: Redisconfig60 | undefined;
    /** User-defined settings for a Redis 6.0 cluster. */
    userConfig: Redisconfig60 | undefined;
    /** Default configuration for a Redis 6.0 cluster. */
    defaultConfig: Redisconfig60 | undefined;
}
export declare const Redisconfig60: {
    encode(message: Redisconfig60, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Redisconfig60;
    fromJSON(object: any): Redisconfig60;
    toJSON(message: Redisconfig60): unknown;
    fromPartial(object: DeepPartial<Redisconfig60>): Redisconfig60;
};
export declare const Redisconfigset60: {
    encode(message: Redisconfigset60, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Redisconfigset60;
    fromJSON(object: any): Redisconfigset60;
    toJSON(message: Redisconfigset60): unknown;
    fromPartial(object: DeepPartial<Redisconfigset60>): Redisconfigset60;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
