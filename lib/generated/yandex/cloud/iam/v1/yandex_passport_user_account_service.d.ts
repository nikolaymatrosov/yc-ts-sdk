/// <reference types="node" />
import { UserAccount } from '../../../../yandex/cloud/iam/v1/user_account';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iam.v1";
export interface GetUserAccountByLoginRequest {
    $type: 'yandex.cloud.iam.v1.GetUserAccountByLoginRequest';
    /** Login of the YandexPassportUserAccount resource to return. */
    login: string;
}
export declare const GetUserAccountByLoginRequest: {
    $type: "yandex.cloud.iam.v1.GetUserAccountByLoginRequest";
    encode(message: GetUserAccountByLoginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserAccountByLoginRequest;
    fromJSON(object: any): GetUserAccountByLoginRequest;
    toJSON(message: GetUserAccountByLoginRequest): unknown;
    fromPartial(object: DeepPartial<GetUserAccountByLoginRequest>): GetUserAccountByLoginRequest;
};
/** A set of methods for managing YandexPassportUserAccount resources. */
export declare const YandexPassportUserAccountServiceService: {
    /** Returns the specified YandexPassportUserAccount resource. */
    readonly getByLogin: {
        readonly path: "/yandex.cloud.iam.v1.YandexPassportUserAccountService/GetByLogin";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserAccountByLoginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserAccountByLoginRequest;
        readonly responseSerialize: (value: UserAccount) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserAccount;
    };
};
export interface YandexPassportUserAccountServiceServer extends UntypedServiceImplementation {
    /** Returns the specified YandexPassportUserAccount resource. */
    getByLogin: handleUnaryCall<GetUserAccountByLoginRequest, UserAccount>;
}
export interface YandexPassportUserAccountServiceClient extends Client {
    /** Returns the specified YandexPassportUserAccount resource. */
    getByLogin(request: GetUserAccountByLoginRequest, callback: (error: ServiceError | null, response: UserAccount) => void): ClientUnaryCall;
    getByLogin(request: GetUserAccountByLoginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UserAccount) => void): ClientUnaryCall;
    getByLogin(request: GetUserAccountByLoginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserAccount) => void): ClientUnaryCall;
}
export declare const YandexPassportUserAccountServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => YandexPassportUserAccountServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
