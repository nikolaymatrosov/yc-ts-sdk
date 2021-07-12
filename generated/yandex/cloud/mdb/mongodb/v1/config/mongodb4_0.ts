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
 * options described in [MongoDB documentation](https://docs.mongodb.com/v4.0/reference/configuration-options/).
 */
export interface Mongodconfig40 {
    /** `storage` section of mongod configuration. */
    storage: Mongodconfig40_Storage | undefined;
    /** `operationProfiling` section of mongod configuration. */
    operationProfiling: Mongodconfig40_OperationProfiling | undefined;
    /** `net` section of mongod configuration. */
    net: Mongodconfig40_Network | undefined;
}

export interface Mongodconfig40_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongodconfig40_Storage_WiredTiger | undefined;
    /** Configuration of the MongoDB [journal](https://docs.mongodb.com/v4.0/reference/glossary/#term-journal). */
    journal: Mongodconfig40_Storage_Journal | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongodconfig40_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongodconfig40_Storage_WiredTiger_EngineConfig | undefined;
    /** Collection configuration for WiredTiger. */
    collectionConfig:
        | Mongodconfig40_Storage_WiredTiger_CollectionConfig
        | undefined;
}

export interface Mongodconfig40_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}

export interface Mongodconfig40_Storage_WiredTiger_CollectionConfig {
    /** Default type of compression to use for collection data. */
    blockCompressor: Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor;
}

export enum Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    /** NONE - No compression. */
    NONE = 1,
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.0/reference/glossary/#term-snappy) compression. */
    SNAPPY = 2,
    /** ZLIB - The [zlib](https://docs.mongodb.com/v4.0/reference/glossary/#term-zlib) compression. */
    ZLIB = 3,
    UNRECOGNIZED = -1,
}

export function mongodconfig40_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
    object: any
): Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'NONE':
            return Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
        case 2:
        case 'SNAPPY':
            return Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
        case 3:
        case 'ZLIB':
            return Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
    }
}

export function mongodconfig40_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
    object: Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor
): string {
    switch (object) {
        case Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
            return 'NONE';
        case Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongodconfig40_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
            return 'ZLIB';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig40_Storage_Journal {
    /**
     * Commit interval between journal operations, in milliseconds.
     * Default: 100.
     */
    commitInterval: number | undefined;
}

export interface Mongodconfig40_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: Mongodconfig40_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode.
     */
    slowOpThreshold: number | undefined;
}

export enum Mongodconfig40_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongodconfig40_OperationProfiling_ModeFromJSON(
    object: any
): Mongodconfig40_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongodconfig40_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongodconfig40_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongodconfig40_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongodconfig40_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig40_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongodconfig40_OperationProfiling_ModeToJSON(
    object: Mongodconfig40_OperationProfiling_Mode
): string {
    switch (object) {
        case Mongodconfig40_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongodconfig40_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongodconfig40_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongodconfig40_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongodconfig40_Network {
    /** The maximum number of simultaneous connections that mongod will accept. */
    maxIncomingConnections: number | undefined;
}

export interface Mongocfgconfig40 {
    /** `storage` section of mongocfg configuration. */
    storage: Mongocfgconfig40_Storage | undefined;
    /** `operationProfiling` section of mongocfg configuration. */
    operationProfiling: Mongocfgconfig40_OperationProfiling | undefined;
    /** `net` section of mongocfg configuration. */
    net: Mongocfgconfig40_Network | undefined;
}

export interface Mongocfgconfig40_Storage {
    /** Configuration of the WiredTiger storage engine. */
    wiredTiger: Mongocfgconfig40_Storage_WiredTiger | undefined;
}

/** Configuration of WiredTiger storage engine. */
export interface Mongocfgconfig40_Storage_WiredTiger {
    /** Engine configuration for WiredTiger. */
    engineConfig: Mongocfgconfig40_Storage_WiredTiger_EngineConfig | undefined;
}

export interface Mongocfgconfig40_Storage_WiredTiger_EngineConfig {
    /** The maximum size of the internal cache that WiredTiger will use for all data. */
    cacheSizeGb: number | undefined;
}

export interface Mongocfgconfig40_OperationProfiling {
    /** Mode which specifies operations that should be profiled. */
    mode: Mongocfgconfig40_OperationProfiling_Mode;
    /**
     * The slow operation time threshold, in milliseconds. Operations that run
     * for longer than this threshold are considered slow, and are processed by the profiler
     * running in the SLOW_OP mode. For details see [MongoDB documentation](https://docs.mongodb.com/v4.0/reference/configuration-options/#operationProfiling.slowOpThresholdMs).
     */
    slowOpThreshold: number | undefined;
}

export enum Mongocfgconfig40_OperationProfiling_Mode {
    MODE_UNSPECIFIED = 0,
    /** OFF - The profiler is off and does not collect any data. */
    OFF = 1,
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    SLOW_OP = 2,
    /** ALL - The profiler collects data for all operations. */
    ALL = 3,
    UNRECOGNIZED = -1,
}

export function mongocfgconfig40_OperationProfiling_ModeFromJSON(
    object: any
): Mongocfgconfig40_OperationProfiling_Mode {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongocfgconfig40_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongocfgconfig40_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongocfgconfig40_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongocfgconfig40_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongocfgconfig40_OperationProfiling_Mode.UNRECOGNIZED;
    }
}

export function mongocfgconfig40_OperationProfiling_ModeToJSON(
    object: Mongocfgconfig40_OperationProfiling_Mode
): string {
    switch (object) {
        case Mongocfgconfig40_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongocfgconfig40_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongocfgconfig40_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongocfgconfig40_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface Mongocfgconfig40_Network {
    /** The maximum number of simultaneous connections that mongocfg will accept. */
    maxIncomingConnections: number | undefined;
}

export interface Mongosconfig40 {
    /** Network settings for mongos. */
    net: Mongosconfig40_Network | undefined;
}

export interface Mongosconfig40_Network {
    /** The maximum number of simultaneous connections that mongos will accept. */
    maxIncomingConnections: number | undefined;
}

export interface Mongodconfigset40 {
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

const baseMongodconfig40: object = {};

export const Mongodconfig40 = {
    encode(
        message: Mongodconfig40,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.storage !== undefined) {
            Mongodconfig40_Storage.encode(
                message.storage,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongodconfig40_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongodconfig40_Network.encode(
                message.net,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfig40 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig40 } as Mongodconfig40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongodconfig40_Storage.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.operationProfiling =
                        Mongodconfig40_OperationProfiling.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 3:
                    message.net = Mongodconfig40_Network.decode(
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

    fromJSON(object: any): Mongodconfig40 {
        const message = { ...baseMongodconfig40 } as Mongodconfig40;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongodconfig40_Storage.fromJSON(object.storage);
        } else {
            message.storage = undefined;
        }
        if (
            object.operationProfiling !== undefined &&
            object.operationProfiling !== null
        ) {
            message.operationProfiling =
                Mongodconfig40_OperationProfiling.fromJSON(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongodconfig40_Network.fromJSON(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig40): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongodconfig40_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongodconfig40_OperationProfiling.toJSON(
                      message.operationProfiling
                  )
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongodconfig40_Network.toJSON(message.net)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongodconfig40>): Mongodconfig40 {
        const message = { ...baseMongodconfig40 } as Mongodconfig40;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongodconfig40_Storage.fromPartial(
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
                Mongodconfig40_OperationProfiling.fromPartial(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongodconfig40_Network.fromPartial(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },
};

const baseMongodconfig40_Storage: object = {};

export const Mongodconfig40_Storage = {
    encode(
        message: Mongodconfig40_Storage,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongodconfig40_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.journal !== undefined) {
            Mongodconfig40_Storage_Journal.encode(
                message.journal,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongodconfig40_Storage {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig40_Storage,
        } as Mongodconfig40_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        Mongodconfig40_Storage_WiredTiger.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 2:
                    message.journal = Mongodconfig40_Storage_Journal.decode(
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

    fromJSON(object: any): Mongodconfig40_Storage {
        const message = {
            ...baseMongodconfig40_Storage,
        } as Mongodconfig40_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongodconfig40_Storage_WiredTiger.fromJSON(
                object.wiredTiger
            );
        } else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = Mongodconfig40_Storage_Journal.fromJSON(
                object.journal
            );
        } else {
            message.journal = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig40_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongodconfig40_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? Mongodconfig40_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig40_Storage>
    ): Mongodconfig40_Storage {
        const message = {
            ...baseMongodconfig40_Storage,
        } as Mongodconfig40_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongodconfig40_Storage_WiredTiger.fromPartial(
                object.wiredTiger
            );
        } else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = Mongodconfig40_Storage_Journal.fromPartial(
                object.journal
            );
        } else {
            message.journal = undefined;
        }
        return message;
    },
};

const baseMongodconfig40_Storage_WiredTiger: object = {};

export const Mongodconfig40_Storage_WiredTiger = {
    encode(
        message: Mongodconfig40_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongodconfig40_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            Mongodconfig40_Storage_WiredTiger_CollectionConfig.encode(
                message.collectionConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongodconfig40_Storage_WiredTiger {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger,
        } as Mongodconfig40_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        Mongodconfig40_Storage_WiredTiger_EngineConfig.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 2:
                    message.collectionConfig =
                        Mongodconfig40_Storage_WiredTiger_CollectionConfig.decode(
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

    fromJSON(object: any): Mongodconfig40_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger,
        } as Mongodconfig40_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongodconfig40_Storage_WiredTiger_EngineConfig.fromJSON(
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
                Mongodconfig40_Storage_WiredTiger_CollectionConfig.fromJSON(
                    object.collectionConfig
                );
        } else {
            message.collectionConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig40_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongodconfig40_Storage_WiredTiger_EngineConfig.toJSON(
                      message.engineConfig
                  )
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? Mongodconfig40_Storage_WiredTiger_CollectionConfig.toJSON(
                      message.collectionConfig
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig40_Storage_WiredTiger>
    ): Mongodconfig40_Storage_WiredTiger {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger,
        } as Mongodconfig40_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongodconfig40_Storage_WiredTiger_EngineConfig.fromPartial(
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
                Mongodconfig40_Storage_WiredTiger_CollectionConfig.fromPartial(
                    object.collectionConfig
                );
        } else {
            message.collectionConfig = undefined;
        }
        return message;
    },
};

const baseMongodconfig40_Storage_WiredTiger_EngineConfig: object = {};

export const Mongodconfig40_Storage_WiredTiger_EngineConfig = {
    encode(
        message: Mongodconfig40_Storage_WiredTiger_EngineConfig,
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
    ): Mongodconfig40_Storage_WiredTiger_EngineConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig40_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): Mongodconfig40_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig40_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = Number(object.cacheSizeGb);
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfig40_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined &&
            (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig40_Storage_WiredTiger_EngineConfig>
    ): Mongodconfig40_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongodconfig40_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = object.cacheSizeGb;
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },
};

const baseMongodconfig40_Storage_WiredTiger_CollectionConfig: object = {
    blockCompressor: 0,
};

export const Mongodconfig40_Storage_WiredTiger_CollectionConfig = {
    encode(
        message: Mongodconfig40_Storage_WiredTiger_CollectionConfig,
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
    ): Mongodconfig40_Storage_WiredTiger_CollectionConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig40_Storage_WiredTiger_CollectionConfig;
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

    fromJSON(object: any): Mongodconfig40_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig40_Storage_WiredTiger_CollectionConfig;
        if (
            object.blockCompressor !== undefined &&
            object.blockCompressor !== null
        ) {
            message.blockCompressor =
                mongodconfig40_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(
                    object.blockCompressor
                );
        } else {
            message.blockCompressor = 0;
        }
        return message;
    },

    toJSON(
        message: Mongodconfig40_Storage_WiredTiger_CollectionConfig
    ): unknown {
        const obj: any = {};
        message.blockCompressor !== undefined &&
            (obj.blockCompressor =
                mongodconfig40_Storage_WiredTiger_CollectionConfig_CompressorToJSON(
                    message.blockCompressor
                ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig40_Storage_WiredTiger_CollectionConfig>
    ): Mongodconfig40_Storage_WiredTiger_CollectionConfig {
        const message = {
            ...baseMongodconfig40_Storage_WiredTiger_CollectionConfig,
        } as Mongodconfig40_Storage_WiredTiger_CollectionConfig;
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

const baseMongodconfig40_Storage_Journal: object = {};

export const Mongodconfig40_Storage_Journal = {
    encode(
        message: Mongodconfig40_Storage_Journal,
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
    ): Mongodconfig40_Storage_Journal {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig40_Storage_Journal,
        } as Mongodconfig40_Storage_Journal;
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

    fromJSON(object: any): Mongodconfig40_Storage_Journal {
        const message = {
            ...baseMongodconfig40_Storage_Journal,
        } as Mongodconfig40_Storage_Journal;
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

    toJSON(message: Mongodconfig40_Storage_Journal): unknown {
        const obj: any = {};
        message.commitInterval !== undefined &&
            (obj.commitInterval = message.commitInterval);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig40_Storage_Journal>
    ): Mongodconfig40_Storage_Journal {
        const message = {
            ...baseMongodconfig40_Storage_Journal,
        } as Mongodconfig40_Storage_Journal;
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

const baseMongodconfig40_OperationProfiling: object = { mode: 0 };

export const Mongodconfig40_OperationProfiling = {
    encode(
        message: Mongodconfig40_OperationProfiling,
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
    ): Mongodconfig40_OperationProfiling {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig40_OperationProfiling,
        } as Mongodconfig40_OperationProfiling;
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

    fromJSON(object: any): Mongodconfig40_OperationProfiling {
        const message = {
            ...baseMongodconfig40_OperationProfiling,
        } as Mongodconfig40_OperationProfiling;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongodconfig40_OperationProfiling_ModeFromJSON(
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

    toJSON(message: Mongodconfig40_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongodconfig40_OperationProfiling_ModeToJSON(
                message.mode
            ));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig40_OperationProfiling>
    ): Mongodconfig40_OperationProfiling {
        const message = {
            ...baseMongodconfig40_OperationProfiling,
        } as Mongodconfig40_OperationProfiling;
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

const baseMongodconfig40_Network: object = {};

export const Mongodconfig40_Network = {
    encode(
        message: Mongodconfig40_Network,
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
    ): Mongodconfig40_Network {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig40_Network,
        } as Mongodconfig40_Network;
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

    fromJSON(object: any): Mongodconfig40_Network {
        const message = {
            ...baseMongodconfig40_Network,
        } as Mongodconfig40_Network;
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

    toJSON(message: Mongodconfig40_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongodconfig40_Network>
    ): Mongodconfig40_Network {
        const message = {
            ...baseMongodconfig40_Network,
        } as Mongodconfig40_Network;
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

const baseMongocfgconfig40: object = {};

export const Mongocfgconfig40 = {
    encode(
        message: Mongocfgconfig40,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.storage !== undefined) {
            Mongocfgconfig40_Storage.encode(
                message.storage,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongocfgconfig40_OperationProfiling.encode(
                message.operationProfiling,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.net !== undefined) {
            Mongocfgconfig40_Network.encode(
                message.net,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongocfgconfig40 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig40 } as Mongocfgconfig40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongocfgconfig40_Storage.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.operationProfiling =
                        Mongocfgconfig40_OperationProfiling.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 3:
                    message.net = Mongocfgconfig40_Network.decode(
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

    fromJSON(object: any): Mongocfgconfig40 {
        const message = { ...baseMongocfgconfig40 } as Mongocfgconfig40;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongocfgconfig40_Storage.fromJSON(object.storage);
        } else {
            message.storage = undefined;
        }
        if (
            object.operationProfiling !== undefined &&
            object.operationProfiling !== null
        ) {
            message.operationProfiling =
                Mongocfgconfig40_OperationProfiling.fromJSON(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongocfgconfig40_Network.fromJSON(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig40): unknown {
        const obj: any = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongocfgconfig40_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongocfgconfig40_OperationProfiling.toJSON(
                      message.operationProfiling
                  )
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongocfgconfig40_Network.toJSON(message.net)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongocfgconfig40>): Mongocfgconfig40 {
        const message = { ...baseMongocfgconfig40 } as Mongocfgconfig40;
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongocfgconfig40_Storage.fromPartial(
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
                Mongocfgconfig40_OperationProfiling.fromPartial(
                    object.operationProfiling
                );
        } else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongocfgconfig40_Network.fromPartial(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig40_Storage: object = {};

export const Mongocfgconfig40_Storage = {
    encode(
        message: Mongocfgconfig40_Storage,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.wiredTiger !== undefined) {
            Mongocfgconfig40_Storage_WiredTiger.encode(
                message.wiredTiger,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfig40_Storage {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig40_Storage,
        } as Mongocfgconfig40_Storage;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        Mongocfgconfig40_Storage_WiredTiger.decode(
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

    fromJSON(object: any): Mongocfgconfig40_Storage {
        const message = {
            ...baseMongocfgconfig40_Storage,
        } as Mongocfgconfig40_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongocfgconfig40_Storage_WiredTiger.fromJSON(
                object.wiredTiger
            );
        } else {
            message.wiredTiger = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig40_Storage): unknown {
        const obj: any = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongocfgconfig40_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig40_Storage>
    ): Mongocfgconfig40_Storage {
        const message = {
            ...baseMongocfgconfig40_Storage,
        } as Mongocfgconfig40_Storage;
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger =
                Mongocfgconfig40_Storage_WiredTiger.fromPartial(
                    object.wiredTiger
                );
        } else {
            message.wiredTiger = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig40_Storage_WiredTiger: object = {};

export const Mongocfgconfig40_Storage_WiredTiger = {
    encode(
        message: Mongocfgconfig40_Storage_WiredTiger,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.engineConfig !== undefined) {
            Mongocfgconfig40_Storage_WiredTiger_EngineConfig.encode(
                message.engineConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfig40_Storage_WiredTiger {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger,
        } as Mongocfgconfig40_Storage_WiredTiger;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        Mongocfgconfig40_Storage_WiredTiger_EngineConfig.decode(
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

    fromJSON(object: any): Mongocfgconfig40_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger,
        } as Mongocfgconfig40_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongocfgconfig40_Storage_WiredTiger_EngineConfig.fromJSON(
                    object.engineConfig
                );
        } else {
            message.engineConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig40_Storage_WiredTiger): unknown {
        const obj: any = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongocfgconfig40_Storage_WiredTiger_EngineConfig.toJSON(
                      message.engineConfig
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig40_Storage_WiredTiger>
    ): Mongocfgconfig40_Storage_WiredTiger {
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger,
        } as Mongocfgconfig40_Storage_WiredTiger;
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongocfgconfig40_Storage_WiredTiger_EngineConfig.fromPartial(
                    object.engineConfig
                );
        } else {
            message.engineConfig = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig40_Storage_WiredTiger_EngineConfig: object = {};

export const Mongocfgconfig40_Storage_WiredTiger_EngineConfig = {
    encode(
        message: Mongocfgconfig40_Storage_WiredTiger_EngineConfig,
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
    ): Mongocfgconfig40_Storage_WiredTiger_EngineConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig40_Storage_WiredTiger_EngineConfig;
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

    fromJSON(object: any): Mongocfgconfig40_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig40_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = Number(object.cacheSizeGb);
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfig40_Storage_WiredTiger_EngineConfig): unknown {
        const obj: any = {};
        message.cacheSizeGb !== undefined &&
            (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig40_Storage_WiredTiger_EngineConfig>
    ): Mongocfgconfig40_Storage_WiredTiger_EngineConfig {
        const message = {
            ...baseMongocfgconfig40_Storage_WiredTiger_EngineConfig,
        } as Mongocfgconfig40_Storage_WiredTiger_EngineConfig;
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = object.cacheSizeGb;
        } else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },
};

const baseMongocfgconfig40_OperationProfiling: object = { mode: 0 };

export const Mongocfgconfig40_OperationProfiling = {
    encode(
        message: Mongocfgconfig40_OperationProfiling,
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
    ): Mongocfgconfig40_OperationProfiling {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig40_OperationProfiling,
        } as Mongocfgconfig40_OperationProfiling;
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

    fromJSON(object: any): Mongocfgconfig40_OperationProfiling {
        const message = {
            ...baseMongocfgconfig40_OperationProfiling,
        } as Mongocfgconfig40_OperationProfiling;
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongocfgconfig40_OperationProfiling_ModeFromJSON(
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

    toJSON(message: Mongocfgconfig40_OperationProfiling): unknown {
        const obj: any = {};
        message.mode !== undefined &&
            (obj.mode = mongocfgconfig40_OperationProfiling_ModeToJSON(
                message.mode
            ));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig40_OperationProfiling>
    ): Mongocfgconfig40_OperationProfiling {
        const message = {
            ...baseMongocfgconfig40_OperationProfiling,
        } as Mongocfgconfig40_OperationProfiling;
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

const baseMongocfgconfig40_Network: object = {};

export const Mongocfgconfig40_Network = {
    encode(
        message: Mongocfgconfig40_Network,
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
    ): Mongocfgconfig40_Network {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig40_Network,
        } as Mongocfgconfig40_Network;
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

    fromJSON(object: any): Mongocfgconfig40_Network {
        const message = {
            ...baseMongocfgconfig40_Network,
        } as Mongocfgconfig40_Network;
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

    toJSON(message: Mongocfgconfig40_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongocfgconfig40_Network>
    ): Mongocfgconfig40_Network {
        const message = {
            ...baseMongocfgconfig40_Network,
        } as Mongocfgconfig40_Network;
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

const baseMongosconfig40: object = {};

export const Mongosconfig40 = {
    encode(
        message: Mongosconfig40,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.net !== undefined) {
            Mongosconfig40_Network.encode(
                message.net,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfig40 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig40 } as Mongosconfig40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.net = Mongosconfig40_Network.decode(
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

    fromJSON(object: any): Mongosconfig40 {
        const message = { ...baseMongosconfig40 } as Mongosconfig40;
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongosconfig40_Network.fromJSON(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },

    toJSON(message: Mongosconfig40): unknown {
        const obj: any = {};
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongosconfig40_Network.toJSON(message.net)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongosconfig40>): Mongosconfig40 {
        const message = { ...baseMongosconfig40 } as Mongosconfig40;
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongosconfig40_Network.fromPartial(object.net);
        } else {
            message.net = undefined;
        }
        return message;
    },
};

const baseMongosconfig40_Network: object = {};

export const Mongosconfig40_Network = {
    encode(
        message: Mongosconfig40_Network,
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
    ): Mongosconfig40_Network {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongosconfig40_Network,
        } as Mongosconfig40_Network;
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

    fromJSON(object: any): Mongosconfig40_Network {
        const message = {
            ...baseMongosconfig40_Network,
        } as Mongosconfig40_Network;
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

    toJSON(message: Mongosconfig40_Network): unknown {
        const obj: any = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Mongosconfig40_Network>
    ): Mongosconfig40_Network {
        const message = {
            ...baseMongosconfig40_Network,
        } as Mongosconfig40_Network;
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

const baseMongodconfigset40: object = {};

export const Mongodconfigset40 = {
    encode(
        message: Mongodconfigset40,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongodconfig40.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongodconfig40.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongodconfig40.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongodconfigset40 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfigset40 } as Mongodconfigset40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongodconfig40.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = Mongodconfig40.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = Mongodconfig40.decode(
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

    fromJSON(object: any): Mongodconfigset40 {
        const message = { ...baseMongodconfigset40 } as Mongodconfigset40;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongodconfig40.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongodconfig40.fromJSON(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongodconfig40.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongodconfigset40): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongodconfig40.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongodconfig40.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongodconfig40.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongodconfigset40>): Mongodconfigset40 {
        const message = { ...baseMongodconfigset40 } as Mongodconfigset40;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongodconfig40.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongodconfig40.fromPartial(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongodconfig40.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

const baseMongocfgconfigset40: object = {};

export const Mongocfgconfigset40 = {
    encode(
        message: Mongocfgconfigset40,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongocfgconfig40.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongocfgconfig40.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongocfgconfig40.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Mongocfgconfigset40 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfigset40 } as Mongocfgconfigset40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongocfgconfig40.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = Mongocfgconfig40.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = Mongocfgconfig40.decode(
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

    fromJSON(object: any): Mongocfgconfigset40 {
        const message = { ...baseMongocfgconfigset40 } as Mongocfgconfigset40;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongocfgconfig40.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongocfgconfig40.fromJSON(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongocfgconfig40.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongocfgconfigset40): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongocfgconfig40.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongocfgconfig40.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongocfgconfig40.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongocfgconfigset40>): Mongocfgconfigset40 {
        const message = { ...baseMongocfgconfigset40 } as Mongocfgconfigset40;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongocfgconfig40.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongocfgconfig40.fromPartial(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongocfgconfig40.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

const baseMongosconfigset40: object = {};

export const Mongosconfigset40 = {
    encode(
        message: Mongosconfigset40,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mongosconfig40.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongosconfig40.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongosconfig40.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mongosconfigset40 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfigset40 } as Mongosconfigset40;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongosconfig40.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = Mongosconfig40.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = Mongosconfig40.decode(
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

    fromJSON(object: any): Mongosconfigset40 {
        const message = { ...baseMongosconfigset40 } as Mongosconfigset40;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongosconfig40.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongosconfig40.fromJSON(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongosconfig40.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mongosconfigset40): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mongosconfig40.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mongosconfig40.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mongosconfig40.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mongosconfigset40>): Mongosconfigset40 {
        const message = { ...baseMongosconfigset40 } as Mongosconfigset40;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mongosconfig40.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongosconfig40.fromPartial(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mongosconfig40.fromPartial(
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
