import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.sqlserver.v1.config";
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
export declare const SQLServerConfig2016sp2std: {
    encode(message: SQLServerConfig2016sp2std, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SQLServerConfig2016sp2std;
    fromJSON(object: any): SQLServerConfig2016sp2std;
    toJSON(message: SQLServerConfig2016sp2std): unknown;
    fromPartial(object: DeepPartial<SQLServerConfig2016sp2std>): SQLServerConfig2016sp2std;
};
export declare const SQLServerConfigSet2016sp2std: {
    encode(message: SQLServerConfigSet2016sp2std, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SQLServerConfigSet2016sp2std;
    fromJSON(object: any): SQLServerConfigSet2016sp2std;
    toJSON(message: SQLServerConfigSet2016sp2std): unknown;
    fromPartial(object: DeepPartial<SQLServerConfigSet2016sp2std>): SQLServerConfigSet2016sp2std;
};
export declare const SQLServerConfig2016sp2ent: {
    encode(message: SQLServerConfig2016sp2ent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SQLServerConfig2016sp2ent;
    fromJSON(object: any): SQLServerConfig2016sp2ent;
    toJSON(message: SQLServerConfig2016sp2ent): unknown;
    fromPartial(object: DeepPartial<SQLServerConfig2016sp2ent>): SQLServerConfig2016sp2ent;
};
export declare const SQLServerConfigSet2016sp2ent: {
    encode(message: SQLServerConfigSet2016sp2ent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SQLServerConfigSet2016sp2ent;
    fromJSON(object: any): SQLServerConfigSet2016sp2ent;
    toJSON(message: SQLServerConfigSet2016sp2ent): unknown;
    fromPartial(object: DeepPartial<SQLServerConfigSet2016sp2ent>): SQLServerConfigSet2016sp2ent;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
