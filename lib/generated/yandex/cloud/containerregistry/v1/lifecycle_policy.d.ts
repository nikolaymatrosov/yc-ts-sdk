import { Duration } from '../../../../google/protobuf/duration';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface LifecyclePolicy {
    /** ID of the lifecycle policy. */
    id: string;
    /** Name of the lifecycle policy. */
    name: string;
    /**
     * ID of the repository that the lifecycle policy belongs to.
     * Required. The maximum string length in characters is 50.
     */
    repositoryId: string;
    /**
     * Description of the lifecycle policy.
     * The maximum string length in characters is 256.
     */
    description: string;
    /** Status of lifecycle policy. */
    status: LifecyclePolicy_Status;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** The rules of lifecycle policy. */
    rules: LifecycleRule[];
}
export declare enum LifecyclePolicy_Status {
    STATUS_UNSPECIFIED = 0,
    /** ACTIVE - Policy is active and regularly deletes Docker images according to the established rules. */
    ACTIVE = 1,
    /**
     * DISABLED - Policy is disabled and does not delete Docker images in the repository.
     * Policies in this status can be used for preparing and testing rules.
     */
    DISABLED = 2,
    UNRECOGNIZED = -1
}
export declare function lifecyclePolicy_StatusFromJSON(object: any): LifecyclePolicy_Status;
export declare function lifecyclePolicy_StatusToJSON(object: LifecyclePolicy_Status): string;
export interface LifecycleRule {
    /** Description of the lifecycle policy rule. */
    description: string;
    /**
     * Period of time for automatic deletion.
     * Period must be a multiple of 24 hours.
     */
    expirePeriod: Duration | undefined;
    /** Tag for specifying a filter in the form of a regular expression. */
    tagRegexp: string;
    /** Tag for applying the rule to Docker images without tags. */
    untagged: boolean;
    /** Number of Docker images (falling under the specified filter by tags) that must be left, even if the expire_period has already expired. */
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
