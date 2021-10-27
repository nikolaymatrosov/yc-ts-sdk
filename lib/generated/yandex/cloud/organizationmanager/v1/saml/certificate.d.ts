import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1.saml";
/** A certificate. */
export interface Certificate {
    $type: 'yandex.cloud.organizationmanager.v1.saml.Certificate';
    /** ID of the certificate. */
    id: string;
    /** ID of the federation that the certificate belongs to. */
    federationId: string;
    /** Name of the certificate. */
    name: string;
    /** Description of the certificate. */
    description: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Certificate data in PEM format. */
    data: string;
}
export declare const Certificate: {
    $type: "yandex.cloud.organizationmanager.v1.saml.Certificate";
    encode(message: Certificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Certificate;
    fromJSON(object: any): Certificate;
    toJSON(message: Certificate): unknown;
    fromPartial(object: DeepPartial<Certificate>): Certificate;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
