/* eslint-disable */
import {
    SymmetricAlgorithm,
    symmetricAlgorithmFromJSON,
    symmetricAlgorithmToJSON,
} from '../../../../yandex/cloud/kms/v1/symmetric_key';
import {
    makeGenericClientConstructor,
    ChannelCredentials,
    ChannelOptions,
    UntypedServiceImplementation,
    handleUnaryCall,
    Client,
    ClientUnaryCall,
    Metadata,
    CallOptions,
    ServiceError,
} from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.kms.v1';

export interface SymmetricEncryptRequest {
    /** ID of the symmetric KMS key to use for encryption. */
    keyId: string;
    /**
     * ID of the key version to encrypt plaintext with.
     * Defaults to the primary version if not specified.
     */
    versionId: string;
    /**
     * Additional authenticated data (AAD context), optional.
     * If specified, this data will be required for decryption with the [SymmetricDecryptRequest].
     * Should be encoded with base64.
     */
    aadContext: Uint8Array;
    /**
     * Plaintext to be encrypted.
     * Should be encoded with base64.
     */
    plaintext: Uint8Array;
}

export interface SymmetricEncryptResponse {
    /** ID of the symmetric KMS key that was used for encryption. */
    keyId: string;
    /** ID of the key version that was used for encryption. */
    versionId: string;
    /** Resulting ciphertext. */
    ciphertext: Uint8Array;
}

export interface SymmetricDecryptRequest {
    /** ID of the symmetric KMS key to use for decryption. */
    keyId: string;
    /**
     * Additional authenticated data, must be the same as was provided
     * in the corresponding [SymmetricEncryptRequest].
     * Should be encoded with base64.
     */
    aadContext: Uint8Array;
    /**
     * Ciphertext to be decrypted.
     * Should be encoded with base64.
     */
    ciphertext: Uint8Array;
}

export interface SymmetricDecryptResponse {
    /** ID of the symmetric KMS key that was used for decryption. */
    keyId: string;
    /** ID of the key version that was used for decryption. */
    versionId: string;
    /** Decrypted plaintext. */
    plaintext: Uint8Array;
}

export interface GenerateDataKeyRequest {
    /** ID of the symmetric KMS key that the generated data key should be encrypted with. */
    keyId: string;
    /**
     * ID of the key version to encrypt the generated data key with.
     * Defaults to the primary version if not specified.
     */
    versionId: string;
    /**
     * Additional authenticated data (AAD context), optional.
     * If specified, this data will be required for decryption with the [SymmetricDecryptRequest].
     * Should be encoded with base64.
     */
    aadContext: Uint8Array;
    /** Encryption algorithm and key length for the generated data key. */
    dataKeySpec: SymmetricAlgorithm;
    /**
     * If `true`, the method won't return the data key as plaintext.
     * Default value is `false`.
     */
    skipPlaintext: boolean;
}

export interface GenerateDataKeyResponse {
    /** ID of the symmetric KMS key that was used to encrypt the generated data key. */
    keyId: string;
    /** ID of the key version that was used for encryption. */
    versionId: string;
    /**
     * Generated data key as plaintext.
     * The field is empty, if the [GenerateDataKeyRequest.skip_plaintext] parameter
     * was set to `true`.
     */
    dataKeyPlaintext: Uint8Array;
    /** The encrypted data key. */
    dataKeyCiphertext: Uint8Array;
}

export interface SymmetricReEncryptRequest {
    /** ID of the new key to be used for encryption. */
    keyId: string;
    /**
     * ID of the version of the new key to be used for encryption.
     * Defaults to the primary version if not specified.
     */
    versionId: string;
    /**
     * Additional authenticated data to be required for decryption.
     * Should be encoded with base64.
     */
    aadContext: Uint8Array;
    /** ID of the key that the ciphertext is currently encrypted with. May be the same as for the new key. */
    sourceKeyId: string;
    /**
     * Additional authenticated data provided with the initial encryption request.
     * Should be encoded with base64.
     */
    sourceAadContext: Uint8Array;
    /**
     * Ciphertext to re-encrypt.
     * Should be encoded with base64.
     */
    ciphertext: Uint8Array;
}

export interface SymmetricReEncryptResponse {
    /** ID of the key that the ciphertext is encrypted with now. */
    keyId: string;
    /** ID of key version that was used for encryption. */
    versionId: string;
    /** ID of the key that the ciphertext was encrypted with previously. */
    sourceKeyId: string;
    /** ID of the key version that was used to decrypt the re-encrypted ciphertext. */
    sourceVersionId: string;
    /** Resulting re-encrypted ciphertext. */
    ciphertext: Uint8Array;
}

const baseSymmetricEncryptRequest: object = { keyId: '', versionId: '' };

export const SymmetricEncryptRequest = {
    encode(
        message: SymmetricEncryptRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SymmetricEncryptRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricEncryptRequest,
        } as SymmetricEncryptRequest;
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

    fromJSON(object: any): SymmetricEncryptRequest {
        const message = {
            ...baseSymmetricEncryptRequest,
        } as SymmetricEncryptRequest;
        message.aadContext = new Uint8Array();
        message.plaintext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
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

    toJSON(message: SymmetricEncryptRequest): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(
                message.aadContext !== undefined
                    ? message.aadContext
                    : new Uint8Array()
            ));
        message.plaintext !== undefined &&
            (obj.plaintext = base64FromBytes(
                message.plaintext !== undefined
                    ? message.plaintext
                    : new Uint8Array()
            ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<SymmetricEncryptRequest>
    ): SymmetricEncryptRequest {
        const message = {
            ...baseSymmetricEncryptRequest,
        } as SymmetricEncryptRequest;
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = object.aadContext;
        } else {
            message.aadContext = new Uint8Array();
        }
        if (object.plaintext !== undefined && object.plaintext !== null) {
            message.plaintext = object.plaintext;
        } else {
            message.plaintext = new Uint8Array();
        }
        return message;
    },
};

const baseSymmetricEncryptResponse: object = { keyId: '', versionId: '' };

export const SymmetricEncryptResponse = {
    encode(
        message: SymmetricEncryptResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SymmetricEncryptResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricEncryptResponse,
        } as SymmetricEncryptResponse;
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

    fromJSON(object: any): SymmetricEncryptResponse {
        const message = {
            ...baseSymmetricEncryptResponse,
        } as SymmetricEncryptResponse;
        message.ciphertext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = bytesFromBase64(object.ciphertext);
        }
        return message;
    },

    toJSON(message: SymmetricEncryptResponse): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(
                message.ciphertext !== undefined
                    ? message.ciphertext
                    : new Uint8Array()
            ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<SymmetricEncryptResponse>
    ): SymmetricEncryptResponse {
        const message = {
            ...baseSymmetricEncryptResponse,
        } as SymmetricEncryptResponse;
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = object.ciphertext;
        } else {
            message.ciphertext = new Uint8Array();
        }
        return message;
    },
};

const baseSymmetricDecryptRequest: object = { keyId: '' };

export const SymmetricDecryptRequest = {
    encode(
        message: SymmetricDecryptRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SymmetricDecryptRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricDecryptRequest,
        } as SymmetricDecryptRequest;
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

    fromJSON(object: any): SymmetricDecryptRequest {
        const message = {
            ...baseSymmetricDecryptRequest,
        } as SymmetricDecryptRequest;
        message.aadContext = new Uint8Array();
        message.ciphertext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        } else {
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

    toJSON(message: SymmetricDecryptRequest): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(
                message.aadContext !== undefined
                    ? message.aadContext
                    : new Uint8Array()
            ));
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(
                message.ciphertext !== undefined
                    ? message.ciphertext
                    : new Uint8Array()
            ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<SymmetricDecryptRequest>
    ): SymmetricDecryptRequest {
        const message = {
            ...baseSymmetricDecryptRequest,
        } as SymmetricDecryptRequest;
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        } else {
            message.keyId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = object.aadContext;
        } else {
            message.aadContext = new Uint8Array();
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = object.ciphertext;
        } else {
            message.ciphertext = new Uint8Array();
        }
        return message;
    },
};

const baseSymmetricDecryptResponse: object = { keyId: '', versionId: '' };

export const SymmetricDecryptResponse = {
    encode(
        message: SymmetricDecryptResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SymmetricDecryptResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricDecryptResponse,
        } as SymmetricDecryptResponse;
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

    fromJSON(object: any): SymmetricDecryptResponse {
        const message = {
            ...baseSymmetricDecryptResponse,
        } as SymmetricDecryptResponse;
        message.plaintext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        if (object.plaintext !== undefined && object.plaintext !== null) {
            message.plaintext = bytesFromBase64(object.plaintext);
        }
        return message;
    },

    toJSON(message: SymmetricDecryptResponse): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.plaintext !== undefined &&
            (obj.plaintext = base64FromBytes(
                message.plaintext !== undefined
                    ? message.plaintext
                    : new Uint8Array()
            ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<SymmetricDecryptResponse>
    ): SymmetricDecryptResponse {
        const message = {
            ...baseSymmetricDecryptResponse,
        } as SymmetricDecryptResponse;
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (object.plaintext !== undefined && object.plaintext !== null) {
            message.plaintext = object.plaintext;
        } else {
            message.plaintext = new Uint8Array();
        }
        return message;
    },
};

const baseGenerateDataKeyRequest: object = {
    keyId: '',
    versionId: '',
    dataKeySpec: 0,
    skipPlaintext: false,
};

export const GenerateDataKeyRequest = {
    encode(
        message: GenerateDataKeyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GenerateDataKeyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGenerateDataKeyRequest,
        } as GenerateDataKeyRequest;
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
                    message.dataKeySpec = reader.int32() as any;
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

    fromJSON(object: any): GenerateDataKeyRequest {
        const message = {
            ...baseGenerateDataKeyRequest,
        } as GenerateDataKeyRequest;
        message.aadContext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = bytesFromBase64(object.aadContext);
        }
        if (object.dataKeySpec !== undefined && object.dataKeySpec !== null) {
            message.dataKeySpec = symmetricAlgorithmFromJSON(
                object.dataKeySpec
            );
        } else {
            message.dataKeySpec = 0;
        }
        if (
            object.skipPlaintext !== undefined &&
            object.skipPlaintext !== null
        ) {
            message.skipPlaintext = Boolean(object.skipPlaintext);
        } else {
            message.skipPlaintext = false;
        }
        return message;
    },

    toJSON(message: GenerateDataKeyRequest): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(
                message.aadContext !== undefined
                    ? message.aadContext
                    : new Uint8Array()
            ));
        message.dataKeySpec !== undefined &&
            (obj.dataKeySpec = symmetricAlgorithmToJSON(message.dataKeySpec));
        message.skipPlaintext !== undefined &&
            (obj.skipPlaintext = message.skipPlaintext);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GenerateDataKeyRequest>
    ): GenerateDataKeyRequest {
        const message = {
            ...baseGenerateDataKeyRequest,
        } as GenerateDataKeyRequest;
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = object.aadContext;
        } else {
            message.aadContext = new Uint8Array();
        }
        if (object.dataKeySpec !== undefined && object.dataKeySpec !== null) {
            message.dataKeySpec = object.dataKeySpec;
        } else {
            message.dataKeySpec = 0;
        }
        if (
            object.skipPlaintext !== undefined &&
            object.skipPlaintext !== null
        ) {
            message.skipPlaintext = object.skipPlaintext;
        } else {
            message.skipPlaintext = false;
        }
        return message;
    },
};

const baseGenerateDataKeyResponse: object = { keyId: '', versionId: '' };

export const GenerateDataKeyResponse = {
    encode(
        message: GenerateDataKeyResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GenerateDataKeyResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGenerateDataKeyResponse,
        } as GenerateDataKeyResponse;
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

    fromJSON(object: any): GenerateDataKeyResponse {
        const message = {
            ...baseGenerateDataKeyResponse,
        } as GenerateDataKeyResponse;
        message.dataKeyPlaintext = new Uint8Array();
        message.dataKeyCiphertext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        if (
            object.dataKeyPlaintext !== undefined &&
            object.dataKeyPlaintext !== null
        ) {
            message.dataKeyPlaintext = bytesFromBase64(object.dataKeyPlaintext);
        }
        if (
            object.dataKeyCiphertext !== undefined &&
            object.dataKeyCiphertext !== null
        ) {
            message.dataKeyCiphertext = bytesFromBase64(
                object.dataKeyCiphertext
            );
        }
        return message;
    },

    toJSON(message: GenerateDataKeyResponse): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.dataKeyPlaintext !== undefined &&
            (obj.dataKeyPlaintext = base64FromBytes(
                message.dataKeyPlaintext !== undefined
                    ? message.dataKeyPlaintext
                    : new Uint8Array()
            ));
        message.dataKeyCiphertext !== undefined &&
            (obj.dataKeyCiphertext = base64FromBytes(
                message.dataKeyCiphertext !== undefined
                    ? message.dataKeyCiphertext
                    : new Uint8Array()
            ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<GenerateDataKeyResponse>
    ): GenerateDataKeyResponse {
        const message = {
            ...baseGenerateDataKeyResponse,
        } as GenerateDataKeyResponse;
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (
            object.dataKeyPlaintext !== undefined &&
            object.dataKeyPlaintext !== null
        ) {
            message.dataKeyPlaintext = object.dataKeyPlaintext;
        } else {
            message.dataKeyPlaintext = new Uint8Array();
        }
        if (
            object.dataKeyCiphertext !== undefined &&
            object.dataKeyCiphertext !== null
        ) {
            message.dataKeyCiphertext = object.dataKeyCiphertext;
        } else {
            message.dataKeyCiphertext = new Uint8Array();
        }
        return message;
    },
};

const baseSymmetricReEncryptRequest: object = {
    keyId: '',
    versionId: '',
    sourceKeyId: '',
};

export const SymmetricReEncryptRequest = {
    encode(
        message: SymmetricReEncryptRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SymmetricReEncryptRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricReEncryptRequest,
        } as SymmetricReEncryptRequest;
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

    fromJSON(object: any): SymmetricReEncryptRequest {
        const message = {
            ...baseSymmetricReEncryptRequest,
        } as SymmetricReEncryptRequest;
        message.aadContext = new Uint8Array();
        message.sourceAadContext = new Uint8Array();
        message.ciphertext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = bytesFromBase64(object.aadContext);
        }
        if (object.sourceKeyId !== undefined && object.sourceKeyId !== null) {
            message.sourceKeyId = String(object.sourceKeyId);
        } else {
            message.sourceKeyId = '';
        }
        if (
            object.sourceAadContext !== undefined &&
            object.sourceAadContext !== null
        ) {
            message.sourceAadContext = bytesFromBase64(object.sourceAadContext);
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = bytesFromBase64(object.ciphertext);
        }
        return message;
    },

    toJSON(message: SymmetricReEncryptRequest): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.aadContext !== undefined &&
            (obj.aadContext = base64FromBytes(
                message.aadContext !== undefined
                    ? message.aadContext
                    : new Uint8Array()
            ));
        message.sourceKeyId !== undefined &&
            (obj.sourceKeyId = message.sourceKeyId);
        message.sourceAadContext !== undefined &&
            (obj.sourceAadContext = base64FromBytes(
                message.sourceAadContext !== undefined
                    ? message.sourceAadContext
                    : new Uint8Array()
            ));
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(
                message.ciphertext !== undefined
                    ? message.ciphertext
                    : new Uint8Array()
            ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<SymmetricReEncryptRequest>
    ): SymmetricReEncryptRequest {
        const message = {
            ...baseSymmetricReEncryptRequest,
        } as SymmetricReEncryptRequest;
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (object.aadContext !== undefined && object.aadContext !== null) {
            message.aadContext = object.aadContext;
        } else {
            message.aadContext = new Uint8Array();
        }
        if (object.sourceKeyId !== undefined && object.sourceKeyId !== null) {
            message.sourceKeyId = object.sourceKeyId;
        } else {
            message.sourceKeyId = '';
        }
        if (
            object.sourceAadContext !== undefined &&
            object.sourceAadContext !== null
        ) {
            message.sourceAadContext = object.sourceAadContext;
        } else {
            message.sourceAadContext = new Uint8Array();
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = object.ciphertext;
        } else {
            message.ciphertext = new Uint8Array();
        }
        return message;
    },
};

const baseSymmetricReEncryptResponse: object = {
    keyId: '',
    versionId: '',
    sourceKeyId: '',
    sourceVersionId: '',
};

export const SymmetricReEncryptResponse = {
    encode(
        message: SymmetricReEncryptResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SymmetricReEncryptResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSymmetricReEncryptResponse,
        } as SymmetricReEncryptResponse;
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

    fromJSON(object: any): SymmetricReEncryptResponse {
        const message = {
            ...baseSymmetricReEncryptResponse,
        } as SymmetricReEncryptResponse;
        message.ciphertext = new Uint8Array();
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = String(object.keyId);
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        if (object.sourceKeyId !== undefined && object.sourceKeyId !== null) {
            message.sourceKeyId = String(object.sourceKeyId);
        } else {
            message.sourceKeyId = '';
        }
        if (
            object.sourceVersionId !== undefined &&
            object.sourceVersionId !== null
        ) {
            message.sourceVersionId = String(object.sourceVersionId);
        } else {
            message.sourceVersionId = '';
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = bytesFromBase64(object.ciphertext);
        }
        return message;
    },

    toJSON(message: SymmetricReEncryptResponse): unknown {
        const obj: any = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.sourceKeyId !== undefined &&
            (obj.sourceKeyId = message.sourceKeyId);
        message.sourceVersionId !== undefined &&
            (obj.sourceVersionId = message.sourceVersionId);
        message.ciphertext !== undefined &&
            (obj.ciphertext = base64FromBytes(
                message.ciphertext !== undefined
                    ? message.ciphertext
                    : new Uint8Array()
            ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<SymmetricReEncryptResponse>
    ): SymmetricReEncryptResponse {
        const message = {
            ...baseSymmetricReEncryptResponse,
        } as SymmetricReEncryptResponse;
        if (object.keyId !== undefined && object.keyId !== null) {
            message.keyId = object.keyId;
        } else {
            message.keyId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        if (object.sourceKeyId !== undefined && object.sourceKeyId !== null) {
            message.sourceKeyId = object.sourceKeyId;
        } else {
            message.sourceKeyId = '';
        }
        if (
            object.sourceVersionId !== undefined &&
            object.sourceVersionId !== null
        ) {
            message.sourceVersionId = object.sourceVersionId;
        } else {
            message.sourceVersionId = '';
        }
        if (object.ciphertext !== undefined && object.ciphertext !== null) {
            message.ciphertext = object.ciphertext;
        } else {
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
        requestSerialize: (value: SymmetricEncryptRequest) =>
            Buffer.from(SymmetricEncryptRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            SymmetricEncryptRequest.decode(value),
        responseSerialize: (value: SymmetricEncryptResponse) =>
            Buffer.from(SymmetricEncryptResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            SymmetricEncryptResponse.decode(value),
    },
    /** Decrypts the given ciphertext with the specified key. */
    decrypt: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/Decrypt',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SymmetricDecryptRequest) =>
            Buffer.from(SymmetricDecryptRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            SymmetricDecryptRequest.decode(value),
        responseSerialize: (value: SymmetricDecryptResponse) =>
            Buffer.from(SymmetricDecryptResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            SymmetricDecryptResponse.decode(value),
    },
    /** Re-encrypts a ciphertext with the specified KMS key. */
    reEncrypt: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/ReEncrypt',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SymmetricReEncryptRequest) =>
            Buffer.from(SymmetricReEncryptRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            SymmetricReEncryptRequest.decode(value),
        responseSerialize: (value: SymmetricReEncryptResponse) =>
            Buffer.from(SymmetricReEncryptResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            SymmetricReEncryptResponse.decode(value),
    },
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    generateDataKey: {
        path: '/yandex.cloud.kms.v1.SymmetricCryptoService/GenerateDataKey',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GenerateDataKeyRequest) =>
            Buffer.from(GenerateDataKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GenerateDataKeyRequest.decode(value),
        responseSerialize: (value: GenerateDataKeyResponse) =>
            Buffer.from(GenerateDataKeyResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            GenerateDataKeyResponse.decode(value),
    },
} as const;

export interface SymmetricCryptoServiceServer
    extends UntypedServiceImplementation {
    /** Encrypts given plaintext with the specified key. */
    encrypt: handleUnaryCall<SymmetricEncryptRequest, SymmetricEncryptResponse>;
    /** Decrypts the given ciphertext with the specified key. */
    decrypt: handleUnaryCall<SymmetricDecryptRequest, SymmetricDecryptResponse>;
    /** Re-encrypts a ciphertext with the specified KMS key. */
    reEncrypt: handleUnaryCall<
        SymmetricReEncryptRequest,
        SymmetricReEncryptResponse
    >;
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    generateDataKey: handleUnaryCall<
        GenerateDataKeyRequest,
        GenerateDataKeyResponse
    >;
}

export interface SymmetricCryptoServiceClient extends Client {
    /** Encrypts given plaintext with the specified key. */
    encrypt(
        request: SymmetricEncryptRequest,
        callback: (
            error: ServiceError | null,
            response: SymmetricEncryptResponse
        ) => void
    ): ClientUnaryCall;
    encrypt(
        request: SymmetricEncryptRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: SymmetricEncryptResponse
        ) => void
    ): ClientUnaryCall;
    encrypt(
        request: SymmetricEncryptRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: SymmetricEncryptResponse
        ) => void
    ): ClientUnaryCall;
    /** Decrypts the given ciphertext with the specified key. */
    decrypt(
        request: SymmetricDecryptRequest,
        callback: (
            error: ServiceError | null,
            response: SymmetricDecryptResponse
        ) => void
    ): ClientUnaryCall;
    decrypt(
        request: SymmetricDecryptRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: SymmetricDecryptResponse
        ) => void
    ): ClientUnaryCall;
    decrypt(
        request: SymmetricDecryptRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: SymmetricDecryptResponse
        ) => void
    ): ClientUnaryCall;
    /** Re-encrypts a ciphertext with the specified KMS key. */
    reEncrypt(
        request: SymmetricReEncryptRequest,
        callback: (
            error: ServiceError | null,
            response: SymmetricReEncryptResponse
        ) => void
    ): ClientUnaryCall;
    reEncrypt(
        request: SymmetricReEncryptRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: SymmetricReEncryptResponse
        ) => void
    ): ClientUnaryCall;
    reEncrypt(
        request: SymmetricReEncryptRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: SymmetricReEncryptResponse
        ) => void
    ): ClientUnaryCall;
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    generateDataKey(
        request: GenerateDataKeyRequest,
        callback: (
            error: ServiceError | null,
            response: GenerateDataKeyResponse
        ) => void
    ): ClientUnaryCall;
    generateDataKey(
        request: GenerateDataKeyRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: GenerateDataKeyResponse
        ) => void
    ): ClientUnaryCall;
    generateDataKey(
        request: GenerateDataKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: GenerateDataKeyResponse
        ) => void
    ): ClientUnaryCall;
}

export const SymmetricCryptoServiceClient = makeGenericClientConstructor(
    SymmetricCryptoServiceService,
    'yandex.cloud.kms.v1.SymmetricCryptoService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): SymmetricCryptoServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
    globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
