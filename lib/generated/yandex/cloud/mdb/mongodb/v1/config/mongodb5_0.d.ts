import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/).
 */
export interface Mongodconfig50 {
    /** `storage` section of mongod configuration. */
    storage: Mongodconfig50_Storage | undefined;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling: Mongodconfig50_OperationProfiling | undefined;
    /** `net` section of mongod configuration. */
    net: Mongodconfig50_Network | undefined;
}
export interface Mongodconfig50_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongodconfig50_Storage_WiredTiger | undefined;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v5.0/reference/glossary/#term-journal). */
    journal: Mongodconfig50_Storage_Journal | undefined;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig50_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongodconfig50_Storage_WiredTiger_EngineConfig | undefined;
    /** Collection configuration for WiredTiger. */
    collectionConfig: Mongodconfig50_Storage_WiredTiger_CollectionConfig | undefined;
}
export interface Mongodconfig50_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}
export interface Mongodconfig50_Storage_WiredTiger_CollectionConfig {
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor;
}
export declare enum Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v5.0/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v5.0/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object: any): Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor;
export declare function mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor): string;
export interface Mongodconfig50_Storage_Journal {
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval: number | undefined;
}
export interface Mongodconfig50_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig50_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold: number | undefined;
}
export declare enum Mongodconfig50_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig50_OperationProfiling_ModeFromJSON(object: any): Mongodconfig50_OperationProfiling_Mode;
export declare function mongodconfig50_OperationProfiling_ModeToJSON(object: Mongodconfig50_OperationProfiling_Mode): string;
export interface Mongodconfig50_Network {
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongocfgconfig50 {
    /** `storage` section of mongocfg configuration. */
    storage: Mongocfgconfig50_Storage | undefined;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling: Mongocfgconfig50_OperationProfiling | undefined;
    /** `net` section of mongocfg configuration. */
    net: Mongocfgconfig50_Network | undefined;
}
export interface Mongocfgconfig50_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongocfgconfig50_Storage_WiredTiger | undefined;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig50_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongocfgconfig50_Storage_WiredTiger_EngineConfig | undefined;
}
export interface Mongocfgconfig50_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}
export interface Mongocfgconfig50_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig50_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v5.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold: number | undefined;
}
export declare enum Mongocfgconfig50_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongocfgconfig50_OperationProfiling_ModeFromJSON(object: any): Mongocfgconfig50_OperationProfiling_Mode;
export declare function mongocfgconfig50_OperationProfiling_ModeToJSON(object: Mongocfgconfig50_OperationProfiling_Mode): string;
export interface Mongocfgconfig50_Network {
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongosconfig50 {
    /** Network settings for mongos. */
    net: Mongosconfig50_Network | undefined;
}
export interface Mongosconfig50_Network {
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongodconfigset50 {
    /**
     * Effective mongod settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongodconfig50 | undefined;
    /** User-defined mongod settings for a MongoDB 5.0 cluster. */
    userConfig: Mongodconfig50 | undefined;
    /** Default mongod configuration for a MongoDB 5.0 cluster. */
    defaultConfig: Mongodconfig50 | undefined;
}
export interface Mongocfgconfigset50 {
    /**
     * Effective mongocfg settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongocfgconfig50 | undefined;
    /** User-defined mongocfg settings for a MongoDB 5.0 cluster. */
    userConfig: Mongocfgconfig50 | undefined;
    /** Default mongocfg configuration for a MongoDB 5.0 cluster. */
    defaultConfig: Mongocfgconfig50 | undefined;
}
export interface Mongosconfigset50 {
    /**
     * Effective mongos settings for a MongoDB 5.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongosconfig50 | undefined;
    /** User-defined mongos settings for a MongoDB 5.0 cluster. */
    userConfig: Mongosconfig50 | undefined;
    /** Default mongos configuration for a MongoDB 5.0 cluster. */
    defaultConfig: Mongosconfig50 | undefined;
}
export declare const Mongodconfig50: {
    encode(message: Mongodconfig50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50;
    fromJSON(object: any): Mongodconfig50;
    toJSON(message: Mongodconfig50): unknown;
    fromPartial(object: DeepPartial<Mongodconfig50>): Mongodconfig50;
};
export declare const Mongodconfig50_Storage: {
    encode(message: Mongodconfig50_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Storage;
    fromJSON(object: any): Mongodconfig50_Storage;
    toJSON(message: Mongodconfig50_Storage): unknown;
    fromPartial(object: DeepPartial<Mongodconfig50_Storage>): Mongodconfig50_Storage;
};
export declare const Mongodconfig50_Storage_WiredTiger: {
    encode(message: Mongodconfig50_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Storage_WiredTiger;
    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger;
    toJSON(message: Mongodconfig50_Storage_WiredTiger): unknown;
    fromPartial(object: DeepPartial<Mongodconfig50_Storage_WiredTiger>): Mongodconfig50_Storage_WiredTiger;
};
export declare const Mongodconfig50_Storage_WiredTiger_EngineConfig: {
    encode(message: Mongodconfig50_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongodconfig50_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial(object: DeepPartial<Mongodconfig50_Storage_WiredTiger_EngineConfig>): Mongodconfig50_Storage_WiredTiger_EngineConfig;
};
export declare const Mongodconfig50_Storage_WiredTiger_CollectionConfig: {
    encode(message: Mongodconfig50_Storage_WiredTiger_CollectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Storage_WiredTiger_CollectionConfig;
    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger_CollectionConfig;
    toJSON(message: Mongodconfig50_Storage_WiredTiger_CollectionConfig): unknown;
    fromPartial(object: DeepPartial<Mongodconfig50_Storage_WiredTiger_CollectionConfig>): Mongodconfig50_Storage_WiredTiger_CollectionConfig;
};
export declare const Mongodconfig50_Storage_Journal: {
    encode(message: Mongodconfig50_Storage_Journal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Storage_Journal;
    fromJSON(object: any): Mongodconfig50_Storage_Journal;
    toJSON(message: Mongodconfig50_Storage_Journal): unknown;
    fromPartial(object: DeepPartial<Mongodconfig50_Storage_Journal>): Mongodconfig50_Storage_Journal;
};
export declare const Mongodconfig50_OperationProfiling: {
    encode(message: Mongodconfig50_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_OperationProfiling;
    fromJSON(object: any): Mongodconfig50_OperationProfiling;
    toJSON(message: Mongodconfig50_OperationProfiling): unknown;
    fromPartial(object: DeepPartial<Mongodconfig50_OperationProfiling>): Mongodconfig50_OperationProfiling;
};
export declare const Mongodconfig50_Network: {
    encode(message: Mongodconfig50_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig50_Network;
    fromJSON(object: any): Mongodconfig50_Network;
    toJSON(message: Mongodconfig50_Network): unknown;
    fromPartial(object: DeepPartial<Mongodconfig50_Network>): Mongodconfig50_Network;
};
export declare const Mongocfgconfig50: {
    encode(message: Mongocfgconfig50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50;
    fromJSON(object: any): Mongocfgconfig50;
    toJSON(message: Mongocfgconfig50): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig50>): Mongocfgconfig50;
};
export declare const Mongocfgconfig50_Storage: {
    encode(message: Mongocfgconfig50_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50_Storage;
    fromJSON(object: any): Mongocfgconfig50_Storage;
    toJSON(message: Mongocfgconfig50_Storage): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig50_Storage>): Mongocfgconfig50_Storage;
};
export declare const Mongocfgconfig50_Storage_WiredTiger: {
    encode(message: Mongocfgconfig50_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50_Storage_WiredTiger;
    fromJSON(object: any): Mongocfgconfig50_Storage_WiredTiger;
    toJSON(message: Mongocfgconfig50_Storage_WiredTiger): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig50_Storage_WiredTiger>): Mongocfgconfig50_Storage_WiredTiger;
};
export declare const Mongocfgconfig50_Storage_WiredTiger_EngineConfig: {
    encode(message: Mongocfgconfig50_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongocfgconfig50_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig50_Storage_WiredTiger_EngineConfig>): Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
};
export declare const Mongocfgconfig50_OperationProfiling: {
    encode(message: Mongocfgconfig50_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50_OperationProfiling;
    fromJSON(object: any): Mongocfgconfig50_OperationProfiling;
    toJSON(message: Mongocfgconfig50_OperationProfiling): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig50_OperationProfiling>): Mongocfgconfig50_OperationProfiling;
};
export declare const Mongocfgconfig50_Network: {
    encode(message: Mongocfgconfig50_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig50_Network;
    fromJSON(object: any): Mongocfgconfig50_Network;
    toJSON(message: Mongocfgconfig50_Network): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig50_Network>): Mongocfgconfig50_Network;
};
export declare const Mongosconfig50: {
    encode(message: Mongosconfig50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig50;
    fromJSON(object: any): Mongosconfig50;
    toJSON(message: Mongosconfig50): unknown;
    fromPartial(object: DeepPartial<Mongosconfig50>): Mongosconfig50;
};
export declare const Mongosconfig50_Network: {
    encode(message: Mongosconfig50_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig50_Network;
    fromJSON(object: any): Mongosconfig50_Network;
    toJSON(message: Mongosconfig50_Network): unknown;
    fromPartial(object: DeepPartial<Mongosconfig50_Network>): Mongosconfig50_Network;
};
export declare const Mongodconfigset50: {
    encode(message: Mongodconfigset50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfigset50;
    fromJSON(object: any): Mongodconfigset50;
    toJSON(message: Mongodconfigset50): unknown;
    fromPartial(object: DeepPartial<Mongodconfigset50>): Mongodconfigset50;
};
export declare const Mongocfgconfigset50: {
    encode(message: Mongocfgconfigset50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfigset50;
    fromJSON(object: any): Mongocfgconfigset50;
    toJSON(message: Mongocfgconfigset50): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfigset50>): Mongocfgconfigset50;
};
export declare const Mongosconfigset50: {
    encode(message: Mongosconfigset50, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfigset50;
    fromJSON(object: any): Mongosconfigset50;
    toJSON(message: Mongosconfigset50): unknown;
    fromPartial(object: DeepPartial<Mongosconfigset50>): Mongosconfigset50;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
