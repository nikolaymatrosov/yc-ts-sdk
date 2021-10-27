"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Federation = exports.SubjectClaims = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.oauth';
const baseSubjectClaims = {
    $type: 'yandex.cloud.oauth.SubjectClaims',
    sub: '',
    name: '',
    givenName: '',
    familyName: '',
    preferredUsername: '',
    picture: '',
    email: '',
    zoneinfo: '',
    locale: '',
    phoneNumber: '',
};
exports.SubjectClaims = {
    $type: 'yandex.cloud.oauth.SubjectClaims',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sub !== '') {
            writer.uint32(10).string(message.sub);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.givenName !== '') {
            writer.uint32(26).string(message.givenName);
        }
        if (message.familyName !== '') {
            writer.uint32(34).string(message.familyName);
        }
        if (message.preferredUsername !== '') {
            writer.uint32(58).string(message.preferredUsername);
        }
        if (message.picture !== '') {
            writer.uint32(74).string(message.picture);
        }
        if (message.email !== '') {
            writer.uint32(90).string(message.email);
        }
        if (message.zoneinfo !== '') {
            writer.uint32(122).string(message.zoneinfo);
        }
        if (message.locale !== '') {
            writer.uint32(130).string(message.locale);
        }
        if (message.phoneNumber !== '') {
            writer.uint32(138).string(message.phoneNumber);
        }
        if (message.federation !== undefined) {
            exports.Federation.encode(message.federation, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubjectClaims };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sub = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.givenName = reader.string();
                    break;
                case 4:
                    message.familyName = reader.string();
                    break;
                case 7:
                    message.preferredUsername = reader.string();
                    break;
                case 9:
                    message.picture = reader.string();
                    break;
                case 11:
                    message.email = reader.string();
                    break;
                case 15:
                    message.zoneinfo = reader.string();
                    break;
                case 16:
                    message.locale = reader.string();
                    break;
                case 17:
                    message.phoneNumber = reader.string();
                    break;
                case 100:
                    message.federation = exports.Federation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSubjectClaims };
        if (object.sub !== undefined && object.sub !== null) {
            message.sub = String(object.sub);
        }
        else {
            message.sub = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.givenName !== undefined && object.givenName !== null) {
            message.givenName = String(object.givenName);
        }
        else {
            message.givenName = '';
        }
        if (object.familyName !== undefined && object.familyName !== null) {
            message.familyName = String(object.familyName);
        }
        else {
            message.familyName = '';
        }
        if (object.preferredUsername !== undefined &&
            object.preferredUsername !== null) {
            message.preferredUsername = String(object.preferredUsername);
        }
        else {
            message.preferredUsername = '';
        }
        if (object.picture !== undefined && object.picture !== null) {
            message.picture = String(object.picture);
        }
        else {
            message.picture = '';
        }
        if (object.email !== undefined && object.email !== null) {
            message.email = String(object.email);
        }
        else {
            message.email = '';
        }
        if (object.zoneinfo !== undefined && object.zoneinfo !== null) {
            message.zoneinfo = String(object.zoneinfo);
        }
        else {
            message.zoneinfo = '';
        }
        if (object.locale !== undefined && object.locale !== null) {
            message.locale = String(object.locale);
        }
        else {
            message.locale = '';
        }
        if (object.phoneNumber !== undefined && object.phoneNumber !== null) {
            message.phoneNumber = String(object.phoneNumber);
        }
        else {
            message.phoneNumber = '';
        }
        if (object.federation !== undefined && object.federation !== null) {
            message.federation = exports.Federation.fromJSON(object.federation);
        }
        else {
            message.federation = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sub !== undefined && (obj.sub = message.sub);
        message.name !== undefined && (obj.name = message.name);
        message.givenName !== undefined && (obj.givenName = message.givenName);
        message.familyName !== undefined &&
            (obj.familyName = message.familyName);
        message.preferredUsername !== undefined &&
            (obj.preferredUsername = message.preferredUsername);
        message.picture !== undefined && (obj.picture = message.picture);
        message.email !== undefined && (obj.email = message.email);
        message.zoneinfo !== undefined && (obj.zoneinfo = message.zoneinfo);
        message.locale !== undefined && (obj.locale = message.locale);
        message.phoneNumber !== undefined &&
            (obj.phoneNumber = message.phoneNumber);
        message.federation !== undefined &&
            (obj.federation = message.federation
                ? exports.Federation.toJSON(message.federation)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSubjectClaims };
        if (object.sub !== undefined && object.sub !== null) {
            message.sub = object.sub;
        }
        else {
            message.sub = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.givenName !== undefined && object.givenName !== null) {
            message.givenName = object.givenName;
        }
        else {
            message.givenName = '';
        }
        if (object.familyName !== undefined && object.familyName !== null) {
            message.familyName = object.familyName;
        }
        else {
            message.familyName = '';
        }
        if (object.preferredUsername !== undefined &&
            object.preferredUsername !== null) {
            message.preferredUsername = object.preferredUsername;
        }
        else {
            message.preferredUsername = '';
        }
        if (object.picture !== undefined && object.picture !== null) {
            message.picture = object.picture;
        }
        else {
            message.picture = '';
        }
        if (object.email !== undefined && object.email !== null) {
            message.email = object.email;
        }
        else {
            message.email = '';
        }
        if (object.zoneinfo !== undefined && object.zoneinfo !== null) {
            message.zoneinfo = object.zoneinfo;
        }
        else {
            message.zoneinfo = '';
        }
        if (object.locale !== undefined && object.locale !== null) {
            message.locale = object.locale;
        }
        else {
            message.locale = '';
        }
        if (object.phoneNumber !== undefined && object.phoneNumber !== null) {
            message.phoneNumber = object.phoneNumber;
        }
        else {
            message.phoneNumber = '';
        }
        if (object.federation !== undefined && object.federation !== null) {
            message.federation = exports.Federation.fromPartial(object.federation);
        }
        else {
            message.federation = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SubjectClaims.$type, exports.SubjectClaims);
const baseFederation = {
    $type: 'yandex.cloud.oauth.Federation',
    id: '',
    name: '',
};
exports.Federation = {
    $type: 'yandex.cloud.oauth.Federation',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFederation };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
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
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFederation };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Federation.$type, exports.Federation);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
