import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iam.v1";
/** An ApiKey resource. */
export interface ApiKey {
    $type: 'yandex.cloud.iam.v1.ApiKey';
    /** ID of the API Key. */
    id: string;
    /** ID of the service account that the API key belongs to. */
    serviceAccountId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Description of the API key. 0-256 characters long. */
    description: string;
}
export declare const ApiKey: {
    $type: "yandex.cloud.iam.v1.ApiKey";
    encode(message: ApiKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApiKey;
    fromJSON(object: any): ApiKey;
    toJSON(message: ApiKey): unknown;
    fromPartial(object: DeepPartial<ApiKey>): ApiKey;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
