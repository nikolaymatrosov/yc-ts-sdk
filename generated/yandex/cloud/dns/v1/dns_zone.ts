/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.dns.v1';

/** A DNS zone. For details about the concept, see [DNS zones](/docs/dns/concepts/dns-zone). */
export interface DnsZone {
    $type: 'yandex.cloud.dns.v1.DnsZone';
    /** ID of the DNS zone. Generated at creation time. */
    id: string;
    /** ID of the folder that the DNS zone belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /**
     * Name of the DNS zone.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the DNS zone. */
    description: string;
    /** DNS zone labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** DNS zone suffix. */
    zone: string;
    /**
     * Privately visible zone settings.
     * Specifies whether records within the zone are visible from a VPC networks only.
     */
    privateVisibility: PrivateVisibility | undefined;
    /**
     * Publicly visible zone settings.
     * Indicates whether records within the zone are publicly visible.
     */
    publicVisibility: PublicVisibility | undefined;
}

export interface DnsZone_LabelsEntry {
    $type: 'yandex.cloud.dns.v1.DnsZone.LabelsEntry';
    key: string;
    value: string;
}

/** A record set. For details about the concept, see [Resource record](/docs/dns/concepts/resource-record). */
export interface RecordSet {
    $type: 'yandex.cloud.dns.v1.RecordSet';
    /** Domain name. */
    name: string;
    /** Record type. */
    type: string;
    /** Time to live in seconds. */
    ttl: number;
    /** Data of the record set. */
    data: string[];
}

/** Configuration for privately visible zones. */
export interface PrivateVisibility {
    $type: 'yandex.cloud.dns.v1.PrivateVisibility';
    /** Network IDs. */
    networkIds: string[];
}

/** Configuration for publicly visible zones. */
export interface PublicVisibility {
    $type: 'yandex.cloud.dns.v1.PublicVisibility';
}

const baseDnsZone: object = {
    $type: 'yandex.cloud.dns.v1.DnsZone',
    id: '',
    folderId: '',
    name: '',
    description: '',
    zone: '',
};

export const DnsZone = {
    $type: 'yandex.cloud.dns.v1.DnsZone' as const,

    encode(
        message: DnsZone,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            DnsZone_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.dns.v1.DnsZone.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.zone !== '') {
            writer.uint32(58).string(message.zone);
        }
        if (message.privateVisibility !== undefined) {
            PrivateVisibility.encode(
                message.privateVisibility,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.publicVisibility !== undefined) {
            PublicVisibility.encode(
                message.publicVisibility,
                writer.uint32(74).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DnsZone {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDnsZone } as DnsZone;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    const entry6 = DnsZone_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.zone = reader.string();
                    break;
                case 8:
                    message.privateVisibility = PrivateVisibility.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 9:
                    message.publicVisibility = PublicVisibility.decode(
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

    fromJSON(object: any): DnsZone {
        const message = { ...baseDnsZone } as DnsZone;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
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
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.zone !== undefined && object.zone !== null) {
            message.zone = String(object.zone);
        } else {
            message.zone = '';
        }
        if (
            object.privateVisibility !== undefined &&
            object.privateVisibility !== null
        ) {
            message.privateVisibility = PrivateVisibility.fromJSON(
                object.privateVisibility
            );
        } else {
            message.privateVisibility = undefined;
        }
        if (
            object.publicVisibility !== undefined &&
            object.publicVisibility !== null
        ) {
            message.publicVisibility = PublicVisibility.fromJSON(
                object.publicVisibility
            );
        } else {
            message.publicVisibility = undefined;
        }
        return message;
    },

    toJSON(message: DnsZone): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.zone !== undefined && (obj.zone = message.zone);
        message.privateVisibility !== undefined &&
            (obj.privateVisibility = message.privateVisibility
                ? PrivateVisibility.toJSON(message.privateVisibility)
                : undefined);
        message.publicVisibility !== undefined &&
            (obj.publicVisibility = message.publicVisibility
                ? PublicVisibility.toJSON(message.publicVisibility)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<DnsZone>): DnsZone {
        const message = { ...baseDnsZone } as DnsZone;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
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
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.zone !== undefined && object.zone !== null) {
            message.zone = object.zone;
        } else {
            message.zone = '';
        }
        if (
            object.privateVisibility !== undefined &&
            object.privateVisibility !== null
        ) {
            message.privateVisibility = PrivateVisibility.fromPartial(
                object.privateVisibility
            );
        } else {
            message.privateVisibility = undefined;
        }
        if (
            object.publicVisibility !== undefined &&
            object.publicVisibility !== null
        ) {
            message.publicVisibility = PublicVisibility.fromPartial(
                object.publicVisibility
            );
        } else {
            message.publicVisibility = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(DnsZone.$type, DnsZone);

const baseDnsZone_LabelsEntry: object = {
    $type: 'yandex.cloud.dns.v1.DnsZone.LabelsEntry',
    key: '',
    value: '',
};

export const DnsZone_LabelsEntry = {
    $type: 'yandex.cloud.dns.v1.DnsZone.LabelsEntry' as const,

    encode(
        message: DnsZone_LabelsEntry,
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
    ): DnsZone_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDnsZone_LabelsEntry } as DnsZone_LabelsEntry;
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

    fromJSON(object: any): DnsZone_LabelsEntry {
        const message = { ...baseDnsZone_LabelsEntry } as DnsZone_LabelsEntry;
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

    toJSON(message: DnsZone_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<DnsZone_LabelsEntry>): DnsZone_LabelsEntry {
        const message = { ...baseDnsZone_LabelsEntry } as DnsZone_LabelsEntry;
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

messageTypeRegistry.set(DnsZone_LabelsEntry.$type, DnsZone_LabelsEntry);

const baseRecordSet: object = {
    $type: 'yandex.cloud.dns.v1.RecordSet',
    name: '',
    type: '',
    ttl: 0,
    data: '',
};

export const RecordSet = {
    $type: 'yandex.cloud.dns.v1.RecordSet' as const,

    encode(
        message: RecordSet,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        if (message.ttl !== 0) {
            writer.uint32(24).int64(message.ttl);
        }
        for (const v of message.data) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RecordSet {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecordSet } as RecordSet;
        message.data = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.ttl = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.data.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RecordSet {
        const message = { ...baseRecordSet } as RecordSet;
        message.data = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        } else {
            message.type = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = Number(object.ttl);
        } else {
            message.ttl = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            for (const e of object.data) {
                message.data.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: RecordSet): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined && (obj.type = message.type);
        message.ttl !== undefined && (obj.ttl = message.ttl);
        if (message.data) {
            obj.data = message.data.map((e) => e);
        } else {
            obj.data = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<RecordSet>): RecordSet {
        const message = { ...baseRecordSet } as RecordSet;
        message.data = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = '';
        }
        if (object.ttl !== undefined && object.ttl !== null) {
            message.ttl = object.ttl;
        } else {
            message.ttl = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            for (const e of object.data) {
                message.data.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(RecordSet.$type, RecordSet);

const basePrivateVisibility: object = {
    $type: 'yandex.cloud.dns.v1.PrivateVisibility',
    networkIds: '',
};

export const PrivateVisibility = {
    $type: 'yandex.cloud.dns.v1.PrivateVisibility' as const,

    encode(
        message: PrivateVisibility,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.networkIds) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrivateVisibility {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrivateVisibility } as PrivateVisibility;
        message.networkIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrivateVisibility {
        const message = { ...basePrivateVisibility } as PrivateVisibility;
        message.networkIds = [];
        if (object.networkIds !== undefined && object.networkIds !== null) {
            for (const e of object.networkIds) {
                message.networkIds.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: PrivateVisibility): unknown {
        const obj: any = {};
        if (message.networkIds) {
            obj.networkIds = message.networkIds.map((e) => e);
        } else {
            obj.networkIds = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PrivateVisibility>): PrivateVisibility {
        const message = { ...basePrivateVisibility } as PrivateVisibility;
        message.networkIds = [];
        if (object.networkIds !== undefined && object.networkIds !== null) {
            for (const e of object.networkIds) {
                message.networkIds.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(PrivateVisibility.$type, PrivateVisibility);

const basePublicVisibility: object = {
    $type: 'yandex.cloud.dns.v1.PublicVisibility',
};

export const PublicVisibility = {
    $type: 'yandex.cloud.dns.v1.PublicVisibility' as const,

    encode(
        _: PublicVisibility,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PublicVisibility {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublicVisibility } as PublicVisibility;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): PublicVisibility {
        const message = { ...basePublicVisibility } as PublicVisibility;
        return message;
    },

    toJSON(_: PublicVisibility): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<PublicVisibility>): PublicVisibility {
        const message = { ...basePublicVisibility } as PublicVisibility;
        return message;
    },
};

messageTypeRegistry.set(PublicVisibility.$type, PublicVisibility);

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
