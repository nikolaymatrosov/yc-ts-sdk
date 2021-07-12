/* eslint-disable */
import { Struct } from '../../../../google/protobuf/struct';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.datasphere.v1';
const baseNodeExecutionRequest = { folderId: '', nodeId: '' };
export const NodeExecutionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.nodeId !== '') {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.input !== undefined) {
            Struct.encode(message.input, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.input = Struct.decode(reader, reader.uint32());
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
            message.input = Struct.fromJSON(object.input);
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
                ? Struct.toJSON(message.input)
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
            message.input = Struct.fromPartial(object.input);
        }
        else {
            message.input = undefined;
        }
        return message;
    },
};
const baseNodeExecutionResponse = {};
export const NodeExecutionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.output !== undefined) {
            Struct.encode(message.output, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseNodeExecutionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.output = Struct.decode(reader, reader.uint32());
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
            message.output = Struct.fromJSON(object.output);
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
                ? Struct.toJSON(message.output)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseNodeExecutionResponse,
        };
        if (object.output !== undefined && object.output !== null) {
            message.output = Struct.fromPartial(object.output);
        }
        else {
            message.output = undefined;
        }
        return message;
    },
};
/** A set of methods for managing Node resources. */
export const NodeServiceService = {
    /** Executes deployed Node. */
    execute: {
        path: '/yandex.cloud.datasphere.v1.NodeService/Execute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(NodeExecutionRequest.encode(value).finish()),
        requestDeserialize: (value) => NodeExecutionRequest.decode(value),
        responseSerialize: (value) => Buffer.from(NodeExecutionResponse.encode(value).finish()),
        responseDeserialize: (value) => NodeExecutionResponse.decode(value),
    },
};
export const NodeServiceClient = makeGenericClientConstructor(NodeServiceService, 'yandex.cloud.datasphere.v1.NodeService');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
