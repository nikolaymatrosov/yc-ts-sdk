import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.oauth";
/** Claims representation, see https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims for details. */
export interface SubjectClaims {
    /** Subject - Identifier for the End-User at the Issuer. */
    sub: string;
    /** End-User's full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User's locale and preferences. */
    name: string;
    /** Given name(s) or first name(s) of the End-User. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters. */
    givenName: string;
    /** Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters. */
    familyName: string;
    /**
     * Shorthand name by which the End-User wishes to be referred to at the RP, such as janedoe or j.doe.
     * This value MAY be any valid JSON string including special characters such as @, /, or whitespace. The RP MUST NOT rely upon this value being unique, as discussed in Section 5.7.
     */
    preferredUsername: string;
    /**
     * URL of the End-User's profile picture. This URL MUST refer to an image file (for example, a PNG, JPEG, or GIF image file),
     * rather than to a Web page containing an image. Note that this URL SHOULD specifically reference a profile photo of the End-User suitable for displaying when describing the End-User, rather than an arbitrary photo taken by the End-User.
     */
    picture: string;
    /**
     * End-User's preferred e-mail address. Its value MUST conform to the RFC 5322 [RFC5322] addr-spec syntax.
     * The RP MUST NOT rely upon this value being unique, as discussed in Section 5.7.
     */
    email: string;
    /** String from zoneinfo [zoneinfo] time zone database representing the End-User's time zone. For example, Europe/Paris or America/Los_Angeles. */
    zoneinfo: string;
    /**
     * End-User's locale, represented as a BCP47 [RFC5646] language tag. This is typically an ISO 639-1 Alpha-2 [ISO639-1] language code in lowercase and an ISO 3166-1 Alpha-2 [ISO3166-1] country code in uppercase, separated by a dash.
     * For example, en-US or fr-CA. As a compatibility note, some implementations have used an underscore as the separator rather than a dash, for example, en_US; Relying Parties MAY choose to accept this locale syntax as well.
     */
    locale: string;
    /**
     * End-User's preferred telephone number. E.164 [E.164] is RECOMMENDED as the format of this Claim, for example, +1 (425) 555-1212 or +56 (2) 687 2400.
     * If the phone number contains an extension, it is RECOMMENDED that the extension be represented using the RFC 3966 [RFC3966] extension syntax, for example, +1 (604) 555-1234;ext=5678.
     */
    phoneNumber: string;
    /** User federation, non-empty only for federated users. */
    federation: Federation | undefined;
}
/** Minimalistic analog of yandex.cloud.organizationmanager.v1.saml.Federation */
export interface Federation {
    /** ID of the federation. */
    id: string;
    /** Name of the federation. The name is unique within the cloud or organization */
    name: string;
}
export declare const SubjectClaims: {
    encode(message: SubjectClaims, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubjectClaims;
    fromJSON(object: any): SubjectClaims;
    toJSON(message: SubjectClaims): unknown;
    fromPartial(object: DeepPartial<SubjectClaims>): SubjectClaims;
};
export declare const Federation: {
    encode(message: Federation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Federation;
    fromJSON(object: any): Federation;
    toJSON(message: Federation): unknown;
    fromPartial(object: DeepPartial<Federation>): Federation;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
