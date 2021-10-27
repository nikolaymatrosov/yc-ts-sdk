"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationServiceClient = exports.TranslationServiceService = exports.ListLanguagesResponse = exports.ListLanguagesRequest = exports.DetectLanguageResponse = exports.DetectLanguageRequest = exports.TranslateResponse = exports.GlossaryPair = exports.GlossaryData = exports.TranslateGlossaryConfig = exports.TranslateRequest = exports.translateRequest_FormatToJSON = exports.translateRequest_FormatFromJSON = exports.TranslateRequest_Format = exports.protobufPackage = void 0;
/* eslint-disable */
const translation_1 = require("../../../../../yandex/cloud/ai/translate/v2/translation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.ai.translate.v2';
var TranslateRequest_Format;
(function (TranslateRequest_Format) {
    TranslateRequest_Format[TranslateRequest_Format["FORMAT_UNSPECIFIED"] = 0] = "FORMAT_UNSPECIFIED";
    /** PLAIN_TEXT - Text without markup. Default value. */
    TranslateRequest_Format[TranslateRequest_Format["PLAIN_TEXT"] = 1] = "PLAIN_TEXT";
    /** HTML - Text in the HTML format. */
    TranslateRequest_Format[TranslateRequest_Format["HTML"] = 2] = "HTML";
    TranslateRequest_Format[TranslateRequest_Format["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TranslateRequest_Format = exports.TranslateRequest_Format || (exports.TranslateRequest_Format = {}));
function translateRequest_FormatFromJSON(object) {
    switch (object) {
        case 0:
        case 'FORMAT_UNSPECIFIED':
            return TranslateRequest_Format.FORMAT_UNSPECIFIED;
        case 1:
        case 'PLAIN_TEXT':
            return TranslateRequest_Format.PLAIN_TEXT;
        case 2:
        case 'HTML':
            return TranslateRequest_Format.HTML;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TranslateRequest_Format.UNRECOGNIZED;
    }
}
exports.translateRequest_FormatFromJSON = translateRequest_FormatFromJSON;
function translateRequest_FormatToJSON(object) {
    switch (object) {
        case TranslateRequest_Format.FORMAT_UNSPECIFIED:
            return 'FORMAT_UNSPECIFIED';
        case TranslateRequest_Format.PLAIN_TEXT:
            return 'PLAIN_TEXT';
        case TranslateRequest_Format.HTML:
            return 'HTML';
        default:
            return 'UNKNOWN';
    }
}
exports.translateRequest_FormatToJSON = translateRequest_FormatToJSON;
const baseTranslateRequest = {
    sourceLanguageCode: '',
    targetLanguageCode: '',
    format: 0,
    texts: '',
    folderId: '',
    model: '',
};
exports.TranslateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sourceLanguageCode !== '') {
            writer.uint32(10).string(message.sourceLanguageCode);
        }
        if (message.targetLanguageCode !== '') {
            writer.uint32(18).string(message.targetLanguageCode);
        }
        if (message.format !== 0) {
            writer.uint32(24).int32(message.format);
        }
        for (const v of message.texts) {
            writer.uint32(34).string(v);
        }
        if (message.folderId !== '') {
            writer.uint32(42).string(message.folderId);
        }
        if (message.model !== '') {
            writer.uint32(50).string(message.model);
        }
        if (message.glossaryConfig !== undefined) {
            exports.TranslateGlossaryConfig.encode(message.glossaryConfig, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTranslateRequest };
        message.texts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceLanguageCode = reader.string();
                    break;
                case 2:
                    message.targetLanguageCode = reader.string();
                    break;
                case 3:
                    message.format = reader.int32();
                    break;
                case 4:
                    message.texts.push(reader.string());
                    break;
                case 5:
                    message.folderId = reader.string();
                    break;
                case 6:
                    message.model = reader.string();
                    break;
                case 7:
                    message.glossaryConfig = exports.TranslateGlossaryConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTranslateRequest };
        message.texts = [];
        if (object.sourceLanguageCode !== undefined &&
            object.sourceLanguageCode !== null) {
            message.sourceLanguageCode = String(object.sourceLanguageCode);
        }
        else {
            message.sourceLanguageCode = '';
        }
        if (object.targetLanguageCode !== undefined &&
            object.targetLanguageCode !== null) {
            message.targetLanguageCode = String(object.targetLanguageCode);
        }
        else {
            message.targetLanguageCode = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = translateRequest_FormatFromJSON(object.format);
        }
        else {
            message.format = 0;
        }
        if (object.texts !== undefined && object.texts !== null) {
            for (const e of object.texts) {
                message.texts.push(String(e));
            }
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = String(object.model);
        }
        else {
            message.model = '';
        }
        if (object.glossaryConfig !== undefined &&
            object.glossaryConfig !== null) {
            message.glossaryConfig = exports.TranslateGlossaryConfig.fromJSON(object.glossaryConfig);
        }
        else {
            message.glossaryConfig = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceLanguageCode !== undefined &&
            (obj.sourceLanguageCode = message.sourceLanguageCode);
        message.targetLanguageCode !== undefined &&
            (obj.targetLanguageCode = message.targetLanguageCode);
        message.format !== undefined &&
            (obj.format = translateRequest_FormatToJSON(message.format));
        if (message.texts) {
            obj.texts = message.texts.map((e) => e);
        }
        else {
            obj.texts = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.model !== undefined && (obj.model = message.model);
        message.glossaryConfig !== undefined &&
            (obj.glossaryConfig = message.glossaryConfig
                ? exports.TranslateGlossaryConfig.toJSON(message.glossaryConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTranslateRequest };
        message.texts = [];
        if (object.sourceLanguageCode !== undefined &&
            object.sourceLanguageCode !== null) {
            message.sourceLanguageCode = object.sourceLanguageCode;
        }
        else {
            message.sourceLanguageCode = '';
        }
        if (object.targetLanguageCode !== undefined &&
            object.targetLanguageCode !== null) {
            message.targetLanguageCode = object.targetLanguageCode;
        }
        else {
            message.targetLanguageCode = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = 0;
        }
        if (object.texts !== undefined && object.texts !== null) {
            for (const e of object.texts) {
                message.texts.push(e);
            }
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = object.model;
        }
        else {
            message.model = '';
        }
        if (object.glossaryConfig !== undefined &&
            object.glossaryConfig !== null) {
            message.glossaryConfig = exports.TranslateGlossaryConfig.fromPartial(object.glossaryConfig);
        }
        else {
            message.glossaryConfig = undefined;
        }
        return message;
    },
};
const baseTranslateGlossaryConfig = {};
exports.TranslateGlossaryConfig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.glossaryData !== undefined) {
            exports.GlossaryData.encode(message.glossaryData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTranslateGlossaryConfig,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.glossaryData = exports.GlossaryData.decode(reader, reader.uint32());
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
            ...baseTranslateGlossaryConfig,
        };
        if (object.glossaryData !== undefined && object.glossaryData !== null) {
            message.glossaryData = exports.GlossaryData.fromJSON(object.glossaryData);
        }
        else {
            message.glossaryData = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.glossaryData !== undefined &&
            (obj.glossaryData = message.glossaryData
                ? exports.GlossaryData.toJSON(message.glossaryData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseTranslateGlossaryConfig,
        };
        if (object.glossaryData !== undefined && object.glossaryData !== null) {
            message.glossaryData = exports.GlossaryData.fromPartial(object.glossaryData);
        }
        else {
            message.glossaryData = undefined;
        }
        return message;
    },
};
const baseGlossaryData = {};
exports.GlossaryData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.glossaryPairs) {
            exports.GlossaryPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGlossaryData };
        message.glossaryPairs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.glossaryPairs.push(exports.GlossaryPair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGlossaryData };
        message.glossaryPairs = [];
        if (object.glossaryPairs !== undefined &&
            object.glossaryPairs !== null) {
            for (const e of object.glossaryPairs) {
                message.glossaryPairs.push(exports.GlossaryPair.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.glossaryPairs) {
            obj.glossaryPairs = message.glossaryPairs.map((e) => e ? exports.GlossaryPair.toJSON(e) : undefined);
        }
        else {
            obj.glossaryPairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGlossaryData };
        message.glossaryPairs = [];
        if (object.glossaryPairs !== undefined &&
            object.glossaryPairs !== null) {
            for (const e of object.glossaryPairs) {
                message.glossaryPairs.push(exports.GlossaryPair.fromPartial(e));
            }
        }
        return message;
    },
};
const baseGlossaryPair = { sourceText: '', translatedText: '' };
exports.GlossaryPair = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sourceText !== '') {
            writer.uint32(10).string(message.sourceText);
        }
        if (message.translatedText !== '') {
            writer.uint32(18).string(message.translatedText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGlossaryPair };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceText = reader.string();
                    break;
                case 2:
                    message.translatedText = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGlossaryPair };
        if (object.sourceText !== undefined && object.sourceText !== null) {
            message.sourceText = String(object.sourceText);
        }
        else {
            message.sourceText = '';
        }
        if (object.translatedText !== undefined &&
            object.translatedText !== null) {
            message.translatedText = String(object.translatedText);
        }
        else {
            message.translatedText = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sourceText !== undefined &&
            (obj.sourceText = message.sourceText);
        message.translatedText !== undefined &&
            (obj.translatedText = message.translatedText);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGlossaryPair };
        if (object.sourceText !== undefined && object.sourceText !== null) {
            message.sourceText = object.sourceText;
        }
        else {
            message.sourceText = '';
        }
        if (object.translatedText !== undefined &&
            object.translatedText !== null) {
            message.translatedText = object.translatedText;
        }
        else {
            message.translatedText = '';
        }
        return message;
    },
};
const baseTranslateResponse = {};
exports.TranslateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.translations) {
            translation_1.TranslatedText.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTranslateResponse };
        message.translations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.translations.push(translation_1.TranslatedText.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTranslateResponse };
        message.translations = [];
        if (object.translations !== undefined && object.translations !== null) {
            for (const e of object.translations) {
                message.translations.push(translation_1.TranslatedText.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.translations) {
            obj.translations = message.translations.map((e) => e ? translation_1.TranslatedText.toJSON(e) : undefined);
        }
        else {
            obj.translations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTranslateResponse };
        message.translations = [];
        if (object.translations !== undefined && object.translations !== null) {
            for (const e of object.translations) {
                message.translations.push(translation_1.TranslatedText.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDetectLanguageRequest = {
    text: '',
    languageCodeHints: '',
    folderId: '',
};
exports.DetectLanguageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        for (const v of message.languageCodeHints) {
            writer.uint32(18).string(v);
        }
        if (message.folderId !== '') {
            writer.uint32(26).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetectLanguageRequest,
        };
        message.languageCodeHints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.languageCodeHints.push(reader.string());
                    break;
                case 3:
                    message.folderId = reader.string();
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
            ...baseDetectLanguageRequest,
        };
        message.languageCodeHints = [];
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        }
        else {
            message.text = '';
        }
        if (object.languageCodeHints !== undefined &&
            object.languageCodeHints !== null) {
            for (const e of object.languageCodeHints) {
                message.languageCodeHints.push(String(e));
            }
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.text !== undefined && (obj.text = message.text);
        if (message.languageCodeHints) {
            obj.languageCodeHints = message.languageCodeHints.map((e) => e);
        }
        else {
            obj.languageCodeHints = [];
        }
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDetectLanguageRequest,
        };
        message.languageCodeHints = [];
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        }
        else {
            message.text = '';
        }
        if (object.languageCodeHints !== undefined &&
            object.languageCodeHints !== null) {
            for (const e of object.languageCodeHints) {
                message.languageCodeHints.push(e);
            }
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        return message;
    },
};
const baseDetectLanguageResponse = { languageCode: '' };
exports.DetectLanguageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.languageCode !== '') {
            writer.uint32(10).string(message.languageCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDetectLanguageResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.languageCode = reader.string();
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
            ...baseDetectLanguageResponse,
        };
        if (object.languageCode !== undefined && object.languageCode !== null) {
            message.languageCode = String(object.languageCode);
        }
        else {
            message.languageCode = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.languageCode !== undefined &&
            (obj.languageCode = message.languageCode);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDetectLanguageResponse,
        };
        if (object.languageCode !== undefined && object.languageCode !== null) {
            message.languageCode = object.languageCode;
        }
        else {
            message.languageCode = '';
        }
        return message;
    },
};
const baseListLanguagesRequest = { folderId: '' };
exports.ListLanguagesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListLanguagesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListLanguagesRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListLanguagesRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        return message;
    },
};
const baseListLanguagesResponse = {};
exports.ListLanguagesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.languages) {
            translation_1.Language.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListLanguagesResponse,
        };
        message.languages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.languages.push(translation_1.Language.decode(reader, reader.uint32()));
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
            ...baseListLanguagesResponse,
        };
        message.languages = [];
        if (object.languages !== undefined && object.languages !== null) {
            for (const e of object.languages) {
                message.languages.push(translation_1.Language.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.languages) {
            obj.languages = message.languages.map((e) => e ? translation_1.Language.toJSON(e) : undefined);
        }
        else {
            obj.languages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListLanguagesResponse,
        };
        message.languages = [];
        if (object.languages !== undefined && object.languages !== null) {
            for (const e of object.languages) {
                message.languages.push(translation_1.Language.fromPartial(e));
            }
        }
        return message;
    },
};
/** A set of methods for the Yandex Translate service. */
exports.TranslationServiceService = {
    /** Translates the text to the specified language. */
    translate: {
        path: '/yandex.cloud.ai.translate.v2.TranslationService/Translate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.TranslateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.TranslateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.TranslateResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.TranslateResponse.decode(value),
    },
    /** Detects the language of the text. */
    detectLanguage: {
        path: '/yandex.cloud.ai.translate.v2.TranslationService/DetectLanguage',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DetectLanguageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DetectLanguageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.DetectLanguageResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.DetectLanguageResponse.decode(value),
    },
    /** Retrieves the list of supported languages. */
    listLanguages: {
        path: '/yandex.cloud.ai.translate.v2.TranslationService/ListLanguages',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListLanguagesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListLanguagesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListLanguagesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListLanguagesResponse.decode(value),
    },
};
exports.TranslationServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TranslationServiceService, 'yandex.cloud.ai.translate.v2.TranslationService');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
