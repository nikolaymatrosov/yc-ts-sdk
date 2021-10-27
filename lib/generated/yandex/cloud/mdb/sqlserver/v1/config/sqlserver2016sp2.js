"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLServerConfigSet2016sp2ent = exports.SQLServerConfig2016sp2ent = exports.SQLServerConfigSet2016sp2std = exports.SQLServerConfig2016sp2std = exports.protobufPackage = void 0;
/* eslint-disable */
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.sqlserver.v1.config';
const baseSQLServerConfig2016sp2std = {};
exports.SQLServerConfig2016sp2std = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxDegreeOfParallelism !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxDegreeOfParallelism }, writer.uint32(10).fork()).ldelim();
        }
        if (message.costThresholdForParallelism !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.costThresholdForParallelism }, writer.uint32(18).fork()).ldelim();
        }
        if (message.auditLevel !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.auditLevel }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fillFactorPercent !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.fillFactorPercent }, writer.uint32(34).fork()).ldelim();
        }
        if (message.optimizeForAdHocWorkloads !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.optimizeForAdHocWorkloads }, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSQLServerConfig2016sp2std,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxDegreeOfParallelism = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.costThresholdForParallelism = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.auditLevel = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fillFactorPercent = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.optimizeForAdHocWorkloads = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
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
            ...baseSQLServerConfig2016sp2std,
        };
        if (object.maxDegreeOfParallelism !== undefined &&
            object.maxDegreeOfParallelism !== null) {
            message.maxDegreeOfParallelism = Number(object.maxDegreeOfParallelism);
        }
        else {
            message.maxDegreeOfParallelism = undefined;
        }
        if (object.costThresholdForParallelism !== undefined &&
            object.costThresholdForParallelism !== null) {
            message.costThresholdForParallelism = Number(object.costThresholdForParallelism);
        }
        else {
            message.costThresholdForParallelism = undefined;
        }
        if (object.auditLevel !== undefined && object.auditLevel !== null) {
            message.auditLevel = Number(object.auditLevel);
        }
        else {
            message.auditLevel = undefined;
        }
        if (object.fillFactorPercent !== undefined &&
            object.fillFactorPercent !== null) {
            message.fillFactorPercent = Number(object.fillFactorPercent);
        }
        else {
            message.fillFactorPercent = undefined;
        }
        if (object.optimizeForAdHocWorkloads !== undefined &&
            object.optimizeForAdHocWorkloads !== null) {
            message.optimizeForAdHocWorkloads = Boolean(object.optimizeForAdHocWorkloads);
        }
        else {
            message.optimizeForAdHocWorkloads = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseSQLServerConfig2016sp2std,
        };
        if (object.maxDegreeOfParallelism !== undefined &&
            object.maxDegreeOfParallelism !== null) {
            message.maxDegreeOfParallelism = object.maxDegreeOfParallelism;
        }
        else {
            message.maxDegreeOfParallelism = undefined;
        }
        if (object.costThresholdForParallelism !== undefined &&
            object.costThresholdForParallelism !== null) {
            message.costThresholdForParallelism =
                object.costThresholdForParallelism;
        }
        else {
            message.costThresholdForParallelism = undefined;
        }
        if (object.auditLevel !== undefined && object.auditLevel !== null) {
            message.auditLevel = object.auditLevel;
        }
        else {
            message.auditLevel = undefined;
        }
        if (object.fillFactorPercent !== undefined &&
            object.fillFactorPercent !== null) {
            message.fillFactorPercent = object.fillFactorPercent;
        }
        else {
            message.fillFactorPercent = undefined;
        }
        if (object.optimizeForAdHocWorkloads !== undefined &&
            object.optimizeForAdHocWorkloads !== null) {
            message.optimizeForAdHocWorkloads =
                object.optimizeForAdHocWorkloads;
        }
        else {
            message.optimizeForAdHocWorkloads = undefined;
        }
        return message;
    },
};
const baseSQLServerConfigSet2016sp2std = {};
exports.SQLServerConfigSet2016sp2std = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.SQLServerConfig2016sp2std.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.SQLServerConfig2016sp2std.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.SQLServerConfig2016sp2std.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSQLServerConfigSet2016sp2std,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.SQLServerConfig2016sp2std.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.SQLServerConfig2016sp2std.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.SQLServerConfig2016sp2std.decode(reader, reader.uint32());
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
            ...baseSQLServerConfigSet2016sp2std,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.SQLServerConfig2016sp2std.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.SQLServerConfig2016sp2std.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.SQLServerConfig2016sp2std.fromJSON(object.defaultConfig);
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
                ? exports.SQLServerConfig2016sp2std.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.SQLServerConfig2016sp2std.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.SQLServerConfig2016sp2std.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSQLServerConfigSet2016sp2std,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.SQLServerConfig2016sp2std.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.SQLServerConfig2016sp2std.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.SQLServerConfig2016sp2std.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
const baseSQLServerConfig2016sp2ent = {};
exports.SQLServerConfig2016sp2ent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxDegreeOfParallelism !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.maxDegreeOfParallelism }, writer.uint32(10).fork()).ldelim();
        }
        if (message.costThresholdForParallelism !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.costThresholdForParallelism }, writer.uint32(18).fork()).ldelim();
        }
        if (message.auditLevel !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.auditLevel }, writer.uint32(26).fork()).ldelim();
        }
        if (message.fillFactorPercent !== undefined) {
            wrappers_1.Int64Value.encode({ value: message.fillFactorPercent }, writer.uint32(34).fork()).ldelim();
        }
        if (message.optimizeForAdHocWorkloads !== undefined) {
            wrappers_1.BoolValue.encode({ value: message.optimizeForAdHocWorkloads }, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSQLServerConfig2016sp2ent,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxDegreeOfParallelism = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.costThresholdForParallelism = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.auditLevel = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.fillFactorPercent = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.optimizeForAdHocWorkloads = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
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
            ...baseSQLServerConfig2016sp2ent,
        };
        if (object.maxDegreeOfParallelism !== undefined &&
            object.maxDegreeOfParallelism !== null) {
            message.maxDegreeOfParallelism = Number(object.maxDegreeOfParallelism);
        }
        else {
            message.maxDegreeOfParallelism = undefined;
        }
        if (object.costThresholdForParallelism !== undefined &&
            object.costThresholdForParallelism !== null) {
            message.costThresholdForParallelism = Number(object.costThresholdForParallelism);
        }
        else {
            message.costThresholdForParallelism = undefined;
        }
        if (object.auditLevel !== undefined && object.auditLevel !== null) {
            message.auditLevel = Number(object.auditLevel);
        }
        else {
            message.auditLevel = undefined;
        }
        if (object.fillFactorPercent !== undefined &&
            object.fillFactorPercent !== null) {
            message.fillFactorPercent = Number(object.fillFactorPercent);
        }
        else {
            message.fillFactorPercent = undefined;
        }
        if (object.optimizeForAdHocWorkloads !== undefined &&
            object.optimizeForAdHocWorkloads !== null) {
            message.optimizeForAdHocWorkloads = Boolean(object.optimizeForAdHocWorkloads);
        }
        else {
            message.optimizeForAdHocWorkloads = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseSQLServerConfig2016sp2ent,
        };
        if (object.maxDegreeOfParallelism !== undefined &&
            object.maxDegreeOfParallelism !== null) {
            message.maxDegreeOfParallelism = object.maxDegreeOfParallelism;
        }
        else {
            message.maxDegreeOfParallelism = undefined;
        }
        if (object.costThresholdForParallelism !== undefined &&
            object.costThresholdForParallelism !== null) {
            message.costThresholdForParallelism =
                object.costThresholdForParallelism;
        }
        else {
            message.costThresholdForParallelism = undefined;
        }
        if (object.auditLevel !== undefined && object.auditLevel !== null) {
            message.auditLevel = object.auditLevel;
        }
        else {
            message.auditLevel = undefined;
        }
        if (object.fillFactorPercent !== undefined &&
            object.fillFactorPercent !== null) {
            message.fillFactorPercent = object.fillFactorPercent;
        }
        else {
            message.fillFactorPercent = undefined;
        }
        if (object.optimizeForAdHocWorkloads !== undefined &&
            object.optimizeForAdHocWorkloads !== null) {
            message.optimizeForAdHocWorkloads =
                object.optimizeForAdHocWorkloads;
        }
        else {
            message.optimizeForAdHocWorkloads = undefined;
        }
        return message;
    },
};
const baseSQLServerConfigSet2016sp2ent = {};
exports.SQLServerConfigSet2016sp2ent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.SQLServerConfig2016sp2ent.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.SQLServerConfig2016sp2ent.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.SQLServerConfig2016sp2ent.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSQLServerConfigSet2016sp2ent,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.SQLServerConfig2016sp2ent.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.SQLServerConfig2016sp2ent.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.SQLServerConfig2016sp2ent.decode(reader, reader.uint32());
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
            ...baseSQLServerConfigSet2016sp2ent,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.SQLServerConfig2016sp2ent.fromJSON(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.SQLServerConfig2016sp2ent.fromJSON(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.SQLServerConfig2016sp2ent.fromJSON(object.defaultConfig);
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
                ? exports.SQLServerConfig2016sp2ent.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.SQLServerConfig2016sp2ent.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.SQLServerConfig2016sp2ent.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSQLServerConfigSet2016sp2ent,
        };
        if (object.effectiveConfig !== undefined &&
            object.effectiveConfig !== null) {
            message.effectiveConfig = exports.SQLServerConfig2016sp2ent.fromPartial(object.effectiveConfig);
        }
        else {
            message.effectiveConfig = undefined;
        }
        if (object.userConfig !== undefined && object.userConfig !== null) {
            message.userConfig = exports.SQLServerConfig2016sp2ent.fromPartial(object.userConfig);
        }
        else {
            message.userConfig = undefined;
        }
        if (object.defaultConfig !== undefined &&
            object.defaultConfig !== null) {
            message.defaultConfig = exports.SQLServerConfig2016sp2ent.fromPartial(object.defaultConfig);
        }
        else {
            message.defaultConfig = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
