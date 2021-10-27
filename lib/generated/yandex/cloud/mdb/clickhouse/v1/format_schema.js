"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatSchema = exports.formatSchemaTypeToJSON = exports.formatSchemaTypeFromJSON = exports.FormatSchemaType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';
var FormatSchemaType;
(function (FormatSchemaType) {
    FormatSchemaType[FormatSchemaType["FORMAT_SCHEMA_TYPE_UNSPECIFIED"] = 0] = "FORMAT_SCHEMA_TYPE_UNSPECIFIED";
    FormatSchemaType[FormatSchemaType["FORMAT_SCHEMA_TYPE_PROTOBUF"] = 1] = "FORMAT_SCHEMA_TYPE_PROTOBUF";
    FormatSchemaType[FormatSchemaType["FORMAT_SCHEMA_TYPE_CAPNPROTO"] = 2] = "FORMAT_SCHEMA_TYPE_CAPNPROTO";
    FormatSchemaType[FormatSchemaType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FormatSchemaType = exports.FormatSchemaType || (exports.FormatSchemaType = {}));
function formatSchemaTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'FORMAT_SCHEMA_TYPE_UNSPECIFIED':
            return FormatSchemaType.FORMAT_SCHEMA_TYPE_UNSPECIFIED;
        case 1:
        case 'FORMAT_SCHEMA_TYPE_PROTOBUF':
            return FormatSchemaType.FORMAT_SCHEMA_TYPE_PROTOBUF;
        case 2:
        case 'FORMAT_SCHEMA_TYPE_CAPNPROTO':
            return FormatSchemaType.FORMAT_SCHEMA_TYPE_CAPNPROTO;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FormatSchemaType.UNRECOGNIZED;
    }
}
exports.formatSchemaTypeFromJSON = formatSchemaTypeFromJSON;
function formatSchemaTypeToJSON(object) {
    switch (object) {
        case FormatSchemaType.FORMAT_SCHEMA_TYPE_UNSPECIFIED:
            return 'FORMAT_SCHEMA_TYPE_UNSPECIFIED';
        case FormatSchemaType.FORMAT_SCHEMA_TYPE_PROTOBUF:
            return 'FORMAT_SCHEMA_TYPE_PROTOBUF';
        case FormatSchemaType.FORMAT_SCHEMA_TYPE_CAPNPROTO:
            return 'FORMAT_SCHEMA_TYPE_CAPNPROTO';
        default:
            return 'UNKNOWN';
    }
}
exports.formatSchemaTypeToJSON = formatSchemaTypeToJSON;
const baseFormatSchema = { name: '', clusterId: '', type: 0, uri: '' };
exports.FormatSchema = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.clusterId !== '') {
            writer.uint32(18).string(message.clusterId);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFormatSchema };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.clusterId = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFormatSchema };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = formatSchemaTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.type !== undefined &&
            (obj.type = formatSchemaTypeToJSON(message.type));
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFormatSchema };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = '';
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
