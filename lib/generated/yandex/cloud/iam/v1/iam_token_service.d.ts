/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iam.v1";
export interface CreateIamTokenRequest {
    /**
     * OAuth token for a Yandex.Passport account.
     * For more information, see [OAuth token](/docs/iam/concepts/authorization/oauth-token).
     */
    yandexPassportOauthToken: string | undefined;
    /**
     * JSON Web Token (JWT) for a service account.
     * For more information, see [Get IAM token for a service account](/docs/iam/operations/iam-token/create-for-sa).
     */
    jwt: string | undefined;
}
export interface CreateIamTokenResponse {
    /**
     * IAM token for the specified identity.
     *
     * You should pass the token in the `Authorization` header for any further API requests.
     * For example, `Authorization: Bearer [iam_token]`.
     */
    iamToken: string;
    /** IAM token expiration time. */
    expiresAt: Date | undefined;
}
export interface CreateIamTokenForServiceAccountRequest {
    serviceAccountId: string;
}
export declare const CreateIamTokenRequest: {
    encode(message: CreateIamTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateIamTokenRequest;
    fromJSON(object: any): CreateIamTokenRequest;
    toJSON(message: CreateIamTokenRequest): unknown;
    fromPartial(object: DeepPartial<CreateIamTokenRequest>): CreateIamTokenRequest;
};
export declare const CreateIamTokenResponse: {
    encode(message: CreateIamTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateIamTokenResponse;
    fromJSON(object: any): CreateIamTokenResponse;
    toJSON(message: CreateIamTokenResponse): unknown;
    fromPartial(object: DeepPartial<CreateIamTokenResponse>): CreateIamTokenResponse;
};
export declare const CreateIamTokenForServiceAccountRequest: {
    encode(message: CreateIamTokenForServiceAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateIamTokenForServiceAccountRequest;
    fromJSON(object: any): CreateIamTokenForServiceAccountRequest;
    toJSON(message: CreateIamTokenForServiceAccountRequest): unknown;
    fromPartial(object: DeepPartial<CreateIamTokenForServiceAccountRequest>): CreateIamTokenForServiceAccountRequest;
};
/** A set of methods for managing IAM tokens. */
export declare const IamTokenServiceService: {
    /** Creates an IAM token for the specified identity. */
    readonly create: {
        readonly path: "/yandex.cloud.iam.v1.IamTokenService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateIamTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateIamTokenRequest;
        readonly responseSerialize: (value: CreateIamTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateIamTokenResponse;
    };
    /** Create iam token for service account. */
    readonly createForServiceAccount: {
        readonly path: "/yandex.cloud.iam.v1.IamTokenService/CreateForServiceAccount";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateIamTokenForServiceAccountRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateIamTokenForServiceAccountRequest;
        readonly responseSerialize: (value: CreateIamTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateIamTokenResponse;
    };
};
export interface IamTokenServiceServer extends UntypedServiceImplementation {
    /** Creates an IAM token for the specified identity. */
    create: handleUnaryCall<CreateIamTokenRequest, CreateIamTokenResponse>;
    /** Create iam token for service account. */
    createForServiceAccount: handleUnaryCall<CreateIamTokenForServiceAccountRequest, CreateIamTokenResponse>;
}
export interface IamTokenServiceClient extends Client {
    /** Creates an IAM token for the specified identity. */
    create(request: CreateIamTokenRequest, callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void): ClientUnaryCall;
    create(request: CreateIamTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void): ClientUnaryCall;
    create(request: CreateIamTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void): ClientUnaryCall;
    /** Create iam token for service account. */
    createForServiceAccount(request: CreateIamTokenForServiceAccountRequest, callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void): ClientUnaryCall;
    createForServiceAccount(request: CreateIamTokenForServiceAccountRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void): ClientUnaryCall;
    createForServiceAccount(request: CreateIamTokenForServiceAccountRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateIamTokenResponse) => void): ClientUnaryCall;
}
export declare const IamTokenServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => IamTokenServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
