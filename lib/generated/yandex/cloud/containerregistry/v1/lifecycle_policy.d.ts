import { Duration } from '../../../../google/protobuf/duration';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface LifecyclePolicy {
    id: string;
    name: string;
    repositoryId: string;
    description: string;
    status: LifecyclePolicy_Status;
    createdAt: Date | undefined;
    rules: LifecycleRule[];
}
export declare enum LifecyclePolicy_Status {
    STATUS_UNSPECIFIED = 0,
    ACTIVE = 1,
    DISABLED = 2,
    UNRECOGNIZED = -1
}
export declare function lifecyclePolicy_StatusFromJSON(object: any): LifecyclePolicy_Status;
export declare function lifecyclePolicy_StatusToJSON(object: LifecyclePolicy_Status): string;
export interface LifecycleRule {
    description: string;
    expirePeriod: Duration | undefined;
    tagRegexp: string;
    untagged: boolean;
    retainedTop: number;
}
export declare const LifecyclePolicy: {
    encode(message: LifecyclePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LifecyclePolicy;
    fromJSON(object: any): LifecyclePolicy;
    toJSON(message: LifecyclePolicy): unknown;
    fromPartial(object: DeepPartial<LifecyclePolicy>): LifecyclePolicy;
};
export declare const LifecycleRule: {
    encode(message: LifecycleRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LifecycleRule;
    fromJSON(object: any): LifecycleRule;
    toJSON(message: LifecycleRule): unknown;
    fromPartial(object: DeepPartial<LifecycleRule>): LifecycleRule;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
