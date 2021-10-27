/* eslint-disable */
import { Int64Value } from '../../../../../google/protobuf/wrappers';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.kafka.v1';

/** An Apache Kafka® connector specification */
export interface ConnectorSpec {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorSpec';
    /** Name of the connector. */
    name: string;
    /**
     * Maximum number of connector tasks.
     * Default is the number of brokers.
     */
    tasksMax: number | undefined;
    /**
     * Properties passed with connector config to Connect service.
     * Example: 'sync.topics.config.enabled: true'.
     */
    properties: { [key: string]: string };
    /** Configuration of MirrorMaker connector */
    connectorConfigMirrormaker: ConnectorConfigMirrorMakerSpec | undefined;
}

export interface ConnectorSpec_PropertiesEntry {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry';
    key: string;
    value: string;
}

/**
 * An An Apache Kafka® MirrorMaker
 * connector specification.
 */
export interface ConnectorConfigMirrorMakerSpec {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec';
    /** Source cluster configuration. */
    sourceCluster: ClusterConnectionSpec | undefined;
    /** Target cluster configuration. */
    targetCluster: ClusterConnectionSpec | undefined;
    /** List of Kafka topics, separated by ',' */
    topics: string;
    /** Replication factor for automatically created topics. */
    replicationFactor: number | undefined;
}

/**
 * Specification of ClusterConnection -
 * connection to clusters, that
 * are source or target of MirrorMaker
 * clusters.
 */
export interface ClusterConnectionSpec {
    $type: 'yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec';
    /**
     * Alias of ClusterConnection.
     * For example: 'source', 'target', ...
     */
    alias: string;
    /**
     * If type is 'this_cluster' - we connect to
     * cluster that is handle Kafka Connect Worker,
     * on which we try to register connector.
     */
    thisCluster: ThisClusterSpec | undefined;
    /**
     * If type is 'external_cluster' - we connect
     * to cluster that is not handle Kafka Connect Worker,
     * on which we try to register connector.
     */
    externalCluster: ExternalClusterConnectionSpec | undefined;
}

/**
 * Specification of cluster_connection
 * type 'this_cluster'. This means
 * that we already have all credentials,
 * so this spec is empty.
 */
export interface ThisClusterSpec {
    $type: 'yandex.cloud.mdb.kafka.v1.ThisClusterSpec';
}

/**
 * Specification of connection to
 * external cluster. It contains
 * all necessary credentials to
 * connect to external cluster.
 */
export interface ExternalClusterConnectionSpec {
    $type: 'yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec';
    /**
     * List bootstrap servers of cluster,
     * separated by ','.
     */
    bootstrapServers: string;
    /**
     * Sasl username which
     * we use to connect to cluster.
     */
    saslUsername: string;
    /**
     * Sasl password which we use
     * to connect to cluster.
     */
    saslPassword: string;
    /**
     * Sasl mechanism, which we
     * should use to connect to cluster.
     */
    saslMechanism: string;
    /**
     * Security protocol, which
     * we should use to connect
     * to cluster.
     */
    securityProtocol: string;
}

/** An Apache Kafka® connector resource. */
export interface Connector {
    $type: 'yandex.cloud.mdb.kafka.v1.Connector';
    /** Name of the connector. */
    name: string;
    /** Maximum number of tasks. Default is the number of brokers */
    tasksMax: number | undefined;
    /**
     * Properties passed with connector config to Connect service
     * Example: 'sync.topics.config.enabled: true'
     */
    properties: { [key: string]: string };
    /** Connector health. */
    health: Connector_Health;
    /** Current status of the connector. */
    status: Connector_Status;
    /** ID of the Apache Kafka cluster that the connector belongs to. */
    clusterId: string;
    connectorConfigMirrormaker: ConnectorConfigMirrorMaker | undefined;
}

export enum Connector_Health {
    /** HEALTH_UNKNOWN - State of the connector is unknown. */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Connector is running. */
    ALIVE = 1,
    /** DEAD - Connector is failed to start. */
    DEAD = 2,
    UNRECOGNIZED = -1,
}

export function connector_HealthFromJSON(object: any): Connector_Health {
    switch (object) {
        case 0:
        case 'HEALTH_UNKNOWN':
            return Connector_Health.HEALTH_UNKNOWN;
        case 1:
        case 'ALIVE':
            return Connector_Health.ALIVE;
        case 2:
        case 'DEAD':
            return Connector_Health.DEAD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Connector_Health.UNRECOGNIZED;
    }
}

export function connector_HealthToJSON(object: Connector_Health): string {
    switch (object) {
        case Connector_Health.HEALTH_UNKNOWN:
            return 'HEALTH_UNKNOWN';
        case Connector_Health.ALIVE:
            return 'ALIVE';
        case Connector_Health.DEAD:
            return 'DEAD';
        default:
            return 'UNKNOWN';
    }
}

export enum Connector_Status {
    /** STATUS_UNKNOWN - Connector state is unknown. */
    STATUS_UNKNOWN = 0,
    /** RUNNING - Connector is running normally. */
    RUNNING = 1,
    /** ERROR - Connector encountered a problem and cannot operate. */
    ERROR = 2,
    /** PAUSED - Connector paused. */
    PAUSED = 3,
    UNRECOGNIZED = -1,
}

export function connector_StatusFromJSON(object: any): Connector_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNKNOWN':
            return Connector_Status.STATUS_UNKNOWN;
        case 1:
        case 'RUNNING':
            return Connector_Status.RUNNING;
        case 2:
        case 'ERROR':
            return Connector_Status.ERROR;
        case 3:
        case 'PAUSED':
            return Connector_Status.PAUSED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Connector_Status.UNRECOGNIZED;
    }
}

export function connector_StatusToJSON(object: Connector_Status): string {
    switch (object) {
        case Connector_Status.STATUS_UNKNOWN:
            return 'STATUS_UNKNOWN';
        case Connector_Status.RUNNING:
            return 'RUNNING';
        case Connector_Status.ERROR:
            return 'ERROR';
        case Connector_Status.PAUSED:
            return 'PAUSED';
        default:
            return 'UNKNOWN';
    }
}

export interface Connector_PropertiesEntry {
    $type: 'yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry';
    key: string;
    value: string;
}

/**
 * An An Apache Kafka® MirrorMaker
 * connector resource.
 */
export interface ConnectorConfigMirrorMaker {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker';
    /**
     * Source cluster resource
     * settings.
     */
    sourceCluster: ClusterConnection | undefined;
    /**
     * Target cluster resource
     * settings.
     */
    targetCluster: ClusterConnection | undefined;
    /** List of Kafka topics, separated by ',' */
    topics: string;
    /** Replication factor for automatically created topics. */
    replicationFactor: number | undefined;
}

/**
 * Resource ClusterConnection -
 * settings of
 * connection to clusters, that
 * are source or target of MirrorMaker
 * clusters.
 */
export interface ClusterConnection {
    $type: 'yandex.cloud.mdb.kafka.v1.ClusterConnection';
    /**
     * Alias of ClusterConnection resource.
     * For example: 'source', 'target', ...
     */
    alias: string;
    /**
     * If type is 'this_cluster' - we connect to
     * cluster that is handle Kafka Connect Worker,
     * on which we try to register connector.
     */
    thisCluster: ThisCluster | undefined;
    /**
     * If type is 'external_cluster' - we connect
     * to cluster that is not handle Kafka Connect Worker,
     * on which we try to register connector.
     */
    externalCluster: ExternalClusterConnection | undefined;
}

/**
 * Resource of cluster_connection
 * type 'this_cluster'.
 */
export interface ThisCluster {
    $type: 'yandex.cloud.mdb.kafka.v1.ThisCluster';
}

/**
 * Resource of connection to
 * external cluster. It contains
 * all settings of connection
 * to external cluster.
 */
export interface ExternalClusterConnection {
    $type: 'yandex.cloud.mdb.kafka.v1.ExternalClusterConnection';
    /**
     * List bootstrap servers of cluster,
     * separated by ','
     */
    bootstrapServers: string;
    /**
     * Sasl username which
     * we use to connect to cluster.
     */
    saslUsername: string;
    /**
     * Sasl mechanism, which we
     * should use to connect to cluster.
     */
    saslMechanism: string;
    /**
     * Security protocol, which
     * we should use to connect
     * to cluster.
     */
    securityProtocol: string;
}

const baseConnectorSpec: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorSpec',
    name: '',
};

export const ConnectorSpec = {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorSpec' as const,

    encode(
        message: ConnectorSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.tasksMax !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.tasksMax!,
                },
                writer.uint32(18).fork()
            ).ldelim();
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            ConnectorSpec_PropertiesEntry.encode(
                {
                    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(26).fork()
            ).ldelim();
        });
        if (message.connectorConfigMirrormaker !== undefined) {
            ConnectorConfigMirrorMakerSpec.encode(
                message.connectorConfigMirrormaker,
                writer.uint32(82).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectorSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectorSpec } as ConnectorSpec;
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.tasksMax = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    const entry3 = ConnectorSpec_PropertiesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry3.value !== undefined) {
                        message.properties[entry3.key] = entry3.value;
                    }
                    break;
                case 10:
                    message.connectorConfigMirrormaker =
                        ConnectorConfigMirrorMakerSpec.decode(
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

    fromJSON(object: any): ConnectorSpec {
        const message = { ...baseConnectorSpec } as ConnectorSpec;
        message.properties = {};
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.tasksMax !== undefined && object.tasksMax !== null) {
            message.tasksMax = Number(object.tasksMax);
        } else {
            message.tasksMax = undefined;
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (
            object.connectorConfigMirrormaker !== undefined &&
            object.connectorConfigMirrormaker !== null
        ) {
            message.connectorConfigMirrormaker =
                ConnectorConfigMirrorMakerSpec.fromJSON(
                    object.connectorConfigMirrormaker
                );
        } else {
            message.connectorConfigMirrormaker = undefined;
        }
        return message;
    },

    toJSON(message: ConnectorSpec): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.tasksMax !== undefined && (obj.tasksMax = message.tasksMax);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.connectorConfigMirrormaker !== undefined &&
            (obj.connectorConfigMirrormaker = message.connectorConfigMirrormaker
                ? ConnectorConfigMirrorMakerSpec.toJSON(
                      message.connectorConfigMirrormaker
                  )
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<ConnectorSpec>): ConnectorSpec {
        const message = { ...baseConnectorSpec } as ConnectorSpec;
        message.properties = {};
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.tasksMax !== undefined && object.tasksMax !== null) {
            message.tasksMax = object.tasksMax;
        } else {
            message.tasksMax = undefined;
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (
            object.connectorConfigMirrormaker !== undefined &&
            object.connectorConfigMirrormaker !== null
        ) {
            message.connectorConfigMirrormaker =
                ConnectorConfigMirrorMakerSpec.fromPartial(
                    object.connectorConfigMirrormaker
                );
        } else {
            message.connectorConfigMirrormaker = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(ConnectorSpec.$type, ConnectorSpec);

const baseConnectorSpec_PropertiesEntry: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry',
    key: '',
    value: '',
};

export const ConnectorSpec_PropertiesEntry = {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry' as const,

    encode(
        message: ConnectorSpec_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ConnectorSpec_PropertiesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseConnectorSpec_PropertiesEntry,
        } as ConnectorSpec_PropertiesEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConnectorSpec_PropertiesEntry {
        const message = {
            ...baseConnectorSpec_PropertiesEntry,
        } as ConnectorSpec_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: ConnectorSpec_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ConnectorSpec_PropertiesEntry>
    ): ConnectorSpec_PropertiesEntry {
        const message = {
            ...baseConnectorSpec_PropertiesEntry,
        } as ConnectorSpec_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    ConnectorSpec_PropertiesEntry.$type,
    ConnectorSpec_PropertiesEntry
);

const baseConnectorConfigMirrorMakerSpec: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec',
    topics: '',
};

export const ConnectorConfigMirrorMakerSpec = {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec' as const,

    encode(
        message: ConnectorConfigMirrorMakerSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sourceCluster !== undefined) {
            ClusterConnectionSpec.encode(
                message.sourceCluster,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.targetCluster !== undefined) {
            ClusterConnectionSpec.encode(
                message.targetCluster,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.topics !== '') {
            writer.uint32(26).string(message.topics);
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
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ConnectorConfigMirrorMakerSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseConnectorConfigMirrorMakerSpec,
        } as ConnectorConfigMirrorMakerSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceCluster = ClusterConnectionSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.targetCluster = ClusterConnectionSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.topics = reader.string();
                    break;
                case 4:
                    message.replicationFactor = Int64Value.decode(
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

    fromJSON(object: any): ConnectorConfigMirrorMakerSpec {
        const message = {
            ...baseConnectorConfigMirrorMakerSpec,
        } as ConnectorConfigMirrorMakerSpec;
        if (
            object.sourceCluster !== undefined &&
            object.sourceCluster !== null
        ) {
            message.sourceCluster = ClusterConnectionSpec.fromJSON(
                object.sourceCluster
            );
        } else {
            message.sourceCluster = undefined;
        }
        if (
            object.targetCluster !== undefined &&
            object.targetCluster !== null
        ) {
            message.targetCluster = ClusterConnectionSpec.fromJSON(
                object.targetCluster
            );
        } else {
            message.targetCluster = undefined;
        }
        if (object.topics !== undefined && object.topics !== null) {
            message.topics = String(object.topics);
        } else {
            message.topics = '';
        }
        if (
            object.replicationFactor !== undefined &&
            object.replicationFactor !== null
        ) {
            message.replicationFactor = Number(object.replicationFactor);
        } else {
            message.replicationFactor = undefined;
        }
        return message;
    },

    toJSON(message: ConnectorConfigMirrorMakerSpec): unknown {
        const obj: any = {};
        message.sourceCluster !== undefined &&
            (obj.sourceCluster = message.sourceCluster
                ? ClusterConnectionSpec.toJSON(message.sourceCluster)
                : undefined);
        message.targetCluster !== undefined &&
            (obj.targetCluster = message.targetCluster
                ? ClusterConnectionSpec.toJSON(message.targetCluster)
                : undefined);
        message.topics !== undefined && (obj.topics = message.topics);
        message.replicationFactor !== undefined &&
            (obj.replicationFactor = message.replicationFactor);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ConnectorConfigMirrorMakerSpec>
    ): ConnectorConfigMirrorMakerSpec {
        const message = {
            ...baseConnectorConfigMirrorMakerSpec,
        } as ConnectorConfigMirrorMakerSpec;
        if (
            object.sourceCluster !== undefined &&
            object.sourceCluster !== null
        ) {
            message.sourceCluster = ClusterConnectionSpec.fromPartial(
                object.sourceCluster
            );
        } else {
            message.sourceCluster = undefined;
        }
        if (
            object.targetCluster !== undefined &&
            object.targetCluster !== null
        ) {
            message.targetCluster = ClusterConnectionSpec.fromPartial(
                object.targetCluster
            );
        } else {
            message.targetCluster = undefined;
        }
        if (object.topics !== undefined && object.topics !== null) {
            message.topics = object.topics;
        } else {
            message.topics = '';
        }
        if (
            object.replicationFactor !== undefined &&
            object.replicationFactor !== null
        ) {
            message.replicationFactor = object.replicationFactor;
        } else {
            message.replicationFactor = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ConnectorConfigMirrorMakerSpec.$type,
    ConnectorConfigMirrorMakerSpec
);

const baseClusterConnectionSpec: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec',
    alias: '',
};

export const ClusterConnectionSpec = {
    $type: 'yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec' as const,

    encode(
        message: ClusterConnectionSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.alias !== '') {
            writer.uint32(10).string(message.alias);
        }
        if (message.thisCluster !== undefined) {
            ThisClusterSpec.encode(
                message.thisCluster,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.externalCluster !== undefined) {
            ExternalClusterConnectionSpec.encode(
                message.externalCluster,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClusterConnectionSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClusterConnectionSpec,
        } as ClusterConnectionSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alias = reader.string();
                    break;
                case 2:
                    message.thisCluster = ThisClusterSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.externalCluster =
                        ExternalClusterConnectionSpec.decode(
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

    fromJSON(object: any): ClusterConnectionSpec {
        const message = {
            ...baseClusterConnectionSpec,
        } as ClusterConnectionSpec;
        if (object.alias !== undefined && object.alias !== null) {
            message.alias = String(object.alias);
        } else {
            message.alias = '';
        }
        if (object.thisCluster !== undefined && object.thisCluster !== null) {
            message.thisCluster = ThisClusterSpec.fromJSON(object.thisCluster);
        } else {
            message.thisCluster = undefined;
        }
        if (
            object.externalCluster !== undefined &&
            object.externalCluster !== null
        ) {
            message.externalCluster = ExternalClusterConnectionSpec.fromJSON(
                object.externalCluster
            );
        } else {
            message.externalCluster = undefined;
        }
        return message;
    },

    toJSON(message: ClusterConnectionSpec): unknown {
        const obj: any = {};
        message.alias !== undefined && (obj.alias = message.alias);
        message.thisCluster !== undefined &&
            (obj.thisCluster = message.thisCluster
                ? ThisClusterSpec.toJSON(message.thisCluster)
                : undefined);
        message.externalCluster !== undefined &&
            (obj.externalCluster = message.externalCluster
                ? ExternalClusterConnectionSpec.toJSON(message.externalCluster)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClusterConnectionSpec>
    ): ClusterConnectionSpec {
        const message = {
            ...baseClusterConnectionSpec,
        } as ClusterConnectionSpec;
        if (object.alias !== undefined && object.alias !== null) {
            message.alias = object.alias;
        } else {
            message.alias = '';
        }
        if (object.thisCluster !== undefined && object.thisCluster !== null) {
            message.thisCluster = ThisClusterSpec.fromPartial(
                object.thisCluster
            );
        } else {
            message.thisCluster = undefined;
        }
        if (
            object.externalCluster !== undefined &&
            object.externalCluster !== null
        ) {
            message.externalCluster = ExternalClusterConnectionSpec.fromPartial(
                object.externalCluster
            );
        } else {
            message.externalCluster = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(ClusterConnectionSpec.$type, ClusterConnectionSpec);

const baseThisClusterSpec: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ThisClusterSpec',
};

export const ThisClusterSpec = {
    $type: 'yandex.cloud.mdb.kafka.v1.ThisClusterSpec' as const,

    encode(
        _: ThisClusterSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ThisClusterSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseThisClusterSpec } as ThisClusterSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): ThisClusterSpec {
        const message = { ...baseThisClusterSpec } as ThisClusterSpec;
        return message;
    },

    toJSON(_: ThisClusterSpec): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<ThisClusterSpec>): ThisClusterSpec {
        const message = { ...baseThisClusterSpec } as ThisClusterSpec;
        return message;
    },
};

messageTypeRegistry.set(ThisClusterSpec.$type, ThisClusterSpec);

const baseExternalClusterConnectionSpec: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec',
    bootstrapServers: '',
    saslUsername: '',
    saslPassword: '',
    saslMechanism: '',
    securityProtocol: '',
};

export const ExternalClusterConnectionSpec = {
    $type: 'yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec' as const,

    encode(
        message: ExternalClusterConnectionSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.bootstrapServers !== '') {
            writer.uint32(10).string(message.bootstrapServers);
        }
        if (message.saslUsername !== '') {
            writer.uint32(18).string(message.saslUsername);
        }
        if (message.saslPassword !== '') {
            writer.uint32(26).string(message.saslPassword);
        }
        if (message.saslMechanism !== '') {
            writer.uint32(34).string(message.saslMechanism);
        }
        if (message.securityProtocol !== '') {
            writer.uint32(42).string(message.securityProtocol);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ExternalClusterConnectionSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalClusterConnectionSpec,
        } as ExternalClusterConnectionSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bootstrapServers = reader.string();
                    break;
                case 2:
                    message.saslUsername = reader.string();
                    break;
                case 3:
                    message.saslPassword = reader.string();
                    break;
                case 4:
                    message.saslMechanism = reader.string();
                    break;
                case 5:
                    message.securityProtocol = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalClusterConnectionSpec {
        const message = {
            ...baseExternalClusterConnectionSpec,
        } as ExternalClusterConnectionSpec;
        if (
            object.bootstrapServers !== undefined &&
            object.bootstrapServers !== null
        ) {
            message.bootstrapServers = String(object.bootstrapServers);
        } else {
            message.bootstrapServers = '';
        }
        if (object.saslUsername !== undefined && object.saslUsername !== null) {
            message.saslUsername = String(object.saslUsername);
        } else {
            message.saslUsername = '';
        }
        if (object.saslPassword !== undefined && object.saslPassword !== null) {
            message.saslPassword = String(object.saslPassword);
        } else {
            message.saslPassword = '';
        }
        if (
            object.saslMechanism !== undefined &&
            object.saslMechanism !== null
        ) {
            message.saslMechanism = String(object.saslMechanism);
        } else {
            message.saslMechanism = '';
        }
        if (
            object.securityProtocol !== undefined &&
            object.securityProtocol !== null
        ) {
            message.securityProtocol = String(object.securityProtocol);
        } else {
            message.securityProtocol = '';
        }
        return message;
    },

    toJSON(message: ExternalClusterConnectionSpec): unknown {
        const obj: any = {};
        message.bootstrapServers !== undefined &&
            (obj.bootstrapServers = message.bootstrapServers);
        message.saslUsername !== undefined &&
            (obj.saslUsername = message.saslUsername);
        message.saslPassword !== undefined &&
            (obj.saslPassword = message.saslPassword);
        message.saslMechanism !== undefined &&
            (obj.saslMechanism = message.saslMechanism);
        message.securityProtocol !== undefined &&
            (obj.securityProtocol = message.securityProtocol);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ExternalClusterConnectionSpec>
    ): ExternalClusterConnectionSpec {
        const message = {
            ...baseExternalClusterConnectionSpec,
        } as ExternalClusterConnectionSpec;
        if (
            object.bootstrapServers !== undefined &&
            object.bootstrapServers !== null
        ) {
            message.bootstrapServers = object.bootstrapServers;
        } else {
            message.bootstrapServers = '';
        }
        if (object.saslUsername !== undefined && object.saslUsername !== null) {
            message.saslUsername = object.saslUsername;
        } else {
            message.saslUsername = '';
        }
        if (object.saslPassword !== undefined && object.saslPassword !== null) {
            message.saslPassword = object.saslPassword;
        } else {
            message.saslPassword = '';
        }
        if (
            object.saslMechanism !== undefined &&
            object.saslMechanism !== null
        ) {
            message.saslMechanism = object.saslMechanism;
        } else {
            message.saslMechanism = '';
        }
        if (
            object.securityProtocol !== undefined &&
            object.securityProtocol !== null
        ) {
            message.securityProtocol = object.securityProtocol;
        } else {
            message.securityProtocol = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    ExternalClusterConnectionSpec.$type,
    ExternalClusterConnectionSpec
);

const baseConnector: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.Connector',
    name: '',
    health: 0,
    status: 0,
    clusterId: '',
};

export const Connector = {
    $type: 'yandex.cloud.mdb.kafka.v1.Connector' as const,

    encode(
        message: Connector,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.tasksMax !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.tasksMax!,
                },
                writer.uint32(18).fork()
            ).ldelim();
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            Connector_PropertiesEntry.encode(
                {
                    $type: 'yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(26).fork()
            ).ldelim();
        });
        if (message.health !== 0) {
            writer.uint32(32).int32(message.health);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.clusterId !== '') {
            writer.uint32(50).string(message.clusterId);
        }
        if (message.connectorConfigMirrormaker !== undefined) {
            ConnectorConfigMirrorMaker.encode(
                message.connectorConfigMirrormaker,
                writer.uint32(82).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Connector {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnector } as Connector;
        message.properties = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.tasksMax = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    const entry3 = Connector_PropertiesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry3.value !== undefined) {
                        message.properties[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.health = reader.int32() as any;
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.clusterId = reader.string();
                    break;
                case 10:
                    message.connectorConfigMirrormaker =
                        ConnectorConfigMirrorMaker.decode(
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

    fromJSON(object: any): Connector {
        const message = { ...baseConnector } as Connector;
        message.properties = {};
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.tasksMax !== undefined && object.tasksMax !== null) {
            message.tasksMax = Number(object.tasksMax);
        } else {
            message.tasksMax = undefined;
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                message.properties[key] = String(value);
            });
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = connector_HealthFromJSON(object.health);
        } else {
            message.health = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = connector_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorConfigMirrormaker !== undefined &&
            object.connectorConfigMirrormaker !== null
        ) {
            message.connectorConfigMirrormaker =
                ConnectorConfigMirrorMaker.fromJSON(
                    object.connectorConfigMirrormaker
                );
        } else {
            message.connectorConfigMirrormaker = undefined;
        }
        return message;
    },

    toJSON(message: Connector): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.tasksMax !== undefined && (obj.tasksMax = message.tasksMax);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        message.health !== undefined &&
            (obj.health = connector_HealthToJSON(message.health));
        message.status !== undefined &&
            (obj.status = connector_StatusToJSON(message.status));
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.connectorConfigMirrormaker !== undefined &&
            (obj.connectorConfigMirrormaker = message.connectorConfigMirrormaker
                ? ConnectorConfigMirrorMaker.toJSON(
                      message.connectorConfigMirrormaker
                  )
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Connector>): Connector {
        const message = { ...baseConnector } as Connector;
        message.properties = {};
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.tasksMax !== undefined && object.tasksMax !== null) {
            message.tasksMax = object.tasksMax;
        } else {
            message.tasksMax = undefined;
        }
        if (object.properties !== undefined && object.properties !== null) {
            Object.entries(object.properties).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.properties[key] = String(value);
                }
            });
        }
        if (object.health !== undefined && object.health !== null) {
            message.health = object.health;
        } else {
            message.health = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.connectorConfigMirrormaker !== undefined &&
            object.connectorConfigMirrormaker !== null
        ) {
            message.connectorConfigMirrormaker =
                ConnectorConfigMirrorMaker.fromPartial(
                    object.connectorConfigMirrormaker
                );
        } else {
            message.connectorConfigMirrormaker = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Connector.$type, Connector);

const baseConnector_PropertiesEntry: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry',
    key: '',
    value: '',
};

export const Connector_PropertiesEntry = {
    $type: 'yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry' as const,

    encode(
        message: Connector_PropertiesEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Connector_PropertiesEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseConnector_PropertiesEntry,
        } as Connector_PropertiesEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Connector_PropertiesEntry {
        const message = {
            ...baseConnector_PropertiesEntry,
        } as Connector_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: Connector_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Connector_PropertiesEntry>
    ): Connector_PropertiesEntry {
        const message = {
            ...baseConnector_PropertiesEntry,
        } as Connector_PropertiesEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    Connector_PropertiesEntry.$type,
    Connector_PropertiesEntry
);

const baseConnectorConfigMirrorMaker: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker',
    topics: '',
};

export const ConnectorConfigMirrorMaker = {
    $type: 'yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker' as const,

    encode(
        message: ConnectorConfigMirrorMaker,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sourceCluster !== undefined) {
            ClusterConnection.encode(
                message.sourceCluster,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.targetCluster !== undefined) {
            ClusterConnection.encode(
                message.targetCluster,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.topics !== '') {
            writer.uint32(26).string(message.topics);
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
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ConnectorConfigMirrorMaker {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseConnectorConfigMirrorMaker,
        } as ConnectorConfigMirrorMaker;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceCluster = ClusterConnection.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.targetCluster = ClusterConnection.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.topics = reader.string();
                    break;
                case 4:
                    message.replicationFactor = Int64Value.decode(
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

    fromJSON(object: any): ConnectorConfigMirrorMaker {
        const message = {
            ...baseConnectorConfigMirrorMaker,
        } as ConnectorConfigMirrorMaker;
        if (
            object.sourceCluster !== undefined &&
            object.sourceCluster !== null
        ) {
            message.sourceCluster = ClusterConnection.fromJSON(
                object.sourceCluster
            );
        } else {
            message.sourceCluster = undefined;
        }
        if (
            object.targetCluster !== undefined &&
            object.targetCluster !== null
        ) {
            message.targetCluster = ClusterConnection.fromJSON(
                object.targetCluster
            );
        } else {
            message.targetCluster = undefined;
        }
        if (object.topics !== undefined && object.topics !== null) {
            message.topics = String(object.topics);
        } else {
            message.topics = '';
        }
        if (
            object.replicationFactor !== undefined &&
            object.replicationFactor !== null
        ) {
            message.replicationFactor = Number(object.replicationFactor);
        } else {
            message.replicationFactor = undefined;
        }
        return message;
    },

    toJSON(message: ConnectorConfigMirrorMaker): unknown {
        const obj: any = {};
        message.sourceCluster !== undefined &&
            (obj.sourceCluster = message.sourceCluster
                ? ClusterConnection.toJSON(message.sourceCluster)
                : undefined);
        message.targetCluster !== undefined &&
            (obj.targetCluster = message.targetCluster
                ? ClusterConnection.toJSON(message.targetCluster)
                : undefined);
        message.topics !== undefined && (obj.topics = message.topics);
        message.replicationFactor !== undefined &&
            (obj.replicationFactor = message.replicationFactor);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ConnectorConfigMirrorMaker>
    ): ConnectorConfigMirrorMaker {
        const message = {
            ...baseConnectorConfigMirrorMaker,
        } as ConnectorConfigMirrorMaker;
        if (
            object.sourceCluster !== undefined &&
            object.sourceCluster !== null
        ) {
            message.sourceCluster = ClusterConnection.fromPartial(
                object.sourceCluster
            );
        } else {
            message.sourceCluster = undefined;
        }
        if (
            object.targetCluster !== undefined &&
            object.targetCluster !== null
        ) {
            message.targetCluster = ClusterConnection.fromPartial(
                object.targetCluster
            );
        } else {
            message.targetCluster = undefined;
        }
        if (object.topics !== undefined && object.topics !== null) {
            message.topics = object.topics;
        } else {
            message.topics = '';
        }
        if (
            object.replicationFactor !== undefined &&
            object.replicationFactor !== null
        ) {
            message.replicationFactor = object.replicationFactor;
        } else {
            message.replicationFactor = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ConnectorConfigMirrorMaker.$type,
    ConnectorConfigMirrorMaker
);

const baseClusterConnection: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ClusterConnection',
    alias: '',
};

export const ClusterConnection = {
    $type: 'yandex.cloud.mdb.kafka.v1.ClusterConnection' as const,

    encode(
        message: ClusterConnection,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.alias !== '') {
            writer.uint32(10).string(message.alias);
        }
        if (message.thisCluster !== undefined) {
            ThisCluster.encode(
                message.thisCluster,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.externalCluster !== undefined) {
            ExternalClusterConnection.encode(
                message.externalCluster,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClusterConnection {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClusterConnection } as ClusterConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alias = reader.string();
                    break;
                case 2:
                    message.thisCluster = ThisCluster.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.externalCluster = ExternalClusterConnection.decode(
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

    fromJSON(object: any): ClusterConnection {
        const message = { ...baseClusterConnection } as ClusterConnection;
        if (object.alias !== undefined && object.alias !== null) {
            message.alias = String(object.alias);
        } else {
            message.alias = '';
        }
        if (object.thisCluster !== undefined && object.thisCluster !== null) {
            message.thisCluster = ThisCluster.fromJSON(object.thisCluster);
        } else {
            message.thisCluster = undefined;
        }
        if (
            object.externalCluster !== undefined &&
            object.externalCluster !== null
        ) {
            message.externalCluster = ExternalClusterConnection.fromJSON(
                object.externalCluster
            );
        } else {
            message.externalCluster = undefined;
        }
        return message;
    },

    toJSON(message: ClusterConnection): unknown {
        const obj: any = {};
        message.alias !== undefined && (obj.alias = message.alias);
        message.thisCluster !== undefined &&
            (obj.thisCluster = message.thisCluster
                ? ThisCluster.toJSON(message.thisCluster)
                : undefined);
        message.externalCluster !== undefined &&
            (obj.externalCluster = message.externalCluster
                ? ExternalClusterConnection.toJSON(message.externalCluster)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<ClusterConnection>): ClusterConnection {
        const message = { ...baseClusterConnection } as ClusterConnection;
        if (object.alias !== undefined && object.alias !== null) {
            message.alias = object.alias;
        } else {
            message.alias = '';
        }
        if (object.thisCluster !== undefined && object.thisCluster !== null) {
            message.thisCluster = ThisCluster.fromPartial(object.thisCluster);
        } else {
            message.thisCluster = undefined;
        }
        if (
            object.externalCluster !== undefined &&
            object.externalCluster !== null
        ) {
            message.externalCluster = ExternalClusterConnection.fromPartial(
                object.externalCluster
            );
        } else {
            message.externalCluster = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(ClusterConnection.$type, ClusterConnection);

const baseThisCluster: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ThisCluster',
};

export const ThisCluster = {
    $type: 'yandex.cloud.mdb.kafka.v1.ThisCluster' as const,

    encode(
        _: ThisCluster,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ThisCluster {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseThisCluster } as ThisCluster;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): ThisCluster {
        const message = { ...baseThisCluster } as ThisCluster;
        return message;
    },

    toJSON(_: ThisCluster): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<ThisCluster>): ThisCluster {
        const message = { ...baseThisCluster } as ThisCluster;
        return message;
    },
};

messageTypeRegistry.set(ThisCluster.$type, ThisCluster);

const baseExternalClusterConnection: object = {
    $type: 'yandex.cloud.mdb.kafka.v1.ExternalClusterConnection',
    bootstrapServers: '',
    saslUsername: '',
    saslMechanism: '',
    securityProtocol: '',
};

export const ExternalClusterConnection = {
    $type: 'yandex.cloud.mdb.kafka.v1.ExternalClusterConnection' as const,

    encode(
        message: ExternalClusterConnection,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.bootstrapServers !== '') {
            writer.uint32(10).string(message.bootstrapServers);
        }
        if (message.saslUsername !== '') {
            writer.uint32(18).string(message.saslUsername);
        }
        if (message.saslMechanism !== '') {
            writer.uint32(34).string(message.saslMechanism);
        }
        if (message.securityProtocol !== '') {
            writer.uint32(42).string(message.securityProtocol);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ExternalClusterConnection {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalClusterConnection,
        } as ExternalClusterConnection;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bootstrapServers = reader.string();
                    break;
                case 2:
                    message.saslUsername = reader.string();
                    break;
                case 4:
                    message.saslMechanism = reader.string();
                    break;
                case 5:
                    message.securityProtocol = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExternalClusterConnection {
        const message = {
            ...baseExternalClusterConnection,
        } as ExternalClusterConnection;
        if (
            object.bootstrapServers !== undefined &&
            object.bootstrapServers !== null
        ) {
            message.bootstrapServers = String(object.bootstrapServers);
        } else {
            message.bootstrapServers = '';
        }
        if (object.saslUsername !== undefined && object.saslUsername !== null) {
            message.saslUsername = String(object.saslUsername);
        } else {
            message.saslUsername = '';
        }
        if (
            object.saslMechanism !== undefined &&
            object.saslMechanism !== null
        ) {
            message.saslMechanism = String(object.saslMechanism);
        } else {
            message.saslMechanism = '';
        }
        if (
            object.securityProtocol !== undefined &&
            object.securityProtocol !== null
        ) {
            message.securityProtocol = String(object.securityProtocol);
        } else {
            message.securityProtocol = '';
        }
        return message;
    },

    toJSON(message: ExternalClusterConnection): unknown {
        const obj: any = {};
        message.bootstrapServers !== undefined &&
            (obj.bootstrapServers = message.bootstrapServers);
        message.saslUsername !== undefined &&
            (obj.saslUsername = message.saslUsername);
        message.saslMechanism !== undefined &&
            (obj.saslMechanism = message.saslMechanism);
        message.securityProtocol !== undefined &&
            (obj.securityProtocol = message.securityProtocol);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ExternalClusterConnection>
    ): ExternalClusterConnection {
        const message = {
            ...baseExternalClusterConnection,
        } as ExternalClusterConnection;
        if (
            object.bootstrapServers !== undefined &&
            object.bootstrapServers !== null
        ) {
            message.bootstrapServers = object.bootstrapServers;
        } else {
            message.bootstrapServers = '';
        }
        if (object.saslUsername !== undefined && object.saslUsername !== null) {
            message.saslUsername = object.saslUsername;
        } else {
            message.saslUsername = '';
        }
        if (
            object.saslMechanism !== undefined &&
            object.saslMechanism !== null
        ) {
            message.saslMechanism = object.saslMechanism;
        } else {
            message.saslMechanism = '';
        }
        if (
            object.securityProtocol !== undefined &&
            object.securityProtocol !== null
        ) {
            message.securityProtocol = object.securityProtocol;
        } else {
            message.securityProtocol = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    ExternalClusterConnection.$type,
    ExternalClusterConnection
);

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
