/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp';
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

export const protobufPackage = 'yandex.cloud.iam.v1';

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

const baseCreateIamTokenRequest: object = {};

export const CreateIamTokenRequest = {
    encode(
        message: CreateIamTokenRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.yandexPassportOauthToken !== undefined) {
            writer.uint32(10).string(message.yandexPassportOauthToken);
        }
        if (message.jwt !== undefined) {
            writer.uint32(18).string(message.jwt);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateIamTokenRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateIamTokenRequest,
        } as CreateIamTokenRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yandexPassportOauthToken = reader.string();
                    break;
                case 2:
                    message.jwt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateIamTokenRequest {
        const message = {
            ...baseCreateIamTokenRequest,
        } as CreateIamTokenRequest;
        if (
            object.yandexPassportOauthToken !== undefined &&
            object.yandexPassportOauthToken !== null
        ) {
            message.yandexPassportOauthToken = String(
                object.yandexPassportOauthToken
            );
        } else {
            message.yandexPassportOauthToken = undefined;
        }
        if (object.jwt !== undefined && object.jwt !== null) {
            message.jwt = String(object.jwt);
        } else {
            message.jwt = undefined;
        }
        return message;
    },

    toJSON(message: CreateIamTokenRequest): unknown {
        const obj: any = {};
        message.yandexPassportOauthToken !== undefined &&
            (obj.yandexPassportOauthToken = message.yandexPassportOauthToken);
        message.jwt !== undefined && (obj.jwt = message.jwt);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateIamTokenRequest>
    ): CreateIamTokenRequest {
        const message = {
            ...baseCreateIamTokenRequest,
        } as CreateIamTokenRequest;
        if (
            object.yandexPassportOauthToken !== undefined &&
            object.yandexPassportOauthToken !== null
        ) {
            message.yandexPassportOauthToken = object.yandexPassportOauthToken;
        } else {
            message.yandexPassportOauthToken = undefined;
        }
        if (object.jwt !== undefined && object.jwt !== null) {
            message.jwt = object.jwt;
        } else {
            message.jwt = undefined;
        }
        return message;
    },
};

const baseCreateIamTokenResponse: object = { iamToken: '' };

export const CreateIamTokenResponse = {
    encode(
        message: CreateIamTokenResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.iamToken !== '') {
            writer.uint32(10).string(message.iamToken);
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(
                toTimestamp(message.expiresAt),
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateIamTokenResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateIamTokenResponse,
        } as CreateIamTokenResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iamToken = reader.string();
                    break;
                case 2:
                    message.expiresAt = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateIamTokenResponse {
        const message = {
            ...baseCreateIamTokenResponse,
        } as CreateIamTokenResponse;
        if (object.iamToken !== undefined && object.iamToken !== null) {
            message.iamToken = String(object.iamToken);
        } else {
            message.iamToken = '';
        }
        if (object.expiresAt !== undefined && object.expiresAt !== null) {
            message.expiresAt = fromJsonTimestamp(object.expiresAt);
        } else {
            message.expiresAt = undefined;
        }
        return message;
    },

    toJSON(message: CreateIamTokenResponse): unknown {
        const obj: any = {};
        message.iamToken !== undefined && (obj.iamToken = message.iamToken);
        message.expiresAt !== undefined &&
            (obj.expiresAt = message.expiresAt.toISOString());
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateIamTokenResponse>
    ): CreateIamTokenResponse {
        const message = {
            ...baseCreateIamTokenResponse,
        } as CreateIamTokenResponse;
        if (object.iamToken !== undefined && object.iamToken !== null) {
            message.iamToken = object.iamToken;
        } else {
            message.iamToken = '';
        }
        if (object.expiresAt !== undefined && object.expiresAt !== null) {
            message.expiresAt = object.expiresAt;
        } else {
            message.expiresAt = undefined;
        }
        return message;
    },
};

const baseCreateIamTokenForServiceAccountRequest: object = {
    serviceAccountId: '',
};

export const CreateIamTokenForServiceAccountRequest = {
    encode(
        message: CreateIamTokenForServiceAccountRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateIamTokenForServiceAccountRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateIamTokenForServiceAccountRequest,
        } as CreateIamTokenForServiceAccountRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateIamTokenForServiceAccountRequest {
        const message = {
            ...baseCreateIamTokenForServiceAccountRequest,
        } as CreateIamTokenForServiceAccountRequest;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },

    toJSON(message: CreateIamTokenForServiceAccountRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateIamTokenForServiceAccountRequest>
    ): CreateIamTokenForServiceAccountRequest {
        const message = {
            ...baseCreateIamTokenForServiceAccountRequest,
        } as CreateIamTokenForServiceAccountRequest;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },
};

/** A set of methods for managing IAM tokens. */
export const IamTokenServiceService = {
    /** Creates an IAM token for the specified identity. */
    create: {
        path: '/yandex.cloud.iam.v1.IamTokenService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateIamTokenRequest) =>
            Buffer.from(CreateIamTokenRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateIamTokenRequest.decode(value),
        responseSerialize: (value: CreateIamTokenResponse) =>
            Buffer.from(CreateIamTokenResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            CreateIamTokenResponse.decode(value),
    },
    /** Create iam token for service account. */
    createForServiceAccount: {
        path: '/yandex.cloud.iam.v1.IamTokenService/CreateForServiceAccount',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateIamTokenForServiceAccountRequest) =>
            Buffer.from(
                CreateIamTokenForServiceAccountRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            CreateIamTokenForServiceAccountRequest.decode(value),
        responseSerialize: (value: CreateIamTokenResponse) =>
            Buffer.from(CreateIamTokenResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            CreateIamTokenResponse.decode(value),
    },
} as const;

export interface IamTokenServiceServer extends UntypedServiceImplementation {
    /** Creates an IAM token for the specified identity. */
    create: handleUnaryCall<CreateIamTokenRequest, CreateIamTokenResponse>;
    /** Create iam token for service account. */
    createForServiceAccount: handleUnaryCall<
        CreateIamTokenForServiceAccountRequest,
        CreateIamTokenResponse
    >;
}

export interface IamTokenServiceClient extends Client {
    /** Creates an IAM token for the specified identity. */
    create(
        request: CreateIamTokenRequest,
        callback: (
            error: ServiceError | null,
            response: CreateIamTokenResponse
        ) => void
    ): ClientUnaryCall;
    create(
        request: CreateIamTokenRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: CreateIamTokenResponse
        ) => void
    ): ClientUnaryCall;
    create(
        request: CreateIamTokenRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: CreateIamTokenResponse
        ) => void
    ): ClientUnaryCall;
    /** Create iam token for service account. */
    createForServiceAccount(
        request: CreateIamTokenForServiceAccountRequest,
        callback: (
            error: ServiceError | null,
            response: CreateIamTokenResponse
        ) => void
    ): ClientUnaryCall;
    createForServiceAccount(
        request: CreateIamTokenForServiceAccountRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: CreateIamTokenResponse
        ) => void
    ): ClientUnaryCall;
    createForServiceAccount(
        request: CreateIamTokenForServiceAccountRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: CreateIamTokenResponse
        ) => void
    ): ClientUnaryCall;
}

export const IamTokenServiceClient = makeGenericClientConstructor(
    IamTokenServiceService,
    'yandex.cloud.iam.v1.IamTokenService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): IamTokenServiceClient;
};

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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
