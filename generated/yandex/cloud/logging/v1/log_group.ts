/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.logging.v1';

export interface LogGroup {
    $type: 'yandex.cloud.logging.v1.LogGroup';
    /** Log group ID. */
    id: string;
    /** Log group folder ID. */
    folderId: string;
    /** Log group cloud ID. */
    cloudId: string;
    /** Log group creation time. */
    createdAt: Date | undefined;
    /** Log group name. */
    name: string;
    /** Log group description. */
    description: string;
    /** Log group labels. */
    labels: { [key: string]: string };
    /** Status of the log group. */
    status: LogGroup_Status;
    /**
     * Log group entry retention period.
     *
     * Entries will be present in group during this period.
     */
    retentionPeriod: Duration | undefined;
}

/** Possible log group statuses. */
export enum LogGroup_Status {
    /**
     * STATUS_UNSPECIFIED - Unknown status.
     *
     * Should never occur.
     */
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Log group is creating. */
    CREATING = 1,
    /** ACTIVE - Log group is ready to accept messages, */
    ACTIVE = 2,
    /**
     * DELETING - Log group is being deleted.
     *
     * No messages will be accepted.
     */
    DELETING = 3,
    /** ERROR - Log group is in failed state. */
    ERROR = 4,
    UNRECOGNIZED = -1,
}

export function logGroup_StatusFromJSON(object: any): LogGroup_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return LogGroup_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'CREATING':
            return LogGroup_Status.CREATING;
        case 2:
        case 'ACTIVE':
            return LogGroup_Status.ACTIVE;
        case 3:
        case 'DELETING':
            return LogGroup_Status.DELETING;
        case 4:
        case 'ERROR':
            return LogGroup_Status.ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LogGroup_Status.UNRECOGNIZED;
    }
}

export function logGroup_StatusToJSON(object: LogGroup_Status): string {
    switch (object) {
        case LogGroup_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case LogGroup_Status.CREATING:
            return 'CREATING';
        case LogGroup_Status.ACTIVE:
            return 'ACTIVE';
        case LogGroup_Status.DELETING:
            return 'DELETING';
        case LogGroup_Status.ERROR:
            return 'ERROR';
        default:
            return 'UNKNOWN';
    }
}

export interface LogGroup_LabelsEntry {
    $type: 'yandex.cloud.logging.v1.LogGroup.LabelsEntry';
    key: string;
    value: string;
}

const baseLogGroup: object = {
    $type: 'yandex.cloud.logging.v1.LogGroup',
    id: '',
    folderId: '',
    cloudId: '',
    name: '',
    description: '',
    status: 0,
};

export const LogGroup = {
    $type: 'yandex.cloud.logging.v1.LogGroup' as const,

    encode(
        message: LogGroup,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.folderId !== '') {
            writer.uint32(18).string(message.folderId);
        }
        if (message.cloudId !== '') {
            writer.uint32(26).string(message.cloudId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            LogGroup_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.logging.v1.LogGroup.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(58).fork()
            ).ldelim();
        });
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.retentionPeriod !== undefined) {
            Duration.encode(
                message.retentionPeriod,
                writer.uint32(74).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LogGroup {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogGroup } as LogGroup;
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
                    message.cloudId = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    const entry7 = LogGroup_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry7.value !== undefined) {
                        message.labels[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.status = reader.int32() as any;
                    break;
                case 9:
                    message.retentionPeriod = Duration.decode(
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

    fromJSON(object: any): LogGroup {
        const message = { ...baseLogGroup } as LogGroup;
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
            message.status = logGroup_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (
            object.retentionPeriod !== undefined &&
            object.retentionPeriod !== null
        ) {
            message.retentionPeriod = Duration.fromJSON(object.retentionPeriod);
        } else {
            message.retentionPeriod = undefined;
        }
        return message;
    },

    toJSON(message: LogGroup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
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
            (obj.status = logGroup_StatusToJSON(message.status));
        message.retentionPeriod !== undefined &&
            (obj.retentionPeriod = message.retentionPeriod
                ? Duration.toJSON(message.retentionPeriod)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<LogGroup>): LogGroup {
        const message = { ...baseLogGroup } as LogGroup;
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
        if (
            object.retentionPeriod !== undefined &&
            object.retentionPeriod !== null
        ) {
            message.retentionPeriod = Duration.fromPartial(
                object.retentionPeriod
            );
        } else {
            message.retentionPeriod = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(LogGroup.$type, LogGroup);

const baseLogGroup_LabelsEntry: object = {
    $type: 'yandex.cloud.logging.v1.LogGroup.LabelsEntry',
    key: '',
    value: '',
};

export const LogGroup_LabelsEntry = {
    $type: 'yandex.cloud.logging.v1.LogGroup.LabelsEntry' as const,

    encode(
        message: LogGroup_LabelsEntry,
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
    ): LogGroup_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLogGroup_LabelsEntry } as LogGroup_LabelsEntry;
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

    fromJSON(object: any): LogGroup_LabelsEntry {
        const message = { ...baseLogGroup_LabelsEntry } as LogGroup_LabelsEntry;
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

    toJSON(message: LogGroup_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<LogGroup_LabelsEntry>
    ): LogGroup_LabelsEntry {
        const message = { ...baseLogGroup_LabelsEntry } as LogGroup_LabelsEntry;
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

messageTypeRegistry.set(LogGroup_LabelsEntry.$type, LogGroup_LabelsEntry);

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
