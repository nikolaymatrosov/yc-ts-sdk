/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.billing.v1';
const baseBillableObject = { id: '', type: '' };
export const BillableObject = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBillableObject };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBillableObject };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBillableObject };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = '';
        }
        return message;
    },
};
const baseBillableObjectBinding = {};
export const BillableObjectBinding = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.effectiveTime !== undefined) {
            Timestamp.encode(toTimestamp(message.effectiveTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.billableObject !== undefined) {
            BillableObject.encode(message.billableObject, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBillableObjectBinding,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.billableObject = BillableObject.decode(reader, reader.uint32());
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
            ...baseBillableObjectBinding,
        };
        if (object.effectiveTime !== undefined &&
            object.effectiveTime !== null) {
            message.effectiveTime = fromJsonTimestamp(object.effectiveTime);
        }
        else {
            message.effectiveTime = undefined;
        }
        if (object.billableObject !== undefined &&
            object.billableObject !== null) {
            message.billableObject = BillableObject.fromJSON(object.billableObject);
        }
        else {
            message.billableObject = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveTime !== undefined &&
            (obj.effectiveTime = message.effectiveTime.toISOString());
        message.billableObject !== undefined &&
            (obj.billableObject = message.billableObject
                ? BillableObject.toJSON(message.billableObject)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseBillableObjectBinding,
        };
        if (object.effectiveTime !== undefined &&
            object.effectiveTime !== null) {
            message.effectiveTime = object.effectiveTime;
        }
        else {
            message.effectiveTime = undefined;
        }
        if (object.billableObject !== undefined &&
            object.billableObject !== null) {
            message.billableObject = BillableObject.fromPartial(object.billableObject);
        }
        else {
            message.billableObject = undefined;
        }
        return message;
    },
};
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
