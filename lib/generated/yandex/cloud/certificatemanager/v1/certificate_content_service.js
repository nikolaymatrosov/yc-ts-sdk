"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateContentServiceClient = exports.CertificateContentServiceService = exports.GetCertificateContentRequest = exports.GetCertificateContentResponse = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.certificatemanager.v1';
const baseGetCertificateContentResponse = {
    $type: 'yandex.cloud.certificatemanager.v1.GetCertificateContentResponse',
    certificateId: '',
    certificateChain: '',
    privateKey: '',
};
exports.GetCertificateContentResponse = {
    $type: 'yandex.cloud.certificatemanager.v1.GetCertificateContentResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        for (const v of message.certificateChain) {
            writer.uint32(26).string(v);
        }
        if (message.privateKey !== '') {
            writer.uint32(34).string(message.privateKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetCertificateContentResponse,
        };
        message.certificateChain = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 3:
                    message.certificateChain.push(reader.string());
                    break;
                case 4:
                    message.privateKey = reader.string();
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
            ...baseGetCertificateContentResponse,
        };
        message.certificateChain = [];
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        if (object.certificateChain !== undefined &&
            object.certificateChain !== null) {
            for (const e of object.certificateChain) {
                message.certificateChain.push(String(e));
            }
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = String(object.privateKey);
        }
        else {
            message.privateKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        if (message.certificateChain) {
            obj.certificateChain = message.certificateChain.map((e) => e);
        }
        else {
            obj.certificateChain = [];
        }
        message.privateKey !== undefined &&
            (obj.privateKey = message.privateKey);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetCertificateContentResponse,
        };
        message.certificateChain = [];
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        if (object.certificateChain !== undefined &&
            object.certificateChain !== null) {
            for (const e of object.certificateChain) {
                message.certificateChain.push(e);
            }
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = object.privateKey;
        }
        else {
            message.privateKey = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetCertificateContentResponse.$type, exports.GetCertificateContentResponse);
const baseGetCertificateContentRequest = {
    $type: 'yandex.cloud.certificatemanager.v1.GetCertificateContentRequest',
    certificateId: '',
};
exports.GetCertificateContentRequest = {
    $type: 'yandex.cloud.certificatemanager.v1.GetCertificateContentRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetCertificateContentRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
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
            ...baseGetCertificateContentRequest,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetCertificateContentRequest,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetCertificateContentRequest.$type, exports.GetCertificateContentRequest);
/** A set of methods for managing certificate content. */
exports.CertificateContentServiceService = {
    /** Returns chain and private key of the specified certificate. */
    get: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateContentService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetCertificateContentRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetCertificateContentRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetCertificateContentResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetCertificateContentResponse.decode(value),
    },
};
exports.CertificateContentServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.CertificateContentServiceService, 'yandex.cloud.certificatemanager.v1.CertificateContentService');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
