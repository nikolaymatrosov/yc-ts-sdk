/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.translate.v2';

export interface TranslatedText {
    /** Translated text. */
    text: string;
    /**
     * The language code of the source text.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
     */
    detectedLanguageCode: string;
}

export interface Language {
    /**
     * The language code.
     * Specified in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format (for example, `` en ``).
     */
    code: string;
    /** The name of the language (for example, `` English ``). */
    name: string;
}

const baseTranslatedText: object = { text: '', detectedLanguageCode: '' };

export const TranslatedText = {
    encode(
        message: TranslatedText,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        if (message.detectedLanguageCode !== '') {
            writer.uint32(18).string(message.detectedLanguageCode);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TranslatedText {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTranslatedText } as TranslatedText;
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

    fromJSON(object: any): TranslatedText {
        const message = { ...baseTranslatedText } as TranslatedText;
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        } else {
            message.text = '';
        }
        if (
            object.detectedLanguageCode !== undefined &&
            object.detectedLanguageCode !== null
        ) {
            message.detectedLanguageCode = String(object.detectedLanguageCode);
        } else {
            message.detectedLanguageCode = '';
        }
        return message;
    },

    toJSON(message: TranslatedText): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        message.detectedLanguageCode !== undefined &&
            (obj.detectedLanguageCode = message.detectedLanguageCode);
        return obj;
    },

    fromPartial(object: DeepPartial<TranslatedText>): TranslatedText {
        const message = { ...baseTranslatedText } as TranslatedText;
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        } else {
            message.text = '';
        }
        if (
            object.detectedLanguageCode !== undefined &&
            object.detectedLanguageCode !== null
        ) {
            message.detectedLanguageCode = object.detectedLanguageCode;
        } else {
            message.detectedLanguageCode = '';
        }
        return message;
    },
};

const baseLanguage: object = { code: '', name: '' };

export const Language = {
    encode(
        message: Language,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.code !== '') {
            writer.uint32(10).string(message.code);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Language {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLanguage } as Language;
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

    fromJSON(object: any): Language {
        const message = { ...baseLanguage } as Language;
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        } else {
            message.code = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        return message;
    },

    toJSON(message: Language): unknown {
        const obj: any = {};
        message.code !== undefined && (obj.code = message.code);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial(object: DeepPartial<Language>): Language {
        const message = { ...baseLanguage } as Language;
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        } else {
            message.code = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        return message;
    },
};

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
