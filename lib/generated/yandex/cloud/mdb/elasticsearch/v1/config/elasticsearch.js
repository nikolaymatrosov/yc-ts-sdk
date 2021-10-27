"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticsearchConfigSet7 = exports.ElasticsearchConfig7 = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.elasticsearch.v1.config';
const baseElasticsearchConfig7 = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7',
    fielddataCacheSize: '',
};
exports.ElasticsearchConfig7 = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfig7',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxClauseCount !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxClauseCount,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fielddataCacheSize !== '') {
            writer.uint32(34).string(message.fielddataCacheSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseElasticsearchConfig7 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.maxClauseCount = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fielddataCacheSize = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseElasticsearchConfig7 };
        if (object.maxClauseCount !== undefined &&
            object.maxClauseCount !== null) {
            message.maxClauseCount = Number(object.maxClauseCount);
        }
        else {
            message.maxClauseCount = undefined;
        }
        if (object.fielddataCacheSize !== undefined &&
            object.fielddataCacheSize !== null) {
            message.fielddataCacheSize = String(object.fielddataCacheSize);
        }
        else {
            message.fielddataCacheSize = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxClauseCount !== undefined &&
            (obj.maxClauseCount = message.maxClauseCount);
        message.fielddataCacheSize !== undefined &&
            (obj.fielddataCacheSize = message.fielddataCacheSize);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseElasticsearchConfig7 };
        if (object.maxClauseCount !== undefined &&
            object.maxClauseCount !== null) {
            message.maxClauseCount = object.maxClauseCount;
        }
        else {
            message.maxClauseCount = undefined;
        }
        if (object.fielddataCacheSize !== undefined &&
            object.fielddataCacheSize !== null) {
            message.fielddataCacheSize = object.fielddataCacheSize;
        }
        else {
            message.fielddataCacheSize = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ElasticsearchConfig7.$type, exports.ElasticsearchConfig7);
const baseElasticsearchConfigSet7 = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7',
};
exports.ElasticsearchConfigSet7 = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.config.ElasticsearchConfigSet7',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.ElasticsearchConfig7.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.ElasticsearchConfig7.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.ElasticsearchConfig7.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseElasticsearchConfigSet7,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.ElasticsearchConfig7.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.ElasticsearchConfig7.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.ElasticsearchConfig7.decode(reader, reader.uint32());
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
            ...baseElasticsearchConfigSet7,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.ElasticsearchConfig7.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.ElasticsearchConfig7.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.ElasticsearchConfig7.fromJSON(object.defaultConfig);
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
                ? exports.ElasticsearchConfig7.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.ElasticsearchConfig7.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.ElasticsearchConfig7.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseElasticsearchConfigSet7,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.ElasticsearchConfig7.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.ElasticsearchConfig7.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.ElasticsearchConfig7.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ElasticsearchConfigSet7.$type, exports.ElasticsearchConfigSet7);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
