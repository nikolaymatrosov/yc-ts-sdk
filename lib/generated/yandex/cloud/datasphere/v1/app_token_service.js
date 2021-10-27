"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppTokenServiceClient = exports.AppTokenServiceService = exports.AppTokenValidateRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const empty_1 = require("../../../../google/protobuf/empty");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.datasphere.v1';
const baseAppTokenValidateRequest = { token: '' };
exports.AppTokenValidateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.token !== '') {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAppTokenValidateRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
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
            ...baseAppTokenValidateRequest,
        };
        if (object.token !== undefined && object.token !== null) {
            message.token = String(object.token);
        }
        else {
            message.token = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAppTokenValidateRequest,
        };
        if (object.token !== undefined && object.token !== null) {
            message.token = object.token;
        }
        else {
            message.token = '';
        }
        return message;
    },
};
/** A set of methods for managing app tokens. */
exports.AppTokenServiceService = {
    /** Validates app token. */
    validate: {
        path: '/yandex.cloud.datasphere.v1.AppTokenService/Validate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AppTokenValidateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AppTokenValidateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
};
exports.AppTokenServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.AppTokenServiceService, 'yandex.cloud.datasphere.v1.AppTokenService');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
