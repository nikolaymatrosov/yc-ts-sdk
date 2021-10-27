/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.lockbox.v1';

/** A payload. */
export interface Payload {
    /** ID of the version that the payload belongs to. */
    versionId: string;
    /** Payload entries. */
    entries: Payload_Entry[];
}

export interface Payload_Entry {
    /** Non-confidential key of the entry. */
    key: string;
    /** Text value. */
    textValue: string | undefined;
    /** Binary value. */
    binaryValue: Uint8Array | undefined;
}

const basePayload: object = { versionId: '' };

export const Payload = {
    encode(
        message: Payload,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.versionId !== '') {
            writer.uint32(10).string(message.versionId);
        }
        for (const v of message.entries) {
            Payload_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Payload {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePayload } as Payload;
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versionId = reader.string();
                    break;
                case 2:
                    message.entries.push(
                        Payload_Entry.decode(reader, reader.uint32())
                    );
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
        message.entries = [];
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(Payload_Entry.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: Payload): unknown {
        const obj: any = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        if (message.entries) {
            obj.entries = message.entries.map((e) =>
                e ? Payload_Entry.toJSON(e) : undefined
            );
        } else {
            obj.entries = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Payload>): Payload {
        const message = { ...basePayload } as Payload;
        message.entries = [];
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(Payload_Entry.fromPartial(e));
            }
        }
        return message;
    },
};

const basePayload_Entry: object = { key: '' };

export const Payload_Entry = {
    encode(
        message: Payload_Entry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.textValue !== undefined) {
            writer.uint32(18).string(message.textValue);
        }
        if (message.binaryValue !== undefined) {
            writer.uint32(26).bytes(message.binaryValue);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Payload_Entry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePayload_Entry } as Payload_Entry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.textValue = reader.string();
                    break;
                case 3:
                    message.binaryValue = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Payload_Entry {
        const message = { ...basePayload_Entry } as Payload_Entry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.textValue !== undefined && object.textValue !== null) {
            message.textValue = String(object.textValue);
        } else {
            message.textValue = undefined;
        }
        if (object.binaryValue !== undefined && object.binaryValue !== null) {
            message.binaryValue = bytesFromBase64(object.binaryValue);
        }
        return message;
    },

    toJSON(message: Payload_Entry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.textValue !== undefined && (obj.textValue = message.textValue);
        message.binaryValue !== undefined &&
            (obj.binaryValue =
                message.binaryValue !== undefined
                    ? base64FromBytes(message.binaryValue)
                    : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Payload_Entry>): Payload_Entry {
        const message = { ...basePayload_Entry } as Payload_Entry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.textValue !== undefined && object.textValue !== null) {
            message.textValue = object.textValue;
        } else {
            message.textValue = undefined;
        }
        if (object.binaryValue !== undefined && object.binaryValue !== null) {
            message.binaryValue = object.binaryValue;
        } else {
            message.binaryValue = undefined;
        }
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
    globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

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
