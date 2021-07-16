/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';

/** A health check payload resource. */
export interface Payload {
    /** Payload text. */
    text: string | undefined;
}

const basePayload: object = {};

export const Payload = {
    encode(
        message: Payload,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.text !== undefined) {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Payload {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePayload } as Payload;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Payload {
        const message = { ...basePayload } as Payload;
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        } else {
            message.text = undefined;
        }
        return message;
    },

    toJSON(message: Payload): unknown {
        const obj: any = {};
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },

    fromPartial(object: DeepPartial<Payload>): Payload {
        const message = { ...basePayload } as Payload;
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        } else {
            message.text = undefined;
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
