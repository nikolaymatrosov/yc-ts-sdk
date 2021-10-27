import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iam.v1.awscompatibility";
/**
 * An access key.
 * For more information, see [AWS-compatible access keys](/docs/iam/concepts/authorization/access-key).
 */
export interface AccessKey {
    $type: 'yandex.cloud.iam.v1.awscompatibility.AccessKey';
    /**
     * ID of the AccessKey resource.
     * It is used to manage secret credentials: an access key ID and a secret access key.
     */
    id: string;
    /** ID of the service account that the access key belongs to. */
    serviceAccountId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Description of the access key. 0-256 characters long. */
    description: string;
    /**
     * ID of the access key.
     * The key is AWS compatible.
     */
    keyId: string;
}
export declare const AccessKey: {
    $type: "yandex.cloud.iam.v1.awscompatibility.AccessKey";
    encode(message: AccessKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AccessKey;
    fromJSON(object: any): AccessKey;
    toJSON(message: AccessKey): unknown;
    fromPartial(object: DeepPartial<AccessKey>): AccessKey;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
