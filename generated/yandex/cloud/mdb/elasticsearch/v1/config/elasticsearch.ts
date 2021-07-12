/* eslint-disable */
import { Int64Value } from '../../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.elasticsearch.v1.config';

/**
 * Elasticsearch 7.x supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html).
 *
 * Any options that are not listed here are not supported.
 */
export interface ElasticsearchConfig7 {
    /**
     * The maximum number of clauses a boolean query can contain.
     *
     * The limit is in place to prevent searches from becoming too large and taking up too much CPU and memory.
     * It affects not only Elasticsearch's `bool` query, but many other queries that are implicitly converted to `bool` query by Elastcsearch.
     *
     * Default value: `1024`.
     *
     * See in-depth description in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-settings.html).
     */
    maxClauseCount: number | undefined;
    /**
     * The maximum percentage or absolute value (10%, 512mb) of heap space that is allocated to field data cache.
     *
     * All the field values that are placed in this cache, get loaded to memory in order to provide fast document based access to those values.
     * Building the field data cache for a field can be an expensive operations, so its recommended to have enough memory for this cache, and to keep it loaded.
     *
     * Default value: unbounded.
     *
     * See in-depth description in [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-fielddata.html).
     */
    fielddataCacheSize: string;
}

/** Elasticsearch 7.x data node configuration. */
export interface ElasticsearchConfigSet7 {
    /** Effective settings for an Elasticsearch cluster (a combination of settings defined in [user_config] and [default_config]). */
    effectiveConfig: ElasticsearchConfig7 | undefined;
    /** User-defined settings for an Elasticsearch cluster. */
    userConfig: ElasticsearchConfig7 | undefined;
    /** Default settings for an Elasticsearch cluster. */
    defaultConfig: ElasticsearchConfig7 | undefined;
}

const baseElasticsearchConfig7: object = { fielddataCacheSize: '' };

export const ElasticsearchConfig7 = {
    encode(
        message: ElasticsearchConfig7,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.maxClauseCount !== undefined) {
            Int64Value.encode(
                { value: message.maxClauseCount! },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.fielddataCacheSize !== '') {
            writer.uint32(34).string(message.fielddataCacheSize);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ElasticsearchConfig7 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseElasticsearchConfig7 } as ElasticsearchConfig7;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.maxClauseCount = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
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

    fromJSON(object: any): ElasticsearchConfig7 {
        const message = { ...baseElasticsearchConfig7 } as ElasticsearchConfig7;
        if (
            object.maxClauseCount !== undefined &&
            object.maxClauseCount !== null
        ) {
            message.maxClauseCount = Number(object.maxClauseCount);
        } else {
            message.maxClauseCount = undefined;
        }
        if (
            object.fielddataCacheSize !== undefined &&
            object.fielddataCacheSize !== null
        ) {
            message.fielddataCacheSize = String(object.fielddataCacheSize);
        } else {
            message.fielddataCacheSize = '';
        }
        return message;
    },

    toJSON(message: ElasticsearchConfig7): unknown {
        const obj: any = {};
        message.maxClauseCount !== undefined &&
            (obj.maxClauseCount = message.maxClauseCount);
        message.fielddataCacheSize !== undefined &&
            (obj.fielddataCacheSize = message.fielddataCacheSize);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ElasticsearchConfig7>
    ): ElasticsearchConfig7 {
        const message = { ...baseElasticsearchConfig7 } as ElasticsearchConfig7;
        if (
            object.maxClauseCount !== undefined &&
            object.maxClauseCount !== null
        ) {
            message.maxClauseCount = object.maxClauseCount;
        } else {
            message.maxClauseCount = undefined;
        }
        if (
            object.fielddataCacheSize !== undefined &&
            object.fielddataCacheSize !== null
        ) {
            message.fielddataCacheSize = object.fielddataCacheSize;
        } else {
            message.fielddataCacheSize = '';
        }
        return message;
    },
};

const baseElasticsearchConfigSet7: object = {};

export const ElasticsearchConfigSet7 = {
    encode(
        message: ElasticsearchConfigSet7,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            ElasticsearchConfig7.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            ElasticsearchConfig7.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            ElasticsearchConfig7.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ElasticsearchConfigSet7 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseElasticsearchConfigSet7,
        } as ElasticsearchConfigSet7;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = ElasticsearchConfig7.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = ElasticsearchConfig7.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = ElasticsearchConfig7.decode(
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

    fromJSON(object: any): ElasticsearchConfigSet7 {
        const message = {
            ...baseElasticsearchConfigSet7,
        } as ElasticsearchConfigSet7;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = ElasticsearchConfig7.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = ElasticsearchConfig7.fromJSON(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = ElasticsearchConfig7.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: ElasticsearchConfigSet7): unknown {
        const obj: any = {};
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

    fromPartial(
        object: DeepPartial<ElasticsearchConfigSet7>
    ): ElasticsearchConfigSet7 {
        const message = {
            ...baseElasticsearchConfigSet7,
        } as ElasticsearchConfigSet7;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = ElasticsearchConfig7.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = ElasticsearchConfig7.fromPartial(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = ElasticsearchConfig7.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
