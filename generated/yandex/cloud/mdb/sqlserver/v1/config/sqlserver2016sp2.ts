/* eslint-disable */
import {
    Int64Value,
    BoolValue,
} from '../../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.sqlserver.v1.config';

/**
 * SQL Server 2016 SP2 Standard edition supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-2016).
 *
 * Any options that are not listed here are not supported.
 */
export interface SQLServerConfig2016sp2std {
    /**
     * Limits the number of processors to use in parallel plan execution per task.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-max-degree-of-parallelism-server-configuration-option?view=sql-server-2016).
     */
    maxDegreeOfParallelism: number | undefined;
    /**
     * Specifies the threshold at which SQL Server creates and runs parallel plans for queries.
     *
     * SQL Server creates and runs a parallel plan for a query only when the estimated cost to run a serial plan for the same query is higher than the value of the option.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-cost-threshold-for-parallelism-server-configuration-option?view=sql-server-2016).
     */
    costThresholdForParallelism: number | undefined;
    /**
     * Describes how to configure login auditing to monitor SQL Server Database Engine login activity.
     * Possible values:
     * * 0 - do not log login attempts,
     * * 1 - log only failed login attempts,
     * * 2 - log only successful login attempts (not recommended),
     * * 3 - log all login attempts (not recommended).
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/ssms/configure-login-auditing-sql-server-management-studio?view=sql-server-2016).
     */
    auditLevel: number | undefined;
    /**
     * Manages the fill factor server configuration option.
     * When an index is created or rebuilt the fill factor determines the percentage of space on each index leaf-level page to be filled with data, reserving the rest as free space for future growth.
     *
     * Values 0 and 100 mean full page usage (no space reserved).
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-fill-factor-server-configuration-option?view=sql-server-2016).
     */
    fillFactorPercent: number | undefined;
    /**
     * Determines whether plans should be cached only after second execution.
     * Allows to avoid SQL cache bloat because of single-use plans.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/optimize-for-ad-hoc-workloads-server-configuration-option?view=sql-server-2016).
     */
    optimizeForAdHocWorkloads: boolean | undefined;
}

export interface SQLServerConfigSet2016sp2std {
    /** Effective settings for an SQL Server 2016 SP2 cluster (a combination of settings defined in [user_config] and [default_config]). */
    effectiveConfig: SQLServerConfig2016sp2std | undefined;
    /** User-defined settings for an SQL Server 2016 SP2 cluster. */
    userConfig: SQLServerConfig2016sp2std | undefined;
    /** Default configuration for an SQL Server 2016 SP2 cluster. */
    defaultConfig: SQLServerConfig2016sp2std | undefined;
}

/**
 * SQL Server 2016 SP2 Enterprise edition supported configuration options are listed here.
 *
 * Detailed description for each set of options is available in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-configuration-options-sql-server?view=sql-server-2016).
 *
 * Any options that are not listed here are not supported.
 */
export interface SQLServerConfig2016sp2ent {
    /**
     * Limits the number of processors to use in parallel plan execution per task.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-max-degree-of-parallelism-server-configuration-option?view=sql-server-2016).
     */
    maxDegreeOfParallelism: number | undefined;
    /**
     * Specifies the threshold at which SQL Server creates and runs parallel plans for queries.
     *
     * SQL Server creates and runs a parallel plan for a query only when the estimated cost to run a serial plan for the same query is higher than the value of the option.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-cost-threshold-for-parallelism-server-configuration-option?view=sql-server-2016).
     */
    costThresholdForParallelism: number | undefined;
    /**
     * Describes how to configure login auditing to monitor SQL Server Database Engine login activity.
     * Possible values:
     * * 0 - do not log login attempts,
     * * 1 - log only failed login attempts,
     * * 2 - log only successful login attempts (not recommended),
     * * 3 - log all login attempts (not recommended).
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/ssms/configure-login-auditing-sql-server-management-studio?view=sql-server-2016).
     */
    auditLevel: number | undefined;
    /**
     * Manages the fill factor server configuration option.
     * When an index is created or rebuilt the fill factor determines the percentage of space on each index leaf-level page to be filled with data, reserving the rest as free space for future growth.
     *
     * Values 0 and 100 mean full page usage (no space reserved).
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/configure-the-fill-factor-server-configuration-option?view=sql-server-2016).
     */
    fillFactorPercent: number | undefined;
    /**
     * Determines whether plans should be cached only after second execution.
     * Allows to avoid SQL cache bloat because of single-use plans.
     *
     * See in-depth description in [SQL Server documentation](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/optimize-for-ad-hoc-workloads-server-configuration-option?view=sql-server-2016).
     */
    optimizeForAdHocWorkloads: boolean | undefined;
}

export interface SQLServerConfigSet2016sp2ent {
    /** Effective settings for an SQL Server 2016 SP2 cluster (a combination of settings defined in [user_config] and [default_config]). */
    effectiveConfig: SQLServerConfig2016sp2ent | undefined;
    /** User-defined settings for an SQL Server 2016 SP2 cluster. */
    userConfig: SQLServerConfig2016sp2ent | undefined;
    /** Default configuration for an SQL Server 2016 SP2 cluster. */
    defaultConfig: SQLServerConfig2016sp2ent | undefined;
}

const baseSQLServerConfig2016sp2std: object = {};

export const SQLServerConfig2016sp2std = {
    encode(
        message: SQLServerConfig2016sp2std,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.maxDegreeOfParallelism !== undefined) {
            Int64Value.encode(
                { value: message.maxDegreeOfParallelism! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.costThresholdForParallelism !== undefined) {
            Int64Value.encode(
                { value: message.costThresholdForParallelism! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.auditLevel !== undefined) {
            Int64Value.encode(
                { value: message.auditLevel! },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.fillFactorPercent !== undefined) {
            Int64Value.encode(
                { value: message.fillFactorPercent! },
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.optimizeForAdHocWorkloads !== undefined) {
            BoolValue.encode(
                { value: message.optimizeForAdHocWorkloads! },
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SQLServerConfig2016sp2std {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSQLServerConfig2016sp2std,
        } as SQLServerConfig2016sp2std;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxDegreeOfParallelism = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 2:
                    message.costThresholdForParallelism = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.auditLevel = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 4:
                    message.fillFactorPercent = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 5:
                    message.optimizeForAdHocWorkloads = BoolValue.decode(
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

    fromJSON(object: any): SQLServerConfig2016sp2std {
        const message = {
            ...baseSQLServerConfig2016sp2std,
        } as SQLServerConfig2016sp2std;
        if (
            object.maxDegreeOfParallelism !== undefined &&
            object.maxDegreeOfParallelism !== null
        ) {
            message.maxDegreeOfParallelism = Number(
                object.maxDegreeOfParallelism
            );
        } else {
            message.maxDegreeOfParallelism = undefined;
        }
        if (
            object.costThresholdForParallelism !== undefined &&
            object.costThresholdForParallelism !== null
        ) {
            message.costThresholdForParallelism = Number(
                object.costThresholdForParallelism
            );
        } else {
            message.costThresholdForParallelism = undefined;
        }
        if (object.auditLevel !== undefined && object.auditLevel !== null) {
            message.auditLevel = Number(object.auditLevel);
        } else {
            message.auditLevel = undefined;
        }
        if (
            object.fillFactorPercent !== undefined &&
            object.fillFactorPercent !== null
        ) {
            message.fillFactorPercent = Number(object.fillFactorPercent);
        } else {
            message.fillFactorPercent = undefined;
        }
        if (
            object.optimizeForAdHocWorkloads !== undefined &&
            object.optimizeForAdHocWorkloads !== null
        ) {
            message.optimizeForAdHocWorkloads = Boolean(
                object.optimizeForAdHocWorkloads
            );
        } else {
            message.optimizeForAdHocWorkloads = undefined;
        }
        return message;
    },

    toJSON(message: SQLServerConfig2016sp2std): unknown {
        const obj: any = {};
        message.maxDegreeOfParallelism !== undefined &&
            (obj.maxDegreeOfParallelism = message.maxDegreeOfParallelism);
        message.costThresholdForParallelism !== undefined &&
            (obj.costThresholdForParallelism =
                message.costThresholdForParallelism);
        message.auditLevel !== undefined &&
            (obj.auditLevel = message.auditLevel);
        message.fillFactorPercent !== undefined &&
            (obj.fillFactorPercent = message.fillFactorPercent);
        message.optimizeForAdHocWorkloads !== undefined &&
            (obj.optimizeForAdHocWorkloads = message.optimizeForAdHocWorkloads);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SQLServerConfig2016sp2std>
    ): SQLServerConfig2016sp2std {
        const message = {
            ...baseSQLServerConfig2016sp2std,
        } as SQLServerConfig2016sp2std;
        if (
            object.maxDegreeOfParallelism !== undefined &&
            object.maxDegreeOfParallelism !== null
        ) {
            message.maxDegreeOfParallelism = object.maxDegreeOfParallelism;
        } else {
            message.maxDegreeOfParallelism = undefined;
        }
        if (
            object.costThresholdForParallelism !== undefined &&
            object.costThresholdForParallelism !== null
        ) {
            message.costThresholdForParallelism =
                object.costThresholdForParallelism;
        } else {
            message.costThresholdForParallelism = undefined;
        }
        if (object.auditLevel !== undefined && object.auditLevel !== null) {
            message.auditLevel = object.auditLevel;
        } else {
            message.auditLevel = undefined;
        }
        if (
            object.fillFactorPercent !== undefined &&
            object.fillFactorPercent !== null
        ) {
            message.fillFactorPercent = object.fillFactorPercent;
        } else {
            message.fillFactorPercent = undefined;
        }
        if (
            object.optimizeForAdHocWorkloads !== undefined &&
            object.optimizeForAdHocWorkloads !== null
        ) {
            message.optimizeForAdHocWorkloads =
                object.optimizeForAdHocWorkloads;
        } else {
            message.optimizeForAdHocWorkloads = undefined;
        }
        return message;
    },
};

const baseSQLServerConfigSet2016sp2std: object = {};

export const SQLServerConfigSet2016sp2std = {
    encode(
        message: SQLServerConfigSet2016sp2std,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            SQLServerConfig2016sp2std.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            SQLServerConfig2016sp2std.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            SQLServerConfig2016sp2std.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SQLServerConfigSet2016sp2std {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSQLServerConfigSet2016sp2std,
        } as SQLServerConfigSet2016sp2std;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = SQLServerConfig2016sp2std.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = SQLServerConfig2016sp2std.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = SQLServerConfig2016sp2std.decode(
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

    fromJSON(object: any): SQLServerConfigSet2016sp2std {
        const message = {
            ...baseSQLServerConfigSet2016sp2std,
        } as SQLServerConfigSet2016sp2std;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = SQLServerConfig2016sp2std.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = SQLServerConfig2016sp2std.fromJSON(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = SQLServerConfig2016sp2std.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: SQLServerConfigSet2016sp2std): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? SQLServerConfig2016sp2std.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? SQLServerConfig2016sp2std.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? SQLServerConfig2016sp2std.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SQLServerConfigSet2016sp2std>
    ): SQLServerConfigSet2016sp2std {
        const message = {
            ...baseSQLServerConfigSet2016sp2std,
        } as SQLServerConfigSet2016sp2std;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = SQLServerConfig2016sp2std.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = SQLServerConfig2016sp2std.fromPartial(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = SQLServerConfig2016sp2std.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

const baseSQLServerConfig2016sp2ent: object = {};

export const SQLServerConfig2016sp2ent = {
    encode(
        message: SQLServerConfig2016sp2ent,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.maxDegreeOfParallelism !== undefined) {
            Int64Value.encode(
                { value: message.maxDegreeOfParallelism! },
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.costThresholdForParallelism !== undefined) {
            Int64Value.encode(
                { value: message.costThresholdForParallelism! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.auditLevel !== undefined) {
            Int64Value.encode(
                { value: message.auditLevel! },
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.fillFactorPercent !== undefined) {
            Int64Value.encode(
                { value: message.fillFactorPercent! },
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.optimizeForAdHocWorkloads !== undefined) {
            BoolValue.encode(
                { value: message.optimizeForAdHocWorkloads! },
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SQLServerConfig2016sp2ent {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSQLServerConfig2016sp2ent,
        } as SQLServerConfig2016sp2ent;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxDegreeOfParallelism = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 2:
                    message.costThresholdForParallelism = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.auditLevel = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 4:
                    message.fillFactorPercent = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 5:
                    message.optimizeForAdHocWorkloads = BoolValue.decode(
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

    fromJSON(object: any): SQLServerConfig2016sp2ent {
        const message = {
            ...baseSQLServerConfig2016sp2ent,
        } as SQLServerConfig2016sp2ent;
        if (
            object.maxDegreeOfParallelism !== undefined &&
            object.maxDegreeOfParallelism !== null
        ) {
            message.maxDegreeOfParallelism = Number(
                object.maxDegreeOfParallelism
            );
        } else {
            message.maxDegreeOfParallelism = undefined;
        }
        if (
            object.costThresholdForParallelism !== undefined &&
            object.costThresholdForParallelism !== null
        ) {
            message.costThresholdForParallelism = Number(
                object.costThresholdForParallelism
            );
        } else {
            message.costThresholdForParallelism = undefined;
        }
        if (object.auditLevel !== undefined && object.auditLevel !== null) {
            message.auditLevel = Number(object.auditLevel);
        } else {
            message.auditLevel = undefined;
        }
        if (
            object.fillFactorPercent !== undefined &&
            object.fillFactorPercent !== null
        ) {
            message.fillFactorPercent = Number(object.fillFactorPercent);
        } else {
            message.fillFactorPercent = undefined;
        }
        if (
            object.optimizeForAdHocWorkloads !== undefined &&
            object.optimizeForAdHocWorkloads !== null
        ) {
            message.optimizeForAdHocWorkloads = Boolean(
                object.optimizeForAdHocWorkloads
            );
        } else {
            message.optimizeForAdHocWorkloads = undefined;
        }
        return message;
    },

    toJSON(message: SQLServerConfig2016sp2ent): unknown {
        const obj: any = {};
        message.maxDegreeOfParallelism !== undefined &&
            (obj.maxDegreeOfParallelism = message.maxDegreeOfParallelism);
        message.costThresholdForParallelism !== undefined &&
            (obj.costThresholdForParallelism =
                message.costThresholdForParallelism);
        message.auditLevel !== undefined &&
            (obj.auditLevel = message.auditLevel);
        message.fillFactorPercent !== undefined &&
            (obj.fillFactorPercent = message.fillFactorPercent);
        message.optimizeForAdHocWorkloads !== undefined &&
            (obj.optimizeForAdHocWorkloads = message.optimizeForAdHocWorkloads);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SQLServerConfig2016sp2ent>
    ): SQLServerConfig2016sp2ent {
        const message = {
            ...baseSQLServerConfig2016sp2ent,
        } as SQLServerConfig2016sp2ent;
        if (
            object.maxDegreeOfParallelism !== undefined &&
            object.maxDegreeOfParallelism !== null
        ) {
            message.maxDegreeOfParallelism = object.maxDegreeOfParallelism;
        } else {
            message.maxDegreeOfParallelism = undefined;
        }
        if (
            object.costThresholdForParallelism !== undefined &&
            object.costThresholdForParallelism !== null
        ) {
            message.costThresholdForParallelism =
                object.costThresholdForParallelism;
        } else {
            message.costThresholdForParallelism = undefined;
        }
        if (object.auditLevel !== undefined && object.auditLevel !== null) {
            message.auditLevel = object.auditLevel;
        } else {
            message.auditLevel = undefined;
        }
        if (
            object.fillFactorPercent !== undefined &&
            object.fillFactorPercent !== null
        ) {
            message.fillFactorPercent = object.fillFactorPercent;
        } else {
            message.fillFactorPercent = undefined;
        }
        if (
            object.optimizeForAdHocWorkloads !== undefined &&
            object.optimizeForAdHocWorkloads !== null
        ) {
            message.optimizeForAdHocWorkloads =
                object.optimizeForAdHocWorkloads;
        } else {
            message.optimizeForAdHocWorkloads = undefined;
        }
        return message;
    },
};

const baseSQLServerConfigSet2016sp2ent: object = {};

export const SQLServerConfigSet2016sp2ent = {
    encode(
        message: SQLServerConfigSet2016sp2ent,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            SQLServerConfig2016sp2ent.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            SQLServerConfig2016sp2ent.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            SQLServerConfig2016sp2ent.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SQLServerConfigSet2016sp2ent {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSQLServerConfigSet2016sp2ent,
        } as SQLServerConfigSet2016sp2ent;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = SQLServerConfig2016sp2ent.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = SQLServerConfig2016sp2ent.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = SQLServerConfig2016sp2ent.decode(
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

    fromJSON(object: any): SQLServerConfigSet2016sp2ent {
        const message = {
            ...baseSQLServerConfigSet2016sp2ent,
        } as SQLServerConfigSet2016sp2ent;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = SQLServerConfig2016sp2ent.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = SQLServerConfig2016sp2ent.fromJSON(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = SQLServerConfig2016sp2ent.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: SQLServerConfigSet2016sp2ent): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? SQLServerConfig2016sp2ent.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? SQLServerConfig2016sp2ent.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? SQLServerConfig2016sp2ent.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SQLServerConfigSet2016sp2ent>
    ): SQLServerConfigSet2016sp2ent {
        const message = {
            ...baseSQLServerConfigSet2016sp2ent,
        } as SQLServerConfigSet2016sp2ent;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = SQLServerConfig2016sp2ent.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = SQLServerConfig2016sp2ent.fromPartial(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = SQLServerConfig2016sp2ent.fromPartial(
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
