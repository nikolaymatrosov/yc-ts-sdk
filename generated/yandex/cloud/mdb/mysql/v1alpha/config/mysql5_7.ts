/* eslint-disable */
import {
    Int64Value,
    DoubleValue,
} from '../../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.mysql.v1alpha.config';

/** Options and structure of `MysqlConfig5_7` reflects MySQL 5.7 configuration file */
export interface Mysqlconfig57 {
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

const baseMysqlconfig57: object = {};

export const Mysqlconfig57 = {
    encode(
        message: Mysqlconfig57,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.innodbBufferPoolSize !== undefined) {
            Int64Value.encode(
                { value: message.innodbBufferPoolSize! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.maxConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxConnections! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.longQueryTime !== undefined) {
            DoubleValue.encode(
                { value: message.longQueryTime! },
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mysqlconfig57 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMysqlconfig57 } as Mysqlconfig57;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.innodbBufferPoolSize = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 2:
                    message.maxConnections = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.longQueryTime = DoubleValue.decode(
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

    fromJSON(object: any): Mysqlconfig57 {
        const message = { ...baseMysqlconfig57 } as Mysqlconfig57;
        if (
            object.innodbBufferPoolSize !== undefined &&
            object.innodbBufferPoolSize !== null
        ) {
            message.innodbBufferPoolSize = Number(object.innodbBufferPoolSize);
        } else {
            message.innodbBufferPoolSize = undefined;
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
            object.longQueryTime !== undefined &&
            object.longQueryTime !== null
        ) {
            message.longQueryTime = Number(object.longQueryTime);
        } else {
            message.longQueryTime = undefined;
        }
        return message;
    },

    toJSON(message: Mysqlconfig57): unknown {
        const obj: any = {};
        message.innodbBufferPoolSize !== undefined &&
            (obj.innodbBufferPoolSize = message.innodbBufferPoolSize);
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.longQueryTime !== undefined &&
            (obj.longQueryTime = message.longQueryTime);
        return obj;
    },

    fromPartial(object: DeepPartial<Mysqlconfig57>): Mysqlconfig57 {
        const message = { ...baseMysqlconfig57 } as Mysqlconfig57;
        if (
            object.innodbBufferPoolSize !== undefined &&
            object.innodbBufferPoolSize !== null
        ) {
            message.innodbBufferPoolSize = object.innodbBufferPoolSize;
        } else {
            message.innodbBufferPoolSize = undefined;
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
            object.longQueryTime !== undefined &&
            object.longQueryTime !== null
        ) {
            message.longQueryTime = object.longQueryTime;
        } else {
            message.longQueryTime = undefined;
        }
        return message;
    },
};

const baseMysqlconfigset57: object = {};

export const Mysqlconfigset57 = {
    encode(
        message: Mysqlconfigset57,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            Mysqlconfig57.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            Mysqlconfig57.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            Mysqlconfig57.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Mysqlconfigset57 {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMysqlconfigset57 } as Mysqlconfigset57;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = Mysqlconfig57.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = Mysqlconfig57.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = Mysqlconfig57.decode(
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

    fromJSON(object: any): Mysqlconfigset57 {
        const message = { ...baseMysqlconfigset57 } as Mysqlconfigset57;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mysqlconfig57.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mysqlconfig57.fromJSON(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mysqlconfig57.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: Mysqlconfigset57): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? Mysqlconfig57.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? Mysqlconfig57.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? Mysqlconfig57.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Mysqlconfigset57>): Mysqlconfigset57 {
        const message = { ...baseMysqlconfigset57 } as Mysqlconfigset57;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = Mysqlconfig57.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = Mysqlconfig57.fromPartial(object.userConfig);
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = Mysqlconfig57.fromPartial(
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
