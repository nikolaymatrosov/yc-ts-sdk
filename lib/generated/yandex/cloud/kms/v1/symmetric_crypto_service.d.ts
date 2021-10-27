/// <reference types="node" />
import { SymmetricAlgorithm } from '../../../../yandex/cloud/kms/v1/symmetric_key';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.kms.v1";
export interface SymmetricEncryptRequest {
    $type: 'yandex.cloud.kms.v1.SymmetricEncryptRequest';
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
    $type: 'yandex.cloud.kms.v1.SymmetricEncryptResponse';
    /** ID of the symmetric KMS key that was used for encryption. */
    keyId: string;
    /** ID of the key version that was used for encryption. */
    versionId: string;
    /** Resulting ciphertext. */
    ciphertext: Uint8Array;
}
export interface SymmetricDecryptRequest {
    $type: 'yandex.cloud.kms.v1.SymmetricDecryptRequest';
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
    $type: 'yandex.cloud.kms.v1.SymmetricDecryptResponse';
    /** ID of the symmetric KMS key that was used for decryption. */
    keyId: string;
    /** ID of the key version that was used for decryption. */
    versionId: string;
    /** Decrypted plaintext. */
    plaintext: Uint8Array;
}
export interface GenerateDataKeyRequest {
    $type: 'yandex.cloud.kms.v1.GenerateDataKeyRequest';
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
    $type: 'yandex.cloud.kms.v1.GenerateDataKeyResponse';
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
    $type: 'yandex.cloud.kms.v1.SymmetricReEncryptRequest';
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
    $type: 'yandex.cloud.kms.v1.SymmetricReEncryptResponse';
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
export declare const SymmetricEncryptRequest: {
    $type: "yandex.cloud.kms.v1.SymmetricEncryptRequest";
    encode(message: SymmetricEncryptRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SymmetricEncryptRequest;
    fromJSON(object: any): SymmetricEncryptRequest;
    toJSON(message: SymmetricEncryptRequest): unknown;
    fromPartial(object: DeepPartial<SymmetricEncryptRequest>): SymmetricEncryptRequest;
};
export declare const SymmetricEncryptResponse: {
    $type: "yandex.cloud.kms.v1.SymmetricEncryptResponse";
    encode(message: SymmetricEncryptResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SymmetricEncryptResponse;
    fromJSON(object: any): SymmetricEncryptResponse;
    toJSON(message: SymmetricEncryptResponse): unknown;
    fromPartial(object: DeepPartial<SymmetricEncryptResponse>): SymmetricEncryptResponse;
};
export declare const SymmetricDecryptRequest: {
    $type: "yandex.cloud.kms.v1.SymmetricDecryptRequest";
    encode(message: SymmetricDecryptRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SymmetricDecryptRequest;
    fromJSON(object: any): SymmetricDecryptRequest;
    toJSON(message: SymmetricDecryptRequest): unknown;
    fromPartial(object: DeepPartial<SymmetricDecryptRequest>): SymmetricDecryptRequest;
};
export declare const SymmetricDecryptResponse: {
    $type: "yandex.cloud.kms.v1.SymmetricDecryptResponse";
    encode(message: SymmetricDecryptResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SymmetricDecryptResponse;
    fromJSON(object: any): SymmetricDecryptResponse;
    toJSON(message: SymmetricDecryptResponse): unknown;
    fromPartial(object: DeepPartial<SymmetricDecryptResponse>): SymmetricDecryptResponse;
};
export declare const GenerateDataKeyRequest: {
    $type: "yandex.cloud.kms.v1.GenerateDataKeyRequest";
    encode(message: GenerateDataKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenerateDataKeyRequest;
    fromJSON(object: any): GenerateDataKeyRequest;
    toJSON(message: GenerateDataKeyRequest): unknown;
    fromPartial(object: DeepPartial<GenerateDataKeyRequest>): GenerateDataKeyRequest;
};
export declare const GenerateDataKeyResponse: {
    $type: "yandex.cloud.kms.v1.GenerateDataKeyResponse";
    encode(message: GenerateDataKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenerateDataKeyResponse;
    fromJSON(object: any): GenerateDataKeyResponse;
    toJSON(message: GenerateDataKeyResponse): unknown;
    fromPartial(object: DeepPartial<GenerateDataKeyResponse>): GenerateDataKeyResponse;
};
export declare const SymmetricReEncryptRequest: {
    $type: "yandex.cloud.kms.v1.SymmetricReEncryptRequest";
    encode(message: SymmetricReEncryptRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SymmetricReEncryptRequest;
    fromJSON(object: any): SymmetricReEncryptRequest;
    toJSON(message: SymmetricReEncryptRequest): unknown;
    fromPartial(object: DeepPartial<SymmetricReEncryptRequest>): SymmetricReEncryptRequest;
};
export declare const SymmetricReEncryptResponse: {
    $type: "yandex.cloud.kms.v1.SymmetricReEncryptResponse";
    encode(message: SymmetricReEncryptResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SymmetricReEncryptResponse;
    fromJSON(object: any): SymmetricReEncryptResponse;
    toJSON(message: SymmetricReEncryptResponse): unknown;
    fromPartial(object: DeepPartial<SymmetricReEncryptResponse>): SymmetricReEncryptResponse;
};
/** Set of methods that perform symmetric encryption and decryption. */
export declare const SymmetricCryptoServiceService: {
    /** Encrypts given plaintext with the specified key. */
    readonly encrypt: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricCryptoService/Encrypt";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SymmetricEncryptRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SymmetricEncryptRequest;
        readonly responseSerialize: (value: SymmetricEncryptResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SymmetricEncryptResponse;
    };
    /** Decrypts the given ciphertext with the specified key. */
    readonly decrypt: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricCryptoService/Decrypt";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SymmetricDecryptRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SymmetricDecryptRequest;
        readonly responseSerialize: (value: SymmetricDecryptResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SymmetricDecryptResponse;
    };
    /** Re-encrypts a ciphertext with the specified KMS key. */
    readonly reEncrypt: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricCryptoService/ReEncrypt";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SymmetricReEncryptRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SymmetricReEncryptRequest;
        readonly responseSerialize: (value: SymmetricReEncryptResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SymmetricReEncryptResponse;
    };
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    readonly generateDataKey: {
        readonly path: "/yandex.cloud.kms.v1.SymmetricCryptoService/GenerateDataKey";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GenerateDataKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GenerateDataKeyRequest;
        readonly responseSerialize: (value: GenerateDataKeyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GenerateDataKeyResponse;
    };
};
export interface SymmetricCryptoServiceServer extends UntypedServiceImplementation {
    /** Encrypts given plaintext with the specified key. */
    encrypt: handleUnaryCall<SymmetricEncryptRequest, SymmetricEncryptResponse>;
    /** Decrypts the given ciphertext with the specified key. */
    decrypt: handleUnaryCall<SymmetricDecryptRequest, SymmetricDecryptResponse>;
    /** Re-encrypts a ciphertext with the specified KMS key. */
    reEncrypt: handleUnaryCall<SymmetricReEncryptRequest, SymmetricReEncryptResponse>;
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    generateDataKey: handleUnaryCall<GenerateDataKeyRequest, GenerateDataKeyResponse>;
}
export interface SymmetricCryptoServiceClient extends Client {
    /** Encrypts given plaintext with the specified key. */
    encrypt(request: SymmetricEncryptRequest, callback: (error: ServiceError | null, response: SymmetricEncryptResponse) => void): ClientUnaryCall;
    encrypt(request: SymmetricEncryptRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SymmetricEncryptResponse) => void): ClientUnaryCall;
    encrypt(request: SymmetricEncryptRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SymmetricEncryptResponse) => void): ClientUnaryCall;
    /** Decrypts the given ciphertext with the specified key. */
    decrypt(request: SymmetricDecryptRequest, callback: (error: ServiceError | null, response: SymmetricDecryptResponse) => void): ClientUnaryCall;
    decrypt(request: SymmetricDecryptRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SymmetricDecryptResponse) => void): ClientUnaryCall;
    decrypt(request: SymmetricDecryptRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SymmetricDecryptResponse) => void): ClientUnaryCall;
    /** Re-encrypts a ciphertext with the specified KMS key. */
    reEncrypt(request: SymmetricReEncryptRequest, callback: (error: ServiceError | null, response: SymmetricReEncryptResponse) => void): ClientUnaryCall;
    reEncrypt(request: SymmetricReEncryptRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SymmetricReEncryptResponse) => void): ClientUnaryCall;
    reEncrypt(request: SymmetricReEncryptRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SymmetricReEncryptResponse) => void): ClientUnaryCall;
    /**
     * Generates a new symmetric data encryption key (not a KMS key) and returns
     * the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
     */
    generateDataKey(request: GenerateDataKeyRequest, callback: (error: ServiceError | null, response: GenerateDataKeyResponse) => void): ClientUnaryCall;
    generateDataKey(request: GenerateDataKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GenerateDataKeyResponse) => void): ClientUnaryCall;
    generateDataKey(request: GenerateDataKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GenerateDataKeyResponse) => void): ClientUnaryCall;
}
export declare const SymmetricCryptoServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => SymmetricCryptoServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
