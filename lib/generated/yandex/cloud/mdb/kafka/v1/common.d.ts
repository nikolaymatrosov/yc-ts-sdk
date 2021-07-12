export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
export declare enum CompressionType {
    COMPRESSION_TYPE_UNSPECIFIED = 0,
    /** COMPRESSION_TYPE_UNCOMPRESSED - no codec (uncompressed). */
    COMPRESSION_TYPE_UNCOMPRESSED = 1,
    /** COMPRESSION_TYPE_ZSTD - Zstandard codec. */
    COMPRESSION_TYPE_ZSTD = 2,
    /** COMPRESSION_TYPE_LZ4 - LZ4 codec. */
    COMPRESSION_TYPE_LZ4 = 3,
    /** COMPRESSION_TYPE_SNAPPY - Snappy codec. */
    COMPRESSION_TYPE_SNAPPY = 4,
    /** COMPRESSION_TYPE_GZIP - GZip codec. */
    COMPRESSION_TYPE_GZIP = 5,
    /** COMPRESSION_TYPE_PRODUCER - the codec to use is set by a producer (can be any of `ZSTD`, `LZ4`, `GZIP` or `SNAPPY` codecs). */
    COMPRESSION_TYPE_PRODUCER = 6,
    UNRECOGNIZED = -1
}
export declare function compressionTypeFromJSON(object: any): CompressionType;
export declare function compressionTypeToJSON(object: CompressionType): string;
