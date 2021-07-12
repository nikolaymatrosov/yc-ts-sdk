import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.4/reference/configuration-options/).
 */
export interface Mongodconfig44 {
    /** `storage` section of mongod configuration. */
    storage: Mongodconfig44_Storage | undefined;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling: Mongodconfig44_OperationProfiling | undefined;
    /** `net` section of mongod configuration. */
    net: Mongodconfig44_Network | undefined;
}
export interface Mongodconfig44_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongodconfig44_Storage_WiredTiger | undefined;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.4/reference/glossary/#term-journal). */
    journal: Mongodconfig44_Storage_Journal | undefined;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig44_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongodconfig44_Storage_WiredTiger_EngineConfig | undefined;
    /** Collection configuration for WiredTiger. */
    collectionConfig: Mongodconfig44_Storage_WiredTiger_CollectionConfig | undefined;
}
export interface Mongodconfig44_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}
export interface Mongodconfig44_Storage_WiredTiger_CollectionConfig {
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor;
}
export declare enum Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.4/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v4.4/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object: any): Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor;
export declare function mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object: Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor): string;
export interface Mongodconfig44_Storage_Journal {
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval: number | undefined;
}
export interface Mongodconfig44_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig44_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold: number | undefined;
}
export declare enum Mongodconfig44_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig44_OperationProfiling_ModeFromJSON(object: any): Mongodconfig44_OperationProfiling_Mode;
export declare function mongodconfig44_OperationProfiling_ModeToJSON(object: Mongodconfig44_OperationProfiling_Mode): string;
export interface Mongodconfig44_Network {
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongocfgconfig44 {
    /** `storage` section of mongocfg configuration. */
    storage: Mongocfgconfig44_Storage | undefined;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling: Mongocfgconfig44_OperationProfiling | undefined;
    /** `net` section of mongocfg configuration. */
    net: Mongocfgconfig44_Network | undefined;
}
export interface Mongocfgconfig44_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongocfgconfig44_Storage_WiredTiger | undefined;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig44_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongocfgconfig44_Storage_WiredTiger_EngineConfig | undefined;
}
export interface Mongocfgconfig44_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}
export interface Mongocfgconfig44_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig44_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.4/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold: number | undefined;
}
export declare enum Mongocfgconfig44_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongocfgconfig44_OperationProfiling_ModeFromJSON(object: any): Mongocfgconfig44_OperationProfiling_Mode;
export declare function mongocfgconfig44_OperationProfiling_ModeToJSON(object: Mongocfgconfig44_OperationProfiling_Mode): string;
export interface Mongocfgconfig44_Network {
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongosconfig44 {
    /** Network settings for mongos. */
    net: Mongosconfig44_Network | undefined;
}
export interface Mongosconfig44_Network {
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongodconfigset44 {
    /**
     * Effective mongod settings for a MongoDB 4.4 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongodconfig44 | undefined;
    /** User-defined mongod settings for a MongoDB 4.4 cluster. */
    userConfig: Mongodconfig44 | undefined;
    /** Default mongod configuration for a MongoDB 4.4 cluster. */
    defaultConfig: Mongodconfig44 | undefined;
}
export interface Mongocfgconfigset44 {
    /**
     * Effective mongocfg settings for a MongoDB 4.4 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongocfgconfig44 | undefined;
    /** User-defined mongocfg settings for a MongoDB 4.4 cluster. */
    userConfig: Mongocfgconfig44 | undefined;
    /** Default mongocfg configuration for a MongoDB 4.4 cluster. */
    defaultConfig: Mongocfgconfig44 | undefined;
}
export interface Mongosconfigset44 {
    /**
     * Effective mongos settings for a MongoDB 4.4 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongosconfig44 | undefined;
    /** User-defined mongos settings for a MongoDB 4.4 cluster. */
    userConfig: Mongosconfig44 | undefined;
    /** Default mongos configuration for a MongoDB 4.4 cluster. */
    defaultConfig: Mongosconfig44 | undefined;
}
export declare const Mongodconfig44: {
    encode(message: Mongodconfig44, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig44;
    fromJSON(object: any): Mongodconfig44;
    toJSON(message: Mongodconfig44): unknown;
    fromPartial(object: DeepPartial<Mongodconfig44>): Mongodconfig44;
};
export declare const Mongodconfig44_Storage: {
    encode(message: Mongodconfig44_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig44_Storage;
    fromJSON(object: any): Mongodconfig44_Storage;
    toJSON(message: Mongodconfig44_Storage): unknown;
    fromPartial(object: DeepPartial<Mongodconfig44_Storage>): Mongodconfig44_Storage;
};
export declare const Mongodconfig44_Storage_WiredTiger: {
    encode(message: Mongodconfig44_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig44_Storage_WiredTiger;
    fromJSON(object: any): Mongodconfig44_Storage_WiredTiger;
    toJSON(message: Mongodconfig44_Storage_WiredTiger): unknown;
    fromPartial(object: DeepPartial<Mongodconfig44_Storage_WiredTiger>): Mongodconfig44_Storage_WiredTiger;
};
export declare const Mongodconfig44_Storage_WiredTiger_EngineConfig: {
    encode(message: Mongodconfig44_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig44_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongodconfig44_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongodconfig44_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial(object: DeepPartial<Mongodconfig44_Storage_WiredTiger_EngineConfig>): Mongodconfig44_Storage_WiredTiger_EngineConfig;
};
export declare const Mongodconfig44_Storage_WiredTiger_CollectionConfig: {
    encode(message: Mongodconfig44_Storage_WiredTiger_CollectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig44_Storage_WiredTiger_CollectionConfig;
    fromJSON(object: any): Mongodconfig44_Storage_WiredTiger_CollectionConfig;
    toJSON(message: Mongodconfig44_Storage_WiredTiger_CollectionConfig): unknown;
    fromPartial(object: DeepPartial<Mongodconfig44_Storage_WiredTiger_CollectionConfig>): Mongodconfig44_Storage_WiredTiger_CollectionConfig;
};
export declare const Mongodconfig44_Storage_Journal: {
    encode(message: Mongodconfig44_Storage_Journal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig44_Storage_Journal;
    fromJSON(object: any): Mongodconfig44_Storage_Journal;
    toJSON(message: Mongodconfig44_Storage_Journal): unknown;
    fromPartial(object: DeepPartial<Mongodconfig44_Storage_Journal>): Mongodconfig44_Storage_Journal;
};
export declare const Mongodconfig44_OperationProfiling: {
    encode(message: Mongodconfig44_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig44_OperationProfiling;
    fromJSON(object: any): Mongodconfig44_OperationProfiling;
    toJSON(message: Mongodconfig44_OperationProfiling): unknown;
    fromPartial(object: DeepPartial<Mongodconfig44_OperationProfiling>): Mongodconfig44_OperationProfiling;
};
export declare const Mongodconfig44_Network: {
    encode(message: Mongodconfig44_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig44_Network;
    fromJSON(object: any): Mongodconfig44_Network;
    toJSON(message: Mongodconfig44_Network): unknown;
    fromPartial(object: DeepPartial<Mongodconfig44_Network>): Mongodconfig44_Network;
};
export declare const Mongocfgconfig44: {
    encode(message: Mongocfgconfig44, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig44;
    fromJSON(object: any): Mongocfgconfig44;
    toJSON(message: Mongocfgconfig44): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig44>): Mongocfgconfig44;
};
export declare const Mongocfgconfig44_Storage: {
    encode(message: Mongocfgconfig44_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig44_Storage;
    fromJSON(object: any): Mongocfgconfig44_Storage;
    toJSON(message: Mongocfgconfig44_Storage): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig44_Storage>): Mongocfgconfig44_Storage;
};
export declare const Mongocfgconfig44_Storage_WiredTiger: {
    encode(message: Mongocfgconfig44_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig44_Storage_WiredTiger;
    fromJSON(object: any): Mongocfgconfig44_Storage_WiredTiger;
    toJSON(message: Mongocfgconfig44_Storage_WiredTiger): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig44_Storage_WiredTiger>): Mongocfgconfig44_Storage_WiredTiger;
};
export declare const Mongocfgconfig44_Storage_WiredTiger_EngineConfig: {
    encode(message: Mongocfgconfig44_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig44_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongocfgconfig44_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongocfgconfig44_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig44_Storage_WiredTiger_EngineConfig>): Mongocfgconfig44_Storage_WiredTiger_EngineConfig;
};
export declare const Mongocfgconfig44_OperationProfiling: {
    encode(message: Mongocfgconfig44_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig44_OperationProfiling;
    fromJSON(object: any): Mongocfgconfig44_OperationProfiling;
    toJSON(message: Mongocfgconfig44_OperationProfiling): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig44_OperationProfiling>): Mongocfgconfig44_OperationProfiling;
};
export declare const Mongocfgconfig44_Network: {
    encode(message: Mongocfgconfig44_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig44_Network;
    fromJSON(object: any): Mongocfgconfig44_Network;
    toJSON(message: Mongocfgconfig44_Network): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig44_Network>): Mongocfgconfig44_Network;
};
export declare const Mongosconfig44: {
    encode(message: Mongosconfig44, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig44;
    fromJSON(object: any): Mongosconfig44;
    toJSON(message: Mongosconfig44): unknown;
    fromPartial(object: DeepPartial<Mongosconfig44>): Mongosconfig44;
};
export declare const Mongosconfig44_Network: {
    encode(message: Mongosconfig44_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig44_Network;
    fromJSON(object: any): Mongosconfig44_Network;
    toJSON(message: Mongosconfig44_Network): unknown;
    fromPartial(object: DeepPartial<Mongosconfig44_Network>): Mongosconfig44_Network;
};
export declare const Mongodconfigset44: {
    encode(message: Mongodconfigset44, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfigset44;
    fromJSON(object: any): Mongodconfigset44;
    toJSON(message: Mongodconfigset44): unknown;
    fromPartial(object: DeepPartial<Mongodconfigset44>): Mongodconfigset44;
};
export declare const Mongocfgconfigset44: {
    encode(message: Mongocfgconfigset44, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfigset44;
    fromJSON(object: any): Mongocfgconfigset44;
    toJSON(message: Mongocfgconfigset44): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfigset44>): Mongocfgconfigset44;
};
export declare const Mongosconfigset44: {
    encode(message: Mongosconfigset44, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfigset44;
    fromJSON(object: any): Mongosconfigset44;
    toJSON(message: Mongosconfigset44): unknown;
    fromPartial(object: DeepPartial<Mongosconfigset44>): Mongosconfigset44;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
