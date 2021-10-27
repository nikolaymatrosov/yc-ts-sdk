"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayServiceClient = exports.ApiGatewayServiceService = exports.GetOpenapiSpecResponse = exports.GetOpenapiSpecRequest = exports.ListOperationsResponse = exports.ListOperationsRequest = exports.RemoveDomainMetadata = exports.AddDomainMetadata = exports.DeleteApiGatewayMetadata = exports.UpdateApiGatewayMetadata = exports.CreateApiGatewayMetadata = exports.RemoveDomainRequest = exports.AddDomainRequest = exports.DeleteApiGatewayRequest = exports.UpdateApiGatewayRequest_LabelsEntry = exports.UpdateApiGatewayRequest = exports.CreateApiGatewayRequest_LabelsEntry = exports.CreateApiGatewayRequest = exports.ListApiGatewayResponse = exports.ListApiGatewayRequest = exports.GetApiGatewayRequest = exports.getOpenapiSpecRequest_FormatToJSON = exports.getOpenapiSpecRequest_FormatFromJSON = exports.GetOpenapiSpecRequest_Format = exports.protobufPackage = void 0;
/* eslint-disable */
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../../typeRegistry");
const access_1 = require("../../../../../yandex/cloud/access/access");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const apigateway_1 = require("../../../../../yandex/cloud/serverless/apigateway/v1/apigateway");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.serverless.apigateway.v1';
var GetOpenapiSpecRequest_Format;
(function (GetOpenapiSpecRequest_Format) {
    GetOpenapiSpecRequest_Format[GetOpenapiSpecRequest_Format["FORMAT_UNSPECIFIED"] = 0] = "FORMAT_UNSPECIFIED";
    GetOpenapiSpecRequest_Format[GetOpenapiSpecRequest_Format["JSON"] = 1] = "JSON";
    GetOpenapiSpecRequest_Format[GetOpenapiSpecRequest_Format["YAML"] = 2] = "YAML";
    GetOpenapiSpecRequest_Format[GetOpenapiSpecRequest_Format["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GetOpenapiSpecRequest_Format = exports.GetOpenapiSpecRequest_Format || (exports.GetOpenapiSpecRequest_Format = {}));
function getOpenapiSpecRequest_FormatFromJSON(object) {
    switch (object) {
        case 0:
        case 'FORMAT_UNSPECIFIED':
            return GetOpenapiSpecRequest_Format.FORMAT_UNSPECIFIED;
        case 1:
        case 'JSON':
            return GetOpenapiSpecRequest_Format.JSON;
        case 2:
        case 'YAML':
            return GetOpenapiSpecRequest_Format.YAML;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GetOpenapiSpecRequest_Format.UNRECOGNIZED;
    }
}
exports.getOpenapiSpecRequest_FormatFromJSON = getOpenapiSpecRequest_FormatFromJSON;
function getOpenapiSpecRequest_FormatToJSON(object) {
    switch (object) {
        case GetOpenapiSpecRequest_Format.FORMAT_UNSPECIFIED:
            return 'FORMAT_UNSPECIFIED';
        case GetOpenapiSpecRequest_Format.JSON:
            return 'JSON';
        case GetOpenapiSpecRequest_Format.YAML:
            return 'YAML';
        default:
            return 'UNKNOWN';
    }
}
exports.getOpenapiSpecRequest_FormatToJSON = getOpenapiSpecRequest_FormatToJSON;
const baseGetApiGatewayRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest',
    apiGatewayId: '',
};
exports.GetApiGatewayRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetApiGatewayRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetApiGatewayRequest };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetApiGatewayRequest };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetApiGatewayRequest.$type, exports.GetApiGatewayRequest);
const baseListApiGatewayRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListApiGatewayRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListApiGatewayRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
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
            ...baseListApiGatewayRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        }
        else {
            message.filter = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListApiGatewayRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListApiGatewayRequest.$type, exports.ListApiGatewayRequest);
const baseListApiGatewayResponse = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse',
    nextPageToken: '',
};
exports.ListApiGatewayResponse = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.apiGateways) {
            apigateway_1.ApiGateway.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListApiGatewayResponse,
        };
        message.apiGateways = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGateways.push(apigateway_1.ApiGateway.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
            ...baseListApiGatewayResponse,
        };
        message.apiGateways = [];
        if (object.apiGateways !== undefined && object.apiGateways !== null) {
            for (const e of object.apiGateways) {
                message.apiGateways.push(apigateway_1.ApiGateway.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.apiGateways) {
            obj.apiGateways = message.apiGateways.map((e) => e ? apigateway_1.ApiGateway.toJSON(e) : undefined);
        }
        else {
            obj.apiGateways = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListApiGatewayResponse,
        };
        message.apiGateways = [];
        if (object.apiGateways !== undefined && object.apiGateways !== null) {
            for (const e of object.apiGateways) {
                message.apiGateways.push(apigateway_1.ApiGateway.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListApiGatewayResponse.$type, exports.ListApiGatewayResponse);
const baseCreateApiGatewayRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest',
    folderId: '',
    name: '',
    description: '',
};
exports.CreateApiGatewayRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateApiGatewayRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.openapiSpec !== undefined) {
            writer.uint32(42).string(message.openapiSpec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateApiGatewayRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateApiGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.openapiSpec = reader.string();
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
            ...baseCreateApiGatewayRequest,
        };
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
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
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = String(object.openapiSpec);
        }
        else {
            message.openapiSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.openapiSpec !== undefined &&
            (obj.openapiSpec = message.openapiSpec);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateApiGatewayRequest,
        };
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
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
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = object.openapiSpec;
        }
        else {
            message.openapiSpec = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateApiGatewayRequest.$type, exports.CreateApiGatewayRequest);
const baseCreateApiGatewayRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateApiGatewayRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry',
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
            ...baseCreateApiGatewayRequest_LabelsEntry,
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
            ...baseCreateApiGatewayRequest_LabelsEntry,
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
            ...baseCreateApiGatewayRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateApiGatewayRequest_LabelsEntry.$type, exports.CreateApiGatewayRequest_LabelsEntry);
const baseUpdateApiGatewayRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest',
    apiGatewayId: '',
    name: '',
    description: '',
};
exports.UpdateApiGatewayRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateApiGatewayRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.openapiSpec !== undefined) {
            writer.uint32(50).string(message.openapiSpec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateApiGatewayRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateApiGatewayRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.openapiSpec = reader.string();
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
            ...baseUpdateApiGatewayRequest,
        };
        message.labels = {};
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromJSON(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = String(object.openapiSpec);
        }
        else {
            message.openapiSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.openapiSpec !== undefined &&
            (obj.openapiSpec = message.openapiSpec);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateApiGatewayRequest,
        };
        message.labels = {};
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = field_mask_1.FieldMask.fromPartial(object.updateMask);
        }
        else {
            message.updateMask = undefined;
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
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = object.openapiSpec;
        }
        else {
            message.openapiSpec = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateApiGatewayRequest.$type, exports.UpdateApiGatewayRequest);
const baseUpdateApiGatewayRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateApiGatewayRequest_LabelsEntry = {
    $type: 'yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry',
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
            ...baseUpdateApiGatewayRequest_LabelsEntry,
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
            ...baseUpdateApiGatewayRequest_LabelsEntry,
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
            ...baseUpdateApiGatewayRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateApiGatewayRequest_LabelsEntry.$type, exports.UpdateApiGatewayRequest_LabelsEntry);
const baseDeleteApiGatewayRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest',
    apiGatewayId: '',
};
exports.DeleteApiGatewayRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteApiGatewayRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
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
            ...baseDeleteApiGatewayRequest,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteApiGatewayRequest,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteApiGatewayRequest.$type, exports.DeleteApiGatewayRequest);
const baseAddDomainRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.AddDomainRequest',
    apiGatewayId: '',
    domainId: '',
};
exports.AddDomainRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.AddDomainRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainId !== '') {
            writer.uint32(18).string(message.domainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddDomainRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.domainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddDomainRequest };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = String(object.domainId);
        }
        else {
            message.domainId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainId !== undefined && (obj.domainId = message.domainId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddDomainRequest };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = object.domainId;
        }
        else {
            message.domainId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddDomainRequest.$type, exports.AddDomainRequest);
const baseRemoveDomainRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest',
    apiGatewayId: '',
    domainId: '',
};
exports.RemoveDomainRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainId !== '') {
            writer.uint32(18).string(message.domainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveDomainRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.domainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRemoveDomainRequest };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = String(object.domainId);
        }
        else {
            message.domainId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainId !== undefined && (obj.domainId = message.domainId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRemoveDomainRequest };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = object.domainId;
        }
        else {
            message.domainId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveDomainRequest.$type, exports.RemoveDomainRequest);
const baseCreateApiGatewayMetadata = {
    $type: 'yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata',
    apiGatewayId: '',
};
exports.CreateApiGatewayMetadata = {
    $type: 'yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateApiGatewayMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
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
            ...baseCreateApiGatewayMetadata,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateApiGatewayMetadata,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateApiGatewayMetadata.$type, exports.CreateApiGatewayMetadata);
const baseUpdateApiGatewayMetadata = {
    $type: 'yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata',
    apiGatewayId: '',
};
exports.UpdateApiGatewayMetadata = {
    $type: 'yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateApiGatewayMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
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
            ...baseUpdateApiGatewayMetadata,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateApiGatewayMetadata,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateApiGatewayMetadata.$type, exports.UpdateApiGatewayMetadata);
const baseDeleteApiGatewayMetadata = {
    $type: 'yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata',
    apiGatewayId: '',
};
exports.DeleteApiGatewayMetadata = {
    $type: 'yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteApiGatewayMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
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
            ...baseDeleteApiGatewayMetadata,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteApiGatewayMetadata,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteApiGatewayMetadata.$type, exports.DeleteApiGatewayMetadata);
const baseAddDomainMetadata = {
    $type: 'yandex.cloud.serverless.apigateway.v1.AddDomainMetadata',
    apiGatewayId: '',
    domainId: '',
};
exports.AddDomainMetadata = {
    $type: 'yandex.cloud.serverless.apigateway.v1.AddDomainMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainId !== '') {
            writer.uint32(18).string(message.domainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddDomainMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.domainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAddDomainMetadata };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = String(object.domainId);
        }
        else {
            message.domainId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainId !== undefined && (obj.domainId = message.domainId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAddDomainMetadata };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = object.domainId;
        }
        else {
            message.domainId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddDomainMetadata.$type, exports.AddDomainMetadata);
const baseRemoveDomainMetadata = {
    $type: 'yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata',
    apiGatewayId: '',
    domainId: '',
};
exports.RemoveDomainMetadata = {
    $type: 'yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainId !== '') {
            writer.uint32(18).string(message.domainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveDomainMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.domainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRemoveDomainMetadata };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = String(object.domainId);
        }
        else {
            message.domainId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainId !== undefined && (obj.domainId = message.domainId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRemoveDomainMetadata };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = object.domainId;
        }
        else {
            message.domainId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RemoveDomainMetadata.$type, exports.RemoveDomainMetadata);
const baseListOperationsRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ListOperationsRequest',
    apiGatewayId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListOperationsRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ListOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
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
            ...baseListOperationsRequest,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        }
        else {
            message.filter = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListOperationsRequest,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOperationsRequest.$type, exports.ListOperationsRequest);
const baseListOperationsResponse = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ListOperationsResponse',
    nextPageToken: '',
};
exports.ListOperationsResponse = {
    $type: 'yandex.cloud.serverless.apigateway.v1.ListOperationsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOperationsResponse,
        };
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
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
            ...baseListOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListOperationsResponse,
        };
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(operation_1.Operation.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListOperationsResponse.$type, exports.ListOperationsResponse);
const baseGetOpenapiSpecRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest',
    apiGatewayId: '',
    format: 0,
};
exports.GetOpenapiSpecRequest = {
    $type: 'yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.format !== 0) {
            writer.uint32(16).int32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetOpenapiSpecRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.format = reader.int32();
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
            ...baseGetOpenapiSpecRequest,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = getOpenapiSpecRequest_FormatFromJSON(object.format);
        }
        else {
            message.format = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.format !== undefined &&
            (obj.format = getOpenapiSpecRequest_FormatToJSON(message.format));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetOpenapiSpecRequest,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = 0;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetOpenapiSpecRequest.$type, exports.GetOpenapiSpecRequest);
const baseGetOpenapiSpecResponse = {
    $type: 'yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse',
    apiGatewayId: '',
    openapiSpec: '',
};
exports.GetOpenapiSpecResponse = {
    $type: 'yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.openapiSpec !== '') {
            writer.uint32(18).string(message.openapiSpec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetOpenapiSpecResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.openapiSpec = reader.string();
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
            ...baseGetOpenapiSpecResponse,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = String(object.openapiSpec);
        }
        else {
            message.openapiSpec = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.openapiSpec !== undefined &&
            (obj.openapiSpec = message.openapiSpec);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetOpenapiSpecResponse,
        };
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        }
        else {
            message.apiGatewayId = '';
        }
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = object.openapiSpec;
        }
        else {
            message.openapiSpec = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetOpenapiSpecResponse.$type, exports.GetOpenapiSpecResponse);
/** A set of methods for managing API gateways. */
exports.ApiGatewayServiceService = {
    /**
     * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
     * To get associated openapi specification, make a [GetOpenapiSpec] request.
     *
     * To get the list of all available API gateways, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetApiGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(apigateway_1.ApiGateway.encode(value).finish()),
        responseDeserialize: (value) => apigateway_1.ApiGateway.decode(value),
    },
    /** Retrieves the list of API gateways in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListApiGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListApiGatewayResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListApiGatewayResponse.decode(value),
    },
    /** Creates an API gateway in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateApiGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified API gateway. */
    update: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateApiGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified API gateway. */
    delete: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteApiGatewayRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Attaches domain to the specified API gateway. */
    addDomain: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/AddDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddDomainRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddDomainRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Detaches domain from the specified API gateway. */
    removeDomain: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/RemoveDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RemoveDomainRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RemoveDomainRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Returns the OpenAPI specification of specified API gateway. */
    getOpenapiSpec: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/GetOpenapiSpec',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetOpenapiSpecRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetOpenapiSpecRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetOpenapiSpecResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetOpenapiSpecResponse.decode(value),
    },
    /** Lists operations for the specified API gateway. */
    listOperations: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified API gateway. */
    listAccessBindings: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified API gateway. */
    setAccessBindings: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified API gateway. */
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.ApiGatewayServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ApiGatewayServiceService, 'yandex.cloud.serverless.apigateway.v1.ApiGatewayService');
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
