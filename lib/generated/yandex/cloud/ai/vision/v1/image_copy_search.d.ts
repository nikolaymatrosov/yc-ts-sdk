import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ai.vision.v1";
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
export declare const ImageCopySearchAnnotation: {
    encode(message: ImageCopySearchAnnotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ImageCopySearchAnnotation;
    fromJSON(object: any): ImageCopySearchAnnotation;
    toJSON(message: ImageCopySearchAnnotation): unknown;
    fromPartial(object: DeepPartial<ImageCopySearchAnnotation>): ImageCopySearchAnnotation;
};
export declare const CopyMatch: {
    encode(message: CopyMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CopyMatch;
    fromJSON(object: any): CopyMatch;
    toJSON(message: CopyMatch): unknown;
    fromPartial(object: DeepPartial<CopyMatch>): CopyMatch;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
