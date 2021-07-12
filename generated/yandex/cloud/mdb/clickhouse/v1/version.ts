/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

export interface Version {
    /** ID of the version. */
    id: string;
    /** Name of the version. */
    name: string;
    /** Whether version is deprecated. */
    deprecated: boolean;
    /** List of versions that can be updated from current. */
    updatableTo: string[];
}

const baseVersion: object = {
    id: '',
    name: '',
    deprecated: false,
    updatableTo: '',
};

export const Version = {
    encode(
        message: Version,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        for (const v of message.updatableTo) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Version {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVersion } as Version;
        message.updatableTo = [];
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
                    message.deprecated = reader.bool();
                    break;
                case 4:
                    message.updatableTo.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Version {
        const message = { ...baseVersion } as Version;
        message.updatableTo = [];
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
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = Boolean(object.deprecated);
        } else {
            message.deprecated = false;
        }
        if (object.updatableTo !== undefined && object.updatableTo !== null) {
            for (const e of object.updatableTo) {
                message.updatableTo.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: Version): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.deprecated !== undefined &&
            (obj.deprecated = message.deprecated);
        if (message.updatableTo) {
            obj.updatableTo = message.updatableTo.map((e) => e);
        } else {
            obj.updatableTo = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Version>): Version {
        const message = { ...baseVersion } as Version;
        message.updatableTo = [];
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
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        } else {
            message.deprecated = false;
        }
        if (object.updatableTo !== undefined && object.updatableTo !== null) {
            for (const e of object.updatableTo) {
                message.updatableTo.push(e);
            }
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
