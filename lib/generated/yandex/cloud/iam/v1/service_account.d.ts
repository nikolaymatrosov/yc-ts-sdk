import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iam.v1";
/** A ServiceAccount resource. For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts). */
export interface ServiceAccount {
    /** ID of the service account. */
    id: string;
    /** ID of the folder that the service account belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /**
     * Name of the service account.
     * The name is unique within the cloud. 3-63 characters long.
     */
    name: string;
    /** Description of the service account. 0-256 characters long. */
    description: string;
}
export declare const ServiceAccount: {
    encode(message: ServiceAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServiceAccount;
    fromJSON(object: any): ServiceAccount;
    toJSON(message: ServiceAccount): unknown;
    fromPartial(object: DeepPartial<ServiceAccount>): ServiceAccount;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
