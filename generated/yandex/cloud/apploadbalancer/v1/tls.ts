/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.apploadbalancer.v1';

export interface ValidationContext {
    /** Trusted CA certificate ID in the Certificate Manager. */
    trustedCaId: string | undefined;
    /** Trusted CA blob. */
    trustedCaBytes: string | undefined;
}

const baseValidationContext: object = {};

export const ValidationContext = {
    encode(
        message: ValidationContext,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.trustedCaId !== undefined) {
            writer.uint32(10).string(message.trustedCaId);
        }
        if (message.trustedCaBytes !== undefined) {
            writer.uint32(18).string(message.trustedCaBytes);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ValidationContext {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValidationContext } as ValidationContext;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trustedCaId = reader.string();
                    break;
                case 2:
                    message.trustedCaBytes = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ValidationContext {
        const message = { ...baseValidationContext } as ValidationContext;
        if (object.trustedCaId !== undefined && object.trustedCaId !== null) {
            message.trustedCaId = String(object.trustedCaId);
        } else {
            message.trustedCaId = undefined;
        }
        if (
            object.trustedCaBytes !== undefined &&
            object.trustedCaBytes !== null
        ) {
            message.trustedCaBytes = String(object.trustedCaBytes);
        } else {
            message.trustedCaBytes = undefined;
        }
        return message;
    },

    toJSON(message: ValidationContext): unknown {
        const obj: any = {};
        message.trustedCaId !== undefined &&
            (obj.trustedCaId = message.trustedCaId);
        message.trustedCaBytes !== undefined &&
            (obj.trustedCaBytes = message.trustedCaBytes);
        return obj;
    },

    fromPartial(object: DeepPartial<ValidationContext>): ValidationContext {
        const message = { ...baseValidationContext } as ValidationContext;
        if (object.trustedCaId !== undefined && object.trustedCaId !== null) {
            message.trustedCaId = object.trustedCaId;
        } else {
            message.trustedCaId = undefined;
        }
        if (
            object.trustedCaBytes !== undefined &&
            object.trustedCaBytes !== null
        ) {
            message.trustedCaBytes = object.trustedCaBytes;
        } else {
            message.trustedCaBytes = undefined;
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
