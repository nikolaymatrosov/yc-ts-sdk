/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.serverless.triggers.v1';
const basePredicate = {};
export const Predicate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.andPredicate !== undefined) {
            AndPredicate.encode(message.andPredicate, writer.uint32(18).fork()).ldelim();
        }
        if (message.fieldValuePredicate !== undefined) {
            FieldValuePredicate.encode(message.fieldValuePredicate, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePredicate };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.andPredicate = AndPredicate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.fieldValuePredicate = FieldValuePredicate.decode(reader, reader.uint32());
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
            message.andPredicate = AndPredicate.fromJSON(object.andPredicate);
        }
        else {
            message.andPredicate = undefined;
        }
        if (object.fieldValuePredicate !== undefined &&
            object.fieldValuePredicate !== null) {
            message.fieldValuePredicate = FieldValuePredicate.fromJSON(object.fieldValuePredicate);
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
                ? AndPredicate.toJSON(message.andPredicate)
                : undefined);
        message.fieldValuePredicate !== undefined &&
            (obj.fieldValuePredicate = message.fieldValuePredicate
                ? FieldValuePredicate.toJSON(message.fieldValuePredicate)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePredicate };
        if (object.andPredicate !== undefined && object.andPredicate !== null) {
            message.andPredicate = AndPredicate.fromPartial(object.andPredicate);
        }
        else {
            message.andPredicate = undefined;
        }
        if (object.fieldValuePredicate !== undefined &&
            object.fieldValuePredicate !== null) {
            message.fieldValuePredicate = FieldValuePredicate.fromPartial(object.fieldValuePredicate);
        }
        else {
            message.fieldValuePredicate = undefined;
        }
        return message;
    },
};
const baseAndPredicate = {};
export const AndPredicate = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.predicate) {
            Predicate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAndPredicate };
        message.predicate = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.predicate.push(Predicate.decode(reader, reader.uint32()));
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
                message.predicate.push(Predicate.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.predicate) {
            obj.predicate = message.predicate.map((e) => e ? Predicate.toJSON(e) : undefined);
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
                message.predicate.push(Predicate.fromPartial(e));
            }
        }
        return message;
    },
};
const baseFieldValuePredicate = { fieldPath: '' };
export const FieldValuePredicate = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
