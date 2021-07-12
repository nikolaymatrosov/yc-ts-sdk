/* eslint-disable */
import { Int64Value, BoolValue } from '../../../../../google/protobuf/wrappers';
import { compressionTypeFromJSON, compressionTypeToJSON, } from '../../../../../yandex/cloud/mdb/kafka/v1/common';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.kafka.v1';
export var Topicconfig21_CleanupPolicy;
(function (Topicconfig21_CleanupPolicy) {
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLEANUP_POLICY_UNSPECIFIED";
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_DELETE"] = 1] = "CLEANUP_POLICY_DELETE";
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_COMPACT"] = 2] = "CLEANUP_POLICY_COMPACT";
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["CLEANUP_POLICY_COMPACT_AND_DELETE"] = 3] = "CLEANUP_POLICY_COMPACT_AND_DELETE";
    Topicconfig21_CleanupPolicy[Topicconfig21_CleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Topicconfig21_CleanupPolicy || (Topicconfig21_CleanupPolicy = {}));
export function topicconfig21_CleanupPolicyFromJSON(object) {
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
export function topicconfig21_CleanupPolicyToJSON(object) {
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
export var Topicconfig26_CleanupPolicy;
(function (Topicconfig26_CleanupPolicy) {
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLEANUP_POLICY_UNSPECIFIED";
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_DELETE"] = 1] = "CLEANUP_POLICY_DELETE";
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_COMPACT"] = 2] = "CLEANUP_POLICY_COMPACT";
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["CLEANUP_POLICY_COMPACT_AND_DELETE"] = 3] = "CLEANUP_POLICY_COMPACT_AND_DELETE";
    Topicconfig26_CleanupPolicy[Topicconfig26_CleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Topicconfig26_CleanupPolicy || (Topicconfig26_CleanupPolicy = {}));
export function topicconfig26_CleanupPolicyFromJSON(object) {
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
export function topicconfig26_CleanupPolicyToJSON(object) {
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
const baseTopic = { name: '', clusterId: '' };
export const Topic = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.partitions !== undefined) {
            Int64Value.encode({ value: message.partitions }, writer.uint32(26).fork()).ldelim();
        }
        if (message.replicationFactor !== undefined) {
            Int64Value.encode({ value: message.replicationFactor }, writer.uint32(34).fork()).ldelim();
        }
        if (message.topicConfig21 !== undefined) {
            Topicconfig21.encode(message.topicConfig21, writer.uint32(42).fork()).ldelim();
        }
        if (message.topicConfig26 !== undefined) {
            Topicconfig26.encode(message.topicConfig26, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.partitions = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.replicationFactor = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.topicConfig21 = Topicconfig21.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.topicConfig26 = Topicconfig26.decode(reader, reader.uint32());
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
            message.topicConfig21 = Topicconfig21.fromJSON(object.topicConfig21);
        }
        else {
            message.topicConfig21 = undefined;
        }
        if (object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null) {
            message.topicConfig26 = Topicconfig26.fromJSON(object.topicConfig26);
        }
        else {
            message.topicConfig26 = undefined;
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
                ? Topicconfig21.toJSON(message.topicConfig21)
                : undefined);
        message.topicConfig26 !== undefined &&
            (obj.topicConfig26 = message.topicConfig26
                ? Topicconfig26.toJSON(message.topicConfig26)
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
            message.topicConfig21 = Topicconfig21.fromPartial(object.topicConfig21);
        }
        else {
            message.topicConfig21 = undefined;
        }
        if (object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null) {
            message.topicConfig26 = Topicconfig26.fromPartial(object.topicConfig26);
        }
        else {
            message.topicConfig26 = undefined;
        }
        return message;
    },
};
const baseTopicSpec = { name: '' };
export const TopicSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.partitions !== undefined) {
            Int64Value.encode({ value: message.partitions }, writer.uint32(18).fork()).ldelim();
        }
        if (message.replicationFactor !== undefined) {
            Int64Value.encode({ value: message.replicationFactor }, writer.uint32(26).fork()).ldelim();
        }
        if (message.topicConfig21 !== undefined) {
            Topicconfig21.encode(message.topicConfig21, writer.uint32(34).fork()).ldelim();
        }
        if (message.topicConfig26 !== undefined) {
            Topicconfig26.encode(message.topicConfig26, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTopicSpec };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.partitions = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.replicationFactor = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.topicConfig21 = Topicconfig21.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.topicConfig26 = Topicconfig26.decode(reader, reader.uint32());
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
            message.topicConfig21 = Topicconfig21.fromJSON(object.topicConfig21);
        }
        else {
            message.topicConfig21 = undefined;
        }
        if (object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null) {
            message.topicConfig26 = Topicconfig26.fromJSON(object.topicConfig26);
        }
        else {
            message.topicConfig26 = undefined;
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
                ? Topicconfig21.toJSON(message.topicConfig21)
                : undefined);
        message.topicConfig26 !== undefined &&
            (obj.topicConfig26 = message.topicConfig26
                ? Topicconfig26.toJSON(message.topicConfig26)
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
            message.topicConfig21 = Topicconfig21.fromPartial(object.topicConfig21);
        }
        else {
            message.topicConfig21 = undefined;
        }
        if (object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null) {
            message.topicConfig26 = Topicconfig26.fromPartial(object.topicConfig26);
        }
        else {
            message.topicConfig26 = undefined;
        }
        return message;
    },
};
const baseTopicconfig21 = { cleanupPolicy: 0, compressionType: 0 };
export const Topicconfig21 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            Int64Value.encode({ value: message.deleteRetentionMs }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            Int64Value.encode({ value: message.fileDeleteDelayMs }, writer.uint32(34).fork()).ldelim();
        }
        if (message.flushMessages !== undefined) {
            Int64Value.encode({ value: message.flushMessages }, writer.uint32(42).fork()).ldelim();
        }
        if (message.flushMs !== undefined) {
            Int64Value.encode({ value: message.flushMs }, writer.uint32(50).fork()).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            Int64Value.encode({ value: message.minCompactionLagMs }, writer.uint32(58).fork()).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            Int64Value.encode({ value: message.retentionBytes }, writer.uint32(66).fork()).ldelim();
        }
        if (message.retentionMs !== undefined) {
            Int64Value.encode({ value: message.retentionMs }, writer.uint32(74).fork()).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            Int64Value.encode({ value: message.maxMessageBytes }, writer.uint32(82).fork()).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            Int64Value.encode({ value: message.minInsyncReplicas }, writer.uint32(90).fork()).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            Int64Value.encode({ value: message.segmentBytes }, writer.uint32(98).fork()).ldelim();
        }
        if (message.preallocate !== undefined) {
            BoolValue.encode({ value: message.preallocate }, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.deleteRetentionMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.flushMessages = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.flushMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.minCompactionLagMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.retentionBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.retentionMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.maxMessageBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.minInsyncReplicas = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.segmentBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.preallocate = BoolValue.decode(reader, reader.uint32()).value;
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
            message.compressionType = compressionTypeFromJSON(object.compressionType);
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
            (obj.compressionType = compressionTypeToJSON(message.compressionType));
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
export const Topicconfig26 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            Int64Value.encode({ value: message.deleteRetentionMs }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            Int64Value.encode({ value: message.fileDeleteDelayMs }, writer.uint32(34).fork()).ldelim();
        }
        if (message.flushMessages !== undefined) {
            Int64Value.encode({ value: message.flushMessages }, writer.uint32(42).fork()).ldelim();
        }
        if (message.flushMs !== undefined) {
            Int64Value.encode({ value: message.flushMs }, writer.uint32(50).fork()).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            Int64Value.encode({ value: message.minCompactionLagMs }, writer.uint32(58).fork()).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            Int64Value.encode({ value: message.retentionBytes }, writer.uint32(66).fork()).ldelim();
        }
        if (message.retentionMs !== undefined) {
            Int64Value.encode({ value: message.retentionMs }, writer.uint32(74).fork()).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            Int64Value.encode({ value: message.maxMessageBytes }, writer.uint32(82).fork()).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            Int64Value.encode({ value: message.minInsyncReplicas }, writer.uint32(90).fork()).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            Int64Value.encode({ value: message.segmentBytes }, writer.uint32(98).fork()).ldelim();
        }
        if (message.preallocate !== undefined) {
            BoolValue.encode({ value: message.preallocate }, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.deleteRetentionMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.flushMessages = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.flushMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.minCompactionLagMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.retentionBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.retentionMs = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.maxMessageBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.minInsyncReplicas = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.segmentBytes = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.preallocate = BoolValue.decode(reader, reader.uint32()).value;
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
            message.compressionType = compressionTypeFromJSON(object.compressionType);
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
            (obj.compressionType = compressionTypeToJSON(message.compressionType));
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
