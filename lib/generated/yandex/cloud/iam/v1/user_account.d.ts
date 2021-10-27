import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iam.v1";
/** Currently represents only [Yandex.Passport account](/docs/iam/concepts/#passport). */
export interface UserAccount {
    $type: 'yandex.cloud.iam.v1.UserAccount';
    /** ID of the user account. */
    id: string;
    /** A YandexPassportUserAccount resource. */
    yandexPassportUserAccount: YandexPassportUserAccount | undefined;
    /** A SAML federated user. */
    samlUserAccount: SamlUserAccount | undefined;
}
/**
 * A YandexPassportUserAccount resource.
 * For more information, see [Yandex.Passport account](/docs/iam/concepts/#passport).
 */
export interface YandexPassportUserAccount {
    $type: 'yandex.cloud.iam.v1.YandexPassportUserAccount';
    /** Login of the Yandex.Passport user account. */
    login: string;
    /** Default email of the Yandex.Passport user account. */
    defaultEmail: string;
}
/**
 * A SAML federated user.
 * For more information, see [federations](/docs/iam/concepts/users/saml-federations).
 */
export interface SamlUserAccount {
    $type: 'yandex.cloud.iam.v1.SamlUserAccount';
    /** ID of the federation that the federation belongs to. */
    federationId: string;
    /**
     * Name Id of the SAML federated user.
     * The name is unique within the federation. 1-256 characters long.
     */
    nameId: string;
    /** Additional attributes of the SAML federated user. */
    attributes: {
        [key: string]: SamlUserAccount_Attribute;
    };
}
export interface SamlUserAccount_Attribute {
    $type: 'yandex.cloud.iam.v1.SamlUserAccount.Attribute';
    value: string[];
}
export interface SamlUserAccount_AttributesEntry {
    $type: 'yandex.cloud.iam.v1.SamlUserAccount.AttributesEntry';
    key: string;
    value: SamlUserAccount_Attribute | undefined;
}
export declare const UserAccount: {
    $type: "yandex.cloud.iam.v1.UserAccount";
    encode(message: UserAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserAccount;
    fromJSON(object: any): UserAccount;
    toJSON(message: UserAccount): unknown;
    fromPartial(object: DeepPartial<UserAccount>): UserAccount;
};
export declare const YandexPassportUserAccount: {
    $type: "yandex.cloud.iam.v1.YandexPassportUserAccount";
    encode(message: YandexPassportUserAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): YandexPassportUserAccount;
    fromJSON(object: any): YandexPassportUserAccount;
    toJSON(message: YandexPassportUserAccount): unknown;
    fromPartial(object: DeepPartial<YandexPassportUserAccount>): YandexPassportUserAccount;
};
export declare const SamlUserAccount: {
    $type: "yandex.cloud.iam.v1.SamlUserAccount";
    encode(message: SamlUserAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SamlUserAccount;
    fromJSON(object: any): SamlUserAccount;
    toJSON(message: SamlUserAccount): unknown;
    fromPartial(object: DeepPartial<SamlUserAccount>): SamlUserAccount;
};
export declare const SamlUserAccount_Attribute: {
    $type: "yandex.cloud.iam.v1.SamlUserAccount.Attribute";
    encode(message: SamlUserAccount_Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SamlUserAccount_Attribute;
    fromJSON(object: any): SamlUserAccount_Attribute;
    toJSON(message: SamlUserAccount_Attribute): unknown;
    fromPartial(object: DeepPartial<SamlUserAccount_Attribute>): SamlUserAccount_Attribute;
};
export declare const SamlUserAccount_AttributesEntry: {
    $type: "yandex.cloud.iam.v1.SamlUserAccount.AttributesEntry";
    encode(message: SamlUserAccount_AttributesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SamlUserAccount_AttributesEntry;
    fromJSON(object: any): SamlUserAccount_AttributesEntry;
    toJSON(message: SamlUserAccount_AttributesEntry): unknown;
    fromPartial(object: DeepPartial<SamlUserAccount_AttributesEntry>): SamlUserAccount_AttributesEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
