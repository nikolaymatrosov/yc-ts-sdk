/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.quota';
const baseQuotaMetric = { name: '', limit: 0, usage: 0 };
export const QuotaMetric = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.limit !== 0) {
            writer.uint32(24).int64(message.limit);
        }
        if (message.usage !== 0) {
            writer.uint32(33).double(message.usage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuotaMetric };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.limit = longToNumber(reader.int64());
                    break;
                case 4:
                    message.usage = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQuotaMetric };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Number(object.limit);
        }
        else {
            message.limit = 0;
        }
        if (object.usage !== undefined && object.usage !== null) {
            message.usage = Number(object.usage);
        }
        else {
            message.usage = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.limit !== undefined && (obj.limit = message.limit);
        message.usage !== undefined && (obj.usage = message.usage);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQuotaMetric };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        else {
            message.limit = 0;
        }
        if (object.usage !== undefined && object.usage !== null) {
            message.usage = object.usage;
        }
        else {
            message.usage = 0;
        }
        return message;
    },
};
const baseMetricLimit = { name: '', limit: 0 };
export const MetricLimit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.limit !== 0) {
            writer.uint32(16).int64(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMetricLimit };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.limit = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMetricLimit };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Number(object.limit);
        }
        else {
            message.limit = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.limit !== undefined && (obj.limit = message.limit);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMetricLimit };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        else {
            message.limit = 0;
        }
        return message;
    },
};
const baseQuotaFailure = {};
export const QuotaFailure = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.violations) {
            QuotaFailure_Violation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuotaFailure };
        message.violations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.violations.push(QuotaFailure_Violation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQuotaFailure };
        message.violations = [];
        if (object.violations !== undefined && object.violations !== null) {
            for (const e of object.violations) {
                message.violations.push(QuotaFailure_Violation.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.violations) {
            obj.violations = message.violations.map((e) => e ? QuotaFailure_Violation.toJSON(e) : undefined);
        }
        else {
            obj.violations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQuotaFailure };
        message.violations = [];
        if (object.violations !== undefined && object.violations !== null) {
            for (const e of object.violations) {
                message.violations.push(QuotaFailure_Violation.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQuotaFailure_Violation = { required: 0 };
export const QuotaFailure_Violation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.metric !== undefined) {
            QuotaMetric.encode(message.metric, writer.uint32(10).fork()).ldelim();
        }
        if (message.required !== 0) {
            writer.uint32(16).int64(message.required);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuotaFailure_Violation,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metric = QuotaMetric.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.required = longToNumber(reader.int64());
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
            ...baseQuotaFailure_Violation,
        };
        if (object.metric !== undefined && object.metric !== null) {
            message.metric = QuotaMetric.fromJSON(object.metric);
        }
        else {
            message.metric = undefined;
        }
        if (object.required !== undefined && object.required !== null) {
            message.required = Number(object.required);
        }
        else {
            message.required = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.metric !== undefined &&
            (obj.metric = message.metric
                ? QuotaMetric.toJSON(message.metric)
                : undefined);
        message.required !== undefined && (obj.required = message.required);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuotaFailure_Violation,
        };
        if (object.metric !== undefined && object.metric !== null) {
            message.metric = QuotaMetric.fromPartial(object.metric);
        }
        else {
            message.metric = undefined;
        }
        if (object.required !== undefined && object.required !== null) {
            message.required = object.required;
        }
        else {
            message.required = 0;
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