/* eslint-disable */
import { UserAccount } from '../../../../yandex/cloud/iam/v1/user_account';
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

export interface GetUserAccountByLoginRequest {
    /** Login of the YandexPassportUserAccount resource to return. */
    login: string;
}

const baseGetUserAccountByLoginRequest: object = { login: '' };

export const GetUserAccountByLoginRequest = {
    encode(
        message: GetUserAccountByLoginRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.login !== '') {
            writer.uint32(10).string(message.login);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetUserAccountByLoginRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetUserAccountByLoginRequest,
        } as GetUserAccountByLoginRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetUserAccountByLoginRequest {
        const message = {
            ...baseGetUserAccountByLoginRequest,
        } as GetUserAccountByLoginRequest;
        if (object.login !== undefined && object.login !== null) {
            message.login = String(object.login);
        } else {
            message.login = '';
        }
        return message;
    },

    toJSON(message: GetUserAccountByLoginRequest): unknown {
        const obj: any = {};
        message.login !== undefined && (obj.login = message.login);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetUserAccountByLoginRequest>
    ): GetUserAccountByLoginRequest {
        const message = {
            ...baseGetUserAccountByLoginRequest,
        } as GetUserAccountByLoginRequest;
        if (object.login !== undefined && object.login !== null) {
            message.login = object.login;
        } else {
            message.login = '';
        }
        return message;
    },
};

/** A set of methods for managing YandexPassportUserAccount resources. */
export const YandexPassportUserAccountServiceService = {
    /** Returns the specified YandexPassportUserAccount resource. */
    getByLogin: {
        path: '/yandex.cloud.iam.v1.YandexPassportUserAccountService/GetByLogin',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetUserAccountByLoginRequest) =>
            Buffer.from(GetUserAccountByLoginRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetUserAccountByLoginRequest.decode(value),
        responseSerialize: (value: UserAccount) =>
            Buffer.from(UserAccount.encode(value).finish()),
        responseDeserialize: (value: Buffer) => UserAccount.decode(value),
    },
} as const;

export interface YandexPassportUserAccountServiceServer
    extends UntypedServiceImplementation {
    /** Returns the specified YandexPassportUserAccount resource. */
    getByLogin: handleUnaryCall<GetUserAccountByLoginRequest, UserAccount>;
}

export interface YandexPassportUserAccountServiceClient extends Client {
    /** Returns the specified YandexPassportUserAccount resource. */
    getByLogin(
        request: GetUserAccountByLoginRequest,
        callback: (error: ServiceError | null, response: UserAccount) => void
    ): ClientUnaryCall;
    getByLogin(
        request: GetUserAccountByLoginRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: UserAccount) => void
    ): ClientUnaryCall;
    getByLogin(
        request: GetUserAccountByLoginRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: UserAccount) => void
    ): ClientUnaryCall;
}

export const YandexPassportUserAccountServiceClient =
    makeGenericClientConstructor(
        YandexPassportUserAccountServiceService,
        'yandex.cloud.iam.v1.YandexPassportUserAccountService'
    ) as unknown as {
        new (
            address: string,
            credentials: ChannelCredentials,
            options?: Partial<ChannelOptions>
        ): YandexPassportUserAccountServiceClient;
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
