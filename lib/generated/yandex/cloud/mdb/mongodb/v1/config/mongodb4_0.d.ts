import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.0/reference/configuration-options/).
 */
export interface Mongodconfig40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0';
    /** `storage` section of mongod configuration. */
    storage: Mongodconfig40_Storage | undefined;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling: Mongodconfig40_OperationProfiling | undefined;
    /** `net` section of mongod configuration. */
    net: Mongodconfig40_Network | undefined;
}
export interface Mongodconfig40_Storage {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage';
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongodconfig40_Storage_WiredTiger | undefined;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.0/reference/glossary/#term-journal). */
    journal: Mongodconfig40_Storage_Journal | undefined;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig40_Storage_WiredTiger {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger';
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongodconfig40_Storage_WiredTiger_EngineConfig | undefined;
    /** Collection configuration for WiredTiger. */
    collectionConfig: Mongodconfig40_Storage_WiredTiger_CollectionConfig | undefined;
}
export interface Mongodconfig40_Storage_WiredTiger_EngineConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger.EngineConfig';
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}
export interface Mongodconfig40_Storage_WiredTiger_CollectionConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger.CollectionConfig';
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor;
}
export declare enum Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.0/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v4.0/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig40_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object: any): Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor;
export declare function mongodconfig40_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object: Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor): string;
export interface Mongodconfig40_Storage_Journal {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.Journal';
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval: number | undefined;
}
export interface Mongodconfig40_OperationProfiling {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.OperationProfiling';
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig40_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold: number | undefined;
}
export declare enum Mongodconfig40_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig40_OperationProfiling_ModeFromJSON(object: any): Mongodconfig40_OperationProfiling_Mode;
export declare function mongodconfig40_OperationProfiling_ModeToJSON(object: Mongodconfig40_OperationProfiling_Mode): string;
export interface Mongodconfig40_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Network';
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongocfgconfig40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0';
    /** `storage` section of mongocfg configuration. */
    storage: Mongocfgconfig40_Storage | undefined;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling: Mongocfgconfig40_OperationProfiling | undefined;
    /** `net` section of mongocfg configuration. */
    net: Mongocfgconfig40_Network | undefined;
}
export interface Mongocfgconfig40_Storage {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage';
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongocfgconfig40_Storage_WiredTiger | undefined;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig40_Storage_WiredTiger {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage.WiredTiger';
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongocfgconfig40_Storage_WiredTiger_EngineConfig | undefined;
}
export interface Mongocfgconfig40_Storage_WiredTiger_EngineConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage.WiredTiger.EngineConfig';
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}
export interface Mongocfgconfig40_OperationProfiling {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.OperationProfiling';
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig40_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold: number | undefined;
}
export declare enum Mongocfgconfig40_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongocfgconfig40_OperationProfiling_ModeFromJSON(object: any): Mongocfgconfig40_OperationProfiling_Mode;
export declare function mongocfgconfig40_OperationProfiling_ModeToJSON(object: Mongocfgconfig40_OperationProfiling_Mode): string;
export interface Mongocfgconfig40_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Network';
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongosconfig40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0';
    /** Network settings for mongos. */
    net: Mongosconfig40_Network | undefined;
}
export interface Mongosconfig40_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0.Network';
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongodconfigset40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_0';
    /**
     * Effective mongod settings for a MongoDB 4.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongodconfig40 | undefined;
    /** User-defined mongod settings for a MongoDB 4.0 cluster. */
    userConfig: Mongodconfig40 | undefined;
    /** Default mongod configuration for a MongoDB 4.0 cluster. */
    defaultConfig: Mongodconfig40 | undefined;
}
export interface Mongocfgconfigset40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_0';
    /**
     * Effective mongocfg settings for a MongoDB 4.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongocfgconfig40 | undefined;
    /** User-defined mongocfg settings for a MongoDB 4.0 cluster. */
    userConfig: Mongocfgconfig40 | undefined;
    /** Default mongocfg configuration for a MongoDB 4.0 cluster. */
    defaultConfig: Mongocfgconfig40 | undefined;
}
export interface Mongosconfigset40 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_0';
    /**
     * Effective mongos settings for a MongoDB 4.0 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongosconfig40 | undefined;
    /** User-defined mongos settings for a MongoDB 4.0 cluster. */
    userConfig: Mongosconfig40 | undefined;
    /** Default mongos configuration for a MongoDB 4.0 cluster. */
    defaultConfig: Mongosconfig40 | undefined;
}
export declare const Mongodconfig40: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0";
    encode(message: Mongodconfig40, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig40;
    fromJSON(object: any): Mongodconfig40;
    toJSON(message: Mongodconfig40): unknown;
    fromPartial(object: DeepPartial<Mongodconfig40>): Mongodconfig40;
};
export declare const Mongodconfig40_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage";
    encode(message: Mongodconfig40_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig40_Storage;
    fromJSON(object: any): Mongodconfig40_Storage;
    toJSON(message: Mongodconfig40_Storage): unknown;
    fromPartial(object: DeepPartial<Mongodconfig40_Storage>): Mongodconfig40_Storage;
};
export declare const Mongodconfig40_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger";
    encode(message: Mongodconfig40_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig40_Storage_WiredTiger;
    fromJSON(object: any): Mongodconfig40_Storage_WiredTiger;
    toJSON(message: Mongodconfig40_Storage_WiredTiger): unknown;
    fromPartial(object: DeepPartial<Mongodconfig40_Storage_WiredTiger>): Mongodconfig40_Storage_WiredTiger;
};
export declare const Mongodconfig40_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger.EngineConfig";
    encode(message: Mongodconfig40_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig40_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongodconfig40_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongodconfig40_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial(object: DeepPartial<Mongodconfig40_Storage_WiredTiger_EngineConfig>): Mongodconfig40_Storage_WiredTiger_EngineConfig;
};
export declare const Mongodconfig40_Storage_WiredTiger_CollectionConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.WiredTiger.CollectionConfig";
    encode(message: Mongodconfig40_Storage_WiredTiger_CollectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig40_Storage_WiredTiger_CollectionConfig;
    fromJSON(object: any): Mongodconfig40_Storage_WiredTiger_CollectionConfig;
    toJSON(message: Mongodconfig40_Storage_WiredTiger_CollectionConfig): unknown;
    fromPartial(object: DeepPartial<Mongodconfig40_Storage_WiredTiger_CollectionConfig>): Mongodconfig40_Storage_WiredTiger_CollectionConfig;
};
export declare const Mongodconfig40_Storage_Journal: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Storage.Journal";
    encode(message: Mongodconfig40_Storage_Journal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig40_Storage_Journal;
    fromJSON(object: any): Mongodconfig40_Storage_Journal;
    toJSON(message: Mongodconfig40_Storage_Journal): unknown;
    fromPartial(object: DeepPartial<Mongodconfig40_Storage_Journal>): Mongodconfig40_Storage_Journal;
};
export declare const Mongodconfig40_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.OperationProfiling";
    encode(message: Mongodconfig40_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig40_OperationProfiling;
    fromJSON(object: any): Mongodconfig40_OperationProfiling;
    toJSON(message: Mongodconfig40_OperationProfiling): unknown;
    fromPartial(object: DeepPartial<Mongodconfig40_OperationProfiling>): Mongodconfig40_OperationProfiling;
};
export declare const Mongodconfig40_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_0.Network";
    encode(message: Mongodconfig40_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig40_Network;
    fromJSON(object: any): Mongodconfig40_Network;
    toJSON(message: Mongodconfig40_Network): unknown;
    fromPartial(object: DeepPartial<Mongodconfig40_Network>): Mongodconfig40_Network;
};
export declare const Mongocfgconfig40: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0";
    encode(message: Mongocfgconfig40, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig40;
    fromJSON(object: any): Mongocfgconfig40;
    toJSON(message: Mongocfgconfig40): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig40>): Mongocfgconfig40;
};
export declare const Mongocfgconfig40_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage";
    encode(message: Mongocfgconfig40_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig40_Storage;
    fromJSON(object: any): Mongocfgconfig40_Storage;
    toJSON(message: Mongocfgconfig40_Storage): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig40_Storage>): Mongocfgconfig40_Storage;
};
export declare const Mongocfgconfig40_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage.WiredTiger";
    encode(message: Mongocfgconfig40_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig40_Storage_WiredTiger;
    fromJSON(object: any): Mongocfgconfig40_Storage_WiredTiger;
    toJSON(message: Mongocfgconfig40_Storage_WiredTiger): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig40_Storage_WiredTiger>): Mongocfgconfig40_Storage_WiredTiger;
};
export declare const Mongocfgconfig40_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Storage.WiredTiger.EngineConfig";
    encode(message: Mongocfgconfig40_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig40_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongocfgconfig40_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongocfgconfig40_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig40_Storage_WiredTiger_EngineConfig>): Mongocfgconfig40_Storage_WiredTiger_EngineConfig;
};
export declare const Mongocfgconfig40_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.OperationProfiling";
    encode(message: Mongocfgconfig40_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig40_OperationProfiling;
    fromJSON(object: any): Mongocfgconfig40_OperationProfiling;
    toJSON(message: Mongocfgconfig40_OperationProfiling): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig40_OperationProfiling>): Mongocfgconfig40_OperationProfiling;
};
export declare const Mongocfgconfig40_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_0.Network";
    encode(message: Mongocfgconfig40_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig40_Network;
    fromJSON(object: any): Mongocfgconfig40_Network;
    toJSON(message: Mongocfgconfig40_Network): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig40_Network>): Mongocfgconfig40_Network;
};
export declare const Mongosconfig40: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0";
    encode(message: Mongosconfig40, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig40;
    fromJSON(object: any): Mongosconfig40;
    toJSON(message: Mongosconfig40): unknown;
    fromPartial(object: DeepPartial<Mongosconfig40>): Mongosconfig40;
};
export declare const Mongosconfig40_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_0.Network";
    encode(message: Mongosconfig40_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig40_Network;
    fromJSON(object: any): Mongosconfig40_Network;
    toJSON(message: Mongosconfig40_Network): unknown;
    fromPartial(object: DeepPartial<Mongosconfig40_Network>): Mongosconfig40_Network;
};
export declare const Mongodconfigset40: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_0";
    encode(message: Mongodconfigset40, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfigset40;
    fromJSON(object: any): Mongodconfigset40;
    toJSON(message: Mongodconfigset40): unknown;
    fromPartial(object: DeepPartial<Mongodconfigset40>): Mongodconfigset40;
};
export declare const Mongocfgconfigset40: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_0";
    encode(message: Mongocfgconfigset40, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfigset40;
    fromJSON(object: any): Mongocfgconfigset40;
    toJSON(message: Mongocfgconfigset40): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfigset40>): Mongocfgconfigset40;
};
export declare const Mongosconfigset40: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_0";
    encode(message: Mongosconfigset40, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfigset40;
    fromJSON(object: any): Mongosconfigset40;
    toJSON(message: Mongosconfigset40): unknown;
    fromPartial(object: DeepPartial<Mongosconfigset40>): Mongosconfigset40;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
