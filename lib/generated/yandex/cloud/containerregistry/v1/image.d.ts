import { Blob } from '../../../../yandex/cloud/containerregistry/v1/blob';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
/** An Image resource. For more information, see [Docker image](/docs/cloud/container-registry/docker-image). */
export interface Image {
    $type: 'yandex.cloud.containerregistry.v1.Image';
    /** Output only. ID of the Docker image. */
    id: string;
    /**
     * Name of the Docker image.
     * The name is unique within the registry.
     */
    name: string;
    /** Content-addressable identifier of the Docker image. */
    digest: string;
    /** Compressed size of the Docker image, specified in bytes. */
    compressedSize: number;
    /** Configuration of the Docker image. */
    config: Blob | undefined;
    /** Layers of the Docker image. */
    layers: Blob[];
    /**
     * Tags of the Docker image.
     *
     * Each tag is unique within the repository.
     */
    tags: string[];
    /** Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt: Date | undefined;
}
export declare const Image: {
    $type: "yandex.cloud.containerregistry.v1.Image";
    encode(message: Image, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image;
    fromJSON(object: any): Image;
    toJSON(message: Image): unknown;
    fromPartial(object: DeepPartial<Image>): Image;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
