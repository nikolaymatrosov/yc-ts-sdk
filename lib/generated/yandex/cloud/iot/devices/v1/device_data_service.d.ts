/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.iot.devices.v1";
export interface PublishDeviceDataRequest {
    $type: 'yandex.cloud.iot.devices.v1.PublishDeviceDataRequest';
    /** ID of device publishing message */
    deviceId: string;
    /** Topic where message should be published */
    topic: string;
    /** Content of the message */
    data: Uint8Array;
}
export interface PublishDeviceDataResponse {
    $type: 'yandex.cloud.iot.devices.v1.PublishDeviceDataResponse';
}
export declare const PublishDeviceDataRequest: {
    $type: "yandex.cloud.iot.devices.v1.PublishDeviceDataRequest";
    encode(message: PublishDeviceDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PublishDeviceDataRequest;
    fromJSON(object: any): PublishDeviceDataRequest;
    toJSON(message: PublishDeviceDataRequest): unknown;
    fromPartial(object: DeepPartial<PublishDeviceDataRequest>): PublishDeviceDataRequest;
};
export declare const PublishDeviceDataResponse: {
    $type: "yandex.cloud.iot.devices.v1.PublishDeviceDataResponse";
    encode(_: PublishDeviceDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PublishDeviceDataResponse;
    fromJSON(_: any): PublishDeviceDataResponse;
    toJSON(_: PublishDeviceDataResponse): unknown;
    fromPartial(_: DeepPartial<PublishDeviceDataResponse>): PublishDeviceDataResponse;
};
/** A set of methods to work with IoT Core messages on behalf of device */
export declare const DeviceDataServiceService: {
    /** Publishes message on behalf of specified device */
    readonly publish: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceDataService/Publish";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PublishDeviceDataRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PublishDeviceDataRequest;
        readonly responseSerialize: (value: PublishDeviceDataResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => PublishDeviceDataResponse;
    };
};
export interface DeviceDataServiceServer extends UntypedServiceImplementation {
    /** Publishes message on behalf of specified device */
    publish: handleUnaryCall<PublishDeviceDataRequest, PublishDeviceDataResponse>;
}
export interface DeviceDataServiceClient extends Client {
    /** Publishes message on behalf of specified device */
    publish(request: PublishDeviceDataRequest, callback: (error: ServiceError | null, response: PublishDeviceDataResponse) => void): ClientUnaryCall;
    publish(request: PublishDeviceDataRequest, metadata: Metadata, callback: (error: ServiceError | null, response: PublishDeviceDataResponse) => void): ClientUnaryCall;
    publish(request: PublishDeviceDataRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: PublishDeviceDataResponse) => void): ClientUnaryCall;
}
export declare const DeviceDataServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => DeviceDataServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
