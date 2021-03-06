/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.elasticsearch.v1';

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

export enum AuthProvider_Type {
    TYPE_UNSPECIFIED = 0,
    NATIVE = 1,
    /**
     * SAML - OPENID = 3;
     * ANONYMOUS = 4;
     */
    SAML = 2,
    UNRECOGNIZED = -1,
}

export function authProvider_TypeFromJSON(object: any): AuthProvider_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return AuthProvider_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'NATIVE':
            return AuthProvider_Type.NATIVE;
        case 2:
        case 'SAML':
            return AuthProvider_Type.SAML;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AuthProvider_Type.UNRECOGNIZED;
    }
}

export function authProvider_TypeToJSON(object: AuthProvider_Type): string {
    switch (object) {
        case AuthProvider_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case AuthProvider_Type.NATIVE:
            return 'NATIVE';
        case AuthProvider_Type.SAML:
            return 'SAML';
        default:
            return 'UNKNOWN';
    }
}

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

const baseAuthProviders: object = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProviders',
};

export const AuthProviders = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProviders' as const,

    encode(
        message: AuthProviders,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.providers) {
            AuthProvider.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AuthProviders {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAuthProviders } as AuthProviders;
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(
                        AuthProvider.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AuthProviders {
        const message = { ...baseAuthProviders } as AuthProviders;
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(AuthProvider.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: AuthProviders): unknown {
        const obj: any = {};
        if (message.providers) {
            obj.providers = message.providers.map((e) =>
                e ? AuthProvider.toJSON(e) : undefined
            );
        } else {
            obj.providers = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<AuthProviders>): AuthProviders {
        const message = { ...baseAuthProviders } as AuthProviders;
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(AuthProvider.fromPartial(e));
            }
        }
        return message;
    },
};

messageTypeRegistry.set(AuthProviders.$type, AuthProviders);

const baseAuthProvider: object = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProvider',
    type: 0,
    name: '',
    order: 0,
    enabled: false,
    hidden: false,
    description: '',
    hint: '',
    icon: '',
};

export const AuthProvider = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.AuthProvider' as const,

    encode(
        message: AuthProvider,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.order !== 0) {
            writer.uint32(24).int64(message.order);
        }
        if (message.enabled === true) {
            writer.uint32(32).bool(message.enabled);
        }
        if (message.hidden === true) {
            writer.uint32(40).bool(message.hidden);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        if (message.hint !== '') {
            writer.uint32(58).string(message.hint);
        }
        if (message.icon !== '') {
            writer.uint32(66).string(message.icon);
        }
        if (message.saml !== undefined) {
            SamlSettings.encode(
                message.saml,
                writer.uint32(74).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AuthProvider {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAuthProvider } as AuthProvider;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.order = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.hidden = reader.bool();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.hint = reader.string();
                    break;
                case 8:
                    message.icon = reader.string();
                    break;
                case 9:
                    message.saml = SamlSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AuthProvider {
        const message = { ...baseAuthProvider } as AuthProvider;
        if (object.type !== undefined && object.type !== null) {
            message.type = authProvider_TypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = Number(object.order);
        } else {
            message.order = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.hidden !== undefined && object.hidden !== null) {
            message.hidden = Boolean(object.hidden);
        } else {
            message.hidden = false;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.hint !== undefined && object.hint !== null) {
            message.hint = String(object.hint);
        } else {
            message.hint = '';
        }
        if (object.icon !== undefined && object.icon !== null) {
            message.icon = String(object.icon);
        } else {
            message.icon = '';
        }
        if (object.saml !== undefined && object.saml !== null) {
            message.saml = SamlSettings.fromJSON(object.saml);
        } else {
            message.saml = undefined;
        }
        return message;
    },

    toJSON(message: AuthProvider): unknown {
        const obj: any = {};
        message.type !== undefined &&
            (obj.type = authProvider_TypeToJSON(message.type));
        message.name !== undefined && (obj.name = message.name);
        message.order !== undefined && (obj.order = message.order);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        message.description !== undefined &&
            (obj.description = message.description);
        message.hint !== undefined && (obj.hint = message.hint);
        message.icon !== undefined && (obj.icon = message.icon);
        message.saml !== undefined &&
            (obj.saml = message.saml
                ? SamlSettings.toJSON(message.saml)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<AuthProvider>): AuthProvider {
        const message = { ...baseAuthProvider } as AuthProvider;
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.order !== undefined && object.order !== null) {
            message.order = object.order;
        } else {
            message.order = 0;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.hidden !== undefined && object.hidden !== null) {
            message.hidden = object.hidden;
        } else {
            message.hidden = false;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.hint !== undefined && object.hint !== null) {
            message.hint = object.hint;
        } else {
            message.hint = '';
        }
        if (object.icon !== undefined && object.icon !== null) {
            message.icon = object.icon;
        } else {
            message.icon = '';
        }
        if (object.saml !== undefined && object.saml !== null) {
            message.saml = SamlSettings.fromPartial(object.saml);
        } else {
            message.saml = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(AuthProvider.$type, AuthProvider);

const baseSamlSettings: object = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.SamlSettings',
    idpEntityId: '',
    spEntityId: '',
    kibanaUrl: '',
    attributePrincipal: '',
    attributeGroups: '',
    attributeName: '',
    attributeEmail: '',
    attributeDn: '',
};

export const SamlSettings = {
    $type: 'yandex.cloud.mdb.elasticsearch.v1.SamlSettings' as const,

    encode(
        message: SamlSettings,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.idpEntityId !== '') {
            writer.uint32(10).string(message.idpEntityId);
        }
        if (message.idpMetadataFile.length !== 0) {
            writer.uint32(18).bytes(message.idpMetadataFile);
        }
        if (message.spEntityId !== '') {
            writer.uint32(26).string(message.spEntityId);
        }
        if (message.kibanaUrl !== '') {
            writer.uint32(34).string(message.kibanaUrl);
        }
        if (message.attributePrincipal !== '') {
            writer.uint32(42).string(message.attributePrincipal);
        }
        if (message.attributeGroups !== '') {
            writer.uint32(50).string(message.attributeGroups);
        }
        if (message.attributeName !== '') {
            writer.uint32(58).string(message.attributeName);
        }
        if (message.attributeEmail !== '') {
            writer.uint32(66).string(message.attributeEmail);
        }
        if (message.attributeDn !== '') {
            writer.uint32(74).string(message.attributeDn);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SamlSettings {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSamlSettings } as SamlSettings;
        message.idpMetadataFile = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idpEntityId = reader.string();
                    break;
                case 2:
                    message.idpMetadataFile = reader.bytes();
                    break;
                case 3:
                    message.spEntityId = reader.string();
                    break;
                case 4:
                    message.kibanaUrl = reader.string();
                    break;
                case 5:
                    message.attributePrincipal = reader.string();
                    break;
                case 6:
                    message.attributeGroups = reader.string();
                    break;
                case 7:
                    message.attributeName = reader.string();
                    break;
                case 8:
                    message.attributeEmail = reader.string();
                    break;
                case 9:
                    message.attributeDn = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SamlSettings {
        const message = { ...baseSamlSettings } as SamlSettings;
        message.idpMetadataFile = new Uint8Array();
        if (object.idpEntityId !== undefined && object.idpEntityId !== null) {
            message.idpEntityId = String(object.idpEntityId);
        } else {
            message.idpEntityId = '';
        }
        if (
            object.idpMetadataFile !== undefined &&
            object.idpMetadataFile !== null
        ) {
            message.idpMetadataFile = bytesFromBase64(object.idpMetadataFile);
        }
        if (object.spEntityId !== undefined && object.spEntityId !== null) {
            message.spEntityId = String(object.spEntityId);
        } else {
            message.spEntityId = '';
        }
        if (object.kibanaUrl !== undefined && object.kibanaUrl !== null) {
            message.kibanaUrl = String(object.kibanaUrl);
        } else {
            message.kibanaUrl = '';
        }
        if (
            object.attributePrincipal !== undefined &&
            object.attributePrincipal !== null
        ) {
            message.attributePrincipal = String(object.attributePrincipal);
        } else {
            message.attributePrincipal = '';
        }
        if (
            object.attributeGroups !== undefined &&
            object.attributeGroups !== null
        ) {
            message.attributeGroups = String(object.attributeGroups);
        } else {
            message.attributeGroups = '';
        }
        if (
            object.attributeName !== undefined &&
            object.attributeName !== null
        ) {
            message.attributeName = String(object.attributeName);
        } else {
            message.attributeName = '';
        }
        if (
            object.attributeEmail !== undefined &&
            object.attributeEmail !== null
        ) {
            message.attributeEmail = String(object.attributeEmail);
        } else {
            message.attributeEmail = '';
        }
        if (object.attributeDn !== undefined && object.attributeDn !== null) {
            message.attributeDn = String(object.attributeDn);
        } else {
            message.attributeDn = '';
        }
        return message;
    },

    toJSON(message: SamlSettings): unknown {
        const obj: any = {};
        message.idpEntityId !== undefined &&
            (obj.idpEntityId = message.idpEntityId);
        message.idpMetadataFile !== undefined &&
            (obj.idpMetadataFile = base64FromBytes(
                message.idpMetadataFile !== undefined
                    ? message.idpMetadataFile
                    : new Uint8Array()
            ));
        message.spEntityId !== undefined &&
            (obj.spEntityId = message.spEntityId);
        message.kibanaUrl !== undefined && (obj.kibanaUrl = message.kibanaUrl);
        message.attributePrincipal !== undefined &&
            (obj.attributePrincipal = message.attributePrincipal);
        message.attributeGroups !== undefined &&
            (obj.attributeGroups = message.attributeGroups);
        message.attributeName !== undefined &&
            (obj.attributeName = message.attributeName);
        message.attributeEmail !== undefined &&
            (obj.attributeEmail = message.attributeEmail);
        message.attributeDn !== undefined &&
            (obj.attributeDn = message.attributeDn);
        return obj;
    },

    fromPartial(object: DeepPartial<SamlSettings>): SamlSettings {
        const message = { ...baseSamlSettings } as SamlSettings;
        if (object.idpEntityId !== undefined && object.idpEntityId !== null) {
            message.idpEntityId = object.idpEntityId;
        } else {
            message.idpEntityId = '';
        }
        if (
            object.idpMetadataFile !== undefined &&
            object.idpMetadataFile !== null
        ) {
            message.idpMetadataFile = object.idpMetadataFile;
        } else {
            message.idpMetadataFile = new Uint8Array();
        }
        if (object.spEntityId !== undefined && object.spEntityId !== null) {
            message.spEntityId = object.spEntityId;
        } else {
            message.spEntityId = '';
        }
        if (object.kibanaUrl !== undefined && object.kibanaUrl !== null) {
            message.kibanaUrl = object.kibanaUrl;
        } else {
            message.kibanaUrl = '';
        }
        if (
            object.attributePrincipal !== undefined &&
            object.attributePrincipal !== null
        ) {
            message.attributePrincipal = object.attributePrincipal;
        } else {
            message.attributePrincipal = '';
        }
        if (
            object.attributeGroups !== undefined &&
            object.attributeGroups !== null
        ) {
            message.attributeGroups = object.attributeGroups;
        } else {
            message.attributeGroups = '';
        }
        if (
            object.attributeName !== undefined &&
            object.attributeName !== null
        ) {
            message.attributeName = object.attributeName;
        } else {
            message.attributeName = '';
        }
        if (
            object.attributeEmail !== undefined &&
            object.attributeEmail !== null
        ) {
            message.attributeEmail = object.attributeEmail;
        } else {
            message.attributeEmail = '';
        }
        if (object.attributeDn !== undefined && object.attributeDn !== null) {
            message.attributeDn = object.attributeDn;
        } else {
            message.attributeDn = '';
        }
        return message;
    },
};

messageTypeRegistry.set(SamlSettings.$type, SamlSettings);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
    globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
