/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { Blob } from '../../../../yandex/cloud/containerregistry/v1/blob';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.containerregistry.v1';
const baseImage = {
    id: '',
    name: '',
    digest: '',
    compressedSize: 0,
    tags: '',
};
export const Image = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.digest !== '') {
            writer.uint32(26).string(message.digest);
        }
        if (message.compressedSize !== 0) {
            writer.uint32(32).int64(message.compressedSize);
        }
        if (message.config !== undefined) {
            Blob.encode(message.config, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.layers) {
            Blob.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.tags) {
            writer.uint32(58).string(v);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImage };
        message.layers = [];
        message.tags = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.digest = reader.string();
                    break;
                case 4:
                    message.compressedSize = longToNumber(reader.int64());
                    break;
                case 5:
                    message.config = Blob.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.layers.push(Blob.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.tags.push(reader.string());
                    break;
                case 8:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseImage };
        message.layers = [];
        message.tags = [];
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
        if (object.digest !== undefined && object.digest !== null) {
            message.digest = String(object.digest);
        }
        else {
            message.digest = '';
        }
        if (object.compressedSize !== undefined &&
            object.compressedSize !== null) {
            message.compressedSize = Number(object.compressedSize);
        }
        else {
            message.compressedSize = 0;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = Blob.fromJSON(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.layers !== undefined && object.layers !== null) {
            for (const e of object.layers) {
                message.layers.push(Blob.fromJSON(e));
            }
        }
        if (object.tags !== undefined && object.tags !== null) {
            for (const e of object.tags) {
                message.tags.push(String(e));
            }
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.digest !== undefined && (obj.digest = message.digest);
        message.compressedSize !== undefined &&
            (obj.compressedSize = message.compressedSize);
        message.config !== undefined &&
            (obj.config = message.config
                ? Blob.toJSON(message.config)
                : undefined);
        if (message.layers) {
            obj.layers = message.layers.map((e) => e ? Blob.toJSON(e) : undefined);
        }
        else {
            obj.layers = [];
        }
        if (message.tags) {
            obj.tags = message.tags.map((e) => e);
        }
        else {
            obj.tags = [];
        }
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseImage };
        message.layers = [];
        message.tags = [];
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
        if (object.digest !== undefined && object.digest !== null) {
            message.digest = object.digest;
        }
        else {
            message.digest = '';
        }
        if (object.compressedSize !== undefined &&
            object.compressedSize !== null) {
            message.compressedSize = object.compressedSize;
        }
        else {
            message.compressedSize = 0;
        }
        if (object.config !== undefined && object.config !== null) {
            message.config = Blob.fromPartial(object.config);
        }
        else {
            message.config = undefined;
        }
        if (object.layers !== undefined && object.layers !== null) {
            for (const e of object.layers) {
                message.layers.push(Blob.fromPartial(e));
            }
        }
        if (object.tags !== undefined && object.tags !== null) {
            for (const e of object.tags) {
                message.tags.push(e);
            }
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
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
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
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
