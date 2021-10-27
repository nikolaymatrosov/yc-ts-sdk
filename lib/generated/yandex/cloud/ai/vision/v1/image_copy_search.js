"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyMatch = exports.ImageCopySearchAnnotation = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.ai.vision.v1';
const baseImageCopySearchAnnotation = {
    $type: 'yandex.cloud.ai.vision.v1.ImageCopySearchAnnotation',
    copyCount: 0,
};
exports.ImageCopySearchAnnotation = {
    $type: 'yandex.cloud.ai.vision.v1.ImageCopySearchAnnotation',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.copyCount !== 0) {
            writer.uint32(8).int64(message.copyCount);
        }
        for (const v of message.topResults) {
            exports.CopyMatch.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseImageCopySearchAnnotation,
        };
        message.topResults = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.copyCount = longToNumber(reader.int64());
                    break;
                case 2:
                    message.topResults.push(exports.CopyMatch.decode(reader, reader.uint32()));
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
            ...baseImageCopySearchAnnotation,
        };
        message.topResults = [];
        if (object.copyCount !== undefined && object.copyCount !== null) {
            message.copyCount = Number(object.copyCount);
        }
        else {
            message.copyCount = 0;
        }
        if (object.topResults !== undefined && object.topResults !== null) {
            for (const e of object.topResults) {
                message.topResults.push(exports.CopyMatch.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.copyCount !== undefined && (obj.copyCount = message.copyCount);
        if (message.topResults) {
            obj.topResults = message.topResults.map((e) => e ? exports.CopyMatch.toJSON(e) : undefined);
        }
        else {
            obj.topResults = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseImageCopySearchAnnotation,
        };
        message.topResults = [];
        if (object.copyCount !== undefined && object.copyCount !== null) {
            message.copyCount = object.copyCount;
        }
        else {
            message.copyCount = 0;
        }
        if (object.topResults !== undefined && object.topResults !== null) {
            for (const e of object.topResults) {
                message.topResults.push(exports.CopyMatch.fromPartial(e));
            }
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ImageCopySearchAnnotation.$type, exports.ImageCopySearchAnnotation);
const baseCopyMatch = {
    $type: 'yandex.cloud.ai.vision.v1.CopyMatch',
    imageUrl: '',
    pageUrl: '',
    title: '',
    description: '',
};
exports.CopyMatch = {
    $type: 'yandex.cloud.ai.vision.v1.CopyMatch',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageUrl !== '') {
            writer.uint32(10).string(message.imageUrl);
        }
        if (message.pageUrl !== '') {
            writer.uint32(18).string(message.pageUrl);
        }
        if (message.title !== '') {
            writer.uint32(26).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCopyMatch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageUrl = reader.string();
                    break;
                case 2:
                    message.pageUrl = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCopyMatch };
        if (object.imageUrl !== undefined && object.imageUrl !== null) {
            message.imageUrl = String(object.imageUrl);
        }
        else {
            message.imageUrl = '';
        }
        if (object.pageUrl !== undefined && object.pageUrl !== null) {
            message.pageUrl = String(object.pageUrl);
        }
        else {
            message.pageUrl = '';
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
        message.pageUrl !== undefined && (obj.pageUrl = message.pageUrl);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCopyMatch };
        if (object.imageUrl !== undefined && object.imageUrl !== null) {
            message.imageUrl = object.imageUrl;
        }
        else {
            message.imageUrl = '';
        }
        if (object.pageUrl !== undefined && object.pageUrl !== null) {
            message.pageUrl = object.pageUrl;
        }
        else {
            message.pageUrl = '';
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CopyMatch.$type, exports.CopyMatch);
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
