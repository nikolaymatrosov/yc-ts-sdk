/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.marketplace.v1.metering';
export var RejectedUsageRecord_Reason;
(function (RejectedUsageRecord_Reason) {
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["REASON_UNSPECIFIED"] = 0] = "REASON_UNSPECIFIED";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["DUPLICATE"] = 1] = "DUPLICATE";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["EXPIRED"] = 2] = "EXPIRED";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["INVALID_TIMESTAMP"] = 3] = "INVALID_TIMESTAMP";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["INVALID_SKU_ID"] = 4] = "INVALID_SKU_ID";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["INVALID_PRODUCT_ID"] = 5] = "INVALID_PRODUCT_ID";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["INVALID_QUANTITY"] = 6] = "INVALID_QUANTITY";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["INVALID_ID"] = 7] = "INVALID_ID";
    RejectedUsageRecord_Reason[RejectedUsageRecord_Reason["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RejectedUsageRecord_Reason || (RejectedUsageRecord_Reason = {}));
export function rejectedUsageRecord_ReasonFromJSON(object) {
    switch (object) {
        case 0:
        case 'REASON_UNSPECIFIED':
            return RejectedUsageRecord_Reason.REASON_UNSPECIFIED;
        case 1:
        case 'DUPLICATE':
            return RejectedUsageRecord_Reason.DUPLICATE;
        case 2:
        case 'EXPIRED':
            return RejectedUsageRecord_Reason.EXPIRED;
        case 3:
        case 'INVALID_TIMESTAMP':
            return RejectedUsageRecord_Reason.INVALID_TIMESTAMP;
        case 4:
        case 'INVALID_SKU_ID':
            return RejectedUsageRecord_Reason.INVALID_SKU_ID;
        case 5:
        case 'INVALID_PRODUCT_ID':
            return RejectedUsageRecord_Reason.INVALID_PRODUCT_ID;
        case 6:
        case 'INVALID_QUANTITY':
            return RejectedUsageRecord_Reason.INVALID_QUANTITY;
        case 7:
        case 'INVALID_ID':
            return RejectedUsageRecord_Reason.INVALID_ID;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return RejectedUsageRecord_Reason.UNRECOGNIZED;
    }
}
export function rejectedUsageRecord_ReasonToJSON(object) {
    switch (object) {
        case RejectedUsageRecord_Reason.REASON_UNSPECIFIED:
            return 'REASON_UNSPECIFIED';
        case RejectedUsageRecord_Reason.DUPLICATE:
            return 'DUPLICATE';
        case RejectedUsageRecord_Reason.EXPIRED:
            return 'EXPIRED';
        case RejectedUsageRecord_Reason.INVALID_TIMESTAMP:
            return 'INVALID_TIMESTAMP';
        case RejectedUsageRecord_Reason.INVALID_SKU_ID:
            return 'INVALID_SKU_ID';
        case RejectedUsageRecord_Reason.INVALID_PRODUCT_ID:
            return 'INVALID_PRODUCT_ID';
        case RejectedUsageRecord_Reason.INVALID_QUANTITY:
            return 'INVALID_QUANTITY';
        case RejectedUsageRecord_Reason.INVALID_ID:
            return 'INVALID_ID';
        default:
            return 'UNKNOWN';
    }
}
const baseUsageRecord = { uuid: '', skuId: '', quantity: 0 };
export const UsageRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uuid !== '') {
            writer.uint32(10).string(message.uuid);
        }
        if (message.skuId !== '') {
            writer.uint32(18).string(message.skuId);
        }
        if (message.quantity !== 0) {
            writer.uint32(24).int64(message.quantity);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUsageRecord };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.skuId = reader.string();
                    break;
                case 3:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 4:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUsageRecord };
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = String(object.uuid);
        }
        else {
            message.uuid = '';
        }
        if (object.skuId !== undefined && object.skuId !== null) {
            message.skuId = String(object.skuId);
        }
        else {
            message.skuId = '';
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = Number(object.quantity);
        }
        else {
            message.quantity = 0;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromJsonTimestamp(object.timestamp);
        }
        else {
            message.timestamp = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.skuId !== undefined && (obj.skuId = message.skuId);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUsageRecord };
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = object.uuid;
        }
        else {
            message.uuid = '';
        }
        if (object.skuId !== undefined && object.skuId !== null) {
            message.skuId = object.skuId;
        }
        else {
            message.skuId = '';
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        else {
            message.quantity = 0;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = undefined;
        }
        return message;
    },
};
const baseAcceptedUsageRecord = { uuid: '' };
export const AcceptedUsageRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uuid !== '') {
            writer.uint32(10).string(message.uuid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAcceptedUsageRecord };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAcceptedUsageRecord };
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = String(object.uuid);
        }
        else {
            message.uuid = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.uuid !== undefined && (obj.uuid = message.uuid);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAcceptedUsageRecord };
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = object.uuid;
        }
        else {
            message.uuid = '';
        }
        return message;
    },
};
const baseRejectedUsageRecord = { uuid: '', reason: 0 };
export const RejectedUsageRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uuid !== '') {
            writer.uint32(10).string(message.uuid);
        }
        if (message.reason !== 0) {
            writer.uint32(16).int32(message.reason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRejectedUsageRecord };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRejectedUsageRecord };
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = String(object.uuid);
        }
        else {
            message.uuid = '';
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = rejectedUsageRecord_ReasonFromJSON(object.reason);
        }
        else {
            message.reason = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.reason !== undefined &&
            (obj.reason = rejectedUsageRecord_ReasonToJSON(message.reason));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRejectedUsageRecord };
        if (object.uuid !== undefined && object.uuid !== null) {
            message.uuid = object.uuid;
        }
        else {
            message.uuid = '';
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        else {
            message.reason = 0;
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
