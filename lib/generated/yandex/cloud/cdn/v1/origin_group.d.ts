import { Origin } from '../../../../yandex/cloud/cdn/v1/origin';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.cdn.v1";
/** Origin group parameters. For details about the concept, see [documentation](/docs/cdn/concepts/origins#groups). */
export interface OriginGroup {
    /** ID of the origin group. Generated at creation time. */
    id: number;
    /** ID of the folder that the origin group belongs to. */
    folderId: string;
    /** Name of the origin group. */
    name: string;
    /**
     * This option have two possible conditions:
     * true - the option is active. In case the origin responds with 4XX or 5XX codes,
     *        use the next origin from the list.
     * false - the option is disabled.
     */
    useNext: boolean;
    /** List of origins. */
    origins: Origin[];
}
export declare const OriginGroup: {
    encode(message: OriginGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OriginGroup;
    fromJSON(object: any): OriginGroup;
    toJSON(message: OriginGroup): unknown;
    fromPartial(object: DeepPartial<OriginGroup>): OriginGroup;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
