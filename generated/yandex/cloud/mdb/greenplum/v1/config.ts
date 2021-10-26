/* eslint-disable */
import {
    Int64Value,
    StringValue,
} from '../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.greenplum.v1';

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

export enum GreenplumMasterConfig_LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFORMATION = 3,
    WARNING = 4,
    ERROR = 5,
    UNRECOGNIZED = -1,
}

export function greenplumMasterConfig_LogLevelFromJSON(
    object: any
): GreenplumMasterConfig_LogLevel {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_UNSPECIFIED':
            return GreenplumMasterConfig_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case 'TRACE':
            return GreenplumMasterConfig_LogLevel.TRACE;
        case 2:
        case 'DEBUG':
            return GreenplumMasterConfig_LogLevel.DEBUG;
        case 3:
        case 'INFORMATION':
            return GreenplumMasterConfig_LogLevel.INFORMATION;
        case 4:
        case 'WARNING':
            return GreenplumMasterConfig_LogLevel.WARNING;
        case 5:
        case 'ERROR':
            return GreenplumMasterConfig_LogLevel.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GreenplumMasterConfig_LogLevel.UNRECOGNIZED;
    }
}

export function greenplumMasterConfig_LogLevelToJSON(
    object: GreenplumMasterConfig_LogLevel
): string {
    switch (object) {
        case GreenplumMasterConfig_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return 'LOG_LEVEL_UNSPECIFIED';
        case GreenplumMasterConfig_LogLevel.TRACE:
            return 'TRACE';
        case GreenplumMasterConfig_LogLevel.DEBUG:
            return 'DEBUG';
        case GreenplumMasterConfig_LogLevel.INFORMATION:
            return 'INFORMATION';
        case GreenplumMasterConfig_LogLevel.WARNING:
            return 'WARNING';
        case GreenplumMasterConfig_LogLevel.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}

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

export enum GreenplumSegmentConfig_LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFORMATION = 3,
    WARNING = 4,
    ERROR = 5,
    UNRECOGNIZED = -1,
}

export function greenplumSegmentConfig_LogLevelFromJSON(
    object: any
): GreenplumSegmentConfig_LogLevel {
    switch (object) {
        case 0:
        case 'LOG_LEVEL_UNSPECIFIED':
            return GreenplumSegmentConfig_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case 'TRACE':
            return GreenplumSegmentConfig_LogLevel.TRACE;
        case 2:
        case 'DEBUG':
            return GreenplumSegmentConfig_LogLevel.DEBUG;
        case 3:
        case 'INFORMATION':
            return GreenplumSegmentConfig_LogLevel.INFORMATION;
        case 4:
        case 'WARNING':
            return GreenplumSegmentConfig_LogLevel.WARNING;
        case 5:
        case 'ERROR':
            return GreenplumSegmentConfig_LogLevel.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GreenplumSegmentConfig_LogLevel.UNRECOGNIZED;
    }
}

export function greenplumSegmentConfig_LogLevelToJSON(
    object: GreenplumSegmentConfig_LogLevel
): string {
    switch (object) {
        case GreenplumSegmentConfig_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return 'LOG_LEVEL_UNSPECIFIED';
        case GreenplumSegmentConfig_LogLevel.TRACE:
            return 'TRACE';
        case GreenplumSegmentConfig_LogLevel.DEBUG:
            return 'DEBUG';
        case GreenplumSegmentConfig_LogLevel.INFORMATION:
            return 'INFORMATION';
        case GreenplumSegmentConfig_LogLevel.WARNING:
            return 'WARNING';
        case GreenplumSegmentConfig_LogLevel.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}

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

const baseResources: object = {
    resourcePresetId: '',
    diskSize: 0,
    diskTypeId: '',
};

export const Resources = {
    encode(
        message: Resources,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        if (message.diskSize !== 0) {
            writer.uint32(16).int64(message.diskSize);
        }
        if (message.diskTypeId !== '') {
            writer.uint32(26).string(message.diskTypeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResources } as Resources;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.diskSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.diskTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Resources {
        const message = { ...baseResources } as Resources;
        if (
            object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null
        ) {
            message.resourcePresetId = String(object.resourcePresetId);
        } else {
            message.resourcePresetId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = Number(object.diskSize);
        } else {
            message.diskSize = 0;
        }
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = String(object.diskTypeId);
        } else {
            message.diskTypeId = '';
        }
        return message;
    },

    toJSON(message: Resources): unknown {
        const obj: any = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.diskSize !== undefined && (obj.diskSize = message.diskSize);
        message.diskTypeId !== undefined &&
            (obj.diskTypeId = message.diskTypeId);
        return obj;
    },

    fromPartial(object: DeepPartial<Resources>): Resources {
        const message = { ...baseResources } as Resources;
        if (
            object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null
        ) {
            message.resourcePresetId = object.resourcePresetId;
        } else {
            message.resourcePresetId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = object.diskSize;
        } else {
            message.diskSize = 0;
        }
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = object.diskTypeId;
        } else {
            message.diskTypeId = '';
        }
        return message;
    },
};

const baseMasterSubclusterConfig: object = {};

export const MasterSubclusterConfig = {
    encode(
        message: MasterSubclusterConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.config !== undefined) {
            GreenplumMasterConfigSet.encode(
                message.config,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MasterSubclusterConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMasterSubclusterConfig,
        } as MasterSubclusterConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = Resources.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.config = GreenplumMasterConfigSet.decode(
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

    fromJSON(object: any): MasterSubclusterConfig {
        const message = {
            ...baseMasterSubclusterConfig,
        } as MasterSubclusterConfig;
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = GreenplumMasterConfigSet.fromJSON(object.config);
        } else {
            message.config = undefined;
        }
        return message;
    },

    toJSON(message: MasterSubclusterConfig): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.config !== undefined &&
            (obj.config = message.config
                ? GreenplumMasterConfigSet.toJSON(message.config)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<MasterSubclusterConfig>
    ): MasterSubclusterConfig {
        const message = {
            ...baseMasterSubclusterConfig,
        } as MasterSubclusterConfig;
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = GreenplumMasterConfigSet.fromPartial(
                object.config
            );
        } else {
            message.config = undefined;
        }
        return message;
    },
};

const baseSegmentSubclusterConfig: object = {};

export const SegmentSubclusterConfig = {
    encode(
        message: SegmentSubclusterConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resources !== undefined) {
            Resources.encode(
                message.resources,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.config !== undefined) {
            GreenplumSegmentConfigSet.encode(
                message.config,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SegmentSubclusterConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSegmentSubclusterConfig,
        } as SegmentSubclusterConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = Resources.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.config = GreenplumSegmentConfigSet.decode(
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

    fromJSON(object: any): SegmentSubclusterConfig {
        const message = {
            ...baseSegmentSubclusterConfig,
        } as SegmentSubclusterConfig;
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = GreenplumSegmentConfigSet.fromJSON(object.config);
        } else {
            message.config = undefined;
        }
        return message;
    },

    toJSON(message: SegmentSubclusterConfig): unknown {
        const obj: any = {};
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? Resources.toJSON(message.resources)
                : undefined);
        message.config !== undefined &&
            (obj.config = message.config
                ? GreenplumSegmentConfigSet.toJSON(message.config)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<SegmentSubclusterConfig>
    ): SegmentSubclusterConfig {
        const message = {
            ...baseSegmentSubclusterConfig,
        } as SegmentSubclusterConfig;
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        } else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = GreenplumSegmentConfigSet.fromPartial(
                object.config
            );
        } else {
            message.config = undefined;
        }
        return message;
    },
};

const baseGreenplumMasterConfig: object = { logLevel: 0 };

export const GreenplumMasterConfig = {
    encode(
        message: GreenplumMasterConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logLevel !== 0) {
            writer.uint32(8).int32(message.logLevel);
        }
        if (message.maxConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxConnections! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.timezone !== undefined) {
            StringValue.encode(
                { value: message.timezone! },
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GreenplumMasterConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGreenplumMasterConfig,
        } as GreenplumMasterConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logLevel = reader.int32() as any;
                    break;
                case 2:
                    message.maxConnections = Int64Value.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 3:
                    message.timezone = StringValue.decode(
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

    fromJSON(object: any): GreenplumMasterConfig {
        const message = {
            ...baseGreenplumMasterConfig,
        } as GreenplumMasterConfig;
        if (object.logLevel !== undefined && object.logLevel !== null) {
            message.logLevel = greenplumMasterConfig_LogLevelFromJSON(
                object.logLevel
            );
        } else {
            message.logLevel = 0;
        }
        if (
            object.maxConnections !== undefined &&
            object.maxConnections !== null
        ) {
            message.maxConnections = Number(object.maxConnections);
        } else {
            message.maxConnections = undefined;
        }
        if (object.timezone !== undefined && object.timezone !== null) {
            message.timezone = String(object.timezone);
        } else {
            message.timezone = undefined;
        }
        return message;
    },

    toJSON(message: GreenplumMasterConfig): unknown {
        const obj: any = {};
        message.logLevel !== undefined &&
            (obj.logLevel = greenplumMasterConfig_LogLevelToJSON(
                message.logLevel
            ));
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.timezone !== undefined && (obj.timezone = message.timezone);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GreenplumMasterConfig>
    ): GreenplumMasterConfig {
        const message = {
            ...baseGreenplumMasterConfig,
        } as GreenplumMasterConfig;
        if (object.logLevel !== undefined && object.logLevel !== null) {
            message.logLevel = object.logLevel;
        } else {
            message.logLevel = 0;
        }
        if (
            object.maxConnections !== undefined &&
            object.maxConnections !== null
        ) {
            message.maxConnections = object.maxConnections;
        } else {
            message.maxConnections = undefined;
        }
        if (object.timezone !== undefined && object.timezone !== null) {
            message.timezone = object.timezone;
        } else {
            message.timezone = undefined;
        }
        return message;
    },
};

const baseGreenplumSegmentConfig: object = { logLevel: 0 };

export const GreenplumSegmentConfig = {
    encode(
        message: GreenplumSegmentConfig,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.logLevel !== 0) {
            writer.uint32(8).int32(message.logLevel);
        }
        if (message.maxConnections !== undefined) {
            Int64Value.encode(
                { value: message.maxConnections! },
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GreenplumSegmentConfig {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGreenplumSegmentConfig,
        } as GreenplumSegmentConfig;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logLevel = reader.int32() as any;
                    break;
                case 2:
                    message.maxConnections = Int64Value.decode(
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

    fromJSON(object: any): GreenplumSegmentConfig {
        const message = {
            ...baseGreenplumSegmentConfig,
        } as GreenplumSegmentConfig;
        if (object.logLevel !== undefined && object.logLevel !== null) {
            message.logLevel = greenplumSegmentConfig_LogLevelFromJSON(
                object.logLevel
            );
        } else {
            message.logLevel = 0;
        }
        if (
            object.maxConnections !== undefined &&
            object.maxConnections !== null
        ) {
            message.maxConnections = Number(object.maxConnections);
        } else {
            message.maxConnections = undefined;
        }
        return message;
    },

    toJSON(message: GreenplumSegmentConfig): unknown {
        const obj: any = {};
        message.logLevel !== undefined &&
            (obj.logLevel = greenplumSegmentConfig_LogLevelToJSON(
                message.logLevel
            ));
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GreenplumSegmentConfig>
    ): GreenplumSegmentConfig {
        const message = {
            ...baseGreenplumSegmentConfig,
        } as GreenplumSegmentConfig;
        if (object.logLevel !== undefined && object.logLevel !== null) {
            message.logLevel = object.logLevel;
        } else {
            message.logLevel = 0;
        }
        if (
            object.maxConnections !== undefined &&
            object.maxConnections !== null
        ) {
            message.maxConnections = object.maxConnections;
        } else {
            message.maxConnections = undefined;
        }
        return message;
    },
};

const baseGreenplumMasterConfigSet: object = {};

export const GreenplumMasterConfigSet = {
    encode(
        message: GreenplumMasterConfigSet,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            GreenplumMasterConfig.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            GreenplumMasterConfig.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            GreenplumMasterConfig.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GreenplumMasterConfigSet {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGreenplumMasterConfigSet,
        } as GreenplumMasterConfigSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = GreenplumMasterConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = GreenplumMasterConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = GreenplumMasterConfig.decode(
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

    fromJSON(object: any): GreenplumMasterConfigSet {
        const message = {
            ...baseGreenplumMasterConfigSet,
        } as GreenplumMasterConfigSet;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = GreenplumMasterConfig.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = GreenplumMasterConfig.fromJSON(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = GreenplumMasterConfig.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: GreenplumMasterConfigSet): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? GreenplumMasterConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? GreenplumMasterConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? GreenplumMasterConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GreenplumMasterConfigSet>
    ): GreenplumMasterConfigSet {
        const message = {
            ...baseGreenplumMasterConfigSet,
        } as GreenplumMasterConfigSet;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = GreenplumMasterConfig.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = GreenplumMasterConfig.fromPartial(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = GreenplumMasterConfig.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

const baseGreenplumSegmentConfigSet: object = {};

export const GreenplumSegmentConfigSet = {
    encode(
        message: GreenplumSegmentConfigSet,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveConfig !== undefined) {
            GreenplumSegmentConfig.encode(
                message.effectiveConfig,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.userConfig !== undefined) {
            GreenplumSegmentConfig.encode(
                message.userConfig,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            GreenplumSegmentConfig.encode(
                message.defaultConfig,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GreenplumSegmentConfigSet {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGreenplumSegmentConfigSet,
        } as GreenplumSegmentConfigSet;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = GreenplumSegmentConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.userConfig = GreenplumSegmentConfig.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.defaultConfig = GreenplumSegmentConfig.decode(
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

    fromJSON(object: any): GreenplumSegmentConfigSet {
        const message = {
            ...baseGreenplumSegmentConfigSet,
        } as GreenplumSegmentConfigSet;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = GreenplumSegmentConfig.fromJSON(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = GreenplumSegmentConfig.fromJSON(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = GreenplumSegmentConfig.fromJSON(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },

    toJSON(message: GreenplumSegmentConfigSet): unknown {
        const obj: any = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? GreenplumSegmentConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? GreenplumSegmentConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? GreenplumSegmentConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GreenplumSegmentConfigSet>
    ): GreenplumSegmentConfigSet {
        const message = {
            ...baseGreenplumSegmentConfigSet,
        } as GreenplumSegmentConfigSet;
        if (
            object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null
        ) {
            message.effectiveConfig = GreenplumSegmentConfig.fromPartial(
                object.effectiveConfig
            );
        } else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = GreenplumSegmentConfig.fromPartial(
                object.userConfig
            );
        } else {
            message.userConfig = undefined;
        }
        if (
            object.defaultConfig !== undefined &&
            object.defaultConfig !== null
        ) {
            message.defaultConfig = GreenplumSegmentConfig.fromPartial(
                object.defaultConfig
            );
        } else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
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
    ? { [K in keyof T]?: DeepPartial<T[K]> }
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
