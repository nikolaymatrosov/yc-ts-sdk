/* eslint-disable */
import { Polygon } from '../../../../../yandex/cloud/ai/vision/v1/primitives';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.ai.vision.v1';
const baseTextAnnotation = {};
export const TextAnnotation = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pages) {
            Page.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTextAnnotation };
        message.pages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pages.push(Page.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTextAnnotation };
        message.pages = [];
        if (object.pages !== undefined && object.pages !== null) {
            for (const e of object.pages) {
                message.pages.push(Page.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.pages) {
            obj.pages = message.pages.map((e) => e ? Page.toJSON(e) : undefined);
        }
        else {
            obj.pages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTextAnnotation };
        message.pages = [];
        if (object.pages !== undefined && object.pages !== null) {
            for (const e of object.pages) {
                message.pages.push(Page.fromPartial(e));
            }
        }
        return message;
    },
};
const basePage = { width: 0, height: 0 };
export const Page = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.width !== 0) {
            writer.uint32(8).int64(message.width);
        }
        if (message.height !== 0) {
            writer.uint32(16).int64(message.height);
        }
        for (const v of message.blocks) {
            Block.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.entities) {
            Entity.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePage };
        message.blocks = [];
        message.entities = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.width = longToNumber(reader.int64());
                    break;
                case 2:
                    message.height = longToNumber(reader.int64());
                    break;
                case 3:
                    message.blocks.push(Block.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.entities.push(Entity.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePage };
        message.blocks = [];
        message.entities = [];
        if (object.width !== undefined && object.width !== null) {
            message.width = Number(object.width);
        }
        else {
            message.width = 0;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.blocks !== undefined && object.blocks !== null) {
            for (const e of object.blocks) {
                message.blocks.push(Block.fromJSON(e));
            }
        }
        if (object.entities !== undefined && object.entities !== null) {
            for (const e of object.entities) {
                message.entities.push(Entity.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.width !== undefined && (obj.width = message.width);
        message.height !== undefined && (obj.height = message.height);
        if (message.blocks) {
            obj.blocks = message.blocks.map((e) => e ? Block.toJSON(e) : undefined);
        }
        else {
            obj.blocks = [];
        }
        if (message.entities) {
            obj.entities = message.entities.map((e) => e ? Entity.toJSON(e) : undefined);
        }
        else {
            obj.entities = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePage };
        message.blocks = [];
        message.entities = [];
        if (object.width !== undefined && object.width !== null) {
            message.width = object.width;
        }
        else {
            message.width = 0;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.blocks !== undefined && object.blocks !== null) {
            for (const e of object.blocks) {
                message.blocks.push(Block.fromPartial(e));
            }
        }
        if (object.entities !== undefined && object.entities !== null) {
            for (const e of object.entities) {
                message.entities.push(Entity.fromPartial(e));
            }
        }
        return message;
    },
};
const baseEntity = { name: '', text: '' };
export const Entity = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.text !== '') {
            writer.uint32(18).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEntity };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEntity };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        }
        else {
            message.text = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEntity };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        }
        else {
            message.text = '';
        }
        return message;
    },
};
const baseBlock = {};
export const Block = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.boundingBox !== undefined) {
            Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lines) {
            Line.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBlock };
        message.lines = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = Polygon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lines.push(Line.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBlock };
        message.lines = [];
        if (object.boundingBox !== undefined && object.boundingBox !== null) {
            message.boundingBox = Polygon.fromJSON(object.boundingBox);
        }
        else {
            message.boundingBox = undefined;
        }
        if (object.lines !== undefined && object.lines !== null) {
            for (const e of object.lines) {
                message.lines.push(Line.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? Polygon.toJSON(message.boundingBox)
                : undefined);
        if (message.lines) {
            obj.lines = message.lines.map((e) => e ? Line.toJSON(e) : undefined);
        }
        else {
            obj.lines = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBlock };
        message.lines = [];
        if (object.boundingBox !== undefined && object.boundingBox !== null) {
            message.boundingBox = Polygon.fromPartial(object.boundingBox);
        }
        else {
            message.boundingBox = undefined;
        }
        if (object.lines !== undefined && object.lines !== null) {
            for (const e of object.lines) {
                message.lines.push(Line.fromPartial(e));
            }
        }
        return message;
    },
};
const baseLine = { confidence: 0 };
export const Line = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.boundingBox !== undefined) {
            Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.words) {
            Word.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.confidence !== 0) {
            writer.uint32(25).double(message.confidence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLine };
        message.words = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = Polygon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.words.push(Word.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.confidence = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLine };
        message.words = [];
        if (object.boundingBox !== undefined && object.boundingBox !== null) {
            message.boundingBox = Polygon.fromJSON(object.boundingBox);
        }
        else {
            message.boundingBox = undefined;
        }
        if (object.words !== undefined && object.words !== null) {
            for (const e of object.words) {
                message.words.push(Word.fromJSON(e));
            }
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = Number(object.confidence);
        }
        else {
            message.confidence = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? Polygon.toJSON(message.boundingBox)
                : undefined);
        if (message.words) {
            obj.words = message.words.map((e) => e ? Word.toJSON(e) : undefined);
        }
        else {
            obj.words = [];
        }
        message.confidence !== undefined &&
            (obj.confidence = message.confidence);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLine };
        message.words = [];
        if (object.boundingBox !== undefined && object.boundingBox !== null) {
            message.boundingBox = Polygon.fromPartial(object.boundingBox);
        }
        else {
            message.boundingBox = undefined;
        }
        if (object.words !== undefined && object.words !== null) {
            for (const e of object.words) {
                message.words.push(Word.fromPartial(e));
            }
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = object.confidence;
        }
        else {
            message.confidence = 0;
        }
        return message;
    },
};
const baseWord = { text: '', confidence: 0, entityIndex: 0 };
export const Word = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.boundingBox !== undefined) {
            Polygon.encode(message.boundingBox, writer.uint32(10).fork()).ldelim();
        }
        if (message.text !== '') {
            writer.uint32(18).string(message.text);
        }
        if (message.confidence !== 0) {
            writer.uint32(25).double(message.confidence);
        }
        for (const v of message.languages) {
            Word_DetectedLanguage.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.entityIndex !== 0) {
            writer.uint32(40).int64(message.entityIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWord };
        message.languages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = Polygon.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
                    message.confidence = reader.double();
                    break;
                case 4:
                    message.languages.push(Word_DetectedLanguage.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.entityIndex = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWord };
        message.languages = [];
        if (object.boundingBox !== undefined && object.boundingBox !== null) {
            message.boundingBox = Polygon.fromJSON(object.boundingBox);
        }
        else {
            message.boundingBox = undefined;
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        }
        else {
            message.text = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = Number(object.confidence);
        }
        else {
            message.confidence = 0;
        }
        if (object.languages !== undefined && object.languages !== null) {
            for (const e of object.languages) {
                message.languages.push(Word_DetectedLanguage.fromJSON(e));
            }
        }
        if (object.entityIndex !== undefined && object.entityIndex !== null) {
            message.entityIndex = Number(object.entityIndex);
        }
        else {
            message.entityIndex = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? Polygon.toJSON(message.boundingBox)
                : undefined);
        message.text !== undefined && (obj.text = message.text);
        message.confidence !== undefined &&
            (obj.confidence = message.confidence);
        if (message.languages) {
            obj.languages = message.languages.map((e) => e ? Word_DetectedLanguage.toJSON(e) : undefined);
        }
        else {
            obj.languages = [];
        }
        message.entityIndex !== undefined &&
            (obj.entityIndex = message.entityIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWord };
        message.languages = [];
        if (object.boundingBox !== undefined && object.boundingBox !== null) {
            message.boundingBox = Polygon.fromPartial(object.boundingBox);
        }
        else {
            message.boundingBox = undefined;
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        }
        else {
            message.text = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = object.confidence;
        }
        else {
            message.confidence = 0;
        }
        if (object.languages !== undefined && object.languages !== null) {
            for (const e of object.languages) {
                message.languages.push(Word_DetectedLanguage.fromPartial(e));
            }
        }
        if (object.entityIndex !== undefined && object.entityIndex !== null) {
            message.entityIndex = object.entityIndex;
        }
        else {
            message.entityIndex = 0;
        }
        return message;
    },
};
const baseWord_DetectedLanguage = { languageCode: '', confidence: 0 };
export const Word_DetectedLanguage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.languageCode !== '') {
            writer.uint32(10).string(message.languageCode);
        }
        if (message.confidence !== 0) {
            writer.uint32(17).double(message.confidence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWord_DetectedLanguage,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.languageCode = reader.string();
                    break;
                case 2:
                    message.confidence = reader.double();
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
            ...baseWord_DetectedLanguage,
        };
        if (object.languageCode !== undefined && object.languageCode !== null) {
            message.languageCode = String(object.languageCode);
        }
        else {
            message.languageCode = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = Number(object.confidence);
        }
        else {
            message.confidence = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.languageCode !== undefined &&
            (obj.languageCode = message.languageCode);
        message.confidence !== undefined &&
            (obj.confidence = message.confidence);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseWord_DetectedLanguage,
        };
        if (object.languageCode !== undefined && object.languageCode !== null) {
            message.languageCode = object.languageCode;
        }
        else {
            message.languageCode = '';
        }
        if (object.confidence !== undefined && object.confidence !== null) {
            message.confidence = object.confidence;
        }
        else {
            message.confidence = 0;
        }
        return message;
    },
};
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
