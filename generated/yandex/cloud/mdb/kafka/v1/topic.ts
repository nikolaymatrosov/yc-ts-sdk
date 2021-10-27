/* eslint-disable */
import { Int64Value, BoolValue } from '../../../../../google/protobuf/wrappers';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import {
    CompressionType,
    compressionTypeFromJSON,
    compressionTypeToJSON,
} from '../../../../../yandex/cloud/mdb/kafka/v1/common';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.kafka.v1';

/**
 * An Kafka topic.
 * For more information, see the [Concepts -> Topics and partitions](/docs/managed-kafka/concepts/topics) section of the documentation.
 */
export interface Topic {
    $type: 'yandex.cloud.mdb.kafka.v1.Topic';
    /** Name of the topic. */
    name: string;
    /**
     * ID of an Apache Kafka® cluster that the topic belongs to.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** The number of the topic's partitions. */
    partitions: number | undefined;
    /** Amount of data copies (replicas) for the topic in the cluster. */
    replicationFactor: number | undefined;
    topicConfig21: Topicconfig21 | undefined;
    topicConfig26: Topicconfig26 | undefined;
    topicConfig28: Topicconfig28 | undefined;
}

export interface TopicSpec {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicSpec';
    /** Name of the topic. */
    name: string;
    /** The number of the topic's partitions. */
    partitions: number | undefined;
    /** Amount of copies of a topic data kept in the cluster. */
    replicationFactor: number | undefined;
    topicConfig21: Topicconfig21 | undefined;
    topicConfig26: Topicconfig26 | undefined;
    topicConfig28: Topicconfig28 | undefined;
}

/** A topic settings for 2.1. */
export interface Topicconfig21 {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicConfig2_1';
    /** Retention policy to use on old log messages. */
    cleanupPolicy: Topicconfig21_CleanupPolicy;
    /** The compression type for a given topic. */
    compressionType: CompressionType;
    /** The amount of time in milliseconds to retain delete tombstone markers for log compacted topics. */
    deleteRetentionMs: number | undefined;
    /** The time to wait before deleting a file from the filesystem. */
    fileDeleteDelayMs: number | undefined;
    /**
     * The number of messages accumulated on a log partition before messages are flushed to disk.
     *
     * This setting overrides the cluster-level [KafkaConfig2_1.log_flush_interval_messages] setting on the topic level.
     */
    flushMessages: number | undefined;
    /**
     * The maximum time in milliseconds that a message in the topic is kept in memory before flushed to disk.
     *
     * This setting overrides the cluster-level [KafkaConfig2_1.log_flush_interval_ms] setting on the topic level.
     */
    flushMs: number | undefined;
    /** The minimum time in milliseconds a message will remain uncompacted in the log. */
    minCompactionLagMs: number | undefined;
    /**
     * The maximum size a partition can grow to before Kafka will discard old log segments to free up space if the `delete` [cleanup_policy] is in effect.
     * It is helpful if you need to control the size of log due to limited disk space.
     *
     * This setting overrides the cluster-level [KafkaConfig2_1.log_retention_bytes] setting on the topic level.
     */
    retentionBytes: number | undefined;
    /**
     * The number of milliseconds to keep a log segment's file before deleting it.
     *
     * This setting overrides the cluster-level [KafkaConfig2_1.log_retention_ms] setting on the topic level.
     */
    retentionMs: number | undefined;
    /** The largest record batch size allowed in topic. */
    maxMessageBytes: number | undefined;
    /**
     * This configuration specifies the minimum number of replicas that must acknowledge a write to topic for the write
     * to be considered successful (when a producer sets acks to "all").
     */
    minInsyncReplicas: number | undefined;
    /**
     * This configuration controls the segment file size for the log. Retention and cleaning is always done a file
     * at a time so a larger segment size means fewer files but less granular control over retention.
     *
     * This setting overrides the cluster-level [KafkaConfig2_1.log_segment_bytes] setting on the topic level.
     */
    segmentBytes: number | undefined;
    /**
     * True if we should preallocate the file on disk when creating a new log segment.
     *
     * This setting overrides the cluster-level [KafkaConfig2_1.log_preallocate] setting on the topic level.
     */
    preallocate: boolean | undefined;
}

export enum Topicconfig21_CleanupPolicy {
    CLEANUP_POLICY_UNSPECIFIED = 0,
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    CLEANUP_POLICY_DELETE = 1,
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    CLEANUP_POLICY_COMPACT = 2,
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    CLEANUP_POLICY_COMPACT_AND_DELETE = 3,
    UNRECOGNIZED = -1,
}

export function topicconfig21_CleanupPolicyFromJSON(
    object: any
): Topicconfig21_CleanupPolicy {
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

export function topicconfig21_CleanupPolicyToJSON(
    object: Topicconfig21_CleanupPolicy
): string {
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

/** A topic settings for 2.6 */
export interface Topicconfig26 {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicConfig2_6';
    /** Retention policy to use on old log messages. */
    cleanupPolicy: Topicconfig26_CleanupPolicy;
    /** The compression type for a given topic. */
    compressionType: CompressionType;
    /** The amount of time in milliseconds to retain delete tombstone markers for log compacted topics. */
    deleteRetentionMs: number | undefined;
    /** The time to wait before deleting a file from the filesystem. */
    fileDeleteDelayMs: number | undefined;
    /**
     * The number of messages accumulated on a log partition before messages are flushed to disk.
     *
     * This setting overrides the cluster-level [KafkaConfig2_6.log_flush_interval_messages] setting on the topic level.
     */
    flushMessages: number | undefined;
    /**
     * The maximum time in milliseconds that a message in the topic is kept in memory before flushed to disk.
     *
     * This setting overrides the cluster-level [KafkaConfig2_6.log_flush_interval_ms] setting on the topic level.
     */
    flushMs: number | undefined;
    /** The minimum time in milliseconds a message will remain uncompacted in the log. */
    minCompactionLagMs: number | undefined;
    /**
     * The maximum size a partition can grow to before Kafka will discard old log segments to free up space if the `delete` [cleanup_policy] is in effect.
     * It is helpful if you need to control the size of log due to limited disk space.
     *
     * This setting overrides the cluster-level [KafkaConfig2_6.log_retention_bytes] setting on the topic level.
     */
    retentionBytes: number | undefined;
    /**
     * The number of milliseconds to keep a log segment's file before deleting it.
     *
     * This setting overrides the cluster-level [KafkaConfig2_6.log_retention_ms] setting on the topic level.
     */
    retentionMs: number | undefined;
    /** The largest record batch size allowed in topic. */
    maxMessageBytes: number | undefined;
    /**
     * This configuration specifies the minimum number of replicas that must acknowledge a write to topic for the write
     * to be considered successful (when a producer sets acks to "all").
     */
    minInsyncReplicas: number | undefined;
    /**
     * This configuration controls the segment file size for the log. Retention and cleaning is always done a file
     * at a time so a larger segment size means fewer files but less granular control over retention.
     *
     * This setting overrides the cluster-level [KafkaConfig2_6.log_segment_bytes] setting on the topic level.
     */
    segmentBytes: number | undefined;
    /**
     * True if we should preallocate the file on disk when creating a new log segment.
     *
     * This setting overrides the cluster-level [KafkaConfig2_6.log_preallocate] setting on the topic level.
     */
    preallocate: boolean | undefined;
}

export enum Topicconfig26_CleanupPolicy {
    CLEANUP_POLICY_UNSPECIFIED = 0,
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    CLEANUP_POLICY_DELETE = 1,
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    CLEANUP_POLICY_COMPACT = 2,
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    CLEANUP_POLICY_COMPACT_AND_DELETE = 3,
    UNRECOGNIZED = -1,
}

export function topicconfig26_CleanupPolicyFromJSON(
    object: any
): Topicconfig26_CleanupPolicy {
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

export function topicconfig26_CleanupPolicyToJSON(
    object: Topicconfig26_CleanupPolicy
): string {
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

/** A topic settings for 2.8 */
export interface Topicconfig28 {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicConfig2_8';
    /** Retention policy to use on old log messages. */
    cleanupPolicy: Topicconfig28_CleanupPolicy;
    /** The compression type for a given topic. */
    compressionType: CompressionType;
    /** The amount of time in milliseconds to retain delete tombstone markers for log compacted topics. */
    deleteRetentionMs: number | undefined;
    /** The time to wait before deleting a file from the filesystem. */
    fileDeleteDelayMs: number | undefined;
    /**
     * The number of messages accumulated on a log partition before messages are flushed to disk.
     *
     * This setting overrides the cluster-level [KafkaConfig2_8.log_flush_interval_messages] setting on the topic level.
     */
    flushMessages: number | undefined;
    /**
     * The maximum time in milliseconds that a message in the topic is kept in memory before flushed to disk.
     *
     * This setting overrides the cluster-level [KafkaConfig2_8.log_flush_interval_ms] setting on the topic level.
     */
    flushMs: number | undefined;
    /** The minimum time in milliseconds a message will remain uncompacted in the log. */
    minCompactionLagMs: number | undefined;
    /**
     * The maximum size a partition can grow to before Kafka will discard old log segments to free up space if the `delete` [cleanup_policy] is in effect.
     * It is helpful if you need to control the size of log due to limited disk space.
     *
     * This setting overrides the cluster-level [KafkaConfig2_8.log_retention_bytes] setting on the topic level.
     */
    retentionBytes: number | undefined;
    /**
     * The number of milliseconds to keep a log segment's file before deleting it.
     *
     * This setting overrides the cluster-level [KafkaConfig2_8.log_retention_ms] setting on the topic level.
     */
    retentionMs: number | undefined;
    /** The largest record batch size allowed in topic. */
    maxMessageBytes: number | undefined;
    /**
     * This configuration specifies the minimum number of replicas that must acknowledge a write to topic for the write
     * to be considered successful (when a producer sets acks to "all").
     */
    minInsyncReplicas: number | undefined;
    /**
     * This configuration controls the segment file size for the log. Retention and cleaning is always done a file
     * at a time so a larger segment size means fewer files but less granular control over retention.
     *
     * This setting overrides the cluster-level [KafkaConfig2_8.log_segment_bytes] setting on the topic level.
     */
    segmentBytes: number | undefined;
    /**
     * True if we should preallocate the file on disk when creating a new log segment.
     *
     * This setting overrides the cluster-level [KafkaConfig2_8.log_preallocate] setting on the topic level.
     */
    preallocate: boolean | undefined;
}

export enum Topicconfig28_CleanupPolicy {
    CLEANUP_POLICY_UNSPECIFIED = 0,
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    CLEANUP_POLICY_DELETE = 1,
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    CLEANUP_POLICY_COMPACT = 2,
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    CLEANUP_POLICY_COMPACT_AND_DELETE = 3,
    UNRECOGNIZED = -1,
}

export function topicconfig28_CleanupPolicyFromJSON(
    object: any
): Topicconfig28_CleanupPolicy {
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

export function topicconfig28_CleanupPolicyToJSON(
    object: Topicconfig28_CleanupPolicy
): string {
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

const baseTopic: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.Topic',
    name: '',
    clusterId: '',
};

export const Topic = {
    $type: 'yandex.cloud.mdb.kafka.v1.Topic' as const,

    encode(
        message: Topic,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.partitions !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.partitions!,
                },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.replicationFactor !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.replicationFactor!,
                },
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.topicConfig21 !== undefined) {
            Topicconfig21.encode(
                message.topicConfig21,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.topicConfig26 !== undefined) {
            Topicconfig26.encode(
                message.topicConfig26,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.topicConfig28 !== undefined) {
            Topicconfig28.encode(
                message.topicConfig28,
                writer.uint32(58).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Topic {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTopic } as Topic;
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
                    message.partitions = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 4:
                    message.replicationFactor = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 5:
                    message.topicConfig21 = Topicconfig21.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.topicConfig26 = Topicconfig26.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.topicConfig28 = Topicconfig28.decode(
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

    fromJSON(object: any): Topic {
        const message = { ...baseTopic } as Topic;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.partitions !== undefined && object.partitions !== null) {
            message.partitions = Number(object.partitions);
        } else {
            message.partitions = undefined;
        }
        if (
            object.replicationFactor !== undefined &&
            object.replicationFactor !== null
        ) {
            message.replicationFactor = Number(object.replicationFactor);
        } else {
            message.replicationFactor = undefined;
        }
        if (
            object.topicConfig21 !== undefined &&
            object.topicConfig21 !== null
        ) {
            message.topicConfig21 = Topicconfig21.fromJSON(
                object.topicConfig21
            );
        } else {
            message.topicConfig21 = undefined;
        }
        if (
            object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null
        ) {
            message.topicConfig26 = Topicconfig26.fromJSON(
                object.topicConfig26
            );
        } else {
            message.topicConfig26 = undefined;
        }
        if (
            object.topicConfig28 !== undefined &&
            object.topicConfig28 !== null
        ) {
            message.topicConfig28 = Topicconfig28.fromJSON(
                object.topicConfig28
            );
        } else {
            message.topicConfig28 = undefined;
        }
        return message;
    },

    toJSON(message: Topic): unknown {
        const obj: any = {};
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
        message.topicConfig28 !== undefined &&
            (obj.topicConfig28 = message.topicConfig28
                ? Topicconfig28.toJSON(message.topicConfig28)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Topic>): Topic {
        const message = { ...baseTopic } as Topic;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.partitions !== undefined && object.partitions !== null) {
            message.partitions = object.partitions;
        } else {
            message.partitions = undefined;
        }
        if (
            object.replicationFactor !== undefined &&
            object.replicationFactor !== null
        ) {
            message.replicationFactor = object.replicationFactor;
        } else {
            message.replicationFactor = undefined;
        }
        if (
            object.topicConfig21 !== undefined &&
            object.topicConfig21 !== null
        ) {
            message.topicConfig21 = Topicconfig21.fromPartial(
                object.topicConfig21
            );
        } else {
            message.topicConfig21 = undefined;
        }
        if (
            object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null
        ) {
            message.topicConfig26 = Topicconfig26.fromPartial(
                object.topicConfig26
            );
        } else {
            message.topicConfig26 = undefined;
        }
        if (
            object.topicConfig28 !== undefined &&
            object.topicConfig28 !== null
        ) {
            message.topicConfig28 = Topicconfig28.fromPartial(
                object.topicConfig28
            );
        } else {
            message.topicConfig28 = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Topic.$type, Topic);

const baseTopicSpec: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicSpec',
    name: '',
};

export const TopicSpec = {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicSpec' as const,

    encode(
        message: TopicSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.partitions !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.partitions!,
                },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.replicationFactor !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.replicationFactor!,
                },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.topicConfig21 !== undefined) {
            Topicconfig21.encode(
                message.topicConfig21,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.topicConfig26 !== undefined) {
            Topicconfig26.encode(
                message.topicConfig26,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.topicConfig28 !== undefined) {
            Topicconfig28.encode(
                message.topicConfig28,
                writer.uint32(50).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TopicSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTopicSpec } as TopicSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.partitions = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.replicationFactor = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 4:
                    message.topicConfig21 = Topicconfig21.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 5:
                    message.topicConfig26 = Topicconfig26.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.topicConfig28 = Topicconfig28.decode(
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

    fromJSON(object: any): TopicSpec {
        const message = { ...baseTopicSpec } as TopicSpec;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.partitions !== undefined && object.partitions !== null) {
            message.partitions = Number(object.partitions);
        } else {
            message.partitions = undefined;
        }
        if (
            object.replicationFactor !== undefined &&
            object.replicationFactor !== null
        ) {
            message.replicationFactor = Number(object.replicationFactor);
        } else {
            message.replicationFactor = undefined;
        }
        if (
            object.topicConfig21 !== undefined &&
            object.topicConfig21 !== null
        ) {
            message.topicConfig21 = Topicconfig21.fromJSON(
                object.topicConfig21
            );
        } else {
            message.topicConfig21 = undefined;
        }
        if (
            object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null
        ) {
            message.topicConfig26 = Topicconfig26.fromJSON(
                object.topicConfig26
            );
        } else {
            message.topicConfig26 = undefined;
        }
        if (
            object.topicConfig28 !== undefined &&
            object.topicConfig28 !== null
        ) {
            message.topicConfig28 = Topicconfig28.fromJSON(
                object.topicConfig28
            );
        } else {
            message.topicConfig28 = undefined;
        }
        return message;
    },

    toJSON(message: TopicSpec): unknown {
        const obj: any = {};
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
        message.topicConfig28 !== undefined &&
            (obj.topicConfig28 = message.topicConfig28
                ? Topicconfig28.toJSON(message.topicConfig28)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<TopicSpec>): TopicSpec {
        const message = { ...baseTopicSpec } as TopicSpec;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.partitions !== undefined && object.partitions !== null) {
            message.partitions = object.partitions;
        } else {
            message.partitions = undefined;
        }
        if (
            object.replicationFactor !== undefined &&
            object.replicationFactor !== null
        ) {
            message.replicationFactor = object.replicationFactor;
        } else {
            message.replicationFactor = undefined;
        }
        if (
            object.topicConfig21 !== undefined &&
            object.topicConfig21 !== null
        ) {
            message.topicConfig21 = Topicconfig21.fromPartial(
                object.topicConfig21
            );
        } else {
            message.topicConfig21 = undefined;
        }
        if (
            object.topicConfig26 !== undefined &&
            object.topicConfig26 !== null
        ) {
            message.topicConfig26 = Topicconfig26.fromPartial(
                object.topicConfig26
            );
        } else {
            message.topicConfig26 = undefined;
        }
        if (
            object.topicConfig28 !== undefined &&
            object.topicConfig28 !== null
        ) {
            message.topicConfig28 = Topicconfig28.fromPartial(
                object.topicConfig28
            );
        } else {
            message.topicConfig28 = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(TopicSpec.$type, TopicSpec);

const baseTopicconfig21: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicConfig2_1',
    cleanupPolicy: 0,
    compressionType: 0,
};

export const Topicconfig21 = {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicConfig2_1' as const,

    encode(
        message: Topicconfig21,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.deleteRetentionMs!,
                },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.fileDeleteDelayMs!,
                },
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.flushMessages !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.flushMessages!,
                },
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.flushMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.flushMs!,
                },
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.minCompactionLagMs!,
                },
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.retentionBytes!,
                },
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.retentionMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.retentionMs!,
                },
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxMessageBytes!,
                },
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.minInsyncReplicas!,
                },
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.segmentBytes!,
                },
                writer.uint32(98).fork()
            ).ldelim();
        }
        if (message.preallocate !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.preallocate!,
                },
                writer.uint32(106).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Topicconfig21 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTopicconfig21 } as Topicconfig21;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cleanupPolicy = reader.int32() as any;
                    break;
                case 2:
                    message.compressionType = reader.int32() as any;
                    break;
                case 3:
                    message.deleteRetentionMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 5:
                    message.flushMessages = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 6:
                    message.flushMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 7:
                    message.minCompactionLagMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 8:
                    message.retentionBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 9:
                    message.retentionMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 10:
                    message.maxMessageBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 11:
                    message.minInsyncReplicas = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 12:
                    message.segmentBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 13:
                    message.preallocate = BoolValue.decode(
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

    fromJSON(object: any): Topicconfig21 {
        const message = { ...baseTopicconfig21 } as Topicconfig21;
        if (
            object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null
        ) {
            message.cleanupPolicy = topicconfig21_CleanupPolicyFromJSON(
                object.cleanupPolicy
            );
        } else {
            message.cleanupPolicy = 0;
        }
        if (
            object.compressionType !== undefined &&
            object.compressionType !== null
        ) {
            message.compressionType = compressionTypeFromJSON(
                object.compressionType
            );
        } else {
            message.compressionType = 0;
        }
        if (
            object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null
        ) {
            message.deleteRetentionMs = Number(object.deleteRetentionMs);
        } else {
            message.deleteRetentionMs = undefined;
        }
        if (
            object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null
        ) {
            message.fileDeleteDelayMs = Number(object.fileDeleteDelayMs);
        } else {
            message.fileDeleteDelayMs = undefined;
        }
        if (
            object.flushMessages !== undefined &&
            object.flushMessages !== null
        ) {
            message.flushMessages = Number(object.flushMessages);
        } else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = Number(object.flushMs);
        } else {
            message.flushMs = undefined;
        }
        if (
            object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null
        ) {
            message.minCompactionLagMs = Number(object.minCompactionLagMs);
        } else {
            message.minCompactionLagMs = undefined;
        }
        if (
            object.retentionBytes !== undefined &&
            object.retentionBytes !== null
        ) {
            message.retentionBytes = Number(object.retentionBytes);
        } else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = Number(object.retentionMs);
        } else {
            message.retentionMs = undefined;
        }
        if (
            object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null
        ) {
            message.maxMessageBytes = Number(object.maxMessageBytes);
        } else {
            message.maxMessageBytes = undefined;
        }
        if (
            object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null
        ) {
            message.minInsyncReplicas = Number(object.minInsyncReplicas);
        } else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = Number(object.segmentBytes);
        } else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = Boolean(object.preallocate);
        } else {
            message.preallocate = undefined;
        }
        return message;
    },

    toJSON(message: Topicconfig21): unknown {
        const obj: any = {};
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = topicconfig21_CleanupPolicyToJSON(
                message.cleanupPolicy
            ));
        message.compressionType !== undefined &&
            (obj.compressionType = compressionTypeToJSON(
                message.compressionType
            ));
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

    fromPartial(object: DeepPartial<Topicconfig21>): Topicconfig21 {
        const message = { ...baseTopicconfig21 } as Topicconfig21;
        if (
            object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null
        ) {
            message.cleanupPolicy = object.cleanupPolicy;
        } else {
            message.cleanupPolicy = 0;
        }
        if (
            object.compressionType !== undefined &&
            object.compressionType !== null
        ) {
            message.compressionType = object.compressionType;
        } else {
            message.compressionType = 0;
        }
        if (
            object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null
        ) {
            message.deleteRetentionMs = object.deleteRetentionMs;
        } else {
            message.deleteRetentionMs = undefined;
        }
        if (
            object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null
        ) {
            message.fileDeleteDelayMs = object.fileDeleteDelayMs;
        } else {
            message.fileDeleteDelayMs = undefined;
        }
        if (
            object.flushMessages !== undefined &&
            object.flushMessages !== null
        ) {
            message.flushMessages = object.flushMessages;
        } else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = object.flushMs;
        } else {
            message.flushMs = undefined;
        }
        if (
            object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null
        ) {
            message.minCompactionLagMs = object.minCompactionLagMs;
        } else {
            message.minCompactionLagMs = undefined;
        }
        if (
            object.retentionBytes !== undefined &&
            object.retentionBytes !== null
        ) {
            message.retentionBytes = object.retentionBytes;
        } else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = object.retentionMs;
        } else {
            message.retentionMs = undefined;
        }
        if (
            object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null
        ) {
            message.maxMessageBytes = object.maxMessageBytes;
        } else {
            message.maxMessageBytes = undefined;
        }
        if (
            object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null
        ) {
            message.minInsyncReplicas = object.minInsyncReplicas;
        } else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = object.segmentBytes;
        } else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = object.preallocate;
        } else {
            message.preallocate = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Topicconfig21.$type, Topicconfig21);

const baseTopicconfig26: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicConfig2_6',
    cleanupPolicy: 0,
    compressionType: 0,
};

export const Topicconfig26 = {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicConfig2_6' as const,

    encode(
        message: Topicconfig26,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.deleteRetentionMs!,
                },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.fileDeleteDelayMs!,
                },
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.flushMessages !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.flushMessages!,
                },
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.flushMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.flushMs!,
                },
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.minCompactionLagMs!,
                },
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.retentionBytes!,
                },
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.retentionMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.retentionMs!,
                },
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxMessageBytes!,
                },
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.minInsyncReplicas!,
                },
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.segmentBytes!,
                },
                writer.uint32(98).fork()
            ).ldelim();
        }
        if (message.preallocate !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.preallocate!,
                },
                writer.uint32(106).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Topicconfig26 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTopicconfig26 } as Topicconfig26;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cleanupPolicy = reader.int32() as any;
                    break;
                case 2:
                    message.compressionType = reader.int32() as any;
                    break;
                case 3:
                    message.deleteRetentionMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 5:
                    message.flushMessages = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 6:
                    message.flushMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 7:
                    message.minCompactionLagMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 8:
                    message.retentionBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 9:
                    message.retentionMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 10:
                    message.maxMessageBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 11:
                    message.minInsyncReplicas = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 12:
                    message.segmentBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 13:
                    message.preallocate = BoolValue.decode(
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

    fromJSON(object: any): Topicconfig26 {
        const message = { ...baseTopicconfig26 } as Topicconfig26;
        if (
            object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null
        ) {
            message.cleanupPolicy = topicconfig26_CleanupPolicyFromJSON(
                object.cleanupPolicy
            );
        } else {
            message.cleanupPolicy = 0;
        }
        if (
            object.compressionType !== undefined &&
            object.compressionType !== null
        ) {
            message.compressionType = compressionTypeFromJSON(
                object.compressionType
            );
        } else {
            message.compressionType = 0;
        }
        if (
            object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null
        ) {
            message.deleteRetentionMs = Number(object.deleteRetentionMs);
        } else {
            message.deleteRetentionMs = undefined;
        }
        if (
            object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null
        ) {
            message.fileDeleteDelayMs = Number(object.fileDeleteDelayMs);
        } else {
            message.fileDeleteDelayMs = undefined;
        }
        if (
            object.flushMessages !== undefined &&
            object.flushMessages !== null
        ) {
            message.flushMessages = Number(object.flushMessages);
        } else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = Number(object.flushMs);
        } else {
            message.flushMs = undefined;
        }
        if (
            object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null
        ) {
            message.minCompactionLagMs = Number(object.minCompactionLagMs);
        } else {
            message.minCompactionLagMs = undefined;
        }
        if (
            object.retentionBytes !== undefined &&
            object.retentionBytes !== null
        ) {
            message.retentionBytes = Number(object.retentionBytes);
        } else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = Number(object.retentionMs);
        } else {
            message.retentionMs = undefined;
        }
        if (
            object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null
        ) {
            message.maxMessageBytes = Number(object.maxMessageBytes);
        } else {
            message.maxMessageBytes = undefined;
        }
        if (
            object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null
        ) {
            message.minInsyncReplicas = Number(object.minInsyncReplicas);
        } else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = Number(object.segmentBytes);
        } else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = Boolean(object.preallocate);
        } else {
            message.preallocate = undefined;
        }
        return message;
    },

    toJSON(message: Topicconfig26): unknown {
        const obj: any = {};
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = topicconfig26_CleanupPolicyToJSON(
                message.cleanupPolicy
            ));
        message.compressionType !== undefined &&
            (obj.compressionType = compressionTypeToJSON(
                message.compressionType
            ));
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

    fromPartial(object: DeepPartial<Topicconfig26>): Topicconfig26 {
        const message = { ...baseTopicconfig26 } as Topicconfig26;
        if (
            object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null
        ) {
            message.cleanupPolicy = object.cleanupPolicy;
        } else {
            message.cleanupPolicy = 0;
        }
        if (
            object.compressionType !== undefined &&
            object.compressionType !== null
        ) {
            message.compressionType = object.compressionType;
        } else {
            message.compressionType = 0;
        }
        if (
            object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null
        ) {
            message.deleteRetentionMs = object.deleteRetentionMs;
        } else {
            message.deleteRetentionMs = undefined;
        }
        if (
            object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null
        ) {
            message.fileDeleteDelayMs = object.fileDeleteDelayMs;
        } else {
            message.fileDeleteDelayMs = undefined;
        }
        if (
            object.flushMessages !== undefined &&
            object.flushMessages !== null
        ) {
            message.flushMessages = object.flushMessages;
        } else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = object.flushMs;
        } else {
            message.flushMs = undefined;
        }
        if (
            object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null
        ) {
            message.minCompactionLagMs = object.minCompactionLagMs;
        } else {
            message.minCompactionLagMs = undefined;
        }
        if (
            object.retentionBytes !== undefined &&
            object.retentionBytes !== null
        ) {
            message.retentionBytes = object.retentionBytes;
        } else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = object.retentionMs;
        } else {
            message.retentionMs = undefined;
        }
        if (
            object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null
        ) {
            message.maxMessageBytes = object.maxMessageBytes;
        } else {
            message.maxMessageBytes = undefined;
        }
        if (
            object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null
        ) {
            message.minInsyncReplicas = object.minInsyncReplicas;
        } else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = object.segmentBytes;
        } else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = object.preallocate;
        } else {
            message.preallocate = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Topicconfig26.$type, Topicconfig26);

const baseTopicconfig28: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicConfig2_8',
    cleanupPolicy: 0,
    compressionType: 0,
};

export const Topicconfig28 = {
    $type: 'yandex.cloud.mdb.kafka.v1.TopicConfig2_8' as const,

    encode(
        message: Topicconfig28,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.cleanupPolicy !== 0) {
            writer.uint32(8).int32(message.cleanupPolicy);
        }
        if (message.compressionType !== 0) {
            writer.uint32(16).int32(message.compressionType);
        }
        if (message.deleteRetentionMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.deleteRetentionMs!,
                },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.fileDeleteDelayMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.fileDeleteDelayMs!,
                },
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.flushMessages !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.flushMessages!,
                },
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.flushMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.flushMs!,
                },
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.minCompactionLagMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.minCompactionLagMs!,
                },
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.retentionBytes !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.retentionBytes!,
                },
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.retentionMs !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.retentionMs!,
                },
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.maxMessageBytes !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxMessageBytes!,
                },
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.minInsyncReplicas !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.minInsyncReplicas!,
                },
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.segmentBytes !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.segmentBytes!,
                },
                writer.uint32(98).fork()
            ).ldelim();
        }
        if (message.preallocate !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.preallocate!,
                },
                writer.uint32(106).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Topicconfig28 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTopicconfig28 } as Topicconfig28;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cleanupPolicy = reader.int32() as any;
                    break;
                case 2:
                    message.compressionType = reader.int32() as any;
                    break;
                case 3:
                    message.deleteRetentionMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 4:
                    message.fileDeleteDelayMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 5:
                    message.flushMessages = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 6:
                    message.flushMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 7:
                    message.minCompactionLagMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 8:
                    message.retentionBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 9:
                    message.retentionMs = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 10:
                    message.maxMessageBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 11:
                    message.minInsyncReplicas = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 12:
                    message.segmentBytes = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 13:
                    message.preallocate = BoolValue.decode(
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

    fromJSON(object: any): Topicconfig28 {
        const message = { ...baseTopicconfig28 } as Topicconfig28;
        if (
            object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null
        ) {
            message.cleanupPolicy = topicconfig28_CleanupPolicyFromJSON(
                object.cleanupPolicy
            );
        } else {
            message.cleanupPolicy = 0;
        }
        if (
            object.compressionType !== undefined &&
            object.compressionType !== null
        ) {
            message.compressionType = compressionTypeFromJSON(
                object.compressionType
            );
        } else {
            message.compressionType = 0;
        }
        if (
            object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null
        ) {
            message.deleteRetentionMs = Number(object.deleteRetentionMs);
        } else {
            message.deleteRetentionMs = undefined;
        }
        if (
            object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null
        ) {
            message.fileDeleteDelayMs = Number(object.fileDeleteDelayMs);
        } else {
            message.fileDeleteDelayMs = undefined;
        }
        if (
            object.flushMessages !== undefined &&
            object.flushMessages !== null
        ) {
            message.flushMessages = Number(object.flushMessages);
        } else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = Number(object.flushMs);
        } else {
            message.flushMs = undefined;
        }
        if (
            object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null
        ) {
            message.minCompactionLagMs = Number(object.minCompactionLagMs);
        } else {
            message.minCompactionLagMs = undefined;
        }
        if (
            object.retentionBytes !== undefined &&
            object.retentionBytes !== null
        ) {
            message.retentionBytes = Number(object.retentionBytes);
        } else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = Number(object.retentionMs);
        } else {
            message.retentionMs = undefined;
        }
        if (
            object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null
        ) {
            message.maxMessageBytes = Number(object.maxMessageBytes);
        } else {
            message.maxMessageBytes = undefined;
        }
        if (
            object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null
        ) {
            message.minInsyncReplicas = Number(object.minInsyncReplicas);
        } else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = Number(object.segmentBytes);
        } else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = Boolean(object.preallocate);
        } else {
            message.preallocate = undefined;
        }
        return message;
    },

    toJSON(message: Topicconfig28): unknown {
        const obj: any = {};
        message.cleanupPolicy !== undefined &&
            (obj.cleanupPolicy = topicconfig28_CleanupPolicyToJSON(
                message.cleanupPolicy
            ));
        message.compressionType !== undefined &&
            (obj.compressionType = compressionTypeToJSON(
                message.compressionType
            ));
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

    fromPartial(object: DeepPartial<Topicconfig28>): Topicconfig28 {
        const message = { ...baseTopicconfig28 } as Topicconfig28;
        if (
            object.cleanupPolicy !== undefined &&
            object.cleanupPolicy !== null
        ) {
            message.cleanupPolicy = object.cleanupPolicy;
        } else {
            message.cleanupPolicy = 0;
        }
        if (
            object.compressionType !== undefined &&
            object.compressionType !== null
        ) {
            message.compressionType = object.compressionType;
        } else {
            message.compressionType = 0;
        }
        if (
            object.deleteRetentionMs !== undefined &&
            object.deleteRetentionMs !== null
        ) {
            message.deleteRetentionMs = object.deleteRetentionMs;
        } else {
            message.deleteRetentionMs = undefined;
        }
        if (
            object.fileDeleteDelayMs !== undefined &&
            object.fileDeleteDelayMs !== null
        ) {
            message.fileDeleteDelayMs = object.fileDeleteDelayMs;
        } else {
            message.fileDeleteDelayMs = undefined;
        }
        if (
            object.flushMessages !== undefined &&
            object.flushMessages !== null
        ) {
            message.flushMessages = object.flushMessages;
        } else {
            message.flushMessages = undefined;
        }
        if (object.flushMs !== undefined && object.flushMs !== null) {
            message.flushMs = object.flushMs;
        } else {
            message.flushMs = undefined;
        }
        if (
            object.minCompactionLagMs !== undefined &&
            object.minCompactionLagMs !== null
        ) {
            message.minCompactionLagMs = object.minCompactionLagMs;
        } else {
            message.minCompactionLagMs = undefined;
        }
        if (
            object.retentionBytes !== undefined &&
            object.retentionBytes !== null
        ) {
            message.retentionBytes = object.retentionBytes;
        } else {
            message.retentionBytes = undefined;
        }
        if (object.retentionMs !== undefined && object.retentionMs !== null) {
            message.retentionMs = object.retentionMs;
        } else {
            message.retentionMs = undefined;
        }
        if (
            object.maxMessageBytes !== undefined &&
            object.maxMessageBytes !== null
        ) {
            message.maxMessageBytes = object.maxMessageBytes;
        } else {
            message.maxMessageBytes = undefined;
        }
        if (
            object.minInsyncReplicas !== undefined &&
            object.minInsyncReplicas !== null
        ) {
            message.minInsyncReplicas = object.minInsyncReplicas;
        } else {
            message.minInsyncReplicas = undefined;
        }
        if (object.segmentBytes !== undefined && object.segmentBytes !== null) {
            message.segmentBytes = object.segmentBytes;
        } else {
            message.segmentBytes = undefined;
        }
        if (object.preallocate !== undefined && object.preallocate !== null) {
            message.preallocate = object.preallocate;
        } else {
            message.preallocate = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Topicconfig28.$type, Topicconfig28);

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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
