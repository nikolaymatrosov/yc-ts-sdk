"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValuePredicate = exports.AndPredicate = exports.Predicate = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.serverless.triggers.v1';
const basePredicate = {};
exports.Predicate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.andPredicate !== undefined) {
            exports.AndPredicate.encode(message.andPredicate, writer.uint32(18).fork()).ldelim();
        }
        if (message.fieldValuePredicate !== undefined) {
            exports.FieldValuePredicate.encode(message.fieldValuePredicate, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePredicate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.andPredicate = exports.AndPredicate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.fieldValuePredicate = exports.FieldValuePredicate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePredicate };
        if (object.andPredicate !== undefined && object.andPredicate !== null) {
            message.andPredicate = exports.AndPredicate.fromJSON(object.andPredicate);
        }
        else {
            message.andPredicate = undefined;
        }
        if (object.fieldValuePredicate !== undefined &&
            object.fieldValuePredicate !== null) {
            message.fieldValuePredicate = exports.FieldValuePredicate.fromJSON(object.fieldValuePredicate);
        }
        else {
            message.fieldValuePredicate = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.andPredicate !== undefined &&
            (obj.andPredicate = message.andPredicate
                ? exports.AndPredicate.toJSON(message.andPredicate)
                : undefined);
        message.fieldValuePredicate !== undefined &&
            (obj.fieldValuePredicate = message.fieldValuePredicate
                ? exports.FieldValuePredicate.toJSON(message.fieldValuePredicate)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePredicate };
        if (object.andPredicate !== undefined && object.andPredicate !== null) {
            message.andPredicate = exports.AndPredicate.fromPartial(object.andPredicate);
        }
        else {
            message.andPredicate = undefined;
        }
        if (object.fieldValuePredicate !== undefined &&
            object.fieldValuePredicate !== null) {
            message.fieldValuePredicate = exports.FieldValuePredicate.fromPartial(object.fieldValuePredicate);
        }
        else {
            message.fieldValuePredicate = undefined;
        }
        return message;
    },
};
const baseAndPredicate = {};
exports.AndPredicate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.predicate) {
            exports.Predicate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAndPredicate };
        message.predicate = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.predicate.push(exports.Predicate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAndPredicate };
        message.predicate = [];
        if (object.predicate !== undefined && object.predicate !== null) {
            for (const e of object.predicate) {
                message.predicate.push(exports.Predicate.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.predicate) {
            obj.predicate = message.predicate.map((e) => e ? exports.Predicate.toJSON(e) : undefined);
        }
        else {
            obj.predicate = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAndPredicate };
        message.predicate = [];
        if (object.predicate !== undefined && object.predicate !== null) {
            for (const e of object.predicate) {
                message.predicate.push(exports.Predicate.fromPartial(e));
            }
        }
        return message;
    },
};
const baseFieldValuePredicate = { fieldPath: '' };
exports.FieldValuePredicate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fieldPath !== '') {
            writer.uint32(10).string(message.fieldPath);
        }
        if (message.exact !== undefined) {
            writer.uint32(26).string(message.exact);
        }
        if (message.prefix !== undefined) {
            writer.uint32(66).string(message.prefix);
        }
        if (message.suffix !== undefined) {
            writer.uint32(74).string(message.suffix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFieldValuePredicate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fieldPath = reader.string();
                    break;
                case 3:
                    message.exact = reader.string();
                    break;
                case 8:
                    message.prefix = reader.string();
                    break;
                case 9:
                    message.suffix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFieldValuePredicate };
        if (object.fieldPath !== undefined && object.fieldPath !== null) {
            message.fieldPath = String(object.fieldPath);
        }
        else {
            message.fieldPath = '';
        }
        if (object.exact !== undefined && object.exact !== null) {
            message.exact = String(object.exact);
        }
        else {
            message.exact = undefined;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = String(object.prefix);
        }
        else {
            message.prefix = undefined;
        }
        if (object.suffix !== undefined && object.suffix !== null) {
            message.suffix = String(object.suffix);
        }
        else {
            message.suffix = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fieldPath !== undefined && (obj.fieldPath = message.fieldPath);
        message.exact !== undefined && (obj.exact = message.exact);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.suffix !== undefined && (obj.suffix = message.suffix);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFieldValuePredicate };
        if (object.fieldPath !== undefined && object.fieldPath !== null) {
            message.fieldPath = object.fieldPath;
        }
        else {
            message.fieldPath = '';
        }
        if (object.exact !== undefined && object.exact !== null) {
            message.exact = object.exact;
        }
        else {
            message.exact = undefined;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = object.prefix;
        }
        else {
            message.prefix = undefined;
        }
        if (object.suffix !== undefined && object.suffix !== null) {
            message.suffix = object.suffix;
        }
        else {
            message.suffix = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
