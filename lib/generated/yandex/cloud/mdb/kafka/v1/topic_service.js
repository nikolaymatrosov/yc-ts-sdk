"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicServiceClient = exports.TopicServiceService = exports.DeleteTopicMetadata = exports.DeleteTopicRequest = exports.UpdateTopicMetadata = exports.UpdateTopicRequest = exports.CreateTopicMetadata = exports.CreateTopicRequest = exports.ListTopicsResponse = exports.ListTopicsRequest = exports.GetTopicRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const topic_1 = require("../../../../../yandex/cloud/mdb/kafka/v1/topic");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.kafka.v1';
const baseGetTopicRequest = { clusterId: '', topicName: '' };
exports.GetTopicRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetTopicRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetTopicRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        }
        else {
            message.topicName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetTopicRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        }
        else {
            message.topicName = '';
        }
        return message;
    },
};
const baseListTopicsRequest = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListTopicsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTopicsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListTopicsRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListTopicsRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
};
const baseListTopicsResponse = { nextPageToken: '' };
exports.ListTopicsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.topics) {
            topic_1.Topic.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListTopicsResponse };
        message.topics = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.topics.push(topic_1.Topic.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListTopicsResponse };
        message.topics = [];
        if (object.topics !== undefined && object.topics !== null) {
            for (const e of object.topics) {
                message.topics.push(topic_1.Topic.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.topics) {
            obj.topics = message.topics.map((e) => e ? topic_1.Topic.toJSON(e) : undefined);
        }
        else {
            obj.topics = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListTopicsResponse };
        message.topics = [];
        if (object.topics !== undefined && object.topics !== null) {
            for (const e of object.topics) {
                message.topics.push(topic_1.Topic.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
const baseCreateTopicRequest = { clusterId: '' };
exports.CreateTopicRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicSpec !== undefined) {
            topic_1.TopicSpec.encode(message.topicSpec, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateTopicRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicSpec = topic_1.TopicSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateTopicRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.topicSpec !== undefined && object.topicSpec !== null) {
            message.topicSpec = topic_1.TopicSpec.fromJSON(object.topicSpec);
        }
        else {
            message.topicSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicSpec !== undefined &&
            (obj.topicSpec = message.topicSpec
                ? topic_1.TopicSpec.toJSON(message.topicSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateTopicRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.topicSpec !== undefined && object.topicSpec !== null) {
            message.topicSpec = topic_1.TopicSpec.fromPartial(object.topicSpec);
        }
        else {
            message.topicSpec = undefined;
        }
        return message;
    },
};
const baseCreateTopicMetadata = { clusterId: '', topicName: '' };
exports.CreateTopicMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateTopicMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateTopicMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        }
        else {
            message.topicName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateTopicMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        }
        else {
            message.topicName = '';
        }
        return message;
    },
};
const baseUpdateTopicRequest = { clusterId: '', topicName: '' };
exports.UpdateTopicRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(26).fork()).ldelim();
        }
        if (message.topicSpec !== undefined) {
            topic_1.TopicSpec.encode(message.topicSpec, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateTopicRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                case 3:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.topicSpec = topic_1.TopicSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateTopicRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        }
        else {
            message.topicName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.topicSpec !== undefined && object.topicSpec !== null) {
            message.topicSpec = topic_1.TopicSpec.fromJSON(object.topicSpec);
        }
        else {
            message.topicSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.topicSpec !== undefined &&
            (obj.topicSpec = message.topicSpec
                ? topic_1.TopicSpec.toJSON(message.topicSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateTopicRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        }
        else {
            message.topicName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
        }
        if (object.topicSpec !== undefined && object.topicSpec !== null) {
            message.topicSpec = topic_1.TopicSpec.fromPartial(object.topicSpec);
        }
        else {
            message.topicSpec = undefined;
        }
        return message;
    },
};
const baseUpdateTopicMetadata = { clusterId: '', topicName: '' };
exports.UpdateTopicMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateTopicMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateTopicMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        }
        else {
            message.topicName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUpdateTopicMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        }
        else {
            message.topicName = '';
        }
        return message;
    },
};
const baseDeleteTopicRequest = { clusterId: '', topicName: '' };
exports.DeleteTopicRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteTopicRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteTopicRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        }
        else {
            message.topicName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteTopicRequest };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        }
        else {
            message.topicName = '';
        }
        return message;
    },
};
const baseDeleteTopicMetadata = { clusterId: '', topicName: '' };
exports.DeleteTopicMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.topicName !== '') {
            writer.uint32(18).string(message.topicName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteTopicMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.topicName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDeleteTopicMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = String(object.topicName);
        }
        else {
            message.topicName = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.topicName !== undefined && (obj.topicName = message.topicName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDeleteTopicMetadata };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.topicName !== undefined && object.topicName !== null) {
            message.topicName = object.topicName;
        }
        else {
            message.topicName = '';
        }
        return message;
    },
};
/** A set of methods for managing Kafka topics. */
exports.TopicServiceService = {
    /**
     * Returns the specified Kafka topic.
     *
     * To get the list of available Kafka topics, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.kafka.v1.TopicService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetTopicRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetTopicRequest.decode(value),
        responseSerialize: (value) => Buffer.from(topic_1.Topic.encode(value).finish()),
        responseDeserialize: (value) => topic_1.Topic.decode(value),
    },
    /** Retrieves the list of Kafka topics in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.kafka.v1.TopicService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTopicsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTopicsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTopicsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTopicsResponse.decode(value),
    },
    /** Creates a new Kafka topic in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.kafka.v1.TopicService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateTopicRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateTopicRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified Kafka topic. */
    update: {
        path: '/yandex.cloud.mdb.kafka.v1.TopicService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateTopicRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateTopicRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified Kafka topic. */
    delete: {
        path: '/yandex.cloud.mdb.kafka.v1.TopicService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteTopicRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteTopicRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.TopicServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TopicServiceService, 'yandex.cloud.mdb.kafka.v1.TopicService');
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
