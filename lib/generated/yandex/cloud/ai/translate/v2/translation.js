/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.ai.translate.v2';
const baseTranslatedText = { text: '', detectedLanguageCode: '' };
export const TranslatedText = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.detectedLanguageCode !== '') {
            writer.uint32(18).string(message.detectedLanguageCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const Language = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== '') {
            writer.uint32(10).string(message.code);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
