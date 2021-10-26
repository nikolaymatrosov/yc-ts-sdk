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
    collectionConfig:
        | Mongodconfig50_Storage_WiredTiger_CollectionConfig
        | undefined;
}

export interface Mongodconfig50_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}

export interface Mongodconfig50_Storage_WiredTiger_CollectionConfig {
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v5.0/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v5.0/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    UNRECOGNIZED = -1,
}

export function mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
    object: any
): Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'NONE':
            return Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
        case 2:
        case 'SNAPPY':
            return Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
        case 3:
        case 'ZLIB':
            return Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
    }
}

export function mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
    object: Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor
): string {
    switch (object) {
        case Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
            return 'NONE';
        case Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
            return 'ZLIB';
        default:
            return 'UNKNOWN';
    }
}

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

export enum Mongodconfig50_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongodconfig50_OperationProfiling_ModeFromJSON(
    object: any
): Mongodconfig50_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongodconfig50_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongodconfig50_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongodconfig50_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongodconfig50_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig50_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongodconfig50_OperationProfiling_ModeToJSON(
    object: Mongodconfig50_OperationProfiling_Mode
): string {
    switch (object) {
        case Mongodconfig50_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongodconfig50_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongodconfig50_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongodconfig50_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

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

export enum Mongocfgconfig50_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongocfgconfig50_OperationProfiling_ModeFromJSON(
    object: any
): Mongocfgconfig50_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongocfgconfig50_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongocfgconfig50_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongocfgconfig50_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongocfgconfig50_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongocfgconfig50_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongocfgconfig50_OperationProfiling_ModeToJSON(
    object: Mongocfgconfig50_OperationProfiling_Mode
): string {
    switch (object) {
        case Mongocfgconfig50_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongocfgconfig50_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongocfgconfig50_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongocfgconfig50_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

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

const baseMongodconfig50: object = {};

export const Mongodconfig50 = {
    encode(
        message: Mongodconfig50,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.storage !== undefined) {
            Mongodconfig50_Storage.encode(
                message.storage,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongodconfig50_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongodconfig50_Network.encode(
                message.net,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig50 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig50 } as Mongodconfig50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongodconfig50_Storage.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.operationProfiling =
                        Mongodconfig50_OperationProfiling.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 3:
                    message.net = Mongodconfig50_Network.decode(
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

    fromJSON(object: any): Mongodconfig50 {
        const message = { ...baseMongodconfig50 } as Mongodconfig50;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongodconfig50_Storage.fromJSON(object.storage);
        } else {
            message.storage = undefined;
        }
        if (
            object.operationProfiling !== undefined &&
            object.operationProfiling !== null
        ) {
            message.operationProfiling =
                Mongodconfig50_OperationProfiling.fromJSON(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongodconfig50_Network.fromJSON(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig50): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongodconfig50_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongodconfig50_OperationProfiling.toJSON(
                      message.operationProfiling
                  )
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongodconfig50_Network.toJSON(message.net)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongodconfig50>): Mongodconfig50 {
        const message = { ...baseMongodconfig50 } as Mongodconfig50;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongodconfig50_Storage.fromPartial(
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
                Mongodconfig50_OperationProfiling.fromPartial(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongodconfig50_Network.fromPartial(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },
};

const baseMongodconfig50_Storage: object = {};

export const Mongodconfig50_Storage = {
    encode(
        message: Mongodconfig50_Storage,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongodconfig50_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.journal !== undefined) {
            Mongodconfig50_Storage_Journal.encode(
                message.journal,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongodconfig50_Storage {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage,
        } as Mongodconfig50_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        Mongodconfig50_Storage_WiredTiger.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 2:
                    message.journal = Mongodconfig50_Storage_Journal.decode(
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

    fromJSON(object: any): Mongodconfig50_Storage {
        const message = {
            ...baseMongodconfig50_Storage,
        } as Mongodconfig50_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongodconfig50_Storage_WiredTiger.fromJSON(
                object.wiredTiger
            );
        } else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = Mongodconfig50_Storage_Journal.fromJSON(
                object.journal
            );
        } else {
            message.journal = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig50_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongodconfig50_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? Mongodconfig50_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig50_Storage>
    ): Mongodconfig50_Storage {
        const message = {
            ...baseMongodconfig50_Storage,
        } as Mongodconfig50_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongodconfig50_Storage_WiredTiger.fromPartial(
                object.wiredTiger
            );
        } else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = Mongodconfig50_Storage_Journal.fromPartial(
                object.journal
            );
        } else {
            message.journal = undefined;
        }
        return message;
    },
};

const baseMongodconfig50_Storage_WiredTiger: object = {};

export const Mongodconfig50_Storage_WiredTiger = {
    encode(
        message: Mongodconfig50_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongodconfig50_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            Mongodconfig50_Storage_WiredTiger_CollectionConfig.encode(
                message.collectionConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongodconfig50_Storage_WiredTiger {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger,
        } as Mongodconfig50_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        Mongodconfig50_Storage_WiredTiger_EngineConfig.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 2:
                    message.collectionConfig =
                        Mongodconfig50_Storage_WiredTiger_CollectionConfig.decode(
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

    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger,
        } as Mongodconfig50_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongodconfig50_Storage_WiredTiger_EngineConfig.fromJSON(
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
                Mongodconfig50_Storage_WiredTiger_CollectionConfig.fromJSON(
                    object.collectionConfig
                );
        } else {
            message.collectionConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig50_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongodconfig50_Storage_WiredTiger_EngineConfig.toJSON(
                      message.engineConfig
                  )
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? Mongodconfig50_Storage_WiredTiger_CollectionConfig.toJSON(
                      message.collectionConfig
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig50_Storage_WiredTiger>
    ): Mongodconfig50_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger,
        } as Mongodconfig50_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongodconfig50_Storage_WiredTiger_EngineConfig.fromPartial(
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
                Mongodconfig50_Storage_WiredTiger_CollectionConfig.fromPartial(
                    object.collectionConfig
                );
        } else {
            message.collectionConfig = undefined;
        }
        return message;
    },
};

const baseMongodconfig50_Storage_WiredTiger_EngineConfig: object = {};

export const Mongodconfig50_Storage_WiredTiger_EngineConfig = {
    encode(
        message: Mongodconfig50_Storage_WiredTiger_EngineConfig,
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
    ): Mongodconfig50_Storage_WiredTiger_EngineConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig50_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig50_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = Number(object.cacheSizeGb);
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig50_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined &&
            (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig50_Storage_WiredTiger_EngineConfig>
    ): Mongodconfig50_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig50_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = object.cacheSizeGb;
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },
};

const baseMongodconfig50_Storage_WiredTiger_CollectionConfig: object = {
    blockCompressor: 0,
};

export const Mongodconfig50_Storage_WiredTiger_CollectionConfig = {
    encode(
        message: Mongodconfig50_Storage_WiredTiger_CollectionConfig,
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
    ): Mongodconfig50_Storage_WiredTiger_CollectionConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig50_Storage_WiredTiger_CollectionConfig;
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

    fromJSON(object: any): Mongodconfig50_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig50_Storage_WiredTiger_CollectionConfig;
        if (
            object.blockCompressor !== undefined &&
            object.blockCompressor !== null
        ) {
            message.blockCompressor =
                mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
                    object.blockCompressor
                );
        } else {
            message.blockCompressor = 0;
        }
        return message;
    },

    toJSON(
        message: Mongodconfig50_Storage_WiredTiger_CollectionConfig
    ): unknown {
        const obj: any = {};
        message.blockCompressor !== undefined &&
            (obj.blockCompressor =
                mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
                    message.blockCompressor
                ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig50_Storage_WiredTiger_CollectionConfig>
    ): Mongodconfig50_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig50_Storage_WiredTiger_CollectionConfig;
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

const baseMongodconfig50_Storage_Journal: object = {};

export const Mongodconfig50_Storage_Journal = {
    encode(
        message: Mongodconfig50_Storage_Journal,
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
    ): Mongodconfig50_Storage_Journal {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_Journal,
        } as Mongodconfig50_Storage_Journal;
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

    fromJSON(object: any): Mongodconfig50_Storage_Journal {
        const message = {
            ...baseMongodconfig50_Storage_Journal,
        } as Mongodconfig50_Storage_Journal;
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

    toJSON(message: Mongodconfig50_Storage_Journal): unknown {
        const obj: any = {};
        message.commitInterval !== undefined &&
            (obj.commitInterval = message.commitInterval);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig50_Storage_Journal>
    ): Mongodconfig50_Storage_Journal {
        const message = {
            ...baseMongodconfig50_Storage_Journal,
        } as Mongodconfig50_Storage_Journal;
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

const baseMongodconfig50_OperationProfiling: object = { mode: 0 };

export const Mongodconfig50_OperationProfiling = {
    encode(
        message: Mongodconfig50_OperationProfiling,
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
    ): Mongodconfig50_OperationProfiling {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_OperationProfiling,
        } as Mongodconfig50_OperationProfiling;
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

    fromJSON(object: any): Mongodconfig50_OperationProfiling {
        const message = {
            ...baseMongodconfig50_OperationProfiling,
        } as Mongodconfig50_OperationProfiling;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongodconfig50_OperationProfiling_ModeFromJSON(
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

    toJSON(message: Mongodconfig50_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongodconfig50_OperationProfiling_ModeToJSON(
                message.mode
            ));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig50_OperationProfiling>
    ): Mongodconfig50_OperationProfiling {
        const message = {
            ...baseMongodconfig50_OperationProfiling,
        } as Mongodconfig50_OperationProfiling;
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

const baseMongodconfig50_Network: object = {};

export const Mongodconfig50_Network = {
    encode(
        message: Mongodconfig50_Network,
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
    ): Mongodconfig50_Network {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Network,
        } as Mongodconfig50_Network;
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

    fromJSON(object: any): Mongodconfig50_Network {
        const message = {
            ...baseMongodconfig50_Network,
        } as Mongodconfig50_Network;
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

    toJSON(message: Mongodconfig50_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig50_Network>
    ): Mongodconfig50_Network {
        const message = {
            ...baseMongodconfig50_Network,
        } as Mongodconfig50_Network;
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

const baseMongocfgconfig50: object = {};

export const Mongocfgconfig50 = {
    encode(
        message: Mongocfgconfig50,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.storage !== undefined) {
            Mongocfgconfig50_Storage.encode(
                message.storage,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongocfgconfig50_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongocfgconfig50_Network.encode(
                message.net,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig50 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig50 } as Mongocfgconfig50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongocfgconfig50_Storage.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.operationProfiling =
                        Mongocfgconfig50_OperationProfiling.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 3:
                    message.net = Mongocfgconfig50_Network.decode(
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

    fromJSON(object: any): Mongocfgconfig50 {
        const message = { ...baseMongocfgconfig50 } as Mongocfgconfig50;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongocfgconfig50_Storage.fromJSON(object.storage);
        } else {
            message.storage = undefined;
        }
        if (
            object.operationProfiling !== undefined &&
            object.operationProfiling !== null
        ) {
            message.operationProfiling =
                Mongocfgconfig50_OperationProfiling.fromJSON(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongocfgconfig50_Network.fromJSON(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig50): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongocfgconfig50_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongocfgconfig50_OperationProfiling.toJSON(
                      message.operationProfiling
                  )
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongocfgconfig50_Network.toJSON(message.net)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongocfgconfig50>): Mongocfgconfig50 {
        const message = { ...baseMongocfgconfig50 } as Mongocfgconfig50;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongocfgconfig50_Storage.fromPartial(
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
                Mongocfgconfig50_OperationProfiling.fromPartial(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongocfgconfig50_Network.fromPartial(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig50_Storage: object = {};

export const Mongocfgconfig50_Storage = {
    encode(
        message: Mongocfgconfig50_Storage,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongocfgconfig50_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfig50_Storage {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_Storage,
        } as Mongocfgconfig50_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        Mongocfgconfig50_Storage_WiredTiger.decode(
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

    fromJSON(object: any): Mongocfgconfig50_Storage {
        const message = {
            ...baseMongocfgconfig50_Storage,
        } as Mongocfgconfig50_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongocfgconfig50_Storage_WiredTiger.fromJSON(
                object.wiredTiger
            );
        } else {
            message.wiredTiger = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig50_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongocfgconfig50_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig50_Storage>
    ): Mongocfgconfig50_Storage {
        const message = {
            ...baseMongocfgconfig50_Storage,
        } as Mongocfgconfig50_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger =
                Mongocfgconfig50_Storage_WiredTiger.fromPartial(
                    object.wiredTiger
                );
        } else {
            message.wiredTiger = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig50_Storage_WiredTiger: object = {};

export const Mongocfgconfig50_Storage_WiredTiger = {
    encode(
        message: Mongocfgconfig50_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongocfgconfig50_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfig50_Storage_WiredTiger {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger,
        } as Mongocfgconfig50_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        Mongocfgconfig50_Storage_WiredTiger_EngineConfig.decode(
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

    fromJSON(object: any): Mongocfgconfig50_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger,
        } as Mongocfgconfig50_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongocfgconfig50_Storage_WiredTiger_EngineConfig.fromJSON(
                    object.engineConfig
                );
        } else {
            message.engineConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig50_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongocfgconfig50_Storage_WiredTiger_EngineConfig.toJSON(
                      message.engineConfig
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig50_Storage_WiredTiger>
    ): Mongocfgconfig50_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger,
        } as Mongocfgconfig50_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongocfgconfig50_Storage_WiredTiger_EngineConfig.fromPartial(
                    object.engineConfig
                );
        } else {
            message.engineConfig = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig50_Storage_WiredTiger_EngineConfig: object = {};

export const Mongocfgconfig50_Storage_WiredTiger_EngineConfig = {
    encode(
        message: Mongocfgconfig50_Storage_WiredTiger_EngineConfig,
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
    ): Mongocfgconfig50_Storage_WiredTiger_EngineConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): Mongocfgconfig50_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = Number(object.cacheSizeGb);
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig50_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined &&
            (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig50_Storage_WiredTiger_EngineConfig>
    ): Mongocfgconfig50_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig50_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = object.cacheSizeGb;
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig50_OperationProfiling: object = { mode: 0 };

export const Mongocfgconfig50_OperationProfiling = {
    encode(
        message: Mongocfgconfig50_OperationProfiling,
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
    ): Mongocfgconfig50_OperationProfiling {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_OperationProfiling,
        } as Mongocfgconfig50_OperationProfiling;
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

    fromJSON(object: any): Mongocfgconfig50_OperationProfiling {
        const message = {
            ...baseMongocfgconfig50_OperationProfiling,
        } as Mongocfgconfig50_OperationProfiling;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongocfgconfig50_OperationProfiling_ModeFromJSON(
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

    toJSON(message: Mongocfgconfig50_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongocfgconfig50_OperationProfiling_ModeToJSON(
                message.mode
            ));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig50_OperationProfiling>
    ): Mongocfgconfig50_OperationProfiling {
        const message = {
            ...baseMongocfgconfig50_OperationProfiling,
        } as Mongocfgconfig50_OperationProfiling;
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

const baseMongocfgconfig50_Network: object = {};

export const Mongocfgconfig50_Network = {
    encode(
        message: Mongocfgconfig50_Network,
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
    ): Mongocfgconfig50_Network {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_Network,
        } as Mongocfgconfig50_Network;
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

    fromJSON(object: any): Mongocfgconfig50_Network {
        const message = {
            ...baseMongocfgconfig50_Network,
        } as Mongocfgconfig50_Network;
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

    toJSON(message: Mongocfgconfig50_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig50_Network>
    ): Mongocfgconfig50_Network {
        const message = {
            ...baseMongocfgconfig50_Network,
        } as Mongocfgconfig50_Network;
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

const baseMongosconfig50: object = {};

export const Mongosconfig50 = {
    encode(
        message: Mongosconfig50,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.net !== undefined) {
            Mongosconfig50_Network.encode(
                message.net,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig50 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig50 } as Mongosconfig50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.net = Mongosconfig50_Network.decode(
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

    fromJSON(object: any): Mongosconfig50 {
        const message = { ...baseMongosconfig50 } as Mongosconfig50;
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongosconfig50_Network.fromJSON(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },

    toJSON(message: Mongosconfig50): unknown {
        const obj: any = {};
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongosconfig50_Network.toJSON(message.net)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongosconfig50>): Mongosconfig50 {
        const message = { ...baseMongosconfig50 } as Mongosconfig50;
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongosconfig50_Network.fromPartial(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },
};

const baseMongosconfig50_Network: object = {};

export const Mongosconfig50_Network = {
    encode(
        message: Mongosconfig50_Network,
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
    ): Mongosconfig50_Network {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongosconfig50_Network,
        } as Mongosconfig50_Network;
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

    fromJSON(object: any): Mongosconfig50_Network {
        const message = {
            ...baseMongosconfig50_Network,
        } as Mongosconfig50_Network;
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

    toJSON(message: Mongosconfig50_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongosconfig50_Network>
    ): Mongosconfig50_Network {
        const message = {
            ...baseMongosconfig50_Network,
        } as Mongosconfig50_Network;
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

const baseMongodconfigset50: object = {};

export const Mongodconfigset50 = {
    encode(
        message: Mongodconfigset50,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongodconfig50.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongodconfig50.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongodconfig50.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfigset50 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfigset50 } as Mongodconfigset50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongodconfig50.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = Mongodconfig50.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = Mongodconfig50.decode(
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

    fromJSON(object: any): Mongodconfigset50 {
        const message = { ...baseMongodconfigset50 } as Mongodconfigset50;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongodconfig50.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongodconfig50.fromJSON(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongodconfig50.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfigset50): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongodconfig50.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongodconfig50.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongodconfig50.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongodconfigset50>): Mongodconfigset50 {
        const message = { ...baseMongodconfigset50 } as Mongodconfigset50;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongodconfig50.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongodconfig50.fromPartial(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongodconfig50.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

const baseMongocfgconfigset50: object = {};

export const Mongocfgconfigset50 = {
    encode(
        message: Mongocfgconfigset50,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongocfgconfig50.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongocfgconfig50.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongocfgconfig50.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfigset50 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfigset50 } as Mongocfgconfigset50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongocfgconfig50.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = Mongocfgconfig50.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = Mongocfgconfig50.decode(
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

    fromJSON(object: any): Mongocfgconfigset50 {
        const message = { ...baseMongocfgconfigset50 } as Mongocfgconfigset50;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongocfgconfig50.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongocfgconfig50.fromJSON(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongocfgconfig50.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfigset50): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongocfgconfig50.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongocfgconfig50.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongocfgconfig50.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongocfgconfigset50>): Mongocfgconfigset50 {
        const message = { ...baseMongocfgconfigset50 } as Mongocfgconfigset50;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongocfgconfig50.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongocfgconfig50.fromPartial(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongocfgconfig50.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

const baseMongosconfigset50: object = {};

export const Mongosconfigset50 = {
    encode(
        message: Mongosconfigset50,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongosconfig50.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongosconfig50.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongosconfig50.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfigset50 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfigset50 } as Mongosconfigset50;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongosconfig50.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = Mongosconfig50.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = Mongosconfig50.decode(
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

    fromJSON(object: any): Mongosconfigset50 {
        const message = { ...baseMongosconfigset50 } as Mongosconfigset50;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongosconfig50.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongosconfig50.fromJSON(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongosconfig50.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongosconfigset50): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongosconfig50.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongosconfig50.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongosconfig50.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongosconfigset50>): Mongosconfigset50 {
        const message = { ...baseMongosconfigset50 } as Mongosconfigset50;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongosconfig50.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongosconfig50.fromPartial(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongosconfig50.fromPartial(
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
