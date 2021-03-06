/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.compute.v1';

/** A Disk resource. For more information, see [Disks](/docs/compute/concepts/disk). */
export interface Disk {
    $type: 'yandex.cloud.compute.v1.Disk';
    /** ID of the disk. */
    id: string;
    /** ID of the folder that the disk belongs to. */
    folderId: string;
    createdAt: Date | undefined;
    /** Name of the disk. 1-63 characters long. */
    name: string;
    /** Description of the disk. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** ID of the disk type. */
    typeId: string;
    /** ID of the availability zone where the disk resides. */
    zoneId: string;
    /** Size of the disk, specified in bytes. */
    size: number;
    /** Block size of the disk, specified in bytes. */
    blockSize: number;
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
    /** Current status of the disk. */
    status: Disk_Status;
    /** ID of the image that was used for disk creation. */
    sourceImageId: string | undefined;
    /** ID of the snapshot that was used for disk creation. */
    sourceSnapshotId: string | undefined;
    /** Array of instances to which the disk is attached. */
    instanceIds: string[];
    /** Placement policy configuration. */
    diskPlacementPolicy: DiskPlacementPolicy | undefined;
}

export enum Disk_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Disk is being created. */
    CREATING = 1,
    /** READY - Disk is ready to use. */
    READY = 2,
    /** ERROR - Disk encountered a problem and cannot operate. */
    ERROR = 3,
    /** DELETING - Disk is being deleted. */
    DELETING = 4,
    UNRECOGNIZED = -1,
}

export function disk_StatusFromJSON(object: any): Disk_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Disk_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return Disk_Status.CREATING;
        case 2:
        case 'READY':
            return Disk_Status.READY;
        case 3:
        case 'ERROR':
            return Disk_Status.ERROR;
        case 4:
        case 'DELETING':
            return Disk_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Disk_Status.UNRECOGNIZED;
    }
}

export function disk_StatusToJSON(object: Disk_Status): string {
    switch (object) {
        case Disk_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Disk_Status.CREATING:
            return 'CREATING';
        case Disk_Status.READY:
            return 'READY';
        case Disk_Status.ERROR:
            return 'ERROR';
        case Disk_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface Disk_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.Disk.LabelsEntry';
    key: string;
    value: string;
}

export interface DiskPlacementPolicy {
    $type: 'yandex.cloud.compute.v1.DiskPlacementPolicy';
    /** Placement group ID. */
    placementGroupId: string;
}

const baseDisk: object = {
    $type: 'yandex.cloud.compute.v1.Disk',
    id: '',
    folderId: '',
    name: '',
    description: '',
    typeId: '',
    zoneId: '',
    size: 0,
    blockSize: 0,
    productIds: '',
    status: 0,
    instanceIds: '',
};

export const Disk = {
    $type: 'yandex.cloud.compute.v1.Disk' as const,

    encode(
        message: Disk,
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
            Disk_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.compute.v1.Disk.LabelsEntry',
                    key: key as any,
                    value,
                },
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
            writer.uint32(120).int64(message.blockSize);
        }
        for (const v of message.productIds) {
            writer.uint32(82).string(v!);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        if (message.sourceImageId !== undefined) {
            writer.uint32(98).string(message.sourceImageId);
        }
        if (message.sourceSnapshotId !== undefined) {
            writer.uint32(106).string(message.sourceSnapshotId);
        }
        for (const v of message.instanceIds) {
            writer.uint32(114).string(v!);
        }
        if (message.diskPlacementPolicy !== undefined) {
            DiskPlacementPolicy.encode(
                message.diskPlacementPolicy,
                writer.uint32(130).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Disk {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDisk } as Disk;
        message.labels = {};
        message.productIds = [];
        message.instanceIds = [];
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
                    const entry6 = Disk_LabelsEntry.decode(
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
                case 15:
                    message.blockSize = longToNumber(reader.int64() as Long);
                    break;
                case 10:
                    message.productIds.push(reader.string());
                    break;
                case 11:
                    message.status = reader.int32() as any;
                    break;
                case 12:
                    message.sourceImageId = reader.string();
                    break;
                case 13:
                    message.sourceSnapshotId = reader.string();
                    break;
                case 14:
                    message.instanceIds.push(reader.string());
                    break;
                case 16:
                    message.diskPlacementPolicy = DiskPlacementPolicy.decode(
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

    fromJSON(object: any): Disk {
        const message = { ...baseDisk } as Disk;
        message.labels = {};
        message.productIds = [];
        message.instanceIds = [];
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
        if (object.productIds !== undefined && object.productIds !== null) {
            for (const e of object.productIds) {
                message.productIds.push(String(e));
            }
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = disk_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (
            object.sourceImageId !== undefined &&
            object.sourceImageId !== null
        ) {
            message.sourceImageId = String(object.sourceImageId);
        } else {
            message.sourceImageId = undefined;
        }
        if (
            object.sourceSnapshotId !== undefined &&
            object.sourceSnapshotId !== null
        ) {
            message.sourceSnapshotId = String(object.sourceSnapshotId);
        } else {
            message.sourceSnapshotId = undefined;
        }
        if (object.instanceIds !== undefined && object.instanceIds !== null) {
            for (const e of object.instanceIds) {
                message.instanceIds.push(String(e));
            }
        }
        if (
            object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null
        ) {
            message.diskPlacementPolicy = DiskPlacementPolicy.fromJSON(
                object.diskPlacementPolicy
            );
        } else {
            message.diskPlacementPolicy = undefined;
        }
        return message;
    },

    toJSON(message: Disk): unknown {
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
        if (message.productIds) {
            obj.productIds = message.productIds.map((e) => e);
        } else {
            obj.productIds = [];
        }
        message.status !== undefined &&
            (obj.status = disk_StatusToJSON(message.status));
        message.sourceImageId !== undefined &&
            (obj.sourceImageId = message.sourceImageId);
        message.sourceSnapshotId !== undefined &&
            (obj.sourceSnapshotId = message.sourceSnapshotId);
        if (message.instanceIds) {
            obj.instanceIds = message.instanceIds.map((e) => e);
        } else {
            obj.instanceIds = [];
        }
        message.diskPlacementPolicy !== undefined &&
            (obj.diskPlacementPolicy = message.diskPlacementPolicy
                ? DiskPlacementPolicy.toJSON(message.diskPlacementPolicy)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Disk>): Disk {
        const message = { ...baseDisk } as Disk;
        message.labels = {};
        message.productIds = [];
        message.instanceIds = [];
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
        if (
            object.sourceImageId !== undefined &&
            object.sourceImageId !== null
        ) {
            message.sourceImageId = object.sourceImageId;
        } else {
            message.sourceImageId = undefined;
        }
        if (
            object.sourceSnapshotId !== undefined &&
            object.sourceSnapshotId !== null
        ) {
            message.sourceSnapshotId = object.sourceSnapshotId;
        } else {
            message.sourceSnapshotId = undefined;
        }
        if (object.instanceIds !== undefined && object.instanceIds !== null) {
            for (const e of object.instanceIds) {
                message.instanceIds.push(e);
            }
        }
        if (
            object.diskPlacementPolicy !== undefined &&
            object.diskPlacementPolicy !== null
        ) {
            message.diskPlacementPolicy = DiskPlacementPolicy.fromPartial(
                object.diskPlacementPolicy
            );
        } else {
            message.diskPlacementPolicy = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(Disk.$type, Disk);

const baseDisk_LabelsEntry: object = {
    $type: 'yandex.cloud.compute.v1.Disk.LabelsEntry',
    key: '',
    value: '',
};

export const Disk_LabelsEntry = {
    $type: 'yandex.cloud.compute.v1.Disk.LabelsEntry' as const,

    encode(
        message: Disk_LabelsEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): Disk_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDisk_LabelsEntry } as Disk_LabelsEntry;
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

    fromJSON(object: any): Disk_LabelsEntry {
        const message = { ...baseDisk_LabelsEntry } as Disk_LabelsEntry;
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

    toJSON(message: Disk_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<Disk_LabelsEntry>): Disk_LabelsEntry {
        const message = { ...baseDisk_LabelsEntry } as Disk_LabelsEntry;
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

messageTypeRegistry.set(Disk_LabelsEntry.$type, Disk_LabelsEntry);

const baseDiskPlacementPolicy: object = {
    $type: 'yandex.cloud.compute.v1.DiskPlacementPolicy',
    placementGroupId: '',
};

export const DiskPlacementPolicy = {
    $type: 'yandex.cloud.compute.v1.DiskPlacementPolicy' as const,

    encode(
        message: DiskPlacementPolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.placementGroupId !== '') {
            writer.uint32(10).string(message.placementGroupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DiskPlacementPolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDiskPlacementPolicy } as DiskPlacementPolicy;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placementGroupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DiskPlacementPolicy {
        const message = { ...baseDiskPlacementPolicy } as DiskPlacementPolicy;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = String(object.placementGroupId);
        } else {
            message.placementGroupId = '';
        }
        return message;
    },

    toJSON(message: DiskPlacementPolicy): unknown {
        const obj: any = {};
        message.placementGroupId !== undefined &&
            (obj.placementGroupId = message.placementGroupId);
        return obj;
    },

    fromPartial(object: DeepPartial<DiskPlacementPolicy>): DiskPlacementPolicy {
        const message = { ...baseDiskPlacementPolicy } as DiskPlacementPolicy;
        if (
            object.placementGroupId !== undefined &&
            object.placementGroupId !== null
        ) {
            message.placementGroupId = object.placementGroupId;
        } else {
            message.placementGroupId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(DiskPlacementPolicy.$type, DiskPlacementPolicy);

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
