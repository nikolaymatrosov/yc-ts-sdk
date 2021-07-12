/* eslint-disable */
import { symmetricAlgorithmFromJSON, symmetricAlgorithmToJSON, } from '../../../../yandex/cloud/kms/v1/symmetric_key';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.kms.v1';
const baseSymmetricEncryptRequest = { keyId: '', versionId: '' };
export const SymmetricEncryptRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const SymmetricEncryptResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const SymmetricDecryptRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const SymmetricDecryptResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const GenerateDataKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
            message.dataKeySpec = symmetricAlgorithmFromJSON(object.dataKeySpec);
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
            (obj.dataKeySpec = symmetricAlgorithmToJSON(message.dataKeySpec));
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
export const GenerateDataKeyResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const SymmetricReEncryptRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const SymmetricReEncryptResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
export const SymmetricCryptoServiceService = {
    /** Encrypts given plaintext with the specified key. */
    encrypt: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/Encrypt',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SymmetricEncryptRequest.encode(value).finish()),
        requestDeserialize: (value) => SymmetricEncryptRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SymmetricEncryptResponse.encode(value).finish()),
        responseDeserialize: (value) => SymmetricEncryptResponse.decode(value),
    },
    /** Decrypts the given ciphertext with the specified key. */
    decrypt: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/Decrypt',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SymmetricDecryptRequest.encode(value).finish()),
        requestDeserialize: (value) => SymmetricDecryptRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SymmetricDecryptResponse.encode(value).finish()),
        responseDeserialize: (value) => SymmetricDecryptResponse.decode(value),
    },
    /** Re-encrypts a ciphertext with the specified KMS key. */
    reEncrypt: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/ReEncrypt',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SymmetricReEncryptRequest.encode(value).finish()),
        requestDeserialize: (value) => SymmetricReEncryptRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SymmetricReEncryptResponse.encode(value).finish()),
        responseDeserialize: (value) => SymmetricReEncryptResponse.decode(value),
    },
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    generateDataKey: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/GenerateDataKey',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GenerateDataKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => GenerateDataKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GenerateDataKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => GenerateDataKeyResponse.decode(value),
    },
};
export const SymmetricCryptoServiceClient = makeGenericClientConstructor(SymmetricCryptoServiceService, 'yandex.cloud.kms.v1.SymmetricCryptoService');
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
