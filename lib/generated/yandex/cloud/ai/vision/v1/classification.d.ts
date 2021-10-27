import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ai.vision.v1";
export interface ClassAnnotation {
    $type: 'yandex.cloud.ai.vision.v1.ClassAnnotation';
    /**
     * Properties extracted by a specified model.
     *
     * For example, if you ask to evaluate the image quality,
     * the service could return such properties as `good` and `bad`.
     */
    properties: Property[];
}
export interface Property {
    $type: 'yandex.cloud.ai.vision.v1.Property';
    /** Property name. */
    name: string;
    /** Probability of the property, from 0 to 1. */
    probability: number;
}
export declare const ClassAnnotation: {
    $type: "yandex.cloud.ai.vision.v1.ClassAnnotation";
    encode(message: ClassAnnotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClassAnnotation;
    fromJSON(object: any): ClassAnnotation;
    toJSON(message: ClassAnnotation): unknown;
    fromPartial(object: DeepPartial<ClassAnnotation>): ClassAnnotation;
};
export declare const Property: {
    $type: "yandex.cloud.ai.vision.v1.Property";
    encode(message: Property, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Property;
    fromJSON(object: any): Property;
    toJSON(message: Property): unknown;
    fromPartial(object: DeepPartial<Property>): Property;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
