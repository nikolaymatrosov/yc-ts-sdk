"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeServiceClient = exports.NodeServiceService = exports.NodeExecutionResponse = exports.NodeExecutionRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const struct_1 = require("../../../../google/protobuf/struct");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.datasphere.v1';
const baseNodeExecutionRequest = { folderId: '', nodeId: '' };
exports.NodeExecutionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.nodeId !== '') {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.input !== undefined) {
            struct_1.Struct.encode(message.input, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeExecutionRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.nodeId = reader.string();
                    break;
                case 3:
                    message.input = struct_1.Struct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNodeExecutionRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.nodeId !== undefined && object.nodeId !== null) {
            message.nodeId = String(object.nodeId);
        }
        else {
            message.nodeId = '';
        }
        if (object.input !== undefined && object.input !== null) {
            message.input = struct_1.Struct.fromJSON(object.input);
        }
        else {
            message.input = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.input !== undefined &&
            (obj.input = message.input
                ? struct_1.Struct.toJSON(message.input)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNodeExecutionRequest };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.nodeId !== undefined && object.nodeId !== null) {
            message.nodeId = object.nodeId;
        }
        else {
            message.nodeId = '';
        }
        if (object.input !== undefined && object.input !== null) {
            message.input = struct_1.Struct.fromPartial(object.input);
        }
        else {
            message.input = undefined;
        }
        return message;
    },
};
const baseNodeExecutionResponse = {};
exports.NodeExecutionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.output !== undefined) {
            struct_1.Struct.encode(message.output, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseNodeExecutionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.output = struct_1.Struct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseNodeExecutionResponse,
        };
        if (object.output !== undefined && object.output !== null) {
            message.output = struct_1.Struct.fromJSON(object.output);
        }
        else {
            message.output = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.output !== undefined &&
            (obj.output = message.output
                ? struct_1.Struct.toJSON(message.output)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseNodeExecutionResponse,
        };
        if (object.output !== undefined && object.output !== null) {
            message.output = struct_1.Struct.fromPartial(object.output);
        }
        else {
            message.output = undefined;
        }
        return message;
    },
};
/** A set of methods for managing Node resources. */
exports.NodeServiceService = {
    /** Executes deployed Node. */
    execute: {
        path: '/yandex.cloud.datasphere.v1.NodeService/Execute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.NodeExecutionRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.NodeExecutionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.NodeExecutionResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.NodeExecutionResponse.decode(value),
    },
};
exports.NodeServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.NodeServiceService, 'yandex.cloud.datasphere.v1.NodeService');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
