/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.iam.v1';

/** A Key resource. For more information, see [Authorized keys](/docs/iam/concepts/authorization/key). */
export interface Key {
    $type: 'yandex.cloud.iam.v1.Key';
    /** ID of the Key resource. */
    id: string;
    /** ID of the user account that the Key resource belongs to. */
    userAccountId: string | undefined;
    /** ID of the service account that the Key resource belongs to. */
    serviceAccountId: string | undefined;
    /** Creation timestamp. */
    createdAt: Date | undefined;
    /** Description of the Key resource. 0-256 characters long. */
    description: string;
    /** An algorithm used to generate a key pair of the Key resource. */
    keyAlgorithm: Key_Algorithm;
    /** A public key of the Key resource. */
    publicKey: string;
}

export enum Key_Algorithm {
    ALGORITHM_UNSPECIFIED = 0,
    /** RSA_2048 - RSA with a 2048-bit key size. Default value. */
    RSA_2048 = 1,
    /** RSA_4096 - RSA with a 4096-bit key size. */
    RSA_4096 = 2,
    UNRECOGNIZED = -1,
}

export function key_AlgorithmFromJSON(object: any): Key_Algorithm {
    switch (object) {
        case 0:
        case 'ALGORITHM_UNSPECIFIED':
            return Key_Algorithm.ALGORITHM_UNSPECIFIED;
        case 1:
        case 'RSA_2048':
            return Key_Algorithm.RSA_2048;
        case 2:
        case 'RSA_4096':
            return Key_Algorithm.RSA_4096;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Key_Algorithm.UNRECOGNIZED;
    }
}

export function key_AlgorithmToJSON(object: Key_Algorithm): string {
    switch (object) {
        case Key_Algorithm.ALGORITHM_UNSPECIFIED:
            return 'ALGORITHM_UNSPECIFIED';
        case Key_Algorithm.RSA_2048:
            return 'RSA_2048';
        case Key_Algorithm.RSA_4096:
            return 'RSA_4096';
        default:
            return 'UNKNOWN';
    }
}

const baseKey: object = {
    $type: 'yandex.cloud.iam.v1.Key',
    id: '',
    description: '',
    keyAlgorithm: 0,
    publicKey: '',
};

export const Key = {
    $type: 'yandex.cloud.iam.v1.Key' as const,

    encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.userAccountId !== undefined) {
            writer.uint32(18).string(message.userAccountId);
        }
        if (message.serviceAccountId !== undefined) {
            writer.uint32(26).string(message.serviceAccountId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.keyAlgorithm !== 0) {
            writer.uint32(48).int32(message.keyAlgorithm);
        }
        if (message.publicKey !== '') {
            writer.uint32(58).string(message.publicKey);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Key {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKey } as Key;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.userAccountId = reader.string();
                    break;
                case 3:
                    message.serviceAccountId = reader.string();
                    break;
                case 4:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.keyAlgorithm = reader.int32() as any;
                    break;
                case 7:
                    message.publicKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Key {
        const message = { ...baseKey } as Key;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (
            object.userAccountId !== undefined &&
            object.userAccountId !== null
        ) {
            message.userAccountId = String(object.userAccountId);
        } else {
            message.userAccountId = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = undefined;
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
        if (object.keyAlgorithm !== undefined && object.keyAlgorithm !== null) {
            message.keyAlgorithm = key_AlgorithmFromJSON(object.keyAlgorithm);
        } else {
            message.keyAlgorithm = 0;
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = String(object.publicKey);
        } else {
            message.publicKey = '';
        }
        return message;
    },

    toJSON(message: Key): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.userAccountId !== undefined &&
            (obj.userAccountId = message.userAccountId);
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.description !== undefined &&
            (obj.description = message.description);
        message.keyAlgorithm !== undefined &&
            (obj.keyAlgorithm = key_AlgorithmToJSON(message.keyAlgorithm));
        message.publicKey !== undefined && (obj.publicKey = message.publicKey);
        return obj;
    },

    fromPartial(object: DeepPartial<Key>): Key {
        const message = { ...baseKey } as Key;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (
            object.userAccountId !== undefined &&
            object.userAccountId !== null
        ) {
            message.userAccountId = object.userAccountId;
        } else {
            message.userAccountId = undefined;
        }
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = undefined;
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
        if (object.keyAlgorithm !== undefined && object.keyAlgorithm !== null) {
            message.keyAlgorithm = object.keyAlgorithm;
        } else {
            message.keyAlgorithm = 0;
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = object.publicKey;
        } else {
            message.publicKey = '';
        }
        return message;
    },
};

messageTypeRegistry.set(Key.$type, Key);

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
