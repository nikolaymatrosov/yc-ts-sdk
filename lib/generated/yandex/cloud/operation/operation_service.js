"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationServiceClient = exports.OperationServiceService = exports.CancelOperationRequest = exports.GetOperationRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const operation_1 = require("../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.operation';
const baseGetOperationRequest = { operationId: '' };
exports.GetOperationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operationId !== '') {
            writer.uint32(10).string(message.operationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetOperationRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetOperationRequest };
        if (object.operationId !== undefined && object.operationId !== null) {
            message.operationId = String(object.operationId);
        }
        else {
            message.operationId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.operationId !== undefined &&
            (obj.operationId = message.operationId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetOperationRequest };
        if (object.operationId !== undefined && object.operationId !== null) {
            message.operationId = object.operationId;
        }
        else {
            message.operationId = '';
        }
        return message;
    },
};
const baseCancelOperationRequest = { operationId: '' };
exports.CancelOperationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operationId !== '') {
            writer.uint32(10).string(message.operationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCancelOperationRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operationId = reader.string();
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
            ...baseCancelOperationRequest,
        };
        if (object.operationId !== undefined && object.operationId !== null) {
            message.operationId = String(object.operationId);
        }
        else {
            message.operationId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.operationId !== undefined &&
            (obj.operationId = message.operationId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCancelOperationRequest,
        };
        if (object.operationId !== undefined && object.operationId !== null) {
            message.operationId = object.operationId;
        }
        else {
            message.operationId = '';
        }
        return message;
    },
};
/** A set of methods for managing operations for asynchronous API requests. */
exports.OperationServiceService = {
    /** Returns the specified Operation resource. */
    get: {
        path: '/yandex.cloud.operation.OperationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetOperationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetOperationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Cancels the specified operation. */
    cancel: {
        path: '/yandex.cloud.operation.OperationService/Cancel',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CancelOperationRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CancelOperationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.OperationServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.OperationServiceService, 'yandex.cloud.operation.OperationService');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
