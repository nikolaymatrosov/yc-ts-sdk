import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.cdn.v1";
/** An origin. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface Origin {
    /** ID of the origin. */
    id: number;
    /** ID of the parent origin group. */
    originGroupId: number;
    /**
     * IP address or Domain name of your origin and the port (if custom).
     * Used if [meta] variant is `common`.
     */
    source: string;
    /**
     * The setting allows to enable or disable an Origin source in the Origins group.
     *
     * It has two possible values:
     *
     * True - The origin is enabled and used as a source for the CDN. An origins
     * group must contain at least one enabled origin.
     * False - The origin is disabled and the CDN is not using it to pull content.
     */
    enabled: boolean;
    /**
     * Specifies whether the origin is used in its origin group as backup.
     * A backup origin is used when one of active origins becomes unavailable.
     */
    backup: boolean;
    /** Set up origin of the content. */
    meta: OriginMeta | undefined;
}
/** Origin parameters. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginParams {
    /** Source: IP address or Domain name of your origin and the port (if custom). */
    source: string;
    /**
     * The setting allows to enable or disable an Origin source in the Origins group.
     *
     * It has two possible values:
     *
     * True - The origin is enabled and used as a source for the CDN. An origins
     * group must contain at least one enabled origins. False - The origin is disabled
     * and the CDN is not using it to pull content.
     */
    enabled: boolean;
    /**
     * backup option has two possible values:
     *
     *   True - The option is active. The origin will not be used until one of
     *          active origins become unavailable.
     *   False - The option is disabled.
     */
    backup: boolean;
    /** Set up origin of the content. */
    meta: OriginMeta | undefined;
}
/** Origin type. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginMeta {
    /** A server with a domain name linked to it */
    common: OriginNamedMeta | undefined;
    /** A Yandex Object Storage bucket not configured as a static site hosting. */
    bucket: OriginNamedMeta | undefined;
    /** A Yandex Object Storage bucket configured as a static site hosting. */
    website: OriginNamedMeta | undefined;
    /**
     * An L7 load balancer from Yandex Application Load Balancer.
     * CDN servers will access the load balancer at one of its IP addresses that must be selected in the origin settings.
     */
    balancer: OriginBalancerMeta | undefined;
}
/** Origin info. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginNamedMeta {
    /** Name of the origin. */
    name: string;
}
/** Yandex Application Load Balancer origin info. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginBalancerMeta {
    /** ID of the origin. */
    id: string;
}
export declare const Origin: {
    encode(message: Origin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Origin;
    fromJSON(object: any): Origin;
    toJSON(message: Origin): unknown;
    fromPartial(object: DeepPartial<Origin>): Origin;
};
export declare const OriginParams: {
    encode(message: OriginParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OriginParams;
    fromJSON(object: any): OriginParams;
    toJSON(message: OriginParams): unknown;
    fromPartial(object: DeepPartial<OriginParams>): OriginParams;
};
export declare const OriginMeta: {
    encode(message: OriginMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OriginMeta;
    fromJSON(object: any): OriginMeta;
    toJSON(message: OriginMeta): unknown;
    fromPartial(object: DeepPartial<OriginMeta>): OriginMeta;
};
export declare const OriginNamedMeta: {
    encode(message: OriginNamedMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OriginNamedMeta;
    fromJSON(object: any): OriginNamedMeta;
    toJSON(message: OriginNamedMeta): unknown;
    fromPartial(object: DeepPartial<OriginNamedMeta>): OriginNamedMeta;
};
export declare const OriginBalancerMeta: {
    encode(message: OriginBalancerMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OriginBalancerMeta;
    fromJSON(object: any): OriginBalancerMeta;
    toJSON(message: OriginBalancerMeta): unknown;
    fromPartial(object: DeepPartial<OriginBalancerMeta>): OriginBalancerMeta;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
