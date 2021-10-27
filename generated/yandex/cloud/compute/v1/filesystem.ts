/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.compute.v1';

/**
 * A filesystem resource.
 * For details about the concept, see [documentation](/docs/compute/concepts/filesystem).
 */
export interface Filesystem {
    /** ID of the filesystem. Generated at creation time. */
    id: string;
    /** ID of the folder that the filesystem belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Name of the filesystem. The name is unique within the folder. */
    name: string;
    /** Description of the filesystem. */
    description: string;
    /**
     * Filesystem labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: { [key: string]: string };
    /**
     * ID of the filesystem type.
     *
     * To get a list of available filesystem types, make a [yandex.cloud.compute.v1.DiskTypeService.List] request.
     */
    typeId: string;
    /**
     * ID of the availability zone where the filesystem resides.
     *
     * A filesystem can be attached only to instances residing in the same availability zone.
     */
    zoneId: string;
    /** Size of the filesystem, specified in bytes. */
    size: number;
    /** Block size used for the filesystem, specified in bytes. */
    blockSize: number;
    /** Current status of the filesystem. */
    status: Filesystem_Status;
}

export enum Filesystem_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The filesystem is being created. */
    CREATING = 1,
    /** READY - The filesystem is ready to use. */
    READY = 2,
    /** ERROR - The filesystem encountered a problem and cannot operate. */
    ERROR = 3,
    /** DELETING - The filesystem is being deleted. */
    DELETING = 4,
    UNRECOGNIZED = -1,
}

export function filesystem_StatusFromJSON(object: any): Filesystem_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Filesystem_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Filesystem_Status.CREATING;
        case 2:
        case 'READY':
            return Filesystem_Status.READY;
        case 3:
        case 'ERROR':
            return Filesystem_Status.ERROR;
        case 4:
        case 'DELETING':
            return Filesystem_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Filesystem_Status.UNRECOGNIZED;
    }
}

export function filesystem_StatusToJSON(object: Filesystem_Status): string {
    switch (object) {
        case Filesystem_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Filesystem_Status.CREATING:
            return 'CREATING';
        case Filesystem_Status.READY:
            return 'READY';
        case Filesystem_Status.ERROR:
            return 'ERROR';
        case Filesystem_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Filesystem_LabelsEntry {
    key: string;
    value: string;
}

const baseFilesystem: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    typeId: '',
    zoneId: '',
    size: 0,
    blockSize: 0,
    status: 0,
};

export const Filesystem = {
    encode(
        message: Filesystem,
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
            Filesystem_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.typeId !== '') {
            writer.uint32(58).string(message.typeId);
        }
        if (message.zoneId !== '') {
            writer.uint32(66).string(message.zoneId);
        }
        if (message.size !== 0) {
            writer.uint32(72).int64(message.size);
        }
        if (message.blockSize !== 0) {
            writer.uint32(80).int64(message.blockSize);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Filesystem {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFilesystem } as Filesystem;
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
                    const entry6 = Filesystem_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.typeId = reader.string();
                    break;
                case 8:
                    message.zoneId = reader.string();
                    break;
                case 9:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                case 10:
                    message.blockSize = longToNumber(reader.int64() as Long);
                    break;
                case 11:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Filesystem {
        const message = { ...baseFilesystem } as Filesystem;
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
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = String(object.typeId);
        } else {
            message.typeId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        } else {
            message.size = 0;
        }
        if (object.blockSize !== undefined && object.blockSize !== null) {
            message.blockSize = Number(object.blockSize);
        } else {
            message.blockSize = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = filesystem_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        return message;
    },

    toJSON(message: Filesystem): unknown {
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
        message.typeId !== undefined && (obj.typeId = message.typeId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.size !== undefined && (obj.size = message.size);
        message.blockSize !== undefined && (obj.blockSize = message.blockSize);
        message.status !== undefined &&
            (obj.status = filesystem_StatusToJSON(message.status));
        return obj;
    },

    fromPartial(object: DeepPartial<Filesystem>): Filesystem {
        const message = { ...baseFilesystem } as Filesystem;
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
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = object.typeId;
        } else {
            message.typeId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        } else {
            message.size = 0;
        }
        if (object.blockSize !== undefined && object.blockSize !== null) {
            message.blockSize = object.blockSize;
        } else {
            message.blockSize = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        return message;
    },
};

const baseFilesystem_LabelsEntry: object = { key: '', value: '' };

export const Filesystem_LabelsEntry = {
    encode(
        message: Filesystem_LabelsEntry,
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
    ): Filesystem_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFilesystem_LabelsEntry,
        } as Filesystem_LabelsEntry;
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

    fromJSON(object: any): Filesystem_LabelsEntry {
        const message = {
            ...baseFilesystem_LabelsEntry,
        } as Filesystem_LabelsEntry;
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

    toJSON(message: Filesystem_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<Filesystem_LabelsEntry>
    ): Filesystem_LabelsEntry {
        const message = {
            ...baseFilesystem_LabelsEntry,
        } as Filesystem_LabelsEntry;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
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
