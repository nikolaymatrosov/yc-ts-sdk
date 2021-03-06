/* eslint-disable */
import {
    Int64Value,
    BoolValue,
} from '../../../../../../google/protobuf/wrappers';
import { messageTypeRegistry } from '../../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1.config';

/**
 * ClickHouse configuration options. Detailed description for each set of options
 * is available in [ClickHouse documentation](https://clickhouse.yandex/docs/en/operations/server_settings/settings/).
 *
 * Any options not listed here are not supported.
 */
export interface ClickhouseConfig {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig';
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

export enum ClickhouseConfig_LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFORMATION = 3,
    WARNING = 4,
    ERROR = 5,
    UNRECOGNIZED = -1,
}

export function clickhouseConfig_LogLevelFromJSON(
    object: any
): ClickhouseConfig_LogLevel {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_UNSPECIFIED':
            return ClickhouseConfig_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case 'TRACE':
            return ClickhouseConfig_LogLevel.TRACE;
        case 2:
        case 'DEBUG':
            return ClickhouseConfig_LogLevel.DEBUG;
        case 3:
        case 'INFORMATION':
            return ClickhouseConfig_LogLevel.INFORMATION;
        case 4:
        case 'WARNING':
            return ClickhouseConfig_LogLevel.WARNING;
        case 5:
        case 'ERROR':
            return ClickhouseConfig_LogLevel.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClickhouseConfig_LogLevel.UNRECOGNIZED;
    }
}

export function clickhouseConfig_LogLevelToJSON(
    object: ClickhouseConfig_LogLevel
): string {
    switch (object) {
        case ClickhouseConfig_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return 'LOG_LEVEL_UNSPECIFIED';
        case ClickhouseConfig_LogLevel.TRACE:
            return 'TRACE';
        case ClickhouseConfig_LogLevel.DEBUG:
            return 'DEBUG';
        case ClickhouseConfig_LogLevel.INFORMATION:
            return 'INFORMATION';
        case ClickhouseConfig_LogLevel.WARNING:
            return 'WARNING';
        case ClickhouseConfig_LogLevel.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}

/** Options specific to the MergeTree table engine. */
export interface ClickhouseConfig_MergeTree {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka';
    securityProtocol: ClickhouseConfig_Kafka_SecurityProtocol;
    saslMechanism: ClickhouseConfig_Kafka_SaslMechanism;
    saslUsername: string;
    saslPassword: string;
}

export enum ClickhouseConfig_Kafka_SecurityProtocol {
    SECURITY_PROTOCOL_UNSPECIFIED = 0,
    SECURITY_PROTOCOL_PLAINTEXT = 1,
    SECURITY_PROTOCOL_SSL = 2,
    SECURITY_PROTOCOL_SASL_PLAINTEXT = 3,
    SECURITY_PROTOCOL_SASL_SSL = 4,
    UNRECOGNIZED = -1,
}

export function clickhouseConfig_Kafka_SecurityProtocolFromJSON(
    object: any
): ClickhouseConfig_Kafka_SecurityProtocol {
    switch (object) {
        case 0:
        case 'SECURITY_PROTOCOL_UNSPECIFIED':
            return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_UNSPECIFIED;
        case 1:
        case 'SECURITY_PROTOCOL_PLAINTEXT':
            return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_PLAINTEXT;
        case 2:
        case 'SECURITY_PROTOCOL_SSL':
            return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SSL;
        case 3:
        case 'SECURITY_PROTOCOL_SASL_PLAINTEXT':
            return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_PLAINTEXT;
        case 4:
        case 'SECURITY_PROTOCOL_SASL_SSL':
            return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_SSL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClickhouseConfig_Kafka_SecurityProtocol.UNRECOGNIZED;
    }
}

export function clickhouseConfig_Kafka_SecurityProtocolToJSON(
    object: ClickhouseConfig_Kafka_SecurityProtocol
): string {
    switch (object) {
        case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_UNSPECIFIED:
            return 'SECURITY_PROTOCOL_UNSPECIFIED';
        case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_PLAINTEXT:
            return 'SECURITY_PROTOCOL_PLAINTEXT';
        case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SSL:
            return 'SECURITY_PROTOCOL_SSL';
        case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_PLAINTEXT:
            return 'SECURITY_PROTOCOL_SASL_PLAINTEXT';
        case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_SSL:
            return 'SECURITY_PROTOCOL_SASL_SSL';
        default:
            return 'UNKNOWN';
    }
}

export enum ClickhouseConfig_Kafka_SaslMechanism {
    SASL_MECHANISM_UNSPECIFIED = 0,
    SASL_MECHANISM_GSSAPI = 1,
    SASL_MECHANISM_PLAIN = 2,
    SASL_MECHANISM_SCRAM_SHA_256 = 3,
    SASL_MECHANISM_SCRAM_SHA_512 = 4,
    UNRECOGNIZED = -1,
}

export function clickhouseConfig_Kafka_SaslMechanismFromJSON(
    object: any
): ClickhouseConfig_Kafka_SaslMechanism {
    switch (object) {
        case 0:
        case 'SASL_MECHANISM_UNSPECIFIED':
            return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_UNSPECIFIED;
        case 1:
        case 'SASL_MECHANISM_GSSAPI':
            return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_GSSAPI;
        case 2:
        case 'SASL_MECHANISM_PLAIN':
            return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_PLAIN;
        case 3:
        case 'SASL_MECHANISM_SCRAM_SHA_256':
            return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_256;
        case 4:
        case 'SASL_MECHANISM_SCRAM_SHA_512':
            return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_512;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClickhouseConfig_Kafka_SaslMechanism.UNRECOGNIZED;
    }
}

export function clickhouseConfig_Kafka_SaslMechanismToJSON(
    object: ClickhouseConfig_Kafka_SaslMechanism
): string {
    switch (object) {
        case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_UNSPECIFIED:
            return 'SASL_MECHANISM_UNSPECIFIED';
        case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_GSSAPI:
            return 'SASL_MECHANISM_GSSAPI';
        case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_PLAIN:
            return 'SASL_MECHANISM_PLAIN';
        case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_256:
            return 'SASL_MECHANISM_SCRAM_SHA_256';
        case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_512:
            return 'SASL_MECHANISM_SCRAM_SHA_512';
        default:
            return 'UNKNOWN';
    }
}

export interface ClickhouseConfig_KafkaTopic {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic';
    name: string;
    settings: ClickhouseConfig_Kafka | undefined;
}

export interface ClickhouseConfig_Rabbitmq {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq';
    username: string;
    password: string;
}

export interface ClickhouseConfig_Compression {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression';
    /** Compression method to use for the specified combination of `min_part_size` and `min_part_size_ratio`. */
    method: ClickhouseConfig_Compression_Method;
    /** Minimum size of a part of a table. */
    minPartSize: number;
    /** Minimum ratio of a part relative to the size of all the data in the table. */
    minPartSizeRatio: number;
}

export enum ClickhouseConfig_Compression_Method {
    METHOD_UNSPECIFIED = 0,
    /** LZ4 - [LZ4 compression algorithm](https://lz4.github.io/lz4/). */
    LZ4 = 1,
    /** ZSTD - [Zstandard compression algorithm](https://facebook.github.io/zstd/). */
    ZSTD = 2,
    UNRECOGNIZED = -1,
}

export function clickhouseConfig_Compression_MethodFromJSON(
    object: any
): ClickhouseConfig_Compression_Method {
    switch (object) {
        case 0:
        case 'METHOD_UNSPECIFIED':
            return ClickhouseConfig_Compression_Method.METHOD_UNSPECIFIED;
        case 1:
        case 'LZ4':
            return ClickhouseConfig_Compression_Method.LZ4;
        case 2:
        case 'ZSTD':
            return ClickhouseConfig_Compression_Method.ZSTD;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClickhouseConfig_Compression_Method.UNRECOGNIZED;
    }
}

export function clickhouseConfig_Compression_MethodToJSON(
    object: ClickhouseConfig_Compression_Method
): string {
    switch (object) {
        case ClickhouseConfig_Compression_Method.METHOD_UNSPECIFIED:
            return 'METHOD_UNSPECIFIED';
        case ClickhouseConfig_Compression_Method.LZ4:
            return 'LZ4';
        case ClickhouseConfig_Compression_Method.ZSTD:
            return 'ZSTD';
        default:
            return 'UNKNOWN';
    }
}

export interface ClickhouseConfig_ExternalDictionary {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary';
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
    clickhouseSource:
        | ClickhouseConfig_ExternalDictionary_ClickhouseSource
        | undefined;
    /** MongoDB source for the dictionary. */
    mongodbSource:
        | ClickhouseConfig_ExternalDictionary_MongodbSource
        | undefined;
    /** PostgreSQL source for the dictionary. */
    postgresqlSource:
        | ClickhouseConfig_ExternalDictionary_PostgresqlSource
        | undefined;
}

export interface ClickhouseConfig_ExternalDictionary_HttpSource {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource';
    /** URL of the source dictionary available over HTTP. */
    url: string;
    /** The data format. Valid values are all formats supported by ClickHouse SQL dialect. */
    format: string;
}

export interface ClickhouseConfig_ExternalDictionary_MysqlSource {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource';
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

export enum ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode {
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
    UNRECOGNIZED = -1,
}

export function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON(
    object: any
): ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode {
    switch (object) {
        case 0:
        case 'SSL_MODE_UNSPECIFIED':
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.SSL_MODE_UNSPECIFIED;
        case 1:
        case 'DISABLE':
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.DISABLE;
        case 2:
        case 'ALLOW':
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.ALLOW;
        case 3:
        case 'PREFER':
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.PREFER;
        case 4:
        case 'VERIFY_CA':
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_CA;
        case 5:
        case 'VERIFY_FULL':
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_FULL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.UNRECOGNIZED;
    }
}

export function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON(
    object: ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode
): string {
    switch (object) {
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.SSL_MODE_UNSPECIFIED:
            return 'SSL_MODE_UNSPECIFIED';
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.DISABLE:
            return 'DISABLE';
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.ALLOW:
            return 'ALLOW';
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.PREFER:
            return 'PREFER';
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_CA:
            return 'VERIFY_CA';
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_FULL:
            return 'VERIFY_FULL';
        default:
            return 'UNKNOWN';
    }
}

export interface ClickhouseConfig_ExternalDictionary_Structure {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure';
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
    rangeMin:
        | ClickhouseConfig_ExternalDictionary_Structure_Attribute
        | undefined;
    /**
     * Field holding the end of the range for dictionaries with `RANGE_HASHED` layout.
     * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_layout/#range-hashed).
     */
    rangeMax:
        | ClickhouseConfig_ExternalDictionary_Structure_Attribute
        | undefined;
    /**
     * Description of the fields available for database queries.
     * For details, see [ClickHouse documentation](https://clickhouse.yandex/docs/en/query_language/dicts/external_dicts_dict_structure/#attributes).
     */
    attributes: ClickhouseConfig_ExternalDictionary_Structure_Attribute[];
}

export interface ClickhouseConfig_ExternalDictionary_Structure_Attribute {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute';
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
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id';
    /** Name of the numeric key. */
    name: string;
}

/** Complex key. */
export interface ClickhouseConfig_ExternalDictionary_Structure_Key {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key';
    /** Attributes of a complex key. */
    attributes: ClickhouseConfig_ExternalDictionary_Structure_Attribute[];
}

/** Layout determining how to store the dictionary in memory. */
export interface ClickhouseConfig_ExternalDictionary_Layout {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout';
    /** Layout type for an external dictionary. */
    type: ClickhouseConfig_ExternalDictionary_Layout_Type;
    /**
     * Number of cells in the cache. Rounded up to a power of two.
     * Applicable only for CACHE and COMPLEX_KEY_CACHE layout types.
     */
    sizeInCells: number;
}

export enum ClickhouseConfig_ExternalDictionary_Layout_Type {
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
    UNRECOGNIZED = -1,
}

export function clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON(
    object: any
): ClickhouseConfig_ExternalDictionary_Layout_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return ClickhouseConfig_ExternalDictionary_Layout_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'FLAT':
            return ClickhouseConfig_ExternalDictionary_Layout_Type.FLAT;
        case 2:
        case 'HASHED':
            return ClickhouseConfig_ExternalDictionary_Layout_Type.HASHED;
        case 3:
        case 'COMPLEX_KEY_HASHED':
            return ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_HASHED;
        case 4:
        case 'RANGE_HASHED':
            return ClickhouseConfig_ExternalDictionary_Layout_Type.RANGE_HASHED;
        case 5:
        case 'CACHE':
            return ClickhouseConfig_ExternalDictionary_Layout_Type.CACHE;
        case 6:
        case 'COMPLEX_KEY_CACHE':
            return ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_CACHE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ClickhouseConfig_ExternalDictionary_Layout_Type.UNRECOGNIZED;
    }
}

export function clickhouseConfig_ExternalDictionary_Layout_TypeToJSON(
    object: ClickhouseConfig_ExternalDictionary_Layout_Type
): string {
    switch (object) {
        case ClickhouseConfig_ExternalDictionary_Layout_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case ClickhouseConfig_ExternalDictionary_Layout_Type.FLAT:
            return 'FLAT';
        case ClickhouseConfig_ExternalDictionary_Layout_Type.HASHED:
            return 'HASHED';
        case ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_HASHED:
            return 'COMPLEX_KEY_HASHED';
        case ClickhouseConfig_ExternalDictionary_Layout_Type.RANGE_HASHED:
            return 'RANGE_HASHED';
        case ClickhouseConfig_ExternalDictionary_Layout_Type.CACHE:
            return 'CACHE';
        case ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_CACHE:
            return 'COMPLEX_KEY_CACHE';
        default:
            return 'UNKNOWN';
    }
}

export interface ClickhouseConfig_ExternalDictionary_Range {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range';
    /** Minimum dictionary lifetime. */
    min: number;
    /** Maximum dictionary lifetime. */
    max: number;
}

/** Rollup settings for the GraphiteMergeTree table engine. */
export interface ClickhouseConfig_GraphiteRollup {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup';
    /** Name for the specified combination of settings for Graphite rollup. */
    name: string;
    /** Pattern to use for the rollup. */
    patterns: ClickhouseConfig_GraphiteRollup_Pattern[];
}

export interface ClickhouseConfig_GraphiteRollup_Pattern {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern';
    /** Pattern for metric names. */
    regexp: string;
    /** Name of the aggregating function to apply to data of the age specified in [retention]. */
    function: string;
    /** Age of data to use for thinning. */
    retention: ClickhouseConfig_GraphiteRollup_Pattern_Retention[];
}

export interface ClickhouseConfig_GraphiteRollup_Pattern_Retention {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention';
    /** Minimum age of the data in seconds. */
    age: number;
    /** Precision of determining the age of the data, in seconds. */
    precision: number;
}

export interface ClickhouseConfigSet {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet';
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

const baseClickhouseConfig: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig',
    logLevel: 0,
    timezone: '',
    geobaseUri: '',
    textLogLevel: 0,
};

export const ClickhouseConfig = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig' as const,

    encode(
        message: ClickhouseConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logLevel !== 0) {
            writer.uint32(8).int32(message.logLevel);
        }
        if (message.mergeTree !== undefined) {
            ClickhouseConfig_MergeTree.encode(
                message.mergeTree,
                writer.uint32(18).fork()
            ).ldelim();
        }
        for (const v of message.compression) {
            ClickhouseConfig_Compression.encode(
                v!,
                writer.uint32(26).fork()
            ).ldelim();
        }
        for (const v of message.dictionaries) {
            ClickhouseConfig_ExternalDictionary.encode(
                v!,
                writer.uint32(34).fork()
            ).ldelim();
        }
        for (const v of message.graphiteRollup) {
            ClickhouseConfig_GraphiteRollup.encode(
                v!,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.kafka !== undefined) {
            ClickhouseConfig_Kafka.encode(
                message.kafka,
                writer.uint32(282).fork()
            ).ldelim();
        }
        for (const v of message.kafkaTopics) {
            ClickhouseConfig_KafkaTopic.encode(
                v!,
                writer.uint32(290).fork()
            ).ldelim();
        }
        if (message.rabbitmq !== undefined) {
            ClickhouseConfig_Rabbitmq.encode(
                message.rabbitmq,
                writer.uint32(298).fork()
            ).ldelim();
        }
        if (message.maxConnections !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxConnections!,
                },
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.maxConcurrentQueries !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxConcurrentQueries!,
                },
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.keepAliveTimeout !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.keepAliveTimeout!,
                },
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.uncompressedCacheSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.uncompressedCacheSize!,
                },
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.markCacheSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.markCacheSize!,
                },
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.maxTableSizeToDrop !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxTableSizeToDrop!,
                },
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.maxPartitionSizeToDrop !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxPartitionSizeToDrop!,
                },
                writer.uint32(106).fork()
            ).ldelim();
        }
        if (message.builtinDictionariesReloadInterval !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.builtinDictionariesReloadInterval!,
                },
                writer.uint32(98).fork()
            ).ldelim();
        }
        if (message.timezone !== '') {
            writer.uint32(114).string(message.timezone);
        }
        if (message.geobaseUri !== '') {
            writer.uint32(122).string(message.geobaseUri);
        }
        if (message.queryLogRetentionSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.queryLogRetentionSize!,
                },
                writer.uint32(130).fork()
            ).ldelim();
        }
        if (message.queryLogRetentionTime !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.queryLogRetentionTime!,
                },
                writer.uint32(138).fork()
            ).ldelim();
        }
        if (message.queryThreadLogEnabled !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.queryThreadLogEnabled!,
                },
                writer.uint32(146).fork()
            ).ldelim();
        }
        if (message.queryThreadLogRetentionSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.queryThreadLogRetentionSize!,
                },
                writer.uint32(154).fork()
            ).ldelim();
        }
        if (message.queryThreadLogRetentionTime !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.queryThreadLogRetentionTime!,
                },
                writer.uint32(162).fork()
            ).ldelim();
        }
        if (message.partLogRetentionSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.partLogRetentionSize!,
                },
                writer.uint32(170).fork()
            ).ldelim();
        }
        if (message.partLogRetentionTime !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.partLogRetentionTime!,
                },
                writer.uint32(178).fork()
            ).ldelim();
        }
        if (message.metricLogEnabled !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.metricLogEnabled!,
                },
                writer.uint32(186).fork()
            ).ldelim();
        }
        if (message.metricLogRetentionSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.metricLogRetentionSize!,
                },
                writer.uint32(194).fork()
            ).ldelim();
        }
        if (message.metricLogRetentionTime !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.metricLogRetentionTime!,
                },
                writer.uint32(202).fork()
            ).ldelim();
        }
        if (message.traceLogEnabled !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.traceLogEnabled!,
                },
                writer.uint32(210).fork()
            ).ldelim();
        }
        if (message.traceLogRetentionSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.traceLogRetentionSize!,
                },
                writer.uint32(218).fork()
            ).ldelim();
        }
        if (message.traceLogRetentionTime !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.traceLogRetentionTime!,
                },
                writer.uint32(226).fork()
            ).ldelim();
        }
        if (message.textLogEnabled !== undefined) {
            BoolValue.encode(
                {
                    $type: 'google.protobuf.BoolValue',
                    value: message.textLogEnabled!,
                },
                writer.uint32(234).fork()
            ).ldelim();
        }
        if (message.textLogRetentionSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.textLogRetentionSize!,
                },
                writer.uint32(242).fork()
            ).ldelim();
        }
        if (message.textLogRetentionTime !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.textLogRetentionTime!,
                },
                writer.uint32(250).fork()
            ).ldelim();
        }
        if (message.textLogLevel !== 0) {
            writer.uint32(256).int32(message.textLogLevel);
        }
        if (message.backgroundPoolSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.backgroundPoolSize!,
                },
                writer.uint32(266).fork()
            ).ldelim();
        }
        if (message.backgroundSchedulePoolSize !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.backgroundSchedulePoolSize!,
                },
                writer.uint32(274).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClickhouseConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClickhouseConfig } as ClickhouseConfig;
        message.compression = [];
        message.dictionaries = [];
        message.graphiteRollup = [];
        message.kafkaTopics = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logLevel = reader.int32() as any;
                    break;
                case 2:
                    message.mergeTree = ClickhouseConfig_MergeTree.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.compression.push(
                        ClickhouseConfig_Compression.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                case 4:
                    message.dictionaries.push(
                        ClickhouseConfig_ExternalDictionary.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                case 5:
                    message.graphiteRollup.push(
                        ClickhouseConfig_GraphiteRollup.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                case 35:
                    message.kafka = ClickhouseConfig_Kafka.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 36:
                    message.kafkaTopics.push(
                        ClickhouseConfig_KafkaTopic.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                case 37:
                    message.rabbitmq = ClickhouseConfig_Rabbitmq.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 6:
                    message.maxConnections = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 7:
                    message.maxConcurrentQueries = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 8:
                    message.keepAliveTimeout = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 9:
                    message.uncompressedCacheSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 10:
                    message.markCacheSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 11:
                    message.maxTableSizeToDrop = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 13:
                    message.maxPartitionSizeToDrop = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 12:
                    message.builtinDictionariesReloadInterval =
                        Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.timezone = reader.string();
                    break;
                case 15:
                    message.geobaseUri = reader.string();
                    break;
                case 16:
                    message.queryLogRetentionSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 17:
                    message.queryLogRetentionTime = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 18:
                    message.queryThreadLogEnabled = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 19:
                    message.queryThreadLogRetentionSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 20:
                    message.queryThreadLogRetentionTime = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 21:
                    message.partLogRetentionSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 22:
                    message.partLogRetentionTime = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 23:
                    message.metricLogEnabled = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 24:
                    message.metricLogRetentionSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 25:
                    message.metricLogRetentionTime = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 26:
                    message.traceLogEnabled = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 27:
                    message.traceLogRetentionSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 28:
                    message.traceLogRetentionTime = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 29:
                    message.textLogEnabled = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 30:
                    message.textLogRetentionSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 31:
                    message.textLogRetentionTime = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 32:
                    message.textLogLevel = reader.int32() as any;
                    break;
                case 33:
                    message.backgroundPoolSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 34:
                    message.backgroundSchedulePoolSize = Int64Value.decode(
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

    fromJSON(object: any): ClickhouseConfig {
        const message = { ...baseClickhouseConfig } as ClickhouseConfig;
        message.compression = [];
        message.dictionaries = [];
        message.graphiteRollup = [];
        message.kafkaTopics = [];
        if (object.logLevel !== undefined && object.logLevel !== null) {
            message.logLevel = clickhouseConfig_LogLevelFromJSON(
                object.logLevel
            );
        } else {
            message.logLevel = 0;
        }
        if (object.mergeTree !== undefined && object.mergeTree !== null) {
            message.mergeTree = ClickhouseConfig_MergeTree.fromJSON(
                object.mergeTree
            );
        } else {
            message.mergeTree = undefined;
        }
        if (object.compression !== undefined && object.compression !== null) {
            for (const e of object.compression) {
                message.compression.push(
                    ClickhouseConfig_Compression.fromJSON(e)
                );
            }
        }
        if (object.dictionaries !== undefined && object.dictionaries !== null) {
            for (const e of object.dictionaries) {
                message.dictionaries.push(
                    ClickhouseConfig_ExternalDictionary.fromJSON(e)
                );
            }
        }
        if (
            object.graphiteRollup !== undefined &&
            object.graphiteRollup !== null
        ) {
            for (const e of object.graphiteRollup) {
                message.graphiteRollup.push(
                    ClickhouseConfig_GraphiteRollup.fromJSON(e)
                );
            }
        }
        if (object.kafka !== undefined && object.kafka !== null) {
            message.kafka = ClickhouseConfig_Kafka.fromJSON(object.kafka);
        } else {
            message.kafka = undefined;
        }
        if (object.kafkaTopics !== undefined && object.kafkaTopics !== null) {
            for (const e of object.kafkaTopics) {
                message.kafkaTopics.push(
                    ClickhouseConfig_KafkaTopic.fromJSON(e)
                );
            }
        }
        if (object.rabbitmq !== undefined && object.rabbitmq !== null) {
            message.rabbitmq = ClickhouseConfig_Rabbitmq.fromJSON(
                object.rabbitmq
            );
        } else {
            message.rabbitmq = undefined;
        }
        if (
            object.maxConnections !== undefined &&
            object.maxConnections !== null
        ) {
            message.maxConnections = Number(object.maxConnections);
        } else {
            message.maxConnections = undefined;
        }
        if (
            object.maxConcurrentQueries !== undefined &&
            object.maxConcurrentQueries !== null
        ) {
            message.maxConcurrentQueries = Number(object.maxConcurrentQueries);
        } else {
            message.maxConcurrentQueries = undefined;
        }
        if (
            object.keepAliveTimeout !== undefined &&
            object.keepAliveTimeout !== null
        ) {
            message.keepAliveTimeout = Number(object.keepAliveTimeout);
        } else {
            message.keepAliveTimeout = undefined;
        }
        if (
            object.uncompressedCacheSize !== undefined &&
            object.uncompressedCacheSize !== null
        ) {
            message.uncompressedCacheSize = Number(
                object.uncompressedCacheSize
            );
        } else {
            message.uncompressedCacheSize = undefined;
        }
        if (
            object.markCacheSize !== undefined &&
            object.markCacheSize !== null
        ) {
            message.markCacheSize = Number(object.markCacheSize);
        } else {
            message.markCacheSize = undefined;
        }
        if (
            object.maxTableSizeToDrop !== undefined &&
            object.maxTableSizeToDrop !== null
        ) {
            message.maxTableSizeToDrop = Number(object.maxTableSizeToDrop);
        } else {
            message.maxTableSizeToDrop = undefined;
        }
        if (
            object.maxPartitionSizeToDrop !== undefined &&
            object.maxPartitionSizeToDrop !== null
        ) {
            message.maxPartitionSizeToDrop = Number(
                object.maxPartitionSizeToDrop
            );
        } else {
            message.maxPartitionSizeToDrop = undefined;
        }
        if (
            object.builtinDictionariesReloadInterval !== undefined &&
            object.builtinDictionariesReloadInterval !== null
        ) {
            message.builtinDictionariesReloadInterval = Number(
                object.builtinDictionariesReloadInterval
            );
        } else {
            message.builtinDictionariesReloadInterval = undefined;
        }
        if (object.timezone !== undefined && object.timezone !== null) {
            message.timezone = String(object.timezone);
        } else {
            message.timezone = '';
        }
        if (object.geobaseUri !== undefined && object.geobaseUri !== null) {
            message.geobaseUri = String(object.geobaseUri);
        } else {
            message.geobaseUri = '';
        }
        if (
            object.queryLogRetentionSize !== undefined &&
            object.queryLogRetentionSize !== null
        ) {
            message.queryLogRetentionSize = Number(
                object.queryLogRetentionSize
            );
        } else {
            message.queryLogRetentionSize = undefined;
        }
        if (
            object.queryLogRetentionTime !== undefined &&
            object.queryLogRetentionTime !== null
        ) {
            message.queryLogRetentionTime = Number(
                object.queryLogRetentionTime
            );
        } else {
            message.queryLogRetentionTime = undefined;
        }
        if (
            object.queryThreadLogEnabled !== undefined &&
            object.queryThreadLogEnabled !== null
        ) {
            message.queryThreadLogEnabled = Boolean(
                object.queryThreadLogEnabled
            );
        } else {
            message.queryThreadLogEnabled = undefined;
        }
        if (
            object.queryThreadLogRetentionSize !== undefined &&
            object.queryThreadLogRetentionSize !== null
        ) {
            message.queryThreadLogRetentionSize = Number(
                object.queryThreadLogRetentionSize
            );
        } else {
            message.queryThreadLogRetentionSize = undefined;
        }
        if (
            object.queryThreadLogRetentionTime !== undefined &&
            object.queryThreadLogRetentionTime !== null
        ) {
            message.queryThreadLogRetentionTime = Number(
                object.queryThreadLogRetentionTime
            );
        } else {
            message.queryThreadLogRetentionTime = undefined;
        }
        if (
            object.partLogRetentionSize !== undefined &&
            object.partLogRetentionSize !== null
        ) {
            message.partLogRetentionSize = Number(object.partLogRetentionSize);
        } else {
            message.partLogRetentionSize = undefined;
        }
        if (
            object.partLogRetentionTime !== undefined &&
            object.partLogRetentionTime !== null
        ) {
            message.partLogRetentionTime = Number(object.partLogRetentionTime);
        } else {
            message.partLogRetentionTime = undefined;
        }
        if (
            object.metricLogEnabled !== undefined &&
            object.metricLogEnabled !== null
        ) {
            message.metricLogEnabled = Boolean(object.metricLogEnabled);
        } else {
            message.metricLogEnabled = undefined;
        }
        if (
            object.metricLogRetentionSize !== undefined &&
            object.metricLogRetentionSize !== null
        ) {
            message.metricLogRetentionSize = Number(
                object.metricLogRetentionSize
            );
        } else {
            message.metricLogRetentionSize = undefined;
        }
        if (
            object.metricLogRetentionTime !== undefined &&
            object.metricLogRetentionTime !== null
        ) {
            message.metricLogRetentionTime = Number(
                object.metricLogRetentionTime
            );
        } else {
            message.metricLogRetentionTime = undefined;
        }
        if (
            object.traceLogEnabled !== undefined &&
            object.traceLogEnabled !== null
        ) {
            message.traceLogEnabled = Boolean(object.traceLogEnabled);
        } else {
            message.traceLogEnabled = undefined;
        }
        if (
            object.traceLogRetentionSize !== undefined &&
            object.traceLogRetentionSize !== null
        ) {
            message.traceLogRetentionSize = Number(
                object.traceLogRetentionSize
            );
        } else {
            message.traceLogRetentionSize = undefined;
        }
        if (
            object.traceLogRetentionTime !== undefined &&
            object.traceLogRetentionTime !== null
        ) {
            message.traceLogRetentionTime = Number(
                object.traceLogRetentionTime
            );
        } else {
            message.traceLogRetentionTime = undefined;
        }
        if (
            object.textLogEnabled !== undefined &&
            object.textLogEnabled !== null
        ) {
            message.textLogEnabled = Boolean(object.textLogEnabled);
        } else {
            message.textLogEnabled = undefined;
        }
        if (
            object.textLogRetentionSize !== undefined &&
            object.textLogRetentionSize !== null
        ) {
            message.textLogRetentionSize = Number(object.textLogRetentionSize);
        } else {
            message.textLogRetentionSize = undefined;
        }
        if (
            object.textLogRetentionTime !== undefined &&
            object.textLogRetentionTime !== null
        ) {
            message.textLogRetentionTime = Number(object.textLogRetentionTime);
        } else {
            message.textLogRetentionTime = undefined;
        }
        if (object.textLogLevel !== undefined && object.textLogLevel !== null) {
            message.textLogLevel = clickhouseConfig_LogLevelFromJSON(
                object.textLogLevel
            );
        } else {
            message.textLogLevel = 0;
        }
        if (
            object.backgroundPoolSize !== undefined &&
            object.backgroundPoolSize !== null
        ) {
            message.backgroundPoolSize = Number(object.backgroundPoolSize);
        } else {
            message.backgroundPoolSize = undefined;
        }
        if (
            object.backgroundSchedulePoolSize !== undefined &&
            object.backgroundSchedulePoolSize !== null
        ) {
            message.backgroundSchedulePoolSize = Number(
                object.backgroundSchedulePoolSize
            );
        } else {
            message.backgroundSchedulePoolSize = undefined;
        }
        return message;
    },

    toJSON(message: ClickhouseConfig): unknown {
        const obj: any = {};
        message.logLevel !== undefined &&
            (obj.logLevel = clickhouseConfig_LogLevelToJSON(message.logLevel));
        message.mergeTree !== undefined &&
            (obj.mergeTree = message.mergeTree
                ? ClickhouseConfig_MergeTree.toJSON(message.mergeTree)
                : undefined);
        if (message.compression) {
            obj.compression = message.compression.map((e) =>
                e ? ClickhouseConfig_Compression.toJSON(e) : undefined
            );
        } else {
            obj.compression = [];
        }
        if (message.dictionaries) {
            obj.dictionaries = message.dictionaries.map((e) =>
                e ? ClickhouseConfig_ExternalDictionary.toJSON(e) : undefined
            );
        } else {
            obj.dictionaries = [];
        }
        if (message.graphiteRollup) {
            obj.graphiteRollup = message.graphiteRollup.map((e) =>
                e ? ClickhouseConfig_GraphiteRollup.toJSON(e) : undefined
            );
        } else {
            obj.graphiteRollup = [];
        }
        message.kafka !== undefined &&
            (obj.kafka = message.kafka
                ? ClickhouseConfig_Kafka.toJSON(message.kafka)
                : undefined);
        if (message.kafkaTopics) {
            obj.kafkaTopics = message.kafkaTopics.map((e) =>
                e ? ClickhouseConfig_KafkaTopic.toJSON(e) : undefined
            );
        } else {
            obj.kafkaTopics = [];
        }
        message.rabbitmq !== undefined &&
            (obj.rabbitmq = message.rabbitmq
                ? ClickhouseConfig_Rabbitmq.toJSON(message.rabbitmq)
                : undefined);
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.maxConcurrentQueries !== undefined &&
            (obj.maxConcurrentQueries = message.maxConcurrentQueries);
        message.keepAliveTimeout !== undefined &&
            (obj.keepAliveTimeout = message.keepAliveTimeout);
        message.uncompressedCacheSize !== undefined &&
            (obj.uncompressedCacheSize = message.uncompressedCacheSize);
        message.markCacheSize !== undefined &&
            (obj.markCacheSize = message.markCacheSize);
        message.maxTableSizeToDrop !== undefined &&
            (obj.maxTableSizeToDrop = message.maxTableSizeToDrop);
        message.maxPartitionSizeToDrop !== undefined &&
            (obj.maxPartitionSizeToDrop = message.maxPartitionSizeToDrop);
        message.builtinDictionariesReloadInterval !== undefined &&
            (obj.builtinDictionariesReloadInterval =
                message.builtinDictionariesReloadInterval);
        message.timezone !== undefined && (obj.timezone = message.timezone);
        message.geobaseUri !== undefined &&
            (obj.geobaseUri = message.geobaseUri);
        message.queryLogRetentionSize !== undefined &&
            (obj.queryLogRetentionSize = message.queryLogRetentionSize);
        message.queryLogRetentionTime !== undefined &&
            (obj.queryLogRetentionTime = message.queryLogRetentionTime);
        message.queryThreadLogEnabled !== undefined &&
            (obj.queryThreadLogEnabled = message.queryThreadLogEnabled);
        message.queryThreadLogRetentionSize !== undefined &&
            (obj.queryThreadLogRetentionSize =
                message.queryThreadLogRetentionSize);
        message.queryThreadLogRetentionTime !== undefined &&
            (obj.queryThreadLogRetentionTime =
                message.queryThreadLogRetentionTime);
        message.partLogRetentionSize !== undefined &&
            (obj.partLogRetentionSize = message.partLogRetentionSize);
        message.partLogRetentionTime !== undefined &&
            (obj.partLogRetentionTime = message.partLogRetentionTime);
        message.metricLogEnabled !== undefined &&
            (obj.metricLogEnabled = message.metricLogEnabled);
        message.metricLogRetentionSize !== undefined &&
            (obj.metricLogRetentionSize = message.metricLogRetentionSize);
        message.metricLogRetentionTime !== undefined &&
            (obj.metricLogRetentionTime = message.metricLogRetentionTime);
        message.traceLogEnabled !== undefined &&
            (obj.traceLogEnabled = message.traceLogEnabled);
        message.traceLogRetentionSize !== undefined &&
            (obj.traceLogRetentionSize = message.traceLogRetentionSize);
        message.traceLogRetentionTime !== undefined &&
            (obj.traceLogRetentionTime = message.traceLogRetentionTime);
        message.textLogEnabled !== undefined &&
            (obj.textLogEnabled = message.textLogEnabled);
        message.textLogRetentionSize !== undefined &&
            (obj.textLogRetentionSize = message.textLogRetentionSize);
        message.textLogRetentionTime !== undefined &&
            (obj.textLogRetentionTime = message.textLogRetentionTime);
        message.textLogLevel !== undefined &&
            (obj.textLogLevel = clickhouseConfig_LogLevelToJSON(
                message.textLogLevel
            ));
        message.backgroundPoolSize !== undefined &&
            (obj.backgroundPoolSize = message.backgroundPoolSize);
        message.backgroundSchedulePoolSize !== undefined &&
            (obj.backgroundSchedulePoolSize =
                message.backgroundSchedulePoolSize);
        return obj;
    },

    fromPartial(object: DeepPartial<ClickhouseConfig>): ClickhouseConfig {
        const message = { ...baseClickhouseConfig } as ClickhouseConfig;
        message.compression = [];
        message.dictionaries = [];
        message.graphiteRollup = [];
        message.kafkaTopics = [];
        if (object.logLevel !== undefined && object.logLevel !== null) {
            message.logLevel = object.logLevel;
        } else {
            message.logLevel = 0;
        }
        if (object.mergeTree !== undefined && object.mergeTree !== null) {
            message.mergeTree = ClickhouseConfig_MergeTree.fromPartial(
                object.mergeTree
            );
        } else {
            message.mergeTree = undefined;
        }
        if (object.compression !== undefined && object.compression !== null) {
            for (const e of object.compression) {
                message.compression.push(
                    ClickhouseConfig_Compression.fromPartial(e)
                );
            }
        }
        if (object.dictionaries !== undefined && object.dictionaries !== null) {
            for (const e of object.dictionaries) {
                message.dictionaries.push(
                    ClickhouseConfig_ExternalDictionary.fromPartial(e)
                );
            }
        }
        if (
            object.graphiteRollup !== undefined &&
            object.graphiteRollup !== null
        ) {
            for (const e of object.graphiteRollup) {
                message.graphiteRollup.push(
                    ClickhouseConfig_GraphiteRollup.fromPartial(e)
                );
            }
        }
        if (object.kafka !== undefined && object.kafka !== null) {
            message.kafka = ClickhouseConfig_Kafka.fromPartial(object.kafka);
        } else {
            message.kafka = undefined;
        }
        if (object.kafkaTopics !== undefined && object.kafkaTopics !== null) {
            for (const e of object.kafkaTopics) {
                message.kafkaTopics.push(
                    ClickhouseConfig_KafkaTopic.fromPartial(e)
                );
            }
        }
        if (object.rabbitmq !== undefined && object.rabbitmq !== null) {
            message.rabbitmq = ClickhouseConfig_Rabbitmq.fromPartial(
                object.rabbitmq
            );
        } else {
            message.rabbitmq = undefined;
        }
        if (
            object.maxConnections !== undefined &&
            object.maxConnections !== null
        ) {
            message.maxConnections = object.maxConnections;
        } else {
            message.maxConnections = undefined;
        }
        if (
            object.maxConcurrentQueries !== undefined &&
            object.maxConcurrentQueries !== null
        ) {
            message.maxConcurrentQueries = object.maxConcurrentQueries;
        } else {
            message.maxConcurrentQueries = undefined;
        }
        if (
            object.keepAliveTimeout !== undefined &&
            object.keepAliveTimeout !== null
        ) {
            message.keepAliveTimeout = object.keepAliveTimeout;
        } else {
            message.keepAliveTimeout = undefined;
        }
        if (
            object.uncompressedCacheSize !== undefined &&
            object.uncompressedCacheSize !== null
        ) {
            message.uncompressedCacheSize = object.uncompressedCacheSize;
        } else {
            message.uncompressedCacheSize = undefined;
        }
        if (
            object.markCacheSize !== undefined &&
            object.markCacheSize !== null
        ) {
            message.markCacheSize = object.markCacheSize;
        } else {
            message.markCacheSize = undefined;
        }
        if (
            object.maxTableSizeToDrop !== undefined &&
            object.maxTableSizeToDrop !== null
        ) {
            message.maxTableSizeToDrop = object.maxTableSizeToDrop;
        } else {
            message.maxTableSizeToDrop = undefined;
        }
        if (
            object.maxPartitionSizeToDrop !== undefined &&
            object.maxPartitionSizeToDrop !== null
        ) {
            message.maxPartitionSizeToDrop = object.maxPartitionSizeToDrop;
        } else {
            message.maxPartitionSizeToDrop = undefined;
        }
        if (
            object.builtinDictionariesReloadInterval !== undefined &&
            object.builtinDictionariesReloadInterval !== null
        ) {
            message.builtinDictionariesReloadInterval =
                object.builtinDictionariesReloadInterval;
        } else {
            message.builtinDictionariesReloadInterval = undefined;
        }
        if (object.timezone !== undefined && object.timezone !== null) {
            message.timezone = object.timezone;
        } else {
            message.timezone = '';
        }
        if (object.geobaseUri !== undefined && object.geobaseUri !== null) {
            message.geobaseUri = object.geobaseUri;
        } else {
            message.geobaseUri = '';
        }
        if (
            object.queryLogRetentionSize !== undefined &&
            object.queryLogRetentionSize !== null
        ) {
            message.queryLogRetentionSize = object.queryLogRetentionSize;
        } else {
            message.queryLogRetentionSize = undefined;
        }
        if (
            object.queryLogRetentionTime !== undefined &&
            object.queryLogRetentionTime !== null
        ) {
            message.queryLogRetentionTime = object.queryLogRetentionTime;
        } else {
            message.queryLogRetentionTime = undefined;
        }
        if (
            object.queryThreadLogEnabled !== undefined &&
            object.queryThreadLogEnabled !== null
        ) {
            message.queryThreadLogEnabled = object.queryThreadLogEnabled;
        } else {
            message.queryThreadLogEnabled = undefined;
        }
        if (
            object.queryThreadLogRetentionSize !== undefined &&
            object.queryThreadLogRetentionSize !== null
        ) {
            message.queryThreadLogRetentionSize =
                object.queryThreadLogRetentionSize;
        } else {
            message.queryThreadLogRetentionSize = undefined;
        }
        if (
            object.queryThreadLogRetentionTime !== undefined &&
            object.queryThreadLogRetentionTime !== null
        ) {
            message.queryThreadLogRetentionTime =
                object.queryThreadLogRetentionTime;
        } else {
            message.queryThreadLogRetentionTime = undefined;
        }
        if (
            object.partLogRetentionSize !== undefined &&
            object.partLogRetentionSize !== null
        ) {
            message.partLogRetentionSize = object.partLogRetentionSize;
        } else {
            message.partLogRetentionSize = undefined;
        }
        if (
            object.partLogRetentionTime !== undefined &&
            object.partLogRetentionTime !== null
        ) {
            message.partLogRetentionTime = object.partLogRetentionTime;
        } else {
            message.partLogRetentionTime = undefined;
        }
        if (
            object.metricLogEnabled !== undefined &&
            object.metricLogEnabled !== null
        ) {
            message.metricLogEnabled = object.metricLogEnabled;
        } else {
            message.metricLogEnabled = undefined;
        }
        if (
            object.metricLogRetentionSize !== undefined &&
            object.metricLogRetentionSize !== null
        ) {
            message.metricLogRetentionSize = object.metricLogRetentionSize;
        } else {
            message.metricLogRetentionSize = undefined;
        }
        if (
            object.metricLogRetentionTime !== undefined &&
            object.metricLogRetentionTime !== null
        ) {
            message.metricLogRetentionTime = object.metricLogRetentionTime;
        } else {
            message.metricLogRetentionTime = undefined;
        }
        if (
            object.traceLogEnabled !== undefined &&
            object.traceLogEnabled !== null
        ) {
            message.traceLogEnabled = object.traceLogEnabled;
        } else {
            message.traceLogEnabled = undefined;
        }
        if (
            object.traceLogRetentionSize !== undefined &&
            object.traceLogRetentionSize !== null
        ) {
            message.traceLogRetentionSize = object.traceLogRetentionSize;
        } else {
            message.traceLogRetentionSize = undefined;
        }
        if (
            object.traceLogRetentionTime !== undefined &&
            object.traceLogRetentionTime !== null
        ) {
            message.traceLogRetentionTime = object.traceLogRetentionTime;
        } else {
            message.traceLogRetentionTime = undefined;
        }
        if (
            object.textLogEnabled !== undefined &&
            object.textLogEnabled !== null
        ) {
            message.textLogEnabled = object.textLogEnabled;
        } else {
            message.textLogEnabled = undefined;
        }
        if (
            object.textLogRetentionSize !== undefined &&
            object.textLogRetentionSize !== null
        ) {
            message.textLogRetentionSize = object.textLogRetentionSize;
        } else {
            message.textLogRetentionSize = undefined;
        }
        if (
            object.textLogRetentionTime !== undefined &&
            object.textLogRetentionTime !== null
        ) {
            message.textLogRetentionTime = object.textLogRetentionTime;
        } else {
            message.textLogRetentionTime = undefined;
        }
        if (object.textLogLevel !== undefined && object.textLogLevel !== null) {
            message.textLogLevel = object.textLogLevel;
        } else {
            message.textLogLevel = 0;
        }
        if (
            object.backgroundPoolSize !== undefined &&
            object.backgroundPoolSize !== null
        ) {
            message.backgroundPoolSize = object.backgroundPoolSize;
        } else {
            message.backgroundPoolSize = undefined;
        }
        if (
            object.backgroundSchedulePoolSize !== undefined &&
            object.backgroundSchedulePoolSize !== null
        ) {
            message.backgroundSchedulePoolSize =
                object.backgroundSchedulePoolSize;
        } else {
            message.backgroundSchedulePoolSize = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(ClickhouseConfig.$type, ClickhouseConfig);

const baseClickhouseConfig_MergeTree: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree',
};

export const ClickhouseConfig_MergeTree = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree' as const,

    encode(
        message: ClickhouseConfig_MergeTree,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.replicatedDeduplicationWindow !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.replicatedDeduplicationWindow!,
                },
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.replicatedDeduplicationWindowSeconds !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.replicatedDeduplicationWindowSeconds!,
                },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.partsToDelayInsert !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.partsToDelayInsert!,
                },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.partsToThrowInsert !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.partsToThrowInsert!,
                },
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.maxReplicatedMergesInQueue !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxReplicatedMergesInQueue!,
                },
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (
            message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined
        ) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge!,
                },
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.maxBytesToMergeAtMinSpaceInPool !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxBytesToMergeAtMinSpaceInPool!,
                },
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.maxBytesToMergeAtMaxSpaceInPool !== undefined) {
            Int64Value.encode(
                {
                    $type: 'google.protobuf.Int64Value',
                    value: message.maxBytesToMergeAtMaxSpaceInPool!,
                },
                writer.uint32(66).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_MergeTree {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_MergeTree,
        } as ClickhouseConfig_MergeTree;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.replicatedDeduplicationWindow = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 2:
                    message.replicatedDeduplicationWindowSeconds =
                        Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.partsToDelayInsert = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 4:
                    message.partsToThrowInsert = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 5:
                    message.maxReplicatedMergesInQueue = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 6:
                    message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge =
                        Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.maxBytesToMergeAtMinSpaceInPool = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 8:
                    message.maxBytesToMergeAtMaxSpaceInPool = Int64Value.decode(
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

    fromJSON(object: any): ClickhouseConfig_MergeTree {
        const message = {
            ...baseClickhouseConfig_MergeTree,
        } as ClickhouseConfig_MergeTree;
        if (
            object.replicatedDeduplicationWindow !== undefined &&
            object.replicatedDeduplicationWindow !== null
        ) {
            message.replicatedDeduplicationWindow = Number(
                object.replicatedDeduplicationWindow
            );
        } else {
            message.replicatedDeduplicationWindow = undefined;
        }
        if (
            object.replicatedDeduplicationWindowSeconds !== undefined &&
            object.replicatedDeduplicationWindowSeconds !== null
        ) {
            message.replicatedDeduplicationWindowSeconds = Number(
                object.replicatedDeduplicationWindowSeconds
            );
        } else {
            message.replicatedDeduplicationWindowSeconds = undefined;
        }
        if (
            object.partsToDelayInsert !== undefined &&
            object.partsToDelayInsert !== null
        ) {
            message.partsToDelayInsert = Number(object.partsToDelayInsert);
        } else {
            message.partsToDelayInsert = undefined;
        }
        if (
            object.partsToThrowInsert !== undefined &&
            object.partsToThrowInsert !== null
        ) {
            message.partsToThrowInsert = Number(object.partsToThrowInsert);
        } else {
            message.partsToThrowInsert = undefined;
        }
        if (
            object.maxReplicatedMergesInQueue !== undefined &&
            object.maxReplicatedMergesInQueue !== null
        ) {
            message.maxReplicatedMergesInQueue = Number(
                object.maxReplicatedMergesInQueue
            );
        } else {
            message.maxReplicatedMergesInQueue = undefined;
        }
        if (
            object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !==
                undefined &&
            object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== null
        ) {
            message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = Number(
                object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge
            );
        } else {
            message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = undefined;
        }
        if (
            object.maxBytesToMergeAtMinSpaceInPool !== undefined &&
            object.maxBytesToMergeAtMinSpaceInPool !== null
        ) {
            message.maxBytesToMergeAtMinSpaceInPool = Number(
                object.maxBytesToMergeAtMinSpaceInPool
            );
        } else {
            message.maxBytesToMergeAtMinSpaceInPool = undefined;
        }
        if (
            object.maxBytesToMergeAtMaxSpaceInPool !== undefined &&
            object.maxBytesToMergeAtMaxSpaceInPool !== null
        ) {
            message.maxBytesToMergeAtMaxSpaceInPool = Number(
                object.maxBytesToMergeAtMaxSpaceInPool
            );
        } else {
            message.maxBytesToMergeAtMaxSpaceInPool = undefined;
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_MergeTree): unknown {
        const obj: any = {};
        message.replicatedDeduplicationWindow !== undefined &&
            (obj.replicatedDeduplicationWindow =
                message.replicatedDeduplicationWindow);
        message.replicatedDeduplicationWindowSeconds !== undefined &&
            (obj.replicatedDeduplicationWindowSeconds =
                message.replicatedDeduplicationWindowSeconds);
        message.partsToDelayInsert !== undefined &&
            (obj.partsToDelayInsert = message.partsToDelayInsert);
        message.partsToThrowInsert !== undefined &&
            (obj.partsToThrowInsert = message.partsToThrowInsert);
        message.maxReplicatedMergesInQueue !== undefined &&
            (obj.maxReplicatedMergesInQueue =
                message.maxReplicatedMergesInQueue);
        message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined &&
            (obj.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge =
                message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge);
        message.maxBytesToMergeAtMinSpaceInPool !== undefined &&
            (obj.maxBytesToMergeAtMinSpaceInPool =
                message.maxBytesToMergeAtMinSpaceInPool);
        message.maxBytesToMergeAtMaxSpaceInPool !== undefined &&
            (obj.maxBytesToMergeAtMaxSpaceInPool =
                message.maxBytesToMergeAtMaxSpaceInPool);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_MergeTree>
    ): ClickhouseConfig_MergeTree {
        const message = {
            ...baseClickhouseConfig_MergeTree,
        } as ClickhouseConfig_MergeTree;
        if (
            object.replicatedDeduplicationWindow !== undefined &&
            object.replicatedDeduplicationWindow !== null
        ) {
            message.replicatedDeduplicationWindow =
                object.replicatedDeduplicationWindow;
        } else {
            message.replicatedDeduplicationWindow = undefined;
        }
        if (
            object.replicatedDeduplicationWindowSeconds !== undefined &&
            object.replicatedDeduplicationWindowSeconds !== null
        ) {
            message.replicatedDeduplicationWindowSeconds =
                object.replicatedDeduplicationWindowSeconds;
        } else {
            message.replicatedDeduplicationWindowSeconds = undefined;
        }
        if (
            object.partsToDelayInsert !== undefined &&
            object.partsToDelayInsert !== null
        ) {
            message.partsToDelayInsert = object.partsToDelayInsert;
        } else {
            message.partsToDelayInsert = undefined;
        }
        if (
            object.partsToThrowInsert !== undefined &&
            object.partsToThrowInsert !== null
        ) {
            message.partsToThrowInsert = object.partsToThrowInsert;
        } else {
            message.partsToThrowInsert = undefined;
        }
        if (
            object.maxReplicatedMergesInQueue !== undefined &&
            object.maxReplicatedMergesInQueue !== null
        ) {
            message.maxReplicatedMergesInQueue =
                object.maxReplicatedMergesInQueue;
        } else {
            message.maxReplicatedMergesInQueue = undefined;
        }
        if (
            object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !==
                undefined &&
            object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== null
        ) {
            message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge =
                object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge;
        } else {
            message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = undefined;
        }
        if (
            object.maxBytesToMergeAtMinSpaceInPool !== undefined &&
            object.maxBytesToMergeAtMinSpaceInPool !== null
        ) {
            message.maxBytesToMergeAtMinSpaceInPool =
                object.maxBytesToMergeAtMinSpaceInPool;
        } else {
            message.maxBytesToMergeAtMinSpaceInPool = undefined;
        }
        if (
            object.maxBytesToMergeAtMaxSpaceInPool !== undefined &&
            object.maxBytesToMergeAtMaxSpaceInPool !== null
        ) {
            message.maxBytesToMergeAtMaxSpaceInPool =
                object.maxBytesToMergeAtMaxSpaceInPool;
        } else {
            message.maxBytesToMergeAtMaxSpaceInPool = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_MergeTree.$type,
    ClickhouseConfig_MergeTree
);

const baseClickhouseConfig_Kafka: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka',
    securityProtocol: 0,
    saslMechanism: 0,
    saslUsername: '',
    saslPassword: '',
};

export const ClickhouseConfig_Kafka = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka' as const,

    encode(
        message: ClickhouseConfig_Kafka,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.securityProtocol !== 0) {
            writer.uint32(8).int32(message.securityProtocol);
        }
        if (message.saslMechanism !== 0) {
            writer.uint32(16).int32(message.saslMechanism);
        }
        if (message.saslUsername !== '') {
            writer.uint32(26).string(message.saslUsername);
        }
        if (message.saslPassword !== '') {
            writer.uint32(34).string(message.saslPassword);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_Kafka {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_Kafka,
        } as ClickhouseConfig_Kafka;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityProtocol = reader.int32() as any;
                    break;
                case 2:
                    message.saslMechanism = reader.int32() as any;
                    break;
                case 3:
                    message.saslUsername = reader.string();
                    break;
                case 4:
                    message.saslPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_Kafka {
        const message = {
            ...baseClickhouseConfig_Kafka,
        } as ClickhouseConfig_Kafka;
        if (
            object.securityProtocol !== undefined &&
            object.securityProtocol !== null
        ) {
            message.securityProtocol =
                clickhouseConfig_Kafka_SecurityProtocolFromJSON(
                    object.securityProtocol
                );
        } else {
            message.securityProtocol = 0;
        }
        if (
            object.saslMechanism !== undefined &&
            object.saslMechanism !== null
        ) {
            message.saslMechanism =
                clickhouseConfig_Kafka_SaslMechanismFromJSON(
                    object.saslMechanism
                );
        } else {
            message.saslMechanism = 0;
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
        return message;
    },

    toJSON(message: ClickhouseConfig_Kafka): unknown {
        const obj: any = {};
        message.securityProtocol !== undefined &&
            (obj.securityProtocol =
                clickhouseConfig_Kafka_SecurityProtocolToJSON(
                    message.securityProtocol
                ));
        message.saslMechanism !== undefined &&
            (obj.saslMechanism = clickhouseConfig_Kafka_SaslMechanismToJSON(
                message.saslMechanism
            ));
        message.saslUsername !== undefined &&
            (obj.saslUsername = message.saslUsername);
        message.saslPassword !== undefined &&
            (obj.saslPassword = message.saslPassword);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_Kafka>
    ): ClickhouseConfig_Kafka {
        const message = {
            ...baseClickhouseConfig_Kafka,
        } as ClickhouseConfig_Kafka;
        if (
            object.securityProtocol !== undefined &&
            object.securityProtocol !== null
        ) {
            message.securityProtocol = object.securityProtocol;
        } else {
            message.securityProtocol = 0;
        }
        if (
            object.saslMechanism !== undefined &&
            object.saslMechanism !== null
        ) {
            message.saslMechanism = object.saslMechanism;
        } else {
            message.saslMechanism = 0;
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
        return message;
    },
};

messageTypeRegistry.set(ClickhouseConfig_Kafka.$type, ClickhouseConfig_Kafka);

const baseClickhouseConfig_KafkaTopic: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic',
    name: '',
};

export const ClickhouseConfig_KafkaTopic = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic' as const,

    encode(
        message: ClickhouseConfig_KafkaTopic,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.settings !== undefined) {
            ClickhouseConfig_Kafka.encode(
                message.settings,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_KafkaTopic {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_KafkaTopic,
        } as ClickhouseConfig_KafkaTopic;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.settings = ClickhouseConfig_Kafka.decode(
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

    fromJSON(object: any): ClickhouseConfig_KafkaTopic {
        const message = {
            ...baseClickhouseConfig_KafkaTopic,
        } as ClickhouseConfig_KafkaTopic;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = ClickhouseConfig_Kafka.fromJSON(object.settings);
        } else {
            message.settings = undefined;
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_KafkaTopic): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? ClickhouseConfig_Kafka.toJSON(message.settings)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_KafkaTopic>
    ): ClickhouseConfig_KafkaTopic {
        const message = {
            ...baseClickhouseConfig_KafkaTopic,
        } as ClickhouseConfig_KafkaTopic;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.settings !== undefined && object.settings !== null) {
            message.settings = ClickhouseConfig_Kafka.fromPartial(
                object.settings
            );
        } else {
            message.settings = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_KafkaTopic.$type,
    ClickhouseConfig_KafkaTopic
);

const baseClickhouseConfig_Rabbitmq: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq',
    username: '',
    password: '',
};

export const ClickhouseConfig_Rabbitmq = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq' as const,

    encode(
        message: ClickhouseConfig_Rabbitmq,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.username !== '') {
            writer.uint32(10).string(message.username);
        }
        if (message.password !== '') {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_Rabbitmq {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_Rabbitmq,
        } as ClickhouseConfig_Rabbitmq;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_Rabbitmq {
        const message = {
            ...baseClickhouseConfig_Rabbitmq,
        } as ClickhouseConfig_Rabbitmq;
        if (object.username !== undefined && object.username !== null) {
            message.username = String(object.username);
        } else {
            message.username = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_Rabbitmq): unknown {
        const obj: any = {};
        message.username !== undefined && (obj.username = message.username);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_Rabbitmq>
    ): ClickhouseConfig_Rabbitmq {
        const message = {
            ...baseClickhouseConfig_Rabbitmq,
        } as ClickhouseConfig_Rabbitmq;
        if (object.username !== undefined && object.username !== null) {
            message.username = object.username;
        } else {
            message.username = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_Rabbitmq.$type,
    ClickhouseConfig_Rabbitmq
);

const baseClickhouseConfig_Compression: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression',
    method: 0,
    minPartSize: 0,
    minPartSizeRatio: 0,
};

export const ClickhouseConfig_Compression = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression' as const,

    encode(
        message: ClickhouseConfig_Compression,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.method !== 0) {
            writer.uint32(8).int32(message.method);
        }
        if (message.minPartSize !== 0) {
            writer.uint32(16).int64(message.minPartSize);
        }
        if (message.minPartSizeRatio !== 0) {
            writer.uint32(25).double(message.minPartSizeRatio);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_Compression {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_Compression,
        } as ClickhouseConfig_Compression;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.method = reader.int32() as any;
                    break;
                case 2:
                    message.minPartSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.minPartSizeRatio = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_Compression {
        const message = {
            ...baseClickhouseConfig_Compression,
        } as ClickhouseConfig_Compression;
        if (object.method !== undefined && object.method !== null) {
            message.method = clickhouseConfig_Compression_MethodFromJSON(
                object.method
            );
        } else {
            message.method = 0;
        }
        if (object.minPartSize !== undefined && object.minPartSize !== null) {
            message.minPartSize = Number(object.minPartSize);
        } else {
            message.minPartSize = 0;
        }
        if (
            object.minPartSizeRatio !== undefined &&
            object.minPartSizeRatio !== null
        ) {
            message.minPartSizeRatio = Number(object.minPartSizeRatio);
        } else {
            message.minPartSizeRatio = 0;
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_Compression): unknown {
        const obj: any = {};
        message.method !== undefined &&
            (obj.method = clickhouseConfig_Compression_MethodToJSON(
                message.method
            ));
        message.minPartSize !== undefined &&
            (obj.minPartSize = message.minPartSize);
        message.minPartSizeRatio !== undefined &&
            (obj.minPartSizeRatio = message.minPartSizeRatio);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_Compression>
    ): ClickhouseConfig_Compression {
        const message = {
            ...baseClickhouseConfig_Compression,
        } as ClickhouseConfig_Compression;
        if (object.method !== undefined && object.method !== null) {
            message.method = object.method;
        } else {
            message.method = 0;
        }
        if (object.minPartSize !== undefined && object.minPartSize !== null) {
            message.minPartSize = object.minPartSize;
        } else {
            message.minPartSize = 0;
        }
        if (
            object.minPartSizeRatio !== undefined &&
            object.minPartSizeRatio !== null
        ) {
            message.minPartSizeRatio = object.minPartSizeRatio;
        } else {
            message.minPartSizeRatio = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_Compression.$type,
    ClickhouseConfig_Compression
);

const baseClickhouseConfig_ExternalDictionary: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary',
    name: '',
};

export const ClickhouseConfig_ExternalDictionary = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.structure !== undefined) {
            ClickhouseConfig_ExternalDictionary_Structure.encode(
                message.structure,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.layout !== undefined) {
            ClickhouseConfig_ExternalDictionary_Layout.encode(
                message.layout,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.fixedLifetime !== undefined) {
            writer.uint32(32).int64(message.fixedLifetime);
        }
        if (message.lifetimeRange !== undefined) {
            ClickhouseConfig_ExternalDictionary_Range.encode(
                message.lifetimeRange,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.httpSource !== undefined) {
            ClickhouseConfig_ExternalDictionary_HttpSource.encode(
                message.httpSource,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.mysqlSource !== undefined) {
            ClickhouseConfig_ExternalDictionary_MysqlSource.encode(
                message.mysqlSource,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.clickhouseSource !== undefined) {
            ClickhouseConfig_ExternalDictionary_ClickhouseSource.encode(
                message.clickhouseSource,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.mongodbSource !== undefined) {
            ClickhouseConfig_ExternalDictionary_MongodbSource.encode(
                message.mongodbSource,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.postgresqlSource !== undefined) {
            ClickhouseConfig_ExternalDictionary_PostgresqlSource.encode(
                message.postgresqlSource,
                writer.uint32(82).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary,
        } as ClickhouseConfig_ExternalDictionary;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.structure =
                        ClickhouseConfig_ExternalDictionary_Structure.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 3:
                    message.layout =
                        ClickhouseConfig_ExternalDictionary_Layout.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 4:
                    message.fixedLifetime = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 5:
                    message.lifetimeRange =
                        ClickhouseConfig_ExternalDictionary_Range.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 6:
                    message.httpSource =
                        ClickhouseConfig_ExternalDictionary_HttpSource.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 7:
                    message.mysqlSource =
                        ClickhouseConfig_ExternalDictionary_MysqlSource.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 8:
                    message.clickhouseSource =
                        ClickhouseConfig_ExternalDictionary_ClickhouseSource.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 9:
                    message.mongodbSource =
                        ClickhouseConfig_ExternalDictionary_MongodbSource.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 10:
                    message.postgresqlSource =
                        ClickhouseConfig_ExternalDictionary_PostgresqlSource.decode(
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

    fromJSON(object: any): ClickhouseConfig_ExternalDictionary {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary,
        } as ClickhouseConfig_ExternalDictionary;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.structure !== undefined && object.structure !== null) {
            message.structure =
                ClickhouseConfig_ExternalDictionary_Structure.fromJSON(
                    object.structure
                );
        } else {
            message.structure = undefined;
        }
        if (object.layout !== undefined && object.layout !== null) {
            message.layout =
                ClickhouseConfig_ExternalDictionary_Layout.fromJSON(
                    object.layout
                );
        } else {
            message.layout = undefined;
        }
        if (
            object.fixedLifetime !== undefined &&
            object.fixedLifetime !== null
        ) {
            message.fixedLifetime = Number(object.fixedLifetime);
        } else {
            message.fixedLifetime = undefined;
        }
        if (
            object.lifetimeRange !== undefined &&
            object.lifetimeRange !== null
        ) {
            message.lifetimeRange =
                ClickhouseConfig_ExternalDictionary_Range.fromJSON(
                    object.lifetimeRange
                );
        } else {
            message.lifetimeRange = undefined;
        }
        if (object.httpSource !== undefined && object.httpSource !== null) {
            message.httpSource =
                ClickhouseConfig_ExternalDictionary_HttpSource.fromJSON(
                    object.httpSource
                );
        } else {
            message.httpSource = undefined;
        }
        if (object.mysqlSource !== undefined && object.mysqlSource !== null) {
            message.mysqlSource =
                ClickhouseConfig_ExternalDictionary_MysqlSource.fromJSON(
                    object.mysqlSource
                );
        } else {
            message.mysqlSource = undefined;
        }
        if (
            object.clickhouseSource !== undefined &&
            object.clickhouseSource !== null
        ) {
            message.clickhouseSource =
                ClickhouseConfig_ExternalDictionary_ClickhouseSource.fromJSON(
                    object.clickhouseSource
                );
        } else {
            message.clickhouseSource = undefined;
        }
        if (
            object.mongodbSource !== undefined &&
            object.mongodbSource !== null
        ) {
            message.mongodbSource =
                ClickhouseConfig_ExternalDictionary_MongodbSource.fromJSON(
                    object.mongodbSource
                );
        } else {
            message.mongodbSource = undefined;
        }
        if (
            object.postgresqlSource !== undefined &&
            object.postgresqlSource !== null
        ) {
            message.postgresqlSource =
                ClickhouseConfig_ExternalDictionary_PostgresqlSource.fromJSON(
                    object.postgresqlSource
                );
        } else {
            message.postgresqlSource = undefined;
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_ExternalDictionary): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.structure !== undefined &&
            (obj.structure = message.structure
                ? ClickhouseConfig_ExternalDictionary_Structure.toJSON(
                      message.structure
                  )
                : undefined);
        message.layout !== undefined &&
            (obj.layout = message.layout
                ? ClickhouseConfig_ExternalDictionary_Layout.toJSON(
                      message.layout
                  )
                : undefined);
        message.fixedLifetime !== undefined &&
            (obj.fixedLifetime = message.fixedLifetime);
        message.lifetimeRange !== undefined &&
            (obj.lifetimeRange = message.lifetimeRange
                ? ClickhouseConfig_ExternalDictionary_Range.toJSON(
                      message.lifetimeRange
                  )
                : undefined);
        message.httpSource !== undefined &&
            (obj.httpSource = message.httpSource
                ? ClickhouseConfig_ExternalDictionary_HttpSource.toJSON(
                      message.httpSource
                  )
                : undefined);
        message.mysqlSource !== undefined &&
            (obj.mysqlSource = message.mysqlSource
                ? ClickhouseConfig_ExternalDictionary_MysqlSource.toJSON(
                      message.mysqlSource
                  )
                : undefined);
        message.clickhouseSource !== undefined &&
            (obj.clickhouseSource = message.clickhouseSource
                ? ClickhouseConfig_ExternalDictionary_ClickhouseSource.toJSON(
                      message.clickhouseSource
                  )
                : undefined);
        message.mongodbSource !== undefined &&
            (obj.mongodbSource = message.mongodbSource
                ? ClickhouseConfig_ExternalDictionary_MongodbSource.toJSON(
                      message.mongodbSource
                  )
                : undefined);
        message.postgresqlSource !== undefined &&
            (obj.postgresqlSource = message.postgresqlSource
                ? ClickhouseConfig_ExternalDictionary_PostgresqlSource.toJSON(
                      message.postgresqlSource
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary>
    ): ClickhouseConfig_ExternalDictionary {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary,
        } as ClickhouseConfig_ExternalDictionary;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.structure !== undefined && object.structure !== null) {
            message.structure =
                ClickhouseConfig_ExternalDictionary_Structure.fromPartial(
                    object.structure
                );
        } else {
            message.structure = undefined;
        }
        if (object.layout !== undefined && object.layout !== null) {
            message.layout =
                ClickhouseConfig_ExternalDictionary_Layout.fromPartial(
                    object.layout
                );
        } else {
            message.layout = undefined;
        }
        if (
            object.fixedLifetime !== undefined &&
            object.fixedLifetime !== null
        ) {
            message.fixedLifetime = object.fixedLifetime;
        } else {
            message.fixedLifetime = undefined;
        }
        if (
            object.lifetimeRange !== undefined &&
            object.lifetimeRange !== null
        ) {
            message.lifetimeRange =
                ClickhouseConfig_ExternalDictionary_Range.fromPartial(
                    object.lifetimeRange
                );
        } else {
            message.lifetimeRange = undefined;
        }
        if (object.httpSource !== undefined && object.httpSource !== null) {
            message.httpSource =
                ClickhouseConfig_ExternalDictionary_HttpSource.fromPartial(
                    object.httpSource
                );
        } else {
            message.httpSource = undefined;
        }
        if (object.mysqlSource !== undefined && object.mysqlSource !== null) {
            message.mysqlSource =
                ClickhouseConfig_ExternalDictionary_MysqlSource.fromPartial(
                    object.mysqlSource
                );
        } else {
            message.mysqlSource = undefined;
        }
        if (
            object.clickhouseSource !== undefined &&
            object.clickhouseSource !== null
        ) {
            message.clickhouseSource =
                ClickhouseConfig_ExternalDictionary_ClickhouseSource.fromPartial(
                    object.clickhouseSource
                );
        } else {
            message.clickhouseSource = undefined;
        }
        if (
            object.mongodbSource !== undefined &&
            object.mongodbSource !== null
        ) {
            message.mongodbSource =
                ClickhouseConfig_ExternalDictionary_MongodbSource.fromPartial(
                    object.mongodbSource
                );
        } else {
            message.mongodbSource = undefined;
        }
        if (
            object.postgresqlSource !== undefined &&
            object.postgresqlSource !== null
        ) {
            message.postgresqlSource =
                ClickhouseConfig_ExternalDictionary_PostgresqlSource.fromPartial(
                    object.postgresqlSource
                );
        } else {
            message.postgresqlSource = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary.$type,
    ClickhouseConfig_ExternalDictionary
);

const baseClickhouseConfig_ExternalDictionary_HttpSource: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource',
    url: '',
    format: '',
};

export const ClickhouseConfig_ExternalDictionary_HttpSource = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_HttpSource,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.format !== '') {
            writer.uint32(18).string(message.format);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_HttpSource {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_HttpSource,
        } as ClickhouseConfig_ExternalDictionary_HttpSource;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.format = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_HttpSource {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_HttpSource,
        } as ClickhouseConfig_ExternalDictionary_HttpSource;
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        } else {
            message.url = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = String(object.format);
        } else {
            message.format = '';
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_ExternalDictionary_HttpSource): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.format !== undefined && (obj.format = message.format);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_HttpSource>
    ): ClickhouseConfig_ExternalDictionary_HttpSource {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_HttpSource,
        } as ClickhouseConfig_ExternalDictionary_HttpSource;
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        } else {
            message.url = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        } else {
            message.format = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_HttpSource.$type,
    ClickhouseConfig_ExternalDictionary_HttpSource
);

const baseClickhouseConfig_ExternalDictionary_MysqlSource: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource',
    db: '',
    table: '',
    port: 0,
    user: '',
    password: '',
    where: '',
    invalidateQuery: '',
};

export const ClickhouseConfig_ExternalDictionary_MysqlSource = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_MysqlSource,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.db !== '') {
            writer.uint32(10).string(message.db);
        }
        if (message.table !== '') {
            writer.uint32(18).string(message.table);
        }
        if (message.port !== 0) {
            writer.uint32(24).int64(message.port);
        }
        if (message.user !== '') {
            writer.uint32(34).string(message.user);
        }
        if (message.password !== '') {
            writer.uint32(42).string(message.password);
        }
        for (const v of message.replicas) {
            ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.encode(
                v!,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.where !== '') {
            writer.uint32(58).string(message.where);
        }
        if (message.invalidateQuery !== '') {
            writer.uint32(66).string(message.invalidateQuery);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_MysqlSource {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_MysqlSource,
        } as ClickhouseConfig_ExternalDictionary_MysqlSource;
        message.replicas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.db = reader.string();
                    break;
                case 2:
                    message.table = reader.string();
                    break;
                case 3:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.user = reader.string();
                    break;
                case 5:
                    message.password = reader.string();
                    break;
                case 6:
                    message.replicas.push(
                        ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                case 7:
                    message.where = reader.string();
                    break;
                case 8:
                    message.invalidateQuery = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MysqlSource {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_MysqlSource,
        } as ClickhouseConfig_ExternalDictionary_MysqlSource;
        message.replicas = [];
        if (object.db !== undefined && object.db !== null) {
            message.db = String(object.db);
        } else {
            message.db = '';
        }
        if (object.table !== undefined && object.table !== null) {
            message.table = String(object.table);
        } else {
            message.table = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = String(object.user);
        } else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        if (object.replicas !== undefined && object.replicas !== null) {
            for (const e of object.replicas) {
                message.replicas.push(
                    ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.fromJSON(
                        e
                    )
                );
            }
        }
        if (object.where !== undefined && object.where !== null) {
            message.where = String(object.where);
        } else {
            message.where = '';
        }
        if (
            object.invalidateQuery !== undefined &&
            object.invalidateQuery !== null
        ) {
            message.invalidateQuery = String(object.invalidateQuery);
        } else {
            message.invalidateQuery = '';
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_ExternalDictionary_MysqlSource): unknown {
        const obj: any = {};
        message.db !== undefined && (obj.db = message.db);
        message.table !== undefined && (obj.table = message.table);
        message.port !== undefined && (obj.port = message.port);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        if (message.replicas) {
            obj.replicas = message.replicas.map((e) =>
                e
                    ? ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.toJSON(
                          e
                      )
                    : undefined
            );
        } else {
            obj.replicas = [];
        }
        message.where !== undefined && (obj.where = message.where);
        message.invalidateQuery !== undefined &&
            (obj.invalidateQuery = message.invalidateQuery);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_MysqlSource>
    ): ClickhouseConfig_ExternalDictionary_MysqlSource {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_MysqlSource,
        } as ClickhouseConfig_ExternalDictionary_MysqlSource;
        message.replicas = [];
        if (object.db !== undefined && object.db !== null) {
            message.db = object.db;
        } else {
            message.db = '';
        }
        if (object.table !== undefined && object.table !== null) {
            message.table = object.table;
        } else {
            message.table = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = object.user;
        } else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        if (object.replicas !== undefined && object.replicas !== null) {
            for (const e of object.replicas) {
                message.replicas.push(
                    ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.fromPartial(
                        e
                    )
                );
            }
        }
        if (object.where !== undefined && object.where !== null) {
            message.where = object.where;
        } else {
            message.where = '';
        }
        if (
            object.invalidateQuery !== undefined &&
            object.invalidateQuery !== null
        ) {
            message.invalidateQuery = object.invalidateQuery;
        } else {
            message.invalidateQuery = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_MysqlSource.$type,
    ClickhouseConfig_ExternalDictionary_MysqlSource
);

const baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica',
    host: '',
    priority: 0,
    port: 0,
    user: '',
    password: '',
};

export const ClickhouseConfig_ExternalDictionary_MysqlSource_Replica = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.host !== '') {
            writer.uint32(10).string(message.host);
        }
        if (message.priority !== 0) {
            writer.uint32(16).int64(message.priority);
        }
        if (message.port !== 0) {
            writer.uint32(24).int64(message.port);
        }
        if (message.user !== '') {
            writer.uint32(34).string(message.user);
        }
        if (message.password !== '') {
            writer.uint32(42).string(message.password);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica,
        } as ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.priority = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.user = reader.string();
                    break;
                case 5:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(
        object: any
    ): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica,
        } as ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
        if (object.host !== undefined && object.host !== null) {
            message.host = String(object.host);
        } else {
            message.host = '';
        }
        if (object.priority !== undefined && object.priority !== null) {
            message.priority = Number(object.priority);
        } else {
            message.priority = 0;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = String(object.user);
        } else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        return message;
    },

    toJSON(
        message: ClickhouseConfig_ExternalDictionary_MysqlSource_Replica
    ): unknown {
        const obj: any = {};
        message.host !== undefined && (obj.host = message.host);
        message.priority !== undefined && (obj.priority = message.priority);
        message.port !== undefined && (obj.port = message.port);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_MysqlSource_Replica>
    ): ClickhouseConfig_ExternalDictionary_MysqlSource_Replica {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica,
        } as ClickhouseConfig_ExternalDictionary_MysqlSource_Replica;
        if (object.host !== undefined && object.host !== null) {
            message.host = object.host;
        } else {
            message.host = '';
        }
        if (object.priority !== undefined && object.priority !== null) {
            message.priority = object.priority;
        } else {
            message.priority = 0;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = object.user;
        } else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.$type,
    ClickhouseConfig_ExternalDictionary_MysqlSource_Replica
);

const baseClickhouseConfig_ExternalDictionary_ClickhouseSource: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource',
    db: '',
    table: '',
    host: '',
    port: 0,
    user: '',
    password: '',
    where: '',
};

export const ClickhouseConfig_ExternalDictionary_ClickhouseSource = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_ClickhouseSource,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.db !== '') {
            writer.uint32(10).string(message.db);
        }
        if (message.table !== '') {
            writer.uint32(18).string(message.table);
        }
        if (message.host !== '') {
            writer.uint32(26).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.user !== '') {
            writer.uint32(42).string(message.user);
        }
        if (message.password !== '') {
            writer.uint32(50).string(message.password);
        }
        if (message.where !== '') {
            writer.uint32(58).string(message.where);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_ClickhouseSource {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_ClickhouseSource,
        } as ClickhouseConfig_ExternalDictionary_ClickhouseSource;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.db = reader.string();
                    break;
                case 2:
                    message.table = reader.string();
                    break;
                case 3:
                    message.host = reader.string();
                    break;
                case 4:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.user = reader.string();
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                case 7:
                    message.where = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(
        object: any
    ): ClickhouseConfig_ExternalDictionary_ClickhouseSource {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_ClickhouseSource,
        } as ClickhouseConfig_ExternalDictionary_ClickhouseSource;
        if (object.db !== undefined && object.db !== null) {
            message.db = String(object.db);
        } else {
            message.db = '';
        }
        if (object.table !== undefined && object.table !== null) {
            message.table = String(object.table);
        } else {
            message.table = '';
        }
        if (object.host !== undefined && object.host !== null) {
            message.host = String(object.host);
        } else {
            message.host = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = String(object.user);
        } else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        if (object.where !== undefined && object.where !== null) {
            message.where = String(object.where);
        } else {
            message.where = '';
        }
        return message;
    },

    toJSON(
        message: ClickhouseConfig_ExternalDictionary_ClickhouseSource
    ): unknown {
        const obj: any = {};
        message.db !== undefined && (obj.db = message.db);
        message.table !== undefined && (obj.table = message.table);
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = message.port);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        message.where !== undefined && (obj.where = message.where);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_ClickhouseSource>
    ): ClickhouseConfig_ExternalDictionary_ClickhouseSource {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_ClickhouseSource,
        } as ClickhouseConfig_ExternalDictionary_ClickhouseSource;
        if (object.db !== undefined && object.db !== null) {
            message.db = object.db;
        } else {
            message.db = '';
        }
        if (object.table !== undefined && object.table !== null) {
            message.table = object.table;
        } else {
            message.table = '';
        }
        if (object.host !== undefined && object.host !== null) {
            message.host = object.host;
        } else {
            message.host = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = object.user;
        } else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        if (object.where !== undefined && object.where !== null) {
            message.where = object.where;
        } else {
            message.where = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_ClickhouseSource.$type,
    ClickhouseConfig_ExternalDictionary_ClickhouseSource
);

const baseClickhouseConfig_ExternalDictionary_MongodbSource: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource',
    db: '',
    collection: '',
    host: '',
    port: 0,
    user: '',
    password: '',
};

export const ClickhouseConfig_ExternalDictionary_MongodbSource = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_MongodbSource,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.db !== '') {
            writer.uint32(10).string(message.db);
        }
        if (message.collection !== '') {
            writer.uint32(18).string(message.collection);
        }
        if (message.host !== '') {
            writer.uint32(26).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.user !== '') {
            writer.uint32(42).string(message.user);
        }
        if (message.password !== '') {
            writer.uint32(50).string(message.password);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_MongodbSource {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_MongodbSource,
        } as ClickhouseConfig_ExternalDictionary_MongodbSource;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.db = reader.string();
                    break;
                case 2:
                    message.collection = reader.string();
                    break;
                case 3:
                    message.host = reader.string();
                    break;
                case 4:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.user = reader.string();
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_MongodbSource {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_MongodbSource,
        } as ClickhouseConfig_ExternalDictionary_MongodbSource;
        if (object.db !== undefined && object.db !== null) {
            message.db = String(object.db);
        } else {
            message.db = '';
        }
        if (object.collection !== undefined && object.collection !== null) {
            message.collection = String(object.collection);
        } else {
            message.collection = '';
        }
        if (object.host !== undefined && object.host !== null) {
            message.host = String(object.host);
        } else {
            message.host = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = String(object.user);
        } else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        return message;
    },

    toJSON(
        message: ClickhouseConfig_ExternalDictionary_MongodbSource
    ): unknown {
        const obj: any = {};
        message.db !== undefined && (obj.db = message.db);
        message.collection !== undefined &&
            (obj.collection = message.collection);
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = message.port);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_MongodbSource>
    ): ClickhouseConfig_ExternalDictionary_MongodbSource {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_MongodbSource,
        } as ClickhouseConfig_ExternalDictionary_MongodbSource;
        if (object.db !== undefined && object.db !== null) {
            message.db = object.db;
        } else {
            message.db = '';
        }
        if (object.collection !== undefined && object.collection !== null) {
            message.collection = object.collection;
        } else {
            message.collection = '';
        }
        if (object.host !== undefined && object.host !== null) {
            message.host = object.host;
        } else {
            message.host = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = object.user;
        } else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_MongodbSource.$type,
    ClickhouseConfig_ExternalDictionary_MongodbSource
);

const baseClickhouseConfig_ExternalDictionary_PostgresqlSource: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource',
    db: '',
    table: '',
    hosts: '',
    port: 0,
    user: '',
    password: '',
    invalidateQuery: '',
    sslMode: 0,
};

export const ClickhouseConfig_ExternalDictionary_PostgresqlSource = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_PostgresqlSource,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.db !== '') {
            writer.uint32(10).string(message.db);
        }
        if (message.table !== '') {
            writer.uint32(18).string(message.table);
        }
        for (const v of message.hosts) {
            writer.uint32(26).string(v!);
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.user !== '') {
            writer.uint32(42).string(message.user);
        }
        if (message.password !== '') {
            writer.uint32(50).string(message.password);
        }
        if (message.invalidateQuery !== '') {
            writer.uint32(58).string(message.invalidateQuery);
        }
        if (message.sslMode !== 0) {
            writer.uint32(64).int32(message.sslMode);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_PostgresqlSource {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_PostgresqlSource,
        } as ClickhouseConfig_ExternalDictionary_PostgresqlSource;
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.db = reader.string();
                    break;
                case 2:
                    message.table = reader.string();
                    break;
                case 3:
                    message.hosts.push(reader.string());
                    break;
                case 4:
                    message.port = longToNumber(reader.int64() as Long);
                    break;
                case 5:
                    message.user = reader.string();
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                case 7:
                    message.invalidateQuery = reader.string();
                    break;
                case 8:
                    message.sslMode = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(
        object: any
    ): ClickhouseConfig_ExternalDictionary_PostgresqlSource {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_PostgresqlSource,
        } as ClickhouseConfig_ExternalDictionary_PostgresqlSource;
        message.hosts = [];
        if (object.db !== undefined && object.db !== null) {
            message.db = String(object.db);
        } else {
            message.db = '';
        }
        if (object.table !== undefined && object.table !== null) {
            message.table = String(object.table);
        } else {
            message.table = '';
        }
        if (object.hosts !== undefined && object.hosts !== null) {
            for (const e of object.hosts) {
                message.hosts.push(String(e));
            }
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = Number(object.port);
        } else {
            message.port = 0;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = String(object.user);
        } else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        } else {
            message.password = '';
        }
        if (
            object.invalidateQuery !== undefined &&
            object.invalidateQuery !== null
        ) {
            message.invalidateQuery = String(object.invalidateQuery);
        } else {
            message.invalidateQuery = '';
        }
        if (object.sslMode !== undefined && object.sslMode !== null) {
            message.sslMode =
                clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON(
                    object.sslMode
                );
        } else {
            message.sslMode = 0;
        }
        return message;
    },

    toJSON(
        message: ClickhouseConfig_ExternalDictionary_PostgresqlSource
    ): unknown {
        const obj: any = {};
        message.db !== undefined && (obj.db = message.db);
        message.table !== undefined && (obj.table = message.table);
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => e);
        } else {
            obj.hosts = [];
        }
        message.port !== undefined && (obj.port = message.port);
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        message.invalidateQuery !== undefined &&
            (obj.invalidateQuery = message.invalidateQuery);
        message.sslMode !== undefined &&
            (obj.sslMode =
                clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON(
                    message.sslMode
                ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_PostgresqlSource>
    ): ClickhouseConfig_ExternalDictionary_PostgresqlSource {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_PostgresqlSource,
        } as ClickhouseConfig_ExternalDictionary_PostgresqlSource;
        message.hosts = [];
        if (object.db !== undefined && object.db !== null) {
            message.db = object.db;
        } else {
            message.db = '';
        }
        if (object.table !== undefined && object.table !== null) {
            message.table = object.table;
        } else {
            message.table = '';
        }
        if (object.hosts !== undefined && object.hosts !== null) {
            for (const e of object.hosts) {
                message.hosts.push(e);
            }
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        } else {
            message.port = 0;
        }
        if (object.user !== undefined && object.user !== null) {
            message.user = object.user;
        } else {
            message.user = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        } else {
            message.password = '';
        }
        if (
            object.invalidateQuery !== undefined &&
            object.invalidateQuery !== null
        ) {
            message.invalidateQuery = object.invalidateQuery;
        } else {
            message.invalidateQuery = '';
        }
        if (object.sslMode !== undefined && object.sslMode !== null) {
            message.sslMode = object.sslMode;
        } else {
            message.sslMode = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_PostgresqlSource.$type,
    ClickhouseConfig_ExternalDictionary_PostgresqlSource
);

const baseClickhouseConfig_ExternalDictionary_Structure: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure',
};

export const ClickhouseConfig_ExternalDictionary_Structure = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_Structure,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== undefined) {
            ClickhouseConfig_ExternalDictionary_Structure_Id.encode(
                message.id,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.key !== undefined) {
            ClickhouseConfig_ExternalDictionary_Structure_Key.encode(
                message.key,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.rangeMin !== undefined) {
            ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(
                message.rangeMin,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.rangeMax !== undefined) {
            ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(
                message.rangeMax,
                writer.uint32(42).fork()
            ).ldelim();
        }
        for (const v of message.attributes) {
            ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(
                v!,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_Structure {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure,
        } as ClickhouseConfig_ExternalDictionary_Structure;
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id =
                        ClickhouseConfig_ExternalDictionary_Structure_Id.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 3:
                    message.key =
                        ClickhouseConfig_ExternalDictionary_Structure_Key.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 4:
                    message.rangeMin =
                        ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 5:
                    message.rangeMax =
                        ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 2:
                    message.attributes.push(
                        ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure,
        } as ClickhouseConfig_ExternalDictionary_Structure;
        message.attributes = [];
        if (object.id !== undefined && object.id !== null) {
            message.id =
                ClickhouseConfig_ExternalDictionary_Structure_Id.fromJSON(
                    object.id
                );
        } else {
            message.id = undefined;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key =
                ClickhouseConfig_ExternalDictionary_Structure_Key.fromJSON(
                    object.key
                );
        } else {
            message.key = undefined;
        }
        if (object.rangeMin !== undefined && object.rangeMin !== null) {
            message.rangeMin =
                ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(
                    object.rangeMin
                );
        } else {
            message.rangeMin = undefined;
        }
        if (object.rangeMax !== undefined && object.rangeMax !== null) {
            message.rangeMax =
                ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(
                    object.rangeMax
                );
        } else {
            message.rangeMax = undefined;
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(
                    ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(
                        e
                    )
                );
            }
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_ExternalDictionary_Structure): unknown {
        const obj: any = {};
        message.id !== undefined &&
            (obj.id = message.id
                ? ClickhouseConfig_ExternalDictionary_Structure_Id.toJSON(
                      message.id
                  )
                : undefined);
        message.key !== undefined &&
            (obj.key = message.key
                ? ClickhouseConfig_ExternalDictionary_Structure_Key.toJSON(
                      message.key
                  )
                : undefined);
        message.rangeMin !== undefined &&
            (obj.rangeMin = message.rangeMin
                ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(
                      message.rangeMin
                  )
                : undefined);
        message.rangeMax !== undefined &&
            (obj.rangeMax = message.rangeMax
                ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(
                      message.rangeMax
                  )
                : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) =>
                e
                    ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(
                          e
                      )
                    : undefined
            );
        } else {
            obj.attributes = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure>
    ): ClickhouseConfig_ExternalDictionary_Structure {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure,
        } as ClickhouseConfig_ExternalDictionary_Structure;
        message.attributes = [];
        if (object.id !== undefined && object.id !== null) {
            message.id =
                ClickhouseConfig_ExternalDictionary_Structure_Id.fromPartial(
                    object.id
                );
        } else {
            message.id = undefined;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key =
                ClickhouseConfig_ExternalDictionary_Structure_Key.fromPartial(
                    object.key
                );
        } else {
            message.key = undefined;
        }
        if (object.rangeMin !== undefined && object.rangeMin !== null) {
            message.rangeMin =
                ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(
                    object.rangeMin
                );
        } else {
            message.rangeMin = undefined;
        }
        if (object.rangeMax !== undefined && object.rangeMax !== null) {
            message.rangeMax =
                ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(
                    object.rangeMax
                );
        } else {
            message.rangeMax = undefined;
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(
                    ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(
                        e
                    )
                );
            }
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_Structure.$type,
    ClickhouseConfig_ExternalDictionary_Structure
);

const baseClickhouseConfig_ExternalDictionary_Structure_Attribute: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute',
    name: '',
    type: '',
    nullValue: '',
    expression: '',
    hierarchical: false,
    injective: false,
};

export const ClickhouseConfig_ExternalDictionary_Structure_Attribute = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_Structure_Attribute,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        if (message.nullValue !== '') {
            writer.uint32(26).string(message.nullValue);
        }
        if (message.expression !== '') {
            writer.uint32(34).string(message.expression);
        }
        if (message.hierarchical === true) {
            writer.uint32(40).bool(message.hierarchical);
        }
        if (message.injective === true) {
            writer.uint32(48).bool(message.injective);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_Structure_Attribute {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure_Attribute,
        } as ClickhouseConfig_ExternalDictionary_Structure_Attribute;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.nullValue = reader.string();
                    break;
                case 4:
                    message.expression = reader.string();
                    break;
                case 5:
                    message.hierarchical = reader.bool();
                    break;
                case 6:
                    message.injective = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(
        object: any
    ): ClickhouseConfig_ExternalDictionary_Structure_Attribute {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure_Attribute,
        } as ClickhouseConfig_ExternalDictionary_Structure_Attribute;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        } else {
            message.type = '';
        }
        if (object.nullValue !== undefined && object.nullValue !== null) {
            message.nullValue = String(object.nullValue);
        } else {
            message.nullValue = '';
        }
        if (object.expression !== undefined && object.expression !== null) {
            message.expression = String(object.expression);
        } else {
            message.expression = '';
        }
        if (object.hierarchical !== undefined && object.hierarchical !== null) {
            message.hierarchical = Boolean(object.hierarchical);
        } else {
            message.hierarchical = false;
        }
        if (object.injective !== undefined && object.injective !== null) {
            message.injective = Boolean(object.injective);
        } else {
            message.injective = false;
        }
        return message;
    },

    toJSON(
        message: ClickhouseConfig_ExternalDictionary_Structure_Attribute
    ): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined && (obj.type = message.type);
        message.nullValue !== undefined && (obj.nullValue = message.nullValue);
        message.expression !== undefined &&
            (obj.expression = message.expression);
        message.hierarchical !== undefined &&
            (obj.hierarchical = message.hierarchical);
        message.injective !== undefined && (obj.injective = message.injective);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Attribute>
    ): ClickhouseConfig_ExternalDictionary_Structure_Attribute {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure_Attribute,
        } as ClickhouseConfig_ExternalDictionary_Structure_Attribute;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = '';
        }
        if (object.nullValue !== undefined && object.nullValue !== null) {
            message.nullValue = object.nullValue;
        } else {
            message.nullValue = '';
        }
        if (object.expression !== undefined && object.expression !== null) {
            message.expression = object.expression;
        } else {
            message.expression = '';
        }
        if (object.hierarchical !== undefined && object.hierarchical !== null) {
            message.hierarchical = object.hierarchical;
        } else {
            message.hierarchical = false;
        }
        if (object.injective !== undefined && object.injective !== null) {
            message.injective = object.injective;
        } else {
            message.injective = false;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_Structure_Attribute.$type,
    ClickhouseConfig_ExternalDictionary_Structure_Attribute
);

const baseClickhouseConfig_ExternalDictionary_Structure_Id: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id',
    name: '',
};

export const ClickhouseConfig_ExternalDictionary_Structure_Id = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_Structure_Id,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_Structure_Id {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure_Id,
        } as ClickhouseConfig_ExternalDictionary_Structure_Id;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Id {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure_Id,
        } as ClickhouseConfig_ExternalDictionary_Structure_Id;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_ExternalDictionary_Structure_Id): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Id>
    ): ClickhouseConfig_ExternalDictionary_Structure_Id {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure_Id,
        } as ClickhouseConfig_ExternalDictionary_Structure_Id;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_Structure_Id.$type,
    ClickhouseConfig_ExternalDictionary_Structure_Id
);

const baseClickhouseConfig_ExternalDictionary_Structure_Key: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key',
};

export const ClickhouseConfig_ExternalDictionary_Structure_Key = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_Structure_Key,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.attributes) {
            ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(
                v!,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_Structure_Key {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure_Key,
        } as ClickhouseConfig_ExternalDictionary_Structure_Key;
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attributes.push(
                        ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Structure_Key {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure_Key,
        } as ClickhouseConfig_ExternalDictionary_Structure_Key;
        message.attributes = [];
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(
                    ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(
                        e
                    )
                );
            }
        }
        return message;
    },

    toJSON(
        message: ClickhouseConfig_ExternalDictionary_Structure_Key
    ): unknown {
        const obj: any = {};
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) =>
                e
                    ? ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(
                          e
                      )
                    : undefined
            );
        } else {
            obj.attributes = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_Structure_Key>
    ): ClickhouseConfig_ExternalDictionary_Structure_Key {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Structure_Key,
        } as ClickhouseConfig_ExternalDictionary_Structure_Key;
        message.attributes = [];
        if (object.attributes !== undefined && object.attributes !== null) {
            for (const e of object.attributes) {
                message.attributes.push(
                    ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(
                        e
                    )
                );
            }
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_Structure_Key.$type,
    ClickhouseConfig_ExternalDictionary_Structure_Key
);

const baseClickhouseConfig_ExternalDictionary_Layout: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout',
    type: 0,
    sizeInCells: 0,
};

export const ClickhouseConfig_ExternalDictionary_Layout = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_Layout,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.sizeInCells !== 0) {
            writer.uint32(16).int64(message.sizeInCells);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_Layout {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Layout,
        } as ClickhouseConfig_ExternalDictionary_Layout;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.sizeInCells = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Layout {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Layout,
        } as ClickhouseConfig_ExternalDictionary_Layout;
        if (object.type !== undefined && object.type !== null) {
            message.type =
                clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON(
                    object.type
                );
        } else {
            message.type = 0;
        }
        if (object.sizeInCells !== undefined && object.sizeInCells !== null) {
            message.sizeInCells = Number(object.sizeInCells);
        } else {
            message.sizeInCells = 0;
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_ExternalDictionary_Layout): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = clickhouseConfig_ExternalDictionary_Layout_TypeToJSON(
                message.type
            ));
        message.sizeInCells !== undefined &&
            (obj.sizeInCells = message.sizeInCells);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_Layout>
    ): ClickhouseConfig_ExternalDictionary_Layout {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Layout,
        } as ClickhouseConfig_ExternalDictionary_Layout;
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.sizeInCells !== undefined && object.sizeInCells !== null) {
            message.sizeInCells = object.sizeInCells;
        } else {
            message.sizeInCells = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_Layout.$type,
    ClickhouseConfig_ExternalDictionary_Layout
);

const baseClickhouseConfig_ExternalDictionary_Range: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range',
    min: 0,
    max: 0,
};

export const ClickhouseConfig_ExternalDictionary_Range = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range' as const,

    encode(
        message: ClickhouseConfig_ExternalDictionary_Range,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.min !== 0) {
            writer.uint32(8).int64(message.min);
        }
        if (message.max !== 0) {
            writer.uint32(16).int64(message.max);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_ExternalDictionary_Range {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Range,
        } as ClickhouseConfig_ExternalDictionary_Range;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.min = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.max = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_ExternalDictionary_Range {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Range,
        } as ClickhouseConfig_ExternalDictionary_Range;
        if (object.min !== undefined && object.min !== null) {
            message.min = Number(object.min);
        } else {
            message.min = 0;
        }
        if (object.max !== undefined && object.max !== null) {
            message.max = Number(object.max);
        } else {
            message.max = 0;
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_ExternalDictionary_Range): unknown {
        const obj: any = {};
        message.min !== undefined && (obj.min = message.min);
        message.max !== undefined && (obj.max = message.max);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_ExternalDictionary_Range>
    ): ClickhouseConfig_ExternalDictionary_Range {
        const message = {
            ...baseClickhouseConfig_ExternalDictionary_Range,
        } as ClickhouseConfig_ExternalDictionary_Range;
        if (object.min !== undefined && object.min !== null) {
            message.min = object.min;
        } else {
            message.min = 0;
        }
        if (object.max !== undefined && object.max !== null) {
            message.max = object.max;
        } else {
            message.max = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_ExternalDictionary_Range.$type,
    ClickhouseConfig_ExternalDictionary_Range
);

const baseClickhouseConfig_GraphiteRollup: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup',
    name: '',
};

export const ClickhouseConfig_GraphiteRollup = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup' as const,

    encode(
        message: ClickhouseConfig_GraphiteRollup,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.patterns) {
            ClickhouseConfig_GraphiteRollup_Pattern.encode(
                v!,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_GraphiteRollup {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_GraphiteRollup,
        } as ClickhouseConfig_GraphiteRollup;
        message.patterns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.patterns.push(
                        ClickhouseConfig_GraphiteRollup_Pattern.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_GraphiteRollup {
        const message = {
            ...baseClickhouseConfig_GraphiteRollup,
        } as ClickhouseConfig_GraphiteRollup;
        message.patterns = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.patterns !== undefined && object.patterns !== null) {
            for (const e of object.patterns) {
                message.patterns.push(
                    ClickhouseConfig_GraphiteRollup_Pattern.fromJSON(e)
                );
            }
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_GraphiteRollup): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.patterns) {
            obj.patterns = message.patterns.map((e) =>
                e
                    ? ClickhouseConfig_GraphiteRollup_Pattern.toJSON(e)
                    : undefined
            );
        } else {
            obj.patterns = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_GraphiteRollup>
    ): ClickhouseConfig_GraphiteRollup {
        const message = {
            ...baseClickhouseConfig_GraphiteRollup,
        } as ClickhouseConfig_GraphiteRollup;
        message.patterns = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.patterns !== undefined && object.patterns !== null) {
            for (const e of object.patterns) {
                message.patterns.push(
                    ClickhouseConfig_GraphiteRollup_Pattern.fromPartial(e)
                );
            }
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_GraphiteRollup.$type,
    ClickhouseConfig_GraphiteRollup
);

const baseClickhouseConfig_GraphiteRollup_Pattern: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern',
    regexp: '',
    function: '',
};

export const ClickhouseConfig_GraphiteRollup_Pattern = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern' as const,

    encode(
        message: ClickhouseConfig_GraphiteRollup_Pattern,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.regexp !== '') {
            writer.uint32(10).string(message.regexp);
        }
        if (message.function !== '') {
            writer.uint32(18).string(message.function);
        }
        for (const v of message.retention) {
            ClickhouseConfig_GraphiteRollup_Pattern_Retention.encode(
                v!,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_GraphiteRollup_Pattern {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_GraphiteRollup_Pattern,
        } as ClickhouseConfig_GraphiteRollup_Pattern;
        message.retention = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.regexp = reader.string();
                    break;
                case 2:
                    message.function = reader.string();
                    break;
                case 3:
                    message.retention.push(
                        ClickhouseConfig_GraphiteRollup_Pattern_Retention.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_GraphiteRollup_Pattern {
        const message = {
            ...baseClickhouseConfig_GraphiteRollup_Pattern,
        } as ClickhouseConfig_GraphiteRollup_Pattern;
        message.retention = [];
        if (object.regexp !== undefined && object.regexp !== null) {
            message.regexp = String(object.regexp);
        } else {
            message.regexp = '';
        }
        if (object.function !== undefined && object.function !== null) {
            message.function = String(object.function);
        } else {
            message.function = '';
        }
        if (object.retention !== undefined && object.retention !== null) {
            for (const e of object.retention) {
                message.retention.push(
                    ClickhouseConfig_GraphiteRollup_Pattern_Retention.fromJSON(
                        e
                    )
                );
            }
        }
        return message;
    },

    toJSON(message: ClickhouseConfig_GraphiteRollup_Pattern): unknown {
        const obj: any = {};
        message.regexp !== undefined && (obj.regexp = message.regexp);
        message.function !== undefined && (obj.function = message.function);
        if (message.retention) {
            obj.retention = message.retention.map((e) =>
                e
                    ? ClickhouseConfig_GraphiteRollup_Pattern_Retention.toJSON(
                          e
                      )
                    : undefined
            );
        } else {
            obj.retention = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_GraphiteRollup_Pattern>
    ): ClickhouseConfig_GraphiteRollup_Pattern {
        const message = {
            ...baseClickhouseConfig_GraphiteRollup_Pattern,
        } as ClickhouseConfig_GraphiteRollup_Pattern;
        message.retention = [];
        if (object.regexp !== undefined && object.regexp !== null) {
            message.regexp = object.regexp;
        } else {
            message.regexp = '';
        }
        if (object.function !== undefined && object.function !== null) {
            message.function = object.function;
        } else {
            message.function = '';
        }
        if (object.retention !== undefined && object.retention !== null) {
            for (const e of object.retention) {
                message.retention.push(
                    ClickhouseConfig_GraphiteRollup_Pattern_Retention.fromPartial(
                        e
                    )
                );
            }
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_GraphiteRollup_Pattern.$type,
    ClickhouseConfig_GraphiteRollup_Pattern
);

const baseClickhouseConfig_GraphiteRollup_Pattern_Retention: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention',
    age: 0,
    precision: 0,
};

export const ClickhouseConfig_GraphiteRollup_Pattern_Retention = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention' as const,

    encode(
        message: ClickhouseConfig_GraphiteRollup_Pattern_Retention,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.age !== 0) {
            writer.uint32(8).int64(message.age);
        }
        if (message.precision !== 0) {
            writer.uint32(16).int64(message.precision);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfig_GraphiteRollup_Pattern_Retention {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseClickhouseConfig_GraphiteRollup_Pattern_Retention,
        } as ClickhouseConfig_GraphiteRollup_Pattern_Retention;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.age = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.precision = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClickhouseConfig_GraphiteRollup_Pattern_Retention {
        const message = {
            ...baseClickhouseConfig_GraphiteRollup_Pattern_Retention,
        } as ClickhouseConfig_GraphiteRollup_Pattern_Retention;
        if (object.age !== undefined && object.age !== null) {
            message.age = Number(object.age);
        } else {
            message.age = 0;
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = Number(object.precision);
        } else {
            message.precision = 0;
        }
        return message;
    },

    toJSON(
        message: ClickhouseConfig_GraphiteRollup_Pattern_Retention
    ): unknown {
        const obj: any = {};
        message.age !== undefined && (obj.age = message.age);
        message.precision !== undefined && (obj.precision = message.precision);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ClickhouseConfig_GraphiteRollup_Pattern_Retention>
    ): ClickhouseConfig_GraphiteRollup_Pattern_Retention {
        const message = {
            ...baseClickhouseConfig_GraphiteRollup_Pattern_Retention,
        } as ClickhouseConfig_GraphiteRollup_Pattern_Retention;
        if (object.age !== undefined && object.age !== null) {
            message.age = object.age;
        } else {
            message.age = 0;
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = object.precision;
        } else {
            message.precision = 0;
        }
        return message;
    },
};

messageTypeRegistry.set(
    ClickhouseConfig_GraphiteRollup_Pattern_Retention.$type,
    ClickhouseConfig_GraphiteRollup_Pattern_Retention
);

const baseClickhouseConfigSet: object = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet',
};

export const ClickhouseConfigSet = {
    $type: 'yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet' as const,

    encode(
        message: ClickhouseConfigSet,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            ClickhouseConfig.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            ClickhouseConfig.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            ClickhouseConfig.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ClickhouseConfigSet {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClickhouseConfigSet } as ClickhouseConfigSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = ClickhouseConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = ClickhouseConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = ClickhouseConfig.decode(
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

    fromJSON(object: any): ClickhouseConfigSet {
        const message = { ...baseClickhouseConfigSet } as ClickhouseConfigSet;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = ClickhouseConfig.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = ClickhouseConfig.fromJSON(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = ClickhouseConfig.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: ClickhouseConfigSet): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? ClickhouseConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? ClickhouseConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? ClickhouseConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<ClickhouseConfigSet>): ClickhouseConfigSet {
        const message = { ...baseClickhouseConfigSet } as ClickhouseConfigSet;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = ClickhouseConfig.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = ClickhouseConfig.fromPartial(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = ClickhouseConfig.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(ClickhouseConfigSet.$type, ClickhouseConfigSet);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
