import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1.config";
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
export declare const ElasticsearchConfig7: {
    encode(message: ElasticsearchConfig7, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ElasticsearchConfig7;
    fromJSON(object: any): ElasticsearchConfig7;
    toJSON(message: ElasticsearchConfig7): unknown;
    fromPartial(object: DeepPartial<ElasticsearchConfig7>): ElasticsearchConfig7;
};
export declare const ElasticsearchConfigSet7: {
    encode(message: ElasticsearchConfigSet7, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ElasticsearchConfigSet7;
    fromJSON(object: any): ElasticsearchConfigSet7;
    toJSON(message: ElasticsearchConfigSet7): unknown;
    fromPartial(object: DeepPartial<ElasticsearchConfigSet7>): ElasticsearchConfigSet7;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
