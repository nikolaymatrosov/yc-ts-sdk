/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.resourcemanager.v1';

/** A Folder resource. For more information, see [Folder](/docs/resource-manager/concepts/resources-hierarchy#folder). */
export interface Folder {
    /** ID of the folder. */
    id: string;
    /** ID of the cloud that the folder belongs to. */
    cloudId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /**
     * Name of the folder.
     * The name is unique within the cloud. 3-63 characters long.
     */
    name: string;
    /** Description of the folder. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: { [key: string]: string };
    /** Status of the folder. */
    status: Folder_Status;
}

export enum Folder_Status {
    STATUS_UNSPECIFIED = 0,
    /** ACTIVE - The folder is active. */
    ACTIVE = 1,
    /** DELETING - The folder is being deleted. */
    DELETING = 2,
    /** PENDING_DELETION - Stopping folder resources and waiting for the deletion start timestamp. */
    PENDING_DELETION = 3,
    UNRECOGNIZED = -1,
}

export function folder_StatusFromJSON(object: any): Folder_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return Folder_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'ACTIVE':
            return Folder_Status.ACTIVE;
        case 2:
        case 'DELETING':
            return Folder_Status.DELETING;
        case 3:
        case 'PENDING_DELETION':
            return Folder_Status.PENDING_DELETION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Folder_Status.UNRECOGNIZED;
    }
}

export function folder_StatusToJSON(object: Folder_Status): string {
    switch (object) {
        case Folder_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case Folder_Status.ACTIVE:
            return 'ACTIVE';
        case Folder_Status.DELETING:
            return 'DELETING';
        case Folder_Status.PENDING_DELETION:
            return 'PENDING_DELETION';
        default:
            return 'UNKNOWN';
    }
}

export interface Folder_LabelsEntry {
    key: string;
    value: string;
}

const baseFolder: object = {
    id: '',
    cloudId: '',
    name: '',
    description: '',
    status: 0,
};

export const Folder = {
    encode(
        message: Folder,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.cloudId !== '') {
            writer.uint32(18).string(message.cloudId);
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
            Folder_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(50).fork()
            ).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Folder {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFolder } as Folder;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.cloudId = reader.string();
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
                    const entry6 = Folder_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.status = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Folder {
        const message = { ...baseFolder } as Folder;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = String(object.cloudId);
        } else {
            message.cloudId = '';
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
        if (object.status !== undefined && object.status !== null) {
            message.status = folder_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        return message;
    },

    toJSON(message: Folder): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.cloudId !== undefined && (obj.cloudId = message.cloudId);
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
        message.status !== undefined &&
            (obj.status = folder_StatusToJSON(message.status));
        return obj;
    },

    fromPartial(object: DeepPartial<Folder>): Folder {
        const message = { ...baseFolder } as Folder;
        message.labels = {};
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.cloudId !== undefined && object.cloudId !== null) {
            message.cloudId = object.cloudId;
        } else {
            message.cloudId = '';
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
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        return message;
    },
};

const baseFolder_LabelsEntry: object = { key: '', value: '' };

export const Folder_LabelsEntry = {
    encode(
        message: Folder_LabelsEntry,
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
    ): Folder_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFolder_LabelsEntry } as Folder_LabelsEntry;
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

    fromJSON(object: any): Folder_LabelsEntry {
        const message = { ...baseFolder_LabelsEntry } as Folder_LabelsEntry;
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

    toJSON(message: Folder_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<Folder_LabelsEntry>): Folder_LabelsEntry {
        const message = { ...baseFolder_LabelsEntry } as Folder_LabelsEntry;
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
