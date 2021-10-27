import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
export interface AuthProviders {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProviders';
    providers: AuthProvider[];
}
export interface AuthProvider {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProvider';
    type: AuthProvider_Type;
    name: string;
    order: number;
    enabled: boolean;
    /** selector ui settings */
    hidden: boolean;
    description: string;
    hint: string;
    icon: string;
    saml: SamlSettings | undefined;
}
export declare enum AuthProvider_Type {
    TYPE_UNSPECIFIED = 0,
    NATIVE = 1,
    /**
     * SAML - OPENID = 3;
     * ANONYMOUS = 4;
     */
    SAML = 2,
    UNRECOGNIZED = -1
}
export declare function authProvider_TypeFromJSON(object: any): AuthProvider_Type;
export declare function authProvider_TypeToJSON(object: AuthProvider_Type): string;
export interface SamlSettings {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.SamlSettings';
    idpEntityId: string;
    idpMetadataFile: Uint8Array;
    spEntityId: string;
    kibanaUrl: string;
    attributePrincipal: string;
    attributeGroups: string;
    attributeName: string;
    attributeEmail: string;
    attributeDn: string;
}
export declare const AuthProviders: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProviders";
    encode(message: AuthProviders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AuthProviders;
    fromJSON(object: any): AuthProviders;
    toJSON(message: AuthProviders): unknown;
    fromPartial(object: DeepPartial<AuthProviders>): AuthProviders;
};
export declare const AuthProvider: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProvider";
    encode(message: AuthProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AuthProvider;
    fromJSON(object: any): AuthProvider;
    toJSON(message: AuthProvider): unknown;
    fromPartial(object: DeepPartial<AuthProvider>): AuthProvider;
};
export declare const SamlSettings: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.SamlSettings";
    encode(message: SamlSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SamlSettings;
    fromJSON(object: any): SamlSettings;
    toJSON(message: SamlSettings): unknown;
    fromPartial(object: DeepPartial<SamlSettings>): SamlSettings;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
