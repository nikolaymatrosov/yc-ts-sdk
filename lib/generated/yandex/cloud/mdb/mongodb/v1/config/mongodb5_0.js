/* eslint-disable */
import { DoubleValue, Int64Value, } from '../../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.mongodb.v1.config';
export var Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor;
(function (Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor) {
    Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor["COMPRESSOR_UNSPECIFIED"] = 0] = "COMPRESSOR_UNSPECIFIED";
    /** NONE - No compression. */
    Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor["NONE"] = 1] = "NONE";
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v5.0/reference/glossary/#term-snappy) compression. */
    Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor["SNAPPY"] = 2] = "SNAPPY";
    /** ZLIB - The [zlib](https://docs.mongodb.com/v5.0/reference/glossary/#term-zlib) compression. */
    Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor["ZLIB"] = 3] = "ZLIB";
    Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor || (Mongodconfig50_Storage_WiredTiger_CollectionConfig_Compressor = {}));
export function mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object) {
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
export function mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object) {
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
export var Mongodconfig50_OperationProfiling_Mode;
(function (Mongodconfig50_OperationProfiling_Mode) {
    Mongodconfig50_OperationProfiling_Mode[Mongodconfig50_OperationProfiling_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** OFF - The profiler is off and does not collect any data. */
    Mongodconfig50_OperationProfiling_Mode[Mongodconfig50_OperationProfiling_Mode["OFF"] = 1] = "OFF";
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    Mongodconfig50_OperationProfiling_Mode[Mongodconfig50_OperationProfiling_Mode["SLOW_OP"] = 2] = "SLOW_OP";
    /** ALL - The profiler collects data for all operations. */
    Mongodconfig50_OperationProfiling_Mode[Mongodconfig50_OperationProfiling_Mode["ALL"] = 3] = "ALL";
    Mongodconfig50_OperationProfiling_Mode[Mongodconfig50_OperationProfiling_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongodconfig50_OperationProfiling_Mode || (Mongodconfig50_OperationProfiling_Mode = {}));
export function mongodconfig50_OperationProfiling_ModeFromJSON(object) {
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
export function mongodconfig50_OperationProfiling_ModeToJSON(object) {
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
export var Mongocfgconfig50_OperationProfiling_Mode;
(function (Mongocfgconfig50_OperationProfiling_Mode) {
    Mongocfgconfig50_OperationProfiling_Mode[Mongocfgconfig50_OperationProfiling_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** OFF - The profiler is off and does not collect any data. */
    Mongocfgconfig50_OperationProfiling_Mode[Mongocfgconfig50_OperationProfiling_Mode["OFF"] = 1] = "OFF";
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    Mongocfgconfig50_OperationProfiling_Mode[Mongocfgconfig50_OperationProfiling_Mode["SLOW_OP"] = 2] = "SLOW_OP";
    /** ALL - The profiler collects data for all operations. */
    Mongocfgconfig50_OperationProfiling_Mode[Mongocfgconfig50_OperationProfiling_Mode["ALL"] = 3] = "ALL";
    Mongocfgconfig50_OperationProfiling_Mode[Mongocfgconfig50_OperationProfiling_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongocfgconfig50_OperationProfiling_Mode || (Mongocfgconfig50_OperationProfiling_Mode = {}));
export function mongocfgconfig50_OperationProfiling_ModeFromJSON(object) {
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
export function mongocfgconfig50_OperationProfiling_ModeToJSON(object) {
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
const baseMongodconfig50 = {};
export const Mongodconfig50 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.storage !== undefined) {
            Mongodconfig50_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongodconfig50_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
        }
        if (message.net !== undefined) {
            Mongodconfig50_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig50 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongodconfig50_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling =
                        Mongodconfig50_OperationProfiling.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.net = Mongodconfig50_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodconfig50 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongodconfig50_Storage.fromJSON(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                Mongodconfig50_OperationProfiling.fromJSON(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongodconfig50_Network.fromJSON(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongodconfig50_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongodconfig50_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongodconfig50_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodconfig50 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongodconfig50_Storage.fromPartial(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                Mongodconfig50_OperationProfiling.fromPartial(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongodconfig50_Network.fromPartial(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
};
const baseMongodconfig50_Storage = {};
export const Mongodconfig50_Storage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.wiredTiger !== undefined) {
            Mongodconfig50_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
        }
        if (message.journal !== undefined) {
            Mongodconfig50_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        Mongodconfig50_Storage_WiredTiger.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.journal = Mongodconfig50_Storage_Journal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongodconfig50_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongodconfig50_Storage_WiredTiger.fromJSON(object.wiredTiger);
        }
        else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = Mongodconfig50_Storage_Journal.fromJSON(object.journal);
        }
        else {
            message.journal = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseMongodconfig50_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongodconfig50_Storage_WiredTiger.fromPartial(object.wiredTiger);
        }
        else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = Mongodconfig50_Storage_Journal.fromPartial(object.journal);
        }
        else {
            message.journal = undefined;
        }
        return message;
    },
};
const baseMongodconfig50_Storage_WiredTiger = {};
export const Mongodconfig50_Storage_WiredTiger = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.engineConfig !== undefined) {
            Mongodconfig50_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            Mongodconfig50_Storage_WiredTiger_CollectionConfig.encode(message.collectionConfig, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        Mongodconfig50_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.collectionConfig =
                        Mongodconfig50_Storage_WiredTiger_CollectionConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongodconfig50_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig);
        }
        else {
            message.engineConfig = undefined;
        }
        if (object.collectionConfig !== undefined &&
            object.collectionConfig !== null) {
            message.collectionConfig =
                Mongodconfig50_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig);
        }
        else {
            message.collectionConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongodconfig50_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? Mongodconfig50_Storage_WiredTiger_CollectionConfig.toJSON(message.collectionConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongodconfig50_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig);
        }
        else {
            message.engineConfig = undefined;
        }
        if (object.collectionConfig !== undefined &&
            object.collectionConfig !== null) {
            message.collectionConfig =
                Mongodconfig50_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig);
        }
        else {
            message.collectionConfig = undefined;
        }
        return message;
    },
};
const baseMongodconfig50_Storage_WiredTiger_EngineConfig = {};
export const Mongodconfig50_Storage_WiredTiger_EngineConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cacheSizeGb !== undefined) {
            DoubleValue.encode({ value: message.cacheSizeGb }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_EngineConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cacheSizeGb = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_EngineConfig,
        };
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = Number(object.cacheSizeGb);
        }
        else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cacheSizeGb !== undefined &&
            (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_EngineConfig,
        };
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = object.cacheSizeGb;
        }
        else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },
};
const baseMongodconfig50_Storage_WiredTiger_CollectionConfig = {
    blockCompressor: 0,
};
export const Mongodconfig50_Storage_WiredTiger_CollectionConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockCompressor !== 0) {
            writer.uint32(8).int32(message.blockCompressor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_CollectionConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockCompressor = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_CollectionConfig,
        };
        if (object.blockCompressor !== undefined &&
            object.blockCompressor !== null) {
            message.blockCompressor =
                mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor);
        }
        else {
            message.blockCompressor = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.blockCompressor !== undefined &&
            (obj.blockCompressor =
                mongodconfig50_Storage_WiredTiger_CollectionConfig_CompressorToJSON(message.blockCompressor));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig50_Storage_WiredTiger_CollectionConfig,
        };
        if (object.blockCompressor !== undefined &&
            object.blockCompressor !== null) {
            message.blockCompressor = object.blockCompressor;
        }
        else {
            message.blockCompressor = 0;
        }
        return message;
    },
};
const baseMongodconfig50_Storage_Journal = {};
export const Mongodconfig50_Storage_Journal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.commitInterval !== undefined) {
            Int64Value.encode({ value: message.commitInterval }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Storage_Journal,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitInterval = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongodconfig50_Storage_Journal,
        };
        if (object.commitInterval !== undefined &&
            object.commitInterval !== null) {
            message.commitInterval = Number(object.commitInterval);
        }
        else {
            message.commitInterval = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.commitInterval !== undefined &&
            (obj.commitInterval = message.commitInterval);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig50_Storage_Journal,
        };
        if (object.commitInterval !== undefined &&
            object.commitInterval !== null) {
            message.commitInterval = object.commitInterval;
        }
        else {
            message.commitInterval = undefined;
        }
        return message;
    },
};
const baseMongodconfig50_OperationProfiling = { mode: 0 };
export const Mongodconfig50_OperationProfiling = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            Int64Value.encode({ value: message.slowOpThreshold }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_OperationProfiling,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.slowOpThreshold = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongodconfig50_OperationProfiling,
        };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongodconfig50_OperationProfiling_ModeFromJSON(object.mode);
        }
        else {
            message.mode = 0;
        }
        if (object.slowOpThreshold !== undefined &&
            object.slowOpThreshold !== null) {
            message.slowOpThreshold = Number(object.slowOpThreshold);
        }
        else {
            message.slowOpThreshold = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = mongodconfig50_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig50_OperationProfiling,
        };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        else {
            message.mode = 0;
        }
        if (object.slowOpThreshold !== undefined &&
            object.slowOpThreshold !== null) {
            message.slowOpThreshold = object.slowOpThreshold;
        }
        else {
            message.slowOpThreshold = undefined;
        }
        return message;
    },
};
const baseMongodconfig50_Network = {};
export const Mongodconfig50_Network = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode({ value: message.maxIncomingConnections }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig50_Network,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongodconfig50_Network,
        };
        if (object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null) {
            message.maxIncomingConnections = Number(object.maxIncomingConnections);
        }
        else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig50_Network,
        };
        if (object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null) {
            message.maxIncomingConnections = object.maxIncomingConnections;
        }
        else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },
};
const baseMongocfgconfig50 = {};
export const Mongocfgconfig50 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.storage !== undefined) {
            Mongocfgconfig50_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            Mongocfgconfig50_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
        }
        if (message.net !== undefined) {
            Mongocfgconfig50_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig50 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Mongocfgconfig50_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling =
                        Mongocfgconfig50_OperationProfiling.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.net = Mongocfgconfig50_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongocfgconfig50 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongocfgconfig50_Storage.fromJSON(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                Mongocfgconfig50_OperationProfiling.fromJSON(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongocfgconfig50_Network.fromJSON(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storage !== undefined &&
            (obj.storage = message.storage
                ? Mongocfgconfig50_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? Mongocfgconfig50_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongocfgconfig50_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongocfgconfig50 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Mongocfgconfig50_Storage.fromPartial(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                Mongocfgconfig50_OperationProfiling.fromPartial(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongocfgconfig50_Network.fromPartial(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
};
const baseMongocfgconfig50_Storage = {};
export const Mongocfgconfig50_Storage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.wiredTiger !== undefined) {
            Mongocfgconfig50_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_Storage,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        Mongocfgconfig50_Storage_WiredTiger.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongocfgconfig50_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = Mongocfgconfig50_Storage_WiredTiger.fromJSON(object.wiredTiger);
        }
        else {
            message.wiredTiger = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.wiredTiger !== undefined &&
            (obj.wiredTiger = message.wiredTiger
                ? Mongocfgconfig50_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongocfgconfig50_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger =
                Mongocfgconfig50_Storage_WiredTiger.fromPartial(object.wiredTiger);
        }
        else {
            message.wiredTiger = undefined;
        }
        return message;
    },
};
const baseMongocfgconfig50_Storage_WiredTiger = {};
export const Mongocfgconfig50_Storage_WiredTiger = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.engineConfig !== undefined) {
            Mongocfgconfig50_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        Mongocfgconfig50_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongocfgconfig50_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig);
        }
        else {
            message.engineConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.engineConfig !== undefined &&
            (obj.engineConfig = message.engineConfig
                ? Mongocfgconfig50_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                Mongocfgconfig50_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig);
        }
        else {
            message.engineConfig = undefined;
        }
        return message;
    },
};
const baseMongocfgconfig50_Storage_WiredTiger_EngineConfig = {};
export const Mongocfgconfig50_Storage_WiredTiger_EngineConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cacheSizeGb !== undefined) {
            DoubleValue.encode({ value: message.cacheSizeGb }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger_EngineConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cacheSizeGb = DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger_EngineConfig,
        };
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = Number(object.cacheSizeGb);
        }
        else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cacheSizeGb !== undefined &&
            (obj.cacheSizeGb = message.cacheSizeGb);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongocfgconfig50_Storage_WiredTiger_EngineConfig,
        };
        if (object.cacheSizeGb !== undefined && object.cacheSizeGb !== null) {
            message.cacheSizeGb = object.cacheSizeGb;
        }
        else {
            message.cacheSizeGb = undefined;
        }
        return message;
    },
};
const baseMongocfgconfig50_OperationProfiling = { mode: 0 };
export const Mongocfgconfig50_OperationProfiling = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            Int64Value.encode({ value: message.slowOpThreshold }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_OperationProfiling,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.slowOpThreshold = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongocfgconfig50_OperationProfiling,
        };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongocfgconfig50_OperationProfiling_ModeFromJSON(object.mode);
        }
        else {
            message.mode = 0;
        }
        if (object.slowOpThreshold !== undefined &&
            object.slowOpThreshold !== null) {
            message.slowOpThreshold = Number(object.slowOpThreshold);
        }
        else {
            message.slowOpThreshold = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined &&
            (obj.mode = mongocfgconfig50_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongocfgconfig50_OperationProfiling,
        };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = object.mode;
        }
        else {
            message.mode = 0;
        }
        if (object.slowOpThreshold !== undefined &&
            object.slowOpThreshold !== null) {
            message.slowOpThreshold = object.slowOpThreshold;
        }
        else {
            message.slowOpThreshold = undefined;
        }
        return message;
    },
};
const baseMongocfgconfig50_Network = {};
export const Mongocfgconfig50_Network = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode({ value: message.maxIncomingConnections }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig50_Network,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongocfgconfig50_Network,
        };
        if (object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null) {
            message.maxIncomingConnections = Number(object.maxIncomingConnections);
        }
        else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongocfgconfig50_Network,
        };
        if (object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null) {
            message.maxIncomingConnections = object.maxIncomingConnections;
        }
        else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },
};
const baseMongosconfig50 = {};
export const Mongosconfig50 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.net !== undefined) {
            Mongosconfig50_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig50 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.net = Mongosconfig50_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongosconfig50 };
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongosconfig50_Network.fromJSON(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.net !== undefined &&
            (obj.net = message.net
                ? Mongosconfig50_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongosconfig50 };
        if (object.net !== undefined && object.net !== null) {
            message.net = Mongosconfig50_Network.fromPartial(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
};
const baseMongosconfig50_Network = {};
export const Mongosconfig50_Network = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            Int64Value.encode({ value: message.maxIncomingConnections }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongosconfig50_Network,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMongosconfig50_Network,
        };
        if (object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null) {
            message.maxIncomingConnections = Number(object.maxIncomingConnections);
        }
        else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxIncomingConnections !== undefined &&
            (obj.maxIncomingConnections = message.maxIncomingConnections);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongosconfig50_Network,
        };
        if (object.maxIncomingConnections !== undefined &&
            object.maxIncomingConnections !== null) {
            message.maxIncomingConnections = object.maxIncomingConnections;
        }
        else {
            message.maxIncomingConnections = undefined;
        }
        return message;
    },
};
const baseMongodconfigset50 = {};
export const Mongodconfigset50 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            Mongodconfig50.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongodconfig50.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongodconfig50.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfigset50 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongodconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongodconfig50.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongodconfig50.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodconfigset50 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Mongodconfig50.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongodconfig50.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Mongodconfig50.fromJSON(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseMongodconfigset50 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Mongodconfig50.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongodconfig50.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Mongodconfig50.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
const baseMongocfgconfigset50 = {};
export const Mongocfgconfigset50 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            Mongocfgconfig50.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongocfgconfig50.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongocfgconfig50.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfigset50 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongocfgconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongocfgconfig50.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongocfgconfig50.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongocfgconfigset50 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Mongocfgconfig50.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongocfgconfig50.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Mongocfgconfig50.fromJSON(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseMongocfgconfigset50 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Mongocfgconfig50.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongocfgconfig50.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Mongocfgconfig50.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
const baseMongosconfigset50 = {};
export const Mongosconfigset50 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            Mongosconfig50.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mongosconfig50.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mongosconfig50.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfigset50 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mongosconfig50.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = Mongosconfig50.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = Mongosconfig50.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongosconfigset50 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Mongosconfig50.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongosconfig50.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Mongosconfig50.fromJSON(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseMongosconfigset50 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = Mongosconfig50.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mongosconfig50.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = Mongosconfig50.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
