/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.redis.v1';

/**
 * Description of a Redis backup. For more information, see
 * the Managed Service for Redis [documentation](/docs/managed-redis/concepts/backup).
 */
export interface Backup {
    $type: 'yandex.cloud.mdb.redis.v1.Backup';
    /** ID of the backup. */
    id: string;
    /** ID of the folder that the backup belongs to. */
    folderId: string;
    /**
     * Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format
     * (i.e. when the backup operation was completed).
     */
    createdAt: Date | undefined;
    /** ID of the Redis cluster that the backup was created for. */
    sourceClusterId: string;
    /**
     * Start timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format
     * (i.e. when the backup operation was started).
     */
    startedAt: Date | undefined;
    /** Shard names used as a source for backup. */
    sourceShardNames: string[];
}

const baseBackup: object = {
    $type: 'yandex.cloud.mdb.redis.v1.Backup',
    id: '',
    folderId: '',
    sourceClusterId: '',
    sourceShardNames: '',
};

export const Backup = {
    $type: 'yandex.cloud.mdb.redis.v1.Backup' as const,

    encode(
        message: Backup,
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
        if (message.sourceClusterId !== '') {
            writer.uint32(34).string(message.sourceClusterId);
        }
        if (message.startedAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.startedAt),
                writer.uint32(42).fork()
            ).ldelim();
        }
        for (const v of message.sourceShardNames) {
            writer.uint32(50).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Backup {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBackup } as Backup;
        message.sourceShardNames = [];
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
                    message.sourceClusterId = reader.string();
                    break;
                case 5:
                    message.startedAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 6:
                    message.sourceShardNames.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Backup {
        const message = { ...baseBackup } as Backup;
        message.sourceShardNames = [];
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
        if (
            object.sourceClusterId !== undefined &&
            object.sourceClusterId !== null
        ) {
            message.sourceClusterId = String(object.sourceClusterId);
        } else {
            message.sourceClusterId = '';
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = fromJsonTimestamp(object.startedAt);
        } else {
            message.startedAt = undefined;
        }
        if (
            object.sourceShardNames !== undefined &&
            object.sourceShardNames !== null
        ) {
            for (const e of object.sourceShardNames) {
                message.sourceShardNames.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: Backup): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.sourceClusterId !== undefined &&
            (obj.sourceClusterId = message.sourceClusterId);
        message.startedAt !== undefined &&
            (obj.startedAt = message.startedAt.toISOString());
        if (message.sourceShardNames) {
            obj.sourceShardNames = message.sourceShardNames.map((e) => e);
        } else {
            obj.sourceShardNames = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Backup>): Backup {
        const message = { ...baseBackup } as Backup;
        message.sourceShardNames = [];
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
        if (
            object.sourceClusterId !== undefined &&
            object.sourceClusterId !== null
        ) {
            message.sourceClusterId = object.sourceClusterId;
        } else {
            message.sourceClusterId = '';
        }
        if (object.startedAt !== undefined && object.startedAt !== null) {
            message.startedAt = object.startedAt;
        } else {
            message.startedAt = undefined;
        }
        if (
            object.sourceShardNames !== undefined &&
            object.sourceShardNames !== null
        ) {
            for (const e of object.sourceShardNames) {
                message.sourceShardNames.push(e);
            }
        }
        return message;
    },
};

messageTypeRegistry.set(Backup.$type, Backup);

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
