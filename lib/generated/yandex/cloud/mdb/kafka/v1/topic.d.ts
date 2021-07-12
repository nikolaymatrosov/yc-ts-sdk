import { CompressionType } from '../../../../../yandex/cloud/mdb/kafka/v1/common';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
/**
 * An Kafka topic.
 * For more information, see the [Concepts -> Topics and partitions](/docs/managed-kafka/concepts/topics) section of the documentation.
 */
export interface Topic {
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
}
export interface TopicSpec {
    /** Name of the topic. */
    name: string;
    /** The number of the topic's partitions. */
    partitions: number | undefined;
    /** Amount of copies of a topic data kept in the cluster. */
    replicationFactor: number | undefined;
    topicConfig21: Topicconfig21 | undefined;
    topicConfig26: Topicconfig26 | undefined;
}
/** A topic settings for 2.1. */
export interface Topicconfig21 {
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
export declare enum Topicconfig21_CleanupPolicy {
    CLEANUP_POLICY_UNSPECIFIED = 0,
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    CLEANUP_POLICY_DELETE = 1,
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    CLEANUP_POLICY_COMPACT = 2,
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    CLEANUP_POLICY_COMPACT_AND_DELETE = 3,
    UNRECOGNIZED = -1
}
export declare function topicconfig21_CleanupPolicyFromJSON(object: any): Topicconfig21_CleanupPolicy;
export declare function topicconfig21_CleanupPolicyToJSON(object: Topicconfig21_CleanupPolicy): string;
/** A topic settings for 2.6 */
export interface Topicconfig26 {
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
export declare enum Topicconfig26_CleanupPolicy {
    CLEANUP_POLICY_UNSPECIFIED = 0,
    /** CLEANUP_POLICY_DELETE - this policy discards log segments when either their retention time or log size limit is reached. See also: [KafkaConfig2_1.log_retention_ms] and other similar parameters. */
    CLEANUP_POLICY_DELETE = 1,
    /** CLEANUP_POLICY_COMPACT - this policy compacts messages in log. */
    CLEANUP_POLICY_COMPACT = 2,
    /** CLEANUP_POLICY_COMPACT_AND_DELETE - this policy use both compaction and deletion for messages and log segments. */
    CLEANUP_POLICY_COMPACT_AND_DELETE = 3,
    UNRECOGNIZED = -1
}
export declare function topicconfig26_CleanupPolicyFromJSON(object: any): Topicconfig26_CleanupPolicy;
export declare function topicconfig26_CleanupPolicyToJSON(object: Topicconfig26_CleanupPolicy): string;
export declare const Topic: {
    encode(message: Topic, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Topic;
    fromJSON(object: any): Topic;
    toJSON(message: Topic): unknown;
    fromPartial(object: DeepPartial<Topic>): Topic;
};
export declare const TopicSpec: {
    encode(message: TopicSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TopicSpec;
    fromJSON(object: any): TopicSpec;
    toJSON(message: TopicSpec): unknown;
    fromPartial(object: DeepPartial<TopicSpec>): TopicSpec;
};
export declare const Topicconfig21: {
    encode(message: Topicconfig21, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Topicconfig21;
    fromJSON(object: any): Topicconfig21;
    toJSON(message: Topicconfig21): unknown;
    fromPartial(object: DeepPartial<Topicconfig21>): Topicconfig21;
};
export declare const Topicconfig26: {
    encode(message: Topicconfig26, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Topicconfig26;
    fromJSON(object: any): Topicconfig26;
    toJSON(message: Topicconfig26): unknown;
    fromPartial(object: DeepPartial<Topicconfig26>): Topicconfig26;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
