import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.resourcemanager.v1";
/** A Cloud resource. For more information, see [Cloud](/docs/resource-manager/concepts/resources-hierarchy#cloud). */
export interface Cloud {
    /** ID of the cloud. */
    id: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Name of the cloud. 3-63 characters long. */
    name: string;
    /** Description of the cloud. 0-256 characters long. */
    description: string;
}
export declare const Cloud: {
    encode(message: Cloud, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cloud;
    fromJSON(object: any): Cloud;
    toJSON(message: Cloud): unknown;
    fromPartial(object: DeepPartial<Cloud>): Cloud;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
