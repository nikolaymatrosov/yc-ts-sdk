/* eslint-disable */
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.containerregistry.v1';

export interface LifecyclePolicy {
    id: string;
    name: string;
    repositoryId: string;
    description: string;
    status: LifecyclePolicy_Status;
    createdAt: Date | undefined;
    rules: LifecycleRule[];
}

export enum LifecyclePolicy_Status {
    STATUS_UNSPECIFIED = 0,
    ACTIVE = 1,
    DISABLED = 2,
    UNRECOGNIZED = -1,
}

export function lifecyclePolicy_StatusFromJSON(
    object: any
): LifecyclePolicy_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return LifecyclePolicy_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'ACTIVE':
            return LifecyclePolicy_Status.ACTIVE;
        case 2:
        case 'DISABLED':
            return LifecyclePolicy_Status.DISABLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return LifecyclePolicy_Status.UNRECOGNIZED;
    }
}

export function lifecyclePolicy_StatusToJSON(
    object: LifecyclePolicy_Status
): string {
    switch (object) {
        case LifecyclePolicy_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case LifecyclePolicy_Status.ACTIVE:
            return 'ACTIVE';
        case LifecyclePolicy_Status.DISABLED:
            return 'DISABLED';
        default:
            return 'UNKNOWN';
    }
}

export interface LifecycleRule {
    description: string;
    expirePeriod: Duration | undefined;
    tagRegexp: string;
    untagged: boolean;
    retainedTop: number;
}

const baseLifecyclePolicy: object = {
    id: '',
    name: '',
    repositoryId: '',
    description: '',
    status: 0,
};

export const LifecyclePolicy = {
    encode(
        message: LifecyclePolicy,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.repositoryId !== '') {
            writer.uint32(26).string(message.repositoryId);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.createdAt),
                writer.uint32(50).fork()
            ).ldelim();
        }
        for (const v of message.rules) {
            LifecycleRule.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LifecyclePolicy {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLifecyclePolicy } as LifecyclePolicy;
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.repositoryId = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.status = reader.int32() as any;
                    break;
                case 6:
                    message.createdAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 7:
                    message.rules.push(
                        LifecycleRule.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LifecyclePolicy {
        const message = { ...baseLifecyclePolicy } as LifecyclePolicy;
        message.rules = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        } else {
            message.repositoryId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = lifecyclePolicy_StatusFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(LifecycleRule.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: LifecyclePolicy): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        message.description !== undefined &&
            (obj.description = message.description);
        message.status !== undefined &&
            (obj.status = lifecyclePolicy_StatusToJSON(message.status));
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        if (message.rules) {
            obj.rules = message.rules.map((e) =>
                e ? LifecycleRule.toJSON(e) : undefined
            );
        } else {
            obj.rules = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<LifecyclePolicy>): LifecyclePolicy {
        const message = { ...baseLifecyclePolicy } as LifecyclePolicy;
        message.rules = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        } else {
            message.repositoryId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        } else {
            message.createdAt = undefined;
        }
        if (object.rules !== undefined && object.rules !== null) {
            for (const e of object.rules) {
                message.rules.push(LifecycleRule.fromPartial(e));
            }
        }
        return message;
    },
};

const baseLifecycleRule: object = {
    description: '',
    tagRegexp: '',
    untagged: false,
    retainedTop: 0,
};

export const LifecycleRule = {
    encode(
        message: LifecycleRule,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.description !== '') {
            writer.uint32(10).string(message.description);
        }
        if (message.expirePeriod !== undefined) {
            Duration.encode(
                message.expirePeriod,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.tagRegexp !== '') {
            writer.uint32(26).string(message.tagRegexp);
        }
        if (message.untagged === true) {
            writer.uint32(32).bool(message.untagged);
        }
        if (message.retainedTop !== 0) {
            writer.uint32(40).int64(message.retainedTop);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LifecycleRule {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLifecycleRule } as LifecycleRule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.expirePeriod = Duration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.tagRegexp = reader.string();
                    break;
                case 4:
                    message.untagged = reader.bool();
                    break;
                case 5:
                    message.retainedTop = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LifecycleRule {
        const message = { ...baseLifecycleRule } as LifecycleRule;
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.expirePeriod !== undefined && object.expirePeriod !== null) {
            message.expirePeriod = Duration.fromJSON(object.expirePeriod);
        } else {
            message.expirePeriod = undefined;
        }
        if (object.tagRegexp !== undefined && object.tagRegexp !== null) {
            message.tagRegexp = String(object.tagRegexp);
        } else {
            message.tagRegexp = '';
        }
        if (object.untagged !== undefined && object.untagged !== null) {
            message.untagged = Boolean(object.untagged);
        } else {
            message.untagged = false;
        }
        if (object.retainedTop !== undefined && object.retainedTop !== null) {
            message.retainedTop = Number(object.retainedTop);
        } else {
            message.retainedTop = 0;
        }
        return message;
    },

    toJSON(message: LifecycleRule): unknown {
        const obj: any = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.expirePeriod !== undefined &&
            (obj.expirePeriod = message.expirePeriod
                ? Duration.toJSON(message.expirePeriod)
                : undefined);
        message.tagRegexp !== undefined && (obj.tagRegexp = message.tagRegexp);
        message.untagged !== undefined && (obj.untagged = message.untagged);
        message.retainedTop !== undefined &&
            (obj.retainedTop = message.retainedTop);
        return obj;
    },

    fromPartial(object: DeepPartial<LifecycleRule>): LifecycleRule {
        const message = { ...baseLifecycleRule } as LifecycleRule;
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.expirePeriod !== undefined && object.expirePeriod !== null) {
            message.expirePeriod = Duration.fromPartial(object.expirePeriod);
        } else {
            message.expirePeriod = undefined;
        }
        if (object.tagRegexp !== undefined && object.tagRegexp !== null) {
            message.tagRegexp = object.tagRegexp;
        } else {
            message.tagRegexp = '';
        }
        if (object.untagged !== undefined && object.untagged !== null) {
            message.untagged = object.untagged;
        } else {
            message.untagged = false;
        }
        if (object.retainedTop !== undefined && object.retainedTop !== null) {
            message.retainedTop = object.retainedTop;
        } else {
            message.retainedTop = 0;
        }
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
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