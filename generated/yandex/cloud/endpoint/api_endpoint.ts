/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.endpoint';

export interface ApiEndpoint {
    $type: 'yandex.cloud.endpoint.ApiEndpoint';
    id: string;
    address: string;
}

const baseApiEndpoint: object = {
    $type: 'yandex.cloud.endpoint.ApiEndpoint',
    id: '',
    address: '',
};

export const ApiEndpoint = {
    $type: 'yandex.cloud.endpoint.ApiEndpoint' as const,

    encode(
        message: ApiEndpoint,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.address !== '') {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ApiEndpoint {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApiEndpoint } as ApiEndpoint;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ApiEndpoint {
        const message = { ...baseApiEndpoint } as ApiEndpoint;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        return message;
    },

    toJSON(message: ApiEndpoint): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },

    fromPartial(object: DeepPartial<ApiEndpoint>): ApiEndpoint {
        const message = { ...baseApiEndpoint } as ApiEndpoint;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        return message;
    },
};

messageTypeRegistry.set(ApiEndpoint.$type, ApiEndpoint);

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
