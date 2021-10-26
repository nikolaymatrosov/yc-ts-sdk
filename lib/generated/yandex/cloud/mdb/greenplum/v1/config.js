/* eslint-disable */
import { Int64Value, StringValue, } from '../../../../../google/protobuf/wrappers';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.greenplum.v1';
export var GreenplumMasterConfig_LogLevel;
(function (GreenplumMasterConfig_LogLevel) {
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["TRACE"] = 1] = "TRACE";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["DEBUG"] = 2] = "DEBUG";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["INFORMATION"] = 3] = "INFORMATION";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["WARNING"] = 4] = "WARNING";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["ERROR"] = 5] = "ERROR";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GreenplumMasterConfig_LogLevel || (GreenplumMasterConfig_LogLevel = {}));
export function greenplumMasterConfig_LogLevelFromJSON(object) {
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
export function greenplumMasterConfig_LogLevelToJSON(object) {
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
export var GreenplumSegmentConfig_LogLevel;
(function (GreenplumSegmentConfig_LogLevel) {
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["TRACE"] = 1] = "TRACE";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["DEBUG"] = 2] = "DEBUG";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["INFORMATION"] = 3] = "INFORMATION";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["WARNING"] = 4] = "WARNING";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["ERROR"] = 5] = "ERROR";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GreenplumSegmentConfig_LogLevel || (GreenplumSegmentConfig_LogLevel = {}));
export function greenplumSegmentConfig_LogLevelFromJSON(object) {
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
export function greenplumSegmentConfig_LogLevelToJSON(object) {
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
const baseResources = {
    resourcePresetId: '',
    diskSize: 0,
    diskTypeId: '',
};
export const Resources = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResources };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                case 2:
                    message.diskSize = longToNumber(reader.int64());
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
    fromJSON(object) {
        const message = { ...baseResources };
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = String(object.resourcePresetId);
        }
        else {
            message.resourcePresetId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = Number(object.diskSize);
        }
        else {
            message.diskSize = 0;
        }
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = String(object.diskTypeId);
        }
        else {
            message.diskTypeId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        message.diskSize !== undefined && (obj.diskSize = message.diskSize);
        message.diskTypeId !== undefined &&
            (obj.diskTypeId = message.diskTypeId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResources };
        if (object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null) {
            message.resourcePresetId = object.resourcePresetId;
        }
        else {
            message.resourcePresetId = '';
        }
        if (object.diskSize !== undefined && object.diskSize !== null) {
            message.diskSize = object.diskSize;
        }
        else {
            message.diskSize = 0;
        }
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = object.diskTypeId;
        }
        else {
            message.diskTypeId = '';
        }
        return message;
    },
};
const baseMasterSubclusterConfig = {};
export const MasterSubclusterConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.config !== undefined) {
            GreenplumMasterConfigSet.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMasterSubclusterConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.config = GreenplumMasterConfigSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMasterSubclusterConfig,
        };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = GreenplumMasterConfigSet.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseMasterSubclusterConfig,
        };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = GreenplumMasterConfigSet.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        return message;
    },
};
const baseSegmentSubclusterConfig = {};
export const SegmentSubclusterConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resources !== undefined) {
            Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.config !== undefined) {
            GreenplumSegmentConfigSet.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSegmentSubclusterConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = Resources.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.config = GreenplumSegmentConfigSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseSegmentSubclusterConfig,
        };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = GreenplumSegmentConfigSet.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseSegmentSubclusterConfig,
        };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = GreenplumSegmentConfigSet.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        return message;
    },
};
const baseGreenplumMasterConfig = { logLevel: 0 };
export const GreenplumMasterConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.logLevel !== 0) {
            writer.uint32(8).int32(message.logLevel);
        }
        if (message.maxConnections !== undefined) {
            Int64Value.encode({ value: message.maxConnections }, writer.uint32(18).fork()).ldelim();
        }
        if (message.timezone !== undefined) {
            StringValue.encode({ value: message.timezone }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGreenplumMasterConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logLevel = reader.int32();
                    break;
                case 2:
                    message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.timezone = StringValue.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseGreenplumMasterConfig,
        };
        if (object.logLevel !== undefined && object.logLevel !== null) {
            message.logLevel = greenplumMasterConfig_LogLevelFromJSON(object.logLevel);
        }
        else {
            message.logLevel = 0;
        }
        if (object.maxConnections !== undefined &&
            object.maxConnections !== null) {
            message.maxConnections = Number(object.maxConnections);
        }
        else {
            message.maxConnections = undefined;
        }
        if (object.timezone !== undefined && object.timezone !== null) {
            message.timezone = String(object.timezone);
        }
        else {
            message.timezone = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logLevel !== undefined &&
            (obj.logLevel = greenplumMasterConfig_LogLevelToJSON(message.logLevel));
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.timezone !== undefined && (obj.timezone = message.timezone);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGreenplumMasterConfig,
        };
        if (object.logLevel !== undefined && object.logLevel !== null) {
            message.logLevel = object.logLevel;
        }
        else {
            message.logLevel = 0;
        }
        if (object.maxConnections !== undefined &&
            object.maxConnections !== null) {
            message.maxConnections = object.maxConnections;
        }
        else {
            message.maxConnections = undefined;
        }
        if (object.timezone !== undefined && object.timezone !== null) {
            message.timezone = object.timezone;
        }
        else {
            message.timezone = undefined;
        }
        return message;
    },
};
const baseGreenplumSegmentConfig = { logLevel: 0 };
export const GreenplumSegmentConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.logLevel !== 0) {
            writer.uint32(8).int32(message.logLevel);
        }
        if (message.maxConnections !== undefined) {
            Int64Value.encode({ value: message.maxConnections }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGreenplumSegmentConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logLevel = reader.int32();
                    break;
                case 2:
                    message.maxConnections = Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseGreenplumSegmentConfig,
        };
        if (object.logLevel !== undefined && object.logLevel !== null) {
            message.logLevel = greenplumSegmentConfig_LogLevelFromJSON(object.logLevel);
        }
        else {
            message.logLevel = 0;
        }
        if (object.maxConnections !== undefined &&
            object.maxConnections !== null) {
            message.maxConnections = Number(object.maxConnections);
        }
        else {
            message.maxConnections = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logLevel !== undefined &&
            (obj.logLevel = greenplumSegmentConfig_LogLevelToJSON(message.logLevel));
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGreenplumSegmentConfig,
        };
        if (object.logLevel !== undefined && object.logLevel !== null) {
            message.logLevel = object.logLevel;
        }
        else {
            message.logLevel = 0;
        }
        if (object.maxConnections !== undefined &&
            object.maxConnections !== null) {
            message.maxConnections = object.maxConnections;
        }
        else {
            message.maxConnections = undefined;
        }
        return message;
    },
};
const baseGreenplumMasterConfigSet = {};
export const GreenplumMasterConfigSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            GreenplumMasterConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            GreenplumMasterConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            GreenplumMasterConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGreenplumMasterConfigSet,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = GreenplumMasterConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = GreenplumMasterConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = GreenplumMasterConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseGreenplumMasterConfigSet,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = GreenplumMasterConfig.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = GreenplumMasterConfig.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = GreenplumMasterConfig.fromJSON(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseGreenplumMasterConfigSet,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = GreenplumMasterConfig.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = GreenplumMasterConfig.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = GreenplumMasterConfig.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
const baseGreenplumSegmentConfigSet = {};
export const GreenplumSegmentConfigSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            GreenplumSegmentConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            GreenplumSegmentConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            GreenplumSegmentConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGreenplumSegmentConfigSet,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = GreenplumSegmentConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = GreenplumSegmentConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = GreenplumSegmentConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseGreenplumSegmentConfigSet,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = GreenplumSegmentConfig.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = GreenplumSegmentConfig.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = GreenplumSegmentConfig.fromJSON(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseGreenplumSegmentConfigSet,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = GreenplumSegmentConfig.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = GreenplumSegmentConfig.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = GreenplumSegmentConfig.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}