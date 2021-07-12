/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iot.devices.v1";
export interface PublishRegistryDataRequest {
    /** ID of registry publishing message */
    registryId: string;
    /** Topic where message should be published */
    topic: string;
    /** Content of the message */
    data: Uint8Array;
}
export interface PublishRegistryDataResponse {
}
export declare const PublishRegistryDataRequest: {
    encode(message: PublishRegistryDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PublishRegistryDataRequest;
    fromJSON(object: any): PublishRegistryDataRequest;
    toJSON(message: PublishRegistryDataRequest): unknown;
    fromPartial(object: DeepPartial<PublishRegistryDataRequest>): PublishRegistryDataRequest;
};
export declare const PublishRegistryDataResponse: {
    encode(_: PublishRegistryDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PublishRegistryDataResponse;
    fromJSON(_: any): PublishRegistryDataResponse;
    toJSON(_: PublishRegistryDataResponse): unknown;
    fromPartial(_: DeepPartial<PublishRegistryDataResponse>): PublishRegistryDataResponse;
};
/** A set of methods to work with IoT Core messages on behalf of registry */
export declare const RegistryDataServiceService: {
    /** Publishes message on behalf of specified registry */
    readonly publish: {
        readonly path: "/yandex.cloud.iot.devices.v1.RegistryDataService/Publish";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PublishRegistryDataRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PublishRegistryDataRequest;
        readonly responseSerialize: (value: PublishRegistryDataResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => PublishRegistryDataResponse;
    };
};
export interface RegistryDataServiceServer extends UntypedServiceImplementation {
    /** Publishes message on behalf of specified registry */
    publish: handleUnaryCall<PublishRegistryDataRequest, PublishRegistryDataResponse>;
}
export interface RegistryDataServiceClient extends Client {
    /** Publishes message on behalf of specified registry */
    publish(request: PublishRegistryDataRequest, callback: (error: ServiceError | null, response: PublishRegistryDataResponse) => void): ClientUnaryCall;
    publish(request: PublishRegistryDataRequest, metadata: Metadata, callback: (error: ServiceError | null, response: PublishRegistryDataResponse) => void): ClientUnaryCall;
    publish(request: PublishRegistryDataRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: PublishRegistryDataResponse) => void): ClientUnaryCall;
}
export declare const RegistryDataServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => RegistryDataServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
