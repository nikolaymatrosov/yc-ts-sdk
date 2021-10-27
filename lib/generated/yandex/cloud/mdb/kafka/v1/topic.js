"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topicconfig28 = exports.Topicconfig26 = exports.Topicconfig21 = exports.TopicSpec = exports.Topic = exports.topicconfig28_CleanupPolicyToJSON = exports.topicconfig28_CleanupPolicyFromJSON = exports.Topicconfig28_CleanupPolicy = exports.topicconfig26_CleanupPolicyToJSON = exports.topicconfig26_CleanupPolicyFromJSON = exports.Topicconfig26_CleanupPolicy = exports.topicconfig21_CleanupPolicyToJSON = exports.topicconfig21_CleanupPolicyFromJSON = exports.Topicconfig21_CleanupPolicy = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
const common_1 = require("../../../../../yandex/cloud/mdb/kafka/v1/common");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.kafka.v1';
var Topicconfig21_CleanupPolicy;
(function (Topicconfig21_CleanupPolicy) {
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLEANUP_POLICY_UNSPECIFIED";
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_DELETE"] = 1] = "CLEANUP_POLICY_DELETE";
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_COMPACT"] = 2] = "CLEANUP_POLICY_COMPACT";
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_COMPACT_AND_DELETE"] = 3] = "CLEANUP_POLICY_COMPACT_AND_DELETE";
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Topicconfig21_CleanupPolicy = exports.Topicconfig21_CleanupPolicy || (exports.Topicconfig21_CleanupPolicy = {}));
function topicconfig21_CleanupPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case 'CLEANUP_POLICY_UNSPECIFIED':
            return Topicconfig21_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case 'CLEANUP_POLICY_DELETE':
            return Topicconfig21_CleanupPolicy.CLEANUP_POLICY_DELETE;
        case 2:
        case 'CLEANUP_POLICY_COMPACT':
            return Topicconfig21_CleanupPolicy.CLEANUP_POLICY_COMPACT;
        case 3:
        case 'CLEANUP_POLICY_COMPACT_AND_DELETE':
            return Topicconfig21_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Topicconfig21_CleanupPolicy.UNRECOGNIZED;
    }
}
exports.topicconfig21_CleanupPolicyFromJSON = topicconfig21_CleanupPolicyFromJSON;
function topicconfig21_CleanupPolicyToJSON(object) {
    switch (object) {
        case Topicconfig21_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
            return 'CLEANUP_POLICY_UNSPECIFIED';
        case Topicconfig21_CleanupPolicy.CLEANUP_POLICY_DELETE:
            return 'CLEANUP_POLICY_DELETE';
        case Topicconfig21_CleanupPolicy.CLEANUP_POLICY_COMPACT:
            return 'CLEANUP_POLICY_COMPACT';
        case Topicconfig21_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE:
            return 'CLEANUP_POLICY_COMPACT_AND_DELETE';
        default:
            return 'UNKNOWN';
    }
}
exports.topicconfig21_CleanupPolicyToJSON = topicconfig21_CleanupPolicyToJSON;
var Topicconfig26_CleanupPolicy;
(function (Topicconfig26_CleanupPolicy) {
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLEANUP_POLICY_UNSPECIFIED";
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_DELETE"] = 1] = "CLEANUP_POLICY_DELETE";
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_COMPACT"] = 2] = "CLEANUP_POLICY_COMPACT";
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_COMPACT_AND_DELETE"] = 3] = "CLEANUP_POLICY_COMPACT_AND_DELETE";
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Topicconfig26_CleanupPolicy = exports.Topicconfig26_CleanupPolicy || (exports.Topicconfig26_CleanupPolicy = {}));
function topicconfig26_CleanupPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case 'CLEANUP_POLICY_UNSPECIFIED':
            return Topicconfig26_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case 'CLEANUP_POLICY_DELETE':
            return Topicconfig26_CleanupPolicy.CLEANUP_POLICY_DELETE;
        case 2:
        case 'CLEANUP_POLICY_COMPACT':
            return Topicconfig26_CleanupPolicy.CLEANUP_POLICY_COMPACT;
        case 3:
        case 'CLEANUP_POLICY_COMPACT_AND_DELETE':
            return Topicconfig26_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Topicconfig26_CleanupPolicy.UNRECOGNIZED;
    }
}
exports.topicconfig26_CleanupPolicyFromJSON = topicconfig26_CleanupPolicyFromJSON;
function topicconfig26_CleanupPolicyToJSON(object) {
    switch (object) {
        case Topicconfig26_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
            return 'CLEANUP_POLICY_UNSPECIFIED';
        case Topicconfig26_CleanupPolicy.CLEANUP_POLICY_DELETE:
            return 'CLEANUP_POLICY_DELETE';
        case Topicconfig26_CleanupPolicy.CLEANUP_POLICY_COMPACT:
            return 'CLEANUP_POLICY_COMPACT';
        case Topicconfig26_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE:
            return 'CLEANUP_POLICY_COMPACT_AND_DELETE';
        default:
            return 'UNKNOWN';
    }
}
exports.topicconfig26_CleanupPolicyToJSON = topicconfig26_CleanupPolicyToJSON;
var Topicconfig28_CleanupPolicy;
(function (Topicconfig28_CleanupPolicy) {
    Topicconfig28_CleanupPolicy[Topicconfig28_CleanupPolicy["CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLEANUP_POLICY_UNSPECIFIED";
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    Topicconfig28_CleanupPolicy[Topicconfig28_CleanupPolicy["CLEANUP_POLICY_DELETE"] = 1] = "CLEANUP_POLICY_DELETE";
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    Topicconfig28_CleanupPolicy[Topicconfig28_CleanupPolicy["CLEANUP_POLICY_COMPACT"] = 2] = "CLEANUP_POLICY_COMPACT";
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    Topicconfig28_CleanupPolicy[Topicconfig28_CleanupPolicy["CLEANUP_POLICY_COMPACT_AND_DELETE"] = 3] = "CLEANUP_POLICY_COMPACT_AND_DELETE";
    Topicconfig28_CleanupPolicy[Topicconfig28_CleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Topicconfig28_CleanupPolicy = exports.Topicconfig28_CleanupPolicy || (exports.Topicconfig28_CleanupPolicy = {}));
function topicconfig28_CleanupPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case 'CLEANUP_POLICY_UNSPECIFIED':
            return Topicconfig28_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case 'CLEANUP_POLICY_DELETE':
            return Topicconfig28_CleanupPolicy.CLEANUP_POLICY_DELETE;
        case 2:
        case 'CLEANUP_POLICY_COMPACT':
            return Topicconfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT;
        case 3:
        case 'CLEANUP_POLICY_COMPACT_AND_DELETE':
            return Topicconfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Topicconfig28_CleanupPolicy.UNRECOGNIZED;
    }
}
exports.topicconfig28_CleanupPolicyFromJSON = topicconfig28_CleanupPolicyFromJSON;
function topicconfig28_CleanupPolicyToJSON(object) {
    switch (object) {
        case Topicconfig28_CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
            return 'CLEANUP_POLICY_UNSPECIFIED';
        case Topicconfig28_CleanupPolicy.CLEANUP_POLICY_DELETE:
            return 'CLEANUP_POLICY_DELETE';
        case Topicconfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT:
            return 'CLEANUP_POLICY_COMPACT';
        case Topicconfig28_CleanupPolicy.CLEANUP_POLICY_COMPACT_AND_DELETE:
            return 'CLEANUP_POLICY_COMPACT_AND_DELETE';
        default:
            return 'UNKNOWN';
    }
}
exports.topicconfig28_CleanupPolicyToJSON = topicconfig28_CleanupPolicyToJSON;
const baseTopic = { name: '', clusterId: '' };
exports.Topic = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.partitions !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.partitions }, writer.uint32(26).fork()).ldelim();
        }
        if (message.replicationFactor !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.replicationFactor }, writer.uint32(34).fork()).ldelim();
        }
        if (message.topicConfig21 !== undefined) {
            exports.Topicconfig21.encode(message.topicConfig21, writer.uint32(42).fork()).ldelim();
        }
        if (message.topicConfig26 !== undefined) {
            exports.Topicconfig26.encode(message.topicConfig26, writer.uint32(50).fork()).ldelim();
        }
        if (message.topicConfig28 !== undefined) {
            exports.Topicconfig28.encode(message.topicConfig28, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTopic };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.partitions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.replicationFactor = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.topicConfig21 = exports.Topicconfig21.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.topicConfig26 = exports.Topicconfig26.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.topicConfig28 = exports.Topicconfig28.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTopic };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.partitions !== undefined && object.partitions !== null) {
            message.partitions = Number(object.partitions);
        }
        else {
            message.partitions = undefined;
        }
        if (object.replicationFactor !== undefined &&
            object.replicationFactor !== null) {
            message.replicationFactor = Number(object.replicationFactor);
        }
        else {
            message.replicationFactor = undefined;
        }
        if (object.topicConfig21 !== undefined &&
            object.topicConfig21 !== null) {
            message.topicConfig21 = exports.Topicconfig21.fromJSON(object.topicConfig21);
        }
        else {
            message.topicConfig21 = undefined;
        }
        if (object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null) {
            message.topicConfig26 = exports.Topicconfig26.fromJSON(object.topicConfig26);
        }
        else {
            message.topicConfig26 = undefined;
        }
        if (object.topicConfig28 !== undefined &&
            object.topicConfig28 !== null) {
            message.topicConfig28 = exports.Topicconfig28.fromJSON(object.topicConfig28);
        }
        else {
            message.topicConfig28 = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.partitions !== undefined &&
            (obj.partitions = message.partitions);
        message.replicationFactor !== undefined &&
            (obj.replicationFactor = message.replicationFactor);
        message.topicConfig21 !== undefined &&
            (obj.topicConfig21 = message.topicConfig21
                ? exports.Topicconfig21.toJSON(message.topicConfig21)
                : undefined);
        message.topicConfig26 !== undefined &&
            (obj.topicConfig26 = message.topicConfig26
                ? exports.Topicconfig26.toJSON(message.topicConfig26)
                : undefined);
        message.topicConfig28 !== undefined &&
            (obj.topicConfig28 = message.topicConfig28
                ? exports.Topicconfig28.toJSON(message.topicConfig28)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTopic };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.partitions !== undefined && object.partitions !== null) {
            message.partitions = object.partitions;
        }
        else {
            message.partitions = undefined;
        }
        if (object.replicationFactor !== undefined &&
            object.replicationFactor !== null) {
            message.replicationFactor = object.replicationFactor;
        }
        else {
            message.replicationFactor = undefined;
        }
        if (object.topicConfig21 !== undefined &&
            object.topicConfig21 !== null) {
            message.topicConfig21 = exports.Topicconfig21.fromPartial(object.topicConfig21);
        }
        else {
            message.topicConfig21 = undefined;
        }
        if (object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null) {
            message.topicConfig26 = exports.Topicconfig26.fromPartial(object.topicConfig26);
        }
        else {
            message.topicConfig26 = undefined;
        }
        if (object.topicConfig28 !== undefined &&
            object.topicConfig28 !== null) {
            message.topicConfig28 = exports.Topicconfig28.fromPartial(object.topicConfig28);
        }
        else {
            message.topicConfig28 = undefined;
        }
        return message;
    },
};
const baseTopicSpec = { name: '' };
exports.TopicSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.partitions !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.partitions }, writer.uint32(18).fork()).ldelim();
        }
        if (message.replicationFactor !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.replicationFactor }, writer.uint32(26).fork()).ldelim();
        }
        if (message.topicConfig21 !== undefined) {
            exports.Topicconfig21.encode(message.topicConfig21, writer.uint32(34).fork()).ldelim();
        }
        if (message.topicConfig26 !== undefined) {
            exports.Topicconfig26.encode(message.topicConfig26, writer.uint32(42).fork()).ldelim();
        }
        if (message.topicConfig28 !== undefined) {
            exports.Topicconfig28.encode(message.topicConfig28, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTopicSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.partitions = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.replicationFactor = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.topicConfig21 = exports.Topicconfig21.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.topicConfig26 = exports.Topicconfig26.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.topicConfig28 = exports.Topicconfig28.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTopicSpec };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.partitions !== undefined && object.partitions !== null) {
            message.partitions = Number(object.partitions);
        }
        else {
            message.partitions = undefined;
        }
        if (object.replicationFactor !== undefined &&
            object.replicationFactor !== null) {
            message.replicationFactor = Number(object.replicationFactor);
        }
        else {
            message.replicationFactor = undefined;
        }
        if (object.topicConfig21 !== undefined &&
            object.topicConfig21 !== null) {
            message.topicConfig21 = exports.Topicconfig21.fromJSON(object.topicConfig21);
        }
        else {
            message.topicConfig21 = undefined;
        }
        if (object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null) {
            message.topicConfig26 = exports.Topicconfig26.fromJSON(object.topicConfig26);
        }
        else {
            message.topicConfig26 = undefined;
        }
        if (object.topicConfig28 !== undefined &&
            object.topicConfig28 !== null) {
            message.topicConfig28 = exports.Topicconfig28.fromJSON(object.topicConfig28);
        }
        else {
            message.topicConfig28 = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.partitions !== undefined &&
            (obj.partitions = message.partitions);
        message.replicationFactor !== undefined &&
            (obj.replicationFactor = message.replicationFactor);
        message.topicConfig21 !== undefined &&
            (obj.topicConfig21 = message.topicConfig21
                ? exports.Topicconfig21.toJSON(message.topicConfig21)
                : undefined);
        message.topicConfig26 !== undefined &&
            (obj.topicConfig26 = message.topicConfig26
                ? exports.Topicconfig26.toJSON(message.topicConfig26)
                : undefined);
        message.topicConfig28 !== undefined &&
            (obj.topicConfig28 = message.topicConfig28
                ? exports.Topicconfig28.toJSON(message.topicConfig28)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTopicSpec };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.partitions !== undefined && object.partitions !== null) {
            message.partitions = object.partitions;
        }
        else {
            message.partitions = undefined;
        }
        if (object.replicationFactor !== undefined &&
            object.replicationFactor !== null) {
            message.replicationFactor = object.replicationFactor;
        }
        else {
            message.replicationFactor = undefined;
        }
        if (object.topicConfig21 !== undefined &&
            object.topicConfig21 !== null) {
            message.topicConfig21 = exports.Topicconfig21.fromPartial(object.topicConfig21);
        }
        else {
            message.topicConfig21 = undefined;
        }
        if (object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null) {
            message.topicConfig26 = exports.Topicconfig26.fromPartial(object.topicConfig26);
        }
        else {
            message.topicConfig26 = undefined;
        }
        if (object.topicConfig28 !== undefined &&
            object.topicConfig28 !== null) {
            message.topicConfig28 = exports.Topicconfig28.fromPartial(object.topicConfig28);
        }
        else {
            message.topicConfig28 = undefined;
        }
        return message;
    },
};
const baseTopicconfig21 = { cleanupPolicy: 0, compressionType: 0 };
exports.Topicconfig21 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.deleteRetentionMs }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.fileDeleteDelayMs }, writer.uint32(34).fork()).ldelim();
        }
        if (message.flushMessages !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.flushMessages }, writer.uint32(42).fork()).ldelim();
        }
        if (message.flushMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.flushMs }, writer.uint32(50).fork()).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.minCompactionLagMs }, writer.uint32(58).fork()).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.retentionBytes }, writer.uint32(66).fork()).ldelim();
        }
        if (message.retentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.retentionMs }, writer.uint32(74).fork()).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxMessageBytes }, writer.uint32(82).fork()).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.minInsyncReplicas }, writer.uint32(90).fork()).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.segmentBytes }, writer.uint32(98).fork()).ldelim();
        }
        if (message.preallocate !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.preallocate }, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTopicconfig21 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cleanupPolicy = reader.int32();
                    break;
                case 2:
                    message.compressionType = reader.int32();
                    break;
                case 3:
                    message.deleteRetentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.flushMessages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.flushMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.minCompactionLagMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.retentionBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.retentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.maxMessageBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.minInsyncReplicas = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.segmentBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.preallocate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTopicconfig21 };
        if (object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null) {
            message.cleanupPolicy = topicconfig21_CleanupPolicyFromJSON(object.cleanupPolicy);
        }
        else {
            message.cleanupPolicy = 0;
        }
        if (object.compressionType !== undefined &&
            object.compressionType !== null) {
            message.compressionType = (0, common_1.compressionTypeFromJSON)(object.compressionType);
        }
        else {
            message.compressionType = 0;
        }
        if (object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null) {
            message.deleteRetentionMs = Number(object.deleteRetentionMs);
        }
        else {
            message.deleteRetentionMs = undefined;
        }
        if (object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null) {
            message.fileDeleteDelayMs = Number(object.fileDeleteDelayMs);
        }
        else {
            message.fileDeleteDelayMs = undefined;
        }
        if (object.flushMessages !== undefined &&
            object.flushMessages !== null) {
            message.flushMessages = Number(object.flushMessages);
        }
        else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = Number(object.flushMs);
        }
        else {
            message.flushMs = undefined;
        }
        if (object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null) {
            message.minCompactionLagMs = Number(object.minCompactionLagMs);
        }
        else {
            message.minCompactionLagMs = undefined;
        }
        if (object.retentionBytes !== undefined &&
            object.retentionBytes !== null) {
            message.retentionBytes = Number(object.retentionBytes);
        }
        else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = Number(object.retentionMs);
        }
        else {
            message.retentionMs = undefined;
        }
        if (object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null) {
            message.maxMessageBytes = Number(object.maxMessageBytes);
        }
        else {
            message.maxMessageBytes = undefined;
        }
        if (object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null) {
            message.minInsyncReplicas = Number(object.minInsyncReplicas);
        }
        else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = Number(object.segmentBytes);
        }
        else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = Boolean(object.preallocate);
        }
        else {
            message.preallocate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = topicconfig21_CleanupPolicyToJSON(message.cleanupPolicy));
        message.compressionType !== undefined &&
            (obj.compressionType = (0, common_1.compressionTypeToJSON)(message.compressionType));
        message.deleteRetentionMs !== undefined &&
            (obj.deleteRetentionMs = message.deleteRetentionMs);
        message.fileDeleteDelayMs !== undefined &&
            (obj.fileDeleteDelayMs = message.fileDeleteDelayMs);
        message.flushMessages !== undefined &&
            (obj.flushMessages = message.flushMessages);
        message.flushMs !== undefined && (obj.flushMs = message.flushMs);
        message.minCompactionLagMs !== undefined &&
            (obj.minCompactionLagMs = message.minCompactionLagMs);
        message.retentionBytes !== undefined &&
            (obj.retentionBytes = message.retentionBytes);
        message.retentionMs !== undefined &&
            (obj.retentionMs = message.retentionMs);
        message.maxMessageBytes !== undefined &&
            (obj.maxMessageBytes = message.maxMessageBytes);
        message.minInsyncReplicas !== undefined &&
            (obj.minInsyncReplicas = message.minInsyncReplicas);
        message.segmentBytes !== undefined &&
            (obj.segmentBytes = message.segmentBytes);
        message.preallocate !== undefined &&
            (obj.preallocate = message.preallocate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTopicconfig21 };
        if (object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null) {
            message.cleanupPolicy = object.cleanupPolicy;
        }
        else {
            message.cleanupPolicy = 0;
        }
        if (object.compressionType !== undefined &&
            object.compressionType !== null) {
            message.compressionType = object.compressionType;
        }
        else {
            message.compressionType = 0;
        }
        if (object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null) {
            message.deleteRetentionMs = object.deleteRetentionMs;
        }
        else {
            message.deleteRetentionMs = undefined;
        }
        if (object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null) {
            message.fileDeleteDelayMs = object.fileDeleteDelayMs;
        }
        else {
            message.fileDeleteDelayMs = undefined;
        }
        if (object.flushMessages !== undefined &&
            object.flushMessages !== null) {
            message.flushMessages = object.flushMessages;
        }
        else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = object.flushMs;
        }
        else {
            message.flushMs = undefined;
        }
        if (object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null) {
            message.minCompactionLagMs = object.minCompactionLagMs;
        }
        else {
            message.minCompactionLagMs = undefined;
        }
        if (object.retentionBytes !== undefined &&
            object.retentionBytes !== null) {
            message.retentionBytes = object.retentionBytes;
        }
        else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = object.retentionMs;
        }
        else {
            message.retentionMs = undefined;
        }
        if (object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null) {
            message.maxMessageBytes = object.maxMessageBytes;
        }
        else {
            message.maxMessageBytes = undefined;
        }
        if (object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null) {
            message.minInsyncReplicas = object.minInsyncReplicas;
        }
        else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = object.segmentBytes;
        }
        else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = object.preallocate;
        }
        else {
            message.preallocate = undefined;
        }
        return message;
    },
};
const baseTopicconfig26 = { cleanupPolicy: 0, compressionType: 0 };
exports.Topicconfig26 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.deleteRetentionMs }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.fileDeleteDelayMs }, writer.uint32(34).fork()).ldelim();
        }
        if (message.flushMessages !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.flushMessages }, writer.uint32(42).fork()).ldelim();
        }
        if (message.flushMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.flushMs }, writer.uint32(50).fork()).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.minCompactionLagMs }, writer.uint32(58).fork()).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.retentionBytes }, writer.uint32(66).fork()).ldelim();
        }
        if (message.retentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.retentionMs }, writer.uint32(74).fork()).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxMessageBytes }, writer.uint32(82).fork()).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.minInsyncReplicas }, writer.uint32(90).fork()).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.segmentBytes }, writer.uint32(98).fork()).ldelim();
        }
        if (message.preallocate !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.preallocate }, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTopicconfig26 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cleanupPolicy = reader.int32();
                    break;
                case 2:
                    message.compressionType = reader.int32();
                    break;
                case 3:
                    message.deleteRetentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.flushMessages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.flushMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.minCompactionLagMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.retentionBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.retentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.maxMessageBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.minInsyncReplicas = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.segmentBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.preallocate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTopicconfig26 };
        if (object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null) {
            message.cleanupPolicy = topicconfig26_CleanupPolicyFromJSON(object.cleanupPolicy);
        }
        else {
            message.cleanupPolicy = 0;
        }
        if (object.compressionType !== undefined &&
            object.compressionType !== null) {
            message.compressionType = (0, common_1.compressionTypeFromJSON)(object.compressionType);
        }
        else {
            message.compressionType = 0;
        }
        if (object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null) {
            message.deleteRetentionMs = Number(object.deleteRetentionMs);
        }
        else {
            message.deleteRetentionMs = undefined;
        }
        if (object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null) {
            message.fileDeleteDelayMs = Number(object.fileDeleteDelayMs);
        }
        else {
            message.fileDeleteDelayMs = undefined;
        }
        if (object.flushMessages !== undefined &&
            object.flushMessages !== null) {
            message.flushMessages = Number(object.flushMessages);
        }
        else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = Number(object.flushMs);
        }
        else {
            message.flushMs = undefined;
        }
        if (object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null) {
            message.minCompactionLagMs = Number(object.minCompactionLagMs);
        }
        else {
            message.minCompactionLagMs = undefined;
        }
        if (object.retentionBytes !== undefined &&
            object.retentionBytes !== null) {
            message.retentionBytes = Number(object.retentionBytes);
        }
        else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = Number(object.retentionMs);
        }
        else {
            message.retentionMs = undefined;
        }
        if (object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null) {
            message.maxMessageBytes = Number(object.maxMessageBytes);
        }
        else {
            message.maxMessageBytes = undefined;
        }
        if (object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null) {
            message.minInsyncReplicas = Number(object.minInsyncReplicas);
        }
        else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = Number(object.segmentBytes);
        }
        else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = Boolean(object.preallocate);
        }
        else {
            message.preallocate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = topicconfig26_CleanupPolicyToJSON(message.cleanupPolicy));
        message.compressionType !== undefined &&
            (obj.compressionType = (0, common_1.compressionTypeToJSON)(message.compressionType));
        message.deleteRetentionMs !== undefined &&
            (obj.deleteRetentionMs = message.deleteRetentionMs);
        message.fileDeleteDelayMs !== undefined &&
            (obj.fileDeleteDelayMs = message.fileDeleteDelayMs);
        message.flushMessages !== undefined &&
            (obj.flushMessages = message.flushMessages);
        message.flushMs !== undefined && (obj.flushMs = message.flushMs);
        message.minCompactionLagMs !== undefined &&
            (obj.minCompactionLagMs = message.minCompactionLagMs);
        message.retentionBytes !== undefined &&
            (obj.retentionBytes = message.retentionBytes);
        message.retentionMs !== undefined &&
            (obj.retentionMs = message.retentionMs);
        message.maxMessageBytes !== undefined &&
            (obj.maxMessageBytes = message.maxMessageBytes);
        message.minInsyncReplicas !== undefined &&
            (obj.minInsyncReplicas = message.minInsyncReplicas);
        message.segmentBytes !== undefined &&
            (obj.segmentBytes = message.segmentBytes);
        message.preallocate !== undefined &&
            (obj.preallocate = message.preallocate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTopicconfig26 };
        if (object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null) {
            message.cleanupPolicy = object.cleanupPolicy;
        }
        else {
            message.cleanupPolicy = 0;
        }
        if (object.compressionType !== undefined &&
            object.compressionType !== null) {
            message.compressionType = object.compressionType;
        }
        else {
            message.compressionType = 0;
        }
        if (object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null) {
            message.deleteRetentionMs = object.deleteRetentionMs;
        }
        else {
            message.deleteRetentionMs = undefined;
        }
        if (object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null) {
            message.fileDeleteDelayMs = object.fileDeleteDelayMs;
        }
        else {
            message.fileDeleteDelayMs = undefined;
        }
        if (object.flushMessages !== undefined &&
            object.flushMessages !== null) {
            message.flushMessages = object.flushMessages;
        }
        else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = object.flushMs;
        }
        else {
            message.flushMs = undefined;
        }
        if (object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null) {
            message.minCompactionLagMs = object.minCompactionLagMs;
        }
        else {
            message.minCompactionLagMs = undefined;
        }
        if (object.retentionBytes !== undefined &&
            object.retentionBytes !== null) {
            message.retentionBytes = object.retentionBytes;
        }
        else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = object.retentionMs;
        }
        else {
            message.retentionMs = undefined;
        }
        if (object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null) {
            message.maxMessageBytes = object.maxMessageBytes;
        }
        else {
            message.maxMessageBytes = undefined;
        }
        if (object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null) {
            message.minInsyncReplicas = object.minInsyncReplicas;
        }
        else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = object.segmentBytes;
        }
        else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = object.preallocate;
        }
        else {
            message.preallocate = undefined;
        }
        return message;
    },
};
const baseTopicconfig28 = { cleanupPolicy: 0, compressionType: 0 };
exports.Topicconfig28 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.deleteRetentionMs }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.fileDeleteDelayMs }, writer.uint32(34).fork()).ldelim();
        }
        if (message.flushMessages !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.flushMessages }, writer.uint32(42).fork()).ldelim();
        }
        if (message.flushMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.flushMs }, writer.uint32(50).fork()).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.minCompactionLagMs }, writer.uint32(58).fork()).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.retentionBytes }, writer.uint32(66).fork()).ldelim();
        }
        if (message.retentionMs !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.retentionMs }, writer.uint32(74).fork()).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxMessageBytes }, writer.uint32(82).fork()).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.minInsyncReplicas }, writer.uint32(90).fork()).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.segmentBytes }, writer.uint32(98).fork()).ldelim();
        }
        if (message.preallocate !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.preallocate }, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTopicconfig28 };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cleanupPolicy = reader.int32();
                    break;
                case 2:
                    message.compressionType = reader.int32();
                    break;
                case 3:
                    message.deleteRetentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.flushMessages = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.flushMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.minCompactionLagMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.retentionBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.retentionMs = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.maxMessageBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.minInsyncReplicas = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.segmentBytes = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.preallocate = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTopicconfig28 };
        if (object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null) {
            message.cleanupPolicy = topicconfig28_CleanupPolicyFromJSON(object.cleanupPolicy);
        }
        else {
            message.cleanupPolicy = 0;
        }
        if (object.compressionType !== undefined &&
            object.compressionType !== null) {
            message.compressionType = (0, common_1.compressionTypeFromJSON)(object.compressionType);
        }
        else {
            message.compressionType = 0;
        }
        if (object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null) {
            message.deleteRetentionMs = Number(object.deleteRetentionMs);
        }
        else {
            message.deleteRetentionMs = undefined;
        }
        if (object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null) {
            message.fileDeleteDelayMs = Number(object.fileDeleteDelayMs);
        }
        else {
            message.fileDeleteDelayMs = undefined;
        }
        if (object.flushMessages !== undefined &&
            object.flushMessages !== null) {
            message.flushMessages = Number(object.flushMessages);
        }
        else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = Number(object.flushMs);
        }
        else {
            message.flushMs = undefined;
        }
        if (object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null) {
            message.minCompactionLagMs = Number(object.minCompactionLagMs);
        }
        else {
            message.minCompactionLagMs = undefined;
        }
        if (object.retentionBytes !== undefined &&
            object.retentionBytes !== null) {
            message.retentionBytes = Number(object.retentionBytes);
        }
        else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = Number(object.retentionMs);
        }
        else {
            message.retentionMs = undefined;
        }
        if (object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null) {
            message.maxMessageBytes = Number(object.maxMessageBytes);
        }
        else {
            message.maxMessageBytes = undefined;
        }
        if (object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null) {
            message.minInsyncReplicas = Number(object.minInsyncReplicas);
        }
        else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = Number(object.segmentBytes);
        }
        else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = Boolean(object.preallocate);
        }
        else {
            message.preallocate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = topicconfig28_CleanupPolicyToJSON(message.cleanupPolicy));
        message.compressionType !== undefined &&
            (obj.compressionType = (0, common_1.compressionTypeToJSON)(message.compressionType));
        message.deleteRetentionMs !== undefined &&
            (obj.deleteRetentionMs = message.deleteRetentionMs);
        message.fileDeleteDelayMs !== undefined &&
            (obj.fileDeleteDelayMs = message.fileDeleteDelayMs);
        message.flushMessages !== undefined &&
            (obj.flushMessages = message.flushMessages);
        message.flushMs !== undefined && (obj.flushMs = message.flushMs);
        message.minCompactionLagMs !== undefined &&
            (obj.minCompactionLagMs = message.minCompactionLagMs);
        message.retentionBytes !== undefined &&
            (obj.retentionBytes = message.retentionBytes);
        message.retentionMs !== undefined &&
            (obj.retentionMs = message.retentionMs);
        message.maxMessageBytes !== undefined &&
            (obj.maxMessageBytes = message.maxMessageBytes);
        message.minInsyncReplicas !== undefined &&
            (obj.minInsyncReplicas = message.minInsyncReplicas);
        message.segmentBytes !== undefined &&
            (obj.segmentBytes = message.segmentBytes);
        message.preallocate !== undefined &&
            (obj.preallocate = message.preallocate);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTopicconfig28 };
        if (object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null) {
            message.cleanupPolicy = object.cleanupPolicy;
        }
        else {
            message.cleanupPolicy = 0;
        }
        if (object.compressionType !== undefined &&
            object.compressionType !== null) {
            message.compressionType = object.compressionType;
        }
        else {
            message.compressionType = 0;
        }
        if (object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null) {
            message.deleteRetentionMs = object.deleteRetentionMs;
        }
        else {
            message.deleteRetentionMs = undefined;
        }
        if (object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null) {
            message.fileDeleteDelayMs = object.fileDeleteDelayMs;
        }
        else {
            message.fileDeleteDelayMs = undefined;
        }
        if (object.flushMessages !== undefined &&
            object.flushMessages !== null) {
            message.flushMessages = object.flushMessages;
        }
        else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = object.flushMs;
        }
        else {
            message.flushMs = undefined;
        }
        if (object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null) {
            message.minCompactionLagMs = object.minCompactionLagMs;
        }
        else {
            message.minCompactionLagMs = undefined;
        }
        if (object.retentionBytes !== undefined &&
            object.retentionBytes !== null) {
            message.retentionBytes = object.retentionBytes;
        }
        else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = object.retentionMs;
        }
        else {
            message.retentionMs = undefined;
        }
        if (object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null) {
            message.maxMessageBytes = object.maxMessageBytes;
        }
        else {
            message.maxMessageBytes = undefined;
        }
        if (object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null) {
            message.minInsyncReplicas = object.minInsyncReplicas;
        }
        else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = object.segmentBytes;
        }
        else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = object.preallocate;
        }
        else {
            message.preallocate = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
