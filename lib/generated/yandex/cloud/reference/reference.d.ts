import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.reference";
export interface Reference {
    referrer: Referrer | undefined;
    type: Reference_Type;
}
export declare enum Reference_Type {
    TYPE_UNSPECIFIED = 0,
    MANAGED_BY = 1,
    USED_BY = 2,
    UNRECOGNIZED = -1
}
export declare function reference_TypeFromJSON(object: any): Reference_Type;
export declare function reference_TypeToJSON(object: Reference_Type): string;
export interface Referrer {
    /**
     * `type = compute.instance, id = <instance id>`
     * * `type = compute.instanceGroup, id = <instanceGroup id>`
     * * `type = loadbalancer.networkLoadBalancer, id = <networkLoadBalancer id>`
     * * `type = managed-kubernetes.cluster, id = <cluster id>`
     * * `type = managed-mysql.cluster, id = <cluster id>`
     */
    type: string;
    id: string;
}
export declare const Reference: {
    encode(message: Reference, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Reference;
    fromJSON(object: any): Reference;
    toJSON(message: Reference): unknown;
    fromPartial(object: DeepPartial<Reference>): Reference;
};
export declare const Referrer: {
    encode(message: Referrer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Referrer;
    fromJSON(object: any): Referrer;
    toJSON(message: Referrer): unknown;
    fromPartial(object: DeepPartial<Referrer>): Referrer;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
