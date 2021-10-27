"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FederationServiceClient = exports.FederationServiceService = exports.ListFederationOperationsResponse = exports.ListFederationOperationsRequest = exports.ListFederatedUserAccountsResponse = exports.ListFederatedUserAccountsRequest = exports.AddFederatedUserAccountsResponse = exports.AddFederatedUserAccountsMetadata = exports.AddFederatedUserAccountsRequest = exports.DeleteFederationMetadata = exports.DeleteFederationRequest = exports.UpdateFederationMetadata = exports.UpdateFederationRequest_LabelsEntry = exports.UpdateFederationRequest = exports.CreateFederationMetadata = exports.CreateFederationRequest_LabelsEntry = exports.CreateFederationRequest = exports.ListFederationsResponse = exports.ListFederationsRequest = exports.GetFederationRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../../google/protobuf/duration");
const field_mask_1 = require("../../../../../google/protobuf/field_mask");
const typeRegistry_1 = require("../../../../../typeRegistry");
const operation_1 = require("../../../../../yandex/cloud/operation/operation");
const federation_1 = require("../../../../../yandex/cloud/organizationmanager/v1/saml/federation");
const user_account_1 = require("../../../../../yandex/cloud/organizationmanager/v1/user_account");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.organizationmanager.v1.saml';
const baseGetFederationRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.GetFederationRequest',
    federationId: '',
};
exports.GetFederationRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.GetFederationRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetFederationRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetFederationRequest };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetFederationRequest };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetFederationRequest.$type, exports.GetFederationRequest);
const baseListFederationsRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederationsRequest',
    organizationId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};
exports.ListFederationsRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(50).string(message.organizationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFederationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
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
            ...baseListFederationsRequest,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = String(object.organizationId);
        }
        else {
            message.organizationId = '';
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
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFederationsRequest,
        };
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = object.organizationId;
        }
        else {
            message.organizationId = '';
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
typeRegistry_1.messageTypeRegistry.set(exports.ListFederationsRequest.$type, exports.ListFederationsRequest);
const baseListFederationsResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederationsResponse',
    nextPageToken: '',
};
exports.ListFederationsResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederationsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.federations) {
            federation_1.Federation.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListFederationsResponse,
        };
        message.federations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federations.push(federation_1.Federation.decode(reader, reader.uint32()));
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
            ...baseListFederationsResponse,
        };
        message.federations = [];
        if (object.federations !== undefined && object.federations !== null) {
            for (const e of object.federations) {
                message.federations.push(federation_1.Federation.fromJSON(e));
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
        if (message.federations) {
            obj.federations = message.federations.map((e) => e ? federation_1.Federation.toJSON(e) : undefined);
        }
        else {
            obj.federations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFederationsResponse,
        };
        message.federations = [];
        if (object.federations !== undefined && object.federations !== null) {
            for (const e of object.federations) {
                message.federations.push(federation_1.Federation.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListFederationsResponse.$type, exports.ListFederationsResponse);
const baseCreateFederationRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest',
    organizationId: '',
    name: '',
    description: '',
    autoCreateAccountOnLogin: false,
    issuer: '',
    ssoBinding: 0,
    ssoUrl: '',
    caseInsensitiveNameIds: false,
};
exports.CreateFederationRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.cookieMaxAge !== undefined) {
            duration_1.Duration.encode(message.cookieMaxAge, writer.uint32(34).fork()).ldelim();
        }
        if (message.autoCreateAccountOnLogin === true) {
            writer.uint32(40).bool(message.autoCreateAccountOnLogin);
        }
        if (message.issuer !== '') {
            writer.uint32(50).string(message.issuer);
        }
        if (message.ssoBinding !== 0) {
            writer.uint32(56).int32(message.ssoBinding);
        }
        if (message.ssoUrl !== '') {
            writer.uint32(66).string(message.ssoUrl);
        }
        if (message.securitySettings !== undefined) {
            federation_1.FederationSecuritySettings.encode(message.securitySettings, writer.uint32(74).fork()).ldelim();
        }
        if (message.caseInsensitiveNameIds === true) {
            writer.uint32(80).bool(message.caseInsensitiveNameIds);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateFederationRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(90).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFederationRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.cookieMaxAge = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.autoCreateAccountOnLogin = reader.bool();
                    break;
                case 6:
                    message.issuer = reader.string();
                    break;
                case 7:
                    message.ssoBinding = reader.int32();
                    break;
                case 8:
                    message.ssoUrl = reader.string();
                    break;
                case 9:
                    message.securitySettings =
                        federation_1.FederationSecuritySettings.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.caseInsensitiveNameIds = reader.bool();
                    break;
                case 11:
                    const entry11 = exports.CreateFederationRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry11.value !== undefined) {
                        message.labels[entry11.key] = entry11.value;
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
        const message = {
            ...baseCreateFederationRequest,
        };
        message.labels = {};
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = String(object.organizationId);
        }
        else {
            message.organizationId = '';
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
        if (object.cookieMaxAge !== undefined && object.cookieMaxAge !== null) {
            message.cookieMaxAge = duration_1.Duration.fromJSON(object.cookieMaxAge);
        }
        else {
            message.cookieMaxAge = undefined;
        }
        if (object.autoCreateAccountOnLogin !== undefined &&
            object.autoCreateAccountOnLogin !== null) {
            message.autoCreateAccountOnLogin = Boolean(object.autoCreateAccountOnLogin);
        }
        else {
            message.autoCreateAccountOnLogin = false;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = '';
        }
        if (object.ssoBinding !== undefined && object.ssoBinding !== null) {
            message.ssoBinding = (0, federation_1.bindingTypeFromJSON)(object.ssoBinding);
        }
        else {
            message.ssoBinding = 0;
        }
        if (object.ssoUrl !== undefined && object.ssoUrl !== null) {
            message.ssoUrl = String(object.ssoUrl);
        }
        else {
            message.ssoUrl = '';
        }
        if (object.securitySettings !== undefined &&
            object.securitySettings !== null) {
            message.securitySettings = federation_1.FederationSecuritySettings.fromJSON(object.securitySettings);
        }
        else {
            message.securitySettings = undefined;
        }
        if (object.caseInsensitiveNameIds !== undefined &&
            object.caseInsensitiveNameIds !== null) {
            message.caseInsensitiveNameIds = Boolean(object.caseInsensitiveNameIds);
        }
        else {
            message.caseInsensitiveNameIds = false;
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.cookieMaxAge !== undefined &&
            (obj.cookieMaxAge = message.cookieMaxAge
                ? duration_1.Duration.toJSON(message.cookieMaxAge)
                : undefined);
        message.autoCreateAccountOnLogin !== undefined &&
            (obj.autoCreateAccountOnLogin = message.autoCreateAccountOnLogin);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.ssoBinding !== undefined &&
            (obj.ssoBinding = (0, federation_1.bindingTypeToJSON)(message.ssoBinding));
        message.ssoUrl !== undefined && (obj.ssoUrl = message.ssoUrl);
        message.securitySettings !== undefined &&
            (obj.securitySettings = message.securitySettings
                ? federation_1.FederationSecuritySettings.toJSON(message.securitySettings)
                : undefined);
        message.caseInsensitiveNameIds !== undefined &&
            (obj.caseInsensitiveNameIds = message.caseInsensitiveNameIds);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateFederationRequest,
        };
        message.labels = {};
        if (object.organizationId !== undefined &&
            object.organizationId !== null) {
            message.organizationId = object.organizationId;
        }
        else {
            message.organizationId = '';
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
        if (object.cookieMaxAge !== undefined && object.cookieMaxAge !== null) {
            message.cookieMaxAge = duration_1.Duration.fromPartial(object.cookieMaxAge);
        }
        else {
            message.cookieMaxAge = undefined;
        }
        if (object.autoCreateAccountOnLogin !== undefined &&
            object.autoCreateAccountOnLogin !== null) {
            message.autoCreateAccountOnLogin = object.autoCreateAccountOnLogin;
        }
        else {
            message.autoCreateAccountOnLogin = false;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = '';
        }
        if (object.ssoBinding !== undefined && object.ssoBinding !== null) {
            message.ssoBinding = object.ssoBinding;
        }
        else {
            message.ssoBinding = 0;
        }
        if (object.ssoUrl !== undefined && object.ssoUrl !== null) {
            message.ssoUrl = object.ssoUrl;
        }
        else {
            message.ssoUrl = '';
        }
        if (object.securitySettings !== undefined &&
            object.securitySettings !== null) {
            message.securitySettings = federation_1.FederationSecuritySettings.fromPartial(object.securitySettings);
        }
        else {
            message.securitySettings = undefined;
        }
        if (object.caseInsensitiveNameIds !== undefined &&
            object.caseInsensitiveNameIds !== null) {
            message.caseInsensitiveNameIds = object.caseInsensitiveNameIds;
        }
        else {
            message.caseInsensitiveNameIds = false;
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFederationRequest.$type, exports.CreateFederationRequest);
const baseCreateFederationRequest_LabelsEntry = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.CreateFederationRequest_LabelsEntry = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest.LabelsEntry',
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
            ...baseCreateFederationRequest_LabelsEntry,
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
            ...baseCreateFederationRequest_LabelsEntry,
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
            ...baseCreateFederationRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.CreateFederationRequest_LabelsEntry.$type, exports.CreateFederationRequest_LabelsEntry);
const baseCreateFederationMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.CreateFederationMetadata',
    federationId: '',
};
exports.CreateFederationMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.CreateFederationMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFederationMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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
            ...baseCreateFederationMetadata,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateFederationMetadata,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateFederationMetadata.$type, exports.CreateFederationMetadata);
const baseUpdateFederationRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest',
    federationId: '',
    name: '',
    description: '',
    autoCreateAccountOnLogin: false,
    issuer: '',
    ssoBinding: 0,
    ssoUrl: '',
    caseInsensitiveNameIds: false,
};
exports.UpdateFederationRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
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
        if (message.cookieMaxAge !== undefined) {
            duration_1.Duration.encode(message.cookieMaxAge, writer.uint32(42).fork()).ldelim();
        }
        if (message.autoCreateAccountOnLogin === true) {
            writer.uint32(48).bool(message.autoCreateAccountOnLogin);
        }
        if (message.issuer !== '') {
            writer.uint32(58).string(message.issuer);
        }
        if (message.ssoBinding !== 0) {
            writer.uint32(64).int32(message.ssoBinding);
        }
        if (message.ssoUrl !== '') {
            writer.uint32(74).string(message.ssoUrl);
        }
        if (message.securitySettings !== undefined) {
            federation_1.FederationSecuritySettings.encode(message.securitySettings, writer.uint32(82).fork()).ldelim();
        }
        if (message.caseInsensitiveNameIds === true) {
            writer.uint32(96).bool(message.caseInsensitiveNameIds);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateFederationRequest_LabelsEntry.encode({
                $type: 'yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest.LabelsEntry',
                key: key,
                value,
            }, writer.uint32(106).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateFederationRequest,
        };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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
                    message.cookieMaxAge = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.autoCreateAccountOnLogin = reader.bool();
                    break;
                case 7:
                    message.issuer = reader.string();
                    break;
                case 8:
                    message.ssoBinding = reader.int32();
                    break;
                case 9:
                    message.ssoUrl = reader.string();
                    break;
                case 10:
                    message.securitySettings =
                        federation_1.FederationSecuritySettings.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.caseInsensitiveNameIds = reader.bool();
                    break;
                case 13:
                    const entry13 = exports.UpdateFederationRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry13.value !== undefined) {
                        message.labels[entry13.key] = entry13.value;
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
        const message = {
            ...baseUpdateFederationRequest,
        };
        message.labels = {};
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
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
        if (object.cookieMaxAge !== undefined && object.cookieMaxAge !== null) {
            message.cookieMaxAge = duration_1.Duration.fromJSON(object.cookieMaxAge);
        }
        else {
            message.cookieMaxAge = undefined;
        }
        if (object.autoCreateAccountOnLogin !== undefined &&
            object.autoCreateAccountOnLogin !== null) {
            message.autoCreateAccountOnLogin = Boolean(object.autoCreateAccountOnLogin);
        }
        else {
            message.autoCreateAccountOnLogin = false;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = '';
        }
        if (object.ssoBinding !== undefined && object.ssoBinding !== null) {
            message.ssoBinding = (0, federation_1.bindingTypeFromJSON)(object.ssoBinding);
        }
        else {
            message.ssoBinding = 0;
        }
        if (object.ssoUrl !== undefined && object.ssoUrl !== null) {
            message.ssoUrl = String(object.ssoUrl);
        }
        else {
            message.ssoUrl = '';
        }
        if (object.securitySettings !== undefined &&
            object.securitySettings !== null) {
            message.securitySettings = federation_1.FederationSecuritySettings.fromJSON(object.securitySettings);
        }
        else {
            message.securitySettings = undefined;
        }
        if (object.caseInsensitiveNameIds !== undefined &&
            object.caseInsensitiveNameIds !== null) {
            message.caseInsensitiveNameIds = Boolean(object.caseInsensitiveNameIds);
        }
        else {
            message.caseInsensitiveNameIds = false;
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.cookieMaxAge !== undefined &&
            (obj.cookieMaxAge = message.cookieMaxAge
                ? duration_1.Duration.toJSON(message.cookieMaxAge)
                : undefined);
        message.autoCreateAccountOnLogin !== undefined &&
            (obj.autoCreateAccountOnLogin = message.autoCreateAccountOnLogin);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.ssoBinding !== undefined &&
            (obj.ssoBinding = (0, federation_1.bindingTypeToJSON)(message.ssoBinding));
        message.ssoUrl !== undefined && (obj.ssoUrl = message.ssoUrl);
        message.securitySettings !== undefined &&
            (obj.securitySettings = message.securitySettings
                ? federation_1.FederationSecuritySettings.toJSON(message.securitySettings)
                : undefined);
        message.caseInsensitiveNameIds !== undefined &&
            (obj.caseInsensitiveNameIds = message.caseInsensitiveNameIds);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateFederationRequest,
        };
        message.labels = {};
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
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
        if (object.cookieMaxAge !== undefined && object.cookieMaxAge !== null) {
            message.cookieMaxAge = duration_1.Duration.fromPartial(object.cookieMaxAge);
        }
        else {
            message.cookieMaxAge = undefined;
        }
        if (object.autoCreateAccountOnLogin !== undefined &&
            object.autoCreateAccountOnLogin !== null) {
            message.autoCreateAccountOnLogin = object.autoCreateAccountOnLogin;
        }
        else {
            message.autoCreateAccountOnLogin = false;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = '';
        }
        if (object.ssoBinding !== undefined && object.ssoBinding !== null) {
            message.ssoBinding = object.ssoBinding;
        }
        else {
            message.ssoBinding = 0;
        }
        if (object.ssoUrl !== undefined && object.ssoUrl !== null) {
            message.ssoUrl = object.ssoUrl;
        }
        else {
            message.ssoUrl = '';
        }
        if (object.securitySettings !== undefined &&
            object.securitySettings !== null) {
            message.securitySettings = federation_1.FederationSecuritySettings.fromPartial(object.securitySettings);
        }
        else {
            message.securitySettings = undefined;
        }
        if (object.caseInsensitiveNameIds !== undefined &&
            object.caseInsensitiveNameIds !== null) {
            message.caseInsensitiveNameIds = object.caseInsensitiveNameIds;
        }
        else {
            message.caseInsensitiveNameIds = false;
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateFederationRequest.$type, exports.UpdateFederationRequest);
const baseUpdateFederationRequest_LabelsEntry = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest.LabelsEntry',
    key: '',
    value: '',
};
exports.UpdateFederationRequest_LabelsEntry = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest.LabelsEntry',
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
            ...baseUpdateFederationRequest_LabelsEntry,
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
            ...baseUpdateFederationRequest_LabelsEntry,
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
            ...baseUpdateFederationRequest_LabelsEntry,
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
typeRegistry_1.messageTypeRegistry.set(exports.UpdateFederationRequest_LabelsEntry.$type, exports.UpdateFederationRequest_LabelsEntry);
const baseUpdateFederationMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.UpdateFederationMetadata',
    federationId: '',
};
exports.UpdateFederationMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.UpdateFederationMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateFederationMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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
            ...baseUpdateFederationMetadata,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateFederationMetadata,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateFederationMetadata.$type, exports.UpdateFederationMetadata);
const baseDeleteFederationRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.DeleteFederationRequest',
    federationId: '',
};
exports.DeleteFederationRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.DeleteFederationRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFederationRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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
            ...baseDeleteFederationRequest,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteFederationRequest,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteFederationRequest.$type, exports.DeleteFederationRequest);
const baseDeleteFederationMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.DeleteFederationMetadata',
    federationId: '',
};
exports.DeleteFederationMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.DeleteFederationMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFederationMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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
            ...baseDeleteFederationMetadata,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteFederationMetadata,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteFederationMetadata.$type, exports.DeleteFederationMetadata);
const baseAddFederatedUserAccountsRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsRequest',
    federationId: '',
    nameIds: '',
};
exports.AddFederatedUserAccountsRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        for (const v of message.nameIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddFederatedUserAccountsRequest,
        };
        message.nameIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.nameIds.push(reader.string());
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
            ...baseAddFederatedUserAccountsRequest,
        };
        message.nameIds = [];
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
        }
        if (object.nameIds !== undefined && object.nameIds !== null) {
            for (const e of object.nameIds) {
                message.nameIds.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        if (message.nameIds) {
            obj.nameIds = message.nameIds.map((e) => e);
        }
        else {
            obj.nameIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddFederatedUserAccountsRequest,
        };
        message.nameIds = [];
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
        }
        if (object.nameIds !== undefined && object.nameIds !== null) {
            for (const e of object.nameIds) {
                message.nameIds.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddFederatedUserAccountsRequest.$type, exports.AddFederatedUserAccountsRequest);
const baseAddFederatedUserAccountsMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsMetadata',
    federationId: '',
};
exports.AddFederatedUserAccountsMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddFederatedUserAccountsMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
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
            ...baseAddFederatedUserAccountsMetadata,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddFederatedUserAccountsMetadata,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddFederatedUserAccountsMetadata.$type, exports.AddFederatedUserAccountsMetadata);
const baseAddFederatedUserAccountsResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsResponse',
};
exports.AddFederatedUserAccountsResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.userAccounts) {
            user_account_1.UserAccount.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddFederatedUserAccountsResponse,
        };
        message.userAccounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAccounts.push(user_account_1.UserAccount.decode(reader, reader.uint32()));
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
            ...baseAddFederatedUserAccountsResponse,
        };
        message.userAccounts = [];
        if (object.userAccounts !== undefined && object.userAccounts !== null) {
            for (const e of object.userAccounts) {
                message.userAccounts.push(user_account_1.UserAccount.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.userAccounts) {
            obj.userAccounts = message.userAccounts.map((e) => e ? user_account_1.UserAccount.toJSON(e) : undefined);
        }
        else {
            obj.userAccounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddFederatedUserAccountsResponse,
        };
        message.userAccounts = [];
        if (object.userAccounts !== undefined && object.userAccounts !== null) {
            for (const e of object.userAccounts) {
                message.userAccounts.push(user_account_1.UserAccount.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AddFederatedUserAccountsResponse.$type, exports.AddFederatedUserAccountsResponse);
const baseListFederatedUserAccountsRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsRequest',
    federationId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListFederatedUserAccountsRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFederatedUserAccountsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
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
            ...baseListFederatedUserAccountsRequest,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFederatedUserAccountsRequest,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFederatedUserAccountsRequest.$type, exports.ListFederatedUserAccountsRequest);
const baseListFederatedUserAccountsResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsResponse',
    nextPageToken: '',
};
exports.ListFederatedUserAccountsResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.userAccounts) {
            user_account_1.UserAccount.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListFederatedUserAccountsResponse,
        };
        message.userAccounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAccounts.push(user_account_1.UserAccount.decode(reader, reader.uint32()));
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
            ...baseListFederatedUserAccountsResponse,
        };
        message.userAccounts = [];
        if (object.userAccounts !== undefined && object.userAccounts !== null) {
            for (const e of object.userAccounts) {
                message.userAccounts.push(user_account_1.UserAccount.fromJSON(e));
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
        if (message.userAccounts) {
            obj.userAccounts = message.userAccounts.map((e) => e ? user_account_1.UserAccount.toJSON(e) : undefined);
        }
        else {
            obj.userAccounts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFederatedUserAccountsResponse,
        };
        message.userAccounts = [];
        if (object.userAccounts !== undefined && object.userAccounts !== null) {
            for (const e of object.userAccounts) {
                message.userAccounts.push(user_account_1.UserAccount.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListFederatedUserAccountsResponse.$type, exports.ListFederatedUserAccountsResponse);
const baseListFederationOperationsRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsRequest',
    federationId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListFederationOperationsRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFederationOperationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
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
            ...baseListFederationOperationsRequest,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListFederationOperationsRequest,
        };
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
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
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListFederationOperationsRequest.$type, exports.ListFederationOperationsRequest);
const baseListFederationOperationsResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsResponse',
    nextPageToken: '',
};
exports.ListFederationOperationsResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsResponse',
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
            ...baseListFederationOperationsResponse,
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
            ...baseListFederationOperationsResponse,
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
            ...baseListFederationOperationsResponse,
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
typeRegistry_1.messageTypeRegistry.set(exports.ListFederationOperationsResponse.$type, exports.ListFederationOperationsResponse);
/** A set of methods for managing federations. */
exports.FederationServiceService = {
    /**
     * Returns the specified federation.
     *
     * To get the list of available federations, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetFederationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetFederationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(federation_1.Federation.encode(value).finish()),
        responseDeserialize: (value) => federation_1.Federation.decode(value),
    },
    /** Retrieves the list of federations in the specified organization. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFederationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFederationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFederationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFederationsResponse.decode(value),
    },
    /** Creates a federation in the specified organization. */
    create: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateFederationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateFederationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified federation. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateFederationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateFederationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified federation. */
    delete: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteFederationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteFederationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Adds users to the specified federation. */
    addUserAccounts: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/AddUserAccounts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddFederatedUserAccountsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddFederatedUserAccountsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists users for the specified federation. */
    listUserAccounts: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/ListUserAccounts',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFederatedUserAccountsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFederatedUserAccountsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFederatedUserAccountsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFederatedUserAccountsResponse.decode(value),
    },
    /** Lists operations for the specified federation. */
    listOperations: {
        path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListFederationOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListFederationOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListFederationOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListFederationOperationsResponse.decode(value),
    },
};
exports.FederationServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.FederationServiceService, 'yandex.cloud.organizationmanager.v1.saml.FederationService');
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
