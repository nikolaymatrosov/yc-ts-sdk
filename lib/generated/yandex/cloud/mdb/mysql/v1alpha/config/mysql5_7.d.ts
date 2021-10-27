import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha.config";
/** Options and structure of `MysqlConfig5_7` reflects MySQL 5.7 configuration file */
export interface Mysqlconfig57 {
    $type: 'yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfig5_7';
    /**
     * Size of the InnoDB buffer pool used for caching table and index data.
     *
     * For details, see [MySQL documentation for the parameter](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html#sysvar_innodb_buffer_pool_size).
     */
    innodbBufferPoolSize: number | undefined;
    /**
     * The maximum permitted number of simultaneous client connections.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_max_connections).
     */
    maxConnections: number | undefined;
    /**
     * Time that it takes to process a query before it is considered slow.
     *
     * For details, see [MySQL documentation for the variable](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_long_query_time).
     */
    longQueryTime: number | undefined;
}
export interface Mysqlconfigset57 {
    $type: 'yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfigSet5_7';
    /**
     * Effective settings for a MySQL 5.7 cluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: Mysqlconfig57 | undefined;
    /** User-defined settings for a MySQL 5.7 cluster. */
    userConfig: Mysqlconfig57 | undefined;
    /** Default configuration for a MySQL 5.7 cluster. */
    defaultConfig: Mysqlconfig57 | undefined;
}
export declare const Mysqlconfig57: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfig5_7";
    encode(message: Mysqlconfig57, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mysqlconfig57;
    fromJSON(object: any): Mysqlconfig57;
    toJSON(message: Mysqlconfig57): unknown;
    fromPartial(object: DeepPartial<Mysqlconfig57>): Mysqlconfig57;
};
export declare const Mysqlconfigset57: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.config.MysqlConfigSet5_7";
    encode(message: Mysqlconfigset57, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mysqlconfigset57;
    fromJSON(object: any): Mysqlconfigset57;
    toJSON(message: Mysqlconfigset57): unknown;
    fromPartial(object: DeepPartial<Mysqlconfigset57>): Mysqlconfigset57;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
