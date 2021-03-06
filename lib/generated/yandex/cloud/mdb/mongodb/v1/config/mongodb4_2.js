"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongosconfigset42 = exports.Mongocfgconfigset42 = exports.Mongodconfigset42 = exports.Mongosconfig42_Network = exports.Mongosconfig42 = exports.Mongocfgconfig42_Network = exports.Mongocfgconfig42_OperationProfiling = exports.Mongocfgconfig42_Storage_WiredTiger_EngineConfig = exports.Mongocfgconfig42_Storage_WiredTiger = exports.Mongocfgconfig42_Storage = exports.Mongocfgconfig42 = exports.Mongodconfig42_Network = exports.Mongodconfig42_OperationProfiling = exports.Mongodconfig42_Storage_Journal = exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig = exports.Mongodconfig42_Storage_WiredTiger_EngineConfig = exports.Mongodconfig42_Storage_WiredTiger = exports.Mongodconfig42_Storage = exports.Mongodconfig42 = exports.mongocfgconfig42_OperationProfiling_ModeToJSON = exports.mongocfgconfig42_OperationProfiling_ModeFromJSON = exports.Mongocfgconfig42_OperationProfiling_Mode = exports.mongodconfig42_OperationProfiling_ModeToJSON = exports.mongodconfig42_OperationProfiling_ModeFromJSON = exports.Mongodconfig42_OperationProfiling_Mode = exports.mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON = exports.mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON = exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.mongodb.v1.config';
var Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor;
(function (Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor) {
    Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor["COMPRESSOR_UNSPECIFIED"] = 0] = "COMPRESSOR_UNSPECIFIED";
    /** NONE - No compression. */
    Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor["NONE"] = 1] = "NONE";
    /** SNAPPY - The [Snappy](https://docs.mongodb.com/v4.2/reference/glossary/#term-snappy) compression. */
    Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor["SNAPPY"] = 2] = "SNAPPY";
    /** ZLIB - The [zlib](https://docs.mongodb.com/v4.2/reference/glossary/#term-zlib) compression. */
    Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor["ZLIB"] = 3] = "ZLIB";
    Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor[Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor = exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor || (exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig_Compressor = {}));
function mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object) {
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
exports.mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON = mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON;
function mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON(object) {
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
exports.mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON = mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON;
var Mongodconfig42_OperationProfiling_Mode;
(function (Mongodconfig42_OperationProfiling_Mode) {
    Mongodconfig42_OperationProfiling_Mode[Mongodconfig42_OperationProfiling_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** OFF - The profiler is off and does not collect any data. */
    Mongodconfig42_OperationProfiling_Mode[Mongodconfig42_OperationProfiling_Mode["OFF"] = 1] = "OFF";
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    Mongodconfig42_OperationProfiling_Mode[Mongodconfig42_OperationProfiling_Mode["SLOW_OP"] = 2] = "SLOW_OP";
    /** ALL - The profiler collects data for all operations. */
    Mongodconfig42_OperationProfiling_Mode[Mongodconfig42_OperationProfiling_Mode["ALL"] = 3] = "ALL";
    Mongodconfig42_OperationProfiling_Mode[Mongodconfig42_OperationProfiling_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongodconfig42_OperationProfiling_Mode = exports.Mongodconfig42_OperationProfiling_Mode || (exports.Mongodconfig42_OperationProfiling_Mode = {}));
function mongodconfig42_OperationProfiling_ModeFromJSON(object) {
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
exports.mongodconfig42_OperationProfiling_ModeFromJSON = mongodconfig42_OperationProfiling_ModeFromJSON;
function mongodconfig42_OperationProfiling_ModeToJSON(object) {
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
exports.mongodconfig42_OperationProfiling_ModeToJSON = mongodconfig42_OperationProfiling_ModeToJSON;
var Mongocfgconfig42_OperationProfiling_Mode;
(function (Mongocfgconfig42_OperationProfiling_Mode) {
    Mongocfgconfig42_OperationProfiling_Mode[Mongocfgconfig42_OperationProfiling_Mode["MODE_UNSPECIFIED"] = 0] = "MODE_UNSPECIFIED";
    /** OFF - The profiler is off and does not collect any data. */
    Mongocfgconfig42_OperationProfiling_Mode[Mongocfgconfig42_OperationProfiling_Mode["OFF"] = 1] = "OFF";
    /** SLOW_OP - The profiler collects data for operations that take longer than the value of [slow_op_threshold]. */
    Mongocfgconfig42_OperationProfiling_Mode[Mongocfgconfig42_OperationProfiling_Mode["SLOW_OP"] = 2] = "SLOW_OP";
    /** ALL - The profiler collects data for all operations. */
    Mongocfgconfig42_OperationProfiling_Mode[Mongocfgconfig42_OperationProfiling_Mode["ALL"] = 3] = "ALL";
    Mongocfgconfig42_OperationProfiling_Mode[Mongocfgconfig42_OperationProfiling_Mode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Mongocfgconfig42_OperationProfiling_Mode = exports.Mongocfgconfig42_OperationProfiling_Mode || (exports.Mongocfgconfig42_OperationProfiling_Mode = {}));
function mongocfgconfig42_OperationProfiling_ModeFromJSON(object) {
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
exports.mongocfgconfig42_OperationProfiling_ModeFromJSON = mongocfgconfig42_OperationProfiling_ModeFromJSON;
function mongocfgconfig42_OperationProfiling_ModeToJSON(object) {
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
exports.mongocfgconfig42_OperationProfiling_ModeToJSON = mongocfgconfig42_OperationProfiling_ModeToJSON;
const baseMongodconfig42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2',
};
exports.Mongodconfig42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storage !== undefined) {
            exports.Mongodconfig42_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            exports.Mongodconfig42_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
        }
        if (message.net !== undefined) {
            exports.Mongodconfig42_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfig42 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = exports.Mongodconfig42_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling =
                        exports.Mongodconfig42_OperationProfiling.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.net = exports.Mongodconfig42_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodconfig42 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = exports.Mongodconfig42_Storage.fromJSON(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                exports.Mongodconfig42_OperationProfiling.fromJSON(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongodconfig42_Network.fromJSON(object.net);
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
                ? exports.Mongodconfig42_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? exports.Mongodconfig42_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? exports.Mongodconfig42_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodconfig42 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = exports.Mongodconfig42_Storage.fromPartial(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                exports.Mongodconfig42_OperationProfiling.fromPartial(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongodconfig42_Network.fromPartial(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig42.$type, exports.Mongodconfig42);
const baseMongodconfig42_Storage = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage',
};
exports.Mongodconfig42_Storage = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.wiredTiger !== undefined) {
            exports.Mongodconfig42_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
        }
        if (message.journal !== undefined) {
            exports.Mongodconfig42_Storage_Journal.encode(message.journal, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_Storage,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        exports.Mongodconfig42_Storage_WiredTiger.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.journal = exports.Mongodconfig42_Storage_Journal.decode(reader, reader.uint32());
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
            ...baseMongodconfig42_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = exports.Mongodconfig42_Storage_WiredTiger.fromJSON(object.wiredTiger);
        }
        else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = exports.Mongodconfig42_Storage_Journal.fromJSON(object.journal);
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
                ? exports.Mongodconfig42_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        message.journal !== undefined &&
            (obj.journal = message.journal
                ? exports.Mongodconfig42_Storage_Journal.toJSON(message.journal)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig42_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = exports.Mongodconfig42_Storage_WiredTiger.fromPartial(object.wiredTiger);
        }
        else {
            message.wiredTiger = undefined;
        }
        if (object.journal !== undefined && object.journal !== null) {
            message.journal = exports.Mongodconfig42_Storage_Journal.fromPartial(object.journal);
        }
        else {
            message.journal = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig42_Storage.$type, exports.Mongodconfig42_Storage);
const baseMongodconfig42_Storage_WiredTiger = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger',
};
exports.Mongodconfig42_Storage_WiredTiger = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.engineConfig !== undefined) {
            exports.Mongodconfig42_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.collectionConfig !== undefined) {
            exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig.encode(message.collectionConfig, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        exports.Mongodconfig42_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.collectionConfig =
                        exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig.decode(reader, reader.uint32());
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
            ...baseMongodconfig42_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                exports.Mongodconfig42_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig);
        }
        else {
            message.engineConfig = undefined;
        }
        if (object.collectionConfig !== undefined &&
            object.collectionConfig !== null) {
            message.collectionConfig =
                exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig.fromJSON(object.collectionConfig);
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
                ? exports.Mongodconfig42_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        message.collectionConfig !== undefined &&
            (obj.collectionConfig = message.collectionConfig
                ? exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig.toJSON(message.collectionConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                exports.Mongodconfig42_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig);
        }
        else {
            message.engineConfig = undefined;
        }
        if (object.collectionConfig !== undefined &&
            object.collectionConfig !== null) {
            message.collectionConfig =
                exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig.fromPartial(object.collectionConfig);
        }
        else {
            message.collectionConfig = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig42_Storage_WiredTiger.$type, exports.Mongodconfig42_Storage_WiredTiger);
const baseMongodconfig42_Storage_WiredTiger_EngineConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.EngineConfig',
};
exports.Mongodconfig42_Storage_WiredTiger_EngineConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.EngineConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cacheSizeGb !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: 'google.protobuf.DoubleValue',
                value: message.cacheSizeGb,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger_EngineConfig,
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
            ...baseMongodconfig42_Storage_WiredTiger_EngineConfig,
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
            ...baseMongodconfig42_Storage_WiredTiger_EngineConfig,
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
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig42_Storage_WiredTiger_EngineConfig.$type, exports.Mongodconfig42_Storage_WiredTiger_EngineConfig);
const baseMongodconfig42_Storage_WiredTiger_CollectionConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.CollectionConfig',
    blockCompressor: 0,
};
exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.WiredTiger.CollectionConfig',
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
            ...baseMongodconfig42_Storage_WiredTiger_CollectionConfig,
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
            ...baseMongodconfig42_Storage_WiredTiger_CollectionConfig,
        };
        if (object.blockCompressor !== undefined &&
            object.blockCompressor !== null) {
            message.blockCompressor =
                mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorFromJSON(object.blockCompressor);
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
                mongodconfig42_Storage_WiredTiger_CollectionConfig_CompressorToJSON(message.blockCompressor));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig42_Storage_WiredTiger_CollectionConfig,
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
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig.$type, exports.Mongodconfig42_Storage_WiredTiger_CollectionConfig);
const baseMongodconfig42_Storage_Journal = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.Journal',
};
exports.Mongodconfig42_Storage_Journal = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Storage.Journal',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.commitInterval !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.commitInterval,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_Storage_Journal,
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
            ...baseMongodconfig42_Storage_Journal,
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
            ...baseMongodconfig42_Storage_Journal,
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
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig42_Storage_Journal.$type, exports.Mongodconfig42_Storage_Journal);
const baseMongodconfig42_OperationProfiling = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.OperationProfiling',
    mode: 0,
};
exports.Mongodconfig42_OperationProfiling = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.OperationProfiling',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.slowOpThreshold,
            }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_OperationProfiling,
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
            ...baseMongodconfig42_OperationProfiling,
        };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongodconfig42_OperationProfiling_ModeFromJSON(object.mode);
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
            (obj.mode = mongodconfig42_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongodconfig42_OperationProfiling,
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
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig42_OperationProfiling.$type, exports.Mongodconfig42_OperationProfiling);
const baseMongodconfig42_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network',
};
exports.Mongodconfig42_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfig4_2.Network',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxIncomingConnections,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongodconfig42_Network,
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
            ...baseMongodconfig42_Network,
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
            ...baseMongodconfig42_Network,
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
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfig42_Network.$type, exports.Mongodconfig42_Network);
const baseMongocfgconfig42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2',
};
exports.Mongocfgconfig42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.storage !== undefined) {
            exports.Mongocfgconfig42_Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        if (message.operationProfiling !== undefined) {
            exports.Mongocfgconfig42_OperationProfiling.encode(message.operationProfiling, writer.uint32(18).fork()).ldelim();
        }
        if (message.net !== undefined) {
            exports.Mongocfgconfig42_Network.encode(message.net, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfig42 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = exports.Mongocfgconfig42_Storage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.operationProfiling =
                        exports.Mongocfgconfig42_OperationProfiling.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.net = exports.Mongocfgconfig42_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongocfgconfig42 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = exports.Mongocfgconfig42_Storage.fromJSON(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                exports.Mongocfgconfig42_OperationProfiling.fromJSON(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongocfgconfig42_Network.fromJSON(object.net);
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
                ? exports.Mongocfgconfig42_Storage.toJSON(message.storage)
                : undefined);
        message.operationProfiling !== undefined &&
            (obj.operationProfiling = message.operationProfiling
                ? exports.Mongocfgconfig42_OperationProfiling.toJSON(message.operationProfiling)
                : undefined);
        message.net !== undefined &&
            (obj.net = message.net
                ? exports.Mongocfgconfig42_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongocfgconfig42 };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = exports.Mongocfgconfig42_Storage.fromPartial(object.storage);
        }
        else {
            message.storage = undefined;
        }
        if (object.operationProfiling !== undefined &&
            object.operationProfiling !== null) {
            message.operationProfiling =
                exports.Mongocfgconfig42_OperationProfiling.fromPartial(object.operationProfiling);
        }
        else {
            message.operationProfiling = undefined;
        }
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongocfgconfig42_Network.fromPartial(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig42.$type, exports.Mongocfgconfig42);
const baseMongocfgconfig42_Storage = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage',
};
exports.Mongocfgconfig42_Storage = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.wiredTiger !== undefined) {
            exports.Mongocfgconfig42_Storage_WiredTiger.encode(message.wiredTiger, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig42_Storage,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wiredTiger =
                        exports.Mongocfgconfig42_Storage_WiredTiger.decode(reader, reader.uint32());
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
            ...baseMongocfgconfig42_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger = exports.Mongocfgconfig42_Storage_WiredTiger.fromJSON(object.wiredTiger);
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
                ? exports.Mongocfgconfig42_Storage_WiredTiger.toJSON(message.wiredTiger)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongocfgconfig42_Storage,
        };
        if (object.wiredTiger !== undefined && object.wiredTiger !== null) {
            message.wiredTiger =
                exports.Mongocfgconfig42_Storage_WiredTiger.fromPartial(object.wiredTiger);
        }
        else {
            message.wiredTiger = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig42_Storage.$type, exports.Mongocfgconfig42_Storage);
const baseMongocfgconfig42_Storage_WiredTiger = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger',
};
exports.Mongocfgconfig42_Storage_WiredTiger = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.engineConfig !== undefined) {
            exports.Mongocfgconfig42_Storage_WiredTiger_EngineConfig.encode(message.engineConfig, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig42_Storage_WiredTiger,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.engineConfig =
                        exports.Mongocfgconfig42_Storage_WiredTiger_EngineConfig.decode(reader, reader.uint32());
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
            ...baseMongocfgconfig42_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                exports.Mongocfgconfig42_Storage_WiredTiger_EngineConfig.fromJSON(object.engineConfig);
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
                ? exports.Mongocfgconfig42_Storage_WiredTiger_EngineConfig.toJSON(message.engineConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongocfgconfig42_Storage_WiredTiger,
        };
        if (object.engineConfig !== undefined && object.engineConfig !== null) {
            message.engineConfig =
                exports.Mongocfgconfig42_Storage_WiredTiger_EngineConfig.fromPartial(object.engineConfig);
        }
        else {
            message.engineConfig = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig42_Storage_WiredTiger.$type, exports.Mongocfgconfig42_Storage_WiredTiger);
const baseMongocfgconfig42_Storage_WiredTiger_EngineConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger.EngineConfig',
};
exports.Mongocfgconfig42_Storage_WiredTiger_EngineConfig = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Storage.WiredTiger.EngineConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cacheSizeGb !== undefined) {
            wrappers_1.DoubleValue.encode({
                $type: 'google.protobuf.DoubleValue',
                value: message.cacheSizeGb,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig42_Storage_WiredTiger_EngineConfig,
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
            ...baseMongocfgconfig42_Storage_WiredTiger_EngineConfig,
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
            ...baseMongocfgconfig42_Storage_WiredTiger_EngineConfig,
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
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig42_Storage_WiredTiger_EngineConfig.$type, exports.Mongocfgconfig42_Storage_WiredTiger_EngineConfig);
const baseMongocfgconfig42_OperationProfiling = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.OperationProfiling',
    mode: 0,
};
exports.Mongocfgconfig42_OperationProfiling = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.OperationProfiling',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.slowOpThreshold !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.slowOpThreshold,
            }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig42_OperationProfiling,
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
            ...baseMongocfgconfig42_OperationProfiling,
        };
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = mongocfgconfig42_OperationProfiling_ModeFromJSON(object.mode);
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
            (obj.mode = mongocfgconfig42_OperationProfiling_ModeToJSON(message.mode));
        message.slowOpThreshold !== undefined &&
            (obj.slowOpThreshold = message.slowOpThreshold);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMongocfgconfig42_OperationProfiling,
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
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig42_OperationProfiling.$type, exports.Mongocfgconfig42_OperationProfiling);
const baseMongocfgconfig42_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Network',
};
exports.Mongocfgconfig42_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfig4_2.Network',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxIncomingConnections,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongocfgconfig42_Network,
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
            ...baseMongocfgconfig42_Network,
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
            ...baseMongocfgconfig42_Network,
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
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfig42_Network.$type, exports.Mongocfgconfig42_Network);
const baseMongosconfig42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2',
};
exports.Mongosconfig42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.net !== undefined) {
            exports.Mongosconfig42_Network.encode(message.net, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfig42 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.net = exports.Mongosconfig42_Network.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongosconfig42 };
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongosconfig42_Network.fromJSON(object.net);
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
                ? exports.Mongosconfig42_Network.toJSON(message.net)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongosconfig42 };
        if (object.net !== undefined && object.net !== null) {
            message.net = exports.Mongosconfig42_Network.fromPartial(object.net);
        }
        else {
            message.net = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongosconfig42.$type, exports.Mongosconfig42);
const baseMongosconfig42_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network',
};
exports.Mongosconfig42_Network = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfig4_2.Network',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxIncomingConnections !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxIncomingConnections,
            }, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMongosconfig42_Network,
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
            ...baseMongosconfig42_Network,
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
            ...baseMongosconfig42_Network,
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
typeRegistry_1.messageTypeRegistry.set(exports.Mongosconfig42_Network.$type, exports.Mongosconfig42_Network);
const baseMongodconfigset42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2',
};
exports.Mongodconfigset42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongodConfigSet4_2',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongodconfig42.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongodconfig42.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongodconfig42.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongodconfigset42 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongodconfig42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongodconfig42.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongodconfig42.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongodconfigset42 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongodconfig42.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongodconfig42.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongodconfig42.fromJSON(object.defaultConfig);
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
                ? exports.Mongodconfig42.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongodconfig42.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongodconfig42.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongodconfigset42 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongodconfig42.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongodconfig42.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongodconfig42.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongodconfigset42.$type, exports.Mongodconfigset42);
const baseMongocfgconfigset42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2',
};
exports.Mongocfgconfigset42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongoCfgConfigSet4_2',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongocfgconfig42.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongocfgconfig42.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongocfgconfig42.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongocfgconfigset42 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongocfgconfig42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongocfgconfig42.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongocfgconfig42.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongocfgconfigset42 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongocfgconfig42.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongocfgconfig42.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongocfgconfig42.fromJSON(object.defaultConfig);
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
                ? exports.Mongocfgconfig42.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongocfgconfig42.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongocfgconfig42.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongocfgconfigset42 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongocfgconfig42.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongocfgconfig42.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongocfgconfig42.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongocfgconfigset42.$type, exports.Mongocfgconfigset42);
const baseMongosconfigset42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2',
};
exports.Mongosconfigset42 = {
    $type: 'yandex.cloud.mdb.mongodb.v1.config.MongosConfigSet4_2',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mongosconfig42.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mongosconfig42.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mongosconfig42.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMongosconfigset42 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mongosconfig42.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mongosconfig42.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mongosconfig42.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMongosconfigset42 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongosconfig42.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongosconfig42.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongosconfig42.fromJSON(object.defaultConfig);
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
                ? exports.Mongosconfig42.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mongosconfig42.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mongosconfig42.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMongosconfigset42 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mongosconfig42.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mongosconfig42.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mongosconfig42.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Mongosconfigset42.$type, exports.Mongosconfigset42);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
