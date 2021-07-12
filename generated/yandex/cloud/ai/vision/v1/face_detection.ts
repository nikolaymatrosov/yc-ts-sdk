/* eslint-disable */
import { Polygon } from '../../../../../yandex/cloud/ai/vision/v1/primitives';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.ai.vision.v1';

export interface FaceAnnotation {
    /** An array of detected faces for the specified image. */
    faces: Face[];
}

export interface Face {
    /** Area on the image where the face is located. */
    boundingBox: Polygon | undefined;
}

const baseFaceAnnotation: object = {};

export const FaceAnnotation = {
    encode(
        message: FaceAnnotation,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.faces) {
            Face.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FaceAnnotation {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFaceAnnotation } as FaceAnnotation;
        message.faces = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.faces.push(Face.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FaceAnnotation {
        const message = { ...baseFaceAnnotation } as FaceAnnotation;
        message.faces = [];
        if (object.faces !== undefined && object.faces !== null) {
            for (const e of object.faces) {
                message.faces.push(Face.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: FaceAnnotation): unknown {
        const obj: any = {};
        if (message.faces) {
            obj.faces = message.faces.map((e) =>
                e ? Face.toJSON(e) : undefined
            );
        } else {
            obj.faces = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<FaceAnnotation>): FaceAnnotation {
        const message = { ...baseFaceAnnotation } as FaceAnnotation;
        message.faces = [];
        if (object.faces !== undefined && object.faces !== null) {
            for (const e of object.faces) {
                message.faces.push(Face.fromPartial(e));
            }
        }
        return message;
    },
};

const baseFace: object = {};

export const Face = {
    encode(
        message: Face,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.boundingBox !== undefined) {
            Polygon.encode(
                message.boundingBox,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Face {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFace } as Face;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boundingBox = Polygon.decode(
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

    fromJSON(object: any): Face {
        const message = { ...baseFace } as Face;
        if (object.boundingBox !== undefined && object.boundingBox !== null) {
            message.boundingBox = Polygon.fromJSON(object.boundingBox);
        } else {
            message.boundingBox = undefined;
        }
        return message;
    },

    toJSON(message: Face): unknown {
        const obj: any = {};
        message.boundingBox !== undefined &&
            (obj.boundingBox = message.boundingBox
                ? Polygon.toJSON(message.boundingBox)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Face>): Face {
        const message = { ...baseFace } as Face;
        if (object.boundingBox !== undefined && object.boundingBox !== null) {
            message.boundingBox = Polygon.fromPartial(object.boundingBox);
        } else {
            message.boundingBox = undefined;
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
