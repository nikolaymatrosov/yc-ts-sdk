/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.compute.v1';

/** An Image resource. */
export interface Image {
    /** ID of the image. */
    id: string;
    /** ID of the folder that the image belongs to. */
    folderId: string;
    createdAt: Date | undefined;
    /** Name of the image. 1-63 characters long. */
    name: string;
    /** Description of the image. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /**
     * The name of the image family to which this image belongs.
     *
     * You can get the most recent image from a family by using
     * the [yandex.cloud.compute.v1.ImageService.GetLatestByFamily] request
     * and create the disk from this image.
     */
    family: string;
    /** The size of the image, specified in bytes. */
    storageSize: number;
    /** Minimum size of the disk which will be created from this image. */
    minDiskSize: number;
    /**
     * License IDs that indicate which licenses are attached to this resource.
     * License IDs are used to calculate additional charges for the use of the virtual machine.
     *
     * The correct license ID is generated by Yandex.Cloud. IDs are inherited by new resources created from this resource.
     *
     * If you know the license IDs, specify them when you create the image.
     * For example, if you create a disk image using a third-party utility and load it into Yandex Object Storage, the license IDs will be lost.
     * You can specify them in the [yandex.cloud.compute.v1.ImageService.Create] request.
     */
    productIds: string[];
    /** Current status of the image. */
    status: Image_Status;
    /** Operating system that is contained in the image. */
    os: Os | undefined;
    /** When true, indicates there is an image pool for fast creation disks from the image. */
    pooled: boolean;
}

export enum Image_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Image is being created. */
    CREATING = 1,
    /** READY - Image is ready to use. */
    READY = 2,
    /** ERROR - Image encountered a problem and cannot operate. */
    ERROR = 3,
    /** DELETING - Image is being deleted. */
    DELETING = 4,
    UNRECOGNIZED = -1,
}

export function image_StatusFromJSON(object: any): Image_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Image_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Image_Status.CREATING;
        case 2:
        case 'READY':
            return Image_Status.READY;
        case 3:
        case 'ERROR':
            return Image_Status.ERROR;
        case 4:
        case 'DELETING':
            return Image_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Image_Status.UNRECOGNIZED;
    }
}

export function image_StatusToJSON(object: Image_Status): string {
    switch (object) {
        case Image_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Image_Status.CREATING:
            return 'CREATING';
        case Image_Status.READY:
            return 'READY';
        case Image_Status.ERROR:
            return 'ERROR';
        case Image_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Image_LabelsEntry {
    key: string;
    value: string;
}

export interface Os {
    /**
     * Operating system type. The default is `LINUX`.
     *
     * This field is used to correctly emulate a vCPU and calculate the cost of using an instance.
     */
    type: Os_Type;
}

export enum Os_Type {
    TYPE_UNSPECIFIED = 0,
    /** LINUX - Linux operating system. */
    LINUX = 1,
    /** WINDOWS - Windows operating system. */
    WINDOWS = 2,
    UNRECOGNIZED = -1,
}

export function os_TypeFromJSON(object: any): Os_Type {
    switch (object) {
        case 0:
        case 'TYPE_UNSPECIFIED':
            return Os_Type.TYPE_UNSPECIFIED;
        case 1:
        case 'LINUX':
            return Os_Type.LINUX;
        case 2:
        case 'WINDOWS':
            return Os_Type.WINDOWS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Os_Type.UNRECOGNIZED;
    }
}

export function os_TypeToJSON(object: Os_Type): string {
    switch (object) {
        case Os_Type.TYPE_UNSPECIFIED:
            return 'TYPE_UNSPECIFIED';
        case Os_Type.LINUX:
            return 'LINUX';
        case Os_Type.WINDOWS:
            return 'WINDOWS';
        default:
            return 'UNKNOWN';
    }
}

const baseImage: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    family: '',
    storageSize: 0,
    minDiskSize: 0,
    productIds: '',
    status: 0,
    pooled: false,
};

export const Image = {
    encode(
        message: Image,
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
            Image_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.family !== '') {
            writer.uint32(58).string(message.family);
        }
        if (message.storageSize !== 0) {
            writer.uint32(64).int64(message.storageSize);
        }
        if (message.minDiskSize !== 0) {
            writer.uint32(72).int64(message.minDiskSize);
        }
        for (const v of message.productIds) {
            writer.uint32(82).string(v!);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        if (message.os !== undefined) {
            Os.encode(message.os, writer.uint32(98).fork()).ldelim();
        }
        if (message.pooled === true) {
            writer.uint32(104).bool(message.pooled);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Image {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImage } as Image;
        message.labels = {};
        message.productIds = [];
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
                    const entry6 = Image_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.family = reader.string();
                    break;
                case 8:
                    message.storageSize = longToNumber(reader.int64() as Long);
                    break;
                case 9:
                    message.minDiskSize = longToNumber(reader.int64() as Long);
                    break;
                case 10:
                    message.productIds.push(reader.string());
                    break;
                case 11:
                    message.status = reader.int32() as any;
                    break;
                case 12:
                    message.os = Os.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.pooled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Image {
        const message = { ...baseImage } as Image;
        message.labels = {};
        message.productIds = [];
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
        if (object.family !== undefined && object.family !== null) {
            message.family = String(object.family);
        } else {
            message.family = '';
        }
        if (object.storageSize !== undefined && object.storageSize !== null) {
            message.storageSize = Number(object.storageSize);
        } else {
            message.storageSize = 0;
        }
        if (object.minDiskSize !== undefined && object.minDiskSize !== null) {
            message.minDiskSize = Number(object.minDiskSize);
        } else {
            message.minDiskSize = 0;
        }
        if (object.productIds !== undefined && object.productIds !== null) {
            for (const e of object.productIds) {
                message.productIds.push(String(e));
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = image_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.os !== undefined && object.os !== null) {
            message.os = Os.fromJSON(object.os);
        } else {
            message.os = undefined;
        }
        if (object.pooled !== undefined && object.pooled !== null) {
            message.pooled = Boolean(object.pooled);
        } else {
            message.pooled = false;
        }
        return message;
    },

    toJSON(message: Image): unknown {
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
        message.family !== undefined && (obj.family = message.family);
        message.storageSize !== undefined &&
            (obj.storageSize = message.storageSize);
        message.minDiskSize !== undefined &&
            (obj.minDiskSize = message.minDiskSize);
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        } else {
            obj.productIds = [];
        }
        message.status !== undefined &&
            (obj.status = image_StatusToJSON(message.status));
        message.os !== undefined &&
            (obj.os = message.os ? Os.toJSON(message.os) : undefined);
        message.pooled !== undefined && (obj.pooled = message.pooled);
        return obj;
    },

    fromPartial(object: DeepPartial<Image>): Image {
        const message = { ...baseImage } as Image;
        message.labels = {};
        message.productIds = [];
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
        if (object.family !== undefined && object.family !== null) {
            message.family = object.family;
        } else {
            message.family = '';
        }
        if (object.storageSize !== undefined && object.storageSize !== null) {
            message.storageSize = object.storageSize;
        } else {
            message.storageSize = 0;
        }
        if (object.minDiskSize !== undefined && object.minDiskSize !== null) {
            message.minDiskSize = object.minDiskSize;
        } else {
            message.minDiskSize = 0;
        }
        if (object.productIds !== undefined && object.productIds !== null) {
            for (const e of object.productIds) {
                message.productIds.push(e);
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.os !== undefined && object.os !== null) {
            message.os = Os.fromPartial(object.os);
        } else {
            message.os = undefined;
        }
        if (object.pooled !== undefined && object.pooled !== null) {
            message.pooled = object.pooled;
        } else {
            message.pooled = false;
        }
        return message;
    },
};

const baseImage_LabelsEntry: object = { key: '', value: '' };

export const Image_LabelsEntry = {
    encode(
        message: Image_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Image_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseImage_LabelsEntry } as Image_LabelsEntry;
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

    fromJSON(object: any): Image_LabelsEntry {
        const message = { ...baseImage_LabelsEntry } as Image_LabelsEntry;
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

    toJSON(message: Image_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<Image_LabelsEntry>): Image_LabelsEntry {
        const message = { ...baseImage_LabelsEntry } as Image_LabelsEntry;
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

const baseOs: object = { type: 0 };

export const Os = {
    encode(message: Os, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Os {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOs } as Os;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Os {
        const message = { ...baseOs } as Os;
        if (object.type !== undefined && object.type !== null) {
            message.type = os_TypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        return message;
    },

    toJSON(message: Os): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = os_TypeToJSON(message.type));
        return obj;
    },

    fromPartial(object: DeepPartial<Os>): Os {
        const message = { ...baseOs } as Os;
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
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
