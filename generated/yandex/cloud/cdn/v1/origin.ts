/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.cdn.v1';

/** An origin. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface Origin {
    /** ID of the origin. */
    id: number;
    /** ID of the parent origin group. */
    originGroupId: number;
    /**
     * IP address or Domain name of your origin and the port (if custom).
     * Used if [meta] variant is `common`.
     */
    source: string;
    /**
     * The setting allows to enable or disable an Origin source in the Origins group.
     *
     * It has two possible values:
     *
     * True - The origin is enabled and used as a source for the CDN. An origins
     * group must contain at least one enabled origin.
     * False - The origin is disabled and the CDN is not using it to pull content.
     */
    enabled: boolean;
    /**
     * Specifies whether the origin is used in its origin group as backup.
     * A backup origin is used when one of active origins becomes unavailable.
     */
    backup: boolean;
    /** Set up origin of the content. */
    meta: OriginMeta | undefined;
}

/** Origin parameters. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginParams {
    /** Source: IP address or Domain name of your origin and the port (if custom). */
    source: string;
    /**
     * The setting allows to enable or disable an Origin source in the Origins group.
     *
     * It has two possible values:
     *
     * True - The origin is enabled and used as a source for the CDN. An origins
     * group must contain at least one enabled origins. False - The origin is disabled
     * and the CDN is not using it to pull content.
     */
    enabled: boolean;
    /**
     * backup option has two possible values:
     *
     *   True - The option is active. The origin will not be used until one of
     *          active origins become unavailable.
     *   False - The option is disabled.
     */
    backup: boolean;
    /** Set up origin of the content. */
    meta: OriginMeta | undefined;
}

/** Origin type. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginMeta {
    /** A server with a domain name linked to it */
    common: OriginNamedMeta | undefined;
    /** A Yandex Object Storage bucket not configured as a static site hosting. */
    bucket: OriginNamedMeta | undefined;
    /** A Yandex Object Storage bucket configured as a static site hosting. */
    website: OriginNamedMeta | undefined;
    /**
     * An L7 load balancer from Yandex Application Load Balancer.
     * CDN servers will access the load balancer at one of its IP addresses that must be selected in the origin settings.
     */
    balancer: OriginBalancerMeta | undefined;
}

/** Origin info. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginNamedMeta {
    /** Name of the origin. */
    name: string;
}

/** Yandex Application Load Balancer origin info. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginBalancerMeta {
    /** ID of the origin. */
    id: string;
}

const baseOrigin: object = {
    id: 0,
    originGroupId: 0,
    source: '',
    enabled: false,
    backup: false,
};

export const Origin = {
    encode(
        message: Origin,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.originGroupId !== 0) {
            writer.uint32(16).int64(message.originGroupId);
        }
        if (message.source !== '') {
            writer.uint32(26).string(message.source);
        }
        if (message.enabled === true) {
            writer.uint32(32).bool(message.enabled);
        }
        if (message.backup === true) {
            writer.uint32(40).bool(message.backup);
        }
        if (message.meta !== undefined) {
            OriginMeta.encode(message.meta, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Origin {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOrigin } as Origin;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.originGroupId = longToNumber(
                        reader.int64() as Long
                    );
                    break;
                case 3:
                    message.source = reader.string();
                    break;
                case 4:
                    message.enabled = reader.bool();
                    break;
                case 5:
                    message.backup = reader.bool();
                    break;
                case 6:
                    message.meta = OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Origin {
        const message = { ...baseOrigin } as Origin;
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        } else {
            message.id = 0;
        }
        if (
            object.originGroupId !== undefined &&
            object.originGroupId !== null
        ) {
            message.originGroupId = Number(object.originGroupId);
        } else {
            message.originGroupId = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        } else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = Boolean(object.backup);
        } else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = OriginMeta.fromJSON(object.meta);
        } else {
            message.meta = undefined;
        }
        return message;
    },

    toJSON(message: Origin): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.originGroupId !== undefined &&
            (obj.originGroupId = message.originGroupId);
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta
                ? OriginMeta.toJSON(message.meta)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Origin>): Origin {
        const message = { ...baseOrigin } as Origin;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = 0;
        }
        if (
            object.originGroupId !== undefined &&
            object.originGroupId !== null
        ) {
            message.originGroupId = object.originGroupId;
        } else {
            message.originGroupId = 0;
        }
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        } else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = object.backup;
        } else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = OriginMeta.fromPartial(object.meta);
        } else {
            message.meta = undefined;
        }
        return message;
    },
};

const baseOriginParams: object = { source: '', enabled: false, backup: false };

export const OriginParams = {
    encode(
        message: OriginParams,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.source !== '') {
            writer.uint32(10).string(message.source);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        if (message.backup === true) {
            writer.uint32(24).bool(message.backup);
        }
        if (message.meta !== undefined) {
            OriginMeta.encode(message.meta, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OriginParams {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOriginParams } as OriginParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
                    break;
                case 3:
                    message.backup = reader.bool();
                    break;
                case 4:
                    message.meta = OriginMeta.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OriginParams {
        const message = { ...baseOriginParams } as OriginParams;
        if (object.source !== undefined && object.source !== null) {
            message.source = String(object.source);
        } else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = Boolean(object.enabled);
        } else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = Boolean(object.backup);
        } else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = OriginMeta.fromJSON(object.meta);
        } else {
            message.meta = undefined;
        }
        return message;
    },

    toJSON(message: OriginParams): unknown {
        const obj: any = {};
        message.source !== undefined && (obj.source = message.source);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.backup !== undefined && (obj.backup = message.backup);
        message.meta !== undefined &&
            (obj.meta = message.meta
                ? OriginMeta.toJSON(message.meta)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<OriginParams>): OriginParams {
        const message = { ...baseOriginParams } as OriginParams;
        if (object.source !== undefined && object.source !== null) {
            message.source = object.source;
        } else {
            message.source = '';
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        } else {
            message.enabled = false;
        }
        if (object.backup !== undefined && object.backup !== null) {
            message.backup = object.backup;
        } else {
            message.backup = false;
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = OriginMeta.fromPartial(object.meta);
        } else {
            message.meta = undefined;
        }
        return message;
    },
};

const baseOriginMeta: object = {};

export const OriginMeta = {
    encode(
        message: OriginMeta,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.common !== undefined) {
            OriginNamedMeta.encode(
                message.common,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.bucket !== undefined) {
            OriginNamedMeta.encode(
                message.bucket,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.website !== undefined) {
            OriginNamedMeta.encode(
                message.website,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.balancer !== undefined) {
            OriginBalancerMeta.encode(
                message.balancer,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OriginMeta {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOriginMeta } as OriginMeta;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.common = OriginNamedMeta.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.bucket = OriginNamedMeta.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.website = OriginNamedMeta.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.balancer = OriginBalancerMeta.decode(
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

    fromJSON(object: any): OriginMeta {
        const message = { ...baseOriginMeta } as OriginMeta;
        if (object.common !== undefined && object.common !== null) {
            message.common = OriginNamedMeta.fromJSON(object.common);
        } else {
            message.common = undefined;
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = OriginNamedMeta.fromJSON(object.bucket);
        } else {
            message.bucket = undefined;
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = OriginNamedMeta.fromJSON(object.website);
        } else {
            message.website = undefined;
        }
        if (object.balancer !== undefined && object.balancer !== null) {
            message.balancer = OriginBalancerMeta.fromJSON(object.balancer);
        } else {
            message.balancer = undefined;
        }
        return message;
    },

    toJSON(message: OriginMeta): unknown {
        const obj: any = {};
        message.common !== undefined &&
            (obj.common = message.common
                ? OriginNamedMeta.toJSON(message.common)
                : undefined);
        message.bucket !== undefined &&
            (obj.bucket = message.bucket
                ? OriginNamedMeta.toJSON(message.bucket)
                : undefined);
        message.website !== undefined &&
            (obj.website = message.website
                ? OriginNamedMeta.toJSON(message.website)
                : undefined);
        message.balancer !== undefined &&
            (obj.balancer = message.balancer
                ? OriginBalancerMeta.toJSON(message.balancer)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<OriginMeta>): OriginMeta {
        const message = { ...baseOriginMeta } as OriginMeta;
        if (object.common !== undefined && object.common !== null) {
            message.common = OriginNamedMeta.fromPartial(object.common);
        } else {
            message.common = undefined;
        }
        if (object.bucket !== undefined && object.bucket !== null) {
            message.bucket = OriginNamedMeta.fromPartial(object.bucket);
        } else {
            message.bucket = undefined;
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = OriginNamedMeta.fromPartial(object.website);
        } else {
            message.website = undefined;
        }
        if (object.balancer !== undefined && object.balancer !== null) {
            message.balancer = OriginBalancerMeta.fromPartial(object.balancer);
        } else {
            message.balancer = undefined;
        }
        return message;
    },
};

const baseOriginNamedMeta: object = { name: '' };

export const OriginNamedMeta = {
    encode(
        message: OriginNamedMeta,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OriginNamedMeta {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOriginNamedMeta } as OriginNamedMeta;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OriginNamedMeta {
        const message = { ...baseOriginNamedMeta } as OriginNamedMeta;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        return message;
    },

    toJSON(message: OriginNamedMeta): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial(object: DeepPartial<OriginNamedMeta>): OriginNamedMeta {
        const message = { ...baseOriginNamedMeta } as OriginNamedMeta;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        return message;
    },
};

const baseOriginBalancerMeta: object = { id: '' };

export const OriginBalancerMeta = {
    encode(
        message: OriginBalancerMeta,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): OriginBalancerMeta {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOriginBalancerMeta } as OriginBalancerMeta;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OriginBalancerMeta {
        const message = { ...baseOriginBalancerMeta } as OriginBalancerMeta;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        return message;
    },

    toJSON(message: OriginBalancerMeta): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial(object: DeepPartial<OriginBalancerMeta>): OriginBalancerMeta {
        const message = { ...baseOriginBalancerMeta } as OriginBalancerMeta;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        return message;
    },
};

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
