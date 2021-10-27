"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadServiceClient = exports.PayloadServiceService = exports.GetPayloadRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const payload_1 = require("../../../../yandex/cloud/lockbox/v1/payload");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.lockbox.v1';
const baseGetPayloadRequest = { secretId: '', versionId: '' };
exports.GetPayloadRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPayloadRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetPayloadRequest };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetPayloadRequest };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        return message;
    },
};
/** Set of methods to access payload of secrets. */
exports.PayloadServiceService = {
    /**
     * Returns the payload of the specified secret.
     *
     * To get the list of all available secrets, make a [SecretService.List] request.
     */
    get: {
        path: '/yandex.cloud.lockbox.v1.PayloadService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetPayloadRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetPayloadRequest.decode(value),
        responseSerialize: (value) => Buffer.from(payload_1.Payload.encode(value).finish()),
        responseDeserialize: (value) => payload_1.Payload.decode(value),
    },
};
exports.PayloadServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.PayloadServiceService, 'yandex.cloud.lockbox.v1.PayloadService');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
