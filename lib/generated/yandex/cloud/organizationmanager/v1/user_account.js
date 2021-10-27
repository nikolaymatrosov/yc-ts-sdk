"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamlUserAccount_AttributesEntry = exports.SamlUserAccount_Attribute = exports.SamlUserAccount = exports.YandexPassportUserAccount = exports.UserAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.organizationmanager.v1';
const baseUserAccount = {
    $type: 'yandex.cloud.organizationmanager.v1.UserAccount',
    id: '',
};
exports.UserAccount = {
    $type: 'yandex.cloud.organizationmanager.v1.UserAccount',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.yandexPassportUserAccount !== undefined) {
            exports.YandexPassportUserAccount.encode(message.yandexPassportUserAccount, writer.uint32(18).fork()).ldelim();
        }
        if (message.samlUserAccount !== undefined) {
            exports.SamlUserAccount.encode(message.samlUserAccount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserAccount };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.yandexPassportUserAccount =
                        exports.YandexPassportUserAccount.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.samlUserAccount = exports.SamlUserAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUserAccount };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.yandexPassportUserAccount !== undefined &&
            object.yandexPassportUserAccount !== null) {
            message.yandexPassportUserAccount =
                exports.YandexPassportUserAccount.fromJSON(object.yandexPassportUserAccount);
        }
        else {
            message.yandexPassportUserAccount = undefined;
        }
        if (object.samlUserAccount !== undefined &&
            object.samlUserAccount !== null) {
            message.samlUserAccount = exports.SamlUserAccount.fromJSON(object.samlUserAccount);
        }
        else {
            message.samlUserAccount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.yandexPassportUserAccount !== undefined &&
            (obj.yandexPassportUserAccount = message.yandexPassportUserAccount
                ? exports.YandexPassportUserAccount.toJSON(message.yandexPassportUserAccount)
                : undefined);
        message.samlUserAccount !== undefined &&
            (obj.samlUserAccount = message.samlUserAccount
                ? exports.SamlUserAccount.toJSON(message.samlUserAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUserAccount };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.yandexPassportUserAccount !== undefined &&
            object.yandexPassportUserAccount !== null) {
            message.yandexPassportUserAccount =
                exports.YandexPassportUserAccount.fromPartial(object.yandexPassportUserAccount);
        }
        else {
            message.yandexPassportUserAccount = undefined;
        }
        if (object.samlUserAccount !== undefined &&
            object.samlUserAccount !== null) {
            message.samlUserAccount = exports.SamlUserAccount.fromPartial(object.samlUserAccount);
        }
        else {
            message.samlUserAccount = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UserAccount.$type, exports.UserAccount);
const baseYandexPassportUserAccount = {
    $type: 'yandex.cloud.organizationmanager.v1.YandexPassportUserAccount',
    login: '',
    defaultEmail: '',
};
exports.YandexPassportUserAccount = {
    $type: 'yandex.cloud.organizationmanager.v1.YandexPassportUserAccount',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.login !== '') {
            writer.uint32(10).string(message.login);
        }
        if (message.defaultEmail !== '') {
            writer.uint32(18).string(message.defaultEmail);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseYandexPassportUserAccount,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    message.defaultEmail = reader.string();
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
            ...baseYandexPassportUserAccount,
        };
        if (object.login !== undefined && object.login !== null) {
            message.login = String(object.login);
        }
        else {
            message.login = '';
        }
        if (object.defaultEmail !== undefined && object.defaultEmail !== null) {
            message.defaultEmail = String(object.defaultEmail);
        }
        else {
            message.defaultEmail = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.login !== undefined && (obj.login = message.login);
        message.defaultEmail !== undefined &&
            (obj.defaultEmail = message.defaultEmail);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseYandexPassportUserAccount,
        };
        if (object.login !== undefined && object.login !== null) {
            message.login = object.login;
        }
        else {
            message.login = '';
        }
        if (object.defaultEmail !== undefined && object.defaultEmail !== null) {
            message.defaultEmail = object.defaultEmail;
        }
        else {
            message.defaultEmail = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.YandexPassportUserAccount.$type, exports.YandexPassportUserAccount);
const baseSamlUserAccount = {
    $type: 'yandex.cloud.organizationmanager.v1.SamlUserAccount',
    federationId: '',
    nameId: '',
};
exports.SamlUserAccount = {
    $type: 'yandex.cloud.organizationmanager.v1.SamlUserAccount',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.nameId !== '') {
            writer.uint32(18).string(message.nameId);
        }
        Object.entries(message.attributes).forEach(([key, value]) => {
            exports.SamlUserAccount_AttributesEntry.encode({
                $type: 'yandex.cloud.organizationmanager.v1.SamlUserAccount.AttributesEntry',
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSamlUserAccount };
        message.attributes = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.federationId = reader.string();
                    break;
                case 2:
                    message.nameId = reader.string();
                    break;
                case 3:
                    const entry3 = exports.SamlUserAccount_AttributesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.attributes[entry3.key] = entry3.value;
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
        const message = { ...baseSamlUserAccount };
        message.attributes = {};
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = String(object.federationId);
        }
        else {
            message.federationId = '';
        }
        if (object.nameId !== undefined && object.nameId !== null) {
            message.nameId = String(object.nameId);
        }
        else {
            message.nameId = '';
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            Object.entries(object.attributes).forEach(([key, value]) => {
                message.attributes[key] =
                    exports.SamlUserAccount_Attribute.fromJSON(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.federationId !== undefined &&
            (obj.federationId = message.federationId);
        message.nameId !== undefined && (obj.nameId = message.nameId);
        obj.attributes = {};
        if (message.attributes) {
            Object.entries(message.attributes).forEach(([k, v]) => {
                obj.attributes[k] = exports.SamlUserAccount_Attribute.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSamlUserAccount };
        message.attributes = {};
        if (object.federationId !== undefined && object.federationId !== null) {
            message.federationId = object.federationId;
        }
        else {
            message.federationId = '';
        }
        if (object.nameId !== undefined && object.nameId !== null) {
            message.nameId = object.nameId;
        }
        else {
            message.nameId = '';
        }
        if (object.attributes !== undefined && object.attributes !== null) {
            Object.entries(object.attributes).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.attributes[key] =
                        exports.SamlUserAccount_Attribute.fromPartial(value);
                }
            });
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SamlUserAccount.$type, exports.SamlUserAccount);
const baseSamlUserAccount_Attribute = {
    $type: 'yandex.cloud.organizationmanager.v1.SamlUserAccount.Attribute',
    value: '',
};
exports.SamlUserAccount_Attribute = {
    $type: 'yandex.cloud.organizationmanager.v1.SamlUserAccount.Attribute',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.value) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSamlUserAccount_Attribute,
        };
        message.value = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value.push(reader.string());
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
            ...baseSamlUserAccount_Attribute,
        };
        message.value = [];
        if (object.value !== undefined && object.value !== null) {
            for (const e of object.value) {
                message.value.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.value) {
            obj.value = message.value.map((e) => e);
        }
        else {
            obj.value = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSamlUserAccount_Attribute,
        };
        message.value = [];
        if (object.value !== undefined && object.value !== null) {
            for (const e of object.value) {
                message.value.push(e);
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SamlUserAccount_Attribute.$type, exports.SamlUserAccount_Attribute);
const baseSamlUserAccount_AttributesEntry = {
    $type: 'yandex.cloud.organizationmanager.v1.SamlUserAccount.AttributesEntry',
    key: '',
};
exports.SamlUserAccount_AttributesEntry = {
    $type: 'yandex.cloud.organizationmanager.v1.SamlUserAccount.AttributesEntry',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SamlUserAccount_Attribute.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSamlUserAccount_AttributesEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.SamlUserAccount_Attribute.decode(reader, reader.uint32());
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
            ...baseSamlUserAccount_AttributesEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.SamlUserAccount_Attribute.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.SamlUserAccount_Attribute.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSamlUserAccount_AttributesEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.SamlUserAccount_Attribute.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SamlUserAccount_AttributesEntry.$type, exports.SamlUserAccount_AttributesEntry);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
