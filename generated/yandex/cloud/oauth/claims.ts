/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.oauth';

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

const baseSubjectClaims: object = {
    sub: '',
    name: '',
    givenName: '',
    familyName: '',
    preferredUsername: '',
    picture: '',
    email: '',
    zoneinfo: '',
    locale: '',
    phoneNumber: '',
};

export const SubjectClaims = {
    encode(
        message: SubjectClaims,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sub !== '') {
            writer.uint32(10).string(message.sub);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.givenName !== '') {
            writer.uint32(26).string(message.givenName);
        }
        if (message.familyName !== '') {
            writer.uint32(34).string(message.familyName);
        }
        if (message.preferredUsername !== '') {
            writer.uint32(58).string(message.preferredUsername);
        }
        if (message.picture !== '') {
            writer.uint32(74).string(message.picture);
        }
        if (message.email !== '') {
            writer.uint32(90).string(message.email);
        }
        if (message.zoneinfo !== '') {
            writer.uint32(122).string(message.zoneinfo);
        }
        if (message.locale !== '') {
            writer.uint32(130).string(message.locale);
        }
        if (message.phoneNumber !== '') {
            writer.uint32(138).string(message.phoneNumber);
        }
        if (message.federation !== undefined) {
            Federation.encode(
                message.federation,
                writer.uint32(802).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SubjectClaims {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSubjectClaims } as SubjectClaims;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sub = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.givenName = reader.string();
                    break;
                case 4:
                    message.familyName = reader.string();
                    break;
                case 7:
                    message.preferredUsername = reader.string();
                    break;
                case 9:
                    message.picture = reader.string();
                    break;
                case 11:
                    message.email = reader.string();
                    break;
                case 15:
                    message.zoneinfo = reader.string();
                    break;
                case 16:
                    message.locale = reader.string();
                    break;
                case 17:
                    message.phoneNumber = reader.string();
                    break;
                case 100:
                    message.federation = Federation.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SubjectClaims {
        const message = { ...baseSubjectClaims } as SubjectClaims;
        if (object.sub !== undefined && object.sub !== null) {
            message.sub = String(object.sub);
        } else {
            message.sub = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.givenName !== undefined && object.givenName !== null) {
            message.givenName = String(object.givenName);
        } else {
            message.givenName = '';
        }
        if (object.familyName !== undefined && object.familyName !== null) {
            message.familyName = String(object.familyName);
        } else {
            message.familyName = '';
        }
        if (
            object.preferredUsername !== undefined &&
            object.preferredUsername !== null
        ) {
            message.preferredUsername = String(object.preferredUsername);
        } else {
            message.preferredUsername = '';
        }
        if (object.picture !== undefined && object.picture !== null) {
            message.picture = String(object.picture);
        } else {
            message.picture = '';
        }
        if (object.email !== undefined && object.email !== null) {
            message.email = String(object.email);
        } else {
            message.email = '';
        }
        if (object.zoneinfo !== undefined && object.zoneinfo !== null) {
            message.zoneinfo = String(object.zoneinfo);
        } else {
            message.zoneinfo = '';
        }
        if (object.locale !== undefined && object.locale !== null) {
            message.locale = String(object.locale);
        } else {
            message.locale = '';
        }
        if (object.phoneNumber !== undefined && object.phoneNumber !== null) {
            message.phoneNumber = String(object.phoneNumber);
        } else {
            message.phoneNumber = '';
        }
        if (object.federation !== undefined && object.federation !== null) {
            message.federation = Federation.fromJSON(object.federation);
        } else {
            message.federation = undefined;
        }
        return message;
    },

    toJSON(message: SubjectClaims): unknown {
        const obj: any = {};
        message.sub !== undefined && (obj.sub = message.sub);
        message.name !== undefined && (obj.name = message.name);
        message.givenName !== undefined && (obj.givenName = message.givenName);
        message.familyName !== undefined &&
            (obj.familyName = message.familyName);
        message.preferredUsername !== undefined &&
            (obj.preferredUsername = message.preferredUsername);
        message.picture !== undefined && (obj.picture = message.picture);
        message.email !== undefined && (obj.email = message.email);
        message.zoneinfo !== undefined && (obj.zoneinfo = message.zoneinfo);
        message.locale !== undefined && (obj.locale = message.locale);
        message.phoneNumber !== undefined &&
            (obj.phoneNumber = message.phoneNumber);
        message.federation !== undefined &&
            (obj.federation = message.federation
                ? Federation.toJSON(message.federation)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<SubjectClaims>): SubjectClaims {
        const message = { ...baseSubjectClaims } as SubjectClaims;
        if (object.sub !== undefined && object.sub !== null) {
            message.sub = object.sub;
        } else {
            message.sub = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.givenName !== undefined && object.givenName !== null) {
            message.givenName = object.givenName;
        } else {
            message.givenName = '';
        }
        if (object.familyName !== undefined && object.familyName !== null) {
            message.familyName = object.familyName;
        } else {
            message.familyName = '';
        }
        if (
            object.preferredUsername !== undefined &&
            object.preferredUsername !== null
        ) {
            message.preferredUsername = object.preferredUsername;
        } else {
            message.preferredUsername = '';
        }
        if (object.picture !== undefined && object.picture !== null) {
            message.picture = object.picture;
        } else {
            message.picture = '';
        }
        if (object.email !== undefined && object.email !== null) {
            message.email = object.email;
        } else {
            message.email = '';
        }
        if (object.zoneinfo !== undefined && object.zoneinfo !== null) {
            message.zoneinfo = object.zoneinfo;
        } else {
            message.zoneinfo = '';
        }
        if (object.locale !== undefined && object.locale !== null) {
            message.locale = object.locale;
        } else {
            message.locale = '';
        }
        if (object.phoneNumber !== undefined && object.phoneNumber !== null) {
            message.phoneNumber = object.phoneNumber;
        } else {
            message.phoneNumber = '';
        }
        if (object.federation !== undefined && object.federation !== null) {
            message.federation = Federation.fromPartial(object.federation);
        } else {
            message.federation = undefined;
        }
        return message;
    },
};

const baseFederation: object = { id: '', name: '' };

export const Federation = {
    encode(
        message: Federation,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Federation {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFederation } as Federation;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Federation {
        const message = { ...baseFederation } as Federation;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        return message;
    },

    toJSON(message: Federation): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial(object: DeepPartial<Federation>): Federation {
        const message = { ...baseFederation } as Federation;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        return message;
    },
};

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
