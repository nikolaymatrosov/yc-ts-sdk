/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.organizationmanager.v1';
const baseUserAccount = { id: '' };
export const UserAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.yandexPassportUserAccount !== undefined) {
            YandexPassportUserAccount.encode(message.yandexPassportUserAccount, writer.uint32(18).fork()).ldelim();
        }
        if (message.samlUserAccount !== undefined) {
            SamlUserAccount.encode(message.samlUserAccount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                        YandexPassportUserAccount.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.samlUserAccount = SamlUserAccount.decode(reader, reader.uint32());
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
                YandexPassportUserAccount.fromJSON(object.yandexPassportUserAccount);
        }
        else {
            message.yandexPassportUserAccount = undefined;
        }
        if (object.samlUserAccount !== undefined &&
            object.samlUserAccount !== null) {
            message.samlUserAccount = SamlUserAccount.fromJSON(object.samlUserAccount);
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
                ? YandexPassportUserAccount.toJSON(message.yandexPassportUserAccount)
                : undefined);
        message.samlUserAccount !== undefined &&
            (obj.samlUserAccount = message.samlUserAccount
                ? SamlUserAccount.toJSON(message.samlUserAccount)
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
                YandexPassportUserAccount.fromPartial(object.yandexPassportUserAccount);
        }
        else {
            message.yandexPassportUserAccount = undefined;
        }
        if (object.samlUserAccount !== undefined &&
            object.samlUserAccount !== null) {
            message.samlUserAccount = SamlUserAccount.fromPartial(object.samlUserAccount);
        }
        else {
            message.samlUserAccount = undefined;
        }
        return message;
    },
};
const baseYandexPassportUserAccount = { login: '', defaultEmail: '' };
export const YandexPassportUserAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.login !== '') {
            writer.uint32(10).string(message.login);
        }
        if (message.defaultEmail !== '') {
            writer.uint32(18).string(message.defaultEmail);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseSamlUserAccount = { federationId: '', nameId: '' };
export const SamlUserAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.federationId !== '') {
            writer.uint32(10).string(message.federationId);
        }
        if (message.nameId !== '') {
            writer.uint32(18).string(message.nameId);
        }
        Object.entries(message.attributes).forEach(([key, value]) => {
            SamlUserAccount_AttributesEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    const entry3 = SamlUserAccount_AttributesEntry.decode(reader, reader.uint32());
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
                    SamlUserAccount_Attribute.fromJSON(value);
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
                obj.attributes[k] = SamlUserAccount_Attribute.toJSON(v);
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
                        SamlUserAccount_Attribute.fromPartial(value);
                }
            });
        }
        return message;
    },
};
const baseSamlUserAccount_Attribute = { value: '' };
export const SamlUserAccount_Attribute = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.value) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
const baseSamlUserAccount_AttributesEntry = { key: '' };
export const SamlUserAccount_AttributesEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            SamlUserAccount_Attribute.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.value = SamlUserAccount_Attribute.decode(reader, reader.uint32());
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
            message.value = SamlUserAccount_Attribute.fromJSON(object.value);
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
                ? SamlUserAccount_Attribute.toJSON(message.value)
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
            message.value = SamlUserAccount_Attribute.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
