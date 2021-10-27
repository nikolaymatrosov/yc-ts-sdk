/* eslint-disable */
import { Duration } from '../../../../../google/protobuf/duration';
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.organizationmanager.v1.saml';

export enum BindingType {
    BINDING_TYPE_UNSPECIFIED = 0,
    /** POST - HTTP POST binding. */
    POST = 1,
    /** REDIRECT - HTTP redirect binding. */
    REDIRECT = 2,
    /** ARTIFACT - HTTP artifact binding. */
    ARTIFACT = 3,
    UNRECOGNIZED = -1,
}

export function bindingTypeFromJSON(object: any): BindingType {
    switch (object) {
        case 0:
        case 'BINDING_TYPE_UNSPECIFIED':
            return BindingType.BINDING_TYPE_UNSPECIFIED;
        case 1:
        case 'POST':
            return BindingType.POST;
        case 2:
        case 'REDIRECT':
            return BindingType.REDIRECT;
        case 3:
        case 'ARTIFACT':
            return BindingType.ARTIFACT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BindingType.UNRECOGNIZED;
    }
}

export function bindingTypeToJSON(object: BindingType): string {
    switch (object) {
        case BindingType.BINDING_TYPE_UNSPECIFIED:
            return 'BINDING_TYPE_UNSPECIFIED';
        case BindingType.POST:
            return 'POST';
        case BindingType.REDIRECT:
            return 'REDIRECT';
        case BindingType.ARTIFACT:
            return 'ARTIFACT';
        default:
            return 'UNKNOWN';
    }
}

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
    labels: { [key: string]: string };
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

const baseFederation: object = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.Federation',
    id: '',
    organizationId: '',
    name: '',
    description: '',
    autoCreateAccountOnLogin: false,
    issuer: '',
    ssoBinding: 0,
    ssoUrl: '',
    caseInsensitiveNameIds: false,
};

export const Federation = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.Federation' as const,

    encode(
        message: Federation,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== '') {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.cookieMaxAge !== undefined) {
            Duration.encode(
                message.cookieMaxAge,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.autoCreateAccountOnLogin === true) {
            writer.uint32(56).bool(message.autoCreateAccountOnLogin);
        }
        if (message.issuer !== '') {
            writer.uint32(66).string(message.issuer);
        }
        if (message.ssoBinding !== 0) {
            writer.uint32(72).int32(message.ssoBinding);
        }
        if (message.ssoUrl !== '') {
            writer.uint32(82).string(message.ssoUrl);
        }
        if (message.securitySettings !== undefined) {
            FederationSecuritySettings.encode(
                message.securitySettings,
                writer.uint32(90).fork()
            ).ldelim();
        }
        if (message.caseInsensitiveNameIds === true) {
            writer.uint32(96).bool(message.caseInsensitiveNameIds);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            Federation_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(106).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Federation {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFederation } as Federation;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 6:
                    message.cookieMaxAge = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.autoCreateAccountOnLogin = reader.bool();
                    break;
                case 8:
                    message.issuer = reader.string();
                    break;
                case 9:
                    message.ssoBinding = reader.int32() as any;
                    break;
                case 10:
                    message.ssoUrl = reader.string();
                    break;
                case 11:
                    message.securitySettings =
                        FederationSecuritySettings.decode(
                            reader,
                            reader.uint32()
                        );
                    break;
                case 12:
                    message.caseInsensitiveNameIds = reader.bool();
                    break;
                case 13:
                    const entry13 = Federation_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry13.value !== undefined) {
                        message.labels[entry13.key] = entry13.value;
                    }
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
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (
            object.organizationId !== undefined &&
            object.organizationId !== null
        ) {
            message.organizationId = String(object.organizationId);
        } else {
            message.organizationId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.cookieMaxAge !== undefined && object.cookieMaxAge !== null) {
            message.cookieMaxAge = Duration.fromJSON(object.cookieMaxAge);
        } else {
            message.cookieMaxAge = undefined;
        }
        if (
            object.autoCreateAccountOnLogin !== undefined &&
            object.autoCreateAccountOnLogin !== null
        ) {
            message.autoCreateAccountOnLogin = Boolean(
                object.autoCreateAccountOnLogin
            );
        } else {
            message.autoCreateAccountOnLogin = false;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        } else {
            message.issuer = '';
        }
        if (object.ssoBinding !== undefined && object.ssoBinding !== null) {
            message.ssoBinding = bindingTypeFromJSON(object.ssoBinding);
        } else {
            message.ssoBinding = 0;
        }
        if (object.ssoUrl !== undefined && object.ssoUrl !== null) {
            message.ssoUrl = String(object.ssoUrl);
        } else {
            message.ssoUrl = '';
        }
        if (
            object.securitySettings !== undefined &&
            object.securitySettings !== null
        ) {
            message.securitySettings = FederationSecuritySettings.fromJSON(
                object.securitySettings
            );
        } else {
            message.securitySettings = undefined;
        }
        if (
            object.caseInsensitiveNameIds !== undefined &&
            object.caseInsensitiveNameIds !== null
        ) {
            message.caseInsensitiveNameIds = Boolean(
                object.caseInsensitiveNameIds
            );
        } else {
            message.caseInsensitiveNameIds = false;
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        return message;
    },

    toJSON(message: Federation): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.cookieMaxAge !== undefined &&
            (obj.cookieMaxAge = message.cookieMaxAge
                ? Duration.toJSON(message.cookieMaxAge)
                : undefined);
        message.autoCreateAccountOnLogin !== undefined &&
            (obj.autoCreateAccountOnLogin = message.autoCreateAccountOnLogin);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.ssoBinding !== undefined &&
            (obj.ssoBinding = bindingTypeToJSON(message.ssoBinding));
        message.ssoUrl !== undefined && (obj.ssoUrl = message.ssoUrl);
        message.securitySettings !== undefined &&
            (obj.securitySettings = message.securitySettings
                ? FederationSecuritySettings.toJSON(message.securitySettings)
                : undefined);
        message.caseInsensitiveNameIds !== undefined &&
            (obj.caseInsensitiveNameIds = message.caseInsensitiveNameIds);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Federation>): Federation {
        const message = { ...baseFederation } as Federation;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (
            object.organizationId !== undefined &&
            object.organizationId !== null
        ) {
            message.organizationId = object.organizationId;
        } else {
            message.organizationId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.cookieMaxAge !== undefined && object.cookieMaxAge !== null) {
            message.cookieMaxAge = Duration.fromPartial(object.cookieMaxAge);
        } else {
            message.cookieMaxAge = undefined;
        }
        if (
            object.autoCreateAccountOnLogin !== undefined &&
            object.autoCreateAccountOnLogin !== null
        ) {
            message.autoCreateAccountOnLogin = object.autoCreateAccountOnLogin;
        } else {
            message.autoCreateAccountOnLogin = false;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        } else {
            message.issuer = '';
        }
        if (object.ssoBinding !== undefined && object.ssoBinding !== null) {
            message.ssoBinding = object.ssoBinding;
        } else {
            message.ssoBinding = 0;
        }
        if (object.ssoUrl !== undefined && object.ssoUrl !== null) {
            message.ssoUrl = object.ssoUrl;
        } else {
            message.ssoUrl = '';
        }
        if (
            object.securitySettings !== undefined &&
            object.securitySettings !== null
        ) {
            message.securitySettings = FederationSecuritySettings.fromPartial(
                object.securitySettings
            );
        } else {
            message.securitySettings = undefined;
        }
        if (
            object.caseInsensitiveNameIds !== undefined &&
            object.caseInsensitiveNameIds !== null
        ) {
            message.caseInsensitiveNameIds = object.caseInsensitiveNameIds;
        } else {
            message.caseInsensitiveNameIds = false;
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        return message;
    },
};

messageTypeRegistry.set(Federation.$type, Federation);

const baseFederation_LabelsEntry: object = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry',
    key: '',
    value: '',
};

export const Federation_LabelsEntry = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.Federation.LabelsEntry' as const,

    encode(
        message: Federation_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Federation_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFederation_LabelsEntry,
        } as Federation_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Federation_LabelsEntry {
        const message = {
            ...baseFederation_LabelsEntry,
        } as Federation_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: Federation_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Federation_LabelsEntry>
    ): Federation_LabelsEntry {
        const message = {
            ...baseFederation_LabelsEntry,
        } as Federation_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

messageTypeRegistry.set(Federation_LabelsEntry.$type, Federation_LabelsEntry);

const baseFederationSecuritySettings: object = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.FederationSecuritySettings',
    encryptedAssertions: false,
};

export const FederationSecuritySettings = {
    $type: 'yandex.cloud.organizationmanager.v1.saml.FederationSecuritySettings' as const,

    encode(
        message: FederationSecuritySettings,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.encryptedAssertions === true) {
            writer.uint32(8).bool(message.encryptedAssertions);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): FederationSecuritySettings {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFederationSecuritySettings,
        } as FederationSecuritySettings;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.encryptedAssertions = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FederationSecuritySettings {
        const message = {
            ...baseFederationSecuritySettings,
        } as FederationSecuritySettings;
        if (
            object.encryptedAssertions !== undefined &&
            object.encryptedAssertions !== null
        ) {
            message.encryptedAssertions = Boolean(object.encryptedAssertions);
        } else {
            message.encryptedAssertions = false;
        }
        return message;
    },

    toJSON(message: FederationSecuritySettings): unknown {
        const obj: any = {};
        message.encryptedAssertions !== undefined &&
            (obj.encryptedAssertions = message.encryptedAssertions);
        return obj;
    },

    fromPartial(
        object: DeepPartial<FederationSecuritySettings>
    ): FederationSecuritySettings {
        const message = {
            ...baseFederationSecuritySettings,
        } as FederationSecuritySettings;
        if (
            object.encryptedAssertions !== undefined &&
            object.encryptedAssertions !== null
        ) {
            message.encryptedAssertions = object.encryptedAssertions;
        } else {
            message.encryptedAssertions = false;
        }
        return message;
    },
};

messageTypeRegistry.set(
    FederationSecuritySettings.$type,
    FederationSecuritySettings
);

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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
