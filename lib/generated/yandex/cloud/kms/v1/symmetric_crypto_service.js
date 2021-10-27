"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymmetricCryptoServiceClient = exports.SymmetricCryptoServiceService = exports.SymmetricReEncryptResponse = exports.SymmetricReEncryptRequest = exports.GenerateDataKeyResponse = exports.GenerateDataKeyRequest = exports.SymmetricDecryptResponse = exports.SymmetricDecryptRequest = exports.SymmetricEncryptResponse = exports.SymmetricEncryptRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const symmetric_key_1 = require("../../../../yandex/cloud/kms/v1/symmetric_key");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.kms.v1';
const baseSymmetricEncryptRequest = { keyId: '', versionId: '' };
exports.SymmetricEncryptRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(26).bytes(message.aadContext);
        }
        if (message.plaintext.length !== 0) {
            writer.uint32(34).bytes(message.plaintext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricEncryptRequest,
        };
        message.aadContext = new Uint8Array();
        message.plaintext = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.aadContext = reader.bytes();
                    break;
                case 4:
                    message.plaintext = reader.bytes();
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
            ...baseSymmetricEncryptRequest,
        };
        message.aadContext = new Uint8Array();
        message.plaintext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = bytesFromBase64(object.aadContext);
        }
        if (object.plaintext !== undefined && object.plaintext !== null) {
            message.plaintext = bytesFromBase64(object.plaintext);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(message.aadContext !== undefined
                ? message.aadContext
                : new Uint8Array()));
        message.plaintext !== undefined &&
            (obj.plaintext = base64FromBytes(message.plaintext !== undefined
                ? message.plaintext
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSymmetricEncryptRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = object.aadContext;
        }
        else {
            message.aadContext = new Uint8Array();
        }
        if (object.plaintext !== undefined && object.plaintext !== null) {
            message.plaintext = object.plaintext;
        }
        else {
            message.plaintext = new Uint8Array();
        }
        return message;
    },
};
const baseSymmetricEncryptResponse = { keyId: '', versionId: '' };
exports.SymmetricEncryptResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(26).bytes(message.ciphertext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricEncryptResponse,
        };
        message.ciphertext = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.ciphertext = reader.bytes();
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
            ...baseSymmetricEncryptResponse,
        };
        message.ciphertext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = bytesFromBase64(object.ciphertext);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(message.ciphertext !== undefined
                ? message.ciphertext
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSymmetricEncryptResponse,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = object.ciphertext;
        }
        else {
            message.ciphertext = new Uint8Array();
        }
        return message;
    },
};
const baseSymmetricDecryptRequest = { keyId: '' };
exports.SymmetricDecryptRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(18).bytes(message.aadContext);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(26).bytes(message.ciphertext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricDecryptRequest,
        };
        message.aadContext = new Uint8Array();
        message.ciphertext = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.aadContext = reader.bytes();
                    break;
                case 3:
                    message.ciphertext = reader.bytes();
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
            ...baseSymmetricDecryptRequest,
        };
        message.aadContext = new Uint8Array();
        message.ciphertext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = bytesFromBase64(object.aadContext);
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = bytesFromBase64(object.ciphertext);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(message.aadContext !== undefined
                ? message.aadContext
                : new Uint8Array()));
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(message.ciphertext !== undefined
                ? message.ciphertext
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSymmetricDecryptRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = object.aadContext;
        }
        else {
            message.aadContext = new Uint8Array();
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = object.ciphertext;
        }
        else {
            message.ciphertext = new Uint8Array();
        }
        return message;
    },
};
const baseSymmetricDecryptResponse = { keyId: '', versionId: '' };
exports.SymmetricDecryptResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.plaintext.length !== 0) {
            writer.uint32(26).bytes(message.plaintext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricDecryptResponse,
        };
        message.plaintext = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.plaintext = reader.bytes();
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
            ...baseSymmetricDecryptResponse,
        };
        message.plaintext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.plaintext !== undefined && object.plaintext !== null) {
            message.plaintext = bytesFromBase64(object.plaintext);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.plaintext !== undefined &&
            (obj.plaintext = base64FromBytes(message.plaintext !== undefined
                ? message.plaintext
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSymmetricDecryptResponse,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.plaintext !== undefined && object.plaintext !== null) {
            message.plaintext = object.plaintext;
        }
        else {
            message.plaintext = new Uint8Array();
        }
        return message;
    },
};
const baseGenerateDataKeyRequest = {
    keyId: '',
    versionId: '',
    dataKeySpec: 0,
    skipPlaintext: false,
};
exports.GenerateDataKeyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(26).bytes(message.aadContext);
        }
        if (message.dataKeySpec !== 0) {
            writer.uint32(32).int32(message.dataKeySpec);
        }
        if (message.skipPlaintext === true) {
            writer.uint32(40).bool(message.skipPlaintext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGenerateDataKeyRequest,
        };
        message.aadContext = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.aadContext = reader.bytes();
                    break;
                case 4:
                    message.dataKeySpec = reader.int32();
                    break;
                case 5:
                    message.skipPlaintext = reader.bool();
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
            ...baseGenerateDataKeyRequest,
        };
        message.aadContext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = bytesFromBase64(object.aadContext);
        }
        if (object.dataKeySpec !== undefined && object.dataKeySpec !== null) {
            message.dataKeySpec = (0, symmetric_key_1.symmetricAlgorithmFromJSON)(object.dataKeySpec);
        }
        else {
            message.dataKeySpec = 0;
        }
        if (object.skipPlaintext !== undefined &&
            object.skipPlaintext !== null) {
            message.skipPlaintext = Boolean(object.skipPlaintext);
        }
        else {
            message.skipPlaintext = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(message.aadContext !== undefined
                ? message.aadContext
                : new Uint8Array()));
        message.dataKeySpec !== undefined &&
            (obj.dataKeySpec = (0, symmetric_key_1.symmetricAlgorithmToJSON)(message.dataKeySpec));
        message.skipPlaintext !== undefined &&
            (obj.skipPlaintext = message.skipPlaintext);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGenerateDataKeyRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = object.aadContext;
        }
        else {
            message.aadContext = new Uint8Array();
        }
        if (object.dataKeySpec !== undefined && object.dataKeySpec !== null) {
            message.dataKeySpec = object.dataKeySpec;
        }
        else {
            message.dataKeySpec = 0;
        }
        if (object.skipPlaintext !== undefined &&
            object.skipPlaintext !== null) {
            message.skipPlaintext = object.skipPlaintext;
        }
        else {
            message.skipPlaintext = false;
        }
        return message;
    },
};
const baseGenerateDataKeyResponse = { keyId: '', versionId: '' };
exports.GenerateDataKeyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.dataKeyPlaintext.length !== 0) {
            writer.uint32(26).bytes(message.dataKeyPlaintext);
        }
        if (message.dataKeyCiphertext.length !== 0) {
            writer.uint32(34).bytes(message.dataKeyCiphertext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGenerateDataKeyResponse,
        };
        message.dataKeyPlaintext = new Uint8Array();
        message.dataKeyCiphertext = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.dataKeyPlaintext = reader.bytes();
                    break;
                case 4:
                    message.dataKeyCiphertext = reader.bytes();
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
            ...baseGenerateDataKeyResponse,
        };
        message.dataKeyPlaintext = new Uint8Array();
        message.dataKeyCiphertext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.dataKeyPlaintext !== undefined &&
            object.dataKeyPlaintext !== null) {
            message.dataKeyPlaintext = bytesFromBase64(object.dataKeyPlaintext);
        }
        if (object.dataKeyCiphertext !== undefined &&
            object.dataKeyCiphertext !== null) {
            message.dataKeyCiphertext = bytesFromBase64(object.dataKeyCiphertext);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.dataKeyPlaintext !== undefined &&
            (obj.dataKeyPlaintext = base64FromBytes(message.dataKeyPlaintext !== undefined
                ? message.dataKeyPlaintext
                : new Uint8Array()));
        message.dataKeyCiphertext !== undefined &&
            (obj.dataKeyCiphertext = base64FromBytes(message.dataKeyCiphertext !== undefined
                ? message.dataKeyCiphertext
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGenerateDataKeyResponse,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.dataKeyPlaintext !== undefined &&
            object.dataKeyPlaintext !== null) {
            message.dataKeyPlaintext = object.dataKeyPlaintext;
        }
        else {
            message.dataKeyPlaintext = new Uint8Array();
        }
        if (object.dataKeyCiphertext !== undefined &&
            object.dataKeyCiphertext !== null) {
            message.dataKeyCiphertext = object.dataKeyCiphertext;
        }
        else {
            message.dataKeyCiphertext = new Uint8Array();
        }
        return message;
    },
};
const baseSymmetricReEncryptRequest = {
    keyId: '',
    versionId: '',
    sourceKeyId: '',
};
exports.SymmetricReEncryptRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.aadContext.length !== 0) {
            writer.uint32(26).bytes(message.aadContext);
        }
        if (message.sourceKeyId !== '') {
            writer.uint32(34).string(message.sourceKeyId);
        }
        if (message.sourceAadContext.length !== 0) {
            writer.uint32(42).bytes(message.sourceAadContext);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(50).bytes(message.ciphertext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricReEncryptRequest,
        };
        message.aadContext = new Uint8Array();
        message.sourceAadContext = new Uint8Array();
        message.ciphertext = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.aadContext = reader.bytes();
                    break;
                case 4:
                    message.sourceKeyId = reader.string();
                    break;
                case 5:
                    message.sourceAadContext = reader.bytes();
                    break;
                case 6:
                    message.ciphertext = reader.bytes();
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
            ...baseSymmetricReEncryptRequest,
        };
        message.aadContext = new Uint8Array();
        message.sourceAadContext = new Uint8Array();
        message.ciphertext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = bytesFromBase64(object.aadContext);
        }
        if (object.sourceKeyId !== undefined && object.sourceKeyId !== null) {
            message.sourceKeyId = String(object.sourceKeyId);
        }
        else {
            message.sourceKeyId = '';
        }
        if (object.sourceAadContext !== undefined &&
            object.sourceAadContext !== null) {
            message.sourceAadContext = bytesFromBase64(object.sourceAadContext);
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = bytesFromBase64(object.ciphertext);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(message.aadContext !== undefined
                ? message.aadContext
                : new Uint8Array()));
        message.sourceKeyId !== undefined &&
            (obj.sourceKeyId = message.sourceKeyId);
        message.sourceAadContext !== undefined &&
            (obj.sourceAadContext = base64FromBytes(message.sourceAadContext !== undefined
                ? message.sourceAadContext
                : new Uint8Array()));
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(message.ciphertext !== undefined
                ? message.ciphertext
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSymmetricReEncryptRequest,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = object.aadContext;
        }
        else {
            message.aadContext = new Uint8Array();
        }
        if (object.sourceKeyId !== undefined && object.sourceKeyId !== null) {
            message.sourceKeyId = object.sourceKeyId;
        }
        else {
            message.sourceKeyId = '';
        }
        if (object.sourceAadContext !== undefined &&
            object.sourceAadContext !== null) {
            message.sourceAadContext = object.sourceAadContext;
        }
        else {
            message.sourceAadContext = new Uint8Array();
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = object.ciphertext;
        }
        else {
            message.ciphertext = new Uint8Array();
        }
        return message;
    },
};
const baseSymmetricReEncryptResponse = {
    keyId: '',
    versionId: '',
    sourceKeyId: '',
    sourceVersionId: '',
};
exports.SymmetricReEncryptResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.keyId !== '') {
            writer.uint32(10).string(message.keyId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        if (message.sourceKeyId !== '') {
            writer.uint32(26).string(message.sourceKeyId);
        }
        if (message.sourceVersionId !== '') {
            writer.uint32(34).string(message.sourceVersionId);
        }
        if (message.ciphertext.length !== 0) {
            writer.uint32(42).bytes(message.ciphertext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricReEncryptResponse,
        };
        message.ciphertext = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                case 3:
                    message.sourceKeyId = reader.string();
                    break;
                case 4:
                    message.sourceVersionId = reader.string();
                    break;
                case 5:
                    message.ciphertext = reader.bytes();
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
            ...baseSymmetricReEncryptResponse,
        };
        message.ciphertext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.sourceKeyId !== undefined && object.sourceKeyId !== null) {
            message.sourceKeyId = String(object.sourceKeyId);
        }
        else {
            message.sourceKeyId = '';
        }
        if (object.sourceVersionId !== undefined &&
            object.sourceVersionId !== null) {
            message.sourceVersionId = String(object.sourceVersionId);
        }
        else {
            message.sourceVersionId = '';
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = bytesFromBase64(object.ciphertext);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.sourceKeyId !== undefined &&
            (obj.sourceKeyId = message.sourceKeyId);
        message.sourceVersionId !== undefined &&
            (obj.sourceVersionId = message.sourceVersionId);
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(message.ciphertext !== undefined
                ? message.ciphertext
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSymmetricReEncryptResponse,
        };
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        }
        else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.sourceKeyId !== undefined && object.sourceKeyId !== null) {
            message.sourceKeyId = object.sourceKeyId;
        }
        else {
            message.sourceKeyId = '';
        }
        if (object.sourceVersionId !== undefined &&
            object.sourceVersionId !== null) {
            message.sourceVersionId = object.sourceVersionId;
        }
        else {
            message.sourceVersionId = '';
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = object.ciphertext;
        }
        else {
            message.ciphertext = new Uint8Array();
        }
        return message;
    },
};
/** Set of methods that perform symmetric encryption and decryption. */
exports.SymmetricCryptoServiceService = {
    /** Encrypts given plaintext with the specified key. */
    encrypt: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/Encrypt',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SymmetricEncryptRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SymmetricEncryptRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.SymmetricEncryptResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.SymmetricEncryptResponse.decode(value),
    },
    /** Decrypts the given ciphertext with the specified key. */
    decrypt: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/Decrypt',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SymmetricDecryptRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SymmetricDecryptRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.SymmetricDecryptResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.SymmetricDecryptResponse.decode(value),
    },
    /** Re-encrypts a ciphertext with the specified KMS key. */
    reEncrypt: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/ReEncrypt',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.SymmetricReEncryptRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.SymmetricReEncryptRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.SymmetricReEncryptResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.SymmetricReEncryptResponse.decode(value),
    },
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    generateDataKey: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/GenerateDataKey',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GenerateDataKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GenerateDataKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GenerateDataKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GenerateDataKeyResponse.decode(value),
    },
};
exports.SymmetricCryptoServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SymmetricCryptoServiceService, 'yandex.cloud.kms.v1.SymmetricCryptoService');
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
