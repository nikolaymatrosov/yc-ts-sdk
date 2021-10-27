"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = exports.protobufPackage = void 0;
/* eslint-disable */
const any_1 = require("../../../google/protobuf/any");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const status_1 = require("../../../google/rpc/status");
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.operation';
const baseOperation = {
    $type: 'yandex.cloud.operation.Operation',
    id: '',
    description: '',
    createdBy: '',
    done: false,
};
exports.Operation = {
    $type: 'yandex.cloud.operation.Operation',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.createdBy !== '') {
            writer.uint32(34).string(message.createdBy);
        }
        if (message.modifiedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.modifiedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.done === true) {
            writer.uint32(48).bool(message.done);
        }
        if (message.metadata !== undefined) {
            any_1.Any.encode(message.metadata, writer.uint32(58).fork()).ldelim();
        }
        if (message.error !== undefined) {
            status_1.Status.encode(message.error, writer.uint32(66).fork()).ldelim();
        }
        if (message.response !== undefined) {
            any_1.Any.encode(message.response, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOperation };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.createdBy = reader.string();
                    break;
                case 5:
                    message.modifiedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.done = reader.bool();
                    break;
                case 7:
                    message.metadata = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.error = status_1.Status.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.response = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOperation };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        if (object.createdBy !== undefined && object.createdBy !== null) {
            message.createdBy = String(object.createdBy);
        }
        else {
            message.createdBy = '';
        }
        if (object.modifiedAt !== undefined && object.modifiedAt !== null) {
            message.modifiedAt = fromJsonTimestamp(object.modifiedAt);
        }
        else {
            message.modifiedAt = undefined;
        }
        if (object.done !== undefined && object.done !== null) {
            message.done = Boolean(object.done);
        }
        else {
            message.done = false;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = any_1.Any.fromJSON(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = status_1.Status.fromJSON(object.error);
        }
        else {
            message.error = undefined;
        }
        if (object.response !== undefined && object.response !== null) {
            message.response = any_1.Any.fromJSON(object.response);
        }
        else {
            message.response = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.createdBy !== undefined && (obj.createdBy = message.createdBy);
        message.modifiedAt !== undefined &&
            (obj.modifiedAt = message.modifiedAt.toISOString());
        message.done !== undefined && (obj.done = message.done);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? any_1.Any.toJSON(message.metadata)
                : undefined);
        message.error !== undefined &&
            (obj.error = message.error
                ? status_1.Status.toJSON(message.error)
                : undefined);
        message.response !== undefined &&
            (obj.response = message.response
                ? any_1.Any.toJSON(message.response)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOperation };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        if (object.createdBy !== undefined && object.createdBy !== null) {
            message.createdBy = object.createdBy;
        }
        else {
            message.createdBy = '';
        }
        if (object.modifiedAt !== undefined && object.modifiedAt !== null) {
            message.modifiedAt = object.modifiedAt;
        }
        else {
            message.modifiedAt = undefined;
        }
        if (object.done !== undefined && object.done !== null) {
            message.done = object.done;
        }
        else {
            message.done = false;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = any_1.Any.fromPartial(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = status_1.Status.fromPartial(object.error);
        }
        else {
            message.error = undefined;
        }
        if (object.response !== undefined && object.response !== null) {
            message.response = any_1.Any.fromPartial(object.response);
        }
        else {
            message.response = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Operation.$type, exports.Operation);
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
