/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.quota';

export interface QuotaMetric {
    /** formatted as <domain>.<metric>.<unit>, e.g. mdb.hdd.size */
    name: string;
    limit: number;
    usage: number;
}

export interface MetricLimit {
    name: string;
    limit: number;
}

export interface QuotaFailure {
    violations: QuotaFailure_Violation[];
}

export interface QuotaFailure_Violation {
    metric: QuotaMetric | undefined;
    /** new value for the MetricLimit.limit, so it is: old limit + delta */
    required: number;
}

const baseQuotaMetric: object = { name: '', limit: 0, usage: 0 };

export const QuotaMetric = {
    encode(
        message: QuotaMetric,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaMetric {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuotaMetric } as QuotaMetric;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.limit = longToNumber(reader.int64() as Long);
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

    fromJSON(object: any): QuotaMetric {
        const message = { ...baseQuotaMetric } as QuotaMetric;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Number(object.limit);
        } else {
            message.limit = 0;
        }
        if (object.usage !== undefined && object.usage !== null) {
            message.usage = Number(object.usage);
        } else {
            message.usage = 0;
        }
        return message;
    },

    toJSON(message: QuotaMetric): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.limit !== undefined && (obj.limit = message.limit);
        message.usage !== undefined && (obj.usage = message.usage);
        return obj;
    },

    fromPartial(object: DeepPartial<QuotaMetric>): QuotaMetric {
        const message = { ...baseQuotaMetric } as QuotaMetric;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        } else {
            message.limit = 0;
        }
        if (object.usage !== undefined && object.usage !== null) {
            message.usage = object.usage;
        } else {
            message.usage = 0;
        }
        return message;
    },
};

const baseMetricLimit: object = { name: '', limit: 0 };

export const MetricLimit = {
    encode(
        message: MetricLimit,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.limit !== 0) {
            writer.uint32(16).int64(message.limit);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MetricLimit {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMetricLimit } as MetricLimit;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.limit = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MetricLimit {
        const message = { ...baseMetricLimit } as MetricLimit;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Number(object.limit);
        } else {
            message.limit = 0;
        }
        return message;
    },

    toJSON(message: MetricLimit): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.limit !== undefined && (obj.limit = message.limit);
        return obj;
    },

    fromPartial(object: DeepPartial<MetricLimit>): MetricLimit {
        const message = { ...baseMetricLimit } as MetricLimit;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        } else {
            message.limit = 0;
        }
        return message;
    },
};

const baseQuotaFailure: object = {};

export const QuotaFailure = {
    encode(
        message: QuotaFailure,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.violations) {
            QuotaFailure_Violation.encode(
                v!,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QuotaFailure {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuotaFailure } as QuotaFailure;
        message.violations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.violations.push(
                        QuotaFailure_Violation.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QuotaFailure {
        const message = { ...baseQuotaFailure } as QuotaFailure;
        message.violations = [];
        if (object.violations !== undefined && object.violations !== null) {
            for (const e of object.violations) {
                message.violations.push(QuotaFailure_Violation.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: QuotaFailure): unknown {
        const obj: any = {};
        if (message.violations) {
            obj.violations = message.violations.map((e) =>
                e ? QuotaFailure_Violation.toJSON(e) : undefined
            );
        } else {
            obj.violations = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<QuotaFailure>): QuotaFailure {
        const message = { ...baseQuotaFailure } as QuotaFailure;
        message.violations = [];
        if (object.violations !== undefined && object.violations !== null) {
            for (const e of object.violations) {
                message.violations.push(QuotaFailure_Violation.fromPartial(e));
            }
        }
        return message;
    },
};

const baseQuotaFailure_Violation: object = { required: 0 };

export const QuotaFailure_Violation = {
    encode(
        message: QuotaFailure_Violation,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.metric !== undefined) {
            QuotaMetric.encode(
                message.metric,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.required !== 0) {
            writer.uint32(16).int64(message.required);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): QuotaFailure_Violation {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuotaFailure_Violation,
        } as QuotaFailure_Violation;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metric = QuotaMetric.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.required = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QuotaFailure_Violation {
        const message = {
            ...baseQuotaFailure_Violation,
        } as QuotaFailure_Violation;
        if (object.metric !== undefined && object.metric !== null) {
            message.metric = QuotaMetric.fromJSON(object.metric);
        } else {
            message.metric = undefined;
        }
        if (object.required !== undefined && object.required !== null) {
            message.required = Number(object.required);
        } else {
            message.required = 0;
        }
        return message;
    },

    toJSON(message: QuotaFailure_Violation): unknown {
        const obj: any = {};
        message.metric !== undefined &&
            (obj.metric = message.metric
                ? QuotaMetric.toJSON(message.metric)
                : undefined);
        message.required !== undefined && (obj.required = message.required);
        return obj;
    },

    fromPartial(
        object: DeepPartial<QuotaFailure_Violation>
    ): QuotaFailure_Violation {
        const message = {
            ...baseQuotaFailure_Violation,
        } as QuotaFailure_Violation;
        if (object.metric !== undefined && object.metric !== null) {
            message.metric = QuotaMetric.fromPartial(object.metric);
        } else {
            message.metric = undefined;
        }
        if (object.required !== undefined && object.required !== null) {
            message.required = object.required;
        } else {
            message.required = 0;
        }
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}