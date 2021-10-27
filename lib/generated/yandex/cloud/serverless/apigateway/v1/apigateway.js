"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachedDomain = exports.ApiGateway_LabelsEntry = exports.ApiGateway = exports.apiGateway_StatusToJSON = exports.apiGateway_StatusFromJSON = exports.ApiGateway_Status = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.serverless.apigateway.v1';
var ApiGateway_Status;
(function (ApiGateway_Status) {
    ApiGateway_Status[ApiGateway_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** CREATING - API gateway is being created. */
    ApiGateway_Status[ApiGateway_Status["CREATING"] = 1] = "CREATING";
    /** ACTIVE - API gateway is ready for use. */
    ApiGateway_Status[ApiGateway_Status["ACTIVE"] = 2] = "ACTIVE";
    /** DELETING - API gateway is being deleted. */
    ApiGateway_Status[ApiGateway_Status["DELETING"] = 3] = "DELETING";
    /** ERROR - API gateway failed. The only allowed action is delete. */
    ApiGateway_Status[ApiGateway_Status["ERROR"] = 4] = "ERROR";
    /** UPDATING - API gateway is being updated. */
    ApiGateway_Status[ApiGateway_Status["UPDATING"] = 5] = "UPDATING";
    ApiGateway_Status[ApiGateway_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ApiGateway_Status = exports.ApiGateway_Status || (exports.ApiGateway_Status = {}));
function apiGateway_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return ApiGateway_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return ApiGateway_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return ApiGateway_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return ApiGateway_Status.DELETING;
        case 4:
        case 'ERROR':
            return ApiGateway_Status.ERROR;
        case 5:
        case 'UPDATING':
            return ApiGateway_Status.UPDATING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ApiGateway_Status.UNRECOGNIZED;
    }
}
exports.apiGateway_StatusFromJSON = apiGateway_StatusFromJSON;
function apiGateway_StatusToJSON(object) {
    switch (object) {
        case ApiGateway_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case ApiGateway_Status.CREATING:
            return 'CREATING';
        case ApiGateway_Status.ACTIVE:
            return 'ACTIVE';
        case ApiGateway_Status.DELETING:
            return 'DELETING';
        case ApiGateway_Status.ERROR:
            return 'ERROR';
        case ApiGateway_Status.UPDATING:
            return 'UPDATING';
        default:
            return 'UNKNOWN';
    }
}
exports.apiGateway_StatusToJSON = apiGateway_StatusToJSON;
const baseApiGateway = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway',
    id: '',
    folderId: '',
    name: '',
    description: '',
    status: 0,
    domain: '',
    logGroupId: '',
};
exports.ApiGateway = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway',
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
            exports.ApiGateway_LabelsEntry.encode({
                $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(58).fork()).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.domain !== '') {
            writer.uint32(74).string(message.domain);
        }
        if (message.logGroupId !== '') {
            writer.uint32(82).string(message.logGroupId);
        }
        for (const v of message.attachedDomains) {
            exports.AttachedDomain.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApiGateway };
        message.labels = {};
        message.attachedDomains = [];
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
                case 7:
                    const entry7 = exports.ApiGateway_LabelsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.domain = reader.string();
                    break;
                case 10:
                    message.logGroupId = reader.string();
                    break;
                case 11:
                    message.attachedDomains.push(exports.AttachedDomain.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseApiGateway };
        message.labels = {};
        message.attachedDomains = [];
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
        if (object.status !== undefined && object.status !== null) {
            message.status = apiGateway_StatusFromJSON(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.domain !== undefined && object.domain !== null) {
            message.domain = String(object.domain);
        }
        else {
            message.domain = '';
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = String(object.logGroupId);
        }
        else {
            message.logGroupId = '';
        }
        if (object.attachedDomains !== undefined &&
            object.attachedDomains !== null) {
            for (const e of object.attachedDomains) {
                message.attachedDomains.push(exports.AttachedDomain.fromJSON(e));
            }
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
        message.status !== undefined &&
            (obj.status = apiGateway_StatusToJSON(message.status));
        message.domain !== undefined && (obj.domain = message.domain);
        message.logGroupId !== undefined &&
            (obj.logGroupId = message.logGroupId);
        if (message.attachedDomains) {
            obj.attachedDomains = message.attachedDomains.map((e) => e ? exports.AttachedDomain.toJSON(e) : undefined);
        }
        else {
            obj.attachedDomains = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseApiGateway };
        message.labels = {};
        message.attachedDomains = [];
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.domain !== undefined && object.domain !== null) {
            message.domain = object.domain;
        }
        else {
            message.domain = '';
        }
        if (object.logGroupId !== undefined && object.logGroupId !== null) {
            message.logGroupId = object.logGroupId;
        }
        else {
            message.logGroupId = '';
        }
        if (object.attachedDomains !== undefined &&
            object.attachedDomains !== null) {
            for (const e of object.attachedDomains) {
                message.attachedDomains.push(exports.AttachedDomain.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ApiGateway.$type, exports.ApiGateway);
const baseApiGateway_LabelsEntry = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry',
    key: '',
    value: '',
};
exports.ApiGateway_LabelsEntry = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry',
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
            ...baseApiGateway_LabelsEntry,
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
            ...baseApiGateway_LabelsEntry,
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
            ...baseApiGateway_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.ApiGateway_LabelsEntry.$type, exports.ApiGateway_LabelsEntry);
const baseAttachedDomain = {
    $type: 'yandex.cloud.serverless.apigateway.v1.AttachedDomain',
    domainId: '',
    certificateId: '',
    enabled: false,
    domain: '',
};
exports.AttachedDomain = {
    $type: 'yandex.cloud.serverless.apigateway.v1.AttachedDomain',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.domainId !== '') {
            writer.uint32(10).string(message.domainId);
        }
        if (message.certificateId !== '') {
            writer.uint32(18).string(message.certificateId);
        }
        if (message.enabled === true) {
            writer.uint32(24).bool(message.enabled);
        }
        if (message.domain !== '') {
            writer.uint32(42).string(message.domain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAttachedDomain };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.domainId = reader.string();
                    break;
                case 2:
                    message.certificateId = reader.string();
                    break;
                case 3:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAttachedDomain };
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = String(object.domainId);
        }
        else {
            message.domainId = '';
        }
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        }
        else {
            message.enabled = false;
        }
        if (object.domain !== undefined && object.domain !== null) {
            message.domain = String(object.domain);
        }
        else {
            message.domain = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.domainId !== undefined && (obj.domainId = message.domainId);
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.domain !== undefined && (obj.domain = message.domain);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAttachedDomain };
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = object.domainId;
        }
        else {
            message.domainId = '';
        }
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        else {
            message.enabled = false;
        }
        if (object.domain !== undefined && object.domain !== null) {
            message.domain = object.domain;
        }
        else {
            message.domain = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AttachedDomain.$type, exports.AttachedDomain);
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
