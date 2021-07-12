/* eslint-disable */
import { Operation } from '../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.operation';
const baseGetOperationRequest = { operationId: '' };
export const GetOperationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.operationId !== '') {
            writer.uint32(10).string(message.operationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const CancelOperationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.operationId !== '') {
            writer.uint32(10).string(message.operationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const OperationServiceService = {
    /** Returns the specified Operation resource. */
    get: {
        path: '/yandex.cloud.operation.OperationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetOperationRequest.encode(value).finish()),
        requestDeserialize: (value) => GetOperationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Cancels the specified operation. */
    cancel: {
        path: '/yandex.cloud.operation.OperationService/Cancel',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CancelOperationRequest.encode(value).finish()),
        requestDeserialize: (value) => CancelOperationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const OperationServiceClient = makeGenericClientConstructor(OperationServiceService, 'yandex.cloud.operation.OperationService');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
