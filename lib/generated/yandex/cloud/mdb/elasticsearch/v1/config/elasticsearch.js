/* eslint-disable */
import { Int64Value } from '../../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.elasticsearch.v1.config';
const baseElasticsearchConfig7 = { fielddataCacheSize: '' };
export const ElasticsearchConfig7 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxClauseCount !== undefined) {
            Int64Value.encode({ value: message.maxClauseCount }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fielddataCacheSize !== '') {
            writer.uint32(34).string(message.fielddataCacheSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseElasticsearchConfig7 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.maxClauseCount = Int64Value.decode(reader, reader.uint32()).value;
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
const baseElasticsearchConfigSet7 = {};
export const ElasticsearchConfigSet7 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            ElasticsearchConfig7.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            ElasticsearchConfig7.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            ElasticsearchConfig7.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseElasticsearchConfigSet7,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = ElasticsearchConfig7.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = ElasticsearchConfig7.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = ElasticsearchConfig7.decode(reader, reader.uint32());
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
            message.effectiveConfig = ElasticsearchConfig7.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = ElasticsearchConfig7.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = ElasticsearchConfig7.fromJSON(object.defaultConfig);
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
                ? ElasticsearchConfig7.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? ElasticsearchConfig7.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? ElasticsearchConfig7.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseElasticsearchConfigSet7,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = ElasticsearchConfig7.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = ElasticsearchConfig7.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = ElasticsearchConfig7.fromPartial(object.defaultConfig);
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
