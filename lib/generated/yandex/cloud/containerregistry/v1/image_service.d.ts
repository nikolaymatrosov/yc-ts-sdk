/// <reference types="node" />
import { Image } from '../../../../yandex/cloud/containerregistry/v1/image';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface ListImagesRequest {
    $type: 'yandex.cloud.containerregistry.v1.ListImagesRequest';
    /**
     * ID of the registry to list Docker images in.
     *
     * [registry_id] is ignored if a [ListImagesRequest.repository_name] is specified in the request.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;
    /**
     * Name of the repository to list Docker images in.
     *
     * To get the repository name use a [RepositoryService.List] request.
     */
    repositoryName: string;
    /**
     * ID of the folder to list Docker images in.
     *
     * [folder_id] is ignored if a [ListImagesRequest.repository_name] or a [ListImagesRequest.registry_id] are specified in the request.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListImagesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListImagesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Image.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be a maximum of 256 characters and match the regular expression `[a-z0-9]+(?:[._-][a-z0-9]+)*(/([a-z0-9]+(?:[._-][a-z0-9]+)*))`.
     */
    filter: string;
    orderBy: string;
}
export interface ListImagesResponse {
    $type: 'yandex.cloud.containerregistry.v1.ListImagesResponse';
    /** List of Image resources. */
    images: Image[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListImagesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListImagesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface GetImageRequest {
    $type: 'yandex.cloud.containerregistry.v1.GetImageRequest';
    /**
     * ID of the Docker image resource to return.
     *
     * To get the Docker image ID use a [ImageService.List] request.
     */
    imageId: string;
}
export interface DeleteImageRequest {
    $type: 'yandex.cloud.containerregistry.v1.DeleteImageRequest';
    /**
     * ID of the Docker image to delete.
     *
     * To get Docker image ID use a [ImageService.List] request.
     */
    imageId: string;
}
export interface DeleteImageMetadata {
    $type: 'yandex.cloud.containerregistry.v1.DeleteImageMetadata';
    /** ID of the Docker image that is being deleted. */
    imageId: string;
}
export declare const ListImagesRequest: {
    $type: "yandex.cloud.containerregistry.v1.ListImagesRequest";
    encode(message: ListImagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListImagesRequest;
    fromJSON(object: any): ListImagesRequest;
    toJSON(message: ListImagesRequest): unknown;
    fromPartial(object: DeepPartial<ListImagesRequest>): ListImagesRequest;
};
export declare const ListImagesResponse: {
    $type: "yandex.cloud.containerregistry.v1.ListImagesResponse";
    encode(message: ListImagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListImagesResponse;
    fromJSON(object: any): ListImagesResponse;
    toJSON(message: ListImagesResponse): unknown;
    fromPartial(object: DeepPartial<ListImagesResponse>): ListImagesResponse;
};
export declare const GetImageRequest: {
    $type: "yandex.cloud.containerregistry.v1.GetImageRequest";
    encode(message: GetImageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetImageRequest;
    fromJSON(object: any): GetImageRequest;
    toJSON(message: GetImageRequest): unknown;
    fromPartial(object: DeepPartial<GetImageRequest>): GetImageRequest;
};
export declare const DeleteImageRequest: {
    $type: "yandex.cloud.containerregistry.v1.DeleteImageRequest";
    encode(message: DeleteImageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteImageRequest;
    fromJSON(object: any): DeleteImageRequest;
    toJSON(message: DeleteImageRequest): unknown;
    fromPartial(object: DeepPartial<DeleteImageRequest>): DeleteImageRequest;
};
export declare const DeleteImageMetadata: {
    $type: "yandex.cloud.containerregistry.v1.DeleteImageMetadata";
    encode(message: DeleteImageMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteImageMetadata;
    fromJSON(object: any): DeleteImageMetadata;
    toJSON(message: DeleteImageMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteImageMetadata>): DeleteImageMetadata;
};
/** A set of methods for managing Image resources. */
export declare const ImageServiceService: {
    /** Retrieves the list of Image resources in the specified registry or repository. */
    readonly list: {
        readonly path: "/yandex.cloud.containerregistry.v1.ImageService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListImagesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListImagesRequest;
        readonly responseSerialize: (value: ListImagesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListImagesResponse;
    };
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.containerregistry.v1.ImageService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetImageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetImageRequest;
        readonly responseSerialize: (value: Image) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Image;
    };
    /** Deletes the specified Docker image. */
    readonly delete: {
        readonly path: "/yandex.cloud.containerregistry.v1.ImageService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteImageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteImageRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ImageServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of Image resources in the specified registry or repository. */
    list: handleUnaryCall<ListImagesRequest, ListImagesResponse>;
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: handleUnaryCall<GetImageRequest, Image>;
    /** Deletes the specified Docker image. */
    delete: handleUnaryCall<DeleteImageRequest, Operation>;
}
export interface ImageServiceClient extends Client {
    /** Retrieves the list of Image resources in the specified registry or repository. */
    list(request: ListImagesRequest, callback: (error: ServiceError | null, response: ListImagesResponse) => void): ClientUnaryCall;
    list(request: ListImagesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListImagesResponse) => void): ClientUnaryCall;
    list(request: ListImagesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListImagesResponse) => void): ClientUnaryCall;
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get(request: GetImageRequest, callback: (error: ServiceError | null, response: Image) => void): ClientUnaryCall;
    get(request: GetImageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Image) => void): ClientUnaryCall;
    get(request: GetImageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Image) => void): ClientUnaryCall;
    /** Deletes the specified Docker image. */
    delete(request: DeleteImageRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteImageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteImageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ImageServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ImageServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
