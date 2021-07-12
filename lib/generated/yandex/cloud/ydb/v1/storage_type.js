/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.ydb.v1';
const baseStorageType = { id: '', deviceType: '', redundancyType: '' };
export const StorageType = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.deviceType !== '') {
            writer.uint32(18).string(message.deviceType);
        }
        if (message.redundancyType !== '') {
            writer.uint32(26).string(message.redundancyType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStorageType };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.deviceType = reader.string();
                    break;
                case 3:
                    message.redundancyType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStorageType };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.deviceType !== undefined && object.deviceType !== null) {
            message.deviceType = String(object.deviceType);
        }
        else {
            message.deviceType = '';
        }
        if (object.redundancyType !== undefined &&
            object.redundancyType !== null) {
            message.redundancyType = String(object.redundancyType);
        }
        else {
            message.redundancyType = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.deviceType !== undefined &&
            (obj.deviceType = message.deviceType);
        message.redundancyType !== undefined &&
            (obj.redundancyType = message.redundancyType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStorageType };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.deviceType !== undefined && object.deviceType !== null) {
            message.deviceType = object.deviceType;
        }
        else {
            message.deviceType = '';
        }
        if (object.redundancyType !== undefined &&
            object.redundancyType !== null) {
            message.redundancyType = object.redundancyType;
        }
        else {
            message.redundancyType = '';
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
