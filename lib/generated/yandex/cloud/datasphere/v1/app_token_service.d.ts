/// <reference types="node" />
import { Empty } from '../../../../google/protobuf/empty';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.datasphere.v1";
export interface AppTokenValidateRequest {
    $type: 'yandex.cloud.datasphere.v1.AppTokenValidateRequest';
    /** App token to validate. */
    token: string;
}
export declare const AppTokenValidateRequest: {
    $type: "yandex.cloud.datasphere.v1.AppTokenValidateRequest";
    encode(message: AppTokenValidateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AppTokenValidateRequest;
    fromJSON(object: any): AppTokenValidateRequest;
    toJSON(message: AppTokenValidateRequest): unknown;
    fromPartial(object: DeepPartial<AppTokenValidateRequest>): AppTokenValidateRequest;
};
/** A set of methods for managing app tokens. */
export declare const AppTokenServiceService: {
    /** Validates app token. */
    readonly validate: {
        readonly path: "/yandex.cloud.datasphere.v1.AppTokenService/Validate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AppTokenValidateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AppTokenValidateRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
export interface AppTokenServiceServer extends UntypedServiceImplementation {
    /** Validates app token. */
    validate: handleUnaryCall<AppTokenValidateRequest, Empty>;
}
export interface AppTokenServiceClient extends Client {
    /** Validates app token. */
    validate(request: AppTokenValidateRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    validate(request: AppTokenValidateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    validate(request: AppTokenValidateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
}
export declare const AppTokenServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => AppTokenServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
