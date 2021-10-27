"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compressionTypeToJSON = exports.compressionTypeFromJSON = exports.CompressionType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.kafka.v1';
var CompressionType;
(function (CompressionType) {
    CompressionType[CompressionType["COMPRESSION_TYPE_UNSPECIFIED"] = 0] = "COMPRESSION_TYPE_UNSPECIFIED";
    /** COMPRESSION_TYPE_UNCOMPRESSED - no codec (uncompressed). */
    CompressionType[CompressionType["COMPRESSION_TYPE_UNCOMPRESSED"] = 1] = "COMPRESSION_TYPE_UNCOMPRESSED";
    /** COMPRESSION_TYPE_ZSTD - Zstandard codec. */
    CompressionType[CompressionType["COMPRESSION_TYPE_ZSTD"] = 2] = "COMPRESSION_TYPE_ZSTD";
    /** COMPRESSION_TYPE_LZ4 - LZ4 codec. */
    CompressionType[CompressionType["COMPRESSION_TYPE_LZ4"] = 3] = "COMPRESSION_TYPE_LZ4";
    /** COMPRESSION_TYPE_SNAPPY - Snappy codec. */
    CompressionType[CompressionType["COMPRESSION_TYPE_SNAPPY"] = 4] = "COMPRESSION_TYPE_SNAPPY";
    /** COMPRESSION_TYPE_GZIP - GZip codec. */
    CompressionType[CompressionType["COMPRESSION_TYPE_GZIP"] = 5] = "COMPRESSION_TYPE_GZIP";
    /** COMPRESSION_TYPE_PRODUCER - the codec to use is set by a producer (can be any of `ZSTD`, `LZ4`, `GZIP` or `SNAPPY` codecs). */
    CompressionType[CompressionType["COMPRESSION_TYPE_PRODUCER"] = 6] = "COMPRESSION_TYPE_PRODUCER";
    CompressionType[CompressionType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CompressionType = exports.CompressionType || (exports.CompressionType = {}));
function compressionTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'COMPRESSION_TYPE_UNSPECIFIED':
            return CompressionType.COMPRESSION_TYPE_UNSPECIFIED;
        case 1:
        case 'COMPRESSION_TYPE_UNCOMPRESSED':
            return CompressionType.COMPRESSION_TYPE_UNCOMPRESSED;
        case 2:
        case 'COMPRESSION_TYPE_ZSTD':
            return CompressionType.COMPRESSION_TYPE_ZSTD;
        case 3:
        case 'COMPRESSION_TYPE_LZ4':
            return CompressionType.COMPRESSION_TYPE_LZ4;
        case 4:
        case 'COMPRESSION_TYPE_SNAPPY':
            return CompressionType.COMPRESSION_TYPE_SNAPPY;
        case 5:
        case 'COMPRESSION_TYPE_GZIP':
            return CompressionType.COMPRESSION_TYPE_GZIP;
        case 6:
        case 'COMPRESSION_TYPE_PRODUCER':
            return CompressionType.COMPRESSION_TYPE_PRODUCER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CompressionType.UNRECOGNIZED;
    }
}
exports.compressionTypeFromJSON = compressionTypeFromJSON;
function compressionTypeToJSON(object) {
    switch (object) {
        case CompressionType.COMPRESSION_TYPE_UNSPECIFIED:
            return 'COMPRESSION_TYPE_UNSPECIFIED';
        case CompressionType.COMPRESSION_TYPE_UNCOMPRESSED:
            return 'COMPRESSION_TYPE_UNCOMPRESSED';
        case CompressionType.COMPRESSION_TYPE_ZSTD:
            return 'COMPRESSION_TYPE_ZSTD';
        case CompressionType.COMPRESSION_TYPE_LZ4:
            return 'COMPRESSION_TYPE_LZ4';
        case CompressionType.COMPRESSION_TYPE_SNAPPY:
            return 'COMPRESSION_TYPE_SNAPPY';
        case CompressionType.COMPRESSION_TYPE_GZIP:
            return 'COMPRESSION_TYPE_GZIP';
        case CompressionType.COMPRESSION_TYPE_PRODUCER:
            return 'COMPRESSION_TYPE_PRODUCER';
        default:
            return 'UNKNOWN';
    }
}
exports.compressionTypeToJSON = compressionTypeToJSON;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
