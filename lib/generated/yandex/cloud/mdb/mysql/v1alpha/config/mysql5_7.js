"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mysqlconfigset57 = exports.Mysqlconfig57 = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.mysql.v1alpha.config';
const baseMysqlconfig57 = {};
exports.Mysqlconfig57 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.innodbBufferPoolSize !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.innodbBufferPoolSize }, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxConnections }, writer.uint32(18).fork()).ldelim();
        }
        if (message.longQueryTime !== undefined) {
            wrappers_1.DoubleValue.encode({ value: message.longQueryTime }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMysqlconfig57 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.innodbBufferPoolSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.longQueryTime = wrappers_1.DoubleValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMysqlconfig57 };
        if (object.innodbBufferPoolSize !== undefined &&
            object.innodbBufferPoolSize !== null) {
            message.innodbBufferPoolSize = Number(object.innodbBufferPoolSize);
        }
        else {
            message.innodbBufferPoolSize = undefined;
        }
        if (object.maxConnections !== undefined &&
            object.maxConnections !== null) {
            message.maxConnections = Number(object.maxConnections);
        }
        else {
            message.maxConnections = undefined;
        }
        if (object.longQueryTime !== undefined &&
            object.longQueryTime !== null) {
            message.longQueryTime = Number(object.longQueryTime);
        }
        else {
            message.longQueryTime = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.innodbBufferPoolSize !== undefined &&
            (obj.innodbBufferPoolSize = message.innodbBufferPoolSize);
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.longQueryTime !== undefined &&
            (obj.longQueryTime = message.longQueryTime);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMysqlconfig57 };
        if (object.innodbBufferPoolSize !== undefined &&
            object.innodbBufferPoolSize !== null) {
            message.innodbBufferPoolSize = object.innodbBufferPoolSize;
        }
        else {
            message.innodbBufferPoolSize = undefined;
        }
        if (object.maxConnections !== undefined &&
            object.maxConnections !== null) {
            message.maxConnections = object.maxConnections;
        }
        else {
            message.maxConnections = undefined;
        }
        if (object.longQueryTime !== undefined &&
            object.longQueryTime !== null) {
            message.longQueryTime = object.longQueryTime;
        }
        else {
            message.longQueryTime = undefined;
        }
        return message;
    },
};
const baseMysqlconfigset57 = {};
exports.Mysqlconfigset57 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.Mysqlconfig57.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.Mysqlconfig57.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.Mysqlconfig57.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMysqlconfigset57 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.Mysqlconfig57.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.Mysqlconfig57.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.Mysqlconfig57.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMysqlconfigset57 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mysqlconfig57.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mysqlconfig57.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mysqlconfig57.fromJSON(object.defaultConfig);
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
                ? exports.Mysqlconfig57.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.Mysqlconfig57.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.Mysqlconfig57.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMysqlconfigset57 };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.Mysqlconfig57.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.Mysqlconfig57.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.Mysqlconfig57.fromPartial(object.defaultConfig);
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
