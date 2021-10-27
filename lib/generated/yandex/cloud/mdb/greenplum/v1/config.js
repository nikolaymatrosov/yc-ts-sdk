"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreenplumSegmentConfigSet = exports.GreenplumMasterConfigSet = exports.GreenplumSegmentConfig = exports.GreenplumMasterConfig = exports.SegmentSubclusterConfig = exports.MasterSubclusterConfig = exports.Resources = exports.greenplumSegmentConfig_LogLevelToJSON = exports.greenplumSegmentConfig_LogLevelFromJSON = exports.GreenplumSegmentConfig_LogLevel = exports.greenplumMasterConfig_LogLevelToJSON = exports.greenplumMasterConfig_LogLevelFromJSON = exports.GreenplumMasterConfig_LogLevel = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../../google/protobuf/wrappers");
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.greenplum.v1';
var GreenplumMasterConfig_LogLevel;
(function (GreenplumMasterConfig_LogLevel) {
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["TRACE"] = 1] = "TRACE";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["DEBUG"] = 2] = "DEBUG";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["INFORMATION"] = 3] = "INFORMATION";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["WARNING"] = 4] = "WARNING";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["ERROR"] = 5] = "ERROR";
    GreenplumMasterConfig_LogLevel[GreenplumMasterConfig_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GreenplumMasterConfig_LogLevel = exports.GreenplumMasterConfig_LogLevel || (exports.GreenplumMasterConfig_LogLevel = {}));
function greenplumMasterConfig_LogLevelFromJSON(object) {
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
exports.greenplumMasterConfig_LogLevelFromJSON = greenplumMasterConfig_LogLevelFromJSON;
function greenplumMasterConfig_LogLevelToJSON(object) {
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
exports.greenplumMasterConfig_LogLevelToJSON = greenplumMasterConfig_LogLevelToJSON;
var GreenplumSegmentConfig_LogLevel;
(function (GreenplumSegmentConfig_LogLevel) {
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["TRACE"] = 1] = "TRACE";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["DEBUG"] = 2] = "DEBUG";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["INFORMATION"] = 3] = "INFORMATION";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["WARNING"] = 4] = "WARNING";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["ERROR"] = 5] = "ERROR";
    GreenplumSegmentConfig_LogLevel[GreenplumSegmentConfig_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GreenplumSegmentConfig_LogLevel = exports.GreenplumSegmentConfig_LogLevel || (exports.GreenplumSegmentConfig_LogLevel = {}));
function greenplumSegmentConfig_LogLevelFromJSON(object) {
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
exports.greenplumSegmentConfig_LogLevelFromJSON = greenplumSegmentConfig_LogLevelFromJSON;
function greenplumSegmentConfig_LogLevelToJSON(object) {
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
exports.greenplumSegmentConfig_LogLevelToJSON = greenplumSegmentConfig_LogLevelToJSON;
const baseResources = {
    $type: 'yandex.cloud.mdb.greenplum.v1.Resources',
    resourcePresetId: '',
    diskSize: 0,
    diskTypeId: '',
};
exports.Resources = {
    $type: 'yandex.cloud.mdb.greenplum.v1.Resources',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.Resources.$type, exports.Resources);
const baseMasterSubclusterConfig = {
    $type: 'yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig',
};
exports.MasterSubclusterConfig = {
    $type: 'yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.config !== undefined) {
            exports.GreenplumMasterConfigSet.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMasterSubclusterConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.config = exports.GreenplumMasterConfigSet.decode(reader, reader.uint32());
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
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.GreenplumMasterConfigSet.fromJSON(object.config);
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
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.config !== undefined &&
            (obj.config = message.config
                ? exports.GreenplumMasterConfigSet.toJSON(message.config)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMasterSubclusterConfig,
        };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.GreenplumMasterConfigSet.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MasterSubclusterConfig.$type, exports.MasterSubclusterConfig);
const baseSegmentSubclusterConfig = {
    $type: 'yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig',
};
exports.SegmentSubclusterConfig = {
    $type: 'yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.config !== undefined) {
            exports.GreenplumSegmentConfigSet.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSegmentSubclusterConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.config = exports.GreenplumSegmentConfigSet.decode(reader, reader.uint32());
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
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.GreenplumSegmentConfigSet.fromJSON(object.config);
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
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.config !== undefined &&
            (obj.config = message.config
                ? exports.GreenplumSegmentConfigSet.toJSON(message.config)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSegmentSubclusterConfig,
        };
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = exports.GreenplumSegmentConfigSet.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SegmentSubclusterConfig.$type, exports.SegmentSubclusterConfig);
const baseGreenplumMasterConfig = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GreenplumMasterConfig',
    logLevel: 0,
};
exports.GreenplumMasterConfig = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GreenplumMasterConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logLevel !== 0) {
            writer.uint32(8).int32(message.logLevel);
        }
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxConnections,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.timezone !== undefined) {
            wrappers_1.StringValue.encode({
                $type: 'google.protobuf.StringValue',
                value: message.timezone,
            }, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.timezone = wrappers_1.StringValue.decode(reader, reader.uint32()).value;
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
typeRegistry_1.messageTypeRegistry.set(exports.GreenplumMasterConfig.$type, exports.GreenplumMasterConfig);
const baseGreenplumSegmentConfig = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GreenplumSegmentConfig',
    logLevel: 0,
};
exports.GreenplumSegmentConfig = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GreenplumSegmentConfig',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logLevel !== 0) {
            writer.uint32(8).int32(message.logLevel);
        }
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: 'google.protobuf.Int64Value',
                value: message.maxConnections,
            }, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
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
typeRegistry_1.messageTypeRegistry.set(exports.GreenplumSegmentConfig.$type, exports.GreenplumSegmentConfig);
const baseGreenplumMasterConfigSet = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GreenplumMasterConfigSet',
};
exports.GreenplumMasterConfigSet = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GreenplumMasterConfigSet',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.GreenplumMasterConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.GreenplumMasterConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.GreenplumMasterConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGreenplumMasterConfigSet,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.GreenplumMasterConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.GreenplumMasterConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.GreenplumMasterConfig.decode(reader, reader.uint32());
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
            message.effectiveConfig = exports.GreenplumMasterConfig.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.GreenplumMasterConfig.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.GreenplumMasterConfig.fromJSON(object.defaultConfig);
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
                ? exports.GreenplumMasterConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.GreenplumMasterConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.GreenplumMasterConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGreenplumMasterConfigSet,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.GreenplumMasterConfig.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.GreenplumMasterConfig.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.GreenplumMasterConfig.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GreenplumMasterConfigSet.$type, exports.GreenplumMasterConfigSet);
const baseGreenplumSegmentConfigSet = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GreenplumSegmentConfigSet',
};
exports.GreenplumSegmentConfigSet = {
    $type: 'yandex.cloud.mdb.greenplum.v1.GreenplumSegmentConfigSet',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.GreenplumSegmentConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.GreenplumSegmentConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.GreenplumSegmentConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGreenplumSegmentConfigSet,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.GreenplumSegmentConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.GreenplumSegmentConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.GreenplumSegmentConfig.decode(reader, reader.uint32());
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
            message.effectiveConfig = exports.GreenplumSegmentConfig.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.GreenplumSegmentConfig.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.GreenplumSegmentConfig.fromJSON(object.defaultConfig);
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
                ? exports.GreenplumSegmentConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.GreenplumSegmentConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.GreenplumSegmentConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGreenplumSegmentConfigSet,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.GreenplumSegmentConfig.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.GreenplumSegmentConfig.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.GreenplumSegmentConfig.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GreenplumSegmentConfigSet.$type, exports.GreenplumSegmentConfigSet);
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
