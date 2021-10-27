/// <reference types="node" />
import { ReleaseChannel } from '../../../../yandex/cloud/k8s/v1/cluster';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.k8s.v1";
export interface ListVersionsRequest {
    $type: 'yandex.cloud.k8s.v1.ListVersionsRequest';
}
export interface ListVersionsResponse {
    $type: 'yandex.cloud.k8s.v1.ListVersionsResponse';
    /** Versions available in the specified release channel. */
    availableVersions: AvailableVersions[];
}
export interface AvailableVersions {
    $type: 'yandex.cloud.k8s.v1.AvailableVersions';
    /** Release channel: `RAPID`, `REGULAR` or `STABLE`. For more details see [documentation](https://cloud.yandex.ru/docs/managed-kubernetes/concepts/release-channels-and-updates). */
    releaseChannel: ReleaseChannel;
    /** Version of Kubernetes components. */
    versions: string[];
}
export declare const ListVersionsRequest: {
    $type: "yandex.cloud.k8s.v1.ListVersionsRequest";
    encode(_: ListVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVersionsRequest;
    fromJSON(_: any): ListVersionsRequest;
    toJSON(_: ListVersionsRequest): unknown;
    fromPartial(_: DeepPartial<ListVersionsRequest>): ListVersionsRequest;
};
export declare const ListVersionsResponse: {
    $type: "yandex.cloud.k8s.v1.ListVersionsResponse";
    encode(message: ListVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVersionsResponse;
    fromJSON(object: any): ListVersionsResponse;
    toJSON(message: ListVersionsResponse): unknown;
    fromPartial(object: DeepPartial<ListVersionsResponse>): ListVersionsResponse;
};
export declare const AvailableVersions: {
    $type: "yandex.cloud.k8s.v1.AvailableVersions";
    encode(message: AvailableVersions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AvailableVersions;
    fromJSON(object: any): AvailableVersions;
    toJSON(message: AvailableVersions): unknown;
    fromPartial(object: DeepPartial<AvailableVersions>): AvailableVersions;
};
/** A set of methods for managing Kubernetes versions. */
export declare const VersionServiceService: {
    /** Retrieves the list of versions in the specified release channel. */
    readonly list: {
        readonly path: "/yandex.cloud.k8s.v1.VersionService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListVersionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListVersionsRequest;
        readonly responseSerialize: (value: ListVersionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListVersionsResponse;
    };
};
export interface VersionServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of versions in the specified release channel. */
    list: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
}
export interface VersionServiceClient extends Client {
    /** Retrieves the list of versions in the specified release channel. */
    list(request: ListVersionsRequest, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    list(request: ListVersionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
    list(request: ListVersionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListVersionsResponse) => void): ClientUnaryCall;
}
export declare const VersionServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => VersionServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
