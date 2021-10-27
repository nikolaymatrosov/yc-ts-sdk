/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.iam.v1.awscompatibility';

/**
 * An access key.
 * For more information, see [AWS-compatible access keys](/docs/iam/concepts/authorization/access-key).
 */
export interface AccessKey {
    $type: 'yandex.cloud.iam.v1.awscompatibility.AccessKey';
    /**
     * ID of the AccessKey resource.
     * It is used to manage secret credentials: an access key ID and a secret access key.
     */
    id: string;
    /** ID of the service account that the access key belongs to. */
    serviceAccountId: string;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Description of the access key. 0-256 characters long. */
    description: string;
    /**
     * ID of the access key.
     * The key is AWS compatible.
     */
    keyId: string;
}

const baseAccessKey: object = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.AccessKey',
    id: '',
    serviceAccountId: '',
    description: '',
    keyId: '',
};

export const AccessKey = {
    $type: 'yandex.cloud.iam.v1.awscompatibility.AccessKey' as const,

    encode(
        message: AccessKey,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.serviceAccountId !== '') {
            writer.uint32(18).string(message.serviceAccountId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.keyId !== '') {
            writer.uint32(42).string(message.keyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AccessKey {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessKey } as AccessKey;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.serviceAccountId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AccessKey {
        const message = { ...baseAccessKey } as AccessKey;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        } else {
            message.keyId = '';
        }
        return message;
    },

    toJSON(message: AccessKey): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.description !== undefined &&
            (obj.description = message.description);
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },

    fromPartial(object: DeepPartial<AccessKey>): AccessKey {
        const message = { ...baseAccessKey } as AccessKey;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        } else {
            message.keyId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(AccessKey.$type, AccessKey);

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
