import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mongodb.v1.config";
/**
 * Configuration of a mongod daemon. Supported options are a limited subset of all
 * options described in [MongoDB documentation](https://docs.mongodb.com/v3.6/reference/configuration-options/).
 */
export interface Mongodconfig36 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6';
    /** `storage` section of mongod configuration. */
    storage: Mongodconfig36_Storage | undefined;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling: Mongodconfig36_OperationProfiling | undefined;
    /** `net` section of mongod configuration. */
    net: Mongodconfig36_Network | undefined;
}
export interface Mongodconfig36_Storage {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage';
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongodconfig36_Storage_WiredTiger | undefined;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v3.6/reference/glossary/#term-journal). */
    journal: Mongodconfig36_Storage_Journal | undefined;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig36_Storage_WiredTiger {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger';
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongodconfig36_Storage_WiredTiger_EngineConfig | undefined;
    /** Collection configuration for WiredTiger. */
    collectionConfig: Mongodconfig36_Storage_WiredTiger_CollectionConfig | undefined;
}
export interface Mongodconfig36_Storage_WiredTiger_EngineConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.EngineConfig';
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}
export interface Mongodconfig36_Storage_WiredTiger_CollectionConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.CollectionConfig';
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor;
}
export declare enum Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v3.6/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v3.6/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig36_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object: any): Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor;
export declare function mongodconfig36_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object: Mongodconfig36_Storage_WiredTiger_CollectionConfig_Compressor): string;
export interface Mongodconfig36_Storage_Journal {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.Journal';
    /**
     * Whether the journal is enabled or disabled.
     * Possible values:
     * * true (default) - the journal is enabled.
     * * false - the journal is disabled.
     */
    enabled: boolean | undefined;
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval: number | undefined;
}
export interface Mongodconfig36_OperationProfiling {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.OperationProfiling';
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig36_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold: number | undefined;
}
export declare enum Mongodconfig36_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongodconfig36_OperationProfiling_ModeFromJSON(object: any): Mongodconfig36_OperationProfiling_Mode;
export declare function mongodconfig36_OperationProfiling_ModeToJSON(object: Mongodconfig36_OperationProfiling_Mode): string;
export interface Mongodconfig36_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Network';
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections: number | undefined;
}
export interface Mongocfgconfig36 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6';
    /** `storage` section of mongocfg configuration. */
    storage: Mongocfgconfig36_Storage | undefined;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling: Mongocfgconfig36_OperationProfiling | undefined;
    /** `net` section of mongocfg configuration. */
    net: Mongocfgconfig36_Network | undefined;
}
export interface Mongocfgconfig36_Storage {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage';
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongocfgconfig36_Storage_WiredTiger | undefined;
}
/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig36_Storage_WiredTiger {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger';
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongocfgconfig36_Storage_WiredTiger_EngineConfig | undefined;
}
export interface Mongocfgconfig36_Storage_WiredTiger_EngineConfig {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig';
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}
export interface Mongocfgconfig36_OperationProfiling {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.OperationProfiling';
    /** Operation profiling level. For details, see [MongoDB documentation](https://docs.mongodb.com/v3.6/tutorial/manage-the-database-profiler/). */
    mode: Mongocfgconfig36_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v3.6/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold: number | undefined;
}
export declare enum Mongocfgconfig36_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /**
     * OFF - The profiler is off and does not collect any data. This is the default
     * profiler level.
     */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1
}
export declare function mongocfgconfig36_OperationProfiling_ModeFromJSON(object: any): Mongocfgconfig36_OperationProfiling_Mode;
export declare function mongocfgconfig36_OperationProfiling_ModeToJSON(object: Mongocfgconfig36_OperationProfiling_Mode): string;
export interface Mongocfgconfig36_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Network';
    /** The maximum number of incoming connections. */
    maxIncomingConnections: number | undefined;
}
export interface Mongosconfig36 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6';
    /** Network settings for mongos. */
    net: Mongosconfig36_Network | undefined;
}
export interface Mongosconfig36_Network {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6.Network';
    /** The maximum number of incoming connections. */
    maxIncomingConnections: number | undefined;
}
export interface Mongodconfigset36 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6';
    /**
     * Effective mongod settings for a MongoDB 3.6 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongodconfig36 | undefined;
    /** User-defined mongod settings for a MongoDB 3.6 cluster. */
    userConfig: Mongodconfig36 | undefined;
    /** Default mongod configuration for a MongoDB 3.6 cluster. */
    defaultConfig: Mongodconfig36 | undefined;
}
export interface Mongocfgconfigset36 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6';
    /**
     * Effective mongocfg settings for a MongoDB 3.6 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongocfgconfig36 | undefined;
    /** User-defined mongocfg settings for a MongoDB 3.6 cluster. */
    userConfig: Mongocfgconfig36 | undefined;
    /** Default mongocfg configuration for a MongoDB 3.6 cluster. */
    defaultConfig: Mongocfgconfig36 | undefined;
}
export interface Mongosconfigset36 {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6';
    /**
     * Effective settings for a MongoDB 3.6 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mongosconfig36 | undefined;
    /** User-defined settings for a MongoDB 3.6 cluster. */
    userConfig: Mongosconfig36 | undefined;
    /** Default configuration for a MongoDB 3.6 cluster. */
    defaultConfig: Mongosconfig36 | undefined;
}
export declare const Mongodconfig36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6";
    encode(message: Mongodconfig36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36;
    fromJSON(object: any): Mongodconfig36;
    toJSON(message: Mongodconfig36): unknown;
    fromPartial(object: DeepPartial<Mongodconfig36>): Mongodconfig36;
};
export declare const Mongodconfig36_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage";
    encode(message: Mongodconfig36_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Storage;
    fromJSON(object: any): Mongodconfig36_Storage;
    toJSON(message: Mongodconfig36_Storage): unknown;
    fromPartial(object: DeepPartial<Mongodconfig36_Storage>): Mongodconfig36_Storage;
};
export declare const Mongodconfig36_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger";
    encode(message: Mongodconfig36_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Storage_WiredTiger;
    fromJSON(object: any): Mongodconfig36_Storage_WiredTiger;
    toJSON(message: Mongodconfig36_Storage_WiredTiger): unknown;
    fromPartial(object: DeepPartial<Mongodconfig36_Storage_WiredTiger>): Mongodconfig36_Storage_WiredTiger;
};
export declare const Mongodconfig36_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.EngineConfig";
    encode(message: Mongodconfig36_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongodconfig36_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongodconfig36_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial(object: DeepPartial<Mongodconfig36_Storage_WiredTiger_EngineConfig>): Mongodconfig36_Storage_WiredTiger_EngineConfig;
};
export declare const Mongodconfig36_Storage_WiredTiger_CollectionConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.WiredTiger.CollectionConfig";
    encode(message: Mongodconfig36_Storage_WiredTiger_CollectionConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Storage_WiredTiger_CollectionConfig;
    fromJSON(object: any): Mongodconfig36_Storage_WiredTiger_CollectionConfig;
    toJSON(message: Mongodconfig36_Storage_WiredTiger_CollectionConfig): unknown;
    fromPartial(object: DeepPartial<Mongodconfig36_Storage_WiredTiger_CollectionConfig>): Mongodconfig36_Storage_WiredTiger_CollectionConfig;
};
export declare const Mongodconfig36_Storage_Journal: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Storage.Journal";
    encode(message: Mongodconfig36_Storage_Journal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Storage_Journal;
    fromJSON(object: any): Mongodconfig36_Storage_Journal;
    toJSON(message: Mongodconfig36_Storage_Journal): unknown;
    fromPartial(object: DeepPartial<Mongodconfig36_Storage_Journal>): Mongodconfig36_Storage_Journal;
};
export declare const Mongodconfig36_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.OperationProfiling";
    encode(message: Mongodconfig36_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_OperationProfiling;
    fromJSON(object: any): Mongodconfig36_OperationProfiling;
    toJSON(message: Mongodconfig36_OperationProfiling): unknown;
    fromPartial(object: DeepPartial<Mongodconfig36_OperationProfiling>): Mongodconfig36_OperationProfiling;
};
export declare const Mongodconfig36_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfig3_6.Network";
    encode(message: Mongodconfig36_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfig36_Network;
    fromJSON(object: any): Mongodconfig36_Network;
    toJSON(message: Mongodconfig36_Network): unknown;
    fromPartial(object: DeepPartial<Mongodconfig36_Network>): Mongodconfig36_Network;
};
export declare const Mongocfgconfig36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6";
    encode(message: Mongocfgconfig36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36;
    fromJSON(object: any): Mongocfgconfig36;
    toJSON(message: Mongocfgconfig36): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig36>): Mongocfgconfig36;
};
export declare const Mongocfgconfig36_Storage: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage";
    encode(message: Mongocfgconfig36_Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36_Storage;
    fromJSON(object: any): Mongocfgconfig36_Storage;
    toJSON(message: Mongocfgconfig36_Storage): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig36_Storage>): Mongocfgconfig36_Storage;
};
export declare const Mongocfgconfig36_Storage_WiredTiger: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger";
    encode(message: Mongocfgconfig36_Storage_WiredTiger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36_Storage_WiredTiger;
    fromJSON(object: any): Mongocfgconfig36_Storage_WiredTiger;
    toJSON(message: Mongocfgconfig36_Storage_WiredTiger): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig36_Storage_WiredTiger>): Mongocfgconfig36_Storage_WiredTiger;
};
export declare const Mongocfgconfig36_Storage_WiredTiger_EngineConfig: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig";
    encode(message: Mongocfgconfig36_Storage_WiredTiger_EngineConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36_Storage_WiredTiger_EngineConfig;
    fromJSON(object: any): Mongocfgconfig36_Storage_WiredTiger_EngineConfig;
    toJSON(message: Mongocfgconfig36_Storage_WiredTiger_EngineConfig): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig36_Storage_WiredTiger_EngineConfig>): Mongocfgconfig36_Storage_WiredTiger_EngineConfig;
};
export declare const Mongocfgconfig36_OperationProfiling: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.OperationProfiling";
    encode(message: Mongocfgconfig36_OperationProfiling, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36_OperationProfiling;
    fromJSON(object: any): Mongocfgconfig36_OperationProfiling;
    toJSON(message: Mongocfgconfig36_OperationProfiling): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig36_OperationProfiling>): Mongocfgconfig36_OperationProfiling;
};
export declare const Mongocfgconfig36_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig3_6.Network";
    encode(message: Mongocfgconfig36_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfig36_Network;
    fromJSON(object: any): Mongocfgconfig36_Network;
    toJSON(message: Mongocfgconfig36_Network): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfig36_Network>): Mongocfgconfig36_Network;
};
export declare const Mongosconfig36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6";
    encode(message: Mongosconfig36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig36;
    fromJSON(object: any): Mongosconfig36;
    toJSON(message: Mongosconfig36): unknown;
    fromPartial(object: DeepPartial<Mongosconfig36>): Mongosconfig36;
};
export declare const Mongosconfig36_Network: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfig3_6.Network";
    encode(message: Mongosconfig36_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfig36_Network;
    fromJSON(object: any): Mongosconfig36_Network;
    toJSON(message: Mongosconfig36_Network): unknown;
    fromPartial(object: DeepPartial<Mongosconfig36_Network>): Mongosconfig36_Network;
};
export declare const Mongodconfigset36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet3_6";
    encode(message: Mongodconfigset36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongodconfigset36;
    fromJSON(object: any): Mongodconfigset36;
    toJSON(message: Mongodconfigset36): unknown;
    fromPartial(object: DeepPartial<Mongodconfigset36>): Mongodconfigset36;
};
export declare const Mongocfgconfigset36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet3_6";
    encode(message: Mongocfgconfigset36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongocfgconfigset36;
    fromJSON(object: any): Mongocfgconfigset36;
    toJSON(message: Mongocfgconfigset36): unknown;
    fromPartial(object: DeepPartial<Mongocfgconfigset36>): Mongocfgconfigset36;
};
export declare const Mongosconfigset36: {
    $type: "yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet3_6";
    encode(message: Mongosconfigset36, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mongosconfigset36;
    fromJSON(object: any): Mongosconfigset36;
    toJSON(message: Mongosconfigset36): unknown;
    fromPartial(object: DeepPartial<Mongosconfigset36>): Mongosconfigset36;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
