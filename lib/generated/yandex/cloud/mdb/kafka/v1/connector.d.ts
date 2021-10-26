import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
/** An Apache Kafka® connector specification */
export interface ConnectorSpec {
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
    properties: {
        [key: string]: string;
    };
    /** Configuration of MirrorMaker connector */
    connectorConfigMirrormaker: ConnectorConfigMirrorMakerSpec | undefined;
}
export interface ConnectorSpec_PropertiesEntry {
    key: string;
    value: string;
}
/**
 * An An Apache Kafka® MirrorMaker
 * connector specification.
 */
export interface ConnectorConfigMirrorMakerSpec {
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
}
/**
 * Specification of connection to
 * external cluster. It contains
 * all necessary credentials to
 * connect to external cluster.
 */
export interface ExternalClusterConnectionSpec {
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
    /** Name of the connector. */
    name: string;
    /** Maximum number of tasks. Default is the number of brokers */
    tasksMax: number | undefined;
    /**
     * Properties passed with connector config to Connect service
     * Example: 'sync.topics.config.enabled: true'
     */
    properties: {
        [key: string]: string;
    };
    /** Connector health. */
    health: Connector_Health;
    /** Current status of the connector. */
    status: Connector_Status;
    /** ID of the Apache Kafka cluster that the connector belongs to. */
    clusterId: string;
    connectorConfigMirrormaker: ConnectorConfigMirrorMaker | undefined;
}
export declare enum Connector_Health {
    /** HEALTH_UNKNOWN - State of the connector is unknown. */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Connector is running. */
    ALIVE = 1,
    /** DEAD - Connector is failed to start. */
    DEAD = 2,
    UNRECOGNIZED = -1
}
export declare function connector_HealthFromJSON(object: any): Connector_Health;
export declare function connector_HealthToJSON(object: Connector_Health): string;
export declare enum Connector_Status {
    /** STATUS_UNKNOWN - Connector state is unknown. */
    STATUS_UNKNOWN = 0,
    /** RUNNING - Connector is running normally. */
    RUNNING = 1,
    /** ERROR - Connector encountered a problem and cannot operate. */
    ERROR = 2,
    /** PAUSED - Connector paused. */
    PAUSED = 3,
    UNRECOGNIZED = -1
}
export declare function connector_StatusFromJSON(object: any): Connector_Status;
export declare function connector_StatusToJSON(object: Connector_Status): string;
export interface Connector_PropertiesEntry {
    key: string;
    value: string;
}
/**
 * An An Apache Kafka® MirrorMaker
 * connector resource.
 */
export interface ConnectorConfigMirrorMaker {
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
}
/**
 * Resource of connection to
 * external cluster. It contains
 * all settings of connection
 * to external cluster.
 */
export interface ExternalClusterConnection {
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
export declare const ConnectorSpec: {
    encode(message: ConnectorSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectorSpec;
    fromJSON(object: any): ConnectorSpec;
    toJSON(message: ConnectorSpec): unknown;
    fromPartial(object: DeepPartial<ConnectorSpec>): ConnectorSpec;
};
export declare const ConnectorSpec_PropertiesEntry: {
    encode(message: ConnectorSpec_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectorSpec_PropertiesEntry;
    fromJSON(object: any): ConnectorSpec_PropertiesEntry;
    toJSON(message: ConnectorSpec_PropertiesEntry): unknown;
    fromPartial(object: DeepPartial<ConnectorSpec_PropertiesEntry>): ConnectorSpec_PropertiesEntry;
};
export declare const ConnectorConfigMirrorMakerSpec: {
    encode(message: ConnectorConfigMirrorMakerSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectorConfigMirrorMakerSpec;
    fromJSON(object: any): ConnectorConfigMirrorMakerSpec;
    toJSON(message: ConnectorConfigMirrorMakerSpec): unknown;
    fromPartial(object: DeepPartial<ConnectorConfigMirrorMakerSpec>): ConnectorConfigMirrorMakerSpec;
};
export declare const ClusterConnectionSpec: {
    encode(message: ClusterConnectionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConnectionSpec;
    fromJSON(object: any): ClusterConnectionSpec;
    toJSON(message: ClusterConnectionSpec): unknown;
    fromPartial(object: DeepPartial<ClusterConnectionSpec>): ClusterConnectionSpec;
};
export declare const ThisClusterSpec: {
    encode(_: ThisClusterSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ThisClusterSpec;
    fromJSON(_: any): ThisClusterSpec;
    toJSON(_: ThisClusterSpec): unknown;
    fromPartial(_: DeepPartial<ThisClusterSpec>): ThisClusterSpec;
};
export declare const ExternalClusterConnectionSpec: {
    encode(message: ExternalClusterConnectionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalClusterConnectionSpec;
    fromJSON(object: any): ExternalClusterConnectionSpec;
    toJSON(message: ExternalClusterConnectionSpec): unknown;
    fromPartial(object: DeepPartial<ExternalClusterConnectionSpec>): ExternalClusterConnectionSpec;
};
export declare const Connector: {
    encode(message: Connector, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Connector;
    fromJSON(object: any): Connector;
    toJSON(message: Connector): unknown;
    fromPartial(object: DeepPartial<Connector>): Connector;
};
export declare const Connector_PropertiesEntry: {
    encode(message: Connector_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Connector_PropertiesEntry;
    fromJSON(object: any): Connector_PropertiesEntry;
    toJSON(message: Connector_PropertiesEntry): unknown;
    fromPartial(object: DeepPartial<Connector_PropertiesEntry>): Connector_PropertiesEntry;
};
export declare const ConnectorConfigMirrorMaker: {
    encode(message: ConnectorConfigMirrorMaker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectorConfigMirrorMaker;
    fromJSON(object: any): ConnectorConfigMirrorMaker;
    toJSON(message: ConnectorConfigMirrorMaker): unknown;
    fromPartial(object: DeepPartial<ConnectorConfigMirrorMaker>): ConnectorConfigMirrorMaker;
};
export declare const ClusterConnection: {
    encode(message: ClusterConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConnection;
    fromJSON(object: any): ClusterConnection;
    toJSON(message: ClusterConnection): unknown;
    fromPartial(object: DeepPartial<ClusterConnection>): ClusterConnection;
};
export declare const ThisCluster: {
    encode(_: ThisCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ThisCluster;
    fromJSON(_: any): ThisCluster;
    toJSON(_: ThisCluster): unknown;
    fromPartial(_: DeepPartial<ThisCluster>): ThisCluster;
};
export declare const ExternalClusterConnection: {
    encode(message: ExternalClusterConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalClusterConnection;
    fromJSON(object: any): ExternalClusterConnection;
    toJSON(message: ExternalClusterConnection): unknown;
    fromPartial(object: DeepPartial<ExternalClusterConnection>): ExternalClusterConnection;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
