"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FederationSecuritySettings = exports.Federation_LabelsEntry = exports.Federation = exports.bindingTypeToJSON = exports.bindingTypeFromJSON = exports.BindingType = exports.protobufPackage = void 0;
/* eslint-disable */
const duration_1 = require("../../../../../google/protobuf/duration");
const timestamp_1 = require("../../../../../google/protobuf/timestamp");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.organizationmanager.v1.saml';
var BindingType;
(function (BindingType) {
    BindingType[BindingType["BINDING_TYPE_UNSPECIFIED"] = 0] = "BINDING_TYPE_UNSPECIFIED";
    /** POST - HTTP POST binding. */
    BindingType[BindingType["POST"] = 1] = "POST";
    /** REDIRECT - HTTP redirect binding. */
    BindingType[BindingType["REDIRECT"] = 2] = "REDIRECT";
    /** ARTIFACT - HTTP artifact binding. */
    BindingType[BindingType["ARTIFACT"] = 3] = "ARTIFACT";
    BindingType[BindingType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BindingType = exports.BindingType || (exports.BindingType = {}));
function bindingTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'BINDING_TYPE_UNSPECIFIED':
            return BindingType.BINDING_TYPE_UNSPECIFIED;
        case 1:
        case 'POST':
            return BindingType.POST;
        case 2:
        case 'REDIRECT':
            return BindingType.REDIRECT;
        case 3:
        case 'ARTIFACT':
            return BindingType.ARTIFACT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BindingType.UNRECOGNIZED;
    }
}
exports.bindingTypeFromJSON = bindingTypeFromJSON;
function bindingTypeToJSON(object) {
    switch (object) {
        case BindingType.BINDING_TYPE_UNSPECIFIED:
            return 'BINDING_TYPE_UNSPECIFIED';
        case BindingType.POST:
            return 'POST';
        case BindingType.REDIRECT:
            return 'REDIRECT';
        case BindingType.ARTIFACT:
            return 'ARTIFACT';
        default:
            return 'UNKNOWN';
    }
}
exports.bindingTypeToJSON = bindingTypeToJSON;
const baseFederation = {
    id: '',
    organizationId: '',
    name: '',
    description: '',
    autoCreateAccountOnLogin: false,
    issuer: '',
    ssoBinding: 0,
    ssoUrl: '',
    caseInsensitiveNameIds: false,
};
exports.Federation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.cookieMaxAge !== undefined) {
            duration_1.Duration.encode(message.cookieMaxAge, writer.uint32(50).fork()).ldelim();
        }
        if (message.autoCreateAccountOnLogin === true) {
            writer.uint32(56).bool(message.autoCreateAccountOnLogin);
        }
        if (message.issuer !== '') {
            writer.uint32(66).string(message.issuer);
        }
        if (message.ssoBinding !== 0) {
            writer.uint32(72).int32(message.ssoBinding);
        }
        if (message.ssoUrl !== '') {
            writer.uint32(82).string(message.ssoUrl);
        }
        if (message.securitySettings !== undefined) {
            exports.FederationSecuritySettings.encode(message.securitySettings, writer.uint32(90).fork()).ldelim();
        }
        if (message.caseInsensitiveNameIds === true) {
            writer.uint32(96).bool(message.caseInsensitiveNameIds);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.Federation_LabelsEntry.encode({ key: key, value }, writer.uint32(106).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFederation };
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.cookieMaxAge = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.autoCreateAccountOnLogin = reader.bool();
                    break;
                case 8:
                    message.issuer = reader.string();
                    break;
                case 9:
                    message.ssoBinding = reader.int32();
                    break;
                case 10:
                    message.ssoUrl = reader.string();
                    break;
                case 11:
                    message.securitySettings =
                        exports.FederationSecuritySettings.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.caseInsensitiveNameIds = reader.bool();
                    break;
                case 13:
                    const entry13 = exports.Federation_LabelsEntry.decode(reader, reader.uint32());
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
        const message = { ...baseFederation };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
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
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
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
            message.ssoBinding = bindingTypeFromJSON(object.ssoBinding);
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
            message.securitySettings = exports.FederationSecuritySettings.fromJSON(object.securitySettings);
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
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.cookieMaxAge !== undefined &&
            (obj.cookieMaxAge = message.cookieMaxAge
                ? duration_1.Duration.toJSON(message.cookieMaxAge)
                : undefined);
        message.autoCreateAccountOnLogin !== undefined &&
            (obj.autoCreateAccountOnLogin = message.autoCreateAccountOnLogin);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.ssoBinding !== undefined &&
            (obj.ssoBinding = bindingTypeToJSON(message.ssoBinding));
        message.ssoUrl !== undefined && (obj.ssoUrl = message.ssoUrl);
        message.securitySettings !== undefined &&
            (obj.securitySettings = message.securitySettings
                ? exports.FederationSecuritySettings.toJSON(message.securitySettings)
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
        const message = { ...baseFederation };
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
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
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
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
            message.securitySettings = exports.FederationSecuritySettings.fromPartial(object.securitySettings);
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
const baseFederation_LabelsEntry = { key: '', value: '' };
exports.Federation_LabelsEntry = {
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
            ...baseFederation_LabelsEntry,
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
            ...baseFederation_LabelsEntry,
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
            ...baseFederation_LabelsEntry,
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
const baseFederationSecuritySettings = { encryptedAssertions: false };
exports.FederationSecuritySettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.encryptedAssertions === true) {
            writer.uint32(8).bool(message.encryptedAssertions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFederationSecuritySettings,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encryptedAssertions = reader.bool();
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
            ...baseFederationSecuritySettings,
        };
        if (object.encryptedAssertions !== undefined &&
            object.encryptedAssertions !== null) {
            message.encryptedAssertions = Boolean(object.encryptedAssertions);
        }
        else {
            message.encryptedAssertions = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.encryptedAssertions !== undefined &&
            (obj.encryptedAssertions = message.encryptedAssertions);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseFederationSecuritySettings,
        };
        if (object.encryptedAssertions !== undefined &&
            object.encryptedAssertions !== null) {
            message.encryptedAssertions = object.encryptedAssertions;
        }
        else {
            message.encryptedAssertions = false;
        }
        return message;
    },
};
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
