import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ai.vision.v1";
export interface Polygon {
    /** The bounding polygon vertices. */
    vertices: Vertex[];
}
export interface Vertex {
    /** X coordinate in pixels. */
    x: number;
    /** Y coordinate in pixels. */
    y: number;
}
export declare const Polygon: {
    encode(message: Polygon, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Polygon;
    fromJSON(object: any): Polygon;
    toJSON(message: Polygon): unknown;
    fromPartial(object: DeepPartial<Polygon>): Polygon;
};
export declare const Vertex: {
    encode(message: Vertex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Vertex;
    fromJSON(object: any): Vertex;
    toJSON(message: Vertex): unknown;
    fromPartial(object: DeepPartial<Vertex>): Vertex;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
