import { Polygon } from '../../../../../yandex/cloud/ai/vision/v1/primitives';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ai.vision.v1";
export interface FaceAnnotation {
    /** An array of detected faces for the specified image. */
    faces: Face[];
}
export interface Face {
    /** Area on the image where the face is located. */
    boundingBox: Polygon | undefined;
}
export declare const FaceAnnotation: {
    encode(message: FaceAnnotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FaceAnnotation;
    fromJSON(object: any): FaceAnnotation;
    toJSON(message: FaceAnnotation): unknown;
    fromPartial(object: DeepPartial<FaceAnnotation>): FaceAnnotation;
};
export declare const Face: {
    encode(message: Face, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Face;
    fromJSON(object: any): Face;
    toJSON(message: Face): unknown;
    fromPartial(object: DeepPartial<Face>): Face;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
