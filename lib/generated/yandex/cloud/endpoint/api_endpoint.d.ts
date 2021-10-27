import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.endpoint";
export interface ApiEndpoint {
    $type: 'yandex.cloud.endpoint.ApiEndpoint';
    id: string;
    address: string;
}
export declare const ApiEndpoint: {
    $type: "yandex.cloud.endpoint.ApiEndpoint";
    encode(message: ApiEndpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApiEndpoint;
    fromJSON(object: any): ApiEndpoint;
    toJSON(message: ApiEndpoint): unknown;
    fromPartial(object: DeepPartial<ApiEndpoint>): ApiEndpoint;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
