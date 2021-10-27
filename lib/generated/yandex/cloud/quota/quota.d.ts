import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.quota";
export interface QuotaMetric {
    $type: 'yandex.cloud.quota.QuotaMetric';
    /** formatted as <domain>.<metric>.<unit>, e.g. mdb.hdd.size */
    name: string;
    limit: number;
    usage: number;
}
export interface MetricLimit {
    $type: 'yandex.cloud.quota.MetricLimit';
    name: string;
    limit: number;
}
export interface QuotaFailure {
    $type: 'yandex.cloud.quota.QuotaFailure';
    violations: QuotaFailure_Violation[];
}
export interface QuotaFailure_Violation {
    $type: 'yandex.cloud.quota.QuotaFailure.Violation';
    metric: QuotaMetric | undefined;
    /** new value for the MetricLimit.limit, so it is: old limit + delta */
    required: number;
}
export declare const QuotaMetric: {
    $type: "yandex.cloud.quota.QuotaMetric";
    encode(message: QuotaMetric, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuotaMetric;
    fromJSON(object: any): QuotaMetric;
    toJSON(message: QuotaMetric): unknown;
    fromPartial(object: DeepPartial<QuotaMetric>): QuotaMetric;
};
export declare const MetricLimit: {
    $type: "yandex.cloud.quota.MetricLimit";
    encode(message: MetricLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MetricLimit;
    fromJSON(object: any): MetricLimit;
    toJSON(message: MetricLimit): unknown;
    fromPartial(object: DeepPartial<MetricLimit>): MetricLimit;
};
export declare const QuotaFailure: {
    $type: "yandex.cloud.quota.QuotaFailure";
    encode(message: QuotaFailure, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuotaFailure;
    fromJSON(object: any): QuotaFailure;
    toJSON(message: QuotaFailure): unknown;
    fromPartial(object: DeepPartial<QuotaFailure>): QuotaFailure;
};
export declare const QuotaFailure_Violation: {
    $type: "yandex.cloud.quota.QuotaFailure.Violation";
    encode(message: QuotaFailure_Violation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuotaFailure_Violation;
    fromJSON(object: any): QuotaFailure_Violation;
    toJSON(message: QuotaFailure_Violation): unknown;
    fromPartial(object: DeepPartial<QuotaFailure_Violation>): QuotaFailure_Violation;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
