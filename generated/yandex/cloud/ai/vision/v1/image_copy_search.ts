/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.vision.v1';

export interface ImageCopySearchAnnotation {
    /** Number of image copies */
    copyCount: number;
    /** Top relevance result of image copy search */
    topResults: CopyMatch[];
}

export interface CopyMatch {
    /** url of image */
    imageUrl: string;
    /** url of page that contains image */
    pageUrl: string;
    /** page title that contains image */
    title: string;
    /** image description */
    description: string;
}

const baseImageCopySearchAnnotation: object = { copyCount: 0 };

export const ImageCopySearchAnnotation = {
    encode(
        message: ImageCopySearchAnnotation,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.copyCount !== 0) {
            writer.uint32(8).int64(message.copyCount);
        }
        for (const v of message.topResults) {
            CopyMatch.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ImageCopySearchAnnotation {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseImageCopySearchAnnotation,
        } as ImageCopySearchAnnotation;
        message.topResults = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.copyCount = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.topResults.push(
                        CopyMatch.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ImageCopySearchAnnotation {
        const message = {
            ...baseImageCopySearchAnnotation,
        } as ImageCopySearchAnnotation;
        message.topResults = [];
        if (object.copyCount !== undefined && object.copyCount !== null) {
            message.copyCount = Number(object.copyCount);
        } else {
            message.copyCount = 0;
        }
        if (object.topResults !== undefined && object.topResults !== null) {
            for (const e of object.topResults) {
                message.topResults.push(CopyMatch.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ImageCopySearchAnnotation): unknown {
        const obj: any = {};
        message.copyCount !== undefined && (obj.copyCount = message.copyCount);
        if (message.topResults) {
            obj.topResults = message.topResults.map((e) =>
                e ? CopyMatch.toJSON(e) : undefined
            );
        } else {
            obj.topResults = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ImageCopySearchAnnotation>
    ): ImageCopySearchAnnotation {
        const message = {
            ...baseImageCopySearchAnnotation,
        } as ImageCopySearchAnnotation;
        message.topResults = [];
        if (object.copyCount !== undefined && object.copyCount !== null) {
            message.copyCount = object.copyCount;
        } else {
            message.copyCount = 0;
        }
        if (object.topResults !== undefined && object.topResults !== null) {
            for (const e of object.topResults) {
                message.topResults.push(CopyMatch.fromPartial(e));
            }
        }
        return message;
    },
};

const baseCopyMatch: object = {
    imageUrl: '',
    pageUrl: '',
    title: '',
    description: '',
};

export const CopyMatch = {
    encode(
        message: CopyMatch,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.imageUrl !== '') {
            writer.uint32(10).string(message.imageUrl);
        }
        if (message.pageUrl !== '') {
            writer.uint32(18).string(message.pageUrl);
        }
        if (message.title !== '') {
            writer.uint32(26).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CopyMatch {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCopyMatch } as CopyMatch;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageUrl = reader.string();
                    break;
                case 2:
                    message.pageUrl = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CopyMatch {
        const message = { ...baseCopyMatch } as CopyMatch;
        if (object.imageUrl !== undefined && object.imageUrl !== null) {
            message.imageUrl = String(object.imageUrl);
        } else {
            message.imageUrl = '';
        }
        if (object.pageUrl !== undefined && object.pageUrl !== null) {
            message.pageUrl = String(object.pageUrl);
        } else {
            message.pageUrl = '';
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        } else {
            message.title = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        return message;
    },

    toJSON(message: CopyMatch): unknown {
        const obj: any = {};
        message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
        message.pageUrl !== undefined && (obj.pageUrl = message.pageUrl);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },

    fromPartial(object: DeepPartial<CopyMatch>): CopyMatch {
        const message = { ...baseCopyMatch } as CopyMatch;
        if (object.imageUrl !== undefined && object.imageUrl !== null) {
            message.imageUrl = object.imageUrl;
        } else {
            message.imageUrl = '';
        }
        if (object.pageUrl !== undefined && object.pageUrl !== null) {
            message.pageUrl = object.pageUrl;
        } else {
            message.pageUrl = '';
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        } else {
            message.title = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
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