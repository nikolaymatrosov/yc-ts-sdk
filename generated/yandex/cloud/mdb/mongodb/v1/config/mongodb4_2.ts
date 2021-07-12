/* eslint-disable */
import {
    DoubleValue,
    Int64Value,
} from '../../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.mongodb.v1.config';

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
    collectionConfig:
        | Mongodconfig42_Storage_WiredTiger_CollectionConfig
        | undefined;
}

export interface Mongodconfig42_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}

export interface Mongodconfig42_Storage_WiredTiger_CollectionConfig {
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    UNRECOGNIZED = -1,
}

export function mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
    object: any
): Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'NONE':
            return Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
        case 2:
        case 'SNAPPY':
            return Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
        case 3:
        case 'ZLIB':
            return Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
    }
}

export function mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
    object: Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor
): string {
    switch (object) {
        case Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
            return 'NONE';
        case Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
            return 'ZLIB';
        default:
            return 'UNKNOWN';
    }
}

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

export enum Mongodconfig42_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongodconfig42_OperationProfiling_ModeFromJSON(
    object: any
): Mongodconfig42_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongodconfig42_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongodconfig42_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongodconfig42_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongodconfig42_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig42_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongodconfig42_OperationProfiling_ModeToJSON(
    object: Mongodconfig42_OperationProfiling_Mode
): string {
    switch (object) {
        case Mongodconfig42_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongodconfig42_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongodconfig42_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongodconfig42_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

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

export enum Mongocfgconfig42_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongocfgconfig42_OperationProfiling_ModeFromJSON(
    object: any
): Mongocfgconfig42_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongocfgconfig42_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongocfgconfig42_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongocfgconfig42_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongocfgconfig42_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongocfgconfig42_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongocfgconfig42_OperationProfiling_ModeToJSON(
    object: Mongocfgconfig42_OperationProfiling_Mode
): string {
    switch (object) {
        case Mongocfgconfig42_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongocfgconfig42_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongocfgconfig42_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongocfgconfig42_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

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

const baseMongodconfig42: object = {};

export const Mongodconfig42 = {
    encode(
        message: Mongodconfig42,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.storage !== undefined) {
            Mongodconfig42_Storage.encode(
                message.storage,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongodconfig42_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongodconfig42_Network.encode(
                message.net,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig42 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig42 } as Mongodconfig42;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongodconfig42_Storage.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.operationProfiling =
                        Mongodconfig42_OperationProfiling.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 3:
                    message.net = Mongodconfig42_Network.decode(
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

    fromJSON(object: any): Mongodconfig42 {
        const message = { ...baseMongodconfig42 } as Mongodconfig42;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongodconfig42_Storage.fromJSON(object.storage);
        } else {
            message.storage = undefined;
        }
        if (
            object.operationProfiling !== undefined &&
            object.operationProfiling !== null
        ) {
            message.operationProfiling =
                Mongodconfig42_OperationProfiling.fromJSON(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongodconfig42_Network.fromJSON(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig42): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongodconfig42_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongodconfig42_OperationProfiling.toJSON(
                      message.operationProfiling
                  )
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongodconfig42_Network.toJSON(message.net)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongodconfig42>): Mongodconfig42 {
        const message = { ...baseMongodconfig42 } as Mongodconfig42;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongodconfig42_Storage.fromPartial(
                object.storage
            );
        } else {
            message.storage = undefined;
        }
        if (
            object.operationProfiling !== undefined &&
            object.operationProfiling !== null
        ) {
            message.operationProfiling =
                Mongodconfig42_OperationProfiling.fromPartial(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongodconfig42_Network.fromPartial(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },
};

const baseMongodconfig42_Storage: object = {};

export const Mongodconfig42_Storage = {
    encode(
        message: Mongodconfig42_Storage,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongodconfig42_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.journal !== undefined) {
            Mongodconfig42_Storage_Journal.encode(
                message.journal,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongodconfig42_Storage {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_Storage,
        } as Mongodconfig42_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        Mongodconfig42_Storage_WiredTiger.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 2:
                    message.journal = Mongodconfig42_Storage_Journal.decode(
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

    fromJSON(object: any): Mongodconfig42_Storage {
        const message = {
            ...baseMongodconfig42_Storage,
        } as Mongodconfig42_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongodconfig42_Storage_WiredTiger.fromJSON(
                object.wiredTiger
            );
        } else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = Mongodconfig42_Storage_Journal.fromJSON(
                object.journal
            );
        } else {
            message.journal = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig42_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongodconfig42_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? Mongodconfig42_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig42_Storage>
    ): Mongodconfig42_Storage {
        const message = {
            ...baseMongodconfig42_Storage,
        } as Mongodconfig42_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongodconfig42_Storage_WiredTiger.fromPartial(
                object.wiredTiger
            );
        } else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = Mongodconfig42_Storage_Journal.fromPartial(
                object.journal
            );
        } else {
            message.journal = undefined;
        }
        return message;
    },
};

const baseMongodconfig42_Storage_WiredTiger: object = {};

export const Mongodconfig42_Storage_WiredTiger = {
    encode(
        message: Mongodconfig42_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongodconfig42_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            Mongodconfig42_Storage_WiredTiger_CollectionConfig.encode(
                message.collectionConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongodconfig42_Storage_WiredTiger {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger,
        } as Mongodconfig42_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        Mongodconfig42_Storage_WiredTiger_EngineConfig.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 2:
                    message.collectionConfig =
                        Mongodconfig42_Storage_WiredTiger_CollectionConfig.decode(
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

    fromJSON(object: any): Mongodconfig42_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger,
        } as Mongodconfig42_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongodconfig42_Storage_WiredTiger_EngineConfig.fromJSON(
                    object.engineConfig
                );
        } else {
            message.engineConfig = undefined;
        }
        if (
            object.collectionConfig !== undefined &&
            object.collectionConfig !== null
        ) {
            message.collectionConfig =
                Mongodconfig42_Storage_WiredTiger_CollectionConfig.fromJSON(
                    object.collectionConfig
                );
        } else {
            message.collectionConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig42_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongodconfig42_Storage_WiredTiger_EngineConfig.toJSON(
                      message.engineConfig
                  )
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? Mongodconfig42_Storage_WiredTiger_CollectionConfig.toJSON(
                      message.collectionConfig
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig42_Storage_WiredTiger>
    ): Mongodconfig42_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger,
        } as Mongodconfig42_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongodconfig42_Storage_WiredTiger_EngineConfig.fromPartial(
                    object.engineConfig
                );
        } else {
            message.engineConfig = undefined;
        }
        if (
            object.collectionConfig !== undefined &&
            object.collectionConfig !== null
        ) {
            message.collectionConfig =
                Mongodconfig42_Storage_WiredTiger_CollectionConfig.fromPartial(
                    object.collectionConfig
                );
        } else {
            message.collectionConfig = undefined;
        }
        return message;
    },
};

const baseMongodconfig42_Storage_WiredTiger_EngineConfig: object = {};

export const Mongodconfig42_Storage_WiredTiger_EngineConfig = {
    encode(
        message: Mongodconfig42_Storage_WiredTiger_EngineConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.cacheSizeGb !== undefined) {
            DoubleValue.encode(
                { value: message.cacheSizeGb! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongodconfig42_Storage_WiredTiger_EngineConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig42_Storage_WiredTiger_EngineConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cacheSizeGb = DoubleValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig42_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig42_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = Number(object.cacheSizeGb);
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig42_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined &&
            (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig42_Storage_WiredTiger_EngineConfig>
    ): Mongodconfig42_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig42_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = object.cacheSizeGb;
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },
};

const baseMongodconfig42_Storage_WiredTiger_CollectionConfig: object = {
    blockCompressor: 0,
};

export const Mongodconfig42_Storage_WiredTiger_CollectionConfig = {
    encode(
        message: Mongodconfig42_Storage_WiredTiger_CollectionConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.blockCompressor !== 0) {
            writer.uint32(8).int32(message.blockCompressor);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongodconfig42_Storage_WiredTiger_CollectionConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig42_Storage_WiredTiger_CollectionConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockCompressor = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig42_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig42_Storage_WiredTiger_CollectionConfig;
        if (
            object.blockCompressor !== undefined &&
            object.blockCompressor !== null
        ) {
            message.blockCompressor =
                mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
                    object.blockCompressor
                );
        } else {
            message.blockCompressor = 0;
        }
        return message;
    },

    toJSON(
        message: Mongodconfig42_Storage_WiredTiger_CollectionConfig
    ): unknown {
        const obj: any = {};
        message.blockCompressor !== undefined &&
            (obj.blockCompressor =
                mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
                    message.blockCompressor
                ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig42_Storage_WiredTiger_CollectionConfig>
    ): Mongodconfig42_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig42_Storage_WiredTiger_CollectionConfig;
        if (
            object.blockCompressor !== undefined &&
            object.blockCompressor !== null
        ) {
            message.blockCompressor = object.blockCompressor;
        } else {
            message.blockCompressor = 0;
        }
        return message;
    },
};

const baseMongodconfig42_Storage_Journal: object = {};

export const Mongodconfig42_Storage_Journal = {
    encode(
        message: Mongodconfig42_Storage_Journal,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.commitInterval !== undefined) {
            Int64Value.encode(
                { value: message.commitInterval! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongodconfig42_Storage_Journal {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_Storage_Journal,
        } as Mongodconfig42_Storage_Journal;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitInterval = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig42_Storage_Journal {
        const message = {
            ...baseMongodconfig42_Storage_Journal,
        } as Mongodconfig42_Storage_Journal;
        if (
            object.commitInterval !== undefined &&
            object.commitInterval !== null
        ) {
            message.commitInterval = Number(object.commitInterval);
        } else {
            message.commitInterval = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig42_Storage_Journal): unknown {
        const obj: any = {};
        message.commitInterval !== undefined &&
            (obj.commitInterval = message.commitInterval);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig42_Storage_Journal>
    ): Mongodconfig42_Storage_Journal {
        const message = {
            ...baseMongodconfig42_Storage_Journal,
        } as Mongodconfig42_Storage_Journal;
        if (
            object.commitInterval !== undefined &&
            object.commitInterval !== null
        ) {
            message.commitInterval = object.commitInterval;
        } else {
            message.commitInterval = undefined;
        }
        return message;
    },
};

const baseMongodconfig42_OperationProfiling: object = { mode: 0 };

export const Mongodconfig42_OperationProfiling = {
    encode(
        message: Mongodconfig42_OperationProfiling,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            Int64Value.encode(
                { value: message.slowOpThreshold! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongodconfig42_OperationProfiling {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_OperationProfiling,
        } as Mongodconfig42_OperationProfiling;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                case 2:
                    message.slowOpThreshold = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig42_OperationProfiling {
        const message = {
            ...baseMongodconfig42_OperationProfiling,
        } as Mongodconfig42_OperationProfiling;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongodconfig42_OperationProfiling_ModeFromJSON(
                object.mode
            );
        } else {
            message.mode = 0;
        }
        if (
            object.slowOpThreshold !== undefined &&
            object.slowOpThreshold !== null
        ) {
            message.slowOpThreshold = Number(object.slowOpThreshold);
        } else {
            message.slowOpThreshold = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig42_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongodconfig42_OperationProfiling_ModeToJSON(
                message.mode
            ));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig42_OperationProfiling>
    ): Mongodconfig42_OperationProfiling {
        const message = {
            ...baseMongodconfig42_OperationProfiling,
        } as Mongodconfig42_OperationProfiling;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        } else {
            message.mode = 0;
        }
        if (
            object.slowOpThreshold !== undefined &&
            object.slowOpThreshold !== null
        ) {
            message.slowOpThreshold = object.slowOpThreshold;
        } else {
            message.slowOpThreshold = undefined;
        }
        return message;
    },
};

const baseMongodconfig42_Network: object = {};

export const Mongodconfig42_Network = {
    encode(
        message: Mongodconfig42_Network,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxIncomingConnections! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongodconfig42_Network {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_Network,
        } as Mongodconfig42_Network;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongodconfig42_Network {
        const message = {
            ...baseMongodconfig42_Network,
        } as Mongodconfig42_Network;
        if (
            object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null
        ) {
            message.maxIncomingConnections = Number(
                object.maxIncomingConnections
            );
        } else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig42_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig42_Network>
    ): Mongodconfig42_Network {
        const message = {
            ...baseMongodconfig42_Network,
        } as Mongodconfig42_Network;
        if (
            object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null
        ) {
            message.maxIncomingConnections = object.maxIncomingConnections;
        } else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig42: object = {};

export const Mongocfgconfig42 = {
    encode(
        message: Mongocfgconfig42,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.storage !== undefined) {
            Mongocfgconfig42_Storage.encode(
                message.storage,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongocfgconfig42_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongocfgconfig42_Network.encode(
                message.net,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig42 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig42 } as Mongocfgconfig42;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongocfgconfig42_Storage.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.operationProfiling =
                        Mongocfgconfig42_OperationProfiling.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 3:
                    message.net = Mongocfgconfig42_Network.decode(
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

    fromJSON(object: any): Mongocfgconfig42 {
        const message = { ...baseMongocfgconfig42 } as Mongocfgconfig42;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongocfgconfig42_Storage.fromJSON(object.storage);
        } else {
            message.storage = undefined;
        }
        if (
            object.operationProfiling !== undefined &&
            object.operationProfiling !== null
        ) {
            message.operationProfiling =
                Mongocfgconfig42_OperationProfiling.fromJSON(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongocfgconfig42_Network.fromJSON(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig42): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongocfgconfig42_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongocfgconfig42_OperationProfiling.toJSON(
                      message.operationProfiling
                  )
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongocfgconfig42_Network.toJSON(message.net)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongocfgconfig42>): Mongocfgconfig42 {
        const message = { ...baseMongocfgconfig42 } as Mongocfgconfig42;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongocfgconfig42_Storage.fromPartial(
                object.storage
            );
        } else {
            message.storage = undefined;
        }
        if (
            object.operationProfiling !== undefined &&
            object.operationProfiling !== null
        ) {
            message.operationProfiling =
                Mongocfgconfig42_OperationProfiling.fromPartial(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongocfgconfig42_Network.fromPartial(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig42_Storage: object = {};

export const Mongocfgconfig42_Storage = {
    encode(
        message: Mongocfgconfig42_Storage,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongocfgconfig42_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfig42_Storage {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig42_Storage,
        } as Mongocfgconfig42_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        Mongocfgconfig42_Storage_WiredTiger.decode(
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

    fromJSON(object: any): Mongocfgconfig42_Storage {
        const message = {
            ...baseMongocfgconfig42_Storage,
        } as Mongocfgconfig42_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongocfgconfig42_Storage_WiredTiger.fromJSON(
                object.wiredTiger
            );
        } else {
            message.wiredTiger = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig42_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongocfgconfig42_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig42_Storage>
    ): Mongocfgconfig42_Storage {
        const message = {
            ...baseMongocfgconfig42_Storage,
        } as Mongocfgconfig42_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger =
                Mongocfgconfig42_Storage_WiredTiger.fromPartial(
                    object.wiredTiger
                );
        } else {
            message.wiredTiger = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig42_Storage_WiredTiger: object = {};

export const Mongocfgconfig42_Storage_WiredTiger = {
    encode(
        message: Mongocfgconfig42_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongocfgconfig42_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfig42_Storage_WiredTiger {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig42_Storage_WiredTiger,
        } as Mongocfgconfig42_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        Mongocfgconfig42_Storage_WiredTiger_EngineConfig.decode(
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

    fromJSON(object: any): Mongocfgconfig42_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig42_Storage_WiredTiger,
        } as Mongocfgconfig42_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongocfgconfig42_Storage_WiredTiger_EngineConfig.fromJSON(
                    object.engineConfig
                );
        } else {
            message.engineConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig42_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongocfgconfig42_Storage_WiredTiger_EngineConfig.toJSON(
                      message.engineConfig
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig42_Storage_WiredTiger>
    ): Mongocfgconfig42_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig42_Storage_WiredTiger,
        } as Mongocfgconfig42_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongocfgconfig42_Storage_WiredTiger_EngineConfig.fromPartial(
                    object.engineConfig
                );
        } else {
            message.engineConfig = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig42_Storage_WiredTiger_EngineConfig: object = {};

export const Mongocfgconfig42_Storage_WiredTiger_EngineConfig = {
    encode(
        message: Mongocfgconfig42_Storage_WiredTiger_EngineConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.cacheSizeGb !== undefined) {
            DoubleValue.encode(
                { value: message.cacheSizeGb! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfig42_Storage_WiredTiger_EngineConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig42_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cacheSizeGb = DoubleValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfig42_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig42_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = Number(object.cacheSizeGb);
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig42_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined &&
            (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig42_Storage_WiredTiger_EngineConfig>
    ): Mongocfgconfig42_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig42_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig42_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = object.cacheSizeGb;
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig42_OperationProfiling: object = { mode: 0 };

export const Mongocfgconfig42_OperationProfiling = {
    encode(
        message: Mongocfgconfig42_OperationProfiling,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            Int64Value.encode(
                { value: message.slowOpThreshold! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfig42_OperationProfiling {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig42_OperationProfiling,
        } as Mongocfgconfig42_OperationProfiling;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32() as any;
                    break;
                case 2:
                    message.slowOpThreshold = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfig42_OperationProfiling {
        const message = {
            ...baseMongocfgconfig42_OperationProfiling,
        } as Mongocfgconfig42_OperationProfiling;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongocfgconfig42_OperationProfiling_ModeFromJSON(
                object.mode
            );
        } else {
            message.mode = 0;
        }
        if (
            object.slowOpThreshold !== undefined &&
            object.slowOpThreshold !== null
        ) {
            message.slowOpThreshold = Number(object.slowOpThreshold);
        } else {
            message.slowOpThreshold = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig42_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongocfgconfig42_OperationProfiling_ModeToJSON(
                message.mode
            ));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig42_OperationProfiling>
    ): Mongocfgconfig42_OperationProfiling {
        const message = {
            ...baseMongocfgconfig42_OperationProfiling,
        } as Mongocfgconfig42_OperationProfiling;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        } else {
            message.mode = 0;
        }
        if (
            object.slowOpThreshold !== undefined &&
            object.slowOpThreshold !== null
        ) {
            message.slowOpThreshold = object.slowOpThreshold;
        } else {
            message.slowOpThreshold = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig42_Network: object = {};

export const Mongocfgconfig42_Network = {
    encode(
        message: Mongocfgconfig42_Network,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxIncomingConnections! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfig42_Network {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig42_Network,
        } as Mongocfgconfig42_Network;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongocfgconfig42_Network {
        const message = {
            ...baseMongocfgconfig42_Network,
        } as Mongocfgconfig42_Network;
        if (
            object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null
        ) {
            message.maxIncomingConnections = Number(
                object.maxIncomingConnections
            );
        } else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig42_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig42_Network>
    ): Mongocfgconfig42_Network {
        const message = {
            ...baseMongocfgconfig42_Network,
        } as Mongocfgconfig42_Network;
        if (
            object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null
        ) {
            message.maxIncomingConnections = object.maxIncomingConnections;
        } else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },
};

const baseMongosconfig42: object = {};

export const Mongosconfig42 = {
    encode(
        message: Mongosconfig42,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.net !== undefined) {
            Mongosconfig42_Network.encode(
                message.net,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig42 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig42 } as Mongosconfig42;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.net = Mongosconfig42_Network.decode(
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

    fromJSON(object: any): Mongosconfig42 {
        const message = { ...baseMongosconfig42 } as Mongosconfig42;
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongosconfig42_Network.fromJSON(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },

    toJSON(message: Mongosconfig42): unknown {
        const obj: any = {};
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongosconfig42_Network.toJSON(message.net)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongosconfig42>): Mongosconfig42 {
        const message = { ...baseMongosconfig42 } as Mongosconfig42;
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongosconfig42_Network.fromPartial(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },
};

const baseMongosconfig42_Network: object = {};

export const Mongosconfig42_Network = {
    encode(
        message: Mongosconfig42_Network,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxIncomingConnections! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongosconfig42_Network {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongosconfig42_Network,
        } as Mongosconfig42_Network;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Mongosconfig42_Network {
        const message = {
            ...baseMongosconfig42_Network,
        } as Mongosconfig42_Network;
        if (
            object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null
        ) {
            message.maxIncomingConnections = Number(
                object.maxIncomingConnections
            );
        } else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },

    toJSON(message: Mongosconfig42_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongosconfig42_Network>
    ): Mongosconfig42_Network {
        const message = {
            ...baseMongosconfig42_Network,
        } as Mongosconfig42_Network;
        if (
            object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null
        ) {
            message.maxIncomingConnections = object.maxIncomingConnections;
        } else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },
};

const baseMongodconfigset42: object = {};

export const Mongodconfigset42 = {
    encode(
        message: Mongodconfigset42,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongodconfig42.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongodconfig42.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongodconfig42.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfigset42 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfigset42 } as Mongodconfigset42;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongodconfig42.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = Mongodconfig42.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = Mongodconfig42.decode(
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

    fromJSON(object: any): Mongodconfigset42 {
        const message = { ...baseMongodconfigset42 } as Mongodconfigset42;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongodconfig42.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongodconfig42.fromJSON(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongodconfig42.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfigset42): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongodconfig42.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongodconfig42.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongodconfig42.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongodconfigset42>): Mongodconfigset42 {
        const message = { ...baseMongodconfigset42 } as Mongodconfigset42;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongodconfig42.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongodconfig42.fromPartial(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongodconfig42.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

const baseMongocfgconfigset42: object = {};

export const Mongocfgconfigset42 = {
    encode(
        message: Mongocfgconfigset42,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongocfgconfig42.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongocfgconfig42.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongocfgconfig42.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfigset42 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfigset42 } as Mongocfgconfigset42;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongocfgconfig42.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = Mongocfgconfig42.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = Mongocfgconfig42.decode(
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

    fromJSON(object: any): Mongocfgconfigset42 {
        const message = { ...baseMongocfgconfigset42 } as Mongocfgconfigset42;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongocfgconfig42.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongocfgconfig42.fromJSON(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongocfgconfig42.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfigset42): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongocfgconfig42.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongocfgconfig42.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongocfgconfig42.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongocfgconfigset42>): Mongocfgconfigset42 {
        const message = { ...baseMongocfgconfigset42 } as Mongocfgconfigset42;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongocfgconfig42.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongocfgconfig42.fromPartial(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongocfgconfig42.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

const baseMongosconfigset42: object = {};

export const Mongosconfigset42 = {
    encode(
        message: Mongosconfigset42,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongosconfig42.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongosconfig42.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongosconfig42.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfigset42 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfigset42 } as Mongosconfigset42;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongosconfig42.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = Mongosconfig42.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = Mongosconfig42.decode(
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

    fromJSON(object: any): Mongosconfigset42 {
        const message = { ...baseMongosconfigset42 } as Mongosconfigset42;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongosconfig42.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongosconfig42.fromJSON(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongosconfig42.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongosconfigset42): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongosconfig42.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongosconfig42.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongosconfig42.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongosconfigset42>): Mongosconfigset42 {
        const message = { ...baseMongosconfigset42 } as Mongosconfigset42;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongosconfig42.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongosconfig42.fromPartial(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongosconfig42.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
