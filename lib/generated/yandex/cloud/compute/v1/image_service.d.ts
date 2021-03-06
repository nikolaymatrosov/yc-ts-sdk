/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Image, Os } from '../../../../yandex/cloud/compute/v1/image';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetImageRequest {
    $type: 'yandex.cloud.compute.v1.GetImageRequest';
    /**
     * ID of the Image resource to return.
     * To get the image ID, use a [ImageService.List] request.
     */
    imageId: string;
}
export interface GetImageLatestByFamilyRequest {
    $type: 'yandex.cloud.compute.v1.GetImageLatestByFamilyRequest';
    /**
     * ID of the folder to get the image from.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the image family to search for. */
    family: string;
}
export interface ListImagesRequest {
    $type: 'yandex.cloud.compute.v1.ListImagesRequest';
    /**
     * ID of the folder to list images in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListImagesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
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
     * 1. The field name. Currently you can use filtering only on the [Image.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z]([-a-z0-9]{,61}[a-z0-9])?$`.
     */
    filter: string;
}
export interface ListImagesResponse {
    $type: 'yandex.cloud.compute.v1.ListImagesResponse';
    /** List of images. */
    images: Image[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSnapshotsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListSnapshotsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateImageRequest {
    $type: 'yandex.cloud.compute.v1.CreateImageRequest';
    /**
     * ID of the folder to create an image in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the image. */
    name: string;
    /** Description of the image. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * The name of the image family to which this image belongs. For more information, see [Image family](/docs/compute/concepts/image#family).
     *
     * To get an information about the most recent image from a family, use a [ImageService.GetLatestByFamily] request.
     */
    family: string;
    /**
     * Minimum size of the disk that will be created from this image.
     * Specified in bytes. Should be more than the volume of source data.
     */
    minDiskSize: number;
    /**
     * License IDs that indicate which licenses are attached to this resource.
     * License IDs are used to calculate additional charges for the use of the virtual machine.
     *
     * The correct license ID is generated by Yandex.Cloud. IDs are inherited by new resources created from this resource.
     *
     * If you know the license IDs, specify them when you create the image.
     * For example, if you create a disk image using a third-party utility and load it into Yandex Object Storage, the license IDs will be lost.
     * You can specify them in this request.
     */
    productIds: string[];
    /** ID of the source image to create the new image from. */
    imageId: string | undefined;
    /** ID of the disk to create the image from. */
    diskId: string | undefined;
    /** ID of the snapshot to create the image from. */
    snapshotId: string | undefined;
    /**
     * URI of the source image to create the new image from.
     * Currently only supports links to images that are stored in Yandex Object Storage.
     * Currently only supports Qcow2, VMDK, and VHD formats.
     */
    uri: string | undefined;
    /**
     * Operating system that is contained in the image.
     *
     * If not specified and you used the `image_id` or `disk_id` field to set the source, then the value can be inherited from the source resource.
     */
    os: Os | undefined;
    /** When true, an image pool will be created for fast creation disks from the image. */
    pooled: boolean;
}
export interface CreateImageRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.CreateImageRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateImageMetadata {
    $type: 'yandex.cloud.compute.v1.CreateImageMetadata';
    /** ID of the image that is being created. */
    imageId: string;
}
export interface UpdateImageRequest {
    $type: 'yandex.cloud.compute.v1.UpdateImageRequest';
    /**
     * ID of the Image resource to update.
     * To get the image ID, use a [ImageService.List] request.
     */
    imageId: string;
    /** Field mask that specifies which fields of the Image resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the image. */
    name: string;
    /** Description of the image. */
    description: string;
    /**
     * Minimum size of the disk that can be created from this image.
     * Specified in bytes. Should be more than the volume of source data and more than the virtual disk size.
     */
    minDiskSize: number;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateImageRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.UpdateImageRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateImageMetadata {
    $type: 'yandex.cloud.compute.v1.UpdateImageMetadata';
    /** ID of the Image resource that is being updated. */
    imageId: string;
}
export interface DeleteImageRequest {
    $type: 'yandex.cloud.compute.v1.DeleteImageRequest';
    /**
     * ID of the image to delete.
     * To get the image ID, use a [ImageService.List] request.
     */
    imageId: string;
}
export interface DeleteImageMetadata {
    $type: 'yandex.cloud.compute.v1.DeleteImageMetadata';
    /** ID of the image that is being deleted. */
    imageId: string;
}
export interface ListImageOperationsRequest {
    $type: 'yandex.cloud.compute.v1.ListImageOperationsRequest';
    /** ID of the Image resource to list operations for. */
    imageId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListImageOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListImageOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListImageOperationsResponse {
    $type: 'yandex.cloud.compute.v1.ListImageOperationsResponse';
    /** List of operations for the specified image. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListImageOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListImageOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetImageRequest: {
    $type: "yandex.cloud.compute.v1.GetImageRequest";
    encode(message: GetImageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetImageRequest;
    fromJSON(object: any): GetImageRequest;
    toJSON(message: GetImageRequest): unknown;
    fromPartial(object: DeepPartial<GetImageRequest>): GetImageRequest;
};
export declare const GetImageLatestByFamilyRequest: {
    $type: "yandex.cloud.compute.v1.GetImageLatestByFamilyRequest";
    encode(message: GetImageLatestByFamilyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetImageLatestByFamilyRequest;
    fromJSON(object: any): GetImageLatestByFamilyRequest;
    toJSON(message: GetImageLatestByFamilyRequest): unknown;
    fromPartial(object: DeepPartial<GetImageLatestByFamilyRequest>): GetImageLatestByFamilyRequest;
};
export declare const ListImagesRequest: {
    $type: "yandex.cloud.compute.v1.ListImagesRequest";
    encode(message: ListImagesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListImagesRequest;
    fromJSON(object: any): ListImagesRequest;
    toJSON(message: ListImagesRequest): unknown;
    fromPartial(object: DeepPartial<ListImagesRequest>): ListImagesRequest;
};
export declare const ListImagesResponse: {
    $type: "yandex.cloud.compute.v1.ListImagesResponse";
    encode(message: ListImagesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListImagesResponse;
    fromJSON(object: any): ListImagesResponse;
    toJSON(message: ListImagesResponse): unknown;
    fromPartial(object: DeepPartial<ListImagesResponse>): ListImagesResponse;
};
export declare const CreateImageRequest: {
    $type: "yandex.cloud.compute.v1.CreateImageRequest";
    encode(message: CreateImageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateImageRequest;
    fromJSON(object: any): CreateImageRequest;
    toJSON(message: CreateImageRequest): unknown;
    fromPartial(object: DeepPartial<CreateImageRequest>): CreateImageRequest;
};
export declare const CreateImageRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateImageRequest.LabelsEntry";
    encode(message: CreateImageRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateImageRequest_LabelsEntry;
    fromJSON(object: any): CreateImageRequest_LabelsEntry;
    toJSON(message: CreateImageRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateImageRequest_LabelsEntry>): CreateImageRequest_LabelsEntry;
};
export declare const CreateImageMetadata: {
    $type: "yandex.cloud.compute.v1.CreateImageMetadata";
    encode(message: CreateImageMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateImageMetadata;
    fromJSON(object: any): CreateImageMetadata;
    toJSON(message: CreateImageMetadata): unknown;
    fromPartial(object: DeepPartial<CreateImageMetadata>): CreateImageMetadata;
};
export declare const UpdateImageRequest: {
    $type: "yandex.cloud.compute.v1.UpdateImageRequest";
    encode(message: UpdateImageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateImageRequest;
    fromJSON(object: any): UpdateImageRequest;
    toJSON(message: UpdateImageRequest): unknown;
    fromPartial(object: DeepPartial<UpdateImageRequest>): UpdateImageRequest;
};
export declare const UpdateImageRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateImageRequest.LabelsEntry";
    encode(message: UpdateImageRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateImageRequest_LabelsEntry;
    fromJSON(object: any): UpdateImageRequest_LabelsEntry;
    toJSON(message: UpdateImageRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateImageRequest_LabelsEntry>): UpdateImageRequest_LabelsEntry;
};
export declare const UpdateImageMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateImageMetadata";
    encode(message: UpdateImageMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateImageMetadata;
    fromJSON(object: any): UpdateImageMetadata;
    toJSON(message: UpdateImageMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateImageMetadata>): UpdateImageMetadata;
};
export declare const DeleteImageRequest: {
    $type: "yandex.cloud.compute.v1.DeleteImageRequest";
    encode(message: DeleteImageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteImageRequest;
    fromJSON(object: any): DeleteImageRequest;
    toJSON(message: DeleteImageRequest): unknown;
    fromPartial(object: DeepPartial<DeleteImageRequest>): DeleteImageRequest;
};
export declare const DeleteImageMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteImageMetadata";
    encode(message: DeleteImageMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteImageMetadata;
    fromJSON(object: any): DeleteImageMetadata;
    toJSON(message: DeleteImageMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteImageMetadata>): DeleteImageMetadata;
};
export declare const ListImageOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListImageOperationsRequest";
    encode(message: ListImageOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListImageOperationsRequest;
    fromJSON(object: any): ListImageOperationsRequest;
    toJSON(message: ListImageOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListImageOperationsRequest>): ListImageOperationsRequest;
};
export declare const ListImageOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListImageOperationsResponse";
    encode(message: ListImageOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListImageOperationsResponse;
    fromJSON(object: any): ListImageOperationsResponse;
    toJSON(message: ListImageOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListImageOperationsResponse>): ListImageOperationsResponse;
};
/** A set of methods for managing Image resources. */
export declare const ImageServiceService: {
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.ImageService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetImageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetImageRequest;
        readonly responseSerialize: (value: Image) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Image;
    };
    /** Returns the latest image that is part of an image family. */
    readonly getLatestByFamily: {
        readonly path: "/yandex.cloud.compute.v1.ImageService/GetLatestByFamily";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetImageLatestByFamilyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetImageLatestByFamilyRequest;
        readonly responseSerialize: (value: Image) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Image;
    };
    /** Retrieves the list of Image resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.ImageService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListImagesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListImagesRequest;
        readonly responseSerialize: (value: ListImagesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListImagesResponse;
    };
    /**
     * Creates an image in the specified folder.
     *
     * You can create an image from a disk, snapshot, other image or URI.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.ImageService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateImageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateImageRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified image. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.ImageService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateImageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateImageRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified image.
     *
     * Deleting an image removes its data permanently and is irreversible.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.ImageService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteImageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteImageRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified image. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.ImageService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListImageOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListImageOperationsRequest;
        readonly responseSerialize: (value: ListImageOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListImageOperationsResponse;
    };
};
export interface ImageServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: handleUnaryCall<GetImageRequest, Image>;
    /** Returns the latest image that is part of an image family. */
    getLatestByFamily: handleUnaryCall<GetImageLatestByFamilyRequest, Image>;
    /** Retrieves the list of Image resources in the specified folder. */
    list: handleUnaryCall<ListImagesRequest, ListImagesResponse>;
    /**
     * Creates an image in the specified folder.
     *
     * You can create an image from a disk, snapshot, other image or URI.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateImageRequest, Operation>;
    /** Updates the specified image. */
    update: handleUnaryCall<UpdateImageRequest, Operation>;
    /**
     * Deletes the specified image.
     *
     * Deleting an image removes its data permanently and is irreversible.
     */
    delete: handleUnaryCall<DeleteImageRequest, Operation>;
    /** Lists operations for the specified image. */
    listOperations: handleUnaryCall<ListImageOperationsRequest, ListImageOperationsResponse>;
}
export interface ImageServiceClient extends Client {
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get(request: GetImageRequest, callback: (error: ServiceError | null, response: Image) => void): ClientUnaryCall;
    get(request: GetImageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Image) => void): ClientUnaryCall;
    get(request: GetImageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Image) => void): ClientUnaryCall;
    /** Returns the latest image that is part of an image family. */
    getLatestByFamily(request: GetImageLatestByFamilyRequest, callback: (error: ServiceError | null, response: Image) => void): ClientUnaryCall;
    getLatestByFamily(request: GetImageLatestByFamilyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Image) => void): ClientUnaryCall;
    getLatestByFamily(request: GetImageLatestByFamilyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Image) => void): ClientUnaryCall;
    /** Retrieves the list of Image resources in the specified folder. */
    list(request: ListImagesRequest, callback: (error: ServiceError | null, response: ListImagesResponse) => void): ClientUnaryCall;
    list(request: ListImagesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListImagesResponse) => void): ClientUnaryCall;
    list(request: ListImagesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListImagesResponse) => void): ClientUnaryCall;
    /**
     * Creates an image in the specified folder.
     *
     * You can create an image from a disk, snapshot, other image or URI.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateImageRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateImageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateImageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified image. */
    update(request: UpdateImageRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateImageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateImageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified image.
     *
     * Deleting an image removes its data permanently and is irreversible.
     */
    delete(request: DeleteImageRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteImageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteImageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified image. */
    listOperations(request: ListImageOperationsRequest, callback: (error: ServiceError | null, response: ListImageOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListImageOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListImageOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListImageOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListImageOperationsResponse) => void): ClientUnaryCall;
}
export declare const ImageServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => ImageServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
