/* eslint-disable */
import { Any } from '../../google/protobuf/any';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'google.rpc';
const baseStatus = { code: 0, message: '' };
export const Status = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.message !== '') {
            writer.uint32(18).string(message.message);
        }
        for (const v of message.details) {
            Any.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStatus };
        message.details = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.details.push(Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStatus };
        message.details = [];
        if (object.code !== undefined && object.code !== null) {
            message.code = Number(object.code);
        }
        else {
            message.code = 0;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = '';
        }
        if (object.details !== undefined && object.details !== null) {
            for (const e of object.details) {
                message.details.push(Any.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.message !== undefined && (obj.message = message.message);
        if (message.details) {
            obj.details = message.details.map((e) => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.details = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStatus };
        message.details = [];
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = 0;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = '';
        }
        if (object.details !== undefined && object.details !== null) {
            for (const e of object.details) {
                message.details.push(Any.fromPartial(e));
            }
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
