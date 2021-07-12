import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.2/reference/configuration-options/).
 */
export interface Mongodconfig42 {
    /** `storage` section of mongod configuration. */
    storage: Mongodconfig42_Storage | undefined;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling: Mongodconfig42_OperationProfiling | undefined;
    /** `net` section of mongod configuration. */
    net: Mongodconfig42_Network | undefined;
}
export interface Mongodconfig42_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongodconfig42_Storage_WiredTiger | undefined;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.2/reference/glossary/#term-journal). */
    journal: Mongodconfig42_Storage_Journal | undefined;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig42_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongodconfig42_Storage_WiredTiger_EngineConfig | undefined;
    /** Collection configuration for WiredTiger. */
    collectionConfig: Mongodconfig42_Storage_WiredTiger_CollectionConfig | undefined;
}
export interface Mongodconfig42_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}
export interface Mongodconfig42_Storage_WiredTiger_CollectionConfig {
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor;
}
export declare enum Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object: any): Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor;
export declare function mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor): string;
export interface Mongodconfig42_Storage_Journal {
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval: number | undefined;
}
export interface Mongodconfig42_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig42_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold: number | undefined;
}
export declare enum Mongodconfig42_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig42_OperationProfiling_ModeFromJSON(object: any): Mongodconfig42_OperationProfiling_Mode;
export declare function mongodconfig42_OperationProfiling_ModeToJSON(object: Mongodconfig42_OperationProfiling_Mode): string;
export interface Mongodconfig42_Network {
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongocfgconfig42 {
    /** `storage` section of mongocfg configuration. */
    storage: Mongocfgconfig42_Storage | undefined;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling: Mongocfgconfig42_OperationProfiling | undefined;
    /** `net` section of mongocfg configuration. */
    net: Mongocfgconfig42_Network | undefined;
}
export interface Mongocfgconfig42_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongocfgconfig42_Storage_WiredTiger | undefined;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig42_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongocfgconfig42_Storage_WiredTiger_EngineConfig | undefined;
}
export interface Mongocfgconfig42_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}
export interface Mongocfgconfig42_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig42_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.2/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold: number | undefined;
}
export declare enum Mongocfgconfig42_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongocfgconfig42_OperationProfiling_ModeFromJSON(object: any): Mongocfgconfig42_OperationProfiling_Mode;
export declare function mongocfgconfig42_OperationProfiling_ModeToJSON(object: Mongocfgconfig42_OperationProfiling_Mode): string;
export interface Mongocfgconfig42_Network {
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongosconfig42 {
    /** Network settings for mongos. */
    net: Mongosconfig42_Network | undefined;
}
export interface Mongosconfig42_Network {
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongodconfigset42 {
    /**
     * Effective mongod settings for a MongoDB 4.2 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongodconfig42 | undefined;
    /** User-defined mongod settings for a MongoDB 4.2 cluster. */
    userConfig: Mongodconfig42 | undefined;
    /** Default mongod configuration for a MongoDB 4.2 cluster. */
    defaultConfig: Mongodconfig42 | undefined;
}
export interface Mongocfgconfigset42 {
    /**
     * Effective mongocfg settings for a MongoDB 4.2 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongocfgconfig42 | undefined;
    /** User-defined mongocfg settings for a MongoDB 4.2 cluster. */
    userConfig: Mongocfgconfig42 | undefined;
    /** Default mongocfg configuration for a MongoDB 4.2 cluster. */
    defaultConfig: Mongocfgconfig42 | undefined;
}
export interface Mongosconfigset42 {
    /**
     * Effective mongos settings for a MongoDB 4.2 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongosconfig42 | undefined;
    /** User-defined mongos settings for a MongoDB 4.2 cluster. */
    userConfig: Mongosconfig42 | undefined;
    /** Default mongos configuration for a MongoDB 4.2 cluster. */
    defaultConfig: Mongosconfig42 | undefined;
}
export declare const Mongodconfig42: {
    encode(message: Mongodconfig42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42;
    fromJSON(object: any): Mongodconfig42;
    toJSON(message: Mongodconfig42): unknown;
    fromPartial(object: DeepPartial<Mongodconfig42>): Mongodconfig42;
};
export declare const Mongodconfig42_Storage: {
    encode(message: Mongodconfig42_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Storage;
    fromJSON(object: any): Mongodconfig42_Storage;
    toJSON(message: Mongodconfig42_Storage): unknown;
    fromPartial(object: DeepPartial<Mongodconfig42_Storage>): Mongodconfig42_Storage;
};
export declare const Mongodconfig42_Storage_WiredTiger: {
    encode(message: Mongodconfig42_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Storage_WiredTiger;
    fromJSON(object: any): Mongodconfig42_Storage_WiredTiger;
    toJSON(message: Mongodconfig42_Storage_WiredTiger): unknown;
    fromPartial(object: DeepPartial<Mongodconfig42_Storage_WiredTiger>): Mongodconfig42_Storage_WiredTiger;
};
export declare const Mongodconfig42_Storage_WiredTiger_EngineConfig: {
    encode(message: Mongodconfig42_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongodconfig42_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongodconfig42_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial(object: DeepPartial<Mongodconfig42_Storage_WiredTiger_EngineConfig>): Mongodconfig42_Storage_WiredTiger_EngineConfig;
};
export declare const Mongodconfig42_Storage_WiredTiger_CollectionConfig: {
    encode(message: Mongodconfig42_Storage_WiredTiger_CollectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Storage_WiredTiger_CollectionConfig;
    fromJSON(object: any): Mongodconfig42_Storage_WiredTiger_CollectionConfig;
    toJSON(message: Mongodconfig42_Storage_WiredTiger_CollectionConfig): unknown;
    fromPartial(object: DeepPartial<Mongodconfig42_Storage_WiredTiger_CollectionConfig>): Mongodconfig42_Storage_WiredTiger_CollectionConfig;
};
export declare const Mongodconfig42_Storage_Journal: {
    encode(message: Mongodconfig42_Storage_Journal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Storage_Journal;
    fromJSON(object: any): Mongodconfig42_Storage_Journal;
    toJSON(message: Mongodconfig42_Storage_Journal): unknown;
    fromPartial(object: DeepPartial<Mongodconfig42_Storage_Journal>): Mongodconfig42_Storage_Journal;
};
export declare const Mongodconfig42_OperationProfiling: {
    encode(message: Mongodconfig42_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_OperationProfiling;
    fromJSON(object: any): Mongodconfig42_OperationProfiling;
    toJSON(message: Mongodconfig42_OperationProfiling): unknown;
    fromPartial(object: DeepPartial<Mongodconfig42_OperationProfiling>): Mongodconfig42_OperationProfiling;
};
export declare const Mongodconfig42_Network: {
    encode(message: Mongodconfig42_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig42_Network;
    fromJSON(object: any): Mongodconfig42_Network;
    toJSON(message: Mongodconfig42_Network): unknown;
    fromPartial(object: DeepPartial<Mongodconfig42_Network>): Mongodconfig42_Network;
};
export declare const Mongocfgconfig42: {
    encode(message: Mongocfgconfig42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42;
    fromJSON(object: any): Mongocfgconfig42;
    toJSON(message: Mongocfgconfig42): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig42>): Mongocfgconfig42;
};
export declare const Mongocfgconfig42_Storage: {
    encode(message: Mongocfgconfig42_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42_Storage;
    fromJSON(object: any): Mongocfgconfig42_Storage;
    toJSON(message: Mongocfgconfig42_Storage): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig42_Storage>): Mongocfgconfig42_Storage;
};
export declare const Mongocfgconfig42_Storage_WiredTiger: {
    encode(message: Mongocfgconfig42_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42_Storage_WiredTiger;
    fromJSON(object: any): Mongocfgconfig42_Storage_WiredTiger;
    toJSON(message: Mongocfgconfig42_Storage_WiredTiger): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig42_Storage_WiredTiger>): Mongocfgconfig42_Storage_WiredTiger;
};
export declare const Mongocfgconfig42_Storage_WiredTiger_EngineConfig: {
    encode(message: Mongocfgconfig42_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongocfgconfig42_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig42_Storage_WiredTiger_EngineConfig>): Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
};
export declare const Mongocfgconfig42_OperationProfiling: {
    encode(message: Mongocfgconfig42_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42_OperationProfiling;
    fromJSON(object: any): Mongocfgconfig42_OperationProfiling;
    toJSON(message: Mongocfgconfig42_OperationProfiling): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig42_OperationProfiling>): Mongocfgconfig42_OperationProfiling;
};
export declare const Mongocfgconfig42_Network: {
    encode(message: Mongocfgconfig42_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig42_Network;
    fromJSON(object: any): Mongocfgconfig42_Network;
    toJSON(message: Mongocfgconfig42_Network): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig42_Network>): Mongocfgconfig42_Network;
};
export declare const Mongosconfig42: {
    encode(message: Mongosconfig42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig42;
    fromJSON(object: any): Mongosconfig42;
    toJSON(message: Mongosconfig42): unknown;
    fromPartial(object: DeepPartial<Mongosconfig42>): Mongosconfig42;
};
export declare const Mongosconfig42_Network: {
    encode(message: Mongosconfig42_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig42_Network;
    fromJSON(object: any): Mongosconfig42_Network;
    toJSON(message: Mongosconfig42_Network): unknown;
    fromPartial(object: DeepPartial<Mongosconfig42_Network>): Mongosconfig42_Network;
};
export declare const Mongodconfigset42: {
    encode(message: Mongodconfigset42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfigset42;
    fromJSON(object: any): Mongodconfigset42;
    toJSON(message: Mongodconfigset42): unknown;
    fromPartial(object: DeepPartial<Mongodconfigset42>): Mongodconfigset42;
};
export declare const Mongocfgconfigset42: {
    encode(message: Mongocfgconfigset42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfigset42;
    fromJSON(object: any): Mongocfgconfigset42;
    toJSON(message: Mongocfgconfigset42): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfigset42>): Mongocfgconfigset42;
};
export declare const Mongosconfigset42: {
    encode(message: Mongosconfigset42, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfigset42;
    fromJSON(object: any): Mongosconfigset42;
    toJSON(message: Mongosconfigset42): unknown;
    fromPartial(object: DeepPartial<Mongosconfigset42>): Mongosconfigset42;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
