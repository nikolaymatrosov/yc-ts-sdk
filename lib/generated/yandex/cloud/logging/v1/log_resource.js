/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.logging.v1';
const baseLogEntryResource = { type: '', id: '' };
export const LogEntryResource = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogEntryResource };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLogEntryResource };
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLogEntryResource };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        return message;
    },
};
const baseLogGroupResource = { type: '', ids: '' };
export const LogGroupResource = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.ids) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogGroupResource };
        message.ids = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.ids.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLogGroupResource };
        message.ids = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = '';
        }
        if (object.ids !== undefined && object.ids !== null) {
            for (const e of object.ids) {
                message.ids.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.ids) {
            obj.ids = message.ids.map((e) => e);
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLogGroupResource };
        message.ids = [];
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = '';
        }
        if (object.ids !== undefined && object.ids !== null) {
            for (const e of object.ids) {
                message.ids.push(e);
            }
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
