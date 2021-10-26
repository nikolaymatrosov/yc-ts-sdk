import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.greenplum.v1";
export interface Resources {
    /**
     * ID of the preset for computational resources available to a host (CPU, memory etc.).
     * All available presets are listed in the [documentation](/docs/managed-greenplum/concepts/instance-types).
     */
    resourcePresetId: string;
    /** Volume of the storage available to a host. */
    diskSize: number;
    /**
     * Type of the storage environment for the host.
     *
     * Possible values:
     * * network-hdd - network HDD drive,
     * * network-ssd - network SSD drive,
     * * local-ssd - local SSD storage.
     */
    diskTypeId: string;
}
/** Configuration of master subcluster */
export interface MasterSubclusterConfig {
    /** Resources allocated to Greenplum master subcluster hosts. */
    resources: Resources | undefined;
    /** Configuration settings of a Greenplum master server. */
    config: GreenplumMasterConfigSet | undefined;
}
/** Configuration of segmet subcluster */
export interface SegmentSubclusterConfig {
    /** Resources allocated to Greenplum segment subcluster hosts. */
    resources: Resources | undefined;
    /** Configuration settings of a Greenplum segment server. */
    config: GreenplumSegmentConfigSet | undefined;
}
/**
 * Greenplum master subcluster configuration options. Detailed description for each set of options
 *
 * Any options not listed here are not supported.
 */
export interface GreenplumMasterConfig {
    /** Logging level for the Greenplum master subcluster. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
    logLevel: GreenplumMasterConfig_LogLevel;
    /** Maximum number of inbound connections. */
    maxConnections: number | undefined;
    /** The server's time zone to be used in DateTime fields conversions. Specified as an IANA identifier. */
    timezone: string | undefined;
}
export declare enum GreenplumMasterConfig_LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFORMATION = 3,
    WARNING = 4,
    ERROR = 5,
    UNRECOGNIZED = -1
}
export declare function greenplumMasterConfig_LogLevelFromJSON(object: any): GreenplumMasterConfig_LogLevel;
export declare function greenplumMasterConfig_LogLevelToJSON(object: GreenplumMasterConfig_LogLevel): string;
/**
 * Greenplum segment subcluster configuration options. Detailed description for each set of options
 *
 * Any options not listed here are not supported.
 */
export interface GreenplumSegmentConfig {
    /** Logging level for the Greenplum segment subcluster. Possible values: TRACE, DEBUG, INFORMATION, WARNING, ERROR. */
    logLevel: GreenplumSegmentConfig_LogLevel;
    /** Maximum number of inbound connections. */
    maxConnections: number | undefined;
}
export declare enum GreenplumSegmentConfig_LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFORMATION = 3,
    WARNING = 4,
    ERROR = 5,
    UNRECOGNIZED = -1
}
export declare function greenplumSegmentConfig_LogLevelFromJSON(object: any): GreenplumSegmentConfig_LogLevel;
export declare function greenplumSegmentConfig_LogLevelToJSON(object: GreenplumSegmentConfig_LogLevel): string;
export interface GreenplumMasterConfigSet {
    /**
     * Effective settings for a Greenplum master subcluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: GreenplumMasterConfig | undefined;
    /** User-defined settings for a Greenplum master subcluster. */
    userConfig: GreenplumMasterConfig | undefined;
    /** Default configuration for a Greenplum master subcluster. */
    defaultConfig: GreenplumMasterConfig | undefined;
}
export interface GreenplumSegmentConfigSet {
    /**
     * Effective settings for a Greenplum segment subcluster (a combination of settings defined
     * in [user_config] and [default_config]).
     */
    effectiveConfig: GreenplumSegmentConfig | undefined;
    /** User-defined settings for a Greenplum segment subcluster. */
    userConfig: GreenplumSegmentConfig | undefined;
    /** Default configuration for a Greenplum segment subcluster. */
    defaultConfig: GreenplumSegmentConfig | undefined;
}
export declare const Resources: {
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial(object: DeepPartial<Resources>): Resources;
};
export declare const MasterSubclusterConfig: {
    encode(message: MasterSubclusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterSubclusterConfig;
    fromJSON(object: any): MasterSubclusterConfig;
    toJSON(message: MasterSubclusterConfig): unknown;
    fromPartial(object: DeepPartial<MasterSubclusterConfig>): MasterSubclusterConfig;
};
export declare const SegmentSubclusterConfig: {
    encode(message: SegmentSubclusterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SegmentSubclusterConfig;
    fromJSON(object: any): SegmentSubclusterConfig;
    toJSON(message: SegmentSubclusterConfig): unknown;
    fromPartial(object: DeepPartial<SegmentSubclusterConfig>): SegmentSubclusterConfig;
};
export declare const GreenplumMasterConfig: {
    encode(message: GreenplumMasterConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GreenplumMasterConfig;
    fromJSON(object: any): GreenplumMasterConfig;
    toJSON(message: GreenplumMasterConfig): unknown;
    fromPartial(object: DeepPartial<GreenplumMasterConfig>): GreenplumMasterConfig;
};
export declare const GreenplumSegmentConfig: {
    encode(message: GreenplumSegmentConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GreenplumSegmentConfig;
    fromJSON(object: any): GreenplumSegmentConfig;
    toJSON(message: GreenplumSegmentConfig): unknown;
    fromPartial(object: DeepPartial<GreenplumSegmentConfig>): GreenplumSegmentConfig;
};
export declare const GreenplumMasterConfigSet: {
    encode(message: GreenplumMasterConfigSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GreenplumMasterConfigSet;
    fromJSON(object: any): GreenplumMasterConfigSet;
    toJSON(message: GreenplumMasterConfigSet): unknown;
    fromPartial(object: DeepPartial<GreenplumMasterConfigSet>): GreenplumMasterConfigSet;
};
export declare const GreenplumSegmentConfigSet: {
    encode(message: GreenplumSegmentConfigSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GreenplumSegmentConfigSet;
    fromJSON(object: any): GreenplumSegmentConfigSet;
    toJSON(message: GreenplumSegmentConfigSet): unknown;
    fromPartial(object: DeepPartial<GreenplumSegmentConfigSet>): GreenplumSegmentConfigSet;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
