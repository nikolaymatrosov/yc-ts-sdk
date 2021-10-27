"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalingPolicy = exports.Connectivity = exports.Package = exports.Resources = exports.Version_NamedServiceAccountsEntry = exports.Version_EnvironmentEntry = exports.Version = exports.Function_LabelsEntry = exports.Function = exports.version_StatusToJSON = exports.version_StatusFromJSON = exports.Version_Status = exports.function_StatusToJSON = exports.function_StatusFromJSON = exports.Function_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.serverless.functions.v1';
var Function_Status;
(function (Function_Status) {
    Function_Status[Function_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Function is being created. */
    Function_Status[Function_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Function is ready to be invoked. */
    Function_Status[Function_Status["ACTIVE"] = 2] = "ACTIVE";
    /** DELETING - Function is being deleted. */
    Function_Status[Function_Status["DELETING"] = 3] = "DELETING";
    /** ERROR - Function failed. */
    Function_Status[Function_Status["ERROR"] = 4] = "ERROR";
    Function_Status[Function_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Function_Status = exports.Function_Status || (exports.Function_Status = {}));
function function_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Function_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Function_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Function_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return Function_Status.DELETING;
        case 4:
        case 'ERROR':
            return Function_Status.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Function_Status.UNRECOGNIZED;
    }
}
exports.function_StatusFromJSON = function_StatusFromJSON;
function function_StatusToJSON(object) {
    switch (object) {
        case Function_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Function_Status.CREATING:
            return 'CREATING';
        case Function_Status.ACTIVE:
            return 'ACTIVE';
        case Function_Status.DELETING:
            return 'DELETING';
        case Function_Status.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}
exports.function_StatusToJSON = function_StatusToJSON;
var Version_Status;
(function (Version_Status) {
    Version_Status[Version_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - Version is being created. */
    Version_Status[Version_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - Version is ready to use. */
    Version_Status[Version_Status["ACTIVE"] = 2] = "ACTIVE";
    Version_Status[Version_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Version_Status = exports.Version_Status || (exports.Version_Status = {}));
function version_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Version_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Version_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return Version_Status.ACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Version_Status.UNRECOGNIZED;
    }
}
exports.version_StatusFromJSON = version_StatusFromJSON;
function version_StatusToJSON(object) {
    switch (object) {
        case Version_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Version_Status.CREATING:
            return 'CREATING';
        case Version_Status.ACTIVE:
            return 'ACTIVE';
        default:
            return 'UNKNOWN';
    }
}
exports.version_StatusToJSON = version_StatusToJSON;
const baseFunction = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    logGroupId: '',
    httpInvokeUrl: '',
    status: 0,
};
exports.Function = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Function_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.logGroupId !== '') {
            writer.uint32(58).string(message.logGroupId);
        }
        if (message.httpInvokeUrl !== '') {
            writer.uint32(66).string(message.httpInvokeUrl);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFunction };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = exports.Function_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.logGroupId = reader.string();
                    break;
                case 8:
                    message.httpInvokeUrl = reader.string();
                    break;
                case 9:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFunction };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        }
        else {
            message.logGroupId = '';
        }
        if (object.httpInvokeUrl !== undefined &&
            object.httpInvokeUrl !== null) {
            message.httpInvokeUrl = String(object.httpInvokeUrl);
        }
        else {
            message.httpInvokeUrl = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = function_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        message.httpInvokeUrl !== undefined &&
            (obj.httpInvokeUrl = message.httpInvokeUrl);
        message.status !== undefined &&
            (obj.status = function_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFunction };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        }
        else {
            message.logGroupId = '';
        }
        if (object.httpInvokeUrl !== undefined &&
            object.httpInvokeUrl !== null) {
            message.httpInvokeUrl = object.httpInvokeUrl;
        }
        else {
            message.httpInvokeUrl = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        return message;
    },
};
const baseFunction_LabelsEntry = { key: '', value: '' };
exports.Function_LabelsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFunction_LabelsEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFunction_LabelsEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFunction_LabelsEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseVersion = {
    id: '',
    functionId: '',
    description: '',
    runtime: '',
    entrypoint: '',
    serviceAccountId: '',
    imageSize: 0,
    status: 0,
    tags: '',
    logGroupId: '',
};
exports.Version = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.functionId !== '') {
            writer.uint32(18).string(message.functionId);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.runtime !== '') {
            writer.uint32(50).string(message.runtime);
        }
        if (message.entrypoint !== '') {
            writer.uint32(58).string(message.entrypoint);
        }
        if (message.resources !== undefined) {
            exports.Resources.encode(message.resources, writer.uint32(66).fork()).ldelim();
        }
        if (message.executionTimeout !== undefined) {
            duration_1.Duration.encode(message.executionTimeout, writer.uint32(74).fork()).ldelim();
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(82).string(message.serviceAccountId);
        }
        if (message.imageSize !== 0) {
            writer.uint32(96).int64(message.imageSize);
        }
        if (message.status !== 0) {
            writer.uint32(104).int32(message.status);
        }
        for (const v of message.tags) {
            writer.uint32(114).string(v);
        }
        if (message.logGroupId !== '') {
            writer.uint32(122).string(message.logGroupId);
        }
        Object.entries(message.environment).forEach(([key, value]) => {
            exports.Version_EnvironmentEntry.encode({ key: key, value }, writer.uint32(130).fork()).ldelim();
        });
        if (message.connectivity !== undefined) {
            exports.Connectivity.encode(message.connectivity, writer.uint32(138).fork()).ldelim();
        }
        Object.entries(message.namedServiceAccounts).forEach(([key, value]) => {
            exports.Version_NamedServiceAccountsEntry.encode({ key: key, value }, writer.uint32(146).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVersion };
        message.tags = [];
        message.environment = {};
        message.namedServiceAccounts = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.functionId = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.runtime = reader.string();
                    break;
                case 7:
                    message.entrypoint = reader.string();
                    break;
                case 8:
                    message.resources = exports.Resources.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.executionTimeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.serviceAccountId = reader.string();
                    break;
                case 12:
                    message.imageSize = longToNumber(reader.int64());
                    break;
                case 13:
                    message.status = reader.int32();
                    break;
                case 14:
                    message.tags.push(reader.string());
                    break;
                case 15:
                    message.logGroupId = reader.string();
                    break;
                case 16:
                    const entry16 = exports.Version_EnvironmentEntry.decode(reader, reader.uint32());
                    if (entry16.value !== undefined) {
                        message.environment[entry16.key] = entry16.value;
                    }
                    break;
                case 17:
                    message.connectivity = exports.Connectivity.decode(reader, reader.uint32());
                    break;
                case 18:
                    const entry18 = exports.Version_NamedServiceAccountsEntry.decode(reader, reader.uint32());
                    if (entry18.value !== undefined) {
                        message.namedServiceAccounts[entry18.key] =
                            entry18.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVersion };
        message.tags = [];
        message.environment = {};
        message.namedServiceAccounts = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.runtime !== undefined && object.runtime !== null) {
            message.runtime = String(object.runtime);
        }
        else {
            message.runtime = '';
        }
        if (object.entrypoint !== undefined && object.entrypoint !== null) {
            message.entrypoint = String(object.entrypoint);
        }
        else {
            message.entrypoint = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromJSON(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.executionTimeout !== undefined &&
            object.executionTimeout !== null) {
            message.executionTimeout = duration_1.Duration.fromJSON(object.executionTimeout);
        }
        else {
            message.executionTimeout = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.imageSize !== undefined && object.imageSize !== null) {
            message.imageSize = Number(object.imageSize);
        }
        else {
            message.imageSize = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = version_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.tags !== undefined && object.tags !== null) {
            for (const e of object.tags) {
                message.tags.push(String(e));
            }
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        }
        else {
            message.logGroupId = '';
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                message.environment[key] = String(value);
            });
        }
        if (object.connectivity !== undefined && object.connectivity !== null) {
            message.connectivity = exports.Connectivity.fromJSON(object.connectivity);
        }
        else {
            message.connectivity = undefined;
        }
        if (object.namedServiceAccounts !== undefined &&
            object.namedServiceAccounts !== null) {
            Object.entries(object.namedServiceAccounts).forEach(([key, value]) => {
                message.namedServiceAccounts[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.entrypoint !== undefined &&
            (obj.entrypoint = message.entrypoint);
        message.resources !== undefined &&
            (obj.resources = message.resources
                ? exports.Resources.toJSON(message.resources)
                : undefined);
        message.executionTimeout !== undefined &&
            (obj.executionTimeout = message.executionTimeout
                ? duration_1.Duration.toJSON(message.executionTimeout)
                : undefined);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.imageSize !== undefined && (obj.imageSize = message.imageSize);
        message.status !== undefined &&
            (obj.status = version_StatusToJSON(message.status));
        if (message.tags) {
            obj.tags = message.tags.map((e) => e);
        }
        else {
            obj.tags = [];
        }
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        obj.environment = {};
        if (message.environment) {
            Object.entries(message.environment).forEach(([k, v]) => {
                obj.environment[k] = v;
            });
        }
        message.connectivity !== undefined &&
            (obj.connectivity = message.connectivity
                ? exports.Connectivity.toJSON(message.connectivity)
                : undefined);
        obj.namedServiceAccounts = {};
        if (message.namedServiceAccounts) {
            Object.entries(message.namedServiceAccounts).forEach(([k, v]) => {
                obj.namedServiceAccounts[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVersion };
        message.tags = [];
        message.environment = {};
        message.namedServiceAccounts = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.runtime !== undefined && object.runtime !== null) {
            message.runtime = object.runtime;
        }
        else {
            message.runtime = '';
        }
        if (object.entrypoint !== undefined && object.entrypoint !== null) {
            message.entrypoint = object.entrypoint;
        }
        else {
            message.entrypoint = '';
        }
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = exports.Resources.fromPartial(object.resources);
        }
        else {
            message.resources = undefined;
        }
        if (object.executionTimeout !== undefined &&
            object.executionTimeout !== null) {
            message.executionTimeout = duration_1.Duration.fromPartial(object.executionTimeout);
        }
        else {
            message.executionTimeout = undefined;
        }
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        if (object.imageSize !== undefined && object.imageSize !== null) {
            message.imageSize = object.imageSize;
        }
        else {
            message.imageSize = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.tags !== undefined && object.tags !== null) {
            for (const e of object.tags) {
                message.tags.push(e);
            }
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        }
        else {
            message.logGroupId = '';
        }
        if (object.environment !== undefined && object.environment !== null) {
            Object.entries(object.environment).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.environment[key] = String(value);
                }
            });
        }
        if (object.connectivity !== undefined && object.connectivity !== null) {
            message.connectivity = exports.Connectivity.fromPartial(object.connectivity);
        }
        else {
            message.connectivity = undefined;
        }
        if (object.namedServiceAccounts !== undefined &&
            object.namedServiceAccounts !== null) {
            Object.entries(object.namedServiceAccounts).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.namedServiceAccounts[key] = String(value);
                }
            });
        }
        return message;
    },
};
const baseVersion_EnvironmentEntry = { key: '', value: '' };
exports.Version_EnvironmentEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVersion_EnvironmentEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            ...baseVersion_EnvironmentEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseVersion_EnvironmentEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseVersion_NamedServiceAccountsEntry = { key: '', value: '' };
exports.Version_NamedServiceAccountsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseVersion_NamedServiceAccountsEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            ...baseVersion_NamedServiceAccountsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseVersion_NamedServiceAccountsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        return message;
    },
};
const baseResources = { memory: 0 };
exports.Resources = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.memory !== 0) {
            writer.uint32(8).int64(message.memory);
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
                    message.memory = longToNumber(reader.int64());
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
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = Number(object.memory);
        }
        else {
            message.memory = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.memory !== undefined && (obj.memory = message.memory);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResources };
        if (object.memory !== undefined && object.memory !== null) {
            message.memory = object.memory;
        }
        else {
            message.memory = 0;
        }
        return message;
    },
};
const basePackage = { bucketName: '', objectName: '', sha256: '' };
exports.Package = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bucketName !== '') {
            writer.uint32(10).string(message.bucketName);
        }
        if (message.objectName !== '') {
            writer.uint32(18).string(message.objectName);
        }
        if (message.sha256 !== '') {
            writer.uint32(26).string(message.sha256);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePackage };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bucketName = reader.string();
                    break;
                case 2:
                    message.objectName = reader.string();
                    break;
                case 3:
                    message.sha256 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePackage };
        if (object.bucketName !== undefined && object.bucketName !== null) {
            message.bucketName = String(object.bucketName);
        }
        else {
            message.bucketName = '';
        }
        if (object.objectName !== undefined && object.objectName !== null) {
            message.objectName = String(object.objectName);
        }
        else {
            message.objectName = '';
        }
        if (object.sha256 !== undefined && object.sha256 !== null) {
            message.sha256 = String(object.sha256);
        }
        else {
            message.sha256 = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bucketName !== undefined &&
            (obj.bucketName = message.bucketName);
        message.objectName !== undefined &&
            (obj.objectName = message.objectName);
        message.sha256 !== undefined && (obj.sha256 = message.sha256);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePackage };
        if (object.bucketName !== undefined && object.bucketName !== null) {
            message.bucketName = object.bucketName;
        }
        else {
            message.bucketName = '';
        }
        if (object.objectName !== undefined && object.objectName !== null) {
            message.objectName = object.objectName;
        }
        else {
            message.objectName = '';
        }
        if (object.sha256 !== undefined && object.sha256 !== null) {
            message.sha256 = object.sha256;
        }
        else {
            message.sha256 = '';
        }
        return message;
    },
};
const baseConnectivity = { networkId: '', subnetId: '' };
exports.Connectivity = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        for (const v of message.subnetId) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseConnectivity };
        message.subnetId = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                case 2:
                    message.subnetId.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseConnectivity };
        message.subnetId = [];
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        }
        else {
            message.networkId = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            for (const e of object.subnetId) {
                message.subnetId.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        if (message.subnetId) {
            obj.subnetId = message.subnetId.map((e) => e);
        }
        else {
            obj.subnetId = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseConnectivity };
        message.subnetId = [];
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        }
        else {
            message.networkId = '';
        }
        if (object.subnetId !== undefined && object.subnetId !== null) {
            for (const e of object.subnetId) {
                message.subnetId.push(e);
            }
        }
        return message;
    },
};
const baseScalingPolicy = {
    functionId: '',
    tag: '',
    provisionedInstancesCount: 0,
    zoneInstancesLimit: 0,
    zoneRequestsLimit: 0,
};
exports.ScalingPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.functionId !== '') {
            writer.uint32(10).string(message.functionId);
        }
        if (message.tag !== '') {
            writer.uint32(18).string(message.tag);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.modifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(34).fork()).ldelim();
        }
        if (message.provisionedInstancesCount !== 0) {
            writer.uint32(48).int64(message.provisionedInstancesCount);
        }
        if (message.zoneInstancesLimit !== 0) {
            writer.uint32(56).int64(message.zoneInstancesLimit);
        }
        if (message.zoneRequestsLimit !== 0) {
            writer.uint32(64).int64(message.zoneRequestsLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScalingPolicy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.functionId = reader.string();
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.modifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.provisionedInstancesCount = longToNumber(reader.int64());
                    break;
                case 7:
                    message.zoneInstancesLimit = longToNumber(reader.int64());
                    break;
                case 8:
                    message.zoneRequestsLimit = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScalingPolicy };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = String(object.functionId);
        }
        else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = String(object.tag);
        }
        else {
            message.tag = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.modifiedAt !== undefined && object.modifiedAt !== null) {
            message.modifiedAt = fromJsonTimestamp(object.modifiedAt);
        }
        else {
            message.modifiedAt = undefined;
        }
        if (object.provisionedInstancesCount !== undefined &&
            object.provisionedInstancesCount !== null) {
            message.provisionedInstancesCount = Number(object.provisionedInstancesCount);
        }
        else {
            message.provisionedInstancesCount = 0;
        }
        if (object.zoneInstancesLimit !== undefined &&
            object.zoneInstancesLimit !== null) {
            message.zoneInstancesLimit = Number(object.zoneInstancesLimit);
        }
        else {
            message.zoneInstancesLimit = 0;
        }
        if (object.zoneRequestsLimit !== undefined &&
            object.zoneRequestsLimit !== null) {
            message.zoneRequestsLimit = Number(object.zoneRequestsLimit);
        }
        else {
            message.zoneRequestsLimit = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.functionId !== undefined &&
            (obj.functionId = message.functionId);
        message.tag !== undefined && (obj.tag = message.tag);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.modifiedAt !== undefined &&
            (obj.modifiedAt = message.modifiedAt.toISOString());
        message.provisionedInstancesCount !== undefined &&
            (obj.provisionedInstancesCount = message.provisionedInstancesCount);
        message.zoneInstancesLimit !== undefined &&
            (obj.zoneInstancesLimit = message.zoneInstancesLimit);
        message.zoneRequestsLimit !== undefined &&
            (obj.zoneRequestsLimit = message.zoneRequestsLimit);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScalingPolicy };
        if (object.functionId !== undefined && object.functionId !== null) {
            message.functionId = object.functionId;
        }
        else {
            message.functionId = '';
        }
        if (object.tag !== undefined && object.tag !== null) {
            message.tag = object.tag;
        }
        else {
            message.tag = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.modifiedAt !== undefined && object.modifiedAt !== null) {
            message.modifiedAt = object.modifiedAt;
        }
        else {
            message.modifiedAt = undefined;
        }
        if (object.provisionedInstancesCount !== undefined &&
            object.provisionedInstancesCount !== null) {
            message.provisionedInstancesCount =
                object.provisionedInstancesCount;
        }
        else {
            message.provisionedInstancesCount = 0;
        }
        if (object.zoneInstancesLimit !== undefined &&
            object.zoneInstancesLimit !== null) {
            message.zoneInstancesLimit = object.zoneInstancesLimit;
        }
        else {
            message.zoneInstancesLimit = 0;
        }
        if (object.zoneRequestsLimit !== undefined &&
            object.zoneRequestsLimit !== null) {
            message.zoneRequestsLimit = object.zoneRequestsLimit;
        }
        else {
            message.zoneRequestsLimit = 0;
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
