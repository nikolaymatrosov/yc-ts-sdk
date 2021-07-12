import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1.config";
/**
 * ClickHouse configuration options. Detailed description for each set of options
 * is available in [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/server_settings/settings/).
 *
 * Any options not listed here are not supported.
 */
export interface ClickhouseConfig {
    /** Logging level for the ClickHouse cluster. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
    logLevel: ClickhouseConfig_LogLevel;
    /**
     * Settings for the MergeTree engine.
     * See description in [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/server_settings/settings/#merge_tree).
     */
    mergeTree: ClickhouseConfig_MergeTree | undefined;
    /**
     * Compression settings for the ClickHouse cluster.
     * See in-depth description in [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/server_settings/settings/#compression).
     */
    compression: ClickhouseConfig_Compression[];
    /**
     * Configuration of external dictionaries to be used by the ClickHouse cluster.
     * See in-depth description in [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts/).
     */
    dictionaries: ClickhouseConfig_ExternalDictionary[];
    /**
     * Settings for thinning Graphite data.
     * See in-depth description in [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/server_settings/settings/#server_settings-graphite_rollup).
     */
    graphiteRollup: ClickhouseConfig_GraphiteRollup[];
    kafka: ClickhouseConfig_Kafka | undefined;
    kafkaTopics: ClickhouseConfig_KafkaTopic[];
    rabbitmq: ClickhouseConfig_Rabbitmq | undefined;
    /** Maximum number of inbound connections. */
    maxConnections: number | undefined;
    /** Maximum number of simultaneously processed requests. */
    maxConcurrentQueries: number | undefined;
    /** Number of milliseconds that ClickHouse waits for incoming requests before closing the connection. */
    keepAliveTimeout: number | undefined;
    /** Cache size (in bytes) for uncompressed data used by MergeTree tables. */
    uncompressedCacheSize: number | undefined;
    /** Approximate size (in bytes) of the cache of "marks" used by MergeTree tables. */
    markCacheSize: number | undefined;
    /** Maximum size of the table that can be deleted using a DROP query. */
    maxTableSizeToDrop: number | undefined;
    /** Maximum size of the partition that can be deleted using a DROP query. */
    maxPartitionSizeToDrop: number | undefined;
    /**
     * The setting is deprecated and has no effect.
     *
     * @deprecated
     */
    builtinDictionariesReloadInterval: number | undefined;
    /** The server's time zone to be used in DateTime fields conversions. Specified as an IANA identifier. */
    timezone: string;
    /** Address of the archive with the user geobase in Object Storage. */
    geobaseUri: string;
    /**
     * The maximum size that query_log can grow to before old data will be removed. If set to 0, automatic removal of
     * query_log data based on size is disabled.
     */
    queryLogRetentionSize: number | undefined;
    /**
     * The maximum time that query_log records will be retained before removal. If set to 0, automatic removal of
     * query_log data based on time is disabled.
     */
    queryLogRetentionTime: number | undefined;
    /** Whether query_thread_log system table is enabled. */
    queryThreadLogEnabled: boolean | undefined;
    /**
     * The maximum size that query_thread_log can grow to before old data will be removed. If set to 0, automatic removal of
     * query_thread_log data based on size is disabled.
     */
    queryThreadLogRetentionSize: number | undefined;
    /**
     * The maximum time that query_thread_log records will be retained before removal. If set to 0, automatic removal of
     * query_thread_log data based on time is disabled.
     */
    queryThreadLogRetentionTime: number | undefined;
    /**
     * The maximum size that part_log can grow to before old data will be removed. If set to 0, automatic removal of
     * part_log data based on size is disabled.
     */
    partLogRetentionSize: number | undefined;
    /**
     * The maximum time that part_log records will be retained before removal. If set to 0, automatic removal of
     * part_log data based on time is disabled.
     */
    partLogRetentionTime: number | undefined;
    /** Whether metric_log system table is enabled. */
    metricLogEnabled: boolean | undefined;
    /**
     * The maximum size that metric_log can grow to before old data will be removed. If set to 0, automatic removal of
     * metric_log data based on size is disabled.
     */
    metricLogRetentionSize: number | undefined;
    /**
     * The maximum time that metric_log records will be retained before removal. If set to 0, automatic removal of
     * metric_log data based on time is disabled.
     */
    metricLogRetentionTime: number | undefined;
    /** Whether trace_log system table is enabled. */
    traceLogEnabled: boolean | undefined;
    /**
     * The maximum size that trace_log can grow to before old data will be removed. If set to 0, automatic removal of
     * trace_log data based on size is disabled.
     */
    traceLogRetentionSize: number | undefined;
    /**
     * The maximum time that trace_log records will be retained before removal. If set to 0, automatic removal of
     * trace_log data based on time is disabled.
     */
    traceLogRetentionTime: number | undefined;
    /** Whether text_log system table is enabled. */
    textLogEnabled: boolean | undefined;
    /**
     * The maximum size that text_log can grow to before old data will be removed. If set to 0, automatic removal of
     * text_log data based on size is disabled.
     */
    textLogRetentionSize: number | undefined;
    /**
     * The maximum time that text_log records will be retained before removal. If set to 0, automatic removal of
     * text_log data based on time is disabled.
     */
    textLogRetentionTime: number | undefined;
    /** Logging level for text_log system table. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
    textLogLevel: ClickhouseConfig_LogLevel;
    backgroundPoolSize: number | undefined;
    backgroundSchedulePoolSize: number | undefined;
}
export declare enum ClickhouseConfig_LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFORMATION = 3,
    WARNING = 4,
    ERROR = 5,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_LogLevelFromJSON(object: any): ClickhouseConfig_LogLevel;
export declare function clickhouseConfig_LogLevelToJSON(object: ClickhouseConfig_LogLevel): string;
/** Options specific to the MergeTree table engine. */
export interface ClickhouseConfig_MergeTree {
    /** Number of blocks of hashes to keep in ZooKeeper. */
    replicatedDeduplicationWindow: number | undefined;
    /** Period of time to keep blocks of hashes for. */
    replicatedDeduplicationWindowSeconds: number | undefined;
    /** If table contains at least that many active parts in single partition, artificially slow down insert into table. */
    partsToDelayInsert: number | undefined;
    /** If more than this number active parts in single partition, throw 'Too many parts ...' exception. */
    partsToThrowInsert: number | undefined;
    /** How many tasks of merging and mutating parts are allowed simultaneously in ReplicatedMergeTree queue. */
    maxReplicatedMergesInQueue: number | undefined;
    /**
     * If there is less than specified number of free entries in background pool (or replicated queue), start to lower
     * maximum size of merge to process.
     */
    numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge: number | undefined;
    /**
     * Maximum in total size of parts to merge, when there are minimum free threads in background pool (or entries
     * in replication queue).
     */
    maxBytesToMergeAtMinSpaceInPool: number | undefined;
    maxBytesToMergeAtMaxSpaceInPool: number | undefined;
}
export interface ClickhouseConfig_Kafka {
    securityProtocol: ClickhouseConfig_Kafka_SecurityProtocol;
    saslMechanism: ClickhouseConfig_Kafka_SaslMechanism;
    saslUsername: string;
    saslPassword: string;
}
export declare enum ClickhouseConfig_Kafka_SecurityProtocol {
    SECURITY_PROTOCOL_UNSPECIFIED = 0,
    SECURITY_PROTOCOL_PLAINTEXT = 1,
    SECURITY_PROTOCOL_SSL = 2,
    SECURITY_PROTOCOL_SASL_PLAINTEXT = 3,
    SECURITY_PROTOCOL_SASL_SSL = 4,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_Kafka_SecurityProtocolFromJSON(object: any): ClickhouseConfig_Kafka_SecurityProtocol;
export declare function clickhouseConfig_Kafka_SecurityProtocolToJSON(object: ClickhouseConfig_Kafka_SecurityProtocol): string;
export declare enum ClickhouseConfig_Kafka_SaslMechanism {
    SASL_MECHANISM_UNSPECIFIED = 0,
    SASL_MECHANISM_GSSAPI = 1,
    SASL_MECHANISM_PLAIN = 2,
    SASL_MECHANISM_SCRAM_SHA_256 = 3,
    SASL_MECHANISM_SCRAM_SHA_512 = 4,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_Kafka_SaslMechanismFromJSON(object: any): ClickhouseConfig_Kafka_SaslMechanism;
export declare function clickhouseConfig_Kafka_SaslMechanismToJSON(object: ClickhouseConfig_Kafka_SaslMechanism): string;
export interface ClickhouseConfig_KafkaTopic {
    name: string;
    settings: ClickhouseConfig_Kafka | undefined;
}
export interface ClickhouseConfig_Rabbitmq {
    username: string;
    password: string;
}
export interface ClickhouseConfig_Compression {
    /** Compression method to use for the specified combination of `min_part_size` and `min_part_size_ratio`. */
    method: ClickhouseConfig_Compression_Method;
    /** Minimum size of a part of a table. */
    minPartSize: number;
    /** Minimum ratio of a part relative to the size of all the data in the table. */
    minPartSizeRatio: number;
}
export declare enum ClickhouseConfig_Compression_Method {
    METHOD_UNSPECIFIED = 0,
    /** LZ4 - [LZ4 compression algorithm](https://lz4.github.io/lz4/). */
    LZ4 = 1,
    /** ZSTD - [Zstandard compression algorithm](https://facebook.github.io/zstd/). */
    ZSTD = 2,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_Compression_MethodFromJSON(object: any): ClickhouseConfig_Compression_Method;
export declare function clickhouseConfig_Compression_MethodToJSON(object: ClickhouseConfig_Compression_Method): string;
export interface ClickhouseConfig_ExternalDictionary {
    /** Name of the external dictionary. */
    name: string;
    /**
     * Set of attributes for the external dictionary.
     * For in-depth description, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_structure/).
     */
    structure: ClickhouseConfig_ExternalDictionary_Structure | undefined;
    /**
     * Layout for storing the dictionary in memory.
     * For in-depth description, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_layout/).
     */
    layout: ClickhouseConfig_ExternalDictionary_Layout | undefined;
    /** Fixed interval between dictionary updates. */
    fixedLifetime: number | undefined;
    /** Range of intervals between dictionary updates for ClickHouse to choose from. */
    lifetimeRange: ClickhouseConfig_ExternalDictionary_Range | undefined;
    /** HTTP source for the dictionary. */
    httpSource: ClickhouseConfig_ExternalDictionary_HttpSource | undefined;
    /** MySQL source for the dictionary. */
    mysqlSource: ClickhouseConfig_ExternalDictionary_MysqlSource | undefined;
    /** ClickHouse source for the dictionary. */
    clickhouseSource: ClickhouseConfig_ExternalDictionary_ClickhouseSource | undefined;
    /** MongoDB source for the dictionary. */
    mongodbSource: ClickhouseConfig_ExternalDictionary_MongodbSource | undefined;
    /** PostgreSQL source for the dictionary. */
    postgresqlSource: ClickhouseConfig_ExternalDictionary_PostgresqlSource | undefined;
}
export interface ClickhouseConfig_ExternalDictionary_HttpSource {
    /** URL of the source dictionary available over HTTP. */
    url: string;
    /** The data format. Valid values are all formats supported by ClickHouse SQL dialect. */
    format: string;
}
export interface ClickhouseConfig_ExternalDictionary_MysqlSource {
    /** Name of the MySQL database to connect to. */
    db: string;
    /** Name of the database table to use as a ClickHouse dictionary. */
    table: string;
    /** Default port to use when connecting to a replica of the dictionary source. */
    port: number;
    /** Name of the default user for replicas of the dictionary source. */
    user: string;
    /** Password of the default user for replicas of the dictionary source. */
    password: string;
    /** List of MySQL replicas of the database used as dictionary source. */
    replicas: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica[];
    /** Selection criteria for the data in the specified MySQL table. */
    where: string;
    /**
     * Query for checking the dictionary status, to pull only updated data.
     * For more details, see [ClickHouse documentation on dictionaries](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_lifetime/).
     */
    invalidateQuery: string;
}
export interface ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
    /** MySQL host of the replica. */
    host: string;
    /**
     * The priority of the replica that ClickHouse takes into account when connecting.
     * Replica with the highest priority should have this field set to the lowest number.
     */
    priority: number;
    /**
     * Port to use when connecting to the replica.
     * If a port is not specified for a replica, ClickHouse uses the port specified for the source.
     */
    port: number;
    /** Name of the MySQL database user. */
    user: string;
    /** Password of the MySQL database user. */
    password: string;
}
export interface ClickhouseConfig_ExternalDictionary_ClickhouseSource {
    /** Name of the ClickHouse database. */
    db: string;
    /** Name of the table in the specified database to be used as the dictionary source. */
    table: string;
    /** ClickHouse host of the specified database. */
    host: string;
    /** Port to use when connecting to the host. */
    port: number;
    /** Name of the ClickHouse database user. */
    user: string;
    /** Password of the ClickHouse database user. */
    password: string;
    /** Selection criteria for the data in the specified ClickHouse table. */
    where: string;
}
export interface ClickhouseConfig_ExternalDictionary_MongodbSource {
    /** Name of the MongoDB database. */
    db: string;
    /** Name of the collection in the specified database to be used as the dictionary source. */
    collection: string;
    /** MongoDB host of the specified database. */
    host: string;
    /** Port to use when connecting to the host. */
    port: number;
    /** Name of the MongoDB database user. */
    user: string;
    /** Password of the MongoDB database user. */
    password: string;
}
export interface ClickhouseConfig_ExternalDictionary_PostgresqlSource {
    /** Name of the PostrgreSQL database. */
    db: string;
    /** Name of the table in the specified database to be used as the dictionary source. */
    table: string;
    /** Name of the PostrgreSQL host */
    hosts: string[];
    /** Port to use when connecting to the host. */
    port: number;
    /** Name of the PostrgreSQL database user. */
    user: string;
    /** Password of the PostrgreSQL database user. */
    password: string;
    /**
     * Query for checking the dictionary status, to pull only updated data.
     * For more details, see [ClickHouse documentation on dictionaries](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_lifetime/).
     */
    invalidateQuery: string;
    /**
     * Mode of SSL TCP/IP connection to the PostgreSQL host.
     * For more details, see [PostgreSQL documentation](https://www.postgresql.org/docs/current/libpq-ssl.html).
     */
    sslMode: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode;
}
export declare enum ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode {
    SSL_MODE_UNSPECIFIED = 0,
    /** DISABLE - Only try a non-SSL connection. */
    DISABLE = 1,
    /** ALLOW - First try a non-SSL connection; if that fails, try an SSL connection. */
    ALLOW = 2,
    /** PREFER - First try an SSL connection; if that fails, try a non-SSL connection. */
    PREFER = 3,
    /** VERIFY_CA - Only try an SSL connection, and verify that the server certificate is issued by a trusted certificate authority (CA). */
    VERIFY_CA = 4,
    /** VERIFY_FULL - Only try an SSL connection, verify that the server certificate is issued by a trusted CA and that the requested server host name matches that in the certificate. */
    VERIFY_FULL = 5,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON(object: any): ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode;
export declare function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON(object: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode): string;
export interface ClickhouseConfig_ExternalDictionary_Structure {
    /** Single numeric key column for the dictionary. */
    id: ClickhouseConfig_ExternalDictionary_Structure_Id | undefined;
    /**
     * Composite key for the dictionary, containing of one or more key columns.
     * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_structure/#composite-key).
     */
    key: ClickhouseConfig_ExternalDictionary_Structure_Key | undefined;
    /**
     * Field holding the beginning of the range for dictionaries with `RANGE_HASHED` layout.
     * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_layout/#range-hashed).
     */
    rangeMin: ClickhouseConfig_ExternalDictionary_Structure_Attribute | undefined;
    /**
     * Field holding the end of the range for dictionaries with `RANGE_HASHED` layout.
     * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_layout/#range-hashed).
     */
    rangeMax: ClickhouseConfig_ExternalDictionary_Structure_Attribute | undefined;
    /**
     * Description of the fields available for database queries.
     * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_structure/#attributes).
     */
    attributes: ClickhouseConfig_ExternalDictionary_Structure_Attribute[];
}
export interface ClickhouseConfig_ExternalDictionary_Structure_Attribute {
    /** Name of the column. */
    name: string;
    /** Type of the column. */
    type: string;
    /** Default value for an element without data (for example, an empty string). */
    nullValue: string;
    /** Expression, describing the attribute, if applicable. */
    expression: string;
    /**
     * Indication of hierarchy support.
     * Default value: `false`.
     */
    hierarchical: boolean;
    /**
     * Indication of injective mapping "id -> attribute".
     * Default value: `false`.
     */
    injective: boolean;
}
/** Numeric key. */
export interface ClickhouseConfig_ExternalDictionary_Structure_Id {
    /** Name of the numeric key. */
    name: string;
}
/** Complex key. */
export interface ClickhouseConfig_ExternalDictionary_Structure_Key {
    /** Attributes of a complex key. */
    attributes: ClickhouseConfig_ExternalDictionary_Structure_Attribute[];
}
/** Layout determining how to store the dictionary in memory. */
export interface ClickhouseConfig_ExternalDictionary_Layout {
    /** Layout type for an external dictionary. */
    type: ClickhouseConfig_ExternalDictionary_Layout_Type;
    /**
     * Number of cells in the cache. Rounded up to a power of two.
     * Applicable only for CACHE and COMPLEX_KEY_CACHE layout types.
     */
    sizeInCells: number;
}
export declare enum ClickhouseConfig_ExternalDictionary_Layout_Type {
    TYPE_UNSPECIFIED = 0,
    /**
     * FLAT - The entire dictionary is stored in memory in the form of flat arrays.
     * Available for all dictionary sources.
     */
    FLAT = 1,
    /**
     * HASHED - The entire dictionary is stored in memory in the form of a hash table.
     * Available for all dictionary sources.
     */
    HASHED = 2,
    /**
     * COMPLEX_KEY_HASHED - Similar to HASHED, to be used with composite keys.
     * Available for all dictionary sources.
     */
    COMPLEX_KEY_HASHED = 3,
    /**
     * RANGE_HASHED - The entire dictionary is stored in memory in the form of a hash table,
     * with an ordered array of ranges and their corresponding values.
     * Available for all dictionary sources.
     */
    RANGE_HASHED = 4,
    /**
     * CACHE - The dictionary is stored in a cache with a set number of cells.
     * Available for MySQL, ClickHouse and HTTP dictionary sources.
     */
    CACHE = 5,
    /**
     * COMPLEX_KEY_CACHE - Similar to CACHE, to be used with composite keys.
     * Available for MySQL, ClickHouse and HTTP dictionary sources.
     */
    COMPLEX_KEY_CACHE = 6,
    UNRECOGNIZED = -1
}
export declare function clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON(object: any): ClickhouseConfig_ExternalDictionary_Layout_Type;
export declare function clickhouseConfig_ExternalDictionary_Layout_TypeToJSON(object: ClickhouseConfig_ExternalDictionary_Layout_Type): string;
export interface ClickhouseConfig_ExternalDictionary_Range {
    /** Minimum dictionary lifetime. */
    min: number;
    /** Maximum dictionary lifetime. */
    max: number;
}
/** Rollup settings for the GraphiteMergeTree table engine. */
export interface ClickhouseConfig_GraphiteRollup {
    /** Name for the specified combination of settings for Graphite rollup. */
    name: string;
    /** Pattern to use for the rollup. */
    patterns: ClickhouseConfig_GraphiteRollup_Pattern[];
}
export interface ClickhouseConfig_GraphiteRollup_Pattern {
    /** Pattern for metric names. */
    regexp: string;
    /** Name of the aggregating function to apply to data of the age specified in [retention]. */
    function: string;
    /** Age of data to use for thinning. */
    retention: ClickhouseConfig_GraphiteRollup_Pattern_Retention[];
}
export interface ClickhouseConfig_GraphiteRollup_Pattern_Retention {
    /** Minimum age of the data in seconds. */
    age: number;
    /** Precision of determining the age of the data, in seconds. */
    precision: number;
}
export interface ClickhouseConfigSet {
    /**
     * Effective settings for a ClickHouse cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: ClickhouseConfig | undefined;
    /** User-defined settings for a ClickHouse cluster. */
    userConfig: ClickhouseConfig | undefined;
    /** Default configuration for a ClickHouse cluster. */
    defaultConfig: ClickhouseConfig | undefined;
}
export declare const ClickhouseConfig: {
    encode(message: ClickhouseConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig;
    fromJSON(object: any): ClickhouseConfig;
    toJSON(message: ClickhouseConfig): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig>): ClickhouseConfig;
};
export declare const ClickhouseConfig_MergeTree: {
    encode(message: ClickhouseConfig_MergeTree, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_MergeTree;
    fromJSON(object: any): ClickhouseConfig_MergeTree;
    toJSON(message: ClickhouseConfig_MergeTree): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_MergeTree>): ClickhouseConfig_MergeTree;
};
export declare const ClickhouseConfig_Kafka: {
    encode(message: ClickhouseConfig_Kafka, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_Kafka;
    fromJSON(object: any): ClickhouseConfig_Kafka;
    toJSON(message: ClickhouseConfig_Kafka): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_Kafka>): ClickhouseConfig_Kafka;
};
export declare const ClickhouseConfig_KafkaTopic: {
    encode(message: ClickhouseConfig_KafkaTopic, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_KafkaTopic;
    fromJSON(object: any): ClickhouseConfig_KafkaTopic;
    toJSON(message: ClickhouseConfig_KafkaTopic): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_KafkaTopic>): ClickhouseConfig_KafkaTopic;
};
export declare const ClickhouseConfig_Rabbitmq: {
    encode(message: ClickhouseConfig_Rabbitmq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_Rabbitmq;
    fromJSON(object: any): ClickhouseConfig_Rabbitmq;
    toJSON(message: ClickhouseConfig_Rabbitmq): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_Rabbitmq>): ClickhouseConfig_Rabbitmq;
};
export declare const ClickhouseConfig_Compression: {
    encode(message: ClickhouseConfig_Compression, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_Compression;
    fromJSON(object: any): ClickhouseConfig_Compression;
    toJSON(message: ClickhouseConfig_Compression): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_Compression>): ClickhouseConfig_Compression;
};
export declare const ClickhouseConfig_ExternalDictionary: {
    encode(message: ClickhouseConfig_ExternalDictionary, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary;
    toJSON(message: ClickhouseConfig_ExternalDictionary): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary>): ClickhouseConfig_ExternalDictionary;
};
export declare const ClickhouseConfig_ExternalDictionary_HttpSource: {
    encode(message: ClickhouseConfig_ExternalDictionary_HttpSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_HttpSource;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_HttpSource;
    toJSON(message: ClickhouseConfig_ExternalDictionary_HttpSource): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_HttpSource>): ClickhouseConfig_ExternalDictionary_HttpSource;
};
export declare const ClickhouseConfig_ExternalDictionary_MysqlSource: {
    encode(message: ClickhouseConfig_ExternalDictionary_MysqlSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_MysqlSource;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MysqlSource;
    toJSON(message: ClickhouseConfig_ExternalDictionary_MysqlSource): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_MysqlSource>): ClickhouseConfig_ExternalDictionary_MysqlSource;
};
export declare const ClickhouseConfig_ExternalDictionary_MysqlSource_Replica: {
    encode(message: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
    toJSON(message: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_MysqlSource_Replica>): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
};
export declare const ClickhouseConfig_ExternalDictionary_ClickhouseSource: {
    encode(message: ClickhouseConfig_ExternalDictionary_ClickhouseSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_ClickhouseSource;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_ClickhouseSource;
    toJSON(message: ClickhouseConfig_ExternalDictionary_ClickhouseSource): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_ClickhouseSource>): ClickhouseConfig_ExternalDictionary_ClickhouseSource;
};
export declare const ClickhouseConfig_ExternalDictionary_MongodbSource: {
    encode(message: ClickhouseConfig_ExternalDictionary_MongodbSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_MongodbSource;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MongodbSource;
    toJSON(message: ClickhouseConfig_ExternalDictionary_MongodbSource): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_MongodbSource>): ClickhouseConfig_ExternalDictionary_MongodbSource;
};
export declare const ClickhouseConfig_ExternalDictionary_PostgresqlSource: {
    encode(message: ClickhouseConfig_ExternalDictionary_PostgresqlSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_PostgresqlSource;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_PostgresqlSource;
    toJSON(message: ClickhouseConfig_ExternalDictionary_PostgresqlSource): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_PostgresqlSource>): ClickhouseConfig_ExternalDictionary_PostgresqlSource;
};
export declare const ClickhouseConfig_ExternalDictionary_Structure: {
    encode(message: ClickhouseConfig_ExternalDictionary_Structure, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Structure;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Structure): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure>): ClickhouseConfig_ExternalDictionary_Structure;
};
export declare const ClickhouseConfig_ExternalDictionary_Structure_Attribute: {
    encode(message: ClickhouseConfig_ExternalDictionary_Structure_Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Structure_Attribute;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Attribute;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Attribute): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Attribute>): ClickhouseConfig_ExternalDictionary_Structure_Attribute;
};
export declare const ClickhouseConfig_ExternalDictionary_Structure_Id: {
    encode(message: ClickhouseConfig_ExternalDictionary_Structure_Id, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Structure_Id;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Id;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Id): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Id>): ClickhouseConfig_ExternalDictionary_Structure_Id;
};
export declare const ClickhouseConfig_ExternalDictionary_Structure_Key: {
    encode(message: ClickhouseConfig_ExternalDictionary_Structure_Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Structure_Key;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Key;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Key): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Key>): ClickhouseConfig_ExternalDictionary_Structure_Key;
};
export declare const ClickhouseConfig_ExternalDictionary_Layout: {
    encode(message: ClickhouseConfig_ExternalDictionary_Layout, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Layout;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Layout;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Layout): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_Layout>): ClickhouseConfig_ExternalDictionary_Layout;
};
export declare const ClickhouseConfig_ExternalDictionary_Range: {
    encode(message: ClickhouseConfig_ExternalDictionary_Range, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_ExternalDictionary_Range;
    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Range;
    toJSON(message: ClickhouseConfig_ExternalDictionary_Range): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_ExternalDictionary_Range>): ClickhouseConfig_ExternalDictionary_Range;
};
export declare const ClickhouseConfig_GraphiteRollup: {
    encode(message: ClickhouseConfig_GraphiteRollup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_GraphiteRollup;
    fromJSON(object: any): ClickhouseConfig_GraphiteRollup;
    toJSON(message: ClickhouseConfig_GraphiteRollup): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_GraphiteRollup>): ClickhouseConfig_GraphiteRollup;
};
export declare const ClickhouseConfig_GraphiteRollup_Pattern: {
    encode(message: ClickhouseConfig_GraphiteRollup_Pattern, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_GraphiteRollup_Pattern;
    fromJSON(object: any): ClickhouseConfig_GraphiteRollup_Pattern;
    toJSON(message: ClickhouseConfig_GraphiteRollup_Pattern): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_GraphiteRollup_Pattern>): ClickhouseConfig_GraphiteRollup_Pattern;
};
export declare const ClickhouseConfig_GraphiteRollup_Pattern_Retention: {
    encode(message: ClickhouseConfig_GraphiteRollup_Pattern_Retention, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfig_GraphiteRollup_Pattern_Retention;
    fromJSON(object: any): ClickhouseConfig_GraphiteRollup_Pattern_Retention;
    toJSON(message: ClickhouseConfig_GraphiteRollup_Pattern_Retention): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfig_GraphiteRollup_Pattern_Retention>): ClickhouseConfig_GraphiteRollup_Pattern_Retention;
};
export declare const ClickhouseConfigSet: {
    encode(message: ClickhouseConfigSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClickhouseConfigSet;
    fromJSON(object: any): ClickhouseConfigSet;
    toJSON(message: ClickhouseConfigSet): unknown;
    fromPartial(object: DeepPartial<ClickhouseConfigSet>): ClickhouseConfigSet;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
