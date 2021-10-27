"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = exports.TranslatedText = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.ai.translate.v2';
const baseTranslatedText = { text: '', detectedLanguageCode: '' };
exports.TranslatedText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.detectedLanguageCode !== '') {
            writer.uint32(18).string(message.detectedLanguageCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTranslatedText };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.detectedLanguageCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTranslatedText };
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        }
        else {
            message.text = '';
        }
        if (object.detectedLanguageCode !== undefined &&
            object.detectedLanguageCode !== null) {
            message.detectedLanguageCode = String(object.detectedLanguageCode);
        }
        else {
            message.detectedLanguageCode = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.text !== undefined && (obj.text = message.text);
        message.detectedLanguageCode !== undefined &&
            (obj.detectedLanguageCode = message.detectedLanguageCode);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTranslatedText };
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        }
        else {
            message.text = '';
        }
        if (object.detectedLanguageCode !== undefined &&
            object.detectedLanguageCode !== null) {
            message.detectedLanguageCode = object.detectedLanguageCode;
        }
        else {
            message.detectedLanguageCode = '';
        }
        return message;
    },
};
const baseLanguage = { code: '', name: '' };
exports.Language = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== '') {
            writer.uint32(10).string(message.code);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLanguage };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
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
        const message = { ...baseLanguage };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = '';
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
        message.code !== undefined && (obj.code = message.code);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLanguage };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = '';
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
