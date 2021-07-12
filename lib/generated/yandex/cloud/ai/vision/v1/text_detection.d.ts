import { Polygon } from '../../../../../yandex/cloud/ai/vision/v1/primitives';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ai.vision.v1";
export interface TextAnnotation {
    /**
     * Pages of the recognized file.
     *
     * For JPEG and PNG files contains only 1 page.
     */
    pages: Page[];
}
export interface Page {
    /** Page width in pixels. */
    width: number;
    /** Page height in pixels. */
    height: number;
    /** Recognized text blocks in this page. */
    blocks: Block[];
    /** Recognized entities */
    entities: Entity[];
}
export interface Entity {
    /** Entity name */
    name: string;
    /** Recognized entity text */
    text: string;
}
export interface Block {
    /** Area on the page where the text block is located. */
    boundingBox: Polygon | undefined;
    /** Recognized lines in this block. */
    lines: Line[];
}
export interface Line {
    /** Area on the page where the line is located. */
    boundingBox: Polygon | undefined;
    /** Recognized words in this line. */
    words: Word[];
    /** Confidence of the OCR results for the line. Range [0, 1]. */
    confidence: number;
}
export interface Word {
    /** Area on the page where the word is located. */
    boundingBox: Polygon | undefined;
    /** Recognized word value. */
    text: string;
    /** Confidence of the OCR results for the word. Range [0, 1]. */
    confidence: number;
    /** A list of detected languages together with confidence. */
    languages: Word_DetectedLanguage[];
    /** Id of recognized word in entities array */
    entityIndex: number;
}
export interface Word_DetectedLanguage {
    /** Detected language code. */
    languageCode: string;
    /** Confidence of detected language. Range [0, 1]. */
    confidence: number;
}
export declare const TextAnnotation: {
    encode(message: TextAnnotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextAnnotation;
    fromJSON(object: any): TextAnnotation;
    toJSON(message: TextAnnotation): unknown;
    fromPartial(object: DeepPartial<TextAnnotation>): TextAnnotation;
};
export declare const Page: {
    encode(message: Page, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Page;
    fromJSON(object: any): Page;
    toJSON(message: Page): unknown;
    fromPartial(object: DeepPartial<Page>): Page;
};
export declare const Entity: {
    encode(message: Entity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Entity;
    fromJSON(object: any): Entity;
    toJSON(message: Entity): unknown;
    fromPartial(object: DeepPartial<Entity>): Entity;
};
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
    fromPartial(object: DeepPartial<Block>): Block;
};
export declare const Line: {
    encode(message: Line, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Line;
    fromJSON(object: any): Line;
    toJSON(message: Line): unknown;
    fromPartial(object: DeepPartial<Line>): Line;
};
export declare const Word: {
    encode(message: Word, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Word;
    fromJSON(object: any): Word;
    toJSON(message: Word): unknown;
    fromPartial(object: DeepPartial<Word>): Word;
};
export declare const Word_DetectedLanguage: {
    encode(message: Word_DetectedLanguage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Word_DetectedLanguage;
    fromJSON(object: any): Word_DetectedLanguage;
    toJSON(message: Word_DetectedLanguage): unknown;
    fromPartial(object: DeepPartial<Word_DetectedLanguage>): Word_DetectedLanguage;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
