/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.billing.v1';

/**
 * Represents a link to an object in other service.
 * This object is being billed in the scope of a billing account.
 */
export interface BillableObject {
    $type: 'yandex.cloud.billing.v1.BillableObject';
    /** ID of the object in other service. */
    id: string;
    /**
     * Billable object type. Can be one of the following:
     * * `cloud`
     */
    type: string;
}

/** Represents a binding of the BillableObject to a BillingAccount. */
export interface BillableObjectBinding {
    $type: 'yandex.cloud.billing.v1.BillableObjectBinding';
    /** Timestamp when binding was created. */
    effectiveTime: Date | undefined;
    /** Object that is bound to billing account. */
    billableObject: BillableObject | undefined;
}

const baseBillableObject: object = {
    $type: 'yandex.cloud.billing.v1.BillableObject',
    id: '',
    type: '',
};

export const BillableObject = {
    $type: 'yandex.cloud.billing.v1.BillableObject' as const,

    encode(
        message: BillableObject,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BillableObject {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBillableObject } as BillableObject;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BillableObject {
        const message = { ...baseBillableObject } as BillableObject;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        } else {
            message.type = '';
        }
        return message;
    },

    toJSON(message: BillableObject): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },

    fromPartial(object: DeepPartial<BillableObject>): BillableObject {
        const message = { ...baseBillableObject } as BillableObject;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = '';
        }
        return message;
    },
};

messageTypeRegistry.set(BillableObject.$type, BillableObject);

const baseBillableObjectBinding: object = {
    $type: 'yandex.cloud.billing.v1.BillableObjectBinding',
};

export const BillableObjectBinding = {
    $type: 'yandex.cloud.billing.v1.BillableObjectBinding' as const,

    encode(
        message: BillableObjectBinding,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.effectiveTime !== undefined) {
            Timestamp.encode(
                toTimestamp(message.effectiveTime),
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.billableObject !== undefined) {
            BillableObject.encode(
                message.billableObject,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): BillableObjectBinding {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBillableObjectBinding,
        } as BillableObjectBinding;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveTime = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.billableObject = BillableObject.decode(
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

    fromJSON(object: any): BillableObjectBinding {
        const message = {
            ...baseBillableObjectBinding,
        } as BillableObjectBinding;
        if (
            object.effectiveTime !== undefined &&
            object.effectiveTime !== null
        ) {
            message.effectiveTime = fromJsonTimestamp(object.effectiveTime);
        } else {
            message.effectiveTime = undefined;
        }
        if (
            object.billableObject !== undefined &&
            object.billableObject !== null
        ) {
            message.billableObject = BillableObject.fromJSON(
                object.billableObject
            );
        } else {
            message.billableObject = undefined;
        }
        return message;
    },

    toJSON(message: BillableObjectBinding): unknown {
        const obj: any = {};
        message.effectiveTime !== undefined &&
            (obj.effectiveTime = message.effectiveTime.toISOString());
        message.billableObject !== undefined &&
            (obj.billableObject = message.billableObject
                ? BillableObject.toJSON(message.billableObject)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<BillableObjectBinding>
    ): BillableObjectBinding {
        const message = {
            ...baseBillableObjectBinding,
        } as BillableObjectBinding;
        if (
            object.effectiveTime !== undefined &&
            object.effectiveTime !== null
        ) {
            message.effectiveTime = object.effectiveTime;
        } else {
            message.effectiveTime = undefined;
        }
        if (
            object.billableObject !== undefined &&
            object.billableObject !== null
        ) {
            message.billableObject = BillableObject.fromPartial(
                object.billableObject
            );
        } else {
            message.billableObject = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(BillableObjectBinding.$type, BillableObjectBinding);

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
