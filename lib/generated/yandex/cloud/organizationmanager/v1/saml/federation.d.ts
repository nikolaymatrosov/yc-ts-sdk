import { Duration } from '../../../../../google/protobuf/duration';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1.saml";
export declare enum BindingType {
    BINDING_TYPE_UNSPECIFIED = 0,
    /** POST - HTTP POST binding. */
    POST = 1,
    /** REDIRECT - HTTP redirect binding. */
    REDIRECT = 2,
    /** ARTIFACT - HTTP artifact binding. */
    ARTIFACT = 3,
    UNRECOGNIZED = -1
}
export declare function bindingTypeFromJSON(object: any): BindingType;
export declare function bindingTypeToJSON(object: BindingType): string;
/**
 * A federation.
 * For more information, see [SAML-compatible identity federations](/docs/iam/concepts/users/identity-federations).
 */
export interface Federation {
    $type: 'yandex.cloud.organizationmanager.v1.saml.Federation';
    /** ID of the federation. */
    id: string;
    /** ID of the organization that the federation belongs to. */
    organizationId: string;
    /** Name of the federation. */
    name: string;
    /** Description of the federation. */
    description: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /**
     * Browser cookie lifetime in seconds.
     * If the cookie is still valid, the management console
     * authenticates the user immediately and redirects them to the home page.
     */
    cookieMaxAge: Duration | undefined;
    /**
     * Add new users automatically on successful authentication.
     * The user becomes member of the organization automatically,
     * but you need to grant other roles to them.
     *
     * If the value is `false`, users who aren't added to the organization
     * can't log in, even if they have authenticated on your server.
     */
    autoCreateAccountOnLogin: boolean;
    /**
     * ID of the IdP server to be used for authentication.
     * The IdP server also responds to IAM with this ID after the user authenticates.
     */
    issuer: string;
    /**
     * Single sign-on endpoint binding type. Most Identity Providers support the `POST` binding type.
     *
     * SAML Binding is a mapping of a SAML protocol message onto standard messaging
     * formats and/or communications protocols.
     */
    ssoBinding: BindingType;
    /**
     * Single sign-on endpoint URL.
     * Specify the link to the IdP login page here.
     */
    ssoUrl: string;
    /** Federation security settings. */
    securitySettings: FederationSecuritySettings | undefined;
    /** Use case insensitive Name IDs. */
    caseInsensitiveNameIds: boolean;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
}
export interface Federation_LabelsEntry {
    $type: 'yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry';
    key: string;
    value: string;
}
/** Federation security settings. */
export interface FederationSecuritySettings {
    $type: 'yandex.cloud.organizationmanager.v1.saml.FederationSecuritySettings';
    /** Enable encrypted assertions. */
    encryptedAssertions: boolean;
}
export declare const Federation: {
    $type: "yandex.cloud.organizationmanager.v1.saml.Federation";
    encode(message: Federation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Federation;
    fromJSON(object: any): Federation;
    toJSON(message: Federation): unknown;
    fromPartial(object: DeepPartial<Federation>): Federation;
};
export declare const Federation_LabelsEntry: {
    $type: "yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry";
    encode(message: Federation_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Federation_LabelsEntry;
    fromJSON(object: any): Federation_LabelsEntry;
    toJSON(message: Federation_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<Federation_LabelsEntry>): Federation_LabelsEntry;
};
export declare const FederationSecuritySettings: {
    $type: "yandex.cloud.organizationmanager.v1.saml.FederationSecuritySettings";
    encode(message: FederationSecuritySettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FederationSecuritySettings;
    fromJSON(object: any): FederationSecuritySettings;
    toJSON(message: FederationSecuritySettings): unknown;
    fromPartial(object: DeepPartial<FederationSecuritySettings>): FederationSecuritySettings;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
