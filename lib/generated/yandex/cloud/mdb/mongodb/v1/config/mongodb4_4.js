"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongosconfigset44 = exports.Mongocfgconfigset44 = exports.Mongodconfigset44 = exports.Mongosconfig44_Network = exports.Mongosconfig44 = exports.Mongocfgconfig44_Network = exports.Mongocfgconfig44_OperationProfiling = exports.Mongocfgconfig44_Storage_WiredTiger_EngineConfig = exports.Mongocfgconfig44_Storage_WiredTiger = exports.Mongocfgconfig44_Storage = exports.Mongocfgconfig44 = exports.Mongodconfig44_Network = exports.Mongodconfig44_OperationProfiling = exports.Mongodconfig44_Storage_Journal = exports.Mongodconfig44_Storage_WiredTiger_CollectionConfig = exports.Mongodconfig44_Storage_WiredTiger_EngineConfig = exports.Mongodconfig44_Storage_WiredTiger = exports.Mongodconfig44_Storage = exports.Mongodconfig44 = exports.mongocfgconfig44_OperationProfiling_ModeToJSON = exports.mongocfgconfig44_OperationProfiling_ModeFromJSON = exports.Mongocfgconfig44_OperationProfiling_Mode = exports.mongodconfig44_OperationProfiling_ModeToJSON = exports.mongodconfig44_OperationProfiling_ModeFromJSON = exports.Mongodconfig44_OperationProfiling_Mode = exports.mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorToJSON = exports.mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorFromJSON = exports.Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.mongodb.v1.config';
var Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor;
(function (Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor) {
    Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor["COMPRESSOR_UNSPECIFIED"] = 0] = "COMPRESSOR_UNSPECIFIED";
    /** NONE - No compression. */
    Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor["NONE"] = 1] = "NONE";
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.4/reference/glossary/#term-snappy) compression. */
    Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor["SNAPPY"] = 2] = "SNAPPY";
    /** ZLIB - The [zlib](https://docs.mongodb.com/v4.4/reference/glossary/#term-zlib) compression. */
    Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor["ZLIB"] = 3] = "ZLIB";
    Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor = exports.Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor || (exports.Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor = {}));
function mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object) {
    switch (object) {
        case 0:
        case 'COMPRESSOR_UNSPECIFIED':
            return Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED;
        case 1:
        case 'NONE':
            return Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.NONE;
        case 2:
        case 'SNAPPY':
            return Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY;
        case 3:
        case 'ZLIB':
            return Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.UNRECOGNIZED;
    }
}
exports.mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorFromJSON = mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorFromJSON;
function mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object) {
    switch (object) {
        case Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.COMPRESSOR_UNSPECIFIED:
            return 'COMPRESSOR_UNSPECIFIED';
        case Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.NONE:
            return 'NONE';
        case Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.SNAPPY:
            return 'SNAPPY';
        case Mongodconfig44_Storage_WiredTiger_CollectionConfig_Compressor.ZLIB:
            return 'ZLIB';
        default:
            return 'UNKNOWN';
    }
}
exports.mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorToJSON = mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorToJSON;
var Mongodconfig44_OperationProfiling_Mode;
(function (Mongodconfig44_OperationProfiling_Mode) {
    Mongodconfig44_OperationProfiling_Mode[Mongodconfig44_OperationProfiling_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** OFF - The profiler is off and does not collect any data. */
    Mongodconfig44_OperationProfiling_Mode[Mongodconfig44_OperationProfiling_Mode["OFF"] = 1] = "OFF";
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    Mongodconfig44_OperationProfiling_Mode[Mongodconfig44_OperationProfiling_Mode["SLOW_OP"] = 2] = "SLOW_OP";
    /** ALL - The profiler collects data for all operations. */
    Mongodconfig44_OperationProfiling_Mode[Mongodconfig44_OperationProfiling_Mode["ALL"] = 3] = "ALL";
    Mongodconfig44_OperationProfiling_Mode[Mongodconfig44_OperationProfiling_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongodconfig44_OperationProfiling_Mode = exports.Mongodconfig44_OperationProfiling_Mode || (exports.Mongodconfig44_OperationProfiling_Mode = {}));
function mongodconfig44_OperationProfiling_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongodconfig44_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongodconfig44_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongodconfig44_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongodconfig44_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongodconfig44_OperationProfiling_Mode.UNRECOGNIZED;
    }
}
exports.mongodconfig44_OperationProfiling_ModeFromJSON = mongodconfig44_OperationProfiling_ModeFromJSON;
function mongodconfig44_OperationProfiling_ModeToJSON(object) {
    switch (object) {
        case Mongodconfig44_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongodconfig44_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongodconfig44_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongodconfig44_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}
exports.mongodconfig44_OperationProfiling_ModeToJSON = mongodconfig44_OperationProfiling_ModeToJSON;
var Mongocfgconfig44_OperationProfiling_Mode;
(function (Mongocfgconfig44_OperationProfiling_Mode) {
    Mongocfgconfig44_OperationProfiling_Mode[Mongocfgconfig44_OperationProfiling_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** OFF - The profiler is off and does not collect any data. */
    Mongocfgconfig44_OperationProfiling_Mode[Mongocfgconfig44_OperationProfiling_Mode["OFF"] = 1] = "OFF";
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    Mongocfgconfig44_OperationProfiling_Mode[Mongocfgconfig44_OperationProfiling_Mode["SLOW_OP"] = 2] = "SLOW_OP";
    /** ALL - The profiler collects data for all operations. */
    Mongocfgconfig44_OperationProfiling_Mode[Mongocfgconfig44_OperationProfiling_Mode["ALL"] = 3] = "ALL";
    Mongocfgconfig44_OperationProfiling_Mode[Mongocfgconfig44_OperationProfiling_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongocfgconfig44_OperationProfiling_Mode = exports.Mongocfgconfig44_OperationProfiling_Mode || (exports.Mongocfgconfig44_OperationProfiling_Mode = {}));
function mongocfgconfig44_OperationProfiling_ModeFromJSON(object) {
    switch (object) {
        case 0:
        case 'MODE_UNSPECIFIED':
            return Mongocfgconfig44_OperationProfiling_Mode.MODE_UNSPECIFIED;
        case 1:
        case 'OFF':
            return Mongocfgconfig44_OperationProfiling_Mode.OFF;
        case 2:
        case 'SLOW_OP':
            return Mongocfgconfig44_OperationProfiling_Mode.SLOW_OP;
        case 3:
        case 'ALL':
            return Mongocfgconfig44_OperationProfiling_Mode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Mongocfgconfig44_OperationProfiling_Mode.UNRECOGNIZED;
    }
}
exports.mongocfgconfig44_OperationProfiling_ModeFromJSON = mongocfgconfig44_OperationProfiling_ModeFromJSON;
function mongocfgconfig44_OperationProfiling_ModeToJSON(object) {
    switch (object) {
        case Mongocfgconfig44_OperationProfiling_Mode.MODE_UNSPECIFIED:
            return 'MODE_UNSPECIFIED';
        case Mongocfgconfig44_OperationProfiling_Mode.OFF:
            return 'OFF';
        case Mongocfgconfig44_OperationProfiling_Mode.SLOW_OP:
            return 'SLOW_OP';
        case Mongocfgconfig44_OperationProfiling_Mode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}
exports.mongocfgconfig44_OperationProfiling_ModeToJSON = mongocfgconfig44_OperationProfiling_ModeToJSON;
const baseMongodconfig44 = {};
exports.Mongodconfig44 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storage !== undefined) {
            exports.Mongodconfig44_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            exports.Mongodconfig44_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
        }
        if (message.net !== undefined) {
            exports.Mongodconfig44_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig44 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = exports.Mongodconfig44_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling =
                        exports.Mongodconfig44_OperationProfiling.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.net = exports.Mongodconfig44_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodconfig44 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = exports.Mongodconfig44_Storage.fromJSON(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                exports.Mongodconfig44_OperationProfiling.fromJSON(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongodconfig44_Network.fromJSON(object.net);
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
                ? exports.Mongodconfig44_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? exports.Mongodconfig44_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? exports.Mongodconfig44_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodconfig44 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = exports.Mongodconfig44_Storage.fromPartial(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                exports.Mongodconfig44_OperationProfiling.fromPartial(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongodconfig44_Network.fromPartial(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
};
const baseMongodconfig44_Storage = {};
exports.Mongodconfig44_Storage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.wiredTiger !== undefined) {
            exports.Mongodconfig44_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
        }
        if (message.journal !== undefined) {
            exports.Mongodconfig44_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig44_Storage,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        exports.Mongodconfig44_Storage_WiredTiger.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.journal = exports.Mongodconfig44_Storage_Journal.decode(reader, reader.uint32());
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
            ...baseMongodconfig44_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = exports.Mongodconfig44_Storage_WiredTiger.fromJSON(object.wiredTiger);
        }
        else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = exports.Mongodconfig44_Storage_Journal.fromJSON(object.journal);
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
                ? exports.Mongodconfig44_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? exports.Mongodconfig44_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig44_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = exports.Mongodconfig44_Storage_WiredTiger.fromPartial(object.wiredTiger);
        }
        else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = exports.Mongodconfig44_Storage_Journal.fromPartial(object.journal);
        }
        else {
            message.journal = undefined;
        }
        return message;
    },
};
const baseMongodconfig44_Storage_WiredTiger = {};
exports.Mongodconfig44_Storage_WiredTiger = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.engineConfig !== undefined) {
            exports.Mongodconfig44_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            exports.Mongodconfig44_Storage_WiredTiger_CollectionConfig.encode(message.collectionConfig, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig44_Storage_WiredTiger,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        exports.Mongodconfig44_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.collectionConfig =
                        exports.Mongodconfig44_Storage_WiredTiger_CollectionConfig.decode(reader, reader.uint32());
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
            ...baseMongodconfig44_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                exports.Mongodconfig44_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig);
        }
        else {
            message.engineConfig = undefined;
        }
        if (object.collectionConfig !== undefined &&
            object.collectionConfig !== null) {
            message.collectionConfig =
                exports.Mongodconfig44_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig);
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
                ? exports.Mongodconfig44_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? exports.Mongodconfig44_Storage_WiredTiger_CollectionConfig.toJSON(message.collectionConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig44_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                exports.Mongodconfig44_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig);
        }
        else {
            message.engineConfig = undefined;
        }
        if (object.collectionConfig !== undefined &&
            object.collectionConfig !== null) {
            message.collectionConfig =
                exports.Mongodconfig44_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig);
        }
        else {
            message.collectionConfig = undefined;
        }
        return message;
    },
};
const baseMongodconfig44_Storage_WiredTiger_EngineConfig = {};
exports.Mongodconfig44_Storage_WiredTiger_EngineConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cacheSizeGb !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.cacheSizeGb }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig44_Storage_WiredTiger_EngineConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cacheSizeGb = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
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
            ...baseMongodconfig44_Storage_WiredTiger_EngineConfig,
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
            ...baseMongodconfig44_Storage_WiredTiger_EngineConfig,
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
const baseMongodconfig44_Storage_WiredTiger_CollectionConfig = {
    blockCompressor: 0,
};
exports.Mongodconfig44_Storage_WiredTiger_CollectionConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockCompressor !== 0) {
            writer.uint32(8).int32(message.blockCompressor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig44_Storage_WiredTiger_CollectionConfig,
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
            ...baseMongodconfig44_Storage_WiredTiger_CollectionConfig,
        };
        if (object.blockCompressor !== undefined &&
            object.blockCompressor !== null) {
            message.blockCompressor =
                mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor);
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
                mongodconfig44_Storage_WiredTiger_CollectionConfig_CompressorToJSON(message.blockCompressor));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig44_Storage_WiredTiger_CollectionConfig,
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
const baseMongodconfig44_Storage_Journal = {};
exports.Mongodconfig44_Storage_Journal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.commitInterval !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.commitInterval }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig44_Storage_Journal,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitInterval = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
            ...baseMongodconfig44_Storage_Journal,
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
            ...baseMongodconfig44_Storage_Journal,
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
const baseMongodconfig44_OperationProfiling = { mode: 0 };
exports.Mongodconfig44_OperationProfiling = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.slowOpThreshold }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig44_OperationProfiling,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.slowOpThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
            ...baseMongodconfig44_OperationProfiling,
        };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongodconfig44_OperationProfiling_ModeFromJSON(object.mode);
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
            (obj.mode = mongodconfig44_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig44_OperationProfiling,
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
const baseMongodconfig44_Network = {};
exports.Mongodconfig44_Network = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxIncomingConnections }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig44_Network,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
            ...baseMongodconfig44_Network,
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
            ...baseMongodconfig44_Network,
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
const baseMongocfgconfig44 = {};
exports.Mongocfgconfig44 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storage !== undefined) {
            exports.Mongocfgconfig44_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            exports.Mongocfgconfig44_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
        }
        if (message.net !== undefined) {
            exports.Mongocfgconfig44_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig44 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = exports.Mongocfgconfig44_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling =
                        exports.Mongocfgconfig44_OperationProfiling.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.net = exports.Mongocfgconfig44_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongocfgconfig44 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = exports.Mongocfgconfig44_Storage.fromJSON(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                exports.Mongocfgconfig44_OperationProfiling.fromJSON(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongocfgconfig44_Network.fromJSON(object.net);
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
                ? exports.Mongocfgconfig44_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? exports.Mongocfgconfig44_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? exports.Mongocfgconfig44_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongocfgconfig44 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = exports.Mongocfgconfig44_Storage.fromPartial(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                exports.Mongocfgconfig44_OperationProfiling.fromPartial(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongocfgconfig44_Network.fromPartial(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
};
const baseMongocfgconfig44_Storage = {};
exports.Mongocfgconfig44_Storage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.wiredTiger !== undefined) {
            exports.Mongocfgconfig44_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig44_Storage,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        exports.Mongocfgconfig44_Storage_WiredTiger.decode(reader, reader.uint32());
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
            ...baseMongocfgconfig44_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = exports.Mongocfgconfig44_Storage_WiredTiger.fromJSON(object.wiredTiger);
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
                ? exports.Mongocfgconfig44_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongocfgconfig44_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger =
                exports.Mongocfgconfig44_Storage_WiredTiger.fromPartial(object.wiredTiger);
        }
        else {
            message.wiredTiger = undefined;
        }
        return message;
    },
};
const baseMongocfgconfig44_Storage_WiredTiger = {};
exports.Mongocfgconfig44_Storage_WiredTiger = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.engineConfig !== undefined) {
            exports.Mongocfgconfig44_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig44_Storage_WiredTiger,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        exports.Mongocfgconfig44_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
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
            ...baseMongocfgconfig44_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                exports.Mongocfgconfig44_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig);
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
                ? exports.Mongocfgconfig44_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongocfgconfig44_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                exports.Mongocfgconfig44_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig);
        }
        else {
            message.engineConfig = undefined;
        }
        return message;
    },
};
const baseMongocfgconfig44_Storage_WiredTiger_EngineConfig = {};
exports.Mongocfgconfig44_Storage_WiredTiger_EngineConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cacheSizeGb !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.cacheSizeGb }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig44_Storage_WiredTiger_EngineConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cacheSizeGb = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
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
            ...baseMongocfgconfig44_Storage_WiredTiger_EngineConfig,
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
            ...baseMongocfgconfig44_Storage_WiredTiger_EngineConfig,
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
const baseMongocfgconfig44_OperationProfiling = { mode: 0 };
exports.Mongocfgconfig44_OperationProfiling = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.slowOpThreshold }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig44_OperationProfiling,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.slowOpThreshold = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
            ...baseMongocfgconfig44_OperationProfiling,
        };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongocfgconfig44_OperationProfiling_ModeFromJSON(object.mode);
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
            (obj.mode = mongocfgconfig44_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongocfgconfig44_OperationProfiling,
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
const baseMongocfgconfig44_Network = {};
exports.Mongocfgconfig44_Network = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxIncomingConnections }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig44_Network,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
            ...baseMongocfgconfig44_Network,
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
            ...baseMongocfgconfig44_Network,
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
const baseMongosconfig44 = {};
exports.Mongosconfig44 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.net !== undefined) {
            exports.Mongosconfig44_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig44 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.net = exports.Mongosconfig44_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongosconfig44 };
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongosconfig44_Network.fromJSON(object.net);
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
                ? exports.Mongosconfig44_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongosconfig44 };
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongosconfig44_Network.fromPartial(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
};
const baseMongosconfig44_Network = {};
exports.Mongosconfig44_Network = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxIncomingConnections }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongosconfig44_Network,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxIncomingConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
            ...baseMongosconfig44_Network,
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
            ...baseMongosconfig44_Network,
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
const baseMongodconfigset44 = {};
exports.Mongodconfigset44 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongodconfig44.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongodconfig44.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongodconfig44.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfigset44 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongodconfig44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongodconfig44.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongodconfig44.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodconfigset44 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongodconfig44.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongodconfig44.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongodconfig44.fromJSON(object.defaultConfig);
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
                ? exports.Mongodconfig44.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongodconfig44.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongodconfig44.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodconfigset44 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongodconfig44.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongodconfig44.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongodconfig44.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
const baseMongocfgconfigset44 = {};
exports.Mongocfgconfigset44 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongocfgconfig44.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongocfgconfig44.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongocfgconfig44.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfigset44 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongocfgconfig44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongocfgconfig44.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongocfgconfig44.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongocfgconfigset44 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongocfgconfig44.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongocfgconfig44.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongocfgconfig44.fromJSON(object.defaultConfig);
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
                ? exports.Mongocfgconfig44.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongocfgconfig44.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongocfgconfig44.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongocfgconfigset44 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongocfgconfig44.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongocfgconfig44.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongocfgconfig44.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
const baseMongosconfigset44 = {};
exports.Mongosconfigset44 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongosconfig44.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongosconfig44.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongosconfig44.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfigset44 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongosconfig44.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongosconfig44.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongosconfig44.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongosconfigset44 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongosconfig44.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongosconfig44.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongosconfig44.fromJSON(object.defaultConfig);
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
                ? exports.Mongosconfig44.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongosconfig44.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongosconfig44.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongosconfigset44 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongosconfig44.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongosconfig44.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongosconfig44.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
