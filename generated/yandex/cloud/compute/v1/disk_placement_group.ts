/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface DiskPlacementGroup {
    /** ID of the placement group. */
    id: string;
    /** ID of the folder that the placement group belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
    /**
     * Name of the placement group.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the placement group. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** ID of the availability zone where the placement group resides. */
    zoneId: string;
    /** Current status of the placement group */
    status: DiskPlacementGroup_Status;
    /** Distribute instances over distinct failure domains. */
    spreadPlacementStrategy: DiskSpreadPlacementStrategy | undefined;
}

export enum DiskPlacementGroup_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    DELETING = 4,
    UNRECOGNIZED = -1,
}

export function diskPlacementGroup_StatusFromJSON(
    object: any
): DiskPlacementGroup_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return DiskPlacementGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return DiskPlacementGroup_Status.CREATING;
        case 2:
        case 'READY':
            return DiskPlacementGroup_Status.READY;
        case 4:
        case 'DELETING':
            return DiskPlacementGroup_Status.DELETING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DiskPlacementGroup_Status.UNRECOGNIZED;
    }
}

export function diskPlacementGroup_StatusToJSON(
    object: DiskPlacementGroup_Status
): string {
    switch (object) {
        case DiskPlacementGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case DiskPlacementGroup_Status.CREATING:
            return 'CREATING';
        case DiskPlacementGroup_Status.READY:
            return 'READY';
        case DiskPlacementGroup_Status.DELETING:
            return 'DELETING';
        default:
            return 'UNKNOWN';
    }
}

export interface DiskPlacementGroup_LabelsEntry {
    key: string;
    value: string;
}

export interface DiskSpreadPlacementStrategy {}

const baseDiskPlacementGroup: object = {
    id: '',
    folderId: '',
    name: '',
    description: '',
    zoneId: '',
    status: 0,
};

export const DiskPlacementGroup = {
    encode(
        message: DiskPlacementGroup,
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
            DiskPlacementGroup_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.zoneId !== '') {
            writer.uint32(58).string(message.zoneId);
        }
        if (message.status !== 0) {
            writer.uint32(88).int32(message.status);
        }
        if (message.spreadPlacementStrategy !== undefined) {
            DiskSpreadPlacementStrategy.encode(
                message.spreadPlacementStrategy,
                writer.uint32(66).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DiskPlacementGroup {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDiskPlacementGroup } as DiskPlacementGroup;
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
                    const entry6 = DiskPlacementGroup_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.zoneId = reader.string();
                    break;
                case 11:
                    message.status = reader.int32() as any;
                    break;
                case 8:
                    message.spreadPlacementStrategy =
                        DiskSpreadPlacementStrategy.decode(
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

    fromJSON(object: any): DiskPlacementGroup {
        const message = { ...baseDiskPlacementGroup } as DiskPlacementGroup;
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = diskPlacementGroup_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (
            object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null
        ) {
            message.spreadPlacementStrategy =
                DiskSpreadPlacementStrategy.fromJSON(
                    object.spreadPlacementStrategy
                );
        } else {
            message.spreadPlacementStrategy = undefined;
        }
        return message;
    },

    toJSON(message: DiskPlacementGroup): unknown {
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
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.status !== undefined &&
            (obj.status = diskPlacementGroup_StatusToJSON(message.status));
        message.spreadPlacementStrategy !== undefined &&
            (obj.spreadPlacementStrategy = message.spreadPlacementStrategy
                ? DiskSpreadPlacementStrategy.toJSON(
                      message.spreadPlacementStrategy
                  )
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<DiskPlacementGroup>): DiskPlacementGroup {
        const message = { ...baseDiskPlacementGroup } as DiskPlacementGroup;
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
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (
            object.spreadPlacementStrategy !== undefined &&
            object.spreadPlacementStrategy !== null
        ) {
            message.spreadPlacementStrategy =
                DiskSpreadPlacementStrategy.fromPartial(
                    object.spreadPlacementStrategy
                );
        } else {
            message.spreadPlacementStrategy = undefined;
        }
        return message;
    },
};

const baseDiskPlacementGroup_LabelsEntry: object = { key: '', value: '' };

export const DiskPlacementGroup_LabelsEntry = {
    encode(
        message: DiskPlacementGroup_LabelsEntry,
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
    ): DiskPlacementGroup_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDiskPlacementGroup_LabelsEntry,
        } as DiskPlacementGroup_LabelsEntry;
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

    fromJSON(object: any): DiskPlacementGroup_LabelsEntry {
        const message = {
            ...baseDiskPlacementGroup_LabelsEntry,
        } as DiskPlacementGroup_LabelsEntry;
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

    toJSON(message: DiskPlacementGroup_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DiskPlacementGroup_LabelsEntry>
    ): DiskPlacementGroup_LabelsEntry {
        const message = {
            ...baseDiskPlacementGroup_LabelsEntry,
        } as DiskPlacementGroup_LabelsEntry;
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

const baseDiskSpreadPlacementStrategy: object = {};

export const DiskSpreadPlacementStrategy = {
    encode(
        _: DiskSpreadPlacementStrategy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DiskSpreadPlacementStrategy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDiskSpreadPlacementStrategy,
        } as DiskSpreadPlacementStrategy;
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

    fromJSON(_: any): DiskSpreadPlacementStrategy {
        const message = {
            ...baseDiskSpreadPlacementStrategy,
        } as DiskSpreadPlacementStrategy;
        return message;
    },

    toJSON(_: DiskSpreadPlacementStrategy): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(
        _: DeepPartial<DiskSpreadPlacementStrategy>
    ): DiskSpreadPlacementStrategy {
        const message = {
            ...baseDiskSpreadPlacementStrategy,
        } as DiskSpreadPlacementStrategy;
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
